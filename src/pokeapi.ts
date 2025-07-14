import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  cache = new Cache(5 * 60 * 1000); // 5 minutes in milliseconds

  constructor() { }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || PokeAPI.baseURL + "/location-area/"
    const cachedData = this.cache.get(url)
    if (cachedData) {
      return cachedData.val
    } else {
      try {
        const response = await fetch(url)
        const data = await response.json()
        this.cache.add(url, data)
        return data as Promise<ShallowLocations>
      } catch (err) {
        console.log(err)
        return {} as Promise<ShallowLocations>
      }

    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = PokeAPI.baseURL + locationName
    try {
      const response = await fetch(url)
      const data = response.json()
      return data as Promise<Location>
    } catch (err) {
      console.log(err)
      return {} as Promise<Location>
    }

  }
}

export type ShallowLocations = {
  count: number
  next: string
  previous: string | null
  results: Location[]
};

export type Location = {
  name: string
  url: string
};
