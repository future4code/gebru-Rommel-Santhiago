import { Request, Response } from "express";
import moment from "moment";
import { Task, STATUS } from "../types";
import { 
    createTaskRepository,
    readTasksRepository
} from "../Repository/tasks-repository";

export const createTaskController = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
        const { title, description, start_date, due_date, user_id } = req.body;

        const tasks = await readTasksRepository();

        let currentDate = moment().format('YYYY-MM-DD HH:mm:ss');

        let startDate = moment(start_date, "DD/MM/YYYY HH:mm:ss").format("YYYY/MM/DD HH:mm:ss");
        let dueDate = moment(due_date, "DD/MM/YYYY HH:mm:ss").format("YYYY/MM/DD HH:mm:ss")

        const task: Task = {
            taskId: tasks.length + 1,
            title,
            description,
            start_date: startDate,
            due_date: dueDate,
            status: STATUS.TODO,
            user_id,
            created_at: currentDate 
        };

        await createTaskRepository(task);

        res.status(200).send(task);
    } catch (error: any) {
        res.end(error.message);
    };
 };

 export const readTasksController  = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
       const tasks = await readTasksRepository();

       res.send(tasks);
    } catch (error: any) {
       res.end(error.message);
    };
 };