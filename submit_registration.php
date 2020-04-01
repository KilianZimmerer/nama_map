<?php echo $_POST; ?>
<?php echo $_REQUEST; ?>
<?php
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

$sql = "INSERT INTO Shops (firstname, lastname, email)
        VALUES ('John', 'Doe', 'john@example.com');";
$sql .= "INSERT INTO Shops (firstname, lastname, email)
        VALUES ('Mary', 'Moe', 'mary@example.com');";
$sql .= "INSERT INTO Shops (firstname, lastname, email)
        VALUES ('Julie', 'Dooley', 'julie@example.com')";

if (mysqli_multi_query($conn, $sql)) {
    echo "New records created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>