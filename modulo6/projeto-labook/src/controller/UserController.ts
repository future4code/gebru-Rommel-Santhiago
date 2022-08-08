import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/user";
import bcrypt from "bcrypt";

export class UserController {
  constructor(private userBusiness: UserBusiness){}

  public createUser = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);

      const input: UserInputDTO = {
        name,
        email,
        password: passwordHash
      };
      
      await this.userBusiness.createUser(input);

      res.status(201).send({ message: "Usuário criado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
