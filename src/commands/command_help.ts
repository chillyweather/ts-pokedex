import { CLICommand } from "src/commands.js";
export function commandHelp(commands: Record<string, CLICommand>): void {
  console.log("Welcome to the Pokedex!")
  console.log("Usage:\n")

  for (const key of Object.keys(commands)) {
    const command = commands[key]
    console.log(`${command.name}: ${command.description}`)
  }
}
