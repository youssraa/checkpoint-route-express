const express = require('express')
var path = require("path");

const app = express()
//static file 
app.use(express.static('public')) 
app.use('/CSS' , express.static(__dirname + 'public/CSS'))
app.use('/audio' , express.static(__dirname + 'public/audio'))
app.use('/images' , express.static(__dirname + 'public/images'))
app.use('/js' , express.static(__dirname + 'public/js'))

//set ejs
app.set('views' , './views');
app.set('views engine' , 'ejs') 


app.get('/' ,(req,res)=>{
    res.render('index')
})
app.listen(3000 , (err)=>{
    if (err){
        throw err 
    }else{
        console.log("server work...")
    }
} )