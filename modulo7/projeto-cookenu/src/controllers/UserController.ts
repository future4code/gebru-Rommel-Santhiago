import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../models/user";

export class UserController {
      constructor(private userBusiness: UserBusiness){}

      public signup = async (req: Request, res: Response) => {
        try {
          const { name, email, password } = req.body;

          const input: UserInputDTO = {
            name,
            email,
            password
          };

          const token = await this.userBusiness.signup(input);

          res.status(201).send({ message: `Usuário ${input.name} criado com sucesso!`, token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };
}