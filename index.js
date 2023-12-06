const express = require('express');
const server = express();

const port = 8080;
const fs = require('fs');
const product = require('./product.json');

server.get('/',(req,res)=>{
    res.send(product);
})
server.get('/demo',(req,res)=>{
    res.send('demo content');
})

server.listen(port, ()=>{
    console.log(`Server start at ${port}.`)

})