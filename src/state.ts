
import { createInterface, ReadLine, type Interface } from "readline";
import { stdin, stdout } from 'node:process';
import { getCommands } from "./commands.js";
import { PokeAPI, PokemonData } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
  rl: Interface,
  commands: Record<string, CLICommand>,
  api: PokeAPI,
  nextLocation: string,
  prevLocation: string,
  pokedex: Record<string, PokemonData>
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
    pokedex: {},
  }
  return state
}
