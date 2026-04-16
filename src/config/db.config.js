import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";

const connectDB = async() => {
    try {
        const url = process.env.MONGO_URL;

        if(!url){
            throw new ApiError(
                500,
                "Mongo Url is missing"
            );
        }

        await mongoose.connect(url);
        console.log("MongoDB connected Successfully");

    } catch (error) {
        console.log("MongoDB connection error : ", error.message);
        throw error;
    }
}

export { connectDB };