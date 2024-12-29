import mongoose from 'mongoose';

const connectDB = async () => {
    // console.log(process.env.MONGO_URI)
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error: ", error.message);
    process.exit(1);
  }
};

export default connectDB;