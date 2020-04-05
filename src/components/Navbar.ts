
export const Navbar = () => {
  const navbar = document.createElement('div')
  navbar.id = 'navbar'
  navbar.innerHTML = template
  return navbar
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
