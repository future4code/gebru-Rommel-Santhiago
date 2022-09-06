export class CustomError extends Error {
    constructor(
       public statusCode: number,
       message: string
    ) {
       super(message);
    }
}

export class UserNotFound extends CustomError{ 
   constructor(){
       super(404, "User not found")
   }
}

export class Unauthorized extends CustomError{ 
      constructor(){
         super(401, "Unauthorized user, please login again")
      }
}
 