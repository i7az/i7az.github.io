!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Command=class{constructor(e){this.manager=e}}},function(e,t){e.exports=React},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(1)),s=r(n(3)),o=r(n(4));n(11);class a extends i.default.Component{render(){return i.default.createElement("div",{style:{margin:"0 auto",width:640}},i.default.createElement("div",{style:{top:0,width:"100%",fontSize:14}},i.default.createElement("h1",{className:"title",style:{font:"48px/1.2 'Monoton', cursive;"}},"Taz"),i.default.createElement("p",null,"Seeking for opportunity that make the world different, You only live once.")),i.default.createElement("div",{style:{top:0,height:480,width:640}},i.default.createElement(o.default,null)))}}s.default.render(i.default.createElement(a,null),document.getElementById("app")),t.default=a},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(1)),s=n(5),o=n(6),a=n(7);class l extends i.default.Component{constructor(e){super(e),this.PS1="\r\n[32m$ ",this.motd="\r\nThis is interactive terminal,\r\nyou can start with command 'help'. \r\n",this.cmdBuffer="",this.history=new o.CommandHistory,this.commands=new a.Commands(this.history)}componentDidMount(){var e;this.el&&(this.terminal=new Terminal({allowTransparency:!1,fontFamily:"'Press Start 2P', cursive",fontSize:14,scrollback:0,cursorBlink:!0}),this.fitAddon=new s.FitAddon,null===(e=this.terminal)||void 0===e||e.loadAddon(this.fitAddon),this.terminal.open(this.el),this.fitAddon.fit(),this.print_motd(),this.terminal.onKey(this.handleKeyDown.bind(this)),this.terminal.onResize(this.handleResize.bind(this)),this.prompt(),this.terminal.focus())}handleResize(){this.fitAddon.fit()}print_motd(){this.terminal.writeln(this.motd)}execute(){const e=this.cmdBuffer;""!=e&&(this.terminal.writeln(""),this.terminal.writeln(this.commands.execute(e))),this.prompt()}autocomplete(){const e=this.cmdBuffer,t=this.commands.autocomplete(e);t&&(this.cleanRemainCommand(),this.cmdBuffer=t,this.terminal.write(t))}cleanRemainCommand(){for(let e=0;e<this.cmdBuffer.length;e++)this.terminal.write("\b \b")}handleKeyDown(e){const{key:t,domEvent:n}=e,r=!e.domEvent.altKey&&!e.domEvent.ctrlKey&&!e.domEvent.metaKey;if(13==n.keyCode)this.execute();else if(9==n.keyCode)this.autocomplete();else if(8==n.keyCode)this.terminal.buffer.cursorX>2&&(this.terminal.write("\b \b"),this.cmdBuffer=this.cmdBuffer.slice(0,this.cmdBuffer.length-1));else if(-1!=[37,39].indexOf(n.keyCode))n.preventDefault();else if(-1!=[38,40].indexOf(n.keyCode)){n.preventDefault();let e="";if(38==n.keyCode?e=this.history.last():40==n.keyCode&&(e=this.history.next()),void 0===e)return;""!=e&&(this.cleanRemainCommand(),this.cmdBuffer=e,this.terminal.write(e))}else r&&(this.cmdBuffer+=t,this.terminal.write(t))}prompt(){this.cmdBuffer="",this.terminal.write(this.PS1)}render(){return i.default.createElement("div",{ref:e=>{e&&(this.el=e)},style:{height:480,width:640,background:"black"}})}}t.default=l},function(e,t,n){window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.prototype.activate=function(e){this._terminal=e},e.prototype.dispose=function(){},e.prototype.fit=function(){var e=this.proposeDimensions();if(e&&this._terminal){var t=this._terminal._core;this._terminal.rows===e.rows&&this._terminal.cols===e.cols||(t._renderService.clear(),this._terminal.resize(e.cols,e.rows))}},e.prototype.proposeDimensions=function(){if(this._terminal&&this._terminal.element&&this._terminal.element.parentElement){var e=this._terminal._core,t=window.getComputedStyle(this._terminal.element.parentElement),n=parseInt(t.getPropertyValue("height")),r=Math.max(0,parseInt(t.getPropertyValue("width"))),i=window.getComputedStyle(this._terminal.element),s=n-(parseInt(i.getPropertyValue("padding-top"))+parseInt(i.getPropertyValue("padding-bottom"))),o=r-(parseInt(i.getPropertyValue("padding-right"))+parseInt(i.getPropertyValue("padding-left")))-e.viewport.scrollBarWidth;return{cols:Math.max(2,Math.floor(o/e._renderService.dimensions.actualCellWidth)),rows:Math.max(1,Math.floor(s/e._renderService.dimensions.actualCellHeight))}}},e}();t.FitAddon=r}])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CommandHistory=class{constructor(e=100){this.max_length=e,this.cursor=0,this.history=[]}push(e){this.history.unshift(e),this.history.length>=this.max_length&&this.history.pop()}get(){return this.history}last(){return this.cursor>=this.history.length&&(this.cursor=0),this.history[this.cursor++]}next(){return 0==this.cursor&&(this.cursor=this.history.length-1),this.history[this.cursor--]}reset(){this.cursor=0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(8),i=n(9),s=n(10);t.Commands=class{constructor(e){this.commands={},this.history=e,this.validCommands=Object.keys(this.commands),this.registerBuiltin()}registerBuiltin(){const e=new r.HelpCommand(this);this.registerCommand("help",e),this.registerCommand("?",e);const t=new i.HistoryCommand(this);this.registerCommand("history",t);const n=new s.ShowCommand(this);this.registerCommand("show",n)}execute(e){const t=e.split(" ",1)[0];let n;return n=this.validCommands.indexOf(t)>-1?this.commands[t].execute(e.split(" ")):`'${t}' is not recognized as a valid command.`,this.history.push(e),this.history.reset(),n}autocomplete(e){const t=e.split(" ",1)[0];return t==e?-1!=this.validCommands.indexOf(t)?`${e} `:this.history.last():""}registerCommand(e,t){this.validCommands.indexOf(e)<0&&this.validCommands.push(e),this.commands[e]=t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);class i extends r.Command{description(){return"this page"}autocomplete(e){return"help"}execute(e){if(e.length>1)return-1!=this.manager.validCommands.indexOf(e[1])?this.manager.commands[e[1]].help():`Unable find help for command ${e[1]}`;{let e="";const t=this.manager.validCommands.sort();for(let n=0;n<t.length;n++)e+=`\r\n\t${t[n]}\t\t${this.manager.commands[t[n]].description()}`;return"commands:"+e}}help(){return this.execute([])}}t.HelpCommand=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);class i extends r.Command{constructor(e){super(e),this.history=e.history}description(){return"execution history"}autocomplete(e){return"history"}execute(e){return this.history.get().slice(0).reverse().join("\r\n")}help(){return"history: history of the execution"}}t.HistoryCommand=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);class i extends r.Command{constructor(){super(...arguments),this.showcase={github:"https://github.com/i7az",linkedin:"https://www.linkedin.com/in/tazdingo/"}}description(){return"Taz's show cases"}autocomplete(e){return"help"}execute(e){if(e.length<2)return this.help();return-1!=Object.keys(this.showcase).indexOf(e[1])?(window.open(this.showcase[e[1]],"_blank"),this.showcase[e[1]]):`unable to show ${e[1]}`}help(){return"Usage: show <show case>\r\nShow case:\r\n\t"+Object.keys(this.showcase).join("\r\n\t")}}t.ShowCommand=i},function(e,t,n){}]);