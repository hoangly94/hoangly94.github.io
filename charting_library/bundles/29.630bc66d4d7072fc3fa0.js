(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{WboT:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),s=(n("EsMY"),n("zcN6")),a=n("TSYQ"),i=n("YFKU"),l=n("Iivm"),c=n("R4+T"),u=n("uZsJ");function p(e){const t=a(u.control,u.controlIncrease),n=a(u.control,u.controlDecrease);return r.createElement(r.Fragment,null,void 0!==e.title&&r.createElement("div",{className:u.title},e.title),r.createElement("div",{className:u.controlWrapper},(e.defaultButtonsVisible||e.title)&&r.createElement(r.Fragment,null,r.createElement("button",{type:"button",tabIndex:-1,"aria-label":Object(i.t)("Increase"),className:t,onClick:e.increaseValue},r.createElement(l.a,{icon:c,className:u.controlIcon})),r.createElement("button",{type:"button",tabIndex:-1,"aria-label":Object(i.t)("Increase"),className:n,onClick:e.decreaseValue},r.createElement(l.a,{icon:c,className:u.controlIcon})))))}var d=n("8d0Q"),h=n("SpAO"),m=n("3F0O"),g=n("/3z9");n.d(t,"a",(function(){return S}));const b=[38],f=[40];function S(e){const[t,n]=Object(d.b)(),[a,i]=Object(h.a)(),l=Object(m.a)(i.onFocus,e.onFocus),c=Object(m.a)(i.onBlur,e.onBlur),u=Object(r.useCallback)((t=>{!e.disabled&&a&&(t.preventDefault(),t.deltaY<0?e.onValueByStepChange(1):e.onValueByStepChange(-1))}),[a,e.disabled,e.onValueByStepChange]);return o.a.createElement(s.a,Object.assign({},n,{name:e.name,pattern:e.pattern,borderStyle:e.borderStyle,fontSizeStyle:e.fontSizeStyle,value:e.value,className:e.className,inputClassName:e.inputClassName,button:function(){const{button:n,forceShowControls:r,disabled:s,title:i}=e,l=!s&&!Modernizr.mobiletouch&&(r||a||t);return s?void 0:o.a.createElement(o.a.Fragment,null,null!=n?n:o.a.createElement(p,{increaseValue:S,decreaseValue:v,defaultButtonsVisible:l,title:i}))}(),disabled:e.disabled,placeholder:e.placeholder,innerLabel:e.innerLabel,endSlot:e.endSlot,containerReference:e.containerReference,inputReference:e.inputReference,inputMode:e.inputMode,type:e.type,error:e.error,errorMessage:e.errorMessage,onClick:e.onClick,onFocus:l,onBlur:c,onChange:e.onValueChange,onKeyDown:function(t){if(e.disabled||0!==Object(g.modifiersFromEvent)(t.nativeEvent))return;let n=b,r=f;e.controlDecKeyCodes&&(r=r.concat(e.controlDecKeyCodes)),e.controlIncKeyCodes&&(n=n.concat(e.controlIncKeyCodes)),(r.includes(t.keyCode)||n.includes(t.keyCode))&&(t.preventDefault(),e.onValueByStepChange(r.includes(t.keyCode)?-1:1)),e.onKeyDown&&e.onKeyDown(t)},onWheelNoPassive:u,stretch:e.stretch,intent:e.intent,highlight:e.highlight,highlightRemoveRoundBorder:e.highlightRemoveRoundBorder}));function S(){e.disabled||e.onValueByStepChange(1)}function v(){e.disabled||e.onValueByStepChange(-1)}}},"ZgM/":function(e,t,n){e.exports={innerLabel:"innerLabel-21h1g6jU"}},uZsJ:function(e,t,n){e.exports={controlWrapper:"controlWrapper-7ApHzdB4",hidden:"hidden-7ApHzdB4",control:"control-7ApHzdB4",controlIncrease:"controlIncrease-7ApHzdB4",controlDecrease:"controlDecrease-7ApHzdB4",controlIcon:"controlIcon-7ApHzdB4",title:"title-7ApHzdB4"}},xx2B:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("q1tI"),o=n.n(r),s=(n("YFKU"),n("WboT")),a=n("m6W+"),i=n("zXvd"),l=n("nc0P"),c=n("Hr11");const u=window.t("Number format is invalid."),p=window.t("Specified value is less than the instrument minimum."),d=window.t("Specified value is more than the instrument maximum."),h=new a.a,m=/^-?[0-9]*$/,g=9e15;class b extends o.a.PureComponent{constructor(e){super(e),this._onFocus=e=>{this.setState({focused:!0}),this.props.onFocus&&this.props.onFocus(e)},this._onBlur=e=>{this.setState({displayValue:f(this.props,this.props.value),focused:!1}),this.props.errorHandler&&this.props.errorHandler(!1),this.props.onBlur&&this.props.onBlur(e)},this._onValueChange=e=>{const t=e.target.value;if(void 0!==this.props.onEmptyString&&""===t&&this.props.onEmptyString(),"integer"===this.props.mode&&!m.test(t))return;const n=S(t,this.props.formatter),r=n.res?this._checkValueBoundaries(n.value):{value:!1},o=n.res&&!r.value,s=n.res&&n.suggest&&!this.state.focused?n.suggest:t,a=o&&r.msg?r.msg:u;this.setState({displayValue:s,errorMsg:a}),n.res&&r.value&&this.props.onValueChange(n.value,"input"),this.props.errorHandler&&this.props.errorHandler(!n.res||o)},this._onValueByStepChange=e=>{const{roundByStep:t=!0,step:n=1,formatter:r}=this.props,o=S(this.state.displayValue,r);let s=n;if(o.res){const r=new l.Big(o.value),a=new l.Big(n),i=r.mod(a);let c=r.plus(e*n);!i.eq(0)&&t&&(c=c.plus((e>0?0:1)*n).minus(i)),s=Number(c)}this._checkValueBoundaries(s).value&&(this.setState({displayValue:f(this.props,s)}),this.props.onValueChange(s,"step")),this.props.errorHandler&&this.props.errorHandler(!1)};const{value:t}=e;this.state={value:t,displayValue:f(e,t),focused:!1,errorMsg:u}}render(){return o.a.createElement(s.a,{inputMode:this.props.inputMode,borderStyle:this.props.borderStyle,fontSizeStyle:this.props.fontSizeStyle,value:this.state.displayValue,forceShowControls:this.props.forceShowControls,className:this.props.className,inputClassName:this.props.inputClassName,button:this.props.button,placeholder:this.props.placeholder,innerLabel:this.props.innerLabel,endSlot:this.props.endSlot,disabled:this.props.disabled,error:this.props.error,errorMessage:this.props.errorMessage||this.state.errorMsg,onValueChange:this._onValueChange,onValueByStepChange:this._onValueByStepChange,containerReference:this.props.containerReference,inputReference:this.props.inputReference,onClick:this.props.onClick,onFocus:this._onFocus,onBlur:this._onBlur,onKeyDown:this.props.onKeyDown,controlDecKeyCodes:this.props.controlDecKeyCodes,controlIncKeyCodes:this.props.controlIncKeyCodes,title:this.props.title,intent:this.props.intent,highlight:this.props.highlight,highlightRemoveRoundBorder:this.props.highlightRemoveRoundBorder,stretch:this.props.stretch})}getClampedValue(){const{min:e=-1/0,max:t=g}=this.props,n=S(this.state.displayValue,this.props.formatter);return n.res?Object(c.clamp)(n.value,e,t):null}static getDerivedStateFromProps(e,t){const{alwaysUpdateValueFromProps:n,value:r}=e;return t.focused&&!n||t.value===r?null:{value:r,displayValue:f(e,r)}}_checkValueBoundaries(e){const{min:t=-1/0,max:n=g}=this.props,r=function(e,t,n){const r=e>=t,o=e<=n;return{passMin:r,passMax:o,pass:r&&o,clamped:Object(c.clamp)(e,t,n)}}(e,t,n),o=r.passMax?r.passMin?void 0:p:d;return{value:r.pass,msg:o}}}function f(e,t){const{useFormatter:n=!0,formatter:r,mode:o}=e;return n&&"integer"!==o?function(e,t=h){return null!==e?t.format(e):""}(t,r):function(e){return null===e?"":i.NumericFormatter.formatNoE(e)}(t)}function S(e,t=h){return t.parse?t.parse(e):{res:!1,error:"Formatter does not support parse"}}},zcN6:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("mrSG"),o=n("q1tI"),s=n("TSYQ"),a=n("ldG2"),i=n("xADF"),l=n("dKnb"),c=n("jh7f"),u=n("VET0"),p=n("ZgM/");const d={large:a.b.FontSizeLarge,medium:a.b.FontSizeMedium},h={attachment:u.a.top.attachment,targetAttachment:u.a.top.targetAttachment,attachmentOffsetY:-4};function m(e){const{className:t,inputClassName:n,stretch:a=!0,errorMessage:u,fontSizeStyle:m="large",endSlot:g,button:b,error:f,warning:S,innerLabel:v,inputReference:y,children:C}=e,B=Object(r.a)(e,["className","inputClassName","stretch","errorMessage","fontSizeStyle","endSlot","button","error","warning","innerLabel","inputReference","children"]),V=f&&void 0!==u?[u]:void 0,N=S&&void 0!==u?[u]:void 0,w=s(p.inputContainer,d[m],t),E=v?o.createElement(i.d,{className:p.innerLabel,interactive:!1},v):void 0,F=g||b||C?o.createElement(i.b,null,g,b,C):void 0;return o.createElement(l.a,Object.assign({},B,{className:w,inputClassName:n,errors:V,warnings:N,hasErrors:f,hasWarnings:S,messagesPosition:c.a.Attached,customErrorsAttachment:h,messagesRoot:"document",inheritMessagesWidthFromTarget:!0,disableMessagesRtlStyles:!0,iconHidden:!0,stretch:a,reference:y,startSlot:E,endSlot:F}))}}}]);