import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

async function connect() {
  const dbUri: string = config.get("dbUri");

  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(dbUri);
    logger.info("DB connected");
  } catch (err) {
    logger.error("Database connected failed!");
    process.exit(1);
  }
}

export default connect;
