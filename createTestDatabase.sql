GRANT ALL PRIVILEGES ON * . * TO 'test'@'localhost' IDENTIFIED BY 'password';
FLUSH PRIVILEGES;

CREATE DATABASE shop_info;
USE shop_info;
CREATE TABLE Shops (
    id int,
    name varchar(255),
    street_name varchar(255),
    street_number varchar(255),
    postal_code varchar(255),
    email varchar(255),
    website_url varchar(255),
    phone_number varchar(255),
    mo_do_phone_availability BIT,
    mo_do_phone_availability_from varchar(255),
    mo_do_phone_availability_until varchar(255),
    fr_phone_availability BIT,
    fr_phone_availability_from varchar(255),
    fr_phone_availability_until varchar(255),
    shop_description varchar(255),
    merchandise_managment_system_description varchar(255),
    categories varchar(255),
    shipping_pick_up BIT,
    shipping_bicycle_delivery BIT,
    shipping_postal BIT,
    shipping_misc varchar(255)
);