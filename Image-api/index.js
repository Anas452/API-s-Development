var express = require('express');
var path  = require('path');

var app= express();

app.set('views', __dirname + '/views');


app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname + '/views/index.html'))
})

app.listen(8080,()=>{
  console.log('server is running');
})