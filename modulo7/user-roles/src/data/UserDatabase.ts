import { UserRepository } from "../business/UserRepository";
import { CustomError } from "../errors/customErrors";
import { EditUserInput, user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase implements UserRepository {
  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          nickname: user.nickname,
          email: user.email,
          password: user.password,
          role: user.role
        })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (user: EditUserInput) => {
    try {
      await UserDatabase.connection
        .update({ name: user.name, nickname: user.nickname })
        .where({ id: user.id })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findUserByEmail = async (email: string): Promise<user> => {
    try {
      const result = await UserDatabase.connection("Auth_users")
        .select()
        .where({ email });

      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public async getUserById(id: string): Promise<any> {
    try {      
      const result = await UserDatabase.connection("Auth_users")
        .select("id", "email")
        .where({ id });
  
      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
};
