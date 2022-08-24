import { CustomError, InvalidEmail, InvalidName, InvalidPassword, RegisteredUser, Unauthorized, UserNotFound } from "../errors/customErrors";
import { UserInputDTO, user } from "../models/user";
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
      let { name, email, password} = input;

      if (!name || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name", "email", "password"'
        );
      };

      if (name.length < 2) {
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

      const userExist = await this.userDatabase.findUserByEmail(email)

      if(userExist){
          throw new RegisteredUser()
      }
      const id: string = idGenerator.generateId();

      const hashPassword = await hashGenerator.generateHash(password)

      const user: user = {
        id,
        name,
        email,
        password: hashPassword
      };
      
      await this.userDatabase.insertUser(user);

      const token = authenticator.generateToken({id});
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
        role: user.role as string
      }

      const access_token = authenticator.generateToken(payload);

      return access_token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    };
  };

  public profile = async (token: string): Promise<string> => {
    try {      
      const tokenData = authenticator.getTokenData(token)
  
      if(!tokenData) {
        throw new Unauthorized()
      }
  
      const userId = await this.userDatabase.getUserById(tokenData.id);

      return userId;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    };
  };

  public getProfile = async (id: string, token: string): Promise<string> => {
    try {      
      const tokenData = authenticator.getTokenData(token)

      if (!id || !token) {
        throw new CustomError(
          400,
          'Preencha os campos "id" e "token"'
        );
      };

      if(!tokenData) {
        throw new Unauthorized()
      }

      const user = await this.userDatabase.getUserById(id)
      
      if(!user){
        throw new UserNotFound()
      }

      return user;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    };
  };
}