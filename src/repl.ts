
import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';

export function cleanInput(input: string): string[] {
  return input.toLowerCase().trim().split(/\s+/)
}

export function startREPL() {
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
    console.log(`Your command was: ${cleaned[0]}`);
    rl.prompt()
  });
}
