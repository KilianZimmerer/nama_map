<html>
<body>
<?php

$shopInfo->name = $_POST["shop_name"];
$shopInfo->street_name = $_POST["shop_street"];
$shopInfo->street_number = "";
$shopInfo->postal_code = $_POST["shop_plz"];
$shopInfo->email = $_POST["shop_email"];
$shopInfo->website_url = $_POST["shop_website"];
$shopInfo->phone_number = $_POST["shop_phone"];
$shopInfo->mo_do_phone_availability = tooBoolean($_POST["Mo-Do_availability"]);
$shopInfo->mo_do_phone_availability_from = $_POST["Mo-Do_phone_availability_from"];
$shopInfo->mo_do_phone_availability_until = $_POST["Mo-Do_phone_availability_to"];
$shopInfo->fr_phone_availability = tooBoolean($_POST["Freitag_availability"]);
$shopInfo->fr_phone_availability_from = $_POST["Freitag_phone_availability_from"];
$shopInfo->fr_phone_availability_until = $_POST["Freitag_phone_availability_to"];
$shopInfo->shop_description = $_POST["shop_description"];
$shopInfo->merchandise_managment_system_description = $_POST["warenwirtschaftssystem"];
$shopInfo->categories = $_POST["shop_categories"];
$shopInfo->shipping_pick_up = tooBoolean($_POST["pick_up"]);
$shopInfo->shipping_bicycle_delivery = tooBoolean($_POST["bicycle"]);
$shopInfo->shipping_postal = tooBoolean($_POST["postal"]);
$shopInfo->shipping_misc = tooBoolean($_POST["misc_shipping"]);

function tooBoolean($input) {
    if (isset($input)) {
        return True;
    } else {
        return False;
    }
}


$servername = "localhost";
$username = "test";
$password = "password";
$dbname = "shop_info";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


/* create a prepared statement */
if ($stmt = $mysqli->prepare('INSERT INTO test131 (
    name,
    street_name,
    street_number,
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
    shipping_misc,
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'))

/* bind parameters for markers */
$stmt->bind_param(
    "ssss",
    $shopInfo['name'],
    $shopInfo['street_name'],
    $shopInfo['street_number'],
    $shopInfo['postal_code'],
    $shopInfo['email'],
    $shopInfo['website_url'],
    $shopInfo['phone_number'],
    $shopInfo['mo_do_phone_availability'],
    $shopInfo['mo_do_phone_availability_from'],
    $shopInfo['mo_do_phone_availability_until'],
    $shopInfo['fr_phone_availability'],
    $shopInfo['fr_phone_availability_from'],
    $shopInfo['fr_phone_availability_until'],
    $shopInfo['shop_description'],
    $shopInfo['merchandise_managment_system_description'],
    $shopInfo['categories'],
    $shopInfo['shipping_pick_up'],
    $shopInfo['shipping_bicycle_delivery'],
    $shopInfo['shipping_postal'],
    $shopInfo['shipping_misc']);

/* execute query */
$stmt->execute();

/* close statement */
$stmt->close();

mysqli_close($conn);

?>