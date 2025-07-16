
import { State } from "src/state"

export async function commandCatch(state: State, ...args: string[]): Promise<void> {
  const api = state.api
  const pokemonName = args[0]

  console.log("Throwing a Pokeball at pikachu... ")
  const response = await api.fetchLocation(pokemonName)

}
