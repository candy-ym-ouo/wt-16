var jx=Object.defineProperty;var Hx=(t,e,n)=>e in t?jx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var qf=(t,e,n)=>Hx(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function zm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bm={exports:{}},Jl={},jm={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $a=Symbol.for("react.element"),Vx=Symbol.for("react.portal"),Gx=Symbol.for("react.fragment"),Wx=Symbol.for("react.strict_mode"),Xx=Symbol.for("react.profiler"),$x=Symbol.for("react.provider"),Yx=Symbol.for("react.context"),qx=Symbol.for("react.forward_ref"),Kx=Symbol.for("react.suspense"),Zx=Symbol.for("react.memo"),Qx=Symbol.for("react.lazy"),Kf=Symbol.iterator;function Jx(t){return t===null||typeof t!="object"?null:(t=Kf&&t[Kf]||t["@@iterator"],typeof t=="function"?t:null)}var Hm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vm=Object.assign,Gm={};function Vs(t,e,n){this.props=t,this.context=e,this.refs=Gm,this.updater=n||Hm}Vs.prototype.isReactComponent={};Vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wm(){}Wm.prototype=Vs.prototype;function zd(t,e,n){this.props=t,this.context=e,this.refs=Gm,this.updater=n||Hm}var Bd=zd.prototype=new Wm;Bd.constructor=zd;Vm(Bd,Vs.prototype);Bd.isPureReactComponent=!0;var Zf=Array.isArray,Xm=Object.prototype.hasOwnProperty,jd={current:null},$m={key:!0,ref:!0,__self:!0,__source:!0};function Ym(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Xm.call(e,i)&&!$m.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:$a,type:t,key:s,ref:a,props:r,_owner:jd.current}}function ev(t,e){return{$$typeof:$a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hd(t){return typeof t=="object"&&t!==null&&t.$$typeof===$a}function tv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Qf=/\/+/g;function Tc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?tv(""+t.key):e.toString(36)}function tl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case $a:case Vx:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Tc(a,0):i,Zf(r)?(n="",t!=null&&(n=t.replace(Qf,"$&/")+"/"),tl(r,e,n,"",function(c){return c})):r!=null&&(Hd(r)&&(r=ev(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Qf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Zf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Tc(s,o);a+=tl(s,e,n,l,r)}else if(l=Jx(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Tc(s,o++),a+=tl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function so(t,e,n){if(t==null)return t;var i=[],r=0;return tl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function nv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},nl={transition:null},iv={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:nl,ReactCurrentOwner:jd};function qm(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:so,forEach:function(t,e,n){so(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return so(t,function(){e++}),e},toArray:function(t){return so(t,function(e){return e})||[]},only:function(t){if(!Hd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Vs;Ve.Fragment=Gx;Ve.Profiler=Xx;Ve.PureComponent=zd;Ve.StrictMode=Wx;Ve.Suspense=Kx;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iv;Ve.act=qm;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Vm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=jd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Xm.call(e,l)&&!$m.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:$a,type:t.type,key:r,ref:s,props:i,_owner:a}};Ve.createContext=function(t){return t={$$typeof:Yx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$x,_context:t},t.Consumer=t};Ve.createElement=Ym;Ve.createFactory=function(t){var e=Ym.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:qx,render:t}};Ve.isValidElement=Hd;Ve.lazy=function(t){return{$$typeof:Qx,_payload:{_status:-1,_result:t},_init:nv}};Ve.memo=function(t,e){return{$$typeof:Zx,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=nl.transition;nl.transition={};try{t()}finally{nl.transition=e}};Ve.unstable_act=qm;Ve.useCallback=function(t,e){return Qt.current.useCallback(t,e)};Ve.useContext=function(t){return Qt.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return Qt.current.useEffect(t,e)};Ve.useId=function(){return Qt.current.useId()};Ve.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return Qt.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};Ve.useRef=function(t){return Qt.current.useRef(t)};Ve.useState=function(t){return Qt.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return Qt.current.useTransition()};Ve.version="18.3.1";jm.exports=Ve;var ze=jm.exports;const Km=zm(ze);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv=ze,sv=Symbol.for("react.element"),av=Symbol.for("react.fragment"),ov=Object.prototype.hasOwnProperty,lv=rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cv={key:!0,ref:!0,__self:!0,__source:!0};function Zm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)ov.call(e,i)&&!cv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:sv,type:t,key:s,ref:a,props:r,_owner:lv.current}}Jl.Fragment=av;Jl.jsx=Zm;Jl.jsxs=Zm;Bm.exports=Jl;var u=Bm.exports,Uu={},Qm={exports:{}},xn={},Jm={exports:{}},eg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,$){var J=D.length;D.push($);e:for(;0<J;){var le=J-1>>>1,we=D[le];if(0<r(we,$))D[le]=$,D[J]=we,J=le;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var $=D[0],J=D.pop();if(J!==$){D[0]=J;e:for(var le=0,we=D.length,je=we>>>1;le<je;){var q=2*(le+1)-1,re=D[q],pe=q+1,ue=D[pe];if(0>r(re,J))pe<we&&0>r(ue,re)?(D[le]=ue,D[pe]=J,le=pe):(D[le]=re,D[q]=J,le=q);else if(pe<we&&0>r(ue,J))D[le]=ue,D[pe]=J,le=pe;else break e}}return $}function r(D,$){var J=D.sortIndex-$.sortIndex;return J!==0?J:D.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,p=null,h=3,g=!1,y=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=D)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function M(D){if(_=!1,v(D),!y)if(n(l)!==null)y=!0,V(R);else{var $=n(c);$!==null&&Y(M,$.startTime-D)}}function R(D,$){y=!1,_&&(_=!1,d(N),N=-1),g=!0;var J=h;try{for(v($),p=n(l);p!==null&&(!(p.expirationTime>$)||D&&!L());){var le=p.callback;if(typeof le=="function"){p.callback=null,h=p.priorityLevel;var we=le(p.expirationTime<=$);$=t.unstable_now(),typeof we=="function"?p.callback=we:p===n(l)&&i(l),v($)}else i(l);p=n(l)}if(p!==null)var je=!0;else{var q=n(c);q!==null&&Y(M,q.startTime-$),je=!1}return je}finally{p=null,h=J,g=!1}}var C=!1,T=null,N=-1,b=5,w=-1;function L(){return!(t.unstable_now()-w<b)}function F(){if(T!==null){var D=t.unstable_now();w=D;var $=!0;try{$=T(!0,D)}finally{$?z():(C=!1,T=null)}}else C=!1}var z;if(typeof x=="function")z=function(){x(F)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,j=P.port2;P.port1.onmessage=F,z=function(){j.postMessage(null)}}else z=function(){m(F,0)};function V(D){T=D,C||(C=!0,z())}function Y(D,$){N=m(function(){D(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,V(R))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var J=h;h=$;try{return D()}finally{h=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,$){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var J=h;h=D;try{return $()}finally{h=J}},t.unstable_scheduleCallback=function(D,$,J){var le=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?le+J:le):J=le,D){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=J+we,D={id:f++,callback:$,priorityLevel:D,startTime:J,expirationTime:we,sortIndex:-1},J>le?(D.sortIndex=J,e(c,D),n(l)===null&&D===n(c)&&(_?(d(N),N=-1):_=!0,Y(M,J-le))):(D.sortIndex=we,e(l,D),y||g||(y=!0,V(R))),D},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(D){var $=h;return function(){var J=h;h=$;try{return D.apply(this,arguments)}finally{h=J}}}})(eg);Jm.exports=eg;var uv=Jm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv=ze,mn=uv;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tg=new Set,Ra={};function Pr(t,e){As(t,e),As(t+"Capture",e)}function As(t,e){for(Ra[t]=e,t=0;t<e.length;t++)tg.add(e[t])}var mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Iu=Object.prototype.hasOwnProperty,fv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jf={},eh={};function hv(t){return Iu.call(eh,t)?!0:Iu.call(Jf,t)?!1:fv.test(t)?eh[t]=!0:(Jf[t]=!0,!1)}function pv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function mv(t,e,n,i){if(e===null||typeof e>"u"||pv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vd=/[\-:]([a-z])/g;function Gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vd,Gd);Ft[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vd,Gd);Ft[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vd,Gd);Ft[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wd(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(mv(e,n,r,i)&&(n=null),i||r===null?hv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var yi=dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ao=Symbol.for("react.element"),rs=Symbol.for("react.portal"),ss=Symbol.for("react.fragment"),Xd=Symbol.for("react.strict_mode"),Fu=Symbol.for("react.profiler"),ng=Symbol.for("react.provider"),ig=Symbol.for("react.context"),$d=Symbol.for("react.forward_ref"),Ou=Symbol.for("react.suspense"),ku=Symbol.for("react.suspense_list"),Yd=Symbol.for("react.memo"),Ri=Symbol.for("react.lazy"),rg=Symbol.for("react.offscreen"),th=Symbol.iterator;function Ys(t){return t===null||typeof t!="object"?null:(t=th&&t[th]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,Cc;function fa(t){if(Cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+t}var Ac=!1;function Rc(t,e){if(!t||Ac)return"";Ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Ac=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?fa(t):""}function gv(t){switch(t.tag){case 5:return fa(t.type);case 16:return fa("Lazy");case 13:return fa("Suspense");case 19:return fa("SuspenseList");case 0:case 2:case 15:return t=Rc(t.type,!1),t;case 11:return t=Rc(t.type.render,!1),t;case 1:return t=Rc(t.type,!0),t;default:return""}}function zu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ss:return"Fragment";case rs:return"Portal";case Fu:return"Profiler";case Xd:return"StrictMode";case Ou:return"Suspense";case ku:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ig:return(t.displayName||"Context")+".Consumer";case ng:return(t._context.displayName||"Context")+".Provider";case $d:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yd:return e=t.displayName||null,e!==null?e:zu(t.type)||"Memo";case Ri:e=t._payload,t=t._init;try{return zu(t(e))}catch{}}return null}function xv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zu(e);case 8:return e===Xd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function sg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function vv(t){var e=sg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function oo(t){t._valueTracker||(t._valueTracker=vv(t))}function ag(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=sg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ml(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bu(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function nh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Yi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function og(t,e){e=e.checked,e!=null&&Wd(t,"checked",e,!1)}function ju(t,e){og(t,e);var n=Yi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hu(t,e.type,Yi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ih(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hu(t,e,n){(e!=="number"||ml(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ha=Array.isArray;function vs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Yi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Vu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(ha(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yi(n)}}function lg(t,e){var n=Yi(e.value),i=Yi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function sh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var lo,ug=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(lo=lo||document.createElement("div"),lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Na(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_v=["Webkit","ms","Moz","O"];Object.keys(_a).forEach(function(t){_v.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_a[e]=_a[t]})});function dg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_a.hasOwnProperty(t)&&_a[t]?(""+e).trim():e+"px"}function fg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=dg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var yv=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wu(t,e){if(e){if(yv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Xu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $u=null;function qd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yu=null,_s=null,ys=null;function ah(t){if(t=Ka(t)){if(typeof Yu!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=rc(e),Yu(t.stateNode,t.type,e))}}function hg(t){_s?ys?ys.push(t):ys=[t]:_s=t}function pg(){if(_s){var t=_s,e=ys;if(ys=_s=null,ah(t),e)for(t=0;t<e.length;t++)ah(e[t])}}function mg(t,e){return t(e)}function gg(){}var Nc=!1;function xg(t,e,n){if(Nc)return t(e,n);Nc=!0;try{return mg(t,e,n)}finally{Nc=!1,(_s!==null||ys!==null)&&(gg(),pg())}}function Pa(t,e){var n=t.stateNode;if(n===null)return null;var i=rc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var qu=!1;if(mi)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){qu=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{qu=!1}function Sv(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var ya=!1,gl=null,xl=!1,Ku=null,Mv={onError:function(t){ya=!0,gl=t}};function wv(t,e,n,i,r,s,a,o,l){ya=!1,gl=null,Sv.apply(Mv,arguments)}function Ev(t,e,n,i,r,s,a,o,l){if(wv.apply(this,arguments),ya){if(ya){var c=gl;ya=!1,gl=null}else throw Error(ne(198));xl||(xl=!0,Ku=c)}}function Lr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function vg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function oh(t){if(Lr(t)!==t)throw Error(ne(188))}function bv(t){var e=t.alternate;if(!e){if(e=Lr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return oh(r),t;if(s===i)return oh(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function _g(t){return t=bv(t),t!==null?yg(t):null}function yg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=yg(t);if(e!==null)return e;t=t.sibling}return null}var Sg=mn.unstable_scheduleCallback,lh=mn.unstable_cancelCallback,Tv=mn.unstable_shouldYield,Cv=mn.unstable_requestPaint,yt=mn.unstable_now,Av=mn.unstable_getCurrentPriorityLevel,Kd=mn.unstable_ImmediatePriority,Mg=mn.unstable_UserBlockingPriority,vl=mn.unstable_NormalPriority,Rv=mn.unstable_LowPriority,wg=mn.unstable_IdlePriority,ec=null,Jn=null;function Nv(t){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(ec,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:Dv,Pv=Math.log,Lv=Math.LN2;function Dv(t){return t>>>=0,t===0?32:31-(Pv(t)/Lv|0)|0}var co=64,uo=4194304;function pa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _l(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=pa(o):(s&=a,s!==0&&(i=pa(s)))}else a=n&~r,a!==0?i=pa(a):s!==0&&(i=pa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-zn(e),r=1<<n,i|=t[n],e&=~r;return i}function Uv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Iv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-zn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Uv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Zu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Eg(){var t=co;return co<<=1,!(co&4194240)&&(co=64),t}function Pc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ya(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function Fv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Zd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function bg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tg,Qd,Cg,Ag,Rg,Qu=!1,fo=[],Oi=null,ki=null,zi=null,La=new Map,Da=new Map,Pi=[],Ov="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ch(t,e){switch(t){case"focusin":case"focusout":Oi=null;break;case"dragenter":case"dragleave":ki=null;break;case"mouseover":case"mouseout":zi=null;break;case"pointerover":case"pointerout":La.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(e.pointerId)}}function Ks(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ka(e),e!==null&&Qd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function kv(t,e,n,i,r){switch(e){case"focusin":return Oi=Ks(Oi,t,e,n,i,r),!0;case"dragenter":return ki=Ks(ki,t,e,n,i,r),!0;case"mouseover":return zi=Ks(zi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return La.set(s,Ks(La.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Da.set(s,Ks(Da.get(s)||null,t,e,n,i,r)),!0}return!1}function Ng(t){var e=vr(t.target);if(e!==null){var n=Lr(e);if(n!==null){if(e=n.tag,e===13){if(e=vg(n),e!==null){t.blockedOn=e,Rg(t.priority,function(){Cg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ju(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);$u=i,n.target.dispatchEvent(i),$u=null}else return e=Ka(n),e!==null&&Qd(e),t.blockedOn=n,!1;e.shift()}return!0}function uh(t,e,n){il(t)&&n.delete(e)}function zv(){Qu=!1,Oi!==null&&il(Oi)&&(Oi=null),ki!==null&&il(ki)&&(ki=null),zi!==null&&il(zi)&&(zi=null),La.forEach(uh),Da.forEach(uh)}function Zs(t,e){t.blockedOn===e&&(t.blockedOn=null,Qu||(Qu=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,zv)))}function Ua(t){function e(r){return Zs(r,t)}if(0<fo.length){Zs(fo[0],t);for(var n=1;n<fo.length;n++){var i=fo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Oi!==null&&Zs(Oi,t),ki!==null&&Zs(ki,t),zi!==null&&Zs(zi,t),La.forEach(e),Da.forEach(e),n=0;n<Pi.length;n++)i=Pi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Pi.length&&(n=Pi[0],n.blockedOn===null);)Ng(n),n.blockedOn===null&&Pi.shift()}var Ss=yi.ReactCurrentBatchConfig,yl=!0;function Bv(t,e,n,i){var r=et,s=Ss.transition;Ss.transition=null;try{et=1,Jd(t,e,n,i)}finally{et=r,Ss.transition=s}}function jv(t,e,n,i){var r=et,s=Ss.transition;Ss.transition=null;try{et=4,Jd(t,e,n,i)}finally{et=r,Ss.transition=s}}function Jd(t,e,n,i){if(yl){var r=Ju(t,e,n,i);if(r===null)jc(t,e,i,Sl,n),ch(t,i);else if(kv(r,t,e,n,i))i.stopPropagation();else if(ch(t,i),e&4&&-1<Ov.indexOf(t)){for(;r!==null;){var s=Ka(r);if(s!==null&&Tg(s),s=Ju(t,e,n,i),s===null&&jc(t,e,i,Sl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else jc(t,e,i,null,n)}}var Sl=null;function Ju(t,e,n,i){if(Sl=null,t=qd(i),t=vr(t),t!==null)if(e=Lr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=vg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Sl=t,null}function Pg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Av()){case Kd:return 1;case Mg:return 4;case vl:case Rv:return 16;case wg:return 536870912;default:return 16}default:return 16}}var Ui=null,ef=null,rl=null;function Lg(){if(rl)return rl;var t,e=ef,n=e.length,i,r="value"in Ui?Ui.value:Ui.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return rl=r.slice(t,1<i?1-i:void 0)}function sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ho(){return!0}function dh(){return!1}function vn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ho:dh,this.isPropagationStopped=dh,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ho)},persist:function(){},isPersistent:ho}),e}var Gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tf=vn(Gs),qa=pt({},Gs,{view:0,detail:0}),Hv=vn(qa),Lc,Dc,Qs,tc=pt({},qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qs&&(Qs&&t.type==="mousemove"?(Lc=t.screenX-Qs.screenX,Dc=t.screenY-Qs.screenY):Dc=Lc=0,Qs=t),Lc)},movementY:function(t){return"movementY"in t?t.movementY:Dc}}),fh=vn(tc),Vv=pt({},tc,{dataTransfer:0}),Gv=vn(Vv),Wv=pt({},qa,{relatedTarget:0}),Uc=vn(Wv),Xv=pt({},Gs,{animationName:0,elapsedTime:0,pseudoElement:0}),$v=vn(Xv),Yv=pt({},Gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qv=vn(Yv),Kv=pt({},Gs,{data:0}),hh=vn(Kv),Zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Jv[t])?!!e[t]:!1}function nf(){return e_}var t_=pt({},qa,{key:function(t){if(t.key){var e=Zv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),n_=vn(t_),i_=pt({},tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ph=vn(i_),r_=pt({},qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),s_=vn(r_),a_=pt({},Gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),o_=vn(a_),l_=pt({},tc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),c_=vn(l_),u_=[9,13,27,32],rf=mi&&"CompositionEvent"in window,Sa=null;mi&&"documentMode"in document&&(Sa=document.documentMode);var d_=mi&&"TextEvent"in window&&!Sa,Dg=mi&&(!rf||Sa&&8<Sa&&11>=Sa),mh=" ",gh=!1;function Ug(t,e){switch(t){case"keyup":return u_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ig(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function f_(t,e){switch(t){case"compositionend":return Ig(e);case"keypress":return e.which!==32?null:(gh=!0,mh);case"textInput":return t=e.data,t===mh&&gh?null:t;default:return null}}function h_(t,e){if(as)return t==="compositionend"||!rf&&Ug(t,e)?(t=Lg(),rl=ef=Ui=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Dg&&e.locale!=="ko"?null:e.data;default:return null}}var p_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!p_[t.type]:e==="textarea"}function Fg(t,e,n,i){hg(i),e=Ml(e,"onChange"),0<e.length&&(n=new tf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ma=null,Ia=null;function m_(t){$g(t,0)}function nc(t){var e=cs(t);if(ag(e))return t}function g_(t,e){if(t==="change")return e}var Og=!1;if(mi){var Ic;if(mi){var Fc="oninput"in document;if(!Fc){var vh=document.createElement("div");vh.setAttribute("oninput","return;"),Fc=typeof vh.oninput=="function"}Ic=Fc}else Ic=!1;Og=Ic&&(!document.documentMode||9<document.documentMode)}function _h(){Ma&&(Ma.detachEvent("onpropertychange",kg),Ia=Ma=null)}function kg(t){if(t.propertyName==="value"&&nc(Ia)){var e=[];Fg(e,Ia,t,qd(t)),xg(m_,e)}}function x_(t,e,n){t==="focusin"?(_h(),Ma=e,Ia=n,Ma.attachEvent("onpropertychange",kg)):t==="focusout"&&_h()}function v_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nc(Ia)}function __(t,e){if(t==="click")return nc(e)}function y_(t,e){if(t==="input"||t==="change")return nc(e)}function S_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:S_;function Fa(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Iu.call(e,r)||!Hn(t[r],e[r]))return!1}return!0}function yh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sh(t,e){var n=yh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yh(n)}}function zg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bg(){for(var t=window,e=ml();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ml(t.document)}return e}function sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function M_(t){var e=Bg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zg(n.ownerDocument.documentElement,n)){if(i!==null&&sf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Sh(n,s);var a=Sh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var w_=mi&&"documentMode"in document&&11>=document.documentMode,os=null,ed=null,wa=null,td=!1;function Mh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;td||os==null||os!==ml(i)||(i=os,"selectionStart"in i&&sf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),wa&&Fa(wa,i)||(wa=i,i=Ml(ed,"onSelect"),0<i.length&&(e=new tf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=os)))}function po(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ls={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},Oc={},jg={};mi&&(jg=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function ic(t){if(Oc[t])return Oc[t];if(!ls[t])return t;var e=ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jg)return Oc[t]=e[n];return t}var Hg=ic("animationend"),Vg=ic("animationiteration"),Gg=ic("animationstart"),Wg=ic("transitionend"),Xg=new Map,wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,e){Xg.set(t,e),Pr(e,[t])}for(var kc=0;kc<wh.length;kc++){var zc=wh[kc],E_=zc.toLowerCase(),b_=zc[0].toUpperCase()+zc.slice(1);er(E_,"on"+b_)}er(Hg,"onAnimationEnd");er(Vg,"onAnimationIteration");er(Gg,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(Wg,"onTransitionEnd");As("onMouseEnter",["mouseout","mouseover"]);As("onMouseLeave",["mouseout","mouseover"]);As("onPointerEnter",["pointerout","pointerover"]);As("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),T_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function Eh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Ev(i,e,void 0,t),t.currentTarget=null}function $g(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Eh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Eh(r,o,c),s=l}}}if(xl)throw t=Ku,xl=!1,Ku=null,t}function ot(t,e){var n=e[ad];n===void 0&&(n=e[ad]=new Set);var i=t+"__bubble";n.has(i)||(Yg(e,t,2,!1),n.add(i))}function Bc(t,e,n){var i=0;e&&(i|=4),Yg(n,t,i,e)}var mo="_reactListening"+Math.random().toString(36).slice(2);function Oa(t){if(!t[mo]){t[mo]=!0,tg.forEach(function(n){n!=="selectionchange"&&(T_.has(n)||Bc(n,!1,t),Bc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[mo]||(e[mo]=!0,Bc("selectionchange",!1,e))}}function Yg(t,e,n,i){switch(Pg(e)){case 1:var r=Bv;break;case 4:r=jv;break;default:r=Jd}n=r.bind(null,e,n,t),r=void 0,!qu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function jc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=vr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}xg(function(){var c=s,f=qd(n),p=[];e:{var h=Xg.get(t);if(h!==void 0){var g=tf,y=t;switch(t){case"keypress":if(sl(n)===0)break e;case"keydown":case"keyup":g=n_;break;case"focusin":y="focus",g=Uc;break;case"focusout":y="blur",g=Uc;break;case"beforeblur":case"afterblur":g=Uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=s_;break;case Hg:case Vg:case Gg:g=$v;break;case Wg:g=o_;break;case"scroll":g=Hv;break;case"wheel":g=c_;break;case"copy":case"cut":case"paste":g=qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ph}var _=(e&4)!==0,m=!_&&t==="scroll",d=_?h!==null?h+"Capture":null:h;_=[];for(var x=c,v;x!==null;){v=x;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,d!==null&&(M=Pa(x,d),M!=null&&_.push(ka(x,M,v)))),m)break;x=x.return}0<_.length&&(h=new g(h,y,null,n,f),p.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==$u&&(y=n.relatedTarget||n.fromElement)&&(vr(y)||y[gi]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?vr(y):null,y!==null&&(m=Lr(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(_=fh,M="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(_=ph,M="onPointerLeave",d="onPointerEnter",x="pointer"),m=g==null?h:cs(g),v=y==null?h:cs(y),h=new _(M,x+"leave",g,n,f),h.target=m,h.relatedTarget=v,M=null,vr(f)===c&&(_=new _(d,x+"enter",y,n,f),_.target=v,_.relatedTarget=m,M=_),m=M,g&&y)t:{for(_=g,d=y,x=0,v=_;v;v=Ur(v))x++;for(v=0,M=d;M;M=Ur(M))v++;for(;0<x-v;)_=Ur(_),x--;for(;0<v-x;)d=Ur(d),v--;for(;x--;){if(_===d||d!==null&&_===d.alternate)break t;_=Ur(_),d=Ur(d)}_=null}else _=null;g!==null&&bh(p,h,g,_,!1),y!==null&&m!==null&&bh(p,m,y,_,!0)}}e:{if(h=c?cs(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var R=g_;else if(xh(h))if(Og)R=y_;else{R=v_;var C=x_}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=__);if(R&&(R=R(t,c))){Fg(p,R,n,f);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Hu(h,"number",h.value)}switch(C=c?cs(c):window,t){case"focusin":(xh(C)||C.contentEditable==="true")&&(os=C,ed=c,wa=null);break;case"focusout":wa=ed=os=null;break;case"mousedown":td=!0;break;case"contextmenu":case"mouseup":case"dragend":td=!1,Mh(p,n,f);break;case"selectionchange":if(w_)break;case"keydown":case"keyup":Mh(p,n,f)}var T;if(rf)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else as?Ug(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Dg&&n.locale!=="ko"&&(as||N!=="onCompositionStart"?N==="onCompositionEnd"&&as&&(T=Lg()):(Ui=f,ef="value"in Ui?Ui.value:Ui.textContent,as=!0)),C=Ml(c,N),0<C.length&&(N=new hh(N,t,null,n,f),p.push({event:N,listeners:C}),T?N.data=T:(T=Ig(n),T!==null&&(N.data=T)))),(T=d_?f_(t,n):h_(t,n))&&(c=Ml(c,"onBeforeInput"),0<c.length&&(f=new hh("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=T))}$g(p,e)})}function ka(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ml(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Pa(t,n),s!=null&&i.unshift(ka(t,s,r)),s=Pa(t,e),s!=null&&i.push(ka(t,s,r))),t=t.return}return i}function Ur(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Pa(n,s),l!=null&&a.unshift(ka(n,l,o))):r||(l=Pa(n,s),l!=null&&a.push(ka(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var C_=/\r\n?/g,A_=/\u0000|\uFFFD/g;function Th(t){return(typeof t=="string"?t:""+t).replace(C_,`
`).replace(A_,"")}function go(t,e,n){if(e=Th(e),Th(t)!==e&&n)throw Error(ne(425))}function wl(){}var nd=null,id=null;function rd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sd=typeof setTimeout=="function"?setTimeout:void 0,R_=typeof clearTimeout=="function"?clearTimeout:void 0,Ch=typeof Promise=="function"?Promise:void 0,N_=typeof queueMicrotask=="function"?queueMicrotask:typeof Ch<"u"?function(t){return Ch.resolve(null).then(t).catch(P_)}:sd;function P_(t){setTimeout(function(){throw t})}function Hc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ua(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ua(e)}function Bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ah(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ws=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Ws,za="__reactProps$"+Ws,gi="__reactContainer$"+Ws,ad="__reactEvents$"+Ws,L_="__reactListeners$"+Ws,D_="__reactHandles$"+Ws;function vr(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gi]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ah(t);t!==null;){if(n=t[Yn])return n;t=Ah(t)}return e}t=n,n=t.parentNode}return null}function Ka(t){return t=t[Yn]||t[gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function rc(t){return t[za]||null}var od=[],us=-1;function tr(t){return{current:t}}function ct(t){0>us||(t.current=od[us],od[us]=null,us--)}function at(t,e){us++,od[us]=t.current,t.current=e}var qi={},Wt=tr(qi),rn=tr(!1),br=qi;function Rs(t,e){var n=t.type.contextTypes;if(!n)return qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function sn(t){return t=t.childContextTypes,t!=null}function El(){ct(rn),ct(Wt)}function Rh(t,e,n){if(Wt.current!==qi)throw Error(ne(168));at(Wt,e),at(rn,n)}function qg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,xv(t)||"Unknown",r));return pt({},n,i)}function bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qi,br=Wt.current,at(Wt,t),at(rn,rn.current),!0}function Nh(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=qg(t,e,br),i.__reactInternalMemoizedMergedChildContext=t,ct(rn),ct(Wt),at(Wt,t)):ct(rn),at(rn,n)}var ci=null,sc=!1,Vc=!1;function Kg(t){ci===null?ci=[t]:ci.push(t)}function U_(t){sc=!0,Kg(t)}function nr(){if(!Vc&&ci!==null){Vc=!0;var t=0,e=et;try{var n=ci;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ci=null,sc=!1}catch(r){throw ci!==null&&(ci=ci.slice(t+1)),Sg(Kd,nr),r}finally{et=e,Vc=!1}}return null}var ds=[],fs=0,Tl=null,Cl=0,Sn=[],Mn=0,Tr=null,di=1,fi="";function fr(t,e){ds[fs++]=Cl,ds[fs++]=Tl,Tl=t,Cl=e}function Zg(t,e,n){Sn[Mn++]=di,Sn[Mn++]=fi,Sn[Mn++]=Tr,Tr=t;var i=di;t=fi;var r=32-zn(i)-1;i&=~(1<<r),n+=1;var s=32-zn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,di=1<<32-zn(e)+r|n<<r|i,fi=s+t}else di=1<<s|n<<r|i,fi=t}function af(t){t.return!==null&&(fr(t,1),Zg(t,1,0))}function of(t){for(;t===Tl;)Tl=ds[--fs],ds[fs]=null,Cl=ds[--fs],ds[fs]=null;for(;t===Tr;)Tr=Sn[--Mn],Sn[Mn]=null,fi=Sn[--Mn],Sn[Mn]=null,di=Sn[--Mn],Sn[Mn]=null}var pn=null,hn=null,ut=!1,Fn=null;function Qg(t,e){var n=En(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ph(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,hn=Bi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Tr!==null?{id:di,overflow:fi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=En(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,hn=null,!0):!1;default:return!1}}function ld(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cd(t){if(ut){var e=hn;if(e){var n=e;if(!Ph(t,e)){if(ld(t))throw Error(ne(418));e=Bi(n.nextSibling);var i=pn;e&&Ph(t,e)?Qg(i,n):(t.flags=t.flags&-4097|2,ut=!1,pn=t)}}else{if(ld(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ut=!1,pn=t}}}function Lh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function xo(t){if(t!==pn)return!1;if(!ut)return Lh(t),ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rd(t.type,t.memoizedProps)),e&&(e=hn)){if(ld(t))throw Jg(),Error(ne(418));for(;e;)Qg(t,e),e=Bi(e.nextSibling)}if(Lh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=Bi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=pn?Bi(t.stateNode.nextSibling):null;return!0}function Jg(){for(var t=hn;t;)t=Bi(t.nextSibling)}function Ns(){hn=pn=null,ut=!1}function lf(t){Fn===null?Fn=[t]:Fn.push(t)}var I_=yi.ReactCurrentBatchConfig;function Js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function vo(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dh(t){var e=t._init;return e(t._payload)}function e0(t){function e(d,x){if(t){var v=d.deletions;v===null?(d.deletions=[x],d.flags|=16):v.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=Gi(d,x),d.index=0,d.sibling=null,d}function s(d,x,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<x?(d.flags|=2,x):v):(d.flags|=2,x)):(d.flags|=1048576,x)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,x,v,M){return x===null||x.tag!==6?(x=Kc(v,d.mode,M),x.return=d,x):(x=r(x,v),x.return=d,x)}function l(d,x,v,M){var R=v.type;return R===ss?f(d,x,v.props.children,M,v.key):x!==null&&(x.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ri&&Dh(R)===x.type)?(M=r(x,v.props),M.ref=Js(d,x,v),M.return=d,M):(M=fl(v.type,v.key,v.props,null,d.mode,M),M.ref=Js(d,x,v),M.return=d,M)}function c(d,x,v,M){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Zc(v,d.mode,M),x.return=d,x):(x=r(x,v.children||[]),x.return=d,x)}function f(d,x,v,M,R){return x===null||x.tag!==7?(x=Er(v,d.mode,M,R),x.return=d,x):(x=r(x,v),x.return=d,x)}function p(d,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Kc(""+x,d.mode,v),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ao:return v=fl(x.type,x.key,x.props,null,d.mode,v),v.ref=Js(d,null,x),v.return=d,v;case rs:return x=Zc(x,d.mode,v),x.return=d,x;case Ri:var M=x._init;return p(d,M(x._payload),v)}if(ha(x)||Ys(x))return x=Er(x,d.mode,v,null),x.return=d,x;vo(d,x)}return null}function h(d,x,v,M){var R=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:o(d,x,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ao:return v.key===R?l(d,x,v,M):null;case rs:return v.key===R?c(d,x,v,M):null;case Ri:return R=v._init,h(d,x,R(v._payload),M)}if(ha(v)||Ys(v))return R!==null?null:f(d,x,v,M,null);vo(d,v)}return null}function g(d,x,v,M,R){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(v)||null,o(x,d,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ao:return d=d.get(M.key===null?v:M.key)||null,l(x,d,M,R);case rs:return d=d.get(M.key===null?v:M.key)||null,c(x,d,M,R);case Ri:var C=M._init;return g(d,x,v,C(M._payload),R)}if(ha(M)||Ys(M))return d=d.get(v)||null,f(x,d,M,R,null);vo(x,M)}return null}function y(d,x,v,M){for(var R=null,C=null,T=x,N=x=0,b=null;T!==null&&N<v.length;N++){T.index>N?(b=T,T=null):b=T.sibling;var w=h(d,T,v[N],M);if(w===null){T===null&&(T=b);break}t&&T&&w.alternate===null&&e(d,T),x=s(w,x,N),C===null?R=w:C.sibling=w,C=w,T=b}if(N===v.length)return n(d,T),ut&&fr(d,N),R;if(T===null){for(;N<v.length;N++)T=p(d,v[N],M),T!==null&&(x=s(T,x,N),C===null?R=T:C.sibling=T,C=T);return ut&&fr(d,N),R}for(T=i(d,T);N<v.length;N++)b=g(T,d,N,v[N],M),b!==null&&(t&&b.alternate!==null&&T.delete(b.key===null?N:b.key),x=s(b,x,N),C===null?R=b:C.sibling=b,C=b);return t&&T.forEach(function(L){return e(d,L)}),ut&&fr(d,N),R}function _(d,x,v,M){var R=Ys(v);if(typeof R!="function")throw Error(ne(150));if(v=R.call(v),v==null)throw Error(ne(151));for(var C=R=null,T=x,N=x=0,b=null,w=v.next();T!==null&&!w.done;N++,w=v.next()){T.index>N?(b=T,T=null):b=T.sibling;var L=h(d,T,w.value,M);if(L===null){T===null&&(T=b);break}t&&T&&L.alternate===null&&e(d,T),x=s(L,x,N),C===null?R=L:C.sibling=L,C=L,T=b}if(w.done)return n(d,T),ut&&fr(d,N),R;if(T===null){for(;!w.done;N++,w=v.next())w=p(d,w.value,M),w!==null&&(x=s(w,x,N),C===null?R=w:C.sibling=w,C=w);return ut&&fr(d,N),R}for(T=i(d,T);!w.done;N++,w=v.next())w=g(T,d,N,w.value,M),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?N:w.key),x=s(w,x,N),C===null?R=w:C.sibling=w,C=w);return t&&T.forEach(function(F){return e(d,F)}),ut&&fr(d,N),R}function m(d,x,v,M){if(typeof v=="object"&&v!==null&&v.type===ss&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ao:e:{for(var R=v.key,C=x;C!==null;){if(C.key===R){if(R=v.type,R===ss){if(C.tag===7){n(d,C.sibling),x=r(C,v.props.children),x.return=d,d=x;break e}}else if(C.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ri&&Dh(R)===C.type){n(d,C.sibling),x=r(C,v.props),x.ref=Js(d,C,v),x.return=d,d=x;break e}n(d,C);break}else e(d,C);C=C.sibling}v.type===ss?(x=Er(v.props.children,d.mode,M,v.key),x.return=d,d=x):(M=fl(v.type,v.key,v.props,null,d.mode,M),M.ref=Js(d,x,v),M.return=d,d=M)}return a(d);case rs:e:{for(C=v.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(d,x.sibling),x=r(x,v.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=Zc(v,d.mode,M),x.return=d,d=x}return a(d);case Ri:return C=v._init,m(d,x,C(v._payload),M)}if(ha(v))return y(d,x,v,M);if(Ys(v))return _(d,x,v,M);vo(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,v),x.return=d,d=x):(n(d,x),x=Kc(v,d.mode,M),x.return=d,d=x),a(d)):n(d,x)}return m}var Ps=e0(!0),t0=e0(!1),Al=tr(null),Rl=null,hs=null,cf=null;function uf(){cf=hs=Rl=null}function df(t){var e=Al.current;ct(Al),t._currentValue=e}function ud(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ms(t,e){Rl=t,cf=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(cf!==t)if(t={context:t,memoizedValue:e,next:null},hs===null){if(Rl===null)throw Error(ne(308));hs=t,Rl.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return e}var _r=null;function ff(t){_r===null?_r=[t]:_r.push(t)}function n0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ff(e)):(n.next=r.next,r.next=n),e.interleaved=n,xi(t,i)}function xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ni=!1;function hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,xi(t,n)}return r=i.interleaved,r===null?(e.next=e,ff(i)):(e.next=r.next,r.next=e),i.interleaved=e,xi(t,n)}function al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zd(t,n)}}function Uh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nl(t,e,n,i){var r=t.updateQueue;Ni=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,f=c=l=null,o=s;do{var h=o.lane,g=o.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=t,_=o;switch(h=e,g=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){p=y.call(g,p,h);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,h=typeof y=="function"?y.call(g,p,h):y,h==null)break e;p=pt({},p,h);break e;case 2:Ni=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else g={eventTime:g,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=g,l=p):f=f.next=g,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ar|=a,t.lanes=a,t.memoizedState=p}}function Ih(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Za={},ei=tr(Za),Ba=tr(Za),ja=tr(Za);function yr(t){if(t===Za)throw Error(ne(174));return t}function pf(t,e){switch(at(ja,e),at(Ba,t),at(ei,Za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gu(e,t)}ct(ei),at(ei,e)}function Ls(){ct(ei),ct(Ba),ct(ja)}function r0(t){yr(ja.current);var e=yr(ei.current),n=Gu(e,t.type);e!==n&&(at(Ba,t),at(ei,n))}function mf(t){Ba.current===t&&(ct(ei),ct(Ba))}var dt=tr(0);function Pl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gc=[];function gf(){for(var t=0;t<Gc.length;t++)Gc[t]._workInProgressVersionPrimary=null;Gc.length=0}var ol=yi.ReactCurrentDispatcher,Wc=yi.ReactCurrentBatchConfig,Cr=0,ft=null,wt=null,Pt=null,Ll=!1,Ea=!1,Ha=0,F_=0;function Ot(){throw Error(ne(321))}function xf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function vf(t,e,n,i,r,s){if(Cr=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ol.current=t===null||t.memoizedState===null?B_:j_,t=n(i,r),Ea){s=0;do{if(Ea=!1,Ha=0,25<=s)throw Error(ne(301));s+=1,Pt=wt=null,e.updateQueue=null,ol.current=H_,t=n(i,r)}while(Ea)}if(ol.current=Dl,e=wt!==null&&wt.next!==null,Cr=0,Pt=wt=ft=null,Ll=!1,e)throw Error(ne(300));return t}function _f(){var t=Ha!==0;return Ha=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?ft.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function An(){if(wt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Pt===null?ft.memoizedState:Pt.next;if(e!==null)Pt=e,wt=t;else{if(t===null)throw Error(ne(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Pt===null?ft.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Va(t,e){return typeof e=="function"?e(t):e}function Xc(t){var e=An(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((Cr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,ft.lanes|=f,Ar|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Hn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,Ar|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $c(t){var e=An(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Hn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function s0(){}function a0(t,e){var n=ft,i=An(),r=e(),s=!Hn(i.memoizedState,r);if(s&&(i.memoizedState=r,nn=!0),i=i.queue,yf(c0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,Ga(9,l0.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(ne(349));Cr&30||o0(n,e,r)}return r}function o0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function l0(t,e,n,i){e.value=n,e.getSnapshot=i,u0(e)&&d0(t)}function c0(t,e,n){return n(function(){u0(e)&&d0(t)})}function u0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function d0(t){var e=xi(t,1);e!==null&&Bn(e,t,1,-1)}function Fh(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:t},e.queue=t,t=t.dispatch=z_.bind(null,ft,t),[e.memoizedState,t]}function Ga(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function f0(){return An().memoizedState}function ll(t,e,n,i){var r=Xn();ft.flags|=t,r.memoizedState=Ga(1|e,n,void 0,i===void 0?null:i)}function ac(t,e,n,i){var r=An();i=i===void 0?null:i;var s=void 0;if(wt!==null){var a=wt.memoizedState;if(s=a.destroy,i!==null&&xf(i,a.deps)){r.memoizedState=Ga(e,n,s,i);return}}ft.flags|=t,r.memoizedState=Ga(1|e,n,s,i)}function Oh(t,e){return ll(8390656,8,t,e)}function yf(t,e){return ac(2048,8,t,e)}function h0(t,e){return ac(4,2,t,e)}function p0(t,e){return ac(4,4,t,e)}function m0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function g0(t,e,n){return n=n!=null?n.concat([t]):null,ac(4,4,m0.bind(null,e,t),n)}function Sf(){}function x0(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function v0(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function _0(t,e,n){return Cr&21?(Hn(n,e)||(n=Eg(),ft.lanes|=n,Ar|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function O_(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=Wc.transition;Wc.transition={};try{t(!1),e()}finally{et=n,Wc.transition=i}}function y0(){return An().memoizedState}function k_(t,e,n){var i=Vi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},S0(t))M0(e,n);else if(n=n0(t,e,n,i),n!==null){var r=Kt();Bn(n,t,i,r),w0(n,e,i)}}function z_(t,e,n){var i=Vi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(S0(t))M0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Hn(o,a)){var l=e.interleaved;l===null?(r.next=r,ff(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=n0(t,e,r,i),n!==null&&(r=Kt(),Bn(n,t,i,r),w0(n,e,i))}}function S0(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function M0(t,e){Ea=Ll=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function w0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zd(t,n)}}var Dl={readContext:Cn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},B_={readContext:Cn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:Oh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ll(4194308,4,m0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return ll(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Xn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=k_.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:Fh,useDebugValue:Sf,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=Fh(!1),e=t[0];return t=O_.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=Xn();if(ut){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Lt===null)throw Error(ne(349));Cr&30||o0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Oh(c0.bind(null,i,s,t),[t]),i.flags|=2048,Ga(9,l0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=Lt.identifierPrefix;if(ut){var n=fi,i=di;n=(i&~(1<<32-zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=F_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},j_={readContext:Cn,useCallback:x0,useContext:Cn,useEffect:yf,useImperativeHandle:g0,useInsertionEffect:h0,useLayoutEffect:p0,useMemo:v0,useReducer:Xc,useRef:f0,useState:function(){return Xc(Va)},useDebugValue:Sf,useDeferredValue:function(t){var e=An();return _0(e,wt.memoizedState,t)},useTransition:function(){var t=Xc(Va)[0],e=An().memoizedState;return[t,e]},useMutableSource:s0,useSyncExternalStore:a0,useId:y0,unstable_isNewReconciler:!1},H_={readContext:Cn,useCallback:x0,useContext:Cn,useEffect:yf,useImperativeHandle:g0,useInsertionEffect:h0,useLayoutEffect:p0,useMemo:v0,useReducer:$c,useRef:f0,useState:function(){return $c(Va)},useDebugValue:Sf,useDeferredValue:function(t){var e=An();return wt===null?e.memoizedState=t:_0(e,wt.memoizedState,t)},useTransition:function(){var t=$c(Va)[0],e=An().memoizedState;return[t,e]},useMutableSource:s0,useSyncExternalStore:a0,useId:y0,unstable_isNewReconciler:!1};function Dn(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function dd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var oc={isMounted:function(t){return(t=t._reactInternals)?Lr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=Vi(t),s=pi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ji(t,s,r),e!==null&&(Bn(e,t,r,i),al(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=Vi(t),s=pi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ji(t,s,r),e!==null&&(Bn(e,t,r,i),al(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=Vi(t),r=pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ji(t,r,i),e!==null&&(Bn(e,t,i,n),al(e,t,i))}};function kh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Fa(n,i)||!Fa(r,s):!0}function E0(t,e,n){var i=!1,r=qi,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=sn(e)?br:Wt.current,i=e.contextTypes,s=(i=i!=null)?Rs(t,r):qi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=oc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function zh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&oc.enqueueReplaceState(e,e.state,null)}function fd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},hf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=sn(e)?br:Wt.current,r.context=Rs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(dd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&oc.enqueueReplaceState(r,r.state,null),Nl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ds(t,e){try{var n="",i=e;do n+=gv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Yc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var V_=typeof WeakMap=="function"?WeakMap:Map;function b0(t,e,n){n=pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Il||(Il=!0,wd=i),hd(t,e)},n}function T0(t,e,n){n=pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){hd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hd(t,e),typeof i!="function"&&(Hi===null?Hi=new Set([this]):Hi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Bh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new V_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=iy.bind(null,t,e,n),e.then(t,t))}function jh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Hh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pi(-1,1),e.tag=2,ji(n,e,1))),n.lanes|=1),t)}var G_=yi.ReactCurrentOwner,nn=!1;function qt(t,e,n,i){e.child=t===null?t0(e,null,n,i):Ps(e,t.child,n,i)}function Vh(t,e,n,i,r){n=n.render;var s=e.ref;return Ms(e,r),i=vf(t,e,n,i,s,r),n=_f(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(ut&&n&&af(e),e.flags|=1,qt(t,e,i,r),e.child)}function Gh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Rf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,C0(t,e,s,i,r)):(t=fl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fa,n(a,i)&&t.ref===e.ref)return vi(t,e,r)}return e.flags|=1,t=Gi(s,i),t.ref=e.ref,t.return=e,e.child=t}function C0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Fa(s,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,vi(t,e,r)}return pd(t,e,n,i,r)}function A0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(ms,fn),fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(ms,fn),fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,at(ms,fn),fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,at(ms,fn),fn|=i;return qt(t,e,r,n),e.child}function R0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pd(t,e,n,i,r){var s=sn(n)?br:Wt.current;return s=Rs(e,s),Ms(e,r),n=vf(t,e,n,i,s,r),i=_f(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(ut&&i&&af(e),e.flags|=1,qt(t,e,n,r),e.child)}function Wh(t,e,n,i,r){if(sn(n)){var s=!0;bl(e)}else s=!1;if(Ms(e,r),e.stateNode===null)cl(t,e),E0(e,n,i),fd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Cn(c):(c=sn(n)?br:Wt.current,c=Rs(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&zh(e,a,i,c),Ni=!1;var h=e.memoizedState;a.state=h,Nl(e,i,a,r),l=e.memoizedState,o!==i||h!==l||rn.current||Ni?(typeof f=="function"&&(dd(e,n,f,i),l=e.memoizedState),(o=Ni||kh(e,n,o,i,h,l,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,i0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Dn(e.type,o),a.props=c,p=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=sn(n)?br:Wt.current,l=Rs(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||h!==l)&&zh(e,a,i,l),Ni=!1,h=e.memoizedState,a.state=h,Nl(e,i,a,r);var y=e.memoizedState;o!==p||h!==y||rn.current||Ni?(typeof g=="function"&&(dd(e,n,g,i),y=e.memoizedState),(c=Ni||kh(e,n,c,i,h,y,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,y,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),a.props=i,a.state=y,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return md(t,e,n,i,s,r)}function md(t,e,n,i,r,s){R0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Nh(e,n,!1),vi(t,e,s);i=e.stateNode,G_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ps(e,t.child,null,s),e.child=Ps(e,null,o,s)):qt(t,e,o,s),e.memoizedState=i.state,r&&Nh(e,n,!0),e.child}function N0(t){var e=t.stateNode;e.pendingContext?Rh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rh(t,e.context,!1),pf(t,e.containerInfo)}function Xh(t,e,n,i,r){return Ns(),lf(r),e.flags|=256,qt(t,e,n,i),e.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function xd(t){return{baseLanes:t,cachePool:null,transitions:null}}function P0(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(dt,r&1),t===null)return cd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=uc(a,i,0,null),t=Er(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xd(n),e.memoizedState=gd,t):Mf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return W_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Gi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Gi(o,s):(s=Er(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?xd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=gd,i}return s=t.child,t=s.sibling,i=Gi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Mf(t,e){return e=uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _o(t,e,n,i){return i!==null&&lf(i),Ps(e,t.child,null,n),t=Mf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function W_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Yc(Error(ne(422))),_o(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=uc({mode:"visible",children:i.children},r,0,null),s=Er(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ps(e,t.child,null,a),e.child.memoizedState=xd(a),e.memoizedState=gd,s);if(!(e.mode&1))return _o(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=Yc(s,i,void 0),_o(t,e,a,i)}if(o=(a&t.childLanes)!==0,nn||o){if(i=Lt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,xi(t,r),Bn(i,t,r,-1))}return Af(),i=Yc(Error(ne(421))),_o(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ry.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=Bi(r.nextSibling),pn=e,ut=!0,Fn=null,t!==null&&(Sn[Mn++]=di,Sn[Mn++]=fi,Sn[Mn++]=Tr,di=t.id,fi=t.overflow,Tr=e),e=Mf(e,i.children),e.flags|=4096,e)}function $h(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ud(t.return,e,n)}function qc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function L0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(qt(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$h(t,n,e);else if(t.tag===19)$h(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Pl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),qc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Pl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}qc(e,!0,n,null,s);break;case"together":qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ar|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Gi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function X_(t,e,n){switch(e.tag){case 3:N0(e),Ns();break;case 5:r0(e);break;case 1:sn(e.type)&&bl(e);break;case 4:pf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(Al,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?P0(t,e,n):(at(dt,dt.current&1),t=vi(t,e,n),t!==null?t.sibling:null);at(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return L0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,A0(t,e,n)}return vi(t,e,n)}var D0,vd,U0,I0;D0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vd=function(){};U0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,yr(ei.current);var s=null;switch(n){case"input":r=Bu(t,r),i=Bu(t,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=Vu(t,r),i=Vu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=wl)}Wu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ra.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ra.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ot("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};I0=function(t,e,n,i){n!==i&&(e.flags|=4)};function ea(t,e){if(!ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function $_(t,e,n){var i=e.pendingProps;switch(of(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return sn(e.type)&&El(),kt(e),null;case 3:return i=e.stateNode,Ls(),ct(rn),ct(Wt),gf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(xo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(Td(Fn),Fn=null))),vd(t,e),kt(e),null;case 5:mf(e);var r=yr(ja.current);if(n=e.type,t!==null&&e.stateNode!=null)U0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return kt(e),null}if(t=yr(ei.current),xo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Yn]=e,i[za]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<ma.length;r++)ot(ma[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":nh(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":rh(i,s),ot("invalid",i)}Wu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&go(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&go(i.textContent,o,t),r=["children",""+o]):Ra.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ot("scroll",i)}switch(n){case"input":oo(i),ih(i,s,!0);break;case"textarea":oo(i),sh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=wl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Yn]=e,t[za]=i,D0(t,e,!1,!1),e.stateNode=t;e:{switch(a=Xu(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<ma.length;r++)ot(ma[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":nh(t,i),r=Bu(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":rh(t,i),r=Vu(t,i),ot("invalid",t);break;default:r=i}Wu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?fg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ug(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Na(t,l):typeof l=="number"&&Na(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ra.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&Wd(t,s,l,a))}switch(n){case"input":oo(t),ih(t,i,!1);break;case"textarea":oo(t),sh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Yi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?vs(t,!!i.multiple,s,!1):i.defaultValue!=null&&vs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=wl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)I0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=yr(ja.current),yr(ei.current),xo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Yn]=e,(s=i.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:go(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&go(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Yn]=e,e.stateNode=i}return kt(e),null;case 13:if(ct(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&hn!==null&&e.mode&1&&!(e.flags&128))Jg(),Ns(),e.flags|=98560,s=!1;else if(s=xo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Yn]=e}else Ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else Fn!==null&&(Td(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?bt===0&&(bt=3):Af())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return Ls(),vd(t,e),t===null&&Oa(e.stateNode.containerInfo),kt(e),null;case 10:return df(e.type._context),kt(e),null;case 17:return sn(e.type)&&El(),kt(e),null;case 19:if(ct(dt),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ea(s,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Pl(t),a!==null){for(e.flags|=128,ea(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>Us&&(e.flags|=128,i=!0,ea(s,!1),e.lanes=4194304)}else{if(!i)if(t=Pl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ea(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ut)return kt(e),null}else 2*yt()-s.renderingStartTime>Us&&n!==1073741824&&(e.flags|=128,i=!0,ea(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=dt.current,at(dt,i?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return Cf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?fn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function Y_(t,e){switch(of(e),e.tag){case 1:return sn(e.type)&&El(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ls(),ct(rn),ct(Wt),gf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mf(e),null;case 13:if(ct(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(dt),null;case 4:return Ls(),null;case 10:return df(e.type._context),null;case 22:case 23:return Cf(),null;case 24:return null;default:return null}}var yo=!1,Ht=!1,q_=typeof WeakSet=="function"?WeakSet:Set,_e=null;function ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function _d(t,e,n){try{n()}catch(i){xt(t,e,i)}}var Yh=!1;function K_(t,e){if(nd=yl,t=Bg(),sf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,p=t,h=null;t:for(;;){for(var g;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(g=p.firstChild)!==null;)h=p,p=g;for(;;){if(p===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++f===i&&(l=a),(g=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(id={focusedElem:t,selectionRange:n},yl=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,m=y.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:Dn(e.type,_),m);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(M){xt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return y=Yh,Yh=!1,y}function ba(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&_d(e,n,s)}r=r.next}while(r!==i)}}function lc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function yd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function F0(t){var e=t.alternate;e!==null&&(t.alternate=null,F0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[za],delete e[ad],delete e[L_],delete e[D_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function O0(t){return t.tag===5||t.tag===3||t.tag===4}function qh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||O0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wl));else if(i!==4&&(t=t.child,t!==null))for(Sd(t,e,n),t=t.sibling;t!==null;)Sd(t,e,n),t=t.sibling}function Md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}var Dt=null,Un=!1;function Mi(t,e,n){for(n=n.child;n!==null;)k0(t,e,n),n=n.sibling}function k0(t,e,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(ec,n)}catch{}switch(n.tag){case 5:Ht||ps(n,e);case 6:var i=Dt,r=Un;Dt=null,Mi(t,e,n),Dt=i,Un=r,Dt!==null&&(Un?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(Un?(t=Dt,n=n.stateNode,t.nodeType===8?Hc(t.parentNode,n):t.nodeType===1&&Hc(t,n),Ua(t)):Hc(Dt,n.stateNode));break;case 4:i=Dt,r=Un,Dt=n.stateNode.containerInfo,Un=!0,Mi(t,e,n),Dt=i,Un=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&_d(n,e,a),r=r.next}while(r!==i)}Mi(t,e,n);break;case 1:if(!Ht&&(ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){xt(n,e,o)}Mi(t,e,n);break;case 21:Mi(t,e,n);break;case 22:n.mode&1?(Ht=(i=Ht)||n.memoizedState!==null,Mi(t,e,n),Ht=i):Mi(t,e,n);break;default:Mi(t,e,n)}}function Kh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new q_),e.forEach(function(i){var r=sy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Rn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Dt=o.stateNode,Un=!1;break e;case 3:Dt=o.stateNode.containerInfo,Un=!0;break e;case 4:Dt=o.stateNode.containerInfo,Un=!0;break e}o=o.return}if(Dt===null)throw Error(ne(160));k0(s,a,r),Dt=null,Un=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){xt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)z0(e,t),e=e.sibling}function z0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rn(e,t),Wn(t),i&4){try{ba(3,t,t.return),lc(3,t)}catch(_){xt(t,t.return,_)}try{ba(5,t,t.return)}catch(_){xt(t,t.return,_)}}break;case 1:Rn(e,t),Wn(t),i&512&&n!==null&&ps(n,n.return);break;case 5:if(Rn(e,t),Wn(t),i&512&&n!==null&&ps(n,n.return),t.flags&32){var r=t.stateNode;try{Na(r,"")}catch(_){xt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&og(r,s),Xu(o,a);var c=Xu(o,s);for(a=0;a<l.length;a+=2){var f=l[a],p=l[a+1];f==="style"?fg(r,p):f==="dangerouslySetInnerHTML"?ug(r,p):f==="children"?Na(r,p):Wd(r,f,p,c)}switch(o){case"input":ju(r,s);break;case"textarea":lg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?vs(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?vs(r,!!s.multiple,s.defaultValue,!0):vs(r,!!s.multiple,s.multiple?[]:"",!1))}r[za]=s}catch(_){xt(t,t.return,_)}}break;case 6:if(Rn(e,t),Wn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){xt(t,t.return,_)}}break;case 3:if(Rn(e,t),Wn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ua(e.containerInfo)}catch(_){xt(t,t.return,_)}break;case 4:Rn(e,t),Wn(t);break;case 13:Rn(e,t),Wn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(bf=yt())),i&4&&Kh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(c=Ht)||f,Rn(e,t),Ht=c):Rn(e,t),Wn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(_e=t,f=t.child;f!==null;){for(p=_e=f;_e!==null;){switch(h=_e,g=h.child,h.tag){case 0:case 11:case 14:case 15:ba(4,h,h.return);break;case 1:ps(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){xt(i,n,_)}}break;case 5:ps(h,h.return);break;case 22:if(h.memoizedState!==null){Qh(p);continue}}g!==null?(g.return=h,_e=g):Qh(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=dg("display",a))}catch(_){xt(t,t.return,_)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(_){xt(t,t.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Rn(e,t),Wn(t),i&4&&Kh(t);break;case 21:break;default:Rn(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(O0(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Na(r,""),i.flags&=-33);var s=qh(t);Md(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=qh(t);Sd(t,o,a);break;default:throw Error(ne(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Z_(t,e,n){_e=t,B0(t)}function B0(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||yo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Ht;o=yo;var c=Ht;if(yo=a,(Ht=l)&&!c)for(_e=r;_e!==null;)a=_e,l=a.child,a.tag===22&&a.memoizedState!==null?Jh(r):l!==null?(l.return=a,_e=l):Jh(r);for(;s!==null;)_e=s,B0(s),s=s.sibling;_e=r,yo=o,Ht=c}Zh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):Zh(t)}}function Zh(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||lc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ht)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Dn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ih(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ih(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Ua(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Ht||e.flags&512&&yd(e)}catch(h){xt(e,e.return,h)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Qh(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Jh(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{lc(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{yd(e)}catch(l){xt(e,s,l)}break;case 5:var a=e.return;try{yd(e)}catch(l){xt(e,a,l)}}}catch(l){xt(e,e.return,l)}if(e===t){_e=null;break}var o=e.sibling;if(o!==null){o.return=e.return,_e=o;break}_e=e.return}}var Q_=Math.ceil,Ul=yi.ReactCurrentDispatcher,wf=yi.ReactCurrentOwner,Tn=yi.ReactCurrentBatchConfig,Ye=0,Lt=null,Mt=null,It=0,fn=0,ms=tr(0),bt=0,Wa=null,Ar=0,cc=0,Ef=0,Ta=null,en=null,bf=0,Us=1/0,li=null,Il=!1,wd=null,Hi=null,So=!1,Ii=null,Fl=0,Ca=0,Ed=null,ul=-1,dl=0;function Kt(){return Ye&6?yt():ul!==-1?ul:ul=yt()}function Vi(t){return t.mode&1?Ye&2&&It!==0?It&-It:I_.transition!==null?(dl===0&&(dl=Eg()),dl):(t=et,t!==0||(t=window.event,t=t===void 0?16:Pg(t.type)),t):1}function Bn(t,e,n,i){if(50<Ca)throw Ca=0,Ed=null,Error(ne(185));Ya(t,n,i),(!(Ye&2)||t!==Lt)&&(t===Lt&&(!(Ye&2)&&(cc|=n),bt===4&&Li(t,It)),an(t,i),n===1&&Ye===0&&!(e.mode&1)&&(Us=yt()+500,sc&&nr()))}function an(t,e){var n=t.callbackNode;Iv(t,e);var i=_l(t,t===Lt?It:0);if(i===0)n!==null&&lh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&lh(n),e===1)t.tag===0?U_(ep.bind(null,t)):Kg(ep.bind(null,t)),N_(function(){!(Ye&6)&&nr()}),n=null;else{switch(bg(i)){case 1:n=Kd;break;case 4:n=Mg;break;case 16:n=vl;break;case 536870912:n=wg;break;default:n=vl}n=Y0(n,j0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function j0(t,e){if(ul=-1,dl=0,Ye&6)throw Error(ne(327));var n=t.callbackNode;if(ws()&&t.callbackNode!==n)return null;var i=_l(t,t===Lt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ol(t,i);else{e=i;var r=Ye;Ye|=2;var s=V0();(Lt!==t||It!==e)&&(li=null,Us=yt()+500,wr(t,e));do try{ty();break}catch(o){H0(t,o)}while(!0);uf(),Ul.current=s,Ye=r,Mt!==null?e=0:(Lt=null,It=0,e=bt)}if(e!==0){if(e===2&&(r=Zu(t),r!==0&&(i=r,e=bd(t,r))),e===1)throw n=Wa,wr(t,0),Li(t,i),an(t,yt()),n;if(e===6)Li(t,i);else{if(r=t.current.alternate,!(i&30)&&!J_(r)&&(e=Ol(t,i),e===2&&(s=Zu(t),s!==0&&(i=s,e=bd(t,s))),e===1))throw n=Wa,wr(t,0),Li(t,i),an(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:hr(t,en,li);break;case 3:if(Li(t,i),(i&130023424)===i&&(e=bf+500-yt(),10<e)){if(_l(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=sd(hr.bind(null,t,en,li),e);break}hr(t,en,li);break;case 4:if(Li(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-zn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Q_(i/1960))-i,10<i){t.timeoutHandle=sd(hr.bind(null,t,en,li),i);break}hr(t,en,li);break;case 5:hr(t,en,li);break;default:throw Error(ne(329))}}}return an(t,yt()),t.callbackNode===n?j0.bind(null,t):null}function bd(t,e){var n=Ta;return t.current.memoizedState.isDehydrated&&(wr(t,e).flags|=256),t=Ol(t,e),t!==2&&(e=en,en=n,e!==null&&Td(e)),t}function Td(t){en===null?en=t:en.push.apply(en,t)}function J_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Hn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Li(t,e){for(e&=~Ef,e&=~cc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),i=1<<n;t[n]=-1,e&=~i}}function ep(t){if(Ye&6)throw Error(ne(327));ws();var e=_l(t,0);if(!(e&1))return an(t,yt()),null;var n=Ol(t,e);if(t.tag!==0&&n===2){var i=Zu(t);i!==0&&(e=i,n=bd(t,i))}if(n===1)throw n=Wa,wr(t,0),Li(t,e),an(t,yt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hr(t,en,li),an(t,yt()),null}function Tf(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(Us=yt()+500,sc&&nr())}}function Rr(t){Ii!==null&&Ii.tag===0&&!(Ye&6)&&ws();var e=Ye;Ye|=1;var n=Tn.transition,i=et;try{if(Tn.transition=null,et=1,t)return t()}finally{et=i,Tn.transition=n,Ye=e,!(Ye&6)&&nr()}}function Cf(){fn=ms.current,ct(ms)}function wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,R_(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(of(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&El();break;case 3:Ls(),ct(rn),ct(Wt),gf();break;case 5:mf(i);break;case 4:Ls();break;case 13:ct(dt);break;case 19:ct(dt);break;case 10:df(i.type._context);break;case 22:case 23:Cf()}n=n.return}if(Lt=t,Mt=t=Gi(t.current,null),It=fn=e,bt=0,Wa=null,Ef=cc=Ar=0,en=Ta=null,_r!==null){for(e=0;e<_r.length;e++)if(n=_r[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}_r=null}return t}function H0(t,e){do{var n=Mt;try{if(uf(),ol.current=Dl,Ll){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ll=!1}if(Cr=0,Pt=wt=ft=null,Ea=!1,Ha=0,wf.current=null,n===null||n.return===null){bt=1,Wa=e,Mt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=It,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=jh(a);if(g!==null){g.flags&=-257,Hh(g,a,o,s,e),g.mode&1&&Bh(s,c,e),e=g,l=c;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){Bh(s,c,e),Af();break e}l=Error(ne(426))}}else if(ut&&o.mode&1){var m=jh(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Hh(m,a,o,s,e),lf(Ds(l,o));break e}}s=l=Ds(l,o),bt!==4&&(bt=2),Ta===null?Ta=[s]:Ta.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=b0(s,l,e);Uh(s,d);break e;case 1:o=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Hi===null||!Hi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=T0(s,o,e);Uh(s,M);break e}}s=s.return}while(s!==null)}W0(n)}catch(R){e=R,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function V0(){var t=Ul.current;return Ul.current=Dl,t===null?Dl:t}function Af(){(bt===0||bt===3||bt===2)&&(bt=4),Lt===null||!(Ar&268435455)&&!(cc&268435455)||Li(Lt,It)}function Ol(t,e){var n=Ye;Ye|=2;var i=V0();(Lt!==t||It!==e)&&(li=null,wr(t,e));do try{ey();break}catch(r){H0(t,r)}while(!0);if(uf(),Ye=n,Ul.current=i,Mt!==null)throw Error(ne(261));return Lt=null,It=0,bt}function ey(){for(;Mt!==null;)G0(Mt)}function ty(){for(;Mt!==null&&!Tv();)G0(Mt)}function G0(t){var e=$0(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?W0(t):Mt=e,wf.current=null}function W0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Y_(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,Mt=null;return}}else if(n=$_(n,e,fn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);bt===0&&(bt=5)}function hr(t,e,n){var i=et,r=Tn.transition;try{Tn.transition=null,et=1,ny(t,e,n,i)}finally{Tn.transition=r,et=i}return null}function ny(t,e,n,i){do ws();while(Ii!==null);if(Ye&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Fv(t,s),t===Lt&&(Mt=Lt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||So||(So=!0,Y0(vl,function(){return ws(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Tn.transition,Tn.transition=null;var a=et;et=1;var o=Ye;Ye|=4,wf.current=null,K_(t,n),z0(n,t),M_(id),yl=!!nd,id=nd=null,t.current=n,Z_(n),Cv(),Ye=o,et=a,Tn.transition=s}else t.current=n;if(So&&(So=!1,Ii=t,Fl=r),s=t.pendingLanes,s===0&&(Hi=null),Nv(n.stateNode),an(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Il)throw Il=!1,t=wd,wd=null,t;return Fl&1&&t.tag!==0&&ws(),s=t.pendingLanes,s&1?t===Ed?Ca++:(Ca=0,Ed=t):Ca=0,nr(),null}function ws(){if(Ii!==null){var t=bg(Fl),e=Tn.transition,n=et;try{if(Tn.transition=null,et=16>t?16:t,Ii===null)var i=!1;else{if(t=Ii,Ii=null,Fl=0,Ye&6)throw Error(ne(331));var r=Ye;for(Ye|=4,_e=t.current;_e!==null;){var s=_e,a=s.child;if(_e.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(_e=c;_e!==null;){var f=_e;switch(f.tag){case 0:case 11:case 15:ba(8,f,s)}var p=f.child;if(p!==null)p.return=f,_e=p;else for(;_e!==null;){f=_e;var h=f.sibling,g=f.return;if(F0(f),f===c){_e=null;break}if(h!==null){h.return=g,_e=h;break}_e=g}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}_e=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,_e=a;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ba(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,_e=d;break e}_e=s.return}}var x=t.current;for(_e=x;_e!==null;){a=_e;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,_e=v;else e:for(a=x;_e!==null;){if(o=_e,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:lc(9,o)}}catch(R){xt(o,o.return,R)}if(o===a){_e=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,_e=M;break e}_e=o.return}}if(Ye=r,nr(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(ec,t)}catch{}i=!0}return i}finally{et=n,Tn.transition=e}}return!1}function tp(t,e,n){e=Ds(n,e),e=b0(t,e,1),t=ji(t,e,1),e=Kt(),t!==null&&(Ya(t,1,e),an(t,e))}function xt(t,e,n){if(t.tag===3)tp(t,t,n);else for(;e!==null;){if(e.tag===3){tp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Hi===null||!Hi.has(i))){t=Ds(n,t),t=T0(e,t,1),e=ji(e,t,1),t=Kt(),e!==null&&(Ya(e,1,t),an(e,t));break}}e=e.return}}function iy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(It&n)===n&&(bt===4||bt===3&&(It&130023424)===It&&500>yt()-bf?wr(t,0):Ef|=n),an(t,e)}function X0(t,e){e===0&&(t.mode&1?(e=uo,uo<<=1,!(uo&130023424)&&(uo=4194304)):e=1);var n=Kt();t=xi(t,e),t!==null&&(Ya(t,e,n),an(t,n))}function ry(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),X0(t,n)}function sy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),X0(t,n)}var $0;$0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,X_(t,e,n);nn=!!(t.flags&131072)}else nn=!1,ut&&e.flags&1048576&&Zg(e,Cl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;cl(t,e),t=e.pendingProps;var r=Rs(e,Wt.current);Ms(e,n),r=vf(null,e,i,t,r,n);var s=_f();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(s=!0,bl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,hf(e),r.updater=oc,e.stateNode=r,r._reactInternals=e,fd(e,i,t,n),e=md(null,e,i,!0,s,n)):(e.tag=0,ut&&s&&af(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(cl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=oy(i),t=Dn(i,t),r){case 0:e=pd(null,e,i,t,n);break e;case 1:e=Wh(null,e,i,t,n);break e;case 11:e=Vh(null,e,i,t,n);break e;case 14:e=Gh(null,e,i,Dn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),pd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Wh(t,e,i,r,n);case 3:e:{if(N0(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,i0(t,e),Nl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ds(Error(ne(423)),e),e=Xh(t,e,i,n,r);break e}else if(i!==r){r=Ds(Error(ne(424)),e),e=Xh(t,e,i,n,r);break e}else for(hn=Bi(e.stateNode.containerInfo.firstChild),pn=e,ut=!0,Fn=null,n=t0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ns(),i===r){e=vi(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return r0(e),t===null&&cd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,rd(i,r)?a=null:s!==null&&rd(i,s)&&(e.flags|=32),R0(t,e),qt(t,e,a,n),e.child;case 6:return t===null&&cd(e),null;case 13:return P0(t,e,n);case 4:return pf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ps(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Vh(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,at(Al,i._currentValue),i._currentValue=a,s!==null)if(Hn(s.value,a)){if(s.children===r.children&&!rn.current){e=vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=pi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ud(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),ud(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ms(e,n),r=Cn(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=Dn(i,e.pendingProps),r=Dn(i.type,r),Gh(t,e,i,r,n);case 15:return C0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),cl(t,e),e.tag=1,sn(i)?(t=!0,bl(e)):t=!1,Ms(e,n),E0(e,i,r),fd(e,i,r,n),md(null,e,i,!0,t,n);case 19:return L0(t,e,n);case 22:return A0(t,e,n)}throw Error(ne(156,e.tag))};function Y0(t,e){return Sg(t,e)}function ay(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,e,n,i){return new ay(t,e,n,i)}function Rf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oy(t){if(typeof t=="function")return Rf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$d)return 11;if(t===Yd)return 14}return 2}function Gi(t,e){var n=t.alternate;return n===null?(n=En(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function fl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Rf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ss:return Er(n.children,r,s,e);case Xd:a=8,r|=8;break;case Fu:return t=En(12,n,e,r|2),t.elementType=Fu,t.lanes=s,t;case Ou:return t=En(13,n,e,r),t.elementType=Ou,t.lanes=s,t;case ku:return t=En(19,n,e,r),t.elementType=ku,t.lanes=s,t;case rg:return uc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ng:a=10;break e;case ig:a=9;break e;case $d:a=11;break e;case Yd:a=14;break e;case Ri:a=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=En(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Er(t,e,n,i){return t=En(7,t,i,e),t.lanes=n,t}function uc(t,e,n,i){return t=En(22,t,i,e),t.elementType=rg,t.lanes=n,t.stateNode={isHidden:!1},t}function Kc(t,e,n){return t=En(6,t,null,e),t.lanes=n,t}function Zc(t,e,n){return e=En(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ly(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pc(0),this.expirationTimes=Pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Nf(t,e,n,i,r,s,a,o,l){return t=new ly(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=En(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hf(s),t}function cy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function q0(t){if(!t)return qi;t=t._reactInternals;e:{if(Lr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(sn(n))return qg(t,n,e)}return e}function K0(t,e,n,i,r,s,a,o,l){return t=Nf(n,i,!0,t,r,s,a,o,l),t.context=q0(null),n=t.current,i=Kt(),r=Vi(n),s=pi(i,r),s.callback=e??null,ji(n,s,r),t.current.lanes=r,Ya(t,r,i),an(t,i),t}function dc(t,e,n,i){var r=e.current,s=Kt(),a=Vi(r);return n=q0(n),e.context===null?e.context=n:e.pendingContext=n,e=pi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ji(r,e,a),t!==null&&(Bn(t,r,a,s),al(t,r,a)),a}function kl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function np(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pf(t,e){np(t,e),(t=t.alternate)&&np(t,e)}function uy(){return null}var Z0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lf(t){this._internalRoot=t}fc.prototype.render=Lf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));dc(t,e,null,null)};fc.prototype.unmount=Lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rr(function(){dc(null,t,null,null)}),e[gi]=null}};function fc(t){this._internalRoot=t}fc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ag();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pi.length&&e!==0&&e<Pi[n].priority;n++);Pi.splice(n,0,t),n===0&&Ng(t)}};function Df(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ip(){}function dy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=kl(a);s.call(c)}}var a=K0(e,i,t,0,null,!1,!1,"",ip);return t._reactRootContainer=a,t[gi]=a.current,Oa(t.nodeType===8?t.parentNode:t),Rr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=kl(l);o.call(c)}}var l=Nf(t,0,!1,null,null,!1,!1,"",ip);return t._reactRootContainer=l,t[gi]=l.current,Oa(t.nodeType===8?t.parentNode:t),Rr(function(){dc(e,l,n,i)}),l}function pc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=kl(a);o.call(l)}}dc(e,a,t,r)}else a=dy(n,e,t,r,i);return kl(a)}Tg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=pa(e.pendingLanes);n!==0&&(Zd(e,n|1),an(e,yt()),!(Ye&6)&&(Us=yt()+500,nr()))}break;case 13:Rr(function(){var i=xi(t,1);if(i!==null){var r=Kt();Bn(i,t,1,r)}}),Pf(t,1)}};Qd=function(t){if(t.tag===13){var e=xi(t,134217728);if(e!==null){var n=Kt();Bn(e,t,134217728,n)}Pf(t,134217728)}};Cg=function(t){if(t.tag===13){var e=Vi(t),n=xi(t,e);if(n!==null){var i=Kt();Bn(n,t,e,i)}Pf(t,e)}};Ag=function(){return et};Rg=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};Yu=function(t,e,n){switch(e){case"input":if(ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=rc(i);if(!r)throw Error(ne(90));ag(i),ju(i,r)}}}break;case"textarea":lg(t,n);break;case"select":e=n.value,e!=null&&vs(t,!!n.multiple,e,!1)}};mg=Tf;gg=Rr;var fy={usingClientEntryPoint:!1,Events:[Ka,cs,rc,hg,pg,Tf]},ta={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hy={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_g(t),t===null?null:t.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||uy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mo.isDisabled&&Mo.supportsFiber)try{ec=Mo.inject(hy),Jn=Mo}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fy;xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Df(e))throw Error(ne(200));return cy(t,e,null,n)};xn.createRoot=function(t,e){if(!Df(t))throw Error(ne(299));var n=!1,i="",r=Z0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Nf(t,1,!1,null,null,n,!1,i,r),t[gi]=e.current,Oa(t.nodeType===8?t.parentNode:t),new Lf(e)};xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=_g(e),t=t===null?null:t.stateNode,t};xn.flushSync=function(t){return Rr(t)};xn.hydrate=function(t,e,n){if(!hc(e))throw Error(ne(200));return pc(null,t,e,!0,n)};xn.hydrateRoot=function(t,e,n){if(!Df(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Z0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=K0(e,null,t,1,n??null,r,!1,s,a),t[gi]=e.current,Oa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new fc(e)};xn.render=function(t,e,n){if(!hc(e))throw Error(ne(200));return pc(null,t,e,!1,n)};xn.unmountComponentAtNode=function(t){if(!hc(t))throw Error(ne(40));return t._reactRootContainer?(Rr(function(){pc(null,null,t,!1,function(){t._reactRootContainer=null,t[gi]=null})}),!0):!1};xn.unstable_batchedUpdates=Tf;xn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!hc(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return pc(t,e,n,!1,i)};xn.version="18.3.1-next-f1338f8080-20240426";function Q0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Q0)}catch(t){console.error(t)}}Q0(),Qm.exports=xn;var py=Qm.exports,rp=py;Uu.createRoot=rp.createRoot,Uu.hydrateRoot=rp.hydrateRoot;const my={},sp=t=>{let e;const n=new Set,i=(f,p)=>{const h=typeof f=="function"?f(e):f;if(!Object.is(h,e)){const g=e;e=p??(typeof h!="object"||h===null)?h:Object.assign({},e,h),n.forEach(y=>y(e,g))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(my?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(i,r,l);return l},gy=t=>t?sp(t):sp;var J0={exports:{}},ex={},tx={exports:{}},nx={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Is=ze;function xy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vy=typeof Object.is=="function"?Object.is:xy,_y=Is.useState,yy=Is.useEffect,Sy=Is.useLayoutEffect,My=Is.useDebugValue;function wy(t,e){var n=e(),i=_y({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return Sy(function(){r.value=n,r.getSnapshot=e,Qc(r)&&s({inst:r})},[t,n,e]),yy(function(){return Qc(r)&&s({inst:r}),t(function(){Qc(r)&&s({inst:r})})},[t]),My(n),n}function Qc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vy(t,n)}catch{return!0}}function Ey(t,e){return e()}var by=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Ey:wy;nx.useSyncExternalStore=Is.useSyncExternalStore!==void 0?Is.useSyncExternalStore:by;tx.exports=nx;var Ty=tx.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mc=ze,Cy=Ty;function Ay(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ry=typeof Object.is=="function"?Object.is:Ay,Ny=Cy.useSyncExternalStore,Py=mc.useRef,Ly=mc.useEffect,Dy=mc.useMemo,Uy=mc.useDebugValue;ex.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=Py(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=Dy(function(){function l(g){if(!c){if(c=!0,f=g,g=i(g),r!==void 0&&a.hasValue){var y=a.value;if(r(y,g))return p=y}return p=g}if(y=p,Ry(f,g))return y;var _=i(g);return r!==void 0&&r(y,_)?(f=g,y):(f=g,p=_)}var c=!1,f,p,h=n===void 0?null:n;return[function(){return l(e())},h===null?void 0:function(){return l(h())}]},[e,n,i,r]);var o=Ny(t,s[0],s[1]);return Ly(function(){a.hasValue=!0,a.value=o},[o]),Uy(o),o};J0.exports=ex;var Iy=J0.exports;const Fy=zm(Iy),ix={},{useDebugValue:Oy}=Km,{useSyncExternalStoreWithSelector:ky}=Fy;let ap=!1;const zy=t=>t;function By(t,e=zy,n){(ix?"production":void 0)!=="production"&&n&&!ap&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),ap=!0);const i=ky(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return Oy(i),i}const op=t=>{(ix?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?gy(t):t,n=(i,r)=>By(e,i,r);return Object.assign(n,e),n},jy=t=>t?op(t):op,Hy={};function rx(t,e){let n;try{n=t()}catch{return}return{getItem:r=>{var s;const a=l=>l===null?null:JSON.parse(l,void 0),o=(s=n.getItem(r))!=null?s:null;return o instanceof Promise?o.then(a):a(o)},setItem:(r,s)=>n.setItem(r,JSON.stringify(s,void 0)),removeItem:r=>n.removeItem(r)}}const Xa=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(i){return Xa(i)(n)},catch(i){return this}}}catch(n){return{then(i){return this},catch(i){return Xa(i)(n)}}}},Vy=(t,e)=>(n,i,r)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:m=>m,version:0,merge:(m,d)=>({...d,...m}),...e},a=!1;const o=new Set,l=new Set;let c;try{c=s.getStorage()}catch{}if(!c)return t((...m)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...m)},i,r);const f=Xa(s.serialize),p=()=>{const m=s.partialize({...i()});let d;const x=f({state:m,version:s.version}).then(v=>c.setItem(s.name,v)).catch(v=>{d=v});if(d)throw d;return x},h=r.setState;r.setState=(m,d)=>{h(m,d),p()};const g=t((...m)=>{n(...m),p()},i,r);let y;const _=()=>{var m;if(!c)return;a=!1,o.forEach(x=>x(i()));const d=((m=s.onRehydrateStorage)==null?void 0:m.call(s,i()))||void 0;return Xa(c.getItem.bind(c))(s.name).then(x=>{if(x)return s.deserialize(x)}).then(x=>{if(x)if(typeof x.version=="number"&&x.version!==s.version){if(s.migrate)return s.migrate(x.state,x.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return x.state}).then(x=>{var v;return y=s.merge(x,(v=i())!=null?v:g),n(y,!0),p()}).then(()=>{d==null||d(y,void 0),a=!0,l.forEach(x=>x(y))}).catch(x=>{d==null||d(void 0,x)})};return r.persist={setOptions:m=>{s={...s,...m},m.getStorage&&(c=m.getStorage())},clearStorage:()=>{c==null||c.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>_(),hasHydrated:()=>a,onHydrate:m=>(o.add(m),()=>{o.delete(m)}),onFinishHydration:m=>(l.add(m),()=>{l.delete(m)})},_(),y||g},Gy=(t,e)=>(n,i,r)=>{let s={storage:rx(()=>localStorage),partialize:_=>_,version:0,merge:(_,m)=>({...m,..._}),...e},a=!1;const o=new Set,l=new Set;let c=s.storage;if(!c)return t((..._)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(..._)},i,r);const f=()=>{const _=s.partialize({...i()});return c.setItem(s.name,{state:_,version:s.version})},p=r.setState;r.setState=(_,m)=>{p(_,m),f()};const h=t((..._)=>{n(..._),f()},i,r);r.getInitialState=()=>h;let g;const y=()=>{var _,m;if(!c)return;a=!1,o.forEach(x=>{var v;return x((v=i())!=null?v:h)});const d=((m=s.onRehydrateStorage)==null?void 0:m.call(s,(_=i())!=null?_:h))||void 0;return Xa(c.getItem.bind(c))(s.name).then(x=>{if(x)if(typeof x.version=="number"&&x.version!==s.version){if(s.migrate)return[!0,s.migrate(x.state,x.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,x.state];return[!1,void 0]}).then(x=>{var v;const[M,R]=x;if(g=s.merge(R,(v=i())!=null?v:h),n(g,!0),M)return f()}).then(()=>{d==null||d(g,void 0),g=i(),a=!0,l.forEach(x=>x(g))}).catch(x=>{d==null||d(void 0,x)})};return r.persist={setOptions:_=>{s={...s,..._},_.storage&&(c=_.storage)},clearStorage:()=>{c==null||c.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>y(),hasHydrated:()=>a,onHydrate:_=>(o.add(_),()=>{o.delete(_)}),onFinishHydration:_=>(l.add(_),()=>{l.delete(_)})},s.skipHydration||y(),g||h},Wy=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((Hy?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Vy(t,e)):Gy(t,e),Xy=Wy,st=[{id:"ursa_major",name:"大熊座",nameEn:"Ursa Major",difficulty:1,description:"北斗七星所在的著名星座，是寻找北极星的重要参照。",mythology:"宙斯将美丽的卡利斯托变成熊，后升上天成为大熊座。",mythologyDetail:"在古希腊神话中，卡利斯托是一位美丽的狩猎女神，被宙斯所爱并生下儿子阿卡斯。宙斯的妻子赫拉因嫉妒，将卡利斯托变成了一只大熊。多年后，阿卡斯在狩猎时遇到了变成熊的母亲，为了避免悲剧，宙斯将他们母子一同升上天界，成为大熊座和小熊座，永远在星空中相伴。",observationTips:"春季夜晚最为明显，北斗七星的勺口两颗星连线延长5倍即可找到北极星。",bestTime:"春季3-5月，晚间21:00-23:00",hemisphere:"北半球",area:"1280平方度",ranking:3,stars:[{id:"um1",name:"天枢",x:-4.2,y:1.8,z:0,mag:1.8,color:"#ffddaa"},{id:"um2",name:"天璇",x:-3.5,y:1.2,z:0,mag:2.4,color:"#ffeecc"},{id:"um3",name:"天玑",x:-2,y:1.5,z:0,mag:2.5,color:"#ffffff"},{id:"um4",name:"天权",x:-1.2,y:.8,z:0,mag:3.3,color:"#ddeeff"},{id:"um5",name:"玉衡",x:0,y:1,z:0,mag:1.8,color:"#ffeecc"},{id:"um6",name:"开阳",x:1.3,y:1.3,z:0,mag:2.3,color:"#ffffff"},{id:"um7",name:"摇光",x:2.6,y:1.8,z:0,mag:1.9,color:"#cce4ff"}],connections:[["um1","um2"],["um2","um3"],["um3","um4"],["um4","um5"],["um5","um6"],["um6","um7"],["um4","um3"]],season:"春",center:{x:-.5,y:1.3},tags:["北斗七星","北极星","导航"]},{id:"orion",name:"猎户座",nameEn:"Orion",difficulty:1,description:"冬季最耀眼的星座之一，腰带三星是显著标志。",mythology:"海神波塞冬之子，英勇的猎人奥利安被蝎子毒死后升上天。",mythologyDetail:"奥利安是海神波塞冬与欧律阿勒之子，他拥有非凡的力量和英俊的外表，自称能杀死世上任何野兽。女神阿耳忒弥斯爱上了他，但她的哥哥阿波罗对此不满。阿波罗派出一只巨大的蝎子去刺杀奥利安，经过激烈搏斗，奥利安被蝎子毒刺杀死。宙斯将这位英勇的猎人升上天界，成为猎户座，而那只蝎子也成为天蝎座，永远与猎户座相对，永不相见。",observationTips:"冬季夜晚面向南方，三颗明亮的星星整齐排列成腰带，这是猎户座最显著的标志。",bestTime:"冬季12-2月，晚间20:00-22:00",hemisphere:"南北半球均可见",area:"594平方度",ranking:26,stars:[{id:"o1",name:"参宿四",x:-2.5,y:2,z:0,mag:.5,color:"#ff8866"},{id:"o2",name:"参宿五",x:2.2,y:2,z:0,mag:1.6,color:"#cce0ff"},{id:"o3",name:"参宿一",x:-1.8,y:0,z:0,mag:2,color:"#ddeeff"},{id:"o4",name:"参宿二",x:0,y:-.1,z:0,mag:1.7,color:"#ffffff"},{id:"o5",name:"参宿三",x:1.8,y:-.2,z:0,mag:2.2,color:"#bbddee"},{id:"o6",name:"参宿七",x:-1.5,y:-2,z:0,mag:.1,color:"#aaccff"},{id:"o7",name:"参宿六",x:1.5,y:-2.2,z:0,mag:2.8,color:"#ffccaa"},{id:"o8",name:"猎户星云",x:0,y:-1.2,z:0,mag:5,color:"#ff99cc"}],connections:[["o1","o3"],["o1","o2"],["o2","o5"],["o3","o4"],["o4","o5"],["o3","o6"],["o5","o7"],["o4","o8"]],season:"冬",center:{x:0,y:0},tags:["猎户星云","红超巨星","冬季"]},{id:"cassiopeia",name:"仙后座",nameEn:"Cassiopeia",difficulty:2,description:"呈W形排列的星座，位于北极星对面的天空。",mythology:"埃塞俄比亚王后卡西奥佩娅因炫耀美貌被钉在天上永远旋转。",mythologyDetail:"卡西奥佩娅是埃塞俄比亚国王克甫斯的王后，她因自恃美貌，夸耀自己和女儿安德洛墨达比海神涅柔斯的女儿们更美丽。愤怒的海神派海怪刻托袭击埃塞俄比亚海岸。为了平息神怒，国王被迫将女儿安德洛墨达绑在海边献祭。幸好英雄珀耳修斯路过，杀死海怪救下公主。事后，海神仍惩罚卡西奥佩娅，将她钉在天上的宝座上永远旋转，让她有时头朝下，以示羞辱。",observationTips:"秋季夜晚靠近北极星的位置，寻找五颗亮星组成的W或M形状。",bestTime:"秋季9-11月，晚间21:00-23:00",hemisphere:"北半球",area:"598平方度",ranking:25,stars:[{id:"c1",name:"王良一",x:-3,y:1,z:0,mag:2.5,color:"#ffffff"},{id:"c2",name:"王良四",x:-1.5,y:2.2,z:0,mag:2.3,color:"#ffddbb"},{id:"c3",name:"策",x:0,y:.8,z:0,mag:2.2,color:"#eeddcc"},{id:"c4",name:"王良三",x:1.5,y:2,z:0,mag:2.7,color:"#ccddff"},{id:"c5",name:"王良二",x:3,y:.5,z:0,mag:3,color:"#ffffff"}],connections:[["c1","c2"],["c2","c3"],["c3","c4"],["c4","c5"]],season:"秋",center:{x:0,y:1.3},tags:["W形","拱极星座","王后"]},{id:"scorpius",name:"天蝎座",nameEn:"Scorpius",difficulty:2,description:"夏季南方天空中的宏伟星座，心宿二是红色超巨星。",mythology:"杀死猎人奥利安的大蝎子，因此与猎户座永远相对出现。",mythologyDetail:"这只巨大的蝎子是阿波罗派去刺杀猎人奥利安的。奥利安因自负而自称能杀死世上任何野兽，这激怒了众神。蝎子从地缝中钻出，用毒刺刺中奥利安的脚踝，导致他中毒身亡。为了纪念这场战斗，宙斯将蝎子升上天界成为天蝎座。由于奥利安和蝎子是天敌，宙斯让它们永远位于天空的两端，天蝎座升起时猎户座就会落下，永不相见，避免它们在天界继续争斗。",observationTips:"夏季夜晚面向南方，寻找红色的心宿二（天蝎的心脏），然后沿着弯曲的星链寻找蝎子的尾巴。",bestTime:"夏季6-8月，晚间21:00-23:00",hemisphere:"南半球更易观测，北半球夏季可见",area:"497平方度",ranking:33,stars:[{id:"s1",name:"房宿四",x:-2,y:-1,z:0,mag:2.6,color:"#ffeecc"},{id:"s2",name:"房宿三",x:-1,y:-.5,z:0,mag:2.3,color:"#ccdeff"},{id:"s3",name:"心宿二",x:0,y:0,z:0,mag:1,color:"#ff5533"},{id:"s4",name:"心宿三",x:1,y:.3,z:0,mag:2.9,color:"#ffeedd"},{id:"s5",name:"尾宿一",x:1.8,y:-.2,z:0,mag:2.7,color:"#bbeecc"},{id:"s6",name:"尾宿二",x:2.4,y:.5,z:0,mag:2.8,color:"#ccddff"},{id:"s7",name:"尾宿八",x:2.8,y:1.2,z:0,mag:2.4,color:"#ffffff"},{id:"s8",name:"尾宿九",x:3.2,y:.4,z:0,mag:1.6,color:"#ddeeff"}],connections:[["s1","s2"],["s2","s3"],["s3","s4"],["s4","s5"],["s5","s6"],["s6","s7"],["s7","s8"],["s6","s8"]],season:"夏",center:{x:.6,y:.2},tags:["心宿二","红超巨星","夏季大三角"]},{id:"lyra",name:"天琴座",nameEn:"Lyra",difficulty:3,description:"织女星所在的小而优雅的星座，夏季大三角之一。",mythology:"俄耳甫斯的竖琴，他的音乐能让万物驻足聆听。",mythologyDetail:"俄耳甫斯是古希腊最伟大的音乐家，他的琴声能使飞鸟走兽、甚至顽石流泪。他的妻子欧律狄刻不幸被毒蛇咬死，悲痛欲绝的俄耳甫斯带着竖琴深入冥界，用动人的音乐打动了冥王哈迪斯和冥后珀耳塞福涅。冥王允许他带妻子回到人间，但要求他在走出冥界前不得回头看妻子。不幸的是，在接近出口时，俄耳甫斯忍不住回头看了一眼，妻子就此永远消失。俄耳甫斯死后，宙斯将他的竖琴升上天界，成为天琴座。",observationTips:"夏季夜晚寻找最亮的织女星，然后在其下方寻找由四颗暗星组成的小平行四边形。",bestTime:"夏季6-8月，晚间21:00-23:00",hemisphere:"北半球",area:"286平方度",ranking:52,stars:[{id:"l1",name:"织女一",x:0,y:2,z:0,mag:0,color:"#aaddff"},{id:"l2",name:"渐台二",x:-1,y:.5,z:0,mag:4.3,color:"#ffddcc"},{id:"l3",name:"渐台三",x:-.5,y:0,z:0,mag:4.3,color:"#ffeecc"},{id:"l4",name:"渐台一",x:.5,y:0,z:0,mag:4.7,color:"#ffffff"},{id:"l5",name:"渐台四",x:1,y:.5,z:0,mag:5.1,color:"#ccddee"}],connections:[["l1","l2"],["l1","l5"],["l2","l3"],["l3","l4"],["l4","l5"],["l2","l4"]],season:"夏",center:{x:0,y:.8},tags:["织女星","竖琴","夏季大三角","神话"]},{id:"cygnus",name:"天鹅座",nameEn:"Cygnus",difficulty:3,description:'银河中展翅飞翔的天鹅，又称"北十字"。',mythology:"宙斯化身天鹅接近斯巴达王后勒达，美丽的天鹅升上天界。",mythologyDetail:'宙斯为了接近美丽的斯巴达王后勒达，化身成为一只雪白优雅的天鹅。勒达被这只美丽的天鹅吸引，与它亲近。后来勒达生下了两枚鹅蛋，一枚孵出了海伦（后来引发特洛伊战争的绝世美女）和卡斯托尔，另一枚孵出了波吕丢刻斯和克吕泰涅斯特拉。为了纪念这段故事，宙斯将他化身的天鹅升上天界，成为天鹅座。天鹅座位于银河之中，展翅飞翔，其主体的五颗亮星构成一个优美的十字形，因此也被称为"北十字"。',observationTips:"秋季夜晚，在银河中寻找一个十字形的星群，最上方的亮星是天津四，与织女星、牛郎星组成夏季大三角。",bestTime:"秋季9-11月，晚间21:00-23:00",hemisphere:"北半球",area:"804平方度",ranking:16,stars:[{id:"cy1",name:"天津四",x:0,y:2.5,z:0,mag:1.3,color:"#ddeeff"},{id:"cy2",name:"天津九",x:-1.2,y:1,z:0,mag:2.9,color:"#ffeecc"},{id:"cy3",name:"辇道增七",x:0,y:.5,z:0,mag:3.2,color:"#ffccaa"},{id:"cy4",name:"天津一",x:1.2,y:1,z:0,mag:2.9,color:"#ffffff"},{id:"cy5",name:"天津二",x:-1.8,y:0,z:0,mag:4,color:"#ddeeff"},{id:"cy6",name:"奚仲四",x:0,y:-1.5,z:0,mag:2.5,color:"#ffeecc"},{id:"cy7",name:"天津八",x:1.8,y:0,z:0,mag:3.7,color:"#ccddee"}],connections:[["cy1","cy3"],["cy3","cy6"],["cy2","cy3"],["cy3","cy4"],["cy2","cy5"],["cy4","cy7"]],season:"秋",center:{x:0,y:.5},tags:["北十字","银河","夏季大三角","天津四"]}],Ki=t=>st.find(e=>e.id===t),zl=[{id:"first_star",name:"初见星光",description:"完成第一次星星连线",icon:"⭐",category:"beginner",condition:{type:"connect_count",value:1}},{id:"constellation_1",name:"初识星座",description:"成功发现第一个完整星座",icon:"✨",category:"explorer",condition:{type:"discover_count",value:1}},{id:"constellation_3",name:"星空漫步者",description:"发现3个不同的星座",icon:"🌙",category:"explorer",condition:{type:"discover_count",value:3}},{id:"constellation_all",name:"观星大师",description:"发现所有的星座",icon:"🌟",category:"explorer",condition:{type:"discover_count",value:6}},{id:"easy_clear",name:"入门完成",description:"完成所有难度1的星座",icon:"🎯",category:"challenge",condition:{type:"difficulty_clear",value:1}},{id:"medium_clear",name:"进阶探索",description:"完成所有难度2的星座",icon:"🔥",category:"challenge",condition:{type:"difficulty_clear",value:2}},{id:"hard_clear",name:"星空征服者",description:"完成所有难度3的星座",icon:"💎",category:"challenge",condition:{type:"difficulty_clear",value:3}},{id:"log_5",name:"记录者",description:"累计5条观测日志",icon:"📖",category:"collector",condition:{type:"log_count",value:5}},{id:"log_15",name:"天文日志家",description:"累计15条观测日志",icon:"📚",category:"collector",condition:{type:"log_count",value:15}},{id:"perfect_orion",name:"猎人之眼",description:"在没有错误的情况下完成猎户座",icon:"🏹",category:"special",condition:{type:"perfect_constellation",value:"orion"}},{id:"perfect_ursa",name:"北斗指引",description:"在没有错误的情况下完成大熊座",icon:"🐻",category:"special",condition:{type:"perfect_constellation",value:"ursa_major"}},{id:"dedicated",name:"坚持不懈",description:"累计错误连线超过20次但最终完成",icon:"💪",category:"special",condition:{type:"total_mistakes",value:20}}],sx=t=>zl.find(e=>e.id===t),lp={volume:.7,sfxVolume:.8,graphicsQuality:"high",showLabels:!0,showNebula:!0,starDensity:1,animationSpeed:1,theme:"dark",hapticFeedback:!0,autoSave:!0,language:"zh-CN"},Ir={low:{starCount:800,particleSize:.02,antialias:!1,bloom:!1},medium:{starCount:1500,particleSize:.03,antialias:!0,bloom:!1},high:{starCount:2500,particleSize:.04,antialias:!0,bloom:!0}},Fs={1:{stars:7,tolerance:.25,label:"入门"},2:{stars:8,tolerance:.18,label:"进阶"},3:{stars:5,tolerance:.12,label:"挑战"}},cp={PROGRESS:"starconnect_progress"},Vt={spring:{id:"spring",name:"春季",nameEn:"Spring",icon:"🌸",color:"from-pink-500 to-rose-400",bgColor:"bg-pink-500/10",borderColor:"border-pink-500/30",textColor:"text-pink-300",months:"3月 - 5月",description:"万物复苏，北斗七星指引方向"},summer:{id:"summer",name:"夏季",nameEn:"Summer",icon:"☀️",color:"from-orange-500 to-amber-400",bgColor:"bg-orange-500/10",borderColor:"border-orange-500/30",textColor:"text-orange-300",months:"6月 - 8月",description:"银河璀璨，天蝎与天琴交相辉映"},autumn:{id:"autumn",name:"秋季",nameEn:"Autumn",icon:"🍂",color:"from-amber-600 to-yellow-500",bgColor:"bg-amber-500/10",borderColor:"border-amber-500/30",textColor:"text-amber-300",months:"9月 - 11月",description:"秋高气爽，仙后与天鹅展翅翱翔"},winter:{id:"winter",name:"冬季",nameEn:"Winter",icon:"❄️",color:"from-cyan-500 to-blue-400",bgColor:"bg-cyan-500/10",borderColor:"border-cyan-500/30",textColor:"text-cyan-300",months:"12月 - 2月",description:"寒夜深沉，猎户座闪耀星空"}},qn={beginner:{id:"beginner",name:"入门探索",description:"熟悉当季星座的基本形态",requirement:1,multiplier:1},intermediate:{id:"intermediate",name:"深度观测",description:"完美完成当季所有星座",requirement:2,multiplier:1.5},master:{id:"master",name:"季节大师",description:"反复观测，解锁隐藏成就",requirement:3,multiplier:2}},$y={spring:st.filter(t=>t.season==="春").map(t=>t.id),summer:st.filter(t=>t.season==="夏").map(t=>t.id),autumn:st.filter(t=>t.season==="秋").map(t=>t.id),winter:st.filter(t=>t.season==="冬").map(t=>t.id)},hl={spring:{beginner:{id:"spring_beginner",name:"春之萌芽",type:"title",icon:"🌱",description:"完成春季入门探索的称号"},intermediate:{id:"spring_intermediate",name:"花开满庭",type:"badge",icon:"🌸",description:"完美完成春季所有星座的徽章"},master:{id:"spring_master",name:"春日守望者",type:"achievement",icon:"🌺",description:"春季观测大师的终极成就",achievementId:"spring_master"}},summer:{beginner:{id:"summer_beginner",name:"夏之初阳",type:"title",icon:"🌞",description:"完成夏季入门探索的称号"},intermediate:{id:"summer_intermediate",name:"繁星漫天",type:"badge",icon:"⭐",description:"完美完成夏季所有星座的徽章"},master:{id:"summer_master",name:"银河守护者",type:"achievement",icon:"🌌",description:"夏季观测大师的终极成就",achievementId:"summer_master"}},autumn:{beginner:{id:"autumn_beginner",name:"秋之寄语",type:"title",icon:"🍁",description:"完成秋季入门探索的称号"},intermediate:{id:"autumn_intermediate",name:"金风送爽",type:"badge",icon:"🌾",description:"完美完成秋季所有星座的徽章"},master:{id:"autumn_master",name:"秋水共长天",type:"achievement",icon:"🦢",description:"秋季观测大师的终极成就",achievementId:"autumn_master"}},winter:{beginner:{id:"winter_beginner",name:"冬之静谧",type:"title",icon:"⛄",description:"完成冬季入门探索的称号"},intermediate:{id:"winter_intermediate",name:"傲雪凌霜",type:"badge",icon:"❄️",description:"完美完成冬季所有星座的徽章"},master:{id:"winter_master",name:"极夜追光人",type:"achievement",icon:"💎",description:"冬季观测大师的终极成就",achievementId:"winter_master"}}},Es=[{id:"spring_master",name:"春日守望者",description:"成为春季观测大师",icon:"🌺",category:"season",season:"spring",condition:{type:"season_master",value:"spring"}},{id:"summer_master",name:"银河守护者",description:"成为夏季观测大师",icon:"🌌",category:"season",season:"summer",condition:{type:"season_master",value:"summer"}},{id:"autumn_master",name:"秋水共长天",description:"成为秋季观测大师",icon:"🦢",category:"season",season:"autumn",condition:{type:"season_master",value:"autumn"}},{id:"winter_master",name:"极夜追光人",description:"成为冬季观测大师",icon:"💎",category:"season",season:"winter",condition:{type:"season_master",value:"winter"}},{id:"four_seasons",name:"四季轮回",description:"完成所有四季的观测计划",icon:"🔄",category:"season",season:"all",condition:{type:"four_seasons",value:!0}}];function Bl(t){return $y[t]||[]}function Uf(){const t=new Date().getMonth();return t>=2&&t<=4?"spring":t>=5&&t<=7?"summer":t>=8&&t<=10?"autumn":"winter"}function wo(t,e,n,i,r){const s=Bl(t),a=s.filter(o=>n.includes(o)).length;if(e==="beginner")return{current:Math.min(a,qn.beginner.requirement),target:qn.beginner.requirement,percentage:Math.min(a/qn.beginner.requirement*100,100),completed:a>=qn.beginner.requirement};if(e==="intermediate"){const o=s.filter(l=>i[l]||!1).length;return{current:Math.min(o,s.length),target:s.length,percentage:s.length>0?Math.min(o/s.length*100,100):0,completed:o>=s.length}}if(e==="master"){const o=s.reduce((c,f)=>c+Math.max(0,(r[f]||0)-1),0),l=s.length*qn.master.requirement;return{current:Math.min(o,l),target:l,percentage:l>0?Math.min(o/l*100,100):0,completed:o>=l}}return{current:0,target:1,percentage:0,completed:!1}}const Fr={parent:{id:"parent",name:"家长",icon:"👨‍👩‍👧",color:"from-blue-500 to-cyan-400",description:"引导者，帮助孩子学习"},child:{id:"child",name:"孩子",icon:"🧒",color:"from-pink-500 to-orange-400",description:"探索者，在引导下发现星空"}},up={collaborative:{id:"collaborative",name:"协作任务",icon:"🤝",description:"家长和孩子共同完成"},turn_based:{id:"turn_based",name:"轮流任务",icon:"🔄",description:"家长和孩子轮流操作"},challenge:{id:"challenge",name:"PK挑战",icon:"⚔️",description:"亲子趣味竞赛"},guided:{id:"guided",name:"引导任务",icon:"👆",description:"家长引导，孩子操作"}},jl=[{id:"first_collaboration",name:"初次携手",type:"collaborative",description:"家长和孩子一起完成第一个星座连线",icon:"⭐",difficulty:1,target:{type:"collaborative_complete",value:1},reward:{xp:50,badge:"first_together"},steps:[{role:"parent",instruction:"请帮助孩子找到北斗七星的位置"},{role:"child",instruction:"试着连接第一颗和第二颗星星"},{role:"parent",instruction:"鼓励孩子继续完成剩下的连线"},{role:"child",instruction:"独立完成剩余的星星连接"}]},{id:"story_time",name:"星座故事会",type:"turn_based",description:"家长讲故事，孩子找星座",icon:"📖",difficulty:1,target:{type:"turn_complete",value:3},reward:{xp:80,badge:"story_teller"},steps:[{role:"parent",instruction:"为孩子讲述猎户座的神话故事"},{role:"child",instruction:"在星空中找到猎户座的腰带三星"},{role:"parent",instruction:"继续讲述天蝎座的故事"},{role:"child",instruction:"找到天蝎座中红色的心宿二"}]},{id:"constellation_quiz",name:"星空小测验",type:"challenge",description:"亲子问答竞赛，看谁知道得多",icon:"🎯",difficulty:2,target:{type:"quiz_score",value:80},reward:{xp:100,badge:"quiz_master"},questions:[{q:"北斗七星属于哪个星座？",a:"大熊座",options:["大熊座","小熊座","猎户座","仙后座"]},{q:"猎户座中最红的星星叫什么？",a:"参宿四",options:["参宿四","参宿七","心宿二","织女星"]},{q:"哪个星座代表了一只蝎子？",a:"天蝎座",options:["天蝎座","猎户座","天琴座","天鹅座"]},{q:"织女星位于哪个星座？",a:"天琴座",options:["天琴座","天鹅座","仙女座","仙后座"]},{q:"W形状的星座叫什么？",a:"仙后座",options:["仙后座","仙王座","仙女座","武仙座"]}]},{id:"find_the_pattern",name:"寻找图案",type:"guided",description:"家长给出提示，孩子找出图案",icon:"🔍",difficulty:2,target:{type:"guided_complete",value:3},reward:{xp:120,badge:"pattern_finder"},challenges:[{hint:"寻找一个像勺子的图案",answer:"ursa_major"},{hint:"寻找一个像猎人腰带的三颗星",answer:"orion"},{hint:"寻找一个像W字母的形状",answer:"cassiopeia"}]},{id:"season_explorer",name:"四季探索者",type:"collaborative",description:"一起探索当前季节的所有星座",icon:"🌸",difficulty:3,target:{type:"season_discovery",value:1},reward:{xp:200,badge:"season_explorer"}},{id:"mythology_master",name:"神话大师",type:"turn_based",description:"轮流讲述每个星座的神话故事",icon:"🏛️",difficulty:3,target:{type:"mythology_told",value:6},reward:{xp:300,badge:"mythology_master"}},{id:"perfect_team",name:"完美搭档",type:"collaborative",description:"连续完美完成3个星座，零失误",icon:"💎",difficulty:3,target:{type:"perfect_streak",value:3},reward:{xp:250,badge:"perfect_team"}},{id:"night_sky_guardians",name:"星空守护者",type:"challenge",description:"连续7天亲子观星打卡",icon:"🛡️",difficulty:4,target:{type:"streak_days",value:7},reward:{xp:500,badge:"sky_guardians"}}],Hl=[{id:"first_together",name:"携手起步",description:"完成第一次亲子协作星座连线",icon:"🤝",category:"collaboration",color:"from-blue-500 to-cyan-400",condition:{type:"collaborative_complete",value:1}},{id:"story_teller",name:"故事时光",description:"完成3次故事+探索的轮流任务",icon:"📖",category:"collaboration",color:"from-amber-500 to-orange-400",condition:{type:"turn_complete",value:3}},{id:"quiz_master",name:"问答达人",description:"在亲子测验中获得80分以上",icon:"🎯",category:"challenge",color:"from-red-500 to-pink-400",condition:{type:"quiz_score",value:80}},{id:"pattern_finder",name:"图案猎手",description:"完成3次引导寻星任务",icon:"🔍",category:"guided",color:"from-green-500 to-emerald-400",condition:{type:"guided_complete",value:3}},{id:"perfect_team",name:"完美搭档",description:"连续3次完美完成星座连线",icon:"💎",category:"collaboration",color:"from-purple-500 to-pink-400",condition:{type:"perfect_streak",value:3}},{id:"season_explorer",name:"四季探索者",description:"完整探索一个季节的所有星座",icon:"🌸",category:"milestone",color:"from-pink-500 to-rose-400",condition:{type:"season_discovery",value:1}},{id:"mythology_master",name:"神话传承者",description:"讲述完所有星座的神话故事",icon:"🏛️",category:"milestone",color:"from-yellow-500 to-amber-400",condition:{type:"mythology_told",value:6}},{id:"sky_guardians",name:"星空守护者",description:"连续7天亲子观星打卡",icon:"🛡️",category:"milestone",color:"from-indigo-500 to-purple-400",condition:{type:"streak_days",value:7}},{id:"family_bond",name:"家庭纽带",description:"累计亲子共学时长达到5小时",icon:"❤️",category:"milestone",color:"from-red-500 to-pink-400",condition:{type:"total_minutes",value:300}},{id:"little_astronomer",name:"小小天文学家",description:"孩子独立完成5个星座",icon:"🔭",category:"child_growth",color:"from-cyan-500 to-blue-400",condition:{type:"child_independent",value:5}},{id:"patient_guide",name:"耐心引导者",description:"家长成功引导完成10次任务",icon:"👨‍🏫",category:"parent_growth",color:"from-emerald-500 to-green-400",condition:{type:"parent_guided",value:10}},{id:"constellation_all_family",name:"全家观星大师",description:"亲子模式下发现所有星座",icon:"🌟",category:"milestone",color:"from-yellow-400 via-orange-400 to-red-400",condition:{type:"family_discover_all",value:6}}],na={welcome:{parent:"欢迎来到星空亲子探索！我是你的星空向导。作为家长，你将引导孩子一起探索浩瀚星空。可以先从简单的星座开始，用讲故事的方式激发孩子的兴趣。",child:"小朋友你好！我是星空小精灵！今天我们要一起去探索美丽的星空，寻找各种各样的星座。准备好了吗？让我们开始奇妙的星空之旅吧！"},constellations:{ursa_major:{story:"在很久很久以前，有一位美丽的狩猎女神叫卡利斯托。她被宙斯所爱，还生下了一个可爱的儿子。但是宙斯的妻子赫拉非常嫉妒，就把卡利斯托变成了一只大熊。后来，宙斯把他们母子都放到了天上，成为了大熊座和小熊座，永远在星空中相伴。你看，那七颗明亮的星星组成的大勺子，就是大熊座的尾巴哦！",science:"大熊座是北半球最著名的星座之一。北斗七星其实只是大熊座的一部分。从天璇向天枢延伸5倍的距离，就能找到北极星，这可是古代航海家和旅行者的重要导航标志呢！",tips:"先找到像勺子一样的北斗七星，然后沿着勺口两颗星的连线，延长5倍就能找到北极星啦！"},orion:{story:"奥利安是海神波塞冬的儿子，他是一位英勇的猎人，自称能杀死世上任何野兽。女神阿耳忒弥斯爱上了他，但她的哥哥阿波罗很不满，派了一只大蝎子去刺杀奥利安。经过激烈搏斗，奥利安被蝎子毒死了。宙斯把这位英勇的猎人升上了天界，成为了猎户座。而那只蝎子也变成了天蝎座，永远和猎户座相对，永不相见。",science:"猎户座是冬季夜空中最壮观的星座。参宿四是一颗红超巨星，比太阳大得多，如果把它放到太阳的位置，它能把火星轨道都包含进去！猎户座大星云是一个巨大的恒星诞生区，那里正在孕育新的恒星。",tips:"冬天面向南方，寻找三颗排成一条直线的亮星，那就是猎户的腰带！"},cassiopeia:{story:"卡西奥佩娅是埃塞俄比亚的王后，她非常美丽，但也很骄傲。她夸耀自己和女儿比海神的女儿们还要美丽，这激怒了海神。海神派海怪去袭击她的国家，为了平息神怒，王后只能把女儿绑在海边献祭。后来英雄珀耳修斯救了公主，但海神还是惩罚了王后，把她钉在天上永远旋转，让她有时头朝下，以示羞辱。",science:"仙后座是拱极星座，全年都能看到。它的五颗亮星组成W或M形状，非常容易辨认。仙后座位于银河中，里面有很多美丽的星团和星云。",tips:"在北极星的对面，寻找五颗亮星组成的W或M形状，那就是仙后座！"},scorpius:{story:"这就是那只被阿波罗派去刺杀猎人奥利安的大蝎子。它从地缝中钻出来，用毒刺刺中了奥利安的脚踝，导致他中毒身亡。宙斯把这只蝎子也升上了天界，成为天蝎座。为了让它们不再争斗，宙斯让它们永远位于天空的两端，天蝎座升起时，猎户座就会落下。",science:"天蝎座是夏季夜空中最壮观的星座之一。心宿二是一颗红超巨星，它发出红色的光芒，就像蝎子跳动的心脏。天蝎座位于银河最明亮的区域，周围有很多美丽的星团。",tips:"夏天的夜晚面向南方，寻找那颗红色的心宿二，那就是蝎子的心脏！"},lyra:{story:"俄耳甫斯是古希腊最伟大的音乐家，他的琴声能让飞鸟走兽甚至顽石都感动流泪。他的妻子不幸被毒蛇咬死，他带着竖琴深入冥界，用音乐打动了冥王。冥王允许他带妻子回去，但要求他走出冥界前不能回头。可惜在接近出口时，他忍不住回头看了一眼，妻子就永远消失了。后来宙斯把他的竖琴升上天界，成为了天琴座。",science:"天琴座虽然小，但非常重要。织女星是它最亮的星，也是夏季大三角的顶点之一。织女星是除了太阳外，第一颗被人类拍摄下来的恒星。",tips:"夏天寻找最亮的织女星，然后在它下方找四颗暗星组成的小平行四边形，那就是竖琴的形状！"},cygnus:{story:"宙斯为了接近美丽的斯巴达王后勒达，化身成为一只雪白优雅的天鹅。勒达被这只美丽的天鹅吸引，与它亲近。后来勒达生下了两枚鹅蛋，其中一枚孵出了引发特洛伊战争的绝世美女海伦。为了纪念这段故事，宙斯把他化身的天鹅升上天界，成为了天鹅座。",science:'天鹅座又被称为"北十字"，因为它的五颗亮星组成一个优美的十字形。天津四是它最亮的星，也是夏季大三角的顶点之一。天鹅座位于银河中，就像一只在银河中展翅飞翔的天鹅。',tips:"秋天在银河中寻找一个十字形的星群，那就是展翅飞翔的天鹅！"}},encouragement:{parent:["太棒了！你引导得非常好，孩子学得很开心！","继续保持这种耐心，孩子会越来越热爱星空的！","你是一位很棒的星空引导者！","孩子的每一点进步都离不开你的引导！"],child:["哇！你真棒！居然找到了这个星座！","太厉害了！你是小小观星家！","继续加油，还有更多美丽的星座等着你去发现哦！","你做得非常好！让我们继续探索吧！","真聪明！你已经掌握了寻找星座的技巧！"]}},ga=t=>jl.find(e=>e.id===t),Yy=t=>Hl.find(e=>e.id===t);let Cd=!0;const qy={...rx(()=>localStorage),setItem:(t,e)=>{if(Cd)return localStorage.setItem(t,e)},getItem:t=>{var n,i;const e=localStorage.getItem(t);if(e)try{const r=JSON.parse(e);((i=(n=r.state)==null?void 0:n.settings)==null?void 0:i.autoSave)!==void 0&&(Cd=r.state.settings.autoSave)}catch{}return e}},Et=jy(Xy((t,e)=>({settings:{...lp},updateSettings:n=>t(i=>{const r={settings:{...i.settings,...n}};return n.autoSave!==void 0&&(Cd=n.autoSave),r}),resetSettings:()=>t({settings:{...lp}}),manualSave:()=>{const n=e(),i={state:{settings:n.settings,discoveredConstellations:n.discoveredConstellations,discoveredStars:n.discoveredStars,observationLogs:n.observationLogs,unlockedAchievements:n.unlockedAchievements,totalMistakes:n.totalMistakes,seasonProgress:n.seasonProgress,seasonRewardsUnlocked:n.seasonRewardsUnlocked,seasonRewardsClaimed:n.seasonRewardsClaimed,perfectObservations:n.perfectObservations,totalObservations:n.totalObservations,seasonHistory:n.seasonHistory,favoriteConstellations:n.favoriteConstellations,familyMode:n.familyMode},version:0};localStorage.setItem(cp.PROGRESS,JSON.stringify(i))},favoriteConstellations:[],toggleFavorite:n=>t(i=>({favoriteConstellations:i.favoriteConstellations.includes(n)?i.favoriteConstellations.filter(r=>r!==n):[...i.favoriteConstellations,n]})),isFavorite:n=>e().favoriteConstellations.includes(n),familyMode:{enabled:!1,currentRole:null,familyMembers:{parent:{name:"家长",avatar:"👨‍👩‍👧",xp:0,level:1},child:{name:"孩子",avatar:"🧒",xp:0,level:1}},activeTaskId:null,currentStepIndex:0,turnRole:null,collaborativeCount:0,turnCompleteCount:0,guidedCompleteCount:0,perfectStreak:0,mythologyToldCount:0,childIndependentCount:0,parentGuidedCount:0,familyDiscoveredConstellations:[],totalMinutes:0,sessionStartTime:null,lastActiveDate:null,streakDays:0,completedTasks:[],unlockedFamilyAchievements:[],quizScores:[],familyLog:[]},setFamilyMode:n=>t(i=>({familyMode:{...i.familyMode,enabled:n,sessionStartTime:n?Date.now():null}})),setFamilyRole:n=>t(i=>({familyMode:{...i.familyMode,currentRole:n}})),updateFamilyMember:(n,i)=>t(r=>({familyMode:{...r.familyMode,familyMembers:{...r.familyMode.familyMembers,[n]:{...r.familyMode.familyMembers[n],...i}}}})),addFamilyXP:(n,i)=>t(r=>{const s=r.familyMode.familyMembers[n],a=s.xp+i,o=Math.floor(a/100)+1;return{familyMode:{...r.familyMode,familyMembers:{...r.familyMode.familyMembers,[n]:{...s,xp:a,level:o}}}}}),startFamilyTask:n=>{var s;const i=ga(n);if(!i)return!1;const r=(s=i.steps)==null?void 0:s[0];return t(a=>({familyMode:{...a.familyMode,activeTaskId:n,currentStepIndex:0,turnRole:(r==null?void 0:r.role)||null}})),!0},nextTaskStep:()=>{const n=e(),i=ga(n.familyMode.activeTaskId);if(!i||!i.steps)return null;const r=n.familyMode.currentStepIndex+1;if(r>=i.steps.length)return e().completeFamilyTask(),null;const s=i.steps[r];return t(a=>({familyMode:{...a.familyMode,currentStepIndex:r,turnRole:(s==null?void 0:s.role)||null}})),s},completeFamilyTask:()=>{const i=e().familyMode.activeTaskId,r=ga(i);return r?(t(s=>{var o;const a={familyMode:{...s.familyMode,activeTaskId:null,currentStepIndex:0,turnRole:null,completedTasks:[...s.familyMode.completedTasks,{taskId:i,completedAt:Date.now(),perfect:s.familyMode.perfectStreak>0}]}};if(r.type==="collaborative"?a.familyMode.collaborativeCount=s.familyMode.collaborativeCount+1:r.type==="turn_based"?a.familyMode.turnCompleteCount=s.familyMode.turnCompleteCount+1:r.type==="guided"&&(a.familyMode.guidedCompleteCount=s.familyMode.guidedCompleteCount+1,a.familyMode.parentGuidedCount=s.familyMode.parentGuidedCount+1),(o=r.reward)!=null&&o.xp){const l=a.familyMode.familyMembers.parent,c=a.familyMode.familyMembers.child,f=l.xp+Math.floor(r.reward.xp*.4),p=c.xp+Math.floor(r.reward.xp*.6);a.familyMode.familyMembers={parent:{...l,xp:f,level:Math.floor(f/100)+1},child:{...c,xp:p,level:Math.floor(p/100)+1}}}return a}),e().checkFamilyAchievements(),r):null},recordMythologyTold:()=>t(n=>({familyMode:{...n.familyMode,mythologyToldCount:n.familyMode.mythologyToldCount+1}})),recordChildIndependent:()=>t(n=>({familyMode:{...n.familyMode,childIndependentCount:n.familyMode.childIndependentCount+1}})),recordParentGuided:()=>t(n=>({familyMode:{...n.familyMode,parentGuidedCount:n.familyMode.parentGuidedCount+1}})),recordQuizScore:(n,i)=>t(r=>({familyMode:{...r.familyMode,quizScores:[...r.familyMode.quizScores,{score:n,total:i,percentage:Math.round(n/i*100),date:Date.now()}]}})),updateFamilyPerfectStreak:n=>t(i=>({familyMode:{...i.familyMode,perfectStreak:n?i.familyMode.perfectStreak+1:0}})),addFamilyLog:n=>t(i=>({familyMode:{...i.familyMode,familyLog:[n,...i.familyMode.familyLog].slice(0,200)}})),checkFamilyStreak:()=>{const n=new Date().toDateString(),i=e(),r=i.familyMode.lastActiveDate;if(r===n)return;const s=new Date;s.setDate(s.getDate()-1);let a=1;r===s.toDateString()&&(a=i.familyMode.streakDays+1),t(o=>({familyMode:{...o.familyMode,lastActiveDate:n,streakDays:a}})),e().checkFamilyAchievements()},endFamilySession:()=>{const n=e();if(n.familyMode.sessionStartTime){const i=Math.round((Date.now()-n.familyMode.sessionStartTime)/6e4);t(r=>({familyMode:{...r.familyMode,totalMinutes:r.familyMode.totalMinutes+i,sessionStartTime:null}})),e().checkFamilyAchievements(!0)}},checkFamilyAchievements:(n=!1)=>{const i=e();if(!n&&!i.familyMode.enabled)return[];const r=[],s=i.familyMode;return Hl.forEach(a=>{if(s.unlockedFamilyAchievements.includes(a.id))return;const{type:o,value:l}=a.condition;let c=!1;switch(o){case"collaborative_complete":c=s.collaborativeCount>=l;break;case"turn_complete":c=s.turnCompleteCount>=l;break;case"quiz_score":c=(s.quizScores.length>0?Math.max(...s.quizScores.map(p=>p.percentage)):0)>=l;break;case"guided_complete":c=s.guidedCompleteCount>=l;break;case"perfect_streak":c=s.perfectStreak>=l;break;case"season_discovery":{const p=Uf(),h=Bl(p);c=h.filter(y=>s.familyDiscoveredConstellations.includes(y)).length>=h.length*l;break}case"mythology_told":c=s.mythologyToldCount>=l;break;case"streak_days":c=s.streakDays>=l;break;case"total_minutes":c=s.totalMinutes>=l;break;case"child_independent":c=s.childIndependentCount>=l;break;case"parent_guided":c=s.parentGuidedCount>=l;break;case"family_discover_all":c=s.familyDiscoveredConstellations.length>=l;break}c&&r.push(a.id)}),r.length>0&&(t(a=>({familyMode:{...a.familyMode,unlockedFamilyAchievements:[...a.familyMode.unlockedFamilyAchievements,...r]}})),r.forEach(a=>{const o=Yy(a);o&&e().addFamilyLog({type:"family_achievement",achievementId:a,achievementName:o.name,timestamp:Date.now()})})),r},recordFamilyDiscovery:(n,i)=>{t(r=>{const a=r.familyMode.familyDiscoveredConstellations.includes(n)?r.familyMode.familyDiscoveredConstellations:[...r.familyMode.familyDiscoveredConstellations,n];return{familyMode:{...r.familyMode,familyDiscoveredConstellations:a,perfectStreak:i?r.familyMode.perfectStreak+1:0}}}),e().checkFamilyAchievements()},getFamilyProgress:()=>{const i=e().familyMode;return{totalAchievements:Hl.length,unlockedAchievements:i.unlockedFamilyAchievements.length,totalTasks:jl.length,completedTasks:i.completedTasks.length,parentLevel:i.familyMembers.parent.level,childLevel:i.familyMembers.child.level,parentXP:i.familyMembers.parent.xp,childXP:i.familyMembers.child.xp,totalMinutes:i.totalMinutes,streakDays:i.streakDays,discoveredConstellations:i.familyDiscoveredConstellations.length,collaborativeCount:i.collaborativeCount,turnCompleteCount:i.turnCompleteCount,guidedCompleteCount:i.guidedCompleteCount}},getFamilyGrowthData:()=>{const i=e().familyMode,r=[],s=new Date;for(let a=6;a>=0;a--){const o=new Date(s);o.setDate(o.getDate()-a);const l=o.toDateString(),c=i.familyLog.filter(f=>new Date(f.timestamp).toDateString()===l);r.push({date:o.toLocaleDateString("zh-CN",{weekday:"short"}),sessions:c.length,discoveries:c.filter(f=>f.type==="discovery").length})}return{weeklyData:r,totalSessions:Math.floor(i.totalMinutes/30),avgSessionLength:i.totalMinutes>0?Math.round(i.totalMinutes/Math.max(1,Math.floor(i.totalMinutes/30))):0}},discoveredConstellations:[],discoveredStars:[],connectionPath:[],currentTargetConstellation:null,mistakes:0,totalMistakes:0,perfectRun:!0,setTargetConstellation:n=>{t({currentTargetConstellation:n,connectionPath:[],mistakes:0,perfectRun:!0})},connectStar:n=>{const i=e(),r=Ki(i.currentTargetConstellation);if(!r||!r.stars.map(l=>l.id).includes(n)||i.connectionPath.includes(n))return!1;const a=[...i.connectionPath,n],o=r.connections;if(a.length>=2){const l=a.slice(-2);if(!o.some(([f,p])=>f===l[0]&&p===l[1]||f===l[1]&&p===l[0]))return t({mistakes:i.mistakes+1,totalMistakes:i.totalMistakes+1,perfectRun:!1}),e().checkAchievements(),!1}return t({connectionPath:a,discoveredStars:i.discoveredStars.includes(n)?i.discoveredStars:[...i.discoveredStars,n]}),e().checkConstellationComplete(),e().checkAchievements(),!0},clearConnectionPath:()=>t({connectionPath:[]}),checkConstellationComplete:()=>{const n=e(),i=Ki(n.currentTargetConstellation);if(!i)return!1;if([...new Set(n.connectionPath)].length===i.stars.length){const a=i.id,o=n.discoveredConstellations.includes(a),l=n.perfectRun;if(t(c=>({totalObservations:{...c.totalObservations,[a]:(c.totalObservations[a]||0)+1},perfectObservations:l?{...c.perfectObservations,[a]:!0}:c.perfectObservations})),o?e().addLog({type:"reobservation",constellationId:a,perfect:l,timestamp:Date.now()}):(t(c=>({discoveredConstellations:[...c.discoveredConstellations,a]})),e().addLog({type:"discovery",constellationId:a,perfect:l,timestamp:Date.now()})),n.familyMode.enabled){e().recordFamilyDiscovery(a,l);const c=n.familyMode.turnRole||n.familyMode.currentRole,f=n.familyMode.activeTaskId;if(c==="child"&&!f&&e().recordChildIndependent(),f){const p=ga(f);(p==null?void 0:p.type)==="guided"&&c==="child"&&e().recordParentGuided()}e().addFamilyLog({type:o?"reobservation":"discovery",constellationId:a,perfect:l,role:c,timestamp:Date.now()}),e().checkFamilyAchievements()}return e().checkSeasonProgress(),!0}return!1},observationLogs:[],addLog:n=>t(i=>({observationLogs:[n,...i.observationLogs].slice(0,100)})),clearLogs:()=>t({observationLogs:[]}),unlockedAchievements:[],seasonProgress:{spring:{beginner:!1,intermediate:!1,master:!1},summer:{beginner:!1,intermediate:!1,master:!1},autumn:{beginner:!1,intermediate:!1,master:!1},winter:{beginner:!1,intermediate:!1,master:!1}},seasonRewardsUnlocked:[],seasonRewardsClaimed:[],perfectObservations:{},totalObservations:{},seasonHistory:[],getSeasonStats:()=>{const n=e(),i={};return Object.keys(Vt).forEach(r=>{const s=Bl(r),a=s.filter(h=>n.discoveredConstellations.includes(h)).length,o=s.filter(h=>n.perfectObservations[h]).length,l=s.reduce((h,g)=>h+Math.max(0,(n.totalObservations[g]||0)-1),0),c=wo(r,"beginner",n.discoveredConstellations,n.perfectObservations,n.totalObservations),f=wo(r,"intermediate",n.discoveredConstellations,n.perfectObservations,n.totalObservations),p=wo(r,"master",n.discoveredConstellations,n.perfectObservations,n.totalObservations);i[r]={constellations:s.length,discovered:a,perfectCount:o,reObservationCount:l,beginner:c,intermediate:f,master:p,overallPercentage:Math.round((c.percentage+f.percentage+p.percentage)/3)}}),i},checkSeasonProgress:()=>{const n=e(),i={...n.seasonProgress},r=[],s=[];return Object.keys(Vt).forEach(a=>{Object.keys(qn).forEach(o=>{if(!i[a][o]&&wo(a,o,n.discoveredConstellations,n.perfectObservations,n.totalObservations).completed){i[a]={...i[a],[o]:!0},r.push({seasonId:a,phaseId:o});const c=hl[a][o];c&&!n.seasonRewardsUnlocked.includes(c.id)&&(s.push(c.id),n.addLog({type:"season_reward",seasonId:a,phaseId:o,rewardId:c.id,rewardName:c.name,timestamp:Date.now()}))}})}),r.length>0&&t({seasonProgress:i,seasonRewardsUnlocked:[...n.seasonRewardsUnlocked,...s],seasonHistory:[...r.map(a=>({...a,timestamp:Date.now()})),...n.seasonHistory].slice(0,50)}),e().checkAchievements(),r.length>0?r:[]},claimSeasonReward:n=>{const i=e();return i.seasonRewardsUnlocked.includes(n)&&!i.seasonRewardsClaimed.includes(n)?(t({seasonRewardsClaimed:[...i.seasonRewardsClaimed,n]}),!0):!1},checkAchievements:()=>{const n=e(),i=[];return[...zl,...Es].forEach(s=>{var c;if(n.unlockedAchievements.includes(s.id))return;const{type:a,value:o}=s.condition;let l=!1;switch(a){case"connect_count":l=n.connectionPath.length>=o;break;case"discover_count":l=n.discoveredConstellations.length>=o;break;case"difficulty_clear":{const f=o;l=st.filter(h=>h.difficulty===f).every(h=>n.discoveredConstellations.includes(h.id));break}case"log_count":l=n.observationLogs.length>=o;break;case"perfect_constellation":{const f=n.observationLogs[0];l=f&&f.constellationId===o&&f.perfect===!0;break}case"total_mistakes":l=n.totalMistakes>=o;break;case"season_master":l=((c=n.seasonProgress[o])==null?void 0:c.master)===!0;break;case"four_seasons":l=Object.keys(Vt).every(f=>{var p;return((p=n.seasonProgress[f])==null?void 0:p.master)===!0});break}l&&i.push(s.id)}),i.length>0?(t(s=>({unlockedAchievements:[...s.unlockedAchievements,...i]})),i.forEach(s=>{e().addLog({type:"achievement",achievementId:s,timestamp:Date.now()})}),i):[]},showAchievementToast:null,setShowAchievementToast:n=>t({showAchievementToast:n}),activePanel:null,setActivePanel:n=>t(i=>{const r={activePanel:n};return n!=="atlas"&&i.activePanel==="atlas"&&(r.activeAtlasPanel=null,r.selectedConstellationDetail=null),r}),openAtlasList:()=>t({activePanel:"atlas",activeAtlasPanel:null,selectedConstellationDetail:null}),openAtlasDetail:n=>t({activePanel:"atlas",activeAtlasPanel:"detail",selectedConstellationDetail:n}),resetAtlasState:()=>t({activeAtlasPanel:null,selectedConstellationDetail:null}),activeAtlasPanel:null,selectedConstellationDetail:null,setActiveAtlasPanel:n=>t({activeAtlasPanel:n}),setSelectedConstellationDetail:n=>t({selectedConstellationDetail:n}),isConstellationComplete:n=>e().discoveredConstellations.includes(n),getProgress:()=>{const n=e(),i=zl.length+Es.length;return{constellations:n.discoveredConstellations.length,totalConstellations:st.length,achievements:n.unlockedAchievements.length,totalAchievements:i,logs:n.observationLogs.length,seasonRewardsClaimed:n.seasonRewardsClaimed.length,totalSeasonRewards:Object.keys(Vt).length*Object.keys(qn).length}},resetProgress:()=>t({discoveredConstellations:[],discoveredStars:[],connectionPath:[],currentTargetConstellation:null,mistakes:0,totalMistakes:0,perfectRun:!0,observationLogs:[],unlockedAchievements:[],seasonProgress:{spring:{beginner:!1,intermediate:!1,master:!1},summer:{beginner:!1,intermediate:!1,master:!1},autumn:{beginner:!1,intermediate:!1,master:!1},winter:{beginner:!1,intermediate:!1,master:!1}},seasonRewardsUnlocked:[],seasonRewardsClaimed:[],perfectObservations:{},totalObservations:{},seasonHistory:[],favoriteConstellations:[],familyMode:{enabled:!1,currentRole:null,familyMembers:{parent:{name:"家长",avatar:"👨‍👩‍👧",xp:0,level:1},child:{name:"孩子",avatar:"🧒",xp:0,level:1}},activeTaskId:null,currentStepIndex:0,turnRole:null,collaborativeCount:0,turnCompleteCount:0,guidedCompleteCount:0,perfectStreak:0,mythologyToldCount:0,childIndependentCount:0,parentGuidedCount:0,familyDiscoveredConstellations:[],totalMinutes:0,sessionStartTime:null,lastActiveDate:null,streakDays:0,completedTasks:[],unlockedFamilyAchievements:[],quizScores:[],familyLog:[]}})}),{name:cp.PROGRESS,storage:qy,partialize:t=>({settings:t.settings,discoveredConstellations:t.discoveredConstellations,discoveredStars:t.discoveredStars,observationLogs:t.observationLogs,unlockedAchievements:t.unlockedAchievements,totalMistakes:t.totalMistakes,seasonProgress:t.seasonProgress,seasonRewardsUnlocked:t.seasonRewardsUnlocked,seasonRewardsClaimed:t.seasonRewardsClaimed,perfectObservations:t.perfectObservations,totalObservations:t.totalObservations,seasonHistory:t.seasonHistory,favoriteConstellations:t.favoriteConstellations,familyMode:t.familyMode})}));/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const If="165",Ky=0,dp=1,Zy=2,ax=1,Qy=2,oi=3,Zi=0,on=1,ui=2,Wi=0,bs=1,gs=2,fp=3,hp=4,Jy=5,gr=100,eS=101,tS=102,nS=103,iS=104,rS=200,sS=201,aS=202,oS=203,Ad=204,Rd=205,lS=206,cS=207,uS=208,dS=209,fS=210,hS=211,pS=212,mS=213,gS=214,xS=0,vS=1,_S=2,Vl=3,yS=4,SS=5,MS=6,wS=7,ox=0,ES=1,bS=2,Xi=0,TS=1,CS=2,AS=3,RS=4,NS=5,PS=6,LS=7,lx=300,Os=301,ks=302,Nd=303,Pd=304,gc=306,Ld=1e3,Sr=1001,Dd=1002,bn=1003,DS=1004,Eo=1005,On=1006,Jc=1007,Mr=1008,Qi=1009,US=1010,IS=1011,Gl=1012,cx=1013,zs=1014,Fi=1015,xc=1016,ux=1017,dx=1018,Bs=1020,FS=35902,OS=1021,kS=1022,Zn=1023,zS=1024,BS=1025,Ts=1026,js=1027,jS=1028,fx=1029,HS=1030,hx=1031,px=1033,eu=33776,tu=33777,nu=33778,iu=33779,pp=35840,mp=35841,gp=35842,xp=35843,vp=36196,_p=37492,yp=37496,Sp=37808,Mp=37809,wp=37810,Ep=37811,bp=37812,Tp=37813,Cp=37814,Ap=37815,Rp=37816,Np=37817,Pp=37818,Lp=37819,Dp=37820,Up=37821,ru=36492,Ip=36494,Fp=36495,VS=36283,Op=36284,kp=36285,zp=36286,GS=3200,WS=3201,XS=0,$S=1,Di="",In="srgb",ir="srgb-linear",Ff="display-p3",vc="display-p3-linear",Wl="linear",lt="srgb",Xl="rec709",$l="p3",Or=7680,Bp=519,YS=512,qS=513,KS=514,mx=515,ZS=516,QS=517,JS=518,eM=519,Ud=35044,jp="300 es",hi=2e3,Yl=2001;class Xs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],su=Math.PI/180,Id=180/Math.PI;function $i(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function tM(t,e){return(t%e+e)%e}function au(t,e,n){return(1-n)*t+n*e}function Kn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function it(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,n=0){Be.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,n,i,r,s,a,o,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],h=i[2],g=i[5],y=i[8],_=r[0],m=r[3],d=r[6],x=r[1],v=r[4],M=r[7],R=r[2],C=r[5],T=r[8];return s[0]=a*_+o*x+l*R,s[3]=a*m+o*v+l*C,s[6]=a*d+o*M+l*T,s[1]=c*_+f*x+p*R,s[4]=c*m+f*v+p*C,s[7]=c*d+f*M+p*T,s[2]=h*_+g*x+y*R,s[5]=h*m+g*v+y*C,s[8]=h*d+g*M+y*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],p=f*a-o*c,h=o*l-f*s,g=c*s-a*l,y=n*p+i*h+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=p*_,e[1]=(r*c-f*i)*_,e[2]=(o*i-r*a)*_,e[3]=h*_,e[4]=(f*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=g*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(ou.makeScale(e,n)),this}rotate(e){return this.premultiply(ou.makeRotation(-e)),this}translate(e,n){return this.premultiply(ou.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ou=new Ue;function gx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ql(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function nM(){const t=ql("canvas");return t.style.display="block",t}const Hp={};function Of(t){t in Hp||(Hp[t]=!0,console.warn(t))}function iM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Vp=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gp=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bo={[ir]:{transfer:Wl,primaries:Xl,toReference:t=>t,fromReference:t=>t},[In]:{transfer:lt,primaries:Xl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[vc]:{transfer:Wl,primaries:$l,toReference:t=>t.applyMatrix3(Gp),fromReference:t=>t.applyMatrix3(Vp)},[Ff]:{transfer:lt,primaries:$l,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Gp),fromReference:t=>t.applyMatrix3(Vp).convertLinearToSRGB()}},rM=new Set([ir,vc]),Je={enabled:!0,_workingColorSpace:ir,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!rM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=bo[e].toReference,r=bo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return bo[t].primaries},getTransfer:function(t){return t===Di?Wl:bo[t].transfer}};function Cs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function lu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let kr;class sM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{kr===void 0&&(kr=ql("canvas")),kr.width=e.width,kr.height=e.height;const i=kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=kr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ql("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Cs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Cs(n[i]/255)*255):n[i]=Cs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aM=0;class xx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=$i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(cu(r[a].image)):s.push(cu(r[a]))}else s=cu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function cu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?sM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oM=0;class Zt extends Xs{constructor(e=Zt.DEFAULT_IMAGE,n=Zt.DEFAULT_MAPPING,i=Sr,r=Sr,s=On,a=Mr,o=Zn,l=Qi,c=Zt.DEFAULT_ANISOTROPY,f=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=$i(),this.name="",this.source=new xx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ld:e.x=e.x-Math.floor(e.x);break;case Sr:e.x=e.x<0?0:1;break;case Dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ld:e.y=e.y-Math.floor(e.y);break;case Sr:e.y=e.y<0?0:1;break;case Dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=lx;Zt.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],p=l[8],h=l[1],g=l[5],y=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(f-h)<.01&&Math.abs(p-_)<.01&&Math.abs(y-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(p+_)<.1&&Math.abs(y+m)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(g+1)/2,R=(d+1)/2,C=(f+h)/4,T=(p+_)/4,N=(y+m)/4;return v>M&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=T/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=N/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=N/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-y)*(m-y)+(p-_)*(p-_)+(h-f)*(h-f));return Math.abs(x)<.001&&(x=1),this.x=(m-y)/x,this.y=(p-_)/x,this.z=(h-f)/x,this.w=Math.acos((c+g+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lM extends Xs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new xx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends lM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class vx extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cM extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],p=i[r+3];const h=s[a+0],g=s[a+1],y=s[a+2],_=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=p;return}if(o===1){e[n+0]=h,e[n+1]=g,e[n+2]=y,e[n+3]=_;return}if(p!==_||l!==h||c!==g||f!==y){let m=1-o;const d=l*h+c*g+f*y+p*_,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const R=Math.sqrt(v),C=Math.atan2(R,d*x);m=Math.sin(m*C)/R,o=Math.sin(o*C)/R}const M=o*x;if(l=l*m+h*M,c=c*m+g*M,f=f*m+y*M,p=p*m+_*M,m===1-o){const R=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=R,c*=R,f*=R,p*=R}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],p=s[a],h=s[a+1],g=s[a+2],y=s[a+3];return e[n]=o*y+f*p+l*g-c*h,e[n+1]=l*y+f*h+c*p-o*g,e[n+2]=c*y+f*g+o*h-l*p,e[n+3]=f*y-o*p-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),p=o(s/2),h=l(i/2),g=l(r/2),y=l(s/2);switch(a){case"XYZ":this._x=h*f*p+c*g*y,this._y=c*g*p-h*f*y,this._z=c*f*y+h*g*p,this._w=c*f*p-h*g*y;break;case"YXZ":this._x=h*f*p+c*g*y,this._y=c*g*p-h*f*y,this._z=c*f*y-h*g*p,this._w=c*f*p+h*g*y;break;case"ZXY":this._x=h*f*p-c*g*y,this._y=c*g*p+h*f*y,this._z=c*f*y+h*g*p,this._w=c*f*p-h*g*y;break;case"ZYX":this._x=h*f*p-c*g*y,this._y=c*g*p+h*f*y,this._z=c*f*y-h*g*p,this._w=c*f*p+h*g*y;break;case"YZX":this._x=h*f*p+c*g*y,this._y=c*g*p+h*f*y,this._z=c*f*y-h*g*p,this._w=c*f*p-h*g*y;break;case"XZY":this._x=h*f*p-c*g*y,this._y=c*g*p-h*f*y,this._z=c*f*y+h*g*p,this._w=c*f*p+h*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],h=i+o+p;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>p){const g=2*Math.sqrt(1+i-o-p);this._w=(f-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>p){const g=2*Math.sqrt(1+o-i-p);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+p-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),p=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=a*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Wp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Wp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*c+a*p-o*f,this.y=i+l*f+o*c-s*p,this.z=r+l*p+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uu.copy(this).projectOnVector(e),this.sub(uu)}reflect(e){return this.sub(uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uu=new H,Wp=new Qa;class Ja{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Nn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Nn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Nn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(s,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),To.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),To.copy(i.boundingBox)),To.applyMatrix4(e.matrixWorld),this.union(To)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),Co.subVectors(this.max,ia),zr.subVectors(e.a,ia),Br.subVectors(e.b,ia),jr.subVectors(e.c,ia),wi.subVectors(Br,zr),Ei.subVectors(jr,Br),ar.subVectors(zr,jr);let n=[0,-wi.z,wi.y,0,-Ei.z,Ei.y,0,-ar.z,ar.y,wi.z,0,-wi.x,Ei.z,0,-Ei.x,ar.z,0,-ar.x,-wi.y,wi.x,0,-Ei.y,Ei.x,0,-ar.y,ar.x,0];return!du(n,zr,Br,jr,Co)||(n=[1,0,0,0,1,0,0,0,1],!du(n,zr,Br,jr,Co))?!1:(Ao.crossVectors(wi,Ei),n=[Ao.x,Ao.y,Ao.z],du(n,zr,Br,jr,Co))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ni=[new H,new H,new H,new H,new H,new H,new H,new H],Nn=new H,To=new Ja,zr=new H,Br=new H,jr=new H,wi=new H,Ei=new H,ar=new H,ia=new H,Co=new H,Ao=new H,or=new H;function du(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){or.fromArray(t,s);const o=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=e.dot(or),c=n.dot(or),f=i.dot(or);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const uM=new Ja,ra=new H,fu=new H;class eo{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):uM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ra.subVectors(e,this.center);const n=ra.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ra,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ra.copy(e.center).add(fu)),this.expandByPoint(ra.copy(e.center).sub(fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new H,hu=new H,Ro=new H,bi=new H,pu=new H,No=new H,mu=new H;class _c{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,n),ii.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){hu.copy(e).add(n).multiplyScalar(.5),Ro.copy(n).sub(e).normalize(),bi.copy(this.origin).sub(hu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ro),o=bi.dot(this.direction),l=-bi.dot(Ro),c=bi.lengthSq(),f=Math.abs(1-a*a);let p,h,g,y;if(f>0)if(p=a*l-o,h=a*o-l,y=s*f,p>=0)if(h>=-y)if(h<=y){const _=1/f;p*=_,h*=_,g=p*(p+a*h+2*o)+h*(a*p+h+2*l)+c}else h=s,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*l)+c;else h=-s,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*l)+c;else h<=-y?(p=Math.max(0,-(-a*s+o)),h=p>0?-s:Math.min(Math.max(-s,-l),s),g=-p*p+h*(h+2*l)+c):h<=y?(p=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+c):(p=Math.max(0,-(a*s+o)),h=p>0?s:Math.min(Math.max(-s,-l),s),g=-p*p+h*(h+2*l)+c);else h=a>0?-s:s,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(hu).addScaledVector(Ro,h),g}intersectSphere(e,n){ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),r=ii.dot(ii)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,n,i,r,s){pu.subVectors(n,e),No.subVectors(i,e),mu.crossVectors(pu,No);let a=this.direction.dot(mu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bi.subVectors(this.origin,e);const l=o*this.direction.dot(No.crossVectors(bi,No));if(l<0)return null;const c=o*this.direction.dot(pu.cross(bi));if(c<0||l+c>a)return null;const f=-o*bi.dot(mu);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,i,r,s,a,o,l,c,f,p,h,g,y,_,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,p,h,g,y,_,m)}set(e,n,i,r,s,a,o,l,c,f,p,h,g,y,_,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=f,d[10]=p,d[14]=h,d[3]=g,d[7]=y,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),a=1/Hr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=a*f,g=a*p,y=o*f,_=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=g+y*c,n[5]=h-_*c,n[9]=-o*l,n[2]=_-h*c,n[6]=y+g*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*f,g=l*p,y=c*f,_=c*p;n[0]=h+_*o,n[4]=y*o-g,n[8]=a*c,n[1]=a*p,n[5]=a*f,n[9]=-o,n[2]=g*o-y,n[6]=_+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*f,g=l*p,y=c*f,_=c*p;n[0]=h-_*o,n[4]=-a*p,n[8]=y+g*o,n[1]=g+y*o,n[5]=a*f,n[9]=_-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*f,g=a*p,y=o*f,_=o*p;n[0]=l*f,n[4]=y*c-g,n[8]=h*c+_,n[1]=l*p,n[5]=_*c+h,n[9]=g*c-y,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,g=a*c,y=o*l,_=o*c;n[0]=l*f,n[4]=_-h*p,n[8]=y*p+g,n[1]=p,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=g*p+y,n[10]=h-_*p}else if(e.order==="XZY"){const h=a*l,g=a*c,y=o*l,_=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=h*p+_,n[5]=a*f,n[9]=g*p-y,n[2]=y*p-g,n[6]=o*f,n[10]=_*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dM,e,fM)}lookAt(e,n,i){const r=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),Ti.crossVectors(i,un),Ti.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ti.crossVectors(i,un)),Ti.normalize(),Po.crossVectors(un,Ti),r[0]=Ti.x,r[4]=Po.x,r[8]=un.x,r[1]=Ti.y,r[5]=Po.y,r[9]=un.y,r[2]=Ti.z,r[6]=Po.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],h=i[9],g=i[13],y=i[2],_=i[6],m=i[10],d=i[14],x=i[3],v=i[7],M=i[11],R=i[15],C=r[0],T=r[4],N=r[8],b=r[12],w=r[1],L=r[5],F=r[9],z=r[13],P=r[2],j=r[6],V=r[10],Y=r[14],D=r[3],$=r[7],J=r[11],le=r[15];return s[0]=a*C+o*w+l*P+c*D,s[4]=a*T+o*L+l*j+c*$,s[8]=a*N+o*F+l*V+c*J,s[12]=a*b+o*z+l*Y+c*le,s[1]=f*C+p*w+h*P+g*D,s[5]=f*T+p*L+h*j+g*$,s[9]=f*N+p*F+h*V+g*J,s[13]=f*b+p*z+h*Y+g*le,s[2]=y*C+_*w+m*P+d*D,s[6]=y*T+_*L+m*j+d*$,s[10]=y*N+_*F+m*V+d*J,s[14]=y*b+_*z+m*Y+d*le,s[3]=x*C+v*w+M*P+R*D,s[7]=x*T+v*L+M*j+R*$,s[11]=x*N+v*F+M*V+R*J,s[15]=x*b+v*z+M*Y+R*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],p=e[6],h=e[10],g=e[14],y=e[3],_=e[7],m=e[11],d=e[15];return y*(+s*l*p-r*c*p-s*o*h+i*c*h+r*o*g-i*l*g)+_*(+n*l*g-n*c*h+s*a*h-r*a*g+r*c*f-s*l*f)+m*(+n*c*p-n*o*g-s*a*p+i*a*g+s*o*f-i*c*f)+d*(-r*o*f-n*l*p+n*o*h+r*a*p-i*a*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],p=e[9],h=e[10],g=e[11],y=e[12],_=e[13],m=e[14],d=e[15],x=p*m*c-_*h*c+_*l*g-o*m*g-p*l*d+o*h*d,v=y*h*c-f*m*c-y*l*g+a*m*g+f*l*d-a*h*d,M=f*_*c-y*p*c+y*o*g-a*_*g-f*o*d+a*p*d,R=y*p*l-f*_*l-y*o*h+a*_*h+f*o*m-a*p*m,C=n*x+i*v+r*M+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=x*T,e[1]=(_*h*s-p*m*s-_*r*g+i*m*g+p*r*d-i*h*d)*T,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*d+i*l*d)*T,e[3]=(p*l*s-o*h*s-p*r*c+i*h*c+o*r*g-i*l*g)*T,e[4]=v*T,e[5]=(f*m*s-y*h*s+y*r*g-n*m*g-f*r*d+n*h*d)*T,e[6]=(y*l*s-a*m*s-y*r*c+n*m*c+a*r*d-n*l*d)*T,e[7]=(a*h*s-f*l*s+f*r*c-n*h*c-a*r*g+n*l*g)*T,e[8]=M*T,e[9]=(y*p*s-f*_*s-y*i*g+n*_*g+f*i*d-n*p*d)*T,e[10]=(a*_*s-y*o*s+y*i*c-n*_*c-a*i*d+n*o*d)*T,e[11]=(f*o*s-a*p*s-f*i*c+n*p*c+a*i*g-n*o*g)*T,e[12]=R*T,e[13]=(f*_*r-y*p*r+y*i*h-n*_*h-f*i*m+n*p*m)*T,e[14]=(y*o*r-a*_*r-y*i*l+n*_*l+a*i*m-n*o*m)*T,e[15]=(a*p*r-f*o*r+f*i*l-n*p*l-a*i*h+n*o*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,p=o+o,h=s*c,g=s*f,y=s*p,_=a*f,m=a*p,d=o*p,x=l*c,v=l*f,M=l*p,R=i.x,C=i.y,T=i.z;return r[0]=(1-(_+d))*R,r[1]=(g+M)*R,r[2]=(y-v)*R,r[3]=0,r[4]=(g-M)*C,r[5]=(1-(h+d))*C,r[6]=(m+x)*C,r[7]=0,r[8]=(y+v)*T,r[9]=(m-x)*T,r[10]=(1-(h+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Hr.set(r[0],r[1],r[2]).length();const a=Hr.set(r[4],r[5],r[6]).length(),o=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Pn.copy(this);const c=1/s,f=1/a,p=1/o;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=f,Pn.elements[5]*=f,Pn.elements[6]*=f,Pn.elements[8]*=p,Pn.elements[9]*=p,Pn.elements[10]*=p,n.setFromRotationMatrix(Pn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=hi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),p=(n+e)/(n-e),h=(i+r)/(i-r);let g,y;if(o===hi)g=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===Yl)g=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=hi){const l=this.elements,c=1/(n-e),f=1/(i-r),p=1/(a-s),h=(n+e)*c,g=(i+r)*f;let y,_;if(o===hi)y=(a+s)*p,_=-2*p;else if(o===Yl)y=s*p,_=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Hr=new H,Pn=new ht,dM=new H(0,0,0),fM=new H(1,1,1),Ti=new H,Po=new H,un=new H,Xp=new ht,$p=new Qa;class _i{constructor(e=0,n=0,i=0,r=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],p=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Xp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return $p.setFromEuler(this),this.setFromQuaternion($p,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class kf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hM=0;const Yp=new H,Vr=new Qa,ri=new ht,Lo=new H,sa=new H,pM=new H,mM=new Qa,qp=new H(1,0,0),Kp=new H(0,1,0),Zp=new H(0,0,1),Qp={type:"added"},gM={type:"removed"},Gr={type:"childadded",child:null},gu={type:"childremoved",child:null};class Gt extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new H,n=new _i,i=new Qa,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ue}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(qp,e)}rotateY(e){return this.rotateOnAxis(Kp,e)}rotateZ(e){return this.rotateOnAxis(Zp,e)}translateOnAxis(e,n){return Yp.copy(e).applyQuaternion(this.quaternion),this.position.add(Yp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(qp,e)}translateY(e){return this.translateOnAxis(Kp,e)}translateZ(e){return this.translateOnAxis(Zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Lo.copy(e):Lo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(sa,Lo,this.up):ri.lookAt(Lo,sa,this.up),this.quaternion.setFromRotationMatrix(ri),r&&(ri.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(ri),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qp),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(gM),gu.child=e,this.dispatchEvent(gu),gu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qp),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,pM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,mM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),p=a(e.shapes),h=a(e.skeletons),g=a(e.animations),y=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new H(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new H,si=new H,xu=new H,ai=new H,Wr=new H,Xr=new H,Jp=new H,vu=new H,_u=new H,yu=new H;class kn{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ln.subVectors(e,n),r.cross(Ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ln.subVectors(r,n),si.subVectors(i,n),xu.subVectors(e,n);const a=Ln.dot(Ln),o=Ln.dot(si),l=Ln.dot(xu),c=si.dot(si),f=si.dot(xu),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const h=1/p,g=(c*l-o*f)*h,y=(a*f-o*l)*h;return s.set(1-g-y,y,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ai.x),l.addScaledVector(a,ai.y),l.addScaledVector(o,ai.z),l)}static isFrontFacing(e,n,i,r){return Ln.subVectors(i,n),si.subVectors(e,n),Ln.cross(si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Ln.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Wr.subVectors(r,i),Xr.subVectors(s,i),vu.subVectors(e,i);const l=Wr.dot(vu),c=Xr.dot(vu);if(l<=0&&c<=0)return n.copy(i);_u.subVectors(e,r);const f=Wr.dot(_u),p=Xr.dot(_u);if(f>=0&&p<=f)return n.copy(r);const h=l*p-f*c;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(Wr,a);yu.subVectors(e,s);const g=Wr.dot(yu),y=Xr.dot(yu);if(y>=0&&g<=y)return n.copy(s);const _=g*c-l*y;if(_<=0&&c>=0&&y<=0)return o=c/(c-y),n.copy(i).addScaledVector(Xr,o);const m=f*y-g*p;if(m<=0&&p-f>=0&&g-y>=0)return Jp.subVectors(s,r),o=(p-f)/(p-f+(g-y)),n.copy(r).addScaledVector(Jp,o);const d=1/(m+_+h);return a=_*d,o=h*d,n.copy(i).addScaledVector(Wr,a).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _x={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Do={h:0,s:0,l:0};function Su(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class He{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=tM(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Su(a,s,e+1/3),this.g=Su(a,s,e),this.b=Su(a,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=In){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=In){const i=_x[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}copyLinearToSRGB(e){return this.r=lu(e.r),this.g=lu(e.g),this.b=lu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return Je.fromWorkingColorSpace(Bt.copy(this),e),Math.round(tn(Bt.r*255,0,255))*65536+Math.round(tn(Bt.g*255,0,255))*256+Math.round(tn(Bt.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,s=Bt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=f<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=In){Je.fromWorkingColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==In?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+n,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ci),e.getHSL(Do);const i=au(Ci.h,Do.h,n),r=au(Ci.s,Do.s,n),s=au(Ci.l,Do.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new He;He.NAMES=_x;let xM=0;class Dr extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=bs,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Rd,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ad&&(i.blendSrc=this.blendSrc),this.blendDst!==Rd&&(i.blendDst=this.blendDst),this.blendEquation!==gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zf extends Dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=ox,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new H,Uo=new Be;class ln{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ud,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Of("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Uo.fromBufferAttribute(this,n),Uo.applyMatrix3(e),this.setXY(n,Uo.x,Uo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Kn(n,this.array)),n}setX(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Kn(n,this.array)),n}setY(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Kn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Kn(n,this.array)),n}setW(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ud&&(e.usage=this.usage),e}}class yx extends ln{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Sx extends ln{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class jn extends ln{constructor(e,n,i){super(new Float32Array(e),n,i)}}let vM=0;const yn=new ht,Mu=new Gt,$r=new H,dn=new Ja,aa=new Ja,Nt=new H;class gn extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gx(e)?Sx:yx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,i){return yn.makeTranslation(e,n,i),this.applyMatrix4(yn),this}scale(e,n,i){return yn.makeScale(e,n,i),this.applyMatrix4(yn),this}lookAt(e){return Mu.lookAt(e),Mu.updateMatrix(),this.applyMatrix4(Mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new jn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];aa.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(dn.min,aa.min),dn.expandByPoint(Nt),Nt.addVectors(dn.max,aa.max),dn.expandByPoint(Nt)):(dn.expandByPoint(aa.min),dn.expandByPoint(aa.max))}dn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Nt.fromBufferAttribute(o,c),l&&($r.fromBufferAttribute(e,c),Nt.add($r)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new H,l[N]=new H;const c=new H,f=new H,p=new H,h=new Be,g=new Be,y=new Be,_=new H,m=new H;function d(N,b,w){c.fromBufferAttribute(i,N),f.fromBufferAttribute(i,b),p.fromBufferAttribute(i,w),h.fromBufferAttribute(s,N),g.fromBufferAttribute(s,b),y.fromBufferAttribute(s,w),f.sub(c),p.sub(c),g.sub(h),y.sub(h);const L=1/(g.x*y.y-y.x*g.y);isFinite(L)&&(_.copy(f).multiplyScalar(y.y).addScaledVector(p,-g.y).multiplyScalar(L),m.copy(p).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(L),o[N].add(_),o[b].add(_),o[w].add(_),l[N].add(m),l[b].add(m),l[w].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let N=0,b=x.length;N<b;++N){const w=x[N],L=w.start,F=w.count;for(let z=L,P=L+F;z<P;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const v=new H,M=new H,R=new H,C=new H;function T(N){R.fromBufferAttribute(r,N),C.copy(R);const b=o[N];v.copy(b),v.sub(R.multiplyScalar(R.dot(b))).normalize(),M.crossVectors(C,b);const L=M.dot(l[N])<0?-1:1;a.setXYZW(N,v.x,v.y,v.z,L)}for(let N=0,b=x.length;N<b;++N){const w=x[N],L=w.start,F=w.count;for(let z=L,P=L+F;z<P;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ln(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,c=new H,f=new H,p=new H;if(e)for(let h=0,g=e.count;h<g;h+=3){const y=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,p=o.normalized,h=new c.constructor(l.length*f);let g=0,y=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?g=l[_]*o.data.stride+o.offset:g=l[_]*f;for(let d=0;d<f;d++)h[y++]=c[g++]}return new ln(h,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,p=c.length;f<p;f++){const h=c[f],g=e(h,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let p=0,h=c.length;p<h;p++){const g=c[p];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],p=s[c];for(let h=0,g=p.length;h<g;h++)f.push(p[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const em=new ht,lr=new _c,Io=new eo,tm=new H,Yr=new H,qr=new H,Kr=new H,wu=new H,Fo=new H,Oo=new Be,ko=new Be,zo=new Be,nm=new H,im=new H,rm=new H,Bo=new H,jo=new H;class Qn extends Gt{constructor(e=new gn,n=new zf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Fo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],p=s[l];f!==0&&(wu.fromBufferAttribute(p,e),a?Fo.addScaledVector(wu,f):Fo.addScaledVector(wu.sub(n),f))}n.add(Fo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(s),lr.copy(e.ray).recast(e.near),!(Io.containsPoint(lr.origin)===!1&&(lr.intersectSphere(Io,tm)===null||lr.origin.distanceToSquared(tm)>(e.far-e.near)**2))&&(em.copy(s).invert(),lr.copy(e.ray).applyMatrix4(em),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,h=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,_=h.length;y<_;y++){const m=h[y],d=a[m.materialIndex],x=Math.max(m.start,g.start),v=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let M=x,R=v;M<R;M+=3){const C=o.getX(M),T=o.getX(M+1),N=o.getX(M+2);r=Ho(this,d,e,i,c,f,p,C,T,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),_=Math.min(o.count,g.start+g.count);for(let m=y,d=_;m<d;m+=3){const x=o.getX(m),v=o.getX(m+1),M=o.getX(m+2);r=Ho(this,a,e,i,c,f,p,x,v,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,_=h.length;y<_;y++){const m=h[y],d=a[m.materialIndex],x=Math.max(m.start,g.start),v=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let M=x,R=v;M<R;M+=3){const C=M,T=M+1,N=M+2;r=Ho(this,d,e,i,c,f,p,C,T,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let m=y,d=_;m<d;m+=3){const x=m,v=m+1,M=m+2;r=Ho(this,a,e,i,c,f,p,x,v,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function _M(t,e,n,i,r,s,a,o){let l;if(e.side===on?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Zi,o),l===null)return null;jo.copy(o),jo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(jo);return c<n.near||c>n.far?null:{distance:c,point:jo.clone(),object:t}}function Ho(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Yr),t.getVertexPosition(l,qr),t.getVertexPosition(c,Kr);const f=_M(t,e,n,i,Yr,qr,Kr,Bo);if(f){r&&(Oo.fromBufferAttribute(r,o),ko.fromBufferAttribute(r,l),zo.fromBufferAttribute(r,c),f.uv=kn.getInterpolation(Bo,Yr,qr,Kr,Oo,ko,zo,new Be)),s&&(Oo.fromBufferAttribute(s,o),ko.fromBufferAttribute(s,l),zo.fromBufferAttribute(s,c),f.uv1=kn.getInterpolation(Bo,Yr,qr,Kr,Oo,ko,zo,new Be)),a&&(nm.fromBufferAttribute(a,o),im.fromBufferAttribute(a,l),rm.fromBufferAttribute(a,c),f.normal=kn.getInterpolation(Bo,Yr,qr,Kr,nm,im,rm,new H),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new H,materialIndex:0};kn.getNormal(Yr,qr,Kr,p.normal),f.face=p}return f}class to extends gn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],p=[];let h=0,g=0;y("z","y","x",-1,-1,i,n,e,a,s,0),y("z","y","x",1,-1,i,n,-e,a,s,1),y("x","z","y",1,1,e,i,n,r,a,2),y("x","z","y",1,-1,e,i,-n,r,a,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new jn(c,3)),this.setAttribute("normal",new jn(f,3)),this.setAttribute("uv",new jn(p,2));function y(_,m,d,x,v,M,R,C,T,N,b){const w=M/T,L=R/N,F=M/2,z=R/2,P=C/2,j=T+1,V=N+1;let Y=0,D=0;const $=new H;for(let J=0;J<V;J++){const le=J*L-z;for(let we=0;we<j;we++){const je=we*w-F;$[_]=je*x,$[m]=le*v,$[d]=P,c.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[d]=C>0?1:-1,f.push($.x,$.y,$.z),p.push(we/T),p.push(1-J/N),Y+=1}}for(let J=0;J<N;J++)for(let le=0;le<T;le++){const we=h+le+j*J,je=h+le+j*(J+1),q=h+(le+1)+j*(J+1),re=h+(le+1)+j*J;l.push(we,je,re),l.push(je,q,re),D+=6}o.addGroup(g,D,b),g+=D,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yt(t){const e={};for(let n=0;n<t.length;n++){const i=Hs(t[n]);for(const r in i)e[r]=i[r]}return e}function yM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Mx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const SM={clone:Hs,merge:Yt};var MM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MM,this.fragmentShader=wM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=yM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class wx extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new H,sm=new Be,am=new Be;class wn extends wx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Id*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(su*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Id*2*Math.atan(Math.tan(su*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,n){return this.getViewBounds(e,sm,am),n.subVectors(am,sm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(su*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Zr=-90,Qr=1;class EM extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(Zr,Qr,e,n);r.layers=this.layers,this.add(r);const s=new wn(Zr,Qr,e,n);s.layers=this.layers,this.add(s);const a=new wn(Zr,Qr,e,n);a.layers=this.layers,this.add(a);const o=new wn(Zr,Qr,e,n);o.layers=this.layers,this.add(o);const l=new wn(Zr,Qr,e,n);l.layers=this.layers,this.add(l);const c=new wn(Zr,Qr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(p,h,g),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Ex extends Zt{constructor(e,n,i,r,s,a,o,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Os,super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bM extends Nr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ex(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:On}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new to(5,5,5),s=new Ji({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Wi});s.uniforms.tEquirect.value=n;const a=new Qn(r,s),o=n.minFilter;return n.minFilter===Mr&&(n.minFilter=On),new EM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Eu=new H,TM=new H,CM=new Ue;class pr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Eu.subVectors(i,n).cross(TM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Eu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||CM.getNormalMatrix(e),r=this.coplanarPoint(Eu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new eo,Vo=new H;class bx{constructor(e=new pr,n=new pr,i=new pr,r=new pr,s=new pr,a=new pr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],f=r[5],p=r[6],h=r[7],g=r[8],y=r[9],_=r[10],m=r[11],d=r[12],x=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,m-g,M-d).normalize(),i[1].setComponents(l+s,h+c,m+g,M+d).normalize(),i[2].setComponents(l+a,h+f,m+y,M+x).normalize(),i[3].setComponents(l-a,h-f,m-y,M-x).normalize(),i[4].setComponents(l-o,h-p,m-_,M-v).normalize(),n===hi)i[5].setComponents(l+o,h+p,m+_,M+v).normalize();else if(n===Yl)i[5].setComponents(o,p,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Vo.x=r.normal.x>0?e.max.x:e.min.x,Vo.y=r.normal.y>0?e.max.y:e.min.y,Vo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function AM(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,p=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),o.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const f=l.array,p=l._updateRange,h=l.updateRanges;if(t.bindBuffer(c,o),p.count===-1&&h.length===0&&t.bufferSubData(c,0,f),h.length!==0){for(let g=0,y=h.length;g<y;g++){const _=h[g];t.bufferSubData(c,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}p.count!==-1&&(t.bufferSubData(c,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count),p.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class yc extends gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,p=e/o,h=n/l,g=[],y=[],_=[],m=[];for(let d=0;d<f;d++){const x=d*h-a;for(let v=0;v<c;v++){const M=v*p-s;y.push(M,-x,0),_.push(0,0,1),m.push(v/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<o;x++){const v=x+c*d,M=x+c*(d+1),R=x+1+c*(d+1),C=x+1+c*d;g.push(v,M,C),g.push(M,R,C)}this.setIndex(g),this.setAttribute("position",new jn(y,3)),this.setAttribute("normal",new jn(_,3)),this.setAttribute("uv",new jn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.width,e.height,e.widthSegments,e.heightSegments)}}var RM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NM=`#ifdef USE_ALPHAHASH
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
#endif`,PM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IM=`#ifdef USE_AOMAP
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
#endif`,FM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OM=`#ifdef USE_BATCHING
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
#endif`,kM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,zM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,HM=`#ifdef USE_IRIDESCENCE
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
#endif`,VM=`#ifdef USE_BUMPMAP
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
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,QM=`#define PI 3.141592653589793
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
} // validated`,JM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ew=`vec3 transformedNormal = objectNormal;
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
#endif`,tw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sw="gl_FragColor = linearToOutputTexel( gl_FragColor );",aw=`
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
}`,ow=`#ifdef USE_ENVMAP
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
#endif`,lw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cw=`#ifdef USE_ENVMAP
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
#endif`,uw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dw=`#ifdef USE_ENVMAP
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
#endif`,fw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gw=`#ifdef USE_GRADIENTMAP
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
}`,xw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_w=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yw=`uniform bool receiveShadow;
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
#endif`,Sw=`#ifdef USE_ENVMAP
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
#endif`,Mw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ww=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ew=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tw=`PhysicalMaterial material;
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
#endif`,Cw=`struct PhysicalMaterial {
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
}`,Aw=`
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
#endif`,Rw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Iw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ow=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kw=`#if defined( USE_POINTS_UV )
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
#endif`,zw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gw=`#ifdef USE_MORPHTARGETS
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
#endif`,Ww=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$w=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zw=`#ifdef USE_NORMALMAP
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
#endif`,Qw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hE=`float getShadowMask() {
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
}`,pE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mE=`#ifdef USE_SKINNING
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
#endif`,gE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xE=`#ifdef USE_SKINNING
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
#endif`,vE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_E=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ME=`#ifdef USE_TRANSMISSION
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
#endif`,wE=`#ifdef USE_TRANSMISSION
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
#endif`,EE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RE=`uniform sampler2D t2D;
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
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`#include <common>
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
}`,IE=`#if DEPTH_PACKING == 3200
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
}`,FE=`#define DISTANCE
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
}`,OE=`#define DISTANCE
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
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`uniform float scale;
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
}`,jE=`uniform vec3 diffuse;
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
}`,HE=`#include <common>
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
}`,VE=`uniform vec3 diffuse;
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
}`,GE=`#define LAMBERT
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
}`,WE=`#define LAMBERT
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
}`,XE=`#define MATCAP
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
}`,$E=`#define MATCAP
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
}`,YE=`#define NORMAL
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
}`,qE=`#define NORMAL
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
}`,KE=`#define PHONG
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
}`,ZE=`#define PHONG
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
}`,QE=`#define STANDARD
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
}`,JE=`#define STANDARD
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
}`,e1=`#define TOON
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
}`,t1=`#define TOON
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
}`,n1=`uniform float size;
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
}`,i1=`uniform vec3 diffuse;
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
}`,r1=`#include <common>
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
}`,s1=`uniform vec3 color;
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
}`,a1=`uniform float rotation;
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
}`,o1=`uniform vec3 diffuse;
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
}`,De={alphahash_fragment:RM,alphahash_pars_fragment:NM,alphamap_fragment:PM,alphamap_pars_fragment:LM,alphatest_fragment:DM,alphatest_pars_fragment:UM,aomap_fragment:IM,aomap_pars_fragment:FM,batching_pars_vertex:OM,batching_vertex:kM,begin_vertex:zM,beginnormal_vertex:BM,bsdfs:jM,iridescence_fragment:HM,bumpmap_pars_fragment:VM,clipping_planes_fragment:GM,clipping_planes_pars_fragment:WM,clipping_planes_pars_vertex:XM,clipping_planes_vertex:$M,color_fragment:YM,color_pars_fragment:qM,color_pars_vertex:KM,color_vertex:ZM,common:QM,cube_uv_reflection_fragment:JM,defaultnormal_vertex:ew,displacementmap_pars_vertex:tw,displacementmap_vertex:nw,emissivemap_fragment:iw,emissivemap_pars_fragment:rw,colorspace_fragment:sw,colorspace_pars_fragment:aw,envmap_fragment:ow,envmap_common_pars_fragment:lw,envmap_pars_fragment:cw,envmap_pars_vertex:uw,envmap_physical_pars_fragment:Sw,envmap_vertex:dw,fog_vertex:fw,fog_pars_vertex:hw,fog_fragment:pw,fog_pars_fragment:mw,gradientmap_pars_fragment:gw,lightmap_pars_fragment:xw,lights_lambert_fragment:vw,lights_lambert_pars_fragment:_w,lights_pars_begin:yw,lights_toon_fragment:Mw,lights_toon_pars_fragment:ww,lights_phong_fragment:Ew,lights_phong_pars_fragment:bw,lights_physical_fragment:Tw,lights_physical_pars_fragment:Cw,lights_fragment_begin:Aw,lights_fragment_maps:Rw,lights_fragment_end:Nw,logdepthbuf_fragment:Pw,logdepthbuf_pars_fragment:Lw,logdepthbuf_pars_vertex:Dw,logdepthbuf_vertex:Uw,map_fragment:Iw,map_pars_fragment:Fw,map_particle_fragment:Ow,map_particle_pars_fragment:kw,metalnessmap_fragment:zw,metalnessmap_pars_fragment:Bw,morphinstance_vertex:jw,morphcolor_vertex:Hw,morphnormal_vertex:Vw,morphtarget_pars_vertex:Gw,morphtarget_vertex:Ww,normal_fragment_begin:Xw,normal_fragment_maps:$w,normal_pars_fragment:Yw,normal_pars_vertex:qw,normal_vertex:Kw,normalmap_pars_fragment:Zw,clearcoat_normal_fragment_begin:Qw,clearcoat_normal_fragment_maps:Jw,clearcoat_pars_fragment:eE,iridescence_pars_fragment:tE,opaque_fragment:nE,packing:iE,premultiplied_alpha_fragment:rE,project_vertex:sE,dithering_fragment:aE,dithering_pars_fragment:oE,roughnessmap_fragment:lE,roughnessmap_pars_fragment:cE,shadowmap_pars_fragment:uE,shadowmap_pars_vertex:dE,shadowmap_vertex:fE,shadowmask_pars_fragment:hE,skinbase_vertex:pE,skinning_pars_vertex:mE,skinning_vertex:gE,skinnormal_vertex:xE,specularmap_fragment:vE,specularmap_pars_fragment:_E,tonemapping_fragment:yE,tonemapping_pars_fragment:SE,transmission_fragment:ME,transmission_pars_fragment:wE,uv_pars_fragment:EE,uv_pars_vertex:bE,uv_vertex:TE,worldpos_vertex:CE,background_vert:AE,background_frag:RE,backgroundCube_vert:NE,backgroundCube_frag:PE,cube_vert:LE,cube_frag:DE,depth_vert:UE,depth_frag:IE,distanceRGBA_vert:FE,distanceRGBA_frag:OE,equirect_vert:kE,equirect_frag:zE,linedashed_vert:BE,linedashed_frag:jE,meshbasic_vert:HE,meshbasic_frag:VE,meshlambert_vert:GE,meshlambert_frag:WE,meshmatcap_vert:XE,meshmatcap_frag:$E,meshnormal_vert:YE,meshnormal_frag:qE,meshphong_vert:KE,meshphong_frag:ZE,meshphysical_vert:QE,meshphysical_frag:JE,meshtoon_vert:e1,meshtoon_frag:t1,points_vert:n1,points_frag:i1,shadow_vert:r1,shadow_frag:s1,sprite_vert:a1,sprite_frag:o1},de={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},$n={basic:{uniforms:Yt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Yt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new He(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Yt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Yt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Yt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new He(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Yt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Yt([de.points,de.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Yt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Yt([de.common,de.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Yt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Yt([de.sprite,de.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Yt([de.common,de.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Yt([de.lights,de.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};$n.physical={uniforms:Yt([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Go={r:0,b:0,g:0},ur=new _i,l1=new ht;function c1(t,e,n,i,r,s,a){const o=new He(0);let l=s===!0?0:1,c,f,p=null,h=0,g=null;function y(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?n:e).get(v)),v}function _(x){let v=!1;const M=y(x);M===null?d(o,l):M&&M.isColor&&(d(M,1),v=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,v){const M=y(v);M&&(M.isCubeTexture||M.mapping===gc)?(f===void 0&&(f=new Qn(new to(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Hs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),ur.copy(v.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(l1.makeRotationFromEuler(ur)),f.material.toneMapped=Je.getTransfer(M.colorSpace)!==lt,(p!==M||h!==M.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,p=M,h=M.version,g=t.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Qn(new yc(2,2),new Ji({name:"BackgroundMaterial",uniforms:Hs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Je.getTransfer(M.colorSpace)!==lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||h!==M.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,p=M,h=M.version,g=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function d(x,v){x.getRGB(Go,Mx(t)),i.buffers.color.setClear(Go.r,Go.g,Go.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,d(o,l)},render:_,addToRenderList:m}}function u1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(w,L,F,z,P){let j=!1;const V=p(z,F,L);s!==V&&(s=V,c(s.object)),j=g(w,z,F,P),j&&y(w,z,F,P),P!==null&&e.update(P,t.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,M(w,L,F,z),P!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function l(){return t.createVertexArray()}function c(w){return t.bindVertexArray(w)}function f(w){return t.deleteVertexArray(w)}function p(w,L,F){const z=F.wireframe===!0;let P=i[w.id];P===void 0&&(P={},i[w.id]=P);let j=P[L.id];j===void 0&&(j={},P[L.id]=j);let V=j[z];return V===void 0&&(V=h(l()),j[z]=V),V}function h(w){const L=[],F=[],z=[];for(let P=0;P<n;P++)L[P]=0,F[P]=0,z[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:z,object:w,attributes:{},index:null}}function g(w,L,F,z){const P=s.attributes,j=L.attributes;let V=0;const Y=F.getAttributes();for(const D in Y)if(Y[D].location>=0){const J=P[D];let le=j[D];if(le===void 0&&(D==="instanceMatrix"&&w.instanceMatrix&&(le=w.instanceMatrix),D==="instanceColor"&&w.instanceColor&&(le=w.instanceColor)),J===void 0||J.attribute!==le||le&&J.data!==le.data)return!0;V++}return s.attributesNum!==V||s.index!==z}function y(w,L,F,z){const P={},j=L.attributes;let V=0;const Y=F.getAttributes();for(const D in Y)if(Y[D].location>=0){let J=j[D];J===void 0&&(D==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),D==="instanceColor"&&w.instanceColor&&(J=w.instanceColor));const le={};le.attribute=J,J&&J.data&&(le.data=J.data),P[D]=le,V++}s.attributes=P,s.attributesNum=V,s.index=z}function _(){const w=s.newAttributes;for(let L=0,F=w.length;L<F;L++)w[L]=0}function m(w){d(w,0)}function d(w,L){const F=s.newAttributes,z=s.enabledAttributes,P=s.attributeDivisors;F[w]=1,z[w]===0&&(t.enableVertexAttribArray(w),z[w]=1),P[w]!==L&&(t.vertexAttribDivisor(w,L),P[w]=L)}function x(){const w=s.newAttributes,L=s.enabledAttributes;for(let F=0,z=L.length;F<z;F++)L[F]!==w[F]&&(t.disableVertexAttribArray(F),L[F]=0)}function v(w,L,F,z,P,j,V){V===!0?t.vertexAttribIPointer(w,L,F,P,j):t.vertexAttribPointer(w,L,F,z,P,j)}function M(w,L,F,z){_();const P=z.attributes,j=F.getAttributes(),V=L.defaultAttributeValues;for(const Y in j){const D=j[Y];if(D.location>=0){let $=P[Y];if($===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),$!==void 0){const J=$.normalized,le=$.itemSize,we=e.get($);if(we===void 0)continue;const je=we.buffer,q=we.type,re=we.bytesPerElement,pe=q===t.INT||q===t.UNSIGNED_INT||$.gpuType===cx;if($.isInterleavedBufferAttribute){const ue=$.data,Ie=ue.stride,Le=$.offset;if(ue.isInstancedInterleavedBuffer){for(let Xe=0;Xe<D.locationSize;Xe++)d(D.location+Xe,ue.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Xe=0;Xe<D.locationSize;Xe++)m(D.location+Xe);t.bindBuffer(t.ARRAY_BUFFER,je);for(let Xe=0;Xe<D.locationSize;Xe++)v(D.location+Xe,le/D.locationSize,q,J,Ie*re,(Le+le/D.locationSize*Xe)*re,pe)}else{if($.isInstancedBufferAttribute){for(let ue=0;ue<D.locationSize;ue++)d(D.location+ue,$.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ue=0;ue<D.locationSize;ue++)m(D.location+ue);t.bindBuffer(t.ARRAY_BUFFER,je);for(let ue=0;ue<D.locationSize;ue++)v(D.location+ue,le/D.locationSize,q,J,le*re,le/D.locationSize*ue*re,pe)}}else if(V!==void 0){const J=V[Y];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(D.location,J);break;case 3:t.vertexAttrib3fv(D.location,J);break;case 4:t.vertexAttrib4fv(D.location,J);break;default:t.vertexAttrib1fv(D.location,J)}}}}x()}function R(){N();for(const w in i){const L=i[w];for(const F in L){const z=L[F];for(const P in z)f(z[P].object),delete z[P];delete L[F]}delete i[w]}}function C(w){if(i[w.id]===void 0)return;const L=i[w.id];for(const F in L){const z=L[F];for(const P in z)f(z[P].object),delete z[P];delete L[F]}delete i[w.id]}function T(w){for(const L in i){const F=i[L];if(F[w.id]===void 0)continue;const z=F[w.id];for(const P in z)f(z[P].object),delete z[P];delete F[w.id]}}function N(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function d1(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function a(c,f,p){p!==0&&(t.drawArraysInstanced(i,c,f,p),n.update(f,i,p))}function o(c,f,p){if(p===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<p;g++)this.render(c[g],f[g]);else{h.multiDrawArraysWEBGL(i,c,0,f,0,p);let g=0;for(let y=0;y<p;y++)g+=f[y];n.update(g,i,1)}}function l(c,f,p,h){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<c.length;y++)a(c[y],f[y],h[y]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,p);let y=0;for(let _=0;_<p;_++)y+=f[_];for(let _=0;_<h.length;_++)n.update(y,i,h[_])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function f1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Zn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const T=C===xc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Qi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Fi&&!T)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const p=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,maxTextures:h,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:M,maxSamples:R}}function h1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new pr,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const g=p.length!==0||h||i!==0||r;return r=h,i=p.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){n=f(p,h,0)},this.setState=function(p,h,g){const y=p.clippingPlanes,_=p.clipIntersection,m=p.clipShadows,d=t.get(p);if(!r||y===null||y.length===0||s&&!m)s?f(null):c();else{const x=s?0:i,v=x*4;let M=d.clippingState||null;l.value=M,M=f(y,h,v,g);for(let R=0;R!==v;++R)M[R]=n[R];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,h,g,y){const _=p!==null?p.length:0;let m=null;if(_!==0){if(m=l.value,y!==!0||m===null){const d=g+_*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,M=g;v!==_;++v,M+=4)a.copy(p[v]).applyMatrix4(x,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function p1(t){let e=new WeakMap;function n(a,o){return o===Nd?a.mapping=Os:o===Pd&&(a.mapping=ks),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Nd||o===Pd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new bM(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class m1 extends wx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const xs=4,om=[.125,.215,.35,.446,.526,.582],xr=20,bu=new m1,lm=new He;let Tu=null,Cu=0,Au=0,Ru=!1;const mr=(1+Math.sqrt(5))/2,Jr=1/mr,cm=[new H(-mr,Jr,0),new H(mr,Jr,0),new H(-Jr,0,mr),new H(Jr,0,mr),new H(0,mr,-Jr),new H(0,mr,Jr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class um{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Tu=this._renderer.getRenderTarget(),Cu=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tu,Cu,Au),this._renderer.xr.enabled=Ru,e.scissorTest=!1,Wo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Os||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tu=this._renderer.getRenderTarget(),Cu=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:xc,format:Zn,colorSpace:ir,depthBuffer:!1},r=dm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g1(s)),this._blurMaterial=x1(s,e,n)}return r}_compileMaterial(e){const n=new Qn(this._lodPlanes[0],e);this._renderer.compile(n,bu)}_sceneToCubeUV(e,n,i,r){const o=new wn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,h=f.toneMapping;f.getClearColor(lm),f.toneMapping=Xi,f.autoClear=!1;const g=new zf({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),y=new Qn(new to,g);let _=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,_=!0):(g.color.copy(lm),_=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):x===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const v=this._cubeSize;Wo(r,x*v,d>2?v:0,v,v),f.setRenderTarget(r),_&&f.render(y,o),f.render(e,o)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=h,f.autoClear=p,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Os||e.mapping===ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Qn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Wo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,bu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=cm[(r-s-1)%cm.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new Qn(this._lodPlanes[r],c),h=c.uniforms,g=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*xr-1),_=s/y,m=isFinite(s)?1+Math.floor(f*_):xr;m>xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xr}`);const d=[];let x=0;for(let T=0;T<xr;++T){const N=T/_,b=Math.exp(-N*N/2);d.push(b),T===0?x+=b:T<m&&(x+=2*b)}for(let T=0;T<d.length;T++)d[T]=d[T]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=y,h.mipInt.value=v-i;const M=this._sizeLods[r],R=3*M*(r>v-xs?r-v+xs:0),C=4*(this._cubeSize-M);Wo(n,R,C,3*M,2*M),l.setRenderTarget(n),l.render(p,bu)}}function g1(t){const e=[],n=[],i=[];let r=t;const s=t-xs+1+om.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-xs?l=om[a-t+xs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),f=-c,p=1+c,h=[f,f,p,f,p,p,f,f,p,p,f,p],g=6,y=6,_=3,m=2,d=1,x=new Float32Array(_*y*g),v=new Float32Array(m*y*g),M=new Float32Array(d*y*g);for(let C=0;C<g;C++){const T=C%3*2/3-1,N=C>2?0:-1,b=[T,N,0,T+2/3,N,0,T+2/3,N+1,0,T,N,0,T+2/3,N+1,0,T,N+1,0];x.set(b,_*y*C),v.set(h,m*y*C);const w=[C,C,C,C,C,C];M.set(w,d*y*C)}const R=new gn;R.setAttribute("position",new ln(x,_)),R.setAttribute("uv",new ln(v,m)),R.setAttribute("faceIndex",new ln(M,d)),e.push(R),r>xs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function dm(t,e,n){const i=new Nr(t,e,n);return i.texture.mapping=gc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function x1(t,e,n){const i=new Float32Array(xr),r=new H(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bf(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function fm(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bf(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function hm(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Bf(){return`

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
	`}function v1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Nd||l===Pd,f=l===Os||l===ks;if(c||f){let p=e.get(o);const h=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new um(t)),p=c?n.fromEquirectangular(o,p):n.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const g=o.image;return c&&g&&g.height>0||f&&g&&r(g)?(n===null&&(n=new um(t)),p=c?n.fromEquirectangular(o):n.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function _1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Of("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function y1(t,e,n,i){const r={},s=new WeakMap;function a(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const _=h.morphAttributes[y];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}h.removeEventListener("dispose",a),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(p,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(p){const h=p.attributes;for(const y in h)e.update(h[y],t.ARRAY_BUFFER);const g=p.morphAttributes;for(const y in g){const _=g[y];for(let m=0,d=_.length;m<d;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(p){const h=[],g=p.index,y=p.attributes.position;let _=0;if(g!==null){const x=g.array;_=g.version;for(let v=0,M=x.length;v<M;v+=3){const R=x[v+0],C=x[v+1],T=x[v+2];h.push(R,C,C,T,T,R)}}else if(y!==void 0){const x=y.array;_=y.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const R=v+0,C=v+1,T=v+2;h.push(R,C,C,T,T,R)}}else return;const m=new(gx(h)?Sx:yx)(h,1);m.version=_;const d=s.get(p);d&&e.remove(d),s.set(p,m)}function f(p){const h=s.get(p);if(h){const g=p.index;g!==null&&h.version<g.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function S1(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,g){t.drawElements(i,g,s,h*a),n.update(g,i,1)}function c(h,g,y){y!==0&&(t.drawElementsInstanced(i,g,s,h*a,y),n.update(g,i,y))}function f(h,g,y){if(y===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<y;m++)this.render(h[m]/a,g[m]);else{_.multiDrawElementsWEBGL(i,g,0,s,h,0,y);let m=0;for(let d=0;d<y;d++)m+=g[d];n.update(m,i,1)}}function p(h,g,y,_){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/a,g[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,h,0,_,0,y);let d=0;for(let x=0;x<y;x++)d+=g[x];for(let x=0;x<_.length;x++)n.update(d,i,_[x])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function M1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function w1(t,e,n){const i=new WeakMap,r=new Ut;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0;let h=i.get(o);if(h===void 0||h.count!==p){let w=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",w)};var g=w;h!==void 0&&h.texture.dispose();const y=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let M=0;y===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let R=o.attributes.position.count*M,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const T=new Float32Array(R*C*4*p),N=new vx(T,R,C,p);N.type=Fi,N.needsUpdate=!0;const b=M*4;for(let L=0;L<p;L++){const F=d[L],z=x[L],P=v[L],j=R*C*4*L;for(let V=0;V<F.count;V++){const Y=V*b;y===!0&&(r.fromBufferAttribute(F,V),T[j+Y+0]=r.x,T[j+Y+1]=r.y,T[j+Y+2]=r.z,T[j+Y+3]=0),_===!0&&(r.fromBufferAttribute(z,V),T[j+Y+4]=r.x,T[j+Y+5]=r.y,T[j+Y+6]=r.z,T[j+Y+7]=0),m===!0&&(r.fromBufferAttribute(P,V),T[j+Y+8]=r.x,T[j+Y+9]=r.y,T[j+Y+10]=r.z,T[j+Y+11]=P.itemSize===4?r.w:1)}}h={count:p,texture:N,size:new Be(R,C)},i.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let y=0;for(let m=0;m<c.length;m++)y+=c[m];const _=o.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function E1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,p=e.get(l,f);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return p}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class Cx extends Zt{constructor(e,n,i,r,s,a,o,l,c,f=Ts){if(f!==Ts&&f!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Ts&&(i=zs),i===void 0&&f===js&&(i=Bs),super(null,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Ax=new Zt,Rx=new Cx(1,1);Rx.compareFunction=mx;const Nx=new vx,Px=new cM,Lx=new Ex,pm=[],mm=[],gm=new Float32Array(16),xm=new Float32Array(9),vm=new Float32Array(4);function $s(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=pm[r];if(s===void 0&&(s=new Float32Array(r),pm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Sc(t,e){let n=mm[e];n===void 0&&(n=new Int32Array(e),mm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function b1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function T1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function C1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function A1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function R1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;vm.set(i),t.uniformMatrix2fv(this.addr,!1,vm),Ct(n,i)}}function N1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;xm.set(i),t.uniformMatrix3fv(this.addr,!1,xm),Ct(n,i)}}function P1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;gm.set(i),t.uniformMatrix4fv(this.addr,!1,gm),Ct(n,i)}}function L1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function D1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function U1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function I1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function F1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function O1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function k1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function B1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Rx:Ax;n.setTexture2D(e||s,r)}function j1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Px,r)}function H1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Lx,r)}function V1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Nx,r)}function G1(t){switch(t){case 5126:return b1;case 35664:return T1;case 35665:return C1;case 35666:return A1;case 35674:return R1;case 35675:return N1;case 35676:return P1;case 5124:case 35670:return L1;case 35667:case 35671:return D1;case 35668:case 35672:return U1;case 35669:case 35673:return I1;case 5125:return F1;case 36294:return O1;case 36295:return k1;case 36296:return z1;case 35678:case 36198:case 36298:case 36306:case 35682:return B1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return V1}}function W1(t,e){t.uniform1fv(this.addr,e)}function X1(t,e){const n=$s(e,this.size,2);t.uniform2fv(this.addr,n)}function $1(t,e){const n=$s(e,this.size,3);t.uniform3fv(this.addr,n)}function Y1(t,e){const n=$s(e,this.size,4);t.uniform4fv(this.addr,n)}function q1(t,e){const n=$s(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function K1(t,e){const n=$s(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Z1(t,e){const n=$s(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Q1(t,e){t.uniform1iv(this.addr,e)}function J1(t,e){t.uniform2iv(this.addr,e)}function eb(t,e){t.uniform3iv(this.addr,e)}function tb(t,e){t.uniform4iv(this.addr,e)}function nb(t,e){t.uniform1uiv(this.addr,e)}function ib(t,e){t.uniform2uiv(this.addr,e)}function rb(t,e){t.uniform3uiv(this.addr,e)}function sb(t,e){t.uniform4uiv(this.addr,e)}function ab(t,e,n){const i=this.cache,r=e.length,s=Sc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Ax,s[a])}function ob(t,e,n){const i=this.cache,r=e.length,s=Sc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Px,s[a])}function lb(t,e,n){const i=this.cache,r=e.length,s=Sc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Lx,s[a])}function cb(t,e,n){const i=this.cache,r=e.length,s=Sc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Nx,s[a])}function ub(t){switch(t){case 5126:return W1;case 35664:return X1;case 35665:return $1;case 35666:return Y1;case 35674:return q1;case 35675:return K1;case 35676:return Z1;case 5124:case 35670:return Q1;case 35667:case 35671:return J1;case 35668:case 35672:return eb;case 35669:case 35673:return tb;case 5125:return nb;case 36294:return ib;case 36295:return rb;case 36296:return sb;case 35678:case 36198:case 36298:case 36306:case 35682:return ab;case 35679:case 36299:case 36307:return ob;case 35680:case 36300:case 36308:case 36293:return lb;case 36289:case 36303:case 36311:case 36292:return cb}}class db{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=G1(n.type)}}class fb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ub(n.type)}}class hb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Nu=/(\w+)(\])?(\[|\.)?/g;function _m(t,e){t.seq.push(e),t.map[e.id]=e}function pb(t,e,n){const i=t.name,r=i.length;for(Nu.lastIndex=0;;){const s=Nu.exec(i),a=Nu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){_m(n,c===void 0?new db(o,t,e):new fb(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new hb(o),_m(n,p)),n=p}}}class pl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);pb(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function ym(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const mb=37297;let gb=0;function xb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function vb(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===$l&&n===Xl?i="LinearDisplayP3ToLinearSRGB":e===Xl&&n===$l&&(i="LinearSRGBToLinearDisplayP3"),t){case ir:case vc:return[i,"LinearTransferOETF"];case In:case Ff:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Sm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+xb(t.getShaderSource(e),a)}else return r}function _b(t,e){const n=vb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function yb(t,e){let n;switch(e){case TS:n="Linear";break;case CS:n="Reinhard";break;case AS:n="OptimizedCineon";break;case RS:n="ACESFilmic";break;case PS:n="AgX";break;case LS:n="Neutral";break;case NS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Sb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function Mb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function wb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function xa(t){return t!==""}function Mm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Eb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fd(t){return t.replace(Eb,Tb)}const bb=new Map;function Tb(t,e){let n=De[e];if(n===void 0){const i=bb.get(e);if(i!==void 0)n=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fd(n)}const Cb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Em(t){return t.replace(Cb,Ab)}function Ab(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Rb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ax?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Qy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function Nb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Os:case ks:e="ENVMAP_TYPE_CUBE";break;case gc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function Lb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ox:e="ENVMAP_BLENDING_MULTIPLY";break;case ES:e="ENVMAP_BLENDING_MIX";break;case bS:e="ENVMAP_BLENDING_ADD";break}return e}function Db(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Ub(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Rb(n),c=Nb(n),f=Pb(n),p=Lb(n),h=Db(n),g=Sb(n),y=Mb(s),_=r.createProgram();let m,d,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(xa).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(xa).join(`
`),d.length>0&&(d+=`
`)):(m=[bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),d=[bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Xi?"#define TONE_MAPPING":"",n.toneMapping!==Xi?De.tonemapping_pars_fragment:"",n.toneMapping!==Xi?yb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,_b("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xa).join(`
`)),a=Fd(a),a=Mm(a,n),a=wm(a,n),o=Fd(o),o=Mm(o,n),o=wm(o,n),a=Em(a),o=Em(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=x+m+a,M=x+d+o,R=ym(r,r.VERTEX_SHADER,v),C=ym(r,r.FRAGMENT_SHADER,M);r.attachShader(_,R),r.attachShader(_,C),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(L){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(R).trim(),P=r.getShaderInfoLog(C).trim();let j=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,R,C);else{const Y=Sm(r,R,"vertex"),D=Sm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+Y+`
`+D)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(z===""||P==="")&&(V=!1);V&&(L.diagnostics={runnable:j,programLog:F,vertexShader:{log:z,prefix:m},fragmentShader:{log:P,prefix:d}})}r.deleteShader(R),r.deleteShader(C),N=new pl(r,_),b=wb(r,_)}let N;this.getUniforms=function(){return N===void 0&&T(this),N};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(_,mb)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=gb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}let Ib=0;class Fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Ob(e),n.set(e,i)),i}}class Ob{constructor(e){this.id=Ib++,this.code=e,this.usedTimes=0}}function kb(t,e,n,i,r,s,a){const o=new kf,l=new Fb,c=new Set,f=[],p=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,w,L,F,z){const P=F.fog,j=z.geometry,V=b.isMeshStandardMaterial?F.environment:null,Y=(b.isMeshStandardMaterial?n:e).get(b.envMap||V),D=Y&&Y.mapping===gc?Y.image.height:null,$=y[b.type];b.precision!==null&&(g=r.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const J=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,le=J!==void 0?J.length:0;let we=0;j.morphAttributes.position!==void 0&&(we=1),j.morphAttributes.normal!==void 0&&(we=2),j.morphAttributes.color!==void 0&&(we=3);let je,q,re,pe;if($){const tt=$n[$];je=tt.vertexShader,q=tt.fragmentShader}else je=b.vertexShader,q=b.fragmentShader,l.update(b),re=l.getVertexShaderID(b),pe=l.getFragmentShaderID(b);const ue=t.getRenderTarget(),Ie=z.isInstancedMesh===!0,Le=z.isBatchedMesh===!0,Xe=!!b.map,I=!!b.matcap,Ge=!!Y,ke=!!b.aoMap,rt=!!b.lightMap,O=!!b.bumpMap,ce=!!b.normalMap,ge=!!b.displacementMap,ie=!!b.emissiveMap,Ce=!!b.metalnessMap,A=!!b.roughnessMap,S=b.anisotropy>0,G=b.clearcoat>0,Q=b.dispersion>0,ee=b.iridescence>0,te=b.sheen>0,be=b.transmission>0,fe=S&&!!b.anisotropyMap,he=G&&!!b.clearcoatMap,Fe=G&&!!b.clearcoatNormalMap,se=G&&!!b.clearcoatRoughnessMap,Me=ee&&!!b.iridescenceMap,We=ee&&!!b.iridescenceThicknessMap,Ne=te&&!!b.sheenColorMap,me=te&&!!b.sheenRoughnessMap,Oe=!!b.specularMap,$e=!!b.specularColorMap,vt=!!b.specularIntensityMap,U=be&&!!b.transmissionMap,xe=be&&!!b.thicknessMap,K=!!b.gradientMap,Z=!!b.alphaMap,oe=b.alphaTest>0,Pe=!!b.alphaHash,qe=!!b.extensions;let _t=Xi;b.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(_t=t.toneMapping);const At={shaderID:$,shaderType:b.type,shaderName:b.name,vertexShader:je,fragmentShader:q,defines:b.defines,customVertexShaderID:re,customFragmentShaderID:pe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Le,batchingColor:Le&&z._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&z.instanceColor!==null,instancingMorph:Ie&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ue===null?t.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:ir,alphaToCoverage:!!b.alphaToCoverage,map:Xe,matcap:I,envMap:Ge,envMapMode:Ge&&Y.mapping,envMapCubeUVHeight:D,aoMap:ke,lightMap:rt,bumpMap:O,normalMap:ce,displacementMap:h&&ge,emissiveMap:ie,normalMapObjectSpace:ce&&b.normalMapType===$S,normalMapTangentSpace:ce&&b.normalMapType===XS,metalnessMap:Ce,roughnessMap:A,anisotropy:S,anisotropyMap:fe,clearcoat:G,clearcoatMap:he,clearcoatNormalMap:Fe,clearcoatRoughnessMap:se,dispersion:Q,iridescence:ee,iridescenceMap:Me,iridescenceThicknessMap:We,sheen:te,sheenColorMap:Ne,sheenRoughnessMap:me,specularMap:Oe,specularColorMap:$e,specularIntensityMap:vt,transmission:be,transmissionMap:U,thicknessMap:xe,gradientMap:K,opaque:b.transparent===!1&&b.blending===bs&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:oe,alphaHash:Pe,combine:b.combine,mapUv:Xe&&_(b.map.channel),aoMapUv:ke&&_(b.aoMap.channel),lightMapUv:rt&&_(b.lightMap.channel),bumpMapUv:O&&_(b.bumpMap.channel),normalMapUv:ce&&_(b.normalMap.channel),displacementMapUv:ge&&_(b.displacementMap.channel),emissiveMapUv:ie&&_(b.emissiveMap.channel),metalnessMapUv:Ce&&_(b.metalnessMap.channel),roughnessMapUv:A&&_(b.roughnessMap.channel),anisotropyMapUv:fe&&_(b.anisotropyMap.channel),clearcoatMapUv:he&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:We&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(b.sheenRoughnessMap.channel),specularMapUv:Oe&&_(b.specularMap.channel),specularColorMapUv:$e&&_(b.specularColorMap.channel),specularIntensityMapUv:vt&&_(b.specularIntensityMap.channel),transmissionMapUv:U&&_(b.transmissionMap.channel),thicknessMapUv:xe&&_(b.thicknessMap.channel),alphaMapUv:Z&&_(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ce||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(Xe||Z),fog:!!P,useFog:b.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:we,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:_t,decodeVideoTexture:Xe&&b.map.isVideoTexture===!0&&Je.getTransfer(b.map.colorSpace)===lt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ui,flipSided:b.side===on,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:qe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:qe&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function d(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)w.push(L),w.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(x(w,b),v(w,b),w.push(t.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function x(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function v(b,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.doubleSided&&o.enable(10),w.flipSided&&o.enable(11),w.useDepthPacking&&o.enable(12),w.dithering&&o.enable(13),w.transmission&&o.enable(14),w.sheen&&o.enable(15),w.opaque&&o.enable(16),w.pointsUvs&&o.enable(17),w.decodeVideoTexture&&o.enable(18),w.alphaToCoverage&&o.enable(19),b.push(o.mask)}function M(b){const w=y[b.type];let L;if(w){const F=$n[w];L=SM.clone(F.uniforms)}else L=b.uniforms;return L}function R(b,w){let L;for(let F=0,z=f.length;F<z;F++){const P=f[F];if(P.cacheKey===w){L=P,++L.usedTimes;break}}return L===void 0&&(L=new Ub(t,w,b,s),f.push(L)),L}function C(b){if(--b.usedTimes===0){const w=f.indexOf(b);f[w]=f[f.length-1],f.pop(),b.destroy()}}function T(b){l.remove(b)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:R,releaseProgram:C,releaseShaderCache:T,programs:f,dispose:N}}function zb(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Bb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Tm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Cm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(p,h,g,y,_,m){let d=t[e];return d===void 0?(d={id:p.id,object:p,geometry:h,material:g,groupOrder:y,renderOrder:p.renderOrder,z:_,group:m},t[e]=d):(d.id=p.id,d.object=p,d.geometry=h,d.material=g,d.groupOrder=y,d.renderOrder=p.renderOrder,d.z=_,d.group=m),e++,d}function o(p,h,g,y,_,m){const d=a(p,h,g,y,_,m);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):n.push(d)}function l(p,h,g,y,_,m){const d=a(p,h,g,y,_,m);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):n.unshift(d)}function c(p,h){n.length>1&&n.sort(p||Bb),i.length>1&&i.sort(h||Tm),r.length>1&&r.sort(h||Tm)}function f(){for(let p=e,h=t.length;p<h;p++){const g=t[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:c}}function jb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Cm,t.set(i,[a])):r>=s.length?(a=new Cm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Hb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new He};break;case"SpotLight":n={position:new H,direction:new H,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function Vb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Gb=0;function Wb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Xb(t){const e=new Hb,n=Vb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new ht,a=new ht;function o(c){let f=0,p=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let g=0,y=0,_=0,m=0,d=0,x=0,v=0,M=0,R=0,C=0,T=0;c.sort(Wb);for(let b=0,w=c.length;b<w;b++){const L=c[b],F=L.color,z=L.intensity,P=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=F.r*z,p+=F.g*z,h+=F.b*z;else if(L.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(L.sh.coefficients[V],z);T++}else if(L.isDirectionalLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,D=n.get(L);D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,i.directionalShadow[g]=D,i.directionalShadowMap[g]=j,i.directionalShadowMatrix[g]=L.shadow.matrix,x++}i.directional[g]=V,g++}else if(L.isSpotLight){const V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(F).multiplyScalar(z),V.distance=P,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,i.spot[_]=V;const Y=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,Y.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[_]=Y.matrix,L.castShadow){const D=n.get(L);D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,i.spotShadow[_]=D,i.spotShadowMap[_]=j,M++}_++}else if(L.isRectAreaLight){const V=e.get(L);V.color.copy(F).multiplyScalar(z),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=V,m++}else if(L.isPointLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const Y=L.shadow,D=n.get(L);D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,D.shadowCameraNear=Y.camera.near,D.shadowCameraFar=Y.camera.far,i.pointShadow[y]=D,i.pointShadowMap[y]=j,i.pointShadowMatrix[y]=L.shadow.matrix,v++}i.point[y]=V,y++}else if(L.isHemisphereLight){const V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(z),V.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[d]=V,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==g||N.pointLength!==y||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==d||N.numDirectionalShadows!==x||N.numPointShadows!==v||N.numSpotShadows!==M||N.numSpotMaps!==R||N.numLightProbes!==T)&&(i.directional.length=g,i.spot.length=_,i.rectArea.length=m,i.point.length=y,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,N.directionalLength=g,N.pointLength=y,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=d,N.numDirectionalShadows=x,N.numPointShadows=v,N.numSpotShadows=M,N.numSpotMaps=R,N.numLightProbes=T,i.version=Gb++)}function l(c,f){let p=0,h=0,g=0,y=0,_=0;const m=f.matrixWorldInverse;for(let d=0,x=c.length;d<x;d++){const v=c[d];if(v.isDirectionalLight){const M=i.directional[p];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(v.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),g++}else if(v.isRectAreaLight){const M=i.rectArea[y];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Am(t){const e=new Xb(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function a(f){i.push(f)}function o(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function $b(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Am(t),e.set(r,[o])):s>=a.length?(o=new Am(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class Yb extends Dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qb extends Dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zb=`uniform sampler2D shadow_pass;
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
}`;function Qb(t,e,n){let i=new bx;const r=new Be,s=new Be,a=new Ut,o=new Yb({depthPacking:WS}),l=new qb,c={},f=n.maxTextureSize,p={[Zi]:on,[on]:Zi,[ui]:ui},h=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:Kb,fragmentShader:Zb}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const y=new gn;y.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Qn(y,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ax;let d=this.type;this.render=function(C,T,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=t.getRenderTarget(),w=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Wi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=d!==oi&&this.type===oi,P=d===oi&&this.type!==oi;for(let j=0,V=C.length;j<V;j++){const Y=C[j],D=Y.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const $=D.getFrameExtents();if(r.multiply($),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/$.x),r.x=s.x*$.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/$.y),r.y=s.y*$.y,D.mapSize.y=s.y)),D.map===null||z===!0||P===!0){const le=this.type!==oi?{minFilter:bn,magFilter:bn}:{};D.map!==null&&D.map.dispose(),D.map=new Nr(r.x,r.y,le),D.map.texture.name=Y.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const J=D.getViewportCount();for(let le=0;le<J;le++){const we=D.getViewport(le);a.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),F.viewport(a),D.updateMatrices(Y,le),i=D.getFrustum(),M(T,N,D.camera,Y,this.type)}D.isPointLightShadow!==!0&&this.type===oi&&x(D,N),D.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(b,w,L)};function x(C,T){const N=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Nr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(T,null,N,h,_,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(T,null,N,g,_,null)}function v(C,T,N,b){let w=null;const L=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)w=L;else if(w=N.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=w.uuid,z=T.uuid;let P=c[F];P===void 0&&(P={},c[F]=P);let j=P[z];j===void 0&&(j=w.clone(),P[z]=j,T.addEventListener("dispose",R)),w=j}if(w.visible=T.visible,w.wireframe=T.wireframe,b===oi?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:p[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,N.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const F=t.properties.get(w);F.light=N}return w}function M(C,T,N,b,w){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===oi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const z=e.update(C),P=C.material;if(Array.isArray(P)){const j=z.groups;for(let V=0,Y=j.length;V<Y;V++){const D=j[V],$=P[D.materialIndex];if($&&$.visible){const J=v(C,$,b,w);C.onBeforeShadow(t,C,T,N,z,J,D),t.renderBufferDirect(N,null,z,J,C,D),C.onAfterShadow(t,C,T,N,z,J,D)}}}else if(P.visible){const j=v(C,P,b,w);C.onBeforeShadow(t,C,T,N,z,j,null),t.renderBufferDirect(N,null,z,j,C,null),C.onAfterShadow(t,C,T,N,z,j,null)}}const F=C.children;for(let z=0,P=F.length;z<P;z++)M(F[z],T,N,b,w)}function R(C){C.target.removeEventListener("dispose",R);for(const N in c){const b=c[N],w=C.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function Jb(t){function e(){let U=!1;const xe=new Ut;let K=null;const Z=new Ut(0,0,0,0);return{setMask:function(oe){K!==oe&&!U&&(t.colorMask(oe,oe,oe,oe),K=oe)},setLocked:function(oe){U=oe},setClear:function(oe,Pe,qe,_t,At){At===!0&&(oe*=_t,Pe*=_t,qe*=_t),xe.set(oe,Pe,qe,_t),Z.equals(xe)===!1&&(t.clearColor(oe,Pe,qe,_t),Z.copy(xe))},reset:function(){U=!1,K=null,Z.set(-1,0,0,0)}}}function n(){let U=!1,xe=null,K=null,Z=null;return{setTest:function(oe){oe?pe(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(oe){xe!==oe&&!U&&(t.depthMask(oe),xe=oe)},setFunc:function(oe){if(K!==oe){switch(oe){case xS:t.depthFunc(t.NEVER);break;case vS:t.depthFunc(t.ALWAYS);break;case _S:t.depthFunc(t.LESS);break;case Vl:t.depthFunc(t.LEQUAL);break;case yS:t.depthFunc(t.EQUAL);break;case SS:t.depthFunc(t.GEQUAL);break;case MS:t.depthFunc(t.GREATER);break;case wS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}K=oe}},setLocked:function(oe){U=oe},setClear:function(oe){Z!==oe&&(t.clearDepth(oe),Z=oe)},reset:function(){U=!1,xe=null,K=null,Z=null}}}function i(){let U=!1,xe=null,K=null,Z=null,oe=null,Pe=null,qe=null,_t=null,At=null;return{setTest:function(tt){U||(tt?pe(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(tt){xe!==tt&&!U&&(t.stencilMask(tt),xe=tt)},setFunc:function(tt,Vn,Gn){(K!==tt||Z!==Vn||oe!==Gn)&&(t.stencilFunc(tt,Vn,Gn),K=tt,Z=Vn,oe=Gn)},setOp:function(tt,Vn,Gn){(Pe!==tt||qe!==Vn||_t!==Gn)&&(t.stencilOp(tt,Vn,Gn),Pe=tt,qe=Vn,_t=Gn)},setLocked:function(tt){U=tt},setClear:function(tt){At!==tt&&(t.clearStencil(tt),At=tt)},reset:function(){U=!1,xe=null,K=null,Z=null,oe=null,Pe=null,qe=null,_t=null,At=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},f={},p=new WeakMap,h=[],g=null,y=!1,_=null,m=null,d=null,x=null,v=null,M=null,R=null,C=new He(0,0,0),T=0,N=!1,b=null,w=null,L=null,F=null,z=null;const P=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,V=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Y)[1]),j=V>=1):Y.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),j=V>=2);let D=null,$={};const J=t.getParameter(t.SCISSOR_BOX),le=t.getParameter(t.VIEWPORT),we=new Ut().fromArray(J),je=new Ut().fromArray(le);function q(U,xe,K,Z){const oe=new Uint8Array(4),Pe=t.createTexture();t.bindTexture(U,Pe),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<K;qe++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(xe+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return Pe}const re={};re[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),pe(t.DEPTH_TEST),s.setFunc(Vl),O(!1),ce(dp),pe(t.CULL_FACE),ke(Wi);function pe(U){c[U]!==!0&&(t.enable(U),c[U]=!0)}function ue(U){c[U]!==!1&&(t.disable(U),c[U]=!1)}function Ie(U,xe){return f[U]!==xe?(t.bindFramebuffer(U,xe),f[U]=xe,U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=xe),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function Le(U,xe){let K=h,Z=!1;if(U){K=p.get(xe),K===void 0&&(K=[],p.set(xe,K));const oe=U.textures;if(K.length!==oe.length||K[0]!==t.COLOR_ATTACHMENT0){for(let Pe=0,qe=oe.length;Pe<qe;Pe++)K[Pe]=t.COLOR_ATTACHMENT0+Pe;K.length=oe.length,Z=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,Z=!0);Z&&t.drawBuffers(K)}function Xe(U){return g!==U?(t.useProgram(U),g=U,!0):!1}const I={[gr]:t.FUNC_ADD,[eS]:t.FUNC_SUBTRACT,[tS]:t.FUNC_REVERSE_SUBTRACT};I[nS]=t.MIN,I[iS]=t.MAX;const Ge={[rS]:t.ZERO,[sS]:t.ONE,[aS]:t.SRC_COLOR,[Ad]:t.SRC_ALPHA,[fS]:t.SRC_ALPHA_SATURATE,[uS]:t.DST_COLOR,[lS]:t.DST_ALPHA,[oS]:t.ONE_MINUS_SRC_COLOR,[Rd]:t.ONE_MINUS_SRC_ALPHA,[dS]:t.ONE_MINUS_DST_COLOR,[cS]:t.ONE_MINUS_DST_ALPHA,[hS]:t.CONSTANT_COLOR,[pS]:t.ONE_MINUS_CONSTANT_COLOR,[mS]:t.CONSTANT_ALPHA,[gS]:t.ONE_MINUS_CONSTANT_ALPHA};function ke(U,xe,K,Z,oe,Pe,qe,_t,At,tt){if(U===Wi){y===!0&&(ue(t.BLEND),y=!1);return}if(y===!1&&(pe(t.BLEND),y=!0),U!==Jy){if(U!==_||tt!==N){if((m!==gr||v!==gr)&&(t.blendEquation(t.FUNC_ADD),m=gr,v=gr),tt)switch(U){case bs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gs:t.blendFunc(t.ONE,t.ONE);break;case fp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case bs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gs:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case fp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}d=null,x=null,M=null,R=null,C.set(0,0,0),T=0,_=U,N=tt}return}oe=oe||xe,Pe=Pe||K,qe=qe||Z,(xe!==m||oe!==v)&&(t.blendEquationSeparate(I[xe],I[oe]),m=xe,v=oe),(K!==d||Z!==x||Pe!==M||qe!==R)&&(t.blendFuncSeparate(Ge[K],Ge[Z],Ge[Pe],Ge[qe]),d=K,x=Z,M=Pe,R=qe),(_t.equals(C)===!1||At!==T)&&(t.blendColor(_t.r,_t.g,_t.b,At),C.copy(_t),T=At),_=U,N=!1}function rt(U,xe){U.side===ui?ue(t.CULL_FACE):pe(t.CULL_FACE);let K=U.side===on;xe&&(K=!K),O(K),U.blending===bs&&U.transparent===!1?ke(Wi):ke(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const Z=U.stencilWrite;a.setTest(Z),Z&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ie(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function O(U){b!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),b=U)}function ce(U){U!==Ky?(pe(t.CULL_FACE),U!==w&&(U===dp?t.cullFace(t.BACK):U===Zy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),w=U}function ge(U){U!==L&&(j&&t.lineWidth(U),L=U)}function ie(U,xe,K){U?(pe(t.POLYGON_OFFSET_FILL),(F!==xe||z!==K)&&(t.polygonOffset(xe,K),F=xe,z=K)):ue(t.POLYGON_OFFSET_FILL)}function Ce(U){U?pe(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function A(U){U===void 0&&(U=t.TEXTURE0+P-1),D!==U&&(t.activeTexture(U),D=U)}function S(U,xe,K){K===void 0&&(D===null?K=t.TEXTURE0+P-1:K=D);let Z=$[K];Z===void 0&&(Z={type:void 0,texture:void 0},$[K]=Z),(Z.type!==U||Z.texture!==xe)&&(D!==K&&(t.activeTexture(K),D=K),t.bindTexture(U,xe||re[U]),Z.type=U,Z.texture=xe)}function G(){const U=$[D];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function We(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(U){we.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),we.copy(U))}function me(U){je.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),je.copy(U))}function Oe(U,xe){let K=l.get(xe);K===void 0&&(K=new WeakMap,l.set(xe,K));let Z=K.get(U);Z===void 0&&(Z=t.getUniformBlockIndex(xe,U.name),K.set(U,Z))}function $e(U,xe){const Z=l.get(xe).get(U);o.get(xe)!==Z&&(t.uniformBlockBinding(xe,Z,U.__bindingPointIndex),o.set(xe,Z))}function vt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},D=null,$={},f={},p=new WeakMap,h=[],g=null,y=!1,_=null,m=null,d=null,x=null,v=null,M=null,R=null,C=new He(0,0,0),T=0,N=!1,b=null,w=null,L=null,F=null,z=null,we.set(0,0,t.canvas.width,t.canvas.height),je.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:pe,disable:ue,bindFramebuffer:Ie,drawBuffers:Le,useProgram:Xe,setBlending:ke,setMaterial:rt,setFlipSided:O,setCullFace:ce,setLineWidth:ge,setPolygonOffset:ie,setScissorTest:Ce,activeTexture:A,bindTexture:S,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:ee,texImage2D:Me,texImage3D:We,updateUBOMapping:Oe,uniformBlockBinding:$e,texStorage2D:Fe,texStorage3D:se,texSubImage2D:te,texSubImage3D:be,compressedTexSubImage2D:fe,compressedTexSubImage3D:he,scissor:Ne,viewport:me,reset:vt}}function eT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,f=new WeakMap;let p;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return g?new OffscreenCanvas(A,S):ql("canvas")}function _(A,S,G){let Q=1;const ee=Ce(A);if((ee.width>G||ee.height>G)&&(Q=G/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const te=Math.floor(Q*ee.width),be=Math.floor(Q*ee.height);p===void 0&&(p=y(te,be));const fe=S?y(te,be):p;return fe.width=te,fe.height=be,fe.getContext("2d").drawImage(A,0,0,te,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+te+"x"+be+")."),fe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==bn&&A.minFilter!==On}function d(A){t.generateMipmap(A)}function x(A,S,G,Q,ee=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let te=S;if(S===t.RED&&(G===t.FLOAT&&(te=t.R32F),G===t.HALF_FLOAT&&(te=t.R16F),G===t.UNSIGNED_BYTE&&(te=t.R8)),S===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(te=t.R8UI),G===t.UNSIGNED_SHORT&&(te=t.R16UI),G===t.UNSIGNED_INT&&(te=t.R32UI),G===t.BYTE&&(te=t.R8I),G===t.SHORT&&(te=t.R16I),G===t.INT&&(te=t.R32I)),S===t.RG&&(G===t.FLOAT&&(te=t.RG32F),G===t.HALF_FLOAT&&(te=t.RG16F),G===t.UNSIGNED_BYTE&&(te=t.RG8)),S===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(te=t.RG8UI),G===t.UNSIGNED_SHORT&&(te=t.RG16UI),G===t.UNSIGNED_INT&&(te=t.RG32UI),G===t.BYTE&&(te=t.RG8I),G===t.SHORT&&(te=t.RG16I),G===t.INT&&(te=t.RG32I)),S===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),S===t.RGBA){const be=ee?Wl:Je.getTransfer(Q);G===t.FLOAT&&(te=t.RGBA32F),G===t.HALF_FLOAT&&(te=t.RGBA16F),G===t.UNSIGNED_BYTE&&(te=be===lt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function v(A,S){let G;return A?S===null||S===zs||S===Bs?G=t.DEPTH24_STENCIL8:S===Fi?G=t.DEPTH32F_STENCIL8:S===Gl&&(G=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===zs||S===Bs?G=t.DEPTH_COMPONENT24:S===Fi?G=t.DEPTH_COMPONENT32F:S===Gl&&(G=t.DEPTH_COMPONENT16),G}function M(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==bn&&A.minFilter!==On?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){const S=A.target;S.removeEventListener("dispose",R),T(S),S.isVideoTexture&&f.delete(S)}function C(A){const S=A.target;S.removeEventListener("dispose",C),b(S)}function T(A){const S=i.get(A);if(S.__webglInit===void 0)return;const G=A.source,Q=h.get(G);if(Q){const ee=Q[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&N(A),Object.keys(Q).length===0&&h.delete(G)}i.remove(A)}function N(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const G=A.source,Q=h.get(G);delete Q[S.__cacheKey],a.memory.textures--}function b(A){const S=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let ee=0;ee<S.__webglFramebuffer[Q].length;ee++)t.deleteFramebuffer(S.__webglFramebuffer[Q][ee]);else t.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)t.deleteFramebuffer(S.__webglFramebuffer[Q]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=A.textures;for(let Q=0,ee=G.length;Q<ee;Q++){const te=i.get(G[Q]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),a.memory.textures--),i.remove(G[Q])}i.remove(A)}let w=0;function L(){w=0}function F(){const A=w;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),w+=1,A}function z(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function P(A,S){const G=i.get(A);if(A.isVideoTexture&&ge(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{je(G,A,S);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+S)}function j(A,S){const G=i.get(A);if(A.version>0&&G.__version!==A.version){je(G,A,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+S)}function V(A,S){const G=i.get(A);if(A.version>0&&G.__version!==A.version){je(G,A,S);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+S)}function Y(A,S){const G=i.get(A);if(A.version>0&&G.__version!==A.version){q(G,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+S)}const D={[Ld]:t.REPEAT,[Sr]:t.CLAMP_TO_EDGE,[Dd]:t.MIRRORED_REPEAT},$={[bn]:t.NEAREST,[DS]:t.NEAREST_MIPMAP_NEAREST,[Eo]:t.NEAREST_MIPMAP_LINEAR,[On]:t.LINEAR,[Jc]:t.LINEAR_MIPMAP_NEAREST,[Mr]:t.LINEAR_MIPMAP_LINEAR},J={[YS]:t.NEVER,[eM]:t.ALWAYS,[qS]:t.LESS,[mx]:t.LEQUAL,[KS]:t.EQUAL,[JS]:t.GEQUAL,[ZS]:t.GREATER,[QS]:t.NOTEQUAL};function le(A,S){if(S.type===Fi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===On||S.magFilter===Jc||S.magFilter===Eo||S.magFilter===Mr||S.minFilter===On||S.minFilter===Jc||S.minFilter===Eo||S.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,D[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,D[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,D[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,$[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,$[S.minFilter]),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,J[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===bn||S.minFilter!==Eo&&S.minFilter!==Mr||S.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function we(A,S){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",R));const Q=S.source;let ee=h.get(Q);ee===void 0&&(ee={},h.set(Q,ee));const te=z(S);if(te!==A.__cacheKey){ee[te]===void 0&&(ee[te]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ee[te].usedTimes++;const be=ee[A.__cacheKey];be!==void 0&&(ee[A.__cacheKey].usedTimes--,be.usedTimes===0&&N(S)),A.__cacheKey=te,A.__webglTexture=ee[te].texture}return G}function je(A,S,G){let Q=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=t.TEXTURE_3D);const ee=we(A,S),te=S.source;n.bindTexture(Q,A.__webglTexture,t.TEXTURE0+G);const be=i.get(te);if(te.version!==be.__version||ee===!0){n.activeTexture(t.TEXTURE0+G);const fe=Je.getPrimaries(Je.workingColorSpace),he=S.colorSpace===Di?null:Je.getPrimaries(S.colorSpace),Fe=S.colorSpace===Di||fe===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let se=_(S.image,!1,r.maxTextureSize);se=ie(S,se);const Me=s.convert(S.format,S.colorSpace),We=s.convert(S.type);let Ne=x(S.internalFormat,Me,We,S.colorSpace,S.isVideoTexture);le(Q,S);let me;const Oe=S.mipmaps,$e=S.isVideoTexture!==!0,vt=be.__version===void 0||ee===!0,U=te.dataReady,xe=M(S,se);if(S.isDepthTexture)Ne=v(S.format===js,S.type),vt&&($e?n.texStorage2D(t.TEXTURE_2D,1,Ne,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Ne,se.width,se.height,0,Me,We,null));else if(S.isDataTexture)if(Oe.length>0){$e&&vt&&n.texStorage2D(t.TEXTURE_2D,xe,Ne,Oe[0].width,Oe[0].height);for(let K=0,Z=Oe.length;K<Z;K++)me=Oe[K],$e?U&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,me.width,me.height,Me,We,me.data):n.texImage2D(t.TEXTURE_2D,K,Ne,me.width,me.height,0,Me,We,me.data);S.generateMipmaps=!1}else $e?(vt&&n.texStorage2D(t.TEXTURE_2D,xe,Ne,se.width,se.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,Me,We,se.data)):n.texImage2D(t.TEXTURE_2D,0,Ne,se.width,se.height,0,Me,We,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){$e&&vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Ne,Oe[0].width,Oe[0].height,se.depth);for(let K=0,Z=Oe.length;K<Z;K++)if(me=Oe[K],S.format!==Zn)if(Me!==null)if($e){if(U)if(S.layerUpdates.size>0){for(const oe of S.layerUpdates){const Pe=me.width*me.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,oe,me.width,me.height,1,Me,me.data.slice(Pe*oe,Pe*(oe+1)),0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,me.width,me.height,se.depth,Me,me.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Ne,me.width,me.height,se.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,me.width,me.height,se.depth,Me,We,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,Ne,me.width,me.height,se.depth,0,Me,We,me.data)}else{$e&&vt&&n.texStorage2D(t.TEXTURE_2D,xe,Ne,Oe[0].width,Oe[0].height);for(let K=0,Z=Oe.length;K<Z;K++)me=Oe[K],S.format!==Zn?Me!==null?$e?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,me.width,me.height,Me,me.data):n.compressedTexImage2D(t.TEXTURE_2D,K,Ne,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?U&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,me.width,me.height,Me,We,me.data):n.texImage2D(t.TEXTURE_2D,K,Ne,me.width,me.height,0,Me,We,me.data)}else if(S.isDataArrayTexture)if($e){if(vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Ne,se.width,se.height,se.depth),U)if(S.layerUpdates.size>0){let K;switch(We){case t.UNSIGNED_BYTE:switch(Me){case t.ALPHA:K=1;break;case t.LUMINANCE:K=1;break;case t.LUMINANCE_ALPHA:K=2;break;case t.RGB:K=3;break;case t.RGBA:K=4;break;default:throw new Error(`Unknown texel size for format ${Me}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:K=1;break;default:throw new Error(`Unknown texel size for type ${We}.`)}const Z=se.width*se.height*K;for(const oe of S.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,oe,se.width,se.height,1,Me,We,se.data.slice(Z*oe,Z*(oe+1)));S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Me,We,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,se.width,se.height,se.depth,0,Me,We,se.data);else if(S.isData3DTexture)$e?(vt&&n.texStorage3D(t.TEXTURE_3D,xe,Ne,se.width,se.height,se.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Me,We,se.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,se.width,se.height,se.depth,0,Me,We,se.data);else if(S.isFramebufferTexture){if(vt)if($e)n.texStorage2D(t.TEXTURE_2D,xe,Ne,se.width,se.height);else{let K=se.width,Z=se.height;for(let oe=0;oe<xe;oe++)n.texImage2D(t.TEXTURE_2D,oe,Ne,K,Z,0,Me,We,null),K>>=1,Z>>=1}}else if(Oe.length>0){if($e&&vt){const K=Ce(Oe[0]);n.texStorage2D(t.TEXTURE_2D,xe,Ne,K.width,K.height)}for(let K=0,Z=Oe.length;K<Z;K++)me=Oe[K],$e?U&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Me,We,me):n.texImage2D(t.TEXTURE_2D,K,Ne,Me,We,me);S.generateMipmaps=!1}else if($e){if(vt){const K=Ce(se);n.texStorage2D(t.TEXTURE_2D,xe,Ne,K.width,K.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,We,se)}else n.texImage2D(t.TEXTURE_2D,0,Ne,Me,We,se);m(S)&&d(Q),be.__version=te.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function q(A,S,G){if(S.image.length!==6)return;const Q=we(A,S),ee=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+G);const te=i.get(ee);if(ee.version!==te.__version||Q===!0){n.activeTexture(t.TEXTURE0+G);const be=Je.getPrimaries(Je.workingColorSpace),fe=S.colorSpace===Di?null:Je.getPrimaries(S.colorSpace),he=S.colorSpace===Di||be===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Fe=S.isCompressedTexture||S.image[0].isCompressedTexture,se=S.image[0]&&S.image[0].isDataTexture,Me=[];for(let Z=0;Z<6;Z++)!Fe&&!se?Me[Z]=_(S.image[Z],!0,r.maxCubemapSize):Me[Z]=se?S.image[Z].image:S.image[Z],Me[Z]=ie(S,Me[Z]);const We=Me[0],Ne=s.convert(S.format,S.colorSpace),me=s.convert(S.type),Oe=x(S.internalFormat,Ne,me,S.colorSpace),$e=S.isVideoTexture!==!0,vt=te.__version===void 0||Q===!0,U=ee.dataReady;let xe=M(S,We);le(t.TEXTURE_CUBE_MAP,S);let K;if(Fe){$e&&vt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Oe,We.width,We.height);for(let Z=0;Z<6;Z++){K=Me[Z].mipmaps;for(let oe=0;oe<K.length;oe++){const Pe=K[oe];S.format!==Zn?Ne!==null?$e?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,0,0,Pe.width,Pe.height,Ne,Pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,Oe,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,0,0,Pe.width,Pe.height,Ne,me,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,Oe,Pe.width,Pe.height,0,Ne,me,Pe.data)}}}else{if(K=S.mipmaps,$e&&vt){K.length>0&&xe++;const Z=Ce(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Oe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(se){$e?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Me[Z].width,Me[Z].height,Ne,me,Me[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,Me[Z].width,Me[Z].height,0,Ne,me,Me[Z].data);for(let oe=0;oe<K.length;oe++){const qe=K[oe].image[Z].image;$e?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,0,0,qe.width,qe.height,Ne,me,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,Oe,qe.width,qe.height,0,Ne,me,qe.data)}}else{$e?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ne,me,Me[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,Ne,me,Me[Z]);for(let oe=0;oe<K.length;oe++){const Pe=K[oe];$e?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,0,0,Ne,me,Pe.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,Oe,Ne,me,Pe.image[Z])}}}m(S)&&d(t.TEXTURE_CUBE_MAP),te.__version=ee.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function re(A,S,G,Q,ee,te){const be=s.convert(G.format,G.colorSpace),fe=s.convert(G.type),he=x(G.internalFormat,be,fe,G.colorSpace);if(!i.get(S).__hasExternalTextures){const se=Math.max(1,S.width>>te),Me=Math.max(1,S.height>>te);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,te,he,se,Me,S.depth,0,be,fe,null):n.texImage2D(ee,te,he,se,Me,0,be,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),ce(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ee,i.get(G).__webglTexture,0,O(S)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ee,i.get(G).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(A,S,G){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer){const Q=S.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,te=v(S.stencilBuffer,ee),be=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=O(S);ce(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,te,S.width,S.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,te,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,te,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,A)}else{const Q=S.textures;for(let ee=0;ee<Q.length;ee++){const te=Q[ee],be=s.convert(te.format,te.colorSpace),fe=s.convert(te.type),he=x(te.internalFormat,be,fe,te.colorSpace),Fe=O(S);G&&ce(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,he,S.width,S.height):ce(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe,he,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,he,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),P(S.depthTexture,0);const Q=i.get(S.depthTexture).__webglTexture,ee=O(S);if(S.depthTexture.format===Ts)ce(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(S.depthTexture.format===js)ce(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ie(A){const S=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ue(S.__webglFramebuffer,A)}else if(G){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]=t.createRenderbuffer(),pe(S.__webglDepthbuffer[Q],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),pe(S.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(A,S,G){const Q=i.get(A);S!==void 0&&re(Q.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Ie(A)}function Xe(A){const S=A.texture,G=i.get(A),Q=i.get(S);A.addEventListener("dispose",C);const ee=A.textures,te=A.isWebGLCubeRenderTarget===!0,be=ee.length>1;if(be||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=S.version,a.memory.textures++),te){G.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[fe]=[];for(let he=0;he<S.mipmaps.length;he++)G.__webglFramebuffer[fe][he]=t.createFramebuffer()}else G.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)G.__webglFramebuffer[fe]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(be)for(let fe=0,he=ee.length;fe<he;fe++){const Fe=i.get(ee[fe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&ce(A)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let fe=0;fe<ee.length;fe++){const he=ee[fe];G.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[fe]);const Fe=s.convert(he.format,he.colorSpace),se=s.convert(he.type),Me=x(he.internalFormat,Fe,se,he.colorSpace,A.isXRRenderTarget===!0),We=O(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,Me,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,G.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),pe(G.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),le(t.TEXTURE_CUBE_MAP,S);for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)re(G.__webglFramebuffer[fe][he],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,he);else re(G.__webglFramebuffer[fe],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(S)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let fe=0,he=ee.length;fe<he;fe++){const Fe=ee[fe],se=i.get(Fe);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),le(t.TEXTURE_2D,Fe),re(G.__webglFramebuffer,A,Fe,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(Fe)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,Q.__webglTexture),le(fe,S),S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)re(G.__webglFramebuffer[he],A,S,t.COLOR_ATTACHMENT0,fe,he);else re(G.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,fe,0);m(S)&&d(fe),n.unbindTexture()}A.depthBuffer&&Ie(A)}function I(A){const S=A.textures;for(let G=0,Q=S.length;G<Q;G++){const ee=S[G];if(m(ee)){const te=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,be=i.get(ee).__webglTexture;n.bindTexture(te,be),d(te),n.unbindTexture()}}}const Ge=[],ke=[];function rt(A){if(A.samples>0){if(ce(A)===!1){const S=A.textures,G=A.width,Q=A.height;let ee=t.COLOR_BUFFER_BIT;const te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(A),fe=S.length>1;if(fe)for(let he=0;he<S.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let he=0;he<S.length;he++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[he]);const Fe=i.get(S[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Fe,0)}t.blitFramebuffer(0,0,G,Q,0,0,G,Q,ee,t.NEAREST),l===!0&&(Ge.length=0,ke.length=0,Ge.push(t.COLOR_ATTACHMENT0+he),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ge.push(te),ke.push(te),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ke)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ge))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let he=0;he<S.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,be.__webglColorRenderbuffer[he]);const Fe=i.get(S[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function O(A){return Math.min(r.maxSamples,A.samples)}function ce(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ge(A){const S=a.render.frame;f.get(A)!==S&&(f.set(A,S),A.update())}function ie(A,S){const G=A.colorSpace,Q=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==ir&&G!==Di&&(Je.getTransfer(G)===lt?(Q!==Zn||ee!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Ce(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=P,this.setTexture2DArray=j,this.setTexture3D=V,this.setTextureCube=Y,this.rebindTextures=Le,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=re,this.useMultisampledRTT=ce}function tT(t,e){function n(i,r=Di){let s;const a=Je.getTransfer(r);if(i===Qi)return t.UNSIGNED_BYTE;if(i===ux)return t.UNSIGNED_SHORT_4_4_4_4;if(i===dx)return t.UNSIGNED_SHORT_5_5_5_1;if(i===FS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===US)return t.BYTE;if(i===IS)return t.SHORT;if(i===Gl)return t.UNSIGNED_SHORT;if(i===cx)return t.INT;if(i===zs)return t.UNSIGNED_INT;if(i===Fi)return t.FLOAT;if(i===xc)return t.HALF_FLOAT;if(i===OS)return t.ALPHA;if(i===kS)return t.RGB;if(i===Zn)return t.RGBA;if(i===zS)return t.LUMINANCE;if(i===BS)return t.LUMINANCE_ALPHA;if(i===Ts)return t.DEPTH_COMPONENT;if(i===js)return t.DEPTH_STENCIL;if(i===jS)return t.RED;if(i===fx)return t.RED_INTEGER;if(i===HS)return t.RG;if(i===hx)return t.RG_INTEGER;if(i===px)return t.RGBA_INTEGER;if(i===eu||i===tu||i===nu||i===iu)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===eu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===tu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===nu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===iu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===eu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===tu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===nu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===iu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pp||i===mp||i===gp||i===xp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===pp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vp||i===_p||i===yp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vp||i===_p)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sp||i===Mp||i===wp||i===Ep||i===bp||i===Tp||i===Cp||i===Ap||i===Rp||i===Np||i===Pp||i===Lp||i===Dp||i===Up)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Sp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ep)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ap)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Np)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Up)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ru||i===Ip||i===Fp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ru)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ip)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===VS||i===Op||i===kp||i===zp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ru)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Op)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class nT extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class va extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iT={type:"move"};class Pu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new va,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new va,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new va,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=f.position.distanceTo(p.position),g=.02,y=.005;c.inputState.pinching&&h>g+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(iT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new va;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const rT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sT=`
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

}`;class aT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Zt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ji({vertexShader:rT,fragmentShader:sT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Qn(new yc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class oT extends Xs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,p=null,h=null,g=null,y=null;const _=new aT,m=n.getContextAttributes();let d=null,x=null;const v=[],M=[],R=new Be;let C=null;const T=new wn;T.layers.enable(1),T.viewport=new Ut;const N=new wn;N.layers.enable(2),N.viewport=new Ut;const b=[T,N],w=new nT;w.layers.enable(1),w.layers.enable(2);let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let re=v[q];return re===void 0&&(re=new Pu,v[q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(q){let re=v[q];return re===void 0&&(re=new Pu,v[q]=re),re.getGripSpace()},this.getHand=function(q){let re=v[q];return re===void 0&&(re=new Pu,v[q]=re),re.getHandSpace()};function z(q){const re=M.indexOf(q.inputSource);if(re===-1)return;const pe=v[re];pe!==void 0&&(pe.update(q.inputSource,q.frame,c||a),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function P(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",j);for(let q=0;q<v.length;q++){const re=M[q];re!==null&&(M[q]=null,v[q].disconnect(re))}L=null,F=null,_.reset(),e.setRenderTarget(d),g=null,h=null,p=null,r=null,x=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",P),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),x=new Nr(g.framebufferWidth,g.framebufferHeight,{format:Zn,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,pe=null,ue=null;m.depth&&(ue=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=m.stencil?js:Ts,pe=m.stencil?Bs:zs);const Ie={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};p=new XRWebGLBinding(r,n),h=p.createProjectionLayer(Ie),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Nr(h.textureWidth,h.textureHeight,{format:Zn,type:Qi,depthTexture:new Cx(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function j(q){for(let re=0;re<q.removed.length;re++){const pe=q.removed[re],ue=M.indexOf(pe);ue>=0&&(M[ue]=null,v[ue].disconnect(pe))}for(let re=0;re<q.added.length;re++){const pe=q.added[re];let ue=M.indexOf(pe);if(ue===-1){for(let Le=0;Le<v.length;Le++)if(Le>=M.length){M.push(pe),ue=Le;break}else if(M[Le]===null){M[Le]=pe,ue=Le;break}if(ue===-1)break}const Ie=v[ue];Ie&&Ie.connect(pe)}}const V=new H,Y=new H;function D(q,re,pe){V.setFromMatrixPosition(re.matrixWorld),Y.setFromMatrixPosition(pe.matrixWorld);const ue=V.distanceTo(Y),Ie=re.projectionMatrix.elements,Le=pe.projectionMatrix.elements,Xe=Ie[14]/(Ie[10]-1),I=Ie[14]/(Ie[10]+1),Ge=(Ie[9]+1)/Ie[5],ke=(Ie[9]-1)/Ie[5],rt=(Ie[8]-1)/Ie[0],O=(Le[8]+1)/Le[0],ce=Xe*rt,ge=Xe*O,ie=ue/(-rt+O),Ce=ie*-rt;re.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ce),q.translateZ(ie),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const A=Xe+ie,S=I+ie,G=ce-Ce,Q=ge+(ue-Ce),ee=Ge*I/S*A,te=ke*I/S*A;q.projectionMatrix.makePerspective(G,Q,ee,te,A,S),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function $(q,re){re===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(re.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;_.texture!==null&&(q.near=_.depthNear,q.far=_.depthFar),w.near=N.near=T.near=q.near,w.far=N.far=T.far=q.far,(L!==w.near||F!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,F=w.far,T.near=L,T.far=F,N.near=L,N.far=F,T.updateProjectionMatrix(),N.updateProjectionMatrix(),q.updateProjectionMatrix());const re=q.parent,pe=w.cameras;$(w,re);for(let ue=0;ue<pe.length;ue++)$(pe[ue],re);pe.length===2?D(w,T,N):w.projectionMatrix.copy(T.projectionMatrix),J(q,w,re)};function J(q,re,pe){pe===null?q.matrix.copy(re.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply(re.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Id*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(w)};let le=null;function we(q,re){if(f=re.getViewerPose(c||a),y=re,f!==null){const pe=f.views;g!==null&&(e.setRenderTargetFramebuffer(x,g.framebuffer),e.setRenderTarget(x));let ue=!1;pe.length!==w.cameras.length&&(w.cameras.length=0,ue=!0);for(let Le=0;Le<pe.length;Le++){const Xe=pe[Le];let I=null;if(g!==null)I=g.getViewport(Xe);else{const ke=p.getViewSubImage(h,Xe);I=ke.viewport,Le===0&&(e.setRenderTargetTextures(x,ke.colorTexture,h.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(x))}let Ge=b[Le];Ge===void 0&&(Ge=new wn,Ge.layers.enable(Le),Ge.viewport=new Ut,b[Le]=Ge),Ge.matrix.fromArray(Xe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Xe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(I.x,I.y,I.width,I.height),Le===0&&(w.matrix.copy(Ge.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ue===!0&&w.cameras.push(Ge)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Le=p.getDepthInformation(pe[0]);Le&&Le.isValid&&Le.texture&&_.init(e,Le,r.renderState)}}for(let pe=0;pe<v.length;pe++){const ue=M[pe],Ie=v[pe];ue!==null&&Ie!==void 0&&Ie.update(ue,re,c||a)}le&&le(q,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),y=null}const je=new Tx;je.setAnimationLoop(we),this.setAnimationLoop=function(q){le=q},this.dispose=function(){}}}const dr=new _i,lT=new ht;function cT(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Mx(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,x,v,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),p(m,d)):d.isMeshPhongMaterial?(s(m,d),f(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&g(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),y(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,x,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===on&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===on&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d),v=x.envMap,M=x.envMapRotation;v&&(m.envMap.value=v,dr.copy(M),dr.x*=-1,dr.y*=-1,dr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),m.envMapRotation.value.setFromMatrix4(lT.makeRotationFromEuler(dr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,x,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=v*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===on&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uT(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const M=v.program;i.uniformBlockBinding(x,M)}function c(x,v){let M=r[x.id];M===void 0&&(y(x),M=f(x),r[x.id]=M,x.addEventListener("dispose",m));const R=v.program;i.updateUBOMapping(x,R);const C=e.render.frame;s[x.id]!==C&&(h(x),s[x.id]=C)}function f(x){const v=p();x.__bindingPointIndex=v;const M=t.createBuffer(),R=x.__size,C=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,R,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function p(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=r[x.id],M=x.uniforms,R=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,T=M.length;C<T;C++){const N=Array.isArray(M[C])?M[C]:[M[C]];for(let b=0,w=N.length;b<w;b++){const L=N[b];if(g(L,C,b,R)===!0){const F=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let P=0;for(let j=0;j<z.length;j++){const V=z[j],Y=_(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,F+P,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(x,v,M,R){const C=x.value,T=v+"_"+M;if(R[T]===void 0)return typeof C=="number"||typeof C=="boolean"?R[T]=C:R[T]=C.clone(),!0;{const N=R[T];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return R[T]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function y(x){const v=x.uniforms;let M=0;const R=16;for(let T=0,N=v.length;T<N;T++){const b=Array.isArray(v[T])?v[T]:[v[T]];for(let w=0,L=b.length;w<L;w++){const F=b[w],z=Array.isArray(F.value)?F.value:[F.value];for(let P=0,j=z.length;P<j;P++){const V=z[P],Y=_(V),D=M%R;D!==0&&R-D<Y.boundary&&(M+=R-D),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=Y.storage}}}const C=M%R;return C>0&&(M+=R-C),x.__size=M,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const x in r)t.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class dT{constructor(e={}){const{canvas:n=nM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const g=new Uint32Array(4),y=new Int32Array(4);let _=null,m=null;const d=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=In,this.toneMapping=Xi,this.toneMappingExposure=1;const v=this;let M=!1,R=0,C=0,T=null,N=-1,b=null;const w=new Ut,L=new Ut;let F=null;const z=new He(0);let P=0,j=n.width,V=n.height,Y=1,D=null,$=null;const J=new Ut(0,0,j,V),le=new Ut(0,0,j,V);let we=!1;const je=new bx;let q=!1,re=!1;const pe=new ht,ue=new H,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function Xe(){return T===null?Y:1}let I=i;function Ge(E,k){return n.getContext(E,k)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${If}`),n.addEventListener("webglcontextlost",xe,!1),n.addEventListener("webglcontextrestored",K,!1),n.addEventListener("webglcontextcreationerror",Z,!1),I===null){const k="webgl2";if(I=Ge(k,E),I===null)throw Ge(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ke,rt,O,ce,ge,ie,Ce,A,S,G,Q,ee,te,be,fe,he,Fe,se,Me,We,Ne,me,Oe,$e;function vt(){ke=new _1(I),ke.init(),me=new tT(I,ke),rt=new f1(I,ke,e,me),O=new Jb(I),ce=new M1(I),ge=new zb,ie=new eT(I,ke,O,ge,rt,me,ce),Ce=new p1(v),A=new v1(v),S=new AM(I),Oe=new u1(I,S),G=new y1(I,S,ce,Oe),Q=new E1(I,G,S,ce),Me=new w1(I,rt,ie),he=new h1(ge),ee=new kb(v,Ce,A,ke,rt,Oe,he),te=new cT(v,ge),be=new jb,fe=new $b(ke),se=new c1(v,Ce,A,O,Q,h,l),Fe=new Qb(v,Q,rt),$e=new uT(I,ce,rt,O),We=new d1(I,ke,ce),Ne=new S1(I,ke,ce),ce.programs=ee.programs,v.capabilities=rt,v.extensions=ke,v.properties=ge,v.renderLists=be,v.shadowMap=Fe,v.state=O,v.info=ce}vt();const U=new oT(v,I);this.xr=U,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=ke.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ke.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(j,V,!1))},this.getSize=function(E){return E.set(j,V)},this.setSize=function(E,k,W=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=E,V=k,n.width=Math.floor(E*Y),n.height=Math.floor(k*Y),W===!0&&(n.style.width=E+"px",n.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(j*Y,V*Y).floor()},this.setDrawingBufferSize=function(E,k,W){j=E,V=k,Y=W,n.width=Math.floor(E*W),n.height=Math.floor(k*W),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,k,W,X){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,k,W,X),O.viewport(w.copy(J).multiplyScalar(Y).round())},this.getScissor=function(E){return E.copy(le)},this.setScissor=function(E,k,W,X){E.isVector4?le.set(E.x,E.y,E.z,E.w):le.set(E,k,W,X),O.scissor(L.copy(le).multiplyScalar(Y).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(E){O.setScissorTest(we=E)},this.setOpaqueSort=function(E){D=E},this.setTransparentSort=function(E){$=E},this.getClearColor=function(E){return E.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(E=!0,k=!0,W=!0){let X=0;if(E){let B=!1;if(T!==null){const ae=T.texture.format;B=ae===px||ae===hx||ae===fx}if(B){const ae=T.texture.type,ve=ae===Qi||ae===zs||ae===Gl||ae===Bs||ae===ux||ae===dx,ye=se.getClearColor(),Se=se.getClearAlpha(),Ae=ye.r,Re=ye.g,Te=ye.b;ve?(g[0]=Ae,g[1]=Re,g[2]=Te,g[3]=Se,I.clearBufferuiv(I.COLOR,0,g)):(y[0]=Ae,y[1]=Re,y[2]=Te,y[3]=Se,I.clearBufferiv(I.COLOR,0,y))}else X|=I.COLOR_BUFFER_BIT}k&&(X|=I.DEPTH_BUFFER_BIT),W&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",xe,!1),n.removeEventListener("webglcontextrestored",K,!1),n.removeEventListener("webglcontextcreationerror",Z,!1),be.dispose(),fe.dispose(),ge.dispose(),Ce.dispose(),A.dispose(),Q.dispose(),Oe.dispose(),$e.dispose(),ee.dispose(),U.dispose(),U.removeEventListener("sessionstart",Vn),U.removeEventListener("sessionend",Gn),rr.stop()};function xe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=ce.autoReset,k=Fe.enabled,W=Fe.autoUpdate,X=Fe.needsUpdate,B=Fe.type;vt(),ce.autoReset=E,Fe.enabled=k,Fe.autoUpdate=W,Fe.needsUpdate=X,Fe.type=B}function Z(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function oe(E){const k=E.target;k.removeEventListener("dispose",oe),Pe(k)}function Pe(E){qe(E),ge.remove(E)}function qe(E){const k=ge.get(E).programs;k!==void 0&&(k.forEach(function(W){ee.releaseProgram(W)}),E.isShaderMaterial&&ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,W,X,B,ae){k===null&&(k=Ie);const ve=B.isMesh&&B.matrixWorld.determinant()<0,ye=Ox(E,k,W,X,B);O.setMaterial(X,ve);let Se=W.index,Ae=1;if(X.wireframe===!0){if(Se=G.getWireframeAttribute(W),Se===void 0)return;Ae=2}const Re=W.drawRange,Te=W.attributes.position;let Ze=Re.start*Ae,mt=(Re.start+Re.count)*Ae;ae!==null&&(Ze=Math.max(Ze,ae.start*Ae),mt=Math.min(mt,(ae.start+ae.count)*Ae)),Se!==null?(Ze=Math.max(Ze,0),mt=Math.min(mt,Se.count)):Te!=null&&(Ze=Math.max(Ze,0),mt=Math.min(mt,Te.count));const gt=mt-Ze;if(gt<0||gt===1/0)return;Oe.setup(B,X,ye,W,Se);let cn,Qe=We;if(Se!==null&&(cn=S.get(Se),Qe=Ne,Qe.setIndex(cn)),B.isMesh)X.wireframe===!0?(O.setLineWidth(X.wireframeLinewidth*Xe()),Qe.setMode(I.LINES)):Qe.setMode(I.TRIANGLES);else if(B.isLine){let Ee=X.linewidth;Ee===void 0&&(Ee=1),O.setLineWidth(Ee*Xe()),B.isLineSegments?Qe.setMode(I.LINES):B.isLineLoop?Qe.setMode(I.LINE_LOOP):Qe.setMode(I.LINE_STRIP)}else B.isPoints?Qe.setMode(I.POINTS):B.isSprite&&Qe.setMode(I.TRIANGLES);if(B.isBatchedMesh)B._multiDrawInstances!==null?Qe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances):Qe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)Qe.renderInstances(Ze,gt,B.count);else if(W.isInstancedBufferGeometry){const Ee=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Xt=Math.min(W.instanceCount,Ee);Qe.renderInstances(Ze,gt,Xt)}else Qe.render(Ze,gt)};function _t(E,k,W){E.transparent===!0&&E.side===ui&&E.forceSinglePass===!1?(E.side=on,E.needsUpdate=!0,io(E,k,W),E.side=Zi,E.needsUpdate=!0,io(E,k,W),E.side=ui):io(E,k,W)}this.compile=function(E,k,W=null){W===null&&(W=E),m=fe.get(W),m.init(k),x.push(m),W.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),E!==W&&E.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const X=new Set;return E.traverse(function(B){const ae=B.material;if(ae)if(Array.isArray(ae))for(let ve=0;ve<ae.length;ve++){const ye=ae[ve];_t(ye,W,B),X.add(ye)}else _t(ae,W,B),X.add(ae)}),x.pop(),m=null,X},this.compileAsync=function(E,k,W=null){const X=this.compile(E,k,W);return new Promise(B=>{function ae(){if(X.forEach(function(ve){ge.get(ve).currentProgram.isReady()&&X.delete(ve)}),X.size===0){B(E);return}setTimeout(ae,10)}ke.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let At=null;function tt(E){At&&At(E)}function Vn(){rr.stop()}function Gn(){rr.start()}const rr=new Tx;rr.setAnimationLoop(tt),typeof self<"u"&&rr.setContext(self),this.setAnimationLoop=function(E){At=E,U.setAnimationLoop(E),E===null?rr.stop():rr.start()},U.addEventListener("sessionstart",Vn),U.addEventListener("sessionend",Gn),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(k),k=U.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,k,T),m=fe.get(E,x.length),m.init(k),x.push(m),pe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),je.setFromProjectionMatrix(pe),re=this.localClippingEnabled,q=he.init(this.clippingPlanes,re),_=be.get(E,d.length),_.init(),d.push(_),U.enabled===!0&&U.isPresenting===!0){const ae=v.xr.getDepthSensingMesh();ae!==null&&Mc(ae,k,-1/0,v.sortObjects)}Mc(E,k,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(D,$),Le=U.enabled===!1||U.isPresenting===!1||U.hasDepthSensing()===!1,Le&&se.addToRenderList(_,E),this.info.render.frame++,q===!0&&he.beginShadows();const W=m.state.shadowsArray;Fe.render(W,E,k),q===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,B=_.transmissive;if(m.setupLights(),k.isArrayCamera){const ae=k.cameras;if(B.length>0)for(let ve=0,ye=ae.length;ve<ye;ve++){const Se=ae[ve];Gf(X,B,E,Se)}Le&&se.render(E);for(let ve=0,ye=ae.length;ve<ye;ve++){const Se=ae[ve];Vf(_,E,Se,Se.viewport)}}else B.length>0&&Gf(X,B,E,k),Le&&se.render(E),Vf(_,E,k);T!==null&&(ie.updateMultisampleRenderTarget(T),ie.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(v,E,k),Oe.resetDefaultState(),N=-1,b=null,x.pop(),x.length>0?(m=x[x.length-1],q===!0&&he.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Mc(E,k,W,X){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||je.intersectsSprite(E)){X&&ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pe);const ve=Q.update(E),ye=E.material;ye.visible&&_.push(E,ve,ye,W,ue.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||je.intersectsObject(E))){const ve=Q.update(E),ye=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ue.copy(E.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),ue.copy(ve.boundingSphere.center)),ue.applyMatrix4(E.matrixWorld).applyMatrix4(pe)),Array.isArray(ye)){const Se=ve.groups;for(let Ae=0,Re=Se.length;Ae<Re;Ae++){const Te=Se[Ae],Ze=ye[Te.materialIndex];Ze&&Ze.visible&&_.push(E,ve,Ze,W,ue.z,Te)}}else ye.visible&&_.push(E,ve,ye,W,ue.z,null)}}const ae=E.children;for(let ve=0,ye=ae.length;ve<ye;ve++)Mc(ae[ve],k,W,X)}function Vf(E,k,W,X){const B=E.opaque,ae=E.transmissive,ve=E.transparent;m.setupLightsView(W),q===!0&&he.setGlobalState(v.clippingPlanes,W),X&&O.viewport(w.copy(X)),B.length>0&&no(B,k,W),ae.length>0&&no(ae,k,W),ve.length>0&&no(ve,k,W),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Gf(E,k,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new Nr(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?xc:Qi,minFilter:Mr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ae=m.state.transmissionRenderTarget[X.id],ve=X.viewport||w;ae.setSize(ve.z,ve.w);const ye=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor(z),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),Le?se.render(W):v.clear();const Se=v.toneMapping;v.toneMapping=Xi;const Ae=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),q===!0&&he.setGlobalState(v.clippingPlanes,X),no(E,W,X),ie.updateMultisampleRenderTarget(ae),ie.updateRenderTargetMipmap(ae),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Te=0,Ze=k.length;Te<Ze;Te++){const mt=k[Te],gt=mt.object,cn=mt.geometry,Qe=mt.material,Ee=mt.group;if(Qe.side===ui&&gt.layers.test(X.layers)){const Xt=Qe.side;Qe.side=on,Qe.needsUpdate=!0,Wf(gt,W,X,cn,Qe,Ee),Qe.side=Xt,Qe.needsUpdate=!0,Re=!0}}Re===!0&&(ie.updateMultisampleRenderTarget(ae),ie.updateRenderTargetMipmap(ae))}v.setRenderTarget(ye),v.setClearColor(z,P),Ae!==void 0&&(X.viewport=Ae),v.toneMapping=Se}function no(E,k,W){const X=k.isScene===!0?k.overrideMaterial:null;for(let B=0,ae=E.length;B<ae;B++){const ve=E[B],ye=ve.object,Se=ve.geometry,Ae=X===null?ve.material:X,Re=ve.group;ye.layers.test(W.layers)&&Wf(ye,k,W,Se,Ae,Re)}}function Wf(E,k,W,X,B,ae){E.onBeforeRender(v,k,W,X,B,ae),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(v,k,W,X,E,ae),B.transparent===!0&&B.side===ui&&B.forceSinglePass===!1?(B.side=on,B.needsUpdate=!0,v.renderBufferDirect(W,k,X,B,E,ae),B.side=Zi,B.needsUpdate=!0,v.renderBufferDirect(W,k,X,B,E,ae),B.side=ui):v.renderBufferDirect(W,k,X,B,E,ae),E.onAfterRender(v,k,W,X,B,ae)}function io(E,k,W){k.isScene!==!0&&(k=Ie);const X=ge.get(E),B=m.state.lights,ae=m.state.shadowsArray,ve=B.state.version,ye=ee.getParameters(E,B.state,ae,k,W),Se=ee.getProgramCacheKey(ye);let Ae=X.programs;X.environment=E.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(E.isMeshStandardMaterial?A:Ce).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",oe),Ae=new Map,X.programs=Ae);let Re=Ae.get(Se);if(Re!==void 0){if(X.currentProgram===Re&&X.lightsStateVersion===ve)return $f(E,ye),Re}else ye.uniforms=ee.getUniforms(E),E.onBuild(W,ye,v),E.onBeforeCompile(ye,v),Re=ee.acquireProgram(ye,Se),Ae.set(Se,Re),X.uniforms=ye.uniforms;const Te=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Te.clippingPlanes=he.uniform),$f(E,ye),X.needsLights=zx(E),X.lightsStateVersion=ve,X.needsLights&&(Te.ambientLightColor.value=B.state.ambient,Te.lightProbe.value=B.state.probe,Te.directionalLights.value=B.state.directional,Te.directionalLightShadows.value=B.state.directionalShadow,Te.spotLights.value=B.state.spot,Te.spotLightShadows.value=B.state.spotShadow,Te.rectAreaLights.value=B.state.rectArea,Te.ltc_1.value=B.state.rectAreaLTC1,Te.ltc_2.value=B.state.rectAreaLTC2,Te.pointLights.value=B.state.point,Te.pointLightShadows.value=B.state.pointShadow,Te.hemisphereLights.value=B.state.hemi,Te.directionalShadowMap.value=B.state.directionalShadowMap,Te.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Te.spotShadowMap.value=B.state.spotShadowMap,Te.spotLightMatrix.value=B.state.spotLightMatrix,Te.spotLightMap.value=B.state.spotLightMap,Te.pointShadowMap.value=B.state.pointShadowMap,Te.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Re,X.uniformsList=null,Re}function Xf(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=pl.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function $f(E,k){const W=ge.get(E);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function Ox(E,k,W,X,B){k.isScene!==!0&&(k=Ie),ie.resetTextureUnits();const ae=k.fog,ve=X.isMeshStandardMaterial?k.environment:null,ye=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ir,Se=(X.isMeshStandardMaterial?A:Ce).get(X.envMap||ve),Ae=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Re=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Te=!!W.morphAttributes.position,Ze=!!W.morphAttributes.normal,mt=!!W.morphAttributes.color;let gt=Xi;X.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(gt=v.toneMapping);const cn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Qe=cn!==void 0?cn.length:0,Ee=ge.get(X),Xt=m.state.lights;if(q===!0&&(re===!0||E!==b)){const _n=E===b&&X.id===N;he.setState(X,E,_n)}let nt=!1;X.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Xt.state.version||Ee.outputColorSpace!==ye||B.isBatchedMesh&&Ee.batching===!1||!B.isBatchedMesh&&Ee.batching===!0||B.isBatchedMesh&&Ee.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ee.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ee.instancing===!1||!B.isInstancedMesh&&Ee.instancing===!0||B.isSkinnedMesh&&Ee.skinning===!1||!B.isSkinnedMesh&&Ee.skinning===!0||B.isInstancedMesh&&Ee.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ee.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ee.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ee.instancingMorph===!1&&B.morphTexture!==null||Ee.envMap!==Se||X.fog===!0&&Ee.fog!==ae||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==he.numPlanes||Ee.numIntersection!==he.numIntersection)||Ee.vertexAlphas!==Ae||Ee.vertexTangents!==Re||Ee.morphTargets!==Te||Ee.morphNormals!==Ze||Ee.morphColors!==mt||Ee.toneMapping!==gt||Ee.morphTargetsCount!==Qe)&&(nt=!0):(nt=!0,Ee.__version=X.version);let ti=Ee.currentProgram;nt===!0&&(ti=io(X,k,B));let ro=!1,sr=!1,wc=!1;const Rt=ti.getUniforms(),Si=Ee.uniforms;if(O.useProgram(ti.program)&&(ro=!0,sr=!0,wc=!0),X.id!==N&&(N=X.id,sr=!0),ro||b!==E){Rt.setValue(I,"projectionMatrix",E.projectionMatrix),Rt.setValue(I,"viewMatrix",E.matrixWorldInverse);const _n=Rt.map.cameraPosition;_n!==void 0&&_n.setValue(I,ue.setFromMatrixPosition(E.matrixWorld)),rt.logarithmicDepthBuffer&&Rt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Rt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,sr=!0,wc=!0)}if(B.isSkinnedMesh){Rt.setOptional(I,B,"bindMatrix"),Rt.setOptional(I,B,"bindMatrixInverse");const _n=B.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Rt.setValue(I,"boneTexture",_n.boneTexture,ie))}B.isBatchedMesh&&(Rt.setOptional(I,B,"batchingTexture"),Rt.setValue(I,"batchingTexture",B._matricesTexture,ie),Rt.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&Rt.setValue(I,"batchingColorTexture",B._colorsTexture,ie));const Ec=W.morphAttributes;if((Ec.position!==void 0||Ec.normal!==void 0||Ec.color!==void 0)&&Me.update(B,W,ti),(sr||Ee.receiveShadow!==B.receiveShadow)&&(Ee.receiveShadow=B.receiveShadow,Rt.setValue(I,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Si.envMap.value=Se,Si.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(Si.envMapIntensity.value=k.environmentIntensity),sr&&(Rt.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ee.needsLights&&kx(Si,wc),ae&&X.fog===!0&&te.refreshFogUniforms(Si,ae),te.refreshMaterialUniforms(Si,X,Y,V,m.state.transmissionRenderTarget[E.id]),pl.upload(I,Xf(Ee),Si,ie)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(pl.upload(I,Xf(Ee),Si,ie),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Rt.setValue(I,"center",B.center),Rt.setValue(I,"modelViewMatrix",B.modelViewMatrix),Rt.setValue(I,"normalMatrix",B.normalMatrix),Rt.setValue(I,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const _n=X.uniformsGroups;for(let bc=0,Bx=_n.length;bc<Bx;bc++){const Yf=_n[bc];$e.update(Yf,ti),$e.bind(Yf,ti)}}return ti}function kx(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function zx(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,k,W){ge.get(E.texture).__webglTexture=k,ge.get(E.depthTexture).__webglTexture=W;const X=ge.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){const W=ge.get(E);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,W=0){T=E,R=k,C=W;let X=!0,B=null,ae=!1,ve=!1;if(E){const Se=ge.get(E);Se.__useDefaultFramebuffer!==void 0?(O.bindFramebuffer(I.FRAMEBUFFER,null),X=!1):Se.__webglFramebuffer===void 0?ie.setupRenderTarget(E):Se.__hasExternalTextures&&ie.rebindTextures(E,ge.get(E.texture).__webglTexture,ge.get(E.depthTexture).__webglTexture);const Ae=E.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ve=!0);const Re=ge.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Re[k])?B=Re[k][W]:B=Re[k],ae=!0):E.samples>0&&ie.useMultisampledRTT(E)===!1?B=ge.get(E).__webglMultisampledFramebuffer:Array.isArray(Re)?B=Re[W]:B=Re,w.copy(E.viewport),L.copy(E.scissor),F=E.scissorTest}else w.copy(J).multiplyScalar(Y).floor(),L.copy(le).multiplyScalar(Y).floor(),F=we;if(O.bindFramebuffer(I.FRAMEBUFFER,B)&&X&&O.drawBuffers(E,B),O.viewport(w),O.scissor(L),O.setScissorTest(F),ae){const Se=ge.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Se.__webglTexture,W)}else if(ve){const Se=ge.get(E.texture),Ae=k||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Se.__webglTexture,W||0,Ae)}N=-1},this.readRenderTargetPixels=function(E,k,W,X,B,ae,ve){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=ge.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye){O.bindFramebuffer(I.FRAMEBUFFER,ye);try{const Se=E.texture,Ae=Se.format,Re=Se.type;if(!rt.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-X&&W>=0&&W<=E.height-B&&I.readPixels(k,W,X,B,me.convert(Ae),me.convert(Re),ae)}finally{const Se=T!==null?ge.get(T).__webglFramebuffer:null;O.bindFramebuffer(I.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(E,k,W,X,B,ae,ve){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=ge.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye){O.bindFramebuffer(I.FRAMEBUFFER,ye);try{const Se=E.texture,Ae=Se.format,Re=Se.type;if(!rt.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-X&&W>=0&&W<=E.height-B){const Te=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Te),I.bufferData(I.PIXEL_PACK_BUFFER,ae.byteLength,I.STREAM_READ),I.readPixels(k,W,X,B,me.convert(Ae),me.convert(Re),0),I.flush();const Ze=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await iM(I,Ze,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Te),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ae)}finally{I.deleteBuffer(Te),I.deleteSync(Ze)}return ae}}finally{const Se=T!==null?ge.get(T).__webglFramebuffer:null;O.bindFramebuffer(I.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(E,k=null,W=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);const X=Math.pow(2,-W),B=Math.floor(E.image.width*X),ae=Math.floor(E.image.height*X),ve=k!==null?k.x:0,ye=k!==null?k.y:0;ie.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,ve,ye,B,ae),O.unbindTexture()},this.copyTextureToTexture=function(E,k,W=null,X=null,B=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],k=arguments[2],B=arguments[3]||0,W=null);let ae,ve,ye,Se,Ae,Re;W!==null?(ae=W.max.x-W.min.x,ve=W.max.y-W.min.y,ye=W.min.x,Se=W.min.y):(ae=E.image.width,ve=E.image.height,ye=0,Se=0),X!==null?(Ae=X.x,Re=X.y):(Ae=0,Re=0);const Te=me.convert(k.format),Ze=me.convert(k.type);ie.setTexture2D(k,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const mt=I.getParameter(I.UNPACK_ROW_LENGTH),gt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),cn=I.getParameter(I.UNPACK_SKIP_PIXELS),Qe=I.getParameter(I.UNPACK_SKIP_ROWS),Ee=I.getParameter(I.UNPACK_SKIP_IMAGES),Xt=E.isCompressedTexture?E.mipmaps[B]:E.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Xt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Xt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ye),I.pixelStorei(I.UNPACK_SKIP_ROWS,Se),E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,B,Ae,Re,ae,ve,Te,Ze,Xt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,B,Ae,Re,Xt.width,Xt.height,Te,Xt.data):I.texSubImage2D(I.TEXTURE_2D,B,Ae,Re,Te,Ze,Xt),I.pixelStorei(I.UNPACK_ROW_LENGTH,mt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,cn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ee),B===0&&k.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),O.unbindTexture()},this.copyTextureToTexture3D=function(E,k,W=null,X=null,B=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,E=arguments[2],k=arguments[3],B=arguments[4]||0);let ae,ve,ye,Se,Ae,Re,Te,Ze,mt;const gt=E.isCompressedTexture?E.mipmaps[B]:E.image;W!==null?(ae=W.max.x-W.min.x,ve=W.max.y-W.min.y,ye=W.max.z-W.min.z,Se=W.min.x,Ae=W.min.y,Re=W.min.z):(ae=gt.width,ve=gt.height,ye=gt.depth,Se=0,Ae=0,Re=0),X!==null?(Te=X.x,Ze=X.y,mt=X.z):(Te=0,Ze=0,mt=0);const cn=me.convert(k.format),Qe=me.convert(k.type);let Ee;if(k.isData3DTexture)ie.setTexture3D(k,0),Ee=I.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)ie.setTexture2DArray(k,0),Ee=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const Xt=I.getParameter(I.UNPACK_ROW_LENGTH),nt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ti=I.getParameter(I.UNPACK_SKIP_PIXELS),ro=I.getParameter(I.UNPACK_SKIP_ROWS),sr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,gt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Se),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ae),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Re),E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Ee,B,Te,Ze,mt,ae,ve,ye,cn,Qe,gt.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(Ee,B,Te,Ze,mt,ae,ve,ye,cn,gt.data):I.texSubImage3D(Ee,B,Te,Ze,mt,ae,ve,ye,cn,Qe,gt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Xt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ti),I.pixelStorei(I.UNPACK_SKIP_ROWS,ro),I.pixelStorei(I.UNPACK_SKIP_IMAGES,sr),B===0&&k.generateMipmaps&&I.generateMipmap(Ee),O.unbindTexture()},this.initRenderTarget=function(E){ge.get(E).__webglFramebuffer===void 0&&ie.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ie.setTextureCube(E,0):E.isData3DTexture?ie.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ie.setTexture2DArray(E,0):ie.setTexture2D(E,0),O.unbindTexture()},this.resetState=function(){R=0,C=0,T=null,O.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ff?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===vc?"display-p3":"srgb"}}class jf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=n}clone(){return new jf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class fT extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class hT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Ud,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Of("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new H;class Kl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix4(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyNormalMatrix(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.transformDirection(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=it(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Kn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Kn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Kn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Kn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new ln(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Kl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Dx extends Dr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let es;const oa=new H,ts=new H,ns=new H,is=new Be,la=new Be,Ux=new ht,Xo=new H,ca=new H,$o=new H,Rm=new Be,Lu=new Be,Nm=new Be;class pT extends Gt{constructor(e=new Dx){if(super(),this.isSprite=!0,this.type="Sprite",es===void 0){es=new gn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new hT(n,5);es.setIndex([0,1,2,0,2,3]),es.setAttribute("position",new Kl(i,3,0,!1)),es.setAttribute("uv",new Kl(i,2,3,!1))}this.geometry=es,this.material=e,this.center=new Be(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ts.setFromMatrixScale(this.matrixWorld),Ux.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ns.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ts.multiplyScalar(-ns.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Yo(Xo.set(-.5,-.5,0),ns,a,ts,r,s),Yo(ca.set(.5,-.5,0),ns,a,ts,r,s),Yo($o.set(.5,.5,0),ns,a,ts,r,s),Rm.set(0,0),Lu.set(1,0),Nm.set(1,1);let o=e.ray.intersectTriangle(Xo,ca,$o,!1,oa);if(o===null&&(Yo(ca.set(-.5,.5,0),ns,a,ts,r,s),Lu.set(0,1),o=e.ray.intersectTriangle(Xo,$o,ca,!1,oa),o===null))return;const l=e.ray.origin.distanceTo(oa);l<e.near||l>e.far||n.push({distance:l,point:oa.clone(),uv:kn.getInterpolation(oa,Xo,ca,$o,Rm,Lu,Nm,new Be),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Yo(t,e,n,i,r,s){is.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(la.x=s*is.x-r*is.y,la.y=r*is.x+s*is.y):la.copy(is),t.copy(e),t.x+=la.x,t.y+=la.y,t.applyMatrix4(Ux)}class Ix extends Dr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zl=new H,Ql=new H,Pm=new ht,ua=new _c,qo=new eo,Du=new H,Lm=new H;class mT extends Gt{constructor(e=new gn,n=new Ix){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Zl.fromBufferAttribute(n,r-1),Ql.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Zl.distanceTo(Ql);e.setAttribute("lineDistance",new jn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qo.copy(i.boundingSphere),qo.applyMatrix4(r),qo.radius+=s,e.ray.intersectsSphere(qo)===!1)return;Pm.copy(r).invert(),ua.copy(e.ray).applyMatrix4(Pm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const g=Math.max(0,a.start),y=Math.min(f.count,a.start+a.count);for(let _=g,m=y-1;_<m;_+=c){const d=f.getX(_),x=f.getX(_+1),v=Ko(this,e,ua,l,d,x);v&&n.push(v)}if(this.isLineLoop){const _=f.getX(y-1),m=f.getX(g),d=Ko(this,e,ua,l,_,m);d&&n.push(d)}}else{const g=Math.max(0,a.start),y=Math.min(h.count,a.start+a.count);for(let _=g,m=y-1;_<m;_+=c){const d=Ko(this,e,ua,l,_,_+1);d&&n.push(d)}if(this.isLineLoop){const _=Ko(this,e,ua,l,y-1,g);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ko(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(Zl.fromBufferAttribute(a,r),Ql.fromBufferAttribute(a,s),n.distanceSqToSegment(Zl,Ql,Du,Lm)>i)return;Du.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Du);if(!(l<e.near||l>e.far))return{distance:l,point:Lm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}class Fx extends Dr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dm=new ht,Od=new _c,Zo=new eo,Qo=new H;class gT extends Gt{constructor(e=new gn,n=new Fx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere),Zo.applyMatrix4(r),Zo.radius+=s,e.ray.intersectsSphere(Zo)===!1)return;Dm.copy(r).invert(),Od.copy(e.ray).applyMatrix4(Dm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let y=h,_=g;y<_;y++){const m=c.getX(y);Qo.fromBufferAttribute(p,m),Um(Qo,m,l,r,e,n,this)}}else{const h=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let y=h,_=g;y<_;y++)Qo.fromBufferAttribute(p,y),Um(Qo,y,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Um(t,e,n,i,r,s,a){const o=Od.distanceSqToPoint(t);if(o<n){const l=new H;Od.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Im extends Zt{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hf extends gn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const f=[],p=new H,h=new H,g=[],y=[],_=[],m=[];for(let d=0;d<=i;d++){const x=[],v=d/i;let M=0;d===0&&a===0?M=.5/n:d===i&&l===Math.PI&&(M=-.5/n);for(let R=0;R<=n;R++){const C=R/n;p.x=-e*Math.cos(r+C*s)*Math.sin(a+v*o),p.y=e*Math.cos(a+v*o),p.z=e*Math.sin(r+C*s)*Math.sin(a+v*o),y.push(p.x,p.y,p.z),h.copy(p).normalize(),_.push(h.x,h.y,h.z),m.push(C+M,1-v),x.push(c++)}f.push(x)}for(let d=0;d<i;d++)for(let x=0;x<n;x++){const v=f[d][x+1],M=f[d][x],R=f[d+1][x],C=f[d+1][x+1];(d!==0||a>0)&&g.push(v,M,C),(d!==i-1||l<Math.PI)&&g.push(M,R,C)}this.setIndex(g),this.setAttribute("position",new jn(y,3)),this.setAttribute("normal",new jn(_,3)),this.setAttribute("uv",new jn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Fm=new ht;class xT{constructor(e,n,i=0,r=1/0){this.ray=new _c(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new kf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Fm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fm),this}intersectObject(e,n=!0,i=[]){return kd(e,this,i,n),i.sort(Om),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)kd(e[r],this,i,n);return i.sort(Om),i}}function Om(t,e){return t.distance-e.distance}function kd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)kd(s[a],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:If}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=If);function da(t,e,n){return Math.max(e,Math.min(n,t))}function Aa(t){const e=new Date(t),n=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),s=String(e.getHours()).padStart(2,"0"),a=String(e.getMinutes()).padStart(2,"0");return`${n}.${i}.${r} ${s}:${a}`}function km(t,e){return Math.random()*(e-t)+t}class vT{constructor(){this.audioContext=null,this.masterGain=null,this.sfxGain=null,this.volume=.7,this.sfxVolume=.8,this.initialized=!1}init(){if(!this.initialized)try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.audioContext=new e,this.masterGain=this.audioContext.createGain(),this.sfxGain=this.audioContext.createGain(),this.masterGain.connect(this.audioContext.destination),this.sfxGain.connect(this.masterGain),this.masterGain.gain.value=this.volume,this.sfxGain.gain.value=this.sfxVolume,this.initialized=!0}catch{console.warn("Web Audio API not supported")}}ensureContext(){var e;this.audioContext||this.init(),((e=this.audioContext)==null?void 0:e.state)==="suspended"&&this.audioContext.resume()}setVolume(e){this.volume=e,this.masterGain&&(this.masterGain.gain.value=e)}setSfxVolume(e){this.sfxVolume=e,this.sfxGain&&(this.sfxGain.gain.value=e)}playTone(e,n,i="sine",r=.3){if(this.ensureContext(),!this.audioContext||!this.sfxGain)return;const s=this.audioContext.createOscillator(),a=this.audioContext.createGain();s.type=i,s.frequency.value=e,a.gain.setValueAtTime(0,this.audioContext.currentTime),a.gain.linearRampToValueAtTime(r,this.audioContext.currentTime+.01),a.gain.exponentialRampToValueAtTime(.001,this.audioContext.currentTime+n),s.connect(a),a.connect(this.sfxGain),s.start(),s.stop(this.audioContext.currentTime+n)}playConnectSuccess(){this.playTone(523.25,.08,"sine",.25),setTimeout(()=>this.playTone(659.25,.1,"sine",.2),60),setTimeout(()=>this.playTone(783.99,.12,"sine",.15),140)}playConnectFail(){this.playTone(200,.12,"sawtooth",.15),setTimeout(()=>this.playTone(150,.15,"sawtooth",.1),80)}playConstellationComplete(){[523.25,659.25,783.99,1046.5,1318.51].forEach((n,i)=>{setTimeout(()=>this.playTone(n,.15,"sine",.2),i*100)})}playAchievement(){[783.99,1046.5,1318.51,1567.98,2093].forEach((n,i)=>{setTimeout(()=>this.playTone(n,.18,"triangle",.22),i*80)}),setTimeout(()=>this.playTone(2637.02,.4,"sine",.25),450)}playClick(){this.playTone(880,.04,"sine",.15)}playHover(){this.playTone(440,.03,"sine",.08)}playPanelOpen(){this.playTone(330,.05,"sine",.12),setTimeout(()=>this.playTone(440,.05,"sine",.1),30)}playPanelClose(){this.playTone(440,.05,"sine",.12),setTimeout(()=>this.playTone(330,.05,"sine",.1),30)}playStarHover(){this.playTone(587.33,.04,"triangle",.06)}playZoom(){this.playTone(220,.02,"sine",.05)}playReset(){[392,349.23,311.13,261.63].forEach((n,i)=>{setTimeout(()=>this.playTone(n,.1,"sawtooth",.1),i*70)})}}const Ke=new vT;class _T{constructor(e,n,i,r,s){qf(this,"animate",()=>{this.animationId=requestAnimationFrame(this.animate),this.time+=.01*this.settings.animationSpeed,this.cameraCurrentX+=(this.cameraTargetX-this.cameraCurrentX)*.05,this.cameraCurrentY+=(this.cameraTargetY-this.cameraCurrentY)*.05,this.camera.position.x=this.cameraCurrentX,this.camera.position.y=this.cameraCurrentY,this.camera.position.z+=(this.cameraZ-this.camera.position.z)*.05,this.camera.lookAt(this.cameraCurrentX,this.cameraCurrentY,0),this.starField&&(this.starField.rotation.y=this.time*.01,this.starField.rotation.x=Math.sin(this.time*.005)*.05),this.nebulas.forEach((e,n)=>{e.rotation.y=this.time*(.01+n*.003)}),this.starMeshes.forEach((e,n)=>{const i=1+Math.sin(this.time*2+n*.7)*.08,r=this.connectionPath.includes(e.userData.starId),s=e===this.hoveredStar;let o=e.userData.baseScale;r&&(o*=1.8),s&&(o*=s===r?1.1:r?1.2:1.5),e.scale.set(o*i,o*i,1)}),this.renderer.render(this.scene,this.camera)});this.container=e,this.settings=n,this.onStarClick=i,this.onCanvasEvent=r,this.onConnectResult=s,this.scene=null,this.camera=null,this.renderer=null,this.animationId=null,this.starField=null,this.constellationMeshes=new Map,this.connectionLines=new Map,this.tempLine=null,this.nebulas=[],this.raycaster=new xT,this.mouse=new Be,this.hoveredStar=null,this.starLabelEl=null,this.targetConstellationId=null,this.connectionPath=[],this.cameraZ=8,this.minCameraZ=3,this.maxCameraZ=20,this.cameraTargetX=0,this.cameraTargetY=0,this.cameraCurrentX=0,this.cameraCurrentY=0,this.isDragging=!1,this.dragStartX=0,this.dragStartY=0,this.cameraStartX=0,this.cameraStartY=0,this.dragMoved=!1,this.dragThreshold=5,this.isPinching=!1,this.initialPinchDistance=0,this.initialCameraZ=8,this.starMeshes=[],this.time=0,this.nebulasCreated=!1,this.init()}init(){const e=this.container.clientWidth,n=this.container.clientHeight,i=Ir[this.settings.graphicsQuality]||Ir.high;this.scene=new fT,this.scene.background=this.createBackgroundGradient(),this.scene.fog=new jf(329231,.015),this.camera=new wn(60,e/n,.1,1e3),this.camera.position.set(0,0,this.cameraZ),this.camera.lookAt(0,0,0),this.renderer=new dT({antialias:i.antialias,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e,n),this.renderer.setClearColor(329231,1),this.container.appendChild(this.renderer.domElement),this.createStarLabel();const r=i.starCount,s=Math.round(r*this.settings.starDensity);this.createStarField(s,i.particleSize),this.settings.showNebula&&(this.createNebulae(),this.nebulasCreated=!0),Ke.setVolume(this.settings.volume),Ke.setSfxVolume(this.settings.sfxVolume),this.animate(),this.bindEvents()}createStarLabel(){this.starLabelEl=document.createElement("div"),this.starLabelEl.className="star-label",this.starLabelEl.style.cssText=`
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
      `,this.starLabelEl.style.left=`${i-s.left}px`,this.starLabelEl.style.top=`${r-s.top}px`,this.starLabelEl.style.opacity="1"}else this.starLabelEl.style.opacity="0"}createBackgroundGradient(){const e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d"),i=n.createRadialGradient(256,256,0,256,256,512);i.addColorStop(0,"#0f1530"),i.addColorStop(.4,"#0a0e1f"),i.addColorStop(1,"#05060f"),n.fillStyle=i,n.fillRect(0,0,512,512);const r=new Im(e);return r.colorSpace=In,r}createStarField(e,n){const i=new gn,r=new Float32Array(e*3),s=new Float32Array(e*3),a=new Float32Array(e),o=[new He("#ffffff"),new He("#8ec5ff"),new He("#ffddaa"),new He("#ffccaa"),new He("#cce4ff")];for(let c=0;c<e;c++){const f=km(12,40),p=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1);r[c*3]=f*Math.sin(h)*Math.cos(p),r[c*3+1]=f*Math.sin(h)*Math.sin(p),r[c*3+2]=f*Math.cos(h)-15;const g=o[Math.floor(Math.random()*o.length)];s[c*3]=g.r,s[c*3+1]=g.g,s[c*3+2]=g.b,a[c]=n*km(.5,2)}i.setAttribute("position",new ln(r,3)),i.setAttribute("color",new ln(s,3)),i.setAttribute("size",new ln(a,1));const l=new Fx({size:n,vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,blending:gs,depthWrite:!1});this.starField=new gT(i,l),this.scene.add(this.starField)}rebuildStarField(){this.starField&&(this.scene.remove(this.starField),this.starField.geometry&&this.starField.geometry.dispose(),this.starField.material&&this.starField.material.dispose(),this.starField=null);const e=Ir[this.settings.graphicsQuality]||Ir.high,n=e.starCount,i=Math.round(n*this.settings.starDensity);this.createStarField(i,e.particleSize)}createNebulae(){[{x:-8,y:5,z:-10,color:7035903,scale:6,opacity:.08},{x:7,y:-4,z:-8,color:5239001,scale:5,opacity:.06},{x:2,y:8,z:-12,color:16747099,scale:7,opacity:.05},{x:-5,y:-7,z:-6,color:16739229,scale:4,opacity:.07}].forEach(n=>{const i=new Hf(n.scale,32,32),r=new zf({color:n.color,transparent:!0,opacity:n.opacity,blending:gs,depthWrite:!1}),s=new Qn(i,r);s.position.set(n.x,n.y,n.z),this.scene.add(s),this.nebulas.push(s)})}removeNebulae(){this.nebulas.forEach(e=>{this.scene.remove(e),e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.nebulas=[],this.nebulasCreated=!1}setNebulaeVisible(e){e&&!this.nebulasCreated?(this.createNebulae(),this.nebulasCreated=!0):!e&&this.nebulasCreated&&this.removeNebulae()}loadConstellation(e){this.clearConstellation(),this.targetConstellationId=e,this.connectionPath=[];const n=Ki(e);if(!n)return;const i=new va;i.name="constellation_group";const r=[];n.stars.forEach(s=>{const a=this.createStarMesh(s);a.position.set(s.x,s.y,s.z||0),a.userData={starId:s.id,starName:s.name,isConstellationStar:!0},i.add(a),r.push(a),this.starMeshes.push(a)}),this.constellationMeshes.set(e,{group:i,stars:r}),this.scene.add(i),this.cameraTargetX=n.center.x,this.cameraTargetY=n.center.y}createStarMesh(e){const n=Math.max(.2,1-e.mag/6*.8),i=.12+(1-e.mag/6)*.15,r=document.createElement("canvas");r.width=64,r.height=64;const s=r.getContext("2d"),a=32,o=s.createRadialGradient(a,a,0,a,a,32);o.addColorStop(0,e.color||"#ffffff"),o.addColorStop(.3,e.color||"#ffffff"),o.addColorStop(.6,(e.color||"#ffffff")+"88"),o.addColorStop(1,"transparent"),s.fillStyle=o,s.beginPath(),s.arc(a,a,32,0,Math.PI*2),s.fill(),s.fillStyle="#ffffff",s.beginPath(),s.arc(a,a,3+n*4,0,Math.PI*2),s.fill();const l=new Im(r),c=new Dx({map:l,transparent:!0,blending:gs,depthWrite:!1}),f=new pT(c);return f.scale.set(i*2,i*2,1),f.userData.baseScale=i*2,f.userData.brightness=n,f}updateConnectionPath(e){if(this.connectionPath=[...e],this.targetConstellationId){const n=this.constellationMeshes.get(this.targetConstellationId);if(!n)return;this.connectionLines.forEach(i=>this.scene.remove(i)),this.connectionLines.clear();for(let i=0;i<e.length-1;i++){const r=n.stars.find(a=>a.userData.starId===e[i]),s=n.stars.find(a=>a.userData.starId===e[i+1]);if(r&&s){const a=this.createConnectionLine(r.position,s.position,16766720);this.scene.add(a),this.connectionLines.set(`${e[i]}-${e[i+1]}`,a)}}n.stars.forEach(i=>{const r=e.includes(i.userData.starId),s=i.userData.baseScale*(r?1.8:1);i.scale.set(s,s,1)})}}createConnectionLine(e,n,i=16766720){const r=[e.clone(),n.clone()],s=new gn().setFromPoints(r),a=new Ix({color:i,transparent:!0,opacity:.85,linewidth:2,blending:gs});return new mT(s,a)}setTempLine(e,n){if(this.tempLine&&(this.scene.remove(this.tempLine),this.tempLine=null),!this.targetConstellationId||!e)return;const i=this.constellationMeshes.get(this.targetConstellationId);if(!i)return;const r=i.stars.find(s=>s.userData.starId===e);!r||!n||(this.tempLine=this.createConnectionLine(r.position,n,8956671),this.tempLine.material.opacity=.5,this.scene.add(this.tempLine))}clearTempLine(){this.tempLine&&(this.scene.remove(this.tempLine),this.tempLine=null)}clearConstellation(){this.constellationMeshes.forEach(({group:e})=>{this.scene.remove(e)}),this.constellationMeshes.clear(),this.connectionLines.forEach(e=>this.scene.remove(e)),this.connectionLines.clear(),this.clearTempLine(),this.starMeshes=[],this.targetConstellationId=null,this.connectionPath=[]}bindEvents(){const e=this.renderer.domElement;e.addEventListener("pointerdown",n=>this.onPointerDown(n)),e.addEventListener("pointermove",n=>this.onPointerMove(n)),e.addEventListener("pointerup",n=>this.onPointerUp(n)),e.addEventListener("pointercancel",()=>this.onPointerCancel()),e.addEventListener("wheel",n=>this.onWheel(n),{passive:!1}),window.addEventListener("resize",()=>this.onResize())}onPointerDown(e){e.pointerType==="touch"?this.isPinching||(this.isDragging=!0,this.dragStartX=e.clientX,this.dragStartY=e.clientY,this.cameraStartX=this.cameraTargetX,this.cameraStartY=this.cameraTargetY,this.dragMoved=!1):(this.isDragging=!0,this.dragStartX=e.clientX,this.dragStartY=e.clientY,this.cameraStartX=this.cameraTargetX,this.cameraStartY=this.cameraTargetY,this.dragMoved=!1),e.pointerType==="mouse"&&this.updateMouse(e)}onPointerMove(e){if(e.pointerType==="mouse"&&(this.updateMouse(e),this.checkHover(e.clientX,e.clientY)),this.isDragging&&!this.isPinching){const n=e.clientX-this.dragStartX,i=e.clientY-this.dragStartY;(Math.abs(n)>this.dragThreshold||Math.abs(i)>this.dragThreshold)&&(this.dragMoved=!0);const r=this.cameraZ/8;this.cameraTargetX=this.cameraStartX-n/this.container.clientWidth*10*r,this.cameraTargetY=this.cameraStartY+i/this.container.clientHeight*7*r,this.cameraTargetX=da(this.cameraTargetX,-15,15),this.cameraTargetY=da(this.cameraTargetY,-12,12),this.onCanvasEvent&&this.onCanvasEvent({type:"pan"})}if(e.pointerType==="mouse"&&this.connectionPath.length>0){const n=this.screenToWorld(e.clientX,e.clientY);n&&this.setTempLine(this.connectionPath[this.connectionPath.length-1],n)}}onPointerUp(e){if(!this.dragMoved&&!this.isPinching){this.updateMouse(e);const n=this.pickStar();n&&(Ke.playClick(),this.onStarClick&&this.onStarClick(n.userData.starId))}this.isDragging=!1,this.clearTempLine()}notifyConnectResult(e,n=!1){e?n?Ke.playConstellationComplete():Ke.playConnectSuccess():Ke.playConnectFail()}onPointerCancel(){this.isDragging=!1,this.isPinching=!1,this.clearTempLine()}onWheel(e){e.preventDefault();const n=e.deltaY*.01;this.cameraZ=da(this.cameraZ+n,this.minCameraZ,this.maxCameraZ),this.onCanvasEvent&&this.onCanvasEvent({type:"zoom",zoom:this.cameraZ})}handlePinchStart(e){if(e.touches&&e.touches.length===2){this.isPinching=!0,this.isDragging=!1;const n=e.touches[0],i=e.touches[1];this.initialPinchDistance=Math.hypot(i.clientX-n.clientX,i.clientY-n.clientY),this.initialCameraZ=this.cameraZ}}handlePinchMove(e){if(e.touches&&e.touches.length===2&&this.isPinching){e.preventDefault();const n=e.touches[0],i=e.touches[1],r=Math.hypot(i.clientX-n.clientX,i.clientY-n.clientY),s=this.initialPinchDistance/r;this.cameraZ=da(this.initialCameraZ*s,this.minCameraZ,this.maxCameraZ),this.onCanvasEvent&&this.onCanvasEvent({type:"zoom",zoom:this.cameraZ})}}handlePinchEnd(){this.isPinching=!1}updateMouse(e){const n=this.container.getBoundingClientRect();this.mouse.x=(e.clientX-n.left)/n.width*2-1,this.mouse.y=-((e.clientY-n.top)/n.height)*2+1}screenToWorld(e,n){const i=this.container.getBoundingClientRect(),r=(e-i.left)/i.width*2-1,s=-((n-i.top)/i.height)*2+1,a=new H(r,s,.5);a.unproject(this.camera);const o=a.sub(this.camera.position).normalize(),l=-this.camera.position.z/o.z;return this.camera.position.clone().add(o.multiplyScalar(l))}pickStar(){this.raycaster.setFromCamera(this.mouse,this.camera);const e=this.raycaster.intersectObjects(this.starMeshes);return e.length>0?e[0].object:null}checkHover(e,n){const i=this.pickStar();if(i!==this.hoveredStar){if(this.hoveredStar){const r=this.hoveredStar,s=this.connectionPath.includes(r.userData.starId),a=r.userData.baseScale*(s?1.8:1);r.scale.set(a,a,1)}if(i){const r=this.connectionPath.includes(i.userData.starId),s=i.userData.baseScale*(r?2.2:1.6);i.scale.set(s,s,1),Ke.playStarHover(),this.updateStarLabel(!0,i.userData,e,n)}else this.updateStarLabel(!1);this.hoveredStar=i,this.onCanvasEvent&&this.onCanvasEvent({type:"hover",star:i?i.userData:null})}else i&&e&&n&&this.updateStarLabel(!0,i.userData,e,n)}onResize(){const e=this.container.clientWidth,n=this.container.clientHeight;this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n)}setZoom(e){this.cameraZ=da(e,this.minCameraZ,this.maxCameraZ)}focusOnConstellation(e){const n=Ki(e);n&&(this.cameraTargetX=n.center.x,this.cameraTargetY=n.center.y,this.cameraZ=6)}updateSettings(e){const n={...this.settings};if(this.settings={...this.settings,...e},e.volume!==void 0&&Ke.setVolume(e.volume),e.sfxVolume!==void 0&&Ke.setSfxVolume(e.sfxVolume),e.starDensity!==void 0&&e.starDensity!==n.starDensity&&this.rebuildStarField(),e.showNebula!==void 0&&e.showNebula!==n.showNebula&&this.setNebulaeVisible(e.showNebula),e.showLabels!==void 0&&!e.showLabels&&this.starLabelEl&&(this.starLabelEl.style.opacity="0"),e.animationSpeed,e.graphicsQuality!==void 0&&e.graphicsQuality!==n.graphicsQuality){const i=Ir[e.graphicsQuality]||Ir.high;this.renderer&&this.renderer.setPixelRatio(i.antialias?Math.min(window.devicePixelRatio,2):1),this.rebuildStarField()}}dispose(){this.animationId&&cancelAnimationFrame(this.animationId),this.starLabelEl&&this.starLabelEl.parentNode&&(this.starLabelEl.parentNode.removeChild(this.starLabelEl),this.starLabelEl=null),window.removeEventListener("resize",()=>this.onResize()),this.renderer&&(this.renderer.dispose(),this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)),this.clearConstellation(),this.scene&&this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())})}}function yT(){const t=ze.useRef(null),e=ze.useRef(null),n=ze.useRef(0),i=Et(c=>c.settings),r=Et(c=>c.currentTargetConstellation),s=Et(c=>c.connectionPath),a=Et(c=>c.mistakes),o=Et(c=>c.connectStar),l=Et(c=>c.isConstellationComplete);return ze.useEffect(()=>{if(!t.current)return;Ke.init();const c=m=>{Ke.ensureContext();const d=o(m);setTimeout(()=>{if(e.current){const x=r&&l(r);e.current.notifyConnectResult(d,x)}},10)},f=new _T(t.current,i,c);e.current=f;const p=m=>{Ke.ensureContext(),f.handlePinchStart(m)},h=m=>{f.handlePinchMove(m)},g=()=>{f.handlePinchEnd()},y=()=>{Ke.playZoom()},_=f.renderer.domElement;return _.addEventListener("touchstart",p,{passive:!1}),_.addEventListener("touchmove",h,{passive:!1}),_.addEventListener("touchend",g),_.addEventListener("wheel",y,{passive:!0}),()=>{_.removeEventListener("touchstart",p),_.removeEventListener("touchmove",h),_.removeEventListener("touchend",g),_.removeEventListener("wheel",y),f.dispose(),e.current=null}},[]),ze.useEffect(()=>{e.current&&r?(e.current.loadConstellation(r),n.current=0):e.current&&!r&&(e.current.clearConstellation(),n.current=0)},[r]),ze.useEffect(()=>{e.current&&e.current.updateConnectionPath(s)},[s]),ze.useEffect(()=>{e.current&&e.current.updateSettings(i)},[i]),ze.useEffect(()=>{a>n.current&&e.current&&e.current.notifyConnectResult(!1,!1),n.current=a},[a]),u.jsx("div",{ref:t,className:"absolute inset-0 w-full h-full touch-none",style:{touchAction:"none"}})}function ST(){const{discoveredConstellations:t,currentTargetConstellation:e,setTargetConstellation:n,setActivePanel:i,connectionPath:r,mistakes:s,clearConnectionPath:a,isConstellationComplete:o,currentTargetConstellation:l}=Et(),c=st.find(p=>p.id===l),f=c?Math.min(100,Math.round(new Set(r).size/c.stars.length*100)):0;return u.jsx("div",{className:"absolute left-0 right-0 top-0 p-4 z-20 pointer-events-none",children:e?u.jsx("div",{className:"max-w-sm mx-auto pointer-events-auto",children:u.jsxs("div",{className:"glass-panel p-4",children:[u.jsxs("div",{className:"flex items-start justify-between",children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("h3",{className:"text-lg font-display text-white",children:c==null?void 0:c.name}),u.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded ${(c==null?void 0:c.difficulty)===1?"bg-green-500/20 text-green-300":(c==null?void 0:c.difficulty)===2?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:Fs[c==null?void 0:c.difficulty].label}),o(c==null?void 0:c.id)&&u.jsx("span",{className:"text-star-gold text-sm animate-pulse-slow",children:"★ 已完成"})]}),u.jsx("p",{className:"text-[11px] text-white/50 mt-0.5",children:c==null?void 0:c.description})]}),u.jsx("button",{onClick:()=>{a(),n(null)},className:`ml-2 w-9 h-9 flex items-center justify-center rounded-lg
                         bg-space-700/60 border border-white/10 text-white/70
                         hover:bg-red-500/30 hover:text-red-200 transition-all`,"aria-label":"退出任务",children:"✕"})]}),u.jsxs("div",{className:"mt-3",children:[u.jsxs("div",{className:"flex justify-between text-[11px] mb-1.5",children:[u.jsxs("span",{className:"text-white/50",children:["连接进度: ",new Set(r).size," / ",c==null?void 0:c.stars.length]}),u.jsxs("span",{className:"text-red-300/70",children:["失误: ",s]})]}),u.jsx("div",{className:"h-2 bg-space-900/80 rounded-full overflow-hidden",children:u.jsx("div",{className:"h-full bg-gradient-to-r from-nebula-purple to-nebula-cyan rounded-full transition-all duration-500",style:{width:`${f}%`}})})]}),u.jsxs("div",{className:"mt-3 flex gap-2",children:[u.jsx("button",{onClick:a,className:"flex-1 btn-secondary text-xs py-2",disabled:r.length===0,children:"🔄 重连"}),u.jsx("button",{onClick:()=>i("tasks"),className:"flex-1 btn-secondary text-xs py-2",children:"📋 切换星座"})]})]})}):u.jsx("div",{className:"max-w-md mx-auto pointer-events-auto",children:u.jsxs("div",{className:"glass-panel p-4 animate-float",children:[u.jsxs("div",{className:"flex items-center justify-between mb-3",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-xl font-display text-white",children:"星座图鉴"}),u.jsxs("p",{className:"text-xs text-white/50 mt-0.5",children:["已发现 ",t.length," / ",st.length]})]}),u.jsx("button",{onClick:()=>i("tasks"),className:"icon-btn","aria-label":"打开任务面板",children:u.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),u.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),u.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}),u.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"})]})})]}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:st.slice(0,4).map(p=>{const h=o(p.id);return u.jsx("button",{onClick:()=>n(p.id),className:`p-3 rounded-xl border transition-all text-left card-hover ${h?"border-nebula-purple/60 bg-nebula-purple/10":"border-white/10 bg-space-700/40"}`,children:u.jsxs("div",{className:"flex items-start justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx("span",{className:"text-sm font-display text-white",children:p.name}),h&&u.jsx("span",{className:"text-star-gold",children:"✓"})]}),u.jsx("div",{className:"text-[10px] text-white/40 mt-0.5",children:p.nameEn})]}),u.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded ${p.difficulty===1?"bg-green-500/20 text-green-300":p.difficulty===2?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:Fs[p.difficulty].label})]})},p.id)})}),u.jsxs("button",{onClick:()=>i("tasks"),className:"w-full mt-3 btn-secondary text-sm py-2.5",children:["查看全部 ",st.length," 个星座 →"]})]})})})}function MT(){const{discoveredConstellations:t,currentTargetConstellation:e,setTargetConstellation:n,setActivePanel:i,isConstellationComplete:r,openAtlasList:s,openAtlasDetail:a}=Et(),o=(l,c)=>{c.stopPropagation(),a(l)};return u.jsx("div",{className:`absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200`,children:u.jsxs("div",{className:"w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden",children:[u.jsxs("div",{className:"p-5 border-b border-white/10",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-xl font-display text-white",children:"星座探索"}),u.jsx("p",{className:"text-xs text-white/50 mt-1",children:"点击星座开始连线，点亮夜空的奥秘"})]}),u.jsx("button",{onClick:()=>i(null),className:"icon-btn","aria-label":"关闭",children:"✕"})]}),u.jsxs("div",{className:"mt-4 grid grid-cols-4 gap-2 text-center",children:[u.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[u.jsx("div",{className:"text-lg font-bold text-nebula-cyan",children:t.length}),u.jsx("div",{className:"text-[10px] text-white/50",children:"已发现"})]}),u.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[u.jsx("div",{className:"text-lg font-bold text-white/80",children:st.length}),u.jsx("div",{className:"text-[10px] text-white/50",children:"总星座"})]}),u.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[u.jsx("div",{className:"text-lg font-bold text-star-gold",children:st.filter(l=>l.season==="春").length}),u.jsx("div",{className:"text-[10px] text-white/50",children:"春·冬"})]}),u.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[u.jsx("div",{className:"text-lg font-bold text-nebula-orange",children:st.filter(l=>l.season==="夏"||l.season==="秋").length}),u.jsx("div",{className:"text-[10px] text-white/50",children:"夏·秋"})]})]}),u.jsx("div",{className:"mt-3",children:u.jsxs("button",{onClick:s,className:`w-full py-2 px-4 rounded-xl bg-gradient-to-r from-nebula-purple/20 to-nebula-cyan/20
                       border border-nebula-purple/30 text-white text-sm
                       hover:from-nebula-purple/30 hover:to-nebula-cyan/30
                       transition-all flex items-center justify-center gap-2`,children:[u.jsx("span",{children:"📚"}),u.jsx("span",{children:"查看完整星空图鉴"}),u.jsx("span",{className:"text-nebula-cyan",children:"→"})]})})]}),u.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-thin p-5 space-y-3",children:st.map(l=>{const c=r(l.id),f=e===l.id;return u.jsx("button",{onClick:()=>{n(l.id),i(null)},className:`w-full p-4 rounded-2xl border text-left transition-all card-hover ${f?"border-nebula-cyan/60 bg-nebula-cyan/10 ring-2 ring-nebula-cyan/30":c?"border-nebula-purple/50 bg-nebula-purple/8":"border-white/10 bg-space-700/30"}`,children:u.jsxs("div",{className:"flex items-start justify-between",children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("h3",{className:"text-base font-display text-white",children:l.name}),c&&u.jsx("span",{className:"text-star-gold animate-pulse-slow",children:"★"}),u.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded ${l.difficulty===1?"bg-green-500/20 text-green-300":l.difficulty===2?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:Fs[l.difficulty].label}),u.jsxs("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-space-600/50 text-white/50",children:[l.season,"季"]})]}),u.jsx("div",{className:"text-[11px] text-white/40 mt-0.5",children:l.nameEn}),u.jsx("p",{className:"text-xs text-white/60 mt-2 leading-relaxed",children:l.description}),u.jsxs("div",{className:"mt-2 flex items-center gap-3 text-[10px] text-white/40",children:[u.jsxs("span",{children:["✦ ",l.stars.length," 颗主要星"]}),u.jsxs("span",{children:["⊶ ",l.connections.length," 条连线"]})]})]}),u.jsx("button",{onClick:p=>o(l.id,p),className:`ml-2 px-2 py-1 rounded-lg bg-space-600/50 text-white/50 text-[10px]
                               hover:bg-nebula-purple/30 hover:text-nebula-cyan transition-all
                               flex-shrink-0`,title:"在图鉴中查看详情",children:"📚 详情"})]})},l.id)})})]})})}function wT(){const{observationLogs:t,setActivePanel:e,clearLogs:n,seasonRewardsClaimed:i,openAtlasList:r,openAtlasDetail:s}=Et(),a=l=>{s(l)},o=(l,c)=>{if(l.type==="discovery"||l.type==="reobservation"){const f=Ki(l.constellationId);if(!f)return null;const p=l.type==="discovery";return u.jsx("div",{className:`p-4 rounded-xl border transition-all ${p?"border-nebula-purple/30 bg-nebula-purple/5":"border-white/10 bg-space-700/20"}`,children:u.jsxs("div",{className:"flex items-start justify-between",children:[u.jsxs("div",{className:"flex items-start gap-3 flex-1",children:[u.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${p?"bg-gradient-to-br from-nebula-purple to-nebula-cyan text-white":"bg-space-600/50 text-white/70"}`,children:p?"✨":"🔭"}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"font-display text-white text-sm",children:f.name}),l.perfect&&u.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded-full bg-star-gold/20 text-star-gold",children:"完美"})]}),u.jsxs("div",{className:"text-[11px] text-white/40 mt-0.5",children:[f.nameEn," · ",p?"首次发现":"再次观测"]}),u.jsx("div",{className:"text-[10px] text-white/30 mt-1 font-mono",children:Aa(l.timestamp)})]})]}),u.jsx("button",{onClick:()=>a(l.constellationId),className:`ml-2 px-2 py-1 rounded-lg bg-space-600/50 text-white/50 text-[10px]
                       hover:bg-nebula-purple/30 hover:text-nebula-cyan transition-all
                       flex-shrink-0`,title:"在图鉴中查看",children:"📚"})]})},c)}if(l.type==="achievement"){const f=sx(l.achievementId),p=Es==null?void 0:Es.find(g=>g.id===l.achievementId),h=f||p;return h?u.jsx("div",{className:"p-4 rounded-xl border border-star-gold/20 bg-star-gold/5",children:u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx("div",{className:`w-10 h-10 rounded-xl bg-gradient-to-br from-star-gold to-nebula-orange
                          flex items-center justify-center text-lg`,children:h.icon}),u.jsxs("div",{children:[u.jsxs("div",{className:"font-display text-star-gold text-sm",children:["成就解锁 · ",h.name]}),u.jsx("div",{className:"text-[11px] text-white/50 mt-0.5",children:h.description}),u.jsx("div",{className:"text-[10px] text-white/30 mt-1 font-mono",children:Aa(l.timestamp)})]})]})},c):null}if(l.type==="season_reward"){const f=Vt[l.seasonId],p=qn[l.phaseId];return!f||!p?null:u.jsx("div",{className:`p-4 rounded-xl border ${f.borderColor} ${f.bgColor}`,children:u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center text-lg
                            bg-gradient-to-br ${f.color}`,children:f.icon}),u.jsxs("div",{children:[u.jsxs("div",{className:`font-display text-sm ${f.textColor}`,children:["季节奖励 · ",l.rewardName]}),u.jsxs("div",{className:"text-[11px] text-white/50 mt-0.5",children:[f.name," · ",p.name,"阶段完成"]}),u.jsx("div",{className:"text-[10px] text-white/30 mt-1 font-mono",children:Aa(l.timestamp)})]})]})},c)}return null};return u.jsx("div",{className:`absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200`,children:u.jsxs("div",{className:"w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden",children:[u.jsxs("div",{className:"p-5 border-b border-white/10",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-xl font-display text-white",children:"观测日志"}),u.jsx("p",{className:"text-xs text-white/50 mt-1",children:"记录每一次与星空的相遇"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[t.length>0&&u.jsx("button",{onClick:()=>{confirm("确定要清空所有观测日志吗？")&&n()},className:`text-xs px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20
                           text-red-300 hover:bg-red-500/20 transition-all`,children:"清空"}),u.jsx("button",{onClick:()=>e(null),className:"icon-btn","aria-label":"关闭",children:"✕"})]})]}),u.jsxs("div",{className:"mt-4 grid grid-cols-4 gap-2 text-center",children:[u.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[u.jsx("div",{className:"text-lg font-bold text-nebula-purple",children:t.filter(l=>l.type==="discovery").length}),u.jsx("div",{className:"text-[10px] text-white/50",children:"首次发现"})]}),u.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[u.jsx("div",{className:"text-lg font-bold text-nebula-cyan",children:t.filter(l=>l.type==="reobservation").length}),u.jsx("div",{className:"text-[10px] text-white/50",children:"再次观测"})]}),u.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[u.jsx("div",{className:"text-lg font-bold text-star-gold",children:t.filter(l=>l.type==="achievement").length}),u.jsx("div",{className:"text-[10px] text-white/50",children:"成就解锁"})]}),u.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[u.jsx("div",{className:"text-lg font-bold text-pink-300",children:i.length}),u.jsx("div",{className:"text-[10px] text-white/50",children:"季节奖励"})]})]}),u.jsx("div",{className:"mt-3",children:u.jsxs("button",{onClick:r,className:`w-full py-2 px-4 rounded-xl bg-gradient-to-r from-nebula-purple/20 to-nebula-cyan/20
                       border border-nebula-purple/30 text-white text-sm
                       hover:from-nebula-purple/30 hover:to-nebula-cyan/30
                       transition-all flex items-center justify-center gap-2`,children:[u.jsx("span",{children:"📚"}),u.jsx("span",{children:"浏览星空图鉴"}),u.jsx("span",{className:"text-nebula-cyan",children:"→"})]})})]}),u.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-thin p-5",children:t.length===0?u.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center py-12",children:[u.jsx("div",{className:"text-5xl mb-4 opacity-30",children:"📖"}),u.jsx("h3",{className:"text-white/70 font-display mb-2",children:"暂无观测记录"}),u.jsx("p",{className:"text-xs text-white/40 max-w-xs leading-relaxed",children:"开始探索星座，你的每一次发现都将记录在这里"})]}):u.jsx("div",{className:"space-y-3",children:t.map((l,c)=>o(l,c))})})]})})}const ET={beginner:{name:"初心者",icon:"🌱",color:"from-green-500 to-emerald-400"},explorer:{name:"探索家",icon:"🧭",color:"from-blue-500 to-cyan-400"},challenge:{name:"挑战者",icon:"🔥",color:"from-orange-500 to-red-400"},collector:{name:"收藏家",icon:"📚",color:"from-purple-500 to-pink-400"},special:{name:"特别成就",icon:"💫",color:"from-yellow-500 to-orange-400"},season:{name:"四季成就",icon:"🌸",color:"from-pink-500 to-cyan-400"}};function bT(){const{unlockedAchievements:t,setActivePanel:e,getProgress:n}=Et(),i=n(),s=[...zl,...Es].reduce((a,o)=>(a[o.category]||(a[o.category]=[]),a[o.category].push(o),a),{});return u.jsx("div",{className:`absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200`,children:u.jsxs("div",{className:"w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden",children:[u.jsxs("div",{className:"p-5 border-b border-white/10",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-xl font-display text-white",children:"成就系统"}),u.jsx("p",{className:"text-xs text-white/50 mt-1",children:"解锁你的星空里程碑"})]}),u.jsx("button",{onClick:()=>e(null),className:"icon-btn","aria-label":"关闭",children:"✕"})]}),u.jsxs("div",{className:"mt-4",children:[u.jsxs("div",{className:"flex justify-between text-xs mb-2",children:[u.jsx("span",{className:"text-white/60",children:"总体进度"}),u.jsxs("span",{className:"text-star-gold font-mono",children:[i.achievements," / ",i.totalAchievements]})]}),u.jsx("div",{className:"h-3 bg-space-900/80 rounded-full overflow-hidden",children:u.jsx("div",{className:"h-full bg-gradient-to-r from-star-gold via-nebula-orange to-nebula-purple rounded-full transition-all duration-700",style:{width:`${i.totalAchievements>0?i.achievements/i.totalAchievements*100:0}%`}})})]})]}),u.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-thin p-5 space-y-5",children:Object.entries(s).map(([a,o])=>{const l=ET[a],c=o.filter(f=>t.includes(f.id)).length;return u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx("span",{className:"text-lg",children:l.icon}),u.jsx("h3",{className:"font-display text-white/90 text-sm",children:l.name}),u.jsxs("span",{className:"text-[10px] text-white/40 ml-auto",children:[c," / ",o.length]})]}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:o.map(f=>{const p=t.includes(f.id);return u.jsx("div",{className:`p-3 rounded-xl border transition-all ${p?"border-white/20 bg-space-700/40":"border-white/5 bg-space-900/40 opacity-50"}`,children:u.jsxs("div",{className:"flex items-start gap-2",children:[u.jsx("div",{className:`w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0 ${p?`bg-gradient-to-br ${l.color}`:"bg-space-800 grayscale"}`,children:f.icon}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("div",{className:`text-xs font-semibold ${p?"text-white":"text-white/50"}`,children:f.name}),u.jsx("div",{className:"text-[10px] text-white/40 mt-0.5 leading-tight",children:f.description})]})]})},f.id)})})]},a)})})]})})}function TT(){const{settings:t,updateSettings:e,resetSettings:n,resetProgress:i,setActivePanel:r,getProgress:s,manualSave:a}=Et(),[o,l]=ze.useState(!1),[c,f]=ze.useState(!1),p=s(),h=(d,x)=>{Ke.ensureContext(),Ke.playClick(),e({[d]:x})},g=()=>{Ke.ensureContext(),Ke.playReset(),n()},y=()=>{Ke.ensureContext(),Ke.playReset(),i(),n(),l(!1)},_=()=>{Ke.ensureContext(),Ke.playConnectSuccess(),a(),f(!0),setTimeout(()=>f(!1),1500)},m=()=>{Ke.ensureContext(),Ke.playPanelClose(),r(null)};return u.jsxs("div",{className:`absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200`,children:[c&&u.jsx("div",{className:`fixed top-8 left-1/2 -translate-x-1/2 z-50
                      px-4 py-2 rounded-xl bg-nebula-cyan/20 border border-nebula-cyan/40
                      text-nebula-cyan text-sm font-medium animate-bounce-in`,children:"✓ 进度已保存"}),u.jsxs("div",{className:"w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden",children:[u.jsx("div",{className:"p-5 border-b border-white/10",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-xl font-display text-white",children:"设置"}),u.jsx("p",{className:"text-xs text-white/50 mt-1",children:"定制你的观星体验"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[t.autoSave&&u.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] text-nebula-cyan/70",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-nebula-cyan animate-pulse"}),"自动保存中"]}),!t.autoSave&&u.jsx("button",{onClick:_,className:`text-xs px-3 py-1.5 rounded-lg bg-nebula-cyan/20 border border-nebula-cyan/30
                           text-nebula-cyan hover:bg-nebula-cyan/30 transition-all`,children:"💾 手动保存"}),u.jsx("button",{onClick:m,className:"icon-btn","aria-label":"关闭",children:"✕"})]})]})}),u.jsxs("div",{className:"flex-1 overflow-y-auto scrollbar-thin p-5 space-y-6",children:[u.jsxs("section",{children:[u.jsx("h3",{className:"text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 px-1",children:"🎮 体验设置"}),u.jsxs("div",{className:"space-y-3",children:[u.jsx(Jo,{label:"主音量",icon:"🔊",value:t.volume,min:0,max:1,step:.1,onChange:d=>h("volume",d),displayValue:`${Math.round(t.volume*100)}%`}),u.jsx(Jo,{label:"音效音量",icon:"🎵",value:t.sfxVolume,min:0,max:1,step:.1,onChange:d=>h("sfxVolume",d),displayValue:`${Math.round(t.sfxVolume*100)}%`}),u.jsx(el,{label:"触控反馈",icon:"📳",description:"点击时触发震动反馈",value:t.hapticFeedback,onChange:d=>h("hapticFeedback",d)}),u.jsx(el,{label:"自动保存",icon:"💾",description:"自动保存进度到本地存储",value:t.autoSave,onChange:d=>h("autoSave",d)})]})]}),u.jsxs("section",{children:[u.jsx("h3",{className:"text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 px-1",children:"🎨 画面设置"}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"p-4 rounded-xl bg-space-700/30 border border-white/5",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx("span",{className:"text-lg",children:"🖼️"}),u.jsx("div",{children:u.jsx("div",{className:"text-sm text-white",children:"画质等级"})})]}),u.jsx("div",{className:"grid grid-cols-3 gap-2",children:["low","medium","high"].map(d=>u.jsx("button",{onClick:()=>h("graphicsQuality",d),className:`py-2 rounded-lg text-xs font-medium transition-all ${t.graphicsQuality===d?"bg-nebula-purple text-white":"bg-space-800/60 text-white/60 hover:bg-space-700/60"}`,children:d==="low"?"省电":d==="medium"?"均衡":"极致"},d))})]}),u.jsx(Jo,{label:"星星密度",icon:"✨",value:t.starDensity,min:.3,max:1.5,step:.1,onChange:d=>h("starDensity",d),displayValue:`${Math.round(t.starDensity*100)}%`}),u.jsx(Jo,{label:"动画速度",icon:"🌙",value:t.animationSpeed,min:.2,max:2,step:.1,onChange:d=>h("animationSpeed",d),displayValue:`${Math.round(t.animationSpeed*100)}%`}),u.jsx(el,{label:"星云效果",icon:"🌌",description:"显示背景中的彩色星云",value:t.showNebula,onChange:d=>h("showNebula",d)}),u.jsx(el,{label:"显示星名",icon:"🏷️",description:"悬停时显示星星名称",value:t.showLabels,onChange:d=>h("showLabels",d)})]})]}),u.jsxs("section",{children:[u.jsx("h3",{className:"text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 px-1",children:"📊 当前进度"}),u.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[u.jsxs("div",{className:"p-3 rounded-xl bg-space-700/30 border border-white/5 text-center",children:[u.jsxs("div",{className:"text-lg font-bold text-nebula-cyan",children:[p.constellations,"/",p.totalConstellations]}),u.jsx("div",{className:"text-[10px] text-white/50 mt-1",children:"星座"})]}),u.jsxs("div",{className:"p-3 rounded-xl bg-space-700/30 border border-white/5 text-center",children:[u.jsxs("div",{className:"text-lg font-bold text-star-gold",children:[p.achievements,"/",p.totalAchievements]}),u.jsx("div",{className:"text-[10px] text-white/50 mt-1",children:"成就"})]}),u.jsxs("div",{className:"p-3 rounded-xl bg-space-700/30 border border-white/5 text-center",children:[u.jsx("div",{className:"text-lg font-bold text-nebula-purple",children:p.logs}),u.jsx("div",{className:"text-[10px] text-white/50 mt-1",children:"日志"})]})]})]}),u.jsxs("section",{children:[u.jsx("h3",{className:"text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 px-1",children:"⚠️ 危险操作"}),u.jsxs("div",{className:"space-y-2",children:[u.jsx("button",{onClick:g,className:`w-full p-3 rounded-xl bg-space-700/30 border border-white/5
                         hover:border-yellow-500/30 hover:bg-yellow-500/5
                         transition-all text-sm text-white/80`,children:"🔄 恢复默认设置"}),o?u.jsxs("div",{className:"p-4 rounded-xl bg-red-500/10 border border-red-500/30",children:[u.jsx("p",{className:"text-xs text-red-200 mb-3",children:"确定要清空所有进度、成就和日志吗？此操作无法撤销。"}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("button",{onClick:y,className:`flex-1 py-2 rounded-lg bg-red-500 text-white text-sm font-medium
                               hover:bg-red-600 transition-all`,children:"确认清空"}),u.jsx("button",{onClick:()=>{Ke.playClick(),l(!1)},className:`flex-1 py-2 rounded-lg bg-space-800 text-white/80 text-sm
                               hover:bg-space-700 transition-all`,children:"取消"})]})]}):u.jsx("button",{onClick:()=>{Ke.ensureContext(),Ke.playClick(),l(!0)},className:`w-full p-3 rounded-xl bg-space-700/30 border border-red-500/20
                           hover:bg-red-500/10 transition-all text-sm text-red-300`,children:"🗑️ 清空所有数据"})]})]}),u.jsx("div",{className:"text-center text-[10px] text-white/20 py-2",children:"StarConnect v1.0.0 · Made with ✨ for stargazers"})]})]})]})}function Jo({label:t,icon:e,value:n,min:i,max:r,step:s,onChange:a,displayValue:o}){return u.jsxs("div",{className:"p-4 rounded-xl bg-space-700/30 border border-white/5",children:[u.jsxs("div",{className:"flex items-center justify-between mb-3",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-lg",children:e}),u.jsx("span",{className:"text-sm text-white",children:t})]}),u.jsx("span",{className:"text-xs font-mono text-nebula-cyan",children:o})]}),u.jsx("input",{type:"range",min:i,max:r,step:s,value:n,onChange:l=>a(parseFloat(l.target.value)),className:`w-full h-2 rounded-full bg-space-900 appearance-none cursor-pointer
                   [&::-webkit-slider-thumb]:appearance-none
                   [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
                   [&::-webkit-slider-thumb]:rounded-full
                   [&::-webkit-slider-thumb]:bg-gradient-to-r
                   [&::-webkit-slider-thumb]:from-nebula-purple [&::-webkit-slider-thumb]:to-nebula-cyan
                   [&::-webkit-slider-thumb]:shadow-lg`})]})}function el({label:t,icon:e,description:n,value:i,onChange:r}){return u.jsxs("div",{className:`p-4 rounded-xl bg-space-700/30 border border-white/5
                    flex items-center justify-between`,children:[u.jsxs("div",{className:"flex items-start gap-2",children:[u.jsx("span",{className:"text-lg",children:e}),u.jsxs("div",{children:[u.jsx("div",{className:"text-sm text-white",children:t}),n&&u.jsx("div",{className:"text-[10px] text-white/40 mt-0.5",children:n})]})]}),u.jsx("button",{onClick:()=>r(!i),className:`w-12 h-6 rounded-full transition-all duration-300 relative ${i?"bg-gradient-to-r from-nebula-purple to-nebula-cyan":"bg-space-900/80"}`,children:u.jsx("div",{className:`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md
                      transition-all duration-300 ${i?"left-[26px]":"left-0.5"}`})})]})}function CT(){const{setActivePanel:t,discoveredConstellations:e,seasonProgress:n,seasonRewardsUnlocked:i,seasonRewardsClaimed:r,claimSeasonReward:s,seasonHistory:a,totalObservations:o,perfectObservations:l,getSeasonStats:c,setTargetConstellation:f,openAtlasList:p,openAtlasDetail:h}=Et(),g=(F,z)=>{z.stopPropagation(),h(F)},y=Uf(),[_,m]=ze.useState(y),[d,x]=ze.useState("overview"),v=c(),M=v[_],R=Vt[_],C=Bl(_),T=Object.values(v).filter(F=>F.beginner.completed&&F.intermediate.completed&&F.master.completed).length,N=Math.round(Object.values(v).reduce((F,z)=>F+z.overallPercentage,0)/4),b=()=>u.jsxs("div",{className:"space-y-5",children:[u.jsxs("div",{className:`p-4 rounded-2xl border ${R.borderColor} ${R.bgColor}`,children:[u.jsxs("div",{className:"flex items-center justify-between mb-3",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("span",{className:"text-3xl",children:R.icon}),u.jsxs("div",{children:[u.jsxs("h3",{className:`font-display text-lg ${R.textColor}`,children:[R.name,"观测计划"]}),u.jsxs("p",{className:"text-[11px] text-white/50",children:[R.months," · ",R.description]})]})]}),_===y&&u.jsx("span",{className:"text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/70",children:"当前季节"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between text-xs mb-2",children:[u.jsx("span",{className:"text-white/60",children:"季节总进度"}),u.jsxs("span",{className:`font-mono ${R.textColor}`,children:[M.overallPercentage,"%"]})]}),u.jsx("div",{className:"h-2.5 bg-space-900/60 rounded-full overflow-hidden",children:u.jsx("div",{className:`h-full bg-gradient-to-r ${R.color} rounded-full transition-all duration-700`,style:{width:`${M.overallPercentage}%`}})})]})]}),u.jsx("div",{className:"space-y-3",children:Object.entries(qn).map(([F,z])=>{const P=M[F],j=n[_][F],V=hl[_][F],Y=i.includes(V.id),D=r.includes(V.id);return u.jsxs("div",{className:`p-4 rounded-2xl border transition-all ${j?`${R.borderColor} ${R.bgColor}`:"border-white/10 bg-space-700/20"}`,children:[u.jsxs("div",{className:"flex items-start justify-between mb-2",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${j?`bg-gradient-to-br ${R.color} text-white`:"bg-space-600/50 text-white/50"}`,children:[j?"✓":z.multiplier,"×"]}),u.jsxs("div",{children:[u.jsx("h4",{className:`text-sm font-display ${j?"text-white":"text-white/80"}`,children:z.name}),u.jsx("p",{className:"text-[10px] text-white/40",children:z.description})]})]}),Y&&u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx("span",{className:"text-lg",children:V.icon}),D?u.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-300",children:"已领取"}):u.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-star-gold/20 text-star-gold animate-pulse",children:"可领取"})]})]}),u.jsxs("div",{className:"flex justify-between text-[10px] mb-1.5",children:[u.jsxs("span",{className:"text-white/50",children:[F==="beginner"&&`发现 ${P.target} 个当季星座`,F==="intermediate"&&`完美完成 ${P.target} 个当季星座`,F==="master"&&`累计反复观测 ${P.target} 次`]}),u.jsxs("span",{className:"text-white/60 font-mono",children:[P.current," / ",P.target]})]}),u.jsx("div",{className:"h-1.5 bg-space-900/60 rounded-full overflow-hidden",children:u.jsx("div",{className:`h-full rounded-full transition-all duration-700 ${j?`bg-gradient-to-r ${R.color}`:"bg-white/30"}`,style:{width:`${P.percentage}%`}})}),Y&&u.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-base",children:V.icon}),u.jsxs("div",{children:[u.jsx("p",{className:"text-xs text-white/80 font-medium",children:V.name}),u.jsx("p",{className:"text-[10px] text-white/40",children:V.description})]})]}),D?u.jsx("span",{className:"text-[11px] text-green-400/80",children:"✓ 已领取"}):u.jsx("button",{onClick:()=>s(V.id),className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-all
                                   bg-gradient-to-r ${R.color} text-white
                                   hover:shadow-lg active:scale-95`,children:"领取"})]})})]},F)})}),u.jsxs("div",{className:"p-4 rounded-2xl border border-white/10 bg-space-700/20",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx("span",{className:"text-lg",children:"✨"}),u.jsx("h4",{className:"font-display text-white/90 text-sm",children:"当季星座"}),u.jsxs("span",{className:"text-[10px] text-white/40 ml-auto",children:[M.discovered," / ",M.constellations]})]}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:C.map(F=>{const z=Ki(F);if(!z)return null;const P=e.includes(F),j=l[F],V=o[F]||0;return u.jsx("div",{className:`p-3 rounded-xl border text-left transition-all card-hover ${P?"border-nebula-purple/40 bg-nebula-purple/5":"border-white/10 bg-space-800/40"}`,children:u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{onClick:()=>{f(F),t(null)},className:"flex-1 min-w-0 text-left",children:u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:`text-sm ${P?"":"opacity-50 grayscale"}`,children:P?"⭐":"☆"}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("p",{className:`text-xs font-medium truncate ${P?"text-white":"text-white/50"}`,children:z.name}),u.jsxs("div",{className:"flex items-center gap-1.5 mt-0.5",children:[j&&u.jsx("span",{className:"text-[9px] px-1 py-0.5 rounded bg-star-gold/20 text-star-gold",children:"完美"}),V>1&&u.jsxs("span",{className:"text-[9px] text-white/40",children:["×",V]})]})]})]})}),u.jsx("button",{onClick:Y=>g(F,Y),className:`w-6 h-6 flex items-center justify-center rounded-lg
                             bg-space-600/30 text-white/40 text-[10px]
                             hover:bg-nebula-purple/30 hover:text-nebula-cyan transition-all
                             flex-shrink-0`,title:"在图鉴中查看详情",children:"📚"})]})},F)})})]})]}),w=()=>u.jsxs("div",{className:"space-y-3",children:[u.jsx("div",{className:"p-4 rounded-2xl border border-white/10 bg-space-700/20",children:u.jsx("div",{className:"grid grid-cols-4 gap-2 text-center",children:Object.entries(Vt).map(([F,z])=>{const P=v[F].beginner.completed&&v[F].intermediate.completed&&v[F].master.completed;return u.jsxs("div",{className:`p-2 rounded-lg ${P?z.bgColor:"bg-space-800/40"}`,children:[u.jsx("div",{className:"text-2xl mb-1",children:z.icon}),u.jsx("div",{className:`text-[11px] ${P?z.textColor:"text-white/50"}`,children:z.name}),u.jsxs("div",{className:"text-[10px] text-white/40 mt-0.5",children:[v[F].overallPercentage,"%"]})]},F)})})}),a.length===0?u.jsxs("div",{className:"h-40 flex flex-col items-center justify-center text-center",children:[u.jsx("div",{className:"text-4xl mb-3 opacity-30",children:"🗓️"}),u.jsx("h4",{className:"text-white/60 font-display mb-1",children:"暂无季节进度记录"}),u.jsx("p",{className:"text-xs text-white/40 max-w-xs leading-relaxed",children:"开始探索星座，你的季节里程碑将记录在这里"})]}):u.jsx("div",{className:"space-y-2",children:a.map((F,z)=>{const P=Vt[F.seasonId],j=qn[F.phaseId],V=hl[F.seasonId][F.phaseId];return u.jsx("div",{className:`p-3 rounded-xl border ${P.borderColor} ${P.bgColor}`,children:u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center text-xl
                                  bg-gradient-to-br ${P.color}`,children:P.icon}),u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("span",{className:"text-sm font-display text-white",children:[P.name," · ",j.name]}),u.jsx("span",{className:"text-base",children:V.icon})]}),u.jsxs("div",{className:"text-[11px] text-white/50 mt-0.5",children:["完成阶段目标，获得「",V.name,"」"]}),u.jsx("div",{className:"text-[10px] text-white/30 mt-0.5 font-mono",children:Aa(F.timestamp)})]})]})},z)})})]}),L=()=>{const F=[];return Object.entries(hl).forEach(([z,P])=>{Object.entries(P).forEach(([j,V])=>{F.push({seasonId:z,phaseId:j,...V})})}),u.jsx("div",{className:"space-y-4",children:Object.entries(Vt).map(([z,P])=>{const j=F.filter(Y=>Y.seasonId===z),V=j.filter(Y=>r.includes(Y.id)).length;return u.jsxs("div",{className:`p-4 rounded-2xl border ${P.borderColor} ${P.bgColor}`,children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx("span",{className:"text-xl",children:P.icon}),u.jsxs("h4",{className:`font-display text-sm ${P.textColor}`,children:[P.name,"奖励"]}),u.jsxs("span",{className:"text-[10px] text-white/40 ml-auto",children:[V," / ",j.length]})]}),u.jsx("div",{className:"grid grid-cols-3 gap-2",children:j.map(Y=>{const D=i.includes(Y.id),$=r.includes(Y.id);return u.jsxs("div",{className:`p-3 rounded-xl text-center transition-all border ${$?"bg-white/10 border-green-400/30":D?"bg-star-gold/5 border-star-gold/20 ring-1 ring-star-gold/10":"bg-space-900/40 border-white/5 opacity-50"}`,children:[u.jsx("div",{className:`text-2xl mb-1 ${D?"":"grayscale"}`,children:Y.icon}),u.jsx("p",{className:`text-[11px] font-medium ${$?"text-green-300":D?"text-star-gold":"text-white/40"}`,children:Y.name}),u.jsx("p",{className:"text-[9px] text-white/40 mt-0.5 leading-tight",children:Y.description}),D&&!$&&u.jsx("button",{onClick:()=>s(Y.id),className:`mt-2 px-2.5 py-1 rounded-md text-[10px] font-medium
                                     bg-gradient-to-r ${P.color} text-white
                                     hover:shadow-md active:scale-95 transition-all`,children:"领取"}),$&&u.jsx("span",{className:"mt-1.5 inline-block text-[10px] text-green-400/70",children:"✓ 已领取"})]},Y.id)})})]},z)})})};return u.jsx("div",{className:`absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200`,children:u.jsxs("div",{className:"w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden",children:[u.jsxs("div",{className:"p-5 border-b border-white/10",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-xl font-display text-white",children:"四季观测计划"}),u.jsx("p",{className:"text-xs text-white/50 mt-1",children:"跟随季节的脚步，探索星空的奥秘"})]}),u.jsx("button",{onClick:()=>t(null),className:"icon-btn","aria-label":"关闭",children:"✕"})]}),u.jsxs("div",{className:"mt-4",children:[u.jsxs("div",{className:"flex justify-between text-xs mb-2",children:[u.jsx("span",{className:"text-white/60",children:"年度总进度"}),u.jsxs("span",{className:"text-star-gold font-mono",children:[T," / 4 季 · ",N,"%"]})]}),u.jsx("div",{className:"h-3 bg-space-900/80 rounded-full overflow-hidden flex",children:Object.entries(Vt).map(([F,z])=>u.jsx("div",{className:`h-full bg-gradient-to-r ${z.color} transition-all duration-500`,style:{width:`${v[F].overallPercentage/4}%`}},F))})]}),u.jsx("div",{className:"mt-4 grid grid-cols-4 gap-2",children:Object.entries(Vt).map(([F,z])=>u.jsxs("button",{onClick:()=>m(F),className:`p-2 rounded-xl text-center transition-all ${_===F?`${z.bgColor} ${z.borderColor} border`:"bg-space-700/30 border border-transparent hover:bg-space-700/50"}`,children:[u.jsx("div",{className:"text-xl",children:z.icon}),u.jsx("div",{className:`text-[10px] mt-0.5 ${_===F?z.textColor:"text-white/50"}`,children:z.name}),u.jsxs("div",{className:"text-[9px] text-white/30 mt-0.5",children:[v[F].overallPercentage,"%"]})]},F))}),u.jsx("div",{className:"mt-3",children:u.jsxs("button",{onClick:p,className:`w-full py-2 px-4 rounded-xl bg-gradient-to-r from-nebula-purple/20 to-nebula-cyan/20
                       border border-nebula-purple/30 text-white text-sm
                       hover:from-nebula-purple/30 hover:to-nebula-cyan/30
                       transition-all flex items-center justify-center gap-2`,children:[u.jsx("span",{children:"📚"}),u.jsx("span",{children:"查看星空图鉴"}),u.jsx("span",{className:"text-nebula-cyan",children:"→"})]})}),u.jsx("div",{className:"mt-4 flex gap-2",children:[{id:"overview",label:"进度",icon:"📊"},{id:"rewards",label:"奖励",icon:"🎁"},{id:"history",label:"回溯",icon:"🗓️"}].map(F=>u.jsxs("button",{onClick:()=>x(F.id),className:`flex-1 py-2 px-3 rounded-lg text-xs transition-all flex items-center justify-center gap-1 ${d===F.id?"bg-white/10 text-white border border-white/10":"text-white/50 hover:text-white/80"}`,children:[u.jsx("span",{children:F.icon}),u.jsx("span",{children:F.label})]},F.id))})]}),u.jsxs("div",{className:"flex-1 overflow-y-auto scrollbar-thin p-5",children:[d==="overview"&&b(),d==="rewards"&&L(),d==="history"&&w()]})]})})}function AT({constellationId:t}){const{discoveredConstellations:e,favoriteConstellations:n,toggleFavorite:i,isConstellationComplete:r,totalObservations:s,perfectObservations:a,setTargetConstellation:o,setActivePanel:l,observationLogs:c,resetAtlasState:f,openAtlasList:p}=Et(),h=ze.useMemo(()=>Ki(t),[t]),g=h?r(h.id):!1,y=h?n.includes(h.id):!1,_=h&&s[h.id]||0,m=h&&a[h.id]||!1,d=(h==null?void 0:h.season)==="春"?"spring":(h==null?void 0:h.season)==="夏"?"summer":(h==null?void 0:h.season)==="秋"?"autumn":"winter",x=h?Vt[d]:null,v=ze.useMemo(()=>{if(!h)return null;const T=c.find(N=>N.type==="discovery"&&N.constellationId===h.id);return T?new Date(T.timestamp):null},[h,c]);if(!h)return u.jsx("div",{className:`absolute inset-0 z-40 flex items-center justify-center p-4
                      bg-space-900/70 backdrop-blur-sm`,children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"text-4xl mb-3",children:"🌌"}),u.jsx("p",{className:"text-white/50",children:"星座信息加载失败"}),u.jsx("button",{onClick:p,className:"mt-4 btn-secondary text-sm",children:"返回图鉴"})]})});const M=()=>{p()},R=()=>{o(h.id),f(),l(null)},C=()=>{f(),l(null)};return u.jsx("div",{className:`absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200`,children:u.jsxs("div",{className:"w-full max-w-2xl glass-panel max-h-[85vh] flex flex-col overflow-hidden",children:[u.jsxs("div",{className:`relative h-32 overflow-hidden ${x?`bg-gradient-to-br ${x.color}`:"bg-space-700"}`,children:[u.jsx("div",{className:"absolute inset-0 bg-black/30"}),u.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:u.jsx("div",{className:"text-6xl opacity-30",children:g?"✦":"○"})}),u.jsxs("div",{className:"absolute top-4 left-4 right-4 flex items-start justify-between",children:[u.jsx("button",{onClick:M,className:`w-10 h-10 flex items-center justify-center rounded-full
                       bg-black/30 text-white/80 hover:bg-black/50 transition-all`,children:"←"}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("button",{onClick:()=>i(h.id),className:`w-10 h-10 flex items-center justify-center rounded-full
                          transition-all ${y?"bg-star-gold/30 text-star-gold":"bg-black/30 text-white/50 hover:text-star-gold hover:bg-black/50"}`,children:y?"★":"☆"}),u.jsx("button",{onClick:C,className:`w-10 h-10 flex items-center justify-center rounded-full
                         bg-black/30 text-white/80 hover:bg-black/50 transition-all`,children:"✕"})]})]}),u.jsxs("div",{className:"absolute bottom-4 left-5 right-5",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("h1",{className:"text-2xl font-display text-white",children:h.name}),g&&u.jsx("span",{className:"text-star-gold text-lg",children:"✓"}),m&&u.jsx("span",{className:"text-nebula-cyan text-xs px-2 py-0.5 rounded-full bg-nebula-cyan/20",children:"完美"})]}),u.jsx("p",{className:"text-sm text-white/70",children:h.nameEn})]})]}),u.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-thin",children:u.jsxs("div",{className:"p-5 space-y-6",children:[u.jsxs("div",{className:"flex flex-wrap gap-2",children:[u.jsxs("span",{className:`text-xs px-3 py-1 rounded-full ${h.difficulty===1?"bg-green-500/20 text-green-300":h.difficulty===2?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:["⭐".repeat(h.difficulty)," ",Fs[h.difficulty].label]}),x&&u.jsxs("span",{className:`text-xs px-3 py-1 rounded-full ${x.bgColor} ${x.textColor} ${x.borderColor} border`,children:[x.icon," ",h.season,"季星座"]}),g&&u.jsx("span",{className:"text-xs px-3 py-1 rounded-full bg-nebula-purple/20 text-nebula-purple border border-nebula-purple/30",children:"已发现"}),_>1&&u.jsxs("span",{className:"text-xs px-3 py-1 rounded-full bg-space-700/60 text-white/70",children:["观测 ",_," 次"]})]}),u.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[u.jsxs("div",{className:"p-3 rounded-xl bg-space-700/40 text-center",children:[u.jsx("div",{className:"text-lg font-bold text-white",children:h.stars.length}),u.jsx("div",{className:"text-[10px] text-white/50",children:"主要恒星"})]}),u.jsxs("div",{className:"p-3 rounded-xl bg-space-700/40 text-center",children:[u.jsx("div",{className:"text-lg font-bold text-white",children:h.area}),u.jsx("div",{className:"text-[10px] text-white/50",children:"面积排名"})]}),u.jsxs("div",{className:"p-3 rounded-xl bg-space-700/40 text-center",children:[u.jsxs("div",{className:"text-lg font-bold text-white",children:["第",h.ranking,"位"]}),u.jsx("div",{className:"text-[10px] text-white/50",children:"全天排名"})]})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsx("h3",{className:"text-sm font-display text-white border-l-2 border-nebula-purple pl-3",children:"星座简介"}),u.jsx("p",{className:"text-sm text-white/70 leading-relaxed",children:h.description})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsx("h3",{className:"text-sm font-display text-white border-l-2 border-star-gold pl-3",children:"神话故事"}),u.jsx("div",{className:"p-4 rounded-xl bg-space-700/30 border border-star-gold/10",children:u.jsx("p",{className:"text-sm text-white/70 leading-relaxed",children:h.mythologyDetail})})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsx("h3",{className:"text-sm font-display text-white border-l-2 border-nebula-cyan pl-3",children:"观测指南"}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"flex items-start gap-3 p-3 rounded-xl bg-space-700/30",children:[u.jsx("span",{className:"text-xl",children:"🌍"}),u.jsxs("div",{children:[u.jsx("p",{className:"text-xs text-white/50",children:"可见半球"}),u.jsx("p",{className:"text-sm text-white/80",children:h.hemisphere})]})]}),u.jsxs("div",{className:"flex items-start gap-3 p-3 rounded-xl bg-space-700/30",children:[u.jsx("span",{className:"text-xl",children:"⏰"}),u.jsxs("div",{children:[u.jsx("p",{className:"text-xs text-white/50",children:"最佳观测时间"}),u.jsx("p",{className:"text-sm text-white/80",children:h.bestTime})]})]}),u.jsxs("div",{className:"flex items-start gap-3 p-3 rounded-xl bg-space-700/30",children:[u.jsx("span",{className:"text-xl",children:"💡"}),u.jsxs("div",{children:[u.jsx("p",{className:"text-xs text-white/50",children:"观测技巧"}),u.jsx("p",{className:"text-sm text-white/80",children:h.observationTips})]})]})]})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsx("h3",{className:"text-sm font-display text-white border-l-2 border-nebula-orange pl-3",children:"主要恒星"}),u.jsx("div",{className:"space-y-2",children:h.stars.map((T,N)=>u.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-xl bg-space-700/30 hover:bg-space-700/50 transition-colors",children:[u.jsx("div",{className:"w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",style:{backgroundColor:T.color+"30",boxShadow:`0 0 10px ${T.color}40`},children:u.jsx("div",{className:"w-3 h-3 rounded-full",style:{backgroundColor:T.color}})}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("p",{className:"text-sm text-white font-medium",children:T.name}),u.jsxs("p",{className:"text-[10px] text-white/40",children:["星等: ",T.mag]})]}),u.jsxs("span",{className:"text-[10px] text-white/40",children:["#",N+1]})]},T.id))})]}),h.tags&&h.tags.length>0&&u.jsxs("div",{className:"space-y-3",children:[u.jsx("h3",{className:"text-sm font-display text-white border-l-2 border-white/30 pl-3",children:"标签"}),u.jsx("div",{className:"flex flex-wrap gap-2",children:h.tags.map((T,N)=>u.jsxs("span",{className:"text-xs px-3 py-1 rounded-full bg-space-700/50 text-white/60 border border-white/10",children:["#",T]},N))})]}),v&&u.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-r from-nebula-purple/20 to-nebula-cyan/20 border border-nebula-purple/20",children:[u.jsx("p",{className:"text-xs text-white/50 text-center",children:"发现时间"}),u.jsx("p",{className:"text-sm text-white/80 text-center font-medium mt-1",children:v.toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})})]})]})}),u.jsx("div",{className:"p-5 border-t border-white/10",children:u.jsxs("div",{className:"flex gap-3",children:[u.jsx("button",{onClick:M,className:"flex-1 btn-secondary",children:"返回图鉴"}),u.jsx("button",{onClick:R,className:"flex-1 btn-primary",children:g?"再次观测":"开始观测"})]})})]})})}function RT(){const{discoveredConstellations:t,favoriteConstellations:e,toggleFavorite:n,isConstellationComplete:i,setTargetConstellation:r,activeAtlasPanel:s,selectedConstellationDetail:a,setActivePanel:o,resetAtlasState:l,openAtlasDetail:c}=Et(),[f,p]=ze.useState(""),[h,g]=ze.useState("all"),[y,_]=ze.useState("all"),[m,d]=ze.useState("all"),[x,v]=ze.useState("name"),[M,R]=ze.useState("grid"),C=ze.useMemo(()=>{let P=[...st];if(f){const j=f.toLowerCase();P=P.filter(V=>V.name.toLowerCase().includes(j)||V.nameEn.toLowerCase().includes(j)||V.description.toLowerCase().includes(j)||V.tags.some(Y=>Y.toLowerCase().includes(j)))}return h!=="all"&&(P=P.filter(j=>j.season===h)),y!=="all"&&(P=P.filter(j=>j.difficulty===parseInt(y))),m==="discovered"?P=P.filter(j=>i(j.id)):m==="undiscovered"?P=P.filter(j=>!i(j.id)):m==="favorites"&&(P=P.filter(j=>e.includes(j.id))),P.sort((j,V)=>{switch(x){case"name":return j.name.localeCompare(V.name);case"difficulty":return j.difficulty-V.difficulty;case"season":return j.season.localeCompare(V.season);case"newest":return t.indexOf(V.id)-t.indexOf(j.id);default:return 0}}),P},[f,h,y,m,x,t,e,i]),T=ze.useMemo(()=>{const P=st.length,j=t.length,V=e.length,Y={春:st.filter($=>$.season==="春").length,夏:st.filter($=>$.season==="夏").length,秋:st.filter($=>$.season==="秋").length,冬:st.filter($=>$.season==="冬").length},D={1:st.filter($=>$.difficulty===1).length,2:st.filter($=>$.difficulty===2).length,3:st.filter($=>$.difficulty===3).length};return{total:P,discovered:j,favorites:V,bySeason:Y,byDifficulty:D}},[t,e]),N=[{value:"all",label:"全部季节"},{value:"春",label:"🌸 春季"},{value:"夏",label:"☀️ 夏季"},{value:"秋",label:"🍂 秋季"},{value:"冬",label:"❄️ 冬季"}],b=[{value:"all",label:"全部难度"},{value:"1",label:"⭐ 入门"},{value:"2",label:"⭐⭐ 进阶"},{value:"3",label:"⭐⭐⭐ 挑战"}],w=[{value:"all",label:"全部状态"},{value:"discovered",label:"✓ 已发现"},{value:"undiscovered",label:"○ 未发现"},{value:"favorites",label:"★ 收藏"}],L=[{value:"name",label:"按名称"},{value:"difficulty",label:"按难度"},{value:"season",label:"按季节"},{value:"newest",label:"最近发现"}],F=P=>{c(P)},z=P=>{r(P),l(),o(null)};return s==="detail"&&a?u.jsx(AT,{constellationId:a}):u.jsx("div",{className:`absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200`,children:u.jsxs("div",{className:"w-full max-w-2xl glass-panel max-h-[85vh] flex flex-col overflow-hidden",children:[u.jsxs("div",{className:"p-5 border-b border-white/10",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-xl font-display text-white",children:u.jsx("span",{className:"text-gradient",children:"星空图鉴"})}),u.jsx("p",{className:"text-xs text-white/50 mt-1",children:"探索星座奥秘，记录你的星空发现"})]}),u.jsx("button",{onClick:()=>{l(),o(null)},className:"icon-btn","aria-label":"关闭",children:"✕"})]}),u.jsxs("div",{className:"mt-4 grid grid-cols-4 gap-2 text-center",children:[u.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[u.jsx("div",{className:"text-lg font-bold text-nebula-cyan",children:T.discovered}),u.jsx("div",{className:"text-[10px] text-white/50",children:"已发现"})]}),u.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[u.jsx("div",{className:"text-lg font-bold text-white/80",children:T.total}),u.jsx("div",{className:"text-[10px] text-white/50",children:"总星座"})]}),u.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[u.jsx("div",{className:"text-lg font-bold text-star-gold",children:T.favorites}),u.jsx("div",{className:"text-[10px] text-white/50",children:"收藏"})]}),u.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[u.jsxs("div",{className:"text-lg font-bold text-nebula-purple",children:[Math.round(T.discovered/T.total*100),"%"]}),u.jsx("div",{className:"text-[10px] text-white/50",children:"完成度"})]})]}),u.jsxs("div",{className:"mt-4 relative",children:[u.jsx("input",{type:"text",placeholder:"搜索星座名称、描述或标签...",value:f,onChange:P=>p(P.target.value),className:`w-full px-4 py-2.5 pl-10 bg-space-700/50 border border-white/10 rounded-xl
                       text-white placeholder-white/40 text-sm focus:outline-none focus:border-nebula-purple/50
                       focus:ring-1 focus:ring-nebula-purple/30 transition-all`}),u.jsx("span",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-white/40",children:"🔍"}),f&&u.jsx("button",{onClick:()=>p(""),className:"absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 text-sm",children:"✕"})]}),u.jsxs("div",{className:"mt-3 flex flex-wrap gap-2",children:[u.jsx("div",{className:"flex items-center gap-1",children:u.jsx("select",{value:h,onChange:P=>g(P.target.value),className:`px-2 py-1.5 bg-space-700/50 border border-white/10 rounded-lg
                         text-white text-xs focus:outline-none focus:border-nebula-purple/50`,children:N.map(P=>u.jsx("option",{value:P.value,className:"bg-space-800",children:P.label},P.value))})}),u.jsx("div",{className:"flex items-center gap-1",children:u.jsx("select",{value:y,onChange:P=>_(P.target.value),className:`px-2 py-1.5 bg-space-700/50 border border-white/10 rounded-lg
                         text-white text-xs focus:outline-none focus:border-nebula-purple/50`,children:b.map(P=>u.jsx("option",{value:P.value,className:"bg-space-800",children:P.label},P.value))})}),u.jsx("div",{className:"flex items-center gap-1",children:u.jsx("select",{value:m,onChange:P=>d(P.target.value),className:`px-2 py-1.5 bg-space-700/50 border border-white/10 rounded-lg
                         text-white text-xs focus:outline-none focus:border-nebula-purple/50`,children:w.map(P=>u.jsx("option",{value:P.value,className:"bg-space-800",children:P.label},P.value))})}),u.jsxs("div",{className:"flex items-center gap-1 ml-auto",children:[u.jsx("select",{value:x,onChange:P=>v(P.target.value),className:`px-2 py-1.5 bg-space-700/50 border border-white/10 rounded-lg
                         text-white text-xs focus:outline-none focus:border-nebula-purple/50`,children:L.map(P=>u.jsx("option",{value:P.value,className:"bg-space-800",children:P.label},P.value))}),u.jsxs("div",{className:"flex bg-space-700/50 rounded-lg border border-white/10",children:[u.jsx("button",{onClick:()=>R("grid"),className:`px-2 py-1.5 text-xs rounded-l-lg transition-colors ${M==="grid"?"bg-nebula-purple/30 text-white":"text-white/50 hover:text-white/80"}`,children:"▦"}),u.jsx("button",{onClick:()=>R("list"),className:`px-2 py-1.5 text-xs rounded-r-lg transition-colors ${M==="list"?"bg-nebula-purple/30 text-white":"text-white/50 hover:text-white/80"}`,children:"☰"})]})]})]})]}),u.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-thin p-5",children:C.length===0?u.jsxs("div",{className:"text-center py-12",children:[u.jsx("div",{className:"text-4xl mb-3 opacity-50",children:"🌌"}),u.jsx("p",{className:"text-white/50 text-sm",children:f?"没有找到匹配的星座":"暂无符合条件的星座"}),(f||h!=="all"||y!=="all"||m!=="all")&&u.jsx("button",{onClick:()=>{p(""),g("all"),_("all"),d("all")},className:"mt-3 text-xs text-nebula-cyan hover:underline",children:"清除筛选条件"})]}):M==="grid"?u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:C.map(P=>{const j=i(P.id),V=e.includes(P.id),Y=P.season==="春"?"spring":P.season==="夏"?"summer":P.season==="秋"?"autumn":"winter",D=Vt[Y];return u.jsxs("div",{className:`relative rounded-2xl border overflow-hidden transition-all card-hover cursor-pointer ${j?"border-nebula-purple/50 bg-nebula-purple/8":"border-white/10 bg-space-700/30"}`,onClick:()=>F(P.id),children:[u.jsxs("div",{className:`h-20 relative overflow-hidden ${D?`bg-gradient-to-br ${D.color} opacity-20`:"bg-space-600/30"}`,children:[u.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:u.jsx("div",{className:"text-3xl opacity-60",children:j?"✦":"○"})}),u.jsx("div",{className:"absolute top-2 right-2 flex gap-1",children:u.jsx("button",{onClick:$=>{$.stopPropagation(),n(P.id)},className:`w-6 h-6 flex items-center justify-center rounded-full
                                    transition-all text-xs ${V?"bg-star-gold/20 text-star-gold":"bg-space-900/40 text-white/30 hover:text-star-gold"}`,children:V?"★":"☆"})})]}),u.jsxs("div",{className:"p-3",children:[u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("h3",{className:"text-sm font-display text-white truncate flex-1",children:P.name}),j&&u.jsx("span",{className:"text-star-gold text-xs",children:"✓"})]}),u.jsx("p",{className:"text-[10px] text-white/40 truncate",children:P.nameEn}),u.jsxs("div",{className:"mt-2 flex items-center gap-1.5",children:[u.jsx("span",{className:`text-[9px] px-1.5 py-0.5 rounded ${P.difficulty===1?"bg-green-500/20 text-green-300":P.difficulty===2?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:Fs[P.difficulty].label}),u.jsxs("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-space-600/50 text-white/50",children:[D==null?void 0:D.icon," ",P.season]})]})]})]},P.id)})}):u.jsx("div",{className:"space-y-3",children:C.map(P=>{const j=i(P.id),V=e.includes(P.id),Y=P.season==="春"?"spring":P.season==="夏"?"summer":P.season==="秋"?"autumn":"winter",D=Vt[Y];return u.jsx("div",{className:`p-4 rounded-2xl border transition-all card-hover cursor-pointer ${j?"border-nebula-purple/50 bg-nebula-purple/8":"border-white/10 bg-space-700/30"}`,onClick:()=>F(P.id),children:u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx("div",{className:`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${D?`bg-gradient-to-br ${D.color} opacity-30`:"bg-space-600/30"}`,children:u.jsx("span",{className:"text-2xl",children:j?"✦":"○"})}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("h3",{className:"text-base font-display text-white truncate",children:P.name}),j&&u.jsx("span",{className:"text-star-gold text-sm",children:"✓"})]}),u.jsx("p",{className:"text-[11px] text-white/40",children:P.nameEn}),u.jsx("p",{className:"text-xs text-white/60 mt-1 line-clamp-2",children:P.description}),u.jsxs("div",{className:"mt-2 flex items-center gap-2 flex-wrap",children:[u.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded ${P.difficulty===1?"bg-green-500/20 text-green-300":P.difficulty===2?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:Fs[P.difficulty].label}),u.jsxs("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-space-600/50 text-white/50",children:[D==null?void 0:D.icon," ",P.season,"季"]}),u.jsxs("span",{className:"text-[10px] text-white/40",children:["✦ ",P.stars.length," 星"]})]})]}),u.jsxs("div",{className:"flex flex-col gap-2 flex-shrink-0",children:[u.jsx("button",{onClick:$=>{$.stopPropagation(),n(P.id)},className:`w-8 h-8 flex items-center justify-center rounded-full
                                    transition-all ${V?"bg-star-gold/20 text-star-gold":"bg-space-700/60 text-white/30 hover:text-star-gold hover:bg-space-600/60"}`,children:V?"★":"☆"}),u.jsx("button",{onClick:$=>{$.stopPropagation(),z(P.id)},className:`w-8 h-8 flex items-center justify-center rounded-full
                                   bg-nebula-purple/20 text-nebula-cyan hover:bg-nebula-purple/30
                                   transition-all`,title:"开始观测",children:"▶"})]})]})},P.id)})})})]})})}function NT(){const{activePanel:t,setActivePanel:e,openAtlasList:n,getProgress:i,unlockedAchievements:r,observationLogs:s,seasonRewardsClaimed:a,getSeasonStats:o,favoriteConstellations:l,familyMode:c,getFamilyProgress:f}=Et(),p=i(),h=f(),g=Uf(),_=o()[g],m=Object.keys(Vt).length*3,d=[{id:"tasks",label:"星座",icon:"✨",badge:p.totalConstellations-p.constellations>0?(p.totalConstellations-p.constellations).toString():null},{id:"atlas",label:"图鉴",icon:"📚",badge:l.length>0?l.length.toString():null},{id:"family",label:"亲子",icon:"👨‍👩‍👧",badge:h.unlockedAchievements>0&&!c.enabled?h.unlockedAchievements.toString():c.enabled?"ON":null,badgeColor:c.enabled?"bg-green-500 text-white":null},{id:null,label:"夜空",icon:"🌌",isHome:!0},{id:"seasons",label:"四季",icon:Vt[g].icon,badge:a.length<m&&(_==null?void 0:_.overallPercentage)>0?`${(_==null?void 0:_.overallPercentage)||0}%`:null},{id:"achievements",label:"成就",icon:"🏆",badge:r.length>0?r.length.toString():null},{id:"settings",label:"设置",icon:"⚙️"}],x=v=>{Ke.ensureContext(),(t===v||v===null&&t===null)&&v!==null?Ke.playPanelClose():Ke.playPanelOpen();const R=v==="atlas"&&t==="atlas";if(v==="family"){e(t==="family"?null:"family");return}R?e(null):v==="atlas"?n():e(t===v?null:v)};return u.jsx("div",{className:"absolute left-0 right-0 bottom-0 z-20 p-3 pb-safe pointer-events-none",children:u.jsx("div",{className:"max-w-lg mx-auto pointer-events-auto",children:u.jsx("div",{className:"glass-panel p-1.5 flex items-center justify-around relative",children:d.map(v=>{const M=t===v.id||v.isHome&&t===null;return u.jsxs("button",{onClick:()=>x(v.id),className:`relative flex flex-col items-center justify-center rounded-xl px-2 py-2
                          transition-all duration-200 min-w-[44px] ${M?v.isHome?"bg-gradient-to-br from-nebula-purple to-nebula-cyan text-white shadow-lg -mt-5":"bg-white/10 text-white":"text-white/50 hover:text-white/80 hover:bg-white/5"}`,children:[u.jsx("span",{className:`${v.isHome?"text-2xl":"text-lg"}`,children:v.icon}),u.jsx("span",{className:`mt-0.5 ${v.isHome?"text-[10px] font-medium":"text-[9px]"}`,children:v.label}),v.badge&&!M&&u.jsx("span",{className:`absolute -top-0.5 -right-0.5 px-1 h-4 min-w-[16px] rounded-full
                                 text-[8px] font-bold flex items-center justify-center
                                 ${v.badgeColor||"bg-star-gold text-space-900"}`,children:v.badge.length>3?"99+":v.badge})]},v.label)})})})})}function PT(){const[t,e]=ze.useState(null),n=Et(s=>s.unlockedAchievements),[i,r]=ze.useState([]);return ze.useEffect(()=>{const s=n.filter(a=>!i.includes(a));if(s.length>0&&i.length>0){const a=sx(s[0]);a&&(e(a),Ke.ensureContext(),Ke.playAchievement(),setTimeout(()=>e(null),3500))}r([...n])},[n]),t?u.jsx("div",{className:"fixed inset-x-0 top-20 z-50 flex justify-center px-4 pointer-events-none animate-in slide-in-from-top-4 duration-500",children:u.jsx("div",{className:`glass-panel px-5 py-4 max-w-sm w-full border-star-gold/30
                    shadow-2xl shadow-star-gold/10 animate-bounce-in`,children:u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:`w-12 h-12 rounded-xl bg-gradient-to-br from-star-gold to-nebula-orange
                        flex items-center justify-center text-2xl shadow-lg animate-pulse-slow`,children:t.icon}),u.jsxs("div",{className:"flex-1",children:[u.jsx("div",{className:"text-[10px] text-star-gold uppercase tracking-widest font-semibold",children:"成就解锁"}),u.jsx("div",{className:"text-white font-display text-lg",children:t.name}),u.jsx("div",{className:"text-white/50 text-xs",children:t.description})]}),u.jsx("div",{className:"text-star-gold text-2xl animate-pulse-slow",children:"✦"})]})})}):null}class LT{constructor(){this.synth=null,this.currentUtterance=null,this.isSpeaking=!1,this.voiceEnabled=!0,this.voiceVolume=.8,this.voiceRate=.9,this.voicePitch=1,this.selectedVoice=null,this.initialized=!1}init(){this.initialized||("speechSynthesis"in window?(this.synth=window.speechSynthesis,this.loadVoices(),this.synth.onvoiceschanged!==void 0&&(this.synth.onvoiceschanged=()=>this.loadVoices()),this.initialized=!0):console.warn("Speech synthesis not supported"))}loadVoices(){if(!this.synth)return;const e=this.synth.getVoices(),n=e.filter(i=>i.lang.includes("zh"));n.length>0?this.selectedVoice=n.find(i=>i.name.includes("Female"))||n.find(i=>i.name.includes("female"))||n[0]:e.length>0&&(this.selectedVoice=e[0])}setVoicePreferences({volume:e,rate:n,pitch:i}){e!==void 0&&(this.voiceVolume=Math.max(0,Math.min(1,e))),n!==void 0&&(this.voiceRate=Math.max(.5,Math.min(2,n))),i!==void 0&&(this.voicePitch=Math.max(.5,Math.min(2,i)))}toggleVoice(e){this.voiceEnabled=e,!e&&this.isSpeaking&&this.stop()}speak(e,n={}){return new Promise((i,r)=>{if(!this.voiceEnabled||!this.synth){i(!1);return}this.stop();const s=new SpeechSynthesisUtterance(e);this.selectedVoice&&(s.voice=this.selectedVoice),s.volume=n.volume??this.voiceVolume,s.rate=n.rate??this.voiceRate,s.pitch=n.pitch??this.voicePitch,s.lang=n.lang||"zh-CN",s.onstart=()=>{this.isSpeaking=!0,this.currentUtterance=s,n.onStart&&n.onStart()},s.onend=()=>{this.isSpeaking=!1,this.currentUtterance=null,n.onEnd&&n.onEnd(),i(!0)},s.onerror=a=>{this.isSpeaking=!1,this.currentUtterance=null,n.onError&&n.onError(a),r(a)},this.synth.speak(s)})}stop(){this.synth&&(this.synth.cancel(),this.isSpeaking=!1,this.currentUtterance=null)}pause(){this.synth&&this.isSpeaking&&this.synth.pause()}resume(){this.synth&&this.synth.resume()}async welcome(e){const n=na.welcome[e];if(n)return this.speak(n)}async tellStory(e){const n=na.constellations[e];if(n!=null&&n.story)return this.speak(n.story,{rate:.85})}async explainScience(e){const n=na.constellations[e];if(n!=null&&n.science)return this.speak(n.science,{rate:.9})}async giveTips(e){const n=na.constellations[e];if(n!=null&&n.tips)return this.speak(n.tips,{rate:.9})}async encourage(e){const n=na.encouragement[e];if(n&&n.length>0){const i=n[Math.floor(Math.random()*n.length)];return this.speak(i,{pitch:e==="child"?1.2:1})}}async readInstruction(e){return this.speak(e,{rate:.85})}async announceAchievement(e){const n=`恭喜！获得成就：${e}`;return this.speak(n,{rate:.9,pitch:1.1})}async askQuestion(e){return this.speak(e,{rate:.85})}async readQuizQuestion(e){return this.speak(`题目：${e}`,{rate:.85})}async correctAnswer(){return this.speak("回答正确！太棒了！",{pitch:1.2,rate:1})}async wrongAnswer(e){return this.speak(`没关系，正确答案是：${e}。继续加油！`,{rate:.9})}get isSupported(){return"speechSynthesis"in window}get availableVoices(){return this.synth?this.synth.getVoices():[]}}const jt=new LT,DT={collaboration:{name:"协作勋章",icon:"🤝",color:"from-blue-500 to-cyan-400"},challenge:{name:"挑战勋章",icon:"⚔️",color:"from-red-500 to-pink-400"},guided:{name:"引导勋章",icon:"👆",color:"from-green-500 to-emerald-400"},milestone:{name:"里程碑勋章",icon:"🏆",color:"from-yellow-500 to-orange-400"},child_growth:{name:"成长勋章",icon:"🌱",color:"from-cyan-500 to-blue-400"},parent_growth:{name:"引导者勋章",icon:"👨‍🏫",color:"from-emerald-500 to-green-400"}};function UT(){var ke,rt;const{familyMode:t,setFamilyMode:e,setFamilyRole:n,setActivePanel:i,getFamilyProgress:r,getFamilyGrowthData:s,startFamilyTask:a,nextTaskStep:o,checkFamilyStreak:l,endFamilySession:c,recordMythologyTold:f,recordQuizScore:p,addFamilyLog:h}=Et(),[g,y]=ze.useState("home"),[_,m]=ze.useState(!t.currentRole),[d,x]=ze.useState("tasks"),[v,M]=ze.useState(null),[R,C]=ze.useState(null),[T,N]=ze.useState(!1),[b,w]=ze.useState(!0),L=r(),F=s();ze.useEffect(()=>(jt.init(),jt.toggleVoice(b),t.enabled||e(!0),l(),()=>{c()}),[]);const z=O=>{c(),e(O),m(!0)},P=async O=>{n(O),m(!1),b&&(N(!0),await jt.welcome(O),N(!1))},j=O=>{if(M(O),a(O.id),y("task"),O.steps&&O.steps.length>0&&b){const ce=O.steps[0];N(!0),jt.readInstruction(ce.instruction).then(()=>N(!1))}},V=async()=>{const O=o();O&&b?(N(!0),await jt.readInstruction(O.instruction),N(!1)):O||(y("home"),M(null))},Y=async O=>{f(),b&&(N(!0),await jt.tellStory(O),N(!1))},D=async O=>{b&&(N(!0),await jt.explainScience(O),N(!1))},$=async O=>{b&&(N(!0),await jt.giveTips(O),N(!1))},J=O=>{C({task:O,currentQuestion:0,score:0,answers:[]}),y("quiz"),b&&O.questions&&(N(!0),jt.readQuizQuestion(O.questions[0].q).then(()=>N(!1)))},le=async O=>{if(!R)return;const ce=R.task.questions[R.currentQuestion],ge=O===ce.a,ie=[...R.answers,{question:ce.q,answer:O,correct:ge}],Ce=R.score+(ge?20:0);if(b&&(N(!0),ge?await jt.correctAnswer():await jt.wrongAnswer(ce.a),N(!1)),R.currentQuestion>=R.task.questions.length-1)p(Ce,R.task.questions.length*20),h({type:"quiz_complete",taskId:R.task.id,score:Ce,total:R.task.questions.length*20,timestamp:Date.now()}),C({...R,answers:ie,score:Ce,finished:!0});else{const A=R.task.questions[R.currentQuestion+1];C({...R,currentQuestion:R.currentQuestion+1,score:Ce,answers:ie}),b&&(N(!0),jt.readQuizQuestion(A.q).then(()=>N(!1)))}},we=async O=>{b&&(N(!0),await jt.encourage(O),N(!1))},je=()=>{jt.stop(),N(!1)},q=()=>{const O=!b;w(O),jt.toggleVoice(O)},re=()=>u.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-space-900/90 backdrop-blur-md",children:u.jsx("div",{className:"max-w-md w-full mx-4",children:u.jsxs("div",{className:"glass-panel p-8 text-center",children:[u.jsx("div",{className:"text-5xl mb-4",children:"👨‍👩‍👧"}),u.jsx("h2",{className:"text-2xl font-display text-white mb-2",children:"欢迎来到亲子星空探索"}),u.jsx("p",{className:"text-white/60 text-sm mb-8",children:"请选择你当前的角色，开始奇妙的星空之旅"}),u.jsx("div",{className:"grid grid-cols-2 gap-4",children:Object.values(Fr).map(O=>u.jsxs("button",{onClick:()=>P(O.id),className:`p-6 rounded-2xl border-2 transition-all card-hover ${t.currentRole===O.id?"border-nebula-purple bg-nebula-purple/20":"border-white/10 bg-space-700/40 hover:border-white/30"}`,children:[u.jsx("div",{className:"text-4xl mb-3",children:O.icon}),u.jsx("div",{className:"font-display text-white text-lg",children:O.name}),u.jsx("div",{className:"text-xs text-white/50 mt-2",children:O.description})]},O.id))}),u.jsx("button",{onClick:()=>{z(!1),i(null)},className:"mt-6 text-white/50 hover:text-white text-sm transition-colors",children:"← 返回单人模式"})]})})}),pe=()=>u.jsxs("div",{className:"space-y-5",children:[u.jsxs("div",{className:"p-4 rounded-2xl border border-nebula-purple/30 bg-gradient-to-br from-nebula-purple/10 to-nebula-cyan/10",children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("div",{className:"flex items-center gap-3",children:Object.values(t.familyMembers).map((O,ce)=>u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"w-14 h-14 rounded-full bg-space-700/60 flex items-center justify-center text-2xl border-2 border-white/10",children:O.avatar}),u.jsx("div",{className:"text-xs text-white/70 mt-1",children:O.name}),u.jsxs("div",{className:"text-[10px] text-nebula-cyan font-mono",children:["Lv.",O.level]})]},ce))}),u.jsxs("div",{className:"text-right",children:[u.jsxs("div",{className:"text-star-gold text-lg font-display",children:["🔥 ",t.streakDays," 天"]}),u.jsx("div",{className:"text-[10px] text-white/50",children:"连续打卡"}),u.jsxs("div",{className:"text-xs text-white/60 mt-1",children:["⏱️ ",Math.floor(L.totalMinutes/60),"h ",L.totalMinutes%60,"m"]})]})]}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:Object.entries(t.familyMembers).map(([O,ce])=>{const ge=ce.level*100,ie=ce.xp-(ce.level-1)*100,Ce=Math.min(100,Math.round(ie/ge*100));return u.jsxs("div",{className:"bg-space-800/40 rounded-xl p-3",children:[u.jsxs("div",{className:"flex items-center justify-between text-[10px] mb-1",children:[u.jsxs("span",{className:"text-white/60",children:[ce.name,"经验"]}),u.jsxs("span",{className:"text-white/40 font-mono",children:[ce.xp," XP"]})]}),u.jsx("div",{className:"h-1.5 bg-space-900/60 rounded-full overflow-hidden",children:u.jsx("div",{className:`h-full rounded-full bg-gradient-to-r ${Fr[O].color}`,style:{width:`${Ce}%`}})})]},O)})})]}),u.jsx("div",{className:"grid grid-cols-4 gap-2",children:[{label:"星座",value:L.discoveredConstellations,icon:"⭐"},{label:"任务",value:`${L.completedTasks}/${L.totalTasks}`,icon:"📋"},{label:"勋章",value:`${L.unlockedAchievements}/${L.totalAchievements}`,icon:"🏅"},{label:"协作",value:L.collaborativeCount,icon:"🤝"}].map((O,ce)=>u.jsxs("div",{className:"bg-space-700/30 rounded-xl p-3 text-center border border-white/5",children:[u.jsx("div",{className:"text-xl mb-1",children:O.icon}),u.jsx("div",{className:"text-sm font-display text-white",children:O.value}),u.jsx("div",{className:"text-[9px] text-white/50",children:O.label})]},ce))}),u.jsxs("div",{className:"mt-4",children:[u.jsx("div",{className:"flex items-center justify-between mb-3",children:u.jsxs("h3",{className:"font-display text-white/90 text-sm flex items-center gap-2",children:[u.jsx("span",{children:"📊"})," 本周探索记录"]})}),u.jsxs("div",{className:"bg-space-700/30 rounded-xl p-4 border border-white/5",children:[u.jsx("div",{className:"flex items-end justify-between h-24 gap-1",children:F.weeklyData.map((O,ce)=>u.jsxs("div",{className:"flex-1 flex flex-col items-center gap-1",children:[u.jsx("div",{className:"w-full bg-space-800/60 rounded-t relative",style:{height:"100%"},children:u.jsx("div",{className:"absolute bottom-0 w-full bg-gradient-to-t from-nebula-purple to-nebula-cyan rounded-t transition-all duration-500",style:{height:`${Math.min(100,O.discoveries*30)}%`}})}),u.jsx("span",{className:"text-[9px] text-white/50",children:O.date})]},ce))}),u.jsxs("div",{className:"flex justify-between text-[10px] text-white/40 mt-2",children:[u.jsxs("span",{children:["共 ",F.totalSessions," 次探索"]}),u.jsxs("span",{children:["平均每次 ",F.avgSessionLength," 分钟"]})]})]})]}),u.jsxs("div",{className:"mt-4",children:[u.jsxs("h3",{className:"font-display text-white/90 text-sm mb-3 flex items-center gap-2",children:[u.jsx("span",{children:"✨"})," 推荐今日任务"]}),u.jsx("div",{className:"space-y-2",children:jl.filter(O=>O.difficulty<=2).slice(0,3).map(O=>{var ie;const ce=up[O.type],ge=t.completedTasks.some(Ce=>Ce.taskId===O.id);return u.jsx("button",{onClick:()=>O.type==="challenge"&&O.questions?J(O):j(O),disabled:ge,className:`w-full p-4 rounded-xl border text-left transition-all card-hover ${ge?"border-green-500/30 bg-green-500/5 opacity-70":"border-white/10 bg-space-700/30 hover:border-nebula-purple/40"}`,children:u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${ge?"bg-green-500/20":"bg-space-600/50"}`,children:ge?"✓":O.icon}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-sm font-medium text-white",children:O.name}),u.jsxs("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/60",children:[ce.icon," ",ce.name]})]}),u.jsx("p",{className:"text-[11px] text-white/50 mt-0.5 truncate",children:O.description})]}),u.jsxs("span",{className:"text-star-gold text-xs",children:["+",((ie=O.reward)==null?void 0:ie.xp)||0," XP"]})]})},O.id)})})]}),u.jsxs("div",{className:"mt-4",children:[u.jsxs("h3",{className:"font-display text-white/90 text-sm mb-3 flex items-center gap-2",children:[u.jsx("span",{children:"🔊"})," 星空故事馆"]}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:st.slice(0,4).map(O=>u.jsxs("div",{className:"bg-space-700/30 rounded-xl p-3 border border-white/5",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[u.jsx("span",{className:"text-lg",children:O.season==="春"?"🌸":O.season==="夏"?"☀️":O.season==="秋"?"🍂":"❄️"}),u.jsx("span",{className:"text-xs font-medium text-white truncate",children:O.name})]}),u.jsxs("div",{className:"space-y-1",children:[u.jsx("button",{onClick:()=>Y(O.id),className:"w-full text-[10px] py-1.5 rounded-lg bg-nebula-purple/20 text-nebula-purple hover:bg-nebula-purple/30 transition-colors",children:"📖 听神话故事"}),u.jsx("button",{onClick:()=>D(O.id),className:"w-full text-[10px] py-1.5 rounded-lg bg-nebula-cyan/20 text-nebula-cyan hover:bg-nebula-cyan/30 transition-colors",children:"🔬 学科学知识"})]})]},O.id))})]})]}),ue=()=>u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsx("h3",{className:"font-display text-white/90 text-sm",children:"全部任务"}),u.jsxs("span",{className:"text-[10px] text-white/50",children:["已完成 ",L.completedTasks," / ",L.totalTasks]})]}),Object.entries(up).map(([O,ce])=>{const ge=jl.filter(ie=>ie.type===O);return ge.length===0?null:u.jsxs("div",{className:"mb-4",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[u.jsx("span",{className:"text-sm",children:ce.icon}),u.jsx("span",{className:"text-xs text-white/70",children:ce.name}),u.jsx("span",{className:"text-[10px] text-white/40",children:ce.description})]}),u.jsx("div",{className:"space-y-2",children:ge.map(ie=>{var S;const Ce=t.completedTasks.some(G=>G.taskId===ie.id),A=t.activeTaskId===ie.id;return u.jsxs("button",{onClick:()=>{ie.type==="challenge"&&ie.questions?J(ie):j(ie)},disabled:Ce&&!A,className:`w-full p-4 rounded-xl border text-left transition-all card-hover ${A?"border-nebula-cyan bg-nebula-cyan/10":Ce?"border-green-500/30 bg-green-500/5 opacity-70":"border-white/10 bg-space-700/30 hover:border-nebula-purple/40"}`,children:[u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx("div",{className:`w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0 ${A?"bg-nebula-cyan/20":Ce?"bg-green-500/20":"bg-space-600/50"}`,children:Ce?"✓":ie.icon}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-sm font-medium text-white",children:ie.name}),u.jsx("div",{className:"flex gap-1",children:Array.from({length:ie.difficulty}).map((G,Q)=>u.jsx("span",{className:"text-[9px] text-star-gold",children:"★"},Q))})]}),u.jsx("p",{className:"text-[11px] text-white/50 mt-0.5",children:ie.description}),u.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[u.jsxs("span",{className:"text-[10px] text-star-gold",children:["+",((S=ie.reward)==null?void 0:S.xp)||0," XP"]}),ie.steps&&u.jsxs("span",{className:"text-[10px] text-white/40",children:[ie.steps.length," 步骤"]}),ie.questions&&u.jsxs("span",{className:"text-[10px] text-white/40",children:[ie.questions.length," 题目"]})]})]})]}),A&&u.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:u.jsx("span",{className:"text-[10px] text-nebula-cyan animate-pulse",children:"⏳ 进行中..."})})]},ie.id)})})]},O)})]}),Ie=()=>{const O=Hl.reduce((ce,ge)=>(ce[ge.category]||(ce[ge.category]=[]),ce[ge.category].push(ge),ce),{});return u.jsxs("div",{className:"space-y-5",children:[u.jsxs("div",{className:"p-4 rounded-2xl border border-star-gold/30 bg-star-gold/5",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-2xl",children:"🏅"}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-display text-white text-sm",children:"亲子勋章"}),u.jsx("p",{className:"text-[10px] text-white/50",children:"记录你们的每一个美好时刻"})]})]}),u.jsxs("div",{className:"text-right",children:[u.jsxs("div",{className:"text-xl font-display text-star-gold",children:[L.unlockedAchievements," / ",L.totalAchievements]}),u.jsx("div",{className:"text-[9px] text-white/40",children:"已解锁"})]})]}),u.jsx("div",{className:"mt-3 h-2 bg-space-900/60 rounded-full overflow-hidden",children:u.jsx("div",{className:"h-full bg-gradient-to-r from-star-gold via-nebula-orange to-nebula-purple rounded-full transition-all duration-700",style:{width:`${L.totalAchievements>0?L.unlockedAchievements/L.totalAchievements*100:0}%`}})})]}),Object.entries(O).map(([ce,ge])=>{const ie=DT[ce],Ce=ge.filter(A=>t.unlockedFamilyAchievements.includes(A.id)).length;return u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx("span",{className:"text-lg",children:ie.icon}),u.jsx("h3",{className:"font-display text-white/90 text-sm",children:ie.name}),u.jsxs("span",{className:"text-[10px] text-white/40 ml-auto",children:[Ce," / ",ge.length]})]}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:ge.map(A=>{const S=t.unlockedFamilyAchievements.includes(A.id);return u.jsx("div",{className:`p-3 rounded-xl border transition-all ${S?"border-white/20 bg-space-700/40":"border-white/5 bg-space-900/40 opacity-50"}`,children:u.jsxs("div",{className:"flex items-start gap-2",children:[u.jsx("div",{className:`w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0 ${S?`bg-gradient-to-br ${A.color}`:"bg-space-800 grayscale"}`,children:A.icon}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("div",{className:`text-xs font-semibold ${S?"text-white":"text-white/50"}`,children:A.name}),u.jsx("div",{className:"text-[9px] text-white/40 mt-0.5 leading-tight",children:A.description})]})]})},A.id)})})]},ce)})]})},Le=()=>{var Ce;const O=v||ga(t.activeTaskId);if(!O)return null;const ce=(Ce=O.steps)==null?void 0:Ce[t.currentStepIndex],ge=O.steps?Math.round(t.currentStepIndex/O.steps.length*100):0,ie=ce?Fr[ce.role]:null;return u.jsxs("div",{className:"space-y-5",children:[u.jsxs("div",{className:`p-4 rounded-2xl border ${ie?ie.color.replace("from-","border-").split(" ")[0]+"/30":"border-white/10"} bg-space-700/30`,children:[u.jsxs("div",{className:"flex items-center justify-between mb-3",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-2xl",children:O.icon}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-display text-white",children:O.name}),u.jsx("p",{className:"text-[10px] text-white/50",children:O.description})]})]}),u.jsx("button",{onClick:()=>{y("home"),M(null)},className:"w-8 h-8 flex items-center justify-center rounded-lg bg-space-600/50 text-white/60 hover:bg-red-500/30 hover:text-red-200 transition-all",children:"✕"})]}),O.steps&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"flex justify-between text-[10px] mb-2",children:[u.jsx("span",{className:"text-white/50",children:"任务进度"}),u.jsxs("span",{className:"text-white/60 font-mono",children:[t.currentStepIndex+1," / ",O.steps.length]})]}),u.jsx("div",{className:"h-2 bg-space-900/60 rounded-full overflow-hidden",children:u.jsx("div",{className:`h-full rounded-full bg-gradient-to-r ${(ie==null?void 0:ie.color)||"from-nebula-purple to-nebula-cyan"} transition-all duration-500`,style:{width:`${ge}%`}})})]})]}),ce&&u.jsxs("div",{className:`p-5 rounded-2xl border ${ie.color.replace("from-","border-").split(" ")[0]}/40 bg-gradient-to-br ${ie.color}/5`,children:[u.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[u.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${ie.color}`,children:ie.icon}),u.jsxs("div",{children:[u.jsx("div",{className:"text-xs text-white/60",children:"当前轮到"}),u.jsx("div",{className:"font-display text-white text-lg",children:ie.name})]})]}),u.jsxs("div",{className:"bg-space-800/40 rounded-xl p-4 mb-4",children:[u.jsx("div",{className:"text-[10px] text-white/50 mb-1",children:"任务指令"}),u.jsx("div",{className:"text-white/90 text-sm leading-relaxed",children:ce.instruction})]}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("button",{onClick:()=>we(ce.role),className:"flex-1 py-2.5 rounded-xl bg-star-gold/20 text-star-gold text-sm hover:bg-star-gold/30 transition-colors",children:"💬 鼓励一下"}),u.jsx("button",{onClick:je,disabled:!T,className:"px-4 py-2.5 rounded-xl bg-white/10 text-white/70 text-sm disabled:opacity-30 hover:bg-white/20 transition-colors",children:"🔇"})]})]}),u.jsxs("div",{className:"p-4 rounded-2xl border border-white/10 bg-space-700/20",children:[u.jsxs("h4",{className:"text-xs text-white/70 mb-3 flex items-center gap-2",children:[u.jsx("span",{children:"📚"})," 相关星座知识"]}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:st.slice(0,2).map(A=>u.jsxs("button",{onClick:()=>$(A.id),className:"p-3 rounded-xl bg-space-800/40 text-left hover:bg-space-700/40 transition-colors border border-white/5",children:[u.jsx("div",{className:"text-sm font-medium text-white mb-1",children:A.name}),u.jsxs("div",{className:"text-[9px] text-white/50",children:[A.description.slice(0,30),"..."]}),u.jsx("div",{className:"text-[9px] text-nebula-cyan mt-1",children:"💡 观看技巧 →"})]},A.id))})]}),u.jsx("button",{onClick:V,className:`w-full py-4 rounded-2xl font-display text-white text-lg transition-all ${ce?`bg-gradient-to-r ${(ie==null?void 0:ie.color)||"from-nebula-purple to-nebula-cyan"} hover:shadow-lg active:scale-[0.98]`:"bg-gradient-to-r from-green-500 to-emerald-400 hover:shadow-lg active:scale-[0.98]"}`,children:ce?"完成此步 →":"🎉 完成任务"})]})},Xe=()=>{if(!R)return null;const{task:O,currentQuestion:ce,score:ge,answers:ie,finished:Ce}=R;if(Ce){const S=Math.round(ge/(O.questions.length*20)*100);return u.jsxs("div",{className:"space-y-5",children:[u.jsxs("div",{className:"p-8 rounded-2xl border border-star-gold/30 bg-gradient-to-br from-star-gold/10 to-transparent text-center",children:[u.jsx("div",{className:"text-6xl mb-4",children:S>=80?"🎉":S>=60?"👍":"💪"}),u.jsx("h2",{className:"text-2xl font-display text-white mb-2",children:S>=80?"太棒了！":S>=60?"做得不错！":"继续加油！"}),u.jsxs("div",{className:"text-4xl font-display text-star-gold mb-2",children:[ge," 分"]}),u.jsxs("p",{className:"text-sm text-white/60",children:["答对了 ",ie.filter(G=>G.correct).length," / ",ie.length," 题"]})]}),u.jsx("div",{className:"space-y-2",children:ie.map((G,Q)=>u.jsx("div",{className:`p-3 rounded-xl border ${G.correct?"border-green-500/30 bg-green-500/5":"border-red-500/30 bg-red-500/5"}`,children:u.jsxs("div",{className:"flex items-start gap-2",children:[u.jsx("span",{className:G.correct?"text-green-400":"text-red-400",children:G.correct?"✓":"✕"}),u.jsxs("div",{className:"flex-1",children:[u.jsx("div",{className:"text-xs text-white/80",children:G.question}),u.jsxs("div",{className:`text-[10px] mt-1 ${G.correct?"text-green-400":"text-red-400"}`,children:["你的答案: ",G.answer]})]})]})},Q))}),u.jsx("button",{onClick:()=>{C(null),y("home")},className:"w-full py-4 rounded-2xl bg-gradient-to-r from-nebula-purple to-nebula-cyan text-white font-display text-lg hover:shadow-lg active:scale-[0.98] transition-all",children:"返回首页"})]})}const A=O.questions[ce];return u.jsxs("div",{className:"space-y-5",children:[u.jsxs("div",{className:"p-4 rounded-2xl border border-nebula-purple/30 bg-nebula-purple/5",children:[u.jsxs("div",{className:"flex items-center justify-between mb-3",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-2xl",children:"🎯"}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-display text-white",children:O.name}),u.jsxs("p",{className:"text-[10px] text-white/50",children:["第 ",ce+1," / ",O.questions.length," 题"]})]})]}),u.jsx("div",{className:"text-right",children:u.jsxs("div",{className:"text-star-gold font-display",children:[ge," 分"]})})]}),u.jsx("div",{className:"h-2 bg-space-900/60 rounded-full overflow-hidden",children:u.jsx("div",{className:"h-full bg-gradient-to-r from-nebula-purple to-nebula-cyan rounded-full transition-all duration-500",style:{width:`${ce/O.questions.length*100}%`}})})]}),u.jsxs("div",{className:"p-6 rounded-2xl border border-white/10 bg-space-700/30",children:[u.jsx("div",{className:"text-lg font-display text-white leading-relaxed mb-6",children:A.q}),u.jsx("div",{className:"space-y-2",children:A.options.map((S,G)=>u.jsx("button",{onClick:()=>le(S),className:"w-full p-4 rounded-xl border border-white/10 bg-space-800/40 text-left hover:bg-nebula-purple/20 hover:border-nebula-purple/40 transition-all text-white/90 text-sm",children:u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("span",{className:"w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono",children:String.fromCharCode(65+G)}),u.jsx("span",{children:S})]})},G))})]}),u.jsx("div",{className:"flex gap-2",children:u.jsx("button",{onClick:()=>{T?je():(N(!0),jt.readQuizQuestion(A.q).then(()=>N(!1)))},className:"flex-1 py-3 rounded-xl bg-white/10 text-white/80 text-sm hover:bg-white/20 transition-colors",children:T?"🔇 停止朗读":"🔊 再听一遍"})})]})},I=()=>u.jsxs("div",{className:"space-y-4",children:[u.jsx("h3",{className:"font-display text-white/90 text-sm",children:"家庭探索记录"}),t.familyLog.length===0?u.jsxs("div",{className:"h-40 flex flex-col items-center justify-center text-center",children:[u.jsx("div",{className:"text-4xl mb-3 opacity-30",children:"📝"}),u.jsx("h4",{className:"text-white/60 font-display mb-1",children:"暂无记录"}),u.jsx("p",{className:"text-xs text-white/40 max-w-xs leading-relaxed",children:"开始你们的第一次亲子星空探索吧！"})]}):u.jsx("div",{className:"space-y-2",children:t.familyLog.slice(0,20).map((O,ce)=>{const ge=O.constellationId?Ki(O.constellationId):null,ie=O.role?Fr[O.role]:null;let Ce="bg-space-700/30",A="border-white/10",S="📌";return O.type==="discovery"?(Ce="bg-nebula-purple/10",A="border-nebula-purple/30",S="⭐"):O.type==="reobservation"?(Ce="bg-nebula-cyan/10",A="border-nebula-cyan/30",S="🔄"):O.type==="family_achievement"?(Ce="bg-star-gold/10",A="border-star-gold/30",S="🏅"):O.type==="quiz_complete"&&(Ce="bg-green-500/10",A="border-green-500/30",S="🎯"),u.jsx("div",{className:`p-3 rounded-xl border ${A} ${Ce}`,children:u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx("div",{className:"text-lg",children:S}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[u.jsxs("span",{className:"text-xs font-medium text-white",children:[O.type==="discovery"&&"新发现星座",O.type==="reobservation"&&"再次观测",O.type==="family_achievement"&&"获得勋章",O.type==="quiz_complete"&&"完成测验"]}),ge&&u.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/70",children:ge.name}),O.perfect&&u.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-star-gold/20 text-star-gold",children:"完美"}),ie&&u.jsxs("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/70",children:[ie.icon," ",ie.name]})]}),O.achievementName&&u.jsx("div",{className:"text-sm text-star-gold mt-1",children:O.achievementName}),O.score!==void 0&&u.jsxs("div",{className:"text-sm text-green-400 mt-1",children:[O.score," / ",O.total," 分"]}),u.jsx("div",{className:"text-[9px] text-white/40 mt-1 font-mono",children:Aa(O.timestamp)})]})]})},ce)})})]}),Ge=()=>{if(!t.currentRole||_)return null;if(g==="task"&&t.activeTaskId)return Le();if(g==="quiz"&&R)return Xe();switch(d){case"tasks":return ue();case"achievements":return Ie();case"records":return I();default:return pe()}};return u.jsxs("div",{className:"absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4 bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200",children:[_&&t.enabled&&re(),u.jsxs("div",{className:"w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden",children:[u.jsxs("div",{className:"p-5 border-b border-white/10",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsxs("h2",{className:"text-xl font-display text-white flex items-center gap-2",children:[u.jsx("span",{children:"👨‍👩‍👧"}),"亲子共学",t.currentRole&&u.jsxs("span",{className:"text-xs font-normal px-2 py-0.5 rounded-full bg-nebula-purple/30 text-nebula-cyan ml-2",children:[(ke=Fr[t.currentRole])==null?void 0:ke.icon," ",(rt=Fr[t.currentRole])==null?void 0:rt.name]})]}),u.jsx("p",{className:"text-xs text-white/50 mt-1",children:"与家人一起探索星空的奥秘"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{onClick:q,className:`w-9 h-9 flex items-center justify-center rounded-lg transition-all ${b?"bg-nebula-purple/30 text-nebula-cyan":"bg-white/10 text-white/40"}`,children:b?"🔊":"🔇"}),u.jsx("button",{onClick:()=>{z(!1),i(null)},className:"icon-btn","aria-label":"关闭",children:"✕"})]})]}),t.currentRole&&!_&&u.jsx("div",{className:"mt-4 flex gap-2",children:[{id:"home",label:"首页",icon:"🏠"},{id:"tasks",label:"任务",icon:"📋"},{id:"achievements",label:"勋章",icon:"🏅"},{id:"records",label:"记录",icon:"📝"}].map(O=>u.jsxs("button",{onClick:()=>{x(O.id),y(O.id==="home"?"home":O.id)},className:`flex-1 py-2 px-2 rounded-lg text-xs transition-all flex items-center justify-center gap-1 ${O.id==="home"&&g==="home"||d===O.id?"bg-white/10 text-white border border-white/10":"text-white/50 hover:text-white/80"}`,children:[u.jsx("span",{children:O.icon}),u.jsx("span",{className:"hidden sm:inline",children:O.label})]},O.id))})]}),u.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-thin p-5",children:Ge()}),T&&u.jsx("div",{className:"px-5 py-3 bg-nebula-purple/20 border-t border-nebula-purple/30",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("div",{className:"flex gap-0.5",children:[1,2,3,4].map(O=>u.jsx("div",{className:"w-1 bg-nebula-cyan rounded-full animate-pulse",style:{height:`${8+Math.random()*12}px`,animationDelay:`${O*.1}s`}},O))}),u.jsx("span",{className:"text-xs text-white/70",children:"正在播放..."})]}),u.jsx("button",{onClick:je,className:"text-xs text-white/60 hover:text-white transition-colors",children:"停止"})]})})]})]})}function IT(){const t=Et(e=>e.activePanel);return Et(e=>e.familyMode.enabled),u.jsxs("div",{className:"relative w-full h-full overflow-hidden bg-space-900",children:[u.jsx(yT,{}),u.jsx(ST,{}),u.jsx(NT,{}),u.jsx(PT,{}),t==="tasks"&&u.jsx(MT,{}),t==="atlas"&&u.jsx(RT,{}),t==="log"&&u.jsx(wT,{}),t==="achievements"&&u.jsx(bT,{}),t==="settings"&&u.jsx(TT,{}),t==="seasons"&&u.jsx(CT,{}),t==="family"&&u.jsx(UT,{}),u.jsx("div",{className:`pointer-events-none absolute top-0 left-0 w-full h-32
                      bg-gradient-to-b from-space-900/50 to-transparent z-10`}),u.jsx("div",{className:`pointer-events-none absolute bottom-0 left-0 w-full h-40
                      bg-gradient-to-t from-space-900/80 to-transparent z-10`})]})}Uu.createRoot(document.getElementById("root")).render(u.jsx(Km.StrictMode,{children:u.jsx(IT,{})}));
