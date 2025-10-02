import { MongoClient } from "mongodb";

const uri = "mongodb+srv://DTStevens:jhYNdUnCPHU6xQLn@imy220.r3kp7ip.mongodb.net/?retryWrites=true&w=majority&appName=IMY220"; // MongoDB Atlas or local
const client = new MongoClient(uri);
const dbName = "alyxxDB";

let db;

export const connectDB = async () => {
    if (!db) {
        try {
            await client.connect();
            db = client.db(dbName);
            console.log("Connected to MongoDB:", dbName);
        } catch (err) {
            console.error("MongoDB connection error:", err);
        }
    }
    return db;
};
