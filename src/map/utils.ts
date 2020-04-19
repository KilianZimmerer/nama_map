import * as L from 'leaflet'
import 'leaflet-sidebar'
import 'leaflet-sidebar/src/L.Control.Sidebar.css'
import { Shop } from './data'

export const createLayer = () => {
  const urlTemplate = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  // const urlTemplate = 'https://api.mapbox.com/styles/v1/myusernameisthis/ck8k8w25g02d01jmnnbehc46d/tiles/512/{z}/{x}/{y}?access_token={accessToken}'

  return L.tileLayer(urlTemplate, {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 16,
    minZoom: 11,
    // accessToken: 'pk.eyJ1IjoibXl1c2VybmFtZWlzdGhpcyIsImEiOiJjazhndmhzNmYwNHV3M3NzMDcwNGs1ZjZzIn0.2ZRug8MHanm-5yQd9ptfGg',
    accessToken:
      'pk.eyJ1IjoibXl1c2VybmFtZWlzdGhpcyIsImEiOiJjazhlaXc0NzAwMGFjM2hteHA3MWR6OGJwIn0.6LJ2ENy9U_cz3NFYkVxu9g',
    tileSize: 512,
    zoomOffset: -1,
  })
}

export const createSidebar = () =>
  L.control.sidebar('sidebar', {
    closeButton: false,
    position: 'right',
    autoPan: false,
  })

export const createMarker = ({ latitude, longitude }: Shop) =>
  L.marker([latitude, longitude])

export const toggleSidebarOnClick = (sidebar: any) => (
  content: string,
  index: number,
) => () => {
  // redux store?
  const state: number | null = sidebar.state

  if (index === state) {
    sidebar.hide()
    sidebar.state = null
  } else {
    sidebar.setContent(content)
    sidebar.state = index
    sidebar.show()
  }
}

export const createSidebarContent = ({
  logo,
  name,
  address,
  shopUrl,
  description,
}: Shop): string => `
    <div>
      <img src="${logo}" alt="" style="width:250px" class="rounded">
      <br>
      <h4>${name}</h4>
      <hr>
      <p class="text-justify">${description}</p>
      <hr>
      <img src="./location_icon.png" style="width:20px"> ${address}
      <br> <br>
      <img src="./home_icon.png" style="width:20px">  <a href="${shopUrl}">online shop</a>
    </div>
`
