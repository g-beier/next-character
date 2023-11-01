import { connectToDatabase } from "@/database/mongodb";
import Feat from "../_models/feat.model";

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    const feats = await Feat.find({}).sort({ title: 1 });
    return Response.json(feats);
  } catch (err) {
    return Response.error();
  }
}
