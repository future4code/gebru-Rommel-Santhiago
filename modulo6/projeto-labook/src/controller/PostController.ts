import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostInputDTO } from "../model/post";

export class PostController {
  
constructor(private postBusiness:PostBusiness){}
  
  public createPost = async (req: Request, res: Response) => {
    try {
      const { photo, description, type, authorId } = req.body;
 
      const input: PostInputDTO = {
        photo,
        description,
        type,
        authorId,
      };
      
      await this.postBusiness.createPost(input);
      
      res.status(201).send({ message: "Post criado com sucesso!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getPost = async (req: Request, res: Response) => {
    try {
      const id = req.params.id as string;

      const post = await this.postBusiness.getPost(id);

      res.status(200).send(post)
    } catch (error: any) {
      res.status(400).send(error.message);
    };
  };
};
