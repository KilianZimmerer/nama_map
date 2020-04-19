import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from './templates/Navbar'
import { initMap } from './map'
import { newElement } from './utils'

// create root element with empty divs for map components
const Root = () => {
  const root = newElement('root')
  root.appendChild(newElement('sidebar'))
  root.appendChild(newElement('map'))
  root.appendChild(Navbar())
  return root
}

document.body.appendChild(Root())

initMap()
