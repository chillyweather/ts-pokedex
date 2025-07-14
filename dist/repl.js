export function cleanInput(input) {
    return input.toLowerCase().trim().split(/\s+/);
}
export async function startREPL(State) {
    const { rl, commands } = State;
    rl.prompt();
    rl.on('line', async (input) => {
        const cleaned = cleanInput(input);
        if (!(cleaned && cleaned.length)) {
            rl.prompt();
        }
        const command = commands[cleaned[0]];
        if (!command) {
            console.log("No such command");
            rl.prompt();
        }
        await command.callback(State);
        rl.prompt();
    });
}
