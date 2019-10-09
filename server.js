const {main} = require('./lib/app')
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")))

console.log(__dirname)


app.get('/weather', async (req,res)=>{
    let data = await main(req.query.location)
    res.send(data)
})

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})