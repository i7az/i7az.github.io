/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/xterm-addon-fit/lib/xterm-addon-fit.js":
/*!*************************************************************!*\
  !*** ./node_modules/xterm-addon-fit/lib/xterm-addon-fit.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.prototype.activate=function(e){this._terminal=e},e.prototype.dispose=function(){},e.prototype.fit=function(){var e=this.proposeDimensions();if(e&&this._terminal){var t=this._terminal._core;this._terminal.rows===e.rows&&this._terminal.cols===e.cols||(t._renderService.clear(),this._terminal.resize(e.cols,e.rows))}},e.prototype.proposeDimensions=function(){if(this._terminal&&this._terminal.element&&this._terminal.element.parentElement){var e=this._terminal._core,t=window.getComputedStyle(this._terminal.element.parentElement),r=parseInt(t.getPropertyValue("height")),n=Math.max(0,parseInt(t.getPropertyValue("width"))),o=window.getComputedStyle(this._terminal.element),i=r-(parseInt(o.getPropertyValue("padding-top"))+parseInt(o.getPropertyValue("padding-bottom"))),a=n-(parseInt(o.getPropertyValue("padding-right"))+parseInt(o.getPropertyValue("padding-left")))-e.viewport.scrollBarWidth;return{cols:Math.max(2,Math.floor(a/e._renderService.dimensions.actualCellWidth)),rows:Math.max(1,Math.floor(i/e._renderService.dimensions.actualCellHeight))}}},e}();t.FitAddon=n}])});
//# sourceMappingURL=xterm-addon-fit.js.map

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "react-dom"));
const term_1 = __importDefault(__webpack_require__(/*! ./term */ "./src/term/index.tsx"));
__webpack_require__(/*! ./index.scss */ "./src/index.scss");
class App extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("div", { style: {
                margin: "0 auto",
                width: 640
            } },
            react_1.default.createElement("div", { style: {
                    top: 0,
                    width: "100%",
                    fontSize: 14,
                } },
                react_1.default.createElement("h1", { className: "title", style: {
                        font: "48px/1.2 'Monoton', cursive;"
                    } }, "Taz"),
                react_1.default.createElement("p", null, "Seeking for opportunity that make the world different, You only live once.")),
            react_1.default.createElement("div", { style: {
                    top: 0,
                    height: 480,
                    width: 640
                } },
                react_1.default.createElement(term_1.default, null))));
    }
}
;
react_dom_1.default.render(react_1.default.createElement(App, null), document.getElementById("app"));
exports.default = App;


/***/ }),

/***/ "./src/term/builtin/base.ts":
/*!**********************************!*\
  !*** ./src/term/builtin/base.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Command {
    constructor(commandManager) {
        this.manager = commandManager;
    }
}
exports.Command = Command;


/***/ }),

/***/ "./src/term/builtin/help.ts":
/*!**********************************!*\
  !*** ./src/term/builtin/help.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(/*! ./base */ "./src/term/builtin/base.ts");
class HelpCommand extends base_1.Command {
    description() {
        return "this page";
    }
    autocomplete(line) {
        return 'help';
    }
    execute(args) {
        if (args.length > 1) {
            if (this.manager.validCommands.indexOf(args[1]) != -1) {
                return this.manager.commands[args[1]].help();
            }
            else {
                return `Unable find help for command ${args[1]}`;
            }
        }
        else {
            let content = "";
            const cmds = this.manager.validCommands.sort();
            for (let i = 0; i < cmds.length; i++) {
                content += `\r\n\t${cmds[i]}\t\t${this.manager.commands[cmds[i]].description()}`;
            }
            return `commands:` + content;
        }
    }
    help() {
        return this.execute([]);
    }
}
exports.HelpCommand = HelpCommand;


/***/ }),

/***/ "./src/term/builtin/history.ts":
/*!*************************************!*\
  !*** ./src/term/builtin/history.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(/*! ./base */ "./src/term/builtin/base.ts");
class HistoryCommand extends base_1.Command {
    constructor(manager) {
        super(manager);
        this.history = manager.history;
    }
    description() {
        return "execution history";
    }
    autocomplete(line) {
        return 'history';
    }
    execute(args) {
        const history = this.history.get().slice(0).reverse();
        return history.join("\r\n");
    }
    help() {
        return "history: history of the execution";
    }
}
exports.HistoryCommand = HistoryCommand;


/***/ }),

/***/ "./src/term/builtin/show.ts":
/*!**********************************!*\
  !*** ./src/term/builtin/show.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(/*! ./base */ "./src/term/builtin/base.ts");
class ShowCommand extends base_1.Command {
    constructor() {
        super(...arguments);
        this.showcase = {
            github: "https://github.com/i7az",
            linkedin: "https://www.linkedin.com/in/tazdingo/"
        };
    }
    description() {
        return "Taz's show cases";
    }
    autocomplete(line) {
        return 'help';
    }
    execute(args) {
        if (args.length < 2) {
            return this.help();
        }
        const cases = Object.keys(this.showcase);
        if (cases.indexOf(args[1]) != -1) {
            window.open(this.showcase[args[1]], '_blank');
            return this.showcase[args[1]];
        }
        else {
            return `unable to show ${args[1]}`;
        }
    }
    help() {
        return `Usage: show <show case>\r\nShow case:\r\n\t` + Object.keys(this.showcase).join("\r\n\t");
    }
}
exports.ShowCommand = ShowCommand;


/***/ }),

/***/ "./src/term/commands.ts":
/*!******************************!*\
  !*** ./src/term/commands.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const help_1 = __webpack_require__(/*! ./builtin/help */ "./src/term/builtin/help.ts");
