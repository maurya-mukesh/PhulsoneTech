const express = require('express');
const cors = require('cors');
require('dotenv').config();
// const bodyParser = require('body-parser')


const Route = require('./routes/router')
const db = require('./database/db');

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use('/api', Route);



//  listen
app.listen(PORT, (error)=>{
  if (error) throw error;
  console.log(`Server is running on ${PORT}`)
})
