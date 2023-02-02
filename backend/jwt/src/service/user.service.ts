import { DocumentDefinition } from "mongoose";
import { UserDocument } from "../interfaces/user.interface";
import UserModel from "../models/user.model";

export async function createUser(
  input: DocumentDefinition<
    Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
  >
) {
  try {
    return await UserModel.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
}
