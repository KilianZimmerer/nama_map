// initialize the map
var map = L.map('map', { zoomControl: true }).setView([52.511946, 13.406166], 12);
var imgNotAvailable = 'https://www.postfreeadvertising.com/wp-content/uploads/2018/08/no-image-available-grid-263x172.png'
var toBeUsedTile = 'https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}'
var myStyle = 'https://api.mapbox.com/styles/v1/myusernameisthis/ck8k8w25g02d01jmnnbehc46d/tiles/512/{z}/{x}/{y}?access_token={accessToken}'
var stadiamaps = 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png'
var osmMap = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png'
var cartoDB = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
// load a tile layer
L.tileLayer(
  myStyle,
  {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 17,
    minZoom: 11,
    accessToken: 'pk.eyJ1IjoibXl1c2VybmFtZWlzdGhpcyIsImEiOiJjazhndmhzNmYwNHV3M3NzMDcwNGs1ZjZzIn0.2ZRug8MHanm-5yQd9ptfGg',
    tileSize: 512,
    zoomOffset: -1
  }
).addTo(map);

map.zoomControl.setPosition('bottomleft');
