var connection = require("./connection.js");


class ORM  {
  constructor(connection){
    this.connection = connection
  }

  printQuestionMarks(numberOfValuesOrColumns, type){
    const questionMarks = [];

    for (var i = 0; i < numberOfValuesOrColumns; i++) {
      if(type === 'cols'){
        questionMarks.push("??");
      } else {
        questionMarks.push("?")
      } 
    }
    return questionMarks.join(', ');
  }

    // viewAll
    view(table) {
        const queryString = "SELECT * FROM ??";

        return this.connection.query(queryString, [table])
    }
    
    // addNote
    create(columns, values) {
        const queryString = `INSERT INTO notes (${columns.join(', ')}) VALUES (${this.printQuestionMarks(values.length, 'vals')})`;
    
        return this.connection.query(queryString, [...values])
      }

    // deleteNote
    delete(cols, value){
        const queryString = 'DELETE FROM notes WHERE ??=?';
    
        return this.connection.query(queryString, [cols, value])
      }

}
module.exports = new ORM(connection);