import { WhoAreWe } from './Sidebar'

export const Navbar = () => {
  const navbar = document.createElement('nav')
  navbar.id = 'navbar'
  navbar.className = 'navbar navbar-expand-sm bg-dark navbar-dark'
  //navbar.innerHTML = template

  navbar.appendChild(NavbarBrand())
  navbar.appendChild(
    NavbarControl([
      Button('Shop Registrieren'),
      Button('Infos', openInfoSidebar),
    ]),
  )
  return navbar
}

const NavbarBrand = () => {
  const a = document.createElement('a')
  a.className = 'navbar-brand'
  a.href = 'https://www.nachbarschaftsmarktplatz.de'
  a.innerHTML = `
    <img src="./icon-white-1.png" width="50" alt="">
    Nachbarschaftsmarktplatz
  `
  return a
}

const NavbarControl = (children: HTMLElement[] = []) => {
  const navbarControl = document.createElement('ul')
  navbarControl.className = 'navbar-nav ml-auto'

  children.forEach((child, index) => {
    // use index to cache elements
    const item = document.createElement('li')
    item.className = 'nav-item'
    item.appendChild(child)
    navbarControl.appendChild(item)
  })
  return navbarControl
}

const Button = (text: string, onClick?: (event: MouseEvent) => any) => {
  const link = document.createElement('a')
  link.setAttribute('role', 'button')
  link.className = 'nav-link'
  link.href = '#'
  link.text = text
  link.addEventListener('click', onClick)
  return link
}

export const openInfoSidebar = (event: Event) => {
  console.log('this', this)
  console.log('event', event)
  // sidebar.setContent(WhoAreWe())
  // sidebar.toggle()
  alert('hi')
}

const template = `
<div class="nxt-content">
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<a class="navbar-brand" href="https://www.nachbarschaftsmarktplatz.de">
<img src="./icon-white-1.png" width="50" alt="">
Nachbarschaftsmarktplatz
</a>
<ul class="navbar-nav ml-auto">
<li class="nav-item">
<a class="nav-link" href="#" role="button" data-toggle="modal" data-target="#shopRegistration"> Shop
registrieren </a>
</li>
<li class="nav-item">
<a class="nav-link" href="#" role="button" onclick="openInfoSidebar()"> Infos </a>
</li>
</ul>
</nav>
</div>`
