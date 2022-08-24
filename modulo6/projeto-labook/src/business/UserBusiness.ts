import { info } from "console";
import { v4 as uuid } from "uuid";

import { CustomError, InvalidEmail, InvalidName } from "../error/customError";
import { Friendship, user, UserInputDTO } from "../model/user";
import { UserRepository } from "./UserRepository";

export class UserBusiness {
    constructor(private userDatabase: UserRepository) { }

    public createUser = async (input: UserInputDTO) => {
        try {
            const { name, email, password } = input;

            if (!name || !email || !password) {
                throw new CustomError(
                    400,
                    'Preencha os campos "nome", "email" e "password"'
                );
            }

            if (name.length < 4) {
                throw new InvalidName();
            }

            const checkEmail = (email: string) => {
                let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
                return regex.test(email);
            };

            if (!checkEmail(email)) {
                throw new InvalidEmail();
            };

            const id: string = uuid();

            const user: user = {
                id,
                name,
                email,
                password,
            };

            await this.userDatabase.insertUser(user);
        } catch (error: any) {
            throw new Error(error.message);
        }
    };

    public  makeFriendship = async (userId: string, friendId: string) => {    
        try {
            if (!userId) {
                throw new Error('É obrigatorio informar o seu "ID"');
            }
    
            if (!friendId) {
                throw new Error('É obrigatorio informar o "ID" do amigo');
            }

            const id: string = uuid();

            const friendships: Friendship = {
                id,
                userId,
                friendId
            }
            
            await this.userDatabase.makeFriendship(friendships)
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public unfriend = async (userId: string, friendId: string) => {
        try {
            if (!userId) {
                throw new Error('É obrigatorio informar o seu "ID"');
            }
    
            if (!friendId) {
                throw new Error('É obrigatorio informar o "ID" do amigo');
            }
    
            const friendship = await this.userDatabase.getfriendshipById(userId, friendId)
    
            if(!friendship) {
                throw new Error('Essa amizade não existe')
            }

            await this.userDatabase.unfriend(friendship)
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}
