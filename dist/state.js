import { createInterface } from "readline";
import { stdin, stdout } from 'node:process';
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";
export function initState() {
    const state = {
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
    };
    return state;
}
