//-- Create a router instance. This import the router --
const router = require('express').Router();
const path = require('path');

const publicPath = path.join(__dirname, '..', 'public');

//-- 'GET / ' root directory should return to index.html --
router.get('/', (req,res) => {

  //-- Helper function: using sendFile w/out using fs path
  res.sendFile(path.join(publicPath, 'index.html'));

});

//-- 'GET /notes ' root directory should return to notes.html --
router.get('/notes', (req,res) => {

  //-- Helper function: using sendFile w/out using fs path
  res.sendFile(path.join(publicPath, 'notes.html'));

});


//-- DEFAULT: to export --
module.exports = router;
