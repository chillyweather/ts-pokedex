import { createInterface } from "readline";
import { stdin, stdout } from 'node:process';
import { getCommands } from "./commands.js";
export function initState() {
    const state = {
        rl: createInterface({
            input: stdin,
            output: stdout,
            prompt: "Pokedex "
        }),
        commands: getCommands()
    };
    return state;
}
