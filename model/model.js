// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

class Note {
    viewNotes() {
      return orm.view(["notes"])
    }
    addNote(values) {
      return orm.create(['title', 'body', 'id'], values)
    }
    deleteNote(value) {
      return orm.delete('id', value)
    }
  };

module.exports = new Note();