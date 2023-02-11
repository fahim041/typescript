import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

export default async function connect() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(config.get<string>("dbUri"));
    logger.info("Database connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
