const express= require("express")
const Port=5000
console.log(express)
console.log("hello")

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/api",(req,res)=>{
    res.send("this is a response")
})

const users=[
    {name : "fgfff"},
    {name :"sdgdfxf"},
    {name :"hetdfgxcn"},
    {name :"hexhtdbg"}
]

app.get("/api/AllUsers",(req,res)=>{
    res.json(users)
   
    
})

app.post("/api/NewUser",(req,res)=>{
    console.log(req.body)
    users.push(req.body)

    res.json({status:"welcome new"})
})







const server=app.listen(Port,()=>{
    console.log(`server is locked and loaded on port : ${Port}`)
})
