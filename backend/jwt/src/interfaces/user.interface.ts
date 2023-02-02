import mongoose, { Types } from "mongoose";

export interface UserDocument extends mongoose.Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword: (password: string) => Promise<boolean>;
}

export interface CreateUserResponse {
  _id: Types.ObjectId;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
