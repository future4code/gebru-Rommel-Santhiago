import { collection, doc, setDoc } from "firebase/firestore";
import { PostRepository } from "../../business/PostRepository";
import { CustomError } from "../../error/customError";
import { post } from "../../model/post";
import { FirestoreDatabase } from "./FirestoreDatabase";

export class PostFirestoreDatabase extends FirestoreDatabase implements PostRepository {

    protected static postCollection = collection(FirestoreDatabase.database, "labook_posts");

    public async insertPost(post: post): Promise<void> {
        try {
            const postDoc = doc(PostFirestoreDatabase.postCollection, post.id)
            await setDoc(postDoc, post)
            
        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message);
        }
    }
}
