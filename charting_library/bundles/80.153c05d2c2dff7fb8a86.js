(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{"/udZ":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return u}));var r=n("25b6"),i=n("YFKU");function o(t){if(void 0===t)return Object(i.t)("Unknown error");let e;return e=t instanceof Error?t.message:"object"==typeof t?JSON.stringify(t):t.toString(),Object(r.d)(e)}function c(t){return t instanceof u?Object(r.d)(t.detailedErrorMessage):o(t)}class u extends Error{constructor({detailedErrorMessage:t,userFriendlyMessage:e}){super(e),this.name="UserFriendlyError",this.detailedErrorMessage=t,Object.setPrototypeOf(this,u.prototype)}}},"0W4x":function(t,e,n){"use strict";n.d(e,"b",(function(){return x})),n.d(e,"h",(function(){return y})),n.d(e,"l",(function(){return j})),n.d(e,"i",(function(){return w})),n.d(e,"c",(function(){return E})),n.d(e,"d",(function(){return k})),n.d(e,"f",(function(){return v})),n.d(e,"k",(function(){return _})),n.d(e,"a",(function(){return C})),n.d(e,"g",(function(){return T})),n.d(e,"e",(function(){return L})),n.d(e,"j",(function(){return M}));var r=n("YFKU"),i=n("ivNn"),o=n("nc0P"),c=n("JES+"),u=n("EBrf"),s=n("ogJP"),a=n("txPx"),d=n("/udZ");const f={},l={},p={},h={};let b=!1;const m=Object(a.getLogger)("Trading.Utils");function g(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(t=>e[t]))}function x(t){const e=[];return t&&Object.keys(t).forEach((n=>{e.push(g(n)+"="+g(t[n]))})),e.join("&")}function y(t){return O(),h[t]}function O(){b||(b=!0,f[2]=$.t("Market"),f[1]=$.t("Limit"),f[3]=$.t("Stop",{context:"order"}),f[4]=$.t("StopLimit"),l[1]=$.t("Buy",{context:"trading"}),l[-1]=$.t("Sell",{context:"trading"}),p[1]=$.t("Long",{context:"trading"}),p[-1]=$.t("Short",{context:"trading"}),h[2]=$.t("filled"),h[1]=$.t("cancelled"),h[6]=$.t("working"),h[3]=$.t("inactive"),h[4]=$.t("placing"),h[5]=$.t("rejected"))}function j(t,e){O();const n=l[t];return e?n.toUpperCase():n}function w(t,e){return O(),e?f[t].toUpperCase():f[t]}function E(t,e,n,r,i){const o={added:[],modified:[],removed:[]},c=t.slice(0);return e.forEach((e=>{const u=t.findIndex((t=>t[n]===e[n]));if(-1===u)return void o.added.push(e);c[u]=null;const a=t[u];for(const t of r){let n=!0;if(null===a[t]||"object"!=typeof a[t]?n=a[t]===e[t]:i&&(n=Object(s.deepEquals)(a[t],e[t])[0]),!n)return void o.modified.push(e)}})),c.forEach((t=>{t&&o.removed.push(t)})),o}function k(t){return Math.abs(t||0)<.001?"0.00":Object(u.splitThousands)((t||0).toFixed(2))}function v(t){return-1!==Object.keys(c.OrderOrPositionMessageType).map((t=>c.OrderOrPositionMessageType[t])).indexOf(t)}function _(t,e,n,r){let o=0;const c=Object(i.fixComputationError)(t/e);return(1===n&&1===r||2===n&&-1===r)&&(o=Math.floor(c)*e),(1===n&&-1===r||2===n&&1===r)&&(o=Math.ceil(c)*e),Object(i.fixComputationError)(o)}const F=Object(r.t)("Failed to login");class C{constructor(t){this._isFinished=!1,this._isTerminated=!1,this._tasks=t}execute(){return this._isTerminated=!1,this._isExecuted()&&!this._isFinished?this.terminate().then((()=>this._execution=this._execute())):this._execution=this._execute()}async terminate(){if(this._isExecuted()&&!this._isFinished){this._isTerminated=!0;try{await this._execution}catch(t){return void m.logWarn(t)}}}_isExecuted(){return!!this._execution}async _execute(){for(const t of this._tasks){if(this._isTerminated)throw new Error("Login tasks are terminated");try{await t()}catch(t){throw this._isFinished=!0,new d.a({detailedErrorMessage:`${F}${P(Object(d.c)(t))}`,userFriendlyMessage:`${F}${P(Object(d.b)(t))}`})}}this._isFinished=!0}}function P(t){return void 0===t||""===t?"":": "+t}function T(t){return(new o.Big(t).toFixed().split(".")[1]||"").length}function L(t){return-1!==[2,1,5].indexOf(t)}function M(t){return O(),p[t]}},"4qhP":function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"g",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"c",(function(){return l})),n.d(e,"h",(function(){return p})),n.d(e,"f",(function(){return h})),n.d(e,"i",(function(){return b})),n.d(e,"j",(function(){return m})),n.d(e,"e",(function(){return g}));var r=n("Eyy1"),i=n("7KDR"),o=n("0W4x");n.d(e,"k",(function(){return o.h}));const c="js-bottom-trading-tab",u=["Paper"];function s(t,e){const n=t.map((t=>t.id)),r=e.map((t=>t.slug_name)),i=e.filter((t=>n.includes(t.slug_name))).map((e=>({metainfo:a(t,e.slug_name),brokerPlan:e}))),o=t.filter((t=>!r.includes(t.id)&&!u.includes(t.id))).map((t=>({metainfo:t}))),c=function(t){return t.findIndex((t=>t.brokerPlan&&!t.brokerPlan.hidden&&t.brokerPlan.flags&&t.brokerPlan.flags.includes("featured")))}(i),s=u.map((e=>({metainfo:a(t,e)})));return s.length>0&&i.splice(c+1,0,...s),[...i,...o]}function a(t,e){return Object(r.ensureDefined)(t.find((t=>t.id.toLowerCase()===e.toLowerCase())))}function d(t){return void 0!==t&&["oauth","oauth2-implicit-flow","oauth2-code-flow"].includes(t)}function f(t,e){const n=Object(o.l)(t.side)+" "+t.qty+" @ "+e.format(t.price);return n.substr(0,1).toUpperCase()+n.substr(1).toLowerCase()}function l(t){return t?t.map((t=>"-"===t.text||t.separator?new i.Separator:new i.Action({name:t.name,checkable:t.checkable,checked:t.checked,disabled:void 0!==t.enabled&&!t.enabled,shortcut:t.shortcut,label:t.text,statName:t.statName,icon:t.icon,onExecute:e=>{t.action({checkable:e.isCheckable(),checked:e.isChecked(),enabled:!e.isDisabled(),text:e.getLabel().toString()})}}))):[]}function p(t){return 6===t||3===t}function h(t,e){if(void 0!==e&&e.length>0){const n=e.find((e=>"default"in e&&(void 0===e.supportedOrderTypes||e.supportedOrderTypes.includes(t))))||e.find((e=>e.supportedOrderTypes&&e.supportedOrderTypes.includes(t)));return n?{type:n.value}:void 0}}function b(t){return(t+"-brokers-side-maintenance").toLowerCase()}function m(t){return(t+"-maintenance").toLowerCase()}function g(t,e,n){return"crypto"===t.type?t.currency||"":!n&&e.currencySign||e.currency||t.currency||""}},EBrf:function(t,e,n){"use strict";n.r(e),n.d(e,"splitThousands",(function(){return i}));var r=n("ivNn");function i(t,e="&nbsp;"){let n=t+"";-1!==n.indexOf("e")&&(n=function(t){return Object(r.fixComputationError)(t).toFixed(10).replace(/\.?0+$/,"")}(Number(t)));const i=n.split(".");return i[0].replace(/\B(?=(\d{3})+(?!\d))/g,e)+(i[1]?"."+i[1]:"")}},orrl:function(t,e,n){t.exports={wrapper:"wrapper-2i2vljmZ",text:"text-2i2vljmZ"}},yqjg:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return d}));var r=n("q1tI"),i=n.n(r),o=n("i8i4"),c=n.n(o),u=n("YFKU"),s=n("orrl");function a(){return i.a.createElement("div",{className:s.wrapper},i.a.createElement("p",{className:s.text},Object(u.t)("Lost internet connection")))}function d(t){c.a.render(i.a.createElement(a,null),t)}}}]);