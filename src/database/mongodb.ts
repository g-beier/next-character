import mongoose from "mongoose";
let isConnected = false;

if (!process.env.MONGODB_URI) {
  console.error("Missing MONGODB_URI in .env");
}

const uri = process.env.MONGODB_URI as string;
const options: mongoose.ConnectOptions = {
  dbName: "tormenta20",
};

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Already connected");
    return;
  }

  try {
    await mongoose.connect(uri, options);
    isConnected = true;
  } catch (err) {
    console.error(err);
  }
};
