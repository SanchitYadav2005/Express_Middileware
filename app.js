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

app.use('/date', (req,res,next)=>{
    req.date = Date.now();
    console.log(req.date);
    next();
});
// fake authincation
const verifyPassword = (req,res,next)=>{
    const {password} = req.query;
    if(password === 'shreya'){
        console.log("working")
        next();
    }
    res.send("wrong password");
}

app.get('/', (req,res)=>{
    res.send("hello");
});
app.get('/date', (req,res)=>{
    res.send('working');
});
app.get('/name',verifyPassword ,(req,res)=>{
    res.send("i like her");
})

app.listen(port, function(err){
    if(err){
        console.log("error");
    }else{
        console.log(`listening on the port: ${port}`);
    }
})