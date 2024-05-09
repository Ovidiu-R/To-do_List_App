(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>f});var o=n(601),r=n.n(o),a=n(314),i=n.n(a),l=n(417),c=n.n(l),d=new URL(n(104),n.b),s=new URL(n(310),n.b),p=new URL(n(718),n.b),u=i()(r()),g=c()(d),m=c()(s),y=c()(p);u.push([e.id,`@font-face {\n    font-family: 'Azonix';\n    src: url(${g}) format('opentype');\n    font-weight: 600;\n    font-style: normal;\n  }\n\n:root {\n    --primary-color: #17252A;\n    --secondary-color: #3AAFA9;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    height: 100vh;\n    /* position: absolute; */\n}\n\nheader {\n    background-color: var(--primary-color);\n    display: grid;\n    grid-template-columns: 500px 1fr;\n    align-items: center;\n    gap: 15px;\n\n}\n\nh1 {\n    font-size: 60px;\n    padding-left: 20px;\n    color: #FEFFFF;\n    font-family: 'Azonix';\n}\n\n.logoContainer {\n    width: 80px;\n    height: 80px;\n    background-image: url(${m});\n    background-size: 100px 100px;\n    background-position: center center;\n    filter: invert(89%) sepia(0%) saturate(944%) hue-rotate(206deg) brightness(110%) contrast(110%);\n}\n\n\nimg {\n    height: 50px;\n}\n\n.outerGrid {\n    display: grid;\n    grid-template-rows: 120px 1fr;\n    height: 100vh;\n}\n\n.innerGrid {\n    display: grid;\n    grid-template-columns: 300px 1fr;\n}\n\nnav {\n    background-color: var(--secondary-color);\n    padding: 10px 10px 10px 20px;\n    height: 100vh;\n}\n\nul {\n    margin-top: 50px;\n    list-style-type: none;\n}\n\nli {\n    margin-bottom: 20px;\n    font-size: 40px;\n}\n\n#projectWrapper {\n    height: 350px;\n    /* width: 191px; */\n    margin-left: 60px;\n    padding-right: 20px;\n    display: grid;\n    grid-template-rows: repeat(auto-fit, 50px);\n    gap: 10px;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.projectButton {\n    height: 50px;\n    /* width: 200px; */\n    background-color: transparent;\n    border: none;\n    outline: none;\n    font-size: 25px;\n    text-align: left;\n    border-bottom: 1px solid transparent;\n    position: relative;\n    display: inline-block;\n}\n\n.projectButton::before {\n    content: "";\n    height: 100%;\n    width: 40px;\n    position: absolute;\n    left: -40px;\n    z-index: 991;\n}\n\n.projectButton:hover{\n    border-bottom: 1px solid black;\n\n}\n\n\n.activeProject {\n    border-bottom: 1px solid black;\n}\n\n#content {\n    background-color: #DEF2F1;\n    display: grid;\n    grid-template-rows: repeat(auto-fit, 60px);\n    padding: 20px;\n    max-height: 100vh;\n    overflow: auto;\n}\n\n.task {\n    height: 50px;\n    border: 1px solid black;\n    display: grid;\n    grid-template-columns: 40px 1fr 50px 80px 40px 45px;\n    align-items: center;\n    gap: 15px;\n    padding-right: 10px;\n    border-radius: 8px;\n}\n\n.task:hover{\n    box-shadow: 0px 0px 3px 1px #000000;\n}\n\ndialog {\n    height: 400px;\n    width: 700px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\ndialog.active {\n    display: grid;\n    grid-template-rows: 50px 1fr;\n}\ndialog::backdrop {\n    background-color: rgba(0, 0, 0, 0.5);\n    backdrop-filter: blur(5px);\n}\n.modalHeader {\n    padding: 0;\n    height: 50px;\n    background-color: #17252A;\n    display: grid;\n    grid-template-columns: 1fr 20px;\n}\n.modalCloseButton {\n    display: grid;\n    height: 17px;\n    width: 17px;\n    background-color: orangered;\n    font-size: 15px;\n    margin-top: 3px;\n    line-height: 9px;               /*Cannot get button text vertically centered unless I use line-height*/\n}\n.modalHeader h1 {\n    font-size: 32px;\n    align-self: center;\n}\n.modalBody {\n    display: grid;\n    grid-template-columns: 150px 1fr;\n}\n\n.modalNav {\n    display: grid;\n    grid-template-rows: 50px 50px;\n    align-items: center;\n}\n\n.modalNav>button {\n    background: transparent;\n    border: none;\n    border-bottom: 1px solid transparent;\n    font-size: 25px;\n    text-align: left;\n    padding: 10px 10px 0px 0px;\n}\n\n.modalNav>button:hover {\n    border-bottom: 1px black solid;\n}\n\n.selected:focus {\n    border-bottom: 3px black solid !important;\n}\n\n.submitButtons {\n    height: 20px;\n    width: 50px;\n}\n\n#submitProject {\n    display: block;\n    margin-top: 20px;\n}\n\n#newProjectForm {\n    display: none;\n}\n\nbutton:focus{\n    outline: none;\n}\n\n#taskButton {\n    width: 60px;\n}\n\n#projectButton {\n    width: 90px;\n}\n\nli>button {\n    height: 40px;\n    width: 200px;\n    border: none;\n    text-align: right;\n    background-color: transparent;  \n    font-size: 40px;\n    \n}\nli>button:hover {\n    color: gold;\n    text-shadow: 0 0 20px gold;\n}\nli>button:focus {\n    outline: none;\n}\n\n.activeDateFilter {\n    color: gold;\n    text-shadow: 0 0 20px gold;\n}\n\n#addNew {\n    height: 60px;\n    width: 60px;\n    background-image: url(${y});\n    background-size: 80px 80px;\n    background-position: center center;\n    border: none;\n    background-color: transparent;\n}\n\n#reset {\n    font-size: 17px;\n    width: 70px;\n    background-color: red;\n    color: white;\n}\n\n#reset:hover {\n    box-shadow: 0px 0px 50px 10px red;\n    text-shadow: 0 0 50px red;\n}\n\n.bottomButtons {\n    display: grid;\n    grid-template-columns: 70px 50px;\n    align-items: center;\n    margin-top: 30px;\n    margin-left: 50px;\n    gap: 30px;\n}\n\n#addNew:hover {\n    filter: invert(78%) sepia(50%) saturate(2543%) hue-rotate(3deg) brightness(109%) contrast(105%);\n}\n#addNew:focus {\n    outline: none;\n}\n\nform {\n    margin-top: 20px;\n    margin-left: 30px;\n}\n.deadline {\n    margin-top: 20px;\n    display: inline-block;\n}\n.priority {\n    display: grid;\n    margin-top: 10px;\n    grid-template-columns: 60px 1fr;\n    align-items: center;\n}\n.date {\n    margin-left: 10px;\n}\n\n.radioButtons{\n    display: grid;\n    grid-template-columns: repeat(3, 65px);\n    margin-left: 10px;\n    padding-top: 5px;\n    gap: 12px;\n}\n\n.radioButton {\n    width: 65px;\n    height: 25px;\n    position: relative;\n    \n}\n\n.radioButton label,\n.radioButton input {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 6px;\n}\n\n\n.radioButton input[type="radio"] {\n    opacity: 0.011;\n    z-index: 100;\n\n}\n\n.radioButton input[type="radio"]:checked + label {\n    background: gold;\n    border-radius: 6px;\n}\n\n.radioButton label {\n    z-index: 90;\n    line-height: 1.8em;\n    text-align: center;\n    border: solid black 1px;\n    font-size: 12px;\n}\n.title, textarea {\n    border: none;\n    outline: none;\n    font-size: 18px;\n    font-family: 'Times New Roman', Times, serif;\n}\n.title{\n    margin-bottom: 15px;\n\n}\n\n.low {\n    background-color: yellow;\n}\n\n.medium {\n    background-color: orange;\n}\n\n.high {\n    background-color: red;\n}\n\n#detailModal {\n    height: 300px;\n    width: 500px;\n    padding-top: 30px;\n    background-color: var(--secondary-color);\n}\n\n#detailModal * {\n    margin-left: 20px;\n    margin-bottom: 30px;\n\n}\n\n#viewTitle {\n    color: black;\n    padding-left: 0px;\n    font-size: 30px;\n}\n\n#closeDetails {\n    font-size: 17px;\n    height: 30px;\n    width: 70px;\n    margin-top: 30px;\n}\n\n.emptyProjCont {\n    display: grid;\n    grid-template-columns: 200px 200px;\n    gap: 50px;\n    justify-content: center;\n}\n\n.projectDiv {\n    display: grid;\n    grid-template-columns: 10px 190px;\n    align-items: center;\n    gap: 12px;\n\n}\n\n.projectCounter {\n    height: 16px;\n    width: 16px;\n    font-size: 14px;\n    border-radius: 50%;\n    background-color: lightgoldenrodyellow;\n    text-align: center;\n    padding-top: 1px;\n    margin-bottom: 2px;\n}\n\n@media only screen and (max-width: 768px) {\n    header {\n        /* width: 100vw; */\n        grid-template-columns: 4fr 1fr;\n    }\n    h1{\n        font-size: 40px;\n    }\n    nav {\n        display: none;\n    }\n    .outerGrid {\n        display: grid;\n        grid-template-rows: 90px 1fr;\n        height: 100vh;\n    }\n    \n    .innerGrid {\n        display: grid;\n        grid-template-columns: 1fr;\n    }\n    #content {\n        width: 100vw;\n        padding: none;\n    }\n    .task{\n        width: 90vw;\n        font-size: 12px;\n        grid-template-columns: 20px 1fr 45px 60px 30px 37px;\n        gap: 10px;\n    }\n    .task>button {\n        font-size: 13px;\n    }\n\n}`,""]);const f=u},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],l=0;l<e.length;l++){var c=e[l],d=o.base?c[0]+o.base:c[0],s=a[d]||0,p="".concat(d," ").concat(s);a[d]=s+1;var u=n(p),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(g);else{var m=r(g,o);o.byIndex=l,t.splice(l,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=n(a[i]);t[l].references--}for(var c=o(e,r),d=0;d<a.length;d++){var s=n(a[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=c}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},104:(e,t,n)=>{e.exports=n.p+"9091792cb1720a8c6ea0.otf"},310:(e,t,n)=>{e.exports=n.p+"3468c45c1c98a29c16c4.svg"},718:(e,t,n)=>{e.exports=n.p+"6c42579770bcaa2660fe.svg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(72),t=n.n(e),o=n(825),r=n.n(o),a=n(659),i=n.n(a),l=n(56),c=n.n(l),d=n(540),s=n.n(d),p=n(113),u=n.n(p),g=n(208),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=s(),t()(g.A,m),g.A&&g.A.locals&&g.A.locals;const y=()=>{if(null===localStorage.getItem("firstSetup")){const e=!0,t=[{name:"Default",counter:4},{name:"TestProject",counter:2}],n={title:"Feed the cat!",details:"Must feed Muffin by 9am otherwise she will tear the entire house apart.",deadline:"2024-05-09",priority:"medium",completion:!0,project:"TestProject"},o={title:"Shopping",details:"Must buy milk, bread, sausages, eggs and honey for the wifey",deadline:"2024-05-09",priority:"medium",completion:!1,project:"TestProject"},r={title:"Pay council tax",details:"Any delays will slap a fine on top of the amount due",deadline:"2024-05-10",priority:"high",completion:!0,project:"Default"},a={title:"Mega DnD session",details:"Set aside 8 hours and acquire pelnty of snacks to keep me going",deadline:"2024-05-10",priority:"medium",completion:!1,project:"Default"},i={title:"Workout",details:"Weighted dips, bodyweight rows and overhead press",deadline:"2024-04-15",priority:"high",completion:!1,project:"Default"},l={title:"Hoover living room",details:"",deadline:"2024-04-12",priority:"medium",completion:!1,project:"Default"};localStorage.setItem("firstSetup",JSON.stringify(e)),localStorage.setItem("projectArray",JSON.stringify(t)),localStorage.setItem("testTask1",JSON.stringify(n)),localStorage.setItem("testTask2",JSON.stringify(o)),localStorage.setItem("testTask3",JSON.stringify(r)),localStorage.setItem("testTask4",JSON.stringify(a)),localStorage.setItem("testTask5",JSON.stringify(i)),localStorage.setItem("testTask6",JSON.stringify(l))}},f=document.getElementById("taskModal"),h=document.getElementById("editModal"),x=document.getElementById("detailModal"),b=document.getElementById("content"),v=document.querySelectorAll(".title"),w=document.querySelectorAll(".details"),k=document.querySelectorAll(".date"),S=document.querySelectorAll("input[name='priority']"),E=e=>{b.textContent="",e.forEach((e=>{if("firstSetup"!==e.key&&"projectArray"!==e.key){const t=document.createElement("div");t.classList.add("task",`${e.priority}`),t.setAttribute("id",e.key);const n=document.createElement("input");n.setAttribute("type","checkbox"),n.classList.add("completion"),!0===e.completion&&(n.checked=!0);const o=document.createElement("p");o.textContent=e.title;const r=document.createElement("button");r.classList.add("taskDetails"),r.textContent="Details";const a=document.createElement("p");a.textContent=e.deadline;const i=document.createElement("button");i.classList.add("edit"),i.textContent="Edit";const l=document.createElement("button");l.classList.add("erase"),l.textContent="Erase",t.append(n,o,r,a,i,l),b.append(t)}}))},I=()=>{const e=document.getElementById("newTaskForm"),t=document.getElementById("newProjectForm"),n=document.getElementById("taskButton");document.getElementById("projectButton").classList.remove("selected"),n.classList.add("selected"),t.style.display="none",e.style.display="block"},j=()=>{v.forEach((e=>{"none"!==window.getComputedStyle(e).display&&(e.value="")})),w.forEach((e=>{"none"!==window.getComputedStyle(e).display&&(e.value="")})),k.forEach((e=>{"none"!==window.getComputedStyle(e).display&&(e.value="")})),S.forEach((e=>{"none"!==window.getComputedStyle(e).display&&(e.checked=!1)})),f.close(),h.close(),x.close(),f.classList.remove("active")},B=()=>{const e=document.getElementById("projectWrapper"),t=JSON.parse(localStorage.getItem("projectArray"));e.textContent="",t.forEach((t=>{const n=document.createElement("div");n.classList.add("projectDiv");const o=document.createElement("div");o.classList.add("projectCounter"),o.textContent=t.counter;const r=document.createElement("button");r.setAttribute("id",`${t.name}`),r.textContent=t.name,r.classList.add("projectButton"),n.append(o,r),e.appendChild(n)}))},D=()=>{b.textContent="";const e=document.createElement("div");e.classList.add("emptyProjCont");const t=document.createElement("button");t.classList.add("addNew"),t.textContent="Add task";const n=document.createElement("button");n.setAttribute("id","deleteProject"),n.textContent="Delete project",e.append(t,n),b.append(e)},A={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let L;const N=new Uint8Array(16);function C(){if(!L&&(L="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!L))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return L(N)}const O=[];for(let e=0;e<256;++e)O.push((e+256).toString(16).slice(1));const T=function(e,t,n){if(A.randomUUID&&!t&&!e)return A.randomUUID();const o=(e=e||{}).random||(e.rng||C)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=o[e];return t}return function(e,t=0){return O[e[t+0]]+O[e[t+1]]+O[e[t+2]]+O[e[t+3]]+"-"+O[e[t+4]]+O[e[t+5]]+"-"+O[e[t+6]]+O[e[t+7]]+"-"+O[e[t+8]]+O[e[t+9]]+"-"+O[e[t+10]]+O[e[t+11]]+O[e[t+12]]+O[e[t+13]]+O[e[t+14]]+O[e[t+15]]}(o)},F=()=>{const e=document.querySelector(".activeProject");let t;null!==e&&(t=e.id);const n=[];for(let e=0;e<localStorage.length;e++){const o=localStorage.key(e),r=localStorage.getItem(o),a=JSON.parse(r);"projectArray"===o?console.log(""):"firstSetup"===o?n.push({key:"firstSetup",deadline:"1999-01-01"}):(void 0===t||a.project===t)&&n.push(Object.assign(a,{key:o}))}return n},P=(e,t)=>{const n=new Date;var o=new Date(n.getFullYear(),n.getMonth(),n.getDate());if("day"===t)return e.filter((e=>{const t=new Date(e.deadline),n=new Date(t.getFullYear(),t.getMonth(),t.getDate());return n.getFullYear()===o.getFullYear()&&n.getMonth()===o.getMonth()&&n.getDate()===o.getDate()}));if("week"===t){const t=n.getDay(),r=n.getDate()-t,a=r+6;return e.filter((e=>{const t=new Date(e.deadline),n=new Date(t.getFullYear(),t.getMonth(),t.getDate());return n.getFullYear()===o.getFullYear()&&n.getMonth()===o.getMonth()&&n.getDate()>=r&&n.getDate()<=a}))}return e},M=e=>(e.sort((function(e,t){return new Date(e.deadline)-new Date(t.deadline)})),e),J=e=>{const t=document.getElementById(e);document.querySelectorAll(".filterButtons").forEach((e=>{e.classList.remove("activeDateFilter")})),void 0!==e&&t.classList.add("activeDateFilter")},z=e=>JSON.parse(localStorage.getItem("projectArray")).some((t=>t.name===e&&t.counter>0)),U=e=>{console.log(e),document.querySelectorAll(".projectButton").forEach((e=>{e.classList.remove("activeProject")})),void 0!==e&&document.getElementById(e).classList.add("activeProject")};class q{constructor(e,t,n,o,r,a){this.title=e,this.details=t,this.deadline=n,this.priority=o,this.completion=r,this.project=a}}document.addEventListener("DOMContentLoaded",(()=>{document.addEventListener("click",(function(e){switch(!0){case e.target.classList.contains("addNew"):f.showModal(),f.classList.add("active"),I(),(()=>{const e=document.getElementById("title"),t=document.getElementById("details"),n=document.getElementById("date"),o=document.getElementById("submit"),r=document.getElementById("newTaskForm"),a=i=>{const l=document.querySelector(".activeProject");let c;null!==l&&(c=l.id);const d=document.querySelector("input[name='priority']:checked");if(i.preventDefault(),r.checkValidity()){const o=new q(e.value,t.value,n.value,d.value,!1,c),r=T();localStorage.setItem(r,JSON.stringify(o)),j();const a=F(),i=P(a,"day"),s=P(a,"week");let p=M(a);l||(i.some((e=>e.key===r))?(p=M(i),J("day")):s.some((e=>e.key===r))&&(p=M(s),J("week"))),E(p),(e=>{const t=JSON.parse(localStorage.getItem("projectArray"));t.forEach((n=>{n.name===e&&(n.counter+=1,localStorage.setItem("projectArray",JSON.stringify(t)))}))})(c),B(),U(c)}else r.reportValidity();i.stopImmediatePropagation(),o.removeEventListener("click",a)};o.addEventListener("click",a)})();break;case"submitProject"===e.target.id:e.preventDefault(),(()=>{const e=document.getElementById("newProjectForm"),t=document.getElementById("projectTitle"),n=JSON.parse(localStorage.getItem("projectArray")),o=t.value;e.checkValidity()?(n.push({name:`${o}`,counter:0}),localStorage.setItem("projectArray",JSON.stringify(n)),j(),B(),U(o)):e.reportValidity()})(),E(M(F())),e.stopImmediatePropagation();break;case e.target.classList.contains("erase"):(e=>{const t=JSON.parse(localStorage.getItem(e)),n=document.querySelector(".activeDateFilter");switch(localStorage.removeItem(e),(e=>{const t=JSON.parse(localStorage.getItem("projectArray"));t.forEach((n=>{n.name===e&&(n.counter-=1,localStorage.setItem("projectArray",JSON.stringify(t)))}))})(t.project),console.log(t.project),!0){case void 0===t.project:console.log(n.id),E(M(P(F(),n.id)));break;case z(t.project):B(),null===n?(E(M(F())),U(t.project)):E(M(P(F(),n.id)));break;case!0:D(),B(),J(void 0),U(t.project)}})(e.target.parentElement.getAttribute("id"));break;case"reset"===e.target.id:localStorage.clear(),y(),U(void 0),B(),J("all"),E(M(F()));break;case e.target.classList.contains("edit"):const t=e.target.parentElement.getAttribute("id");(e=>{const t=document.getElementById("editTitle"),n=document.getElementById("editDetails"),o=document.getElementById("editDate"),r=JSON.parse(localStorage.getItem(e)),a=document.getElementById(`${r.priority}Edit`);h.showModal(),t.value=r.title,n.value=r.details,o.value=r.deadline,a.checked=!0})(t),(e=>{const t=document.getElementById("editTitle"),n=document.getElementById("editDetails"),o=document.getElementById("editDate"),r=document.getElementById("editSubmit"),a=document.getElementById("editTaskForm"),i=l=>{const c=document.querySelector("input[name='priority']:checked");if(l.preventDefault(),a.checkValidity()){const r=JSON.parse(localStorage.getItem(e)),a=new q(t.value,n.value,o.value,c.value,!1,r.project);localStorage.setItem(e,JSON.stringify(a)),j();const i=F(),l=M(i);E(l)}else a.reportValidity(),console.log("INVALID");r.removeEventListener("click",i)};r.addEventListener("click",i)})(t);break;case e.target.classList.contains("completion"):(e=>{const t=JSON.parse(localStorage.getItem(e)),n=!t.completion,o=new q(t.title,t.details,t.deadline,t.priority,n,t.project);localStorage.setItem(e,JSON.stringify(o))})(e.target.parentElement.getAttribute("id"));break;case e.target.classList.contains("taskDetails"):(e=>{const t=document.getElementById("detailModal"),n=document.getElementById("viewTitle"),o=document.getElementById("viewDetails"),r=document.getElementById("viewDeadline"),a=document.getElementById("viewPriority");t.showModal();const i=JSON.parse(localStorage.getItem(e));n.textContent=i.title,o.textContent=i.details,r.textContent=`Deadline:  ${i.deadline}`,a.textContent=`Priority:  ${i.priority}`})(e.target.parentElement.id);break;case"closeDetails"===e.target.id:case e.target.classList.contains("modalCloseButton"):j();break;case"taskButton"===e.target.id:I(),e.stopImmediatePropagation();break;case"projectButton"===e.target.id:(()=>{const e=document.getElementById("newTaskForm"),t=document.getElementById("newProjectForm"),n=document.getElementById("taskButton"),o=document.getElementById("projectButton");n.classList.remove("selected"),o.classList.add("selected"),e.style.display="none",t.style.display="block"})(),e.stopImmediatePropagation();break;case e.target.classList.contains("projectButton"):const n=e.target.id;U(n),z(n)?E(M(F())):D(),J(void 0);break;case"deleteProject"===e.target.id:(()=>{const e=JSON.parse(localStorage.getItem("projectArray")),t=document.querySelector(".activeProject"),n=e.filter((e=>e.name!==t.id));localStorage.setItem("projectArray",JSON.stringify(n))})(),B(),U(void 0),J("all"),E(M(F()));break;case e.target.classList.contains("filterButtons"):const o=e.target.id;J(o),U(void 0),E(M("all"===o?F():P(F(),o)))}})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&j()}))})),y();const $=F(),R=M($);E(R),B()})()})();