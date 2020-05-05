interface Config {
  backend: {
    url: string
    accessToken: string
  }
  leaflet: {
    // urlTemplate: string,
    accessToken: string
  }
}

export const devConfig: Config = {
  backend: {
    url: 'http://localhost:8001',
    accessToken: '9d4273aa-b4ec-4121-b753-2cc004de970d',
  },
  leaflet: {
    accessToken:
      'pk.eyJ1IjoibXl1c2VybmFtZWlzdGhpcyIsImEiOiJjazhlaXc0NzAwMGFjM2hteHA3MWR6OGJwIn0.6LJ2ENy9U_cz3NFYkVxu9g',
  },
}

export const prodConfig: Config = {
  backend: {
    url: 'https://api.nachbarschaftsmarktplatz.de',
    accessToken: '',
  },
  leaflet: {
    accessToken:
      'pk.eyJ1IjoibXl1c2VybmFtZWlzdGhpcyIsImEiOiJjazhndmhzNmYwNHV3M3NzMDcwNGs1ZjZzIn0.2ZRug8MHanm-5yQd9ptfGg',
  },
}
