require('dotenv').config()
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors');
const bodyParser= require('body-parser')

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "natnat21",
  database: "GymProducts",
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

  //sending to front is res and req is getting information from front

db.connect(err => {
    if(err){
        console.log(err)
    }else{
        (console.log('Connected to database'))
    }
})

app.get('/API/Products', (req, res)=>{
    db.query('SELECT * FROM Products', (error,result)=>{
        if(error){
            return error
        }else{
            req.send(result)
            console.log(result)
        }
    })
})

app.listen(3001, ()=>{
    console.log('running on port 3001')
})