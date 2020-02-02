import { Command } from "./base";


export class ShowCommand extends Command {

    showcase:{[key: string]:string} = {
        github: "https://github.com/i7az",
        linkedin: "https://www.linkedin.com/in/tazdingo/"
    }

    description(): string {
        return "Taz's show cases";
    }

    autocomplete(line: string): string {
        return 'help';
    }   

    execute (args: string[]): string {
        if (args.length < 2) {
            return this.help();
        }
        const cases = Object.keys(this.showcase);
        if(cases.indexOf(args[1]) != -1){
            window.open(this.showcase[args[1]],'_blank');
            return this.showcase[args[1]];
        }else {
            return `unable to show ${args[1]}`
        }
    }
    help():string {
        return `Usage: show <show case>\r\nShow case:\r\n\t` + Object.keys(this.showcase).join("\r\n\t");
    }
}