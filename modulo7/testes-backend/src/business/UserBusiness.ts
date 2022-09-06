import { CustomError, Unauthorized, UserNotFound } from "../errors/CustomError";
import { User, stringToUserRole } from "../model/User";
import { IHashGenerator, IIDGenerator, ITokenGenerator } from "./Ports";
import { UserRepository } from "./UserRepository";

export class UserBusiness {
   constructor(
      private userDatabase: UserRepository,
      private hashGenerator: IHashGenerator,
      private idGenerator: IIDGenerator,
      private tokenGenerator: ITokenGenerator
   ){}

   public async signup(
      name: string,
      email: string,
      password: string,
      role: string
   ) {
      try {
         if (!name || !email || !password) {
            throw new CustomError(422, "Missing input");
         }

         const checkEmail = (email: string) => {
            let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            return regex.test(email);
         };

         if (!checkEmail(email)) {
            throw new CustomError(422, "Invalid email");
         }

         if (password.length < 6) {
            throw new CustomError(422, "Invalid password");
         }

         if(role !== "NORMAL" && role !== "ADMIN"){
            role = "NORMAL"
         }

         const id = this.idGenerator.generate();

         const cypherPassword = await this.hashGenerator.hash(password);

         await this.userDatabase.createUser(
            new User(id, name, email, cypherPassword, stringToUserRole(role))
         );

         const accessToken = this.tokenGenerator.generate({
            id,
            role,
         });
         return { accessToken };
      } catch (error:any) {
         if (error.message.includes("key 'email'")) {
            throw new CustomError(409, "Email already in use")
         }

         throw new CustomError(error.statusCode, error.message)
      }
   }

   public async login(email: string, password: string) {
      try {
         if (!email || !password) {
            throw new CustomError(422, "Missing input");
         }

         const user = await this.userDatabase.getUserByEmail(email);

         if (!user) {
            throw new CustomError(401, "Invalid credentials");
         }

         const isPasswordCorrect = await this.hashGenerator.compareHash(
            password,
            user.getPassword()
         );

         if (!isPasswordCorrect) {
            throw new CustomError(401, "Invalid credentials");
         }

         const accessToken = this.tokenGenerator.generate({
            id: user.getId(),
            role: user.getRole(),
         });

         return { accessToken };
      } catch (error:any) {
         throw new CustomError(error.statusCode, error.message)
      }
   }

   public getUserById = async (id: string, token: string): Promise<User> => {
      try {
        const tokenData = this.tokenGenerator.verify(token)
  
        if (!id || !token) {
          throw new CustomError(
            400,
            'Preencha os campos "id" e "authorization"'
          );
        };
  
        if (!tokenData) {
          throw new Unauthorized()
        }
  
        const user = await this.userDatabase.getUserById(id)
  
        if (!user) {
          throw new UserNotFound()
        }
  
        return user;
      } catch (error: any) {
        throw new CustomError(error.statusCode, error.message);
      };
    };  
}
