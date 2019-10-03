DROP DATABASE IF EXISTS movieDB;

CREATE DATABASE movieDB;

USE movieDB;

CREATE TABLE movieTable(
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(255),
    PRIMARY KEY (id)
);

INSERT INTO movieTable(title, genre) VALUES ('Inception', 'Thriller'), ('The Prestige', 'MindFuck');