const history_1 = __webpack_require__(/*! ./builtin/history */ "./src/term/builtin/history.ts");
const show_1 = __webpack_require__(/*! ./builtin/show */ "./src/term/builtin/show.ts");
class Commands {
    constructor(history) {
        this.commands = {};
        this.history = history;
        this.validCommands = Object.keys(this.commands);
        this.registerBuiltin();
    }
    registerBuiltin() {
        const help = new help_1.HelpCommand(this);
        this.registerCommand("help", help);
        this.registerCommand("?", help);
        const history = new history_1.HistoryCommand(this);
        this.registerCommand("history", history);
        const show = new show_1.ShowCommand(this);
        this.registerCommand("show", show);
    }
    execute(cmd) {
        const target = cmd.split(" ", 1)[0];
        let result;
        if (this.validCommands.indexOf(target) > -1) {
            result = this.commands[target].execute(cmd.split(" "));
        }
        else {
            result = `'${target}' is not recognized as a valid command.`;
        }
        this.history.push(cmd);
        this.history.reset();
        return result;
    }
    autocomplete(cmd) {
        const target = cmd.split(" ", 1)[0];
        if (target == cmd) {
            if (this.validCommands.indexOf(target) != -1) {
                return `${cmd} `;
            }
            return this.history.last();
        }
        else {
            return "";
        }
    }
    registerCommand(cmd, command) {
        if (this.validCommands.indexOf(cmd) < 0) {
            this.validCommands.push(cmd);
        }
        this.commands[cmd] = command;
    }
}
exports.Commands = Commands;


/***/ }),

/***/ "./src/term/history.ts":
/*!*****************************!*\
  !*** ./src/term/history.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CommandHistory {
    constructor(maxLength = 100) {
        this.max_length = maxLength;
        this.cursor = 0;
        this.history = [];
    }
    push(cmd) {
        this.history.unshift(cmd);
        if (this.history.length >= this.max_length) {
            this.history.pop();
        }
    }
    get() {
        return this.history;
    }
    last() {
        if (this.cursor >= this.history.length) {
            this.cursor = 0;
        }
        return this.history[this.cursor++];
    }
    next() {
        if (this.cursor == 0) {
            this.cursor = this.history.length - 1;
        }
        return this.history[this.cursor--];
    }
    reset() {
        this.cursor = 0;
    }
}
exports.CommandHistory = CommandHistory;


/***/ }),

/***/ "./src/term/index.tsx":
/*!****************************!*\
  !*** ./src/term/index.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const xterm_1 = __importDefault(__webpack_require__(/*! xterm */ "xterm"));
