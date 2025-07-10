
import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';
import { getCommands } from './commands.js';

export function cleanInput(input: string): string[] {
  return input.toLowerCase().trim().split(/\s+/)
}

export function startREPL() {
  const commands = getCommands()
  const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex "
  });

  rl.prompt()

  rl.on('line', (input) => {
    const cleaned = cleanInput(input)
    if (!(cleaned && cleaned.length)) {
      rl.prompt()
    }

    const command = commands[cleaned[0]]
    if (!command) {
      console.log("No such command")
      rl.prompt()
    }

    command.callback(commands)

    rl.prompt()
  });
}
