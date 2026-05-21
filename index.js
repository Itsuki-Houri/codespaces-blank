const express=require('express');
const app=express();

app.get('/users/:id',function(req,res,next){
    next()
},function(req,res){
    res.send('User ID'+req.params.id)
});

app.listen(3000,()=>{
    console.log('Server llistening on port 3000');
});

