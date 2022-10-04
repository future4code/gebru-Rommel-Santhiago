export type User = {
    id: number
    name: string
    nickname: string
    email: string
}

export enum STATUS {
    TODO = "to do",
    DOING = "doing",
    DONE = "done"
}

export type Task = {
    taskId: number,
    title: string,
    description: string,
    start_date: string,
    due_date: string,
    status: STATUS,
    user_id: number,
    created_at: string
}