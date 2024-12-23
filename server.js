//----------------------------------Import the Packages------------------------------------------//

const express = require('express');
const morgan = require('morgan');

//Create an Express app
const app = express();

//-------------------------------------Middlewares------------------------------------------------//

app.use(morgan('dev'));// Use Morgan middleware with the 'dev' option for concise output

//----------------------------------------Routes--------------------------------------------------//

app.get('/', (req, res) => {
    res.render("home.ejs");
  });

//----------------------------------Port 3000 Listener-------------------------------------------//

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
