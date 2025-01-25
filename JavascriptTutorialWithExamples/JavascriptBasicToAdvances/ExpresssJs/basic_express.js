var express = require("express")
var app = express();
app.get('/',function(req,res){
    res.send("Welcome to express Js Examples ")
})


// routing to the about Page 

app.get('/about', function(req,res){
    res.send("This is the About Page In Express Js ")
});

var server = app.listen(8000,function(){
    var host = server.address().address;
    var port = server.address().address;
    console.log('Example app listening at http://%s:%s', host, port); 
});

