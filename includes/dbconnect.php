<?php
function db_connect()
{

// $config = parse_ini_file('../private/config.ini');
  $config = array(
    "servername" => "localhost",
    "username" => "test",
    "password" => "password",
    "dbname" => "shop_info",
  );

  static $connection;

  if (!isset($connection)) {
    $connection = mysqli_connect($config['servername'], $config['username'], $config['password'], $config['dbname']);
  }

  if ($connection === false) {
    return mysqli_connect_error();
  }
  return $connection;
}

$connection = db_connect();

if ($connection->connect_error) {
  die("Connection failed: " . $connection->connect_error);
} else {
  echo 'all good';
}
