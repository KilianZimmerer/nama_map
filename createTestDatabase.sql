GRANT ALL PRIVILEGES ON * . * TO 'test'@'localhost' IDENTIFIED BY 'password';
FLUSH PRIVILEGES;

CREATE DATABASE shop_info;
CREATE TABLE Shops (
    id int,
    lastname varchar(255),
    firstname varchar(255),
    email varchar(255)
);