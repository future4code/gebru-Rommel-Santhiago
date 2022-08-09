import { v4 as uuid } from "uuid";
import moment from 'moment';

import { post, PostInputDTO } from "../model/post";
import { PostRepository } from "./PostRepository";
export class PostBusiness {

  constructor(private postDatabase: PostRepository) { }

  public createPost = async (input: PostInputDTO) => {
    try {
      const { photo, description, type, authorId } = input;
      const created_at = moment().local().format();

      if (!photo || !description || !type || !authorId) {
        throw new Error(
          '"photo", "description", "type" e "authorId" são obrigatórios'
        );
      }

      if (type !== "normal" && type !== "event") {
        throw new Error('O tipo de post só pode ser "normal" ou "event"')
      }

      const id: string = uuid();

      const post: post = {
        id,
        photo,
        description,
        type,
        created_at,
        authorId,
      }

      await this.postDatabase.insertPost(post);

    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public getPost = async (id: string) => {
    try {
      if (!id) {
        throw new Error('É obrigatorio informar o "ID"');
      }

      const post = await this.postDatabase.getPost(id)

      if(post) {
           return post;
        } else {
            throw new Error("Post não encontrado")
      }

    } catch (error: any) {
      throw new Error(error.message);
    }

  }
}
