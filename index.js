const express = require("express")
const cors = require("cors")

const app = express()
const port = process.env.PORT || 3005


app.use(express.json())
app.use(cors())

app.get('/test', (req, res) => {
    res.send('test Hello World!')
  })

app.use("/",function (req,res){
    res.send("Hello World  Node")
})

app.listen(port,function(){
    console.log("Listening on port " + port)
})