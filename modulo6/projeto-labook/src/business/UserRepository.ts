import { Friendship, user } from "../model/user"

export interface UserRepository {
    insertUser(user: user): Promise<void>
    makeFriendship(friendships: Friendship): Promise<void>
}