import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid';
import { user } from "../types/user";

export class UserBusiness {

    createUSer = async (input:any):Promise<void> => {
        try {
            const {name, email, password} = input
            if (
                !name ||
                !email ||
                !password
             ) {
                throw new Error('Preencha os campos "name", "email" e "password"')
             }
             
             const useDatabase = new UserDatabase()
             await useDatabase.insertUser({
                id: generateId(),
                name,
                email,
                password
             })
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    async get(): Promise<user[]> {
				
        return await new UserDatabase().get();
    }
}
