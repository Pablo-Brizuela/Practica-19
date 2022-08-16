const express = require('express');
const app = express();
const rutasMain = require("./routers/main.js"); 

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
    });

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
