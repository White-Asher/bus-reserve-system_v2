const express = require("express");
const mysql = require("mysql");
const app = express();
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
    res.send("Hello From The Server");
})

var ebr_RouteArrive = '';
app.get("/api/getArrivetime", (req, res) => {
    let query = `SELECT * FROM extrabusroute, extrabustime WHERE extrabusroute.ebr_RouteID = extrabustime.ebt_RouteID AND extrabusroute.ebr_RouteArrive = '${req.query.ebr_RouteArrive}'`;
    ebr_RouteArrive = req.query.ebr_RouteArrive;
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

app.get("/api/extrabusroute", (req, res) => {
    let query = "SELECT * FROM extrabusroute";
    connection.query(query, (err, result) => {
        if (err) {
            res.json(500, {
                msg: "Internal Server Error Please Try Again"
            })
        }
        res.send(200, {
            msg: "All the data fetched successfully",
            data: result
        })
    })
})

app.get("/api/buscompany", (req, res) => {
    let query = "SELECT * FROM buscompany";
    connection.query(query, (err, result) => {
        if (err) {
            res.json(500, {
                msg: "Internal Server Error Please Try Again"
            })
        }
        res.send(200, {
            msg: "All the data fetched successfully",
            data: result
        })
    })
})

function validateUserid(userid) {
    let errors = [];
    if (userid.length == 0) {
        errors.push("ID Is Null");
    }
    if (userid.length > 12) {
        errors.push("ID Length Can Not Exceed 12 Characters.");
    }
    return errors;
}

function validateUserpw(userpw) {
    let errors = [];
    if (userpw.length == 0) {
        errors.push("pw Is Null");
    }
    if (userpw.length > 12) {
        errors.push("pw Length Can Not Exceed 12 Characters.");
    }
    return errors;
}

function validateUsername(username) {
    let errors = [];
    if (username.length == 0) {
        errors.push("username Is Null");
    }
    if (username.length > 12) {
        errors.push("username Length Can Not Exceed 12 Characters.");
    }
    return errors;
}

function validateUserage(userage) {
    let errors = [];
    if (userage.length == 0) {
        errors.push("userage Is Null");
    }
    return errors;
}

function validateUseremail(email) {
    let errors = [];
    if (email.length == 0) {
        errors.push("Email Is Null");
    }
    if (email.length > 30) {
        errors.push("Email Can not exceed 30 Character");
    }
    if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(email))) {
        errors.push("Email Is Not Valid");
    }
    return errors;
}

function validateUsertele(usertele) {
    let errors = [];
    if (usertele.length == 0) {
        errors.push("usertele Is Null");
    }
    return errors;
}

app.post("/api/user", (req, res) => {
    console.log("Requesey..	");
    let userid = req.body.userid;
    let userpw = req.body.userpw;
    let username = req.body.username;
    let userage = req.body.userage;
    let useremail = req.body.useremail;
    let usertele = req.body.usertele;

    let erruserid = validateUserid(userid); 
    let erruserpw = validateUserpw(userpw); 
    let errusername = validateUsername(username); 
    let erruserage = validateUserage(userage); 
    let erruseremail = validateUseremail(useremail);
    let errusertele = validateUsertele(usertele);

    if (erruserid.length || erruserpw.length || errusername.length || erruserage.length || erruseremail.length || errusertele.length) {
        res.json(200, {
            msg: "Validation Failed",
            errors: {
                userid: erruserid,
                userpw: erruserpw,
                username: errusername,
                userage: erruserage,
                useremail: erruseremail,
                usertele: errusertele,
            }
        });
    }
    else {
        let query = `INSERT INTO userinfo (ui_userid, ui_userpw, ui_username, ui_userage, ui_usertele, ui_useremail) VALUES ('${userid}', '${userpw}', '${username}', '${userage}', '${usertele}', '${useremail}')`;
        connection.query(query, (err, result) => {
            if (err) {
                res.json(500, {
                    msg: "Some thing went wrong please try again"
                })
            }
            res.json(200, {
                msg: "Registered Succesfully",
            })
        })

    }
});