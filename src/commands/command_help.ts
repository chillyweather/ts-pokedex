import { CLICommand, State } from "src/state"
export async function commandHelp(state: State): Promise<void> {
  console.log("Welcome to the Pokedex!")
  console.log("Usage:\n")

  for (const key of Object.keys(state.commands)) {
    const command = state.commands[key]
    console.log(`${command.name}: ${command.description}`)
  }
}
