import { Command } from "./base";
import { CommandHistory } from "../history";
import { Commands } from "../commands";


export class HistoryCommand extends Command {

    history: CommandHistory;
    
    constructor(manager:Commands) {
        super(manager);
        this.history = manager.history;
    }

    description(): string {
        return "execution history";
    }

    autocomplete(line: string): string {
        return 'history';
    }   

    execute (args: string[]): string {
        const history = this.history.get().slice(0).reverse();
        return history.join("\r\n");
    }

    help(): string {
        return "history: history of the execution";
    }
}