// create markers and set that sidebar opens and closes when click on marker
function create_markers(val, idx, array) {
  var sidebarContent = (
    `<div>
      <img src="${val['logo']}" alt="" style="width:250px" class="rounded">
      <br>
      <h4>${val['company_name']}</h4>
      <hr>
      <p class="text-justify">
      ${val['description']}
      </p>
      <hr>
      <img src="./location_icon.png" style="width:20px"> ${val['address']}
      `
  )
  if (val['shop_url']){sidebarContent = sidebarContent.concat(
    `<br> <br>
    <img src="./home_icon.png" style="width:20px">  <a href="${val['shop_url']}">online shop</a>
    <br> <br>
    `)
  }
  sidebarContent = sidebarContent.concat(
    `<hr>
    Erreichbarkeit: <br> <br>`
    )
  if (val['phone_number']){sidebarContent = sidebarContent.concat(
    `<img src="./phone_icon.png" style="width:20px"> <a href="tel:${val['phone_number']}"> ${val['phone_number']} </a> <br> <br>`
    )
  }
  if (val['email']){
    sidebarContent = sidebarContent.concat(
    `<img src="./mail_icon.png" style="width:16px"> <a href="mailto:${val['email']}"> ${val['email']} </a> <br>`
    )}
  sidebarContent = sidebarContent.concat(
      `<hr>
    </div>`
    )



  function onClickMarker(e) {
    if (idx == sidebar.state) {
      sidebar.hide()
      sidebar.state = array.lengths
    } else {
      sidebar.setContent(sidebarContent);
      sidebar.state = idx
      sidebar.show();
    }
  }
  function onClickMap(e) {
    if (sidebar.isVisible()) {
      sidebar.hide();
      sidebar.state = array.lengths;
      sidebar.infoSidebarState = 0;
    }
  }
  map.on('click', onClickMap);
  marker = L.marker([val['latitude'], val['longitude']])
  marker.addTo(map);
  marker.on('click', onClickMarker);
};

// add data from db
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    var shopData = JSON.parse(this.responseText);
    shopData.map(toMarker).forEach(create_markers);
  }
};
xmlhttp.open("GET", "get_shop_info.php", true);
xmlhttp.send();

var toMarker = function (data) {
  return {
    'company_name': data.name,
    'address': createAdress(data),
    'phone_number': data.phone_number,
    'email': data.email,
    'shop_url': buildExternalLink(data.website_url),
    'description': data.shop_description,
    'logo': '',
    'sortiment': data.categories || '',
    'latitude': hasValidGeoData(data) ? data.latitute : '',
    'longitude': hasValidGeoData(data) ? data.longitude : '',
  };
}

const hasValidGeoData = ({
  latitute,
  longitude,
}) => latitute && longitude;

const createAdress = ({
  street_name: street,
  street_number: number,
  postal_code: zipCode,
}) => `${street}${number ? ' ' + number : ''}, ${zipCode} Berlin`

const hasHttp = url => /^https?:\/\//.test(url)

const buildExternalLink = (url) => {
  if (hasHttp(url)) {
    // could check if server is reachable
    return url;
  }
  return 'https://' + url;
}