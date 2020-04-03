<?php
header('Content-type: text/html; charset=utf-8');

require_once('./includes/helpers.php');
require_once('./includes/dbconnect.php');

$shopInfo->name = $_POST["shop_name"];
$shopInfo->street_name = $_POST["shop_street"];
$shopInfo->street_number = "";
$shopInfo->postal_code = $_POST["shop_plz"];
$shopInfo->email = $_POST["shop_email"];
$shopInfo->website_url = $_POST["shop_website"];
$shopInfo->phone_number = $_POST["shop_phone"];
$shopInfo->mo_do_phone_availability = toBit($_POST["Mo-Do_availability"]);
$shopInfo->mo_do_phone_availability_from = $_POST["Mo-Do_phone_availability_from"];
$shopInfo->mo_do_phone_availability_until = $_POST["Mo-Do_phone_availability_to"];
$shopInfo->fr_phone_availability = toBit($_POST["Freitag_availability"]);
$shopInfo->fr_phone_availability_from = $_POST["Freitag_phone_availability_from"];
$shopInfo->fr_phone_availability_until = $_POST["Freitag_phone_availability_to"];
$shopInfo->shop_description = $_POST["shop_description"];
$shopInfo->merchandise_managment_system_description = $_POST["warenwirtschaftssystem"];
$shopInfo->categories = $_POST["shop_categories"];
$shopInfo->shipping_pick_up = toBit($_POST["pick_up"]);
$shopInfo->shipping_bicycle_delivery = toBit($_POST["bicycle"]);
$shopInfo->shipping_postal = toBit($_POST["postal"]);
$shopInfo->shipping_misc = $_POST["misc_shipping"];

function toBit($input)
{
    if (isset($input)) {
        return 1;
    } else {
        return 0;
    }
}

$address = $_POST['shop_street'];
$plz = $_POST['shop_plz'];
$geo = fetch_geo_data($address, $plz);
// print_r($geo);
// var_dump($geo);

/* create a prepared statement */
if ($stmt = $connection->prepare('INSERT INTO Shops (
    name,
    street_name,
    street_number,
    latitute,
    longitude,
    postal_code,
    email,
    website_url,
    phone_number,
    mo_do_phone_availability,
    mo_do_phone_availability_from,
    mo_do_phone_availability_until,
    fr_phone_availability,
    fr_phone_availability_from,
    fr_phone_availability_until,
    shop_description,
    merchandise_managment_system_description,
    categories,
    shipping_pick_up,
    shipping_bicycle_delivery,
    shipping_postal,
    shipping_misc
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')) {

    /* bind parameters for markers */
    $stmt->bind_param(
        "sssssssssississsssiiis",
        $shopInfo->name,
        $shopInfo->street_name,
        $shopInfo->street_number,
        $geo['latitude'],
        $geo['longitude'],
        $shopInfo->postal_code,
        $shopInfo->email,
        $shopInfo->website_url,
        $shopInfo->phone_number,
        $shopInfo->mo_do_phone_availability,
        $shopInfo->mo_do_phone_availability_from,
        $shopInfo->mo_do_phone_availability_until,
        $shopInfo->fr_phone_availability,
        $shopInfo->fr_phone_availability_from,
        $shopInfo->fr_phone_availability_until,
        $shopInfo->shop_description,
        $shopInfo->merchandise_managment_system_description,
        $shopInfo->categories,
        $shopInfo->shipping_pick_up,
        $shopInfo->shipping_bicycle_delivery,
        $shopInfo->shipping_postal,
        $shopInfo->shipping_misc
    );

    /* execute query */
    $stmt->execute();
    /* close statement */
    $stmt->close();
}

mysqli_close($connection);

//header("Location: https://map.nachbarschaftsmarktplatz.de");
header('Location: ' . $_SERVER["HTTP_REFERER"] );
