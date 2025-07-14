function Uy(a,i){for(var o=0;o<i.length;o++){const s=i[o];if(typeof s!="string"&&!Array.isArray(s)){for(const c in s)if(c!=="default"&&!(c in a)){const d=Object.getOwnPropertyDescriptor(s,c);d&&Object.defineProperty(a,c,d.get?d:{enumerable:!0,get:()=>s[c]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const g of d.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function o(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=o(c);fetch(c.href,d)}})();function jy(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Kc={exports:{}},el={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0;function $y(){if(F0)return el;F0=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(s,c,d){var g=null;if(d!==void 0&&(g=""+d),c.key!==void 0&&(g=""+c.key),"key"in c){d={};for(var y in c)y!=="key"&&(d[y]=c[y])}else d=c;return c=d.ref,{$$typeof:a,type:s,key:g,ref:c!==void 0?c:null,props:d}}return el.Fragment=i,el.jsx=o,el.jsxs=o,el}var tg;function qy(){return tg||(tg=1,Kc.exports=$y()),Kc.exports}var J=qy(),Jc={exports:{}},gt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function Ly(){if(eg)return gt;eg=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),g=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),C=Symbol.iterator;function k(E){return E===null||typeof E!="object"?null:(E=C&&E[C]||E["@@iterator"],typeof E=="function"?E:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function $(E,V,F){this.props=E,this.context=V,this.refs=w,this.updater=F||j}$.prototype.isReactComponent={},$.prototype.setState=function(E,V){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,V,"setState")},$.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function Q(){}Q.prototype=$.prototype;function W(E,V,F){this.props=E,this.context=V,this.refs=w,this.updater=F||j}var _=W.prototype=new Q;_.constructor=W,M(_,$.prototype),_.isPureReactComponent=!0;var f=Array.isArray,h={H:null,A:null,T:null,S:null,V:null},x=Object.prototype.hasOwnProperty;function T(E,V,F,et,it,bt){return F=bt.ref,{$$typeof:a,type:E,key:V,ref:F!==void 0?F:null,props:bt}}function z(E,V){return T(E.type,V,void 0,void 0,void 0,E.props)}function H(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function v(E){var V={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(F){return V[F]})}var Y=/\/+/g;function tt(E,V){return typeof E=="object"&&E!==null&&E.key!=null?v(""+E.key):V.toString(36)}function nt(){}function wt(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(nt,nt):(E.status="pending",E.then(function(V){E.status==="pending"&&(E.status="fulfilled",E.value=V)},function(V){E.status==="pending"&&(E.status="rejected",E.reason=V)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function ht(E,V,F,et,it){var bt=typeof E;(bt==="undefined"||bt==="boolean")&&(E=null);var ut=!1;if(E===null)ut=!0;else switch(bt){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(E.$$typeof){case a:case i:ut=!0;break;case O:return ut=E._init,ht(ut(E._payload),V,F,et,it)}}if(ut)return it=it(E),ut=et===""?"."+tt(E,0):et,f(it)?(F="",ut!=null&&(F=ut.replace(Y,"$&/")+"/"),ht(it,V,F,"",function(se){return se})):it!=null&&(H(it)&&(it=z(it,F+(it.key==null||E&&E.key===it.key?"":(""+it.key).replace(Y,"$&/")+"/")+ut)),V.push(it)),1;ut=0;var te=et===""?".":et+":";if(f(E))for(var Ot=0;Ot<E.length;Ot++)et=E[Ot],bt=te+tt(et,Ot),ut+=ht(et,V,F,bt,it);else if(Ot=k(E),typeof Ot=="function")for(E=Ot.call(E),Ot=0;!(et=E.next()).done;)et=et.value,bt=te+tt(et,Ot++),ut+=ht(et,V,F,bt,it);else if(bt==="object"){if(typeof E.then=="function")return ht(wt(E),V,F,et,it);throw V=String(E),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return ut}function q(E,V,F){if(E==null)return E;var et=[],it=0;return ht(E,et,"","",function(bt){return V.call(F,bt,it++)}),et}function I(E){if(E._status===-1){var V=E._result;V=V(),V.then(function(F){(E._status===0||E._status===-1)&&(E._status=1,E._result=F)},function(F){(E._status===0||E._status===-1)&&(E._status=2,E._result=F)}),E._status===-1&&(E._status=0,E._result=V)}if(E._status===1)return E._result.default;throw E._result}var rt=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function st(){}return gt.Children={map:q,forEach:function(E,V,F){q(E,function(){V.apply(this,arguments)},F)},count:function(E){var V=0;return q(E,function(){V++}),V},toArray:function(E){return q(E,function(V){return V})||[]},only:function(E){if(!H(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},gt.Component=$,gt.Fragment=o,gt.Profiler=c,gt.PureComponent=W,gt.StrictMode=s,gt.Suspense=S,gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,gt.__COMPILER_RUNTIME={__proto__:null,c:function(E){return h.H.useMemoCache(E)}},gt.cache=function(E){return function(){return E.apply(null,arguments)}},gt.cloneElement=function(E,V,F){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var et=M({},E.props),it=E.key,bt=void 0;if(V!=null)for(ut in V.ref!==void 0&&(bt=void 0),V.key!==void 0&&(it=""+V.key),V)!x.call(V,ut)||ut==="key"||ut==="__self"||ut==="__source"||ut==="ref"&&V.ref===void 0||(et[ut]=V[ut]);var ut=arguments.length-2;if(ut===1)et.children=F;else if(1<ut){for(var te=Array(ut),Ot=0;Ot<ut;Ot++)te[Ot]=arguments[Ot+2];et.children=te}return T(E.type,it,void 0,void 0,bt,et)},gt.createContext=function(E){return E={$$typeof:g,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:d,_context:E},E},gt.createElement=function(E,V,F){var et,it={},bt=null;if(V!=null)for(et in V.key!==void 0&&(bt=""+V.key),V)x.call(V,et)&&et!=="key"&&et!=="__self"&&et!=="__source"&&(it[et]=V[et]);var ut=arguments.length-2;if(ut===1)it.children=F;else if(1<ut){for(var te=Array(ut),Ot=0;Ot<ut;Ot++)te[Ot]=arguments[Ot+2];it.children=te}if(E&&E.defaultProps)for(et in ut=E.defaultProps,ut)it[et]===void 0&&(it[et]=ut[et]);return T(E,bt,void 0,void 0,null,it)},gt.createRef=function(){return{current:null}},gt.forwardRef=function(E){return{$$typeof:y,render:E}},gt.isValidElement=H,gt.lazy=function(E){return{$$typeof:O,_payload:{_status:-1,_result:E},_init:I}},gt.memo=function(E,V){return{$$typeof:b,type:E,compare:V===void 0?null:V}},gt.startTransition=function(E){var V=h.T,F={};h.T=F;try{var et=E(),it=h.S;it!==null&&it(F,et),typeof et=="object"&&et!==null&&typeof et.then=="function"&&et.then(st,rt)}catch(bt){rt(bt)}finally{h.T=V}},gt.unstable_useCacheRefresh=function(){return h.H.useCacheRefresh()},gt.use=function(E){return h.H.use(E)},gt.useActionState=function(E,V,F){return h.H.useActionState(E,V,F)},gt.useCallback=function(E,V){return h.H.useCallback(E,V)},gt.useContext=function(E){return h.H.useContext(E)},gt.useDebugValue=function(){},gt.useDeferredValue=function(E,V){return h.H.useDeferredValue(E,V)},gt.useEffect=function(E,V,F){var et=h.H;if(typeof F=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return et.useEffect(E,V)},gt.useId=function(){return h.H.useId()},gt.useImperativeHandle=function(E,V,F){return h.H.useImperativeHandle(E,V,F)},gt.useInsertionEffect=function(E,V){return h.H.useInsertionEffect(E,V)},gt.useLayoutEffect=function(E,V){return h.H.useLayoutEffect(E,V)},gt.useMemo=function(E,V){return h.H.useMemo(E,V)},gt.useOptimistic=function(E,V){return h.H.useOptimistic(E,V)},gt.useReducer=function(E,V,F){return h.H.useReducer(E,V,F)},gt.useRef=function(E){return h.H.useRef(E)},gt.useState=function(E){return h.H.useState(E)},gt.useSyncExternalStore=function(E,V,F){return h.H.useSyncExternalStore(E,V,F)},gt.useTransition=function(){return h.H.useTransition()},gt.version="19.1.0",gt}var ng;function jf(){return ng||(ng=1,Jc.exports=Ly()),Jc.exports}var K=jf();const qt=jy(K),gf=Uy({__proto__:null,default:qt},[K]);var Wc={exports:{}},nl={},Ic={exports:{}},Fc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function Gy(){return ag||(ag=1,function(a){function i(q,I){var rt=q.length;q.push(I);t:for(;0<rt;){var st=rt-1>>>1,E=q[st];if(0<c(E,I))q[st]=I,q[rt]=E,rt=st;else break t}}function o(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var I=q[0],rt=q.pop();if(rt!==I){q[0]=rt;t:for(var st=0,E=q.length,V=E>>>1;st<V;){var F=2*(st+1)-1,et=q[F],it=F+1,bt=q[it];if(0>c(et,rt))it<E&&0>c(bt,et)?(q[st]=bt,q[it]=rt,st=it):(q[st]=et,q[F]=rt,st=F);else if(it<E&&0>c(bt,rt))q[st]=bt,q[it]=rt,st=it;else break t}}return I}function c(q,I){var rt=q.sortIndex-I.sortIndex;return rt!==0?rt:q.id-I.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var g=Date,y=g.now();a.unstable_now=function(){return g.now()-y}}var S=[],b=[],O=1,C=null,k=3,j=!1,M=!1,w=!1,$=!1,Q=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function f(q){for(var I=o(b);I!==null;){if(I.callback===null)s(b);else if(I.startTime<=q)s(b),I.sortIndex=I.expirationTime,i(S,I);else break;I=o(b)}}function h(q){if(w=!1,f(q),!M)if(o(S)!==null)M=!0,x||(x=!0,tt());else{var I=o(b);I!==null&&ht(h,I.startTime-q)}}var x=!1,T=-1,z=5,H=-1;function v(){return $?!0:!(a.unstable_now()-H<z)}function Y(){if($=!1,x){var q=a.unstable_now();H=q;var I=!0;try{t:{M=!1,w&&(w=!1,W(T),T=-1),j=!0;var rt=k;try{e:{for(f(q),C=o(S);C!==null&&!(C.expirationTime>q&&v());){var st=C.callback;if(typeof st=="function"){C.callback=null,k=C.priorityLevel;var E=st(C.expirationTime<=q);if(q=a.unstable_now(),typeof E=="function"){C.callback=E,f(q),I=!0;break e}C===o(S)&&s(S),f(q)}else s(S);C=o(S)}if(C!==null)I=!0;else{var V=o(b);V!==null&&ht(h,V.startTime-q),I=!1}}break t}finally{C=null,k=rt,j=!1}I=void 0}}finally{I?tt():x=!1}}}var tt;if(typeof _=="function")tt=function(){_(Y)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,wt=nt.port2;nt.port1.onmessage=Y,tt=function(){wt.postMessage(null)}}else tt=function(){Q(Y,0)};function ht(q,I){T=Q(function(){q(a.unstable_now())},I)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(q){q.callback=null},a.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<q?Math.floor(1e3/q):5},a.unstable_getCurrentPriorityLevel=function(){return k},a.unstable_next=function(q){switch(k){case 1:case 2:case 3:var I=3;break;default:I=k}var rt=k;k=I;try{return q()}finally{k=rt}},a.unstable_requestPaint=function(){$=!0},a.unstable_runWithPriority=function(q,I){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var rt=k;k=q;try{return I()}finally{k=rt}},a.unstable_scheduleCallback=function(q,I,rt){var st=a.unstable_now();switch(typeof rt=="object"&&rt!==null?(rt=rt.delay,rt=typeof rt=="number"&&0<rt?st+rt:st):rt=st,q){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=rt+E,q={id:O++,callback:I,priorityLevel:q,startTime:rt,expirationTime:E,sortIndex:-1},rt>st?(q.sortIndex=rt,i(b,q),o(S)===null&&q===o(b)&&(w?(W(T),T=-1):w=!0,ht(h,rt-st))):(q.sortIndex=E,i(S,q),M||j||(M=!0,x||(x=!0,tt()))),q},a.unstable_shouldYield=v,a.unstable_wrapCallback=function(q){var I=k;return function(){var rt=k;k=I;try{return q.apply(this,arguments)}finally{k=rt}}}}(Fc)),Fc}var rg;function Yy(){return rg||(rg=1,Ic.exports=Gy()),Ic.exports}var tf={exports:{}},xe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function Xy(){if(ig)return xe;ig=1;var a=jf();function i(S){var b="https://react.dev/errors/"+S;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var O=2;O<arguments.length;O++)b+="&args[]="+encodeURIComponent(arguments[O])}return"Minified React error #"+S+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(S,b,O){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:C==null?null:""+C,children:S,containerInfo:b,implementation:O}}var g=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(S,b){if(S==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return xe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,xe.createPortal=function(S,b){var O=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(i(299));return d(S,b,null,O)},xe.flushSync=function(S){var b=g.T,O=s.p;try{if(g.T=null,s.p=2,S)return S()}finally{g.T=b,s.p=O,s.d.f()}},xe.preconnect=function(S,b){typeof S=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,s.d.C(S,b))},xe.prefetchDNS=function(S){typeof S=="string"&&s.d.D(S)},xe.preinit=function(S,b){if(typeof S=="string"&&b&&typeof b.as=="string"){var O=b.as,C=y(O,b.crossOrigin),k=typeof b.integrity=="string"?b.integrity:void 0,j=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;O==="style"?s.d.S(S,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:C,integrity:k,fetchPriority:j}):O==="script"&&s.d.X(S,{crossOrigin:C,integrity:k,fetchPriority:j,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},xe.preinitModule=function(S,b){if(typeof S=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var O=y(b.as,b.crossOrigin);s.d.M(S,{crossOrigin:O,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&s.d.M(S)},xe.preload=function(S,b){if(typeof S=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var O=b.as,C=y(O,b.crossOrigin);s.d.L(S,O,{crossOrigin:C,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},xe.preloadModule=function(S,b){if(typeof S=="string")if(b){var O=y(b.as,b.crossOrigin);s.d.m(S,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:O,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else s.d.m(S)},xe.requestFormReset=function(S){s.d.r(S)},xe.unstable_batchedUpdates=function(S,b){return S(b)},xe.useFormState=function(S,b,O){return g.H.useFormState(S,b,O)},xe.useFormStatus=function(){return g.H.useHostTransitionStatus()},xe.version="19.1.0",xe}var lg;function Vy(){if(lg)return tf.exports;lg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),tf.exports=Xy(),tf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function Zy(){if(og)return nl;og=1;var a=Yy(),i=jf(),o=Vy();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function g(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function y(t){if(d(t)!==t)throw Error(s(188))}function S(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(s(188));return e!==t?null:t}for(var n=t,r=e;;){var l=n.return;if(l===null)break;var u=l.alternate;if(u===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===n)return y(l),t;if(u===r)return y(l),e;u=u.sibling}throw Error(s(188))}if(n.return!==r.return)n=l,r=u;else{for(var p=!1,m=l.child;m;){if(m===n){p=!0,n=l,r=u;break}if(m===r){p=!0,r=l,n=u;break}m=m.sibling}if(!p){for(m=u.child;m;){if(m===n){p=!0,n=u,r=l;break}if(m===r){p=!0,r=u,n=l;break}m=m.sibling}if(!p)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?t:e}function b(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=b(t),e!==null)return e;t=t.sibling}return null}var O=Object.assign,C=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),W=Symbol.for("react.consumer"),_=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),x=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),v=Symbol.for("react.memo_cache_sentinel"),Y=Symbol.iterator;function tt(t){return t===null||typeof t!="object"?null:(t=Y&&t[Y]||t["@@iterator"],typeof t=="function"?t:null)}var nt=Symbol.for("react.client.reference");function wt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===nt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case $:return"Profiler";case w:return"StrictMode";case h:return"Suspense";case x:return"SuspenseList";case H:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case j:return"Portal";case _:return(t.displayName||"Context")+".Provider";case W:return(t._context.displayName||"Context")+".Consumer";case f:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case T:return e=t.displayName||null,e!==null?e:wt(t.type)||"Memo";case z:e=t._payload,t=t._init;try{return wt(t(e))}catch{}}return null}var ht=Array.isArray,q=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rt={pending:!1,data:null,method:null,action:null},st=[],E=-1;function V(t){return{current:t}}function F(t){0>E||(t.current=st[E],st[E]=null,E--)}function et(t,e){E++,st[E]=t.current,t.current=e}var it=V(null),bt=V(null),ut=V(null),te=V(null);function Ot(t,e){switch(et(ut,e),et(bt,t),et(it,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?C0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=C0(e),t=_0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}F(it),et(it,t)}function se(){F(it),F(bt),F(ut)}function En(t){t.memoizedState!==null&&et(te,t);var e=it.current,n=_0(e,t.type);e!==n&&(et(bt,t),et(it,n))}function sn(t){bt.current===t&&(F(it),F(bt)),te.current===t&&(F(te),Ji._currentValue=rt)}var Ae=Object.prototype.hasOwnProperty,ni=a.unstable_scheduleCallback,Ta=a.unstable_cancelCallback,Ns=a.unstable_shouldYield,Hs=a.unstable_requestPaint,Te=a.unstable_now,Oa=a.unstable_getCurrentPriorityLevel,Cl=a.unstable_ImmediatePriority,ai=a.unstable_UserBlockingPriority,Wa=a.unstable_NormalPriority,pt=a.unstable_LowPriority,ud=a.unstable_IdlePriority,xb=a.log,Sb=a.unstable_setDisableYieldValue,ri=null,Pe=null;function Kn(t){if(typeof xb=="function"&&Sb(t),Pe&&typeof Pe.setStrictMode=="function")try{Pe.setStrictMode(ri,t)}catch{}}var Be=Math.clz32?Math.clz32:Ob,wb=Math.log,Tb=Math.LN2;function Ob(t){return t>>>=0,t===0?32:31-(wb(t)/Tb|0)|0}var _l=256,Rl=4194304;function Aa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ml(t,e,n){var r=t.pendingLanes;if(r===0)return 0;var l=0,u=t.suspendedLanes,p=t.pingedLanes;t=t.warmLanes;var m=r&134217727;return m!==0?(r=m&~u,r!==0?l=Aa(r):(p&=m,p!==0?l=Aa(p):n||(n=m&~t,n!==0&&(l=Aa(n))))):(m=r&~u,m!==0?l=Aa(m):p!==0?l=Aa(p):n||(n=r&~t,n!==0&&(l=Aa(n)))),l===0?0:e!==0&&e!==l&&(e&u)===0&&(u=l&-l,n=e&-e,u>=n||u===32&&(n&4194048)!==0)?e:l}function ii(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Ab(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cd(){var t=_l;return _l<<=1,(_l&4194048)===0&&(_l=256),t}function fd(){var t=Rl;return Rl<<=1,(Rl&62914560)===0&&(Rl=4194304),t}function Us(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function li(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Eb(t,e,n,r,l,u){var p=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var m=t.entanglements,A=t.expirationTimes,B=t.hiddenUpdates;for(n=p&~n;0<n;){var G=31-Be(n),Z=1<<G;m[G]=0,A[G]=-1;var N=B[G];if(N!==null)for(B[G]=null,G=0;G<N.length;G++){var U=N[G];U!==null&&(U.lane&=-536870913)}n&=~Z}r!==0&&dd(t,r,0),u!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=u&~(p&~e))}function dd(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-Be(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|n&4194090}function hd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Be(n),l=1<<r;l&e|t[r]&e&&(t[r]|=e),n&=~l}}function js(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $s(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function pd(){var t=I.p;return t!==0?t:(t=window.event,t===void 0?32:Z0(t.type))}function Cb(t,e){var n=I.p;try{return I.p=t,e()}finally{I.p=n}}var Jn=Math.random().toString(36).slice(2),ye="__reactFiber$"+Jn,Ee="__reactProps$"+Jn,Ia="__reactContainer$"+Jn,qs="__reactEvents$"+Jn,_b="__reactListeners$"+Jn,Rb="__reactHandles$"+Jn,gd="__reactResources$"+Jn,oi="__reactMarker$"+Jn;function Ls(t){delete t[ye],delete t[Ee],delete t[qs],delete t[_b],delete t[Rb]}function Fa(t){var e=t[ye];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ia]||n[ye]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=D0(t);t!==null;){if(n=t[ye])return n;t=D0(t)}return e}t=n,n=t.parentNode}return null}function tr(t){if(t=t[ye]||t[Ia]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function si(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function er(t){var e=t[gd];return e||(e=t[gd]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ue(t){t[oi]=!0}var md=new Set,bd={};function Ea(t,e){nr(t,e),nr(t+"Capture",e)}function nr(t,e){for(bd[t]=e,t=0;t<e.length;t++)md.add(e[t])}var Mb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yd={},vd={};function kb(t){return Ae.call(vd,t)?!0:Ae.call(yd,t)?!1:Mb.test(t)?vd[t]=!0:(yd[t]=!0,!1)}function kl(t,e,n){if(kb(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Dl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Cn(t,e,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+r)}}var Gs,xd;function ar(t){if(Gs===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gs=e&&e[1]||"",xd=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gs+t+xd}var Ys=!1;function Xs(t,e){if(!t||Ys)return"";Ys=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(U){var N=U}Reflect.construct(t,[],Z)}else{try{Z.call()}catch(U){N=U}t.call(Z.prototype)}}else{try{throw Error()}catch(U){N=U}(Z=t())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(U){if(U&&N&&typeof U.stack=="string")return[U.stack,N.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),p=u[0],m=u[1];if(p&&m){var A=p.split(`
`),B=m.split(`
`);for(l=r=0;r<A.length&&!A[r].includes("DetermineComponentFrameRoot");)r++;for(;l<B.length&&!B[l].includes("DetermineComponentFrameRoot");)l++;if(r===A.length||l===B.length)for(r=A.length-1,l=B.length-1;1<=r&&0<=l&&A[r]!==B[l];)l--;for(;1<=r&&0<=l;r--,l--)if(A[r]!==B[l]){if(r!==1||l!==1)do if(r--,l--,0>l||A[r]!==B[l]){var G=`
`+A[r].replace(" at new "," at ");return t.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",t.displayName)),G}while(1<=r&&0<=l);break}}}finally{Ys=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?ar(n):""}function Db(t){switch(t.tag){case 26:case 27:case 5:return ar(t.type);case 16:return ar("Lazy");case 13:return ar("Suspense");case 19:return ar("SuspenseList");case 0:case 15:return Xs(t.type,!1);case 11:return Xs(t.type.render,!1);case 1:return Xs(t.type,!0);case 31:return ar("Activity");default:return""}}function Sd(t){try{var e="";do e+=Db(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Qe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zb(t){var e=wd(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,u=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(p){r=""+p,u.call(this,p)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(p){r=""+p},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zl(t){t._valueTracker||(t._valueTracker=zb(t))}function Td(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=wd(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Pb=/[\n"\\]/g;function Ke(t){return t.replace(Pb,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Vs(t,e,n,r,l,u,p,m){t.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.type=p:t.removeAttribute("type"),e!=null?p==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Qe(e)):t.value!==""+Qe(e)&&(t.value=""+Qe(e)):p!=="submit"&&p!=="reset"||t.removeAttribute("value"),e!=null?Zs(t,p,Qe(e)):n!=null?Zs(t,p,Qe(n)):r!=null&&t.removeAttribute("value"),l==null&&u!=null&&(t.defaultChecked=!!u),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.name=""+Qe(m):t.removeAttribute("name")}function Od(t,e,n,r,l,u,p,m){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;n=n!=null?""+Qe(n):"",e=e!=null?""+Qe(e):n,m||e===t.value||(t.value=e),t.defaultValue=e}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=m?t.checked:!!r,t.defaultChecked=!!r,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.name=p)}function Zs(t,e,n){e==="number"&&Pl(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function rr(t,e,n,r){if(t=t.options,e){e={};for(var l=0;l<n.length;l++)e["$"+n[l]]=!0;for(n=0;n<t.length;n++)l=e.hasOwnProperty("$"+t[n].value),t[n].selected!==l&&(t[n].selected=l),l&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Qe(n),e=null,l=0;l<t.length;l++){if(t[l].value===n){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function Ad(t,e,n){if(e!=null&&(e=""+Qe(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Qe(n):""}function Ed(t,e,n,r){if(e==null){if(r!=null){if(n!=null)throw Error(s(92));if(ht(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n==null&&(n=""),e=n}n=Qe(e),t.defaultValue=n,r=t.textContent,r===n&&r!==""&&r!==null&&(t.value=r)}function ir(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Bb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cd(t,e,n){var r=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,n):typeof n!="number"||n===0||Bb.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function _d(t,e,n){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var l in e)r=e[l],e.hasOwnProperty(l)&&n[l]!==r&&Cd(t,l,r)}else for(var u in e)e.hasOwnProperty(u)&&Cd(t,u,e[u])}function Qs(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bl(t){return Hb.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Ks=null;function Js(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lr=null,or=null;function Rd(t){var e=tr(t);if(e&&(t=e.stateNode)){var n=t[Ee]||null;t:switch(t=e.stateNode,e.type){case"input":if(Vs(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ke(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var l=r[Ee]||null;if(!l)throw Error(s(90));Vs(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<n.length;e++)r=n[e],r.form===t.form&&Td(r)}break t;case"textarea":Ad(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&rr(t,!!n.multiple,e,!1)}}}var Ws=!1;function Md(t,e,n){if(Ws)return t(e,n);Ws=!0;try{var r=t(e);return r}finally{if(Ws=!1,(lr!==null||or!==null)&&(So(),lr&&(e=lr,t=or,or=lr=null,Rd(e),t)))for(e=0;e<t.length;e++)Rd(t[e])}}function ui(t,e){var n=t.stateNode;if(n===null)return null;var r=n[Ee]||null;if(r===null)return null;n=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(s(231,e,typeof n));return n}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Is=!1;if(_n)try{var ci={};Object.defineProperty(ci,"passive",{get:function(){Is=!0}}),window.addEventListener("test",ci,ci),window.removeEventListener("test",ci,ci)}catch{Is=!1}var Wn=null,Fs=null,Nl=null;function kd(){if(Nl)return Nl;var t,e=Fs,n=e.length,r,l="value"in Wn?Wn.value:Wn.textContent,u=l.length;for(t=0;t<n&&e[t]===l[t];t++);var p=n-t;for(r=1;r<=p&&e[n-r]===l[u-r];r++);return Nl=l.slice(t,1<r?1-r:void 0)}function Hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ul(){return!0}function Dd(){return!1}function Ce(t){function e(n,r,l,u,p){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=u,this.target=p,this.currentTarget=null;for(var m in t)t.hasOwnProperty(m)&&(n=t[m],this[m]=n?n(u):u[m]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ul:Dd,this.isPropagationStopped=Dd,this}return O(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),e}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=Ce(Ca),fi=O({},Ca,{view:0,detail:0}),Ub=Ce(fi),tu,eu,di,$l=O({},fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==di&&(di&&t.type==="mousemove"?(tu=t.screenX-di.screenX,eu=t.screenY-di.screenY):eu=tu=0,di=t),tu)},movementY:function(t){return"movementY"in t?t.movementY:eu}}),zd=Ce($l),jb=O({},$l,{dataTransfer:0}),$b=Ce(jb),qb=O({},fi,{relatedTarget:0}),nu=Ce(qb),Lb=O({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),Gb=Ce(Lb),Yb=O({},Ca,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xb=Ce(Yb),Vb=O({},Ca,{data:0}),Pd=Ce(Vb),Zb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Kb[t])?!!e[t]:!1}function au(){return Jb}var Wb=O({},fi,{key:function(t){if(t.key){var e=Zb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(t){return t.type==="keypress"?Hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ib=Ce(Wb),Fb=O({},$l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=Ce(Fb),t1=O({},fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),e1=Ce(t1),n1=O({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),a1=Ce(n1),r1=O({},$l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),i1=Ce(r1),l1=O({},Ca,{newState:0,oldState:0}),o1=Ce(l1),s1=[9,13,27,32],ru=_n&&"CompositionEvent"in window,hi=null;_n&&"documentMode"in document&&(hi=document.documentMode);var u1=_n&&"TextEvent"in window&&!hi,Nd=_n&&(!ru||hi&&8<hi&&11>=hi),Hd=" ",Ud=!1;function jd(t,e){switch(t){case"keyup":return s1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $d(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var sr=!1;function c1(t,e){switch(t){case"compositionend":return $d(e);case"keypress":return e.which!==32?null:(Ud=!0,Hd);case"textInput":return t=e.data,t===Hd&&Ud?null:t;default:return null}}function f1(t,e){if(sr)return t==="compositionend"||!ru&&jd(t,e)?(t=kd(),Nl=Fs=Wn=null,sr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Nd&&e.locale!=="ko"?null:e.data;default:return null}}var d1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!d1[t.type]:e==="textarea"}function Ld(t,e,n,r){lr?or?or.push(r):or=[r]:lr=r,e=Co(e,"onChange"),0<e.length&&(n=new jl("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var pi=null,gi=null;function h1(t){w0(t,0)}function ql(t){var e=si(t);if(Td(e))return t}function Gd(t,e){if(t==="change")return e}var Yd=!1;if(_n){var iu;if(_n){var lu="oninput"in document;if(!lu){var Xd=document.createElement("div");Xd.setAttribute("oninput","return;"),lu=typeof Xd.oninput=="function"}iu=lu}else iu=!1;Yd=iu&&(!document.documentMode||9<document.documentMode)}function Vd(){pi&&(pi.detachEvent("onpropertychange",Zd),gi=pi=null)}function Zd(t){if(t.propertyName==="value"&&ql(gi)){var e=[];Ld(e,gi,t,Js(t)),Md(h1,e)}}function p1(t,e,n){t==="focusin"?(Vd(),pi=e,gi=n,pi.attachEvent("onpropertychange",Zd)):t==="focusout"&&Vd()}function g1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ql(gi)}function m1(t,e){if(t==="click")return ql(e)}function b1(t,e){if(t==="input"||t==="change")return ql(e)}function y1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ne=typeof Object.is=="function"?Object.is:y1;function mi(t,e){if(Ne(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Ae.call(e,l)||!Ne(t[l],e[l]))return!1}return!0}function Qd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kd(t,e){var n=Qd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Qd(n)}}function Jd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Jd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Pl(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pl(t.document)}return e}function ou(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var v1=_n&&"documentMode"in document&&11>=document.documentMode,ur=null,su=null,bi=null,uu=!1;function Id(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;uu||ur==null||ur!==Pl(r)||(r=ur,"selectionStart"in r&&ou(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bi&&mi(bi,r)||(bi=r,r=Co(su,"onSelect"),0<r.length&&(e=new jl("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ur)))}function _a(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cr={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionrun:_a("Transition","TransitionRun"),transitionstart:_a("Transition","TransitionStart"),transitioncancel:_a("Transition","TransitionCancel"),transitionend:_a("Transition","TransitionEnd")},cu={},Fd={};_n&&(Fd=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function Ra(t){if(cu[t])return cu[t];if(!cr[t])return t;var e=cr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Fd)return cu[t]=e[n];return t}var th=Ra("animationend"),eh=Ra("animationiteration"),nh=Ra("animationstart"),x1=Ra("transitionrun"),S1=Ra("transitionstart"),w1=Ra("transitioncancel"),ah=Ra("transitionend"),rh=new Map,fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fu.push("scrollEnd");function un(t,e){rh.set(t,e),Ea(e,[t])}var ih=new WeakMap;function Je(t,e){if(typeof t=="object"&&t!==null){var n=ih.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Sd(e)},ih.set(t,e),e)}return{value:t,source:e,stack:Sd(e)}}var We=[],fr=0,du=0;function Ll(){for(var t=fr,e=du=fr=0;e<t;){var n=We[e];We[e++]=null;var r=We[e];We[e++]=null;var l=We[e];We[e++]=null;var u=We[e];if(We[e++]=null,r!==null&&l!==null){var p=r.pending;p===null?l.next=l:(l.next=p.next,p.next=l),r.pending=l}u!==0&&lh(n,l,u)}}function Gl(t,e,n,r){We[fr++]=t,We[fr++]=e,We[fr++]=n,We[fr++]=r,du|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function hu(t,e,n,r){return Gl(t,e,n,r),Yl(t)}function dr(t,e){return Gl(t,null,null,e),Yl(t)}function lh(t,e,n){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n);for(var l=!1,u=t.return;u!==null;)u.childLanes|=n,r=u.alternate,r!==null&&(r.childLanes|=n),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(l=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,l&&e!==null&&(l=31-Be(n),t=u.hiddenUpdates,r=t[l],r===null?t[l]=[e]:r.push(e),e.lane=n|536870912),u):null}function Yl(t){if(50<Li)throw Li=0,vc=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var hr={};function T1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(t,e,n,r){return new T1(t,e,n,r)}function pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Rn(t,e){var n=t.alternate;return n===null?(n=He(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function oh(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Xl(t,e,n,r,l,u){var p=0;if(r=t,typeof t=="function")pu(t)&&(p=1);else if(typeof t=="string")p=Ay(t,n,it.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case H:return t=He(31,n,e,l),t.elementType=H,t.lanes=u,t;case M:return Ma(n.children,l,u,e);case w:p=8,l|=24;break;case $:return t=He(12,n,e,l|2),t.elementType=$,t.lanes=u,t;case h:return t=He(13,n,e,l),t.elementType=h,t.lanes=u,t;case x:return t=He(19,n,e,l),t.elementType=x,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Q:case _:p=10;break t;case W:p=9;break t;case f:p=11;break t;case T:p=14;break t;case z:p=16,r=null;break t}p=29,n=Error(s(130,t===null?"null":typeof t,"")),r=null}return e=He(p,n,e,l),e.elementType=t,e.type=r,e.lanes=u,e}function Ma(t,e,n,r){return t=He(7,t,r,e),t.lanes=n,t}function gu(t,e,n){return t=He(6,t,null,e),t.lanes=n,t}function mu(t,e,n){return e=He(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var pr=[],gr=0,Vl=null,Zl=0,Ie=[],Fe=0,ka=null,Mn=1,kn="";function Da(t,e){pr[gr++]=Zl,pr[gr++]=Vl,Vl=t,Zl=e}function sh(t,e,n){Ie[Fe++]=Mn,Ie[Fe++]=kn,Ie[Fe++]=ka,ka=t;var r=Mn;t=kn;var l=32-Be(r)-1;r&=~(1<<l),n+=1;var u=32-Be(e)+l;if(30<u){var p=l-l%5;u=(r&(1<<p)-1).toString(32),r>>=p,l-=p,Mn=1<<32-Be(e)+l|n<<l|r,kn=u+t}else Mn=1<<u|n<<l|r,kn=t}function bu(t){t.return!==null&&(Da(t,1),sh(t,1,0))}function yu(t){for(;t===Vl;)Vl=pr[--gr],pr[gr]=null,Zl=pr[--gr],pr[gr]=null;for(;t===ka;)ka=Ie[--Fe],Ie[Fe]=null,kn=Ie[--Fe],Ie[Fe]=null,Mn=Ie[--Fe],Ie[Fe]=null}var Oe=null,Zt=null,Et=!1,za=null,gn=!1,vu=Error(s(519));function Pa(t){var e=Error(s(418,""));throw xi(Je(e,t)),vu}function uh(t){var e=t.stateNode,n=t.type,r=t.memoizedProps;switch(e[ye]=t,e[Ee]=r,n){case"dialog":St("cancel",e),St("close",e);break;case"iframe":case"object":case"embed":St("load",e);break;case"video":case"audio":for(n=0;n<Yi.length;n++)St(Yi[n],e);break;case"source":St("error",e);break;case"img":case"image":case"link":St("error",e),St("load",e);break;case"details":St("toggle",e);break;case"input":St("invalid",e),Od(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),zl(e);break;case"select":St("invalid",e);break;case"textarea":St("invalid",e),Ed(e,r.value,r.defaultValue,r.children),zl(e)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||r.suppressHydrationWarning===!0||E0(e.textContent,n)?(r.popover!=null&&(St("beforetoggle",e),St("toggle",e)),r.onScroll!=null&&St("scroll",e),r.onScrollEnd!=null&&St("scrollend",e),r.onClick!=null&&(e.onclick=_o),e=!0):e=!1,e||Pa(t)}function ch(t){for(Oe=t.return;Oe;)switch(Oe.tag){case 5:case 13:gn=!1;return;case 27:case 3:gn=!0;return;default:Oe=Oe.return}}function yi(t){if(t!==Oe)return!1;if(!Et)return ch(t),Et=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Bc(t.type,t.memoizedProps)),n=!n),n&&Zt&&Pa(t),ch(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){Zt=fn(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}Zt=null}}else e===27?(e=Zt,ha(t.type)?(t=jc,jc=null,Zt=t):Zt=e):Zt=Oe?fn(t.stateNode.nextSibling):null;return!0}function vi(){Zt=Oe=null,Et=!1}function fh(){var t=za;return t!==null&&(Me===null?Me=t:Me.push.apply(Me,t),za=null),t}function xi(t){za===null?za=[t]:za.push(t)}var xu=V(null),Ba=null,Dn=null;function In(t,e,n){et(xu,e._currentValue),e._currentValue=n}function zn(t){t._currentValue=xu.current,F(xu)}function Su(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function wu(t,e,n,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){var p=l.child;u=u.firstContext;t:for(;u!==null;){var m=u;u=l;for(var A=0;A<e.length;A++)if(m.context===e[A]){u.lanes|=n,m=u.alternate,m!==null&&(m.lanes|=n),Su(u.return,n,t),r||(p=null);break t}u=m.next}}else if(l.tag===18){if(p=l.return,p===null)throw Error(s(341));p.lanes|=n,u=p.alternate,u!==null&&(u.lanes|=n),Su(p,n,t),p=null}else p=l.child;if(p!==null)p.return=l;else for(p=l;p!==null;){if(p===t){p=null;break}if(l=p.sibling,l!==null){l.return=p.return,p=l;break}p=p.return}l=p}}function Si(t,e,n,r){t=null;for(var l=e,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var p=l.alternate;if(p===null)throw Error(s(387));if(p=p.memoizedProps,p!==null){var m=l.type;Ne(l.pendingProps.value,p.value)||(t!==null?t.push(m):t=[m])}}else if(l===te.current){if(p=l.alternate,p===null)throw Error(s(387));p.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Ji):t=[Ji])}l=l.return}t!==null&&wu(e,t,n,r),e.flags|=262144}function Ql(t){for(t=t.firstContext;t!==null;){if(!Ne(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Na(t){Ba=t,Dn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ve(t){return dh(Ba,t)}function Kl(t,e){return Ba===null&&Na(t),dh(t,e)}function dh(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Dn===null){if(t===null)throw Error(s(308));Dn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Dn=Dn.next=e;return n}var O1=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},A1=a.unstable_scheduleCallback,E1=a.unstable_NormalPriority,ie={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tu(){return{controller:new O1,data:new Map,refCount:0}}function wi(t){t.refCount--,t.refCount===0&&A1(E1,function(){t.controller.abort()})}var Ti=null,Ou=0,mr=0,br=null;function C1(t,e){if(Ti===null){var n=Ti=[];Ou=0,mr=Ec(),br={status:"pending",value:void 0,then:function(r){n.push(r)}}}return Ou++,e.then(hh,hh),e}function hh(){if(--Ou===0&&Ti!==null){br!==null&&(br.status="fulfilled");var t=Ti;Ti=null,mr=0,br=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function _1(t,e){var n=[],r={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var l=0;l<n.length;l++)(0,n[l])(e)},function(l){for(r.status="rejected",r.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),r}var ph=q.S;q.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&C1(t,e),ph!==null&&ph(t,e)};var Ha=V(null);function Au(){var t=Ha.current;return t!==null?t:$t.pooledCache}function Jl(t,e){e===null?et(Ha,Ha.current):et(Ha,e.pool)}function gh(){var t=Au();return t===null?null:{parent:ie._currentValue,pool:t}}var Oi=Error(s(460)),mh=Error(s(474)),Wl=Error(s(542)),Eu={then:function(){}};function bh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Il(){}function yh(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Il,Il),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,xh(t),t;default:if(typeof e.status=="string")e.then(Il,Il);else{if(t=$t,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=r}},function(r){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,xh(t),t}throw Ai=e,Oi}}var Ai=null;function vh(){if(Ai===null)throw Error(s(459));var t=Ai;return Ai=null,t}function xh(t){if(t===Oi||t===Wl)throw Error(s(483))}var Fn=!1;function Cu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _u(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ta(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ea(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(kt&2)!==0){var l=r.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),r.pending=e,e=Yl(t),lh(t,null,n),e}return Gl(t,r,e,n),Yl(t)}function Ei(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hd(t,n)}}function Ru(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?l=u=p:u=u.next=p,n=n.next}while(n!==null);u===null?l=u=e:u=u.next=e}else l=u=e;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Mu=!1;function Ci(){if(Mu){var t=br;if(t!==null)throw t}}function _i(t,e,n,r){Mu=!1;var l=t.updateQueue;Fn=!1;var u=l.firstBaseUpdate,p=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var A=m,B=A.next;A.next=null,p===null?u=B:p.next=B,p=A;var G=t.alternate;G!==null&&(G=G.updateQueue,m=G.lastBaseUpdate,m!==p&&(m===null?G.firstBaseUpdate=B:m.next=B,G.lastBaseUpdate=A))}if(u!==null){var Z=l.baseState;p=0,G=B=A=null,m=u;do{var N=m.lane&-536870913,U=N!==m.lane;if(U?(Tt&N)===N:(r&N)===N){N!==0&&N===mr&&(Mu=!0),G!==null&&(G=G.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});t:{var dt=t,ct=m;N=e;var Bt=n;switch(ct.tag){case 1:if(dt=ct.payload,typeof dt=="function"){Z=dt.call(Bt,Z,N);break t}Z=dt;break t;case 3:dt.flags=dt.flags&-65537|128;case 0:if(dt=ct.payload,N=typeof dt=="function"?dt.call(Bt,Z,N):dt,N==null)break t;Z=O({},Z,N);break t;case 2:Fn=!0}}N=m.callback,N!==null&&(t.flags|=64,U&&(t.flags|=8192),U=l.callbacks,U===null?l.callbacks=[N]:U.push(N))}else U={lane:N,tag:m.tag,payload:m.payload,callback:m.callback,next:null},G===null?(B=G=U,A=Z):G=G.next=U,p|=N;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;U=m,m=U.next,U.next=null,l.lastBaseUpdate=U,l.shared.pending=null}}while(!0);G===null&&(A=Z),l.baseState=A,l.firstBaseUpdate=B,l.lastBaseUpdate=G,u===null&&(l.shared.lanes=0),ua|=p,t.lanes=p,t.memoizedState=Z}}function Sh(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function wh(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Sh(n[t],e)}var yr=V(null),Fl=V(0);function Th(t,e){t=$n,et(Fl,t),et(yr,e),$n=t|e.baseLanes}function ku(){et(Fl,$n),et(yr,yr.current)}function Du(){$n=Fl.current,F(yr),F(Fl)}var na=0,yt=null,zt=null,ee=null,to=!1,vr=!1,Ua=!1,eo=0,Ri=0,xr=null,R1=0;function Wt(){throw Error(s(321))}function zu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ne(t[n],e[n]))return!1;return!0}function Pu(t,e,n,r,l,u){return na=u,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,q.H=t===null||t.memoizedState===null?lp:op,Ua=!1,u=n(r,l),Ua=!1,vr&&(u=Ah(e,n,r,l)),Oh(t),u}function Oh(t){q.H=oo;var e=zt!==null&&zt.next!==null;if(na=0,ee=zt=yt=null,to=!1,Ri=0,xr=null,e)throw Error(s(300));t===null||ce||(t=t.dependencies,t!==null&&Ql(t)&&(ce=!0))}function Ah(t,e,n,r){yt=t;var l=0;do{if(vr&&(xr=null),Ri=0,vr=!1,25<=l)throw Error(s(301));if(l+=1,ee=zt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}q.H=N1,u=e(n,r)}while(vr);return u}function M1(){var t=q.H,e=t.useState()[0];return e=typeof e.then=="function"?Mi(e):e,t=t.useState()[0],(zt!==null?zt.memoizedState:null)!==t&&(yt.flags|=1024),e}function Bu(){var t=eo!==0;return eo=0,t}function Nu(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Hu(t){if(to){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}to=!1}na=0,ee=zt=yt=null,vr=!1,Ri=eo=0,xr=null}function _e(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?yt.memoizedState=ee=t:ee=ee.next=t,ee}function ne(){if(zt===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var e=ee===null?yt.memoizedState:ee.next;if(e!==null)ee=e,zt=t;else{if(t===null)throw yt.alternate===null?Error(s(467)):Error(s(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},ee===null?yt.memoizedState=ee=t:ee=ee.next=t}return ee}function Uu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mi(t){var e=Ri;return Ri+=1,xr===null&&(xr=[]),t=yh(xr,t,e),e=yt,(ee===null?e.memoizedState:ee.next)===null&&(e=e.alternate,q.H=e===null||e.memoizedState===null?lp:op),t}function no(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Mi(t);if(t.$$typeof===_)return ve(t)}throw Error(s(438,String(t)))}function ju(t){var e=null,n=yt.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var r=yt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Uu(),yt.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),r=0;r<t;r++)n[r]=v;return e.index++,n}function Pn(t,e){return typeof e=="function"?e(t):e}function ao(t){var e=ne();return $u(e,zt,t)}function $u(t,e,n){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var l=t.baseQueue,u=r.pending;if(u!==null){if(l!==null){var p=l.next;l.next=u.next,u.next=p}e.baseQueue=l=u,r.pending=null}if(u=t.baseState,l===null)t.memoizedState=u;else{e=l.next;var m=p=null,A=null,B=e,G=!1;do{var Z=B.lane&-536870913;if(Z!==B.lane?(Tt&Z)===Z:(na&Z)===Z){var N=B.revertLane;if(N===0)A!==null&&(A=A.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),Z===mr&&(G=!0);else if((na&N)===N){B=B.next,N===mr&&(G=!0);continue}else Z={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},A===null?(m=A=Z,p=u):A=A.next=Z,yt.lanes|=N,ua|=N;Z=B.action,Ua&&n(u,Z),u=B.hasEagerState?B.eagerState:n(u,Z)}else N={lane:Z,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},A===null?(m=A=N,p=u):A=A.next=N,yt.lanes|=Z,ua|=Z;B=B.next}while(B!==null&&B!==e);if(A===null?p=u:A.next=m,!Ne(u,t.memoizedState)&&(ce=!0,G&&(n=br,n!==null)))throw n;t.memoizedState=u,t.baseState=p,t.baseQueue=A,r.lastRenderedState=u}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function qu(t){var e=ne(),n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=t;var r=n.dispatch,l=n.pending,u=e.memoizedState;if(l!==null){n.pending=null;var p=l=l.next;do u=t(u,p.action),p=p.next;while(p!==l);Ne(u,e.memoizedState)||(ce=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,r]}function Eh(t,e,n){var r=yt,l=ne(),u=Et;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=e();var p=!Ne((zt||l).memoizedState,n);p&&(l.memoizedState=n,ce=!0),l=l.queue;var m=Rh.bind(null,r,l,t);if(ki(2048,8,m,[t]),l.getSnapshot!==e||p||ee!==null&&ee.memoizedState.tag&1){if(r.flags|=2048,Sr(9,ro(),_h.bind(null,r,l,n,e),null),$t===null)throw Error(s(349));u||(na&124)!==0||Ch(r,e,n)}return n}function Ch(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e=Uu(),yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function _h(t,e,n,r){e.value=n,e.getSnapshot=r,Mh(e)&&kh(t)}function Rh(t,e,n){return n(function(){Mh(e)&&kh(t)})}function Mh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ne(t,n)}catch{return!0}}function kh(t){var e=dr(t,2);e!==null&&Le(e,t,2)}function Lu(t){var e=_e();if(typeof t=="function"){var n=t;if(t=n(),Ua){Kn(!0);try{n()}finally{Kn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:t},e}function Dh(t,e,n,r){return t.baseState=n,$u(t,zt,typeof r=="function"?r:Pn)}function k1(t,e,n,r,l){if(lo(t))throw Error(s(485));if(t=e.action,t!==null){var u={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){u.listeners.push(p)}};q.T!==null?n(!0):u.isTransition=!1,r(u),n=e.pending,n===null?(u.next=e.pending=u,zh(e,u)):(u.next=n.next,e.pending=n.next=u)}}function zh(t,e){var n=e.action,r=e.payload,l=t.state;if(e.isTransition){var u=q.T,p={};q.T=p;try{var m=n(l,r),A=q.S;A!==null&&A(p,m),Ph(t,e,m)}catch(B){Gu(t,e,B)}finally{q.T=u}}else try{u=n(l,r),Ph(t,e,u)}catch(B){Gu(t,e,B)}}function Ph(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){Bh(t,e,r)},function(r){return Gu(t,e,r)}):Bh(t,e,n)}function Bh(t,e,n){e.status="fulfilled",e.value=n,Nh(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,zh(t,n)))}function Gu(t,e,n){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=n,Nh(e),e=e.next;while(e!==r)}t.action=null}function Nh(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Hh(t,e){return e}function Uh(t,e){if(Et){var n=$t.formState;if(n!==null){t:{var r=yt;if(Et){if(Zt){e:{for(var l=Zt,u=gn;l.nodeType!==8;){if(!u){l=null;break e}if(l=fn(l.nextSibling),l===null){l=null;break e}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){Zt=fn(l.nextSibling),r=l.data==="F!";break t}}Pa(r)}r=!1}r&&(e=n[0])}}return n=_e(),n.memoizedState=n.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hh,lastRenderedState:e},n.queue=r,n=ap.bind(null,yt,r),r.dispatch=n,r=Lu(!1),u=Qu.bind(null,yt,!1,r.queue),r=_e(),l={state:e,dispatch:null,action:t,pending:null},r.queue=l,n=k1.bind(null,yt,l,u,n),l.dispatch=n,r.memoizedState=t,[e,n,!1]}function jh(t){var e=ne();return $h(e,zt,t)}function $h(t,e,n){if(e=$u(t,e,Hh)[0],t=ao(Pn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=Mi(e)}catch(p){throw p===Oi?Wl:p}else r=e;e=ne();var l=e.queue,u=l.dispatch;return n!==e.memoizedState&&(yt.flags|=2048,Sr(9,ro(),D1.bind(null,l,n),null)),[r,u,t]}function D1(t,e){t.action=e}function qh(t){var e=ne(),n=zt;if(n!==null)return $h(e,n,t);ne(),e=e.memoizedState,n=ne();var r=n.queue.dispatch;return n.memoizedState=t,[e,r,!1]}function Sr(t,e,n,r){return t={tag:t,create:n,deps:r,inst:e,next:null},e=yt.updateQueue,e===null&&(e=Uu(),yt.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t),t}function ro(){return{destroy:void 0,resource:void 0}}function Lh(){return ne().memoizedState}function io(t,e,n,r){var l=_e();r=r===void 0?null:r,yt.flags|=t,l.memoizedState=Sr(1|e,ro(),n,r)}function ki(t,e,n,r){var l=ne();r=r===void 0?null:r;var u=l.memoizedState.inst;zt!==null&&r!==null&&zu(r,zt.memoizedState.deps)?l.memoizedState=Sr(e,u,n,r):(yt.flags|=t,l.memoizedState=Sr(1|e,u,n,r))}function Gh(t,e){io(8390656,8,t,e)}function Yh(t,e){ki(2048,8,t,e)}function Xh(t,e){return ki(4,2,t,e)}function Vh(t,e){return ki(4,4,t,e)}function Zh(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qh(t,e,n){n=n!=null?n.concat([t]):null,ki(4,4,Zh.bind(null,e,t),n)}function Yu(){}function Kh(t,e){var n=ne();e=e===void 0?null:e;var r=n.memoizedState;return e!==null&&zu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Jh(t,e){var n=ne();e=e===void 0?null:e;var r=n.memoizedState;if(e!==null&&zu(e,r[1]))return r[0];if(r=t(),Ua){Kn(!0);try{t()}finally{Kn(!1)}}return n.memoizedState=[r,e],r}function Xu(t,e,n){return n===void 0||(na&1073741824)!==0?t.memoizedState=e:(t.memoizedState=n,t=Fp(),yt.lanes|=t,ua|=t,n)}function Wh(t,e,n,r){return Ne(n,e)?n:yr.current!==null?(t=Xu(t,n,r),Ne(t,e)||(ce=!0),t):(na&42)===0?(ce=!0,t.memoizedState=n):(t=Fp(),yt.lanes|=t,ua|=t,e)}function Ih(t,e,n,r,l){var u=I.p;I.p=u!==0&&8>u?u:8;var p=q.T,m={};q.T=m,Qu(t,!1,e,n);try{var A=l(),B=q.S;if(B!==null&&B(m,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var G=_1(A,r);Di(t,e,G,qe(t))}else Di(t,e,r,qe(t))}catch(Z){Di(t,e,{then:function(){},status:"rejected",reason:Z},qe())}finally{I.p=u,q.T=p}}function z1(){}function Vu(t,e,n,r){if(t.tag!==5)throw Error(s(476));var l=Fh(t).queue;Ih(t,l,e,rt,n===null?z1:function(){return tp(t),n(r)})}function Fh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:rt,baseState:rt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:rt},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function tp(t){var e=Fh(t).next.queue;Di(t,e,{},qe())}function Zu(){return ve(Ji)}function ep(){return ne().memoizedState}function np(){return ne().memoizedState}function P1(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=qe();t=ta(n);var r=ea(e,t,n);r!==null&&(Le(r,e,n),Ei(r,e,n)),e={cache:Tu()},t.payload=e;return}e=e.return}}function B1(t,e,n){var r=qe();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},lo(t)?rp(e,n):(n=hu(t,e,n,r),n!==null&&(Le(n,t,r),ip(n,e,r)))}function ap(t,e,n){var r=qe();Di(t,e,n,r)}function Di(t,e,n,r){var l={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(lo(t))rp(e,l);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var p=e.lastRenderedState,m=u(p,n);if(l.hasEagerState=!0,l.eagerState=m,Ne(m,p))return Gl(t,e,l,0),$t===null&&Ll(),!1}catch{}finally{}if(n=hu(t,e,l,r),n!==null)return Le(n,t,r),ip(n,e,r),!0}return!1}function Qu(t,e,n,r){if(r={lane:2,revertLane:Ec(),action:r,hasEagerState:!1,eagerState:null,next:null},lo(t)){if(e)throw Error(s(479))}else e=hu(t,n,r,2),e!==null&&Le(e,t,2)}function lo(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function rp(t,e){vr=to=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ip(t,e,n){if((n&4194048)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hd(t,n)}}var oo={readContext:ve,use:no,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useLayoutEffect:Wt,useInsertionEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useSyncExternalStore:Wt,useId:Wt,useHostTransitionStatus:Wt,useFormState:Wt,useActionState:Wt,useOptimistic:Wt,useMemoCache:Wt,useCacheRefresh:Wt},lp={readContext:ve,use:no,useCallback:function(t,e){return _e().memoizedState=[t,e===void 0?null:e],t},useContext:ve,useEffect:Gh,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,io(4194308,4,Zh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return io(4194308,4,t,e)},useInsertionEffect:function(t,e){io(4,2,t,e)},useMemo:function(t,e){var n=_e();e=e===void 0?null:e;var r=t();if(Ua){Kn(!0);try{t()}finally{Kn(!1)}}return n.memoizedState=[r,e],r},useReducer:function(t,e,n){var r=_e();if(n!==void 0){var l=n(e);if(Ua){Kn(!0);try{n(e)}finally{Kn(!1)}}}else l=e;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=B1.bind(null,yt,t),[r.memoizedState,t]},useRef:function(t){var e=_e();return t={current:t},e.memoizedState=t},useState:function(t){t=Lu(t);var e=t.queue,n=ap.bind(null,yt,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Yu,useDeferredValue:function(t,e){var n=_e();return Xu(n,t,e)},useTransition:function(){var t=Lu(!1);return t=Ih.bind(null,yt,t.queue,!0,!1),_e().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var r=yt,l=_e();if(Et){if(n===void 0)throw Error(s(407));n=n()}else{if(n=e(),$t===null)throw Error(s(349));(Tt&124)!==0||Ch(r,e,n)}l.memoizedState=n;var u={value:n,getSnapshot:e};return l.queue=u,Gh(Rh.bind(null,r,u,t),[t]),r.flags|=2048,Sr(9,ro(),_h.bind(null,r,u,n,e),null),n},useId:function(){var t=_e(),e=$t.identifierPrefix;if(Et){var n=kn,r=Mn;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,e="«"+e+"R"+n,n=eo++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=R1++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Zu,useFormState:Uh,useActionState:Uh,useOptimistic:function(t){var e=_e();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Qu.bind(null,yt,!0,n),n.dispatch=e,[t,e]},useMemoCache:ju,useCacheRefresh:function(){return _e().memoizedState=P1.bind(null,yt)}},op={readContext:ve,use:no,useCallback:Kh,useContext:ve,useEffect:Yh,useImperativeHandle:Qh,useInsertionEffect:Xh,useLayoutEffect:Vh,useMemo:Jh,useReducer:ao,useRef:Lh,useState:function(){return ao(Pn)},useDebugValue:Yu,useDeferredValue:function(t,e){var n=ne();return Wh(n,zt.memoizedState,t,e)},useTransition:function(){var t=ao(Pn)[0],e=ne().memoizedState;return[typeof t=="boolean"?t:Mi(t),e]},useSyncExternalStore:Eh,useId:ep,useHostTransitionStatus:Zu,useFormState:jh,useActionState:jh,useOptimistic:function(t,e){var n=ne();return Dh(n,zt,t,e)},useMemoCache:ju,useCacheRefresh:np},N1={readContext:ve,use:no,useCallback:Kh,useContext:ve,useEffect:Yh,useImperativeHandle:Qh,useInsertionEffect:Xh,useLayoutEffect:Vh,useMemo:Jh,useReducer:qu,useRef:Lh,useState:function(){return qu(Pn)},useDebugValue:Yu,useDeferredValue:function(t,e){var n=ne();return zt===null?Xu(n,t,e):Wh(n,zt.memoizedState,t,e)},useTransition:function(){var t=qu(Pn)[0],e=ne().memoizedState;return[typeof t=="boolean"?t:Mi(t),e]},useSyncExternalStore:Eh,useId:ep,useHostTransitionStatus:Zu,useFormState:qh,useActionState:qh,useOptimistic:function(t,e){var n=ne();return zt!==null?Dh(n,zt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:ju,useCacheRefresh:np},wr=null,zi=0;function so(t){var e=zi;return zi+=1,wr===null&&(wr=[]),yh(wr,t,e)}function Pi(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function uo(t,e){throw e.$$typeof===C?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function sp(t){var e=t._init;return e(t._payload)}function up(t){function e(D,R){if(t){var P=D.deletions;P===null?(D.deletions=[R],D.flags|=16):P.push(R)}}function n(D,R){if(!t)return null;for(;R!==null;)e(D,R),R=R.sibling;return null}function r(D){for(var R=new Map;D!==null;)D.key!==null?R.set(D.key,D):R.set(D.index,D),D=D.sibling;return R}function l(D,R){return D=Rn(D,R),D.index=0,D.sibling=null,D}function u(D,R,P){return D.index=P,t?(P=D.alternate,P!==null?(P=P.index,P<R?(D.flags|=67108866,R):P):(D.flags|=67108866,R)):(D.flags|=1048576,R)}function p(D){return t&&D.alternate===null&&(D.flags|=67108866),D}function m(D,R,P,X){return R===null||R.tag!==6?(R=gu(P,D.mode,X),R.return=D,R):(R=l(R,P),R.return=D,R)}function A(D,R,P,X){var at=P.type;return at===M?G(D,R,P.props.children,X,P.key):R!==null&&(R.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===z&&sp(at)===R.type)?(R=l(R,P.props),Pi(R,P),R.return=D,R):(R=Xl(P.type,P.key,P.props,null,D.mode,X),Pi(R,P),R.return=D,R)}function B(D,R,P,X){return R===null||R.tag!==4||R.stateNode.containerInfo!==P.containerInfo||R.stateNode.implementation!==P.implementation?(R=mu(P,D.mode,X),R.return=D,R):(R=l(R,P.children||[]),R.return=D,R)}function G(D,R,P,X,at){return R===null||R.tag!==7?(R=Ma(P,D.mode,X,at),R.return=D,R):(R=l(R,P),R.return=D,R)}function Z(D,R,P){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=gu(""+R,D.mode,P),R.return=D,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case k:return P=Xl(R.type,R.key,R.props,null,D.mode,P),Pi(P,R),P.return=D,P;case j:return R=mu(R,D.mode,P),R.return=D,R;case z:var X=R._init;return R=X(R._payload),Z(D,R,P)}if(ht(R)||tt(R))return R=Ma(R,D.mode,P,null),R.return=D,R;if(typeof R.then=="function")return Z(D,so(R),P);if(R.$$typeof===_)return Z(D,Kl(D,R),P);uo(D,R)}return null}function N(D,R,P,X){var at=R!==null?R.key:null;if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return at!==null?null:m(D,R,""+P,X);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case k:return P.key===at?A(D,R,P,X):null;case j:return P.key===at?B(D,R,P,X):null;case z:return at=P._init,P=at(P._payload),N(D,R,P,X)}if(ht(P)||tt(P))return at!==null?null:G(D,R,P,X,null);if(typeof P.then=="function")return N(D,R,so(P),X);if(P.$$typeof===_)return N(D,R,Kl(D,P),X);uo(D,P)}return null}function U(D,R,P,X,at){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return D=D.get(P)||null,m(R,D,""+X,at);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case k:return D=D.get(X.key===null?P:X.key)||null,A(R,D,X,at);case j:return D=D.get(X.key===null?P:X.key)||null,B(R,D,X,at);case z:var vt=X._init;return X=vt(X._payload),U(D,R,P,X,at)}if(ht(X)||tt(X))return D=D.get(P)||null,G(R,D,X,at,null);if(typeof X.then=="function")return U(D,R,P,so(X),at);if(X.$$typeof===_)return U(D,R,P,Kl(R,X),at);uo(R,X)}return null}function dt(D,R,P,X){for(var at=null,vt=null,lt=R,ft=R=0,de=null;lt!==null&&ft<P.length;ft++){lt.index>ft?(de=lt,lt=null):de=lt.sibling;var At=N(D,lt,P[ft],X);if(At===null){lt===null&&(lt=de);break}t&&lt&&At.alternate===null&&e(D,lt),R=u(At,R,ft),vt===null?at=At:vt.sibling=At,vt=At,lt=de}if(ft===P.length)return n(D,lt),Et&&Da(D,ft),at;if(lt===null){for(;ft<P.length;ft++)lt=Z(D,P[ft],X),lt!==null&&(R=u(lt,R,ft),vt===null?at=lt:vt.sibling=lt,vt=lt);return Et&&Da(D,ft),at}for(lt=r(lt);ft<P.length;ft++)de=U(lt,D,ft,P[ft],X),de!==null&&(t&&de.alternate!==null&&lt.delete(de.key===null?ft:de.key),R=u(de,R,ft),vt===null?at=de:vt.sibling=de,vt=de);return t&&lt.forEach(function(ya){return e(D,ya)}),Et&&Da(D,ft),at}function ct(D,R,P,X){if(P==null)throw Error(s(151));for(var at=null,vt=null,lt=R,ft=R=0,de=null,At=P.next();lt!==null&&!At.done;ft++,At=P.next()){lt.index>ft?(de=lt,lt=null):de=lt.sibling;var ya=N(D,lt,At.value,X);if(ya===null){lt===null&&(lt=de);break}t&&lt&&ya.alternate===null&&e(D,lt),R=u(ya,R,ft),vt===null?at=ya:vt.sibling=ya,vt=ya,lt=de}if(At.done)return n(D,lt),Et&&Da(D,ft),at;if(lt===null){for(;!At.done;ft++,At=P.next())At=Z(D,At.value,X),At!==null&&(R=u(At,R,ft),vt===null?at=At:vt.sibling=At,vt=At);return Et&&Da(D,ft),at}for(lt=r(lt);!At.done;ft++,At=P.next())At=U(lt,D,ft,At.value,X),At!==null&&(t&&At.alternate!==null&&lt.delete(At.key===null?ft:At.key),R=u(At,R,ft),vt===null?at=At:vt.sibling=At,vt=At);return t&&lt.forEach(function(Hy){return e(D,Hy)}),Et&&Da(D,ft),at}function Bt(D,R,P,X){if(typeof P=="object"&&P!==null&&P.type===M&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case k:t:{for(var at=P.key;R!==null;){if(R.key===at){if(at=P.type,at===M){if(R.tag===7){n(D,R.sibling),X=l(R,P.props.children),X.return=D,D=X;break t}}else if(R.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===z&&sp(at)===R.type){n(D,R.sibling),X=l(R,P.props),Pi(X,P),X.return=D,D=X;break t}n(D,R);break}else e(D,R);R=R.sibling}P.type===M?(X=Ma(P.props.children,D.mode,X,P.key),X.return=D,D=X):(X=Xl(P.type,P.key,P.props,null,D.mode,X),Pi(X,P),X.return=D,D=X)}return p(D);case j:t:{for(at=P.key;R!==null;){if(R.key===at)if(R.tag===4&&R.stateNode.containerInfo===P.containerInfo&&R.stateNode.implementation===P.implementation){n(D,R.sibling),X=l(R,P.children||[]),X.return=D,D=X;break t}else{n(D,R);break}else e(D,R);R=R.sibling}X=mu(P,D.mode,X),X.return=D,D=X}return p(D);case z:return at=P._init,P=at(P._payload),Bt(D,R,P,X)}if(ht(P))return dt(D,R,P,X);if(tt(P)){if(at=tt(P),typeof at!="function")throw Error(s(150));return P=at.call(P),ct(D,R,P,X)}if(typeof P.then=="function")return Bt(D,R,so(P),X);if(P.$$typeof===_)return Bt(D,R,Kl(D,P),X);uo(D,P)}return typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint"?(P=""+P,R!==null&&R.tag===6?(n(D,R.sibling),X=l(R,P),X.return=D,D=X):(n(D,R),X=gu(P,D.mode,X),X.return=D,D=X),p(D)):n(D,R)}return function(D,R,P,X){try{zi=0;var at=Bt(D,R,P,X);return wr=null,at}catch(lt){if(lt===Oi||lt===Wl)throw lt;var vt=He(29,lt,null,D.mode);return vt.lanes=X,vt.return=D,vt}finally{}}}var Tr=up(!0),cp=up(!1),tn=V(null),mn=null;function aa(t){var e=t.alternate;et(le,le.current&1),et(tn,t),mn===null&&(e===null||yr.current!==null||e.memoizedState!==null)&&(mn=t)}function fp(t){if(t.tag===22){if(et(le,le.current),et(tn,t),mn===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(mn=t)}}else ra()}function ra(){et(le,le.current),et(tn,tn.current)}function Bn(t){F(tn),mn===t&&(mn=null),F(le)}var le=V(0);function co(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Uc(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Ku(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:O({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ju={enqueueSetState:function(t,e,n){t=t._reactInternals;var r=qe(),l=ta(r);l.payload=e,n!=null&&(l.callback=n),e=ea(t,l,r),e!==null&&(Le(e,t,r),Ei(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=qe(),l=ta(r);l.tag=1,l.payload=e,n!=null&&(l.callback=n),e=ea(t,l,r),e!==null&&(Le(e,t,r),Ei(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qe(),r=ta(n);r.tag=2,e!=null&&(r.callback=e),e=ea(t,r,n),e!==null&&(Le(e,t,n),Ei(e,t,n))}};function dp(t,e,n,r,l,u,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,u,p):e.prototype&&e.prototype.isPureReactComponent?!mi(n,r)||!mi(l,u):!0}function hp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ju.enqueueReplaceState(e,e.state,null)}function ja(t,e){var n=e;if("ref"in e){n={};for(var r in e)r!=="ref"&&(n[r]=e[r])}if(t=t.defaultProps){n===e&&(n=O({},n));for(var l in t)n[l]===void 0&&(n[l]=t[l])}return n}var fo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function pp(t){fo(t)}function gp(t){console.error(t)}function mp(t){fo(t)}function ho(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function bp(t,e,n){try{var r=t.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Wu(t,e,n){return n=ta(n),n.tag=3,n.payload={element:null},n.callback=function(){ho(t,e)},n}function yp(t){return t=ta(t),t.tag=3,t}function vp(t,e,n,r){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var u=r.value;t.payload=function(){return l(u)},t.callback=function(){bp(e,n,r)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(t.callback=function(){bp(e,n,r),typeof l!="function"&&(ca===null?ca=new Set([this]):ca.add(this));var m=r.stack;this.componentDidCatch(r.value,{componentStack:m!==null?m:""})})}function H1(t,e,n,r,l){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=n.alternate,e!==null&&Si(e,n,l,!0),n=tn.current,n!==null){switch(n.tag){case 13:return mn===null?Sc():n.alternate===null&&Qt===0&&(Qt=3),n.flags&=-257,n.flags|=65536,n.lanes=l,r===Eu?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([r]):e.add(r),Tc(t,r,l)),!1;case 22:return n.flags|=65536,r===Eu?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([r]):n.add(r)),Tc(t,r,l)),!1}throw Error(s(435,n.tag))}return Tc(t,r,l),Sc(),!1}if(Et)return e=tn.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,r!==vu&&(t=Error(s(422),{cause:r}),xi(Je(t,n)))):(r!==vu&&(e=Error(s(423),{cause:r}),xi(Je(e,n))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=Je(r,n),l=Wu(t.stateNode,r,l),Ru(t,l),Qt!==4&&(Qt=2)),!1;var u=Error(s(520),{cause:r});if(u=Je(u,n),qi===null?qi=[u]:qi.push(u),Qt!==4&&(Qt=2),e===null)return!0;r=Je(r,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=l&-l,n.lanes|=t,t=Wu(n.stateNode,r,t),Ru(n,t),!1;case 1:if(e=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ca===null||!ca.has(u))))return n.flags|=65536,l&=-l,n.lanes|=l,l=yp(l),vp(l,t,n,r),Ru(n,l),!1}n=n.return}while(n!==null);return!1}var xp=Error(s(461)),ce=!1;function pe(t,e,n,r){e.child=t===null?cp(e,null,n,r):Tr(e,t.child,n,r)}function Sp(t,e,n,r,l){n=n.render;var u=e.ref;if("ref"in r){var p={};for(var m in r)m!=="ref"&&(p[m]=r[m])}else p=r;return Na(e),r=Pu(t,e,n,p,u,l),m=Bu(),t!==null&&!ce?(Nu(t,e,l),Nn(t,e,l)):(Et&&m&&bu(e),e.flags|=1,pe(t,e,r,l),e.child)}function wp(t,e,n,r,l){if(t===null){var u=n.type;return typeof u=="function"&&!pu(u)&&u.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=u,Tp(t,e,u,r,l)):(t=Xl(n.type,null,r,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!ic(t,l)){var p=u.memoizedProps;if(n=n.compare,n=n!==null?n:mi,n(p,r)&&t.ref===e.ref)return Nn(t,e,l)}return e.flags|=1,t=Rn(u,r),t.ref=e.ref,t.return=e,e.child=t}function Tp(t,e,n,r,l){if(t!==null){var u=t.memoizedProps;if(mi(u,r)&&t.ref===e.ref)if(ce=!1,e.pendingProps=r=u,ic(t,l))(t.flags&131072)!==0&&(ce=!0);else return e.lanes=t.lanes,Nn(t,e,l)}return Iu(t,e,n,r,l)}function Op(t,e,n){var r=e.pendingProps,l=r.children,u=t!==null?t.memoizedState:null;if(r.mode==="hidden"){if((e.flags&128)!==0){if(r=u!==null?u.baseLanes|n:n,t!==null){for(l=e.child=t.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;e.childLanes=u&~r}else e.childLanes=0,e.child=null;return Ap(t,e,r,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Jl(e,u!==null?u.cachePool:null),u!==null?Th(e,u):ku(),fp(e);else return e.lanes=e.childLanes=536870912,Ap(t,e,u!==null?u.baseLanes|n:n,n)}else u!==null?(Jl(e,u.cachePool),Th(e,u),ra(),e.memoizedState=null):(t!==null&&Jl(e,null),ku(),ra());return pe(t,e,l,n),e.child}function Ap(t,e,n,r){var l=Au();return l=l===null?null:{parent:ie._currentValue,pool:l},e.memoizedState={baseLanes:n,cachePool:l},t!==null&&Jl(e,null),ku(),fp(e),t!==null&&Si(t,e,r,!0),null}function po(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Iu(t,e,n,r,l){return Na(e),n=Pu(t,e,n,r,void 0,l),r=Bu(),t!==null&&!ce?(Nu(t,e,l),Nn(t,e,l)):(Et&&r&&bu(e),e.flags|=1,pe(t,e,n,l),e.child)}function Ep(t,e,n,r,l,u){return Na(e),e.updateQueue=null,n=Ah(e,r,n,l),Oh(t),r=Bu(),t!==null&&!ce?(Nu(t,e,u),Nn(t,e,u)):(Et&&r&&bu(e),e.flags|=1,pe(t,e,n,u),e.child)}function Cp(t,e,n,r,l){if(Na(e),e.stateNode===null){var u=hr,p=n.contextType;typeof p=="object"&&p!==null&&(u=ve(p)),u=new n(r,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Ju,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=r,u.state=e.memoizedState,u.refs={},Cu(e),p=n.contextType,u.context=typeof p=="object"&&p!==null?ve(p):hr,u.state=e.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Ku(e,n,p,r),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(p=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),p!==u.state&&Ju.enqueueReplaceState(u,u.state,null),_i(e,r,u,l),Ci(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){u=e.stateNode;var m=e.memoizedProps,A=ja(n,m);u.props=A;var B=u.context,G=n.contextType;p=hr,typeof G=="object"&&G!==null&&(p=ve(G));var Z=n.getDerivedStateFromProps;G=typeof Z=="function"||typeof u.getSnapshotBeforeUpdate=="function",m=e.pendingProps!==m,G||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m||B!==p)&&hp(e,u,r,p),Fn=!1;var N=e.memoizedState;u.state=N,_i(e,r,u,l),Ci(),B=e.memoizedState,m||N!==B||Fn?(typeof Z=="function"&&(Ku(e,n,Z,r),B=e.memoizedState),(A=Fn||dp(e,n,A,r,N,B,p))?(G||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=B),u.props=r,u.state=B,u.context=p,r=A):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{u=e.stateNode,_u(t,e),p=e.memoizedProps,G=ja(n,p),u.props=G,Z=e.pendingProps,N=u.context,B=n.contextType,A=hr,typeof B=="object"&&B!==null&&(A=ve(B)),m=n.getDerivedStateFromProps,(B=typeof m=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==Z||N!==A)&&hp(e,u,r,A),Fn=!1,N=e.memoizedState,u.state=N,_i(e,r,u,l),Ci();var U=e.memoizedState;p!==Z||N!==U||Fn||t!==null&&t.dependencies!==null&&Ql(t.dependencies)?(typeof m=="function"&&(Ku(e,n,m,r),U=e.memoizedState),(G=Fn||dp(e,n,G,r,N,U,A)||t!==null&&t.dependencies!==null&&Ql(t.dependencies))?(B||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,U,A),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,U,A)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||p===t.memoizedProps&&N===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&N===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=U),u.props=r,u.state=U,u.context=A,r=G):(typeof u.componentDidUpdate!="function"||p===t.memoizedProps&&N===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&N===t.memoizedState||(e.flags|=1024),r=!1)}return u=r,po(t,e),r=(e.flags&128)!==0,u||r?(u=e.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&r?(e.child=Tr(e,t.child,null,l),e.child=Tr(e,null,n,l)):pe(t,e,n,l),e.memoizedState=u.state,t=e.child):t=Nn(t,e,l),t}function _p(t,e,n,r){return vi(),e.flags|=256,pe(t,e,n,r),e.child}var Fu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tc(t){return{baseLanes:t,cachePool:gh()}}function ec(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=en),t}function Rp(t,e,n){var r=e.pendingProps,l=!1,u=(e.flags&128)!==0,p;if((p=u)||(p=t!==null&&t.memoizedState===null?!1:(le.current&2)!==0),p&&(l=!0,e.flags&=-129),p=(e.flags&32)!==0,e.flags&=-33,t===null){if(Et){if(l?aa(e):ra(),Et){var m=Zt,A;if(A=m){t:{for(A=m,m=gn;A.nodeType!==8;){if(!m){m=null;break t}if(A=fn(A.nextSibling),A===null){m=null;break t}}m=A}m!==null?(e.memoizedState={dehydrated:m,treeContext:ka!==null?{id:Mn,overflow:kn}:null,retryLane:536870912,hydrationErrors:null},A=He(18,null,null,0),A.stateNode=m,A.return=e,e.child=A,Oe=e,Zt=null,A=!0):A=!1}A||Pa(e)}if(m=e.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return Uc(m)?e.lanes=32:e.lanes=536870912,null;Bn(e)}return m=r.children,r=r.fallback,l?(ra(),l=e.mode,m=go({mode:"hidden",children:m},l),r=Ma(r,l,n,null),m.return=e,r.return=e,m.sibling=r,e.child=m,l=e.child,l.memoizedState=tc(n),l.childLanes=ec(t,p,n),e.memoizedState=Fu,r):(aa(e),nc(e,m))}if(A=t.memoizedState,A!==null&&(m=A.dehydrated,m!==null)){if(u)e.flags&256?(aa(e),e.flags&=-257,e=ac(t,e,n)):e.memoizedState!==null?(ra(),e.child=t.child,e.flags|=128,e=null):(ra(),l=r.fallback,m=e.mode,r=go({mode:"visible",children:r.children},m),l=Ma(l,m,n,null),l.flags|=2,r.return=e,l.return=e,r.sibling=l,e.child=r,Tr(e,t.child,null,n),r=e.child,r.memoizedState=tc(n),r.childLanes=ec(t,p,n),e.memoizedState=Fu,e=l);else if(aa(e),Uc(m)){if(p=m.nextSibling&&m.nextSibling.dataset,p)var B=p.dgst;p=B,r=Error(s(419)),r.stack="",r.digest=p,xi({value:r,source:null,stack:null}),e=ac(t,e,n)}else if(ce||Si(t,e,n,!1),p=(n&t.childLanes)!==0,ce||p){if(p=$t,p!==null&&(r=n&-n,r=(r&42)!==0?1:js(r),r=(r&(p.suspendedLanes|n))!==0?0:r,r!==0&&r!==A.retryLane))throw A.retryLane=r,dr(t,r),Le(p,t,r),xp;m.data==="$?"||Sc(),e=ac(t,e,n)}else m.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=A.treeContext,Zt=fn(m.nextSibling),Oe=e,Et=!0,za=null,gn=!1,t!==null&&(Ie[Fe++]=Mn,Ie[Fe++]=kn,Ie[Fe++]=ka,Mn=t.id,kn=t.overflow,ka=e),e=nc(e,r.children),e.flags|=4096);return e}return l?(ra(),l=r.fallback,m=e.mode,A=t.child,B=A.sibling,r=Rn(A,{mode:"hidden",children:r.children}),r.subtreeFlags=A.subtreeFlags&65011712,B!==null?l=Rn(B,l):(l=Ma(l,m,n,null),l.flags|=2),l.return=e,r.return=e,r.sibling=l,e.child=r,r=l,l=e.child,m=t.child.memoizedState,m===null?m=tc(n):(A=m.cachePool,A!==null?(B=ie._currentValue,A=A.parent!==B?{parent:B,pool:B}:A):A=gh(),m={baseLanes:m.baseLanes|n,cachePool:A}),l.memoizedState=m,l.childLanes=ec(t,p,n),e.memoizedState=Fu,r):(aa(e),n=t.child,t=n.sibling,n=Rn(n,{mode:"visible",children:r.children}),n.return=e,n.sibling=null,t!==null&&(p=e.deletions,p===null?(e.deletions=[t],e.flags|=16):p.push(t)),e.child=n,e.memoizedState=null,n)}function nc(t,e){return e=go({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function go(t,e){return t=He(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function ac(t,e,n){return Tr(e,t.child,null,n),t=nc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Mp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Su(t.return,e,n)}function rc(t,e,n,r,l){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=r,u.tail=n,u.tailMode=l)}function kp(t,e,n){var r=e.pendingProps,l=r.revealOrder,u=r.tail;if(pe(t,e,r.children,n),r=le.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mp(t,n,e);else if(t.tag===19)Mp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}switch(et(le,r),l){case"forwards":for(n=e.child,l=null;n!==null;)t=n.alternate,t!==null&&co(t)===null&&(l=n),n=n.sibling;n=l,n===null?(l=e.child,e.child=null):(l=n.sibling,n.sibling=null),rc(e,!1,l,n,u);break;case"backwards":for(n=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&co(t)===null){e.child=l;break}t=l.sibling,l.sibling=n,n=l,l=t}rc(e,!0,n,null,u);break;case"together":rc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ua|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(Si(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,n=Rn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ic(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Ql(t)))}function U1(t,e,n){switch(e.tag){case 3:Ot(e,e.stateNode.containerInfo),In(e,ie,t.memoizedState.cache),vi();break;case 27:case 5:En(e);break;case 4:Ot(e,e.stateNode.containerInfo);break;case 10:In(e,e.type,e.memoizedProps.value);break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(aa(e),e.flags|=128,null):(n&e.child.childLanes)!==0?Rp(t,e,n):(aa(e),t=Nn(t,e,n),t!==null?t.sibling:null);aa(e);break;case 19:var l=(t.flags&128)!==0;if(r=(n&e.childLanes)!==0,r||(Si(t,e,n,!1),r=(n&e.childLanes)!==0),l){if(r)return kp(t,e,n);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),et(le,le.current),r)break;return null;case 22:case 23:return e.lanes=0,Op(t,e,n);case 24:In(e,ie,t.memoizedState.cache)}return Nn(t,e,n)}function Dp(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)ce=!0;else{if(!ic(t,n)&&(e.flags&128)===0)return ce=!1,U1(t,e,n);ce=(t.flags&131072)!==0}else ce=!1,Et&&(e.flags&1048576)!==0&&sh(e,Zl,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var r=e.elementType,l=r._init;if(r=l(r._payload),e.type=r,typeof r=="function")pu(r)?(t=ja(r,t),e.tag=1,e=Cp(null,e,r,t,n)):(e.tag=0,e=Iu(null,e,r,t,n));else{if(r!=null){if(l=r.$$typeof,l===f){e.tag=11,e=Sp(null,e,r,t,n);break t}else if(l===T){e.tag=14,e=wp(null,e,r,t,n);break t}}throw e=wt(r)||r,Error(s(306,e,""))}}return e;case 0:return Iu(t,e,e.type,e.pendingProps,n);case 1:return r=e.type,l=ja(r,e.pendingProps),Cp(t,e,r,l,n);case 3:t:{if(Ot(e,e.stateNode.containerInfo),t===null)throw Error(s(387));r=e.pendingProps;var u=e.memoizedState;l=u.element,_u(t,e),_i(e,r,null,n);var p=e.memoizedState;if(r=p.cache,In(e,ie,r),r!==u.cache&&wu(e,[ie],n,!0),Ci(),r=p.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:p.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=_p(t,e,r,n);break t}else if(r!==l){l=Je(Error(s(424)),e),xi(l),e=_p(t,e,r,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Zt=fn(t.firstChild),Oe=e,Et=!0,za=null,gn=!0,n=cp(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(vi(),r===l){e=Nn(t,e,n);break t}pe(t,e,r,n)}e=e.child}return e;case 26:return po(t,e),t===null?(n=N0(e.type,null,e.pendingProps,null))?e.memoizedState=n:Et||(n=e.type,t=e.pendingProps,r=Ro(ut.current).createElement(n),r[ye]=e,r[Ee]=t,me(r,n,t),ue(r),e.stateNode=r):e.memoizedState=N0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return En(e),t===null&&Et&&(r=e.stateNode=z0(e.type,e.pendingProps,ut.current),Oe=e,gn=!0,l=Zt,ha(e.type)?(jc=l,Zt=fn(r.firstChild)):Zt=l),pe(t,e,e.pendingProps.children,n),po(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Et&&((l=r=Zt)&&(r=dy(r,e.type,e.pendingProps,gn),r!==null?(e.stateNode=r,Oe=e,Zt=fn(r.firstChild),gn=!1,l=!0):l=!1),l||Pa(e)),En(e),l=e.type,u=e.pendingProps,p=t!==null?t.memoizedProps:null,r=u.children,Bc(l,u)?r=null:p!==null&&Bc(l,p)&&(e.flags|=32),e.memoizedState!==null&&(l=Pu(t,e,M1,null,null,n),Ji._currentValue=l),po(t,e),pe(t,e,r,n),e.child;case 6:return t===null&&Et&&((t=n=Zt)&&(n=hy(n,e.pendingProps,gn),n!==null?(e.stateNode=n,Oe=e,Zt=null,t=!0):t=!1),t||Pa(e)),null;case 13:return Rp(t,e,n);case 4:return Ot(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Tr(e,null,r,n):pe(t,e,r,n),e.child;case 11:return Sp(t,e,e.type,e.pendingProps,n);case 7:return pe(t,e,e.pendingProps,n),e.child;case 8:return pe(t,e,e.pendingProps.children,n),e.child;case 12:return pe(t,e,e.pendingProps.children,n),e.child;case 10:return r=e.pendingProps,In(e,e.type,r.value),pe(t,e,r.children,n),e.child;case 9:return l=e.type._context,r=e.pendingProps.children,Na(e),l=ve(l),r=r(l),e.flags|=1,pe(t,e,r,n),e.child;case 14:return wp(t,e,e.type,e.pendingProps,n);case 15:return Tp(t,e,e.type,e.pendingProps,n);case 19:return kp(t,e,n);case 31:return r=e.pendingProps,n=e.mode,r={mode:r.mode,children:r.children},t===null?(n=go(r,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=Rn(t.child,r),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return Op(t,e,n);case 24:return Na(e),r=ve(ie),t===null?(l=Au(),l===null&&(l=$t,u=Tu(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=n),l=u),e.memoizedState={parent:r,cache:l},Cu(e),In(e,ie,l)):((t.lanes&n)!==0&&(_u(t,e),_i(e,null,null,n),Ci()),l=t.memoizedState,u=e.memoizedState,l.parent!==r?(l={parent:r,cache:r},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),In(e,ie,r)):(r=u.cache,In(e,ie,r),r!==l.cache&&wu(e,[ie],n,!0))),pe(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function Hn(t){t.flags|=4}function zp(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!q0(e)){if(e=tn.current,e!==null&&((Tt&4194048)===Tt?mn!==null:(Tt&62914560)!==Tt&&(Tt&536870912)===0||e!==mn))throw Ai=Eu,mh;t.flags|=8192}}function mo(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?fd():536870912,t.lanes|=e,Cr|=e)}function Bi(t,e){if(!Et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var l=t.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&65011712,r|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function j1(t,e,n){var r=e.pendingProps;switch(yu(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return Vt(e),null;case 3:return n=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),zn(ie),se(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(yi(e)?Hn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,fh())),Vt(e),null;case 26:return n=e.memoizedState,t===null?(Hn(e),n!==null?(Vt(e),zp(e,n)):(Vt(e),e.flags&=-16777217)):n?n!==t.memoizedState?(Hn(e),Vt(e),zp(e,n)):(Vt(e),e.flags&=-16777217):(t.memoizedProps!==r&&Hn(e),Vt(e),e.flags&=-16777217),null;case 27:sn(e),n=ut.current;var l=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==r&&Hn(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return Vt(e),null}t=it.current,yi(e)?uh(e):(t=z0(l,r,n),e.stateNode=t,Hn(e))}return Vt(e),null;case 5:if(sn(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&Hn(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return Vt(e),null}if(t=it.current,yi(e))uh(e);else{switch(l=Ro(ut.current),t){case 1:t=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof r.is=="string"?l.createElement("select",{is:r.is}):l.createElement("select"),r.multiple?t.multiple=!0:r.size&&(t.size=r.size);break;default:t=typeof r.is=="string"?l.createElement(n,{is:r.is}):l.createElement(n)}}t[ye]=e,t[Ee]=r;t:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)t.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break t;for(;l.sibling===null;){if(l.return===null||l.return===e)break t;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=t;t:switch(me(t,n,r),n){case"button":case"input":case"select":case"textarea":t=!!r.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Hn(e)}}return Vt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&Hn(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(s(166));if(t=ut.current,yi(e)){if(t=e.stateNode,n=e.memoizedProps,r=null,l=Oe,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[ye]=e,t=!!(t.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||E0(t.nodeValue,n)),t||Pa(e)}else t=Ro(t).createTextNode(r),t[ye]=e,e.stateNode=t}return Vt(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=yi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[ye]=e}else vi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Vt(e),l=!1}else l=fh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(Bn(e),e):(Bn(e),null)}if(Bn(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=r!==null,t=t!==null&&t.memoizedState!==null,n){r=e.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool);var u=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==l&&(r.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),mo(e,e.updateQueue),Vt(e),null;case 4:return se(),t===null&&Mc(e.stateNode.containerInfo),Vt(e),null;case 10:return zn(e.type),Vt(e),null;case 19:if(F(le),l=e.memoizedState,l===null)return Vt(e),null;if(r=(e.flags&128)!==0,u=l.rendering,u===null)if(r)Bi(l,!1);else{if(Qt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=co(t),u!==null){for(e.flags|=128,Bi(l,!1),t=u.updateQueue,e.updateQueue=t,mo(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)oh(n,t),n=n.sibling;return et(le,le.current&1|2),e.child}t=t.sibling}l.tail!==null&&Te()>vo&&(e.flags|=128,r=!0,Bi(l,!1),e.lanes=4194304)}else{if(!r)if(t=co(u),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,mo(e,t),Bi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!Et)return Vt(e),null}else 2*Te()-l.renderingStartTime>vo&&n!==536870912&&(e.flags|=128,r=!0,Bi(l,!1),e.lanes=4194304);l.isBackwards?(u.sibling=e.child,e.child=u):(t=l.last,t!==null?t.sibling=u:e.child=u,l.last=u)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Te(),e.sibling=null,t=le.current,et(le,r?t&1|2:t&1),e):(Vt(e),null);case 22:case 23:return Bn(e),Du(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(n&536870912)!==0&&(e.flags&128)===0&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),n=e.updateQueue,n!==null&&mo(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==n&&(e.flags|=2048),t!==null&&F(Ha),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),zn(ie),Vt(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function $1(t,e){switch(yu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zn(ie),se(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return sn(e),null;case 13:if(Bn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));vi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return F(le),null;case 4:return se(),null;case 10:return zn(e.type),null;case 22:case 23:return Bn(e),Du(),t!==null&&F(Ha),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return zn(ie),null;case 25:return null;default:return null}}function Pp(t,e){switch(yu(e),e.tag){case 3:zn(ie),se();break;case 26:case 27:case 5:sn(e);break;case 4:se();break;case 13:Bn(e);break;case 19:F(le);break;case 10:zn(e.type);break;case 22:case 23:Bn(e),Du(),t!==null&&F(Ha);break;case 24:zn(ie)}}function Ni(t,e){try{var n=e.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var l=r.next;n=l;do{if((n.tag&t)===t){r=void 0;var u=n.create,p=n.inst;r=u(),p.destroy=r}n=n.next}while(n!==l)}}catch(m){Ht(e,e.return,m)}}function ia(t,e,n){try{var r=e.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var u=l.next;r=u;do{if((r.tag&t)===t){var p=r.inst,m=p.destroy;if(m!==void 0){p.destroy=void 0,l=e;var A=n,B=m;try{B()}catch(G){Ht(l,A,G)}}}r=r.next}while(r!==u)}}catch(G){Ht(e,e.return,G)}}function Bp(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{wh(e,n)}catch(r){Ht(t,t.return,r)}}}function Np(t,e,n){n.props=ja(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(r){Ht(t,e,r)}}function Hi(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof n=="function"?t.refCleanup=n(r):n.current=r}}catch(l){Ht(t,e,l)}}function bn(t,e){var n=t.ref,r=t.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(l){Ht(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Ht(t,e,l)}else n.current=null}function Hp(t){var e=t.type,n=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break t;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(l){Ht(t,t.return,l)}}function lc(t,e,n){try{var r=t.stateNode;oy(r,t.type,n,e),r[Ee]=e}catch(l){Ht(t,t.return,l)}}function Up(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ha(t.type)||t.tag===4}function oc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Up(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ha(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_o));else if(r!==4&&(r===27&&ha(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(sc(t,e,n),t=t.sibling;t!==null;)sc(t,e,n),t=t.sibling}function bo(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(r===27&&ha(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(bo(t,e,n),t=t.sibling;t!==null;)bo(t,e,n),t=t.sibling}function jp(t){var e=t.stateNode,n=t.memoizedProps;try{for(var r=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);me(e,r,n),e[ye]=t,e[Ee]=n}catch(u){Ht(t,t.return,u)}}var Un=!1,It=!1,uc=!1,$p=typeof WeakSet=="function"?WeakSet:Set,fe=null;function q1(t,e){if(t=t.containerInfo,zc=Bo,t=Wd(t),ou(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,u=r.focusNode;r=r.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break t}var p=0,m=-1,A=-1,B=0,G=0,Z=t,N=null;e:for(;;){for(var U;Z!==n||l!==0&&Z.nodeType!==3||(m=p+l),Z!==u||r!==0&&Z.nodeType!==3||(A=p+r),Z.nodeType===3&&(p+=Z.nodeValue.length),(U=Z.firstChild)!==null;)N=Z,Z=U;for(;;){if(Z===t)break e;if(N===n&&++B===l&&(m=p),N===u&&++G===r&&(A=p),(U=Z.nextSibling)!==null)break;Z=N,N=Z.parentNode}Z=U}n=m===-1||A===-1?null:{start:m,end:A}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pc={focusedElem:t,selectionRange:n},Bo=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){switch(e=fe,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,n=e,l=u.memoizedProps,u=u.memoizedState,r=n.stateNode;try{var dt=ja(n.type,l,n.elementType===n.type);t=r.getSnapshotBeforeUpdate(dt,u),r.__reactInternalSnapshotBeforeUpdate=t}catch(ct){Ht(n,n.return,ct)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Hc(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Hc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}}function qp(t,e,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:la(t,n),r&4&&Ni(5,n);break;case 1:if(la(t,n),r&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(p){Ht(n,n.return,p)}else{var l=ja(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(p){Ht(n,n.return,p)}}r&64&&Bp(n),r&512&&Hi(n,n.return);break;case 3:if(la(t,n),r&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{wh(t,e)}catch(p){Ht(n,n.return,p)}}break;case 27:e===null&&r&4&&jp(n);case 26:case 5:la(t,n),e===null&&r&4&&Hp(n),r&512&&Hi(n,n.return);break;case 12:la(t,n);break;case 13:la(t,n),r&4&&Yp(t,n),r&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=J1.bind(null,n),py(t,n))));break;case 22:if(r=n.memoizedState!==null||Un,!r){e=e!==null&&e.memoizedState!==null||It,l=Un;var u=It;Un=r,(It=e)&&!u?oa(t,n,(n.subtreeFlags&8772)!==0):la(t,n),Un=l,It=u}break;case 30:break;default:la(t,n)}}function Lp(t){var e=t.alternate;e!==null&&(t.alternate=null,Lp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ls(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Gt=null,Re=!1;function jn(t,e,n){for(n=n.child;n!==null;)Gp(t,e,n),n=n.sibling}function Gp(t,e,n){if(Pe&&typeof Pe.onCommitFiberUnmount=="function")try{Pe.onCommitFiberUnmount(ri,n)}catch{}switch(n.tag){case 26:It||bn(n,e),jn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:It||bn(n,e);var r=Gt,l=Re;ha(n.type)&&(Gt=n.stateNode,Re=!1),jn(t,e,n),Vi(n.stateNode),Gt=r,Re=l;break;case 5:It||bn(n,e);case 6:if(r=Gt,l=Re,Gt=null,jn(t,e,n),Gt=r,Re=l,Gt!==null)if(Re)try{(Gt.nodeType===9?Gt.body:Gt.nodeName==="HTML"?Gt.ownerDocument.body:Gt).removeChild(n.stateNode)}catch(u){Ht(n,e,u)}else try{Gt.removeChild(n.stateNode)}catch(u){Ht(n,e,u)}break;case 18:Gt!==null&&(Re?(t=Gt,k0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),tl(t)):k0(Gt,n.stateNode));break;case 4:r=Gt,l=Re,Gt=n.stateNode.containerInfo,Re=!0,jn(t,e,n),Gt=r,Re=l;break;case 0:case 11:case 14:case 15:It||ia(2,n,e),It||ia(4,n,e),jn(t,e,n);break;case 1:It||(bn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"&&Np(n,e,r)),jn(t,e,n);break;case 21:jn(t,e,n);break;case 22:It=(r=It)||n.memoizedState!==null,jn(t,e,n),It=r;break;default:jn(t,e,n)}}function Yp(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{tl(t)}catch(n){Ht(e,e.return,n)}}function L1(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new $p),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new $p),e;default:throw Error(s(435,t.tag))}}function cc(t,e){var n=L1(t);e.forEach(function(r){var l=W1.bind(null,t,r);n.has(r)||(n.add(r),r.then(l,l))})}function Ue(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r],u=t,p=e,m=p;t:for(;m!==null;){switch(m.tag){case 27:if(ha(m.type)){Gt=m.stateNode,Re=!1;break t}break;case 5:Gt=m.stateNode,Re=!1;break t;case 3:case 4:Gt=m.stateNode.containerInfo,Re=!0;break t}m=m.return}if(Gt===null)throw Error(s(160));Gp(u,p,l),Gt=null,Re=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Xp(e,t),e=e.sibling}var cn=null;function Xp(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ue(e,t),je(t),r&4&&(ia(3,t,t.return),Ni(3,t),ia(5,t,t.return));break;case 1:Ue(e,t),je(t),r&512&&(It||n===null||bn(n,n.return)),r&64&&Un&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var l=cn;if(Ue(e,t),je(t),r&512&&(It||n===null||bn(n,n.return)),r&4){var u=n!==null?n.memoizedState:null;if(r=t.memoizedState,n===null)if(r===null)if(t.stateNode===null){t:{r=t.type,n=t.memoizedProps,l=l.ownerDocument||l;e:switch(r){case"title":u=l.getElementsByTagName("title")[0],(!u||u[oi]||u[ye]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(r),l.head.insertBefore(u,l.querySelector("head > title"))),me(u,r,n),u[ye]=t,ue(u),r=u;break t;case"link":var p=j0("link","href",l).get(r+(n.href||""));if(p){for(var m=0;m<p.length;m++)if(u=p[m],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(m,1);break e}}u=l.createElement(r),me(u,r,n),l.head.appendChild(u);break;case"meta":if(p=j0("meta","content",l).get(r+(n.content||""))){for(m=0;m<p.length;m++)if(u=p[m],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(m,1);break e}}u=l.createElement(r),me(u,r,n),l.head.appendChild(u);break;default:throw Error(s(468,r))}u[ye]=t,ue(u),r=u}t.stateNode=r}else $0(l,t.type,t.stateNode);else t.stateNode=U0(l,r,t.memoizedProps);else u!==r?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,r===null?$0(l,t.type,t.stateNode):U0(l,r,t.memoizedProps)):r===null&&t.stateNode!==null&&lc(t,t.memoizedProps,n.memoizedProps)}break;case 27:Ue(e,t),je(t),r&512&&(It||n===null||bn(n,n.return)),n!==null&&r&4&&lc(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Ue(e,t),je(t),r&512&&(It||n===null||bn(n,n.return)),t.flags&32){l=t.stateNode;try{ir(l,"")}catch(U){Ht(t,t.return,U)}}r&4&&t.stateNode!=null&&(l=t.memoizedProps,lc(t,l,n!==null?n.memoizedProps:l)),r&1024&&(uc=!0);break;case 6:if(Ue(e,t),je(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,n=t.stateNode;try{n.nodeValue=r}catch(U){Ht(t,t.return,U)}}break;case 3:if(Do=null,l=cn,cn=Mo(e.containerInfo),Ue(e,t),cn=l,je(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{tl(e.containerInfo)}catch(U){Ht(t,t.return,U)}uc&&(uc=!1,Vp(t));break;case 4:r=cn,cn=Mo(t.stateNode.containerInfo),Ue(e,t),je(t),cn=r;break;case 12:Ue(e,t),je(t);break;case 13:Ue(e,t),je(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(mc=Te()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,cc(t,r)));break;case 22:l=t.memoizedState!==null;var A=n!==null&&n.memoizedState!==null,B=Un,G=It;if(Un=B||l,It=G||A,Ue(e,t),It=G,Un=B,je(t),r&8192)t:for(e=t.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(n===null||A||Un||It||$a(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){A=n=e;try{if(u=A.stateNode,l)p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{m=A.stateNode;var Z=A.memoizedProps.style,N=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;m.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(U){Ht(A,A.return,U)}}}else if(e.tag===6){if(n===null){A=e;try{A.stateNode.nodeValue=l?"":A.memoizedProps}catch(U){Ht(A,A.return,U)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=t.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,cc(t,n))));break;case 19:Ue(e,t),je(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,cc(t,r)));break;case 30:break;case 21:break;default:Ue(e,t),je(t)}}function je(t){var e=t.flags;if(e&2){try{for(var n,r=t.return;r!==null;){if(Up(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var l=n.stateNode,u=oc(t);bo(t,u,l);break;case 5:var p=n.stateNode;n.flags&32&&(ir(p,""),n.flags&=-33);var m=oc(t);bo(t,m,p);break;case 3:case 4:var A=n.stateNode.containerInfo,B=oc(t);sc(t,B,A);break;default:throw Error(s(161))}}catch(G){Ht(t,t.return,G)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Vp(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Vp(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function la(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)qp(t,e.alternate,e),e=e.sibling}function $a(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ia(4,e,e.return),$a(e);break;case 1:bn(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Np(e,e.return,n),$a(e);break;case 27:Vi(e.stateNode);case 26:case 5:bn(e,e.return),$a(e);break;case 22:e.memoizedState===null&&$a(e);break;case 30:$a(e);break;default:$a(e)}t=t.sibling}}function oa(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,l=t,u=e,p=u.flags;switch(u.tag){case 0:case 11:case 15:oa(l,u,n),Ni(4,u);break;case 1:if(oa(l,u,n),r=u,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(B){Ht(r,r.return,B)}if(r=u,l=r.updateQueue,l!==null){var m=r.stateNode;try{var A=l.shared.hiddenCallbacks;if(A!==null)for(l.shared.hiddenCallbacks=null,l=0;l<A.length;l++)Sh(A[l],m)}catch(B){Ht(r,r.return,B)}}n&&p&64&&Bp(u),Hi(u,u.return);break;case 27:jp(u);case 26:case 5:oa(l,u,n),n&&r===null&&p&4&&Hp(u),Hi(u,u.return);break;case 12:oa(l,u,n);break;case 13:oa(l,u,n),n&&p&4&&Yp(l,u);break;case 22:u.memoizedState===null&&oa(l,u,n),Hi(u,u.return);break;case 30:break;default:oa(l,u,n)}e=e.sibling}}function fc(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&wi(n))}function dc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&wi(t))}function yn(t,e,n,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zp(t,e,n,r),e=e.sibling}function Zp(t,e,n,r){var l=e.flags;switch(e.tag){case 0:case 11:case 15:yn(t,e,n,r),l&2048&&Ni(9,e);break;case 1:yn(t,e,n,r);break;case 3:yn(t,e,n,r),l&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&wi(t)));break;case 12:if(l&2048){yn(t,e,n,r),t=e.stateNode;try{var u=e.memoizedProps,p=u.id,m=u.onPostCommit;typeof m=="function"&&m(p,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(A){Ht(e,e.return,A)}}else yn(t,e,n,r);break;case 13:yn(t,e,n,r);break;case 23:break;case 22:u=e.stateNode,p=e.alternate,e.memoizedState!==null?u._visibility&2?yn(t,e,n,r):Ui(t,e):u._visibility&2?yn(t,e,n,r):(u._visibility|=2,Or(t,e,n,r,(e.subtreeFlags&10256)!==0)),l&2048&&fc(p,e);break;case 24:yn(t,e,n,r),l&2048&&dc(e.alternate,e);break;default:yn(t,e,n,r)}}function Or(t,e,n,r,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,p=e,m=n,A=r,B=p.flags;switch(p.tag){case 0:case 11:case 15:Or(u,p,m,A,l),Ni(8,p);break;case 23:break;case 22:var G=p.stateNode;p.memoizedState!==null?G._visibility&2?Or(u,p,m,A,l):Ui(u,p):(G._visibility|=2,Or(u,p,m,A,l)),l&&B&2048&&fc(p.alternate,p);break;case 24:Or(u,p,m,A,l),l&&B&2048&&dc(p.alternate,p);break;default:Or(u,p,m,A,l)}e=e.sibling}}function Ui(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,r=e,l=r.flags;switch(r.tag){case 22:Ui(n,r),l&2048&&fc(r.alternate,r);break;case 24:Ui(n,r),l&2048&&dc(r.alternate,r);break;default:Ui(n,r)}e=e.sibling}}var ji=8192;function Ar(t){if(t.subtreeFlags&ji)for(t=t.child;t!==null;)Qp(t),t=t.sibling}function Qp(t){switch(t.tag){case 26:Ar(t),t.flags&ji&&t.memoizedState!==null&&Cy(cn,t.memoizedState,t.memoizedProps);break;case 5:Ar(t);break;case 3:case 4:var e=cn;cn=Mo(t.stateNode.containerInfo),Ar(t),cn=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=ji,ji=16777216,Ar(t),ji=e):Ar(t));break;default:Ar(t)}}function Kp(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function $i(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var r=e[n];fe=r,Wp(r,t)}Kp(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jp(t),t=t.sibling}function Jp(t){switch(t.tag){case 0:case 11:case 15:$i(t),t.flags&2048&&ia(9,t,t.return);break;case 3:$i(t);break;case 12:$i(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,yo(t)):$i(t);break;default:$i(t)}}function yo(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var r=e[n];fe=r,Wp(r,t)}Kp(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ia(8,e,e.return),yo(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,yo(e));break;default:yo(e)}t=t.sibling}}function Wp(t,e){for(;fe!==null;){var n=fe;switch(n.tag){case 0:case 11:case 15:ia(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:wi(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,fe=r;else t:for(n=t;fe!==null;){r=fe;var l=r.sibling,u=r.return;if(Lp(r),r===n){fe=null;break t}if(l!==null){l.return=u,fe=l;break t}fe=u}}}var G1={getCacheForType:function(t){var e=ve(ie),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},Y1=typeof WeakMap=="function"?WeakMap:Map,kt=0,$t=null,xt=null,Tt=0,Dt=0,$e=null,sa=!1,Er=!1,hc=!1,$n=0,Qt=0,ua=0,qa=0,pc=0,en=0,Cr=0,qi=null,Me=null,gc=!1,mc=0,vo=1/0,xo=null,ca=null,ge=0,fa=null,_r=null,Rr=0,bc=0,yc=null,Ip=null,Li=0,vc=null;function qe(){if((kt&2)!==0&&Tt!==0)return Tt&-Tt;if(q.T!==null){var t=mr;return t!==0?t:Ec()}return pd()}function Fp(){en===0&&(en=(Tt&536870912)===0||Et?cd():536870912);var t=tn.current;return t!==null&&(t.flags|=32),en}function Le(t,e,n){(t===$t&&(Dt===2||Dt===9)||t.cancelPendingCommit!==null)&&(Mr(t,0),da(t,Tt,en,!1)),li(t,n),((kt&2)===0||t!==$t)&&(t===$t&&((kt&2)===0&&(qa|=n),Qt===4&&da(t,Tt,en,!1)),vn(t))}function t0(t,e,n){if((kt&6)!==0)throw Error(s(327));var r=!n&&(e&124)===0&&(e&t.expiredLanes)===0||ii(t,e),l=r?Z1(t,e):wc(t,e,!0),u=r;do{if(l===0){Er&&!r&&da(t,e,0,!1);break}else{if(n=t.current.alternate,u&&!X1(n)){l=wc(t,e,!1),u=!1;continue}if(l===2){if(u=e,t.errorRecoveryDisabledLanes&u)var p=0;else p=t.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){e=p;t:{var m=t;l=qi;var A=m.current.memoizedState.isDehydrated;if(A&&(Mr(m,p).flags|=256),p=wc(m,p,!1),p!==2){if(hc&&!A){m.errorRecoveryDisabledLanes|=u,qa|=u,l=4;break t}u=Me,Me=l,u!==null&&(Me===null?Me=u:Me.push.apply(Me,u))}l=p}if(u=!1,l!==2)continue}}if(l===1){Mr(t,0),da(t,e,0,!0);break}t:{switch(r=t,u=l,u){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:da(r,e,en,!sa);break t;case 2:Me=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(l=mc+300-Te(),10<l)){if(da(r,e,en,!sa),Ml(r,0,!0)!==0)break t;r.timeoutHandle=R0(e0.bind(null,r,n,Me,xo,gc,e,en,qa,Cr,sa,u,2,-0,0),l);break t}e0(r,n,Me,xo,gc,e,en,qa,Cr,sa,u,0,-0,0)}}break}while(!0);vn(t)}function e0(t,e,n,r,l,u,p,m,A,B,G,Z,N,U){if(t.timeoutHandle=-1,Z=e.subtreeFlags,(Z&8192||(Z&16785408)===16785408)&&(Ki={stylesheets:null,count:0,unsuspend:Ey},Qp(e),Z=_y(),Z!==null)){t.cancelPendingCommit=Z(s0.bind(null,t,e,u,n,r,l,p,m,A,G,1,N,U)),da(t,u,p,!B);return}s0(t,e,u,n,r,l,p,m,A)}function X1(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var l=n[r],u=l.getSnapshot;l=l.value;try{if(!Ne(u(),l))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function da(t,e,n,r){e&=~pc,e&=~qa,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var l=e;0<l;){var u=31-Be(l),p=1<<u;r[u]=-1,l&=~p}n!==0&&dd(t,n,e)}function So(){return(kt&6)===0?(Gi(0),!1):!0}function xc(){if(xt!==null){if(Dt===0)var t=xt.return;else t=xt,Dn=Ba=null,Hu(t),wr=null,zi=0,t=xt;for(;t!==null;)Pp(t.alternate,t),t=t.return;xt=null}}function Mr(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,uy(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),xc(),$t=t,xt=n=Rn(t.current,null),Tt=e,Dt=0,$e=null,sa=!1,Er=ii(t,e),hc=!1,Cr=en=pc=qa=ua=Qt=0,Me=qi=null,gc=!1,(e&8)!==0&&(e|=e&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=e;0<r;){var l=31-Be(r),u=1<<l;e|=t[l],r&=~u}return $n=e,Ll(),n}function n0(t,e){yt=null,q.H=oo,e===Oi||e===Wl?(e=vh(),Dt=3):e===mh?(e=vh(),Dt=4):Dt=e===xp?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,$e=e,xt===null&&(Qt=1,ho(t,Je(e,t.current)))}function a0(){var t=q.H;return q.H=oo,t===null?oo:t}function r0(){var t=q.A;return q.A=G1,t}function Sc(){Qt=4,sa||(Tt&4194048)!==Tt&&tn.current!==null||(Er=!0),(ua&134217727)===0&&(qa&134217727)===0||$t===null||da($t,Tt,en,!1)}function wc(t,e,n){var r=kt;kt|=2;var l=a0(),u=r0();($t!==t||Tt!==e)&&(xo=null,Mr(t,e)),e=!1;var p=Qt;t:do try{if(Dt!==0&&xt!==null){var m=xt,A=$e;switch(Dt){case 8:xc(),p=6;break t;case 3:case 2:case 9:case 6:tn.current===null&&(e=!0);var B=Dt;if(Dt=0,$e=null,kr(t,m,A,B),n&&Er){p=0;break t}break;default:B=Dt,Dt=0,$e=null,kr(t,m,A,B)}}V1(),p=Qt;break}catch(G){n0(t,G)}while(!0);return e&&t.shellSuspendCounter++,Dn=Ba=null,kt=r,q.H=l,q.A=u,xt===null&&($t=null,Tt=0,Ll()),p}function V1(){for(;xt!==null;)i0(xt)}function Z1(t,e){var n=kt;kt|=2;var r=a0(),l=r0();$t!==t||Tt!==e?(xo=null,vo=Te()+500,Mr(t,e)):Er=ii(t,e);t:do try{if(Dt!==0&&xt!==null){e=xt;var u=$e;e:switch(Dt){case 1:Dt=0,$e=null,kr(t,e,u,1);break;case 2:case 9:if(bh(u)){Dt=0,$e=null,l0(e);break}e=function(){Dt!==2&&Dt!==9||$t!==t||(Dt=7),vn(t)},u.then(e,e);break t;case 3:Dt=7;break t;case 4:Dt=5;break t;case 7:bh(u)?(Dt=0,$e=null,l0(e)):(Dt=0,$e=null,kr(t,e,u,7));break;case 5:var p=null;switch(xt.tag){case 26:p=xt.memoizedState;case 5:case 27:var m=xt;if(!p||q0(p)){Dt=0,$e=null;var A=m.sibling;if(A!==null)xt=A;else{var B=m.return;B!==null?(xt=B,wo(B)):xt=null}break e}}Dt=0,$e=null,kr(t,e,u,5);break;case 6:Dt=0,$e=null,kr(t,e,u,6);break;case 8:xc(),Qt=6;break t;default:throw Error(s(462))}}Q1();break}catch(G){n0(t,G)}while(!0);return Dn=Ba=null,q.H=r,q.A=l,kt=n,xt!==null?0:($t=null,Tt=0,Ll(),Qt)}function Q1(){for(;xt!==null&&!Ns();)i0(xt)}function i0(t){var e=Dp(t.alternate,t,$n);t.memoizedProps=t.pendingProps,e===null?wo(t):xt=e}function l0(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Ep(n,e,e.pendingProps,e.type,void 0,Tt);break;case 11:e=Ep(n,e,e.pendingProps,e.type.render,e.ref,Tt);break;case 5:Hu(e);default:Pp(n,e),e=xt=oh(e,$n),e=Dp(n,e,$n)}t.memoizedProps=t.pendingProps,e===null?wo(t):xt=e}function kr(t,e,n,r){Dn=Ba=null,Hu(e),wr=null,zi=0;var l=e.return;try{if(H1(t,l,e,n,Tt)){Qt=1,ho(t,Je(n,t.current)),xt=null;return}}catch(u){if(l!==null)throw xt=l,u;Qt=1,ho(t,Je(n,t.current)),xt=null;return}e.flags&32768?(Et||r===1?t=!0:Er||(Tt&536870912)!==0?t=!1:(sa=t=!0,(r===2||r===9||r===3||r===6)&&(r=tn.current,r!==null&&r.tag===13&&(r.flags|=16384))),o0(e,t)):wo(e)}function wo(t){var e=t;do{if((e.flags&32768)!==0){o0(e,sa);return}t=e.return;var n=j1(e.alternate,e,$n);if(n!==null){xt=n;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);Qt===0&&(Qt=5)}function o0(t,e){do{var n=$1(t.alternate,t);if(n!==null){n.flags&=32767,xt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){xt=t;return}xt=t=n}while(t!==null);Qt=6,xt=null}function s0(t,e,n,r,l,u,p,m,A){t.cancelPendingCommit=null;do To();while(ge!==0);if((kt&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(u=e.lanes|e.childLanes,u|=du,Eb(t,n,u,p,m,A),t===$t&&(xt=$t=null,Tt=0),_r=e,fa=t,Rr=n,bc=u,yc=l,Ip=r,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,I1(Wa,function(){return h0(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=q.T,q.T=null,l=I.p,I.p=2,p=kt,kt|=4;try{q1(t,e,n)}finally{kt=p,I.p=l,q.T=r}}ge=1,u0(),c0(),f0()}}function u0(){if(ge===1){ge=0;var t=fa,e=_r,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=q.T,q.T=null;var r=I.p;I.p=2;var l=kt;kt|=4;try{Xp(e,t);var u=Pc,p=Wd(t.containerInfo),m=u.focusedElem,A=u.selectionRange;if(p!==m&&m&&m.ownerDocument&&Jd(m.ownerDocument.documentElement,m)){if(A!==null&&ou(m)){var B=A.start,G=A.end;if(G===void 0&&(G=B),"selectionStart"in m)m.selectionStart=B,m.selectionEnd=Math.min(G,m.value.length);else{var Z=m.ownerDocument||document,N=Z&&Z.defaultView||window;if(N.getSelection){var U=N.getSelection(),dt=m.textContent.length,ct=Math.min(A.start,dt),Bt=A.end===void 0?ct:Math.min(A.end,dt);!U.extend&&ct>Bt&&(p=Bt,Bt=ct,ct=p);var D=Kd(m,ct),R=Kd(m,Bt);if(D&&R&&(U.rangeCount!==1||U.anchorNode!==D.node||U.anchorOffset!==D.offset||U.focusNode!==R.node||U.focusOffset!==R.offset)){var P=Z.createRange();P.setStart(D.node,D.offset),U.removeAllRanges(),ct>Bt?(U.addRange(P),U.extend(R.node,R.offset)):(P.setEnd(R.node,R.offset),U.addRange(P))}}}}for(Z=[],U=m;U=U.parentNode;)U.nodeType===1&&Z.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<Z.length;m++){var X=Z[m];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}Bo=!!zc,Pc=zc=null}finally{kt=l,I.p=r,q.T=n}}t.current=e,ge=2}}function c0(){if(ge===2){ge=0;var t=fa,e=_r,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=q.T,q.T=null;var r=I.p;I.p=2;var l=kt;kt|=4;try{qp(t,e.alternate,e)}finally{kt=l,I.p=r,q.T=n}}ge=3}}function f0(){if(ge===4||ge===3){ge=0,Hs();var t=fa,e=_r,n=Rr,r=Ip;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ge=5:(ge=0,_r=fa=null,d0(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(ca=null),$s(n),e=e.stateNode,Pe&&typeof Pe.onCommitFiberRoot=="function")try{Pe.onCommitFiberRoot(ri,e,void 0,(e.current.flags&128)===128)}catch{}if(r!==null){e=q.T,l=I.p,I.p=2,q.T=null;try{for(var u=t.onRecoverableError,p=0;p<r.length;p++){var m=r[p];u(m.value,{componentStack:m.stack})}}finally{q.T=e,I.p=l}}(Rr&3)!==0&&To(),vn(t),l=t.pendingLanes,(n&4194090)!==0&&(l&42)!==0?t===vc?Li++:(Li=0,vc=t):Li=0,Gi(0)}}function d0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,wi(e)))}function To(t){return u0(),c0(),f0(),h0()}function h0(){if(ge!==5)return!1;var t=fa,e=bc;bc=0;var n=$s(Rr),r=q.T,l=I.p;try{I.p=32>n?32:n,q.T=null,n=yc,yc=null;var u=fa,p=Rr;if(ge=0,_r=fa=null,Rr=0,(kt&6)!==0)throw Error(s(331));var m=kt;if(kt|=4,Jp(u.current),Zp(u,u.current,p,n),kt=m,Gi(0,!1),Pe&&typeof Pe.onPostCommitFiberRoot=="function")try{Pe.onPostCommitFiberRoot(ri,u)}catch{}return!0}finally{I.p=l,q.T=r,d0(t,e)}}function p0(t,e,n){e=Je(n,e),e=Wu(t.stateNode,e,2),t=ea(t,e,2),t!==null&&(li(t,2),vn(t))}function Ht(t,e,n){if(t.tag===3)p0(t,t,n);else for(;e!==null;){if(e.tag===3){p0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ca===null||!ca.has(r))){t=Je(n,t),n=yp(2),r=ea(e,n,2),r!==null&&(vp(n,r,e,t),li(r,2),vn(r));break}}e=e.return}}function Tc(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Y1;var l=new Set;r.set(e,l)}else l=r.get(e),l===void 0&&(l=new Set,r.set(e,l));l.has(n)||(hc=!0,l.add(n),t=K1.bind(null,t,e,n),e.then(t,t))}function K1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,$t===t&&(Tt&n)===n&&(Qt===4||Qt===3&&(Tt&62914560)===Tt&&300>Te()-mc?(kt&2)===0&&Mr(t,0):pc|=n,Cr===Tt&&(Cr=0)),vn(t)}function g0(t,e){e===0&&(e=fd()),t=dr(t,e),t!==null&&(li(t,e),vn(t))}function J1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),g0(t,n)}function W1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(e),g0(t,n)}function I1(t,e){return ni(t,e)}var Oo=null,Dr=null,Oc=!1,Ao=!1,Ac=!1,La=0;function vn(t){t!==Dr&&t.next===null&&(Dr===null?Oo=Dr=t:Dr=Dr.next=t),Ao=!0,Oc||(Oc=!0,ty())}function Gi(t,e){if(!Ac&&Ao){Ac=!0;do for(var n=!1,r=Oo;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var u=0;else{var p=r.suspendedLanes,m=r.pingedLanes;u=(1<<31-Be(42|t)+1)-1,u&=l&~(p&~m),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,v0(r,u))}else u=Tt,u=Ml(r,r===$t?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||ii(r,u)||(n=!0,v0(r,u));r=r.next}while(n);Ac=!1}}function F1(){m0()}function m0(){Ao=Oc=!1;var t=0;La!==0&&(sy()&&(t=La),La=0);for(var e=Te(),n=null,r=Oo;r!==null;){var l=r.next,u=b0(r,e);u===0?(r.next=null,n===null?Oo=l:n.next=l,l===null&&(Dr=n)):(n=r,(t!==0||(u&3)!==0)&&(Ao=!0)),r=l}Gi(t)}function b0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var p=31-Be(u),m=1<<p,A=l[p];A===-1?((m&n)===0||(m&r)!==0)&&(l[p]=Ab(m,e)):A<=e&&(t.expiredLanes|=m),u&=~m}if(e=$t,n=Tt,n=Ml(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,n===0||t===e&&(Dt===2||Dt===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Ta(r),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||ii(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(r!==null&&Ta(r),$s(n)){case 2:case 8:n=ai;break;case 32:n=Wa;break;case 268435456:n=ud;break;default:n=Wa}return r=y0.bind(null,t),n=ni(n,r),t.callbackPriority=e,t.callbackNode=n,e}return r!==null&&r!==null&&Ta(r),t.callbackPriority=2,t.callbackNode=null,2}function y0(t,e){if(ge!==0&&ge!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(To()&&t.callbackNode!==n)return null;var r=Tt;return r=Ml(t,t===$t?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(t0(t,r,e),b0(t,Te()),t.callbackNode!=null&&t.callbackNode===n?y0.bind(null,t):null)}function v0(t,e){if(To())return null;t0(t,e,!0)}function ty(){cy(function(){(kt&6)!==0?ni(Cl,F1):m0()})}function Ec(){return La===0&&(La=cd()),La}function x0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Bl(""+t)}function S0(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function ey(t,e,n,r,l){if(e==="submit"&&n&&n.stateNode===l){var u=x0((l[Ee]||null).action),p=r.submitter;p&&(e=(e=p[Ee]||null)?x0(e.formAction):p.getAttribute("formAction"),e!==null&&(u=e,p=null));var m=new jl("action","action",null,r,l);t.push({event:m,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(La!==0){var A=p?S0(l,p):new FormData(l);Vu(n,{pending:!0,data:A,method:l.method,action:u},null,A)}}else typeof u=="function"&&(m.preventDefault(),A=p?S0(l,p):new FormData(l),Vu(n,{pending:!0,data:A,method:l.method,action:u},u,A))},currentTarget:l}]})}}for(var Cc=0;Cc<fu.length;Cc++){var _c=fu[Cc],ny=_c.toLowerCase(),ay=_c[0].toUpperCase()+_c.slice(1);un(ny,"on"+ay)}un(th,"onAnimationEnd"),un(eh,"onAnimationIteration"),un(nh,"onAnimationStart"),un("dblclick","onDoubleClick"),un("focusin","onFocus"),un("focusout","onBlur"),un(x1,"onTransitionRun"),un(S1,"onTransitionStart"),un(w1,"onTransitionCancel"),un(ah,"onTransitionEnd"),nr("onMouseEnter",["mouseout","mouseover"]),nr("onMouseLeave",["mouseout","mouseover"]),nr("onPointerEnter",["pointerout","pointerover"]),nr("onPointerLeave",["pointerout","pointerover"]),Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ry=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yi));function w0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],l=r.event;r=r.listeners;t:{var u=void 0;if(e)for(var p=r.length-1;0<=p;p--){var m=r[p],A=m.instance,B=m.currentTarget;if(m=m.listener,A!==u&&l.isPropagationStopped())break t;u=m,l.currentTarget=B;try{u(l)}catch(G){fo(G)}l.currentTarget=null,u=A}else for(p=0;p<r.length;p++){if(m=r[p],A=m.instance,B=m.currentTarget,m=m.listener,A!==u&&l.isPropagationStopped())break t;u=m,l.currentTarget=B;try{u(l)}catch(G){fo(G)}l.currentTarget=null,u=A}}}}function St(t,e){var n=e[qs];n===void 0&&(n=e[qs]=new Set);var r=t+"__bubble";n.has(r)||(T0(e,t,2,!1),n.add(r))}function Rc(t,e,n){var r=0;e&&(r|=4),T0(n,t,r,e)}var Eo="_reactListening"+Math.random().toString(36).slice(2);function Mc(t){if(!t[Eo]){t[Eo]=!0,md.forEach(function(n){n!=="selectionchange"&&(ry.has(n)||Rc(n,!1,t),Rc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Eo]||(e[Eo]=!0,Rc("selectionchange",!1,e))}}function T0(t,e,n,r){switch(Z0(e)){case 2:var l=ky;break;case 8:l=Dy;break;default:l=Yc}n=l.bind(null,e,n,t),l=void 0,!Is||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(e,n,{capture:!0,passive:l}):t.addEventListener(e,n,!0):l!==void 0?t.addEventListener(e,n,{passive:l}):t.addEventListener(e,n,!1)}function kc(t,e,n,r,l){var u=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var p=r.tag;if(p===3||p===4){var m=r.stateNode.containerInfo;if(m===l)break;if(p===4)for(p=r.return;p!==null;){var A=p.tag;if((A===3||A===4)&&p.stateNode.containerInfo===l)return;p=p.return}for(;m!==null;){if(p=Fa(m),p===null)return;if(A=p.tag,A===5||A===6||A===26||A===27){r=u=p;continue t}m=m.parentNode}}r=r.return}Md(function(){var B=u,G=Js(n),Z=[];t:{var N=rh.get(t);if(N!==void 0){var U=jl,dt=t;switch(t){case"keypress":if(Hl(n)===0)break t;case"keydown":case"keyup":U=Ib;break;case"focusin":dt="focus",U=nu;break;case"focusout":dt="blur",U=nu;break;case"beforeblur":case"afterblur":U=nu;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=$b;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=e1;break;case th:case eh:case nh:U=Gb;break;case ah:U=a1;break;case"scroll":case"scrollend":U=Ub;break;case"wheel":U=i1;break;case"copy":case"cut":case"paste":U=Xb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=Bd;break;case"toggle":case"beforetoggle":U=o1}var ct=(e&4)!==0,Bt=!ct&&(t==="scroll"||t==="scrollend"),D=ct?N!==null?N+"Capture":null:N;ct=[];for(var R=B,P;R!==null;){var X=R;if(P=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||P===null||D===null||(X=ui(R,D),X!=null&&ct.push(Xi(R,X,P))),Bt)break;R=R.return}0<ct.length&&(N=new U(N,dt,null,n,G),Z.push({event:N,listeners:ct}))}}if((e&7)===0){t:{if(N=t==="mouseover"||t==="pointerover",U=t==="mouseout"||t==="pointerout",N&&n!==Ks&&(dt=n.relatedTarget||n.fromElement)&&(Fa(dt)||dt[Ia]))break t;if((U||N)&&(N=G.window===G?G:(N=G.ownerDocument)?N.defaultView||N.parentWindow:window,U?(dt=n.relatedTarget||n.toElement,U=B,dt=dt?Fa(dt):null,dt!==null&&(Bt=d(dt),ct=dt.tag,dt!==Bt||ct!==5&&ct!==27&&ct!==6)&&(dt=null)):(U=null,dt=B),U!==dt)){if(ct=zd,X="onMouseLeave",D="onMouseEnter",R="mouse",(t==="pointerout"||t==="pointerover")&&(ct=Bd,X="onPointerLeave",D="onPointerEnter",R="pointer"),Bt=U==null?N:si(U),P=dt==null?N:si(dt),N=new ct(X,R+"leave",U,n,G),N.target=Bt,N.relatedTarget=P,X=null,Fa(G)===B&&(ct=new ct(D,R+"enter",dt,n,G),ct.target=P,ct.relatedTarget=Bt,X=ct),Bt=X,U&&dt)e:{for(ct=U,D=dt,R=0,P=ct;P;P=zr(P))R++;for(P=0,X=D;X;X=zr(X))P++;for(;0<R-P;)ct=zr(ct),R--;for(;0<P-R;)D=zr(D),P--;for(;R--;){if(ct===D||D!==null&&ct===D.alternate)break e;ct=zr(ct),D=zr(D)}ct=null}else ct=null;U!==null&&O0(Z,N,U,ct,!1),dt!==null&&Bt!==null&&O0(Z,Bt,dt,ct,!0)}}t:{if(N=B?si(B):window,U=N.nodeName&&N.nodeName.toLowerCase(),U==="select"||U==="input"&&N.type==="file")var at=Gd;else if(qd(N))if(Yd)at=b1;else{at=g1;var vt=p1}else U=N.nodeName,!U||U.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?B&&Qs(B.elementType)&&(at=Gd):at=m1;if(at&&(at=at(t,B))){Ld(Z,at,n,G);break t}vt&&vt(t,N,B),t==="focusout"&&B&&N.type==="number"&&B.memoizedProps.value!=null&&Zs(N,"number",N.value)}switch(vt=B?si(B):window,t){case"focusin":(qd(vt)||vt.contentEditable==="true")&&(ur=vt,su=B,bi=null);break;case"focusout":bi=su=ur=null;break;case"mousedown":uu=!0;break;case"contextmenu":case"mouseup":case"dragend":uu=!1,Id(Z,n,G);break;case"selectionchange":if(v1)break;case"keydown":case"keyup":Id(Z,n,G)}var lt;if(ru)t:{switch(t){case"compositionstart":var ft="onCompositionStart";break t;case"compositionend":ft="onCompositionEnd";break t;case"compositionupdate":ft="onCompositionUpdate";break t}ft=void 0}else sr?jd(t,n)&&(ft="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(ft="onCompositionStart");ft&&(Nd&&n.locale!=="ko"&&(sr||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&sr&&(lt=kd()):(Wn=G,Fs="value"in Wn?Wn.value:Wn.textContent,sr=!0)),vt=Co(B,ft),0<vt.length&&(ft=new Pd(ft,t,null,n,G),Z.push({event:ft,listeners:vt}),lt?ft.data=lt:(lt=$d(n),lt!==null&&(ft.data=lt)))),(lt=u1?c1(t,n):f1(t,n))&&(ft=Co(B,"onBeforeInput"),0<ft.length&&(vt=new Pd("onBeforeInput","beforeinput",null,n,G),Z.push({event:vt,listeners:ft}),vt.data=lt)),ey(Z,t,B,n,G)}w0(Z,e)})}function Xi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Co(t,e){for(var n=e+"Capture",r=[];t!==null;){var l=t,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=ui(t,n),l!=null&&r.unshift(Xi(t,l,u)),l=ui(t,e),l!=null&&r.push(Xi(t,l,u))),t.tag===3)return r;t=t.return}return[]}function zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function O0(t,e,n,r,l){for(var u=e._reactName,p=[];n!==null&&n!==r;){var m=n,A=m.alternate,B=m.stateNode;if(m=m.tag,A!==null&&A===r)break;m!==5&&m!==26&&m!==27||B===null||(A=B,l?(B=ui(n,u),B!=null&&p.unshift(Xi(n,B,A))):l||(B=ui(n,u),B!=null&&p.push(Xi(n,B,A)))),n=n.return}p.length!==0&&t.push({event:e,listeners:p})}var iy=/\r\n?/g,ly=/\u0000|\uFFFD/g;function A0(t){return(typeof t=="string"?t:""+t).replace(iy,`
`).replace(ly,"")}function E0(t,e){return e=A0(e),A0(t)===e}function _o(){}function Pt(t,e,n,r,l,u){switch(n){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||ir(t,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&ir(t,""+r);break;case"className":Dl(t,"class",r);break;case"tabIndex":Dl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Dl(t,n,r);break;case"style":_d(t,r,u);break;case"data":if(e!=="object"){Dl(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(n);break}r=Bl(""+r),t.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(e!=="input"&&Pt(t,e,"name",l.name,l,null),Pt(t,e,"formEncType",l.formEncType,l,null),Pt(t,e,"formMethod",l.formMethod,l,null),Pt(t,e,"formTarget",l.formTarget,l,null)):(Pt(t,e,"encType",l.encType,l,null),Pt(t,e,"method",l.method,l,null),Pt(t,e,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(n);break}r=Bl(""+r),t.setAttribute(n,r);break;case"onClick":r!=null&&(t.onclick=_o);break;case"onScroll":r!=null&&St("scroll",t);break;case"onScrollEnd":r!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(l.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}n=Bl(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,""+r):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":r===!0?t.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,r):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(n,r):t.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(n):t.setAttribute(n,r);break;case"popover":St("beforetoggle",t),St("toggle",t),kl(t,"popover",r);break;case"xlinkActuate":Cn(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Cn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Cn(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Cn(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Cn(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Cn(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Cn(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Cn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Cn(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":kl(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Nb.get(n)||n,kl(t,n,r))}}function Dc(t,e,n,r,l,u){switch(n){case"style":_d(t,r,u);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(l.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"children":typeof r=="string"?ir(t,r):(typeof r=="number"||typeof r=="bigint")&&ir(t,""+r);break;case"onScroll":r!=null&&St("scroll",t);break;case"onScrollEnd":r!=null&&St("scrollend",t);break;case"onClick":r!=null&&(t.onclick=_o);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!bd.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),e=n.slice(2,l?n.length-7:void 0),u=t[Ee]||null,u=u!=null?u[n]:null,typeof u=="function"&&t.removeEventListener(e,u,l),typeof r=="function")){typeof u!="function"&&u!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,r,l);break t}n in t?t[n]=r:r===!0?t.setAttribute(n,""):kl(t,n,r)}}}function me(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var r=!1,l=!1,u;for(u in n)if(n.hasOwnProperty(u)){var p=n[u];if(p!=null)switch(u){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Pt(t,e,u,p,n,null)}}l&&Pt(t,e,"srcSet",n.srcSet,n,null),r&&Pt(t,e,"src",n.src,n,null);return;case"input":St("invalid",t);var m=u=p=l=null,A=null,B=null;for(r in n)if(n.hasOwnProperty(r)){var G=n[r];if(G!=null)switch(r){case"name":l=G;break;case"type":p=G;break;case"checked":A=G;break;case"defaultChecked":B=G;break;case"value":u=G;break;case"defaultValue":m=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,e));break;default:Pt(t,e,r,G,n,null)}}Od(t,u,m,A,B,p,l,!1),zl(t);return;case"select":St("invalid",t),r=p=u=null;for(l in n)if(n.hasOwnProperty(l)&&(m=n[l],m!=null))switch(l){case"value":u=m;break;case"defaultValue":p=m;break;case"multiple":r=m;default:Pt(t,e,l,m,n,null)}e=u,n=p,t.multiple=!!r,e!=null?rr(t,!!r,e,!1):n!=null&&rr(t,!!r,n,!0);return;case"textarea":St("invalid",t),u=l=r=null;for(p in n)if(n.hasOwnProperty(p)&&(m=n[p],m!=null))switch(p){case"value":r=m;break;case"defaultValue":l=m;break;case"children":u=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(s(91));break;default:Pt(t,e,p,m,n,null)}Ed(t,r,l,u),zl(t);return;case"option":for(A in n)if(n.hasOwnProperty(A)&&(r=n[A],r!=null))switch(A){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Pt(t,e,A,r,n,null)}return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(r=0;r<Yi.length;r++)St(Yi[r],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in n)if(n.hasOwnProperty(B)&&(r=n[B],r!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Pt(t,e,B,r,n,null)}return;default:if(Qs(e)){for(G in n)n.hasOwnProperty(G)&&(r=n[G],r!==void 0&&Dc(t,e,G,r,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(r=n[m],r!=null&&Pt(t,e,m,r,n,null))}function oy(t,e,n,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,p=null,m=null,A=null,B=null,G=null;for(U in n){var Z=n[U];if(n.hasOwnProperty(U)&&Z!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":A=Z;default:r.hasOwnProperty(U)||Pt(t,e,U,null,r,Z)}}for(var N in r){var U=r[N];if(Z=n[N],r.hasOwnProperty(N)&&(U!=null||Z!=null))switch(N){case"type":u=U;break;case"name":l=U;break;case"checked":B=U;break;case"defaultChecked":G=U;break;case"value":p=U;break;case"defaultValue":m=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(137,e));break;default:U!==Z&&Pt(t,e,N,U,r,Z)}}Vs(t,p,m,A,B,G,u,l);return;case"select":U=p=m=N=null;for(u in n)if(A=n[u],n.hasOwnProperty(u)&&A!=null)switch(u){case"value":break;case"multiple":U=A;default:r.hasOwnProperty(u)||Pt(t,e,u,null,r,A)}for(l in r)if(u=r[l],A=n[l],r.hasOwnProperty(l)&&(u!=null||A!=null))switch(l){case"value":N=u;break;case"defaultValue":m=u;break;case"multiple":p=u;default:u!==A&&Pt(t,e,l,u,r,A)}e=m,n=p,r=U,N!=null?rr(t,!!n,N,!1):!!r!=!!n&&(e!=null?rr(t,!!n,e,!0):rr(t,!!n,n?[]:"",!1));return;case"textarea":U=N=null;for(m in n)if(l=n[m],n.hasOwnProperty(m)&&l!=null&&!r.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Pt(t,e,m,null,r,l)}for(p in r)if(l=r[p],u=n[p],r.hasOwnProperty(p)&&(l!=null||u!=null))switch(p){case"value":N=l;break;case"defaultValue":U=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==u&&Pt(t,e,p,l,r,u)}Ad(t,N,U);return;case"option":for(var dt in n)if(N=n[dt],n.hasOwnProperty(dt)&&N!=null&&!r.hasOwnProperty(dt))switch(dt){case"selected":t.selected=!1;break;default:Pt(t,e,dt,null,r,N)}for(A in r)if(N=r[A],U=n[A],r.hasOwnProperty(A)&&N!==U&&(N!=null||U!=null))switch(A){case"selected":t.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:Pt(t,e,A,N,r,U)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in n)N=n[ct],n.hasOwnProperty(ct)&&N!=null&&!r.hasOwnProperty(ct)&&Pt(t,e,ct,null,r,N);for(B in r)if(N=r[B],U=n[B],r.hasOwnProperty(B)&&N!==U&&(N!=null||U!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,e));break;default:Pt(t,e,B,N,r,U)}return;default:if(Qs(e)){for(var Bt in n)N=n[Bt],n.hasOwnProperty(Bt)&&N!==void 0&&!r.hasOwnProperty(Bt)&&Dc(t,e,Bt,void 0,r,N);for(G in r)N=r[G],U=n[G],!r.hasOwnProperty(G)||N===U||N===void 0&&U===void 0||Dc(t,e,G,N,r,U);return}}for(var D in n)N=n[D],n.hasOwnProperty(D)&&N!=null&&!r.hasOwnProperty(D)&&Pt(t,e,D,null,r,N);for(Z in r)N=r[Z],U=n[Z],!r.hasOwnProperty(Z)||N===U||N==null&&U==null||Pt(t,e,Z,N,r,U)}var zc=null,Pc=null;function Ro(t){return t.nodeType===9?t:t.ownerDocument}function C0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Bc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nc=null;function sy(){var t=window.event;return t&&t.type==="popstate"?t===Nc?!1:(Nc=t,!0):(Nc=null,!1)}var R0=typeof setTimeout=="function"?setTimeout:void 0,uy=typeof clearTimeout=="function"?clearTimeout:void 0,M0=typeof Promise=="function"?Promise:void 0,cy=typeof queueMicrotask=="function"?queueMicrotask:typeof M0<"u"?function(t){return M0.resolve(null).then(t).catch(fy)}:R0;function fy(t){setTimeout(function(){throw t})}function ha(t){return t==="head"}function k0(t,e){var n=e,r=0,l=0;do{var u=n.nextSibling;if(t.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(0<r&&8>r){n=r;var p=t.ownerDocument;if(n&1&&Vi(p.documentElement),n&2&&Vi(p.body),n&4)for(n=p.head,Vi(n),p=n.firstChild;p;){var m=p.nextSibling,A=p.nodeName;p[oi]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&p.rel.toLowerCase()==="stylesheet"||n.removeChild(p),p=m}}if(l===0){t.removeChild(u),tl(e);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:r=n.charCodeAt(0)-48;else r=0;n=u}while(n);tl(e)}function Hc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Hc(n),Ls(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function dy(t,e,n,r){for(;t.nodeType===1;){var l=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[oi])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=fn(t.nextSibling),t===null)break}return null}function hy(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=fn(t.nextSibling),t===null))return null;return t}function Uc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function py(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var r=function(){e(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function fn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var jc=null;function D0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function z0(t,e,n){switch(e=Ro(n),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Vi(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ls(t)}var nn=new Map,P0=new Set;function Mo(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var qn=I.d;I.d={f:gy,r:my,D:by,C:yy,L:vy,m:xy,X:wy,S:Sy,M:Ty};function gy(){var t=qn.f(),e=So();return t||e}function my(t){var e=tr(t);e!==null&&e.tag===5&&e.type==="form"?tp(e):qn.r(t)}var Pr=typeof document>"u"?null:document;function B0(t,e,n){var r=Pr;if(r&&typeof e=="string"&&e){var l=Ke(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),P0.has(l)||(P0.add(l),t={rel:t,crossOrigin:n,href:e},r.querySelector(l)===null&&(e=r.createElement("link"),me(e,"link",t),ue(e),r.head.appendChild(e)))}}function by(t){qn.D(t),B0("dns-prefetch",t,null)}function yy(t,e){qn.C(t,e),B0("preconnect",t,e)}function vy(t,e,n){qn.L(t,e,n);var r=Pr;if(r&&t&&e){var l='link[rel="preload"][as="'+Ke(e)+'"]';e==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Ke(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Ke(n.imageSizes)+'"]')):l+='[href="'+Ke(t)+'"]';var u=l;switch(e){case"style":u=Br(t);break;case"script":u=Nr(t)}nn.has(u)||(t=O({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),nn.set(u,t),r.querySelector(l)!==null||e==="style"&&r.querySelector(Zi(u))||e==="script"&&r.querySelector(Qi(u))||(e=r.createElement("link"),me(e,"link",t),ue(e),r.head.appendChild(e)))}}function xy(t,e){qn.m(t,e);var n=Pr;if(n&&t){var r=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+Ke(r)+'"][href="'+Ke(t)+'"]',u=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Nr(t)}if(!nn.has(u)&&(t=O({rel:"modulepreload",href:t},e),nn.set(u,t),n.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Qi(u)))return}r=n.createElement("link"),me(r,"link",t),ue(r),n.head.appendChild(r)}}}function Sy(t,e,n){qn.S(t,e,n);var r=Pr;if(r&&t){var l=er(r).hoistableStyles,u=Br(t);e=e||"default";var p=l.get(u);if(!p){var m={loading:0,preload:null};if(p=r.querySelector(Zi(u)))m.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":e},n),(n=nn.get(u))&&$c(t,n);var A=p=r.createElement("link");ue(A),me(A,"link",t),A._p=new Promise(function(B,G){A.onload=B,A.onerror=G}),A.addEventListener("load",function(){m.loading|=1}),A.addEventListener("error",function(){m.loading|=2}),m.loading|=4,ko(p,e,r)}p={type:"stylesheet",instance:p,count:1,state:m},l.set(u,p)}}}function wy(t,e){qn.X(t,e);var n=Pr;if(n&&t){var r=er(n).hoistableScripts,l=Nr(t),u=r.get(l);u||(u=n.querySelector(Qi(l)),u||(t=O({src:t,async:!0},e),(e=nn.get(l))&&qc(t,e),u=n.createElement("script"),ue(u),me(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function Ty(t,e){qn.M(t,e);var n=Pr;if(n&&t){var r=er(n).hoistableScripts,l=Nr(t),u=r.get(l);u||(u=n.querySelector(Qi(l)),u||(t=O({src:t,async:!0,type:"module"},e),(e=nn.get(l))&&qc(t,e),u=n.createElement("script"),ue(u),me(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function N0(t,e,n,r){var l=(l=ut.current)?Mo(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Br(n.href),n=er(l).hoistableStyles,r=n.get(e),r||(r={type:"style",instance:null,count:0,state:null},n.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Br(n.href);var u=er(l).hoistableStyles,p=u.get(t);if(p||(l=l.ownerDocument||l,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,p),(u=l.querySelector(Zi(t)))&&!u._p&&(p.instance=u,p.state.loading=5),nn.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},nn.set(t,n),u||Oy(l,t,n,p.state))),e&&r===null)throw Error(s(528,""));return p}if(e&&r!==null)throw Error(s(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Nr(n),n=er(l).hoistableScripts,r=n.get(e),r||(r={type:"script",instance:null,count:0,state:null},n.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Br(t){return'href="'+Ke(t)+'"'}function Zi(t){return'link[rel="stylesheet"]['+t+"]"}function H0(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function Oy(t,e,n,r){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=t.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),me(e,"link",n),ue(e),t.head.appendChild(e))}function Nr(t){return'[src="'+Ke(t)+'"]'}function Qi(t){return"script[async]"+t}function U0(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+Ke(n.href)+'"]');if(r)return e.instance=r,ue(r),r;var l=O({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),ue(r),me(r,"style",l),ko(r,n.precedence,t),e.instance=r;case"stylesheet":l=Br(n.href);var u=t.querySelector(Zi(l));if(u)return e.state.loading|=4,e.instance=u,ue(u),u;r=H0(n),(l=nn.get(l))&&$c(r,l),u=(t.ownerDocument||t).createElement("link"),ue(u);var p=u;return p._p=new Promise(function(m,A){p.onload=m,p.onerror=A}),me(u,"link",r),e.state.loading|=4,ko(u,n.precedence,t),e.instance=u;case"script":return u=Nr(n.src),(l=t.querySelector(Qi(u)))?(e.instance=l,ue(l),l):(r=n,(l=nn.get(u))&&(r=O({},n),qc(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),ue(l),me(l,"link",r),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,ko(r,n.precedence,t));return e.instance}function ko(t,e,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,u=l,p=0;p<r.length;p++){var m=r[p];if(m.dataset.precedence===e)u=m;else if(u!==l)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function $c(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function qc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Do=null;function j0(t,e,n){if(Do===null){var r=new Map,l=Do=new Map;l.set(n,r)}else l=Do,r=l.get(n),r||(r=new Map,l.set(n,r));if(r.has(t))return r;for(r.set(t,null),n=n.getElementsByTagName(t),l=0;l<n.length;l++){var u=n[l];if(!(u[oi]||u[ye]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var p=u.getAttribute(e)||"";p=t+p;var m=r.get(p);m?m.push(u):r.set(p,[u])}}return r}function $0(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function Ay(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function q0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ki=null;function Ey(){}function Cy(t,e,n){if(Ki===null)throw Error(s(475));var r=Ki;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var l=Br(n.href),u=t.querySelector(Zi(l));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(r.count++,r=zo.bind(r),t.then(r,r)),e.state.loading|=4,e.instance=u,ue(u);return}u=t.ownerDocument||t,n=H0(n),(l=nn.get(l))&&$c(n,l),u=u.createElement("link"),ue(u);var p=u;p._p=new Promise(function(m,A){p.onload=m,p.onerror=A}),me(u,"link",n),e.instance=u}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(r.count++,e=zo.bind(r),t.addEventListener("load",e),t.addEventListener("error",e))}}function _y(){if(Ki===null)throw Error(s(475));var t=Ki;return t.stylesheets&&t.count===0&&Lc(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&Lc(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function zo(){if(this.count--,this.count===0){if(this.stylesheets)Lc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Po=null;function Lc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Po=new Map,e.forEach(Ry,t),Po=null,zo.call(t))}function Ry(t,e){if(!(e.state.loading&4)){var n=Po.get(t);if(n)var r=n.get(null);else{n=new Map,Po.set(t,n);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var p=l[u];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),r=p)}r&&n.set(null,r)}l=e.instance,p=l.getAttribute("data-precedence"),u=n.get(p)||r,u===r&&n.set(null,l),n.set(p,l),this.count++,r=zo.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),u?u.parentNode.insertBefore(l,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var Ji={$$typeof:_,Provider:null,Consumer:null,_currentValue:rt,_currentValue2:rt,_threadCount:0};function My(t,e,n,r,l,u,p,m){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Us(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Us(0),this.hiddenUpdates=Us(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function L0(t,e,n,r,l,u,p,m,A,B,G,Z){return t=new My(t,e,n,p,m,A,B,Z),e=1,u===!0&&(e|=24),u=He(3,null,null,e),t.current=u,u.stateNode=t,e=Tu(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:r,isDehydrated:n,cache:e},Cu(u),t}function G0(t){return t?(t=hr,t):hr}function Y0(t,e,n,r,l,u){l=G0(l),r.context===null?r.context=l:r.pendingContext=l,r=ta(e),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=ea(t,r,e),n!==null&&(Le(n,t,e),Ei(n,t,e))}function X0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gc(t,e){X0(t,e),(t=t.alternate)&&X0(t,e)}function V0(t){if(t.tag===13){var e=dr(t,67108864);e!==null&&Le(e,t,67108864),Gc(t,67108864)}}var Bo=!0;function ky(t,e,n,r){var l=q.T;q.T=null;var u=I.p;try{I.p=2,Yc(t,e,n,r)}finally{I.p=u,q.T=l}}function Dy(t,e,n,r){var l=q.T;q.T=null;var u=I.p;try{I.p=8,Yc(t,e,n,r)}finally{I.p=u,q.T=l}}function Yc(t,e,n,r){if(Bo){var l=Xc(r);if(l===null)kc(t,e,r,No,n),Q0(t,r);else if(Py(l,t,e,n,r))r.stopPropagation();else if(Q0(t,r),e&4&&-1<zy.indexOf(t)){for(;l!==null;){var u=tr(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var p=Aa(u.pendingLanes);if(p!==0){var m=u;for(m.pendingLanes|=2,m.entangledLanes|=2;p;){var A=1<<31-Be(p);m.entanglements[1]|=A,p&=~A}vn(u),(kt&6)===0&&(vo=Te()+500,Gi(0))}}break;case 13:m=dr(u,2),m!==null&&Le(m,u,2),So(),Gc(u,2)}if(u=Xc(r),u===null&&kc(t,e,r,No,n),u===l)break;l=u}l!==null&&r.stopPropagation()}else kc(t,e,r,null,n)}}function Xc(t){return t=Js(t),Vc(t)}var No=null;function Vc(t){if(No=null,t=Fa(t),t!==null){var e=d(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=g(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return No=t,null}function Z0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Oa()){case Cl:return 2;case ai:return 8;case Wa:case pt:return 32;case ud:return 268435456;default:return 32}default:return 32}}var Zc=!1,pa=null,ga=null,ma=null,Wi=new Map,Ii=new Map,ba=[],zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Q0(t,e){switch(t){case"focusin":case"focusout":pa=null;break;case"dragenter":case"dragleave":ga=null;break;case"mouseover":case"mouseout":ma=null;break;case"pointerover":case"pointerout":Wi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ii.delete(e.pointerId)}}function Fi(t,e,n,r,l,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:u,targetContainers:[l]},e!==null&&(e=tr(e),e!==null&&V0(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function Py(t,e,n,r,l){switch(e){case"focusin":return pa=Fi(pa,t,e,n,r,l),!0;case"dragenter":return ga=Fi(ga,t,e,n,r,l),!0;case"mouseover":return ma=Fi(ma,t,e,n,r,l),!0;case"pointerover":var u=l.pointerId;return Wi.set(u,Fi(Wi.get(u)||null,t,e,n,r,l)),!0;case"gotpointercapture":return u=l.pointerId,Ii.set(u,Fi(Ii.get(u)||null,t,e,n,r,l)),!0}return!1}function K0(t){var e=Fa(t.target);if(e!==null){var n=d(e);if(n!==null){if(e=n.tag,e===13){if(e=g(n),e!==null){t.blockedOn=e,Cb(t.priority,function(){if(n.tag===13){var r=qe();r=js(r);var l=dr(n,r);l!==null&&Le(l,n,r),Gc(n,r)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ho(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xc(t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ks=r,n.target.dispatchEvent(r),Ks=null}else return e=tr(n),e!==null&&V0(e),t.blockedOn=n,!1;e.shift()}return!0}function J0(t,e,n){Ho(t)&&n.delete(e)}function By(){Zc=!1,pa!==null&&Ho(pa)&&(pa=null),ga!==null&&Ho(ga)&&(ga=null),ma!==null&&Ho(ma)&&(ma=null),Wi.forEach(J0),Ii.forEach(J0)}function Uo(t,e){t.blockedOn===e&&(t.blockedOn=null,Zc||(Zc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,By)))}var jo=null;function W0(t){jo!==t&&(jo=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){jo===t&&(jo=null);for(var e=0;e<t.length;e+=3){var n=t[e],r=t[e+1],l=t[e+2];if(typeof r!="function"){if(Vc(r||n)===null)continue;break}var u=tr(n);u!==null&&(t.splice(e,3),e-=3,Vu(u,{pending:!0,data:l,method:n.method,action:r},r,l))}}))}function tl(t){function e(A){return Uo(A,t)}pa!==null&&Uo(pa,t),ga!==null&&Uo(ga,t),ma!==null&&Uo(ma,t),Wi.forEach(e),Ii.forEach(e);for(var n=0;n<ba.length;n++){var r=ba[n];r.blockedOn===t&&(r.blockedOn=null)}for(;0<ba.length&&(n=ba[0],n.blockedOn===null);)K0(n),n.blockedOn===null&&ba.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var l=n[r],u=n[r+1],p=l[Ee]||null;if(typeof u=="function")p||W0(n);else if(p){var m=null;if(u&&u.hasAttribute("formAction")){if(l=u,p=u[Ee]||null)m=p.formAction;else if(Vc(l)!==null)continue}else m=p.action;typeof m=="function"?n[r+1]=m:(n.splice(r,3),r-=3),W0(n)}}}function Qc(t){this._internalRoot=t}$o.prototype.render=Qc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var n=e.current,r=qe();Y0(n,r,t,e,null,null)},$o.prototype.unmount=Qc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Y0(t.current,2,null,t,null,null),So(),e[Ia]=null}};function $o(t){this._internalRoot=t}$o.prototype.unstable_scheduleHydration=function(t){if(t){var e=pd();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ba.length&&e!==0&&e<ba[n].priority;n++);ba.splice(n,0,t),n===0&&K0(t)}};var I0=i.version;if(I0!=="19.1.0")throw Error(s(527,I0,"19.1.0"));I.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=S(e),t=t!==null?b(t):null,t=t===null?null:t.stateNode,t};var Ny={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qo.isDisabled&&qo.supportsFiber)try{ri=qo.inject(Ny),Pe=qo}catch{}}return nl.createRoot=function(t,e){if(!c(t))throw Error(s(299));var n=!1,r="",l=pp,u=gp,p=mp,m=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(p=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(m=e.unstable_transitionCallbacks)),e=L0(t,1,!1,null,null,n,r,l,u,p,m,null),t[Ia]=e.current,Mc(t),new Qc(e)},nl.hydrateRoot=function(t,e,n){if(!c(t))throw Error(s(299));var r=!1,l="",u=pp,p=gp,m=mp,A=null,B=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks),n.formState!==void 0&&(B=n.formState)),e=L0(t,1,!0,e,n??null,r,l,u,p,m,A,B),e.context=G0(null),n=e.current,r=qe(),r=js(r),l=ta(r),l.callback=null,ea(n,l,r),n=r,e.current.lanes=n,li(e,n),vn(e),t[Ia]=e.current,Mc(t),new $o(e)},nl.version="19.1.0",nl}var sg;function Qy(){if(sg)return Wc.exports;sg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Wc.exports=Zy(),Wc.exports}var Ky=Qy();const Jy=()=>{const[a,i]=K.useState({width:typeof window<"u"?window.innerWidth:0,height:typeof window<"u"?window.innerHeight:0});K.useEffect(()=>{function d(){i({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",d),d(),()=>window.removeEventListener("resize",d)},[]);const o=a.width<=768||a.height<=730;return{height:o?300:600,width:o?300:600,windowSize:a,isMobile:o}};function oe(a,i){i===void 0&&(i={});var o=i.insertAt;if(a&&typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",o==="top"&&s.firstChild?s.insertBefore(c,s.firstChild):s.appendChild(c),c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a))}}oe(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var On=function(){return On=Object.assign||function(a){for(var i,o=1,s=arguments.length;o<s;o++)for(var c in i=arguments[o])Object.prototype.hasOwnProperty.call(i,c)&&(a[c]=i[c]);return a},On.apply(this,arguments)};function is(a){return is=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},is(a)}var Wy=/^\s+/,Iy=/\s+$/;function ot(a,i){if(i=i||{},(a=a||"")instanceof ot)return a;if(!(this instanceof ot))return new ot(a,i);var o=function(s){var c={r:0,g:0,b:0},d=1,g=null,y=null,S=null,b=!1,O=!1;typeof s=="string"&&(s=function(M){M=M.replace(Wy,"").replace(Iy,"").toLowerCase();var w,$=!1;if(mf[M])M=mf[M],$=!0;else if(M=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(w=dn.rgb.exec(M))?{r:w[1],g:w[2],b:w[3]}:(w=dn.rgba.exec(M))?{r:w[1],g:w[2],b:w[3],a:w[4]}:(w=dn.hsl.exec(M))?{h:w[1],s:w[2],l:w[3]}:(w=dn.hsla.exec(M))?{h:w[1],s:w[2],l:w[3],a:w[4]}:(w=dn.hsv.exec(M))?{h:w[1],s:w[2],v:w[3]}:(w=dn.hsva.exec(M))?{h:w[1],s:w[2],v:w[3],a:w[4]}:(w=dn.hex8.exec(M))?{r:Ge(w[1]),g:Ge(w[2]),b:Ge(w[3]),a:pg(w[4]),format:$?"name":"hex8"}:(w=dn.hex6.exec(M))?{r:Ge(w[1]),g:Ge(w[2]),b:Ge(w[3]),format:$?"name":"hex"}:(w=dn.hex4.exec(M))?{r:Ge(w[1]+""+w[1]),g:Ge(w[2]+""+w[2]),b:Ge(w[3]+""+w[3]),a:pg(w[4]+""+w[4]),format:$?"name":"hex8"}:(w=dn.hex3.exec(M))?{r:Ge(w[1]+""+w[1]),g:Ge(w[2]+""+w[2]),b:Ge(w[3]+""+w[3]),format:$?"name":"hex"}:!1}(s)),is(s)=="object"&&(Ln(s.r)&&Ln(s.g)&&Ln(s.b)?(C=s.r,k=s.g,j=s.b,c={r:255*Xt(C,255),g:255*Xt(k,255),b:255*Xt(j,255)},b=!0,O=String(s.r).substr(-1)==="%"?"prgb":"rgb"):Ln(s.h)&&Ln(s.s)&&Ln(s.v)?(g=il(s.s),y=il(s.v),c=function(M,w,$){M=6*Xt(M,360),w=Xt(w,100),$=Xt($,100);var Q=Math.floor(M),W=M-Q,_=$*(1-w),f=$*(1-W*w),h=$*(1-(1-W)*w),x=Q%6,T=[$,f,_,_,h,$][x],z=[h,$,$,f,_,_][x],H=[_,_,h,$,$,f][x];return{r:255*T,g:255*z,b:255*H}}(s.h,g,y),b=!0,O="hsv"):Ln(s.h)&&Ln(s.s)&&Ln(s.l)&&(g=il(s.s),S=il(s.l),c=function(M,w,$){var Q,W,_;function f(T,z,H){return H<0&&(H+=1),H>1&&(H-=1),H<1/6?T+6*(z-T)*H:H<.5?z:H<2/3?T+(z-T)*(2/3-H)*6:T}if(M=Xt(M,360),w=Xt(w,100),$=Xt($,100),w===0)Q=W=_=$;else{var h=$<.5?$*(1+w):$+w-$*w,x=2*$-h;Q=f(x,h,M+1/3),W=f(x,h,M),_=f(x,h,M-1/3)}return{r:255*Q,g:255*W,b:255*_}}(s.h,g,S),b=!0,O="hsl"),s.hasOwnProperty("a")&&(d=s.a));var C,k,j;return d=pm(d),{ok:b,format:s.format||O,r:Math.min(255,Math.max(c.r,0)),g:Math.min(255,Math.max(c.g,0)),b:Math.min(255,Math.max(c.b,0)),a:d}}(a);this._originalInput=a,this._r=o.r,this._g=o.g,this._b=o.b,this._a=o.a,this._roundA=Math.round(100*this._a)/100,this._format=i.format||o.format,this._gradientType=i.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=o.ok}function ug(a,i,o){a=Xt(a,255),i=Xt(i,255),o=Xt(o,255);var s,c,d=Math.max(a,i,o),g=Math.min(a,i,o),y=(d+g)/2;if(d==g)s=c=0;else{var S=d-g;switch(c=y>.5?S/(2-d-g):S/(d+g),d){case a:s=(i-o)/S+(i<o?6:0);break;case i:s=(o-a)/S+2;break;case o:s=(a-i)/S+4}s/=6}return{h:s,s:c,l:y}}function cg(a,i,o){a=Xt(a,255),i=Xt(i,255),o=Xt(o,255);var s,c,d=Math.max(a,i,o),g=Math.min(a,i,o),y=d,S=d-g;if(c=d===0?0:S/d,d==g)s=0;else{switch(d){case a:s=(i-o)/S+(i<o?6:0);break;case i:s=(o-a)/S+2;break;case o:s=(a-i)/S+4}s/=6}return{h:s,s:c,v:y}}function fg(a,i,o,s){var c=[hn(Math.round(a).toString(16)),hn(Math.round(i).toString(16)),hn(Math.round(o).toString(16))];return s&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0):c.join("")}function dg(a,i,o,s){return[hn(gm(s)),hn(Math.round(a).toString(16)),hn(Math.round(i).toString(16)),hn(Math.round(o).toString(16))].join("")}function Fy(a,i){i=i===0?0:i||10;var o=ot(a).toHsl();return o.s-=i/100,o.s=ps(o.s),ot(o)}function tv(a,i){i=i===0?0:i||10;var o=ot(a).toHsl();return o.s+=i/100,o.s=ps(o.s),ot(o)}function ev(a){return ot(a).desaturate(100)}function nv(a,i){i=i===0?0:i||10;var o=ot(a).toHsl();return o.l+=i/100,o.l=ps(o.l),ot(o)}function av(a,i){i=i===0?0:i||10;var o=ot(a).toRgb();return o.r=Math.max(0,Math.min(255,o.r-Math.round(-i/100*255))),o.g=Math.max(0,Math.min(255,o.g-Math.round(-i/100*255))),o.b=Math.max(0,Math.min(255,o.b-Math.round(-i/100*255))),ot(o)}function rv(a,i){i=i===0?0:i||10;var o=ot(a).toHsl();return o.l-=i/100,o.l=ps(o.l),ot(o)}function iv(a,i){var o=ot(a).toHsl(),s=(o.h+i)%360;return o.h=s<0?360+s:s,ot(o)}function lv(a){var i=ot(a).toHsl();return i.h=(i.h+180)%360,ot(i)}function hg(a,i){if(isNaN(i)||i<=0)throw new Error("Argument to polyad must be a positive number");for(var o=ot(a).toHsl(),s=[ot(a)],c=360/i,d=1;d<i;d++)s.push(ot({h:(o.h+d*c)%360,s:o.s,l:o.l}));return s}function ov(a){var i=ot(a).toHsl(),o=i.h;return[ot(a),ot({h:(o+72)%360,s:i.s,l:i.l}),ot({h:(o+216)%360,s:i.s,l:i.l})]}function sv(a,i,o){i=i||6,o=o||30;var s=ot(a).toHsl(),c=360/o,d=[ot(a)];for(s.h=(s.h-(c*i>>1)+720)%360;--i;)s.h=(s.h+c)%360,d.push(ot(s));return d}function uv(a,i){i=i||6;for(var o=ot(a).toHsv(),s=o.h,c=o.s,d=o.v,g=[],y=1/i;i--;)g.push(ot({h:s,s:c,v:d})),d=(d+y)%1;return g}ot.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},getLuminance:function(){var a,i,o,s=this.toRgb();return a=s.r/255,i=s.g/255,o=s.b/255,.2126*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))},setAlpha:function(a){return this._a=pm(a),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var a=cg(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=cg(this._r,this._g,this._b),i=Math.round(360*a.h),o=Math.round(100*a.s),s=Math.round(100*a.v);return this._a==1?"hsv("+i+", "+o+"%, "+s+"%)":"hsva("+i+", "+o+"%, "+s+"%, "+this._roundA+")"},toHsl:function(){var a=ug(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=ug(this._r,this._g,this._b),i=Math.round(360*a.h),o=Math.round(100*a.s),s=Math.round(100*a.l);return this._a==1?"hsl("+i+", "+o+"%, "+s+"%)":"hsla("+i+", "+o+"%, "+s+"%, "+this._roundA+")"},toHex:function(a){return fg(this._r,this._g,this._b,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(a){return function(i,o,s,c,d){var g=[hn(Math.round(i).toString(16)),hn(Math.round(o).toString(16)),hn(Math.round(s).toString(16)),hn(gm(c))];return d&&g[0].charAt(0)==g[0].charAt(1)&&g[1].charAt(0)==g[1].charAt(1)&&g[2].charAt(0)==g[2].charAt(1)&&g[3].charAt(0)==g[3].charAt(1)?g[0].charAt(0)+g[1].charAt(0)+g[2].charAt(0)+g[3].charAt(0):g.join("")}(this._r,this._g,this._b,this._a,a)},toHex8String:function(a){return"#"+this.toHex8(a)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Xt(this._r,255))+"%",g:Math.round(100*Xt(this._g,255))+"%",b:Math.round(100*Xt(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Xt(this._r,255))+"%, "+Math.round(100*Xt(this._g,255))+"%, "+Math.round(100*Xt(this._b,255))+"%)":"rgba("+Math.round(100*Xt(this._r,255))+"%, "+Math.round(100*Xt(this._g,255))+"%, "+Math.round(100*Xt(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(cv[fg(this._r,this._g,this._b,!0)]||!1)},toFilter:function(a){var i="#"+dg(this._r,this._g,this._b,this._a),o=i,s=this._gradientType?"GradientType = 1, ":"";if(a){var c=ot(a);o="#"+dg(c._r,c._g,c._b,c._a)}return"progid:DXImageTransform.Microsoft.gradient("+s+"startColorstr="+i+",endColorstr="+o+")"},toString:function(a){var i=!!a;a=a||this._format;var o=!1,s=this._a<1&&this._a>=0;return i||!s||a!=="hex"&&a!=="hex6"&&a!=="hex3"&&a!=="hex4"&&a!=="hex8"&&a!=="name"?(a==="rgb"&&(o=this.toRgbString()),a==="prgb"&&(o=this.toPercentageRgbString()),a!=="hex"&&a!=="hex6"||(o=this.toHexString()),a==="hex3"&&(o=this.toHexString(!0)),a==="hex4"&&(o=this.toHex8String(!0)),a==="hex8"&&(o=this.toHex8String()),a==="name"&&(o=this.toName()),a==="hsl"&&(o=this.toHslString()),a==="hsv"&&(o=this.toHsvString()),o||this.toHexString()):a==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return ot(this.toString())},_applyModification:function(a,i){var o=a.apply(null,[this].concat([].slice.call(i)));return this._r=o._r,this._g=o._g,this._b=o._b,this.setAlpha(o._a),this},lighten:function(){return this._applyModification(nv,arguments)},brighten:function(){return this._applyModification(av,arguments)},darken:function(){return this._applyModification(rv,arguments)},desaturate:function(){return this._applyModification(Fy,arguments)},saturate:function(){return this._applyModification(tv,arguments)},greyscale:function(){return this._applyModification(ev,arguments)},spin:function(){return this._applyModification(iv,arguments)},_applyCombination:function(a,i){return a.apply(null,[this].concat([].slice.call(i)))},analogous:function(){return this._applyCombination(sv,arguments)},complement:function(){return this._applyCombination(lv,arguments)},monochromatic:function(){return this._applyCombination(uv,arguments)},splitcomplement:function(){return this._applyCombination(ov,arguments)},triad:function(){return this._applyCombination(hg,[3])},tetrad:function(){return this._applyCombination(hg,[4])}},ot.fromRatio=function(a,i){if(is(a)=="object"){var o={};for(var s in a)a.hasOwnProperty(s)&&(o[s]=s==="a"?a[s]:il(a[s]));a=o}return ot(a,i)},ot.equals=function(a,i){return!(!a||!i)&&ot(a).toRgbString()==ot(i).toRgbString()},ot.random=function(){return ot.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},ot.mix=function(a,i,o){o=o===0?0:o||50;var s=ot(a).toRgb(),c=ot(i).toRgb(),d=o/100;return ot({r:(c.r-s.r)*d+s.r,g:(c.g-s.g)*d+s.g,b:(c.b-s.b)*d+s.b,a:(c.a-s.a)*d+s.a})},ot.readability=function(a,i){var o=ot(a),s=ot(i);return(Math.max(o.getLuminance(),s.getLuminance())+.05)/(Math.min(o.getLuminance(),s.getLuminance())+.05)},ot.isReadable=function(a,i,o){var s,c,d=ot.readability(a,i);switch(c=!1,(s=function(g){var y,S;return y=((g=g||{level:"AA",size:"small"}).level||"AA").toUpperCase(),S=(g.size||"small").toLowerCase(),y!=="AA"&&y!=="AAA"&&(y="AA"),S!=="small"&&S!=="large"&&(S="small"),{level:y,size:S}}(o)).level+s.size){case"AAsmall":case"AAAlarge":c=d>=4.5;break;case"AAlarge":c=d>=3;break;case"AAAsmall":c=d>=7}return c},ot.mostReadable=function(a,i,o){var s,c,d,g,y=null,S=0;c=(o=o||{}).includeFallbackColors,d=o.level,g=o.size;for(var b=0;b<i.length;b++)(s=ot.readability(a,i[b]))>S&&(S=s,y=ot(i[b]));return ot.isReadable(a,y,{level:d,size:g})||!c?y:(o.includeFallbackColors=!1,ot.mostReadable(a,["#fff","#000"],o))};var mf=ot.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},cv=ot.hexNames=function(a){var i={};for(var o in a)a.hasOwnProperty(o)&&(i[a[o]]=o);return i}(mf);function pm(a){return a=parseFloat(a),(isNaN(a)||a<0||a>1)&&(a=1),a}function Xt(a,i){(function(s){return typeof s=="string"&&s.indexOf(".")!=-1&&parseFloat(s)===1})(a)&&(a="100%");var o=function(s){return typeof s=="string"&&s.indexOf("%")!=-1}(a);return a=Math.min(i,Math.max(0,parseFloat(a))),o&&(a=parseInt(a*i,10)/100),Math.abs(a-i)<1e-6?1:a%i/parseFloat(i)}function ps(a){return Math.min(1,Math.max(0,a))}function Ge(a){return parseInt(a,16)}function hn(a){return a.length==1?"0"+a:""+a}function il(a){return a<=1&&(a=100*a+"%"),a}function gm(a){return Math.round(255*parseFloat(a)).toString(16)}function pg(a){return Ge(a)/255}var va,Lo,Go,dn=(Lo="[\\s|\\(]+("+(va="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+va+")[,|\\s]+("+va+")\\s*\\)?",Go="[\\s|\\(]+("+va+")[,|\\s]+("+va+")[,|\\s]+("+va+")[,|\\s]+("+va+")\\s*\\)?",{CSS_UNIT:new RegExp(va),rgb:new RegExp("rgb"+Lo),rgba:new RegExp("rgba"+Go),hsl:new RegExp("hsl"+Lo),hsla:new RegExp("hsla"+Go),hsv:new RegExp("hsv"+Lo),hsva:new RegExp("hsva"+Go),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Ln(a){return!!dn.CSS_UNIT.exec(a)}var fv=function(a,i){var o=(typeof a=="string"?parseInt(a):a)||0;if(o>=-5&&o<=5){var s=o,c=parseFloat(i),d=c+s*(c/5)*-1;return(d==0||d<=Number.EPSILON)&&(d=.1),{animationPeriod:d+"s"}}return{animationPeriod:i}},dv=function(a,i){var o=a||{},s="";switch(i){case"small":s="12px";break;case"medium":s="16px";break;case"large":s="20px";break;default:s=void 0}var c={};if(o.fontSize){var d=o.fontSize;c=function(g,y){var S={};for(var b in g)Object.prototype.hasOwnProperty.call(g,b)&&y.indexOf(b)<0&&(S[b]=g[b]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function"){var O=0;for(b=Object.getOwnPropertySymbols(g);O<b.length;O++)y.indexOf(b[O])<0&&Object.prototype.propertyIsEnumerable.call(g,b[O])&&(S[b[O]]=g[b[O]])}return S}(o,["fontSize"]),s=d}return{fontSize:s,styles:c}},hv={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},pv=function(a){var i=a.className,o=a.text,s=a.textColor,c=a.staticText,d=a.style;return o?qt.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(i||"").trim(),style:On(On(On({},c&&hv),s&&{color:s,mixBlendMode:"unset"}),d&&d)},typeof o=="string"&&o.length?o:"loading"):null},mm="rgb(50, 205, 50)";function gv(a,i){if(i===void 0&&(i=0),a.length===0)throw new Error("Input array cannot be empty!");var o=[];return function s(c,d){return d===void 0&&(d=0),o.push.apply(o,c),o.length<d&&s(o,d),o.slice(0,d)}(a,i)}oe(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);ot(mm).toRgb();Array.from({length:4},function(a,i){return"--atom-phase".concat(i+1,"-rgb")});oe(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);var Hr=Array.from({length:4},function(a,i){return"--commet-phase".concat(i+1,"-color")}),mv=function(a){var i,o=dv(a?.style,a?.size),s=o.styles,c=o.fontSize,d=a?.easing,g=fv(a?.speedPlus,"1.2s").animationPeriod,y=function(S){var b={};if(S instanceof Array){for(var O=gv(S,Hr.length),C=0;C<O.length&&!(C>=4);C++)b[Hr[C]]=O[C];return b}try{if(typeof S!="string")throw new Error("Color String expected");for(var k=0;k<Hr.length;k++)b[Hr[k]]=S}catch(j){for(j instanceof Error?console.warn("[".concat(j.message,']: Received "').concat(typeof S,'" instead with value, ').concat(JSON.stringify(S))):console.warn("".concat(JSON.stringify(S)," received in <Commet /> indicator cannot be processed. Using default instead!")),k=0;k<Hr.length;k++)b[Hr[k]]=mm}return b}((i=a?.color)!==null&&i!==void 0?i:"");return qt.createElement("span",{className:"rli-d-i-b commet-rli-bounding-box",style:On(On(On(On(On({},c&&{fontSize:c}),g&&{"--rli-animation-duration":g}),d&&{"--rli-animation-function":d}),y),s),role:"status","aria-live":"polite","aria-label":"Loading"},qt.createElement("span",{className:"rli-d-i-b commet-indicator"},qt.createElement("span",{className:"rli-d-i-b commet-box"},qt.createElement("span",{className:"rli-d-i-b commet-trail trail1"}),qt.createElement("span",{className:"rli-d-i-b  commetball-box"})),qt.createElement("span",{className:"rli-d-i-b commet-box"},qt.createElement("span",{className:"rli-d-i-b commet-trail trail2"}),qt.createElement("span",{className:"rli-d-i-b commetball-box"})),qt.createElement(pv,{className:"commet-text",text:a?.text,textColor:a?.textColor})))};oe(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return"--OP-annulus-phase".concat(i+1,"-color")});function ef(a){return a&&a.Math===Math&&a}oe(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);ef(typeof window=="object"&&window)||ef(typeof self=="object"&&self)||ef(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(a,i){return"--OP-dotted-phase".concat(i+1,"-color")});oe(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return"--OP-spokes-phase".concat(i+1,"-color")});oe(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(a,i){return"--OP-annulus-dual-sectors-phase".concat(i+1,"-color")});oe(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return["--OP-annulus-track-phase".concat(i+1,"-color"),"--OP-annulus-sector-phase".concat(i+1,"-color")]});oe(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return"--four-square-phase".concat(i+1,"-color")});oe(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return"--mosaic-phase".concat(i+1,"-color")});oe(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return"--riple-phase".concat(i+1,"-color")});oe(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return"--TD-pulsate-phase".concat(i+1,"-color")});oe(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return"--TD-brick-stack-phase".concat(i+1,"-color")});oe(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return"--TD-bob-phase".concat(i+1,"-color")});oe(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return"--TD-bounce-phase".concat(i+1,"-color")});oe(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return"--shape-phase".concat(i+1,"-color")});oe(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return"--trophySpin-phase".concat(i+1,"-color")});oe(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return"--slab-phase".concat(i+1,"-color")});oe(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return"--life-line-phase".concat(i+1,"-color")});var ll={exports:{}},bv=ll.exports,gg;function yv(){return gg||(gg=1,function(a,i){(function(o,s){s(i)})(bv,function(o){class s{constructor(f,h){this.state={angle:0,area:[],position:{x:0,y:0},hardAngle:0,hardDrawingAngle:0},this.createdDensity=h,this.nowDrawingDensity=this.createdDensity,this.render=f}setDensity(f){this.createdDensity=f,this.nowDrawingDensity=f}setDrawingDensity(f){this.nowDrawingDensity=f}setPosition(f){this.state.position=f}setAngle(f){this.state.angle=f}setArea(f){this.state.area=f}setHardDrawingAngle(f){this.state.hardDrawingAngle=f}setHardAngle(f){this.state.hardAngle=f,this.state.hardDrawingAngle=f}setOrientation(f){this.orientation=f}getDrawingDensity(){return this.nowDrawingDensity}getDensity(){return this.createdDensity}getHardAngle(){return this.state.hardAngle}}class c extends s{constructor(f,h,x){super(f,x),this.image=null,this.isLoad=!1,this.loadingAngle=0,this.image=new Image,this.image.src=h}draw(f){const h=this.render.getContext(),x=this.render.convertToGlobal(this.state.position),T=this.render.getRect().pageWidth,z=this.render.getRect().height;h.save(),h.translate(x.x,x.y),h.beginPath();for(let H of this.state.area)H!==null&&(H=this.render.convertToGlobal(H),h.lineTo(H.x-x.x,H.y-x.y));h.rotate(this.state.angle),h.clip(),this.isLoad?h.drawImage(this.image,0,0,T,z):this.drawLoader(h,{x:0,y:0},T,z),h.restore()}simpleDraw(f){const h=this.render.getRect(),x=this.render.getContext(),T=h.pageWidth,z=h.height,H=f===1?h.left+h.pageWidth:h.left,v=h.top;this.isLoad?x.drawImage(this.image,H,v,T,z):this.drawLoader(x,{x:H,y:v},T,z)}drawLoader(f,h,x,T){f.beginPath(),f.strokeStyle="rgb(200, 200, 200)",f.fillStyle="rgb(255, 255, 255)",f.lineWidth=1,f.rect(h.x+1,h.y+1,x-1,T-1),f.stroke(),f.fill();const z={x:h.x+x/2,y:h.y+T/2};f.beginPath(),f.lineWidth=10,f.arc(z.x,z.y,20,this.loadingAngle,3*Math.PI/2+this.loadingAngle),f.stroke(),f.closePath(),this.loadingAngle+=.07,this.loadingAngle>=2*Math.PI&&(this.loadingAngle=0)}load(){this.isLoad||(this.image.onload=()=>{this.isLoad=!0})}newTemporaryCopy(){return this}getTemporaryCopy(){return this}hideTemporaryCopy(){}}class d{constructor(f,h){this.pages=[],this.currentPageIndex=0,this.currentSpreadIndex=0,this.landscapeSpread=[],this.portraitSpread=[],this.render=h,this.app=f,this.currentPageIndex=0,this.isShowCover=this.app.getSettings().showCover}destroy(){this.pages=[]}createSpread(){this.landscapeSpread=[],this.portraitSpread=[];for(let h=0;h<this.pages.length;h++)this.portraitSpread.push([h]);let f=0;this.isShowCover&&(this.pages[0].setDensity("hard"),this.landscapeSpread.push([f]),f++);for(let h=f;h<this.pages.length;h+=2)h<this.pages.length-1?this.landscapeSpread.push([h,h+1]):(this.landscapeSpread.push([h]),this.pages[h].setDensity("hard"))}getSpread(){return this.render.getOrientation()==="landscape"?this.landscapeSpread:this.portraitSpread}getSpreadIndexByPage(f){const h=this.getSpread();for(let x=0;x<h.length;x++)if(f===h[x][0]||f===h[x][1])return x;return null}getPageCount(){return this.pages.length}getPages(){return this.pages}getPage(f){if(f>=0&&f<this.pages.length)return this.pages[f];throw new Error("Invalid page number")}nextBy(f){const h=this.pages.indexOf(f);return h<this.pages.length-1?this.pages[h+1]:null}prevBy(f){const h=this.pages.indexOf(f);return h>0?this.pages[h-1]:null}getFlippingPage(f){const h=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return f===0?this.pages[h].newTemporaryCopy():this.pages[h-1];{const x=f===0?this.getSpread()[h+1]:this.getSpread()[h-1];return x.length===1||f===0?this.pages[x[0]]:this.pages[x[1]]}}getBottomPage(f){const h=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return f===0?this.pages[h+1]:this.pages[h-1];{const x=f===0?this.getSpread()[h+1]:this.getSpread()[h-1];return x.length===1?this.pages[x[0]]:f===0?this.pages[x[1]]:this.pages[x[0]]}}showNext(){this.currentSpreadIndex<this.getSpread().length&&(this.currentSpreadIndex++,this.showSpread())}showPrev(){this.currentSpreadIndex>0&&(this.currentSpreadIndex--,this.showSpread())}getCurrentPageIndex(){return this.currentPageIndex}show(f=null){if(f===null&&(f=this.currentPageIndex),f<0||f>=this.pages.length)return;const h=this.getSpreadIndexByPage(f);h!==null&&(this.currentSpreadIndex=h,this.showSpread())}getCurrentSpreadIndex(){return this.currentSpreadIndex}setCurrentSpreadIndex(f){if(!(f>=0&&f<this.getSpread().length))throw new Error("Invalid page");this.currentSpreadIndex=f}showSpread(){const f=this.getSpread()[this.currentSpreadIndex];f.length===2?(this.render.setLeftPage(this.pages[f[0]]),this.render.setRightPage(this.pages[f[1]])):this.render.getOrientation()==="landscape"&&f[0]===this.pages.length-1?(this.render.setLeftPage(this.pages[f[0]]),this.render.setRightPage(null)):(this.render.setLeftPage(null),this.render.setRightPage(this.pages[f[0]])),this.currentPageIndex=f[0],this.app.updatePageIndex(this.currentPageIndex)}}class g extends d{constructor(f,h,x){super(f,h),this.imagesHref=x}load(){for(const f of this.imagesHref){const h=new c(this.render,f,"soft");h.load(),this.pages.push(h)}this.createSpread()}}class y{static GetDistanceBetweenTwoPoint(f,h){return f===null||h===null?1/0:Math.sqrt(Math.pow(h.x-f.x,2)+Math.pow(h.y-f.y,2))}static GetSegmentLength(f){return y.GetDistanceBetweenTwoPoint(f[0],f[1])}static GetAngleBetweenTwoLine(f,h){const x=f[0].y-f[1].y,T=h[0].y-h[1].y,z=f[1].x-f[0].x,H=h[1].x-h[0].x;return Math.acos((x*T+z*H)/(Math.sqrt(x*x+z*z)*Math.sqrt(T*T+H*H)))}static PointInRect(f,h){return h===null?null:h.x>=f.left&&h.x<=f.width+f.left&&h.y>=f.top&&h.y<=f.top+f.height?h:null}static GetRotatedPoint(f,h,x){return{x:f.x*Math.cos(x)+f.y*Math.sin(x)+h.x,y:f.y*Math.cos(x)-f.x*Math.sin(x)+h.y}}static LimitPointToCircle(f,h,x){if(y.GetDistanceBetweenTwoPoint(f,x)<=h)return x;const T=f.x,z=f.y,H=x.x,v=x.y;let Y=Math.sqrt(Math.pow(h,2)*Math.pow(T-H,2)/(Math.pow(T-H,2)+Math.pow(z-v,2)))+T;x.x<0&&(Y*=-1);let tt=(Y-T)*(z-v)/(T-H)+z;return T-H+z===0&&(tt=h),{x:Y,y:tt}}static GetIntersectBetweenTwoSegment(f,h,x){return y.PointInRect(f,y.GetIntersectBeetwenTwoLine(h,x))}static GetIntersectBeetwenTwoLine(f,h){const x=f[0].y-f[1].y,T=h[0].y-h[1].y,z=f[1].x-f[0].x,H=h[1].x-h[0].x,v=f[0].x*f[1].y-f[1].x*f[0].y,Y=h[0].x*h[1].y-h[1].x*h[0].y,tt=x*Y-T*v,nt=z*Y-H*v,wt=-(v*H-Y*z)/(x*H-T*z),ht=-(x*Y-T*v)/(x*H-T*z);if(isFinite(wt)&&isFinite(ht))return{x:wt,y:ht};if(Math.abs(tt-nt)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(f,h){const x=Math.abs(f.x-h.x),T=Math.abs(f.y-h.y),z=Math.max(x,T),H=[f];function v(Y,tt,nt,wt,ht){return tt>Y?Y+ht*(nt/wt):tt<Y?Y-ht*(nt/wt):Y}for(let Y=1;Y<=z;Y+=1)H.push({x:v(f.x,h.x,x,z,Y),y:v(f.y,h.y,T,z,Y)});return H}}class S extends s{constructor(f,h,x){super(f,x),this.copiedElement=null,this.temporaryCopy=null,this.isLoad=!1,this.element=h,this.element.classList.add("stf__item"),this.element.classList.add("--"+x)}newTemporaryCopy(){return this.nowDrawingDensity==="hard"?this:(this.temporaryCopy===null&&(this.copiedElement=this.element.cloneNode(!0),this.element.parentElement.appendChild(this.copiedElement),this.temporaryCopy=new S(this.render,this.copiedElement,this.nowDrawingDensity)),this.getTemporaryCopy())}getTemporaryCopy(){return this.temporaryCopy}hideTemporaryCopy(){this.temporaryCopy!==null&&(this.copiedElement.remove(),this.copiedElement=null,this.temporaryCopy=null)}draw(f){const h=f||this.nowDrawingDensity,x=this.render.convertToGlobal(this.state.position),T=this.render.getRect().pageWidth,z=this.render.getRect().height;this.element.classList.remove("--simple");const H=`
            display: block;
            z-index: ${this.element.style.zIndex};
            left: 0;
            top: 0;
            width: ${T}px;
            height: ${z}px;
        `;h==="hard"?this.drawHard(H):this.drawSoft(x,H)}drawHard(f=""){const h=this.render.getRect().left+this.render.getRect().width/2,x=this.state.hardDrawingAngle,T=f+`
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                clip-path: none;
                -webkit-clip-path: none;
            `+(this.orientation===0?`transform-origin: ${this.render.getRect().pageWidth}px 0; 
                   transform: translate3d(0, 0, 0) rotateY(${x}deg);`:`transform-origin: 0 0; 
                   transform: translate3d(${h}px, 0, 0) rotateY(${x}deg);`);this.element.style.cssText=T}drawSoft(f,h=""){let x="polygon( ";for(const z of this.state.area)if(z!==null){let H=this.render.getDirection()===1?{x:-z.x+this.state.position.x,y:z.y-this.state.position.y}:{x:z.x-this.state.position.x,y:z.y-this.state.position.y};H=y.GetRotatedPoint(H,{x:0,y:0},this.state.angle),x+=H.x+"px "+H.y+"px, "}x=x.slice(0,-2),x+=")";const T=h+`transform-origin: 0 0; clip-path: ${x}; -webkit-clip-path: ${x};`+(this.render.isSafari()&&this.state.angle===0?`transform: translate(${f.x}px, ${f.y}px);`:`transform: translate3d(${f.x}px, ${f.y}px, 0) rotate(${this.state.angle}rad);`);this.element.style.cssText=T}simpleDraw(f){const h=this.render.getRect(),x=h.pageWidth,T=h.height,z=f===1?h.left+h.pageWidth:h.left,H=h.top;this.element.classList.add("--simple"),this.element.style.cssText=`
            position: absolute; 
            display: block; 
            height: ${T}px; 
            left: ${z}px; 
            top: ${H}px; 
            width: ${x}px; 
            z-index: ${this.render.getSettings().startZIndex+1};`}getElement(){return this.element}load(){this.isLoad=!0}setOrientation(f){super.setOrientation(f),this.element.classList.remove("--left","--right"),this.element.classList.add(f===1?"--right":"--left")}setDrawingDensity(f){this.element.classList.remove("--soft","--hard"),this.element.classList.add("--"+f),super.setDrawingDensity(f)}}class b extends d{constructor(f,h,x,T){super(f,h),this.element=x,this.pagesElement=T}load(){for(const f of this.pagesElement){const h=new S(this.render,f,f.dataset.density==="hard"?"hard":"soft");h.load(),this.pages.push(h)}this.createSpread()}}class O{constructor(f,h,x,T){this.direction=f,this.corner=h,this.topIntersectPoint=null,this.sideIntersectPoint=null,this.bottomIntersectPoint=null,this.pageWidth=parseInt(x,10),this.pageHeight=parseInt(T,10)}calc(f){try{return this.position=this.calcAngleAndPosition(f),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){const f=[];let h=!1;return f.push(this.rect.topLeft),f.push(this.topIntersectPoint),this.sideIntersectPoint===null?h=!0:(f.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(h=!1)),f.push(this.bottomIntersectPoint),(h||this.corner==="bottom")&&f.push(this.rect.bottomLeft),f}getBottomClipArea(){const f=[];return f.push(this.topIntersectPoint),this.corner==="top"?f.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&f.push({x:this.pageWidth,y:0}),f.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?y.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&f.push(this.sideIntersectPoint):this.corner==="top"&&f.push({x:this.pageWidth,y:this.pageHeight}),f.push(this.bottomIntersectPoint),f.push(this.topIntersectPoint),f}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){const f=y.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?f:Math.PI-f}calcAngleAndPosition(f){let h=f;if(this.updateAngleAndGeometry(h),h=this.corner==="top"?this.checkPositionAtCenterLine(h,{x:0,y:0},{x:0,y:this.pageHeight}):this.checkPositionAtCenterLine(h,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(h.x-this.pageWidth)<1&&Math.abs(h.y)<1)throw new Error("Point is too small");return h}updateAngleAndGeometry(f){this.angle=this.calculateAngle(f),this.rect=this.getPageRect(f)}calculateAngle(f){const h=this.pageWidth-f.x+1,x=this.corner==="bottom"?this.pageHeight-f.y:f.y;let T=2*Math.acos(h/Math.sqrt(x*x+h*h));x<0&&(T=-T);const z=Math.PI-T;if(!isFinite(T)||z>=0&&z<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(T=-T),T}getPageRect(f){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],f):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],f)}getRectFromBasePoint(f,h){return{topLeft:this.getRotatedPoint(f[0],h),topRight:this.getRotatedPoint(f[1],h),bottomLeft:this.getRotatedPoint(f[2],h),bottomRight:this.getRotatedPoint(f[3],h)}}getRotatedPoint(f,h){return{x:f.x*Math.cos(this.angle)+f.y*Math.sin(this.angle)+h.x,y:f.y*Math.cos(this.angle)-f.x*Math.sin(this.angle)+h.y}}calculateIntersectPoint(f){const h={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=y.GetIntersectBetweenTwoSegment(h,[f,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=y.GetIntersectBetweenTwoSegment(h,[f,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=y.GetIntersectBetweenTwoSegment(h,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=y.GetIntersectBetweenTwoSegment(h,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=y.GetIntersectBetweenTwoSegment(h,[f,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=y.GetIntersectBetweenTwoSegment(h,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(f,h,x){let T=f;const z=y.LimitPointToCircle(h,this.pageWidth,T);T!==z&&(T=z,this.updateAngleAndGeometry(T));const H=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2));let v=this.rect.bottomRight,Y=this.rect.topLeft;if(this.corner==="bottom"&&(v=this.rect.topRight,Y=this.rect.bottomLeft),v.x<=0){const tt=y.LimitPointToCircle(x,H,Y);tt!==T&&(T=tt,this.updateAngleAndGeometry(T))}return T}getSegmentToShadowLine(){const f=this.getShadowStartPoint();return[f,f!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint]}}class C{constructor(f,h){this.flippingPage=null,this.bottomPage=null,this.calc=null,this.state="read",this.render=f,this.app=h}fold(f){this.setState("user_fold"),this.calc===null&&this.start(f),this.do(this.render.convertToPage(f))}flip(f){if(this.app.getSettings().disableFlipByClick&&!this.isPointOnCorners(f)||(this.calc!==null&&this.render.finishAnimation(),!this.start(f)))return;const h=this.getBoundsRect();this.setState("flipping");const x=h.height/10,T=this.calc.getCorner()==="bottom"?h.height-x:x,z=this.calc.getCorner()==="bottom"?h.height:0;this.calc.calc({x:h.pageWidth-x,y:T}),this.animateFlippingTo({x:h.pageWidth-x,y:T},{x:-h.pageWidth,y:z},!0)}start(f){this.reset();const h=this.render.convertToBook(f),x=this.getBoundsRect(),T=this.getDirectionByPoint(h),z=h.y>=x.height/2?"bottom":"top";if(!this.checkDirection(T))return!1;try{if(this.flippingPage=this.app.getPageCollection().getFlippingPage(T),this.bottomPage=this.app.getPageCollection().getBottomPage(T),this.render.getOrientation()==="landscape")if(T===1){const H=this.app.getPageCollection().nextBy(this.flippingPage);H!==null&&this.flippingPage.getDensity()!==H.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),H.setDrawingDensity("hard"))}else{const H=this.app.getPageCollection().prevBy(this.flippingPage);H!==null&&this.flippingPage.getDensity()!==H.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),H.setDrawingDensity("hard"))}return this.render.setDirection(T),this.calc=new O(T,z,x.pageWidth.toString(10),x.height.toString(10)),!0}catch{return!1}}do(f){if(this.calc!==null&&this.calc.calc(f)){const h=this.calc.getFlippingProgress();this.bottomPage.setArea(this.calc.getBottomClipArea()),this.bottomPage.setPosition(this.calc.getBottomPagePosition()),this.bottomPage.setAngle(0),this.bottomPage.setHardAngle(0),this.flippingPage.setArea(this.calc.getFlippingClipArea()),this.flippingPage.setPosition(this.calc.getActiveCorner()),this.flippingPage.setAngle(this.calc.getAngle()),this.calc.getDirection()===0?this.flippingPage.setHardAngle(90*(200-2*h)/100):this.flippingPage.setHardAngle(-90*(200-2*h)/100),this.render.setPageRect(this.calc.getRect()),this.render.setBottomPage(this.bottomPage),this.render.setFlippingPage(this.flippingPage),this.render.setShadowData(this.calc.getShadowStartPoint(),this.calc.getShadowAngle(),h,this.calc.getDirection())}}flipToPage(f,h){const x=this.app.getPageCollection().getCurrentSpreadIndex(),T=this.app.getPageCollection().getSpreadIndexByPage(f);try{T>x&&(this.app.getPageCollection().setCurrentSpreadIndex(T-1),this.flipNext(h)),T<x&&(this.app.getPageCollection().setCurrentSpreadIndex(T+1),this.flipPrev(h))}catch{}}flipNext(f){this.flip({x:this.render.getRect().left+2*this.render.getRect().pageWidth-10,y:f==="top"?1:this.render.getRect().height-2})}flipPrev(f){this.flip({x:10,y:f==="top"?1:this.render.getRect().height-2})}stopMove(){if(this.calc===null)return;const f=this.calc.getPosition(),h=this.getBoundsRect(),x=this.calc.getCorner()==="bottom"?h.height:0;f.x<=0?this.animateFlippingTo(f,{x:-h.pageWidth,y:x},!0):this.animateFlippingTo(f,{x:h.pageWidth,y:x},!1)}showCorner(f){if(!this.checkState("read","fold_corner"))return;const h=this.getBoundsRect(),x=h.pageWidth;if(this.isPointOnCorners(f))if(this.calc===null){if(!this.start(f))return;this.setState("fold_corner"),this.calc.calc({x:x-1,y:1});const T=50,z=this.calc.getCorner()==="bottom"?h.height-1:1,H=this.calc.getCorner()==="bottom"?h.height-T:T;this.animateFlippingTo({x:x-1,y:z},{x:x-T,y:H},!1,!1)}else this.do(this.render.convertToPage(f));else this.setState("read"),this.render.finishAnimation(),this.stopMove()}animateFlippingTo(f,h,x,T=!0){const z=y.GetCordsFromTwoPoint(f,h),H=[];for(const Y of z)H.push(()=>this.do(Y));const v=this.getAnimationDuration(z.length);this.render.startAnimation(H,v,()=>{this.calc&&(x&&(this.calc.getDirection()===1?this.app.turnToPrevPage():this.app.turnToNextPage()),T&&(this.render.setBottomPage(null),this.render.setFlippingPage(null),this.render.clearShadow(),this.setState("read"),this.reset()))})}getCalculation(){return this.calc}getState(){return this.state}setState(f){this.state!==f&&(this.app.updateState(f),this.state=f)}getDirectionByPoint(f){const h=this.getBoundsRect();if(this.render.getOrientation()==="portrait"){if(f.x-h.pageWidth<=h.width/5)return 1}else if(f.x<h.width/2)return 1;return 0}getAnimationDuration(f){const h=this.app.getSettings().flippingTime;return f>=1e3?h:f/1e3*h}checkDirection(f){return f===0?this.app.getCurrentPageIndex()<this.app.getPageCount()-1:this.app.getCurrentPageIndex()>=1}reset(){this.calc=null,this.flippingPage=null,this.bottomPage=null}getBoundsRect(){return this.render.getRect()}checkState(...f){for(const h of f)if(this.state===h)return!0;return!1}isPointOnCorners(f){const h=this.getBoundsRect(),x=h.pageWidth,T=Math.sqrt(Math.pow(x,2)+Math.pow(h.height,2))/5,z=this.render.convertToBook(f);return z.x>0&&z.y>0&&z.x<h.width&&z.y<h.height&&(z.x<T||z.x>h.width-T)&&(z.y<T||z.y>h.height-T)}}class k{constructor(f,h){this.leftPage=null,this.rightPage=null,this.flippingPage=null,this.bottomPage=null,this.direction=null,this.orientation=null,this.shadow=null,this.animation=null,this.pageRect=null,this.boundsRect=null,this.timer=0,this.safari=!1,this.setting=h,this.app=f;const x=new RegExp("Version\\/[\\d\\.]+.*Safari/");this.safari=x.exec(window.navigator.userAgent)!==null}render(f){if(this.animation!==null){const h=Math.round((f-this.animation.startedAt)/this.animation.durationFrame);h<this.animation.frames.length?this.animation.frames[h]():(this.animation.onAnimateEnd(),this.animation=null)}this.timer=f,this.drawFrame()}start(){this.update();const f=h=>{this.render(h),requestAnimationFrame(f)};requestAnimationFrame(f)}startAnimation(f,h,x){this.finishAnimation(),this.animation={frames:f,duration:h,durationFrame:h/f.length,onAnimateEnd:x,startedAt:this.timer}}finishAnimation(){this.animation!==null&&(this.animation.frames[this.animation.frames.length-1](),this.animation.onAnimateEnd!==null&&this.animation.onAnimateEnd()),this.animation=null}update(){this.boundsRect=null;const f=this.calculateBoundsRect();this.orientation!==f&&(this.orientation=f,this.app.updateOrientation(f))}calculateBoundsRect(){let f="landscape";const h=this.getBlockWidth(),x=h/2,T=this.getBlockHeight()/2,z=this.setting.width/this.setting.height;let H=this.setting.width,v=this.setting.height,Y=x-H;return this.setting.size==="stretch"?(h<2*this.setting.minWidth&&this.app.getSettings().usePortrait&&(f="portrait"),H=f==="portrait"?this.getBlockWidth():this.getBlockWidth()/2,H>this.setting.maxWidth&&(H=this.setting.maxWidth),v=H/z,v>this.getBlockHeight()&&(v=this.getBlockHeight(),H=v*z),Y=f==="portrait"?x-H/2-H:x-H):h<2*H&&this.app.getSettings().usePortrait&&(f="portrait",Y=x-H/2-H),this.boundsRect={left:Y,top:T-v/2,width:2*H,height:v,pageWidth:H},f}setShadowData(f,h,x,T){if(!this.app.getSettings().drawShadow)return;const z=100*this.getSettings().maxShadowOpacity;this.shadow={pos:f,angle:h,width:3*this.getRect().pageWidth/4*x/100,opacity:(100-x)*z/100/100,direction:T,progress:2*x}}clearShadow(){this.shadow=null}getBlockWidth(){return this.app.getUI().getDistElement().offsetWidth}getBlockHeight(){return this.app.getUI().getDistElement().offsetHeight}getDirection(){return this.direction}getRect(){return this.boundsRect===null&&this.calculateBoundsRect(),this.boundsRect}getSettings(){return this.app.getSettings()}getOrientation(){return this.orientation}setPageRect(f){this.pageRect=f}setDirection(f){this.direction=f}setRightPage(f){f!==null&&f.setOrientation(1),this.rightPage=f}setLeftPage(f){f!==null&&f.setOrientation(0),this.leftPage=f}setBottomPage(f){f!==null&&f.setOrientation(this.direction===1?0:1),this.bottomPage=f}setFlippingPage(f){f!==null&&f.setOrientation(this.direction===0&&this.orientation!=="portrait"?0:1),this.flippingPage=f}convertToBook(f){const h=this.getRect();return{x:f.x-h.left,y:f.y-h.top}}isSafari(){return this.safari}convertToPage(f,h){h||(h=this.direction);const x=this.getRect();return{x:h===0?f.x-x.left-x.width/2:x.width/2-f.x+x.left,y:f.y-x.top}}convertToGlobal(f,h){if(h||(h=this.direction),f==null)return null;const x=this.getRect();return{x:h===0?f.x+x.left+x.width/2:x.width/2-f.x+x.left,y:f.y+x.top}}convertRectToGlobal(f,h){return h||(h=this.direction),{topLeft:this.convertToGlobal(f.topLeft,h),topRight:this.convertToGlobal(f.topRight,h),bottomLeft:this.convertToGlobal(f.bottomLeft,h),bottomRight:this.convertToGlobal(f.bottomRight,h)}}}class j extends k{constructor(f,h,x){super(f,h),this.canvas=x,this.ctx=x.getContext("2d")}getContext(){return this.ctx}reload(){}drawFrame(){this.clear(),this.orientation!=="portrait"&&this.leftPage!=null&&this.leftPage.simpleDraw(0),this.rightPage!=null&&this.rightPage.simpleDraw(1),this.bottomPage!=null&&this.bottomPage.draw(),this.drawBookShadow(),this.flippingPage!=null&&this.flippingPage.draw(),this.shadow!=null&&(this.drawOuterShadow(),this.drawInnerShadow());const f=this.getRect();this.orientation==="portrait"&&(this.ctx.beginPath(),this.ctx.rect(f.left+f.pageWidth,f.top,f.width,f.height),this.ctx.clip())}drawBookShadow(){const f=this.getRect();this.ctx.save(),this.ctx.beginPath();const h=f.width/20;this.ctx.rect(f.left,f.top,f.width,f.height);const x={x:f.left+f.width/2-h/2,y:0};this.ctx.translate(x.x,x.y);const T=this.ctx.createLinearGradient(0,0,h,0);T.addColorStop(0,"rgba(0, 0, 0, 0)"),T.addColorStop(.4,"rgba(0, 0, 0, 0.2)"),T.addColorStop(.49,"rgba(0, 0, 0, 0.1)"),T.addColorStop(.5,"rgba(0, 0, 0, 0.5)"),T.addColorStop(.51,"rgba(0, 0, 0, 0.4)"),T.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.clip(),this.ctx.fillStyle=T,this.ctx.fillRect(0,0,h,2*f.height),this.ctx.restore()}drawOuterShadow(){const f=this.getRect();this.ctx.save(),this.ctx.beginPath(),this.ctx.rect(f.left,f.top,f.width,f.height);const h=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y});this.ctx.translate(h.x,h.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const x=this.ctx.createLinearGradient(0,0,this.shadow.width,0);this.shadow.direction===0?(this.ctx.translate(0,-100),x.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),x.addColorStop(1,"rgba(0, 0, 0, 0)")):(this.ctx.translate(-this.shadow.width,-100),x.addColorStop(0,"rgba(0, 0, 0, 0)"),x.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")")),this.ctx.clip(),this.ctx.fillStyle=x,this.ctx.fillRect(0,0,this.shadow.width,2*f.height),this.ctx.restore()}drawInnerShadow(){const f=this.getRect();this.ctx.save(),this.ctx.beginPath();const h=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),x=this.convertRectToGlobal(this.pageRect);this.ctx.moveTo(x.topLeft.x,x.topLeft.y),this.ctx.lineTo(x.topRight.x,x.topRight.y),this.ctx.lineTo(x.bottomRight.x,x.bottomRight.y),this.ctx.lineTo(x.bottomLeft.x,x.bottomLeft.y),this.ctx.translate(h.x,h.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const T=3*this.shadow.width/4,z=this.ctx.createLinearGradient(0,0,T,0);this.shadow.direction===0?(this.ctx.translate(-T,-100),z.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")"),z.addColorStop(.9,"rgba(0, 0, 0, 0.05)"),z.addColorStop(.7,"rgba(0, 0, 0, "+this.shadow.opacity+")"),z.addColorStop(0,"rgba(0, 0, 0, 0)")):(this.ctx.translate(0,-100),z.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),z.addColorStop(.1,"rgba(0, 0, 0, 0.05)"),z.addColorStop(.3,"rgba(0, 0, 0, "+this.shadow.opacity+")"),z.addColorStop(1,"rgba(0, 0, 0, 0)")),this.ctx.clip(),this.ctx.fillStyle=z,this.ctx.fillRect(0,0,T,2*f.height),this.ctx.restore()}clear(){this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}}class M{constructor(f,h,x){this.touchPoint=null,this.swipeTimeout=250,this.onResize=()=>{this.update()},this.onMouseDown=z=>{if(this.checkTarget(z.target)){const H=this.getMousePos(z.clientX,z.clientY);this.app.startUserTouch(H),z.preventDefault()}},this.onTouchStart=z=>{if(this.checkTarget(z.target)&&z.changedTouches.length>0){const H=z.changedTouches[0],v=this.getMousePos(H.clientX,H.clientY);this.touchPoint={point:v,time:Date.now()},setTimeout(()=>{this.touchPoint!==null&&this.app.startUserTouch(v)},this.swipeTimeout),this.app.getSettings().mobileScrollSupport||z.preventDefault()}},this.onMouseUp=z=>{const H=this.getMousePos(z.clientX,z.clientY);this.app.userStop(H)},this.onMouseMove=z=>{const H=this.getMousePos(z.clientX,z.clientY);this.app.userMove(H,!1)},this.onTouchMove=z=>{if(z.changedTouches.length>0){const H=z.changedTouches[0],v=this.getMousePos(H.clientX,H.clientY);this.app.getSettings().mobileScrollSupport?(this.touchPoint!==null&&(Math.abs(this.touchPoint.point.x-v.x)>10||this.app.getState()!=="read")&&z.cancelable&&this.app.userMove(v,!0),this.app.getState()!=="read"&&z.preventDefault()):this.app.userMove(v,!0)}},this.onTouchEnd=z=>{if(z.changedTouches.length>0){const H=z.changedTouches[0],v=this.getMousePos(H.clientX,H.clientY);let Y=!1;if(this.touchPoint!==null){const tt=v.x-this.touchPoint.point.x,nt=Math.abs(v.y-this.touchPoint.point.y);Math.abs(tt)>this.swipeDistance&&nt<2*this.swipeDistance&&Date.now()-this.touchPoint.time<this.swipeTimeout&&(tt>0?this.app.flipPrev(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"):this.app.flipNext(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"),Y=!0),this.touchPoint=null}this.app.userStop(v,Y)}},this.parentElement=f,f.classList.add("stf__parent"),f.insertAdjacentHTML("afterbegin",'<div class="stf__wrapper"></div>'),this.wrapper=f.querySelector(".stf__wrapper"),this.app=h;const T=this.app.getSettings().usePortrait?1:2;f.style.minWidth=x.minWidth*T+"px",f.style.minHeight=x.minHeight+"px",x.size==="fixed"&&(f.style.minWidth=x.width*T+"px",f.style.minHeight=x.height+"px"),x.autoSize&&(f.style.width="100%",f.style.maxWidth=2*x.maxWidth+"px"),f.style.display="block",window.addEventListener("resize",this.onResize,!1),this.swipeDistance=x.swipeDistance}destroy(){this.app.getSettings().useMouseEvents&&this.removeHandlers(),this.distElement.remove(),this.wrapper.remove()}getDistElement(){return this.distElement}getWrapper(){return this.wrapper}setOrientationStyle(f){this.wrapper.classList.remove("--portrait","--landscape"),f==="portrait"?(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/this.app.getSettings().width*100+"%"),this.wrapper.classList.add("--portrait")):(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/(2*this.app.getSettings().width)*100+"%"),this.wrapper.classList.add("--landscape")),this.update()}removeHandlers(){window.removeEventListener("resize",this.onResize),this.distElement.removeEventListener("mousedown",this.onMouseDown),this.distElement.removeEventListener("touchstart",this.onTouchStart),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("touchend",this.onTouchEnd)}setHandlers(){window.addEventListener("resize",this.onResize,!1),this.app.getSettings().useMouseEvents&&(this.distElement.addEventListener("mousedown",this.onMouseDown),this.distElement.addEventListener("touchstart",this.onTouchStart),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!this.app.getSettings().mobileScrollSupport}),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("touchend",this.onTouchEnd))}getMousePos(f,h){const x=this.distElement.getBoundingClientRect();return{x:f-x.left,y:h-x.top}}checkTarget(f){return!this.app.getSettings().clickEventForward||!["a","button"].includes(f.tagName.toLowerCase())}}class w extends M{constructor(f,h,x,T){super(f,h,x),this.wrapper.insertAdjacentHTML("afterbegin",'<div class="stf__block"></div>'),this.distElement=f.querySelector(".stf__block"),this.items=T;for(const z of T)this.distElement.appendChild(z);this.setHandlers()}clear(){for(const f of this.items)this.parentElement.appendChild(f)}updateItems(f){this.removeHandlers(),this.distElement.innerHTML="";for(const h of f)this.distElement.appendChild(h);this.items=f,this.setHandlers()}update(){this.app.getRender().update()}}class $ extends M{constructor(f,h,x){super(f,h,x),this.wrapper.innerHTML='<canvas class="stf__canvas"></canvas>',this.canvas=f.querySelectorAll("canvas")[0],this.distElement=this.canvas,this.resizeCanvas(),this.setHandlers()}resizeCanvas(){const f=getComputedStyle(this.canvas),h=parseInt(f.getPropertyValue("width"),10),x=parseInt(f.getPropertyValue("height"),10);this.canvas.width=h,this.canvas.height=x}getCanvas(){return this.canvas}update(){this.resizeCanvas(),this.app.getRender().update()}}class Q extends k{constructor(f,h,x){super(f,h),this.outerShadow=null,this.innerShadow=null,this.hardShadow=null,this.hardInnerShadow=null,this.element=x,this.createShadows()}createShadows(){this.element.insertAdjacentHTML("beforeend",`<div class="stf__outerShadow"></div>
             <div class="stf__innerShadow"></div>
             <div class="stf__hardShadow"></div>
             <div class="stf__hardInnerShadow"></div>`),this.outerShadow=this.element.querySelector(".stf__outerShadow"),this.innerShadow=this.element.querySelector(".stf__innerShadow"),this.hardShadow=this.element.querySelector(".stf__hardShadow"),this.hardInnerShadow=this.element.querySelector(".stf__hardInnerShadow")}clearShadow(){super.clearShadow(),this.outerShadow.style.cssText="display: none",this.innerShadow.style.cssText="display: none",this.hardShadow.style.cssText="display: none",this.hardInnerShadow.style.cssText="display: none"}reload(){this.element.querySelector(".stf__outerShadow")||this.createShadows()}drawHardInnerShadow(){const f=this.getRect(),h=this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress;let x=(100-h)*(2.5*f.pageWidth)/100+20;x>f.pageWidth&&(x=f.pageWidth);let T=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+5).toString(10)};
            width: ${x}px;
            height: ${f.height}px;
            background: linear-gradient(to right,
                rgba(0, 0, 0, ${this.shadow.opacity*h/100}) 5%,
                rgba(0, 0, 0, 0) 100%);
            left: ${f.left+f.width/2}px;
            transform-origin: 0 0;
        `;T+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0);":"transform: translate3d(0, 0, 0) rotateY(180deg);",this.hardInnerShadow.style.cssText=T}drawHardOuterShadow(){const f=this.getRect();let h=(100-(this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress))*(2.5*f.pageWidth)/100+20;h>f.pageWidth&&(h=f.pageWidth);let x=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+4).toString(10)};
            width: ${h}px;
            height: ${f.height}px;
            background: linear-gradient(to left, rgba(0, 0, 0, ${this.shadow.opacity}) 5%, rgba(0, 0, 0, 0) 100%);
            left: ${f.left+f.width/2}px;
            transform-origin: 0 0;
        `;x+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0) rotateY(180deg);":"transform: translate3d(0, 0, 0);",this.hardShadow.style.cssText=x}drawInnerShadow(){const f=this.getRect(),h=3*this.shadow.width/4,x=this.getDirection()===0?h:0,T=this.getDirection()===0?"to left":"to right",z=this.convertToGlobal(this.shadow.pos),H=this.shadow.angle+3*Math.PI/2,v=[this.pageRect.topLeft,this.pageRect.topRight,this.pageRect.bottomRight,this.pageRect.bottomLeft];let Y="polygon( ";for(const nt of v){let wt=this.getDirection()===1?{x:-nt.x+this.shadow.pos.x,y:nt.y-this.shadow.pos.y}:{x:nt.x-this.shadow.pos.x,y:nt.y-this.shadow.pos.y};wt=y.GetRotatedPoint(wt,{x,y:100},H),Y+=wt.x+"px "+wt.y+"px, "}Y=Y.slice(0,-2),Y+=")";const tt=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${h}px;
            height: ${2*f.height}px;
            background: linear-gradient(${T},
                rgba(0, 0, 0, ${this.shadow.opacity}) 5%,
                rgba(0, 0, 0, 0.05) 15%,
                rgba(0, 0, 0, ${this.shadow.opacity}) 35%,
                rgba(0, 0, 0, 0) 100%);
            transform-origin: ${x}px 100px;
            transform: translate3d(${z.x-x}px, ${z.y-100}px, 0) rotate(${H}rad);
            clip-path: ${Y};
            -webkit-clip-path: ${Y};
        `;this.innerShadow.style.cssText=tt}drawOuterShadow(){const f=this.getRect(),h=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),x=this.shadow.angle+3*Math.PI/2,T=this.getDirection()===1?this.shadow.width:0,z=this.getDirection()===0?"to right":"to left",H=[{x:0,y:0},{x:f.pageWidth,y:0},{x:f.pageWidth,y:f.height},{x:0,y:f.height}];let v="polygon( ";for(const tt of H)if(tt!==null){let nt=this.getDirection()===1?{x:-tt.x+this.shadow.pos.x,y:tt.y-this.shadow.pos.y}:{x:tt.x-this.shadow.pos.x,y:tt.y-this.shadow.pos.y};nt=y.GetRotatedPoint(nt,{x:T,y:100},x),v+=nt.x+"px "+nt.y+"px, "}v=v.slice(0,-2),v+=")";const Y=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2*f.height}px;
            background: linear-gradient(${z}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));
            transform-origin: ${T}px 100px;
            transform: translate3d(${h.x-T}px, ${h.y-100}px, 0) rotate(${x}rad);
            clip-path: ${v};
            -webkit-clip-path: ${v};
        `;this.outerShadow.style.cssText=Y}drawLeftPage(){this.orientation!=="portrait"&&this.leftPage!==null&&(this.direction===1&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.leftPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.leftPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.leftPage.draw(this.flippingPage.getDrawingDensity())):this.leftPage.simpleDraw(0))}drawRightPage(){this.rightPage!==null&&(this.direction===0&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.rightPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.rightPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.rightPage.draw(this.flippingPage.getDrawingDensity())):this.rightPage.simpleDraw(1))}drawBottomPage(){if(this.bottomPage===null)return;const f=this.flippingPage!=null?this.flippingPage.getDrawingDensity():null;this.orientation==="portrait"&&this.direction===1||(this.bottomPage.getElement().style.zIndex=(this.getSettings().startZIndex+3).toString(10),this.bottomPage.draw(f))}drawFrame(){this.clear(),this.drawLeftPage(),this.drawRightPage(),this.drawBottomPage(),this.flippingPage!=null&&(this.flippingPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.flippingPage.draw()),this.shadow!=null&&this.flippingPage!==null&&(this.flippingPage.getDrawingDensity()==="soft"?(this.drawOuterShadow(),this.drawInnerShadow()):(this.drawHardOuterShadow(),this.drawHardInnerShadow()))}clear(){for(const f of this.app.getPageCollection().getPages())f!==this.leftPage&&f!==this.rightPage&&f!==this.flippingPage&&f!==this.bottomPage&&(f.getElement().style.cssText="display: none"),f.getTemporaryCopy()!==this.flippingPage&&f.hideTemporaryCopy()}update(){super.update(),this.rightPage!==null&&this.rightPage.setOrientation(1),this.leftPage!==null&&this.leftPage.setOrientation(0)}}class W{constructor(){this._default={startPage:0,size:"fixed",width:0,height:0,minWidth:0,maxWidth:0,minHeight:0,maxHeight:0,drawShadow:!0,flippingTime:1e3,usePortrait:!0,startZIndex:0,autoSize:!0,maxShadowOpacity:1,showCover:!1,mobileScrollSupport:!0,swipeDistance:30,clickEventForward:!0,useMouseEvents:!0,showPageCorners:!0,disableFlipByClick:!1}}getSettings(f){const h=this._default;if(Object.assign(h,f),h.size!=="stretch"&&h.size!=="fixed")throw new Error('Invalid size type. Available only "fixed" and "stretch" value');if(h.width<=0||h.height<=0)throw new Error("Invalid width or height");if(h.flippingTime<=0)throw new Error("Invalid flipping time");return h.size==="stretch"?(h.minWidth<=0&&(h.minWidth=100),h.maxWidth<h.minWidth&&(h.maxWidth=2e3),h.minHeight<=0&&(h.minHeight=100),h.maxHeight<h.minHeight&&(h.maxHeight=2e3)):(h.minWidth=h.width,h.maxWidth=h.width,h.minHeight=h.height,h.maxHeight=h.height),h}}(function(_,f){f===void 0&&(f={});var h=f.insertAt;if(typeof document<"u"){var x=document.head||document.getElementsByTagName("head")[0],T=document.createElement("style");T.type="text/css",h==="top"&&x.firstChild?x.insertBefore(T,x.firstChild):x.appendChild(T),T.styleSheet?T.styleSheet.cssText=_:T.appendChild(document.createTextNode(_))}})(`.stf__parent {
  position: relative;
  display: block;
  box-sizing: border-box;
  transform: translateZ(0);

  -ms-touch-action: pan-y;
  touch-action: pan-y;
}

.sft__wrapper {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.stf__parent canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.stf__block {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  perspective: 2000px;
}

.stf__item {
  display: none;
  position: absolute;
  transform-style: preserve-3d;
}

.stf__outerShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__innerShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__hardShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__hardInnerShadow {
  position: absolute;
  left: 0;
  top: 0;
}`),o.PageFlip=class extends class{constructor(){this.events=new Map}on(_,f){return this.events.has(_)?this.events.get(_).push(f):this.events.set(_,[f]),this}off(_){this.events.delete(_)}trigger(_,f,h=null){if(this.events.has(_))for(const x of this.events.get(_))x({data:h,object:f})}}{constructor(_,f){super(),this.isUserTouch=!1,this.isUserMove=!1,this.setting=null,this.pages=null,this.setting=new W().getSettings(f),this.block=_}destroy(){this.ui.destroy(),this.block.remove()}update(){this.render.update(),this.pages.show()}loadFromImages(_){this.ui=new $(this.block,this,this.setting);const f=this.ui.getCanvas();this.render=new j(this,this.setting,f),this.flipController=new C(this.render,this),this.pages=new g(this,this.render,_),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}loadFromHTML(_){this.ui=new w(this.block,this,this.setting,_),this.render=new Q(this,this.setting,this.ui.getDistElement()),this.flipController=new C(this.render,this),this.pages=new b(this,this.render,this.ui.getDistElement(),_),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}updateFromImages(_){const f=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new g(this,this.render,_),this.pages.load(),this.pages.show(f),this.trigger("update",this,{page:f,mode:this.render.getOrientation()})}updateFromHtml(_){const f=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new b(this,this.render,this.ui.getDistElement(),_),this.pages.load(),this.ui.updateItems(_),this.render.reload(),this.pages.show(f),this.trigger("update",this,{page:f,mode:this.render.getOrientation()})}clear(){this.pages.destroy(),this.ui.clear()}turnToPrevPage(){this.pages.showPrev()}turnToNextPage(){this.pages.showNext()}turnToPage(_){this.pages.show(_)}flipNext(_="top"){this.flipController.flipNext(_)}flipPrev(_="top"){this.flipController.flipPrev(_)}flip(_,f="top"){this.flipController.flipToPage(_,f)}updateState(_){this.trigger("changeState",this,_)}updatePageIndex(_){this.trigger("flip",this,_)}updateOrientation(_){this.ui.setOrientationStyle(_),this.update(),this.trigger("changeOrientation",this,_)}getPageCount(){return this.pages.getPageCount()}getCurrentPageIndex(){return this.pages.getCurrentPageIndex()}getPage(_){return this.pages.getPage(_)}getRender(){return this.render}getFlipController(){return this.flipController}getOrientation(){return this.render.getOrientation()}getBoundsRect(){return this.render.getRect()}getSettings(){return this.setting}getUI(){return this.ui}getState(){return this.flipController.getState()}getPageCollection(){return this.pages}startUserTouch(_){this.mousePosition=_,this.isUserTouch=!0,this.isUserMove=!1}userMove(_,f){this.isUserTouch||f||!this.setting.showPageCorners?this.isUserTouch&&y.GetDistanceBetweenTwoPoint(this.mousePosition,_)>5&&(this.isUserMove=!0,this.flipController.fold(_)):this.flipController.showCorner(_)}userStop(_,f=!1){this.isUserTouch&&(this.isUserTouch=!1,f||(this.isUserMove?this.flipController.stopMove():this.flipController.flip(_)))}},Object.defineProperty(o,"__esModule",{value:!0})})}(ll,ll.exports)),ll.exports}var vv=yv();const xv=qt.forwardRef((a,i)=>{const o=K.useRef(null),s=K.useRef([]),c=K.useRef(),[d,g]=K.useState([]);K.useImperativeHandle(i,()=>({pageFlip:()=>c.current}));const y=K.useCallback(()=>{c.current&&c.current.clear()},[]),S=K.useCallback(()=>{const b=c.current;b&&(b.off("flip"),b.off("changeOrientation"),b.off("changeState"),b.off("init"),b.off("update"))},[]);return K.useEffect(()=>{if(s.current=[],a.children){const b=qt.Children.map(a.children,O=>qt.cloneElement(O,{ref:C=>{C&&s.current.push(C)}}));(!a.renderOnlyPageLengthChange||d.length!==b.length)&&(b.length<d.length&&y(),g(b))}},[a.children]),K.useEffect(()=>{const b=()=>{const O=c.current;O&&(a.onFlip&&O.on("flip",C=>a.onFlip(C)),a.onChangeOrientation&&O.on("changeOrientation",C=>a.onChangeOrientation(C)),a.onChangeState&&O.on("changeState",C=>a.onChangeState(C)),a.onInit&&O.on("init",C=>a.onInit(C)),a.onUpdate&&O.on("update",C=>a.onUpdate(C)))};d.length>0&&s.current.length>0&&(S(),o.current&&!c.current&&(c.current=new vv.PageFlip(o.current,a)),c.current.getFlipController()?c.current.updateFromHtml(s.current):c.current.loadFromHTML(s.current),b())},[d]),qt.createElement("div",{ref:o,className:a.className,style:a.style},d)}),Sv=qt.memo(xv),wv=K.forwardRef((a,i)=>{const{key:o,src:s,width:c,height:d,isEven:g}=a,[y,S]=K.useState(null);return K.useEffect(()=>{const b=new Image;b.src=s,b.onload=()=>S(s)},[s]),J.jsxs("div",{className:"page",ref:i,children:[y&&J.jsx("img",{src:y,style:{width:c,height:d}}),J.jsx("div",{className:`overlay ${g?"left":"right"}`})]},o)}),mg=K.forwardRef((a,i)=>{const{width:o,height:s,src:c}=a;return J.jsx("div",{className:"page page-cover","data-density":"hard",ref:i,children:J.jsx("img",{src:c,style:{width:o,height:s}})})}),bg=({ariaLabel:a,isDisabled:i,children:o,onClick:s})=>J.jsx("button",{type:"button",onClick:s,className:`button-circle ${i?"disabled":""}`,tabIndex:-1,onMouseDown:c=>c.preventDefault(),"aria-label":a,children:o}),yg=a=>a,Tv=()=>{let a=yg;return{configure(i){a=i},generate(i){return a(i)},reset(){a=yg}}},Ov=Tv();function Ja(a,...i){const o=new URL(`https://mui.com/production-error/?code=${a}`);return i.forEach(s=>o.searchParams.append("args[]",s)),`Minified MUI error #${a}; visit ${o} for the full message.`}function we(a){if(typeof a!="string")throw new Error(Ja(7));return a.charAt(0).toUpperCase()+a.slice(1)}function bm(a){var i,o,s="";if(typeof a=="string"||typeof a=="number")s+=a;else if(typeof a=="object")if(Array.isArray(a)){var c=a.length;for(i=0;i<c;i++)a[i]&&(o=bm(a[i]))&&(s&&(s+=" "),s+=o)}else for(o in a)a[o]&&(s&&(s+=" "),s+=o);return s}function ke(){for(var a,i,o=0,s="",c=arguments.length;o<c;o++)(a=arguments[o])&&(i=bm(a))&&(s&&(s+=" "),s+=i);return s}function gs(a,i,o=void 0){const s={};for(const c in a){const d=a[c];let g="",y=!0;for(let S=0;S<d.length;S+=1){const b=d[S];b&&(g+=(y===!0?"":" ")+i(b),y=!1,o&&o[b]&&(g+=" "+o[b]))}s[c]=g}return s}var nf={exports:{}},Nt={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg;function Av(){if(vg)return Nt;vg=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),g=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),b=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),k=Symbol.for("react.view_transition"),j=Symbol.for("react.client.reference");function M(w){if(typeof w=="object"&&w!==null){var $=w.$$typeof;switch($){case a:switch(w=w.type,w){case o:case c:case s:case S:case b:case k:return w;default:switch(w=w&&w.$$typeof,w){case g:case y:case C:case O:return w;case d:return w;default:return $}}case i:return $}}}return Nt.ContextConsumer=d,Nt.ContextProvider=g,Nt.Element=a,Nt.ForwardRef=y,Nt.Fragment=o,Nt.Lazy=C,Nt.Memo=O,Nt.Portal=i,Nt.Profiler=c,Nt.StrictMode=s,Nt.Suspense=S,Nt.SuspenseList=b,Nt.isContextConsumer=function(w){return M(w)===d},Nt.isContextProvider=function(w){return M(w)===g},Nt.isElement=function(w){return typeof w=="object"&&w!==null&&w.$$typeof===a},Nt.isForwardRef=function(w){return M(w)===y},Nt.isFragment=function(w){return M(w)===o},Nt.isLazy=function(w){return M(w)===C},Nt.isMemo=function(w){return M(w)===O},Nt.isPortal=function(w){return M(w)===i},Nt.isProfiler=function(w){return M(w)===c},Nt.isStrictMode=function(w){return M(w)===s},Nt.isSuspense=function(w){return M(w)===S},Nt.isSuspenseList=function(w){return M(w)===b},Nt.isValidElementType=function(w){return typeof w=="string"||typeof w=="function"||w===o||w===c||w===s||w===S||w===b||typeof w=="object"&&w!==null&&(w.$$typeof===C||w.$$typeof===O||w.$$typeof===g||w.$$typeof===d||w.$$typeof===y||w.$$typeof===j||w.getModuleId!==void 0)},Nt.typeOf=M,Nt}var xg;function Ev(){return xg||(xg=1,nf.exports=Av()),nf.exports}var ym=Ev();function Vn(a){if(typeof a!="object"||a===null)return!1;const i=Object.getPrototypeOf(a);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(Symbol.toStringTag in a)&&!(Symbol.iterator in a)}function vm(a){if(K.isValidElement(a)||ym.isValidElementType(a)||!Vn(a))return a;const i={};return Object.keys(a).forEach(o=>{i[o]=vm(a[o])}),i}function Ve(a,i,o={clone:!0}){const s=o.clone?{...a}:a;return Vn(a)&&Vn(i)&&Object.keys(i).forEach(c=>{K.isValidElement(i[c])||ym.isValidElementType(i[c])?s[c]=i[c]:Vn(i[c])&&Object.prototype.hasOwnProperty.call(a,c)&&Vn(a[c])?s[c]=Ve(a[c],i[c],o):o.clone?s[c]=Vn(i[c])?vm(i[c]):i[c]:s[c]=i[c]}),s}function cl(a,i){return i?Ve(a,i,{clone:!1}):a}function Sg(a,i){if(!a.containerQueries)return i;const o=Object.keys(i).filter(s=>s.startsWith("@container")).sort((s,c)=>{const d=/min-width:\s*([0-9.]+)/;return+(s.match(d)?.[1]||0)-+(c.match(d)?.[1]||0)});return o.length?o.reduce((s,c)=>{const d=i[c];return delete s[c],s[c]=d,s},{...i}):i}function Cv(a,i){return i==="@"||i.startsWith("@")&&(a.some(o=>i.startsWith(`@${o}`))||!!i.match(/^@\d/))}function _v(a,i){const o=i.match(/^@([^/]+)?\/?(.+)?$/);if(!o)return null;const[,s,c]=o,d=Number.isNaN(+s)?s||0:+s;return a.containerQueries(c).up(d)}function Rv(a){const i=(d,g)=>d.replace("@media",g?`@container ${g}`:"@container");function o(d,g){d.up=(...y)=>i(a.breakpoints.up(...y),g),d.down=(...y)=>i(a.breakpoints.down(...y),g),d.between=(...y)=>i(a.breakpoints.between(...y),g),d.only=(...y)=>i(a.breakpoints.only(...y),g),d.not=(...y)=>{const S=i(a.breakpoints.not(...y),g);return S.includes("not all and")?S.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):S}}const s={},c=d=>(o(s,d),s);return o(c),{...a,containerQueries:c}}const ms={xs:0,sm:600,md:900,lg:1200,xl:1536},wg={keys:["xs","sm","md","lg","xl"],up:a=>`@media (min-width:${ms[a]}px)`},Mv={containerQueries:a=>({up:i=>{let o=typeof i=="number"?i:ms[i]||i;return typeof o=="number"&&(o=`${o}px`),a?`@container ${a} (min-width:${o})`:`@container (min-width:${o})`}})};function Zn(a,i,o){const s=a.theme||{};if(Array.isArray(i)){const d=s.breakpoints||wg;return i.reduce((g,y,S)=>(g[d.up(d.keys[S])]=o(i[S]),g),{})}if(typeof i=="object"){const d=s.breakpoints||wg;return Object.keys(i).reduce((g,y)=>{if(Cv(d.keys,y)){const S=_v(s.containerQueries?s:Mv,y);S&&(g[S]=o(i[y],y))}else if(Object.keys(d.values||ms).includes(y)){const S=d.up(y);g[S]=o(i[y],y)}else{const S=y;g[S]=i[S]}return g},{})}return o(i)}function kv(a={}){return a.keys?.reduce((o,s)=>{const c=a.up(s);return o[c]={},o},{})||{}}function Tg(a,i){return a.reduce((o,s)=>{const c=o[s];return(!c||Object.keys(c).length===0)&&delete o[s],o},i)}function bs(a,i,o=!0){if(!i||typeof i!="string")return null;if(a&&a.vars&&o){const s=`vars.${i}`.split(".").reduce((c,d)=>c&&c[d]?c[d]:null,a);if(s!=null)return s}return i.split(".").reduce((s,c)=>s&&s[c]!=null?s[c]:null,a)}function ls(a,i,o,s=o){let c;return typeof a=="function"?c=a(o):Array.isArray(a)?c=a[o]||s:c=bs(a,o)||s,i&&(c=i(c,s,a)),c}function Ft(a){const{prop:i,cssProperty:o=a.prop,themeKey:s,transform:c}=a,d=g=>{if(g[i]==null)return null;const y=g[i],S=g.theme,b=bs(S,s)||{};return Zn(g,y,C=>{let k=ls(b,c,C);return C===k&&typeof C=="string"&&(k=ls(b,c,`${i}${C==="default"?"":we(C)}`,C)),o===!1?k:{[o]:k}})};return d.propTypes={},d.filterProps=[i],d}function Dv(a){const i={};return o=>(i[o]===void 0&&(i[o]=a(o)),i[o])}const zv={m:"margin",p:"padding"},Pv={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Og={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},Bv=Dv(a=>{if(a.length>2)if(Og[a])a=Og[a];else return[a];const[i,o]=a.split(""),s=zv[i],c=Pv[o]||"";return Array.isArray(c)?c.map(d=>s+d):[s+c]}),$f=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],qf=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...$f,...qf];function vl(a,i,o,s){const c=bs(a,i,!0)??o;return typeof c=="number"||typeof c=="string"?d=>typeof d=="string"?d:typeof c=="string"?c.startsWith("var(")&&d===0?0:c.startsWith("var(")&&d===1?c:`calc(${d} * ${c})`:c*d:Array.isArray(c)?d=>{if(typeof d=="string")return d;const g=Math.abs(d),y=c[g];return d>=0?y:typeof y=="number"?-y:typeof y=="string"&&y.startsWith("var(")?`calc(-1 * ${y})`:`-${y}`}:typeof c=="function"?c:()=>{}}function Lf(a){return vl(a,"spacing",8)}function xl(a,i){return typeof i=="string"||i==null?i:a(i)}function Nv(a,i){return o=>a.reduce((s,c)=>(s[c]=xl(i,o),s),{})}function Hv(a,i,o,s){if(!i.includes(o))return null;const c=Bv(o),d=Nv(c,s),g=a[o];return Zn(a,g,d)}function xm(a,i){const o=Lf(a.theme);return Object.keys(a).map(s=>Hv(a,i,s,o)).reduce(cl,{})}function Kt(a){return xm(a,$f)}Kt.propTypes={};Kt.filterProps=$f;function Jt(a){return xm(a,qf)}Jt.propTypes={};Jt.filterProps=qf;function ys(...a){const i=a.reduce((s,c)=>(c.filterProps.forEach(d=>{s[d]=c}),s),{}),o=s=>Object.keys(s).reduce((c,d)=>i[d]?cl(c,i[d](s)):c,{});return o.propTypes={},o.filterProps=a.reduce((s,c)=>s.concat(c.filterProps),[]),o}function rn(a){return typeof a!="number"?a:`${a}px solid`}function on(a,i){return Ft({prop:a,themeKey:"borders",transform:i})}const Uv=on("border",rn),jv=on("borderTop",rn),$v=on("borderRight",rn),qv=on("borderBottom",rn),Lv=on("borderLeft",rn),Gv=on("borderColor"),Yv=on("borderTopColor"),Xv=on("borderRightColor"),Vv=on("borderBottomColor"),Zv=on("borderLeftColor"),Qv=on("outline",rn),Kv=on("outlineColor"),vs=a=>{if(a.borderRadius!==void 0&&a.borderRadius!==null){const i=vl(a.theme,"shape.borderRadius",4),o=s=>({borderRadius:xl(i,s)});return Zn(a,a.borderRadius,o)}return null};vs.propTypes={};vs.filterProps=["borderRadius"];ys(Uv,jv,$v,qv,Lv,Gv,Yv,Xv,Vv,Zv,vs,Qv,Kv);const xs=a=>{if(a.gap!==void 0&&a.gap!==null){const i=vl(a.theme,"spacing",8),o=s=>({gap:xl(i,s)});return Zn(a,a.gap,o)}return null};xs.propTypes={};xs.filterProps=["gap"];const Ss=a=>{if(a.columnGap!==void 0&&a.columnGap!==null){const i=vl(a.theme,"spacing",8),o=s=>({columnGap:xl(i,s)});return Zn(a,a.columnGap,o)}return null};Ss.propTypes={};Ss.filterProps=["columnGap"];const ws=a=>{if(a.rowGap!==void 0&&a.rowGap!==null){const i=vl(a.theme,"spacing",8),o=s=>({rowGap:xl(i,s)});return Zn(a,a.rowGap,o)}return null};ws.propTypes={};ws.filterProps=["rowGap"];const Jv=Ft({prop:"gridColumn"}),Wv=Ft({prop:"gridRow"}),Iv=Ft({prop:"gridAutoFlow"}),Fv=Ft({prop:"gridAutoColumns"}),t5=Ft({prop:"gridAutoRows"}),e5=Ft({prop:"gridTemplateColumns"}),n5=Ft({prop:"gridTemplateRows"}),a5=Ft({prop:"gridTemplateAreas"}),r5=Ft({prop:"gridArea"});ys(xs,Ss,ws,Jv,Wv,Iv,Fv,t5,e5,n5,a5,r5);function Xr(a,i){return i==="grey"?i:a}const i5=Ft({prop:"color",themeKey:"palette",transform:Xr}),l5=Ft({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Xr}),o5=Ft({prop:"backgroundColor",themeKey:"palette",transform:Xr});ys(i5,l5,o5);function Xe(a){return a<=1&&a!==0?`${a*100}%`:a}const s5=Ft({prop:"width",transform:Xe}),Gf=a=>{if(a.maxWidth!==void 0&&a.maxWidth!==null){const i=o=>{const s=a.theme?.breakpoints?.values?.[o]||ms[o];return s?a.theme?.breakpoints?.unit!=="px"?{maxWidth:`${s}${a.theme.breakpoints.unit}`}:{maxWidth:s}:{maxWidth:Xe(o)}};return Zn(a,a.maxWidth,i)}return null};Gf.filterProps=["maxWidth"];const u5=Ft({prop:"minWidth",transform:Xe}),c5=Ft({prop:"height",transform:Xe}),f5=Ft({prop:"maxHeight",transform:Xe}),d5=Ft({prop:"minHeight",transform:Xe});Ft({prop:"size",cssProperty:"width",transform:Xe});Ft({prop:"size",cssProperty:"height",transform:Xe});const h5=Ft({prop:"boxSizing"});ys(s5,Gf,u5,c5,f5,d5,h5);const Ts={border:{themeKey:"borders",transform:rn},borderTop:{themeKey:"borders",transform:rn},borderRight:{themeKey:"borders",transform:rn},borderBottom:{themeKey:"borders",transform:rn},borderLeft:{themeKey:"borders",transform:rn},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:rn},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:vs},color:{themeKey:"palette",transform:Xr},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Xr},backgroundColor:{themeKey:"palette",transform:Xr},p:{style:Jt},pt:{style:Jt},pr:{style:Jt},pb:{style:Jt},pl:{style:Jt},px:{style:Jt},py:{style:Jt},padding:{style:Jt},paddingTop:{style:Jt},paddingRight:{style:Jt},paddingBottom:{style:Jt},paddingLeft:{style:Jt},paddingX:{style:Jt},paddingY:{style:Jt},paddingInline:{style:Jt},paddingInlineStart:{style:Jt},paddingInlineEnd:{style:Jt},paddingBlock:{style:Jt},paddingBlockStart:{style:Jt},paddingBlockEnd:{style:Jt},m:{style:Kt},mt:{style:Kt},mr:{style:Kt},mb:{style:Kt},ml:{style:Kt},mx:{style:Kt},my:{style:Kt},margin:{style:Kt},marginTop:{style:Kt},marginRight:{style:Kt},marginBottom:{style:Kt},marginLeft:{style:Kt},marginX:{style:Kt},marginY:{style:Kt},marginInline:{style:Kt},marginInlineStart:{style:Kt},marginInlineEnd:{style:Kt},marginBlock:{style:Kt},marginBlockStart:{style:Kt},marginBlockEnd:{style:Kt},displayPrint:{cssProperty:!1,transform:a=>({"@media print":{display:a}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:xs},rowGap:{style:ws},columnGap:{style:Ss},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Xe},maxWidth:{style:Gf},minWidth:{transform:Xe},height:{transform:Xe},maxHeight:{transform:Xe},minHeight:{transform:Xe},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function p5(...a){const i=a.reduce((s,c)=>s.concat(Object.keys(c)),[]),o=new Set(i);return a.every(s=>o.size===Object.keys(s).length)}function g5(a,i){return typeof a=="function"?a(i):a}function m5(){function a(o,s,c,d){const g={[o]:s,theme:c},y=d[o];if(!y)return{[o]:s};const{cssProperty:S=o,themeKey:b,transform:O,style:C}=y;if(s==null)return null;if(b==="typography"&&s==="inherit")return{[o]:s};const k=bs(c,b)||{};return C?C(g):Zn(g,s,M=>{let w=ls(k,O,M);return M===w&&typeof M=="string"&&(w=ls(k,O,`${o}${M==="default"?"":we(M)}`,M)),S===!1?w:{[S]:w}})}function i(o){const{sx:s,theme:c={},nested:d}=o||{};if(!s)return null;const g=c.unstable_sxConfig??Ts;function y(S){let b=S;if(typeof S=="function")b=S(c);else if(typeof S!="object")return S;if(!b)return null;const O=kv(c.breakpoints),C=Object.keys(O);let k=O;return Object.keys(b).forEach(j=>{const M=g5(b[j],c);if(M!=null)if(typeof M=="object")if(g[j])k=cl(k,a(j,M,c,g));else{const w=Zn({theme:c},M,$=>({[j]:$}));p5(w,M)?k[j]=i({sx:M,theme:c,nested:!0}):k=cl(k,w)}else k=cl(k,a(j,M,c,g))}),!d&&c.modularCssLayers?{"@layer sx":Sg(c,Tg(C,k))}:Sg(c,Tg(C,k))}return Array.isArray(s)?s.map(y):y(s)}return i}const Zr=m5();Zr.filterProps=["sx"];function os(){return os=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var s in o)({}).hasOwnProperty.call(o,s)&&(a[s]=o[s])}return a},os.apply(null,arguments)}function b5(a){if(a.sheet)return a.sheet;for(var i=0;i<document.styleSheets.length;i++)if(document.styleSheets[i].ownerNode===a)return document.styleSheets[i]}function y5(a){var i=document.createElement("style");return i.setAttribute("data-emotion",a.key),a.nonce!==void 0&&i.setAttribute("nonce",a.nonce),i.appendChild(document.createTextNode("")),i.setAttribute("data-s",""),i}var v5=function(){function a(o){var s=this;this._insertTag=function(c){var d;s.tags.length===0?s.insertionPoint?d=s.insertionPoint.nextSibling:s.prepend?d=s.container.firstChild:d=s.before:d=s.tags[s.tags.length-1].nextSibling,s.container.insertBefore(c,d),s.tags.push(c)},this.isSpeedy=o.speedy===void 0?!0:o.speedy,this.tags=[],this.ctr=0,this.nonce=o.nonce,this.key=o.key,this.container=o.container,this.prepend=o.prepend,this.insertionPoint=o.insertionPoint,this.before=null}var i=a.prototype;return i.hydrate=function(s){s.forEach(this._insertTag)},i.insert=function(s){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(y5(this));var c=this.tags[this.tags.length-1];if(this.isSpeedy){var d=b5(c);try{d.insertRule(s,d.cssRules.length)}catch{}}else c.appendChild(document.createTextNode(s));this.ctr++},i.flush=function(){this.tags.forEach(function(s){var c;return(c=s.parentNode)==null?void 0:c.removeChild(s)}),this.tags=[],this.ctr=0},a}(),Se="-ms-",ss="-moz-",Ct="-webkit-",Sm="comm",Yf="rule",Xf="decl",x5="@import",wm="@keyframes",S5="@layer",w5=Math.abs,Os=String.fromCharCode,T5=Object.assign;function O5(a,i){return be(a,0)^45?(((i<<2^be(a,0))<<2^be(a,1))<<2^be(a,2))<<2^be(a,3):0}function Tm(a){return a.trim()}function A5(a,i){return(a=i.exec(a))?a[0]:a}function _t(a,i,o){return a.replace(i,o)}function bf(a,i){return a.indexOf(i)}function be(a,i){return a.charCodeAt(i)|0}function dl(a,i,o){return a.slice(i,o)}function Sn(a){return a.length}function Vf(a){return a.length}function Yo(a,i){return i.push(a),a}function E5(a,i){return a.map(i).join("")}var As=1,Qr=1,Om=0,ze=0,ae=0,ti="";function Es(a,i,o,s,c,d,g){return{value:a,root:i,parent:o,type:s,props:c,children:d,line:As,column:Qr,length:g,return:""}}function al(a,i){return T5(Es("",null,null,"",null,null,0),a,{length:-a.length},i)}function C5(){return ae}function _5(){return ae=ze>0?be(ti,--ze):0,Qr--,ae===10&&(Qr=1,As--),ae}function Ze(){return ae=ze<Om?be(ti,ze++):0,Qr++,ae===10&&(Qr=1,As++),ae}function An(){return be(ti,ze)}function Ko(){return ze}function Sl(a,i){return dl(ti,a,i)}function hl(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Am(a){return As=Qr=1,Om=Sn(ti=a),ze=0,[]}function Em(a){return ti="",a}function Jo(a){return Tm(Sl(ze-1,yf(a===91?a+2:a===40?a+1:a)))}function R5(a){for(;(ae=An())&&ae<33;)Ze();return hl(a)>2||hl(ae)>3?"":" "}function M5(a,i){for(;--i&&Ze()&&!(ae<48||ae>102||ae>57&&ae<65||ae>70&&ae<97););return Sl(a,Ko()+(i<6&&An()==32&&Ze()==32))}function yf(a){for(;Ze();)switch(ae){case a:return ze;case 34:case 39:a!==34&&a!==39&&yf(ae);break;case 40:a===41&&yf(a);break;case 92:Ze();break}return ze}function k5(a,i){for(;Ze()&&a+ae!==57;)if(a+ae===84&&An()===47)break;return"/*"+Sl(i,ze-1)+"*"+Os(a===47?a:Ze())}function D5(a){for(;!hl(An());)Ze();return Sl(a,ze)}function z5(a){return Em(Wo("",null,null,null,[""],a=Am(a),0,[0],a))}function Wo(a,i,o,s,c,d,g,y,S){for(var b=0,O=0,C=g,k=0,j=0,M=0,w=1,$=1,Q=1,W=0,_="",f=c,h=d,x=s,T=_;$;)switch(M=W,W=Ze()){case 40:if(M!=108&&be(T,C-1)==58){bf(T+=_t(Jo(W),"&","&\f"),"&\f")!=-1&&(Q=-1);break}case 34:case 39:case 91:T+=Jo(W);break;case 9:case 10:case 13:case 32:T+=R5(M);break;case 92:T+=M5(Ko()-1,7);continue;case 47:switch(An()){case 42:case 47:Yo(P5(k5(Ze(),Ko()),i,o),S);break;default:T+="/"}break;case 123*w:y[b++]=Sn(T)*Q;case 125*w:case 59:case 0:switch(W){case 0:case 125:$=0;case 59+O:Q==-1&&(T=_t(T,/\f/g,"")),j>0&&Sn(T)-C&&Yo(j>32?Eg(T+";",s,o,C-1):Eg(_t(T," ","")+";",s,o,C-2),S);break;case 59:T+=";";default:if(Yo(x=Ag(T,i,o,b,O,c,y,_,f=[],h=[],C),d),W===123)if(O===0)Wo(T,i,x,x,f,d,C,y,h);else switch(k===99&&be(T,3)===110?100:k){case 100:case 108:case 109:case 115:Wo(a,x,x,s&&Yo(Ag(a,x,x,0,0,c,y,_,c,f=[],C),h),c,h,C,y,s?f:h);break;default:Wo(T,x,x,x,[""],h,0,y,h)}}b=O=j=0,w=Q=1,_=T="",C=g;break;case 58:C=1+Sn(T),j=M;default:if(w<1){if(W==123)--w;else if(W==125&&w++==0&&_5()==125)continue}switch(T+=Os(W),W*w){case 38:Q=O>0?1:(T+="\f",-1);break;case 44:y[b++]=(Sn(T)-1)*Q,Q=1;break;case 64:An()===45&&(T+=Jo(Ze())),k=An(),O=C=Sn(_=T+=D5(Ko())),W++;break;case 45:M===45&&Sn(T)==2&&(w=0)}}return d}function Ag(a,i,o,s,c,d,g,y,S,b,O){for(var C=c-1,k=c===0?d:[""],j=Vf(k),M=0,w=0,$=0;M<s;++M)for(var Q=0,W=dl(a,C+1,C=w5(w=g[M])),_=a;Q<j;++Q)(_=Tm(w>0?k[Q]+" "+W:_t(W,/&\f/g,k[Q])))&&(S[$++]=_);return Es(a,i,o,c===0?Yf:y,S,b,O)}function P5(a,i,o){return Es(a,i,o,Sm,Os(C5()),dl(a,2,-2),0)}function Eg(a,i,o,s){return Es(a,i,o,Xf,dl(a,0,s),dl(a,s+1,-1),s)}function Vr(a,i){for(var o="",s=Vf(a),c=0;c<s;c++)o+=i(a[c],c,a,i)||"";return o}function B5(a,i,o,s){switch(a.type){case S5:if(a.children.length)break;case x5:case Xf:return a.return=a.return||a.value;case Sm:return"";case wm:return a.return=a.value+"{"+Vr(a.children,s)+"}";case Yf:a.value=a.props.join(",")}return Sn(o=Vr(a.children,s))?a.return=a.value+"{"+o+"}":""}function N5(a){var i=Vf(a);return function(o,s,c,d){for(var g="",y=0;y<i;y++)g+=a[y](o,s,c,d)||"";return g}}function H5(a){return function(i){i.root||(i=i.return)&&a(i)}}var U5=function(i,o,s){for(var c=0,d=0;c=d,d=An(),c===38&&d===12&&(o[s]=1),!hl(d);)Ze();return Sl(i,ze)},j5=function(i,o){var s=-1,c=44;do switch(hl(c)){case 0:c===38&&An()===12&&(o[s]=1),i[s]+=U5(ze-1,o,s);break;case 2:i[s]+=Jo(c);break;case 4:if(c===44){i[++s]=An()===58?"&\f":"",o[s]=i[s].length;break}default:i[s]+=Os(c)}while(c=Ze());return i},$5=function(i,o){return Em(j5(Am(i),o))},Cg=new WeakMap,q5=function(i){if(!(i.type!=="rule"||!i.parent||i.length<1)){for(var o=i.value,s=i.parent,c=i.column===s.column&&i.line===s.line;s.type!=="rule";)if(s=s.parent,!s)return;if(!(i.props.length===1&&o.charCodeAt(0)!==58&&!Cg.get(s))&&!c){Cg.set(i,!0);for(var d=[],g=$5(o,d),y=s.props,S=0,b=0;S<g.length;S++)for(var O=0;O<y.length;O++,b++)i.props[b]=d[S]?g[S].replace(/&\f/g,y[O]):y[O]+" "+g[S]}}},L5=function(i){if(i.type==="decl"){var o=i.value;o.charCodeAt(0)===108&&o.charCodeAt(2)===98&&(i.return="",i.value="")}};function Cm(a,i){switch(O5(a,i)){case 5103:return Ct+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ct+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Ct+a+ss+a+Se+a+a;case 6828:case 4268:return Ct+a+Se+a+a;case 6165:return Ct+a+Se+"flex-"+a+a;case 5187:return Ct+a+_t(a,/(\w+).+(:[^]+)/,Ct+"box-$1$2"+Se+"flex-$1$2")+a;case 5443:return Ct+a+Se+"flex-item-"+_t(a,/flex-|-self/,"")+a;case 4675:return Ct+a+Se+"flex-line-pack"+_t(a,/align-content|flex-|-self/,"")+a;case 5548:return Ct+a+Se+_t(a,"shrink","negative")+a;case 5292:return Ct+a+Se+_t(a,"basis","preferred-size")+a;case 6060:return Ct+"box-"+_t(a,"-grow","")+Ct+a+Se+_t(a,"grow","positive")+a;case 4554:return Ct+_t(a,/([^-])(transform)/g,"$1"+Ct+"$2")+a;case 6187:return _t(_t(_t(a,/(zoom-|grab)/,Ct+"$1"),/(image-set)/,Ct+"$1"),a,"")+a;case 5495:case 3959:return _t(a,/(image-set\([^]*)/,Ct+"$1$`$1");case 4968:return _t(_t(a,/(.+:)(flex-)?(.*)/,Ct+"box-pack:$3"+Se+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ct+a+a;case 4095:case 3583:case 4068:case 2532:return _t(a,/(.+)-inline(.+)/,Ct+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Sn(a)-1-i>6)switch(be(a,i+1)){case 109:if(be(a,i+4)!==45)break;case 102:return _t(a,/(.+:)(.+)-([^]+)/,"$1"+Ct+"$2-$3$1"+ss+(be(a,i+3)==108?"$3":"$2-$3"))+a;case 115:return~bf(a,"stretch")?Cm(_t(a,"stretch","fill-available"),i)+a:a}break;case 4949:if(be(a,i+1)!==115)break;case 6444:switch(be(a,Sn(a)-3-(~bf(a,"!important")&&10))){case 107:return _t(a,":",":"+Ct)+a;case 101:return _t(a,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Ct+(be(a,14)===45?"inline-":"")+"box$3$1"+Ct+"$2$3$1"+Se+"$2box$3")+a}break;case 5936:switch(be(a,i+11)){case 114:return Ct+a+Se+_t(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Ct+a+Se+_t(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Ct+a+Se+_t(a,/[svh]\w+-[tblr]{2}/,"lr")+a}return Ct+a+Se+a+a}return a}var G5=function(i,o,s,c){if(i.length>-1&&!i.return)switch(i.type){case Xf:i.return=Cm(i.value,i.length);break;case wm:return Vr([al(i,{value:_t(i.value,"@","@"+Ct)})],c);case Yf:if(i.length)return E5(i.props,function(d){switch(A5(d,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Vr([al(i,{props:[_t(d,/:(read-\w+)/,":"+ss+"$1")]})],c);case"::placeholder":return Vr([al(i,{props:[_t(d,/:(plac\w+)/,":"+Ct+"input-$1")]}),al(i,{props:[_t(d,/:(plac\w+)/,":"+ss+"$1")]}),al(i,{props:[_t(d,/:(plac\w+)/,Se+"input-$1")]})],c)}return""})}},Y5=[G5],X5=function(i){var o=i.key;if(o==="css"){var s=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(s,function(w){var $=w.getAttribute("data-emotion");$.indexOf(" ")!==-1&&(document.head.appendChild(w),w.setAttribute("data-s",""))})}var c=i.stylisPlugins||Y5,d={},g,y=[];g=i.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+o+' "]'),function(w){for(var $=w.getAttribute("data-emotion").split(" "),Q=1;Q<$.length;Q++)d[$[Q]]=!0;y.push(w)});var S,b=[q5,L5];{var O,C=[B5,H5(function(w){O.insert(w)})],k=N5(b.concat(c,C)),j=function($){return Vr(z5($),k)};S=function($,Q,W,_){O=W,j($?$+"{"+Q.styles+"}":Q.styles),_&&(M.inserted[Q.name]=!0)}}var M={key:o,sheet:new v5({key:o,container:g,nonce:i.nonce,speedy:i.speedy,prepend:i.prepend,insertionPoint:i.insertionPoint}),nonce:i.nonce,inserted:d,registered:{},insert:S};return M.sheet.hydrate(y),M},af={exports:{}},Rt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function V5(){if(_g)return Rt;_g=1;var a=typeof Symbol=="function"&&Symbol.for,i=a?Symbol.for("react.element"):60103,o=a?Symbol.for("react.portal"):60106,s=a?Symbol.for("react.fragment"):60107,c=a?Symbol.for("react.strict_mode"):60108,d=a?Symbol.for("react.profiler"):60114,g=a?Symbol.for("react.provider"):60109,y=a?Symbol.for("react.context"):60110,S=a?Symbol.for("react.async_mode"):60111,b=a?Symbol.for("react.concurrent_mode"):60111,O=a?Symbol.for("react.forward_ref"):60112,C=a?Symbol.for("react.suspense"):60113,k=a?Symbol.for("react.suspense_list"):60120,j=a?Symbol.for("react.memo"):60115,M=a?Symbol.for("react.lazy"):60116,w=a?Symbol.for("react.block"):60121,$=a?Symbol.for("react.fundamental"):60117,Q=a?Symbol.for("react.responder"):60118,W=a?Symbol.for("react.scope"):60119;function _(h){if(typeof h=="object"&&h!==null){var x=h.$$typeof;switch(x){case i:switch(h=h.type,h){case S:case b:case s:case d:case c:case C:return h;default:switch(h=h&&h.$$typeof,h){case y:case O:case M:case j:case g:return h;default:return x}}case o:return x}}}function f(h){return _(h)===b}return Rt.AsyncMode=S,Rt.ConcurrentMode=b,Rt.ContextConsumer=y,Rt.ContextProvider=g,Rt.Element=i,Rt.ForwardRef=O,Rt.Fragment=s,Rt.Lazy=M,Rt.Memo=j,Rt.Portal=o,Rt.Profiler=d,Rt.StrictMode=c,Rt.Suspense=C,Rt.isAsyncMode=function(h){return f(h)||_(h)===S},Rt.isConcurrentMode=f,Rt.isContextConsumer=function(h){return _(h)===y},Rt.isContextProvider=function(h){return _(h)===g},Rt.isElement=function(h){return typeof h=="object"&&h!==null&&h.$$typeof===i},Rt.isForwardRef=function(h){return _(h)===O},Rt.isFragment=function(h){return _(h)===s},Rt.isLazy=function(h){return _(h)===M},Rt.isMemo=function(h){return _(h)===j},Rt.isPortal=function(h){return _(h)===o},Rt.isProfiler=function(h){return _(h)===d},Rt.isStrictMode=function(h){return _(h)===c},Rt.isSuspense=function(h){return _(h)===C},Rt.isValidElementType=function(h){return typeof h=="string"||typeof h=="function"||h===s||h===b||h===d||h===c||h===C||h===k||typeof h=="object"&&h!==null&&(h.$$typeof===M||h.$$typeof===j||h.$$typeof===g||h.$$typeof===y||h.$$typeof===O||h.$$typeof===$||h.$$typeof===Q||h.$$typeof===W||h.$$typeof===w)},Rt.typeOf=_,Rt}var Rg;function Z5(){return Rg||(Rg=1,af.exports=V5()),af.exports}var rf,Mg;function Q5(){if(Mg)return rf;Mg=1;var a=Z5(),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},d={};d[a.ForwardRef]=s,d[a.Memo]=c;function g(M){return a.isMemo(M)?c:d[M.$$typeof]||i}var y=Object.defineProperty,S=Object.getOwnPropertyNames,b=Object.getOwnPropertySymbols,O=Object.getOwnPropertyDescriptor,C=Object.getPrototypeOf,k=Object.prototype;function j(M,w,$){if(typeof w!="string"){if(k){var Q=C(w);Q&&Q!==k&&j(M,Q,$)}var W=S(w);b&&(W=W.concat(b(w)));for(var _=g(M),f=g(w),h=0;h<W.length;++h){var x=W[h];if(!o[x]&&!($&&$[x])&&!(f&&f[x])&&!(_&&_[x])){var T=O(w,x);try{y(M,x,T)}catch{}}}}return M}return rf=j,rf}Q5();var K5=!0;function _m(a,i,o){var s="";return o.split(" ").forEach(function(c){a[c]!==void 0?i.push(a[c]+";"):c&&(s+=c+" ")}),s}var Zf=function(i,o,s){var c=i.key+"-"+o.name;(s===!1||K5===!1)&&i.registered[c]===void 0&&(i.registered[c]=o.styles)},Rm=function(i,o,s){Zf(i,o,s);var c=i.key+"-"+o.name;if(i.inserted[o.name]===void 0){var d=o;do i.insert(o===d?"."+c:"",d,i.sheet,!0),d=d.next;while(d!==void 0)}};function J5(a){for(var i=0,o,s=0,c=a.length;c>=4;++s,c-=4)o=a.charCodeAt(s)&255|(a.charCodeAt(++s)&255)<<8|(a.charCodeAt(++s)&255)<<16|(a.charCodeAt(++s)&255)<<24,o=(o&65535)*1540483477+((o>>>16)*59797<<16),o^=o>>>24,i=(o&65535)*1540483477+((o>>>16)*59797<<16)^(i&65535)*1540483477+((i>>>16)*59797<<16);switch(c){case 3:i^=(a.charCodeAt(s+2)&255)<<16;case 2:i^=(a.charCodeAt(s+1)&255)<<8;case 1:i^=a.charCodeAt(s)&255,i=(i&65535)*1540483477+((i>>>16)*59797<<16)}return i^=i>>>13,i=(i&65535)*1540483477+((i>>>16)*59797<<16),((i^i>>>15)>>>0).toString(36)}var W5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function I5(a){var i=Object.create(null);return function(o){return i[o]===void 0&&(i[o]=a(o)),i[o]}}var F5=/[A-Z]|^ms/g,tx=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Mm=function(i){return i.charCodeAt(1)===45},kg=function(i){return i!=null&&typeof i!="boolean"},lf=I5(function(a){return Mm(a)?a:a.replace(F5,"-$&").toLowerCase()}),Dg=function(i,o){switch(i){case"animation":case"animationName":if(typeof o=="string")return o.replace(tx,function(s,c,d){return wn={name:c,styles:d,next:wn},c})}return W5[i]!==1&&!Mm(i)&&typeof o=="number"&&o!==0?o+"px":o};function pl(a,i,o){if(o==null)return"";var s=o;if(s.__emotion_styles!==void 0)return s;switch(typeof o){case"boolean":return"";case"object":{var c=o;if(c.anim===1)return wn={name:c.name,styles:c.styles,next:wn},c.name;var d=o;if(d.styles!==void 0){var g=d.next;if(g!==void 0)for(;g!==void 0;)wn={name:g.name,styles:g.styles,next:wn},g=g.next;var y=d.styles+";";return y}return ex(a,i,o)}case"function":{if(a!==void 0){var S=wn,b=o(a);return wn=S,pl(a,i,b)}break}}var O=o;if(i==null)return O;var C=i[O];return C!==void 0?C:O}function ex(a,i,o){var s="";if(Array.isArray(o))for(var c=0;c<o.length;c++)s+=pl(a,i,o[c])+";";else for(var d in o){var g=o[d];if(typeof g!="object"){var y=g;i!=null&&i[y]!==void 0?s+=d+"{"+i[y]+"}":kg(y)&&(s+=lf(d)+":"+Dg(d,y)+";")}else if(Array.isArray(g)&&typeof g[0]=="string"&&(i==null||i[g[0]]===void 0))for(var S=0;S<g.length;S++)kg(g[S])&&(s+=lf(d)+":"+Dg(d,g[S])+";");else{var b=pl(a,i,g);switch(d){case"animation":case"animationName":{s+=lf(d)+":"+b+";";break}default:s+=d+"{"+b+"}"}}}return s}var zg=/label:\s*([^\s;{]+)\s*(;|$)/g,wn;function Cs(a,i,o){if(a.length===1&&typeof a[0]=="object"&&a[0]!==null&&a[0].styles!==void 0)return a[0];var s=!0,c="";wn=void 0;var d=a[0];if(d==null||d.raw===void 0)s=!1,c+=pl(o,i,d);else{var g=d;c+=g[0]}for(var y=1;y<a.length;y++)if(c+=pl(o,i,a[y]),s){var S=d;c+=S[y]}zg.lastIndex=0;for(var b="",O;(O=zg.exec(c))!==null;)b+="-"+O[1];var C=J5(c)+b;return{name:C,styles:c,next:wn}}var nx=function(i){return i()},ax=gf.useInsertionEffect?gf.useInsertionEffect:!1,km=ax||nx,Dm=K.createContext(typeof HTMLElement<"u"?X5({key:"css"}):null);Dm.Provider;var zm=function(i){return K.forwardRef(function(o,s){var c=K.useContext(Dm);return i(o,c,s)})},Pm=K.createContext({}),Qf={}.hasOwnProperty,vf="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",rx=function(i,o){var s={};for(var c in o)Qf.call(o,c)&&(s[c]=o[c]);return s[vf]=i,s},ix=function(i){var o=i.cache,s=i.serialized,c=i.isStringTag;return Zf(o,s,c),km(function(){return Rm(o,s,c)}),null},lx=zm(function(a,i,o){var s=a.css;typeof s=="string"&&i.registered[s]!==void 0&&(s=i.registered[s]);var c=a[vf],d=[s],g="";typeof a.className=="string"?g=_m(i.registered,d,a.className):a.className!=null&&(g=a.className+" ");var y=Cs(d,void 0,K.useContext(Pm));g+=i.key+"-"+y.name;var S={};for(var b in a)Qf.call(a,b)&&b!=="css"&&b!==vf&&(S[b]=a[b]);return S.className=g,o&&(S.ref=o),K.createElement(K.Fragment,null,K.createElement(ix,{cache:i,serialized:y,isStringTag:typeof c=="string"}),K.createElement(c,S))}),ox=lx,Pg=function(i,o){var s=arguments;if(o==null||!Qf.call(o,"css"))return K.createElement.apply(void 0,s);var c=s.length,d=new Array(c);d[0]=ox,d[1]=rx(i,o);for(var g=2;g<c;g++)d[g]=s[g];return K.createElement.apply(null,d)};(function(a){var i;i||(i=a.JSX||(a.JSX={}))})(Pg||(Pg={}));function Kf(){for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return Cs(i)}function wl(){var a=Kf.apply(void 0,arguments),i="animation-"+a.name;return{name:i,styles:"@keyframes "+i+"{"+a.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function sx(a){var i=Object.create(null);return function(o){return i[o]===void 0&&(i[o]=a(o)),i[o]}}var ux=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,cx=sx(function(a){return ux.test(a)||a.charCodeAt(0)===111&&a.charCodeAt(1)===110&&a.charCodeAt(2)<91}),fx=cx,dx=function(i){return i!=="theme"},Bg=function(i){return typeof i=="string"&&i.charCodeAt(0)>96?fx:dx},Ng=function(i,o,s){var c;if(o){var d=o.shouldForwardProp;c=i.__emotion_forwardProp&&d?function(g){return i.__emotion_forwardProp(g)&&d(g)}:d}return typeof c!="function"&&s&&(c=i.__emotion_forwardProp),c},hx=function(i){var o=i.cache,s=i.serialized,c=i.isStringTag;return Zf(o,s,c),km(function(){return Rm(o,s,c)}),null},px=function a(i,o){var s=i.__emotion_real===i,c=s&&i.__emotion_base||i,d,g;o!==void 0&&(d=o.label,g=o.target);var y=Ng(i,o,s),S=y||Bg(c),b=!S("as");return function(){var O=arguments,C=s&&i.__emotion_styles!==void 0?i.__emotion_styles.slice(0):[];if(d!==void 0&&C.push("label:"+d+";"),O[0]==null||O[0].raw===void 0)C.push.apply(C,O);else{var k=O[0];C.push(k[0]);for(var j=O.length,M=1;M<j;M++)C.push(O[M],k[M])}var w=zm(function($,Q,W){var _=b&&$.as||c,f="",h=[],x=$;if($.theme==null){x={};for(var T in $)x[T]=$[T];x.theme=K.useContext(Pm)}typeof $.className=="string"?f=_m(Q.registered,h,$.className):$.className!=null&&(f=$.className+" ");var z=Cs(C.concat(h),Q.registered,x);f+=Q.key+"-"+z.name,g!==void 0&&(f+=" "+g);var H=b&&y===void 0?Bg(_):S,v={};for(var Y in $)b&&Y==="as"||H(Y)&&(v[Y]=$[Y]);return v.className=f,W&&(v.ref=W),K.createElement(K.Fragment,null,K.createElement(hx,{cache:Q,serialized:z,isStringTag:typeof _=="string"}),K.createElement(_,v))});return w.displayName=d!==void 0?d:"Styled("+(typeof c=="string"?c:c.displayName||c.name||"Component")+")",w.defaultProps=i.defaultProps,w.__emotion_real=w,w.__emotion_base=c,w.__emotion_styles=C,w.__emotion_forwardProp=y,Object.defineProperty(w,"toString",{value:function(){return"."+g}}),w.withComponent=function($,Q){var W=a($,os({},o,Q,{shouldForwardProp:Ng(w,Q,!0)}));return W.apply(void 0,C)},w}},gx=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],xf=px.bind(null);gx.forEach(function(a){xf[a]=xf(a)});function mx(a,i){return xf(a,i)}function bx(a,i){Array.isArray(a.__emotion_styles)&&(a.__emotion_styles=i(a.__emotion_styles))}const Hg=[];function Za(a){return Hg[0]=a,Cs(Hg)}const yx=a=>{const i=Object.keys(a).map(o=>({key:o,val:a[o]}))||[];return i.sort((o,s)=>o.val-s.val),i.reduce((o,s)=>({...o,[s.key]:s.val}),{})};function vx(a){const{values:i={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:o="px",step:s=5,...c}=a,d=yx(i),g=Object.keys(d);function y(k){return`@media (min-width:${typeof i[k]=="number"?i[k]:k}${o})`}function S(k){return`@media (max-width:${(typeof i[k]=="number"?i[k]:k)-s/100}${o})`}function b(k,j){const M=g.indexOf(j);return`@media (min-width:${typeof i[k]=="number"?i[k]:k}${o}) and (max-width:${(M!==-1&&typeof i[g[M]]=="number"?i[g[M]]:j)-s/100}${o})`}function O(k){return g.indexOf(k)+1<g.length?b(k,g[g.indexOf(k)+1]):y(k)}function C(k){const j=g.indexOf(k);return j===0?y(g[1]):j===g.length-1?S(g[j]):b(k,g[g.indexOf(k)+1]).replace("@media","@media not all and")}return{keys:g,values:d,up:y,down:S,between:b,only:O,not:C,unit:o,...c}}const xx={borderRadius:4};function Bm(a=8,i=Lf({spacing:a})){if(a.mui)return a;const o=(...s)=>(s.length===0?[1]:s).map(d=>{const g=i(d);return typeof g=="number"?`${g}px`:g}).join(" ");return o.mui=!0,o}function Sx(a,i){const o=this;if(o.vars){if(!o.colorSchemes?.[a]||typeof o.getColorSchemeSelector!="function")return{};let s=o.getColorSchemeSelector(a);return s==="&"?i:((s.includes("data-")||s.includes("."))&&(s=`*:where(${s.replace(/\s*&$/,"")}) &`),{[s]:i})}return o.palette.mode===a?i:{}}function Nm(a={},...i){const{breakpoints:o={},palette:s={},spacing:c,shape:d={},...g}=a,y=vx(o),S=Bm(c);let b=Ve({breakpoints:y,direction:"ltr",components:{},palette:{mode:"light",...s},spacing:S,shape:{...xx,...d}},g);return b=Rv(b),b.applyStyles=Sx,b=i.reduce((O,C)=>Ve(O,C),b),b.unstable_sxConfig={...Ts,...g?.unstable_sxConfig},b.unstable_sx=function(C){return Zr({sx:C,theme:this})},b}const wx={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Tl(a,i,o="Mui"){const s=wx[i];return s?`${o}-${s}`:`${Ov.generate(a)}-${i}`}function Ol(a,i,o="Mui"){const s={};return i.forEach(c=>{s[c]=Tl(a,c,o)}),s}function Hm(a){const{variants:i,...o}=a,s={variants:i,style:Za(o),isProcessed:!0};return s.style===o||i&&i.forEach(c=>{typeof c.style!="function"&&(c.style=Za(c.style))}),s}const Tx=Nm();function of(a){return a!=="ownerState"&&a!=="theme"&&a!=="sx"&&a!=="as"}function Ya(a,i){return i&&a&&typeof a=="object"&&a.styles&&!a.styles.startsWith("@layer")&&(a.styles=`@layer ${i}{${String(a.styles)}}`),a}function Ox(a){return a?(i,o)=>o[a]:null}function Ax(a,i,o){a.theme=_x(a.theme)?o:a.theme[i]||a.theme}function Io(a,i,o){const s=typeof i=="function"?i(a):i;if(Array.isArray(s))return s.flatMap(c=>Io(a,c,o));if(Array.isArray(s?.variants)){let c;if(s.isProcessed)c=o?Ya(s.style,o):s.style;else{const{variants:d,...g}=s;c=o?Ya(Za(g),o):g}return Um(a,s.variants,[c],o)}return s?.isProcessed?o?Ya(Za(s.style),o):s.style:o?Ya(Za(s),o):s}function Um(a,i,o=[],s=void 0){let c;t:for(let d=0;d<i.length;d+=1){const g=i[d];if(typeof g.props=="function"){if(c??={...a,...a.ownerState,ownerState:a.ownerState},!g.props(c))continue}else for(const y in g.props)if(a[y]!==g.props[y]&&a.ownerState?.[y]!==g.props[y])continue t;typeof g.style=="function"?(c??={...a,...a.ownerState,ownerState:a.ownerState},o.push(s?Ya(Za(g.style(c)),s):g.style(c))):o.push(s?Ya(Za(g.style),s):g.style)}return o}function Ex(a={}){const{themeId:i,defaultTheme:o=Tx,rootShouldForwardProp:s=of,slotShouldForwardProp:c=of}=a;function d(y){Ax(y,i,o)}return(y,S={})=>{bx(y,x=>x.filter(T=>T!==Zr));const{name:b,slot:O,skipVariantsResolver:C,skipSx:k,overridesResolver:j=Ox(Mx(O)),...M}=S,w=b&&b.startsWith("Mui")||O?"components":"custom",$=C!==void 0?C:O&&O!=="Root"&&O!=="root"||!1,Q=k||!1;let W=of;O==="Root"||O==="root"?W=s:O?W=c:Rx(y)&&(W=void 0);const _=mx(y,{shouldForwardProp:W,label:Cx(),...M}),f=x=>{if(x.__emotion_real===x)return x;if(typeof x=="function")return function(z){return Io(z,x,z.theme.modularCssLayers?w:void 0)};if(Vn(x)){const T=Hm(x);return function(H){return T.variants?Io(H,T,H.theme.modularCssLayers?w:void 0):H.theme.modularCssLayers?Ya(T.style,w):T.style}}return x},h=(...x)=>{const T=[],z=x.map(f),H=[];if(T.push(d),b&&j&&H.push(function(nt){const ht=nt.theme.components?.[b]?.styleOverrides;if(!ht)return null;const q={};for(const I in ht)q[I]=Io(nt,ht[I],nt.theme.modularCssLayers?"theme":void 0);return j(nt,q)}),b&&!$&&H.push(function(nt){const ht=nt.theme?.components?.[b]?.variants;return ht?Um(nt,ht,[],nt.theme.modularCssLayers?"theme":void 0):null}),Q||H.push(Zr),Array.isArray(z[0])){const tt=z.shift(),nt=new Array(T.length).fill(""),wt=new Array(H.length).fill("");let ht;ht=[...nt,...tt,...wt],ht.raw=[...nt,...tt.raw,...wt],T.unshift(ht)}const v=[...T,...z,...H],Y=_(...v);return y.muiName&&(Y.muiName=y.muiName),Y};return _.withConfig&&(h.withConfig=_.withConfig),h}}function Cx(a,i){return void 0}function _x(a){for(const i in a)return!1;return!0}function Rx(a){return typeof a=="string"&&a.charCodeAt(0)>96}function Mx(a){return a&&a.charAt(0).toLowerCase()+a.slice(1)}function Sf(a,i,o=!1){const s={...i};for(const c in a)if(Object.prototype.hasOwnProperty.call(a,c)){const d=c;if(d==="components"||d==="slots")s[d]={...a[d],...s[d]};else if(d==="componentsProps"||d==="slotProps"){const g=a[d],y=i[d];if(!y)s[d]=g||{};else if(!g)s[d]=y;else{s[d]={...y};for(const S in g)if(Object.prototype.hasOwnProperty.call(g,S)){const b=S;s[d][b]=Sf(g[b],y[b],o)}}}else d==="className"&&o&&i.className?s.className=ke(a?.className,i?.className):d==="style"&&o&&i.style?s.style={...a?.style,...i?.style}:s[d]===void 0&&(s[d]=a[d])}return s}const kx=typeof window<"u"?K.useLayoutEffect:K.useEffect;function Dx(a,i=Number.MIN_SAFE_INTEGER,o=Number.MAX_SAFE_INTEGER){return Math.max(i,Math.min(a,o))}function Jf(a,i=0,o=1){return Dx(a,i,o)}function zx(a){a=a.slice(1);const i=new RegExp(`.{1,${a.length>=6?2:1}}`,"g");let o=a.match(i);return o&&o[0].length===1&&(o=o.map(s=>s+s)),o?`rgb${o.length===4?"a":""}(${o.map((s,c)=>c<3?parseInt(s,16):Math.round(parseInt(s,16)/255*1e3)/1e3).join(", ")})`:""}function wa(a){if(a.type)return a;if(a.charAt(0)==="#")return wa(zx(a));const i=a.indexOf("("),o=a.substring(0,i);if(!["rgb","rgba","hsl","hsla","color"].includes(o))throw new Error(Ja(9,a));let s=a.substring(i+1,a.length-1),c;if(o==="color"){if(s=s.split(" "),c=s.shift(),s.length===4&&s[3].charAt(0)==="/"&&(s[3]=s[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(c))throw new Error(Ja(10,c))}else s=s.split(",");return s=s.map(d=>parseFloat(d)),{type:o,values:s,colorSpace:c}}const Px=a=>{const i=wa(a);return i.values.slice(0,3).map((o,s)=>i.type.includes("hsl")&&s!==0?`${o}%`:o).join(" ")},ol=(a,i)=>{try{return Px(a)}catch{return a}};function _s(a){const{type:i,colorSpace:o}=a;let{values:s}=a;return i.includes("rgb")?s=s.map((c,d)=>d<3?parseInt(c,10):c):i.includes("hsl")&&(s[1]=`${s[1]}%`,s[2]=`${s[2]}%`),i.includes("color")?s=`${o} ${s.join(" ")}`:s=`${s.join(", ")}`,`${i}(${s})`}function jm(a){a=wa(a);const{values:i}=a,o=i[0],s=i[1]/100,c=i[2]/100,d=s*Math.min(c,1-c),g=(b,O=(b+o/30)%12)=>c-d*Math.max(Math.min(O-3,9-O,1),-1);let y="rgb";const S=[Math.round(g(0)*255),Math.round(g(8)*255),Math.round(g(4)*255)];return a.type==="hsla"&&(y+="a",S.push(i[3])),_s({type:y,values:S})}function wf(a){a=wa(a);let i=a.type==="hsl"||a.type==="hsla"?wa(jm(a)).values:a.values;return i=i.map(o=>(a.type!=="color"&&(o/=255),o<=.03928?o/12.92:((o+.055)/1.055)**2.4)),Number((.2126*i[0]+.7152*i[1]+.0722*i[2]).toFixed(3))}function Bx(a,i){const o=wf(a),s=wf(i);return(Math.max(o,s)+.05)/(Math.min(o,s)+.05)}function Tf(a,i){return a=wa(a),i=Jf(i),(a.type==="rgb"||a.type==="hsl")&&(a.type+="a"),a.type==="color"?a.values[3]=`/${i}`:a.values[3]=i,_s(a)}function Xo(a,i,o){try{return Tf(a,i)}catch{return a}}function Wf(a,i){if(a=wa(a),i=Jf(i),a.type.includes("hsl"))a.values[2]*=1-i;else if(a.type.includes("rgb")||a.type.includes("color"))for(let o=0;o<3;o+=1)a.values[o]*=1-i;return _s(a)}function Ut(a,i,o){try{return Wf(a,i)}catch{return a}}function If(a,i){if(a=wa(a),i=Jf(i),a.type.includes("hsl"))a.values[2]+=(100-a.values[2])*i;else if(a.type.includes("rgb"))for(let o=0;o<3;o+=1)a.values[o]+=(255-a.values[o])*i;else if(a.type.includes("color"))for(let o=0;o<3;o+=1)a.values[o]+=(1-a.values[o])*i;return _s(a)}function jt(a,i,o){try{return If(a,i)}catch{return a}}function Nx(a,i=.15){return wf(a)>.5?Wf(a,i):If(a,i)}function Vo(a,i,o){try{return Nx(a,i)}catch{return a}}const Hx=K.createContext(void 0);function Ux(a){const{theme:i,name:o,props:s}=a;if(!i||!i.components||!i.components[o])return s;const c=i.components[o];return c.defaultProps?Sf(c.defaultProps,s,i.components.mergeClassNameAndStyle):!c.styleOverrides&&!c.variants?Sf(c,s,i.components.mergeClassNameAndStyle):s}function jx({props:a,name:i}){const o=K.useContext(Hx);return Ux({props:a,name:i,theme:{components:o}})}let Ug=0;function $x(a){const[i,o]=K.useState(a),s=a||i;return K.useEffect(()=>{i==null&&(Ug+=1,o(`mui-${Ug}`))},[i]),s}const qx={...gf},jg=qx.useId;function Lx(a){if(jg!==void 0){const i=jg();return a??i}return $x(a)}const $g={theme:void 0};function Gx(a){let i,o;return function(c){let d=i;return(d===void 0||c.theme!==o)&&($g.theme=c.theme,d=Hm(a($g)),i=d,o=c.theme),d}}function Yx(a=""){function i(...s){if(!s.length)return"";const c=s[0];return typeof c=="string"&&!c.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${a?`${a}-`:""}${c}${i(...s.slice(1))})`:`, ${c}`}return(s,...c)=>`var(--${a?`${a}-`:""}${s}${i(...c)})`}const qg=(a,i,o,s=[])=>{let c=a;i.forEach((d,g)=>{g===i.length-1?Array.isArray(c)?c[Number(d)]=o:c&&typeof c=="object"&&(c[d]=o):c&&typeof c=="object"&&(c[d]||(c[d]=s.includes(d)?[]:{}),c=c[d])})},Xx=(a,i,o)=>{function s(c,d=[],g=[]){Object.entries(c).forEach(([y,S])=>{(!o||o&&!o([...d,y]))&&S!=null&&(typeof S=="object"&&Object.keys(S).length>0?s(S,[...d,y],Array.isArray(S)?[...g,y]:g):i([...d,y],S,g))})}s(a)},Vx=(a,i)=>typeof i=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(s=>a.includes(s))||a[a.length-1].toLowerCase().includes("opacity")?i:`${i}px`:i;function sf(a,i){const{prefix:o,shouldSkipGeneratingVar:s}=i||{},c={},d={},g={};return Xx(a,(y,S,b)=>{if((typeof S=="string"||typeof S=="number")&&(!s||!s(y,S))){const O=`--${o?`${o}-`:""}${y.join("-")}`,C=Vx(y,S);Object.assign(c,{[O]:C}),qg(d,y,`var(${O})`,b),qg(g,y,`var(${O}, ${C})`,b)}},y=>y[0]==="vars"),{css:c,vars:d,varsWithDefaults:g}}function Zx(a,i={}){const{getSelector:o=$,disableCssColorScheme:s,colorSchemeSelector:c}=i,{colorSchemes:d={},components:g,defaultColorScheme:y="light",...S}=a,{vars:b,css:O,varsWithDefaults:C}=sf(S,i);let k=C;const j={},{[y]:M,...w}=d;if(Object.entries(w||{}).forEach(([_,f])=>{const{vars:h,css:x,varsWithDefaults:T}=sf(f,i);k=Ve(k,T),j[_]={css:x,vars:h}}),M){const{css:_,vars:f,varsWithDefaults:h}=sf(M,i);k=Ve(k,h),j[y]={css:_,vars:f}}function $(_,f){let h=c;if(c==="class"&&(h=".%s"),c==="data"&&(h="[data-%s]"),c?.startsWith("data-")&&!c.includes("%s")&&(h=`[${c}="%s"]`),_){if(h==="media")return a.defaultColorScheme===_?":root":{[`@media (prefers-color-scheme: ${d[_]?.palette?.mode||_})`]:{":root":f}};if(h)return a.defaultColorScheme===_?`:root, ${h.replace("%s",String(_))}`:h.replace("%s",String(_))}return":root"}return{vars:k,generateThemeVars:()=>{let _={...b};return Object.entries(j).forEach(([,{vars:f}])=>{_=Ve(_,f)}),_},generateStyleSheets:()=>{const _=[],f=a.defaultColorScheme||"light";function h(z,H){Object.keys(H).length&&_.push(typeof z=="string"?{[z]:{...H}}:z)}h(o(void 0,{...O}),O);const{[f]:x,...T}=j;if(x){const{css:z}=x,H=d[f]?.palette?.mode,v=!s&&H?{colorScheme:H,...z}:{...z};h(o(f,{...v}),v)}return Object.entries(T).forEach(([z,{css:H}])=>{const v=d[z]?.palette?.mode,Y=!s&&v?{colorScheme:v,...H}:{...H};h(o(z,{...Y}),Y)}),_}}}function Qx(a){return function(o){return a==="media"?`@media (prefers-color-scheme: ${o})`:a?a.startsWith("data-")&&!a.includes("%s")?`[${a}="${o}"] &`:a==="class"?`.${o} &`:a==="data"?`[data-${o}] &`:`${a.replace("%s",o)} &`:"&"}}const gl={black:"#000",white:"#fff"},Kx={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Ur={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},jr={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},rl={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},$r={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},qr={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},Lr={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"};function $m(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:gl.white,default:gl.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const Jx=$m();function qm(){return{text:{primary:gl.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:gl.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const Lg=qm();function Gg(a,i,o,s){const c=s.light||s,d=s.dark||s*1.5;a[i]||(a.hasOwnProperty(o)?a[i]=a[o]:i==="light"?a.light=If(a.main,c):i==="dark"&&(a.dark=Wf(a.main,d)))}function Wx(a="light"){return a==="dark"?{main:$r[200],light:$r[50],dark:$r[400]}:{main:$r[700],light:$r[400],dark:$r[800]}}function Ix(a="light"){return a==="dark"?{main:Ur[200],light:Ur[50],dark:Ur[400]}:{main:Ur[500],light:Ur[300],dark:Ur[700]}}function Fx(a="light"){return a==="dark"?{main:jr[500],light:jr[300],dark:jr[700]}:{main:jr[700],light:jr[400],dark:jr[800]}}function tS(a="light"){return a==="dark"?{main:qr[400],light:qr[300],dark:qr[700]}:{main:qr[700],light:qr[500],dark:qr[900]}}function eS(a="light"){return a==="dark"?{main:Lr[400],light:Lr[300],dark:Lr[700]}:{main:Lr[800],light:Lr[500],dark:Lr[900]}}function nS(a="light"){return a==="dark"?{main:rl[400],light:rl[300],dark:rl[700]}:{main:"#ed6c02",light:rl[500],dark:rl[900]}}function Ff(a){const{mode:i="light",contrastThreshold:o=3,tonalOffset:s=.2,...c}=a,d=a.primary||Wx(i),g=a.secondary||Ix(i),y=a.error||Fx(i),S=a.info||tS(i),b=a.success||eS(i),O=a.warning||nS(i);function C(w){return Bx(w,Lg.text.primary)>=o?Lg.text.primary:Jx.text.primary}const k=({color:w,name:$,mainShade:Q=500,lightShade:W=300,darkShade:_=700})=>{if(w={...w},!w.main&&w[Q]&&(w.main=w[Q]),!w.hasOwnProperty("main"))throw new Error(Ja(11,$?` (${$})`:"",Q));if(typeof w.main!="string")throw new Error(Ja(12,$?` (${$})`:"",JSON.stringify(w.main)));return Gg(w,"light",W,s),Gg(w,"dark",_,s),w.contrastText||(w.contrastText=C(w.main)),w};let j;return i==="light"?j=$m():i==="dark"&&(j=qm()),Ve({common:{...gl},mode:i,primary:k({color:d,name:"primary"}),secondary:k({color:g,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:k({color:y,name:"error"}),warning:k({color:O,name:"warning"}),info:k({color:S,name:"info"}),success:k({color:b,name:"success"}),grey:Kx,contrastThreshold:o,getContrastText:C,augmentColor:k,tonalOffset:s,...j},c)}function aS(a){const i={};return Object.entries(a).forEach(s=>{const[c,d]=s;typeof d=="object"&&(i[c]=`${d.fontStyle?`${d.fontStyle} `:""}${d.fontVariant?`${d.fontVariant} `:""}${d.fontWeight?`${d.fontWeight} `:""}${d.fontStretch?`${d.fontStretch} `:""}${d.fontSize||""}${d.lineHeight?`/${d.lineHeight} `:""}${d.fontFamily||""}`)}),i}function rS(a,i){return{toolbar:{minHeight:56,[a.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[a.up("sm")]:{minHeight:64}},...i}}function iS(a){return Math.round(a*1e5)/1e5}const Yg={textTransform:"uppercase"},Xg='"Roboto", "Helvetica", "Arial", sans-serif';function lS(a,i){const{fontFamily:o=Xg,fontSize:s=14,fontWeightLight:c=300,fontWeightRegular:d=400,fontWeightMedium:g=500,fontWeightBold:y=700,htmlFontSize:S=16,allVariants:b,pxToRem:O,...C}=typeof i=="function"?i(a):i,k=s/14,j=O||($=>`${$/S*k}rem`),M=($,Q,W,_,f)=>({fontFamily:o,fontWeight:$,fontSize:j(Q),lineHeight:W,...o===Xg?{letterSpacing:`${iS(_/Q)}em`}:{},...f,...b}),w={h1:M(c,96,1.167,-1.5),h2:M(c,60,1.2,-.5),h3:M(d,48,1.167,0),h4:M(d,34,1.235,.25),h5:M(d,24,1.334,0),h6:M(g,20,1.6,.15),subtitle1:M(d,16,1.75,.15),subtitle2:M(g,14,1.57,.1),body1:M(d,16,1.5,.15),body2:M(d,14,1.43,.15),button:M(g,14,1.75,.4,Yg),caption:M(d,12,1.66,.4),overline:M(d,12,2.66,1,Yg),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Ve({htmlFontSize:S,pxToRem:j,fontFamily:o,fontSize:s,fontWeightLight:c,fontWeightRegular:d,fontWeightMedium:g,fontWeightBold:y,...w},C,{clone:!1})}const oS=.2,sS=.14,uS=.12;function Yt(...a){return[`${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px rgba(0,0,0,${oS})`,`${a[4]}px ${a[5]}px ${a[6]}px ${a[7]}px rgba(0,0,0,${sS})`,`${a[8]}px ${a[9]}px ${a[10]}px ${a[11]}px rgba(0,0,0,${uS})`].join(",")}const cS=["none",Yt(0,2,1,-1,0,1,1,0,0,1,3,0),Yt(0,3,1,-2,0,2,2,0,0,1,5,0),Yt(0,3,3,-2,0,3,4,0,0,1,8,0),Yt(0,2,4,-1,0,4,5,0,0,1,10,0),Yt(0,3,5,-1,0,5,8,0,0,1,14,0),Yt(0,3,5,-1,0,6,10,0,0,1,18,0),Yt(0,4,5,-2,0,7,10,1,0,2,16,1),Yt(0,5,5,-3,0,8,10,1,0,3,14,2),Yt(0,5,6,-3,0,9,12,1,0,3,16,2),Yt(0,6,6,-3,0,10,14,1,0,4,18,3),Yt(0,6,7,-4,0,11,15,1,0,4,20,3),Yt(0,7,8,-4,0,12,17,2,0,5,22,4),Yt(0,7,8,-4,0,13,19,2,0,5,24,4),Yt(0,7,9,-4,0,14,21,2,0,5,26,4),Yt(0,8,9,-5,0,15,22,2,0,6,28,5),Yt(0,8,10,-5,0,16,24,2,0,6,30,5),Yt(0,8,11,-5,0,17,26,2,0,6,32,5),Yt(0,9,11,-5,0,18,28,2,0,7,34,6),Yt(0,9,12,-6,0,19,29,2,0,7,36,6),Yt(0,10,13,-6,0,20,31,3,0,8,38,7),Yt(0,10,13,-6,0,21,33,3,0,8,40,7),Yt(0,10,14,-6,0,22,35,3,0,8,42,7),Yt(0,11,14,-7,0,23,36,3,0,9,44,8),Yt(0,11,15,-7,0,24,38,3,0,9,46,8)],fS={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},dS={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Vg(a){return`${Math.round(a)}ms`}function hS(a){if(!a)return 0;const i=a/36;return Math.min(Math.round((4+15*i**.25+i/5)*10),3e3)}function pS(a){const i={...fS,...a.easing},o={...dS,...a.duration};return{getAutoHeightDuration:hS,create:(c=["all"],d={})=>{const{duration:g=o.standard,easing:y=i.easeInOut,delay:S=0,...b}=d;return(Array.isArray(c)?c:[c]).map(O=>`${O} ${typeof g=="string"?g:Vg(g)} ${y} ${typeof S=="string"?S:Vg(S)}`).join(",")},...a,easing:i,duration:o}}const gS={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function mS(a){return Vn(a)||typeof a>"u"||typeof a=="string"||typeof a=="boolean"||typeof a=="number"||Array.isArray(a)}function Lm(a={}){const i={...a};function o(s){const c=Object.entries(s);for(let d=0;d<c.length;d++){const[g,y]=c[d];!mS(y)||g.startsWith("unstable_")?delete s[g]:Vn(y)&&(s[g]={...y},o(s[g]))}}return o(i),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(i,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function Of(a={},...i){const{breakpoints:o,mixins:s={},spacing:c,palette:d={},transitions:g={},typography:y={},shape:S,...b}=a;if(a.vars&&a.generateThemeVars===void 0)throw new Error(Ja(20));const O=Ff(d),C=Nm(a);let k=Ve(C,{mixins:rS(C.breakpoints,s),palette:O,shadows:cS.slice(),typography:lS(O,y),transitions:pS(g),zIndex:{...gS}});return k=Ve(k,b),k=i.reduce((j,M)=>Ve(j,M),k),k.unstable_sxConfig={...Ts,...b?.unstable_sxConfig},k.unstable_sx=function(M){return Zr({sx:M,theme:this})},k.toRuntimeSource=Lm,k}function bS(a){let i;return a<1?i=5.11916*a**2:i=4.5*Math.log(a+1)+2,Math.round(i*10)/1e3}const yS=[...Array(25)].map((a,i)=>{if(i===0)return"none";const o=bS(i);return`linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`});function Gm(a){return{inputPlaceholder:a==="dark"?.5:.42,inputUnderline:a==="dark"?.7:.42,switchTrackDisabled:a==="dark"?.2:.12,switchTrack:a==="dark"?.3:.38}}function Ym(a){return a==="dark"?yS:[]}function vS(a){const{palette:i={mode:"light"},opacity:o,overlays:s,...c}=a,d=Ff(i);return{palette:d,opacity:{...Gm(d.mode),...o},overlays:s||Ym(d.mode),...c}}function xS(a){return!!a[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!a[0].match(/sxConfig$/)||a[0]==="palette"&&!!a[1]?.match(/(mode|contrastThreshold|tonalOffset)/)}const SS=a=>[...[...Array(25)].map((i,o)=>`--${a?`${a}-`:""}overlays-${o}`),`--${a?`${a}-`:""}palette-AppBar-darkBg`,`--${a?`${a}-`:""}palette-AppBar-darkColor`],wS=a=>(i,o)=>{const s=a.rootSelector||":root",c=a.colorSchemeSelector;let d=c;if(c==="class"&&(d=".%s"),c==="data"&&(d="[data-%s]"),c?.startsWith("data-")&&!c.includes("%s")&&(d=`[${c}="%s"]`),a.defaultColorScheme===i){if(i==="dark"){const g={};return SS(a.cssVarPrefix).forEach(y=>{g[y]=o[y],delete o[y]}),d==="media"?{[s]:o,"@media (prefers-color-scheme: dark)":{[s]:g}}:d?{[d.replace("%s",i)]:g,[`${s}, ${d.replace("%s",i)}`]:o}:{[s]:{...o,...g}}}if(d&&d!=="media")return`${s}, ${d.replace("%s",String(i))}`}else if(i){if(d==="media")return{[`@media (prefers-color-scheme: ${String(i)})`]:{[s]:o}};if(d)return d.replace("%s",String(i))}return s};function TS(a,i){i.forEach(o=>{a[o]||(a[o]={})})}function L(a,i,o){!a[i]&&o&&(a[i]=o)}function sl(a){return typeof a!="string"||!a.startsWith("hsl")?a:jm(a)}function Gn(a,i){`${i}Channel`in a||(a[`${i}Channel`]=ol(sl(a[i])))}function OS(a){return typeof a=="number"?`${a}px`:typeof a=="string"||typeof a=="function"||Array.isArray(a)?a:"8px"}const xn=a=>{try{return a()}catch{}},AS=(a="mui")=>Yx(a);function uf(a,i,o,s){if(!i)return;i=i===!0?{}:i;const c=s==="dark"?"dark":"light";if(!o){a[s]=vS({...i,palette:{mode:c,...i?.palette}});return}const{palette:d,...g}=Of({...o,palette:{mode:c,...i?.palette}});return a[s]={...i,palette:d,opacity:{...Gm(c),...i?.opacity},overlays:i?.overlays||Ym(c)},g}function ES(a={},...i){const{colorSchemes:o={light:!0},defaultColorScheme:s,disableCssColorScheme:c=!1,cssVarPrefix:d="mui",shouldSkipGeneratingVar:g=xS,colorSchemeSelector:y=o.light&&o.dark?"media":void 0,rootSelector:S=":root",...b}=a,O=Object.keys(o)[0],C=s||(o.light&&O!=="light"?"light":O),k=AS(d),{[C]:j,light:M,dark:w,...$}=o,Q={...$};let W=j;if((C==="dark"&&!("dark"in o)||C==="light"&&!("light"in o))&&(W=!0),!W)throw new Error(Ja(21,C));const _=uf(Q,W,b,C);M&&!Q.light&&uf(Q,M,void 0,"light"),w&&!Q.dark&&uf(Q,w,void 0,"dark");let f={defaultColorScheme:C,..._,cssVarPrefix:d,colorSchemeSelector:y,rootSelector:S,getCssVar:k,colorSchemes:Q,font:{...aS(_.typography),..._.font},spacing:OS(b.spacing)};Object.keys(f.colorSchemes).forEach(H=>{const v=f.colorSchemes[H].palette,Y=tt=>{const nt=tt.split("-"),wt=nt[1],ht=nt[2];return k(tt,v[wt][ht])};if(v.mode==="light"&&(L(v.common,"background","#fff"),L(v.common,"onBackground","#000")),v.mode==="dark"&&(L(v.common,"background","#000"),L(v.common,"onBackground","#fff")),TS(v,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),v.mode==="light"){L(v.Alert,"errorColor",Ut(v.error.light,.6)),L(v.Alert,"infoColor",Ut(v.info.light,.6)),L(v.Alert,"successColor",Ut(v.success.light,.6)),L(v.Alert,"warningColor",Ut(v.warning.light,.6)),L(v.Alert,"errorFilledBg",Y("palette-error-main")),L(v.Alert,"infoFilledBg",Y("palette-info-main")),L(v.Alert,"successFilledBg",Y("palette-success-main")),L(v.Alert,"warningFilledBg",Y("palette-warning-main")),L(v.Alert,"errorFilledColor",xn(()=>v.getContrastText(v.error.main))),L(v.Alert,"infoFilledColor",xn(()=>v.getContrastText(v.info.main))),L(v.Alert,"successFilledColor",xn(()=>v.getContrastText(v.success.main))),L(v.Alert,"warningFilledColor",xn(()=>v.getContrastText(v.warning.main))),L(v.Alert,"errorStandardBg",jt(v.error.light,.9)),L(v.Alert,"infoStandardBg",jt(v.info.light,.9)),L(v.Alert,"successStandardBg",jt(v.success.light,.9)),L(v.Alert,"warningStandardBg",jt(v.warning.light,.9)),L(v.Alert,"errorIconColor",Y("palette-error-main")),L(v.Alert,"infoIconColor",Y("palette-info-main")),L(v.Alert,"successIconColor",Y("palette-success-main")),L(v.Alert,"warningIconColor",Y("palette-warning-main")),L(v.AppBar,"defaultBg",Y("palette-grey-100")),L(v.Avatar,"defaultBg",Y("palette-grey-400")),L(v.Button,"inheritContainedBg",Y("palette-grey-300")),L(v.Button,"inheritContainedHoverBg",Y("palette-grey-A100")),L(v.Chip,"defaultBorder",Y("palette-grey-400")),L(v.Chip,"defaultAvatarColor",Y("palette-grey-700")),L(v.Chip,"defaultIconColor",Y("palette-grey-700")),L(v.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),L(v.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),L(v.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),L(v.LinearProgress,"primaryBg",jt(v.primary.main,.62)),L(v.LinearProgress,"secondaryBg",jt(v.secondary.main,.62)),L(v.LinearProgress,"errorBg",jt(v.error.main,.62)),L(v.LinearProgress,"infoBg",jt(v.info.main,.62)),L(v.LinearProgress,"successBg",jt(v.success.main,.62)),L(v.LinearProgress,"warningBg",jt(v.warning.main,.62)),L(v.Skeleton,"bg",`rgba(${Y("palette-text-primaryChannel")} / 0.11)`),L(v.Slider,"primaryTrack",jt(v.primary.main,.62)),L(v.Slider,"secondaryTrack",jt(v.secondary.main,.62)),L(v.Slider,"errorTrack",jt(v.error.main,.62)),L(v.Slider,"infoTrack",jt(v.info.main,.62)),L(v.Slider,"successTrack",jt(v.success.main,.62)),L(v.Slider,"warningTrack",jt(v.warning.main,.62));const tt=Vo(v.background.default,.8);L(v.SnackbarContent,"bg",tt),L(v.SnackbarContent,"color",xn(()=>v.getContrastText(tt))),L(v.SpeedDialAction,"fabHoverBg",Vo(v.background.paper,.15)),L(v.StepConnector,"border",Y("palette-grey-400")),L(v.StepContent,"border",Y("palette-grey-400")),L(v.Switch,"defaultColor",Y("palette-common-white")),L(v.Switch,"defaultDisabledColor",Y("palette-grey-100")),L(v.Switch,"primaryDisabledColor",jt(v.primary.main,.62)),L(v.Switch,"secondaryDisabledColor",jt(v.secondary.main,.62)),L(v.Switch,"errorDisabledColor",jt(v.error.main,.62)),L(v.Switch,"infoDisabledColor",jt(v.info.main,.62)),L(v.Switch,"successDisabledColor",jt(v.success.main,.62)),L(v.Switch,"warningDisabledColor",jt(v.warning.main,.62)),L(v.TableCell,"border",jt(Xo(v.divider,1),.88)),L(v.Tooltip,"bg",Xo(v.grey[700],.92))}if(v.mode==="dark"){L(v.Alert,"errorColor",jt(v.error.light,.6)),L(v.Alert,"infoColor",jt(v.info.light,.6)),L(v.Alert,"successColor",jt(v.success.light,.6)),L(v.Alert,"warningColor",jt(v.warning.light,.6)),L(v.Alert,"errorFilledBg",Y("palette-error-dark")),L(v.Alert,"infoFilledBg",Y("palette-info-dark")),L(v.Alert,"successFilledBg",Y("palette-success-dark")),L(v.Alert,"warningFilledBg",Y("palette-warning-dark")),L(v.Alert,"errorFilledColor",xn(()=>v.getContrastText(v.error.dark))),L(v.Alert,"infoFilledColor",xn(()=>v.getContrastText(v.info.dark))),L(v.Alert,"successFilledColor",xn(()=>v.getContrastText(v.success.dark))),L(v.Alert,"warningFilledColor",xn(()=>v.getContrastText(v.warning.dark))),L(v.Alert,"errorStandardBg",Ut(v.error.light,.9)),L(v.Alert,"infoStandardBg",Ut(v.info.light,.9)),L(v.Alert,"successStandardBg",Ut(v.success.light,.9)),L(v.Alert,"warningStandardBg",Ut(v.warning.light,.9)),L(v.Alert,"errorIconColor",Y("palette-error-main")),L(v.Alert,"infoIconColor",Y("palette-info-main")),L(v.Alert,"successIconColor",Y("palette-success-main")),L(v.Alert,"warningIconColor",Y("palette-warning-main")),L(v.AppBar,"defaultBg",Y("palette-grey-900")),L(v.AppBar,"darkBg",Y("palette-background-paper")),L(v.AppBar,"darkColor",Y("palette-text-primary")),L(v.Avatar,"defaultBg",Y("palette-grey-600")),L(v.Button,"inheritContainedBg",Y("palette-grey-800")),L(v.Button,"inheritContainedHoverBg",Y("palette-grey-700")),L(v.Chip,"defaultBorder",Y("palette-grey-700")),L(v.Chip,"defaultAvatarColor",Y("palette-grey-300")),L(v.Chip,"defaultIconColor",Y("palette-grey-300")),L(v.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),L(v.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),L(v.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),L(v.LinearProgress,"primaryBg",Ut(v.primary.main,.5)),L(v.LinearProgress,"secondaryBg",Ut(v.secondary.main,.5)),L(v.LinearProgress,"errorBg",Ut(v.error.main,.5)),L(v.LinearProgress,"infoBg",Ut(v.info.main,.5)),L(v.LinearProgress,"successBg",Ut(v.success.main,.5)),L(v.LinearProgress,"warningBg",Ut(v.warning.main,.5)),L(v.Skeleton,"bg",`rgba(${Y("palette-text-primaryChannel")} / 0.13)`),L(v.Slider,"primaryTrack",Ut(v.primary.main,.5)),L(v.Slider,"secondaryTrack",Ut(v.secondary.main,.5)),L(v.Slider,"errorTrack",Ut(v.error.main,.5)),L(v.Slider,"infoTrack",Ut(v.info.main,.5)),L(v.Slider,"successTrack",Ut(v.success.main,.5)),L(v.Slider,"warningTrack",Ut(v.warning.main,.5));const tt=Vo(v.background.default,.98);L(v.SnackbarContent,"bg",tt),L(v.SnackbarContent,"color",xn(()=>v.getContrastText(tt))),L(v.SpeedDialAction,"fabHoverBg",Vo(v.background.paper,.15)),L(v.StepConnector,"border",Y("palette-grey-600")),L(v.StepContent,"border",Y("palette-grey-600")),L(v.Switch,"defaultColor",Y("palette-grey-300")),L(v.Switch,"defaultDisabledColor",Y("palette-grey-600")),L(v.Switch,"primaryDisabledColor",Ut(v.primary.main,.55)),L(v.Switch,"secondaryDisabledColor",Ut(v.secondary.main,.55)),L(v.Switch,"errorDisabledColor",Ut(v.error.main,.55)),L(v.Switch,"infoDisabledColor",Ut(v.info.main,.55)),L(v.Switch,"successDisabledColor",Ut(v.success.main,.55)),L(v.Switch,"warningDisabledColor",Ut(v.warning.main,.55)),L(v.TableCell,"border",Ut(Xo(v.divider,1),.68)),L(v.Tooltip,"bg",Xo(v.grey[700],.92))}Gn(v.background,"default"),Gn(v.background,"paper"),Gn(v.common,"background"),Gn(v.common,"onBackground"),Gn(v,"divider"),Object.keys(v).forEach(tt=>{const nt=v[tt];tt!=="tonalOffset"&&nt&&typeof nt=="object"&&(nt.main&&L(v[tt],"mainChannel",ol(sl(nt.main))),nt.light&&L(v[tt],"lightChannel",ol(sl(nt.light))),nt.dark&&L(v[tt],"darkChannel",ol(sl(nt.dark))),nt.contrastText&&L(v[tt],"contrastTextChannel",ol(sl(nt.contrastText))),tt==="text"&&(Gn(v[tt],"primary"),Gn(v[tt],"secondary")),tt==="action"&&(nt.active&&Gn(v[tt],"active"),nt.selected&&Gn(v[tt],"selected")))})}),f=i.reduce((H,v)=>Ve(H,v),f);const h={prefix:d,disableCssColorScheme:c,shouldSkipGeneratingVar:g,getSelector:wS(f)},{vars:x,generateThemeVars:T,generateStyleSheets:z}=Zx(f,h);return f.vars=x,Object.entries(f.colorSchemes[f.defaultColorScheme]).forEach(([H,v])=>{f[H]=v}),f.generateThemeVars=T,f.generateStyleSheets=z,f.generateSpacing=function(){return Bm(b.spacing,Lf(this))},f.getColorSchemeSelector=Qx(y),f.spacing=f.generateSpacing(),f.shouldSkipGeneratingVar=g,f.unstable_sxConfig={...Ts,...b?.unstable_sxConfig},f.unstable_sx=function(v){return Zr({sx:v,theme:this})},f.toRuntimeSource=Lm,f}function Zg(a,i,o){a.colorSchemes&&o&&(a.colorSchemes[i]={...o!==!0&&o,palette:Ff({...o===!0?{}:o.palette,mode:i})})}function CS(a={},...i){const{palette:o,cssVariables:s=!1,colorSchemes:c=o?void 0:{light:!0},defaultColorScheme:d=o?.mode,...g}=a,y=d||"light",S=c?.[y],b={...c,...o?{[y]:{...typeof S!="boolean"&&S,palette:o}}:void 0};if(s===!1){if(!("colorSchemes"in a))return Of(a,...i);let O=o;"palette"in a||b[y]&&(b[y]!==!0?O=b[y].palette:y==="dark"&&(O={mode:"dark"}));const C=Of({...a,palette:O},...i);return C.defaultColorScheme=y,C.colorSchemes=b,C.palette.mode==="light"&&(C.colorSchemes.light={...b.light!==!0&&b.light,palette:C.palette},Zg(C,"dark",b.dark)),C.palette.mode==="dark"&&(C.colorSchemes.dark={...b.dark!==!0&&b.dark,palette:C.palette},Zg(C,"light",b.light)),C}return!o&&!("light"in b)&&y==="light"&&(b.light=!0),ES({...g,colorSchemes:b,defaultColorScheme:y,...typeof s!="boolean"&&s},...i)}const _S=CS(),RS="$$material";function MS(a){return a!=="ownerState"&&a!=="theme"&&a!=="sx"&&a!=="as"}const kS=a=>MS(a)&&a!=="classes",Qn=Ex({themeId:RS,defaultTheme:_S,rootShouldForwardProp:kS}),ml=Gx;function Al(a){return jx(a)}function DS(a){return Tl("MuiSvgIcon",a)}Ol("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const zS=a=>{const{color:i,fontSize:o,classes:s}=a,c={root:["root",i!=="inherit"&&`color${we(i)}`,`fontSize${we(o)}`]};return gs(c,DS,s)},PS=Qn("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(a,i)=>{const{ownerState:o}=a;return[i.root,o.color!=="inherit"&&i[`color${we(o.color)}`],i[`fontSize${we(o.fontSize)}`]]}})(ml(({theme:a})=>({userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:a.transitions?.create?.("fill",{duration:(a.vars??a).transitions?.duration?.shorter}),variants:[{props:i=>!i.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:a.typography?.pxToRem?.(20)||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:a.typography?.pxToRem?.(24)||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:a.typography?.pxToRem?.(35)||"2.1875rem"}},...Object.entries((a.vars??a).palette).filter(([,i])=>i&&i.main).map(([i])=>({props:{color:i},style:{color:(a.vars??a).palette?.[i]?.main}})),{props:{color:"action"},style:{color:(a.vars??a).palette?.action?.active}},{props:{color:"disabled"},style:{color:(a.vars??a).palette?.action?.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}))),Af=K.forwardRef(function(i,o){const s=Al({props:i,name:"MuiSvgIcon"}),{children:c,className:d,color:g="inherit",component:y="svg",fontSize:S="medium",htmlColor:b,inheritViewBox:O=!1,titleAccess:C,viewBox:k="0 0 24 24",...j}=s,M=K.isValidElement(c)&&c.type==="svg",w={...s,color:g,component:y,fontSize:S,instanceFontSize:i.fontSize,inheritViewBox:O,viewBox:k,hasSvgAsChild:M},$={};O||($.viewBox=k);const Q=zS(w);return J.jsxs(PS,{as:y,className:ke(Q.root,d),focusable:"false",color:b,"aria-hidden":C?void 0:!0,role:C?"img":void 0,ref:o,...$,...j,...M&&c.props,ownerState:w,children:[M?c.props.children:c,C?J.jsx("title",{children:C}):null]})});Af.muiName="SvgIcon";function Rs(a,i){function o(s,c){return J.jsx(Af,{"data-testid":void 0,ref:c,...s,children:a})}return o.muiName=Af.muiName,K.memo(K.forwardRef(o))}function Fo(a){const i=K.useRef(a);return kx(()=>{i.current=a}),K.useRef((...o)=>(0,i.current)(...o)).current}function Qg(...a){const i=K.useRef(void 0),o=K.useCallback(s=>{const c=a.map(d=>{if(d==null)return null;if(typeof d=="function"){const g=d,y=g(s);return typeof y=="function"?y:()=>{g(null)}}return d.current=s,()=>{d.current=null}});return()=>{c.forEach(d=>d?.())}},a);return K.useMemo(()=>a.every(s=>s==null)?null:s=>{i.current&&(i.current(),i.current=void 0),s!=null&&(i.current=o(s))},a)}const Xm=Rs(J.jsx("path",{d:"M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"})),us=Rs(J.jsx("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"})),Kg=42,BS=({width:a,height:i,isMobile:o})=>{const s=K.useRef(null),[c,d]=K.useState(0),[g,y]=K.useState(!1),[S,b]=K.useState(!1),[O,C]=K.useState(Math.floor(c/2)+1),k=_=>`/letter-to-the-cloud/assets/images/Frame ${_+41}.png`,j=Array.from({length:Kg},(_,f)=>k(f)),M=K.useRef(new Map);K.useEffect(()=>{(async()=>{for(let f=0;f<j.length/2;f++){const h=f*2+Kg-1,T=[h,h+1].map(v=>`/letter-to-the-cloud/assets/images/Frame ${v}.png`).map(v=>{const Y=new Image;return Y.src=v,new Promise(tt=>{Y.onload=()=>tt(Y),Y.onerror=()=>tt(Y)})}),[z,H]=await Promise.all([...T]);M.current.set(f,{images:[z,H]})}y(!0)})()},[]);const w=async _=>s.current?.turnToPage(_*2),$=_=>d(_.data),Q=()=>s.current.flipNext(),W=()=>s.current.flipPrev();return g?J.jsxs(J.Fragment,{children:[J.jsxs("div",{className:"book-wrapper",children:[J.jsx(bg,{ariaLabel:"Previous page",isDisabled:!c,onClick:W,children:J.jsx("span",{children:"←"})}),J.jsxs(Sv,{width:a,height:i,maxShadowOpacity:.5,size:"fixed",drawShadow:!0,showCover:!0,mobileScrollSupport:!1,onFlip:$,ref:_=>s.current=_?.pageFlip(),children:[J.jsx(mg,{width:a,height:i,src:"/letter-to-the-cloud/assets/images/Frame 83.png"}),j.map((_,f)=>J.jsx(wv,{src:_,width:a,height:i,isEven:f===0},f)),J.jsx(mg,{width:a,height:i,src:"/letter-to-the-cloud/assets/images/Frame 84.png"})]}),J.jsx(bg,{ariaLabel:"Next page",isDisabled:c>=j.length,onClick:Q,children:J.jsx("span",{children:"→"})})]}),!o&&J.jsxs("div",{className:`authors-wrapper ${c>=j.length?"":"disabled"}`,children:[J.jsx("img",{className:"authors",src:"/letter-to-the-cloud/assets/images/2025-07-07 18.27.30.jpg"}),J.jsxs("div",{className:"social",children:[J.jsx("p",{children:"Serge Belkin:"}),J.jsx("a",{href:"https://t.me/sergebelkin",target:"_blank",rel:"noopener noreferrer",children:J.jsx(Xm,{fontSize:"large",sx:{color:"rgb(248, 213, 74)",marginRight:"10px"}})}),J.jsx("a",{href:"https://instagram.com/serge_belkin",target:"_blank",rel:"noopener noreferrer",children:J.jsx(us,{fontSize:"large",sx:{color:"rgb(248, 213, 74)"}})}),J.jsx("p",{}),J.jsx("p",{children:"Hmarka:"}),J.jsx("a",{href:"https://instagram.com/moonlaria",target:"_blank",rel:"noopener noreferrer",children:J.jsx(us,{fontSize:"large",sx:{color:"rgb(248, 213, 74)"}})})]})]}),c&&c<=j.length&&J.jsxs("p",{className:"page-number",children:[S?J.jsx("input",{type:"number",className:"current-page-input",value:O,min:1,max:Math.floor(j.length/2),onChange:_=>C(Number(_.target.value)),onBlur:()=>{b(!1),w(O)},onKeyDown:_=>{_.key==="Enter"&&(b(!1),w(O))},autoFocus:!0}):J.jsx("span",{className:"current-page-number",onClick:()=>{C(Math.floor(c/2)+1),b(!0)},style:{cursor:"pointer"},children:Math.floor(c/2)+1})," ","/ ",J.jsx("span",{children:Math.floor(j.length/2)})]})]}):J.jsx(mv,{color:"#ffd600",size:"large"})},NS=()=>J.jsxs(J.Fragment,{children:[J.jsx("style",{children:`
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.2; transform: scale(0.8); }
        }
      `}),J.jsx("div",{style:cf.overlay,children:J.jsx("div",{style:cf.starsContainer,children:Array.from({length:50}).map((a,i)=>J.jsx("div",{style:{...cf.star,...HS()}},i))})})]}),cf={overlay:{position:"fixed",height:"100%",top:0,left:0,right:0,bottom:0,zIndex:1,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:"white",fontSize:24,textAlign:"center",overflow:"hidden"},starsContainer:{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none"},star:{position:"absolute",width:2,height:2,borderRadius:"50%",backgroundColor:"white",opacity:.8,animationName:"twinkle",animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",animationDirection:"alternate"}};function HS(a){const i=Math.random()*100+"%",o=Math.random()*100+"%",s=1+Math.random()*2,c=Math.random()*5;return{top:i,left:o,animationDuration:`${s}s`,animationDelay:`${c}s`}}var De=function(){return De=Object.assign||function(i){for(var o,s=1,c=arguments.length;s<c;s++){o=arguments[s];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(i[d]=o[d])}return i},De.apply(this,arguments)};function bl(a,i,o){if(o||arguments.length===2)for(var s=0,c=i.length,d;s<c;s++)(d||!(s in i))&&(d||(d=Array.prototype.slice.call(i,0,s)),d[s]=i[s]);return a.concat(d||Array.prototype.slice.call(i))}var Lt="-ms-",fl="-moz-",Mt="-webkit-",Vm="comm",Ms="rule",td="decl",US="@import",Zm="@keyframes",jS="@layer",Qm=Math.abs,ed=String.fromCharCode,Ef=Object.assign;function $S(a,i){return he(a,0)^45?(((i<<2^he(a,0))<<2^he(a,1))<<2^he(a,2))<<2^he(a,3):0}function Km(a){return a.trim()}function Xn(a,i){return(a=i.exec(a))?a[0]:a}function mt(a,i,o){return a.replace(i,o)}function ts(a,i,o){return a.indexOf(i,o)}function he(a,i){return a.charCodeAt(i)|0}function Kr(a,i,o){return a.slice(i,o)}function Tn(a){return a.length}function Jm(a){return a.length}function ul(a,i){return i.push(a),a}function qS(a,i){return a.map(i).join("")}function Jg(a,i){return a.filter(function(o){return!Xn(o,i)})}var ks=1,Jr=1,Wm=0,ln=0,re=0,ei="";function Ds(a,i,o,s,c,d,g,y){return{value:a,root:i,parent:o,type:s,props:c,children:d,line:ks,column:Jr,length:g,return:"",siblings:y}}function Sa(a,i){return Ef(Ds("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},i)}function Gr(a){for(;a.root;)a=Sa(a.root,{children:[a]});ul(a,a.siblings)}function LS(){return re}function GS(){return re=ln>0?he(ei,--ln):0,Jr--,re===10&&(Jr=1,ks--),re}function pn(){return re=ln<Wm?he(ei,ln++):0,Jr++,re===10&&(Jr=1,ks++),re}function Qa(){return he(ei,ln)}function es(){return ln}function zs(a,i){return Kr(ei,a,i)}function Cf(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function YS(a){return ks=Jr=1,Wm=Tn(ei=a),ln=0,[]}function XS(a){return ei="",a}function ff(a){return Km(zs(ln-1,_f(a===91?a+2:a===40?a+1:a)))}function VS(a){for(;(re=Qa())&&re<33;)pn();return Cf(a)>2||Cf(re)>3?"":" "}function ZS(a,i){for(;--i&&pn()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return zs(a,es()+(i<6&&Qa()==32&&pn()==32))}function _f(a){for(;pn();)switch(re){case a:return ln;case 34:case 39:a!==34&&a!==39&&_f(re);break;case 40:a===41&&_f(a);break;case 92:pn();break}return ln}function QS(a,i){for(;pn()&&a+re!==57;)if(a+re===84&&Qa()===47)break;return"/*"+zs(i,ln-1)+"*"+ed(a===47?a:pn())}function KS(a){for(;!Cf(Qa());)pn();return zs(a,ln)}function JS(a){return XS(ns("",null,null,null,[""],a=YS(a),0,[0],a))}function ns(a,i,o,s,c,d,g,y,S){for(var b=0,O=0,C=g,k=0,j=0,M=0,w=1,$=1,Q=1,W=0,_="",f=c,h=d,x=s,T=_;$;)switch(M=W,W=pn()){case 40:if(M!=108&&he(T,C-1)==58){ts(T+=mt(ff(W),"&","&\f"),"&\f",Qm(b?y[b-1]:0))!=-1&&(Q=-1);break}case 34:case 39:case 91:T+=ff(W);break;case 9:case 10:case 13:case 32:T+=VS(M);break;case 92:T+=ZS(es()-1,7);continue;case 47:switch(Qa()){case 42:case 47:ul(WS(QS(pn(),es()),i,o,S),S);break;default:T+="/"}break;case 123*w:y[b++]=Tn(T)*Q;case 125*w:case 59:case 0:switch(W){case 0:case 125:$=0;case 59+O:Q==-1&&(T=mt(T,/\f/g,"")),j>0&&Tn(T)-C&&ul(j>32?Ig(T+";",s,o,C-1,S):Ig(mt(T," ","")+";",s,o,C-2,S),S);break;case 59:T+=";";default:if(ul(x=Wg(T,i,o,b,O,c,y,_,f=[],h=[],C,d),d),W===123)if(O===0)ns(T,i,x,x,f,d,C,y,h);else switch(k===99&&he(T,3)===110?100:k){case 100:case 108:case 109:case 115:ns(a,x,x,s&&ul(Wg(a,x,x,0,0,c,y,_,c,f=[],C,h),h),c,h,C,y,s?f:h);break;default:ns(T,x,x,x,[""],h,0,y,h)}}b=O=j=0,w=Q=1,_=T="",C=g;break;case 58:C=1+Tn(T),j=M;default:if(w<1){if(W==123)--w;else if(W==125&&w++==0&&GS()==125)continue}switch(T+=ed(W),W*w){case 38:Q=O>0?1:(T+="\f",-1);break;case 44:y[b++]=(Tn(T)-1)*Q,Q=1;break;case 64:Qa()===45&&(T+=ff(pn())),k=Qa(),O=C=Tn(_=T+=KS(es())),W++;break;case 45:M===45&&Tn(T)==2&&(w=0)}}return d}function Wg(a,i,o,s,c,d,g,y,S,b,O,C){for(var k=c-1,j=c===0?d:[""],M=Jm(j),w=0,$=0,Q=0;w<s;++w)for(var W=0,_=Kr(a,k+1,k=Qm($=g[w])),f=a;W<M;++W)(f=Km($>0?j[W]+" "+_:mt(_,/&\f/g,j[W])))&&(S[Q++]=f);return Ds(a,i,o,c===0?Ms:y,S,b,O,C)}function WS(a,i,o,s){return Ds(a,i,o,Vm,ed(LS()),Kr(a,2,-2),0,s)}function Ig(a,i,o,s,c){return Ds(a,i,o,td,Kr(a,0,s),Kr(a,s+1,-1),s,c)}function Im(a,i,o){switch($S(a,i)){case 5103:return Mt+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Mt+a+a;case 4789:return fl+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Mt+a+fl+a+Lt+a+a;case 5936:switch(he(a,i+11)){case 114:return Mt+a+Lt+mt(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Mt+a+Lt+mt(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Mt+a+Lt+mt(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Mt+a+Lt+a+a;case 6165:return Mt+a+Lt+"flex-"+a+a;case 5187:return Mt+a+mt(a,/(\w+).+(:[^]+)/,Mt+"box-$1$2"+Lt+"flex-$1$2")+a;case 5443:return Mt+a+Lt+"flex-item-"+mt(a,/flex-|-self/g,"")+(Xn(a,/flex-|baseline/)?"":Lt+"grid-row-"+mt(a,/flex-|-self/g,""))+a;case 4675:return Mt+a+Lt+"flex-line-pack"+mt(a,/align-content|flex-|-self/g,"")+a;case 5548:return Mt+a+Lt+mt(a,"shrink","negative")+a;case 5292:return Mt+a+Lt+mt(a,"basis","preferred-size")+a;case 6060:return Mt+"box-"+mt(a,"-grow","")+Mt+a+Lt+mt(a,"grow","positive")+a;case 4554:return Mt+mt(a,/([^-])(transform)/g,"$1"+Mt+"$2")+a;case 6187:return mt(mt(mt(a,/(zoom-|grab)/,Mt+"$1"),/(image-set)/,Mt+"$1"),a,"")+a;case 5495:case 3959:return mt(a,/(image-set\([^]*)/,Mt+"$1$`$1");case 4968:return mt(mt(a,/(.+:)(flex-)?(.*)/,Mt+"box-pack:$3"+Lt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Mt+a+a;case 4200:if(!Xn(a,/flex-|baseline/))return Lt+"grid-column-align"+Kr(a,i)+a;break;case 2592:case 3360:return Lt+mt(a,"template-","")+a;case 4384:case 3616:return o&&o.some(function(s,c){return i=c,Xn(s.props,/grid-\w+-end/)})?~ts(a+(o=o[i].value),"span",0)?a:Lt+mt(a,"-start","")+a+Lt+"grid-row-span:"+(~ts(o,"span",0)?Xn(o,/\d+/):+Xn(o,/\d+/)-+Xn(a,/\d+/))+";":Lt+mt(a,"-start","")+a;case 4896:case 4128:return o&&o.some(function(s){return Xn(s.props,/grid-\w+-start/)})?a:Lt+mt(mt(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return mt(a,/(.+)-inline(.+)/,Mt+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Tn(a)-1-i>6)switch(he(a,i+1)){case 109:if(he(a,i+4)!==45)break;case 102:return mt(a,/(.+:)(.+)-([^]+)/,"$1"+Mt+"$2-$3$1"+fl+(he(a,i+3)==108?"$3":"$2-$3"))+a;case 115:return~ts(a,"stretch",0)?Im(mt(a,"stretch","fill-available"),i,o)+a:a}break;case 5152:case 5920:return mt(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,c,d,g,y,S,b){return Lt+c+":"+d+b+(g?Lt+c+"-span:"+(y?S:+S-+d)+b:"")+a});case 4949:if(he(a,i+6)===121)return mt(a,":",":"+Mt)+a;break;case 6444:switch(he(a,he(a,14)===45?18:11)){case 120:return mt(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Mt+(he(a,14)===45?"inline-":"")+"box$3$1"+Mt+"$2$3$1"+Lt+"$2box$3")+a;case 100:return mt(a,":",":"+Lt)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return mt(a,"scroll-","scroll-snap-")+a}return a}function cs(a,i){for(var o="",s=0;s<a.length;s++)o+=i(a[s],s,a,i)||"";return o}function IS(a,i,o,s){switch(a.type){case jS:if(a.children.length)break;case US:case td:return a.return=a.return||a.value;case Vm:return"";case Zm:return a.return=a.value+"{"+cs(a.children,s)+"}";case Ms:if(!Tn(a.value=a.props.join(",")))return""}return Tn(o=cs(a.children,s))?a.return=a.value+"{"+o+"}":""}function FS(a){var i=Jm(a);return function(o,s,c,d){for(var g="",y=0;y<i;y++)g+=a[y](o,s,c,d)||"";return g}}function t2(a){return function(i){i.root||(i=i.return)&&a(i)}}function e2(a,i,o,s){if(a.length>-1&&!a.return)switch(a.type){case td:a.return=Im(a.value,a.length,o);return;case Zm:return cs([Sa(a,{value:mt(a.value,"@","@"+Mt)})],s);case Ms:if(a.length)return qS(o=a.props,function(c){switch(Xn(c,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Gr(Sa(a,{props:[mt(c,/:(read-\w+)/,":"+fl+"$1")]})),Gr(Sa(a,{props:[c]})),Ef(a,{props:Jg(o,s)});break;case"::placeholder":Gr(Sa(a,{props:[mt(c,/:(plac\w+)/,":"+Mt+"input-$1")]})),Gr(Sa(a,{props:[mt(c,/:(plac\w+)/,":"+fl+"$1")]})),Gr(Sa(a,{props:[mt(c,/:(plac\w+)/,Lt+"input-$1")]})),Gr(Sa(a,{props:[c]})),Ef(a,{props:Jg(o,s)});break}return""})}}var n2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ye={},Wr=typeof process<"u"&&Ye!==void 0&&(Ye.REACT_APP_SC_ATTR||Ye.SC_ATTR)||"data-styled",Fm="active",tb="data-styled-version",Ps="6.1.19",nd=`/*!sc*/
`,fs=typeof window<"u"&&typeof document<"u",a2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ye!==void 0&&Ye.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ye.REACT_APP_SC_DISABLE_SPEEDY!==""?Ye.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ye.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ye!==void 0&&Ye.SC_DISABLE_SPEEDY!==void 0&&Ye.SC_DISABLE_SPEEDY!==""&&Ye.SC_DISABLE_SPEEDY!=="false"&&Ye.SC_DISABLE_SPEEDY),Bs=Object.freeze([]),Ir=Object.freeze({});function r2(a,i,o){return o===void 0&&(o=Ir),a.theme!==o.theme&&a.theme||i||o.theme}var eb=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),i2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,l2=/(^-|-$)/g;function Fg(a){return a.replace(i2,"-").replace(l2,"")}var o2=/(a)(d)/gi,Zo=52,tm=function(a){return String.fromCharCode(a+(a>25?39:97))};function Rf(a){var i,o="";for(i=Math.abs(a);i>Zo;i=i/Zo|0)o=tm(i%Zo)+o;return(tm(i%Zo)+o).replace(o2,"$1-$2")}var df,nb=5381,Yr=function(a,i){for(var o=i.length;o;)a=33*a^i.charCodeAt(--o);return a},ab=function(a){return Yr(nb,a)};function rb(a){return Rf(ab(a)>>>0)}function s2(a){return a.displayName||a.name||"Component"}function hf(a){return typeof a=="string"&&!0}var ib=typeof Symbol=="function"&&Symbol.for,lb=ib?Symbol.for("react.memo"):60115,u2=ib?Symbol.for("react.forward_ref"):60112,c2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},f2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ob={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},d2=((df={})[u2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},df[lb]=ob,df);function em(a){return("type"in(i=a)&&i.type.$$typeof)===lb?ob:"$$typeof"in a?d2[a.$$typeof]:c2;var i}var h2=Object.defineProperty,p2=Object.getOwnPropertyNames,nm=Object.getOwnPropertySymbols,g2=Object.getOwnPropertyDescriptor,m2=Object.getPrototypeOf,am=Object.prototype;function sb(a,i,o){if(typeof i!="string"){if(am){var s=m2(i);s&&s!==am&&sb(a,s,o)}var c=p2(i);nm&&(c=c.concat(nm(i)));for(var d=em(a),g=em(i),y=0;y<c.length;++y){var S=c[y];if(!(S in f2||o&&o[S]||g&&S in g||d&&S in d)){var b=g2(i,S);try{h2(a,S,b)}catch{}}}}return a}function Fr(a){return typeof a=="function"}function ad(a){return typeof a=="object"&&"styledComponentId"in a}function Xa(a,i){return a&&i?"".concat(a," ").concat(i):a||i||""}function Mf(a,i){if(a.length===0)return"";for(var o=a[0],s=1;s<a.length;s++)o+=a[s];return o}function yl(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function kf(a,i,o){if(o===void 0&&(o=!1),!o&&!yl(a)&&!Array.isArray(a))return i;if(Array.isArray(i))for(var s=0;s<i.length;s++)a[s]=kf(a[s],i[s]);else if(yl(i))for(var s in i)a[s]=kf(a[s],i[s]);return a}function rd(a,i){Object.defineProperty(a,"toString",{value:i})}function El(a){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var b2=function(){function a(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return a.prototype.indexOfGroup=function(i){for(var o=0,s=0;s<i;s++)o+=this.groupSizes[s];return o},a.prototype.insertRules=function(i,o){if(i>=this.groupSizes.length){for(var s=this.groupSizes,c=s.length,d=c;i>=d;)if((d<<=1)<0)throw El(16,"".concat(i));this.groupSizes=new Uint32Array(d),this.groupSizes.set(s),this.length=d;for(var g=c;g<d;g++)this.groupSizes[g]=0}for(var y=this.indexOfGroup(i+1),S=(g=0,o.length);g<S;g++)this.tag.insertRule(y,o[g])&&(this.groupSizes[i]++,y++)},a.prototype.clearGroup=function(i){if(i<this.length){var o=this.groupSizes[i],s=this.indexOfGroup(i),c=s+o;this.groupSizes[i]=0;for(var d=s;d<c;d++)this.tag.deleteRule(s)}},a.prototype.getGroup=function(i){var o="";if(i>=this.length||this.groupSizes[i]===0)return o;for(var s=this.groupSizes[i],c=this.indexOfGroup(i),d=c+s,g=c;g<d;g++)o+="".concat(this.tag.getRule(g)).concat(nd);return o},a}(),as=new Map,ds=new Map,rs=1,Qo=function(a){if(as.has(a))return as.get(a);for(;ds.has(rs);)rs++;var i=rs++;return as.set(a,i),ds.set(i,a),i},y2=function(a,i){rs=i+1,as.set(a,i),ds.set(i,a)},v2="style[".concat(Wr,"][").concat(tb,'="').concat(Ps,'"]'),x2=new RegExp("^".concat(Wr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),S2=function(a,i,o){for(var s,c=o.split(","),d=0,g=c.length;d<g;d++)(s=c[d])&&a.registerName(i,s)},w2=function(a,i){for(var o,s=((o=i.textContent)!==null&&o!==void 0?o:"").split(nd),c=[],d=0,g=s.length;d<g;d++){var y=s[d].trim();if(y){var S=y.match(x2);if(S){var b=0|parseInt(S[1],10),O=S[2];b!==0&&(y2(O,b),S2(a,O,S[3]),a.getTag().insertRules(b,c)),c.length=0}else c.push(y)}}},rm=function(a){for(var i=document.querySelectorAll(v2),o=0,s=i.length;o<s;o++){var c=i[o];c&&c.getAttribute(Wr)!==Fm&&(w2(a,c),c.parentNode&&c.parentNode.removeChild(c))}};function T2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ub=function(a){var i=document.head,o=a||i,s=document.createElement("style"),c=function(y){var S=Array.from(y.querySelectorAll("style[".concat(Wr,"]")));return S[S.length-1]}(o),d=c!==void 0?c.nextSibling:null;s.setAttribute(Wr,Fm),s.setAttribute(tb,Ps);var g=T2();return g&&s.setAttribute("nonce",g),o.insertBefore(s,d),s},O2=function(){function a(i){this.element=ub(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,c=0,d=s.length;c<d;c++){var g=s[c];if(g.ownerNode===o)return g}throw El(17)}(this.element),this.length=0}return a.prototype.insertRule=function(i,o){try{return this.sheet.insertRule(o,i),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},a.prototype.getRule=function(i){var o=this.sheet.cssRules[i];return o&&o.cssText?o.cssText:""},a}(),A2=function(){function a(i){this.element=ub(i),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(i,o){if(i<=this.length&&i>=0){var s=document.createTextNode(o);return this.element.insertBefore(s,this.nodes[i]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},a.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},a}(),E2=function(){function a(i){this.rules=[],this.length=0}return a.prototype.insertRule=function(i,o){return i<=this.length&&(this.rules.splice(i,0,o),this.length++,!0)},a.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},a.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},a}(),im=fs,C2={isServer:!fs,useCSSOMInjection:!a2},cb=function(){function a(i,o,s){i===void 0&&(i=Ir),o===void 0&&(o={});var c=this;this.options=De(De({},C2),i),this.gs=o,this.names=new Map(s),this.server=!!i.isServer,!this.server&&fs&&im&&(im=!1,rm(this)),rd(this,function(){return function(d){for(var g=d.getTag(),y=g.length,S="",b=function(C){var k=function(Q){return ds.get(Q)}(C);if(k===void 0)return"continue";var j=d.names.get(k),M=g.getGroup(C);if(j===void 0||!j.size||M.length===0)return"continue";var w="".concat(Wr,".g").concat(C,'[id="').concat(k,'"]'),$="";j!==void 0&&j.forEach(function(Q){Q.length>0&&($+="".concat(Q,","))}),S+="".concat(M).concat(w,'{content:"').concat($,'"}').concat(nd)},O=0;O<y;O++)b(O);return S}(c)})}return a.registerId=function(i){return Qo(i)},a.prototype.rehydrate=function(){!this.server&&fs&&rm(this)},a.prototype.reconstructWithOptions=function(i,o){return o===void 0&&(o=!0),new a(De(De({},this.options),i),this.gs,o&&this.names||void 0)},a.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(i=function(o){var s=o.useCSSOMInjection,c=o.target;return o.isServer?new E2(c):s?new O2(c):new A2(c)}(this.options),new b2(i)));var i},a.prototype.hasNameForId=function(i,o){return this.names.has(i)&&this.names.get(i).has(o)},a.prototype.registerName=function(i,o){if(Qo(i),this.names.has(i))this.names.get(i).add(o);else{var s=new Set;s.add(o),this.names.set(i,s)}},a.prototype.insertRules=function(i,o,s){this.registerName(i,o),this.getTag().insertRules(Qo(i),s)},a.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},a.prototype.clearRules=function(i){this.getTag().clearGroup(Qo(i)),this.clearNames(i)},a.prototype.clearTag=function(){this.tag=void 0},a}(),_2=/&/g,R2=/^\s*\/\/.*$/gm;function fb(a,i){return a.map(function(o){return o.type==="rule"&&(o.value="".concat(i," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(i," ")),o.props=o.props.map(function(s){return"".concat(i," ").concat(s)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=fb(o.children,i)),o})}function M2(a){var i,o,s,c=Ir,d=c.options,g=d===void 0?Ir:d,y=c.plugins,S=y===void 0?Bs:y,b=function(k,j,M){return M.startsWith(o)&&M.endsWith(o)&&M.replaceAll(o,"").length>0?".".concat(i):k},O=S.slice();O.push(function(k){k.type===Ms&&k.value.includes("&")&&(k.props[0]=k.props[0].replace(_2,o).replace(s,b))}),g.prefix&&O.push(e2),O.push(IS);var C=function(k,j,M,w){j===void 0&&(j=""),M===void 0&&(M=""),w===void 0&&(w="&"),i=w,o=j,s=new RegExp("\\".concat(o,"\\b"),"g");var $=k.replace(R2,""),Q=JS(M||j?"".concat(M," ").concat(j," { ").concat($," }"):$);g.namespace&&(Q=fb(Q,g.namespace));var W=[];return cs(Q,FS(O.concat(t2(function(_){return W.push(_)})))),W};return C.hash=S.length?S.reduce(function(k,j){return j.name||El(15),Yr(k,j.name)},nb).toString():"",C}var k2=new cb,Df=M2(),db=qt.createContext({shouldForwardProp:void 0,styleSheet:k2,stylis:Df});db.Consumer;qt.createContext(void 0);function lm(){return K.useContext(db)}var hb=function(){function a(i,o){var s=this;this.inject=function(c,d){d===void 0&&(d=Df);var g=s.name+d.hash;c.hasNameForId(s.id,g)||c.insertRules(s.id,g,d(s.rules,g,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=o,rd(this,function(){throw El(12,String(s.name))})}return a.prototype.getName=function(i){return i===void 0&&(i=Df),this.name+i.hash},a}(),D2=function(a){return a>="A"&&a<="Z"};function om(a){for(var i="",o=0;o<a.length;o++){var s=a[o];if(o===1&&s==="-"&&a[0]==="-")return a;D2(s)?i+="-"+s.toLowerCase():i+=s}return i.startsWith("ms-")?"-"+i:i}var pb=function(a){return a==null||a===!1||a===""},gb=function(a){var i,o,s=[];for(var c in a){var d=a[c];a.hasOwnProperty(c)&&!pb(d)&&(Array.isArray(d)&&d.isCss||Fr(d)?s.push("".concat(om(c),":"),d,";"):yl(d)?s.push.apply(s,bl(bl(["".concat(c," {")],gb(d),!1),["}"],!1)):s.push("".concat(om(c),": ").concat((i=c,(o=d)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||i in n2||i.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return s};function Ka(a,i,o,s){if(pb(a))return[];if(ad(a))return[".".concat(a.styledComponentId)];if(Fr(a)){if(!Fr(d=a)||d.prototype&&d.prototype.isReactComponent||!i)return[a];var c=a(i);return Ka(c,i,o,s)}var d;return a instanceof hb?o?(a.inject(o,s),[a.getName(s)]):[a]:yl(a)?gb(a):Array.isArray(a)?Array.prototype.concat.apply(Bs,a.map(function(g){return Ka(g,i,o,s)})):[a.toString()]}function z2(a){for(var i=0;i<a.length;i+=1){var o=a[i];if(Fr(o)&&!ad(o))return!1}return!0}var P2=ab(Ps),B2=function(){function a(i,o,s){this.rules=i,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&z2(i),this.componentId=o,this.baseHash=Yr(P2,o),this.baseStyle=s,cb.registerId(o)}return a.prototype.generateAndInjectStyles=function(i,o,s){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,o,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))c=Xa(c,this.staticRulesId);else{var d=Mf(Ka(this.rules,i,o,s)),g=Rf(Yr(this.baseHash,d)>>>0);if(!o.hasNameForId(this.componentId,g)){var y=s(d,".".concat(g),void 0,this.componentId);o.insertRules(this.componentId,g,y)}c=Xa(c,g),this.staticRulesId=g}else{for(var S=Yr(this.baseHash,s.hash),b="",O=0;O<this.rules.length;O++){var C=this.rules[O];if(typeof C=="string")b+=C;else if(C){var k=Mf(Ka(C,i,o,s));S=Yr(S,k+O),b+=k}}if(b){var j=Rf(S>>>0);o.hasNameForId(this.componentId,j)||o.insertRules(this.componentId,j,s(b,".".concat(j),void 0,this.componentId)),c=Xa(c,j)}}return c},a}(),mb=qt.createContext(void 0);mb.Consumer;var pf={};function N2(a,i,o){var s=ad(a),c=a,d=!hf(a),g=i.attrs,y=g===void 0?Bs:g,S=i.componentId,b=S===void 0?function(f,h){var x=typeof f!="string"?"sc":Fg(f);pf[x]=(pf[x]||0)+1;var T="".concat(x,"-").concat(rb(Ps+x+pf[x]));return h?"".concat(h,"-").concat(T):T}(i.displayName,i.parentComponentId):S,O=i.displayName,C=O===void 0?function(f){return hf(f)?"styled.".concat(f):"Styled(".concat(s2(f),")")}(a):O,k=i.displayName&&i.componentId?"".concat(Fg(i.displayName),"-").concat(i.componentId):i.componentId||b,j=s&&c.attrs?c.attrs.concat(y).filter(Boolean):y,M=i.shouldForwardProp;if(s&&c.shouldForwardProp){var w=c.shouldForwardProp;if(i.shouldForwardProp){var $=i.shouldForwardProp;M=function(f,h){return w(f,h)&&$(f,h)}}else M=w}var Q=new B2(o,k,s?c.componentStyle:void 0);function W(f,h){return function(x,T,z){var H=x.attrs,v=x.componentStyle,Y=x.defaultProps,tt=x.foldedComponentIds,nt=x.styledComponentId,wt=x.target,ht=qt.useContext(mb),q=lm(),I=x.shouldForwardProp||q.shouldForwardProp,rt=r2(T,ht,Y)||Ir,st=function(bt,ut,te){for(var Ot,se=De(De({},ut),{className:void 0,theme:te}),En=0;En<bt.length;En+=1){var sn=Fr(Ot=bt[En])?Ot(se):Ot;for(var Ae in sn)se[Ae]=Ae==="className"?Xa(se[Ae],sn[Ae]):Ae==="style"?De(De({},se[Ae]),sn[Ae]):sn[Ae]}return ut.className&&(se.className=Xa(se.className,ut.className)),se}(H,T,rt),E=st.as||wt,V={};for(var F in st)st[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&st.theme===rt||(F==="forwardedAs"?V.as=st.forwardedAs:I&&!I(F,E)||(V[F]=st[F]));var et=function(bt,ut){var te=lm(),Ot=bt.generateAndInjectStyles(ut,te.styleSheet,te.stylis);return Ot}(v,st),it=Xa(tt,nt);return et&&(it+=" "+et),st.className&&(it+=" "+st.className),V[hf(E)&&!eb.has(E)?"class":"className"]=it,z&&(V.ref=z),K.createElement(E,V)}(_,f,h)}W.displayName=C;var _=qt.forwardRef(W);return _.attrs=j,_.componentStyle=Q,_.displayName=C,_.shouldForwardProp=M,_.foldedComponentIds=s?Xa(c.foldedComponentIds,c.styledComponentId):"",_.styledComponentId=k,_.target=s?c.target:a,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=s?function(h){for(var x=[],T=1;T<arguments.length;T++)x[T-1]=arguments[T];for(var z=0,H=x;z<H.length;z++)kf(h,H[z],!0);return h}({},c.defaultProps,f):f}}),rd(_,function(){return".".concat(_.styledComponentId)}),d&&sb(_,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function sm(a,i){for(var o=[a[0]],s=0,c=i.length;s<c;s+=1)o.push(i[s],a[s+1]);return o}var um=function(a){return Object.assign(a,{isCss:!0})};function bb(a){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];if(Fr(a)||yl(a))return um(Ka(sm(Bs,bl([a],i,!0))));var s=a;return i.length===0&&s.length===1&&typeof s[0]=="string"?Ka(s):um(Ka(sm(s,i)))}function zf(a,i,o){if(o===void 0&&(o=Ir),!i)throw El(1,i);var s=function(c){for(var d=[],g=1;g<arguments.length;g++)d[g-1]=arguments[g];return a(i,o,bb.apply(void 0,bl([c],d,!1)))};return s.attrs=function(c){return zf(a,i,De(De({},o),{attrs:Array.prototype.concat(o.attrs,c).filter(Boolean)}))},s.withConfig=function(c){return zf(a,i,De(De({},o),c))},s}var yb=function(a){return zf(N2,a)},id=yb;eb.forEach(function(a){id[a]=yb(a)});function H2(a){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];var s=Mf(bb.apply(void 0,bl([a],i,!1))),c=rb(s);return new hb(c,s)}const U2=H2`
  0% {
    transform: translateX(-1000px) scale(1);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateX(100vw) scale(1);
    opacity: 0;
  }
`,j2=id.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  pointer-events: none;
  z-index: 2;
  overflow: hidden;
  background: transparent;
`,Ga=id.img`
  position: absolute;
  top: ${({top:a})=>a};
  left: 0;
  width: auto;
  height: auto;
  transform: scale(${({scale:a})=>a||1});
  opacity: 0;
  animation: ${U2} ${({duration:a})=>a}s linear infinite;
  animation-delay: ${({delay:a})=>a}s;
`,$2=()=>J.jsxs(j2,{children:[J.jsx(Ga,{src:"/letter-to-the-cloud/assets/images/clouds/02.png",top:"20%",delay:0,duration:80,scale:6}),J.jsx(Ga,{src:"/letter-to-the-cloud/assets/images/clouds/03.png",top:"30%",delay:5,duration:90,scale:5.5}),J.jsx(Ga,{src:"/letter-to-the-cloud/assets/images/clouds/04.png",top:"40%",delay:10,duration:100,scale:6.2}),J.jsx(Ga,{src:"/letter-to-the-cloud/assets/images/clouds/05.png",top:"0%",delay:3,duration:85,scale:5.8}),J.jsx(Ga,{src:"/letter-to-the-cloud/assets/images/clouds/06.png",top:"25%",delay:8,duration:95,scale:6.5}),J.jsx(Ga,{src:"/letter-to-the-cloud/assets/images/clouds/07.png",top:"35%",delay:12,duration:90,scale:6}),J.jsx(Ga,{src:"/letter-to-the-cloud/assets/images/clouds/08.png",top:"45%",delay:6,duration:100,scale:6.8})]}),q2=({src:a,alt:i="",style:o,className:s})=>{const[c,d]=K.useState(!1),g=K.useRef(null);return K.useEffect(()=>{const y=new IntersectionObserver(([S])=>{S.isIntersecting&&(d(!0),y.disconnect())},{rootMargin:"150px"});return g.current&&y.observe(g.current),()=>y.disconnect()},[]),J.jsx("div",{ref:g,style:o,className:`mobile-img-container ${s}`,children:c&&J.jsx("img",{src:a,alt:i,loading:"lazy",style:{width:"100%",marginBottom:"-1px"}})})},L2=Rs(J.jsx("path",{d:"M3 9v6h4l5 5V4L7 9zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77"})),G2=Rs(J.jsx("path",{d:"M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63m2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71M4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9zM12 4 9.91 6.09 12 8.18z"}));function Y2(a){return typeof a.main=="string"}function X2(a,i=[]){if(!Y2(a))return!1;for(const o of i)if(!a.hasOwnProperty(o)||typeof a[o]!="string")return!1;return!0}function Pf(a=[]){return([,i])=>i&&X2(i,a)}function cm(a){try{return a.matches(":focus-visible")}catch{}return!1}const fm={};function vb(a,i){const o=K.useRef(fm);return o.current===fm&&(o.current=a(i)),o}class hs{static create(){return new hs}static use(){const i=vb(hs.create).current,[o,s]=K.useState(!1);return i.shouldMount=o,i.setShouldMount=s,K.useEffect(i.mountEffect,[o]),i}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=Z2(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...i){this.mount().then(()=>this.ref.current?.start(...i))}stop(...i){this.mount().then(()=>this.ref.current?.stop(...i))}pulsate(...i){this.mount().then(()=>this.ref.current?.pulsate(...i))}}function V2(){return hs.use()}function Z2(){let a,i;const o=new Promise((s,c)=>{a=s,i=c});return o.resolve=a,o.reject=i,o}function Q2(a,i){if(a==null)return{};var o={};for(var s in a)if({}.hasOwnProperty.call(a,s)){if(i.indexOf(s)!==-1)continue;o[s]=a[s]}return o}function Bf(a,i){return Bf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,s){return o.__proto__=s,o},Bf(a,i)}function K2(a,i){a.prototype=Object.create(i.prototype),a.prototype.constructor=a,Bf(a,i)}const dm=qt.createContext(null);function J2(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function ld(a,i){var o=function(d){return i&&K.isValidElement(d)?i(d):d},s=Object.create(null);return a&&K.Children.map(a,function(c){return c}).forEach(function(c){s[c.key]=o(c)}),s}function W2(a,i){a=a||{},i=i||{};function o(O){return O in i?i[O]:a[O]}var s=Object.create(null),c=[];for(var d in a)d in i?c.length&&(s[d]=c,c=[]):c.push(d);var g,y={};for(var S in i){if(s[S])for(g=0;g<s[S].length;g++){var b=s[S][g];y[s[S][g]]=o(b)}y[S]=o(S)}for(g=0;g<c.length;g++)y[c[g]]=o(c[g]);return y}function Va(a,i,o){return o[i]!=null?o[i]:a.props[i]}function I2(a,i){return ld(a.children,function(o){return K.cloneElement(o,{onExited:i.bind(null,o),in:!0,appear:Va(o,"appear",a),enter:Va(o,"enter",a),exit:Va(o,"exit",a)})})}function F2(a,i,o){var s=ld(a.children),c=W2(i,s);return Object.keys(c).forEach(function(d){var g=c[d];if(K.isValidElement(g)){var y=d in i,S=d in s,b=i[d],O=K.isValidElement(b)&&!b.props.in;S&&(!y||O)?c[d]=K.cloneElement(g,{onExited:o.bind(null,g),in:!0,exit:Va(g,"exit",a),enter:Va(g,"enter",a)}):!S&&y&&!O?c[d]=K.cloneElement(g,{in:!1}):S&&y&&K.isValidElement(b)&&(c[d]=K.cloneElement(g,{onExited:o.bind(null,g),in:b.props.in,exit:Va(g,"exit",a),enter:Va(g,"enter",a)}))}}),c}var t3=Object.values||function(a){return Object.keys(a).map(function(i){return a[i]})},e3={component:"div",childFactory:function(i){return i}},od=function(a){K2(i,a);function i(s,c){var d;d=a.call(this,s,c)||this;var g=d.handleExited.bind(J2(d));return d.state={contextValue:{isMounting:!0},handleExited:g,firstRender:!0},d}var o=i.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},i.getDerivedStateFromProps=function(c,d){var g=d.children,y=d.handleExited,S=d.firstRender;return{children:S?I2(c,y):F2(c,g,y),firstRender:!1}},o.handleExited=function(c,d){var g=ld(this.props.children);c.key in g||(c.props.onExited&&c.props.onExited(d),this.mounted&&this.setState(function(y){var S=os({},y.children);return delete S[c.key],{children:S}}))},o.render=function(){var c=this.props,d=c.component,g=c.childFactory,y=Q2(c,["component","childFactory"]),S=this.state.contextValue,b=t3(this.state.children).map(g);return delete y.appear,delete y.enter,delete y.exit,d===null?qt.createElement(dm.Provider,{value:S},b):qt.createElement(dm.Provider,{value:S},qt.createElement(d,y,b))},i}(qt.Component);od.propTypes={};od.defaultProps=e3;const n3=[];function a3(a){K.useEffect(a,n3)}class sd{static create(){return new sd}currentId=null;start(i,o){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,o()},i)}clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear}function r3(){const a=vb(sd.create).current;return a3(a.disposeEffect),a}function i3(a){const{className:i,classes:o,pulsate:s=!1,rippleX:c,rippleY:d,rippleSize:g,in:y,onExited:S,timeout:b}=a,[O,C]=K.useState(!1),k=ke(i,o.ripple,o.rippleVisible,s&&o.ripplePulsate),j={width:g,height:g,top:-(g/2)+d,left:-(g/2)+c},M=ke(o.child,O&&o.childLeaving,s&&o.childPulsate);return!y&&!O&&C(!0),K.useEffect(()=>{if(!y&&S!=null){const w=setTimeout(S,b);return()=>{clearTimeout(w)}}},[S,y,b]),J.jsx("span",{className:k,style:j,children:J.jsx("span",{className:M})})}const an=Ol("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Nf=550,l3=80,o3=wl`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,s3=wl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,u3=wl`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,c3=Qn("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),f3=Qn(i3,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${an.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${o3};
    animation-duration: ${Nf}ms;
    animation-timing-function: ${({theme:a})=>a.transitions.easing.easeInOut};
  }

  &.${an.ripplePulsate} {
    animation-duration: ${({theme:a})=>a.transitions.duration.shorter}ms;
  }

  & .${an.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${an.childLeaving} {
    opacity: 0;
    animation-name: ${s3};
    animation-duration: ${Nf}ms;
    animation-timing-function: ${({theme:a})=>a.transitions.easing.easeInOut};
  }

  & .${an.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${u3};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:a})=>a.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,d3=K.forwardRef(function(i,o){const s=Al({props:i,name:"MuiTouchRipple"}),{center:c=!1,classes:d={},className:g,...y}=s,[S,b]=K.useState([]),O=K.useRef(0),C=K.useRef(null);K.useEffect(()=>{C.current&&(C.current(),C.current=null)},[S]);const k=K.useRef(!1),j=r3(),M=K.useRef(null),w=K.useRef(null),$=K.useCallback(f=>{const{pulsate:h,rippleX:x,rippleY:T,rippleSize:z,cb:H}=f;b(v=>[...v,J.jsx(f3,{classes:{ripple:ke(d.ripple,an.ripple),rippleVisible:ke(d.rippleVisible,an.rippleVisible),ripplePulsate:ke(d.ripplePulsate,an.ripplePulsate),child:ke(d.child,an.child),childLeaving:ke(d.childLeaving,an.childLeaving),childPulsate:ke(d.childPulsate,an.childPulsate)},timeout:Nf,pulsate:h,rippleX:x,rippleY:T,rippleSize:z},O.current)]),O.current+=1,C.current=H},[d]),Q=K.useCallback((f={},h={},x=()=>{})=>{const{pulsate:T=!1,center:z=c||h.pulsate,fakeElement:H=!1}=h;if(f?.type==="mousedown"&&k.current){k.current=!1;return}f?.type==="touchstart"&&(k.current=!0);const v=H?null:w.current,Y=v?v.getBoundingClientRect():{width:0,height:0,left:0,top:0};let tt,nt,wt;if(z||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)tt=Math.round(Y.width/2),nt=Math.round(Y.height/2);else{const{clientX:ht,clientY:q}=f.touches&&f.touches.length>0?f.touches[0]:f;tt=Math.round(ht-Y.left),nt=Math.round(q-Y.top)}if(z)wt=Math.sqrt((2*Y.width**2+Y.height**2)/3),wt%2===0&&(wt+=1);else{const ht=Math.max(Math.abs((v?v.clientWidth:0)-tt),tt)*2+2,q=Math.max(Math.abs((v?v.clientHeight:0)-nt),nt)*2+2;wt=Math.sqrt(ht**2+q**2)}f?.touches?M.current===null&&(M.current=()=>{$({pulsate:T,rippleX:tt,rippleY:nt,rippleSize:wt,cb:x})},j.start(l3,()=>{M.current&&(M.current(),M.current=null)})):$({pulsate:T,rippleX:tt,rippleY:nt,rippleSize:wt,cb:x})},[c,$,j]),W=K.useCallback(()=>{Q({},{pulsate:!0})},[Q]),_=K.useCallback((f,h)=>{if(j.clear(),f?.type==="touchend"&&M.current){M.current(),M.current=null,j.start(0,()=>{_(f,h)});return}M.current=null,b(x=>x.length>0?x.slice(1):x),C.current=h},[j]);return K.useImperativeHandle(o,()=>({pulsate:W,start:Q,stop:_}),[W,Q,_]),J.jsx(c3,{className:ke(an.root,d.root,g),ref:w,...y,children:J.jsx(od,{component:null,exit:!0,children:S})})});function h3(a){return Tl("MuiButtonBase",a)}const p3=Ol("MuiButtonBase",["root","disabled","focusVisible"]),g3=a=>{const{disabled:i,focusVisible:o,focusVisibleClassName:s,classes:c}=a,g=gs({root:["root",i&&"disabled",o&&"focusVisible"]},h3,c);return o&&s&&(g.root+=` ${s}`),g},m3=Qn("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${p3.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),b3=K.forwardRef(function(i,o){const s=Al({props:i,name:"MuiButtonBase"}),{action:c,centerRipple:d=!1,children:g,className:y,component:S="button",disabled:b=!1,disableRipple:O=!1,disableTouchRipple:C=!1,focusRipple:k=!1,focusVisibleClassName:j,LinkComponent:M="a",onBlur:w,onClick:$,onContextMenu:Q,onDragLeave:W,onFocus:_,onFocusVisible:f,onKeyDown:h,onKeyUp:x,onMouseDown:T,onMouseLeave:z,onMouseUp:H,onTouchEnd:v,onTouchMove:Y,onTouchStart:tt,tabIndex:nt=0,TouchRippleProps:wt,touchRippleRef:ht,type:q,...I}=s,rt=K.useRef(null),st=V2(),E=Qg(st.ref,ht),[V,F]=K.useState(!1);b&&V&&F(!1),K.useImperativeHandle(c,()=>({focusVisible:()=>{F(!0),rt.current.focus()}}),[]);const et=st.shouldMount&&!O&&!b;K.useEffect(()=>{V&&k&&!O&&st.pulsate()},[O,k,V,st]);const it=Yn(st,"start",T,C),bt=Yn(st,"stop",Q,C),ut=Yn(st,"stop",W,C),te=Yn(st,"stop",H,C),Ot=Yn(st,"stop",pt=>{V&&pt.preventDefault(),z&&z(pt)},C),se=Yn(st,"start",tt,C),En=Yn(st,"stop",v,C),sn=Yn(st,"stop",Y,C),Ae=Yn(st,"stop",pt=>{cm(pt.target)||F(!1),w&&w(pt)},!1),ni=Fo(pt=>{rt.current||(rt.current=pt.currentTarget),cm(pt.target)&&(F(!0),f&&f(pt)),_&&_(pt)}),Ta=()=>{const pt=rt.current;return S&&S!=="button"&&!(pt.tagName==="A"&&pt.href)},Ns=Fo(pt=>{k&&!pt.repeat&&V&&pt.key===" "&&st.stop(pt,()=>{st.start(pt)}),pt.target===pt.currentTarget&&Ta()&&pt.key===" "&&pt.preventDefault(),h&&h(pt),pt.target===pt.currentTarget&&Ta()&&pt.key==="Enter"&&!b&&(pt.preventDefault(),$&&$(pt))}),Hs=Fo(pt=>{k&&pt.key===" "&&V&&!pt.defaultPrevented&&st.stop(pt,()=>{st.pulsate(pt)}),x&&x(pt),$&&pt.target===pt.currentTarget&&Ta()&&pt.key===" "&&!pt.defaultPrevented&&$(pt)});let Te=S;Te==="button"&&(I.href||I.to)&&(Te=M);const Oa={};Te==="button"?(Oa.type=q===void 0?"button":q,Oa.disabled=b):(!I.href&&!I.to&&(Oa.role="button"),b&&(Oa["aria-disabled"]=b));const Cl=Qg(o,rt),ai={...s,centerRipple:d,component:S,disabled:b,disableRipple:O,disableTouchRipple:C,focusRipple:k,tabIndex:nt,focusVisible:V},Wa=g3(ai);return J.jsxs(m3,{as:Te,className:ke(Wa.root,y),ownerState:ai,onBlur:Ae,onClick:$,onContextMenu:bt,onFocus:ni,onKeyDown:Ns,onKeyUp:Hs,onMouseDown:it,onMouseLeave:Ot,onMouseUp:te,onDragLeave:ut,onTouchEnd:En,onTouchMove:sn,onTouchStart:se,ref:Cl,tabIndex:b?-1:nt,type:q,...Oa,...I,children:[g,et?J.jsx(d3,{ref:E,center:d,...wt}):null]})});function Yn(a,i,o,s=!1){return Fo(c=>(o&&o(c),s||a[i](c),!0))}function y3(a){return Tl("MuiCircularProgress",a)}Ol("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const xa=44,Hf=wl`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,Uf=wl`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,v3=typeof Hf!="string"?Kf`
        animation: ${Hf} 1.4s linear infinite;
      `:null,x3=typeof Uf!="string"?Kf`
        animation: ${Uf} 1.4s ease-in-out infinite;
      `:null,S3=a=>{const{classes:i,variant:o,color:s,disableShrink:c}=a,d={root:["root",o,`color${we(s)}`],svg:["svg"],circle:["circle",`circle${we(o)}`,c&&"circleDisableShrink"]};return gs(d,y3,i)},w3=Qn("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(a,i)=>{const{ownerState:o}=a;return[i.root,i[o.variant],i[`color${we(o.color)}`]]}})(ml(({theme:a})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:a.transitions.create("transform")}},{props:{variant:"indeterminate"},style:v3||{animation:`${Hf} 1.4s linear infinite`}},...Object.entries(a.palette).filter(Pf()).map(([i])=>({props:{color:i},style:{color:(a.vars||a).palette[i].main}}))]}))),T3=Qn("svg",{name:"MuiCircularProgress",slot:"Svg"})({display:"block"}),O3=Qn("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(a,i)=>{const{ownerState:o}=a;return[i.circle,i[`circle${we(o.variant)}`],o.disableShrink&&i.circleDisableShrink]}})(ml(({theme:a})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:a.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:i})=>i.variant==="indeterminate"&&!i.disableShrink,style:x3||{animation:`${Uf} 1.4s ease-in-out infinite`}}]}))),A3=K.forwardRef(function(i,o){const s=Al({props:i,name:"MuiCircularProgress"}),{className:c,color:d="primary",disableShrink:g=!1,size:y=40,style:S,thickness:b=3.6,value:O=0,variant:C="indeterminate",...k}=s,j={...s,color:d,disableShrink:g,size:y,thickness:b,value:O,variant:C},M=S3(j),w={},$={},Q={};if(C==="determinate"){const W=2*Math.PI*((xa-b)/2);w.strokeDasharray=W.toFixed(3),Q["aria-valuenow"]=Math.round(O),w.strokeDashoffset=`${((100-O)/100*W).toFixed(3)}px`,$.transform="rotate(-90deg)"}return J.jsx(w3,{className:ke(M.root,c),style:{width:y,height:y,...$,...S},ownerState:j,ref:o,role:"progressbar",...Q,...k,children:J.jsx(T3,{className:M.svg,ownerState:j,viewBox:`${xa/2} ${xa/2} ${xa} ${xa}`,children:J.jsx(O3,{className:M.circle,style:w,ownerState:j,cx:xa,cy:xa,r:(xa-b)/2,fill:"none",strokeWidth:b})})})});function E3(a){return Tl("MuiIconButton",a)}const hm=Ol("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge","loading","loadingIndicator","loadingWrapper"]),C3=a=>{const{classes:i,disabled:o,color:s,edge:c,size:d,loading:g}=a,y={root:["root",g&&"loading",o&&"disabled",s!=="default"&&`color${we(s)}`,c&&`edge${we(c)}`,`size${we(d)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]};return gs(y,E3,i)},_3=Qn(b3,{name:"MuiIconButton",slot:"Root",overridesResolver:(a,i)=>{const{ownerState:o}=a;return[i.root,o.loading&&i.loading,o.color!=="default"&&i[`color${we(o.color)}`],o.edge&&i[`edge${we(o.edge)}`],i[`size${we(o.size)}`]]}})(ml(({theme:a})=>({textAlign:"center",flex:"0 0 auto",fontSize:a.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(a.vars||a).palette.action.active,transition:a.transitions.create("background-color",{duration:a.transitions.duration.shortest}),variants:[{props:i=>!i.disableRipple,style:{"--IconButton-hoverBg":a.vars?`rgba(${a.vars.palette.action.activeChannel} / ${a.vars.palette.action.hoverOpacity})`:Tf(a.palette.action.active,a.palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]})),ml(({theme:a})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(a.palette).filter(Pf()).map(([i])=>({props:{color:i},style:{color:(a.vars||a).palette[i].main}})),...Object.entries(a.palette).filter(Pf()).map(([i])=>({props:{color:i},style:{"--IconButton-hoverBg":a.vars?`rgba(${(a.vars||a).palette[i].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:Tf((a.vars||a).palette[i].main,a.palette.action.hoverOpacity)}})),{props:{size:"small"},style:{padding:5,fontSize:a.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:a.typography.pxToRem(28)}}],[`&.${hm.disabled}`]:{backgroundColor:"transparent",color:(a.vars||a).palette.action.disabled},[`&.${hm.loading}`]:{color:"transparent"}}))),R3=Qn("span",{name:"MuiIconButton",slot:"LoadingIndicator"})(({theme:a})=>({display:"none",position:"absolute",visibility:"visible",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:(a.vars||a).palette.action.disabled,variants:[{props:{loading:!0},style:{display:"flex"}}]})),M3=K.forwardRef(function(i,o){const s=Al({props:i,name:"MuiIconButton"}),{edge:c=!1,children:d,className:g,color:y="default",disabled:S=!1,disableFocusRipple:b=!1,size:O="medium",id:C,loading:k=null,loadingIndicator:j,...M}=s,w=Lx(C),$=j??J.jsx(A3,{"aria-labelledby":w,color:"inherit",size:16}),Q={...s,edge:c,color:y,disabled:S,disableFocusRipple:b,loading:k,loadingIndicator:$,size:O},W=C3(Q);return J.jsxs(_3,{id:k?w:C,className:ke(W.root,g),centerRipple:!0,focusRipple:!b,disabled:S||k,ref:o,...M,ownerState:Q,children:[typeof k=="boolean"&&J.jsx("span",{className:W.loadingWrapper,style:{display:"contents"},children:J.jsx(R3,{className:W.loadingIndicator,ownerState:Q,children:k&&$})}),d]})}),k3=({audioRef:a})=>{const[i,o]=K.useState(!1),s=()=>{a.current&&(a.current.muted=!i,o(!i))};return K.useEffect(()=>{a.current&&(a.current.muted=i)},[i,a]),J.jsx(M3,{onClick:s,sx:{position:"fixed",top:16,left:16,zIndex:10,background:"transparent",border:"none",outline:"none","&:focus":{outline:"none"},"&:active":{boxShadow:"none",backgroundColor:"transparent"},"&:hover":{backgroundColor:"transparent"}},children:i?J.jsx(G2,{fontSize:"large",sx:{color:"#ffd600"}}):J.jsx(L2,{fontSize:"large",sx:{color:"#ffd600"}})})};function D3(){const[a,i]=K.useState(!1),{width:o,height:s,isMobile:c}=Jy(),d=K.useRef(null),g=25,y=b=>`/letter-to-the-cloud/assets/mobile/mob${b}.png`,S=Array.from({length:g},(b,O)=>y(O));return K.useEffect(()=>{const b=()=>{!a&&d.current&&(i(!0),d.current.play().catch(O=>{console.error("Autoplay failed:",O)})),window.removeEventListener("click",b),window.removeEventListener("keydown",b)};return window.addEventListener("click",b),window.addEventListener("keydown",b),()=>{window.removeEventListener("click",b),window.removeEventListener("keydown",b)}},[a]),J.jsxs(J.Fragment,{children:[J.jsx(k3,{audioRef:d}),J.jsx("audio",{autoPlay:!0,loop:!0,ref:d,preload:"auto",children:J.jsx("source",{src:"/letter-to-the-cloud/assets/audio/1.mp3",type:"audio/mpeg"})}),c?J.jsxs("div",{className:"mobile-book",children:[S.map((b,O)=>J.jsx(q2,{src:b,alt:`mob${O}`,style:{width:"100vw",height:"max-content"}},O)),J.jsxs("div",{className:"social",style:{display:"flex",justifyContent:"space-between",backgroundColor:"#241c3c",margin:0,padding:"20px",fontSize:"24px"},children:[J.jsxs("div",{style:{display:"grid",justifyItems:"center"},children:[J.jsx("p",{children:"Serge Belkin:"}),J.jsxs("div",{children:[J.jsx("a",{href:"https://t.me/sergebelkin",target:"_blank",rel:"noopener noreferrer",children:J.jsx(Xm,{fontSize:"large",sx:{color:"rgb(248, 213, 74)",marginRight:"10px"}})}),J.jsx("a",{href:"https://instagram.com/serge_belkin",target:"_blank",rel:"noopener noreferrer",children:J.jsx(us,{fontSize:"large",sx:{color:"rgb(248, 213, 74)"}})})]})]}),J.jsxs("div",{style:{display:"grid",justifyItems:"center"},children:[J.jsx("p",{children:"Hmarka:"}),J.jsx("a",{href:"https://instagram.com/moonlaria",target:"_blank",rel:"noopener noreferrer",children:J.jsx(us,{fontSize:"large",sx:{color:"rgb(248, 213, 74)"}})})]})]})]}):J.jsxs(J.Fragment,{children:[J.jsx(NS,{}),J.jsx($2,{}),J.jsx("div",{className:"wrapper",children:J.jsx(BS,{width:o,height:s,isMobile:c})})]})]})}Ky.createRoot(document.getElementById("root")).render(J.jsx(K.StrictMode,{children:J.jsx(D3,{})}));
