import { Request, Response } from "express"
import { connection } from "../data/connection"
import { toUser } from "../types"

export const getAllUsers = async(
    req: Request,
    res: Response
    ): Promise<void> =>{
    try {
        let name = req.query.name as string
        let type = req.params.type as string
        let sort = req.query.sort as string
        let order = req.query.order as string
        let size = Number(req.query.size)
        let page = Number(req.query.page)

        if(!name){
            name = "%" 
        }
    
        if(sort !== "name" && sort !== "type" ){
            sort = "name"
        } 
        
        if(order?.toUpperCase() !== "ASC" && order?.toUpperCase() !== "DESC"){
          order = "DESC"
        }
    
        if(isNaN(size) || size < 1){
          size = 10
        }
    
        if(isNaN(page) || page < 1){
          page = 1
        }
    
        let offset = size*(page-1)

       const result = await connection("aula49_users")
        .where('name', 'like', `%${name}%`)
        .or
        .where('type', 'like', `${type}`)
        .orderBy(sort, order)
        .limit(size)
        .offset(offset)
        
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

export const getUsersByPage = async(
    req: Request,
    res: Response
    ): Promise<void> =>{
    try {
        let size = Number(req.query.size)
        let page = Number(req.query.page)

        if(isNaN(size) || size < 1){
            size = 10
        }
    
        if(isNaN(page) || page <1){
            page = 1
        }
    
        let offset = size * (page - 1)

       const result = await connection("aula49_users")
       .limit(size)
       .offset(offset)
        
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