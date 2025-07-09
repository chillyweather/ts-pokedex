import { commandExit } from "./commands/command_exit.js";
import { commandHelp } from "./commands/command_help.js";
export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        // can add more commands here
    };
}
