import { collection, doc, setDoc } from "firebase/firestore";
import { UserRepository } from "../../business/UserRepository";
import { CustomError } from "../../error/customError";
import { Friendship, user } from "../../model/user";
import { FirestoreDatabase } from "./FirestoreDatabase";

export class UserFirestoreDatabase extends FirestoreDatabase implements UserRepository {

  protected static userCollection = collection(FirestoreDatabase.database, "labook_users");
  protected static friendCollection = collection(FirestoreDatabase.database, "labook_friends");

  public async insertUser(user: user): Promise<void> {
    try {
      const userDoc = doc(UserFirestoreDatabase.userCollection, user.id)
      await setDoc(userDoc, user)

    } catch (error: any) {
      throw new CustomError(error.statusCode || 400, error.message);
    }
  }

  public async makeFriendship(friendships: Friendship){
    try {
      const friendDoc = doc(UserFirestoreDatabase.friendCollection, friendships.id)
      await setDoc(friendDoc, friendships)

    } catch (error: any) {
      throw new CustomError(error.statusCode || 400, error.message);
    }
  }
}
