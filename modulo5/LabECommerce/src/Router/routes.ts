import { Router } from "express";

import { 
    readUsersController,
    createUserController
 } from "../Controllers/users-controllers";

export const router = Router();

router.get("/users", readUsersController);
router.post('/users', createUserController);