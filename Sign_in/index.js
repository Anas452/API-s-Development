var express = require('express');
var app= express();
var path  = require('path');
var mongoose = require('mongoose');
require('./model/idea')

mongoose.connect('mongodb://localhost/LocalDB')
.then(console.log('mongoose is working' ))
.catch(err => {console.log('err')});
const Signi= mongoose.model('Sign')

app.use(express.static(path.join(__dirname,'views')));

app.get('/',(req,res)=>{
  res.render('index.html');
});

app.listen(8080,()=>{
  console.log('server is running')
});
