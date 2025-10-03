import { connectDB } from "./db.js";
import { ObjectId } from "mongodb";

const seed = async () => {
  const db = await connectDB();

  const users = db.collection("users");
  const projects = db.collection("projects");
  const checkins = db.collection("checkins");

  // Clear existing data
  await users.deleteMany({});
  await projects.deleteMany({});
  await checkins.deleteMany({});

  // Users
  const insertedUsers = await users.insertMany([
    { _id: new ObjectId(), name: "Alice", email: "alice@test.com", username: "alice123", bio: "Frontend dev", password: "password1" },
    { _id: new ObjectId(), name: "Bob", email: "bob@test.com", username: "bob456", bio: "Backend dev", password: "password2" },
  ]);

  // Access insertedIds properly
  const aliceId = insertedUsers.insertedIds["0"];
  const bobId = insertedUsers.insertedIds["1"];

  // Projects
  const insertedProjects = await projects.insertMany([
    { _id: new ObjectId(), name: "Awesome Project", description: "This is Alice's project", ownerId: aliceId, members: [aliceId], hashtags: ["#frontend"], image: "" },
    { _id: new ObjectId(), name: "Cool Project", description: "This is Bob's project", ownerId: bobId, members: [bobId], hashtags: ["#backend"], image: "" },
  ]);

  const project1Id = insertedProjects.insertedIds["0"];
  const project2Id = insertedProjects.insertedIds["1"];

  // Check-ins
  await checkins.insertMany([
    { projectId: project1Id, message: "Initial commit", userId: aliceId, timestamp: new Date() },
    { projectId: project1Id, message: "Added README", userId: bobId, timestamp: new Date() },
    { projectId: project2Id, message: "Started backend setup", userId: bobId, timestamp: new Date() },
  ]);

  console.log("Database seeded successfully!");
  process.exit();
};

seed();
