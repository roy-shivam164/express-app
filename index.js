const express = require('express');
const bodyParser=require('body-parser');
const app=express();
const PORT=3001;

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.json("This is an Express App")
})


app.listen(PORT,()=>{
    console.log(`Server Running at Port: ${PORT}`)
})