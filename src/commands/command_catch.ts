import { State } from "src/state"

export async function commandCatch(state: State, ...args: string[]): Promise<void> {
  const api = state.api
  const pokemonName = args[0]

  console.log(`Throwing a Pokeball at ${pokemonName}... `)
  const response = await api.fetchPokemon(pokemonName)
  const baseExperience = response.base_experience
  const chance = Math.random()
  if (chance > 0.5) {
    state.pokedex[pokemonName] = response
  }
  console.log(state.pokedex)
}
