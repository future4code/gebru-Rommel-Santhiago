import { connection } from '../data/connection';

export const createPurchaseRepository = async (purchase: {}) => {
   try {
      return await connection("labecommerce_purchases")
        .insert(purchase);
   } catch (error: any) {
      return error.message;
   };
};

export const readPurchasesRepository = async () => {
   try {
      return await connection('labecommerce_purchases').select();
   } catch (error: any) {
      return error.message;
   }
};