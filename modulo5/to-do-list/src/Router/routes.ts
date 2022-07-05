import { Router } from "express";
import { 
    createUserController, 
    readUsersController, 
    readUserByIdController
} from "../Controllers/users-controller";

export const router = Router();

router.get("/users", readUsersController);
router.get("/users/user", readUserByIdController);
router.post('/users/create', createUserController);