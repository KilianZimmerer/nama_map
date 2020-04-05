import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './map.css'

export const createMap = () => {

  const defaultCenter: L.LatLngExpression = [52.511946, 13.406166]
  const defaultZoom = 12
  const map = L.map('map', { zoomControl: false })
  map.setView(defaultCenter, defaultZoom);

  const urlTemplate = 'https://api.mapbox.com/styles/v1/myusernameisthis/ck8k8w25g02d01jmnnbehc46d/tiles/512/{z}/{x}/{y}?access_token={accessToken}'
  const baseMap = L.tileLayer(
    urlTemplate,
    {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 16,
      minZoom: 11,
      accessToken: 'pk.eyJ1IjoibXl1c2VybmFtZWlzdGhpcyIsImEiOiJjazhndmhzNmYwNHV3M3NzMDcwNGs1ZjZzIn0.2ZRug8MHanm-5yQd9ptfGg',
      tileSize: 512,
      zoomOffset: -1,
    }
  )

  baseMap.addTo(map)
}
