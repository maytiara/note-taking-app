//-- Create a router instance. This import the router --
const router = require('express').Router(); //--DEFAULT: required for express
const fs = require('fs'); //--file path
const path = require('path'); //--DEFAULT: required for fs
const uuid = require('uuid');

const dbPath = path.join(__dirname, '..', 'db', 'db.json');

//-- Function to store the content of notes.html
function storeNotes () {

  //-- this read the content of db.json
  const content = fs.readFileSync(dbPath, 'utf-8'); //-- An synchronous method
  return JSON.parse(content) || []; //-- this function will return the content JSON otherwise || we added a Fallback for an empty content --
}

//-- Function to pass all the arguments inside the db.json file --
function saveNotes(title, text){

  //-- this create new note to db.json --
  const createNote = {
    id: uuid.v4(),
    title,
    text,
  }

  //-- retrieve the existing note data
  const notes = storeNotes();

  //-- add the created note --
  notes.push(createNote);

  //-- save the new file using a synchronous method --
  fs.writeFileSync(dbPath, JSON.stringify(notes), 'utf-8');
  return createNote;
}

//-- 'GET /api/notes that reads the db.json file & return to saved data in JSON as storage --
router.get('/notes', (req,res) => {

  //-- this return the response from function storeNotes --
  const notes = storeNotes();
  res.json(notes);

});

//-- 'POST /api/notes' this receive a new note from the request body, then added to db.json file. --
router.post('/notes', (req, res) => { //--endpoint for POST route --

  //-- this create a new note
  const created = saveNotes (req.body.title, req.body.text); //-- check middleware to parse JSON for this function to work --

});

//-- DEFAULT: to export --
module.exports = router;