const express = require('express');
const app = express();
const port = 9090;
const path = require('path');

//middleware

// app.use((req,res,next)=>{
//     console.log(req.query);
//     if
//     (req.query.password == '123'){
//         next();
//     }
//     else{
//         res.sendStatus(401);
//     }
// })

//router-level middleware
const auth =((req,res,next)=>{
    console.log(req.query);
    if
    (req.query.password == '123'){
        next();
    }
    else{
        res.sendStatus(401);
    }
})

app.get('/',auth, (req,res)=>{
    res.json({type : 'get mathod'});
}) 

app.get('/', (req,res)=>{
    res.json({type : 'get mathod'});
})

app.post('/', (req,res)=>{
    res.json({type : 'post mathod'});
})

app.put('/', (req,res)=>{
    res.json({type : 'put mathod'});
})

app.patch('/', (req,res)=>{
    res.json({type : 'patch mathod'});
})

app.delete('/', (req,res)=>{
    res.json({type : 'get mathod'});
})


// app.get('/demo', (req,res)=>{

//      res.send('hello wolrd');
//      res.json({type: "get mathod"});
//      res.sendStatus(401);
//     res.sendFile(path.join(__dirname,'product.json'))
// })

app.listen(port ,()=>{
    console.log(`server start at ${port}.`)
});