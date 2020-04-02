<?php
require_once('includes/helpers.php');
require_once('includes/dbconnect.php');
?>
<?php
header("Content-Type: application/json; charset=UTF-8");
$stmt = $connection->prepare(
  "SELECT
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
    FROM Shops LIMIT 100"
);
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);

// return request data
echo json_encode($outp);
