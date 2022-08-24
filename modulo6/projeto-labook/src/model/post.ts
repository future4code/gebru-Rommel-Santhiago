export type post = {
    id: string,
    photo: string,
    description: string,
    type: string,
    created_at?: string,
    authorId: string
 }
 
 export interface PostInputDTO {
    photo: string,
    description: string,
    type: string,
    authorId: string
 }