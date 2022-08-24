import * as jwt from "jsonwebtoken";
import { Unauthorized } from "../errors/customErrors";

export type AuthenticationData = {
  id: string, 
  role: string
};

export class Authenticator {
  generateToken = ({ id }: AuthenticationData): string => {
    const token = jwt.sign({ id }, process.env.JWT_KEY as string, {
      expiresIn: process.env.JWT_DURATION,
    });
    return token;
  };

  getTokenData = (token: string): AuthenticationData => {
    try {
      const payload = jwt.verify(
        token,
        process.env.JWT_KEY as string
      ) as AuthenticationData;
      return payload;
    } catch (error: any) {
      console.log(error.message)
      throw new Unauthorized()
    };
  };
};
