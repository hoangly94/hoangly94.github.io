(window.webpackJsonp=window.webpackJsonp||[]).push([["partially-closing-dialog"],{WncW:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),o=n("tLSG");const i=a.lazy((async()=>({default:(await Promise.all([n.e(4),n.e(14),n.e(16),n.e(28),n.e(88),n.e(129),n.e(3),n.e(75),n.e("create-confirm-dialog")]).then(n.bind(null,"ycFu"))).AdaptiveConfirmDialog}))),l=Object(o.a)(i)},"m6W+":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("EBrf"),o=n("Ialn");class i{constructor(e=" "){this._divider=e}format(e){const t=Object(a.splitThousands)(e,this._divider);return Object(o.isRtl)()?Object(o.startWithLTR)(t):t}parse(e){const t=Object(o.stripLTRMarks)(e).split(this._divider).join(""),n=Number(t);return isNaN(n)||/e/i.test(t)?{res:!1}:{res:!0,value:n,suggest:this.format(n)}}}},qhWn:function(e,t,n){e.exports={scrollable:"scrollable-yzGChVZZ",content:"content-yzGChVZZ",input:"input-yzGChVZZ",endSlot:"endSlot-yzGChVZZ",message:"message-yzGChVZZ",explanation:"explanation-yzGChVZZ",label:"label-yzGChVZZ"}},tmL0:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("mrSG"),o=n("q1tI"),i=n.n(o),l=n("x0D+"),s=n("Eyy1"),c=n("qFKp");function r(e){const{reference:t,children:n}=e,s=Object(a.a)(e,["reference","children"]),r=Object(o.useRef)(null),m=Object(o.useCallback)((e=>{t&&(t.current=e),c.CheckMobile.iOS()&&(null!==r.current&&Object(l.enableBodyScroll)(r.current),r.current=e,null!==r.current&&Object(l.disableBodyScroll)(r.current,{allowTouchMove:u(r)}))}),[t]);return i.a.createElement("div",Object.assign({ref:m},s),n)}function u(e){return t=>{const n=Object(s.ensureNotNull)(e.current),a=document.activeElement;return!n.contains(t)||null!==a&&n.contains(a)&&a.contains(t)}}},zSOM:function(e,t,n){"use strict";n.r(t);var a=n("YFKU"),o=n("q1tI"),i=n.n(o),l=n("fV0y"),s=n("nc0P"),c=n.n(s),r=n("tmL0"),u=n("tWVy"),m=n("/3z9"),b=n("xx2B"),d=n("WncW"),f=n("EBrf"),p=n("qhWn");function y(e){const{positionOrTrade:t,onClose:n,dialogActionHandler:s,qtyFormatter:y,supportLots:O,qtyStep:j,minQty:h,message:v}=e,g=Object(o.useMemo)((()=>Math.abs(t.qty)),[t.qty]),[E,S]=Object(o.useState)(!0),[w,C]=Object(o.useState)(!1),[q,N]=Object(o.useState)(g),[Z,x]=Object(o.useState)(),[Q,L]=Object(o.useState)(!0),z=(()=>{const[e,t]=Object(o.useState)(!window.navigator.onLine),n=e=>t("offline"===e.type);return Object(o.useEffect)((()=>(window.addEventListener("online",n),window.addEventListener("offline",n),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",n)}))),e})(),T=Object(o.useCallback)((e=>{let t;null===e?t=Object(a.t)("Number format is invalid"):e>g?t=Object(a.t)("Specified value is more than the instrument maximum"):e!==g&&e<h?t=Object(a.t)("Specified value is less than the instrument minimum of {minQty}").replace("{minQty}",String(h)):g!==e&&g-e<h?t=Object(a.t)("Remaining quantity of position is less than the instrument minimum of {minQty}").replace("{minQty}",String(h)):e!==g&&"0"!==new c.a(e).mod(new c.a(j)).valueOf()&&(t=Object(a.t)("Specified value is not a multiple of quantity step"));const n=void 0===t;return L(n),x(t),n}),[g,j,h]);Object(o.useEffect)((()=>{w||Q||N(g)}),[w,Q,g]),Object(o.useEffect)((()=>{z&&G()}),[z,G]);const V=w&&null!==q&&q<g?Object(a.t)("Partially close"):Object(a.t)("Close position");return i.a.createElement(d.a,{isOpen:E,isOpened:E,submitButtonDisabled:w&&!Q,render:function(){const e=Object(f.splitThousands)(y.format(g)," "),n=Object(a.t)("of {positionQty} lot",{context:"close_position_total",plural:"of {positionQty} lots",count:g}).replace("{positionQty}",e),o=Object(a.t)("of {positionQty} unit",{context:"close_position_total",plural:"of {positionQty} units",count:g}).replace("{positionQty}",e),s=O?n:o;return i.a.createElement(r.a,{className:p.scrollable,onScroll:P},i.a.createElement("div",{className:p.content},i.a.createElement("div",{className:p.message},v),i.a.createElement(l.a,{name:"partially-close-checkbox",label:i.a.createElement("span",{className:p.label},Object(a.t)("Partial close")),checked:w,onChange:k,disabled:!1,indeterminate:!1,labelPositionReverse:!1}),w&&i.a.createElement("form",{onSubmit:W},i.a.createElement(b.a,{useFormatter:!0,error:!Q,errorMessage:Z,className:p.input,value:q,formatter:y,forceShowControls:!0,step:j,mode:"float",onValueChange:B,onEmptyString:M,endSlot:i.a.createElement("p",{className:p.endSlot},s)}),Q&&null!==q&&q<g?i.a.createElement("div",{className:p.explanation},i.a.createElement("div",null,Object(a.t)("Partially close {symbol} {quantity}").replace("{symbol}",t.symbol).replace("{quantity}",Object(f.splitThousands)(y.format(q)," "))),i.a.createElement("div",null,Object(a.t)("Leaving a position of {leavingQty}").replace("{leavingQty}",Object(f.splitThousands)(y.format(g-q)," ")))):null)))},onClose:G,title:Object(a.t)("Close position"),onSubmit:W,onCancel:()=>{},onKeyDown:function(e){27===Object(m.hashFromEvent)(e)&&G()},dataName:"trading-partial-closing-dialog",backdrop:!0,submitOnEnterKey:!0,defaultActionOnClose:"none",submitButtonText:V,cancelButtonText:Object(a.t)("Cancel")});function k(){C((e=>!e))}function G(){S(!1),s({status:!1}),n()}function W(){w?null!==q&&T(q)?s({status:!0,qty:q}):s({status:!1}):s({status:!0,qty:g}),S(!1),n()}function B(e){T(e),N(e)}function M(){T(null),N(null)}function P(){u.a.fire()}}n.d(t,"PartiallyClosingDialog",(function(){return y}))}}]);