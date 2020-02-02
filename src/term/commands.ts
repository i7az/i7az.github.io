import { CommandHistory } from "./history";
import { Command } from './builtin/base';
import { HelpCommand } from './builtin/help';
import { HistoryCommand } from './builtin/history';
import { ShowCommand } from './builtin/show';

export class Commands {
    history: CommandHistory;
    commands: {[key: string]: Command} = {}
    validCommands: string[];

    constructor(history: CommandHistory) {
        this.history = history;
        this.validCommands = Object.keys(this.commands);
        this.registerBuiltin();
    }

    registerBuiltin() {
        const help = new HelpCommand(this);
        this.registerCommand("help", help);
        this.registerCommand("?", help);
        const history = new HistoryCommand(this);
        this.registerCommand("history", history);
        const show = new ShowCommand(this);
        this.registerCommand("show", show);
    }

    execute(cmd: string): string{
        const target = cmd.split(" ", 1)[0];
        let result: string;
        if(this.validCommands.indexOf(target) > -1){
            result = this.commands[target].execute(cmd.split(" "));
        }else{
            result = `'${target}' is not recognized as a valid command.`;
        }
        this.history.push(cmd);
        this.history.reset();
        return result;
    }

    autocomplete(cmd: string): string {
        const target = cmd.split(" ", 1)[0];
        if (target == cmd) {
            if(this.validCommands.indexOf(target) != -1){
                return `${cmd} `;
            }
            return this.history.last();
        }else{
            return ""
        }
    }

    registerCommand(cmd: string, command: Command) {
        if (this.validCommands.indexOf(cmd) < 0){
            this.validCommands.push(cmd);
        }
        this.commands[cmd] = command;
    }
}