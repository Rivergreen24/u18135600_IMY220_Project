import express from "express";
import path from "path";
import cors from "cors";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

import { authRoutes } from "./routes/authRoutes.js";
import { projectRoutes } from "./routes/projectRoutes.js";
import { userRoutes } from "./routes/userRoutes.js";

// Connect & seed on startup
// async function seedDatabase(db) {
//   const usersColl = db.collection("users");
//   const projectsColl = db.collection("projects");

//   // Only seed if both collections are empty
//   const userCount = await usersColl.countDocuments();
//   const projectCount = await projectsColl.countDocuments();

//   if (userCount > 0 || projectCount > 0) {
//     console.log("Database already seeded – skipping.");
//     return;
//   }

//   // === Seed Users ===
//   const users = [
//     {
//       userId: "u001",
//       username: "alice",
//       email: "alice@test.com",
//       password: "Password1",
//       bio: "Frontend developer and designer",
//       profileImage: "/images/alice.jpg",
//       friends: ["u002", "u003"],
//       savedProjects: ["p002", "p003"],
//       createdProjects: ["p001"],
//       createdAt: new Date()
//     },
//     {
//       userId: "u002",
//       username: "bob",
//       email: "bob@test.com",
//       password: "Password2",
//       bio: "Backend enthusiast",
//       profileImage: "/images/bob.jpg",
//       friends: ["u001"],
//       savedProjects: ["p001"],
//       createdProjects: ["p002"],
//       createdAt: new Date()
//     },
//     {
//       userId: "u003",
//       username: "charlie",
//       email: "charlie@test.com",
//       password: "Password3",
//       bio: "Fullstack developer",
//       profileImage: "/images/charlie.jpg",
//       friends: ["u001"],
//       savedProjects: [],
//       createdProjects: ["p003"],
//       createdAt: new Date()
//     }
//   ];

//   await usersColl.insertMany(users);
//   console.log("Users seeded");


//   const projects = [
//     {
//       projectId: "p001",
//       name: "Alpha",
//       description: "AI-based task tracker for students",
//       owner: "u001",
//       members: ["u001", "u002"],
//       hashtags: ["#ai", "#task", "#student"],
//       type: "Web App",
//       version: "1.0",
//       createdAt: new Date(),
//       updatedAt: new Date(),
//       image: "/images/projects/alpha.png",
//       status: "checked_in",
//       checkins: [
//         { user: "u001", message: "Initial commit", timestamp: new Date() },
//         { user: "u002", message: "Added login form", timestamp: new Date() }
//       ],
//       files: [
//         { name: "index.html", url: "/files/alpha/index.html" },
//         { name: "style.css", url: "/files/alpha/style.css" }
//       ],
//       discussion: [
//         { user: "u002", message: "Should we add a light mode?", timestamp: new Date() }
//       ]
//     },
//     {
//       projectId: "p002",
//       name: "Beta",
//       description: "Student project manager",
//       owner: "u002",
//       members: ["u002", "u001", "u003"],
//       hashtags: ["#manager", "#tasks", "#team"],
//       type: "Web App",
//       version: "1.0",
//       createdAt: new Date(),
//       updatedAt: new Date(),
//       image: "/images/projects/beta.png",
//       status: "checked_out",
//       checkins: [
//         { user: "u002", message: "Created base project", timestamp: new Date() },
//         { user: "u001", message: "UI tweaks", timestamp: new Date() }
//       ],
//       files: [
//         { name: "app.js", url: "/files/beta/app.js" }
//       ],
//       discussion: []
//     },
//     {
//       projectId: "p003",
//       name: "Gamma",
//       description: "Collaboration tool for developers",
//       owner: "u003",
//       members: ["u003", "u001"],
//       hashtags: ["#collab", "#dev", "#tools"],
//       type: "Web App",
//       version: "1.0",
//       createdAt: new Date(),
//       updatedAt: new Date(),
//       image: "/images/projects/gamma.png",
//       status: "checked_in",
//       checkins: [
//         { user: "u003", message: "Initial setup", timestamp: new Date() }
//       ],
//       files: [],
//       discussion: []
//     }
//   ];

//   await projectsColl.insertMany(projects);
//   console.log("Projects seeded");
// }


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("./frontend/public")); //changed to "./frontend/public" instead of "public" this so that it actually hmmm

// MongoDB connection string
const uri = "mongodb+srv://DTStevens:jhYNdUnCPHU6xQLn@imy220.r3kp7ip.mongodb.net/?retryWrites=true&w=majority&appName=IMY220";
const client = new MongoClient(uri);
let db; // will hold the database instance

// app.get('/{*any}', (req, res) => // why does it not like this being "*"?
//   res.sendFile(path.join(__dirname, '../frontend/public', 'index.html')) //added this in and now it works out, huzzah!, why is it not working with ../
// );

// app.listen(port, () => {
//   console.log(`Listening on http://localhost:${port}`);
// });

async function startServer() {
  try {
    // Connect and seed the database
    await client.connect();
    db = client.db("simpledb4");
    console.log(" MongoDB connected");
    // await seedDatabase(db);
    // Pass db to routes if needed
    // const db = getDb(); // only needed if your routes use db internally
    authRoutes(app, db);
    projectRoutes(app, db);
    userRoutes(app, db);

    // Serve frontend
    app.get('/{*any}', (req, res) => // why does it not like this being "*"?
      res.sendFile(path.join(__dirname, '../frontend/public', 'index.html')) //added this in and now it works out, huzzah!, why is it not working with ../
    );

    // Start server only after DB is ready
    app.listen(port, () => {
      console.log(` Server running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error(" Failed to start server:", err);
    process.exit(1); // optional: exit if DB fails
  }
}

startServer();