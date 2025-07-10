
import { createInterface, ReadLine, type Interface } from "readline";
import { EventEmitter } from "stream";
import process, { stdin, stdout } from 'node:process';
import { getCommands } from "./commands.js"

export type CLICommand = {
  name: string;
  description: string;
  callback: (commands: Record<string, CLICommand>) => void;
};

export type State = {
  rl: Interface,
  commands: Record<string, CLICommand>
}

export function initState(): State {
  const state: State = {
    rl: createInterface({
      input: stdin,
      output: stdout,
      prompt: "Pokedex"
    }),
    commands: getCommands()
  }
  return state
}
