import { Request, Response } from "express";
import { CreateUserResponse } from "../interfaces/user.interface";
import { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../service/user.service";
import logger from "../utils/logger";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
): Promise<Response<CreateUserResponse>> {
  try {
    const user = await createUser(req.body);
    let userResponse: CreateUserResponse = {
      _id: user._id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    return res.send(userResponse);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
