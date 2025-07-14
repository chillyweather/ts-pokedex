export async function commandHelp(state) {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:\n");
    for (const key of Object.keys(state.commands)) {
        const command = state.commands[key];
        console.log(`${command.name}: ${command.description}`);
    }
}
