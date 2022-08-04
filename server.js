const express = require('express');
const PORT = process.env.PORT || 3001; // assigned variable using HEROKU PORT

// Init express
const app = express();

// App listening to PORT
// app.listen(PORT, hostname, backlog);
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`);
})