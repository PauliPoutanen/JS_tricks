const express = require("express")
const mongoose = require("mongoose")
const shoppingRoute = require("./routes/shoppingroute")

let app = express()
app.use(express.json())

const mongo_url = process.env.MONGODB_URL
const mongo_user = process.env.mongodb_user
const mongo_password = process.env.mongodb_password

let port = process.env.PORT || 3001

const url = "mongodb+srv://alppilanmies:huutokauppasalasana@cluster0.woiu5mj.mongodb.net/shoppingdatabase?retryWrites=true&w=majority"

console.log(url)

mongoose.connect(url).then (
    ()=> console.log("Connected to MongoDB"),
    (error) => 
    console.log("Failed to connect MongoDB. Reason", error)
)
app.use("/api", shoppingRoute)
app.listen(port)
console.log("Running in port ", port)