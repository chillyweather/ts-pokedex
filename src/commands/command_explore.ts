import { State } from "src/state"

export async function commandExplore(state: State, ...args: string[]): Promise<void> {
  const api = state.api
  const locationName = args[0]

  const response = await api.fetchLocation(locationName)
  const encounters = response.pokemon_encounters

  console.log(`Exploring ${locationName}...`)
  console.log(`Found Pokemon:`)
  for (const encounter of encounters) {
    console.log(`- ${encounter.pokemon.name}`)
  }

}
