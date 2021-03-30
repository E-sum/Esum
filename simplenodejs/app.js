

//import
const express=require('express')
const mongoose=require('mongoose')
const server=express()
const port=5000;
const Email=require('./models/server')
const fs= require('fs');
const path= require('path');
var formidable= require('formidable');//For retrieving user input from the forms

//Uses static flies in public folder
server.use(express.static('public'))
server.use('/css',express.static(__dirname+'public/css'))

//mongodb driver from mongodb site, fix error from last time
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://testUser:1234@cluster0.4imml.mongodb.net/EsumDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  console.log("Connected to Mongodb")
  client.close();
});

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

// Handle the POST request for file upload. Vyanna
server.post('/file_upload',(req,res)=>{
    var form= new formidable.IncomingForm();
    form.parse(req,(err,fields,files)=>{
        if(err){
            console.log(err);
            res.redirect('/');
            throw err;
            //logs error,redirect page, and throws error
            //later will add function for a alert on page
        }
        /*Code:takes the incoming file from the temp folder path and changes it to the upload folder under file name
        Code adapated from W3school: (https://www.w3schools.com/nodejs/nodejs_uploadfiles.asp) DONT DELETE COMMENT*/
        var temPath=files.orgEmail.path;
        var fileName=files.orgEmail.name;
        var path="upload/"+fileName;
        fs.rename(temPath,path,(err)=>{
            if(err) throw error;
            console.log('Original file uploaded to folder \n Send user to home page and start analysis');
        });
        //function(fileName);
        res.redirect('/');
    });
});
// The /login when suer presses to login 
//server.get('/login',(req,res)=>{
    
//})

//server.get('/fgpass',(req,res)=>{}0

//function esumAnalysis(){}


//creates port 5000 and listen for activity go to localhost:5000 to see
server.listen(port,()=>console.info(`Listening on port ${port}`))