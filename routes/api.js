//-- Create a router instance. This import the router --
const router = require('express').Router(); //--DEFAULT: required for express
const fs = require('fs'); //--file path
const path = require('path'); //--DEFAULT: required for fs

//-- Function to store the content of notes.html
function storeNotes () {

  //-- this read the content of db.json
}

//-- 'GET /api/notes that reads the db.json file & return to saved data in JSON as storage
router.get('/notes', (req,res) => {

  //-- Helper function: using fs Path
  

});

//-- DEFAULT: to export --
module.exports = router;