import { recipe } from "../models/recipe"

export interface RecipeRepository {
    insertRecipe(recipe: recipe):Promise<void>
}