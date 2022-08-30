import { FollowFriend, Friends, user } from "../models/user"

export interface UserRepository {
    insertUser(user: user): Promise<void>
    findUserByEmail(email: string): Promise<user>
    getUserById(id: string): Promise<string>
    followFriends(followFriend: FollowFriend): Promise<void>
    getFollowingById(userId: string, friendId: string): Promise<string>
    unfollow(userToUnfollowId: string): Promise<void>
    friends(userId: string): Promise<Friends>
}