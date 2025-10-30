export const userRoutes = (app, db) => {
  
  // Get single user by userId
  app.get("/api/users/:id", async (req, res) => {
    try {
      const user = await db.collection("users").findOne({ userId: req.params.id });
      if (!user) return res.status(404).json({ error: "User not found" });

      const publicInfo = {
        userId: user.userId,
        username: user.username,
        email: user.email || "",           
        bio: user.bio || "",
        friends: user.friends || [],
        createdProjects: user.createdProjects || [],
        savedProjects: user.savedProjects || [],
      };

      res.json(publicInfo);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Get multiple users by userIds
  app.get("/api/users", async (req, res) => {
    try {
      const idsQuery = req.query.ids;
      if (!idsQuery) return res.status(400).json({ error: "No user IDs provided" });

      const ids = idsQuery.split(",");
      const users = await db
        .collection("users")
        .find({ userId: { $in: ids } })
        .toArray();

      const publicUsers = users.map((u) => ({
        userId: u.userId,
        username: u.username,
        email: u.email || "",             
        bio: u.bio || "",
        friends: u.friends || [],
        createdProjects: u.createdProjects || [],
        savedProjects: u.savedProjects || [],
      }));

      res.json(publicUsers);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Update user profile
  app.put("/api/users/:id", async (req, res) => {
    try {
      const { username, bio, email } = req.body;  
      const userId = req.params.id;

      const updateFields = {};
      if (username !== undefined) updateFields.username = username;
      if (bio !== undefined) updateFields.bio = bio;
      if (email !== undefined) updateFields.email = email; 

      if (Object.keys(updateFields).length === 0) {
        return res.status(400).json({ error: "No fields to update" });
      }

      const updatedUser = await db.collection("users").findOneAndUpdate(
        { userId },
        { $set: updateFields },
        { returnDocument: "after" }
      );

      if (!updatedUser.value) {
        return res.status(404).json({ error: "User not found" });
      }

    
      const u = updatedUser.value;
      res.json({
        userId: u.userId,
        username: u.username,
        email: u.email || "",            
        bio: u.bio || "",
        friends: u.friends || [],
        createdProjects: u.createdProjects || [],
        savedProjects: u.savedProjects || [],
      });
    } catch (err) {
      console.error("Error updating user:", err);
      res.status(500).json({ error: err.message });
    }
  });
};