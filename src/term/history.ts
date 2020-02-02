

export class CommandHistory {
    
    max_length: number;
    cursor: number;
    history: string[];

    constructor(maxLength:number = 100) {
        this.max_length = maxLength;
        this.cursor = 0;
        this.history = [];
    }

    push(cmd: string){
        this.history.unshift(cmd);
        if (this.history.length >= this.max_length) {
            this.history.pop()
        }
    } 
    
    get(): string[] {
        return this.history;
    }

    last(): string {
        if (this.cursor >= this.history.length) {
            this.cursor = 0;
        }
        return this.history[this.cursor++];
    }

    next(): string {
        if (this.cursor == 0) {
            this.cursor = this.history.length -1;
        }
        return this.history[this.cursor--];
    }

    reset() {
        this.cursor = 0;
    }
}