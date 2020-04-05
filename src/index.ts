import { createMap } from './map'

function createRoot() {
  const element = document.createElement('div')
  element.id = 'map'
  return element;
}

document.body.appendChild(createRoot());
createMap()
