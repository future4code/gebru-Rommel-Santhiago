import { CustomError, InvalidEmail, InvalidName, InvalidPassword, RegisteredUser } from "../errors/customErrors";
import { UserInputDTO, user } from "../models/user";
import { Authenticator } from "../services/Authenticator";
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
}