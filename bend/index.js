const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/routes')
const cors = require("cors")
const dotenv = require('dotenv')   
dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('mongoDb connected')
}).catch((err)=>{
    console.log(err.message)
})

const app = express()

app.use(cors())

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Your application is working')
})

app.use('/', router)

app.listen(5000, ()=>{
    console.log(`server started on http://localhost:${5000}`)
})