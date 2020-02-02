import React from 'react';
import xterm from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { CommandHistory } from './history';
import { Commands } from './commands';

declare class Terminal {
    constructor(opt: xterm.ITerminalOptions);
};

interface terminal {
    props: {

    }
    state: {

    }
}
class terminal extends React.Component {

    el?:HTMLDivElement;
    terminal?: xterm.Terminal;
    fitAddon?: FitAddon;
    PS1: string = "\r\n\x1B[32m$ ";
    motd: string = `\r\nThis is interactive terminal,\r\nyou can start with command 'help'. \r\n`;
    cmdBuffer:string = "";
    history: CommandHistory;
    commands: Commands;
    
    constructor(props:any) {
        super(props);
        this.history = new CommandHistory();
        this.commands = new Commands(this.history);
    }
    componentDidMount(){
        setTimeout((()=>{
            if(!this.el) return;
        
            this.terminal = new Terminal({
                allowTransparency:false,
                fontFamily: "'Press Start 2P', cursive",
                fontSize: 14,
                scrollback: 0,
                cursorBlink: true,
            }) as xterm.Terminal;
            this.fitAddon = new FitAddon();
            this.terminal?.loadAddon(this.fitAddon);
            this.terminal!.open(this.el);
            this.fitAddon!.fit();
            this.print_motd();
            this.terminal!.onKey(this.handleKeyDown.bind(this));
            this.terminal!.onResize(this.handleResize.bind(this));
            this.prompt()
            this.terminal!.focus();
        }).bind(this),500);
    }
    
    handleResize() {
        this.fitAddon!.fit();
    }

    print_motd () {
        this.terminal!.writeln(this.motd);
    }

    execute() {
        const cmd = this.cmdBuffer;
        if (cmd != "") {
            this.terminal!.writeln('');
            this.terminal!.writeln(this.commands.execute(cmd));
        }
        this.prompt()
    }

    autocomplete() {
        const cmd = this.cmdBuffer;
        const result = this.commands.autocomplete(cmd);

        if(result){
            this.cleanRemainCommand();
            this.cmdBuffer = result;
            this.terminal!.write(result);
        }
    }

    cleanRemainCommand() {
        for(let i = 0; i < this.cmdBuffer.length; i++){
            this.terminal!.write('\b \b');
        }
    }

    handleKeyDown(e: {key: string, domEvent:KeyboardEvent}) {
        const {key, domEvent} = e;
        const printable = !e.domEvent.altKey && !e.domEvent.ctrlKey && !e.domEvent.metaKey;
        if (domEvent.keyCode == 13) {
            // enter
            this.execute();
        } else if (domEvent.keyCode == 9){
            // auto complete
            this.autocomplete();
        } else if (domEvent.keyCode == 8) {
            if (this.terminal!.buffer.cursorX > 2) {
                this.terminal!.write('\b \b');
                this.cmdBuffer = this.cmdBuffer.slice(0, this.cmdBuffer.length - 1);
            }
        } else if ([37,39].indexOf(domEvent.keyCode) != -1) {
            domEvent.preventDefault();
        } else if ([38,40].indexOf(domEvent.keyCode) != -1) {
            domEvent.preventDefault();
            let cmd: string = "";
            if (domEvent.keyCode == 38) {
                // last
                cmd = this.history.last();
            } else if (domEvent.keyCode == 40) {
                // next
                cmd = this.history.next();
            }
            if(typeof cmd == "undefined") {
                return;
            }
            if(cmd != ""){
                this.cleanRemainCommand();
                this.cmdBuffer = cmd;
                this.terminal!.write(cmd);
            }
        } else if (printable) {
            this.cmdBuffer += key;
            this.terminal!.write(key);
        }
        
    }
    prompt () {
        this.cmdBuffer = "";
        this.terminal!.write(this.PS1);
    }
    render () {
        return (
            <div
                ref={e=>{if(e)this.el = e}}
                style={{
                    height: 480,
                    width: 640,
                    background: 'black'
                }}
            />
        )
    }
}

export default terminal;