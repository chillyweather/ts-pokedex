import { startREPL } from "./repl.js";
import { initState } from "./state.js";
async function main() {
    const State = initState();
    await startREPL(State);
}
main();
