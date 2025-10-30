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

  // Get a single project by projectId
  app.get("/api/projects/:id", async (req, res) => {
    try {
      const projectId = req.params.id;
      const project = await db.collection("projects").findOne({ projectId });

      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }

      res.json(project);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Create a new project
  app.post("/api/projects", async (req, res) => {
    try {
      const project = { ...req.body, checkins: [] };
      const result = await db.collection("projects").insertOne(project);
      res.json({ projectId: project.projectId || result.insertedId });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Update project (PUT)
  app.put("/api/projects/:id", async (req, res) => {
    try {
      const projectId = req.params.id;
      const update = req.body;

      const updatedProject = await db.collection("projects").findOneAndUpdate(
        { projectId },
        { $set: update },
        { returnDocument: "after" }
      );

      if (!updatedProject.value) return res.status(404).json({ error: "Project not found" });

      res.json(updatedProject.value);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.delete("/api/projects/:id/members", async (req, res) => {
    try {
      const { userId } = req.body;
      if (!userId) return res.status(400).json({ error: "userId is required" });

      const result = await db.collection("projects").findOneAndUpdate(
        { projectId: req.params.id },
        { $pull: { members: userId } },
        { returnDocument: "after" }
      );

      // if (!result.value) {
      //   return res.status(404).json({ error: "Project not found" });
      // }

      res.json(result.value); // always valid JSON
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


  app.post("/api/projects/:id/members", async (req, res) => {
    const { userId } = req.body;
    const result = await db.collection("projects").findOneAndUpdate(
      { projectId: req.params.id },
      { $addToSet: { members: userId } },
      { returnDocument: "after" }
    );
    res.json(result.value);
  });

  app.put("/api/projects/:id/owner", async (req, res) => {
    const { newOwnerId } = req.body;
    const result = await db.collection("projects").findOneAndUpdate(
      { projectId: req.params.id },
      { $set: { owner: newOwnerId } },
      { returnDocument: "after" }
    );
    res.json(result.value);
  });

  // Delete project
  app.delete("/api/projects/:id", async (req, res) => {
    await db.collection("projects").deleteOne({ projectId: req.params.id });
    res.json({ success: true });
  });


app.get("/api/projects/search", async (req, res) => {
  const q = (req.query.q || "").trim();
  if (!q) return res.json([]);

  try {
    const projects = await db.collection("projects").find({
      name: { $regex: q, $options: "i" } // Only name
    }).limit(10).toArray();

    res.json(projects);
  } catch (err) {
    console.error("Project search error:", err);
    res.status(500).json({ error: "Search failed" });
  }
});

  // SEARCH USERS
  app.get("/api/users/search", async (req, res) => {
    const q = (req.query.q || "").trim();
    if (!q) return res.json([]);

    const users = await db.collection("users").find({
      $or: [
        { username: { $regex: q, $options: "i" } },
        { bio: { $regex: q, $options: "i" } }
      ]
    }).limit(10).toArray();

    res.json(users);
  });
};
