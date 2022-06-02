import express from 'express';
import cors from "cors"
import { Request, Response } from "express";
import { v4 as generateId } from 'uuid';

const app = express();
app.use(express.json());
app.use(cors());

type ToDo = {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
}

const toDos: ToDo = [
    {
        "userId": generateId(),
        "id": generateId(),
        "title": "delectus aut autem",
        "completed": false
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

app.listen(3003, () => {
    console.log('Server running')
})