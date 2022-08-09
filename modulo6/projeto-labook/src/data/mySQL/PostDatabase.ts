import { BaseDatabase } from "./BaseDatabase";
import { post } from "../../model/post";
import { PostRepository } from "../../business/PostRepository";

export class PostDatabase 
extends BaseDatabase 
implements PostRepository
{
  public insertPost = async (post: post) => {
    await PostDatabase.connection("labook_posts").insert({
      id: post.id,
      photo: post.photo,
      description: post.description,
      type: post.type,
      author_id: post.authorId,
    });
  };
}
