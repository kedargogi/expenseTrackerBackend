const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

const sequelize = require('./util/database')
const userRoutes = require('./routes/userLoginSignup')
const User = require('./models/user')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use(userRoutes)


sequelize
//.sync({ force: true })
.sync()
.then((res)=>{
    console.log("Server Running on 3000")
    app.listen(3000)
})
.catch(err=>console.log(err))
