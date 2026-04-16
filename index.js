import app from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.config.js";
dotenv.config();


const port = process.env.PORT || 8000;

const startServer = async () => {
    try {
        await connectDB();
        console.log("MongoDB connected successfully");

        app.listen(port,() => {
            console.log(`Server is running at http://localhost:${port}`)
        })
    } catch (error) {
        console.log("Server connection is failed ", error.message);
    }
};

startServer();