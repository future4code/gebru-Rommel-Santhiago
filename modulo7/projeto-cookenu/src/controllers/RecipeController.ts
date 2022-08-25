import { Request, Response } from "express";

import { RecipeBusiness } from "../business/RecipeBusiness";
import { RecipeInputDTO } from "../models/recipe";

export class RecipeController {
  
    constructor( private recipeBusiness: RecipeBusiness ){}
  
  public createRecipe = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const { title, description } = req.body;
 
      const input: RecipeInputDTO = {
        title,
        description
      };
      
      await this.recipeBusiness.createRecipe(input, token);
      
      res.status(201).send({ message: "Receita criada com sucesso!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}