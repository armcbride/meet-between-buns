DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
)