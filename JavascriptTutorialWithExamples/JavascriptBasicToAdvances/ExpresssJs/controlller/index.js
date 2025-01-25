console.log("This is the Index or main file Okay")

var express = require("express")
var app = module.exports = express()

app.use('/api/v1',require('./api_V1.js'))
app.use('/api/v2',require('./api_V2.js'))

app.get('/',function(req,res){
    console.log("Calling the Home Page Okay");
    res.send("Hello This is the Home Page Data ")
});

if(!module.parent){
    app.listen(3000);
    console.log("The Server is Started At port number 3000")
}

