import { Request, Response } from "express";
import { User } from "../types";
import { 
    createUserRepository,
    readUsersRepository,
    readUserByIdRepository 
} from "../Repository/users-repository";

const Errors: { [key: string]: { status: number, message: string } } = {
    USER_NOT_FOUND: { status: 404, message: "Usuário não encontrado"},
    MISSING_PARAMETERS: { status: 422, message: "É necessário informar todos os campos" },
    EMAIL_ALREADY_REGISTERED: {status: 409, message: "E-mail já cadastrado"},
    EMAIL_INVALID: { status: 422, message: "E-mail invalido"},
    SOME_ERROR: { status: 500, message: "Algo deu errado" }
}

export const createUserController = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
        const { name, nickname, email } = req.body;

        if (!name || !nickname || !email){
            throw new Error(Errors.MISSING_PARAMETERS.message);
        };

        const checkEmail = (email: string) => {
            let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            return regex.test(email);
        }

        if(!checkEmail(email)){
            throw new Error(Errors.EMAIL_INVALID.message)
        }

        const users = await readUsersRepository();

        users.map((user: User) => {
            if(user.email === email){
                throw new Error(Errors.EMAIL_ALREADY_REGISTERED.message)
            }
        })

        const user: User = {
            id: users.length + 1,
            name,
            nickname,
            email
        };

       await createUserRepository(user);
 
       res.status(200).send(`Usuário ${user.name} criado com sucesso!`);
 
    } catch (error: any) {
        switch(error.message){
            case Errors.MISSING_PARAMETERS.message:
                res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message);
                break;            
            case Errors.EMAIL_ALREADY_REGISTERED.message:
                res.status(Errors.EMAIL_ALREADY_REGISTERED.status).send(Errors.EMAIL_ALREADY_REGISTERED.message);
                break;
            case Errors.EMAIL_INVALID.message:
                res.status(Errors.EMAIL_INVALID.status).send(Errors.EMAIL_INVALID.message);
                break;
            default:
                res.status(Errors.SOME_ERROR.status).send(Errors.SOME_ERROR.message);
        };
    };
 };

 export const readUsersController  = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
       const users = await readUsersRepository();

       res.send(users);
    } catch (error: any) {
       res.end(error.message);
    };
 };

 export const readUserByIdController  = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    let codeError = 500
    try {
        const id = Number(req.query.id);

        if(!id){
            throw new Error(Errors.MISSING_PARAMETERS.message)
        };

        const user = await readUserByIdRepository(id);

       res.send(user[0]);
    } catch (error: any) {
        res.status(codeError).send(error)
    };
 }
