const express= require("express");
const booky= express();//creatig an instance 
const database=require("./database");//coneecting database 
booky.get("/",(req,res)=>{
    return res.json({
        book: database.book
    });
})


booky.listen(3000,()=>{
console.log("server is up and running ");
})