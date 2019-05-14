let express = require("express")
let app = express()
app.use((req,res,next)=>{

    let date = new Date()
    console.log(date.getHours())
    /*The web application is open between 
    8h and 17h. If a user accesses to the
     web app before 8h or after 17h, 
     a message is displayed "Our office is not open now"
    */
   let d= 13
    if(date.getHours()<8 || date.getHours()>17)
     res.send("<h1>Our office is not open now</h1>")
     else
    next();

})
app.get("/home",(req,res)=>{
    res.sendFile(__dirname+"/public/home.html")
})
app.get("/ourservices",(req,res)=>{
    res.sendFile(__dirname+"/public/ourservices.html")
})
app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+"/public/contact.html")
})

app.listen(8888,(err)=>{
if(err) console.log("error")
console.log("server is running port 8888")
})