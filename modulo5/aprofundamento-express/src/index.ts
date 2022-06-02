import express from 'express';
import cors from "cors"
import { Request, Response } from "express";

const app = express();
app.use(express.json());
app.use(cors());

type ToDo = {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
}

app.get("/ping", (req: Request, res: Response) => {          
    res.send("Pong! 🏓")
})

app.listen(3003, () => {
    console.log('Server running')
})