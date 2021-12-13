const express = require("express");
const mysql = require("mysql");

const app = express();
app.use(express.json())

app.listen(3000, () => {
    console.log("Server started ...");
});

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "busdb"
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected successfully to MySql server")
});

app.get("/", (req, res) => {
    res.send("Hello From The Server");
})

function validateebr_RouteArrive(ebr_RouteArrive) {
    let errors = [];
    if (ebr_RouteArrive.length == 0) {
        errors.push("도착지를 입력하세요.");
    }
    if (ebr_RouteArrive.length > 50) {
        errors.push("First Name Length Can Not Exceed 50 Characters.");
    }
    return errors;
}

app.post("/api/inputarrivetime", (req, res) => {
    console.log("start post");
    console.log(req.body.ebr_RouteArrive);
    let ebr_RouteArrive = req.body.ebr_RouteArrive;
    let errebr_RouteArrive = validateebr_RouteArrive(ebr_RouteArrive); 
    if (errebr_RouteArrive.length) {
        res.json(200, {
            msg: "Validation Failed",
            errors: {
                ebr_RouteArrive: errebr_RouteArrive,
            }
        });
    }
    else {
        // let query = `INSERT INTO STUDENTS (fname, lname, birthdate, contactno, email, semester, course) VALUES ('${fname}', '${lname}', '${birthdate}', '${contactno}', '${email}', '${semester}', '${course}')`;
        let query = `SELECT * FROM extrabusroute, extrabustime WHERE extrabusroute.ebr_RouteID = extrabustime.ebt_RouteID AND extrabusroute.ebr_RouteArrive = '${ebr_RouteArrive}'`;
        connection.query(query, (err, result) => {
            if (err) {
                res.json(500, {
                    msg: "Some thing went wrong please try again"
                })
            }
            res.json(200, {
                msg: "success get time data",
                // data: result
            })
        })
        console.log("succes post");
    }
});

// app.get("/api/inputarrivetime", (req, res) => {
//     console.log("start get");
//     console.log(req.body.ebr_RouteArrive);
//     let ebr_RouteArrive = req.body.ebr_RouteArrive;
//     let errebr_RouteArrive = validateebr_RouteArrive(ebr_RouteArrive); 
//     if (errebr_RouteArrive.length) {
//         res.json(200, {
//             msg: "Validation Failed",
//             errors: {
//                 ebr_RouteArrive: errebr_RouteArrive,
//             }
//         });
//     }

//     // console.log(this.ebr_RouteArrive);
//     let query = `SELECT * FROM extrabusroute, extrabustime WHERE extrabusroute.ebr_RouteID = extrabustime.ebt_RouteID AND extrabusroute.ebr_RouteArrive = '${this.ebr_RouteArrive}'`;

//     connection.query(query, (err, result) => {
//         if (err) {
//             res.json(500, {
//                 msg: "Internal Server Error Please Try Again"
//             })
//         }
//         res.send(200, {
//             msg: "All the data fetched successfully",
//             data: result
//         })
//     })
// })



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
