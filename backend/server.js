const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv').config()
const bcrypt = require('bcryptjs')

const User = require('./model/user')
const Channel = require('./model/channels')
const Message = require('./model/messages')
const url = process.env.MONGO_URL


const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000', // Replace with the actual origin of your React app
    credentials: true,
}))

console.log(url)
mongoose.connect(url)
    .then(()=>{
        console.log("Successfully connected to database")
    })
    .catch((err)=>{
        console.log(err.message)
        console.log("Connection failed")
    })


app.post('/register', async (req, res) => {
    // console.log("data sent from front")
    const {user, pwd} = req.body;
    //check from database if user exists
    const password = await bcrypt.hash(pwd, 10)

    try{
        const response = await User.create({
            'username':user,
            'password':password
        })
        console.log(response)

    }catch (error){
        if(error.code ===11000){
            res.status(409).send()
        }
        throw error
    }

    res.send()
})



app.listen(3500)
