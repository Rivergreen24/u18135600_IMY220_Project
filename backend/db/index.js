// db/index.js
import { MongoClient } from "mongodb";

const uri = "mongodb+srv://DTStevens:jhYNdUnCPHU6xQLn@imy220.r3kp7ip.mongodb.net/?retryWrites=true&w=majority&appName=IMY220";
const client = new MongoClient(uri);
let db;

async function connectAndSeed() {
  console.log('MongoDB connection established successfully');
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
    throw err;
  }
}

// Export db and connect function
export { db, connectAndSeed };