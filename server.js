require("dotenv").config(); 
require("./config/database")

//----------------------------------Import the Packages------------------------------------------//

const express = require('express');
const morgan = require('morgan');

//Models
const Fruit = require("./models/fruit.js");

//Create an Express app
const app = express();

//-------------------------------------Middlewares------------------------------------------------//

app.use(morgan('dev'));// Use Morgan middleware with the 'dev' option for concise output

//----------------------------------------Routes--------------------------------------------------//

app.get("/", async (req, res) => {
    res.render("index.ejs");
  });
  
  
//----------------------------------Port 3000 Listener-------------------------------------------//

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
