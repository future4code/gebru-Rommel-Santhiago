export type User = {
    id: string
    name: string
    nickname: string
    email: string
}

export type Task = {
    task_id: string,
    title: string,
    description: string,
    start_date: string,
    due_date: string,
    status: number,
    created_at: string
}