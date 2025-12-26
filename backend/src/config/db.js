import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongo db connected");
  } catch (error) {
    console.error("Error connecting to mongo db:", error);
    process.exit(1);
  }
};
