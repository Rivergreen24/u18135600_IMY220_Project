import express from "express";
import path from "path";
import cors from "cors";

import { MongoClient, ObjectId } from "mongodb";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("./frontend/public")); //changed to "./frontend/public" instead of "public" this so that it actually hmmm


const uri = "mongodb+srv://DTStevens:jhYNdUnCPHU6xQLn@imy220.r3kp7ip.mongodb.net/?retryWrites=true&w=majority&appName=IMY220"; // Atlas or local
const client = new MongoClient(uri);
let db, users;

async function connectAndSeed() {
  try {
    await client.connect();
    db = client.db('simpledb');
    console.log('Mongo connected');

    // Seed once (check counts)
    const usersColl = db.collection('users');
    const projectsColl = db.collection('projects');
    if (await usersColl.countDocuments() === 0) {
      console.log('Seeding data...');
      await usersColl.insertMany([
        { _id: 'user1', username: 'alice', email: 'alice@test.com', password: 'Password1' },
        { _id: 'user2', username: 'bob', email: 'bob@test.com', password: 'Password2' }
      ]);
      await projectsColl.insertMany([
        { 
          _id: 'proj1', 
          name: 'Alpha', 
          description: 'Desc1', 
          owner: 'user1', 
          checkins: [{ message: 'Check1', user: 'user1' }] 
        },
        { 
          _id: 'proj2', 
          name: 'Beta', 
          description: 'Desc2', 
          owner: 'user2', 
          checkins: [
            { message: 'Check2', user: 'user2' }, 
            { message: 'Check3', user: 'user1' } 
          ] 
        }
      ]);
      console.log('Seeded!');
    }
  } catch (err) {
    console.error('Connection/seed error:', err);
  }
}

// Connect & seed on startup
connectAndSeed();



// Routes: Auth (login/signup)
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db.collection('users').findOne({ email });

    if (user && user.password === password) {
      res.json({
        success: true,               
        message: "Login successful",  
        user: {
          id: user._id,
          username: user.username,
          email: user.email
        }
      });
    } else {
      res.status(401).json({
        success: false,              
        message: "Invalid credentials"
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message
    });
  }
});

app.post('/api/auth/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const result = await db.collection('users').insertOne({ username, email, password });
    res.json({ user: { id: result.insertedId, username, email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get('/api/users/:id', async (req, res) => {
  try {
    const targetId = req.params.id === 'me' ? 'user1' : req.params.id;
    const user = await db.collection('users').findOne({ _id: targetId });
    res.json(user || { error: 'Not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/users/:id', async (req, res) => {
  try {
    const targetId = req.params.id === 'me' ? 'user1' : req.params.id;
    await db.collection('users').updateOne({ _id: targetId }, { $set: req.body });
    res.json({ message: 'Updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get('/api/projects', async (req, res) => {
  try {
    const projects = await db.collection('projects').find({}).toArray();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/projects', async (req, res) => {
  try {
    const project = { ...req.body, owner: 'user1', checkins: [] }; 
    const result = await db.collection('projects').insertOne(project);
    res.json({ id: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/projects/:id', async (req, res) => {
  try {
    const project = await db.collection('projects').findOne({ _id: req.params.id });
    res.json(project || { error: 'Not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/projects/:id', async (req, res) => { 
  try {
    const { checkin } = req.body;  
    await db.collection('projects').updateOne(
      { _id: req.params.id },
      { 
        $set: req.body,  // For other updates
        $push: { checkins: { ...checkin, user: 'user1', timestamp: new Date() } }  
      }
    );
    res.json({ message: 'Updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/{*any}', (req, res) => // why does it not like this being "*"?
  res.sendFile(path.join(__dirname, '../frontend/public', 'index.html')) //added this in and now it works out, huzzah!, why is it not working with ../
);

// app.get('/{*any}', (req,res) => 
//   res.sendFile(path.resolve('./frontend/public','index.html')) //added this in and now it works out, huzzah!, why is it not working with ../
// );

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

