const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");   
const cors = require("cors");

 //mysql connection
const db = mysql.createPool({
    host: "remotecodersdb.cptif7st5sbr.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "se01remote123#",
    database: "database1"
});


module.exports = db;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

//table kx_orders (getting data from kx_orders)
app.get("/api/get", (req,res) =>{
    const sqlGet = "SELECT * FROM kx_orders";
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    })
})



app.get("/", (req,res)=>{
    // const sqlInsert = "INSERT INTO kx_orders (kx_order_number,order_name,description) VALUES ('KX0001','Servo Motors','Quantity - 5 & Price - Rs.1200')";
    // db.query(sqlInsert,(error,result)=>{
    //     console.log("error",error);
    //     console.log("result",result);
    //     res.send("Hello Express")
    // })
    
})


//loclhost 5001 connect query
app.listen(5001, () => {
    console.log("Server is running on port 5001 (orderskxserver)");
})