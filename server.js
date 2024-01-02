//step create a folder
//step2 move into that folder
//step3 npm init -y
//step4 open forder using Vscode
//step5 npm i express
//step6 create server.js


//Server Insantiate
const express = require('express');
const app=express();

//use to parse req.body in epress -> put or post
const bodyParser = require('body-parser');

//specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());

//activate the server on 3000 port
app.listen(3000, () => {
    console.log("Server Started at port no. 3000");
})
//Routes
app.get('/',(req,res) => {
    res.send("hello ji , kaise hai saare");
})

app.post('/api/cars',(request, response) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Successfully");
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mydb')
.then(()=>{console.log("Connection Successful")})
.catch((error)=>{console.log("Recived an error")});