import { Request, Response } from "express";
import moment from "moment";
import { Task, STATUS, User } from "../types";
import {
   createTaskRepository,
   readTasksRepository,
   readTaskByIdRepository
} from "../Repository/tasks-repository";
import { readUserByIdRepository, readUsersRepository } from "../Repository/users-repository";

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

export const readTasksController = async (
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


export const readTaskByIdController = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const taskId = Number(req.query.taskId);

      let id: number

      let task = await readTaskByIdRepository(taskId);

      id = task[0].user_id

      let user = await readUserByIdRepository(id);

      let taskInfor = {
         id: task[0].taskId,
         title: task[0].title,
         description: task[0].description,
         start_date: moment(task[0].start_date, "YYYY/MM/DD HH:mm:ss").format("DD/MM/YYYY HH:mm:ss"),
         due_date: moment(task[0].due_date, "YYYY/MM/DD HH:mm:ss").format("DD/MM/YYYY HH:mm:ss"),
         status: task[0].status,
         user_id: task[0].user_id,
         creatorUserNickname: user[0].nickname,
         created_at: moment(task[0].created_at, "YYYY/MM/DD HH:mm:ss").format("DD/MM/YYYY HH:mm:ss")
      }

      res.send(taskInfor);
   } catch (error: any) {
      res.end(error.message);
   };
}