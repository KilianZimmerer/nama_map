GRANT ALL PRIVILEGES ON * . * TO 'test'@'localhost' IDENTIFIED BY 'password';
FLUSH PRIVILEGES;

CREATE DATABASE shop_info;
USE shop_info;
CREATE TABLE Shops (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    street_name varchar(255),
    street_number varchar(255),
    latitute varchar(255),
    longitude varchar(255),
    postal_code varchar(255),
    email varchar(255),
    website_url varchar(255),
    phone_number varchar(255),
    mo_do_phone_availability int,
    mo_do_phone_availability_from varchar(255),
    mo_do_phone_availability_until varchar(255),
    fr_phone_availability int,
    fr_phone_availability_from varchar(255),
    fr_phone_availability_until varchar(255),
    shop_description TEXT,
    merchandise_managment_system_description TEXT,
    categories varchar(255),
    shipping_pick_up int,
    shipping_bicycle_delivery int,
    shipping_postal int,
    shipping_misc varchar(255),
    PRIMARY KEY (id)
);