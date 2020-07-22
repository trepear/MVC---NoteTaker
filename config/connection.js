const mysql = require('mysql');
const util = require('util');
var connection;

if (process.env.JAWSDB_URL) {
connection = mysql.createConnection((process.env.JAWSDB_URL));
} else {
  connection = mysql.createConnection({
    host: 'mkorvuw3sl6cu9ms.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'zpdhe6xogkzesnc9',
    password: 'tmhcbdv1qttm8pv5',
    database: 'ew37xxi3o2v9ctp8'
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

connection.query = util.promisify(connection.query);

module.exports = connection;