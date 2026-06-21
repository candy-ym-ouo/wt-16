var W0=Object.defineProperty;var X0=(t,e,n)=>e in t?W0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Zf=(t,e,n)=>X0(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Hm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Vm={exports:{}},ec={},Gm={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ya=Symbol.for("react.element"),$0=Symbol.for("react.portal"),Y0=Symbol.for("react.fragment"),q0=Symbol.for("react.strict_mode"),K0=Symbol.for("react.profiler"),Z0=Symbol.for("react.provider"),Q0=Symbol.for("react.context"),J0=Symbol.for("react.forward_ref"),ev=Symbol.for("react.suspense"),tv=Symbol.for("react.memo"),nv=Symbol.for("react.lazy"),Qf=Symbol.iterator;function iv(t){return t===null||typeof t!="object"?null:(t=Qf&&t[Qf]||t["@@iterator"],typeof t=="function"?t:null)}var Wm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xm=Object.assign,$m={};function Ws(t,e,n){this.props=t,this.context=e,this.refs=$m,this.updater=n||Wm}Ws.prototype.isReactComponent={};Ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ym(){}Ym.prototype=Ws.prototype;function Bd(t,e,n){this.props=t,this.context=e,this.refs=$m,this.updater=n||Wm}var Hd=Bd.prototype=new Ym;Hd.constructor=Bd;Xm(Hd,Ws.prototype);Hd.isPureReactComponent=!0;var Jf=Array.isArray,qm=Object.prototype.hasOwnProperty,Vd={current:null},Km={key:!0,ref:!0,__self:!0,__source:!0};function Zm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)qm.call(e,i)&&!Km.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ya,type:t,key:s,ref:a,props:r,_owner:Vd.current}}function rv(t,e){return{$$typeof:Ya,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ya}function sv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var eh=/\/+/g;function Cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sv(""+t.key):e.toString(36)}function nl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ya:case $0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Cc(a,0):i,Jf(r)?(n="",t!=null&&(n=t.replace(eh,"$&/")+"/"),nl(r,e,n,"",function(u){return u})):r!=null&&(Gd(r)&&(r=rv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(eh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Jf(t))for(var o=0;o<t.length;o++){s=t[o];var c=i+Cc(s,o);a+=nl(s,e,n,c,r)}else if(c=iv(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=i+Cc(s,o++),a+=nl(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ao(t,e,n){if(t==null)return t;var i=[],r=0;return nl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function av(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},il={transition:null},ov={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:il,ReactCurrentOwner:Vd};function Qm(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:ao,forEach:function(t,e,n){ao(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ao(t,function(){e++}),e},toArray:function(t){return ao(t,function(e){return e})||[]},only:function(t){if(!Gd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Ws;Ve.Fragment=Y0;Ve.Profiler=K0;Ve.PureComponent=Bd;Ve.StrictMode=q0;Ve.Suspense=ev;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ov;Ve.act=Qm;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Xm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Vd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in e)qm.call(e,c)&&!Km.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&o!==void 0?o[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Ya,type:t.type,key:r,ref:s,props:i,_owner:a}};Ve.createContext=function(t){return t={$$typeof:Q0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Z0,_context:t},t.Consumer=t};Ve.createElement=Zm;Ve.createFactory=function(t){var e=Zm.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:J0,render:t}};Ve.isValidElement=Gd;Ve.lazy=function(t){return{$$typeof:nv,_payload:{_status:-1,_result:t},_init:av}};Ve.memo=function(t,e){return{$$typeof:tv,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=il.transition;il.transition={};try{t()}finally{il.transition=e}};Ve.unstable_act=Qm;Ve.useCallback=function(t,e){return Jt.current.useCallback(t,e)};Ve.useContext=function(t){return Jt.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return Jt.current.useEffect(t,e)};Ve.useId=function(){return Jt.current.useId()};Ve.useImperativeHandle=function(t,e,n){return Jt.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return Jt.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return Jt.current.useReducer(t,e,n)};Ve.useRef=function(t){return Jt.current.useRef(t)};Ve.useState=function(t){return Jt.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return Jt.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return Jt.current.useTransition()};Ve.version="18.3.1";Gm.exports=Ve;var Le=Gm.exports;const Jm=Hm(Le);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv=Le,cv=Symbol.for("react.element"),uv=Symbol.for("react.fragment"),dv=Object.prototype.hasOwnProperty,fv=lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hv={key:!0,ref:!0,__self:!0,__source:!0};function eg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)dv.call(e,i)&&!hv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:cv,type:t,key:s,ref:a,props:r,_owner:fv.current}}ec.Fragment=uv;ec.jsx=eg;ec.jsxs=eg;Vm.exports=ec;var l=Vm.exports,Uu={},tg={exports:{}},vn={},ng={exports:{}},ig={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,$){var J=D.length;D.push($);e:for(;0<J;){var le=J-1>>>1,we=D[le];if(0<r(we,$))D[le]=$,D[J]=we,J=le;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var $=D[0],J=D.pop();if(J!==$){D[0]=J;e:for(var le=0,we=D.length,Be=we>>>1;le<Be;){var q=2*(le+1)-1,re=D[q],pe=q+1,ue=D[pe];if(0>r(re,J))pe<we&&0>r(ue,re)?(D[le]=ue,D[pe]=J,le=pe):(D[le]=re,D[q]=J,le=q);else if(pe<we&&0>r(ue,J))D[le]=ue,D[pe]=J,le=pe;else break e}}return $}function r(D,$){var J=D.sortIndex-$.sortIndex;return J!==0?J:D.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var c=[],u=[],f=1,p=null,h=3,g=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var $=n(u);$!==null;){if($.callback===null)i(u);else if($.startTime<=D)i(u),$.sortIndex=$.expirationTime,e(c,$);else break;$=n(u)}}function E(D){if(y=!1,v(D),!_)if(n(c)!==null)_=!0,V(R);else{var $=n(u);$!==null&&Y(E,$.startTime-D)}}function R(D,$){_=!1,y&&(y=!1,d(N),N=-1),g=!0;var J=h;try{for(v($),p=n(c);p!==null&&(!(p.expirationTime>$)||D&&!L());){var le=p.callback;if(typeof le=="function"){p.callback=null,h=p.priorityLevel;var we=le(p.expirationTime<=$);$=t.unstable_now(),typeof we=="function"?p.callback=we:p===n(c)&&i(c),v($)}else i(c);p=n(c)}if(p!==null)var Be=!0;else{var q=n(u);q!==null&&Y(E,q.startTime-$),Be=!1}return Be}finally{p=null,h=J,g=!1}}var C=!1,S=null,N=-1,T=5,w=-1;function L(){return!(t.unstable_now()-w<T)}function F(){if(S!==null){var D=t.unstable_now();w=D;var $=!0;try{$=S(!0,D)}finally{$?z():(C=!1,S=null)}}else C=!1}var z;if(typeof x=="function")z=function(){x(F)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,B=P.port2;P.port1.onmessage=F,z=function(){B.postMessage(null)}}else z=function(){m(F,0)};function V(D){S=D,C||(C=!0,z())}function Y(D,$){N=m(function(){D(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,V(R))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var J=h;h=$;try{return D()}finally{h=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,$){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var J=h;h=D;try{return $()}finally{h=J}},t.unstable_scheduleCallback=function(D,$,J){var le=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?le+J:le):J=le,D){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=J+we,D={id:f++,callback:$,priorityLevel:D,startTime:J,expirationTime:we,sortIndex:-1},J>le?(D.sortIndex=J,e(u,D),n(c)===null&&D===n(u)&&(y?(d(N),N=-1):y=!0,Y(E,J-le))):(D.sortIndex=we,e(c,D),_||g||(_=!0,V(R))),D},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(D){var $=h;return function(){var J=h;h=$;try{return D.apply(this,arguments)}finally{h=J}}}})(ig);ng.exports=ig;var pv=ng.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv=Le,gn=pv;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rg=new Set,Ra={};function Lr(t,e){Rs(t,e),Rs(t+"Capture",e)}function Rs(t,e){for(Ra[t]=e,t=0;t<e.length;t++)rg.add(e[t])}var gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=Object.prototype.hasOwnProperty,gv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,th={},nh={};function xv(t){return Fu.call(nh,t)?!0:Fu.call(th,t)?!1:gv.test(t)?nh[t]=!0:(th[t]=!0,!1)}function vv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _v(t,e,n,i){if(e===null||typeof e>"u"||vv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wd=/[\-:]([a-z])/g;function Xd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wd,Xd);kt[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wd,Xd);kt[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wd,Xd);kt[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function $d(t,e,n,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_v(e,n,r,i)&&(n=null),i||r===null?xv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Si=mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oo=Symbol.for("react.element"),ss=Symbol.for("react.portal"),as=Symbol.for("react.fragment"),Yd=Symbol.for("react.strict_mode"),ku=Symbol.for("react.profiler"),sg=Symbol.for("react.provider"),ag=Symbol.for("react.context"),qd=Symbol.for("react.forward_ref"),Ou=Symbol.for("react.suspense"),zu=Symbol.for("react.suspense_list"),Kd=Symbol.for("react.memo"),Ri=Symbol.for("react.lazy"),og=Symbol.for("react.offscreen"),ih=Symbol.iterator;function Ks(t){return t===null||typeof t!="object"?null:(t=ih&&t[ih]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,Ac;function pa(t){if(Ac===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ac=e&&e[1]||""}return`
`+Ac+t}var Nc=!1;function Rc(t,e){if(!t||Nc)return"";Nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=o);break}}}finally{Nc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?pa(t):""}function yv(t){switch(t.tag){case 5:return pa(t.type);case 16:return pa("Lazy");case 13:return pa("Suspense");case 19:return pa("SuspenseList");case 0:case 2:case 15:return t=Rc(t.type,!1),t;case 11:return t=Rc(t.type.render,!1),t;case 1:return t=Rc(t.type,!0),t;default:return""}}function ju(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case as:return"Fragment";case ss:return"Portal";case ku:return"Profiler";case Yd:return"StrictMode";case Ou:return"Suspense";case zu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ag:return(t.displayName||"Context")+".Consumer";case sg:return(t._context.displayName||"Context")+".Provider";case qd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kd:return e=t.displayName||null,e!==null?e:ju(t.type)||"Memo";case Ri:e=t._payload,t=t._init;try{return ju(t(e))}catch{}}return null}function Sv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ju(e);case 8:return e===Yd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Mv(t){var e=lg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function lo(t){t._valueTracker||(t._valueTracker=Mv(t))}function cg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=lg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bu(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function rh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=qi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ug(t,e){e=e.checked,e!=null&&$d(t,"checked",e,!1)}function Hu(t,e){ug(t,e);var n=qi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vu(t,e.type,qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function sh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vu(t,e,n){(e!=="number"||gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ma=Array.isArray;function _s(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+qi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Gu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ah(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(ma(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qi(n)}}function dg(t,e){var n=qi(e.value),i=qi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function oh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function fg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?fg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var co,hg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(co=co||document.createElement("div"),co.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=co.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wv=["Webkit","ms","Moz","O"];Object.keys(Sa).forEach(function(t){wv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Sa[e]=Sa[t]})});function pg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Sa.hasOwnProperty(t)&&Sa[t]?(""+e).trim():e+"px"}function mg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=pg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Ev=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xu(t,e){if(e){if(Ev[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function $u(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yu=null;function Zd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qu=null,ys=null,Ss=null;function lh(t){if(t=Za(t)){if(typeof qu!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=sc(e),qu(t.stateNode,t.type,e))}}function gg(t){ys?Ss?Ss.push(t):Ss=[t]:ys=t}function xg(){if(ys){var t=ys,e=Ss;if(Ss=ys=null,lh(t),e)for(t=0;t<e.length;t++)lh(e[t])}}function vg(t,e){return t(e)}function _g(){}var Pc=!1;function yg(t,e,n){if(Pc)return t(e,n);Pc=!0;try{return vg(t,e,n)}finally{Pc=!1,(ys!==null||Ss!==null)&&(_g(),xg())}}function La(t,e){var n=t.stateNode;if(n===null)return null;var i=sc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Ku=!1;if(gi)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){Ku=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{Ku=!1}function bv(t,e,n,i,r,s,a,o,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Ma=!1,xl=null,vl=!1,Zu=null,Tv={onError:function(t){Ma=!0,xl=t}};function Cv(t,e,n,i,r,s,a,o,c){Ma=!1,xl=null,bv.apply(Tv,arguments)}function Av(t,e,n,i,r,s,a,o,c){if(Cv.apply(this,arguments),Ma){if(Ma){var u=xl;Ma=!1,xl=null}else throw Error(ne(198));vl||(vl=!0,Zu=u)}}function Dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Sg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ch(t){if(Dr(t)!==t)throw Error(ne(188))}function Nv(t){var e=t.alternate;if(!e){if(e=Dr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ch(r),t;if(s===i)return ch(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Mg(t){return t=Nv(t),t!==null?wg(t):null}function wg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=wg(t);if(e!==null)return e;t=t.sibling}return null}var Eg=gn.unstable_scheduleCallback,uh=gn.unstable_cancelCallback,Rv=gn.unstable_shouldYield,Pv=gn.unstable_requestPaint,St=gn.unstable_now,Lv=gn.unstable_getCurrentPriorityLevel,Qd=gn.unstable_ImmediatePriority,bg=gn.unstable_UserBlockingPriority,_l=gn.unstable_NormalPriority,Dv=gn.unstable_LowPriority,Tg=gn.unstable_IdlePriority,tc=null,ei=null;function Iv(t){if(ei&&typeof ei.onCommitFiberRoot=="function")try{ei.onCommitFiberRoot(tc,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:kv,Uv=Math.log,Fv=Math.LN2;function kv(t){return t>>>=0,t===0?32:31-(Uv(t)/Fv|0)|0}var uo=64,fo=4194304;function ga(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ga(o):(s&=a,s!==0&&(i=ga(s)))}else a=n&~r,a!==0?i=ga(a):s!==0&&(i=ga(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function Ov(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-jn(s),o=1<<a,c=r[a];c===-1?(!(o&n)||o&i)&&(r[a]=Ov(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}}function Qu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Cg(){var t=uo;return uo<<=1,!(uo&4194240)&&(uo=64),t}function Lc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function jv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Jd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function Ag(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ng,ef,Rg,Pg,Lg,Ju=!1,ho=[],Oi=null,zi=null,ji=null,Da=new Map,Ia=new Map,Li=[],Bv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dh(t,e){switch(t){case"focusin":case"focusout":Oi=null;break;case"dragenter":case"dragleave":zi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":Da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ia.delete(e.pointerId)}}function Qs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Za(e),e!==null&&ef(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Hv(t,e,n,i,r){switch(e){case"focusin":return Oi=Qs(Oi,t,e,n,i,r),!0;case"dragenter":return zi=Qs(zi,t,e,n,i,r),!0;case"mouseover":return ji=Qs(ji,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Da.set(s,Qs(Da.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ia.set(s,Qs(Ia.get(s)||null,t,e,n,i,r)),!0}return!1}function Dg(t){var e=_r(t.target);if(e!==null){var n=Dr(e);if(n!==null){if(e=n.tag,e===13){if(e=Sg(n),e!==null){t.blockedOn=e,Lg(t.priority,function(){Rg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ed(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Yu=i,n.target.dispatchEvent(i),Yu=null}else return e=Za(n),e!==null&&ef(e),t.blockedOn=n,!1;e.shift()}return!0}function fh(t,e,n){rl(t)&&n.delete(e)}function Vv(){Ju=!1,Oi!==null&&rl(Oi)&&(Oi=null),zi!==null&&rl(zi)&&(zi=null),ji!==null&&rl(ji)&&(ji=null),Da.forEach(fh),Ia.forEach(fh)}function Js(t,e){t.blockedOn===e&&(t.blockedOn=null,Ju||(Ju=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,Vv)))}function Ua(t){function e(r){return Js(r,t)}if(0<ho.length){Js(ho[0],t);for(var n=1;n<ho.length;n++){var i=ho[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Oi!==null&&Js(Oi,t),zi!==null&&Js(zi,t),ji!==null&&Js(ji,t),Da.forEach(e),Ia.forEach(e),n=0;n<Li.length;n++)i=Li[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Li.length&&(n=Li[0],n.blockedOn===null);)Dg(n),n.blockedOn===null&&Li.shift()}var Ms=Si.ReactCurrentBatchConfig,Sl=!0;function Gv(t,e,n,i){var r=et,s=Ms.transition;Ms.transition=null;try{et=1,tf(t,e,n,i)}finally{et=r,Ms.transition=s}}function Wv(t,e,n,i){var r=et,s=Ms.transition;Ms.transition=null;try{et=4,tf(t,e,n,i)}finally{et=r,Ms.transition=s}}function tf(t,e,n,i){if(Sl){var r=ed(t,e,n,i);if(r===null)Hc(t,e,i,Ml,n),dh(t,i);else if(Hv(r,t,e,n,i))i.stopPropagation();else if(dh(t,i),e&4&&-1<Bv.indexOf(t)){for(;r!==null;){var s=Za(r);if(s!==null&&Ng(s),s=ed(t,e,n,i),s===null&&Hc(t,e,i,Ml,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Hc(t,e,i,null,n)}}var Ml=null;function ed(t,e,n,i){if(Ml=null,t=Zd(i),t=_r(t),t!==null)if(e=Dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Sg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ml=t,null}function Ig(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lv()){case Qd:return 1;case bg:return 4;case _l:case Dv:return 16;case Tg:return 536870912;default:return 16}default:return 16}}var Ui=null,nf=null,sl=null;function Ug(){if(sl)return sl;var t,e=nf,n=e.length,i,r="value"in Ui?Ui.value:Ui.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return sl=r.slice(t,1<i?1-i:void 0)}function al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function po(){return!0}function hh(){return!1}function _n(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?po:hh,this.isPropagationStopped=hh,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),e}var Xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rf=_n(Xs),Ka=mt({},Xs,{view:0,detail:0}),Xv=_n(Ka),Dc,Ic,ea,nc=mt({},Ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ea&&(ea&&t.type==="mousemove"?(Dc=t.screenX-ea.screenX,Ic=t.screenY-ea.screenY):Ic=Dc=0,ea=t),Dc)},movementY:function(t){return"movementY"in t?t.movementY:Ic}}),ph=_n(nc),$v=mt({},nc,{dataTransfer:0}),Yv=_n($v),qv=mt({},Ka,{relatedTarget:0}),Uc=_n(qv),Kv=mt({},Xs,{animationName:0,elapsedTime:0,pseudoElement:0}),Zv=_n(Kv),Qv=mt({},Xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Jv=_n(Qv),e_=mt({},Xs,{data:0}),mh=_n(e_),t_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=i_[t])?!!e[t]:!1}function sf(){return r_}var s_=mt({},Ka,{key:function(t){if(t.key){var e=t_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?n_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sf,charCode:function(t){return t.type==="keypress"?al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),a_=_n(s_),o_=mt({},nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gh=_n(o_),l_=mt({},Ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sf}),c_=_n(l_),u_=mt({},Xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),d_=_n(u_),f_=mt({},nc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),h_=_n(f_),p_=[9,13,27,32],af=gi&&"CompositionEvent"in window,wa=null;gi&&"documentMode"in document&&(wa=document.documentMode);var m_=gi&&"TextEvent"in window&&!wa,Fg=gi&&(!af||wa&&8<wa&&11>=wa),xh=" ",vh=!1;function kg(t,e){switch(t){case"keyup":return p_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Og(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function g_(t,e){switch(t){case"compositionend":return Og(e);case"keypress":return e.which!==32?null:(vh=!0,xh);case"textInput":return t=e.data,t===xh&&vh?null:t;default:return null}}function x_(t,e){if(os)return t==="compositionend"||!af&&kg(t,e)?(t=Ug(),sl=nf=Ui=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fg&&e.locale!=="ko"?null:e.data;default:return null}}var v_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _h(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!v_[t.type]:e==="textarea"}function zg(t,e,n,i){gg(i),e=wl(e,"onChange"),0<e.length&&(n=new rf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ea=null,Fa=null;function __(t){Kg(t,0)}function ic(t){var e=us(t);if(cg(e))return t}function y_(t,e){if(t==="change")return e}var jg=!1;if(gi){var Fc;if(gi){var kc="oninput"in document;if(!kc){var yh=document.createElement("div");yh.setAttribute("oninput","return;"),kc=typeof yh.oninput=="function"}Fc=kc}else Fc=!1;jg=Fc&&(!document.documentMode||9<document.documentMode)}function Sh(){Ea&&(Ea.detachEvent("onpropertychange",Bg),Fa=Ea=null)}function Bg(t){if(t.propertyName==="value"&&ic(Fa)){var e=[];zg(e,Fa,t,Zd(t)),yg(__,e)}}function S_(t,e,n){t==="focusin"?(Sh(),Ea=e,Fa=n,Ea.attachEvent("onpropertychange",Bg)):t==="focusout"&&Sh()}function M_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ic(Fa)}function w_(t,e){if(t==="click")return ic(e)}function E_(t,e){if(t==="input"||t==="change")return ic(e)}function b_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:b_;function ka(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Fu.call(e,r)||!Vn(t[r],e[r]))return!1}return!0}function Mh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wh(t,e){var n=Mh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mh(n)}}function Hg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Vg(){for(var t=window,e=gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gl(t.document)}return e}function of(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function T_(t){var e=Vg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hg(n.ownerDocument.documentElement,n)){if(i!==null&&of(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=wh(n,s);var a=wh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var C_=gi&&"documentMode"in document&&11>=document.documentMode,ls=null,td=null,ba=null,nd=!1;function Eh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nd||ls==null||ls!==gl(i)||(i=ls,"selectionStart"in i&&of(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ba&&ka(ba,i)||(ba=i,i=wl(td,"onSelect"),0<i.length&&(e=new rf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ls)))}function mo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cs={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},Oc={},Gg={};gi&&(Gg=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function rc(t){if(Oc[t])return Oc[t];if(!cs[t])return t;var e=cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Gg)return Oc[t]=e[n];return t}var Wg=rc("animationend"),Xg=rc("animationiteration"),$g=rc("animationstart"),Yg=rc("transitionend"),qg=new Map,bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(t,e){qg.set(t,e),Lr(e,[t])}for(var zc=0;zc<bh.length;zc++){var jc=bh[zc],A_=jc.toLowerCase(),N_=jc[0].toUpperCase()+jc.slice(1);tr(A_,"on"+N_)}tr(Wg,"onAnimationEnd");tr(Xg,"onAnimationIteration");tr($g,"onAnimationStart");tr("dblclick","onDoubleClick");tr("focusin","onFocus");tr("focusout","onBlur");tr(Yg,"onTransitionEnd");Rs("onMouseEnter",["mouseout","mouseover"]);Rs("onMouseLeave",["mouseout","mouseover"]);Rs("onPointerEnter",["pointerout","pointerover"]);Rs("onPointerLeave",["pointerout","pointerover"]);Lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R_=new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));function Th(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Av(i,e,void 0,t),t.currentTarget=null}function Kg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&r.isPropagationStopped())break e;Th(r,o,u),s=c}else for(a=0;a<i.length;a++){if(o=i[a],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&r.isPropagationStopped())break e;Th(r,o,u),s=c}}}if(vl)throw t=Zu,vl=!1,Zu=null,t}function ot(t,e){var n=e[od];n===void 0&&(n=e[od]=new Set);var i=t+"__bubble";n.has(i)||(Zg(e,t,2,!1),n.add(i))}function Bc(t,e,n){var i=0;e&&(i|=4),Zg(n,t,i,e)}var go="_reactListening"+Math.random().toString(36).slice(2);function Oa(t){if(!t[go]){t[go]=!0,rg.forEach(function(n){n!=="selectionchange"&&(R_.has(n)||Bc(n,!1,t),Bc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[go]||(e[go]=!0,Bc("selectionchange",!1,e))}}function Zg(t,e,n,i){switch(Ig(e)){case 1:var r=Gv;break;case 4:r=Wv;break;default:r=tf}n=r.bind(null,e,n,t),r=void 0,!Ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Hc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;o!==null;){if(a=_r(o),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}o=o.parentNode}}i=i.return}yg(function(){var u=s,f=Zd(n),p=[];e:{var h=qg.get(t);if(h!==void 0){var g=rf,_=t;switch(t){case"keypress":if(al(n)===0)break e;case"keydown":case"keyup":g=a_;break;case"focusin":_="focus",g=Uc;break;case"focusout":_="blur",g=Uc;break;case"beforeblur":case"afterblur":g=Uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=c_;break;case Wg:case Xg:case $g:g=Zv;break;case Yg:g=d_;break;case"scroll":g=Xv;break;case"wheel":g=h_;break;case"copy":case"cut":case"paste":g=Jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=gh}var y=(e&4)!==0,m=!y&&t==="scroll",d=y?h!==null?h+"Capture":null:h;y=[];for(var x=u,v;x!==null;){v=x;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,d!==null&&(E=La(x,d),E!=null&&y.push(za(x,E,v)))),m)break;x=x.return}0<y.length&&(h=new g(h,_,null,n,f),p.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Yu&&(_=n.relatedTarget||n.fromElement)&&(_r(_)||_[xi]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?_r(_):null,_!==null&&(m=Dr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(y=ph,E="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(y=gh,E="onPointerLeave",d="onPointerEnter",x="pointer"),m=g==null?h:us(g),v=_==null?h:us(_),h=new y(E,x+"leave",g,n,f),h.target=m,h.relatedTarget=v,E=null,_r(f)===u&&(y=new y(d,x+"enter",_,n,f),y.target=v,y.relatedTarget=m,E=y),m=E,g&&_)t:{for(y=g,d=_,x=0,v=y;v;v=Ur(v))x++;for(v=0,E=d;E;E=Ur(E))v++;for(;0<x-v;)y=Ur(y),x--;for(;0<v-x;)d=Ur(d),v--;for(;x--;){if(y===d||d!==null&&y===d.alternate)break t;y=Ur(y),d=Ur(d)}y=null}else y=null;g!==null&&Ch(p,h,g,y,!1),_!==null&&m!==null&&Ch(p,m,_,y,!0)}}e:{if(h=u?us(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var R=y_;else if(_h(h))if(jg)R=E_;else{R=M_;var C=S_}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=w_);if(R&&(R=R(t,u))){zg(p,R,n,f);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Vu(h,"number",h.value)}switch(C=u?us(u):window,t){case"focusin":(_h(C)||C.contentEditable==="true")&&(ls=C,td=u,ba=null);break;case"focusout":ba=td=ls=null;break;case"mousedown":nd=!0;break;case"contextmenu":case"mouseup":case"dragend":nd=!1,Eh(p,n,f);break;case"selectionchange":if(C_)break;case"keydown":case"keyup":Eh(p,n,f)}var S;if(af)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else os?kg(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Fg&&n.locale!=="ko"&&(os||N!=="onCompositionStart"?N==="onCompositionEnd"&&os&&(S=Ug()):(Ui=f,nf="value"in Ui?Ui.value:Ui.textContent,os=!0)),C=wl(u,N),0<C.length&&(N=new mh(N,t,null,n,f),p.push({event:N,listeners:C}),S?N.data=S:(S=Og(n),S!==null&&(N.data=S)))),(S=m_?g_(t,n):x_(t,n))&&(u=wl(u,"onBeforeInput"),0<u.length&&(f=new mh("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=S))}Kg(p,e)})}function za(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=La(t,n),s!=null&&i.unshift(za(t,s,r)),s=La(t,e),s!=null&&i.push(za(t,s,r))),t=t.return}return i}function Ur(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ch(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===i)break;o.tag===5&&u!==null&&(o=u,r?(c=La(n,s),c!=null&&a.unshift(za(n,c,o))):r||(c=La(n,s),c!=null&&a.push(za(n,c,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var P_=/\r\n?/g,L_=/\u0000|\uFFFD/g;function Ah(t){return(typeof t=="string"?t:""+t).replace(P_,`
`).replace(L_,"")}function xo(t,e,n){if(e=Ah(e),Ah(t)!==e&&n)throw Error(ne(425))}function El(){}var id=null,rd=null;function sd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ad=typeof setTimeout=="function"?setTimeout:void 0,D_=typeof clearTimeout=="function"?clearTimeout:void 0,Nh=typeof Promise=="function"?Promise:void 0,I_=typeof queueMicrotask=="function"?queueMicrotask:typeof Nh<"u"?function(t){return Nh.resolve(null).then(t).catch(U_)}:ad;function U_(t){setTimeout(function(){throw t})}function Vc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ua(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ua(e)}function Bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Rh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $s=Math.random().toString(36).slice(2),qn="__reactFiber$"+$s,ja="__reactProps$"+$s,xi="__reactContainer$"+$s,od="__reactEvents$"+$s,F_="__reactListeners$"+$s,k_="__reactHandles$"+$s;function _r(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xi]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Rh(t);t!==null;){if(n=t[qn])return n;t=Rh(t)}return e}t=n,n=t.parentNode}return null}function Za(t){return t=t[qn]||t[xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function sc(t){return t[ja]||null}var ld=[],ds=-1;function nr(t){return{current:t}}function ct(t){0>ds||(t.current=ld[ds],ld[ds]=null,ds--)}function at(t,e){ds++,ld[ds]=t.current,t.current=e}var Ki={},Xt=nr(Ki),sn=nr(!1),Tr=Ki;function Ps(t,e){var n=t.type.contextTypes;if(!n)return Ki;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function bl(){ct(sn),ct(Xt)}function Ph(t,e,n){if(Xt.current!==Ki)throw Error(ne(168));at(Xt,e),at(sn,n)}function Qg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,Sv(t)||"Unknown",r));return mt({},n,i)}function Tl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ki,Tr=Xt.current,at(Xt,t),at(sn,sn.current),!0}function Lh(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Qg(t,e,Tr),i.__reactInternalMemoizedMergedChildContext=t,ct(sn),ct(Xt),at(Xt,t)):ct(sn),at(sn,n)}var ui=null,ac=!1,Gc=!1;function Jg(t){ui===null?ui=[t]:ui.push(t)}function O_(t){ac=!0,Jg(t)}function ir(){if(!Gc&&ui!==null){Gc=!0;var t=0,e=et;try{var n=ui;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ui=null,ac=!1}catch(r){throw ui!==null&&(ui=ui.slice(t+1)),Eg(Qd,ir),r}finally{et=e,Gc=!1}}return null}var fs=[],hs=0,Cl=null,Al=0,Mn=[],wn=0,Cr=null,fi=1,hi="";function hr(t,e){fs[hs++]=Al,fs[hs++]=Cl,Cl=t,Al=e}function ex(t,e,n){Mn[wn++]=fi,Mn[wn++]=hi,Mn[wn++]=Cr,Cr=t;var i=fi;t=hi;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var s=32-jn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,fi=1<<32-jn(e)+r|n<<r|i,hi=s+t}else fi=1<<s|n<<r|i,hi=t}function lf(t){t.return!==null&&(hr(t,1),ex(t,1,0))}function cf(t){for(;t===Cl;)Cl=fs[--hs],fs[hs]=null,Al=fs[--hs],fs[hs]=null;for(;t===Cr;)Cr=Mn[--wn],Mn[wn]=null,hi=Mn[--wn],Mn[wn]=null,fi=Mn[--wn],Mn[wn]=null}var mn=null,pn=null,dt=!1,kn=null;function tx(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=Bi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cr!==null?{id:fi,overflow:hi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function cd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ud(t){if(dt){var e=pn;if(e){var n=e;if(!Dh(t,e)){if(cd(t))throw Error(ne(418));e=Bi(n.nextSibling);var i=mn;e&&Dh(t,e)?tx(i,n):(t.flags=t.flags&-4097|2,dt=!1,mn=t)}}else{if(cd(t))throw Error(ne(418));t.flags=t.flags&-4097|2,dt=!1,mn=t}}}function Ih(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function vo(t){if(t!==mn)return!1;if(!dt)return Ih(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sd(t.type,t.memoizedProps)),e&&(e=pn)){if(cd(t))throw nx(),Error(ne(418));for(;e;)tx(t,e),e=Bi(e.nextSibling)}if(Ih(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=Bi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?Bi(t.stateNode.nextSibling):null;return!0}function nx(){for(var t=pn;t;)t=Bi(t.nextSibling)}function Ls(){pn=mn=null,dt=!1}function uf(t){kn===null?kn=[t]:kn.push(t)}var z_=Si.ReactCurrentBatchConfig;function ta(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function _o(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Uh(t){var e=t._init;return e(t._payload)}function ix(t){function e(d,x){if(t){var v=d.deletions;v===null?(d.deletions=[x],d.flags|=16):v.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=Wi(d,x),d.index=0,d.sibling=null,d}function s(d,x,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<x?(d.flags|=2,x):v):(d.flags|=2,x)):(d.flags|=1048576,x)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,x,v,E){return x===null||x.tag!==6?(x=Zc(v,d.mode,E),x.return=d,x):(x=r(x,v),x.return=d,x)}function c(d,x,v,E){var R=v.type;return R===as?f(d,x,v.props.children,E,v.key):x!==null&&(x.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ri&&Uh(R)===x.type)?(E=r(x,v.props),E.ref=ta(d,x,v),E.return=d,E):(E=hl(v.type,v.key,v.props,null,d.mode,E),E.ref=ta(d,x,v),E.return=d,E)}function u(d,x,v,E){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Qc(v,d.mode,E),x.return=d,x):(x=r(x,v.children||[]),x.return=d,x)}function f(d,x,v,E,R){return x===null||x.tag!==7?(x=br(v,d.mode,E,R),x.return=d,x):(x=r(x,v),x.return=d,x)}function p(d,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Zc(""+x,d.mode,v),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case oo:return v=hl(x.type,x.key,x.props,null,d.mode,v),v.ref=ta(d,null,x),v.return=d,v;case ss:return x=Qc(x,d.mode,v),x.return=d,x;case Ri:var E=x._init;return p(d,E(x._payload),v)}if(ma(x)||Ks(x))return x=br(x,d.mode,v,null),x.return=d,x;_o(d,x)}return null}function h(d,x,v,E){var R=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:o(d,x,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case oo:return v.key===R?c(d,x,v,E):null;case ss:return v.key===R?u(d,x,v,E):null;case Ri:return R=v._init,h(d,x,R(v._payload),E)}if(ma(v)||Ks(v))return R!==null?null:f(d,x,v,E,null);_o(d,v)}return null}function g(d,x,v,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return d=d.get(v)||null,o(x,d,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case oo:return d=d.get(E.key===null?v:E.key)||null,c(x,d,E,R);case ss:return d=d.get(E.key===null?v:E.key)||null,u(x,d,E,R);case Ri:var C=E._init;return g(d,x,v,C(E._payload),R)}if(ma(E)||Ks(E))return d=d.get(v)||null,f(x,d,E,R,null);_o(x,E)}return null}function _(d,x,v,E){for(var R=null,C=null,S=x,N=x=0,T=null;S!==null&&N<v.length;N++){S.index>N?(T=S,S=null):T=S.sibling;var w=h(d,S,v[N],E);if(w===null){S===null&&(S=T);break}t&&S&&w.alternate===null&&e(d,S),x=s(w,x,N),C===null?R=w:C.sibling=w,C=w,S=T}if(N===v.length)return n(d,S),dt&&hr(d,N),R;if(S===null){for(;N<v.length;N++)S=p(d,v[N],E),S!==null&&(x=s(S,x,N),C===null?R=S:C.sibling=S,C=S);return dt&&hr(d,N),R}for(S=i(d,S);N<v.length;N++)T=g(S,d,N,v[N],E),T!==null&&(t&&T.alternate!==null&&S.delete(T.key===null?N:T.key),x=s(T,x,N),C===null?R=T:C.sibling=T,C=T);return t&&S.forEach(function(L){return e(d,L)}),dt&&hr(d,N),R}function y(d,x,v,E){var R=Ks(v);if(typeof R!="function")throw Error(ne(150));if(v=R.call(v),v==null)throw Error(ne(151));for(var C=R=null,S=x,N=x=0,T=null,w=v.next();S!==null&&!w.done;N++,w=v.next()){S.index>N?(T=S,S=null):T=S.sibling;var L=h(d,S,w.value,E);if(L===null){S===null&&(S=T);break}t&&S&&L.alternate===null&&e(d,S),x=s(L,x,N),C===null?R=L:C.sibling=L,C=L,S=T}if(w.done)return n(d,S),dt&&hr(d,N),R;if(S===null){for(;!w.done;N++,w=v.next())w=p(d,w.value,E),w!==null&&(x=s(w,x,N),C===null?R=w:C.sibling=w,C=w);return dt&&hr(d,N),R}for(S=i(d,S);!w.done;N++,w=v.next())w=g(S,d,N,w.value,E),w!==null&&(t&&w.alternate!==null&&S.delete(w.key===null?N:w.key),x=s(w,x,N),C===null?R=w:C.sibling=w,C=w);return t&&S.forEach(function(F){return e(d,F)}),dt&&hr(d,N),R}function m(d,x,v,E){if(typeof v=="object"&&v!==null&&v.type===as&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case oo:e:{for(var R=v.key,C=x;C!==null;){if(C.key===R){if(R=v.type,R===as){if(C.tag===7){n(d,C.sibling),x=r(C,v.props.children),x.return=d,d=x;break e}}else if(C.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ri&&Uh(R)===C.type){n(d,C.sibling),x=r(C,v.props),x.ref=ta(d,C,v),x.return=d,d=x;break e}n(d,C);break}else e(d,C);C=C.sibling}v.type===as?(x=br(v.props.children,d.mode,E,v.key),x.return=d,d=x):(E=hl(v.type,v.key,v.props,null,d.mode,E),E.ref=ta(d,x,v),E.return=d,d=E)}return a(d);case ss:e:{for(C=v.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(d,x.sibling),x=r(x,v.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=Qc(v,d.mode,E),x.return=d,d=x}return a(d);case Ri:return C=v._init,m(d,x,C(v._payload),E)}if(ma(v))return _(d,x,v,E);if(Ks(v))return y(d,x,v,E);_o(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,v),x.return=d,d=x):(n(d,x),x=Zc(v,d.mode,E),x.return=d,d=x),a(d)):n(d,x)}return m}var Ds=ix(!0),rx=ix(!1),Nl=nr(null),Rl=null,ps=null,df=null;function ff(){df=ps=Rl=null}function hf(t){var e=Nl.current;ct(Nl),t._currentValue=e}function dd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ws(t,e){Rl=t,df=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(df!==t)if(t={context:t,memoizedValue:e,next:null},ps===null){if(Rl===null)throw Error(ne(308));ps=t,Rl.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return e}var yr=null;function pf(t){yr===null?yr=[t]:yr.push(t)}function sx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,pf(e)):(n.next=r.next,r.next=n),e.interleaved=n,vi(t,i)}function vi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pi=!1;function mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ax(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,vi(t,n)}return r=i.interleaved,r===null?(e.next=e,pf(i)):(e.next=r.next,r.next=e),i.interleaved=e,vi(t,n)}function ol(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Jd(t,n)}}function Fh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pl(t,e,n,i){var r=t.updateQueue;Pi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=c))}if(s!==null){var p=r.baseState;a=0,f=u=c=null,o=s;do{var h=o.lane,g=o.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(h=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){p=_.call(g,p,h);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(g,p,h):_,h==null)break e;p=mt({},p,h);break e;case 2:Pi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else g={eventTime:g,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=g,c=p):f=f.next=g,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(c=p),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Nr|=a,t.lanes=a,t.memoizedState=p}}function kh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Qa={},ti=nr(Qa),Ba=nr(Qa),Ha=nr(Qa);function Sr(t){if(t===Qa)throw Error(ne(174));return t}function gf(t,e){switch(at(Ha,e),at(Ba,t),at(ti,Qa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wu(e,t)}ct(ti),at(ti,e)}function Is(){ct(ti),ct(Ba),ct(Ha)}function ox(t){Sr(Ha.current);var e=Sr(ti.current),n=Wu(e,t.type);e!==n&&(at(Ba,t),at(ti,n))}function xf(t){Ba.current===t&&(ct(ti),ct(Ba))}var ft=nr(0);function Ll(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wc=[];function vf(){for(var t=0;t<Wc.length;t++)Wc[t]._workInProgressVersionPrimary=null;Wc.length=0}var ll=Si.ReactCurrentDispatcher,Xc=Si.ReactCurrentBatchConfig,Ar=0,ht=null,bt=null,Lt=null,Dl=!1,Ta=!1,Va=0,j_=0;function Ot(){throw Error(ne(321))}function _f(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function yf(t,e,n,i,r,s){if(Ar=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ll.current=t===null||t.memoizedState===null?G_:W_,t=n(i,r),Ta){s=0;do{if(Ta=!1,Va=0,25<=s)throw Error(ne(301));s+=1,Lt=bt=null,e.updateQueue=null,ll.current=X_,t=n(i,r)}while(Ta)}if(ll.current=Il,e=bt!==null&&bt.next!==null,Ar=0,Lt=bt=ht=null,Dl=!1,e)throw Error(ne(300));return t}function Sf(){var t=Va!==0;return Va=0,t}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?ht.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Nn(){if(bt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Lt===null?ht.memoizedState:Lt.next;if(e!==null)Lt=e,bt=t;else{if(t===null)throw Error(ne(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Lt===null?ht.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function Ga(t,e){return typeof e=="function"?e(t):e}function $c(t){var e=Nn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,c=null,u=s;do{var f=u.lane;if((Ar&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=p,a=i):c=c.next=p,ht.lanes|=f,Nr|=f}u=u.next}while(u!==null&&u!==s);c===null?a=i:c.next=o,Vn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ht.lanes|=s,Nr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Vn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function lx(){}function cx(t,e){var n=ht,i=Nn(),r=e(),s=!Vn(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,Mf(fx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,Wa(9,dx.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(ne(349));Ar&30||ux(n,e,r)}return r}function ux(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function dx(t,e,n,i){e.value=n,e.getSnapshot=i,hx(e)&&px(t)}function fx(t,e,n){return n(function(){hx(e)&&px(t)})}function hx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function px(t){var e=vi(t,1);e!==null&&Bn(e,t,1,-1)}function Oh(t){var e=$n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:t},e.queue=t,t=t.dispatch=V_.bind(null,ht,t),[e.memoizedState,t]}function Wa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function mx(){return Nn().memoizedState}function cl(t,e,n,i){var r=$n();ht.flags|=t,r.memoizedState=Wa(1|e,n,void 0,i===void 0?null:i)}function oc(t,e,n,i){var r=Nn();i=i===void 0?null:i;var s=void 0;if(bt!==null){var a=bt.memoizedState;if(s=a.destroy,i!==null&&_f(i,a.deps)){r.memoizedState=Wa(e,n,s,i);return}}ht.flags|=t,r.memoizedState=Wa(1|e,n,s,i)}function zh(t,e){return cl(8390656,8,t,e)}function Mf(t,e){return oc(2048,8,t,e)}function gx(t,e){return oc(4,2,t,e)}function xx(t,e){return oc(4,4,t,e)}function vx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _x(t,e,n){return n=n!=null?n.concat([t]):null,oc(4,4,vx.bind(null,e,t),n)}function wf(){}function yx(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&_f(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Sx(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&_f(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Mx(t,e,n){return Ar&21?(Vn(n,e)||(n=Cg(),ht.lanes|=n,Nr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function B_(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=Xc.transition;Xc.transition={};try{t(!1),e()}finally{et=n,Xc.transition=i}}function wx(){return Nn().memoizedState}function H_(t,e,n){var i=Gi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ex(t))bx(e,n);else if(n=sx(t,e,n,i),n!==null){var r=Zt();Bn(n,t,i,r),Tx(n,e,i)}}function V_(t,e,n){var i=Gi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ex(t))bx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Vn(o,a)){var c=e.interleaved;c===null?(r.next=r,pf(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=sx(t,e,r,i),n!==null&&(r=Zt(),Bn(n,t,i,r),Tx(n,e,i))}}function Ex(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function bx(t,e){Ta=Dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Tx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Jd(t,n)}}var Il={readContext:An,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},G_={readContext:An,useCallback:function(t,e){return $n().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:zh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,cl(4194308,4,vx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return cl(4,2,t,e)},useMemo:function(t,e){var n=$n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=$n();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=H_.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=$n();return t={current:t},e.memoizedState=t},useState:Oh,useDebugValue:wf,useDeferredValue:function(t){return $n().memoizedState=t},useTransition:function(){var t=Oh(!1),e=t[0];return t=B_.bind(null,t[1]),$n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ht,r=$n();if(dt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Dt===null)throw Error(ne(349));Ar&30||ux(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,zh(fx.bind(null,i,s,t),[t]),i.flags|=2048,Wa(9,dx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=$n(),e=Dt.identifierPrefix;if(dt){var n=hi,i=fi;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Va++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=j_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},W_={readContext:An,useCallback:yx,useContext:An,useEffect:Mf,useImperativeHandle:_x,useInsertionEffect:gx,useLayoutEffect:xx,useMemo:Sx,useReducer:$c,useRef:mx,useState:function(){return $c(Ga)},useDebugValue:wf,useDeferredValue:function(t){var e=Nn();return Mx(e,bt.memoizedState,t)},useTransition:function(){var t=$c(Ga)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:lx,useSyncExternalStore:cx,useId:wx,unstable_isNewReconciler:!1},X_={readContext:An,useCallback:yx,useContext:An,useEffect:Mf,useImperativeHandle:_x,useInsertionEffect:gx,useLayoutEffect:xx,useMemo:Sx,useReducer:Yc,useRef:mx,useState:function(){return Yc(Ga)},useDebugValue:wf,useDeferredValue:function(t){var e=Nn();return bt===null?e.memoizedState=t:Mx(e,bt.memoizedState,t)},useTransition:function(){var t=Yc(Ga)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:lx,useSyncExternalStore:cx,useId:wx,unstable_isNewReconciler:!1};function In(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lc={isMounted:function(t){return(t=t._reactInternals)?Dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Gi(t),s=mi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(Bn(e,t,r,i),ol(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Gi(t),s=mi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(Bn(e,t,r,i),ol(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=Gi(t),r=mi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Hi(t,r,i),e!==null&&(Bn(e,t,i,n),ol(e,t,i))}};function jh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ka(n,i)||!ka(r,s):!0}function Cx(t,e,n){var i=!1,r=Ki,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=an(e)?Tr:Xt.current,i=e.contextTypes,s=(i=i!=null)?Ps(t,r):Ki),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Bh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&lc.enqueueReplaceState(e,e.state,null)}function hd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},mf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=an(e)?Tr:Xt.current,r.context=Ps(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&lc.enqueueReplaceState(r,r.state,null),Pl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Us(t,e){try{var n="",i=e;do n+=yv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function qc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function pd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $_=typeof WeakMap=="function"?WeakMap:Map;function Ax(t,e,n){n=mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Fl||(Fl=!0,Ed=i),pd(t,e)},n}function Nx(t,e,n){n=mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){pd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){pd(t,e),typeof i!="function"&&(Vi===null?Vi=new Set([this]):Vi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Hh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new $_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=oy.bind(null,t,e,n),e.then(t,t))}function Vh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mi(-1,1),e.tag=2,Hi(n,e,1))),n.lanes|=1),t)}var Y_=Si.ReactCurrentOwner,rn=!1;function Kt(t,e,n,i){e.child=t===null?rx(e,null,n,i):Ds(e,t.child,n,i)}function Wh(t,e,n,i,r){n=n.render;var s=e.ref;return ws(e,r),i=yf(t,e,n,i,s,r),n=Sf(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_i(t,e,r)):(dt&&n&&lf(e),e.flags|=1,Kt(t,e,i,r),e.child)}function Xh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Pf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Rx(t,e,s,i,r)):(t=hl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ka,n(a,i)&&t.ref===e.ref)return _i(t,e,r)}return e.flags|=1,t=Wi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Rx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ka(s,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,_i(t,e,r)}return md(t,e,n,i,r)}function Px(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(gs,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(gs,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,at(gs,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,at(gs,hn),hn|=i;return Kt(t,e,r,n),e.child}function Lx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function md(t,e,n,i,r){var s=an(n)?Tr:Xt.current;return s=Ps(e,s),ws(e,r),n=yf(t,e,n,i,s,r),i=Sf(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_i(t,e,r)):(dt&&i&&lf(e),e.flags|=1,Kt(t,e,n,r),e.child)}function $h(t,e,n,i,r){if(an(n)){var s=!0;Tl(e)}else s=!1;if(ws(e,r),e.stateNode===null)ul(t,e),Cx(e,n,i),hd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=An(u):(u=an(n)?Tr:Xt.current,u=Ps(e,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||c!==u)&&Bh(e,a,i,u),Pi=!1;var h=e.memoizedState;a.state=h,Pl(e,i,a,r),c=e.memoizedState,o!==i||h!==c||sn.current||Pi?(typeof f=="function"&&(fd(e,n,f,i),c=e.memoizedState),(o=Pi||jh(e,n,o,i,h,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,ax(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:In(e.type,o),a.props=u,p=e.pendingProps,h=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=An(c):(c=an(n)?Tr:Xt.current,c=Ps(e,c));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||h!==c)&&Bh(e,a,i,c),Pi=!1,h=e.memoizedState,a.state=h,Pl(e,i,a,r);var _=e.memoizedState;o!==p||h!==_||sn.current||Pi?(typeof g=="function"&&(fd(e,n,g,i),_=e.memoizedState),(u=Pi||jh(e,n,u,i,h,_,c)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=c,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return gd(t,e,n,i,s,r)}function gd(t,e,n,i,r,s){Lx(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Lh(e,n,!1),_i(t,e,s);i=e.stateNode,Y_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ds(e,t.child,null,s),e.child=Ds(e,null,o,s)):Kt(t,e,o,s),e.memoizedState=i.state,r&&Lh(e,n,!0),e.child}function Dx(t){var e=t.stateNode;e.pendingContext?Ph(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ph(t,e.context,!1),gf(t,e.containerInfo)}function Yh(t,e,n,i,r){return Ls(),uf(r),e.flags|=256,Kt(t,e,n,i),e.child}var xd={dehydrated:null,treeContext:null,retryLane:0};function vd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ix(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(ft,r&1),t===null)return ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=dc(a,i,0,null),t=br(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vd(n),e.memoizedState=xd,t):Ef(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return q_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=Wi(r,c),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Wi(o,s):(s=br(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?vd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=xd,i}return s=t.child,t=s.sibling,i=Wi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ef(t,e){return e=dc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yo(t,e,n,i){return i!==null&&uf(i),Ds(e,t.child,null,n),t=Ef(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function q_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=qc(Error(ne(422))),yo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=dc({mode:"visible",children:i.children},r,0,null),s=br(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ds(e,t.child,null,a),e.child.memoizedState=vd(a),e.memoizedState=xd,s);if(!(e.mode&1))return yo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=qc(s,i,void 0),yo(t,e,a,i)}if(o=(a&t.childLanes)!==0,rn||o){if(i=Dt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,vi(t,r),Bn(i,t,r,-1))}return Rf(),i=qc(Error(ne(421))),yo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ly.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=Bi(r.nextSibling),mn=e,dt=!0,kn=null,t!==null&&(Mn[wn++]=fi,Mn[wn++]=hi,Mn[wn++]=Cr,fi=t.id,hi=t.overflow,Cr=e),e=Ef(e,i.children),e.flags|=4096,e)}function qh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),dd(t.return,e,n)}function Kc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ux(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qh(t,n,e);else if(t.tag===19)qh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ll(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Kc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ll(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Kc(e,!0,n,null,s);break;case"together":Kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _i(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Nr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Wi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function K_(t,e,n){switch(e.tag){case 3:Dx(e),Ls();break;case 5:ox(e);break;case 1:an(e.type)&&Tl(e);break;case 4:gf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(Nl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?Ix(t,e,n):(at(ft,ft.current&1),t=_i(t,e,n),t!==null?t.sibling:null);at(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ux(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,Px(t,e,n)}return _i(t,e,n)}var Fx,_d,kx,Ox;Fx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_d=function(){};kx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Sr(ti.current);var s=null;switch(n){case"input":r=Bu(t,r),i=Bu(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=Gu(t,r),i=Gu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=El)}Xu(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ra.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ra.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ot("scroll",t),s||o===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ox=function(t,e,n,i){n!==i&&(e.flags|=4)};function na(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Z_(t,e,n){var i=e.pendingProps;switch(cf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return an(e.type)&&bl(),zt(e),null;case 3:return i=e.stateNode,Is(),ct(sn),ct(Xt),vf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(vo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(Cd(kn),kn=null))),_d(t,e),zt(e),null;case 5:xf(e);var r=Sr(Ha.current);if(n=e.type,t!==null&&e.stateNode!=null)kx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return zt(e),null}if(t=Sr(ti.current),vo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[qn]=e,i[ja]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<xa.length;r++)ot(xa[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":rh(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":ah(i,s),ot("invalid",i)}Xu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&xo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&xo(i.textContent,o,t),r=["children",""+o]):Ra.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ot("scroll",i)}switch(n){case"input":lo(i),sh(i,s,!0);break;case"textarea":lo(i),oh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=El)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[qn]=e,t[ja]=i,Fx(t,e,!1,!1),e.stateNode=t;e:{switch(a=$u(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<xa.length;r++)ot(xa[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":rh(t,i),r=Bu(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":ah(t,i),r=Gu(t,i),ot("invalid",t);break;default:r=i}Xu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?mg(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&hg(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Pa(t,c):typeof c=="number"&&Pa(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ra.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ot("scroll",t):c!=null&&$d(t,s,c,a))}switch(n){case"input":lo(t),sh(t,i,!1);break;case"textarea":lo(t),oh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+qi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?_s(t,!!i.multiple,s,!1):i.defaultValue!=null&&_s(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=El)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)Ox(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Sr(Ha.current),Sr(ti.current),vo(e)){if(i=e.stateNode,n=e.memoizedProps,i[qn]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:xo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[qn]=e,e.stateNode=i}return zt(e),null;case 13:if(ct(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&pn!==null&&e.mode&1&&!(e.flags&128))nx(),Ls(),e.flags|=98560,s=!1;else if(s=vo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[qn]=e}else Ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else kn!==null&&(Cd(kn),kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?Tt===0&&(Tt=3):Rf())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Is(),_d(t,e),t===null&&Oa(e.stateNode.containerInfo),zt(e),null;case 10:return hf(e.type._context),zt(e),null;case 17:return an(e.type)&&bl(),zt(e),null;case 19:if(ct(ft),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)na(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Ll(t),a!==null){for(e.flags|=128,na(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>Fs&&(e.flags|=128,i=!0,na(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ll(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),na(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!dt)return zt(e),null}else 2*St()-s.renderingStartTime>Fs&&n!==1073741824&&(e.flags|=128,i=!0,na(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=ft.current,at(ft,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return Nf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function Q_(t,e){switch(cf(e),e.tag){case 1:return an(e.type)&&bl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Is(),ct(sn),ct(Xt),vf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xf(e),null;case 13:if(ct(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(ft),null;case 4:return Is(),null;case 10:return hf(e.type._context),null;case 22:case 23:return Nf(),null;case 24:return null;default:return null}}var So=!1,Vt=!1,J_=typeof WeakSet=="function"?WeakSet:Set,_e=null;function ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function yd(t,e,n){try{n()}catch(i){vt(t,e,i)}}var Kh=!1;function ey(t,e){if(id=Sl,t=Vg(),of(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,u=0,f=0,p=t,h=null;t:for(;;){for(var g;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(c=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(g=p.firstChild)!==null;)h=p,p=g;for(;;){if(p===t)break t;if(h===n&&++u===r&&(o=a),h===s&&++f===i&&(c=a),(g=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=g}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(rd={focusedElem:t,selectionRange:n},Sl=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:In(e.type,y),m);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(E){vt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return _=Kh,Kh=!1,_}function Ca(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&yd(e,n,s)}r=r.next}while(r!==i)}}function cc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zx(t){var e=t.alternate;e!==null&&(t.alternate=null,zx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[ja],delete e[od],delete e[F_],delete e[k_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jx(t){return t.tag===5||t.tag===3||t.tag===4}function Zh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=El));else if(i!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}function wd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(wd(t,e,n),t=t.sibling;t!==null;)wd(t,e,n),t=t.sibling}var It=null,Un=!1;function wi(t,e,n){for(n=n.child;n!==null;)Bx(t,e,n),n=n.sibling}function Bx(t,e,n){if(ei&&typeof ei.onCommitFiberUnmount=="function")try{ei.onCommitFiberUnmount(tc,n)}catch{}switch(n.tag){case 5:Vt||ms(n,e);case 6:var i=It,r=Un;It=null,wi(t,e,n),It=i,Un=r,It!==null&&(Un?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Un?(t=It,n=n.stateNode,t.nodeType===8?Vc(t.parentNode,n):t.nodeType===1&&Vc(t,n),Ua(t)):Vc(It,n.stateNode));break;case 4:i=It,r=Un,It=n.stateNode.containerInfo,Un=!0,wi(t,e,n),It=i,Un=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&yd(n,e,a),r=r.next}while(r!==i)}wi(t,e,n);break;case 1:if(!Vt&&(ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){vt(n,e,o)}wi(t,e,n);break;case 21:wi(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,wi(t,e,n),Vt=i):wi(t,e,n);break;default:wi(t,e,n)}}function Qh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new J_),e.forEach(function(i){var r=cy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Rn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:It=o.stateNode,Un=!1;break e;case 3:It=o.stateNode.containerInfo,Un=!0;break e;case 4:It=o.stateNode.containerInfo,Un=!0;break e}o=o.return}if(It===null)throw Error(ne(160));Bx(s,a,r),It=null,Un=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){vt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Hx(e,t),e=e.sibling}function Hx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rn(e,t),Xn(t),i&4){try{Ca(3,t,t.return),cc(3,t)}catch(y){vt(t,t.return,y)}try{Ca(5,t,t.return)}catch(y){vt(t,t.return,y)}}break;case 1:Rn(e,t),Xn(t),i&512&&n!==null&&ms(n,n.return);break;case 5:if(Rn(e,t),Xn(t),i&512&&n!==null&&ms(n,n.return),t.flags&32){var r=t.stateNode;try{Pa(r,"")}catch(y){vt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&ug(r,s),$u(o,a);var u=$u(o,s);for(a=0;a<c.length;a+=2){var f=c[a],p=c[a+1];f==="style"?mg(r,p):f==="dangerouslySetInnerHTML"?hg(r,p):f==="children"?Pa(r,p):$d(r,f,p,u)}switch(o){case"input":Hu(r,s);break;case"textarea":dg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?_s(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?_s(r,!!s.multiple,s.defaultValue,!0):_s(r,!!s.multiple,s.multiple?[]:"",!1))}r[ja]=s}catch(y){vt(t,t.return,y)}}break;case 6:if(Rn(e,t),Xn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){vt(t,t.return,y)}}break;case 3:if(Rn(e,t),Xn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ua(e.containerInfo)}catch(y){vt(t,t.return,y)}break;case 4:Rn(e,t),Xn(t);break;case 13:Rn(e,t),Xn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Cf=St())),i&4&&Qh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(u=Vt)||f,Rn(e,t),Vt=u):Rn(e,t),Xn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(_e=t,f=t.child;f!==null;){for(p=_e=f;_e!==null;){switch(h=_e,g=h.child,h.tag){case 0:case 11:case 14:case 15:Ca(4,h,h.return);break;case 1:ms(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){vt(i,n,y)}}break;case 5:ms(h,h.return);break;case 22:if(h.memoizedState!==null){ep(p);continue}}g!==null?(g.return=h,_e=g):ep(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=pg("display",a))}catch(y){vt(t,t.return,y)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){vt(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Rn(e,t),Xn(t),i&4&&Qh(t);break;case 21:break;default:Rn(e,t),Xn(t)}}function Xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jx(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Pa(r,""),i.flags&=-33);var s=Zh(t);wd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Zh(t);Md(t,o,a);break;default:throw Error(ne(161))}}catch(c){vt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ty(t,e,n){_e=t,Vx(t)}function Vx(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||So;if(!a){var o=r.alternate,c=o!==null&&o.memoizedState!==null||Vt;o=So;var u=Vt;if(So=a,(Vt=c)&&!u)for(_e=r;_e!==null;)a=_e,c=a.child,a.tag===22&&a.memoizedState!==null?tp(r):c!==null?(c.return=a,_e=c):tp(r);for(;s!==null;)_e=s,Vx(s),s=s.sibling;_e=r,So=o,Vt=u}Jh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):Jh(t)}}function Jh(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||cc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:In(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&kh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Ua(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Vt||e.flags&512&&Sd(e)}catch(h){vt(e,e.return,h)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function ep(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function tp(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cc(4,e)}catch(c){vt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){vt(e,r,c)}}var s=e.return;try{Sd(e)}catch(c){vt(e,s,c)}break;case 5:var a=e.return;try{Sd(e)}catch(c){vt(e,a,c)}}}catch(c){vt(e,e.return,c)}if(e===t){_e=null;break}var o=e.sibling;if(o!==null){o.return=e.return,_e=o;break}_e=e.return}}var ny=Math.ceil,Ul=Si.ReactCurrentDispatcher,bf=Si.ReactCurrentOwner,Cn=Si.ReactCurrentBatchConfig,Ye=0,Dt=null,Et=null,Ft=0,hn=0,gs=nr(0),Tt=0,Xa=null,Nr=0,uc=0,Tf=0,Aa=null,tn=null,Cf=0,Fs=1/0,ci=null,Fl=!1,Ed=null,Vi=null,Mo=!1,Fi=null,kl=0,Na=0,bd=null,dl=-1,fl=0;function Zt(){return Ye&6?St():dl!==-1?dl:dl=St()}function Gi(t){return t.mode&1?Ye&2&&Ft!==0?Ft&-Ft:z_.transition!==null?(fl===0&&(fl=Cg()),fl):(t=et,t!==0||(t=window.event,t=t===void 0?16:Ig(t.type)),t):1}function Bn(t,e,n,i){if(50<Na)throw Na=0,bd=null,Error(ne(185));qa(t,n,i),(!(Ye&2)||t!==Dt)&&(t===Dt&&(!(Ye&2)&&(uc|=n),Tt===4&&Di(t,Ft)),on(t,i),n===1&&Ye===0&&!(e.mode&1)&&(Fs=St()+500,ac&&ir()))}function on(t,e){var n=t.callbackNode;zv(t,e);var i=yl(t,t===Dt?Ft:0);if(i===0)n!==null&&uh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&uh(n),e===1)t.tag===0?O_(np.bind(null,t)):Jg(np.bind(null,t)),I_(function(){!(Ye&6)&&ir()}),n=null;else{switch(Ag(i)){case 1:n=Qd;break;case 4:n=bg;break;case 16:n=_l;break;case 536870912:n=Tg;break;default:n=_l}n=Zx(n,Gx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Gx(t,e){if(dl=-1,fl=0,Ye&6)throw Error(ne(327));var n=t.callbackNode;if(Es()&&t.callbackNode!==n)return null;var i=yl(t,t===Dt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ol(t,i);else{e=i;var r=Ye;Ye|=2;var s=Xx();(Dt!==t||Ft!==e)&&(ci=null,Fs=St()+500,Er(t,e));do try{sy();break}catch(o){Wx(t,o)}while(!0);ff(),Ul.current=s,Ye=r,Et!==null?e=0:(Dt=null,Ft=0,e=Tt)}if(e!==0){if(e===2&&(r=Qu(t),r!==0&&(i=r,e=Td(t,r))),e===1)throw n=Xa,Er(t,0),Di(t,i),on(t,St()),n;if(e===6)Di(t,i);else{if(r=t.current.alternate,!(i&30)&&!iy(r)&&(e=Ol(t,i),e===2&&(s=Qu(t),s!==0&&(i=s,e=Td(t,s))),e===1))throw n=Xa,Er(t,0),Di(t,i),on(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:pr(t,tn,ci);break;case 3:if(Di(t,i),(i&130023424)===i&&(e=Cf+500-St(),10<e)){if(yl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ad(pr.bind(null,t,tn,ci),e);break}pr(t,tn,ci);break;case 4:if(Di(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-jn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ny(i/1960))-i,10<i){t.timeoutHandle=ad(pr.bind(null,t,tn,ci),i);break}pr(t,tn,ci);break;case 5:pr(t,tn,ci);break;default:throw Error(ne(329))}}}return on(t,St()),t.callbackNode===n?Gx.bind(null,t):null}function Td(t,e){var n=Aa;return t.current.memoizedState.isDehydrated&&(Er(t,e).flags|=256),t=Ol(t,e),t!==2&&(e=tn,tn=n,e!==null&&Cd(e)),t}function Cd(t){tn===null?tn=t:tn.push.apply(tn,t)}function iy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Vn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Di(t,e){for(e&=~Tf,e&=~uc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function np(t){if(Ye&6)throw Error(ne(327));Es();var e=yl(t,0);if(!(e&1))return on(t,St()),null;var n=Ol(t,e);if(t.tag!==0&&n===2){var i=Qu(t);i!==0&&(e=i,n=Td(t,i))}if(n===1)throw n=Xa,Er(t,0),Di(t,e),on(t,St()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,pr(t,tn,ci),on(t,St()),null}function Af(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(Fs=St()+500,ac&&ir())}}function Rr(t){Fi!==null&&Fi.tag===0&&!(Ye&6)&&Es();var e=Ye;Ye|=1;var n=Cn.transition,i=et;try{if(Cn.transition=null,et=1,t)return t()}finally{et=i,Cn.transition=n,Ye=e,!(Ye&6)&&ir()}}function Nf(){hn=gs.current,ct(gs)}function Er(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,D_(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(cf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&bl();break;case 3:Is(),ct(sn),ct(Xt),vf();break;case 5:xf(i);break;case 4:Is();break;case 13:ct(ft);break;case 19:ct(ft);break;case 10:hf(i.type._context);break;case 22:case 23:Nf()}n=n.return}if(Dt=t,Et=t=Wi(t.current,null),Ft=hn=e,Tt=0,Xa=null,Tf=uc=Nr=0,tn=Aa=null,yr!==null){for(e=0;e<yr.length;e++)if(n=yr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}yr=null}return t}function Wx(t,e){do{var n=Et;try{if(ff(),ll.current=Il,Dl){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Dl=!1}if(Ar=0,Lt=bt=ht=null,Ta=!1,Va=0,bf.current=null,n===null||n.return===null){Tt=1,Xa=e,Et=null;break}e:{var s=t,a=n.return,o=n,c=e;if(e=Ft,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=o,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Vh(a);if(g!==null){g.flags&=-257,Gh(g,a,o,s,e),g.mode&1&&Hh(s,u,e),e=g,c=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(c),e.updateQueue=y}else _.add(c);break e}else{if(!(e&1)){Hh(s,u,e),Rf();break e}c=Error(ne(426))}}else if(dt&&o.mode&1){var m=Vh(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Gh(m,a,o,s,e),uf(Us(c,o));break e}}s=c=Us(c,o),Tt!==4&&(Tt=2),Aa===null?Aa=[s]:Aa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Ax(s,c,e);Fh(s,d);break e;case 1:o=c;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Vi===null||!Vi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Nx(s,o,e);Fh(s,E);break e}}s=s.return}while(s!==null)}Yx(n)}catch(R){e=R,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function Xx(){var t=Ul.current;return Ul.current=Il,t===null?Il:t}function Rf(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Dt===null||!(Nr&268435455)&&!(uc&268435455)||Di(Dt,Ft)}function Ol(t,e){var n=Ye;Ye|=2;var i=Xx();(Dt!==t||Ft!==e)&&(ci=null,Er(t,e));do try{ry();break}catch(r){Wx(t,r)}while(!0);if(ff(),Ye=n,Ul.current=i,Et!==null)throw Error(ne(261));return Dt=null,Ft=0,Tt}function ry(){for(;Et!==null;)$x(Et)}function sy(){for(;Et!==null&&!Rv();)$x(Et)}function $x(t){var e=Kx(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?Yx(t):Et=e,bf.current=null}function Yx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Q_(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,Et=null;return}}else if(n=Z_(n,e,hn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);Tt===0&&(Tt=5)}function pr(t,e,n){var i=et,r=Cn.transition;try{Cn.transition=null,et=1,ay(t,e,n,i)}finally{Cn.transition=r,et=i}return null}function ay(t,e,n,i){do Es();while(Fi!==null);if(Ye&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(jv(t,s),t===Dt&&(Et=Dt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mo||(Mo=!0,Zx(_l,function(){return Es(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var a=et;et=1;var o=Ye;Ye|=4,bf.current=null,ey(t,n),Hx(n,t),T_(rd),Sl=!!id,rd=id=null,t.current=n,ty(n),Pv(),Ye=o,et=a,Cn.transition=s}else t.current=n;if(Mo&&(Mo=!1,Fi=t,kl=r),s=t.pendingLanes,s===0&&(Vi=null),Iv(n.stateNode),on(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Fl)throw Fl=!1,t=Ed,Ed=null,t;return kl&1&&t.tag!==0&&Es(),s=t.pendingLanes,s&1?t===bd?Na++:(Na=0,bd=t):Na=0,ir(),null}function Es(){if(Fi!==null){var t=Ag(kl),e=Cn.transition,n=et;try{if(Cn.transition=null,et=16>t?16:t,Fi===null)var i=!1;else{if(t=Fi,Fi=null,kl=0,Ye&6)throw Error(ne(331));var r=Ye;for(Ye|=4,_e=t.current;_e!==null;){var s=_e,a=s.child;if(_e.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(_e=u;_e!==null;){var f=_e;switch(f.tag){case 0:case 11:case 15:Ca(8,f,s)}var p=f.child;if(p!==null)p.return=f,_e=p;else for(;_e!==null;){f=_e;var h=f.sibling,g=f.return;if(zx(f),f===u){_e=null;break}if(h!==null){h.return=g,_e=h;break}_e=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}_e=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,_e=a;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ca(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,_e=d;break e}_e=s.return}}var x=t.current;for(_e=x;_e!==null;){a=_e;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,_e=v;else e:for(a=x;_e!==null;){if(o=_e,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:cc(9,o)}}catch(R){vt(o,o.return,R)}if(o===a){_e=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,_e=E;break e}_e=o.return}}if(Ye=r,ir(),ei&&typeof ei.onPostCommitFiberRoot=="function")try{ei.onPostCommitFiberRoot(tc,t)}catch{}i=!0}return i}finally{et=n,Cn.transition=e}}return!1}function ip(t,e,n){e=Us(n,e),e=Ax(t,e,1),t=Hi(t,e,1),e=Zt(),t!==null&&(qa(t,1,e),on(t,e))}function vt(t,e,n){if(t.tag===3)ip(t,t,n);else for(;e!==null;){if(e.tag===3){ip(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Vi===null||!Vi.has(i))){t=Us(n,t),t=Nx(e,t,1),e=Hi(e,t,1),t=Zt(),e!==null&&(qa(e,1,t),on(e,t));break}}e=e.return}}function oy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ft&n)===n&&(Tt===4||Tt===3&&(Ft&130023424)===Ft&&500>St()-Cf?Er(t,0):Tf|=n),on(t,e)}function qx(t,e){e===0&&(t.mode&1?(e=fo,fo<<=1,!(fo&130023424)&&(fo=4194304)):e=1);var n=Zt();t=vi(t,e),t!==null&&(qa(t,e,n),on(t,n))}function ly(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qx(t,n)}function cy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),qx(t,n)}var Kx;Kx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,K_(t,e,n);rn=!!(t.flags&131072)}else rn=!1,dt&&e.flags&1048576&&ex(e,Al,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ul(t,e),t=e.pendingProps;var r=Ps(e,Xt.current);ws(e,n),r=yf(null,e,i,t,r,n);var s=Sf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(s=!0,Tl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,mf(e),r.updater=lc,e.stateNode=r,r._reactInternals=e,hd(e,i,t,n),e=gd(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&lf(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ul(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=dy(i),t=In(i,t),r){case 0:e=md(null,e,i,t,n);break e;case 1:e=$h(null,e,i,t,n);break e;case 11:e=Wh(null,e,i,t,n);break e;case 14:e=Xh(null,e,i,In(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),md(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),$h(t,e,i,r,n);case 3:e:{if(Dx(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ax(t,e),Pl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Us(Error(ne(423)),e),e=Yh(t,e,i,n,r);break e}else if(i!==r){r=Us(Error(ne(424)),e),e=Yh(t,e,i,n,r);break e}else for(pn=Bi(e.stateNode.containerInfo.firstChild),mn=e,dt=!0,kn=null,n=rx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ls(),i===r){e=_i(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return ox(e),t===null&&ud(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,sd(i,r)?a=null:s!==null&&sd(i,s)&&(e.flags|=32),Lx(t,e),Kt(t,e,a,n),e.child;case 6:return t===null&&ud(e),null;case 13:return Ix(t,e,n);case 4:return gf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ds(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Wh(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,at(Nl,i._currentValue),i._currentValue=a,s!==null)if(Vn(s.value,a)){if(s.children===r.children&&!sn.current){e=_i(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=mi(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),dd(s.return,n,e),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),dd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ws(e,n),r=An(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=In(i,e.pendingProps),r=In(i.type,r),Xh(t,e,i,r,n);case 15:return Rx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),ul(t,e),e.tag=1,an(i)?(t=!0,Tl(e)):t=!1,ws(e,n),Cx(e,i,r),hd(e,i,r,n),gd(null,e,i,!0,t,n);case 19:return Ux(t,e,n);case 22:return Px(t,e,n)}throw Error(ne(156,e.tag))};function Zx(t,e){return Eg(t,e)}function uy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,i){return new uy(t,e,n,i)}function Pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dy(t){if(typeof t=="function")return Pf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qd)return 11;if(t===Kd)return 14}return 2}function Wi(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function hl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Pf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case as:return br(n.children,r,s,e);case Yd:a=8,r|=8;break;case ku:return t=bn(12,n,e,r|2),t.elementType=ku,t.lanes=s,t;case Ou:return t=bn(13,n,e,r),t.elementType=Ou,t.lanes=s,t;case zu:return t=bn(19,n,e,r),t.elementType=zu,t.lanes=s,t;case og:return dc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case sg:a=10;break e;case ag:a=9;break e;case qd:a=11;break e;case Kd:a=14;break e;case Ri:a=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=bn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function br(t,e,n,i){return t=bn(7,t,i,e),t.lanes=n,t}function dc(t,e,n,i){return t=bn(22,t,i,e),t.elementType=og,t.lanes=n,t.stateNode={isHidden:!1},t}function Zc(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function Qc(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lc(0),this.expirationTimes=Lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Lf(t,e,n,i,r,s,a,o,c){return t=new fy(t,e,n,o,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mf(s),t}function hy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ss,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Qx(t){if(!t)return Ki;t=t._reactInternals;e:{if(Dr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(an(n))return Qg(t,n,e)}return e}function Jx(t,e,n,i,r,s,a,o,c){return t=Lf(n,i,!0,t,r,s,a,o,c),t.context=Qx(null),n=t.current,i=Zt(),r=Gi(n),s=mi(i,r),s.callback=e??null,Hi(n,s,r),t.current.lanes=r,qa(t,r,i),on(t,i),t}function fc(t,e,n,i){var r=e.current,s=Zt(),a=Gi(r);return n=Qx(n),e.context===null?e.context=n:e.pendingContext=n,e=mi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Hi(r,e,a),t!==null&&(Bn(t,r,a,s),ol(t,r,a)),a}function zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Df(t,e){rp(t,e),(t=t.alternate)&&rp(t,e)}function py(){return null}var e0=typeof reportError=="function"?reportError:function(t){console.error(t)};function If(t){this._internalRoot=t}hc.prototype.render=If.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));fc(t,e,null,null)};hc.prototype.unmount=If.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rr(function(){fc(null,t,null,null)}),e[xi]=null}};function hc(t){this._internalRoot=t}hc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Li.length&&e!==0&&e<Li[n].priority;n++);Li.splice(n,0,t),n===0&&Dg(t)}};function Uf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sp(){}function my(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=zl(a);s.call(u)}}var a=Jx(e,i,t,0,null,!1,!1,"",sp);return t._reactRootContainer=a,t[xi]=a.current,Oa(t.nodeType===8?t.parentNode:t),Rr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=zl(c);o.call(u)}}var c=Lf(t,0,!1,null,null,!1,!1,"",sp);return t._reactRootContainer=c,t[xi]=c.current,Oa(t.nodeType===8?t.parentNode:t),Rr(function(){fc(e,c,n,i)}),c}function mc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var c=zl(a);o.call(c)}}fc(e,a,t,r)}else a=my(n,e,t,r,i);return zl(a)}Ng=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ga(e.pendingLanes);n!==0&&(Jd(e,n|1),on(e,St()),!(Ye&6)&&(Fs=St()+500,ir()))}break;case 13:Rr(function(){var i=vi(t,1);if(i!==null){var r=Zt();Bn(i,t,1,r)}}),Df(t,1)}};ef=function(t){if(t.tag===13){var e=vi(t,134217728);if(e!==null){var n=Zt();Bn(e,t,134217728,n)}Df(t,134217728)}};Rg=function(t){if(t.tag===13){var e=Gi(t),n=vi(t,e);if(n!==null){var i=Zt();Bn(n,t,e,i)}Df(t,e)}};Pg=function(){return et};Lg=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};qu=function(t,e,n){switch(e){case"input":if(Hu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=sc(i);if(!r)throw Error(ne(90));cg(i),Hu(i,r)}}}break;case"textarea":dg(t,n);break;case"select":e=n.value,e!=null&&_s(t,!!n.multiple,e,!1)}};vg=Af;_g=Rr;var gy={usingClientEntryPoint:!1,Events:[Za,us,sc,gg,xg,Af]},ia={findFiberByHostInstance:_r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xy={bundleType:ia.bundleType,version:ia.version,rendererPackageName:ia.rendererPackageName,rendererConfig:ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Si.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Mg(t),t===null?null:t.stateNode},findFiberByHostInstance:ia.findFiberByHostInstance||py,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wo.isDisabled&&wo.supportsFiber)try{tc=wo.inject(xy),ei=wo}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gy;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uf(e))throw Error(ne(200));return hy(t,e,null,n)};vn.createRoot=function(t,e){if(!Uf(t))throw Error(ne(299));var n=!1,i="",r=e0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Lf(t,1,!1,null,null,n,!1,i,r),t[xi]=e.current,Oa(t.nodeType===8?t.parentNode:t),new If(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Mg(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return Rr(t)};vn.hydrate=function(t,e,n){if(!pc(e))throw Error(ne(200));return mc(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!Uf(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=e0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Jx(e,null,t,1,n??null,r,!1,s,a),t[xi]=e.current,Oa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new hc(e)};vn.render=function(t,e,n){if(!pc(e))throw Error(ne(200));return mc(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!pc(t))throw Error(ne(40));return t._reactRootContainer?(Rr(function(){mc(null,null,t,!1,function(){t._reactRootContainer=null,t[xi]=null})}),!0):!1};vn.unstable_batchedUpdates=Af;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!pc(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return mc(t,e,n,!1,i)};vn.version="18.3.1-next-f1338f8080-20240426";function t0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t0)}catch(t){console.error(t)}}t0(),tg.exports=vn;var vy=tg.exports,ap=vy;Uu.createRoot=ap.createRoot,Uu.hydrateRoot=ap.hydrateRoot;const _y={},op=t=>{let e;const n=new Set,i=(f,p)=>{const h=typeof f=="function"?f(e):f;if(!Object.is(h,e)){const g=e;e=p??(typeof h!="object"||h===null)?h:Object.assign({},e,h),n.forEach(_=>_(e,g))}},r=()=>e,c={setState:i,getState:r,getInitialState:()=>u,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(_y?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=e=t(i,r,c);return c},yy=t=>t?op(t):op;var n0={exports:{}},i0={},r0={exports:{}},s0={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ks=Le;function Sy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var My=typeof Object.is=="function"?Object.is:Sy,wy=ks.useState,Ey=ks.useEffect,by=ks.useLayoutEffect,Ty=ks.useDebugValue;function Cy(t,e){var n=e(),i=wy({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return by(function(){r.value=n,r.getSnapshot=e,Jc(r)&&s({inst:r})},[t,n,e]),Ey(function(){return Jc(r)&&s({inst:r}),t(function(){Jc(r)&&s({inst:r})})},[t]),Ty(n),n}function Jc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!My(t,n)}catch{return!0}}function Ay(t,e){return e()}var Ny=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Ay:Cy;s0.useSyncExternalStore=ks.useSyncExternalStore!==void 0?ks.useSyncExternalStore:Ny;r0.exports=s0;var Ry=r0.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gc=Le,Py=Ry;function Ly(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Dy=typeof Object.is=="function"?Object.is:Ly,Iy=Py.useSyncExternalStore,Uy=gc.useRef,Fy=gc.useEffect,ky=gc.useMemo,Oy=gc.useDebugValue;i0.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=Uy(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=ky(function(){function c(g){if(!u){if(u=!0,f=g,g=i(g),r!==void 0&&a.hasValue){var _=a.value;if(r(_,g))return p=_}return p=g}if(_=p,Dy(f,g))return _;var y=i(g);return r!==void 0&&r(_,y)?(f=g,_):(f=g,p=y)}var u=!1,f,p,h=n===void 0?null:n;return[function(){return c(e())},h===null?void 0:function(){return c(h())}]},[e,n,i,r]);var o=Iy(t,s[0],s[1]);return Fy(function(){a.hasValue=!0,a.value=o},[o]),Oy(o),o};n0.exports=i0;var zy=n0.exports;const jy=Hm(zy),a0={},{useDebugValue:By}=Jm,{useSyncExternalStoreWithSelector:Hy}=jy;let lp=!1;const Vy=t=>t;function Gy(t,e=Vy,n){(a0?"production":void 0)!=="production"&&n&&!lp&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),lp=!0);const i=Hy(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return By(i),i}const cp=t=>{(a0?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?yy(t):t,n=(i,r)=>Gy(e,i,r);return Object.assign(n,e),n},Wy=t=>t?cp(t):cp,Xy={};function o0(t,e){let n;try{n=t()}catch{return}return{getItem:r=>{var s;const a=c=>c===null?null:JSON.parse(c,void 0),o=(s=n.getItem(r))!=null?s:null;return o instanceof Promise?o.then(a):a(o)},setItem:(r,s)=>n.setItem(r,JSON.stringify(s,void 0)),removeItem:r=>n.removeItem(r)}}const $a=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(i){return $a(i)(n)},catch(i){return this}}}catch(n){return{then(i){return this},catch(i){return $a(i)(n)}}}},$y=(t,e)=>(n,i,r)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:m=>m,version:0,merge:(m,d)=>({...d,...m}),...e},a=!1;const o=new Set,c=new Set;let u;try{u=s.getStorage()}catch{}if(!u)return t((...m)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...m)},i,r);const f=$a(s.serialize),p=()=>{const m=s.partialize({...i()});let d;const x=f({state:m,version:s.version}).then(v=>u.setItem(s.name,v)).catch(v=>{d=v});if(d)throw d;return x},h=r.setState;r.setState=(m,d)=>{h(m,d),p()};const g=t((...m)=>{n(...m),p()},i,r);let _;const y=()=>{var m;if(!u)return;a=!1,o.forEach(x=>x(i()));const d=((m=s.onRehydrateStorage)==null?void 0:m.call(s,i()))||void 0;return $a(u.getItem.bind(u))(s.name).then(x=>{if(x)return s.deserialize(x)}).then(x=>{if(x)if(typeof x.version=="number"&&x.version!==s.version){if(s.migrate)return s.migrate(x.state,x.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return x.state}).then(x=>{var v;return _=s.merge(x,(v=i())!=null?v:g),n(_,!0),p()}).then(()=>{d==null||d(_,void 0),a=!0,c.forEach(x=>x(_))}).catch(x=>{d==null||d(void 0,x)})};return r.persist={setOptions:m=>{s={...s,...m},m.getStorage&&(u=m.getStorage())},clearStorage:()=>{u==null||u.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>y(),hasHydrated:()=>a,onHydrate:m=>(o.add(m),()=>{o.delete(m)}),onFinishHydration:m=>(c.add(m),()=>{c.delete(m)})},y(),_||g},Yy=(t,e)=>(n,i,r)=>{let s={storage:o0(()=>localStorage),partialize:y=>y,version:0,merge:(y,m)=>({...m,...y}),...e},a=!1;const o=new Set,c=new Set;let u=s.storage;if(!u)return t((...y)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...y)},i,r);const f=()=>{const y=s.partialize({...i()});return u.setItem(s.name,{state:y,version:s.version})},p=r.setState;r.setState=(y,m)=>{p(y,m),f()};const h=t((...y)=>{n(...y),f()},i,r);r.getInitialState=()=>h;let g;const _=()=>{var y,m;if(!u)return;a=!1,o.forEach(x=>{var v;return x((v=i())!=null?v:h)});const d=((m=s.onRehydrateStorage)==null?void 0:m.call(s,(y=i())!=null?y:h))||void 0;return $a(u.getItem.bind(u))(s.name).then(x=>{if(x)if(typeof x.version=="number"&&x.version!==s.version){if(s.migrate)return[!0,s.migrate(x.state,x.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,x.state];return[!1,void 0]}).then(x=>{var v;const[E,R]=x;if(g=s.merge(R,(v=i())!=null?v:h),n(g,!0),E)return f()}).then(()=>{d==null||d(g,void 0),g=i(),a=!0,c.forEach(x=>x(g))}).catch(x=>{d==null||d(void 0,x)})};return r.persist={setOptions:y=>{s={...s,...y},y.storage&&(u=y.storage)},clearStorage:()=>{u==null||u.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>_(),hasHydrated:()=>a,onHydrate:y=>(o.add(y),()=>{o.delete(y)}),onFinishHydration:y=>(c.add(y),()=>{c.delete(y)})},s.skipHydration||_(),g||h},qy=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((Xy?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),$y(t,e)):Yy(t,e),Ky=qy,rt=[{id:"ursa_major",name:"大熊座",nameEn:"Ursa Major",difficulty:1,description:"北斗七星所在的著名星座，是寻找北极星的重要参照。",mythology:"宙斯将美丽的卡利斯托变成熊，后升上天成为大熊座。",mythologyDetail:"在古希腊神话中，卡利斯托是一位美丽的狩猎女神，被宙斯所爱并生下儿子阿卡斯。宙斯的妻子赫拉因嫉妒，将卡利斯托变成了一只大熊。多年后，阿卡斯在狩猎时遇到了变成熊的母亲，为了避免悲剧，宙斯将他们母子一同升上天界，成为大熊座和小熊座，永远在星空中相伴。",observationTips:"春季夜晚最为明显，北斗七星的勺口两颗星连线延长5倍即可找到北极星。",bestTime:"春季3-5月，晚间21:00-23:00",hemisphere:"北半球",area:"1280平方度",ranking:3,stars:[{id:"um1",name:"天枢",x:-4.2,y:1.8,z:0,mag:1.8,color:"#ffddaa"},{id:"um2",name:"天璇",x:-3.5,y:1.2,z:0,mag:2.4,color:"#ffeecc"},{id:"um3",name:"天玑",x:-2,y:1.5,z:0,mag:2.5,color:"#ffffff"},{id:"um4",name:"天权",x:-1.2,y:.8,z:0,mag:3.3,color:"#ddeeff"},{id:"um5",name:"玉衡",x:0,y:1,z:0,mag:1.8,color:"#ffeecc"},{id:"um6",name:"开阳",x:1.3,y:1.3,z:0,mag:2.3,color:"#ffffff"},{id:"um7",name:"摇光",x:2.6,y:1.8,z:0,mag:1.9,color:"#cce4ff"}],connections:[["um1","um2"],["um2","um3"],["um3","um4"],["um4","um5"],["um5","um6"],["um6","um7"],["um4","um3"]],season:"春",center:{x:-.5,y:1.3},tags:["北斗七星","北极星","导航"]},{id:"orion",name:"猎户座",nameEn:"Orion",difficulty:1,description:"冬季最耀眼的星座之一，腰带三星是显著标志。",mythology:"海神波塞冬之子，英勇的猎人奥利安被蝎子毒死后升上天。",mythologyDetail:"奥利安是海神波塞冬与欧律阿勒之子，他拥有非凡的力量和英俊的外表，自称能杀死世上任何野兽。女神阿耳忒弥斯爱上了他，但她的哥哥阿波罗对此不满。阿波罗派出一只巨大的蝎子去刺杀奥利安，经过激烈搏斗，奥利安被蝎子毒刺杀死。宙斯将这位英勇的猎人升上天界，成为猎户座，而那只蝎子也成为天蝎座，永远与猎户座相对，永不相见。",observationTips:"冬季夜晚面向南方，三颗明亮的星星整齐排列成腰带，这是猎户座最显著的标志。",bestTime:"冬季12-2月，晚间20:00-22:00",hemisphere:"南北半球均可见",area:"594平方度",ranking:26,stars:[{id:"o1",name:"参宿四",x:-2.5,y:2,z:0,mag:.5,color:"#ff8866"},{id:"o2",name:"参宿五",x:2.2,y:2,z:0,mag:1.6,color:"#cce0ff"},{id:"o3",name:"参宿一",x:-1.8,y:0,z:0,mag:2,color:"#ddeeff"},{id:"o4",name:"参宿二",x:0,y:-.1,z:0,mag:1.7,color:"#ffffff"},{id:"o5",name:"参宿三",x:1.8,y:-.2,z:0,mag:2.2,color:"#bbddee"},{id:"o6",name:"参宿七",x:-1.5,y:-2,z:0,mag:.1,color:"#aaccff"},{id:"o7",name:"参宿六",x:1.5,y:-2.2,z:0,mag:2.8,color:"#ffccaa"},{id:"o8",name:"猎户星云",x:0,y:-1.2,z:0,mag:5,color:"#ff99cc"}],connections:[["o1","o3"],["o1","o2"],["o2","o5"],["o3","o4"],["o4","o5"],["o3","o6"],["o5","o7"],["o4","o8"]],season:"冬",center:{x:0,y:0},tags:["猎户星云","红超巨星","冬季"]},{id:"cassiopeia",name:"仙后座",nameEn:"Cassiopeia",difficulty:2,description:"呈W形排列的星座，位于北极星对面的天空。",mythology:"埃塞俄比亚王后卡西奥佩娅因炫耀美貌被钉在天上永远旋转。",mythologyDetail:"卡西奥佩娅是埃塞俄比亚国王克甫斯的王后，她因自恃美貌，夸耀自己和女儿安德洛墨达比海神涅柔斯的女儿们更美丽。愤怒的海神派海怪刻托袭击埃塞俄比亚海岸。为了平息神怒，国王被迫将女儿安德洛墨达绑在海边献祭。幸好英雄珀耳修斯路过，杀死海怪救下公主。事后，海神仍惩罚卡西奥佩娅，将她钉在天上的宝座上永远旋转，让她有时头朝下，以示羞辱。",observationTips:"秋季夜晚靠近北极星的位置，寻找五颗亮星组成的W或M形状。",bestTime:"秋季9-11月，晚间21:00-23:00",hemisphere:"北半球",area:"598平方度",ranking:25,stars:[{id:"c1",name:"王良一",x:-3,y:1,z:0,mag:2.5,color:"#ffffff"},{id:"c2",name:"王良四",x:-1.5,y:2.2,z:0,mag:2.3,color:"#ffddbb"},{id:"c3",name:"策",x:0,y:.8,z:0,mag:2.2,color:"#eeddcc"},{id:"c4",name:"王良三",x:1.5,y:2,z:0,mag:2.7,color:"#ccddff"},{id:"c5",name:"王良二",x:3,y:.5,z:0,mag:3,color:"#ffffff"}],connections:[["c1","c2"],["c2","c3"],["c3","c4"],["c4","c5"]],season:"秋",center:{x:0,y:1.3},tags:["W形","拱极星座","王后"]},{id:"scorpius",name:"天蝎座",nameEn:"Scorpius",difficulty:2,description:"夏季南方天空中的宏伟星座，心宿二是红色超巨星。",mythology:"杀死猎人奥利安的大蝎子，因此与猎户座永远相对出现。",mythologyDetail:"这只巨大的蝎子是阿波罗派去刺杀猎人奥利安的。奥利安因自负而自称能杀死世上任何野兽，这激怒了众神。蝎子从地缝中钻出，用毒刺刺中奥利安的脚踝，导致他中毒身亡。为了纪念这场战斗，宙斯将蝎子升上天界成为天蝎座。由于奥利安和蝎子是天敌，宙斯让它们永远位于天空的两端，天蝎座升起时猎户座就会落下，永不相见，避免它们在天界继续争斗。",observationTips:"夏季夜晚面向南方，寻找红色的心宿二（天蝎的心脏），然后沿着弯曲的星链寻找蝎子的尾巴。",bestTime:"夏季6-8月，晚间21:00-23:00",hemisphere:"南半球更易观测，北半球夏季可见",area:"497平方度",ranking:33,stars:[{id:"s1",name:"房宿四",x:-2,y:-1,z:0,mag:2.6,color:"#ffeecc"},{id:"s2",name:"房宿三",x:-1,y:-.5,z:0,mag:2.3,color:"#ccdeff"},{id:"s3",name:"心宿二",x:0,y:0,z:0,mag:1,color:"#ff5533"},{id:"s4",name:"心宿三",x:1,y:.3,z:0,mag:2.9,color:"#ffeedd"},{id:"s5",name:"尾宿一",x:1.8,y:-.2,z:0,mag:2.7,color:"#bbeecc"},{id:"s6",name:"尾宿二",x:2.4,y:.5,z:0,mag:2.8,color:"#ccddff"},{id:"s7",name:"尾宿八",x:2.8,y:1.2,z:0,mag:2.4,color:"#ffffff"},{id:"s8",name:"尾宿九",x:3.2,y:.4,z:0,mag:1.6,color:"#ddeeff"}],connections:[["s1","s2"],["s2","s3"],["s3","s4"],["s4","s5"],["s5","s6"],["s6","s7"],["s7","s8"],["s6","s8"]],season:"夏",center:{x:.6,y:.2},tags:["心宿二","红超巨星","夏季大三角"]},{id:"lyra",name:"天琴座",nameEn:"Lyra",difficulty:3,description:"织女星所在的小而优雅的星座，夏季大三角之一。",mythology:"俄耳甫斯的竖琴，他的音乐能让万物驻足聆听。",mythologyDetail:"俄耳甫斯是古希腊最伟大的音乐家，他的琴声能使飞鸟走兽、甚至顽石流泪。他的妻子欧律狄刻不幸被毒蛇咬死，悲痛欲绝的俄耳甫斯带着竖琴深入冥界，用动人的音乐打动了冥王哈迪斯和冥后珀耳塞福涅。冥王允许他带妻子回到人间，但要求他在走出冥界前不得回头看妻子。不幸的是，在接近出口时，俄耳甫斯忍不住回头看了一眼，妻子就此永远消失。俄耳甫斯死后，宙斯将他的竖琴升上天界，成为天琴座。",observationTips:"夏季夜晚寻找最亮的织女星，然后在其下方寻找由四颗暗星组成的小平行四边形。",bestTime:"夏季6-8月，晚间21:00-23:00",hemisphere:"北半球",area:"286平方度",ranking:52,stars:[{id:"l1",name:"织女一",x:0,y:2,z:0,mag:0,color:"#aaddff"},{id:"l2",name:"渐台二",x:-1,y:.5,z:0,mag:4.3,color:"#ffddcc"},{id:"l3",name:"渐台三",x:-.5,y:0,z:0,mag:4.3,color:"#ffeecc"},{id:"l4",name:"渐台一",x:.5,y:0,z:0,mag:4.7,color:"#ffffff"},{id:"l5",name:"渐台四",x:1,y:.5,z:0,mag:5.1,color:"#ccddee"}],connections:[["l1","l2"],["l1","l5"],["l2","l3"],["l3","l4"],["l4","l5"],["l2","l4"]],season:"夏",center:{x:0,y:.8},tags:["织女星","竖琴","夏季大三角","神话"]},{id:"cygnus",name:"天鹅座",nameEn:"Cygnus",difficulty:3,description:'银河中展翅飞翔的天鹅，又称"北十字"。',mythology:"宙斯化身天鹅接近斯巴达王后勒达，美丽的天鹅升上天界。",mythologyDetail:'宙斯为了接近美丽的斯巴达王后勒达，化身成为一只雪白优雅的天鹅。勒达被这只美丽的天鹅吸引，与它亲近。后来勒达生下了两枚鹅蛋，一枚孵出了海伦（后来引发特洛伊战争的绝世美女）和卡斯托尔，另一枚孵出了波吕丢刻斯和克吕泰涅斯特拉。为了纪念这段故事，宙斯将他化身的天鹅升上天界，成为天鹅座。天鹅座位于银河之中，展翅飞翔，其主体的五颗亮星构成一个优美的十字形，因此也被称为"北十字"。',observationTips:"秋季夜晚，在银河中寻找一个十字形的星群，最上方的亮星是天津四，与织女星、牛郎星组成夏季大三角。",bestTime:"秋季9-11月，晚间21:00-23:00",hemisphere:"北半球",area:"804平方度",ranking:16,stars:[{id:"cy1",name:"天津四",x:0,y:2.5,z:0,mag:1.3,color:"#ddeeff"},{id:"cy2",name:"天津九",x:-1.2,y:1,z:0,mag:2.9,color:"#ffeecc"},{id:"cy3",name:"辇道增七",x:0,y:.5,z:0,mag:3.2,color:"#ffccaa"},{id:"cy4",name:"天津一",x:1.2,y:1,z:0,mag:2.9,color:"#ffffff"},{id:"cy5",name:"天津二",x:-1.8,y:0,z:0,mag:4,color:"#ddeeff"},{id:"cy6",name:"奚仲四",x:0,y:-1.5,z:0,mag:2.5,color:"#ffeecc"},{id:"cy7",name:"天津八",x:1.8,y:0,z:0,mag:3.7,color:"#ccddee"}],connections:[["cy1","cy3"],["cy3","cy6"],["cy2","cy3"],["cy3","cy4"],["cy2","cy5"],["cy4","cy7"]],season:"秋",center:{x:0,y:.5},tags:["北十字","银河","夏季大三角","天津四"]}],Zi=t=>rt.find(e=>e.id===t),jl=[{id:"first_star",name:"初见星光",description:"完成第一次星星连线",icon:"⭐",category:"beginner",condition:{type:"connect_count",value:1}},{id:"constellation_1",name:"初识星座",description:"成功发现第一个完整星座",icon:"✨",category:"explorer",condition:{type:"discover_count",value:1}},{id:"constellation_3",name:"星空漫步者",description:"发现3个不同的星座",icon:"🌙",category:"explorer",condition:{type:"discover_count",value:3}},{id:"constellation_all",name:"观星大师",description:"发现所有的星座",icon:"🌟",category:"explorer",condition:{type:"discover_count",value:6}},{id:"easy_clear",name:"入门完成",description:"完成所有难度1的星座",icon:"🎯",category:"challenge",condition:{type:"difficulty_clear",value:1}},{id:"medium_clear",name:"进阶探索",description:"完成所有难度2的星座",icon:"🔥",category:"challenge",condition:{type:"difficulty_clear",value:2}},{id:"hard_clear",name:"星空征服者",description:"完成所有难度3的星座",icon:"💎",category:"challenge",condition:{type:"difficulty_clear",value:3}},{id:"log_5",name:"记录者",description:"累计5条观测日志",icon:"📖",category:"collector",condition:{type:"log_count",value:5}},{id:"log_15",name:"天文日志家",description:"累计15条观测日志",icon:"📚",category:"collector",condition:{type:"log_count",value:15}},{id:"perfect_orion",name:"猎人之眼",description:"在没有错误的情况下完成猎户座",icon:"🏹",category:"special",condition:{type:"perfect_constellation",value:"orion"}},{id:"perfect_ursa",name:"北斗指引",description:"在没有错误的情况下完成大熊座",icon:"🐻",category:"special",condition:{type:"perfect_constellation",value:"ursa_major"}},{id:"dedicated",name:"坚持不懈",description:"累计错误连线超过20次但最终完成",icon:"💪",category:"special",condition:{type:"total_mistakes",value:20}},{id:"expedition_first",name:"夜行初旅",description:"完成第一次夜间远征",icon:"🌙",category:"expedition",condition:{type:"expedition_complete",value:1}},{id:"expedition_5",name:"远征常客",description:"完成5次夜间远征",icon:"🗺️",category:"expedition",condition:{type:"expedition_complete",value:5}},{id:"expedition_half",name:"半程征途",description:"在单次远征中通过3关",icon:"⛰️",category:"expedition",condition:{type:"expedition_stages",value:3}},{id:"expedition_full",name:"月下征途",description:"在单次远征中通过全部6关",icon:"🏆",category:"expedition",condition:{type:"expedition_stages",value:6}},{id:"expedition_perfect_3",name:"零失误远征",description:"累计3次完美通关远征关卡",icon:"💫",category:"expedition",condition:{type:"expedition_perfect",value:3}},{id:"expedition_stardust",name:"星尘收集者",description:"远征累计获得500星尘",icon:"✦",category:"expedition",condition:{type:"expedition_stardust",value:500}}],l0=t=>jl.find(e=>e.id===t),up={volume:.7,sfxVolume:.8,graphicsQuality:"high",showLabels:!0,showNebula:!0,starDensity:1,animationSpeed:1,theme:"dark",hapticFeedback:!0,autoSave:!0,language:"zh-CN"},Fr={low:{starCount:800,particleSize:.02,antialias:!1,bloom:!1},medium:{starCount:1500,particleSize:.03,antialias:!0,bloom:!1},high:{starCount:2500,particleSize:.04,antialias:!0,bloom:!0}},Os={1:{stars:7,tolerance:.25,label:"入门"},2:{stars:8,tolerance:.18,label:"进阶"},3:{stars:5,tolerance:.12,label:"挑战"}},dp={PROGRESS:"starconnect_progress"},Gt={spring:{id:"spring",name:"春季",nameEn:"Spring",icon:"🌸",color:"from-pink-500 to-rose-400",bgColor:"bg-pink-500/10",borderColor:"border-pink-500/30",textColor:"text-pink-300",months:"3月 - 5月",description:"万物复苏，北斗七星指引方向"},summer:{id:"summer",name:"夏季",nameEn:"Summer",icon:"☀️",color:"from-orange-500 to-amber-400",bgColor:"bg-orange-500/10",borderColor:"border-orange-500/30",textColor:"text-orange-300",months:"6月 - 8月",description:"银河璀璨，天蝎与天琴交相辉映"},autumn:{id:"autumn",name:"秋季",nameEn:"Autumn",icon:"🍂",color:"from-amber-600 to-yellow-500",bgColor:"bg-amber-500/10",borderColor:"border-amber-500/30",textColor:"text-amber-300",months:"9月 - 11月",description:"秋高气爽，仙后与天鹅展翅翱翔"},winter:{id:"winter",name:"冬季",nameEn:"Winter",icon:"❄️",color:"from-cyan-500 to-blue-400",bgColor:"bg-cyan-500/10",borderColor:"border-cyan-500/30",textColor:"text-cyan-300",months:"12月 - 2月",description:"寒夜深沉，猎户座闪耀星空"}},Kn={beginner:{id:"beginner",name:"入门探索",description:"熟悉当季星座的基本形态",requirement:1,multiplier:1},intermediate:{id:"intermediate",name:"深度观测",description:"完美完成当季所有星座",requirement:2,multiplier:1.5},master:{id:"master",name:"季节大师",description:"反复观测，解锁隐藏成就",requirement:3,multiplier:2}},Zy={spring:rt.filter(t=>t.season==="春").map(t=>t.id),summer:rt.filter(t=>t.season==="夏").map(t=>t.id),autumn:rt.filter(t=>t.season==="秋").map(t=>t.id),winter:rt.filter(t=>t.season==="冬").map(t=>t.id)},pl={spring:{beginner:{id:"spring_beginner",name:"春之萌芽",type:"title",icon:"🌱",description:"完成春季入门探索的称号"},intermediate:{id:"spring_intermediate",name:"花开满庭",type:"badge",icon:"🌸",description:"完美完成春季所有星座的徽章"},master:{id:"spring_master",name:"春日守望者",type:"achievement",icon:"🌺",description:"春季观测大师的终极成就",achievementId:"spring_master"}},summer:{beginner:{id:"summer_beginner",name:"夏之初阳",type:"title",icon:"🌞",description:"完成夏季入门探索的称号"},intermediate:{id:"summer_intermediate",name:"繁星漫天",type:"badge",icon:"⭐",description:"完美完成夏季所有星座的徽章"},master:{id:"summer_master",name:"银河守护者",type:"achievement",icon:"🌌",description:"夏季观测大师的终极成就",achievementId:"summer_master"}},autumn:{beginner:{id:"autumn_beginner",name:"秋之寄语",type:"title",icon:"🍁",description:"完成秋季入门探索的称号"},intermediate:{id:"autumn_intermediate",name:"金风送爽",type:"badge",icon:"🌾",description:"完美完成秋季所有星座的徽章"},master:{id:"autumn_master",name:"秋水共长天",type:"achievement",icon:"🦢",description:"秋季观测大师的终极成就",achievementId:"autumn_master"}},winter:{beginner:{id:"winter_beginner",name:"冬之静谧",type:"title",icon:"⛄",description:"完成冬季入门探索的称号"},intermediate:{id:"winter_intermediate",name:"傲雪凌霜",type:"badge",icon:"❄️",description:"完美完成冬季所有星座的徽章"},master:{id:"winter_master",name:"极夜追光人",type:"achievement",icon:"💎",description:"冬季观测大师的终极成就",achievementId:"winter_master"}}},bs=[{id:"spring_master",name:"春日守望者",description:"成为春季观测大师",icon:"🌺",category:"season",season:"spring",condition:{type:"season_master",value:"spring"}},{id:"summer_master",name:"银河守护者",description:"成为夏季观测大师",icon:"🌌",category:"season",season:"summer",condition:{type:"season_master",value:"summer"}},{id:"autumn_master",name:"秋水共长天",description:"成为秋季观测大师",icon:"🦢",category:"season",season:"autumn",condition:{type:"season_master",value:"autumn"}},{id:"winter_master",name:"极夜追光人",description:"成为冬季观测大师",icon:"💎",category:"season",season:"winter",condition:{type:"season_master",value:"winter"}},{id:"four_seasons",name:"四季轮回",description:"完成所有四季的观测计划",icon:"🔄",category:"season",season:"all",condition:{type:"four_seasons",value:!0}}];function Bl(t){return Zy[t]||[]}function Ff(){const t=new Date().getMonth();return t>=2&&t<=4?"spring":t>=5&&t<=7?"summer":t>=8&&t<=10?"autumn":"winter"}function Eo(t,e,n,i,r){const s=Bl(t),a=s.filter(o=>n.includes(o)).length;if(e==="beginner")return{current:Math.min(a,Kn.beginner.requirement),target:Kn.beginner.requirement,percentage:Math.min(a/Kn.beginner.requirement*100,100),completed:a>=Kn.beginner.requirement};if(e==="intermediate"){const o=s.filter(c=>i[c]||!1).length;return{current:Math.min(o,s.length),target:s.length,percentage:s.length>0?Math.min(o/s.length*100,100):0,completed:o>=s.length}}if(e==="master"){const o=s.reduce((u,f)=>u+Math.max(0,(r[f]||0)-1),0),c=s.length*Kn.master.requirement;return{current:Math.min(o,c),target:c,percentage:c>0?Math.min(o/c*100,100):0,completed:o>=c}}return{current:0,target:1,percentage:0,completed:!1}}const kr={parent:{id:"parent",name:"家长",icon:"👨‍👩‍👧",color:"from-blue-500 to-cyan-400",description:"引导者，帮助孩子学习"},child:{id:"child",name:"孩子",icon:"🧒",color:"from-pink-500 to-orange-400",description:"探索者，在引导下发现星空"}},fp={collaborative:{id:"collaborative",name:"协作任务",icon:"🤝",description:"家长和孩子共同完成"},turn_based:{id:"turn_based",name:"轮流任务",icon:"🔄",description:"家长和孩子轮流操作"},challenge:{id:"challenge",name:"PK挑战",icon:"⚔️",description:"亲子趣味竞赛"},guided:{id:"guided",name:"引导任务",icon:"👆",description:"家长引导，孩子操作"}},Hl=[{id:"first_collaboration",name:"初次携手",type:"collaborative",description:"家长和孩子一起完成第一个星座连线",icon:"⭐",difficulty:1,target:{type:"collaborative_complete",value:1},reward:{xp:50,badge:"first_together"},steps:[{role:"parent",instruction:"请帮助孩子找到北斗七星的位置"},{role:"child",instruction:"试着连接第一颗和第二颗星星"},{role:"parent",instruction:"鼓励孩子继续完成剩下的连线"},{role:"child",instruction:"独立完成剩余的星星连接"}]},{id:"story_time",name:"星座故事会",type:"turn_based",description:"家长讲故事，孩子找星座",icon:"📖",difficulty:1,target:{type:"turn_complete",value:3},reward:{xp:80,badge:"story_teller"},steps:[{role:"parent",instruction:"为孩子讲述猎户座的神话故事"},{role:"child",instruction:"在星空中找到猎户座的腰带三星"},{role:"parent",instruction:"继续讲述天蝎座的故事"},{role:"child",instruction:"找到天蝎座中红色的心宿二"}]},{id:"constellation_quiz",name:"星空小测验",type:"challenge",description:"亲子问答竞赛，看谁知道得多",icon:"🎯",difficulty:2,target:{type:"quiz_score",value:80},reward:{xp:100,badge:"quiz_master"},questions:[{q:"北斗七星属于哪个星座？",a:"大熊座",options:["大熊座","小熊座","猎户座","仙后座"]},{q:"猎户座中最红的星星叫什么？",a:"参宿四",options:["参宿四","参宿七","心宿二","织女星"]},{q:"哪个星座代表了一只蝎子？",a:"天蝎座",options:["天蝎座","猎户座","天琴座","天鹅座"]},{q:"织女星位于哪个星座？",a:"天琴座",options:["天琴座","天鹅座","仙女座","仙后座"]},{q:"W形状的星座叫什么？",a:"仙后座",options:["仙后座","仙王座","仙女座","武仙座"]}]},{id:"find_the_pattern",name:"寻找图案",type:"guided",description:"家长给出提示，孩子找出图案",icon:"🔍",difficulty:2,target:{type:"guided_complete",value:3},reward:{xp:120,badge:"pattern_finder"},challenges:[{hint:"寻找一个像勺子的图案",answer:"ursa_major"},{hint:"寻找一个像猎人腰带的三颗星",answer:"orion"},{hint:"寻找一个像W字母的形状",answer:"cassiopeia"}]},{id:"season_explorer",name:"四季探索者",type:"collaborative",description:"一起探索当前季节的所有星座",icon:"🌸",difficulty:3,target:{type:"season_discovery",value:1},reward:{xp:200,badge:"season_explorer"}},{id:"mythology_master",name:"神话大师",type:"turn_based",description:"轮流讲述每个星座的神话故事",icon:"🏛️",difficulty:3,target:{type:"mythology_told",value:6},reward:{xp:300,badge:"mythology_master"}},{id:"perfect_team",name:"完美搭档",type:"collaborative",description:"连续完美完成3个星座，零失误",icon:"💎",difficulty:3,target:{type:"perfect_streak",value:3},reward:{xp:250,badge:"perfect_team"}},{id:"night_sky_guardians",name:"星空守护者",type:"challenge",description:"连续7天亲子观星打卡",icon:"🛡️",difficulty:4,target:{type:"streak_days",value:7},reward:{xp:500,badge:"sky_guardians"}}],Vl=[{id:"first_together",name:"携手起步",description:"完成第一次亲子协作星座连线",icon:"🤝",category:"collaboration",color:"from-blue-500 to-cyan-400",condition:{type:"collaborative_complete",value:1}},{id:"story_teller",name:"故事时光",description:"完成3次故事+探索的轮流任务",icon:"📖",category:"collaboration",color:"from-amber-500 to-orange-400",condition:{type:"turn_complete",value:3}},{id:"quiz_master",name:"问答达人",description:"在亲子测验中获得80分以上",icon:"🎯",category:"challenge",color:"from-red-500 to-pink-400",condition:{type:"quiz_score",value:80}},{id:"pattern_finder",name:"图案猎手",description:"完成3次引导寻星任务",icon:"🔍",category:"guided",color:"from-green-500 to-emerald-400",condition:{type:"guided_complete",value:3}},{id:"perfect_team",name:"完美搭档",description:"连续3次完美完成星座连线",icon:"💎",category:"collaboration",color:"from-purple-500 to-pink-400",condition:{type:"perfect_streak",value:3}},{id:"season_explorer",name:"四季探索者",description:"完整探索一个季节的所有星座",icon:"🌸",category:"milestone",color:"from-pink-500 to-rose-400",condition:{type:"season_discovery",value:1}},{id:"mythology_master",name:"神话传承者",description:"讲述完所有星座的神话故事",icon:"🏛️",category:"milestone",color:"from-yellow-500 to-amber-400",condition:{type:"mythology_told",value:6}},{id:"sky_guardians",name:"星空守护者",description:"连续7天亲子观星打卡",icon:"🛡️",category:"milestone",color:"from-indigo-500 to-purple-400",condition:{type:"streak_days",value:7}},{id:"family_bond",name:"家庭纽带",description:"累计亲子共学时长达到5小时",icon:"❤️",category:"milestone",color:"from-red-500 to-pink-400",condition:{type:"total_minutes",value:300}},{id:"little_astronomer",name:"小小天文学家",description:"孩子独立完成5个星座",icon:"🔭",category:"child_growth",color:"from-cyan-500 to-blue-400",condition:{type:"child_independent",value:5}},{id:"patient_guide",name:"耐心引导者",description:"家长成功引导完成10次任务",icon:"👨‍🏫",category:"parent_growth",color:"from-emerald-500 to-green-400",condition:{type:"parent_guided",value:10}},{id:"constellation_all_family",name:"全家观星大师",description:"亲子模式下发现所有星座",icon:"🌟",category:"milestone",color:"from-yellow-400 via-orange-400 to-red-400",condition:{type:"family_discover_all",value:6}}],ra={welcome:{parent:"欢迎来到星空亲子探索！我是你的星空向导。作为家长，你将引导孩子一起探索浩瀚星空。可以先从简单的星座开始，用讲故事的方式激发孩子的兴趣。",child:"小朋友你好！我是星空小精灵！今天我们要一起去探索美丽的星空，寻找各种各样的星座。准备好了吗？让我们开始奇妙的星空之旅吧！"},constellations:{ursa_major:{story:"在很久很久以前，有一位美丽的狩猎女神叫卡利斯托。她被宙斯所爱，还生下了一个可爱的儿子。但是宙斯的妻子赫拉非常嫉妒，就把卡利斯托变成了一只大熊。后来，宙斯把他们母子都放到了天上，成为了大熊座和小熊座，永远在星空中相伴。你看，那七颗明亮的星星组成的大勺子，就是大熊座的尾巴哦！",science:"大熊座是北半球最著名的星座之一。北斗七星其实只是大熊座的一部分。从天璇向天枢延伸5倍的距离，就能找到北极星，这可是古代航海家和旅行者的重要导航标志呢！",tips:"先找到像勺子一样的北斗七星，然后沿着勺口两颗星的连线，延长5倍就能找到北极星啦！"},orion:{story:"奥利安是海神波塞冬的儿子，他是一位英勇的猎人，自称能杀死世上任何野兽。女神阿耳忒弥斯爱上了他，但她的哥哥阿波罗很不满，派了一只大蝎子去刺杀奥利安。经过激烈搏斗，奥利安被蝎子毒死了。宙斯把这位英勇的猎人升上了天界，成为了猎户座。而那只蝎子也变成了天蝎座，永远和猎户座相对，永不相见。",science:"猎户座是冬季夜空中最壮观的星座。参宿四是一颗红超巨星，比太阳大得多，如果把它放到太阳的位置，它能把火星轨道都包含进去！猎户座大星云是一个巨大的恒星诞生区，那里正在孕育新的恒星。",tips:"冬天面向南方，寻找三颗排成一条直线的亮星，那就是猎户的腰带！"},cassiopeia:{story:"卡西奥佩娅是埃塞俄比亚的王后，她非常美丽，但也很骄傲。她夸耀自己和女儿比海神的女儿们还要美丽，这激怒了海神。海神派海怪去袭击她的国家，为了平息神怒，王后只能把女儿绑在海边献祭。后来英雄珀耳修斯救了公主，但海神还是惩罚了王后，把她钉在天上永远旋转，让她有时头朝下，以示羞辱。",science:"仙后座是拱极星座，全年都能看到。它的五颗亮星组成W或M形状，非常容易辨认。仙后座位于银河中，里面有很多美丽的星团和星云。",tips:"在北极星的对面，寻找五颗亮星组成的W或M形状，那就是仙后座！"},scorpius:{story:"这就是那只被阿波罗派去刺杀猎人奥利安的大蝎子。它从地缝中钻出来，用毒刺刺中了奥利安的脚踝，导致他中毒身亡。宙斯把这只蝎子也升上了天界，成为天蝎座。为了让它们不再争斗，宙斯让它们永远位于天空的两端，天蝎座升起时，猎户座就会落下。",science:"天蝎座是夏季夜空中最壮观的星座之一。心宿二是一颗红超巨星，它发出红色的光芒，就像蝎子跳动的心脏。天蝎座位于银河最明亮的区域，周围有很多美丽的星团。",tips:"夏天的夜晚面向南方，寻找那颗红色的心宿二，那就是蝎子的心脏！"},lyra:{story:"俄耳甫斯是古希腊最伟大的音乐家，他的琴声能让飞鸟走兽甚至顽石都感动流泪。他的妻子不幸被毒蛇咬死，他带着竖琴深入冥界，用音乐打动了冥王。冥王允许他带妻子回去，但要求他走出冥界前不能回头。可惜在接近出口时，他忍不住回头看了一眼，妻子就永远消失了。后来宙斯把他的竖琴升上天界，成为了天琴座。",science:"天琴座虽然小，但非常重要。织女星是它最亮的星，也是夏季大三角的顶点之一。织女星是除了太阳外，第一颗被人类拍摄下来的恒星。",tips:"夏天寻找最亮的织女星，然后在它下方找四颗暗星组成的小平行四边形，那就是竖琴的形状！"},cygnus:{story:"宙斯为了接近美丽的斯巴达王后勒达，化身成为一只雪白优雅的天鹅。勒达被这只美丽的天鹅吸引，与它亲近。后来勒达生下了两枚鹅蛋，其中一枚孵出了引发特洛伊战争的绝世美女海伦。为了纪念这段故事，宙斯把他化身的天鹅升上天界，成为了天鹅座。",science:'天鹅座又被称为"北十字"，因为它的五颗亮星组成一个优美的十字形。天津四是它最亮的星，也是夏季大三角的顶点之一。天鹅座位于银河中，就像一只在银河中展翅飞翔的天鹅。',tips:"秋天在银河中寻找一个十字形的星群，那就是展翅飞翔的天鹅！"}},encouragement:{parent:["太棒了！你引导得非常好，孩子学得很开心！","继续保持这种耐心，孩子会越来越热爱星空的！","你是一位很棒的星空引导者！","孩子的每一点进步都离不开你的引导！"],child:["哇！你真棒！居然找到了这个星座！","太厉害了！你是小小观星家！","继续加油，还有更多美丽的星座等着你去发现哦！","你做得非常好！让我们继续探索吧！","真聪明！你已经掌握了寻找星座的技巧！"]}},va=t=>Hl.find(e=>e.id===t),Qy=t=>Vl.find(e=>e.id===t),ut={maxStamina:5,recoveryIntervalMs:30*60*1e3,recoveryAmount:1,initialStamina:5,stageCost:1},Ad={1:{allowedMistakes:3,label:"宽容"},2:{allowedMistakes:2,label:"标准"},3:{allowedMistakes:1,label:"严苛"}};function Jy(){return[...rt].sort(()=>Math.random()-.5).map((e,n)=>{const i=n+1,r=Ad[e.difficulty];return{stage:i,constellationId:e.id,constellationName:e.name,difficulty:e.difficulty,allowedMistakes:r.allowedMistakes,staminaCost:ut.stageCost,bonusThreshold:e.difficulty===3?0:e.difficulty===2?1:2,reward:eS(i,e.difficulty)}})}function eS(t,e){const n=t*10,i=e===3?2:e===2?1.5:1;return{stardust:Math.round(n*i),bonusStardust:Math.round(n*.5),xp:Math.round(n*.3*i)}}const c0=[{id:"expedition_bronze",name:"远征铜星",icon:"🥉",stagesCleared:2,description:"成功通过2关",bonus:{stardust:50}},{id:"expedition_silver",name:"远征银星",icon:"🥈",stagesCleared:4,description:"成功通过4关",bonus:{stardust:150}},{id:"expedition_gold",name:"远征金星",icon:"🥇",stagesCleared:6,description:"成功通过全部6关",bonus:{stardust:300}}],hp={stardustPerPerfect:20,xpPerPerfect:10};function tS(t,e,n){let i=0,r=0,s=0;t.forEach(u=>{i+=u.reward.stardust,r+=u.reward.xp,u.mistakes<=u.bonusThreshold&&(s+=u.reward.bonusStardust)});const a=e*hp.stardustPerPerfect;i+=a,i+=s,r+=e*hp.xpPerPerfect;const o=[];c0.forEach(u=>{t.length>=u.stagesCleared&&(o.push(u),i+=u.bonus.stardust||0)});const c=e===n&&n>0;return{stardust:i,bonusStardust:s,xp:r,perfectBonus:a,tierRewards:o,allPerfect:c}}function nS(t,e){if(e>=ut.maxStamina)return 0;const i=Date.now()-t,r=Math.floor(i/ut.recoveryIntervalMs)*ut.recoveryAmount;return Math.min(r,ut.maxStamina-e)}let Nd=!0;const iS={...o0(()=>localStorage),setItem:(t,e)=>{if(Nd)return localStorage.setItem(t,e)},getItem:t=>{var n,i;const e=localStorage.getItem(t);if(e)try{const r=JSON.parse(e);((i=(n=r.state)==null?void 0:n.settings)==null?void 0:i.autoSave)!==void 0&&(Nd=r.state.settings.autoSave)}catch{}return e}},wt=Wy(Ky((t,e)=>({settings:{...up},updateSettings:n=>t(i=>{const r={settings:{...i.settings,...n}};return n.autoSave!==void 0&&(Nd=n.autoSave),r}),resetSettings:()=>t({settings:{...up}}),manualSave:()=>{const n=e(),i={state:{settings:n.settings,discoveredConstellations:n.discoveredConstellations,discoveredStars:n.discoveredStars,observationLogs:n.observationLogs,unlockedAchievements:n.unlockedAchievements,totalMistakes:n.totalMistakes,seasonProgress:n.seasonProgress,seasonRewardsUnlocked:n.seasonRewardsUnlocked,seasonRewardsClaimed:n.seasonRewardsClaimed,perfectObservations:n.perfectObservations,totalObservations:n.totalObservations,seasonHistory:n.seasonHistory,favoriteConstellations:n.favoriteConstellations,familyMode:n.familyMode,nightExpedition:n.nightExpedition},version:0};localStorage.setItem(dp.PROGRESS,JSON.stringify(i))},favoriteConstellations:[],toggleFavorite:n=>t(i=>({favoriteConstellations:i.favoriteConstellations.includes(n)?i.favoriteConstellations.filter(r=>r!==n):[...i.favoriteConstellations,n]})),isFavorite:n=>e().favoriteConstellations.includes(n),familyMode:{enabled:!1,currentRole:null,familyMembers:{parent:{name:"家长",avatar:"👨‍👩‍👧",xp:0,level:1},child:{name:"孩子",avatar:"🧒",xp:0,level:1}},activeTaskId:null,currentStepIndex:0,turnRole:null,collaborativeCount:0,turnCompleteCount:0,guidedCompleteCount:0,perfectStreak:0,mythologyToldCount:0,childIndependentCount:0,parentGuidedCount:0,familyDiscoveredConstellations:[],totalMinutes:0,sessionStartTime:null,lastActiveDate:null,streakDays:0,completedTasks:[],unlockedFamilyAchievements:[],quizScores:[],familyLog:[]},setFamilyMode:n=>t(i=>({familyMode:{...i.familyMode,enabled:n,sessionStartTime:n?Date.now():null}})),setFamilyRole:n=>t(i=>({familyMode:{...i.familyMode,currentRole:n}})),updateFamilyMember:(n,i)=>t(r=>({familyMode:{...r.familyMode,familyMembers:{...r.familyMode.familyMembers,[n]:{...r.familyMode.familyMembers[n],...i}}}})),addFamilyXP:(n,i)=>t(r=>{const s=r.familyMode.familyMembers[n],a=s.xp+i,o=Math.floor(a/100)+1;return{familyMode:{...r.familyMode,familyMembers:{...r.familyMode.familyMembers,[n]:{...s,xp:a,level:o}}}}}),startFamilyTask:n=>{var s;const i=va(n);if(!i)return!1;const r=(s=i.steps)==null?void 0:s[0];return t(a=>({familyMode:{...a.familyMode,activeTaskId:n,currentStepIndex:0,turnRole:(r==null?void 0:r.role)||null}})),!0},nextTaskStep:()=>{const n=e(),i=va(n.familyMode.activeTaskId);if(!i||!i.steps)return null;const r=n.familyMode.currentStepIndex+1;if(r>=i.steps.length)return e().completeFamilyTask(),null;const s=i.steps[r];return t(a=>({familyMode:{...a.familyMode,currentStepIndex:r,turnRole:(s==null?void 0:s.role)||null}})),s},completeFamilyTask:()=>{const i=e().familyMode.activeTaskId,r=va(i);return r?(t(s=>{var o;const a={familyMode:{...s.familyMode,activeTaskId:null,currentStepIndex:0,turnRole:null,completedTasks:[...s.familyMode.completedTasks,{taskId:i,completedAt:Date.now(),perfect:s.familyMode.perfectStreak>0}]}};if(r.type==="collaborative"?a.familyMode.collaborativeCount=s.familyMode.collaborativeCount+1:r.type==="turn_based"?a.familyMode.turnCompleteCount=s.familyMode.turnCompleteCount+1:r.type==="guided"&&(a.familyMode.guidedCompleteCount=s.familyMode.guidedCompleteCount+1,a.familyMode.parentGuidedCount=s.familyMode.parentGuidedCount+1),(o=r.reward)!=null&&o.xp){const c=a.familyMode.familyMembers.parent,u=a.familyMode.familyMembers.child,f=c.xp+Math.floor(r.reward.xp*.4),p=u.xp+Math.floor(r.reward.xp*.6);a.familyMode.familyMembers={parent:{...c,xp:f,level:Math.floor(f/100)+1},child:{...u,xp:p,level:Math.floor(p/100)+1}}}return a}),e().checkFamilyAchievements(),r):null},recordMythologyTold:()=>t(n=>({familyMode:{...n.familyMode,mythologyToldCount:n.familyMode.mythologyToldCount+1}})),recordChildIndependent:()=>t(n=>({familyMode:{...n.familyMode,childIndependentCount:n.familyMode.childIndependentCount+1}})),recordParentGuided:()=>t(n=>({familyMode:{...n.familyMode,parentGuidedCount:n.familyMode.parentGuidedCount+1}})),recordQuizScore:(n,i)=>t(r=>({familyMode:{...r.familyMode,quizScores:[...r.familyMode.quizScores,{score:n,total:i,percentage:Math.round(n/i*100),date:Date.now()}]}})),updateFamilyPerfectStreak:n=>t(i=>({familyMode:{...i.familyMode,perfectStreak:n?i.familyMode.perfectStreak+1:0}})),addFamilyLog:n=>t(i=>({familyMode:{...i.familyMode,familyLog:[n,...i.familyMode.familyLog].slice(0,200)}})),checkFamilyStreak:()=>{const n=new Date().toDateString(),i=e(),r=i.familyMode.lastActiveDate;if(r===n)return;const s=new Date;s.setDate(s.getDate()-1);let a=1;r===s.toDateString()&&(a=i.familyMode.streakDays+1),t(o=>({familyMode:{...o.familyMode,lastActiveDate:n,streakDays:a}})),e().checkFamilyAchievements()},endFamilySession:()=>{const n=e();if(n.familyMode.sessionStartTime){const i=Math.round((Date.now()-n.familyMode.sessionStartTime)/6e4);t(r=>({familyMode:{...r.familyMode,totalMinutes:r.familyMode.totalMinutes+i,sessionStartTime:null}})),e().checkFamilyAchievements(!0)}},checkFamilyAchievements:(n=!1)=>{const i=e();if(!n&&!i.familyMode.enabled)return[];const r=[],s=i.familyMode;return Vl.forEach(a=>{if(s.unlockedFamilyAchievements.includes(a.id))return;const{type:o,value:c}=a.condition;let u=!1;switch(o){case"collaborative_complete":u=s.collaborativeCount>=c;break;case"turn_complete":u=s.turnCompleteCount>=c;break;case"quiz_score":u=(s.quizScores.length>0?Math.max(...s.quizScores.map(p=>p.percentage)):0)>=c;break;case"guided_complete":u=s.guidedCompleteCount>=c;break;case"perfect_streak":u=s.perfectStreak>=c;break;case"season_discovery":{const p=Ff(),h=Bl(p);u=h.filter(_=>s.familyDiscoveredConstellations.includes(_)).length>=h.length*c;break}case"mythology_told":u=s.mythologyToldCount>=c;break;case"streak_days":u=s.streakDays>=c;break;case"total_minutes":u=s.totalMinutes>=c;break;case"child_independent":u=s.childIndependentCount>=c;break;case"parent_guided":u=s.parentGuidedCount>=c;break;case"family_discover_all":u=s.familyDiscoveredConstellations.length>=c;break}u&&r.push(a.id)}),r.length>0&&(t(a=>({familyMode:{...a.familyMode,unlockedFamilyAchievements:[...a.familyMode.unlockedFamilyAchievements,...r]}})),r.forEach(a=>{const o=Qy(a);o&&e().addFamilyLog({type:"family_achievement",achievementId:a,achievementName:o.name,timestamp:Date.now()})})),r},recordFamilyDiscovery:(n,i)=>{t(r=>{const a=r.familyMode.familyDiscoveredConstellations.includes(n)?r.familyMode.familyDiscoveredConstellations:[...r.familyMode.familyDiscoveredConstellations,n];return{familyMode:{...r.familyMode,familyDiscoveredConstellations:a,perfectStreak:i?r.familyMode.perfectStreak+1:0}}}),e().checkFamilyAchievements()},getFamilyProgress:()=>{const i=e().familyMode;return{totalAchievements:Vl.length,unlockedAchievements:i.unlockedFamilyAchievements.length,totalTasks:Hl.length,completedTasks:i.completedTasks.length,parentLevel:i.familyMembers.parent.level,childLevel:i.familyMembers.child.level,parentXP:i.familyMembers.parent.xp,childXP:i.familyMembers.child.xp,totalMinutes:i.totalMinutes,streakDays:i.streakDays,discoveredConstellations:i.familyDiscoveredConstellations.length,collaborativeCount:i.collaborativeCount,turnCompleteCount:i.turnCompleteCount,guidedCompleteCount:i.guidedCompleteCount}},getFamilyGrowthData:()=>{const i=e().familyMode,r=[],s=new Date;for(let a=6;a>=0;a--){const o=new Date(s);o.setDate(o.getDate()-a);const c=o.toDateString(),u=i.familyLog.filter(f=>new Date(f.timestamp).toDateString()===c);r.push({date:o.toLocaleDateString("zh-CN",{weekday:"short"}),sessions:u.length,discoveries:u.filter(f=>f.type==="discovery").length})}return{weeklyData:r,totalSessions:Math.floor(i.totalMinutes/30),avgSessionLength:i.totalMinutes>0?Math.round(i.totalMinutes/Math.max(1,Math.floor(i.totalMinutes/30))):0}},nightExpedition:{stamina:ut.initialStamina,lastStaminaUpdate:Date.now(),currentRun:null,history:[],totalCompleted:0,highestStagesCleared:0,totalPerfectStages:0,totalStardustEarned:0},syncExpeditionStamina:()=>{const i=e().nightExpedition;if(i.stamina>=ut.maxStamina)return;const r=nS(i.lastStaminaUpdate,i.stamina);if(r>0){const s=r/ut.recoveryAmount,a=i.lastStaminaUpdate+s*ut.recoveryIntervalMs;t(o=>({nightExpedition:{...o.nightExpedition,stamina:Math.min(o.nightExpedition.stamina+r,ut.maxStamina),lastStaminaUpdate:a}}))}},startExpedition:()=>{if(e().syncExpeditionStamina(),e().nightExpedition.stamina<ut.stageCost)return!1;const i=Jy(),r=i[0];return t(s=>({nightExpedition:{...s.nightExpedition,stamina:s.nightExpedition.stamina-ut.stageCost,lastStaminaUpdate:Date.now(),currentRun:{route:i,stageIndex:0,mistakesInStage:0,clearedStages:[],perfectCount:0,startTime:Date.now(),active:!0}},currentTargetConstellation:r.constellationId,connectionPath:[],mistakes:0,perfectRun:!0})),e().addLog({type:"expedition_start",timestamp:Date.now(),totalStages:i.length}),!0},advanceExpeditionStage:()=>{const r=e().nightExpedition.currentRun;if(!r||!r.active)return null;const s=r.route[r.stageIndex],a=r.mistakesInStage===0,o={...s,mistakes:r.mistakesInStage,perfect:a,completedAt:Date.now()},c=[...r.clearedStages,o],u=r.perfectCount+(a?1:0),f=r.stageIndex+1;if(f>=r.route.length)return e().completeExpedition(c,u);const p=r.route[f];return e().syncExpeditionStamina(),e().nightExpedition.stamina<ut.stageCost?e().completeExpedition(c,u,!0):(t(g=>({nightExpedition:{...g.nightExpedition,stamina:g.nightExpedition.stamina-ut.stageCost,lastStaminaUpdate:Date.now(),currentRun:{...g.nightExpedition.currentRun,stageIndex:f,mistakesInStage:0,clearedStages:c,perfectCount:u}},currentTargetConstellation:p.constellationId,connectionPath:[],mistakes:0,perfectRun:!0})),{nextStage:p,stageIndex:f})},failExpeditionStage:()=>{const r=e().nightExpedition.currentRun;return!r||!r.active?null:e().completeExpedition(r.clearedStages,r.perfectCount)},completeExpedition:(n,i,r=!1)=>{const o=e().nightExpedition.currentRun;if(!o)return null;const c=o.route.length,u=tS(n,i,c),f={clearedStages:n,perfectCount:i,totalStages:c,stagesCleared:n.length,rewards:u,staminaOut:r,startTime:o.startTime,endTime:Date.now(),duration:Date.now()-o.startTime};return t(p=>({nightExpedition:{...p.nightExpedition,currentRun:null,history:[f,...p.nightExpedition.history].slice(0,50),totalCompleted:p.nightExpedition.totalCompleted+1,highestStagesCleared:Math.max(p.nightExpedition.highestStagesCleared,n.length),totalPerfectStages:p.nightExpedition.totalPerfectStages+i,totalStardustEarned:p.nightExpedition.totalStardustEarned+u.stardust},currentTargetConstellation:null,connectionPath:[],mistakes:0})),e().addLog({type:"expedition_complete",timestamp:Date.now(),stagesCleared:n.length,totalStages:c,perfectCount:i,stardustEarned:u.stardust}),e().checkAchievements(),f},abandonExpedition:()=>{const r=e().nightExpedition.currentRun;!r||!r.active||(r.clearedStages.length>0?e().completeExpedition(r.clearedStages,r.perfectCount):t(s=>({nightExpedition:{...s.nightExpedition,currentRun:null},currentTargetConstellation:null,connectionPath:[],mistakes:0})))},recordExpeditionMistake:()=>{const r=e().nightExpedition.currentRun;if(!r||!r.active)return!1;const s=r.route[r.stageIndex],a=r.mistakesInStage+1;return a>s.allowedMistakes?(e().failExpeditionStage(),"failed"):(t(o=>({nightExpedition:{...o.nightExpedition,currentRun:{...o.nightExpedition.currentRun,mistakesInStage:a}}})),"continue")},getExpeditionProgress:()=>{const i=e().nightExpedition;return{totalCompleted:i.totalCompleted,highestStagesCleared:i.highestStagesCleared,totalPerfectStages:i.totalPerfectStages,totalStardustEarned:i.totalStardustEarned,totalRuns:i.history.length,avgStagesCleared:i.history.length>0?Math.round(i.history.reduce((r,s)=>r+s.stagesCleared,0)/i.history.length*10)/10:0}},discoveredConstellations:[],discoveredStars:[],connectionPath:[],currentTargetConstellation:null,mistakes:0,totalMistakes:0,perfectRun:!0,setTargetConstellation:n=>{t({currentTargetConstellation:n,connectionPath:[],mistakes:0,perfectRun:!0})},connectStar:n=>{var c;const i=e(),r=Zi(i.currentTargetConstellation);if(!r||!r.stars.map(u=>u.id).includes(n)||i.connectionPath.includes(n))return!1;const a=[...i.connectionPath,n],o=r.connections;if(a.length>=2){const u=a.slice(-2);if(!o.some(([p,h])=>p===u[0]&&h===u[1]||p===u[1]&&h===u[0])){const h=(c=i.nightExpedition.currentRun)==null?void 0:c.active;return t({mistakes:i.mistakes+1,totalMistakes:i.totalMistakes+1,perfectRun:!1}),h&&e().recordExpeditionMistake()==="failed"||e().checkAchievements(),!1}}return t({connectionPath:a,discoveredStars:i.discoveredStars.includes(n)?i.discoveredStars:[...i.discoveredStars,n]}),e().checkConstellationComplete(),e().checkAchievements(),!0},clearConnectionPath:()=>t({connectionPath:[]}),checkConstellationComplete:()=>{var a;const n=e(),i=Zi(n.currentTargetConstellation);if(!i)return!1;if([...new Set(n.connectionPath)].length===i.stars.length){const o=i.id,c=n.discoveredConstellations.includes(o),u=n.perfectRun;if(t(f=>({totalObservations:{...f.totalObservations,[o]:(f.totalObservations[o]||0)+1},perfectObservations:u?{...f.perfectObservations,[o]:!0}:f.perfectObservations})),c?e().addLog({type:"reobservation",constellationId:o,perfect:u,timestamp:Date.now()}):(t(f=>({discoveredConstellations:[...f.discoveredConstellations,o]})),e().addLog({type:"discovery",constellationId:o,perfect:u,timestamp:Date.now()})),n.familyMode.enabled){e().recordFamilyDiscovery(o,u);const f=n.familyMode.turnRole||n.familyMode.currentRole,p=n.familyMode.activeTaskId;if(f==="child"&&!p&&e().recordChildIndependent(),p){const h=va(p);(h==null?void 0:h.type)==="guided"&&f==="child"&&e().recordParentGuided()}e().addFamilyLog({type:c?"reobservation":"discovery",constellationId:o,perfect:u,role:f,timestamp:Date.now()}),e().checkFamilyAchievements()}return e().checkSeasonProgress(),(a=n.nightExpedition.currentRun)!=null&&a.active&&e().advanceExpeditionStage(),!0}return!1},observationLogs:[],addLog:n=>t(i=>({observationLogs:[n,...i.observationLogs].slice(0,100)})),clearLogs:()=>t({observationLogs:[]}),unlockedAchievements:[],seasonProgress:{spring:{beginner:!1,intermediate:!1,master:!1},summer:{beginner:!1,intermediate:!1,master:!1},autumn:{beginner:!1,intermediate:!1,master:!1},winter:{beginner:!1,intermediate:!1,master:!1}},seasonRewardsUnlocked:[],seasonRewardsClaimed:[],perfectObservations:{},totalObservations:{},seasonHistory:[],getSeasonStats:()=>{const n=e(),i={};return Object.keys(Gt).forEach(r=>{const s=Bl(r),a=s.filter(h=>n.discoveredConstellations.includes(h)).length,o=s.filter(h=>n.perfectObservations[h]).length,c=s.reduce((h,g)=>h+Math.max(0,(n.totalObservations[g]||0)-1),0),u=Eo(r,"beginner",n.discoveredConstellations,n.perfectObservations,n.totalObservations),f=Eo(r,"intermediate",n.discoveredConstellations,n.perfectObservations,n.totalObservations),p=Eo(r,"master",n.discoveredConstellations,n.perfectObservations,n.totalObservations);i[r]={constellations:s.length,discovered:a,perfectCount:o,reObservationCount:c,beginner:u,intermediate:f,master:p,overallPercentage:Math.round((u.percentage+f.percentage+p.percentage)/3)}}),i},checkSeasonProgress:()=>{const n=e(),i={...n.seasonProgress},r=[],s=[];return Object.keys(Gt).forEach(a=>{Object.keys(Kn).forEach(o=>{if(!i[a][o]&&Eo(a,o,n.discoveredConstellations,n.perfectObservations,n.totalObservations).completed){i[a]={...i[a],[o]:!0},r.push({seasonId:a,phaseId:o});const u=pl[a][o];u&&!n.seasonRewardsUnlocked.includes(u.id)&&(s.push(u.id),n.addLog({type:"season_reward",seasonId:a,phaseId:o,rewardId:u.id,rewardName:u.name,timestamp:Date.now()}))}})}),r.length>0&&t({seasonProgress:i,seasonRewardsUnlocked:[...n.seasonRewardsUnlocked,...s],seasonHistory:[...r.map(a=>({...a,timestamp:Date.now()})),...n.seasonHistory].slice(0,50)}),e().checkAchievements(),r.length>0?r:[]},claimSeasonReward:n=>{const i=e();return i.seasonRewardsUnlocked.includes(n)&&!i.seasonRewardsClaimed.includes(n)?(t({seasonRewardsClaimed:[...i.seasonRewardsClaimed,n]}),!0):!1},checkAchievements:()=>{const n=e(),i=[];return[...jl,...bs].forEach(s=>{var u;if(n.unlockedAchievements.includes(s.id))return;const{type:a,value:o}=s.condition;let c=!1;switch(a){case"connect_count":c=n.connectionPath.length>=o;break;case"discover_count":c=n.discoveredConstellations.length>=o;break;case"difficulty_clear":{const f=o;c=rt.filter(h=>h.difficulty===f).every(h=>n.discoveredConstellations.includes(h.id));break}case"log_count":c=n.observationLogs.length>=o;break;case"perfect_constellation":{const f=n.observationLogs[0];c=f&&f.constellationId===o&&f.perfect===!0;break}case"total_mistakes":c=n.totalMistakes>=o;break;case"season_master":c=((u=n.seasonProgress[o])==null?void 0:u.master)===!0;break;case"four_seasons":c=Object.keys(Gt).every(f=>{var p;return((p=n.seasonProgress[f])==null?void 0:p.master)===!0});break;case"expedition_complete":c=n.nightExpedition.totalCompleted>=o;break;case"expedition_stages":c=n.nightExpedition.highestStagesCleared>=o;break;case"expedition_perfect":c=n.nightExpedition.totalPerfectStages>=o;break;case"expedition_stardust":c=n.nightExpedition.totalStardustEarned>=o;break}c&&i.push(s.id)}),i.length>0?(t(s=>({unlockedAchievements:[...s.unlockedAchievements,...i]})),i.forEach(s=>{e().addLog({type:"achievement",achievementId:s,timestamp:Date.now()})}),i):[]},showAchievementToast:null,setShowAchievementToast:n=>t({showAchievementToast:n}),activePanel:null,setActivePanel:n=>t(i=>{const r={activePanel:n};return n!=="atlas"&&i.activePanel==="atlas"&&(r.activeAtlasPanel=null,r.selectedConstellationDetail=null),r}),openAtlasList:()=>t({activePanel:"atlas",activeAtlasPanel:null,selectedConstellationDetail:null}),openAtlasDetail:n=>t({activePanel:"atlas",activeAtlasPanel:"detail",selectedConstellationDetail:n}),resetAtlasState:()=>t({activeAtlasPanel:null,selectedConstellationDetail:null}),activeAtlasPanel:null,selectedConstellationDetail:null,setActiveAtlasPanel:n=>t({activeAtlasPanel:n}),setSelectedConstellationDetail:n=>t({selectedConstellationDetail:n}),isConstellationComplete:n=>e().discoveredConstellations.includes(n),getProgress:()=>{const n=e(),i=jl.length+bs.length;return{constellations:n.discoveredConstellations.length,totalConstellations:rt.length,achievements:n.unlockedAchievements.length,totalAchievements:i,logs:n.observationLogs.length,seasonRewardsClaimed:n.seasonRewardsClaimed.length,totalSeasonRewards:Object.keys(Gt).length*Object.keys(Kn).length}},resetProgress:()=>t({discoveredConstellations:[],discoveredStars:[],connectionPath:[],currentTargetConstellation:null,mistakes:0,totalMistakes:0,perfectRun:!0,observationLogs:[],unlockedAchievements:[],seasonProgress:{spring:{beginner:!1,intermediate:!1,master:!1},summer:{beginner:!1,intermediate:!1,master:!1},autumn:{beginner:!1,intermediate:!1,master:!1},winter:{beginner:!1,intermediate:!1,master:!1}},seasonRewardsUnlocked:[],seasonRewardsClaimed:[],perfectObservations:{},totalObservations:{},seasonHistory:[],favoriteConstellations:[],familyMode:{enabled:!1,currentRole:null,familyMembers:{parent:{name:"家长",avatar:"👨‍👩‍👧",xp:0,level:1},child:{name:"孩子",avatar:"🧒",xp:0,level:1}},activeTaskId:null,currentStepIndex:0,turnRole:null,collaborativeCount:0,turnCompleteCount:0,guidedCompleteCount:0,perfectStreak:0,mythologyToldCount:0,childIndependentCount:0,parentGuidedCount:0,familyDiscoveredConstellations:[],totalMinutes:0,sessionStartTime:null,lastActiveDate:null,streakDays:0,completedTasks:[],unlockedFamilyAchievements:[],quizScores:[],familyLog:[]},nightExpedition:{stamina:ut.initialStamina,lastStaminaUpdate:Date.now(),currentRun:null,history:[],totalCompleted:0,highestStagesCleared:0,totalPerfectStages:0,totalStardustEarned:0}})}),{name:dp.PROGRESS,storage:iS,partialize:t=>({settings:t.settings,discoveredConstellations:t.discoveredConstellations,discoveredStars:t.discoveredStars,observationLogs:t.observationLogs,unlockedAchievements:t.unlockedAchievements,totalMistakes:t.totalMistakes,seasonProgress:t.seasonProgress,seasonRewardsUnlocked:t.seasonRewardsUnlocked,seasonRewardsClaimed:t.seasonRewardsClaimed,perfectObservations:t.perfectObservations,totalObservations:t.totalObservations,seasonHistory:t.seasonHistory,favoriteConstellations:t.favoriteConstellations,familyMode:t.familyMode,nightExpedition:t.nightExpedition})}));/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kf="165",rS=0,pp=1,sS=2,u0=1,aS=2,li=3,Qi=0,ln=1,di=2,Xi=0,Ts=1,xs=2,mp=3,gp=4,oS=5,xr=100,lS=101,cS=102,uS=103,dS=104,fS=200,hS=201,pS=202,mS=203,Rd=204,Pd=205,gS=206,xS=207,vS=208,_S=209,yS=210,SS=211,MS=212,wS=213,ES=214,bS=0,TS=1,CS=2,Gl=3,AS=4,NS=5,RS=6,PS=7,d0=0,LS=1,DS=2,$i=0,IS=1,US=2,FS=3,kS=4,OS=5,zS=6,jS=7,f0=300,zs=301,js=302,Ld=303,Dd=304,xc=306,Id=1e3,Mr=1001,Ud=1002,Tn=1003,BS=1004,bo=1005,On=1006,eu=1007,wr=1008,Ji=1009,HS=1010,VS=1011,Wl=1012,h0=1013,Bs=1014,ki=1015,vc=1016,p0=1017,m0=1018,Hs=1020,GS=35902,WS=1021,XS=1022,Qn=1023,$S=1024,YS=1025,Cs=1026,Vs=1027,qS=1028,g0=1029,KS=1030,x0=1031,v0=1033,tu=33776,nu=33777,iu=33778,ru=33779,xp=35840,vp=35841,_p=35842,yp=35843,Sp=36196,Mp=37492,wp=37496,Ep=37808,bp=37809,Tp=37810,Cp=37811,Ap=37812,Np=37813,Rp=37814,Pp=37815,Lp=37816,Dp=37817,Ip=37818,Up=37819,Fp=37820,kp=37821,su=36492,Op=36494,zp=36495,ZS=36283,jp=36284,Bp=36285,Hp=36286,QS=3200,JS=3201,eM=0,tM=1,Ii="",Fn="srgb",rr="srgb-linear",Of="display-p3",_c="display-p3-linear",Xl="linear",lt="srgb",$l="rec709",Yl="p3",Or=7680,Vp=519,nM=512,iM=513,rM=514,_0=515,sM=516,aM=517,oM=518,lM=519,Fd=35044,Gp="300 es",pi=2e3,ql=2001;class Ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],au=Math.PI/180,kd=180/Math.PI;function Yi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function nn(t,e,n){return Math.max(e,Math.min(n,t))}function cM(t,e){return(t%e+e)%e}function ou(t,e,n){return(1-n)*t+n*e}function Zn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function it(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,n,i,r,s,a,o,c,u){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u)}set(e,n,i,r,s,a,o,c,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=c,f[6]=i,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],u=i[1],f=i[4],p=i[7],h=i[2],g=i[5],_=i[8],y=r[0],m=r[3],d=r[6],x=r[1],v=r[4],E=r[7],R=r[2],C=r[5],S=r[8];return s[0]=a*y+o*x+c*R,s[3]=a*m+o*v+c*C,s[6]=a*d+o*E+c*S,s[1]=u*y+f*x+p*R,s[4]=u*m+f*v+p*C,s[7]=u*d+f*E+p*S,s[2]=h*y+g*x+_*R,s[5]=h*m+g*v+_*C,s[8]=h*d+g*E+_*S,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8];return n*a*f-n*o*u-i*s*f+i*o*c+r*s*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8],p=f*a-o*u,h=o*c-f*s,g=u*s-a*c,_=n*p+i*h+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=p*y,e[1]=(r*u-f*i)*y,e[2]=(o*i-r*a)*y,e[3]=h*y,e[4]=(f*n-r*c)*y,e[5]=(r*s-o*n)*y,e[6]=g*y,e[7]=(i*c-u*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(lu.makeScale(e,n)),this}rotate(e){return this.premultiply(lu.makeRotation(-e)),this}translate(e,n){return this.premultiply(lu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lu=new Ue;function y0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Kl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function uM(){const t=Kl("canvas");return t.style.display="block",t}const Wp={};function zf(t){t in Wp||(Wp[t]=!0,console.warn(t))}function dM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Xp=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$p=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),To={[rr]:{transfer:Xl,primaries:$l,toReference:t=>t,fromReference:t=>t},[Fn]:{transfer:lt,primaries:$l,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[_c]:{transfer:Xl,primaries:Yl,toReference:t=>t.applyMatrix3($p),fromReference:t=>t.applyMatrix3(Xp)},[Of]:{transfer:lt,primaries:Yl,toReference:t=>t.convertSRGBToLinear().applyMatrix3($p),fromReference:t=>t.applyMatrix3(Xp).convertLinearToSRGB()}},fM=new Set([rr,_c]),Je={enabled:!0,_workingColorSpace:rr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!fM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=To[e].toReference,r=To[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return To[t].primaries},getTransfer:function(t){return t===Ii?Xl:To[t].transfer}};function As(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function cu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let zr;class hM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zr===void 0&&(zr=Kl("canvas")),zr.width=e.width,zr.height=e.height;const i=zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=zr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Kl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=As(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(As(n[i]/255)*255):n[i]=As(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pM=0;class S0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=Yi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(uu(r[a].image)):s.push(uu(r[a]))}else s=uu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function uu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?hM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mM=0;class Qt extends Ys{constructor(e=Qt.DEFAULT_IMAGE,n=Qt.DEFAULT_MAPPING,i=Mr,r=Mr,s=On,a=wr,o=Qn,c=Ji,u=Qt.DEFAULT_ANISOTROPY,f=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Yi(),this.name="",this.source=new S0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==f0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Id:e.x=e.x-Math.floor(e.x);break;case Mr:e.x=e.x<0?0:1;break;case Ud:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Id:e.y=e.y-Math.floor(e.y);break;case Mr:e.y=e.y<0?0:1;break;case Ud:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=f0;Qt.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],f=c[4],p=c[8],h=c[1],g=c[5],_=c[9],y=c[2],m=c[6],d=c[10];if(Math.abs(f-h)<.01&&Math.abs(p-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(p+y)<.1&&Math.abs(_+m)<.1&&Math.abs(u+g+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,E=(g+1)/2,R=(d+1)/2,C=(f+h)/4,S=(p+y)/4,N=(_+m)/4;return v>E&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=S/i):E>R?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=N/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=S/s,r=N/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-_)*(m-_)+(p-y)*(p-y)+(h-f)*(h-f));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(p-y)/x,this.z=(h-f)/x,this.w=Math.acos((u+g+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gM extends Ys{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new S0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends gM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class M0 extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xM extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ja{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],u=i[r+1],f=i[r+2],p=i[r+3];const h=s[a+0],g=s[a+1],_=s[a+2],y=s[a+3];if(o===0){e[n+0]=c,e[n+1]=u,e[n+2]=f,e[n+3]=p;return}if(o===1){e[n+0]=h,e[n+1]=g,e[n+2]=_,e[n+3]=y;return}if(p!==y||c!==h||u!==g||f!==_){let m=1-o;const d=c*h+u*g+f*_+p*y,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const R=Math.sqrt(v),C=Math.atan2(R,d*x);m=Math.sin(m*C)/R,o=Math.sin(o*C)/R}const E=o*x;if(c=c*m+h*E,u=u*m+g*E,f=f*m+_*E,p=p*m+y*E,m===1-o){const R=1/Math.sqrt(c*c+u*u+f*f+p*p);c*=R,u*=R,f*=R,p*=R}}e[n]=c,e[n+1]=u,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],u=i[r+2],f=i[r+3],p=s[a],h=s[a+1],g=s[a+2],_=s[a+3];return e[n]=o*_+f*p+c*g-u*h,e[n+1]=c*_+f*h+u*p-o*g,e[n+2]=u*_+f*g+o*h-c*p,e[n+3]=f*_-o*p-c*h-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(i/2),f=o(r/2),p=o(s/2),h=c(i/2),g=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=h*f*p+u*g*_,this._y=u*g*p-h*f*_,this._z=u*f*_+h*g*p,this._w=u*f*p-h*g*_;break;case"YXZ":this._x=h*f*p+u*g*_,this._y=u*g*p-h*f*_,this._z=u*f*_-h*g*p,this._w=u*f*p+h*g*_;break;case"ZXY":this._x=h*f*p-u*g*_,this._y=u*g*p+h*f*_,this._z=u*f*_+h*g*p,this._w=u*f*p-h*g*_;break;case"ZYX":this._x=h*f*p-u*g*_,this._y=u*g*p+h*f*_,this._z=u*f*_-h*g*p,this._w=u*f*p+h*g*_;break;case"YZX":this._x=h*f*p+u*g*_,this._y=u*g*p+h*f*_,this._z=u*f*_-h*g*p,this._w=u*f*p-h*g*_;break;case"XZY":this._x=h*f*p-u*g*_,this._y=u*g*p-h*f*_,this._z=u*f*_+h*g*p,this._w=u*f*p+h*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],u=n[2],f=n[6],p=n[10],h=i+o+p;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(f-c)*g,this._y=(s-u)*g,this._z=(a-r)*g}else if(i>o&&i>p){const g=2*Math.sqrt(1+i-o-p);this._w=(f-c)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+u)/g}else if(o>p){const g=2*Math.sqrt(1+o-i-p);this._w=(s-u)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(c+f)/g}else{const g=2*Math.sqrt(1+p-i-o);this._w=(a-r)/g,this._x=(s+u)/g,this._y=(c+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,u=n._z,f=n._w;return this._x=i*f+a*o+r*u-s*c,this._y=r*f+a*c+s*o-i*u,this._z=s*f+a*u+i*c-r*o,this._w=a*f-i*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const u=Math.sqrt(c),f=Math.atan2(u,o),p=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=a*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Yp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Yp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*i),f=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+c*u+a*p-o*f,this.y=i+c*f+o*u-s*p,this.z=r+c*p+s*f-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return du.copy(this).projectOnVector(e),this.sub(du)}reflect(e){return this.sub(du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const du=new H,Yp=new Ja;class eo{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(s,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Co.copy(i.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),Ao.subVectors(this.max,sa),jr.subVectors(e.a,sa),Br.subVectors(e.b,sa),Hr.subVectors(e.c,sa),Ei.subVectors(Br,jr),bi.subVectors(Hr,Br),or.subVectors(jr,Hr);let n=[0,-Ei.z,Ei.y,0,-bi.z,bi.y,0,-or.z,or.y,Ei.z,0,-Ei.x,bi.z,0,-bi.x,or.z,0,-or.x,-Ei.y,Ei.x,0,-bi.y,bi.x,0,-or.y,or.x,0];return!fu(n,jr,Br,Hr,Ao)||(n=[1,0,0,0,1,0,0,0,1],!fu(n,jr,Br,Hr,Ao))?!1:(No.crossVectors(Ei,bi),n=[No.x,No.y,No.z],fu(n,jr,Br,Hr,Ao))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ii=[new H,new H,new H,new H,new H,new H,new H,new H],Pn=new H,Co=new eo,jr=new H,Br=new H,Hr=new H,Ei=new H,bi=new H,or=new H,sa=new H,Ao=new H,No=new H,lr=new H;function fu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){lr.fromArray(t,s);const o=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),c=e.dot(lr),u=n.dot(lr),f=i.dot(lr);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>o)return!1}return!0}const vM=new eo,aa=new H,hu=new H;class to{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):vM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);const n=aa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(aa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(hu)),this.expandByPoint(aa.copy(e.center).sub(hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new H,pu=new H,Ro=new H,Ti=new H,mu=new H,Po=new H,gu=new H;class yc{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,n),ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){pu.copy(e).add(n).multiplyScalar(.5),Ro.copy(n).sub(e).normalize(),Ti.copy(this.origin).sub(pu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ro),o=Ti.dot(this.direction),c=-Ti.dot(Ro),u=Ti.lengthSq(),f=Math.abs(1-a*a);let p,h,g,_;if(f>0)if(p=a*c-o,h=a*o-c,_=s*f,p>=0)if(h>=-_)if(h<=_){const y=1/f;p*=y,h*=y,g=p*(p+a*h+2*o)+h*(a*p+h+2*c)+u}else h=s,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*c)+u;else h=-s,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*c)+u;else h<=-_?(p=Math.max(0,-(-a*s+o)),h=p>0?-s:Math.min(Math.max(-s,-c),s),g=-p*p+h*(h+2*c)+u):h<=_?(p=0,h=Math.min(Math.max(-s,-c),s),g=h*(h+2*c)+u):(p=Math.max(0,-(a*s+o)),h=p>0?s:Math.min(Math.max(-s,-c),s),g=-p*p+h*(h+2*c)+u);else h=a>0?-s:s,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(pu).addScaledVector(Ro,h),g}intersectSphere(e,n){ri.subVectors(e.center,this.origin);const i=ri.dot(this.direction),r=ri.dot(ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const u=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-h.z)*p,c=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,c=(e.min.z-h.z)*p),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,n,i,r,s){mu.subVectors(n,e),Po.subVectors(i,e),gu.crossVectors(mu,Po);let a=this.direction.dot(gu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ti.subVectors(this.origin,e);const c=o*this.direction.dot(Po.crossVectors(Ti,Po));if(c<0)return null;const u=o*this.direction.dot(mu.cross(Ti));if(u<0||c+u>a)return null;const f=-o*Ti.dot(gu);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,n,i,r,s,a,o,c,u,f,p,h,g,_,y,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u,f,p,h,g,_,y,m)}set(e,n,i,r,s,a,o,c,u,f,p,h,g,_,y,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=u,d[6]=f,d[10]=p,d[14]=h,d[3]=g,d[7]=_,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=a*f,g=a*p,_=o*f,y=o*p;n[0]=c*f,n[4]=-c*p,n[8]=u,n[1]=g+_*u,n[5]=h-y*u,n[9]=-o*c,n[2]=y-h*u,n[6]=_+g*u,n[10]=a*c}else if(e.order==="YXZ"){const h=c*f,g=c*p,_=u*f,y=u*p;n[0]=h+y*o,n[4]=_*o-g,n[8]=a*u,n[1]=a*p,n[5]=a*f,n[9]=-o,n[2]=g*o-_,n[6]=y+h*o,n[10]=a*c}else if(e.order==="ZXY"){const h=c*f,g=c*p,_=u*f,y=u*p;n[0]=h-y*o,n[4]=-a*p,n[8]=_+g*o,n[1]=g+_*o,n[5]=a*f,n[9]=y-h*o,n[2]=-a*u,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const h=a*f,g=a*p,_=o*f,y=o*p;n[0]=c*f,n[4]=_*u-g,n[8]=h*u+y,n[1]=c*p,n[5]=y*u+h,n[9]=g*u-_,n[2]=-u,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const h=a*c,g=a*u,_=o*c,y=o*u;n[0]=c*f,n[4]=y-h*p,n[8]=_*p+g,n[1]=p,n[5]=a*f,n[9]=-o*f,n[2]=-u*f,n[6]=g*p+_,n[10]=h-y*p}else if(e.order==="XZY"){const h=a*c,g=a*u,_=o*c,y=o*u;n[0]=c*f,n[4]=-p,n[8]=u*f,n[1]=h*p+y,n[5]=a*f,n[9]=g*p-_,n[2]=_*p-g,n[6]=o*f,n[10]=y*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_M,e,yM)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ci.crossVectors(i,dn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ci.crossVectors(i,dn)),Ci.normalize(),Lo.crossVectors(dn,Ci),r[0]=Ci.x,r[4]=Lo.x,r[8]=dn.x,r[1]=Ci.y,r[5]=Lo.y,r[9]=dn.y,r[2]=Ci.z,r[6]=Lo.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],u=i[12],f=i[1],p=i[5],h=i[9],g=i[13],_=i[2],y=i[6],m=i[10],d=i[14],x=i[3],v=i[7],E=i[11],R=i[15],C=r[0],S=r[4],N=r[8],T=r[12],w=r[1],L=r[5],F=r[9],z=r[13],P=r[2],B=r[6],V=r[10],Y=r[14],D=r[3],$=r[7],J=r[11],le=r[15];return s[0]=a*C+o*w+c*P+u*D,s[4]=a*S+o*L+c*B+u*$,s[8]=a*N+o*F+c*V+u*J,s[12]=a*T+o*z+c*Y+u*le,s[1]=f*C+p*w+h*P+g*D,s[5]=f*S+p*L+h*B+g*$,s[9]=f*N+p*F+h*V+g*J,s[13]=f*T+p*z+h*Y+g*le,s[2]=_*C+y*w+m*P+d*D,s[6]=_*S+y*L+m*B+d*$,s[10]=_*N+y*F+m*V+d*J,s[14]=_*T+y*z+m*Y+d*le,s[3]=x*C+v*w+E*P+R*D,s[7]=x*S+v*L+E*B+R*$,s[11]=x*N+v*F+E*V+R*J,s[15]=x*T+v*z+E*Y+R*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],f=e[2],p=e[6],h=e[10],g=e[14],_=e[3],y=e[7],m=e[11],d=e[15];return _*(+s*c*p-r*u*p-s*o*h+i*u*h+r*o*g-i*c*g)+y*(+n*c*g-n*u*h+s*a*h-r*a*g+r*u*f-s*c*f)+m*(+n*u*p-n*o*g-s*a*p+i*a*g+s*o*f-i*u*f)+d*(-r*o*f-n*c*p+n*o*h+r*a*p-i*a*h+i*c*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8],p=e[9],h=e[10],g=e[11],_=e[12],y=e[13],m=e[14],d=e[15],x=p*m*u-y*h*u+y*c*g-o*m*g-p*c*d+o*h*d,v=_*h*u-f*m*u-_*c*g+a*m*g+f*c*d-a*h*d,E=f*y*u-_*p*u+_*o*g-a*y*g-f*o*d+a*p*d,R=_*p*c-f*y*c-_*o*h+a*y*h+f*o*m-a*p*m,C=n*x+i*v+r*E+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/C;return e[0]=x*S,e[1]=(y*h*s-p*m*s-y*r*g+i*m*g+p*r*d-i*h*d)*S,e[2]=(o*m*s-y*c*s+y*r*u-i*m*u-o*r*d+i*c*d)*S,e[3]=(p*c*s-o*h*s-p*r*u+i*h*u+o*r*g-i*c*g)*S,e[4]=v*S,e[5]=(f*m*s-_*h*s+_*r*g-n*m*g-f*r*d+n*h*d)*S,e[6]=(_*c*s-a*m*s-_*r*u+n*m*u+a*r*d-n*c*d)*S,e[7]=(a*h*s-f*c*s+f*r*u-n*h*u-a*r*g+n*c*g)*S,e[8]=E*S,e[9]=(_*p*s-f*y*s-_*i*g+n*y*g+f*i*d-n*p*d)*S,e[10]=(a*y*s-_*o*s+_*i*u-n*y*u-a*i*d+n*o*d)*S,e[11]=(f*o*s-a*p*s-f*i*u+n*p*u+a*i*g-n*o*g)*S,e[12]=R*S,e[13]=(f*y*r-_*p*r+_*i*h-n*y*h-f*i*m+n*p*m)*S,e[14]=(_*o*r-a*y*r-_*i*c+n*y*c+a*i*m-n*o*m)*S,e[15]=(a*p*r-f*o*r+f*i*c-n*p*c-a*i*h+n*o*h)*S,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,u=s*a,f=s*o;return this.set(u*a+i,u*o-r*c,u*c+r*o,0,u*o+r*c,f*o+i,f*c-r*a,0,u*c-r*o,f*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,u=s+s,f=a+a,p=o+o,h=s*u,g=s*f,_=s*p,y=a*f,m=a*p,d=o*p,x=c*u,v=c*f,E=c*p,R=i.x,C=i.y,S=i.z;return r[0]=(1-(y+d))*R,r[1]=(g+E)*R,r[2]=(_-v)*R,r[3]=0,r[4]=(g-E)*C,r[5]=(1-(h+d))*C,r[6]=(m+x)*C,r[7]=0,r[8]=(_+v)*S,r[9]=(m-x)*S,r[10]=(1-(h+y))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Vr.set(r[0],r[1],r[2]).length();const a=Vr.set(r[4],r[5],r[6]).length(),o=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const u=1/s,f=1/a,p=1/o;return Ln.elements[0]*=u,Ln.elements[1]*=u,Ln.elements[2]*=u,Ln.elements[4]*=f,Ln.elements[5]*=f,Ln.elements[6]*=f,Ln.elements[8]*=p,Ln.elements[9]*=p,Ln.elements[10]*=p,n.setFromRotationMatrix(Ln),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=pi){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),p=(n+e)/(n-e),h=(i+r)/(i-r);let g,_;if(o===pi)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ql)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=pi){const c=this.elements,u=1/(n-e),f=1/(i-r),p=1/(a-s),h=(n+e)*u,g=(i+r)*f;let _,y;if(o===pi)_=(a+s)*p,y=-2*p;else if(o===ql)_=s*p,y=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=y,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Vr=new H,Ln=new pt,_M=new H(0,0,0),yM=new H(1,1,1),Ci=new H,Lo=new H,dn=new H,qp=new pt,Kp=new Ja;class yi{constructor(e=0,n=0,i=0,r=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],f=r[9],p=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-nn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(nn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Kp.setFromEuler(this),this.setFromQuaternion(Kp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class jf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let SM=0;const Zp=new H,Gr=new Ja,si=new pt,Do=new H,oa=new H,MM=new H,wM=new Ja,Qp=new H(1,0,0),Jp=new H(0,1,0),em=new H(0,0,1),tm={type:"added"},EM={type:"removed"},Wr={type:"childadded",child:null},xu={type:"childremoved",child:null};class Wt extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new H,n=new yi,i=new Ja,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ue}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(Qp,e)}rotateY(e){return this.rotateOnAxis(Jp,e)}rotateZ(e){return this.rotateOnAxis(em,e)}translateOnAxis(e,n){return Zp.copy(e).applyQuaternion(this.quaternion),this.position.add(Zp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qp,e)}translateY(e){return this.translateOnAxis(Jp,e)}translateZ(e){return this.translateOnAxis(em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Do.copy(e):Do.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(oa,Do,this.up):si.lookAt(Do,oa,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(si),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tm),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(EM),xu.child=e,this.dispatchEvent(xu),xu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tm),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,MM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,wM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){const p=c[u];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),f=a(e.images),p=a(e.shapes),h=a(e.skeletons),g=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const u in o){const f=o[u];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new H(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new H,ai=new H,vu=new H,oi=new H,Xr=new H,$r=new H,nm=new H,_u=new H,yu=new H,Su=new H;class zn{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Dn.subVectors(e,n),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Dn.subVectors(r,n),ai.subVectors(i,n),vu.subVectors(e,n);const a=Dn.dot(Dn),o=Dn.dot(ai),c=Dn.dot(vu),u=ai.dot(ai),f=ai.dot(vu),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const h=1/p,g=(u*c-o*f)*h,_=(a*f-o*c)*h;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,oi.x),c.addScaledVector(a,oi.y),c.addScaledVector(o,oi.z),c)}static isFrontFacing(e,n,i,r){return Dn.subVectors(i,n),ai.subVectors(e,n),Dn.cross(ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Dn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Xr.subVectors(r,i),$r.subVectors(s,i),_u.subVectors(e,i);const c=Xr.dot(_u),u=$r.dot(_u);if(c<=0&&u<=0)return n.copy(i);yu.subVectors(e,r);const f=Xr.dot(yu),p=$r.dot(yu);if(f>=0&&p<=f)return n.copy(r);const h=c*p-f*u;if(h<=0&&c>=0&&f<=0)return a=c/(c-f),n.copy(i).addScaledVector(Xr,a);Su.subVectors(e,s);const g=Xr.dot(Su),_=$r.dot(Su);if(_>=0&&g<=_)return n.copy(s);const y=g*u-c*_;if(y<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector($r,o);const m=f*_-g*p;if(m<=0&&p-f>=0&&g-_>=0)return nm.subVectors(s,r),o=(p-f)/(p-f+(g-_)),n.copy(r).addScaledVector(nm,o);const d=1/(m+y+h);return a=y*d,o=h*d,n.copy(i).addScaledVector(Xr,a).addScaledVector($r,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const w0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Io={h:0,s:0,l:0};function Mu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class He{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=cM(e,1),n=nn(n,0,1),i=nn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Mu(a,s,e+1/3),this.g=Mu(a,s,e),this.b=Mu(a,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=Fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Fn){const i=w0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=cu(e.r),this.g=cu(e.g),this.b=cu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return Je.fromWorkingColorSpace(Bt.copy(this),e),Math.round(nn(Bt.r*255,0,255))*65536+Math.round(nn(Bt.g*255,0,255))*256+Math.round(nn(Bt.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,s=Bt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,u;const f=(o+a)/2;if(o===a)c=0,u=0;else{const p=a-o;switch(u=f<=.5?p/(a+o):p/(2-a-o),a){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=f,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Fn){Je.fromWorkingColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==Fn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+n,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ai),e.getHSL(Io);const i=ou(Ai.h,Io.h,n),r=ou(Ai.s,Io.s,n),s=ou(Ai.l,Io.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new He;He.NAMES=w0;let bM=0;class Ir extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=Ts,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rd,this.blendDst=Pd,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Gl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rd&&(i.blendSrc=this.blendSrc),this.blendDst!==Pd&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bf extends Ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=d0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new H,Uo=new je;class cn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Fd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return zf("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Uo.fromBufferAttribute(this,n),Uo.applyMatrix3(e),this.setXY(n,Uo.x,Uo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Zn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Zn(n,this.array)),n}setX(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Zn(n,this.array)),n}setY(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Zn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Zn(n,this.array)),n}setW(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fd&&(e.usage=this.usage),e}}class E0 extends cn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class b0 extends cn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Hn extends cn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let TM=0;const Sn=new pt,wu=new Wt,Yr=new H,fn=new eo,la=new eo,Pt=new H;class xn extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(y0(e)?b0:E0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return wu.lookAt(e),wu.updateMatrix(),this.applyMatrix4(wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Hn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];la.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(fn.min,la.min),fn.expandByPoint(Pt),Pt.addVectors(fn.max,la.max),fn.expandByPoint(Pt)):(fn.expandByPoint(la.min),fn.expandByPoint(la.max))}fn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)Pt.fromBufferAttribute(o,u),c&&(Yr.fromBufferAttribute(e,u),Pt.add(Yr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<i.count;N++)o[N]=new H,c[N]=new H;const u=new H,f=new H,p=new H,h=new je,g=new je,_=new je,y=new H,m=new H;function d(N,T,w){u.fromBufferAttribute(i,N),f.fromBufferAttribute(i,T),p.fromBufferAttribute(i,w),h.fromBufferAttribute(s,N),g.fromBufferAttribute(s,T),_.fromBufferAttribute(s,w),f.sub(u),p.sub(u),g.sub(h),_.sub(h);const L=1/(g.x*_.y-_.x*g.y);isFinite(L)&&(y.copy(f).multiplyScalar(_.y).addScaledVector(p,-g.y).multiplyScalar(L),m.copy(p).multiplyScalar(g.x).addScaledVector(f,-_.x).multiplyScalar(L),o[N].add(y),o[T].add(y),o[w].add(y),c[N].add(m),c[T].add(m),c[w].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let N=0,T=x.length;N<T;++N){const w=x[N],L=w.start,F=w.count;for(let z=L,P=L+F;z<P;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const v=new H,E=new H,R=new H,C=new H;function S(N){R.fromBufferAttribute(r,N),C.copy(R);const T=o[N];v.copy(T),v.sub(R.multiplyScalar(R.dot(T))).normalize(),E.crossVectors(C,T);const L=E.dot(c[N])<0?-1:1;a.setXYZW(N,v.x,v.y,v.z,L)}for(let N=0,T=x.length;N<T;++N){const w=x[N],L=w.start,F=w.count;for(let z=L,P=L+F;z<P;z+=3)S(e.getX(z+0)),S(e.getX(z+1)),S(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,a=new H,o=new H,c=new H,u=new H,f=new H,p=new H;if(e)for(let h=0,g=e.count;h<g;h+=3){const _=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),o.add(f),c.add(f),u.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,c){const u=o.array,f=o.itemSize,p=o.normalized,h=new u.constructor(c.length*f);let g=0,_=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?g=c[y]*o.data.stride+o.offset:g=c[y]*f;for(let d=0;d<f;d++)h[_++]=u[g++]}return new cn(h,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let f=0,p=u.length;f<p;f++){const h=u[f],g=e(h,i);c.push(g)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],f=[];for(let p=0,h=u.length;p<h;p++){const g=u[p];f.push(g.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],p=s[u];for(let h=0,g=p.length;h<g;h++)f.push(p[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const im=new pt,cr=new yc,Fo=new to,rm=new H,qr=new H,Kr=new H,Zr=new H,Eu=new H,ko=new H,Oo=new je,zo=new je,jo=new je,sm=new H,am=new H,om=new H,Bo=new H,Ho=new H;class Jn extends Wt{constructor(e=new xn,n=new Bf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ko.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const f=o[c],p=s[c];f!==0&&(Eu.fromBufferAttribute(p,e),a?ko.addScaledVector(Eu,f):ko.addScaledVector(Eu.sub(n),f))}n.add(ko)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(Fo.containsPoint(cr.origin)===!1&&(cr.intersectSphere(Fo,rm)===null||cr.origin.distanceToSquared(rm)>(e.far-e.near)**2))&&(im.copy(s).invert(),cr.copy(e.ray).applyMatrix4(im),!(i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,cr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,h=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const m=h[_],d=a[m.materialIndex],x=Math.max(m.start,g.start),v=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let E=x,R=v;E<R;E+=3){const C=o.getX(E),S=o.getX(E+1),N=o.getX(E+2);r=Vo(this,d,e,i,u,f,p,C,S,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(o.count,g.start+g.count);for(let m=_,d=y;m<d;m+=3){const x=o.getX(m),v=o.getX(m+1),E=o.getX(m+2);r=Vo(this,a,e,i,u,f,p,x,v,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const m=h[_],d=a[m.materialIndex],x=Math.max(m.start,g.start),v=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let E=x,R=v;E<R;E+=3){const C=E,S=E+1,N=E+2;r=Vo(this,d,e,i,u,f,p,C,S,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(c.count,g.start+g.count);for(let m=_,d=y;m<d;m+=3){const x=m,v=m+1,E=m+2;r=Vo(this,a,e,i,u,f,p,x,v,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function CM(t,e,n,i,r,s,a,o){let c;if(e.side===ln?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Qi,o),c===null)return null;Ho.copy(o),Ho.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ho);return u<n.near||u>n.far?null:{distance:u,point:Ho.clone(),object:t}}function Vo(t,e,n,i,r,s,a,o,c,u){t.getVertexPosition(o,qr),t.getVertexPosition(c,Kr),t.getVertexPosition(u,Zr);const f=CM(t,e,n,i,qr,Kr,Zr,Bo);if(f){r&&(Oo.fromBufferAttribute(r,o),zo.fromBufferAttribute(r,c),jo.fromBufferAttribute(r,u),f.uv=zn.getInterpolation(Bo,qr,Kr,Zr,Oo,zo,jo,new je)),s&&(Oo.fromBufferAttribute(s,o),zo.fromBufferAttribute(s,c),jo.fromBufferAttribute(s,u),f.uv1=zn.getInterpolation(Bo,qr,Kr,Zr,Oo,zo,jo,new je)),a&&(sm.fromBufferAttribute(a,o),am.fromBufferAttribute(a,c),om.fromBufferAttribute(a,u),f.normal=zn.getInterpolation(Bo,qr,Kr,Zr,sm,am,om,new H),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const p={a:o,b:c,c:u,normal:new H,materialIndex:0};zn.getNormal(qr,Kr,Zr,p.normal),f.face=p}return f}class no extends xn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],f=[],p=[];let h=0,g=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Hn(u,3)),this.setAttribute("normal",new Hn(f,3)),this.setAttribute("uv",new Hn(p,2));function _(y,m,d,x,v,E,R,C,S,N,T){const w=E/S,L=R/N,F=E/2,z=R/2,P=C/2,B=S+1,V=N+1;let Y=0,D=0;const $=new H;for(let J=0;J<V;J++){const le=J*L-z;for(let we=0;we<B;we++){const Be=we*w-F;$[y]=Be*x,$[m]=le*v,$[d]=P,u.push($.x,$.y,$.z),$[y]=0,$[m]=0,$[d]=C>0?1:-1,f.push($.x,$.y,$.z),p.push(we/S),p.push(1-J/N),Y+=1}}for(let J=0;J<N;J++)for(let le=0;le<S;le++){const we=h+le+B*J,Be=h+le+B*(J+1),q=h+(le+1)+B*(J+1),re=h+(le+1)+B*J;c.push(we,Be,re),c.push(Be,q,re),D+=6}o.addGroup(g,D,T),g+=D,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=Gs(t[n]);for(const r in i)e[r]=i[r]}return e}function AM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function T0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const NM={clone:Gs,merge:qt};var RM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends Ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RM,this.fragmentShader=PM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=AM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class C0 extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=pi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new H,lm=new je,cm=new je;class En extends C0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=kd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(au*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kd*2*Math.atan(Math.tan(au*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,n){return this.getViewBounds(e,lm,cm),n.subVectors(cm,lm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(au*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Qr=-90,Jr=1;class LM extends Wt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(Qr,Jr,e,n);r.layers=this.layers,this.add(r);const s=new En(Qr,Jr,e,n);s.layers=this.layers,this.add(s);const a=new En(Qr,Jr,e,n);a.layers=this.layers,this.add(a);const o=new En(Qr,Jr,e,n);o.layers=this.layers,this.add(o);const c=new En(Qr,Jr,e,n);c.layers=this.layers,this.add(c);const u=new En(Qr,Jr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const u of n)this.remove(u);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ql)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,f]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(p,h,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class A0 extends Qt{constructor(e,n,i,r,s,a,o,c,u,f){e=e!==void 0?e:[],n=n!==void 0?n:zs,super(e,n,i,r,s,a,o,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class DM extends Pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new A0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:On}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new no(5,5,5),s=new er({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Xi});s.uniforms.tEquirect.value=n;const a=new Jn(r,s),o=n.minFilter;return n.minFilter===wr&&(n.minFilter=On),new LM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const bu=new H,IM=new H,UM=new Ue;class mr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=bu.subVectors(i,n).cross(IM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(bu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||UM.getNormalMatrix(e),r=this.coplanarPoint(bu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new to,Go=new H;class N0{constructor(e=new mr,n=new mr,i=new mr,r=new mr,s=new mr,a=new mr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=pi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],u=r[4],f=r[5],p=r[6],h=r[7],g=r[8],_=r[9],y=r[10],m=r[11],d=r[12],x=r[13],v=r[14],E=r[15];if(i[0].setComponents(c-s,h-u,m-g,E-d).normalize(),i[1].setComponents(c+s,h+u,m+g,E+d).normalize(),i[2].setComponents(c+a,h+f,m+_,E+x).normalize(),i[3].setComponents(c-a,h-f,m-_,E-x).normalize(),i[4].setComponents(c-o,h-p,m-y,E-v).normalize(),n===pi)i[5].setComponents(c+o,h+p,m+y,E+v).normalize();else if(n===ql)i[5].setComponents(o,p,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Go.x=r.normal.x>0?e.max.x:e.min.x,Go.y=r.normal.y>0?e.max.y:e.min.y,Go.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function R0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function FM(t){const e=new WeakMap;function n(o,c){const u=o.array,f=o.usage,p=u.byteLength,h=t.createBuffer();t.bindBuffer(c,h),t.bufferData(c,u,f),o.onUploadCallback();let g;if(u instanceof Float32Array)g=t.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=t.SHORT;else if(u instanceof Uint32Array)g=t.UNSIGNED_INT;else if(u instanceof Int32Array)g=t.INT;else if(u instanceof Int8Array)g=t.BYTE;else if(u instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,c,u){const f=c.array,p=c._updateRange,h=c.updateRanges;if(t.bindBuffer(u,o),p.count===-1&&h.length===0&&t.bufferSubData(u,0,f),h.length!==0){for(let g=0,_=h.length;g<_;g++){const y=h[g];t.bufferSubData(u,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}c.clearUpdateRanges()}p.count!==-1&&(t.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count),p.count=-1),c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const u=e.get(o);if(u===void 0)e.set(o,n(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}class Sc extends xn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),u=o+1,f=c+1,p=e/o,h=n/c,g=[],_=[],y=[],m=[];for(let d=0;d<f;d++){const x=d*h-a;for(let v=0;v<u;v++){const E=v*p-s;_.push(E,-x,0),y.push(0,0,1),m.push(v/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<o;x++){const v=x+u*d,E=x+u*(d+1),R=x+1+u*(d+1),C=x+1+u*d;g.push(v,E,C),g.push(E,R,C)}this.setIndex(g),this.setAttribute("position",new Hn(_,3)),this.setAttribute("normal",new Hn(y,3)),this.setAttribute("uv",new Hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.width,e.height,e.widthSegments,e.heightSegments)}}var kM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OM=`#ifdef USE_ALPHAHASH
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
#endif`,zM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VM=`#ifdef USE_AOMAP
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
#endif`,GM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WM=`#ifdef USE_BATCHING
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
#endif`,XM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$M=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,KM=`#ifdef USE_IRIDESCENCE
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
#endif`,ZM=`#ifdef USE_BUMPMAP
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
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ew=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,aw=`#define PI 3.141592653589793
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
} // validated`,ow=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lw=`vec3 transformedNormal = objectNormal;
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
#endif`,cw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hw="gl_FragColor = linearToOutputTexel( gl_FragColor );",pw=`
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
}`,mw=`#ifdef USE_ENVMAP
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
#endif`,gw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xw=`#ifdef USE_ENVMAP
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
#endif`,vw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_w=`#ifdef USE_ENVMAP
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
#endif`,yw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ww=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ew=`#ifdef USE_GRADIENTMAP
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
}`,bw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Aw=`uniform bool receiveShadow;
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
#endif`,Nw=`#ifdef USE_ENVMAP
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
#endif`,Rw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Iw=`PhysicalMaterial material;
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
#endif`,Uw=`struct PhysicalMaterial {
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
}`,Fw=`
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
#endif`,kw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ow=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ww=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xw=`#if defined( USE_POINTS_UV )
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
#endif`,$w=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qw=`#ifdef USE_MORPHTARGETS
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
#endif`,Jw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sE=`#ifdef USE_NORMALMAP
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
#endif`,aE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_E=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,SE=`float getShadowMask() {
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
}`,ME=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wE=`#ifdef USE_SKINNING
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
#endif`,EE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bE=`#ifdef USE_SKINNING
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
#endif`,TE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RE=`#ifdef USE_TRANSMISSION
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
#endif`,PE=`#ifdef USE_TRANSMISSION
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
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kE=`uniform sampler2D t2D;
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
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`#include <common>
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
}`,VE=`#if DEPTH_PACKING == 3200
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
}`,GE=`#define DISTANCE
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
}`,WE=`#define DISTANCE
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
}`,XE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$E=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YE=`uniform float scale;
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
}`,qE=`uniform vec3 diffuse;
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
}`,KE=`#include <common>
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
}`,ZE=`uniform vec3 diffuse;
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
}`,QE=`#define LAMBERT
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
}`,JE=`#define LAMBERT
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
}`,eb=`#define MATCAP
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
}`,tb=`#define MATCAP
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
}`,nb=`#define NORMAL
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
}`,ib=`#define NORMAL
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
}`,rb=`#define PHONG
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
}`,sb=`#define PHONG
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
}`,ab=`#define STANDARD
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
}`,ob=`#define STANDARD
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
}`,lb=`#define TOON
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
}`,cb=`#define TOON
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
}`,ub=`uniform float size;
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
}`,db=`uniform vec3 diffuse;
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
}`,fb=`#include <common>
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
}`,hb=`uniform vec3 color;
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
}`,pb=`uniform float rotation;
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
}`,mb=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:kM,alphahash_pars_fragment:OM,alphamap_fragment:zM,alphamap_pars_fragment:jM,alphatest_fragment:BM,alphatest_pars_fragment:HM,aomap_fragment:VM,aomap_pars_fragment:GM,batching_pars_vertex:WM,batching_vertex:XM,begin_vertex:$M,beginnormal_vertex:YM,bsdfs:qM,iridescence_fragment:KM,bumpmap_pars_fragment:ZM,clipping_planes_fragment:QM,clipping_planes_pars_fragment:JM,clipping_planes_pars_vertex:ew,clipping_planes_vertex:tw,color_fragment:nw,color_pars_fragment:iw,color_pars_vertex:rw,color_vertex:sw,common:aw,cube_uv_reflection_fragment:ow,defaultnormal_vertex:lw,displacementmap_pars_vertex:cw,displacementmap_vertex:uw,emissivemap_fragment:dw,emissivemap_pars_fragment:fw,colorspace_fragment:hw,colorspace_pars_fragment:pw,envmap_fragment:mw,envmap_common_pars_fragment:gw,envmap_pars_fragment:xw,envmap_pars_vertex:vw,envmap_physical_pars_fragment:Nw,envmap_vertex:_w,fog_vertex:yw,fog_pars_vertex:Sw,fog_fragment:Mw,fog_pars_fragment:ww,gradientmap_pars_fragment:Ew,lightmap_pars_fragment:bw,lights_lambert_fragment:Tw,lights_lambert_pars_fragment:Cw,lights_pars_begin:Aw,lights_toon_fragment:Rw,lights_toon_pars_fragment:Pw,lights_phong_fragment:Lw,lights_phong_pars_fragment:Dw,lights_physical_fragment:Iw,lights_physical_pars_fragment:Uw,lights_fragment_begin:Fw,lights_fragment_maps:kw,lights_fragment_end:Ow,logdepthbuf_fragment:zw,logdepthbuf_pars_fragment:jw,logdepthbuf_pars_vertex:Bw,logdepthbuf_vertex:Hw,map_fragment:Vw,map_pars_fragment:Gw,map_particle_fragment:Ww,map_particle_pars_fragment:Xw,metalnessmap_fragment:$w,metalnessmap_pars_fragment:Yw,morphinstance_vertex:qw,morphcolor_vertex:Kw,morphnormal_vertex:Zw,morphtarget_pars_vertex:Qw,morphtarget_vertex:Jw,normal_fragment_begin:eE,normal_fragment_maps:tE,normal_pars_fragment:nE,normal_pars_vertex:iE,normal_vertex:rE,normalmap_pars_fragment:sE,clearcoat_normal_fragment_begin:aE,clearcoat_normal_fragment_maps:oE,clearcoat_pars_fragment:lE,iridescence_pars_fragment:cE,opaque_fragment:uE,packing:dE,premultiplied_alpha_fragment:fE,project_vertex:hE,dithering_fragment:pE,dithering_pars_fragment:mE,roughnessmap_fragment:gE,roughnessmap_pars_fragment:xE,shadowmap_pars_fragment:vE,shadowmap_pars_vertex:_E,shadowmap_vertex:yE,shadowmask_pars_fragment:SE,skinbase_vertex:ME,skinning_pars_vertex:wE,skinning_vertex:EE,skinnormal_vertex:bE,specularmap_fragment:TE,specularmap_pars_fragment:CE,tonemapping_fragment:AE,tonemapping_pars_fragment:NE,transmission_fragment:RE,transmission_pars_fragment:PE,uv_pars_fragment:LE,uv_pars_vertex:DE,uv_vertex:IE,worldpos_vertex:UE,background_vert:FE,background_frag:kE,backgroundCube_vert:OE,backgroundCube_frag:zE,cube_vert:jE,cube_frag:BE,depth_vert:HE,depth_frag:VE,distanceRGBA_vert:GE,distanceRGBA_frag:WE,equirect_vert:XE,equirect_frag:$E,linedashed_vert:YE,linedashed_frag:qE,meshbasic_vert:KE,meshbasic_frag:ZE,meshlambert_vert:QE,meshlambert_frag:JE,meshmatcap_vert:eb,meshmatcap_frag:tb,meshnormal_vert:nb,meshnormal_frag:ib,meshphong_vert:rb,meshphong_frag:sb,meshphysical_vert:ab,meshphysical_frag:ob,meshtoon_vert:lb,meshtoon_frag:cb,points_vert:ub,points_frag:db,shadow_vert:fb,shadow_frag:hb,sprite_vert:pb,sprite_frag:mb},de={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Yn={basic:{uniforms:qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new He(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:qt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:qt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new He(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:qt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:qt([de.points,de.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:qt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:qt([de.common,de.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:qt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:qt([de.sprite,de.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:qt([de.common,de.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:qt([de.lights,de.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Yn.physical={uniforms:qt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Wo={r:0,b:0,g:0},dr=new yi,gb=new pt;function xb(t,e,n,i,r,s,a){const o=new He(0);let c=s===!0?0:1,u,f,p=null,h=0,g=null;function _(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?n:e).get(v)),v}function y(x){let v=!1;const E=_(x);E===null?d(o,c):E&&E.isColor&&(d(E,1),v=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,v){const E=_(v);E&&(E.isCubeTexture||E.mapping===xc)?(f===void 0&&(f=new Jn(new no(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:Gs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,C,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),dr.copy(v.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),f.material.uniforms.envMap.value=E,f.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(gb.makeRotationFromEuler(dr)),f.material.toneMapped=Je.getTransfer(E.colorSpace)!==lt,(p!==E||h!==E.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,p=E,h=E.version,g=t.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new Jn(new Sc(2,2),new er({name:"BackgroundMaterial",uniforms:Gs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=Je.getTransfer(E.colorSpace)!==lt,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||h!==E.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,p=E,h=E.version,g=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function d(x,v){x.getRGB(Wo,T0(t)),i.buffers.color.setClear(Wo.r,Wo.g,Wo.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),c=v,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,d(o,c)},render:y,addToRenderList:m}}function vb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(w,L,F,z,P){let B=!1;const V=p(z,F,L);s!==V&&(s=V,u(s.object)),B=g(w,z,F,P),B&&_(w,z,F,P),P!==null&&e.update(P,t.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,E(w,L,F,z),P!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function c(){return t.createVertexArray()}function u(w){return t.bindVertexArray(w)}function f(w){return t.deleteVertexArray(w)}function p(w,L,F){const z=F.wireframe===!0;let P=i[w.id];P===void 0&&(P={},i[w.id]=P);let B=P[L.id];B===void 0&&(B={},P[L.id]=B);let V=B[z];return V===void 0&&(V=h(c()),B[z]=V),V}function h(w){const L=[],F=[],z=[];for(let P=0;P<n;P++)L[P]=0,F[P]=0,z[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:z,object:w,attributes:{},index:null}}function g(w,L,F,z){const P=s.attributes,B=L.attributes;let V=0;const Y=F.getAttributes();for(const D in Y)if(Y[D].location>=0){const J=P[D];let le=B[D];if(le===void 0&&(D==="instanceMatrix"&&w.instanceMatrix&&(le=w.instanceMatrix),D==="instanceColor"&&w.instanceColor&&(le=w.instanceColor)),J===void 0||J.attribute!==le||le&&J.data!==le.data)return!0;V++}return s.attributesNum!==V||s.index!==z}function _(w,L,F,z){const P={},B=L.attributes;let V=0;const Y=F.getAttributes();for(const D in Y)if(Y[D].location>=0){let J=B[D];J===void 0&&(D==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),D==="instanceColor"&&w.instanceColor&&(J=w.instanceColor));const le={};le.attribute=J,J&&J.data&&(le.data=J.data),P[D]=le,V++}s.attributes=P,s.attributesNum=V,s.index=z}function y(){const w=s.newAttributes;for(let L=0,F=w.length;L<F;L++)w[L]=0}function m(w){d(w,0)}function d(w,L){const F=s.newAttributes,z=s.enabledAttributes,P=s.attributeDivisors;F[w]=1,z[w]===0&&(t.enableVertexAttribArray(w),z[w]=1),P[w]!==L&&(t.vertexAttribDivisor(w,L),P[w]=L)}function x(){const w=s.newAttributes,L=s.enabledAttributes;for(let F=0,z=L.length;F<z;F++)L[F]!==w[F]&&(t.disableVertexAttribArray(F),L[F]=0)}function v(w,L,F,z,P,B,V){V===!0?t.vertexAttribIPointer(w,L,F,P,B):t.vertexAttribPointer(w,L,F,z,P,B)}function E(w,L,F,z){y();const P=z.attributes,B=F.getAttributes(),V=L.defaultAttributeValues;for(const Y in B){const D=B[Y];if(D.location>=0){let $=P[Y];if($===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),$!==void 0){const J=$.normalized,le=$.itemSize,we=e.get($);if(we===void 0)continue;const Be=we.buffer,q=we.type,re=we.bytesPerElement,pe=q===t.INT||q===t.UNSIGNED_INT||$.gpuType===h0;if($.isInterleavedBufferAttribute){const ue=$.data,Fe=ue.stride,De=$.offset;if(ue.isInstancedInterleavedBuffer){for(let Xe=0;Xe<D.locationSize;Xe++)d(D.location+Xe,ue.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Xe=0;Xe<D.locationSize;Xe++)m(D.location+Xe);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let Xe=0;Xe<D.locationSize;Xe++)v(D.location+Xe,le/D.locationSize,q,J,Fe*re,(De+le/D.locationSize*Xe)*re,pe)}else{if($.isInstancedBufferAttribute){for(let ue=0;ue<D.locationSize;ue++)d(D.location+ue,$.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ue=0;ue<D.locationSize;ue++)m(D.location+ue);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let ue=0;ue<D.locationSize;ue++)v(D.location+ue,le/D.locationSize,q,J,le*re,le/D.locationSize*ue*re,pe)}}else if(V!==void 0){const J=V[Y];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(D.location,J);break;case 3:t.vertexAttrib3fv(D.location,J);break;case 4:t.vertexAttrib4fv(D.location,J);break;default:t.vertexAttrib1fv(D.location,J)}}}}x()}function R(){N();for(const w in i){const L=i[w];for(const F in L){const z=L[F];for(const P in z)f(z[P].object),delete z[P];delete L[F]}delete i[w]}}function C(w){if(i[w.id]===void 0)return;const L=i[w.id];for(const F in L){const z=L[F];for(const P in z)f(z[P].object),delete z[P];delete L[F]}delete i[w.id]}function S(w){for(const L in i){const F=i[L];if(F[w.id]===void 0)continue;const z=F[w.id];for(const P in z)f(z[P].object),delete z[P];delete F[w.id]}}function N(){T(),a=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:S,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function _b(t,e,n){let i;function r(u){i=u}function s(u,f){t.drawArrays(i,u,f),n.update(f,i,1)}function a(u,f,p){p!==0&&(t.drawArraysInstanced(i,u,f,p),n.update(f,i,p))}function o(u,f,p){if(p===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<p;g++)this.render(u[g],f[g]);else{h.multiDrawArraysWEBGL(i,u,0,f,0,p);let g=0;for(let _=0;_<p;_++)g+=f[_];n.update(g,i,1)}}function c(u,f,p,h){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<u.length;_++)a(u[_],f[_],h[_]);else{g.multiDrawArraysInstancedWEBGL(i,u,0,f,0,h,0,p);let _=0;for(let y=0;y<p;y++)_+=f[y];for(let y=0;y<h.length;y++)n.update(_,i,h[y])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function yb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Qn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const S=C===vc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ji&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ki&&!S)}function c(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=c(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const p=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:E,maxSamples:R}}function Sb(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new mr,o=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const g=p.length!==0||h||i!==0||r;return r=h,i=p.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){n=f(p,h,0)},this.setState=function(p,h,g){const _=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,d=t.get(p);if(!r||_===null||_.length===0||s&&!m)s?f(null):u();else{const x=s?0:i,v=x*4;let E=d.clippingState||null;c.value=E,E=f(_,h,v,g);for(let R=0;R!==v;++R)E[R]=n[R];d.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,h,g,_){const y=p!==null?p.length:0;let m=null;if(y!==0){if(m=c.value,_!==!0||m===null){const d=g+y*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,E=g;v!==y;++v,E+=4)a.copy(p[v]).applyMatrix4(x,o),a.normal.toArray(m,E),m[E+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Mb(t){let e=new WeakMap;function n(a,o){return o===Ld?a.mapping=zs:o===Dd&&(a.mapping=js),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ld||o===Dd)if(e.has(a)){const c=e.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new DM(c.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class wb extends C0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const vs=4,um=[.125,.215,.35,.446,.526,.582],vr=20,Tu=new wb,dm=new He;let Cu=null,Au=0,Nu=0,Ru=!1;const gr=(1+Math.sqrt(5))/2,es=1/gr,fm=[new H(-gr,es,0),new H(gr,es,0),new H(-es,0,gr),new H(es,0,gr),new H(0,gr,-es),new H(0,gr,es),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class hm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Cu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cu,Au,Nu),this._renderer.xr.enabled=Ru,e.scissorTest=!1,Xo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zs||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:vc,format:Qn,colorSpace:rr,depthBuffer:!1},r=pm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eb(s)),this._blurMaterial=bb(s,e,n)}return r}_compileMaterial(e){const n=new Jn(this._lodPlanes[0],e);this._renderer.compile(n,Tu)}_sceneToCubeUV(e,n,i,r){const o=new En(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,h=f.toneMapping;f.getClearColor(dm),f.toneMapping=$i,f.autoClear=!1;const g=new Bf({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),_=new Jn(new no,g);let y=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,y=!0):(g.color.copy(dm),y=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(o.up.set(0,c[d],0),o.lookAt(u[d],0,0)):x===1?(o.up.set(0,0,c[d]),o.lookAt(0,u[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,u[d]));const v=this._cubeSize;Xo(r,x*v,d>2?v:0,v,v),f.setRenderTarget(r),y&&f.render(_,o),f.render(e,o)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=p,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===zs||e.mapping===js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Jn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Xo(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Tu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=fm[(r-s-1)%fm.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new Jn(this._lodPlanes[r],u),h=u.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*vr-1),y=s/_,m=isFinite(s)?1+Math.floor(f*y):vr;m>vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vr}`);const d=[];let x=0;for(let S=0;S<vr;++S){const N=S/y,T=Math.exp(-N*N/2);d.push(T),S===0?x+=T:S<m&&(x+=2*T)}for(let S=0;S<d.length;S++)d[S]=d[S]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const E=this._sizeLods[r],R=3*E*(r>v-vs?r-v+vs:0),C=4*(this._cubeSize-E);Xo(n,R,C,3*E,2*E),c.setRenderTarget(n),c.render(p,Tu)}}function Eb(t){const e=[],n=[],i=[];let r=t;const s=t-vs+1+um.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let c=1/o;a>t-vs?c=um[a-t+vs-1]:a===0&&(c=0),i.push(c);const u=1/(o-2),f=-u,p=1+u,h=[f,f,p,f,p,p,f,f,p,p,f,p],g=6,_=6,y=3,m=2,d=1,x=new Float32Array(y*_*g),v=new Float32Array(m*_*g),E=new Float32Array(d*_*g);for(let C=0;C<g;C++){const S=C%3*2/3-1,N=C>2?0:-1,T=[S,N,0,S+2/3,N,0,S+2/3,N+1,0,S,N,0,S+2/3,N+1,0,S,N+1,0];x.set(T,y*_*C),v.set(h,m*_*C);const w=[C,C,C,C,C,C];E.set(w,d*_*C)}const R=new xn;R.setAttribute("position",new cn(x,y)),R.setAttribute("uv",new cn(v,m)),R.setAttribute("faceIndex",new cn(E,d)),e.push(R),r>vs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function pm(t,e,n){const i=new Pr(t,e,n);return i.texture.mapping=xc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function bb(t,e,n){const i=new Float32Array(vr),r=new H(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hf(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function mm(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hf(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function gm(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Hf(){return`

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
	`}function Tb(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,u=c===Ld||c===Dd,f=c===zs||c===js;if(u||f){let p=e.get(o);const h=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new hm(t)),p=u?n.fromEquirectangular(o,p):n.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const g=o.image;return u&&g&&g.height>0||f&&g&&r(g)?(n===null&&(n=new hm(t)),p=u?n.fromEquirectangular(o):n.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let c=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function Cb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&zf("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ab(t,e,n,i){const r={},s=new WeakMap;function a(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}h.removeEventListener("dispose",a),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(p,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function c(p){const h=p.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const g=p.morphAttributes;for(const _ in g){const y=g[_];for(let m=0,d=y.length;m<d;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(p){const h=[],g=p.index,_=p.attributes.position;let y=0;if(g!==null){const x=g.array;y=g.version;for(let v=0,E=x.length;v<E;v+=3){const R=x[v+0],C=x[v+1],S=x[v+2];h.push(R,C,C,S,S,R)}}else if(_!==void 0){const x=_.array;y=_.version;for(let v=0,E=x.length/3-1;v<E;v+=3){const R=v+0,C=v+1,S=v+2;h.push(R,C,C,S,S,R)}}else return;const m=new(y0(h)?b0:E0)(h,1);m.version=y;const d=s.get(p);d&&e.remove(d),s.set(p,m)}function f(p){const h=s.get(p);if(h){const g=p.index;g!==null&&h.version<g.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:c,getWireframeAttribute:f}}function Nb(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,g){t.drawElements(i,g,s,h*a),n.update(g,i,1)}function u(h,g,_){_!==0&&(t.drawElementsInstanced(i,g,s,h*a,_),n.update(g,i,_))}function f(h,g,_){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<_;m++)this.render(h[m]/a,g[m]);else{y.multiDrawElementsWEBGL(i,g,0,s,h,0,_);let m=0;for(let d=0;d<_;d++)m+=g[d];n.update(m,i,1)}}function p(h,g,_,y){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)u(h[d]/a,g[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,h,0,y,0,_);let d=0;for(let x=0;x<_;x++)d+=g[x];for(let x=0;x<y.length;x++)n.update(d,i,y[x])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function Rb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Pb(t,e,n){const i=new WeakMap,r=new Ut;function s(a,o,c){const u=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0;let h=i.get(o);if(h===void 0||h.count!==p){let w=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",w)};var g=w;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),y===!0&&(E=2),m===!0&&(E=3);let R=o.attributes.position.count*E,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const S=new Float32Array(R*C*4*p),N=new M0(S,R,C,p);N.type=ki,N.needsUpdate=!0;const T=E*4;for(let L=0;L<p;L++){const F=d[L],z=x[L],P=v[L],B=R*C*4*L;for(let V=0;V<F.count;V++){const Y=V*T;_===!0&&(r.fromBufferAttribute(F,V),S[B+Y+0]=r.x,S[B+Y+1]=r.y,S[B+Y+2]=r.z,S[B+Y+3]=0),y===!0&&(r.fromBufferAttribute(z,V),S[B+Y+4]=r.x,S[B+Y+5]=r.y,S[B+Y+6]=r.z,S[B+Y+7]=0),m===!0&&(r.fromBufferAttribute(P,V),S[B+Y+8]=r.x,S[B+Y+9]=r.y,S[B+Y+10]=r.z,S[B+Y+11]=P.itemSize===4?r.w:1)}}h={count:p,texture:N,size:new je(R,C)},i.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const y=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(t,"morphTargetBaseInfluence",y),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function Lb(t,e,n,i){let r=new WeakMap;function s(c){const u=i.render.frame,f=c.geometry,p=e.get(c,f);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return p}function a(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class P0 extends Qt{constructor(e,n,i,r,s,a,o,c,u,f=Cs){if(f!==Cs&&f!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Cs&&(i=Bs),i===void 0&&f===Vs&&(i=Hs),super(null,r,s,a,o,c,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Tn,this.minFilter=c!==void 0?c:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const L0=new Qt,D0=new P0(1,1);D0.compareFunction=_0;const I0=new M0,U0=new xM,F0=new A0,xm=[],vm=[],_m=new Float32Array(16),ym=new Float32Array(9),Sm=new Float32Array(4);function qs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=xm[r];if(s===void 0&&(s=new Float32Array(r),xm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Mc(t,e){let n=vm[e];n===void 0&&(n=new Int32Array(e),vm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Db(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Ib(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function Ub(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function Fb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function kb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(Ct(n,i))return;Sm.set(i),t.uniformMatrix2fv(this.addr,!1,Sm),At(n,i)}}function Ob(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(Ct(n,i))return;ym.set(i),t.uniformMatrix3fv(this.addr,!1,ym),At(n,i)}}function zb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(Ct(n,i))return;_m.set(i),t.uniformMatrix4fv(this.addr,!1,_m),At(n,i)}}function jb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Bb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function Hb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function Vb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function Gb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Wb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function Xb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function $b(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function Yb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?D0:L0;n.setTexture2D(e||s,r)}function qb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||U0,r)}function Kb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||F0,r)}function Zb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||I0,r)}function Qb(t){switch(t){case 5126:return Db;case 35664:return Ib;case 35665:return Ub;case 35666:return Fb;case 35674:return kb;case 35675:return Ob;case 35676:return zb;case 5124:case 35670:return jb;case 35667:case 35671:return Bb;case 35668:case 35672:return Hb;case 35669:case 35673:return Vb;case 5125:return Gb;case 36294:return Wb;case 36295:return Xb;case 36296:return $b;case 35678:case 36198:case 36298:case 36306:case 35682:return Yb;case 35679:case 36299:case 36307:return qb;case 35680:case 36300:case 36308:case 36293:return Kb;case 36289:case 36303:case 36311:case 36292:return Zb}}function Jb(t,e){t.uniform1fv(this.addr,e)}function e1(t,e){const n=qs(e,this.size,2);t.uniform2fv(this.addr,n)}function t1(t,e){const n=qs(e,this.size,3);t.uniform3fv(this.addr,n)}function n1(t,e){const n=qs(e,this.size,4);t.uniform4fv(this.addr,n)}function i1(t,e){const n=qs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function r1(t,e){const n=qs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function s1(t,e){const n=qs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function a1(t,e){t.uniform1iv(this.addr,e)}function o1(t,e){t.uniform2iv(this.addr,e)}function l1(t,e){t.uniform3iv(this.addr,e)}function c1(t,e){t.uniform4iv(this.addr,e)}function u1(t,e){t.uniform1uiv(this.addr,e)}function d1(t,e){t.uniform2uiv(this.addr,e)}function f1(t,e){t.uniform3uiv(this.addr,e)}function h1(t,e){t.uniform4uiv(this.addr,e)}function p1(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||L0,s[a])}function m1(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||U0,s[a])}function g1(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||F0,s[a])}function x1(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||I0,s[a])}function v1(t){switch(t){case 5126:return Jb;case 35664:return e1;case 35665:return t1;case 35666:return n1;case 35674:return i1;case 35675:return r1;case 35676:return s1;case 5124:case 35670:return a1;case 35667:case 35671:return o1;case 35668:case 35672:return l1;case 35669:case 35673:return c1;case 5125:return u1;case 36294:return d1;case 36295:return f1;case 36296:return h1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return m1;case 35680:case 36300:case 36308:case 36293:return g1;case 36289:case 36303:case 36311:case 36292:return x1}}class _1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Qb(n.type)}}class y1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=v1(n.type)}}class S1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Pu=/(\w+)(\])?(\[|\.)?/g;function Mm(t,e){t.seq.push(e),t.map[e.id]=e}function M1(t,e,n){const i=t.name,r=i.length;for(Pu.lastIndex=0;;){const s=Pu.exec(i),a=Pu.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){Mm(n,u===void 0?new _1(o,t,e):new y1(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new S1(o),Mm(n,p)),n=p}}}class ml{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);M1(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function wm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const w1=37297;let E1=0;function b1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function T1(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===Yl&&n===$l?i="LinearDisplayP3ToLinearSRGB":e===$l&&n===Yl&&(i="LinearSRGBToLinearDisplayP3"),t){case rr:case _c:return[i,"LinearTransferOETF"];case Fn:case Of:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Em(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+b1(t.getShaderSource(e),a)}else return r}function C1(t,e){const n=T1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function A1(t,e){let n;switch(e){case IS:n="Linear";break;case US:n="Reinhard";break;case FS:n="OptimizedCineon";break;case kS:n="ACESFilmic";break;case zS:n="AgX";break;case jS:n="Neutral";break;case OS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function N1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_a).join(`
`)}function R1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function P1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function _a(t){return t!==""}function bm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const L1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Od(t){return t.replace(L1,I1)}const D1=new Map;function I1(t,e){let n=Ie[e];if(n===void 0){const i=D1.get(e);if(i!==void 0)n=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Od(n)}const U1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cm(t){return t.replace(U1,F1)}function F1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Am(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function k1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===u0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===aS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function O1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case zs:case js:e="ENVMAP_TYPE_CUBE";break;case xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function z1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function j1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case d0:e="ENVMAP_BLENDING_MULTIPLY";break;case LS:e="ENVMAP_BLENDING_MIX";break;case DS:e="ENVMAP_BLENDING_ADD";break}return e}function B1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function H1(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=k1(n),u=O1(n),f=z1(n),p=j1(n),h=B1(n),g=N1(n),_=R1(s),y=r.createProgram();let m,d,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(_a).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(_a).join(`
`),d.length>0&&(d+=`
`)):(m=[Am(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),d=[Am(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$i?"#define TONE_MAPPING":"",n.toneMapping!==$i?Ie.tonemapping_pars_fragment:"",n.toneMapping!==$i?A1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,C1("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_a).join(`
`)),a=Od(a),a=bm(a,n),a=Tm(a,n),o=Od(o),o=bm(o,n),o=Tm(o,n),a=Cm(a),o=Cm(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=x+m+a,E=x+d+o,R=wm(r,r.VERTEX_SHADER,v),C=wm(r,r.FRAGMENT_SHADER,E);r.attachShader(y,R),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function S(L){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(y).trim(),z=r.getShaderInfoLog(R).trim(),P=r.getShaderInfoLog(C).trim();let B=!0,V=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,R,C);else{const Y=Em(r,R,"vertex"),D=Em(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+Y+`
`+D)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(z===""||P==="")&&(V=!1);V&&(L.diagnostics={runnable:B,programLog:F,vertexShader:{log:z,prefix:m},fragmentShader:{log:P,prefix:d}})}r.deleteShader(R),r.deleteShader(C),N=new ml(r,y),T=P1(r,y)}let N;this.getUniforms=function(){return N===void 0&&S(this),N};let T;this.getAttributes=function(){return T===void 0&&S(this),T};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(y,w1)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=E1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=C,this}let V1=0;class G1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new W1(e),n.set(e,i)),i}}class W1{constructor(e){this.id=V1++,this.code=e,this.usedTimes=0}}function X1(t,e,n,i,r,s,a){const o=new jf,c=new G1,u=new Set,f=[],p=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return u.add(T),T===0?"uv":`uv${T}`}function m(T,w,L,F,z){const P=F.fog,B=z.geometry,V=T.isMeshStandardMaterial?F.environment:null,Y=(T.isMeshStandardMaterial?n:e).get(T.envMap||V),D=Y&&Y.mapping===xc?Y.image.height:null,$=_[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const J=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,le=J!==void 0?J.length:0;let we=0;B.morphAttributes.position!==void 0&&(we=1),B.morphAttributes.normal!==void 0&&(we=2),B.morphAttributes.color!==void 0&&(we=3);let Be,q,re,pe;if($){const tt=Yn[$];Be=tt.vertexShader,q=tt.fragmentShader}else Be=T.vertexShader,q=T.fragmentShader,c.update(T),re=c.getVertexShaderID(T),pe=c.getFragmentShaderID(T);const ue=t.getRenderTarget(),Fe=z.isInstancedMesh===!0,De=z.isBatchedMesh===!0,Xe=!!T.map,U=!!T.matcap,Ge=!!Y,ze=!!T.aoMap,st=!!T.lightMap,k=!!T.bumpMap,ce=!!T.normalMap,ge=!!T.displacementMap,ie=!!T.emissiveMap,Ce=!!T.metalnessMap,A=!!T.roughnessMap,M=T.anisotropy>0,G=T.clearcoat>0,Q=T.dispersion>0,ee=T.iridescence>0,te=T.sheen>0,be=T.transmission>0,fe=M&&!!T.anisotropyMap,he=G&&!!T.clearcoatMap,ke=G&&!!T.clearcoatNormalMap,se=G&&!!T.clearcoatRoughnessMap,Me=ee&&!!T.iridescenceMap,We=ee&&!!T.iridescenceThicknessMap,Re=te&&!!T.sheenColorMap,me=te&&!!T.sheenRoughnessMap,Oe=!!T.specularMap,$e=!!T.specularColorMap,_t=!!T.specularIntensityMap,I=be&&!!T.transmissionMap,xe=be&&!!T.thicknessMap,K=!!T.gradientMap,Z=!!T.alphaMap,oe=T.alphaTest>0,Pe=!!T.alphaHash,qe=!!T.extensions;let yt=$i;T.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(yt=t.toneMapping);const Nt={shaderID:$,shaderType:T.type,shaderName:T.name,vertexShader:Be,fragmentShader:q,defines:T.defines,customVertexShaderID:re,customFragmentShaderID:pe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:De,batchingColor:De&&z._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&z.instanceColor!==null,instancingMorph:Fe&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ue===null?t.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:rr,alphaToCoverage:!!T.alphaToCoverage,map:Xe,matcap:U,envMap:Ge,envMapMode:Ge&&Y.mapping,envMapCubeUVHeight:D,aoMap:ze,lightMap:st,bumpMap:k,normalMap:ce,displacementMap:h&&ge,emissiveMap:ie,normalMapObjectSpace:ce&&T.normalMapType===tM,normalMapTangentSpace:ce&&T.normalMapType===eM,metalnessMap:Ce,roughnessMap:A,anisotropy:M,anisotropyMap:fe,clearcoat:G,clearcoatMap:he,clearcoatNormalMap:ke,clearcoatRoughnessMap:se,dispersion:Q,iridescence:ee,iridescenceMap:Me,iridescenceThicknessMap:We,sheen:te,sheenColorMap:Re,sheenRoughnessMap:me,specularMap:Oe,specularColorMap:$e,specularIntensityMap:_t,transmission:be,transmissionMap:I,thicknessMap:xe,gradientMap:K,opaque:T.transparent===!1&&T.blending===Ts&&T.alphaToCoverage===!1,alphaMap:Z,alphaTest:oe,alphaHash:Pe,combine:T.combine,mapUv:Xe&&y(T.map.channel),aoMapUv:ze&&y(T.aoMap.channel),lightMapUv:st&&y(T.lightMap.channel),bumpMapUv:k&&y(T.bumpMap.channel),normalMapUv:ce&&y(T.normalMap.channel),displacementMapUv:ge&&y(T.displacementMap.channel),emissiveMapUv:ie&&y(T.emissiveMap.channel),metalnessMapUv:Ce&&y(T.metalnessMap.channel),roughnessMapUv:A&&y(T.roughnessMap.channel),anisotropyMapUv:fe&&y(T.anisotropyMap.channel),clearcoatMapUv:he&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:ke&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:We&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:me&&y(T.sheenRoughnessMap.channel),specularMapUv:Oe&&y(T.specularMap.channel),specularColorMapUv:$e&&y(T.specularColorMap.channel),specularIntensityMapUv:_t&&y(T.specularIntensityMap.channel),transmissionMapUv:I&&y(T.transmissionMap.channel),thicknessMapUv:xe&&y(T.thicknessMap.channel),alphaMapUv:Z&&y(T.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ce||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!B.attributes.uv&&(Xe||Z),fog:!!P,useFog:T.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:z.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:we,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:yt,decodeVideoTexture:Xe&&T.map.isVideoTexture===!0&&Je.getTransfer(T.map.colorSpace)===lt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===di,flipSided:T.side===ln,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:qe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:qe&&T.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Nt.vertexUv1s=u.has(1),Nt.vertexUv2s=u.has(2),Nt.vertexUv3s=u.has(3),u.clear(),Nt}function d(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)w.push(L),w.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(x(w,T),v(w,T),w.push(t.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function x(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function v(T,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.doubleSided&&o.enable(10),w.flipSided&&o.enable(11),w.useDepthPacking&&o.enable(12),w.dithering&&o.enable(13),w.transmission&&o.enable(14),w.sheen&&o.enable(15),w.opaque&&o.enable(16),w.pointsUvs&&o.enable(17),w.decodeVideoTexture&&o.enable(18),w.alphaToCoverage&&o.enable(19),T.push(o.mask)}function E(T){const w=_[T.type];let L;if(w){const F=Yn[w];L=NM.clone(F.uniforms)}else L=T.uniforms;return L}function R(T,w){let L;for(let F=0,z=f.length;F<z;F++){const P=f[F];if(P.cacheKey===w){L=P,++L.usedTimes;break}}return L===void 0&&(L=new H1(t,w,T,s),f.push(L)),L}function C(T){if(--T.usedTimes===0){const w=f.indexOf(T);f[w]=f[f.length-1],f.pop(),T.destroy()}}function S(T){c.remove(T)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:R,releaseProgram:C,releaseShaderCache:S,programs:f,dispose:N}}function $1(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Y1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Nm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Rm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(p,h,g,_,y,m){let d=t[e];return d===void 0?(d={id:p.id,object:p,geometry:h,material:g,groupOrder:_,renderOrder:p.renderOrder,z:y,group:m},t[e]=d):(d.id=p.id,d.object=p,d.geometry=h,d.material=g,d.groupOrder=_,d.renderOrder=p.renderOrder,d.z=y,d.group=m),e++,d}function o(p,h,g,_,y,m){const d=a(p,h,g,_,y,m);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):n.push(d)}function c(p,h,g,_,y,m){const d=a(p,h,g,_,y,m);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):n.unshift(d)}function u(p,h){n.length>1&&n.sort(p||Y1),i.length>1&&i.sort(h||Nm),r.length>1&&r.sort(h||Nm)}function f(){for(let p=e,h=t.length;p<h;p++){const g=t[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:f,sort:u}}function q1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Rm,t.set(i,[a])):r>=s.length?(a=new Rm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function K1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new He};break;case"SpotLight":n={position:new H,direction:new H,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function Z1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Q1=0;function J1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function eT(t){const e=new K1,n=Z1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new H);const r=new H,s=new pt,a=new pt;function o(u){let f=0,p=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let g=0,_=0,y=0,m=0,d=0,x=0,v=0,E=0,R=0,C=0,S=0;u.sort(J1);for(let T=0,w=u.length;T<w;T++){const L=u[T],F=L.color,z=L.intensity,P=L.distance,B=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=F.r*z,p+=F.g*z,h+=F.b*z;else if(L.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(L.sh.coefficients[V],z);S++}else if(L.isDirectionalLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,D=n.get(L);D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,i.directionalShadow[g]=D,i.directionalShadowMap[g]=B,i.directionalShadowMatrix[g]=L.shadow.matrix,x++}i.directional[g]=V,g++}else if(L.isSpotLight){const V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(F).multiplyScalar(z),V.distance=P,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,i.spot[y]=V;const Y=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,Y.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[y]=Y.matrix,L.castShadow){const D=n.get(L);D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,i.spotShadow[y]=D,i.spotShadowMap[y]=B,E++}y++}else if(L.isRectAreaLight){const V=e.get(L);V.color.copy(F).multiplyScalar(z),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=V,m++}else if(L.isPointLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const Y=L.shadow,D=n.get(L);D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,D.shadowCameraNear=Y.camera.near,D.shadowCameraFar=Y.camera.far,i.pointShadow[_]=D,i.pointShadowMap[_]=B,i.pointShadowMatrix[_]=L.shadow.matrix,v++}i.point[_]=V,_++}else if(L.isHemisphereLight){const V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(z),V.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[d]=V,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==g||N.pointLength!==_||N.spotLength!==y||N.rectAreaLength!==m||N.hemiLength!==d||N.numDirectionalShadows!==x||N.numPointShadows!==v||N.numSpotShadows!==E||N.numSpotMaps!==R||N.numLightProbes!==S)&&(i.directional.length=g,i.spot.length=y,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=E+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=S,N.directionalLength=g,N.pointLength=_,N.spotLength=y,N.rectAreaLength=m,N.hemiLength=d,N.numDirectionalShadows=x,N.numPointShadows=v,N.numSpotShadows=E,N.numSpotMaps=R,N.numLightProbes=S,i.version=Q1++)}function c(u,f){let p=0,h=0,g=0,_=0,y=0;const m=f.matrixWorldInverse;for(let d=0,x=u.length;d<x;d++){const v=u[d];if(v.isDirectionalLight){const E=i.directional[p];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(v.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),g++}else if(v.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const E=i.hemi[y];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),y++}}}return{setup:o,setupView:c,state:i}}function Pm(t){const e=new eT(t),n=[],i=[];function r(f){u.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function a(f){i.push(f)}function o(){e.setup(n)}function c(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function tT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Pm(t),e.set(r,[o])):s>=a.length?(o=new Pm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class nT extends Ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iT extends Ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sT=`uniform sampler2D shadow_pass;
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
}`;function aT(t,e,n){let i=new N0;const r=new je,s=new je,a=new Ut,o=new nT({depthPacking:JS}),c=new iT,u={},f=n.maxTextureSize,p={[Qi]:ln,[ln]:Qi,[di]:di},h=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:rT,fragmentShader:sT}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const _=new xn;_.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Jn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=u0;let d=this.type;this.render=function(C,S,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const T=t.getRenderTarget(),w=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Xi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=d!==li&&this.type===li,P=d===li&&this.type!==li;for(let B=0,V=C.length;B<V;B++){const Y=C[B],D=Y.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const $=D.getFrameExtents();if(r.multiply($),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/$.x),r.x=s.x*$.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/$.y),r.y=s.y*$.y,D.mapSize.y=s.y)),D.map===null||z===!0||P===!0){const le=this.type!==li?{minFilter:Tn,magFilter:Tn}:{};D.map!==null&&D.map.dispose(),D.map=new Pr(r.x,r.y,le),D.map.texture.name=Y.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const J=D.getViewportCount();for(let le=0;le<J;le++){const we=D.getViewport(le);a.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),F.viewport(a),D.updateMatrices(Y,le),i=D.getFrustum(),E(S,N,D.camera,Y,this.type)}D.isPointLightShadow!==!0&&this.type===li&&x(D,N),D.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(T,w,L)};function x(C,S){const N=e.update(y);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Pr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(S,null,N,h,y,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(S,null,N,g,y,null)}function v(C,S,N,T){let w=null;const L=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)w=L;else if(w=N.isPointLight===!0?c:o,t.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const F=w.uuid,z=S.uuid;let P=u[F];P===void 0&&(P={},u[F]=P);let B=P[z];B===void 0&&(B=w.clone(),P[z]=B,S.addEventListener("dispose",R)),w=B}if(w.visible=S.visible,w.wireframe=S.wireframe,T===li?w.side=S.shadowSide!==null?S.shadowSide:S.side:w.side=S.shadowSide!==null?S.shadowSide:p[S.side],w.alphaMap=S.alphaMap,w.alphaTest=S.alphaTest,w.map=S.map,w.clipShadows=S.clipShadows,w.clippingPlanes=S.clippingPlanes,w.clipIntersection=S.clipIntersection,w.displacementMap=S.displacementMap,w.displacementScale=S.displacementScale,w.displacementBias=S.displacementBias,w.wireframeLinewidth=S.wireframeLinewidth,w.linewidth=S.linewidth,N.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const F=t.properties.get(w);F.light=N}return w}function E(C,S,N,T,w){if(C.visible===!1)return;if(C.layers.test(S.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===li)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const z=e.update(C),P=C.material;if(Array.isArray(P)){const B=z.groups;for(let V=0,Y=B.length;V<Y;V++){const D=B[V],$=P[D.materialIndex];if($&&$.visible){const J=v(C,$,T,w);C.onBeforeShadow(t,C,S,N,z,J,D),t.renderBufferDirect(N,null,z,J,C,D),C.onAfterShadow(t,C,S,N,z,J,D)}}}else if(P.visible){const B=v(C,P,T,w);C.onBeforeShadow(t,C,S,N,z,B,null),t.renderBufferDirect(N,null,z,B,C,null),C.onAfterShadow(t,C,S,N,z,B,null)}}const F=C.children;for(let z=0,P=F.length;z<P;z++)E(F[z],S,N,T,w)}function R(C){C.target.removeEventListener("dispose",R);for(const N in u){const T=u[N],w=C.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}function oT(t){function e(){let I=!1;const xe=new Ut;let K=null;const Z=new Ut(0,0,0,0);return{setMask:function(oe){K!==oe&&!I&&(t.colorMask(oe,oe,oe,oe),K=oe)},setLocked:function(oe){I=oe},setClear:function(oe,Pe,qe,yt,Nt){Nt===!0&&(oe*=yt,Pe*=yt,qe*=yt),xe.set(oe,Pe,qe,yt),Z.equals(xe)===!1&&(t.clearColor(oe,Pe,qe,yt),Z.copy(xe))},reset:function(){I=!1,K=null,Z.set(-1,0,0,0)}}}function n(){let I=!1,xe=null,K=null,Z=null;return{setTest:function(oe){oe?pe(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(oe){xe!==oe&&!I&&(t.depthMask(oe),xe=oe)},setFunc:function(oe){if(K!==oe){switch(oe){case bS:t.depthFunc(t.NEVER);break;case TS:t.depthFunc(t.ALWAYS);break;case CS:t.depthFunc(t.LESS);break;case Gl:t.depthFunc(t.LEQUAL);break;case AS:t.depthFunc(t.EQUAL);break;case NS:t.depthFunc(t.GEQUAL);break;case RS:t.depthFunc(t.GREATER);break;case PS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}K=oe}},setLocked:function(oe){I=oe},setClear:function(oe){Z!==oe&&(t.clearDepth(oe),Z=oe)},reset:function(){I=!1,xe=null,K=null,Z=null}}}function i(){let I=!1,xe=null,K=null,Z=null,oe=null,Pe=null,qe=null,yt=null,Nt=null;return{setTest:function(tt){I||(tt?pe(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(tt){xe!==tt&&!I&&(t.stencilMask(tt),xe=tt)},setFunc:function(tt,Gn,Wn){(K!==tt||Z!==Gn||oe!==Wn)&&(t.stencilFunc(tt,Gn,Wn),K=tt,Z=Gn,oe=Wn)},setOp:function(tt,Gn,Wn){(Pe!==tt||qe!==Gn||yt!==Wn)&&(t.stencilOp(tt,Gn,Wn),Pe=tt,qe=Gn,yt=Wn)},setLocked:function(tt){I=tt},setClear:function(tt){Nt!==tt&&(t.clearStencil(tt),Nt=tt)},reset:function(){I=!1,xe=null,K=null,Z=null,oe=null,Pe=null,qe=null,yt=null,Nt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,c=new WeakMap;let u={},f={},p=new WeakMap,h=[],g=null,_=!1,y=null,m=null,d=null,x=null,v=null,E=null,R=null,C=new He(0,0,0),S=0,N=!1,T=null,w=null,L=null,F=null,z=null;const P=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,V=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=V>=1):Y.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=V>=2);let D=null,$={};const J=t.getParameter(t.SCISSOR_BOX),le=t.getParameter(t.VIEWPORT),we=new Ut().fromArray(J),Be=new Ut().fromArray(le);function q(I,xe,K,Z){const oe=new Uint8Array(4),Pe=t.createTexture();t.bindTexture(I,Pe),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<K;qe++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(xe+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return Pe}const re={};re[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),pe(t.DEPTH_TEST),s.setFunc(Gl),k(!1),ce(pp),pe(t.CULL_FACE),ze(Xi);function pe(I){u[I]!==!0&&(t.enable(I),u[I]=!0)}function ue(I){u[I]!==!1&&(t.disable(I),u[I]=!1)}function Fe(I,xe){return f[I]!==xe?(t.bindFramebuffer(I,xe),f[I]=xe,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=xe),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function De(I,xe){let K=h,Z=!1;if(I){K=p.get(xe),K===void 0&&(K=[],p.set(xe,K));const oe=I.textures;if(K.length!==oe.length||K[0]!==t.COLOR_ATTACHMENT0){for(let Pe=0,qe=oe.length;Pe<qe;Pe++)K[Pe]=t.COLOR_ATTACHMENT0+Pe;K.length=oe.length,Z=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,Z=!0);Z&&t.drawBuffers(K)}function Xe(I){return g!==I?(t.useProgram(I),g=I,!0):!1}const U={[xr]:t.FUNC_ADD,[lS]:t.FUNC_SUBTRACT,[cS]:t.FUNC_REVERSE_SUBTRACT};U[uS]=t.MIN,U[dS]=t.MAX;const Ge={[fS]:t.ZERO,[hS]:t.ONE,[pS]:t.SRC_COLOR,[Rd]:t.SRC_ALPHA,[yS]:t.SRC_ALPHA_SATURATE,[vS]:t.DST_COLOR,[gS]:t.DST_ALPHA,[mS]:t.ONE_MINUS_SRC_COLOR,[Pd]:t.ONE_MINUS_SRC_ALPHA,[_S]:t.ONE_MINUS_DST_COLOR,[xS]:t.ONE_MINUS_DST_ALPHA,[SS]:t.CONSTANT_COLOR,[MS]:t.ONE_MINUS_CONSTANT_COLOR,[wS]:t.CONSTANT_ALPHA,[ES]:t.ONE_MINUS_CONSTANT_ALPHA};function ze(I,xe,K,Z,oe,Pe,qe,yt,Nt,tt){if(I===Xi){_===!0&&(ue(t.BLEND),_=!1);return}if(_===!1&&(pe(t.BLEND),_=!0),I!==oS){if(I!==y||tt!==N){if((m!==xr||v!==xr)&&(t.blendEquation(t.FUNC_ADD),m=xr,v=xr),tt)switch(I){case Ts:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xs:t.blendFunc(t.ONE,t.ONE);break;case mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ts:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xs:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}d=null,x=null,E=null,R=null,C.set(0,0,0),S=0,y=I,N=tt}return}oe=oe||xe,Pe=Pe||K,qe=qe||Z,(xe!==m||oe!==v)&&(t.blendEquationSeparate(U[xe],U[oe]),m=xe,v=oe),(K!==d||Z!==x||Pe!==E||qe!==R)&&(t.blendFuncSeparate(Ge[K],Ge[Z],Ge[Pe],Ge[qe]),d=K,x=Z,E=Pe,R=qe),(yt.equals(C)===!1||Nt!==S)&&(t.blendColor(yt.r,yt.g,yt.b,Nt),C.copy(yt),S=Nt),y=I,N=!1}function st(I,xe){I.side===di?ue(t.CULL_FACE):pe(t.CULL_FACE);let K=I.side===ln;xe&&(K=!K),k(K),I.blending===Ts&&I.transparent===!1?ze(Xi):ze(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const Z=I.stencilWrite;a.setTest(Z),Z&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ie(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function k(I){T!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),T=I)}function ce(I){I!==rS?(pe(t.CULL_FACE),I!==w&&(I===pp?t.cullFace(t.BACK):I===sS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),w=I}function ge(I){I!==L&&(B&&t.lineWidth(I),L=I)}function ie(I,xe,K){I?(pe(t.POLYGON_OFFSET_FILL),(F!==xe||z!==K)&&(t.polygonOffset(xe,K),F=xe,z=K)):ue(t.POLYGON_OFFSET_FILL)}function Ce(I){I?pe(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function A(I){I===void 0&&(I=t.TEXTURE0+P-1),D!==I&&(t.activeTexture(I),D=I)}function M(I,xe,K){K===void 0&&(D===null?K=t.TEXTURE0+P-1:K=D);let Z=$[K];Z===void 0&&(Z={type:void 0,texture:void 0},$[K]=Z),(Z.type!==I||Z.texture!==xe)&&(D!==K&&(t.activeTexture(K),D=K),t.bindTexture(I,xe||re[I]),Z.type=I,Z.texture=xe)}function G(){const I=$[D];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ke(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function We(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(I){we.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),we.copy(I))}function me(I){Be.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Be.copy(I))}function Oe(I,xe){let K=c.get(xe);K===void 0&&(K=new WeakMap,c.set(xe,K));let Z=K.get(I);Z===void 0&&(Z=t.getUniformBlockIndex(xe,I.name),K.set(I,Z))}function $e(I,xe){const Z=c.get(xe).get(I);o.get(xe)!==Z&&(t.uniformBlockBinding(xe,Z,I.__bindingPointIndex),o.set(xe,Z))}function _t(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},D=null,$={},f={},p=new WeakMap,h=[],g=null,_=!1,y=null,m=null,d=null,x=null,v=null,E=null,R=null,C=new He(0,0,0),S=0,N=!1,T=null,w=null,L=null,F=null,z=null,we.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:pe,disable:ue,bindFramebuffer:Fe,drawBuffers:De,useProgram:Xe,setBlending:ze,setMaterial:st,setFlipSided:k,setCullFace:ce,setLineWidth:ge,setPolygonOffset:ie,setScissorTest:Ce,activeTexture:A,bindTexture:M,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:ee,texImage2D:Me,texImage3D:We,updateUBOMapping:Oe,uniformBlockBinding:$e,texStorage2D:ke,texStorage3D:se,texSubImage2D:te,texSubImage3D:be,compressedTexSubImage2D:fe,compressedTexSubImage3D:he,scissor:Re,viewport:me,reset:_t}}function lT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new je,f=new WeakMap;let p;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,M){return g?new OffscreenCanvas(A,M):Kl("canvas")}function y(A,M,G){let Q=1;const ee=Ce(A);if((ee.width>G||ee.height>G)&&(Q=G/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const te=Math.floor(Q*ee.width),be=Math.floor(Q*ee.height);p===void 0&&(p=_(te,be));const fe=M?_(te,be):p;return fe.width=te,fe.height=be,fe.getContext("2d").drawImage(A,0,0,te,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+te+"x"+be+")."),fe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==Tn&&A.minFilter!==On}function d(A){t.generateMipmap(A)}function x(A,M,G,Q,ee=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let te=M;if(M===t.RED&&(G===t.FLOAT&&(te=t.R32F),G===t.HALF_FLOAT&&(te=t.R16F),G===t.UNSIGNED_BYTE&&(te=t.R8)),M===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(te=t.R8UI),G===t.UNSIGNED_SHORT&&(te=t.R16UI),G===t.UNSIGNED_INT&&(te=t.R32UI),G===t.BYTE&&(te=t.R8I),G===t.SHORT&&(te=t.R16I),G===t.INT&&(te=t.R32I)),M===t.RG&&(G===t.FLOAT&&(te=t.RG32F),G===t.HALF_FLOAT&&(te=t.RG16F),G===t.UNSIGNED_BYTE&&(te=t.RG8)),M===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(te=t.RG8UI),G===t.UNSIGNED_SHORT&&(te=t.RG16UI),G===t.UNSIGNED_INT&&(te=t.RG32UI),G===t.BYTE&&(te=t.RG8I),G===t.SHORT&&(te=t.RG16I),G===t.INT&&(te=t.RG32I)),M===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),M===t.RGBA){const be=ee?Xl:Je.getTransfer(Q);G===t.FLOAT&&(te=t.RGBA32F),G===t.HALF_FLOAT&&(te=t.RGBA16F),G===t.UNSIGNED_BYTE&&(te=be===lt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function v(A,M){let G;return A?M===null||M===Bs||M===Hs?G=t.DEPTH24_STENCIL8:M===ki?G=t.DEPTH32F_STENCIL8:M===Wl&&(G=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Bs||M===Hs?G=t.DEPTH_COMPONENT24:M===ki?G=t.DEPTH_COMPONENT32F:M===Wl&&(G=t.DEPTH_COMPONENT16),G}function E(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Tn&&A.minFilter!==On?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function R(A){const M=A.target;M.removeEventListener("dispose",R),S(M),M.isVideoTexture&&f.delete(M)}function C(A){const M=A.target;M.removeEventListener("dispose",C),T(M)}function S(A){const M=i.get(A);if(M.__webglInit===void 0)return;const G=A.source,Q=h.get(G);if(Q){const ee=Q[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&N(A),Object.keys(Q).length===0&&h.delete(G)}i.remove(A)}function N(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const G=A.source,Q=h.get(G);delete Q[M.__cacheKey],a.memory.textures--}function T(A){const M=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let ee=0;ee<M.__webglFramebuffer[Q].length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[Q][ee]);else t.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)t.deleteFramebuffer(M.__webglFramebuffer[Q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=A.textures;for(let Q=0,ee=G.length;Q<ee;Q++){const te=i.get(G[Q]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),a.memory.textures--),i.remove(G[Q])}i.remove(A)}let w=0;function L(){w=0}function F(){const A=w;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),w+=1,A}function z(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function P(A,M){const G=i.get(A);if(A.isVideoTexture&&ge(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(G,A,M);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+M)}function B(A,M){const G=i.get(A);if(A.version>0&&G.__version!==A.version){Be(G,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+M)}function V(A,M){const G=i.get(A);if(A.version>0&&G.__version!==A.version){Be(G,A,M);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+M)}function Y(A,M){const G=i.get(A);if(A.version>0&&G.__version!==A.version){q(G,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+M)}const D={[Id]:t.REPEAT,[Mr]:t.CLAMP_TO_EDGE,[Ud]:t.MIRRORED_REPEAT},$={[Tn]:t.NEAREST,[BS]:t.NEAREST_MIPMAP_NEAREST,[bo]:t.NEAREST_MIPMAP_LINEAR,[On]:t.LINEAR,[eu]:t.LINEAR_MIPMAP_NEAREST,[wr]:t.LINEAR_MIPMAP_LINEAR},J={[nM]:t.NEVER,[lM]:t.ALWAYS,[iM]:t.LESS,[_0]:t.LEQUAL,[rM]:t.EQUAL,[oM]:t.GEQUAL,[sM]:t.GREATER,[aM]:t.NOTEQUAL};function le(A,M){if(M.type===ki&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===On||M.magFilter===eu||M.magFilter===bo||M.magFilter===wr||M.minFilter===On||M.minFilter===eu||M.minFilter===bo||M.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,D[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,D[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,D[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,$[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,$[M.minFilter]),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Tn||M.minFilter!==bo&&M.minFilter!==wr||M.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function we(A,M){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",R));const Q=M.source;let ee=h.get(Q);ee===void 0&&(ee={},h.set(Q,ee));const te=z(M);if(te!==A.__cacheKey){ee[te]===void 0&&(ee[te]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ee[te].usedTimes++;const be=ee[A.__cacheKey];be!==void 0&&(ee[A.__cacheKey].usedTimes--,be.usedTimes===0&&N(M)),A.__cacheKey=te,A.__webglTexture=ee[te].texture}return G}function Be(A,M,G){let Q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=t.TEXTURE_3D);const ee=we(A,M),te=M.source;n.bindTexture(Q,A.__webglTexture,t.TEXTURE0+G);const be=i.get(te);if(te.version!==be.__version||ee===!0){n.activeTexture(t.TEXTURE0+G);const fe=Je.getPrimaries(Je.workingColorSpace),he=M.colorSpace===Ii?null:Je.getPrimaries(M.colorSpace),ke=M.colorSpace===Ii||fe===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let se=y(M.image,!1,r.maxTextureSize);se=ie(M,se);const Me=s.convert(M.format,M.colorSpace),We=s.convert(M.type);let Re=x(M.internalFormat,Me,We,M.colorSpace,M.isVideoTexture);le(Q,M);let me;const Oe=M.mipmaps,$e=M.isVideoTexture!==!0,_t=be.__version===void 0||ee===!0,I=te.dataReady,xe=E(M,se);if(M.isDepthTexture)Re=v(M.format===Vs,M.type),_t&&($e?n.texStorage2D(t.TEXTURE_2D,1,Re,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Re,se.width,se.height,0,Me,We,null));else if(M.isDataTexture)if(Oe.length>0){$e&&_t&&n.texStorage2D(t.TEXTURE_2D,xe,Re,Oe[0].width,Oe[0].height);for(let K=0,Z=Oe.length;K<Z;K++)me=Oe[K],$e?I&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,me.width,me.height,Me,We,me.data):n.texImage2D(t.TEXTURE_2D,K,Re,me.width,me.height,0,Me,We,me.data);M.generateMipmaps=!1}else $e?(_t&&n.texStorage2D(t.TEXTURE_2D,xe,Re,se.width,se.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,Me,We,se.data)):n.texImage2D(t.TEXTURE_2D,0,Re,se.width,se.height,0,Me,We,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$e&&_t&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Re,Oe[0].width,Oe[0].height,se.depth);for(let K=0,Z=Oe.length;K<Z;K++)if(me=Oe[K],M.format!==Qn)if(Me!==null)if($e){if(I)if(M.layerUpdates.size>0){for(const oe of M.layerUpdates){const Pe=me.width*me.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,oe,me.width,me.height,1,Me,me.data.slice(Pe*oe,Pe*(oe+1)),0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,me.width,me.height,se.depth,Me,me.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Re,me.width,me.height,se.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,me.width,me.height,se.depth,Me,We,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,Re,me.width,me.height,se.depth,0,Me,We,me.data)}else{$e&&_t&&n.texStorage2D(t.TEXTURE_2D,xe,Re,Oe[0].width,Oe[0].height);for(let K=0,Z=Oe.length;K<Z;K++)me=Oe[K],M.format!==Qn?Me!==null?$e?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,me.width,me.height,Me,me.data):n.compressedTexImage2D(t.TEXTURE_2D,K,Re,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?I&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,me.width,me.height,Me,We,me.data):n.texImage2D(t.TEXTURE_2D,K,Re,me.width,me.height,0,Me,We,me.data)}else if(M.isDataArrayTexture)if($e){if(_t&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Re,se.width,se.height,se.depth),I)if(M.layerUpdates.size>0){let K;switch(We){case t.UNSIGNED_BYTE:switch(Me){case t.ALPHA:K=1;break;case t.LUMINANCE:K=1;break;case t.LUMINANCE_ALPHA:K=2;break;case t.RGB:K=3;break;case t.RGBA:K=4;break;default:throw new Error(`Unknown texel size for format ${Me}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:K=1;break;default:throw new Error(`Unknown texel size for type ${We}.`)}const Z=se.width*se.height*K;for(const oe of M.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,oe,se.width,se.height,1,Me,We,se.data.slice(Z*oe,Z*(oe+1)));M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Me,We,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,se.width,se.height,se.depth,0,Me,We,se.data);else if(M.isData3DTexture)$e?(_t&&n.texStorage3D(t.TEXTURE_3D,xe,Re,se.width,se.height,se.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Me,We,se.data)):n.texImage3D(t.TEXTURE_3D,0,Re,se.width,se.height,se.depth,0,Me,We,se.data);else if(M.isFramebufferTexture){if(_t)if($e)n.texStorage2D(t.TEXTURE_2D,xe,Re,se.width,se.height);else{let K=se.width,Z=se.height;for(let oe=0;oe<xe;oe++)n.texImage2D(t.TEXTURE_2D,oe,Re,K,Z,0,Me,We,null),K>>=1,Z>>=1}}else if(Oe.length>0){if($e&&_t){const K=Ce(Oe[0]);n.texStorage2D(t.TEXTURE_2D,xe,Re,K.width,K.height)}for(let K=0,Z=Oe.length;K<Z;K++)me=Oe[K],$e?I&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Me,We,me):n.texImage2D(t.TEXTURE_2D,K,Re,Me,We,me);M.generateMipmaps=!1}else if($e){if(_t){const K=Ce(se);n.texStorage2D(t.TEXTURE_2D,xe,Re,K.width,K.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,We,se)}else n.texImage2D(t.TEXTURE_2D,0,Re,Me,We,se);m(M)&&d(Q),be.__version=te.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function q(A,M,G){if(M.image.length!==6)return;const Q=we(A,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+G);const te=i.get(ee);if(ee.version!==te.__version||Q===!0){n.activeTexture(t.TEXTURE0+G);const be=Je.getPrimaries(Je.workingColorSpace),fe=M.colorSpace===Ii?null:Je.getPrimaries(M.colorSpace),he=M.colorSpace===Ii||be===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const ke=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,Me=[];for(let Z=0;Z<6;Z++)!ke&&!se?Me[Z]=y(M.image[Z],!0,r.maxCubemapSize):Me[Z]=se?M.image[Z].image:M.image[Z],Me[Z]=ie(M,Me[Z]);const We=Me[0],Re=s.convert(M.format,M.colorSpace),me=s.convert(M.type),Oe=x(M.internalFormat,Re,me,M.colorSpace),$e=M.isVideoTexture!==!0,_t=te.__version===void 0||Q===!0,I=ee.dataReady;let xe=E(M,We);le(t.TEXTURE_CUBE_MAP,M);let K;if(ke){$e&&_t&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Oe,We.width,We.height);for(let Z=0;Z<6;Z++){K=Me[Z].mipmaps;for(let oe=0;oe<K.length;oe++){const Pe=K[oe];M.format!==Qn?Re!==null?$e?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,0,0,Pe.width,Pe.height,Re,Pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,Oe,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,0,0,Pe.width,Pe.height,Re,me,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,Oe,Pe.width,Pe.height,0,Re,me,Pe.data)}}}else{if(K=M.mipmaps,$e&&_t){K.length>0&&xe++;const Z=Ce(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Oe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(se){$e?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Me[Z].width,Me[Z].height,Re,me,Me[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,Me[Z].width,Me[Z].height,0,Re,me,Me[Z].data);for(let oe=0;oe<K.length;oe++){const qe=K[oe].image[Z].image;$e?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,0,0,qe.width,qe.height,Re,me,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,Oe,qe.width,qe.height,0,Re,me,qe.data)}}else{$e?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Re,me,Me[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,Re,me,Me[Z]);for(let oe=0;oe<K.length;oe++){const Pe=K[oe];$e?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,0,0,Re,me,Pe.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,Oe,Re,me,Pe.image[Z])}}}m(M)&&d(t.TEXTURE_CUBE_MAP),te.__version=ee.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function re(A,M,G,Q,ee,te){const be=s.convert(G.format,G.colorSpace),fe=s.convert(G.type),he=x(G.internalFormat,be,fe,G.colorSpace);if(!i.get(M).__hasExternalTextures){const se=Math.max(1,M.width>>te),Me=Math.max(1,M.height>>te);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,te,he,se,Me,M.depth,0,be,fe,null):n.texImage2D(ee,te,he,se,Me,0,be,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),ce(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ee,i.get(G).__webglTexture,0,k(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ee,i.get(G).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(A,M,G){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer){const Q=M.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,te=v(M.stencilBuffer,ee),be=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=k(M);ce(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,te,M.width,M.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,te,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,te,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,A)}else{const Q=M.textures;for(let ee=0;ee<Q.length;ee++){const te=Q[ee],be=s.convert(te.format,te.colorSpace),fe=s.convert(te.type),he=x(te.internalFormat,be,fe,te.colorSpace),ke=k(M);G&&ce(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,he,M.width,M.height):ce(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ke,he,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,he,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),P(M.depthTexture,0);const Q=i.get(M.depthTexture).__webglTexture,ee=k(M);if(M.depthTexture.format===Cs)ce(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Vs)ce(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Fe(A){const M=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ue(M.__webglFramebuffer,A)}else if(G){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]=t.createRenderbuffer(),pe(M.__webglDepthbuffer[Q],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),pe(M.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(A,M,G){const Q=i.get(A);M!==void 0&&re(Q.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Fe(A)}function Xe(A){const M=A.texture,G=i.get(A),Q=i.get(M);A.addEventListener("dispose",C);const ee=A.textures,te=A.isWebGLCubeRenderTarget===!0,be=ee.length>1;if(be||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=M.version,a.memory.textures++),te){G.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[fe]=[];for(let he=0;he<M.mipmaps.length;he++)G.__webglFramebuffer[fe][he]=t.createFramebuffer()}else G.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)G.__webglFramebuffer[fe]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(be)for(let fe=0,he=ee.length;fe<he;fe++){const ke=i.get(ee[fe]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&ce(A)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let fe=0;fe<ee.length;fe++){const he=ee[fe];G.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[fe]);const ke=s.convert(he.format,he.colorSpace),se=s.convert(he.type),Me=x(he.internalFormat,ke,se,he.colorSpace,A.isXRRenderTarget===!0),We=k(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,Me,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,G.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),pe(G.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),le(t.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let he=0;he<M.mipmaps.length;he++)re(G.__webglFramebuffer[fe][he],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,he);else re(G.__webglFramebuffer[fe],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(M)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let fe=0,he=ee.length;fe<he;fe++){const ke=ee[fe],se=i.get(ke);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),le(t.TEXTURE_2D,ke),re(G.__webglFramebuffer,A,ke,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(ke)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,Q.__webglTexture),le(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let he=0;he<M.mipmaps.length;he++)re(G.__webglFramebuffer[he],A,M,t.COLOR_ATTACHMENT0,fe,he);else re(G.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,fe,0);m(M)&&d(fe),n.unbindTexture()}A.depthBuffer&&Fe(A)}function U(A){const M=A.textures;for(let G=0,Q=M.length;G<Q;G++){const ee=M[G];if(m(ee)){const te=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,be=i.get(ee).__webglTexture;n.bindTexture(te,be),d(te),n.unbindTexture()}}}const Ge=[],ze=[];function st(A){if(A.samples>0){if(ce(A)===!1){const M=A.textures,G=A.width,Q=A.height;let ee=t.COLOR_BUFFER_BIT;const te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(A),fe=M.length>1;if(fe)for(let he=0;he<M.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let he=0;he<M.length;he++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[he]);const ke=i.get(M[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ke,0)}t.blitFramebuffer(0,0,G,Q,0,0,G,Q,ee,t.NEAREST),c===!0&&(Ge.length=0,ze.length=0,Ge.push(t.COLOR_ATTACHMENT0+he),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ge.push(te),ze.push(te),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ze)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ge))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let he=0;he<M.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,be.__webglColorRenderbuffer[he]);const ke=i.get(M[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const M=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function k(A){return Math.min(r.maxSamples,A.samples)}function ce(A){const M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ge(A){const M=a.render.frame;f.get(A)!==M&&(f.set(A,M),A.update())}function ie(A,M){const G=A.colorSpace,Q=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==rr&&G!==Ii&&(Je.getTransfer(G)===lt?(Q!==Qn||ee!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function Ce(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=P,this.setTexture2DArray=B,this.setTexture3D=V,this.setTextureCube=Y,this.rebindTextures=De,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=re,this.useMultisampledRTT=ce}function cT(t,e){function n(i,r=Ii){let s;const a=Je.getTransfer(r);if(i===Ji)return t.UNSIGNED_BYTE;if(i===p0)return t.UNSIGNED_SHORT_4_4_4_4;if(i===m0)return t.UNSIGNED_SHORT_5_5_5_1;if(i===GS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===HS)return t.BYTE;if(i===VS)return t.SHORT;if(i===Wl)return t.UNSIGNED_SHORT;if(i===h0)return t.INT;if(i===Bs)return t.UNSIGNED_INT;if(i===ki)return t.FLOAT;if(i===vc)return t.HALF_FLOAT;if(i===WS)return t.ALPHA;if(i===XS)return t.RGB;if(i===Qn)return t.RGBA;if(i===$S)return t.LUMINANCE;if(i===YS)return t.LUMINANCE_ALPHA;if(i===Cs)return t.DEPTH_COMPONENT;if(i===Vs)return t.DEPTH_STENCIL;if(i===qS)return t.RED;if(i===g0)return t.RED_INTEGER;if(i===KS)return t.RG;if(i===x0)return t.RG_INTEGER;if(i===v0)return t.RGBA_INTEGER;if(i===tu||i===nu||i===iu||i===ru)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===tu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===iu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ru)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===tu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===iu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ru)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xp||i===vp||i===_p||i===yp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===xp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_p)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sp||i===Mp||i===wp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sp||i===Mp)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===wp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ep||i===bp||i===Tp||i===Cp||i===Ap||i===Np||i===Rp||i===Pp||i===Lp||i===Dp||i===Ip||i===Up||i===Fp||i===kp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ep)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ap)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Np)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ip)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Up)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kp)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===su||i===Op||i===zp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===su)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Op)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ZS||i===jp||i===Bp||i===Hp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===su)return s.COMPRESSED_RED_RGTC1_EXT;if(i===jp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class uT extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ya extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dT={type:"move"};class Lu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ya,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ya,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ya,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),d=this._getHandJoint(u,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const f=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],h=f.position.distanceTo(p.position),g=.02,_=.005;u.inputState.pinching&&h>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dT)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ya;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const fT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hT=`
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

}`;class pT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Qt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new er({vertexShader:fT,fragmentShader:hT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Jn(new Sc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class mT extends Ys{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,f=null,p=null,h=null,g=null,_=null;const y=new pT,m=n.getContextAttributes();let d=null,x=null;const v=[],E=[],R=new je;let C=null;const S=new En;S.layers.enable(1),S.viewport=new Ut;const N=new En;N.layers.enable(2),N.viewport=new Ut;const T=[S,N],w=new uT;w.layers.enable(1),w.layers.enable(2);let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let re=v[q];return re===void 0&&(re=new Lu,v[q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(q){let re=v[q];return re===void 0&&(re=new Lu,v[q]=re),re.getGripSpace()},this.getHand=function(q){let re=v[q];return re===void 0&&(re=new Lu,v[q]=re),re.getHandSpace()};function z(q){const re=E.indexOf(q.inputSource);if(re===-1)return;const pe=v[re];pe!==void 0&&(pe.update(q.inputSource,q.frame,u||a),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function P(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",B);for(let q=0;q<v.length;q++){const re=E[q];re!==null&&(E[q]=null,v[q].disconnect(re))}L=null,F=null,y.reset(),e.setRenderTarget(d),g=null,h=null,p=null,r=null,x=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",P),r.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),x=new Pr(g.framebufferWidth,g.framebufferHeight,{format:Qn,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,pe=null,ue=null;m.depth&&(ue=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=m.stencil?Vs:Cs,pe=m.stencil?Hs:Bs);const Fe={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};p=new XRWebGLBinding(r,n),h=p.createProjectionLayer(Fe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Pr(h.textureWidth,h.textureHeight,{format:Qn,type:Ji,depthTexture:new P0(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(q){for(let re=0;re<q.removed.length;re++){const pe=q.removed[re],ue=E.indexOf(pe);ue>=0&&(E[ue]=null,v[ue].disconnect(pe))}for(let re=0;re<q.added.length;re++){const pe=q.added[re];let ue=E.indexOf(pe);if(ue===-1){for(let De=0;De<v.length;De++)if(De>=E.length){E.push(pe),ue=De;break}else if(E[De]===null){E[De]=pe,ue=De;break}if(ue===-1)break}const Fe=v[ue];Fe&&Fe.connect(pe)}}const V=new H,Y=new H;function D(q,re,pe){V.setFromMatrixPosition(re.matrixWorld),Y.setFromMatrixPosition(pe.matrixWorld);const ue=V.distanceTo(Y),Fe=re.projectionMatrix.elements,De=pe.projectionMatrix.elements,Xe=Fe[14]/(Fe[10]-1),U=Fe[14]/(Fe[10]+1),Ge=(Fe[9]+1)/Fe[5],ze=(Fe[9]-1)/Fe[5],st=(Fe[8]-1)/Fe[0],k=(De[8]+1)/De[0],ce=Xe*st,ge=Xe*k,ie=ue/(-st+k),Ce=ie*-st;re.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ce),q.translateZ(ie),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const A=Xe+ie,M=U+ie,G=ce-Ce,Q=ge+(ue-Ce),ee=Ge*U/M*A,te=ze*U/M*A;q.projectionMatrix.makePerspective(G,Q,ee,te,A,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function $(q,re){re===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(re.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;y.texture!==null&&(q.near=y.depthNear,q.far=y.depthFar),w.near=N.near=S.near=q.near,w.far=N.far=S.far=q.far,(L!==w.near||F!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,F=w.far,S.near=L,S.far=F,N.near=L,N.far=F,S.updateProjectionMatrix(),N.updateProjectionMatrix(),q.updateProjectionMatrix());const re=q.parent,pe=w.cameras;$(w,re);for(let ue=0;ue<pe.length;ue++)$(pe[ue],re);pe.length===2?D(w,S,N):w.projectionMatrix.copy(S.projectionMatrix),J(q,w,re)};function J(q,re,pe){pe===null?q.matrix.copy(re.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply(re.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=kd*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&g===null))return c},this.setFoveation=function(q){c=q,h!==null&&(h.fixedFoveation=q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(w)};let le=null;function we(q,re){if(f=re.getViewerPose(u||a),_=re,f!==null){const pe=f.views;g!==null&&(e.setRenderTargetFramebuffer(x,g.framebuffer),e.setRenderTarget(x));let ue=!1;pe.length!==w.cameras.length&&(w.cameras.length=0,ue=!0);for(let De=0;De<pe.length;De++){const Xe=pe[De];let U=null;if(g!==null)U=g.getViewport(Xe);else{const ze=p.getViewSubImage(h,Xe);U=ze.viewport,De===0&&(e.setRenderTargetTextures(x,ze.colorTexture,h.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(x))}let Ge=T[De];Ge===void 0&&(Ge=new En,Ge.layers.enable(De),Ge.viewport=new Ut,T[De]=Ge),Ge.matrix.fromArray(Xe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Xe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(U.x,U.y,U.width,U.height),De===0&&(w.matrix.copy(Ge.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ue===!0&&w.cameras.push(Ge)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const De=p.getDepthInformation(pe[0]);De&&De.isValid&&De.texture&&y.init(e,De,r.renderState)}}for(let pe=0;pe<v.length;pe++){const ue=E[pe],Fe=v[pe];ue!==null&&Fe!==void 0&&Fe.update(ue,re,u||a)}le&&le(q,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),_=null}const Be=new R0;Be.setAnimationLoop(we),this.setAnimationLoop=function(q){le=q},this.dispose=function(){}}}const fr=new yi,gT=new pt;function xT(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,T0(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,x,v,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),p(m,d)):d.isMeshPhongMaterial?(s(m,d),f(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&g(m,d,E)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),y(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,x,v):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===ln&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===ln&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d),v=x.envMap,E=x.envMapRotation;v&&(m.envMap.value=v,fr.copy(E),fr.x*=-1,fr.y*=-1,fr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),m.envMapRotation.value.setFromMatrix4(gT.makeRotationFromEuler(fr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,x,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=v*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ln&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vT(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,v){const E=v.program;i.uniformBlockBinding(x,E)}function u(x,v){let E=r[x.id];E===void 0&&(_(x),E=f(x),r[x.id]=E,x.addEventListener("dispose",m));const R=v.program;i.updateUBOMapping(x,R);const C=e.render.frame;s[x.id]!==C&&(h(x),s[x.id]=C)}function f(x){const v=p();x.__bindingPointIndex=v;const E=t.createBuffer(),R=x.__size,C=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,R,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,E),E}function p(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=r[x.id],E=x.uniforms,R=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,S=E.length;C<S;C++){const N=Array.isArray(E[C])?E[C]:[E[C]];for(let T=0,w=N.length;T<w;T++){const L=N[T];if(g(L,C,T,R)===!0){const F=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let P=0;for(let B=0;B<z.length;B++){const V=z[B],Y=y(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,F+P,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(x,v,E,R){const C=x.value,S=v+"_"+E;if(R[S]===void 0)return typeof C=="number"||typeof C=="boolean"?R[S]=C:R[S]=C.clone(),!0;{const N=R[S];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return R[S]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function _(x){const v=x.uniforms;let E=0;const R=16;for(let S=0,N=v.length;S<N;S++){const T=Array.isArray(v[S])?v[S]:[v[S]];for(let w=0,L=T.length;w<L;w++){const F=T[w],z=Array.isArray(F.value)?F.value:[F.value];for(let P=0,B=z.length;P<B;P++){const V=z[P],Y=y(V),D=E%R;D!==0&&R-D<Y.boundary&&(E+=R-D),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=Y.storage}}}const C=E%R;return C>0&&(E+=R-C),x.__size=E,x.__cache={},this}function y(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const x in r)t.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:c,update:u,dispose:d}}class _T{constructor(e={}){const{canvas:n=uM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const g=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const d=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this.toneMapping=$i,this.toneMappingExposure=1;const v=this;let E=!1,R=0,C=0,S=null,N=-1,T=null;const w=new Ut,L=new Ut;let F=null;const z=new He(0);let P=0,B=n.width,V=n.height,Y=1,D=null,$=null;const J=new Ut(0,0,B,V),le=new Ut(0,0,B,V);let we=!1;const Be=new N0;let q=!1,re=!1;const pe=new pt,ue=new H,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function Xe(){return S===null?Y:1}let U=i;function Ge(b,O){return n.getContext(b,O)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${kf}`),n.addEventListener("webglcontextlost",xe,!1),n.addEventListener("webglcontextrestored",K,!1),n.addEventListener("webglcontextcreationerror",Z,!1),U===null){const O="webgl2";if(U=Ge(O,b),U===null)throw Ge(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ze,st,k,ce,ge,ie,Ce,A,M,G,Q,ee,te,be,fe,he,ke,se,Me,We,Re,me,Oe,$e;function _t(){ze=new Cb(U),ze.init(),me=new cT(U,ze),st=new yb(U,ze,e,me),k=new oT(U),ce=new Rb(U),ge=new $1,ie=new lT(U,ze,k,ge,st,me,ce),Ce=new Mb(v),A=new Tb(v),M=new FM(U),Oe=new vb(U,M),G=new Ab(U,M,ce,Oe),Q=new Lb(U,G,M,ce),Me=new Pb(U,st,ie),he=new Sb(ge),ee=new X1(v,Ce,A,ze,st,Oe,he),te=new xT(v,ge),be=new q1,fe=new tT(ze),se=new xb(v,Ce,A,k,Q,h,c),ke=new aT(v,Q,st),$e=new vT(U,ce,st,k),We=new _b(U,ze,ce),Re=new Nb(U,ze,ce),ce.programs=ee.programs,v.capabilities=st,v.extensions=ze,v.properties=ge,v.renderLists=be,v.shadowMap=ke,v.state=k,v.info=ce}_t();const I=new mT(v,U);this.xr=I,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=ze.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ze.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(B,V,!1))},this.getSize=function(b){return b.set(B,V)},this.setSize=function(b,O,W=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=b,V=O,n.width=Math.floor(b*Y),n.height=Math.floor(O*Y),W===!0&&(n.style.width=b+"px",n.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(B*Y,V*Y).floor()},this.setDrawingBufferSize=function(b,O,W){B=b,V=O,Y=W,n.width=Math.floor(b*W),n.height=Math.floor(O*W),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(J)},this.setViewport=function(b,O,W,X){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,O,W,X),k.viewport(w.copy(J).multiplyScalar(Y).round())},this.getScissor=function(b){return b.copy(le)},this.setScissor=function(b,O,W,X){b.isVector4?le.set(b.x,b.y,b.z,b.w):le.set(b,O,W,X),k.scissor(L.copy(le).multiplyScalar(Y).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(b){k.setScissorTest(we=b)},this.setOpaqueSort=function(b){D=b},this.setTransparentSort=function(b){$=b},this.getClearColor=function(b){return b.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(b=!0,O=!0,W=!0){let X=0;if(b){let j=!1;if(S!==null){const ae=S.texture.format;j=ae===v0||ae===x0||ae===g0}if(j){const ae=S.texture.type,ve=ae===Ji||ae===Bs||ae===Wl||ae===Hs||ae===p0||ae===m0,ye=se.getClearColor(),Se=se.getClearAlpha(),Ae=ye.r,Ne=ye.g,Te=ye.b;ve?(g[0]=Ae,g[1]=Ne,g[2]=Te,g[3]=Se,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Ae,_[1]=Ne,_[2]=Te,_[3]=Se,U.clearBufferiv(U.COLOR,0,_))}else X|=U.COLOR_BUFFER_BIT}O&&(X|=U.DEPTH_BUFFER_BIT),W&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",xe,!1),n.removeEventListener("webglcontextrestored",K,!1),n.removeEventListener("webglcontextcreationerror",Z,!1),be.dispose(),fe.dispose(),ge.dispose(),Ce.dispose(),A.dispose(),Q.dispose(),Oe.dispose(),$e.dispose(),ee.dispose(),I.dispose(),I.removeEventListener("sessionstart",Gn),I.removeEventListener("sessionend",Wn),sr.stop()};function xe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=ce.autoReset,O=ke.enabled,W=ke.autoUpdate,X=ke.needsUpdate,j=ke.type;_t(),ce.autoReset=b,ke.enabled=O,ke.autoUpdate=W,ke.needsUpdate=X,ke.type=j}function Z(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function oe(b){const O=b.target;O.removeEventListener("dispose",oe),Pe(O)}function Pe(b){qe(b),ge.remove(b)}function qe(b){const O=ge.get(b).programs;O!==void 0&&(O.forEach(function(W){ee.releaseProgram(W)}),b.isShaderMaterial&&ee.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,W,X,j,ae){O===null&&(O=Fe);const ve=j.isMesh&&j.matrixWorld.determinant()<0,ye=B0(b,O,W,X,j);k.setMaterial(X,ve);let Se=W.index,Ae=1;if(X.wireframe===!0){if(Se=G.getWireframeAttribute(W),Se===void 0)return;Ae=2}const Ne=W.drawRange,Te=W.attributes.position;let Ze=Ne.start*Ae,gt=(Ne.start+Ne.count)*Ae;ae!==null&&(Ze=Math.max(Ze,ae.start*Ae),gt=Math.min(gt,(ae.start+ae.count)*Ae)),Se!==null?(Ze=Math.max(Ze,0),gt=Math.min(gt,Se.count)):Te!=null&&(Ze=Math.max(Ze,0),gt=Math.min(gt,Te.count));const xt=gt-Ze;if(xt<0||xt===1/0)return;Oe.setup(j,X,ye,W,Se);let un,Qe=We;if(Se!==null&&(un=M.get(Se),Qe=Re,Qe.setIndex(un)),j.isMesh)X.wireframe===!0?(k.setLineWidth(X.wireframeLinewidth*Xe()),Qe.setMode(U.LINES)):Qe.setMode(U.TRIANGLES);else if(j.isLine){let Ee=X.linewidth;Ee===void 0&&(Ee=1),k.setLineWidth(Ee*Xe()),j.isLineSegments?Qe.setMode(U.LINES):j.isLineLoop?Qe.setMode(U.LINE_LOOP):Qe.setMode(U.LINE_STRIP)}else j.isPoints?Qe.setMode(U.POINTS):j.isSprite&&Qe.setMode(U.TRIANGLES);if(j.isBatchedMesh)j._multiDrawInstances!==null?Qe.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances):Qe.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)Qe.renderInstances(Ze,xt,j.count);else if(W.isInstancedBufferGeometry){const Ee=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,$t=Math.min(W.instanceCount,Ee);Qe.renderInstances(Ze,xt,$t)}else Qe.render(Ze,xt)};function yt(b,O,W){b.transparent===!0&&b.side===di&&b.forceSinglePass===!1?(b.side=ln,b.needsUpdate=!0,ro(b,O,W),b.side=Qi,b.needsUpdate=!0,ro(b,O,W),b.side=di):ro(b,O,W)}this.compile=function(b,O,W=null){W===null&&(W=b),m=fe.get(W),m.init(O),x.push(m),W.traverseVisible(function(j){j.isLight&&j.layers.test(O.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),b!==W&&b.traverseVisible(function(j){j.isLight&&j.layers.test(O.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights();const X=new Set;return b.traverse(function(j){const ae=j.material;if(ae)if(Array.isArray(ae))for(let ve=0;ve<ae.length;ve++){const ye=ae[ve];yt(ye,W,j),X.add(ye)}else yt(ae,W,j),X.add(ae)}),x.pop(),m=null,X},this.compileAsync=function(b,O,W=null){const X=this.compile(b,O,W);return new Promise(j=>{function ae(){if(X.forEach(function(ve){ge.get(ve).currentProgram.isReady()&&X.delete(ve)}),X.size===0){j(b);return}setTimeout(ae,10)}ze.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Nt=null;function tt(b){Nt&&Nt(b)}function Gn(){sr.stop()}function Wn(){sr.start()}const sr=new R0;sr.setAnimationLoop(tt),typeof self<"u"&&sr.setContext(self),this.setAnimationLoop=function(b){Nt=b,I.setAnimationLoop(b),b===null?sr.stop():sr.start()},I.addEventListener("sessionstart",Gn),I.addEventListener("sessionend",Wn),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(I.cameraAutoUpdate===!0&&I.updateCamera(O),O=I.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,O,S),m=fe.get(b,x.length),m.init(O),x.push(m),pe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Be.setFromProjectionMatrix(pe),re=this.localClippingEnabled,q=he.init(this.clippingPlanes,re),y=be.get(b,d.length),y.init(),d.push(y),I.enabled===!0&&I.isPresenting===!0){const ae=v.xr.getDepthSensingMesh();ae!==null&&wc(ae,O,-1/0,v.sortObjects)}wc(b,O,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(D,$),De=I.enabled===!1||I.isPresenting===!1||I.hasDepthSensing()===!1,De&&se.addToRenderList(y,b),this.info.render.frame++,q===!0&&he.beginShadows();const W=m.state.shadowsArray;ke.render(W,b,O),q===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=y.opaque,j=y.transmissive;if(m.setupLights(),O.isArrayCamera){const ae=O.cameras;if(j.length>0)for(let ve=0,ye=ae.length;ve<ye;ve++){const Se=ae[ve];Xf(X,j,b,Se)}De&&se.render(b);for(let ve=0,ye=ae.length;ve<ye;ve++){const Se=ae[ve];Wf(y,b,Se,Se.viewport)}}else j.length>0&&Xf(X,j,b,O),De&&se.render(b),Wf(y,b,O);S!==null&&(ie.updateMultisampleRenderTarget(S),ie.updateRenderTargetMipmap(S)),b.isScene===!0&&b.onAfterRender(v,b,O),Oe.resetDefaultState(),N=-1,T=null,x.pop(),x.length>0?(m=x[x.length-1],q===!0&&he.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function wc(b,O,W,X){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Be.intersectsSprite(b)){X&&ue.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pe);const ve=Q.update(b),ye=b.material;ye.visible&&y.push(b,ve,ye,W,ue.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Be.intersectsObject(b))){const ve=Q.update(b),ye=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ue.copy(b.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),ue.copy(ve.boundingSphere.center)),ue.applyMatrix4(b.matrixWorld).applyMatrix4(pe)),Array.isArray(ye)){const Se=ve.groups;for(let Ae=0,Ne=Se.length;Ae<Ne;Ae++){const Te=Se[Ae],Ze=ye[Te.materialIndex];Ze&&Ze.visible&&y.push(b,ve,Ze,W,ue.z,Te)}}else ye.visible&&y.push(b,ve,ye,W,ue.z,null)}}const ae=b.children;for(let ve=0,ye=ae.length;ve<ye;ve++)wc(ae[ve],O,W,X)}function Wf(b,O,W,X){const j=b.opaque,ae=b.transmissive,ve=b.transparent;m.setupLightsView(W),q===!0&&he.setGlobalState(v.clippingPlanes,W),X&&k.viewport(w.copy(X)),j.length>0&&io(j,O,W),ae.length>0&&io(ae,O,W),ve.length>0&&io(ve,O,W),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Xf(b,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new Pr(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?vc:Ji,minFilter:wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ae=m.state.transmissionRenderTarget[X.id],ve=X.viewport||w;ae.setSize(ve.z,ve.w);const ye=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor(z),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),De?se.render(W):v.clear();const Se=v.toneMapping;v.toneMapping=$i;const Ae=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),q===!0&&he.setGlobalState(v.clippingPlanes,X),io(b,W,X),ie.updateMultisampleRenderTarget(ae),ie.updateRenderTargetMipmap(ae),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Te=0,Ze=O.length;Te<Ze;Te++){const gt=O[Te],xt=gt.object,un=gt.geometry,Qe=gt.material,Ee=gt.group;if(Qe.side===di&&xt.layers.test(X.layers)){const $t=Qe.side;Qe.side=ln,Qe.needsUpdate=!0,$f(xt,W,X,un,Qe,Ee),Qe.side=$t,Qe.needsUpdate=!0,Ne=!0}}Ne===!0&&(ie.updateMultisampleRenderTarget(ae),ie.updateRenderTargetMipmap(ae))}v.setRenderTarget(ye),v.setClearColor(z,P),Ae!==void 0&&(X.viewport=Ae),v.toneMapping=Se}function io(b,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let j=0,ae=b.length;j<ae;j++){const ve=b[j],ye=ve.object,Se=ve.geometry,Ae=X===null?ve.material:X,Ne=ve.group;ye.layers.test(W.layers)&&$f(ye,O,W,Se,Ae,Ne)}}function $f(b,O,W,X,j,ae){b.onBeforeRender(v,O,W,X,j,ae),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(v,O,W,X,b,ae),j.transparent===!0&&j.side===di&&j.forceSinglePass===!1?(j.side=ln,j.needsUpdate=!0,v.renderBufferDirect(W,O,X,j,b,ae),j.side=Qi,j.needsUpdate=!0,v.renderBufferDirect(W,O,X,j,b,ae),j.side=di):v.renderBufferDirect(W,O,X,j,b,ae),b.onAfterRender(v,O,W,X,j,ae)}function ro(b,O,W){O.isScene!==!0&&(O=Fe);const X=ge.get(b),j=m.state.lights,ae=m.state.shadowsArray,ve=j.state.version,ye=ee.getParameters(b,j.state,ae,O,W),Se=ee.getProgramCacheKey(ye);let Ae=X.programs;X.environment=b.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(b.isMeshStandardMaterial?A:Ce).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Ae===void 0&&(b.addEventListener("dispose",oe),Ae=new Map,X.programs=Ae);let Ne=Ae.get(Se);if(Ne!==void 0){if(X.currentProgram===Ne&&X.lightsStateVersion===ve)return qf(b,ye),Ne}else ye.uniforms=ee.getUniforms(b),b.onBuild(W,ye,v),b.onBeforeCompile(ye,v),Ne=ee.acquireProgram(ye,Se),Ae.set(Se,Ne),X.uniforms=ye.uniforms;const Te=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Te.clippingPlanes=he.uniform),qf(b,ye),X.needsLights=V0(b),X.lightsStateVersion=ve,X.needsLights&&(Te.ambientLightColor.value=j.state.ambient,Te.lightProbe.value=j.state.probe,Te.directionalLights.value=j.state.directional,Te.directionalLightShadows.value=j.state.directionalShadow,Te.spotLights.value=j.state.spot,Te.spotLightShadows.value=j.state.spotShadow,Te.rectAreaLights.value=j.state.rectArea,Te.ltc_1.value=j.state.rectAreaLTC1,Te.ltc_2.value=j.state.rectAreaLTC2,Te.pointLights.value=j.state.point,Te.pointLightShadows.value=j.state.pointShadow,Te.hemisphereLights.value=j.state.hemi,Te.directionalShadowMap.value=j.state.directionalShadowMap,Te.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Te.spotShadowMap.value=j.state.spotShadowMap,Te.spotLightMatrix.value=j.state.spotLightMatrix,Te.spotLightMap.value=j.state.spotLightMap,Te.pointShadowMap.value=j.state.pointShadowMap,Te.pointShadowMatrix.value=j.state.pointShadowMatrix),X.currentProgram=Ne,X.uniformsList=null,Ne}function Yf(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=ml.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function qf(b,O){const W=ge.get(b);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function B0(b,O,W,X,j){O.isScene!==!0&&(O=Fe),ie.resetTextureUnits();const ae=O.fog,ve=X.isMeshStandardMaterial?O.environment:null,ye=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:rr,Se=(X.isMeshStandardMaterial?A:Ce).get(X.envMap||ve),Ae=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ne=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Te=!!W.morphAttributes.position,Ze=!!W.morphAttributes.normal,gt=!!W.morphAttributes.color;let xt=$i;X.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(xt=v.toneMapping);const un=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Qe=un!==void 0?un.length:0,Ee=ge.get(X),$t=m.state.lights;if(q===!0&&(re===!0||b!==T)){const yn=b===T&&X.id===N;he.setState(X,b,yn)}let nt=!1;X.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==$t.state.version||Ee.outputColorSpace!==ye||j.isBatchedMesh&&Ee.batching===!1||!j.isBatchedMesh&&Ee.batching===!0||j.isBatchedMesh&&Ee.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ee.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ee.instancing===!1||!j.isInstancedMesh&&Ee.instancing===!0||j.isSkinnedMesh&&Ee.skinning===!1||!j.isSkinnedMesh&&Ee.skinning===!0||j.isInstancedMesh&&Ee.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ee.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ee.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ee.instancingMorph===!1&&j.morphTexture!==null||Ee.envMap!==Se||X.fog===!0&&Ee.fog!==ae||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==he.numPlanes||Ee.numIntersection!==he.numIntersection)||Ee.vertexAlphas!==Ae||Ee.vertexTangents!==Ne||Ee.morphTargets!==Te||Ee.morphNormals!==Ze||Ee.morphColors!==gt||Ee.toneMapping!==xt||Ee.morphTargetsCount!==Qe)&&(nt=!0):(nt=!0,Ee.__version=X.version);let ni=Ee.currentProgram;nt===!0&&(ni=ro(X,O,j));let so=!1,ar=!1,Ec=!1;const Rt=ni.getUniforms(),Mi=Ee.uniforms;if(k.useProgram(ni.program)&&(so=!0,ar=!0,Ec=!0),X.id!==N&&(N=X.id,ar=!0),so||T!==b){Rt.setValue(U,"projectionMatrix",b.projectionMatrix),Rt.setValue(U,"viewMatrix",b.matrixWorldInverse);const yn=Rt.map.cameraPosition;yn!==void 0&&yn.setValue(U,ue.setFromMatrixPosition(b.matrixWorld)),st.logarithmicDepthBuffer&&Rt.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Rt.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),T!==b&&(T=b,ar=!0,Ec=!0)}if(j.isSkinnedMesh){Rt.setOptional(U,j,"bindMatrix"),Rt.setOptional(U,j,"bindMatrixInverse");const yn=j.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Rt.setValue(U,"boneTexture",yn.boneTexture,ie))}j.isBatchedMesh&&(Rt.setOptional(U,j,"batchingTexture"),Rt.setValue(U,"batchingTexture",j._matricesTexture,ie),Rt.setOptional(U,j,"batchingColorTexture"),j._colorsTexture!==null&&Rt.setValue(U,"batchingColorTexture",j._colorsTexture,ie));const bc=W.morphAttributes;if((bc.position!==void 0||bc.normal!==void 0||bc.color!==void 0)&&Me.update(j,W,ni),(ar||Ee.receiveShadow!==j.receiveShadow)&&(Ee.receiveShadow=j.receiveShadow,Rt.setValue(U,"receiveShadow",j.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Mi.envMap.value=Se,Mi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(Mi.envMapIntensity.value=O.environmentIntensity),ar&&(Rt.setValue(U,"toneMappingExposure",v.toneMappingExposure),Ee.needsLights&&H0(Mi,Ec),ae&&X.fog===!0&&te.refreshFogUniforms(Mi,ae),te.refreshMaterialUniforms(Mi,X,Y,V,m.state.transmissionRenderTarget[b.id]),ml.upload(U,Yf(Ee),Mi,ie)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ml.upload(U,Yf(Ee),Mi,ie),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Rt.setValue(U,"center",j.center),Rt.setValue(U,"modelViewMatrix",j.modelViewMatrix),Rt.setValue(U,"normalMatrix",j.normalMatrix),Rt.setValue(U,"modelMatrix",j.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const yn=X.uniformsGroups;for(let Tc=0,G0=yn.length;Tc<G0;Tc++){const Kf=yn[Tc];$e.update(Kf,ni),$e.bind(Kf,ni)}}return ni}function H0(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function V0(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(b,O,W){ge.get(b.texture).__webglTexture=O,ge.get(b.depthTexture).__webglTexture=W;const X=ge.get(b);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const W=ge.get(b);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,W=0){S=b,R=O,C=W;let X=!0,j=null,ae=!1,ve=!1;if(b){const Se=ge.get(b);Se.__useDefaultFramebuffer!==void 0?(k.bindFramebuffer(U.FRAMEBUFFER,null),X=!1):Se.__webglFramebuffer===void 0?ie.setupRenderTarget(b):Se.__hasExternalTextures&&ie.rebindTextures(b,ge.get(b.texture).__webglTexture,ge.get(b.depthTexture).__webglTexture);const Ae=b.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ve=!0);const Ne=ge.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?j=Ne[O][W]:j=Ne[O],ae=!0):b.samples>0&&ie.useMultisampledRTT(b)===!1?j=ge.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?j=Ne[W]:j=Ne,w.copy(b.viewport),L.copy(b.scissor),F=b.scissorTest}else w.copy(J).multiplyScalar(Y).floor(),L.copy(le).multiplyScalar(Y).floor(),F=we;if(k.bindFramebuffer(U.FRAMEBUFFER,j)&&X&&k.drawBuffers(b,j),k.viewport(w),k.scissor(L),k.setScissorTest(F),ae){const Se=ge.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Se.__webglTexture,W)}else if(ve){const Se=ge.get(b.texture),Ae=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.__webglTexture,W||0,Ae)}N=-1},this.readRenderTargetPixels=function(b,O,W,X,j,ae,ve){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye){k.bindFramebuffer(U.FRAMEBUFFER,ye);try{const Se=b.texture,Ae=Se.format,Ne=Se.type;if(!st.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-X&&W>=0&&W<=b.height-j&&U.readPixels(O,W,X,j,me.convert(Ae),me.convert(Ne),ae)}finally{const Se=S!==null?ge.get(S).__webglFramebuffer:null;k.bindFramebuffer(U.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(b,O,W,X,j,ae,ve){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye){k.bindFramebuffer(U.FRAMEBUFFER,ye);try{const Se=b.texture,Ae=Se.format,Ne=Se.type;if(!st.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-X&&W>=0&&W<=b.height-j){const Te=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Te),U.bufferData(U.PIXEL_PACK_BUFFER,ae.byteLength,U.STREAM_READ),U.readPixels(O,W,X,j,me.convert(Ae),me.convert(Ne),0),U.flush();const Ze=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await dM(U,Ze,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,Te),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ae)}finally{U.deleteBuffer(Te),U.deleteSync(Ze)}return ae}}finally{const Se=S!==null?ge.get(S).__webglFramebuffer:null;k.bindFramebuffer(U.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(b,O=null,W=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);const X=Math.pow(2,-W),j=Math.floor(b.image.width*X),ae=Math.floor(b.image.height*X),ve=O!==null?O.x:0,ye=O!==null?O.y:0;ie.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,ve,ye,j,ae),k.unbindTexture()},this.copyTextureToTexture=function(b,O,W=null,X=null,j=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1],O=arguments[2],j=arguments[3]||0,W=null);let ae,ve,ye,Se,Ae,Ne;W!==null?(ae=W.max.x-W.min.x,ve=W.max.y-W.min.y,ye=W.min.x,Se=W.min.y):(ae=b.image.width,ve=b.image.height,ye=0,Se=0),X!==null?(Ae=X.x,Ne=X.y):(Ae=0,Ne=0);const Te=me.convert(O.format),Ze=me.convert(O.type);ie.setTexture2D(O,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const gt=U.getParameter(U.UNPACK_ROW_LENGTH),xt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),un=U.getParameter(U.UNPACK_SKIP_PIXELS),Qe=U.getParameter(U.UNPACK_SKIP_ROWS),Ee=U.getParameter(U.UNPACK_SKIP_IMAGES),$t=b.isCompressedTexture?b.mipmaps[j]:b.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,$t.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,$t.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ye),U.pixelStorei(U.UNPACK_SKIP_ROWS,Se),b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,j,Ae,Ne,ae,ve,Te,Ze,$t.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,j,Ae,Ne,$t.width,$t.height,Te,$t.data):U.texSubImage2D(U.TEXTURE_2D,j,Ae,Ne,Te,Ze,$t),U.pixelStorei(U.UNPACK_ROW_LENGTH,gt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,un),U.pixelStorei(U.UNPACK_SKIP_ROWS,Qe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ee),j===0&&O.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),k.unbindTexture()},this.copyTextureToTexture3D=function(b,O,W=null,X=null,j=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,b=arguments[2],O=arguments[3],j=arguments[4]||0);let ae,ve,ye,Se,Ae,Ne,Te,Ze,gt;const xt=b.isCompressedTexture?b.mipmaps[j]:b.image;W!==null?(ae=W.max.x-W.min.x,ve=W.max.y-W.min.y,ye=W.max.z-W.min.z,Se=W.min.x,Ae=W.min.y,Ne=W.min.z):(ae=xt.width,ve=xt.height,ye=xt.depth,Se=0,Ae=0,Ne=0),X!==null?(Te=X.x,Ze=X.y,gt=X.z):(Te=0,Ze=0,gt=0);const un=me.convert(O.format),Qe=me.convert(O.type);let Ee;if(O.isData3DTexture)ie.setTexture3D(O,0),Ee=U.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)ie.setTexture2DArray(O,0),Ee=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const $t=U.getParameter(U.UNPACK_ROW_LENGTH),nt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ni=U.getParameter(U.UNPACK_SKIP_PIXELS),so=U.getParameter(U.UNPACK_SKIP_ROWS),ar=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,xt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Se),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ae),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ne),b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Ee,j,Te,Ze,gt,ae,ve,ye,un,Qe,xt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Ee,j,Te,Ze,gt,ae,ve,ye,un,xt.data):U.texSubImage3D(Ee,j,Te,Ze,gt,ae,ve,ye,un,Qe,xt),U.pixelStorei(U.UNPACK_ROW_LENGTH,$t),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,nt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ni),U.pixelStorei(U.UNPACK_SKIP_ROWS,so),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ar),j===0&&O.generateMipmaps&&U.generateMipmap(Ee),k.unbindTexture()},this.initRenderTarget=function(b){ge.get(b).__webglFramebuffer===void 0&&ie.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ie.setTextureCube(b,0):b.isData3DTexture?ie.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ie.setTexture2DArray(b,0):ie.setTexture2D(b,0),k.unbindTexture()},this.resetState=function(){R=0,C=0,S=null,k.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Of?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===_c?"display-p3":"srgb"}}class Vf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=n}clone(){return new Vf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yT extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ST{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Fd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return zf("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new H;class Zl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Zn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=it(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Zn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Zn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Zn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Zn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new cn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class k0 extends Ir{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ts;const ca=new H,ns=new H,is=new H,rs=new je,ua=new je,O0=new pt,$o=new H,da=new H,Yo=new H,Lm=new je,Du=new je,Dm=new je;class MT extends Wt{constructor(e=new k0){if(super(),this.isSprite=!0,this.type="Sprite",ts===void 0){ts=new xn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ST(n,5);ts.setIndex([0,1,2,0,2,3]),ts.setAttribute("position",new Zl(i,3,0,!1)),ts.setAttribute("uv",new Zl(i,2,3,!1))}this.geometry=ts,this.material=e,this.center=new je(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ns.setFromMatrixScale(this.matrixWorld),O0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),is.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ns.multiplyScalar(-is.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;qo($o.set(-.5,-.5,0),is,a,ns,r,s),qo(da.set(.5,-.5,0),is,a,ns,r,s),qo(Yo.set(.5,.5,0),is,a,ns,r,s),Lm.set(0,0),Du.set(1,0),Dm.set(1,1);let o=e.ray.intersectTriangle($o,da,Yo,!1,ca);if(o===null&&(qo(da.set(-.5,.5,0),is,a,ns,r,s),Du.set(0,1),o=e.ray.intersectTriangle($o,Yo,da,!1,ca),o===null))return;const c=e.ray.origin.distanceTo(ca);c<e.near||c>e.far||n.push({distance:c,point:ca.clone(),uv:zn.getInterpolation(ca,$o,da,Yo,Lm,Du,Dm,new je),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function qo(t,e,n,i,r,s){rs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ua.x=s*rs.x-r*rs.y,ua.y=r*rs.x+s*rs.y):ua.copy(rs),t.copy(e),t.x+=ua.x,t.y+=ua.y,t.applyMatrix4(O0)}class z0 extends Ir{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ql=new H,Jl=new H,Im=new pt,fa=new yc,Ko=new to,Iu=new H,Um=new H;class wT extends Wt{constructor(e=new xn,n=new z0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Ql.fromBufferAttribute(n,r-1),Jl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Ql.distanceTo(Jl);e.setAttribute("lineDistance",new Hn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ko.copy(i.boundingSphere),Ko.applyMatrix4(r),Ko.radius+=s,e.ray.intersectsSphere(Ko)===!1)return;Im.copy(r).invert(),fa.copy(e.ray).applyMatrix4(Im);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const g=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let y=g,m=_-1;y<m;y+=u){const d=f.getX(y),x=f.getX(y+1),v=Zo(this,e,fa,c,d,x);v&&n.push(v)}if(this.isLineLoop){const y=f.getX(_-1),m=f.getX(g),d=Zo(this,e,fa,c,y,m);d&&n.push(d)}}else{const g=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let y=g,m=_-1;y<m;y+=u){const d=Zo(this,e,fa,c,y,y+1);d&&n.push(d)}if(this.isLineLoop){const y=Zo(this,e,fa,c,_-1,g);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Zo(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(Ql.fromBufferAttribute(a,r),Jl.fromBufferAttribute(a,s),n.distanceSqToSegment(Ql,Jl,Iu,Um)>i)return;Iu.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Iu);if(!(c<e.near||c>e.far))return{distance:c,point:Um.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}class j0 extends Ir{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fm=new pt,zd=new yc,Qo=new to,Jo=new H;class ET extends Wt{constructor(e=new xn,n=new j0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(r),Qo.radius+=s,e.ray.intersectsSphere(Qo)===!1)return;Fm.copy(r).invert(),zd.copy(e.ray).applyMatrix4(Fm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=i.index,p=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=h,y=g;_<y;_++){const m=u.getX(_);Jo.fromBufferAttribute(p,m),km(Jo,m,c,r,e,n,this)}}else{const h=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let _=h,y=g;_<y;_++)Jo.fromBufferAttribute(p,_),km(Jo,_,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function km(t,e,n,i,r,s,a){const o=zd.distanceSqToPoint(t);if(o<n){const c=new H;zd.closestPointToPoint(t,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class Om extends Qt{constructor(e,n,i,r,s,a,o,c,u){super(e,n,i,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gf extends xn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let u=0;const f=[],p=new H,h=new H,g=[],_=[],y=[],m=[];for(let d=0;d<=i;d++){const x=[],v=d/i;let E=0;d===0&&a===0?E=.5/n:d===i&&c===Math.PI&&(E=-.5/n);for(let R=0;R<=n;R++){const C=R/n;p.x=-e*Math.cos(r+C*s)*Math.sin(a+v*o),p.y=e*Math.cos(a+v*o),p.z=e*Math.sin(r+C*s)*Math.sin(a+v*o),_.push(p.x,p.y,p.z),h.copy(p).normalize(),y.push(h.x,h.y,h.z),m.push(C+E,1-v),x.push(u++)}f.push(x)}for(let d=0;d<i;d++)for(let x=0;x<n;x++){const v=f[d][x+1],E=f[d][x],R=f[d+1][x],C=f[d+1][x+1];(d!==0||a>0)&&g.push(v,E,C),(d!==i-1||c<Math.PI)&&g.push(E,R,C)}this.setIndex(g),this.setAttribute("position",new Hn(_,3)),this.setAttribute("normal",new Hn(y,3)),this.setAttribute("uv",new Hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const zm=new pt;class bT{constructor(e,n,i=0,r=1/0){this.ray=new yc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new jf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return zm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zm),this}intersectObject(e,n=!0,i=[]){return jd(e,this,i,n),i.sort(jm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)jd(e[r],this,i,n);return i.sort(jm),i}}function jm(t,e){return t.distance-e.distance}function jd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)jd(s[a],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kf);function ha(t,e,n){return Math.max(e,Math.min(n,t))}function Ns(t){const e=new Date(t),n=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),s=String(e.getHours()).padStart(2,"0"),a=String(e.getMinutes()).padStart(2,"0");return`${n}.${i}.${r} ${s}:${a}`}function Bm(t,e){return Math.random()*(e-t)+t}class TT{constructor(){this.audioContext=null,this.masterGain=null,this.sfxGain=null,this.volume=.7,this.sfxVolume=.8,this.initialized=!1}init(){if(!this.initialized)try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.audioContext=new e,this.masterGain=this.audioContext.createGain(),this.sfxGain=this.audioContext.createGain(),this.masterGain.connect(this.audioContext.destination),this.sfxGain.connect(this.masterGain),this.masterGain.gain.value=this.volume,this.sfxGain.gain.value=this.sfxVolume,this.initialized=!0}catch{console.warn("Web Audio API not supported")}}ensureContext(){var e;this.audioContext||this.init(),((e=this.audioContext)==null?void 0:e.state)==="suspended"&&this.audioContext.resume()}setVolume(e){this.volume=e,this.masterGain&&(this.masterGain.gain.value=e)}setSfxVolume(e){this.sfxVolume=e,this.sfxGain&&(this.sfxGain.gain.value=e)}playTone(e,n,i="sine",r=.3){if(this.ensureContext(),!this.audioContext||!this.sfxGain)return;const s=this.audioContext.createOscillator(),a=this.audioContext.createGain();s.type=i,s.frequency.value=e,a.gain.setValueAtTime(0,this.audioContext.currentTime),a.gain.linearRampToValueAtTime(r,this.audioContext.currentTime+.01),a.gain.exponentialRampToValueAtTime(.001,this.audioContext.currentTime+n),s.connect(a),a.connect(this.sfxGain),s.start(),s.stop(this.audioContext.currentTime+n)}playConnectSuccess(){this.playTone(523.25,.08,"sine",.25),setTimeout(()=>this.playTone(659.25,.1,"sine",.2),60),setTimeout(()=>this.playTone(783.99,.12,"sine",.15),140)}playConnectFail(){this.playTone(200,.12,"sawtooth",.15),setTimeout(()=>this.playTone(150,.15,"sawtooth",.1),80)}playConstellationComplete(){[523.25,659.25,783.99,1046.5,1318.51].forEach((n,i)=>{setTimeout(()=>this.playTone(n,.15,"sine",.2),i*100)})}playAchievement(){[783.99,1046.5,1318.51,1567.98,2093].forEach((n,i)=>{setTimeout(()=>this.playTone(n,.18,"triangle",.22),i*80)}),setTimeout(()=>this.playTone(2637.02,.4,"sine",.25),450)}playClick(){this.playTone(880,.04,"sine",.15)}playHover(){this.playTone(440,.03,"sine",.08)}playPanelOpen(){this.playTone(330,.05,"sine",.12),setTimeout(()=>this.playTone(440,.05,"sine",.1),30)}playPanelClose(){this.playTone(440,.05,"sine",.12),setTimeout(()=>this.playTone(330,.05,"sine",.1),30)}playStarHover(){this.playTone(587.33,.04,"triangle",.06)}playZoom(){this.playTone(220,.02,"sine",.05)}playReset(){[392,349.23,311.13,261.63].forEach((n,i)=>{setTimeout(()=>this.playTone(n,.1,"sawtooth",.1),i*70)})}}const Ke=new TT;class CT{constructor(e,n,i,r,s){Zf(this,"animate",()=>{this.animationId=requestAnimationFrame(this.animate),this.time+=.01*this.settings.animationSpeed,this.cameraCurrentX+=(this.cameraTargetX-this.cameraCurrentX)*.05,this.cameraCurrentY+=(this.cameraTargetY-this.cameraCurrentY)*.05,this.camera.position.x=this.cameraCurrentX,this.camera.position.y=this.cameraCurrentY,this.camera.position.z+=(this.cameraZ-this.camera.position.z)*.05,this.camera.lookAt(this.cameraCurrentX,this.cameraCurrentY,0),this.starField&&(this.starField.rotation.y=this.time*.01,this.starField.rotation.x=Math.sin(this.time*.005)*.05),this.nebulas.forEach((e,n)=>{e.rotation.y=this.time*(.01+n*.003)}),this.starMeshes.forEach((e,n)=>{const i=1+Math.sin(this.time*2+n*.7)*.08,r=this.connectionPath.includes(e.userData.starId),s=e===this.hoveredStar;let o=e.userData.baseScale;r&&(o*=1.8),s&&(o*=s===r?1.1:r?1.2:1.5),e.scale.set(o*i,o*i,1)}),this.renderer.render(this.scene,this.camera)});this.container=e,this.settings=n,this.onStarClick=i,this.onCanvasEvent=r,this.onConnectResult=s,this.scene=null,this.camera=null,this.renderer=null,this.animationId=null,this.starField=null,this.constellationMeshes=new Map,this.connectionLines=new Map,this.tempLine=null,this.nebulas=[],this.raycaster=new bT,this.mouse=new je,this.hoveredStar=null,this.starLabelEl=null,this.targetConstellationId=null,this.connectionPath=[],this.cameraZ=8,this.minCameraZ=3,this.maxCameraZ=20,this.cameraTargetX=0,this.cameraTargetY=0,this.cameraCurrentX=0,this.cameraCurrentY=0,this.isDragging=!1,this.dragStartX=0,this.dragStartY=0,this.cameraStartX=0,this.cameraStartY=0,this.dragMoved=!1,this.dragThreshold=5,this.isPinching=!1,this.initialPinchDistance=0,this.initialCameraZ=8,this.starMeshes=[],this.time=0,this.nebulasCreated=!1,this.init()}init(){const e=this.container.clientWidth,n=this.container.clientHeight,i=Fr[this.settings.graphicsQuality]||Fr.high;this.scene=new yT,this.scene.background=this.createBackgroundGradient(),this.scene.fog=new Vf(329231,.015),this.camera=new En(60,e/n,.1,1e3),this.camera.position.set(0,0,this.cameraZ),this.camera.lookAt(0,0,0),this.renderer=new _T({antialias:i.antialias,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e,n),this.renderer.setClearColor(329231,1),this.container.appendChild(this.renderer.domElement),this.createStarLabel();const r=i.starCount,s=Math.round(r*this.settings.starDensity);this.createStarField(s,i.particleSize),this.settings.showNebula&&(this.createNebulae(),this.nebulasCreated=!0),Ke.setVolume(this.settings.volume),Ke.setSfxVolume(this.settings.sfxVolume),this.animate(),this.bindEvents()}createStarLabel(){this.starLabelEl=document.createElement("div"),this.starLabelEl.className="star-label",this.starLabelEl.style.cssText=`
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
      `,this.starLabelEl.style.left=`${i-s.left}px`,this.starLabelEl.style.top=`${r-s.top}px`,this.starLabelEl.style.opacity="1"}else this.starLabelEl.style.opacity="0"}createBackgroundGradient(){const e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d"),i=n.createRadialGradient(256,256,0,256,256,512);i.addColorStop(0,"#0f1530"),i.addColorStop(.4,"#0a0e1f"),i.addColorStop(1,"#05060f"),n.fillStyle=i,n.fillRect(0,0,512,512);const r=new Om(e);return r.colorSpace=Fn,r}createStarField(e,n){const i=new xn,r=new Float32Array(e*3),s=new Float32Array(e*3),a=new Float32Array(e),o=[new He("#ffffff"),new He("#8ec5ff"),new He("#ffddaa"),new He("#ffccaa"),new He("#cce4ff")];for(let u=0;u<e;u++){const f=Bm(12,40),p=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1);r[u*3]=f*Math.sin(h)*Math.cos(p),r[u*3+1]=f*Math.sin(h)*Math.sin(p),r[u*3+2]=f*Math.cos(h)-15;const g=o[Math.floor(Math.random()*o.length)];s[u*3]=g.r,s[u*3+1]=g.g,s[u*3+2]=g.b,a[u]=n*Bm(.5,2)}i.setAttribute("position",new cn(r,3)),i.setAttribute("color",new cn(s,3)),i.setAttribute("size",new cn(a,1));const c=new j0({size:n,vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,blending:xs,depthWrite:!1});this.starField=new ET(i,c),this.scene.add(this.starField)}rebuildStarField(){this.starField&&(this.scene.remove(this.starField),this.starField.geometry&&this.starField.geometry.dispose(),this.starField.material&&this.starField.material.dispose(),this.starField=null);const e=Fr[this.settings.graphicsQuality]||Fr.high,n=e.starCount,i=Math.round(n*this.settings.starDensity);this.createStarField(i,e.particleSize)}createNebulae(){[{x:-8,y:5,z:-10,color:7035903,scale:6,opacity:.08},{x:7,y:-4,z:-8,color:5239001,scale:5,opacity:.06},{x:2,y:8,z:-12,color:16747099,scale:7,opacity:.05},{x:-5,y:-7,z:-6,color:16739229,scale:4,opacity:.07}].forEach(n=>{const i=new Gf(n.scale,32,32),r=new Bf({color:n.color,transparent:!0,opacity:n.opacity,blending:xs,depthWrite:!1}),s=new Jn(i,r);s.position.set(n.x,n.y,n.z),this.scene.add(s),this.nebulas.push(s)})}removeNebulae(){this.nebulas.forEach(e=>{this.scene.remove(e),e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.nebulas=[],this.nebulasCreated=!1}setNebulaeVisible(e){e&&!this.nebulasCreated?(this.createNebulae(),this.nebulasCreated=!0):!e&&this.nebulasCreated&&this.removeNebulae()}loadConstellation(e){this.clearConstellation(),this.targetConstellationId=e,this.connectionPath=[];const n=Zi(e);if(!n)return;const i=new ya;i.name="constellation_group";const r=[];n.stars.forEach(s=>{const a=this.createStarMesh(s);a.position.set(s.x,s.y,s.z||0),a.userData={starId:s.id,starName:s.name,isConstellationStar:!0},i.add(a),r.push(a),this.starMeshes.push(a)}),this.constellationMeshes.set(e,{group:i,stars:r}),this.scene.add(i),this.cameraTargetX=n.center.x,this.cameraTargetY=n.center.y}createStarMesh(e){const n=Math.max(.2,1-e.mag/6*.8),i=.12+(1-e.mag/6)*.15,r=document.createElement("canvas");r.width=64,r.height=64;const s=r.getContext("2d"),a=32,o=s.createRadialGradient(a,a,0,a,a,32);o.addColorStop(0,e.color||"#ffffff"),o.addColorStop(.3,e.color||"#ffffff"),o.addColorStop(.6,(e.color||"#ffffff")+"88"),o.addColorStop(1,"transparent"),s.fillStyle=o,s.beginPath(),s.arc(a,a,32,0,Math.PI*2),s.fill(),s.fillStyle="#ffffff",s.beginPath(),s.arc(a,a,3+n*4,0,Math.PI*2),s.fill();const c=new Om(r),u=new k0({map:c,transparent:!0,blending:xs,depthWrite:!1}),f=new MT(u);return f.scale.set(i*2,i*2,1),f.userData.baseScale=i*2,f.userData.brightness=n,f}updateConnectionPath(e){if(this.connectionPath=[...e],this.targetConstellationId){const n=this.constellationMeshes.get(this.targetConstellationId);if(!n)return;this.connectionLines.forEach(i=>this.scene.remove(i)),this.connectionLines.clear();for(let i=0;i<e.length-1;i++){const r=n.stars.find(a=>a.userData.starId===e[i]),s=n.stars.find(a=>a.userData.starId===e[i+1]);if(r&&s){const a=this.createConnectionLine(r.position,s.position,16766720);this.scene.add(a),this.connectionLines.set(`${e[i]}-${e[i+1]}`,a)}}n.stars.forEach(i=>{const r=e.includes(i.userData.starId),s=i.userData.baseScale*(r?1.8:1);i.scale.set(s,s,1)})}}createConnectionLine(e,n,i=16766720){const r=[e.clone(),n.clone()],s=new xn().setFromPoints(r),a=new z0({color:i,transparent:!0,opacity:.85,linewidth:2,blending:xs});return new wT(s,a)}setTempLine(e,n){if(this.tempLine&&(this.scene.remove(this.tempLine),this.tempLine=null),!this.targetConstellationId||!e)return;const i=this.constellationMeshes.get(this.targetConstellationId);if(!i)return;const r=i.stars.find(s=>s.userData.starId===e);!r||!n||(this.tempLine=this.createConnectionLine(r.position,n,8956671),this.tempLine.material.opacity=.5,this.scene.add(this.tempLine))}clearTempLine(){this.tempLine&&(this.scene.remove(this.tempLine),this.tempLine=null)}clearConstellation(){this.constellationMeshes.forEach(({group:e})=>{this.scene.remove(e)}),this.constellationMeshes.clear(),this.connectionLines.forEach(e=>this.scene.remove(e)),this.connectionLines.clear(),this.clearTempLine(),this.starMeshes=[],this.targetConstellationId=null,this.connectionPath=[]}bindEvents(){const e=this.renderer.domElement;e.addEventListener("pointerdown",n=>this.onPointerDown(n)),e.addEventListener("pointermove",n=>this.onPointerMove(n)),e.addEventListener("pointerup",n=>this.onPointerUp(n)),e.addEventListener("pointercancel",()=>this.onPointerCancel()),e.addEventListener("wheel",n=>this.onWheel(n),{passive:!1}),window.addEventListener("resize",()=>this.onResize())}onPointerDown(e){e.pointerType==="touch"?this.isPinching||(this.isDragging=!0,this.dragStartX=e.clientX,this.dragStartY=e.clientY,this.cameraStartX=this.cameraTargetX,this.cameraStartY=this.cameraTargetY,this.dragMoved=!1):(this.isDragging=!0,this.dragStartX=e.clientX,this.dragStartY=e.clientY,this.cameraStartX=this.cameraTargetX,this.cameraStartY=this.cameraTargetY,this.dragMoved=!1),e.pointerType==="mouse"&&this.updateMouse(e)}onPointerMove(e){if(e.pointerType==="mouse"&&(this.updateMouse(e),this.checkHover(e.clientX,e.clientY)),this.isDragging&&!this.isPinching){const n=e.clientX-this.dragStartX,i=e.clientY-this.dragStartY;(Math.abs(n)>this.dragThreshold||Math.abs(i)>this.dragThreshold)&&(this.dragMoved=!0);const r=this.cameraZ/8;this.cameraTargetX=this.cameraStartX-n/this.container.clientWidth*10*r,this.cameraTargetY=this.cameraStartY+i/this.container.clientHeight*7*r,this.cameraTargetX=ha(this.cameraTargetX,-15,15),this.cameraTargetY=ha(this.cameraTargetY,-12,12),this.onCanvasEvent&&this.onCanvasEvent({type:"pan"})}if(e.pointerType==="mouse"&&this.connectionPath.length>0){const n=this.screenToWorld(e.clientX,e.clientY);n&&this.setTempLine(this.connectionPath[this.connectionPath.length-1],n)}}onPointerUp(e){if(!this.dragMoved&&!this.isPinching){this.updateMouse(e);const n=this.pickStar();n&&(Ke.playClick(),this.onStarClick&&this.onStarClick(n.userData.starId))}this.isDragging=!1,this.clearTempLine()}notifyConnectResult(e,n=!1){e?n?Ke.playConstellationComplete():Ke.playConnectSuccess():Ke.playConnectFail()}onPointerCancel(){this.isDragging=!1,this.isPinching=!1,this.clearTempLine()}onWheel(e){e.preventDefault();const n=e.deltaY*.01;this.cameraZ=ha(this.cameraZ+n,this.minCameraZ,this.maxCameraZ),this.onCanvasEvent&&this.onCanvasEvent({type:"zoom",zoom:this.cameraZ})}handlePinchStart(e){if(e.touches&&e.touches.length===2){this.isPinching=!0,this.isDragging=!1;const n=e.touches[0],i=e.touches[1];this.initialPinchDistance=Math.hypot(i.clientX-n.clientX,i.clientY-n.clientY),this.initialCameraZ=this.cameraZ}}handlePinchMove(e){if(e.touches&&e.touches.length===2&&this.isPinching){e.preventDefault();const n=e.touches[0],i=e.touches[1],r=Math.hypot(i.clientX-n.clientX,i.clientY-n.clientY),s=this.initialPinchDistance/r;this.cameraZ=ha(this.initialCameraZ*s,this.minCameraZ,this.maxCameraZ),this.onCanvasEvent&&this.onCanvasEvent({type:"zoom",zoom:this.cameraZ})}}handlePinchEnd(){this.isPinching=!1}updateMouse(e){const n=this.container.getBoundingClientRect();this.mouse.x=(e.clientX-n.left)/n.width*2-1,this.mouse.y=-((e.clientY-n.top)/n.height)*2+1}screenToWorld(e,n){const i=this.container.getBoundingClientRect(),r=(e-i.left)/i.width*2-1,s=-((n-i.top)/i.height)*2+1,a=new H(r,s,.5);a.unproject(this.camera);const o=a.sub(this.camera.position).normalize(),c=-this.camera.position.z/o.z;return this.camera.position.clone().add(o.multiplyScalar(c))}pickStar(){this.raycaster.setFromCamera(this.mouse,this.camera);const e=this.raycaster.intersectObjects(this.starMeshes);return e.length>0?e[0].object:null}checkHover(e,n){const i=this.pickStar();if(i!==this.hoveredStar){if(this.hoveredStar){const r=this.hoveredStar,s=this.connectionPath.includes(r.userData.starId),a=r.userData.baseScale*(s?1.8:1);r.scale.set(a,a,1)}if(i){const r=this.connectionPath.includes(i.userData.starId),s=i.userData.baseScale*(r?2.2:1.6);i.scale.set(s,s,1),Ke.playStarHover(),this.updateStarLabel(!0,i.userData,e,n)}else this.updateStarLabel(!1);this.hoveredStar=i,this.onCanvasEvent&&this.onCanvasEvent({type:"hover",star:i?i.userData:null})}else i&&e&&n&&this.updateStarLabel(!0,i.userData,e,n)}onResize(){const e=this.container.clientWidth,n=this.container.clientHeight;this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n)}setZoom(e){this.cameraZ=ha(e,this.minCameraZ,this.maxCameraZ)}focusOnConstellation(e){const n=Zi(e);n&&(this.cameraTargetX=n.center.x,this.cameraTargetY=n.center.y,this.cameraZ=6)}updateSettings(e){const n={...this.settings};if(this.settings={...this.settings,...e},e.volume!==void 0&&Ke.setVolume(e.volume),e.sfxVolume!==void 0&&Ke.setSfxVolume(e.sfxVolume),e.starDensity!==void 0&&e.starDensity!==n.starDensity&&this.rebuildStarField(),e.showNebula!==void 0&&e.showNebula!==n.showNebula&&this.setNebulaeVisible(e.showNebula),e.showLabels!==void 0&&!e.showLabels&&this.starLabelEl&&(this.starLabelEl.style.opacity="0"),e.animationSpeed,e.graphicsQuality!==void 0&&e.graphicsQuality!==n.graphicsQuality){const i=Fr[e.graphicsQuality]||Fr.high;this.renderer&&this.renderer.setPixelRatio(i.antialias?Math.min(window.devicePixelRatio,2):1),this.rebuildStarField()}}dispose(){this.animationId&&cancelAnimationFrame(this.animationId),this.starLabelEl&&this.starLabelEl.parentNode&&(this.starLabelEl.parentNode.removeChild(this.starLabelEl),this.starLabelEl=null),window.removeEventListener("resize",()=>this.onResize()),this.renderer&&(this.renderer.dispose(),this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)),this.clearConstellation(),this.scene&&this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())})}}function AT(){const t=Le.useRef(null),e=Le.useRef(null),n=Le.useRef(0),i=wt(u=>u.settings),r=wt(u=>u.currentTargetConstellation),s=wt(u=>u.connectionPath),a=wt(u=>u.mistakes),o=wt(u=>u.connectStar),c=wt(u=>u.isConstellationComplete);return Le.useEffect(()=>{if(!t.current)return;Ke.init();const u=m=>{Ke.ensureContext();const d=o(m);setTimeout(()=>{if(e.current){const x=r&&c(r);e.current.notifyConnectResult(d,x)}},10)},f=new CT(t.current,i,u);e.current=f;const p=m=>{Ke.ensureContext(),f.handlePinchStart(m)},h=m=>{f.handlePinchMove(m)},g=()=>{f.handlePinchEnd()},_=()=>{Ke.playZoom()},y=f.renderer.domElement;return y.addEventListener("touchstart",p,{passive:!1}),y.addEventListener("touchmove",h,{passive:!1}),y.addEventListener("touchend",g),y.addEventListener("wheel",_,{passive:!0}),()=>{y.removeEventListener("touchstart",p),y.removeEventListener("touchmove",h),y.removeEventListener("touchend",g),y.removeEventListener("wheel",_),f.dispose(),e.current=null}},[]),Le.useEffect(()=>{e.current&&r?(e.current.loadConstellation(r),n.current=0):e.current&&!r&&(e.current.clearConstellation(),n.current=0)},[r]),Le.useEffect(()=>{e.current&&e.current.updateConnectionPath(s)},[s]),Le.useEffect(()=>{e.current&&e.current.updateSettings(i)},[i]),Le.useEffect(()=>{a>n.current&&e.current&&e.current.notifyConnectResult(!1,!1),n.current=a},[a]),l.jsx("div",{ref:t,className:"absolute inset-0 w-full h-full touch-none",style:{touchAction:"none"}})}function NT(){const{discoveredConstellations:t,currentTargetConstellation:e,setTargetConstellation:n,setActivePanel:i,connectionPath:r,mistakes:s,clearConnectionPath:a,isConstellationComplete:o,currentTargetConstellation:c}=wt(),u=rt.find(p=>p.id===c),f=u?Math.min(100,Math.round(new Set(r).size/u.stars.length*100)):0;return l.jsx("div",{className:"absolute left-0 right-0 top-0 p-4 z-20 pointer-events-none",children:e?l.jsx("div",{className:"max-w-sm mx-auto pointer-events-auto",children:l.jsxs("div",{className:"glass-panel p-4",children:[l.jsxs("div",{className:"flex items-start justify-between",children:[l.jsxs("div",{className:"flex-1",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("h3",{className:"text-lg font-display text-white",children:u==null?void 0:u.name}),l.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded ${(u==null?void 0:u.difficulty)===1?"bg-green-500/20 text-green-300":(u==null?void 0:u.difficulty)===2?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:Os[u==null?void 0:u.difficulty].label}),o(u==null?void 0:u.id)&&l.jsx("span",{className:"text-star-gold text-sm animate-pulse-slow",children:"★ 已完成"})]}),l.jsx("p",{className:"text-[11px] text-white/50 mt-0.5",children:u==null?void 0:u.description})]}),l.jsx("button",{onClick:()=>{a(),n(null)},className:`ml-2 w-9 h-9 flex items-center justify-center rounded-lg
                         bg-space-700/60 border border-white/10 text-white/70
                         hover:bg-red-500/30 hover:text-red-200 transition-all`,"aria-label":"退出任务",children:"✕"})]}),l.jsxs("div",{className:"mt-3",children:[l.jsxs("div",{className:"flex justify-between text-[11px] mb-1.5",children:[l.jsxs("span",{className:"text-white/50",children:["连接进度: ",new Set(r).size," / ",u==null?void 0:u.stars.length]}),l.jsxs("span",{className:"text-red-300/70",children:["失误: ",s]})]}),l.jsx("div",{className:"h-2 bg-space-900/80 rounded-full overflow-hidden",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-nebula-purple to-nebula-cyan rounded-full transition-all duration-500",style:{width:`${f}%`}})})]}),l.jsxs("div",{className:"mt-3 flex gap-2",children:[l.jsx("button",{onClick:a,className:"flex-1 btn-secondary text-xs py-2",disabled:r.length===0,children:"🔄 重连"}),l.jsx("button",{onClick:()=>i("tasks"),className:"flex-1 btn-secondary text-xs py-2",children:"📋 切换星座"})]})]})}):l.jsx("div",{className:"max-w-md mx-auto pointer-events-auto",children:l.jsxs("div",{className:"glass-panel p-4 animate-float",children:[l.jsxs("div",{className:"flex items-center justify-between mb-3",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-xl font-display text-white",children:"星座图鉴"}),l.jsxs("p",{className:"text-xs text-white/50 mt-0.5",children:["已发现 ",t.length," / ",rt.length]})]}),l.jsx("button",{onClick:()=>i("tasks"),className:"icon-btn","aria-label":"打开任务面板",children:l.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),l.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),l.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}),l.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"})]})})]}),l.jsx("div",{className:"grid grid-cols-2 gap-2",children:rt.slice(0,4).map(p=>{const h=o(p.id);return l.jsx("button",{onClick:()=>n(p.id),className:`p-3 rounded-xl border transition-all text-left card-hover ${h?"border-nebula-purple/60 bg-nebula-purple/10":"border-white/10 bg-space-700/40"}`,children:l.jsxs("div",{className:"flex items-start justify-between",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx("span",{className:"text-sm font-display text-white",children:p.name}),h&&l.jsx("span",{className:"text-star-gold",children:"✓"})]}),l.jsx("div",{className:"text-[10px] text-white/40 mt-0.5",children:p.nameEn})]}),l.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded ${p.difficulty===1?"bg-green-500/20 text-green-300":p.difficulty===2?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:Os[p.difficulty].label})]})},p.id)})}),l.jsxs("button",{onClick:()=>i("tasks"),className:"w-full mt-3 btn-secondary text-sm py-2.5",children:["查看全部 ",rt.length," 个星座 →"]})]})})})}function RT(){const{discoveredConstellations:t,currentTargetConstellation:e,setTargetConstellation:n,setActivePanel:i,isConstellationComplete:r,openAtlasList:s,openAtlasDetail:a}=wt(),o=(c,u)=>{u.stopPropagation(),a(c)};return l.jsx("div",{className:`absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200`,children:l.jsxs("div",{className:"w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden",children:[l.jsxs("div",{className:"p-5 border-b border-white/10",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-xl font-display text-white",children:"星座探索"}),l.jsx("p",{className:"text-xs text-white/50 mt-1",children:"点击星座开始连线，点亮夜空的奥秘"})]}),l.jsx("button",{onClick:()=>i(null),className:"icon-btn","aria-label":"关闭",children:"✕"})]}),l.jsxs("div",{className:"mt-4 grid grid-cols-4 gap-2 text-center",children:[l.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[l.jsx("div",{className:"text-lg font-bold text-nebula-cyan",children:t.length}),l.jsx("div",{className:"text-[10px] text-white/50",children:"已发现"})]}),l.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[l.jsx("div",{className:"text-lg font-bold text-white/80",children:rt.length}),l.jsx("div",{className:"text-[10px] text-white/50",children:"总星座"})]}),l.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[l.jsx("div",{className:"text-lg font-bold text-star-gold",children:rt.filter(c=>c.season==="春").length}),l.jsx("div",{className:"text-[10px] text-white/50",children:"春·冬"})]}),l.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[l.jsx("div",{className:"text-lg font-bold text-nebula-orange",children:rt.filter(c=>c.season==="夏"||c.season==="秋").length}),l.jsx("div",{className:"text-[10px] text-white/50",children:"夏·秋"})]})]}),l.jsx("div",{className:"mt-3",children:l.jsxs("button",{onClick:s,className:`w-full py-2 px-4 rounded-xl bg-gradient-to-r from-nebula-purple/20 to-nebula-cyan/20
                       border border-nebula-purple/30 text-white text-sm
                       hover:from-nebula-purple/30 hover:to-nebula-cyan/30
                       transition-all flex items-center justify-center gap-2`,children:[l.jsx("span",{children:"📚"}),l.jsx("span",{children:"查看完整星空图鉴"}),l.jsx("span",{className:"text-nebula-cyan",children:"→"})]})})]}),l.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-thin p-5 space-y-3",children:rt.map(c=>{const u=r(c.id),f=e===c.id;return l.jsx("button",{onClick:()=>{n(c.id),i(null)},className:`w-full p-4 rounded-2xl border text-left transition-all card-hover ${f?"border-nebula-cyan/60 bg-nebula-cyan/10 ring-2 ring-nebula-cyan/30":u?"border-nebula-purple/50 bg-nebula-purple/8":"border-white/10 bg-space-700/30"}`,children:l.jsxs("div",{className:"flex items-start justify-between",children:[l.jsxs("div",{className:"flex-1",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("h3",{className:"text-base font-display text-white",children:c.name}),u&&l.jsx("span",{className:"text-star-gold animate-pulse-slow",children:"★"}),l.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded ${c.difficulty===1?"bg-green-500/20 text-green-300":c.difficulty===2?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:Os[c.difficulty].label}),l.jsxs("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-space-600/50 text-white/50",children:[c.season,"季"]})]}),l.jsx("div",{className:"text-[11px] text-white/40 mt-0.5",children:c.nameEn}),l.jsx("p",{className:"text-xs text-white/60 mt-2 leading-relaxed",children:c.description}),l.jsxs("div",{className:"mt-2 flex items-center gap-3 text-[10px] text-white/40",children:[l.jsxs("span",{children:["✦ ",c.stars.length," 颗主要星"]}),l.jsxs("span",{children:["⊶ ",c.connections.length," 条连线"]})]})]}),l.jsx("button",{onClick:p=>o(c.id,p),className:`ml-2 px-2 py-1 rounded-lg bg-space-600/50 text-white/50 text-[10px]
                               hover:bg-nebula-purple/30 hover:text-nebula-cyan transition-all
                               flex-shrink-0`,title:"在图鉴中查看详情",children:"📚 详情"})]})},c.id)})})]})})}function PT(){const{observationLogs:t,setActivePanel:e,clearLogs:n,seasonRewardsClaimed:i,openAtlasList:r,openAtlasDetail:s}=wt(),a=c=>{s(c)},o=(c,u)=>{if(c.type==="discovery"||c.type==="reobservation"){const f=Zi(c.constellationId);if(!f)return null;const p=c.type==="discovery";return l.jsx("div",{className:`p-4 rounded-xl border transition-all ${p?"border-nebula-purple/30 bg-nebula-purple/5":"border-white/10 bg-space-700/20"}`,children:l.jsxs("div",{className:"flex items-start justify-between",children:[l.jsxs("div",{className:"flex items-start gap-3 flex-1",children:[l.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${p?"bg-gradient-to-br from-nebula-purple to-nebula-cyan text-white":"bg-space-600/50 text-white/70"}`,children:p?"✨":"🔭"}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"font-display text-white text-sm",children:f.name}),c.perfect&&l.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded-full bg-star-gold/20 text-star-gold",children:"完美"})]}),l.jsxs("div",{className:"text-[11px] text-white/40 mt-0.5",children:[f.nameEn," · ",p?"首次发现":"再次观测"]}),l.jsx("div",{className:"text-[10px] text-white/30 mt-1 font-mono",children:Ns(c.timestamp)})]})]}),l.jsx("button",{onClick:()=>a(c.constellationId),className:`ml-2 px-2 py-1 rounded-lg bg-space-600/50 text-white/50 text-[10px]
                       hover:bg-nebula-purple/30 hover:text-nebula-cyan transition-all
                       flex-shrink-0`,title:"在图鉴中查看",children:"📚"})]})},u)}if(c.type==="achievement"){const f=l0(c.achievementId),p=bs==null?void 0:bs.find(g=>g.id===c.achievementId),h=f||p;return h?l.jsx("div",{className:"p-4 rounded-xl border border-star-gold/20 bg-star-gold/5",children:l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx("div",{className:`w-10 h-10 rounded-xl bg-gradient-to-br from-star-gold to-nebula-orange
                          flex items-center justify-center text-lg`,children:h.icon}),l.jsxs("div",{children:[l.jsxs("div",{className:"font-display text-star-gold text-sm",children:["成就解锁 · ",h.name]}),l.jsx("div",{className:"text-[11px] text-white/50 mt-0.5",children:h.description}),l.jsx("div",{className:"text-[10px] text-white/30 mt-1 font-mono",children:Ns(c.timestamp)})]})]})},u):null}if(c.type==="season_reward"){const f=Gt[c.seasonId],p=Kn[c.phaseId];return!f||!p?null:l.jsx("div",{className:`p-4 rounded-xl border ${f.borderColor} ${f.bgColor}`,children:l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center text-lg
                            bg-gradient-to-br ${f.color}`,children:f.icon}),l.jsxs("div",{children:[l.jsxs("div",{className:`font-display text-sm ${f.textColor}`,children:["季节奖励 · ",c.rewardName]}),l.jsxs("div",{className:"text-[11px] text-white/50 mt-0.5",children:[f.name," · ",p.name,"阶段完成"]}),l.jsx("div",{className:"text-[10px] text-white/30 mt-1 font-mono",children:Ns(c.timestamp)})]})]})},u)}return null};return l.jsx("div",{className:`absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200`,children:l.jsxs("div",{className:"w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden",children:[l.jsxs("div",{className:"p-5 border-b border-white/10",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-xl font-display text-white",children:"观测日志"}),l.jsx("p",{className:"text-xs text-white/50 mt-1",children:"记录每一次与星空的相遇"})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[t.length>0&&l.jsx("button",{onClick:()=>{confirm("确定要清空所有观测日志吗？")&&n()},className:`text-xs px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20
                           text-red-300 hover:bg-red-500/20 transition-all`,children:"清空"}),l.jsx("button",{onClick:()=>e(null),className:"icon-btn","aria-label":"关闭",children:"✕"})]})]}),l.jsxs("div",{className:"mt-4 grid grid-cols-4 gap-2 text-center",children:[l.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[l.jsx("div",{className:"text-lg font-bold text-nebula-purple",children:t.filter(c=>c.type==="discovery").length}),l.jsx("div",{className:"text-[10px] text-white/50",children:"首次发现"})]}),l.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[l.jsx("div",{className:"text-lg font-bold text-nebula-cyan",children:t.filter(c=>c.type==="reobservation").length}),l.jsx("div",{className:"text-[10px] text-white/50",children:"再次观测"})]}),l.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[l.jsx("div",{className:"text-lg font-bold text-star-gold",children:t.filter(c=>c.type==="achievement").length}),l.jsx("div",{className:"text-[10px] text-white/50",children:"成就解锁"})]}),l.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[l.jsx("div",{className:"text-lg font-bold text-pink-300",children:i.length}),l.jsx("div",{className:"text-[10px] text-white/50",children:"季节奖励"})]})]}),l.jsx("div",{className:"mt-3",children:l.jsxs("button",{onClick:r,className:`w-full py-2 px-4 rounded-xl bg-gradient-to-r from-nebula-purple/20 to-nebula-cyan/20
                       border border-nebula-purple/30 text-white text-sm
                       hover:from-nebula-purple/30 hover:to-nebula-cyan/30
                       transition-all flex items-center justify-center gap-2`,children:[l.jsx("span",{children:"📚"}),l.jsx("span",{children:"浏览星空图鉴"}),l.jsx("span",{className:"text-nebula-cyan",children:"→"})]})})]}),l.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-thin p-5",children:t.length===0?l.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center py-12",children:[l.jsx("div",{className:"text-5xl mb-4 opacity-30",children:"📖"}),l.jsx("h3",{className:"text-white/70 font-display mb-2",children:"暂无观测记录"}),l.jsx("p",{className:"text-xs text-white/40 max-w-xs leading-relaxed",children:"开始探索星座，你的每一次发现都将记录在这里"})]}):l.jsx("div",{className:"space-y-3",children:t.map((c,u)=>o(c,u))})})]})})}const LT={beginner:{name:"初心者",icon:"🌱",color:"from-green-500 to-emerald-400"},explorer:{name:"探索家",icon:"🧭",color:"from-blue-500 to-cyan-400"},challenge:{name:"挑战者",icon:"🔥",color:"from-orange-500 to-red-400"},collector:{name:"收藏家",icon:"📚",color:"from-purple-500 to-pink-400"},special:{name:"特别成就",icon:"💫",color:"from-yellow-500 to-orange-400"},season:{name:"四季成就",icon:"🌸",color:"from-pink-500 to-cyan-400"}};function DT(){const{unlockedAchievements:t,setActivePanel:e,getProgress:n}=wt(),i=n(),s=[...jl,...bs].reduce((a,o)=>(a[o.category]||(a[o.category]=[]),a[o.category].push(o),a),{});return l.jsx("div",{className:`absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200`,children:l.jsxs("div",{className:"w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden",children:[l.jsxs("div",{className:"p-5 border-b border-white/10",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-xl font-display text-white",children:"成就系统"}),l.jsx("p",{className:"text-xs text-white/50 mt-1",children:"解锁你的星空里程碑"})]}),l.jsx("button",{onClick:()=>e(null),className:"icon-btn","aria-label":"关闭",children:"✕"})]}),l.jsxs("div",{className:"mt-4",children:[l.jsxs("div",{className:"flex justify-between text-xs mb-2",children:[l.jsx("span",{className:"text-white/60",children:"总体进度"}),l.jsxs("span",{className:"text-star-gold font-mono",children:[i.achievements," / ",i.totalAchievements]})]}),l.jsx("div",{className:"h-3 bg-space-900/80 rounded-full overflow-hidden",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-star-gold via-nebula-orange to-nebula-purple rounded-full transition-all duration-700",style:{width:`${i.totalAchievements>0?i.achievements/i.totalAchievements*100:0}%`}})})]})]}),l.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-thin p-5 space-y-5",children:Object.entries(s).map(([a,o])=>{const c=LT[a],u=o.filter(f=>t.includes(f.id)).length;return l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsx("span",{className:"text-lg",children:c.icon}),l.jsx("h3",{className:"font-display text-white/90 text-sm",children:c.name}),l.jsxs("span",{className:"text-[10px] text-white/40 ml-auto",children:[u," / ",o.length]})]}),l.jsx("div",{className:"grid grid-cols-2 gap-2",children:o.map(f=>{const p=t.includes(f.id);return l.jsx("div",{className:`p-3 rounded-xl border transition-all ${p?"border-white/20 bg-space-700/40":"border-white/5 bg-space-900/40 opacity-50"}`,children:l.jsxs("div",{className:"flex items-start gap-2",children:[l.jsx("div",{className:`w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0 ${p?`bg-gradient-to-br ${c.color}`:"bg-space-800 grayscale"}`,children:f.icon}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("div",{className:`text-xs font-semibold ${p?"text-white":"text-white/50"}`,children:f.name}),l.jsx("div",{className:"text-[10px] text-white/40 mt-0.5 leading-tight",children:f.description})]})]})},f.id)})})]},a)})})]})})}function IT(){const{settings:t,updateSettings:e,resetSettings:n,resetProgress:i,setActivePanel:r,getProgress:s,manualSave:a}=wt(),[o,c]=Le.useState(!1),[u,f]=Le.useState(!1),p=s(),h=(d,x)=>{Ke.ensureContext(),Ke.playClick(),e({[d]:x})},g=()=>{Ke.ensureContext(),Ke.playReset(),n()},_=()=>{Ke.ensureContext(),Ke.playReset(),i(),n(),c(!1)},y=()=>{Ke.ensureContext(),Ke.playConnectSuccess(),a(),f(!0),setTimeout(()=>f(!1),1500)},m=()=>{Ke.ensureContext(),Ke.playPanelClose(),r(null)};return l.jsxs("div",{className:`absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200`,children:[u&&l.jsx("div",{className:`fixed top-8 left-1/2 -translate-x-1/2 z-50
                      px-4 py-2 rounded-xl bg-nebula-cyan/20 border border-nebula-cyan/40
                      text-nebula-cyan text-sm font-medium animate-bounce-in`,children:"✓ 进度已保存"}),l.jsxs("div",{className:"w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden",children:[l.jsx("div",{className:"p-5 border-b border-white/10",children:l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-xl font-display text-white",children:"设置"}),l.jsx("p",{className:"text-xs text-white/50 mt-1",children:"定制你的观星体验"})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[t.autoSave&&l.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] text-nebula-cyan/70",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-nebula-cyan animate-pulse"}),"自动保存中"]}),!t.autoSave&&l.jsx("button",{onClick:y,className:`text-xs px-3 py-1.5 rounded-lg bg-nebula-cyan/20 border border-nebula-cyan/30
                           text-nebula-cyan hover:bg-nebula-cyan/30 transition-all`,children:"💾 手动保存"}),l.jsx("button",{onClick:m,className:"icon-btn","aria-label":"关闭",children:"✕"})]})]})}),l.jsxs("div",{className:"flex-1 overflow-y-auto scrollbar-thin p-5 space-y-6",children:[l.jsxs("section",{children:[l.jsx("h3",{className:"text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 px-1",children:"🎮 体验设置"}),l.jsxs("div",{className:"space-y-3",children:[l.jsx(el,{label:"主音量",icon:"🔊",value:t.volume,min:0,max:1,step:.1,onChange:d=>h("volume",d),displayValue:`${Math.round(t.volume*100)}%`}),l.jsx(el,{label:"音效音量",icon:"🎵",value:t.sfxVolume,min:0,max:1,step:.1,onChange:d=>h("sfxVolume",d),displayValue:`${Math.round(t.sfxVolume*100)}%`}),l.jsx(tl,{label:"触控反馈",icon:"📳",description:"点击时触发震动反馈",value:t.hapticFeedback,onChange:d=>h("hapticFeedback",d)}),l.jsx(tl,{label:"自动保存",icon:"💾",description:"自动保存进度到本地存储",value:t.autoSave,onChange:d=>h("autoSave",d)})]})]}),l.jsxs("section",{children:[l.jsx("h3",{className:"text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 px-1",children:"🎨 画面设置"}),l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"p-4 rounded-xl bg-space-700/30 border border-white/5",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsx("span",{className:"text-lg",children:"🖼️"}),l.jsx("div",{children:l.jsx("div",{className:"text-sm text-white",children:"画质等级"})})]}),l.jsx("div",{className:"grid grid-cols-3 gap-2",children:["low","medium","high"].map(d=>l.jsx("button",{onClick:()=>h("graphicsQuality",d),className:`py-2 rounded-lg text-xs font-medium transition-all ${t.graphicsQuality===d?"bg-nebula-purple text-white":"bg-space-800/60 text-white/60 hover:bg-space-700/60"}`,children:d==="low"?"省电":d==="medium"?"均衡":"极致"},d))})]}),l.jsx(el,{label:"星星密度",icon:"✨",value:t.starDensity,min:.3,max:1.5,step:.1,onChange:d=>h("starDensity",d),displayValue:`${Math.round(t.starDensity*100)}%`}),l.jsx(el,{label:"动画速度",icon:"🌙",value:t.animationSpeed,min:.2,max:2,step:.1,onChange:d=>h("animationSpeed",d),displayValue:`${Math.round(t.animationSpeed*100)}%`}),l.jsx(tl,{label:"星云效果",icon:"🌌",description:"显示背景中的彩色星云",value:t.showNebula,onChange:d=>h("showNebula",d)}),l.jsx(tl,{label:"显示星名",icon:"🏷️",description:"悬停时显示星星名称",value:t.showLabels,onChange:d=>h("showLabels",d)})]})]}),l.jsxs("section",{children:[l.jsx("h3",{className:"text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 px-1",children:"📊 当前进度"}),l.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[l.jsxs("div",{className:"p-3 rounded-xl bg-space-700/30 border border-white/5 text-center",children:[l.jsxs("div",{className:"text-lg font-bold text-nebula-cyan",children:[p.constellations,"/",p.totalConstellations]}),l.jsx("div",{className:"text-[10px] text-white/50 mt-1",children:"星座"})]}),l.jsxs("div",{className:"p-3 rounded-xl bg-space-700/30 border border-white/5 text-center",children:[l.jsxs("div",{className:"text-lg font-bold text-star-gold",children:[p.achievements,"/",p.totalAchievements]}),l.jsx("div",{className:"text-[10px] text-white/50 mt-1",children:"成就"})]}),l.jsxs("div",{className:"p-3 rounded-xl bg-space-700/30 border border-white/5 text-center",children:[l.jsx("div",{className:"text-lg font-bold text-nebula-purple",children:p.logs}),l.jsx("div",{className:"text-[10px] text-white/50 mt-1",children:"日志"})]})]})]}),l.jsxs("section",{children:[l.jsx("h3",{className:"text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 px-1",children:"⚠️ 危险操作"}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("button",{onClick:g,className:`w-full p-3 rounded-xl bg-space-700/30 border border-white/5
                         hover:border-yellow-500/30 hover:bg-yellow-500/5
                         transition-all text-sm text-white/80`,children:"🔄 恢复默认设置"}),o?l.jsxs("div",{className:"p-4 rounded-xl bg-red-500/10 border border-red-500/30",children:[l.jsx("p",{className:"text-xs text-red-200 mb-3",children:"确定要清空所有进度、成就和日志吗？此操作无法撤销。"}),l.jsxs("div",{className:"flex gap-2",children:[l.jsx("button",{onClick:_,className:`flex-1 py-2 rounded-lg bg-red-500 text-white text-sm font-medium
                               hover:bg-red-600 transition-all`,children:"确认清空"}),l.jsx("button",{onClick:()=>{Ke.playClick(),c(!1)},className:`flex-1 py-2 rounded-lg bg-space-800 text-white/80 text-sm
                               hover:bg-space-700 transition-all`,children:"取消"})]})]}):l.jsx("button",{onClick:()=>{Ke.ensureContext(),Ke.playClick(),c(!0)},className:`w-full p-3 rounded-xl bg-space-700/30 border border-red-500/20
                           hover:bg-red-500/10 transition-all text-sm text-red-300`,children:"🗑️ 清空所有数据"})]})]}),l.jsx("div",{className:"text-center text-[10px] text-white/20 py-2",children:"StarConnect v1.0.0 · Made with ✨ for stargazers"})]})]})]})}function el({label:t,icon:e,value:n,min:i,max:r,step:s,onChange:a,displayValue:o}){return l.jsxs("div",{className:"p-4 rounded-xl bg-space-700/30 border border-white/5",children:[l.jsxs("div",{className:"flex items-center justify-between mb-3",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-lg",children:e}),l.jsx("span",{className:"text-sm text-white",children:t})]}),l.jsx("span",{className:"text-xs font-mono text-nebula-cyan",children:o})]}),l.jsx("input",{type:"range",min:i,max:r,step:s,value:n,onChange:c=>a(parseFloat(c.target.value)),className:`w-full h-2 rounded-full bg-space-900 appearance-none cursor-pointer
                   [&::-webkit-slider-thumb]:appearance-none
                   [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
                   [&::-webkit-slider-thumb]:rounded-full
                   [&::-webkit-slider-thumb]:bg-gradient-to-r
                   [&::-webkit-slider-thumb]:from-nebula-purple [&::-webkit-slider-thumb]:to-nebula-cyan
                   [&::-webkit-slider-thumb]:shadow-lg`})]})}function tl({label:t,icon:e,description:n,value:i,onChange:r}){return l.jsxs("div",{className:`p-4 rounded-xl bg-space-700/30 border border-white/5
                    flex items-center justify-between`,children:[l.jsxs("div",{className:"flex items-start gap-2",children:[l.jsx("span",{className:"text-lg",children:e}),l.jsxs("div",{children:[l.jsx("div",{className:"text-sm text-white",children:t}),n&&l.jsx("div",{className:"text-[10px] text-white/40 mt-0.5",children:n})]})]}),l.jsx("button",{onClick:()=>r(!i),className:`w-12 h-6 rounded-full transition-all duration-300 relative ${i?"bg-gradient-to-r from-nebula-purple to-nebula-cyan":"bg-space-900/80"}`,children:l.jsx("div",{className:`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md
                      transition-all duration-300 ${i?"left-[26px]":"left-0.5"}`})})]})}function UT(){const{setActivePanel:t,discoveredConstellations:e,seasonProgress:n,seasonRewardsUnlocked:i,seasonRewardsClaimed:r,claimSeasonReward:s,seasonHistory:a,totalObservations:o,perfectObservations:c,getSeasonStats:u,setTargetConstellation:f,openAtlasList:p,openAtlasDetail:h}=wt(),g=(F,z)=>{z.stopPropagation(),h(F)},_=Ff(),[y,m]=Le.useState(_),[d,x]=Le.useState("overview"),v=u(),E=v[y],R=Gt[y],C=Bl(y),S=Object.values(v).filter(F=>F.beginner.completed&&F.intermediate.completed&&F.master.completed).length,N=Math.round(Object.values(v).reduce((F,z)=>F+z.overallPercentage,0)/4),T=()=>l.jsxs("div",{className:"space-y-5",children:[l.jsxs("div",{className:`p-4 rounded-2xl border ${R.borderColor} ${R.bgColor}`,children:[l.jsxs("div",{className:"flex items-center justify-between mb-3",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{className:"text-3xl",children:R.icon}),l.jsxs("div",{children:[l.jsxs("h3",{className:`font-display text-lg ${R.textColor}`,children:[R.name,"观测计划"]}),l.jsxs("p",{className:"text-[11px] text-white/50",children:[R.months," · ",R.description]})]})]}),y===_&&l.jsx("span",{className:"text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/70",children:"当前季节"})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex justify-between text-xs mb-2",children:[l.jsx("span",{className:"text-white/60",children:"季节总进度"}),l.jsxs("span",{className:`font-mono ${R.textColor}`,children:[E.overallPercentage,"%"]})]}),l.jsx("div",{className:"h-2.5 bg-space-900/60 rounded-full overflow-hidden",children:l.jsx("div",{className:`h-full bg-gradient-to-r ${R.color} rounded-full transition-all duration-700`,style:{width:`${E.overallPercentage}%`}})})]})]}),l.jsx("div",{className:"space-y-3",children:Object.entries(Kn).map(([F,z])=>{const P=E[F],B=n[y][F],V=pl[y][F],Y=i.includes(V.id),D=r.includes(V.id);return l.jsxs("div",{className:`p-4 rounded-2xl border transition-all ${B?`${R.borderColor} ${R.bgColor}`:"border-white/10 bg-space-700/20"}`,children:[l.jsxs("div",{className:"flex items-start justify-between mb-2",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${B?`bg-gradient-to-br ${R.color} text-white`:"bg-space-600/50 text-white/50"}`,children:[B?"✓":z.multiplier,"×"]}),l.jsxs("div",{children:[l.jsx("h4",{className:`text-sm font-display ${B?"text-white":"text-white/80"}`,children:z.name}),l.jsx("p",{className:"text-[10px] text-white/40",children:z.description})]})]}),Y&&l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx("span",{className:"text-lg",children:V.icon}),D?l.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-300",children:"已领取"}):l.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-star-gold/20 text-star-gold animate-pulse",children:"可领取"})]})]}),l.jsxs("div",{className:"flex justify-between text-[10px] mb-1.5",children:[l.jsxs("span",{className:"text-white/50",children:[F==="beginner"&&`发现 ${P.target} 个当季星座`,F==="intermediate"&&`完美完成 ${P.target} 个当季星座`,F==="master"&&`累计反复观测 ${P.target} 次`]}),l.jsxs("span",{className:"text-white/60 font-mono",children:[P.current," / ",P.target]})]}),l.jsx("div",{className:"h-1.5 bg-space-900/60 rounded-full overflow-hidden",children:l.jsx("div",{className:`h-full rounded-full transition-all duration-700 ${B?`bg-gradient-to-r ${R.color}`:"bg-white/30"}`,style:{width:`${P.percentage}%`}})}),Y&&l.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-base",children:V.icon}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs text-white/80 font-medium",children:V.name}),l.jsx("p",{className:"text-[10px] text-white/40",children:V.description})]})]}),D?l.jsx("span",{className:"text-[11px] text-green-400/80",children:"✓ 已领取"}):l.jsx("button",{onClick:()=>s(V.id),className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-all
                                   bg-gradient-to-r ${R.color} text-white
                                   hover:shadow-lg active:scale-95`,children:"领取"})]})})]},F)})}),l.jsxs("div",{className:"p-4 rounded-2xl border border-white/10 bg-space-700/20",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsx("span",{className:"text-lg",children:"✨"}),l.jsx("h4",{className:"font-display text-white/90 text-sm",children:"当季星座"}),l.jsxs("span",{className:"text-[10px] text-white/40 ml-auto",children:[E.discovered," / ",E.constellations]})]}),l.jsx("div",{className:"grid grid-cols-2 gap-2",children:C.map(F=>{const z=Zi(F);if(!z)return null;const P=e.includes(F),B=c[F],V=o[F]||0;return l.jsx("div",{className:`p-3 rounded-xl border text-left transition-all card-hover ${P?"border-nebula-purple/40 bg-nebula-purple/5":"border-white/10 bg-space-800/40"}`,children:l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("button",{onClick:()=>{f(F),t(null)},className:"flex-1 min-w-0 text-left",children:l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:`text-sm ${P?"":"opacity-50 grayscale"}`,children:P?"⭐":"☆"}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:`text-xs font-medium truncate ${P?"text-white":"text-white/50"}`,children:z.name}),l.jsxs("div",{className:"flex items-center gap-1.5 mt-0.5",children:[B&&l.jsx("span",{className:"text-[9px] px-1 py-0.5 rounded bg-star-gold/20 text-star-gold",children:"完美"}),V>1&&l.jsxs("span",{className:"text-[9px] text-white/40",children:["×",V]})]})]})]})}),l.jsx("button",{onClick:Y=>g(F,Y),className:`w-6 h-6 flex items-center justify-center rounded-lg
                             bg-space-600/30 text-white/40 text-[10px]
                             hover:bg-nebula-purple/30 hover:text-nebula-cyan transition-all
                             flex-shrink-0`,title:"在图鉴中查看详情",children:"📚"})]})},F)})})]})]}),w=()=>l.jsxs("div",{className:"space-y-3",children:[l.jsx("div",{className:"p-4 rounded-2xl border border-white/10 bg-space-700/20",children:l.jsx("div",{className:"grid grid-cols-4 gap-2 text-center",children:Object.entries(Gt).map(([F,z])=>{const P=v[F].beginner.completed&&v[F].intermediate.completed&&v[F].master.completed;return l.jsxs("div",{className:`p-2 rounded-lg ${P?z.bgColor:"bg-space-800/40"}`,children:[l.jsx("div",{className:"text-2xl mb-1",children:z.icon}),l.jsx("div",{className:`text-[11px] ${P?z.textColor:"text-white/50"}`,children:z.name}),l.jsxs("div",{className:"text-[10px] text-white/40 mt-0.5",children:[v[F].overallPercentage,"%"]})]},F)})})}),a.length===0?l.jsxs("div",{className:"h-40 flex flex-col items-center justify-center text-center",children:[l.jsx("div",{className:"text-4xl mb-3 opacity-30",children:"🗓️"}),l.jsx("h4",{className:"text-white/60 font-display mb-1",children:"暂无季节进度记录"}),l.jsx("p",{className:"text-xs text-white/40 max-w-xs leading-relaxed",children:"开始探索星座，你的季节里程碑将记录在这里"})]}):l.jsx("div",{className:"space-y-2",children:a.map((F,z)=>{const P=Gt[F.seasonId],B=Kn[F.phaseId],V=pl[F.seasonId][F.phaseId];return l.jsx("div",{className:`p-3 rounded-xl border ${P.borderColor} ${P.bgColor}`,children:l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center text-xl
                                  bg-gradient-to-br ${P.color}`,children:P.icon}),l.jsxs("div",{className:"flex-1",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"text-sm font-display text-white",children:[P.name," · ",B.name]}),l.jsx("span",{className:"text-base",children:V.icon})]}),l.jsxs("div",{className:"text-[11px] text-white/50 mt-0.5",children:["完成阶段目标，获得「",V.name,"」"]}),l.jsx("div",{className:"text-[10px] text-white/30 mt-0.5 font-mono",children:Ns(F.timestamp)})]})]})},z)})})]}),L=()=>{const F=[];return Object.entries(pl).forEach(([z,P])=>{Object.entries(P).forEach(([B,V])=>{F.push({seasonId:z,phaseId:B,...V})})}),l.jsx("div",{className:"space-y-4",children:Object.entries(Gt).map(([z,P])=>{const B=F.filter(Y=>Y.seasonId===z),V=B.filter(Y=>r.includes(Y.id)).length;return l.jsxs("div",{className:`p-4 rounded-2xl border ${P.borderColor} ${P.bgColor}`,children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsx("span",{className:"text-xl",children:P.icon}),l.jsxs("h4",{className:`font-display text-sm ${P.textColor}`,children:[P.name,"奖励"]}),l.jsxs("span",{className:"text-[10px] text-white/40 ml-auto",children:[V," / ",B.length]})]}),l.jsx("div",{className:"grid grid-cols-3 gap-2",children:B.map(Y=>{const D=i.includes(Y.id),$=r.includes(Y.id);return l.jsxs("div",{className:`p-3 rounded-xl text-center transition-all border ${$?"bg-white/10 border-green-400/30":D?"bg-star-gold/5 border-star-gold/20 ring-1 ring-star-gold/10":"bg-space-900/40 border-white/5 opacity-50"}`,children:[l.jsx("div",{className:`text-2xl mb-1 ${D?"":"grayscale"}`,children:Y.icon}),l.jsx("p",{className:`text-[11px] font-medium ${$?"text-green-300":D?"text-star-gold":"text-white/40"}`,children:Y.name}),l.jsx("p",{className:"text-[9px] text-white/40 mt-0.5 leading-tight",children:Y.description}),D&&!$&&l.jsx("button",{onClick:()=>s(Y.id),className:`mt-2 px-2.5 py-1 rounded-md text-[10px] font-medium
                                     bg-gradient-to-r ${P.color} text-white
                                     hover:shadow-md active:scale-95 transition-all`,children:"领取"}),$&&l.jsx("span",{className:"mt-1.5 inline-block text-[10px] text-green-400/70",children:"✓ 已领取"})]},Y.id)})})]},z)})})};return l.jsx("div",{className:`absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200`,children:l.jsxs("div",{className:"w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden",children:[l.jsxs("div",{className:"p-5 border-b border-white/10",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-xl font-display text-white",children:"四季观测计划"}),l.jsx("p",{className:"text-xs text-white/50 mt-1",children:"跟随季节的脚步，探索星空的奥秘"})]}),l.jsx("button",{onClick:()=>t(null),className:"icon-btn","aria-label":"关闭",children:"✕"})]}),l.jsxs("div",{className:"mt-4",children:[l.jsxs("div",{className:"flex justify-between text-xs mb-2",children:[l.jsx("span",{className:"text-white/60",children:"年度总进度"}),l.jsxs("span",{className:"text-star-gold font-mono",children:[S," / 4 季 · ",N,"%"]})]}),l.jsx("div",{className:"h-3 bg-space-900/80 rounded-full overflow-hidden flex",children:Object.entries(Gt).map(([F,z])=>l.jsx("div",{className:`h-full bg-gradient-to-r ${z.color} transition-all duration-500`,style:{width:`${v[F].overallPercentage/4}%`}},F))})]}),l.jsx("div",{className:"mt-4 grid grid-cols-4 gap-2",children:Object.entries(Gt).map(([F,z])=>l.jsxs("button",{onClick:()=>m(F),className:`p-2 rounded-xl text-center transition-all ${y===F?`${z.bgColor} ${z.borderColor} border`:"bg-space-700/30 border border-transparent hover:bg-space-700/50"}`,children:[l.jsx("div",{className:"text-xl",children:z.icon}),l.jsx("div",{className:`text-[10px] mt-0.5 ${y===F?z.textColor:"text-white/50"}`,children:z.name}),l.jsxs("div",{className:"text-[9px] text-white/30 mt-0.5",children:[v[F].overallPercentage,"%"]})]},F))}),l.jsx("div",{className:"mt-3",children:l.jsxs("button",{onClick:p,className:`w-full py-2 px-4 rounded-xl bg-gradient-to-r from-nebula-purple/20 to-nebula-cyan/20
                       border border-nebula-purple/30 text-white text-sm
                       hover:from-nebula-purple/30 hover:to-nebula-cyan/30
                       transition-all flex items-center justify-center gap-2`,children:[l.jsx("span",{children:"📚"}),l.jsx("span",{children:"查看星空图鉴"}),l.jsx("span",{className:"text-nebula-cyan",children:"→"})]})}),l.jsx("div",{className:"mt-4 flex gap-2",children:[{id:"overview",label:"进度",icon:"📊"},{id:"rewards",label:"奖励",icon:"🎁"},{id:"history",label:"回溯",icon:"🗓️"}].map(F=>l.jsxs("button",{onClick:()=>x(F.id),className:`flex-1 py-2 px-3 rounded-lg text-xs transition-all flex items-center justify-center gap-1 ${d===F.id?"bg-white/10 text-white border border-white/10":"text-white/50 hover:text-white/80"}`,children:[l.jsx("span",{children:F.icon}),l.jsx("span",{children:F.label})]},F.id))})]}),l.jsxs("div",{className:"flex-1 overflow-y-auto scrollbar-thin p-5",children:[d==="overview"&&T(),d==="rewards"&&L(),d==="history"&&w()]})]})})}function FT({constellationId:t}){const{discoveredConstellations:e,favoriteConstellations:n,toggleFavorite:i,isConstellationComplete:r,totalObservations:s,perfectObservations:a,setTargetConstellation:o,setActivePanel:c,observationLogs:u,resetAtlasState:f,openAtlasList:p}=wt(),h=Le.useMemo(()=>Zi(t),[t]),g=h?r(h.id):!1,_=h?n.includes(h.id):!1,y=h&&s[h.id]||0,m=h&&a[h.id]||!1,d=(h==null?void 0:h.season)==="春"?"spring":(h==null?void 0:h.season)==="夏"?"summer":(h==null?void 0:h.season)==="秋"?"autumn":"winter",x=h?Gt[d]:null,v=Le.useMemo(()=>{if(!h)return null;const S=u.find(N=>N.type==="discovery"&&N.constellationId===h.id);return S?new Date(S.timestamp):null},[h,u]);if(!h)return l.jsx("div",{className:`absolute inset-0 z-40 flex items-center justify-center p-4
                      bg-space-900/70 backdrop-blur-sm`,children:l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:"text-4xl mb-3",children:"🌌"}),l.jsx("p",{className:"text-white/50",children:"星座信息加载失败"}),l.jsx("button",{onClick:p,className:"mt-4 btn-secondary text-sm",children:"返回图鉴"})]})});const E=()=>{p()},R=()=>{o(h.id),f(),c(null)},C=()=>{f(),c(null)};return l.jsx("div",{className:`absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200`,children:l.jsxs("div",{className:"w-full max-w-2xl glass-panel max-h-[85vh] flex flex-col overflow-hidden",children:[l.jsxs("div",{className:`relative h-32 overflow-hidden ${x?`bg-gradient-to-br ${x.color}`:"bg-space-700"}`,children:[l.jsx("div",{className:"absolute inset-0 bg-black/30"}),l.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:l.jsx("div",{className:"text-6xl opacity-30",children:g?"✦":"○"})}),l.jsxs("div",{className:"absolute top-4 left-4 right-4 flex items-start justify-between",children:[l.jsx("button",{onClick:E,className:`w-10 h-10 flex items-center justify-center rounded-full
                       bg-black/30 text-white/80 hover:bg-black/50 transition-all`,children:"←"}),l.jsxs("div",{className:"flex gap-2",children:[l.jsx("button",{onClick:()=>i(h.id),className:`w-10 h-10 flex items-center justify-center rounded-full
                          transition-all ${_?"bg-star-gold/30 text-star-gold":"bg-black/30 text-white/50 hover:text-star-gold hover:bg-black/50"}`,children:_?"★":"☆"}),l.jsx("button",{onClick:C,className:`w-10 h-10 flex items-center justify-center rounded-full
                         bg-black/30 text-white/80 hover:bg-black/50 transition-all`,children:"✕"})]})]}),l.jsxs("div",{className:"absolute bottom-4 left-5 right-5",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("h1",{className:"text-2xl font-display text-white",children:h.name}),g&&l.jsx("span",{className:"text-star-gold text-lg",children:"✓"}),m&&l.jsx("span",{className:"text-nebula-cyan text-xs px-2 py-0.5 rounded-full bg-nebula-cyan/20",children:"完美"})]}),l.jsx("p",{className:"text-sm text-white/70",children:h.nameEn})]})]}),l.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-thin",children:l.jsxs("div",{className:"p-5 space-y-6",children:[l.jsxs("div",{className:"flex flex-wrap gap-2",children:[l.jsxs("span",{className:`text-xs px-3 py-1 rounded-full ${h.difficulty===1?"bg-green-500/20 text-green-300":h.difficulty===2?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:["⭐".repeat(h.difficulty)," ",Os[h.difficulty].label]}),x&&l.jsxs("span",{className:`text-xs px-3 py-1 rounded-full ${x.bgColor} ${x.textColor} ${x.borderColor} border`,children:[x.icon," ",h.season,"季星座"]}),g&&l.jsx("span",{className:"text-xs px-3 py-1 rounded-full bg-nebula-purple/20 text-nebula-purple border border-nebula-purple/30",children:"已发现"}),y>1&&l.jsxs("span",{className:"text-xs px-3 py-1 rounded-full bg-space-700/60 text-white/70",children:["观测 ",y," 次"]})]}),l.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[l.jsxs("div",{className:"p-3 rounded-xl bg-space-700/40 text-center",children:[l.jsx("div",{className:"text-lg font-bold text-white",children:h.stars.length}),l.jsx("div",{className:"text-[10px] text-white/50",children:"主要恒星"})]}),l.jsxs("div",{className:"p-3 rounded-xl bg-space-700/40 text-center",children:[l.jsx("div",{className:"text-lg font-bold text-white",children:h.area}),l.jsx("div",{className:"text-[10px] text-white/50",children:"面积排名"})]}),l.jsxs("div",{className:"p-3 rounded-xl bg-space-700/40 text-center",children:[l.jsxs("div",{className:"text-lg font-bold text-white",children:["第",h.ranking,"位"]}),l.jsx("div",{className:"text-[10px] text-white/50",children:"全天排名"})]})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsx("h3",{className:"text-sm font-display text-white border-l-2 border-nebula-purple pl-3",children:"星座简介"}),l.jsx("p",{className:"text-sm text-white/70 leading-relaxed",children:h.description})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsx("h3",{className:"text-sm font-display text-white border-l-2 border-star-gold pl-3",children:"神话故事"}),l.jsx("div",{className:"p-4 rounded-xl bg-space-700/30 border border-star-gold/10",children:l.jsx("p",{className:"text-sm text-white/70 leading-relaxed",children:h.mythologyDetail})})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsx("h3",{className:"text-sm font-display text-white border-l-2 border-nebula-cyan pl-3",children:"观测指南"}),l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"flex items-start gap-3 p-3 rounded-xl bg-space-700/30",children:[l.jsx("span",{className:"text-xl",children:"🌍"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs text-white/50",children:"可见半球"}),l.jsx("p",{className:"text-sm text-white/80",children:h.hemisphere})]})]}),l.jsxs("div",{className:"flex items-start gap-3 p-3 rounded-xl bg-space-700/30",children:[l.jsx("span",{className:"text-xl",children:"⏰"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs text-white/50",children:"最佳观测时间"}),l.jsx("p",{className:"text-sm text-white/80",children:h.bestTime})]})]}),l.jsxs("div",{className:"flex items-start gap-3 p-3 rounded-xl bg-space-700/30",children:[l.jsx("span",{className:"text-xl",children:"💡"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs text-white/50",children:"观测技巧"}),l.jsx("p",{className:"text-sm text-white/80",children:h.observationTips})]})]})]})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsx("h3",{className:"text-sm font-display text-white border-l-2 border-nebula-orange pl-3",children:"主要恒星"}),l.jsx("div",{className:"space-y-2",children:h.stars.map((S,N)=>l.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-xl bg-space-700/30 hover:bg-space-700/50 transition-colors",children:[l.jsx("div",{className:"w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",style:{backgroundColor:S.color+"30",boxShadow:`0 0 10px ${S.color}40`},children:l.jsx("div",{className:"w-3 h-3 rounded-full",style:{backgroundColor:S.color}})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:"text-sm text-white font-medium",children:S.name}),l.jsxs("p",{className:"text-[10px] text-white/40",children:["星等: ",S.mag]})]}),l.jsxs("span",{className:"text-[10px] text-white/40",children:["#",N+1]})]},S.id))})]}),h.tags&&h.tags.length>0&&l.jsxs("div",{className:"space-y-3",children:[l.jsx("h3",{className:"text-sm font-display text-white border-l-2 border-white/30 pl-3",children:"标签"}),l.jsx("div",{className:"flex flex-wrap gap-2",children:h.tags.map((S,N)=>l.jsxs("span",{className:"text-xs px-3 py-1 rounded-full bg-space-700/50 text-white/60 border border-white/10",children:["#",S]},N))})]}),v&&l.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-r from-nebula-purple/20 to-nebula-cyan/20 border border-nebula-purple/20",children:[l.jsx("p",{className:"text-xs text-white/50 text-center",children:"发现时间"}),l.jsx("p",{className:"text-sm text-white/80 text-center font-medium mt-1",children:v.toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})})]})]})}),l.jsx("div",{className:"p-5 border-t border-white/10",children:l.jsxs("div",{className:"flex gap-3",children:[l.jsx("button",{onClick:E,className:"flex-1 btn-secondary",children:"返回图鉴"}),l.jsx("button",{onClick:R,className:"flex-1 btn-primary",children:g?"再次观测":"开始观测"})]})})]})})}function kT(){const{discoveredConstellations:t,favoriteConstellations:e,toggleFavorite:n,isConstellationComplete:i,setTargetConstellation:r,activeAtlasPanel:s,selectedConstellationDetail:a,setActivePanel:o,resetAtlasState:c,openAtlasDetail:u}=wt(),[f,p]=Le.useState(""),[h,g]=Le.useState("all"),[_,y]=Le.useState("all"),[m,d]=Le.useState("all"),[x,v]=Le.useState("name"),[E,R]=Le.useState("grid"),C=Le.useMemo(()=>{let P=[...rt];if(f){const B=f.toLowerCase();P=P.filter(V=>V.name.toLowerCase().includes(B)||V.nameEn.toLowerCase().includes(B)||V.description.toLowerCase().includes(B)||V.tags.some(Y=>Y.toLowerCase().includes(B)))}return h!=="all"&&(P=P.filter(B=>B.season===h)),_!=="all"&&(P=P.filter(B=>B.difficulty===parseInt(_))),m==="discovered"?P=P.filter(B=>i(B.id)):m==="undiscovered"?P=P.filter(B=>!i(B.id)):m==="favorites"&&(P=P.filter(B=>e.includes(B.id))),P.sort((B,V)=>{switch(x){case"name":return B.name.localeCompare(V.name);case"difficulty":return B.difficulty-V.difficulty;case"season":return B.season.localeCompare(V.season);case"newest":return t.indexOf(V.id)-t.indexOf(B.id);default:return 0}}),P},[f,h,_,m,x,t,e,i]),S=Le.useMemo(()=>{const P=rt.length,B=t.length,V=e.length,Y={春:rt.filter($=>$.season==="春").length,夏:rt.filter($=>$.season==="夏").length,秋:rt.filter($=>$.season==="秋").length,冬:rt.filter($=>$.season==="冬").length},D={1:rt.filter($=>$.difficulty===1).length,2:rt.filter($=>$.difficulty===2).length,3:rt.filter($=>$.difficulty===3).length};return{total:P,discovered:B,favorites:V,bySeason:Y,byDifficulty:D}},[t,e]),N=[{value:"all",label:"全部季节"},{value:"春",label:"🌸 春季"},{value:"夏",label:"☀️ 夏季"},{value:"秋",label:"🍂 秋季"},{value:"冬",label:"❄️ 冬季"}],T=[{value:"all",label:"全部难度"},{value:"1",label:"⭐ 入门"},{value:"2",label:"⭐⭐ 进阶"},{value:"3",label:"⭐⭐⭐ 挑战"}],w=[{value:"all",label:"全部状态"},{value:"discovered",label:"✓ 已发现"},{value:"undiscovered",label:"○ 未发现"},{value:"favorites",label:"★ 收藏"}],L=[{value:"name",label:"按名称"},{value:"difficulty",label:"按难度"},{value:"season",label:"按季节"},{value:"newest",label:"最近发现"}],F=P=>{u(P)},z=P=>{r(P),c(),o(null)};return s==="detail"&&a?l.jsx(FT,{constellationId:a}):l.jsx("div",{className:`absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200`,children:l.jsxs("div",{className:"w-full max-w-2xl glass-panel max-h-[85vh] flex flex-col overflow-hidden",children:[l.jsxs("div",{className:"p-5 border-b border-white/10",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-xl font-display text-white",children:l.jsx("span",{className:"text-gradient",children:"星空图鉴"})}),l.jsx("p",{className:"text-xs text-white/50 mt-1",children:"探索星座奥秘，记录你的星空发现"})]}),l.jsx("button",{onClick:()=>{c(),o(null)},className:"icon-btn","aria-label":"关闭",children:"✕"})]}),l.jsxs("div",{className:"mt-4 grid grid-cols-4 gap-2 text-center",children:[l.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[l.jsx("div",{className:"text-lg font-bold text-nebula-cyan",children:S.discovered}),l.jsx("div",{className:"text-[10px] text-white/50",children:"已发现"})]}),l.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[l.jsx("div",{className:"text-lg font-bold text-white/80",children:S.total}),l.jsx("div",{className:"text-[10px] text-white/50",children:"总星座"})]}),l.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[l.jsx("div",{className:"text-lg font-bold text-star-gold",children:S.favorites}),l.jsx("div",{className:"text-[10px] text-white/50",children:"收藏"})]}),l.jsxs("div",{className:"p-2 rounded-lg bg-space-700/40",children:[l.jsxs("div",{className:"text-lg font-bold text-nebula-purple",children:[Math.round(S.discovered/S.total*100),"%"]}),l.jsx("div",{className:"text-[10px] text-white/50",children:"完成度"})]})]}),l.jsxs("div",{className:"mt-4 relative",children:[l.jsx("input",{type:"text",placeholder:"搜索星座名称、描述或标签...",value:f,onChange:P=>p(P.target.value),className:`w-full px-4 py-2.5 pl-10 bg-space-700/50 border border-white/10 rounded-xl
                       text-white placeholder-white/40 text-sm focus:outline-none focus:border-nebula-purple/50
                       focus:ring-1 focus:ring-nebula-purple/30 transition-all`}),l.jsx("span",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-white/40",children:"🔍"}),f&&l.jsx("button",{onClick:()=>p(""),className:"absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 text-sm",children:"✕"})]}),l.jsxs("div",{className:"mt-3 flex flex-wrap gap-2",children:[l.jsx("div",{className:"flex items-center gap-1",children:l.jsx("select",{value:h,onChange:P=>g(P.target.value),className:`px-2 py-1.5 bg-space-700/50 border border-white/10 rounded-lg
                         text-white text-xs focus:outline-none focus:border-nebula-purple/50`,children:N.map(P=>l.jsx("option",{value:P.value,className:"bg-space-800",children:P.label},P.value))})}),l.jsx("div",{className:"flex items-center gap-1",children:l.jsx("select",{value:_,onChange:P=>y(P.target.value),className:`px-2 py-1.5 bg-space-700/50 border border-white/10 rounded-lg
                         text-white text-xs focus:outline-none focus:border-nebula-purple/50`,children:T.map(P=>l.jsx("option",{value:P.value,className:"bg-space-800",children:P.label},P.value))})}),l.jsx("div",{className:"flex items-center gap-1",children:l.jsx("select",{value:m,onChange:P=>d(P.target.value),className:`px-2 py-1.5 bg-space-700/50 border border-white/10 rounded-lg
                         text-white text-xs focus:outline-none focus:border-nebula-purple/50`,children:w.map(P=>l.jsx("option",{value:P.value,className:"bg-space-800",children:P.label},P.value))})}),l.jsxs("div",{className:"flex items-center gap-1 ml-auto",children:[l.jsx("select",{value:x,onChange:P=>v(P.target.value),className:`px-2 py-1.5 bg-space-700/50 border border-white/10 rounded-lg
                         text-white text-xs focus:outline-none focus:border-nebula-purple/50`,children:L.map(P=>l.jsx("option",{value:P.value,className:"bg-space-800",children:P.label},P.value))}),l.jsxs("div",{className:"flex bg-space-700/50 rounded-lg border border-white/10",children:[l.jsx("button",{onClick:()=>R("grid"),className:`px-2 py-1.5 text-xs rounded-l-lg transition-colors ${E==="grid"?"bg-nebula-purple/30 text-white":"text-white/50 hover:text-white/80"}`,children:"▦"}),l.jsx("button",{onClick:()=>R("list"),className:`px-2 py-1.5 text-xs rounded-r-lg transition-colors ${E==="list"?"bg-nebula-purple/30 text-white":"text-white/50 hover:text-white/80"}`,children:"☰"})]})]})]})]}),l.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-thin p-5",children:C.length===0?l.jsxs("div",{className:"text-center py-12",children:[l.jsx("div",{className:"text-4xl mb-3 opacity-50",children:"🌌"}),l.jsx("p",{className:"text-white/50 text-sm",children:f?"没有找到匹配的星座":"暂无符合条件的星座"}),(f||h!=="all"||_!=="all"||m!=="all")&&l.jsx("button",{onClick:()=>{p(""),g("all"),y("all"),d("all")},className:"mt-3 text-xs text-nebula-cyan hover:underline",children:"清除筛选条件"})]}):E==="grid"?l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:C.map(P=>{const B=i(P.id),V=e.includes(P.id),Y=P.season==="春"?"spring":P.season==="夏"?"summer":P.season==="秋"?"autumn":"winter",D=Gt[Y];return l.jsxs("div",{className:`relative rounded-2xl border overflow-hidden transition-all card-hover cursor-pointer ${B?"border-nebula-purple/50 bg-nebula-purple/8":"border-white/10 bg-space-700/30"}`,onClick:()=>F(P.id),children:[l.jsxs("div",{className:`h-20 relative overflow-hidden ${D?`bg-gradient-to-br ${D.color} opacity-20`:"bg-space-600/30"}`,children:[l.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:l.jsx("div",{className:"text-3xl opacity-60",children:B?"✦":"○"})}),l.jsx("div",{className:"absolute top-2 right-2 flex gap-1",children:l.jsx("button",{onClick:$=>{$.stopPropagation(),n(P.id)},className:`w-6 h-6 flex items-center justify-center rounded-full
                                    transition-all text-xs ${V?"bg-star-gold/20 text-star-gold":"bg-space-900/40 text-white/30 hover:text-star-gold"}`,children:V?"★":"☆"})})]}),l.jsxs("div",{className:"p-3",children:[l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("h3",{className:"text-sm font-display text-white truncate flex-1",children:P.name}),B&&l.jsx("span",{className:"text-star-gold text-xs",children:"✓"})]}),l.jsx("p",{className:"text-[10px] text-white/40 truncate",children:P.nameEn}),l.jsxs("div",{className:"mt-2 flex items-center gap-1.5",children:[l.jsx("span",{className:`text-[9px] px-1.5 py-0.5 rounded ${P.difficulty===1?"bg-green-500/20 text-green-300":P.difficulty===2?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:Os[P.difficulty].label}),l.jsxs("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-space-600/50 text-white/50",children:[D==null?void 0:D.icon," ",P.season]})]})]})]},P.id)})}):l.jsx("div",{className:"space-y-3",children:C.map(P=>{const B=i(P.id),V=e.includes(P.id),Y=P.season==="春"?"spring":P.season==="夏"?"summer":P.season==="秋"?"autumn":"winter",D=Gt[Y];return l.jsx("div",{className:`p-4 rounded-2xl border transition-all card-hover cursor-pointer ${B?"border-nebula-purple/50 bg-nebula-purple/8":"border-white/10 bg-space-700/30"}`,onClick:()=>F(P.id),children:l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx("div",{className:`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${D?`bg-gradient-to-br ${D.color} opacity-30`:"bg-space-600/30"}`,children:l.jsx("span",{className:"text-2xl",children:B?"✦":"○"})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("h3",{className:"text-base font-display text-white truncate",children:P.name}),B&&l.jsx("span",{className:"text-star-gold text-sm",children:"✓"})]}),l.jsx("p",{className:"text-[11px] text-white/40",children:P.nameEn}),l.jsx("p",{className:"text-xs text-white/60 mt-1 line-clamp-2",children:P.description}),l.jsxs("div",{className:"mt-2 flex items-center gap-2 flex-wrap",children:[l.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded ${P.difficulty===1?"bg-green-500/20 text-green-300":P.difficulty===2?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:Os[P.difficulty].label}),l.jsxs("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-space-600/50 text-white/50",children:[D==null?void 0:D.icon," ",P.season,"季"]}),l.jsxs("span",{className:"text-[10px] text-white/40",children:["✦ ",P.stars.length," 星"]})]})]}),l.jsxs("div",{className:"flex flex-col gap-2 flex-shrink-0",children:[l.jsx("button",{onClick:$=>{$.stopPropagation(),n(P.id)},className:`w-8 h-8 flex items-center justify-center rounded-full
                                    transition-all ${V?"bg-star-gold/20 text-star-gold":"bg-space-700/60 text-white/30 hover:text-star-gold hover:bg-space-600/60"}`,children:V?"★":"☆"}),l.jsx("button",{onClick:$=>{$.stopPropagation(),z(P.id)},className:`w-8 h-8 flex items-center justify-center rounded-full
                                   bg-nebula-purple/20 text-nebula-cyan hover:bg-nebula-purple/30
                                   transition-all`,title:"开始观测",children:"▶"})]})]})},P.id)})})})]})})}function OT(){var E,R;const{activePanel:t,setActivePanel:e,openAtlasList:n,getProgress:i,unlockedAchievements:r,observationLogs:s,seasonRewardsClaimed:a,getSeasonStats:o,favoriteConstellations:c,familyMode:u,getFamilyProgress:f,nightExpedition:p}=wt(),h=i(),g=f(),_=Ff(),m=o()[_],d=Object.keys(Gt).length*3,x=[{id:"tasks",label:"星座",icon:"✨",badge:h.totalConstellations-h.constellations>0?(h.totalConstellations-h.constellations).toString():null},{id:"atlas",label:"图鉴",icon:"📚",badge:c.length>0?c.length.toString():null},{id:"family",label:"亲子",icon:"👨‍👩‍👧",badge:g.unlockedAchievements>0&&!u.enabled?g.unlockedAchievements.toString():u.enabled?"ON":null,badgeColor:u.enabled?"bg-green-500 text-white":null},{id:"expedition",label:"远征",icon:"🌙",badge:(E=p.currentRun)!=null&&E.active?`${p.currentRun.stageIndex+1}`:p.stamina<5?`${p.stamina}`:null,badgeColor:(R=p.currentRun)!=null&&R.active?"bg-violet-500 text-white":null},{id:null,label:"夜空",icon:"🌌",isHome:!0},{id:"seasons",label:"四季",icon:Gt[_].icon,badge:a.length<d&&(m==null?void 0:m.overallPercentage)>0?`${(m==null?void 0:m.overallPercentage)||0}%`:null},{id:"achievements",label:"成就",icon:"🏆",badge:r.length>0?r.length.toString():null},{id:"settings",label:"设置",icon:"⚙️"}],v=C=>{Ke.ensureContext(),(t===C||C===null&&t===null)&&C!==null?Ke.playPanelClose():Ke.playPanelOpen();const N=C==="atlas"&&t==="atlas";if(C==="family"){e(t==="family"?null:"family");return}N?e(null):C==="atlas"?n():e(t===C?null:C)};return l.jsx("div",{className:"absolute left-0 right-0 bottom-0 z-20 p-3 pb-safe pointer-events-none",children:l.jsx("div",{className:"max-w-lg mx-auto pointer-events-auto",children:l.jsx("div",{className:"glass-panel p-1.5 flex items-center justify-around relative",children:x.map(C=>{const S=t===C.id||C.isHome&&t===null;return l.jsxs("button",{onClick:()=>v(C.id),className:`relative flex flex-col items-center justify-center rounded-xl px-2 py-2
                          transition-all duration-200 min-w-[44px] ${S?C.isHome?"bg-gradient-to-br from-nebula-purple to-nebula-cyan text-white shadow-lg -mt-5":"bg-white/10 text-white":"text-white/50 hover:text-white/80 hover:bg-white/5"}`,children:[l.jsx("span",{className:`${C.isHome?"text-2xl":"text-lg"}`,children:C.icon}),l.jsx("span",{className:`mt-0.5 ${C.isHome?"text-[10px] font-medium":"text-[9px]"}`,children:C.label}),C.badge&&!S&&l.jsx("span",{className:`absolute -top-0.5 -right-0.5 px-1 h-4 min-w-[16px] rounded-full
                                 text-[8px] font-bold flex items-center justify-center
                                 ${C.badgeColor||"bg-star-gold text-space-900"}`,children:C.badge.length>3?"99+":C.badge})]},C.label)})})})})}function zT(){const[t,e]=Le.useState(null),n=wt(s=>s.unlockedAchievements),[i,r]=Le.useState([]);return Le.useEffect(()=>{const s=n.filter(a=>!i.includes(a));if(s.length>0&&i.length>0){const a=l0(s[0]);a&&(e(a),Ke.ensureContext(),Ke.playAchievement(),setTimeout(()=>e(null),3500))}r([...n])},[n]),t?l.jsx("div",{className:"fixed inset-x-0 top-20 z-50 flex justify-center px-4 pointer-events-none animate-in slide-in-from-top-4 duration-500",children:l.jsx("div",{className:`glass-panel px-5 py-4 max-w-sm w-full border-star-gold/30
                    shadow-2xl shadow-star-gold/10 animate-bounce-in`,children:l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:`w-12 h-12 rounded-xl bg-gradient-to-br from-star-gold to-nebula-orange
                        flex items-center justify-center text-2xl shadow-lg animate-pulse-slow`,children:t.icon}),l.jsxs("div",{className:"flex-1",children:[l.jsx("div",{className:"text-[10px] text-star-gold uppercase tracking-widest font-semibold",children:"成就解锁"}),l.jsx("div",{className:"text-white font-display text-lg",children:t.name}),l.jsx("div",{className:"text-white/50 text-xs",children:t.description})]}),l.jsx("div",{className:"text-star-gold text-2xl animate-pulse-slow",children:"✦"})]})})}):null}class jT{constructor(){this.synth=null,this.currentUtterance=null,this.isSpeaking=!1,this.voiceEnabled=!0,this.voiceVolume=.8,this.voiceRate=.9,this.voicePitch=1,this.selectedVoice=null,this.initialized=!1}init(){this.initialized||("speechSynthesis"in window?(this.synth=window.speechSynthesis,this.loadVoices(),this.synth.onvoiceschanged!==void 0&&(this.synth.onvoiceschanged=()=>this.loadVoices()),this.initialized=!0):console.warn("Speech synthesis not supported"))}loadVoices(){if(!this.synth)return;const e=this.synth.getVoices(),n=e.filter(i=>i.lang.includes("zh"));n.length>0?this.selectedVoice=n.find(i=>i.name.includes("Female"))||n.find(i=>i.name.includes("female"))||n[0]:e.length>0&&(this.selectedVoice=e[0])}setVoicePreferences({volume:e,rate:n,pitch:i}){e!==void 0&&(this.voiceVolume=Math.max(0,Math.min(1,e))),n!==void 0&&(this.voiceRate=Math.max(.5,Math.min(2,n))),i!==void 0&&(this.voicePitch=Math.max(.5,Math.min(2,i)))}toggleVoice(e){this.voiceEnabled=e,!e&&this.isSpeaking&&this.stop()}speak(e,n={}){return new Promise((i,r)=>{if(!this.voiceEnabled||!this.synth){i(!1);return}this.stop();const s=new SpeechSynthesisUtterance(e);this.selectedVoice&&(s.voice=this.selectedVoice),s.volume=n.volume??this.voiceVolume,s.rate=n.rate??this.voiceRate,s.pitch=n.pitch??this.voicePitch,s.lang=n.lang||"zh-CN",s.onstart=()=>{this.isSpeaking=!0,this.currentUtterance=s,n.onStart&&n.onStart()},s.onend=()=>{this.isSpeaking=!1,this.currentUtterance=null,n.onEnd&&n.onEnd(),i(!0)},s.onerror=a=>{this.isSpeaking=!1,this.currentUtterance=null,n.onError&&n.onError(a),r(a)},this.synth.speak(s)})}stop(){this.synth&&(this.synth.cancel(),this.isSpeaking=!1,this.currentUtterance=null)}pause(){this.synth&&this.isSpeaking&&this.synth.pause()}resume(){this.synth&&this.synth.resume()}async welcome(e){const n=ra.welcome[e];if(n)return this.speak(n)}async tellStory(e){const n=ra.constellations[e];if(n!=null&&n.story)return this.speak(n.story,{rate:.85})}async explainScience(e){const n=ra.constellations[e];if(n!=null&&n.science)return this.speak(n.science,{rate:.9})}async giveTips(e){const n=ra.constellations[e];if(n!=null&&n.tips)return this.speak(n.tips,{rate:.9})}async encourage(e){const n=ra.encouragement[e];if(n&&n.length>0){const i=n[Math.floor(Math.random()*n.length)];return this.speak(i,{pitch:e==="child"?1.2:1})}}async readInstruction(e){return this.speak(e,{rate:.85})}async announceAchievement(e){const n=`恭喜！获得成就：${e}`;return this.speak(n,{rate:.9,pitch:1.1})}async askQuestion(e){return this.speak(e,{rate:.85})}async readQuizQuestion(e){return this.speak(`题目：${e}`,{rate:.85})}async correctAnswer(){return this.speak("回答正确！太棒了！",{pitch:1.2,rate:1})}async wrongAnswer(e){return this.speak(`没关系，正确答案是：${e}。继续加油！`,{rate:.9})}get isSupported(){return"speechSynthesis"in window}get availableVoices(){return this.synth?this.synth.getVoices():[]}}const Ht=new jT,BT={collaboration:{name:"协作勋章",icon:"🤝",color:"from-blue-500 to-cyan-400"},challenge:{name:"挑战勋章",icon:"⚔️",color:"from-red-500 to-pink-400"},guided:{name:"引导勋章",icon:"👆",color:"from-green-500 to-emerald-400"},milestone:{name:"里程碑勋章",icon:"🏆",color:"from-yellow-500 to-orange-400"},child_growth:{name:"成长勋章",icon:"🌱",color:"from-cyan-500 to-blue-400"},parent_growth:{name:"引导者勋章",icon:"👨‍🏫",color:"from-emerald-500 to-green-400"}};function HT(){var ze,st;const{familyMode:t,setFamilyMode:e,setFamilyRole:n,setActivePanel:i,getFamilyProgress:r,getFamilyGrowthData:s,startFamilyTask:a,nextTaskStep:o,checkFamilyStreak:c,endFamilySession:u,recordMythologyTold:f,recordQuizScore:p,addFamilyLog:h}=wt(),[g,_]=Le.useState("home"),[y,m]=Le.useState(!t.currentRole),[d,x]=Le.useState("tasks"),[v,E]=Le.useState(null),[R,C]=Le.useState(null),[S,N]=Le.useState(!1),[T,w]=Le.useState(!0),L=r(),F=s();Le.useEffect(()=>(Ht.init(),Ht.toggleVoice(T),t.enabled||e(!0),c(),()=>{u()}),[]);const z=k=>{u(),e(k),m(!0)},P=async k=>{n(k),m(!1),T&&(N(!0),await Ht.welcome(k),N(!1))},B=k=>{if(E(k),a(k.id),_("task"),k.steps&&k.steps.length>0&&T){const ce=k.steps[0];N(!0),Ht.readInstruction(ce.instruction).then(()=>N(!1))}},V=async()=>{const k=o();k&&T?(N(!0),await Ht.readInstruction(k.instruction),N(!1)):k||(_("home"),E(null))},Y=async k=>{f(),T&&(N(!0),await Ht.tellStory(k),N(!1))},D=async k=>{T&&(N(!0),await Ht.explainScience(k),N(!1))},$=async k=>{T&&(N(!0),await Ht.giveTips(k),N(!1))},J=k=>{C({task:k,currentQuestion:0,score:0,answers:[]}),_("quiz"),T&&k.questions&&(N(!0),Ht.readQuizQuestion(k.questions[0].q).then(()=>N(!1)))},le=async k=>{if(!R)return;const ce=R.task.questions[R.currentQuestion],ge=k===ce.a,ie=[...R.answers,{question:ce.q,answer:k,correct:ge}],Ce=R.score+(ge?20:0);if(T&&(N(!0),ge?await Ht.correctAnswer():await Ht.wrongAnswer(ce.a),N(!1)),R.currentQuestion>=R.task.questions.length-1)p(Ce,R.task.questions.length*20),h({type:"quiz_complete",taskId:R.task.id,score:Ce,total:R.task.questions.length*20,timestamp:Date.now()}),C({...R,answers:ie,score:Ce,finished:!0});else{const A=R.task.questions[R.currentQuestion+1];C({...R,currentQuestion:R.currentQuestion+1,score:Ce,answers:ie}),T&&(N(!0),Ht.readQuizQuestion(A.q).then(()=>N(!1)))}},we=async k=>{T&&(N(!0),await Ht.encourage(k),N(!1))},Be=()=>{Ht.stop(),N(!1)},q=()=>{const k=!T;w(k),Ht.toggleVoice(k)},re=()=>l.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-space-900/90 backdrop-blur-md",children:l.jsx("div",{className:"max-w-md w-full mx-4",children:l.jsxs("div",{className:"glass-panel p-8 text-center",children:[l.jsx("div",{className:"text-5xl mb-4",children:"👨‍👩‍👧"}),l.jsx("h2",{className:"text-2xl font-display text-white mb-2",children:"欢迎来到亲子星空探索"}),l.jsx("p",{className:"text-white/60 text-sm mb-8",children:"请选择你当前的角色，开始奇妙的星空之旅"}),l.jsx("div",{className:"grid grid-cols-2 gap-4",children:Object.values(kr).map(k=>l.jsxs("button",{onClick:()=>P(k.id),className:`p-6 rounded-2xl border-2 transition-all card-hover ${t.currentRole===k.id?"border-nebula-purple bg-nebula-purple/20":"border-white/10 bg-space-700/40 hover:border-white/30"}`,children:[l.jsx("div",{className:"text-4xl mb-3",children:k.icon}),l.jsx("div",{className:"font-display text-white text-lg",children:k.name}),l.jsx("div",{className:"text-xs text-white/50 mt-2",children:k.description})]},k.id))}),l.jsx("button",{onClick:()=>{z(!1),i(null)},className:"mt-6 text-white/50 hover:text-white text-sm transition-colors",children:"← 返回单人模式"})]})})}),pe=()=>l.jsxs("div",{className:"space-y-5",children:[l.jsxs("div",{className:"p-4 rounded-2xl border border-nebula-purple/30 bg-gradient-to-br from-nebula-purple/10 to-nebula-cyan/10",children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("div",{className:"flex items-center gap-3",children:Object.values(t.familyMembers).map((k,ce)=>l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:"w-14 h-14 rounded-full bg-space-700/60 flex items-center justify-center text-2xl border-2 border-white/10",children:k.avatar}),l.jsx("div",{className:"text-xs text-white/70 mt-1",children:k.name}),l.jsxs("div",{className:"text-[10px] text-nebula-cyan font-mono",children:["Lv.",k.level]})]},ce))}),l.jsxs("div",{className:"text-right",children:[l.jsxs("div",{className:"text-star-gold text-lg font-display",children:["🔥 ",t.streakDays," 天"]}),l.jsx("div",{className:"text-[10px] text-white/50",children:"连续打卡"}),l.jsxs("div",{className:"text-xs text-white/60 mt-1",children:["⏱️ ",Math.floor(L.totalMinutes/60),"h ",L.totalMinutes%60,"m"]})]})]}),l.jsx("div",{className:"grid grid-cols-2 gap-2",children:Object.entries(t.familyMembers).map(([k,ce])=>{const ge=ce.level*100,ie=ce.xp-(ce.level-1)*100,Ce=Math.min(100,Math.round(ie/ge*100));return l.jsxs("div",{className:"bg-space-800/40 rounded-xl p-3",children:[l.jsxs("div",{className:"flex items-center justify-between text-[10px] mb-1",children:[l.jsxs("span",{className:"text-white/60",children:[ce.name,"经验"]}),l.jsxs("span",{className:"text-white/40 font-mono",children:[ce.xp," XP"]})]}),l.jsx("div",{className:"h-1.5 bg-space-900/60 rounded-full overflow-hidden",children:l.jsx("div",{className:`h-full rounded-full bg-gradient-to-r ${kr[k].color}`,style:{width:`${Ce}%`}})})]},k)})})]}),l.jsx("div",{className:"grid grid-cols-4 gap-2",children:[{label:"星座",value:L.discoveredConstellations,icon:"⭐"},{label:"任务",value:`${L.completedTasks}/${L.totalTasks}`,icon:"📋"},{label:"勋章",value:`${L.unlockedAchievements}/${L.totalAchievements}`,icon:"🏅"},{label:"协作",value:L.collaborativeCount,icon:"🤝"}].map((k,ce)=>l.jsxs("div",{className:"bg-space-700/30 rounded-xl p-3 text-center border border-white/5",children:[l.jsx("div",{className:"text-xl mb-1",children:k.icon}),l.jsx("div",{className:"text-sm font-display text-white",children:k.value}),l.jsx("div",{className:"text-[9px] text-white/50",children:k.label})]},ce))}),l.jsxs("div",{className:"mt-4",children:[l.jsx("div",{className:"flex items-center justify-between mb-3",children:l.jsxs("h3",{className:"font-display text-white/90 text-sm flex items-center gap-2",children:[l.jsx("span",{children:"📊"})," 本周探索记录"]})}),l.jsxs("div",{className:"bg-space-700/30 rounded-xl p-4 border border-white/5",children:[l.jsx("div",{className:"flex items-end justify-between h-24 gap-1",children:F.weeklyData.map((k,ce)=>l.jsxs("div",{className:"flex-1 flex flex-col items-center gap-1",children:[l.jsx("div",{className:"w-full bg-space-800/60 rounded-t relative",style:{height:"100%"},children:l.jsx("div",{className:"absolute bottom-0 w-full bg-gradient-to-t from-nebula-purple to-nebula-cyan rounded-t transition-all duration-500",style:{height:`${Math.min(100,k.discoveries*30)}%`}})}),l.jsx("span",{className:"text-[9px] text-white/50",children:k.date})]},ce))}),l.jsxs("div",{className:"flex justify-between text-[10px] text-white/40 mt-2",children:[l.jsxs("span",{children:["共 ",F.totalSessions," 次探索"]}),l.jsxs("span",{children:["平均每次 ",F.avgSessionLength," 分钟"]})]})]})]}),l.jsxs("div",{className:"mt-4",children:[l.jsxs("h3",{className:"font-display text-white/90 text-sm mb-3 flex items-center gap-2",children:[l.jsx("span",{children:"✨"})," 推荐今日任务"]}),l.jsx("div",{className:"space-y-2",children:Hl.filter(k=>k.difficulty<=2).slice(0,3).map(k=>{var ie;const ce=fp[k.type],ge=t.completedTasks.some(Ce=>Ce.taskId===k.id);return l.jsx("button",{onClick:()=>k.type==="challenge"&&k.questions?J(k):B(k),disabled:ge,className:`w-full p-4 rounded-xl border text-left transition-all card-hover ${ge?"border-green-500/30 bg-green-500/5 opacity-70":"border-white/10 bg-space-700/30 hover:border-nebula-purple/40"}`,children:l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${ge?"bg-green-500/20":"bg-space-600/50"}`,children:ge?"✓":k.icon}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-sm font-medium text-white",children:k.name}),l.jsxs("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/60",children:[ce.icon," ",ce.name]})]}),l.jsx("p",{className:"text-[11px] text-white/50 mt-0.5 truncate",children:k.description})]}),l.jsxs("span",{className:"text-star-gold text-xs",children:["+",((ie=k.reward)==null?void 0:ie.xp)||0," XP"]})]})},k.id)})})]}),l.jsxs("div",{className:"mt-4",children:[l.jsxs("h3",{className:"font-display text-white/90 text-sm mb-3 flex items-center gap-2",children:[l.jsx("span",{children:"🔊"})," 星空故事馆"]}),l.jsx("div",{className:"grid grid-cols-2 gap-2",children:rt.slice(0,4).map(k=>l.jsxs("div",{className:"bg-space-700/30 rounded-xl p-3 border border-white/5",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[l.jsx("span",{className:"text-lg",children:k.season==="春"?"🌸":k.season==="夏"?"☀️":k.season==="秋"?"🍂":"❄️"}),l.jsx("span",{className:"text-xs font-medium text-white truncate",children:k.name})]}),l.jsxs("div",{className:"space-y-1",children:[l.jsx("button",{onClick:()=>Y(k.id),className:"w-full text-[10px] py-1.5 rounded-lg bg-nebula-purple/20 text-nebula-purple hover:bg-nebula-purple/30 transition-colors",children:"📖 听神话故事"}),l.jsx("button",{onClick:()=>D(k.id),className:"w-full text-[10px] py-1.5 rounded-lg bg-nebula-cyan/20 text-nebula-cyan hover:bg-nebula-cyan/30 transition-colors",children:"🔬 学科学知识"})]})]},k.id))})]})]}),ue=()=>l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"flex items-center justify-between mb-2",children:[l.jsx("h3",{className:"font-display text-white/90 text-sm",children:"全部任务"}),l.jsxs("span",{className:"text-[10px] text-white/50",children:["已完成 ",L.completedTasks," / ",L.totalTasks]})]}),Object.entries(fp).map(([k,ce])=>{const ge=Hl.filter(ie=>ie.type===k);return ge.length===0?null:l.jsxs("div",{className:"mb-4",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[l.jsx("span",{className:"text-sm",children:ce.icon}),l.jsx("span",{className:"text-xs text-white/70",children:ce.name}),l.jsx("span",{className:"text-[10px] text-white/40",children:ce.description})]}),l.jsx("div",{className:"space-y-2",children:ge.map(ie=>{var M;const Ce=t.completedTasks.some(G=>G.taskId===ie.id),A=t.activeTaskId===ie.id;return l.jsxs("button",{onClick:()=>{ie.type==="challenge"&&ie.questions?J(ie):B(ie)},disabled:Ce&&!A,className:`w-full p-4 rounded-xl border text-left transition-all card-hover ${A?"border-nebula-cyan bg-nebula-cyan/10":Ce?"border-green-500/30 bg-green-500/5 opacity-70":"border-white/10 bg-space-700/30 hover:border-nebula-purple/40"}`,children:[l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx("div",{className:`w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0 ${A?"bg-nebula-cyan/20":Ce?"bg-green-500/20":"bg-space-600/50"}`,children:Ce?"✓":ie.icon}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-sm font-medium text-white",children:ie.name}),l.jsx("div",{className:"flex gap-1",children:Array.from({length:ie.difficulty}).map((G,Q)=>l.jsx("span",{className:"text-[9px] text-star-gold",children:"★"},Q))})]}),l.jsx("p",{className:"text-[11px] text-white/50 mt-0.5",children:ie.description}),l.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[l.jsxs("span",{className:"text-[10px] text-star-gold",children:["+",((M=ie.reward)==null?void 0:M.xp)||0," XP"]}),ie.steps&&l.jsxs("span",{className:"text-[10px] text-white/40",children:[ie.steps.length," 步骤"]}),ie.questions&&l.jsxs("span",{className:"text-[10px] text-white/40",children:[ie.questions.length," 题目"]})]})]})]}),A&&l.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:l.jsx("span",{className:"text-[10px] text-nebula-cyan animate-pulse",children:"⏳ 进行中..."})})]},ie.id)})})]},k)})]}),Fe=()=>{const k=Vl.reduce((ce,ge)=>(ce[ge.category]||(ce[ge.category]=[]),ce[ge.category].push(ge),ce),{});return l.jsxs("div",{className:"space-y-5",children:[l.jsxs("div",{className:"p-4 rounded-2xl border border-star-gold/30 bg-star-gold/5",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-2xl",children:"🏅"}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-display text-white text-sm",children:"亲子勋章"}),l.jsx("p",{className:"text-[10px] text-white/50",children:"记录你们的每一个美好时刻"})]})]}),l.jsxs("div",{className:"text-right",children:[l.jsxs("div",{className:"text-xl font-display text-star-gold",children:[L.unlockedAchievements," / ",L.totalAchievements]}),l.jsx("div",{className:"text-[9px] text-white/40",children:"已解锁"})]})]}),l.jsx("div",{className:"mt-3 h-2 bg-space-900/60 rounded-full overflow-hidden",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-star-gold via-nebula-orange to-nebula-purple rounded-full transition-all duration-700",style:{width:`${L.totalAchievements>0?L.unlockedAchievements/L.totalAchievements*100:0}%`}})})]}),Object.entries(k).map(([ce,ge])=>{const ie=BT[ce],Ce=ge.filter(A=>t.unlockedFamilyAchievements.includes(A.id)).length;return l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsx("span",{className:"text-lg",children:ie.icon}),l.jsx("h3",{className:"font-display text-white/90 text-sm",children:ie.name}),l.jsxs("span",{className:"text-[10px] text-white/40 ml-auto",children:[Ce," / ",ge.length]})]}),l.jsx("div",{className:"grid grid-cols-2 gap-2",children:ge.map(A=>{const M=t.unlockedFamilyAchievements.includes(A.id);return l.jsx("div",{className:`p-3 rounded-xl border transition-all ${M?"border-white/20 bg-space-700/40":"border-white/5 bg-space-900/40 opacity-50"}`,children:l.jsxs("div",{className:"flex items-start gap-2",children:[l.jsx("div",{className:`w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0 ${M?`bg-gradient-to-br ${A.color}`:"bg-space-800 grayscale"}`,children:A.icon}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("div",{className:`text-xs font-semibold ${M?"text-white":"text-white/50"}`,children:A.name}),l.jsx("div",{className:"text-[9px] text-white/40 mt-0.5 leading-tight",children:A.description})]})]})},A.id)})})]},ce)})]})},De=()=>{var Ce;const k=v||va(t.activeTaskId);if(!k)return null;const ce=(Ce=k.steps)==null?void 0:Ce[t.currentStepIndex],ge=k.steps?Math.round(t.currentStepIndex/k.steps.length*100):0,ie=ce?kr[ce.role]:null;return l.jsxs("div",{className:"space-y-5",children:[l.jsxs("div",{className:`p-4 rounded-2xl border ${ie?ie.color.replace("from-","border-").split(" ")[0]+"/30":"border-white/10"} bg-space-700/30`,children:[l.jsxs("div",{className:"flex items-center justify-between mb-3",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-2xl",children:k.icon}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-display text-white",children:k.name}),l.jsx("p",{className:"text-[10px] text-white/50",children:k.description})]})]}),l.jsx("button",{onClick:()=>{_("home"),E(null)},className:"w-8 h-8 flex items-center justify-center rounded-lg bg-space-600/50 text-white/60 hover:bg-red-500/30 hover:text-red-200 transition-all",children:"✕"})]}),k.steps&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"flex justify-between text-[10px] mb-2",children:[l.jsx("span",{className:"text-white/50",children:"任务进度"}),l.jsxs("span",{className:"text-white/60 font-mono",children:[t.currentStepIndex+1," / ",k.steps.length]})]}),l.jsx("div",{className:"h-2 bg-space-900/60 rounded-full overflow-hidden",children:l.jsx("div",{className:`h-full rounded-full bg-gradient-to-r ${(ie==null?void 0:ie.color)||"from-nebula-purple to-nebula-cyan"} transition-all duration-500`,style:{width:`${ge}%`}})})]})]}),ce&&l.jsxs("div",{className:`p-5 rounded-2xl border ${ie.color.replace("from-","border-").split(" ")[0]}/40 bg-gradient-to-br ${ie.color}/5`,children:[l.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[l.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${ie.color}`,children:ie.icon}),l.jsxs("div",{children:[l.jsx("div",{className:"text-xs text-white/60",children:"当前轮到"}),l.jsx("div",{className:"font-display text-white text-lg",children:ie.name})]})]}),l.jsxs("div",{className:"bg-space-800/40 rounded-xl p-4 mb-4",children:[l.jsx("div",{className:"text-[10px] text-white/50 mb-1",children:"任务指令"}),l.jsx("div",{className:"text-white/90 text-sm leading-relaxed",children:ce.instruction})]}),l.jsxs("div",{className:"flex gap-2",children:[l.jsx("button",{onClick:()=>we(ce.role),className:"flex-1 py-2.5 rounded-xl bg-star-gold/20 text-star-gold text-sm hover:bg-star-gold/30 transition-colors",children:"💬 鼓励一下"}),l.jsx("button",{onClick:Be,disabled:!S,className:"px-4 py-2.5 rounded-xl bg-white/10 text-white/70 text-sm disabled:opacity-30 hover:bg-white/20 transition-colors",children:"🔇"})]})]}),l.jsxs("div",{className:"p-4 rounded-2xl border border-white/10 bg-space-700/20",children:[l.jsxs("h4",{className:"text-xs text-white/70 mb-3 flex items-center gap-2",children:[l.jsx("span",{children:"📚"})," 相关星座知识"]}),l.jsx("div",{className:"grid grid-cols-2 gap-2",children:rt.slice(0,2).map(A=>l.jsxs("button",{onClick:()=>$(A.id),className:"p-3 rounded-xl bg-space-800/40 text-left hover:bg-space-700/40 transition-colors border border-white/5",children:[l.jsx("div",{className:"text-sm font-medium text-white mb-1",children:A.name}),l.jsxs("div",{className:"text-[9px] text-white/50",children:[A.description.slice(0,30),"..."]}),l.jsx("div",{className:"text-[9px] text-nebula-cyan mt-1",children:"💡 观看技巧 →"})]},A.id))})]}),l.jsx("button",{onClick:V,className:`w-full py-4 rounded-2xl font-display text-white text-lg transition-all ${ce?`bg-gradient-to-r ${(ie==null?void 0:ie.color)||"from-nebula-purple to-nebula-cyan"} hover:shadow-lg active:scale-[0.98]`:"bg-gradient-to-r from-green-500 to-emerald-400 hover:shadow-lg active:scale-[0.98]"}`,children:ce?"完成此步 →":"🎉 完成任务"})]})},Xe=()=>{if(!R)return null;const{task:k,currentQuestion:ce,score:ge,answers:ie,finished:Ce}=R;if(Ce){const M=Math.round(ge/(k.questions.length*20)*100);return l.jsxs("div",{className:"space-y-5",children:[l.jsxs("div",{className:"p-8 rounded-2xl border border-star-gold/30 bg-gradient-to-br from-star-gold/10 to-transparent text-center",children:[l.jsx("div",{className:"text-6xl mb-4",children:M>=80?"🎉":M>=60?"👍":"💪"}),l.jsx("h2",{className:"text-2xl font-display text-white mb-2",children:M>=80?"太棒了！":M>=60?"做得不错！":"继续加油！"}),l.jsxs("div",{className:"text-4xl font-display text-star-gold mb-2",children:[ge," 分"]}),l.jsxs("p",{className:"text-sm text-white/60",children:["答对了 ",ie.filter(G=>G.correct).length," / ",ie.length," 题"]})]}),l.jsx("div",{className:"space-y-2",children:ie.map((G,Q)=>l.jsx("div",{className:`p-3 rounded-xl border ${G.correct?"border-green-500/30 bg-green-500/5":"border-red-500/30 bg-red-500/5"}`,children:l.jsxs("div",{className:"flex items-start gap-2",children:[l.jsx("span",{className:G.correct?"text-green-400":"text-red-400",children:G.correct?"✓":"✕"}),l.jsxs("div",{className:"flex-1",children:[l.jsx("div",{className:"text-xs text-white/80",children:G.question}),l.jsxs("div",{className:`text-[10px] mt-1 ${G.correct?"text-green-400":"text-red-400"}`,children:["你的答案: ",G.answer]})]})]})},Q))}),l.jsx("button",{onClick:()=>{C(null),_("home")},className:"w-full py-4 rounded-2xl bg-gradient-to-r from-nebula-purple to-nebula-cyan text-white font-display text-lg hover:shadow-lg active:scale-[0.98] transition-all",children:"返回首页"})]})}const A=k.questions[ce];return l.jsxs("div",{className:"space-y-5",children:[l.jsxs("div",{className:"p-4 rounded-2xl border border-nebula-purple/30 bg-nebula-purple/5",children:[l.jsxs("div",{className:"flex items-center justify-between mb-3",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-2xl",children:"🎯"}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-display text-white",children:k.name}),l.jsxs("p",{className:"text-[10px] text-white/50",children:["第 ",ce+1," / ",k.questions.length," 题"]})]})]}),l.jsx("div",{className:"text-right",children:l.jsxs("div",{className:"text-star-gold font-display",children:[ge," 分"]})})]}),l.jsx("div",{className:"h-2 bg-space-900/60 rounded-full overflow-hidden",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-nebula-purple to-nebula-cyan rounded-full transition-all duration-500",style:{width:`${ce/k.questions.length*100}%`}})})]}),l.jsxs("div",{className:"p-6 rounded-2xl border border-white/10 bg-space-700/30",children:[l.jsx("div",{className:"text-lg font-display text-white leading-relaxed mb-6",children:A.q}),l.jsx("div",{className:"space-y-2",children:A.options.map((M,G)=>l.jsx("button",{onClick:()=>le(M),className:"w-full p-4 rounded-xl border border-white/10 bg-space-800/40 text-left hover:bg-nebula-purple/20 hover:border-nebula-purple/40 transition-all text-white/90 text-sm",children:l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{className:"w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono",children:String.fromCharCode(65+G)}),l.jsx("span",{children:M})]})},G))})]}),l.jsx("div",{className:"flex gap-2",children:l.jsx("button",{onClick:()=>{S?Be():(N(!0),Ht.readQuizQuestion(A.q).then(()=>N(!1)))},className:"flex-1 py-3 rounded-xl bg-white/10 text-white/80 text-sm hover:bg-white/20 transition-colors",children:S?"🔇 停止朗读":"🔊 再听一遍"})})]})},U=()=>l.jsxs("div",{className:"space-y-4",children:[l.jsx("h3",{className:"font-display text-white/90 text-sm",children:"家庭探索记录"}),t.familyLog.length===0?l.jsxs("div",{className:"h-40 flex flex-col items-center justify-center text-center",children:[l.jsx("div",{className:"text-4xl mb-3 opacity-30",children:"📝"}),l.jsx("h4",{className:"text-white/60 font-display mb-1",children:"暂无记录"}),l.jsx("p",{className:"text-xs text-white/40 max-w-xs leading-relaxed",children:"开始你们的第一次亲子星空探索吧！"})]}):l.jsx("div",{className:"space-y-2",children:t.familyLog.slice(0,20).map((k,ce)=>{const ge=k.constellationId?Zi(k.constellationId):null,ie=k.role?kr[k.role]:null;let Ce="bg-space-700/30",A="border-white/10",M="📌";return k.type==="discovery"?(Ce="bg-nebula-purple/10",A="border-nebula-purple/30",M="⭐"):k.type==="reobservation"?(Ce="bg-nebula-cyan/10",A="border-nebula-cyan/30",M="🔄"):k.type==="family_achievement"?(Ce="bg-star-gold/10",A="border-star-gold/30",M="🏅"):k.type==="quiz_complete"&&(Ce="bg-green-500/10",A="border-green-500/30",M="🎯"),l.jsx("div",{className:`p-3 rounded-xl border ${A} ${Ce}`,children:l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx("div",{className:"text-lg",children:M}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[l.jsxs("span",{className:"text-xs font-medium text-white",children:[k.type==="discovery"&&"新发现星座",k.type==="reobservation"&&"再次观测",k.type==="family_achievement"&&"获得勋章",k.type==="quiz_complete"&&"完成测验"]}),ge&&l.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/70",children:ge.name}),k.perfect&&l.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-star-gold/20 text-star-gold",children:"完美"}),ie&&l.jsxs("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/70",children:[ie.icon," ",ie.name]})]}),k.achievementName&&l.jsx("div",{className:"text-sm text-star-gold mt-1",children:k.achievementName}),k.score!==void 0&&l.jsxs("div",{className:"text-sm text-green-400 mt-1",children:[k.score," / ",k.total," 分"]}),l.jsx("div",{className:"text-[9px] text-white/40 mt-1 font-mono",children:Ns(k.timestamp)})]})]})},ce)})})]}),Ge=()=>{if(!t.currentRole||y)return null;if(g==="task"&&t.activeTaskId)return De();if(g==="quiz"&&R)return Xe();switch(d){case"tasks":return ue();case"achievements":return Fe();case"records":return U();default:return pe()}};return l.jsxs("div",{className:"absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4 bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200",children:[y&&t.enabled&&re(),l.jsxs("div",{className:"w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden",children:[l.jsxs("div",{className:"p-5 border-b border-white/10",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsxs("h2",{className:"text-xl font-display text-white flex items-center gap-2",children:[l.jsx("span",{children:"👨‍👩‍👧"}),"亲子共学",t.currentRole&&l.jsxs("span",{className:"text-xs font-normal px-2 py-0.5 rounded-full bg-nebula-purple/30 text-nebula-cyan ml-2",children:[(ze=kr[t.currentRole])==null?void 0:ze.icon," ",(st=kr[t.currentRole])==null?void 0:st.name]})]}),l.jsx("p",{className:"text-xs text-white/50 mt-1",children:"与家人一起探索星空的奥秘"})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("button",{onClick:q,className:`w-9 h-9 flex items-center justify-center rounded-lg transition-all ${T?"bg-nebula-purple/30 text-nebula-cyan":"bg-white/10 text-white/40"}`,children:T?"🔊":"🔇"}),l.jsx("button",{onClick:()=>{z(!1),i(null)},className:"icon-btn","aria-label":"关闭",children:"✕"})]})]}),t.currentRole&&!y&&l.jsx("div",{className:"mt-4 flex gap-2",children:[{id:"home",label:"首页",icon:"🏠"},{id:"tasks",label:"任务",icon:"📋"},{id:"achievements",label:"勋章",icon:"🏅"},{id:"records",label:"记录",icon:"📝"}].map(k=>l.jsxs("button",{onClick:()=>{x(k.id),_(k.id==="home"?"home":k.id)},className:`flex-1 py-2 px-2 rounded-lg text-xs transition-all flex items-center justify-center gap-1 ${k.id==="home"&&g==="home"||d===k.id?"bg-white/10 text-white border border-white/10":"text-white/50 hover:text-white/80"}`,children:[l.jsx("span",{children:k.icon}),l.jsx("span",{className:"hidden sm:inline",children:k.label})]},k.id))})]}),l.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-thin p-5",children:Ge()}),S&&l.jsx("div",{className:"px-5 py-3 bg-nebula-purple/20 border-t border-nebula-purple/30",children:l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"flex gap-0.5",children:[1,2,3,4].map(k=>l.jsx("div",{className:"w-1 bg-nebula-cyan rounded-full animate-pulse",style:{height:`${8+Math.random()*12}px`,animationDelay:`${k*.1}s`}},k))}),l.jsx("span",{className:"text-xs text-white/70",children:"正在播放..."})]}),l.jsx("button",{onClick:Be,className:"text-xs text-white/60 hover:text-white transition-colors",children:"停止"})]})})]})]})}function VT(){const{setActivePanel:t,nightExpedition:e,syncExpeditionStamina:n,startExpedition:i,abandonExpedition:r,getExpeditionProgress:s,connectionPath:a,mistakes:o,currentTargetConstellation:c,setTargetConstellation:u}=wt(),[f,p]=Le.useState("overview"),[h,g]=Le.useState(null),_=e,y=s(),m=_.currentRun;Le.useEffect(()=>{n();const S=setInterval(n,6e4);return()=>clearInterval(S)},[]),Le.useEffect(()=>{if(_.currentRun===null&&_.history.length>0&&h===null){const S=_.history[0];S&&g(S)}},[_.currentRun,_.history.length,h]);const d=()=>{if(_.stamina>=ut.maxStamina)return null;const N=Date.now()-_.lastStaminaUpdate,T=ut.recoveryIntervalMs-N%ut.recoveryIntervalMs;return Math.ceil(T/6e4)},x=()=>{const S=d();return l.jsxs("div",{className:"p-3 rounded-xl border border-indigo-500/30 bg-indigo-500/10",children:[l.jsxs("div",{className:"flex items-center justify-between mb-2",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-base",children:"⚡"}),l.jsx("span",{className:"text-xs font-display text-indigo-200",children:"远征体力"})]}),l.jsxs("span",{className:"text-sm font-mono text-indigo-100",children:[_.stamina," / ",ut.maxStamina]})]}),l.jsx("div",{className:"h-2.5 bg-space-900/60 rounded-full overflow-hidden",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-indigo-500 to-violet-400 rounded-full transition-all duration-500",style:{width:`${_.stamina/ut.maxStamina*100}%`}})}),S!==null&&l.jsxs("div",{className:"text-[10px] text-indigo-300/60 mt-1.5 text-right",children:["下次恢复: ",S," 分钟"]})]})},v=()=>l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"p-4 rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-indigo-500/10",children:[l.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[l.jsx("span",{className:"text-4xl",children:"🌙"}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-display text-lg text-violet-200",children:"夜间远征"}),l.jsx("p",{className:"text-[11px] text-white/50",children:"连续闯关，挑战星空极限"})]})]}),l.jsx("p",{className:"text-xs text-white/60 leading-relaxed",children:"在夜间远征中，你将依次挑战随机排列的星座连线关卡。每关有限定的容错次数， 失误过多将结束远征。体力会随时间恢复，合理规划远征节奏！"})]}),x(),l.jsx("button",{onClick:()=>{i()&&(p("expedition"),g(null))},disabled:_.stamina<ut.stageCost,className:`w-full py-3.5 rounded-xl text-sm font-display font-medium transition-all
                   ${_.stamina>=ut.stageCost?"bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 active:scale-[0.98]":"bg-space-700/40 text-white/30 cursor-not-allowed"}`,children:_.stamina>=ut.stageCost?l.jsxs("span",{className:"flex items-center justify-center gap-2",children:[l.jsx("span",{children:"🚀"}),l.jsx("span",{children:"开始远征"}),l.jsxs("span",{className:"text-[10px] opacity-70",children:["（消耗 ",ut.stageCost," 体力）"]})]}):l.jsxs("span",{className:"flex items-center justify-center gap-2",children:[l.jsx("span",{children:"⏳"}),l.jsx("span",{children:"体力不足"})]})}),l.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[l.jsxs("div",{className:"p-3 rounded-xl border border-white/10 bg-space-700/20 text-center",children:[l.jsx("div",{className:"text-lg font-mono text-violet-300",children:y.totalCompleted}),l.jsx("div",{className:"text-[10px] text-white/40 mt-0.5",children:"远征次数"})]}),l.jsxs("div",{className:"p-3 rounded-xl border border-white/10 bg-space-700/20 text-center",children:[l.jsx("div",{className:"text-lg font-mono text-indigo-300",children:y.highestStagesCleared}),l.jsx("div",{className:"text-[10px] text-white/40 mt-0.5",children:"最高关卡"})]}),l.jsxs("div",{className:"p-3 rounded-xl border border-white/10 bg-space-700/20 text-center",children:[l.jsx("div",{className:"text-lg font-mono text-amber-300",children:y.totalPerfectStages}),l.jsx("div",{className:"text-[10px] text-white/40 mt-0.5",children:"完美通关"})]}),l.jsxs("div",{className:"p-3 rounded-xl border border-white/10 bg-space-700/20 text-center",children:[l.jsx("div",{className:"text-lg font-mono text-star-gold",children:y.totalStardustEarned}),l.jsx("div",{className:"text-[10px] text-white/40 mt-0.5",children:"星尘总计"})]})]}),l.jsxs("div",{className:"p-3 rounded-xl border border-white/10 bg-space-700/20",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[l.jsx("span",{className:"text-sm",children:"🎯"}),l.jsx("span",{className:"text-xs font-display text-white/80",children:"容错规则"})]}),l.jsx("div",{className:"space-y-1.5",children:Object.entries(Ad).map(([S,N])=>l.jsxs("div",{className:"flex items-center justify-between text-[11px]",children:[l.jsxs("span",{className:"text-white/50",children:["难度 ",S]}),l.jsxs("span",{className:"text-white/70",children:["允许 ",N.allowedMistakes," 次失误 · ",N.label]})]},S))})]}),l.jsxs("div",{className:"p-3 rounded-xl border border-white/10 bg-space-700/20",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[l.jsx("span",{className:"text-sm",children:"🏅"}),l.jsx("span",{className:"text-xs font-display text-white/80",children:"里程碑奖励"})]}),l.jsx("div",{className:"space-y-2",children:c0.map(S=>l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-base",children:S.icon}),l.jsxs("div",{className:"flex-1",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:"text-[11px] text-white/80",children:S.name}),l.jsxs("span",{className:"text-[10px] text-white/40",children:["通过 ",S.stagesCleared," 关"]})]}),l.jsx("div",{className:"text-[10px] text-white/40",children:S.description})]})]},S.id))})]})]}),E=()=>{if(!m||!m.active)return l.jsxs("div",{className:"h-40 flex flex-col items-center justify-center text-center",children:[l.jsx("div",{className:"text-4xl mb-3 opacity-30",children:"🌙"}),l.jsx("h4",{className:"text-white/60 font-display mb-1",children:"未在远征中"}),l.jsx("p",{className:"text-xs text-white/40",children:"返回概览开始新的远征"})]});const S=m.route[m.stageIndex],N=S.allowedMistakes-m.mistakesInStage,T=m.stageIndex+1,w=m.route.length;return l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"p-4 rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-indigo-500/10",children:[l.jsxs("div",{className:"flex items-center justify-between mb-2",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-lg",children:"🌙"}),l.jsxs("span",{className:"font-display text-sm text-violet-200",children:["第 ",T," / ",w," 关"]})]}),l.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300",children:"远征进行中"})]}),l.jsx("div",{className:"h-1.5 bg-space-900/60 rounded-full overflow-hidden mb-3",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-violet-500 to-indigo-400 rounded-full transition-all duration-500",style:{width:`${T/w*100}%`}})}),l.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[l.jsxs("div",{className:"p-2 rounded-lg bg-space-900/40 text-center",children:[l.jsx("div",{className:"text-sm font-mono text-violet-200",children:m.clearedStages.length}),l.jsx("div",{className:"text-[9px] text-white/40",children:"已通过"})]}),l.jsxs("div",{className:"p-2 rounded-lg bg-space-900/40 text-center",children:[l.jsx("div",{className:`text-sm font-mono ${N>0?"text-amber-300":"text-red-400"}`,children:N}),l.jsx("div",{className:"text-[9px] text-white/40",children:"容错剩余"})]}),l.jsxs("div",{className:"p-2 rounded-lg bg-space-900/40 text-center",children:[l.jsx("div",{className:"text-sm font-mono text-star-gold",children:m.perfectCount}),l.jsx("div",{className:"text-[9px] text-white/40",children:"完美通关"})]})]})]}),l.jsxs("div",{className:"p-3 rounded-xl border border-white/10 bg-space-700/20",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[l.jsx("span",{className:"text-sm",children:"⭐"}),l.jsx("span",{className:"text-xs text-white/80",children:"当前关卡"})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("div",{className:`w-10 h-10 rounded-lg flex items-center justify-center text-sm
                            ${S.difficulty===1?"bg-green-500/20 text-green-300":S.difficulty===2?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:[S.difficulty,"×"]}),l.jsxs("div",{className:"flex-1",children:[l.jsx("p",{className:"text-sm text-white",children:S.constellationName}),l.jsxs("p",{className:"text-[10px] text-white/40",children:["容错 ",S.allowedMistakes," 次 · ",Ad[S.difficulty].label]})]}),m.mistakesInStage>0&&l.jsxs("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300",children:["已失误 ",m.mistakesInStage]})]})]}),l.jsx("div",{className:"flex items-center gap-1 flex-wrap",children:m.route.map((L,F)=>{const z=F<m.stageIndex,P=F===m.stageIndex;return F>m.stageIndex,l.jsx("div",{className:`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-mono border transition-all ${z?"bg-violet-500/20 border-violet-500/40 text-violet-200":P?"bg-indigo-500/30 border-indigo-400/50 text-indigo-200 ring-1 ring-indigo-400/30":"bg-space-800/40 border-white/5 text-white/20"}`,children:z?"✓":F+1},F)})}),l.jsx("button",{onClick:()=>{r(),p("overview")},className:`w-full py-2.5 rounded-xl bg-red-500/10 border border-red-500/30
                   text-red-300 text-xs font-medium
                   hover:bg-red-500/20 transition-all`,children:"🏴 放弃远征"})]})},R=()=>{if(!h)return l.jsxs("div",{className:"h-40 flex flex-col items-center justify-center text-center",children:[l.jsx("div",{className:"text-4xl mb-3 opacity-30",children:"📋"}),l.jsx("h4",{className:"text-white/60 font-display mb-1",children:"暂无远征记录"}),l.jsx("p",{className:"text-xs text-white/40",children:"完成一次远征后查看结算"})]});const S=h;return l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"p-4 rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 text-center",children:[l.jsx("div",{className:"text-4xl mb-2",children:S.stagesCleared===S.totalStages?"🏆":S.stagesCleared>=4?"🥇":S.stagesCleared>=2?"🥈":"🌟"}),l.jsx("h3",{className:"font-display text-lg text-white mb-1",children:S.stagesCleared===S.totalStages?"完美远征":"远征结束"}),l.jsxs("p",{className:"text-xs text-white/50",children:["通过 ",S.stagesCleared," / ",S.totalStages," 关",S.staminaOut&&" · 体力耗尽"]})]}),l.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[l.jsxs("div",{className:"p-3 rounded-xl border border-white/10 bg-space-700/20 text-center",children:[l.jsx("div",{className:"text-lg font-mono text-star-gold",children:S.rewards.stardust}),l.jsx("div",{className:"text-[9px] text-white/40 mt-0.5",children:"星尘"})]}),l.jsxs("div",{className:"p-3 rounded-xl border border-white/10 bg-space-700/20 text-center",children:[l.jsx("div",{className:"text-lg font-mono text-indigo-300",children:S.rewards.xp}),l.jsx("div",{className:"text-[9px] text-white/40 mt-0.5",children:"经验"})]}),l.jsxs("div",{className:"p-3 rounded-xl border border-white/10 bg-space-700/20 text-center",children:[l.jsx("div",{className:"text-lg font-mono text-violet-300",children:S.perfectCount}),l.jsx("div",{className:"text-[9px] text-white/40 mt-0.5",children:"完美"})]})]}),S.rewards.tierRewards.length>0&&l.jsxs("div",{className:"p-3 rounded-xl border border-star-gold/30 bg-star-gold/5",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[l.jsx("span",{className:"text-sm",children:"🏅"}),l.jsx("span",{className:"text-xs font-display text-star-gold",children:"里程碑达成"})]}),l.jsx("div",{className:"space-y-1.5",children:S.rewards.tierRewards.map(N=>l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-base",children:N.icon}),l.jsx("span",{className:"text-[11px] text-white/80",children:N.name}),N.bonus.stardust>0&&l.jsxs("span",{className:"text-[10px] text-star-gold ml-auto",children:["+",N.bonus.stardust," 星尘"]})]},N.id))})]}),S.rewards.bonusStardust>0&&l.jsxs("div",{className:"flex items-center gap-2 p-3 rounded-xl border border-amber-500/20 bg-amber-500/5",children:[l.jsx("span",{className:"text-sm",children:"✨"}),l.jsx("span",{className:"text-xs text-amber-200",children:"低失误奖励"}),l.jsxs("span",{className:"text-xs text-star-gold ml-auto font-mono",children:["+",S.rewards.bonusStardust]})]}),l.jsxs("div",{className:"p-3 rounded-xl border border-white/10 bg-space-700/20",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[l.jsx("span",{className:"text-sm",children:"📊"}),l.jsx("span",{className:"text-xs font-display text-white/80",children:"关卡明细"})]}),l.jsx("div",{className:"space-y-1.5",children:S.clearedStages.map((N,T)=>l.jsxs("div",{className:"flex items-center gap-2 text-[11px]",children:[l.jsx("span",{className:`w-5 h-5 rounded flex items-center justify-center text-[9px]
                                ${N.difficulty===1?"bg-green-500/20 text-green-300":N.difficulty===2?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:N.stage}),l.jsx("span",{className:"flex-1 text-white/70",children:N.constellationName}),l.jsxs("span",{className:"text-white/40",children:[N.mistakes," 误"]}),N.perfect&&l.jsx("span",{className:"text-violet-300",children:"★"})]},T))})]}),l.jsx("button",{onClick:()=>{g(null),p("overview")},className:`w-full py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500
                   text-white text-xs font-medium hover:shadow-lg transition-all`,children:"返回远征"})]})},C=()=>_.history.length===0?l.jsxs("div",{className:"h-40 flex flex-col items-center justify-center text-center",children:[l.jsx("div",{className:"text-4xl mb-3 opacity-30",children:"🗓️"}),l.jsx("h4",{className:"text-white/60 font-display mb-1",children:"暂无远征记录"}),l.jsx("p",{className:"text-xs text-white/40",children:"开始你的第一次夜间远征吧"})]}):l.jsx("div",{className:"space-y-2",children:_.history.map((S,N)=>l.jsxs("div",{className:"p-3 rounded-xl border border-white/10 bg-space-700/20",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center text-xl
                            bg-gradient-to-br from-violet-500/20 to-indigo-500/20`,children:S.stagesCleared===S.totalStages?"🏆":S.stagesCleared>=4?"🥇":S.stagesCleared>=2?"🥈":"🌙"}),l.jsxs("div",{className:"flex-1",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"text-sm font-display text-white",children:["通过 ",S.stagesCleared," / ",S.totalStages," 关"]}),S.perfectCount>0&&l.jsxs("span",{className:"text-[10px] text-violet-300",children:["★ ",S.perfectCount]})]}),l.jsxs("div",{className:"flex items-center gap-3 mt-0.5",children:[l.jsxs("span",{className:"text-[11px] text-star-gold",children:["✦ ",S.rewards.stardust]}),l.jsx("span",{className:"text-[11px] text-white/40",children:Ns(S.endTime)})]})]})]}),S.rewards.tierRewards.length>0&&l.jsx("div",{className:"flex items-center gap-1 mt-2 pt-2 border-t border-white/5",children:S.rewards.tierRewards.map(T=>l.jsx("span",{className:"text-sm",children:T.icon},T.id))})]},N))});return m==null||m.active,l.jsx("div",{className:`absolute inset-0 z-40 flex items-end sm:items-center justify-center p-4
                    bg-space-900/70 backdrop-blur-sm animate-in fade-in duration-200`,children:l.jsxs("div",{className:"w-full max-w-lg glass-panel max-h-[85vh] flex flex-col overflow-hidden",children:[l.jsxs("div",{className:"p-5 border-b border-white/10",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-xl font-display text-white",children:"夜间远征"}),l.jsx("p",{className:"text-xs text-white/50 mt-1",children:"连续闯关，挑战容错极限"})]}),l.jsx("button",{onClick:()=>t(null),className:"icon-btn","aria-label":"关闭",children:"✕"})]}),l.jsx("div",{className:"mt-4 flex gap-2",children:[{id:"overview",label:"概览",icon:"🌙"},{id:"expedition",label:"远征",icon:"🚀"},{id:"result",label:"结算",icon:"🏆"},{id:"history",label:"记录",icon:"🗓️"}].map(S=>l.jsxs("button",{onClick:()=>p(S.id),className:`flex-1 py-2 px-3 rounded-lg text-xs transition-all flex items-center justify-center gap-1 ${f===S.id?"bg-white/10 text-white border border-white/10":"text-white/50 hover:text-white/80"}`,children:[l.jsx("span",{children:S.icon}),l.jsx("span",{children:S.label})]},S.id))})]}),l.jsxs("div",{className:"flex-1 overflow-y-auto scrollbar-thin p-5",children:[f==="overview"&&v(),f==="expedition"&&E(),f==="result"&&R(),f==="history"&&C()]})]})})}function GT(){const t=wt(e=>e.activePanel);return wt(e=>e.familyMode.enabled),l.jsxs("div",{className:"relative w-full h-full overflow-hidden bg-space-900",children:[l.jsx(AT,{}),l.jsx(NT,{}),l.jsx(OT,{}),l.jsx(zT,{}),t==="tasks"&&l.jsx(RT,{}),t==="atlas"&&l.jsx(kT,{}),t==="log"&&l.jsx(PT,{}),t==="achievements"&&l.jsx(DT,{}),t==="settings"&&l.jsx(IT,{}),t==="seasons"&&l.jsx(UT,{}),t==="family"&&l.jsx(HT,{}),t==="expedition"&&l.jsx(VT,{}),l.jsx("div",{className:`pointer-events-none absolute top-0 left-0 w-full h-32
                      bg-gradient-to-b from-space-900/50 to-transparent z-10`}),l.jsx("div",{className:`pointer-events-none absolute bottom-0 left-0 w-full h-40
                      bg-gradient-to-t from-space-900/80 to-transparent z-10`})]})}Uu.createRoot(document.getElementById("root")).render(l.jsx(Jm.StrictMode,{children:l.jsx(GT,{})}));
