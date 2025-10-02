import { connectDB } from "./db.js";

const seed = async () => {
  const db = await connectDB();

  const users = db.collection("users");
  const projects = db.collection("projects");
  const checkins = db.collection("checkins");

  await users.deleteMany({});
  await projects.deleteMany({});
  await checkins.deleteMany({});

  // Users
  await users.insertMany([
    { name: "Alice", email: "alice@test.com", bio: "Hello, I am Alice" },
    { name: "Bob", email: "bob@test.com", bio: "Hello, I am Bob" },
  ]);

  // Projects
  await projects.insertMany([
    { name: "Project One", description: "First project", owner: "Alice" },
    { name: "Project Two", description: "Second project", owner: "Bob" },
  ]);

  // Check-ins
  await checkins.insertMany([
    { project: "Project One", message: "Initial commit", user: "Alice" },
    { project: "Project One", message: "Added README", user: "Bob" },
    { project: "Project Two", message: "Started backend", user: "Bob" },
  ]);

  console.log("Database seeded!");
  process.exit();
};

seed();