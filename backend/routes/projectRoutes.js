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
};
