interface Config {
  backendUrl: string
  leaflet: {
    // urlTemplate: string,
    accessToken: string
  }
}

export const devConfig: Config = {
  // backendUrl: 'nama.de',
  backendUrl: 'localhost:9000',
  leaflet: {
    accessToken:
      'pk.eyJ1IjoibXl1c2VybmFtZWlzdGhpcyIsImEiOiJjazhlaXc0NzAwMGFjM2hteHA3MWR6OGJwIn0.6LJ2ENy9U_cz3NFYkVxu9g',
  },
}

export const prodConfig: Config = {
  backendUrl: 'https://shop.nachbarschaftsmarktplatz.de',
  leaflet: {
    accessToken:
      'pk.eyJ1IjoibXl1c2VybmFtZWlzdGhpcyIsImEiOiJjazhndmhzNmYwNHV3M3NzMDcwNGs1ZjZzIn0.2ZRug8MHanm-5yQd9ptfGg',
  },
}
