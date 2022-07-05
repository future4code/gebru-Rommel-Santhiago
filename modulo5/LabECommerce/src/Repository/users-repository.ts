import { connection } from '../data/connection';

export const createUserRepository = async (user: {}) => {
   try {
      return await connection("labecommerce_users")
        .insert(user);
   } catch (error: any) {
      return error.message;
   };
};

export const readUsersRepository = async () => {
   try {
      return await connection('labecommerce_users').select();
   } catch (error: any) {
      return error.message;
   }
};

export const readPurchasesByUserRepository = async (id: string) => {
   try {
      return await connection('labecommerce_users')
         .select()
         .where("id", "=", id);
   } catch (error: any) {
      return error.message;
   };
};