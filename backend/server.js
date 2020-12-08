const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const items = require('./routes/api/item')
const app = express()

//Bodyparser Middleware 
//Middleware has access to res and req 
app.use(bodyParser.json())
app.use(cors())

//Anything that has api/items in its url should go 
//to the items file that we import from routes

//app.use(express.static(path.join(__dirname,'public')))
app.use('/api', items)

const port = process.env.PORT || 3000;

//get the dbs
const db = require('./db/Employee');
//const db2 = require('./db/Task');

app.listen(port, () => console.log('Running'))

