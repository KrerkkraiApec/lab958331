//Assignment 2
const express = require('express')
const app = express()

app.get('/Assignment2', function(req, res){
    const q = req.query 
    res.send("Name: Krerkkrai Chaithep <br/>Login Date:" + q.date + " " + q.month + "," + " "+ q.year)
})

app.listen(9999,function(){
console.log("Server is running on PORT 9999")
})
