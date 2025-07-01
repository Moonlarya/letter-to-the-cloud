(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))f(D);new MutationObserver(D=>{for(const q of D)if(q.type==="childList")for(const G of q.addedNodes)G.tagName==="LINK"&&G.rel==="modulepreload"&&f(G)}).observe(document,{childList:!0,subtree:!0});function g(D){const q={};return D.integrity&&(q.integrity=D.integrity),D.referrerPolicy&&(q.referrerPolicy=D.referrerPolicy),D.crossOrigin==="use-credentials"?q.credentials="include":D.crossOrigin==="anonymous"?q.credentials="omit":q.credentials="same-origin",q}function f(D){if(D.ep)return;D.ep=!0;const q=g(D);fetch(D.href,q)}})();function kh(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var pu={exports:{}},Di={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bh;function rp(){if(bh)return Di;bh=1;var c=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function g(f,D,q){var G=null;if(q!==void 0&&(G=""+q),D.key!==void 0&&(G=""+D.key),"key"in D){q={};for(var X in D)X!=="key"&&(q[X]=D[X])}else q=D;return D=q.ref,{$$typeof:c,type:f,key:G,ref:D!==void 0?D:null,props:q}}return Di.Fragment=d,Di.jsx=g,Di.jsxs=g,Di}var vh;function up(){return vh||(vh=1,pu.exports=rp()),pu.exports}var Ut=up(),gu={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yh;function sp(){if(yh)return lt;yh=1;var c=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),G=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),J=Symbol.iterator;function Q(m){return m===null||typeof m!="object"?null:(m=J&&m[J]||m["@@iterator"],typeof m=="function"?m:null)}var ft={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,S={};function B(m,k,P){this.props=m,this.context=k,this.refs=S,this.updater=P||ft}B.prototype.isReactComponent={},B.prototype.setState=function(m,k){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,k,"setState")},B.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function W(){}W.prototype=B.prototype;function dt(m,k,P){this.props=m,this.context=k,this.refs=S,this.updater=P||ft}var N=dt.prototype=new W;N.constructor=dt,M(N,B.prototype),N.isPureReactComponent=!0;var o=Array.isArray,u={H:null,A:null,T:null,S:null,V:null},p=Object.prototype.hasOwnProperty;function O(m,k,P,L,F,pt){return P=pt.ref,{$$typeof:c,type:m,key:k,ref:P!==void 0?P:null,props:pt}}function E(m,k){return O(m.type,k,void 0,void 0,void 0,m.props)}function C(m){return typeof m=="object"&&m!==null&&m.$$typeof===c}function $(m){var k={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(P){return k[P]})}var tt=/\/+/g;function rt(m,k){return typeof m=="object"&&m!==null&&m.key!=null?$(""+m.key):k.toString(36)}function At(){}function Lt(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(At,At):(m.status="pending",m.then(function(k){m.status==="pending"&&(m.status="fulfilled",m.value=k)},function(k){m.status==="pending"&&(m.status="rejected",m.reason=k)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function Rt(m,k,P,L,F){var pt=typeof m;(pt==="undefined"||pt==="boolean")&&(m=null);var it=!1;if(m===null)it=!0;else switch(pt){case"bigint":case"string":case"number":it=!0;break;case"object":switch(m.$$typeof){case c:case d:it=!0;break;case Y:return it=m._init,Rt(it(m._payload),k,P,L,F)}}if(it)return F=F(m),it=L===""?"."+rt(m,0):L,o(F)?(P="",it!=null&&(P=it.replace(tt,"$&/")+"/"),Rt(F,k,P,"",function(ne){return ne})):F!=null&&(C(F)&&(F=E(F,P+(F.key==null||m&&m.key===F.key?"":(""+F.key).replace(tt,"$&/")+"/")+it)),k.push(F)),1;it=0;var rn=L===""?".":L+":";if(o(m))for(var Mt=0;Mt<m.length;Mt++)L=m[Mt],pt=rn+rt(L,Mt),it+=Rt(L,k,P,pt,F);else if(Mt=Q(m),typeof Mt=="function")for(m=Mt.call(m),Mt=0;!(L=m.next()).done;)L=L.value,pt=rn+rt(L,Mt++),it+=Rt(L,k,P,pt,F);else if(pt==="object"){if(typeof m.then=="function")return Rt(Lt(m),k,P,L,F);throw k=String(m),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return it}function z(m,k,P){if(m==null)return m;var L=[],F=0;return Rt(m,L,"","",function(pt){return k.call(P,pt,F++)}),L}function j(m){if(m._status===-1){var k=m._result;k=k(),k.then(function(P){(m._status===0||m._status===-1)&&(m._status=1,m._result=P)},function(P){(m._status===0||m._status===-1)&&(m._status=2,m._result=P)}),m._status===-1&&(m._status=0,m._result=k)}if(m._status===1)return m._result.default;throw m._result}var et=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)};function Tt(){}return lt.Children={map:z,forEach:function(m,k,P){z(m,function(){k.apply(this,arguments)},P)},count:function(m){var k=0;return z(m,function(){k++}),k},toArray:function(m){return z(m,function(k){return k})||[]},only:function(m){if(!C(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},lt.Component=B,lt.Fragment=g,lt.Profiler=D,lt.PureComponent=dt,lt.StrictMode=f,lt.Suspense=U,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,lt.__COMPILER_RUNTIME={__proto__:null,c:function(m){return u.H.useMemoCache(m)}},lt.cache=function(m){return function(){return m.apply(null,arguments)}},lt.cloneElement=function(m,k,P){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var L=M({},m.props),F=m.key,pt=void 0;if(k!=null)for(it in k.ref!==void 0&&(pt=void 0),k.key!==void 0&&(F=""+k.key),k)!p.call(k,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&k.ref===void 0||(L[it]=k[it]);var it=arguments.length-2;if(it===1)L.children=P;else if(1<it){for(var rn=Array(it),Mt=0;Mt<it;Mt++)rn[Mt]=arguments[Mt+2];L.children=rn}return O(m.type,F,void 0,void 0,pt,L)},lt.createContext=function(m){return m={$$typeof:G,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:q,_context:m},m},lt.createElement=function(m,k,P){var L,F={},pt=null;if(k!=null)for(L in k.key!==void 0&&(pt=""+k.key),k)p.call(k,L)&&L!=="key"&&L!=="__self"&&L!=="__source"&&(F[L]=k[L]);var it=arguments.length-2;if(it===1)F.children=P;else if(1<it){for(var rn=Array(it),Mt=0;Mt<it;Mt++)rn[Mt]=arguments[Mt+2];F.children=rn}if(m&&m.defaultProps)for(L in it=m.defaultProps,it)F[L]===void 0&&(F[L]=it[L]);return O(m,pt,void 0,void 0,null,F)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(m){return{$$typeof:X,render:m}},lt.isValidElement=C,lt.lazy=function(m){return{$$typeof:Y,_payload:{_status:-1,_result:m},_init:j}},lt.memo=function(m,k){return{$$typeof:w,type:m,compare:k===void 0?null:k}},lt.startTransition=function(m){var k=u.T,P={};u.T=P;try{var L=m(),F=u.S;F!==null&&F(P,L),typeof L=="object"&&L!==null&&typeof L.then=="function"&&L.then(Tt,et)}catch(pt){et(pt)}finally{u.T=k}},lt.unstable_useCacheRefresh=function(){return u.H.useCacheRefresh()},lt.use=function(m){return u.H.use(m)},lt.useActionState=function(m,k,P){return u.H.useActionState(m,k,P)},lt.useCallback=function(m,k){return u.H.useCallback(m,k)},lt.useContext=function(m){return u.H.useContext(m)},lt.useDebugValue=function(){},lt.useDeferredValue=function(m,k){return u.H.useDeferredValue(m,k)},lt.useEffect=function(m,k,P){var L=u.H;if(typeof P=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return L.useEffect(m,k)},lt.useId=function(){return u.H.useId()},lt.useImperativeHandle=function(m,k,P){return u.H.useImperativeHandle(m,k,P)},lt.useInsertionEffect=function(m,k){return u.H.useInsertionEffect(m,k)},lt.useLayoutEffect=function(m,k){return u.H.useLayoutEffect(m,k)},lt.useMemo=function(m,k){return u.H.useMemo(m,k)},lt.useOptimistic=function(m,k){return u.H.useOptimistic(m,k)},lt.useReducer=function(m,k,P){return u.H.useReducer(m,k,P)},lt.useRef=function(m){return u.H.useRef(m)},lt.useState=function(m){return u.H.useState(m)},lt.useSyncExternalStore=function(m,k,P){return u.H.useSyncExternalStore(m,k,P)},lt.useTransition=function(){return u.H.useTransition()},lt.version="19.1.0",lt}var xh;function Ou(){return xh||(xh=1,gu.exports=sp()),gu.exports}var zt=Ou();const tn=kh(zt);var mu={exports:{}},_i={},bu={exports:{}},vu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sh;function cp(){return Sh||(Sh=1,function(c){function d(z,j){var et=z.length;z.push(j);t:for(;0<et;){var Tt=et-1>>>1,m=z[Tt];if(0<D(m,j))z[Tt]=j,z[et]=m,et=Tt;else break t}}function g(z){return z.length===0?null:z[0]}function f(z){if(z.length===0)return null;var j=z[0],et=z.pop();if(et!==j){z[0]=et;t:for(var Tt=0,m=z.length,k=m>>>1;Tt<k;){var P=2*(Tt+1)-1,L=z[P],F=P+1,pt=z[F];if(0>D(L,et))F<m&&0>D(pt,L)?(z[Tt]=pt,z[F]=et,Tt=F):(z[Tt]=L,z[P]=et,Tt=P);else if(F<m&&0>D(pt,et))z[Tt]=pt,z[F]=et,Tt=F;else break t}}return j}function D(z,j){var et=z.sortIndex-j.sortIndex;return et!==0?et:z.id-j.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var q=performance;c.unstable_now=function(){return q.now()}}else{var G=Date,X=G.now();c.unstable_now=function(){return G.now()-X}}var U=[],w=[],Y=1,J=null,Q=3,ft=!1,M=!1,S=!1,B=!1,W=typeof setTimeout=="function"?setTimeout:null,dt=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function o(z){for(var j=g(w);j!==null;){if(j.callback===null)f(w);else if(j.startTime<=z)f(w),j.sortIndex=j.expirationTime,d(U,j);else break;j=g(w)}}function u(z){if(S=!1,o(z),!M)if(g(U)!==null)M=!0,p||(p=!0,rt());else{var j=g(w);j!==null&&Rt(u,j.startTime-z)}}var p=!1,O=-1,E=5,C=-1;function $(){return B?!0:!(c.unstable_now()-C<E)}function tt(){if(B=!1,p){var z=c.unstable_now();C=z;var j=!0;try{t:{M=!1,S&&(S=!1,dt(O),O=-1),ft=!0;var et=Q;try{n:{for(o(z),J=g(U);J!==null&&!(J.expirationTime>z&&$());){var Tt=J.callback;if(typeof Tt=="function"){J.callback=null,Q=J.priorityLevel;var m=Tt(J.expirationTime<=z);if(z=c.unstable_now(),typeof m=="function"){J.callback=m,o(z),j=!0;break n}J===g(U)&&f(U),o(z)}else f(U);J=g(U)}if(J!==null)j=!0;else{var k=g(w);k!==null&&Rt(u,k.startTime-z),j=!1}}break t}finally{J=null,Q=et,ft=!1}j=void 0}}finally{j?rt():p=!1}}}var rt;if(typeof N=="function")rt=function(){N(tt)};else if(typeof MessageChannel<"u"){var At=new MessageChannel,Lt=At.port2;At.port1.onmessage=tt,rt=function(){Lt.postMessage(null)}}else rt=function(){W(tt,0)};function Rt(z,j){O=W(function(){z(c.unstable_now())},j)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(z){z.callback=null},c.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},c.unstable_getCurrentPriorityLevel=function(){return Q},c.unstable_next=function(z){switch(Q){case 1:case 2:case 3:var j=3;break;default:j=Q}var et=Q;Q=j;try{return z()}finally{Q=et}},c.unstable_requestPaint=function(){B=!0},c.unstable_runWithPriority=function(z,j){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var et=Q;Q=z;try{return j()}finally{Q=et}},c.unstable_scheduleCallback=function(z,j,et){var Tt=c.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?Tt+et:Tt):et=Tt,z){case 1:var m=-1;break;case 2:m=250;break;case 5:m=1073741823;break;case 4:m=1e4;break;default:m=5e3}return m=et+m,z={id:Y++,callback:j,priorityLevel:z,startTime:et,expirationTime:m,sortIndex:-1},et>Tt?(z.sortIndex=et,d(w,z),g(U)===null&&z===g(w)&&(S?(dt(O),O=-1):S=!0,Rt(u,et-Tt))):(z.sortIndex=m,d(U,z),M||ft||(M=!0,p||(p=!0,rt()))),z},c.unstable_shouldYield=$,c.unstable_wrapCallback=function(z){var j=Q;return function(){var et=Q;Q=j;try{return z.apply(this,arguments)}finally{Q=et}}}}(vu)),vu}var Th;function fp(){return Th||(Th=1,bu.exports=cp()),bu.exports}var yu={exports:{}},Ft={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh;function hp(){if(Oh)return Ft;Oh=1;var c=Ou();function d(U){var w="https://react.dev/errors/"+U;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var Y=2;Y<arguments.length;Y++)w+="&args[]="+encodeURIComponent(arguments[Y])}return"Minified React error #"+U+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g(){}var f={d:{f:g,r:function(){throw Error(d(522))},D:g,C:g,L:g,m:g,X:g,S:g,M:g},p:0,findDOMNode:null},D=Symbol.for("react.portal");function q(U,w,Y){var J=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:J==null?null:""+J,children:U,containerInfo:w,implementation:Y}}var G=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function X(U,w){if(U==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return Ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,Ft.createPortal=function(U,w){var Y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(d(299));return q(U,w,null,Y)},Ft.flushSync=function(U){var w=G.T,Y=f.p;try{if(G.T=null,f.p=2,U)return U()}finally{G.T=w,f.p=Y,f.d.f()}},Ft.preconnect=function(U,w){typeof U=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,f.d.C(U,w))},Ft.prefetchDNS=function(U){typeof U=="string"&&f.d.D(U)},Ft.preinit=function(U,w){if(typeof U=="string"&&w&&typeof w.as=="string"){var Y=w.as,J=X(Y,w.crossOrigin),Q=typeof w.integrity=="string"?w.integrity:void 0,ft=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;Y==="style"?f.d.S(U,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:J,integrity:Q,fetchPriority:ft}):Y==="script"&&f.d.X(U,{crossOrigin:J,integrity:Q,fetchPriority:ft,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},Ft.preinitModule=function(U,w){if(typeof U=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var Y=X(w.as,w.crossOrigin);f.d.M(U,{crossOrigin:Y,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0})}}else w==null&&f.d.M(U)},Ft.preload=function(U,w){if(typeof U=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var Y=w.as,J=X(Y,w.crossOrigin);f.d.L(U,Y,{crossOrigin:J,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},Ft.preloadModule=function(U,w){if(typeof U=="string")if(w){var Y=X(w.as,w.crossOrigin);f.d.m(U,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:Y,integrity:typeof w.integrity=="string"?w.integrity:void 0})}else f.d.m(U)},Ft.requestFormReset=function(U){f.d.r(U)},Ft.unstable_batchedUpdates=function(U,w){return U(w)},Ft.useFormState=function(U,w,Y){return G.H.useFormState(U,w,Y)},Ft.useFormStatus=function(){return G.H.useHostTransitionStatus()},Ft.version="19.1.0",Ft}var wh;function dp(){if(wh)return yu.exports;wh=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(d){console.error(d)}}return c(),yu.exports=hp(),yu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ah;function pp(){if(Ah)return _i;Ah=1;var c=fp(),d=Ou(),g=dp();function f(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)n+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function D(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function q(t){var n=t,e=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(e=n.return),t=n.return;while(t)}return n.tag===3?e:null}function G(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function X(t){if(q(t)!==t)throw Error(f(188))}function U(t){var n=t.alternate;if(!n){if(n=q(t),n===null)throw Error(f(188));return n!==t?null:t}for(var e=t,a=n;;){var i=e.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){e=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===e)return X(i),t;if(l===a)return X(i),n;l=l.sibling}throw Error(f(188))}if(e.return!==a.return)e=i,a=l;else{for(var r=!1,s=i.child;s;){if(s===e){r=!0,e=i,a=l;break}if(s===a){r=!0,a=i,e=l;break}s=s.sibling}if(!r){for(s=l.child;s;){if(s===e){r=!0,e=l,a=i;break}if(s===a){r=!0,a=l,e=i;break}s=s.sibling}if(!r)throw Error(f(189))}}if(e.alternate!==a)throw Error(f(190))}if(e.tag!==3)throw Error(f(188));return e.stateNode.current===e?t:n}function w(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=w(t),n!==null)return n;t=t.sibling}return null}var Y=Object.assign,J=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),ft=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),dt=Symbol.for("react.consumer"),N=Symbol.for("react.context"),o=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),$=Symbol.for("react.memo_cache_sentinel"),tt=Symbol.iterator;function rt(t){return t===null||typeof t!="object"?null:(t=tt&&t[tt]||t["@@iterator"],typeof t=="function"?t:null)}var At=Symbol.for("react.client.reference");function Lt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===At?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case B:return"Profiler";case S:return"StrictMode";case u:return"Suspense";case p:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case ft:return"Portal";case N:return(t.displayName||"Context")+".Provider";case dt:return(t._context.displayName||"Context")+".Consumer";case o:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:Lt(t.type)||"Memo";case E:n=t._payload,t=t._init;try{return Lt(t(n))}catch{}}return null}var Rt=Array.isArray,z=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},Tt=[],m=-1;function k(t){return{current:t}}function P(t){0>m||(t.current=Tt[m],Tt[m]=null,m--)}function L(t,n){m++,Tt[m]=t.current,t.current=n}var F=k(null),pt=k(null),it=k(null),rn=k(null);function Mt(t,n){switch(L(it,n),L(pt,t),L(F,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Zf(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Zf(n),t=Qf(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}P(F),L(F,t)}function ne(){P(F),P(pt),P(it)}function Fl(t){t.memoizedState!==null&&L(rn,t);var n=F.current,e=Qf(n,t.type);n!==e&&(L(pt,t),L(F,e))}function Ci(t){pt.current===t&&(P(F),P(pt)),rn.current===t&&(P(rn),Oi._currentValue=et)}var Il=Object.prototype.hasOwnProperty,to=c.unstable_scheduleCallback,no=c.unstable_cancelCallback,Yh=c.unstable_shouldYield,Gh=c.unstable_requestPaint,Cn=c.unstable_now,Xh=c.unstable_getCurrentPriorityLevel,wu=c.unstable_ImmediatePriority,Au=c.unstable_UserBlockingPriority,Hi=c.unstable_NormalPriority,Lh=c.unstable_LowPriority,Mu=c.unstable_IdlePriority,jh=c.log,Ph=c.unstable_setDisableYieldValue,Ra=null,un=null;function ee(t){if(typeof jh=="function"&&Ph(t),un&&typeof un.setStrictMode=="function")try{un.setStrictMode(Ra,t)}catch{}}var sn=Math.clz32?Math.clz32:Vh,Zh=Math.log,Qh=Math.LN2;function Vh(t){return t>>>=0,t===0?32:31-(Zh(t)/Qh|0)|0}var qi=256,ki=4194304;function Ee(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ui(t,n,e){var a=t.pendingLanes;if(a===0)return 0;var i=0,l=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var s=a&134217727;return s!==0?(a=s&~l,a!==0?i=Ee(a):(r&=s,r!==0?i=Ee(r):e||(e=s&~t,e!==0&&(i=Ee(e))))):(s=a&~l,s!==0?i=Ee(s):r!==0?i=Ee(r):e||(e=a&~t,e!==0&&(i=Ee(e)))),i===0?0:n!==0&&n!==i&&(n&l)===0&&(l=i&-i,e=n&-n,l>=e||l===32&&(e&4194048)!==0)?n:i}function Ca(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Kh(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Eu(){var t=qi;return qi<<=1,(qi&4194048)===0&&(qi=256),t}function Du(){var t=ki;return ki<<=1,(ki&62914560)===0&&(ki=4194304),t}function eo(t){for(var n=[],e=0;31>e;e++)n.push(t);return n}function Ha(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Jh(t,n,e,a,i,l){var r=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var s=t.entanglements,h=t.expirationTimes,x=t.hiddenUpdates;for(e=r&~e;0<e;){var _=31-sn(e),H=1<<_;s[_]=0,h[_]=-1;var T=x[_];if(T!==null)for(x[_]=null,_=0;_<T.length;_++){var A=T[_];A!==null&&(A.lane&=-536870913)}e&=~H}a!==0&&_u(t,a,0),l!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=l&~(r&~n))}function _u(t,n,e){t.pendingLanes|=n,t.suspendedLanes&=~n;var a=31-sn(n);t.entangledLanes|=n,t.entanglements[a]=t.entanglements[a]|1073741824|e&4194090}function zu(t,n){var e=t.entangledLanes|=n;for(t=t.entanglements;e;){var a=31-sn(e),i=1<<a;i&n|t[a]&n&&(t[a]|=n),e&=~i}}function ao(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function io(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ru(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:fh(t.type))}function Wh(t,n){var e=j.p;try{return j.p=t,n()}finally{j.p=e}}var ae=Math.random().toString(36).slice(2),Wt="__reactFiber$"+ae,nn="__reactProps$"+ae,Ze="__reactContainer$"+ae,lo="__reactEvents$"+ae,$h="__reactListeners$"+ae,Fh="__reactHandles$"+ae,Cu="__reactResources$"+ae,qa="__reactMarker$"+ae;function oo(t){delete t[Wt],delete t[nn],delete t[lo],delete t[$h],delete t[Fh]}function Qe(t){var n=t[Wt];if(n)return n;for(var e=t.parentNode;e;){if(n=e[Ze]||e[Wt]){if(e=n.alternate,n.child!==null||e!==null&&e.child!==null)for(t=Wf(t);t!==null;){if(e=t[Wt])return e;t=Wf(t)}return n}t=e,e=t.parentNode}return null}function Ve(t){if(t=t[Wt]||t[Ze]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function ka(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(f(33))}function Ke(t){var n=t[Cu];return n||(n=t[Cu]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function jt(t){t[qa]=!0}var Hu=new Set,qu={};function De(t,n){Je(t,n),Je(t+"Capture",n)}function Je(t,n){for(qu[t]=n,t=0;t<n.length;t++)Hu.add(n[t])}var Ih=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ku={},Uu={};function td(t){return Il.call(Uu,t)?!0:Il.call(ku,t)?!1:Ih.test(t)?Uu[t]=!0:(ku[t]=!0,!1)}function Ni(t,n,e){if(td(n))if(e===null)t.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+e)}}function Bi(t,n,e){if(e===null)t.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+e)}}function Yn(t,n,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(n,e,""+a)}}var ro,Nu;function We(t){if(ro===void 0)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);ro=n&&n[1]||"",Nu=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ro+t+Nu}var uo=!1;function so(t,n){if(!t||uo)return"";uo=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(A){var T=A}Reflect.construct(t,[],H)}else{try{H.call()}catch(A){T=A}t.call(H.prototype)}}else{try{throw Error()}catch(A){T=A}(H=t())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(A){if(A&&T&&typeof A.stack=="string")return[A.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),r=l[0],s=l[1];if(r&&s){var h=r.split(`
`),x=s.split(`
`);for(i=a=0;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;for(;i<x.length&&!x[i].includes("DetermineComponentFrameRoot");)i++;if(a===h.length||i===x.length)for(a=h.length-1,i=x.length-1;1<=a&&0<=i&&h[a]!==x[i];)i--;for(;1<=a&&0<=i;a--,i--)if(h[a]!==x[i]){if(a!==1||i!==1)do if(a--,i--,0>i||h[a]!==x[i]){var _=`
`+h[a].replace(" at new "," at ");return t.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",t.displayName)),_}while(1<=a&&0<=i);break}}}finally{uo=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?We(e):""}function nd(t){switch(t.tag){case 26:case 27:case 5:return We(t.type);case 16:return We("Lazy");case 13:return We("Suspense");case 19:return We("SuspenseList");case 0:case 15:return so(t.type,!1);case 11:return so(t.type.render,!1);case 1:return so(t.type,!0);case 31:return We("Activity");default:return""}}function Bu(t){try{var n="";do n+=nd(t),t=t.return;while(t);return n}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}function vn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Yu(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ed(t){var n=Yu(t)?"checked":"value",e=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),a=""+t[n];if(!t.hasOwnProperty(n)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var i=e.get,l=e.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return i.call(this)},set:function(r){a=""+r,l.call(this,r)}}),Object.defineProperty(t,n,{enumerable:e.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Yi(t){t._valueTracker||(t._valueTracker=ed(t))}function Gu(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var e=n.getValue(),a="";return t&&(a=Yu(t)?t.checked?"true":"false":t.value),t=a,t!==e?(n.setValue(t),!0):!1}function Gi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ad=/[\n"\\]/g;function yn(t){return t.replace(ad,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function co(t,n,e,a,i,l,r,s){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),n!=null?r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+vn(n)):t.value!==""+vn(n)&&(t.value=""+vn(n)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),n!=null?fo(t,r,vn(n)):e!=null?fo(t,r,vn(e)):a!=null&&t.removeAttribute("value"),i==null&&l!=null&&(t.defaultChecked=!!l),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+vn(s):t.removeAttribute("name")}function Xu(t,n,e,a,i,l,r,s){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(t.type=l),n!=null||e!=null){if(!(l!=="submit"&&l!=="reset"||n!=null))return;e=e!=null?""+vn(e):"",n=n!=null?""+vn(n):e,s||n===t.value||(t.value=n),t.defaultValue=n}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=s?t.checked:!!a,t.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r)}function fo(t,n,e){n==="number"&&Gi(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function $e(t,n,e,a){if(t=t.options,n){n={};for(var i=0;i<e.length;i++)n["$"+e[i]]=!0;for(e=0;e<t.length;e++)i=n.hasOwnProperty("$"+t[e].value),t[e].selected!==i&&(t[e].selected=i),i&&a&&(t[e].defaultSelected=!0)}else{for(e=""+vn(e),n=null,i=0;i<t.length;i++){if(t[i].value===e){t[i].selected=!0,a&&(t[i].defaultSelected=!0);return}n!==null||t[i].disabled||(n=t[i])}n!==null&&(n.selected=!0)}}function Lu(t,n,e){if(n!=null&&(n=""+vn(n),n!==t.value&&(t.value=n),e==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=e!=null?""+vn(e):""}function ju(t,n,e,a){if(n==null){if(a!=null){if(e!=null)throw Error(f(92));if(Rt(a)){if(1<a.length)throw Error(f(93));a=a[0]}e=a}e==null&&(e=""),n=e}e=vn(n),t.defaultValue=e,a=t.textContent,a===e&&a!==""&&a!==null&&(t.value=a)}function Fe(t,n){if(n){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=n;return}}t.textContent=n}var id=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pu(t,n,e){var a=n.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":a?t.setProperty(n,e):typeof e!="number"||e===0||id.has(n)?n==="float"?t.cssFloat=e:t[n]=(""+e).trim():t[n]=e+"px"}function Zu(t,n,e){if(n!=null&&typeof n!="object")throw Error(f(62));if(t=t.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var i in n)a=n[i],n.hasOwnProperty(i)&&e[i]!==a&&Pu(t,i,a)}else for(var l in n)n.hasOwnProperty(l)&&Pu(t,l,n[l])}function ho(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ld=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),od=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xi(t){return od.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var po=null;function go(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ie=null,ta=null;function Qu(t){var n=Ve(t);if(n&&(t=n.stateNode)){var e=t[nn]||null;t:switch(t=n.stateNode,n.type){case"input":if(co(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),n=e.name,e.type==="radio"&&n!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+yn(""+n)+'"][type="radio"]'),n=0;n<e.length;n++){var a=e[n];if(a!==t&&a.form===t.form){var i=a[nn]||null;if(!i)throw Error(f(90));co(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(n=0;n<e.length;n++)a=e[n],a.form===t.form&&Gu(a)}break t;case"textarea":Lu(t,e.value,e.defaultValue);break t;case"select":n=e.value,n!=null&&$e(t,!!e.multiple,n,!1)}}}var mo=!1;function Vu(t,n,e){if(mo)return t(n,e);mo=!0;try{var a=t(n);return a}finally{if(mo=!1,(Ie!==null||ta!==null)&&(Ml(),Ie&&(n=Ie,t=ta,ta=Ie=null,Qu(n),t)))for(n=0;n<t.length;n++)Qu(t[n])}}function Ua(t,n){var e=t.stateNode;if(e===null)return null;var a=e[nn]||null;if(a===null)return null;e=a[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(f(231,n,typeof e));return e}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bo=!1;if(Gn)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){bo=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{bo=!1}var ie=null,vo=null,Li=null;function Ku(){if(Li)return Li;var t,n=vo,e=n.length,a,i="value"in ie?ie.value:ie.textContent,l=i.length;for(t=0;t<e&&n[t]===i[t];t++);var r=e-t;for(a=1;a<=r&&n[e-a]===i[l-a];a++);return Li=i.slice(t,1<a?1-a:void 0)}function ji(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Pi(){return!0}function Ju(){return!1}function en(t){function n(e,a,i,l,r){this._reactName=e,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=r,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(e=t[s],this[s]=e?e(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Pi:Ju,this.isPropagationStopped=Ju,this}return Y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Pi)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Pi)},persist:function(){},isPersistent:Pi}),n}var _e={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zi=en(_e),Ba=Y({},_e,{view:0,detail:0}),rd=en(Ba),yo,xo,Ya,Qi=Y({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:To,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ya&&(Ya&&t.type==="mousemove"?(yo=t.screenX-Ya.screenX,xo=t.screenY-Ya.screenY):xo=yo=0,Ya=t),yo)},movementY:function(t){return"movementY"in t?t.movementY:xo}}),Wu=en(Qi),ud=Y({},Qi,{dataTransfer:0}),sd=en(ud),cd=Y({},Ba,{relatedTarget:0}),So=en(cd),fd=Y({},_e,{animationName:0,elapsedTime:0,pseudoElement:0}),hd=en(fd),dd=Y({},_e,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pd=en(dd),gd=Y({},_e,{data:0}),$u=en(gd),md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yd(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=vd[t])?!!n[t]:!1}function To(){return yd}var xd=Y({},Ba,{key:function(t){if(t.key){var n=md[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ji(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:To,charCode:function(t){return t.type==="keypress"?ji(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ji(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sd=en(xd),Td=Y({},Qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fu=en(Td),Od=Y({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:To}),wd=en(Od),Ad=Y({},_e,{propertyName:0,elapsedTime:0,pseudoElement:0}),Md=en(Ad),Ed=Y({},Qi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dd=en(Ed),_d=Y({},_e,{newState:0,oldState:0}),zd=en(_d),Rd=[9,13,27,32],Oo=Gn&&"CompositionEvent"in window,Ga=null;Gn&&"documentMode"in document&&(Ga=document.documentMode);var Cd=Gn&&"TextEvent"in window&&!Ga,Iu=Gn&&(!Oo||Ga&&8<Ga&&11>=Ga),ts=" ",ns=!1;function es(t,n){switch(t){case"keyup":return Rd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function as(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var na=!1;function Hd(t,n){switch(t){case"compositionend":return as(n);case"keypress":return n.which!==32?null:(ns=!0,ts);case"textInput":return t=n.data,t===ts&&ns?null:t;default:return null}}function qd(t,n){if(na)return t==="compositionend"||!Oo&&es(t,n)?(t=Ku(),Li=vo=ie=null,na=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Iu&&n.locale!=="ko"?null:n.data;default:return null}}var kd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function is(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!kd[t.type]:n==="textarea"}function ls(t,n,e,a){Ie?ta?ta.push(a):ta=[a]:Ie=a,n=Cl(n,"onChange"),0<n.length&&(e=new Zi("onChange","change",null,e,a),t.push({event:e,listeners:n}))}var Xa=null,La=null;function Ud(t){Gf(t,0)}function Vi(t){var n=ka(t);if(Gu(n))return t}function os(t,n){if(t==="change")return n}var rs=!1;if(Gn){var wo;if(Gn){var Ao="oninput"in document;if(!Ao){var us=document.createElement("div");us.setAttribute("oninput","return;"),Ao=typeof us.oninput=="function"}wo=Ao}else wo=!1;rs=wo&&(!document.documentMode||9<document.documentMode)}function ss(){Xa&&(Xa.detachEvent("onpropertychange",cs),La=Xa=null)}function cs(t){if(t.propertyName==="value"&&Vi(La)){var n=[];ls(n,La,t,go(t)),Vu(Ud,n)}}function Nd(t,n,e){t==="focusin"?(ss(),Xa=n,La=e,Xa.attachEvent("onpropertychange",cs)):t==="focusout"&&ss()}function Bd(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vi(La)}function Yd(t,n){if(t==="click")return Vi(n)}function Gd(t,n){if(t==="input"||t==="change")return Vi(n)}function Xd(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var cn=typeof Object.is=="function"?Object.is:Xd;function ja(t,n){if(cn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var e=Object.keys(t),a=Object.keys(n);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var i=e[a];if(!Il.call(n,i)||!cn(t[i],n[i]))return!1}return!0}function fs(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hs(t,n){var e=fs(t);t=0;for(var a;e;){if(e.nodeType===3){if(a=t+e.textContent.length,t<=n&&a>=n)return{node:e,offset:n-t};t=a}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=fs(e)}}function ds(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?ds(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function ps(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Gi(t.document);n instanceof t.HTMLIFrameElement;){try{var e=typeof n.contentWindow.location.href=="string"}catch{e=!1}if(e)t=n.contentWindow;else break;n=Gi(t.document)}return n}function Mo(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ld=Gn&&"documentMode"in document&&11>=document.documentMode,ea=null,Eo=null,Pa=null,Do=!1;function gs(t,n,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;Do||ea==null||ea!==Gi(a)||(a=ea,"selectionStart"in a&&Mo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Pa&&ja(Pa,a)||(Pa=a,a=Cl(Eo,"onSelect"),0<a.length&&(n=new Zi("onSelect","select",null,n,e),t.push({event:n,listeners:a}),n.target=ea)))}function ze(t,n){var e={};return e[t.toLowerCase()]=n.toLowerCase(),e["Webkit"+t]="webkit"+n,e["Moz"+t]="moz"+n,e}var aa={animationend:ze("Animation","AnimationEnd"),animationiteration:ze("Animation","AnimationIteration"),animationstart:ze("Animation","AnimationStart"),transitionrun:ze("Transition","TransitionRun"),transitionstart:ze("Transition","TransitionStart"),transitioncancel:ze("Transition","TransitionCancel"),transitionend:ze("Transition","TransitionEnd")},_o={},ms={};Gn&&(ms=document.createElement("div").style,"AnimationEvent"in window||(delete aa.animationend.animation,delete aa.animationiteration.animation,delete aa.animationstart.animation),"TransitionEvent"in window||delete aa.transitionend.transition);function Re(t){if(_o[t])return _o[t];if(!aa[t])return t;var n=aa[t],e;for(e in n)if(n.hasOwnProperty(e)&&e in ms)return _o[t]=n[e];return t}var bs=Re("animationend"),vs=Re("animationiteration"),ys=Re("animationstart"),jd=Re("transitionrun"),Pd=Re("transitionstart"),Zd=Re("transitioncancel"),xs=Re("transitionend"),Ss=new Map,zo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zo.push("scrollEnd");function En(t,n){Ss.set(t,n),De(n,[t])}var Ts=new WeakMap;function xn(t,n){if(typeof t=="object"&&t!==null){var e=Ts.get(t);return e!==void 0?e:(n={value:t,source:n,stack:Bu(n)},Ts.set(t,n),n)}return{value:t,source:n,stack:Bu(n)}}var Sn=[],ia=0,Ro=0;function Ki(){for(var t=ia,n=Ro=ia=0;n<t;){var e=Sn[n];Sn[n++]=null;var a=Sn[n];Sn[n++]=null;var i=Sn[n];Sn[n++]=null;var l=Sn[n];if(Sn[n++]=null,a!==null&&i!==null){var r=a.pending;r===null?i.next=i:(i.next=r.next,r.next=i),a.pending=i}l!==0&&Os(e,i,l)}}function Ji(t,n,e,a){Sn[ia++]=t,Sn[ia++]=n,Sn[ia++]=e,Sn[ia++]=a,Ro|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Co(t,n,e,a){return Ji(t,n,e,a),Wi(t)}function la(t,n){return Ji(t,null,null,n),Wi(t)}function Os(t,n,e){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e);for(var i=!1,l=t.return;l!==null;)l.childLanes|=e,a=l.alternate,a!==null&&(a.childLanes|=e),l.tag===22&&(t=l.stateNode,t===null||t._visibility&1||(i=!0)),t=l,l=l.return;return t.tag===3?(l=t.stateNode,i&&n!==null&&(i=31-sn(e),t=l.hiddenUpdates,a=t[i],a===null?t[i]=[n]:a.push(n),n.lane=e|536870912),l):null}function Wi(t){if(50<gi)throw gi=0,Br=null,Error(f(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var oa={};function Qd(t,n,e,a){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(t,n,e,a){return new Qd(t,n,e,a)}function Ho(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xn(t,n){var e=t.alternate;return e===null?(e=fn(t.tag,n,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=n,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&65011712,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function ws(t,n){t.flags&=65011714;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function $i(t,n,e,a,i,l){var r=0;if(a=t,typeof t=="function")Ho(t)&&(r=1);else if(typeof t=="string")r=K0(t,e,F.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case C:return t=fn(31,e,n,i),t.elementType=C,t.lanes=l,t;case M:return Ce(e.children,i,l,n);case S:r=8,i|=24;break;case B:return t=fn(12,e,n,i|2),t.elementType=B,t.lanes=l,t;case u:return t=fn(13,e,n,i),t.elementType=u,t.lanes=l,t;case p:return t=fn(19,e,n,i),t.elementType=p,t.lanes=l,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case W:case N:r=10;break t;case dt:r=9;break t;case o:r=11;break t;case O:r=14;break t;case E:r=16,a=null;break t}r=29,e=Error(f(130,t===null?"null":typeof t,"")),a=null}return n=fn(r,e,n,i),n.elementType=t,n.type=a,n.lanes=l,n}function Ce(t,n,e,a){return t=fn(7,t,a,n),t.lanes=e,t}function qo(t,n,e){return t=fn(6,t,null,n),t.lanes=e,t}function ko(t,n,e){return n=fn(4,t.children!==null?t.children:[],t.key,n),n.lanes=e,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var ra=[],ua=0,Fi=null,Ii=0,Tn=[],On=0,He=null,Ln=1,jn="";function qe(t,n){ra[ua++]=Ii,ra[ua++]=Fi,Fi=t,Ii=n}function As(t,n,e){Tn[On++]=Ln,Tn[On++]=jn,Tn[On++]=He,He=t;var a=Ln;t=jn;var i=32-sn(a)-1;a&=~(1<<i),e+=1;var l=32-sn(n)+i;if(30<l){var r=i-i%5;l=(a&(1<<r)-1).toString(32),a>>=r,i-=r,Ln=1<<32-sn(n)+i|e<<i|a,jn=l+t}else Ln=1<<l|e<<i|a,jn=t}function Uo(t){t.return!==null&&(qe(t,1),As(t,1,0))}function No(t){for(;t===Fi;)Fi=ra[--ua],ra[ua]=null,Ii=ra[--ua],ra[ua]=null;for(;t===He;)He=Tn[--On],Tn[On]=null,jn=Tn[--On],Tn[On]=null,Ln=Tn[--On],Tn[On]=null}var It=null,Ct=null,mt=!1,ke=null,Hn=!1,Bo=Error(f(519));function Ue(t){var n=Error(f(418,""));throw Va(xn(n,t)),Bo}function Ms(t){var n=t.stateNode,e=t.type,a=t.memoizedProps;switch(n[Wt]=t,n[nn]=a,e){case"dialog":ct("cancel",n),ct("close",n);break;case"iframe":case"object":case"embed":ct("load",n);break;case"video":case"audio":for(e=0;e<bi.length;e++)ct(bi[e],n);break;case"source":ct("error",n);break;case"img":case"image":case"link":ct("error",n),ct("load",n);break;case"details":ct("toggle",n);break;case"input":ct("invalid",n),Xu(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Yi(n);break;case"select":ct("invalid",n);break;case"textarea":ct("invalid",n),ju(n,a.value,a.defaultValue,a.children),Yi(n)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||n.textContent===""+e||a.suppressHydrationWarning===!0||Pf(n.textContent,e)?(a.popover!=null&&(ct("beforetoggle",n),ct("toggle",n)),a.onScroll!=null&&ct("scroll",n),a.onScrollEnd!=null&&ct("scrollend",n),a.onClick!=null&&(n.onclick=Hl),n=!0):n=!1,n||Ue(t)}function Es(t){for(It=t.return;It;)switch(It.tag){case 5:case 13:Hn=!1;return;case 27:case 3:Hn=!0;return;default:It=It.return}}function Za(t){if(t!==It)return!1;if(!mt)return Es(t),mt=!0,!1;var n=t.tag,e;if((e=n!==3&&n!==27)&&((e=n===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||tu(t.type,t.memoizedProps)),e=!e),e&&Ct&&Ue(t),Es(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(e=t.data,e==="/$"){if(n===0){Ct=_n(t.nextSibling);break t}n--}else e!=="$"&&e!=="$!"&&e!=="$?"||n++;t=t.nextSibling}Ct=null}}else n===27?(n=Ct,xe(t.type)?(t=iu,iu=null,Ct=t):Ct=n):Ct=It?_n(t.stateNode.nextSibling):null;return!0}function Qa(){Ct=It=null,mt=!1}function Ds(){var t=ke;return t!==null&&(on===null?on=t:on.push.apply(on,t),ke=null),t}function Va(t){ke===null?ke=[t]:ke.push(t)}var Yo=k(null),Ne=null,Pn=null;function le(t,n,e){L(Yo,n._currentValue),n._currentValue=e}function Zn(t){t._currentValue=Yo.current,P(Yo)}function Go(t,n,e){for(;t!==null;){var a=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),t===e)break;t=t.return}}function Xo(t,n,e,a){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){var r=i.child;l=l.firstContext;t:for(;l!==null;){var s=l;l=i;for(var h=0;h<n.length;h++)if(s.context===n[h]){l.lanes|=e,s=l.alternate,s!==null&&(s.lanes|=e),Go(l.return,e,t),a||(r=null);break t}l=s.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(f(341));r.lanes|=e,l=r.alternate,l!==null&&(l.lanes|=e),Go(r,e,t),r=null}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===t){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function Ka(t,n,e,a){t=null;for(var i=n,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(f(387));if(r=r.memoizedProps,r!==null){var s=i.type;cn(i.pendingProps.value,r.value)||(t!==null?t.push(s):t=[s])}}else if(i===rn.current){if(r=i.alternate,r===null)throw Error(f(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Oi):t=[Oi])}i=i.return}t!==null&&Xo(n,t,e,a),n.flags|=262144}function tl(t){for(t=t.firstContext;t!==null;){if(!cn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Be(t){Ne=t,Pn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function $t(t){return _s(Ne,t)}function nl(t,n){return Ne===null&&Be(t),_s(t,n)}function _s(t,n){var e=n._currentValue;if(n={context:n,memoizedValue:e,next:null},Pn===null){if(t===null)throw Error(f(308));Pn=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Pn=Pn.next=n;return e}var Vd=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(e,a){t.push(a)}};this.abort=function(){n.aborted=!0,t.forEach(function(e){return e()})}},Kd=c.unstable_scheduleCallback,Jd=c.unstable_NormalPriority,Yt={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lo(){return{controller:new Vd,data:new Map,refCount:0}}function Ja(t){t.refCount--,t.refCount===0&&Kd(Jd,function(){t.controller.abort()})}var Wa=null,jo=0,sa=0,ca=null;function Wd(t,n){if(Wa===null){var e=Wa=[];jo=0,sa=Zr(),ca={status:"pending",value:void 0,then:function(a){e.push(a)}}}return jo++,n.then(zs,zs),n}function zs(){if(--jo===0&&Wa!==null){ca!==null&&(ca.status="fulfilled");var t=Wa;Wa=null,sa=0,ca=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function $d(t,n){var e=[],a={status:"pending",value:null,reason:null,then:function(i){e.push(i)}};return t.then(function(){a.status="fulfilled",a.value=n;for(var i=0;i<e.length;i++)(0,e[i])(n)},function(i){for(a.status="rejected",a.reason=i,i=0;i<e.length;i++)(0,e[i])(void 0)}),a}var Rs=z.S;z.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Wd(t,n),Rs!==null&&Rs(t,n)};var Ye=k(null);function Po(){var t=Ye.current;return t!==null?t:wt.pooledCache}function el(t,n){n===null?L(Ye,Ye.current):L(Ye,n.pool)}function Cs(){var t=Po();return t===null?null:{parent:Yt._currentValue,pool:t}}var $a=Error(f(460)),Hs=Error(f(474)),al=Error(f(542)),Zo={then:function(){}};function qs(t){return t=t.status,t==="fulfilled"||t==="rejected"}function il(){}function ks(t,n,e){switch(e=t[e],e===void 0?t.push(n):e!==n&&(n.then(il,il),n=e),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ns(t),t;default:if(typeof n.status=="string")n.then(il,il);else{if(t=wt,t!==null&&100<t.shellSuspendCounter)throw Error(f(482));t=n,t.status="pending",t.then(function(a){if(n.status==="pending"){var i=n;i.status="fulfilled",i.value=a}},function(a){if(n.status==="pending"){var i=n;i.status="rejected",i.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ns(t),t}throw Fa=n,$a}}var Fa=null;function Us(){if(Fa===null)throw Error(f(459));var t=Fa;return Fa=null,t}function Ns(t){if(t===$a||t===al)throw Error(f(483))}var oe=!1;function Qo(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vo(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function re(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ue(t,n,e){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(bt&2)!==0){var i=a.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n,n=Wi(t),Os(t,null,e),n}return Ji(t,a,n,e),Wi(t)}function Ia(t,n,e){if(n=n.updateQueue,n!==null&&(n=n.shared,(e&4194048)!==0)){var a=n.lanes;a&=t.pendingLanes,e|=a,n.lanes=e,zu(t,e)}}function Ko(t,n){var e=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var i=null,l=null;if(e=e.firstBaseUpdate,e!==null){do{var r={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};l===null?i=l=r:l=l.next=r,e=e.next}while(e!==null);l===null?i=l=n:l=l.next=n}else i=l=n;e={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=n:t.next=n,e.lastBaseUpdate=n}var Jo=!1;function ti(){if(Jo){var t=ca;if(t!==null)throw t}}function ni(t,n,e,a){Jo=!1;var i=t.updateQueue;oe=!1;var l=i.firstBaseUpdate,r=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var h=s,x=h.next;h.next=null,r===null?l=x:r.next=x,r=h;var _=t.alternate;_!==null&&(_=_.updateQueue,s=_.lastBaseUpdate,s!==r&&(s===null?_.firstBaseUpdate=x:s.next=x,_.lastBaseUpdate=h))}if(l!==null){var H=i.baseState;r=0,_=x=h=null,s=l;do{var T=s.lane&-536870913,A=T!==s.lane;if(A?(ht&T)===T:(a&T)===T){T!==0&&T===sa&&(Jo=!0),_!==null&&(_=_.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var at=t,I=s;T=n;var St=e;switch(I.tag){case 1:if(at=I.payload,typeof at=="function"){H=at.call(St,H,T);break t}H=at;break t;case 3:at.flags=at.flags&-65537|128;case 0:if(at=I.payload,T=typeof at=="function"?at.call(St,H,T):at,T==null)break t;H=Y({},H,T);break t;case 2:oe=!0}}T=s.callback,T!==null&&(t.flags|=64,A&&(t.flags|=8192),A=i.callbacks,A===null?i.callbacks=[T]:A.push(T))}else A={lane:T,tag:s.tag,payload:s.payload,callback:s.callback,next:null},_===null?(x=_=A,h=H):_=_.next=A,r|=T;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;A=s,s=A.next,A.next=null,i.lastBaseUpdate=A,i.shared.pending=null}}while(!0);_===null&&(h=H),i.baseState=h,i.firstBaseUpdate=x,i.lastBaseUpdate=_,l===null&&(i.shared.lanes=0),me|=r,t.lanes=r,t.memoizedState=H}}function Bs(t,n){if(typeof t!="function")throw Error(f(191,t));t.call(n)}function Ys(t,n){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)Bs(e[t],n)}var fa=k(null),ll=k(0);function Gs(t,n){t=Fn,L(ll,t),L(fa,n),Fn=t|n.baseLanes}function Wo(){L(ll,Fn),L(fa,fa.current)}function $o(){Fn=ll.current,P(fa),P(ll)}var se=0,ot=null,yt=null,Nt=null,ol=!1,ha=!1,Ge=!1,rl=0,ei=0,da=null,Fd=0;function qt(){throw Error(f(321))}function Fo(t,n){if(n===null)return!1;for(var e=0;e<n.length&&e<t.length;e++)if(!cn(t[e],n[e]))return!1;return!0}function Io(t,n,e,a,i,l){return se=l,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?Oc:wc,Ge=!1,l=e(a,i),Ge=!1,ha&&(l=Ls(n,e,a,i)),Xs(t),l}function Xs(t){z.H=dl;var n=yt!==null&&yt.next!==null;if(se=0,Nt=yt=ot=null,ol=!1,ei=0,da=null,n)throw Error(f(300));t===null||Pt||(t=t.dependencies,t!==null&&tl(t)&&(Pt=!0))}function Ls(t,n,e,a){ot=t;var i=0;do{if(ha&&(da=null),ei=0,ha=!1,25<=i)throw Error(f(301));if(i+=1,Nt=yt=null,t.updateQueue!=null){var l=t.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}z.H=l0,l=n(e,a)}while(ha);return l}function Id(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?ai(n):n,t=t.useState()[0],(yt!==null?yt.memoizedState:null)!==t&&(ot.flags|=1024),n}function tr(){var t=rl!==0;return rl=0,t}function nr(t,n,e){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~e}function er(t){if(ol){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ol=!1}se=0,Nt=yt=ot=null,ha=!1,ei=rl=0,da=null}function an(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?ot.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Bt(){if(yt===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var n=Nt===null?ot.memoizedState:Nt.next;if(n!==null)Nt=n,yt=t;else{if(t===null)throw ot.alternate===null?Error(f(467)):Error(f(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Nt===null?ot.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function ar(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ai(t){var n=ei;return ei+=1,da===null&&(da=[]),t=ks(da,t,n),n=ot,(Nt===null?n.memoizedState:Nt.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Oc:wc),t}function ul(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ai(t);if(t.$$typeof===N)return $t(t)}throw Error(f(438,String(t)))}function ir(t){var n=null,e=ot.updateQueue;if(e!==null&&(n=e.memoCache),n==null){var a=ot.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(i){return i.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),e===null&&(e=ar(),ot.updateQueue=e),e.memoCache=n,e=n.data[n.index],e===void 0)for(e=n.data[n.index]=Array(t),a=0;a<t;a++)e[a]=$;return n.index++,e}function Qn(t,n){return typeof n=="function"?n(t):n}function sl(t){var n=Bt();return lr(n,yt,t)}function lr(t,n,e){var a=t.queue;if(a===null)throw Error(f(311));a.lastRenderedReducer=e;var i=t.baseQueue,l=a.pending;if(l!==null){if(i!==null){var r=i.next;i.next=l.next,l.next=r}n.baseQueue=i=l,a.pending=null}if(l=t.baseState,i===null)t.memoizedState=l;else{n=i.next;var s=r=null,h=null,x=n,_=!1;do{var H=x.lane&-536870913;if(H!==x.lane?(ht&H)===H:(se&H)===H){var T=x.revertLane;if(T===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),H===sa&&(_=!0);else if((se&T)===T){x=x.next,T===sa&&(_=!0);continue}else H={lane:0,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},h===null?(s=h=H,r=l):h=h.next=H,ot.lanes|=T,me|=T;H=x.action,Ge&&e(l,H),l=x.hasEagerState?x.eagerState:e(l,H)}else T={lane:H,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},h===null?(s=h=T,r=l):h=h.next=T,ot.lanes|=H,me|=H;x=x.next}while(x!==null&&x!==n);if(h===null?r=l:h.next=s,!cn(l,t.memoizedState)&&(Pt=!0,_&&(e=ca,e!==null)))throw e;t.memoizedState=l,t.baseState=r,t.baseQueue=h,a.lastRenderedState=l}return i===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function or(t){var n=Bt(),e=n.queue;if(e===null)throw Error(f(311));e.lastRenderedReducer=t;var a=e.dispatch,i=e.pending,l=n.memoizedState;if(i!==null){e.pending=null;var r=i=i.next;do l=t(l,r.action),r=r.next;while(r!==i);cn(l,n.memoizedState)||(Pt=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),e.lastRenderedState=l}return[l,a]}function js(t,n,e){var a=ot,i=Bt(),l=mt;if(l){if(e===void 0)throw Error(f(407));e=e()}else e=n();var r=!cn((yt||i).memoizedState,e);r&&(i.memoizedState=e,Pt=!0),i=i.queue;var s=Qs.bind(null,a,i,t);if(ii(2048,8,s,[t]),i.getSnapshot!==n||r||Nt!==null&&Nt.memoizedState.tag&1){if(a.flags|=2048,pa(9,cl(),Zs.bind(null,a,i,e,n),null),wt===null)throw Error(f(349));l||(se&124)!==0||Ps(a,n,e)}return e}function Ps(t,n,e){t.flags|=16384,t={getSnapshot:n,value:e},n=ot.updateQueue,n===null?(n=ar(),ot.updateQueue=n,n.stores=[t]):(e=n.stores,e===null?n.stores=[t]:e.push(t))}function Zs(t,n,e,a){n.value=e,n.getSnapshot=a,Vs(n)&&Ks(t)}function Qs(t,n,e){return e(function(){Vs(n)&&Ks(t)})}function Vs(t){var n=t.getSnapshot;t=t.value;try{var e=n();return!cn(t,e)}catch{return!0}}function Ks(t){var n=la(t,2);n!==null&&mn(n,t,2)}function rr(t){var n=an();if(typeof t=="function"){var e=t;if(t=e(),Ge){ee(!0);try{e()}finally{ee(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:t},n}function Js(t,n,e,a){return t.baseState=e,lr(t,yt,typeof a=="function"?a:Qn)}function t0(t,n,e,a,i){if(hl(t))throw Error(f(485));if(t=n.action,t!==null){var l={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){l.listeners.push(r)}};z.T!==null?e(!0):l.isTransition=!1,a(l),e=n.pending,e===null?(l.next=n.pending=l,Ws(n,l)):(l.next=e.next,n.pending=e.next=l)}}function Ws(t,n){var e=n.action,a=n.payload,i=t.state;if(n.isTransition){var l=z.T,r={};z.T=r;try{var s=e(i,a),h=z.S;h!==null&&h(r,s),$s(t,n,s)}catch(x){ur(t,n,x)}finally{z.T=l}}else try{l=e(i,a),$s(t,n,l)}catch(x){ur(t,n,x)}}function $s(t,n,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){Fs(t,n,a)},function(a){return ur(t,n,a)}):Fs(t,n,e)}function Fs(t,n,e){n.status="fulfilled",n.value=e,Is(n),t.state=e,n=t.pending,n!==null&&(e=n.next,e===n?t.pending=null:(e=e.next,n.next=e,Ws(t,e)))}function ur(t,n,e){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=e,Is(n),n=n.next;while(n!==a)}t.action=null}function Is(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function tc(t,n){return n}function nc(t,n){if(mt){var e=wt.formState;if(e!==null){t:{var a=ot;if(mt){if(Ct){n:{for(var i=Ct,l=Hn;i.nodeType!==8;){if(!l){i=null;break n}if(i=_n(i.nextSibling),i===null){i=null;break n}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){Ct=_n(i.nextSibling),a=i.data==="F!";break t}}Ue(a)}a=!1}a&&(n=e[0])}}return e=an(),e.memoizedState=e.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tc,lastRenderedState:n},e.queue=a,e=xc.bind(null,ot,a),a.dispatch=e,a=rr(!1),l=dr.bind(null,ot,!1,a.queue),a=an(),i={state:n,dispatch:null,action:t,pending:null},a.queue=i,e=t0.bind(null,ot,i,l,e),i.dispatch=e,a.memoizedState=t,[n,e,!1]}function ec(t){var n=Bt();return ac(n,yt,t)}function ac(t,n,e){if(n=lr(t,n,tc)[0],t=sl(Qn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=ai(n)}catch(r){throw r===$a?al:r}else a=n;n=Bt();var i=n.queue,l=i.dispatch;return e!==n.memoizedState&&(ot.flags|=2048,pa(9,cl(),n0.bind(null,i,e),null)),[a,l,t]}function n0(t,n){t.action=n}function ic(t){var n=Bt(),e=yt;if(e!==null)return ac(n,e,t);Bt(),n=n.memoizedState,e=Bt();var a=e.queue.dispatch;return e.memoizedState=t,[n,a,!1]}function pa(t,n,e,a){return t={tag:t,create:e,deps:a,inst:n,next:null},n=ot.updateQueue,n===null&&(n=ar(),ot.updateQueue=n),e=n.lastEffect,e===null?n.lastEffect=t.next=t:(a=e.next,e.next=t,t.next=a,n.lastEffect=t),t}function cl(){return{destroy:void 0,resource:void 0}}function lc(){return Bt().memoizedState}function fl(t,n,e,a){var i=an();a=a===void 0?null:a,ot.flags|=t,i.memoizedState=pa(1|n,cl(),e,a)}function ii(t,n,e,a){var i=Bt();a=a===void 0?null:a;var l=i.memoizedState.inst;yt!==null&&a!==null&&Fo(a,yt.memoizedState.deps)?i.memoizedState=pa(n,l,e,a):(ot.flags|=t,i.memoizedState=pa(1|n,l,e,a))}function oc(t,n){fl(8390656,8,t,n)}function rc(t,n){ii(2048,8,t,n)}function uc(t,n){return ii(4,2,t,n)}function sc(t,n){return ii(4,4,t,n)}function cc(t,n){if(typeof n=="function"){t=t();var e=n(t);return function(){typeof e=="function"?e():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function fc(t,n,e){e=e!=null?e.concat([t]):null,ii(4,4,cc.bind(null,n,t),e)}function sr(){}function hc(t,n){var e=Bt();n=n===void 0?null:n;var a=e.memoizedState;return n!==null&&Fo(n,a[1])?a[0]:(e.memoizedState=[t,n],t)}function dc(t,n){var e=Bt();n=n===void 0?null:n;var a=e.memoizedState;if(n!==null&&Fo(n,a[1]))return a[0];if(a=t(),Ge){ee(!0);try{t()}finally{ee(!1)}}return e.memoizedState=[a,n],a}function cr(t,n,e){return e===void 0||(se&1073741824)!==0?t.memoizedState=n:(t.memoizedState=e,t=bf(),ot.lanes|=t,me|=t,e)}function pc(t,n,e,a){return cn(e,n)?e:fa.current!==null?(t=cr(t,e,a),cn(t,n)||(Pt=!0),t):(se&42)===0?(Pt=!0,t.memoizedState=e):(t=bf(),ot.lanes|=t,me|=t,n)}function gc(t,n,e,a,i){var l=j.p;j.p=l!==0&&8>l?l:8;var r=z.T,s={};z.T=s,dr(t,!1,n,e);try{var h=i(),x=z.S;if(x!==null&&x(s,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var _=$d(h,a);li(t,n,_,gn(t))}else li(t,n,a,gn(t))}catch(H){li(t,n,{then:function(){},status:"rejected",reason:H},gn())}finally{j.p=l,z.T=r}}function e0(){}function fr(t,n,e,a){if(t.tag!==5)throw Error(f(476));var i=mc(t).queue;gc(t,i,n,et,e===null?e0:function(){return bc(t),e(a)})}function mc(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:et},next:null};var e={};return n.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:e},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function bc(t){var n=mc(t).next.queue;li(t,n,{},gn())}function hr(){return $t(Oi)}function vc(){return Bt().memoizedState}function yc(){return Bt().memoizedState}function a0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var e=gn();t=re(e);var a=ue(n,t,e);a!==null&&(mn(a,n,e),Ia(a,n,e)),n={cache:Lo()},t.payload=n;return}n=n.return}}function i0(t,n,e){var a=gn();e={lane:a,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null},hl(t)?Sc(n,e):(e=Co(t,n,e,a),e!==null&&(mn(e,t,a),Tc(e,n,a)))}function xc(t,n,e){var a=gn();li(t,n,e,a)}function li(t,n,e,a){var i={lane:a,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null};if(hl(t))Sc(n,i);else{var l=t.alternate;if(t.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var r=n.lastRenderedState,s=l(r,e);if(i.hasEagerState=!0,i.eagerState=s,cn(s,r))return Ji(t,n,i,0),wt===null&&Ki(),!1}catch{}finally{}if(e=Co(t,n,i,a),e!==null)return mn(e,t,a),Tc(e,n,a),!0}return!1}function dr(t,n,e,a){if(a={lane:2,revertLane:Zr(),action:a,hasEagerState:!1,eagerState:null,next:null},hl(t)){if(n)throw Error(f(479))}else n=Co(t,e,a,2),n!==null&&mn(n,t,2)}function hl(t){var n=t.alternate;return t===ot||n!==null&&n===ot}function Sc(t,n){ha=ol=!0;var e=t.pending;e===null?n.next=n:(n.next=e.next,e.next=n),t.pending=n}function Tc(t,n,e){if((e&4194048)!==0){var a=n.lanes;a&=t.pendingLanes,e|=a,n.lanes=e,zu(t,e)}}var dl={readContext:$t,use:ul,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useLayoutEffect:qt,useInsertionEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useSyncExternalStore:qt,useId:qt,useHostTransitionStatus:qt,useFormState:qt,useActionState:qt,useOptimistic:qt,useMemoCache:qt,useCacheRefresh:qt},Oc={readContext:$t,use:ul,useCallback:function(t,n){return an().memoizedState=[t,n===void 0?null:n],t},useContext:$t,useEffect:oc,useImperativeHandle:function(t,n,e){e=e!=null?e.concat([t]):null,fl(4194308,4,cc.bind(null,n,t),e)},useLayoutEffect:function(t,n){return fl(4194308,4,t,n)},useInsertionEffect:function(t,n){fl(4,2,t,n)},useMemo:function(t,n){var e=an();n=n===void 0?null:n;var a=t();if(Ge){ee(!0);try{t()}finally{ee(!1)}}return e.memoizedState=[a,n],a},useReducer:function(t,n,e){var a=an();if(e!==void 0){var i=e(n);if(Ge){ee(!0);try{e(n)}finally{ee(!1)}}}else i=n;return a.memoizedState=a.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=i0.bind(null,ot,t),[a.memoizedState,t]},useRef:function(t){var n=an();return t={current:t},n.memoizedState=t},useState:function(t){t=rr(t);var n=t.queue,e=xc.bind(null,ot,n);return n.dispatch=e,[t.memoizedState,e]},useDebugValue:sr,useDeferredValue:function(t,n){var e=an();return cr(e,t,n)},useTransition:function(){var t=rr(!1);return t=gc.bind(null,ot,t.queue,!0,!1),an().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,e){var a=ot,i=an();if(mt){if(e===void 0)throw Error(f(407));e=e()}else{if(e=n(),wt===null)throw Error(f(349));(ht&124)!==0||Ps(a,n,e)}i.memoizedState=e;var l={value:e,getSnapshot:n};return i.queue=l,oc(Qs.bind(null,a,l,t),[t]),a.flags|=2048,pa(9,cl(),Zs.bind(null,a,l,e,n),null),e},useId:function(){var t=an(),n=wt.identifierPrefix;if(mt){var e=jn,a=Ln;e=(a&~(1<<32-sn(a)-1)).toString(32)+e,n="«"+n+"R"+e,e=rl++,0<e&&(n+="H"+e.toString(32)),n+="»"}else e=Fd++,n="«"+n+"r"+e.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:hr,useFormState:nc,useActionState:nc,useOptimistic:function(t){var n=an();n.memoizedState=n.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=e,n=dr.bind(null,ot,!0,e),e.dispatch=n,[t,n]},useMemoCache:ir,useCacheRefresh:function(){return an().memoizedState=a0.bind(null,ot)}},wc={readContext:$t,use:ul,useCallback:hc,useContext:$t,useEffect:rc,useImperativeHandle:fc,useInsertionEffect:uc,useLayoutEffect:sc,useMemo:dc,useReducer:sl,useRef:lc,useState:function(){return sl(Qn)},useDebugValue:sr,useDeferredValue:function(t,n){var e=Bt();return pc(e,yt.memoizedState,t,n)},useTransition:function(){var t=sl(Qn)[0],n=Bt().memoizedState;return[typeof t=="boolean"?t:ai(t),n]},useSyncExternalStore:js,useId:vc,useHostTransitionStatus:hr,useFormState:ec,useActionState:ec,useOptimistic:function(t,n){var e=Bt();return Js(e,yt,t,n)},useMemoCache:ir,useCacheRefresh:yc},l0={readContext:$t,use:ul,useCallback:hc,useContext:$t,useEffect:rc,useImperativeHandle:fc,useInsertionEffect:uc,useLayoutEffect:sc,useMemo:dc,useReducer:or,useRef:lc,useState:function(){return or(Qn)},useDebugValue:sr,useDeferredValue:function(t,n){var e=Bt();return yt===null?cr(e,t,n):pc(e,yt.memoizedState,t,n)},useTransition:function(){var t=or(Qn)[0],n=Bt().memoizedState;return[typeof t=="boolean"?t:ai(t),n]},useSyncExternalStore:js,useId:vc,useHostTransitionStatus:hr,useFormState:ic,useActionState:ic,useOptimistic:function(t,n){var e=Bt();return yt!==null?Js(e,yt,t,n):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:ir,useCacheRefresh:yc},ga=null,oi=0;function pl(t){var n=oi;return oi+=1,ga===null&&(ga=[]),ks(ga,t,n)}function ri(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function gl(t,n){throw n.$$typeof===J?Error(f(525)):(t=Object.prototype.toString.call(n),Error(f(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Ac(t){var n=t._init;return n(t._payload)}function Mc(t){function n(v,b){if(t){var y=v.deletions;y===null?(v.deletions=[b],v.flags|=16):y.push(b)}}function e(v,b){if(!t)return null;for(;b!==null;)n(v,b),b=b.sibling;return null}function a(v){for(var b=new Map;v!==null;)v.key!==null?b.set(v.key,v):b.set(v.index,v),v=v.sibling;return b}function i(v,b){return v=Xn(v,b),v.index=0,v.sibling=null,v}function l(v,b,y){return v.index=y,t?(y=v.alternate,y!==null?(y=y.index,y<b?(v.flags|=67108866,b):y):(v.flags|=67108866,b)):(v.flags|=1048576,b)}function r(v){return t&&v.alternate===null&&(v.flags|=67108866),v}function s(v,b,y,R){return b===null||b.tag!==6?(b=qo(y,v.mode,R),b.return=v,b):(b=i(b,y),b.return=v,b)}function h(v,b,y,R){var Z=y.type;return Z===M?_(v,b,y.props.children,R,y.key):b!==null&&(b.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===E&&Ac(Z)===b.type)?(b=i(b,y.props),ri(b,y),b.return=v,b):(b=$i(y.type,y.key,y.props,null,v.mode,R),ri(b,y),b.return=v,b)}function x(v,b,y,R){return b===null||b.tag!==4||b.stateNode.containerInfo!==y.containerInfo||b.stateNode.implementation!==y.implementation?(b=ko(y,v.mode,R),b.return=v,b):(b=i(b,y.children||[]),b.return=v,b)}function _(v,b,y,R,Z){return b===null||b.tag!==7?(b=Ce(y,v.mode,R,Z),b.return=v,b):(b=i(b,y),b.return=v,b)}function H(v,b,y){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=qo(""+b,v.mode,y),b.return=v,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Q:return y=$i(b.type,b.key,b.props,null,v.mode,y),ri(y,b),y.return=v,y;case ft:return b=ko(b,v.mode,y),b.return=v,b;case E:var R=b._init;return b=R(b._payload),H(v,b,y)}if(Rt(b)||rt(b))return b=Ce(b,v.mode,y,null),b.return=v,b;if(typeof b.then=="function")return H(v,pl(b),y);if(b.$$typeof===N)return H(v,nl(v,b),y);gl(v,b)}return null}function T(v,b,y,R){var Z=b!==null?b.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return Z!==null?null:s(v,b,""+y,R);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Q:return y.key===Z?h(v,b,y,R):null;case ft:return y.key===Z?x(v,b,y,R):null;case E:return Z=y._init,y=Z(y._payload),T(v,b,y,R)}if(Rt(y)||rt(y))return Z!==null?null:_(v,b,y,R,null);if(typeof y.then=="function")return T(v,b,pl(y),R);if(y.$$typeof===N)return T(v,b,nl(v,y),R);gl(v,y)}return null}function A(v,b,y,R,Z){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return v=v.get(y)||null,s(b,v,""+R,Z);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Q:return v=v.get(R.key===null?y:R.key)||null,h(b,v,R,Z);case ft:return v=v.get(R.key===null?y:R.key)||null,x(b,v,R,Z);case E:var ut=R._init;return R=ut(R._payload),A(v,b,y,R,Z)}if(Rt(R)||rt(R))return v=v.get(y)||null,_(b,v,R,Z,null);if(typeof R.then=="function")return A(v,b,y,pl(R),Z);if(R.$$typeof===N)return A(v,b,y,nl(b,R),Z);gl(b,R)}return null}function at(v,b,y,R){for(var Z=null,ut=null,V=b,nt=b=0,Qt=null;V!==null&&nt<y.length;nt++){V.index>nt?(Qt=V,V=null):Qt=V.sibling;var gt=T(v,V,y[nt],R);if(gt===null){V===null&&(V=Qt);break}t&&V&&gt.alternate===null&&n(v,V),b=l(gt,b,nt),ut===null?Z=gt:ut.sibling=gt,ut=gt,V=Qt}if(nt===y.length)return e(v,V),mt&&qe(v,nt),Z;if(V===null){for(;nt<y.length;nt++)V=H(v,y[nt],R),V!==null&&(b=l(V,b,nt),ut===null?Z=V:ut.sibling=V,ut=V);return mt&&qe(v,nt),Z}for(V=a(V);nt<y.length;nt++)Qt=A(V,v,nt,y[nt],R),Qt!==null&&(t&&Qt.alternate!==null&&V.delete(Qt.key===null?nt:Qt.key),b=l(Qt,b,nt),ut===null?Z=Qt:ut.sibling=Qt,ut=Qt);return t&&V.forEach(function(Ae){return n(v,Ae)}),mt&&qe(v,nt),Z}function I(v,b,y,R){if(y==null)throw Error(f(151));for(var Z=null,ut=null,V=b,nt=b=0,Qt=null,gt=y.next();V!==null&&!gt.done;nt++,gt=y.next()){V.index>nt?(Qt=V,V=null):Qt=V.sibling;var Ae=T(v,V,gt.value,R);if(Ae===null){V===null&&(V=Qt);break}t&&V&&Ae.alternate===null&&n(v,V),b=l(Ae,b,nt),ut===null?Z=Ae:ut.sibling=Ae,ut=Ae,V=Qt}if(gt.done)return e(v,V),mt&&qe(v,nt),Z;if(V===null){for(;!gt.done;nt++,gt=y.next())gt=H(v,gt.value,R),gt!==null&&(b=l(gt,b,nt),ut===null?Z=gt:ut.sibling=gt,ut=gt);return mt&&qe(v,nt),Z}for(V=a(V);!gt.done;nt++,gt=y.next())gt=A(V,v,nt,gt.value,R),gt!==null&&(t&&gt.alternate!==null&&V.delete(gt.key===null?nt:gt.key),b=l(gt,b,nt),ut===null?Z=gt:ut.sibling=gt,ut=gt);return t&&V.forEach(function(op){return n(v,op)}),mt&&qe(v,nt),Z}function St(v,b,y,R){if(typeof y=="object"&&y!==null&&y.type===M&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Q:t:{for(var Z=y.key;b!==null;){if(b.key===Z){if(Z=y.type,Z===M){if(b.tag===7){e(v,b.sibling),R=i(b,y.props.children),R.return=v,v=R;break t}}else if(b.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===E&&Ac(Z)===b.type){e(v,b.sibling),R=i(b,y.props),ri(R,y),R.return=v,v=R;break t}e(v,b);break}else n(v,b);b=b.sibling}y.type===M?(R=Ce(y.props.children,v.mode,R,y.key),R.return=v,v=R):(R=$i(y.type,y.key,y.props,null,v.mode,R),ri(R,y),R.return=v,v=R)}return r(v);case ft:t:{for(Z=y.key;b!==null;){if(b.key===Z)if(b.tag===4&&b.stateNode.containerInfo===y.containerInfo&&b.stateNode.implementation===y.implementation){e(v,b.sibling),R=i(b,y.children||[]),R.return=v,v=R;break t}else{e(v,b);break}else n(v,b);b=b.sibling}R=ko(y,v.mode,R),R.return=v,v=R}return r(v);case E:return Z=y._init,y=Z(y._payload),St(v,b,y,R)}if(Rt(y))return at(v,b,y,R);if(rt(y)){if(Z=rt(y),typeof Z!="function")throw Error(f(150));return y=Z.call(y),I(v,b,y,R)}if(typeof y.then=="function")return St(v,b,pl(y),R);if(y.$$typeof===N)return St(v,b,nl(v,y),R);gl(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,b!==null&&b.tag===6?(e(v,b.sibling),R=i(b,y),R.return=v,v=R):(e(v,b),R=qo(y,v.mode,R),R.return=v,v=R),r(v)):e(v,b)}return function(v,b,y,R){try{oi=0;var Z=St(v,b,y,R);return ga=null,Z}catch(V){if(V===$a||V===al)throw V;var ut=fn(29,V,null,v.mode);return ut.lanes=R,ut.return=v,ut}finally{}}}var ma=Mc(!0),Ec=Mc(!1),wn=k(null),qn=null;function ce(t){var n=t.alternate;L(Gt,Gt.current&1),L(wn,t),qn===null&&(n===null||fa.current!==null||n.memoizedState!==null)&&(qn=t)}function Dc(t){if(t.tag===22){if(L(Gt,Gt.current),L(wn,t),qn===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(qn=t)}}else fe()}function fe(){L(Gt,Gt.current),L(wn,wn.current)}function Vn(t){P(wn),qn===t&&(qn=null),P(Gt)}var Gt=k(0);function ml(t){for(var n=t;n!==null;){if(n.tag===13){var e=n.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||au(e)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function pr(t,n,e,a){n=t.memoizedState,e=e(a,n),e=e==null?n:Y({},n,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var gr={enqueueSetState:function(t,n,e){t=t._reactInternals;var a=gn(),i=re(a);i.payload=n,e!=null&&(i.callback=e),n=ue(t,i,a),n!==null&&(mn(n,t,a),Ia(n,t,a))},enqueueReplaceState:function(t,n,e){t=t._reactInternals;var a=gn(),i=re(a);i.tag=1,i.payload=n,e!=null&&(i.callback=e),n=ue(t,i,a),n!==null&&(mn(n,t,a),Ia(n,t,a))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var e=gn(),a=re(e);a.tag=2,n!=null&&(a.callback=n),n=ue(t,a,e),n!==null&&(mn(n,t,e),Ia(n,t,e))}};function _c(t,n,e,a,i,l,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,l,r):n.prototype&&n.prototype.isPureReactComponent?!ja(e,a)||!ja(i,l):!0}function zc(t,n,e,a){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(e,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(e,a),n.state!==t&&gr.enqueueReplaceState(n,n.state,null)}function Xe(t,n){var e=n;if("ref"in n){e={};for(var a in n)a!=="ref"&&(e[a]=n[a])}if(t=t.defaultProps){e===n&&(e=Y({},e));for(var i in t)e[i]===void 0&&(e[i]=t[i])}return e}var bl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Rc(t){bl(t)}function Cc(t){console.error(t)}function Hc(t){bl(t)}function vl(t,n){try{var e=t.onUncaughtError;e(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function qc(t,n,e){try{var a=t.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function mr(t,n,e){return e=re(e),e.tag=3,e.payload={element:null},e.callback=function(){vl(t,n)},e}function kc(t){return t=re(t),t.tag=3,t}function Uc(t,n,e,a){var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var l=a.value;t.payload=function(){return i(l)},t.callback=function(){qc(n,e,a)}}var r=e.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){qc(n,e,a),typeof i!="function"&&(be===null?be=new Set([this]):be.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function o0(t,n,e,a,i){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=e.alternate,n!==null&&Ka(n,e,i,!0),e=wn.current,e!==null){switch(e.tag){case 13:return qn===null?Gr():e.alternate===null&&Ht===0&&(Ht=3),e.flags&=-257,e.flags|=65536,e.lanes=i,a===Zo?e.flags|=16384:(n=e.updateQueue,n===null?e.updateQueue=new Set([a]):n.add(a),Lr(t,a,i)),!1;case 22:return e.flags|=65536,a===Zo?e.flags|=16384:(n=e.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=n):(e=n.retryQueue,e===null?n.retryQueue=new Set([a]):e.add(a)),Lr(t,a,i)),!1}throw Error(f(435,e.tag))}return Lr(t,a,i),Gr(),!1}if(mt)return n=wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=i,a!==Bo&&(t=Error(f(422),{cause:a}),Va(xn(t,e)))):(a!==Bo&&(n=Error(f(423),{cause:a}),Va(xn(n,e))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,a=xn(a,e),i=mr(t.stateNode,a,i),Ko(t,i),Ht!==4&&(Ht=2)),!1;var l=Error(f(520),{cause:a});if(l=xn(l,e),pi===null?pi=[l]:pi.push(l),Ht!==4&&(Ht=2),n===null)return!0;a=xn(a,e),e=n;do{switch(e.tag){case 3:return e.flags|=65536,t=i&-i,e.lanes|=t,t=mr(e.stateNode,a,t),Ko(e,t),!1;case 1:if(n=e.type,l=e.stateNode,(e.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(be===null||!be.has(l))))return e.flags|=65536,i&=-i,e.lanes|=i,i=kc(i),Uc(i,t,e,a),Ko(e,i),!1}e=e.return}while(e!==null);return!1}var Nc=Error(f(461)),Pt=!1;function Vt(t,n,e,a){n.child=t===null?Ec(n,null,e,a):ma(n,t.child,e,a)}function Bc(t,n,e,a,i){e=e.render;var l=n.ref;if("ref"in a){var r={};for(var s in a)s!=="ref"&&(r[s]=a[s])}else r=a;return Be(n),a=Io(t,n,e,r,l,i),s=tr(),t!==null&&!Pt?(nr(t,n,i),Kn(t,n,i)):(mt&&s&&Uo(n),n.flags|=1,Vt(t,n,a,i),n.child)}function Yc(t,n,e,a,i){if(t===null){var l=e.type;return typeof l=="function"&&!Ho(l)&&l.defaultProps===void 0&&e.compare===null?(n.tag=15,n.type=l,Gc(t,n,l,a,i)):(t=$i(e.type,null,a,n,n.mode,i),t.ref=n.ref,t.return=n,n.child=t)}if(l=t.child,!wr(t,i)){var r=l.memoizedProps;if(e=e.compare,e=e!==null?e:ja,e(r,a)&&t.ref===n.ref)return Kn(t,n,i)}return n.flags|=1,t=Xn(l,a),t.ref=n.ref,t.return=n,n.child=t}function Gc(t,n,e,a,i){if(t!==null){var l=t.memoizedProps;if(ja(l,a)&&t.ref===n.ref)if(Pt=!1,n.pendingProps=a=l,wr(t,i))(t.flags&131072)!==0&&(Pt=!0);else return n.lanes=t.lanes,Kn(t,n,i)}return br(t,n,e,a,i)}function Xc(t,n,e){var a=n.pendingProps,i=a.children,l=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((n.flags&128)!==0){if(a=l!==null?l.baseLanes|e:e,t!==null){for(i=n.child=t.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;n.childLanes=l&~a}else n.childLanes=0,n.child=null;return Lc(t,n,a,e)}if((e&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&el(n,l!==null?l.cachePool:null),l!==null?Gs(n,l):Wo(),Dc(n);else return n.lanes=n.childLanes=536870912,Lc(t,n,l!==null?l.baseLanes|e:e,e)}else l!==null?(el(n,l.cachePool),Gs(n,l),fe(),n.memoizedState=null):(t!==null&&el(n,null),Wo(),fe());return Vt(t,n,i,e),n.child}function Lc(t,n,e,a){var i=Po();return i=i===null?null:{parent:Yt._currentValue,pool:i},n.memoizedState={baseLanes:e,cachePool:i},t!==null&&el(n,null),Wo(),Dc(n),t!==null&&Ka(t,n,a,!0),null}function yl(t,n){var e=n.ref;if(e===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(f(284));(t===null||t.ref!==e)&&(n.flags|=4194816)}}function br(t,n,e,a,i){return Be(n),e=Io(t,n,e,a,void 0,i),a=tr(),t!==null&&!Pt?(nr(t,n,i),Kn(t,n,i)):(mt&&a&&Uo(n),n.flags|=1,Vt(t,n,e,i),n.child)}function jc(t,n,e,a,i,l){return Be(n),n.updateQueue=null,e=Ls(n,a,e,i),Xs(t),a=tr(),t!==null&&!Pt?(nr(t,n,l),Kn(t,n,l)):(mt&&a&&Uo(n),n.flags|=1,Vt(t,n,e,l),n.child)}function Pc(t,n,e,a,i){if(Be(n),n.stateNode===null){var l=oa,r=e.contextType;typeof r=="object"&&r!==null&&(l=$t(r)),l=new e(a,l),n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=gr,n.stateNode=l,l._reactInternals=n,l=n.stateNode,l.props=a,l.state=n.memoizedState,l.refs={},Qo(n),r=e.contextType,l.context=typeof r=="object"&&r!==null?$t(r):oa,l.state=n.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(pr(n,e,r,a),l.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&gr.enqueueReplaceState(l,l.state,null),ni(n,a,l,i),ti(),l.state=n.memoizedState),typeof l.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(t===null){l=n.stateNode;var s=n.memoizedProps,h=Xe(e,s);l.props=h;var x=l.context,_=e.contextType;r=oa,typeof _=="object"&&_!==null&&(r=$t(_));var H=e.getDerivedStateFromProps;_=typeof H=="function"||typeof l.getSnapshotBeforeUpdate=="function",s=n.pendingProps!==s,_||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s||x!==r)&&zc(n,l,a,r),oe=!1;var T=n.memoizedState;l.state=T,ni(n,a,l,i),ti(),x=n.memoizedState,s||T!==x||oe?(typeof H=="function"&&(pr(n,e,H,a),x=n.memoizedState),(h=oe||_c(n,e,h,a,T,x,r))?(_||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=x),l.props=a,l.state=x,l.context=r,a=h):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{l=n.stateNode,Vo(t,n),r=n.memoizedProps,_=Xe(e,r),l.props=_,H=n.pendingProps,T=l.context,x=e.contextType,h=oa,typeof x=="object"&&x!==null&&(h=$t(x)),s=e.getDerivedStateFromProps,(x=typeof s=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(r!==H||T!==h)&&zc(n,l,a,h),oe=!1,T=n.memoizedState,l.state=T,ni(n,a,l,i),ti();var A=n.memoizedState;r!==H||T!==A||oe||t!==null&&t.dependencies!==null&&tl(t.dependencies)?(typeof s=="function"&&(pr(n,e,s,a),A=n.memoizedState),(_=oe||_c(n,e,_,a,T,A,h)||t!==null&&t.dependencies!==null&&tl(t.dependencies))?(x||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,A,h),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,A,h)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||r===t.memoizedProps&&T===t.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&T===t.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=A),l.props=a,l.state=A,l.context=h,a=_):(typeof l.componentDidUpdate!="function"||r===t.memoizedProps&&T===t.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&T===t.memoizedState||(n.flags|=1024),a=!1)}return l=a,yl(t,n),a=(n.flags&128)!==0,l||a?(l=n.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:l.render(),n.flags|=1,t!==null&&a?(n.child=ma(n,t.child,null,i),n.child=ma(n,null,e,i)):Vt(t,n,e,i),n.memoizedState=l.state,t=n.child):t=Kn(t,n,i),t}function Zc(t,n,e,a){return Qa(),n.flags|=256,Vt(t,n,e,a),n.child}var vr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yr(t){return{baseLanes:t,cachePool:Cs()}}function xr(t,n,e){return t=t!==null?t.childLanes&~e:0,n&&(t|=An),t}function Qc(t,n,e){var a=n.pendingProps,i=!1,l=(n.flags&128)!==0,r;if((r=l)||(r=t!==null&&t.memoizedState===null?!1:(Gt.current&2)!==0),r&&(i=!0,n.flags&=-129),r=(n.flags&32)!==0,n.flags&=-33,t===null){if(mt){if(i?ce(n):fe(),mt){var s=Ct,h;if(h=s){t:{for(h=s,s=Hn;h.nodeType!==8;){if(!s){s=null;break t}if(h=_n(h.nextSibling),h===null){s=null;break t}}s=h}s!==null?(n.memoizedState={dehydrated:s,treeContext:He!==null?{id:Ln,overflow:jn}:null,retryLane:536870912,hydrationErrors:null},h=fn(18,null,null,0),h.stateNode=s,h.return=n,n.child=h,It=n,Ct=null,h=!0):h=!1}h||Ue(n)}if(s=n.memoizedState,s!==null&&(s=s.dehydrated,s!==null))return au(s)?n.lanes=32:n.lanes=536870912,null;Vn(n)}return s=a.children,a=a.fallback,i?(fe(),i=n.mode,s=xl({mode:"hidden",children:s},i),a=Ce(a,i,e,null),s.return=n,a.return=n,s.sibling=a,n.child=s,i=n.child,i.memoizedState=yr(e),i.childLanes=xr(t,r,e),n.memoizedState=vr,a):(ce(n),Sr(n,s))}if(h=t.memoizedState,h!==null&&(s=h.dehydrated,s!==null)){if(l)n.flags&256?(ce(n),n.flags&=-257,n=Tr(t,n,e)):n.memoizedState!==null?(fe(),n.child=t.child,n.flags|=128,n=null):(fe(),i=a.fallback,s=n.mode,a=xl({mode:"visible",children:a.children},s),i=Ce(i,s,e,null),i.flags|=2,a.return=n,i.return=n,a.sibling=i,n.child=a,ma(n,t.child,null,e),a=n.child,a.memoizedState=yr(e),a.childLanes=xr(t,r,e),n.memoizedState=vr,n=i);else if(ce(n),au(s)){if(r=s.nextSibling&&s.nextSibling.dataset,r)var x=r.dgst;r=x,a=Error(f(419)),a.stack="",a.digest=r,Va({value:a,source:null,stack:null}),n=Tr(t,n,e)}else if(Pt||Ka(t,n,e,!1),r=(e&t.childLanes)!==0,Pt||r){if(r=wt,r!==null&&(a=e&-e,a=(a&42)!==0?1:ao(a),a=(a&(r.suspendedLanes|e))!==0?0:a,a!==0&&a!==h.retryLane))throw h.retryLane=a,la(t,a),mn(r,t,a),Nc;s.data==="$?"||Gr(),n=Tr(t,n,e)}else s.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=h.treeContext,Ct=_n(s.nextSibling),It=n,mt=!0,ke=null,Hn=!1,t!==null&&(Tn[On++]=Ln,Tn[On++]=jn,Tn[On++]=He,Ln=t.id,jn=t.overflow,He=n),n=Sr(n,a.children),n.flags|=4096);return n}return i?(fe(),i=a.fallback,s=n.mode,h=t.child,x=h.sibling,a=Xn(h,{mode:"hidden",children:a.children}),a.subtreeFlags=h.subtreeFlags&65011712,x!==null?i=Xn(x,i):(i=Ce(i,s,e,null),i.flags|=2),i.return=n,a.return=n,a.sibling=i,n.child=a,a=i,i=n.child,s=t.child.memoizedState,s===null?s=yr(e):(h=s.cachePool,h!==null?(x=Yt._currentValue,h=h.parent!==x?{parent:x,pool:x}:h):h=Cs(),s={baseLanes:s.baseLanes|e,cachePool:h}),i.memoizedState=s,i.childLanes=xr(t,r,e),n.memoizedState=vr,a):(ce(n),e=t.child,t=e.sibling,e=Xn(e,{mode:"visible",children:a.children}),e.return=n,e.sibling=null,t!==null&&(r=n.deletions,r===null?(n.deletions=[t],n.flags|=16):r.push(t)),n.child=e,n.memoizedState=null,e)}function Sr(t,n){return n=xl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function xl(t,n){return t=fn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Tr(t,n,e){return ma(n,t.child,null,e),t=Sr(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Vc(t,n,e){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n),Go(t.return,n,e)}function Or(t,n,e,a,i){var l=t.memoizedState;l===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:e,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=e,l.tailMode=i)}function Kc(t,n,e){var a=n.pendingProps,i=a.revealOrder,l=a.tail;if(Vt(t,n,a.children,e),a=Gt.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vc(t,e,n);else if(t.tag===19)Vc(t,e,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(L(Gt,a),i){case"forwards":for(e=n.child,i=null;e!==null;)t=e.alternate,t!==null&&ml(t)===null&&(i=e),e=e.sibling;e=i,e===null?(i=n.child,n.child=null):(i=e.sibling,e.sibling=null),Or(n,!1,i,e,l);break;case"backwards":for(e=null,i=n.child,n.child=null;i!==null;){if(t=i.alternate,t!==null&&ml(t)===null){n.child=i;break}t=i.sibling,i.sibling=e,e=i,i=t}Or(n,!0,e,null,l);break;case"together":Or(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Kn(t,n,e){if(t!==null&&(n.dependencies=t.dependencies),me|=n.lanes,(e&n.childLanes)===0)if(t!==null){if(Ka(t,n,e,!1),(e&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(f(153));if(n.child!==null){for(t=n.child,e=Xn(t,t.pendingProps),n.child=e,e.return=n;t.sibling!==null;)t=t.sibling,e=e.sibling=Xn(t,t.pendingProps),e.return=n;e.sibling=null}return n.child}function wr(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&tl(t)))}function r0(t,n,e){switch(n.tag){case 3:Mt(n,n.stateNode.containerInfo),le(n,Yt,t.memoizedState.cache),Qa();break;case 27:case 5:Fl(n);break;case 4:Mt(n,n.stateNode.containerInfo);break;case 10:le(n,n.type,n.memoizedProps.value);break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(ce(n),n.flags|=128,null):(e&n.child.childLanes)!==0?Qc(t,n,e):(ce(n),t=Kn(t,n,e),t!==null?t.sibling:null);ce(n);break;case 19:var i=(t.flags&128)!==0;if(a=(e&n.childLanes)!==0,a||(Ka(t,n,e,!1),a=(e&n.childLanes)!==0),i){if(a)return Kc(t,n,e);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),L(Gt,Gt.current),a)break;return null;case 22:case 23:return n.lanes=0,Xc(t,n,e);case 24:le(n,Yt,t.memoizedState.cache)}return Kn(t,n,e)}function Jc(t,n,e){if(t!==null)if(t.memoizedProps!==n.pendingProps)Pt=!0;else{if(!wr(t,e)&&(n.flags&128)===0)return Pt=!1,r0(t,n,e);Pt=(t.flags&131072)!==0}else Pt=!1,mt&&(n.flags&1048576)!==0&&As(n,Ii,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var a=n.elementType,i=a._init;if(a=i(a._payload),n.type=a,typeof a=="function")Ho(a)?(t=Xe(a,t),n.tag=1,n=Pc(null,n,a,t,e)):(n.tag=0,n=br(null,n,a,t,e));else{if(a!=null){if(i=a.$$typeof,i===o){n.tag=11,n=Bc(null,n,a,t,e);break t}else if(i===O){n.tag=14,n=Yc(null,n,a,t,e);break t}}throw n=Lt(a)||a,Error(f(306,n,""))}}return n;case 0:return br(t,n,n.type,n.pendingProps,e);case 1:return a=n.type,i=Xe(a,n.pendingProps),Pc(t,n,a,i,e);case 3:t:{if(Mt(n,n.stateNode.containerInfo),t===null)throw Error(f(387));a=n.pendingProps;var l=n.memoizedState;i=l.element,Vo(t,n),ni(n,a,null,e);var r=n.memoizedState;if(a=r.cache,le(n,Yt,a),a!==l.cache&&Xo(n,[Yt],e,!0),ti(),a=r.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:r.cache},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){n=Zc(t,n,a,e);break t}else if(a!==i){i=xn(Error(f(424)),n),Va(i),n=Zc(t,n,a,e);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ct=_n(t.firstChild),It=n,mt=!0,ke=null,Hn=!0,e=Ec(n,null,a,e),n.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(Qa(),a===i){n=Kn(t,n,e);break t}Vt(t,n,a,e)}n=n.child}return n;case 26:return yl(t,n),t===null?(e=th(n.type,null,n.pendingProps,null))?n.memoizedState=e:mt||(e=n.type,t=n.pendingProps,a=ql(it.current).createElement(e),a[Wt]=n,a[nn]=t,Jt(a,e,t),jt(a),n.stateNode=a):n.memoizedState=th(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Fl(n),t===null&&mt&&(a=n.stateNode=$f(n.type,n.pendingProps,it.current),It=n,Hn=!0,i=Ct,xe(n.type)?(iu=i,Ct=_n(a.firstChild)):Ct=i),Vt(t,n,n.pendingProps.children,e),yl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&mt&&((i=a=Ct)&&(a=k0(a,n.type,n.pendingProps,Hn),a!==null?(n.stateNode=a,It=n,Ct=_n(a.firstChild),Hn=!1,i=!0):i=!1),i||Ue(n)),Fl(n),i=n.type,l=n.pendingProps,r=t!==null?t.memoizedProps:null,a=l.children,tu(i,l)?a=null:r!==null&&tu(i,r)&&(n.flags|=32),n.memoizedState!==null&&(i=Io(t,n,Id,null,null,e),Oi._currentValue=i),yl(t,n),Vt(t,n,a,e),n.child;case 6:return t===null&&mt&&((t=e=Ct)&&(e=U0(e,n.pendingProps,Hn),e!==null?(n.stateNode=e,It=n,Ct=null,t=!0):t=!1),t||Ue(n)),null;case 13:return Qc(t,n,e);case 4:return Mt(n,n.stateNode.containerInfo),a=n.pendingProps,t===null?n.child=ma(n,null,a,e):Vt(t,n,a,e),n.child;case 11:return Bc(t,n,n.type,n.pendingProps,e);case 7:return Vt(t,n,n.pendingProps,e),n.child;case 8:return Vt(t,n,n.pendingProps.children,e),n.child;case 12:return Vt(t,n,n.pendingProps.children,e),n.child;case 10:return a=n.pendingProps,le(n,n.type,a.value),Vt(t,n,a.children,e),n.child;case 9:return i=n.type._context,a=n.pendingProps.children,Be(n),i=$t(i),a=a(i),n.flags|=1,Vt(t,n,a,e),n.child;case 14:return Yc(t,n,n.type,n.pendingProps,e);case 15:return Gc(t,n,n.type,n.pendingProps,e);case 19:return Kc(t,n,e);case 31:return a=n.pendingProps,e=n.mode,a={mode:a.mode,children:a.children},t===null?(e=xl(a,e),e.ref=n.ref,n.child=e,e.return=n,n=e):(e=Xn(t.child,a),e.ref=n.ref,n.child=e,e.return=n,n=e),n;case 22:return Xc(t,n,e);case 24:return Be(n),a=$t(Yt),t===null?(i=Po(),i===null&&(i=wt,l=Lo(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=e),i=l),n.memoizedState={parent:a,cache:i},Qo(n),le(n,Yt,i)):((t.lanes&e)!==0&&(Vo(t,n),ni(n,null,null,e),ti()),i=t.memoizedState,l=n.memoizedState,i.parent!==a?(i={parent:a,cache:a},n.memoizedState=i,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=i),le(n,Yt,a)):(a=l.cache,le(n,Yt,a),a!==i.cache&&Xo(n,[Yt],e,!0))),Vt(t,n,n.pendingProps.children,e),n.child;case 29:throw n.pendingProps}throw Error(f(156,n.tag))}function Jn(t){t.flags|=4}function Wc(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!lh(n)){if(n=wn.current,n!==null&&((ht&4194048)===ht?qn!==null:(ht&62914560)!==ht&&(ht&536870912)===0||n!==qn))throw Fa=Zo,Hs;t.flags|=8192}}function Sl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Du():536870912,t.lanes|=n,xa|=n)}function ui(t,n){if(!mt)switch(t.tailMode){case"hidden":n=t.tail;for(var e=null;n!==null;)n.alternate!==null&&(e=n),n=n.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function _t(t){var n=t.alternate!==null&&t.alternate.child===t.child,e=0,a=0;if(n)for(var i=t.child;i!==null;)e|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)e|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=a,t.childLanes=e,n}function u0(t,n,e){var a=n.pendingProps;switch(No(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(n),null;case 1:return _t(n),null;case 3:return e=n.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Zn(Yt),ne(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(Za(n)?Jn(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ds())),_t(n),null;case 26:return e=n.memoizedState,t===null?(Jn(n),e!==null?(_t(n),Wc(n,e)):(_t(n),n.flags&=-16777217)):e?e!==t.memoizedState?(Jn(n),_t(n),Wc(n,e)):(_t(n),n.flags&=-16777217):(t.memoizedProps!==a&&Jn(n),_t(n),n.flags&=-16777217),null;case 27:Ci(n),e=it.current;var i=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==a&&Jn(n);else{if(!a){if(n.stateNode===null)throw Error(f(166));return _t(n),null}t=F.current,Za(n)?Ms(n):(t=$f(i,a,e),n.stateNode=t,Jn(n))}return _t(n),null;case 5:if(Ci(n),e=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==a&&Jn(n);else{if(!a){if(n.stateNode===null)throw Error(f(166));return _t(n),null}if(t=F.current,Za(n))Ms(n);else{switch(i=ql(it.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",e);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;default:switch(e){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",e);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?i.createElement(e,{is:a.is}):i.createElement(e)}}t[Wt]=n,t[nn]=a;t:for(i=n.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break t;for(;i.sibling===null;){if(i.return===null||i.return===n)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}n.stateNode=t;t:switch(Jt(t,e,a),e){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Jn(n)}}return _t(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==a&&Jn(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(f(166));if(t=it.current,Za(n)){if(t=n.stateNode,e=n.memoizedProps,a=null,i=It,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}t[Wt]=n,t=!!(t.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||Pf(t.nodeValue,e)),t||Ue(n)}else t=ql(t).createTextNode(a),t[Wt]=n,n.stateNode=t}return _t(n),null;case 13:if(a=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Za(n),a!==null&&a.dehydrated!==null){if(t===null){if(!i)throw Error(f(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(f(317));i[Wt]=n}else Qa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;_t(n),i=!1}else i=Ds(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return n.flags&256?(Vn(n),n):(Vn(n),null)}if(Vn(n),(n.flags&128)!==0)return n.lanes=e,n;if(e=a!==null,t=t!==null&&t.memoizedState!==null,e){a=n.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var l=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==i&&(a.flags|=2048)}return e!==t&&e&&(n.child.flags|=8192),Sl(n,n.updateQueue),_t(n),null;case 4:return ne(),t===null&&Jr(n.stateNode.containerInfo),_t(n),null;case 10:return Zn(n.type),_t(n),null;case 19:if(P(Gt),i=n.memoizedState,i===null)return _t(n),null;if(a=(n.flags&128)!==0,l=i.rendering,l===null)if(a)ui(i,!1);else{if(Ht!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(l=ml(t),l!==null){for(n.flags|=128,ui(i,!1),t=l.updateQueue,n.updateQueue=t,Sl(n,t),n.subtreeFlags=0,t=e,e=n.child;e!==null;)ws(e,t),e=e.sibling;return L(Gt,Gt.current&1|2),n.child}t=t.sibling}i.tail!==null&&Cn()>wl&&(n.flags|=128,a=!0,ui(i,!1),n.lanes=4194304)}else{if(!a)if(t=ml(l),t!==null){if(n.flags|=128,a=!0,t=t.updateQueue,n.updateQueue=t,Sl(n,t),ui(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!mt)return _t(n),null}else 2*Cn()-i.renderingStartTime>wl&&e!==536870912&&(n.flags|=128,a=!0,ui(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(t=i.last,t!==null?t.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Cn(),n.sibling=null,t=Gt.current,L(Gt,a?t&1|2:t&1),n):(_t(n),null);case 22:case 23:return Vn(n),$o(),a=n.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(e&536870912)!==0&&(n.flags&128)===0&&(_t(n),n.subtreeFlags&6&&(n.flags|=8192)):_t(n),e=n.updateQueue,e!==null&&Sl(n,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==e&&(n.flags|=2048),t!==null&&P(Ye),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),n.memoizedState.cache!==e&&(n.flags|=2048),Zn(Yt),_t(n),null;case 25:return null;case 30:return null}throw Error(f(156,n.tag))}function s0(t,n){switch(No(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Zn(Yt),ne(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ci(n),null;case 13:if(Vn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(f(340));Qa()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return P(Gt),null;case 4:return ne(),null;case 10:return Zn(n.type),null;case 22:case 23:return Vn(n),$o(),t!==null&&P(Ye),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Zn(Yt),null;case 25:return null;default:return null}}function $c(t,n){switch(No(n),n.tag){case 3:Zn(Yt),ne();break;case 26:case 27:case 5:Ci(n);break;case 4:ne();break;case 13:Vn(n);break;case 19:P(Gt);break;case 10:Zn(n.type);break;case 22:case 23:Vn(n),$o(),t!==null&&P(Ye);break;case 24:Zn(Yt)}}function si(t,n){try{var e=n.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var i=a.next;e=i;do{if((e.tag&t)===t){a=void 0;var l=e.create,r=e.inst;a=l(),r.destroy=a}e=e.next}while(e!==i)}}catch(s){Ot(n,n.return,s)}}function he(t,n,e){try{var a=n.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&t)===t){var r=a.inst,s=r.destroy;if(s!==void 0){r.destroy=void 0,i=n;var h=e,x=s;try{x()}catch(_){Ot(i,h,_)}}}a=a.next}while(a!==l)}}catch(_){Ot(n,n.return,_)}}function Fc(t){var n=t.updateQueue;if(n!==null){var e=t.stateNode;try{Ys(n,e)}catch(a){Ot(t,t.return,a)}}}function Ic(t,n,e){e.props=Xe(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(a){Ot(t,n,a)}}function ci(t,n){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof e=="function"?t.refCleanup=e(a):e.current=a}}catch(i){Ot(t,n,i)}}function kn(t,n){var e=t.ref,a=t.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(i){Ot(t,n,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(i){Ot(t,n,i)}else e.current=null}function tf(t){var n=t.type,e=t.memoizedProps,a=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break t;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(i){Ot(t,t.return,i)}}function Ar(t,n,e){try{var a=t.stateNode;z0(a,t.type,e,n),a[nn]=n}catch(i){Ot(t,t.return,i)}}function nf(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&xe(t.type)||t.tag===4}function Mr(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||nf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&xe(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Er(t,n,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,n?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(t,n):(n=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.appendChild(t),e=e._reactRootContainer,e!=null||n.onclick!==null||(n.onclick=Hl));else if(a!==4&&(a===27&&xe(t.type)&&(e=t.stateNode,n=null),t=t.child,t!==null))for(Er(t,n,e),t=t.sibling;t!==null;)Er(t,n,e),t=t.sibling}function Tl(t,n,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,n?e.insertBefore(t,n):e.appendChild(t);else if(a!==4&&(a===27&&xe(t.type)&&(e=t.stateNode),t=t.child,t!==null))for(Tl(t,n,e),t=t.sibling;t!==null;)Tl(t,n,e),t=t.sibling}function ef(t){var n=t.stateNode,e=t.memoizedProps;try{for(var a=t.type,i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Jt(n,a,e),n[Wt]=t,n[nn]=e}catch(l){Ot(t,t.return,l)}}var Wn=!1,kt=!1,Dr=!1,af=typeof WeakSet=="function"?WeakSet:Set,Zt=null;function c0(t,n){if(t=t.containerInfo,Fr=Gl,t=ps(t),Mo(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var i=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{e.nodeType,l.nodeType}catch{e=null;break t}var r=0,s=-1,h=-1,x=0,_=0,H=t,T=null;n:for(;;){for(var A;H!==e||i!==0&&H.nodeType!==3||(s=r+i),H!==l||a!==0&&H.nodeType!==3||(h=r+a),H.nodeType===3&&(r+=H.nodeValue.length),(A=H.firstChild)!==null;)T=H,H=A;for(;;){if(H===t)break n;if(T===e&&++x===i&&(s=r),T===l&&++_===a&&(h=r),(A=H.nextSibling)!==null)break;H=T,T=H.parentNode}H=A}e=s===-1||h===-1?null:{start:s,end:h}}else e=null}e=e||{start:0,end:0}}else e=null;for(Ir={focusedElem:t,selectionRange:e},Gl=!1,Zt=n;Zt!==null;)if(n=Zt,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,Zt=t;else for(;Zt!==null;){switch(n=Zt,l=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&l!==null){t=void 0,e=n,i=l.memoizedProps,l=l.memoizedState,a=e.stateNode;try{var at=Xe(e.type,i,e.elementType===e.type);t=a.getSnapshotBeforeUpdate(at,l),a.__reactInternalSnapshotBeforeUpdate=t}catch(I){Ot(e,e.return,I)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,e=t.nodeType,e===9)eu(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":eu(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(f(163))}if(t=n.sibling,t!==null){t.return=n.return,Zt=t;break}Zt=n.return}}function lf(t,n,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:de(t,e),a&4&&si(5,e);break;case 1:if(de(t,e),a&4)if(t=e.stateNode,n===null)try{t.componentDidMount()}catch(r){Ot(e,e.return,r)}else{var i=Xe(e.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(i,n,t.__reactInternalSnapshotBeforeUpdate)}catch(r){Ot(e,e.return,r)}}a&64&&Fc(e),a&512&&ci(e,e.return);break;case 3:if(de(t,e),a&64&&(t=e.updateQueue,t!==null)){if(n=null,e.child!==null)switch(e.child.tag){case 27:case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}try{Ys(t,n)}catch(r){Ot(e,e.return,r)}}break;case 27:n===null&&a&4&&ef(e);case 26:case 5:de(t,e),n===null&&a&4&&tf(e),a&512&&ci(e,e.return);break;case 12:de(t,e);break;case 13:de(t,e),a&4&&uf(t,e),a&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=y0.bind(null,e),N0(t,e))));break;case 22:if(a=e.memoizedState!==null||Wn,!a){n=n!==null&&n.memoizedState!==null||kt,i=Wn;var l=kt;Wn=a,(kt=n)&&!l?pe(t,e,(e.subtreeFlags&8772)!==0):de(t,e),Wn=i,kt=l}break;case 30:break;default:de(t,e)}}function of(t){var n=t.alternate;n!==null&&(t.alternate=null,of(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&oo(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Et=null,ln=!1;function $n(t,n,e){for(e=e.child;e!==null;)rf(t,n,e),e=e.sibling}function rf(t,n,e){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(Ra,e)}catch{}switch(e.tag){case 26:kt||kn(e,n),$n(t,n,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:kt||kn(e,n);var a=Et,i=ln;xe(e.type)&&(Et=e.stateNode,ln=!1),$n(t,n,e),yi(e.stateNode),Et=a,ln=i;break;case 5:kt||kn(e,n);case 6:if(a=Et,i=ln,Et=null,$n(t,n,e),Et=a,ln=i,Et!==null)if(ln)try{(Et.nodeType===9?Et.body:Et.nodeName==="HTML"?Et.ownerDocument.body:Et).removeChild(e.stateNode)}catch(l){Ot(e,n,l)}else try{Et.removeChild(e.stateNode)}catch(l){Ot(e,n,l)}break;case 18:Et!==null&&(ln?(t=Et,Jf(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),Ei(t)):Jf(Et,e.stateNode));break;case 4:a=Et,i=ln,Et=e.stateNode.containerInfo,ln=!0,$n(t,n,e),Et=a,ln=i;break;case 0:case 11:case 14:case 15:kt||he(2,e,n),kt||he(4,e,n),$n(t,n,e);break;case 1:kt||(kn(e,n),a=e.stateNode,typeof a.componentWillUnmount=="function"&&Ic(e,n,a)),$n(t,n,e);break;case 21:$n(t,n,e);break;case 22:kt=(a=kt)||e.memoizedState!==null,$n(t,n,e),kt=a;break;default:$n(t,n,e)}}function uf(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ei(t)}catch(e){Ot(n,n.return,e)}}function f0(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new af),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new af),n;default:throw Error(f(435,t.tag))}}function _r(t,n){var e=f0(t);n.forEach(function(a){var i=x0.bind(null,t,a);e.has(a)||(e.add(a),a.then(i,i))})}function hn(t,n){var e=n.deletions;if(e!==null)for(var a=0;a<e.length;a++){var i=e[a],l=t,r=n,s=r;t:for(;s!==null;){switch(s.tag){case 27:if(xe(s.type)){Et=s.stateNode,ln=!1;break t}break;case 5:Et=s.stateNode,ln=!1;break t;case 3:case 4:Et=s.stateNode.containerInfo,ln=!0;break t}s=s.return}if(Et===null)throw Error(f(160));rf(l,r,i),Et=null,ln=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)sf(n,t),n=n.sibling}var Dn=null;function sf(t,n){var e=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:hn(n,t),dn(t),a&4&&(he(3,t,t.return),si(3,t),he(5,t,t.return));break;case 1:hn(n,t),dn(t),a&512&&(kt||e===null||kn(e,e.return)),a&64&&Wn&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var i=Dn;if(hn(n,t),dn(t),a&512&&(kt||e===null||kn(e,e.return)),a&4){var l=e!==null?e.memoizedState:null;if(a=t.memoizedState,e===null)if(a===null)if(t.stateNode===null){t:{a=t.type,e=t.memoizedProps,i=i.ownerDocument||i;n:switch(a){case"title":l=i.getElementsByTagName("title")[0],(!l||l[qa]||l[Wt]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(a),i.head.insertBefore(l,i.querySelector("head > title"))),Jt(l,a,e),l[Wt]=t,jt(l),a=l;break t;case"link":var r=ah("link","href",i).get(a+(e.href||""));if(r){for(var s=0;s<r.length;s++)if(l=r[s],l.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&l.getAttribute("rel")===(e.rel==null?null:e.rel)&&l.getAttribute("title")===(e.title==null?null:e.title)&&l.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){r.splice(s,1);break n}}l=i.createElement(a),Jt(l,a,e),i.head.appendChild(l);break;case"meta":if(r=ah("meta","content",i).get(a+(e.content||""))){for(s=0;s<r.length;s++)if(l=r[s],l.getAttribute("content")===(e.content==null?null:""+e.content)&&l.getAttribute("name")===(e.name==null?null:e.name)&&l.getAttribute("property")===(e.property==null?null:e.property)&&l.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&l.getAttribute("charset")===(e.charSet==null?null:e.charSet)){r.splice(s,1);break n}}l=i.createElement(a),Jt(l,a,e),i.head.appendChild(l);break;default:throw Error(f(468,a))}l[Wt]=t,jt(l),a=l}t.stateNode=a}else ih(i,t.type,t.stateNode);else t.stateNode=eh(i,a,t.memoizedProps);else l!==a?(l===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):l.count--,a===null?ih(i,t.type,t.stateNode):eh(i,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Ar(t,t.memoizedProps,e.memoizedProps)}break;case 27:hn(n,t),dn(t),a&512&&(kt||e===null||kn(e,e.return)),e!==null&&a&4&&Ar(t,t.memoizedProps,e.memoizedProps);break;case 5:if(hn(n,t),dn(t),a&512&&(kt||e===null||kn(e,e.return)),t.flags&32){i=t.stateNode;try{Fe(i,"")}catch(A){Ot(t,t.return,A)}}a&4&&t.stateNode!=null&&(i=t.memoizedProps,Ar(t,i,e!==null?e.memoizedProps:i)),a&1024&&(Dr=!0);break;case 6:if(hn(n,t),dn(t),a&4){if(t.stateNode===null)throw Error(f(162));a=t.memoizedProps,e=t.stateNode;try{e.nodeValue=a}catch(A){Ot(t,t.return,A)}}break;case 3:if(Nl=null,i=Dn,Dn=kl(n.containerInfo),hn(n,t),Dn=i,dn(t),a&4&&e!==null&&e.memoizedState.isDehydrated)try{Ei(n.containerInfo)}catch(A){Ot(t,t.return,A)}Dr&&(Dr=!1,cf(t));break;case 4:a=Dn,Dn=kl(t.stateNode.containerInfo),hn(n,t),dn(t),Dn=a;break;case 12:hn(n,t),dn(t);break;case 13:hn(n,t),dn(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(kr=Cn()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,_r(t,a)));break;case 22:i=t.memoizedState!==null;var h=e!==null&&e.memoizedState!==null,x=Wn,_=kt;if(Wn=x||i,kt=_||h,hn(n,t),kt=_,Wn=x,dn(t),a&8192)t:for(n=t.stateNode,n._visibility=i?n._visibility&-2:n._visibility|1,i&&(e===null||h||Wn||kt||Le(t)),e=null,n=t;;){if(n.tag===5||n.tag===26){if(e===null){h=e=n;try{if(l=h.stateNode,i)r=l.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{s=h.stateNode;var H=h.memoizedProps.style,T=H!=null&&H.hasOwnProperty("display")?H.display:null;s.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(A){Ot(h,h.return,A)}}}else if(n.tag===6){if(e===null){h=n;try{h.stateNode.nodeValue=i?"":h.memoizedProps}catch(A){Ot(h,h.return,A)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;e===n&&(e=null),n=n.return}e===n&&(e=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=t.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,_r(t,e))));break;case 19:hn(n,t),dn(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,_r(t,a)));break;case 30:break;case 21:break;default:hn(n,t),dn(t)}}function dn(t){var n=t.flags;if(n&2){try{for(var e,a=t.return;a!==null;){if(nf(a)){e=a;break}a=a.return}if(e==null)throw Error(f(160));switch(e.tag){case 27:var i=e.stateNode,l=Mr(t);Tl(t,l,i);break;case 5:var r=e.stateNode;e.flags&32&&(Fe(r,""),e.flags&=-33);var s=Mr(t);Tl(t,s,r);break;case 3:case 4:var h=e.stateNode.containerInfo,x=Mr(t);Er(t,x,h);break;default:throw Error(f(161))}}catch(_){Ot(t,t.return,_)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function cf(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;cf(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function de(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)lf(t,n.alternate,n),n=n.sibling}function Le(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:he(4,n,n.return),Le(n);break;case 1:kn(n,n.return);var e=n.stateNode;typeof e.componentWillUnmount=="function"&&Ic(n,n.return,e),Le(n);break;case 27:yi(n.stateNode);case 26:case 5:kn(n,n.return),Le(n);break;case 22:n.memoizedState===null&&Le(n);break;case 30:Le(n);break;default:Le(n)}t=t.sibling}}function pe(t,n,e){for(e=e&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,i=t,l=n,r=l.flags;switch(l.tag){case 0:case 11:case 15:pe(i,l,e),si(4,l);break;case 1:if(pe(i,l,e),a=l,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(x){Ot(a,a.return,x)}if(a=l,i=a.updateQueue,i!==null){var s=a.stateNode;try{var h=i.shared.hiddenCallbacks;if(h!==null)for(i.shared.hiddenCallbacks=null,i=0;i<h.length;i++)Bs(h[i],s)}catch(x){Ot(a,a.return,x)}}e&&r&64&&Fc(l),ci(l,l.return);break;case 27:ef(l);case 26:case 5:pe(i,l,e),e&&a===null&&r&4&&tf(l),ci(l,l.return);break;case 12:pe(i,l,e);break;case 13:pe(i,l,e),e&&r&4&&uf(i,l);break;case 22:l.memoizedState===null&&pe(i,l,e),ci(l,l.return);break;case 30:break;default:pe(i,l,e)}n=n.sibling}}function zr(t,n){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&Ja(e))}function Rr(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ja(t))}function Un(t,n,e,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ff(t,n,e,a),n=n.sibling}function ff(t,n,e,a){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Un(t,n,e,a),i&2048&&si(9,n);break;case 1:Un(t,n,e,a);break;case 3:Un(t,n,e,a),i&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ja(t)));break;case 12:if(i&2048){Un(t,n,e,a),t=n.stateNode;try{var l=n.memoizedProps,r=l.id,s=l.onPostCommit;typeof s=="function"&&s(r,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(h){Ot(n,n.return,h)}}else Un(t,n,e,a);break;case 13:Un(t,n,e,a);break;case 23:break;case 22:l=n.stateNode,r=n.alternate,n.memoizedState!==null?l._visibility&2?Un(t,n,e,a):fi(t,n):l._visibility&2?Un(t,n,e,a):(l._visibility|=2,ba(t,n,e,a,(n.subtreeFlags&10256)!==0)),i&2048&&zr(r,n);break;case 24:Un(t,n,e,a),i&2048&&Rr(n.alternate,n);break;default:Un(t,n,e,a)}}function ba(t,n,e,a,i){for(i=i&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var l=t,r=n,s=e,h=a,x=r.flags;switch(r.tag){case 0:case 11:case 15:ba(l,r,s,h,i),si(8,r);break;case 23:break;case 22:var _=r.stateNode;r.memoizedState!==null?_._visibility&2?ba(l,r,s,h,i):fi(l,r):(_._visibility|=2,ba(l,r,s,h,i)),i&&x&2048&&zr(r.alternate,r);break;case 24:ba(l,r,s,h,i),i&&x&2048&&Rr(r.alternate,r);break;default:ba(l,r,s,h,i)}n=n.sibling}}function fi(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var e=t,a=n,i=a.flags;switch(a.tag){case 22:fi(e,a),i&2048&&zr(a.alternate,a);break;case 24:fi(e,a),i&2048&&Rr(a.alternate,a);break;default:fi(e,a)}n=n.sibling}}var hi=8192;function va(t){if(t.subtreeFlags&hi)for(t=t.child;t!==null;)hf(t),t=t.sibling}function hf(t){switch(t.tag){case 26:va(t),t.flags&hi&&t.memoizedState!==null&&W0(Dn,t.memoizedState,t.memoizedProps);break;case 5:va(t);break;case 3:case 4:var n=Dn;Dn=kl(t.stateNode.containerInfo),va(t),Dn=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=hi,hi=16777216,va(t),hi=n):va(t));break;default:va(t)}}function df(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function di(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var a=n[e];Zt=a,gf(a,t)}df(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)pf(t),t=t.sibling}function pf(t){switch(t.tag){case 0:case 11:case 15:di(t),t.flags&2048&&he(9,t,t.return);break;case 3:di(t);break;case 12:di(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ol(t)):di(t);break;default:di(t)}}function Ol(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var a=n[e];Zt=a,gf(a,t)}df(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:he(8,n,n.return),Ol(n);break;case 22:e=n.stateNode,e._visibility&2&&(e._visibility&=-3,Ol(n));break;default:Ol(n)}t=t.sibling}}function gf(t,n){for(;Zt!==null;){var e=Zt;switch(e.tag){case 0:case 11:case 15:he(8,e,n);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ja(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,Zt=a;else t:for(e=t;Zt!==null;){a=Zt;var i=a.sibling,l=a.return;if(of(a),a===e){Zt=null;break t}if(i!==null){i.return=l,Zt=i;break t}Zt=l}}}var h0={getCacheForType:function(t){var n=$t(Yt),e=n.data.get(t);return e===void 0&&(e=t(),n.data.set(t,e)),e}},d0=typeof WeakMap=="function"?WeakMap:Map,bt=0,wt=null,st=null,ht=0,vt=0,pn=null,ge=!1,ya=!1,Cr=!1,Fn=0,Ht=0,me=0,je=0,Hr=0,An=0,xa=0,pi=null,on=null,qr=!1,kr=0,wl=1/0,Al=null,be=null,Kt=0,ve=null,Sa=null,Ta=0,Ur=0,Nr=null,mf=null,gi=0,Br=null;function gn(){if((bt&2)!==0&&ht!==0)return ht&-ht;if(z.T!==null){var t=sa;return t!==0?t:Zr()}return Ru()}function bf(){An===0&&(An=(ht&536870912)===0||mt?Eu():536870912);var t=wn.current;return t!==null&&(t.flags|=32),An}function mn(t,n,e){(t===wt&&(vt===2||vt===9)||t.cancelPendingCommit!==null)&&(Oa(t,0),ye(t,ht,An,!1)),Ha(t,e),((bt&2)===0||t!==wt)&&(t===wt&&((bt&2)===0&&(je|=e),Ht===4&&ye(t,ht,An,!1)),Nn(t))}function vf(t,n,e){if((bt&6)!==0)throw Error(f(327));var a=!e&&(n&124)===0&&(n&t.expiredLanes)===0||Ca(t,n),i=a?m0(t,n):Xr(t,n,!0),l=a;do{if(i===0){ya&&!a&&ye(t,n,0,!1);break}else{if(e=t.current.alternate,l&&!p0(e)){i=Xr(t,n,!1),l=!1;continue}if(i===2){if(l=n,t.errorRecoveryDisabledLanes&l)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){n=r;t:{var s=t;i=pi;var h=s.current.memoizedState.isDehydrated;if(h&&(Oa(s,r).flags|=256),r=Xr(s,r,!1),r!==2){if(Cr&&!h){s.errorRecoveryDisabledLanes|=l,je|=l,i=4;break t}l=on,on=i,l!==null&&(on===null?on=l:on.push.apply(on,l))}i=r}if(l=!1,i!==2)continue}}if(i===1){Oa(t,0),ye(t,n,0,!0);break}t:{switch(a=t,l=i,l){case 0:case 1:throw Error(f(345));case 4:if((n&4194048)!==n)break;case 6:ye(a,n,An,!ge);break t;case 2:on=null;break;case 3:case 5:break;default:throw Error(f(329))}if((n&62914560)===n&&(i=kr+300-Cn(),10<i)){if(ye(a,n,An,!ge),Ui(a,0,!0)!==0)break t;a.timeoutHandle=Vf(yf.bind(null,a,e,on,Al,qr,n,An,je,xa,ge,l,2,-0,0),i);break t}yf(a,e,on,Al,qr,n,An,je,xa,ge,l,0,-0,0)}}break}while(!0);Nn(t)}function yf(t,n,e,a,i,l,r,s,h,x,_,H,T,A){if(t.timeoutHandle=-1,H=n.subtreeFlags,(H&8192||(H&16785408)===16785408)&&(Ti={stylesheets:null,count:0,unsuspend:J0},hf(n),H=$0(),H!==null)){t.cancelPendingCommit=H(Mf.bind(null,t,n,l,e,a,i,r,s,h,_,1,T,A)),ye(t,l,r,!x);return}Mf(t,n,l,e,a,i,r,s,h)}function p0(t){for(var n=t;;){var e=n.tag;if((e===0||e===11||e===15)&&n.flags&16384&&(e=n.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var i=e[a],l=i.getSnapshot;i=i.value;try{if(!cn(l(),i))return!1}catch{return!1}}if(e=n.child,n.subtreeFlags&16384&&e!==null)e.return=n,n=e;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ye(t,n,e,a){n&=~Hr,n&=~je,t.suspendedLanes|=n,t.pingedLanes&=~n,a&&(t.warmLanes|=n),a=t.expirationTimes;for(var i=n;0<i;){var l=31-sn(i),r=1<<l;a[l]=-1,i&=~r}e!==0&&_u(t,e,n)}function Ml(){return(bt&6)===0?(mi(0),!1):!0}function Yr(){if(st!==null){if(vt===0)var t=st.return;else t=st,Pn=Ne=null,er(t),ga=null,oi=0,t=st;for(;t!==null;)$c(t.alternate,t),t=t.return;st=null}}function Oa(t,n){var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,C0(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),Yr(),wt=t,st=e=Xn(t.current,null),ht=n,vt=0,pn=null,ge=!1,ya=Ca(t,n),Cr=!1,xa=An=Hr=je=me=Ht=0,on=pi=null,qr=!1,(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var i=31-sn(a),l=1<<i;n|=t[i],a&=~l}return Fn=n,Ki(),e}function xf(t,n){ot=null,z.H=dl,n===$a||n===al?(n=Us(),vt=3):n===Hs?(n=Us(),vt=4):vt=n===Nc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,pn=n,st===null&&(Ht=1,vl(t,xn(n,t.current)))}function Sf(){var t=z.H;return z.H=dl,t===null?dl:t}function Tf(){var t=z.A;return z.A=h0,t}function Gr(){Ht=4,ge||(ht&4194048)!==ht&&wn.current!==null||(ya=!0),(me&134217727)===0&&(je&134217727)===0||wt===null||ye(wt,ht,An,!1)}function Xr(t,n,e){var a=bt;bt|=2;var i=Sf(),l=Tf();(wt!==t||ht!==n)&&(Al=null,Oa(t,n)),n=!1;var r=Ht;t:do try{if(vt!==0&&st!==null){var s=st,h=pn;switch(vt){case 8:Yr(),r=6;break t;case 3:case 2:case 9:case 6:wn.current===null&&(n=!0);var x=vt;if(vt=0,pn=null,wa(t,s,h,x),e&&ya){r=0;break t}break;default:x=vt,vt=0,pn=null,wa(t,s,h,x)}}g0(),r=Ht;break}catch(_){xf(t,_)}while(!0);return n&&t.shellSuspendCounter++,Pn=Ne=null,bt=a,z.H=i,z.A=l,st===null&&(wt=null,ht=0,Ki()),r}function g0(){for(;st!==null;)Of(st)}function m0(t,n){var e=bt;bt|=2;var a=Sf(),i=Tf();wt!==t||ht!==n?(Al=null,wl=Cn()+500,Oa(t,n)):ya=Ca(t,n);t:do try{if(vt!==0&&st!==null){n=st;var l=pn;n:switch(vt){case 1:vt=0,pn=null,wa(t,n,l,1);break;case 2:case 9:if(qs(l)){vt=0,pn=null,wf(n);break}n=function(){vt!==2&&vt!==9||wt!==t||(vt=7),Nn(t)},l.then(n,n);break t;case 3:vt=7;break t;case 4:vt=5;break t;case 7:qs(l)?(vt=0,pn=null,wf(n)):(vt=0,pn=null,wa(t,n,l,7));break;case 5:var r=null;switch(st.tag){case 26:r=st.memoizedState;case 5:case 27:var s=st;if(!r||lh(r)){vt=0,pn=null;var h=s.sibling;if(h!==null)st=h;else{var x=s.return;x!==null?(st=x,El(x)):st=null}break n}}vt=0,pn=null,wa(t,n,l,5);break;case 6:vt=0,pn=null,wa(t,n,l,6);break;case 8:Yr(),Ht=6;break t;default:throw Error(f(462))}}b0();break}catch(_){xf(t,_)}while(!0);return Pn=Ne=null,z.H=a,z.A=i,bt=e,st!==null?0:(wt=null,ht=0,Ki(),Ht)}function b0(){for(;st!==null&&!Yh();)Of(st)}function Of(t){var n=Jc(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,n===null?El(t):st=n}function wf(t){var n=t,e=n.alternate;switch(n.tag){case 15:case 0:n=jc(e,n,n.pendingProps,n.type,void 0,ht);break;case 11:n=jc(e,n,n.pendingProps,n.type.render,n.ref,ht);break;case 5:er(n);default:$c(e,n),n=st=ws(n,Fn),n=Jc(e,n,Fn)}t.memoizedProps=t.pendingProps,n===null?El(t):st=n}function wa(t,n,e,a){Pn=Ne=null,er(n),ga=null,oi=0;var i=n.return;try{if(o0(t,i,n,e,ht)){Ht=1,vl(t,xn(e,t.current)),st=null;return}}catch(l){if(i!==null)throw st=i,l;Ht=1,vl(t,xn(e,t.current)),st=null;return}n.flags&32768?(mt||a===1?t=!0:ya||(ht&536870912)!==0?t=!1:(ge=t=!0,(a===2||a===9||a===3||a===6)&&(a=wn.current,a!==null&&a.tag===13&&(a.flags|=16384))),Af(n,t)):El(n)}function El(t){var n=t;do{if((n.flags&32768)!==0){Af(n,ge);return}t=n.return;var e=u0(n.alternate,n,Fn);if(e!==null){st=e;return}if(n=n.sibling,n!==null){st=n;return}st=n=t}while(n!==null);Ht===0&&(Ht=5)}function Af(t,n){do{var e=s0(t.alternate,t);if(e!==null){e.flags&=32767,st=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!n&&(t=t.sibling,t!==null)){st=t;return}st=t=e}while(t!==null);Ht=6,st=null}function Mf(t,n,e,a,i,l,r,s,h){t.cancelPendingCommit=null;do Dl();while(Kt!==0);if((bt&6)!==0)throw Error(f(327));if(n!==null){if(n===t.current)throw Error(f(177));if(l=n.lanes|n.childLanes,l|=Ro,Jh(t,e,l,r,s,h),t===wt&&(st=wt=null,ht=0),Sa=n,ve=t,Ta=e,Ur=l,Nr=i,mf=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,S0(Hi,function(){return Rf(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null,i=j.p,j.p=2,r=bt,bt|=4;try{c0(t,n,e)}finally{bt=r,j.p=i,z.T=a}}Kt=1,Ef(),Df(),_f()}}function Ef(){if(Kt===1){Kt=0;var t=ve,n=Sa,e=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||e){e=z.T,z.T=null;var a=j.p;j.p=2;var i=bt;bt|=4;try{sf(n,t);var l=Ir,r=ps(t.containerInfo),s=l.focusedElem,h=l.selectionRange;if(r!==s&&s&&s.ownerDocument&&ds(s.ownerDocument.documentElement,s)){if(h!==null&&Mo(s)){var x=h.start,_=h.end;if(_===void 0&&(_=x),"selectionStart"in s)s.selectionStart=x,s.selectionEnd=Math.min(_,s.value.length);else{var H=s.ownerDocument||document,T=H&&H.defaultView||window;if(T.getSelection){var A=T.getSelection(),at=s.textContent.length,I=Math.min(h.start,at),St=h.end===void 0?I:Math.min(h.end,at);!A.extend&&I>St&&(r=St,St=I,I=r);var v=hs(s,I),b=hs(s,St);if(v&&b&&(A.rangeCount!==1||A.anchorNode!==v.node||A.anchorOffset!==v.offset||A.focusNode!==b.node||A.focusOffset!==b.offset)){var y=H.createRange();y.setStart(v.node,v.offset),A.removeAllRanges(),I>St?(A.addRange(y),A.extend(b.node,b.offset)):(y.setEnd(b.node,b.offset),A.addRange(y))}}}}for(H=[],A=s;A=A.parentNode;)A.nodeType===1&&H.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<H.length;s++){var R=H[s];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}Gl=!!Fr,Ir=Fr=null}finally{bt=i,j.p=a,z.T=e}}t.current=n,Kt=2}}function Df(){if(Kt===2){Kt=0;var t=ve,n=Sa,e=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||e){e=z.T,z.T=null;var a=j.p;j.p=2;var i=bt;bt|=4;try{lf(t,n.alternate,n)}finally{bt=i,j.p=a,z.T=e}}Kt=3}}function _f(){if(Kt===4||Kt===3){Kt=0,Gh();var t=ve,n=Sa,e=Ta,a=mf;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Kt=5:(Kt=0,Sa=ve=null,zf(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(be=null),io(e),n=n.stateNode,un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(Ra,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=z.T,i=j.p,j.p=2,z.T=null;try{for(var l=t.onRecoverableError,r=0;r<a.length;r++){var s=a[r];l(s.value,{componentStack:s.stack})}}finally{z.T=n,j.p=i}}(Ta&3)!==0&&Dl(),Nn(t),i=t.pendingLanes,(e&4194090)!==0&&(i&42)!==0?t===Br?gi++:(gi=0,Br=t):gi=0,mi(0)}}function zf(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ja(n)))}function Dl(t){return Ef(),Df(),_f(),Rf()}function Rf(){if(Kt!==5)return!1;var t=ve,n=Ur;Ur=0;var e=io(Ta),a=z.T,i=j.p;try{j.p=32>e?32:e,z.T=null,e=Nr,Nr=null;var l=ve,r=Ta;if(Kt=0,Sa=ve=null,Ta=0,(bt&6)!==0)throw Error(f(331));var s=bt;if(bt|=4,pf(l.current),ff(l,l.current,r,e),bt=s,mi(0,!1),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(Ra,l)}catch{}return!0}finally{j.p=i,z.T=a,zf(t,n)}}function Cf(t,n,e){n=xn(e,n),n=mr(t.stateNode,n,2),t=ue(t,n,2),t!==null&&(Ha(t,2),Nn(t))}function Ot(t,n,e){if(t.tag===3)Cf(t,t,e);else for(;n!==null;){if(n.tag===3){Cf(n,t,e);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(be===null||!be.has(a))){t=xn(e,t),e=kc(2),a=ue(n,e,2),a!==null&&(Uc(e,a,n,t),Ha(a,2),Nn(a));break}}n=n.return}}function Lr(t,n,e){var a=t.pingCache;if(a===null){a=t.pingCache=new d0;var i=new Set;a.set(n,i)}else i=a.get(n),i===void 0&&(i=new Set,a.set(n,i));i.has(e)||(Cr=!0,i.add(e),t=v0.bind(null,t,n,e),n.then(t,t))}function v0(t,n,e){var a=t.pingCache;a!==null&&a.delete(n),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,wt===t&&(ht&e)===e&&(Ht===4||Ht===3&&(ht&62914560)===ht&&300>Cn()-kr?(bt&2)===0&&Oa(t,0):Hr|=e,xa===ht&&(xa=0)),Nn(t)}function Hf(t,n){n===0&&(n=Du()),t=la(t,n),t!==null&&(Ha(t,n),Nn(t))}function y0(t){var n=t.memoizedState,e=0;n!==null&&(e=n.retryLane),Hf(t,e)}function x0(t,n){var e=0;switch(t.tag){case 13:var a=t.stateNode,i=t.memoizedState;i!==null&&(e=i.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(f(314))}a!==null&&a.delete(n),Hf(t,e)}function S0(t,n){return to(t,n)}var _l=null,Aa=null,jr=!1,zl=!1,Pr=!1,Pe=0;function Nn(t){t!==Aa&&t.next===null&&(Aa===null?_l=Aa=t:Aa=Aa.next=t),zl=!0,jr||(jr=!0,O0())}function mi(t,n){if(!Pr&&zl){Pr=!0;do for(var e=!1,a=_l;a!==null;){if(t!==0){var i=a.pendingLanes;if(i===0)var l=0;else{var r=a.suspendedLanes,s=a.pingedLanes;l=(1<<31-sn(42|t)+1)-1,l&=i&~(r&~s),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(e=!0,Nf(a,l))}else l=ht,l=Ui(a,a===wt?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||Ca(a,l)||(e=!0,Nf(a,l));a=a.next}while(e);Pr=!1}}function T0(){qf()}function qf(){zl=jr=!1;var t=0;Pe!==0&&(R0()&&(t=Pe),Pe=0);for(var n=Cn(),e=null,a=_l;a!==null;){var i=a.next,l=kf(a,n);l===0?(a.next=null,e===null?_l=i:e.next=i,i===null&&(Aa=e)):(e=a,(t!==0||(l&3)!==0)&&(zl=!0)),a=i}mi(t)}function kf(t,n){for(var e=t.suspendedLanes,a=t.pingedLanes,i=t.expirationTimes,l=t.pendingLanes&-62914561;0<l;){var r=31-sn(l),s=1<<r,h=i[r];h===-1?((s&e)===0||(s&a)!==0)&&(i[r]=Kh(s,n)):h<=n&&(t.expiredLanes|=s),l&=~s}if(n=wt,e=ht,e=Ui(t,t===n?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,e===0||t===n&&(vt===2||vt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&no(a),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||Ca(t,e)){if(n=e&-e,n===t.callbackPriority)return n;switch(a!==null&&no(a),io(e)){case 2:case 8:e=Au;break;case 32:e=Hi;break;case 268435456:e=Mu;break;default:e=Hi}return a=Uf.bind(null,t),e=to(e,a),t.callbackPriority=n,t.callbackNode=e,n}return a!==null&&a!==null&&no(a),t.callbackPriority=2,t.callbackNode=null,2}function Uf(t,n){if(Kt!==0&&Kt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(Dl()&&t.callbackNode!==e)return null;var a=ht;return a=Ui(t,t===wt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(vf(t,a,n),kf(t,Cn()),t.callbackNode!=null&&t.callbackNode===e?Uf.bind(null,t):null)}function Nf(t,n){if(Dl())return null;vf(t,n,!0)}function O0(){H0(function(){(bt&6)!==0?to(wu,T0):qf()})}function Zr(){return Pe===0&&(Pe=Eu()),Pe}function Bf(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Xi(""+t)}function Yf(t,n){var e=n.ownerDocument.createElement("input");return e.name=n.name,e.value=n.value,t.id&&e.setAttribute("form",t.id),n.parentNode.insertBefore(e,n),t=new FormData(t),e.parentNode.removeChild(e),t}function w0(t,n,e,a,i){if(n==="submit"&&e&&e.stateNode===i){var l=Bf((i[nn]||null).action),r=a.submitter;r&&(n=(n=r[nn]||null)?Bf(n.formAction):r.getAttribute("formAction"),n!==null&&(l=n,r=null));var s=new Zi("action","action",null,a,i);t.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Pe!==0){var h=r?Yf(i,r):new FormData(i);fr(e,{pending:!0,data:h,method:i.method,action:l},null,h)}}else typeof l=="function"&&(s.preventDefault(),h=r?Yf(i,r):new FormData(i),fr(e,{pending:!0,data:h,method:i.method,action:l},l,h))},currentTarget:i}]})}}for(var Qr=0;Qr<zo.length;Qr++){var Vr=zo[Qr],A0=Vr.toLowerCase(),M0=Vr[0].toUpperCase()+Vr.slice(1);En(A0,"on"+M0)}En(bs,"onAnimationEnd"),En(vs,"onAnimationIteration"),En(ys,"onAnimationStart"),En("dblclick","onDoubleClick"),En("focusin","onFocus"),En("focusout","onBlur"),En(jd,"onTransitionRun"),En(Pd,"onTransitionStart"),En(Zd,"onTransitionCancel"),En(xs,"onTransitionEnd"),Je("onMouseEnter",["mouseout","mouseover"]),Je("onMouseLeave",["mouseout","mouseover"]),Je("onPointerEnter",["pointerout","pointerover"]),Je("onPointerLeave",["pointerout","pointerover"]),De("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),De("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),De("onBeforeInput",["compositionend","keypress","textInput","paste"]),De("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),De("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),De("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bi));function Gf(t,n){n=(n&4)!==0;for(var e=0;e<t.length;e++){var a=t[e],i=a.event;a=a.listeners;t:{var l=void 0;if(n)for(var r=a.length-1;0<=r;r--){var s=a[r],h=s.instance,x=s.currentTarget;if(s=s.listener,h!==l&&i.isPropagationStopped())break t;l=s,i.currentTarget=x;try{l(i)}catch(_){bl(_)}i.currentTarget=null,l=h}else for(r=0;r<a.length;r++){if(s=a[r],h=s.instance,x=s.currentTarget,s=s.listener,h!==l&&i.isPropagationStopped())break t;l=s,i.currentTarget=x;try{l(i)}catch(_){bl(_)}i.currentTarget=null,l=h}}}}function ct(t,n){var e=n[lo];e===void 0&&(e=n[lo]=new Set);var a=t+"__bubble";e.has(a)||(Xf(n,t,2,!1),e.add(a))}function Kr(t,n,e){var a=0;n&&(a|=4),Xf(e,t,a,n)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function Jr(t){if(!t[Rl]){t[Rl]=!0,Hu.forEach(function(e){e!=="selectionchange"&&(E0.has(e)||Kr(e,!1,t),Kr(e,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Rl]||(n[Rl]=!0,Kr("selectionchange",!1,n))}}function Xf(t,n,e,a){switch(fh(n)){case 2:var i=tp;break;case 8:i=np;break;default:i=su}e=i.bind(null,n,e,t),i=void 0,!bo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),a?i!==void 0?t.addEventListener(n,e,{capture:!0,passive:i}):t.addEventListener(n,e,!0):i!==void 0?t.addEventListener(n,e,{passive:i}):t.addEventListener(n,e,!1)}function Wr(t,n,e,a,i){var l=a;if((n&1)===0&&(n&2)===0&&a!==null)t:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var s=a.stateNode.containerInfo;if(s===i)break;if(r===4)for(r=a.return;r!==null;){var h=r.tag;if((h===3||h===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;s!==null;){if(r=Qe(s),r===null)return;if(h=r.tag,h===5||h===6||h===26||h===27){a=l=r;continue t}s=s.parentNode}}a=a.return}Vu(function(){var x=l,_=go(e),H=[];t:{var T=Ss.get(t);if(T!==void 0){var A=Zi,at=t;switch(t){case"keypress":if(ji(e)===0)break t;case"keydown":case"keyup":A=Sd;break;case"focusin":at="focus",A=So;break;case"focusout":at="blur",A=So;break;case"beforeblur":case"afterblur":A=So;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Wu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=sd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=wd;break;case bs:case vs:case ys:A=hd;break;case xs:A=Md;break;case"scroll":case"scrollend":A=rd;break;case"wheel":A=Dd;break;case"copy":case"cut":case"paste":A=pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Fu;break;case"toggle":case"beforetoggle":A=zd}var I=(n&4)!==0,St=!I&&(t==="scroll"||t==="scrollend"),v=I?T!==null?T+"Capture":null:T;I=[];for(var b=x,y;b!==null;){var R=b;if(y=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||y===null||v===null||(R=Ua(b,v),R!=null&&I.push(vi(b,R,y))),St)break;b=b.return}0<I.length&&(T=new A(T,at,null,e,_),H.push({event:T,listeners:I}))}}if((n&7)===0){t:{if(T=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",T&&e!==po&&(at=e.relatedTarget||e.fromElement)&&(Qe(at)||at[Ze]))break t;if((A||T)&&(T=_.window===_?_:(T=_.ownerDocument)?T.defaultView||T.parentWindow:window,A?(at=e.relatedTarget||e.toElement,A=x,at=at?Qe(at):null,at!==null&&(St=q(at),I=at.tag,at!==St||I!==5&&I!==27&&I!==6)&&(at=null)):(A=null,at=x),A!==at)){if(I=Wu,R="onMouseLeave",v="onMouseEnter",b="mouse",(t==="pointerout"||t==="pointerover")&&(I=Fu,R="onPointerLeave",v="onPointerEnter",b="pointer"),St=A==null?T:ka(A),y=at==null?T:ka(at),T=new I(R,b+"leave",A,e,_),T.target=St,T.relatedTarget=y,R=null,Qe(_)===x&&(I=new I(v,b+"enter",at,e,_),I.target=y,I.relatedTarget=St,R=I),St=R,A&&at)n:{for(I=A,v=at,b=0,y=I;y;y=Ma(y))b++;for(y=0,R=v;R;R=Ma(R))y++;for(;0<b-y;)I=Ma(I),b--;for(;0<y-b;)v=Ma(v),y--;for(;b--;){if(I===v||v!==null&&I===v.alternate)break n;I=Ma(I),v=Ma(v)}I=null}else I=null;A!==null&&Lf(H,T,A,I,!1),at!==null&&St!==null&&Lf(H,St,at,I,!0)}}t:{if(T=x?ka(x):window,A=T.nodeName&&T.nodeName.toLowerCase(),A==="select"||A==="input"&&T.type==="file")var Z=os;else if(is(T))if(rs)Z=Gd;else{Z=Bd;var ut=Nd}else A=T.nodeName,!A||A.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?x&&ho(x.elementType)&&(Z=os):Z=Yd;if(Z&&(Z=Z(t,x))){ls(H,Z,e,_);break t}ut&&ut(t,T,x),t==="focusout"&&x&&T.type==="number"&&x.memoizedProps.value!=null&&fo(T,"number",T.value)}switch(ut=x?ka(x):window,t){case"focusin":(is(ut)||ut.contentEditable==="true")&&(ea=ut,Eo=x,Pa=null);break;case"focusout":Pa=Eo=ea=null;break;case"mousedown":Do=!0;break;case"contextmenu":case"mouseup":case"dragend":Do=!1,gs(H,e,_);break;case"selectionchange":if(Ld)break;case"keydown":case"keyup":gs(H,e,_)}var V;if(Oo)t:{switch(t){case"compositionstart":var nt="onCompositionStart";break t;case"compositionend":nt="onCompositionEnd";break t;case"compositionupdate":nt="onCompositionUpdate";break t}nt=void 0}else na?es(t,e)&&(nt="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(nt="onCompositionStart");nt&&(Iu&&e.locale!=="ko"&&(na||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&na&&(V=Ku()):(ie=_,vo="value"in ie?ie.value:ie.textContent,na=!0)),ut=Cl(x,nt),0<ut.length&&(nt=new $u(nt,t,null,e,_),H.push({event:nt,listeners:ut}),V?nt.data=V:(V=as(e),V!==null&&(nt.data=V)))),(V=Cd?Hd(t,e):qd(t,e))&&(nt=Cl(x,"onBeforeInput"),0<nt.length&&(ut=new $u("onBeforeInput","beforeinput",null,e,_),H.push({event:ut,listeners:nt}),ut.data=V)),w0(H,t,x,e,_)}Gf(H,n)})}function vi(t,n,e){return{instance:t,listener:n,currentTarget:e}}function Cl(t,n){for(var e=n+"Capture",a=[];t!==null;){var i=t,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=Ua(t,e),i!=null&&a.unshift(vi(t,i,l)),i=Ua(t,n),i!=null&&a.push(vi(t,i,l))),t.tag===3)return a;t=t.return}return[]}function Ma(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Lf(t,n,e,a,i){for(var l=n._reactName,r=[];e!==null&&e!==a;){var s=e,h=s.alternate,x=s.stateNode;if(s=s.tag,h!==null&&h===a)break;s!==5&&s!==26&&s!==27||x===null||(h=x,i?(x=Ua(e,l),x!=null&&r.unshift(vi(e,x,h))):i||(x=Ua(e,l),x!=null&&r.push(vi(e,x,h)))),e=e.return}r.length!==0&&t.push({event:n,listeners:r})}var D0=/\r\n?/g,_0=/\u0000|\uFFFD/g;function jf(t){return(typeof t=="string"?t:""+t).replace(D0,`
`).replace(_0,"")}function Pf(t,n){return n=jf(n),jf(t)===n}function Hl(){}function xt(t,n,e,a,i,l){switch(e){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||Fe(t,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&Fe(t,""+a);break;case"className":Bi(t,"class",a);break;case"tabIndex":Bi(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Bi(t,e,a);break;case"style":Zu(t,a,l);break;case"data":if(n!=="object"){Bi(t,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||e!=="href")){t.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=Xi(""+a),t.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(e==="formAction"?(n!=="input"&&xt(t,n,"name",i.name,i,null),xt(t,n,"formEncType",i.formEncType,i,null),xt(t,n,"formMethod",i.formMethod,i,null),xt(t,n,"formTarget",i.formTarget,i,null)):(xt(t,n,"encType",i.encType,i,null),xt(t,n,"method",i.method,i,null),xt(t,n,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=Xi(""+a),t.setAttribute(e,a);break;case"onClick":a!=null&&(t.onclick=Hl);break;case"onScroll":a!=null&&ct("scroll",t);break;case"onScrollEnd":a!=null&&ct("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(f(61));if(e=a.__html,e!=null){if(i.children!=null)throw Error(f(60));t.innerHTML=e}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}e=Xi(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""+a):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":a===!0?t.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,a):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(e,a):t.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(e):t.setAttribute(e,a);break;case"popover":ct("beforetoggle",t),ct("toggle",t),Ni(t,"popover",a);break;case"xlinkActuate":Yn(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Yn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Yn(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Yn(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Yn(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Yn(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Yn(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Yn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Yn(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ni(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=ld.get(e)||e,Ni(t,e,a))}}function $r(t,n,e,a,i,l){switch(e){case"style":Zu(t,a,l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(f(61));if(e=a.__html,e!=null){if(i.children!=null)throw Error(f(60));t.innerHTML=e}}break;case"children":typeof a=="string"?Fe(t,a):(typeof a=="number"||typeof a=="bigint")&&Fe(t,""+a);break;case"onScroll":a!=null&&ct("scroll",t);break;case"onScrollEnd":a!=null&&ct("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Hl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qu.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(i=e.endsWith("Capture"),n=e.slice(2,i?e.length-7:void 0),l=t[nn]||null,l=l!=null?l[e]:null,typeof l=="function"&&t.removeEventListener(n,l,i),typeof a=="function")){typeof l!="function"&&l!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(n,a,i);break t}e in t?t[e]=a:a===!0?t.setAttribute(e,""):Ni(t,e,a)}}}function Jt(t,n,e){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ct("error",t),ct("load",t);var a=!1,i=!1,l;for(l in e)if(e.hasOwnProperty(l)){var r=e[l];if(r!=null)switch(l){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,n));default:xt(t,n,l,r,e,null)}}i&&xt(t,n,"srcSet",e.srcSet,e,null),a&&xt(t,n,"src",e.src,e,null);return;case"input":ct("invalid",t);var s=l=r=i=null,h=null,x=null;for(a in e)if(e.hasOwnProperty(a)){var _=e[a];if(_!=null)switch(a){case"name":i=_;break;case"type":r=_;break;case"checked":h=_;break;case"defaultChecked":x=_;break;case"value":l=_;break;case"defaultValue":s=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(f(137,n));break;default:xt(t,n,a,_,e,null)}}Xu(t,l,s,h,x,r,i,!1),Yi(t);return;case"select":ct("invalid",t),a=r=l=null;for(i in e)if(e.hasOwnProperty(i)&&(s=e[i],s!=null))switch(i){case"value":l=s;break;case"defaultValue":r=s;break;case"multiple":a=s;default:xt(t,n,i,s,e,null)}n=l,e=r,t.multiple=!!a,n!=null?$e(t,!!a,n,!1):e!=null&&$e(t,!!a,e,!0);return;case"textarea":ct("invalid",t),l=i=a=null;for(r in e)if(e.hasOwnProperty(r)&&(s=e[r],s!=null))switch(r){case"value":a=s;break;case"defaultValue":i=s;break;case"children":l=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(f(91));break;default:xt(t,n,r,s,e,null)}ju(t,a,i,l),Yi(t);return;case"option":for(h in e)if(e.hasOwnProperty(h)&&(a=e[h],a!=null))switch(h){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:xt(t,n,h,a,e,null)}return;case"dialog":ct("beforetoggle",t),ct("toggle",t),ct("cancel",t),ct("close",t);break;case"iframe":case"object":ct("load",t);break;case"video":case"audio":for(a=0;a<bi.length;a++)ct(bi[a],t);break;case"image":ct("error",t),ct("load",t);break;case"details":ct("toggle",t);break;case"embed":case"source":case"link":ct("error",t),ct("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in e)if(e.hasOwnProperty(x)&&(a=e[x],a!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,n));default:xt(t,n,x,a,e,null)}return;default:if(ho(n)){for(_ in e)e.hasOwnProperty(_)&&(a=e[_],a!==void 0&&$r(t,n,_,a,e,void 0));return}}for(s in e)e.hasOwnProperty(s)&&(a=e[s],a!=null&&xt(t,n,s,a,e,null))}function z0(t,n,e,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,r=null,s=null,h=null,x=null,_=null;for(A in e){var H=e[A];if(e.hasOwnProperty(A)&&H!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":h=H;default:a.hasOwnProperty(A)||xt(t,n,A,null,a,H)}}for(var T in a){var A=a[T];if(H=e[T],a.hasOwnProperty(T)&&(A!=null||H!=null))switch(T){case"type":l=A;break;case"name":i=A;break;case"checked":x=A;break;case"defaultChecked":_=A;break;case"value":r=A;break;case"defaultValue":s=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(f(137,n));break;default:A!==H&&xt(t,n,T,A,a,H)}}co(t,r,s,h,x,_,l,i);return;case"select":A=r=s=T=null;for(l in e)if(h=e[l],e.hasOwnProperty(l)&&h!=null)switch(l){case"value":break;case"multiple":A=h;default:a.hasOwnProperty(l)||xt(t,n,l,null,a,h)}for(i in a)if(l=a[i],h=e[i],a.hasOwnProperty(i)&&(l!=null||h!=null))switch(i){case"value":T=l;break;case"defaultValue":s=l;break;case"multiple":r=l;default:l!==h&&xt(t,n,i,l,a,h)}n=s,e=r,a=A,T!=null?$e(t,!!e,T,!1):!!a!=!!e&&(n!=null?$e(t,!!e,n,!0):$e(t,!!e,e?[]:"",!1));return;case"textarea":A=T=null;for(s in e)if(i=e[s],e.hasOwnProperty(s)&&i!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:xt(t,n,s,null,a,i)}for(r in a)if(i=a[r],l=e[r],a.hasOwnProperty(r)&&(i!=null||l!=null))switch(r){case"value":T=i;break;case"defaultValue":A=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(f(91));break;default:i!==l&&xt(t,n,r,i,a,l)}Lu(t,T,A);return;case"option":for(var at in e)if(T=e[at],e.hasOwnProperty(at)&&T!=null&&!a.hasOwnProperty(at))switch(at){case"selected":t.selected=!1;break;default:xt(t,n,at,null,a,T)}for(h in a)if(T=a[h],A=e[h],a.hasOwnProperty(h)&&T!==A&&(T!=null||A!=null))switch(h){case"selected":t.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:xt(t,n,h,T,a,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in e)T=e[I],e.hasOwnProperty(I)&&T!=null&&!a.hasOwnProperty(I)&&xt(t,n,I,null,a,T);for(x in a)if(T=a[x],A=e[x],a.hasOwnProperty(x)&&T!==A&&(T!=null||A!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(f(137,n));break;default:xt(t,n,x,T,a,A)}return;default:if(ho(n)){for(var St in e)T=e[St],e.hasOwnProperty(St)&&T!==void 0&&!a.hasOwnProperty(St)&&$r(t,n,St,void 0,a,T);for(_ in a)T=a[_],A=e[_],!a.hasOwnProperty(_)||T===A||T===void 0&&A===void 0||$r(t,n,_,T,a,A);return}}for(var v in e)T=e[v],e.hasOwnProperty(v)&&T!=null&&!a.hasOwnProperty(v)&&xt(t,n,v,null,a,T);for(H in a)T=a[H],A=e[H],!a.hasOwnProperty(H)||T===A||T==null&&A==null||xt(t,n,H,T,a,A)}var Fr=null,Ir=null;function ql(t){return t.nodeType===9?t:t.ownerDocument}function Zf(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qf(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function tu(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var nu=null;function R0(){var t=window.event;return t&&t.type==="popstate"?t===nu?!1:(nu=t,!0):(nu=null,!1)}var Vf=typeof setTimeout=="function"?setTimeout:void 0,C0=typeof clearTimeout=="function"?clearTimeout:void 0,Kf=typeof Promise=="function"?Promise:void 0,H0=typeof queueMicrotask=="function"?queueMicrotask:typeof Kf<"u"?function(t){return Kf.resolve(null).then(t).catch(q0)}:Vf;function q0(t){setTimeout(function(){throw t})}function xe(t){return t==="head"}function Jf(t,n){var e=n,a=0,i=0;do{var l=e.nextSibling;if(t.removeChild(e),l&&l.nodeType===8)if(e=l.data,e==="/$"){if(0<a&&8>a){e=a;var r=t.ownerDocument;if(e&1&&yi(r.documentElement),e&2&&yi(r.body),e&4)for(e=r.head,yi(e),r=e.firstChild;r;){var s=r.nextSibling,h=r.nodeName;r[qa]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&r.rel.toLowerCase()==="stylesheet"||e.removeChild(r),r=s}}if(i===0){t.removeChild(l),Ei(n);return}i--}else e==="$"||e==="$?"||e==="$!"?i++:a=e.charCodeAt(0)-48;else a=0;e=l}while(e);Ei(n)}function eu(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var e=n;switch(n=n.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":eu(e),oo(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function k0(t,n,e,a){for(;t.nodeType===1;){var i=e;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[qa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(l=t.getAttribute("rel"),l==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(l!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(l=t.getAttribute("src"),(l!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===l)return t}else return t;if(t=_n(t.nextSibling),t===null)break}return null}function U0(t,n,e){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=_n(t.nextSibling),t===null))return null;return t}function au(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function N0(t,n){var e=t.ownerDocument;if(t.data!=="$?"||e.readyState==="complete")n();else{var a=function(){n(),e.removeEventListener("DOMContentLoaded",a)};e.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function _n(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var iu=null;function Wf(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"){if(n===0)return t;n--}else e==="/$"&&n++}t=t.previousSibling}return null}function $f(t,n,e){switch(n=ql(e),t){case"html":if(t=n.documentElement,!t)throw Error(f(452));return t;case"head":if(t=n.head,!t)throw Error(f(453));return t;case"body":if(t=n.body,!t)throw Error(f(454));return t;default:throw Error(f(451))}}function yi(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);oo(t)}var Mn=new Map,Ff=new Set;function kl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var In=j.d;j.d={f:B0,r:Y0,D:G0,C:X0,L:L0,m:j0,X:Z0,S:P0,M:Q0};function B0(){var t=In.f(),n=Ml();return t||n}function Y0(t){var n=Ve(t);n!==null&&n.tag===5&&n.type==="form"?bc(n):In.r(t)}var Ea=typeof document>"u"?null:document;function If(t,n,e){var a=Ea;if(a&&typeof n=="string"&&n){var i=yn(n);i='link[rel="'+t+'"][href="'+i+'"]',typeof e=="string"&&(i+='[crossorigin="'+e+'"]'),Ff.has(i)||(Ff.add(i),t={rel:t,crossOrigin:e,href:n},a.querySelector(i)===null&&(n=a.createElement("link"),Jt(n,"link",t),jt(n),a.head.appendChild(n)))}}function G0(t){In.D(t),If("dns-prefetch",t,null)}function X0(t,n){In.C(t,n),If("preconnect",t,n)}function L0(t,n,e){In.L(t,n,e);var a=Ea;if(a&&t&&n){var i='link[rel="preload"][as="'+yn(n)+'"]';n==="image"&&e&&e.imageSrcSet?(i+='[imagesrcset="'+yn(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(i+='[imagesizes="'+yn(e.imageSizes)+'"]')):i+='[href="'+yn(t)+'"]';var l=i;switch(n){case"style":l=Da(t);break;case"script":l=_a(t)}Mn.has(l)||(t=Y({rel:"preload",href:n==="image"&&e&&e.imageSrcSet?void 0:t,as:n},e),Mn.set(l,t),a.querySelector(i)!==null||n==="style"&&a.querySelector(xi(l))||n==="script"&&a.querySelector(Si(l))||(n=a.createElement("link"),Jt(n,"link",t),jt(n),a.head.appendChild(n)))}}function j0(t,n){In.m(t,n);var e=Ea;if(e&&t){var a=n&&typeof n.as=="string"?n.as:"script",i='link[rel="modulepreload"][as="'+yn(a)+'"][href="'+yn(t)+'"]',l=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=_a(t)}if(!Mn.has(l)&&(t=Y({rel:"modulepreload",href:t},n),Mn.set(l,t),e.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(Si(l)))return}a=e.createElement("link"),Jt(a,"link",t),jt(a),e.head.appendChild(a)}}}function P0(t,n,e){In.S(t,n,e);var a=Ea;if(a&&t){var i=Ke(a).hoistableStyles,l=Da(t);n=n||"default";var r=i.get(l);if(!r){var s={loading:0,preload:null};if(r=a.querySelector(xi(l)))s.loading=5;else{t=Y({rel:"stylesheet",href:t,"data-precedence":n},e),(e=Mn.get(l))&&lu(t,e);var h=r=a.createElement("link");jt(h),Jt(h,"link",t),h._p=new Promise(function(x,_){h.onload=x,h.onerror=_}),h.addEventListener("load",function(){s.loading|=1}),h.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Ul(r,n,a)}r={type:"stylesheet",instance:r,count:1,state:s},i.set(l,r)}}}function Z0(t,n){In.X(t,n);var e=Ea;if(e&&t){var a=Ke(e).hoistableScripts,i=_a(t),l=a.get(i);l||(l=e.querySelector(Si(i)),l||(t=Y({src:t,async:!0},n),(n=Mn.get(i))&&ou(t,n),l=e.createElement("script"),jt(l),Jt(l,"link",t),e.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function Q0(t,n){In.M(t,n);var e=Ea;if(e&&t){var a=Ke(e).hoistableScripts,i=_a(t),l=a.get(i);l||(l=e.querySelector(Si(i)),l||(t=Y({src:t,async:!0,type:"module"},n),(n=Mn.get(i))&&ou(t,n),l=e.createElement("script"),jt(l),Jt(l,"link",t),e.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function th(t,n,e,a){var i=(i=it.current)?kl(i):null;if(!i)throw Error(f(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(n=Da(e.href),e=Ke(i).hoistableStyles,a=e.get(n),a||(a={type:"style",instance:null,count:0,state:null},e.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=Da(e.href);var l=Ke(i).hoistableStyles,r=l.get(t);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(t,r),(l=i.querySelector(xi(t)))&&!l._p&&(r.instance=l,r.state.loading=5),Mn.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},Mn.set(t,e),l||V0(i,t,e,r.state))),n&&a===null)throw Error(f(528,""));return r}if(n&&a!==null)throw Error(f(529,""));return null;case"script":return n=e.async,e=e.src,typeof e=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=_a(e),e=Ke(i).hoistableScripts,a=e.get(n),a||(a={type:"script",instance:null,count:0,state:null},e.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,t))}}function Da(t){return'href="'+yn(t)+'"'}function xi(t){return'link[rel="stylesheet"]['+t+"]"}function nh(t){return Y({},t,{"data-precedence":t.precedence,precedence:null})}function V0(t,n,e,a){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=t.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),Jt(n,"link",e),jt(n),t.head.appendChild(n))}function _a(t){return'[src="'+yn(t)+'"]'}function Si(t){return"script[async]"+t}function eh(t,n,e){if(n.count++,n.instance===null)switch(n.type){case"style":var a=t.querySelector('style[data-href~="'+yn(e.href)+'"]');if(a)return n.instance=a,jt(a),a;var i=Y({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),jt(a),Jt(a,"style",i),Ul(a,e.precedence,t),n.instance=a;case"stylesheet":i=Da(e.href);var l=t.querySelector(xi(i));if(l)return n.state.loading|=4,n.instance=l,jt(l),l;a=nh(e),(i=Mn.get(i))&&lu(a,i),l=(t.ownerDocument||t).createElement("link"),jt(l);var r=l;return r._p=new Promise(function(s,h){r.onload=s,r.onerror=h}),Jt(l,"link",a),n.state.loading|=4,Ul(l,e.precedence,t),n.instance=l;case"script":return l=_a(e.src),(i=t.querySelector(Si(l)))?(n.instance=i,jt(i),i):(a=e,(i=Mn.get(l))&&(a=Y({},e),ou(a,i)),t=t.ownerDocument||t,i=t.createElement("script"),jt(i),Jt(i,"link",a),t.head.appendChild(i),n.instance=i);case"void":return null;default:throw Error(f(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,Ul(a,e.precedence,t));return n.instance}function Ul(t,n,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,l=i,r=0;r<a.length;r++){var s=a[r];if(s.dataset.precedence===n)l=s;else if(l!==i)break}l?l.parentNode.insertBefore(t,l.nextSibling):(n=e.nodeType===9?e.head:e,n.insertBefore(t,n.firstChild))}function lu(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ou(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Nl=null;function ah(t,n,e){if(Nl===null){var a=new Map,i=Nl=new Map;i.set(e,a)}else i=Nl,a=i.get(e),a||(a=new Map,i.set(e,a));if(a.has(t))return a;for(a.set(t,null),e=e.getElementsByTagName(t),i=0;i<e.length;i++){var l=e[i];if(!(l[qa]||l[Wt]||t==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var r=l.getAttribute(n)||"";r=t+r;var s=a.get(r);s?s.push(l):a.set(r,[l])}}return a}function ih(t,n,e){t=t.ownerDocument||t,t.head.insertBefore(e,n==="title"?t.querySelector("head > title"):null)}function K0(t,n,e){if(e===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function lh(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ti=null;function J0(){}function W0(t,n,e){if(Ti===null)throw Error(f(475));var a=Ti;if(n.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=Da(e.href),l=t.querySelector(xi(i));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=Bl.bind(a),t.then(a,a)),n.state.loading|=4,n.instance=l,jt(l);return}l=t.ownerDocument||t,e=nh(e),(i=Mn.get(i))&&lu(e,i),l=l.createElement("link"),jt(l);var r=l;r._p=new Promise(function(s,h){r.onload=s,r.onerror=h}),Jt(l,"link",e),n.instance=l}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(a.count++,n=Bl.bind(a),t.addEventListener("load",n),t.addEventListener("error",n))}}function $0(){if(Ti===null)throw Error(f(475));var t=Ti;return t.stylesheets&&t.count===0&&ru(t,t.stylesheets),0<t.count?function(n){var e=setTimeout(function(){if(t.stylesheets&&ru(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(e)}}:null}function Bl(){if(this.count--,this.count===0){if(this.stylesheets)ru(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Yl=null;function ru(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Yl=new Map,n.forEach(F0,t),Yl=null,Bl.call(t))}function F0(t,n){if(!(n.state.loading&4)){var e=Yl.get(t);if(e)var a=e.get(null);else{e=new Map,Yl.set(t,e);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var r=i[l];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(e.set(r.dataset.precedence,r),a=r)}a&&e.set(null,a)}i=n.instance,r=i.getAttribute("data-precedence"),l=e.get(r)||a,l===a&&e.set(null,i),e.set(r,i),this.count++,a=Bl.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),l?l.parentNode.insertBefore(i,l.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),n.state.loading|=4}}var Oi={$$typeof:N,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function I0(t,n,e,a,i,l,r,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=eo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eo(0),this.hiddenUpdates=eo(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function oh(t,n,e,a,i,l,r,s,h,x,_,H){return t=new I0(t,n,e,r,s,h,x,H),n=1,l===!0&&(n|=24),l=fn(3,null,null,n),t.current=l,l.stateNode=t,n=Lo(),n.refCount++,t.pooledCache=n,n.refCount++,l.memoizedState={element:a,isDehydrated:e,cache:n},Qo(l),t}function rh(t){return t?(t=oa,t):oa}function uh(t,n,e,a,i,l){i=rh(i),a.context===null?a.context=i:a.pendingContext=i,a=re(n),a.payload={element:e},l=l===void 0?null:l,l!==null&&(a.callback=l),e=ue(t,a,n),e!==null&&(mn(e,t,n),Ia(e,t,n))}function sh(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<n?e:n}}function uu(t,n){sh(t,n),(t=t.alternate)&&sh(t,n)}function ch(t){if(t.tag===13){var n=la(t,67108864);n!==null&&mn(n,t,67108864),uu(t,67108864)}}var Gl=!0;function tp(t,n,e,a){var i=z.T;z.T=null;var l=j.p;try{j.p=2,su(t,n,e,a)}finally{j.p=l,z.T=i}}function np(t,n,e,a){var i=z.T;z.T=null;var l=j.p;try{j.p=8,su(t,n,e,a)}finally{j.p=l,z.T=i}}function su(t,n,e,a){if(Gl){var i=cu(a);if(i===null)Wr(t,n,a,Xl,e),hh(t,a);else if(ap(i,t,n,e,a))a.stopPropagation();else if(hh(t,a),n&4&&-1<ep.indexOf(t)){for(;i!==null;){var l=Ve(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var r=Ee(l.pendingLanes);if(r!==0){var s=l;for(s.pendingLanes|=2,s.entangledLanes|=2;r;){var h=1<<31-sn(r);s.entanglements[1]|=h,r&=~h}Nn(l),(bt&6)===0&&(wl=Cn()+500,mi(0))}}break;case 13:s=la(l,2),s!==null&&mn(s,l,2),Ml(),uu(l,2)}if(l=cu(a),l===null&&Wr(t,n,a,Xl,e),l===i)break;i=l}i!==null&&a.stopPropagation()}else Wr(t,n,a,null,e)}}function cu(t){return t=go(t),fu(t)}var Xl=null;function fu(t){if(Xl=null,t=Qe(t),t!==null){var n=q(t);if(n===null)t=null;else{var e=n.tag;if(e===13){if(t=G(n),t!==null)return t;t=null}else if(e===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Xl=t,null}function fh(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xh()){case wu:return 2;case Au:return 8;case Hi:case Lh:return 32;case Mu:return 268435456;default:return 32}default:return 32}}var hu=!1,Se=null,Te=null,Oe=null,wi=new Map,Ai=new Map,we=[],ep="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hh(t,n){switch(t){case"focusin":case"focusout":Se=null;break;case"dragenter":case"dragleave":Te=null;break;case"mouseover":case"mouseout":Oe=null;break;case"pointerover":case"pointerout":wi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ai.delete(n.pointerId)}}function Mi(t,n,e,a,i,l){return t===null||t.nativeEvent!==l?(t={blockedOn:n,domEventName:e,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},n!==null&&(n=Ve(n),n!==null&&ch(n)),t):(t.eventSystemFlags|=a,n=t.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),t)}function ap(t,n,e,a,i){switch(n){case"focusin":return Se=Mi(Se,t,n,e,a,i),!0;case"dragenter":return Te=Mi(Te,t,n,e,a,i),!0;case"mouseover":return Oe=Mi(Oe,t,n,e,a,i),!0;case"pointerover":var l=i.pointerId;return wi.set(l,Mi(wi.get(l)||null,t,n,e,a,i)),!0;case"gotpointercapture":return l=i.pointerId,Ai.set(l,Mi(Ai.get(l)||null,t,n,e,a,i)),!0}return!1}function dh(t){var n=Qe(t.target);if(n!==null){var e=q(n);if(e!==null){if(n=e.tag,n===13){if(n=G(e),n!==null){t.blockedOn=n,Wh(t.priority,function(){if(e.tag===13){var a=gn();a=ao(a);var i=la(e,a);i!==null&&mn(i,e,a),uu(e,a)}});return}}else if(n===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ll(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var e=cu(t.nativeEvent);if(e===null){e=t.nativeEvent;var a=new e.constructor(e.type,e);po=a,e.target.dispatchEvent(a),po=null}else return n=Ve(e),n!==null&&ch(n),t.blockedOn=e,!1;n.shift()}return!0}function ph(t,n,e){Ll(t)&&e.delete(n)}function ip(){hu=!1,Se!==null&&Ll(Se)&&(Se=null),Te!==null&&Ll(Te)&&(Te=null),Oe!==null&&Ll(Oe)&&(Oe=null),wi.forEach(ph),Ai.forEach(ph)}function jl(t,n){t.blockedOn===n&&(t.blockedOn=null,hu||(hu=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,ip)))}var Pl=null;function gh(t){Pl!==t&&(Pl=t,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){Pl===t&&(Pl=null);for(var n=0;n<t.length;n+=3){var e=t[n],a=t[n+1],i=t[n+2];if(typeof a!="function"){if(fu(a||e)===null)continue;break}var l=Ve(e);l!==null&&(t.splice(n,3),n-=3,fr(l,{pending:!0,data:i,method:e.method,action:a},a,i))}}))}function Ei(t){function n(h){return jl(h,t)}Se!==null&&jl(Se,t),Te!==null&&jl(Te,t),Oe!==null&&jl(Oe,t),wi.forEach(n),Ai.forEach(n);for(var e=0;e<we.length;e++){var a=we[e];a.blockedOn===t&&(a.blockedOn=null)}for(;0<we.length&&(e=we[0],e.blockedOn===null);)dh(e),e.blockedOn===null&&we.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var i=e[a],l=e[a+1],r=i[nn]||null;if(typeof l=="function")r||gh(e);else if(r){var s=null;if(l&&l.hasAttribute("formAction")){if(i=l,r=l[nn]||null)s=r.formAction;else if(fu(i)!==null)continue}else s=r.action;typeof s=="function"?e[a+1]=s:(e.splice(a,3),a-=3),gh(e)}}}function du(t){this._internalRoot=t}Zl.prototype.render=du.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(f(409));var e=n.current,a=gn();uh(e,a,t,n,null,null)},Zl.prototype.unmount=du.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;uh(t.current,2,null,t,null,null),Ml(),n[Ze]=null}};function Zl(t){this._internalRoot=t}Zl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ru();t={blockedOn:null,target:t,priority:n};for(var e=0;e<we.length&&n!==0&&n<we[e].priority;e++);we.splice(e,0,t),e===0&&dh(t)}};var mh=d.version;if(mh!=="19.1.0")throw Error(f(527,mh,"19.1.0"));j.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(f(188)):(t=Object.keys(t).join(","),Error(f(268,t)));return t=U(n),t=t!==null?w(t):null,t=t===null?null:t.stateNode,t};var lp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Ra=Ql.inject(lp),un=Ql}catch{}}return _i.createRoot=function(t,n){if(!D(t))throw Error(f(299));var e=!1,a="",i=Rc,l=Cc,r=Hc,s=null;return n!=null&&(n.unstable_strictMode===!0&&(e=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(l=n.onCaughtError),n.onRecoverableError!==void 0&&(r=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(s=n.unstable_transitionCallbacks)),n=oh(t,1,!1,null,null,e,a,i,l,r,s,null),t[Ze]=n.current,Jr(t),new du(n)},_i.hydrateRoot=function(t,n,e){if(!D(t))throw Error(f(299));var a=!1,i="",l=Rc,r=Cc,s=Hc,h=null,x=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(h=e.unstable_transitionCallbacks),e.formState!==void 0&&(x=e.formState)),n=oh(t,1,!0,n,e??null,a,i,l,r,s,h,x),n.context=rh(null),e=n.current,a=gn(),a=ao(a),i=re(a),i.callback=null,ue(e,i,a),e=a,n.current.lanes=e,Ha(n,e),Nn(n),t[Ze]=n.current,Jr(t),new Zl(n)},_i.version="19.1.0",_i}var Mh;function gp(){if(Mh)return mu.exports;Mh=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(d){console.error(d)}}return c(),mu.exports=pp(),mu.exports}var mp=gp(),Jl={exports:{}},bp=Jl.exports,Eh;function vp(){return Eh||(Eh=1,function(c,d){(function(g,f){c.exports=f()})(typeof self<"u"?self:bp,()=>(()=>{var g={d:(M,S)=>{for(var B in S)g.o(S,B)&&!g.o(M,B)&&Object.defineProperty(M,B,{enumerable:!0,get:S[B]})},o:(M,S)=>Object.prototype.hasOwnProperty.call(M,S),r:M=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(M,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(M,"__esModule",{value:!0})}},f={};g.r(f),g.d(f,{default:()=>ft}),Number.prototype.clamp=function(M,S){return Math.min(Math.max(this,M),S)};function D(M){for(;M.children&&M.children.length>0;)D(M.children[0]),M.remove(M.children[0]);M.geometry&&M.geometry.dispose(),M.material&&(Object.keys(M.material).forEach(S=>{M.material[S]&&M.material[S]!==null&&typeof M.material[S].dispose=="function"&&M.material[S].dispose()}),M.material.dispose())}const q=typeof window=="object";let G=q&&window.THREE||{};q&&!window.VANTA&&(window.VANTA={});const X=q&&window.VANTA||{};X.register=(M,S)=>X[M]=B=>new S(B),X.version="0.5.24";const U=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};X.VantaBase=class{constructor(M={}){if(!q)return!1;X.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.windowGyroWrapper=this.windowGyroWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);const S=typeof this.getDefaultOptions=="function"?this.getDefaultOptions():this.defaultOptions;if(this.options=Object.assign({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1},S),(M instanceof HTMLElement||typeof M=="string")&&(M={el:M}),Object.assign(this.options,M),this.options.THREE&&(G=this.options.THREE),this.el=this.options.el,this.el==null)U('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const N=this.el;if(this.el=(B=N,document.querySelector(B)),!this.el)return void U("Cannot find element",N)}var B,W;this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(N){return U("Init error",N),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=(W=this.options.backgroundColor,typeof W=="number"?"#"+("00000"+W.toString(16)).slice(-6):W)))}this.initMouse(),this.resize(),this.animationLoop();const dt=window.addEventListener;dt("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(dt("scroll",this.windowMouseMoveWrapper),dt("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(dt("touchstart",this.windowTouchWrapper),dt("touchmove",this.windowTouchWrapper)),this.options.gyroControls&&dt("deviceorientation",this.windowGyroWrapper)}setOptions(M={}){Object.assign(this.options,M),this.triggerMouseMove()}prepareEl(){let M,S;if(typeof Node<"u"&&Node.TEXT_NODE)for(M=0;M<this.el.childNodes.length;M++){const B=this.el.childNodes[M];if(B.nodeType===Node.TEXT_NODE){const W=document.createElement("span");W.textContent=B.textContent,B.parentElement.insertBefore(W,B),B.remove()}}for(M=0;M<this.el.children.length;M++)S=this.el.children[M],getComputedStyle(S).position==="static"&&(S.style.position="relative"),getComputedStyle(S).zIndex==="auto"&&(S.style.zIndex=1);getComputedStyle(this.el).position==="static"&&(this.el.style.position="relative")}applyCanvasStyles(M,S={}){Object.assign(M.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object.assign(M.style,S),M.classList.add("vanta-canvas")}initThree(){G.WebGLRenderer?(this.renderer=new G.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new G.Scene):console.warn("[VANTA] No THREE defined on window")}getCanvasElement(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}getCanvasRect(){const M=this.getCanvasElement();return!!M&&M.getBoundingClientRect()}windowMouseMoveWrapper(M){const S=this.getCanvasRect();if(!S)return!1;const B=M.clientX-S.left,W=M.clientY-S.top;B>=0&&W>=0&&B<=S.width&&W<=S.height&&(this.mouseX=B,this.mouseY=W,this.options.mouseEase||this.triggerMouseMove(B,W))}windowTouchWrapper(M){const S=this.getCanvasRect();if(!S)return!1;if(M.touches.length===1){const B=M.touches[0].clientX-S.left,W=M.touches[0].clientY-S.top;B>=0&&W>=0&&B<=S.width&&W<=S.height&&(this.mouseX=B,this.mouseY=W,this.options.mouseEase||this.triggerMouseMove(B,W))}}windowGyroWrapper(M){const S=this.getCanvasRect();if(!S)return!1;const B=Math.round(2*M.alpha)-S.left,W=Math.round(2*M.beta)-S.top;B>=0&&W>=0&&B<=S.width&&W<=S.height&&(this.mouseX=B,this.mouseY=W,this.options.mouseEase||this.triggerMouseMove(B,W))}triggerMouseMove(M,S){M===void 0&&S===void 0&&(this.options.mouseEase?(M=this.mouseEaseX,S=this.mouseEaseY):(M=this.mouseX,S=this.mouseY)),this.uniforms&&(this.uniforms.iMouse.value.x=M/this.scale,this.uniforms.iMouse.value.y=S/this.scale);const B=M/this.width,W=S/this.height;typeof this.onMouseMove=="function"&&this.onMouseMove(B,W)}setSize(){this.scale||(this.scale=1),typeof navigator<"u"&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600)&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}initMouse(){(!this.mouseX&&!this.mouseY||this.mouseX===this.options.minWidth/2&&this.mouseY===this.options.minHeight/2)&&(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,typeof this.camera.updateProjectionMatrix=="function"&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),typeof this.onResize=="function"&&this.onResize()}isOnScreen(){const M=this.el.offsetHeight,S=this.el.getBoundingClientRect(),B=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,W=S.top+B;return W-window.innerHeight<=B&&B<=W+M}animationLoop(){this.t||(this.t=0),this.t2||(this.t2=0);const M=performance.now();if(this.prevNow){let S=(M-this.prevNow)/16.666666666666668;S=Math.max(.2,Math.min(S,5)),this.t+=S,this.t2+=(this.options.speed||1)*S,this.uniforms&&(this.uniforms.iTime.value=.016667*this.t2)}return this.prevNow=M,this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY+=.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&(typeof this.onUpdate=="function"&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),typeof this.afterRender=="function"&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);typeof this.onRestart=="function"&&this.onRestart(),this.init()}init(){typeof this.onInit=="function"&&this.onInit()}destroy(){typeof this.onDestroy=="function"&&this.onDestroy();const M=window.removeEventListener;M("touchstart",this.windowTouchWrapper),M("touchmove",this.windowTouchWrapper),M("scroll",this.windowMouseMoveWrapper),M("mousemove",this.windowMouseMoveWrapper),M("deviceorientation",this.windowGyroWrapper),M("resize",this.resize),window.cancelAnimationFrame(this.req);const S=this.scene;S&&S.children&&D(S),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null),X.current===this&&(X.current=null)}};const w=X.VantaBase;let Y=typeof window=="object"&&window.THREE;class J extends w{constructor(S){Y=S.THREE||Y,Y.Color.prototype.toVector=function(){return new Y.Vector3(this.r,this.g,this.b)},super(S),this.updateUniforms=this.updateUniforms.bind(this)}init(){this.mode="shader",this.uniforms={iTime:{type:"f",value:1},iResolution:{type:"v2",value:new Y.Vector2(1,1)},iDpr:{type:"f",value:window.devicePixelRatio||1},iMouse:{type:"v2",value:new Y.Vector2(this.mouseX||0,this.mouseY||0)}},super.init(),this.fragmentShader&&this.initBasicShader()}setOptions(S){super.setOptions(S),this.updateUniforms()}initBasicShader(S=this.fragmentShader,B=this.vertexShader){B||(B=`uniform float uTime;
uniform vec2 uResolution;
void main() {
  gl_Position = vec4( position, 1.0 );
}`),this.updateUniforms(),typeof this.valuesChanger=="function"&&this.valuesChanger();const W=new Y.ShaderMaterial({uniforms:this.uniforms,vertexShader:B,fragmentShader:S}),dt=this.options.texturePath;dt&&(this.uniforms.iTex={type:"t",value:new Y.TextureLoader().load(dt)});const N=new Y.Mesh(new Y.PlaneGeometry(2,2),W);this.scene.add(N),this.camera=new Y.Camera,this.camera.position.z=1}updateUniforms(){const S={};let B,W;for(B in this.options)W=this.options[B],B.toLowerCase().indexOf("color")!==-1?S[B]={type:"v3",value:new Y.Color(W).toVector()}:typeof W=="number"&&(S[B]={type:"f",value:W});return Object.assign(this.uniforms,S)}resize(){super.resize(),this.uniforms.iResolution.value.x=this.width/this.scale,this.uniforms.iResolution.value.y=this.height/this.scale}}class Q extends J{}const ft=X.register("CLOUDS",Q);return Q.prototype.defaultOptions={backgroundColor:16777215,skyColor:6863063,cloudColor:11387358,cloudShadowColor:1586512,sunColor:16750873,sunGlareColor:16737843,sunlightColor:16750899,scale:3,scaleMobile:12,speed:1,mouseEase:!0},Q.prototype.fragmentShader=`uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float iTime;
uniform sampler2D iTex;

uniform float speed;
uniform vec3 skyColor;
uniform vec3 cloudColor;
uniform vec3 cloudShadowColor;
uniform vec3 sunColor;
uniform vec3 sunlightColor;
uniform vec3 sunGlareColor;
uniform vec3 backgroundColor;

// uniform vec4      iMouse;                // mouse pixel coords. xy: current (if MLB down), zw: click
// uniform samplerXX iChannel0..3;          // input channel. XX = 2D/Cube


// Volumetric clouds. It performs level of detail (LOD) for faster rendering
float hash(float p) {
  p = fract(p * 0.011);
  p *= (p + 7.5);
  p *= (p + p);
  return fract(p);
}

float noise( vec3 x ){
    // The noise function returns a value in the range -1.0f -> 1.0f
    vec3 p = floor(x);
    vec3 f = fract(x);
    f       = f*f*(3.0-2.0*f);
    float n = p.x + p.y*57.0 + 113.0*p.z;
    return mix(mix(mix( hash(n+0.0  ), hash(n+1.0  ),f.x),
                   mix( hash(n+57.0 ), hash(n+58.0 ),f.x),f.y),
               mix(mix( hash(n+113.0), hash(n+114.0),f.x),
                   mix( hash(n+170.0), hash(n+171.0),f.x),f.y),f.z);
}

const float constantTime = 1000.;
float map5( in vec3 p ){
    vec3 speed1 = vec3(0.5,0.01,1.0) * 0.5 * speed;
    vec3 q = p - speed1*(iTime + constantTime);
    float f;
    f  = 0.50000*noise( q ); q = q*2.02;
    f += 0.25000*noise( q ); q = q*2.03;
    f += 0.12500*noise( q ); q = q*2.01;
    f += 0.06250*noise( q ); q = q*2.02;
    f += 0.03125*noise( q );
    return clamp( 1.5 - p.y - 2.0 + 1.75*f, 0.0, 1.0 );
}
float map4( in vec3 p ){
    vec3 speed1 = vec3(0.5,0.01,1.0) * 0.5 * speed;
    vec3 q = p - speed1*(iTime + constantTime);
    float f;
    f  = 0.50000*noise( q ); q = q*2.02;
    f += 0.25000*noise( q ); q = q*2.03;
    f += 0.12500*noise( q ); q = q*2.01;
    f += 0.06250*noise( q );
    return clamp( 1.5 - p.y - 2.0 + 1.75*f, 0.0, 1.0 );
}
float map3( in vec3 p ){
    vec3 speed1 = vec3(0.5,0.01,1.0) * 0.5 * speed;
    vec3 q = p - speed1*(iTime + constantTime);
    float f;
    f  = 0.50000*noise( q ); q = q*2.02;
    f += 0.25000*noise( q ); q = q*2.03;
    f += 0.12500*noise( q );
    return clamp( 1.5 - p.y - 2.0 + 1.75*f, 0.0, 1.0 );
}
float map2( in vec3 p ){
    vec3 speed1 = vec3(0.5,0.01,1.0) * 0.5 * speed;
    vec3 q = p - speed1*(iTime + constantTime);
    float f;
    f  = 0.50000*noise( q ); q = q*2.02;
    f += 0.25000*noise( q );
    return clamp( 1.5 - p.y - 2.0 + 1.75*f, 0.0, 1.0 );
}

vec3 sundir = normalize( vec3(-1.0,0.0,-1.0) );

vec4 integrate( in vec4 sum, in float dif, in float den, in vec3 bgcol, in float t ){
    // lighting
    vec3 lin = cloudColor*1.4 + sunlightColor*dif;
    vec4 col = vec4( mix( vec3(1.0,0.95,0.8), cloudShadowColor, den ), den );
    col.xyz *= lin;
    col.xyz = mix( col.xyz, bgcol, 1.0-exp(-0.003*t*t) );
    // front to back blending
    col.a *= 0.4;
    col.rgb *= col.a;
    return sum + col*(1.0-sum.a);
}

#define MARCH(STEPS,MAPLOD) for(int i=0; i<STEPS; i++) { vec3  pos = ro + t*rd; if( pos.y<-3.0 || pos.y>2.0 || sum.a > 0.99 ) break; float den = MAPLOD( pos ); if( den>0.01 ) { float dif = clamp((den - MAPLOD(pos+0.3*sundir))/0.6, 0.0, 1.0 ); sum = integrate( sum, dif, den, bgcol, t ); } t += max(0.075,0.02*t); }

vec4 raymarch( in vec3 ro, in vec3 rd, in vec3 bgcol, in ivec2 px ){
    vec4 sum = vec4(0.0);

    float t = 0.0;

    MARCH(20,map5);
    MARCH(25,map4);
    MARCH(30,map3);
    MARCH(40,map2);

    return clamp( sum, 0.0, 1.0 );
}

mat3 setCamera( in vec3 ro, in vec3 ta, float cr ){
    vec3 cw = normalize(ta-ro);
    vec3 cp = vec3(sin(cr), cos(cr),0.0);
    vec3 cu = normalize( cross(cw,cp) );
    vec3 cv = normalize( cross(cu,cw) );
    return mat3( cu, cv, cw );
}

vec4 render( in vec3 ro, in vec3 rd, in ivec2 px ){
    // background sky
    float sun = clamp( dot(sundir,rd), 0.0, 1.0 );
    vec3 col = skyColor - rd.y*0.2*vec3(1.0,0.5,1.0) + 0.15*0.5;
    col += 0.2*sunColor*pow( sun, 8.0 );

    // clouds
    vec4 res = raymarch( ro, rd, col, px );
    col = col*(1.0-res.w) + res.xyz;

    // sun glare
    col += 0.2*sunGlareColor*pow( sun, 3.0 );

    return vec4( col, 1.0 );
}

void main(){
    vec2 p = (-iResolution.xy + 2.0*gl_FragCoord.xy)/ iResolution.y;

    vec2 m = iMouse.xy/iResolution.xy;
    m.y = (1.0 - m.y) * 0.33 + 0.28; // camera height

    m.x *= 0.25;
    m.x += sin(iTime * 0.1 + 3.1415) * 0.25 + 0.25;

    // camera
    vec3 ro = 4.0*normalize(vec3(sin(3.0*m.x), 0.4*m.y, cos(3.0*m.x))); // origin
    vec3 ta = vec3(0.0, -1.0, 0.0);
    mat3 ca = setCamera( ro, ta, 0.0 );
    // ray
    vec3 rd = ca * normalize( vec3(p.xy,1.5));

    gl_FragColor = render( ro, rd, ivec2(gl_FragCoord-0.5) );
}
`,f})())}(Jl)),Jl.exports}var yp=vp();const xp=kh(yp);function Xt(c,d){d===void 0&&(d={});var g=d.insertAt;if(c&&typeof document<"u"){var f=document.head||document.getElementsByTagName("head")[0],D=document.createElement("style");D.type="text/css",g==="top"&&f.firstChild?f.insertBefore(D,f.firstChild):f.appendChild(D),D.styleSheet?D.styleSheet.cssText=c:D.appendChild(document.createTextNode(c))}}Xt(`.react-loading-indicator-normalize,
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
}`);var Bn=function(){return Bn=Object.assign||function(c){for(var d,g=1,f=arguments.length;g<f;g++)for(var D in d=arguments[g])Object.prototype.hasOwnProperty.call(d,D)&&(c[D]=d[D]);return c},Bn.apply(this,arguments)};function Wl(c){return Wl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},Wl(c)}var Sp=/^\s+/,Tp=/\s+$/;function K(c,d){if(d=d||{},(c=c||"")instanceof K)return c;if(!(this instanceof K))return new K(c,d);var g=function(f){var D={r:0,g:0,b:0},q=1,G=null,X=null,U=null,w=!1,Y=!1;typeof f=="string"&&(f=function(M){M=M.replace(Sp,"").replace(Tp,"").toLowerCase();var S,B=!1;if(Tu[M])M=Tu[M],B=!0;else if(M=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(S=zn.rgb.exec(M))?{r:S[1],g:S[2],b:S[3]}:(S=zn.rgba.exec(M))?{r:S[1],g:S[2],b:S[3],a:S[4]}:(S=zn.hsl.exec(M))?{h:S[1],s:S[2],l:S[3]}:(S=zn.hsla.exec(M))?{h:S[1],s:S[2],l:S[3],a:S[4]}:(S=zn.hsv.exec(M))?{h:S[1],s:S[2],v:S[3]}:(S=zn.hsva.exec(M))?{h:S[1],s:S[2],v:S[3],a:S[4]}:(S=zn.hex8.exec(M))?{r:bn(S[1]),g:bn(S[2]),b:bn(S[3]),a:Hh(S[4]),format:B?"name":"hex8"}:(S=zn.hex6.exec(M))?{r:bn(S[1]),g:bn(S[2]),b:bn(S[3]),format:B?"name":"hex"}:(S=zn.hex4.exec(M))?{r:bn(S[1]+""+S[1]),g:bn(S[2]+""+S[2]),b:bn(S[3]+""+S[3]),a:Hh(S[4]+""+S[4]),format:B?"name":"hex8"}:(S=zn.hex3.exec(M))?{r:bn(S[1]+""+S[1]),g:bn(S[2]+""+S[2]),b:bn(S[3]+""+S[3]),format:B?"name":"hex"}:!1}(f)),Wl(f)=="object"&&(te(f.r)&&te(f.g)&&te(f.b)?(J=f.r,Q=f.g,ft=f.b,D={r:255*Dt(J,255),g:255*Dt(Q,255),b:255*Dt(ft,255)},w=!0,Y=String(f.r).substr(-1)==="%"?"prgb":"rgb"):te(f.h)&&te(f.s)&&te(f.v)?(G=zi(f.s),X=zi(f.v),D=function(M,S,B){M=6*Dt(M,360),S=Dt(S,100),B=Dt(B,100);var W=Math.floor(M),dt=M-W,N=B*(1-S),o=B*(1-dt*S),u=B*(1-(1-dt)*S),p=W%6,O=[B,o,N,N,u,B][p],E=[u,B,B,o,N,N][p],C=[N,N,u,B,B,o][p];return{r:255*O,g:255*E,b:255*C}}(f.h,G,X),w=!0,Y="hsv"):te(f.h)&&te(f.s)&&te(f.l)&&(G=zi(f.s),U=zi(f.l),D=function(M,S,B){var W,dt,N;function o(O,E,C){return C<0&&(C+=1),C>1&&(C-=1),C<1/6?O+6*(E-O)*C:C<.5?E:C<2/3?O+(E-O)*(2/3-C)*6:O}if(M=Dt(M,360),S=Dt(S,100),B=Dt(B,100),S===0)W=dt=N=B;else{var u=B<.5?B*(1+S):B+S-B*S,p=2*B-u;W=o(p,u,M+1/3),dt=o(p,u,M),N=o(p,u,M-1/3)}return{r:255*W,g:255*dt,b:255*N}}(f.h,G,U),w=!0,Y="hsl"),f.hasOwnProperty("a")&&(q=f.a));var J,Q,ft;return q=Uh(q),{ok:w,format:f.format||Y,r:Math.min(255,Math.max(D.r,0)),g:Math.min(255,Math.max(D.g,0)),b:Math.min(255,Math.max(D.b,0)),a:q}}(c);this._originalInput=c,this._r=g.r,this._g=g.g,this._b=g.b,this._a=g.a,this._roundA=Math.round(100*this._a)/100,this._format=d.format||g.format,this._gradientType=d.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=g.ok}function Dh(c,d,g){c=Dt(c,255),d=Dt(d,255),g=Dt(g,255);var f,D,q=Math.max(c,d,g),G=Math.min(c,d,g),X=(q+G)/2;if(q==G)f=D=0;else{var U=q-G;switch(D=X>.5?U/(2-q-G):U/(q+G),q){case c:f=(d-g)/U+(d<g?6:0);break;case d:f=(g-c)/U+2;break;case g:f=(c-d)/U+4}f/=6}return{h:f,s:D,l:X}}function _h(c,d,g){c=Dt(c,255),d=Dt(d,255),g=Dt(g,255);var f,D,q=Math.max(c,d,g),G=Math.min(c,d,g),X=q,U=q-G;if(D=q===0?0:U/q,q==G)f=0;else{switch(q){case c:f=(d-g)/U+(d<g?6:0);break;case d:f=(g-c)/U+2;break;case g:f=(c-d)/U+4}f/=6}return{h:f,s:D,v:X}}function zh(c,d,g,f){var D=[Rn(Math.round(c).toString(16)),Rn(Math.round(d).toString(16)),Rn(Math.round(g).toString(16))];return f&&D[0].charAt(0)==D[0].charAt(1)&&D[1].charAt(0)==D[1].charAt(1)&&D[2].charAt(0)==D[2].charAt(1)?D[0].charAt(0)+D[1].charAt(0)+D[2].charAt(0):D.join("")}function Rh(c,d,g,f){return[Rn(Nh(f)),Rn(Math.round(c).toString(16)),Rn(Math.round(d).toString(16)),Rn(Math.round(g).toString(16))].join("")}function Op(c,d){d=d===0?0:d||10;var g=K(c).toHsl();return g.s-=d/100,g.s=$l(g.s),K(g)}function wp(c,d){d=d===0?0:d||10;var g=K(c).toHsl();return g.s+=d/100,g.s=$l(g.s),K(g)}function Ap(c){return K(c).desaturate(100)}function Mp(c,d){d=d===0?0:d||10;var g=K(c).toHsl();return g.l+=d/100,g.l=$l(g.l),K(g)}function Ep(c,d){d=d===0?0:d||10;var g=K(c).toRgb();return g.r=Math.max(0,Math.min(255,g.r-Math.round(-d/100*255))),g.g=Math.max(0,Math.min(255,g.g-Math.round(-d/100*255))),g.b=Math.max(0,Math.min(255,g.b-Math.round(-d/100*255))),K(g)}function Dp(c,d){d=d===0?0:d||10;var g=K(c).toHsl();return g.l-=d/100,g.l=$l(g.l),K(g)}function _p(c,d){var g=K(c).toHsl(),f=(g.h+d)%360;return g.h=f<0?360+f:f,K(g)}function zp(c){var d=K(c).toHsl();return d.h=(d.h+180)%360,K(d)}function Ch(c,d){if(isNaN(d)||d<=0)throw new Error("Argument to polyad must be a positive number");for(var g=K(c).toHsl(),f=[K(c)],D=360/d,q=1;q<d;q++)f.push(K({h:(g.h+q*D)%360,s:g.s,l:g.l}));return f}function Rp(c){var d=K(c).toHsl(),g=d.h;return[K(c),K({h:(g+72)%360,s:d.s,l:d.l}),K({h:(g+216)%360,s:d.s,l:d.l})]}function Cp(c,d,g){d=d||6,g=g||30;var f=K(c).toHsl(),D=360/g,q=[K(c)];for(f.h=(f.h-(D*d>>1)+720)%360;--d;)f.h=(f.h+D)%360,q.push(K(f));return q}function Hp(c,d){d=d||6;for(var g=K(c).toHsv(),f=g.h,D=g.s,q=g.v,G=[],X=1/d;d--;)G.push(K({h:f,s:D,v:q})),q=(q+X)%1;return G}K.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var c=this.toRgb();return(299*c.r+587*c.g+114*c.b)/1e3},getLuminance:function(){var c,d,g,f=this.toRgb();return c=f.r/255,d=f.g/255,g=f.b/255,.2126*(c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4))+.7152*(d<=.03928?d/12.92:Math.pow((d+.055)/1.055,2.4))+.0722*(g<=.03928?g/12.92:Math.pow((g+.055)/1.055,2.4))},setAlpha:function(c){return this._a=Uh(c),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var c=_h(this._r,this._g,this._b);return{h:360*c.h,s:c.s,v:c.v,a:this._a}},toHsvString:function(){var c=_h(this._r,this._g,this._b),d=Math.round(360*c.h),g=Math.round(100*c.s),f=Math.round(100*c.v);return this._a==1?"hsv("+d+", "+g+"%, "+f+"%)":"hsva("+d+", "+g+"%, "+f+"%, "+this._roundA+")"},toHsl:function(){var c=Dh(this._r,this._g,this._b);return{h:360*c.h,s:c.s,l:c.l,a:this._a}},toHslString:function(){var c=Dh(this._r,this._g,this._b),d=Math.round(360*c.h),g=Math.round(100*c.s),f=Math.round(100*c.l);return this._a==1?"hsl("+d+", "+g+"%, "+f+"%)":"hsla("+d+", "+g+"%, "+f+"%, "+this._roundA+")"},toHex:function(c){return zh(this._r,this._g,this._b,c)},toHexString:function(c){return"#"+this.toHex(c)},toHex8:function(c){return function(d,g,f,D,q){var G=[Rn(Math.round(d).toString(16)),Rn(Math.round(g).toString(16)),Rn(Math.round(f).toString(16)),Rn(Nh(D))];return q&&G[0].charAt(0)==G[0].charAt(1)&&G[1].charAt(0)==G[1].charAt(1)&&G[2].charAt(0)==G[2].charAt(1)&&G[3].charAt(0)==G[3].charAt(1)?G[0].charAt(0)+G[1].charAt(0)+G[2].charAt(0)+G[3].charAt(0):G.join("")}(this._r,this._g,this._b,this._a,c)},toHex8String:function(c){return"#"+this.toHex8(c)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Dt(this._r,255))+"%",g:Math.round(100*Dt(this._g,255))+"%",b:Math.round(100*Dt(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Dt(this._r,255))+"%, "+Math.round(100*Dt(this._g,255))+"%, "+Math.round(100*Dt(this._b,255))+"%)":"rgba("+Math.round(100*Dt(this._r,255))+"%, "+Math.round(100*Dt(this._g,255))+"%, "+Math.round(100*Dt(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(qp[zh(this._r,this._g,this._b,!0)]||!1)},toFilter:function(c){var d="#"+Rh(this._r,this._g,this._b,this._a),g=d,f=this._gradientType?"GradientType = 1, ":"";if(c){var D=K(c);g="#"+Rh(D._r,D._g,D._b,D._a)}return"progid:DXImageTransform.Microsoft.gradient("+f+"startColorstr="+d+",endColorstr="+g+")"},toString:function(c){var d=!!c;c=c||this._format;var g=!1,f=this._a<1&&this._a>=0;return d||!f||c!=="hex"&&c!=="hex6"&&c!=="hex3"&&c!=="hex4"&&c!=="hex8"&&c!=="name"?(c==="rgb"&&(g=this.toRgbString()),c==="prgb"&&(g=this.toPercentageRgbString()),c!=="hex"&&c!=="hex6"||(g=this.toHexString()),c==="hex3"&&(g=this.toHexString(!0)),c==="hex4"&&(g=this.toHex8String(!0)),c==="hex8"&&(g=this.toHex8String()),c==="name"&&(g=this.toName()),c==="hsl"&&(g=this.toHslString()),c==="hsv"&&(g=this.toHsvString()),g||this.toHexString()):c==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return K(this.toString())},_applyModification:function(c,d){var g=c.apply(null,[this].concat([].slice.call(d)));return this._r=g._r,this._g=g._g,this._b=g._b,this.setAlpha(g._a),this},lighten:function(){return this._applyModification(Mp,arguments)},brighten:function(){return this._applyModification(Ep,arguments)},darken:function(){return this._applyModification(Dp,arguments)},desaturate:function(){return this._applyModification(Op,arguments)},saturate:function(){return this._applyModification(wp,arguments)},greyscale:function(){return this._applyModification(Ap,arguments)},spin:function(){return this._applyModification(_p,arguments)},_applyCombination:function(c,d){return c.apply(null,[this].concat([].slice.call(d)))},analogous:function(){return this._applyCombination(Cp,arguments)},complement:function(){return this._applyCombination(zp,arguments)},monochromatic:function(){return this._applyCombination(Hp,arguments)},splitcomplement:function(){return this._applyCombination(Rp,arguments)},triad:function(){return this._applyCombination(Ch,[3])},tetrad:function(){return this._applyCombination(Ch,[4])}},K.fromRatio=function(c,d){if(Wl(c)=="object"){var g={};for(var f in c)c.hasOwnProperty(f)&&(g[f]=f==="a"?c[f]:zi(c[f]));c=g}return K(c,d)},K.equals=function(c,d){return!(!c||!d)&&K(c).toRgbString()==K(d).toRgbString()},K.random=function(){return K.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},K.mix=function(c,d,g){g=g===0?0:g||50;var f=K(c).toRgb(),D=K(d).toRgb(),q=g/100;return K({r:(D.r-f.r)*q+f.r,g:(D.g-f.g)*q+f.g,b:(D.b-f.b)*q+f.b,a:(D.a-f.a)*q+f.a})},K.readability=function(c,d){var g=K(c),f=K(d);return(Math.max(g.getLuminance(),f.getLuminance())+.05)/(Math.min(g.getLuminance(),f.getLuminance())+.05)},K.isReadable=function(c,d,g){var f,D,q=K.readability(c,d);switch(D=!1,(f=function(G){var X,U;return X=((G=G||{level:"AA",size:"small"}).level||"AA").toUpperCase(),U=(G.size||"small").toLowerCase(),X!=="AA"&&X!=="AAA"&&(X="AA"),U!=="small"&&U!=="large"&&(U="small"),{level:X,size:U}}(g)).level+f.size){case"AAsmall":case"AAAlarge":D=q>=4.5;break;case"AAlarge":D=q>=3;break;case"AAAsmall":D=q>=7}return D},K.mostReadable=function(c,d,g){var f,D,q,G,X=null,U=0;D=(g=g||{}).includeFallbackColors,q=g.level,G=g.size;for(var w=0;w<d.length;w++)(f=K.readability(c,d[w]))>U&&(U=f,X=K(d[w]));return K.isReadable(c,X,{level:q,size:G})||!D?X:(g.includeFallbackColors=!1,K.mostReadable(c,["#fff","#000"],g))};var Tu=K.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},qp=K.hexNames=function(c){var d={};for(var g in c)c.hasOwnProperty(g)&&(d[c[g]]=g);return d}(Tu);function Uh(c){return c=parseFloat(c),(isNaN(c)||c<0||c>1)&&(c=1),c}function Dt(c,d){(function(f){return typeof f=="string"&&f.indexOf(".")!=-1&&parseFloat(f)===1})(c)&&(c="100%");var g=function(f){return typeof f=="string"&&f.indexOf("%")!=-1}(c);return c=Math.min(d,Math.max(0,parseFloat(c))),g&&(c=parseInt(c*d,10)/100),Math.abs(c-d)<1e-6?1:c%d/parseFloat(d)}function $l(c){return Math.min(1,Math.max(0,c))}function bn(c){return parseInt(c,16)}function Rn(c){return c.length==1?"0"+c:""+c}function zi(c){return c<=1&&(c=100*c+"%"),c}function Nh(c){return Math.round(255*parseFloat(c)).toString(16)}function Hh(c){return bn(c)/255}var Me,Vl,Kl,zn=(Vl="[\\s|\\(]+("+(Me="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Me+")[,|\\s]+("+Me+")\\s*\\)?",Kl="[\\s|\\(]+("+Me+")[,|\\s]+("+Me+")[,|\\s]+("+Me+")[,|\\s]+("+Me+")\\s*\\)?",{CSS_UNIT:new RegExp(Me),rgb:new RegExp("rgb"+Vl),rgba:new RegExp("rgba"+Kl),hsl:new RegExp("hsl"+Vl),hsla:new RegExp("hsla"+Kl),hsv:new RegExp("hsv"+Vl),hsva:new RegExp("hsva"+Kl),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function te(c){return!!zn.CSS_UNIT.exec(c)}var kp=function(c,d){var g=(typeof c=="string"?parseInt(c):c)||0;if(g>=-5&&g<=5){var f=g,D=parseFloat(d),q=D+f*(D/5)*-1;return(q==0||q<=Number.EPSILON)&&(q=.1),{animationPeriod:q+"s"}}return{animationPeriod:d}},Up=function(c,d){var g=c||{},f="";switch(d){case"small":f="12px";break;case"medium":f="16px";break;case"large":f="20px";break;default:f=void 0}var D={};if(g.fontSize){var q=g.fontSize;D=function(G,X){var U={};for(var w in G)Object.prototype.hasOwnProperty.call(G,w)&&X.indexOf(w)<0&&(U[w]=G[w]);if(G!=null&&typeof Object.getOwnPropertySymbols=="function"){var Y=0;for(w=Object.getOwnPropertySymbols(G);Y<w.length;Y++)X.indexOf(w[Y])<0&&Object.prototype.propertyIsEnumerable.call(G,w[Y])&&(U[w[Y]]=G[w[Y]])}return U}(g,["fontSize"]),f=q}return{fontSize:f,styles:D}},Np={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Bp=function(c){var d=c.className,g=c.text,f=c.textColor,D=c.staticText,q=c.style;return g?tn.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(d||"").trim(),style:Bn(Bn(Bn({},D&&Np),f&&{color:f,mixBlendMode:"unset"}),q&&q)},typeof g=="string"&&g.length?g:"loading"):null},Bh="rgb(50, 205, 50)";function Yp(c,d){if(d===void 0&&(d=0),c.length===0)throw new Error("Input array cannot be empty!");var g=[];return function f(D,q){return q===void 0&&(q=0),g.push.apply(g,D),g.length<q&&f(g,q),g.slice(0,q)}(c,d)}Xt(`.atom-rli-bounding-box {
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
}`);K(Bh).toRgb();Array.from({length:4},function(c,d){return"--atom-phase".concat(d+1,"-rgb")});Xt(`.commet-rli-bounding-box {
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
}`);var za=Array.from({length:4},function(c,d){return"--commet-phase".concat(d+1,"-color")}),Gp=function(c){var d,g=Up(c?.style,c?.size),f=g.styles,D=g.fontSize,q=c?.easing,G=kp(c?.speedPlus,"1.2s").animationPeriod,X=function(U){var w={};if(U instanceof Array){for(var Y=Yp(U,za.length),J=0;J<Y.length&&!(J>=4);J++)w[za[J]]=Y[J];return w}try{if(typeof U!="string")throw new Error("Color String expected");for(var Q=0;Q<za.length;Q++)w[za[Q]]=U}catch(ft){for(ft instanceof Error?console.warn("[".concat(ft.message,']: Received "').concat(typeof U,'" instead with value, ').concat(JSON.stringify(U))):console.warn("".concat(JSON.stringify(U)," received in <Commet /> indicator cannot be processed. Using default instead!")),Q=0;Q<za.length;Q++)w[za[Q]]=Bh}return w}((d=c?.color)!==null&&d!==void 0?d:"");return tn.createElement("span",{className:"rli-d-i-b commet-rli-bounding-box",style:Bn(Bn(Bn(Bn(Bn({},D&&{fontSize:D}),G&&{"--rli-animation-duration":G}),q&&{"--rli-animation-function":q}),X),f),role:"status","aria-live":"polite","aria-label":"Loading"},tn.createElement("span",{className:"rli-d-i-b commet-indicator"},tn.createElement("span",{className:"rli-d-i-b commet-box"},tn.createElement("span",{className:"rli-d-i-b commet-trail trail1"}),tn.createElement("span",{className:"rli-d-i-b  commetball-box"})),tn.createElement("span",{className:"rli-d-i-b commet-box"},tn.createElement("span",{className:"rli-d-i-b commet-trail trail2"}),tn.createElement("span",{className:"rli-d-i-b commetball-box"})),tn.createElement(Bp,{className:"commet-text",text:c?.text,textColor:c?.textColor})))};Xt(`.OP-annulus-rli-bounding-box {
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
}`);Array.from({length:4},function(c,d){return"--OP-annulus-phase".concat(d+1,"-color")});function xu(c){return c&&c.Math===Math&&c}Xt(`.OP-dotted-rli-bounding-box {
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
}`);xu(typeof window=="object"&&window)||xu(typeof self=="object"&&self)||xu(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(c,d){return"--OP-dotted-phase".concat(d+1,"-color")});Xt(`.OP-spokes-rli-bounding-box {
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
}`);Array.from({length:4},function(c,d){return"--OP-spokes-phase".concat(d+1,"-color")});Xt(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);Array.from({length:4},function(c,d){return"--OP-annulus-dual-sectors-phase".concat(d+1,"-color")});Xt(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);Array.from({length:4},function(c,d){return["--OP-annulus-track-phase".concat(d+1,"-color"),"--OP-annulus-sector-phase".concat(d+1,"-color")]});Xt(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},function(c,d){return"--four-square-phase".concat(d+1,"-color")});Xt(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},function(c,d){return"--mosaic-phase".concat(d+1,"-color")});Xt(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},function(c,d){return"--riple-phase".concat(d+1,"-color")});Xt(`.pulsate-rli-bounding-box {
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
}`);Array.from({length:4},function(c,d){return"--TD-pulsate-phase".concat(d+1,"-color")});Xt(`.brick-stack-rli-bounding-box {
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
}`);Array.from({length:4},function(c,d){return"--TD-brick-stack-phase".concat(d+1,"-color")});Xt(`.bob-rli-bounding-box {
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
}`);Array.from({length:4},function(c,d){return"--TD-bob-phase".concat(d+1,"-color")});Xt(`.bounce-rli-bounding-box {
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
}`);Array.from({length:4},function(c,d){return"--TD-bounce-phase".concat(d+1,"-color")});Xt(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},function(c,d){return"--shape-phase".concat(d+1,"-color")});Xt(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},function(c,d){return"--trophySpin-phase".concat(d+1,"-color")});Xt(`.slab-rli-bounding-box {
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
}`);Array.from({length:4},function(c,d){return"--slab-phase".concat(d+1,"-color")});Xt(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},function(c,d){return"--life-line-phase".concat(d+1,"-color")});var Ri={exports:{}},Xp=Ri.exports,qh;function Lp(){return qh||(qh=1,function(c,d){(function(g,f){f(d)})(Xp,function(g){class f{constructor(o,u){this.state={angle:0,area:[],position:{x:0,y:0},hardAngle:0,hardDrawingAngle:0},this.createdDensity=u,this.nowDrawingDensity=this.createdDensity,this.render=o}setDensity(o){this.createdDensity=o,this.nowDrawingDensity=o}setDrawingDensity(o){this.nowDrawingDensity=o}setPosition(o){this.state.position=o}setAngle(o){this.state.angle=o}setArea(o){this.state.area=o}setHardDrawingAngle(o){this.state.hardDrawingAngle=o}setHardAngle(o){this.state.hardAngle=o,this.state.hardDrawingAngle=o}setOrientation(o){this.orientation=o}getDrawingDensity(){return this.nowDrawingDensity}getDensity(){return this.createdDensity}getHardAngle(){return this.state.hardAngle}}class D extends f{constructor(o,u,p){super(o,p),this.image=null,this.isLoad=!1,this.loadingAngle=0,this.image=new Image,this.image.src=u}draw(o){const u=this.render.getContext(),p=this.render.convertToGlobal(this.state.position),O=this.render.getRect().pageWidth,E=this.render.getRect().height;u.save(),u.translate(p.x,p.y),u.beginPath();for(let C of this.state.area)C!==null&&(C=this.render.convertToGlobal(C),u.lineTo(C.x-p.x,C.y-p.y));u.rotate(this.state.angle),u.clip(),this.isLoad?u.drawImage(this.image,0,0,O,E):this.drawLoader(u,{x:0,y:0},O,E),u.restore()}simpleDraw(o){const u=this.render.getRect(),p=this.render.getContext(),O=u.pageWidth,E=u.height,C=o===1?u.left+u.pageWidth:u.left,$=u.top;this.isLoad?p.drawImage(this.image,C,$,O,E):this.drawLoader(p,{x:C,y:$},O,E)}drawLoader(o,u,p,O){o.beginPath(),o.strokeStyle="rgb(200, 200, 200)",o.fillStyle="rgb(255, 255, 255)",o.lineWidth=1,o.rect(u.x+1,u.y+1,p-1,O-1),o.stroke(),o.fill();const E={x:u.x+p/2,y:u.y+O/2};o.beginPath(),o.lineWidth=10,o.arc(E.x,E.y,20,this.loadingAngle,3*Math.PI/2+this.loadingAngle),o.stroke(),o.closePath(),this.loadingAngle+=.07,this.loadingAngle>=2*Math.PI&&(this.loadingAngle=0)}load(){this.isLoad||(this.image.onload=()=>{this.isLoad=!0})}newTemporaryCopy(){return this}getTemporaryCopy(){return this}hideTemporaryCopy(){}}class q{constructor(o,u){this.pages=[],this.currentPageIndex=0,this.currentSpreadIndex=0,this.landscapeSpread=[],this.portraitSpread=[],this.render=u,this.app=o,this.currentPageIndex=0,this.isShowCover=this.app.getSettings().showCover}destroy(){this.pages=[]}createSpread(){this.landscapeSpread=[],this.portraitSpread=[];for(let u=0;u<this.pages.length;u++)this.portraitSpread.push([u]);let o=0;this.isShowCover&&(this.pages[0].setDensity("hard"),this.landscapeSpread.push([o]),o++);for(let u=o;u<this.pages.length;u+=2)u<this.pages.length-1?this.landscapeSpread.push([u,u+1]):(this.landscapeSpread.push([u]),this.pages[u].setDensity("hard"))}getSpread(){return this.render.getOrientation()==="landscape"?this.landscapeSpread:this.portraitSpread}getSpreadIndexByPage(o){const u=this.getSpread();for(let p=0;p<u.length;p++)if(o===u[p][0]||o===u[p][1])return p;return null}getPageCount(){return this.pages.length}getPages(){return this.pages}getPage(o){if(o>=0&&o<this.pages.length)return this.pages[o];throw new Error("Invalid page number")}nextBy(o){const u=this.pages.indexOf(o);return u<this.pages.length-1?this.pages[u+1]:null}prevBy(o){const u=this.pages.indexOf(o);return u>0?this.pages[u-1]:null}getFlippingPage(o){const u=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return o===0?this.pages[u].newTemporaryCopy():this.pages[u-1];{const p=o===0?this.getSpread()[u+1]:this.getSpread()[u-1];return p.length===1||o===0?this.pages[p[0]]:this.pages[p[1]]}}getBottomPage(o){const u=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return o===0?this.pages[u+1]:this.pages[u-1];{const p=o===0?this.getSpread()[u+1]:this.getSpread()[u-1];return p.length===1?this.pages[p[0]]:o===0?this.pages[p[1]]:this.pages[p[0]]}}showNext(){this.currentSpreadIndex<this.getSpread().length&&(this.currentSpreadIndex++,this.showSpread())}showPrev(){this.currentSpreadIndex>0&&(this.currentSpreadIndex--,this.showSpread())}getCurrentPageIndex(){return this.currentPageIndex}show(o=null){if(o===null&&(o=this.currentPageIndex),o<0||o>=this.pages.length)return;const u=this.getSpreadIndexByPage(o);u!==null&&(this.currentSpreadIndex=u,this.showSpread())}getCurrentSpreadIndex(){return this.currentSpreadIndex}setCurrentSpreadIndex(o){if(!(o>=0&&o<this.getSpread().length))throw new Error("Invalid page");this.currentSpreadIndex=o}showSpread(){const o=this.getSpread()[this.currentSpreadIndex];o.length===2?(this.render.setLeftPage(this.pages[o[0]]),this.render.setRightPage(this.pages[o[1]])):this.render.getOrientation()==="landscape"&&o[0]===this.pages.length-1?(this.render.setLeftPage(this.pages[o[0]]),this.render.setRightPage(null)):(this.render.setLeftPage(null),this.render.setRightPage(this.pages[o[0]])),this.currentPageIndex=o[0],this.app.updatePageIndex(this.currentPageIndex)}}class G extends q{constructor(o,u,p){super(o,u),this.imagesHref=p}load(){for(const o of this.imagesHref){const u=new D(this.render,o,"soft");u.load(),this.pages.push(u)}this.createSpread()}}class X{static GetDistanceBetweenTwoPoint(o,u){return o===null||u===null?1/0:Math.sqrt(Math.pow(u.x-o.x,2)+Math.pow(u.y-o.y,2))}static GetSegmentLength(o){return X.GetDistanceBetweenTwoPoint(o[0],o[1])}static GetAngleBetweenTwoLine(o,u){const p=o[0].y-o[1].y,O=u[0].y-u[1].y,E=o[1].x-o[0].x,C=u[1].x-u[0].x;return Math.acos((p*O+E*C)/(Math.sqrt(p*p+E*E)*Math.sqrt(O*O+C*C)))}static PointInRect(o,u){return u===null?null:u.x>=o.left&&u.x<=o.width+o.left&&u.y>=o.top&&u.y<=o.top+o.height?u:null}static GetRotatedPoint(o,u,p){return{x:o.x*Math.cos(p)+o.y*Math.sin(p)+u.x,y:o.y*Math.cos(p)-o.x*Math.sin(p)+u.y}}static LimitPointToCircle(o,u,p){if(X.GetDistanceBetweenTwoPoint(o,p)<=u)return p;const O=o.x,E=o.y,C=p.x,$=p.y;let tt=Math.sqrt(Math.pow(u,2)*Math.pow(O-C,2)/(Math.pow(O-C,2)+Math.pow(E-$,2)))+O;p.x<0&&(tt*=-1);let rt=(tt-O)*(E-$)/(O-C)+E;return O-C+E===0&&(rt=u),{x:tt,y:rt}}static GetIntersectBetweenTwoSegment(o,u,p){return X.PointInRect(o,X.GetIntersectBeetwenTwoLine(u,p))}static GetIntersectBeetwenTwoLine(o,u){const p=o[0].y-o[1].y,O=u[0].y-u[1].y,E=o[1].x-o[0].x,C=u[1].x-u[0].x,$=o[0].x*o[1].y-o[1].x*o[0].y,tt=u[0].x*u[1].y-u[1].x*u[0].y,rt=p*tt-O*$,At=E*tt-C*$,Lt=-($*C-tt*E)/(p*C-O*E),Rt=-(p*tt-O*$)/(p*C-O*E);if(isFinite(Lt)&&isFinite(Rt))return{x:Lt,y:Rt};if(Math.abs(rt-At)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(o,u){const p=Math.abs(o.x-u.x),O=Math.abs(o.y-u.y),E=Math.max(p,O),C=[o];function $(tt,rt,At,Lt,Rt){return rt>tt?tt+Rt*(At/Lt):rt<tt?tt-Rt*(At/Lt):tt}for(let tt=1;tt<=E;tt+=1)C.push({x:$(o.x,u.x,p,E,tt),y:$(o.y,u.y,O,E,tt)});return C}}class U extends f{constructor(o,u,p){super(o,p),this.copiedElement=null,this.temporaryCopy=null,this.isLoad=!1,this.element=u,this.element.classList.add("stf__item"),this.element.classList.add("--"+p)}newTemporaryCopy(){return this.nowDrawingDensity==="hard"?this:(this.temporaryCopy===null&&(this.copiedElement=this.element.cloneNode(!0),this.element.parentElement.appendChild(this.copiedElement),this.temporaryCopy=new U(this.render,this.copiedElement,this.nowDrawingDensity)),this.getTemporaryCopy())}getTemporaryCopy(){return this.temporaryCopy}hideTemporaryCopy(){this.temporaryCopy!==null&&(this.copiedElement.remove(),this.copiedElement=null,this.temporaryCopy=null)}draw(o){const u=o||this.nowDrawingDensity,p=this.render.convertToGlobal(this.state.position),O=this.render.getRect().pageWidth,E=this.render.getRect().height;this.element.classList.remove("--simple");const C=`
            display: block;
            z-index: ${this.element.style.zIndex};
            left: 0;
            top: 0;
            width: ${O}px;
            height: ${E}px;
        `;u==="hard"?this.drawHard(C):this.drawSoft(p,C)}drawHard(o=""){const u=this.render.getRect().left+this.render.getRect().width/2,p=this.state.hardDrawingAngle,O=o+`
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                clip-path: none;
                -webkit-clip-path: none;
            `+(this.orientation===0?`transform-origin: ${this.render.getRect().pageWidth}px 0; 
                   transform: translate3d(0, 0, 0) rotateY(${p}deg);`:`transform-origin: 0 0; 
                   transform: translate3d(${u}px, 0, 0) rotateY(${p}deg);`);this.element.style.cssText=O}drawSoft(o,u=""){let p="polygon( ";for(const E of this.state.area)if(E!==null){let C=this.render.getDirection()===1?{x:-E.x+this.state.position.x,y:E.y-this.state.position.y}:{x:E.x-this.state.position.x,y:E.y-this.state.position.y};C=X.GetRotatedPoint(C,{x:0,y:0},this.state.angle),p+=C.x+"px "+C.y+"px, "}p=p.slice(0,-2),p+=")";const O=u+`transform-origin: 0 0; clip-path: ${p}; -webkit-clip-path: ${p};`+(this.render.isSafari()&&this.state.angle===0?`transform: translate(${o.x}px, ${o.y}px);`:`transform: translate3d(${o.x}px, ${o.y}px, 0) rotate(${this.state.angle}rad);`);this.element.style.cssText=O}simpleDraw(o){const u=this.render.getRect(),p=u.pageWidth,O=u.height,E=o===1?u.left+u.pageWidth:u.left,C=u.top;this.element.classList.add("--simple"),this.element.style.cssText=`
            position: absolute; 
            display: block; 
            height: ${O}px; 
            left: ${E}px; 
            top: ${C}px; 
            width: ${p}px; 
            z-index: ${this.render.getSettings().startZIndex+1};`}getElement(){return this.element}load(){this.isLoad=!0}setOrientation(o){super.setOrientation(o),this.element.classList.remove("--left","--right"),this.element.classList.add(o===1?"--right":"--left")}setDrawingDensity(o){this.element.classList.remove("--soft","--hard"),this.element.classList.add("--"+o),super.setDrawingDensity(o)}}class w extends q{constructor(o,u,p,O){super(o,u),this.element=p,this.pagesElement=O}load(){for(const o of this.pagesElement){const u=new U(this.render,o,o.dataset.density==="hard"?"hard":"soft");u.load(),this.pages.push(u)}this.createSpread()}}class Y{constructor(o,u,p,O){this.direction=o,this.corner=u,this.topIntersectPoint=null,this.sideIntersectPoint=null,this.bottomIntersectPoint=null,this.pageWidth=parseInt(p,10),this.pageHeight=parseInt(O,10)}calc(o){try{return this.position=this.calcAngleAndPosition(o),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){const o=[];let u=!1;return o.push(this.rect.topLeft),o.push(this.topIntersectPoint),this.sideIntersectPoint===null?u=!0:(o.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(u=!1)),o.push(this.bottomIntersectPoint),(u||this.corner==="bottom")&&o.push(this.rect.bottomLeft),o}getBottomClipArea(){const o=[];return o.push(this.topIntersectPoint),this.corner==="top"?o.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&o.push({x:this.pageWidth,y:0}),o.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?X.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&o.push(this.sideIntersectPoint):this.corner==="top"&&o.push({x:this.pageWidth,y:this.pageHeight}),o.push(this.bottomIntersectPoint),o.push(this.topIntersectPoint),o}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){const o=X.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?o:Math.PI-o}calcAngleAndPosition(o){let u=o;if(this.updateAngleAndGeometry(u),u=this.corner==="top"?this.checkPositionAtCenterLine(u,{x:0,y:0},{x:0,y:this.pageHeight}):this.checkPositionAtCenterLine(u,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(u.x-this.pageWidth)<1&&Math.abs(u.y)<1)throw new Error("Point is too small");return u}updateAngleAndGeometry(o){this.angle=this.calculateAngle(o),this.rect=this.getPageRect(o)}calculateAngle(o){const u=this.pageWidth-o.x+1,p=this.corner==="bottom"?this.pageHeight-o.y:o.y;let O=2*Math.acos(u/Math.sqrt(p*p+u*u));p<0&&(O=-O);const E=Math.PI-O;if(!isFinite(O)||E>=0&&E<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(O=-O),O}getPageRect(o){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],o):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],o)}getRectFromBasePoint(o,u){return{topLeft:this.getRotatedPoint(o[0],u),topRight:this.getRotatedPoint(o[1],u),bottomLeft:this.getRotatedPoint(o[2],u),bottomRight:this.getRotatedPoint(o[3],u)}}getRotatedPoint(o,u){return{x:o.x*Math.cos(this.angle)+o.y*Math.sin(this.angle)+u.x,y:o.y*Math.cos(this.angle)-o.x*Math.sin(this.angle)+u.y}}calculateIntersectPoint(o){const u={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=X.GetIntersectBetweenTwoSegment(u,[o,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=X.GetIntersectBetweenTwoSegment(u,[o,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=X.GetIntersectBetweenTwoSegment(u,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=X.GetIntersectBetweenTwoSegment(u,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=X.GetIntersectBetweenTwoSegment(u,[o,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=X.GetIntersectBetweenTwoSegment(u,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(o,u,p){let O=o;const E=X.LimitPointToCircle(u,this.pageWidth,O);O!==E&&(O=E,this.updateAngleAndGeometry(O));const C=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2));let $=this.rect.bottomRight,tt=this.rect.topLeft;if(this.corner==="bottom"&&($=this.rect.topRight,tt=this.rect.bottomLeft),$.x<=0){const rt=X.LimitPointToCircle(p,C,tt);rt!==O&&(O=rt,this.updateAngleAndGeometry(O))}return O}getSegmentToShadowLine(){const o=this.getShadowStartPoint();return[o,o!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint]}}class J{constructor(o,u){this.flippingPage=null,this.bottomPage=null,this.calc=null,this.state="read",this.render=o,this.app=u}fold(o){this.setState("user_fold"),this.calc===null&&this.start(o),this.do(this.render.convertToPage(o))}flip(o){if(this.app.getSettings().disableFlipByClick&&!this.isPointOnCorners(o)||(this.calc!==null&&this.render.finishAnimation(),!this.start(o)))return;const u=this.getBoundsRect();this.setState("flipping");const p=u.height/10,O=this.calc.getCorner()==="bottom"?u.height-p:p,E=this.calc.getCorner()==="bottom"?u.height:0;this.calc.calc({x:u.pageWidth-p,y:O}),this.animateFlippingTo({x:u.pageWidth-p,y:O},{x:-u.pageWidth,y:E},!0)}start(o){this.reset();const u=this.render.convertToBook(o),p=this.getBoundsRect(),O=this.getDirectionByPoint(u),E=u.y>=p.height/2?"bottom":"top";if(!this.checkDirection(O))return!1;try{if(this.flippingPage=this.app.getPageCollection().getFlippingPage(O),this.bottomPage=this.app.getPageCollection().getBottomPage(O),this.render.getOrientation()==="landscape")if(O===1){const C=this.app.getPageCollection().nextBy(this.flippingPage);C!==null&&this.flippingPage.getDensity()!==C.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),C.setDrawingDensity("hard"))}else{const C=this.app.getPageCollection().prevBy(this.flippingPage);C!==null&&this.flippingPage.getDensity()!==C.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),C.setDrawingDensity("hard"))}return this.render.setDirection(O),this.calc=new Y(O,E,p.pageWidth.toString(10),p.height.toString(10)),!0}catch{return!1}}do(o){if(this.calc!==null&&this.calc.calc(o)){const u=this.calc.getFlippingProgress();this.bottomPage.setArea(this.calc.getBottomClipArea()),this.bottomPage.setPosition(this.calc.getBottomPagePosition()),this.bottomPage.setAngle(0),this.bottomPage.setHardAngle(0),this.flippingPage.setArea(this.calc.getFlippingClipArea()),this.flippingPage.setPosition(this.calc.getActiveCorner()),this.flippingPage.setAngle(this.calc.getAngle()),this.calc.getDirection()===0?this.flippingPage.setHardAngle(90*(200-2*u)/100):this.flippingPage.setHardAngle(-90*(200-2*u)/100),this.render.setPageRect(this.calc.getRect()),this.render.setBottomPage(this.bottomPage),this.render.setFlippingPage(this.flippingPage),this.render.setShadowData(this.calc.getShadowStartPoint(),this.calc.getShadowAngle(),u,this.calc.getDirection())}}flipToPage(o,u){const p=this.app.getPageCollection().getCurrentSpreadIndex(),O=this.app.getPageCollection().getSpreadIndexByPage(o);try{O>p&&(this.app.getPageCollection().setCurrentSpreadIndex(O-1),this.flipNext(u)),O<p&&(this.app.getPageCollection().setCurrentSpreadIndex(O+1),this.flipPrev(u))}catch{}}flipNext(o){this.flip({x:this.render.getRect().left+2*this.render.getRect().pageWidth-10,y:o==="top"?1:this.render.getRect().height-2})}flipPrev(o){this.flip({x:10,y:o==="top"?1:this.render.getRect().height-2})}stopMove(){if(this.calc===null)return;const o=this.calc.getPosition(),u=this.getBoundsRect(),p=this.calc.getCorner()==="bottom"?u.height:0;o.x<=0?this.animateFlippingTo(o,{x:-u.pageWidth,y:p},!0):this.animateFlippingTo(o,{x:u.pageWidth,y:p},!1)}showCorner(o){if(!this.checkState("read","fold_corner"))return;const u=this.getBoundsRect(),p=u.pageWidth;if(this.isPointOnCorners(o))if(this.calc===null){if(!this.start(o))return;this.setState("fold_corner"),this.calc.calc({x:p-1,y:1});const O=50,E=this.calc.getCorner()==="bottom"?u.height-1:1,C=this.calc.getCorner()==="bottom"?u.height-O:O;this.animateFlippingTo({x:p-1,y:E},{x:p-O,y:C},!1,!1)}else this.do(this.render.convertToPage(o));else this.setState("read"),this.render.finishAnimation(),this.stopMove()}animateFlippingTo(o,u,p,O=!0){const E=X.GetCordsFromTwoPoint(o,u),C=[];for(const tt of E)C.push(()=>this.do(tt));const $=this.getAnimationDuration(E.length);this.render.startAnimation(C,$,()=>{this.calc&&(p&&(this.calc.getDirection()===1?this.app.turnToPrevPage():this.app.turnToNextPage()),O&&(this.render.setBottomPage(null),this.render.setFlippingPage(null),this.render.clearShadow(),this.setState("read"),this.reset()))})}getCalculation(){return this.calc}getState(){return this.state}setState(o){this.state!==o&&(this.app.updateState(o),this.state=o)}getDirectionByPoint(o){const u=this.getBoundsRect();if(this.render.getOrientation()==="portrait"){if(o.x-u.pageWidth<=u.width/5)return 1}else if(o.x<u.width/2)return 1;return 0}getAnimationDuration(o){const u=this.app.getSettings().flippingTime;return o>=1e3?u:o/1e3*u}checkDirection(o){return o===0?this.app.getCurrentPageIndex()<this.app.getPageCount()-1:this.app.getCurrentPageIndex()>=1}reset(){this.calc=null,this.flippingPage=null,this.bottomPage=null}getBoundsRect(){return this.render.getRect()}checkState(...o){for(const u of o)if(this.state===u)return!0;return!1}isPointOnCorners(o){const u=this.getBoundsRect(),p=u.pageWidth,O=Math.sqrt(Math.pow(p,2)+Math.pow(u.height,2))/5,E=this.render.convertToBook(o);return E.x>0&&E.y>0&&E.x<u.width&&E.y<u.height&&(E.x<O||E.x>u.width-O)&&(E.y<O||E.y>u.height-O)}}class Q{constructor(o,u){this.leftPage=null,this.rightPage=null,this.flippingPage=null,this.bottomPage=null,this.direction=null,this.orientation=null,this.shadow=null,this.animation=null,this.pageRect=null,this.boundsRect=null,this.timer=0,this.safari=!1,this.setting=u,this.app=o;const p=new RegExp("Version\\/[\\d\\.]+.*Safari/");this.safari=p.exec(window.navigator.userAgent)!==null}render(o){if(this.animation!==null){const u=Math.round((o-this.animation.startedAt)/this.animation.durationFrame);u<this.animation.frames.length?this.animation.frames[u]():(this.animation.onAnimateEnd(),this.animation=null)}this.timer=o,this.drawFrame()}start(){this.update();const o=u=>{this.render(u),requestAnimationFrame(o)};requestAnimationFrame(o)}startAnimation(o,u,p){this.finishAnimation(),this.animation={frames:o,duration:u,durationFrame:u/o.length,onAnimateEnd:p,startedAt:this.timer}}finishAnimation(){this.animation!==null&&(this.animation.frames[this.animation.frames.length-1](),this.animation.onAnimateEnd!==null&&this.animation.onAnimateEnd()),this.animation=null}update(){this.boundsRect=null;const o=this.calculateBoundsRect();this.orientation!==o&&(this.orientation=o,this.app.updateOrientation(o))}calculateBoundsRect(){let o="landscape";const u=this.getBlockWidth(),p=u/2,O=this.getBlockHeight()/2,E=this.setting.width/this.setting.height;let C=this.setting.width,$=this.setting.height,tt=p-C;return this.setting.size==="stretch"?(u<2*this.setting.minWidth&&this.app.getSettings().usePortrait&&(o="portrait"),C=o==="portrait"?this.getBlockWidth():this.getBlockWidth()/2,C>this.setting.maxWidth&&(C=this.setting.maxWidth),$=C/E,$>this.getBlockHeight()&&($=this.getBlockHeight(),C=$*E),tt=o==="portrait"?p-C/2-C:p-C):u<2*C&&this.app.getSettings().usePortrait&&(o="portrait",tt=p-C/2-C),this.boundsRect={left:tt,top:O-$/2,width:2*C,height:$,pageWidth:C},o}setShadowData(o,u,p,O){if(!this.app.getSettings().drawShadow)return;const E=100*this.getSettings().maxShadowOpacity;this.shadow={pos:o,angle:u,width:3*this.getRect().pageWidth/4*p/100,opacity:(100-p)*E/100/100,direction:O,progress:2*p}}clearShadow(){this.shadow=null}getBlockWidth(){return this.app.getUI().getDistElement().offsetWidth}getBlockHeight(){return this.app.getUI().getDistElement().offsetHeight}getDirection(){return this.direction}getRect(){return this.boundsRect===null&&this.calculateBoundsRect(),this.boundsRect}getSettings(){return this.app.getSettings()}getOrientation(){return this.orientation}setPageRect(o){this.pageRect=o}setDirection(o){this.direction=o}setRightPage(o){o!==null&&o.setOrientation(1),this.rightPage=o}setLeftPage(o){o!==null&&o.setOrientation(0),this.leftPage=o}setBottomPage(o){o!==null&&o.setOrientation(this.direction===1?0:1),this.bottomPage=o}setFlippingPage(o){o!==null&&o.setOrientation(this.direction===0&&this.orientation!=="portrait"?0:1),this.flippingPage=o}convertToBook(o){const u=this.getRect();return{x:o.x-u.left,y:o.y-u.top}}isSafari(){return this.safari}convertToPage(o,u){u||(u=this.direction);const p=this.getRect();return{x:u===0?o.x-p.left-p.width/2:p.width/2-o.x+p.left,y:o.y-p.top}}convertToGlobal(o,u){if(u||(u=this.direction),o==null)return null;const p=this.getRect();return{x:u===0?o.x+p.left+p.width/2:p.width/2-o.x+p.left,y:o.y+p.top}}convertRectToGlobal(o,u){return u||(u=this.direction),{topLeft:this.convertToGlobal(o.topLeft,u),topRight:this.convertToGlobal(o.topRight,u),bottomLeft:this.convertToGlobal(o.bottomLeft,u),bottomRight:this.convertToGlobal(o.bottomRight,u)}}}class ft extends Q{constructor(o,u,p){super(o,u),this.canvas=p,this.ctx=p.getContext("2d")}getContext(){return this.ctx}reload(){}drawFrame(){this.clear(),this.orientation!=="portrait"&&this.leftPage!=null&&this.leftPage.simpleDraw(0),this.rightPage!=null&&this.rightPage.simpleDraw(1),this.bottomPage!=null&&this.bottomPage.draw(),this.drawBookShadow(),this.flippingPage!=null&&this.flippingPage.draw(),this.shadow!=null&&(this.drawOuterShadow(),this.drawInnerShadow());const o=this.getRect();this.orientation==="portrait"&&(this.ctx.beginPath(),this.ctx.rect(o.left+o.pageWidth,o.top,o.width,o.height),this.ctx.clip())}drawBookShadow(){const o=this.getRect();this.ctx.save(),this.ctx.beginPath();const u=o.width/20;this.ctx.rect(o.left,o.top,o.width,o.height);const p={x:o.left+o.width/2-u/2,y:0};this.ctx.translate(p.x,p.y);const O=this.ctx.createLinearGradient(0,0,u,0);O.addColorStop(0,"rgba(0, 0, 0, 0)"),O.addColorStop(.4,"rgba(0, 0, 0, 0.2)"),O.addColorStop(.49,"rgba(0, 0, 0, 0.1)"),O.addColorStop(.5,"rgba(0, 0, 0, 0.5)"),O.addColorStop(.51,"rgba(0, 0, 0, 0.4)"),O.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.clip(),this.ctx.fillStyle=O,this.ctx.fillRect(0,0,u,2*o.height),this.ctx.restore()}drawOuterShadow(){const o=this.getRect();this.ctx.save(),this.ctx.beginPath(),this.ctx.rect(o.left,o.top,o.width,o.height);const u=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y});this.ctx.translate(u.x,u.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const p=this.ctx.createLinearGradient(0,0,this.shadow.width,0);this.shadow.direction===0?(this.ctx.translate(0,-100),p.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),p.addColorStop(1,"rgba(0, 0, 0, 0)")):(this.ctx.translate(-this.shadow.width,-100),p.addColorStop(0,"rgba(0, 0, 0, 0)"),p.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")")),this.ctx.clip(),this.ctx.fillStyle=p,this.ctx.fillRect(0,0,this.shadow.width,2*o.height),this.ctx.restore()}drawInnerShadow(){const o=this.getRect();this.ctx.save(),this.ctx.beginPath();const u=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),p=this.convertRectToGlobal(this.pageRect);this.ctx.moveTo(p.topLeft.x,p.topLeft.y),this.ctx.lineTo(p.topRight.x,p.topRight.y),this.ctx.lineTo(p.bottomRight.x,p.bottomRight.y),this.ctx.lineTo(p.bottomLeft.x,p.bottomLeft.y),this.ctx.translate(u.x,u.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const O=3*this.shadow.width/4,E=this.ctx.createLinearGradient(0,0,O,0);this.shadow.direction===0?(this.ctx.translate(-O,-100),E.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")"),E.addColorStop(.9,"rgba(0, 0, 0, 0.05)"),E.addColorStop(.7,"rgba(0, 0, 0, "+this.shadow.opacity+")"),E.addColorStop(0,"rgba(0, 0, 0, 0)")):(this.ctx.translate(0,-100),E.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),E.addColorStop(.1,"rgba(0, 0, 0, 0.05)"),E.addColorStop(.3,"rgba(0, 0, 0, "+this.shadow.opacity+")"),E.addColorStop(1,"rgba(0, 0, 0, 0)")),this.ctx.clip(),this.ctx.fillStyle=E,this.ctx.fillRect(0,0,O,2*o.height),this.ctx.restore()}clear(){this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}}class M{constructor(o,u,p){this.touchPoint=null,this.swipeTimeout=250,this.onResize=()=>{this.update()},this.onMouseDown=E=>{if(this.checkTarget(E.target)){const C=this.getMousePos(E.clientX,E.clientY);this.app.startUserTouch(C),E.preventDefault()}},this.onTouchStart=E=>{if(this.checkTarget(E.target)&&E.changedTouches.length>0){const C=E.changedTouches[0],$=this.getMousePos(C.clientX,C.clientY);this.touchPoint={point:$,time:Date.now()},setTimeout(()=>{this.touchPoint!==null&&this.app.startUserTouch($)},this.swipeTimeout),this.app.getSettings().mobileScrollSupport||E.preventDefault()}},this.onMouseUp=E=>{const C=this.getMousePos(E.clientX,E.clientY);this.app.userStop(C)},this.onMouseMove=E=>{const C=this.getMousePos(E.clientX,E.clientY);this.app.userMove(C,!1)},this.onTouchMove=E=>{if(E.changedTouches.length>0){const C=E.changedTouches[0],$=this.getMousePos(C.clientX,C.clientY);this.app.getSettings().mobileScrollSupport?(this.touchPoint!==null&&(Math.abs(this.touchPoint.point.x-$.x)>10||this.app.getState()!=="read")&&E.cancelable&&this.app.userMove($,!0),this.app.getState()!=="read"&&E.preventDefault()):this.app.userMove($,!0)}},this.onTouchEnd=E=>{if(E.changedTouches.length>0){const C=E.changedTouches[0],$=this.getMousePos(C.clientX,C.clientY);let tt=!1;if(this.touchPoint!==null){const rt=$.x-this.touchPoint.point.x,At=Math.abs($.y-this.touchPoint.point.y);Math.abs(rt)>this.swipeDistance&&At<2*this.swipeDistance&&Date.now()-this.touchPoint.time<this.swipeTimeout&&(rt>0?this.app.flipPrev(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"):this.app.flipNext(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"),tt=!0),this.touchPoint=null}this.app.userStop($,tt)}},this.parentElement=o,o.classList.add("stf__parent"),o.insertAdjacentHTML("afterbegin",'<div class="stf__wrapper"></div>'),this.wrapper=o.querySelector(".stf__wrapper"),this.app=u;const O=this.app.getSettings().usePortrait?1:2;o.style.minWidth=p.minWidth*O+"px",o.style.minHeight=p.minHeight+"px",p.size==="fixed"&&(o.style.minWidth=p.width*O+"px",o.style.minHeight=p.height+"px"),p.autoSize&&(o.style.width="100%",o.style.maxWidth=2*p.maxWidth+"px"),o.style.display="block",window.addEventListener("resize",this.onResize,!1),this.swipeDistance=p.swipeDistance}destroy(){this.app.getSettings().useMouseEvents&&this.removeHandlers(),this.distElement.remove(),this.wrapper.remove()}getDistElement(){return this.distElement}getWrapper(){return this.wrapper}setOrientationStyle(o){this.wrapper.classList.remove("--portrait","--landscape"),o==="portrait"?(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/this.app.getSettings().width*100+"%"),this.wrapper.classList.add("--portrait")):(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/(2*this.app.getSettings().width)*100+"%"),this.wrapper.classList.add("--landscape")),this.update()}removeHandlers(){window.removeEventListener("resize",this.onResize),this.distElement.removeEventListener("mousedown",this.onMouseDown),this.distElement.removeEventListener("touchstart",this.onTouchStart),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("touchend",this.onTouchEnd)}setHandlers(){window.addEventListener("resize",this.onResize,!1),this.app.getSettings().useMouseEvents&&(this.distElement.addEventListener("mousedown",this.onMouseDown),this.distElement.addEventListener("touchstart",this.onTouchStart),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!this.app.getSettings().mobileScrollSupport}),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("touchend",this.onTouchEnd))}getMousePos(o,u){const p=this.distElement.getBoundingClientRect();return{x:o-p.left,y:u-p.top}}checkTarget(o){return!this.app.getSettings().clickEventForward||!["a","button"].includes(o.tagName.toLowerCase())}}class S extends M{constructor(o,u,p,O){super(o,u,p),this.wrapper.insertAdjacentHTML("afterbegin",'<div class="stf__block"></div>'),this.distElement=o.querySelector(".stf__block"),this.items=O;for(const E of O)this.distElement.appendChild(E);this.setHandlers()}clear(){for(const o of this.items)this.parentElement.appendChild(o)}updateItems(o){this.removeHandlers(),this.distElement.innerHTML="";for(const u of o)this.distElement.appendChild(u);this.items=o,this.setHandlers()}update(){this.app.getRender().update()}}class B extends M{constructor(o,u,p){super(o,u,p),this.wrapper.innerHTML='<canvas class="stf__canvas"></canvas>',this.canvas=o.querySelectorAll("canvas")[0],this.distElement=this.canvas,this.resizeCanvas(),this.setHandlers()}resizeCanvas(){const o=getComputedStyle(this.canvas),u=parseInt(o.getPropertyValue("width"),10),p=parseInt(o.getPropertyValue("height"),10);this.canvas.width=u,this.canvas.height=p}getCanvas(){return this.canvas}update(){this.resizeCanvas(),this.app.getRender().update()}}class W extends Q{constructor(o,u,p){super(o,u),this.outerShadow=null,this.innerShadow=null,this.hardShadow=null,this.hardInnerShadow=null,this.element=p,this.createShadows()}createShadows(){this.element.insertAdjacentHTML("beforeend",`<div class="stf__outerShadow"></div>
             <div class="stf__innerShadow"></div>
             <div class="stf__hardShadow"></div>
             <div class="stf__hardInnerShadow"></div>`),this.outerShadow=this.element.querySelector(".stf__outerShadow"),this.innerShadow=this.element.querySelector(".stf__innerShadow"),this.hardShadow=this.element.querySelector(".stf__hardShadow"),this.hardInnerShadow=this.element.querySelector(".stf__hardInnerShadow")}clearShadow(){super.clearShadow(),this.outerShadow.style.cssText="display: none",this.innerShadow.style.cssText="display: none",this.hardShadow.style.cssText="display: none",this.hardInnerShadow.style.cssText="display: none"}reload(){this.element.querySelector(".stf__outerShadow")||this.createShadows()}drawHardInnerShadow(){const o=this.getRect(),u=this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress;let p=(100-u)*(2.5*o.pageWidth)/100+20;p>o.pageWidth&&(p=o.pageWidth);let O=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+5).toString(10)};
            width: ${p}px;
            height: ${o.height}px;
            background: linear-gradient(to right,
                rgba(0, 0, 0, ${this.shadow.opacity*u/100}) 5%,
                rgba(0, 0, 0, 0) 100%);
            left: ${o.left+o.width/2}px;
            transform-origin: 0 0;
        `;O+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0);":"transform: translate3d(0, 0, 0) rotateY(180deg);",this.hardInnerShadow.style.cssText=O}drawHardOuterShadow(){const o=this.getRect();let u=(100-(this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress))*(2.5*o.pageWidth)/100+20;u>o.pageWidth&&(u=o.pageWidth);let p=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+4).toString(10)};
            width: ${u}px;
            height: ${o.height}px;
            background: linear-gradient(to left, rgba(0, 0, 0, ${this.shadow.opacity}) 5%, rgba(0, 0, 0, 0) 100%);
            left: ${o.left+o.width/2}px;
            transform-origin: 0 0;
        `;p+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0) rotateY(180deg);":"transform: translate3d(0, 0, 0);",this.hardShadow.style.cssText=p}drawInnerShadow(){const o=this.getRect(),u=3*this.shadow.width/4,p=this.getDirection()===0?u:0,O=this.getDirection()===0?"to left":"to right",E=this.convertToGlobal(this.shadow.pos),C=this.shadow.angle+3*Math.PI/2,$=[this.pageRect.topLeft,this.pageRect.topRight,this.pageRect.bottomRight,this.pageRect.bottomLeft];let tt="polygon( ";for(const At of $){let Lt=this.getDirection()===1?{x:-At.x+this.shadow.pos.x,y:At.y-this.shadow.pos.y}:{x:At.x-this.shadow.pos.x,y:At.y-this.shadow.pos.y};Lt=X.GetRotatedPoint(Lt,{x:p,y:100},C),tt+=Lt.x+"px "+Lt.y+"px, "}tt=tt.slice(0,-2),tt+=")";const rt=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${u}px;
            height: ${2*o.height}px;
            background: linear-gradient(${O},
                rgba(0, 0, 0, ${this.shadow.opacity}) 5%,
                rgba(0, 0, 0, 0.05) 15%,
                rgba(0, 0, 0, ${this.shadow.opacity}) 35%,
                rgba(0, 0, 0, 0) 100%);
            transform-origin: ${p}px 100px;
            transform: translate3d(${E.x-p}px, ${E.y-100}px, 0) rotate(${C}rad);
            clip-path: ${tt};
            -webkit-clip-path: ${tt};
        `;this.innerShadow.style.cssText=rt}drawOuterShadow(){const o=this.getRect(),u=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),p=this.shadow.angle+3*Math.PI/2,O=this.getDirection()===1?this.shadow.width:0,E=this.getDirection()===0?"to right":"to left",C=[{x:0,y:0},{x:o.pageWidth,y:0},{x:o.pageWidth,y:o.height},{x:0,y:o.height}];let $="polygon( ";for(const rt of C)if(rt!==null){let At=this.getDirection()===1?{x:-rt.x+this.shadow.pos.x,y:rt.y-this.shadow.pos.y}:{x:rt.x-this.shadow.pos.x,y:rt.y-this.shadow.pos.y};At=X.GetRotatedPoint(At,{x:O,y:100},p),$+=At.x+"px "+At.y+"px, "}$=$.slice(0,-2),$+=")";const tt=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2*o.height}px;
            background: linear-gradient(${E}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));
            transform-origin: ${O}px 100px;
            transform: translate3d(${u.x-O}px, ${u.y-100}px, 0) rotate(${p}rad);
            clip-path: ${$};
            -webkit-clip-path: ${$};
        `;this.outerShadow.style.cssText=tt}drawLeftPage(){this.orientation!=="portrait"&&this.leftPage!==null&&(this.direction===1&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.leftPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.leftPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.leftPage.draw(this.flippingPage.getDrawingDensity())):this.leftPage.simpleDraw(0))}drawRightPage(){this.rightPage!==null&&(this.direction===0&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.rightPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.rightPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.rightPage.draw(this.flippingPage.getDrawingDensity())):this.rightPage.simpleDraw(1))}drawBottomPage(){if(this.bottomPage===null)return;const o=this.flippingPage!=null?this.flippingPage.getDrawingDensity():null;this.orientation==="portrait"&&this.direction===1||(this.bottomPage.getElement().style.zIndex=(this.getSettings().startZIndex+3).toString(10),this.bottomPage.draw(o))}drawFrame(){this.clear(),this.drawLeftPage(),this.drawRightPage(),this.drawBottomPage(),this.flippingPage!=null&&(this.flippingPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.flippingPage.draw()),this.shadow!=null&&this.flippingPage!==null&&(this.flippingPage.getDrawingDensity()==="soft"?(this.drawOuterShadow(),this.drawInnerShadow()):(this.drawHardOuterShadow(),this.drawHardInnerShadow()))}clear(){for(const o of this.app.getPageCollection().getPages())o!==this.leftPage&&o!==this.rightPage&&o!==this.flippingPage&&o!==this.bottomPage&&(o.getElement().style.cssText="display: none"),o.getTemporaryCopy()!==this.flippingPage&&o.hideTemporaryCopy()}update(){super.update(),this.rightPage!==null&&this.rightPage.setOrientation(1),this.leftPage!==null&&this.leftPage.setOrientation(0)}}class dt{constructor(){this._default={startPage:0,size:"fixed",width:0,height:0,minWidth:0,maxWidth:0,minHeight:0,maxHeight:0,drawShadow:!0,flippingTime:1e3,usePortrait:!0,startZIndex:0,autoSize:!0,maxShadowOpacity:1,showCover:!1,mobileScrollSupport:!0,swipeDistance:30,clickEventForward:!0,useMouseEvents:!0,showPageCorners:!0,disableFlipByClick:!1}}getSettings(o){const u=this._default;if(Object.assign(u,o),u.size!=="stretch"&&u.size!=="fixed")throw new Error('Invalid size type. Available only "fixed" and "stretch" value');if(u.width<=0||u.height<=0)throw new Error("Invalid width or height");if(u.flippingTime<=0)throw new Error("Invalid flipping time");return u.size==="stretch"?(u.minWidth<=0&&(u.minWidth=100),u.maxWidth<u.minWidth&&(u.maxWidth=2e3),u.minHeight<=0&&(u.minHeight=100),u.maxHeight<u.minHeight&&(u.maxHeight=2e3)):(u.minWidth=u.width,u.maxWidth=u.width,u.minHeight=u.height,u.maxHeight=u.height),u}}(function(N,o){o===void 0&&(o={});var u=o.insertAt;if(typeof document<"u"){var p=document.head||document.getElementsByTagName("head")[0],O=document.createElement("style");O.type="text/css",u==="top"&&p.firstChild?p.insertBefore(O,p.firstChild):p.appendChild(O),O.styleSheet?O.styleSheet.cssText=N:O.appendChild(document.createTextNode(N))}})(`.stf__parent {
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
}`),g.PageFlip=class extends class{constructor(){this.events=new Map}on(N,o){return this.events.has(N)?this.events.get(N).push(o):this.events.set(N,[o]),this}off(N){this.events.delete(N)}trigger(N,o,u=null){if(this.events.has(N))for(const p of this.events.get(N))p({data:u,object:o})}}{constructor(N,o){super(),this.isUserTouch=!1,this.isUserMove=!1,this.setting=null,this.pages=null,this.setting=new dt().getSettings(o),this.block=N}destroy(){this.ui.destroy(),this.block.remove()}update(){this.render.update(),this.pages.show()}loadFromImages(N){this.ui=new B(this.block,this,this.setting);const o=this.ui.getCanvas();this.render=new ft(this,this.setting,o),this.flipController=new J(this.render,this),this.pages=new G(this,this.render,N),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}loadFromHTML(N){this.ui=new S(this.block,this,this.setting,N),this.render=new W(this,this.setting,this.ui.getDistElement()),this.flipController=new J(this.render,this),this.pages=new w(this,this.render,this.ui.getDistElement(),N),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}updateFromImages(N){const o=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new G(this,this.render,N),this.pages.load(),this.pages.show(o),this.trigger("update",this,{page:o,mode:this.render.getOrientation()})}updateFromHtml(N){const o=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new w(this,this.render,this.ui.getDistElement(),N),this.pages.load(),this.ui.updateItems(N),this.render.reload(),this.pages.show(o),this.trigger("update",this,{page:o,mode:this.render.getOrientation()})}clear(){this.pages.destroy(),this.ui.clear()}turnToPrevPage(){this.pages.showPrev()}turnToNextPage(){this.pages.showNext()}turnToPage(N){this.pages.show(N)}flipNext(N="top"){this.flipController.flipNext(N)}flipPrev(N="top"){this.flipController.flipPrev(N)}flip(N,o="top"){this.flipController.flipToPage(N,o)}updateState(N){this.trigger("changeState",this,N)}updatePageIndex(N){this.trigger("flip",this,N)}updateOrientation(N){this.ui.setOrientationStyle(N),this.update(),this.trigger("changeOrientation",this,N)}getPageCount(){return this.pages.getPageCount()}getCurrentPageIndex(){return this.pages.getCurrentPageIndex()}getPage(N){return this.pages.getPage(N)}getRender(){return this.render}getFlipController(){return this.flipController}getOrientation(){return this.render.getOrientation()}getBoundsRect(){return this.render.getRect()}getSettings(){return this.setting}getUI(){return this.ui}getState(){return this.flipController.getState()}getPageCollection(){return this.pages}startUserTouch(N){this.mousePosition=N,this.isUserTouch=!0,this.isUserMove=!1}userMove(N,o){this.isUserTouch||o||!this.setting.showPageCorners?this.isUserTouch&&X.GetDistanceBetweenTwoPoint(this.mousePosition,N)>5&&(this.isUserMove=!0,this.flipController.fold(N)):this.flipController.showCorner(N)}userStop(N,o=!1){this.isUserTouch&&(this.isUserTouch=!1,o||(this.isUserMove?this.flipController.stopMove():this.flipController.flip(N)))}},Object.defineProperty(g,"__esModule",{value:!0})})}(Ri,Ri.exports)),Ri.exports}var jp=Lp();const Pp=tn.forwardRef((c,d)=>{const g=zt.useRef(null),f=zt.useRef([]),D=zt.useRef(),[q,G]=zt.useState([]);zt.useImperativeHandle(d,()=>({pageFlip:()=>D.current}));const X=zt.useCallback(()=>{D.current&&D.current.clear()},[]),U=zt.useCallback(()=>{const w=D.current;w&&(w.off("flip"),w.off("changeOrientation"),w.off("changeState"),w.off("init"),w.off("update"))},[]);return zt.useEffect(()=>{if(f.current=[],c.children){const w=tn.Children.map(c.children,Y=>tn.cloneElement(Y,{ref:J=>{J&&f.current.push(J)}}));(!c.renderOnlyPageLengthChange||q.length!==w.length)&&(w.length<q.length&&X(),G(w))}},[c.children]),zt.useEffect(()=>{const w=()=>{const Y=D.current;Y&&(c.onFlip&&Y.on("flip",J=>c.onFlip(J)),c.onChangeOrientation&&Y.on("changeOrientation",J=>c.onChangeOrientation(J)),c.onChangeState&&Y.on("changeState",J=>c.onChangeState(J)),c.onInit&&Y.on("init",J=>c.onInit(J)),c.onUpdate&&Y.on("update",J=>c.onUpdate(J)))};q.length>0&&f.current.length>0&&(U(),g.current&&!D.current&&(D.current=new jp.PageFlip(g.current,c)),D.current.getFlipController()?D.current.updateFromHtml(f.current):D.current.loadFromHTML(f.current),w())},[q]),tn.createElement("div",{ref:g,className:c.className,style:c.style},q)}),Zp=tn.memo(Pp),Su=36,Qp=()=>{const c=zt.useRef(null),d=zt.useRef(null),[g,f]=zt.useState(0),[D,q]=zt.useState(!1),[G,X]=zt.useState(!1),U=zt.useRef(new Map);zt.useEffect(()=>{(async()=>{for(let ft=0;ft<Su/2;ft++){const M=ft*2+41,B=[M,M+1].map(O=>`/letter-to-the-cloud/assets/images/Frame ${O}.png`).map(O=>{const E=new Image;return E.src=O,new Promise(C=>{E.onload=()=>C(E),E.onerror=()=>C(E)})}),W=`/letter-to-the-cloud/audio/${M}.mp3`,dt=new Audio(W),N=new Promise(O=>{dt.oncanplaythrough=()=>O(dt),dt.onerror=()=>O(dt)}),[o,u,p]=await Promise.all([...B,N]);U.current.set(ft,{images:[o,u],audio:p})}q(!0)})()},[]);const w=Q=>f(Q.data);zt.useEffect(()=>{const Q=()=>X(!0);return window.addEventListener("click",Q,{once:!0}),()=>window.removeEventListener("click",Q)},[]),zt.useEffect(()=>{if(!G)return;const Q=U.current.get(g);if(Q)return d.current&&(d.current.pause(),d.current.currentTime=0),d.current=Q.audio,Q.audio.play().catch(ft=>{console.warn(`Не удалось воспроизвести аудио для страницы ${g}`,ft)}),()=>{Q.audio.pause(),Q.audio.currentTime=0}},[g,G]);const Y=()=>c.current?.flipNext(),J=()=>c.current?.flipPrev();return D?Ut.jsxs(Ut.Fragment,{children:[Ut.jsxs("div",{className:"wrapper",children:[Ut.jsx("button",{type:"button",onClick:J,className:`button-circle ${g?"":"disabled"}`,tabIndex:-1,"aria-label":"Previous page",onMouseDown:Q=>Q.preventDefault(),children:"←"}),Ut.jsxs(Zp,{width:600,height:600,maxShadowOpacity:.5,size:"fixed",drawShadow:!0,showCover:!0,mobileScrollSupport:!0,onFlip:w,ref:Q=>{c.current=Q?.pageFlip()},children:[Ut.jsx("div",{className:"page page-cover","data-density":"hard",children:Ut.jsx("img",{src:"/letter-to-the-cloud/assets/images/Frame 40.png"})}),Array.from(U.current.entries()).flatMap(([Q,{images:ft}],M)=>ft.map((S,B)=>Ut.jsxs("div",{className:"page",children:[Ut.jsx("img",{src:S.src}),Ut.jsx("div",{className:`overlay ${B===0?"left":"right"}`})]},`${M}-${B}`)))]}),Ut.jsx("button",{type:"button",onClick:Y,className:`button-circle ${g===Su?"disabled":""}`,tabIndex:-1,onMouseDown:Q=>Q.preventDefault(),"aria-label":"Next page",children:"→"})]}),Ut.jsxs("p",{children:[Ut.jsx("span",{children:g})," of ",Ut.jsx("span",{children:Su})]})]}):Ut.jsx(Gp,{color:"#ffd600",size:"large"})};function Vp(){const c=zt.useRef(null),[d,g]=zt.useState(null);return zt.useEffect(()=>(d||g(xp({el:c.current,mouseControls:!0,touchControls:!0,gyroControls:!0,minHeight:200,minWidth:200,skyColor:3880309,sunGlareColor:16724016,sunlightColor:16724687,speed:.8})),()=>{d&&d.destroy()}),[d]),Ut.jsx(Ut.Fragment,{children:Ut.jsx("div",{ref:c,className:"wrapper",children:Ut.jsx(Qp,{})})})}mp.createRoot(document.getElementById("root")).render(Ut.jsx(zt.StrictMode,{children:Ut.jsx(Vp,{})}));
