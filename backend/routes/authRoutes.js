export const authRoutes = (app, db) => {
  // LOGIN
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await db.collection("users").findOne({ email });

      if (user && user.password === password) {
        res.json({
          success: true,
          message: "Login successful",
          user: {
            userId: user.userId, // <-- include this
            username: user.username,
            email: user.email
          }
        });
        console.log(`${user.username} logged in`);
      } else {
        res.status(401).json({ success: false, message: "Invalid credentials" });
      }
    } catch (err) {
      res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
  });

  // SIGNUP
  app.post("/api/auth/signup", async (req, res) => {
    try {
      const { username, email, password } = req.body;
      // Generate a userId here (or let frontend provide one if you want)
      const userId = `u${Date.now()}`; // simple unique id
      const result = await db.collection("users").insertOne({ userId, username, email, password });
      res.json({ user: { userId, username, email } });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
};
