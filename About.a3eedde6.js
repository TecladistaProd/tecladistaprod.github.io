parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KJx8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Container=void 0;var e=t(require("C:\\Users\\Dev\\Documents\\development\\react\\portfolio\\node_modules\\babel-preset-react-app\\node_modules\\@babel\\runtime/helpers/esm/taggedTemplateLiteral")),n=t(require("styled-components"));function t(e){return e&&e.__esModule?e:{default:e}}function r(){const n=(0,e.default)(["\n  display: flex;\n  width: 100%;\n  min-height: 100%;\n  margin-top: 4.5rem;\n  flex-direction: column;\n  h2 {\n    margin-bottom: 1.8rem;\n  }\n  h2.is-2 {\n    margin-top: 2rem;\n  }\n  p {\n    margin: 10px 0;\n  }\n  .text-box {\n    max-width: 720px;\n  }\n"]);return r=function(){return n},n}const o=n.default.div(r());exports.Container=o;
},{"C:\\Users\\Dev\\Documents\\development\\react\\portfolio\\node_modules\\babel-preset-react-app\\node_modules\\@babel\\runtime/helpers/esm/taggedTemplateLiteral":"BnAm","styled-components":"tFSs"}],"zSkP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Container=void 0;var n=t(require("C:\\Users\\Dev\\Documents\\development\\react\\portfolio\\node_modules\\babel-preset-react-app\\node_modules\\@babel\\runtime/helpers/esm/taggedTemplateLiteral")),e=t(require("styled-components"));function t(n){return n&&n.__esModule?n:{default:n}}function o(){const e=(0,n.default)(["\n  max-width: 720px;\n  margin-bottom: 7px;\n  padding: 10px 0;\n  h4 {\n    margin-bottom: 10px;\n  }\n  h4 span.is-2 {\n    opacity: 0;\n    transition: opacity ease-in-out 50ms;\n  }\n  &:not(:hover) h4 span.is-2 {\n    opacity: .5;\n    font-size: 14px;\n  }\n  h4 span:not(.is-2) {\n    font-size: 0;\n    transition: font-size ease 120ms;\n    margin-left: 10px\n  }\n  &:hover h4 span {\n    font-size: 1rem;\n  }\n  div {\n    opacity: 0;\n    position: relative;\n    background: #eee;\n    height: 1px;\n    transition: all ease-out 100ms;\n  }\n  &:hover div {\n    opacity: 1;\n  }\n  div:after {\n    content: '';\n    position: absolute;\n    background: ",";\n    width: 0;\n    height: 100%;\n    transition: all ease-out 300ms 75ms;\n  }\n  &:hover div:after {\n    content: '';\n    position: absolute;\n    background: ",";\n    width: ",";\n    height: 100%;\n    box-shadow: "," 0 0 10px\n  }\n"]);return o=function(){return e},e}const i=e.default.div(o(),({color:n})=>n,({color:n})=>n,({percent:n})=>n+"%",({color:n})=>n);exports.Container=i;
},{"C:\\Users\\Dev\\Documents\\development\\react\\portfolio\\node_modules\\babel-preset-react-app\\node_modules\\@babel\\runtime/helpers/esm/taggedTemplateLiteral":"BnAm","styled-components":"tFSs"}],"bcQP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=l(require("react")),t=require("./styles");function l(e){return e&&e.__esModule?e:{default:e}}function r({skill:l,percent:r,color:a}){return e.default.createElement(t.Container,{percent:r,color:a},e.default.createElement("h4",null,l,e.default.createElement("span",null,r+"%"),e.default.createElement("span",{className:"is-2"},"Hover Me")),e.default.createElement("div",null))}var a=r;exports.default=a;
},{"react":"n8MK","./styles":"zSkP"}],"Qpf8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("react")),t=require("./styles"),l=a(require("../../components/SkillBar"));function a(e){return e&&e.__esModule?e:{default:e}}function r(){return e.default.createElement(t.Container,null,e.default.createElement("h2",null,"About Me"),e.default.createElement("div",{className:"text-box"},e.default.createElement("p",null,"My name is Vitor da Silva Cruz, i was born in Araraquara SP in Brazil, i love technology and develop, always looking be updated and know more and more."),e.default.createElement("p",null,"Technologist in Internet System, graduated in 2019 by Technology State College (Fatec) At Taquaritinga SP Brazil, an graduation course with classes of algorithms, data structure, mathematics, front end development, back end development, database development, mobile development and among others, but focused in web development.")),e.default.createElement("h2",{className:"is-2"},"Skills and Knowledges"),e.default.createElement(l.default,{skill:"HTML",color:"#ab47bc",percent:"90"}),e.default.createElement(l.default,{skill:"JavaScript",color:"#ab47bc",percent:"90"}),e.default.createElement(l.default,{skill:"CSS",color:"#ab47bc",percent:"90"}),e.default.createElement(l.default,{skill:"NodeJS",color:"#5c6bc0",percent:"90"}),e.default.createElement(l.default,{skill:"NPM",color:"#5c6bc0",percent:"70"}),e.default.createElement(l.default,{skill:"React",color:"#ff9800",percent:"75"}),e.default.createElement(l.default,{skill:"React Native",color:"#ff9800",percent:"60"}),e.default.createElement(l.default,{skill:"Vue",color:"#ff9800",percent:"45"}),e.default.createElement(l.default,{skill:"SASS",color:"#ff9800",percent:"60"}),e.default.createElement(l.default,{skill:"Docker",color:"#00897b",percent:"30"}),e.default.createElement(l.default,{skill:"Firebase",color:"#00897b",percent:"45"}),e.default.createElement(l.default,{skill:"Parcel",color:"#00897b",percent:"70"}),e.default.createElement("p",null,"And other things like wepback, databases (MongoDB, MySQL, SQLite), Heroku..."))}var n=r;exports.default=n;
},{"react":"n8MK","./styles":"KJx8","../../components/SkillBar":"bcQP"}]},{},[], null)