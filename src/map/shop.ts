import { devConfig as config } from '../config'

export interface Data {
  latitute: string
  longitude: string
  street_name: string
  street_number: number
  postal_code: string
  name: string
  phone_number: string
  email: string
  website_url: string
  shop_description: string
  logo: any
  categories: string
}

export interface Shop {
  name: string
  address: string
  phoneNumber: string
  email: string
  shopUrl: string
  description: string
  logo: any
  sortiment: string
  latitude: number
  longitude: number
}

export const fetchShopData = async (): Promise<Shop[]> => {
  const headers = new Headers({
    Authorization: `Bearer ${config.backend.accessToken}`,
  })
  const response = await fetch(`${config.backend.url}/shop/`, {
    method: 'GET',
    headers,
  })
  const status = response.status
  if (status === 200) {
    const data = await response.json()
    return data.map(createShop)
  }
  throw new Error('Could not fetch shop info')
}

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
  }
}

const hasValidGeoData = ({ latitute, longitude }: Data) =>
  !!latitute && !!longitude

const createAdress = ({
  street_name: street,
  street_number: number,
  postal_code: zipCode,
}: Data) => `${street}${number ? ' ' + number : ''}, ${zipCode} Berlin`

const hasHttp = (url: string) => /^https?:\/\//.test(url)

const buildExternalLink = (url: string) => {
  if (hasHttp(url)) {
    // could check if server is reachable
    return url
  }
  return 'https://' + url
}
