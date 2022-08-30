import { UserRepository } from "../business/UserRepository";
import { CustomError } from "../errors/customErrors";
import { FollowFriend, Friends, user } from "../models/user";
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

  public followFriends = async (followFriend: FollowFriend) => {
    try {
       await UserDatabase.connection.insert({
          id: followFriend.id,
          user_id: followFriend.userId,
          friend_id: followFriend.friendId
       }).into('Cookenu_follow')
    } catch (error: any) {
       throw new Error(error.message)
    }
  };

  public getFollowingById = async (userId: string, friendId: string) => {
    try {
       const following = await UserDatabase.connection()
       .select("id")
       .from('Cookenu_follow')
       .where({user_id: userId})
       .andWhere({friend_id: friendId})
 
       return following[0].id;
    } catch (error: any) {
       throw new Error(error.message)
    }
  };

  public unfollow = async (userToUnfollowId: string) => {
    try {
       await UserDatabase.connection()
          .delete()
          .from('Cookenu_follow')
          .where({id: userToUnfollowId})
    } catch (error: any) {
       throw new Error(error.message)
    }
  }

  public friends = async (userId: string): Promise<Friends> => {
    try {
       const friends = await UserDatabase.connection()
          .select("id", "name")
          .from('Cookenu_follow')
          .where({id: userId})

        return friends[0]
    } catch (error: any) {
       throw new Error(error.message)
    }
  }
}