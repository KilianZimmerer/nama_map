import { Shop } from '../map/shop'

export const WhoAreWe = () =>
  `<div>
      <h2> Infos </h2>
      <hr>
      <h4> Wer wir sind </h4>
      <br>
      <p class="text-justify">
      Wir sind eine wachsende Gruppe von mittlerweile über 40 Menschen (nicht nur) aus Berlin,
      die sich im Rahmen des <a href="https://wirvsvirushackathon.devpost.com/"> WirVsVirus-Hackathons </a> zusammengefunden hat.
      </p>
    </div>
  `
// called in Navbar
// sidebar.setContent(infosContent);
// sidebar.toggle();

export const ShopInfo = ({
  logo,
  name,
  address,
  shopUrl,
  description,
}: Shop) => `
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
