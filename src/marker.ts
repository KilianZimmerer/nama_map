interface Data {
  latitute: string,
  longitude: string,
  street_name: string,
  street_number: number,
  postal_code: string,
  name: string,
  phone_number: string,
  email: string,
  website_url: string,
  shop_description: string,
  logo: any,
  categories: string,
}

interface Shop {
  name: string,
  address: string,
  phoneNumber: string,
  email: string,
  shopUrl: string,
  description: string,
  logo: any,
  sortiment: string,
  latitude: number,
  longitude: number,
}

const syncMap = async (map: L.Map) => {
  const shopData = await fetchShopData()
  const shops = shopData.map(createShop)

  const marker = shops.map(createMarker)
  shops.forEach(createMapEntry)


  marker.forEach(addTo(map))

  marker.forEach(addOnClick())
}

const createMapEntry = (sidebar: any) => (shop:Shop, index: number) => {
  const marker = createMarker(shop)
  const content = createSidebarContent(shop)
  const handler = toggleSidebarOnClick(sidebar)(content, index)

  marker.on('click', handler)
}

const createSidebarToggler = (sidebar: any) => (content: string, index: number) => (event: any) => {}
const addTo = (map: L.Map) => (marker: L.Marker) => marker.addTo(map)

const addClickHandler = (sidebar: any) => (content: string, index: number) => (event)
const addonClick = (clickHandler: L.LeafletMouseEventHandlerFn) => (marker: L.Marker, index: ) => {
  marker.on('click', clickHandler);
}

const createMarker = ({latitude, longitude}: Shop) => L.marker([latitude, longitude])


const toggleSidebarOnClick = (sidebar: any) => (content: string, index: number) => (event: any) => {
  // redux store?
  const state: number| null = sidebar.state

  if (index === state) {
    sidebar.hide()
    sidebar.state = null
  } else {
    sidebar.setContent(content);
    sidebar.state = index
    sidebar.show();
  }

}


const fetchShopData = async (): Promise<Data[]> => {
  const response = await fetch('get_shop_info.php')
  const status = response.status
  if (status === 200) {
    return await response.json()

  }
  throw new Error('Could not read shop info')
}


const createSidebarContent = ({ logo, name, address, shopUrl, description }: Shop): string => {
  return (
    `<div>
    <img src="${logo}" alt="" style="width:250px" class="rounded">
    <br>
    <h4>${name}</h4>
    <hr>
    <p class="text-justify">${description}</p>
    <hr>
    <img src="./location_icon.png" style="width:20px"> ${address}
    <br> <br>
    <img src="./home_icon.png" style="width:20px">  <a href="${shopUrl}">online shop</a>
    </div>`
    )
  };

  const createShop = function (data: Data): Shop {
    return {
      name: data.name,
      address: createAdress(data),
      phoneNumber: data.phone_number,
      email: data.email,
      shopUrl: buildExternalLink(data.website_url),
      description: data.shop_description,
      logo: '',
      sortiment: data.categories || '',
      latitude: hasValidGeoData(data) ? parseFloat(data.latitute) : 0,
      longitude: hasValidGeoData(data) ? parseFloat(data.longitude) : 0,
    };
  }

const hasValidGeoData = ({
  latitute,
  longitude,
}: Data): boolean => !!latitute && !!longitude;

const createAdress = ({
  street_name: street,
  street_number: number,
  postal_code: zipCode,
}: Data) => `${street}${number ? ' ' + number : ''}, ${zipCode} Berlin`

const hasHttp = (url: string) => /^https?:\/\//.test(url)

const buildExternalLink = (url: string) => {
  if (hasHttp(url)) {
    // could check if server is reachable
    return url;
  }
  return 'https://' + url;
}