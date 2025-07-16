import { State } from "src/state"

export async function commandPokedex(state: State): Promise<void> {
  const pokedex = state.pokedex

  console.log("Your pokedex:")
  for (const pokemon of Object.keys(pokedex)) {
    console.log(" - ", pokemon)
  }
}
