const express = require('express')
const app = express()
console.log("Hello World")
console.log("Bye World...")
app.listen(9999,function(){
console.log("Server is running on PORT 9999")
})