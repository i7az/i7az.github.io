import { Command } from "./base";


export class HelpCommand extends Command {

    description(): string {
        return "this page";
    }

    autocomplete(line: string): string {
        return 'help';
    }   

    execute (args: string[]): string {
        if (args.length > 1) {
            if(this.manager.validCommands.indexOf(args[1]) != -1){
                return this.manager.commands[args[1]].help()
            }else {
                return `Unable find help for command ${args[1]}`;
            }
        }else{
            let content = "";
            const cmds = this.manager.validCommands.sort();
            for(let i = 0; i < cmds.length; i++){
                content += `\r\n\t${cmds[i]}\t\t${this.manager.commands[cmds[i]].description()}`;
            }
            return `commands:` + content;
        }
    }
    help():string {
        return this.execute([]);
    }
}