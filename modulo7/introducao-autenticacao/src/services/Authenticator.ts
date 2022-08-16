import * as jwt from "jsonwebtoken";

export type AuthenticationData = {
  id: string,
};

export class Authenticator {
  generateToken = ({ id }: AuthenticationData): string => {
    const token = jwt.sign({ id }, process.env.JWT_KEY as string, {
      expiresIn: process.env.JWT_DURATION,
    });
    return token;
  };
};
