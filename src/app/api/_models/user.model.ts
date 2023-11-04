import mongoose from "mongoose";

export interface User extends mongoose.Document {
  username: String;
  email: String;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new mongoose.Schema<User>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
