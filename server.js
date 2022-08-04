const express = require('express'); //-- DEFAULT: Basic express syntax --
const webRoute = require('./routes/web'); //-- Import the modular router for web.js --
const apiRoute = require('./routes/api'); //-- Import the modular router for api.js --
const PORT = process.env.PORT || 3001; //-- assigned variable using HEROKU PORT --

const path = require('path');
//-- Init express --
const app = express(); //-- DEFAULT: Basic express syntax --

//-- Middleware (Deafult:Static) --
app.use(express.static('public'));

//-- Middleware for parsing JSON and urlencoded form data -- source: wk11-act28
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//-- Middleware to Load the web/route
app.use(webRoute); //-- for routes/web.js --
app.use('/api', apiRoute); //-- for routes/api.js w/ add-on prefix --


//-- DEFAULT: Basic express syntax --
//-- This create your endpoints/router handlers or '/'

// Wildcard route to direct users to a 404 page
app.get('*', (req,res) => {

  res.status(404).sendFile
  (path.join(__dirname, './public/404.html'));
});

//-- DEFAULT: Basic express syntax --
//-- App listening to PORT --
//-- app.listen(PORT, hostname, backlog); --
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`);
})