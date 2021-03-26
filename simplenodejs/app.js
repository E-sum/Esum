//import
const express=require('express')
const mongoose=require('mongoose')
const server=express()
const port=5000;
const Email=require('./models/server')

//Uses static flies from 
server.use(express.static('public'))
server.use('/css',express.static(__dirname+'public/css'))


//connect to data with connection string
//const dbstring="'mongodb+srv://testUser:1234@cluster0.4imml.mongodb.net/EsumDB?retryWrites=true&w=majority';"
//mongoose.connect(dbstring,{useNewUrlParser: true, useUnifiedTopology: true})
//.then((result)=>server.listen(5000))
// .catch((err)=>console.log(err));



//set views, how to change to ejs
//set views to change view engine to ejs
server.set('view engine','ejs')
server.set('views','./views')

//routes

//The main page of esum is up
server.get('/',(req,res)=>{
    res.render('index')
})

//The FAQ page is up. localhost:5000/faq
server.get('/faq',(req,res)=>{
    res.render('faq')
})

// The about page is up. Localhost:5000/about
server.get('/about',(req,res)=>{
    res.render('about')
})

// The /login when suer presses to login 
//server.get('/login',(req,res)=>{
    
//})




//creates port 5000 and listen for activity go to localhost:5000 to see
server.listen(port,()=>console.info(`Listening on port ${port}`))
