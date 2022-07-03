import { connection } from '../data/connection';

export const createUserRepository = async (user: {}) => {
   try {
      return await connection("toDoList_users")
        .insert(user);
   } catch (error: any) {
      return error.message;
   };
};

export const readUsersRepository = async () => {
   try {
      return await connection('toDoList_users').select();
   } catch (error: any) {
      return error.message;
   }
};
