<?php
header('Content-type: text/html; charset=utf-8');

// use php-curl to get contents
function curl_get_contents($url)
{
  $ch = curl_init();

  curl_setopt($ch, CURLOPT_HEADER, 0);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_REFERER, 'https://nachbarschaftsmartkplatz.de');

  $data = curl_exec($ch);
  curl_close($ch);

  return $data;
}

function create_url($address, $plz)
{
  $url = "https://nominatim.openstreetmap.org/search/";
  $url .= rawurlencode($address . " " . $plz);
  $url .= "?format=json";
  return $url;
}

function fetch_geo_data($address, $plz)
{
  $url = create_url($address, $plz);
  $json = curl_get_contents($url);
  $response = json_decode($json, true);

  return array(
    "latitude" => $response[0]['lat'],
    "longitude" => $response[0]['lon'],
  );
}
