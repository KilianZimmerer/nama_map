import 'bootstrap/dist/css/bootstrap.min.css'
// import { Navbar } from './components/Navbar'
import { initMap } from './components/Map'
import { newElement } from './utils'

// create root element with empty divs for map components
const Root = () => {
  const root = newElement('root')
  root.appendChild(newElement('map'))
  root.appendChild(newElement('sidebar'))
  // appendChild(Navbar())
  return root
}

document.body.appendChild(Root())

initMap()
