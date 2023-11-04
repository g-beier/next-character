import mongoose, { ObjectId } from "mongoose";

export interface Character extends mongoose.Document {
  user: ObjectId;
  name: String;
  level: Number;
}

const CharacterSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
    maxLength: 24,
  },
});

export default mongoose.models.Character ||
  mongoose.model("Character", CharacterSchema);
