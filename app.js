const express = require('express');
const app = express();
const mainRouter = require("./routers/main.js"); 

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
    });
app.use(express.static("public"));

app.use("/", mainRouter);
app.use("/about", mainRouter)