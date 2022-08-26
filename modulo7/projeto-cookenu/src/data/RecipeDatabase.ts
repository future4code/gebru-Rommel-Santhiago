import { BaseDatabase } from "./BaseDatabase";
import { recipe } from "../models/recipe";
import { RecipeRepository } from "../business/RecipeRepository";

export class RecipeDatabase 
extends BaseDatabase 
implements RecipeRepository
{
  public insertRecipe = async (recipe: recipe) => {
    await RecipeDatabase.connection("Cookenu_recipes").insert({
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
      created_at: recipe.createdAt,
      author_id: recipe.authorId
    });
  };

  public getRecipe = async (id: string) => {
    const recipe = await RecipeDatabase.connection()
      .select("id", "title", "description", "created_at")
      .from("Cookenu_recipes")
      .where({ id: id })

    return recipe[0];
  };
}