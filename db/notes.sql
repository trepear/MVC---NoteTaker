DROP DATABASE IF EXISTS note_taker_db;
CREATE DATABASE note_taker_db;
USE note_taker_db;

CREATE TABLE notes (
  id INT AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  body VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO notes (title, body) VALUES ("Test note", "Writing this as a test note");