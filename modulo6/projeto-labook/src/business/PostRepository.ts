import { post } from "../model/post"

export interface PostRepository {
    insertPost(post: post):Promise<void>
    getPost(id: string): Promise<any>
    feedUser(id: string): Promise<any>
}