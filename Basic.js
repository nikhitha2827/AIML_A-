 /*const method=require('./Module.js')
const method=require('os')
function greet(){
    console.log("Nodejs started")
}
greet()
     
method.key1()
method.key2()
console.log(os.freemem())   
console.log(os.arch())
console.log(os.hostname())
console.log(os.loadavg())*/



/*const fs=require('fs')
fs.writeFile('./ .txt',"New content added",(err)=>{
    if(err){
        console.log("error occured")
    }
    console.log("file created successfully")
})
fs.readFile('./data.txt',(err,data)=>{
    if(err){
        console.log("error")
    }
    console.log("the data is: ",data)
})
fs.appendFile('./data.txt',"append content added",(err)=>{
    if(err){
        console.log("error ocurred")
    }
    console.log("append successfully")
})
fs.unlink('./data.txt',(err)=>{
    if(err){
        console.log("error ocurred")
    }
    console.log("deleted successfully")
})*/


/*const server=http.createServer((req,res)=>{
    console.log("running")
    res.write("Server started using js")
    res.end()
})
server.listen(3000); */

/*const express = require('express')
const app=express()
app.get('/home',(req,res)=>{
    res.send("home page content")
})
app.get('/about',(req,res)=>{
    res.send("about page content")
})
app.listen(3000,()=>{  
})
app.get('/home/:id',(req,res)=>{
    res.send("home page contant")
   // console.log(req.params.id)
    //console.log(req.query.name)
    //console.log(req.query.roll)
    

})

app.get('/about',(req,res)=>{
    // res.sendFile(__dirname+'/index.html')
    console.log("server running")
    //res.json({name:"nikki",roll:33})
    //res.status(404).send("hello")
    //res.redirect('/home')


    

})
app.listen(8000,()=>{
    console.log("server is running")
})      */




const express=require('express');
const app=express();
let users=["Nikki","Pavani"]
app.get('/users',(req,res)=>{
res.send(users);
});
/*app.post("/users",(req,res)=>{
users.push("Nikki");
res.send("user Added");
});*/
app.delete("/users",(req,res)=>{
    users.pop()
    res.send("users deleted0 ")
}) 
app.listen(30000,()=>{
    console.log("server is running")
});
