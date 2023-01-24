require("dotenv").config()
const express = require("express")
const connectToDB = require("./config/DB")
const userRoutes = require("./routes/userRoutes")
const app= express()

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

app.use("/",userRoutes)

connectToDB()
module.exports = app;