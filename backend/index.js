const express = require("express");
const app = express();
const mysql = require("mysql");
require('dotenv').config();

app.use(express.json())
app.listen(3000, () => {
    console.log("Server started ...");
});

const connection = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_database
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected successfully to MySql server")
});

app.get("/", (req, res) => {
    console.log("Home")
})

app.get("/api/frequentlyQnA", (req, res) => {
    let query = `SELECT * FROM frequently_qna`;
    connection.query(query, (err, result) => {
        if (err) {
            res.json(500, {
                msg: "Internal Server Error Please Try Again"
            })
        }
        res.send(200, {
            msg: "All the data fetched successfully",
            data: result,
        })
    })
})
