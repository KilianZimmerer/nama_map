interface Config {
  backendUrl: string,
  leaflet: {
    // urlTemplate: string,
    accessToken: string,
  },
}

const devConfig: Config = {
  backendUrl: 'nama.de',
  leaflet: {
    accessToken: 'pk.eyJ1IjoibXl1c2VybmFtZWlzdGhpcyIsImEiOiJjazhlaXc0NzAwMGFjM2hteHA3MWR6OGJwIn0.6LJ2ENy9U_cz3NFYkVxu9g',
  },
}