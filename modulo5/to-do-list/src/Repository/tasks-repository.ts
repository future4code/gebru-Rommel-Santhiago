import { connection } from '../data/connection';

export const createTaskRepository = async (task: any) => {
   try {
      return await connection("toDoList_tasks")
        .insert(task);
   } catch (error: any) {
      return error.message;
   };
};

export const readTasksRepository = async () => {
    try {
       return await connection('toDoList_tasks').select();
    } catch (error: any) {
       return error.message;
    }
 };

 export const readTaskByIdRepository = async (taskId: number) => {
   try {
      return await connection('toDoList_tasks')
         .select()
         .where("taskId", "=", taskId);
   } catch (error: any) {
      return error.message;
   };
};