var express = require('express');
var path  = require('path');
const port = process.env.PORT || 8000


var app= express();

app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname,'views')))


app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname + '/views/index.html'))
})

app.listen(process.env.PORT || 8080, () => {console.log('all is good')});