const xterm_addon_fit_1 = __webpack_require__(/*! xterm-addon-fit */ "./node_modules/xterm-addon-fit/lib/xterm-addon-fit.js");
const history_1 = __webpack_require__(/*! ./history */ "./src/term/history.ts");
const commands_1 = __webpack_require__(/*! ./commands */ "./src/term/commands.ts");
class terminal extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.PS1 = "\r\n\x1B[32m$ ";
        this.motd = `\r\nThis is interactive terminal,\r\nyou can start with command 'help'. \r\n`;
        this.cmdBuffer = "";
        this.history = new history_1.CommandHistory();
        this.commands = new commands_1.Commands(this.history);
    }
    componentDidMount() {
        var _a;
        if (!this.el)
            return;
        this.terminal = new xterm_1.default({
            allowTransparency: false,
            fontFamily: "'Press Start 2P', cursive",
            fontSize: 14,
            scrollback: 0,
            cursorBlink: true,
        });
        this.fitAddon = new xterm_addon_fit_1.FitAddon();
        (_a = this.terminal) === null || _a === void 0 ? void 0 : _a.loadAddon(this.fitAddon);
        this.terminal.open(this.el);
        this.fitAddon.fit();
        this.print_motd();
        this.terminal.onKey(this.handleKeyDown.bind(this));
        this.terminal.onResize(this.handleResize.bind(this));
        this.prompt();
        this.terminal.focus();
    }
    handleResize() {
        this.fitAddon.fit();
    }
    print_motd() {
        this.terminal.writeln(this.motd);
    }
    execute() {
        const cmd = this.cmdBuffer;
        if (cmd != "") {
            this.terminal.writeln('');
            this.terminal.writeln(this.commands.execute(cmd));
        }
        this.prompt();
    }
    autocomplete() {
        const cmd = this.cmdBuffer;
        const result = this.commands.autocomplete(cmd);
        if (result) {
            this.cleanRemainCommand();
            this.cmdBuffer = result;
            this.terminal.write(result);
        }
    }
    cleanRemainCommand() {
        for (let i = 0; i < this.cmdBuffer.length; i++) {
            this.terminal.write('\b \b');
        }
    }
    handleKeyDown(e) {
        const { key, domEvent } = e;
        const printable = !e.domEvent.altKey && !e.domEvent.ctrlKey && !e.domEvent.metaKey;
        if (domEvent.keyCode == 13) {
            // enter
            this.execute();
        }
        else if (domEvent.keyCode == 9) {
            // auto complete
            this.autocomplete();
        }
        else if (domEvent.keyCode == 8) {
            if (this.terminal.buffer.cursorX > 2) {
                this.terminal.write('\b \b');
                this.cmdBuffer = this.cmdBuffer.slice(0, this.cmdBuffer.length - 1);
            }
        }
        else if ([37, 39].indexOf(domEvent.keyCode) != -1) {
            domEvent.preventDefault();
        }
        else if ([38, 40].indexOf(domEvent.keyCode) != -1) {
            domEvent.preventDefault();
            let cmd = "";
            if (domEvent.keyCode == 38) {
                // last
                cmd = this.history.last();
            }
            else if (domEvent.keyCode == 40) {
                // next
                cmd = this.history.next();
            }
            if (typeof cmd == "undefined") {
                return;
            }
            if (cmd != "") {
                this.cleanRemainCommand();
                this.cmdBuffer = cmd;
                this.terminal.write(cmd);
            }
        }
        else if (printable) {
            this.cmdBuffer += key;
            this.terminal.write(key);
        }
    }
    prompt() {
        this.cmdBuffer = "";
        this.terminal.write(this.PS1);
    }
    render() {
        return (react_1.default.createElement("div", { ref: e => { if (e)
                this.el = e; }, style: {
                height: 480,
                width: 640,
                background: 'black'
            } }));
    }
}
exports.default = terminal;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ "xterm":
/*!***************************!*\
  !*** external "Terminal" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Terminal;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3h0ZXJtLWFkZG9uLWZpdC9saWIveHRlcm0tYWRkb24tZml0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5zY3NzP2E1ZGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVybS9idWlsdGluL2Jhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlcm0vYnVpbHRpbi9oZWxwLnRzIiwid2VicGFjazovLy8uL3NyYy90ZXJtL2J1aWx0aW4vaGlzdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVybS9idWlsdGluL3Nob3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlcm0vY29tbWFuZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlcm0vaGlzdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVybS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlRlcm1pbmFsXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGVBQWUsS0FBaUQsb0JBQW9CLFNBQStHLENBQUMsbUJBQW1CLG1CQUFtQixTQUFTLGNBQWMsNEJBQTRCLFlBQVkscUJBQXFCLDJEQUEyRCx1Q0FBdUMscUNBQXFDLG9CQUFvQixFQUFFLGlCQUFpQiw0RkFBNEYsZUFBZSx3Q0FBd0MsU0FBUyxFQUFFLG1CQUFtQiw4QkFBOEIscURBQXFELDBCQUEwQiw2Q0FBNkMsc0JBQXNCLDZEQUE2RCxZQUFZLGVBQWUsU0FBUyxpQkFBaUIsaUNBQWlDLGlCQUFpQixZQUFZLFVBQVUsc0JBQXNCLG1CQUFtQixpREFBaUQsaUJBQWlCLGtCQUFrQixhQUFhLHNDQUFzQyxTQUFTLEVBQUUsaUJBQWlCLGNBQWMsd0NBQXdDLGlCQUFpQixpQ0FBaUMsNEJBQTRCLCtCQUErQixzQkFBc0IsMkJBQTJCLDZIQUE2SCwwQ0FBMEMsaUZBQWlGLHNjQUFzYyxPQUFPLHlKQUF5SixHQUFHLEdBQUcsYUFBYSxHQUFHO0FBQzN4RSwyQzs7Ozs7Ozs7Ozs7QUNEQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSwyRUFBMEI7QUFDMUIsdUZBQWlDO0FBQ2pDLDBGQUE4QjtBQUM5Qiw0REFBc0I7QUFFdEIsTUFBTSxHQUFJLFNBQVEsZUFBSyxDQUFDLFNBQVM7SUFFN0IsTUFBTTtRQUNGLE9BQU8sQ0FDSCx1Q0FBSyxLQUFLLEVBQUU7Z0JBQ1IsTUFBTSxFQUFDLFFBQVE7Z0JBQ2YsS0FBSyxFQUFDLEdBQUc7YUFDWjtZQUNHLHVDQUFLLEtBQUssRUFBRTtvQkFDUixHQUFHLEVBQUMsQ0FBQztvQkFDTCxLQUFLLEVBQUUsTUFBTTtvQkFDYixRQUFRLEVBQUMsRUFBRTtpQkFDZDtnQkFDRyxzQ0FBSSxTQUFTLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBRTt3QkFDekIsSUFBSSxFQUFDLDhCQUE4QjtxQkFDdEMsVUFBVTtnQkFDWCxzSEFBaUYsQ0FDL0U7WUFDTix1Q0FDQSxLQUFLLEVBQUU7b0JBQ0gsR0FBRyxFQUFDLENBQUM7b0JBQ0wsTUFBTSxFQUFDLEdBQUc7b0JBQ1YsS0FBSyxFQUFDLEdBQUc7aUJBQ1o7Z0JBRUcsOEJBQUMsY0FBUSxPQUFhLENBQ3BCLENBQ0osQ0FDVDtJQUNMLENBQUM7Q0FDSjtBQUFBLENBQUM7QUFHRixtQkFBUSxDQUFDLE1BQU0sQ0FBQyw4QkFBQyxHQUFHLE9BQU8sRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFFN0Qsa0JBQWUsR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q25CLE1BQXNCLE9BQU87SUFFekIsWUFBWSxjQUF3QjtRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztJQUNsQyxDQUFDO0NBTUo7QUFWRCwwQkFVQzs7Ozs7Ozs7Ozs7Ozs7O0FDWkQsK0VBQWlDO0FBR2pDLE1BQWEsV0FBWSxTQUFRLGNBQU87SUFFcEMsV0FBVztRQUNQLE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxZQUFZLENBQUMsSUFBWTtRQUNyQixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsT0FBTyxDQUFFLElBQWM7UUFDbkIsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNqQixJQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQztnQkFDakQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7YUFDL0M7aUJBQUs7Z0JBQ0YsT0FBTyxnQ0FBZ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDcEQ7U0FDSjthQUFJO1lBQ0QsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQy9DLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO2dCQUNoQyxPQUFPLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQzthQUNwRjtZQUNELE9BQU8sV0FBVyxHQUFHLE9BQU8sQ0FBQztTQUNoQztJQUNMLENBQUM7SUFDRCxJQUFJO1FBQ0EsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDSjtBQTdCRCxrQ0E2QkM7Ozs7Ozs7Ozs7Ozs7OztBQ2hDRCwrRUFBaUM7QUFLakMsTUFBYSxjQUFlLFNBQVEsY0FBTztJQUl2QyxZQUFZLE9BQWdCO1FBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUNuQyxDQUFDO0lBRUQsV0FBVztRQUNQLE9BQU8sbUJBQW1CLENBQUM7SUFDL0IsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFZO1FBQ3JCLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxPQUFPLENBQUUsSUFBYztRQUNuQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0RCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQUk7UUFDQSxPQUFPLG1DQUFtQyxDQUFDO0lBQy9DLENBQUM7Q0FDSjtBQXpCRCx3Q0F5QkM7Ozs7Ozs7Ozs7Ozs7OztBQzlCRCwrRUFBaUM7QUFHakMsTUFBYSxXQUFZLFNBQVEsY0FBTztJQUF4Qzs7UUFFSSxhQUFRLEdBQTBCO1lBQzlCLE1BQU0sRUFBRSx5QkFBeUI7WUFDakMsUUFBUSxFQUFFLHVDQUF1QztTQUNwRDtJQXlCTCxDQUFDO0lBdkJHLFdBQVc7UUFDUCxPQUFPLGtCQUFrQixDQUFDO0lBQzlCLENBQUM7SUFFRCxZQUFZLENBQUMsSUFBWTtRQUNyQixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsT0FBTyxDQUFFLElBQWM7UUFDbkIsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN0QjtRQUNELE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLElBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQztZQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO2FBQUs7WUFDRixPQUFPLGtCQUFrQixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDckM7SUFDTCxDQUFDO0lBQ0QsSUFBSTtRQUNBLE9BQU8sNkNBQTZDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7Q0FDSjtBQTlCRCxrQ0E4QkM7Ozs7Ozs7Ozs7Ozs7OztBQy9CRCx1RkFBNkM7QUFDN0MsZ0dBQW1EO0FBQ25ELHVGQUE2QztBQUU3QyxNQUFhLFFBQVE7SUFLakIsWUFBWSxPQUF1QjtRQUhuQyxhQUFRLEdBQTZCLEVBQUU7UUFJbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGVBQWU7UUFDWCxNQUFNLElBQUksR0FBRyxJQUFJLGtCQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEMsTUFBTSxPQUFPLEdBQUcsSUFBSSx3QkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sSUFBSSxHQUFHLElBQUksa0JBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQVc7UUFDZixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLE1BQWMsQ0FBQztRQUNuQixJQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDO1lBQ3ZDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDMUQ7YUFBSTtZQUNELE1BQU0sR0FBRyxJQUFJLE1BQU0seUNBQXlDLENBQUM7U0FDaEU7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxZQUFZLENBQUMsR0FBVztRQUNwQixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLE1BQU0sSUFBSSxHQUFHLEVBQUU7WUFDZixJQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDO2dCQUN4QyxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUM7YUFDcEI7WUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDOUI7YUFBSTtZQUNELE9BQU8sRUFBRTtTQUNaO0lBQ0wsQ0FBQztJQUVELGVBQWUsQ0FBQyxHQUFXLEVBQUUsT0FBZ0I7UUFDekMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUM7WUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUNqQyxDQUFDO0NBQ0o7QUFwREQsNEJBb0RDOzs7Ozs7Ozs7Ozs7Ozs7QUN4REQsTUFBYSxjQUFjO0lBTXZCLFlBQVksWUFBbUIsR0FBRztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxDQUFDLEdBQVc7UUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7U0FDckI7SUFDTCxDQUFDO0lBRUQsR0FBRztRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSTtRQUNBLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUNuQjtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsSUFBSTtRQUNBLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRSxDQUFDLENBQUM7U0FDeEM7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELEtBQUs7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUF4Q0Qsd0NBd0NDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0QsMkVBQTBCO0FBQzFCLDJFQUEwQjtBQUMxQiw4SEFBMkM7QUFDM0MsZ0ZBQTJDO0FBQzNDLG1GQUFzQztBQVV0QyxNQUFNLFFBQVMsU0FBUSxlQUFLLENBQUMsU0FBUztJQVdsQyxZQUFZLEtBQVM7UUFDakIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBUGpCLFFBQUcsR0FBVyxnQkFBZ0IsQ0FBQztRQUMvQixTQUFJLEdBQVcsOEVBQThFLENBQUM7UUFDOUYsY0FBUyxHQUFVLEVBQUUsQ0FBQztRQU1sQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksd0JBQWMsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxtQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsaUJBQWlCOztRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUFFLE9BQU87UUFFcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGVBQUssQ0FBQztZQUN0QixpQkFBaUIsRUFBQyxLQUFLO1lBQ3ZCLFVBQVUsRUFBRSwyQkFBMkI7WUFDdkMsUUFBUSxFQUFFLEVBQUU7WUFDWixVQUFVLEVBQUUsQ0FBQztZQUNiLFdBQVcsRUFBRSxJQUFJO1NBQ3BCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSwwQkFBUSxFQUFFLENBQUM7UUFDL0IsVUFBSSxDQUFDLFFBQVEsMENBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDeEMsSUFBSSxDQUFDLFFBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ2IsSUFBSSxDQUFDLFFBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsWUFBWTtRQUNSLElBQUksQ0FBQyxRQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELFVBQVU7UUFDTixJQUFJLENBQUMsUUFBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELE9BQU87UUFDSCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzNCLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRTtZQUNYLElBQUksQ0FBQyxRQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdEQ7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFO0lBQ2pCLENBQUM7SUFFRCxZQUFZO1FBQ1IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMzQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUvQyxJQUFHLE1BQU0sRUFBQztZQUNOLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxRQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQUVELGtCQUFrQjtRQUNkLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztZQUMxQyxJQUFJLENBQUMsUUFBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqQztJQUNMLENBQUM7SUFFRCxhQUFhLENBQUMsQ0FBd0M7UUFDbEQsTUFBTSxFQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDbkYsSUFBSSxRQUFRLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRTtZQUN4QixRQUFRO1lBQ1IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2xCO2FBQU0sSUFBSSxRQUFRLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBQztZQUM3QixnQkFBZ0I7WUFDaEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxRQUFRLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBRTtZQUM5QixJQUFJLElBQUksQ0FBQyxRQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxRQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN2RTtTQUNKO2FBQU0sSUFBSSxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ2hELFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUM3QjthQUFNLElBQUksQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNoRCxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDMUIsSUFBSSxHQUFHLEdBQVcsRUFBRSxDQUFDO1lBQ3JCLElBQUksUUFBUSxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUU7Z0JBQ3hCLE9BQU87Z0JBQ1AsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDN0I7aUJBQU0sSUFBSSxRQUFRLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRTtnQkFDL0IsT0FBTztnQkFDUCxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUM3QjtZQUNELElBQUcsT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFO2dCQUMxQixPQUFPO2FBQ1Y7WUFDRCxJQUFHLEdBQUcsSUFBSSxFQUFFLEVBQUM7Z0JBQ1QsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO2dCQUNyQixJQUFJLENBQUMsUUFBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM3QjtTQUNKO2FBQU0sSUFBSSxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0I7SUFFTCxDQUFDO0lBQ0QsTUFBTTtRQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsTUFBTTtRQUNGLE9BQU8sQ0FDSCx1Q0FDSSxHQUFHLEVBQUUsQ0FBQyxHQUFFLEdBQUMsSUFBRyxDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFDLEVBQzFCLEtBQUssRUFBRTtnQkFDSCxNQUFNLEVBQUUsR0FBRztnQkFDWCxLQUFLLEVBQUUsR0FBRztnQkFDVixVQUFVLEVBQUUsT0FBTzthQUN0QixHQUNILENBQ0w7SUFDTCxDQUFDO0NBQ0o7QUFFRCxrQkFBZSxRQUFRLENBQUM7Ozs7Ozs7Ozs7OztBQy9JeEIsdUI7Ozs7Ozs7Ozs7O0FDQUEsMEI7Ozs7Ozs7Ozs7O0FDQUEsMEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c3hcIik7XG4iLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkZpdEFkZG9uPXQoKTplLkZpdEFkZG9uPXQoKX0od2luZG93LGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIHIobil7aWYodFtuXSlyZXR1cm4gdFtuXS5leHBvcnRzO3ZhciBvPXRbbl09e2k6bixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW25dLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLHIpLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIHIubT1lLHIuYz10LHIuZD1mdW5jdGlvbihlLHQsbil7ci5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0Om59KX0sci5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LHIudD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9cihlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKHIucihuKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIG8gaW4gZSlyLmQobixvLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwsbykpO3JldHVybiBufSxyLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHIuZCh0LFwiYVwiLHQpLHR9LHIubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sci5wPVwiXCIscihyLnM9MCl9KFtmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7fXJldHVybiBlLnByb3RvdHlwZS5hY3RpdmF0ZT1mdW5jdGlvbihlKXt0aGlzLl90ZXJtaW5hbD1lfSxlLnByb3RvdHlwZS5kaXNwb3NlPWZ1bmN0aW9uKCl7fSxlLnByb3RvdHlwZS5maXQ9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnByb3Bvc2VEaW1lbnNpb25zKCk7aWYoZSYmdGhpcy5fdGVybWluYWwpe3ZhciB0PXRoaXMuX3Rlcm1pbmFsLl9jb3JlO3RoaXMuX3Rlcm1pbmFsLnJvd3M9PT1lLnJvd3MmJnRoaXMuX3Rlcm1pbmFsLmNvbHM9PT1lLmNvbHN8fCh0Ll9yZW5kZXJTZXJ2aWNlLmNsZWFyKCksdGhpcy5fdGVybWluYWwucmVzaXplKGUuY29scyxlLnJvd3MpKX19LGUucHJvdG90eXBlLnByb3Bvc2VEaW1lbnNpb25zPWZ1bmN0aW9uKCl7aWYodGhpcy5fdGVybWluYWwmJnRoaXMuX3Rlcm1pbmFsLmVsZW1lbnQmJnRoaXMuX3Rlcm1pbmFsLmVsZW1lbnQucGFyZW50RWxlbWVudCl7dmFyIGU9dGhpcy5fdGVybWluYWwuX2NvcmUsdD13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl90ZXJtaW5hbC5lbGVtZW50LnBhcmVudEVsZW1lbnQpLHI9cGFyc2VJbnQodC5nZXRQcm9wZXJ0eVZhbHVlKFwiaGVpZ2h0XCIpKSxuPU1hdGgubWF4KDAscGFyc2VJbnQodC5nZXRQcm9wZXJ0eVZhbHVlKFwid2lkdGhcIikpKSxvPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuX3Rlcm1pbmFsLmVsZW1lbnQpLGk9ci0ocGFyc2VJbnQoby5nZXRQcm9wZXJ0eVZhbHVlKFwicGFkZGluZy10b3BcIikpK3BhcnNlSW50KG8uZ2V0UHJvcGVydHlWYWx1ZShcInBhZGRpbmctYm90dG9tXCIpKSksYT1uLShwYXJzZUludChvLmdldFByb3BlcnR5VmFsdWUoXCJwYWRkaW5nLXJpZ2h0XCIpKStwYXJzZUludChvLmdldFByb3BlcnR5VmFsdWUoXCJwYWRkaW5nLWxlZnRcIikpKS1lLnZpZXdwb3J0LnNjcm9sbEJhcldpZHRoO3JldHVybntjb2xzOk1hdGgubWF4KDIsTWF0aC5mbG9vcihhL2UuX3JlbmRlclNlcnZpY2UuZGltZW5zaW9ucy5hY3R1YWxDZWxsV2lkdGgpKSxyb3dzOk1hdGgubWF4KDEsTWF0aC5mbG9vcihpL2UuX3JlbmRlclNlcnZpY2UuZGltZW5zaW9ucy5hY3R1YWxDZWxsSGVpZ2h0KSl9fX0sZX0oKTt0LkZpdEFkZG9uPW59XSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXh0ZXJtLWFkZG9uLWZpdC5qcy5tYXAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IFRlcm1pbmFsIGZyb20gJy4vdGVybSc7XHJcbmltcG9ydCAnLi9pbmRleC5zY3NzJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIHJlbmRlciAoKSB7IFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjpcIjAgYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6NjQwXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDowLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZToxNCxcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6XCI0OHB4LzEuMiAnTW9ub3RvbicsIGN1cnNpdmU7XCJcclxuICAgICAgICAgICAgICAgICAgICB9fT5UYXo8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlNlZWtpbmcgZm9yIG9wcG9ydHVuaXR5IHRoYXQgbWFrZSB0aGUgd29ybGQgZGlmZmVyZW50LCBZb3Ugb25seSBsaXZlIG9uY2UuPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOjAsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjQ4MCxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDo2NDBcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRlcm1pbmFsID48L1Rlcm1pbmFsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcD48L0FwcD4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQgeyBDb21tYW5kcyB9IGZyb20gXCIuLi9jb21tYW5kc1wiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbW1hbmQge1xyXG4gICAgbWFuYWdlcjogQ29tbWFuZHM7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb21tYW5kTWFuYWdlcjogQ29tbWFuZHMpIHtcclxuICAgICAgICB0aGlzLm1hbmFnZXIgPSBjb21tYW5kTWFuYWdlcjtcclxuICAgIH1cclxuICAgIGFic3RyYWN0IGF1dG9jb21wbGV0ZShsaW5lOiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICBhYnN0cmFjdCBleGVjdXRlKGFyZ3M6IHN0cmluZ1tdKTogc3RyaW5nO1xyXG4gICAgYWJzdHJhY3QgaGVscCgpOiBzdHJpbmc7XHJcbiAgICAvLyBvbmUgc2VudGVuY2UgZGVzY3JpcHRpb25cclxuICAgIGFic3RyYWN0IGRlc2NyaXB0aW9uKCk6IHN0cmluZztcclxufSIsImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiLi9iYXNlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEhlbHBDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcblxyXG4gICAgZGVzY3JpcHRpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJ0aGlzIHBhZ2VcIjtcclxuICAgIH1cclxuXHJcbiAgICBhdXRvY29tcGxldGUobGluZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ2hlbHAnO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIGV4ZWN1dGUgKGFyZ3M6IHN0cmluZ1tdKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubWFuYWdlci52YWxpZENvbW1hbmRzLmluZGV4T2YoYXJnc1sxXSkgIT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFuYWdlci5jb21tYW5kc1thcmdzWzFdXS5oZWxwKClcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBVbmFibGUgZmluZCBoZWxwIGZvciBjb21tYW5kICR7YXJnc1sxXX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gXCJcIjtcclxuICAgICAgICAgICAgY29uc3QgY21kcyA9IHRoaXMubWFuYWdlci52YWxpZENvbW1hbmRzLnNvcnQoKTtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNtZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgY29udGVudCArPSBgXFxyXFxuXFx0JHtjbWRzW2ldfVxcdFxcdCR7dGhpcy5tYW5hZ2VyLmNvbW1hbmRzW2NtZHNbaV1dLmRlc2NyaXB0aW9uKCl9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYGNvbW1hbmRzOmAgKyBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhlbHAoKTpzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoW10pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCIuL2Jhc2VcIjtcclxuaW1wb3J0IHsgQ29tbWFuZEhpc3RvcnkgfSBmcm9tIFwiLi4vaGlzdG9yeVwiO1xyXG5pbXBvcnQgeyBDb21tYW5kcyB9IGZyb20gXCIuLi9jb21tYW5kc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBIaXN0b3J5Q29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG5cclxuICAgIGhpc3Rvcnk6IENvbW1hbmRIaXN0b3J5O1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihtYW5hZ2VyOkNvbW1hbmRzKSB7XHJcbiAgICAgICAgc3VwZXIobWFuYWdlcik7XHJcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gbWFuYWdlci5oaXN0b3J5O1xyXG4gICAgfVxyXG5cclxuICAgIGRlc2NyaXB0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiZXhlY3V0aW9uIGhpc3RvcnlcIjtcclxuICAgIH1cclxuXHJcbiAgICBhdXRvY29tcGxldGUobGluZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ2hpc3RvcnknO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIGV4ZWN1dGUgKGFyZ3M6IHN0cmluZ1tdKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5oaXN0b3J5LmdldCgpLnNsaWNlKDApLnJldmVyc2UoKTtcclxuICAgICAgICByZXR1cm4gaGlzdG9yeS5qb2luKFwiXFxyXFxuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGhlbHAoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJoaXN0b3J5OiBoaXN0b3J5IG9mIHRoZSBleGVjdXRpb25cIjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiLi9iYXNlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNob3dDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcblxyXG4gICAgc2hvd2Nhc2U6e1trZXk6IHN0cmluZ106c3RyaW5nfSA9IHtcclxuICAgICAgICBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2k3YXpcIixcclxuICAgICAgICBsaW5rZWRpbjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdGF6ZGluZ28vXCJcclxuICAgIH1cclxuXHJcbiAgICBkZXNjcmlwdGlvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIlRheidzIHNob3cgY2FzZXNcIjtcclxuICAgIH1cclxuXHJcbiAgICBhdXRvY29tcGxldGUobGluZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ2hlbHAnO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIGV4ZWN1dGUgKGFyZ3M6IHN0cmluZ1tdKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhlbHAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2FzZXMgPSBPYmplY3Qua2V5cyh0aGlzLnNob3djYXNlKTtcclxuICAgICAgICBpZihjYXNlcy5pbmRleE9mKGFyZ3NbMV0pICE9IC0xKXtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4odGhpcy5zaG93Y2FzZVthcmdzWzFdXSwnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3djYXNlW2FyZ3NbMV1dO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGB1bmFibGUgdG8gc2hvdyAke2FyZ3NbMV19YFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhlbHAoKTpzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgVXNhZ2U6IHNob3cgPHNob3cgY2FzZT5cXHJcXG5TaG93IGNhc2U6XFxyXFxuXFx0YCArIE9iamVjdC5rZXlzKHRoaXMuc2hvd2Nhc2UpLmpvaW4oXCJcXHJcXG5cXHRcIik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDb21tYW5kSGlzdG9yeSB9IGZyb20gXCIuL2hpc3RvcnlcIjtcclxuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4vYnVpbHRpbi9iYXNlJztcclxuaW1wb3J0IHsgSGVscENvbW1hbmQgfSBmcm9tICcuL2J1aWx0aW4vaGVscCc7XHJcbmltcG9ydCB7IEhpc3RvcnlDb21tYW5kIH0gZnJvbSAnLi9idWlsdGluL2hpc3RvcnknO1xyXG5pbXBvcnQgeyBTaG93Q29tbWFuZCB9IGZyb20gJy4vYnVpbHRpbi9zaG93JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21tYW5kcyB7XHJcbiAgICBoaXN0b3J5OiBDb21tYW5kSGlzdG9yeTtcclxuICAgIGNvbW1hbmRzOiB7W2tleTogc3RyaW5nXTogQ29tbWFuZH0gPSB7fVxyXG4gICAgdmFsaWRDb21tYW5kczogc3RyaW5nW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoaGlzdG9yeTogQ29tbWFuZEhpc3RvcnkpIHtcclxuICAgICAgICB0aGlzLmhpc3RvcnkgPSBoaXN0b3J5O1xyXG4gICAgICAgIHRoaXMudmFsaWRDb21tYW5kcyA9IE9iamVjdC5rZXlzKHRoaXMuY29tbWFuZHMpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJCdWlsdGluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJCdWlsdGluKCkge1xyXG4gICAgICAgIGNvbnN0IGhlbHAgPSBuZXcgSGVscENvbW1hbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbW1hbmQoXCJoZWxwXCIsIGhlbHApO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDb21tYW5kKFwiP1wiLCBoZWxwKTtcclxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gbmV3IEhpc3RvcnlDb21tYW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDb21tYW5kKFwiaGlzdG9yeVwiLCBoaXN0b3J5KTtcclxuICAgICAgICBjb25zdCBzaG93ID0gbmV3IFNob3dDb21tYW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDb21tYW5kKFwic2hvd1wiLCBzaG93KTtcclxuICAgIH1cclxuXHJcbiAgICBleGVjdXRlKGNtZDogc3RyaW5nKTogc3RyaW5ne1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGNtZC5zcGxpdChcIiBcIiwgMSlbMF07XHJcbiAgICAgICAgbGV0IHJlc3VsdDogc3RyaW5nO1xyXG4gICAgICAgIGlmKHRoaXMudmFsaWRDb21tYW5kcy5pbmRleE9mKHRhcmdldCkgPiAtMSl7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuY29tbWFuZHNbdGFyZ2V0XS5leGVjdXRlKGNtZC5zcGxpdChcIiBcIikpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXN1bHQgPSBgJyR7dGFyZ2V0fScgaXMgbm90IHJlY29nbml6ZWQgYXMgYSB2YWxpZCBjb21tYW5kLmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGlzdG9yeS5wdXNoKGNtZCk7XHJcbiAgICAgICAgdGhpcy5oaXN0b3J5LnJlc2V0KCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBhdXRvY29tcGxldGUoY21kOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGNtZC5zcGxpdChcIiBcIiwgMSlbMF07XHJcbiAgICAgICAgaWYgKHRhcmdldCA9PSBjbWQpIHtcclxuICAgICAgICAgICAgaWYodGhpcy52YWxpZENvbW1hbmRzLmluZGV4T2YodGFyZ2V0KSAhPSAtMSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7Y21kfSBgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhpc3RvcnkubGFzdCgpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckNvbW1hbmQoY21kOiBzdHJpbmcsIGNvbW1hbmQ6IENvbW1hbmQpIHtcclxuICAgICAgICBpZiAodGhpcy52YWxpZENvbW1hbmRzLmluZGV4T2YoY21kKSA8IDApe1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkQ29tbWFuZHMucHVzaChjbWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbW1hbmRzW2NtZF0gPSBjb21tYW5kO1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tbWFuZEhpc3Rvcnkge1xyXG4gICAgXHJcbiAgICBtYXhfbGVuZ3RoOiBudW1iZXI7XHJcbiAgICBjdXJzb3I6IG51bWJlcjtcclxuICAgIGhpc3Rvcnk6IHN0cmluZ1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1heExlbmd0aDpudW1iZXIgPSAxMDApIHtcclxuICAgICAgICB0aGlzLm1heF9sZW5ndGggPSBtYXhMZW5ndGg7XHJcbiAgICAgICAgdGhpcy5jdXJzb3IgPSAwO1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2goY21kOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeS51bnNoaWZ0KGNtZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaGlzdG9yeS5sZW5ndGggPj0gdGhpcy5tYXhfbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlzdG9yeS5wb3AoKVxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbiAgICBcclxuICAgIGdldCgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlzdG9yeTtcclxuICAgIH1cclxuXHJcbiAgICBsYXN0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3Vyc29yID49IHRoaXMuaGlzdG9yeS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJzb3IgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5oaXN0b3J5W3RoaXMuY3Vyc29yKytdO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJzb3IgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnNvciA9IHRoaXMuaGlzdG9yeS5sZW5ndGggLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmhpc3RvcnlbdGhpcy5jdXJzb3ItLV07XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJzb3IgPSAwO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHh0ZXJtIGZyb20gJ3h0ZXJtJztcclxuaW1wb3J0IHsgRml0QWRkb24gfSBmcm9tICd4dGVybS1hZGRvbi1maXQnO1xyXG5pbXBvcnQgeyBDb21tYW5kSGlzdG9yeSB9IGZyb20gJy4vaGlzdG9yeSc7XHJcbmltcG9ydCB7IENvbW1hbmRzIH0gZnJvbSAnLi9jb21tYW5kcyc7XHJcblxyXG5pbnRlcmZhY2UgdGVybWluYWwge1xyXG4gICAgcHJvcHM6IHtcclxuXHJcbiAgICB9XHJcbiAgICBzdGF0ZToge1xyXG5cclxuICAgIH1cclxufVxyXG5jbGFzcyB0ZXJtaW5hbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgZWw/OkhUTUxEaXZFbGVtZW50O1xyXG4gICAgdGVybWluYWw/OiB4dGVybS5UZXJtaW5hbDtcclxuICAgIGZpdEFkZG9uPzogRml0QWRkb247XHJcbiAgICBQUzE6IHN0cmluZyA9IFwiXFxyXFxuXFx4MUJbMzJtJCBcIjtcclxuICAgIG1vdGQ6IHN0cmluZyA9IGBcXHJcXG5UaGlzIGlzIGludGVyYWN0aXZlIHRlcm1pbmFsLFxcclxcbnlvdSBjYW4gc3RhcnQgd2l0aCBjb21tYW5kICdoZWxwJy4gXFxyXFxuYDtcclxuICAgIGNtZEJ1ZmZlcjpzdHJpbmcgPSBcIlwiO1xyXG4gICAgaGlzdG9yeTogQ29tbWFuZEhpc3Rvcnk7XHJcbiAgICBjb21tYW5kczogQ29tbWFuZHM7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOmFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmhpc3RvcnkgPSBuZXcgQ29tbWFuZEhpc3RvcnkoKTtcclxuICAgICAgICB0aGlzLmNvbW1hbmRzID0gbmV3IENvbW1hbmRzKHRoaXMuaGlzdG9yeSk7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLmVsKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50ZXJtaW5hbCA9IG5ldyB4dGVybSh7XHJcbiAgICAgICAgICAgIGFsbG93VHJhbnNwYXJlbmN5OmZhbHNlLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIidQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmVcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgICBzY3JvbGxiYWNrOiAwLFxyXG4gICAgICAgICAgICBjdXJzb3JCbGluazogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZpdEFkZG9uID0gbmV3IEZpdEFkZG9uKCk7XHJcbiAgICAgICAgdGhpcy50ZXJtaW5hbD8ubG9hZEFkZG9uKHRoaXMuZml0QWRkb24pO1xyXG4gICAgICAgIHRoaXMudGVybWluYWwhLm9wZW4odGhpcy5lbCk7XHJcbiAgICAgICAgdGhpcy5maXRBZGRvbiEuZml0KCk7XHJcbiAgICAgICAgdGhpcy5wcmludF9tb3RkKCk7XHJcbiAgICAgICAgdGhpcy50ZXJtaW5hbCEub25LZXkodGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMudGVybWluYWwhLm9uUmVzaXplKHRoaXMuaGFuZGxlUmVzaXplLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMucHJvbXB0KClcclxuICAgICAgICB0aGlzLnRlcm1pbmFsIS5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoYW5kbGVSZXNpemUoKSB7XHJcbiAgICAgICAgdGhpcy5maXRBZGRvbiEuZml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnRfbW90ZCAoKSB7XHJcbiAgICAgICAgdGhpcy50ZXJtaW5hbCEud3JpdGVsbih0aGlzLm1vdGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4ZWN1dGUoKSB7XHJcbiAgICAgICAgY29uc3QgY21kID0gdGhpcy5jbWRCdWZmZXI7XHJcbiAgICAgICAgaWYgKGNtZCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGVybWluYWwhLndyaXRlbG4oJycpO1xyXG4gICAgICAgICAgICB0aGlzLnRlcm1pbmFsIS53cml0ZWxuKHRoaXMuY29tbWFuZHMuZXhlY3V0ZShjbWQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9tcHQoKVxyXG4gICAgfVxyXG5cclxuICAgIGF1dG9jb21wbGV0ZSgpIHtcclxuICAgICAgICBjb25zdCBjbWQgPSB0aGlzLmNtZEJ1ZmZlcjtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNvbW1hbmRzLmF1dG9jb21wbGV0ZShjbWQpO1xyXG5cclxuICAgICAgICBpZihyZXN1bHQpe1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFuUmVtYWluQ29tbWFuZCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNtZEJ1ZmZlciA9IHJlc3VsdDtcclxuICAgICAgICAgICAgdGhpcy50ZXJtaW5hbCEud3JpdGUocmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYW5SZW1haW5Db21tYW5kKCkge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNtZEJ1ZmZlci5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMudGVybWluYWwhLndyaXRlKCdcXGIgXFxiJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUtleURvd24oZToge2tleTogc3RyaW5nLCBkb21FdmVudDpLZXlib2FyZEV2ZW50fSkge1xyXG4gICAgICAgIGNvbnN0IHtrZXksIGRvbUV2ZW50fSA9IGU7XHJcbiAgICAgICAgY29uc3QgcHJpbnRhYmxlID0gIWUuZG9tRXZlbnQuYWx0S2V5ICYmICFlLmRvbUV2ZW50LmN0cmxLZXkgJiYgIWUuZG9tRXZlbnQubWV0YUtleTtcclxuICAgICAgICBpZiAoZG9tRXZlbnQua2V5Q29kZSA9PSAxMykge1xyXG4gICAgICAgICAgICAvLyBlbnRlclxyXG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRvbUV2ZW50LmtleUNvZGUgPT0gOSl7XHJcbiAgICAgICAgICAgIC8vIGF1dG8gY29tcGxldGVcclxuICAgICAgICAgICAgdGhpcy5hdXRvY29tcGxldGUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRvbUV2ZW50LmtleUNvZGUgPT0gOCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50ZXJtaW5hbCEuYnVmZmVyLmN1cnNvclggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlcm1pbmFsIS53cml0ZSgnXFxiIFxcYicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbWRCdWZmZXIgPSB0aGlzLmNtZEJ1ZmZlci5zbGljZSgwLCB0aGlzLmNtZEJ1ZmZlci5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoWzM3LDM5XS5pbmRleE9mKGRvbUV2ZW50LmtleUNvZGUpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIGRvbUV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChbMzgsNDBdLmluZGV4T2YoZG9tRXZlbnQua2V5Q29kZSkgIT0gLTEpIHtcclxuICAgICAgICAgICAgZG9tRXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbGV0IGNtZDogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgaWYgKGRvbUV2ZW50LmtleUNvZGUgPT0gMzgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGxhc3RcclxuICAgICAgICAgICAgICAgIGNtZCA9IHRoaXMuaGlzdG9yeS5sYXN0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9tRXZlbnQua2V5Q29kZSA9PSA0MCkge1xyXG4gICAgICAgICAgICAgICAgLy8gbmV4dFxyXG4gICAgICAgICAgICAgICAgY21kID0gdGhpcy5oaXN0b3J5Lm5leHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0eXBlb2YgY21kID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjbWQgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFuUmVtYWluQ29tbWFuZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbWRCdWZmZXIgPSBjbWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlcm1pbmFsIS53cml0ZShjbWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcmludGFibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jbWRCdWZmZXIgKz0ga2V5O1xyXG4gICAgICAgICAgICB0aGlzLnRlcm1pbmFsIS53cml0ZShrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHByb21wdCAoKSB7XHJcbiAgICAgICAgdGhpcy5jbWRCdWZmZXIgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMudGVybWluYWwhLndyaXRlKHRoaXMuUFMxKTtcclxuICAgIH1cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgcmVmPXtlPT57aWYoZSl0aGlzLmVsID0gZX19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDgwLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ2JsYWNrJ1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRlcm1pbmFsOyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTsiLCJtb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsOyJdLCJzb3VyY2VSb290IjoiIn0=