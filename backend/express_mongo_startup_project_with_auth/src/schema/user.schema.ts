import { Types } from "mongoose";
import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    password: string({
      required_error: "Password is required",
    }).min(6, "Password is too short - should be 6 characters minimum"),
    passwordConfirmation: string({
      required_error: "Password Confirmation is required",
    }),
    email: string({
      required_error: "Email is required",
    }).email("Email is not valid"),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Password do not match",
    path: ["passwordConfirmation"],
  }),
});

export type createUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;

export type createUserResponse = {
  id: Types.ObjectId;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};
