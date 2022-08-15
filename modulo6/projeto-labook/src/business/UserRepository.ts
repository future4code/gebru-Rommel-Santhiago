import { Friendship, user } from "../model/user"

export interface UserRepository {
    insertUser(user: user): Promise<void>
    makeFriendship(friendships: Friendship): Promise<void>
    getfriendshipById(userId: string, friendId: string): Promise<string>
    unfriend(friendshipId: string): Promise<void>
}