import express from "express";
import path from "path";
import cors from "cors";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

import { authRoutes } from "./routes/authRoutes.js";
import { projectRoutes } from "./routes/projectRoutes.js";

// Connect & seed on startup

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
    db = client.db("simpledb");
    console.log("✅ MongoDB connected");

    // Pass db to routes if needed
    // const db = getDb(); // only needed if your routes use db internally
    authRoutes(app, db);
    projectRoutes(app, db);

    // Serve frontend
    app.get('/{*any}', (req, res) => // why does it not like this being "*"?
      res.sendFile(path.join(__dirname, '../frontend/public', 'index.html')) //added this in and now it works out, huzzah!, why is it not working with ../
    );

    // Start server only after DB is ready
    app.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err);
    process.exit(1); // optional: exit if DB fails
  }
}

startServer();