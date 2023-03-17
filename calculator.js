//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = 3002;

app.use(bodyParser.urlencoded({extended:true}));

// port:3002 landing page NORMAL CALCULATOR

app.get('/', (req, res)=> {
  res.sendFile(__dirname+"/index.html");
});

app.post('/',(req,res)=> {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("the soln in "+result);
});

// port:3002/bmicalculator page BMI CALCULATOR

app.get('/bmicalculator', (req, res)=> {  
  res.sendFile(__dirname+"/bmicalculator.html");
});

app.post('/bmicalculator',(req,res)=> {

  var weight = parseFloat(req.body.weights);
  var height = parseFloat(req.body.heights);

  var result = weight / (height*height);

  res.send("Your BMI is "+result);
});

//port:3002

app.listen(port, ()=> {
  console.log(`Example app listening on port ${port}`);
});