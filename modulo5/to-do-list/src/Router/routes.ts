import { Router } from "express";
import { createUserController, readUsersController } from "../Controllers/users-controller";

export const router = Router();

router.post('/users/create', createUserController);
router.get("/users", readUsersController);