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

export const readUserByIdRepository = async (id: number) => {
   try {
      return await connection('toDoList_users')
         .select()
         .where("id", "=", id);
   } catch (error: any) {
      return error.message;
   };
};

export const updateUserRepository = async (id: number, name?: string, nickname?: string) => {
   try {
      return await connection('toDoList_users')
         .where('id', '=', id)
         .update({ name, nickname });
   } catch (error: any) {
      return error.message;
   };
};
