import { Request, Response } from "express"
import { connection } from "../data/connection"
import { toUser } from "../types"

export const getUsersByName = async(
    req: Request,
    res: Response
    ): Promise<void> =>{
    try {
        let name = req.query.name as string

        if(!name){
            name = "%"
        }

       const result = await connection("aula49_users")
       .where('name', 'like', `%${name}%`)
        
       if(!result.length){
          res.statusCode = 404
          throw new Error("Users not found")
       }

       const users = result.map(toUser)
 
       res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
}

export const getUsersByType = async(
    req: Request,
    res: Response
    ): Promise<void> =>{
    try {
        let type = req.params.type as string

       const result = await connection("aula49_users")
       .where('type', 'like', `${type}`)
        
       if(!result.length){
          res.statusCode = 404
          throw new Error("Type not found")
       }

       const users = result.map(toUser)

       console.log(type)
 
       res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
}

export const getUsersByOrder = async(
    req: Request,
    res: Response
    ): Promise<void> =>{
    try {
        let sort = req.query.sort as string
        let order = req.query.order as string

        if(sort !== "name" && sort !== "type" ){
            sort = "email"
        } 
        
        if(order?.toUpperCase() !== "ASC" && order?.toUpperCase() !== "DESC"){
            order = "ASC"
        }

       const result = await connection("aula49_users")
       .orderBy(sort, order)
        
       if(!result.length){
          res.statusCode = 404
          throw new Error("Users not found")
       }

       const users = result.map(toUser)
 
       res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
}