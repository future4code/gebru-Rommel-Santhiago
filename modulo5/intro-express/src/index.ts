import express from 'express'
import { Request, Response } from 'express'
import cors from 'cors'

import { users, posts } from './data'

const app = express()

app.use(express.json())

app.use(cors())

app.get('/', (req: Request , res: Response) => {
    try {
        res.status(200).send('Hello from Express')
    } catch (error) {
        console.log(error)
    }
})

app.get('/users', (req: Request, res: Response) => {
    try {
        const listaDeUsuarios = users.map((user) => {
            return user
        })

        res.status(200).send(listaDeUsuarios)
    }
    catch (error) {
        res.status(400).end("Lista de usuarios não encontrada")
    }
})

app.get('/posts', (req: Request, res: Response) => {
    try {
        const listaDePosts = posts.map((post) => {
            return post
        })

        res.status(200).send(listaDePosts)
    }
    catch (error) {
        res.status(400).end("Lista de posts não encontrada")
    }
})

app.listen(3003, () => {
    console.log('Server is running in http://localhost:3003')
})