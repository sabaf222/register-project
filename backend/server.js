const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const sabzlearnDB = require('./db/dist/sabzlearnDB.dev')
const userRouters=require('./routes/userRouters')

let app=express()
app.use(cors())
app.use(bodyParser.json())
app.use('/api/users',userRouters)

app.listen(4000,()=>{
    console.log('server run shod');
})

