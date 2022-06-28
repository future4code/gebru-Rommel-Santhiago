enum USER_TYPE{
   TEACHER = "Teacher",
   OPERATIONS = "Operations",
   CX = "CX"
}

type user = {
   id: string
   name: string
   email: string
   type: USER_TYPE
}

export const toUser = (input: any): user => {
   return {
       id: input.id,
       name: input.name,
       email: input.email,
       type: input.type
   }
}