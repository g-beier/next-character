import { connectToDatabase } from "@/database/mongodb";
import Skill from "../_models/skill.model";

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    const skills = await Skill.find({}).sort({ name: 1 });
    return Response.json(skills);
  } catch (err) {
    return Response.error();
  }
}
