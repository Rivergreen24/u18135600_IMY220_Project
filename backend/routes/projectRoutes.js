// routes/projectRoutes.js
export const projectRoutes = (app, db) => {

  // Get all projects
  app.get("/api/projects", async (req, res) => {
    try {
      const projects = await db.collection("projects").find({}).toArray();
      res.json(projects);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Create a new project
  app.post("/api/projects", async (req, res) => {
    try {
      const project = { ...req.body, owner: "user1", checkins: [] };
      const result = await db.collection("projects").insertOne(project);
      res.json({ id: result.insertedId });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Get a single project by ID
  app.get("/api/projects/:id", async (req, res) => {
    try {
      const project = await db.collection("projects").findOne({ _id: req.params.id });
      if (!project) return res.status(404).json({ error: "Not found" });
      res.json(project);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Update a project (including adding a checkin)
  app.put("/api/projects/:id", async (req, res) => {
    try {
      const { checkin, ...updateFields } = req.body;

      const updateQuery = { $set: updateFields };
      if (checkin) {
        updateQuery.$push = { checkins: { ...checkin, user: "user1", timestamp: new Date() } };
      }

      await db.collection("projects").updateOne({ _id: req.params.id }, updateQuery);

      res.json({ message: "Updated" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
};
