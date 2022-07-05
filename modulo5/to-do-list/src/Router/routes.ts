import { Router } from "express";
import { 
    createUserController, 
    readUsersController, 
    readUserByIdController,
    updateUserController
} from "../Controllers/users-controller";
import { 
    createTaskController, 
    readTasksController,
    readTaskByIdController 
} from "../Controllers/tasks-controller";

export const router = Router();

router.get("/users", readUsersController);
router.get("/users/user", readUserByIdController);
router.post('/users/create', createUserController);
router.put('/users/update', updateUserController);
router.get('/tasks', readTasksController);
router.post('/tasks/create', createTaskController);
router.get('/tasks/task', readTaskByIdController);