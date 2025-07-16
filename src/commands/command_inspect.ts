import { State } from "src/state"

export async function commandInspect(state: State, ...args: string[]): Promise<void> {
  const pokemonName = args[0]

  const pokemon = state.pokedex[pokemonName]
  if (pokemon) {
    console.log(`Name: ${pokemon.name}
Height: ${pokemon.height}
Weight: ${pokemon.weight}
Stats:
  -hp: ${pokemon.stats[0].base_stat}
  -attack: 45 ${pokemon.stats[1].base_stat}
  -defense: 40 ${pokemon.stats[2].base_stat}
  -special-attack: 35 ${pokemon.stats[3].base_stat}
  -special-defense: 35 ${pokemon.stats[4].base_stat}
  -speed: 56 ${pokemon.stats[5].base_stat}
Types:`)
    pokemon.types.forEach((type) => {
      console.log("  - ", type.type.name)
    })
  } else {
    console.log(`You has not caught ${pokemonName} yet`)
  }
}
