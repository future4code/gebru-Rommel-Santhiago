import { EditUserInput, user } from "../model/user"

export interface UserRepository {
    insertUser(user: user): Promise<void>
    findUserByEmail(email: string): Promise<user>
    editUser(editUserInput: EditUserInput): Promise<void>
    getUserById(id: string): Promise<string>
}