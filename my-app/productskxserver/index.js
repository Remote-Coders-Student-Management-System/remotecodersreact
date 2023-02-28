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
    const sqlGet = "SELECT * FROM kx_products";
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    })
})

app.get("/", (req,res)=>{
    const sqlInsert = "INSERT INTO kx_products (kx_product_id,product_name,description) VALUES ('KX1','Magicbit ','Quantity - 20 In Stock')";
    db.query(sqlInsert,(error,result)=>{
        console.log("error",error);
        console.log("result",result);
        res.send("Hello Express")
    })
    
})


//loclhost 5003 connect query
app.listen(5003, () => {
    console.log("Server is running on port 5003 (productskxserver)");
})