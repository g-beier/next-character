import mongoose from "mongoose";

export interface Feats extends mongoose.Document {
  title: string;
  desc: string;
  require?: string;
  _require?: Object;
  type: string[];
}

const FeatSchema = new mongoose.Schema<Feats>(
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
    require: {
      type: String,
      required: function () {
        return Object.keys(this).includes("_require");
      },
    },
    _require: {
      type: Object,
      required: false,
    },
    type: {
      type: [String],
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.models.Feat ||
  mongoose.model<Feats>("Feat", FeatSchema);
