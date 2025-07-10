
import { createInterface, ReadLine, type Interface } from "readline";
import { EventEmitter } from "stream";

export type CLICommand = {
  name: string;
  description: string;
  callback: (commands: Record<string, CLICommand>) => void;
};

export type State = (
  rl: ReadLine,
  commands: State
)
