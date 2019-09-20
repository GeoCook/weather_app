const {main} = require('./lib/app')
const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, "public")))

console.log(__dirname)


app.get('/weather', async (req,res)=>{
    let data = await main(req.query.location)
    res.send(data)
})

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})