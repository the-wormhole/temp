const express = require('express');
const port = 8000;

const app = express();

app.listen(8000,(err)=>{
    if(err){
        console.log("Error in intiating the server!!");
    }

    console.log("Server up and running on post - ", port);
})

app.get('/',(req,res)=>{

    return res.status(200).json({
        message:"Hello World!"
    })
})