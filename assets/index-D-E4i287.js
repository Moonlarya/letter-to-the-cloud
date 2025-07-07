(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))s(p);new MutationObserver(p=>{for(const v of p)if(v.type==="childList")for(const D of v.addedNodes)D.tagName==="LINK"&&D.rel==="modulepreload"&&s(D)}).observe(document,{childList:!0,subtree:!0});function f(p){const v={};return p.integrity&&(v.integrity=p.integrity),p.referrerPolicy&&(v.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?v.credentials="include":p.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function s(p){if(p.ep)return;p.ep=!0;const v=f(p);fetch(p.href,v)}})();function nm(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var is={exports:{}},el={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ad;function am(){if(Ad)return el;Ad=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function f(s,p,v){var D=null;if(v!==void 0&&(D=""+v),p.key!==void 0&&(D=""+p.key),"key"in p){v={};for(var q in p)q!=="key"&&(v[q]=p[q])}else v=p;return p=v.ref,{$$typeof:r,type:s,key:D,ref:p!==void 0?p:null,props:v}}return el.Fragment=o,el.jsx=f,el.jsxs=f,el}var Ed;function im(){return Ed||(Ed=1,is.exports=am()),is.exports}var tt=im(),ls={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d;function lm(){if(_d)return st;_d=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),v=Symbol.for("react.consumer"),D=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),G=Symbol.iterator;function Z(b){return b===null||typeof b!="object"?null:(b=G&&b[G]||b["@@iterator"],typeof b=="function"?b:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,j={};function V(b,B,Y){this.props=b,this.context=B,this.refs=j,this.updater=Y||K}V.prototype.isReactComponent={},V.prototype.setState=function(b,B){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,B,"setState")},V.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function rt(){}rt.prototype=V.prototype;function ut(b,B,Y){this.props=b,this.context=B,this.refs=j,this.updater=Y||K}var C=ut.prototype=new rt;C.constructor=ut,X(C,V.prototype),C.isPureReactComponent=!0;var u=Array.isArray,h={H:null,A:null,T:null,S:null,V:null},g=Object.prototype.hasOwnProperty;function y(b,B,Y,P,I,pt){return Y=pt.ref,{$$typeof:r,type:b,key:B,ref:Y!==void 0?Y:null,props:pt}}function _(b,B){return y(b.type,B,void 0,void 0,void 0,b.props)}function k(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function J(b){var B={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(Y){return B[Y]})}var F=/\/+/g;function ot(b,B){return typeof b=="object"&&b!==null&&b.key!=null?J(""+b.key):B.toString(36)}function yt(){}function kt(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(yt,yt):(b.status="pending",b.then(function(B){b.status==="pending"&&(b.status="fulfilled",b.value=B)},function(B){b.status==="pending"&&(b.status="rejected",b.reason=B)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function wt(b,B,Y,P,I){var pt=typeof b;(pt==="undefined"||pt==="boolean")&&(b=null);var at=!1;if(b===null)at=!0;else switch(pt){case"bigint":case"string":case"number":at=!0;break;case"object":switch(b.$$typeof){case r:case o:at=!0;break;case U:return at=b._init,wt(at(b._payload),B,Y,P,I)}}if(at)return I=I(b),at=P===""?"."+ot(b,0):P,u(I)?(Y="",at!=null&&(Y=at.replace(F,"$&/")+"/"),wt(I,B,Y,"",function(ae){return ae})):I!=null&&(k(I)&&(I=_(I,Y+(I.key==null||b&&b.key===I.key?"":(""+I.key).replace(F,"$&/")+"/")+at)),B.push(I)),1;at=0;var Kt=P===""?".":P+":";if(u(b))for(var Ot=0;Ot<b.length;Ot++)P=b[Ot],pt=Kt+ot(P,Ot),at+=wt(P,B,Y,pt,I);else if(Ot=Z(b),typeof Ot=="function")for(b=Ot.call(b),Ot=0;!(P=b.next()).done;)P=P.value,pt=Kt+ot(P,Ot++),at+=wt(P,B,Y,pt,I);else if(pt==="object"){if(typeof b.then=="function")return wt(kt(b),B,Y,P,I);throw B=String(b),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return at}function z(b,B,Y){if(b==null)return b;var P=[],I=0;return wt(b,P,"","",function(pt){return B.call(Y,pt,I++)}),P}function L(b){if(b._status===-1){var B=b._result;B=B(),B.then(function(Y){(b._status===0||b._status===-1)&&(b._status=1,b._result=Y)},function(Y){(b._status===0||b._status===-1)&&(b._status=2,b._result=Y)}),b._status===-1&&(b._status=0,b._result=B)}if(b._status===1)return b._result.default;throw b._result}var et=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function dt(){}return st.Children={map:z,forEach:function(b,B,Y){z(b,function(){B.apply(this,arguments)},Y)},count:function(b){var B=0;return z(b,function(){B++}),B},toArray:function(b){return z(b,function(B){return B})||[]},only:function(b){if(!k(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},st.Component=V,st.Fragment=f,st.Profiler=p,st.PureComponent=ut,st.StrictMode=s,st.Suspense=M,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,st.__COMPILER_RUNTIME={__proto__:null,c:function(b){return h.H.useMemoCache(b)}},st.cache=function(b){return function(){return b.apply(null,arguments)}},st.cloneElement=function(b,B,Y){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var P=X({},b.props),I=b.key,pt=void 0;if(B!=null)for(at in B.ref!==void 0&&(pt=void 0),B.key!==void 0&&(I=""+B.key),B)!g.call(B,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&B.ref===void 0||(P[at]=B[at]);var at=arguments.length-2;if(at===1)P.children=Y;else if(1<at){for(var Kt=Array(at),Ot=0;Ot<at;Ot++)Kt[Ot]=arguments[Ot+2];P.children=Kt}return y(b.type,I,void 0,void 0,pt,P)},st.createContext=function(b){return b={$$typeof:D,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:v,_context:b},b},st.createElement=function(b,B,Y){var P,I={},pt=null;if(B!=null)for(P in B.key!==void 0&&(pt=""+B.key),B)g.call(B,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(I[P]=B[P]);var at=arguments.length-2;if(at===1)I.children=Y;else if(1<at){for(var Kt=Array(at),Ot=0;Ot<at;Ot++)Kt[Ot]=arguments[Ot+2];I.children=Kt}if(b&&b.defaultProps)for(P in at=b.defaultProps,at)I[P]===void 0&&(I[P]=at[P]);return y(b,pt,void 0,void 0,null,I)},st.createRef=function(){return{current:null}},st.forwardRef=function(b){return{$$typeof:q,render:b}},st.isValidElement=k,st.lazy=function(b){return{$$typeof:U,_payload:{_status:-1,_result:b},_init:L}},st.memo=function(b,B){return{$$typeof:S,type:b,compare:B===void 0?null:B}},st.startTransition=function(b){var B=h.T,Y={};h.T=Y;try{var P=b(),I=h.S;I!==null&&I(Y,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(dt,et)}catch(pt){et(pt)}finally{h.T=B}},st.unstable_useCacheRefresh=function(){return h.H.useCacheRefresh()},st.use=function(b){return h.H.use(b)},st.useActionState=function(b,B,Y){return h.H.useActionState(b,B,Y)},st.useCallback=function(b,B){return h.H.useCallback(b,B)},st.useContext=function(b){return h.H.useContext(b)},st.useDebugValue=function(){},st.useDeferredValue=function(b,B){return h.H.useDeferredValue(b,B)},st.useEffect=function(b,B,Y){var P=h.H;if(typeof Y=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return P.useEffect(b,B)},st.useId=function(){return h.H.useId()},st.useImperativeHandle=function(b,B,Y){return h.H.useImperativeHandle(b,B,Y)},st.useInsertionEffect=function(b,B){return h.H.useInsertionEffect(b,B)},st.useLayoutEffect=function(b,B){return h.H.useLayoutEffect(b,B)},st.useMemo=function(b,B){return h.H.useMemo(b,B)},st.useOptimistic=function(b,B){return h.H.useOptimistic(b,B)},st.useReducer=function(b,B,Y){return h.H.useReducer(b,B,Y)},st.useRef=function(b){return h.H.useRef(b)},st.useState=function(b){return h.H.useState(b)},st.useSyncExternalStore=function(b,B,Y){return h.H.useSyncExternalStore(b,B,Y)},st.useTransition=function(){return h.H.useTransition()},st.version="19.1.0",st}var Dd;function As(){return Dd||(Dd=1,ls.exports=lm()),ls.exports}var vt=As();const Pt=nm(vt);var rs={exports:{}},nl={},os={exports:{}},us={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md;function rm(){return Md||(Md=1,function(r){function o(z,L){var et=z.length;z.push(L);t:for(;0<et;){var dt=et-1>>>1,b=z[dt];if(0<p(b,L))z[dt]=L,z[et]=b,et=dt;else break t}}function f(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var L=z[0],et=z.pop();if(et!==L){z[0]=et;t:for(var dt=0,b=z.length,B=b>>>1;dt<B;){var Y=2*(dt+1)-1,P=z[Y],I=Y+1,pt=z[I];if(0>p(P,et))I<b&&0>p(pt,P)?(z[dt]=pt,z[I]=et,dt=I):(z[dt]=P,z[Y]=et,dt=Y);else if(I<b&&0>p(pt,et))z[dt]=pt,z[I]=et,dt=I;else break t}}return L}function p(z,L){var et=z.sortIndex-L.sortIndex;return et!==0?et:z.id-L.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var v=performance;r.unstable_now=function(){return v.now()}}else{var D=Date,q=D.now();r.unstable_now=function(){return D.now()-q}}var M=[],S=[],U=1,G=null,Z=3,K=!1,X=!1,j=!1,V=!1,rt=typeof setTimeout=="function"?setTimeout:null,ut=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function u(z){for(var L=f(S);L!==null;){if(L.callback===null)s(S);else if(L.startTime<=z)s(S),L.sortIndex=L.expirationTime,o(M,L);else break;L=f(S)}}function h(z){if(j=!1,u(z),!X)if(f(M)!==null)X=!0,g||(g=!0,ot());else{var L=f(S);L!==null&&wt(h,L.startTime-z)}}var g=!1,y=-1,_=5,k=-1;function J(){return V?!0:!(r.unstable_now()-k<_)}function F(){if(V=!1,g){var z=r.unstable_now();k=z;var L=!0;try{t:{X=!1,j&&(j=!1,ut(y),y=-1),K=!0;var et=Z;try{e:{for(u(z),G=f(M);G!==null&&!(G.expirationTime>z&&J());){var dt=G.callback;if(typeof dt=="function"){G.callback=null,Z=G.priorityLevel;var b=dt(G.expirationTime<=z);if(z=r.unstable_now(),typeof b=="function"){G.callback=b,u(z),L=!0;break e}G===f(M)&&s(M),u(z)}else s(M);G=f(M)}if(G!==null)L=!0;else{var B=f(S);B!==null&&wt(h,B.startTime-z),L=!1}}break t}finally{G=null,Z=et,K=!1}L=void 0}}finally{L?ot():g=!1}}}var ot;if(typeof C=="function")ot=function(){C(F)};else if(typeof MessageChannel<"u"){var yt=new MessageChannel,kt=yt.port2;yt.port1.onmessage=F,ot=function(){kt.postMessage(null)}}else ot=function(){rt(F,0)};function wt(z,L){y=rt(function(){z(r.unstable_now())},L)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return Z},r.unstable_next=function(z){switch(Z){case 1:case 2:case 3:var L=3;break;default:L=Z}var et=Z;Z=L;try{return z()}finally{Z=et}},r.unstable_requestPaint=function(){V=!0},r.unstable_runWithPriority=function(z,L){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var et=Z;Z=z;try{return L()}finally{Z=et}},r.unstable_scheduleCallback=function(z,L,et){var dt=r.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?dt+et:dt):et=dt,z){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=et+b,z={id:U++,callback:L,priorityLevel:z,startTime:et,expirationTime:b,sortIndex:-1},et>dt?(z.sortIndex=et,o(S,z),f(M)===null&&z===f(S)&&(j?(ut(y),y=-1):j=!0,wt(h,et-dt))):(z.sortIndex=b,o(M,z),X||K||(X=!0,g||(g=!0,ot()))),z},r.unstable_shouldYield=J,r.unstable_wrapCallback=function(z){var L=Z;return function(){var et=Z;Z=L;try{return z.apply(this,arguments)}finally{Z=et}}}}(us)),us}var zd;function om(){return zd||(zd=1,os.exports=rm()),os.exports}var ss={exports:{}},re={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd;function um(){if(Rd)return re;Rd=1;var r=As();function o(M){var S="https://react.dev/errors/"+M;if(1<arguments.length){S+="?args[]="+encodeURIComponent(arguments[1]);for(var U=2;U<arguments.length;U++)S+="&args[]="+encodeURIComponent(arguments[U])}return"Minified React error #"+M+"; visit "+S+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var s={d:{f,r:function(){throw Error(o(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},p=Symbol.for("react.portal");function v(M,S,U){var G=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:G==null?null:""+G,children:M,containerInfo:S,implementation:U}}var D=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function q(M,S){if(M==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}return re.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,re.createPortal=function(M,S){var U=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error(o(299));return v(M,S,null,U)},re.flushSync=function(M){var S=D.T,U=s.p;try{if(D.T=null,s.p=2,M)return M()}finally{D.T=S,s.p=U,s.d.f()}},re.preconnect=function(M,S){typeof M=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,s.d.C(M,S))},re.prefetchDNS=function(M){typeof M=="string"&&s.d.D(M)},re.preinit=function(M,S){if(typeof M=="string"&&S&&typeof S.as=="string"){var U=S.as,G=q(U,S.crossOrigin),Z=typeof S.integrity=="string"?S.integrity:void 0,K=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;U==="style"?s.d.S(M,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:G,integrity:Z,fetchPriority:K}):U==="script"&&s.d.X(M,{crossOrigin:G,integrity:Z,fetchPriority:K,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},re.preinitModule=function(M,S){if(typeof M=="string")if(typeof S=="object"&&S!==null){if(S.as==null||S.as==="script"){var U=q(S.as,S.crossOrigin);s.d.M(M,{crossOrigin:U,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0})}}else S==null&&s.d.M(M)},re.preload=function(M,S){if(typeof M=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){var U=S.as,G=q(U,S.crossOrigin);s.d.L(M,U,{crossOrigin:G,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},re.preloadModule=function(M,S){if(typeof M=="string")if(S){var U=q(S.as,S.crossOrigin);s.d.m(M,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:U,integrity:typeof S.integrity=="string"?S.integrity:void 0})}else s.d.m(M)},re.requestFormReset=function(M){s.d.r(M)},re.unstable_batchedUpdates=function(M,S){return M(S)},re.useFormState=function(M,S,U){return D.H.useFormState(M,S,U)},re.useFormStatus=function(){return D.H.useHostTransitionStatus()},re.version="19.1.0",re}var Cd;function sm(){if(Cd)return ss.exports;Cd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),ss.exports=um(),ss.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd;function cm(){if(kd)return nl;kd=1;var r=om(),o=As(),f=sm();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function v(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function D(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function q(t){if(v(t)!==t)throw Error(s(188))}function M(t){var e=t.alternate;if(!e){if(e=v(t),e===null)throw Error(s(188));return e!==t?null:t}for(var n=t,a=e;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return q(i),t;if(l===a)return q(i),e;l=l.sibling}throw Error(s(188))}if(n.return!==a.return)n=i,a=l;else{for(var c=!1,d=i.child;d;){if(d===n){c=!0,n=i,a=l;break}if(d===a){c=!0,a=i,n=l;break}d=d.sibling}if(!c){for(d=l.child;d;){if(d===n){c=!0,n=l,a=i;break}if(d===a){c=!0,a=l,n=i;break}d=d.sibling}if(!c)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?t:e}function S(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=S(t),e!==null)return e;t=t.sibling}return null}var U=Object.assign,G=Symbol.for("react.element"),Z=Symbol.for("react.transitional.element"),K=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),rt=Symbol.for("react.provider"),ut=Symbol.for("react.consumer"),C=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),J=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function ot(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Symbol.for("react.client.reference");function kt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===yt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case X:return"Fragment";case V:return"Profiler";case j:return"StrictMode";case h:return"Suspense";case g:return"SuspenseList";case k:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case K:return"Portal";case C:return(t.displayName||"Context")+".Provider";case ut:return(t._context.displayName||"Context")+".Consumer";case u:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case y:return e=t.displayName||null,e!==null?e:kt(t.type)||"Memo";case _:e=t._payload,t=t._init;try{return kt(t(e))}catch{}}return null}var wt=Array.isArray,z=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},dt=[],b=-1;function B(t){return{current:t}}function Y(t){0>b||(t.current=dt[b],dt[b]=null,b--)}function P(t,e){b++,dt[b]=t.current,t.current=e}var I=B(null),pt=B(null),at=B(null),Kt=B(null);function Ot(t,e){switch(P(at,e),P(pt,t),P(I,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Ih(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Ih(e),t=td(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(I),P(I,t)}function ae(){Y(I),Y(pt),Y(at)}function Yn(t){t.memoizedState!==null&&P(Kt,t);var e=I.current,n=td(e,t.type);e!==n&&(P(pt,t),P(I,n))}function $e(t){pt.current===t&&(Y(I),Y(pt)),Kt.current===t&&(Y(Kt),$i._currentValue=et)}var Ae=Object.prototype.hasOwnProperty,Xr=r.unstable_scheduleCallback,Zr=r.unstable_cancelCallback,H0=r.unstable_shouldYield,N0=r.unstable_requestPaint,Le=r.unstable_now,U0=r.unstable_getCurrentPriorityLevel,Cs=r.unstable_ImmediatePriority,ks=r.unstable_UserBlockingPriority,cl=r.unstable_NormalPriority,q0=r.unstable_LowPriority,Hs=r.unstable_IdlePriority,B0=r.log,j0=r.unstable_setDisableYieldValue,ii=null,pe=null;function gn(t){if(typeof B0=="function"&&j0(t),pe&&typeof pe.setStrictMode=="function")try{pe.setStrictMode(ii,t)}catch{}}var ge=Math.clz32?Math.clz32:L0,G0=Math.log,Y0=Math.LN2;function L0(t){return t>>>=0,t===0?32:31-(G0(t)/Y0|0)|0}var fl=256,hl=4194304;function Ln(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function dl(t,e,n){var a=t.pendingLanes;if(a===0)return 0;var i=0,l=t.suspendedLanes,c=t.pingedLanes;t=t.warmLanes;var d=a&134217727;return d!==0?(a=d&~l,a!==0?i=Ln(a):(c&=d,c!==0?i=Ln(c):n||(n=d&~t,n!==0&&(i=Ln(n))))):(d=a&~l,d!==0?i=Ln(d):c!==0?i=Ln(c):n||(n=a&~t,n!==0&&(i=Ln(n)))),i===0?0:e!==0&&e!==i&&(e&l)===0&&(l=i&-i,n=e&-e,l>=n||l===32&&(n&4194048)!==0)?e:i}function li(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function P0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ns(){var t=fl;return fl<<=1,(fl&4194048)===0&&(fl=256),t}function Us(){var t=hl;return hl<<=1,(hl&62914560)===0&&(hl=4194304),t}function Qr(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ri(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function X0(t,e,n,a,i,l){var c=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var d=t.entanglements,m=t.expirationTimes,T=t.hiddenUpdates;for(n=c&~n;0<n;){var R=31-ge(n),N=1<<R;d[R]=0,m[R]=-1;var A=T[R];if(A!==null)for(T[R]=null,R=0;R<A.length;R++){var E=A[R];E!==null&&(E.lane&=-536870913)}n&=~N}a!==0&&qs(t,a,0),l!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=l&~(c&~e))}function qs(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-ge(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|n&4194090}function Bs(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var a=31-ge(n),i=1<<a;i&e|t[a]&e&&(t[a]|=e),n&=~i}}function Vr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Kr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function js(){var t=L.p;return t!==0?t:(t=window.event,t===void 0?32:yd(t.type))}function Z0(t,e){var n=L.p;try{return L.p=t,e()}finally{L.p=n}}var mn=Math.random().toString(36).slice(2),ie="__reactFiber$"+mn,ue="__reactProps$"+mn,ca="__reactContainer$"+mn,Jr="__reactEvents$"+mn,Q0="__reactListeners$"+mn,V0="__reactHandles$"+mn,Gs="__reactResources$"+mn,oi="__reactMarker$"+mn;function $r(t){delete t[ie],delete t[ue],delete t[Jr],delete t[Q0],delete t[V0]}function fa(t){var e=t[ie];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ca]||n[ie]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=id(t);t!==null;){if(n=t[ie])return n;t=id(t)}return e}t=n,n=t.parentNode}return null}function ha(t){if(t=t[ie]||t[ca]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function ui(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function da(t){var e=t[Gs];return e||(e=t[Gs]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Jt(t){t[oi]=!0}var Ys=new Set,Ls={};function Pn(t,e){pa(t,e),pa(t+"Capture",e)}function pa(t,e){for(Ls[t]=e,t=0;t<e.length;t++)Ys.add(e[t])}var K0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ps={},Xs={};function J0(t){return Ae.call(Xs,t)?!0:Ae.call(Ps,t)?!1:K0.test(t)?Xs[t]=!0:(Ps[t]=!0,!1)}function pl(t,e,n){if(J0(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function gl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function We(t,e,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+a)}}var Wr,Zs;function ga(t){if(Wr===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wr=e&&e[1]||"",Zs=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wr+t+Zs}var Fr=!1;function Ir(t,e){if(!t||Fr)return"";Fr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(E){var A=E}Reflect.construct(t,[],N)}else{try{N.call()}catch(E){A=E}t.call(N.prototype)}}else{try{throw Error()}catch(E){A=E}(N=t())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(E){if(E&&A&&typeof E.stack=="string")return[E.stack,A.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),c=l[0],d=l[1];if(c&&d){var m=c.split(`
`),T=d.split(`
`);for(i=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;if(a===m.length||i===T.length)for(a=m.length-1,i=T.length-1;1<=a&&0<=i&&m[a]!==T[i];)i--;for(;1<=a&&0<=i;a--,i--)if(m[a]!==T[i]){if(a!==1||i!==1)do if(a--,i--,0>i||m[a]!==T[i]){var R=`
`+m[a].replace(" at new "," at ");return t.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",t.displayName)),R}while(1<=a&&0<=i);break}}}finally{Fr=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?ga(n):""}function $0(t){switch(t.tag){case 26:case 27:case 5:return ga(t.type);case 16:return ga("Lazy");case 13:return ga("Suspense");case 19:return ga("SuspenseList");case 0:case 15:return Ir(t.type,!1);case 11:return Ir(t.type.render,!1);case 1:return Ir(t.type,!0);case 31:return ga("Activity");default:return""}}function Qs(t){try{var e="";do e+=$0(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Ee(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vs(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function W0(t){var e=Vs(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(c){a=""+c,l.call(this,c)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ml(t){t._valueTracker||(t._valueTracker=W0(t))}function Ks(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),a="";return t&&(a=Vs(t)?t.checked?"true":"false":t.value),t=a,t!==n?(e.setValue(t),!0):!1}function bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var F0=/[\n"\\]/g;function _e(t){return t.replace(F0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function to(t,e,n,a,i,l,c,d){t.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.type=c:t.removeAttribute("type"),e!=null?c==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ee(e)):t.value!==""+Ee(e)&&(t.value=""+Ee(e)):c!=="submit"&&c!=="reset"||t.removeAttribute("value"),e!=null?eo(t,c,Ee(e)):n!=null?eo(t,c,Ee(n)):a!=null&&t.removeAttribute("value"),i==null&&l!=null&&(t.defaultChecked=!!l),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.name=""+Ee(d):t.removeAttribute("name")}function Js(t,e,n,a,i,l,c,d){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(t.type=l),e!=null||n!=null){if(!(l!=="submit"&&l!=="reset"||e!=null))return;n=n!=null?""+Ee(n):"",e=e!=null?""+Ee(e):n,d||e===t.value||(t.value=e),t.defaultValue=e}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=d?t.checked:!!a,t.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.name=c)}function eo(t,e,n){e==="number"&&bl(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function ma(t,e,n,a){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&a&&(t[n].defaultSelected=!0)}else{for(n=""+Ee(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,a&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function $s(t,e,n){if(e!=null&&(e=""+Ee(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Ee(n):""}function Ws(t,e,n,a){if(e==null){if(a!=null){if(n!=null)throw Error(s(92));if(wt(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),e=n}n=Ee(e),t.defaultValue=n,a=t.textContent,a===n&&a!==""&&a!==null&&(t.value=a)}function ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var I0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fs(t,e,n){var a=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,n):typeof n!="number"||n===0||I0.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Is(t,e,n){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var i in e)a=e[i],e.hasOwnProperty(i)&&n[i]!==a&&Fs(t,i,a)}else for(var l in e)e.hasOwnProperty(l)&&Fs(t,l,e[l])}function no(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ep=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vl(t){return ep.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var ao=null;function io(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var va=null,ya=null;function tc(t){var e=ha(t);if(e&&(t=e.stateNode)){var n=t[ue]||null;t:switch(t=e.stateNode,e.type){case"input":if(to(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+_e(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var a=n[e];if(a!==t&&a.form===t.form){var i=a[ue]||null;if(!i)throw Error(s(90));to(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<n.length;e++)a=n[e],a.form===t.form&&Ks(a)}break t;case"textarea":$s(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&ma(t,!!n.multiple,e,!1)}}}var lo=!1;function ec(t,e,n){if(lo)return t(e,n);lo=!0;try{var a=t(e);return a}finally{if(lo=!1,(va!==null||ya!==null)&&(ar(),va&&(e=va,t=ya,ya=va=null,tc(e),t)))for(e=0;e<t.length;e++)tc(t[e])}}function si(t,e){var n=t.stateNode;if(n===null)return null;var a=n[ue]||null;if(a===null)return null;n=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(s(231,e,typeof n));return n}var Fe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ro=!1;if(Fe)try{var ci={};Object.defineProperty(ci,"passive",{get:function(){ro=!0}}),window.addEventListener("test",ci,ci),window.removeEventListener("test",ci,ci)}catch{ro=!1}var bn=null,oo=null,yl=null;function nc(){if(yl)return yl;var t,e=oo,n=e.length,a,i="value"in bn?bn.value:bn.textContent,l=i.length;for(t=0;t<n&&e[t]===i[t];t++);var c=n-t;for(a=1;a<=c&&e[n-a]===i[l-a];a++);return yl=i.slice(t,1<a?1-a:void 0)}function xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Sl(){return!0}function ac(){return!1}function se(t){function e(n,a,i,l,c){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=c,this.currentTarget=null;for(var d in t)t.hasOwnProperty(d)&&(n=t[d],this[d]=n?n(l):l[d]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Sl:ac,this.isPropagationStopped=ac,this}return U(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),e}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wl=se(Xn),fi=U({},Xn,{view:0,detail:0}),np=se(fi),uo,so,hi,Ol=U({},fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hi&&(hi&&t.type==="mousemove"?(uo=t.screenX-hi.screenX,so=t.screenY-hi.screenY):so=uo=0,hi=t),uo)},movementY:function(t){return"movementY"in t?t.movementY:so}}),ic=se(Ol),ap=U({},Ol,{dataTransfer:0}),ip=se(ap),lp=U({},fi,{relatedTarget:0}),co=se(lp),rp=U({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),op=se(rp),up=U({},Xn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sp=se(up),cp=U({},Xn,{data:0}),lc=se(cp),fp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pp(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dp[t])?!!e[t]:!1}function fo(){return pp}var gp=U({},fi,{key:function(t){if(t.key){var e=fp[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fo,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mp=se(gp),bp=U({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rc=se(bp),vp=U({},fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fo}),yp=se(vp),xp=U({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sp=se(xp),wp=U({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Op=se(wp),Tp=U({},Xn,{newState:0,oldState:0}),Ap=se(Tp),Ep=[9,13,27,32],ho=Fe&&"CompositionEvent"in window,di=null;Fe&&"documentMode"in document&&(di=document.documentMode);var _p=Fe&&"TextEvent"in window&&!di,oc=Fe&&(!ho||di&&8<di&&11>=di),uc=" ",sc=!1;function cc(t,e){switch(t){case"keyup":return Ep.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xa=!1;function Dp(t,e){switch(t){case"compositionend":return fc(e);case"keypress":return e.which!==32?null:(sc=!0,uc);case"textInput":return t=e.data,t===uc&&sc?null:t;default:return null}}function Mp(t,e){if(xa)return t==="compositionend"||!ho&&cc(t,e)?(t=nc(),yl=oo=bn=null,xa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return oc&&e.locale!=="ko"?null:e.data;default:return null}}var zp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zp[t.type]:e==="textarea"}function dc(t,e,n,a){va?ya?ya.push(a):ya=[a]:va=a,e=sr(e,"onChange"),0<e.length&&(n=new wl("onChange","change",null,n,a),t.push({event:n,listeners:e}))}var pi=null,gi=null;function Rp(t){Kh(t,0)}function Tl(t){var e=ui(t);if(Ks(e))return t}function pc(t,e){if(t==="change")return e}var gc=!1;if(Fe){var po;if(Fe){var go="oninput"in document;if(!go){var mc=document.createElement("div");mc.setAttribute("oninput","return;"),go=typeof mc.oninput=="function"}po=go}else po=!1;gc=po&&(!document.documentMode||9<document.documentMode)}function bc(){pi&&(pi.detachEvent("onpropertychange",vc),gi=pi=null)}function vc(t){if(t.propertyName==="value"&&Tl(gi)){var e=[];dc(e,gi,t,io(t)),ec(Rp,e)}}function Cp(t,e,n){t==="focusin"?(bc(),pi=e,gi=n,pi.attachEvent("onpropertychange",vc)):t==="focusout"&&bc()}function kp(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tl(gi)}function Hp(t,e){if(t==="click")return Tl(e)}function Np(t,e){if(t==="input"||t==="change")return Tl(e)}function Up(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var me=typeof Object.is=="function"?Object.is:Up;function mi(t,e){if(me(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!Ae.call(e,i)||!me(t[i],e[i]))return!1}return!0}function yc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xc(t,e){var n=yc(t);t=0;for(var a;n;){if(n.nodeType===3){if(a=t+n.textContent.length,t<=e&&a>=e)return{node:n,offset:e-t};t=a}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=yc(n)}}function Sc(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sc(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function wc(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=bl(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=bl(t.document)}return e}function mo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var qp=Fe&&"documentMode"in document&&11>=document.documentMode,Sa=null,bo=null,bi=null,vo=!1;function Oc(t,e,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vo||Sa==null||Sa!==bl(a)||(a=Sa,"selectionStart"in a&&mo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),bi&&mi(bi,a)||(bi=a,a=sr(bo,"onSelect"),0<a.length&&(e=new wl("onSelect","select",null,e,n),t.push({event:e,listeners:a}),e.target=Sa)))}function Zn(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var wa={animationend:Zn("Animation","AnimationEnd"),animationiteration:Zn("Animation","AnimationIteration"),animationstart:Zn("Animation","AnimationStart"),transitionrun:Zn("Transition","TransitionRun"),transitionstart:Zn("Transition","TransitionStart"),transitioncancel:Zn("Transition","TransitionCancel"),transitionend:Zn("Transition","TransitionEnd")},yo={},Tc={};Fe&&(Tc=document.createElement("div").style,"AnimationEvent"in window||(delete wa.animationend.animation,delete wa.animationiteration.animation,delete wa.animationstart.animation),"TransitionEvent"in window||delete wa.transitionend.transition);function Qn(t){if(yo[t])return yo[t];if(!wa[t])return t;var e=wa[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Tc)return yo[t]=e[n];return t}var Ac=Qn("animationend"),Ec=Qn("animationiteration"),_c=Qn("animationstart"),Bp=Qn("transitionrun"),jp=Qn("transitionstart"),Gp=Qn("transitioncancel"),Dc=Qn("transitionend"),Mc=new Map,xo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xo.push("scrollEnd");function Ue(t,e){Mc.set(t,e),Pn(e,[t])}var zc=new WeakMap;function De(t,e){if(typeof t=="object"&&t!==null){var n=zc.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Qs(e)},zc.set(t,e),e)}return{value:t,source:e,stack:Qs(e)}}var Me=[],Oa=0,So=0;function Al(){for(var t=Oa,e=So=Oa=0;e<t;){var n=Me[e];Me[e++]=null;var a=Me[e];Me[e++]=null;var i=Me[e];Me[e++]=null;var l=Me[e];if(Me[e++]=null,a!==null&&i!==null){var c=a.pending;c===null?i.next=i:(i.next=c.next,c.next=i),a.pending=i}l!==0&&Rc(n,i,l)}}function El(t,e,n,a){Me[Oa++]=t,Me[Oa++]=e,Me[Oa++]=n,Me[Oa++]=a,So|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function wo(t,e,n,a){return El(t,e,n,a),_l(t)}function Ta(t,e){return El(t,null,null,e),_l(t)}function Rc(t,e,n){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n);for(var i=!1,l=t.return;l!==null;)l.childLanes|=n,a=l.alternate,a!==null&&(a.childLanes|=n),l.tag===22&&(t=l.stateNode,t===null||t._visibility&1||(i=!0)),t=l,l=l.return;return t.tag===3?(l=t.stateNode,i&&e!==null&&(i=31-ge(n),t=l.hiddenUpdates,a=t[i],a===null?t[i]=[e]:a.push(e),e.lane=n|536870912),l):null}function _l(t){if(50<Li)throw Li=0,Du=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Aa={};function Yp(t,e,n,a){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(t,e,n,a){return new Yp(t,e,n,a)}function Oo(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ie(t,e){var n=t.alternate;return n===null?(n=be(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Cc(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Dl(t,e,n,a,i,l){var c=0;if(a=t,typeof t=="function")Oo(t)&&(c=1);else if(typeof t=="string")c=Pg(t,n,I.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case k:return t=be(31,n,e,i),t.elementType=k,t.lanes=l,t;case X:return Vn(n.children,i,l,e);case j:c=8,i|=24;break;case V:return t=be(12,n,e,i|2),t.elementType=V,t.lanes=l,t;case h:return t=be(13,n,e,i),t.elementType=h,t.lanes=l,t;case g:return t=be(19,n,e,i),t.elementType=g,t.lanes=l,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rt:case C:c=10;break t;case ut:c=9;break t;case u:c=11;break t;case y:c=14;break t;case _:c=16,a=null;break t}c=29,n=Error(s(130,t===null?"null":typeof t,"")),a=null}return e=be(c,n,e,i),e.elementType=t,e.type=a,e.lanes=l,e}function Vn(t,e,n,a){return t=be(7,t,a,e),t.lanes=n,t}function To(t,e,n){return t=be(6,t,null,e),t.lanes=n,t}function Ao(t,e,n){return e=be(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ea=[],_a=0,Ml=null,zl=0,ze=[],Re=0,Kn=null,tn=1,en="";function Jn(t,e){Ea[_a++]=zl,Ea[_a++]=Ml,Ml=t,zl=e}function kc(t,e,n){ze[Re++]=tn,ze[Re++]=en,ze[Re++]=Kn,Kn=t;var a=tn;t=en;var i=32-ge(a)-1;a&=~(1<<i),n+=1;var l=32-ge(e)+i;if(30<l){var c=i-i%5;l=(a&(1<<c)-1).toString(32),a>>=c,i-=c,tn=1<<32-ge(e)+i|n<<i|a,en=l+t}else tn=1<<l|n<<i|a,en=t}function Eo(t){t.return!==null&&(Jn(t,1),kc(t,1,0))}function _o(t){for(;t===Ml;)Ml=Ea[--_a],Ea[_a]=null,zl=Ea[--_a],Ea[_a]=null;for(;t===Kn;)Kn=ze[--Re],ze[Re]=null,en=ze[--Re],ze[Re]=null,tn=ze[--Re],ze[Re]=null}var oe=null,qt=null,St=!1,$n=null,Pe=!1,Do=Error(s(519));function Wn(t){var e=Error(s(418,""));throw xi(De(e,t)),Do}function Hc(t){var e=t.stateNode,n=t.type,a=t.memoizedProps;switch(e[ie]=t,e[ue]=a,n){case"dialog":mt("cancel",e),mt("close",e);break;case"iframe":case"object":case"embed":mt("load",e);break;case"video":case"audio":for(n=0;n<Xi.length;n++)mt(Xi[n],e);break;case"source":mt("error",e);break;case"img":case"image":case"link":mt("error",e),mt("load",e);break;case"details":mt("toggle",e);break;case"input":mt("invalid",e),Js(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),ml(e);break;case"select":mt("invalid",e);break;case"textarea":mt("invalid",e),Ws(e,a.value,a.defaultValue,a.children),ml(e)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||a.suppressHydrationWarning===!0||Fh(e.textContent,n)?(a.popover!=null&&(mt("beforetoggle",e),mt("toggle",e)),a.onScroll!=null&&mt("scroll",e),a.onScrollEnd!=null&&mt("scrollend",e),a.onClick!=null&&(e.onclick=cr),e=!0):e=!1,e||Wn(t)}function Nc(t){for(oe=t.return;oe;)switch(oe.tag){case 5:case 13:Pe=!1;return;case 27:case 3:Pe=!0;return;default:oe=oe.return}}function vi(t){if(t!==oe)return!1;if(!St)return Nc(t),St=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Xu(t.type,t.memoizedProps)),n=!n),n&&qt&&Wn(t),Nc(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){qt=Be(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}qt=null}}else e===27?(e=qt,kn(t.type)?(t=Ku,Ku=null,qt=t):qt=e):qt=oe?Be(t.stateNode.nextSibling):null;return!0}function yi(){qt=oe=null,St=!1}function Uc(){var t=$n;return t!==null&&(he===null?he=t:he.push.apply(he,t),$n=null),t}function xi(t){$n===null?$n=[t]:$n.push(t)}var Mo=B(null),Fn=null,nn=null;function vn(t,e,n){P(Mo,e._currentValue),e._currentValue=n}function an(t){t._currentValue=Mo.current,Y(Mo)}function zo(t,e,n){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===n)break;t=t.return}}function Ro(t,e,n,a){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){var c=i.child;l=l.firstContext;t:for(;l!==null;){var d=l;l=i;for(var m=0;m<e.length;m++)if(d.context===e[m]){l.lanes|=n,d=l.alternate,d!==null&&(d.lanes|=n),zo(l.return,n,t),a||(c=null);break t}l=d.next}}else if(i.tag===18){if(c=i.return,c===null)throw Error(s(341));c.lanes|=n,l=c.alternate,l!==null&&(l.lanes|=n),zo(c,n,t),c=null}else c=i.child;if(c!==null)c.return=i;else for(c=i;c!==null;){if(c===t){c=null;break}if(i=c.sibling,i!==null){i.return=c.return,c=i;break}c=c.return}i=c}}function Si(t,e,n,a){t=null;for(var i=e,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var c=i.alternate;if(c===null)throw Error(s(387));if(c=c.memoizedProps,c!==null){var d=i.type;me(i.pendingProps.value,c.value)||(t!==null?t.push(d):t=[d])}}else if(i===Kt.current){if(c=i.alternate,c===null)throw Error(s(387));c.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push($i):t=[$i])}i=i.return}t!==null&&Ro(e,t,n,a),e.flags|=262144}function Rl(t){for(t=t.firstContext;t!==null;){if(!me(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function In(t){Fn=t,nn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function le(t){return qc(Fn,t)}function Cl(t,e){return Fn===null&&In(t),qc(t,e)}function qc(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},nn===null){if(t===null)throw Error(s(308));nn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else nn=nn.next=e;return n}var Lp=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Pp=r.unstable_scheduleCallback,Xp=r.unstable_NormalPriority,Zt={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Co(){return{controller:new Lp,data:new Map,refCount:0}}function wi(t){t.refCount--,t.refCount===0&&Pp(Xp,function(){t.controller.abort()})}var Oi=null,ko=0,Da=0,Ma=null;function Zp(t,e){if(Oi===null){var n=Oi=[];ko=0,Da=Nu(),Ma={status:"pending",value:void 0,then:function(a){n.push(a)}}}return ko++,e.then(Bc,Bc),e}function Bc(){if(--ko===0&&Oi!==null){Ma!==null&&(Ma.status="fulfilled");var t=Oi;Oi=null,Da=0,Ma=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Qp(t,e){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var i=0;i<n.length;i++)(0,n[i])(e)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var jc=z.S;z.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Zp(t,e),jc!==null&&jc(t,e)};var ta=B(null);function Ho(){var t=ta.current;return t!==null?t:Rt.pooledCache}function kl(t,e){e===null?P(ta,ta.current):P(ta,e.pool)}function Gc(){var t=Ho();return t===null?null:{parent:Zt._currentValue,pool:t}}var Ti=Error(s(460)),Yc=Error(s(474)),Hl=Error(s(542)),No={then:function(){}};function Lc(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Nl(){}function Pc(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Nl,Nl),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Zc(t),t;default:if(typeof e.status=="string")e.then(Nl,Nl);else{if(t=Rt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=a}},function(a){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Zc(t),t}throw Ai=e,Ti}}var Ai=null;function Xc(){if(Ai===null)throw Error(s(459));var t=Ai;return Ai=null,t}function Zc(t){if(t===Ti||t===Hl)throw Error(s(483))}var yn=!1;function Uo(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qo(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function xn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Sn(t,e,n){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(At&2)!==0){var i=a.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),a.pending=e,e=_l(t),Rc(t,null,n),e}return El(t,a,e,n),_l(t)}function Ei(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,Bs(t,n)}}function Bo(t,e){var n=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var c={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};l===null?i=l=c:l=l.next=c,n=n.next}while(n!==null);l===null?i=l=e:l=l.next=e}else i=l=e;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var jo=!1;function _i(){if(jo){var t=Ma;if(t!==null)throw t}}function Di(t,e,n,a){jo=!1;var i=t.updateQueue;yn=!1;var l=i.firstBaseUpdate,c=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var m=d,T=m.next;m.next=null,c===null?l=T:c.next=T,c=m;var R=t.alternate;R!==null&&(R=R.updateQueue,d=R.lastBaseUpdate,d!==c&&(d===null?R.firstBaseUpdate=T:d.next=T,R.lastBaseUpdate=m))}if(l!==null){var N=i.baseState;c=0,R=T=m=null,d=l;do{var A=d.lane&-536870913,E=A!==d.lane;if(E?(bt&A)===A:(a&A)===A){A!==0&&A===Da&&(jo=!0),R!==null&&(R=R.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});t:{var lt=t,nt=d;A=e;var Mt=n;switch(nt.tag){case 1:if(lt=nt.payload,typeof lt=="function"){N=lt.call(Mt,N,A);break t}N=lt;break t;case 3:lt.flags=lt.flags&-65537|128;case 0:if(lt=nt.payload,A=typeof lt=="function"?lt.call(Mt,N,A):lt,A==null)break t;N=U({},N,A);break t;case 2:yn=!0}}A=d.callback,A!==null&&(t.flags|=64,E&&(t.flags|=8192),E=i.callbacks,E===null?i.callbacks=[A]:E.push(A))}else E={lane:A,tag:d.tag,payload:d.payload,callback:d.callback,next:null},R===null?(T=R=E,m=N):R=R.next=E,c|=A;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;E=d,d=E.next,E.next=null,i.lastBaseUpdate=E,i.shared.pending=null}}while(!0);R===null&&(m=N),i.baseState=m,i.firstBaseUpdate=T,i.lastBaseUpdate=R,l===null&&(i.shared.lanes=0),Mn|=c,t.lanes=c,t.memoizedState=N}}function Qc(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Vc(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Qc(n[t],e)}var za=B(null),Ul=B(0);function Kc(t,e){t=fn,P(Ul,t),P(za,e),fn=t|e.baseLanes}function Go(){P(Ul,fn),P(za,za.current)}function Yo(){fn=Ul.current,Y(za),Y(Ul)}var wn=0,ft=null,_t=null,Yt=null,ql=!1,Ra=!1,ea=!1,Bl=0,Mi=0,Ca=null,Vp=0;function jt(){throw Error(s(321))}function Lo(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!me(t[n],e[n]))return!1;return!0}function Po(t,e,n,a,i,l){return wn=l,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,z.H=t===null||t.memoizedState===null?Cf:kf,ea=!1,l=n(a,i),ea=!1,Ra&&(l=$c(e,n,a,i)),Jc(t),l}function Jc(t){z.H=Xl;var e=_t!==null&&_t.next!==null;if(wn=0,Yt=_t=ft=null,ql=!1,Mi=0,Ca=null,e)throw Error(s(300));t===null||$t||(t=t.dependencies,t!==null&&Rl(t)&&($t=!0))}function $c(t,e,n,a){ft=t;var i=0;do{if(Ra&&(Ca=null),Mi=0,Ra=!1,25<=i)throw Error(s(301));if(i+=1,Yt=_t=null,t.updateQueue!=null){var l=t.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}z.H=tg,l=e(n,a)}while(Ra);return l}function Kp(){var t=z.H,e=t.useState()[0];return e=typeof e.then=="function"?zi(e):e,t=t.useState()[0],(_t!==null?_t.memoizedState:null)!==t&&(ft.flags|=1024),e}function Xo(){var t=Bl!==0;return Bl=0,t}function Zo(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Qo(t){if(ql){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ql=!1}wn=0,Yt=_t=ft=null,Ra=!1,Mi=Bl=0,Ca=null}function ce(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yt===null?ft.memoizedState=Yt=t:Yt=Yt.next=t,Yt}function Lt(){if(_t===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var e=Yt===null?ft.memoizedState:Yt.next;if(e!==null)Yt=e,_t=t;else{if(t===null)throw ft.alternate===null?Error(s(467)):Error(s(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Yt===null?ft.memoizedState=Yt=t:Yt=Yt.next=t}return Yt}function Vo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zi(t){var e=Mi;return Mi+=1,Ca===null&&(Ca=[]),t=Pc(Ca,t,e),e=ft,(Yt===null?e.memoizedState:Yt.next)===null&&(e=e.alternate,z.H=e===null||e.memoizedState===null?Cf:kf),t}function jl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return zi(t);if(t.$$typeof===C)return le(t)}throw Error(s(438,String(t)))}function Ko(t){var e=null,n=ft.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var a=ft.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Vo(),ft.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),a=0;a<t;a++)n[a]=J;return e.index++,n}function ln(t,e){return typeof e=="function"?e(t):e}function Gl(t){var e=Lt();return Jo(e,_t,t)}function Jo(t,e,n){var a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var i=t.baseQueue,l=a.pending;if(l!==null){if(i!==null){var c=i.next;i.next=l.next,l.next=c}e.baseQueue=i=l,a.pending=null}if(l=t.baseState,i===null)t.memoizedState=l;else{e=i.next;var d=c=null,m=null,T=e,R=!1;do{var N=T.lane&-536870913;if(N!==T.lane?(bt&N)===N:(wn&N)===N){var A=T.revertLane;if(A===0)m!==null&&(m=m.next={lane:0,revertLane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),N===Da&&(R=!0);else if((wn&A)===A){T=T.next,A===Da&&(R=!0);continue}else N={lane:0,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},m===null?(d=m=N,c=l):m=m.next=N,ft.lanes|=A,Mn|=A;N=T.action,ea&&n(l,N),l=T.hasEagerState?T.eagerState:n(l,N)}else A={lane:N,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},m===null?(d=m=A,c=l):m=m.next=A,ft.lanes|=N,Mn|=N;T=T.next}while(T!==null&&T!==e);if(m===null?c=l:m.next=d,!me(l,t.memoizedState)&&($t=!0,R&&(n=Ma,n!==null)))throw n;t.memoizedState=l,t.baseState=c,t.baseQueue=m,a.lastRenderedState=l}return i===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function $o(t){var e=Lt(),n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=t;var a=n.dispatch,i=n.pending,l=e.memoizedState;if(i!==null){n.pending=null;var c=i=i.next;do l=t(l,c.action),c=c.next;while(c!==i);me(l,e.memoizedState)||($t=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),n.lastRenderedState=l}return[l,a]}function Wc(t,e,n){var a=ft,i=Lt(),l=St;if(l){if(n===void 0)throw Error(s(407));n=n()}else n=e();var c=!me((_t||i).memoizedState,n);c&&(i.memoizedState=n,$t=!0),i=i.queue;var d=tf.bind(null,a,i,t);if(Ri(2048,8,d,[t]),i.getSnapshot!==e||c||Yt!==null&&Yt.memoizedState.tag&1){if(a.flags|=2048,ka(9,Yl(),Ic.bind(null,a,i,n,e),null),Rt===null)throw Error(s(349));l||(wn&124)!==0||Fc(a,e,n)}return n}function Fc(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e=Vo(),ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ic(t,e,n,a){e.value=n,e.getSnapshot=a,ef(e)&&nf(t)}function tf(t,e,n){return n(function(){ef(e)&&nf(t)})}function ef(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!me(t,n)}catch{return!0}}function nf(t){var e=Ta(t,2);e!==null&&we(e,t,2)}function Wo(t){var e=ce();if(typeof t=="function"){var n=t;if(t=n(),ea){gn(!0);try{n()}finally{gn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ln,lastRenderedState:t},e}function af(t,e,n,a){return t.baseState=n,Jo(t,_t,typeof a=="function"?a:ln)}function Jp(t,e,n,a,i){if(Pl(t))throw Error(s(485));if(t=e.action,t!==null){var l={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){l.listeners.push(c)}};z.T!==null?n(!0):l.isTransition=!1,a(l),n=e.pending,n===null?(l.next=e.pending=l,lf(e,l)):(l.next=n.next,e.pending=n.next=l)}}function lf(t,e){var n=e.action,a=e.payload,i=t.state;if(e.isTransition){var l=z.T,c={};z.T=c;try{var d=n(i,a),m=z.S;m!==null&&m(c,d),rf(t,e,d)}catch(T){Fo(t,e,T)}finally{z.T=l}}else try{l=n(i,a),rf(t,e,l)}catch(T){Fo(t,e,T)}}function rf(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){of(t,e,a)},function(a){return Fo(t,e,a)}):of(t,e,n)}function of(t,e,n){e.status="fulfilled",e.value=n,uf(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,lf(t,n)))}function Fo(t,e,n){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=n,uf(e),e=e.next;while(e!==a)}t.action=null}function uf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function sf(t,e){return e}function cf(t,e){if(St){var n=Rt.formState;if(n!==null){t:{var a=ft;if(St){if(qt){e:{for(var i=qt,l=Pe;i.nodeType!==8;){if(!l){i=null;break e}if(i=Be(i.nextSibling),i===null){i=null;break e}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){qt=Be(i.nextSibling),a=i.data==="F!";break t}}Wn(a)}a=!1}a&&(e=n[0])}}return n=ce(),n.memoizedState=n.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sf,lastRenderedState:e},n.queue=a,n=Mf.bind(null,ft,a),a.dispatch=n,a=Wo(!1),l=au.bind(null,ft,!1,a.queue),a=ce(),i={state:e,dispatch:null,action:t,pending:null},a.queue=i,n=Jp.bind(null,ft,i,l,n),i.dispatch=n,a.memoizedState=t,[e,n,!1]}function ff(t){var e=Lt();return hf(e,_t,t)}function hf(t,e,n){if(e=Jo(t,e,sf)[0],t=Gl(ln)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=zi(e)}catch(c){throw c===Ti?Hl:c}else a=e;e=Lt();var i=e.queue,l=i.dispatch;return n!==e.memoizedState&&(ft.flags|=2048,ka(9,Yl(),$p.bind(null,i,n),null)),[a,l,t]}function $p(t,e){t.action=e}function df(t){var e=Lt(),n=_t;if(n!==null)return hf(e,n,t);Lt(),e=e.memoizedState,n=Lt();var a=n.queue.dispatch;return n.memoizedState=t,[e,a,!1]}function ka(t,e,n,a){return t={tag:t,create:n,deps:a,inst:e,next:null},e=ft.updateQueue,e===null&&(e=Vo(),ft.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(a=n.next,n.next=t,t.next=a,e.lastEffect=t),t}function Yl(){return{destroy:void 0,resource:void 0}}function pf(){return Lt().memoizedState}function Ll(t,e,n,a){var i=ce();a=a===void 0?null:a,ft.flags|=t,i.memoizedState=ka(1|e,Yl(),n,a)}function Ri(t,e,n,a){var i=Lt();a=a===void 0?null:a;var l=i.memoizedState.inst;_t!==null&&a!==null&&Lo(a,_t.memoizedState.deps)?i.memoizedState=ka(e,l,n,a):(ft.flags|=t,i.memoizedState=ka(1|e,l,n,a))}function gf(t,e){Ll(8390656,8,t,e)}function mf(t,e){Ri(2048,8,t,e)}function bf(t,e){return Ri(4,2,t,e)}function vf(t,e){return Ri(4,4,t,e)}function yf(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xf(t,e,n){n=n!=null?n.concat([t]):null,Ri(4,4,yf.bind(null,e,t),n)}function Io(){}function Sf(t,e){var n=Lt();e=e===void 0?null:e;var a=n.memoizedState;return e!==null&&Lo(e,a[1])?a[0]:(n.memoizedState=[t,e],t)}function wf(t,e){var n=Lt();e=e===void 0?null:e;var a=n.memoizedState;if(e!==null&&Lo(e,a[1]))return a[0];if(a=t(),ea){gn(!0);try{t()}finally{gn(!1)}}return n.memoizedState=[a,e],a}function tu(t,e,n){return n===void 0||(wn&1073741824)!==0?t.memoizedState=e:(t.memoizedState=n,t=Ah(),ft.lanes|=t,Mn|=t,n)}function Of(t,e,n,a){return me(n,e)?n:za.current!==null?(t=tu(t,n,a),me(t,e)||($t=!0),t):(wn&42)===0?($t=!0,t.memoizedState=n):(t=Ah(),ft.lanes|=t,Mn|=t,e)}function Tf(t,e,n,a,i){var l=L.p;L.p=l!==0&&8>l?l:8;var c=z.T,d={};z.T=d,au(t,!1,e,n);try{var m=i(),T=z.S;if(T!==null&&T(d,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var R=Qp(m,a);Ci(t,e,R,Se(t))}else Ci(t,e,a,Se(t))}catch(N){Ci(t,e,{then:function(){},status:"rejected",reason:N},Se())}finally{L.p=l,z.T=c}}function Wp(){}function eu(t,e,n,a){if(t.tag!==5)throw Error(s(476));var i=Af(t).queue;Tf(t,i,e,et,n===null?Wp:function(){return Ef(t),n(a)})}function Af(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ln,lastRenderedState:et},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ln,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Ef(t){var e=Af(t).next.queue;Ci(t,e,{},Se())}function nu(){return le($i)}function _f(){return Lt().memoizedState}function Df(){return Lt().memoizedState}function Fp(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Se();t=xn(n);var a=Sn(e,t,n);a!==null&&(we(a,e,n),Ei(a,e,n)),e={cache:Co()},t.payload=e;return}e=e.return}}function Ip(t,e,n){var a=Se();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Pl(t)?zf(e,n):(n=wo(t,e,n,a),n!==null&&(we(n,t,a),Rf(n,e,a)))}function Mf(t,e,n){var a=Se();Ci(t,e,n,a)}function Ci(t,e,n,a){var i={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pl(t))zf(e,i);else{var l=t.alternate;if(t.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var c=e.lastRenderedState,d=l(c,n);if(i.hasEagerState=!0,i.eagerState=d,me(d,c))return El(t,e,i,0),Rt===null&&Al(),!1}catch{}finally{}if(n=wo(t,e,i,a),n!==null)return we(n,t,a),Rf(n,e,a),!0}return!1}function au(t,e,n,a){if(a={lane:2,revertLane:Nu(),action:a,hasEagerState:!1,eagerState:null,next:null},Pl(t)){if(e)throw Error(s(479))}else e=wo(t,n,a,2),e!==null&&we(e,t,2)}function Pl(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function zf(t,e){Ra=ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Rf(t,e,n){if((n&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,Bs(t,n)}}var Xl={readContext:le,use:jl,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useLayoutEffect:jt,useInsertionEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useSyncExternalStore:jt,useId:jt,useHostTransitionStatus:jt,useFormState:jt,useActionState:jt,useOptimistic:jt,useMemoCache:jt,useCacheRefresh:jt},Cf={readContext:le,use:jl,useCallback:function(t,e){return ce().memoizedState=[t,e===void 0?null:e],t},useContext:le,useEffect:gf,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Ll(4194308,4,yf.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ll(4194308,4,t,e)},useInsertionEffect:function(t,e){Ll(4,2,t,e)},useMemo:function(t,e){var n=ce();e=e===void 0?null:e;var a=t();if(ea){gn(!0);try{t()}finally{gn(!1)}}return n.memoizedState=[a,e],a},useReducer:function(t,e,n){var a=ce();if(n!==void 0){var i=n(e);if(ea){gn(!0);try{n(e)}finally{gn(!1)}}}else i=e;return a.memoizedState=a.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=Ip.bind(null,ft,t),[a.memoizedState,t]},useRef:function(t){var e=ce();return t={current:t},e.memoizedState=t},useState:function(t){t=Wo(t);var e=t.queue,n=Mf.bind(null,ft,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Io,useDeferredValue:function(t,e){var n=ce();return tu(n,t,e)},useTransition:function(){var t=Wo(!1);return t=Tf.bind(null,ft,t.queue,!0,!1),ce().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var a=ft,i=ce();if(St){if(n===void 0)throw Error(s(407));n=n()}else{if(n=e(),Rt===null)throw Error(s(349));(bt&124)!==0||Fc(a,e,n)}i.memoizedState=n;var l={value:n,getSnapshot:e};return i.queue=l,gf(tf.bind(null,a,l,t),[t]),a.flags|=2048,ka(9,Yl(),Ic.bind(null,a,l,n,e),null),n},useId:function(){var t=ce(),e=Rt.identifierPrefix;if(St){var n=en,a=tn;n=(a&~(1<<32-ge(a)-1)).toString(32)+n,e="«"+e+"R"+n,n=Bl++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=Vp++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:nu,useFormState:cf,useActionState:cf,useOptimistic:function(t){var e=ce();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=au.bind(null,ft,!0,n),n.dispatch=e,[t,e]},useMemoCache:Ko,useCacheRefresh:function(){return ce().memoizedState=Fp.bind(null,ft)}},kf={readContext:le,use:jl,useCallback:Sf,useContext:le,useEffect:mf,useImperativeHandle:xf,useInsertionEffect:bf,useLayoutEffect:vf,useMemo:wf,useReducer:Gl,useRef:pf,useState:function(){return Gl(ln)},useDebugValue:Io,useDeferredValue:function(t,e){var n=Lt();return Of(n,_t.memoizedState,t,e)},useTransition:function(){var t=Gl(ln)[0],e=Lt().memoizedState;return[typeof t=="boolean"?t:zi(t),e]},useSyncExternalStore:Wc,useId:_f,useHostTransitionStatus:nu,useFormState:ff,useActionState:ff,useOptimistic:function(t,e){var n=Lt();return af(n,_t,t,e)},useMemoCache:Ko,useCacheRefresh:Df},tg={readContext:le,use:jl,useCallback:Sf,useContext:le,useEffect:mf,useImperativeHandle:xf,useInsertionEffect:bf,useLayoutEffect:vf,useMemo:wf,useReducer:$o,useRef:pf,useState:function(){return $o(ln)},useDebugValue:Io,useDeferredValue:function(t,e){var n=Lt();return _t===null?tu(n,t,e):Of(n,_t.memoizedState,t,e)},useTransition:function(){var t=$o(ln)[0],e=Lt().memoizedState;return[typeof t=="boolean"?t:zi(t),e]},useSyncExternalStore:Wc,useId:_f,useHostTransitionStatus:nu,useFormState:df,useActionState:df,useOptimistic:function(t,e){var n=Lt();return _t!==null?af(n,_t,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Ko,useCacheRefresh:Df},Ha=null,ki=0;function Zl(t){var e=ki;return ki+=1,Ha===null&&(Ha=[]),Pc(Ha,t,e)}function Hi(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Ql(t,e){throw e.$$typeof===G?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Hf(t){var e=t._init;return e(t._payload)}function Nf(t){function e(w,x){if(t){var O=w.deletions;O===null?(w.deletions=[x],w.flags|=16):O.push(x)}}function n(w,x){if(!t)return null;for(;x!==null;)e(w,x),x=x.sibling;return null}function a(w){for(var x=new Map;w!==null;)w.key!==null?x.set(w.key,w):x.set(w.index,w),w=w.sibling;return x}function i(w,x){return w=Ie(w,x),w.index=0,w.sibling=null,w}function l(w,x,O){return w.index=O,t?(O=w.alternate,O!==null?(O=O.index,O<x?(w.flags|=67108866,x):O):(w.flags|=67108866,x)):(w.flags|=1048576,x)}function c(w){return t&&w.alternate===null&&(w.flags|=67108866),w}function d(w,x,O,H){return x===null||x.tag!==6?(x=To(O,w.mode,H),x.return=w,x):(x=i(x,O),x.return=w,x)}function m(w,x,O,H){var Q=O.type;return Q===X?R(w,x,O.props.children,H,O.key):x!==null&&(x.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===_&&Hf(Q)===x.type)?(x=i(x,O.props),Hi(x,O),x.return=w,x):(x=Dl(O.type,O.key,O.props,null,w.mode,H),Hi(x,O),x.return=w,x)}function T(w,x,O,H){return x===null||x.tag!==4||x.stateNode.containerInfo!==O.containerInfo||x.stateNode.implementation!==O.implementation?(x=Ao(O,w.mode,H),x.return=w,x):(x=i(x,O.children||[]),x.return=w,x)}function R(w,x,O,H,Q){return x===null||x.tag!==7?(x=Vn(O,w.mode,H,Q),x.return=w,x):(x=i(x,O),x.return=w,x)}function N(w,x,O){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=To(""+x,w.mode,O),x.return=w,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Z:return O=Dl(x.type,x.key,x.props,null,w.mode,O),Hi(O,x),O.return=w,O;case K:return x=Ao(x,w.mode,O),x.return=w,x;case _:var H=x._init;return x=H(x._payload),N(w,x,O)}if(wt(x)||ot(x))return x=Vn(x,w.mode,O,null),x.return=w,x;if(typeof x.then=="function")return N(w,Zl(x),O);if(x.$$typeof===C)return N(w,Cl(w,x),O);Ql(w,x)}return null}function A(w,x,O,H){var Q=x!==null?x.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return Q!==null?null:d(w,x,""+O,H);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Z:return O.key===Q?m(w,x,O,H):null;case K:return O.key===Q?T(w,x,O,H):null;case _:return Q=O._init,O=Q(O._payload),A(w,x,O,H)}if(wt(O)||ot(O))return Q!==null?null:R(w,x,O,H,null);if(typeof O.then=="function")return A(w,x,Zl(O),H);if(O.$$typeof===C)return A(w,x,Cl(w,O),H);Ql(w,O)}return null}function E(w,x,O,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return w=w.get(O)||null,d(x,w,""+H,Q);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case Z:return w=w.get(H.key===null?O:H.key)||null,m(x,w,H,Q);case K:return w=w.get(H.key===null?O:H.key)||null,T(x,w,H,Q);case _:var ht=H._init;return H=ht(H._payload),E(w,x,O,H,Q)}if(wt(H)||ot(H))return w=w.get(O)||null,R(x,w,H,Q,null);if(typeof H.then=="function")return E(w,x,O,Zl(H),Q);if(H.$$typeof===C)return E(w,x,O,Cl(x,H),Q);Ql(x,H)}return null}function lt(w,x,O,H){for(var Q=null,ht=null,$=x,it=x=0,Ft=null;$!==null&&it<O.length;it++){$.index>it?(Ft=$,$=null):Ft=$.sibling;var xt=A(w,$,O[it],H);if(xt===null){$===null&&($=Ft);break}t&&$&&xt.alternate===null&&e(w,$),x=l(xt,x,it),ht===null?Q=xt:ht.sibling=xt,ht=xt,$=Ft}if(it===O.length)return n(w,$),St&&Jn(w,it),Q;if($===null){for(;it<O.length;it++)$=N(w,O[it],H),$!==null&&(x=l($,x,it),ht===null?Q=$:ht.sibling=$,ht=$);return St&&Jn(w,it),Q}for($=a($);it<O.length;it++)Ft=E($,w,it,O[it],H),Ft!==null&&(t&&Ft.alternate!==null&&$.delete(Ft.key===null?it:Ft.key),x=l(Ft,x,it),ht===null?Q=Ft:ht.sibling=Ft,ht=Ft);return t&&$.forEach(function(Bn){return e(w,Bn)}),St&&Jn(w,it),Q}function nt(w,x,O,H){if(O==null)throw Error(s(151));for(var Q=null,ht=null,$=x,it=x=0,Ft=null,xt=O.next();$!==null&&!xt.done;it++,xt=O.next()){$.index>it?(Ft=$,$=null):Ft=$.sibling;var Bn=A(w,$,xt.value,H);if(Bn===null){$===null&&($=Ft);break}t&&$&&Bn.alternate===null&&e(w,$),x=l(Bn,x,it),ht===null?Q=Bn:ht.sibling=Bn,ht=Bn,$=Ft}if(xt.done)return n(w,$),St&&Jn(w,it),Q;if($===null){for(;!xt.done;it++,xt=O.next())xt=N(w,xt.value,H),xt!==null&&(x=l(xt,x,it),ht===null?Q=xt:ht.sibling=xt,ht=xt);return St&&Jn(w,it),Q}for($=a($);!xt.done;it++,xt=O.next())xt=E($,w,it,xt.value,H),xt!==null&&(t&&xt.alternate!==null&&$.delete(xt.key===null?it:xt.key),x=l(xt,x,it),ht===null?Q=xt:ht.sibling=xt,ht=xt);return t&&$.forEach(function(em){return e(w,em)}),St&&Jn(w,it),Q}function Mt(w,x,O,H){if(typeof O=="object"&&O!==null&&O.type===X&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case Z:t:{for(var Q=O.key;x!==null;){if(x.key===Q){if(Q=O.type,Q===X){if(x.tag===7){n(w,x.sibling),H=i(x,O.props.children),H.return=w,w=H;break t}}else if(x.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===_&&Hf(Q)===x.type){n(w,x.sibling),H=i(x,O.props),Hi(H,O),H.return=w,w=H;break t}n(w,x);break}else e(w,x);x=x.sibling}O.type===X?(H=Vn(O.props.children,w.mode,H,O.key),H.return=w,w=H):(H=Dl(O.type,O.key,O.props,null,w.mode,H),Hi(H,O),H.return=w,w=H)}return c(w);case K:t:{for(Q=O.key;x!==null;){if(x.key===Q)if(x.tag===4&&x.stateNode.containerInfo===O.containerInfo&&x.stateNode.implementation===O.implementation){n(w,x.sibling),H=i(x,O.children||[]),H.return=w,w=H;break t}else{n(w,x);break}else e(w,x);x=x.sibling}H=Ao(O,w.mode,H),H.return=w,w=H}return c(w);case _:return Q=O._init,O=Q(O._payload),Mt(w,x,O,H)}if(wt(O))return lt(w,x,O,H);if(ot(O)){if(Q=ot(O),typeof Q!="function")throw Error(s(150));return O=Q.call(O),nt(w,x,O,H)}if(typeof O.then=="function")return Mt(w,x,Zl(O),H);if(O.$$typeof===C)return Mt(w,x,Cl(w,O),H);Ql(w,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,x!==null&&x.tag===6?(n(w,x.sibling),H=i(x,O),H.return=w,w=H):(n(w,x),H=To(O,w.mode,H),H.return=w,w=H),c(w)):n(w,x)}return function(w,x,O,H){try{ki=0;var Q=Mt(w,x,O,H);return Ha=null,Q}catch($){if($===Ti||$===Hl)throw $;var ht=be(29,$,null,w.mode);return ht.lanes=H,ht.return=w,ht}finally{}}}var Na=Nf(!0),Uf=Nf(!1),Ce=B(null),Xe=null;function On(t){var e=t.alternate;P(Qt,Qt.current&1),P(Ce,t),Xe===null&&(e===null||za.current!==null||e.memoizedState!==null)&&(Xe=t)}function qf(t){if(t.tag===22){if(P(Qt,Qt.current),P(Ce,t),Xe===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Xe=t)}}else Tn()}function Tn(){P(Qt,Qt.current),P(Ce,Ce.current)}function rn(t){Y(Ce),Xe===t&&(Xe=null),Y(Qt)}var Qt=B(0);function Vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Vu(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function iu(t,e,n,a){e=t.memoizedState,n=n(a,e),n=n==null?e:U({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lu={enqueueSetState:function(t,e,n){t=t._reactInternals;var a=Se(),i=xn(a);i.payload=e,n!=null&&(i.callback=n),e=Sn(t,i,a),e!==null&&(we(e,t,a),Ei(e,t,a))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var a=Se(),i=xn(a);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Sn(t,i,a),e!==null&&(we(e,t,a),Ei(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Se(),a=xn(n);a.tag=2,e!=null&&(a.callback=e),e=Sn(t,a,n),e!==null&&(we(e,t,n),Ei(e,t,n))}};function Bf(t,e,n,a,i,l,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,l,c):e.prototype&&e.prototype.isPureReactComponent?!mi(n,a)||!mi(i,l):!0}function jf(t,e,n,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,a),e.state!==t&&lu.enqueueReplaceState(e,e.state,null)}function na(t,e){var n=e;if("ref"in e){n={};for(var a in e)a!=="ref"&&(n[a]=e[a])}if(t=t.defaultProps){n===e&&(n=U({},n));for(var i in t)n[i]===void 0&&(n[i]=t[i])}return n}var Kl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Gf(t){Kl(t)}function Yf(t){console.error(t)}function Lf(t){Kl(t)}function Jl(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Pf(t,e,n){try{var a=t.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ru(t,e,n){return n=xn(n),n.tag=3,n.payload={element:null},n.callback=function(){Jl(t,e)},n}function Xf(t){return t=xn(t),t.tag=3,t}function Zf(t,e,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var l=a.value;t.payload=function(){return i(l)},t.callback=function(){Pf(e,n,a)}}var c=n.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(t.callback=function(){Pf(e,n,a),typeof i!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var d=a.stack;this.componentDidCatch(a.value,{componentStack:d!==null?d:""})})}function eg(t,e,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=n.alternate,e!==null&&Si(e,n,i,!0),n=Ce.current,n!==null){switch(n.tag){case 13:return Xe===null?zu():n.alternate===null&&Bt===0&&(Bt=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===No?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([a]):e.add(a),Cu(t,a,i)),!1;case 22:return n.flags|=65536,a===No?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([a]):n.add(a)),Cu(t,a,i)),!1}throw Error(s(435,n.tag))}return Cu(t,a,i),zu(),!1}if(St)return e=Ce.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,a!==Do&&(t=Error(s(422),{cause:a}),xi(De(t,n)))):(a!==Do&&(e=Error(s(423),{cause:a}),xi(De(e,n))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,a=De(a,n),i=ru(t.stateNode,a,i),Bo(t,i),Bt!==4&&(Bt=2)),!1;var l=Error(s(520),{cause:a});if(l=De(l,n),Yi===null?Yi=[l]:Yi.push(l),Bt!==4&&(Bt=2),e===null)return!0;a=De(a,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=i&-i,n.lanes|=t,t=ru(n.stateNode,a,t),Bo(n,t),!1;case 1:if(e=n.type,l=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(zn===null||!zn.has(l))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Xf(i),Zf(i,t,n,a),Bo(n,i),!1}n=n.return}while(n!==null);return!1}var Qf=Error(s(461)),$t=!1;function te(t,e,n,a){e.child=t===null?Uf(e,null,n,a):Na(e,t.child,n,a)}function Vf(t,e,n,a,i){n=n.render;var l=e.ref;if("ref"in a){var c={};for(var d in a)d!=="ref"&&(c[d]=a[d])}else c=a;return In(e),a=Po(t,e,n,c,l,i),d=Xo(),t!==null&&!$t?(Zo(t,e,i),on(t,e,i)):(St&&d&&Eo(e),e.flags|=1,te(t,e,a,i),e.child)}function Kf(t,e,n,a,i){if(t===null){var l=n.type;return typeof l=="function"&&!Oo(l)&&l.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=l,Jf(t,e,l,a,i)):(t=Dl(n.type,null,a,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(l=t.child,!pu(t,i)){var c=l.memoizedProps;if(n=n.compare,n=n!==null?n:mi,n(c,a)&&t.ref===e.ref)return on(t,e,i)}return e.flags|=1,t=Ie(l,a),t.ref=e.ref,t.return=e,e.child=t}function Jf(t,e,n,a,i){if(t!==null){var l=t.memoizedProps;if(mi(l,a)&&t.ref===e.ref)if($t=!1,e.pendingProps=a=l,pu(t,i))(t.flags&131072)!==0&&($t=!0);else return e.lanes=t.lanes,on(t,e,i)}return ou(t,e,n,a,i)}function $f(t,e,n){var a=e.pendingProps,i=a.children,l=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=l!==null?l.baseLanes|n:n,t!==null){for(i=e.child=t.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;e.childLanes=l&~a}else e.childLanes=0,e.child=null;return Wf(t,e,a,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&kl(e,l!==null?l.cachePool:null),l!==null?Kc(e,l):Go(),qf(e);else return e.lanes=e.childLanes=536870912,Wf(t,e,l!==null?l.baseLanes|n:n,n)}else l!==null?(kl(e,l.cachePool),Kc(e,l),Tn(),e.memoizedState=null):(t!==null&&kl(e,null),Go(),Tn());return te(t,e,i,n),e.child}function Wf(t,e,n,a){var i=Ho();return i=i===null?null:{parent:Zt._currentValue,pool:i},e.memoizedState={baseLanes:n,cachePool:i},t!==null&&kl(e,null),Go(),qf(e),t!==null&&Si(t,e,a,!0),null}function $l(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function ou(t,e,n,a,i){return In(e),n=Po(t,e,n,a,void 0,i),a=Xo(),t!==null&&!$t?(Zo(t,e,i),on(t,e,i)):(St&&a&&Eo(e),e.flags|=1,te(t,e,n,i),e.child)}function Ff(t,e,n,a,i,l){return In(e),e.updateQueue=null,n=$c(e,a,n,i),Jc(t),a=Xo(),t!==null&&!$t?(Zo(t,e,l),on(t,e,l)):(St&&a&&Eo(e),e.flags|=1,te(t,e,n,l),e.child)}function If(t,e,n,a,i){if(In(e),e.stateNode===null){var l=Aa,c=n.contextType;typeof c=="object"&&c!==null&&(l=le(c)),l=new n(a,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=lu,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=a,l.state=e.memoizedState,l.refs={},Uo(e),c=n.contextType,l.context=typeof c=="object"&&c!==null?le(c):Aa,l.state=e.memoizedState,c=n.getDerivedStateFromProps,typeof c=="function"&&(iu(e,n,c,a),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(c=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),c!==l.state&&lu.enqueueReplaceState(l,l.state,null),Di(e,a,l,i),_i(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){l=e.stateNode;var d=e.memoizedProps,m=na(n,d);l.props=m;var T=l.context,R=n.contextType;c=Aa,typeof R=="object"&&R!==null&&(c=le(R));var N=n.getDerivedStateFromProps;R=typeof N=="function"||typeof l.getSnapshotBeforeUpdate=="function",d=e.pendingProps!==d,R||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(d||T!==c)&&jf(e,l,a,c),yn=!1;var A=e.memoizedState;l.state=A,Di(e,a,l,i),_i(),T=e.memoizedState,d||A!==T||yn?(typeof N=="function"&&(iu(e,n,N,a),T=e.memoizedState),(m=yn||Bf(e,n,m,a,A,T,c))?(R||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=T),l.props=a,l.state=T,l.context=c,a=m):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{l=e.stateNode,qo(t,e),c=e.memoizedProps,R=na(n,c),l.props=R,N=e.pendingProps,A=l.context,T=n.contextType,m=Aa,typeof T=="object"&&T!==null&&(m=le(T)),d=n.getDerivedStateFromProps,(T=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==N||A!==m)&&jf(e,l,a,m),yn=!1,A=e.memoizedState,l.state=A,Di(e,a,l,i),_i();var E=e.memoizedState;c!==N||A!==E||yn||t!==null&&t.dependencies!==null&&Rl(t.dependencies)?(typeof d=="function"&&(iu(e,n,d,a),E=e.memoizedState),(R=yn||Bf(e,n,R,a,A,E,m)||t!==null&&t.dependencies!==null&&Rl(t.dependencies))?(T||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,E,m),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,E,m)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===t.memoizedProps&&A===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&A===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=E),l.props=a,l.state=E,l.context=m,a=R):(typeof l.componentDidUpdate!="function"||c===t.memoizedProps&&A===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&A===t.memoizedState||(e.flags|=1024),a=!1)}return l=a,$l(t,e),a=(e.flags&128)!==0,l||a?(l=e.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,t!==null&&a?(e.child=Na(e,t.child,null,i),e.child=Na(e,null,n,i)):te(t,e,n,i),e.memoizedState=l.state,t=e.child):t=on(t,e,i),t}function th(t,e,n,a){return yi(),e.flags|=256,te(t,e,n,a),e.child}var uu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function su(t){return{baseLanes:t,cachePool:Gc()}}function cu(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=ke),t}function eh(t,e,n){var a=e.pendingProps,i=!1,l=(e.flags&128)!==0,c;if((c=l)||(c=t!==null&&t.memoizedState===null?!1:(Qt.current&2)!==0),c&&(i=!0,e.flags&=-129),c=(e.flags&32)!==0,e.flags&=-33,t===null){if(St){if(i?On(e):Tn(),St){var d=qt,m;if(m=d){t:{for(m=d,d=Pe;m.nodeType!==8;){if(!d){d=null;break t}if(m=Be(m.nextSibling),m===null){d=null;break t}}d=m}d!==null?(e.memoizedState={dehydrated:d,treeContext:Kn!==null?{id:tn,overflow:en}:null,retryLane:536870912,hydrationErrors:null},m=be(18,null,null,0),m.stateNode=d,m.return=e,e.child=m,oe=e,qt=null,m=!0):m=!1}m||Wn(e)}if(d=e.memoizedState,d!==null&&(d=d.dehydrated,d!==null))return Vu(d)?e.lanes=32:e.lanes=536870912,null;rn(e)}return d=a.children,a=a.fallback,i?(Tn(),i=e.mode,d=Wl({mode:"hidden",children:d},i),a=Vn(a,i,n,null),d.return=e,a.return=e,d.sibling=a,e.child=d,i=e.child,i.memoizedState=su(n),i.childLanes=cu(t,c,n),e.memoizedState=uu,a):(On(e),fu(e,d))}if(m=t.memoizedState,m!==null&&(d=m.dehydrated,d!==null)){if(l)e.flags&256?(On(e),e.flags&=-257,e=hu(t,e,n)):e.memoizedState!==null?(Tn(),e.child=t.child,e.flags|=128,e=null):(Tn(),i=a.fallback,d=e.mode,a=Wl({mode:"visible",children:a.children},d),i=Vn(i,d,n,null),i.flags|=2,a.return=e,i.return=e,a.sibling=i,e.child=a,Na(e,t.child,null,n),a=e.child,a.memoizedState=su(n),a.childLanes=cu(t,c,n),e.memoizedState=uu,e=i);else if(On(e),Vu(d)){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;c=T,a=Error(s(419)),a.stack="",a.digest=c,xi({value:a,source:null,stack:null}),e=hu(t,e,n)}else if($t||Si(t,e,n,!1),c=(n&t.childLanes)!==0,$t||c){if(c=Rt,c!==null&&(a=n&-n,a=(a&42)!==0?1:Vr(a),a=(a&(c.suspendedLanes|n))!==0?0:a,a!==0&&a!==m.retryLane))throw m.retryLane=a,Ta(t,a),we(c,t,a),Qf;d.data==="$?"||zu(),e=hu(t,e,n)}else d.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=m.treeContext,qt=Be(d.nextSibling),oe=e,St=!0,$n=null,Pe=!1,t!==null&&(ze[Re++]=tn,ze[Re++]=en,ze[Re++]=Kn,tn=t.id,en=t.overflow,Kn=e),e=fu(e,a.children),e.flags|=4096);return e}return i?(Tn(),i=a.fallback,d=e.mode,m=t.child,T=m.sibling,a=Ie(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&65011712,T!==null?i=Ie(T,i):(i=Vn(i,d,n,null),i.flags|=2),i.return=e,a.return=e,a.sibling=i,e.child=a,a=i,i=e.child,d=t.child.memoizedState,d===null?d=su(n):(m=d.cachePool,m!==null?(T=Zt._currentValue,m=m.parent!==T?{parent:T,pool:T}:m):m=Gc(),d={baseLanes:d.baseLanes|n,cachePool:m}),i.memoizedState=d,i.childLanes=cu(t,c,n),e.memoizedState=uu,a):(On(e),n=t.child,t=n.sibling,n=Ie(n,{mode:"visible",children:a.children}),n.return=e,n.sibling=null,t!==null&&(c=e.deletions,c===null?(e.deletions=[t],e.flags|=16):c.push(t)),e.child=n,e.memoizedState=null,n)}function fu(t,e){return e=Wl({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Wl(t,e){return t=be(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function hu(t,e,n){return Na(e,t.child,null,n),t=fu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nh(t,e,n){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),zo(t.return,e,n)}function du(t,e,n,a,i){var l=t.memoizedState;l===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(l.isBackwards=e,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=n,l.tailMode=i)}function ah(t,e,n){var a=e.pendingProps,i=a.revealOrder,l=a.tail;if(te(t,e,a.children,n),a=Qt.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&nh(t,n,e);else if(t.tag===19)nh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(P(Qt,a),i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Vl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),du(e,!1,i,n,l);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Vl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}du(e,!0,n,null,l);break;case"together":du(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function on(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Mn|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(Si(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,n=Ie(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ie(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function pu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Rl(t)))}function ng(t,e,n){switch(e.tag){case 3:Ot(e,e.stateNode.containerInfo),vn(e,Zt,t.memoizedState.cache),yi();break;case 27:case 5:Yn(e);break;case 4:Ot(e,e.stateNode.containerInfo);break;case 10:vn(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(On(e),e.flags|=128,null):(n&e.child.childLanes)!==0?eh(t,e,n):(On(e),t=on(t,e,n),t!==null?t.sibling:null);On(e);break;case 19:var i=(t.flags&128)!==0;if(a=(n&e.childLanes)!==0,a||(Si(t,e,n,!1),a=(n&e.childLanes)!==0),i){if(a)return ah(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),P(Qt,Qt.current),a)break;return null;case 22:case 23:return e.lanes=0,$f(t,e,n);case 24:vn(e,Zt,t.memoizedState.cache)}return on(t,e,n)}function ih(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)$t=!0;else{if(!pu(t,n)&&(e.flags&128)===0)return $t=!1,ng(t,e,n);$t=(t.flags&131072)!==0}else $t=!1,St&&(e.flags&1048576)!==0&&kc(e,zl,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,i=a._init;if(a=i(a._payload),e.type=a,typeof a=="function")Oo(a)?(t=na(a,t),e.tag=1,e=If(null,e,a,t,n)):(e.tag=0,e=ou(null,e,a,t,n));else{if(a!=null){if(i=a.$$typeof,i===u){e.tag=11,e=Vf(null,e,a,t,n);break t}else if(i===y){e.tag=14,e=Kf(null,e,a,t,n);break t}}throw e=kt(a)||a,Error(s(306,e,""))}}return e;case 0:return ou(t,e,e.type,e.pendingProps,n);case 1:return a=e.type,i=na(a,e.pendingProps),If(t,e,a,i,n);case 3:t:{if(Ot(e,e.stateNode.containerInfo),t===null)throw Error(s(387));a=e.pendingProps;var l=e.memoizedState;i=l.element,qo(t,e),Di(e,a,null,n);var c=e.memoizedState;if(a=c.cache,vn(e,Zt,a),a!==l.cache&&Ro(e,[Zt],n,!0),_i(),a=c.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:c.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=th(t,e,a,n);break t}else if(a!==i){i=De(Error(s(424)),e),xi(i),e=th(t,e,a,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(qt=Be(t.firstChild),oe=e,St=!0,$n=null,Pe=!0,n=Uf(e,null,a,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(yi(),a===i){e=on(t,e,n);break t}te(t,e,a,n)}e=e.child}return e;case 26:return $l(t,e),t===null?(n=ud(e.type,null,e.pendingProps,null))?e.memoizedState=n:St||(n=e.type,t=e.pendingProps,a=fr(at.current).createElement(n),a[ie]=e,a[ue]=t,ne(a,n,t),Jt(a),e.stateNode=a):e.memoizedState=ud(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Yn(e),t===null&&St&&(a=e.stateNode=ld(e.type,e.pendingProps,at.current),oe=e,Pe=!0,i=qt,kn(e.type)?(Ku=i,qt=Be(a.firstChild)):qt=i),te(t,e,e.pendingProps.children,n),$l(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&St&&((i=a=qt)&&(a=zg(a,e.type,e.pendingProps,Pe),a!==null?(e.stateNode=a,oe=e,qt=Be(a.firstChild),Pe=!1,i=!0):i=!1),i||Wn(e)),Yn(e),i=e.type,l=e.pendingProps,c=t!==null?t.memoizedProps:null,a=l.children,Xu(i,l)?a=null:c!==null&&Xu(i,c)&&(e.flags|=32),e.memoizedState!==null&&(i=Po(t,e,Kp,null,null,n),$i._currentValue=i),$l(t,e),te(t,e,a,n),e.child;case 6:return t===null&&St&&((t=n=qt)&&(n=Rg(n,e.pendingProps,Pe),n!==null?(e.stateNode=n,oe=e,qt=null,t=!0):t=!1),t||Wn(e)),null;case 13:return eh(t,e,n);case 4:return Ot(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Na(e,null,a,n):te(t,e,a,n),e.child;case 11:return Vf(t,e,e.type,e.pendingProps,n);case 7:return te(t,e,e.pendingProps,n),e.child;case 8:return te(t,e,e.pendingProps.children,n),e.child;case 12:return te(t,e,e.pendingProps.children,n),e.child;case 10:return a=e.pendingProps,vn(e,e.type,a.value),te(t,e,a.children,n),e.child;case 9:return i=e.type._context,a=e.pendingProps.children,In(e),i=le(i),a=a(i),e.flags|=1,te(t,e,a,n),e.child;case 14:return Kf(t,e,e.type,e.pendingProps,n);case 15:return Jf(t,e,e.type,e.pendingProps,n);case 19:return ah(t,e,n);case 31:return a=e.pendingProps,n=e.mode,a={mode:a.mode,children:a.children},t===null?(n=Wl(a,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=Ie(t.child,a),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return $f(t,e,n);case 24:return In(e),a=le(Zt),t===null?(i=Ho(),i===null&&(i=Rt,l=Co(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=n),i=l),e.memoizedState={parent:a,cache:i},Uo(e),vn(e,Zt,i)):((t.lanes&n)!==0&&(qo(t,e),Di(e,null,null,n),_i()),i=t.memoizedState,l=e.memoizedState,i.parent!==a?(i={parent:a,cache:a},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),vn(e,Zt,a)):(a=l.cache,vn(e,Zt,a),a!==i.cache&&Ro(e,[Zt],n,!0))),te(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function un(t){t.flags|=4}function lh(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!dd(e)){if(e=Ce.current,e!==null&&((bt&4194048)===bt?Xe!==null:(bt&62914560)!==bt&&(bt&536870912)===0||e!==Xe))throw Ai=No,Yc;t.flags|=8192}}function Fl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Us():536870912,t.lanes|=e,ja|=e)}function Ni(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,a=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=a,t.childLanes=n,e}function ag(t,e,n){var a=e.pendingProps;switch(_o(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return Ut(e),null;case 3:return n=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),an(Zt),ae(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(vi(e)?un(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Uc())),Ut(e),null;case 26:return n=e.memoizedState,t===null?(un(e),n!==null?(Ut(e),lh(e,n)):(Ut(e),e.flags&=-16777217)):n?n!==t.memoizedState?(un(e),Ut(e),lh(e,n)):(Ut(e),e.flags&=-16777217):(t.memoizedProps!==a&&un(e),Ut(e),e.flags&=-16777217),null;case 27:$e(e),n=at.current;var i=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&un(e);else{if(!a){if(e.stateNode===null)throw Error(s(166));return Ut(e),null}t=I.current,vi(e)?Hc(e):(t=ld(i,a,n),e.stateNode=t,un(e))}return Ut(e),null;case 5:if($e(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&un(e);else{if(!a){if(e.stateNode===null)throw Error(s(166));return Ut(e),null}if(t=I.current,vi(e))Hc(e);else{switch(i=fr(at.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}t[ie]=e,t[ue]=a;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=t;t:switch(ne(t,n,a),n){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&un(e)}}return Ut(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&un(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(s(166));if(t=at.current,vi(e)){if(t=e.stateNode,n=e.memoizedProps,a=null,i=oe,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}t[ie]=e,t=!!(t.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Fh(t.nodeValue,n)),t||Wn(e)}else t=fr(t).createTextNode(a),t[ie]=e,e.stateNode=t}return Ut(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=vi(e),a!==null&&a.dehydrated!==null){if(t===null){if(!i)throw Error(s(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[ie]=e}else yi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ut(e),i=!1}else i=Uc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(rn(e),e):(rn(e),null)}if(rn(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=a!==null,t=t!==null&&t.memoizedState!==null,n){a=e.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var l=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==i&&(a.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),Fl(e,e.updateQueue),Ut(e),null;case 4:return ae(),t===null&&ju(e.stateNode.containerInfo),Ut(e),null;case 10:return an(e.type),Ut(e),null;case 19:if(Y(Qt),i=e.memoizedState,i===null)return Ut(e),null;if(a=(e.flags&128)!==0,l=i.rendering,l===null)if(a)Ni(i,!1);else{if(Bt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(l=Vl(t),l!==null){for(e.flags|=128,Ni(i,!1),t=l.updateQueue,e.updateQueue=t,Fl(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Cc(n,t),n=n.sibling;return P(Qt,Qt.current&1|2),e.child}t=t.sibling}i.tail!==null&&Le()>er&&(e.flags|=128,a=!0,Ni(i,!1),e.lanes=4194304)}else{if(!a)if(t=Vl(l),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Fl(e,t),Ni(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!St)return Ut(e),null}else 2*Le()-i.renderingStartTime>er&&n!==536870912&&(e.flags|=128,a=!0,Ni(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(t=i.last,t!==null?t.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Le(),e.sibling=null,t=Qt.current,P(Qt,a?t&1|2:t&1),e):(Ut(e),null);case 22:case 23:return rn(e),Yo(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(n&536870912)!==0&&(e.flags&128)===0&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),n=e.updateQueue,n!==null&&Fl(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==n&&(e.flags|=2048),t!==null&&Y(ta),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),an(Zt),Ut(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function ig(t,e){switch(_o(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return an(Zt),ae(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return $e(e),null;case 13:if(rn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));yi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(Qt),null;case 4:return ae(),null;case 10:return an(e.type),null;case 22:case 23:return rn(e),Yo(),t!==null&&Y(ta),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return an(Zt),null;case 25:return null;default:return null}}function rh(t,e){switch(_o(e),e.tag){case 3:an(Zt),ae();break;case 26:case 27:case 5:$e(e);break;case 4:ae();break;case 13:rn(e);break;case 19:Y(Qt);break;case 10:an(e.type);break;case 22:case 23:rn(e),Yo(),t!==null&&Y(ta);break;case 24:an(Zt)}}function Ui(t,e){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&t)===t){a=void 0;var l=n.create,c=n.inst;a=l(),c.destroy=a}n=n.next}while(n!==i)}}catch(d){zt(e,e.return,d)}}function An(t,e,n){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&t)===t){var c=a.inst,d=c.destroy;if(d!==void 0){c.destroy=void 0,i=e;var m=n,T=d;try{T()}catch(R){zt(i,m,R)}}}a=a.next}while(a!==l)}}catch(R){zt(e,e.return,R)}}function oh(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Vc(e,n)}catch(a){zt(t,t.return,a)}}}function uh(t,e,n){n.props=na(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(a){zt(t,e,a)}}function qi(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof n=="function"?t.refCleanup=n(a):n.current=a}}catch(i){zt(t,e,i)}}function Ze(t,e){var n=t.ref,a=t.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){zt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){zt(t,e,i)}else n.current=null}function sh(t){var e=t.type,n=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break t;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){zt(t,t.return,i)}}function gu(t,e,n){try{var a=t.stateNode;Ag(a,t.type,n,e),a[ue]=e}catch(i){zt(t,t.return,i)}}function ch(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&kn(t.type)||t.tag===4}function mu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||ch(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&kn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bu(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=cr));else if(a!==4&&(a===27&&kn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(bu(t,e,n),t=t.sibling;t!==null;)bu(t,e,n),t=t.sibling}function Il(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(a!==4&&(a===27&&kn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Il(t,e,n),t=t.sibling;t!==null;)Il(t,e,n),t=t.sibling}function fh(t){var e=t.stateNode,n=t.memoizedProps;try{for(var a=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ne(e,a,n),e[ie]=t,e[ue]=n}catch(l){zt(t,t.return,l)}}var sn=!1,Gt=!1,vu=!1,hh=typeof WeakSet=="function"?WeakSet:Set,Wt=null;function lg(t,e){if(t=t.containerInfo,Lu=br,t=wc(t),mo(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break t}var c=0,d=-1,m=-1,T=0,R=0,N=t,A=null;e:for(;;){for(var E;N!==n||i!==0&&N.nodeType!==3||(d=c+i),N!==l||a!==0&&N.nodeType!==3||(m=c+a),N.nodeType===3&&(c+=N.nodeValue.length),(E=N.firstChild)!==null;)A=N,N=E;for(;;){if(N===t)break e;if(A===n&&++T===i&&(d=c),A===l&&++R===a&&(m=c),(E=N.nextSibling)!==null)break;N=A,A=N.parentNode}N=E}n=d===-1||m===-1?null:{start:d,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pu={focusedElem:t,selectionRange:n},br=!1,Wt=e;Wt!==null;)if(e=Wt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Wt=t;else for(;Wt!==null;){switch(e=Wt,l=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&l!==null){t=void 0,n=e,i=l.memoizedProps,l=l.memoizedState,a=n.stateNode;try{var lt=na(n.type,i,n.elementType===n.type);t=a.getSnapshotBeforeUpdate(lt,l),a.__reactInternalSnapshotBeforeUpdate=t}catch(nt){zt(n,n.return,nt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Qu(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Qu(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,Wt=t;break}Wt=e.return}}function dh(t,e,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:En(t,n),a&4&&Ui(5,n);break;case 1:if(En(t,n),a&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(c){zt(n,n.return,c)}else{var i=na(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(c){zt(n,n.return,c)}}a&64&&oh(n),a&512&&qi(n,n.return);break;case 3:if(En(t,n),a&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Vc(t,e)}catch(c){zt(n,n.return,c)}}break;case 27:e===null&&a&4&&fh(n);case 26:case 5:En(t,n),e===null&&a&4&&sh(n),a&512&&qi(n,n.return);break;case 12:En(t,n);break;case 13:En(t,n),a&4&&mh(t,n),a&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=pg.bind(null,n),Cg(t,n))));break;case 22:if(a=n.memoizedState!==null||sn,!a){e=e!==null&&e.memoizedState!==null||Gt,i=sn;var l=Gt;sn=a,(Gt=e)&&!l?_n(t,n,(n.subtreeFlags&8772)!==0):En(t,n),sn=i,Gt=l}break;case 30:break;default:En(t,n)}}function ph(t){var e=t.alternate;e!==null&&(t.alternate=null,ph(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&$r(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ht=null,fe=!1;function cn(t,e,n){for(n=n.child;n!==null;)gh(t,e,n),n=n.sibling}function gh(t,e,n){if(pe&&typeof pe.onCommitFiberUnmount=="function")try{pe.onCommitFiberUnmount(ii,n)}catch{}switch(n.tag){case 26:Gt||Ze(n,e),cn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Gt||Ze(n,e);var a=Ht,i=fe;kn(n.type)&&(Ht=n.stateNode,fe=!1),cn(t,e,n),Qi(n.stateNode),Ht=a,fe=i;break;case 5:Gt||Ze(n,e);case 6:if(a=Ht,i=fe,Ht=null,cn(t,e,n),Ht=a,fe=i,Ht!==null)if(fe)try{(Ht.nodeType===9?Ht.body:Ht.nodeName==="HTML"?Ht.ownerDocument.body:Ht).removeChild(n.stateNode)}catch(l){zt(n,e,l)}else try{Ht.removeChild(n.stateNode)}catch(l){zt(n,e,l)}break;case 18:Ht!==null&&(fe?(t=Ht,ad(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),tl(t)):ad(Ht,n.stateNode));break;case 4:a=Ht,i=fe,Ht=n.stateNode.containerInfo,fe=!0,cn(t,e,n),Ht=a,fe=i;break;case 0:case 11:case 14:case 15:Gt||An(2,n,e),Gt||An(4,n,e),cn(t,e,n);break;case 1:Gt||(Ze(n,e),a=n.stateNode,typeof a.componentWillUnmount=="function"&&uh(n,e,a)),cn(t,e,n);break;case 21:cn(t,e,n);break;case 22:Gt=(a=Gt)||n.memoizedState!==null,cn(t,e,n),Gt=a;break;default:cn(t,e,n)}}function mh(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{tl(t)}catch(n){zt(e,e.return,n)}}function rg(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new hh),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new hh),e;default:throw Error(s(435,t.tag))}}function yu(t,e){var n=rg(t);e.forEach(function(a){var i=gg.bind(null,t,a);n.has(a)||(n.add(a),a.then(i,i))})}function ve(t,e){var n=e.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],l=t,c=e,d=c;t:for(;d!==null;){switch(d.tag){case 27:if(kn(d.type)){Ht=d.stateNode,fe=!1;break t}break;case 5:Ht=d.stateNode,fe=!1;break t;case 3:case 4:Ht=d.stateNode.containerInfo,fe=!0;break t}d=d.return}if(Ht===null)throw Error(s(160));gh(l,c,i),Ht=null,fe=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)bh(e,t),e=e.sibling}var qe=null;function bh(t,e){var n=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ve(e,t),ye(t),a&4&&(An(3,t,t.return),Ui(3,t),An(5,t,t.return));break;case 1:ve(e,t),ye(t),a&512&&(Gt||n===null||Ze(n,n.return)),a&64&&sn&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=qe;if(ve(e,t),ye(t),a&512&&(Gt||n===null||Ze(n,n.return)),a&4){var l=n!==null?n.memoizedState:null;if(a=t.memoizedState,n===null)if(a===null)if(t.stateNode===null){t:{a=t.type,n=t.memoizedProps,i=i.ownerDocument||i;e:switch(a){case"title":l=i.getElementsByTagName("title")[0],(!l||l[oi]||l[ie]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(a),i.head.insertBefore(l,i.querySelector("head > title"))),ne(l,a,n),l[ie]=t,Jt(l),a=l;break t;case"link":var c=fd("link","href",i).get(a+(n.href||""));if(c){for(var d=0;d<c.length;d++)if(l=c[d],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){c.splice(d,1);break e}}l=i.createElement(a),ne(l,a,n),i.head.appendChild(l);break;case"meta":if(c=fd("meta","content",i).get(a+(n.content||""))){for(d=0;d<c.length;d++)if(l=c[d],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){c.splice(d,1);break e}}l=i.createElement(a),ne(l,a,n),i.head.appendChild(l);break;default:throw Error(s(468,a))}l[ie]=t,Jt(l),a=l}t.stateNode=a}else hd(i,t.type,t.stateNode);else t.stateNode=cd(i,a,t.memoizedProps);else l!==a?(l===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):l.count--,a===null?hd(i,t.type,t.stateNode):cd(i,a,t.memoizedProps)):a===null&&t.stateNode!==null&&gu(t,t.memoizedProps,n.memoizedProps)}break;case 27:ve(e,t),ye(t),a&512&&(Gt||n===null||Ze(n,n.return)),n!==null&&a&4&&gu(t,t.memoizedProps,n.memoizedProps);break;case 5:if(ve(e,t),ye(t),a&512&&(Gt||n===null||Ze(n,n.return)),t.flags&32){i=t.stateNode;try{ba(i,"")}catch(E){zt(t,t.return,E)}}a&4&&t.stateNode!=null&&(i=t.memoizedProps,gu(t,i,n!==null?n.memoizedProps:i)),a&1024&&(vu=!0);break;case 6:if(ve(e,t),ye(t),a&4){if(t.stateNode===null)throw Error(s(162));a=t.memoizedProps,n=t.stateNode;try{n.nodeValue=a}catch(E){zt(t,t.return,E)}}break;case 3:if(pr=null,i=qe,qe=hr(e.containerInfo),ve(e,t),qe=i,ye(t),a&4&&n!==null&&n.memoizedState.isDehydrated)try{tl(e.containerInfo)}catch(E){zt(t,t.return,E)}vu&&(vu=!1,vh(t));break;case 4:a=qe,qe=hr(t.stateNode.containerInfo),ve(e,t),ye(t),qe=a;break;case 12:ve(e,t),ye(t);break;case 13:ve(e,t),ye(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Au=Le()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,yu(t,a)));break;case 22:i=t.memoizedState!==null;var m=n!==null&&n.memoizedState!==null,T=sn,R=Gt;if(sn=T||i,Gt=R||m,ve(e,t),Gt=R,sn=T,ye(t),a&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(n===null||m||sn||Gt||aa(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){m=n=e;try{if(l=m.stateNode,i)c=l.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{d=m.stateNode;var N=m.memoizedProps.style,A=N!=null&&N.hasOwnProperty("display")?N.display:null;d.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(E){zt(m,m.return,E)}}}else if(e.tag===6){if(n===null){m=e;try{m.stateNode.nodeValue=i?"":m.memoizedProps}catch(E){zt(m,m.return,E)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,yu(t,n))));break;case 19:ve(e,t),ye(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,yu(t,a)));break;case 30:break;case 21:break;default:ve(e,t),ye(t)}}function ye(t){var e=t.flags;if(e&2){try{for(var n,a=t.return;a!==null;){if(ch(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode,l=mu(t);Il(t,l,i);break;case 5:var c=n.stateNode;n.flags&32&&(ba(c,""),n.flags&=-33);var d=mu(t);Il(t,d,c);break;case 3:case 4:var m=n.stateNode.containerInfo,T=mu(t);bu(t,T,m);break;default:throw Error(s(161))}}catch(R){zt(t,t.return,R)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vh(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;vh(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function En(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)dh(t,e.alternate,e),e=e.sibling}function aa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:An(4,e,e.return),aa(e);break;case 1:Ze(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&uh(e,e.return,n),aa(e);break;case 27:Qi(e.stateNode);case 26:case 5:Ze(e,e.return),aa(e);break;case 22:e.memoizedState===null&&aa(e);break;case 30:aa(e);break;default:aa(e)}t=t.sibling}}function _n(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,i=t,l=e,c=l.flags;switch(l.tag){case 0:case 11:case 15:_n(i,l,n),Ui(4,l);break;case 1:if(_n(i,l,n),a=l,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(T){zt(a,a.return,T)}if(a=l,i=a.updateQueue,i!==null){var d=a.stateNode;try{var m=i.shared.hiddenCallbacks;if(m!==null)for(i.shared.hiddenCallbacks=null,i=0;i<m.length;i++)Qc(m[i],d)}catch(T){zt(a,a.return,T)}}n&&c&64&&oh(l),qi(l,l.return);break;case 27:fh(l);case 26:case 5:_n(i,l,n),n&&a===null&&c&4&&sh(l),qi(l,l.return);break;case 12:_n(i,l,n);break;case 13:_n(i,l,n),n&&c&4&&mh(i,l);break;case 22:l.memoizedState===null&&_n(i,l,n),qi(l,l.return);break;case 30:break;default:_n(i,l,n)}e=e.sibling}}function xu(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&wi(n))}function Su(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&wi(t))}function Qe(t,e,n,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)yh(t,e,n,a),e=e.sibling}function yh(t,e,n,a){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Qe(t,e,n,a),i&2048&&Ui(9,e);break;case 1:Qe(t,e,n,a);break;case 3:Qe(t,e,n,a),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&wi(t)));break;case 12:if(i&2048){Qe(t,e,n,a),t=e.stateNode;try{var l=e.memoizedProps,c=l.id,d=l.onPostCommit;typeof d=="function"&&d(c,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(m){zt(e,e.return,m)}}else Qe(t,e,n,a);break;case 13:Qe(t,e,n,a);break;case 23:break;case 22:l=e.stateNode,c=e.alternate,e.memoizedState!==null?l._visibility&2?Qe(t,e,n,a):Bi(t,e):l._visibility&2?Qe(t,e,n,a):(l._visibility|=2,Ua(t,e,n,a,(e.subtreeFlags&10256)!==0)),i&2048&&xu(c,e);break;case 24:Qe(t,e,n,a),i&2048&&Su(e.alternate,e);break;default:Qe(t,e,n,a)}}function Ua(t,e,n,a,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var l=t,c=e,d=n,m=a,T=c.flags;switch(c.tag){case 0:case 11:case 15:Ua(l,c,d,m,i),Ui(8,c);break;case 23:break;case 22:var R=c.stateNode;c.memoizedState!==null?R._visibility&2?Ua(l,c,d,m,i):Bi(l,c):(R._visibility|=2,Ua(l,c,d,m,i)),i&&T&2048&&xu(c.alternate,c);break;case 24:Ua(l,c,d,m,i),i&&T&2048&&Su(c.alternate,c);break;default:Ua(l,c,d,m,i)}e=e.sibling}}function Bi(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,a=e,i=a.flags;switch(a.tag){case 22:Bi(n,a),i&2048&&xu(a.alternate,a);break;case 24:Bi(n,a),i&2048&&Su(a.alternate,a);break;default:Bi(n,a)}e=e.sibling}}var ji=8192;function qa(t){if(t.subtreeFlags&ji)for(t=t.child;t!==null;)xh(t),t=t.sibling}function xh(t){switch(t.tag){case 26:qa(t),t.flags&ji&&t.memoizedState!==null&&Zg(qe,t.memoizedState,t.memoizedProps);break;case 5:qa(t);break;case 3:case 4:var e=qe;qe=hr(t.stateNode.containerInfo),qa(t),qe=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=ji,ji=16777216,qa(t),ji=e):qa(t));break;default:qa(t)}}function Sh(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Gi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];Wt=a,Oh(a,t)}Sh(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wh(t),t=t.sibling}function wh(t){switch(t.tag){case 0:case 11:case 15:Gi(t),t.flags&2048&&An(9,t,t.return);break;case 3:Gi(t);break;case 12:Gi(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,tr(t)):Gi(t);break;default:Gi(t)}}function tr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];Wt=a,Oh(a,t)}Sh(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:An(8,e,e.return),tr(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,tr(e));break;default:tr(e)}t=t.sibling}}function Oh(t,e){for(;Wt!==null;){var n=Wt;switch(n.tag){case 0:case 11:case 15:An(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:wi(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Wt=a;else t:for(n=t;Wt!==null;){a=Wt;var i=a.sibling,l=a.return;if(ph(a),a===n){Wt=null;break t}if(i!==null){i.return=l,Wt=i;break t}Wt=l}}}var og={getCacheForType:function(t){var e=le(Zt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},ug=typeof WeakMap=="function"?WeakMap:Map,At=0,Rt=null,gt=null,bt=0,Et=0,xe=null,Dn=!1,Ba=!1,wu=!1,fn=0,Bt=0,Mn=0,ia=0,Ou=0,ke=0,ja=0,Yi=null,he=null,Tu=!1,Au=0,er=1/0,nr=null,zn=null,ee=0,Rn=null,Ga=null,Ya=0,Eu=0,_u=null,Th=null,Li=0,Du=null;function Se(){if((At&2)!==0&&bt!==0)return bt&-bt;if(z.T!==null){var t=Da;return t!==0?t:Nu()}return js()}function Ah(){ke===0&&(ke=(bt&536870912)===0||St?Ns():536870912);var t=Ce.current;return t!==null&&(t.flags|=32),ke}function we(t,e,n){(t===Rt&&(Et===2||Et===9)||t.cancelPendingCommit!==null)&&(La(t,0),Cn(t,bt,ke,!1)),ri(t,n),((At&2)===0||t!==Rt)&&(t===Rt&&((At&2)===0&&(ia|=n),Bt===4&&Cn(t,bt,ke,!1)),Ve(t))}function Eh(t,e,n){if((At&6)!==0)throw Error(s(327));var a=!n&&(e&124)===0&&(e&t.expiredLanes)===0||li(t,e),i=a?fg(t,e):Ru(t,e,!0),l=a;do{if(i===0){Ba&&!a&&Cn(t,e,0,!1);break}else{if(n=t.current.alternate,l&&!sg(n)){i=Ru(t,e,!1),l=!1;continue}if(i===2){if(l=e,t.errorRecoveryDisabledLanes&l)var c=0;else c=t.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){e=c;t:{var d=t;i=Yi;var m=d.current.memoizedState.isDehydrated;if(m&&(La(d,c).flags|=256),c=Ru(d,c,!1),c!==2){if(wu&&!m){d.errorRecoveryDisabledLanes|=l,ia|=l,i=4;break t}l=he,he=i,l!==null&&(he===null?he=l:he.push.apply(he,l))}i=c}if(l=!1,i!==2)continue}}if(i===1){La(t,0),Cn(t,e,0,!0);break}t:{switch(a=t,l=i,l){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:Cn(a,e,ke,!Dn);break t;case 2:he=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(i=Au+300-Le(),10<i)){if(Cn(a,e,ke,!Dn),dl(a,0,!0)!==0)break t;a.timeoutHandle=ed(_h.bind(null,a,n,he,nr,Tu,e,ke,ia,ja,Dn,l,2,-0,0),i);break t}_h(a,n,he,nr,Tu,e,ke,ia,ja,Dn,l,0,-0,0)}}break}while(!0);Ve(t)}function _h(t,e,n,a,i,l,c,d,m,T,R,N,A,E){if(t.timeoutHandle=-1,N=e.subtreeFlags,(N&8192||(N&16785408)===16785408)&&(Ji={stylesheets:null,count:0,unsuspend:Xg},xh(e),N=Qg(),N!==null)){t.cancelPendingCommit=N(Hh.bind(null,t,e,l,n,a,i,c,d,m,R,1,A,E)),Cn(t,l,c,!T);return}Hh(t,e,l,n,a,i,c,d,m)}function sg(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],l=i.getSnapshot;i=i.value;try{if(!me(l(),i))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Cn(t,e,n,a){e&=~Ou,e&=~ia,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var i=e;0<i;){var l=31-ge(i),c=1<<l;a[l]=-1,i&=~c}n!==0&&qs(t,n,e)}function ar(){return(At&6)===0?(Pi(0),!1):!0}function Mu(){if(gt!==null){if(Et===0)var t=gt.return;else t=gt,nn=Fn=null,Qo(t),Ha=null,ki=0,t=gt;for(;t!==null;)rh(t.alternate,t),t=t.return;gt=null}}function La(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,_g(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Mu(),Rt=t,gt=n=Ie(t.current,null),bt=e,Et=0,xe=null,Dn=!1,Ba=li(t,e),wu=!1,ja=ke=Ou=ia=Mn=Bt=0,he=Yi=null,Tu=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var i=31-ge(a),l=1<<i;e|=t[i],a&=~l}return fn=e,Al(),n}function Dh(t,e){ft=null,z.H=Xl,e===Ti||e===Hl?(e=Xc(),Et=3):e===Yc?(e=Xc(),Et=4):Et=e===Qf?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,xe=e,gt===null&&(Bt=1,Jl(t,De(e,t.current)))}function Mh(){var t=z.H;return z.H=Xl,t===null?Xl:t}function zh(){var t=z.A;return z.A=og,t}function zu(){Bt=4,Dn||(bt&4194048)!==bt&&Ce.current!==null||(Ba=!0),(Mn&134217727)===0&&(ia&134217727)===0||Rt===null||Cn(Rt,bt,ke,!1)}function Ru(t,e,n){var a=At;At|=2;var i=Mh(),l=zh();(Rt!==t||bt!==e)&&(nr=null,La(t,e)),e=!1;var c=Bt;t:do try{if(Et!==0&&gt!==null){var d=gt,m=xe;switch(Et){case 8:Mu(),c=6;break t;case 3:case 2:case 9:case 6:Ce.current===null&&(e=!0);var T=Et;if(Et=0,xe=null,Pa(t,d,m,T),n&&Ba){c=0;break t}break;default:T=Et,Et=0,xe=null,Pa(t,d,m,T)}}cg(),c=Bt;break}catch(R){Dh(t,R)}while(!0);return e&&t.shellSuspendCounter++,nn=Fn=null,At=a,z.H=i,z.A=l,gt===null&&(Rt=null,bt=0,Al()),c}function cg(){for(;gt!==null;)Rh(gt)}function fg(t,e){var n=At;At|=2;var a=Mh(),i=zh();Rt!==t||bt!==e?(nr=null,er=Le()+500,La(t,e)):Ba=li(t,e);t:do try{if(Et!==0&&gt!==null){e=gt;var l=xe;e:switch(Et){case 1:Et=0,xe=null,Pa(t,e,l,1);break;case 2:case 9:if(Lc(l)){Et=0,xe=null,Ch(e);break}e=function(){Et!==2&&Et!==9||Rt!==t||(Et=7),Ve(t)},l.then(e,e);break t;case 3:Et=7;break t;case 4:Et=5;break t;case 7:Lc(l)?(Et=0,xe=null,Ch(e)):(Et=0,xe=null,Pa(t,e,l,7));break;case 5:var c=null;switch(gt.tag){case 26:c=gt.memoizedState;case 5:case 27:var d=gt;if(!c||dd(c)){Et=0,xe=null;var m=d.sibling;if(m!==null)gt=m;else{var T=d.return;T!==null?(gt=T,ir(T)):gt=null}break e}}Et=0,xe=null,Pa(t,e,l,5);break;case 6:Et=0,xe=null,Pa(t,e,l,6);break;case 8:Mu(),Bt=6;break t;default:throw Error(s(462))}}hg();break}catch(R){Dh(t,R)}while(!0);return nn=Fn=null,z.H=a,z.A=i,At=n,gt!==null?0:(Rt=null,bt=0,Al(),Bt)}function hg(){for(;gt!==null&&!H0();)Rh(gt)}function Rh(t){var e=ih(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?ir(t):gt=e}function Ch(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Ff(n,e,e.pendingProps,e.type,void 0,bt);break;case 11:e=Ff(n,e,e.pendingProps,e.type.render,e.ref,bt);break;case 5:Qo(e);default:rh(n,e),e=gt=Cc(e,fn),e=ih(n,e,fn)}t.memoizedProps=t.pendingProps,e===null?ir(t):gt=e}function Pa(t,e,n,a){nn=Fn=null,Qo(e),Ha=null,ki=0;var i=e.return;try{if(eg(t,i,e,n,bt)){Bt=1,Jl(t,De(n,t.current)),gt=null;return}}catch(l){if(i!==null)throw gt=i,l;Bt=1,Jl(t,De(n,t.current)),gt=null;return}e.flags&32768?(St||a===1?t=!0:Ba||(bt&536870912)!==0?t=!1:(Dn=t=!0,(a===2||a===9||a===3||a===6)&&(a=Ce.current,a!==null&&a.tag===13&&(a.flags|=16384))),kh(e,t)):ir(e)}function ir(t){var e=t;do{if((e.flags&32768)!==0){kh(e,Dn);return}t=e.return;var n=ag(e.alternate,e,fn);if(n!==null){gt=n;return}if(e=e.sibling,e!==null){gt=e;return}gt=e=t}while(e!==null);Bt===0&&(Bt=5)}function kh(t,e){do{var n=ig(t.alternate,t);if(n!==null){n.flags&=32767,gt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){gt=t;return}gt=t=n}while(t!==null);Bt=6,gt=null}function Hh(t,e,n,a,i,l,c,d,m){t.cancelPendingCommit=null;do lr();while(ee!==0);if((At&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(l=e.lanes|e.childLanes,l|=So,X0(t,n,l,c,d,m),t===Rt&&(gt=Rt=null,bt=0),Ga=e,Rn=t,Ya=n,Eu=l,_u=i,Th=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,mg(cl,function(){return jh(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=z.T,z.T=null,i=L.p,L.p=2,c=At,At|=4;try{lg(t,e,n)}finally{At=c,L.p=i,z.T=a}}ee=1,Nh(),Uh(),qh()}}function Nh(){if(ee===1){ee=0;var t=Rn,e=Ga,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=z.T,z.T=null;var a=L.p;L.p=2;var i=At;At|=4;try{bh(e,t);var l=Pu,c=wc(t.containerInfo),d=l.focusedElem,m=l.selectionRange;if(c!==d&&d&&d.ownerDocument&&Sc(d.ownerDocument.documentElement,d)){if(m!==null&&mo(d)){var T=m.start,R=m.end;if(R===void 0&&(R=T),"selectionStart"in d)d.selectionStart=T,d.selectionEnd=Math.min(R,d.value.length);else{var N=d.ownerDocument||document,A=N&&N.defaultView||window;if(A.getSelection){var E=A.getSelection(),lt=d.textContent.length,nt=Math.min(m.start,lt),Mt=m.end===void 0?nt:Math.min(m.end,lt);!E.extend&&nt>Mt&&(c=Mt,Mt=nt,nt=c);var w=xc(d,nt),x=xc(d,Mt);if(w&&x&&(E.rangeCount!==1||E.anchorNode!==w.node||E.anchorOffset!==w.offset||E.focusNode!==x.node||E.focusOffset!==x.offset)){var O=N.createRange();O.setStart(w.node,w.offset),E.removeAllRanges(),nt>Mt?(E.addRange(O),E.extend(x.node,x.offset)):(O.setEnd(x.node,x.offset),E.addRange(O))}}}}for(N=[],E=d;E=E.parentNode;)E.nodeType===1&&N.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<N.length;d++){var H=N[d];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}br=!!Lu,Pu=Lu=null}finally{At=i,L.p=a,z.T=n}}t.current=e,ee=2}}function Uh(){if(ee===2){ee=0;var t=Rn,e=Ga,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=z.T,z.T=null;var a=L.p;L.p=2;var i=At;At|=4;try{dh(t,e.alternate,e)}finally{At=i,L.p=a,z.T=n}}ee=3}}function qh(){if(ee===4||ee===3){ee=0,N0();var t=Rn,e=Ga,n=Ya,a=Th;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ee=5:(ee=0,Ga=Rn=null,Bh(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(zn=null),Kr(n),e=e.stateNode,pe&&typeof pe.onCommitFiberRoot=="function")try{pe.onCommitFiberRoot(ii,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=z.T,i=L.p,L.p=2,z.T=null;try{for(var l=t.onRecoverableError,c=0;c<a.length;c++){var d=a[c];l(d.value,{componentStack:d.stack})}}finally{z.T=e,L.p=i}}(Ya&3)!==0&&lr(),Ve(t),i=t.pendingLanes,(n&4194090)!==0&&(i&42)!==0?t===Du?Li++:(Li=0,Du=t):Li=0,Pi(0)}}function Bh(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,wi(e)))}function lr(t){return Nh(),Uh(),qh(),jh()}function jh(){if(ee!==5)return!1;var t=Rn,e=Eu;Eu=0;var n=Kr(Ya),a=z.T,i=L.p;try{L.p=32>n?32:n,z.T=null,n=_u,_u=null;var l=Rn,c=Ya;if(ee=0,Ga=Rn=null,Ya=0,(At&6)!==0)throw Error(s(331));var d=At;if(At|=4,wh(l.current),yh(l,l.current,c,n),At=d,Pi(0,!1),pe&&typeof pe.onPostCommitFiberRoot=="function")try{pe.onPostCommitFiberRoot(ii,l)}catch{}return!0}finally{L.p=i,z.T=a,Bh(t,e)}}function Gh(t,e,n){e=De(n,e),e=ru(t.stateNode,e,2),t=Sn(t,e,2),t!==null&&(ri(t,2),Ve(t))}function zt(t,e,n){if(t.tag===3)Gh(t,t,n);else for(;e!==null;){if(e.tag===3){Gh(e,t,n);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(zn===null||!zn.has(a))){t=De(n,t),n=Xf(2),a=Sn(e,n,2),a!==null&&(Zf(n,a,e,t),ri(a,2),Ve(a));break}}e=e.return}}function Cu(t,e,n){var a=t.pingCache;if(a===null){a=t.pingCache=new ug;var i=new Set;a.set(e,i)}else i=a.get(e),i===void 0&&(i=new Set,a.set(e,i));i.has(n)||(wu=!0,i.add(n),t=dg.bind(null,t,e,n),e.then(t,t))}function dg(t,e,n){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Rt===t&&(bt&n)===n&&(Bt===4||Bt===3&&(bt&62914560)===bt&&300>Le()-Au?(At&2)===0&&La(t,0):Ou|=n,ja===bt&&(ja=0)),Ve(t)}function Yh(t,e){e===0&&(e=Us()),t=Ta(t,e),t!==null&&(ri(t,e),Ve(t))}function pg(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Yh(t,n)}function gg(t,e){var n=0;switch(t.tag){case 13:var a=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(e),Yh(t,n)}function mg(t,e){return Xr(t,e)}var rr=null,Xa=null,ku=!1,or=!1,Hu=!1,la=0;function Ve(t){t!==Xa&&t.next===null&&(Xa===null?rr=Xa=t:Xa=Xa.next=t),or=!0,ku||(ku=!0,vg())}function Pi(t,e){if(!Hu&&or){Hu=!0;do for(var n=!1,a=rr;a!==null;){if(t!==0){var i=a.pendingLanes;if(i===0)var l=0;else{var c=a.suspendedLanes,d=a.pingedLanes;l=(1<<31-ge(42|t)+1)-1,l&=i&~(c&~d),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(n=!0,Zh(a,l))}else l=bt,l=dl(a,a===Rt?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||li(a,l)||(n=!0,Zh(a,l));a=a.next}while(n);Hu=!1}}function bg(){Lh()}function Lh(){or=ku=!1;var t=0;la!==0&&(Eg()&&(t=la),la=0);for(var e=Le(),n=null,a=rr;a!==null;){var i=a.next,l=Ph(a,e);l===0?(a.next=null,n===null?rr=i:n.next=i,i===null&&(Xa=n)):(n=a,(t!==0||(l&3)!==0)&&(or=!0)),a=i}Pi(t)}function Ph(t,e){for(var n=t.suspendedLanes,a=t.pingedLanes,i=t.expirationTimes,l=t.pendingLanes&-62914561;0<l;){var c=31-ge(l),d=1<<c,m=i[c];m===-1?((d&n)===0||(d&a)!==0)&&(i[c]=P0(d,e)):m<=e&&(t.expiredLanes|=d),l&=~d}if(e=Rt,n=bt,n=dl(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,n===0||t===e&&(Et===2||Et===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Zr(a),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||li(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(a!==null&&Zr(a),Kr(n)){case 2:case 8:n=ks;break;case 32:n=cl;break;case 268435456:n=Hs;break;default:n=cl}return a=Xh.bind(null,t),n=Xr(n,a),t.callbackPriority=e,t.callbackNode=n,e}return a!==null&&a!==null&&Zr(a),t.callbackPriority=2,t.callbackNode=null,2}function Xh(t,e){if(ee!==0&&ee!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(lr()&&t.callbackNode!==n)return null;var a=bt;return a=dl(t,t===Rt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(Eh(t,a,e),Ph(t,Le()),t.callbackNode!=null&&t.callbackNode===n?Xh.bind(null,t):null)}function Zh(t,e){if(lr())return null;Eh(t,e,!0)}function vg(){Dg(function(){(At&6)!==0?Xr(Cs,bg):Lh()})}function Nu(){return la===0&&(la=Ns()),la}function Qh(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:vl(""+t)}function Vh(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function yg(t,e,n,a,i){if(e==="submit"&&n&&n.stateNode===i){var l=Qh((i[ue]||null).action),c=a.submitter;c&&(e=(e=c[ue]||null)?Qh(e.formAction):c.getAttribute("formAction"),e!==null&&(l=e,c=null));var d=new wl("action","action",null,a,i);t.push({event:d,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(la!==0){var m=c?Vh(i,c):new FormData(i);eu(n,{pending:!0,data:m,method:i.method,action:l},null,m)}}else typeof l=="function"&&(d.preventDefault(),m=c?Vh(i,c):new FormData(i),eu(n,{pending:!0,data:m,method:i.method,action:l},l,m))},currentTarget:i}]})}}for(var Uu=0;Uu<xo.length;Uu++){var qu=xo[Uu],xg=qu.toLowerCase(),Sg=qu[0].toUpperCase()+qu.slice(1);Ue(xg,"on"+Sg)}Ue(Ac,"onAnimationEnd"),Ue(Ec,"onAnimationIteration"),Ue(_c,"onAnimationStart"),Ue("dblclick","onDoubleClick"),Ue("focusin","onFocus"),Ue("focusout","onBlur"),Ue(Bp,"onTransitionRun"),Ue(jp,"onTransitionStart"),Ue(Gp,"onTransitionCancel"),Ue(Dc,"onTransitionEnd"),pa("onMouseEnter",["mouseout","mouseover"]),pa("onMouseLeave",["mouseout","mouseover"]),pa("onPointerEnter",["pointerout","pointerover"]),pa("onPointerLeave",["pointerout","pointerover"]),Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xi));function Kh(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var a=t[n],i=a.event;a=a.listeners;t:{var l=void 0;if(e)for(var c=a.length-1;0<=c;c--){var d=a[c],m=d.instance,T=d.currentTarget;if(d=d.listener,m!==l&&i.isPropagationStopped())break t;l=d,i.currentTarget=T;try{l(i)}catch(R){Kl(R)}i.currentTarget=null,l=m}else for(c=0;c<a.length;c++){if(d=a[c],m=d.instance,T=d.currentTarget,d=d.listener,m!==l&&i.isPropagationStopped())break t;l=d,i.currentTarget=T;try{l(i)}catch(R){Kl(R)}i.currentTarget=null,l=m}}}}function mt(t,e){var n=e[Jr];n===void 0&&(n=e[Jr]=new Set);var a=t+"__bubble";n.has(a)||(Jh(e,t,2,!1),n.add(a))}function Bu(t,e,n){var a=0;e&&(a|=4),Jh(n,t,a,e)}var ur="_reactListening"+Math.random().toString(36).slice(2);function ju(t){if(!t[ur]){t[ur]=!0,Ys.forEach(function(n){n!=="selectionchange"&&(wg.has(n)||Bu(n,!1,t),Bu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ur]||(e[ur]=!0,Bu("selectionchange",!1,e))}}function Jh(t,e,n,a){switch(yd(e)){case 2:var i=Jg;break;case 8:i=$g;break;default:i=Iu}n=i.bind(null,e,n,t),i=void 0,!ro||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),a?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Gu(t,e,n,a,i){var l=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var d=a.stateNode.containerInfo;if(d===i)break;if(c===4)for(c=a.return;c!==null;){var m=c.tag;if((m===3||m===4)&&c.stateNode.containerInfo===i)return;c=c.return}for(;d!==null;){if(c=fa(d),c===null)return;if(m=c.tag,m===5||m===6||m===26||m===27){a=l=c;continue t}d=d.parentNode}}a=a.return}ec(function(){var T=l,R=io(n),N=[];t:{var A=Mc.get(t);if(A!==void 0){var E=wl,lt=t;switch(t){case"keypress":if(xl(n)===0)break t;case"keydown":case"keyup":E=mp;break;case"focusin":lt="focus",E=co;break;case"focusout":lt="blur",E=co;break;case"beforeblur":case"afterblur":E=co;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=ip;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=yp;break;case Ac:case Ec:case _c:E=op;break;case Dc:E=Sp;break;case"scroll":case"scrollend":E=np;break;case"wheel":E=Op;break;case"copy":case"cut":case"paste":E=sp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=rc;break;case"toggle":case"beforetoggle":E=Ap}var nt=(e&4)!==0,Mt=!nt&&(t==="scroll"||t==="scrollend"),w=nt?A!==null?A+"Capture":null:A;nt=[];for(var x=T,O;x!==null;){var H=x;if(O=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||O===null||w===null||(H=si(x,w),H!=null&&nt.push(Zi(x,H,O))),Mt)break;x=x.return}0<nt.length&&(A=new E(A,lt,null,n,R),N.push({event:A,listeners:nt}))}}if((e&7)===0){t:{if(A=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",A&&n!==ao&&(lt=n.relatedTarget||n.fromElement)&&(fa(lt)||lt[ca]))break t;if((E||A)&&(A=R.window===R?R:(A=R.ownerDocument)?A.defaultView||A.parentWindow:window,E?(lt=n.relatedTarget||n.toElement,E=T,lt=lt?fa(lt):null,lt!==null&&(Mt=v(lt),nt=lt.tag,lt!==Mt||nt!==5&&nt!==27&&nt!==6)&&(lt=null)):(E=null,lt=T),E!==lt)){if(nt=ic,H="onMouseLeave",w="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(nt=rc,H="onPointerLeave",w="onPointerEnter",x="pointer"),Mt=E==null?A:ui(E),O=lt==null?A:ui(lt),A=new nt(H,x+"leave",E,n,R),A.target=Mt,A.relatedTarget=O,H=null,fa(R)===T&&(nt=new nt(w,x+"enter",lt,n,R),nt.target=O,nt.relatedTarget=Mt,H=nt),Mt=H,E&&lt)e:{for(nt=E,w=lt,x=0,O=nt;O;O=Za(O))x++;for(O=0,H=w;H;H=Za(H))O++;for(;0<x-O;)nt=Za(nt),x--;for(;0<O-x;)w=Za(w),O--;for(;x--;){if(nt===w||w!==null&&nt===w.alternate)break e;nt=Za(nt),w=Za(w)}nt=null}else nt=null;E!==null&&$h(N,A,E,nt,!1),lt!==null&&Mt!==null&&$h(N,Mt,lt,nt,!0)}}t:{if(A=T?ui(T):window,E=A.nodeName&&A.nodeName.toLowerCase(),E==="select"||E==="input"&&A.type==="file")var Q=pc;else if(hc(A))if(gc)Q=Np;else{Q=kp;var ht=Cp}else E=A.nodeName,!E||E.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?T&&no(T.elementType)&&(Q=pc):Q=Hp;if(Q&&(Q=Q(t,T))){dc(N,Q,n,R);break t}ht&&ht(t,A,T),t==="focusout"&&T&&A.type==="number"&&T.memoizedProps.value!=null&&eo(A,"number",A.value)}switch(ht=T?ui(T):window,t){case"focusin":(hc(ht)||ht.contentEditable==="true")&&(Sa=ht,bo=T,bi=null);break;case"focusout":bi=bo=Sa=null;break;case"mousedown":vo=!0;break;case"contextmenu":case"mouseup":case"dragend":vo=!1,Oc(N,n,R);break;case"selectionchange":if(qp)break;case"keydown":case"keyup":Oc(N,n,R)}var $;if(ho)t:{switch(t){case"compositionstart":var it="onCompositionStart";break t;case"compositionend":it="onCompositionEnd";break t;case"compositionupdate":it="onCompositionUpdate";break t}it=void 0}else xa?cc(t,n)&&(it="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(it="onCompositionStart");it&&(oc&&n.locale!=="ko"&&(xa||it!=="onCompositionStart"?it==="onCompositionEnd"&&xa&&($=nc()):(bn=R,oo="value"in bn?bn.value:bn.textContent,xa=!0)),ht=sr(T,it),0<ht.length&&(it=new lc(it,t,null,n,R),N.push({event:it,listeners:ht}),$?it.data=$:($=fc(n),$!==null&&(it.data=$)))),($=_p?Dp(t,n):Mp(t,n))&&(it=sr(T,"onBeforeInput"),0<it.length&&(ht=new lc("onBeforeInput","beforeinput",null,n,R),N.push({event:ht,listeners:it}),ht.data=$)),yg(N,t,T,n,R)}Kh(N,e)})}function Zi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function sr(t,e){for(var n=e+"Capture",a=[];t!==null;){var i=t,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=si(t,n),i!=null&&a.unshift(Zi(t,i,l)),i=si(t,e),i!=null&&a.push(Zi(t,i,l))),t.tag===3)return a;t=t.return}return[]}function Za(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function $h(t,e,n,a,i){for(var l=e._reactName,c=[];n!==null&&n!==a;){var d=n,m=d.alternate,T=d.stateNode;if(d=d.tag,m!==null&&m===a)break;d!==5&&d!==26&&d!==27||T===null||(m=T,i?(T=si(n,l),T!=null&&c.unshift(Zi(n,T,m))):i||(T=si(n,l),T!=null&&c.push(Zi(n,T,m)))),n=n.return}c.length!==0&&t.push({event:e,listeners:c})}var Og=/\r\n?/g,Tg=/\u0000|\uFFFD/g;function Wh(t){return(typeof t=="string"?t:""+t).replace(Og,`
`).replace(Tg,"")}function Fh(t,e){return e=Wh(e),Wh(t)===e}function cr(){}function Dt(t,e,n,a,i,l){switch(n){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||ba(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&ba(t,""+a);break;case"className":gl(t,"class",a);break;case"tabIndex":gl(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":gl(t,n,a);break;case"style":Is(t,a,l);break;case"data":if(e!=="object"){gl(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=vl(""+a),t.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(n==="formAction"?(e!=="input"&&Dt(t,e,"name",i.name,i,null),Dt(t,e,"formEncType",i.formEncType,i,null),Dt(t,e,"formMethod",i.formMethod,i,null),Dt(t,e,"formTarget",i.formTarget,i,null)):(Dt(t,e,"encType",i.encType,i,null),Dt(t,e,"method",i.method,i,null),Dt(t,e,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=vl(""+a),t.setAttribute(n,a);break;case"onClick":a!=null&&(t.onclick=cr);break;case"onScroll":a!=null&&mt("scroll",t);break;case"onScrollEnd":a!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}n=vl(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""+a):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":a===!0?t.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,a):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(n,a):t.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(n):t.setAttribute(n,a);break;case"popover":mt("beforetoggle",t),mt("toggle",t),pl(t,"popover",a);break;case"xlinkActuate":We(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":We(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":We(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":We(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":We(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":We(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":We(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":We(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":We(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":pl(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=tp.get(n)||n,pl(t,n,a))}}function Yu(t,e,n,a,i,l){switch(n){case"style":Is(t,a,l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"children":typeof a=="string"?ba(t,a):(typeof a=="number"||typeof a=="bigint")&&ba(t,""+a);break;case"onScroll":a!=null&&mt("scroll",t);break;case"onScrollEnd":a!=null&&mt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=cr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ls.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),e=n.slice(2,i?n.length-7:void 0),l=t[ue]||null,l=l!=null?l[n]:null,typeof l=="function"&&t.removeEventListener(e,l,i),typeof a=="function")){typeof l!="function"&&l!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,a,i);break t}n in t?t[n]=a:a===!0?t.setAttribute(n,""):pl(t,n,a)}}}function ne(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var a=!1,i=!1,l;for(l in n)if(n.hasOwnProperty(l)){var c=n[l];if(c!=null)switch(l){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Dt(t,e,l,c,n,null)}}i&&Dt(t,e,"srcSet",n.srcSet,n,null),a&&Dt(t,e,"src",n.src,n,null);return;case"input":mt("invalid",t);var d=l=c=i=null,m=null,T=null;for(a in n)if(n.hasOwnProperty(a)){var R=n[a];if(R!=null)switch(a){case"name":i=R;break;case"type":c=R;break;case"checked":m=R;break;case"defaultChecked":T=R;break;case"value":l=R;break;case"defaultValue":d=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(137,e));break;default:Dt(t,e,a,R,n,null)}}Js(t,l,d,m,T,c,i,!1),ml(t);return;case"select":mt("invalid",t),a=c=l=null;for(i in n)if(n.hasOwnProperty(i)&&(d=n[i],d!=null))switch(i){case"value":l=d;break;case"defaultValue":c=d;break;case"multiple":a=d;default:Dt(t,e,i,d,n,null)}e=l,n=c,t.multiple=!!a,e!=null?ma(t,!!a,e,!1):n!=null&&ma(t,!!a,n,!0);return;case"textarea":mt("invalid",t),l=i=a=null;for(c in n)if(n.hasOwnProperty(c)&&(d=n[c],d!=null))switch(c){case"value":a=d;break;case"defaultValue":i=d;break;case"children":l=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(s(91));break;default:Dt(t,e,c,d,n,null)}Ws(t,a,i,l),ml(t);return;case"option":for(m in n)if(n.hasOwnProperty(m)&&(a=n[m],a!=null))switch(m){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Dt(t,e,m,a,n,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(a=0;a<Xi.length;a++)mt(Xi[a],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in n)if(n.hasOwnProperty(T)&&(a=n[T],a!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Dt(t,e,T,a,n,null)}return;default:if(no(e)){for(R in n)n.hasOwnProperty(R)&&(a=n[R],a!==void 0&&Yu(t,e,R,a,n,void 0));return}}for(d in n)n.hasOwnProperty(d)&&(a=n[d],a!=null&&Dt(t,e,d,a,n,null))}function Ag(t,e,n,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,c=null,d=null,m=null,T=null,R=null;for(E in n){var N=n[E];if(n.hasOwnProperty(E)&&N!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":m=N;default:a.hasOwnProperty(E)||Dt(t,e,E,null,a,N)}}for(var A in a){var E=a[A];if(N=n[A],a.hasOwnProperty(A)&&(E!=null||N!=null))switch(A){case"type":l=E;break;case"name":i=E;break;case"checked":T=E;break;case"defaultChecked":R=E;break;case"value":c=E;break;case"defaultValue":d=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(137,e));break;default:E!==N&&Dt(t,e,A,E,a,N)}}to(t,c,d,m,T,R,l,i);return;case"select":E=c=d=A=null;for(l in n)if(m=n[l],n.hasOwnProperty(l)&&m!=null)switch(l){case"value":break;case"multiple":E=m;default:a.hasOwnProperty(l)||Dt(t,e,l,null,a,m)}for(i in a)if(l=a[i],m=n[i],a.hasOwnProperty(i)&&(l!=null||m!=null))switch(i){case"value":A=l;break;case"defaultValue":d=l;break;case"multiple":c=l;default:l!==m&&Dt(t,e,i,l,a,m)}e=d,n=c,a=E,A!=null?ma(t,!!n,A,!1):!!a!=!!n&&(e!=null?ma(t,!!n,e,!0):ma(t,!!n,n?[]:"",!1));return;case"textarea":E=A=null;for(d in n)if(i=n[d],n.hasOwnProperty(d)&&i!=null&&!a.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Dt(t,e,d,null,a,i)}for(c in a)if(i=a[c],l=n[c],a.hasOwnProperty(c)&&(i!=null||l!=null))switch(c){case"value":A=i;break;case"defaultValue":E=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==l&&Dt(t,e,c,i,a,l)}$s(t,A,E);return;case"option":for(var lt in n)if(A=n[lt],n.hasOwnProperty(lt)&&A!=null&&!a.hasOwnProperty(lt))switch(lt){case"selected":t.selected=!1;break;default:Dt(t,e,lt,null,a,A)}for(m in a)if(A=a[m],E=n[m],a.hasOwnProperty(m)&&A!==E&&(A!=null||E!=null))switch(m){case"selected":t.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:Dt(t,e,m,A,a,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in n)A=n[nt],n.hasOwnProperty(nt)&&A!=null&&!a.hasOwnProperty(nt)&&Dt(t,e,nt,null,a,A);for(T in a)if(A=a[T],E=n[T],a.hasOwnProperty(T)&&A!==E&&(A!=null||E!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,e));break;default:Dt(t,e,T,A,a,E)}return;default:if(no(e)){for(var Mt in n)A=n[Mt],n.hasOwnProperty(Mt)&&A!==void 0&&!a.hasOwnProperty(Mt)&&Yu(t,e,Mt,void 0,a,A);for(R in a)A=a[R],E=n[R],!a.hasOwnProperty(R)||A===E||A===void 0&&E===void 0||Yu(t,e,R,A,a,E);return}}for(var w in n)A=n[w],n.hasOwnProperty(w)&&A!=null&&!a.hasOwnProperty(w)&&Dt(t,e,w,null,a,A);for(N in a)A=a[N],E=n[N],!a.hasOwnProperty(N)||A===E||A==null&&E==null||Dt(t,e,N,A,a,E)}var Lu=null,Pu=null;function fr(t){return t.nodeType===9?t:t.ownerDocument}function Ih(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function td(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Xu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zu=null;function Eg(){var t=window.event;return t&&t.type==="popstate"?t===Zu?!1:(Zu=t,!0):(Zu=null,!1)}var ed=typeof setTimeout=="function"?setTimeout:void 0,_g=typeof clearTimeout=="function"?clearTimeout:void 0,nd=typeof Promise=="function"?Promise:void 0,Dg=typeof queueMicrotask=="function"?queueMicrotask:typeof nd<"u"?function(t){return nd.resolve(null).then(t).catch(Mg)}:ed;function Mg(t){setTimeout(function(){throw t})}function kn(t){return t==="head"}function ad(t,e){var n=e,a=0,i=0;do{var l=n.nextSibling;if(t.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(0<a&&8>a){n=a;var c=t.ownerDocument;if(n&1&&Qi(c.documentElement),n&2&&Qi(c.body),n&4)for(n=c.head,Qi(n),c=n.firstChild;c;){var d=c.nextSibling,m=c.nodeName;c[oi]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=d}}if(i===0){t.removeChild(l),tl(e);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:a=n.charCodeAt(0)-48;else a=0;n=l}while(n);tl(e)}function Qu(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Qu(n),$r(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function zg(t,e,n,a){for(;t.nodeType===1;){var i=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[oi])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(l=t.getAttribute("rel"),l==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(l!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(l=t.getAttribute("src"),(l!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===l)return t}else return t;if(t=Be(t.nextSibling),t===null)break}return null}function Rg(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Be(t.nextSibling),t===null))return null;return t}function Vu(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Cg(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var a=function(){e(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Be(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Ku=null;function id(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function ld(t,e,n){switch(e=fr(n),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Qi(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);$r(t)}var He=new Map,rd=new Set;function hr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var hn=L.d;L.d={f:kg,r:Hg,D:Ng,C:Ug,L:qg,m:Bg,X:Gg,S:jg,M:Yg};function kg(){var t=hn.f(),e=ar();return t||e}function Hg(t){var e=ha(t);e!==null&&e.tag===5&&e.type==="form"?Ef(e):hn.r(t)}var Qa=typeof document>"u"?null:document;function od(t,e,n){var a=Qa;if(a&&typeof e=="string"&&e){var i=_e(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),rd.has(i)||(rd.add(i),t={rel:t,crossOrigin:n,href:e},a.querySelector(i)===null&&(e=a.createElement("link"),ne(e,"link",t),Jt(e),a.head.appendChild(e)))}}function Ng(t){hn.D(t),od("dns-prefetch",t,null)}function Ug(t,e){hn.C(t,e),od("preconnect",t,e)}function qg(t,e,n){hn.L(t,e,n);var a=Qa;if(a&&t&&e){var i='link[rel="preload"][as="'+_e(e)+'"]';e==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+_e(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+_e(n.imageSizes)+'"]')):i+='[href="'+_e(t)+'"]';var l=i;switch(e){case"style":l=Va(t);break;case"script":l=Ka(t)}He.has(l)||(t=U({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),He.set(l,t),a.querySelector(i)!==null||e==="style"&&a.querySelector(Vi(l))||e==="script"&&a.querySelector(Ki(l))||(e=a.createElement("link"),ne(e,"link",t),Jt(e),a.head.appendChild(e)))}}function Bg(t,e){hn.m(t,e);var n=Qa;if(n&&t){var a=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+_e(a)+'"][href="'+_e(t)+'"]',l=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Ka(t)}if(!He.has(l)&&(t=U({rel:"modulepreload",href:t},e),He.set(l,t),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ki(l)))return}a=n.createElement("link"),ne(a,"link",t),Jt(a),n.head.appendChild(a)}}}function jg(t,e,n){hn.S(t,e,n);var a=Qa;if(a&&t){var i=da(a).hoistableStyles,l=Va(t);e=e||"default";var c=i.get(l);if(!c){var d={loading:0,preload:null};if(c=a.querySelector(Vi(l)))d.loading=5;else{t=U({rel:"stylesheet",href:t,"data-precedence":e},n),(n=He.get(l))&&Ju(t,n);var m=c=a.createElement("link");Jt(m),ne(m,"link",t),m._p=new Promise(function(T,R){m.onload=T,m.onerror=R}),m.addEventListener("load",function(){d.loading|=1}),m.addEventListener("error",function(){d.loading|=2}),d.loading|=4,dr(c,e,a)}c={type:"stylesheet",instance:c,count:1,state:d},i.set(l,c)}}}function Gg(t,e){hn.X(t,e);var n=Qa;if(n&&t){var a=da(n).hoistableScripts,i=Ka(t),l=a.get(i);l||(l=n.querySelector(Ki(i)),l||(t=U({src:t,async:!0},e),(e=He.get(i))&&$u(t,e),l=n.createElement("script"),Jt(l),ne(l,"link",t),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function Yg(t,e){hn.M(t,e);var n=Qa;if(n&&t){var a=da(n).hoistableScripts,i=Ka(t),l=a.get(i);l||(l=n.querySelector(Ki(i)),l||(t=U({src:t,async:!0,type:"module"},e),(e=He.get(i))&&$u(t,e),l=n.createElement("script"),Jt(l),ne(l,"link",t),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function ud(t,e,n,a){var i=(i=at.current)?hr(i):null;if(!i)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Va(n.href),n=da(i).hoistableStyles,a=n.get(e),a||(a={type:"style",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Va(n.href);var l=da(i).hoistableStyles,c=l.get(t);if(c||(i=i.ownerDocument||i,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(t,c),(l=i.querySelector(Vi(t)))&&!l._p&&(c.instance=l,c.state.loading=5),He.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},He.set(t,n),l||Lg(i,t,n,c.state))),e&&a===null)throw Error(s(528,""));return c}if(e&&a!==null)throw Error(s(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ka(n),n=da(i).hoistableScripts,a=n.get(e),a||(a={type:"script",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Va(t){return'href="'+_e(t)+'"'}function Vi(t){return'link[rel="stylesheet"]['+t+"]"}function sd(t){return U({},t,{"data-precedence":t.precedence,precedence:null})}function Lg(t,e,n,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),ne(e,"link",n),Jt(e),t.head.appendChild(e))}function Ka(t){return'[src="'+_e(t)+'"]'}function Ki(t){return"script[async]"+t}function cd(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+_e(n.href)+'"]');if(a)return e.instance=a,Jt(a),a;var i=U({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Jt(a),ne(a,"style",i),dr(a,n.precedence,t),e.instance=a;case"stylesheet":i=Va(n.href);var l=t.querySelector(Vi(i));if(l)return e.state.loading|=4,e.instance=l,Jt(l),l;a=sd(n),(i=He.get(i))&&Ju(a,i),l=(t.ownerDocument||t).createElement("link"),Jt(l);var c=l;return c._p=new Promise(function(d,m){c.onload=d,c.onerror=m}),ne(l,"link",a),e.state.loading|=4,dr(l,n.precedence,t),e.instance=l;case"script":return l=Ka(n.src),(i=t.querySelector(Ki(l)))?(e.instance=i,Jt(i),i):(a=n,(i=He.get(l))&&(a=U({},n),$u(a,i)),t=t.ownerDocument||t,i=t.createElement("script"),Jt(i),ne(i,"link",a),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,dr(a,n.precedence,t));return e.instance}function dr(t,e,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,l=i,c=0;c<a.length;c++){var d=a[c];if(d.dataset.precedence===e)l=d;else if(l!==i)break}l?l.parentNode.insertBefore(t,l.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Ju(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function $u(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var pr=null;function fd(t,e,n){if(pr===null){var a=new Map,i=pr=new Map;i.set(n,a)}else i=pr,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(t))return a;for(a.set(t,null),n=n.getElementsByTagName(t),i=0;i<n.length;i++){var l=n[i];if(!(l[oi]||l[ie]||t==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var c=l.getAttribute(e)||"";c=t+c;var d=a.get(c);d?d.push(l):a.set(c,[l])}}return a}function hd(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function Pg(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function dd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ji=null;function Xg(){}function Zg(t,e,n){if(Ji===null)throw Error(s(475));var a=Ji;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=Va(n.href),l=t.querySelector(Vi(i));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=gr.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=l,Jt(l);return}l=t.ownerDocument||t,n=sd(n),(i=He.get(i))&&Ju(n,i),l=l.createElement("link"),Jt(l);var c=l;c._p=new Promise(function(d,m){c.onload=d,c.onerror=m}),ne(l,"link",n),e.instance=l}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=gr.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function Qg(){if(Ji===null)throw Error(s(475));var t=Ji;return t.stylesheets&&t.count===0&&Wu(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&Wu(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function gr(){if(this.count--,this.count===0){if(this.stylesheets)Wu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mr=null;function Wu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mr=new Map,e.forEach(Vg,t),mr=null,gr.call(t))}function Vg(t,e){if(!(e.state.loading&4)){var n=mr.get(t);if(n)var a=n.get(null);else{n=new Map,mr.set(t,n);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var c=i[l];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(n.set(c.dataset.precedence,c),a=c)}a&&n.set(null,a)}i=e.instance,c=i.getAttribute("data-precedence"),l=n.get(c)||a,l===a&&n.set(null,i),n.set(c,i),this.count++,a=gr.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),l?l.parentNode.insertBefore(i,l.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var $i={$$typeof:C,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function Kg(t,e,n,a,i,l,c,d){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qr(0),this.hiddenUpdates=Qr(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function pd(t,e,n,a,i,l,c,d,m,T,R,N){return t=new Kg(t,e,n,c,d,m,T,N),e=1,l===!0&&(e|=24),l=be(3,null,null,e),t.current=l,l.stateNode=t,e=Co(),e.refCount++,t.pooledCache=e,e.refCount++,l.memoizedState={element:a,isDehydrated:n,cache:e},Uo(l),t}function gd(t){return t?(t=Aa,t):Aa}function md(t,e,n,a,i,l){i=gd(i),a.context===null?a.context=i:a.pendingContext=i,a=xn(e),a.payload={element:n},l=l===void 0?null:l,l!==null&&(a.callback=l),n=Sn(t,a,e),n!==null&&(we(n,t,e),Ei(n,t,e))}function bd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Fu(t,e){bd(t,e),(t=t.alternate)&&bd(t,e)}function vd(t){if(t.tag===13){var e=Ta(t,67108864);e!==null&&we(e,t,67108864),Fu(t,67108864)}}var br=!0;function Jg(t,e,n,a){var i=z.T;z.T=null;var l=L.p;try{L.p=2,Iu(t,e,n,a)}finally{L.p=l,z.T=i}}function $g(t,e,n,a){var i=z.T;z.T=null;var l=L.p;try{L.p=8,Iu(t,e,n,a)}finally{L.p=l,z.T=i}}function Iu(t,e,n,a){if(br){var i=ts(a);if(i===null)Gu(t,e,a,vr,n),xd(t,a);else if(Fg(i,t,e,n,a))a.stopPropagation();else if(xd(t,a),e&4&&-1<Wg.indexOf(t)){for(;i!==null;){var l=ha(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var c=Ln(l.pendingLanes);if(c!==0){var d=l;for(d.pendingLanes|=2,d.entangledLanes|=2;c;){var m=1<<31-ge(c);d.entanglements[1]|=m,c&=~m}Ve(l),(At&6)===0&&(er=Le()+500,Pi(0))}}break;case 13:d=Ta(l,2),d!==null&&we(d,l,2),ar(),Fu(l,2)}if(l=ts(a),l===null&&Gu(t,e,a,vr,n),l===i)break;i=l}i!==null&&a.stopPropagation()}else Gu(t,e,a,null,n)}}function ts(t){return t=io(t),es(t)}var vr=null;function es(t){if(vr=null,t=fa(t),t!==null){var e=v(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=D(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return vr=t,null}function yd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(U0()){case Cs:return 2;case ks:return 8;case cl:case q0:return 32;case Hs:return 268435456;default:return 32}default:return 32}}var ns=!1,Hn=null,Nn=null,Un=null,Wi=new Map,Fi=new Map,qn=[],Wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xd(t,e){switch(t){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":Wi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(e.pointerId)}}function Ii(t,e,n,a,i,l){return t===null||t.nativeEvent!==l?(t={blockedOn:e,domEventName:n,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},e!==null&&(e=ha(e),e!==null&&vd(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Fg(t,e,n,a,i){switch(e){case"focusin":return Hn=Ii(Hn,t,e,n,a,i),!0;case"dragenter":return Nn=Ii(Nn,t,e,n,a,i),!0;case"mouseover":return Un=Ii(Un,t,e,n,a,i),!0;case"pointerover":var l=i.pointerId;return Wi.set(l,Ii(Wi.get(l)||null,t,e,n,a,i)),!0;case"gotpointercapture":return l=i.pointerId,Fi.set(l,Ii(Fi.get(l)||null,t,e,n,a,i)),!0}return!1}function Sd(t){var e=fa(t.target);if(e!==null){var n=v(e);if(n!==null){if(e=n.tag,e===13){if(e=D(n),e!==null){t.blockedOn=e,Z0(t.priority,function(){if(n.tag===13){var a=Se();a=Vr(a);var i=Ta(n,a);i!==null&&we(i,n,a),Fu(n,a)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yr(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ts(t.nativeEvent);if(n===null){n=t.nativeEvent;var a=new n.constructor(n.type,n);ao=a,n.target.dispatchEvent(a),ao=null}else return e=ha(n),e!==null&&vd(e),t.blockedOn=n,!1;e.shift()}return!0}function wd(t,e,n){yr(t)&&n.delete(e)}function Ig(){ns=!1,Hn!==null&&yr(Hn)&&(Hn=null),Nn!==null&&yr(Nn)&&(Nn=null),Un!==null&&yr(Un)&&(Un=null),Wi.forEach(wd),Fi.forEach(wd)}function xr(t,e){t.blockedOn===e&&(t.blockedOn=null,ns||(ns=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ig)))}var Sr=null;function Od(t){Sr!==t&&(Sr=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Sr===t&&(Sr=null);for(var e=0;e<t.length;e+=3){var n=t[e],a=t[e+1],i=t[e+2];if(typeof a!="function"){if(es(a||n)===null)continue;break}var l=ha(n);l!==null&&(t.splice(e,3),e-=3,eu(l,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function tl(t){function e(m){return xr(m,t)}Hn!==null&&xr(Hn,t),Nn!==null&&xr(Nn,t),Un!==null&&xr(Un,t),Wi.forEach(e),Fi.forEach(e);for(var n=0;n<qn.length;n++){var a=qn[n];a.blockedOn===t&&(a.blockedOn=null)}for(;0<qn.length&&(n=qn[0],n.blockedOn===null);)Sd(n),n.blockedOn===null&&qn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],l=n[a+1],c=i[ue]||null;if(typeof l=="function")c||Od(n);else if(c){var d=null;if(l&&l.hasAttribute("formAction")){if(i=l,c=l[ue]||null)d=c.formAction;else if(es(i)!==null)continue}else d=c.action;typeof d=="function"?n[a+1]=d:(n.splice(a,3),a-=3),Od(n)}}}function as(t){this._internalRoot=t}wr.prototype.render=as.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var n=e.current,a=Se();md(n,a,t,e,null,null)},wr.prototype.unmount=as.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;md(t.current,2,null,t,null,null),ar(),e[ca]=null}};function wr(t){this._internalRoot=t}wr.prototype.unstable_scheduleHydration=function(t){if(t){var e=js();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qn.length&&e!==0&&e<qn[n].priority;n++);qn.splice(n,0,t),n===0&&Sd(t)}};var Td=o.version;if(Td!=="19.1.0")throw Error(s(527,Td,"19.1.0"));L.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=M(e),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var tm={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Or.isDisabled&&Or.supportsFiber)try{ii=Or.inject(tm),pe=Or}catch{}}return nl.createRoot=function(t,e){if(!p(t))throw Error(s(299));var n=!1,a="",i=Gf,l=Yf,c=Lf,d=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(d=e.unstable_transitionCallbacks)),e=pd(t,1,!1,null,null,n,a,i,l,c,d,null),t[ca]=e.current,ju(t),new as(e)},nl.hydrateRoot=function(t,e,n){if(!p(t))throw Error(s(299));var a=!1,i="",l=Gf,c=Yf,d=Lf,m=null,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(m=n.unstable_transitionCallbacks),n.formState!==void 0&&(T=n.formState)),e=pd(t,1,!0,e,n??null,a,i,l,c,d,m,T),e.context=gd(null),n=e.current,a=Se(),a=Vr(a),i=xn(a),i.callback=null,Sn(n,i,a),n=a,e.current.lanes=n,ri(e,n),Ve(e),t[ca]=e.current,ju(t),new wr(e)},nl.version="19.1.0",nl}var Hd;function fm(){if(Hd)return rs.exports;Hd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),rs.exports=cm(),rs.exports}var hm=fm();const dm=()=>{const[r,o]=vt.useState({width:typeof window<"u"?window.innerWidth:0,height:typeof window<"u"?window.innerHeight:0});vt.useEffect(()=>{function v(){o({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",v),v(),()=>window.removeEventListener("resize",v)},[]);const f=r.width<=768||r.height<=730;return{height:f?300:600,width:f?300:600,windowSize:r,isMobile:f}},pm=()=>{const[r,o]=vt.useState(()=>typeof window>"u"?!1:window.innerWidth>window.innerHeight);return vt.useEffect(()=>{function f(){o(window.innerWidth>window.innerHeight)}return window.addEventListener("resize",f),window.addEventListener("orientationchange",f),()=>{window.removeEventListener("resize",f),window.removeEventListener("orientationchange",f)}},[]),r};function Vt(r,o){o===void 0&&(o={});var f=o.insertAt;if(r&&typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],p=document.createElement("style");p.type="text/css",f==="top"&&s.firstChild?s.insertBefore(p,s.firstChild):s.appendChild(p),p.styleSheet?p.styleSheet.cssText=r:p.appendChild(document.createTextNode(r))}}Vt(`.react-loading-indicator-normalize,
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
}`);var Je=function(){return Je=Object.assign||function(r){for(var o,f=1,s=arguments.length;f<s;f++)for(var p in o=arguments[f])Object.prototype.hasOwnProperty.call(o,p)&&(r[p]=o[p]);return r},Je.apply(this,arguments)};function kr(r){return kr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},kr(r)}var gm=/^\s+/,mm=/\s+$/;function W(r,o){if(o=o||{},(r=r||"")instanceof W)return r;if(!(this instanceof W))return new W(r,o);var f=function(s){var p={r:0,g:0,b:0},v=1,D=null,q=null,M=null,S=!1,U=!1;typeof s=="string"&&(s=function(X){X=X.replace(gm,"").replace(mm,"").toLowerCase();var j,V=!1;if(ms[X])X=ms[X],V=!0;else if(X=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(j=je.rgb.exec(X))?{r:j[1],g:j[2],b:j[3]}:(j=je.rgba.exec(X))?{r:j[1],g:j[2],b:j[3],a:j[4]}:(j=je.hsl.exec(X))?{h:j[1],s:j[2],l:j[3]}:(j=je.hsla.exec(X))?{h:j[1],s:j[2],l:j[3],a:j[4]}:(j=je.hsv.exec(X))?{h:j[1],s:j[2],v:j[3]}:(j=je.hsva.exec(X))?{h:j[1],s:j[2],v:j[3],a:j[4]}:(j=je.hex8.exec(X))?{r:Oe(j[1]),g:Oe(j[2]),b:Oe(j[3]),a:Gd(j[4]),format:V?"name":"hex8"}:(j=je.hex6.exec(X))?{r:Oe(j[1]),g:Oe(j[2]),b:Oe(j[3]),format:V?"name":"hex"}:(j=je.hex4.exec(X))?{r:Oe(j[1]+""+j[1]),g:Oe(j[2]+""+j[2]),b:Oe(j[3]+""+j[3]),a:Gd(j[4]+""+j[4]),format:V?"name":"hex8"}:(j=je.hex3.exec(X))?{r:Oe(j[1]+""+j[1]),g:Oe(j[2]+""+j[2]),b:Oe(j[3]+""+j[3]),format:V?"name":"hex"}:!1}(s)),kr(s)=="object"&&(dn(s.r)&&dn(s.g)&&dn(s.b)?(G=s.r,Z=s.g,K=s.b,p={r:255*Nt(G,255),g:255*Nt(Z,255),b:255*Nt(K,255)},S=!0,U=String(s.r).substr(-1)==="%"?"prgb":"rgb"):dn(s.h)&&dn(s.s)&&dn(s.v)?(D=al(s.s),q=al(s.v),p=function(X,j,V){X=6*Nt(X,360),j=Nt(j,100),V=Nt(V,100);var rt=Math.floor(X),ut=X-rt,C=V*(1-j),u=V*(1-ut*j),h=V*(1-(1-ut)*j),g=rt%6,y=[V,u,C,C,h,V][g],_=[h,V,V,u,C,C][g],k=[C,C,h,V,V,u][g];return{r:255*y,g:255*_,b:255*k}}(s.h,D,q),S=!0,U="hsv"):dn(s.h)&&dn(s.s)&&dn(s.l)&&(D=al(s.s),M=al(s.l),p=function(X,j,V){var rt,ut,C;function u(y,_,k){return k<0&&(k+=1),k>1&&(k-=1),k<1/6?y+6*(_-y)*k:k<.5?_:k<2/3?y+(_-y)*(2/3-k)*6:y}if(X=Nt(X,360),j=Nt(j,100),V=Nt(V,100),j===0)rt=ut=C=V;else{var h=V<.5?V*(1+j):V+j-V*j,g=2*V-h;rt=u(g,h,X+1/3),ut=u(g,h,X),C=u(g,h,X-1/3)}return{r:255*rt,g:255*ut,b:255*C}}(s.h,D,M),S=!0,U="hsl"),s.hasOwnProperty("a")&&(v=s.a));var G,Z,K;return v=i0(v),{ok:S,format:s.format||U,r:Math.min(255,Math.max(p.r,0)),g:Math.min(255,Math.max(p.g,0)),b:Math.min(255,Math.max(p.b,0)),a:v}}(r);this._originalInput=r,this._r=f.r,this._g=f.g,this._b=f.b,this._a=f.a,this._roundA=Math.round(100*this._a)/100,this._format=o.format||f.format,this._gradientType=o.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=f.ok}function Nd(r,o,f){r=Nt(r,255),o=Nt(o,255),f=Nt(f,255);var s,p,v=Math.max(r,o,f),D=Math.min(r,o,f),q=(v+D)/2;if(v==D)s=p=0;else{var M=v-D;switch(p=q>.5?M/(2-v-D):M/(v+D),v){case r:s=(o-f)/M+(o<f?6:0);break;case o:s=(f-r)/M+2;break;case f:s=(r-o)/M+4}s/=6}return{h:s,s:p,l:q}}function Ud(r,o,f){r=Nt(r,255),o=Nt(o,255),f=Nt(f,255);var s,p,v=Math.max(r,o,f),D=Math.min(r,o,f),q=v,M=v-D;if(p=v===0?0:M/v,v==D)s=0;else{switch(v){case r:s=(o-f)/M+(o<f?6:0);break;case o:s=(f-r)/M+2;break;case f:s=(r-o)/M+4}s/=6}return{h:s,s:p,v:q}}function qd(r,o,f,s){var p=[Ge(Math.round(r).toString(16)),Ge(Math.round(o).toString(16)),Ge(Math.round(f).toString(16))];return s&&p[0].charAt(0)==p[0].charAt(1)&&p[1].charAt(0)==p[1].charAt(1)&&p[2].charAt(0)==p[2].charAt(1)?p[0].charAt(0)+p[1].charAt(0)+p[2].charAt(0):p.join("")}function Bd(r,o,f,s){return[Ge(l0(s)),Ge(Math.round(r).toString(16)),Ge(Math.round(o).toString(16)),Ge(Math.round(f).toString(16))].join("")}function bm(r,o){o=o===0?0:o||10;var f=W(r).toHsl();return f.s-=o/100,f.s=qr(f.s),W(f)}function vm(r,o){o=o===0?0:o||10;var f=W(r).toHsl();return f.s+=o/100,f.s=qr(f.s),W(f)}function ym(r){return W(r).desaturate(100)}function xm(r,o){o=o===0?0:o||10;var f=W(r).toHsl();return f.l+=o/100,f.l=qr(f.l),W(f)}function Sm(r,o){o=o===0?0:o||10;var f=W(r).toRgb();return f.r=Math.max(0,Math.min(255,f.r-Math.round(-o/100*255))),f.g=Math.max(0,Math.min(255,f.g-Math.round(-o/100*255))),f.b=Math.max(0,Math.min(255,f.b-Math.round(-o/100*255))),W(f)}function wm(r,o){o=o===0?0:o||10;var f=W(r).toHsl();return f.l-=o/100,f.l=qr(f.l),W(f)}function Om(r,o){var f=W(r).toHsl(),s=(f.h+o)%360;return f.h=s<0?360+s:s,W(f)}function Tm(r){var o=W(r).toHsl();return o.h=(o.h+180)%360,W(o)}function jd(r,o){if(isNaN(o)||o<=0)throw new Error("Argument to polyad must be a positive number");for(var f=W(r).toHsl(),s=[W(r)],p=360/o,v=1;v<o;v++)s.push(W({h:(f.h+v*p)%360,s:f.s,l:f.l}));return s}function Am(r){var o=W(r).toHsl(),f=o.h;return[W(r),W({h:(f+72)%360,s:o.s,l:o.l}),W({h:(f+216)%360,s:o.s,l:o.l})]}function Em(r,o,f){o=o||6,f=f||30;var s=W(r).toHsl(),p=360/f,v=[W(r)];for(s.h=(s.h-(p*o>>1)+720)%360;--o;)s.h=(s.h+p)%360,v.push(W(s));return v}function _m(r,o){o=o||6;for(var f=W(r).toHsv(),s=f.h,p=f.s,v=f.v,D=[],q=1/o;o--;)D.push(W({h:s,s:p,v})),v=(v+q)%1;return D}W.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var r=this.toRgb();return(299*r.r+587*r.g+114*r.b)/1e3},getLuminance:function(){var r,o,f,s=this.toRgb();return r=s.r/255,o=s.g/255,f=s.b/255,.2126*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.7152*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))+.0722*(f<=.03928?f/12.92:Math.pow((f+.055)/1.055,2.4))},setAlpha:function(r){return this._a=i0(r),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var r=Ud(this._r,this._g,this._b);return{h:360*r.h,s:r.s,v:r.v,a:this._a}},toHsvString:function(){var r=Ud(this._r,this._g,this._b),o=Math.round(360*r.h),f=Math.round(100*r.s),s=Math.round(100*r.v);return this._a==1?"hsv("+o+", "+f+"%, "+s+"%)":"hsva("+o+", "+f+"%, "+s+"%, "+this._roundA+")"},toHsl:function(){var r=Nd(this._r,this._g,this._b);return{h:360*r.h,s:r.s,l:r.l,a:this._a}},toHslString:function(){var r=Nd(this._r,this._g,this._b),o=Math.round(360*r.h),f=Math.round(100*r.s),s=Math.round(100*r.l);return this._a==1?"hsl("+o+", "+f+"%, "+s+"%)":"hsla("+o+", "+f+"%, "+s+"%, "+this._roundA+")"},toHex:function(r){return qd(this._r,this._g,this._b,r)},toHexString:function(r){return"#"+this.toHex(r)},toHex8:function(r){return function(o,f,s,p,v){var D=[Ge(Math.round(o).toString(16)),Ge(Math.round(f).toString(16)),Ge(Math.round(s).toString(16)),Ge(l0(p))];return v&&D[0].charAt(0)==D[0].charAt(1)&&D[1].charAt(0)==D[1].charAt(1)&&D[2].charAt(0)==D[2].charAt(1)&&D[3].charAt(0)==D[3].charAt(1)?D[0].charAt(0)+D[1].charAt(0)+D[2].charAt(0)+D[3].charAt(0):D.join("")}(this._r,this._g,this._b,this._a,r)},toHex8String:function(r){return"#"+this.toHex8(r)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Nt(this._r,255))+"%",g:Math.round(100*Nt(this._g,255))+"%",b:Math.round(100*Nt(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Nt(this._r,255))+"%, "+Math.round(100*Nt(this._g,255))+"%, "+Math.round(100*Nt(this._b,255))+"%)":"rgba("+Math.round(100*Nt(this._r,255))+"%, "+Math.round(100*Nt(this._g,255))+"%, "+Math.round(100*Nt(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Dm[qd(this._r,this._g,this._b,!0)]||!1)},toFilter:function(r){var o="#"+Bd(this._r,this._g,this._b,this._a),f=o,s=this._gradientType?"GradientType = 1, ":"";if(r){var p=W(r);f="#"+Bd(p._r,p._g,p._b,p._a)}return"progid:DXImageTransform.Microsoft.gradient("+s+"startColorstr="+o+",endColorstr="+f+")"},toString:function(r){var o=!!r;r=r||this._format;var f=!1,s=this._a<1&&this._a>=0;return o||!s||r!=="hex"&&r!=="hex6"&&r!=="hex3"&&r!=="hex4"&&r!=="hex8"&&r!=="name"?(r==="rgb"&&(f=this.toRgbString()),r==="prgb"&&(f=this.toPercentageRgbString()),r!=="hex"&&r!=="hex6"||(f=this.toHexString()),r==="hex3"&&(f=this.toHexString(!0)),r==="hex4"&&(f=this.toHex8String(!0)),r==="hex8"&&(f=this.toHex8String()),r==="name"&&(f=this.toName()),r==="hsl"&&(f=this.toHslString()),r==="hsv"&&(f=this.toHsvString()),f||this.toHexString()):r==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return W(this.toString())},_applyModification:function(r,o){var f=r.apply(null,[this].concat([].slice.call(o)));return this._r=f._r,this._g=f._g,this._b=f._b,this.setAlpha(f._a),this},lighten:function(){return this._applyModification(xm,arguments)},brighten:function(){return this._applyModification(Sm,arguments)},darken:function(){return this._applyModification(wm,arguments)},desaturate:function(){return this._applyModification(bm,arguments)},saturate:function(){return this._applyModification(vm,arguments)},greyscale:function(){return this._applyModification(ym,arguments)},spin:function(){return this._applyModification(Om,arguments)},_applyCombination:function(r,o){return r.apply(null,[this].concat([].slice.call(o)))},analogous:function(){return this._applyCombination(Em,arguments)},complement:function(){return this._applyCombination(Tm,arguments)},monochromatic:function(){return this._applyCombination(_m,arguments)},splitcomplement:function(){return this._applyCombination(Am,arguments)},triad:function(){return this._applyCombination(jd,[3])},tetrad:function(){return this._applyCombination(jd,[4])}},W.fromRatio=function(r,o){if(kr(r)=="object"){var f={};for(var s in r)r.hasOwnProperty(s)&&(f[s]=s==="a"?r[s]:al(r[s]));r=f}return W(r,o)},W.equals=function(r,o){return!(!r||!o)&&W(r).toRgbString()==W(o).toRgbString()},W.random=function(){return W.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},W.mix=function(r,o,f){f=f===0?0:f||50;var s=W(r).toRgb(),p=W(o).toRgb(),v=f/100;return W({r:(p.r-s.r)*v+s.r,g:(p.g-s.g)*v+s.g,b:(p.b-s.b)*v+s.b,a:(p.a-s.a)*v+s.a})},W.readability=function(r,o){var f=W(r),s=W(o);return(Math.max(f.getLuminance(),s.getLuminance())+.05)/(Math.min(f.getLuminance(),s.getLuminance())+.05)},W.isReadable=function(r,o,f){var s,p,v=W.readability(r,o);switch(p=!1,(s=function(D){var q,M;return q=((D=D||{level:"AA",size:"small"}).level||"AA").toUpperCase(),M=(D.size||"small").toLowerCase(),q!=="AA"&&q!=="AAA"&&(q="AA"),M!=="small"&&M!=="large"&&(M="small"),{level:q,size:M}}(f)).level+s.size){case"AAsmall":case"AAAlarge":p=v>=4.5;break;case"AAlarge":p=v>=3;break;case"AAAsmall":p=v>=7}return p},W.mostReadable=function(r,o,f){var s,p,v,D,q=null,M=0;p=(f=f||{}).includeFallbackColors,v=f.level,D=f.size;for(var S=0;S<o.length;S++)(s=W.readability(r,o[S]))>M&&(M=s,q=W(o[S]));return W.isReadable(r,q,{level:v,size:D})||!p?q:(f.includeFallbackColors=!1,W.mostReadable(r,["#fff","#000"],f))};var ms=W.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Dm=W.hexNames=function(r){var o={};for(var f in r)r.hasOwnProperty(f)&&(o[r[f]]=f);return o}(ms);function i0(r){return r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1),r}function Nt(r,o){(function(s){return typeof s=="string"&&s.indexOf(".")!=-1&&parseFloat(s)===1})(r)&&(r="100%");var f=function(s){return typeof s=="string"&&s.indexOf("%")!=-1}(r);return r=Math.min(o,Math.max(0,parseFloat(r))),f&&(r=parseInt(r*o,10)/100),Math.abs(r-o)<1e-6?1:r%o/parseFloat(o)}function qr(r){return Math.min(1,Math.max(0,r))}function Oe(r){return parseInt(r,16)}function Ge(r){return r.length==1?"0"+r:""+r}function al(r){return r<=1&&(r=100*r+"%"),r}function l0(r){return Math.round(255*parseFloat(r)).toString(16)}function Gd(r){return Oe(r)/255}var jn,Tr,Ar,je=(Tr="[\\s|\\(]+("+(jn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+jn+")[,|\\s]+("+jn+")\\s*\\)?",Ar="[\\s|\\(]+("+jn+")[,|\\s]+("+jn+")[,|\\s]+("+jn+")[,|\\s]+("+jn+")\\s*\\)?",{CSS_UNIT:new RegExp(jn),rgb:new RegExp("rgb"+Tr),rgba:new RegExp("rgba"+Ar),hsl:new RegExp("hsl"+Tr),hsla:new RegExp("hsla"+Ar),hsv:new RegExp("hsv"+Tr),hsva:new RegExp("hsva"+Ar),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function dn(r){return!!je.CSS_UNIT.exec(r)}var Mm=function(r,o){var f=(typeof r=="string"?parseInt(r):r)||0;if(f>=-5&&f<=5){var s=f,p=parseFloat(o),v=p+s*(p/5)*-1;return(v==0||v<=Number.EPSILON)&&(v=.1),{animationPeriod:v+"s"}}return{animationPeriod:o}},zm=function(r,o){var f=r||{},s="";switch(o){case"small":s="12px";break;case"medium":s="16px";break;case"large":s="20px";break;default:s=void 0}var p={};if(f.fontSize){var v=f.fontSize;p=function(D,q){var M={};for(var S in D)Object.prototype.hasOwnProperty.call(D,S)&&q.indexOf(S)<0&&(M[S]=D[S]);if(D!=null&&typeof Object.getOwnPropertySymbols=="function"){var U=0;for(S=Object.getOwnPropertySymbols(D);U<S.length;U++)q.indexOf(S[U])<0&&Object.prototype.propertyIsEnumerable.call(D,S[U])&&(M[S[U]]=D[S[U]])}return M}(f,["fontSize"]),s=v}return{fontSize:s,styles:p}},Rm={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Cm=function(r){var o=r.className,f=r.text,s=r.textColor,p=r.staticText,v=r.style;return f?Pt.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(o||"").trim(),style:Je(Je(Je({},p&&Rm),s&&{color:s,mixBlendMode:"unset"}),v&&v)},typeof f=="string"&&f.length?f:"loading"):null},r0="rgb(50, 205, 50)";function km(r,o){if(o===void 0&&(o=0),r.length===0)throw new Error("Input array cannot be empty!");var f=[];return function s(p,v){return v===void 0&&(v=0),f.push.apply(f,p),f.length<v&&s(f,v),f.slice(0,v)}(r,o)}Vt(`.atom-rli-bounding-box {
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
}`);W(r0).toRgb();Array.from({length:4},function(r,o){return"--atom-phase".concat(o+1,"-rgb")});Vt(`.commet-rli-bounding-box {
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
}`);var Ja=Array.from({length:4},function(r,o){return"--commet-phase".concat(o+1,"-color")}),Hm=function(r){var o,f=zm(r?.style,r?.size),s=f.styles,p=f.fontSize,v=r?.easing,D=Mm(r?.speedPlus,"1.2s").animationPeriod,q=function(M){var S={};if(M instanceof Array){for(var U=km(M,Ja.length),G=0;G<U.length&&!(G>=4);G++)S[Ja[G]]=U[G];return S}try{if(typeof M!="string")throw new Error("Color String expected");for(var Z=0;Z<Ja.length;Z++)S[Ja[Z]]=M}catch(K){for(K instanceof Error?console.warn("[".concat(K.message,']: Received "').concat(typeof M,'" instead with value, ').concat(JSON.stringify(M))):console.warn("".concat(JSON.stringify(M)," received in <Commet /> indicator cannot be processed. Using default instead!")),Z=0;Z<Ja.length;Z++)S[Ja[Z]]=r0}return S}((o=r?.color)!==null&&o!==void 0?o:"");return Pt.createElement("span",{className:"rli-d-i-b commet-rli-bounding-box",style:Je(Je(Je(Je(Je({},p&&{fontSize:p}),D&&{"--rli-animation-duration":D}),v&&{"--rli-animation-function":v}),q),s),role:"status","aria-live":"polite","aria-label":"Loading"},Pt.createElement("span",{className:"rli-d-i-b commet-indicator"},Pt.createElement("span",{className:"rli-d-i-b commet-box"},Pt.createElement("span",{className:"rli-d-i-b commet-trail trail1"}),Pt.createElement("span",{className:"rli-d-i-b  commetball-box"})),Pt.createElement("span",{className:"rli-d-i-b commet-box"},Pt.createElement("span",{className:"rli-d-i-b commet-trail trail2"}),Pt.createElement("span",{className:"rli-d-i-b commetball-box"})),Pt.createElement(Cm,{className:"commet-text",text:r?.text,textColor:r?.textColor})))};Vt(`.OP-annulus-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--OP-annulus-phase".concat(o+1,"-color")});function cs(r){return r&&r.Math===Math&&r}Vt(`.OP-dotted-rli-bounding-box {
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
}`);cs(typeof window=="object"&&window)||cs(typeof self=="object"&&self)||cs(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(r,o){return"--OP-dotted-phase".concat(o+1,"-color")});Vt(`.OP-spokes-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--OP-spokes-phase".concat(o+1,"-color")});Vt(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--OP-annulus-dual-sectors-phase".concat(o+1,"-color")});Vt(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return["--OP-annulus-track-phase".concat(o+1,"-color"),"--OP-annulus-sector-phase".concat(o+1,"-color")]});Vt(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--four-square-phase".concat(o+1,"-color")});Vt(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--mosaic-phase".concat(o+1,"-color")});Vt(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--riple-phase".concat(o+1,"-color")});Vt(`.pulsate-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--TD-pulsate-phase".concat(o+1,"-color")});Vt(`.brick-stack-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--TD-brick-stack-phase".concat(o+1,"-color")});Vt(`.bob-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--TD-bob-phase".concat(o+1,"-color")});Vt(`.bounce-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--TD-bounce-phase".concat(o+1,"-color")});Vt(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--shape-phase".concat(o+1,"-color")});Vt(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--trophySpin-phase".concat(o+1,"-color")});Vt(`.slab-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--slab-phase".concat(o+1,"-color")});Vt(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--life-line-phase".concat(o+1,"-color")});var il={exports:{}},Nm=il.exports,Yd;function Um(){return Yd||(Yd=1,function(r,o){(function(f,s){s(o)})(Nm,function(f){class s{constructor(u,h){this.state={angle:0,area:[],position:{x:0,y:0},hardAngle:0,hardDrawingAngle:0},this.createdDensity=h,this.nowDrawingDensity=this.createdDensity,this.render=u}setDensity(u){this.createdDensity=u,this.nowDrawingDensity=u}setDrawingDensity(u){this.nowDrawingDensity=u}setPosition(u){this.state.position=u}setAngle(u){this.state.angle=u}setArea(u){this.state.area=u}setHardDrawingAngle(u){this.state.hardDrawingAngle=u}setHardAngle(u){this.state.hardAngle=u,this.state.hardDrawingAngle=u}setOrientation(u){this.orientation=u}getDrawingDensity(){return this.nowDrawingDensity}getDensity(){return this.createdDensity}getHardAngle(){return this.state.hardAngle}}class p extends s{constructor(u,h,g){super(u,g),this.image=null,this.isLoad=!1,this.loadingAngle=0,this.image=new Image,this.image.src=h}draw(u){const h=this.render.getContext(),g=this.render.convertToGlobal(this.state.position),y=this.render.getRect().pageWidth,_=this.render.getRect().height;h.save(),h.translate(g.x,g.y),h.beginPath();for(let k of this.state.area)k!==null&&(k=this.render.convertToGlobal(k),h.lineTo(k.x-g.x,k.y-g.y));h.rotate(this.state.angle),h.clip(),this.isLoad?h.drawImage(this.image,0,0,y,_):this.drawLoader(h,{x:0,y:0},y,_),h.restore()}simpleDraw(u){const h=this.render.getRect(),g=this.render.getContext(),y=h.pageWidth,_=h.height,k=u===1?h.left+h.pageWidth:h.left,J=h.top;this.isLoad?g.drawImage(this.image,k,J,y,_):this.drawLoader(g,{x:k,y:J},y,_)}drawLoader(u,h,g,y){u.beginPath(),u.strokeStyle="rgb(200, 200, 200)",u.fillStyle="rgb(255, 255, 255)",u.lineWidth=1,u.rect(h.x+1,h.y+1,g-1,y-1),u.stroke(),u.fill();const _={x:h.x+g/2,y:h.y+y/2};u.beginPath(),u.lineWidth=10,u.arc(_.x,_.y,20,this.loadingAngle,3*Math.PI/2+this.loadingAngle),u.stroke(),u.closePath(),this.loadingAngle+=.07,this.loadingAngle>=2*Math.PI&&(this.loadingAngle=0)}load(){this.isLoad||(this.image.onload=()=>{this.isLoad=!0})}newTemporaryCopy(){return this}getTemporaryCopy(){return this}hideTemporaryCopy(){}}class v{constructor(u,h){this.pages=[],this.currentPageIndex=0,this.currentSpreadIndex=0,this.landscapeSpread=[],this.portraitSpread=[],this.render=h,this.app=u,this.currentPageIndex=0,this.isShowCover=this.app.getSettings().showCover}destroy(){this.pages=[]}createSpread(){this.landscapeSpread=[],this.portraitSpread=[];for(let h=0;h<this.pages.length;h++)this.portraitSpread.push([h]);let u=0;this.isShowCover&&(this.pages[0].setDensity("hard"),this.landscapeSpread.push([u]),u++);for(let h=u;h<this.pages.length;h+=2)h<this.pages.length-1?this.landscapeSpread.push([h,h+1]):(this.landscapeSpread.push([h]),this.pages[h].setDensity("hard"))}getSpread(){return this.render.getOrientation()==="landscape"?this.landscapeSpread:this.portraitSpread}getSpreadIndexByPage(u){const h=this.getSpread();for(let g=0;g<h.length;g++)if(u===h[g][0]||u===h[g][1])return g;return null}getPageCount(){return this.pages.length}getPages(){return this.pages}getPage(u){if(u>=0&&u<this.pages.length)return this.pages[u];throw new Error("Invalid page number")}nextBy(u){const h=this.pages.indexOf(u);return h<this.pages.length-1?this.pages[h+1]:null}prevBy(u){const h=this.pages.indexOf(u);return h>0?this.pages[h-1]:null}getFlippingPage(u){const h=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return u===0?this.pages[h].newTemporaryCopy():this.pages[h-1];{const g=u===0?this.getSpread()[h+1]:this.getSpread()[h-1];return g.length===1||u===0?this.pages[g[0]]:this.pages[g[1]]}}getBottomPage(u){const h=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return u===0?this.pages[h+1]:this.pages[h-1];{const g=u===0?this.getSpread()[h+1]:this.getSpread()[h-1];return g.length===1?this.pages[g[0]]:u===0?this.pages[g[1]]:this.pages[g[0]]}}showNext(){this.currentSpreadIndex<this.getSpread().length&&(this.currentSpreadIndex++,this.showSpread())}showPrev(){this.currentSpreadIndex>0&&(this.currentSpreadIndex--,this.showSpread())}getCurrentPageIndex(){return this.currentPageIndex}show(u=null){if(u===null&&(u=this.currentPageIndex),u<0||u>=this.pages.length)return;const h=this.getSpreadIndexByPage(u);h!==null&&(this.currentSpreadIndex=h,this.showSpread())}getCurrentSpreadIndex(){return this.currentSpreadIndex}setCurrentSpreadIndex(u){if(!(u>=0&&u<this.getSpread().length))throw new Error("Invalid page");this.currentSpreadIndex=u}showSpread(){const u=this.getSpread()[this.currentSpreadIndex];u.length===2?(this.render.setLeftPage(this.pages[u[0]]),this.render.setRightPage(this.pages[u[1]])):this.render.getOrientation()==="landscape"&&u[0]===this.pages.length-1?(this.render.setLeftPage(this.pages[u[0]]),this.render.setRightPage(null)):(this.render.setLeftPage(null),this.render.setRightPage(this.pages[u[0]])),this.currentPageIndex=u[0],this.app.updatePageIndex(this.currentPageIndex)}}class D extends v{constructor(u,h,g){super(u,h),this.imagesHref=g}load(){for(const u of this.imagesHref){const h=new p(this.render,u,"soft");h.load(),this.pages.push(h)}this.createSpread()}}class q{static GetDistanceBetweenTwoPoint(u,h){return u===null||h===null?1/0:Math.sqrt(Math.pow(h.x-u.x,2)+Math.pow(h.y-u.y,2))}static GetSegmentLength(u){return q.GetDistanceBetweenTwoPoint(u[0],u[1])}static GetAngleBetweenTwoLine(u,h){const g=u[0].y-u[1].y,y=h[0].y-h[1].y,_=u[1].x-u[0].x,k=h[1].x-h[0].x;return Math.acos((g*y+_*k)/(Math.sqrt(g*g+_*_)*Math.sqrt(y*y+k*k)))}static PointInRect(u,h){return h===null?null:h.x>=u.left&&h.x<=u.width+u.left&&h.y>=u.top&&h.y<=u.top+u.height?h:null}static GetRotatedPoint(u,h,g){return{x:u.x*Math.cos(g)+u.y*Math.sin(g)+h.x,y:u.y*Math.cos(g)-u.x*Math.sin(g)+h.y}}static LimitPointToCircle(u,h,g){if(q.GetDistanceBetweenTwoPoint(u,g)<=h)return g;const y=u.x,_=u.y,k=g.x,J=g.y;let F=Math.sqrt(Math.pow(h,2)*Math.pow(y-k,2)/(Math.pow(y-k,2)+Math.pow(_-J,2)))+y;g.x<0&&(F*=-1);let ot=(F-y)*(_-J)/(y-k)+_;return y-k+_===0&&(ot=h),{x:F,y:ot}}static GetIntersectBetweenTwoSegment(u,h,g){return q.PointInRect(u,q.GetIntersectBeetwenTwoLine(h,g))}static GetIntersectBeetwenTwoLine(u,h){const g=u[0].y-u[1].y,y=h[0].y-h[1].y,_=u[1].x-u[0].x,k=h[1].x-h[0].x,J=u[0].x*u[1].y-u[1].x*u[0].y,F=h[0].x*h[1].y-h[1].x*h[0].y,ot=g*F-y*J,yt=_*F-k*J,kt=-(J*k-F*_)/(g*k-y*_),wt=-(g*F-y*J)/(g*k-y*_);if(isFinite(kt)&&isFinite(wt))return{x:kt,y:wt};if(Math.abs(ot-yt)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(u,h){const g=Math.abs(u.x-h.x),y=Math.abs(u.y-h.y),_=Math.max(g,y),k=[u];function J(F,ot,yt,kt,wt){return ot>F?F+wt*(yt/kt):ot<F?F-wt*(yt/kt):F}for(let F=1;F<=_;F+=1)k.push({x:J(u.x,h.x,g,_,F),y:J(u.y,h.y,y,_,F)});return k}}class M extends s{constructor(u,h,g){super(u,g),this.copiedElement=null,this.temporaryCopy=null,this.isLoad=!1,this.element=h,this.element.classList.add("stf__item"),this.element.classList.add("--"+g)}newTemporaryCopy(){return this.nowDrawingDensity==="hard"?this:(this.temporaryCopy===null&&(this.copiedElement=this.element.cloneNode(!0),this.element.parentElement.appendChild(this.copiedElement),this.temporaryCopy=new M(this.render,this.copiedElement,this.nowDrawingDensity)),this.getTemporaryCopy())}getTemporaryCopy(){return this.temporaryCopy}hideTemporaryCopy(){this.temporaryCopy!==null&&(this.copiedElement.remove(),this.copiedElement=null,this.temporaryCopy=null)}draw(u){const h=u||this.nowDrawingDensity,g=this.render.convertToGlobal(this.state.position),y=this.render.getRect().pageWidth,_=this.render.getRect().height;this.element.classList.remove("--simple");const k=`
            display: block;
            z-index: ${this.element.style.zIndex};
            left: 0;
            top: 0;
            width: ${y}px;
            height: ${_}px;
        `;h==="hard"?this.drawHard(k):this.drawSoft(g,k)}drawHard(u=""){const h=this.render.getRect().left+this.render.getRect().width/2,g=this.state.hardDrawingAngle,y=u+`
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                clip-path: none;
                -webkit-clip-path: none;
            `+(this.orientation===0?`transform-origin: ${this.render.getRect().pageWidth}px 0; 
                   transform: translate3d(0, 0, 0) rotateY(${g}deg);`:`transform-origin: 0 0; 
                   transform: translate3d(${h}px, 0, 0) rotateY(${g}deg);`);this.element.style.cssText=y}drawSoft(u,h=""){let g="polygon( ";for(const _ of this.state.area)if(_!==null){let k=this.render.getDirection()===1?{x:-_.x+this.state.position.x,y:_.y-this.state.position.y}:{x:_.x-this.state.position.x,y:_.y-this.state.position.y};k=q.GetRotatedPoint(k,{x:0,y:0},this.state.angle),g+=k.x+"px "+k.y+"px, "}g=g.slice(0,-2),g+=")";const y=h+`transform-origin: 0 0; clip-path: ${g}; -webkit-clip-path: ${g};`+(this.render.isSafari()&&this.state.angle===0?`transform: translate(${u.x}px, ${u.y}px);`:`transform: translate3d(${u.x}px, ${u.y}px, 0) rotate(${this.state.angle}rad);`);this.element.style.cssText=y}simpleDraw(u){const h=this.render.getRect(),g=h.pageWidth,y=h.height,_=u===1?h.left+h.pageWidth:h.left,k=h.top;this.element.classList.add("--simple"),this.element.style.cssText=`
            position: absolute; 
            display: block; 
            height: ${y}px; 
            left: ${_}px; 
            top: ${k}px; 
            width: ${g}px; 
            z-index: ${this.render.getSettings().startZIndex+1};`}getElement(){return this.element}load(){this.isLoad=!0}setOrientation(u){super.setOrientation(u),this.element.classList.remove("--left","--right"),this.element.classList.add(u===1?"--right":"--left")}setDrawingDensity(u){this.element.classList.remove("--soft","--hard"),this.element.classList.add("--"+u),super.setDrawingDensity(u)}}class S extends v{constructor(u,h,g,y){super(u,h),this.element=g,this.pagesElement=y}load(){for(const u of this.pagesElement){const h=new M(this.render,u,u.dataset.density==="hard"?"hard":"soft");h.load(),this.pages.push(h)}this.createSpread()}}class U{constructor(u,h,g,y){this.direction=u,this.corner=h,this.topIntersectPoint=null,this.sideIntersectPoint=null,this.bottomIntersectPoint=null,this.pageWidth=parseInt(g,10),this.pageHeight=parseInt(y,10)}calc(u){try{return this.position=this.calcAngleAndPosition(u),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){const u=[];let h=!1;return u.push(this.rect.topLeft),u.push(this.topIntersectPoint),this.sideIntersectPoint===null?h=!0:(u.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(h=!1)),u.push(this.bottomIntersectPoint),(h||this.corner==="bottom")&&u.push(this.rect.bottomLeft),u}getBottomClipArea(){const u=[];return u.push(this.topIntersectPoint),this.corner==="top"?u.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&u.push({x:this.pageWidth,y:0}),u.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?q.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&u.push(this.sideIntersectPoint):this.corner==="top"&&u.push({x:this.pageWidth,y:this.pageHeight}),u.push(this.bottomIntersectPoint),u.push(this.topIntersectPoint),u}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){const u=q.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?u:Math.PI-u}calcAngleAndPosition(u){let h=u;if(this.updateAngleAndGeometry(h),h=this.corner==="top"?this.checkPositionAtCenterLine(h,{x:0,y:0},{x:0,y:this.pageHeight}):this.checkPositionAtCenterLine(h,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(h.x-this.pageWidth)<1&&Math.abs(h.y)<1)throw new Error("Point is too small");return h}updateAngleAndGeometry(u){this.angle=this.calculateAngle(u),this.rect=this.getPageRect(u)}calculateAngle(u){const h=this.pageWidth-u.x+1,g=this.corner==="bottom"?this.pageHeight-u.y:u.y;let y=2*Math.acos(h/Math.sqrt(g*g+h*h));g<0&&(y=-y);const _=Math.PI-y;if(!isFinite(y)||_>=0&&_<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(y=-y),y}getPageRect(u){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],u):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],u)}getRectFromBasePoint(u,h){return{topLeft:this.getRotatedPoint(u[0],h),topRight:this.getRotatedPoint(u[1],h),bottomLeft:this.getRotatedPoint(u[2],h),bottomRight:this.getRotatedPoint(u[3],h)}}getRotatedPoint(u,h){return{x:u.x*Math.cos(this.angle)+u.y*Math.sin(this.angle)+h.x,y:u.y*Math.cos(this.angle)-u.x*Math.sin(this.angle)+h.y}}calculateIntersectPoint(u){const h={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=q.GetIntersectBetweenTwoSegment(h,[u,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=q.GetIntersectBetweenTwoSegment(h,[u,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=q.GetIntersectBetweenTwoSegment(h,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=q.GetIntersectBetweenTwoSegment(h,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=q.GetIntersectBetweenTwoSegment(h,[u,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=q.GetIntersectBetweenTwoSegment(h,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(u,h,g){let y=u;const _=q.LimitPointToCircle(h,this.pageWidth,y);y!==_&&(y=_,this.updateAngleAndGeometry(y));const k=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2));let J=this.rect.bottomRight,F=this.rect.topLeft;if(this.corner==="bottom"&&(J=this.rect.topRight,F=this.rect.bottomLeft),J.x<=0){const ot=q.LimitPointToCircle(g,k,F);ot!==y&&(y=ot,this.updateAngleAndGeometry(y))}return y}getSegmentToShadowLine(){const u=this.getShadowStartPoint();return[u,u!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint]}}class G{constructor(u,h){this.flippingPage=null,this.bottomPage=null,this.calc=null,this.state="read",this.render=u,this.app=h}fold(u){this.setState("user_fold"),this.calc===null&&this.start(u),this.do(this.render.convertToPage(u))}flip(u){if(this.app.getSettings().disableFlipByClick&&!this.isPointOnCorners(u)||(this.calc!==null&&this.render.finishAnimation(),!this.start(u)))return;const h=this.getBoundsRect();this.setState("flipping");const g=h.height/10,y=this.calc.getCorner()==="bottom"?h.height-g:g,_=this.calc.getCorner()==="bottom"?h.height:0;this.calc.calc({x:h.pageWidth-g,y}),this.animateFlippingTo({x:h.pageWidth-g,y},{x:-h.pageWidth,y:_},!0)}start(u){this.reset();const h=this.render.convertToBook(u),g=this.getBoundsRect(),y=this.getDirectionByPoint(h),_=h.y>=g.height/2?"bottom":"top";if(!this.checkDirection(y))return!1;try{if(this.flippingPage=this.app.getPageCollection().getFlippingPage(y),this.bottomPage=this.app.getPageCollection().getBottomPage(y),this.render.getOrientation()==="landscape")if(y===1){const k=this.app.getPageCollection().nextBy(this.flippingPage);k!==null&&this.flippingPage.getDensity()!==k.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),k.setDrawingDensity("hard"))}else{const k=this.app.getPageCollection().prevBy(this.flippingPage);k!==null&&this.flippingPage.getDensity()!==k.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),k.setDrawingDensity("hard"))}return this.render.setDirection(y),this.calc=new U(y,_,g.pageWidth.toString(10),g.height.toString(10)),!0}catch{return!1}}do(u){if(this.calc!==null&&this.calc.calc(u)){const h=this.calc.getFlippingProgress();this.bottomPage.setArea(this.calc.getBottomClipArea()),this.bottomPage.setPosition(this.calc.getBottomPagePosition()),this.bottomPage.setAngle(0),this.bottomPage.setHardAngle(0),this.flippingPage.setArea(this.calc.getFlippingClipArea()),this.flippingPage.setPosition(this.calc.getActiveCorner()),this.flippingPage.setAngle(this.calc.getAngle()),this.calc.getDirection()===0?this.flippingPage.setHardAngle(90*(200-2*h)/100):this.flippingPage.setHardAngle(-90*(200-2*h)/100),this.render.setPageRect(this.calc.getRect()),this.render.setBottomPage(this.bottomPage),this.render.setFlippingPage(this.flippingPage),this.render.setShadowData(this.calc.getShadowStartPoint(),this.calc.getShadowAngle(),h,this.calc.getDirection())}}flipToPage(u,h){const g=this.app.getPageCollection().getCurrentSpreadIndex(),y=this.app.getPageCollection().getSpreadIndexByPage(u);try{y>g&&(this.app.getPageCollection().setCurrentSpreadIndex(y-1),this.flipNext(h)),y<g&&(this.app.getPageCollection().setCurrentSpreadIndex(y+1),this.flipPrev(h))}catch{}}flipNext(u){this.flip({x:this.render.getRect().left+2*this.render.getRect().pageWidth-10,y:u==="top"?1:this.render.getRect().height-2})}flipPrev(u){this.flip({x:10,y:u==="top"?1:this.render.getRect().height-2})}stopMove(){if(this.calc===null)return;const u=this.calc.getPosition(),h=this.getBoundsRect(),g=this.calc.getCorner()==="bottom"?h.height:0;u.x<=0?this.animateFlippingTo(u,{x:-h.pageWidth,y:g},!0):this.animateFlippingTo(u,{x:h.pageWidth,y:g},!1)}showCorner(u){if(!this.checkState("read","fold_corner"))return;const h=this.getBoundsRect(),g=h.pageWidth;if(this.isPointOnCorners(u))if(this.calc===null){if(!this.start(u))return;this.setState("fold_corner"),this.calc.calc({x:g-1,y:1});const y=50,_=this.calc.getCorner()==="bottom"?h.height-1:1,k=this.calc.getCorner()==="bottom"?h.height-y:y;this.animateFlippingTo({x:g-1,y:_},{x:g-y,y:k},!1,!1)}else this.do(this.render.convertToPage(u));else this.setState("read"),this.render.finishAnimation(),this.stopMove()}animateFlippingTo(u,h,g,y=!0){const _=q.GetCordsFromTwoPoint(u,h),k=[];for(const F of _)k.push(()=>this.do(F));const J=this.getAnimationDuration(_.length);this.render.startAnimation(k,J,()=>{this.calc&&(g&&(this.calc.getDirection()===1?this.app.turnToPrevPage():this.app.turnToNextPage()),y&&(this.render.setBottomPage(null),this.render.setFlippingPage(null),this.render.clearShadow(),this.setState("read"),this.reset()))})}getCalculation(){return this.calc}getState(){return this.state}setState(u){this.state!==u&&(this.app.updateState(u),this.state=u)}getDirectionByPoint(u){const h=this.getBoundsRect();if(this.render.getOrientation()==="portrait"){if(u.x-h.pageWidth<=h.width/5)return 1}else if(u.x<h.width/2)return 1;return 0}getAnimationDuration(u){const h=this.app.getSettings().flippingTime;return u>=1e3?h:u/1e3*h}checkDirection(u){return u===0?this.app.getCurrentPageIndex()<this.app.getPageCount()-1:this.app.getCurrentPageIndex()>=1}reset(){this.calc=null,this.flippingPage=null,this.bottomPage=null}getBoundsRect(){return this.render.getRect()}checkState(...u){for(const h of u)if(this.state===h)return!0;return!1}isPointOnCorners(u){const h=this.getBoundsRect(),g=h.pageWidth,y=Math.sqrt(Math.pow(g,2)+Math.pow(h.height,2))/5,_=this.render.convertToBook(u);return _.x>0&&_.y>0&&_.x<h.width&&_.y<h.height&&(_.x<y||_.x>h.width-y)&&(_.y<y||_.y>h.height-y)}}class Z{constructor(u,h){this.leftPage=null,this.rightPage=null,this.flippingPage=null,this.bottomPage=null,this.direction=null,this.orientation=null,this.shadow=null,this.animation=null,this.pageRect=null,this.boundsRect=null,this.timer=0,this.safari=!1,this.setting=h,this.app=u;const g=new RegExp("Version\\/[\\d\\.]+.*Safari/");this.safari=g.exec(window.navigator.userAgent)!==null}render(u){if(this.animation!==null){const h=Math.round((u-this.animation.startedAt)/this.animation.durationFrame);h<this.animation.frames.length?this.animation.frames[h]():(this.animation.onAnimateEnd(),this.animation=null)}this.timer=u,this.drawFrame()}start(){this.update();const u=h=>{this.render(h),requestAnimationFrame(u)};requestAnimationFrame(u)}startAnimation(u,h,g){this.finishAnimation(),this.animation={frames:u,duration:h,durationFrame:h/u.length,onAnimateEnd:g,startedAt:this.timer}}finishAnimation(){this.animation!==null&&(this.animation.frames[this.animation.frames.length-1](),this.animation.onAnimateEnd!==null&&this.animation.onAnimateEnd()),this.animation=null}update(){this.boundsRect=null;const u=this.calculateBoundsRect();this.orientation!==u&&(this.orientation=u,this.app.updateOrientation(u))}calculateBoundsRect(){let u="landscape";const h=this.getBlockWidth(),g=h/2,y=this.getBlockHeight()/2,_=this.setting.width/this.setting.height;let k=this.setting.width,J=this.setting.height,F=g-k;return this.setting.size==="stretch"?(h<2*this.setting.minWidth&&this.app.getSettings().usePortrait&&(u="portrait"),k=u==="portrait"?this.getBlockWidth():this.getBlockWidth()/2,k>this.setting.maxWidth&&(k=this.setting.maxWidth),J=k/_,J>this.getBlockHeight()&&(J=this.getBlockHeight(),k=J*_),F=u==="portrait"?g-k/2-k:g-k):h<2*k&&this.app.getSettings().usePortrait&&(u="portrait",F=g-k/2-k),this.boundsRect={left:F,top:y-J/2,width:2*k,height:J,pageWidth:k},u}setShadowData(u,h,g,y){if(!this.app.getSettings().drawShadow)return;const _=100*this.getSettings().maxShadowOpacity;this.shadow={pos:u,angle:h,width:3*this.getRect().pageWidth/4*g/100,opacity:(100-g)*_/100/100,direction:y,progress:2*g}}clearShadow(){this.shadow=null}getBlockWidth(){return this.app.getUI().getDistElement().offsetWidth}getBlockHeight(){return this.app.getUI().getDistElement().offsetHeight}getDirection(){return this.direction}getRect(){return this.boundsRect===null&&this.calculateBoundsRect(),this.boundsRect}getSettings(){return this.app.getSettings()}getOrientation(){return this.orientation}setPageRect(u){this.pageRect=u}setDirection(u){this.direction=u}setRightPage(u){u!==null&&u.setOrientation(1),this.rightPage=u}setLeftPage(u){u!==null&&u.setOrientation(0),this.leftPage=u}setBottomPage(u){u!==null&&u.setOrientation(this.direction===1?0:1),this.bottomPage=u}setFlippingPage(u){u!==null&&u.setOrientation(this.direction===0&&this.orientation!=="portrait"?0:1),this.flippingPage=u}convertToBook(u){const h=this.getRect();return{x:u.x-h.left,y:u.y-h.top}}isSafari(){return this.safari}convertToPage(u,h){h||(h=this.direction);const g=this.getRect();return{x:h===0?u.x-g.left-g.width/2:g.width/2-u.x+g.left,y:u.y-g.top}}convertToGlobal(u,h){if(h||(h=this.direction),u==null)return null;const g=this.getRect();return{x:h===0?u.x+g.left+g.width/2:g.width/2-u.x+g.left,y:u.y+g.top}}convertRectToGlobal(u,h){return h||(h=this.direction),{topLeft:this.convertToGlobal(u.topLeft,h),topRight:this.convertToGlobal(u.topRight,h),bottomLeft:this.convertToGlobal(u.bottomLeft,h),bottomRight:this.convertToGlobal(u.bottomRight,h)}}}class K extends Z{constructor(u,h,g){super(u,h),this.canvas=g,this.ctx=g.getContext("2d")}getContext(){return this.ctx}reload(){}drawFrame(){this.clear(),this.orientation!=="portrait"&&this.leftPage!=null&&this.leftPage.simpleDraw(0),this.rightPage!=null&&this.rightPage.simpleDraw(1),this.bottomPage!=null&&this.bottomPage.draw(),this.drawBookShadow(),this.flippingPage!=null&&this.flippingPage.draw(),this.shadow!=null&&(this.drawOuterShadow(),this.drawInnerShadow());const u=this.getRect();this.orientation==="portrait"&&(this.ctx.beginPath(),this.ctx.rect(u.left+u.pageWidth,u.top,u.width,u.height),this.ctx.clip())}drawBookShadow(){const u=this.getRect();this.ctx.save(),this.ctx.beginPath();const h=u.width/20;this.ctx.rect(u.left,u.top,u.width,u.height);const g={x:u.left+u.width/2-h/2,y:0};this.ctx.translate(g.x,g.y);const y=this.ctx.createLinearGradient(0,0,h,0);y.addColorStop(0,"rgba(0, 0, 0, 0)"),y.addColorStop(.4,"rgba(0, 0, 0, 0.2)"),y.addColorStop(.49,"rgba(0, 0, 0, 0.1)"),y.addColorStop(.5,"rgba(0, 0, 0, 0.5)"),y.addColorStop(.51,"rgba(0, 0, 0, 0.4)"),y.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.clip(),this.ctx.fillStyle=y,this.ctx.fillRect(0,0,h,2*u.height),this.ctx.restore()}drawOuterShadow(){const u=this.getRect();this.ctx.save(),this.ctx.beginPath(),this.ctx.rect(u.left,u.top,u.width,u.height);const h=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y});this.ctx.translate(h.x,h.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const g=this.ctx.createLinearGradient(0,0,this.shadow.width,0);this.shadow.direction===0?(this.ctx.translate(0,-100),g.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),g.addColorStop(1,"rgba(0, 0, 0, 0)")):(this.ctx.translate(-this.shadow.width,-100),g.addColorStop(0,"rgba(0, 0, 0, 0)"),g.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")")),this.ctx.clip(),this.ctx.fillStyle=g,this.ctx.fillRect(0,0,this.shadow.width,2*u.height),this.ctx.restore()}drawInnerShadow(){const u=this.getRect();this.ctx.save(),this.ctx.beginPath();const h=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),g=this.convertRectToGlobal(this.pageRect);this.ctx.moveTo(g.topLeft.x,g.topLeft.y),this.ctx.lineTo(g.topRight.x,g.topRight.y),this.ctx.lineTo(g.bottomRight.x,g.bottomRight.y),this.ctx.lineTo(g.bottomLeft.x,g.bottomLeft.y),this.ctx.translate(h.x,h.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const y=3*this.shadow.width/4,_=this.ctx.createLinearGradient(0,0,y,0);this.shadow.direction===0?(this.ctx.translate(-y,-100),_.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")"),_.addColorStop(.9,"rgba(0, 0, 0, 0.05)"),_.addColorStop(.7,"rgba(0, 0, 0, "+this.shadow.opacity+")"),_.addColorStop(0,"rgba(0, 0, 0, 0)")):(this.ctx.translate(0,-100),_.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),_.addColorStop(.1,"rgba(0, 0, 0, 0.05)"),_.addColorStop(.3,"rgba(0, 0, 0, "+this.shadow.opacity+")"),_.addColorStop(1,"rgba(0, 0, 0, 0)")),this.ctx.clip(),this.ctx.fillStyle=_,this.ctx.fillRect(0,0,y,2*u.height),this.ctx.restore()}clear(){this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}}class X{constructor(u,h,g){this.touchPoint=null,this.swipeTimeout=250,this.onResize=()=>{this.update()},this.onMouseDown=_=>{if(this.checkTarget(_.target)){const k=this.getMousePos(_.clientX,_.clientY);this.app.startUserTouch(k),_.preventDefault()}},this.onTouchStart=_=>{if(this.checkTarget(_.target)&&_.changedTouches.length>0){const k=_.changedTouches[0],J=this.getMousePos(k.clientX,k.clientY);this.touchPoint={point:J,time:Date.now()},setTimeout(()=>{this.touchPoint!==null&&this.app.startUserTouch(J)},this.swipeTimeout),this.app.getSettings().mobileScrollSupport||_.preventDefault()}},this.onMouseUp=_=>{const k=this.getMousePos(_.clientX,_.clientY);this.app.userStop(k)},this.onMouseMove=_=>{const k=this.getMousePos(_.clientX,_.clientY);this.app.userMove(k,!1)},this.onTouchMove=_=>{if(_.changedTouches.length>0){const k=_.changedTouches[0],J=this.getMousePos(k.clientX,k.clientY);this.app.getSettings().mobileScrollSupport?(this.touchPoint!==null&&(Math.abs(this.touchPoint.point.x-J.x)>10||this.app.getState()!=="read")&&_.cancelable&&this.app.userMove(J,!0),this.app.getState()!=="read"&&_.preventDefault()):this.app.userMove(J,!0)}},this.onTouchEnd=_=>{if(_.changedTouches.length>0){const k=_.changedTouches[0],J=this.getMousePos(k.clientX,k.clientY);let F=!1;if(this.touchPoint!==null){const ot=J.x-this.touchPoint.point.x,yt=Math.abs(J.y-this.touchPoint.point.y);Math.abs(ot)>this.swipeDistance&&yt<2*this.swipeDistance&&Date.now()-this.touchPoint.time<this.swipeTimeout&&(ot>0?this.app.flipPrev(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"):this.app.flipNext(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"),F=!0),this.touchPoint=null}this.app.userStop(J,F)}},this.parentElement=u,u.classList.add("stf__parent"),u.insertAdjacentHTML("afterbegin",'<div class="stf__wrapper"></div>'),this.wrapper=u.querySelector(".stf__wrapper"),this.app=h;const y=this.app.getSettings().usePortrait?1:2;u.style.minWidth=g.minWidth*y+"px",u.style.minHeight=g.minHeight+"px",g.size==="fixed"&&(u.style.minWidth=g.width*y+"px",u.style.minHeight=g.height+"px"),g.autoSize&&(u.style.width="100%",u.style.maxWidth=2*g.maxWidth+"px"),u.style.display="block",window.addEventListener("resize",this.onResize,!1),this.swipeDistance=g.swipeDistance}destroy(){this.app.getSettings().useMouseEvents&&this.removeHandlers(),this.distElement.remove(),this.wrapper.remove()}getDistElement(){return this.distElement}getWrapper(){return this.wrapper}setOrientationStyle(u){this.wrapper.classList.remove("--portrait","--landscape"),u==="portrait"?(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/this.app.getSettings().width*100+"%"),this.wrapper.classList.add("--portrait")):(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/(2*this.app.getSettings().width)*100+"%"),this.wrapper.classList.add("--landscape")),this.update()}removeHandlers(){window.removeEventListener("resize",this.onResize),this.distElement.removeEventListener("mousedown",this.onMouseDown),this.distElement.removeEventListener("touchstart",this.onTouchStart),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("touchend",this.onTouchEnd)}setHandlers(){window.addEventListener("resize",this.onResize,!1),this.app.getSettings().useMouseEvents&&(this.distElement.addEventListener("mousedown",this.onMouseDown),this.distElement.addEventListener("touchstart",this.onTouchStart),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!this.app.getSettings().mobileScrollSupport}),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("touchend",this.onTouchEnd))}getMousePos(u,h){const g=this.distElement.getBoundingClientRect();return{x:u-g.left,y:h-g.top}}checkTarget(u){return!this.app.getSettings().clickEventForward||!["a","button"].includes(u.tagName.toLowerCase())}}class j extends X{constructor(u,h,g,y){super(u,h,g),this.wrapper.insertAdjacentHTML("afterbegin",'<div class="stf__block"></div>'),this.distElement=u.querySelector(".stf__block"),this.items=y;for(const _ of y)this.distElement.appendChild(_);this.setHandlers()}clear(){for(const u of this.items)this.parentElement.appendChild(u)}updateItems(u){this.removeHandlers(),this.distElement.innerHTML="";for(const h of u)this.distElement.appendChild(h);this.items=u,this.setHandlers()}update(){this.app.getRender().update()}}class V extends X{constructor(u,h,g){super(u,h,g),this.wrapper.innerHTML='<canvas class="stf__canvas"></canvas>',this.canvas=u.querySelectorAll("canvas")[0],this.distElement=this.canvas,this.resizeCanvas(),this.setHandlers()}resizeCanvas(){const u=getComputedStyle(this.canvas),h=parseInt(u.getPropertyValue("width"),10),g=parseInt(u.getPropertyValue("height"),10);this.canvas.width=h,this.canvas.height=g}getCanvas(){return this.canvas}update(){this.resizeCanvas(),this.app.getRender().update()}}class rt extends Z{constructor(u,h,g){super(u,h),this.outerShadow=null,this.innerShadow=null,this.hardShadow=null,this.hardInnerShadow=null,this.element=g,this.createShadows()}createShadows(){this.element.insertAdjacentHTML("beforeend",`<div class="stf__outerShadow"></div>
             <div class="stf__innerShadow"></div>
             <div class="stf__hardShadow"></div>
             <div class="stf__hardInnerShadow"></div>`),this.outerShadow=this.element.querySelector(".stf__outerShadow"),this.innerShadow=this.element.querySelector(".stf__innerShadow"),this.hardShadow=this.element.querySelector(".stf__hardShadow"),this.hardInnerShadow=this.element.querySelector(".stf__hardInnerShadow")}clearShadow(){super.clearShadow(),this.outerShadow.style.cssText="display: none",this.innerShadow.style.cssText="display: none",this.hardShadow.style.cssText="display: none",this.hardInnerShadow.style.cssText="display: none"}reload(){this.element.querySelector(".stf__outerShadow")||this.createShadows()}drawHardInnerShadow(){const u=this.getRect(),h=this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress;let g=(100-h)*(2.5*u.pageWidth)/100+20;g>u.pageWidth&&(g=u.pageWidth);let y=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+5).toString(10)};
            width: ${g}px;
            height: ${u.height}px;
            background: linear-gradient(to right,
                rgba(0, 0, 0, ${this.shadow.opacity*h/100}) 5%,
                rgba(0, 0, 0, 0) 100%);
            left: ${u.left+u.width/2}px;
            transform-origin: 0 0;
        `;y+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0);":"transform: translate3d(0, 0, 0) rotateY(180deg);",this.hardInnerShadow.style.cssText=y}drawHardOuterShadow(){const u=this.getRect();let h=(100-(this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress))*(2.5*u.pageWidth)/100+20;h>u.pageWidth&&(h=u.pageWidth);let g=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+4).toString(10)};
            width: ${h}px;
            height: ${u.height}px;
            background: linear-gradient(to left, rgba(0, 0, 0, ${this.shadow.opacity}) 5%, rgba(0, 0, 0, 0) 100%);
            left: ${u.left+u.width/2}px;
            transform-origin: 0 0;
        `;g+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0) rotateY(180deg);":"transform: translate3d(0, 0, 0);",this.hardShadow.style.cssText=g}drawInnerShadow(){const u=this.getRect(),h=3*this.shadow.width/4,g=this.getDirection()===0?h:0,y=this.getDirection()===0?"to left":"to right",_=this.convertToGlobal(this.shadow.pos),k=this.shadow.angle+3*Math.PI/2,J=[this.pageRect.topLeft,this.pageRect.topRight,this.pageRect.bottomRight,this.pageRect.bottomLeft];let F="polygon( ";for(const yt of J){let kt=this.getDirection()===1?{x:-yt.x+this.shadow.pos.x,y:yt.y-this.shadow.pos.y}:{x:yt.x-this.shadow.pos.x,y:yt.y-this.shadow.pos.y};kt=q.GetRotatedPoint(kt,{x:g,y:100},k),F+=kt.x+"px "+kt.y+"px, "}F=F.slice(0,-2),F+=")";const ot=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${h}px;
            height: ${2*u.height}px;
            background: linear-gradient(${y},
                rgba(0, 0, 0, ${this.shadow.opacity}) 5%,
                rgba(0, 0, 0, 0.05) 15%,
                rgba(0, 0, 0, ${this.shadow.opacity}) 35%,
                rgba(0, 0, 0, 0) 100%);
            transform-origin: ${g}px 100px;
            transform: translate3d(${_.x-g}px, ${_.y-100}px, 0) rotate(${k}rad);
            clip-path: ${F};
            -webkit-clip-path: ${F};
        `;this.innerShadow.style.cssText=ot}drawOuterShadow(){const u=this.getRect(),h=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),g=this.shadow.angle+3*Math.PI/2,y=this.getDirection()===1?this.shadow.width:0,_=this.getDirection()===0?"to right":"to left",k=[{x:0,y:0},{x:u.pageWidth,y:0},{x:u.pageWidth,y:u.height},{x:0,y:u.height}];let J="polygon( ";for(const ot of k)if(ot!==null){let yt=this.getDirection()===1?{x:-ot.x+this.shadow.pos.x,y:ot.y-this.shadow.pos.y}:{x:ot.x-this.shadow.pos.x,y:ot.y-this.shadow.pos.y};yt=q.GetRotatedPoint(yt,{x:y,y:100},g),J+=yt.x+"px "+yt.y+"px, "}J=J.slice(0,-2),J+=")";const F=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2*u.height}px;
            background: linear-gradient(${_}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));
            transform-origin: ${y}px 100px;
            transform: translate3d(${h.x-y}px, ${h.y-100}px, 0) rotate(${g}rad);
            clip-path: ${J};
            -webkit-clip-path: ${J};
        `;this.outerShadow.style.cssText=F}drawLeftPage(){this.orientation!=="portrait"&&this.leftPage!==null&&(this.direction===1&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.leftPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.leftPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.leftPage.draw(this.flippingPage.getDrawingDensity())):this.leftPage.simpleDraw(0))}drawRightPage(){this.rightPage!==null&&(this.direction===0&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.rightPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.rightPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.rightPage.draw(this.flippingPage.getDrawingDensity())):this.rightPage.simpleDraw(1))}drawBottomPage(){if(this.bottomPage===null)return;const u=this.flippingPage!=null?this.flippingPage.getDrawingDensity():null;this.orientation==="portrait"&&this.direction===1||(this.bottomPage.getElement().style.zIndex=(this.getSettings().startZIndex+3).toString(10),this.bottomPage.draw(u))}drawFrame(){this.clear(),this.drawLeftPage(),this.drawRightPage(),this.drawBottomPage(),this.flippingPage!=null&&(this.flippingPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.flippingPage.draw()),this.shadow!=null&&this.flippingPage!==null&&(this.flippingPage.getDrawingDensity()==="soft"?(this.drawOuterShadow(),this.drawInnerShadow()):(this.drawHardOuterShadow(),this.drawHardInnerShadow()))}clear(){for(const u of this.app.getPageCollection().getPages())u!==this.leftPage&&u!==this.rightPage&&u!==this.flippingPage&&u!==this.bottomPage&&(u.getElement().style.cssText="display: none"),u.getTemporaryCopy()!==this.flippingPage&&u.hideTemporaryCopy()}update(){super.update(),this.rightPage!==null&&this.rightPage.setOrientation(1),this.leftPage!==null&&this.leftPage.setOrientation(0)}}class ut{constructor(){this._default={startPage:0,size:"fixed",width:0,height:0,minWidth:0,maxWidth:0,minHeight:0,maxHeight:0,drawShadow:!0,flippingTime:1e3,usePortrait:!0,startZIndex:0,autoSize:!0,maxShadowOpacity:1,showCover:!1,mobileScrollSupport:!0,swipeDistance:30,clickEventForward:!0,useMouseEvents:!0,showPageCorners:!0,disableFlipByClick:!1}}getSettings(u){const h=this._default;if(Object.assign(h,u),h.size!=="stretch"&&h.size!=="fixed")throw new Error('Invalid size type. Available only "fixed" and "stretch" value');if(h.width<=0||h.height<=0)throw new Error("Invalid width or height");if(h.flippingTime<=0)throw new Error("Invalid flipping time");return h.size==="stretch"?(h.minWidth<=0&&(h.minWidth=100),h.maxWidth<h.minWidth&&(h.maxWidth=2e3),h.minHeight<=0&&(h.minHeight=100),h.maxHeight<h.minHeight&&(h.maxHeight=2e3)):(h.minWidth=h.width,h.maxWidth=h.width,h.minHeight=h.height,h.maxHeight=h.height),h}}(function(C,u){u===void 0&&(u={});var h=u.insertAt;if(typeof document<"u"){var g=document.head||document.getElementsByTagName("head")[0],y=document.createElement("style");y.type="text/css",h==="top"&&g.firstChild?g.insertBefore(y,g.firstChild):g.appendChild(y),y.styleSheet?y.styleSheet.cssText=C:y.appendChild(document.createTextNode(C))}})(`.stf__parent {
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
}`),f.PageFlip=class extends class{constructor(){this.events=new Map}on(C,u){return this.events.has(C)?this.events.get(C).push(u):this.events.set(C,[u]),this}off(C){this.events.delete(C)}trigger(C,u,h=null){if(this.events.has(C))for(const g of this.events.get(C))g({data:h,object:u})}}{constructor(C,u){super(),this.isUserTouch=!1,this.isUserMove=!1,this.setting=null,this.pages=null,this.setting=new ut().getSettings(u),this.block=C}destroy(){this.ui.destroy(),this.block.remove()}update(){this.render.update(),this.pages.show()}loadFromImages(C){this.ui=new V(this.block,this,this.setting);const u=this.ui.getCanvas();this.render=new K(this,this.setting,u),this.flipController=new G(this.render,this),this.pages=new D(this,this.render,C),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}loadFromHTML(C){this.ui=new j(this.block,this,this.setting,C),this.render=new rt(this,this.setting,this.ui.getDistElement()),this.flipController=new G(this.render,this),this.pages=new S(this,this.render,this.ui.getDistElement(),C),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}updateFromImages(C){const u=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new D(this,this.render,C),this.pages.load(),this.pages.show(u),this.trigger("update",this,{page:u,mode:this.render.getOrientation()})}updateFromHtml(C){const u=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new S(this,this.render,this.ui.getDistElement(),C),this.pages.load(),this.ui.updateItems(C),this.render.reload(),this.pages.show(u),this.trigger("update",this,{page:u,mode:this.render.getOrientation()})}clear(){this.pages.destroy(),this.ui.clear()}turnToPrevPage(){this.pages.showPrev()}turnToNextPage(){this.pages.showNext()}turnToPage(C){this.pages.show(C)}flipNext(C="top"){this.flipController.flipNext(C)}flipPrev(C="top"){this.flipController.flipPrev(C)}flip(C,u="top"){this.flipController.flipToPage(C,u)}updateState(C){this.trigger("changeState",this,C)}updatePageIndex(C){this.trigger("flip",this,C)}updateOrientation(C){this.ui.setOrientationStyle(C),this.update(),this.trigger("changeOrientation",this,C)}getPageCount(){return this.pages.getPageCount()}getCurrentPageIndex(){return this.pages.getCurrentPageIndex()}getPage(C){return this.pages.getPage(C)}getRender(){return this.render}getFlipController(){return this.flipController}getOrientation(){return this.render.getOrientation()}getBoundsRect(){return this.render.getRect()}getSettings(){return this.setting}getUI(){return this.ui}getState(){return this.flipController.getState()}getPageCollection(){return this.pages}startUserTouch(C){this.mousePosition=C,this.isUserTouch=!0,this.isUserMove=!1}userMove(C,u){this.isUserTouch||u||!this.setting.showPageCorners?this.isUserTouch&&q.GetDistanceBetweenTwoPoint(this.mousePosition,C)>5&&(this.isUserMove=!0,this.flipController.fold(C)):this.flipController.showCorner(C)}userStop(C,u=!1){this.isUserTouch&&(this.isUserTouch=!1,u||(this.isUserMove?this.flipController.stopMove():this.flipController.flip(C)))}},Object.defineProperty(f,"__esModule",{value:!0})})}(il,il.exports)),il.exports}var qm=Um();const Bm=Pt.forwardRef((r,o)=>{const f=vt.useRef(null),s=vt.useRef([]),p=vt.useRef(),[v,D]=vt.useState([]);vt.useImperativeHandle(o,()=>({pageFlip:()=>p.current}));const q=vt.useCallback(()=>{p.current&&p.current.clear()},[]),M=vt.useCallback(()=>{const S=p.current;S&&(S.off("flip"),S.off("changeOrientation"),S.off("changeState"),S.off("init"),S.off("update"))},[]);return vt.useEffect(()=>{if(s.current=[],r.children){const S=Pt.Children.map(r.children,U=>Pt.cloneElement(U,{ref:G=>{G&&s.current.push(G)}}));(!r.renderOnlyPageLengthChange||v.length!==S.length)&&(S.length<v.length&&q(),D(S))}},[r.children]),vt.useEffect(()=>{const S=()=>{const U=p.current;U&&(r.onFlip&&U.on("flip",G=>r.onFlip(G)),r.onChangeOrientation&&U.on("changeOrientation",G=>r.onChangeOrientation(G)),r.onChangeState&&U.on("changeState",G=>r.onChangeState(G)),r.onInit&&U.on("init",G=>r.onInit(G)),r.onUpdate&&U.on("update",G=>r.onUpdate(G)))};v.length>0&&s.current.length>0&&(M(),f.current&&!p.current&&(p.current=new qm.PageFlip(f.current,r)),p.current.getFlipController()?p.current.updateFromHtml(s.current):p.current.loadFromHTML(s.current),S())},[v]),Pt.createElement("div",{ref:f,className:r.className,style:r.style},v)}),jm=Pt.memo(Bm),Gm=vt.forwardRef((r,o)=>{const{key:f,src:s,width:p,height:v,isEven:D}=r,[q,M]=vt.useState(null);return vt.useEffect(()=>{const S=new Image;S.src=s,S.onload=()=>M(s)},[s]),tt.jsxs("div",{className:"page",ref:o,children:[q&&tt.jsx("img",{src:q,style:{width:p,height:v}}),tt.jsx("div",{className:`overlay ${D?"left":"right"}`})]},f)}),Ld=vt.forwardRef((r,o)=>{const{width:f,height:s,src:p}=r;return tt.jsx("div",{className:"page page-cover","data-density":"hard",ref:o,children:tt.jsx("img",{src:p,style:{width:f,height:s}})})}),Pd=({ariaLabel:r,isDisabled:o,children:f,onClick:s})=>tt.jsx("button",{type:"button",onClick:s,className:`button-circle ${o?"disabled":""}`,tabIndex:-1,onMouseDown:p=>p.preventDefault(),"aria-label":r,children:f}),Ym=({width:r,height:o,isMobile:f})=>{const s=vt.useRef(null),p=vt.useRef(null),[v,D]=vt.useState(0),[q,M]=vt.useState(!1),[S,U]=vt.useState(!1),[G,Z]=vt.useState(!1),[K,X]=vt.useState(Math.floor(v/2)+1),j=42,V=y=>`/letter-to-the-cloud/assets/images/Frame ${y+41}.png`,rt=Array.from({length:j},(y,_)=>V(_)),ut=vt.useRef(new Map);vt.useEffect(()=>{const y=()=>{!S&&p.current&&(U(!0),p.current.play().catch(_=>{console.error("Autoplay failed:",_)})),window.removeEventListener("click",y),window.removeEventListener("keydown",y)};return window.addEventListener("click",y),window.addEventListener("keydown",y),()=>{window.removeEventListener("click",y),window.removeEventListener("keydown",y)}},[S]),vt.useEffect(()=>{(async()=>{for(let _=0;_<rt.length/2;_++){const k=_*2+41,F=[k,k+1].map(kt=>`/letter-to-the-cloud/assets/images/Frame ${kt}.png`).map(kt=>{const wt=new Image;return wt.src=kt,new Promise(z=>{wt.onload=()=>z(wt),wt.onerror=()=>z(wt)})}),[ot,yt]=await Promise.all([...F]);ut.current.set(_,{images:[ot,yt]})}M(!0)})()},[]);const C=async y=>{const J=(Math.max(1,Math.min(y,Math.floor(rt.length/2)))-1)*2-v,F=J>0?1:-1,ot=Math.abs(J);for(let yt=0;yt<=ot;yt++)s.current?.flip(v+yt*F)},u=y=>D(y.data),h=()=>s.current?.flipNext(),g=()=>s.current?.flipPrev();return q?tt.jsxs(tt.Fragment,{children:[tt.jsxs("div",{className:"book-wrapper",children:[tt.jsx("audio",{autoPlay:!0,loop:!0,ref:p,preload:"auto",children:tt.jsx("source",{src:"/letter-to-the-cloud/assets/audio/1.mp3",type:"audio/mpeg"})}),tt.jsx(Pd,{ariaLabel:"Previous page",isDisabled:!v,onClick:g,children:tt.jsx("span",{children:"←"})}),tt.jsxs(jm,{width:r,height:o,maxShadowOpacity:.5,size:"fixed",drawShadow:!0,showCover:!0,mobileScrollSupport:!1,onFlip:u,ref:y=>s.current=y?.pageFlip(),children:[tt.jsx(Ld,{width:r,height:o,src:"/letter-to-the-cloud/assets/images/Frame 83.png"}),rt.map((y,_)=>tt.jsx(Gm,{src:y,width:r,height:o,isEven:_===0},_)),tt.jsx(Ld,{width:r,height:o,src:"/letter-to-the-cloud/assets/images/Frame 84.png"})]}),tt.jsx(Pd,{ariaLabel:"Next page",isDisabled:v>=rt.length,onClick:h,children:tt.jsx("span",{children:"→"})})]}),!f&&tt.jsxs(tt.Fragment,{children:[tt.jsx("img",{className:`authors ${v>=rt.length?"":"disabled"}`,src:"/letter-to-the-cloud/assets/images/2025-07-07 18.27.30.jpg"}),Array.from({length:5}).map(y=>tt.jsx("div",{className:"star"}))]}),v&&v<=rt.length&&tt.jsxs("p",{children:[G?tt.jsx("input",{type:"number",className:"current-page-input",value:K,min:1,max:Math.floor(rt.length/2),onChange:y=>X(Number(y.target.value)),onBlur:()=>{Z(!1),C(K)},onKeyDown:y=>{y.key==="Enter"&&(Z(!1),C(K))},autoFocus:!0}):tt.jsx("span",{className:"current-page-number",onClick:()=>{X(Math.floor(v/2)+1),Z(!0)},style:{cursor:"pointer"},children:Math.floor(v/2)+1})," ","/ ",tt.jsx("span",{children:Math.floor(rt.length/2)})]})]}):tt.jsx(Hm,{color:"#ffd600",size:"large"})},Lm=()=>tt.jsxs(tt.Fragment,{children:[tt.jsx("style",{children:`
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.2; transform: scale(0.8); }
        }
      `}),tt.jsx("div",{style:fs.overlay,children:tt.jsx("div",{style:fs.starsContainer,children:Array.from({length:50}).map((r,o)=>tt.jsx("div",{style:{...fs.star,...Pm()}},o))})})]}),fs={overlay:{position:"fixed",height:"100%",top:0,left:0,right:0,bottom:0,zIndex:1,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:"white",fontSize:24,textAlign:"center",overflow:"hidden"},starsContainer:{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none"},star:{position:"absolute",width:2,height:2,borderRadius:"50%",backgroundColor:"white",opacity:.8,animationName:"twinkle",animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",animationDirection:"alternate"}};function Pm(r){const o=Math.random()*100+"%",f=Math.random()*100+"%",s=1+Math.random()*2,p=Math.random()*5;return{top:o,left:f,animationDuration:`${s}s`,animationDelay:`${p}s`}}const Xm=()=>{const[r,o]=vt.useState(!1),f=()=>{const s=window.matchMedia("(orientation: portrait)").matches,p=window.innerWidth<768;o(s&&p)};return vt.useEffect(()=>(f(),window.addEventListener("orientationchange",f),window.addEventListener("resize",f),()=>{window.removeEventListener("orientationchange",f),window.removeEventListener("resize",f)}),[]),r?tt.jsx("div",{className:"overlay",children:tt.jsxs("div",{className:"message",children:["📱 Будь ласка поверніть телефон ",tt.jsx("strong",{children:"горизонтально"}),tt.jsx("br",{}),"для ліпшого відображення."]})}):null};var de=function(){return de=Object.assign||function(o){for(var f,s=1,p=arguments.length;s<p;s++){f=arguments[s];for(var v in f)Object.prototype.hasOwnProperty.call(f,v)&&(o[v]=f[v])}return o},de.apply(this,arguments)};function ol(r,o,f){if(f||arguments.length===2)for(var s=0,p=o.length,v;s<p;s++)(v||!(s in o))&&(v||(v=Array.prototype.slice.call(o,0,s)),v[s]=o[s]);return r.concat(v||Array.prototype.slice.call(o))}var Ct="-ms-",rl="-moz-",Tt="-webkit-",o0="comm",Br="rule",Es="decl",Zm="@import",u0="@keyframes",Qm="@layer",s0=Math.abs,_s=String.fromCharCode,bs=Object.assign;function Vm(r,o){return It(r,0)^45?(((o<<2^It(r,0))<<2^It(r,1))<<2^It(r,2))<<2^It(r,3):0}function c0(r){return r.trim()}function pn(r,o){return(r=o.exec(r))?r[0]:r}function ct(r,o,f){return r.replace(o,f)}function Dr(r,o,f){return r.indexOf(o,f)}function It(r,o){return r.charCodeAt(o)|0}function Fa(r,o,f){return r.slice(o,f)}function Ke(r){return r.length}function f0(r){return r.length}function ll(r,o){return o.push(r),r}function Km(r,o){return r.map(o).join("")}function Xd(r,o){return r.filter(function(f){return!pn(f,o)})}var jr=1,Ia=1,h0=0,Ne=0,Xt=0,ai="";function Gr(r,o,f,s,p,v,D,q){return{value:r,root:o,parent:f,type:s,props:p,children:v,line:jr,column:Ia,length:D,return:"",siblings:q}}function Gn(r,o){return bs(Gr("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},o)}function $a(r){for(;r.root;)r=Gn(r.root,{children:[r]});ll(r,r.siblings)}function Jm(){return Xt}function $m(){return Xt=Ne>0?It(ai,--Ne):0,Ia--,Xt===10&&(Ia=1,jr--),Xt}function Ye(){return Xt=Ne<h0?It(ai,Ne++):0,Ia++,Xt===10&&(Ia=1,jr++),Xt}function ua(){return It(ai,Ne)}function Mr(){return Ne}function Yr(r,o){return Fa(ai,r,o)}function vs(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Wm(r){return jr=Ia=1,h0=Ke(ai=r),Ne=0,[]}function Fm(r){return ai="",r}function hs(r){return c0(Yr(Ne-1,ys(r===91?r+2:r===40?r+1:r)))}function Im(r){for(;(Xt=ua())&&Xt<33;)Ye();return vs(r)>2||vs(Xt)>3?"":" "}function tb(r,o){for(;--o&&Ye()&&!(Xt<48||Xt>102||Xt>57&&Xt<65||Xt>70&&Xt<97););return Yr(r,Mr()+(o<6&&ua()==32&&Ye()==32))}function ys(r){for(;Ye();)switch(Xt){case r:return Ne;case 34:case 39:r!==34&&r!==39&&ys(Xt);break;case 40:r===41&&ys(r);break;case 92:Ye();break}return Ne}function eb(r,o){for(;Ye()&&r+Xt!==57;)if(r+Xt===84&&ua()===47)break;return"/*"+Yr(o,Ne-1)+"*"+_s(r===47?r:Ye())}function nb(r){for(;!vs(ua());)Ye();return Yr(r,Ne)}function ab(r){return Fm(zr("",null,null,null,[""],r=Wm(r),0,[0],r))}function zr(r,o,f,s,p,v,D,q,M){for(var S=0,U=0,G=D,Z=0,K=0,X=0,j=1,V=1,rt=1,ut=0,C="",u=p,h=v,g=s,y=C;V;)switch(X=ut,ut=Ye()){case 40:if(X!=108&&It(y,G-1)==58){Dr(y+=ct(hs(ut),"&","&\f"),"&\f",s0(S?q[S-1]:0))!=-1&&(rt=-1);break}case 34:case 39:case 91:y+=hs(ut);break;case 9:case 10:case 13:case 32:y+=Im(X);break;case 92:y+=tb(Mr()-1,7);continue;case 47:switch(ua()){case 42:case 47:ll(ib(eb(Ye(),Mr()),o,f,M),M);break;default:y+="/"}break;case 123*j:q[S++]=Ke(y)*rt;case 125*j:case 59:case 0:switch(ut){case 0:case 125:V=0;case 59+U:rt==-1&&(y=ct(y,/\f/g,"")),K>0&&Ke(y)-G&&ll(K>32?Qd(y+";",s,f,G-1,M):Qd(ct(y," ","")+";",s,f,G-2,M),M);break;case 59:y+=";";default:if(ll(g=Zd(y,o,f,S,U,p,q,C,u=[],h=[],G,v),v),ut===123)if(U===0)zr(y,o,g,g,u,v,G,q,h);else switch(Z===99&&It(y,3)===110?100:Z){case 100:case 108:case 109:case 115:zr(r,g,g,s&&ll(Zd(r,g,g,0,0,p,q,C,p,u=[],G,h),h),p,h,G,q,s?u:h);break;default:zr(y,g,g,g,[""],h,0,q,h)}}S=U=K=0,j=rt=1,C=y="",G=D;break;case 58:G=1+Ke(y),K=X;default:if(j<1){if(ut==123)--j;else if(ut==125&&j++==0&&$m()==125)continue}switch(y+=_s(ut),ut*j){case 38:rt=U>0?1:(y+="\f",-1);break;case 44:q[S++]=(Ke(y)-1)*rt,rt=1;break;case 64:ua()===45&&(y+=hs(Ye())),Z=ua(),U=G=Ke(C=y+=nb(Mr())),ut++;break;case 45:X===45&&Ke(y)==2&&(j=0)}}return v}function Zd(r,o,f,s,p,v,D,q,M,S,U,G){for(var Z=p-1,K=p===0?v:[""],X=f0(K),j=0,V=0,rt=0;j<s;++j)for(var ut=0,C=Fa(r,Z+1,Z=s0(V=D[j])),u=r;ut<X;++ut)(u=c0(V>0?K[ut]+" "+C:ct(C,/&\f/g,K[ut])))&&(M[rt++]=u);return Gr(r,o,f,p===0?Br:q,M,S,U,G)}function ib(r,o,f,s){return Gr(r,o,f,o0,_s(Jm()),Fa(r,2,-2),0,s)}function Qd(r,o,f,s,p){return Gr(r,o,f,Es,Fa(r,0,s),Fa(r,s+1,-1),s,p)}function d0(r,o,f){switch(Vm(r,o)){case 5103:return Tt+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Tt+r+r;case 4789:return rl+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return Tt+r+rl+r+Ct+r+r;case 5936:switch(It(r,o+11)){case 114:return Tt+r+Ct+ct(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return Tt+r+Ct+ct(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return Tt+r+Ct+ct(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return Tt+r+Ct+r+r;case 6165:return Tt+r+Ct+"flex-"+r+r;case 5187:return Tt+r+ct(r,/(\w+).+(:[^]+)/,Tt+"box-$1$2"+Ct+"flex-$1$2")+r;case 5443:return Tt+r+Ct+"flex-item-"+ct(r,/flex-|-self/g,"")+(pn(r,/flex-|baseline/)?"":Ct+"grid-row-"+ct(r,/flex-|-self/g,""))+r;case 4675:return Tt+r+Ct+"flex-line-pack"+ct(r,/align-content|flex-|-self/g,"")+r;case 5548:return Tt+r+Ct+ct(r,"shrink","negative")+r;case 5292:return Tt+r+Ct+ct(r,"basis","preferred-size")+r;case 6060:return Tt+"box-"+ct(r,"-grow","")+Tt+r+Ct+ct(r,"grow","positive")+r;case 4554:return Tt+ct(r,/([^-])(transform)/g,"$1"+Tt+"$2")+r;case 6187:return ct(ct(ct(r,/(zoom-|grab)/,Tt+"$1"),/(image-set)/,Tt+"$1"),r,"")+r;case 5495:case 3959:return ct(r,/(image-set\([^]*)/,Tt+"$1$`$1");case 4968:return ct(ct(r,/(.+:)(flex-)?(.*)/,Tt+"box-pack:$3"+Ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Tt+r+r;case 4200:if(!pn(r,/flex-|baseline/))return Ct+"grid-column-align"+Fa(r,o)+r;break;case 2592:case 3360:return Ct+ct(r,"template-","")+r;case 4384:case 3616:return f&&f.some(function(s,p){return o=p,pn(s.props,/grid-\w+-end/)})?~Dr(r+(f=f[o].value),"span",0)?r:Ct+ct(r,"-start","")+r+Ct+"grid-row-span:"+(~Dr(f,"span",0)?pn(f,/\d+/):+pn(f,/\d+/)-+pn(r,/\d+/))+";":Ct+ct(r,"-start","")+r;case 4896:case 4128:return f&&f.some(function(s){return pn(s.props,/grid-\w+-start/)})?r:Ct+ct(ct(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return ct(r,/(.+)-inline(.+)/,Tt+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ke(r)-1-o>6)switch(It(r,o+1)){case 109:if(It(r,o+4)!==45)break;case 102:return ct(r,/(.+:)(.+)-([^]+)/,"$1"+Tt+"$2-$3$1"+rl+(It(r,o+3)==108?"$3":"$2-$3"))+r;case 115:return~Dr(r,"stretch",0)?d0(ct(r,"stretch","fill-available"),o,f)+r:r}break;case 5152:case 5920:return ct(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,p,v,D,q,M,S){return Ct+p+":"+v+S+(D?Ct+p+"-span:"+(q?M:+M-+v)+S:"")+r});case 4949:if(It(r,o+6)===121)return ct(r,":",":"+Tt)+r;break;case 6444:switch(It(r,It(r,14)===45?18:11)){case 120:return ct(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Tt+(It(r,14)===45?"inline-":"")+"box$3$1"+Tt+"$2$3$1"+Ct+"$2box$3")+r;case 100:return ct(r,":",":"+Ct)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ct(r,"scroll-","scroll-snap-")+r}return r}function Hr(r,o){for(var f="",s=0;s<r.length;s++)f+=o(r[s],s,r,o)||"";return f}function lb(r,o,f,s){switch(r.type){case Qm:if(r.children.length)break;case Zm:case Es:return r.return=r.return||r.value;case o0:return"";case u0:return r.return=r.value+"{"+Hr(r.children,s)+"}";case Br:if(!Ke(r.value=r.props.join(",")))return""}return Ke(f=Hr(r.children,s))?r.return=r.value+"{"+f+"}":""}function rb(r){var o=f0(r);return function(f,s,p,v){for(var D="",q=0;q<o;q++)D+=r[q](f,s,p,v)||"";return D}}function ob(r){return function(o){o.root||(o=o.return)&&r(o)}}function ub(r,o,f,s){if(r.length>-1&&!r.return)switch(r.type){case Es:r.return=d0(r.value,r.length,f);return;case u0:return Hr([Gn(r,{value:ct(r.value,"@","@"+Tt)})],s);case Br:if(r.length)return Km(f=r.props,function(p){switch(pn(p,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$a(Gn(r,{props:[ct(p,/:(read-\w+)/,":"+rl+"$1")]})),$a(Gn(r,{props:[p]})),bs(r,{props:Xd(f,s)});break;case"::placeholder":$a(Gn(r,{props:[ct(p,/:(plac\w+)/,":"+Tt+"input-$1")]})),$a(Gn(r,{props:[ct(p,/:(plac\w+)/,":"+rl+"$1")]})),$a(Gn(r,{props:[ct(p,/:(plac\w+)/,Ct+"input-$1")]})),$a(Gn(r,{props:[p]})),bs(r,{props:Xd(f,s)});break}return""})}}var sb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Te={},ti=typeof process<"u"&&Te!==void 0&&(Te.REACT_APP_SC_ATTR||Te.SC_ATTR)||"data-styled",p0="active",g0="data-styled-version",Lr="6.1.19",Ds=`/*!sc*/
`,Nr=typeof window<"u"&&typeof document<"u",cb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Te!==void 0&&Te.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Te.REACT_APP_SC_DISABLE_SPEEDY!==""?Te.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Te.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Te!==void 0&&Te.SC_DISABLE_SPEEDY!==void 0&&Te.SC_DISABLE_SPEEDY!==""&&Te.SC_DISABLE_SPEEDY!=="false"&&Te.SC_DISABLE_SPEEDY),Pr=Object.freeze([]),ei=Object.freeze({});function fb(r,o,f){return f===void 0&&(f=ei),r.theme!==f.theme&&r.theme||o||f.theme}var m0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,db=/(^-|-$)/g;function Vd(r){return r.replace(hb,"-").replace(db,"")}var pb=/(a)(d)/gi,Er=52,Kd=function(r){return String.fromCharCode(r+(r>25?39:97))};function xs(r){var o,f="";for(o=Math.abs(r);o>Er;o=o/Er|0)f=Kd(o%Er)+f;return(Kd(o%Er)+f).replace(pb,"$1-$2")}var ds,b0=5381,Wa=function(r,o){for(var f=o.length;f;)r=33*r^o.charCodeAt(--f);return r},v0=function(r){return Wa(b0,r)};function y0(r){return xs(v0(r)>>>0)}function gb(r){return r.displayName||r.name||"Component"}function ps(r){return typeof r=="string"&&!0}var x0=typeof Symbol=="function"&&Symbol.for,S0=x0?Symbol.for("react.memo"):60115,mb=x0?Symbol.for("react.forward_ref"):60112,bb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},vb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},w0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},yb=((ds={})[mb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ds[S0]=w0,ds);function Jd(r){return("type"in(o=r)&&o.type.$$typeof)===S0?w0:"$$typeof"in r?yb[r.$$typeof]:bb;var o}var xb=Object.defineProperty,Sb=Object.getOwnPropertyNames,$d=Object.getOwnPropertySymbols,wb=Object.getOwnPropertyDescriptor,Ob=Object.getPrototypeOf,Wd=Object.prototype;function O0(r,o,f){if(typeof o!="string"){if(Wd){var s=Ob(o);s&&s!==Wd&&O0(r,s,f)}var p=Sb(o);$d&&(p=p.concat($d(o)));for(var v=Jd(r),D=Jd(o),q=0;q<p.length;++q){var M=p[q];if(!(M in vb||f&&f[M]||D&&M in D||v&&M in v)){var S=wb(o,M);try{xb(r,M,S)}catch{}}}}return r}function ni(r){return typeof r=="function"}function Ms(r){return typeof r=="object"&&"styledComponentId"in r}function oa(r,o){return r&&o?"".concat(r," ").concat(o):r||o||""}function Ss(r,o){if(r.length===0)return"";for(var f=r[0],s=1;s<r.length;s++)f+=r[s];return f}function ul(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function ws(r,o,f){if(f===void 0&&(f=!1),!f&&!ul(r)&&!Array.isArray(r))return o;if(Array.isArray(o))for(var s=0;s<o.length;s++)r[s]=ws(r[s],o[s]);else if(ul(o))for(var s in o)r[s]=ws(r[s],o[s]);return r}function zs(r,o){Object.defineProperty(r,"toString",{value:o})}function sl(r){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var Tb=function(){function r(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return r.prototype.indexOfGroup=function(o){for(var f=0,s=0;s<o;s++)f+=this.groupSizes[s];return f},r.prototype.insertRules=function(o,f){if(o>=this.groupSizes.length){for(var s=this.groupSizes,p=s.length,v=p;o>=v;)if((v<<=1)<0)throw sl(16,"".concat(o));this.groupSizes=new Uint32Array(v),this.groupSizes.set(s),this.length=v;for(var D=p;D<v;D++)this.groupSizes[D]=0}for(var q=this.indexOfGroup(o+1),M=(D=0,f.length);D<M;D++)this.tag.insertRule(q,f[D])&&(this.groupSizes[o]++,q++)},r.prototype.clearGroup=function(o){if(o<this.length){var f=this.groupSizes[o],s=this.indexOfGroup(o),p=s+f;this.groupSizes[o]=0;for(var v=s;v<p;v++)this.tag.deleteRule(s)}},r.prototype.getGroup=function(o){var f="";if(o>=this.length||this.groupSizes[o]===0)return f;for(var s=this.groupSizes[o],p=this.indexOfGroup(o),v=p+s,D=p;D<v;D++)f+="".concat(this.tag.getRule(D)).concat(Ds);return f},r}(),Rr=new Map,Ur=new Map,Cr=1,_r=function(r){if(Rr.has(r))return Rr.get(r);for(;Ur.has(Cr);)Cr++;var o=Cr++;return Rr.set(r,o),Ur.set(o,r),o},Ab=function(r,o){Cr=o+1,Rr.set(r,o),Ur.set(o,r)},Eb="style[".concat(ti,"][").concat(g0,'="').concat(Lr,'"]'),_b=new RegExp("^".concat(ti,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Db=function(r,o,f){for(var s,p=f.split(","),v=0,D=p.length;v<D;v++)(s=p[v])&&r.registerName(o,s)},Mb=function(r,o){for(var f,s=((f=o.textContent)!==null&&f!==void 0?f:"").split(Ds),p=[],v=0,D=s.length;v<D;v++){var q=s[v].trim();if(q){var M=q.match(_b);if(M){var S=0|parseInt(M[1],10),U=M[2];S!==0&&(Ab(U,S),Db(r,U,M[3]),r.getTag().insertRules(S,p)),p.length=0}else p.push(q)}}},Fd=function(r){for(var o=document.querySelectorAll(Eb),f=0,s=o.length;f<s;f++){var p=o[f];p&&p.getAttribute(ti)!==p0&&(Mb(r,p),p.parentNode&&p.parentNode.removeChild(p))}};function zb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var T0=function(r){var o=document.head,f=r||o,s=document.createElement("style"),p=function(q){var M=Array.from(q.querySelectorAll("style[".concat(ti,"]")));return M[M.length-1]}(f),v=p!==void 0?p.nextSibling:null;s.setAttribute(ti,p0),s.setAttribute(g0,Lr);var D=zb();return D&&s.setAttribute("nonce",D),f.insertBefore(s,v),s},Rb=function(){function r(o){this.element=T0(o),this.element.appendChild(document.createTextNode("")),this.sheet=function(f){if(f.sheet)return f.sheet;for(var s=document.styleSheets,p=0,v=s.length;p<v;p++){var D=s[p];if(D.ownerNode===f)return D}throw sl(17)}(this.element),this.length=0}return r.prototype.insertRule=function(o,f){try{return this.sheet.insertRule(f,o),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},r.prototype.getRule=function(o){var f=this.sheet.cssRules[o];return f&&f.cssText?f.cssText:""},r}(),Cb=function(){function r(o){this.element=T0(o),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(o,f){if(o<=this.length&&o>=0){var s=document.createTextNode(f);return this.element.insertBefore(s,this.nodes[o]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},r.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},r}(),kb=function(){function r(o){this.rules=[],this.length=0}return r.prototype.insertRule=function(o,f){return o<=this.length&&(this.rules.splice(o,0,f),this.length++,!0)},r.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},r.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},r}(),Id=Nr,Hb={isServer:!Nr,useCSSOMInjection:!cb},A0=function(){function r(o,f,s){o===void 0&&(o=ei),f===void 0&&(f={});var p=this;this.options=de(de({},Hb),o),this.gs=f,this.names=new Map(s),this.server=!!o.isServer,!this.server&&Nr&&Id&&(Id=!1,Fd(this)),zs(this,function(){return function(v){for(var D=v.getTag(),q=D.length,M="",S=function(G){var Z=function(rt){return Ur.get(rt)}(G);if(Z===void 0)return"continue";var K=v.names.get(Z),X=D.getGroup(G);if(K===void 0||!K.size||X.length===0)return"continue";var j="".concat(ti,".g").concat(G,'[id="').concat(Z,'"]'),V="";K!==void 0&&K.forEach(function(rt){rt.length>0&&(V+="".concat(rt,","))}),M+="".concat(X).concat(j,'{content:"').concat(V,'"}').concat(Ds)},U=0;U<q;U++)S(U);return M}(p)})}return r.registerId=function(o){return _r(o)},r.prototype.rehydrate=function(){!this.server&&Nr&&Fd(this)},r.prototype.reconstructWithOptions=function(o,f){return f===void 0&&(f=!0),new r(de(de({},this.options),o),this.gs,f&&this.names||void 0)},r.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(o=function(f){var s=f.useCSSOMInjection,p=f.target;return f.isServer?new kb(p):s?new Rb(p):new Cb(p)}(this.options),new Tb(o)));var o},r.prototype.hasNameForId=function(o,f){return this.names.has(o)&&this.names.get(o).has(f)},r.prototype.registerName=function(o,f){if(_r(o),this.names.has(o))this.names.get(o).add(f);else{var s=new Set;s.add(f),this.names.set(o,s)}},r.prototype.insertRules=function(o,f,s){this.registerName(o,f),this.getTag().insertRules(_r(o),s)},r.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},r.prototype.clearRules=function(o){this.getTag().clearGroup(_r(o)),this.clearNames(o)},r.prototype.clearTag=function(){this.tag=void 0},r}(),Nb=/&/g,Ub=/^\s*\/\/.*$/gm;function E0(r,o){return r.map(function(f){return f.type==="rule"&&(f.value="".concat(o," ").concat(f.value),f.value=f.value.replaceAll(",",",".concat(o," ")),f.props=f.props.map(function(s){return"".concat(o," ").concat(s)})),Array.isArray(f.children)&&f.type!=="@keyframes"&&(f.children=E0(f.children,o)),f})}function qb(r){var o,f,s,p=ei,v=p.options,D=v===void 0?ei:v,q=p.plugins,M=q===void 0?Pr:q,S=function(Z,K,X){return X.startsWith(f)&&X.endsWith(f)&&X.replaceAll(f,"").length>0?".".concat(o):Z},U=M.slice();U.push(function(Z){Z.type===Br&&Z.value.includes("&")&&(Z.props[0]=Z.props[0].replace(Nb,f).replace(s,S))}),D.prefix&&U.push(ub),U.push(lb);var G=function(Z,K,X,j){K===void 0&&(K=""),X===void 0&&(X=""),j===void 0&&(j="&"),o=j,f=K,s=new RegExp("\\".concat(f,"\\b"),"g");var V=Z.replace(Ub,""),rt=ab(X||K?"".concat(X," ").concat(K," { ").concat(V," }"):V);D.namespace&&(rt=E0(rt,D.namespace));var ut=[];return Hr(rt,rb(U.concat(ob(function(C){return ut.push(C)})))),ut};return G.hash=M.length?M.reduce(function(Z,K){return K.name||sl(15),Wa(Z,K.name)},b0).toString():"",G}var Bb=new A0,Os=qb(),_0=Pt.createContext({shouldForwardProp:void 0,styleSheet:Bb,stylis:Os});_0.Consumer;Pt.createContext(void 0);function t0(){return vt.useContext(_0)}var D0=function(){function r(o,f){var s=this;this.inject=function(p,v){v===void 0&&(v=Os);var D=s.name+v.hash;p.hasNameForId(s.id,D)||p.insertRules(s.id,D,v(s.rules,D,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=f,zs(this,function(){throw sl(12,String(s.name))})}return r.prototype.getName=function(o){return o===void 0&&(o=Os),this.name+o.hash},r}(),jb=function(r){return r>="A"&&r<="Z"};function e0(r){for(var o="",f=0;f<r.length;f++){var s=r[f];if(f===1&&s==="-"&&r[0]==="-")return r;jb(s)?o+="-"+s.toLowerCase():o+=s}return o.startsWith("ms-")?"-"+o:o}var M0=function(r){return r==null||r===!1||r===""},z0=function(r){var o,f,s=[];for(var p in r){var v=r[p];r.hasOwnProperty(p)&&!M0(v)&&(Array.isArray(v)&&v.isCss||ni(v)?s.push("".concat(e0(p),":"),v,";"):ul(v)?s.push.apply(s,ol(ol(["".concat(p," {")],z0(v),!1),["}"],!1)):s.push("".concat(e0(p),": ").concat((o=p,(f=v)==null||typeof f=="boolean"||f===""?"":typeof f!="number"||f===0||o in sb||o.startsWith("--")?String(f).trim():"".concat(f,"px")),";")))}return s};function sa(r,o,f,s){if(M0(r))return[];if(Ms(r))return[".".concat(r.styledComponentId)];if(ni(r)){if(!ni(v=r)||v.prototype&&v.prototype.isReactComponent||!o)return[r];var p=r(o);return sa(p,o,f,s)}var v;return r instanceof D0?f?(r.inject(f,s),[r.getName(s)]):[r]:ul(r)?z0(r):Array.isArray(r)?Array.prototype.concat.apply(Pr,r.map(function(D){return sa(D,o,f,s)})):[r.toString()]}function Gb(r){for(var o=0;o<r.length;o+=1){var f=r[o];if(ni(f)&&!Ms(f))return!1}return!0}var Yb=v0(Lr),Lb=function(){function r(o,f,s){this.rules=o,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&Gb(o),this.componentId=f,this.baseHash=Wa(Yb,f),this.baseStyle=s,A0.registerId(f)}return r.prototype.generateAndInjectStyles=function(o,f,s){var p=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,f,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&f.hasNameForId(this.componentId,this.staticRulesId))p=oa(p,this.staticRulesId);else{var v=Ss(sa(this.rules,o,f,s)),D=xs(Wa(this.baseHash,v)>>>0);if(!f.hasNameForId(this.componentId,D)){var q=s(v,".".concat(D),void 0,this.componentId);f.insertRules(this.componentId,D,q)}p=oa(p,D),this.staticRulesId=D}else{for(var M=Wa(this.baseHash,s.hash),S="",U=0;U<this.rules.length;U++){var G=this.rules[U];if(typeof G=="string")S+=G;else if(G){var Z=Ss(sa(G,o,f,s));M=Wa(M,Z+U),S+=Z}}if(S){var K=xs(M>>>0);f.hasNameForId(this.componentId,K)||f.insertRules(this.componentId,K,s(S,".".concat(K),void 0,this.componentId)),p=oa(p,K)}}return p},r}(),R0=Pt.createContext(void 0);R0.Consumer;var gs={};function Pb(r,o,f){var s=Ms(r),p=r,v=!ps(r),D=o.attrs,q=D===void 0?Pr:D,M=o.componentId,S=M===void 0?function(u,h){var g=typeof u!="string"?"sc":Vd(u);gs[g]=(gs[g]||0)+1;var y="".concat(g,"-").concat(y0(Lr+g+gs[g]));return h?"".concat(h,"-").concat(y):y}(o.displayName,o.parentComponentId):M,U=o.displayName,G=U===void 0?function(u){return ps(u)?"styled.".concat(u):"Styled(".concat(gb(u),")")}(r):U,Z=o.displayName&&o.componentId?"".concat(Vd(o.displayName),"-").concat(o.componentId):o.componentId||S,K=s&&p.attrs?p.attrs.concat(q).filter(Boolean):q,X=o.shouldForwardProp;if(s&&p.shouldForwardProp){var j=p.shouldForwardProp;if(o.shouldForwardProp){var V=o.shouldForwardProp;X=function(u,h){return j(u,h)&&V(u,h)}}else X=j}var rt=new Lb(f,Z,s?p.componentStyle:void 0);function ut(u,h){return function(g,y,_){var k=g.attrs,J=g.componentStyle,F=g.defaultProps,ot=g.foldedComponentIds,yt=g.styledComponentId,kt=g.target,wt=Pt.useContext(R0),z=t0(),L=g.shouldForwardProp||z.shouldForwardProp,et=fb(y,wt,F)||ei,dt=function(pt,at,Kt){for(var Ot,ae=de(de({},at),{className:void 0,theme:Kt}),Yn=0;Yn<pt.length;Yn+=1){var $e=ni(Ot=pt[Yn])?Ot(ae):Ot;for(var Ae in $e)ae[Ae]=Ae==="className"?oa(ae[Ae],$e[Ae]):Ae==="style"?de(de({},ae[Ae]),$e[Ae]):$e[Ae]}return at.className&&(ae.className=oa(ae.className,at.className)),ae}(k,y,et),b=dt.as||kt,B={};for(var Y in dt)dt[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&dt.theme===et||(Y==="forwardedAs"?B.as=dt.forwardedAs:L&&!L(Y,b)||(B[Y]=dt[Y]));var P=function(pt,at){var Kt=t0(),Ot=pt.generateAndInjectStyles(at,Kt.styleSheet,Kt.stylis);return Ot}(J,dt),I=oa(ot,yt);return P&&(I+=" "+P),dt.className&&(I+=" "+dt.className),B[ps(b)&&!m0.has(b)?"class":"className"]=I,_&&(B.ref=_),vt.createElement(b,B)}(C,u,h)}ut.displayName=G;var C=Pt.forwardRef(ut);return C.attrs=K,C.componentStyle=rt,C.displayName=G,C.shouldForwardProp=X,C.foldedComponentIds=s?oa(p.foldedComponentIds,p.styledComponentId):"",C.styledComponentId=Z,C.target=s?p.target:r,Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(u){this._foldedDefaultProps=s?function(h){for(var g=[],y=1;y<arguments.length;y++)g[y-1]=arguments[y];for(var _=0,k=g;_<k.length;_++)ws(h,k[_],!0);return h}({},p.defaultProps,u):u}}),zs(C,function(){return".".concat(C.styledComponentId)}),v&&O0(C,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),C}function n0(r,o){for(var f=[r[0]],s=0,p=o.length;s<p;s+=1)f.push(o[s],r[s+1]);return f}var a0=function(r){return Object.assign(r,{isCss:!0})};function C0(r){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];if(ni(r)||ul(r))return a0(sa(n0(Pr,ol([r],o,!0))));var s=r;return o.length===0&&s.length===1&&typeof s[0]=="string"?sa(s):a0(sa(n0(s,o)))}function Ts(r,o,f){if(f===void 0&&(f=ei),!o)throw sl(1,o);var s=function(p){for(var v=[],D=1;D<arguments.length;D++)v[D-1]=arguments[D];return r(o,f,C0.apply(void 0,ol([p],v,!1)))};return s.attrs=function(p){return Ts(r,o,de(de({},f),{attrs:Array.prototype.concat(f.attrs,p).filter(Boolean)}))},s.withConfig=function(p){return Ts(r,o,de(de({},f),p))},s}var k0=function(r){return Ts(Pb,r)},Rs=k0;m0.forEach(function(r){Rs[r]=k0(r)});function Xb(r){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];var s=Ss(C0.apply(void 0,ol([r],o,!1))),p=y0(s);return new D0(p,s)}const Zb=Xb`
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
`,Qb=Rs.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  pointer-events: none;
  z-index: 2;
  overflow: hidden;
  background: transparent;
`,ra=Rs.img`
  position: absolute;
  top: ${({top:r})=>r};
  left: 0;
  width: auto;
  height: auto;
  transform: scale(${({scale:r})=>r||1});
  opacity: 0;
  animation: ${Zb} ${({duration:r})=>r}s linear infinite;
  animation-delay: ${({delay:r})=>r}s;
`,Vb=()=>tt.jsxs(Qb,{children:[tt.jsx(ra,{src:"/letter-to-the-cloud/assets/images/clouds/02.png",top:"20%",delay:0,duration:80,scale:6}),tt.jsx(ra,{src:"/letter-to-the-cloud/assets/images/clouds/03.png",top:"30%",delay:5,duration:90,scale:5.5}),tt.jsx(ra,{src:"/letter-to-the-cloud/assets/images/clouds/04.png",top:"40%",delay:10,duration:100,scale:6.2}),tt.jsx(ra,{src:"/letter-to-the-cloud/assets/images/clouds/05.png",top:"0%",delay:3,duration:85,scale:5.8}),tt.jsx(ra,{src:"/letter-to-the-cloud/assets/images/clouds/06.png",top:"25%",delay:8,duration:95,scale:6.5}),tt.jsx(ra,{src:"/letter-to-the-cloud/assets/images/clouds/07.png",top:"35%",delay:12,duration:90,scale:6}),tt.jsx(ra,{src:"/letter-to-the-cloud/assets/images/clouds/08.png",top:"45%",delay:6,duration:100,scale:6.8})]});function Kb(){const r=pm(),{width:o,height:f,isMobile:s}=dm();return tt.jsxs(tt.Fragment,{children:[!r&&tt.jsx(Xm,{}),tt.jsx(Lm,{}),tt.jsx(Vb,{}),tt.jsx("div",{className:"wrapper",children:r&&tt.jsx(Ym,{width:o,height:f,isMobile:s})})]})}hm.createRoot(document.getElementById("root")).render(tt.jsx(vt.StrictMode,{children:tt.jsx(Kb,{})}));
