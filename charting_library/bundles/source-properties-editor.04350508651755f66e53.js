(window.webpackJsonp=window.webpackJsonp||[]).push([["source-properties-editor"],{"/yp2":function(e,t,n){"use strict";n.r(t),n.d(t,"getTemplates",(function(){return o})),n.d(t,"setTemplates",(function(){return s})),n.d(t,"addTemplate",(function(){return r})),n.d(t,"startRemoveTemplate",(function(){return i})),n.d(t,"removeTemplate",(function(){return c})),n.d(t,"saveTemplate",(function(){return l})),n.d(t,"loadTemplate",(function(){return u})),n.d(t,"applyDefaults",(function(){return d}));var a=n("7/Mh");function o(e,t){return{type:a.c,toolName:e,callback:t}}function s(e,t){return{type:a.g,templates:t,toolName:e}}function r(e,t){return{type:a.a,templateName:t,toolName:e}}function i(e,t){return{type:a.h,templateName:t,toolName:e}}function c(e,t){return{type:a.e,templateName:t,toolName:e}}function l(e,t,n){return{type:a.f,templateName:t,toolName:e,content:n}}function u(e,t,n){return{type:a.d,toolName:e,templateName:t,callback:n}}function d(e,t){return{type:a.b,model:e,source:t}}},"5VK0":function(e,t,n){e.exports={scrollWrap:"scrollWrap-1KEqJy8_",tabsWrap:"tabsWrap-1KEqJy8_",tabs:"tabs-1KEqJy8_",tab:"tab-1KEqJy8_",withHover:"withHover-1KEqJy8_",headerBottomSeparator:"headerBottomSeparator-1KEqJy8_"}},"5o6O":function(e,t,n){e.exports={tabs:"tabs-3I2ohC86",tab:"tab-3I2ohC86",noBorder:"noBorder-3I2ohC86",disabled:"disabled-3I2ohC86",active:"active-3I2ohC86",defaultCursor:"defaultCursor-3I2ohC86",slider:"slider-3I2ohC86",content:"content-3I2ohC86"}},"7/Mh":function(e,t,n){"use strict";function a(e){return"LINE_TOOL_TEMPLATE__"+e}n.d(t,"c",(function(){return o})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return r})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return d}));const o=a("GET_TEMPLATES"),s=a("SET_TEMPLATES"),r=a("START_REMOVE_TEMPLATE"),i=a("REMOVE_TEMPLATE"),c=a("SAVE_TEMPLATE"),l=a("ADD_TEMPLATE"),u=a("LOAD_TEMPLATE"),d=a("APPLY_DEFAULTS")},CbZh:function(e,t,n){"use strict";n.r(t),n("YFKU");var a=n("q1tI"),o=n.n(a),s=n("i8i4"),r=n("FQhm"),i=n("Eyy1"),c=(n("bSeV"),n("qFKp")),l=n("Vdly"),u=n.n(l),d=n("ycFu"),m=n("tWVy"),p=n("aDg1"),h=n("/MKj"),b=n("Iivm"),f=n("K+KL"),g=n("/KDZ"),_=(n("EsMY"),n("N5tr")),v=n("i/MG"),T=n("8d0Q"),C=n("lpmA");function y(e){const{name:t,onRemove:n,onClick:o}=e,[s,r]=Object(T.b)(),i=a.useCallback((()=>o(t)),[o,t]),c=a.useCallback((()=>{n&&n(t)}),[n,t]);return a.createElement("div",Object.assign({},r),a.createElement(_.b,{className:C.defaultsButtonItem,isActive:!1,label:t,onClick:i,toolbox:n&&a.createElement(v.a,{hidden:!Modernizr.mobiletouch&&!s,onClick:c})}))}var E=n("KKsp"),w=n("fZEr"),O=n("+EG+"),D=n("2uTr"),I=n("HWhk");function P(e){return e.isTabletWidth?o.a.createElement(b.a,{className:C.themesButtonIcon,icon:I}):o.a.createElement(o.a.Fragment,null,window.t("Template"))}var j=n("/yp2");const A=Object(h.connect)((function(e,t){const n=t.source.toolname;return{templates:e.templates[n]}}),(function(e){return{getTemplates:t=>e(Object(j.getTemplates)(t)),loadTemplate:(t,n,a)=>{e(Object(j.loadTemplate)(n.toolname,a,(e=>t.applyLineToolTemplate(n,e,window.t("Apply Drawing Template")))))},removeTemplate:(t,n)=>e(Object(j.startRemoveTemplate)(t,n)),saveTemplate:(t,n,a)=>e(Object(j.saveTemplate)(t,n,a)),applyDefaults:(t,n)=>e(Object(j.applyDefaults)(t,n))}}))((function(e){const{model:t,source:n,templates:s=[],getTemplates:r}=e,i=n.toolname;Object(a.useEffect)((()=>(e.templates||r(i),()=>{})),[i]);const c=Object(a.useContext)(O.b);return o.a.createElement(g.a,{rule:"screen and (max-width: 768px)"},(e=>o.a.createElement(f.a,{id:"footer-menu",className:!e&&C.themesButtonText,hideArrowButton:e,buttonChildren:o.a.createElement(P,{isTabletWidth:e})},o.a.createElement(y,{onClick:m,name:Object(D.appendEllipsis)(window.t("Save As"))}),o.a.createElement(y,{onClick:l,name:window.t("Apply Defaults")}),s.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,null),s.map((e=>o.a.createElement(y,{key:e,name:e,onRemove:u,onClick:d})))))));function l(){const{applyDefaults:a}=e;a(t,n)}function u(t){const{removeTemplate:n}=e;window.runOrSignIn((()=>{const e=window.t("Do you really want to delete Drawing Template '{name}' ?").format({name:t});Object(w.showConfirm)({text:e,onConfirm:({dialogClose:e})=>{n(i,t),e()}},c)}),{source:"Delete line tool template"})}function d(a){const{loadTemplate:o}=e;o(t,n,a)}function m(){window.runOrSignIn((()=>{Object(w.showRename)({title:window.t("Save Drawing Template As"),text:window.t("Template name")+":",maxLength:64,onRename:({newValue:e,focusInput:t,dialogClose:n,innerManager:a})=>{if(-1!==s.indexOf(e)){const o=window.t("Drawing Template '{name}' already exists. Do you really want to replace it?").format({name:e});Object(w.showConfirm)({text:o,onConfirm:({dialogClose:t})=>{p(e),t(),n()},onClose:t},a)}else p(e),n()}},c)}),{source:"Save line tool template",sourceMeta:"Chart"})}function p(t){const n=JSON.stringify(e.source.template());e.saveTemplate(i,t,n)}}));var N=n("LC+v");function S(e){const{model:t,source:n}=e;return o.a.createElement(g.a,{rule:"screen and (max-width: 768px)"},(e=>o.a.createElement(f.a,{className:!e&&C.themesButtonText,hideArrowButton:e,buttonChildren:e?o.a.createElement(b.a,{className:C.themesButtonIcon,icon:I}):window.t("Template")},o.a.createElement(y,{onClick:a,name:window.t("Apply Defaults")}))));function a(){t.restorePropertiesForSource(n)}}function x(e){return Object(c.onWidget)()?o.a.createElement(S,Object.assign({},e)):o.a.createElement(h.Provider,{store:N.store},o.a.createElement(A,Object.assign({},e)))}var B=n("tmL0"),k=n("CW80"),M=n("vHME"),L=n("3ClC"),R=n("qJq3"),K=n("Ss5c"),W=n("GVHu"),q=n("ybVX");const F={"Elliott Impulse Wave (12345)Degree":"normal","Elliott Triangle Wave (ABCDE)Degree":"normal","Elliott Triple Combo Wave (WXYXZ)Degree":"normal","Elliott Correction Wave (ABC)Degree":"normal","Elliott Double Combo Wave (WXY)Degree":"normal",BarsPatternMode:"normal",StudyInputSource:"normal"},V={TextText:"big",AnchoredTextText:"big",NoteText:"big",AnchoredNoteText:"big",CalloutText:"big",BalloonText:"big"};var J=n("Q+1u"),Y=n("bvfV");function H(e){return a.createElement(q.a.Provider,{value:V},a.createElement(q.b.Provider,{value:F},e.page&&a.createElement(J.a,{reference:e.pageRef,key:e.tableKey},e.page.definitions.value().map((e=>a.createElement(Y.a,{key:e.id,definition:e}))))))}var z=n("ttKw");class U extends a.PureComponent{constructor(e){super(e),this._activePageRef=a.createRef(),this._getActionPageById=e=>{if(!e)return;const{pages:t}=this.props;return t.find((t=>t.id.toLowerCase()===e.toLowerCase()))},this._onChangeActivePageDefinitions=()=>{this.setState({tableKey:Date.now()},(()=>{this._requestResize&&this._requestResize()}))},this._renderFooterLeft=()=>{const{source:e,model:t}=this.props;return Object(k.isLineTool)(e)?a.createElement(x,{source:e,model:t}):a.createElement(g.a,{rule:"screen and (max-width: 428px)"},(n=>Object(L.isStudy)(e)&&a.createElement(M.a,{model:t,source:e,mode:n?"compact":"normal"})))},this._subscribe=e=>{e&&e.definitions.subscribe(this._onChangeActivePageDefinitions)},this._unsubscribe=e=>{e&&e.definitions.unsubscribe(this._onChangeActivePageDefinitions)},this._getActiveTabSettingsName=()=>{const{source:e}=this.props;return e instanceof R.Series?"properties_dialog.active_tab.chart":e instanceof K.LineDataSource?"properties_dialog.active_tab.drawing":e instanceof W.Study?"properties_dialog.active_tab.study":""},this._handleSelectPage=e=>{const{activePageId:t}=this.state,n=this._getActionPageById(t),a=this._getActionPageById(e),o=this._getActiveTabSettingsName();t!==e&&(this._unsubscribe(n),o&&u.a.setValue(o,e),this._subscribe(a),this.setState({activePageId:e,tableKey:Date.now()},(()=>{this._requestResize&&this._requestResize(),this._focusActivePageFirstTextInput()})))},this._handleScroll=()=>{m.a.fire()},this._handleSubmit=()=>{this.props.onSubmit(),this._closePopupDialog()},this._closePopupDialog=()=>{window.lineToolPropertiesToolbar&&window.lineToolPropertiesToolbar.refresh(),this.props.onClose()};const{pages:t}=this.props;let n;if(this._getActionPageById(this.props.activePageId))n=Object(i.ensureDefined)(this.props.activePageId);else{const e=u.a.getValue(this._getActiveTabSettingsName(),""),a=this._getActionPageById(e);n=a?a.id:t[0].id}this.state={activePageId:n,tableKey:Date.now()},window.lineToolPropertiesToolbar&&window.lineToolPropertiesToolbar.hide()}componentDidMount(){const{activePageId:e}=this.state,t=this._getActionPageById(e);this._focusActivePageFirstTextInput(),this._subscribe(t)}componentWillUnmount(){const{activePageId:e}=this.props,t=this._getActionPageById(e);clearTimeout(this._timeout),this._unsubscribe(t)}render(){var e;const{source:t,onCancel:n}=this.props,{activePageId:o}=this.state,s=(null===(e=t.properties().title)||void 0===e?void 0:e.value())||t.title();return a.createElement(d.AdaptiveConfirmDialog,{dataName:"source-properties-editor",title:s,isOpened:!0,onSubmit:this._handleSubmit,onCancel:n,onClickOutside:this._handleSubmit,onClose:this._closePopupDialog,footerLeftRenderer:this._renderFooterLeft,render:this._renderChildren(o),submitOnEnterKey:!1})}_renderChildren(e){return({requestResize:t})=>{this._requestResize=t;const{pages:n}=this.props,o={allIds:n.map((e=>e.id)),byId:n.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t.id]:{title:t.title}})),{})},s=n.find((t=>t.id===e));return a.createElement(a.Fragment,null,a.createElement(p.a,{activeTabId:e,onSelect:this._handleSelectPage,tabs:o}),a.createElement(B.a,{className:z.scrollable,onScroll:this._handleScroll},a.createElement(H,{page:s,pageRef:this._activePageRef,tableKey:this.state.tableKey})))}}_focusActivePageFirstTextInput(){if(!c.CheckMobile.any()&&this._activePageRef.current){const e=this._activePageRef.current.querySelector("input[type=text],textarea");e&&(this._timeout=setTimeout((()=>{e.focus()}),0))}}}var Q=n("sQaR");n.d(t,"SourcePropertiesEditorRenderer",(function(){return X}));class X extends Q.a{constructor(e){super(),this._timeout=null,this._handleClose=()=>{s.unmountComponentAtNode(this._container),this._setVisibility(!1),this._onClose&&this._onClose(),this._subscription.unsubscribe(this,this._handleCollectionChanged)},this._handleSubmit=()=>{const e=this._source;Object(k.isLineTool)(e)&&e.hasAlert.value()&&setTimeout((()=>{e.localAndServerAlertsMismatch&&e.synchronizeAlert(!0)}))},this._handleCancel=()=>{this._model.undoToCheckpoint(this._checkpoint)},this._propertyPages=e.propertyPages,this._model=e.model,this._activePageId=e.activePageId,this._onClose=e.onClose,this._source=e.source,this._checkpoint=this._ensureCheckpoint(e.undoCheckPoint),this._subscription=this._model.model().dataSourceCollectionChanged(),this._subscription.subscribe(this,this._handleCollectionChanged)}hide(e){e?this._handleCancel():this._handleSubmit(),this._handleClose()}isVisible(){return this.visible().value()}show(){s.render(a.createElement(U,{source:this._source,onSubmit:this._handleSubmit,onClose:this._handleClose,onCancel:this._handleCancel,pages:this._propertyPages,model:this._model,activePageId:this._activePageId}),this._container),this._setVisibility(!0),r.emit("drawings_settings_dialog",{objectType:"drawing",scriptTitle:this._source.title()})}_handleCollectionChanged(){null===this._timeout&&(this._timeout=setTimeout((()=>{this._closeDialogIfSourceIsDeleted(),this._timeout=null})))}_closeDialogIfSourceIsDeleted(){null===this._model.model().dataSourceForId(this._source.id())&&this._handleClose()}_ensureCheckpoint(e){return void 0===e&&(e=this._model.createUndoCheckpoint()),e}}},K3s3:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return u}));var a=n("q1tI"),o=n("TSYQ"),s=n("Eyy1"),r=n("5o6O");const i=r;function c(e){const t=o(e.className,r.tab,{[r.active]:e.isActive,[r.disabled]:e.isDisabled,[r.defaultCursor]:!!e.shouldUseDefaultCursor,[r.noBorder]:!!e.noBorder});return a.createElement("div",{className:t,onClick:e.onClick,ref:e.reference},e.children)}function l(e){return class extends a.PureComponent{constructor(){super(...arguments),this.activeTab={current:null}}componentDidUpdate(){Object(s.ensureNotNull)(this._slider).style.transition="transform 350ms",this._componentDidUpdate()}componentDidMount(){this._componentDidUpdate()}render(){const{className:t}=this.props,n=this._generateTabs();return a.createElement("div",{className:o(t,r.tabs),"data-name":this.props["data-name"]},n,a.createElement(e,{reference:e=>{this._slider=e}}))}_generateTabs(){return this.activeTab.current=null,a.Children.map(this.props.children,(e=>{const t=e,n=Boolean(t.props.isActive),o={reference:e=>{n&&(this.activeTab.current=e),t.props.reference&&t.props.reference(e)}};return a.cloneElement(t,o)}))}_componentDidUpdate(){const e=Object(s.ensureNotNull)(this._slider).style;if(this.activeTab.current){const t=this.activeTab.current.offsetWidth,n=this.activeTab.current.offsetLeft;e.transform=`translateX(${n}px)`,e.width=t+"px",e.opacity="1"}else e.opacity="0"}}}const u=l((function(e){return a.createElement("div",{className:r.slider,ref:e.reference})}))},"LC+v":function(e,t,n){"use strict";n.r(t);var a=n("ANjH"),o=n("rRWa"),s=n("5rFJ"),r=n("7/Mh"),i=n("txPx"),c=n("/yp2");function l(e,t){return t}var u=n("zUrt");const d=Object(i.getLogger)("Chart.LineToolTemplatesList");function m(e,t){return t}function*p(){for(;;){const{toolName:e,templateName:t,content:n}=m(r.f,yield Object(s.g)(r.f));try{yield Object(s.b)(u.backend.saveDrawingTemplate,e,t,n),yield Object(s.e)(Object(c.addTemplate)(e,t))}catch(e){d.logWarn(e)}}}function*h(){for(;;){const{toolName:e,templateName:t}=m(r.h,yield Object(s.g)(r.h));try{yield Object(s.b)(u.backend.removeDrawingTemplate,e,t),yield Object(s.e)(Object(c.removeTemplate)(e,t))}catch(e){d.logWarn(e)}}}function*b(){for(;;){const{toolName:e,callback:t}=m(r.c,yield Object(s.g)(r.c));try{const n=l(u.backend.getDrawingTemplates,yield Object(s.b)(u.backend.getDrawingTemplates,e));yield Object(s.e)(Object(c.setTemplates)(e,n)),t&&t()}catch(e){d.logWarn(e)}}}function*f(){for(;;){const{toolName:e,templateName:t,callback:n}=m(r.d,yield Object(s.g)(r.d));try{const a=l(u.backend.loadDrawingTemplate,yield Object(s.b)(u.backend.loadDrawingTemplate,e,t));n&&n(a)}catch(e){d.logWarn(e)}}}function*g(){for(;;){const{model:e,source:t}=m(r.b,yield Object(s.g)(r.b));try{yield Object(s.b)([e,e.restorePropertiesForSource],t)}catch(e){d.logWarn(e)}}}function*_(){yield Object(s.a)([Object(s.b)(b),Object(s.b)(p),Object(s.b)(h),Object(s.b)(f),Object(s.b)(g)])}const v={templates:{}};function T(e,t){return e.localeCompare(t,void 0,{numeric:!0})}function C(e=v,t){switch(t.type){case r.a:{const{toolName:n,templateName:a}=t;if(!e.templates[n].includes(a)){const t=[...e.templates[n],a].sort(T);return Object.assign(Object.assign({},e),{templates:Object.assign(Object.assign({},e.templates),{[n]:t})})}return e}case r.g:{const{toolName:n,templates:a}=t;return Object.assign(Object.assign({},e),{templates:Object.assign(Object.assign({},e.templates),{[n]:[...a].sort(T)})})}case r.e:{const{toolName:n,templateName:a}=t;return Object.assign(Object.assign({},e),{templates:Object.assign(Object.assign({},e.templates),{[n]:e.templates[n].filter((e=>e!==a))})})}default:return e}}n.d(t,"store",(function(){return y}));const y=function(){const e=Object(o.b)(),t=Object(a.createStore)(C,Object(a.applyMiddleware)(e));return e.run(_),t}()},aDg1:function(e,t,n){"use strict";n("EsMY");var a=n("q1tI"),o=n("TSYQ"),s=n("K3s3"),r=n("nPPD"),i=n("dMmr");const c=Object(r.a)(s.a,i);var l=n("4Cm8"),u=n("5VK0");n.d(t,"a",(function(){return m}));const d=Object(s.d)((function(e){return a.createElement("div",{className:c.slider,ref:e.reference},a.createElement("div",{className:c.inner}))}));class m extends a.PureComponent{constructor(){super(...arguments),this._createClickHandler=e=>()=>{this.props.onSelect(e)}}render(){const e=this._generateDialogTabs();return a.createElement("div",{className:u.scrollWrap},a.createElement("div",{className:u.headerBottomSeparator}),a.createElement(l.a,{isVisibleFade:Modernizr.mobiletouch,isVisibleButtons:!Modernizr.mobiletouch,isVisibleScrollbar:!1},a.createElement("div",{className:u.tabsWrap},a.createElement(d,{className:u.tabs},e))))}_generateDialogTabs(){const{activeTabId:e,tabs:t}=this.props;return t.allIds.map((n=>{const r=e===n;return a.createElement(s.b,{key:n,className:o(u.tab,!r&&u.withHover),isActive:r,onClick:this._createClickHandler(n)},t.byId[n].title)}))}}},dMmr:function(e,t,n){e.exports={slider:"slider-3RfwXbxu",inner:"inner-3RfwXbxu"}},lpmA:function(e,t,n){e.exports={themesButtonText:"themesButtonText-3JA3MxY8",themesButtonIcon:"themesButtonIcon-3JA3MxY8",defaultsButtonText:"defaultsButtonText-3JA3MxY8",defaultsButtonItem:"defaultsButtonItem-3JA3MxY8"}},ttKw:function(e,t,n){e.exports={scrollable:"scrollable-2w4-r8AL"}},vHME:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("q1tI"),o=n("TSYQ"),s=n.n(o),r=(n("YFKU"),n("Iivm")),i=n("K+KL"),c=n("N5tr"),l=n("HWhk"),u=n("wt3x");const d={reset:window.t("Reset Settings"),saveAsDefault:window.t("Save As Default"),defaults:window.t("Defaults")};class m extends a.PureComponent{constructor(){super(...arguments),this._handleResetToDefaults=()=>{this.props.model.restorePropertiesForSource(this.props.source)},this._handleSaveAsDefaults=()=>{this.props.source.properties().saveDefaults()}}render(){const{mode:e}=this.props;return a.createElement(i.a,{id:"study-defaults-manager",className:s()("normal"===e&&u.defaultsButtonText),hideArrowButton:"compact"===e,buttonChildren:this._getPlaceHolderItem("compact"===e)},a.createElement(c.b,{className:u.defaultsButtonItem,isActive:!1,label:d.reset,onClick:this._handleResetToDefaults}),a.createElement(c.b,{className:u.defaultsButtonItem,isActive:!1,label:d.saveAsDefault,onClick:this._handleSaveAsDefaults}))}_getPlaceHolderItem(e){return e?a.createElement(r.a,{className:u.defaultsButtonIcon,icon:l}):d.defaults}}},wt3x:function(e,t,n){e.exports={defaultsButtonText:"defaultsButtonText-3mn75BN0",defaultsButtonItem:"defaultsButtonItem-3mn75BN0",defaultsButtonIcon:"defaultsButtonIcon-3mn75BN0"}}}]);