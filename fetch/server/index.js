const express = require('express')
const app = express()
const cors = require('cors')
var bodyParser = require('body-parser')


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("hiiiii")
})
app.post('/in',(req,res)=>{
    console.log(req.body)
    res.send("hiii")
})

app.listen(3000,()=>{
    console.log("connectted to 3000")
})