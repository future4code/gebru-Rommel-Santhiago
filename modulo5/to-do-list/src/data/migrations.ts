import { connection } from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
    .raw(`
    CREATE TABLE IF NOT EXISTS toDoList_users(
        id INT(20) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        nickname VARCHAR(45) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE);
        
    CREATE TABLE IF NOT EXISTS toDoList_tasks(
        taskId INT(20) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NUL,
        start_date DATE NOT NUL,
        due_date DATE NOT NUL,
        status ENUM ('to do', 'doing', 'done') NOT NUL,
        user_id INT(20) NOT NUL,
        created_at TIMESTAMP NOT NUL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) 
			REFERENCES toDoList_users(id));

    CREATE TABLE IF NOT EXISTS toDoList_checklists (
        todo_id INT(20) NOT NULL,
        task_id INT(20) NOT NULL,
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