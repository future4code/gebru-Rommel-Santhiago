import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, UserNotFound } from "../errors/customErrors";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
} from "../model/user";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/idGenerator";
import { UserRepository } from "./UserRepository";
import { HashGenerator } from "../services/HashGenerator";

const idGenerator = new IdGenerator();
const authenticator = new Authenticator();
const hashGenerator = new HashGenerator();

export class UserBusiness {
  constructor(private userDatabase: UserRepository) { }
  
  public signup = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, nickname, email, password } = input;

      if (!name || !nickname || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email" e "password"'
        );
      };

      if (name.length < 4) {
        throw new InvalidName();
      };

      if (password.length < 6) {
        throw new InvalidPassword();
      };

      const checkEmail = (email: string) => {
        let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        return regex.test(email);
      };

      if (!checkEmail(email)) {
          throw new InvalidEmail();
      };

      const id: string = idGenerator.generateId();

      const hashPassword = await hashGenerator.generateHash(password)

      const user: user = {
        id,
        name,
        nickname,
        email,
        password: hashPassword,
      };
      
      await this.userDatabase.insertUser(user);

      const token = authenticator.generateToken({ id });
      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    };
  };

  public login = async (input: any): Promise<string> => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(400, 'Preencha os campos "email" e "password"');
      };

      const checkEmail = (email: string) => {
        let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        return regex.test(email);
      };

      if (!checkEmail(email)) {
          throw new InvalidEmail();
      };

      const user = await this.userDatabase.findUserByEmail(email);

      if (!user) {
        throw new UserNotFound();
      };

      const hashCompare = await hashGenerator.compareHash(password, user.password)

      if(!hashCompare){ 
        throw new InvalidPassword()
      }

      const id = user.id;
      const token = authenticator.generateToken({ id});
      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    };
  };

  public editUser = async (input: EditUserInputDTO) => {
    try {
      const { name, nickname, id } = input;

      if (!name || !nickname || !id) {
        throw new CustomError(
          400,
          'Preencha os campos "id", "name" e "nickname"'
        );
      };

      if (name.length < 4) {
        throw new InvalidName();
      };

      const editUserInput: EditUserInput = {
        id,
        name,
        nickname,
      };

      await this.userDatabase.editUser(editUserInput);

    } catch (error: any) {
      throw new CustomError(400, error.message);
    };
  };

  public profile = async (token: string): Promise<string> => {
    try {      
      const { id } = authenticator.getTokenData(token);
  
      const userId = await this.userDatabase.getUserById(id);

      return userId;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    };
  };
};
