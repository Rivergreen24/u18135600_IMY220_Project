import { MongoClient } from "mongodb";

// Mongo URI
const uri = "mongodb+srv://DTStevens:jhYNdUnCPHU6xQLn@imy220.r3kp7ip.mongodb.net/?retryWrites=true&w=majority&appName=IMY220";
const client = new MongoClient(uri);
let db;

async function connectAndSeed() {
  try {
    await client.connect();
    db = client.db("simpledb3");
    console.log("✅ MongoDB connected");

    const usersColl = db.collection("users");
    const projectsColl = db.collection("projects");

    // Clear collections (optional, for fresh seed)
    await usersColl.deleteMany({});
    await projectsColl.deleteMany({});

    // Seed users
    const users = [
      {
        userId: "u001",
        username: "alice",
        email: "alice@test.com",
        password: "Password1",
        bio: "Frontend developer and designer",
        profileImage: "/images/alice.jpg",
        friends: ["u002", "u003"],
        savedProjects: ["p002", "p003"],
        createdProjects: ["p001"],
        createdAt: new Date()
      },
      {
        userId: "u002",
        username: "bob",
        email: "bob@test.com",
        password: "Password2",
        bio: "Backend enthusiast",
        profileImage: "/images/bob.jpg",
        friends: ["u001"],
        savedProjects: ["p001"],
        createdProjects: ["p002"],
        createdAt: new Date()
      },
      {
        userId: "u003",
        username: "charlie",
        email: "charlie@test.com",
        password: "Password3",
        bio: "Fullstack developer",
        profileImage: "/images/charlie.jpg",
        friends: ["u001"],
        savedProjects: [],
        createdProjects: ["p003"],
        createdAt: new Date()
      }
    ];

    await usersColl.insertMany(users);
    console.log("✅ Users seeded");

    // Seed projects
    const projects = [
      {
        projectId: "p001",
        name: "Alpha",
        description: "AI-based task tracker for students",
        owner: "u001",
        members: ["u001", "u002"],
        hashtags: ["#ai", "#task", "#student"],
        type: "Web App",
        version: "1.0",
        createdAt: new Date(),
        updatedAt: new Date(),
        image: "/images/projects/alpha.png",
        status: "checked_in",
        checkins: [
          { user: "u001", message: "Initial commit", timestamp: new Date() },
          { user: "u002", message: "Added login form", timestamp: new Date() }
        ],
        files: [
          { name: "index.html", url: "/files/alpha/index.html" },
          { name: "style.css", url: "/files/alpha/style.css" }
        ],
        discussion: [
          { user: "u002", message: "Should we add a light mode?", timestamp: new Date() }
        ]
      },
      {
        projectId: "p002",
        name: "Beta",
        description: "Student project manager",
        owner: "u002",
        members: ["u002", "u001", "u003"],
        hashtags: ["#manager", "#tasks", "#team"],
        type: "Web App",
        version: "1.0",
        createdAt: new Date(),
        updatedAt: new Date(),
        image: "/images/projects/beta.png",
        status: "checked_out",
        checkins: [
          { user: "u002", message: "Created base project", timestamp: new Date() },
          { user: "u001", message: "UI tweaks", timestamp: new Date() }
        ],
        files: [
          { name: "app.js", url: "/files/beta/app.js" }
        ],
        discussion: []
      },
      {
        projectId: "p003",
        name: "Gamma",
        description: "Collaboration tool for developers",
        owner: "u003",
        members: ["u003", "u001"],
        hashtags: ["#collab", "#dev", "#tools"],
        type: "Web App",
        version: "1.0",
        createdAt: new Date(),
        updatedAt: new Date(),
        image: "/images/projects/gamma.png",
        status: "checked_in",
        checkins: [
          { user: "u003", message: "Initial setup", timestamp: new Date() }
        ],
        files: [],
        discussion: []
      }
    ];

    await projectsColl.insertMany(projects);
    console.log("✅ Projects seeded");

    return db; // optional if you need the db instance later
  } catch (err) {
    console.error("❌ Error seeding database:", err);
    throw err;
  }
}

export { db, connectAndSeed };
