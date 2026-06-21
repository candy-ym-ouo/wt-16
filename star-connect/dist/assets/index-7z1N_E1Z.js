var Uv=Object.defineProperty;var Iv=(t,e,n)=>e in t?Uv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Vf=(t,e,n)=>Iv(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Nm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lm={exports:{}},Xl={},Dm={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=Symbol.for("react.element"),Fv=Symbol.for("react.portal"),Ov=Symbol.for("react.fragment"),kv=Symbol.for("react.strict_mode"),zv=Symbol.for("react.profiler"),Bv=Symbol.for("react.provider"),Hv=Symbol.for("react.context"),Vv=Symbol.for("react.forward_ref"),Gv=Symbol.for("react.suspense"),jv=Symbol.for("react.memo"),Wv=Symbol.for("react.lazy"),Gf=Symbol.iterator;function Xv(t){return t===null||typeof t!="object"?null:(t=Gf&&t[Gf]||t["@@iterator"],typeof t=="function"?t:null)}var Um={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Im=Object.assign,Fm={};function Hs(t,e,n){this.props=t,this.context=e,this.refs=Fm,this.updater=n||Um}Hs.prototype.isReactComponent={};Hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Om(){}Om.prototype=Hs.prototype;function Ld(t,e,n){this.props=t,this.context=e,this.refs=Fm,this.updater=n||Um}var Dd=Ld.prototype=new Om;Dd.constructor=Ld;Im(Dd,Hs.prototype);Dd.isPureReactComponent=!0;var jf=Array.isArray,km=Object.prototype.hasOwnProperty,Ud={current:null},zm={key:!0,ref:!0,__self:!0,__source:!0};function Bm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)km.call(e,i)&&!zm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Va,type:t,key:s,ref:a,props:r,_owner:Ud.current}}function $v(t,e){return{$$typeof:Va,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Id(t){return typeof t=="object"&&t!==null&&t.$$typeof===Va}function Yv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wf=/\/+/g;function _c(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Yv(""+t.key):e.toString(36)}function Ko(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Va:case Fv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+_c(a,0):i,jf(r)?(n="",t!=null&&(n=t.replace(Wf,"$&/")+"/"),Ko(r,e,n,"",function(c){return c})):r!=null&&(Id(r)&&(r=$v(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Wf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",jf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+_c(s,o);a+=Ko(s,e,n,l,r)}else if(l=Xv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+_c(s,o++),a+=Ko(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function eo(t,e,n){if(t==null)return t;var i=[],r=0;return Ko(t,i,"","",function(s){return e.call(n,s,r++)}),i}function qv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},Zo={transition:null},Kv={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:Zo,ReactCurrentOwner:Ud};function Hm(){throw Error("act(...) is not supported in production builds of React.")}ke.Children={map:eo,forEach:function(t,e,n){eo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return eo(t,function(){e++}),e},toArray:function(t){return eo(t,function(e){return e})||[]},only:function(t){if(!Id(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=Hs;ke.Fragment=Ov;ke.Profiler=zv;ke.PureComponent=Ld;ke.StrictMode=kv;ke.Suspense=Gv;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kv;ke.act=Hm;ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Im({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Ud.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)km.call(e,l)&&!zm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Va,type:t.type,key:r,ref:s,props:i,_owner:a}};ke.createContext=function(t){return t={$$typeof:Hv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Bv,_context:t},t.Consumer=t};ke.createElement=Bm;ke.createFactory=function(t){var e=Bm.bind(null,t);return e.type=t,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:Vv,render:t}};ke.isValidElement=Id;ke.lazy=function(t){return{$$typeof:Wv,_payload:{_status:-1,_result:t},_init:qv}};ke.memo=function(t,e){return{$$typeof:jv,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=Zo.transition;Zo.transition={};try{t()}finally{Zo.transition=e}};ke.unstable_act=Hm;ke.useCallback=function(t,e){return Zt.current.useCallback(t,e)};ke.useContext=function(t){return Zt.current.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};ke.useEffect=function(t,e){return Zt.current.useEffect(t,e)};ke.useId=function(){return Zt.current.useId()};ke.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return Zt.current.useMemo(t,e)};ke.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};ke.useRef=function(t){return Zt.current.useRef(t)};ke.useState=function(t){return Zt.current.useState(t)};ke.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return Zt.current.useTransition()};ke.version="18.3.1";Dm.exports=ke;var Ke=Dm.exports;const Vm=Nm(Ke);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv=Ke,Qv=Symbol.for("react.element"),Jv=Symbol.for("react.fragment"),ex=Object.prototype.hasOwnProperty,tx=Zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nx={key:!0,ref:!0,__self:!0,__source:!0};function Gm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)ex.call(e,i)&&!nx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Qv,type:t,key:s,ref:a,props:r,_owner:tx.current}}Xl.Fragment=Jv;Xl.jsx=Gm;Xl.jsxs=Gm;Lm.exports=Xl;var p=Lm.exports,Cu={},jm={exports:{}},gn={},Wm={exports:{}},Xm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,X){var Z=L.length;L.push(X);e:for(;0<Z;){var ae=Z-1>>>1,_e=L[ae];if(0<r(_e,X))L[ae]=X,L[Z]=_e,Z=ae;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var X=L[0],Z=L.pop();if(Z!==X){L[0]=Z;e:for(var ae=0,_e=L.length,Ge=_e>>>1;ae<Ge;){var Y=2*(ae+1)-1,ne=L[Y],fe=Y+1,oe=L[fe];if(0>r(ne,Z))fe<_e&&0>r(oe,ne)?(L[ae]=oe,L[fe]=Z,ae=fe):(L[ae]=ne,L[Y]=Z,ae=Y);else if(fe<_e&&0>r(oe,Z))L[ae]=oe,L[fe]=Z,ae=fe;else break e}}return X}function r(L,X){var Z=L.sortIndex-X.sortIndex;return Z!==0?Z:L.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,h=null,d=3,g=!1,y=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=L)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function M(L){if(_=!1,x(L),!y)if(n(l)!==null)y=!0,V(R);else{var X=n(c);X!==null&&$(M,X.startTime-L)}}function R(L,X){y=!1,_&&(_=!1,u(N),N=-1),g=!0;var Z=d;try{for(x(X),h=n(l);h!==null&&(!(h.expirationTime>X)||L&&!D());){var ae=h.callback;if(typeof ae=="function"){h.callback=null,d=h.priorityLevel;var _e=ae(h.expirationTime<=X);X=t.unstable_now(),typeof _e=="function"?h.callback=_e:h===n(l)&&i(l),x(X)}else i(l);h=n(l)}if(h!==null)var Ge=!0;else{var Y=n(c);Y!==null&&$(M,Y.startTime-X),Ge=!1}return Ge}finally{h=null,d=Z,g=!1}}var C=!1,b=null,N=-1,T=5,S=-1;function D(){return!(t.unstable_now()-S<T)}function O(){if(b!==null){var L=t.unstable_now();S=L;var X=!0;try{X=b(!0,L)}finally{X?k():(C=!1,b=null)}}else C=!1}var k;if(typeof v=="function")k=function(){v(O)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,H=P.port2;P.port1.onmessage=O,k=function(){H.postMessage(null)}}else k=function(){m(O,0)};function V(L){b=L,C||(C=!0,k())}function $(L,X){N=m(function(){L(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,V(R))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var X=3;break;default:X=d}var Z=d;d=X;try{return L()}finally{d=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,X){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=d;d=L;try{return X()}finally{d=Z}},t.unstable_scheduleCallback=function(L,X,Z){var ae=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ae+Z:ae):Z=ae,L){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=Z+_e,L={id:f++,callback:X,priorityLevel:L,startTime:Z,expirationTime:_e,sortIndex:-1},Z>ae?(L.sortIndex=Z,e(c,L),n(l)===null&&L===n(c)&&(_?(u(N),N=-1):_=!0,$(M,Z-ae))):(L.sortIndex=_e,e(l,L),y||g||(y=!0,V(R))),L},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(L){var X=d;return function(){var Z=d;d=X;try{return L.apply(this,arguments)}finally{d=Z}}}})(Xm);Wm.exports=Xm;var ix=Wm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rx=Ke,pn=ix;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $m=new Set,wa={};function Pr(t,e){bs(t,e),bs(t+"Capture",e)}function bs(t,e){for(wa[t]=e,t=0;t<e.length;t++)$m.add(e[t])}var pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=Object.prototype.hasOwnProperty,sx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xf={},$f={};function ax(t){return Au.call($f,t)?!0:Au.call(Xf,t)?!1:sx.test(t)?$f[t]=!0:(Xf[t]=!0,!1)}function ox(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function lx(t,e,n,i){if(e===null||typeof e>"u"||ox(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fd=/[\-:]([a-z])/g;function Od(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fd,Od);Ft[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fd,Od);Ft[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fd,Od);Ft[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function kd(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(lx(e,n,r,i)&&(n=null),i||r===null?ax(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var _i=rx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,to=Symbol.for("react.element"),ns=Symbol.for("react.portal"),is=Symbol.for("react.fragment"),zd=Symbol.for("react.strict_mode"),Ru=Symbol.for("react.profiler"),Ym=Symbol.for("react.provider"),qm=Symbol.for("react.context"),Bd=Symbol.for("react.forward_ref"),Pu=Symbol.for("react.suspense"),Nu=Symbol.for("react.suspense_list"),Hd=Symbol.for("react.memo"),Ai=Symbol.for("react.lazy"),Km=Symbol.for("react.offscreen"),Yf=Symbol.iterator;function Xs(t){return t===null||typeof t!="object"?null:(t=Yf&&t[Yf]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,yc;function ca(t){if(yc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yc=e&&e[1]||""}return`
`+yc+t}var Sc=!1;function Mc(t,e){if(!t||Sc)return"";Sc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Sc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ca(t):""}function cx(t){switch(t.tag){case 5:return ca(t.type);case 16:return ca("Lazy");case 13:return ca("Suspense");case 19:return ca("SuspenseList");case 0:case 2:case 15:return t=Mc(t.type,!1),t;case 11:return t=Mc(t.type.render,!1),t;case 1:return t=Mc(t.type,!0),t;default:return""}}function Lu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case is:return"Fragment";case ns:return"Portal";case Ru:return"Profiler";case zd:return"StrictMode";case Pu:return"Suspense";case Nu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qm:return(t.displayName||"Context")+".Consumer";case Ym:return(t._context.displayName||"Context")+".Provider";case Bd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hd:return e=t.displayName||null,e!==null?e:Lu(t.type)||"Memo";case Ai:e=t._payload,t=t._init;try{return Lu(t(e))}catch{}}return null}function ux(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lu(e);case 8:return e===zd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $i(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dx(t){var e=Zm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function no(t){t._valueTracker||(t._valueTracker=dx(t))}function Qm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Zm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Du(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=$i(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jm(t,e){e=e.checked,e!=null&&kd(t,"checked",e,!1)}function Uu(t,e){Jm(t,e);var n=$i(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Iu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Iu(t,e.type,$i(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Iu(t,e,n){(e!=="number"||dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ua=Array.isArray;function gs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+$i(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Fu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(ua(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$i(n)}}function eg(t,e){var n=$i(e.value),i=$i(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Qf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function tg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ou(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?tg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var io,ng=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(io=io||document.createElement("div"),io.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=io.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ta(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fx=["Webkit","ms","Moz","O"];Object.keys(ma).forEach(function(t){fx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ma[e]=ma[t]})});function ig(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ma.hasOwnProperty(t)&&ma[t]?(""+e).trim():e+"px"}function rg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ig(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var hx=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ku(t,e){if(e){if(hx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function zu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bu=null;function Vd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hu=null,vs=null,xs=null;function Jf(t){if(t=Wa(t)){if(typeof Hu!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Zl(e),Hu(t.stateNode,t.type,e))}}function sg(t){vs?xs?xs.push(t):xs=[t]:vs=t}function ag(){if(vs){var t=vs,e=xs;if(xs=vs=null,Jf(t),e)for(t=0;t<e.length;t++)Jf(e[t])}}function og(t,e){return t(e)}function lg(){}var Ec=!1;function cg(t,e,n){if(Ec)return t(e,n);Ec=!0;try{return og(t,e,n)}finally{Ec=!1,(vs!==null||xs!==null)&&(lg(),ag())}}function ba(t,e){var n=t.stateNode;if(n===null)return null;var i=Zl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Vu=!1;if(pi)try{var $s={};Object.defineProperty($s,"passive",{get:function(){Vu=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{Vu=!1}function px(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var ga=!1,fl=null,hl=!1,Gu=null,mx={onError:function(t){ga=!0,fl=t}};function gx(t,e,n,i,r,s,a,o,l){ga=!1,fl=null,px.apply(mx,arguments)}function vx(t,e,n,i,r,s,a,o,l){if(gx.apply(this,arguments),ga){if(ga){var c=fl;ga=!1,fl=null}else throw Error(te(198));hl||(hl=!0,Gu=c)}}function Nr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ug(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function eh(t){if(Nr(t)!==t)throw Error(te(188))}function xx(t){var e=t.alternate;if(!e){if(e=Nr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return eh(r),t;if(s===i)return eh(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function dg(t){return t=xx(t),t!==null?fg(t):null}function fg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=fg(t);if(e!==null)return e;t=t.sibling}return null}var hg=pn.unstable_scheduleCallback,th=pn.unstable_cancelCallback,_x=pn.unstable_shouldYield,yx=pn.unstable_requestPaint,_t=pn.unstable_now,Sx=pn.unstable_getCurrentPriorityLevel,Gd=pn.unstable_ImmediatePriority,pg=pn.unstable_UserBlockingPriority,pl=pn.unstable_NormalPriority,Mx=pn.unstable_LowPriority,mg=pn.unstable_IdlePriority,$l=null,Qn=null;function Ex(t){if(Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot($l,t,void 0,(t.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:bx,wx=Math.log,Tx=Math.LN2;function bx(t){return t>>>=0,t===0?32:31-(wx(t)/Tx|0)|0}var ro=64,so=4194304;function da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=da(o):(s&=a,s!==0&&(i=da(s)))}else a=n&~r,a!==0?i=da(a):s!==0&&(i=da(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-kn(e),r=1<<n,i|=t[n],e&=~r;return i}function Cx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ax(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-kn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Cx(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function ju(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gg(){var t=ro;return ro<<=1,!(ro&4194240)&&(ro=64),t}function wc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kn(e),t[e]=n}function Rx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-kn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function jd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function vg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xg,Wd,_g,yg,Sg,Wu=!1,ao=[],Fi=null,Oi=null,ki=null,Ca=new Map,Aa=new Map,Pi=[],Px="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nh(t,e){switch(t){case"focusin":case"focusout":Fi=null;break;case"dragenter":case"dragleave":Oi=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":Ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(e.pointerId)}}function Ys(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Wa(e),e!==null&&Wd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Nx(t,e,n,i,r){switch(e){case"focusin":return Fi=Ys(Fi,t,e,n,i,r),!0;case"dragenter":return Oi=Ys(Oi,t,e,n,i,r),!0;case"mouseover":return ki=Ys(ki,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ca.set(s,Ys(Ca.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Aa.set(s,Ys(Aa.get(s)||null,t,e,n,i,r)),!0}return!1}function Mg(t){var e=gr(t.target);if(e!==null){var n=Nr(e);if(n!==null){if(e=n.tag,e===13){if(e=ug(n),e!==null){t.blockedOn=e,Sg(t.priority,function(){_g(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Bu=i,n.target.dispatchEvent(i),Bu=null}else return e=Wa(n),e!==null&&Wd(e),t.blockedOn=n,!1;e.shift()}return!0}function ih(t,e,n){Qo(t)&&n.delete(e)}function Lx(){Wu=!1,Fi!==null&&Qo(Fi)&&(Fi=null),Oi!==null&&Qo(Oi)&&(Oi=null),ki!==null&&Qo(ki)&&(ki=null),Ca.forEach(ih),Aa.forEach(ih)}function qs(t,e){t.blockedOn===e&&(t.blockedOn=null,Wu||(Wu=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,Lx)))}function Ra(t){function e(r){return qs(r,t)}if(0<ao.length){qs(ao[0],t);for(var n=1;n<ao.length;n++){var i=ao[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Fi!==null&&qs(Fi,t),Oi!==null&&qs(Oi,t),ki!==null&&qs(ki,t),Ca.forEach(e),Aa.forEach(e),n=0;n<Pi.length;n++)i=Pi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Pi.length&&(n=Pi[0],n.blockedOn===null);)Mg(n),n.blockedOn===null&&Pi.shift()}var _s=_i.ReactCurrentBatchConfig,gl=!0;function Dx(t,e,n,i){var r=Je,s=_s.transition;_s.transition=null;try{Je=1,Xd(t,e,n,i)}finally{Je=r,_s.transition=s}}function Ux(t,e,n,i){var r=Je,s=_s.transition;_s.transition=null;try{Je=4,Xd(t,e,n,i)}finally{Je=r,_s.transition=s}}function Xd(t,e,n,i){if(gl){var r=Xu(t,e,n,i);if(r===null)Uc(t,e,i,vl,n),nh(t,i);else if(Nx(r,t,e,n,i))i.stopPropagation();else if(nh(t,i),e&4&&-1<Px.indexOf(t)){for(;r!==null;){var s=Wa(r);if(s!==null&&xg(s),s=Xu(t,e,n,i),s===null&&Uc(t,e,i,vl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Uc(t,e,i,null,n)}}var vl=null;function Xu(t,e,n,i){if(vl=null,t=Vd(i),t=gr(t),t!==null)if(e=Nr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ug(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vl=t,null}function Eg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sx()){case Gd:return 1;case pg:return 4;case pl:case Mx:return 16;case mg:return 536870912;default:return 16}default:return 16}}var Di=null,$d=null,Jo=null;function wg(){if(Jo)return Jo;var t,e=$d,n=e.length,i,r="value"in Di?Di.value:Di.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Jo=r.slice(t,1<i?1-i:void 0)}function el(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oo(){return!0}function rh(){return!1}function vn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oo:rh,this.isPropagationStopped=rh,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),e}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yd=vn(Vs),ja=ht({},Vs,{view:0,detail:0}),Ix=vn(ja),Tc,bc,Ks,Yl=ht({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ks&&(Ks&&t.type==="mousemove"?(Tc=t.screenX-Ks.screenX,bc=t.screenY-Ks.screenY):bc=Tc=0,Ks=t),Tc)},movementY:function(t){return"movementY"in t?t.movementY:bc}}),sh=vn(Yl),Fx=ht({},Yl,{dataTransfer:0}),Ox=vn(Fx),kx=ht({},ja,{relatedTarget:0}),Cc=vn(kx),zx=ht({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),Bx=vn(zx),Hx=ht({},Vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Vx=vn(Hx),Gx=ht({},Vs,{data:0}),ah=vn(Gx),jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $x(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Xx[t])?!!e[t]:!1}function qd(){return $x}var Yx=ht({},ja,{key:function(t){if(t.key){var e=jx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=el(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qd,charCode:function(t){return t.type==="keypress"?el(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?el(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qx=vn(Yx),Kx=ht({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oh=vn(Kx),Zx=ht({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qd}),Qx=vn(Zx),Jx=ht({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),e_=vn(Jx),t_=ht({},Yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),n_=vn(t_),i_=[9,13,27,32],Kd=pi&&"CompositionEvent"in window,va=null;pi&&"documentMode"in document&&(va=document.documentMode);var r_=pi&&"TextEvent"in window&&!va,Tg=pi&&(!Kd||va&&8<va&&11>=va),lh=" ",ch=!1;function bg(t,e){switch(t){case"keyup":return i_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function s_(t,e){switch(t){case"compositionend":return Cg(e);case"keypress":return e.which!==32?null:(ch=!0,lh);case"textInput":return t=e.data,t===lh&&ch?null:t;default:return null}}function a_(t,e){if(rs)return t==="compositionend"||!Kd&&bg(t,e)?(t=wg(),Jo=$d=Di=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tg&&e.locale!=="ko"?null:e.data;default:return null}}var o_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!o_[t.type]:e==="textarea"}function Ag(t,e,n,i){sg(i),e=xl(e,"onChange"),0<e.length&&(n=new Yd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var xa=null,Pa=null;function l_(t){zg(t,0)}function ql(t){var e=os(t);if(Qm(e))return t}function c_(t,e){if(t==="change")return e}var Rg=!1;if(pi){var Ac;if(pi){var Rc="oninput"in document;if(!Rc){var dh=document.createElement("div");dh.setAttribute("oninput","return;"),Rc=typeof dh.oninput=="function"}Ac=Rc}else Ac=!1;Rg=Ac&&(!document.documentMode||9<document.documentMode)}function fh(){xa&&(xa.detachEvent("onpropertychange",Pg),Pa=xa=null)}function Pg(t){if(t.propertyName==="value"&&ql(Pa)){var e=[];Ag(e,Pa,t,Vd(t)),cg(l_,e)}}function u_(t,e,n){t==="focusin"?(fh(),xa=e,Pa=n,xa.attachEvent("onpropertychange",Pg)):t==="focusout"&&fh()}function d_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ql(Pa)}function f_(t,e){if(t==="click")return ql(e)}function h_(t,e){if(t==="input"||t==="change")return ql(e)}function p_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:p_;function Na(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Au.call(e,r)||!Hn(t[r],e[r]))return!1}return!0}function hh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ph(t,e){var n=hh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hh(n)}}function Ng(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ng(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lg(){for(var t=window,e=dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dl(t.document)}return e}function Zd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function m_(t){var e=Lg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ng(n.ownerDocument.documentElement,n)){if(i!==null&&Zd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ph(n,s);var a=ph(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var g_=pi&&"documentMode"in document&&11>=document.documentMode,ss=null,$u=null,_a=null,Yu=!1;function mh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yu||ss==null||ss!==dl(i)||(i=ss,"selectionStart"in i&&Zd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_a&&Na(_a,i)||(_a=i,i=xl($u,"onSelect"),0<i.length&&(e=new Yd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ss)))}function lo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var as={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},Pc={},Dg={};pi&&(Dg=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function Kl(t){if(Pc[t])return Pc[t];if(!as[t])return t;var e=as[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Dg)return Pc[t]=e[n];return t}var Ug=Kl("animationend"),Ig=Kl("animationiteration"),Fg=Kl("animationstart"),Og=Kl("transitionend"),kg=new Map,gh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,e){kg.set(t,e),Pr(e,[t])}for(var Nc=0;Nc<gh.length;Nc++){var Lc=gh[Nc],v_=Lc.toLowerCase(),x_=Lc[0].toUpperCase()+Lc.slice(1);Qi(v_,"on"+x_)}Qi(Ug,"onAnimationEnd");Qi(Ig,"onAnimationIteration");Qi(Fg,"onAnimationStart");Qi("dblclick","onDoubleClick");Qi("focusin","onFocus");Qi("focusout","onBlur");Qi(Og,"onTransitionEnd");bs("onMouseEnter",["mouseout","mouseover"]);bs("onMouseLeave",["mouseout","mouseover"]);bs("onPointerEnter",["pointerout","pointerover"]);bs("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),__=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function vh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,vx(i,e,void 0,t),t.currentTarget=null}function zg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;vh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;vh(r,o,c),s=l}}}if(hl)throw t=Gu,hl=!1,Gu=null,t}function rt(t,e){var n=e[Ju];n===void 0&&(n=e[Ju]=new Set);var i=t+"__bubble";n.has(i)||(Bg(e,t,2,!1),n.add(i))}function Dc(t,e,n){var i=0;e&&(i|=4),Bg(n,t,i,e)}var co="_reactListening"+Math.random().toString(36).slice(2);function La(t){if(!t[co]){t[co]=!0,$m.forEach(function(n){n!=="selectionchange"&&(__.has(n)||Dc(n,!1,t),Dc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[co]||(e[co]=!0,Dc("selectionchange",!1,e))}}function Bg(t,e,n,i){switch(Eg(e)){case 1:var r=Dx;break;case 4:r=Ux;break;default:r=Xd}n=r.bind(null,e,n,t),r=void 0,!Vu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Uc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=gr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}cg(function(){var c=s,f=Vd(n),h=[];e:{var d=kg.get(t);if(d!==void 0){var g=Yd,y=t;switch(t){case"keypress":if(el(n)===0)break e;case"keydown":case"keyup":g=qx;break;case"focusin":y="focus",g=Cc;break;case"focusout":y="blur",g=Cc;break;case"beforeblur":case"afterblur":g=Cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Ox;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Qx;break;case Ug:case Ig:case Fg:g=Bx;break;case Og:g=e_;break;case"scroll":g=Ix;break;case"wheel":g=n_;break;case"copy":case"cut":case"paste":g=Vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=oh}var _=(e&4)!==0,m=!_&&t==="scroll",u=_?d!==null?d+"Capture":null:d;_=[];for(var v=c,x;v!==null;){x=v;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,u!==null&&(M=ba(v,u),M!=null&&_.push(Da(v,M,x)))),m)break;v=v.return}0<_.length&&(d=new g(d,y,null,n,f),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Bu&&(y=n.relatedTarget||n.fromElement)&&(gr(y)||y[mi]))break e;if((g||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?gr(y):null,y!==null&&(m=Nr(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(_=sh,M="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=oh,M="onPointerLeave",u="onPointerEnter",v="pointer"),m=g==null?d:os(g),x=y==null?d:os(y),d=new _(M,v+"leave",g,n,f),d.target=m,d.relatedTarget=x,M=null,gr(f)===c&&(_=new _(u,v+"enter",y,n,f),_.target=x,_.relatedTarget=m,M=_),m=M,g&&y)t:{for(_=g,u=y,v=0,x=_;x;x=Dr(x))v++;for(x=0,M=u;M;M=Dr(M))x++;for(;0<v-x;)_=Dr(_),v--;for(;0<x-v;)u=Dr(u),x--;for(;v--;){if(_===u||u!==null&&_===u.alternate)break t;_=Dr(_),u=Dr(u)}_=null}else _=null;g!==null&&xh(h,d,g,_,!1),y!==null&&m!==null&&xh(h,m,y,_,!0)}}e:{if(d=c?os(c):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var R=c_;else if(uh(d))if(Rg)R=h_;else{R=d_;var C=u_}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=f_);if(R&&(R=R(t,c))){Ag(h,R,n,f);break e}C&&C(t,d,c),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Iu(d,"number",d.value)}switch(C=c?os(c):window,t){case"focusin":(uh(C)||C.contentEditable==="true")&&(ss=C,$u=c,_a=null);break;case"focusout":_a=$u=ss=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,mh(h,n,f);break;case"selectionchange":if(g_)break;case"keydown":case"keyup":mh(h,n,f)}var b;if(Kd)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else rs?bg(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Tg&&n.locale!=="ko"&&(rs||N!=="onCompositionStart"?N==="onCompositionEnd"&&rs&&(b=wg()):(Di=f,$d="value"in Di?Di.value:Di.textContent,rs=!0)),C=xl(c,N),0<C.length&&(N=new ah(N,t,null,n,f),h.push({event:N,listeners:C}),b?N.data=b:(b=Cg(n),b!==null&&(N.data=b)))),(b=r_?s_(t,n):a_(t,n))&&(c=xl(c,"onBeforeInput"),0<c.length&&(f=new ah("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=b))}zg(h,e)})}function Da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ba(t,n),s!=null&&i.unshift(Da(t,s,r)),s=ba(t,e),s!=null&&i.push(Da(t,s,r))),t=t.return}return i}function Dr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ba(n,s),l!=null&&a.unshift(Da(n,l,o))):r||(l=ba(n,s),l!=null&&a.push(Da(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var y_=/\r\n?/g,S_=/\u0000|\uFFFD/g;function _h(t){return(typeof t=="string"?t:""+t).replace(y_,`
`).replace(S_,"")}function uo(t,e,n){if(e=_h(e),_h(t)!==e&&n)throw Error(te(425))}function _l(){}var qu=null,Ku=null;function Zu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qu=typeof setTimeout=="function"?setTimeout:void 0,M_=typeof clearTimeout=="function"?clearTimeout:void 0,yh=typeof Promise=="function"?Promise:void 0,E_=typeof queueMicrotask=="function"?queueMicrotask:typeof yh<"u"?function(t){return yh.resolve(null).then(t).catch(w_)}:Qu;function w_(t){setTimeout(function(){throw t})}function Ic(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ra(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ra(e)}function zi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Gs=Math.random().toString(36).slice(2),$n="__reactFiber$"+Gs,Ua="__reactProps$"+Gs,mi="__reactContainer$"+Gs,Ju="__reactEvents$"+Gs,T_="__reactListeners$"+Gs,b_="__reactHandles$"+Gs;function gr(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mi]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sh(t);t!==null;){if(n=t[$n])return n;t=Sh(t)}return e}t=n,n=t.parentNode}return null}function Wa(t){return t=t[$n]||t[mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Zl(t){return t[Ua]||null}var ed=[],ls=-1;function Ji(t){return{current:t}}function at(t){0>ls||(t.current=ed[ls],ed[ls]=null,ls--)}function it(t,e){ls++,ed[ls]=t.current,t.current=e}var Yi={},jt=Ji(Yi),nn=Ji(!1),Er=Yi;function Cs(t,e){var n=t.type.contextTypes;if(!n)return Yi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function rn(t){return t=t.childContextTypes,t!=null}function yl(){at(nn),at(jt)}function Mh(t,e,n){if(jt.current!==Yi)throw Error(te(168));it(jt,e),it(nn,n)}function Hg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,ux(t)||"Unknown",r));return ht({},n,i)}function Sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yi,Er=jt.current,it(jt,t),it(nn,nn.current),!0}function Eh(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=Hg(t,e,Er),i.__reactInternalMemoizedMergedChildContext=t,at(nn),at(jt),it(jt,t)):at(nn),it(nn,n)}var li=null,Ql=!1,Fc=!1;function Vg(t){li===null?li=[t]:li.push(t)}function C_(t){Ql=!0,Vg(t)}function er(){if(!Fc&&li!==null){Fc=!0;var t=0,e=Je;try{var n=li;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}li=null,Ql=!1}catch(r){throw li!==null&&(li=li.slice(t+1)),hg(Gd,er),r}finally{Je=e,Fc=!1}}return null}var cs=[],us=0,Ml=null,El=0,yn=[],Sn=0,wr=null,ui=1,di="";function ur(t,e){cs[us++]=El,cs[us++]=Ml,Ml=t,El=e}function Gg(t,e,n){yn[Sn++]=ui,yn[Sn++]=di,yn[Sn++]=wr,wr=t;var i=ui;t=di;var r=32-kn(i)-1;i&=~(1<<r),n+=1;var s=32-kn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ui=1<<32-kn(e)+r|n<<r|i,di=s+t}else ui=1<<s|n<<r|i,di=t}function Qd(t){t.return!==null&&(ur(t,1),Gg(t,1,0))}function Jd(t){for(;t===Ml;)Ml=cs[--us],cs[us]=null,El=cs[--us],cs[us]=null;for(;t===wr;)wr=yn[--Sn],yn[Sn]=null,di=yn[--Sn],yn[Sn]=null,ui=yn[--Sn],yn[Sn]=null}var hn=null,fn=null,lt=!1,In=null;function jg(t,e){var n=En(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,fn=zi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=wr!==null?{id:ui,overflow:di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=En(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,fn=null,!0):!1;default:return!1}}function td(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nd(t){if(lt){var e=fn;if(e){var n=e;if(!wh(t,e)){if(td(t))throw Error(te(418));e=zi(n.nextSibling);var i=hn;e&&wh(t,e)?jg(i,n):(t.flags=t.flags&-4097|2,lt=!1,hn=t)}}else{if(td(t))throw Error(te(418));t.flags=t.flags&-4097|2,lt=!1,hn=t}}}function Th(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function fo(t){if(t!==hn)return!1;if(!lt)return Th(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zu(t.type,t.memoizedProps)),e&&(e=fn)){if(td(t))throw Wg(),Error(te(418));for(;e;)jg(t,e),e=zi(e.nextSibling)}if(Th(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=zi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=hn?zi(t.stateNode.nextSibling):null;return!0}function Wg(){for(var t=fn;t;)t=zi(t.nextSibling)}function As(){fn=hn=null,lt=!1}function ef(t){In===null?In=[t]:In.push(t)}var A_=_i.ReactCurrentBatchConfig;function Zs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function ho(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bh(t){var e=t._init;return e(t._payload)}function Xg(t){function e(u,v){if(t){var x=u.deletions;x===null?(u.deletions=[v],u.flags|=16):x.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Gi(u,v),u.index=0,u.sibling=null,u}function s(u,v,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<v?(u.flags|=2,v):x):(u.flags|=2,v)):(u.flags|=1048576,v)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,v,x,M){return v===null||v.tag!==6?(v=Gc(x,u.mode,M),v.return=u,v):(v=r(v,x),v.return=u,v)}function l(u,v,x,M){var R=x.type;return R===is?f(u,v,x.props.children,M,x.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ai&&bh(R)===v.type)?(M=r(v,x.props),M.ref=Zs(u,v,x),M.return=u,M):(M=ol(x.type,x.key,x.props,null,u.mode,M),M.ref=Zs(u,v,x),M.return=u,M)}function c(u,v,x,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=jc(x,u.mode,M),v.return=u,v):(v=r(v,x.children||[]),v.return=u,v)}function f(u,v,x,M,R){return v===null||v.tag!==7?(v=Mr(x,u.mode,M,R),v.return=u,v):(v=r(v,x),v.return=u,v)}function h(u,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Gc(""+v,u.mode,x),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case to:return x=ol(v.type,v.key,v.props,null,u.mode,x),x.ref=Zs(u,null,v),x.return=u,x;case ns:return v=jc(v,u.mode,x),v.return=u,v;case Ai:var M=v._init;return h(u,M(v._payload),x)}if(ua(v)||Xs(v))return v=Mr(v,u.mode,x,null),v.return=u,v;ho(u,v)}return null}function d(u,v,x,M){var R=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return R!==null?null:o(u,v,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case to:return x.key===R?l(u,v,x,M):null;case ns:return x.key===R?c(u,v,x,M):null;case Ai:return R=x._init,d(u,v,R(x._payload),M)}if(ua(x)||Xs(x))return R!==null?null:f(u,v,x,M,null);ho(u,x)}return null}function g(u,v,x,M,R){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(x)||null,o(v,u,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case to:return u=u.get(M.key===null?x:M.key)||null,l(v,u,M,R);case ns:return u=u.get(M.key===null?x:M.key)||null,c(v,u,M,R);case Ai:var C=M._init;return g(u,v,x,C(M._payload),R)}if(ua(M)||Xs(M))return u=u.get(x)||null,f(v,u,M,R,null);ho(v,M)}return null}function y(u,v,x,M){for(var R=null,C=null,b=v,N=v=0,T=null;b!==null&&N<x.length;N++){b.index>N?(T=b,b=null):T=b.sibling;var S=d(u,b,x[N],M);if(S===null){b===null&&(b=T);break}t&&b&&S.alternate===null&&e(u,b),v=s(S,v,N),C===null?R=S:C.sibling=S,C=S,b=T}if(N===x.length)return n(u,b),lt&&ur(u,N),R;if(b===null){for(;N<x.length;N++)b=h(u,x[N],M),b!==null&&(v=s(b,v,N),C===null?R=b:C.sibling=b,C=b);return lt&&ur(u,N),R}for(b=i(u,b);N<x.length;N++)T=g(b,u,N,x[N],M),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?N:T.key),v=s(T,v,N),C===null?R=T:C.sibling=T,C=T);return t&&b.forEach(function(D){return e(u,D)}),lt&&ur(u,N),R}function _(u,v,x,M){var R=Xs(x);if(typeof R!="function")throw Error(te(150));if(x=R.call(x),x==null)throw Error(te(151));for(var C=R=null,b=v,N=v=0,T=null,S=x.next();b!==null&&!S.done;N++,S=x.next()){b.index>N?(T=b,b=null):T=b.sibling;var D=d(u,b,S.value,M);if(D===null){b===null&&(b=T);break}t&&b&&D.alternate===null&&e(u,b),v=s(D,v,N),C===null?R=D:C.sibling=D,C=D,b=T}if(S.done)return n(u,b),lt&&ur(u,N),R;if(b===null){for(;!S.done;N++,S=x.next())S=h(u,S.value,M),S!==null&&(v=s(S,v,N),C===null?R=S:C.sibling=S,C=S);return lt&&ur(u,N),R}for(b=i(u,b);!S.done;N++,S=x.next())S=g(b,u,N,S.value,M),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?N:S.key),v=s(S,v,N),C===null?R=S:C.sibling=S,C=S);return t&&b.forEach(function(O){return e(u,O)}),lt&&ur(u,N),R}function m(u,v,x,M){if(typeof x=="object"&&x!==null&&x.type===is&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case to:e:{for(var R=x.key,C=v;C!==null;){if(C.key===R){if(R=x.type,R===is){if(C.tag===7){n(u,C.sibling),v=r(C,x.props.children),v.return=u,u=v;break e}}else if(C.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ai&&bh(R)===C.type){n(u,C.sibling),v=r(C,x.props),v.ref=Zs(u,C,x),v.return=u,u=v;break e}n(u,C);break}else e(u,C);C=C.sibling}x.type===is?(v=Mr(x.props.children,u.mode,M,x.key),v.return=u,u=v):(M=ol(x.type,x.key,x.props,null,u.mode,M),M.ref=Zs(u,v,x),M.return=u,u=M)}return a(u);case ns:e:{for(C=x.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(u,v.sibling),v=r(v,x.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=jc(x,u.mode,M),v.return=u,u=v}return a(u);case Ai:return C=x._init,m(u,v,C(x._payload),M)}if(ua(x))return y(u,v,x,M);if(Xs(x))return _(u,v,x,M);ho(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,x),v.return=u,u=v):(n(u,v),v=Gc(x,u.mode,M),v.return=u,u=v),a(u)):n(u,v)}return m}var Rs=Xg(!0),$g=Xg(!1),wl=Ji(null),Tl=null,ds=null,tf=null;function nf(){tf=ds=Tl=null}function rf(t){var e=wl.current;at(wl),t._currentValue=e}function id(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){Tl=t,tf=ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function bn(t){var e=t._currentValue;if(tf!==t)if(t={context:t,memoizedValue:e,next:null},ds===null){if(Tl===null)throw Error(te(308));ds=t,Tl.dependencies={lanes:0,firstContext:t}}else ds=ds.next=t;return e}var vr=null;function sf(t){vr===null?vr=[t]:vr.push(t)}function Yg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,sf(e)):(n.next=r.next,r.next=n),e.interleaved=n,gi(t,i)}function gi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ri=!1;function af(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,gi(t,n)}return r=i.interleaved,r===null?(e.next=e,sf(i)):(e.next=r.next,r.next=e),i.interleaved=e,gi(t,n)}function tl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,jd(t,n)}}function Ch(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bl(t,e,n,i){var r=t.updateQueue;Ri=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,f=c=l=null,o=s;do{var d=o.lane,g=o.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=t,_=o;switch(d=e,g=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(g,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,d=typeof y=="function"?y.call(g,h,d):y,d==null)break e;h=ht({},h,d);break e;case 2:Ri=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else g={eventTime:g,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=g,l=h):f=f.next=g,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);br|=a,t.lanes=a,t.memoizedState=h}}function Ah(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Xa={},Jn=Ji(Xa),Ia=Ji(Xa),Fa=Ji(Xa);function xr(t){if(t===Xa)throw Error(te(174));return t}function of(t,e){switch(it(Fa,e),it(Ia,t),it(Jn,Xa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ou(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ou(e,t)}at(Jn),it(Jn,e)}function Ps(){at(Jn),at(Ia),at(Fa)}function Kg(t){xr(Fa.current);var e=xr(Jn.current),n=Ou(e,t.type);e!==n&&(it(Ia,t),it(Jn,n))}function lf(t){Ia.current===t&&(at(Jn),at(Ia))}var ut=Ji(0);function Cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Oc=[];function cf(){for(var t=0;t<Oc.length;t++)Oc[t]._workInProgressVersionPrimary=null;Oc.length=0}var nl=_i.ReactCurrentDispatcher,kc=_i.ReactCurrentBatchConfig,Tr=0,dt=null,Et=null,Pt=null,Al=!1,ya=!1,Oa=0,R_=0;function Ot(){throw Error(te(321))}function uf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function df(t,e,n,i,r,s){if(Tr=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nl.current=t===null||t.memoizedState===null?D_:U_,t=n(i,r),ya){s=0;do{if(ya=!1,Oa=0,25<=s)throw Error(te(301));s+=1,Pt=Et=null,e.updateQueue=null,nl.current=I_,t=n(i,r)}while(ya)}if(nl.current=Rl,e=Et!==null&&Et.next!==null,Tr=0,Pt=Et=dt=null,Al=!1,e)throw Error(te(300));return t}function ff(){var t=Oa!==0;return Oa=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?dt.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function Cn(){if(Et===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Pt===null?dt.memoizedState:Pt.next;if(e!==null)Pt=e,Et=t;else{if(t===null)throw Error(te(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Pt===null?dt.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function ka(t,e){return typeof e=="function"?e(t):e}function zc(t){var e=Cn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=Et,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((Tr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,dt.lanes|=f,br|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Hn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,br|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bc(t){var e=Cn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Hn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Zg(){}function Qg(t,e){var n=dt,i=Cn(),r=e(),s=!Hn(i.memoizedState,r);if(s&&(i.memoizedState=r,tn=!0),i=i.queue,hf(t0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,za(9,e0.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(te(349));Tr&30||Jg(n,e,r)}return r}function Jg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function e0(t,e,n,i){e.value=n,e.getSnapshot=i,n0(e)&&i0(t)}function t0(t,e,n){return n(function(){n0(e)&&i0(t)})}function n0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function i0(t){var e=gi(t,1);e!==null&&zn(e,t,1,-1)}function Rh(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:t},e.queue=t,t=t.dispatch=L_.bind(null,dt,t),[e.memoizedState,t]}function za(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function r0(){return Cn().memoizedState}function il(t,e,n,i){var r=Wn();dt.flags|=t,r.memoizedState=za(1|e,n,void 0,i===void 0?null:i)}function Jl(t,e,n,i){var r=Cn();i=i===void 0?null:i;var s=void 0;if(Et!==null){var a=Et.memoizedState;if(s=a.destroy,i!==null&&uf(i,a.deps)){r.memoizedState=za(e,n,s,i);return}}dt.flags|=t,r.memoizedState=za(1|e,n,s,i)}function Ph(t,e){return il(8390656,8,t,e)}function hf(t,e){return Jl(2048,8,t,e)}function s0(t,e){return Jl(4,2,t,e)}function a0(t,e){return Jl(4,4,t,e)}function o0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function l0(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4,4,o0.bind(null,e,t),n)}function pf(){}function c0(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&uf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function u0(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&uf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function d0(t,e,n){return Tr&21?(Hn(n,e)||(n=gg(),dt.lanes|=n,br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function P_(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=kc.transition;kc.transition={};try{t(!1),e()}finally{Je=n,kc.transition=i}}function f0(){return Cn().memoizedState}function N_(t,e,n){var i=Vi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},h0(t))p0(e,n);else if(n=Yg(t,e,n,i),n!==null){var r=qt();zn(n,t,i,r),m0(n,e,i)}}function L_(t,e,n){var i=Vi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(h0(t))p0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Hn(o,a)){var l=e.interleaved;l===null?(r.next=r,sf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Yg(t,e,r,i),n!==null&&(r=qt(),zn(n,t,i,r),m0(n,e,i))}}function h0(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function p0(t,e){ya=Al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function m0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,jd(t,n)}}var Rl={readContext:bn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},D_={readContext:bn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:bn,useEffect:Ph,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,il(4194308,4,o0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return il(4194308,4,t,e)},useInsertionEffect:function(t,e){return il(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Wn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=N_.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:Rh,useDebugValue:pf,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=Rh(!1),e=t[0];return t=P_.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=Wn();if(lt){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Nt===null)throw Error(te(349));Tr&30||Jg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ph(t0.bind(null,i,s,t),[t]),i.flags|=2048,za(9,e0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=Nt.identifierPrefix;if(lt){var n=di,i=ui;n=(i&~(1<<32-kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=R_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},U_={readContext:bn,useCallback:c0,useContext:bn,useEffect:hf,useImperativeHandle:l0,useInsertionEffect:s0,useLayoutEffect:a0,useMemo:u0,useReducer:zc,useRef:r0,useState:function(){return zc(ka)},useDebugValue:pf,useDeferredValue:function(t){var e=Cn();return d0(e,Et.memoizedState,t)},useTransition:function(){var t=zc(ka)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:Zg,useSyncExternalStore:Qg,useId:f0,unstable_isNewReconciler:!1},I_={readContext:bn,useCallback:c0,useContext:bn,useEffect:hf,useImperativeHandle:l0,useInsertionEffect:s0,useLayoutEffect:a0,useMemo:u0,useReducer:Bc,useRef:r0,useState:function(){return Bc(ka)},useDebugValue:pf,useDeferredValue:function(t){var e=Cn();return Et===null?e.memoizedState=t:d0(e,Et.memoizedState,t)},useTransition:function(){var t=Bc(ka)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:Zg,useSyncExternalStore:Qg,useId:f0,unstable_isNewReconciler:!1};function Ln(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ec={isMounted:function(t){return(t=t._reactInternals)?Nr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Vi(t),s=hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(zn(e,t,r,i),tl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Vi(t),s=hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(zn(e,t,r,i),tl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=Vi(t),r=hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Bi(t,r,i),e!==null&&(zn(e,t,i,n),tl(e,t,i))}};function Nh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Na(n,i)||!Na(r,s):!0}function g0(t,e,n){var i=!1,r=Yi,s=e.contextType;return typeof s=="object"&&s!==null?s=bn(s):(r=rn(e)?Er:jt.current,i=e.contextTypes,s=(i=i!=null)?Cs(t,r):Yi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ec,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Lh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ec.enqueueReplaceState(e,e.state,null)}function sd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},af(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=bn(s):(s=rn(e)?Er:jt.current,r.context=Cs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ec.enqueueReplaceState(r,r.state,null),bl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ns(t,e){try{var n="",i=e;do n+=cx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Hc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ad(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var F_=typeof WeakMap=="function"?WeakMap:Map;function v0(t,e,n){n=hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Nl||(Nl=!0,gd=i),ad(t,e)},n}function x0(t,e,n){n=hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ad(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ad(t,e),typeof i!="function"&&(Hi===null?Hi=new Set([this]):Hi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Dh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new F_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=K_.bind(null,t,e,n),e.then(t,t))}function Uh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ih(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hi(-1,1),e.tag=2,Bi(n,e,1))),n.lanes|=1),t)}var O_=_i.ReactCurrentOwner,tn=!1;function Yt(t,e,n,i){e.child=t===null?$g(e,null,n,i):Rs(e,t.child,n,i)}function Fh(t,e,n,i,r){n=n.render;var s=e.ref;return ys(e,r),i=df(t,e,n,i,s,r),n=ff(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(lt&&n&&Qd(e),e.flags|=1,Yt(t,e,i,r),e.child)}function Oh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Mf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_0(t,e,s,i,r)):(t=ol(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Na,n(a,i)&&t.ref===e.ref)return vi(t,e,r)}return e.flags|=1,t=Gi(s,i),t.ref=e.ref,t.return=e,e.child=t}function _0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Na(s,i)&&t.ref===e.ref)if(tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,vi(t,e,r)}return od(t,e,n,i,r)}function y0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(hs,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(hs,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(hs,dn),dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(hs,dn),dn|=i;return Yt(t,e,r,n),e.child}function S0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function od(t,e,n,i,r){var s=rn(n)?Er:jt.current;return s=Cs(e,s),ys(e,r),n=df(t,e,n,i,s,r),i=ff(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(lt&&i&&Qd(e),e.flags|=1,Yt(t,e,n,r),e.child)}function kh(t,e,n,i,r){if(rn(n)){var s=!0;Sl(e)}else s=!1;if(ys(e,r),e.stateNode===null)rl(t,e),g0(e,n,i),sd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=bn(c):(c=rn(n)?Er:jt.current,c=Cs(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Lh(e,a,i,c),Ri=!1;var d=e.memoizedState;a.state=d,bl(e,i,a,r),l=e.memoizedState,o!==i||d!==l||nn.current||Ri?(typeof f=="function"&&(rd(e,n,f,i),l=e.memoizedState),(o=Ri||Nh(e,n,o,i,d,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,qg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Ln(e.type,o),a.props=c,h=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=bn(l):(l=rn(n)?Er:jt.current,l=Cs(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&Lh(e,a,i,l),Ri=!1,d=e.memoizedState,a.state=d,bl(e,i,a,r);var y=e.memoizedState;o!==h||d!==y||nn.current||Ri?(typeof g=="function"&&(rd(e,n,g,i),y=e.memoizedState),(c=Ri||Nh(e,n,c,i,d,y,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,y,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),a.props=i,a.state=y,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return ld(t,e,n,i,s,r)}function ld(t,e,n,i,r,s){S0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Eh(e,n,!1),vi(t,e,s);i=e.stateNode,O_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Rs(e,t.child,null,s),e.child=Rs(e,null,o,s)):Yt(t,e,o,s),e.memoizedState=i.state,r&&Eh(e,n,!0),e.child}function M0(t){var e=t.stateNode;e.pendingContext?Mh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mh(t,e.context,!1),of(t,e.containerInfo)}function zh(t,e,n,i,r){return As(),ef(r),e.flags|=256,Yt(t,e,n,i),e.child}var cd={dehydrated:null,treeContext:null,retryLane:0};function ud(t){return{baseLanes:t,cachePool:null,transitions:null}}function E0(t,e,n){var i=e.pendingProps,r=ut.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(ut,r&1),t===null)return nd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ic(a,i,0,null),t=Mr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ud(n),e.memoizedState=cd,t):mf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return k_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Gi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Gi(o,s):(s=Mr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?ud(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=cd,i}return s=t.child,t=s.sibling,i=Gi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function mf(t,e){return e=ic({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function po(t,e,n,i){return i!==null&&ef(i),Rs(e,t.child,null,n),t=mf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function k_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Hc(Error(te(422))),po(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ic({mode:"visible",children:i.children},r,0,null),s=Mr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Rs(e,t.child,null,a),e.child.memoizedState=ud(a),e.memoizedState=cd,s);if(!(e.mode&1))return po(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(te(419)),i=Hc(s,i,void 0),po(t,e,a,i)}if(o=(a&t.childLanes)!==0,tn||o){if(i=Nt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,gi(t,r),zn(i,t,r,-1))}return Sf(),i=Hc(Error(te(421))),po(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Z_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,fn=zi(r.nextSibling),hn=e,lt=!0,In=null,t!==null&&(yn[Sn++]=ui,yn[Sn++]=di,yn[Sn++]=wr,ui=t.id,di=t.overflow,wr=e),e=mf(e,i.children),e.flags|=4096,e)}function Bh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),id(t.return,e,n)}function Vc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function w0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Yt(t,e,i.children,n),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bh(t,n,e);else if(t.tag===19)Bh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Cl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Vc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Cl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Vc(e,!0,n,null,s);break;case"together":Vc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Gi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function z_(t,e,n){switch(e.tag){case 3:M0(e),As();break;case 5:Kg(e);break;case 1:rn(e.type)&&Sl(e);break;case 4:of(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?E0(t,e,n):(it(ut,ut.current&1),t=vi(t,e,n),t!==null?t.sibling:null);it(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return w0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,y0(t,e,n)}return vi(t,e,n)}var T0,dd,b0,C0;T0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dd=function(){};b0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,xr(Jn.current);var s=null;switch(n){case"input":r=Du(t,r),i=Du(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=Fu(t,r),i=Fu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=_l)}ku(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(wa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(wa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&rt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};C0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Qs(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function B_(t,e,n){var i=e.pendingProps;switch(Jd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return rn(e.type)&&yl(),kt(e),null;case 3:return i=e.stateNode,Ps(),at(nn),at(jt),cf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(fo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(_d(In),In=null))),dd(t,e),kt(e),null;case 5:lf(e);var r=xr(Fa.current);if(n=e.type,t!==null&&e.stateNode!=null)b0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return kt(e),null}if(t=xr(Jn.current),fo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[$n]=e,i[Ua]=s,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<fa.length;r++)rt(fa[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":qf(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":Zf(i,s),rt("invalid",i)}ku(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&uo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&uo(i.textContent,o,t),r=["children",""+o]):wa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&rt("scroll",i)}switch(n){case"input":no(i),Kf(i,s,!0);break;case"textarea":no(i),Qf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=_l)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=tg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[$n]=e,t[Ua]=i,T0(t,e,!1,!1),e.stateNode=t;e:{switch(a=zu(n,i),n){case"dialog":rt("cancel",t),rt("close",t),r=i;break;case"iframe":case"object":case"embed":rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<fa.length;r++)rt(fa[r],t);r=i;break;case"source":rt("error",t),r=i;break;case"img":case"image":case"link":rt("error",t),rt("load",t),r=i;break;case"details":rt("toggle",t),r=i;break;case"input":qf(t,i),r=Du(t,i),rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),rt("invalid",t);break;case"textarea":Zf(t,i),r=Fu(t,i),rt("invalid",t);break;default:r=i}ku(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?rg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ng(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ta(t,l):typeof l=="number"&&Ta(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rt("scroll",t):l!=null&&kd(t,s,l,a))}switch(n){case"input":no(t),Kf(t,i,!1);break;case"textarea":no(t),Qf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+$i(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?gs(t,!!i.multiple,s,!1):i.defaultValue!=null&&gs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=_l)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)C0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=xr(Fa.current),xr(Jn.current),fo(e)){if(i=e.stateNode,n=e.memoizedProps,i[$n]=e,(s=i.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:uo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&uo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return kt(e),null;case 13:if(at(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&fn!==null&&e.mode&1&&!(e.flags&128))Wg(),As(),e.flags|=98560,s=!1;else if(s=fo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[$n]=e}else As(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else In!==null&&(_d(In),In=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?wt===0&&(wt=3):Sf())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return Ps(),dd(t,e),t===null&&La(e.stateNode.containerInfo),kt(e),null;case 10:return rf(e.type._context),kt(e),null;case 17:return rn(e.type)&&yl(),kt(e),null;case 19:if(at(ut),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Qs(s,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Cl(t),a!==null){for(e.flags|=128,Qs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(ut,ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>Ls&&(e.flags|=128,i=!0,Qs(s,!1),e.lanes=4194304)}else{if(!i)if(t=Cl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!lt)return kt(e),null}else 2*_t()-s.renderingStartTime>Ls&&n!==1073741824&&(e.flags|=128,i=!0,Qs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=ut.current,it(ut,i?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return yf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function H_(t,e){switch(Jd(e),e.tag){case 1:return rn(e.type)&&yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ps(),at(nn),at(jt),cf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return lf(e),null;case 13:if(at(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));As()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(ut),null;case 4:return Ps(),null;case 10:return rf(e.type._context),null;case 22:case 23:return yf(),null;case 24:return null;default:return null}}var mo=!1,Ht=!1,V_=typeof WeakSet=="function"?WeakSet:Set,me=null;function fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function fd(t,e,n){try{n()}catch(i){gt(t,e,i)}}var Hh=!1;function G_(t,e){if(qu=gl,t=Lg(),Zd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++f===i&&(l=a),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ku={focusedElem:t,selectionRange:n},gl=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,m=y.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:Ln(e.type,_),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(M){gt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return y=Hh,Hh=!1,y}function Sa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&fd(e,n,s)}r=r.next}while(r!==i)}}function tc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function hd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function A0(t){var e=t.alternate;e!==null&&(t.alternate=null,A0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[Ua],delete e[Ju],delete e[T_],delete e[b_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function R0(t){return t.tag===5||t.tag===3||t.tag===4}function Vh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||R0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_l));else if(i!==4&&(t=t.child,t!==null))for(pd(t,e,n),t=t.sibling;t!==null;)pd(t,e,n),t=t.sibling}function md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(md(t,e,n),t=t.sibling;t!==null;)md(t,e,n),t=t.sibling}var Lt=null,Dn=!1;function Si(t,e,n){for(n=n.child;n!==null;)P0(t,e,n),n=n.sibling}function P0(t,e,n){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount($l,n)}catch{}switch(n.tag){case 5:Ht||fs(n,e);case 6:var i=Lt,r=Dn;Lt=null,Si(t,e,n),Lt=i,Dn=r,Lt!==null&&(Dn?(t=Lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Lt.removeChild(n.stateNode));break;case 18:Lt!==null&&(Dn?(t=Lt,n=n.stateNode,t.nodeType===8?Ic(t.parentNode,n):t.nodeType===1&&Ic(t,n),Ra(t)):Ic(Lt,n.stateNode));break;case 4:i=Lt,r=Dn,Lt=n.stateNode.containerInfo,Dn=!0,Si(t,e,n),Lt=i,Dn=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&fd(n,e,a),r=r.next}while(r!==i)}Si(t,e,n);break;case 1:if(!Ht&&(fs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){gt(n,e,o)}Si(t,e,n);break;case 21:Si(t,e,n);break;case 22:n.mode&1?(Ht=(i=Ht)||n.memoizedState!==null,Si(t,e,n),Ht=i):Si(t,e,n);break;default:Si(t,e,n)}}function Gh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new V_),e.forEach(function(i){var r=Q_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function An(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Lt=o.stateNode,Dn=!1;break e;case 3:Lt=o.stateNode.containerInfo,Dn=!0;break e;case 4:Lt=o.stateNode.containerInfo,Dn=!0;break e}o=o.return}if(Lt===null)throw Error(te(160));P0(s,a,r),Lt=null,Dn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){gt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)N0(e,t),e=e.sibling}function N0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(An(e,t),jn(t),i&4){try{Sa(3,t,t.return),tc(3,t)}catch(_){gt(t,t.return,_)}try{Sa(5,t,t.return)}catch(_){gt(t,t.return,_)}}break;case 1:An(e,t),jn(t),i&512&&n!==null&&fs(n,n.return);break;case 5:if(An(e,t),jn(t),i&512&&n!==null&&fs(n,n.return),t.flags&32){var r=t.stateNode;try{Ta(r,"")}catch(_){gt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Jm(r,s),zu(o,a);var c=zu(o,s);for(a=0;a<l.length;a+=2){var f=l[a],h=l[a+1];f==="style"?rg(r,h):f==="dangerouslySetInnerHTML"?ng(r,h):f==="children"?Ta(r,h):kd(r,f,h,c)}switch(o){case"input":Uu(r,s);break;case"textarea":eg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?gs(r,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?gs(r,!!s.multiple,s.defaultValue,!0):gs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ua]=s}catch(_){gt(t,t.return,_)}}break;case 6:if(An(e,t),jn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){gt(t,t.return,_)}}break;case 3:if(An(e,t),jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ra(e.containerInfo)}catch(_){gt(t,t.return,_)}break;case 4:An(e,t),jn(t);break;case 13:An(e,t),jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(xf=_t())),i&4&&Gh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(c=Ht)||f,An(e,t),Ht=c):An(e,t),jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(me=t,f=t.child;f!==null;){for(h=me=f;me!==null;){switch(d=me,g=d.child,d.tag){case 0:case 11:case 14:case 15:Sa(4,d,d.return);break;case 1:fs(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){gt(i,n,_)}}break;case 5:fs(d,d.return);break;case 22:if(d.memoizedState!==null){Wh(h);continue}}g!==null?(g.return=d,me=g):Wh(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=ig("display",a))}catch(_){gt(t,t.return,_)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(_){gt(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:An(e,t),jn(t),i&4&&Gh(t);break;case 21:break;default:An(e,t),jn(t)}}function jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(R0(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ta(r,""),i.flags&=-33);var s=Vh(t);md(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Vh(t);pd(t,o,a);break;default:throw Error(te(161))}}catch(l){gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function j_(t,e,n){me=t,L0(t)}function L0(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||mo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Ht;o=mo;var c=Ht;if(mo=a,(Ht=l)&&!c)for(me=r;me!==null;)a=me,l=a.child,a.tag===22&&a.memoizedState!==null?Xh(r):l!==null?(l.return=a,me=l):Xh(r);for(;s!==null;)me=s,L0(s),s=s.sibling;me=r,mo=o,Ht=c}jh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):jh(t)}}function jh(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||tc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ht)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ah(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ah(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Ra(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Ht||e.flags&512&&hd(e)}catch(d){gt(e,e.return,d)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function Wh(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function Xh(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tc(4,e)}catch(l){gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gt(e,r,l)}}var s=e.return;try{hd(e)}catch(l){gt(e,s,l)}break;case 5:var a=e.return;try{hd(e)}catch(l){gt(e,a,l)}}}catch(l){gt(e,e.return,l)}if(e===t){me=null;break}var o=e.sibling;if(o!==null){o.return=e.return,me=o;break}me=e.return}}var W_=Math.ceil,Pl=_i.ReactCurrentDispatcher,gf=_i.ReactCurrentOwner,Tn=_i.ReactCurrentBatchConfig,We=0,Nt=null,Mt=null,It=0,dn=0,hs=Ji(0),wt=0,Ba=null,br=0,nc=0,vf=0,Ma=null,Jt=null,xf=0,Ls=1/0,oi=null,Nl=!1,gd=null,Hi=null,go=!1,Ui=null,Ll=0,Ea=0,vd=null,sl=-1,al=0;function qt(){return We&6?_t():sl!==-1?sl:sl=_t()}function Vi(t){return t.mode&1?We&2&&It!==0?It&-It:A_.transition!==null?(al===0&&(al=gg()),al):(t=Je,t!==0||(t=window.event,t=t===void 0?16:Eg(t.type)),t):1}function zn(t,e,n,i){if(50<Ea)throw Ea=0,vd=null,Error(te(185));Ga(t,n,i),(!(We&2)||t!==Nt)&&(t===Nt&&(!(We&2)&&(nc|=n),wt===4&&Ni(t,It)),sn(t,i),n===1&&We===0&&!(e.mode&1)&&(Ls=_t()+500,Ql&&er()))}function sn(t,e){var n=t.callbackNode;Ax(t,e);var i=ml(t,t===Nt?It:0);if(i===0)n!==null&&th(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&th(n),e===1)t.tag===0?C_($h.bind(null,t)):Vg($h.bind(null,t)),E_(function(){!(We&6)&&er()}),n=null;else{switch(vg(i)){case 1:n=Gd;break;case 4:n=pg;break;case 16:n=pl;break;case 536870912:n=mg;break;default:n=pl}n=B0(n,D0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function D0(t,e){if(sl=-1,al=0,We&6)throw Error(te(327));var n=t.callbackNode;if(Ss()&&t.callbackNode!==n)return null;var i=ml(t,t===Nt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Dl(t,i);else{e=i;var r=We;We|=2;var s=I0();(Nt!==t||It!==e)&&(oi=null,Ls=_t()+500,Sr(t,e));do try{Y_();break}catch(o){U0(t,o)}while(!0);nf(),Pl.current=s,We=r,Mt!==null?e=0:(Nt=null,It=0,e=wt)}if(e!==0){if(e===2&&(r=ju(t),r!==0&&(i=r,e=xd(t,r))),e===1)throw n=Ba,Sr(t,0),Ni(t,i),sn(t,_t()),n;if(e===6)Ni(t,i);else{if(r=t.current.alternate,!(i&30)&&!X_(r)&&(e=Dl(t,i),e===2&&(s=ju(t),s!==0&&(i=s,e=xd(t,s))),e===1))throw n=Ba,Sr(t,0),Ni(t,i),sn(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:dr(t,Jt,oi);break;case 3:if(Ni(t,i),(i&130023424)===i&&(e=xf+500-_t(),10<e)){if(ml(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Qu(dr.bind(null,t,Jt,oi),e);break}dr(t,Jt,oi);break;case 4:if(Ni(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-kn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*W_(i/1960))-i,10<i){t.timeoutHandle=Qu(dr.bind(null,t,Jt,oi),i);break}dr(t,Jt,oi);break;case 5:dr(t,Jt,oi);break;default:throw Error(te(329))}}}return sn(t,_t()),t.callbackNode===n?D0.bind(null,t):null}function xd(t,e){var n=Ma;return t.current.memoizedState.isDehydrated&&(Sr(t,e).flags|=256),t=Dl(t,e),t!==2&&(e=Jt,Jt=n,e!==null&&_d(e)),t}function _d(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function X_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Hn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ni(t,e){for(e&=~vf,e&=~nc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kn(e),i=1<<n;t[n]=-1,e&=~i}}function $h(t){if(We&6)throw Error(te(327));Ss();var e=ml(t,0);if(!(e&1))return sn(t,_t()),null;var n=Dl(t,e);if(t.tag!==0&&n===2){var i=ju(t);i!==0&&(e=i,n=xd(t,i))}if(n===1)throw n=Ba,Sr(t,0),Ni(t,e),sn(t,_t()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,dr(t,Jt,oi),sn(t,_t()),null}function _f(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(Ls=_t()+500,Ql&&er())}}function Cr(t){Ui!==null&&Ui.tag===0&&!(We&6)&&Ss();var e=We;We|=1;var n=Tn.transition,i=Je;try{if(Tn.transition=null,Je=1,t)return t()}finally{Je=i,Tn.transition=n,We=e,!(We&6)&&er()}}function yf(){dn=hs.current,at(hs)}function Sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,M_(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(Jd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&yl();break;case 3:Ps(),at(nn),at(jt),cf();break;case 5:lf(i);break;case 4:Ps();break;case 13:at(ut);break;case 19:at(ut);break;case 10:rf(i.type._context);break;case 22:case 23:yf()}n=n.return}if(Nt=t,Mt=t=Gi(t.current,null),It=dn=e,wt=0,Ba=null,vf=nc=br=0,Jt=Ma=null,vr!==null){for(e=0;e<vr.length;e++)if(n=vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}vr=null}return t}function U0(t,e){do{var n=Mt;try{if(nf(),nl.current=Rl,Al){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Al=!1}if(Tr=0,Pt=Et=dt=null,ya=!1,Oa=0,gf.current=null,n===null||n.return===null){wt=1,Ba=e,Mt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=It,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Uh(a);if(g!==null){g.flags&=-257,Ih(g,a,o,s,e),g.mode&1&&Dh(s,c,e),e=g,l=c;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){Dh(s,c,e),Sf();break e}l=Error(te(426))}}else if(lt&&o.mode&1){var m=Uh(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Ih(m,a,o,s,e),ef(Ns(l,o));break e}}s=l=Ns(l,o),wt!==4&&(wt=2),Ma===null?Ma=[s]:Ma.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=v0(s,l,e);Ch(s,u);break e;case 1:o=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Hi===null||!Hi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=x0(s,o,e);Ch(s,M);break e}}s=s.return}while(s!==null)}O0(n)}catch(R){e=R,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function I0(){var t=Pl.current;return Pl.current=Rl,t===null?Rl:t}function Sf(){(wt===0||wt===3||wt===2)&&(wt=4),Nt===null||!(br&268435455)&&!(nc&268435455)||Ni(Nt,It)}function Dl(t,e){var n=We;We|=2;var i=I0();(Nt!==t||It!==e)&&(oi=null,Sr(t,e));do try{$_();break}catch(r){U0(t,r)}while(!0);if(nf(),We=n,Pl.current=i,Mt!==null)throw Error(te(261));return Nt=null,It=0,wt}function $_(){for(;Mt!==null;)F0(Mt)}function Y_(){for(;Mt!==null&&!_x();)F0(Mt)}function F0(t){var e=z0(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?O0(t):Mt=e,gf.current=null}function O0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=H_(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,Mt=null;return}}else if(n=B_(n,e,dn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);wt===0&&(wt=5)}function dr(t,e,n){var i=Je,r=Tn.transition;try{Tn.transition=null,Je=1,q_(t,e,n,i)}finally{Tn.transition=r,Je=i}return null}function q_(t,e,n,i){do Ss();while(Ui!==null);if(We&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Rx(t,s),t===Nt&&(Mt=Nt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||go||(go=!0,B0(pl,function(){return Ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Tn.transition,Tn.transition=null;var a=Je;Je=1;var o=We;We|=4,gf.current=null,G_(t,n),N0(n,t),m_(Ku),gl=!!qu,Ku=qu=null,t.current=n,j_(n),yx(),We=o,Je=a,Tn.transition=s}else t.current=n;if(go&&(go=!1,Ui=t,Ll=r),s=t.pendingLanes,s===0&&(Hi=null),Ex(n.stateNode),sn(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Nl)throw Nl=!1,t=gd,gd=null,t;return Ll&1&&t.tag!==0&&Ss(),s=t.pendingLanes,s&1?t===vd?Ea++:(Ea=0,vd=t):Ea=0,er(),null}function Ss(){if(Ui!==null){var t=vg(Ll),e=Tn.transition,n=Je;try{if(Tn.transition=null,Je=16>t?16:t,Ui===null)var i=!1;else{if(t=Ui,Ui=null,Ll=0,We&6)throw Error(te(331));var r=We;for(We|=4,me=t.current;me!==null;){var s=me,a=s.child;if(me.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(me=c;me!==null;){var f=me;switch(f.tag){case 0:case 11:case 15:Sa(8,f,s)}var h=f.child;if(h!==null)h.return=f,me=h;else for(;me!==null;){f=me;var d=f.sibling,g=f.return;if(A0(f),f===c){me=null;break}if(d!==null){d.return=g,me=d;break}me=g}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}me=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,me=a;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Sa(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,me=u;break e}me=s.return}}var v=t.current;for(me=v;me!==null;){a=me;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,me=x;else e:for(a=v;me!==null;){if(o=me,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:tc(9,o)}}catch(R){gt(o,o.return,R)}if(o===a){me=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,me=M;break e}me=o.return}}if(We=r,er(),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot($l,t)}catch{}i=!0}return i}finally{Je=n,Tn.transition=e}}return!1}function Yh(t,e,n){e=Ns(n,e),e=v0(t,e,1),t=Bi(t,e,1),e=qt(),t!==null&&(Ga(t,1,e),sn(t,e))}function gt(t,e,n){if(t.tag===3)Yh(t,t,n);else for(;e!==null;){if(e.tag===3){Yh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Hi===null||!Hi.has(i))){t=Ns(n,t),t=x0(e,t,1),e=Bi(e,t,1),t=qt(),e!==null&&(Ga(e,1,t),sn(e,t));break}}e=e.return}}function K_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(It&n)===n&&(wt===4||wt===3&&(It&130023424)===It&&500>_t()-xf?Sr(t,0):vf|=n),sn(t,e)}function k0(t,e){e===0&&(t.mode&1?(e=so,so<<=1,!(so&130023424)&&(so=4194304)):e=1);var n=qt();t=gi(t,e),t!==null&&(Ga(t,e,n),sn(t,n))}function Z_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),k0(t,n)}function Q_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),k0(t,n)}var z0;z0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,z_(t,e,n);tn=!!(t.flags&131072)}else tn=!1,lt&&e.flags&1048576&&Gg(e,El,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;rl(t,e),t=e.pendingProps;var r=Cs(e,jt.current);ys(e,n),r=df(null,e,i,t,r,n);var s=ff();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(i)?(s=!0,Sl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,af(e),r.updater=ec,e.stateNode=r,r._reactInternals=e,sd(e,i,t,n),e=ld(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&Qd(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(rl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ey(i),t=Ln(i,t),r){case 0:e=od(null,e,i,t,n);break e;case 1:e=kh(null,e,i,t,n);break e;case 11:e=Fh(null,e,i,t,n);break e;case 14:e=Oh(null,e,i,Ln(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),od(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),kh(t,e,i,r,n);case 3:e:{if(M0(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,qg(t,e),bl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ns(Error(te(423)),e),e=zh(t,e,i,n,r);break e}else if(i!==r){r=Ns(Error(te(424)),e),e=zh(t,e,i,n,r);break e}else for(fn=zi(e.stateNode.containerInfo.firstChild),hn=e,lt=!0,In=null,n=$g(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(As(),i===r){e=vi(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return Kg(e),t===null&&nd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Zu(i,r)?a=null:s!==null&&Zu(i,s)&&(e.flags|=32),S0(t,e),Yt(t,e,a,n),e.child;case 6:return t===null&&nd(e),null;case 13:return E0(t,e,n);case 4:return of(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Rs(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Fh(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,it(wl,i._currentValue),i._currentValue=a,s!==null)if(Hn(s.value,a)){if(s.children===r.children&&!nn.current){e=vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=hi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),id(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(te(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),id(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ys(e,n),r=bn(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=Ln(i,e.pendingProps),r=Ln(i.type,r),Oh(t,e,i,r,n);case 15:return _0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),rl(t,e),e.tag=1,rn(i)?(t=!0,Sl(e)):t=!1,ys(e,n),g0(e,i,r),sd(e,i,r,n),ld(null,e,i,!0,t,n);case 19:return w0(t,e,n);case 22:return y0(t,e,n)}throw Error(te(156,e.tag))};function B0(t,e){return hg(t,e)}function J_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,e,n,i){return new J_(t,e,n,i)}function Mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ey(t){if(typeof t=="function")return Mf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bd)return 11;if(t===Hd)return 14}return 2}function Gi(t,e){var n=t.alternate;return n===null?(n=En(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ol(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Mf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case is:return Mr(n.children,r,s,e);case zd:a=8,r|=8;break;case Ru:return t=En(12,n,e,r|2),t.elementType=Ru,t.lanes=s,t;case Pu:return t=En(13,n,e,r),t.elementType=Pu,t.lanes=s,t;case Nu:return t=En(19,n,e,r),t.elementType=Nu,t.lanes=s,t;case Km:return ic(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ym:a=10;break e;case qm:a=9;break e;case Bd:a=11;break e;case Hd:a=14;break e;case Ai:a=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=En(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Mr(t,e,n,i){return t=En(7,t,i,e),t.lanes=n,t}function ic(t,e,n,i){return t=En(22,t,i,e),t.elementType=Km,t.lanes=n,t.stateNode={isHidden:!1},t}function Gc(t,e,n){return t=En(6,t,null,e),t.lanes=n,t}function jc(t,e,n){return e=En(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ty(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wc(0),this.expirationTimes=wc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ef(t,e,n,i,r,s,a,o,l){return t=new ty(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=En(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},af(s),t}function ny(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ns,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function H0(t){if(!t)return Yi;t=t._reactInternals;e:{if(Nr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(rn(n))return Hg(t,n,e)}return e}function V0(t,e,n,i,r,s,a,o,l){return t=Ef(n,i,!0,t,r,s,a,o,l),t.context=H0(null),n=t.current,i=qt(),r=Vi(n),s=hi(i,r),s.callback=e??null,Bi(n,s,r),t.current.lanes=r,Ga(t,r,i),sn(t,i),t}function rc(t,e,n,i){var r=e.current,s=qt(),a=Vi(r);return n=H0(n),e.context===null?e.context=n:e.pendingContext=n,e=hi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Bi(r,e,a),t!==null&&(zn(t,r,a,s),tl(t,r,a)),a}function Ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wf(t,e){qh(t,e),(t=t.alternate)&&qh(t,e)}function iy(){return null}var G0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tf(t){this._internalRoot=t}sc.prototype.render=Tf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));rc(t,e,null,null)};sc.prototype.unmount=Tf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Cr(function(){rc(null,t,null,null)}),e[mi]=null}};function sc(t){this._internalRoot=t}sc.prototype.unstable_scheduleHydration=function(t){if(t){var e=yg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pi.length&&e!==0&&e<Pi[n].priority;n++);Pi.splice(n,0,t),n===0&&Mg(t)}};function bf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kh(){}function ry(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ul(a);s.call(c)}}var a=V0(e,i,t,0,null,!1,!1,"",Kh);return t._reactRootContainer=a,t[mi]=a.current,La(t.nodeType===8?t.parentNode:t),Cr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Ul(l);o.call(c)}}var l=Ef(t,0,!1,null,null,!1,!1,"",Kh);return t._reactRootContainer=l,t[mi]=l.current,La(t.nodeType===8?t.parentNode:t),Cr(function(){rc(e,l,n,i)}),l}function oc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Ul(a);o.call(l)}}rc(e,a,t,r)}else a=ry(n,e,t,r,i);return Ul(a)}xg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=da(e.pendingLanes);n!==0&&(jd(e,n|1),sn(e,_t()),!(We&6)&&(Ls=_t()+500,er()))}break;case 13:Cr(function(){var i=gi(t,1);if(i!==null){var r=qt();zn(i,t,1,r)}}),wf(t,1)}};Wd=function(t){if(t.tag===13){var e=gi(t,134217728);if(e!==null){var n=qt();zn(e,t,134217728,n)}wf(t,134217728)}};_g=function(t){if(t.tag===13){var e=Vi(t),n=gi(t,e);if(n!==null){var i=qt();zn(n,t,e,i)}wf(t,e)}};yg=function(){return Je};Sg=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};Hu=function(t,e,n){switch(e){case"input":if(Uu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Zl(i);if(!r)throw Error(te(90));Qm(i),Uu(i,r)}}}break;case"textarea":eg(t,n);break;case"select":e=n.value,e!=null&&gs(t,!!n.multiple,e,!1)}};og=_f;lg=Cr;var sy={usingClientEntryPoint:!1,Events:[Wa,os,Zl,sg,ag,_f]},Js={findFiberByHostInstance:gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ay={bundleType:Js.bundleType,version:Js.version,rendererPackageName:Js.rendererPackageName,rendererConfig:Js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=dg(t),t===null?null:t.stateNode},findFiberByHostInstance:Js.findFiberByHostInstance||iy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{$l=vo.inject(ay),Qn=vo}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sy;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bf(e))throw Error(te(200));return ny(t,e,null,n)};gn.createRoot=function(t,e){if(!bf(t))throw Error(te(299));var n=!1,i="",r=G0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ef(t,1,!1,null,null,n,!1,i,r),t[mi]=e.current,La(t.nodeType===8?t.parentNode:t),new Tf(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=dg(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return Cr(t)};gn.hydrate=function(t,e,n){if(!ac(e))throw Error(te(200));return oc(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!bf(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=G0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=V0(e,null,t,1,n??null,r,!1,s,a),t[mi]=e.current,La(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new sc(e)};gn.render=function(t,e,n){if(!ac(e))throw Error(te(200));return oc(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!ac(t))throw Error(te(40));return t._reactRootContainer?(Cr(function(){oc(null,null,t,!1,function(){t._reactRootContainer=null,t[mi]=null})}),!0):!1};gn.unstable_batchedUpdates=_f;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ac(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return oc(t,e,n,!1,i)};gn.version="18.3.1-next-f1338f8080-20240426";function j0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j0)}catch(t){console.error(t)}}j0(),jm.exports=gn;var oy=jm.exports,Zh=oy;Cu.createRoot=Zh.createRoot,Cu.hydrateRoot=Zh.hydrateRoot;const ly={},Qh=t=>{let e;const n=new Set,i=(f,h)=>{const d=typeof f=="function"?f(e):f;if(!Object.is(d,e)){const g=e;e=h??(typeof d!="object"||d===null)?d:Object.assign({},e,d),n.forEach(y=>y(e,g))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(ly?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(i,r,l);return l},cy=t=>t?Qh(t):Qh;var W0={exports:{}},X0={},$0={exports:{}},Y0={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ds=Ke;function uy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dy=typeof Object.is=="function"?Object.is:uy,fy=Ds.useState,hy=Ds.useEffect,py=Ds.useLayoutEffect,my=Ds.useDebugValue;function gy(t,e){var n=e(),i=fy({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return py(function(){r.value=n,r.getSnapshot=e,Wc(r)&&s({inst:r})},[t,n,e]),hy(function(){return Wc(r)&&s({inst:r}),t(function(){Wc(r)&&s({inst:r})})},[t]),my(n),n}function Wc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!dy(t,n)}catch{return!0}}function vy(t,e){return e()}var xy=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?vy:gy;Y0.useSyncExternalStore=Ds.useSyncExternalStore!==void 0?Ds.useSyncExternalStore:xy;$0.exports=Y0;var _y=$0.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lc=Ke,yy=_y;function Sy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var My=typeof Object.is=="function"?Object.is:Sy,Ey=yy.useSyncExternalStore,wy=lc.useRef,Ty=lc.useEffect,by=lc.useMemo,Cy=lc.useDebugValue;X0.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=wy(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=by(function(){function l(g){if(!c){if(c=!0,f=g,g=i(g),r!==void 0&&a.hasValue){var y=a.value;if(r(y,g))return h=y}return h=g}if(y=h,My(f,g))return y;var _=i(g);return r!==void 0&&r(y,_)?(f=g,y):(f=g,h=_)}var c=!1,f,h,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,i,r]);var o=Ey(t,s[0],s[1]);return Ty(function(){a.hasValue=!0,a.value=o},[o]),Cy(o),o};W0.exports=X0;var Ay=W0.exports;const Ry=Nm(Ay),q0={},{useDebugValue:Py}=Vm,{useSyncExternalStoreWithSelector:Ny}=Ry;let Jh=!1;const Ly=t=>t;function Dy(t,e=Ly,n){(q0?"production":void 0)!=="production"&&n&&!Jh&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Jh=!0);const i=Ny(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return Py(i),i}const ep=t=>{(q0?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?cy(t):t,n=(i,r)=>Dy(e,i,r);return Object.assign(n,e),n},Uy=t=>t?ep(t):ep,Iy={};function K0(t,e){let n;try{n=t()}catch{return}return{getItem:r=>{var s;const a=l=>l===null?null:JSON.parse(l,void 0),o=(s=n.getItem(r))!=null?s:null;return o instanceof Promise?o.then(a):a(o)},setItem:(r,s)=>n.setItem(r,JSON.stringify(s,void 0)),removeItem:r=>n.removeItem(r)}}const Ha=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(i){return Ha(i)(n)},catch(i){return this}}}catch(n){return{then(i){return this},catch(i){return Ha(i)(n)}}}},Fy=(t,e)=>(n,i,r)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:m=>m,version:0,merge:(m,u)=>({...u,...m}),...e},a=!1;const o=new Set,l=new Set;let c;try{c=s.getStorage()}catch{}if(!c)return t((...m)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...m)},i,r);const f=Ha(s.serialize),h=()=>{const m=s.partialize({...i()});let u;const v=f({state:m,version:s.version}).then(x=>c.setItem(s.name,x)).catch(x=>{u=x});if(u)throw u;return v},d=r.setState;r.setState=(m,u)=>{d(m,u),h()};const g=t((...m)=>{n(...m),h()},i,r);let y;const _=()=>{var m;if(!c)return;a=!1,o.forEach(v=>v(i()));const u=((m=s.onRehydrateStorage)==null?void 0:m.call(s,i()))||void 0;return Ha(c.getItem.bind(c))(s.name).then(v=>{if(v)return s.deserialize(v)}).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==s.version){if(s.migrate)return s.migrate(v.state,v.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return v.state}).then(v=>{var x;return y=s.merge(v,(x=i())!=null?x:g),n(y,!0),h()}).then(()=>{u==null||u(y,void 0),a=!0,l.forEach(v=>v(y))}).catch(v=>{u==null||u(void 0,v)})};return r.persist={setOptions:m=>{s={...s,...m},m.getStorage&&(c=m.getStorage())},clearStorage:()=>{c==null||c.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>_(),hasHydrated:()=>a,onHydrate:m=>(o.add(m),()=>{o.delete(m)}),onFinishHydration:m=>(l.add(m),()=>{l.delete(m)})},_(),y||g},Oy=(t,e)=>(n,i,r)=>{let s={storage:K0(()=>localStorage),partialize:_=>_,version:0,merge:(_,m)=>({...m,..._}),...e},a=!1;const o=new Set,l=new Set;let c=s.storage;if(!c)return t((..._)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(..._)},i,r);const f=()=>{const _=s.partialize({...i()});return c.setItem(s.name,{state:_,version:s.version})},h=r.setState;r.setState=(_,m)=>{h(_,m),f()};const d=t((..._)=>{n(..._),f()},i,r);r.getInitialState=()=>d;let g;const y=()=>{var _,m;if(!c)return;a=!1,o.forEach(v=>{var x;return v((x=i())!=null?x:d)});const u=((m=s.onRehydrateStorage)==null?void 0:m.call(s,(_=i())!=null?_:d))||void 0;return Ha(c.getItem.bind(c))(s.name).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==s.version){if(s.migrate)return[!0,s.migrate(v.state,v.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,v.state];return[!1,void 0]}).then(v=>{var x;const[M,R]=v;if(g=s.merge(R,(x=i())!=null?x:d),n(g,!0),M)return f()}).then(()=>{u==null||u(g,void 0),g=i(),a=!0,l.forEach(v=>v(g))}).catch(v=>{u==null||u(void 0,v)})};return r.persist={setOptions:_=>{s={...s,..._},_.storage&&(c=_.storage)},clearStorage:()=>{c==null||c.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>y(),hasHydrated:()=>a,onHydrate:_=>(o.add(_),()=>{o.delete(_)}),onFinishHydration:_=>(l.add(_),()=>{l.delete(_)})},s.skipHydration||y(),g||d},ky=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((Iy?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Fy(t,e)):Oy(t,e),zy=ky,ot=[{id:"ursa_major",name:"大熊座",nameEn:"Ursa Major",difficulty:1,description:"北斗七星所在的著名星座，是寻找北极星的重要参照。",mythology:"宙斯将美丽的卡利斯托变成熊，后升上天成为大熊座。",mythologyDetail:"在古希腊神话中，卡利斯托是一位美丽的狩猎女神，被宙斯所爱并生下儿子阿卡斯。宙斯的妻子赫拉因嫉妒，将卡利斯托变成了一只大熊。多年后，阿卡斯在狩猎时遇到了变成熊的母亲，为了避免悲剧，宙斯将他们母子一同升上天界，成为大熊座和小熊座，永远在星空中相伴。",observationTips:"春季夜晚最为明显，北斗七星的勺口两颗星连线延长5倍即可找到北极星。",bestTime:"春季3-5月，晚间21:00-23:00",hemisphere:"北半球",area:"1280平方度",ranking:3,stars:[{id:"um1",name:"天枢",x:-4.2,y:1.8,z:0,mag:1.8,color:"#ffddaa"},{id:"um2",name:"天璇",x:-3.5,y:1.2,z:0,mag:2.4,color:"#ffeecc"},{id:"um3",name:"天玑",x:-2,y:1.5,z:0,mag:2.5,color:"#ffffff"},{id:"um4",name:"天权",x:-1.2,y:.8,z:0,mag:3.3,color:"#ddeeff"},{id:"um5",name:"玉衡",x:0,y:1,z:0,mag:1.8,color:"#ffeecc"},{id:"um6",name:"开阳",x:1.3,y:1.3,z:0,mag:2.3,color:"#ffffff"},{id:"um7",name:"摇光",x:2.6,y:1.8,z:0,mag:1.9,color:"#cce4ff"}],connections:[["um1","um2"],["um2","um3"],["um3","um4"],["um4","um5"],["um5","um6"],["um6","um7"],["um4","um3"]],season:"春",center:{x:-.5,y:1.3},tags:["北斗七星","北极星","导航"]},{id:"orion",name:"猎户座",nameEn:"Orion",difficulty:1,description:"冬季最耀眼的星座之一，腰带三星是显著标志。",mythology:"海神波塞冬之子，英勇的猎人奥利安被蝎子毒死后升上天。",mythologyDetail:"奥利安是海神波塞冬与欧律阿勒之子，他拥有非凡的力量和英俊的外表，自称能杀死世上任何野兽。女神阿耳忒弥斯爱上了他，但她的哥哥阿波罗对此不满。阿波罗派出一只巨大的蝎子去刺杀奥利安，经过激烈搏斗，奥利安被蝎子毒刺杀死。宙斯将这位英勇的猎人升上天界，成为猎户座，而那只蝎子也成为天蝎座，永远与猎户座相对，永不相见。",observationTips:"冬季夜晚面向南方，三颗明亮的星星整齐排列成腰带，这是猎户座最显著的标志。",bestTime:"冬季12-2月，晚间20:00-22:00",hemisphere:"南北半球均可见",area:"594平方度",ranking:26,stars:[{id:"o1",name:"参宿四",x:-2.5,y:2,z:0,mag:.5,color:"#ff8866"},{id:"o2",name:"参宿五",x:2.2,y:2,z:0,mag:1.6,color:"#cce0ff"},{id:"o3",name:"参宿一",x:-1.8,y:0,z:0,mag:2,color:"#ddeeff"},{id:"o4",name:"参宿二",x:0,y:-.1,z:0,mag:1.7,color:"#ffffff"},{id:"o5",name:"参宿三",x:1.8,y:-.2,z:0,mag:2.2,color:"#bbddee"},{id:"o6",name:"参宿七",x:-1.5,y:-2,z:0,mag:.1,color:"#aaccff"},{id:"o7",name:"参宿六",x:1.5,y:-2.2,z:0,mag:2.8,color:"#ffccaa"},{id:"o8",name:"猎户星云",x:0,y:-1.2,z:0,mag:5,color:"#ff99cc"}],connections:[["o1","o3"],["o1","o2"],["o2","o5"],["o3","o4"],["o4","o5"],["o3","o6"],["o5","o7"],["o4","o8"]],season:"冬",center:{x:0,y:0},tags:["猎户星云","红超巨星","冬季"]},{id:"cassiopeia",name:"仙后座",nameEn:"Cassiopeia",difficulty:2,description:"呈W形排列的星座，位于北极星对面的天空。",mythology:"埃塞俄比亚王后卡西奥佩娅因炫耀美貌被钉在天上永远旋转。",mythologyDetail:"卡西奥佩娅是埃塞俄比亚国王克甫斯的王后，她因自恃美貌，夸耀自己和女儿安德洛墨达比海神涅柔斯的女儿们更美丽。愤怒的海神派海怪刻托袭击埃塞俄比亚海岸。为了平息神怒，国王被迫将女儿安德洛墨达绑在海边献祭。幸好英雄珀耳修斯路过，杀死海怪救下公主。事后，海神仍惩罚卡西奥佩娅，将她钉在天上的宝座上永远旋转，让她有时头朝下，以示羞辱。",observationTips:"秋季夜晚靠近北极星的位置，寻找五颗亮星组成的W或M形状。",bestTime:"秋季9-11月，晚间21:00-23:00",hemisphere:"北半球",area:"598平方度",ranking:25,stars:[{id:"c1",name:"王良一",x:-3,y:1,z:0,mag:2.5,color:"#ffffff"},{id:"c2",name:"王良四",x:-1.5,y:2.2,z:0,mag:2.3,color:"#ffddbb"},{id:"c3",name:"策",x:0,y:.8,z:0,mag:2.2,color:"#eeddcc"},{id:"c4",name:"王良三",x:1.5,y:2,z:0,mag:2.7,color:"#ccddff"},{id:"c5",name:"王良二",x:3,y:.5,z:0,mag:3,color:"#ffffff"}],connections:[["c1","c2"],["c2","c3"],["c3","c4"],["c4","c5"]],season:"秋",center:{x:0,y:1.3},tags:["W形","拱极星座","王后"]},{id:"scorpius",name:"天蝎座",nameEn:"Scorpius",difficulty:2,description:"夏季南方天空中的宏伟星座，心宿二是红色超巨星。",mythology:"杀死猎人奥利安的大蝎子，因此与猎户座永远相对出现。",mythologyDetail:"这只巨大的蝎子是阿波罗派去刺杀猎人奥利安的。奥利安因自负而自称能杀死世上任何野兽，这激怒了众神。蝎子从地缝中钻出，用毒刺刺中奥利安的脚踝，导致他中毒身亡。为了纪念这场战斗，宙斯将蝎子升上天界成为天蝎座。由于奥利安和蝎子是天敌，宙斯让它们永远位于天空的两端，天蝎座升起时猎户座就会落下，永不相见，避免它们在天界继续争斗。",observationTips:"夏季夜晚面向南方，寻找红色的心宿二（天蝎的心脏），然后沿着弯曲的星链寻找蝎子的尾巴。",bestTime:"夏季6-8月，晚间21:00-23:00",hemisphere:"南半球更易观测，北半球夏季可见",area:"497平方度",ranking:33,stars:[{id:"s1",name:"房宿四",x:-2,y:-1,z:0,mag:2.6,color:"#ffeecc"},{id:"s2",name:"房宿三",x:-1,y:-.5,z:0,mag:2.3,color:"#ccdeff"},{id:"s3",name:"心宿二",x:0,y:0,z:0,mag:1,color:"#ff5533"},{id:"s4",name:"心宿三",x:1,y:.3,z:0,mag:2.9,color:"#ffeedd"},{id:"s5",name:"尾宿一",x:1.8,y:-.2,z:0,mag:2.7,color:"#bbeecc"},{id:"s6",name:"尾宿二",x:2.4,y:.5,z:0,mag:2.8,color:"#ccddff"},{id:"s7",name:"尾宿八",x:2.8,y:1.2,z:0,mag:2.4,color:"#ffffff"},{id:"s8",name:"尾宿九",x:3.2,y:.4,z:0,mag:1.6,color:"#ddeeff"}],connections:[["s1","s2"],["s2","s3"],["s3","s4"],["s4","s5"],["s5","s6"],["s6","s7"],["s7","s8"],["s6","s8"]],season:"夏",center:{x:.6,y:.2},tags:["心宿二","红超巨星","夏季大三角"]},{id:"lyra",name:"天琴座",nameEn:"Lyra",difficulty:3,description:"织女星所在的小而优雅的星座，夏季大三角之一。",mythology:"俄耳甫斯的竖琴，他的音乐能让万物驻足聆听。",mythologyDetail:"俄耳甫斯是古希腊最伟大的音乐家，他的琴声能使飞鸟走兽、甚至顽石流泪。他的妻子欧律狄刻不幸被毒蛇咬死，悲痛欲绝的俄耳甫斯带着竖琴深入冥界，用动人的音乐打动了冥王哈迪斯和冥后珀耳塞福涅。冥王允许他带妻子回到人间，但要求他在走出冥界前不得回头看妻子。不幸的是，在接近出口时，俄耳甫斯忍不住回头看了一眼，妻子就此永远消失。俄耳甫斯死后，宙斯将他的竖琴升上天界，成为天琴座。",observationTips:"夏季夜晚寻找最亮的织女星，然后在其下方寻找由四颗暗星组成的小平行四边形。",bestTime:"夏季6-8月，晚间21:00-23:00",hemisphere:"北半球",area:"286平方度",ranking:52,stars:[{id:"l1",name:"织女一",x:0,y:2,z:0,mag:0,color:"#aaddff"},{id:"l2",name:"渐台二",x:-1,y:.5,z:0,mag:4.3,color:"#ffddcc"},{id:"l3",name:"渐台三",x:-.5,y:0,z:0,mag:4.3,color:"#ffeecc"},{id:"l4",name:"渐台一",x:.5,y:0,z:0,mag:4.7,color:"#ffffff"},{id:"l5",name:"渐台四",x:1,y:.5,z:0,mag:5.1,color:"#ccddee"}],connections:[["l1","l2"],["l1","l5"],["l2","l3"],["l3","l4"],["l4","l5"],["l2","l4"]],season:"夏",center:{x:0,y:.8},tags:["织女星","竖琴","夏季大三角","神话"]},{id:"cygnus",name:"天鹅座",nameEn:"Cygnus",difficulty:3,description:'银河中展翅飞翔的天鹅，又称"北十字"。',mythology:"宙斯化身天鹅接近斯巴达王后勒达，美丽的天鹅升上天界。",mythologyDetail:'宙斯为了接近美丽的斯巴达王后勒达，化身成为一只雪白优雅的天鹅。勒达被这只美丽的天鹅吸引，与它亲近。后来勒达生下了两枚鹅蛋，一枚孵出了海伦（后来引发特洛伊战争的绝世美女）和卡斯托尔，另一枚孵出了波吕丢刻斯和克吕泰涅斯特拉。为了纪念这段故事，宙斯将他化身的天鹅升上天界，成为天鹅座。天鹅座位于银河之中，展翅飞翔，其主体的五颗亮星构成一个优美的十字形，因此也被称为"北十字"。',observationTips:"秋季夜晚，在银河中寻找一个十字形的星群，最上方的亮星是天津四，与织女星、牛郎星组成夏季大三角。",bestTime:"秋季9-11月，晚间21:00-23:00",hemisphere:"北半球",area:"804平方度",ranking:16,stars:[{id:"cy1",name:"天津四",x:0,y:2.5,z:0,mag:1.3,color:"#ddeeff"},{id:"cy2",name:"天津九",x:-1.2,y:1,z:0,mag:2.9,color:"#ffeecc"},{id:"cy3",name:"辇道增七",x:0,y:.5,z:0,mag:3.2,color:"#ffccaa"},{id:"cy4",name:"天津一",x:1.2,y:1,z:0,mag:2.9,color:"#ffffff"},{id:"cy5",name:"天津二",x:-1.8,y:0,z:0,mag:4,color:"#ddeeff"},{id:"cy6",name:"奚仲四",x:0,y:-1.5,z:0,mag:2.5,color:"#ffeecc"},{id:"cy7",name:"天津八",x:1.8,y:0,z:0,mag:3.7,color:"#ccddee"}],connections:[["cy1","cy3"],["cy3","cy6"],["cy2","cy3"],["cy3","cy4"],["cy2","cy5"],["cy4","cy7"]],season:"秋",center:{x:0,y:.5},tags:["北十字","银河","夏季大三角","天津四"]}],Ar=t=>ot.find(e=>e.id===t),Il=[{id:"first_star",name:"初见星光",description:"完成第一次星星连线",icon:"⭐",category:"beginner",condition:{type:"connect_count",value:1}},{id:"constellation_1",name:"初识星座",description:"成功发现第一个完整星座",icon:"✨",category:"explorer",condition:{type:"discover_count",value:1}},{id:"constellation_3",name:"星空漫步者",description:"发现3个不同的星座",icon:"🌙",category:"explorer",condition:{type:"discover_count",value:3}},{id:"constellation_all",name:"观星大师",description:"发现所有的星座",icon:"🌟",category:"explorer",condition:{type:"discover_count",value:6}},{id:"easy_clear",name:"入门完成",description:"完成所有难度1的星座",icon:"🎯",category:"challenge",condition:{type:"difficulty_clear",value:1}},{id:"medium_clear",name:"进阶探索",description:"完成所有难度2的星座",icon:"🔥",category:"challenge",condition:{type:"difficulty_clear",value:2}},{id:"hard_clear",name:"星空征服者",description:"完成所有难度3的星座",icon:"💎",category:"challenge",condition:{type:"difficulty_clear",value:3}},{id:"log_5",name:"记录者",description:"累计5条观测日志",icon:"📖",category:"collector",condition:{type:"log_count",value:5}},{id:"log_15",name:"天文日志家",description:"累计15条观测日志",icon:"📚",category:"collector",condition:{type:"log_count",value:15}},{id:"perfect_orion",name:"猎人之眼",description:"在没有错误的情况下完成猎户座",icon:"🏹",category:"special",condition:{type:"perfect_constellation",value:"orion"}},{id:"perfect_ursa",name:"北斗指引",description:"在没有错误的情况下完成大熊座",icon:"🐻",category:"special",condition:{type:"perfect_constellation",value:"ursa_major"}},{id:"dedicated",name:"坚持不懈",description:"累计错误连线超过20次但最终完成",icon:"💪",category:"special",condition:{type:"total_mistakes",value:20}}],Z0=t=>Il.find(e=>e.id===t),tp={volume:.7,sfxVolume:.8,graphicsQuality:"high",showLabels:!0,showNebula:!0,starDensity:1,animationSpeed:1,theme:"dark",hapticFeedback:!0,autoSave:!0,language:"zh-CN"},Ur={low:{starCount:800,particleSize:.02,antialias:!1,bloom:!1},medium:{starCount:1500,particleSize:.03,antialias:!0,bloom:!1},high:{starCount:2500,particleSize:.04,antialias:!0,bloom:!0}},Us={1:{stars:7,tolerance:.25,label:"入门"},2:{stars:8,tolerance:.18,label:"进阶"},3:{stars:5,tolerance:.12,label:"挑战"}},np={PROGRESS:"starconnect_progress"},Vt={spring:{id:"spring",name:"春季",nameEn:"Spring",icon:"🌸",color:"from-pink-500 to-rose-400",bgColor:"bg-pink-500/10",borderColor:"border-pink-500/30",textColor:"text-pink-300",months:"3月 - 5月",description:"万物复苏，北斗七星指引方向"},summer:{id:"summer",name:"夏季",nameEn:"Summer",icon:"☀️",color:"from-orange-500 to-amber-400",bgColor:"bg-orange-500/10",borderColor:"border-orange-500/30",textColor:"text-orange-300",months:"6月 - 8月",description:"银河璀璨，天蝎与天琴交相辉映"},autumn:{id:"autumn",name:"秋季",nameEn:"Autumn",icon:"🍂",color:"from-amber-600 to-yellow-500",bgColor:"bg-amber-500/10",borderColor:"border-amber-500/30",textColor:"text-amber-300",months:"9月 - 11月",description:"秋高气爽，仙后与天鹅展翅翱翔"},winter:{id:"winter",name:"冬季",nameEn:"Winter",icon:"❄️",color:"from-cyan-500 to-blue-400",bgColor:"bg-cyan-500/10",borderColor:"border-cyan-500/30",textColor:"text-cyan-300",months:"12月 - 2月",description:"寒夜深沉，猎户座闪耀星空"}},Yn={beginner:{id:"beginner",name:"入门探索",description:"熟悉当季星座的基本形态",requirement:1,multiplier:1},intermediate:{id:"intermediate",name:"深度观测",description:"完美完成当季所有星座",requirement:2,multiplier:1.5},master:{id:"master",name:"季节大师",description:"反复观测，解锁隐藏成就",requirement:3,multiplier:2}},By={spring:ot.filter(t=>t.season==="春").map(t=>t.id),summer:ot.filter(t=>t.season==="夏").map(t=>t.id),autumn:ot.filter(t=>t.season==="秋").map(t=>t.id),winter:ot.filter(t=>t.season==="冬").map(t=>t.id)},ll={spring:{beginner:{id:"spring_beginner",name:"春之萌芽",type:"title",icon:"🌱",description:"完成春季入门探索的称号"},intermediate:{id:"spring_intermediate",name:"花开满庭",type:"badge",icon:"🌸",description:"完美完成春季所有星座的徽章"},master:{id:"spring_master",name:"春日守望者",type:"achievement",icon:"🌺",description:"春季观测大师的终极成就",achievementId:"spring_master"}},summer:{beginner:{id:"summer_beginner",name:"夏之初阳",type:"title",icon:"🌞",description:"完成夏季入门探索的称号"},intermediate:{id:"summer_intermediate",name:"繁星漫天",type:"badge",icon:"⭐",description:"完美完成夏季所有星座的徽章"},master:{id:"summer_master",name:"银河守护者",type:"achievement",icon:"🌌",description:"夏季观测大师的终极成就",achievementId:"summer_master"}},autumn:{beginner:{id:"autumn_beginner",name:"秋之寄语",type:"title",icon:"🍁",description:"完成秋季入门探索的称号"},intermediate:{id:"autumn_intermediate",name:"金风送爽",type:"badge",icon:"🌾",description:"完美完成秋季所有星座的徽章"},master:{id:"autumn_master",name:"秋水共长天",type:"achievement",icon:"🦢",description:"秋季观测大师的终极成就",achievementId:"autumn_master"}},winter:{beginner:{id:"winter_beginner",name:"冬之静谧",type:"title",icon:"⛄",description:"完成冬季入门探索的称号"},intermediate:{id:"winter_intermediate",name:"傲雪凌霜",type:"badge",icon:"❄️",description:"完美完成冬季所有星座的徽章"},master:{id:"winter_master",name:"极夜追光人",type:"achievement",icon:"💎",description:"冬季观测大师的终极成就",achievementId:"winter_master"}}},Ms=[{id:"spring_master",name:"春日守望者",description:"成为春季观测大师",icon:"🌺",category:"season",season:"spring",condition:{type:"season_master",value:"spring"}},{id:"summer_master",name:"银河守护者",description:"成为夏季观测大师",icon:"🌌",category:"season",season:"summer",condition:{type:"season_master",value:"summer"}},{id:"autumn_master",name:"秋水共长天",description:"成为秋季观测大师",icon:"🦢",category:"season",season:"autumn",condition:{type:"season_master",value:"autumn"}},{id:"winter_master",name:"极夜追光人",description:"成为冬季观测大师",icon:"💎",category:"season",season:"winter",condition:{type:"season_master",value:"winter"}},{id:"four_seasons",name:"四季轮回",description:"完成所有四季的观测计划",icon:"🔄",category:"season",season:"all",condition:{type:"four_seasons",value:!0}}];function Cf(t){return By[t]||[]}function Q0(){const t=new Date().getMonth();return t>=2&&t<=4?"spring":t>=5&&t<=7?"summer":t>=8&&t<=10?"autumn":"winter"}function xo(t,e,n,i,r){const s=Cf(t),a=s.filter(o=>n.includes(o)).length;if(e==="beginner")return{current:Math.min(a,Yn.beginner.requirement),target:Yn.beginner.requirement,percentage:Math.min(a/Yn.beginner.requirement*100,100),completed:a>=Yn.beginner.requirement};if(e==="intermediate"){const o=s.filter(l=>i[l]||!1).length;return{current:Math.min(o,s.length),target:s.length,percentage:s.length>0?Math.min(o/s.length*100,100):0,completed:o>=s.length}}if(e==="master"){const o=s.reduce((c,f)=>c+Math.max(0,(r[f]||0)-1),0),l=s.length*Yn.master.requirement;return{current:Math.min(o,l),target:l,percentage:l>0?Math.min(o/l*100,100):0,completed:o>=l}}return{current:0,target:1,percentage:0,completed:!1}}let yd=!0;const Hy={...K0(()=>localStorage),setItem:(t,e)=>{if(yd)return localStorage.setItem(t,e)},getItem:t=>{var n,i;const e=localStorage.getItem(t);if(e)try{const r=JSON.parse(e);((i=(n=r.state)==null?void 0:n.settings)==null?void 0:i.autoSave)!==void 0&&(yd=r.state.settings.autoSave)}catch{}return e}},Dt=Uy(zy((t,e)=>({settings:{...tp},updateSettings:n=>t(i=>{const r={settings:{...i.settings,...n}};return n.autoSave!==void 0&&(yd=n.autoSave),r}),resetSettings:()=>t({settings:{...tp}}),manualSave:()=>{const n=e(),i={state:{settings:n.settings,discoveredConstellations:n.discoveredConstellations,discoveredStars:n.discoveredStars,observationLogs:n.observationLogs,unlockedAchievements:n.unlockedAchievements,totalMistakes:n.totalMistakes,seasonProgress:n.seasonProgress,seasonRewardsUnlocked:n.seasonRewardsUnlocked,seasonRewardsClaimed:n.seasonRewardsClaimed,perfectObservations:n.perfectObservations,totalObservations:n.totalObservations,seasonHistory:n.seasonHistory,favoriteConstellations:n.favoriteConstellations},version:0};localStorage.setItem(np.PROGRESS,JSON.stringify(i))},favoriteConstellations:[],toggleFavorite:n=>t(i=>({favoriteConstellations:i.favoriteConstellations.includes(n)?i.favoriteConstellations.filter(r=>r!==n):[...i.favoriteConstellations,n]})),isFavorite:n=>e().favoriteConstellations.includes(n),discoveredConstellations:[],discoveredStars:[],connectionPath:[],currentTargetConstellation:null,mistakes:0,totalMistakes:0,perfectRun:!0,setTargetConstellation:n=>{t({currentTargetConstellation:n,connectionPath:[],mistakes:0,perfectRun:!0})},connectStar:n=>{const i=e(),r=Ar(i.currentTargetConstellation);if(!r||!r.stars.map(l=>l.id).includes(n)||i.connectionPath.includes(n))return!1;const a=[...i.connectionPath,n],o=r.connections;if(a.length>=2){const l=a.slice(-2);if(!o.some(([f,h])=>f===l[0]&&h===l[1]||f===l[1]&&h===l[0]))return t({mistakes:i.mistakes+1,totalMistakes:i.totalMistakes+1,perfectRun:!1}),e().checkAchievements(),!1}return t({connectionPath:a,discoveredStars:i.discoveredStars.includes(n)?i.discoveredStars:[...i.discoveredStars,n]}),e().checkConstellationComplete(),e().checkAchievements(),!0},clearConnectionPath:()=>t({connectionPath:[]}),checkConstellationComplete:()=>{const n=e(),i=Ar(n.currentTargetConstellation);if(!i)return!1;if([...new Set(n.connectionPath)].length===i.stars.length){const a=i.id,o=n.discoveredConstellations.includes(a),l=n.perfectRun;return t(c=>({totalObservations:{...c.totalObservations,[a]:(c.totalObservations[a]||0)+1},perfectObservations:l?{...c.perfectObservations,[a]:!0}:c.perfectObservations})),o?e().addLog({type:"reobservation",constellationId:a,perfect:l,timestamp:Date.now()}):(t(c=>({discoveredConstellations:[...c.discoveredConstellations,a]})),e().addLog({type:"discovery",constellationId:a,perfect:l,timestamp:Date.now()})),e().checkSeasonProgress(),!0}return!1},observationLogs:[],addLog:n=>t(i=>({observationLogs:[n,...i.observationLogs].slice(0,100)})),clearLogs:()=>t({observationLogs:[]}),unlockedAchievements:[],seasonProgress:{spring:{beginner:!1,intermediate:!1,master:!1},summer:{beginner:!1,intermediate:!1,master:!1},autumn:{beginner:!1,intermediate:!1,master:!1},winter:{beginner:!1,intermediate:!1,master:!1}},seasonRewardsUnlocked:[],seasonRewardsClaimed:[],perfectObservations:{},totalObservations:{},seasonHistory:[],getSeasonStats:()=>{const n=e(),i={};return Object.keys(Vt).forEach(r=>{const s=Cf(r),a=s.filter(d=>n.discoveredConstellations.includes(d)).length,o=s.filter(d=>n.perfectObservations[d]).length,l=s.reduce((d,g)=>d+Math.max(0,(n.totalObservations[g]||0)-1),0),c=xo(r,"beginner",n.discoveredConstellations,n.perfectObservations,n.totalObservations),f=xo(r,"intermediate",n.discoveredConstellations,n.perfectObservations,n.totalObservations),h=xo(r,"master",n.discoveredConstellations,n.perfectObservations,n.totalObservations);i[r]={constellations:s.length,discovered:a,perfectCount:o,reObservationCount:l,beginner:c,intermediate:f,master:h,overallPercentage:Math.round((c.percentage+f.percentage+h.percentage)/3)}}),i},checkSeasonProgress:()=>{const n=e(),i={...n.seasonProgress},r=[],s=[];return Object.keys(Vt).forEach(a=>{Object.keys(Yn).forEach(o=>{if(!i[a][o]&&xo(a,o,n.discoveredConstellations,n.perfectObservations,n.totalObservations).completed){i[a]={...i[a],[o]:!0},r.push({seasonId:a,phaseId:o});const c=ll[a][o];c&&!n.seasonRewardsUnlocked.includes(c.id)&&(s.push(c.id),n.addLog({type:"season_reward",seasonId:a,phaseId:o,rewardId:c.id,rewardName:c.name,timestamp:Date.now()}))}})}),r.length>0&&t({seasonProgress:i,seasonRewardsUnlocked:[...n.seasonRewardsUnlocked,...s],seasonHistory:[...r.map(a=>({...a,timestamp:Date.now()})),...n.seasonHistory].slice(0,50)}),e().checkAchievements(),r.length>0?r:[]},claimSeasonReward:n=>{const i=e();return i.seasonRewardsUnlocked.includes(n)&&!i.seasonRewardsClaimed.includes(n)?(t({seasonRewardsClaimed:[...i.seasonRewardsClaimed,n]}),!0):!1},checkAchievements:()=>{const n=e(),i=[];return[...Il,...Ms].forEach(s=>{var c;if(n.unlockedAchievements.includes(s.id))return;const{type:a,value:o}=s.condition;let l=!1;switch(a){case"connect_count":l=n.connectionPath.length>=o;break;case"discover_count":l=n.discoveredConstellations.length>=o;break;case"difficulty_clear":{const f=o;l=ot.filter(d=>d.difficulty===f).every(d=>n.discoveredConstellations.includes(d.id));break}case"log_count":l=n.observationLogs.length>=o;break;case"perfect_constellation":{const f=n.observationLogs[0];l=f&&f.constellationId===o&&f.perfect===!0;break}case"total_mistakes":l=n.totalMistakes>=o;break;case"season_master":l=((c=n.seasonProgress[o])==null?void 0:c.master)===!0;break;case"four_seasons":l=Object.keys(Vt).every(f=>{var h;return((h=n.seasonProgress[f])==null?void 0:h.master)===!0});break}l&&i.push(s.id)}),i.length>0?(t(s=>({unlockedAchievements:[...s.unlockedAchievements,...i]})),i.forEach(s=>{e().addLog({type:"achievement",achievementId:s,timestamp:Date.now()})}),i):[]},showAchievementToast:null,setShowAchievementToast:n=>t({showAchievementToast:n}),activePanel:null,setActivePanel:n=>t(i=>{const r={activePanel:n};return n!=="atlas"&&i.activePanel==="atlas"&&(r.activeAtlasPanel=null,r.selectedConstellationDetail=null),r}),openAtlasList:()=>t({activePanel:"atlas",activeAtlasPanel:null,selectedConstellationDetail:null}),openAtlasDetail:n=>t({activePanel:"atlas",activeAtlasPanel:"detail",selectedConstellationDetail:n}),resetAtlasState:()=>t({activeAtlasPanel:null,selectedConstellationDetail:null}),activeAtlasPanel:null,selectedConstellationDetail:null,setActiveAtlasPanel:n=>t({activeAtlasPanel:n}),setSelectedConstellationDetail:n=>t({selectedConstellationDetail:n}),isConstellationComplete:n=>e().discoveredConstellations.includes(n),getProgress:()=>{const n=e(),i=Il.length+Ms.length;return{constellations:n.discoveredConstellations.length,totalConstellations:ot.length,achievements:n.unlockedAchievements.length,totalAchievements:i,logs:n.observationLogs.length,seasonRewardsClaimed:n.seasonRewardsClaimed.length,totalSeasonRewards:Object.keys(Vt).length*Object.keys(Yn).length}},resetProgress:()=>t({discoveredConstellations:[],discoveredStars:[],connectionPath:[],currentTargetConstellation:null,mistakes:0,totalMistakes:0,perfectRun:!0,observationLogs:[],unlockedAchievements:[],seasonProgress:{spring:{beginner:!1,intermediate:!1,master:!1},summer:{beginner:!1,intermediate:!1,master:!1},autumn:{beginner:!1,intermediate:!1,master:!1},winter:{beginner:!1,intermediate:!1,master:!1}},seasonRewardsUnlocked:[],seasonRewardsClaimed:[],perfectObservations:{},totalObservations:{},seasonHistory:[],favoriteConstellations:[]})}),{name:np.PROGRESS,storage:Hy,partialize:t=>({settings:t.settings,discoveredConstellations:t.discoveredConstellations,discoveredStars:t.discoveredStars,observationLogs:t.observationLogs,unlockedAchievements:t.unlockedAchievements,totalMistakes:t.totalMistakes,seasonProgress:t.seasonProgress,seasonRewardsUnlocked:t.seasonRewardsUnlocked,seasonRewardsClaimed:t.seasonRewardsClaimed,perfectObservations:t.perfectObservations,totalObservations:t.totalObservations,seasonHistory:t.seasonHistory,favoriteConstellations:t.favoriteConstellations})}));/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Af="165",Vy=0,ip=1,Gy=2,J0=1,jy=2,ai=3,qi=0,an=1,ci=2,ji=0,Es=1,ps=2,rp=3,sp=4,Wy=5,pr=100,Xy=101,$y=102,Yy=103,qy=104,Ky=200,Zy=201,Qy=202,Jy=203,Sd=204,Md=205,eS=206,tS=207,nS=208,iS=209,rS=210,sS=211,aS=212,oS=213,lS=214,cS=0,uS=1,dS=2,Fl=3,fS=4,hS=5,pS=6,mS=7,ev=0,gS=1,vS=2,Wi=0,xS=1,_S=2,yS=3,SS=4,MS=5,ES=6,wS=7,tv=300,Is=301,Fs=302,Ed=303,wd=304,cc=306,Td=1e3,_r=1001,bd=1002,wn=1003,TS=1004,_o=1005,Fn=1006,Xc=1007,yr=1008,Ki=1009,bS=1010,CS=1011,Ol=1012,nv=1013,Os=1014,Ii=1015,uc=1016,iv=1017,rv=1018,ks=1020,AS=35902,RS=1021,PS=1022,Kn=1023,NS=1024,LS=1025,ws=1026,zs=1027,DS=1028,sv=1029,US=1030,av=1031,ov=1033,$c=33776,Yc=33777,qc=33778,Kc=33779,ap=35840,op=35841,lp=35842,cp=35843,up=36196,dp=37492,fp=37496,hp=37808,pp=37809,mp=37810,gp=37811,vp=37812,xp=37813,_p=37814,yp=37815,Sp=37816,Mp=37817,Ep=37818,wp=37819,Tp=37820,bp=37821,Zc=36492,Cp=36494,Ap=36495,IS=36283,Rp=36284,Pp=36285,Np=36286,FS=3200,OS=3201,kS=0,zS=1,Li="",Un="srgb",tr="srgb-linear",Rf="display-p3",dc="display-p3-linear",kl="linear",st="srgb",zl="rec709",Bl="p3",Ir=7680,Lp=519,BS=512,HS=513,VS=514,lv=515,GS=516,jS=517,WS=518,XS=519,Cd=35044,Dp="300 es",fi=2e3,Hl=2001;class js{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qc=Math.PI/180,Ad=180/Math.PI;function Xi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function en(t,e,n){return Math.max(e,Math.min(n,t))}function $S(t,e){return(t%e+e)%e}function Jc(t,e,n){return(1-n)*t+n*e}function qn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(e=0,n=0){Ue.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(e,n,i,r,s,a,o,l,c){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],g=i[5],y=i[8],_=r[0],m=r[3],u=r[6],v=r[1],x=r[4],M=r[7],R=r[2],C=r[5],b=r[8];return s[0]=a*_+o*v+l*R,s[3]=a*m+o*x+l*C,s[6]=a*u+o*M+l*b,s[1]=c*_+f*v+h*R,s[4]=c*m+f*x+h*C,s[7]=c*u+f*M+h*b,s[2]=d*_+g*v+y*R,s[5]=d*m+g*x+y*C,s[8]=d*u+g*M+y*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,d=o*l-f*s,g=c*s-a*l,y=n*h+i*d+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=h*_,e[1]=(r*c-f*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(f*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=g*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(eu.makeScale(e,n)),this}rotate(e){return this.premultiply(eu.makeRotation(-e)),this}translate(e,n){return this.premultiply(eu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const eu=new Pe;function cv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Vl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function YS(){const t=Vl("canvas");return t.style.display="block",t}const Up={};function Pf(t){t in Up||(Up[t]=!0,console.warn(t))}function qS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Ip=new Pe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fp=new Pe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yo={[tr]:{transfer:kl,primaries:zl,toReference:t=>t,fromReference:t=>t},[Un]:{transfer:st,primaries:zl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[dc]:{transfer:kl,primaries:Bl,toReference:t=>t.applyMatrix3(Fp),fromReference:t=>t.applyMatrix3(Ip)},[Rf]:{transfer:st,primaries:Bl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Fp),fromReference:t=>t.applyMatrix3(Ip).convertLinearToSRGB()}},KS=new Set([tr,dc]),Qe={enabled:!0,_workingColorSpace:tr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!KS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=yo[e].toReference,r=yo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return yo[t].primaries},getTransfer:function(t){return t===Li?kl:yo[t].transfer}};function Ts(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function tu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Fr;class ZS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fr===void 0&&(Fr=Vl("canvas")),Fr.width=e.width,Fr.height=e.height;const i=Fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ts(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ts(n[i]/255)*255):n[i]=Ts(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let QS=0;class uv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(nu(r[a].image)):s.push(nu(r[a]))}else s=nu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function nu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ZS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let JS=0;class Kt extends js{constructor(e=Kt.DEFAULT_IMAGE,n=Kt.DEFAULT_MAPPING,i=_r,r=_r,s=Fn,a=yr,o=Kn,l=Ki,c=Kt.DEFAULT_ANISOTROPY,f=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Xi(),this.name="",this.source=new uv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Td:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Td:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=tv;Kt.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],g=l[5],y=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-_)<.01&&Math.abs(y-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+_)<.1&&Math.abs(y+m)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,M=(g+1)/2,R=(u+1)/2,C=(f+d)/4,b=(h+_)/4,N=(y+m)/4;return x>M&&x>R?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=b/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=N/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=b/s,r=N/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-y)*(m-y)+(h-_)*(h-_)+(d-f)*(d-f));return Math.abs(v)<.001&&(v=1),this.x=(m-y)/v,this.y=(h-_)/v,this.z=(d-f)/v,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eM extends js{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new uv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends eM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class dv extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tM extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $a{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const d=s[a+0],g=s[a+1],y=s[a+2],_=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h;return}if(o===1){e[n+0]=d,e[n+1]=g,e[n+2]=y,e[n+3]=_;return}if(h!==_||l!==d||c!==g||f!==y){let m=1-o;const u=l*d+c*g+f*y+h*_,v=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const R=Math.sqrt(x),C=Math.atan2(R,u*v);m=Math.sin(m*C)/R,o=Math.sin(o*C)/R}const M=o*v;if(l=l*m+d*M,c=c*m+g*M,f=f*m+y*M,h=h*m+_*M,m===1-o){const R=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=R,c*=R,f*=R,h*=R}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[a],d=s[a+1],g=s[a+2],y=s[a+3];return e[n]=o*y+f*h+l*g-c*d,e[n+1]=l*y+f*d+c*h-o*g,e[n+2]=c*y+f*g+o*d-l*h,e[n+3]=f*y-o*h-l*d-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),h=o(s/2),d=l(i/2),g=l(r/2),y=l(s/2);switch(a){case"XYZ":this._x=d*f*h+c*g*y,this._y=c*g*h-d*f*y,this._z=c*f*y+d*g*h,this._w=c*f*h-d*g*y;break;case"YXZ":this._x=d*f*h+c*g*y,this._y=c*g*h-d*f*y,this._z=c*f*y-d*g*h,this._w=c*f*h+d*g*y;break;case"ZXY":this._x=d*f*h-c*g*y,this._y=c*g*h+d*f*y,this._z=c*f*y+d*g*h,this._w=c*f*h-d*g*y;break;case"ZYX":this._x=d*f*h-c*g*y,this._y=c*g*h+d*f*y,this._z=c*f*y-d*g*h,this._w=c*f*h+d*g*y;break;case"YZX":this._x=d*f*h+c*g*y,this._y=c*g*h+d*f*y,this._z=c*f*y-d*g*h,this._w=c*f*h-d*g*y;break;case"XZY":this._x=d*f*h-c*g*y,this._y=c*g*h-d*f*y,this._z=c*f*y+d*g*h,this._w=c*f*h+d*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+o+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>h){const g=2*Math.sqrt(1+i-o-h);this._w=(f-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>h){const g=2*Math.sqrt(1+o-i-h);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+h-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),h=Math.sin((1-n)*f)/c,d=Math.sin(n*f)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Op.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Op.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*f,this.y=i+l*f+o*c-s*h,this.z=r+l*h+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return iu.copy(this).projectOnVector(e),this.sub(iu)}reflect(e){return this.sub(iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const iu=new B,Op=new $a;class Ya{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Rn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Rn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Rn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(s,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(e.matrixWorld),this.union(So)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ea),Mo.subVectors(this.max,ea),Or.subVectors(e.a,ea),kr.subVectors(e.b,ea),zr.subVectors(e.c,ea),Mi.subVectors(kr,Or),Ei.subVectors(zr,kr),rr.subVectors(Or,zr);let n=[0,-Mi.z,Mi.y,0,-Ei.z,Ei.y,0,-rr.z,rr.y,Mi.z,0,-Mi.x,Ei.z,0,-Ei.x,rr.z,0,-rr.x,-Mi.y,Mi.x,0,-Ei.y,Ei.x,0,-rr.y,rr.x,0];return!ru(n,Or,kr,zr,Mo)||(n=[1,0,0,0,1,0,0,0,1],!ru(n,Or,kr,zr,Mo))?!1:(Eo.crossVectors(Mi,Ei),n=[Eo.x,Eo.y,Eo.z],ru(n,Or,kr,zr,Mo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new B,new B,new B,new B,new B,new B,new B,new B],Rn=new B,So=new Ya,Or=new B,kr=new B,zr=new B,Mi=new B,Ei=new B,rr=new B,ea=new B,Mo=new B,Eo=new B,sr=new B;function ru(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){sr.fromArray(t,s);const o=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),l=e.dot(sr),c=n.dot(sr),f=i.dot(sr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const nM=new Ya,ta=new B,su=new B;class qa{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):nM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ta.subVectors(e,this.center);const n=ta.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ta,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ta.copy(e.center).add(su)),this.expandByPoint(ta.copy(e.center).sub(su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new B,au=new B,wo=new B,wi=new B,ou=new B,To=new B,lu=new B;class fc{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,n),ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){au.copy(e).add(n).multiplyScalar(.5),wo.copy(n).sub(e).normalize(),wi.copy(this.origin).sub(au);const s=e.distanceTo(n)*.5,a=-this.direction.dot(wo),o=wi.dot(this.direction),l=-wi.dot(wo),c=wi.lengthSq(),f=Math.abs(1-a*a);let h,d,g,y;if(f>0)if(h=a*l-o,d=a*o-l,y=s*f,h>=0)if(d>=-y)if(d<=y){const _=1/f;h*=_,d*=_,g=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*l)+c;else d<=-y?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c):d<=y?(h=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(au).addScaledVector(wo,d),g}intersectSphere(e,n){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,n,i,r,s){ou.subVectors(n,e),To.subVectors(i,e),lu.crossVectors(ou,To);let a=this.direction.dot(lu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wi.subVectors(this.origin,e);const l=o*this.direction.dot(To.crossVectors(wi,To));if(l<0)return null;const c=o*this.direction.dot(ou.cross(wi));if(c<0||l+c>a)return null;const f=-o*wi.dot(lu);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,n,i,r,s,a,o,l,c,f,h,d,g,y,_,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,h,d,g,y,_,m)}set(e,n,i,r,s,a,o,l,c,f,h,d,g,y,_,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=g,u[7]=y,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Br.setFromMatrixColumn(e,0).length(),s=1/Br.setFromMatrixColumn(e,1).length(),a=1/Br.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*f,g=a*h,y=o*f,_=o*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=g+y*c,n[5]=d-_*c,n[9]=-o*l,n[2]=_-d*c,n[6]=y+g*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*f,g=l*h,y=c*f,_=c*h;n[0]=d+_*o,n[4]=y*o-g,n[8]=a*c,n[1]=a*h,n[5]=a*f,n[9]=-o,n[2]=g*o-y,n[6]=_+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*f,g=l*h,y=c*f,_=c*h;n[0]=d-_*o,n[4]=-a*h,n[8]=y+g*o,n[1]=g+y*o,n[5]=a*f,n[9]=_-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*f,g=a*h,y=o*f,_=o*h;n[0]=l*f,n[4]=y*c-g,n[8]=d*c+_,n[1]=l*h,n[5]=_*c+d,n[9]=g*c-y,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,g=a*c,y=o*l,_=o*c;n[0]=l*f,n[4]=_-d*h,n[8]=y*h+g,n[1]=h,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=g*h+y,n[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,g=a*c,y=o*l,_=o*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+_,n[5]=a*f,n[9]=g*h-y,n[2]=y*h-g,n[6]=o*f,n[10]=_*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iM,e,rM)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Ti.crossVectors(i,cn),Ti.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Ti.crossVectors(i,cn)),Ti.normalize(),bo.crossVectors(cn,Ti),r[0]=Ti.x,r[4]=bo.x,r[8]=cn.x,r[1]=Ti.y,r[5]=bo.y,r[9]=cn.y,r[2]=Ti.z,r[6]=bo.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],g=i[13],y=i[2],_=i[6],m=i[10],u=i[14],v=i[3],x=i[7],M=i[11],R=i[15],C=r[0],b=r[4],N=r[8],T=r[12],S=r[1],D=r[5],O=r[9],k=r[13],P=r[2],H=r[6],V=r[10],$=r[14],L=r[3],X=r[7],Z=r[11],ae=r[15];return s[0]=a*C+o*S+l*P+c*L,s[4]=a*b+o*D+l*H+c*X,s[8]=a*N+o*O+l*V+c*Z,s[12]=a*T+o*k+l*$+c*ae,s[1]=f*C+h*S+d*P+g*L,s[5]=f*b+h*D+d*H+g*X,s[9]=f*N+h*O+d*V+g*Z,s[13]=f*T+h*k+d*$+g*ae,s[2]=y*C+_*S+m*P+u*L,s[6]=y*b+_*D+m*H+u*X,s[10]=y*N+_*O+m*V+u*Z,s[14]=y*T+_*k+m*$+u*ae,s[3]=v*C+x*S+M*P+R*L,s[7]=v*b+x*D+M*H+R*X,s[11]=v*N+x*O+M*V+R*Z,s[15]=v*T+x*k+M*$+R*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],g=e[14],y=e[3],_=e[7],m=e[11],u=e[15];return y*(+s*l*h-r*c*h-s*o*d+i*c*d+r*o*g-i*l*g)+_*(+n*l*g-n*c*d+s*a*d-r*a*g+r*c*f-s*l*f)+m*(+n*c*h-n*o*g-s*a*h+i*a*g+s*o*f-i*c*f)+u*(-r*o*f-n*l*h+n*o*d+r*a*h-i*a*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],g=e[11],y=e[12],_=e[13],m=e[14],u=e[15],v=h*m*c-_*d*c+_*l*g-o*m*g-h*l*u+o*d*u,x=y*d*c-f*m*c-y*l*g+a*m*g+f*l*u-a*d*u,M=f*_*c-y*h*c+y*o*g-a*_*g-f*o*u+a*h*u,R=y*h*l-f*_*l-y*o*d+a*_*d+f*o*m-a*h*m,C=n*v+i*x+r*M+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=v*b,e[1]=(_*d*s-h*m*s-_*r*g+i*m*g+h*r*u-i*d*u)*b,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*u+i*l*u)*b,e[3]=(h*l*s-o*d*s-h*r*c+i*d*c+o*r*g-i*l*g)*b,e[4]=x*b,e[5]=(f*m*s-y*d*s+y*r*g-n*m*g-f*r*u+n*d*u)*b,e[6]=(y*l*s-a*m*s-y*r*c+n*m*c+a*r*u-n*l*u)*b,e[7]=(a*d*s-f*l*s+f*r*c-n*d*c-a*r*g+n*l*g)*b,e[8]=M*b,e[9]=(y*h*s-f*_*s-y*i*g+n*_*g+f*i*u-n*h*u)*b,e[10]=(a*_*s-y*o*s+y*i*c-n*_*c-a*i*u+n*o*u)*b,e[11]=(f*o*s-a*h*s-f*i*c+n*h*c+a*i*g-n*o*g)*b,e[12]=R*b,e[13]=(f*_*r-y*h*r+y*i*d-n*_*d-f*i*m+n*h*m)*b,e[14]=(y*o*r-a*_*r-y*i*l+n*_*l+a*i*m-n*o*m)*b,e[15]=(a*h*r-f*o*r+f*i*l-n*h*l-a*i*d+n*o*d)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,h=o+o,d=s*c,g=s*f,y=s*h,_=a*f,m=a*h,u=o*h,v=l*c,x=l*f,M=l*h,R=i.x,C=i.y,b=i.z;return r[0]=(1-(_+u))*R,r[1]=(g+M)*R,r[2]=(y-x)*R,r[3]=0,r[4]=(g-M)*C,r[5]=(1-(d+u))*C,r[6]=(m+v)*C,r[7]=0,r[8]=(y+x)*b,r[9]=(m-v)*b,r[10]=(1-(d+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Br.set(r[0],r[1],r[2]).length();const a=Br.set(r[4],r[5],r[6]).length(),o=Br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Pn.copy(this);const c=1/s,f=1/a,h=1/o;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=f,Pn.elements[5]*=f,Pn.elements[6]*=f,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,n.setFromRotationMatrix(Pn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=fi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let g,y;if(o===fi)g=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===Hl)g=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=fi){const l=this.elements,c=1/(n-e),f=1/(i-r),h=1/(a-s),d=(n+e)*c,g=(i+r)*f;let y,_;if(o===fi)y=(a+s)*h,_=-2*h;else if(o===Hl)y=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Br=new B,Pn=new ft,iM=new B(0,0,0),rM=new B(1,1,1),Ti=new B,bo=new B,cn=new B,kp=new ft,zp=new $a;class xi{constructor(e=0,n=0,i=0,r=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return zp.setFromEuler(this),this.setFromQuaternion(zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class Nf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sM=0;const Bp=new B,Hr=new $a,ii=new ft,Co=new B,na=new B,aM=new B,oM=new $a,Hp=new B(1,0,0),Vp=new B(0,1,0),Gp=new B(0,0,1),jp={type:"added"},lM={type:"removed"},Vr={type:"childadded",child:null},cu={type:"childremoved",child:null};class Gt extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new B,n=new xi,i=new $a,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Pe}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(Hp,e)}rotateY(e){return this.rotateOnAxis(Vp,e)}rotateZ(e){return this.rotateOnAxis(Gp,e)}translateOnAxis(e,n){return Bp.copy(e).applyQuaternion(this.quaternion),this.position.add(Bp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Hp,e)}translateY(e){return this.translateOnAxis(Vp,e)}translateZ(e){return this.translateOnAxis(Gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Co.copy(e):Co.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(na,Co,this.up):ii.lookAt(Co,na,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(ii),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jp),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(lM),cu.child=e,this.dispatchEvent(cu),cu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jp),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,e,aM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,oM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),g=a(e.animations),y=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new B(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new B,ri=new B,uu=new B,si=new B,Gr=new B,jr=new B,Wp=new B,du=new B,fu=new B,hu=new B;class On{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Nn.subVectors(e,n),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Nn.subVectors(r,n),ri.subVectors(i,n),uu.subVectors(e,n);const a=Nn.dot(Nn),o=Nn.dot(ri),l=Nn.dot(uu),c=ri.dot(ri),f=ri.dot(uu),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,g=(c*l-o*f)*d,y=(a*f-o*l)*d;return s.set(1-g-y,y,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l)}static isFrontFacing(e,n,i,r){return Nn.subVectors(i,n),ri.subVectors(e,n),Nn.cross(ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Nn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return On.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Gr.subVectors(r,i),jr.subVectors(s,i),du.subVectors(e,i);const l=Gr.dot(du),c=jr.dot(du);if(l<=0&&c<=0)return n.copy(i);fu.subVectors(e,r);const f=Gr.dot(fu),h=jr.dot(fu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(Gr,a);hu.subVectors(e,s);const g=Gr.dot(hu),y=jr.dot(hu);if(y>=0&&g<=y)return n.copy(s);const _=g*c-l*y;if(_<=0&&c>=0&&y<=0)return o=c/(c-y),n.copy(i).addScaledVector(jr,o);const m=f*y-g*h;if(m<=0&&h-f>=0&&g-y>=0)return Wp.subVectors(s,r),o=(h-f)/(h-f+(g-y)),n.copy(r).addScaledVector(Wp,o);const u=1/(m+_+d);return a=_*u,o=d*u,n.copy(i).addScaledVector(Gr,a).addScaledVector(jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function pu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Oe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=$S(e,1),n=en(n,0,1),i=en(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=pu(a,s,e+1/3),this.g=pu(a,s,e),this.b=pu(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Un){const i=fv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=tu(e.r),this.g=tu(e.g),this.b=tu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return Qe.fromWorkingColorSpace(Bt.copy(this),e),Math.round(en(Bt.r*255,0,255))*65536+Math.round(en(Bt.g*255,0,255))*256+Math.round(en(Bt.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,s=Bt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Un){Qe.fromWorkingColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==Un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+n,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(bi),e.getHSL(Ao);const i=Jc(bi.h,Ao.h,n),r=Jc(bi.s,Ao.s,n),s=Jc(bi.l,Ao.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Oe;Oe.NAMES=fv;let cM=0;class Lr extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=Es,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=Md,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sd&&(i.blendSrc=this.blendSrc),this.blendDst!==Md&&(i.blendDst=this.blendDst),this.blendEquation!==pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Lf extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=ev,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new B,Ro=new Ue;class on{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Cd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Pf("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ro.fromBufferAttribute(this,n),Ro.applyMatrix3(e),this.setXY(n,Ro.x,Ro.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=qn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qn(n,this.array)),n}setX(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qn(n,this.array)),n}setY(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qn(n,this.array)),n}setW(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cd&&(e.usage=this.usage),e}}class hv extends on{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class pv extends on{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Bn extends on{constructor(e,n,i){super(new Float32Array(e),n,i)}}let uM=0;const _n=new ft,mu=new Gt,Wr=new B,un=new Ya,ia=new Ya,Rt=new B;class mn extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cv(e)?pv:hv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Pe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,n,i){return _n.makeTranslation(e,n,i),this.applyMatrix4(_n),this}scale(e,n,i){return _n.makeScale(e,n,i),this.applyMatrix4(_n),this}lookAt(e){return mu.lookAt(e),mu.updateMatrix(),this.applyMatrix4(mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Bn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ia.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(un.min,ia.min),un.expandByPoint(Rt),Rt.addVectors(un.max,ia.max),un.expandByPoint(Rt)):(un.expandByPoint(ia.min),un.expandByPoint(ia.max))}un.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Rt.fromBufferAttribute(o,c),l&&(Wr.fromBufferAttribute(e,c),Rt.add(Wr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new B,l[N]=new B;const c=new B,f=new B,h=new B,d=new Ue,g=new Ue,y=new Ue,_=new B,m=new B;function u(N,T,S){c.fromBufferAttribute(i,N),f.fromBufferAttribute(i,T),h.fromBufferAttribute(i,S),d.fromBufferAttribute(s,N),g.fromBufferAttribute(s,T),y.fromBufferAttribute(s,S),f.sub(c),h.sub(c),g.sub(d),y.sub(d);const D=1/(g.x*y.y-y.x*g.y);isFinite(D)&&(_.copy(f).multiplyScalar(y.y).addScaledVector(h,-g.y).multiplyScalar(D),m.copy(h).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(D),o[N].add(_),o[T].add(_),o[S].add(_),l[N].add(m),l[T].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let N=0,T=v.length;N<T;++N){const S=v[N],D=S.start,O=S.count;for(let k=D,P=D+O;k<P;k+=3)u(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const x=new B,M=new B,R=new B,C=new B;function b(N){R.fromBufferAttribute(r,N),C.copy(R);const T=o[N];x.copy(T),x.sub(R.multiplyScalar(R.dot(T))).normalize(),M.crossVectors(C,T);const D=M.dot(l[N])<0?-1:1;a.setXYZW(N,x.x,x.y,x.z,D)}for(let N=0,T=v.length;N<T;++N){const S=v[N],D=S.start,O=S.count;for(let k=D,P=D+O;k<P;k+=3)b(e.getX(k+0)),b(e.getX(k+1)),b(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,f=new B,h=new B;if(e)for(let d=0,g=e.count;d<g;d+=3){const y=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,g=n.count;d<g;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,h=o.normalized,d=new c.constructor(l.length*f);let g=0,y=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?g=l[_]*o.data.stride+o.offset:g=l[_]*f;for(let u=0;u<f;u++)d[y++]=c[g++]}return new on(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,h=c.length;f<h;f++){const d=c[f],g=e(d,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const g=c[h];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,g=h.length;d<g;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xp=new ft,ar=new fc,Po=new qa,$p=new B,Xr=new B,$r=new B,Yr=new B,gu=new B,No=new B,Lo=new Ue,Do=new Ue,Uo=new Ue,Yp=new B,qp=new B,Kp=new B,Io=new B,Fo=new B;class Zn extends Gt{constructor(e=new mn,n=new Lf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){No.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],h=s[l];f!==0&&(gu.fromBufferAttribute(h,e),a?No.addScaledVector(gu,f):No.addScaledVector(gu.sub(n),f))}n.add(No)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(Po.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Po,$p)===null||ar.origin.distanceToSquared($p)>(e.far-e.near)**2))&&(Xp.copy(s).invert(),ar.copy(e.ray).applyMatrix4(Xp),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,_=d.length;y<_;y++){const m=d[y],u=a[m.materialIndex],v=Math.max(m.start,g.start),x=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let M=v,R=x;M<R;M+=3){const C=o.getX(M),b=o.getX(M+1),N=o.getX(M+2);r=Oo(this,u,e,i,c,f,h,C,b,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),_=Math.min(o.count,g.start+g.count);for(let m=y,u=_;m<u;m+=3){const v=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);r=Oo(this,a,e,i,c,f,h,v,x,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,_=d.length;y<_;y++){const m=d[y],u=a[m.materialIndex],v=Math.max(m.start,g.start),x=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let M=v,R=x;M<R;M+=3){const C=M,b=M+1,N=M+2;r=Oo(this,u,e,i,c,f,h,C,b,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let m=y,u=_;m<u;m+=3){const v=m,x=m+1,M=m+2;r=Oo(this,a,e,i,c,f,h,v,x,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function dM(t,e,n,i,r,s,a,o){let l;if(e.side===an?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===qi,o),l===null)return null;Fo.copy(o),Fo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Fo);return c<n.near||c>n.far?null:{distance:c,point:Fo.clone(),object:t}}function Oo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Xr),t.getVertexPosition(l,$r),t.getVertexPosition(c,Yr);const f=dM(t,e,n,i,Xr,$r,Yr,Io);if(f){r&&(Lo.fromBufferAttribute(r,o),Do.fromBufferAttribute(r,l),Uo.fromBufferAttribute(r,c),f.uv=On.getInterpolation(Io,Xr,$r,Yr,Lo,Do,Uo,new Ue)),s&&(Lo.fromBufferAttribute(s,o),Do.fromBufferAttribute(s,l),Uo.fromBufferAttribute(s,c),f.uv1=On.getInterpolation(Io,Xr,$r,Yr,Lo,Do,Uo,new Ue)),a&&(Yp.fromBufferAttribute(a,o),qp.fromBufferAttribute(a,l),Kp.fromBufferAttribute(a,c),f.normal=On.getInterpolation(Io,Xr,$r,Yr,Yp,qp,Kp,new B),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new B,materialIndex:0};On.getNormal(Xr,$r,Yr,h.normal),f.face=h}return f}class Ka extends mn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],h=[];let d=0,g=0;y("z","y","x",-1,-1,i,n,e,a,s,0),y("z","y","x",1,-1,i,n,-e,a,s,1),y("x","z","y",1,1,e,i,n,r,a,2),y("x","z","y",1,-1,e,i,-n,r,a,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Bn(c,3)),this.setAttribute("normal",new Bn(f,3)),this.setAttribute("uv",new Bn(h,2));function y(_,m,u,v,x,M,R,C,b,N,T){const S=M/b,D=R/N,O=M/2,k=R/2,P=C/2,H=b+1,V=N+1;let $=0,L=0;const X=new B;for(let Z=0;Z<V;Z++){const ae=Z*D-k;for(let _e=0;_e<H;_e++){const Ge=_e*S-O;X[_]=Ge*v,X[m]=ae*x,X[u]=P,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[u]=C>0?1:-1,f.push(X.x,X.y,X.z),h.push(_e/b),h.push(1-Z/N),$+=1}}for(let Z=0;Z<N;Z++)for(let ae=0;ae<b;ae++){const _e=d+ae+H*Z,Ge=d+ae+H*(Z+1),Y=d+(ae+1)+H*(Z+1),ne=d+(ae+1)+H*Z;l.push(_e,Ge,ne),l.push(Ge,Y,ne),L+=6}o.addGroup(g,L,T),g+=L,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=Bs(t[n]);for(const r in i)e[r]=i[r]}return e}function fM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function mv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const hM={clone:Bs,merge:$t};var pM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pM,this.fragmentShader=mM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=fM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class gv extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new B,Zp=new Ue,Qp=new Ue;class Mn extends gv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ad*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ad*2*Math.atan(Math.tan(Qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,n){return this.getViewBounds(e,Zp,Qp),n.subVectors(Qp,Zp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Qc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const qr=-90,Kr=1;class gM extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(qr,Kr,e,n);r.layers=this.layers,this.add(r);const s=new Mn(qr,Kr,e,n);s.layers=this.layers,this.add(s);const a=new Mn(qr,Kr,e,n);a.layers=this.layers,this.add(a);const o=new Mn(qr,Kr,e,n);o.layers=this.layers,this.add(o);const l=new Mn(qr,Kr,e,n);l.layers=this.layers,this.add(l);const c=new Mn(qr,Kr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,g),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class vv extends Kt{constructor(e,n,i,r,s,a,o,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Is,super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vM extends Rr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new vv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Fn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ka(5,5,5),s=new Zi({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:ji});s.uniforms.tEquirect.value=n;const a=new Zn(r,s),o=n.minFilter;return n.minFilter===yr&&(n.minFilter=Fn),new gM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const vu=new B,xM=new B,_M=new Pe;class fr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=vu.subVectors(i,n).cross(xM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(vu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||_M.getNormalMatrix(e),r=this.coplanarPoint(vu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new qa,ko=new B;class xv{constructor(e=new fr,n=new fr,i=new fr,r=new fr,s=new fr,a=new fr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],f=r[5],h=r[6],d=r[7],g=r[8],y=r[9],_=r[10],m=r[11],u=r[12],v=r[13],x=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,m-g,M-u).normalize(),i[1].setComponents(l+s,d+c,m+g,M+u).normalize(),i[2].setComponents(l+a,d+f,m+y,M+v).normalize(),i[3].setComponents(l-a,d-f,m-y,M-v).normalize(),i[4].setComponents(l-o,d-h,m-_,M-x).normalize(),n===fi)i[5].setComponents(l+o,d+h,m+_,M+x).normalize();else if(n===Hl)i[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ko.x=r.normal.x>0?e.max.x:e.min.x,ko.y=r.normal.y>0?e.max.y:e.min.y,ko.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _v(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function yM(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),o.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const f=l.array,h=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,o),h.count===-1&&d.length===0&&t.bufferSubData(c,0,f),d.length!==0){for(let g=0,y=d.length;g<y;g++){const _=d[g];t.bufferSubData(c,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(c,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class hc extends mn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,h=e/o,d=n/l,g=[],y=[],_=[],m=[];for(let u=0;u<f;u++){const v=u*d-a;for(let x=0;x<c;x++){const M=x*h-s;y.push(M,-v,0),_.push(0,0,1),m.push(x/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const x=v+c*u,M=v+c*(u+1),R=v+1+c*(u+1),C=v+1+c*u;g.push(x,M,C),g.push(M,R,C)}this.setIndex(g),this.setAttribute("position",new Bn(y,3)),this.setAttribute("normal",new Bn(_,3)),this.setAttribute("uv",new Bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.width,e.height,e.widthSegments,e.heightSegments)}}var SM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,EM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,AM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,PM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,NM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,UM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,IM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,jM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,WM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$M=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZM="gl_FragColor = linearToOutputTexel( gl_FragColor );",QM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,JM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_E=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ME=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,PE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,OE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,BE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$E=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,KE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ew=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,iw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ow=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_w=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ew=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Aw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Iw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ow=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ww=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$w=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Re={alphahash_fragment:SM,alphahash_pars_fragment:MM,alphamap_fragment:EM,alphamap_pars_fragment:wM,alphatest_fragment:TM,alphatest_pars_fragment:bM,aomap_fragment:CM,aomap_pars_fragment:AM,batching_pars_vertex:RM,batching_vertex:PM,begin_vertex:NM,beginnormal_vertex:LM,bsdfs:DM,iridescence_fragment:UM,bumpmap_pars_fragment:IM,clipping_planes_fragment:FM,clipping_planes_pars_fragment:OM,clipping_planes_pars_vertex:kM,clipping_planes_vertex:zM,color_fragment:BM,color_pars_fragment:HM,color_pars_vertex:VM,color_vertex:GM,common:jM,cube_uv_reflection_fragment:WM,defaultnormal_vertex:XM,displacementmap_pars_vertex:$M,displacementmap_vertex:YM,emissivemap_fragment:qM,emissivemap_pars_fragment:KM,colorspace_fragment:ZM,colorspace_pars_fragment:QM,envmap_fragment:JM,envmap_common_pars_fragment:eE,envmap_pars_fragment:tE,envmap_pars_vertex:nE,envmap_physical_pars_fragment:hE,envmap_vertex:iE,fog_vertex:rE,fog_pars_vertex:sE,fog_fragment:aE,fog_pars_fragment:oE,gradientmap_pars_fragment:lE,lightmap_pars_fragment:cE,lights_lambert_fragment:uE,lights_lambert_pars_fragment:dE,lights_pars_begin:fE,lights_toon_fragment:pE,lights_toon_pars_fragment:mE,lights_phong_fragment:gE,lights_phong_pars_fragment:vE,lights_physical_fragment:xE,lights_physical_pars_fragment:_E,lights_fragment_begin:yE,lights_fragment_maps:SE,lights_fragment_end:ME,logdepthbuf_fragment:EE,logdepthbuf_pars_fragment:wE,logdepthbuf_pars_vertex:TE,logdepthbuf_vertex:bE,map_fragment:CE,map_pars_fragment:AE,map_particle_fragment:RE,map_particle_pars_fragment:PE,metalnessmap_fragment:NE,metalnessmap_pars_fragment:LE,morphinstance_vertex:DE,morphcolor_vertex:UE,morphnormal_vertex:IE,morphtarget_pars_vertex:FE,morphtarget_vertex:OE,normal_fragment_begin:kE,normal_fragment_maps:zE,normal_pars_fragment:BE,normal_pars_vertex:HE,normal_vertex:VE,normalmap_pars_fragment:GE,clearcoat_normal_fragment_begin:jE,clearcoat_normal_fragment_maps:WE,clearcoat_pars_fragment:XE,iridescence_pars_fragment:$E,opaque_fragment:YE,packing:qE,premultiplied_alpha_fragment:KE,project_vertex:ZE,dithering_fragment:QE,dithering_pars_fragment:JE,roughnessmap_fragment:ew,roughnessmap_pars_fragment:tw,shadowmap_pars_fragment:nw,shadowmap_pars_vertex:iw,shadowmap_vertex:rw,shadowmask_pars_fragment:sw,skinbase_vertex:aw,skinning_pars_vertex:ow,skinning_vertex:lw,skinnormal_vertex:cw,specularmap_fragment:uw,specularmap_pars_fragment:dw,tonemapping_fragment:fw,tonemapping_pars_fragment:hw,transmission_fragment:pw,transmission_pars_fragment:mw,uv_pars_fragment:gw,uv_pars_vertex:vw,uv_vertex:xw,worldpos_vertex:_w,background_vert:yw,background_frag:Sw,backgroundCube_vert:Mw,backgroundCube_frag:Ew,cube_vert:ww,cube_frag:Tw,depth_vert:bw,depth_frag:Cw,distanceRGBA_vert:Aw,distanceRGBA_frag:Rw,equirect_vert:Pw,equirect_frag:Nw,linedashed_vert:Lw,linedashed_frag:Dw,meshbasic_vert:Uw,meshbasic_frag:Iw,meshlambert_vert:Fw,meshlambert_frag:Ow,meshmatcap_vert:kw,meshmatcap_frag:zw,meshnormal_vert:Bw,meshnormal_frag:Hw,meshphong_vert:Vw,meshphong_frag:Gw,meshphysical_vert:jw,meshphysical_frag:Ww,meshtoon_vert:Xw,meshtoon_frag:$w,points_vert:Yw,points_frag:qw,shadow_vert:Kw,shadow_frag:Zw,sprite_vert:Qw,sprite_frag:Jw},le={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},Xn={basic:{uniforms:$t([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:$t([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:$t([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:$t([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:$t([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:$t([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:$t([le.points,le.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:$t([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:$t([le.common,le.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:$t([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:$t([le.sprite,le.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:$t([le.common,le.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:$t([le.lights,le.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Xn.physical={uniforms:$t([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const zo={r:0,b:0,g:0},lr=new xi,e1=new ft;function t1(t,e,n,i,r,s,a){const o=new Oe(0);let l=s===!0?0:1,c,f,h=null,d=0,g=null;function y(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?n:e).get(x)),x}function _(v){let x=!1;const M=y(v);M===null?u(o,l):M&&M.isColor&&(u(M,1),x=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,x){const M=y(x);M&&(M.isCubeTexture||M.mapping===cc)?(f===void 0&&(f=new Zn(new Ka(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Bs(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),lr.copy(x.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(e1.makeRotationFromEuler(lr)),f.material.toneMapped=Qe.getTransfer(M.colorSpace)!==st,(h!==M||d!==M.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,h=M,d=M.version,g=t.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Zn(new hc(2,2),new Zi({name:"BackgroundMaterial",uniforms:Bs(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(M.colorSpace)!==st,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,g=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,x){v.getRGB(zo,mv(t)),i.buffers.color.setClear(zo.r,zo.g,zo.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),l=x,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(o,l)},render:_,addToRenderList:m}}function n1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(S,D,O,k,P){let H=!1;const V=h(k,O,D);s!==V&&(s=V,c(s.object)),H=g(S,k,O,P),H&&y(S,k,O,P),P!==null&&e.update(P,t.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,M(S,D,O,k),P!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function f(S){return t.deleteVertexArray(S)}function h(S,D,O){const k=O.wireframe===!0;let P=i[S.id];P===void 0&&(P={},i[S.id]=P);let H=P[D.id];H===void 0&&(H={},P[D.id]=H);let V=H[k];return V===void 0&&(V=d(l()),H[k]=V),V}function d(S){const D=[],O=[],k=[];for(let P=0;P<n;P++)D[P]=0,O[P]=0,k[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:k,object:S,attributes:{},index:null}}function g(S,D,O,k){const P=s.attributes,H=D.attributes;let V=0;const $=O.getAttributes();for(const L in $)if($[L].location>=0){const Z=P[L];let ae=H[L];if(ae===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),Z===void 0||Z.attribute!==ae||ae&&Z.data!==ae.data)return!0;V++}return s.attributesNum!==V||s.index!==k}function y(S,D,O,k){const P={},H=D.attributes;let V=0;const $=O.getAttributes();for(const L in $)if($[L].location>=0){let Z=H[L];Z===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const ae={};ae.attribute=Z,Z&&Z.data&&(ae.data=Z.data),P[L]=ae,V++}s.attributes=P,s.attributesNum=V,s.index=k}function _(){const S=s.newAttributes;for(let D=0,O=S.length;D<O;D++)S[D]=0}function m(S){u(S,0)}function u(S,D){const O=s.newAttributes,k=s.enabledAttributes,P=s.attributeDivisors;O[S]=1,k[S]===0&&(t.enableVertexAttribArray(S),k[S]=1),P[S]!==D&&(t.vertexAttribDivisor(S,D),P[S]=D)}function v(){const S=s.newAttributes,D=s.enabledAttributes;for(let O=0,k=D.length;O<k;O++)D[O]!==S[O]&&(t.disableVertexAttribArray(O),D[O]=0)}function x(S,D,O,k,P,H,V){V===!0?t.vertexAttribIPointer(S,D,O,P,H):t.vertexAttribPointer(S,D,O,k,P,H)}function M(S,D,O,k){_();const P=k.attributes,H=O.getAttributes(),V=D.defaultAttributeValues;for(const $ in H){const L=H[$];if(L.location>=0){let X=P[$];if(X===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(X=S.instanceColor)),X!==void 0){const Z=X.normalized,ae=X.itemSize,_e=e.get(X);if(_e===void 0)continue;const Ge=_e.buffer,Y=_e.type,ne=_e.bytesPerElement,fe=Y===t.INT||Y===t.UNSIGNED_INT||X.gpuType===nv;if(X.isInterleavedBufferAttribute){const oe=X.data,Ie=oe.stride,Ne=X.offset;if(oe.isInstancedInterleavedBuffer){for(let je=0;je<L.locationSize;je++)u(L.location+je,oe.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let je=0;je<L.locationSize;je++)m(L.location+je);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let je=0;je<L.locationSize;je++)x(L.location+je,ae/L.locationSize,Y,Z,Ie*ne,(Ne+ae/L.locationSize*je)*ne,fe)}else{if(X.isInstancedBufferAttribute){for(let oe=0;oe<L.locationSize;oe++)u(L.location+oe,X.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let oe=0;oe<L.locationSize;oe++)m(L.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let oe=0;oe<L.locationSize;oe++)x(L.location+oe,ae/L.locationSize,Y,Z,ae*ne,ae/L.locationSize*oe*ne,fe)}}else if(V!==void 0){const Z=V[$];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(L.location,Z);break;case 3:t.vertexAttrib3fv(L.location,Z);break;case 4:t.vertexAttrib4fv(L.location,Z);break;default:t.vertexAttrib1fv(L.location,Z)}}}}v()}function R(){N();for(const S in i){const D=i[S];for(const O in D){const k=D[O];for(const P in k)f(k[P].object),delete k[P];delete D[O]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const O in D){const k=D[O];for(const P in k)f(k[P].object),delete k[P];delete D[O]}delete i[S.id]}function b(S){for(const D in i){const O=i[D];if(O[S.id]===void 0)continue;const k=O[S.id];for(const P in k)f(k[P].object),delete k[P];delete O[S.id]}}function N(){T(),a=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function i1(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function a(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function o(c,f,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<h;g++)this.render(c[g],f[g]);else{d.multiDrawArraysWEBGL(i,c,0,f,0,h);let g=0;for(let y=0;y<h;y++)g+=f[y];n.update(g,i,1)}}function l(c,f,h,d){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<c.length;y++)a(c[y],f[y],d[y]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,f,0,d,0,h);let y=0;for(let _=0;_<h;_++)y+=f[_];for(let _=0;_<d.length;_++)n.update(y,i,d[_])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function r1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Kn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const b=C===uc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ki&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ii&&!b)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),u=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:u,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:M,maxSamples:R}}function s1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new fr,o=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||i!==0||r;return r=d,i=h.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,g){const y=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||y===null||y.length===0||s&&!m)s?f(null):c();else{const v=s?0:i,x=v*4;let M=u.clippingState||null;l.value=M,M=f(y,d,x,g);for(let R=0;R!==x;++R)M[R]=n[R];u.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,g,y){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,y!==!0||m===null){const u=g+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,M=g;x!==_;++x,M+=4)a.copy(h[x]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function a1(t){let e=new WeakMap;function n(a,o){return o===Ed?a.mapping=Is:o===wd&&(a.mapping=Fs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ed||o===wd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new vM(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class o1 extends gv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ms=4,Jp=[.125,.215,.35,.446,.526,.582],mr=20,xu=new o1,em=new Oe;let _u=null,yu=0,Su=0,Mu=!1;const hr=(1+Math.sqrt(5))/2,Zr=1/hr,tm=[new B(-hr,Zr,0),new B(hr,Zr,0),new B(-Zr,0,hr),new B(Zr,0,hr),new B(0,hr,-Zr),new B(0,hr,Zr),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class nm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){_u=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_u,yu,Su),this._renderer.xr.enabled=Mu,e.scissorTest=!1,Bo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Is||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_u=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:uc,format:Kn,colorSpace:tr,depthBuffer:!1},r=im(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=im(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l1(s)),this._blurMaterial=c1(s,e,n)}return r}_compileMaterial(e){const n=new Zn(this._lodPlanes[0],e);this._renderer.compile(n,xu)}_sceneToCubeUV(e,n,i,r){const o=new Mn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(em),f.toneMapping=Wi,f.autoClear=!1;const g=new Lf({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),y=new Zn(new Ka,g);let _=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,_=!0):(g.color.copy(em),_=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):v===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const x=this._cubeSize;Bo(r,v*x,u>2?x:0,x,x),f.setRenderTarget(r),_&&f.render(y,o),f.render(e,o)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Is||e.mapping===Fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Zn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Bo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,xu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=tm[(r-s-1)%tm.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Zn(this._lodPlanes[r],c),d=c.uniforms,g=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*mr-1),_=s/y,m=isFinite(s)?1+Math.floor(f*_):mr;m>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mr}`);const u=[];let v=0;for(let b=0;b<mr;++b){const N=b/_,T=Math.exp(-N*N/2);u.push(T),b===0?v+=T:b<m&&(v+=2*T)}for(let b=0;b<u.length;b++)u[b]=u[b]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=y,d.mipInt.value=x-i;const M=this._sizeLods[r],R=3*M*(r>x-ms?r-x+ms:0),C=4*(this._cubeSize-M);Bo(n,R,C,3*M,2*M),l.setRenderTarget(n),l.render(h,xu)}}function l1(t){const e=[],n=[],i=[];let r=t;const s=t-ms+1+Jp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-ms?l=Jp[a-t+ms-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],g=6,y=6,_=3,m=2,u=1,v=new Float32Array(_*y*g),x=new Float32Array(m*y*g),M=new Float32Array(u*y*g);for(let C=0;C<g;C++){const b=C%3*2/3-1,N=C>2?0:-1,T=[b,N,0,b+2/3,N,0,b+2/3,N+1,0,b,N,0,b+2/3,N+1,0,b,N+1,0];v.set(T,_*y*C),x.set(d,m*y*C);const S=[C,C,C,C,C,C];M.set(S,u*y*C)}const R=new mn;R.setAttribute("position",new on(v,_)),R.setAttribute("uv",new on(x,m)),R.setAttribute("faceIndex",new on(M,u)),e.push(R),r>ms&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function im(t,e,n){const i=new Rr(t,e,n);return i.texture.mapping=cc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function c1(t,e,n){const i=new Float32Array(mr),r=new B(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function rm(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function sm(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Df(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function u1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ed||l===wd,f=l===Is||l===Fs;if(c||f){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new nm(t)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const g=o.image;return c&&g&&g.height>0||f&&g&&r(g)?(n===null&&(n=new nm(t)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function d1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Pf("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function f1(t,e,n,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const y in d.attributes)e.remove(d.attributes[y]);for(const y in d.morphAttributes){const _=d.morphAttributes[y];for(let m=0,u=_.length;m<u;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const y in d)e.update(d[y],t.ARRAY_BUFFER);const g=h.morphAttributes;for(const y in g){const _=g[y];for(let m=0,u=_.length;m<u;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(h){const d=[],g=h.index,y=h.attributes.position;let _=0;if(g!==null){const v=g.array;_=g.version;for(let x=0,M=v.length;x<M;x+=3){const R=v[x+0],C=v[x+1],b=v[x+2];d.push(R,C,C,b,b,R)}}else if(y!==void 0){const v=y.array;_=y.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const R=x+0,C=x+1,b=x+2;d.push(R,C,C,b,b,R)}}else return;const m=new(cv(d)?pv:hv)(d,1);m.version=_;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function f(h){const d=s.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function h1(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,g){t.drawElements(i,g,s,d*a),n.update(g,i,1)}function c(d,g,y){y!==0&&(t.drawElementsInstanced(i,g,s,d*a,y),n.update(g,i,y))}function f(d,g,y){if(y===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<y;m++)this.render(d[m]/a,g[m]);else{_.multiDrawElementsWEBGL(i,g,0,s,d,0,y);let m=0;for(let u=0;u<y;u++)m+=g[u];n.update(m,i,1)}}function h(d,g,y,_){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/a,g[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,d,0,_,0,y);let u=0;for(let v=0;v<y;v++)u+=g[v];for(let v=0;v<_.length;v++)n.update(u,i,_[v])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function p1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function m1(t,e,n){const i=new WeakMap,r=new Ut;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let S=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var g=S;d!==void 0&&d.texture.dispose();const y=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;y===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let R=o.attributes.position.count*M,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const b=new Float32Array(R*C*4*h),N=new dv(b,R,C,h);N.type=Ii,N.needsUpdate=!0;const T=M*4;for(let D=0;D<h;D++){const O=u[D],k=v[D],P=x[D],H=R*C*4*D;for(let V=0;V<O.count;V++){const $=V*T;y===!0&&(r.fromBufferAttribute(O,V),b[H+$+0]=r.x,b[H+$+1]=r.y,b[H+$+2]=r.z,b[H+$+3]=0),_===!0&&(r.fromBufferAttribute(k,V),b[H+$+4]=r.x,b[H+$+5]=r.y,b[H+$+6]=r.z,b[H+$+7]=0),m===!0&&(r.fromBufferAttribute(P,V),b[H+$+8]=r.x,b[H+$+9]=r.y,b[H+$+10]=r.z,b[H+$+11]=P.itemSize===4?r.w:1)}}d={count:h,texture:N,size:new Ue(R,C)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let y=0;for(let m=0;m<c.length;m++)y+=c[m];const _=o.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function g1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class yv extends Kt{constructor(e,n,i,r,s,a,o,l,c,f=ws){if(f!==ws&&f!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ws&&(i=Os),i===void 0&&f===zs&&(i=ks),super(null,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Sv=new Kt,Mv=new yv(1,1);Mv.compareFunction=lv;const Ev=new dv,wv=new tM,Tv=new vv,am=[],om=[],lm=new Float32Array(16),cm=new Float32Array(9),um=new Float32Array(4);function Ws(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=am[r];if(s===void 0&&(s=new Float32Array(r),am[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function pc(t,e){let n=om[e];n===void 0&&(n=new Int32Array(e),om[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function v1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function x1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function _1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function S1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Tt(n,i))return;um.set(i),t.uniformMatrix2fv(this.addr,!1,um),bt(n,i)}}function M1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Tt(n,i))return;cm.set(i),t.uniformMatrix3fv(this.addr,!1,cm),bt(n,i)}}function E1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Tt(n,i))return;lm.set(i),t.uniformMatrix4fv(this.addr,!1,lm),bt(n,i)}}function w1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function T1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function b1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function C1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function A1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function R1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function P1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function N1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function L1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Mv:Sv;n.setTexture2D(e||s,r)}function D1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||wv,r)}function U1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Tv,r)}function I1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ev,r)}function F1(t){switch(t){case 5126:return v1;case 35664:return x1;case 35665:return _1;case 35666:return y1;case 35674:return S1;case 35675:return M1;case 35676:return E1;case 5124:case 35670:return w1;case 35667:case 35671:return T1;case 35668:case 35672:return b1;case 35669:case 35673:return C1;case 5125:return A1;case 36294:return R1;case 36295:return P1;case 36296:return N1;case 35678:case 36198:case 36298:case 36306:case 35682:return L1;case 35679:case 36299:case 36307:return D1;case 35680:case 36300:case 36308:case 36293:return U1;case 36289:case 36303:case 36311:case 36292:return I1}}function O1(t,e){t.uniform1fv(this.addr,e)}function k1(t,e){const n=Ws(e,this.size,2);t.uniform2fv(this.addr,n)}function z1(t,e){const n=Ws(e,this.size,3);t.uniform3fv(this.addr,n)}function B1(t,e){const n=Ws(e,this.size,4);t.uniform4fv(this.addr,n)}function H1(t,e){const n=Ws(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function V1(t,e){const n=Ws(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function G1(t,e){const n=Ws(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function j1(t,e){t.uniform1iv(this.addr,e)}function W1(t,e){t.uniform2iv(this.addr,e)}function X1(t,e){t.uniform3iv(this.addr,e)}function $1(t,e){t.uniform4iv(this.addr,e)}function Y1(t,e){t.uniform1uiv(this.addr,e)}function q1(t,e){t.uniform2uiv(this.addr,e)}function K1(t,e){t.uniform3uiv(this.addr,e)}function Z1(t,e){t.uniform4uiv(this.addr,e)}function Q1(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Sv,s[a])}function J1(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||wv,s[a])}function eT(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Tv,s[a])}function tT(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Ev,s[a])}function nT(t){switch(t){case 5126:return O1;case 35664:return k1;case 35665:return z1;case 35666:return B1;case 35674:return H1;case 35675:return V1;case 35676:return G1;case 5124:case 35670:return j1;case 35667:case 35671:return W1;case 35668:case 35672:return X1;case 35669:case 35673:return $1;case 5125:return Y1;case 36294:return q1;case 36295:return K1;case 36296:return Z1;case 35678:case 36198:case 36298:case 36306:case 35682:return Q1;case 35679:case 36299:case 36307:return J1;case 35680:case 36300:case 36308:case 36293:return eT;case 36289:case 36303:case 36311:case 36292:return tT}}class iT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=F1(n.type)}}class rT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=nT(n.type)}}class sT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Eu=/(\w+)(\])?(\[|\.)?/g;function dm(t,e){t.seq.push(e),t.map[e.id]=e}function aT(t,e,n){const i=t.name,r=i.length;for(Eu.lastIndex=0;;){const s=Eu.exec(i),a=Eu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){dm(n,c===void 0?new iT(o,t,e):new rT(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new sT(o),dm(n,h)),n=h}}}class cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);aT(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function fm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const oT=37297;let lT=0;function cT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function uT(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===Bl&&n===zl?i="LinearDisplayP3ToLinearSRGB":e===zl&&n===Bl&&(i="LinearSRGBToLinearDisplayP3"),t){case tr:case dc:return[i,"LinearTransferOETF"];case Un:case Rf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function hm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+cT(t.getShaderSource(e),a)}else return r}function dT(t,e){const n=uT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function fT(t,e){let n;switch(e){case xS:n="Linear";break;case _S:n="Reinhard";break;case yS:n="OptimizedCineon";break;case SS:n="ACESFilmic";break;case ES:n="AgX";break;case wS:n="Neutral";break;case MS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function hT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function pT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function mT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ha(t){return t!==""}function pm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rd(t){return t.replace(gT,xT)}const vT=new Map;function xT(t,e){let n=Re[e];if(n===void 0){const i=vT.get(e);if(i!==void 0)n=Re[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rd(n)}const _T=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gm(t){return t.replace(_T,yT)}function yT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ST(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===J0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===jy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function MT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Is:case Fs:e="ENVMAP_TYPE_CUBE";break;case cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ET(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Fs:e="ENVMAP_MODE_REFRACTION";break}return e}function wT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ev:e="ENVMAP_BLENDING_MULTIPLY";break;case gS:e="ENVMAP_BLENDING_MIX";break;case vS:e="ENVMAP_BLENDING_ADD";break}return e}function TT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function bT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=ST(n),c=MT(n),f=ET(n),h=wT(n),d=TT(n),g=hT(n),y=pT(s),_=r.createProgram();let m,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ha).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ha).join(`
`),u.length>0&&(u+=`
`)):(m=[vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),u=[vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?Re.tonemapping_pars_fragment:"",n.toneMapping!==Wi?fT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Re.colorspace_pars_fragment,dT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ha).join(`
`)),a=Rd(a),a=pm(a,n),a=mm(a,n),o=Rd(o),o=pm(o,n),o=mm(o,n),a=gm(a),o=gm(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Dp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=v+m+a,M=v+u+o,R=fm(r,r.VERTEX_SHADER,x),C=fm(r,r.FRAGMENT_SHADER,M);r.attachShader(_,R),r.attachShader(_,C),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function b(D){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(R).trim(),P=r.getShaderInfoLog(C).trim();let H=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,R,C);else{const $=hm(r,R,"vertex"),L=hm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+$+`
`+L)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(k===""||P==="")&&(V=!1);V&&(D.diagnostics={runnable:H,programLog:O,vertexShader:{log:k,prefix:m},fragmentShader:{log:P,prefix:u}})}r.deleteShader(R),r.deleteShader(C),N=new cl(r,_),T=mT(r,_)}let N;this.getUniforms=function(){return N===void 0&&b(this),N};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,oT)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}let CT=0;class AT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new RT(e),n.set(e,i)),i}}class RT{constructor(e){this.id=CT++,this.code=e,this.usedTimes=0}}function PT(t,e,n,i,r,s,a){const o=new Nf,l=new AT,c=new Set,f=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,S,D,O,k){const P=O.fog,H=k.geometry,V=T.isMeshStandardMaterial?O.environment:null,$=(T.isMeshStandardMaterial?n:e).get(T.envMap||V),L=$&&$.mapping===cc?$.image.height:null,X=y[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const Z=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ae=Z!==void 0?Z.length:0;let _e=0;H.morphAttributes.position!==void 0&&(_e=1),H.morphAttributes.normal!==void 0&&(_e=2),H.morphAttributes.color!==void 0&&(_e=3);let Ge,Y,ne,fe;if(X){const et=Xn[X];Ge=et.vertexShader,Y=et.fragmentShader}else Ge=T.vertexShader,Y=T.fragmentShader,l.update(T),ne=l.getVertexShaderID(T),fe=l.getFragmentShaderID(T);const oe=t.getRenderTarget(),Ie=k.isInstancedMesh===!0,Ne=k.isBatchedMesh===!0,je=!!T.map,I=!!T.matcap,Ve=!!$,Be=!!T.aoMap,ct=!!T.lightMap,Ee=!!T.bumpMap,Xe=!!T.normalMap,Fe=!!T.displacementMap,Ae=!!T.emissiveMap,yt=!!T.metalnessMap,A=!!T.roughnessMap,E=T.anisotropy>0,W=T.clearcoat>0,Q=T.dispersion>0,J=T.iridescence>0,ee=T.sheen>0,Se=T.transmission>0,ce=E&&!!T.anisotropyMap,ue=W&&!!T.clearcoatMap,Le=W&&!!T.clearcoatNormalMap,ie=W&&!!T.clearcoatRoughnessMap,xe=J&&!!T.iridescenceMap,ze=J&&!!T.iridescenceThicknessMap,be=ee&&!!T.sheenColorMap,de=ee&&!!T.sheenRoughnessMap,De=!!T.specularMap,He=!!T.specularColorMap,vt=!!T.specularIntensityMap,U=Se&&!!T.transmissionMap,he=Se&&!!T.thicknessMap,q=!!T.gradientMap,K=!!T.alphaMap,se=T.alphaTest>0,Ce=!!T.alphaHash,$e=!!T.extensions;let xt=Wi;T.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(xt=t.toneMapping);const Ct={shaderID:X,shaderType:T.type,shaderName:T.name,vertexShader:Ge,fragmentShader:Y,defines:T.defines,customVertexShaderID:ne,customFragmentShaderID:fe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Ne,batchingColor:Ne&&k._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&k.instanceColor!==null,instancingMorph:Ie&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:tr,alphaToCoverage:!!T.alphaToCoverage,map:je,matcap:I,envMap:Ve,envMapMode:Ve&&$.mapping,envMapCubeUVHeight:L,aoMap:Be,lightMap:ct,bumpMap:Ee,normalMap:Xe,displacementMap:d&&Fe,emissiveMap:Ae,normalMapObjectSpace:Xe&&T.normalMapType===zS,normalMapTangentSpace:Xe&&T.normalMapType===kS,metalnessMap:yt,roughnessMap:A,anisotropy:E,anisotropyMap:ce,clearcoat:W,clearcoatMap:ue,clearcoatNormalMap:Le,clearcoatRoughnessMap:ie,dispersion:Q,iridescence:J,iridescenceMap:xe,iridescenceThicknessMap:ze,sheen:ee,sheenColorMap:be,sheenRoughnessMap:de,specularMap:De,specularColorMap:He,specularIntensityMap:vt,transmission:Se,transmissionMap:U,thicknessMap:he,gradientMap:q,opaque:T.transparent===!1&&T.blending===Es&&T.alphaToCoverage===!1,alphaMap:K,alphaTest:se,alphaHash:Ce,combine:T.combine,mapUv:je&&_(T.map.channel),aoMapUv:Be&&_(T.aoMap.channel),lightMapUv:ct&&_(T.lightMap.channel),bumpMapUv:Ee&&_(T.bumpMap.channel),normalMapUv:Xe&&_(T.normalMap.channel),displacementMapUv:Fe&&_(T.displacementMap.channel),emissiveMapUv:Ae&&_(T.emissiveMap.channel),metalnessMapUv:yt&&_(T.metalnessMap.channel),roughnessMapUv:A&&_(T.roughnessMap.channel),anisotropyMapUv:ce&&_(T.anisotropyMap.channel),clearcoatMapUv:ue&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Le&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:de&&_(T.sheenRoughnessMap.channel),specularMapUv:De&&_(T.specularMap.channel),specularColorMapUv:He&&_(T.specularColorMap.channel),specularIntensityMapUv:vt&&_(T.specularIntensityMap.channel),transmissionMapUv:U&&_(T.transmissionMap.channel),thicknessMapUv:he&&_(T.thicknessMap.channel),alphaMapUv:K&&_(T.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Xe||E),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!H.attributes.uv&&(je||K),fog:!!P,useFog:T.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:_e,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:xt,decodeVideoTexture:je&&T.map.isVideoTexture===!0&&Qe.getTransfer(T.map.colorSpace)===st,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ci,flipSided:T.side===an,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:$e&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:$e&&T.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function u(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)S.push(D),S.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(v(S,T),x(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function v(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function x(T,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.doubleSided&&o.enable(10),S.flipSided&&o.enable(11),S.useDepthPacking&&o.enable(12),S.dithering&&o.enable(13),S.transmission&&o.enable(14),S.sheen&&o.enable(15),S.opaque&&o.enable(16),S.pointsUvs&&o.enable(17),S.decodeVideoTexture&&o.enable(18),S.alphaToCoverage&&o.enable(19),T.push(o.mask)}function M(T){const S=y[T.type];let D;if(S){const O=Xn[S];D=hM.clone(O.uniforms)}else D=T.uniforms;return D}function R(T,S){let D;for(let O=0,k=f.length;O<k;O++){const P=f[O];if(P.cacheKey===S){D=P,++D.usedTimes;break}}return D===void 0&&(D=new bT(t,S,T,s),f.push(D)),D}function C(T){if(--T.usedTimes===0){const S=f.indexOf(T);f[S]=f[f.length-1],f.pop(),T.destroy()}}function b(T){l.remove(T)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:R,releaseProgram:C,releaseShaderCache:b,programs:f,dispose:N}}function NT(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function LT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function xm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function _m(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,d,g,y,_,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:d,material:g,groupOrder:y,renderOrder:h.renderOrder,z:_,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=g,u.groupOrder=y,u.renderOrder=h.renderOrder,u.z=_,u.group=m),e++,u}function o(h,d,g,y,_,m){const u=a(h,d,g,y,_,m);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(h,d,g,y,_,m){const u=a(h,d,g,y,_,m);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,d){n.length>1&&n.sort(h||LT),i.length>1&&i.sort(d||xm),r.length>1&&r.sort(d||xm)}function f(){for(let h=e,d=t.length;h<d;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:c}}function DT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new _m,t.set(i,[a])):r>=s.length?(a=new _m,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function UT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Oe};break;case"SpotLight":n={position:new B,direction:new B,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":n={color:new Oe,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function IT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let FT=0;function OT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function kT(t){const e=new UT,n=IT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new ft,a=new ft;function o(c){let f=0,h=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let g=0,y=0,_=0,m=0,u=0,v=0,x=0,M=0,R=0,C=0,b=0;c.sort(OT);for(let T=0,S=c.length;T<S;T++){const D=c[T],O=D.color,k=D.intensity,P=D.distance,H=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=O.r*k,h+=O.g*k,d+=O.b*k;else if(D.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(D.sh.coefficients[V],k);b++}else if(D.isDirectionalLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const $=D.shadow,L=n.get(D);L.shadowBias=$.bias,L.shadowNormalBias=$.normalBias,L.shadowRadius=$.radius,L.shadowMapSize=$.mapSize,i.directionalShadow[g]=L,i.directionalShadowMap[g]=H,i.directionalShadowMatrix[g]=D.shadow.matrix,v++}i.directional[g]=V,g++}else if(D.isSpotLight){const V=e.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(O).multiplyScalar(k),V.distance=P,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,i.spot[_]=V;const $=D.shadow;if(D.map&&(i.spotLightMap[R]=D.map,R++,$.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[_]=$.matrix,D.castShadow){const L=n.get(D);L.shadowBias=$.bias,L.shadowNormalBias=$.normalBias,L.shadowRadius=$.radius,L.shadowMapSize=$.mapSize,i.spotShadow[_]=L,i.spotShadowMap[_]=H,M++}_++}else if(D.isRectAreaLight){const V=e.get(D);V.color.copy(O).multiplyScalar(k),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=V,m++}else if(D.isPointLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),V.distance=D.distance,V.decay=D.decay,D.castShadow){const $=D.shadow,L=n.get(D);L.shadowBias=$.bias,L.shadowNormalBias=$.normalBias,L.shadowRadius=$.radius,L.shadowMapSize=$.mapSize,L.shadowCameraNear=$.camera.near,L.shadowCameraFar=$.camera.far,i.pointShadow[y]=L,i.pointShadowMap[y]=H,i.pointShadowMatrix[y]=D.shadow.matrix,x++}i.point[y]=V,y++}else if(D.isHemisphereLight){const V=e.get(D);V.skyColor.copy(D.color).multiplyScalar(k),V.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[u]=V,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const N=i.hash;(N.directionalLength!==g||N.pointLength!==y||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==u||N.numDirectionalShadows!==v||N.numPointShadows!==x||N.numSpotShadows!==M||N.numSpotMaps!==R||N.numLightProbes!==b)&&(i.directional.length=g,i.spot.length=_,i.rectArea.length=m,i.point.length=y,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,N.directionalLength=g,N.pointLength=y,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=u,N.numDirectionalShadows=v,N.numPointShadows=x,N.numSpotShadows=M,N.numSpotMaps=R,N.numLightProbes=b,i.version=FT++)}function l(c,f){let h=0,d=0,g=0,y=0,_=0;const m=f.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const x=c[u];if(x.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(x.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),g++}else if(x.isRectAreaLight){const M=i.rectArea[y];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function ym(t){const e=new kT(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function a(f){i.push(f)}function o(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function zT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ym(t),e.set(r,[o])):s>=a.length?(o=new ym(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class BT extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HT extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const VT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jT(t,e,n){let i=new xv;const r=new Ue,s=new Ue,a=new Ut,o=new BT({depthPacking:OS}),l=new HT,c={},f=n.maxTextureSize,h={[qi]:an,[an]:qi,[ci]:ci},d=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:VT,fragmentShader:GT}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const y=new mn;y.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Zn(y,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J0;let u=this.type;this.render=function(C,b,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),O=t.state;O.setBlending(ji),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=u!==ai&&this.type===ai,P=u===ai&&this.type!==ai;for(let H=0,V=C.length;H<V;H++){const $=C[H],L=$.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const X=L.getFrameExtents();if(r.multiply(X),s.copy(L.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/X.x),r.x=s.x*X.x,L.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/X.y),r.y=s.y*X.y,L.mapSize.y=s.y)),L.map===null||k===!0||P===!0){const ae=this.type!==ai?{minFilter:wn,magFilter:wn}:{};L.map!==null&&L.map.dispose(),L.map=new Rr(r.x,r.y,ae),L.map.texture.name=$.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const Z=L.getViewportCount();for(let ae=0;ae<Z;ae++){const _e=L.getViewport(ae);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),O.viewport(a),L.updateMatrices($,ae),i=L.getFrustum(),M(b,N,L.camera,$,this.type)}L.isPointLightShadow!==!0&&this.type===ai&&v(L,N),L.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(T,S,D)};function v(C,b){const N=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Rr(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(b,null,N,d,_,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(b,null,N,g,_,null)}function x(C,b,N,T){let S=null;const D=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)S=D;else if(S=N.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const O=S.uuid,k=b.uuid;let P=c[O];P===void 0&&(P={},c[O]=P);let H=P[k];H===void 0&&(H=S.clone(),P[k]=H,b.addEventListener("dispose",R)),S=H}if(S.visible=b.visible,S.wireframe=b.wireframe,T===ai?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:h[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=t.properties.get(S);O.light=N}return S}function M(C,b,N,T,S){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===ai)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const k=e.update(C),P=C.material;if(Array.isArray(P)){const H=k.groups;for(let V=0,$=H.length;V<$;V++){const L=H[V],X=P[L.materialIndex];if(X&&X.visible){const Z=x(C,X,T,S);C.onBeforeShadow(t,C,b,N,k,Z,L),t.renderBufferDirect(N,null,k,Z,C,L),C.onAfterShadow(t,C,b,N,k,Z,L)}}}else if(P.visible){const H=x(C,P,T,S);C.onBeforeShadow(t,C,b,N,k,H,null),t.renderBufferDirect(N,null,k,H,C,null),C.onAfterShadow(t,C,b,N,k,H,null)}}const O=C.children;for(let k=0,P=O.length;k<P;k++)M(O[k],b,N,T,S)}function R(C){C.target.removeEventListener("dispose",R);for(const N in c){const T=c[N],S=C.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}function WT(t){function e(){let U=!1;const he=new Ut;let q=null;const K=new Ut(0,0,0,0);return{setMask:function(se){q!==se&&!U&&(t.colorMask(se,se,se,se),q=se)},setLocked:function(se){U=se},setClear:function(se,Ce,$e,xt,Ct){Ct===!0&&(se*=xt,Ce*=xt,$e*=xt),he.set(se,Ce,$e,xt),K.equals(he)===!1&&(t.clearColor(se,Ce,$e,xt),K.copy(he))},reset:function(){U=!1,q=null,K.set(-1,0,0,0)}}}function n(){let U=!1,he=null,q=null,K=null;return{setTest:function(se){se?fe(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(se){he!==se&&!U&&(t.depthMask(se),he=se)},setFunc:function(se){if(q!==se){switch(se){case cS:t.depthFunc(t.NEVER);break;case uS:t.depthFunc(t.ALWAYS);break;case dS:t.depthFunc(t.LESS);break;case Fl:t.depthFunc(t.LEQUAL);break;case fS:t.depthFunc(t.EQUAL);break;case hS:t.depthFunc(t.GEQUAL);break;case pS:t.depthFunc(t.GREATER);break;case mS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}q=se}},setLocked:function(se){U=se},setClear:function(se){K!==se&&(t.clearDepth(se),K=se)},reset:function(){U=!1,he=null,q=null,K=null}}}function i(){let U=!1,he=null,q=null,K=null,se=null,Ce=null,$e=null,xt=null,Ct=null;return{setTest:function(et){U||(et?fe(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(et){he!==et&&!U&&(t.stencilMask(et),he=et)},setFunc:function(et,Vn,Gn){(q!==et||K!==Vn||se!==Gn)&&(t.stencilFunc(et,Vn,Gn),q=et,K=Vn,se=Gn)},setOp:function(et,Vn,Gn){(Ce!==et||$e!==Vn||xt!==Gn)&&(t.stencilOp(et,Vn,Gn),Ce=et,$e=Vn,xt=Gn)},setLocked:function(et){U=et},setClear:function(et){Ct!==et&&(t.clearStencil(et),Ct=et)},reset:function(){U=!1,he=null,q=null,K=null,se=null,Ce=null,$e=null,xt=null,Ct=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},f={},h=new WeakMap,d=[],g=null,y=!1,_=null,m=null,u=null,v=null,x=null,M=null,R=null,C=new Oe(0,0,0),b=0,N=!1,T=null,S=null,D=null,O=null,k=null;const P=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,V=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec($)[1]),H=V>=1):$.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),H=V>=2);let L=null,X={};const Z=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),_e=new Ut().fromArray(Z),Ge=new Ut().fromArray(ae);function Y(U,he,q,K){const se=new Uint8Array(4),Ce=t.createTexture();t.bindTexture(U,Ce),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<q;$e++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,K,0,t.RGBA,t.UNSIGNED_BYTE,se):t.texImage2D(he+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,se);return Ce}const ne={};ne[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),fe(t.DEPTH_TEST),s.setFunc(Fl),Ee(!1),Xe(ip),fe(t.CULL_FACE),Be(ji);function fe(U){c[U]!==!0&&(t.enable(U),c[U]=!0)}function oe(U){c[U]!==!1&&(t.disable(U),c[U]=!1)}function Ie(U,he){return f[U]!==he?(t.bindFramebuffer(U,he),f[U]=he,U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=he),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Ne(U,he){let q=d,K=!1;if(U){q=h.get(he),q===void 0&&(q=[],h.set(he,q));const se=U.textures;if(q.length!==se.length||q[0]!==t.COLOR_ATTACHMENT0){for(let Ce=0,$e=se.length;Ce<$e;Ce++)q[Ce]=t.COLOR_ATTACHMENT0+Ce;q.length=se.length,K=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,K=!0);K&&t.drawBuffers(q)}function je(U){return g!==U?(t.useProgram(U),g=U,!0):!1}const I={[pr]:t.FUNC_ADD,[Xy]:t.FUNC_SUBTRACT,[$y]:t.FUNC_REVERSE_SUBTRACT};I[Yy]=t.MIN,I[qy]=t.MAX;const Ve={[Ky]:t.ZERO,[Zy]:t.ONE,[Qy]:t.SRC_COLOR,[Sd]:t.SRC_ALPHA,[rS]:t.SRC_ALPHA_SATURATE,[nS]:t.DST_COLOR,[eS]:t.DST_ALPHA,[Jy]:t.ONE_MINUS_SRC_COLOR,[Md]:t.ONE_MINUS_SRC_ALPHA,[iS]:t.ONE_MINUS_DST_COLOR,[tS]:t.ONE_MINUS_DST_ALPHA,[sS]:t.CONSTANT_COLOR,[aS]:t.ONE_MINUS_CONSTANT_COLOR,[oS]:t.CONSTANT_ALPHA,[lS]:t.ONE_MINUS_CONSTANT_ALPHA};function Be(U,he,q,K,se,Ce,$e,xt,Ct,et){if(U===ji){y===!0&&(oe(t.BLEND),y=!1);return}if(y===!1&&(fe(t.BLEND),y=!0),U!==Wy){if(U!==_||et!==N){if((m!==pr||x!==pr)&&(t.blendEquation(t.FUNC_ADD),m=pr,x=pr),et)switch(U){case Es:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ps:t.blendFunc(t.ONE,t.ONE);break;case rp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Es:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ps:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case rp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}u=null,v=null,M=null,R=null,C.set(0,0,0),b=0,_=U,N=et}return}se=se||he,Ce=Ce||q,$e=$e||K,(he!==m||se!==x)&&(t.blendEquationSeparate(I[he],I[se]),m=he,x=se),(q!==u||K!==v||Ce!==M||$e!==R)&&(t.blendFuncSeparate(Ve[q],Ve[K],Ve[Ce],Ve[$e]),u=q,v=K,M=Ce,R=$e),(xt.equals(C)===!1||Ct!==b)&&(t.blendColor(xt.r,xt.g,xt.b,Ct),C.copy(xt),b=Ct),_=U,N=!1}function ct(U,he){U.side===ci?oe(t.CULL_FACE):fe(t.CULL_FACE);let q=U.side===an;he&&(q=!q),Ee(q),U.blending===Es&&U.transparent===!1?Be(ji):Be(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const K=U.stencilWrite;a.setTest(K),K&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ae(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(U){T!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),T=U)}function Xe(U){U!==Vy?(fe(t.CULL_FACE),U!==S&&(U===ip?t.cullFace(t.BACK):U===Gy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),S=U}function Fe(U){U!==D&&(H&&t.lineWidth(U),D=U)}function Ae(U,he,q){U?(fe(t.POLYGON_OFFSET_FILL),(O!==he||k!==q)&&(t.polygonOffset(he,q),O=he,k=q)):oe(t.POLYGON_OFFSET_FILL)}function yt(U){U?fe(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function A(U){U===void 0&&(U=t.TEXTURE0+P-1),L!==U&&(t.activeTexture(U),L=U)}function E(U,he,q){q===void 0&&(L===null?q=t.TEXTURE0+P-1:q=L);let K=X[q];K===void 0&&(K={type:void 0,texture:void 0},X[q]=K),(K.type!==U||K.texture!==he)&&(L!==q&&(t.activeTexture(q),L=q),t.bindTexture(U,he||ne[U]),K.type=U,K.texture=he)}function W(){const U=X[L];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(U){_e.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),_e.copy(U))}function de(U){Ge.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Ge.copy(U))}function De(U,he){let q=l.get(he);q===void 0&&(q=new WeakMap,l.set(he,q));let K=q.get(U);K===void 0&&(K=t.getUniformBlockIndex(he,U.name),q.set(U,K))}function He(U,he){const K=l.get(he).get(U);o.get(he)!==K&&(t.uniformBlockBinding(he,K,U.__bindingPointIndex),o.set(he,K))}function vt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},L=null,X={},f={},h=new WeakMap,d=[],g=null,y=!1,_=null,m=null,u=null,v=null,x=null,M=null,R=null,C=new Oe(0,0,0),b=0,N=!1,T=null,S=null,D=null,O=null,k=null,_e.set(0,0,t.canvas.width,t.canvas.height),Ge.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:fe,disable:oe,bindFramebuffer:Ie,drawBuffers:Ne,useProgram:je,setBlending:Be,setMaterial:ct,setFlipSided:Ee,setCullFace:Xe,setLineWidth:Fe,setPolygonOffset:Ae,setScissorTest:yt,activeTexture:A,bindTexture:E,unbindTexture:W,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:xe,texImage3D:ze,updateUBOMapping:De,uniformBlockBinding:He,texStorage2D:Le,texStorage3D:ie,texSubImage2D:ee,texSubImage3D:Se,compressedTexSubImage2D:ce,compressedTexSubImage3D:ue,scissor:be,viewport:de,reset:vt}}function XT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,f=new WeakMap;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,E){return g?new OffscreenCanvas(A,E):Vl("canvas")}function _(A,E,W){let Q=1;const J=yt(A);if((J.width>W||J.height>W)&&(Q=W/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ee=Math.floor(Q*J.width),Se=Math.floor(Q*J.height);h===void 0&&(h=y(ee,Se));const ce=E?y(ee,Se):h;return ce.width=ee,ce.height=Se,ce.getContext("2d").drawImage(A,0,0,ee,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ee+"x"+Se+")."),ce}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==wn&&A.minFilter!==Fn}function u(A){t.generateMipmap(A)}function v(A,E,W,Q,J=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ee=E;if(E===t.RED&&(W===t.FLOAT&&(ee=t.R32F),W===t.HALF_FLOAT&&(ee=t.R16F),W===t.UNSIGNED_BYTE&&(ee=t.R8)),E===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(ee=t.R8UI),W===t.UNSIGNED_SHORT&&(ee=t.R16UI),W===t.UNSIGNED_INT&&(ee=t.R32UI),W===t.BYTE&&(ee=t.R8I),W===t.SHORT&&(ee=t.R16I),W===t.INT&&(ee=t.R32I)),E===t.RG&&(W===t.FLOAT&&(ee=t.RG32F),W===t.HALF_FLOAT&&(ee=t.RG16F),W===t.UNSIGNED_BYTE&&(ee=t.RG8)),E===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(ee=t.RG8UI),W===t.UNSIGNED_SHORT&&(ee=t.RG16UI),W===t.UNSIGNED_INT&&(ee=t.RG32UI),W===t.BYTE&&(ee=t.RG8I),W===t.SHORT&&(ee=t.RG16I),W===t.INT&&(ee=t.RG32I)),E===t.RGB&&W===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),E===t.RGBA){const Se=J?kl:Qe.getTransfer(Q);W===t.FLOAT&&(ee=t.RGBA32F),W===t.HALF_FLOAT&&(ee=t.RGBA16F),W===t.UNSIGNED_BYTE&&(ee=Se===st?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function x(A,E){let W;return A?E===null||E===Os||E===ks?W=t.DEPTH24_STENCIL8:E===Ii?W=t.DEPTH32F_STENCIL8:E===Ol&&(W=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Os||E===ks?W=t.DEPTH_COMPONENT24:E===Ii?W=t.DEPTH_COMPONENT32F:E===Ol&&(W=t.DEPTH_COMPONENT16),W}function M(A,E){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==wn&&A.minFilter!==Fn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function R(A){const E=A.target;E.removeEventListener("dispose",R),b(E),E.isVideoTexture&&f.delete(E)}function C(A){const E=A.target;E.removeEventListener("dispose",C),T(E)}function b(A){const E=i.get(A);if(E.__webglInit===void 0)return;const W=A.source,Q=d.get(W);if(Q){const J=Q[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&N(A),Object.keys(Q).length===0&&d.delete(W)}i.remove(A)}function N(A){const E=i.get(A);t.deleteTexture(E.__webglTexture);const W=A.source,Q=d.get(W);delete Q[E.__cacheKey],a.memory.textures--}function T(A){const E=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let J=0;J<E.__webglFramebuffer[Q].length;J++)t.deleteFramebuffer(E.__webglFramebuffer[Q][J]);else t.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)t.deleteFramebuffer(E.__webglFramebuffer[Q]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=A.textures;for(let Q=0,J=W.length;Q<J;Q++){const ee=i.get(W[Q]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(W[Q])}i.remove(A)}let S=0;function D(){S=0}function O(){const A=S;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),S+=1,A}function k(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function P(A,E){const W=i.get(A);if(A.isVideoTexture&&Fe(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(W,A,E);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+E)}function H(A,E){const W=i.get(A);if(A.version>0&&W.__version!==A.version){Ge(W,A,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+E)}function V(A,E){const W=i.get(A);if(A.version>0&&W.__version!==A.version){Ge(W,A,E);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+E)}function $(A,E){const W=i.get(A);if(A.version>0&&W.__version!==A.version){Y(W,A,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+E)}const L={[Td]:t.REPEAT,[_r]:t.CLAMP_TO_EDGE,[bd]:t.MIRRORED_REPEAT},X={[wn]:t.NEAREST,[TS]:t.NEAREST_MIPMAP_NEAREST,[_o]:t.NEAREST_MIPMAP_LINEAR,[Fn]:t.LINEAR,[Xc]:t.LINEAR_MIPMAP_NEAREST,[yr]:t.LINEAR_MIPMAP_LINEAR},Z={[BS]:t.NEVER,[XS]:t.ALWAYS,[HS]:t.LESS,[lv]:t.LEQUAL,[VS]:t.EQUAL,[WS]:t.GEQUAL,[GS]:t.GREATER,[jS]:t.NOTEQUAL};function ae(A,E){if(E.type===Ii&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Fn||E.magFilter===Xc||E.magFilter===_o||E.magFilter===yr||E.minFilter===Fn||E.minFilter===Xc||E.minFilter===_o||E.minFilter===yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,L[E.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,L[E.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,L[E.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,X[E.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,X[E.minFilter]),E.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wn||E.minFilter!==_o&&E.minFilter!==yr||E.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function _e(A,E){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",R));const Q=E.source;let J=d.get(Q);J===void 0&&(J={},d.set(Q,J));const ee=k(E);if(ee!==A.__cacheKey){J[ee]===void 0&&(J[ee]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,W=!0),J[ee].usedTimes++;const Se=J[A.__cacheKey];Se!==void 0&&(J[A.__cacheKey].usedTimes--,Se.usedTimes===0&&N(E)),A.__cacheKey=ee,A.__webglTexture=J[ee].texture}return W}function Ge(A,E,W){let Q=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=t.TEXTURE_3D);const J=_e(A,E),ee=E.source;n.bindTexture(Q,A.__webglTexture,t.TEXTURE0+W);const Se=i.get(ee);if(ee.version!==Se.__version||J===!0){n.activeTexture(t.TEXTURE0+W);const ce=Qe.getPrimaries(Qe.workingColorSpace),ue=E.colorSpace===Li?null:Qe.getPrimaries(E.colorSpace),Le=E.colorSpace===Li||ce===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ie=_(E.image,!1,r.maxTextureSize);ie=Ae(E,ie);const xe=s.convert(E.format,E.colorSpace),ze=s.convert(E.type);let be=v(E.internalFormat,xe,ze,E.colorSpace,E.isVideoTexture);ae(Q,E);let de;const De=E.mipmaps,He=E.isVideoTexture!==!0,vt=Se.__version===void 0||J===!0,U=ee.dataReady,he=M(E,ie);if(E.isDepthTexture)be=x(E.format===zs,E.type),vt&&(He?n.texStorage2D(t.TEXTURE_2D,1,be,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,be,ie.width,ie.height,0,xe,ze,null));else if(E.isDataTexture)if(De.length>0){He&&vt&&n.texStorage2D(t.TEXTURE_2D,he,be,De[0].width,De[0].height);for(let q=0,K=De.length;q<K;q++)de=De[q],He?U&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,de.width,de.height,xe,ze,de.data):n.texImage2D(t.TEXTURE_2D,q,be,de.width,de.height,0,xe,ze,de.data);E.generateMipmaps=!1}else He?(vt&&n.texStorage2D(t.TEXTURE_2D,he,be,ie.width,ie.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,xe,ze,ie.data)):n.texImage2D(t.TEXTURE_2D,0,be,ie.width,ie.height,0,xe,ze,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){He&&vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,be,De[0].width,De[0].height,ie.depth);for(let q=0,K=De.length;q<K;q++)if(de=De[q],E.format!==Kn)if(xe!==null)if(He){if(U)if(E.layerUpdates.size>0){for(const se of E.layerUpdates){const Ce=de.width*de.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,se,de.width,de.height,1,xe,de.data.slice(Ce*se,Ce*(se+1)),0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,de.width,de.height,ie.depth,xe,de.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,be,de.width,de.height,ie.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,de.width,de.height,ie.depth,xe,ze,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,be,de.width,de.height,ie.depth,0,xe,ze,de.data)}else{He&&vt&&n.texStorage2D(t.TEXTURE_2D,he,be,De[0].width,De[0].height);for(let q=0,K=De.length;q<K;q++)de=De[q],E.format!==Kn?xe!==null?He?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,de.width,de.height,xe,de.data):n.compressedTexImage2D(t.TEXTURE_2D,q,be,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?U&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,de.width,de.height,xe,ze,de.data):n.texImage2D(t.TEXTURE_2D,q,be,de.width,de.height,0,xe,ze,de.data)}else if(E.isDataArrayTexture)if(He){if(vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,be,ie.width,ie.height,ie.depth),U)if(E.layerUpdates.size>0){let q;switch(ze){case t.UNSIGNED_BYTE:switch(xe){case t.ALPHA:q=1;break;case t.LUMINANCE:q=1;break;case t.LUMINANCE_ALPHA:q=2;break;case t.RGB:q=3;break;case t.RGBA:q=4;break;default:throw new Error(`Unknown texel size for format ${xe}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:q=1;break;default:throw new Error(`Unknown texel size for type ${ze}.`)}const K=ie.width*ie.height*q;for(const se of E.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,se,ie.width,ie.height,1,xe,ze,ie.data.slice(K*se,K*(se+1)));E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,xe,ze,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,ie.width,ie.height,ie.depth,0,xe,ze,ie.data);else if(E.isData3DTexture)He?(vt&&n.texStorage3D(t.TEXTURE_3D,he,be,ie.width,ie.height,ie.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,xe,ze,ie.data)):n.texImage3D(t.TEXTURE_3D,0,be,ie.width,ie.height,ie.depth,0,xe,ze,ie.data);else if(E.isFramebufferTexture){if(vt)if(He)n.texStorage2D(t.TEXTURE_2D,he,be,ie.width,ie.height);else{let q=ie.width,K=ie.height;for(let se=0;se<he;se++)n.texImage2D(t.TEXTURE_2D,se,be,q,K,0,xe,ze,null),q>>=1,K>>=1}}else if(De.length>0){if(He&&vt){const q=yt(De[0]);n.texStorage2D(t.TEXTURE_2D,he,be,q.width,q.height)}for(let q=0,K=De.length;q<K;q++)de=De[q],He?U&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,xe,ze,de):n.texImage2D(t.TEXTURE_2D,q,be,xe,ze,de);E.generateMipmaps=!1}else if(He){if(vt){const q=yt(ie);n.texStorage2D(t.TEXTURE_2D,he,be,q.width,q.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,ze,ie)}else n.texImage2D(t.TEXTURE_2D,0,be,xe,ze,ie);m(E)&&u(Q),Se.__version=ee.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Y(A,E,W){if(E.image.length!==6)return;const Q=_e(A,E),J=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+W);const ee=i.get(J);if(J.version!==ee.__version||Q===!0){n.activeTexture(t.TEXTURE0+W);const Se=Qe.getPrimaries(Qe.workingColorSpace),ce=E.colorSpace===Li?null:Qe.getPrimaries(E.colorSpace),ue=E.colorSpace===Li||Se===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Le=E.isCompressedTexture||E.image[0].isCompressedTexture,ie=E.image[0]&&E.image[0].isDataTexture,xe=[];for(let K=0;K<6;K++)!Le&&!ie?xe[K]=_(E.image[K],!0,r.maxCubemapSize):xe[K]=ie?E.image[K].image:E.image[K],xe[K]=Ae(E,xe[K]);const ze=xe[0],be=s.convert(E.format,E.colorSpace),de=s.convert(E.type),De=v(E.internalFormat,be,de,E.colorSpace),He=E.isVideoTexture!==!0,vt=ee.__version===void 0||Q===!0,U=J.dataReady;let he=M(E,ze);ae(t.TEXTURE_CUBE_MAP,E);let q;if(Le){He&&vt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,De,ze.width,ze.height);for(let K=0;K<6;K++){q=xe[K].mipmaps;for(let se=0;se<q.length;se++){const Ce=q[se];E.format!==Kn?be!==null?He?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,0,0,Ce.width,Ce.height,be,Ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,De,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,0,0,Ce.width,Ce.height,be,de,Ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,De,Ce.width,Ce.height,0,be,de,Ce.data)}}}else{if(q=E.mipmaps,He&&vt){q.length>0&&he++;const K=yt(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,De,K.width,K.height)}for(let K=0;K<6;K++)if(ie){He?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,xe[K].width,xe[K].height,be,de,xe[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,De,xe[K].width,xe[K].height,0,be,de,xe[K].data);for(let se=0;se<q.length;se++){const $e=q[se].image[K].image;He?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,0,0,$e.width,$e.height,be,de,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,De,$e.width,$e.height,0,be,de,$e.data)}}else{He?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,be,de,xe[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,De,be,de,xe[K]);for(let se=0;se<q.length;se++){const Ce=q[se];He?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,0,0,be,de,Ce.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,De,be,de,Ce.image[K])}}}m(E)&&u(t.TEXTURE_CUBE_MAP),ee.__version=J.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ne(A,E,W,Q,J,ee){const Se=s.convert(W.format,W.colorSpace),ce=s.convert(W.type),ue=v(W.internalFormat,Se,ce,W.colorSpace);if(!i.get(E).__hasExternalTextures){const ie=Math.max(1,E.width>>ee),xe=Math.max(1,E.height>>ee);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ee,ue,ie,xe,E.depth,0,Se,ce,null):n.texImage2D(J,ee,ue,ie,xe,0,Se,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Xe(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,J,i.get(W).__webglTexture,0,Ee(E)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,J,i.get(W).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(A,E,W){if(t.bindRenderbuffer(t.RENDERBUFFER,A),E.depthBuffer){const Q=E.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,ee=x(E.stencilBuffer,J),Se=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=Ee(E);Xe(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,ee,E.width,E.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,ee,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ee,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,A)}else{const Q=E.textures;for(let J=0;J<Q.length;J++){const ee=Q[J],Se=s.convert(ee.format,ee.colorSpace),ce=s.convert(ee.type),ue=v(ee.internalFormat,Se,ce,ee.colorSpace),Le=Ee(E);W&&Xe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,ue,E.width,E.height):Xe(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Le,ue,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ue,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function oe(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),P(E.depthTexture,0);const Q=i.get(E.depthTexture).__webglTexture,J=Ee(E);if(E.depthTexture.format===ws)Xe(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(E.depthTexture.format===zs)Xe(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ie(A){const E=i.get(A),W=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");oe(E.__webglFramebuffer,A)}else if(W){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]=t.createRenderbuffer(),fe(E.__webglDepthbuffer[Q],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),fe(E.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(A,E,W){const Q=i.get(A);E!==void 0&&ne(Q.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&Ie(A)}function je(A){const E=A.texture,W=i.get(A),Q=i.get(E);A.addEventListener("dispose",C);const J=A.textures,ee=A.isWebGLCubeRenderTarget===!0,Se=J.length>1;if(Se||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=E.version,a.memory.textures++),ee){W.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[ce]=[];for(let ue=0;ue<E.mipmaps.length;ue++)W.__webglFramebuffer[ce][ue]=t.createFramebuffer()}else W.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)W.__webglFramebuffer[ce]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(Se)for(let ce=0,ue=J.length;ce<ue;ce++){const Le=i.get(J[ce]);Le.__webglTexture===void 0&&(Le.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&Xe(A)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ce=0;ce<J.length;ce++){const ue=J[ce];W.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[ce]);const Le=s.convert(ue.format,ue.colorSpace),ie=s.convert(ue.type),xe=v(ue.internalFormat,Le,ie,ue.colorSpace,A.isXRRenderTarget===!0),ze=Ee(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,xe,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,W.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(W.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),ae(t.TEXTURE_CUBE_MAP,E);for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)ne(W.__webglFramebuffer[ce][ue],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ue);else ne(W.__webglFramebuffer[ce],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(E)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let ce=0,ue=J.length;ce<ue;ce++){const Le=J[ce],ie=i.get(Le);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),ae(t.TEXTURE_2D,Le),ne(W.__webglFramebuffer,A,Le,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),m(Le)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,Q.__webglTexture),ae(ce,E),E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)ne(W.__webglFramebuffer[ue],A,E,t.COLOR_ATTACHMENT0,ce,ue);else ne(W.__webglFramebuffer,A,E,t.COLOR_ATTACHMENT0,ce,0);m(E)&&u(ce),n.unbindTexture()}A.depthBuffer&&Ie(A)}function I(A){const E=A.textures;for(let W=0,Q=E.length;W<Q;W++){const J=E[W];if(m(J)){const ee=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Se=i.get(J).__webglTexture;n.bindTexture(ee,Se),u(ee),n.unbindTexture()}}}const Ve=[],Be=[];function ct(A){if(A.samples>0){if(Xe(A)===!1){const E=A.textures,W=A.width,Q=A.height;let J=t.COLOR_BUFFER_BIT;const ee=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(A),ce=E.length>1;if(ce)for(let ue=0;ue<E.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ue=0;ue<E.length;ue++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ue]);const Le=i.get(E[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Le,0)}t.blitFramebuffer(0,0,W,Q,0,0,W,Q,J,t.NEAREST),l===!0&&(Ve.length=0,Be.length=0,Ve.push(t.COLOR_ATTACHMENT0+ue),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ve.push(ee),Be.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Be)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ve))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let ue=0;ue<E.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ue]);const Le=i.get(E[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,Le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const E=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Ee(A){return Math.min(r.maxSamples,A.samples)}function Xe(A){const E=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Fe(A){const E=a.render.frame;f.get(A)!==E&&(f.set(A,E),A.update())}function Ae(A,E){const W=A.colorSpace,Q=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||W!==tr&&W!==Li&&(Qe.getTransfer(W)===st?(Q!==Kn||J!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function yt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=P,this.setTexture2DArray=H,this.setTexture3D=V,this.setTextureCube=$,this.rebindTextures=Ne,this.setupRenderTarget=je,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Xe}function $T(t,e){function n(i,r=Li){let s;const a=Qe.getTransfer(r);if(i===Ki)return t.UNSIGNED_BYTE;if(i===iv)return t.UNSIGNED_SHORT_4_4_4_4;if(i===rv)return t.UNSIGNED_SHORT_5_5_5_1;if(i===AS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===bS)return t.BYTE;if(i===CS)return t.SHORT;if(i===Ol)return t.UNSIGNED_SHORT;if(i===nv)return t.INT;if(i===Os)return t.UNSIGNED_INT;if(i===Ii)return t.FLOAT;if(i===uc)return t.HALF_FLOAT;if(i===RS)return t.ALPHA;if(i===PS)return t.RGB;if(i===Kn)return t.RGBA;if(i===NS)return t.LUMINANCE;if(i===LS)return t.LUMINANCE_ALPHA;if(i===ws)return t.DEPTH_COMPONENT;if(i===zs)return t.DEPTH_STENCIL;if(i===DS)return t.RED;if(i===sv)return t.RED_INTEGER;if(i===US)return t.RG;if(i===av)return t.RG_INTEGER;if(i===ov)return t.RGBA_INTEGER;if(i===$c||i===Yc||i===qc||i===Kc)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===$c)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Kc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===$c)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Kc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ap||i===op||i===lp||i===cp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ap)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===op)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===up||i===dp||i===fp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===up||i===dp)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===fp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hp||i===pp||i===mp||i===gp||i===vp||i===xp||i===_p||i===yp||i===Sp||i===Mp||i===Ep||i===wp||i===Tp||i===bp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===hp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_p)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ep)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zc||i===Cp||i===Ap)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Zc)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ap)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===IS||i===Rp||i===Pp||i===Np)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Zc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Rp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Np)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ks?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class YT extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pa extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qT={type:"move"};class wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),g=.02,y=.005;c.inputState.pinching&&d>g+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=g-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new pa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const KT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class QT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Kt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Zi({vertexShader:KT,fragmentShader:ZT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zn(new hc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class JT extends js{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,d=null,g=null,y=null;const _=new QT,m=n.getContextAttributes();let u=null,v=null;const x=[],M=[],R=new Ue;let C=null;const b=new Mn;b.layers.enable(1),b.viewport=new Ut;const N=new Mn;N.layers.enable(2),N.viewport=new Ut;const T=[b,N],S=new YT;S.layers.enable(1),S.layers.enable(2);let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=x[Y];return ne===void 0&&(ne=new wu,x[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=x[Y];return ne===void 0&&(ne=new wu,x[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=x[Y];return ne===void 0&&(ne=new wu,x[Y]=ne),ne.getHandSpace()};function k(Y){const ne=M.indexOf(Y.inputSource);if(ne===-1)return;const fe=x[ne];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,c||a),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function P(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",H);for(let Y=0;Y<x.length;Y++){const ne=M[Y];ne!==null&&(M[Y]=null,x[Y].disconnect(ne))}D=null,O=null,_.reset(),e.setRenderTarget(u),g=null,d=null,h=null,r=null,v=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",P),r.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),v=new Rr(g.framebufferWidth,g.framebufferHeight,{format:Kn,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,fe=null,oe=null;m.depth&&(oe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?zs:ws,fe=m.stencil?ks:Os);const Ie={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Ie),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Rr(d.textureWidth,d.textureHeight,{format:Kn,type:Ki,depthTexture:new yv(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function H(Y){for(let ne=0;ne<Y.removed.length;ne++){const fe=Y.removed[ne],oe=M.indexOf(fe);oe>=0&&(M[oe]=null,x[oe].disconnect(fe))}for(let ne=0;ne<Y.added.length;ne++){const fe=Y.added[ne];let oe=M.indexOf(fe);if(oe===-1){for(let Ne=0;Ne<x.length;Ne++)if(Ne>=M.length){M.push(fe),oe=Ne;break}else if(M[Ne]===null){M[Ne]=fe,oe=Ne;break}if(oe===-1)break}const Ie=x[oe];Ie&&Ie.connect(fe)}}const V=new B,$=new B;function L(Y,ne,fe){V.setFromMatrixPosition(ne.matrixWorld),$.setFromMatrixPosition(fe.matrixWorld);const oe=V.distanceTo($),Ie=ne.projectionMatrix.elements,Ne=fe.projectionMatrix.elements,je=Ie[14]/(Ie[10]-1),I=Ie[14]/(Ie[10]+1),Ve=(Ie[9]+1)/Ie[5],Be=(Ie[9]-1)/Ie[5],ct=(Ie[8]-1)/Ie[0],Ee=(Ne[8]+1)/Ne[0],Xe=je*ct,Fe=je*Ee,Ae=oe/(-ct+Ee),yt=Ae*-ct;ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(yt),Y.translateZ(Ae),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const A=je+Ae,E=I+Ae,W=Xe-yt,Q=Fe+(oe-yt),J=Ve*I/E*A,ee=Be*I/E*A;Y.projectionMatrix.makePerspective(W,Q,J,ee,A,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function X(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;_.texture!==null&&(Y.near=_.depthNear,Y.far=_.depthFar),S.near=N.near=b.near=Y.near,S.far=N.far=b.far=Y.far,(D!==S.near||O!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,O=S.far,b.near=D,b.far=O,N.near=D,N.far=O,b.updateProjectionMatrix(),N.updateProjectionMatrix(),Y.updateProjectionMatrix());const ne=Y.parent,fe=S.cameras;X(S,ne);for(let oe=0;oe<fe.length;oe++)X(fe[oe],ne);fe.length===2?L(S,b,N):S.projectionMatrix.copy(b.projectionMatrix),Z(Y,S,ne)};function Z(Y,ne,fe){fe===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ad*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let ae=null;function _e(Y,ne){if(f=ne.getViewerPose(c||a),y=ne,f!==null){const fe=f.views;g!==null&&(e.setRenderTargetFramebuffer(v,g.framebuffer),e.setRenderTarget(v));let oe=!1;fe.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let Ne=0;Ne<fe.length;Ne++){const je=fe[Ne];let I=null;if(g!==null)I=g.getViewport(je);else{const Be=h.getViewSubImage(d,je);I=Be.viewport,Ne===0&&(e.setRenderTargetTextures(v,Be.colorTexture,d.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(v))}let Ve=T[Ne];Ve===void 0&&(Ve=new Mn,Ve.layers.enable(Ne),Ve.viewport=new Ut,T[Ne]=Ve),Ve.matrix.fromArray(je.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(je.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(I.x,I.y,I.width,I.height),Ne===0&&(S.matrix.copy(Ve.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(Ve)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Ne=h.getDepthInformation(fe[0]);Ne&&Ne.isValid&&Ne.texture&&_.init(e,Ne,r.renderState)}}for(let fe=0;fe<x.length;fe++){const oe=M[fe],Ie=x[fe];oe!==null&&Ie!==void 0&&Ie.update(oe,ne,c||a)}ae&&ae(Y,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),y=null}const Ge=new _v;Ge.setAnimationLoop(_e),this.setAnimationLoop=function(Y){ae=Y},this.dispose=function(){}}}const cr=new xi,eb=new ft;function tb(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,mv(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,v,x,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&g(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),y(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),_(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,v,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===an&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===an&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u),x=v.envMap,M=v.envMapRotation;x&&(m.envMap.value=x,cr.copy(M),cr.x*=-1,cr.y*=-1,cr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),m.envMapRotation.value.setFromMatrix4(eb.makeRotationFromEuler(cr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=x*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===an&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nb(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const M=x.program;i.uniformBlockBinding(v,M)}function c(v,x){let M=r[v.id];M===void 0&&(y(v),M=f(v),r[v.id]=M,v.addEventListener("dispose",m));const R=x.program;i.updateUBOMapping(v,R);const C=e.render.frame;s[v.id]!==C&&(d(v),s[v.id]=C)}function f(v){const x=h();v.__bindingPointIndex=x;const M=t.createBuffer(),R=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,R,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,M),M}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=r[v.id],M=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let C=0,b=M.length;C<b;C++){const N=Array.isArray(M[C])?M[C]:[M[C]];for(let T=0,S=N.length;T<S;T++){const D=N[T];if(g(D,C,T,R)===!0){const O=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let P=0;for(let H=0;H<k.length;H++){const V=k[H],$=_(V);typeof V=="number"||typeof V=="boolean"?(D.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,O+P,D.__data)):V.isMatrix3?(D.__data[0]=V.elements[0],D.__data[1]=V.elements[1],D.__data[2]=V.elements[2],D.__data[3]=0,D.__data[4]=V.elements[3],D.__data[5]=V.elements[4],D.__data[6]=V.elements[5],D.__data[7]=0,D.__data[8]=V.elements[6],D.__data[9]=V.elements[7],D.__data[10]=V.elements[8],D.__data[11]=0):(V.toArray(D.__data,P),P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,x,M,R){const C=v.value,b=x+"_"+M;if(R[b]===void 0)return typeof C=="number"||typeof C=="boolean"?R[b]=C:R[b]=C.clone(),!0;{const N=R[b];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return R[b]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function y(v){const x=v.uniforms;let M=0;const R=16;for(let b=0,N=x.length;b<N;b++){const T=Array.isArray(x[b])?x[b]:[x[b]];for(let S=0,D=T.length;S<D;S++){const O=T[S],k=Array.isArray(O.value)?O.value:[O.value];for(let P=0,H=k.length;P<H;P++){const V=k[P],$=_(V),L=M%R;L!==0&&R-L<$.boundary&&(M+=R-L),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=$.storage}}}const C=M%R;return C>0&&(M+=R-C),v.__size=M,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class ib{constructor(e={}){const{canvas:n=YS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),y=new Int32Array(4);let _=null,m=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Un,this.toneMapping=Wi,this.toneMappingExposure=1;const x=this;let M=!1,R=0,C=0,b=null,N=-1,T=null;const S=new Ut,D=new Ut;let O=null;const k=new Oe(0);let P=0,H=n.width,V=n.height,$=1,L=null,X=null;const Z=new Ut(0,0,H,V),ae=new Ut(0,0,H,V);let _e=!1;const Ge=new xv;let Y=!1,ne=!1;const fe=new ft,oe=new B,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function je(){return b===null?$:1}let I=i;function Ve(w,F){return n.getContext(w,F)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Af}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",q,!1),n.addEventListener("webglcontextcreationerror",K,!1),I===null){const F="webgl2";if(I=Ve(F,w),I===null)throw Ve(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Be,ct,Ee,Xe,Fe,Ae,yt,A,E,W,Q,J,ee,Se,ce,ue,Le,ie,xe,ze,be,de,De,He;function vt(){Be=new d1(I),Be.init(),de=new $T(I,Be),ct=new r1(I,Be,e,de),Ee=new WT(I),Xe=new p1(I),Fe=new NT,Ae=new XT(I,Be,Ee,Fe,ct,de,Xe),yt=new a1(x),A=new u1(x),E=new yM(I),De=new n1(I,E),W=new f1(I,E,Xe,De),Q=new g1(I,W,E,Xe),xe=new m1(I,ct,Ae),ue=new s1(Fe),J=new PT(x,yt,A,Be,ct,De,ue),ee=new tb(x,Fe),Se=new DT,ce=new zT(Be),ie=new t1(x,yt,A,Ee,Q,d,l),Le=new jT(x,Q,ct),He=new nb(I,Xe,ct,Ee),ze=new i1(I,Be,Xe),be=new h1(I,Be,Xe),Xe.programs=J.programs,x.capabilities=ct,x.extensions=Be,x.properties=Fe,x.renderLists=Se,x.shadowMap=Le,x.state=Ee,x.info=Xe}vt();const U=new JT(x,I);this.xr=U,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(H,V,!1))},this.getSize=function(w){return w.set(H,V)},this.setSize=function(w,F,G=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,V=F,n.width=Math.floor(w*$),n.height=Math.floor(F*$),G===!0&&(n.style.width=w+"px",n.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(H*$,V*$).floor()},this.setDrawingBufferSize=function(w,F,G){H=w,V=F,$=G,n.width=Math.floor(w*G),n.height=Math.floor(F*G),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,F,G,j){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,F,G,j),Ee.viewport(S.copy(Z).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(ae)},this.setScissor=function(w,F,G,j){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,F,G,j),Ee.scissor(D.copy(ae).multiplyScalar($).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(w){Ee.setScissorTest(_e=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){X=w},this.getClearColor=function(w){return w.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(w=!0,F=!0,G=!0){let j=0;if(w){let z=!1;if(b!==null){const re=b.texture.format;z=re===ov||re===av||re===sv}if(z){const re=b.texture.type,pe=re===Ki||re===Os||re===Ol||re===ks||re===iv||re===rv,ge=ie.getClearColor(),ve=ie.getClearAlpha(),we=ge.r,Te=ge.g,Me=ge.b;pe?(g[0]=we,g[1]=Te,g[2]=Me,g[3]=ve,I.clearBufferuiv(I.COLOR,0,g)):(y[0]=we,y[1]=Te,y[2]=Me,y[3]=ve,I.clearBufferiv(I.COLOR,0,y))}else j|=I.COLOR_BUFFER_BIT}F&&(j|=I.DEPTH_BUFFER_BIT),G&&(j|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",q,!1),n.removeEventListener("webglcontextcreationerror",K,!1),Se.dispose(),ce.dispose(),Fe.dispose(),yt.dispose(),A.dispose(),Q.dispose(),De.dispose(),He.dispose(),J.dispose(),U.dispose(),U.removeEventListener("sessionstart",Vn),U.removeEventListener("sessionend",Gn),nr.stop()};function he(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=Xe.autoReset,F=Le.enabled,G=Le.autoUpdate,j=Le.needsUpdate,z=Le.type;vt(),Xe.autoReset=w,Le.enabled=F,Le.autoUpdate=G,Le.needsUpdate=j,Le.type=z}function K(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function se(w){const F=w.target;F.removeEventListener("dispose",se),Ce(F)}function Ce(w){$e(w),Fe.remove(w)}function $e(w){const F=Fe.get(w).programs;F!==void 0&&(F.forEach(function(G){J.releaseProgram(G)}),w.isShaderMaterial&&J.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,G,j,z,re){F===null&&(F=Ie);const pe=z.isMesh&&z.matrixWorld.determinant()<0,ge=Pv(w,F,G,j,z);Ee.setMaterial(j,pe);let ve=G.index,we=1;if(j.wireframe===!0){if(ve=W.getWireframeAttribute(G),ve===void 0)return;we=2}const Te=G.drawRange,Me=G.attributes.position;let qe=Te.start*we,pt=(Te.start+Te.count)*we;re!==null&&(qe=Math.max(qe,re.start*we),pt=Math.min(pt,(re.start+re.count)*we)),ve!==null?(qe=Math.max(qe,0),pt=Math.min(pt,ve.count)):Me!=null&&(qe=Math.max(qe,0),pt=Math.min(pt,Me.count));const mt=pt-qe;if(mt<0||mt===1/0)return;De.setup(z,j,ge,G,ve);let ln,Ze=ze;if(ve!==null&&(ln=E.get(ve),Ze=be,Ze.setIndex(ln)),z.isMesh)j.wireframe===!0?(Ee.setLineWidth(j.wireframeLinewidth*je()),Ze.setMode(I.LINES)):Ze.setMode(I.TRIANGLES);else if(z.isLine){let ye=j.linewidth;ye===void 0&&(ye=1),Ee.setLineWidth(ye*je()),z.isLineSegments?Ze.setMode(I.LINES):z.isLineLoop?Ze.setMode(I.LINE_LOOP):Ze.setMode(I.LINE_STRIP)}else z.isPoints?Ze.setMode(I.POINTS):z.isSprite&&Ze.setMode(I.TRIANGLES);if(z.isBatchedMesh)z._multiDrawInstances!==null?Ze.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances):Ze.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)Ze.renderInstances(qe,mt,z.count);else if(G.isInstancedBufferGeometry){const ye=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Wt=Math.min(G.instanceCount,ye);Ze.renderInstances(qe,mt,Wt)}else Ze.render(qe,mt)};function xt(w,F,G){w.transparent===!0&&w.side===ci&&w.forceSinglePass===!1?(w.side=an,w.needsUpdate=!0,Qa(w,F,G),w.side=qi,w.needsUpdate=!0,Qa(w,F,G),w.side=ci):Qa(w,F,G)}this.compile=function(w,F,G=null){G===null&&(G=w),m=ce.get(G),m.init(F),v.push(m),G.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),w!==G&&w.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const j=new Set;return w.traverse(function(z){const re=z.material;if(re)if(Array.isArray(re))for(let pe=0;pe<re.length;pe++){const ge=re[pe];xt(ge,G,z),j.add(ge)}else xt(re,G,z),j.add(re)}),v.pop(),m=null,j},this.compileAsync=function(w,F,G=null){const j=this.compile(w,F,G);return new Promise(z=>{function re(){if(j.forEach(function(pe){Fe.get(pe).currentProgram.isReady()&&j.delete(pe)}),j.size===0){z(w);return}setTimeout(re,10)}Be.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Ct=null;function et(w){Ct&&Ct(w)}function Vn(){nr.stop()}function Gn(){nr.start()}const nr=new _v;nr.setAnimationLoop(et),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(w){Ct=w,U.setAnimationLoop(w),w===null?nr.stop():nr.start()},U.addEventListener("sessionstart",Vn),U.addEventListener("sessionend",Gn),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(F),F=U.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,F,b),m=ce.get(w,v.length),m.init(F),v.push(m),fe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ge.setFromProjectionMatrix(fe),ne=this.localClippingEnabled,Y=ue.init(this.clippingPlanes,ne),_=Se.get(w,u.length),_.init(),u.push(_),U.enabled===!0&&U.isPresenting===!0){const re=x.xr.getDepthSensingMesh();re!==null&&mc(re,F,-1/0,x.sortObjects)}mc(w,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(L,X),Ne=U.enabled===!1||U.isPresenting===!1||U.hasDepthSensing()===!1,Ne&&ie.addToRenderList(_,w),this.info.render.frame++,Y===!0&&ue.beginShadows();const G=m.state.shadowsArray;Le.render(G,w,F),Y===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=_.opaque,z=_.transmissive;if(m.setupLights(),F.isArrayCamera){const re=F.cameras;if(z.length>0)for(let pe=0,ge=re.length;pe<ge;pe++){const ve=re[pe];Of(j,z,w,ve)}Ne&&ie.render(w);for(let pe=0,ge=re.length;pe<ge;pe++){const ve=re[pe];Ff(_,w,ve,ve.viewport)}}else z.length>0&&Of(j,z,w,F),Ne&&ie.render(w),Ff(_,w,F);b!==null&&(Ae.updateMultisampleRenderTarget(b),Ae.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(x,w,F),De.resetDefaultState(),N=-1,T=null,v.pop(),v.length>0?(m=v[v.length-1],Y===!0&&ue.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function mc(w,F,G,j){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ge.intersectsSprite(w)){j&&oe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(fe);const pe=Q.update(w),ge=w.material;ge.visible&&_.push(w,pe,ge,G,oe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ge.intersectsObject(w))){const pe=Q.update(w),ge=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),oe.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),oe.copy(pe.boundingSphere.center)),oe.applyMatrix4(w.matrixWorld).applyMatrix4(fe)),Array.isArray(ge)){const ve=pe.groups;for(let we=0,Te=ve.length;we<Te;we++){const Me=ve[we],qe=ge[Me.materialIndex];qe&&qe.visible&&_.push(w,pe,qe,G,oe.z,Me)}}else ge.visible&&_.push(w,pe,ge,G,oe.z,null)}}const re=w.children;for(let pe=0,ge=re.length;pe<ge;pe++)mc(re[pe],F,G,j)}function Ff(w,F,G,j){const z=w.opaque,re=w.transmissive,pe=w.transparent;m.setupLightsView(G),Y===!0&&ue.setGlobalState(x.clippingPlanes,G),j&&Ee.viewport(S.copy(j)),z.length>0&&Za(z,F,G),re.length>0&&Za(re,F,G),pe.length>0&&Za(pe,F,G),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Of(w,F,G,j){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new Rr(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?uc:Ki,minFilter:yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const re=m.state.transmissionRenderTarget[j.id],pe=j.viewport||S;re.setSize(pe.z,pe.w);const ge=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor(k),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),Ne?ie.render(G):x.clear();const ve=x.toneMapping;x.toneMapping=Wi;const we=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),Y===!0&&ue.setGlobalState(x.clippingPlanes,j),Za(w,G,j),Ae.updateMultisampleRenderTarget(re),Ae.updateRenderTargetMipmap(re),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Me=0,qe=F.length;Me<qe;Me++){const pt=F[Me],mt=pt.object,ln=pt.geometry,Ze=pt.material,ye=pt.group;if(Ze.side===ci&&mt.layers.test(j.layers)){const Wt=Ze.side;Ze.side=an,Ze.needsUpdate=!0,kf(mt,G,j,ln,Ze,ye),Ze.side=Wt,Ze.needsUpdate=!0,Te=!0}}Te===!0&&(Ae.updateMultisampleRenderTarget(re),Ae.updateRenderTargetMipmap(re))}x.setRenderTarget(ge),x.setClearColor(k,P),we!==void 0&&(j.viewport=we),x.toneMapping=ve}function Za(w,F,G){const j=F.isScene===!0?F.overrideMaterial:null;for(let z=0,re=w.length;z<re;z++){const pe=w[z],ge=pe.object,ve=pe.geometry,we=j===null?pe.material:j,Te=pe.group;ge.layers.test(G.layers)&&kf(ge,F,G,ve,we,Te)}}function kf(w,F,G,j,z,re){w.onBeforeRender(x,F,G,j,z,re),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(x,F,G,j,w,re),z.transparent===!0&&z.side===ci&&z.forceSinglePass===!1?(z.side=an,z.needsUpdate=!0,x.renderBufferDirect(G,F,j,z,w,re),z.side=qi,z.needsUpdate=!0,x.renderBufferDirect(G,F,j,z,w,re),z.side=ci):x.renderBufferDirect(G,F,j,z,w,re),w.onAfterRender(x,F,G,j,z,re)}function Qa(w,F,G){F.isScene!==!0&&(F=Ie);const j=Fe.get(w),z=m.state.lights,re=m.state.shadowsArray,pe=z.state.version,ge=J.getParameters(w,z.state,re,F,G),ve=J.getProgramCacheKey(ge);let we=j.programs;j.environment=w.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(w.isMeshStandardMaterial?A:yt).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,we===void 0&&(w.addEventListener("dispose",se),we=new Map,j.programs=we);let Te=we.get(ve);if(Te!==void 0){if(j.currentProgram===Te&&j.lightsStateVersion===pe)return Bf(w,ge),Te}else ge.uniforms=J.getUniforms(w),w.onBuild(G,ge,x),w.onBeforeCompile(ge,x),Te=J.acquireProgram(ge,ve),we.set(ve,Te),j.uniforms=ge.uniforms;const Me=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Me.clippingPlanes=ue.uniform),Bf(w,ge),j.needsLights=Lv(w),j.lightsStateVersion=pe,j.needsLights&&(Me.ambientLightColor.value=z.state.ambient,Me.lightProbe.value=z.state.probe,Me.directionalLights.value=z.state.directional,Me.directionalLightShadows.value=z.state.directionalShadow,Me.spotLights.value=z.state.spot,Me.spotLightShadows.value=z.state.spotShadow,Me.rectAreaLights.value=z.state.rectArea,Me.ltc_1.value=z.state.rectAreaLTC1,Me.ltc_2.value=z.state.rectAreaLTC2,Me.pointLights.value=z.state.point,Me.pointLightShadows.value=z.state.pointShadow,Me.hemisphereLights.value=z.state.hemi,Me.directionalShadowMap.value=z.state.directionalShadowMap,Me.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Me.spotShadowMap.value=z.state.spotShadowMap,Me.spotLightMatrix.value=z.state.spotLightMatrix,Me.spotLightMap.value=z.state.spotLightMap,Me.pointShadowMap.value=z.state.pointShadowMap,Me.pointShadowMatrix.value=z.state.pointShadowMatrix),j.currentProgram=Te,j.uniformsList=null,Te}function zf(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=cl.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Bf(w,F){const G=Fe.get(w);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Pv(w,F,G,j,z){F.isScene!==!0&&(F=Ie),Ae.resetTextureUnits();const re=F.fog,pe=j.isMeshStandardMaterial?F.environment:null,ge=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:tr,ve=(j.isMeshStandardMaterial?A:yt).get(j.envMap||pe),we=j.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Te=!!G.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Me=!!G.morphAttributes.position,qe=!!G.morphAttributes.normal,pt=!!G.morphAttributes.color;let mt=Wi;j.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(mt=x.toneMapping);const ln=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ze=ln!==void 0?ln.length:0,ye=Fe.get(j),Wt=m.state.lights;if(Y===!0&&(ne===!0||w!==T)){const xn=w===T&&j.id===N;ue.setState(j,w,xn)}let tt=!1;j.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Wt.state.version||ye.outputColorSpace!==ge||z.isBatchedMesh&&ye.batching===!1||!z.isBatchedMesh&&ye.batching===!0||z.isBatchedMesh&&ye.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&ye.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&ye.instancing===!1||!z.isInstancedMesh&&ye.instancing===!0||z.isSkinnedMesh&&ye.skinning===!1||!z.isSkinnedMesh&&ye.skinning===!0||z.isInstancedMesh&&ye.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ye.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ye.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ye.instancingMorph===!1&&z.morphTexture!==null||ye.envMap!==ve||j.fog===!0&&ye.fog!==re||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==ue.numPlanes||ye.numIntersection!==ue.numIntersection)||ye.vertexAlphas!==we||ye.vertexTangents!==Te||ye.morphTargets!==Me||ye.morphNormals!==qe||ye.morphColors!==pt||ye.toneMapping!==mt||ye.morphTargetsCount!==Ze)&&(tt=!0):(tt=!0,ye.__version=j.version);let ei=ye.currentProgram;tt===!0&&(ei=Qa(j,F,z));let Ja=!1,ir=!1,gc=!1;const At=ei.getUniforms(),yi=ye.uniforms;if(Ee.useProgram(ei.program)&&(Ja=!0,ir=!0,gc=!0),j.id!==N&&(N=j.id,ir=!0),Ja||T!==w){At.setValue(I,"projectionMatrix",w.projectionMatrix),At.setValue(I,"viewMatrix",w.matrixWorldInverse);const xn=At.map.cameraPosition;xn!==void 0&&xn.setValue(I,oe.setFromMatrixPosition(w.matrixWorld)),ct.logarithmicDepthBuffer&&At.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&At.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,ir=!0,gc=!0)}if(z.isSkinnedMesh){At.setOptional(I,z,"bindMatrix"),At.setOptional(I,z,"bindMatrixInverse");const xn=z.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),At.setValue(I,"boneTexture",xn.boneTexture,Ae))}z.isBatchedMesh&&(At.setOptional(I,z,"batchingTexture"),At.setValue(I,"batchingTexture",z._matricesTexture,Ae),At.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&At.setValue(I,"batchingColorTexture",z._colorsTexture,Ae));const vc=G.morphAttributes;if((vc.position!==void 0||vc.normal!==void 0||vc.color!==void 0)&&xe.update(z,G,ei),(ir||ye.receiveShadow!==z.receiveShadow)&&(ye.receiveShadow=z.receiveShadow,At.setValue(I,"receiveShadow",z.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(yi.envMap.value=ve,yi.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&F.environment!==null&&(yi.envMapIntensity.value=F.environmentIntensity),ir&&(At.setValue(I,"toneMappingExposure",x.toneMappingExposure),ye.needsLights&&Nv(yi,gc),re&&j.fog===!0&&ee.refreshFogUniforms(yi,re),ee.refreshMaterialUniforms(yi,j,$,V,m.state.transmissionRenderTarget[w.id]),cl.upload(I,zf(ye),yi,Ae)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(cl.upload(I,zf(ye),yi,Ae),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&At.setValue(I,"center",z.center),At.setValue(I,"modelViewMatrix",z.modelViewMatrix),At.setValue(I,"normalMatrix",z.normalMatrix),At.setValue(I,"modelMatrix",z.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const xn=j.uniformsGroups;for(let xc=0,Dv=xn.length;xc<Dv;xc++){const Hf=xn[xc];He.update(Hf,ei),He.bind(Hf,ei)}}return ei}function Nv(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Lv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,F,G){Fe.get(w.texture).__webglTexture=F,Fe.get(w.depthTexture).__webglTexture=G;const j=Fe.get(w);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=G===void 0,j.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){const G=Fe.get(w);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,G=0){b=w,R=F,C=G;let j=!0,z=null,re=!1,pe=!1;if(w){const ve=Fe.get(w);ve.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(I.FRAMEBUFFER,null),j=!1):ve.__webglFramebuffer===void 0?Ae.setupRenderTarget(w):ve.__hasExternalTextures&&Ae.rebindTextures(w,Fe.get(w.texture).__webglTexture,Fe.get(w.depthTexture).__webglTexture);const we=w.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(pe=!0);const Te=Fe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Te[F])?z=Te[F][G]:z=Te[F],re=!0):w.samples>0&&Ae.useMultisampledRTT(w)===!1?z=Fe.get(w).__webglMultisampledFramebuffer:Array.isArray(Te)?z=Te[G]:z=Te,S.copy(w.viewport),D.copy(w.scissor),O=w.scissorTest}else S.copy(Z).multiplyScalar($).floor(),D.copy(ae).multiplyScalar($).floor(),O=_e;if(Ee.bindFramebuffer(I.FRAMEBUFFER,z)&&j&&Ee.drawBuffers(w,z),Ee.viewport(S),Ee.scissor(D),Ee.setScissorTest(O),re){const ve=Fe.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve.__webglTexture,G)}else if(pe){const ve=Fe.get(w.texture),we=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ve.__webglTexture,G||0,we)}N=-1},this.readRenderTargetPixels=function(w,F,G,j,z,re,pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(ge=ge[pe]),ge){Ee.bindFramebuffer(I.FRAMEBUFFER,ge);try{const ve=w.texture,we=ve.format,Te=ve.type;if(!ct.textureFormatReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-j&&G>=0&&G<=w.height-z&&I.readPixels(F,G,j,z,de.convert(we),de.convert(Te),re)}finally{const ve=b!==null?Fe.get(b).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(w,F,G,j,z,re,pe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(ge=ge[pe]),ge){Ee.bindFramebuffer(I.FRAMEBUFFER,ge);try{const ve=w.texture,we=ve.format,Te=ve.type;if(!ct.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-j&&G>=0&&G<=w.height-z){const Me=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Me),I.bufferData(I.PIXEL_PACK_BUFFER,re.byteLength,I.STREAM_READ),I.readPixels(F,G,j,z,de.convert(we),de.convert(Te),0),I.flush();const qe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await qS(I,qe,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Me),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,re)}finally{I.deleteBuffer(Me),I.deleteSync(qe)}return re}}finally{const ve=b!==null?Fe.get(b).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,ve)}}},this.copyFramebufferToTexture=function(w,F=null,G=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);const j=Math.pow(2,-G),z=Math.floor(w.image.width*j),re=Math.floor(w.image.height*j),pe=F!==null?F.x:0,ge=F!==null?F.y:0;Ae.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,pe,ge,z,re),Ee.unbindTexture()},this.copyTextureToTexture=function(w,F,G=null,j=null,z=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,w=arguments[1],F=arguments[2],z=arguments[3]||0,G=null);let re,pe,ge,ve,we,Te;G!==null?(re=G.max.x-G.min.x,pe=G.max.y-G.min.y,ge=G.min.x,ve=G.min.y):(re=w.image.width,pe=w.image.height,ge=0,ve=0),j!==null?(we=j.x,Te=j.y):(we=0,Te=0);const Me=de.convert(F.format),qe=de.convert(F.type);Ae.setTexture2D(F,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const pt=I.getParameter(I.UNPACK_ROW_LENGTH),mt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ln=I.getParameter(I.UNPACK_SKIP_PIXELS),Ze=I.getParameter(I.UNPACK_SKIP_ROWS),ye=I.getParameter(I.UNPACK_SKIP_IMAGES),Wt=w.isCompressedTexture?w.mipmaps[z]:w.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Wt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Wt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ge),I.pixelStorei(I.UNPACK_SKIP_ROWS,ve),w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,z,we,Te,re,pe,Me,qe,Wt.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,z,we,Te,Wt.width,Wt.height,Me,Wt.data):I.texSubImage2D(I.TEXTURE_2D,z,we,Te,Me,qe,Wt),I.pixelStorei(I.UNPACK_ROW_LENGTH,pt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,mt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ln),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ye),z===0&&F.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(w,F,G=null,j=null,z=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,j=arguments[1]||null,w=arguments[2],F=arguments[3],z=arguments[4]||0);let re,pe,ge,ve,we,Te,Me,qe,pt;const mt=w.isCompressedTexture?w.mipmaps[z]:w.image;G!==null?(re=G.max.x-G.min.x,pe=G.max.y-G.min.y,ge=G.max.z-G.min.z,ve=G.min.x,we=G.min.y,Te=G.min.z):(re=mt.width,pe=mt.height,ge=mt.depth,ve=0,we=0,Te=0),j!==null?(Me=j.x,qe=j.y,pt=j.z):(Me=0,qe=0,pt=0);const ln=de.convert(F.format),Ze=de.convert(F.type);let ye;if(F.isData3DTexture)Ae.setTexture3D(F,0),ye=I.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)Ae.setTexture2DArray(F,0),ye=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const Wt=I.getParameter(I.UNPACK_ROW_LENGTH),tt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ei=I.getParameter(I.UNPACK_SKIP_PIXELS),Ja=I.getParameter(I.UNPACK_SKIP_ROWS),ir=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,mt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,mt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ve),I.pixelStorei(I.UNPACK_SKIP_ROWS,we),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Te),w.isDataTexture||w.isData3DTexture?I.texSubImage3D(ye,z,Me,qe,pt,re,pe,ge,ln,Ze,mt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(ye,z,Me,qe,pt,re,pe,ge,ln,mt.data):I.texSubImage3D(ye,z,Me,qe,pt,re,pe,ge,ln,Ze,mt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Wt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,tt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ei),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ja),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ir),z===0&&F.generateMipmaps&&I.generateMipmap(ye),Ee.unbindTexture()},this.initRenderTarget=function(w){Fe.get(w).__webglFramebuffer===void 0&&Ae.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ae.setTextureCube(w,0):w.isData3DTexture?Ae.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ae.setTexture2DArray(w,0):Ae.setTexture2D(w,0),Ee.unbindTexture()},this.resetState=function(){R=0,C=0,b=null,Ee.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Rf?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===dc?"display-p3":"srgb"}}class Uf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Oe(e),this.density=n}clone(){return new Uf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rb extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class sb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Cd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Pf("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new B;class Gl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix4(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.applyNormalMatrix(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.transformDirection(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=qn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=qn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=qn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=qn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=qn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new on(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class bv extends Lr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Qr;const ra=new B,Jr=new B,es=new B,ts=new Ue,sa=new Ue,Cv=new ft,Ho=new B,aa=new B,Vo=new B,Sm=new Ue,Tu=new Ue,Mm=new Ue;class ab extends Gt{constructor(e=new bv){if(super(),this.isSprite=!0,this.type="Sprite",Qr===void 0){Qr=new mn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new sb(n,5);Qr.setIndex([0,1,2,0,2,3]),Qr.setAttribute("position",new Gl(i,3,0,!1)),Qr.setAttribute("uv",new Gl(i,2,3,!1))}this.geometry=Qr,this.material=e,this.center=new Ue(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Jr.setFromMatrixScale(this.matrixWorld),Cv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),es.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Jr.multiplyScalar(-es.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Go(Ho.set(-.5,-.5,0),es,a,Jr,r,s),Go(aa.set(.5,-.5,0),es,a,Jr,r,s),Go(Vo.set(.5,.5,0),es,a,Jr,r,s),Sm.set(0,0),Tu.set(1,0),Mm.set(1,1);let o=e.ray.intersectTriangle(Ho,aa,Vo,!1,ra);if(o===null&&(Go(aa.set(-.5,.5,0),es,a,Jr,r,s),Tu.set(0,1),o=e.ray.intersectTriangle(Ho,Vo,aa,!1,ra),o===null))return;const l=e.ray.origin.distanceTo(ra);l<e.near||l>e.far||n.push({distance:l,point:ra.clone(),uv:On.getInterpolation(ra,Ho,aa,Vo,Sm,Tu,Mm,new Ue),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Go(t,e,n,i,r,s){ts.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(sa.x=s*ts.x-r*ts.y,sa.y=r*ts.x+s*ts.y):sa.copy(ts),t.copy(e),t.x+=sa.x,t.y+=sa.y,t.applyMatrix4(Cv)}class Av extends Lr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jl=new B,Wl=new B,Em=new ft,oa=new fc,jo=new qa,bu=new B,wm=new B;class ob extends Gt{constructor(e=new mn,n=new Av){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)jl.fromBufferAttribute(n,r-1),Wl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=jl.distanceTo(Wl);e.setAttribute("lineDistance",new Bn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(r),jo.radius+=s,e.ray.intersectsSphere(jo)===!1)return;Em.copy(r).invert(),oa.copy(e.ray).applyMatrix4(Em);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const g=Math.max(0,a.start),y=Math.min(f.count,a.start+a.count);for(let _=g,m=y-1;_<m;_+=c){const u=f.getX(_),v=f.getX(_+1),x=Wo(this,e,oa,l,u,v);x&&n.push(x)}if(this.isLineLoop){const _=f.getX(y-1),m=f.getX(g),u=Wo(this,e,oa,l,_,m);u&&n.push(u)}}else{const g=Math.max(0,a.start),y=Math.min(d.count,a.start+a.count);for(let _=g,m=y-1;_<m;_+=c){const u=Wo(this,e,oa,l,_,_+1);u&&n.push(u)}if(this.isLineLoop){const _=Wo(this,e,oa,l,y-1,g);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wo(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(jl.fromBufferAttribute(a,r),Wl.fromBufferAttribute(a,s),n.distanceSqToSegment(jl,Wl,bu,wm)>i)return;bu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(bu);if(!(l<e.near||l>e.far))return{distance:l,point:wm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}class Rv extends Lr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tm=new ft,Pd=new fc,Xo=new qa,$o=new B;class lb extends Gt{constructor(e=new mn,n=new Rv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xo.copy(i.boundingSphere),Xo.applyMatrix4(r),Xo.radius+=s,e.ray.intersectsSphere(Xo)===!1)return;Tm.copy(r).invert(),Pd.copy(e.ray).applyMatrix4(Tm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let y=d,_=g;y<_;y++){const m=c.getX(y);$o.fromBufferAttribute(h,m),bm($o,m,l,r,e,n,this)}}else{const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=d,_=g;y<_;y++)$o.fromBufferAttribute(h,y),bm($o,y,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function bm(t,e,n,i,r,s,a){const o=Pd.distanceSqToPoint(t);if(o<n){const l=new B;Pd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Cm extends Kt{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class If extends mn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const f=[],h=new B,d=new B,g=[],y=[],_=[],m=[];for(let u=0;u<=i;u++){const v=[],x=u/i;let M=0;u===0&&a===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let R=0;R<=n;R++){const C=R/n;h.x=-e*Math.cos(r+C*s)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(r+C*s)*Math.sin(a+x*o),y.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(C+M,1-x),v.push(c++)}f.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const x=f[u][v+1],M=f[u][v],R=f[u+1][v],C=f[u+1][v+1];(u!==0||a>0)&&g.push(x,M,C),(u!==i-1||l<Math.PI)&&g.push(M,R,C)}this.setIndex(g),this.setAttribute("position",new Bn(y,3)),this.setAttribute("normal",new Bn(_,3)),this.setAttribute("uv",new Bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new If(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Am=new ft;class cb{constructor(e,n,i=0,r=1/0){this.ray=new fc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Nf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Am.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Am),this}intersectObject(e,n=!0,i=[]){return Nd(e,this,i,n),i.sort(Rm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Nd(e[r],this,i,n);return i.sort(Rm),i}}function Rm(t,e){return t.distance-e.distance}function Nd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)Nd(s[a],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Af}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Af);function la(t,e,n){return Math.max(e,Math.min(n,t))}function ul(t){const e=new Date(t),n=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),s=String(e.getHours()).padStart(2,"0"),a=String(e.getMinutes()).padStart(2,"0");return`${n}.${i}.${r} ${s}:${a}`}function Pm(t,e){return Math.random()*(e-t)+t}class ub{constructor(){this.audioContext=null,this.masterGain=null,this.sfxGain=null,this.volume=.7,this.sfxVolume=.8,this.initialized=!1}init(){if(!this.initialized)try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.audioContext=new e,this.masterGain=this.audioContext.createGain(),this.sfxGain=this.audioContext.createGain(),this.masterGain.connect(this.audioContext.destination),this.sfxGain.connect(this.masterGain),this.masterGain.gain.value=this.volume,this.sfxGain.gain.value=this.sfxVolume,this.initialized=!0}catch{console.warn("Web Audio API not supported")}}ensureContext(){var e;this.audioContext||this.init(),((e=this.audioContext)==null?void 0:e.state)==="suspended"&&this.audioContext.resume()}setVolume(e){this.volume=e,this.masterGain&&(this.masterGain.gain.value=e)}setSfxVolume(e){this.sfxVolume=e,this.sfxGain&&(this.sfxGain.gain.value=e)}playTone(e,n,i="sine",r=.3){if(this.ensureContext(),!this.audioContext||!this.sfxGain)return;const s=this.audioContext.createOscillator(),a=this.audioContext.createGain();s.type=i,s.frequency.value=e,a.gain.setValueAtTime(0,this.audioContext.currentTime),a.gain.linearRampToValueAtTime(r,this.audioContext.currentTime+.01),a.gain.exponentialRampToValueAtTime(.001,this.audioContext.currentTime+n),s.connect(a),a.connect(this.sfxGain),s.start(),s.stop(this.audioContext.currentTime+n)}playConnectSuccess(){this.playTone(523.25,.08,"sine",.25),setTimeout(()=>this.playTone(659.25,.1,"sine",.2),60),setTimeout(()=>this.playTone(783.99,.12,"sine",.15),140)}playConnectFail(){this.playTone(200,.12,"sawtooth",.15),setTimeout(()=>this.playTone(150,.15,"sawtooth",.1),80)}playConstellationComplete(){[523.25,659.25,783.99,1046.5,1318.51].forEach((n,i)=>{setTimeout(()=>this.playTone(n,.15,"sine",.2),i*100)})}playAchievement(){[783.99,1046.5,1318.51,1567.98,2093].forEach((n,i)=>{setTimeout(()=>this.playTone(n,.18,"triangle",.22),i*80)}),setTimeout(()=>this.playTone(2637.02,.4,"sine",.25),450)}playClick(){this.playTone(880,.04,"sine",.15)}playHover(){this.playTone(440,.03,"sine",.08)}playPanelOpen(){this.playTone(330,.05,"sine",.12),setTimeout(()=>this.playTone(440,.05,"sine",.1),30)}playPanelClose(){this.playTone(440,.05,"sine",.12),setTimeout(()=>this.playTone(330,.05,"sine",.1),30)}playStarHover(){this.playTone(587.33,.04,"triangle",.06)}playZoom(){this.playTone(220,.02,"sine",.05)}playReset(){[392,349.23,311.13,261.63].forEach((n,i)=>{setTimeout(()=>this.playTone(n,.1,"sawtooth",.1),i*70)})}}const Ye=new ub;class db{constructor(e,n,i,r,s){Vf(this,"animate",()=>{this.animationId=requestAnimationFrame(this.animate),this.time+=.01*this.settings.animationSpeed,this.cameraCurrentX+=(this.cameraTargetX-this.cameraCurrentX)*.05,this.cameraCurrentY+=(this.cameraTargetY-this.cameraCurrentY)*.05,this.camera.position.x=this.cameraCurrentX,this.camera.position.y=this.cameraCurrentY,this.camera.position.z+=(this.cameraZ-this.camera.position.z)*.05,this.camera.lookAt(this.cameraCurrentX,this.cameraCurrentY,0),this.starField&&(this.starField.rotation.y=this.time*.01,this.starField.rotation.x=Math.sin(this.time*.005)*.05),this.nebulas.forEach((e,n)=>{e.rotation.y=this.time*(.01+n*.003)}),this.starMeshes.forEach((e,n)=>{const i=1+Math.sin(this.time*2+n*.7)*.08,r=this.connectionPath.includes(e.userData.starId),s=e===this.hoveredStar;let o=e.userData.baseScale;r&&(o*=1.8),s&&(o*=s===r?1.1:r?1.2:1.5),e.scale.set(o*i,o*i,1)}),this.renderer.render(this.scene,this.camera)});this.container=e,this.settings=n,this.onStarClick=i,this.onCanvasEvent=r,this.onConnectResult=s,this.scene=null,this.camera=null,this.renderer=null,this.animationId=null,this.starField=null,this.constellationMeshes=new Map,this.connectionLines=new Map,this.tempLine=null,this.nebulas=[],this.raycaster=new cb,this.mouse=new Ue,this.hoveredStar=null,this.starLabelEl=null,this.targetConstellationId=null,this.connectionPath=[],this.cameraZ=8,this.minCameraZ=3,this.maxCameraZ=20,this.cameraTargetX=0,this.cameraTargetY=0,this.cameraCurrentX=0,this.cameraCurrentY=0,this.isDragging=!1,this.dragStartX=0,this.dragStartY=0,this.cameraStartX=0,this.cameraStartY=0,this.dragMoved=!1,this.dragThreshold=5,this.isPinching=!1,this.initialPinchDistance=0,this.initialCameraZ=8,this.starMeshes=[],this.time=0,this.nebulasCreated=!1,this.init()}init(){const e=this.container.clientWidth,n=this.container.clientHeight,i=Ur[this.settings.graphicsQuality]||Ur.high;this.scene=new rb,this.scene.background=this.createBackgroundGradient(),this.scene.fog=new Uf(329231,.015),this.camera=new Mn(60,e/n,.1,1e3),this.camera.position.set(0,0,this.cameraZ),this.camera.lookAt(0,0,0),this.renderer=new ib({antialias:i.antialias,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e,n),this.renderer.setClearColor(329231,1),this.container.appendChild(this.renderer.domElement),this.createStarLabel();const r=i.starCount,s=Math.round(r*this.settings.starDensity);this.createStarField(s,i.particleSize),this.settings.showNebula&&(this.createNebulae(),this.nebulasCreated=!0),Ye.setVolume(this.settings.volume),Ye.setSfxVolume(this.settings.sfxVolume),this.animate(),this.bindEvents()}createStarLabel(){this.starLabelEl=document.createElement("div"),this.starLabelEl.className="star-label",this.starLabelEl.style.cssText=`
      position: absolute;
      pointer-events: none;
      z-index: 10;
      padding: 4px 10px;
      background: rgba(10, 14, 31, 0.9);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 215, 0, 0.4);
      border-radius: 8px;
      color: #ffd700;
      font-family: Georgia, serif;
      font-size: 12px;
      white-space: nowrap;
      transform: translate(-50%, -140%);
      opacity: 0;
      transition: opacity 0.2s ease;
      box-shadow: 0 2px 12px rgba(255, 215, 0, 0.2);
    `,this.container.appendChild(this.starLabelEl)}updateStarLabel(e,n,i,r){if(!this.starLabelEl||!this.settings.showLabels){this.starLabelEl&&(this.starLabelEl.style.opacity="0");return}if(e&&n){const s=this.container.getBoundingClientRect();this.starLabelEl.innerHTML=`
        <div style="font-weight: bold; color: #ffd700;">${n.starName||"未知"}</div>
        ${n.starId?`<div style="font-size: 10px; color: rgba(255,255,255,0.5); margin-top: 2px;">${n.starId}</div>`:""}
      `,this.starLabelEl.style.left=`${i-s.left}px`,this.starLabelEl.style.top=`${r-s.top}px`,this.starLabelEl.style.opacity="1"}else this.starLabelEl.style.opacity="0"}createBackgroundGradient(){const e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d"),i=n.createRadialGradient(256,256,0,256,256,512);i.addColorStop(0,"#0f1530"),i.addColorStop(.4,"#0a0e1f"),i.addColorStop(1,"#05060f"),n.fillStyle=i,n.fillRect(0,0,512,512);const r=new Cm(e);return r.colorSpace=Un,r}createStarField(e,n){const i=new mn,r=new Float32Array(e*3),s=new Float32Array(e*3),a=new Float32Array(e),o=[new Oe("#ffffff"),new Oe("#8ec5ff"),new Oe("#ffddaa"),new Oe("#ffccaa"),new Oe("#cce4ff")];for(let c=0;c<e;c++){const f=Pm(12,40),h=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1);r[c*3]=f*Math.sin(d)*Math.cos(h),r[c*3+1]=f*Math.sin(d)*Math.sin(h),r[c*3+2]=f*Math.cos(d)-15;const g=o[Math.floor(Math.random()*o.length)];s[c*3]=g.r,s[c*3+1]=g.g,s[c*3+2]=g.b,a[c]=n*Pm(.5,2)}i.setAttribute("position",new on(r,3)),i.setAttribute("color",new on(s,3)),i.setAttribute("size",new on(a,1));const l=new Rv({size:n,vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,blending:ps,depthWrite:!1});this.starField=new lb(i,l),this.scene.add(this.starField)}rebuildStarField(){this.starField&&(this.scene.remove(this.starField),this.starField.geometry&&this.starField.geometry.dispose(),this.starField.material&&this.starField.material.dispose(),this.starField=null);const e=Ur[this.settings.graphicsQuality]||Ur.high,n=e.starCount,i=Math.round(n*this.settings.starDensity);this.createStarField(i,e.particleSize)}createNebulae(){[{x:-8,y:5,z:-10,color:7035903,scale:6,opacity:.08},{x:7,y:-4,z:-8,color:5239001,scale:5,opacity:.06},{x:2,y:8,z:-12,color:16747099,scale:7,opacity:.05},{x:-5,y:-7,z:-6,color:16739229,scale:4,opacity:.07}].forEach(n=>{const i=new If(n.scale,32,32),r=new Lf({color:n.color,transparent:!0,opacity:n.opacity,blending:ps,depthWrite:!1}),s=new Zn(i,r);s.position.set(n.x,n.y,n.z),this.scene.add(s),this.nebulas.push(s)})}removeNebulae(){this.nebulas.forEach(e=>{this.scene.remove(e),e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.nebulas=[],this.nebulasCreated=!1}setNebulaeVisible(e){e&&!this.nebulasCreated?(this.createNebulae(),this.nebulasCreated=!0):!e&&this.nebulasCreated&&this.removeNebulae()}loadConstellation(e){this.clearConstellation(),this.targetConstellationId=e,this.connectionPath=[];const n=Ar(e);if(!n)return;const i=new pa;i.name="constellation_group";const r=[];n.stars.forEach(s=>{const a=this.createStarMesh(s);a.position.set(s.x,s.y,s.z||0),a.userData={starId:s.id,starName:s.name,isConstellationStar:!0},i.add(a),r.push(a),this.starMeshes.push(a)}),this.constellationMeshes.set(e,{group:i,stars:r}),this.scene.add(i),this.cameraTargetX=n.center.x,this.cameraTargetY=n.center.y}createStarMesh(e){const n=Math.max(.2,1-e.mag/6*.8),i=.12+(1-e.mag/6)*.15,r=document.createElement("canvas");r.width=64,r.height=64;const s=r.getContext("2d"),a=32,o=s.createRadialGradient(a,a,0,a,a,32);o.addColorStop(0,e.color||"#ffffff"),o.addColorStop(.3,e.color||"#ffffff"),o.addColorStop(.6,(e.color||"#ffffff")+"88"),o.addColorStop(1,"transparent"),s.fillStyle=o,s.beginPath(),s.arc(a,a,32,0,Math.PI*2),s.fill(),s.fillStyle="#ffffff",s.beginPath(),s.arc(a,a,3+n*4,0,Math.PI*2),s.fill();const l=new Cm(r),c=new bv({map:l,transparent:!0,blending:ps,depthWrite:!1}),f=new ab(c);return f.scale.set(i*2,i*2,1),f.userData.baseScale=i*2,f.userData.brightness=n,f}updateConnectionPath(e){if(this.connectionPath=[...e],this.targetConstellationId){const n=this.constellationMeshes.get(this.targetConstellationId);if(!n)return;this.connectionLines.forEach(i=>this.scene.remove(i)),this.connectionLines.clear();for(let i=0;i<e.length-1;i++){const r=n.stars.find(a=>a.userData.starId===e[i]),s=n.stars.find(a=>a.userData.starId===e[i+1]);if(r&&s){const a=this.createConnectionLine(r.position,s.position,16766720);this.scene.add(a),this.connectionLines.set(`${e[i]}-${e[i+1]}`,a)}}n.stars.forEach(i=>{const r=e.includes(i.userData.starId),s=i.userData.baseScale*(r?1.8:1);i.scale.set(s,s,1)})}}createConnectionLine(e,n,i=16766720){const r=[e.clone(),n.clone()],s=new mn().setFromPoints(r),a=new Av({color:i,transparent:!0,opacity:.85,linewidth:2,blending:ps});return new ob(s,a)}setTempLine(e,n){if(this.tempLine&&(this.scene.remove(this.tempLine),this.tempLine=null),!this.targetConstellationId||!e)return;const i=this.constellationMeshes.get(this.targetConstellationId);if(!i)return;const r=i.stars.find(s=>s.userData.starId===e);!r||!n||(this.tempLine=this.createConnectionLine(r.position,n,8956671),this.tempLine.material.opacity=.5,this.scene.add(this.tempLine))}clearTempLine(){this.tempLine&&(this.scene.remove(this.tempLine),this.tempLine=null)}clearConstellation(){this.constellationMeshes.forEach(({group:e})=>{this.scene.remove(e)}),this.constellationMeshes.clear(),this.connectionLines.forEach(e=>this.scene.remove(e)),this.connectionLines.clear(),this.clearTempLine(),this.starMeshes=[],this.targetConstellationId=null,this.connectionPath=[]}bindEvents(){const e=this.renderer.domElement;e.addEventListener("pointerdown",n=>this.onPointerDown(n)),e.addEventListener("pointermove",n=>this.onPointerMove(n)),e.addEventListener("pointerup",n=>this.onPointerUp(n)),e.addEventListener("pointercancel",()=>this.onPointerCancel()),e.addEventListener("wheel",n=>this.onWheel(n),{passive:!1}),window.addEventListener("resize",()=>this.onResize())}onPointerDown(e){e.pointerType==="touch"?this.isPinching||(this.isDragging=!0,this.dragStartX=e.clientX,this.dragStartY=e.clientY,this.cameraStartX=this.cameraTargetX,this.cameraStartY=this.cameraTargetY,this.dragMoved=!1):(this.isDragging=!0,this.dragStartX=e.clientX,this.dragStartY=e.clientY,this.cameraStartX=this.cameraTargetX,this.cameraStartY=this.cameraTargetY,this.dragMoved=!1),e.pointerType==="mouse"&&this.updateMouse(e)}onPointerMove(e){if(e.pointerType==="mouse"&&(this.updateMouse(e),this.checkHover(e.clientX,e.clientY)),this.isDragging&&!this.isPinching){const n=e.clientX-this.dragStartX,i=e.clientY-this.dragStartY;(Math.abs(n)>this.dragThreshold||Math.abs(i)>this.dragThreshold)&&(this.dragMoved=!0);const r=this.cameraZ/8;this.cameraTargetX=this.cameraStartX-n/this.container.clientWidth*10*r,this.cameraTargetY=this.cameraStartY+i/this.container.clientHeight*7*r,this.cameraTargetX=la(this.cameraTargetX,-15,15),this.cameraTargetY=la(this.cameraTargetY,-12,12),this.onCanvasEvent&&this.onCanvasEvent({type:"pan"})}if(e.pointerType==="mouse"&&this.connectionPath.length>0){const n=this.screenToWorld(e.clientX,e.clientY);n&&this.setTempLine(this.connectionPath[this.connectionPath.length-1],n)}}onPointerUp(e){if(!this.dragMoved&&!this.isPinching){this.updateMouse(e);const n=this.pickStar();n&&(Ye.playClick(),this.onStarClick&&this.onStarClick(n.userData.starId))}this.isDragging=!1,this.clearTempLine()}notifyConnectResult(e,n=!1){e?n?Ye.playConstellationComplete():Ye.playConnectSuccess():Ye.playConnectFail()}onPointerCancel(){this.isDragging=!1,this.isPinching=!1,this.clearTempLine()}onWheel(e){e.preventDefault();const n=e.deltaY*.01;this.cameraZ=la(this.cameraZ+n,this.minCameraZ,this.maxCameraZ),this.onCanvasEvent&&this.onCanvasEvent({type:"zoom",zoom:this.cameraZ})}handlePinchStart(e){if(e.touches&&e.touches.length===2){this.isPinching=!0,this.isDragging=!1;const n=e.touches[0],i=e.touches[1];this.initialPinchDistance=Math.hypot(i.clientX-n.clientX,i.clientY-n.clientY),this.initialCameraZ=this.cameraZ}}handlePinchMove(e){if(e.touches&&e.touches.length===2&&this.isPinching){e.preventDefault();const n=e.touches[0],i=e.touches[1],r=Math.hypot(i.clientX-n.clientX,i.clientY-n.clientY),s=this.initialPinchDistance/r;this.cameraZ=la(this.initialCameraZ*s,this.minCameraZ,this.maxCameraZ),this.onCanvasEvent&&this.onCanvasEvent({type:"zoom",zoom:this.cameraZ})}}handlePinchEnd(){this.isPinching=!1}updateMouse(e){const n=this.container.getBoundingClientRect();this.mouse.x=(e.clientX-n.left)/n.width*2-1,this.mouse.y=-((e.clientY-n.top)/n.height)*2+1}screenToWorld(e,n){const i=this.container.getBoundingClientRect(),r=(e-i.left)/i.width*2-1,s=-((n-i.top)/i.height)*2+1,a=new B(r,s,.5);a.unproject(this.camera);const o=a.sub(this.camera.position).normalize(),l=-this.camera.position.z/o.z;return this.camera.position.clone().add(o.multiplyScalar(l))}pickStar(){this.raycaster.setFromCamera(this.mouse,this.camera);const e=this.raycaster.intersectObjects(this.starMeshes);return e.length>0?e[0].object:null}checkHover(e,n){const i=this.pickStar();if(i!==this.hoveredStar){if(this.hoveredStar){const r=this.hoveredStar,s=this.connectionPath.includes(r.userData.starId),a=r.userData.baseScale*(s?1.8:1);r.scale.set(a,a,1)}if(i){const r=this.connectionPath.includes(i.userData.starId),s=i.userData.baseScale*(r?2.2:1.6);i.scale.set(s,s,1),Ye.playStarHover(),this.updateStarLabel(!0,i.userData,e,n)}else this.updateStarLabel(!1);this.hoveredStar=i,this.onCanvasEvent&&this.onCanvasEvent({type:"hover",star:i?i.userData:null})}else i&&e&&n&&this.updateStarLabel(!0,i.userData,e,n)}onResize(){const e=this.container.clientWidth,n=this.container.clientHeight;this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n)}setZoom(e){this.cameraZ=la(e,this.minCameraZ,this.maxCameraZ)}focusOnConstellation(e){const n=Ar(e);n&&(this.cameraTargetX=n.center.x,this.cameraTargetY=n.center.y,this.cameraZ=6)}updateSettings(e){const n={...this.settings};if(this.settings={...this.settings,...e},e.volume!==void 0&&Ye.setVolume(e.volume),e.sfxVolume!==void 0&&Ye.setSfxVolume(e.sfxVolume),e.starDensity!==void 0&&e.starDensity!==n.starDensity&&this.rebuildStarField(),e.showNebula!==void 0&&e.showNebula!==n.showNebula&&this.setNebulaeVisible(e.showNebula),e.showLabels!==void 0&&!e.showLabels&&this.starLabelEl&&(this.starLabelEl.style.opacity="0"),e.animationSpeed,e.graphicsQuality!==void 0&&e.graphicsQuality!==n.graphicsQuality){const i=Ur[e.graphicsQuality]||Ur.high;this.renderer&&this.renderer.setPixelRatio(i.antialias?Math.min(window.devicePixelRatio,2):1),this.rebuildStarField()}}dispose(){this.animationId&&cancelAnimationFrame(this.animationId),this.starLabelEl&&this.starLabelEl.parentNode&&(this.starLabelEl.parentNode.removeChild(this.starLabelEl),this.starLabelEl=null),window.removeEventListener("resize",()=>this.onResize()),this.renderer&&(this.renderer.dispose(),this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)),this.clearConstellation(),this.scene&&this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())})}}function fb(){const t=Ke.useRef(null),e=Ke.useRef(null),n=Ke.useRef(0),i=Dt(c=>c.settings),r=Dt(c=>c.currentTargetConstellation),s=Dt(c=>c.connectionPath),a=Dt(c=>c.mistakes),o=Dt(c=>c.connectStar),l=Dt(c=>c.isConstellationComplete);return Ke.useEffect(()=>{if(!t.current)return;Ye.init();const c=m=>{Ye.ensureContext();const u=o(m);setTimeout(()=>{if(e.current){const v=r&&l(r);e.current.notifyConnectResult(u,v)}},10)},f=new db(t.current,i,c);e.current=f;const h=m=>{Ye.ensureContext(),f.handlePinchStart(m)},d=m=>{f.handlePinchMove(m)},g=()=>{f.handlePinchEnd()},y=()=>{Ye.playZoom()},_=f.renderer.domElement;return _.addEventListener("touchstart",h,{passive:!1}),_.addEventListener("touchmove",d,{passive:!1}),_.addEventListener("touchend",g),_.addEventListener("wheel",y,{passive:!0}),()=>{_.removeEventListener("touchstart",h),_.removeEventListener("touchmove",d),_.removeEventListener("touchend",g),_.removeEventListener("wheel",y),f.dispose(),e.current=null}},[]),Ke.useEffect(()=>{e.current&&r?(e.current.loadConstellation(r),n.current=0):e.current&&!r&&(e.current.clearConstellation(),n.current=0)},[r]),Ke.useEffect(()=>{e.current&&e.current.updateConnectionPath(s)},[s]),Ke.useEffect(()=>{e.current&&e.current.updateSettings(i)},[i]),Ke.useEffect(()=>{a>n.current&&e.current&&e.current.notifyConnectResult(!1,!1),n.current=a},[a]),p.jsx("div",{ref:t,className:"absolute inset-0 w-full h-full touch-none",style:{touchAction:"none"}})}function hb(){const{discoveredConstellations:t,currentTargetConstellation:e,setTargetConstellation:n,setActivePanel:i,connectionPath:r,mistakes:s,clearConnectionPath:a,isConstellationComplete:o,currentTargetConstellation:l}=Dt(),c=ot.find(h=>h.id===l),f=c?Math.min(100,Math.round(new Set(r).size/c.stars.length*100)):0;return p.jsx("div",{className:"absolute left-0 right-0 top-0 p-4 z-20 pointer-events-none",children:e?p.jsx("div",{className:"max-w-sm mx-auto pointer-events-auto",children:p.jsxs("div",{className:"glass-panel p-4",children:[p.jsxs("div",{className:"flex items-start justify-between",children:[p.jsxs("div",{className:"flex-1",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("h3",{className:"text-lg font-display text-white",children:c==null?void 0:c.name}),p.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded ${(c==null?void 0:c.difficulty)===1?"bg-green-500/20 text-green-300":(c==null?void 0:c.difficulty)===2?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:Us[c==null?void 0:c.difficulty].label}),o(c==null?void 0:c.id)&&p.jsx("span",{className:"text-star-gold text-sm animate-pulse-slow",children:"★ 已完成"})]}),p.jsx("p",{className:"text-[11px] text-white/50 mt-0.5",children:c==null?void 0:c.description})]}),p.jsx("button",{onClick:()=>{a(),n(null)},className:`ml-2 w-9 h-9 flex items-center justify-center rounded-lg
                         bg-space-700/60 border border-white/10 text-white/70
                         hover:bg-red-500/30 hover:text-red-200 transition-all`,"aria-label":"退出任务",children:"✕"})]}),p.jsxs("div",{className:"mt-3",children:[p.jsxs("div",{className:"flex justify-between text-[11px] mb-1.5",children:[p.jsxs("span",{className:"text-white/50",children:["连接进度: ",new Set(r).size," / ",c==null?void 0:c.stars.length]}),p.jsxs("span",{className:"text-red-300/70",children:["失误: ",s]})]}),p.jsx("div",{className:"h-2 bg-space-900/80 rounded-full overflow-hidden",children:p.jsx("div",{className:"h-full bg-gradient-to-r from-nebula-purple to-nebula-cyan rounded-full transition-all duration-500",style:{width:`${f}%`}})})]}),p.jsxs("div",{className:"mt-3 flex gap-2",children:[p.jsx("button",{onClick:a,className:"flex-1 btn-secondary text-xs py-2",disabled:r.length===0,children:"🔄 重连"}),p.jsx("button",{onClick:()=>i("tasks"),className:"flex-1 btn-secondary text-xs py-2",children:"📋 切换星座"})]})]})}):p.jsx("div",{className:"max-w-md mx-auto pointer-events-auto",children:p.jsxs("div",{className:"glass-panel p-4 animate-float",children:[p.jsxs("div",{className:"flex items-center justify-between mb-3",children:[p.jsxs("div",{children:[p.jsx("h2",{className:"text-xl font-display text-white",children:"星座图鉴"}),p.jsxs("p",{className:"text-xs text-white/50 mt-0.5",children:["已发现 ",t.length," / ",ot.length]})]}),p.jsx("button",{onClick:()=>i("tasks"),className:"icon-btn","aria-label":"打开任务面板",children:p.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[p.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),p.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),p.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}),p.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"})]})})]}),p.jsx("div",{className:"grid grid-cols-2 gap-2",children:ot.slice(0,4).map(h=>{const d=o(h.id);return p.jsx("button",{onClick:()=>n(h.id),className:`p-3 rounded-xl border transition-all text-left card-hover ${d?"border-nebula-purple/60 bg-nebula-purple/10":"border-white/10 bg-space-700/40"}`,children:p.jsxs("div",{className:"flex items-start justify-between",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center gap-1",children:[p.jsx("span",{className:"text-sm font-display text-white",children:h.name}),d&&p.jsx("span",{className:"text-star-gold",children:"✓"})]}),p.jsx("div",{className:"text-[10px] text-white/40 mt-0.5",children:h.nameEn})]}),p.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded ${h.difficulty===1?"bg-green-500/20 text-green-300":h.difficulty===2?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:Us[h.difficulty].label})]})},h.id)})}),p.jsxs("button",{onClick:()=>i("tasks"),className:"w-full mt-3 btn-secondary text-sm py-2.5",children:["查看全部 ",ot.length," 个星座 →"]})]})})})}function pb(){const{discoveredConstellations:t,currentTargetConstellation:e,setTargetConstellation:n,setActivePanel:i,isConstellationComplete:r,openAtlasList:s,openAtlasDetail:a}=Dt(),o=(l,c)=>{c.stopPropagation(),a(l)};return p.jsx("div",{className:`absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200`,children:p.jsxs("div",{className:"w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden",children:[p.jsxs("div",{className:"p-5 border-b border-white/10",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("h2",{className:"text-xl font-display text-white",children:"星座探索"}),p.jsx("p",{className:"text-xs text-white/50 mt-1",children:"点击星座开始连线，点亮夜空的奥秘"})]}),p.jsx("button",{onClick:()=>i(null),className:"icon-btn","aria-label":"关闭",children:"✕"})]}),p.jsxs("div",{className:"mt-4 grid grid-cols-4 gap-2 text-center",children:[p.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[p.jsx("div",{className:"text-lg font-bold text-nebula-cyan",children:t.length}),p.jsx("div",{className:"text-[10px] text-white/50",children:"已发现"})]}),p.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[p.jsx("div",{className:"text-lg font-bold text-white/80",children:ot.length}),p.jsx("div",{className:"text-[10px] text-white/50",children:"总星座"})]}),p.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[p.jsx("div",{className:"text-lg font-bold text-star-gold",children:ot.filter(l=>l.season==="春").length}),p.jsx("div",{className:"text-[10px] text-white/50",children:"春·冬"})]}),p.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[p.jsx("div",{className:"text-lg font-bold text-nebula-orange",children:ot.filter(l=>l.season==="夏"||l.season==="秋").length}),p.jsx("div",{className:"text-[10px] text-white/50",children:"夏·秋"})]})]}),p.jsx("div",{className:"mt-3",children:p.jsxs("button",{onClick:s,className:`w-full py-2 px-4 rounded-xl bg-gradient-to-r from-nebula-purple/20 to-nebula-cyan/20
                       border border-nebula-purple/30 text-white text-sm
                       hover:from-nebula-purple/30 hover:to-nebula-cyan/30
                       transition-all flex items-center justify-center gap-2`,children:[p.jsx("span",{children:"📚"}),p.jsx("span",{children:"查看完整星空图鉴"}),p.jsx("span",{className:"text-nebula-cyan",children:"→"})]})})]}),p.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-thin p-5 space-y-3",children:ot.map(l=>{const c=r(l.id),f=e===l.id;return p.jsx("button",{onClick:()=>{n(l.id),i(null)},className:`w-full p-4 rounded-2xl border text-left transition-all card-hover ${f?"border-nebula-cyan/60 bg-nebula-cyan/10 ring-2 ring-nebula-cyan/30":c?"border-nebula-purple/50 bg-nebula-purple/8":"border-white/10 bg-space-700/30"}`,children:p.jsxs("div",{className:"flex items-start justify-between",children:[p.jsxs("div",{className:"flex-1",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("h3",{className:"text-base font-display text-white",children:l.name}),c&&p.jsx("span",{className:"text-star-gold animate-pulse-slow",children:"★"}),p.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded ${l.difficulty===1?"bg-green-500/20 text-green-300":l.difficulty===2?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:Us[l.difficulty].label}),p.jsxs("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-space-600/50 text-white/50",children:[l.season,"季"]})]}),p.jsx("div",{className:"text-[11px] text-white/40 mt-0.5",children:l.nameEn}),p.jsx("p",{className:"text-xs text-white/60 mt-2 leading-relaxed",children:l.description}),p.jsxs("div",{className:"mt-2 flex items-center gap-3 text-[10px] text-white/40",children:[p.jsxs("span",{children:["✦ ",l.stars.length," 颗主要星"]}),p.jsxs("span",{children:["⊶ ",l.connections.length," 条连线"]})]})]}),p.jsx("button",{onClick:h=>o(l.id,h),className:`ml-2 px-2 py-1 rounded-lg bg-space-600/50 text-white/50 text-[10px]
                               hover:bg-nebula-purple/30 hover:text-nebula-cyan transition-all
                               flex-shrink-0`,title:"在图鉴中查看详情",children:"📚 详情"})]})},l.id)})})]})})}function mb(){const{observationLogs:t,setActivePanel:e,clearLogs:n,seasonRewardsClaimed:i,openAtlasList:r,openAtlasDetail:s}=Dt(),a=l=>{s(l)},o=(l,c)=>{if(l.type==="discovery"||l.type==="reobservation"){const f=Ar(l.constellationId);if(!f)return null;const h=l.type==="discovery";return p.jsx("div",{className:`p-4 rounded-xl border transition-all ${h?"border-nebula-purple/30 bg-nebula-purple/5":"border-white/10 bg-space-700/20"}`,children:p.jsxs("div",{className:"flex items-start justify-between",children:[p.jsxs("div",{className:"flex items-start gap-3 flex-1",children:[p.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${h?"bg-gradient-to-br from-nebula-purple to-nebula-cyan text-white":"bg-space-600/50 text-white/70"}`,children:h?"✨":"🔭"}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"font-display text-white text-sm",children:f.name}),l.perfect&&p.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded-full bg-star-gold/20 text-star-gold",children:"完美"})]}),p.jsxs("div",{className:"text-[11px] text-white/40 mt-0.5",children:[f.nameEn," · ",h?"首次发现":"再次观测"]}),p.jsx("div",{className:"text-[10px] text-white/30 mt-1 font-mono",children:ul(l.timestamp)})]})]}),p.jsx("button",{onClick:()=>a(l.constellationId),className:`ml-2 px-2 py-1 rounded-lg bg-space-600/50 text-white/50 text-[10px]
                       hover:bg-nebula-purple/30 hover:text-nebula-cyan transition-all
                       flex-shrink-0`,title:"在图鉴中查看",children:"📚"})]})},c)}if(l.type==="achievement"){const f=Z0(l.achievementId),h=Ms==null?void 0:Ms.find(g=>g.id===l.achievementId),d=f||h;return d?p.jsx("div",{className:"p-4 rounded-xl border border-star-gold/20 bg-star-gold/5",children:p.jsxs("div",{className:"flex items-start gap-3",children:[p.jsx("div",{className:`w-10 h-10 rounded-xl bg-gradient-to-br from-star-gold to-nebula-orange
                          flex items-center justify-center text-lg`,children:d.icon}),p.jsxs("div",{children:[p.jsxs("div",{className:"font-display text-star-gold text-sm",children:["成就解锁 · ",d.name]}),p.jsx("div",{className:"text-[11px] text-white/50 mt-0.5",children:d.description}),p.jsx("div",{className:"text-[10px] text-white/30 mt-1 font-mono",children:ul(l.timestamp)})]})]})},c):null}if(l.type==="season_reward"){const f=Vt[l.seasonId],h=Yn[l.phaseId];return!f||!h?null:p.jsx("div",{className:`p-4 rounded-xl border ${f.borderColor} ${f.bgColor}`,children:p.jsxs("div",{className:"flex items-start gap-3",children:[p.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center text-lg
                            bg-gradient-to-br ${f.color}`,children:f.icon}),p.jsxs("div",{children:[p.jsxs("div",{className:`font-display text-sm ${f.textColor}`,children:["季节奖励 · ",l.rewardName]}),p.jsxs("div",{className:"text-[11px] text-white/50 mt-0.5",children:[f.name," · ",h.name,"阶段完成"]}),p.jsx("div",{className:"text-[10px] text-white/30 mt-1 font-mono",children:ul(l.timestamp)})]})]})},c)}return null};return p.jsx("div",{className:`absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200`,children:p.jsxs("div",{className:"w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden",children:[p.jsxs("div",{className:"p-5 border-b border-white/10",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("h2",{className:"text-xl font-display text-white",children:"观测日志"}),p.jsx("p",{className:"text-xs text-white/50 mt-1",children:"记录每一次与星空的相遇"})]}),p.jsxs("div",{className:"flex items-center gap-2",children:[t.length>0&&p.jsx("button",{onClick:()=>{confirm("确定要清空所有观测日志吗？")&&n()},className:`text-xs px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20
                           text-red-300 hover:bg-red-500/20 transition-all`,children:"清空"}),p.jsx("button",{onClick:()=>e(null),className:"icon-btn","aria-label":"关闭",children:"✕"})]})]}),p.jsxs("div",{className:"mt-4 grid grid-cols-4 gap-2 text-center",children:[p.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[p.jsx("div",{className:"text-lg font-bold text-nebula-purple",children:t.filter(l=>l.type==="discovery").length}),p.jsx("div",{className:"text-[10px] text-white/50",children:"首次发现"})]}),p.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[p.jsx("div",{className:"text-lg font-bold text-nebula-cyan",children:t.filter(l=>l.type==="reobservation").length}),p.jsx("div",{className:"text-[10px] text-white/50",children:"再次观测"})]}),p.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[p.jsx("div",{className:"text-lg font-bold text-star-gold",children:t.filter(l=>l.type==="achievement").length}),p.jsx("div",{className:"text-[10px] text-white/50",children:"成就解锁"})]}),p.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[p.jsx("div",{className:"text-lg font-bold text-pink-300",children:i.length}),p.jsx("div",{className:"text-[10px] text-white/50",children:"季节奖励"})]})]}),p.jsx("div",{className:"mt-3",children:p.jsxs("button",{onClick:r,className:`w-full py-2 px-4 rounded-xl bg-gradient-to-r from-nebula-purple/20 to-nebula-cyan/20
                       border border-nebula-purple/30 text-white text-sm
                       hover:from-nebula-purple/30 hover:to-nebula-cyan/30
                       transition-all flex items-center justify-center gap-2`,children:[p.jsx("span",{children:"📚"}),p.jsx("span",{children:"浏览星空图鉴"}),p.jsx("span",{className:"text-nebula-cyan",children:"→"})]})})]}),p.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-thin p-5",children:t.length===0?p.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center py-12",children:[p.jsx("div",{className:"text-5xl mb-4 opacity-30",children:"📖"}),p.jsx("h3",{className:"text-white/70 font-display mb-2",children:"暂无观测记录"}),p.jsx("p",{className:"text-xs text-white/40 max-w-xs leading-relaxed",children:"开始探索星座，你的每一次发现都将记录在这里"})]}):p.jsx("div",{className:"space-y-3",children:t.map((l,c)=>o(l,c))})})]})})}const gb={beginner:{name:"初心者",icon:"🌱",color:"from-green-500 to-emerald-400"},explorer:{name:"探索家",icon:"🧭",color:"from-blue-500 to-cyan-400"},challenge:{name:"挑战者",icon:"🔥",color:"from-orange-500 to-red-400"},collector:{name:"收藏家",icon:"📚",color:"from-purple-500 to-pink-400"},special:{name:"特别成就",icon:"💫",color:"from-yellow-500 to-orange-400"},season:{name:"四季成就",icon:"🌸",color:"from-pink-500 to-cyan-400"}};function vb(){const{unlockedAchievements:t,setActivePanel:e,getProgress:n}=Dt(),i=n(),s=[...Il,...Ms].reduce((a,o)=>(a[o.category]||(a[o.category]=[]),a[o.category].push(o),a),{});return p.jsx("div",{className:`absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200`,children:p.jsxs("div",{className:"w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden",children:[p.jsxs("div",{className:"p-5 border-b border-white/10",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("h2",{className:"text-xl font-display text-white",children:"成就系统"}),p.jsx("p",{className:"text-xs text-white/50 mt-1",children:"解锁你的星空里程碑"})]}),p.jsx("button",{onClick:()=>e(null),className:"icon-btn","aria-label":"关闭",children:"✕"})]}),p.jsxs("div",{className:"mt-4",children:[p.jsxs("div",{className:"flex justify-between text-xs mb-2",children:[p.jsx("span",{className:"text-white/60",children:"总体进度"}),p.jsxs("span",{className:"text-star-gold font-mono",children:[i.achievements," / ",i.totalAchievements]})]}),p.jsx("div",{className:"h-3 bg-space-900/80 rounded-full overflow-hidden",children:p.jsx("div",{className:"h-full bg-gradient-to-r from-star-gold via-nebula-orange to-nebula-purple rounded-full transition-all duration-700",style:{width:`${i.totalAchievements>0?i.achievements/i.totalAchievements*100:0}%`}})})]})]}),p.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-thin p-5 space-y-5",children:Object.entries(s).map(([a,o])=>{const l=gb[a],c=o.filter(f=>t.includes(f.id)).length;return p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[p.jsx("span",{className:"text-lg",children:l.icon}),p.jsx("h3",{className:"font-display text-white/90 text-sm",children:l.name}),p.jsxs("span",{className:"text-[10px] text-white/40 ml-auto",children:[c," / ",o.length]})]}),p.jsx("div",{className:"grid grid-cols-2 gap-2",children:o.map(f=>{const h=t.includes(f.id);return p.jsx("div",{className:`p-3 rounded-xl border transition-all ${h?"border-white/20 bg-space-700/40":"border-white/5 bg-space-900/40 opacity-50"}`,children:p.jsxs("div",{className:"flex items-start gap-2",children:[p.jsx("div",{className:`w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0 ${h?`bg-gradient-to-br ${l.color}`:"bg-space-800 grayscale"}`,children:f.icon}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsx("div",{className:`text-xs font-semibold ${h?"text-white":"text-white/50"}`,children:f.name}),p.jsx("div",{className:"text-[10px] text-white/40 mt-0.5 leading-tight",children:f.description})]})]})},f.id)})})]},a)})})]})})}function xb(){const{settings:t,updateSettings:e,resetSettings:n,resetProgress:i,setActivePanel:r,getProgress:s,manualSave:a}=Dt(),[o,l]=Ke.useState(!1),[c,f]=Ke.useState(!1),h=s(),d=(u,v)=>{Ye.ensureContext(),Ye.playClick(),e({[u]:v})},g=()=>{Ye.ensureContext(),Ye.playReset(),n()},y=()=>{Ye.ensureContext(),Ye.playReset(),i(),n(),l(!1)},_=()=>{Ye.ensureContext(),Ye.playConnectSuccess(),a(),f(!0),setTimeout(()=>f(!1),1500)},m=()=>{Ye.ensureContext(),Ye.playPanelClose(),r(null)};return p.jsxs("div",{className:`absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200`,children:[c&&p.jsx("div",{className:`fixed top-8 left-1/2 -translate-x-1/2 z-50
                      px-4 py-2 rounded-xl bg-nebula-cyan/20 border border-nebula-cyan/40
                      text-nebula-cyan text-sm font-medium animate-bounce-in`,children:"✓ 进度已保存"}),p.jsxs("div",{className:"w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden",children:[p.jsx("div",{className:"p-5 border-b border-white/10",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("h2",{className:"text-xl font-display text-white",children:"设置"}),p.jsx("p",{className:"text-xs text-white/50 mt-1",children:"定制你的观星体验"})]}),p.jsxs("div",{className:"flex items-center gap-2",children:[t.autoSave&&p.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] text-nebula-cyan/70",children:[p.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-nebula-cyan animate-pulse"}),"自动保存中"]}),!t.autoSave&&p.jsx("button",{onClick:_,className:`text-xs px-3 py-1.5 rounded-lg bg-nebula-cyan/20 border border-nebula-cyan/30
                           text-nebula-cyan hover:bg-nebula-cyan/30 transition-all`,children:"💾 手动保存"}),p.jsx("button",{onClick:m,className:"icon-btn","aria-label":"关闭",children:"✕"})]})]})}),p.jsxs("div",{className:"flex-1 overflow-y-auto scrollbar-thin p-5 space-y-6",children:[p.jsxs("section",{children:[p.jsx("h3",{className:"text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 px-1",children:"🎮 体验设置"}),p.jsxs("div",{className:"space-y-3",children:[p.jsx(Yo,{label:"主音量",icon:"🔊",value:t.volume,min:0,max:1,step:.1,onChange:u=>d("volume",u),displayValue:`${Math.round(t.volume*100)}%`}),p.jsx(Yo,{label:"音效音量",icon:"🎵",value:t.sfxVolume,min:0,max:1,step:.1,onChange:u=>d("sfxVolume",u),displayValue:`${Math.round(t.sfxVolume*100)}%`}),p.jsx(qo,{label:"触控反馈",icon:"📳",description:"点击时触发震动反馈",value:t.hapticFeedback,onChange:u=>d("hapticFeedback",u)}),p.jsx(qo,{label:"自动保存",icon:"💾",description:"自动保存进度到本地存储",value:t.autoSave,onChange:u=>d("autoSave",u)})]})]}),p.jsxs("section",{children:[p.jsx("h3",{className:"text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 px-1",children:"🎨 画面设置"}),p.jsxs("div",{className:"space-y-3",children:[p.jsxs("div",{className:"p-4 rounded-xl bg-space-700/30 border border-white/5",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[p.jsx("span",{className:"text-lg",children:"🖼️"}),p.jsx("div",{children:p.jsx("div",{className:"text-sm text-white",children:"画质等级"})})]}),p.jsx("div",{className:"grid grid-cols-3 gap-2",children:["low","medium","high"].map(u=>p.jsx("button",{onClick:()=>d("graphicsQuality",u),className:`py-2 rounded-lg text-xs font-medium transition-all ${t.graphicsQuality===u?"bg-nebula-purple text-white":"bg-space-800/60 text-white/60 hover:bg-space-700/60"}`,children:u==="low"?"省电":u==="medium"?"均衡":"极致"},u))})]}),p.jsx(Yo,{label:"星星密度",icon:"✨",value:t.starDensity,min:.3,max:1.5,step:.1,onChange:u=>d("starDensity",u),displayValue:`${Math.round(t.starDensity*100)}%`}),p.jsx(Yo,{label:"动画速度",icon:"🌙",value:t.animationSpeed,min:.2,max:2,step:.1,onChange:u=>d("animationSpeed",u),displayValue:`${Math.round(t.animationSpeed*100)}%`}),p.jsx(qo,{label:"星云效果",icon:"🌌",description:"显示背景中的彩色星云",value:t.showNebula,onChange:u=>d("showNebula",u)}),p.jsx(qo,{label:"显示星名",icon:"🏷️",description:"悬停时显示星星名称",value:t.showLabels,onChange:u=>d("showLabels",u)})]})]}),p.jsxs("section",{children:[p.jsx("h3",{className:"text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 px-1",children:"📊 当前进度"}),p.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[p.jsxs("div",{className:"p-3 rounded-xl bg-space-700/30 border border-white/5 text-center",children:[p.jsxs("div",{className:"text-lg font-bold text-nebula-cyan",children:[h.constellations,"/",h.totalConstellations]}),p.jsx("div",{className:"text-[10px] text-white/50 mt-1",children:"星座"})]}),p.jsxs("div",{className:"p-3 rounded-xl bg-space-700/30 border border-white/5 text-center",children:[p.jsxs("div",{className:"text-lg font-bold text-star-gold",children:[h.achievements,"/",h.totalAchievements]}),p.jsx("div",{className:"text-[10px] text-white/50 mt-1",children:"成就"})]}),p.jsxs("div",{className:"p-3 rounded-xl bg-space-700/30 border border-white/5 text-center",children:[p.jsx("div",{className:"text-lg font-bold text-nebula-purple",children:h.logs}),p.jsx("div",{className:"text-[10px] text-white/50 mt-1",children:"日志"})]})]})]}),p.jsxs("section",{children:[p.jsx("h3",{className:"text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 px-1",children:"⚠️ 危险操作"}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("button",{onClick:g,className:`w-full p-3 rounded-xl bg-space-700/30 border border-white/5
                         hover:border-yellow-500/30 hover:bg-yellow-500/5
                         transition-all text-sm text-white/80`,children:"🔄 恢复默认设置"}),o?p.jsxs("div",{className:"p-4 rounded-xl bg-red-500/10 border border-red-500/30",children:[p.jsx("p",{className:"text-xs text-red-200 mb-3",children:"确定要清空所有进度、成就和日志吗？此操作无法撤销。"}),p.jsxs("div",{className:"flex gap-2",children:[p.jsx("button",{onClick:y,className:`flex-1 py-2 rounded-lg bg-red-500 text-white text-sm font-medium
                               hover:bg-red-600 transition-all`,children:"确认清空"}),p.jsx("button",{onClick:()=>{Ye.playClick(),l(!1)},className:`flex-1 py-2 rounded-lg bg-space-800 text-white/80 text-sm
                               hover:bg-space-700 transition-all`,children:"取消"})]})]}):p.jsx("button",{onClick:()=>{Ye.ensureContext(),Ye.playClick(),l(!0)},className:`w-full p-3 rounded-xl bg-space-700/30 border border-red-500/20
                           hover:bg-red-500/10 transition-all text-sm text-red-300`,children:"🗑️ 清空所有数据"})]})]}),p.jsx("div",{className:"text-center text-[10px] text-white/20 py-2",children:"StarConnect v1.0.0 · Made with ✨ for stargazers"})]})]})]})}function Yo({label:t,icon:e,value:n,min:i,max:r,step:s,onChange:a,displayValue:o}){return p.jsxs("div",{className:"p-4 rounded-xl bg-space-700/30 border border-white/5",children:[p.jsxs("div",{className:"flex items-center justify-between mb-3",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"text-lg",children:e}),p.jsx("span",{className:"text-sm text-white",children:t})]}),p.jsx("span",{className:"text-xs font-mono text-nebula-cyan",children:o})]}),p.jsx("input",{type:"range",min:i,max:r,step:s,value:n,onChange:l=>a(parseFloat(l.target.value)),className:`w-full h-2 rounded-full bg-space-900 appearance-none cursor-pointer
                   [&::-webkit-slider-thumb]:appearance-none
                   [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
                   [&::-webkit-slider-thumb]:rounded-full
                   [&::-webkit-slider-thumb]:bg-gradient-to-r
                   [&::-webkit-slider-thumb]:from-nebula-purple [&::-webkit-slider-thumb]:to-nebula-cyan
                   [&::-webkit-slider-thumb]:shadow-lg`})]})}function qo({label:t,icon:e,description:n,value:i,onChange:r}){return p.jsxs("div",{className:`p-4 rounded-xl bg-space-700/30 border border-white/5
                    flex items-center justify-between`,children:[p.jsxs("div",{className:"flex items-start gap-2",children:[p.jsx("span",{className:"text-lg",children:e}),p.jsxs("div",{children:[p.jsx("div",{className:"text-sm text-white",children:t}),n&&p.jsx("div",{className:"text-[10px] text-white/40 mt-0.5",children:n})]})]}),p.jsx("button",{onClick:()=>r(!i),className:`w-12 h-6 rounded-full transition-all duration-300 relative ${i?"bg-gradient-to-r from-nebula-purple to-nebula-cyan":"bg-space-900/80"}`,children:p.jsx("div",{className:`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md
                      transition-all duration-300 ${i?"left-[26px]":"left-0.5"}`})})]})}function _b(){const{setActivePanel:t,discoveredConstellations:e,seasonProgress:n,seasonRewardsUnlocked:i,seasonRewardsClaimed:r,claimSeasonReward:s,seasonHistory:a,totalObservations:o,perfectObservations:l,getSeasonStats:c,setTargetConstellation:f,openAtlasList:h,openAtlasDetail:d}=Dt(),g=(O,k)=>{k.stopPropagation(),d(O)},y=Q0(),[_,m]=Ke.useState(y),[u,v]=Ke.useState("overview"),x=c(),M=x[_],R=Vt[_],C=Cf(_),b=Object.values(x).filter(O=>O.beginner.completed&&O.intermediate.completed&&O.master.completed).length,N=Math.round(Object.values(x).reduce((O,k)=>O+k.overallPercentage,0)/4),T=()=>p.jsxs("div",{className:"space-y-5",children:[p.jsxs("div",{className:`p-4 rounded-2xl border ${R.borderColor} ${R.bgColor}`,children:[p.jsxs("div",{className:"flex items-center justify-between mb-3",children:[p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("span",{className:"text-3xl",children:R.icon}),p.jsxs("div",{children:[p.jsxs("h3",{className:`font-display text-lg ${R.textColor}`,children:[R.name,"观测计划"]}),p.jsxs("p",{className:"text-[11px] text-white/50",children:[R.months," · ",R.description]})]})]}),_===y&&p.jsx("span",{className:"text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/70",children:"当前季节"})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-2",children:[p.jsx("span",{className:"text-white/60",children:"季节总进度"}),p.jsxs("span",{className:`font-mono ${R.textColor}`,children:[M.overallPercentage,"%"]})]}),p.jsx("div",{className:"h-2.5 bg-space-900/60 rounded-full overflow-hidden",children:p.jsx("div",{className:`h-full bg-gradient-to-r ${R.color} rounded-full transition-all duration-700`,style:{width:`${M.overallPercentage}%`}})})]})]}),p.jsx("div",{className:"space-y-3",children:Object.entries(Yn).map(([O,k])=>{const P=M[O],H=n[_][O],V=ll[_][O],$=i.includes(V.id),L=r.includes(V.id);return p.jsxs("div",{className:`p-4 rounded-2xl border transition-all ${H?`${R.borderColor} ${R.bgColor}`:"border-white/10 bg-space-700/20"}`,children:[p.jsxs("div",{className:"flex items-start justify-between mb-2",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsxs("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${H?`bg-gradient-to-br ${R.color} text-white`:"bg-space-600/50 text-white/50"}`,children:[H?"✓":k.multiplier,"×"]}),p.jsxs("div",{children:[p.jsx("h4",{className:`text-sm font-display ${H?"text-white":"text-white/80"}`,children:k.name}),p.jsx("p",{className:"text-[10px] text-white/40",children:k.description})]})]}),$&&p.jsxs("div",{className:"flex items-center gap-1",children:[p.jsx("span",{className:"text-lg",children:V.icon}),L?p.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-300",children:"已领取"}):p.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-star-gold/20 text-star-gold animate-pulse",children:"可领取"})]})]}),p.jsxs("div",{className:"flex justify-between text-[10px] mb-1.5",children:[p.jsxs("span",{className:"text-white/50",children:[O==="beginner"&&`发现 ${P.target} 个当季星座`,O==="intermediate"&&`完美完成 ${P.target} 个当季星座`,O==="master"&&`累计反复观测 ${P.target} 次`]}),p.jsxs("span",{className:"text-white/60 font-mono",children:[P.current," / ",P.target]})]}),p.jsx("div",{className:"h-1.5 bg-space-900/60 rounded-full overflow-hidden",children:p.jsx("div",{className:`h-full rounded-full transition-all duration-700 ${H?`bg-gradient-to-r ${R.color}`:"bg-white/30"}`,style:{width:`${P.percentage}%`}})}),$&&p.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"text-base",children:V.icon}),p.jsxs("div",{children:[p.jsx("p",{className:"text-xs text-white/80 font-medium",children:V.name}),p.jsx("p",{className:"text-[10px] text-white/40",children:V.description})]})]}),L?p.jsx("span",{className:"text-[11px] text-green-400/80",children:"✓ 已领取"}):p.jsx("button",{onClick:()=>s(V.id),className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-all
                                   bg-gradient-to-r ${R.color} text-white
                                   hover:shadow-lg active:scale-95`,children:"领取"})]})})]},O)})}),p.jsxs("div",{className:"p-4 rounded-2xl border border-white/10 bg-space-700/20",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[p.jsx("span",{className:"text-lg",children:"✨"}),p.jsx("h4",{className:"font-display text-white/90 text-sm",children:"当季星座"}),p.jsxs("span",{className:"text-[10px] text-white/40 ml-auto",children:[M.discovered," / ",M.constellations]})]}),p.jsx("div",{className:"grid grid-cols-2 gap-2",children:C.map(O=>{const k=Ar(O);if(!k)return null;const P=e.includes(O),H=l[O],V=o[O]||0;return p.jsx("div",{className:`p-3 rounded-xl border text-left transition-all card-hover ${P?"border-nebula-purple/40 bg-nebula-purple/5":"border-white/10 bg-space-800/40"}`,children:p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("button",{onClick:()=>{f(O),t(null)},className:"flex-1 min-w-0 text-left",children:p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:`text-sm ${P?"":"opacity-50 grayscale"}`,children:P?"⭐":"☆"}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsx("p",{className:`text-xs font-medium truncate ${P?"text-white":"text-white/50"}`,children:k.name}),p.jsxs("div",{className:"flex items-center gap-1.5 mt-0.5",children:[H&&p.jsx("span",{className:"text-[9px] px-1 py-0.5 rounded bg-star-gold/20 text-star-gold",children:"完美"}),V>1&&p.jsxs("span",{className:"text-[9px] text-white/40",children:["×",V]})]})]})]})}),p.jsx("button",{onClick:$=>g(O,$),className:`w-6 h-6 flex items-center justify-center rounded-lg
                             bg-space-600/30 text-white/40 text-[10px]
                             hover:bg-nebula-purple/30 hover:text-nebula-cyan transition-all
                             flex-shrink-0`,title:"在图鉴中查看详情",children:"📚"})]})},O)})})]})]}),S=()=>p.jsxs("div",{className:"space-y-3",children:[p.jsx("div",{className:"p-4 rounded-2xl border border-white/10 bg-space-700/20",children:p.jsx("div",{className:"grid grid-cols-4 gap-2 text-center",children:Object.entries(Vt).map(([O,k])=>{const P=x[O].beginner.completed&&x[O].intermediate.completed&&x[O].master.completed;return p.jsxs("div",{className:`p-2 rounded-lg ${P?k.bgColor:"bg-space-800/40"}`,children:[p.jsx("div",{className:"text-2xl mb-1",children:k.icon}),p.jsx("div",{className:`text-[11px] ${P?k.textColor:"text-white/50"}`,children:k.name}),p.jsxs("div",{className:"text-[10px] text-white/40 mt-0.5",children:[x[O].overallPercentage,"%"]})]},O)})})}),a.length===0?p.jsxs("div",{className:"h-40 flex flex-col items-center justify-center text-center",children:[p.jsx("div",{className:"text-4xl mb-3 opacity-30",children:"🗓️"}),p.jsx("h4",{className:"text-white/60 font-display mb-1",children:"暂无季节进度记录"}),p.jsx("p",{className:"text-xs text-white/40 max-w-xs leading-relaxed",children:"开始探索星座，你的季节里程碑将记录在这里"})]}):p.jsx("div",{className:"space-y-2",children:a.map((O,k)=>{const P=Vt[O.seasonId],H=Yn[O.phaseId],V=ll[O.seasonId][O.phaseId];return p.jsx("div",{className:`p-3 rounded-xl border ${P.borderColor} ${P.bgColor}`,children:p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center text-xl
                                  bg-gradient-to-br ${P.color}`,children:P.icon}),p.jsxs("div",{className:"flex-1",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsxs("span",{className:"text-sm font-display text-white",children:[P.name," · ",H.name]}),p.jsx("span",{className:"text-base",children:V.icon})]}),p.jsxs("div",{className:"text-[11px] text-white/50 mt-0.5",children:["完成阶段目标，获得「",V.name,"」"]}),p.jsx("div",{className:"text-[10px] text-white/30 mt-0.5 font-mono",children:ul(O.timestamp)})]})]})},k)})})]}),D=()=>{const O=[];return Object.entries(ll).forEach(([k,P])=>{Object.entries(P).forEach(([H,V])=>{O.push({seasonId:k,phaseId:H,...V})})}),p.jsx("div",{className:"space-y-4",children:Object.entries(Vt).map(([k,P])=>{const H=O.filter($=>$.seasonId===k),V=H.filter($=>r.includes($.id)).length;return p.jsxs("div",{className:`p-4 rounded-2xl border ${P.borderColor} ${P.bgColor}`,children:[p.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[p.jsx("span",{className:"text-xl",children:P.icon}),p.jsxs("h4",{className:`font-display text-sm ${P.textColor}`,children:[P.name,"奖励"]}),p.jsxs("span",{className:"text-[10px] text-white/40 ml-auto",children:[V," / ",H.length]})]}),p.jsx("div",{className:"grid grid-cols-3 gap-2",children:H.map($=>{const L=i.includes($.id),X=r.includes($.id);return p.jsxs("div",{className:`p-3 rounded-xl text-center transition-all border ${X?"bg-white/10 border-green-400/30":L?"bg-star-gold/5 border-star-gold/20 ring-1 ring-star-gold/10":"bg-space-900/40 border-white/5 opacity-50"}`,children:[p.jsx("div",{className:`text-2xl mb-1 ${L?"":"grayscale"}`,children:$.icon}),p.jsx("p",{className:`text-[11px] font-medium ${X?"text-green-300":L?"text-star-gold":"text-white/40"}`,children:$.name}),p.jsx("p",{className:"text-[9px] text-white/40 mt-0.5 leading-tight",children:$.description}),L&&!X&&p.jsx("button",{onClick:()=>s($.id),className:`mt-2 px-2.5 py-1 rounded-md text-[10px] font-medium
                                     bg-gradient-to-r ${P.color} text-white
                                     hover:shadow-md active:scale-95 transition-all`,children:"领取"}),X&&p.jsx("span",{className:"mt-1.5 inline-block text-[10px] text-green-400/70",children:"✓ 已领取"})]},$.id)})})]},k)})})};return p.jsx("div",{className:`absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200`,children:p.jsxs("div",{className:"w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden",children:[p.jsxs("div",{className:"p-5 border-b border-white/10",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("h2",{className:"text-xl font-display text-white",children:"四季观测计划"}),p.jsx("p",{className:"text-xs text-white/50 mt-1",children:"跟随季节的脚步，探索星空的奥秘"})]}),p.jsx("button",{onClick:()=>t(null),className:"icon-btn","aria-label":"关闭",children:"✕"})]}),p.jsxs("div",{className:"mt-4",children:[p.jsxs("div",{className:"flex justify-between text-xs mb-2",children:[p.jsx("span",{className:"text-white/60",children:"年度总进度"}),p.jsxs("span",{className:"text-star-gold font-mono",children:[b," / 4 季 · ",N,"%"]})]}),p.jsx("div",{className:"h-3 bg-space-900/80 rounded-full overflow-hidden flex",children:Object.entries(Vt).map(([O,k])=>p.jsx("div",{className:`h-full bg-gradient-to-r ${k.color} transition-all duration-500`,style:{width:`${x[O].overallPercentage/4}%`}},O))})]}),p.jsx("div",{className:"mt-4 grid grid-cols-4 gap-2",children:Object.entries(Vt).map(([O,k])=>p.jsxs("button",{onClick:()=>m(O),className:`p-2 rounded-xl text-center transition-all ${_===O?`${k.bgColor} ${k.borderColor} border`:"bg-space-700/30 border border-transparent hover:bg-space-700/50"}`,children:[p.jsx("div",{className:"text-xl",children:k.icon}),p.jsx("div",{className:`text-[10px] mt-0.5 ${_===O?k.textColor:"text-white/50"}`,children:k.name}),p.jsxs("div",{className:"text-[9px] text-white/30 mt-0.5",children:[x[O].overallPercentage,"%"]})]},O))}),p.jsx("div",{className:"mt-3",children:p.jsxs("button",{onClick:h,className:`w-full py-2 px-4 rounded-xl bg-gradient-to-r from-nebula-purple/20 to-nebula-cyan/20
                       border border-nebula-purple/30 text-white text-sm
                       hover:from-nebula-purple/30 hover:to-nebula-cyan/30
                       transition-all flex items-center justify-center gap-2`,children:[p.jsx("span",{children:"📚"}),p.jsx("span",{children:"查看星空图鉴"}),p.jsx("span",{className:"text-nebula-cyan",children:"→"})]})}),p.jsx("div",{className:"mt-4 flex gap-2",children:[{id:"overview",label:"进度",icon:"📊"},{id:"rewards",label:"奖励",icon:"🎁"},{id:"history",label:"回溯",icon:"🗓️"}].map(O=>p.jsxs("button",{onClick:()=>v(O.id),className:`flex-1 py-2 px-3 rounded-lg text-xs transition-all flex items-center justify-center gap-1 ${u===O.id?"bg-white/10 text-white border border-white/10":"text-white/50 hover:text-white/80"}`,children:[p.jsx("span",{children:O.icon}),p.jsx("span",{children:O.label})]},O.id))})]}),p.jsxs("div",{className:"flex-1 overflow-y-auto scrollbar-thin p-5",children:[u==="overview"&&T(),u==="rewards"&&D(),u==="history"&&S()]})]})})}function yb({constellationId:t}){const{discoveredConstellations:e,favoriteConstellations:n,toggleFavorite:i,isConstellationComplete:r,totalObservations:s,perfectObservations:a,setTargetConstellation:o,setActivePanel:l,observationLogs:c,resetAtlasState:f,openAtlasList:h}=Dt(),d=Ke.useMemo(()=>Ar(t),[t]),g=d?r(d.id):!1,y=d?n.includes(d.id):!1,_=d&&s[d.id]||0,m=d&&a[d.id]||!1,u=(d==null?void 0:d.season)==="春"?"spring":(d==null?void 0:d.season)==="夏"?"summer":(d==null?void 0:d.season)==="秋"?"autumn":"winter",v=d?Vt[u]:null,x=Ke.useMemo(()=>{if(!d)return null;const b=c.find(N=>N.type==="discovery"&&N.constellationId===d.id);return b?new Date(b.timestamp):null},[d,c]);if(!d)return p.jsx("div",{className:`absolute inset-0 z-40 flex items-center justify-center p-4
                      bg-space-900/70 backdrop-blur-sm`,children:p.jsxs("div",{className:"text-center",children:[p.jsx("div",{className:"text-4xl mb-3",children:"🌌"}),p.jsx("p",{className:"text-white/50",children:"星座信息加载失败"}),p.jsx("button",{onClick:h,className:"mt-4 btn-secondary text-sm",children:"返回图鉴"})]})});const M=()=>{h()},R=()=>{o(d.id),f(),l(null)},C=()=>{f(),l(null)};return p.jsx("div",{className:`absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200`,children:p.jsxs("div",{className:"w-full max-w-2xl glass-panel max-h-[85vh] flex flex-col overflow-hidden",children:[p.jsxs("div",{className:`relative h-32 overflow-hidden ${v?`bg-gradient-to-br ${v.color}`:"bg-space-700"}`,children:[p.jsx("div",{className:"absolute inset-0 bg-black/30"}),p.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:p.jsx("div",{className:"text-6xl opacity-30",children:g?"✦":"○"})}),p.jsxs("div",{className:"absolute top-4 left-4 right-4 flex items-start justify-between",children:[p.jsx("button",{onClick:M,className:`w-10 h-10 flex items-center justify-center rounded-full
                       bg-black/30 text-white/80 hover:bg-black/50 transition-all`,children:"←"}),p.jsxs("div",{className:"flex gap-2",children:[p.jsx("button",{onClick:()=>i(d.id),className:`w-10 h-10 flex items-center justify-center rounded-full
                          transition-all ${y?"bg-star-gold/30 text-star-gold":"bg-black/30 text-white/50 hover:text-star-gold hover:bg-black/50"}`,children:y?"★":"☆"}),p.jsx("button",{onClick:C,className:`w-10 h-10 flex items-center justify-center rounded-full
                         bg-black/30 text-white/80 hover:bg-black/50 transition-all`,children:"✕"})]})]}),p.jsxs("div",{className:"absolute bottom-4 left-5 right-5",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("h1",{className:"text-2xl font-display text-white",children:d.name}),g&&p.jsx("span",{className:"text-star-gold text-lg",children:"✓"}),m&&p.jsx("span",{className:"text-nebula-cyan text-xs px-2 py-0.5 rounded-full bg-nebula-cyan/20",children:"完美"})]}),p.jsx("p",{className:"text-sm text-white/70",children:d.nameEn})]})]}),p.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-thin",children:p.jsxs("div",{className:"p-5 space-y-6",children:[p.jsxs("div",{className:"flex flex-wrap gap-2",children:[p.jsxs("span",{className:`text-xs px-3 py-1 rounded-full ${d.difficulty===1?"bg-green-500/20 text-green-300":d.difficulty===2?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:["⭐".repeat(d.difficulty)," ",Us[d.difficulty].label]}),v&&p.jsxs("span",{className:`text-xs px-3 py-1 rounded-full ${v.bgColor} ${v.textColor} ${v.borderColor} border`,children:[v.icon," ",d.season,"季星座"]}),g&&p.jsx("span",{className:"text-xs px-3 py-1 rounded-full bg-nebula-purple/20 text-nebula-purple border border-nebula-purple/30",children:"已发现"}),_>1&&p.jsxs("span",{className:"text-xs px-3 py-1 rounded-full bg-space-700/60 text-white/70",children:["观测 ",_," 次"]})]}),p.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[p.jsxs("div",{className:"p-3 rounded-xl bg-space-700/40 text-center",children:[p.jsx("div",{className:"text-lg font-bold text-white",children:d.stars.length}),p.jsx("div",{className:"text-[10px] text-white/50",children:"主要恒星"})]}),p.jsxs("div",{className:"p-3 rounded-xl bg-space-700/40 text-center",children:[p.jsx("div",{className:"text-lg font-bold text-white",children:d.area}),p.jsx("div",{className:"text-[10px] text-white/50",children:"面积排名"})]}),p.jsxs("div",{className:"p-3 rounded-xl bg-space-700/40 text-center",children:[p.jsxs("div",{className:"text-lg font-bold text-white",children:["第",d.ranking,"位"]}),p.jsx("div",{className:"text-[10px] text-white/50",children:"全天排名"})]})]}),p.jsxs("div",{className:"space-y-4",children:[p.jsx("h3",{className:"text-sm font-display text-white border-l-2 border-nebula-purple pl-3",children:"星座简介"}),p.jsx("p",{className:"text-sm text-white/70 leading-relaxed",children:d.description})]}),p.jsxs("div",{className:"space-y-4",children:[p.jsx("h3",{className:"text-sm font-display text-white border-l-2 border-star-gold pl-3",children:"神话故事"}),p.jsx("div",{className:"p-4 rounded-xl bg-space-700/30 border border-star-gold/10",children:p.jsx("p",{className:"text-sm text-white/70 leading-relaxed",children:d.mythologyDetail})})]}),p.jsxs("div",{className:"space-y-4",children:[p.jsx("h3",{className:"text-sm font-display text-white border-l-2 border-nebula-cyan pl-3",children:"观测指南"}),p.jsxs("div",{className:"space-y-3",children:[p.jsxs("div",{className:"flex items-start gap-3 p-3 rounded-xl bg-space-700/30",children:[p.jsx("span",{className:"text-xl",children:"🌍"}),p.jsxs("div",{children:[p.jsx("p",{className:"text-xs text-white/50",children:"可见半球"}),p.jsx("p",{className:"text-sm text-white/80",children:d.hemisphere})]})]}),p.jsxs("div",{className:"flex items-start gap-3 p-3 rounded-xl bg-space-700/30",children:[p.jsx("span",{className:"text-xl",children:"⏰"}),p.jsxs("div",{children:[p.jsx("p",{className:"text-xs text-white/50",children:"最佳观测时间"}),p.jsx("p",{className:"text-sm text-white/80",children:d.bestTime})]})]}),p.jsxs("div",{className:"flex items-start gap-3 p-3 rounded-xl bg-space-700/30",children:[p.jsx("span",{className:"text-xl",children:"💡"}),p.jsxs("div",{children:[p.jsx("p",{className:"text-xs text-white/50",children:"观测技巧"}),p.jsx("p",{className:"text-sm text-white/80",children:d.observationTips})]})]})]})]}),p.jsxs("div",{className:"space-y-4",children:[p.jsx("h3",{className:"text-sm font-display text-white border-l-2 border-nebula-orange pl-3",children:"主要恒星"}),p.jsx("div",{className:"space-y-2",children:d.stars.map((b,N)=>p.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-xl bg-space-700/30 hover:bg-space-700/50 transition-colors",children:[p.jsx("div",{className:"w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",style:{backgroundColor:b.color+"30",boxShadow:`0 0 10px ${b.color}40`},children:p.jsx("div",{className:"w-3 h-3 rounded-full",style:{backgroundColor:b.color}})}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsx("p",{className:"text-sm text-white font-medium",children:b.name}),p.jsxs("p",{className:"text-[10px] text-white/40",children:["星等: ",b.mag]})]}),p.jsxs("span",{className:"text-[10px] text-white/40",children:["#",N+1]})]},b.id))})]}),d.tags&&d.tags.length>0&&p.jsxs("div",{className:"space-y-3",children:[p.jsx("h3",{className:"text-sm font-display text-white border-l-2 border-white/30 pl-3",children:"标签"}),p.jsx("div",{className:"flex flex-wrap gap-2",children:d.tags.map((b,N)=>p.jsxs("span",{className:"text-xs px-3 py-1 rounded-full bg-space-700/50 text-white/60 border border-white/10",children:["#",b]},N))})]}),x&&p.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-r from-nebula-purple/20 to-nebula-cyan/20 border border-nebula-purple/20",children:[p.jsx("p",{className:"text-xs text-white/50 text-center",children:"发现时间"}),p.jsx("p",{className:"text-sm text-white/80 text-center font-medium mt-1",children:x.toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})})]})]})}),p.jsx("div",{className:"p-5 border-t border-white/10",children:p.jsxs("div",{className:"flex gap-3",children:[p.jsx("button",{onClick:M,className:"flex-1 btn-secondary",children:"返回图鉴"}),p.jsx("button",{onClick:R,className:"flex-1 btn-primary",children:g?"再次观测":"开始观测"})]})})]})})}function Sb(){const{discoveredConstellations:t,favoriteConstellations:e,toggleFavorite:n,isConstellationComplete:i,setTargetConstellation:r,activeAtlasPanel:s,selectedConstellationDetail:a,setActivePanel:o,resetAtlasState:l,openAtlasDetail:c}=Dt(),[f,h]=Ke.useState(""),[d,g]=Ke.useState("all"),[y,_]=Ke.useState("all"),[m,u]=Ke.useState("all"),[v,x]=Ke.useState("name"),[M,R]=Ke.useState("grid"),C=Ke.useMemo(()=>{let P=[...ot];if(f){const H=f.toLowerCase();P=P.filter(V=>V.name.toLowerCase().includes(H)||V.nameEn.toLowerCase().includes(H)||V.description.toLowerCase().includes(H)||V.tags.some($=>$.toLowerCase().includes(H)))}return d!=="all"&&(P=P.filter(H=>H.season===d)),y!=="all"&&(P=P.filter(H=>H.difficulty===parseInt(y))),m==="discovered"?P=P.filter(H=>i(H.id)):m==="undiscovered"?P=P.filter(H=>!i(H.id)):m==="favorites"&&(P=P.filter(H=>e.includes(H.id))),P.sort((H,V)=>{switch(v){case"name":return H.name.localeCompare(V.name);case"difficulty":return H.difficulty-V.difficulty;case"season":return H.season.localeCompare(V.season);case"newest":return t.indexOf(V.id)-t.indexOf(H.id);default:return 0}}),P},[f,d,y,m,v,t,e,i]),b=Ke.useMemo(()=>{const P=ot.length,H=t.length,V=e.length,$={春:ot.filter(X=>X.season==="春").length,夏:ot.filter(X=>X.season==="夏").length,秋:ot.filter(X=>X.season==="秋").length,冬:ot.filter(X=>X.season==="冬").length},L={1:ot.filter(X=>X.difficulty===1).length,2:ot.filter(X=>X.difficulty===2).length,3:ot.filter(X=>X.difficulty===3).length};return{total:P,discovered:H,favorites:V,bySeason:$,byDifficulty:L}},[t,e]),N=[{value:"all",label:"全部季节"},{value:"春",label:"🌸 春季"},{value:"夏",label:"☀️ 夏季"},{value:"秋",label:"🍂 秋季"},{value:"冬",label:"❄️ 冬季"}],T=[{value:"all",label:"全部难度"},{value:"1",label:"⭐ 入门"},{value:"2",label:"⭐⭐ 进阶"},{value:"3",label:"⭐⭐⭐ 挑战"}],S=[{value:"all",label:"全部状态"},{value:"discovered",label:"✓ 已发现"},{value:"undiscovered",label:"○ 未发现"},{value:"favorites",label:"★ 收藏"}],D=[{value:"name",label:"按名称"},{value:"difficulty",label:"按难度"},{value:"season",label:"按季节"},{value:"newest",label:"最近发现"}],O=P=>{c(P)},k=P=>{r(P),l(),o(null)};return s==="detail"&&a?p.jsx(yb,{constellationId:a}):p.jsx("div",{className:`absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200`,children:p.jsxs("div",{className:"w-full max-w-2xl glass-panel max-h-[85vh] flex flex-col overflow-hidden",children:[p.jsxs("div",{className:"p-5 border-b border-white/10",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("h2",{className:"text-xl font-display text-white",children:p.jsx("span",{className:"text-gradient",children:"星空图鉴"})}),p.jsx("p",{className:"text-xs text-white/50 mt-1",children:"探索星座奥秘，记录你的星空发现"})]}),p.jsx("button",{onClick:()=>{l(),o(null)},className:"icon-btn","aria-label":"关闭",children:"✕"})]}),p.jsxs("div",{className:"mt-4 grid grid-cols-4 gap-2 text-center",children:[p.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[p.jsx("div",{className:"text-lg font-bold text-nebula-cyan",children:b.discovered}),p.jsx("div",{className:"text-[10px] text-white/50",children:"已发现"})]}),p.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[p.jsx("div",{className:"text-lg font-bold text-white/80",children:b.total}),p.jsx("div",{className:"text-[10px] text-white/50",children:"总星座"})]}),p.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[p.jsx("div",{className:"text-lg font-bold text-star-gold",children:b.favorites}),p.jsx("div",{className:"text-[10px] text-white/50",children:"收藏"})]}),p.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[p.jsxs("div",{className:"text-lg font-bold text-nebula-purple",children:[Math.round(b.discovered/b.total*100),"%"]}),p.jsx("div",{className:"text-[10px] text-white/50",children:"完成度"})]})]}),p.jsxs("div",{className:"mt-4 relative",children:[p.jsx("input",{type:"text",placeholder:"搜索星座名称、描述或标签...",value:f,onChange:P=>h(P.target.value),className:`w-full px-4 py-2.5 pl-10 bg-space-700/50 border border-white/10 rounded-xl
                       text-white placeholder-white/40 text-sm focus:outline-none focus:border-nebula-purple/50
                       focus:ring-1 focus:ring-nebula-purple/30 transition-all`}),p.jsx("span",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-white/40",children:"🔍"}),f&&p.jsx("button",{onClick:()=>h(""),className:"absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 text-sm",children:"✕"})]}),p.jsxs("div",{className:"mt-3 flex flex-wrap gap-2",children:[p.jsx("div",{className:"flex items-center gap-1",children:p.jsx("select",{value:d,onChange:P=>g(P.target.value),className:`px-2 py-1.5 bg-space-700/50 border border-white/10 rounded-lg
                         text-white text-xs focus:outline-none focus:border-nebula-purple/50`,children:N.map(P=>p.jsx("option",{value:P.value,className:"bg-space-800",children:P.label},P.value))})}),p.jsx("div",{className:"flex items-center gap-1",children:p.jsx("select",{value:y,onChange:P=>_(P.target.value),className:`px-2 py-1.5 bg-space-700/50 border border-white/10 rounded-lg
                         text-white text-xs focus:outline-none focus:border-nebula-purple/50`,children:T.map(P=>p.jsx("option",{value:P.value,className:"bg-space-800",children:P.label},P.value))})}),p.jsx("div",{className:"flex items-center gap-1",children:p.jsx("select",{value:m,onChange:P=>u(P.target.value),className:`px-2 py-1.5 bg-space-700/50 border border-white/10 rounded-lg
                         text-white text-xs focus:outline-none focus:border-nebula-purple/50`,children:S.map(P=>p.jsx("option",{value:P.value,className:"bg-space-800",children:P.label},P.value))})}),p.jsxs("div",{className:"flex items-center gap-1 ml-auto",children:[p.jsx("select",{value:v,onChange:P=>x(P.target.value),className:`px-2 py-1.5 bg-space-700/50 border border-white/10 rounded-lg
                         text-white text-xs focus:outline-none focus:border-nebula-purple/50`,children:D.map(P=>p.jsx("option",{value:P.value,className:"bg-space-800",children:P.label},P.value))}),p.jsxs("div",{className:"flex bg-space-700/50 rounded-lg border border-white/10",children:[p.jsx("button",{onClick:()=>R("grid"),className:`px-2 py-1.5 text-xs rounded-l-lg transition-colors ${M==="grid"?"bg-nebula-purple/30 text-white":"text-white/50 hover:text-white/80"}`,children:"▦"}),p.jsx("button",{onClick:()=>R("list"),className:`px-2 py-1.5 text-xs rounded-r-lg transition-colors ${M==="list"?"bg-nebula-purple/30 text-white":"text-white/50 hover:text-white/80"}`,children:"☰"})]})]})]})]}),p.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-thin p-5",children:C.length===0?p.jsxs("div",{className:"text-center py-12",children:[p.jsx("div",{className:"text-4xl mb-3 opacity-50",children:"🌌"}),p.jsx("p",{className:"text-white/50 text-sm",children:f?"没有找到匹配的星座":"暂无符合条件的星座"}),(f||d!=="all"||y!=="all"||m!=="all")&&p.jsx("button",{onClick:()=>{h(""),g("all"),_("all"),u("all")},className:"mt-3 text-xs text-nebula-cyan hover:underline",children:"清除筛选条件"})]}):M==="grid"?p.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:C.map(P=>{const H=i(P.id),V=e.includes(P.id),$=P.season==="春"?"spring":P.season==="夏"?"summer":P.season==="秋"?"autumn":"winter",L=Vt[$];return p.jsxs("div",{className:`relative rounded-2xl border overflow-hidden transition-all card-hover cursor-pointer ${H?"border-nebula-purple/50 bg-nebula-purple/8":"border-white/10 bg-space-700/30"}`,onClick:()=>O(P.id),children:[p.jsxs("div",{className:`h-20 relative overflow-hidden ${L?`bg-gradient-to-br ${L.color} opacity-20`:"bg-space-600/30"}`,children:[p.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:p.jsx("div",{className:"text-3xl opacity-60",children:H?"✦":"○"})}),p.jsx("div",{className:"absolute top-2 right-2 flex gap-1",children:p.jsx("button",{onClick:X=>{X.stopPropagation(),n(P.id)},className:`w-6 h-6 flex items-center justify-center rounded-full
                                    transition-all text-xs ${V?"bg-star-gold/20 text-star-gold":"bg-space-900/40 text-white/30 hover:text-star-gold"}`,children:V?"★":"☆"})})]}),p.jsxs("div",{className:"p-3",children:[p.jsxs("div",{className:"flex items-center gap-1.5",children:[p.jsx("h3",{className:"text-sm font-display text-white truncate flex-1",children:P.name}),H&&p.jsx("span",{className:"text-star-gold text-xs",children:"✓"})]}),p.jsx("p",{className:"text-[10px] text-white/40 truncate",children:P.nameEn}),p.jsxs("div",{className:"mt-2 flex items-center gap-1.5",children:[p.jsx("span",{className:`text-[9px] px-1.5 py-0.5 rounded ${P.difficulty===1?"bg-green-500/20 text-green-300":P.difficulty===2?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:Us[P.difficulty].label}),p.jsxs("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-space-600/50 text-white/50",children:[L==null?void 0:L.icon," ",P.season]})]})]})]},P.id)})}):p.jsx("div",{className:"space-y-3",children:C.map(P=>{const H=i(P.id),V=e.includes(P.id),$=P.season==="春"?"spring":P.season==="夏"?"summer":P.season==="秋"?"autumn":"winter",L=Vt[$];return p.jsx("div",{className:`p-4 rounded-2xl border transition-all card-hover cursor-pointer ${H?"border-nebula-purple/50 bg-nebula-purple/8":"border-white/10 bg-space-700/30"}`,onClick:()=>O(P.id),children:p.jsxs("div",{className:"flex items-start gap-3",children:[p.jsx("div",{className:`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${L?`bg-gradient-to-br ${L.color} opacity-30`:"bg-space-600/30"}`,children:p.jsx("span",{className:"text-2xl",children:H?"✦":"○"})}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("h3",{className:"text-base font-display text-white truncate",children:P.name}),H&&p.jsx("span",{className:"text-star-gold text-sm",children:"✓"})]}),p.jsx("p",{className:"text-[11px] text-white/40",children:P.nameEn}),p.jsx("p",{className:"text-xs text-white/60 mt-1 line-clamp-2",children:P.description}),p.jsxs("div",{className:"mt-2 flex items-center gap-2 flex-wrap",children:[p.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded ${P.difficulty===1?"bg-green-500/20 text-green-300":P.difficulty===2?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:Us[P.difficulty].label}),p.jsxs("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-space-600/50 text-white/50",children:[L==null?void 0:L.icon," ",P.season,"季"]}),p.jsxs("span",{className:"text-[10px] text-white/40",children:["✦ ",P.stars.length," 星"]})]})]}),p.jsxs("div",{className:"flex flex-col gap-2 flex-shrink-0",children:[p.jsx("button",{onClick:X=>{X.stopPropagation(),n(P.id)},className:`w-8 h-8 flex items-center justify-center rounded-full
                                    transition-all ${V?"bg-star-gold/20 text-star-gold":"bg-space-700/60 text-white/30 hover:text-star-gold hover:bg-space-600/60"}`,children:V?"★":"☆"}),p.jsx("button",{onClick:X=>{X.stopPropagation(),k(P.id)},className:`w-8 h-8 flex items-center justify-center rounded-full
                                   bg-nebula-purple/20 text-nebula-cyan hover:bg-nebula-purple/30
                                   transition-all`,title:"开始观测",children:"▶"})]})]})},P.id)})})})]})})}function Mb(){const{activePanel:t,setActivePanel:e,openAtlasList:n,getProgress:i,unlockedAchievements:r,observationLogs:s,seasonRewardsClaimed:a,getSeasonStats:o,favoriteConstellations:l}=Dt(),c=i(),f=Q0(),d=o()[f],g=Object.keys(Vt).length*3,y=[{id:"tasks",label:"星座",icon:"✨",badge:c.totalConstellations-c.constellations>0?(c.totalConstellations-c.constellations).toString():null},{id:"atlas",label:"图鉴",icon:"📚",badge:l.length>0?l.length.toString():null},{id:"log",label:"日志",icon:"📖",badge:s.length>0?s.length.toString():null},{id:null,label:"夜空",icon:"🌌",isHome:!0},{id:"seasons",label:"四季",icon:Vt[f].icon,badge:a.length<g&&(d==null?void 0:d.overallPercentage)>0?`${(d==null?void 0:d.overallPercentage)||0}%`:null},{id:"achievements",label:"成就",icon:"🏆",badge:r.length>0?r.length.toString():null},{id:"settings",label:"设置",icon:"⚙️"}],_=m=>{Ye.ensureContext(),(t===m||m===null&&t===null)&&m!==null?Ye.playPanelClose():Ye.playPanelOpen(),m==="atlas"&&t==="atlas"?e(null):m==="atlas"?n():e(t===m?null:m)};return p.jsx("div",{className:"absolute left-0 right-0 bottom-0 z-20 p-3 pb-safe pointer-events-none",children:p.jsx("div",{className:"max-w-lg mx-auto pointer-events-auto",children:p.jsx("div",{className:"glass-panel p-1.5 flex items-center justify-around relative",children:y.map(m=>{const u=t===m.id||m.isHome&&t===null;return p.jsxs("button",{onClick:()=>_(m.id),className:`relative flex flex-col items-center justify-center rounded-xl px-2 py-2
                          transition-all duration-200 min-w-[44px] ${u?m.isHome?"bg-gradient-to-br from-nebula-purple to-nebula-cyan text-white shadow-lg -mt-5":"bg-white/10 text-white":"text-white/50 hover:text-white/80 hover:bg-white/5"}`,children:[p.jsx("span",{className:`${m.isHome?"text-2xl":"text-lg"}`,children:m.icon}),p.jsx("span",{className:`mt-0.5 ${m.isHome?"text-[10px] font-medium":"text-[9px]"}`,children:m.label}),m.badge&&!u&&p.jsx("span",{className:`absolute -top-0.5 -right-0.5 px-1 h-4 min-w-[16px] rounded-full
                                 bg-star-gold text-space-900 text-[8px] font-bold
                                 flex items-center justify-center`,children:m.badge.length>3?"99+":m.badge})]},m.label)})})})})}function Eb(){const[t,e]=Ke.useState(null),n=Dt(s=>s.unlockedAchievements),[i,r]=Ke.useState([]);return Ke.useEffect(()=>{const s=n.filter(a=>!i.includes(a));if(s.length>0&&i.length>0){const a=Z0(s[0]);a&&(e(a),Ye.ensureContext(),Ye.playAchievement(),setTimeout(()=>e(null),3500))}r([...n])},[n]),t?p.jsx("div",{className:"fixed inset-x-0 top-20 z-50 flex justify-center px-4 pointer-events-none animate-in slide-in-from-top-4 duration-500",children:p.jsx("div",{className:`glass-panel px-5 py-4 max-w-sm w-full border-star-gold/30
                    shadow-2xl shadow-star-gold/10 animate-bounce-in`,children:p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("div",{className:`w-12 h-12 rounded-xl bg-gradient-to-br from-star-gold to-nebula-orange
                        flex items-center justify-center text-2xl shadow-lg animate-pulse-slow`,children:t.icon}),p.jsxs("div",{className:"flex-1",children:[p.jsx("div",{className:"text-[10px] text-star-gold uppercase tracking-widest font-semibold",children:"成就解锁"}),p.jsx("div",{className:"text-white font-display text-lg",children:t.name}),p.jsx("div",{className:"text-white/50 text-xs",children:t.description})]}),p.jsx("div",{className:"text-star-gold text-2xl animate-pulse-slow",children:"✦"})]})})}):null}function wb(){const t=Dt(e=>e.activePanel);return p.jsxs("div",{className:"relative w-full h-full overflow-hidden bg-space-900",children:[p.jsx(fb,{}),p.jsx(hb,{}),p.jsx(Mb,{}),p.jsx(Eb,{}),t==="tasks"&&p.jsx(pb,{}),t==="atlas"&&p.jsx(Sb,{}),t==="log"&&p.jsx(mb,{}),t==="achievements"&&p.jsx(vb,{}),t==="settings"&&p.jsx(xb,{}),t==="seasons"&&p.jsx(_b,{}),p.jsx("div",{className:`pointer-events-none absolute top-0 left-0 w-full h-32
                      bg-gradient-to-b from-space-900/50 to-transparent z-10`}),p.jsx("div",{className:`pointer-events-none absolute bottom-0 left-0 w-full h-40
                      bg-gradient-to-t from-space-900/80 to-transparent z-10`})]})}Cu.createRoot(document.getElementById("root")).render(p.jsx(Vm.StrictMode,{children:p.jsx(wb,{})}));
