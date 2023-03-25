import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "400289",
    database: "crud"
})