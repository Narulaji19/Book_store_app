import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
//import path from "path"

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import res from "express/lib/response.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        //useNewUrlParser: true,
        //useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

//deployement
//if(process.env.NODE_ENV === "production") 
//app.get("/",(req, res) => {
 //   app.use(express.static(path.resolve(__dirname, "Frontend","build")));
//    res.sendFile(path.resolve(__dirname, "Frontend","build","index.html"));
//});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
}); 
/*

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

// Load environment variables
dotenv.config();

const app = express();

// Use ES module approach to resolve __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const URI = process.env.MongoDBURI;

console.log("MongoDB URI:", URI);  // Log MongoDB URI to check if it's loaded properly

// Connect to MongoDB
async function connectDB() {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

connectDB();

// Define routes for API
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Serve static files (always serve the frontend build)
app.use(express.static(path.resolve(__dirname, "Frontend", "dist")));

// Fallback for all routes, send "index.html" for any request to the frontend
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
});

// Start server
app.listen(process.env.PORT || 4001, () => {
    console.log(`Server is listening on port ${process.env.PORT || 4001}`);
});
*/

