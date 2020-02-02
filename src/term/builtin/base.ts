import { Commands } from "../commands";

export abstract class Command {
    manager: Commands;
    constructor(commandManager: Commands) {
        this.manager = commandManager;
    }
    abstract autocomplete(line: string): string;
    abstract execute(args: string[]): string;
    abstract help(): string;
    // one sentence description
    abstract description(): string;
}