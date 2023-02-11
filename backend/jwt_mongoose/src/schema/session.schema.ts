import { object, string, TypeOf } from "zod";

export const createSessionSchema = object({
  body: object({
    email: string({
      required_error: "email is required",
    }).email("email is not valid"),
    password: string({
      required_error: "Password is required",
    }),
  }),
});

export type createSessionInput = TypeOf<typeof createSessionSchema>;
