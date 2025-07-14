
import { createInterface, ReadLine, type Interface } from "readline";
import { stdin, stdout } from 'node:process';
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export type State = {
  rl: Interface,
  commands: Record<string, CLICommand>,
  api: PokeAPI,
  nextLocation: string,
  prevLocation: string,
}

export function initState(): State {
  const state: State = {
    rl: createInterface({
      input: stdin,
      output: stdout,
      prompt: "Pokedex > "
    }),
    commands: getCommands(),
    api: new PokeAPI,
    nextLocation: "",
    prevLocation: "",
  }
  return state
}
