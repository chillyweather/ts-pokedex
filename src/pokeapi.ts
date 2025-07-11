export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() { }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const locations = fetch(pageURL,)
  }

  async fetchLocation(locationName: string): Promise<Location> {
    // implement this
  }
}

export type ShallowLocations = {
  count: number
  next: string
  previous: string
  results: Location[]
};

export type Location = {
  name: string
  url: string
};
