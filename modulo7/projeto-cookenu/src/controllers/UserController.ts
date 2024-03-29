import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { LoginInputDTO, UserInputDTO } from "../models/user";

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

      public login = async (req: Request, res: Response) => {
        try {
          const { email, password } = req.body;
    
          const input: LoginInputDTO = {
            email,
            password,
          };

          const access_token = await this.userBusiness.login(input);
    
          res.status(200).send({access_token});
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

      public getProfile = async (req: Request, res: Response) => {
        try {
          const token = req.headers.authorization as string;
          const { id } = req.params

          const user = await this.userBusiness.getProfile(id, token);

          res.status(200).send(user)
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }

      public followFriends = async (req: Request, res: Response) => {
        try {
          const token = req.headers.authorization as string;
          const { userToFollowId } = req.body
    
          await this.userBusiness.followFriends(userToFollowId, token);
    
          res.status(200).send({ message: "Amizade criada com sucesso!" })
        } catch (error: any) {
          res.status(400).send(error.message);
        };
      };

      public unfollow = async (req: Request, res: Response) => {
        try {
          const token = req.headers.authorization as string;
          const { userToUnfollowId } = req.body

          await this.userBusiness.unfollow(token, userToUnfollowId);
    
          res.status(200).send({ message: "Amizade deletada com sucesso!" })
        } catch (error: any) {
          res.status(400).send(error.message);
        };
      };
}