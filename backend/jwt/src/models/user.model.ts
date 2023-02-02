import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import { UserDocument } from "../interfaces/user.interface";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  let user = this as UserDocument;
  if (!user.isModified) {
    return next();
  }

  const salt = await bcrypt.genSalt(config.get<number>("saltWorkFector"));
  const hash = await bcrypt.hashSync(user.password, salt);

  user.password = hash;
  return next();
});

userSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  const user = this as UserDocument;

  return bcrypt.compare(password, user.password).catch((e) => false);
};

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;