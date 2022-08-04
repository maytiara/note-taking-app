const express = require('express'); //-- DEFAULT: Basic express syntax --
const PORT = process.env.PORT || 3001; //-- assigned variable using HEROKU PORT --

//-- Init express --
const app = express(); //-- DEFAULT: Basic express syntax --

// Define an API Endpoint

//-- DEFAULT: Basic express syntax --
//-- This create your endpoints/router handlers or '/'
app.get('*', (req,res) {
  res.status(404).send('page not found'); //will change later
})
// // Wildcard route to direct users to a 404 page
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/pages/404.html'))
// );

//-- DEFAULT: Basic express syntax --
//-- App listening to PORT --
//-- app.listen(PORT, hostname, backlog); --
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`);
})