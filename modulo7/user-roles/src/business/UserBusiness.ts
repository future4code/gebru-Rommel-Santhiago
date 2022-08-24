import { CustomError, InvalidEmail, InvalidName, InvalidPassword, UnathorizedUser, UserNotFound } from "../errors/customErrors";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
} from "../model/user";
import { AuthenticationData, Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/idGenerator";
import { UserRepository } from "./UserRepository";
import { HashGenerator } from "../services/HashGenerator";

const idGenerator = new IdGenerator();
const authenticator = new Authenticator();
const hashGenerator = new HashGenerator();

export class UserBusiness {
  constructor(private userDatabase: UserRepository) {}
  
  public signup = async (input: UserInputDTO): Promise<string> => {
    try {
      let { name, nickname, email, password, role } = input;

      if (!name || !nickname || !email || !password || !role) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email", "password" e "role"'
        );
      };

      if (name.length < 4) {
        throw new InvalidName();
      };

      if (password.length < 6) {
        throw new InvalidPassword();
      };

      if (role !== "normal" && role !== "admin"){
        role = "normal"
      }

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
        role
      };
      
      await this.userDatabase.insertUser(user);

      const token = authenticator.generateToken({id, role});
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

      const payload :AuthenticationData = {
        id: user.id, 
        role: user.role
      }

      const token = authenticator.generateToken(payload);

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    };
  };

  public editUser = async (input: EditUserInputDTO, token: string) => {
    try {
      const { name, nickname, id } = input;

      if (!name || !nickname || !id || !token) {
        throw new CustomError(
          400,
          'Preencha os campos "id", "name", "nickname" e "token"'
        );
      };

      if (name.length < 4) {
        throw new InvalidName();
      };

      const userExist = await this.userDatabase.getUserById(id)
      if(!userExist){
        throw new UserNotFound()
      }
  
      const tokenData = authenticator.getTokenData(token)
  
      if(tokenData.role !== "admin") {
        throw new UnathorizedUser()
      }

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
      const tokenData = authenticator.getTokenData(token)
  
      if(tokenData.role !== "normal") {
        throw new UnathorizedUser()
      }
  
      const userId = await this.userDatabase.getUserById(tokenData.id);

      return userId;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    };
  };
};
