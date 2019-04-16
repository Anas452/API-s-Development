const express = require('express');
const app = express();
const path = require('path')


app.use(express.static(path.join(__dirname,'views')));



app.get('/',(req,res)=>{
  res.send('index.html')
})
app.get('/sign_in',(req,res)=>{
  res.send('index2.html');

});

app.listen(8080,()=>{
  console.log('server in run')
});



