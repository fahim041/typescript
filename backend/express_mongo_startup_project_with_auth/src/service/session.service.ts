import { FilterQuery, UpdateQuery } from "mongoose";
import { get } from "lodash";
import config from "config";
import Session, { SessionDocument } from "../models/session.model";
import { signJWT, verifyJWT } from "../utils/jwt.utils";
import { findUser } from "./user.service";

export async function createSession(userId: string, userAgent: string) {
  const session = await Session.create({ user: userId, userAgent });
  return session.toJSON();
}

export async function findSession(query: FilterQuery<SessionDocument>) {
  return Session.findOne(query).lean();
}

export async function updateSession(
  query: FilterQuery<SessionDocument>,
  update: UpdateQuery<SessionDocument>
) {
  return Session.updateOne(query, update);
}

export async function reIssueAccessToken(
  refreshToken: string
): Promise<string | false> {
  const { decoded } = verifyJWT(refreshToken);

  if (!decoded || !get(decoded, "session")) return false;

  const session = await Session.findById(get(decoded, "session"));

  if (!session || !session?.valid) return false;

  const user = await findUser({ _id: session.user });

  if (!user) return false;

  const accessToken = signJWT(
    { ...user, session: session._id },
    { expiresIn: config.get<string>("accessTokenTtl") }
  );

  return accessToken;
}
