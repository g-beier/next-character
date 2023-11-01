import mongoose, { ObjectId } from "mongoose";

export interface Origins extends mongoose.Document {
  title: string;
  desc: string;
  feats: ObjectId[];
  skills: ObjectId[];
  items: string[];
}

const OriginSchema = new mongoose.Schema<Origins>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    feats: {
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
      ref: "Feat",
    },
    skills: {
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
      // ref: "Skills"
    },
    items: {
      type: [String],
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.models.Origin ||
  mongoose.model<Origins>("Origin", OriginSchema);
