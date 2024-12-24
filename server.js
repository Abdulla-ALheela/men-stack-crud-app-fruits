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

app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));// Use Morgan middleware with the 'dev' option for concise output

//----------------------------------------Routes--------------------------------------------------//

app.get("/", async (req, res) => {
    res.render("index.ejs");
});

app.get("/fruits", async (req, res) => {
    const allFruits = await Fruit.find();
    res.render("fruits/index.ejs", { fruits: allFruits });
  });

  app.post("/fruits", async (req, res) => {
    if (req.body.isReadyToEat === "on") {
      req.body.isReadyToEat = true;
    } else {
      req.body.isReadyToEat = false;
    }
    await Fruit.create(req.body);
    res.redirect("/fruits"); 
  });

app.get("/fruits/new", (req, res) => {
    res.render("fruits/new.ejs");
});

//----------------------------------Port 3000 Listener-------------------------------------------//

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
