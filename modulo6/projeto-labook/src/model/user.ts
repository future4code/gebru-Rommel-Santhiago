export type user = {
    id: string,
    name: string,
    email: string,
    password: string
 }

 export interface UserInputDTO {
    name: string,
    email: string,
    password: string
 }

 export type Friendship = {
   id: string,
   userId: string,
   friendId: string
 }
