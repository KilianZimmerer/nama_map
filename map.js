// initialize the map
var map = L.map('map', {zoomControl: true}).setView([52.511946, 13.406166], 14);
var imgNotAvailable = 'https://www.postfreeadvertising.com/wp-content/uploads/2018/08/no-image-available-grid-263x172.png'
var toBeUsedTile = 'https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}'
// load a tile layer
L.tileLayer(
    toBeUsedTile,
  {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 17,
    minZoom: 5,
    accessToken: 'pk.eyJ1IjoibXl1c2VybmFtZWlzdGhpcyIsImEiOiJjazhjcnBhaGIwM3EwM29wZ25xNDhyanc4In0.Z_35X_kOuFSvYRsMnf8QfA',
  }
).addTo(map);

map.zoomControl.setPosition('bottomleft');