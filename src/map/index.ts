import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './map.css'

// Fix icons by direct import
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import retinaIcon from 'leaflet/dist/images/marker-icon-2x.png'
import shadowIcon from 'leaflet/dist/images/marker-shadow.png'

import {
  toggleSidebarOnClick,
  createLayer,
  createSidebar,
  createMarker,
  createSidebarContent,
} from './utils'
import { fetchShopData, Shop } from './shop'

L.Icon.Default.imagePath = './'
L.Icon.Default.mergeOptions({
  iconRetinaUrl: retinaIcon,
  iconUrl: markerIcon,
  shadowUrl: shadowIcon,
})

export const initMap = async () => {
  // add map to existing! element with id 'map'
  const map = L.map('map', { zoomControl: false })
  const center: L.LatLngExpression = [52.511946, 13.406166]
  const zoom = 12
  const sidebar = createSidebar()

  const hideSidebar = () => {
    if (sidebar.isVisible()) {
      sidebar.hide()
    }
  }

  const createMapEntry = (shop: Shop, index: number) => {
    const marker = createMarker(shop)
    const content = createSidebarContent(shop)
    const handler = toggleSidebarOnClick(sidebar)(content, index)

    marker.on('click', handler)
    marker.addTo(map)
  }

  map.setView(center, zoom)
  map.addLayer(createLayer())
  map.addControl(sidebar)
  map.on('click', hideSidebar)

  const shops = await fetchShopData()
  shops.forEach(createMapEntry)
}
