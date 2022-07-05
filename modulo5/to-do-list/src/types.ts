export type User = {
    id: number
    name: string
    nickname: string
    email: string
}

export type Task = {
    task_id: number,
    title: string,
    description: string,
    start_date: string,
    due_date: string,
    status: number,
    user_id: number,
    created_at: string
}