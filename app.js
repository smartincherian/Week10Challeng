const express = require ('express');
const res = require('express/lib/response');

const homeRouter = require ('./src/routes/homeRouter.js');

const app =new  express;

app.use('/home',homeRouter);

app.set('views','./src/views'); 
app.set('view engine','ejs'); 

app.get('/', function (req,res){
    res.send("“Welcome to Coding Competition #2 by Smartin K Cherian , NORKA B1”")

});

app.listen(5000, ()=> {
    console.log("Server is running at port 5000");
});

