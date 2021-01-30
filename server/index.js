const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3001;

// IMPORT MYSQL
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    pass: 'Opendoors744784',
    database: 'employeeSystem',
});


// CREATING A POST REQUEST FOR DB
app.post('/create', (req, res) => {
    const name = req.body.name                  //request the body for variable name we want
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    // NAME OF DB FUNCTION ABOVE USE SECURE WAY OF INSERTING WITH ?
    db.query('INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)', 
    [name, age, country, position, wage], (err, result) =>{             // EVERY CATEGORY 5 FOR 5 QUESTION MARKS
        if(err) {
            console.log(err)
        } else{
            res.send("Values Inserted")
        }
    }        
    );
})


app.listen(port, () => {
    console.log("port is listening on port: " + port)
});