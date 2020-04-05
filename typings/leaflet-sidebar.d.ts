import 'leaflet'
declare module 'leaflet' {
  namespace control {
    function sidebar(placeholder: any, options: any): any
  }
}