import express from 'express'
import { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

type User = {
    id: number,
    name: string,
    email: string,
    phone: number,
    website: string
}[]

app.get('/', (req: Request , res: Response) => {
    try {
        res.status(200).send('Hello from Express')
    } catch (error) {
        console.log(error)
    }
})

app.listen(3003, () => {
    console.log('Server is running in http://localhost:3003')
})