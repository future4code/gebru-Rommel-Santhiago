import * as jwt from "jsonwebtoken";
import { Unauthorized } from "../errors/customErrors";

export type AuthenticationData = {
  id: string, 
  role: string
};

export class Authenticator {
  generateToken = (payload: AuthenticationData): string => {
    const token = jwt.sign(payload, process.env.JWT_KEY as string, {
      expiresIn: process.env.JWT_DURATION,
    });
    return token;
  };

  getTokenData = (token: string): AuthenticationData => {
    const payload = jwt.verify(
      token,
      process.env.JWT_KEY as string
    ) as AuthenticationData;
    
    return payload;
  };
};
