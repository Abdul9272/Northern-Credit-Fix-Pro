const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})


app.post("/login",async(req,res)=>{
    const{email,password}=req.body
    try{
        const check=await collection.findOne({email:email,password:password})
        console.log(check)
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,password}=req.body
      
    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

// app.post("/contact",async(req,res)=>{
//     const{email,name,phone,text}=req.body
//     // console.log(email,name,phone,text)
      
//     const data={
//         email:email,
//         name:name,
//         phone:phone,
//         text:text
//     }

//     try{
//         const check=await collection1.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//             await collection1.insertMany([data])
//         }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })

app.listen(8000,()=>{
    console.log("port connected");
})
