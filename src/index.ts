import { createMap } from './map'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from './components/Navbar'
import { newElement } from './utils'

const createRoot = () => {
  const root = newElement('root')
  root.appendChild(newElement('map'))
  root.appendChild(Navbar())
  return root
}

document.body.appendChild(createRoot());
createMap()
