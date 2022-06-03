import express from 'express';
import cors from "cors"
import { Request, Response } from "express";
import { v4 as generateId } from 'uuid';
import * as fs from 'fs';

const app = express();
app.use(express.json());
app.use(cors());

type ToDo = {
    "userId": number,
    "id": string,
    "title": string,
    "completed": boolean
}[];

const toDos: ToDo = require("./toDos.json");

app.get("/ping", (req: Request, res: Response) => {          
    res.send("Pong! 🏓");
})

app.get("/status", (req: Request, res: Response) => {   
    let toDosTrue: {}[] = [];
    const status = req.query.status === "true" ? true : false;

    for(let toDo of toDos){
        if(toDo.completed === status){
            toDosTrue.push(toDo);
        };
    }
    res.status(200).send(toDosTrue);
})

app.post("/createToDo", (req: Request, res: Response) => {
    const { userId, title, completed } = req.body;  
    const newToDo = {
        userId,
        id: generateId(),
        title,
        completed
    };      
    
    toDos.push(newToDo);

    fs.writeFile(__dirname + '/toDos.json', JSON.stringify(toDos, null, 4), (err) => {
        if (err) throw err;
        res.status(201).send(toDos);
    });
})

app.put("/upDateToDo", (req: Request, res: Response) => {
    const userIdEdited = Number(req.query.userIdEdited);
    const IdEdited = req.query.IdEdited;
    const { titleEdited, completedEdited } = req.body;

    for(let toDo of toDos){
        if(toDo.id === IdEdited){
            const index = toDos.indexOf(toDo);
            toDo = {
                userId: userIdEdited,
                id: (IdEdited as string),
                title: titleEdited,
                completed: completedEdited
            };
            toDos[index] = toDo;
        }
    };

    fs.writeFile(__dirname + '/toDos.json', JSON.stringify(toDos, null, 4), (err) => {
        if (err) throw err;
        res.status(200).send(toDos);
    });
});

app.delete("/deleteToDo", (req: Request, res: Response) => {
    const id = req.query.id;

    for(let toDo of toDos){
        if(toDo.id === id){
            const index = toDos.indexOf(toDo);
            toDos.splice(index, 1)
        }
    };

    fs.writeFile(__dirname + '/toDos.json', JSON.stringify(toDos, null, 4), (err) => {
        if (err) throw err;
        res.status(200).send(toDos);
    });
});

app.get("/user", (req: Request, res: Response) => {
    const userId = Number(req.query.userId);
    let toDosUser: {}[] = []
    for(let toDo of toDos){
        if(toDo.userId === userId){
            toDosUser.push(toDo)
        };
    };

    fs.writeFile(__dirname + '/toDos.json', JSON.stringify(toDos, null, 4), (err) => {
        if (err) throw err;
        res.status(201).send(toDosUser);
    });
});

app.listen(3003, () => {
    console.log('Server running');
});