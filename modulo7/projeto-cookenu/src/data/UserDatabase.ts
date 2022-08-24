import { UserRepository } from "../business/UserRepository";
import { CustomError } from "../errors/customErrors";
import { user } from "../models/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase implements UserRepository {
  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password
        })
        .into("Cookenu_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findUserByEmail = async (email: string): Promise<user> => {
    try {
      const result = await UserDatabase.connection("Cookenu_users")
        .select()
        .where({ email });

      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage || error.message);
    }
  }

  public async getUserById(id: string): Promise<any> {
    try {      
      const result = await UserDatabase.connection("Cookenu_users")
        .select("id", "name", "email")
        .where({ id });
  
      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}