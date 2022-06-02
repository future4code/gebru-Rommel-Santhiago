import express from 'express';
import cors from "cors"
import { Request, Response } from "express";
import { v4 as generateId } from 'uuid';
import * as fs from 'fs';

const app = express();
app.use(express.json());
app.use(cors());

type ToDo = {
    "userId": string,
    "id": string,
    "title": string,
    "completed": boolean
}[]

const toDos: ToDo = require("./toDos.json");

app.get("/ping", (req: Request, res: Response) => {          
    res.send("Pong! 🏓")
})

app.get("/status", (req: Request, res: Response) => {   
    let toDosTrue: {}[] = []
    const status = req.query.status === "true" ? true : false

    for(let toDo of toDos){
        if(toDo.completed === status){
            toDosTrue.push(toDo)
        }
    }
    res.status(200).send(toDosTrue)
})

app.post("/createToDo", (req: Request, res: Response) => {
    const { title, completed } = req.body  
    const newToDo = {
        userId: generateId(),
        id: generateId(),
        title,
        completed
    }       
    
    toDos.push(newToDo)

    fs.writeFile(__dirname + '/toDos.json', JSON.stringify(toDos, null, 4), (err) => {
        if (err) throw err;
        res.status(201).send(toDos)
    });
})

app.listen(3003, () => {
    console.log('Server running')
})