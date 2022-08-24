import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, LoginInputDTO, UserInputDTO } from "../model/user";

export class UserController {
      constructor(private userBusiness: UserBusiness){}

      public signup = async (req: Request, res: Response) => {
        try {
          const { name, nickname, email, password, role } = req.body;

          const input: UserInputDTO = {
            name,
            nickname,
            email,
            password,
            role
          };

          const token = await this.userBusiness.signup(input);

          res.status(201).send({ message: `Usuário ${input.name} criado com sucesso!`, token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };

      public login = async (req: Request, res: Response) => {
        try {
          const { email, password } = req.body;
    
          const input: LoginInputDTO = {
            email,
            password,
          };

          const token = await this.userBusiness.login(input);
    
          res.status(200).send({token});
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };

      public editUser = async (req: Request, res: Response) => {
        try {
          const token = req.headers.authorization as string
          const input: EditUserInputDTO = {
            name: req.body.name,
            nickname: req.body.nickname,
            id: req.params.id
          };

          await this.userBusiness.editUser(input, token);
    
          res.status(201).send({ message: "Usuário alterado!" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };
      
      public profile = async (req: Request, res: Response) => {
        try {
          const token = req.headers.authorization as string;

          const userInfo = await this.userBusiness.profile(token);

          res.status(200).send(userInfo)
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }
}
