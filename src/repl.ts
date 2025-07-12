import { State } from "./state.js"

export function cleanInput(input: string): string[] {
  return input.toLowerCase().trim().split(/\s+/)
}

export function startREPL(State: State) {
  const { rl, commands } = State;

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

    command.callback(State)

    rl.prompt()
  });
}



