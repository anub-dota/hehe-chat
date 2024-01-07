const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000', // Replace with the actual origin of your React app
    credentials: true,
}))

const url = "mongodb+srv://littleBob:bigBob@chatapp.sg6qsvv.mongodb.net/?retryWrites=true&w=majority"
const connectionParams = {
    useNewUrlParser:true,
    useUnifiedTopology:true
}

mongoose.connect(url,connectionParams)
    .then(()=>{
        console.log("Successfully connected to database")
    })
    .catch((err)=>{
        console.log(err)
        console.log("Connection failed")
    })
app.get('/',(req,res)=>{
    res.send("Welcome to chat app")
})

app.post('/register',(req,res)=>{
    console.log("data sent from front")
    console.log(req.body)

    res.send({})
})

app.listen(3500)
