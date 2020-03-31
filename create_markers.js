// create markers and set that sidebar opens and closes when click on marker
function create_markers(val, idx, array) {
  var sidebarContent = (
    `<div>
      <img src="${val['logo']}" alt="" style="width:250px" class="rounded">
      <br>
      <h3>${val['company_name']}</h3>
      <hr>
      <img src="./location_icon.png" style="width:20px"> ${val['address']}
      <br> <br>
      <img src="./home_icon.png" style="width:20px">  <a href="${val['shop_url']}">online shop</a>
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
  marker = L.marker([val['latitude'], val['longitude']])
  marker.addTo(map);
  marker.on('click', onClickMarker);
};

shop_data.forEach(create_markers);