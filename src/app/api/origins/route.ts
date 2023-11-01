import { connectToDatabase } from "@/database/mongodb";
import Origin from "../_models/origin.model";

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    const origins = await Origin.find({})
      .sort({ title: 1 })
      .populate({ path: "feats" });
    return Response.json(origins);
  } catch (err) {
    return Response.error();
  }
}
