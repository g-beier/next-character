import mongoose from "mongoose";

export interface Skills extends mongoose.Document {
  name: string;
  desc: string;
  attr:
    | "attr_for"
    | "attr_des"
    | "attr_con"
    | "attr_int"
    | "attr_sab"
    | "attr_car";
  training?: boolean;
  armor?: boolean;
}

const SkillSchema = new mongoose.Schema<Skills>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    attr: {
      type: String,
      enum: [
        "attr_for",
        "attr_des",
        "attr_con",
        "attr_int",
        "attr_sab",
        "attr_car",
      ],
      required: true,
    },
    training: {
      type: Boolean,
      default: false,
    },
    armor: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

export default mongoose.models.Skill ||
  mongoose.model<Skills>("Skill", SkillSchema);
