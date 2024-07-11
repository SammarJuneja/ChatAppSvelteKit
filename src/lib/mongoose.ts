import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongo_uri);
        console.log("MongoDb is connected");
    } catch (error) {
        console.error(error);
    }
}

export default connectDB;