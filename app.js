const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
// morgan https logger.
app.use(morgan('tiny'));

app.use('/', (req,res,next)=>{
    console.log("welocme");
    next();
});



app.get('/', (req,res)=>{
    res.send("hello");
})

app.listen(port, function(err){
    if(err){
        console.log("error");
    }else{
        console.log(`listening on the port: ${port}`);
    }
})