import { commandExit } from "./commands/command_exit.js"
import { commandHelp } from "./commands/command_help.js"
import { commandMap } from "./commands/command_map.js";
import { commandMapb } from "./commands/command_mapb.js";
import { commandExplore } from "./commands/command_explore.js";
import { CLICommand } from "./state.js";


export function getCommands(): Record<string, CLICommand> {
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
    map: {
      name: "map",
      description: "List locations",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "List previous locations",
      callback: commandMapb,
    },
    explore: {
      name: "explore",
      description: "Displays found pokemon",
      callback: commandExplore,
    }
  };
} 
