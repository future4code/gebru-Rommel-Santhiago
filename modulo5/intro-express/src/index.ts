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

app.get('/posts/:id', (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        let postsID: {}[] = []

        for (let post of posts) {
            if (post.userId === id) {
                postsID.push(post)
            }
        }

        res.status(200).send(postsID)
    }
    catch (error) {
        res.status(400).end("Lista de posts não encontrada")
    }
})

app.delete('/posts/:id', (req: Request, res: Response) => {
    try {
        const user: number = Number(req.params.id)
        const postId: number = Number(req.query.id)
        let newPosts: {}[] = []

        for (let post of posts) {
            if (post.userId === user && post.id === postId) {
                newPosts = posts.filter((index) => {
                    return index !== post
                })
            }
        }
        res.status(200).send(newPosts)
    }
    catch (error) {
        res.status(400).end("Posts não encontrado")
    }
})

app.delete('/users/:id', (req: Request, res: Response) => {
    try {
        const id: number = Number(req.params.id)
        let newUsers: {}[] = []

        for (let user of users) {
            if (user.id === id) {
                newUsers = users.filter((index) => {
                    return index !== user
                })
            }
        }
        res.status(200).send(newUsers)
    }
    catch (error) {
        res.status(400).end("Lista de posts não encontrada")
    }
})

app.listen(3003, () => {
    console.log('Server is running in http://localhost:3003')
})