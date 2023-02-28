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

//table pd_orders (getting data from pd_orders)
app.get("/api/get", (req,res) =>{
    const sqlGet = "SELECT * FROM pd_orders";
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    })
})



app.get("/", (req,res)=>{
    // const sqlInsert = "INSERT INTO pd_orders (pd_order_number,order_name,description) VALUES ('PD0001','Chasis','Quantity - 10 & Price - Rs.2000')";
    // db.query(sqlInsert,(error,result)=>{
    //     console.log("error",error);
    //     console.log("result",result);
    //     res.send("Hello Express")
    // })
    
})


//loclhost 5000 connect query
app.listen(5000, () => {
    console.log("Server is running on port 5000 (orderspdserver)");
})