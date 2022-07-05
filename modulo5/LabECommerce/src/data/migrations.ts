import { connection } from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
    .raw(`
    CREATE TABLE IF NOT EXISTS labecommerce_users(
        id VARCHAR(45) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(45) NOT NULL
    );
`)
    .then(() => { console.log("Tabelas criadas") })
    .catch(printError)
const closeConnection = () => { connection.destroy() }

createTables()
    .finally(closeConnection)