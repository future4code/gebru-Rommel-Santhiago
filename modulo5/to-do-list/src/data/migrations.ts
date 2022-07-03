import { connection } from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
    .raw(`
    CREATE TABLE IF NOT EXISTS toDoList_users(
        id VARCHAR(45) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        nickname VARCHAR(45) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE);
        
    CREATE TABLE IF NOT EXISTS toDoList_tasks(
        taskId VARCHAR(45) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        start_date DATE,
        due_date DATE,
        status ENUM ('to do', 'doing', 'done'),
        user_id VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) 
			REFERENCES toDoList_users(id));

    CREATE TABLE IF NOT EXISTS toDoList_checklists (
        todo_id VARCHAR(45) NOT NULL,
        task_id VARCHAR(45) NOT NULL,
        todo VARCHAR(255) NOT NULL,
        is_completed BOOLEAN NOT NULL DEFAULT FALSE,
        PRIMARY KEY (todo_id , task_id),
        FOREIGN KEY (task_id)
            REFERENCES toDoList_tasks(taskId)
            ON UPDATE RESTRICT ON DELETE CASCADE);
`)
    .then(() => { console.log("Tabelas criadas") })
    .catch(printError)
const closeConnection = () => { connection.destroy() }

createTables()
    .finally(closeConnection)