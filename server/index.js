const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// IMPORT MYSQL
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Opendoors744784',
    database: 'employeeSystem',
});


// CREATING A POST REQUEST FOR DB
app.post('/create', (req, res) => {
    //console.log(req.body)                     //Check what data is being passed to the backend
    const name = req.body.name;                  //request the body for variable name we want
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


// CREATING A GET REQUEST FROM THE DB
app.get('/employees' , (req, res) => {
    db.query("SELECT * FROM employees", (err, result) => {
        if (err) {
            console.log(err)
        } else{
            res.send(result);
        }
    })
})


// CREATE AN APP FOR UPDATING THE DB
app.put('/update', (req, res) => {
    const id = req.body.id;
    const wage = req.body.wage;
    db.query("UPDATE employees SET wage = ? WHERE id = ?", [wage, id], (err, result) => {           // UPDATE (tablename) SET (row we want to update) WHERE (parameter used to choose update item) 
        if(err){
            console.log(err)
        } else{
            res.send(result);
        }
    });              
});



//CREATE AN APP TO DELETE FROM THE DB
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err)
        } else{
            res.send(result);
        }
    })
})


app.listen(port, () => {
    console.log("port is listening on port: " + port)
});