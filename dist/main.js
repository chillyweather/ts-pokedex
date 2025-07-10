import { startREPL } from "./repl.js";
import { initState } from "./state.js";
function main() {
    const State = initState();
    startREPL(State);
}
main();
