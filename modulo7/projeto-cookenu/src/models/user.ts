export type user = {
   id: string
   email: string
   password: string
   name: string
   role?: string
}

export interface UserInputDTO {
   name: string,
   email: string,
   password: string,
   role?: string
}

export interface LoginInputDTO {
   email: string,
   password: string
}

export type FollowFriend = {
   id: string,
   userId: string,
   friendId: string
}

export type Friends = {
   friendId: string
}