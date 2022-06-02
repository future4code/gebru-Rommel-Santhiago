import express from 'express';
import cors from "cors"
import { Request, Response } from "express";
import { v4 as generateId } from 'uuid';

const app = express();
app.use(express.json());
app.use(cors());

type ToDo = {
    "userId": string,
    "id": string,
    "title": string,
    "completed": boolean
}[]

const toDos: ToDo = [
    {
        "userId": generateId(),
        "id": generateId(),
        "title": "delectus aut autem",
        "completed": true
      },
      {
        "userId": generateId(),
        "id": generateId(),
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": generateId(),
        "id": generateId(),
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": generateId(),
        "id": generateId(),
        "title": "et porro tempora",
        "completed": true
      },
      {
        "userId": generateId(),
        "id": generateId(),
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      }
]

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

app.listen(3003, () => {
    console.log('Server running')
})