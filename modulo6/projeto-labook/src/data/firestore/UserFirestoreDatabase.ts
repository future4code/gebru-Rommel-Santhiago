import { collection, doc, setDoc } from "firebase/firestore";
import { UserRepository } from "../../business/UserRepository";
import { CustomError } from "../../error/customError";
import { user } from "../../model/user";
import { FirestoreDatabase } from "./FirestoreDatabase";

export class UserFirestoreDatabase extends FirestoreDatabase implements UserRepository {

  protected static userCollection = collection(FirestoreDatabase.database, "labook_users");

  public async insertUser(user: user): Promise<void> {
    try {
      const userDoc = doc(UserFirestoreDatabase.userCollection, user.id)
      await setDoc(userDoc, user)

    } catch (error: any) {
      throw new CustomError(error.statusCode || 400, error.message);
    }
  }
}
