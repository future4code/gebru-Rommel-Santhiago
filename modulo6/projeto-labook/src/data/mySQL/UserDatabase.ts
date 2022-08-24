import { UserRepository } from "../../business/UserRepository";
import { Friendship, user } from "../../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase implements UserRepository {

   public insertUser = async (
      user: user
   ) => {
      try {
         await UserDatabase.connection.insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
         }).into('labook_users')

      } catch (error: any) {
         throw new Error(error.message)
      }
   };

   public makeFriendship = async (friendships: Friendship) => {
      try {
         await UserDatabase.connection.insert({
            id: friendships.id,
            user_id: friendships.userId,
            friend_id: friendships.friendId
         }).into('labook_friends')
      } catch (error: any) {
         throw new Error(error.message)
      }
   };

   public getfriendshipById = async (userId: string, friendId: string) => {
      try {
         const friendship = await UserDatabase.connection()
         .select("id")
         .from('labook_friends')
         .where({user_id: userId})
         .andWhere({friend_id: friendId})
   
         return friendship[0].id;
      } catch (error: any) {
         throw new Error(error.message)
      }
   };

   public unfriend = async (friendshipId: string) => {
      try {
         await UserDatabase.connection()
            .delete()
            .from('labook_friends')
            .where({id: friendshipId})
      } catch (error: any) {
         throw new Error(error.message)
      }
   }
}
