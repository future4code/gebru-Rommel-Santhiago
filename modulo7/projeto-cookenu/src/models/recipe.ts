export type recipe = {
    id: string,
    title: string,
    description: string,
    createdAt?: string,
    authorId: string
 }
 
 export interface RecipeInputDTO {
    title: string,
    description: string,
    authorId?: string
 }