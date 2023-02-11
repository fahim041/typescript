import { Request, Response } from "express";
import config from "config";
import {
  createSession,
  findSession,
  updateSession,
} from "../service/session.service";
import { validatePassword } from "../service/user.service";
import { signJWT } from "../utils/jwt.utils";
import { createSessionInput } from "../schema/session.schema";

export async function createUserSessionHandler(
  req: Request<{}, {}, createSessionInput["body"]>,
  res: Response
) {
  const user = await validatePassword(req.body);

  if (!user) return res.status(401).send("invalid email or password");

  const session = await createSession(user._id, req.get("user-agent") || "");

  const accessToken = signJWT(
    { ...user, session: session._id },
    { expiresIn: config.get("accessTokenTtl") }
  );

  const refershToken = signJWT(
    { ...user, session: session._id },
    { expiresIn: config.get("refereshTokenTtl") }
  );

  return res.send({ accessToken, refershToken });
}

export async function getUserSessionsHandler(req: Request, res: Response) {
  const sessions = await findSession({
    _id: res.locals.user.session,
    valid: true,
  });

  return res.send(sessions);
}

export async function deleteSessionHandler(req: Request, res: Response) {
  const sessionId = res.locals.user.session;

  await updateSession({ _id: sessionId }, { valid: false });

  return res.send({
    accessToken: null,
    refreshToken: null,
  });
}
