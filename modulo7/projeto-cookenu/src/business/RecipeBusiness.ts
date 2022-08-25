import moment from 'moment';

import { recipe, RecipeInputDTO } from "../models/recipe";
import { RecipeRepository } from "./RecipeRepository";
import { IdGenerator } from "../services/idGenerator";
import { Authenticator } from "../services/Authenticator";
import { Unauthorized } from '../errors/customErrors';

const idGenerator = new IdGenerator();
const authenticator = new Authenticator();

export class RecipeBusiness {

  constructor( private recipeDatabase: RecipeRepository ) { }

  public createRecipe = async (input: RecipeInputDTO, token: string) => {
    try {
      const { title, description } = input;
      const tokenData = authenticator.getTokenData(token)
      
      if(!tokenData) {
        throw new Unauthorized()
      }

      if (!title || !description || !tokenData) {
        throw new Error(
          '"title", "description" e "authorization" são obrigatórios'
        );
      }

      const id: string = idGenerator.generateId();
      const createdAt = moment().local().format("YYYY-MM-DD HH:mm:ss");

      const recipe: recipe = {
        id,
        title,
        description,
        createdAt,
        authorId: tokenData.id
      }

      await this.recipeDatabase.insertRecipe(recipe);

    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}