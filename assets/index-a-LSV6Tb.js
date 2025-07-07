(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))s(p);new MutationObserver(p=>{for(const y of p)if(y.type==="childList")for(const _ of y.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&s(_)}).observe(document,{childList:!0,subtree:!0});function f(p){const y={};return p.integrity&&(y.integrity=p.integrity),p.referrerPolicy&&(y.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?y.credentials="include":p.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function s(p){if(p.ep)return;p.ep=!0;const y=f(p);fetch(p.href,y)}})();function am(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var is={exports:{}},nl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function im(){if(Ed)return nl;Ed=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function f(s,p,y){var _=null;if(y!==void 0&&(_=""+y),p.key!==void 0&&(_=""+p.key),"key"in p){y={};for(var G in p)G!=="key"&&(y[G]=p[G])}else y=p;return p=y.ref,{$$typeof:r,type:s,key:_,ref:p!==void 0?p:null,props:y}}return nl.Fragment=o,nl.jsx=f,nl.jsxs=f,nl}var _d;function lm(){return _d||(_d=1,is.exports=im()),is.exports}var it=lm(),ls={exports:{}},ot={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd;function rm(){if(Dd)return ot;Dd=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),y=Symbol.for("react.consumer"),_=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),j=Symbol.iterator;function Z(b){return b===null||typeof b!="object"?null:(b=j&&b[j]||b["@@iterator"],typeof b=="function"?b:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,q={};function V(b,B,L){this.props=b,this.context=B,this.refs=q,this.updater=L||$}V.prototype.isReactComponent={},V.prototype.setState=function(b,B){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,B,"setState")},V.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function ut(){}ut.prototype=V.prototype;function rt(b,B,L){this.props=b,this.context=B,this.refs=q,this.updater=L||$}var C=rt.prototype=new ut;C.constructor=rt,Y(C,V.prototype),C.isPureReactComponent=!0;var u=Array.isArray,h={H:null,A:null,T:null,S:null,V:null},g=Object.prototype.hasOwnProperty;function x(b,B,L,X,W,pt){return L=pt.ref,{$$typeof:r,type:b,key:B,ref:L!==void 0?L:null,props:pt}}function M(b,B){return x(b.type,B,void 0,void 0,void 0,b.props)}function H(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function F(b){var B={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(L){return B[L]})}var I=/\/+/g;function st(b,B){return typeof b=="object"&&b!==null&&b.key!=null?F(""+b.key):B.toString(36)}function Mt(){}function Yt(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(Mt,Mt):(b.status="pending",b.then(function(B){b.status==="pending"&&(b.status="fulfilled",b.value=B)},function(B){b.status==="pending"&&(b.status="rejected",b.reason=B)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function Ct(b,B,L,X,W){var pt=typeof b;(pt==="undefined"||pt==="boolean")&&(b=null);var et=!1;if(b===null)et=!0;else switch(pt){case"bigint":case"string":case"number":et=!0;break;case"object":switch(b.$$typeof){case r:case o:et=!0;break;case N:return et=b._init,Ct(et(b._payload),B,L,X,W)}}if(et)return W=W(b),et=X===""?"."+st(b,0):X,u(W)?(L="",et!=null&&(L=et.replace(I,"$&/")+"/"),Ct(W,B,L,"",function(an){return an})):W!=null&&(H(W)&&(W=M(W,L+(W.key==null||b&&b.key===W.key?"":(""+W.key).replace(I,"$&/")+"/")+et)),B.push(W)),1;et=0;var Kt=X===""?".":X+":";if(u(b))for(var xt=0;xt<b.length;xt++)X=b[xt],pt=Kt+st(X,xt),et+=Ct(X,B,L,pt,W);else if(xt=Z(b),typeof xt=="function")for(b=xt.call(b),xt=0;!(X=b.next()).done;)X=X.value,pt=Kt+st(X,xt++),et+=Ct(X,B,L,pt,W);else if(pt==="object"){if(typeof b.then=="function")return Ct(Yt(b),B,L,X,W);throw B=String(b),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return et}function z(b,B,L){if(b==null)return b;var X=[],W=0;return Ct(b,X,"","",function(pt){return B.call(L,pt,W++)}),X}function P(b){if(b._status===-1){var B=b._result;B=B(),B.then(function(L){(b._status===0||b._status===-1)&&(b._status=1,b._result=L)},function(L){(b._status===0||b._status===-1)&&(b._status=2,b._result=L)}),b._status===-1&&(b._status=0,b._result=B)}if(b._status===1)return b._result.default;throw b._result}var tt=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function dt(){}return ot.Children={map:z,forEach:function(b,B,L){z(b,function(){B.apply(this,arguments)},L)},count:function(b){var B=0;return z(b,function(){B++}),B},toArray:function(b){return z(b,function(B){return B})||[]},only:function(b){if(!H(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},ot.Component=V,ot.Fragment=f,ot.Profiler=p,ot.PureComponent=rt,ot.StrictMode=s,ot.Suspense=D,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,ot.__COMPILER_RUNTIME={__proto__:null,c:function(b){return h.H.useMemoCache(b)}},ot.cache=function(b){return function(){return b.apply(null,arguments)}},ot.cloneElement=function(b,B,L){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var X=Y({},b.props),W=b.key,pt=void 0;if(B!=null)for(et in B.ref!==void 0&&(pt=void 0),B.key!==void 0&&(W=""+B.key),B)!g.call(B,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&B.ref===void 0||(X[et]=B[et]);var et=arguments.length-2;if(et===1)X.children=L;else if(1<et){for(var Kt=Array(et),xt=0;xt<et;xt++)Kt[xt]=arguments[xt+2];X.children=Kt}return x(b.type,W,void 0,void 0,pt,X)},ot.createContext=function(b){return b={$$typeof:_,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:y,_context:b},b},ot.createElement=function(b,B,L){var X,W={},pt=null;if(B!=null)for(X in B.key!==void 0&&(pt=""+B.key),B)g.call(B,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(W[X]=B[X]);var et=arguments.length-2;if(et===1)W.children=L;else if(1<et){for(var Kt=Array(et),xt=0;xt<et;xt++)Kt[xt]=arguments[xt+2];W.children=Kt}if(b&&b.defaultProps)for(X in et=b.defaultProps,et)W[X]===void 0&&(W[X]=et[X]);return x(b,pt,void 0,void 0,null,W)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(b){return{$$typeof:G,render:b}},ot.isValidElement=H,ot.lazy=function(b){return{$$typeof:N,_payload:{_status:-1,_result:b},_init:P}},ot.memo=function(b,B){return{$$typeof:w,type:b,compare:B===void 0?null:B}},ot.startTransition=function(b){var B=h.T,L={};h.T=L;try{var X=b(),W=h.S;W!==null&&W(L,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(dt,tt)}catch(pt){tt(pt)}finally{h.T=B}},ot.unstable_useCacheRefresh=function(){return h.H.useCacheRefresh()},ot.use=function(b){return h.H.use(b)},ot.useActionState=function(b,B,L){return h.H.useActionState(b,B,L)},ot.useCallback=function(b,B){return h.H.useCallback(b,B)},ot.useContext=function(b){return h.H.useContext(b)},ot.useDebugValue=function(){},ot.useDeferredValue=function(b,B){return h.H.useDeferredValue(b,B)},ot.useEffect=function(b,B,L){var X=h.H;if(typeof L=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return X.useEffect(b,B)},ot.useId=function(){return h.H.useId()},ot.useImperativeHandle=function(b,B,L){return h.H.useImperativeHandle(b,B,L)},ot.useInsertionEffect=function(b,B){return h.H.useInsertionEffect(b,B)},ot.useLayoutEffect=function(b,B){return h.H.useLayoutEffect(b,B)},ot.useMemo=function(b,B){return h.H.useMemo(b,B)},ot.useOptimistic=function(b,B){return h.H.useOptimistic(b,B)},ot.useReducer=function(b,B,L){return h.H.useReducer(b,B,L)},ot.useRef=function(b){return h.H.useRef(b)},ot.useState=function(b){return h.H.useState(b)},ot.useSyncExternalStore=function(b,B,L){return h.H.useSyncExternalStore(b,B,L)},ot.useTransition=function(){return h.H.useTransition()},ot.version="19.1.0",ot}var Md;function Es(){return Md||(Md=1,ls.exports=rm()),ls.exports}var Tt=Es();const Pt=am(Tt);var rs={exports:{}},el={},os={exports:{}},us={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function om(){return zd||(zd=1,function(r){function o(z,P){var tt=z.length;z.push(P);t:for(;0<tt;){var dt=tt-1>>>1,b=z[dt];if(0<p(b,P))z[dt]=P,z[tt]=b,tt=dt;else break t}}function f(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var P=z[0],tt=z.pop();if(tt!==P){z[0]=tt;t:for(var dt=0,b=z.length,B=b>>>1;dt<B;){var L=2*(dt+1)-1,X=z[L],W=L+1,pt=z[W];if(0>p(X,tt))W<b&&0>p(pt,X)?(z[dt]=pt,z[W]=tt,dt=W):(z[dt]=X,z[L]=tt,dt=L);else if(W<b&&0>p(pt,tt))z[dt]=pt,z[W]=tt,dt=W;else break t}}return P}function p(z,P){var tt=z.sortIndex-P.sortIndex;return tt!==0?tt:z.id-P.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var y=performance;r.unstable_now=function(){return y.now()}}else{var _=Date,G=_.now();r.unstable_now=function(){return _.now()-G}}var D=[],w=[],N=1,j=null,Z=3,$=!1,Y=!1,q=!1,V=!1,ut=typeof setTimeout=="function"?setTimeout:null,rt=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function u(z){for(var P=f(w);P!==null;){if(P.callback===null)s(w);else if(P.startTime<=z)s(w),P.sortIndex=P.expirationTime,o(D,P);else break;P=f(w)}}function h(z){if(q=!1,u(z),!Y)if(f(D)!==null)Y=!0,g||(g=!0,st());else{var P=f(w);P!==null&&Ct(h,P.startTime-z)}}var g=!1,x=-1,M=5,H=-1;function F(){return V?!0:!(r.unstable_now()-H<M)}function I(){if(V=!1,g){var z=r.unstable_now();H=z;var P=!0;try{t:{Y=!1,q&&(q=!1,rt(x),x=-1),$=!0;var tt=Z;try{n:{for(u(z),j=f(D);j!==null&&!(j.expirationTime>z&&F());){var dt=j.callback;if(typeof dt=="function"){j.callback=null,Z=j.priorityLevel;var b=dt(j.expirationTime<=z);if(z=r.unstable_now(),typeof b=="function"){j.callback=b,u(z),P=!0;break n}j===f(D)&&s(D),u(z)}else s(D);j=f(D)}if(j!==null)P=!0;else{var B=f(w);B!==null&&Ct(h,B.startTime-z),P=!1}}break t}finally{j=null,Z=tt,$=!1}P=void 0}}finally{P?st():g=!1}}}var st;if(typeof C=="function")st=function(){C(I)};else if(typeof MessageChannel<"u"){var Mt=new MessageChannel,Yt=Mt.port2;Mt.port1.onmessage=I,st=function(){Yt.postMessage(null)}}else st=function(){ut(I,0)};function Ct(z,P){x=ut(function(){z(r.unstable_now())},P)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return Z},r.unstable_next=function(z){switch(Z){case 1:case 2:case 3:var P=3;break;default:P=Z}var tt=Z;Z=P;try{return z()}finally{Z=tt}},r.unstable_requestPaint=function(){V=!0},r.unstable_runWithPriority=function(z,P){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var tt=Z;Z=z;try{return P()}finally{Z=tt}},r.unstable_scheduleCallback=function(z,P,tt){var dt=r.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?dt+tt:dt):tt=dt,z){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=tt+b,z={id:N++,callback:P,priorityLevel:z,startTime:tt,expirationTime:b,sortIndex:-1},tt>dt?(z.sortIndex=tt,o(w,z),f(D)===null&&z===f(w)&&(q?(rt(x),x=-1):q=!0,Ct(h,tt-dt))):(z.sortIndex=b,o(D,z),Y||$||(Y=!0,g||(g=!0,st()))),z},r.unstable_shouldYield=F,r.unstable_wrapCallback=function(z){var P=Z;return function(){var tt=Z;Z=P;try{return z.apply(this,arguments)}finally{Z=tt}}}}(us)),us}var Rd;function um(){return Rd||(Rd=1,os.exports=om()),os.exports}var ss={exports:{}},on={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd;function sm(){if(Cd)return on;Cd=1;var r=Es();function o(D){var w="https://react.dev/errors/"+D;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)w+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+D+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var s={d:{f,r:function(){throw Error(o(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},p=Symbol.for("react.portal");function y(D,w,N){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:j==null?null:""+j,children:D,containerInfo:w,implementation:N}}var _=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function G(D,w){if(D==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return on.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,on.createPortal=function(D,w){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(o(299));return y(D,w,null,N)},on.flushSync=function(D){var w=_.T,N=s.p;try{if(_.T=null,s.p=2,D)return D()}finally{_.T=w,s.p=N,s.d.f()}},on.preconnect=function(D,w){typeof D=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,s.d.C(D,w))},on.prefetchDNS=function(D){typeof D=="string"&&s.d.D(D)},on.preinit=function(D,w){if(typeof D=="string"&&w&&typeof w.as=="string"){var N=w.as,j=G(N,w.crossOrigin),Z=typeof w.integrity=="string"?w.integrity:void 0,$=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;N==="style"?s.d.S(D,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:j,integrity:Z,fetchPriority:$}):N==="script"&&s.d.X(D,{crossOrigin:j,integrity:Z,fetchPriority:$,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},on.preinitModule=function(D,w){if(typeof D=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var N=G(w.as,w.crossOrigin);s.d.M(D,{crossOrigin:N,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0})}}else w==null&&s.d.M(D)},on.preload=function(D,w){if(typeof D=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var N=w.as,j=G(N,w.crossOrigin);s.d.L(D,N,{crossOrigin:j,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},on.preloadModule=function(D,w){if(typeof D=="string")if(w){var N=G(w.as,w.crossOrigin);s.d.m(D,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:N,integrity:typeof w.integrity=="string"?w.integrity:void 0})}else s.d.m(D)},on.requestFormReset=function(D){s.d.r(D)},on.unstable_batchedUpdates=function(D,w){return D(w)},on.useFormState=function(D,w,N){return _.H.useFormState(D,w,N)},on.useFormStatus=function(){return _.H.useHostTransitionStatus()},on.version="19.1.0",on}var kd;function cm(){if(kd)return ss.exports;kd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),ss.exports=sm(),ss.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd;function fm(){if(Hd)return el;Hd=1;var r=um(),o=Es(),f=cm();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)n+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function y(t){var n=t,e=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(e=n.return),t=n.return;while(t)}return n.tag===3?e:null}function _(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function G(t){if(y(t)!==t)throw Error(s(188))}function D(t){var n=t.alternate;if(!n){if(n=y(t),n===null)throw Error(s(188));return n!==t?null:t}for(var e=t,a=n;;){var i=e.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){e=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===e)return G(i),t;if(l===a)return G(i),n;l=l.sibling}throw Error(s(188))}if(e.return!==a.return)e=i,a=l;else{for(var c=!1,d=i.child;d;){if(d===e){c=!0,e=i,a=l;break}if(d===a){c=!0,a=i,e=l;break}d=d.sibling}if(!c){for(d=l.child;d;){if(d===e){c=!0,e=l,a=i;break}if(d===a){c=!0,a=l,e=i;break}d=d.sibling}if(!c)throw Error(s(189))}}if(e.alternate!==a)throw Error(s(190))}if(e.tag!==3)throw Error(s(188));return e.stateNode.current===e?t:n}function w(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=w(t),n!==null)return n;t=t.sibling}return null}var N=Object.assign,j=Symbol.for("react.element"),Z=Symbol.for("react.transitional.element"),$=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),ut=Symbol.for("react.provider"),rt=Symbol.for("react.consumer"),C=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),F=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function st(t){return t===null||typeof t!="object"?null:(t=I&&t[I]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Symbol.for("react.client.reference");function Yt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Mt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Y:return"Fragment";case V:return"Profiler";case q:return"StrictMode";case h:return"Suspense";case g:return"SuspenseList";case H:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case $:return"Portal";case C:return(t.displayName||"Context")+".Provider";case rt:return(t._context.displayName||"Context")+".Consumer";case u:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case x:return n=t.displayName||null,n!==null?n:Yt(t.type)||"Memo";case M:n=t._payload,t=t._init;try{return Yt(t(n))}catch{}}return null}var Ct=Array.isArray,z=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},dt=[],b=-1;function B(t){return{current:t}}function L(t){0>b||(t.current=dt[b],dt[b]=null,b--)}function X(t,n){b++,dt[b]=t.current,t.current=n}var W=B(null),pt=B(null),et=B(null),Kt=B(null);function xt(t,n){switch(X(et,n),X(pt,t),X(W,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?td(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=td(n),t=nd(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}L(W),X(W,t)}function an(){L(W),L(pt),L(et)}function je(t){t.memoizedState!==null&&X(Kt,t);var n=W.current,e=nd(n,t.type);n!==e&&(X(pt,t),X(W,e))}function Wn(t){pt.current===t&&(L(W),L(pt)),Kt.current===t&&(L(Kt),$i._currentValue=tt)}var En=Object.prototype.hasOwnProperty,Xr=r.unstable_scheduleCallback,Zr=r.unstable_cancelCallback,N0=r.unstable_shouldYield,U0=r.unstable_requestPaint,Pn=r.unstable_now,q0=r.unstable_getCurrentPriorityLevel,ks=r.unstable_ImmediatePriority,Hs=r.unstable_UserBlockingPriority,cl=r.unstable_NormalPriority,B0=r.unstable_LowPriority,Ns=r.unstable_IdlePriority,G0=r.log,Y0=r.unstable_setDisableYieldValue,ii=null,gn=null;function ge(t){if(typeof G0=="function"&&Y0(t),gn&&typeof gn.setStrictMode=="function")try{gn.setStrictMode(ii,t)}catch{}}var mn=Math.clz32?Math.clz32:P0,j0=Math.log,L0=Math.LN2;function P0(t){return t>>>=0,t===0?32:31-(j0(t)/L0|0)|0}var fl=256,hl=4194304;function Le(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function dl(t,n,e){var a=t.pendingLanes;if(a===0)return 0;var i=0,l=t.suspendedLanes,c=t.pingedLanes;t=t.warmLanes;var d=a&134217727;return d!==0?(a=d&~l,a!==0?i=Le(a):(c&=d,c!==0?i=Le(c):e||(e=d&~t,e!==0&&(i=Le(e))))):(d=a&~l,d!==0?i=Le(d):c!==0?i=Le(c):e||(e=a&~t,e!==0&&(i=Le(e)))),i===0?0:n!==0&&n!==i&&(n&l)===0&&(l=i&-i,e=n&-n,l>=e||l===32&&(e&4194048)!==0)?n:i}function li(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function X0(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Us(){var t=fl;return fl<<=1,(fl&4194048)===0&&(fl=256),t}function qs(){var t=hl;return hl<<=1,(hl&62914560)===0&&(hl=4194304),t}function Qr(t){for(var n=[],e=0;31>e;e++)n.push(t);return n}function ri(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Z0(t,n,e,a,i,l){var c=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var d=t.entanglements,m=t.expirationTimes,T=t.hiddenUpdates;for(e=c&~e;0<e;){var R=31-mn(e),U=1<<R;d[R]=0,m[R]=-1;var A=T[R];if(A!==null)for(T[R]=null,R=0;R<A.length;R++){var E=A[R];E!==null&&(E.lane&=-536870913)}e&=~U}a!==0&&Bs(t,a,0),l!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=l&~(c&~n))}function Bs(t,n,e){t.pendingLanes|=n,t.suspendedLanes&=~n;var a=31-mn(n);t.entangledLanes|=n,t.entanglements[a]=t.entanglements[a]|1073741824|e&4194090}function Gs(t,n){var e=t.entangledLanes|=n;for(t=t.entanglements;e;){var a=31-mn(e),i=1<<a;i&n|t[a]&n&&(t[a]|=n),e&=~i}}function Vr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Kr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ys(){var t=P.p;return t!==0?t:(t=window.event,t===void 0?32:xd(t.type))}function Q0(t,n){var e=P.p;try{return P.p=t,n()}finally{P.p=e}}var me=Math.random().toString(36).slice(2),ln="__reactFiber$"+me,sn="__reactProps$"+me,ca="__reactContainer$"+me,Jr="__reactEvents$"+me,V0="__reactListeners$"+me,K0="__reactHandles$"+me,js="__reactResources$"+me,oi="__reactMarker$"+me;function $r(t){delete t[ln],delete t[sn],delete t[Jr],delete t[V0],delete t[K0]}function fa(t){var n=t[ln];if(n)return n;for(var e=t.parentNode;e;){if(n=e[ca]||e[ln]){if(e=n.alternate,n.child!==null||e!==null&&e.child!==null)for(t=ld(t);t!==null;){if(e=t[ln])return e;t=ld(t)}return n}t=e,e=t.parentNode}return null}function ha(t){if(t=t[ln]||t[ca]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function ui(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function da(t){var n=t[js];return n||(n=t[js]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Jt(t){t[oi]=!0}var Ls=new Set,Ps={};function Pe(t,n){pa(t,n),pa(t+"Capture",n)}function pa(t,n){for(Ps[t]=n,t=0;t<n.length;t++)Ls.add(n[t])}var J0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xs={},Zs={};function $0(t){return En.call(Zs,t)?!0:En.call(Xs,t)?!1:J0.test(t)?Zs[t]=!0:(Xs[t]=!0,!1)}function pl(t,n,e){if($0(n))if(e===null)t.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+e)}}function gl(t,n,e){if(e===null)t.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+e)}}function Fn(t,n,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(n,e,""+a)}}var Wr,Qs;function ga(t){if(Wr===void 0)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);Wr=n&&n[1]||"",Qs=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wr+t+Qs}var Fr=!1;function Ir(t,n){if(!t||Fr)return"";Fr=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(E){var A=E}Reflect.construct(t,[],U)}else{try{U.call()}catch(E){A=E}t.call(U.prototype)}}else{try{throw Error()}catch(E){A=E}(U=t())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(E){if(E&&A&&typeof E.stack=="string")return[E.stack,A.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),c=l[0],d=l[1];if(c&&d){var m=c.split(`
`),T=d.split(`
`);for(i=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;if(a===m.length||i===T.length)for(a=m.length-1,i=T.length-1;1<=a&&0<=i&&m[a]!==T[i];)i--;for(;1<=a&&0<=i;a--,i--)if(m[a]!==T[i]){if(a!==1||i!==1)do if(a--,i--,0>i||m[a]!==T[i]){var R=`
`+m[a].replace(" at new "," at ");return t.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",t.displayName)),R}while(1<=a&&0<=i);break}}}finally{Fr=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?ga(e):""}function W0(t){switch(t.tag){case 26:case 27:case 5:return ga(t.type);case 16:return ga("Lazy");case 13:return ga("Suspense");case 19:return ga("SuspenseList");case 0:case 15:return Ir(t.type,!1);case 11:return Ir(t.type.render,!1);case 1:return Ir(t.type,!0);case 31:return ga("Activity");default:return""}}function Vs(t){try{var n="";do n+=W0(t),t=t.return;while(t);return n}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}function _n(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ks(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function F0(t){var n=Ks(t)?"checked":"value",e=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),a=""+t[n];if(!t.hasOwnProperty(n)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var i=e.get,l=e.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return i.call(this)},set:function(c){a=""+c,l.call(this,c)}}),Object.defineProperty(t,n,{enumerable:e.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ml(t){t._valueTracker||(t._valueTracker=F0(t))}function Js(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var e=n.getValue(),a="";return t&&(a=Ks(t)?t.checked?"true":"false":t.value),t=a,t!==e?(n.setValue(t),!0):!1}function bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var I0=/[\n"\\]/g;function Dn(t){return t.replace(I0,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function to(t,n,e,a,i,l,c,d){t.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.type=c:t.removeAttribute("type"),n!=null?c==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+_n(n)):t.value!==""+_n(n)&&(t.value=""+_n(n)):c!=="submit"&&c!=="reset"||t.removeAttribute("value"),n!=null?no(t,c,_n(n)):e!=null?no(t,c,_n(e)):a!=null&&t.removeAttribute("value"),i==null&&l!=null&&(t.defaultChecked=!!l),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.name=""+_n(d):t.removeAttribute("name")}function $s(t,n,e,a,i,l,c,d){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(t.type=l),n!=null||e!=null){if(!(l!=="submit"&&l!=="reset"||n!=null))return;e=e!=null?""+_n(e):"",n=n!=null?""+_n(n):e,d||n===t.value||(t.value=n),t.defaultValue=n}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=d?t.checked:!!a,t.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.name=c)}function no(t,n,e){n==="number"&&bl(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function ma(t,n,e,a){if(t=t.options,n){n={};for(var i=0;i<e.length;i++)n["$"+e[i]]=!0;for(e=0;e<t.length;e++)i=n.hasOwnProperty("$"+t[e].value),t[e].selected!==i&&(t[e].selected=i),i&&a&&(t[e].defaultSelected=!0)}else{for(e=""+_n(e),n=null,i=0;i<t.length;i++){if(t[i].value===e){t[i].selected=!0,a&&(t[i].defaultSelected=!0);return}n!==null||t[i].disabled||(n=t[i])}n!==null&&(n.selected=!0)}}function Ws(t,n,e){if(n!=null&&(n=""+_n(n),n!==t.value&&(t.value=n),e==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=e!=null?""+_n(e):""}function Fs(t,n,e,a){if(n==null){if(a!=null){if(e!=null)throw Error(s(92));if(Ct(a)){if(1<a.length)throw Error(s(93));a=a[0]}e=a}e==null&&(e=""),n=e}e=_n(n),t.defaultValue=e,a=t.textContent,a===e&&a!==""&&a!==null&&(t.value=a)}function ba(t,n){if(n){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=n;return}}t.textContent=n}var tp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Is(t,n,e){var a=n.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":a?t.setProperty(n,e):typeof e!="number"||e===0||tp.has(n)?n==="float"?t.cssFloat=e:t[n]=(""+e).trim():t[n]=e+"px"}function tc(t,n,e){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var i in n)a=n[i],n.hasOwnProperty(i)&&e[i]!==a&&Is(t,i,a)}else for(var l in n)n.hasOwnProperty(l)&&Is(t,l,n[l])}function eo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var np=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ep=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vl(t){return ep.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var ao=null;function io(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var va=null,ya=null;function nc(t){var n=ha(t);if(n&&(t=n.stateNode)){var e=t[sn]||null;t:switch(t=n.stateNode,n.type){case"input":if(to(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),n=e.name,e.type==="radio"&&n!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+Dn(""+n)+'"][type="radio"]'),n=0;n<e.length;n++){var a=e[n];if(a!==t&&a.form===t.form){var i=a[sn]||null;if(!i)throw Error(s(90));to(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(n=0;n<e.length;n++)a=e[n],a.form===t.form&&Js(a)}break t;case"textarea":Ws(t,e.value,e.defaultValue);break t;case"select":n=e.value,n!=null&&ma(t,!!e.multiple,n,!1)}}}var lo=!1;function ec(t,n,e){if(lo)return t(n,e);lo=!0;try{var a=t(n);return a}finally{if(lo=!1,(va!==null||ya!==null)&&(ar(),va&&(n=va,t=ya,ya=va=null,nc(n),t)))for(n=0;n<t.length;n++)nc(t[n])}}function si(t,n){var e=t.stateNode;if(e===null)return null;var a=e[sn]||null;if(a===null)return null;e=a[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(s(231,n,typeof e));return e}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ro=!1;if(In)try{var ci={};Object.defineProperty(ci,"passive",{get:function(){ro=!0}}),window.addEventListener("test",ci,ci),window.removeEventListener("test",ci,ci)}catch{ro=!1}var be=null,oo=null,yl=null;function ac(){if(yl)return yl;var t,n=oo,e=n.length,a,i="value"in be?be.value:be.textContent,l=i.length;for(t=0;t<e&&n[t]===i[t];t++);var c=e-t;for(a=1;a<=c&&n[e-a]===i[l-a];a++);return yl=i.slice(t,1<a?1-a:void 0)}function xl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Sl(){return!0}function ic(){return!1}function cn(t){function n(e,a,i,l,c){this._reactName=e,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=c,this.currentTarget=null;for(var d in t)t.hasOwnProperty(d)&&(e=t[d],this[d]=e?e(l):l[d]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Sl:ic,this.isPropagationStopped=ic,this}return N(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),n}var Xe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wl=cn(Xe),fi=N({},Xe,{view:0,detail:0}),ap=cn(fi),uo,so,hi,Ol=N({},fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hi&&(hi&&t.type==="mousemove"?(uo=t.screenX-hi.screenX,so=t.screenY-hi.screenY):so=uo=0,hi=t),uo)},movementY:function(t){return"movementY"in t?t.movementY:so}}),lc=cn(Ol),ip=N({},Ol,{dataTransfer:0}),lp=cn(ip),rp=N({},fi,{relatedTarget:0}),co=cn(rp),op=N({},Xe,{animationName:0,elapsedTime:0,pseudoElement:0}),up=cn(op),sp=N({},Xe,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cp=cn(sp),fp=N({},Xe,{data:0}),rc=cn(fp),hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gp(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=pp[t])?!!n[t]:!1}function fo(){return gp}var mp=N({},fi,{key:function(t){if(t.key){var n=hp[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fo,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bp=cn(mp),vp=N({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oc=cn(vp),yp=N({},fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fo}),xp=cn(yp),Sp=N({},Xe,{propertyName:0,elapsedTime:0,pseudoElement:0}),wp=cn(Sp),Op=N({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Tp=cn(Op),Ap=N({},Xe,{newState:0,oldState:0}),Ep=cn(Ap),_p=[9,13,27,32],ho=In&&"CompositionEvent"in window,di=null;In&&"documentMode"in document&&(di=document.documentMode);var Dp=In&&"TextEvent"in window&&!di,uc=In&&(!ho||di&&8<di&&11>=di),sc=" ",cc=!1;function fc(t,n){switch(t){case"keyup":return _p.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xa=!1;function Mp(t,n){switch(t){case"compositionend":return hc(n);case"keypress":return n.which!==32?null:(cc=!0,sc);case"textInput":return t=n.data,t===sc&&cc?null:t;default:return null}}function zp(t,n){if(xa)return t==="compositionend"||!ho&&fc(t,n)?(t=ac(),yl=oo=be=null,xa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return uc&&n.locale!=="ko"?null:n.data;default:return null}}var Rp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Rp[t.type]:n==="textarea"}function pc(t,n,e,a){va?ya?ya.push(a):ya=[a]:va=a,n=sr(n,"onChange"),0<n.length&&(e=new wl("onChange","change",null,e,a),t.push({event:e,listeners:n}))}var pi=null,gi=null;function Cp(t){Jh(t,0)}function Tl(t){var n=ui(t);if(Js(n))return t}function gc(t,n){if(t==="change")return n}var mc=!1;if(In){var po;if(In){var go="oninput"in document;if(!go){var bc=document.createElement("div");bc.setAttribute("oninput","return;"),go=typeof bc.oninput=="function"}po=go}else po=!1;mc=po&&(!document.documentMode||9<document.documentMode)}function vc(){pi&&(pi.detachEvent("onpropertychange",yc),gi=pi=null)}function yc(t){if(t.propertyName==="value"&&Tl(gi)){var n=[];pc(n,gi,t,io(t)),ec(Cp,n)}}function kp(t,n,e){t==="focusin"?(vc(),pi=n,gi=e,pi.attachEvent("onpropertychange",yc)):t==="focusout"&&vc()}function Hp(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tl(gi)}function Np(t,n){if(t==="click")return Tl(n)}function Up(t,n){if(t==="input"||t==="change")return Tl(n)}function qp(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var bn=typeof Object.is=="function"?Object.is:qp;function mi(t,n){if(bn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var e=Object.keys(t),a=Object.keys(n);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var i=e[a];if(!En.call(n,i)||!bn(t[i],n[i]))return!1}return!0}function xc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sc(t,n){var e=xc(t);t=0;for(var a;e;){if(e.nodeType===3){if(a=t+e.textContent.length,t<=n&&a>=n)return{node:e,offset:n-t};t=a}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=xc(e)}}function wc(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?wc(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Oc(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=bl(t.document);n instanceof t.HTMLIFrameElement;){try{var e=typeof n.contentWindow.location.href=="string"}catch{e=!1}if(e)t=n.contentWindow;else break;n=bl(t.document)}return n}function mo(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Bp=In&&"documentMode"in document&&11>=document.documentMode,Sa=null,bo=null,bi=null,vo=!1;function Tc(t,n,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;vo||Sa==null||Sa!==bl(a)||(a=Sa,"selectionStart"in a&&mo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),bi&&mi(bi,a)||(bi=a,a=sr(bo,"onSelect"),0<a.length&&(n=new wl("onSelect","select",null,n,e),t.push({event:n,listeners:a}),n.target=Sa)))}function Ze(t,n){var e={};return e[t.toLowerCase()]=n.toLowerCase(),e["Webkit"+t]="webkit"+n,e["Moz"+t]="moz"+n,e}var wa={animationend:Ze("Animation","AnimationEnd"),animationiteration:Ze("Animation","AnimationIteration"),animationstart:Ze("Animation","AnimationStart"),transitionrun:Ze("Transition","TransitionRun"),transitionstart:Ze("Transition","TransitionStart"),transitioncancel:Ze("Transition","TransitionCancel"),transitionend:Ze("Transition","TransitionEnd")},yo={},Ac={};In&&(Ac=document.createElement("div").style,"AnimationEvent"in window||(delete wa.animationend.animation,delete wa.animationiteration.animation,delete wa.animationstart.animation),"TransitionEvent"in window||delete wa.transitionend.transition);function Qe(t){if(yo[t])return yo[t];if(!wa[t])return t;var n=wa[t],e;for(e in n)if(n.hasOwnProperty(e)&&e in Ac)return yo[t]=n[e];return t}var Ec=Qe("animationend"),_c=Qe("animationiteration"),Dc=Qe("animationstart"),Gp=Qe("transitionrun"),Yp=Qe("transitionstart"),jp=Qe("transitioncancel"),Mc=Qe("transitionend"),zc=new Map,xo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xo.push("scrollEnd");function qn(t,n){zc.set(t,n),Pe(n,[t])}var Rc=new WeakMap;function Mn(t,n){if(typeof t=="object"&&t!==null){var e=Rc.get(t);return e!==void 0?e:(n={value:t,source:n,stack:Vs(n)},Rc.set(t,n),n)}return{value:t,source:n,stack:Vs(n)}}var zn=[],Oa=0,So=0;function Al(){for(var t=Oa,n=So=Oa=0;n<t;){var e=zn[n];zn[n++]=null;var a=zn[n];zn[n++]=null;var i=zn[n];zn[n++]=null;var l=zn[n];if(zn[n++]=null,a!==null&&i!==null){var c=a.pending;c===null?i.next=i:(i.next=c.next,c.next=i),a.pending=i}l!==0&&Cc(e,i,l)}}function El(t,n,e,a){zn[Oa++]=t,zn[Oa++]=n,zn[Oa++]=e,zn[Oa++]=a,So|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function wo(t,n,e,a){return El(t,n,e,a),_l(t)}function Ta(t,n){return El(t,null,null,n),_l(t)}function Cc(t,n,e){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e);for(var i=!1,l=t.return;l!==null;)l.childLanes|=e,a=l.alternate,a!==null&&(a.childLanes|=e),l.tag===22&&(t=l.stateNode,t===null||t._visibility&1||(i=!0)),t=l,l=l.return;return t.tag===3?(l=t.stateNode,i&&n!==null&&(i=31-mn(e),t=l.hiddenUpdates,a=t[i],a===null?t[i]=[n]:a.push(n),n.lane=e|536870912),l):null}function _l(t){if(50<Li)throw Li=0,Du=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Aa={};function Lp(t,n,e,a){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(t,n,e,a){return new Lp(t,n,e,a)}function Oo(t){return t=t.prototype,!(!t||!t.isReactComponent)}function te(t,n){var e=t.alternate;return e===null?(e=vn(t.tag,n,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=n,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&65011712,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function kc(t,n){t.flags&=65011714;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Dl(t,n,e,a,i,l){var c=0;if(a=t,typeof t=="function")Oo(t)&&(c=1);else if(typeof t=="string")c=Xg(t,e,W.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case H:return t=vn(31,e,n,i),t.elementType=H,t.lanes=l,t;case Y:return Ve(e.children,i,l,n);case q:c=8,i|=24;break;case V:return t=vn(12,e,n,i|2),t.elementType=V,t.lanes=l,t;case h:return t=vn(13,e,n,i),t.elementType=h,t.lanes=l,t;case g:return t=vn(19,e,n,i),t.elementType=g,t.lanes=l,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ut:case C:c=10;break t;case rt:c=9;break t;case u:c=11;break t;case x:c=14;break t;case M:c=16,a=null;break t}c=29,e=Error(s(130,t===null?"null":typeof t,"")),a=null}return n=vn(c,e,n,i),n.elementType=t,n.type=a,n.lanes=l,n}function Ve(t,n,e,a){return t=vn(7,t,a,n),t.lanes=e,t}function To(t,n,e){return t=vn(6,t,null,n),t.lanes=e,t}function Ao(t,n,e){return n=vn(4,t.children!==null?t.children:[],t.key,n),n.lanes=e,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ea=[],_a=0,Ml=null,zl=0,Rn=[],Cn=0,Ke=null,ne=1,ee="";function Je(t,n){Ea[_a++]=zl,Ea[_a++]=Ml,Ml=t,zl=n}function Hc(t,n,e){Rn[Cn++]=ne,Rn[Cn++]=ee,Rn[Cn++]=Ke,Ke=t;var a=ne;t=ee;var i=32-mn(a)-1;a&=~(1<<i),e+=1;var l=32-mn(n)+i;if(30<l){var c=i-i%5;l=(a&(1<<c)-1).toString(32),a>>=c,i-=c,ne=1<<32-mn(n)+i|e<<i|a,ee=l+t}else ne=1<<l|e<<i|a,ee=t}function Eo(t){t.return!==null&&(Je(t,1),Hc(t,1,0))}function _o(t){for(;t===Ml;)Ml=Ea[--_a],Ea[_a]=null,zl=Ea[--_a],Ea[_a]=null;for(;t===Ke;)Ke=Rn[--Cn],Rn[Cn]=null,ee=Rn[--Cn],Rn[Cn]=null,ne=Rn[--Cn],Rn[Cn]=null}var un=null,Ut=null,yt=!1,$e=null,Xn=!1,Do=Error(s(519));function We(t){var n=Error(s(418,""));throw xi(Mn(n,t)),Do}function Nc(t){var n=t.stateNode,e=t.type,a=t.memoizedProps;switch(n[ln]=t,n[sn]=a,e){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(e=0;e<Xi.length;e++)mt(Xi[e],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),$s(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),ml(n);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),Fs(n,a.value,a.defaultValue,a.children),ml(n)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||n.textContent===""+e||a.suppressHydrationWarning===!0||Ih(n.textContent,e)?(a.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),a.onScroll!=null&&mt("scroll",n),a.onScrollEnd!=null&&mt("scrollend",n),a.onClick!=null&&(n.onclick=cr),n=!0):n=!1,n||We(t)}function Uc(t){for(un=t.return;un;)switch(un.tag){case 5:case 13:Xn=!1;return;case 27:case 3:Xn=!0;return;default:un=un.return}}function vi(t){if(t!==un)return!1;if(!yt)return Uc(t),yt=!0,!1;var n=t.tag,e;if((e=n!==3&&n!==27)&&((e=n===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||Xu(t.type,t.memoizedProps)),e=!e),e&&Ut&&We(t),Uc(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(e=t.data,e==="/$"){if(n===0){Ut=Gn(t.nextSibling);break t}n--}else e!=="$"&&e!=="$!"&&e!=="$?"||n++;t=t.nextSibling}Ut=null}}else n===27?(n=Ut,ke(t.type)?(t=Ku,Ku=null,Ut=t):Ut=n):Ut=un?Gn(t.stateNode.nextSibling):null;return!0}function yi(){Ut=un=null,yt=!1}function qc(){var t=$e;return t!==null&&(dn===null?dn=t:dn.push.apply(dn,t),$e=null),t}function xi(t){$e===null?$e=[t]:$e.push(t)}var Mo=B(null),Fe=null,ae=null;function ve(t,n,e){X(Mo,n._currentValue),n._currentValue=e}function ie(t){t._currentValue=Mo.current,L(Mo)}function zo(t,n,e){for(;t!==null;){var a=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),t===e)break;t=t.return}}function Ro(t,n,e,a){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){var c=i.child;l=l.firstContext;t:for(;l!==null;){var d=l;l=i;for(var m=0;m<n.length;m++)if(d.context===n[m]){l.lanes|=e,d=l.alternate,d!==null&&(d.lanes|=e),zo(l.return,e,t),a||(c=null);break t}l=d.next}}else if(i.tag===18){if(c=i.return,c===null)throw Error(s(341));c.lanes|=e,l=c.alternate,l!==null&&(l.lanes|=e),zo(c,e,t),c=null}else c=i.child;if(c!==null)c.return=i;else for(c=i;c!==null;){if(c===t){c=null;break}if(i=c.sibling,i!==null){i.return=c.return,c=i;break}c=c.return}i=c}}function Si(t,n,e,a){t=null;for(var i=n,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var c=i.alternate;if(c===null)throw Error(s(387));if(c=c.memoizedProps,c!==null){var d=i.type;bn(i.pendingProps.value,c.value)||(t!==null?t.push(d):t=[d])}}else if(i===Kt.current){if(c=i.alternate,c===null)throw Error(s(387));c.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push($i):t=[$i])}i=i.return}t!==null&&Ro(n,t,e,a),n.flags|=262144}function Rl(t){for(t=t.firstContext;t!==null;){if(!bn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ie(t){Fe=t,ae=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function rn(t){return Bc(Fe,t)}function Cl(t,n){return Fe===null&&Ie(t),Bc(t,n)}function Bc(t,n){var e=n._currentValue;if(n={context:n,memoizedValue:e,next:null},ae===null){if(t===null)throw Error(s(308));ae=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ae=ae.next=n;return e}var Pp=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(e,a){t.push(a)}};this.abort=function(){n.aborted=!0,t.forEach(function(e){return e()})}},Xp=r.unstable_scheduleCallback,Zp=r.unstable_NormalPriority,Zt={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Co(){return{controller:new Pp,data:new Map,refCount:0}}function wi(t){t.refCount--,t.refCount===0&&Xp(Zp,function(){t.controller.abort()})}var Oi=null,ko=0,Da=0,Ma=null;function Qp(t,n){if(Oi===null){var e=Oi=[];ko=0,Da=Nu(),Ma={status:"pending",value:void 0,then:function(a){e.push(a)}}}return ko++,n.then(Gc,Gc),n}function Gc(){if(--ko===0&&Oi!==null){Ma!==null&&(Ma.status="fulfilled");var t=Oi;Oi=null,Da=0,Ma=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Vp(t,n){var e=[],a={status:"pending",value:null,reason:null,then:function(i){e.push(i)}};return t.then(function(){a.status="fulfilled",a.value=n;for(var i=0;i<e.length;i++)(0,e[i])(n)},function(i){for(a.status="rejected",a.reason=i,i=0;i<e.length;i++)(0,e[i])(void 0)}),a}var Yc=z.S;z.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Qp(t,n),Yc!==null&&Yc(t,n)};var ta=B(null);function Ho(){var t=ta.current;return t!==null?t:zt.pooledCache}function kl(t,n){n===null?X(ta,ta.current):X(ta,n.pool)}function jc(){var t=Ho();return t===null?null:{parent:Zt._currentValue,pool:t}}var Ti=Error(s(460)),Lc=Error(s(474)),Hl=Error(s(542)),No={then:function(){}};function Pc(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Nl(){}function Xc(t,n,e){switch(e=t[e],e===void 0?t.push(n):e!==n&&(n.then(Nl,Nl),n=e),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Qc(t),t;default:if(typeof n.status=="string")n.then(Nl,Nl);else{if(t=zt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(a){if(n.status==="pending"){var i=n;i.status="fulfilled",i.value=a}},function(a){if(n.status==="pending"){var i=n;i.status="rejected",i.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Qc(t),t}throw Ai=n,Ti}}var Ai=null;function Zc(){if(Ai===null)throw Error(s(459));var t=Ai;return Ai=null,t}function Qc(t){if(t===Ti||t===Hl)throw Error(s(483))}var ye=!1;function Uo(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qo(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function xe(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Se(t,n,e){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(wt&2)!==0){var i=a.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n,n=_l(t),Cc(t,null,e),n}return El(t,a,n,e),_l(t)}function Ei(t,n,e){if(n=n.updateQueue,n!==null&&(n=n.shared,(e&4194048)!==0)){var a=n.lanes;a&=t.pendingLanes,e|=a,n.lanes=e,Gs(t,e)}}function Bo(t,n){var e=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var i=null,l=null;if(e=e.firstBaseUpdate,e!==null){do{var c={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};l===null?i=l=c:l=l.next=c,e=e.next}while(e!==null);l===null?i=l=n:l=l.next=n}else i=l=n;e={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=n:t.next=n,e.lastBaseUpdate=n}var Go=!1;function _i(){if(Go){var t=Ma;if(t!==null)throw t}}function Di(t,n,e,a){Go=!1;var i=t.updateQueue;ye=!1;var l=i.firstBaseUpdate,c=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var m=d,T=m.next;m.next=null,c===null?l=T:c.next=T,c=m;var R=t.alternate;R!==null&&(R=R.updateQueue,d=R.lastBaseUpdate,d!==c&&(d===null?R.firstBaseUpdate=T:d.next=T,R.lastBaseUpdate=m))}if(l!==null){var U=i.baseState;c=0,R=T=m=null,d=l;do{var A=d.lane&-536870913,E=A!==d.lane;if(E?(bt&A)===A:(a&A)===A){A!==0&&A===Da&&(Go=!0),R!==null&&(R=R.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});t:{var lt=t,nt=d;A=n;var _t=e;switch(nt.tag){case 1:if(lt=nt.payload,typeof lt=="function"){U=lt.call(_t,U,A);break t}U=lt;break t;case 3:lt.flags=lt.flags&-65537|128;case 0:if(lt=nt.payload,A=typeof lt=="function"?lt.call(_t,U,A):lt,A==null)break t;U=N({},U,A);break t;case 2:ye=!0}}A=d.callback,A!==null&&(t.flags|=64,E&&(t.flags|=8192),E=i.callbacks,E===null?i.callbacks=[A]:E.push(A))}else E={lane:A,tag:d.tag,payload:d.payload,callback:d.callback,next:null},R===null?(T=R=E,m=U):R=R.next=E,c|=A;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;E=d,d=E.next,E.next=null,i.lastBaseUpdate=E,i.shared.pending=null}}while(!0);R===null&&(m=U),i.baseState=m,i.firstBaseUpdate=T,i.lastBaseUpdate=R,l===null&&(i.shared.lanes=0),Me|=c,t.lanes=c,t.memoizedState=U}}function Vc(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Kc(t,n){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)Vc(e[t],n)}var za=B(null),Ul=B(0);function Jc(t,n){t=fe,X(Ul,t),X(za,n),fe=t|n.baseLanes}function Yo(){X(Ul,fe),X(za,za.current)}function jo(){fe=Ul.current,L(za),L(Ul)}var we=0,ft=null,At=null,jt=null,ql=!1,Ra=!1,na=!1,Bl=0,Mi=0,Ca=null,Kp=0;function Bt(){throw Error(s(321))}function Lo(t,n){if(n===null)return!1;for(var e=0;e<n.length&&e<t.length;e++)if(!bn(t[e],n[e]))return!1;return!0}function Po(t,n,e,a,i,l){return we=l,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?kf:Hf,na=!1,l=e(a,i),na=!1,Ra&&(l=Wc(n,e,a,i)),$c(t),l}function $c(t){z.H=Xl;var n=At!==null&&At.next!==null;if(we=0,jt=At=ft=null,ql=!1,Mi=0,Ca=null,n)throw Error(s(300));t===null||$t||(t=t.dependencies,t!==null&&Rl(t)&&($t=!0))}function Wc(t,n,e,a){ft=t;var i=0;do{if(Ra&&(Ca=null),Mi=0,Ra=!1,25<=i)throw Error(s(301));if(i+=1,jt=At=null,t.updateQueue!=null){var l=t.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}z.H=ng,l=n(e,a)}while(Ra);return l}function Jp(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?zi(n):n,t=t.useState()[0],(At!==null?At.memoizedState:null)!==t&&(ft.flags|=1024),n}function Xo(){var t=Bl!==0;return Bl=0,t}function Zo(t,n,e){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~e}function Qo(t){if(ql){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ql=!1}we=0,jt=At=ft=null,Ra=!1,Mi=Bl=0,Ca=null}function fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?ft.memoizedState=jt=t:jt=jt.next=t,jt}function Lt(){if(At===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var n=jt===null?ft.memoizedState:jt.next;if(n!==null)jt=n,At=t;else{if(t===null)throw ft.alternate===null?Error(s(467)):Error(s(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},jt===null?ft.memoizedState=jt=t:jt=jt.next=t}return jt}function Vo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zi(t){var n=Mi;return Mi+=1,Ca===null&&(Ca=[]),t=Xc(Ca,t,n),n=ft,(jt===null?n.memoizedState:jt.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?kf:Hf),t}function Gl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return zi(t);if(t.$$typeof===C)return rn(t)}throw Error(s(438,String(t)))}function Ko(t){var n=null,e=ft.updateQueue;if(e!==null&&(n=e.memoCache),n==null){var a=ft.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(i){return i.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),e===null&&(e=Vo(),ft.updateQueue=e),e.memoCache=n,e=n.data[n.index],e===void 0)for(e=n.data[n.index]=Array(t),a=0;a<t;a++)e[a]=F;return n.index++,e}function le(t,n){return typeof n=="function"?n(t):n}function Yl(t){var n=Lt();return Jo(n,At,t)}function Jo(t,n,e){var a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var i=t.baseQueue,l=a.pending;if(l!==null){if(i!==null){var c=i.next;i.next=l.next,l.next=c}n.baseQueue=i=l,a.pending=null}if(l=t.baseState,i===null)t.memoizedState=l;else{n=i.next;var d=c=null,m=null,T=n,R=!1;do{var U=T.lane&-536870913;if(U!==T.lane?(bt&U)===U:(we&U)===U){var A=T.revertLane;if(A===0)m!==null&&(m=m.next={lane:0,revertLane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),U===Da&&(R=!0);else if((we&A)===A){T=T.next,A===Da&&(R=!0);continue}else U={lane:0,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},m===null?(d=m=U,c=l):m=m.next=U,ft.lanes|=A,Me|=A;U=T.action,na&&e(l,U),l=T.hasEagerState?T.eagerState:e(l,U)}else A={lane:U,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},m===null?(d=m=A,c=l):m=m.next=A,ft.lanes|=U,Me|=U;T=T.next}while(T!==null&&T!==n);if(m===null?c=l:m.next=d,!bn(l,t.memoizedState)&&($t=!0,R&&(e=Ma,e!==null)))throw e;t.memoizedState=l,t.baseState=c,t.baseQueue=m,a.lastRenderedState=l}return i===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function $o(t){var n=Lt(),e=n.queue;if(e===null)throw Error(s(311));e.lastRenderedReducer=t;var a=e.dispatch,i=e.pending,l=n.memoizedState;if(i!==null){e.pending=null;var c=i=i.next;do l=t(l,c.action),c=c.next;while(c!==i);bn(l,n.memoizedState)||($t=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),e.lastRenderedState=l}return[l,a]}function Fc(t,n,e){var a=ft,i=Lt(),l=yt;if(l){if(e===void 0)throw Error(s(407));e=e()}else e=n();var c=!bn((At||i).memoizedState,e);c&&(i.memoizedState=e,$t=!0),i=i.queue;var d=nf.bind(null,a,i,t);if(Ri(2048,8,d,[t]),i.getSnapshot!==n||c||jt!==null&&jt.memoizedState.tag&1){if(a.flags|=2048,ka(9,jl(),tf.bind(null,a,i,e,n),null),zt===null)throw Error(s(349));l||(we&124)!==0||Ic(a,n,e)}return e}function Ic(t,n,e){t.flags|=16384,t={getSnapshot:n,value:e},n=ft.updateQueue,n===null?(n=Vo(),ft.updateQueue=n,n.stores=[t]):(e=n.stores,e===null?n.stores=[t]:e.push(t))}function tf(t,n,e,a){n.value=e,n.getSnapshot=a,ef(n)&&af(t)}function nf(t,n,e){return e(function(){ef(n)&&af(t)})}function ef(t){var n=t.getSnapshot;t=t.value;try{var e=n();return!bn(t,e)}catch{return!0}}function af(t){var n=Ta(t,2);n!==null&&On(n,t,2)}function Wo(t){var n=fn();if(typeof t=="function"){var e=t;if(t=e(),na){ge(!0);try{e()}finally{ge(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:le,lastRenderedState:t},n}function lf(t,n,e,a){return t.baseState=e,Jo(t,At,typeof a=="function"?a:le)}function $p(t,n,e,a,i){if(Pl(t))throw Error(s(485));if(t=n.action,t!==null){var l={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){l.listeners.push(c)}};z.T!==null?e(!0):l.isTransition=!1,a(l),e=n.pending,e===null?(l.next=n.pending=l,rf(n,l)):(l.next=e.next,n.pending=e.next=l)}}function rf(t,n){var e=n.action,a=n.payload,i=t.state;if(n.isTransition){var l=z.T,c={};z.T=c;try{var d=e(i,a),m=z.S;m!==null&&m(c,d),of(t,n,d)}catch(T){Fo(t,n,T)}finally{z.T=l}}else try{l=e(i,a),of(t,n,l)}catch(T){Fo(t,n,T)}}function of(t,n,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){uf(t,n,a)},function(a){return Fo(t,n,a)}):uf(t,n,e)}function uf(t,n,e){n.status="fulfilled",n.value=e,sf(n),t.state=e,n=t.pending,n!==null&&(e=n.next,e===n?t.pending=null:(e=e.next,n.next=e,rf(t,e)))}function Fo(t,n,e){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=e,sf(n),n=n.next;while(n!==a)}t.action=null}function sf(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function cf(t,n){return n}function ff(t,n){if(yt){var e=zt.formState;if(e!==null){t:{var a=ft;if(yt){if(Ut){n:{for(var i=Ut,l=Xn;i.nodeType!==8;){if(!l){i=null;break n}if(i=Gn(i.nextSibling),i===null){i=null;break n}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){Ut=Gn(i.nextSibling),a=i.data==="F!";break t}}We(a)}a=!1}a&&(n=e[0])}}return e=fn(),e.memoizedState=e.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cf,lastRenderedState:n},e.queue=a,e=zf.bind(null,ft,a),a.dispatch=e,a=Wo(!1),l=au.bind(null,ft,!1,a.queue),a=fn(),i={state:n,dispatch:null,action:t,pending:null},a.queue=i,e=$p.bind(null,ft,i,l,e),i.dispatch=e,a.memoizedState=t,[n,e,!1]}function hf(t){var n=Lt();return df(n,At,t)}function df(t,n,e){if(n=Jo(t,n,cf)[0],t=Yl(le)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=zi(n)}catch(c){throw c===Ti?Hl:c}else a=n;n=Lt();var i=n.queue,l=i.dispatch;return e!==n.memoizedState&&(ft.flags|=2048,ka(9,jl(),Wp.bind(null,i,e),null)),[a,l,t]}function Wp(t,n){t.action=n}function pf(t){var n=Lt(),e=At;if(e!==null)return df(n,e,t);Lt(),n=n.memoizedState,e=Lt();var a=e.queue.dispatch;return e.memoizedState=t,[n,a,!1]}function ka(t,n,e,a){return t={tag:t,create:e,deps:a,inst:n,next:null},n=ft.updateQueue,n===null&&(n=Vo(),ft.updateQueue=n),e=n.lastEffect,e===null?n.lastEffect=t.next=t:(a=e.next,e.next=t,t.next=a,n.lastEffect=t),t}function jl(){return{destroy:void 0,resource:void 0}}function gf(){return Lt().memoizedState}function Ll(t,n,e,a){var i=fn();a=a===void 0?null:a,ft.flags|=t,i.memoizedState=ka(1|n,jl(),e,a)}function Ri(t,n,e,a){var i=Lt();a=a===void 0?null:a;var l=i.memoizedState.inst;At!==null&&a!==null&&Lo(a,At.memoizedState.deps)?i.memoizedState=ka(n,l,e,a):(ft.flags|=t,i.memoizedState=ka(1|n,l,e,a))}function mf(t,n){Ll(8390656,8,t,n)}function bf(t,n){Ri(2048,8,t,n)}function vf(t,n){return Ri(4,2,t,n)}function yf(t,n){return Ri(4,4,t,n)}function xf(t,n){if(typeof n=="function"){t=t();var e=n(t);return function(){typeof e=="function"?e():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Sf(t,n,e){e=e!=null?e.concat([t]):null,Ri(4,4,xf.bind(null,n,t),e)}function Io(){}function wf(t,n){var e=Lt();n=n===void 0?null:n;var a=e.memoizedState;return n!==null&&Lo(n,a[1])?a[0]:(e.memoizedState=[t,n],t)}function Of(t,n){var e=Lt();n=n===void 0?null:n;var a=e.memoizedState;if(n!==null&&Lo(n,a[1]))return a[0];if(a=t(),na){ge(!0);try{t()}finally{ge(!1)}}return e.memoizedState=[a,n],a}function tu(t,n,e){return e===void 0||(we&1073741824)!==0?t.memoizedState=n:(t.memoizedState=e,t=Eh(),ft.lanes|=t,Me|=t,e)}function Tf(t,n,e,a){return bn(e,n)?e:za.current!==null?(t=tu(t,e,a),bn(t,n)||($t=!0),t):(we&42)===0?($t=!0,t.memoizedState=e):(t=Eh(),ft.lanes|=t,Me|=t,n)}function Af(t,n,e,a,i){var l=P.p;P.p=l!==0&&8>l?l:8;var c=z.T,d={};z.T=d,au(t,!1,n,e);try{var m=i(),T=z.S;if(T!==null&&T(d,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var R=Vp(m,a);Ci(t,n,R,wn(t))}else Ci(t,n,a,wn(t))}catch(U){Ci(t,n,{then:function(){},status:"rejected",reason:U},wn())}finally{P.p=l,z.T=c}}function Fp(){}function nu(t,n,e,a){if(t.tag!==5)throw Error(s(476));var i=Ef(t).queue;Af(t,i,n,tt,e===null?Fp:function(){return _f(t),e(a)})}function Ef(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:le,lastRenderedState:tt},next:null};var e={};return n.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:le,lastRenderedState:e},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function _f(t){var n=Ef(t).next.queue;Ci(t,n,{},wn())}function eu(){return rn($i)}function Df(){return Lt().memoizedState}function Mf(){return Lt().memoizedState}function Ip(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var e=wn();t=xe(e);var a=Se(n,t,e);a!==null&&(On(a,n,e),Ei(a,n,e)),n={cache:Co()},t.payload=n;return}n=n.return}}function tg(t,n,e){var a=wn();e={lane:a,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null},Pl(t)?Rf(n,e):(e=wo(t,n,e,a),e!==null&&(On(e,t,a),Cf(e,n,a)))}function zf(t,n,e){var a=wn();Ci(t,n,e,a)}function Ci(t,n,e,a){var i={lane:a,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null};if(Pl(t))Rf(n,i);else{var l=t.alternate;if(t.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var c=n.lastRenderedState,d=l(c,e);if(i.hasEagerState=!0,i.eagerState=d,bn(d,c))return El(t,n,i,0),zt===null&&Al(),!1}catch{}finally{}if(e=wo(t,n,i,a),e!==null)return On(e,t,a),Cf(e,n,a),!0}return!1}function au(t,n,e,a){if(a={lane:2,revertLane:Nu(),action:a,hasEagerState:!1,eagerState:null,next:null},Pl(t)){if(n)throw Error(s(479))}else n=wo(t,e,a,2),n!==null&&On(n,t,2)}function Pl(t){var n=t.alternate;return t===ft||n!==null&&n===ft}function Rf(t,n){Ra=ql=!0;var e=t.pending;e===null?n.next=n:(n.next=e.next,e.next=n),t.pending=n}function Cf(t,n,e){if((e&4194048)!==0){var a=n.lanes;a&=t.pendingLanes,e|=a,n.lanes=e,Gs(t,e)}}var Xl={readContext:rn,use:Gl,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useLayoutEffect:Bt,useInsertionEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useSyncExternalStore:Bt,useId:Bt,useHostTransitionStatus:Bt,useFormState:Bt,useActionState:Bt,useOptimistic:Bt,useMemoCache:Bt,useCacheRefresh:Bt},kf={readContext:rn,use:Gl,useCallback:function(t,n){return fn().memoizedState=[t,n===void 0?null:n],t},useContext:rn,useEffect:mf,useImperativeHandle:function(t,n,e){e=e!=null?e.concat([t]):null,Ll(4194308,4,xf.bind(null,n,t),e)},useLayoutEffect:function(t,n){return Ll(4194308,4,t,n)},useInsertionEffect:function(t,n){Ll(4,2,t,n)},useMemo:function(t,n){var e=fn();n=n===void 0?null:n;var a=t();if(na){ge(!0);try{t()}finally{ge(!1)}}return e.memoizedState=[a,n],a},useReducer:function(t,n,e){var a=fn();if(e!==void 0){var i=e(n);if(na){ge(!0);try{e(n)}finally{ge(!1)}}}else i=n;return a.memoizedState=a.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=tg.bind(null,ft,t),[a.memoizedState,t]},useRef:function(t){var n=fn();return t={current:t},n.memoizedState=t},useState:function(t){t=Wo(t);var n=t.queue,e=zf.bind(null,ft,n);return n.dispatch=e,[t.memoizedState,e]},useDebugValue:Io,useDeferredValue:function(t,n){var e=fn();return tu(e,t,n)},useTransition:function(){var t=Wo(!1);return t=Af.bind(null,ft,t.queue,!0,!1),fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,e){var a=ft,i=fn();if(yt){if(e===void 0)throw Error(s(407));e=e()}else{if(e=n(),zt===null)throw Error(s(349));(bt&124)!==0||Ic(a,n,e)}i.memoizedState=e;var l={value:e,getSnapshot:n};return i.queue=l,mf(nf.bind(null,a,l,t),[t]),a.flags|=2048,ka(9,jl(),tf.bind(null,a,l,e,n),null),e},useId:function(){var t=fn(),n=zt.identifierPrefix;if(yt){var e=ee,a=ne;e=(a&~(1<<32-mn(a)-1)).toString(32)+e,n="«"+n+"R"+e,e=Bl++,0<e&&(n+="H"+e.toString(32)),n+="»"}else e=Kp++,n="«"+n+"r"+e.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:eu,useFormState:ff,useActionState:ff,useOptimistic:function(t){var n=fn();n.memoizedState=n.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=e,n=au.bind(null,ft,!0,e),e.dispatch=n,[t,n]},useMemoCache:Ko,useCacheRefresh:function(){return fn().memoizedState=Ip.bind(null,ft)}},Hf={readContext:rn,use:Gl,useCallback:wf,useContext:rn,useEffect:bf,useImperativeHandle:Sf,useInsertionEffect:vf,useLayoutEffect:yf,useMemo:Of,useReducer:Yl,useRef:gf,useState:function(){return Yl(le)},useDebugValue:Io,useDeferredValue:function(t,n){var e=Lt();return Tf(e,At.memoizedState,t,n)},useTransition:function(){var t=Yl(le)[0],n=Lt().memoizedState;return[typeof t=="boolean"?t:zi(t),n]},useSyncExternalStore:Fc,useId:Df,useHostTransitionStatus:eu,useFormState:hf,useActionState:hf,useOptimistic:function(t,n){var e=Lt();return lf(e,At,t,n)},useMemoCache:Ko,useCacheRefresh:Mf},ng={readContext:rn,use:Gl,useCallback:wf,useContext:rn,useEffect:bf,useImperativeHandle:Sf,useInsertionEffect:vf,useLayoutEffect:yf,useMemo:Of,useReducer:$o,useRef:gf,useState:function(){return $o(le)},useDebugValue:Io,useDeferredValue:function(t,n){var e=Lt();return At===null?tu(e,t,n):Tf(e,At.memoizedState,t,n)},useTransition:function(){var t=$o(le)[0],n=Lt().memoizedState;return[typeof t=="boolean"?t:zi(t),n]},useSyncExternalStore:Fc,useId:Df,useHostTransitionStatus:eu,useFormState:pf,useActionState:pf,useOptimistic:function(t,n){var e=Lt();return At!==null?lf(e,At,t,n):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:Ko,useCacheRefresh:Mf},Ha=null,ki=0;function Zl(t){var n=ki;return ki+=1,Ha===null&&(Ha=[]),Xc(Ha,t,n)}function Hi(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ql(t,n){throw n.$$typeof===j?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Nf(t){var n=t._init;return n(t._payload)}function Uf(t){function n(S,v){if(t){var O=S.deletions;O===null?(S.deletions=[v],S.flags|=16):O.push(v)}}function e(S,v){if(!t)return null;for(;v!==null;)n(S,v),v=v.sibling;return null}function a(S){for(var v=new Map;S!==null;)S.key!==null?v.set(S.key,S):v.set(S.index,S),S=S.sibling;return v}function i(S,v){return S=te(S,v),S.index=0,S.sibling=null,S}function l(S,v,O){return S.index=O,t?(O=S.alternate,O!==null?(O=O.index,O<v?(S.flags|=67108866,v):O):(S.flags|=67108866,v)):(S.flags|=1048576,v)}function c(S){return t&&S.alternate===null&&(S.flags|=67108866),S}function d(S,v,O,k){return v===null||v.tag!==6?(v=To(O,S.mode,k),v.return=S,v):(v=i(v,O),v.return=S,v)}function m(S,v,O,k){var Q=O.type;return Q===Y?R(S,v,O.props.children,k,O.key):v!==null&&(v.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===M&&Nf(Q)===v.type)?(v=i(v,O.props),Hi(v,O),v.return=S,v):(v=Dl(O.type,O.key,O.props,null,S.mode,k),Hi(v,O),v.return=S,v)}function T(S,v,O,k){return v===null||v.tag!==4||v.stateNode.containerInfo!==O.containerInfo||v.stateNode.implementation!==O.implementation?(v=Ao(O,S.mode,k),v.return=S,v):(v=i(v,O.children||[]),v.return=S,v)}function R(S,v,O,k,Q){return v===null||v.tag!==7?(v=Ve(O,S.mode,k,Q),v.return=S,v):(v=i(v,O),v.return=S,v)}function U(S,v,O){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=To(""+v,S.mode,O),v.return=S,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Z:return O=Dl(v.type,v.key,v.props,null,S.mode,O),Hi(O,v),O.return=S,O;case $:return v=Ao(v,S.mode,O),v.return=S,v;case M:var k=v._init;return v=k(v._payload),U(S,v,O)}if(Ct(v)||st(v))return v=Ve(v,S.mode,O,null),v.return=S,v;if(typeof v.then=="function")return U(S,Zl(v),O);if(v.$$typeof===C)return U(S,Cl(S,v),O);Ql(S,v)}return null}function A(S,v,O,k){var Q=v!==null?v.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return Q!==null?null:d(S,v,""+O,k);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Z:return O.key===Q?m(S,v,O,k):null;case $:return O.key===Q?T(S,v,O,k):null;case M:return Q=O._init,O=Q(O._payload),A(S,v,O,k)}if(Ct(O)||st(O))return Q!==null?null:R(S,v,O,k,null);if(typeof O.then=="function")return A(S,v,Zl(O),k);if(O.$$typeof===C)return A(S,v,Cl(S,O),k);Ql(S,O)}return null}function E(S,v,O,k,Q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return S=S.get(O)||null,d(v,S,""+k,Q);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Z:return S=S.get(k.key===null?O:k.key)||null,m(v,S,k,Q);case $:return S=S.get(k.key===null?O:k.key)||null,T(v,S,k,Q);case M:var ht=k._init;return k=ht(k._payload),E(S,v,O,k,Q)}if(Ct(k)||st(k))return S=S.get(O)||null,R(v,S,k,Q,null);if(typeof k.then=="function")return E(S,v,O,Zl(k),Q);if(k.$$typeof===C)return E(S,v,O,Cl(v,k),Q);Ql(v,k)}return null}function lt(S,v,O,k){for(var Q=null,ht=null,K=v,at=v=0,Ft=null;K!==null&&at<O.length;at++){K.index>at?(Ft=K,K=null):Ft=K.sibling;var vt=A(S,K,O[at],k);if(vt===null){K===null&&(K=Ft);break}t&&K&&vt.alternate===null&&n(S,K),v=l(vt,v,at),ht===null?Q=vt:ht.sibling=vt,ht=vt,K=Ft}if(at===O.length)return e(S,K),yt&&Je(S,at),Q;if(K===null){for(;at<O.length;at++)K=U(S,O[at],k),K!==null&&(v=l(K,v,at),ht===null?Q=K:ht.sibling=K,ht=K);return yt&&Je(S,at),Q}for(K=a(K);at<O.length;at++)Ft=E(K,S,at,O[at],k),Ft!==null&&(t&&Ft.alternate!==null&&K.delete(Ft.key===null?at:Ft.key),v=l(Ft,v,at),ht===null?Q=Ft:ht.sibling=Ft,ht=Ft);return t&&K.forEach(function(Be){return n(S,Be)}),yt&&Je(S,at),Q}function nt(S,v,O,k){if(O==null)throw Error(s(151));for(var Q=null,ht=null,K=v,at=v=0,Ft=null,vt=O.next();K!==null&&!vt.done;at++,vt=O.next()){K.index>at?(Ft=K,K=null):Ft=K.sibling;var Be=A(S,K,vt.value,k);if(Be===null){K===null&&(K=Ft);break}t&&K&&Be.alternate===null&&n(S,K),v=l(Be,v,at),ht===null?Q=Be:ht.sibling=Be,ht=Be,K=Ft}if(vt.done)return e(S,K),yt&&Je(S,at),Q;if(K===null){for(;!vt.done;at++,vt=O.next())vt=U(S,vt.value,k),vt!==null&&(v=l(vt,v,at),ht===null?Q=vt:ht.sibling=vt,ht=vt);return yt&&Je(S,at),Q}for(K=a(K);!vt.done;at++,vt=O.next())vt=E(K,S,at,vt.value,k),vt!==null&&(t&&vt.alternate!==null&&K.delete(vt.key===null?at:vt.key),v=l(vt,v,at),ht===null?Q=vt:ht.sibling=vt,ht=vt);return t&&K.forEach(function(em){return n(S,em)}),yt&&Je(S,at),Q}function _t(S,v,O,k){if(typeof O=="object"&&O!==null&&O.type===Y&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case Z:t:{for(var Q=O.key;v!==null;){if(v.key===Q){if(Q=O.type,Q===Y){if(v.tag===7){e(S,v.sibling),k=i(v,O.props.children),k.return=S,S=k;break t}}else if(v.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===M&&Nf(Q)===v.type){e(S,v.sibling),k=i(v,O.props),Hi(k,O),k.return=S,S=k;break t}e(S,v);break}else n(S,v);v=v.sibling}O.type===Y?(k=Ve(O.props.children,S.mode,k,O.key),k.return=S,S=k):(k=Dl(O.type,O.key,O.props,null,S.mode,k),Hi(k,O),k.return=S,S=k)}return c(S);case $:t:{for(Q=O.key;v!==null;){if(v.key===Q)if(v.tag===4&&v.stateNode.containerInfo===O.containerInfo&&v.stateNode.implementation===O.implementation){e(S,v.sibling),k=i(v,O.children||[]),k.return=S,S=k;break t}else{e(S,v);break}else n(S,v);v=v.sibling}k=Ao(O,S.mode,k),k.return=S,S=k}return c(S);case M:return Q=O._init,O=Q(O._payload),_t(S,v,O,k)}if(Ct(O))return lt(S,v,O,k);if(st(O)){if(Q=st(O),typeof Q!="function")throw Error(s(150));return O=Q.call(O),nt(S,v,O,k)}if(typeof O.then=="function")return _t(S,v,Zl(O),k);if(O.$$typeof===C)return _t(S,v,Cl(S,O),k);Ql(S,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,v!==null&&v.tag===6?(e(S,v.sibling),k=i(v,O),k.return=S,S=k):(e(S,v),k=To(O,S.mode,k),k.return=S,S=k),c(S)):e(S,v)}return function(S,v,O,k){try{ki=0;var Q=_t(S,v,O,k);return Ha=null,Q}catch(K){if(K===Ti||K===Hl)throw K;var ht=vn(29,K,null,S.mode);return ht.lanes=k,ht.return=S,ht}finally{}}}var Na=Uf(!0),qf=Uf(!1),kn=B(null),Zn=null;function Oe(t){var n=t.alternate;X(Qt,Qt.current&1),X(kn,t),Zn===null&&(n===null||za.current!==null||n.memoizedState!==null)&&(Zn=t)}function Bf(t){if(t.tag===22){if(X(Qt,Qt.current),X(kn,t),Zn===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Zn=t)}}else Te()}function Te(){X(Qt,Qt.current),X(kn,kn.current)}function re(t){L(kn),Zn===t&&(Zn=null),L(Qt)}var Qt=B(0);function Vl(t){for(var n=t;n!==null;){if(n.tag===13){var e=n.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||Vu(e)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function iu(t,n,e,a){n=t.memoizedState,e=e(a,n),e=e==null?n:N({},n,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var lu={enqueueSetState:function(t,n,e){t=t._reactInternals;var a=wn(),i=xe(a);i.payload=n,e!=null&&(i.callback=e),n=Se(t,i,a),n!==null&&(On(n,t,a),Ei(n,t,a))},enqueueReplaceState:function(t,n,e){t=t._reactInternals;var a=wn(),i=xe(a);i.tag=1,i.payload=n,e!=null&&(i.callback=e),n=Se(t,i,a),n!==null&&(On(n,t,a),Ei(n,t,a))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var e=wn(),a=xe(e);a.tag=2,n!=null&&(a.callback=n),n=Se(t,a,e),n!==null&&(On(n,t,e),Ei(n,t,e))}};function Gf(t,n,e,a,i,l,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,l,c):n.prototype&&n.prototype.isPureReactComponent?!mi(e,a)||!mi(i,l):!0}function Yf(t,n,e,a){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(e,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(e,a),n.state!==t&&lu.enqueueReplaceState(n,n.state,null)}function ea(t,n){var e=n;if("ref"in n){e={};for(var a in n)a!=="ref"&&(e[a]=n[a])}if(t=t.defaultProps){e===n&&(e=N({},e));for(var i in t)e[i]===void 0&&(e[i]=t[i])}return e}var Kl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function jf(t){Kl(t)}function Lf(t){console.error(t)}function Pf(t){Kl(t)}function Jl(t,n){try{var e=t.onUncaughtError;e(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function Xf(t,n,e){try{var a=t.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ru(t,n,e){return e=xe(e),e.tag=3,e.payload={element:null},e.callback=function(){Jl(t,n)},e}function Zf(t){return t=xe(t),t.tag=3,t}function Qf(t,n,e,a){var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var l=a.value;t.payload=function(){return i(l)},t.callback=function(){Xf(n,e,a)}}var c=e.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(t.callback=function(){Xf(n,e,a),typeof i!="function"&&(ze===null?ze=new Set([this]):ze.add(this));var d=a.stack;this.componentDidCatch(a.value,{componentStack:d!==null?d:""})})}function eg(t,n,e,a,i){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=e.alternate,n!==null&&Si(n,e,i,!0),e=kn.current,e!==null){switch(e.tag){case 13:return Zn===null?zu():e.alternate===null&&qt===0&&(qt=3),e.flags&=-257,e.flags|=65536,e.lanes=i,a===No?e.flags|=16384:(n=e.updateQueue,n===null?e.updateQueue=new Set([a]):n.add(a),Cu(t,a,i)),!1;case 22:return e.flags|=65536,a===No?e.flags|=16384:(n=e.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=n):(e=n.retryQueue,e===null?n.retryQueue=new Set([a]):e.add(a)),Cu(t,a,i)),!1}throw Error(s(435,e.tag))}return Cu(t,a,i),zu(),!1}if(yt)return n=kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=i,a!==Do&&(t=Error(s(422),{cause:a}),xi(Mn(t,e)))):(a!==Do&&(n=Error(s(423),{cause:a}),xi(Mn(n,e))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,a=Mn(a,e),i=ru(t.stateNode,a,i),Bo(t,i),qt!==4&&(qt=2)),!1;var l=Error(s(520),{cause:a});if(l=Mn(l,e),ji===null?ji=[l]:ji.push(l),qt!==4&&(qt=2),n===null)return!0;a=Mn(a,e),e=n;do{switch(e.tag){case 3:return e.flags|=65536,t=i&-i,e.lanes|=t,t=ru(e.stateNode,a,t),Bo(e,t),!1;case 1:if(n=e.type,l=e.stateNode,(e.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(ze===null||!ze.has(l))))return e.flags|=65536,i&=-i,e.lanes|=i,i=Zf(i),Qf(i,t,e,a),Bo(e,i),!1}e=e.return}while(e!==null);return!1}var Vf=Error(s(461)),$t=!1;function tn(t,n,e,a){n.child=t===null?qf(n,null,e,a):Na(n,t.child,e,a)}function Kf(t,n,e,a,i){e=e.render;var l=n.ref;if("ref"in a){var c={};for(var d in a)d!=="ref"&&(c[d]=a[d])}else c=a;return Ie(n),a=Po(t,n,e,c,l,i),d=Xo(),t!==null&&!$t?(Zo(t,n,i),oe(t,n,i)):(yt&&d&&Eo(n),n.flags|=1,tn(t,n,a,i),n.child)}function Jf(t,n,e,a,i){if(t===null){var l=e.type;return typeof l=="function"&&!Oo(l)&&l.defaultProps===void 0&&e.compare===null?(n.tag=15,n.type=l,$f(t,n,l,a,i)):(t=Dl(e.type,null,a,n,n.mode,i),t.ref=n.ref,t.return=n,n.child=t)}if(l=t.child,!pu(t,i)){var c=l.memoizedProps;if(e=e.compare,e=e!==null?e:mi,e(c,a)&&t.ref===n.ref)return oe(t,n,i)}return n.flags|=1,t=te(l,a),t.ref=n.ref,t.return=n,n.child=t}function $f(t,n,e,a,i){if(t!==null){var l=t.memoizedProps;if(mi(l,a)&&t.ref===n.ref)if($t=!1,n.pendingProps=a=l,pu(t,i))(t.flags&131072)!==0&&($t=!0);else return n.lanes=t.lanes,oe(t,n,i)}return ou(t,n,e,a,i)}function Wf(t,n,e){var a=n.pendingProps,i=a.children,l=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((n.flags&128)!==0){if(a=l!==null?l.baseLanes|e:e,t!==null){for(i=n.child=t.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;n.childLanes=l&~a}else n.childLanes=0,n.child=null;return Ff(t,n,a,e)}if((e&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&kl(n,l!==null?l.cachePool:null),l!==null?Jc(n,l):Yo(),Bf(n);else return n.lanes=n.childLanes=536870912,Ff(t,n,l!==null?l.baseLanes|e:e,e)}else l!==null?(kl(n,l.cachePool),Jc(n,l),Te(),n.memoizedState=null):(t!==null&&kl(n,null),Yo(),Te());return tn(t,n,i,e),n.child}function Ff(t,n,e,a){var i=Ho();return i=i===null?null:{parent:Zt._currentValue,pool:i},n.memoizedState={baseLanes:e,cachePool:i},t!==null&&kl(n,null),Yo(),Bf(n),t!==null&&Si(t,n,a,!0),null}function $l(t,n){var e=n.ref;if(e===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(s(284));(t===null||t.ref!==e)&&(n.flags|=4194816)}}function ou(t,n,e,a,i){return Ie(n),e=Po(t,n,e,a,void 0,i),a=Xo(),t!==null&&!$t?(Zo(t,n,i),oe(t,n,i)):(yt&&a&&Eo(n),n.flags|=1,tn(t,n,e,i),n.child)}function If(t,n,e,a,i,l){return Ie(n),n.updateQueue=null,e=Wc(n,a,e,i),$c(t),a=Xo(),t!==null&&!$t?(Zo(t,n,l),oe(t,n,l)):(yt&&a&&Eo(n),n.flags|=1,tn(t,n,e,l),n.child)}function th(t,n,e,a,i){if(Ie(n),n.stateNode===null){var l=Aa,c=e.contextType;typeof c=="object"&&c!==null&&(l=rn(c)),l=new e(a,l),n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=lu,n.stateNode=l,l._reactInternals=n,l=n.stateNode,l.props=a,l.state=n.memoizedState,l.refs={},Uo(n),c=e.contextType,l.context=typeof c=="object"&&c!==null?rn(c):Aa,l.state=n.memoizedState,c=e.getDerivedStateFromProps,typeof c=="function"&&(iu(n,e,c,a),l.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(c=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),c!==l.state&&lu.enqueueReplaceState(l,l.state,null),Di(n,a,l,i),_i(),l.state=n.memoizedState),typeof l.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(t===null){l=n.stateNode;var d=n.memoizedProps,m=ea(e,d);l.props=m;var T=l.context,R=e.contextType;c=Aa,typeof R=="object"&&R!==null&&(c=rn(R));var U=e.getDerivedStateFromProps;R=typeof U=="function"||typeof l.getSnapshotBeforeUpdate=="function",d=n.pendingProps!==d,R||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(d||T!==c)&&Yf(n,l,a,c),ye=!1;var A=n.memoizedState;l.state=A,Di(n,a,l,i),_i(),T=n.memoizedState,d||A!==T||ye?(typeof U=="function"&&(iu(n,e,U,a),T=n.memoizedState),(m=ye||Gf(n,e,m,a,A,T,c))?(R||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=T),l.props=a,l.state=T,l.context=c,a=m):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{l=n.stateNode,qo(t,n),c=n.memoizedProps,R=ea(e,c),l.props=R,U=n.pendingProps,A=l.context,T=e.contextType,m=Aa,typeof T=="object"&&T!==null&&(m=rn(T)),d=e.getDerivedStateFromProps,(T=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==U||A!==m)&&Yf(n,l,a,m),ye=!1,A=n.memoizedState,l.state=A,Di(n,a,l,i),_i();var E=n.memoizedState;c!==U||A!==E||ye||t!==null&&t.dependencies!==null&&Rl(t.dependencies)?(typeof d=="function"&&(iu(n,e,d,a),E=n.memoizedState),(R=ye||Gf(n,e,R,a,A,E,m)||t!==null&&t.dependencies!==null&&Rl(t.dependencies))?(T||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,E,m),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,E,m)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===t.memoizedProps&&A===t.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&A===t.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=E),l.props=a,l.state=E,l.context=m,a=R):(typeof l.componentDidUpdate!="function"||c===t.memoizedProps&&A===t.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&A===t.memoizedState||(n.flags|=1024),a=!1)}return l=a,$l(t,n),a=(n.flags&128)!==0,l||a?(l=n.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:l.render(),n.flags|=1,t!==null&&a?(n.child=Na(n,t.child,null,i),n.child=Na(n,null,e,i)):tn(t,n,e,i),n.memoizedState=l.state,t=n.child):t=oe(t,n,i),t}function nh(t,n,e,a){return yi(),n.flags|=256,tn(t,n,e,a),n.child}var uu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function su(t){return{baseLanes:t,cachePool:jc()}}function cu(t,n,e){return t=t!==null?t.childLanes&~e:0,n&&(t|=Hn),t}function eh(t,n,e){var a=n.pendingProps,i=!1,l=(n.flags&128)!==0,c;if((c=l)||(c=t!==null&&t.memoizedState===null?!1:(Qt.current&2)!==0),c&&(i=!0,n.flags&=-129),c=(n.flags&32)!==0,n.flags&=-33,t===null){if(yt){if(i?Oe(n):Te(),yt){var d=Ut,m;if(m=d){t:{for(m=d,d=Xn;m.nodeType!==8;){if(!d){d=null;break t}if(m=Gn(m.nextSibling),m===null){d=null;break t}}d=m}d!==null?(n.memoizedState={dehydrated:d,treeContext:Ke!==null?{id:ne,overflow:ee}:null,retryLane:536870912,hydrationErrors:null},m=vn(18,null,null,0),m.stateNode=d,m.return=n,n.child=m,un=n,Ut=null,m=!0):m=!1}m||We(n)}if(d=n.memoizedState,d!==null&&(d=d.dehydrated,d!==null))return Vu(d)?n.lanes=32:n.lanes=536870912,null;re(n)}return d=a.children,a=a.fallback,i?(Te(),i=n.mode,d=Wl({mode:"hidden",children:d},i),a=Ve(a,i,e,null),d.return=n,a.return=n,d.sibling=a,n.child=d,i=n.child,i.memoizedState=su(e),i.childLanes=cu(t,c,e),n.memoizedState=uu,a):(Oe(n),fu(n,d))}if(m=t.memoizedState,m!==null&&(d=m.dehydrated,d!==null)){if(l)n.flags&256?(Oe(n),n.flags&=-257,n=hu(t,n,e)):n.memoizedState!==null?(Te(),n.child=t.child,n.flags|=128,n=null):(Te(),i=a.fallback,d=n.mode,a=Wl({mode:"visible",children:a.children},d),i=Ve(i,d,e,null),i.flags|=2,a.return=n,i.return=n,a.sibling=i,n.child=a,Na(n,t.child,null,e),a=n.child,a.memoizedState=su(e),a.childLanes=cu(t,c,e),n.memoizedState=uu,n=i);else if(Oe(n),Vu(d)){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;c=T,a=Error(s(419)),a.stack="",a.digest=c,xi({value:a,source:null,stack:null}),n=hu(t,n,e)}else if($t||Si(t,n,e,!1),c=(e&t.childLanes)!==0,$t||c){if(c=zt,c!==null&&(a=e&-e,a=(a&42)!==0?1:Vr(a),a=(a&(c.suspendedLanes|e))!==0?0:a,a!==0&&a!==m.retryLane))throw m.retryLane=a,Ta(t,a),On(c,t,a),Vf;d.data==="$?"||zu(),n=hu(t,n,e)}else d.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=m.treeContext,Ut=Gn(d.nextSibling),un=n,yt=!0,$e=null,Xn=!1,t!==null&&(Rn[Cn++]=ne,Rn[Cn++]=ee,Rn[Cn++]=Ke,ne=t.id,ee=t.overflow,Ke=n),n=fu(n,a.children),n.flags|=4096);return n}return i?(Te(),i=a.fallback,d=n.mode,m=t.child,T=m.sibling,a=te(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&65011712,T!==null?i=te(T,i):(i=Ve(i,d,e,null),i.flags|=2),i.return=n,a.return=n,a.sibling=i,n.child=a,a=i,i=n.child,d=t.child.memoizedState,d===null?d=su(e):(m=d.cachePool,m!==null?(T=Zt._currentValue,m=m.parent!==T?{parent:T,pool:T}:m):m=jc(),d={baseLanes:d.baseLanes|e,cachePool:m}),i.memoizedState=d,i.childLanes=cu(t,c,e),n.memoizedState=uu,a):(Oe(n),e=t.child,t=e.sibling,e=te(e,{mode:"visible",children:a.children}),e.return=n,e.sibling=null,t!==null&&(c=n.deletions,c===null?(n.deletions=[t],n.flags|=16):c.push(t)),n.child=e,n.memoizedState=null,e)}function fu(t,n){return n=Wl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Wl(t,n){return t=vn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function hu(t,n,e){return Na(n,t.child,null,e),t=fu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function ah(t,n,e){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n),zo(t.return,n,e)}function du(t,n,e,a,i){var l=t.memoizedState;l===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:e,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=e,l.tailMode=i)}function ih(t,n,e){var a=n.pendingProps,i=a.revealOrder,l=a.tail;if(tn(t,n,a.children,e),a=Qt.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ah(t,e,n);else if(t.tag===19)ah(t,e,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(X(Qt,a),i){case"forwards":for(e=n.child,i=null;e!==null;)t=e.alternate,t!==null&&Vl(t)===null&&(i=e),e=e.sibling;e=i,e===null?(i=n.child,n.child=null):(i=e.sibling,e.sibling=null),du(n,!1,i,e,l);break;case"backwards":for(e=null,i=n.child,n.child=null;i!==null;){if(t=i.alternate,t!==null&&Vl(t)===null){n.child=i;break}t=i.sibling,i.sibling=e,e=i,i=t}du(n,!0,e,null,l);break;case"together":du(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function oe(t,n,e){if(t!==null&&(n.dependencies=t.dependencies),Me|=n.lanes,(e&n.childLanes)===0)if(t!==null){if(Si(t,n,e,!1),(e&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,e=te(t,t.pendingProps),n.child=e,e.return=n;t.sibling!==null;)t=t.sibling,e=e.sibling=te(t,t.pendingProps),e.return=n;e.sibling=null}return n.child}function pu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Rl(t)))}function ag(t,n,e){switch(n.tag){case 3:xt(n,n.stateNode.containerInfo),ve(n,Zt,t.memoizedState.cache),yi();break;case 27:case 5:je(n);break;case 4:xt(n,n.stateNode.containerInfo);break;case 10:ve(n,n.type,n.memoizedProps.value);break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(Oe(n),n.flags|=128,null):(e&n.child.childLanes)!==0?eh(t,n,e):(Oe(n),t=oe(t,n,e),t!==null?t.sibling:null);Oe(n);break;case 19:var i=(t.flags&128)!==0;if(a=(e&n.childLanes)!==0,a||(Si(t,n,e,!1),a=(e&n.childLanes)!==0),i){if(a)return ih(t,n,e);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(Qt,Qt.current),a)break;return null;case 22:case 23:return n.lanes=0,Wf(t,n,e);case 24:ve(n,Zt,t.memoizedState.cache)}return oe(t,n,e)}function lh(t,n,e){if(t!==null)if(t.memoizedProps!==n.pendingProps)$t=!0;else{if(!pu(t,e)&&(n.flags&128)===0)return $t=!1,ag(t,n,e);$t=(t.flags&131072)!==0}else $t=!1,yt&&(n.flags&1048576)!==0&&Hc(n,zl,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var a=n.elementType,i=a._init;if(a=i(a._payload),n.type=a,typeof a=="function")Oo(a)?(t=ea(a,t),n.tag=1,n=th(null,n,a,t,e)):(n.tag=0,n=ou(null,n,a,t,e));else{if(a!=null){if(i=a.$$typeof,i===u){n.tag=11,n=Kf(null,n,a,t,e);break t}else if(i===x){n.tag=14,n=Jf(null,n,a,t,e);break t}}throw n=Yt(a)||a,Error(s(306,n,""))}}return n;case 0:return ou(t,n,n.type,n.pendingProps,e);case 1:return a=n.type,i=ea(a,n.pendingProps),th(t,n,a,i,e);case 3:t:{if(xt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));a=n.pendingProps;var l=n.memoizedState;i=l.element,qo(t,n),Di(n,a,null,e);var c=n.memoizedState;if(a=c.cache,ve(n,Zt,a),a!==l.cache&&Ro(n,[Zt],e,!0),_i(),a=c.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:c.cache},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){n=nh(t,n,a,e);break t}else if(a!==i){i=Mn(Error(s(424)),n),xi(i),n=nh(t,n,a,e);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ut=Gn(t.firstChild),un=n,yt=!0,$e=null,Xn=!0,e=qf(n,null,a,e),n.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(yi(),a===i){n=oe(t,n,e);break t}tn(t,n,a,e)}n=n.child}return n;case 26:return $l(t,n),t===null?(e=sd(n.type,null,n.pendingProps,null))?n.memoizedState=e:yt||(e=n.type,t=n.pendingProps,a=fr(et.current).createElement(e),a[ln]=n,a[sn]=t,en(a,e,t),Jt(a),n.stateNode=a):n.memoizedState=sd(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return je(n),t===null&&yt&&(a=n.stateNode=rd(n.type,n.pendingProps,et.current),un=n,Xn=!0,i=Ut,ke(n.type)?(Ku=i,Ut=Gn(a.firstChild)):Ut=i),tn(t,n,n.pendingProps.children,e),$l(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&yt&&((i=a=Ut)&&(a=Rg(a,n.type,n.pendingProps,Xn),a!==null?(n.stateNode=a,un=n,Ut=Gn(a.firstChild),Xn=!1,i=!0):i=!1),i||We(n)),je(n),i=n.type,l=n.pendingProps,c=t!==null?t.memoizedProps:null,a=l.children,Xu(i,l)?a=null:c!==null&&Xu(i,c)&&(n.flags|=32),n.memoizedState!==null&&(i=Po(t,n,Jp,null,null,e),$i._currentValue=i),$l(t,n),tn(t,n,a,e),n.child;case 6:return t===null&&yt&&((t=e=Ut)&&(e=Cg(e,n.pendingProps,Xn),e!==null?(n.stateNode=e,un=n,Ut=null,t=!0):t=!1),t||We(n)),null;case 13:return eh(t,n,e);case 4:return xt(n,n.stateNode.containerInfo),a=n.pendingProps,t===null?n.child=Na(n,null,a,e):tn(t,n,a,e),n.child;case 11:return Kf(t,n,n.type,n.pendingProps,e);case 7:return tn(t,n,n.pendingProps,e),n.child;case 8:return tn(t,n,n.pendingProps.children,e),n.child;case 12:return tn(t,n,n.pendingProps.children,e),n.child;case 10:return a=n.pendingProps,ve(n,n.type,a.value),tn(t,n,a.children,e),n.child;case 9:return i=n.type._context,a=n.pendingProps.children,Ie(n),i=rn(i),a=a(i),n.flags|=1,tn(t,n,a,e),n.child;case 14:return Jf(t,n,n.type,n.pendingProps,e);case 15:return $f(t,n,n.type,n.pendingProps,e);case 19:return ih(t,n,e);case 31:return a=n.pendingProps,e=n.mode,a={mode:a.mode,children:a.children},t===null?(e=Wl(a,e),e.ref=n.ref,n.child=e,e.return=n,n=e):(e=te(t.child,a),e.ref=n.ref,n.child=e,e.return=n,n=e),n;case 22:return Wf(t,n,e);case 24:return Ie(n),a=rn(Zt),t===null?(i=Ho(),i===null&&(i=zt,l=Co(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=e),i=l),n.memoizedState={parent:a,cache:i},Uo(n),ve(n,Zt,i)):((t.lanes&e)!==0&&(qo(t,n),Di(n,null,null,e),_i()),i=t.memoizedState,l=n.memoizedState,i.parent!==a?(i={parent:a,cache:a},n.memoizedState=i,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=i),ve(n,Zt,a)):(a=l.cache,ve(n,Zt,a),a!==i.cache&&Ro(n,[Zt],e,!0))),tn(t,n,n.pendingProps.children,e),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ue(t){t.flags|=4}function rh(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!pd(n)){if(n=kn.current,n!==null&&((bt&4194048)===bt?Zn!==null:(bt&62914560)!==bt&&(bt&536870912)===0||n!==Zn))throw Ai=No,Lc;t.flags|=8192}}function Fl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?qs():536870912,t.lanes|=n,Ga|=n)}function Ni(t,n){if(!yt)switch(t.tailMode){case"hidden":n=t.tail;for(var e=null;n!==null;)n.alternate!==null&&(e=n),n=n.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Nt(t){var n=t.alternate!==null&&t.alternate.child===t.child,e=0,a=0;if(n)for(var i=t.child;i!==null;)e|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)e|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=a,t.childLanes=e,n}function ig(t,n,e){var a=n.pendingProps;switch(_o(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(n),null;case 1:return Nt(n),null;case 3:return e=n.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ie(Zt),an(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(vi(n)?ue(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,qc())),Nt(n),null;case 26:return e=n.memoizedState,t===null?(ue(n),e!==null?(Nt(n),rh(n,e)):(Nt(n),n.flags&=-16777217)):e?e!==t.memoizedState?(ue(n),Nt(n),rh(n,e)):(Nt(n),n.flags&=-16777217):(t.memoizedProps!==a&&ue(n),Nt(n),n.flags&=-16777217),null;case 27:Wn(n),e=et.current;var i=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==a&&ue(n);else{if(!a){if(n.stateNode===null)throw Error(s(166));return Nt(n),null}t=W.current,vi(n)?Nc(n):(t=rd(i,a,e),n.stateNode=t,ue(n))}return Nt(n),null;case 5:if(Wn(n),e=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==a&&ue(n);else{if(!a){if(n.stateNode===null)throw Error(s(166));return Nt(n),null}if(t=W.current,vi(n))Nc(n);else{switch(i=fr(et.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",e);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;default:switch(e){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",e);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?i.createElement(e,{is:a.is}):i.createElement(e)}}t[ln]=n,t[sn]=a;t:for(i=n.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break t;for(;i.sibling===null;){if(i.return===null||i.return===n)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}n.stateNode=t;t:switch(en(t,e,a),e){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&ue(n)}}return Nt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==a&&ue(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(s(166));if(t=et.current,vi(n)){if(t=n.stateNode,e=n.memoizedProps,a=null,i=un,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}t[ln]=n,t=!!(t.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||Ih(t.nodeValue,e)),t||We(n)}else t=fr(t).createTextNode(a),t[ln]=n,n.stateNode=t}return Nt(n),null;case 13:if(a=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=vi(n),a!==null&&a.dehydrated!==null){if(t===null){if(!i)throw Error(s(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[ln]=n}else yi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Nt(n),i=!1}else i=qc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return n.flags&256?(re(n),n):(re(n),null)}if(re(n),(n.flags&128)!==0)return n.lanes=e,n;if(e=a!==null,t=t!==null&&t.memoizedState!==null,e){a=n.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var l=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==i&&(a.flags|=2048)}return e!==t&&e&&(n.child.flags|=8192),Fl(n,n.updateQueue),Nt(n),null;case 4:return an(),t===null&&Gu(n.stateNode.containerInfo),Nt(n),null;case 10:return ie(n.type),Nt(n),null;case 19:if(L(Qt),i=n.memoizedState,i===null)return Nt(n),null;if(a=(n.flags&128)!==0,l=i.rendering,l===null)if(a)Ni(i,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(l=Vl(t),l!==null){for(n.flags|=128,Ni(i,!1),t=l.updateQueue,n.updateQueue=t,Fl(n,t),n.subtreeFlags=0,t=e,e=n.child;e!==null;)kc(e,t),e=e.sibling;return X(Qt,Qt.current&1|2),n.child}t=t.sibling}i.tail!==null&&Pn()>nr&&(n.flags|=128,a=!0,Ni(i,!1),n.lanes=4194304)}else{if(!a)if(t=Vl(l),t!==null){if(n.flags|=128,a=!0,t=t.updateQueue,n.updateQueue=t,Fl(n,t),Ni(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!yt)return Nt(n),null}else 2*Pn()-i.renderingStartTime>nr&&e!==536870912&&(n.flags|=128,a=!0,Ni(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(t=i.last,t!==null?t.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Pn(),n.sibling=null,t=Qt.current,X(Qt,a?t&1|2:t&1),n):(Nt(n),null);case 22:case 23:return re(n),jo(),a=n.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(e&536870912)!==0&&(n.flags&128)===0&&(Nt(n),n.subtreeFlags&6&&(n.flags|=8192)):Nt(n),e=n.updateQueue,e!==null&&Fl(n,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==e&&(n.flags|=2048),t!==null&&L(ta),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),n.memoizedState.cache!==e&&(n.flags|=2048),ie(Zt),Nt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function lg(t,n){switch(_o(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ie(Zt),an(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Wn(n),null;case 13:if(re(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));yi()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return L(Qt),null;case 4:return an(),null;case 10:return ie(n.type),null;case 22:case 23:return re(n),jo(),t!==null&&L(ta),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ie(Zt),null;case 25:return null;default:return null}}function oh(t,n){switch(_o(n),n.tag){case 3:ie(Zt),an();break;case 26:case 27:case 5:Wn(n);break;case 4:an();break;case 13:re(n);break;case 19:L(Qt);break;case 10:ie(n.type);break;case 22:case 23:re(n),jo(),t!==null&&L(ta);break;case 24:ie(Zt)}}function Ui(t,n){try{var e=n.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var i=a.next;e=i;do{if((e.tag&t)===t){a=void 0;var l=e.create,c=e.inst;a=l(),c.destroy=a}e=e.next}while(e!==i)}}catch(d){Dt(n,n.return,d)}}function Ae(t,n,e){try{var a=n.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&t)===t){var c=a.inst,d=c.destroy;if(d!==void 0){c.destroy=void 0,i=n;var m=e,T=d;try{T()}catch(R){Dt(i,m,R)}}}a=a.next}while(a!==l)}}catch(R){Dt(n,n.return,R)}}function uh(t){var n=t.updateQueue;if(n!==null){var e=t.stateNode;try{Kc(n,e)}catch(a){Dt(t,t.return,a)}}}function sh(t,n,e){e.props=ea(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(a){Dt(t,n,a)}}function qi(t,n){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof e=="function"?t.refCleanup=e(a):e.current=a}}catch(i){Dt(t,n,i)}}function Qn(t,n){var e=t.ref,a=t.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(i){Dt(t,n,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(i){Dt(t,n,i)}else e.current=null}function ch(t){var n=t.type,e=t.memoizedProps,a=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break t;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(i){Dt(t,t.return,i)}}function gu(t,n,e){try{var a=t.stateNode;Eg(a,t.type,e,n),a[sn]=n}catch(i){Dt(t,t.return,i)}}function fh(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ke(t.type)||t.tag===4}function mu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||fh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ke(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bu(t,n,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,n?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(t,n):(n=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.appendChild(t),e=e._reactRootContainer,e!=null||n.onclick!==null||(n.onclick=cr));else if(a!==4&&(a===27&&ke(t.type)&&(e=t.stateNode,n=null),t=t.child,t!==null))for(bu(t,n,e),t=t.sibling;t!==null;)bu(t,n,e),t=t.sibling}function Il(t,n,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,n?e.insertBefore(t,n):e.appendChild(t);else if(a!==4&&(a===27&&ke(t.type)&&(e=t.stateNode),t=t.child,t!==null))for(Il(t,n,e),t=t.sibling;t!==null;)Il(t,n,e),t=t.sibling}function hh(t){var n=t.stateNode,e=t.memoizedProps;try{for(var a=t.type,i=n.attributes;i.length;)n.removeAttributeNode(i[0]);en(n,a,e),n[ln]=t,n[sn]=e}catch(l){Dt(t,t.return,l)}}var se=!1,Gt=!1,vu=!1,dh=typeof WeakSet=="function"?WeakSet:Set,Wt=null;function rg(t,n){if(t=t.containerInfo,Lu=br,t=Oc(t),mo(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var i=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{e.nodeType,l.nodeType}catch{e=null;break t}var c=0,d=-1,m=-1,T=0,R=0,U=t,A=null;n:for(;;){for(var E;U!==e||i!==0&&U.nodeType!==3||(d=c+i),U!==l||a!==0&&U.nodeType!==3||(m=c+a),U.nodeType===3&&(c+=U.nodeValue.length),(E=U.firstChild)!==null;)A=U,U=E;for(;;){if(U===t)break n;if(A===e&&++T===i&&(d=c),A===l&&++R===a&&(m=c),(E=U.nextSibling)!==null)break;U=A,A=U.parentNode}U=E}e=d===-1||m===-1?null:{start:d,end:m}}else e=null}e=e||{start:0,end:0}}else e=null;for(Pu={focusedElem:t,selectionRange:e},br=!1,Wt=n;Wt!==null;)if(n=Wt,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,Wt=t;else for(;Wt!==null;){switch(n=Wt,l=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&l!==null){t=void 0,e=n,i=l.memoizedProps,l=l.memoizedState,a=e.stateNode;try{var lt=ea(e.type,i,e.elementType===e.type);t=a.getSnapshotBeforeUpdate(lt,l),a.__reactInternalSnapshotBeforeUpdate=t}catch(nt){Dt(e,e.return,nt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,e=t.nodeType,e===9)Qu(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Qu(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Wt=t;break}Wt=n.return}}function ph(t,n,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Ee(t,e),a&4&&Ui(5,e);break;case 1:if(Ee(t,e),a&4)if(t=e.stateNode,n===null)try{t.componentDidMount()}catch(c){Dt(e,e.return,c)}else{var i=ea(e.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(i,n,t.__reactInternalSnapshotBeforeUpdate)}catch(c){Dt(e,e.return,c)}}a&64&&uh(e),a&512&&qi(e,e.return);break;case 3:if(Ee(t,e),a&64&&(t=e.updateQueue,t!==null)){if(n=null,e.child!==null)switch(e.child.tag){case 27:case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}try{Kc(t,n)}catch(c){Dt(e,e.return,c)}}break;case 27:n===null&&a&4&&hh(e);case 26:case 5:Ee(t,e),n===null&&a&4&&ch(e),a&512&&qi(e,e.return);break;case 12:Ee(t,e);break;case 13:Ee(t,e),a&4&&bh(t,e),a&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=gg.bind(null,e),kg(t,e))));break;case 22:if(a=e.memoizedState!==null||se,!a){n=n!==null&&n.memoizedState!==null||Gt,i=se;var l=Gt;se=a,(Gt=n)&&!l?_e(t,e,(e.subtreeFlags&8772)!==0):Ee(t,e),se=i,Gt=l}break;case 30:break;default:Ee(t,e)}}function gh(t){var n=t.alternate;n!==null&&(t.alternate=null,gh(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&$r(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var kt=null,hn=!1;function ce(t,n,e){for(e=e.child;e!==null;)mh(t,n,e),e=e.sibling}function mh(t,n,e){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(ii,e)}catch{}switch(e.tag){case 26:Gt||Qn(e,n),ce(t,n,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Gt||Qn(e,n);var a=kt,i=hn;ke(e.type)&&(kt=e.stateNode,hn=!1),ce(t,n,e),Qi(e.stateNode),kt=a,hn=i;break;case 5:Gt||Qn(e,n);case 6:if(a=kt,i=hn,kt=null,ce(t,n,e),kt=a,hn=i,kt!==null)if(hn)try{(kt.nodeType===9?kt.body:kt.nodeName==="HTML"?kt.ownerDocument.body:kt).removeChild(e.stateNode)}catch(l){Dt(e,n,l)}else try{kt.removeChild(e.stateNode)}catch(l){Dt(e,n,l)}break;case 18:kt!==null&&(hn?(t=kt,id(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),tl(t)):id(kt,e.stateNode));break;case 4:a=kt,i=hn,kt=e.stateNode.containerInfo,hn=!0,ce(t,n,e),kt=a,hn=i;break;case 0:case 11:case 14:case 15:Gt||Ae(2,e,n),Gt||Ae(4,e,n),ce(t,n,e);break;case 1:Gt||(Qn(e,n),a=e.stateNode,typeof a.componentWillUnmount=="function"&&sh(e,n,a)),ce(t,n,e);break;case 21:ce(t,n,e);break;case 22:Gt=(a=Gt)||e.memoizedState!==null,ce(t,n,e),Gt=a;break;default:ce(t,n,e)}}function bh(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{tl(t)}catch(e){Dt(n,n.return,e)}}function og(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new dh),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new dh),n;default:throw Error(s(435,t.tag))}}function yu(t,n){var e=og(t);n.forEach(function(a){var i=mg.bind(null,t,a);e.has(a)||(e.add(a),a.then(i,i))})}function yn(t,n){var e=n.deletions;if(e!==null)for(var a=0;a<e.length;a++){var i=e[a],l=t,c=n,d=c;t:for(;d!==null;){switch(d.tag){case 27:if(ke(d.type)){kt=d.stateNode,hn=!1;break t}break;case 5:kt=d.stateNode,hn=!1;break t;case 3:case 4:kt=d.stateNode.containerInfo,hn=!0;break t}d=d.return}if(kt===null)throw Error(s(160));mh(l,c,i),kt=null,hn=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)vh(n,t),n=n.sibling}var Bn=null;function vh(t,n){var e=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:yn(n,t),xn(t),a&4&&(Ae(3,t,t.return),Ui(3,t),Ae(5,t,t.return));break;case 1:yn(n,t),xn(t),a&512&&(Gt||e===null||Qn(e,e.return)),a&64&&se&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var i=Bn;if(yn(n,t),xn(t),a&512&&(Gt||e===null||Qn(e,e.return)),a&4){var l=e!==null?e.memoizedState:null;if(a=t.memoizedState,e===null)if(a===null)if(t.stateNode===null){t:{a=t.type,e=t.memoizedProps,i=i.ownerDocument||i;n:switch(a){case"title":l=i.getElementsByTagName("title")[0],(!l||l[oi]||l[ln]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(a),i.head.insertBefore(l,i.querySelector("head > title"))),en(l,a,e),l[ln]=t,Jt(l),a=l;break t;case"link":var c=hd("link","href",i).get(a+(e.href||""));if(c){for(var d=0;d<c.length;d++)if(l=c[d],l.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&l.getAttribute("rel")===(e.rel==null?null:e.rel)&&l.getAttribute("title")===(e.title==null?null:e.title)&&l.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){c.splice(d,1);break n}}l=i.createElement(a),en(l,a,e),i.head.appendChild(l);break;case"meta":if(c=hd("meta","content",i).get(a+(e.content||""))){for(d=0;d<c.length;d++)if(l=c[d],l.getAttribute("content")===(e.content==null?null:""+e.content)&&l.getAttribute("name")===(e.name==null?null:e.name)&&l.getAttribute("property")===(e.property==null?null:e.property)&&l.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&l.getAttribute("charset")===(e.charSet==null?null:e.charSet)){c.splice(d,1);break n}}l=i.createElement(a),en(l,a,e),i.head.appendChild(l);break;default:throw Error(s(468,a))}l[ln]=t,Jt(l),a=l}t.stateNode=a}else dd(i,t.type,t.stateNode);else t.stateNode=fd(i,a,t.memoizedProps);else l!==a?(l===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):l.count--,a===null?dd(i,t.type,t.stateNode):fd(i,a,t.memoizedProps)):a===null&&t.stateNode!==null&&gu(t,t.memoizedProps,e.memoizedProps)}break;case 27:yn(n,t),xn(t),a&512&&(Gt||e===null||Qn(e,e.return)),e!==null&&a&4&&gu(t,t.memoizedProps,e.memoizedProps);break;case 5:if(yn(n,t),xn(t),a&512&&(Gt||e===null||Qn(e,e.return)),t.flags&32){i=t.stateNode;try{ba(i,"")}catch(E){Dt(t,t.return,E)}}a&4&&t.stateNode!=null&&(i=t.memoizedProps,gu(t,i,e!==null?e.memoizedProps:i)),a&1024&&(vu=!0);break;case 6:if(yn(n,t),xn(t),a&4){if(t.stateNode===null)throw Error(s(162));a=t.memoizedProps,e=t.stateNode;try{e.nodeValue=a}catch(E){Dt(t,t.return,E)}}break;case 3:if(pr=null,i=Bn,Bn=hr(n.containerInfo),yn(n,t),Bn=i,xn(t),a&4&&e!==null&&e.memoizedState.isDehydrated)try{tl(n.containerInfo)}catch(E){Dt(t,t.return,E)}vu&&(vu=!1,yh(t));break;case 4:a=Bn,Bn=hr(t.stateNode.containerInfo),yn(n,t),xn(t),Bn=a;break;case 12:yn(n,t),xn(t);break;case 13:yn(n,t),xn(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(Au=Pn()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,yu(t,a)));break;case 22:i=t.memoizedState!==null;var m=e!==null&&e.memoizedState!==null,T=se,R=Gt;if(se=T||i,Gt=R||m,yn(n,t),Gt=R,se=T,xn(t),a&8192)t:for(n=t.stateNode,n._visibility=i?n._visibility&-2:n._visibility|1,i&&(e===null||m||se||Gt||aa(t)),e=null,n=t;;){if(n.tag===5||n.tag===26){if(e===null){m=e=n;try{if(l=m.stateNode,i)c=l.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{d=m.stateNode;var U=m.memoizedProps.style,A=U!=null&&U.hasOwnProperty("display")?U.display:null;d.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(E){Dt(m,m.return,E)}}}else if(n.tag===6){if(e===null){m=n;try{m.stateNode.nodeValue=i?"":m.memoizedProps}catch(E){Dt(m,m.return,E)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;e===n&&(e=null),n=n.return}e===n&&(e=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=t.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,yu(t,e))));break;case 19:yn(n,t),xn(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,yu(t,a)));break;case 30:break;case 21:break;default:yn(n,t),xn(t)}}function xn(t){var n=t.flags;if(n&2){try{for(var e,a=t.return;a!==null;){if(fh(a)){e=a;break}a=a.return}if(e==null)throw Error(s(160));switch(e.tag){case 27:var i=e.stateNode,l=mu(t);Il(t,l,i);break;case 5:var c=e.stateNode;e.flags&32&&(ba(c,""),e.flags&=-33);var d=mu(t);Il(t,d,c);break;case 3:case 4:var m=e.stateNode.containerInfo,T=mu(t);bu(t,T,m);break;default:throw Error(s(161))}}catch(R){Dt(t,t.return,R)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function yh(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;yh(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ee(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ph(t,n.alternate,n),n=n.sibling}function aa(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ae(4,n,n.return),aa(n);break;case 1:Qn(n,n.return);var e=n.stateNode;typeof e.componentWillUnmount=="function"&&sh(n,n.return,e),aa(n);break;case 27:Qi(n.stateNode);case 26:case 5:Qn(n,n.return),aa(n);break;case 22:n.memoizedState===null&&aa(n);break;case 30:aa(n);break;default:aa(n)}t=t.sibling}}function _e(t,n,e){for(e=e&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,i=t,l=n,c=l.flags;switch(l.tag){case 0:case 11:case 15:_e(i,l,e),Ui(4,l);break;case 1:if(_e(i,l,e),a=l,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(T){Dt(a,a.return,T)}if(a=l,i=a.updateQueue,i!==null){var d=a.stateNode;try{var m=i.shared.hiddenCallbacks;if(m!==null)for(i.shared.hiddenCallbacks=null,i=0;i<m.length;i++)Vc(m[i],d)}catch(T){Dt(a,a.return,T)}}e&&c&64&&uh(l),qi(l,l.return);break;case 27:hh(l);case 26:case 5:_e(i,l,e),e&&a===null&&c&4&&ch(l),qi(l,l.return);break;case 12:_e(i,l,e);break;case 13:_e(i,l,e),e&&c&4&&bh(i,l);break;case 22:l.memoizedState===null&&_e(i,l,e),qi(l,l.return);break;case 30:break;default:_e(i,l,e)}n=n.sibling}}function xu(t,n){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&wi(e))}function Su(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&wi(t))}function Vn(t,n,e,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)xh(t,n,e,a),n=n.sibling}function xh(t,n,e,a){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Vn(t,n,e,a),i&2048&&Ui(9,n);break;case 1:Vn(t,n,e,a);break;case 3:Vn(t,n,e,a),i&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&wi(t)));break;case 12:if(i&2048){Vn(t,n,e,a),t=n.stateNode;try{var l=n.memoizedProps,c=l.id,d=l.onPostCommit;typeof d=="function"&&d(c,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(m){Dt(n,n.return,m)}}else Vn(t,n,e,a);break;case 13:Vn(t,n,e,a);break;case 23:break;case 22:l=n.stateNode,c=n.alternate,n.memoizedState!==null?l._visibility&2?Vn(t,n,e,a):Bi(t,n):l._visibility&2?Vn(t,n,e,a):(l._visibility|=2,Ua(t,n,e,a,(n.subtreeFlags&10256)!==0)),i&2048&&xu(c,n);break;case 24:Vn(t,n,e,a),i&2048&&Su(n.alternate,n);break;default:Vn(t,n,e,a)}}function Ua(t,n,e,a,i){for(i=i&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var l=t,c=n,d=e,m=a,T=c.flags;switch(c.tag){case 0:case 11:case 15:Ua(l,c,d,m,i),Ui(8,c);break;case 23:break;case 22:var R=c.stateNode;c.memoizedState!==null?R._visibility&2?Ua(l,c,d,m,i):Bi(l,c):(R._visibility|=2,Ua(l,c,d,m,i)),i&&T&2048&&xu(c.alternate,c);break;case 24:Ua(l,c,d,m,i),i&&T&2048&&Su(c.alternate,c);break;default:Ua(l,c,d,m,i)}n=n.sibling}}function Bi(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var e=t,a=n,i=a.flags;switch(a.tag){case 22:Bi(e,a),i&2048&&xu(a.alternate,a);break;case 24:Bi(e,a),i&2048&&Su(a.alternate,a);break;default:Bi(e,a)}n=n.sibling}}var Gi=8192;function qa(t){if(t.subtreeFlags&Gi)for(t=t.child;t!==null;)Sh(t),t=t.sibling}function Sh(t){switch(t.tag){case 26:qa(t),t.flags&Gi&&t.memoizedState!==null&&Qg(Bn,t.memoizedState,t.memoizedProps);break;case 5:qa(t);break;case 3:case 4:var n=Bn;Bn=hr(t.stateNode.containerInfo),qa(t),Bn=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Gi,Gi=16777216,qa(t),Gi=n):qa(t));break;default:qa(t)}}function wh(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Yi(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var a=n[e];Wt=a,Th(a,t)}wh(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Oh(t),t=t.sibling}function Oh(t){switch(t.tag){case 0:case 11:case 15:Yi(t),t.flags&2048&&Ae(9,t,t.return);break;case 3:Yi(t);break;case 12:Yi(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,tr(t)):Yi(t);break;default:Yi(t)}}function tr(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var a=n[e];Wt=a,Th(a,t)}wh(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ae(8,n,n.return),tr(n);break;case 22:e=n.stateNode,e._visibility&2&&(e._visibility&=-3,tr(n));break;default:tr(n)}t=t.sibling}}function Th(t,n){for(;Wt!==null;){var e=Wt;switch(e.tag){case 0:case 11:case 15:Ae(8,e,n);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:wi(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,Wt=a;else t:for(e=t;Wt!==null;){a=Wt;var i=a.sibling,l=a.return;if(gh(a),a===e){Wt=null;break t}if(i!==null){i.return=l,Wt=i;break t}Wt=l}}}var ug={getCacheForType:function(t){var n=rn(Zt),e=n.data.get(t);return e===void 0&&(e=t(),n.data.set(t,e)),e}},sg=typeof WeakMap=="function"?WeakMap:Map,wt=0,zt=null,gt=null,bt=0,Ot=0,Sn=null,De=!1,Ba=!1,wu=!1,fe=0,qt=0,Me=0,ia=0,Ou=0,Hn=0,Ga=0,ji=null,dn=null,Tu=!1,Au=0,nr=1/0,er=null,ze=null,nn=0,Re=null,Ya=null,ja=0,Eu=0,_u=null,Ah=null,Li=0,Du=null;function wn(){if((wt&2)!==0&&bt!==0)return bt&-bt;if(z.T!==null){var t=Da;return t!==0?t:Nu()}return Ys()}function Eh(){Hn===0&&(Hn=(bt&536870912)===0||yt?Us():536870912);var t=kn.current;return t!==null&&(t.flags|=32),Hn}function On(t,n,e){(t===zt&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)&&(La(t,0),Ce(t,bt,Hn,!1)),ri(t,e),((wt&2)===0||t!==zt)&&(t===zt&&((wt&2)===0&&(ia|=e),qt===4&&Ce(t,bt,Hn,!1)),Kn(t))}function _h(t,n,e){if((wt&6)!==0)throw Error(s(327));var a=!e&&(n&124)===0&&(n&t.expiredLanes)===0||li(t,n),i=a?hg(t,n):Ru(t,n,!0),l=a;do{if(i===0){Ba&&!a&&Ce(t,n,0,!1);break}else{if(e=t.current.alternate,l&&!cg(e)){i=Ru(t,n,!1),l=!1;continue}if(i===2){if(l=n,t.errorRecoveryDisabledLanes&l)var c=0;else c=t.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){n=c;t:{var d=t;i=ji;var m=d.current.memoizedState.isDehydrated;if(m&&(La(d,c).flags|=256),c=Ru(d,c,!1),c!==2){if(wu&&!m){d.errorRecoveryDisabledLanes|=l,ia|=l,i=4;break t}l=dn,dn=i,l!==null&&(dn===null?dn=l:dn.push.apply(dn,l))}i=c}if(l=!1,i!==2)continue}}if(i===1){La(t,0),Ce(t,n,0,!0);break}t:{switch(a=t,l=i,l){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ce(a,n,Hn,!De);break t;case 2:dn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(i=Au+300-Pn(),10<i)){if(Ce(a,n,Hn,!De),dl(a,0,!0)!==0)break t;a.timeoutHandle=ed(Dh.bind(null,a,e,dn,er,Tu,n,Hn,ia,Ga,De,l,2,-0,0),i);break t}Dh(a,e,dn,er,Tu,n,Hn,ia,Ga,De,l,0,-0,0)}}break}while(!0);Kn(t)}function Dh(t,n,e,a,i,l,c,d,m,T,R,U,A,E){if(t.timeoutHandle=-1,U=n.subtreeFlags,(U&8192||(U&16785408)===16785408)&&(Ji={stylesheets:null,count:0,unsuspend:Zg},Sh(n),U=Vg(),U!==null)){t.cancelPendingCommit=U(Nh.bind(null,t,n,l,e,a,i,c,d,m,R,1,A,E)),Ce(t,l,c,!T);return}Nh(t,n,l,e,a,i,c,d,m)}function cg(t){for(var n=t;;){var e=n.tag;if((e===0||e===11||e===15)&&n.flags&16384&&(e=n.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var i=e[a],l=i.getSnapshot;i=i.value;try{if(!bn(l(),i))return!1}catch{return!1}}if(e=n.child,n.subtreeFlags&16384&&e!==null)e.return=n,n=e;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ce(t,n,e,a){n&=~Ou,n&=~ia,t.suspendedLanes|=n,t.pingedLanes&=~n,a&&(t.warmLanes|=n),a=t.expirationTimes;for(var i=n;0<i;){var l=31-mn(i),c=1<<l;a[l]=-1,i&=~c}e!==0&&Bs(t,e,n)}function ar(){return(wt&6)===0?(Pi(0),!1):!0}function Mu(){if(gt!==null){if(Ot===0)var t=gt.return;else t=gt,ae=Fe=null,Qo(t),Ha=null,ki=0,t=gt;for(;t!==null;)oh(t.alternate,t),t=t.return;gt=null}}function La(t,n){var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,Dg(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),Mu(),zt=t,gt=e=te(t.current,null),bt=n,Ot=0,Sn=null,De=!1,Ba=li(t,n),wu=!1,Ga=Hn=Ou=ia=Me=qt=0,dn=ji=null,Tu=!1,(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var i=31-mn(a),l=1<<i;n|=t[i],a&=~l}return fe=n,Al(),e}function Mh(t,n){ft=null,z.H=Xl,n===Ti||n===Hl?(n=Zc(),Ot=3):n===Lc?(n=Zc(),Ot=4):Ot=n===Vf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Sn=n,gt===null&&(qt=1,Jl(t,Mn(n,t.current)))}function zh(){var t=z.H;return z.H=Xl,t===null?Xl:t}function Rh(){var t=z.A;return z.A=ug,t}function zu(){qt=4,De||(bt&4194048)!==bt&&kn.current!==null||(Ba=!0),(Me&134217727)===0&&(ia&134217727)===0||zt===null||Ce(zt,bt,Hn,!1)}function Ru(t,n,e){var a=wt;wt|=2;var i=zh(),l=Rh();(zt!==t||bt!==n)&&(er=null,La(t,n)),n=!1;var c=qt;t:do try{if(Ot!==0&&gt!==null){var d=gt,m=Sn;switch(Ot){case 8:Mu(),c=6;break t;case 3:case 2:case 9:case 6:kn.current===null&&(n=!0);var T=Ot;if(Ot=0,Sn=null,Pa(t,d,m,T),e&&Ba){c=0;break t}break;default:T=Ot,Ot=0,Sn=null,Pa(t,d,m,T)}}fg(),c=qt;break}catch(R){Mh(t,R)}while(!0);return n&&t.shellSuspendCounter++,ae=Fe=null,wt=a,z.H=i,z.A=l,gt===null&&(zt=null,bt=0,Al()),c}function fg(){for(;gt!==null;)Ch(gt)}function hg(t,n){var e=wt;wt|=2;var a=zh(),i=Rh();zt!==t||bt!==n?(er=null,nr=Pn()+500,La(t,n)):Ba=li(t,n);t:do try{if(Ot!==0&&gt!==null){n=gt;var l=Sn;n:switch(Ot){case 1:Ot=0,Sn=null,Pa(t,n,l,1);break;case 2:case 9:if(Pc(l)){Ot=0,Sn=null,kh(n);break}n=function(){Ot!==2&&Ot!==9||zt!==t||(Ot=7),Kn(t)},l.then(n,n);break t;case 3:Ot=7;break t;case 4:Ot=5;break t;case 7:Pc(l)?(Ot=0,Sn=null,kh(n)):(Ot=0,Sn=null,Pa(t,n,l,7));break;case 5:var c=null;switch(gt.tag){case 26:c=gt.memoizedState;case 5:case 27:var d=gt;if(!c||pd(c)){Ot=0,Sn=null;var m=d.sibling;if(m!==null)gt=m;else{var T=d.return;T!==null?(gt=T,ir(T)):gt=null}break n}}Ot=0,Sn=null,Pa(t,n,l,5);break;case 6:Ot=0,Sn=null,Pa(t,n,l,6);break;case 8:Mu(),qt=6;break t;default:throw Error(s(462))}}dg();break}catch(R){Mh(t,R)}while(!0);return ae=Fe=null,z.H=a,z.A=i,wt=e,gt!==null?0:(zt=null,bt=0,Al(),qt)}function dg(){for(;gt!==null&&!N0();)Ch(gt)}function Ch(t){var n=lh(t.alternate,t,fe);t.memoizedProps=t.pendingProps,n===null?ir(t):gt=n}function kh(t){var n=t,e=n.alternate;switch(n.tag){case 15:case 0:n=If(e,n,n.pendingProps,n.type,void 0,bt);break;case 11:n=If(e,n,n.pendingProps,n.type.render,n.ref,bt);break;case 5:Qo(n);default:oh(e,n),n=gt=kc(n,fe),n=lh(e,n,fe)}t.memoizedProps=t.pendingProps,n===null?ir(t):gt=n}function Pa(t,n,e,a){ae=Fe=null,Qo(n),Ha=null,ki=0;var i=n.return;try{if(eg(t,i,n,e,bt)){qt=1,Jl(t,Mn(e,t.current)),gt=null;return}}catch(l){if(i!==null)throw gt=i,l;qt=1,Jl(t,Mn(e,t.current)),gt=null;return}n.flags&32768?(yt||a===1?t=!0:Ba||(bt&536870912)!==0?t=!1:(De=t=!0,(a===2||a===9||a===3||a===6)&&(a=kn.current,a!==null&&a.tag===13&&(a.flags|=16384))),Hh(n,t)):ir(n)}function ir(t){var n=t;do{if((n.flags&32768)!==0){Hh(n,De);return}t=n.return;var e=ig(n.alternate,n,fe);if(e!==null){gt=e;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);qt===0&&(qt=5)}function Hh(t,n){do{var e=lg(t.alternate,t);if(e!==null){e.flags&=32767,gt=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=e}while(t!==null);qt=6,gt=null}function Nh(t,n,e,a,i,l,c,d,m){t.cancelPendingCommit=null;do lr();while(nn!==0);if((wt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(l=n.lanes|n.childLanes,l|=So,Z0(t,e,l,c,d,m),t===zt&&(gt=zt=null,bt=0),Ya=n,Re=t,ja=e,Eu=l,_u=i,Ah=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,bg(cl,function(){return Yh(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null,i=P.p,P.p=2,c=wt,wt|=4;try{rg(t,n,e)}finally{wt=c,P.p=i,z.T=a}}nn=1,Uh(),qh(),Bh()}}function Uh(){if(nn===1){nn=0;var t=Re,n=Ya,e=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||e){e=z.T,z.T=null;var a=P.p;P.p=2;var i=wt;wt|=4;try{vh(n,t);var l=Pu,c=Oc(t.containerInfo),d=l.focusedElem,m=l.selectionRange;if(c!==d&&d&&d.ownerDocument&&wc(d.ownerDocument.documentElement,d)){if(m!==null&&mo(d)){var T=m.start,R=m.end;if(R===void 0&&(R=T),"selectionStart"in d)d.selectionStart=T,d.selectionEnd=Math.min(R,d.value.length);else{var U=d.ownerDocument||document,A=U&&U.defaultView||window;if(A.getSelection){var E=A.getSelection(),lt=d.textContent.length,nt=Math.min(m.start,lt),_t=m.end===void 0?nt:Math.min(m.end,lt);!E.extend&&nt>_t&&(c=_t,_t=nt,nt=c);var S=Sc(d,nt),v=Sc(d,_t);if(S&&v&&(E.rangeCount!==1||E.anchorNode!==S.node||E.anchorOffset!==S.offset||E.focusNode!==v.node||E.focusOffset!==v.offset)){var O=U.createRange();O.setStart(S.node,S.offset),E.removeAllRanges(),nt>_t?(E.addRange(O),E.extend(v.node,v.offset)):(O.setEnd(v.node,v.offset),E.addRange(O))}}}}for(U=[],E=d;E=E.parentNode;)E.nodeType===1&&U.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<U.length;d++){var k=U[d];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}br=!!Lu,Pu=Lu=null}finally{wt=i,P.p=a,z.T=e}}t.current=n,nn=2}}function qh(){if(nn===2){nn=0;var t=Re,n=Ya,e=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||e){e=z.T,z.T=null;var a=P.p;P.p=2;var i=wt;wt|=4;try{ph(t,n.alternate,n)}finally{wt=i,P.p=a,z.T=e}}nn=3}}function Bh(){if(nn===4||nn===3){nn=0,U0();var t=Re,n=Ya,e=ja,a=Ah;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?nn=5:(nn=0,Ya=Re=null,Gh(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(ze=null),Kr(e),n=n.stateNode,gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(ii,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=z.T,i=P.p,P.p=2,z.T=null;try{for(var l=t.onRecoverableError,c=0;c<a.length;c++){var d=a[c];l(d.value,{componentStack:d.stack})}}finally{z.T=n,P.p=i}}(ja&3)!==0&&lr(),Kn(t),i=t.pendingLanes,(e&4194090)!==0&&(i&42)!==0?t===Du?Li++:(Li=0,Du=t):Li=0,Pi(0)}}function Gh(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,wi(n)))}function lr(t){return Uh(),qh(),Bh(),Yh()}function Yh(){if(nn!==5)return!1;var t=Re,n=Eu;Eu=0;var e=Kr(ja),a=z.T,i=P.p;try{P.p=32>e?32:e,z.T=null,e=_u,_u=null;var l=Re,c=ja;if(nn=0,Ya=Re=null,ja=0,(wt&6)!==0)throw Error(s(331));var d=wt;if(wt|=4,Oh(l.current),xh(l,l.current,c,e),wt=d,Pi(0,!1),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(ii,l)}catch{}return!0}finally{P.p=i,z.T=a,Gh(t,n)}}function jh(t,n,e){n=Mn(e,n),n=ru(t.stateNode,n,2),t=Se(t,n,2),t!==null&&(ri(t,2),Kn(t))}function Dt(t,n,e){if(t.tag===3)jh(t,t,e);else for(;n!==null;){if(n.tag===3){jh(n,t,e);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ze===null||!ze.has(a))){t=Mn(e,t),e=Zf(2),a=Se(n,e,2),a!==null&&(Qf(e,a,n,t),ri(a,2),Kn(a));break}}n=n.return}}function Cu(t,n,e){var a=t.pingCache;if(a===null){a=t.pingCache=new sg;var i=new Set;a.set(n,i)}else i=a.get(n),i===void 0&&(i=new Set,a.set(n,i));i.has(e)||(wu=!0,i.add(e),t=pg.bind(null,t,n,e),n.then(t,t))}function pg(t,n,e){var a=t.pingCache;a!==null&&a.delete(n),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,zt===t&&(bt&e)===e&&(qt===4||qt===3&&(bt&62914560)===bt&&300>Pn()-Au?(wt&2)===0&&La(t,0):Ou|=e,Ga===bt&&(Ga=0)),Kn(t)}function Lh(t,n){n===0&&(n=qs()),t=Ta(t,n),t!==null&&(ri(t,n),Kn(t))}function gg(t){var n=t.memoizedState,e=0;n!==null&&(e=n.retryLane),Lh(t,e)}function mg(t,n){var e=0;switch(t.tag){case 13:var a=t.stateNode,i=t.memoizedState;i!==null&&(e=i.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(n),Lh(t,e)}function bg(t,n){return Xr(t,n)}var rr=null,Xa=null,ku=!1,or=!1,Hu=!1,la=0;function Kn(t){t!==Xa&&t.next===null&&(Xa===null?rr=Xa=t:Xa=Xa.next=t),or=!0,ku||(ku=!0,yg())}function Pi(t,n){if(!Hu&&or){Hu=!0;do for(var e=!1,a=rr;a!==null;){if(t!==0){var i=a.pendingLanes;if(i===0)var l=0;else{var c=a.suspendedLanes,d=a.pingedLanes;l=(1<<31-mn(42|t)+1)-1,l&=i&~(c&~d),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(e=!0,Qh(a,l))}else l=bt,l=dl(a,a===zt?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||li(a,l)||(e=!0,Qh(a,l));a=a.next}while(e);Hu=!1}}function vg(){Ph()}function Ph(){or=ku=!1;var t=0;la!==0&&(_g()&&(t=la),la=0);for(var n=Pn(),e=null,a=rr;a!==null;){var i=a.next,l=Xh(a,n);l===0?(a.next=null,e===null?rr=i:e.next=i,i===null&&(Xa=e)):(e=a,(t!==0||(l&3)!==0)&&(or=!0)),a=i}Pi(t)}function Xh(t,n){for(var e=t.suspendedLanes,a=t.pingedLanes,i=t.expirationTimes,l=t.pendingLanes&-62914561;0<l;){var c=31-mn(l),d=1<<c,m=i[c];m===-1?((d&e)===0||(d&a)!==0)&&(i[c]=X0(d,n)):m<=n&&(t.expiredLanes|=d),l&=~d}if(n=zt,e=bt,e=dl(t,t===n?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,e===0||t===n&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Zr(a),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||li(t,e)){if(n=e&-e,n===t.callbackPriority)return n;switch(a!==null&&Zr(a),Kr(e)){case 2:case 8:e=Hs;break;case 32:e=cl;break;case 268435456:e=Ns;break;default:e=cl}return a=Zh.bind(null,t),e=Xr(e,a),t.callbackPriority=n,t.callbackNode=e,n}return a!==null&&a!==null&&Zr(a),t.callbackPriority=2,t.callbackNode=null,2}function Zh(t,n){if(nn!==0&&nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(lr()&&t.callbackNode!==e)return null;var a=bt;return a=dl(t,t===zt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(_h(t,a,n),Xh(t,Pn()),t.callbackNode!=null&&t.callbackNode===e?Zh.bind(null,t):null)}function Qh(t,n){if(lr())return null;_h(t,n,!0)}function yg(){Mg(function(){(wt&6)!==0?Xr(ks,vg):Ph()})}function Nu(){return la===0&&(la=Us()),la}function Vh(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:vl(""+t)}function Kh(t,n){var e=n.ownerDocument.createElement("input");return e.name=n.name,e.value=n.value,t.id&&e.setAttribute("form",t.id),n.parentNode.insertBefore(e,n),t=new FormData(t),e.parentNode.removeChild(e),t}function xg(t,n,e,a,i){if(n==="submit"&&e&&e.stateNode===i){var l=Vh((i[sn]||null).action),c=a.submitter;c&&(n=(n=c[sn]||null)?Vh(n.formAction):c.getAttribute("formAction"),n!==null&&(l=n,c=null));var d=new wl("action","action",null,a,i);t.push({event:d,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(la!==0){var m=c?Kh(i,c):new FormData(i);nu(e,{pending:!0,data:m,method:i.method,action:l},null,m)}}else typeof l=="function"&&(d.preventDefault(),m=c?Kh(i,c):new FormData(i),nu(e,{pending:!0,data:m,method:i.method,action:l},l,m))},currentTarget:i}]})}}for(var Uu=0;Uu<xo.length;Uu++){var qu=xo[Uu],Sg=qu.toLowerCase(),wg=qu[0].toUpperCase()+qu.slice(1);qn(Sg,"on"+wg)}qn(Ec,"onAnimationEnd"),qn(_c,"onAnimationIteration"),qn(Dc,"onAnimationStart"),qn("dblclick","onDoubleClick"),qn("focusin","onFocus"),qn("focusout","onBlur"),qn(Gp,"onTransitionRun"),qn(Yp,"onTransitionStart"),qn(jp,"onTransitionCancel"),qn(Mc,"onTransitionEnd"),pa("onMouseEnter",["mouseout","mouseover"]),pa("onMouseLeave",["mouseout","mouseover"]),pa("onPointerEnter",["pointerout","pointerover"]),pa("onPointerLeave",["pointerout","pointerover"]),Pe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Og=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xi));function Jh(t,n){n=(n&4)!==0;for(var e=0;e<t.length;e++){var a=t[e],i=a.event;a=a.listeners;t:{var l=void 0;if(n)for(var c=a.length-1;0<=c;c--){var d=a[c],m=d.instance,T=d.currentTarget;if(d=d.listener,m!==l&&i.isPropagationStopped())break t;l=d,i.currentTarget=T;try{l(i)}catch(R){Kl(R)}i.currentTarget=null,l=m}else for(c=0;c<a.length;c++){if(d=a[c],m=d.instance,T=d.currentTarget,d=d.listener,m!==l&&i.isPropagationStopped())break t;l=d,i.currentTarget=T;try{l(i)}catch(R){Kl(R)}i.currentTarget=null,l=m}}}}function mt(t,n){var e=n[Jr];e===void 0&&(e=n[Jr]=new Set);var a=t+"__bubble";e.has(a)||($h(n,t,2,!1),e.add(a))}function Bu(t,n,e){var a=0;n&&(a|=4),$h(e,t,a,n)}var ur="_reactListening"+Math.random().toString(36).slice(2);function Gu(t){if(!t[ur]){t[ur]=!0,Ls.forEach(function(e){e!=="selectionchange"&&(Og.has(e)||Bu(e,!1,t),Bu(e,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ur]||(n[ur]=!0,Bu("selectionchange",!1,n))}}function $h(t,n,e,a){switch(xd(n)){case 2:var i=$g;break;case 8:i=Wg;break;default:i=Iu}e=i.bind(null,n,e,t),i=void 0,!ro||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),a?i!==void 0?t.addEventListener(n,e,{capture:!0,passive:i}):t.addEventListener(n,e,!0):i!==void 0?t.addEventListener(n,e,{passive:i}):t.addEventListener(n,e,!1)}function Yu(t,n,e,a,i){var l=a;if((n&1)===0&&(n&2)===0&&a!==null)t:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var d=a.stateNode.containerInfo;if(d===i)break;if(c===4)for(c=a.return;c!==null;){var m=c.tag;if((m===3||m===4)&&c.stateNode.containerInfo===i)return;c=c.return}for(;d!==null;){if(c=fa(d),c===null)return;if(m=c.tag,m===5||m===6||m===26||m===27){a=l=c;continue t}d=d.parentNode}}a=a.return}ec(function(){var T=l,R=io(e),U=[];t:{var A=zc.get(t);if(A!==void 0){var E=wl,lt=t;switch(t){case"keypress":if(xl(e)===0)break t;case"keydown":case"keyup":E=bp;break;case"focusin":lt="focus",E=co;break;case"focusout":lt="blur",E=co;break;case"beforeblur":case"afterblur":E=co;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=lc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=lp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=xp;break;case Ec:case _c:case Dc:E=up;break;case Mc:E=wp;break;case"scroll":case"scrollend":E=ap;break;case"wheel":E=Tp;break;case"copy":case"cut":case"paste":E=cp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=oc;break;case"toggle":case"beforetoggle":E=Ep}var nt=(n&4)!==0,_t=!nt&&(t==="scroll"||t==="scrollend"),S=nt?A!==null?A+"Capture":null:A;nt=[];for(var v=T,O;v!==null;){var k=v;if(O=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||O===null||S===null||(k=si(v,S),k!=null&&nt.push(Zi(v,k,O))),_t)break;v=v.return}0<nt.length&&(A=new E(A,lt,null,e,R),U.push({event:A,listeners:nt}))}}if((n&7)===0){t:{if(A=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",A&&e!==ao&&(lt=e.relatedTarget||e.fromElement)&&(fa(lt)||lt[ca]))break t;if((E||A)&&(A=R.window===R?R:(A=R.ownerDocument)?A.defaultView||A.parentWindow:window,E?(lt=e.relatedTarget||e.toElement,E=T,lt=lt?fa(lt):null,lt!==null&&(_t=y(lt),nt=lt.tag,lt!==_t||nt!==5&&nt!==27&&nt!==6)&&(lt=null)):(E=null,lt=T),E!==lt)){if(nt=lc,k="onMouseLeave",S="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(nt=oc,k="onPointerLeave",S="onPointerEnter",v="pointer"),_t=E==null?A:ui(E),O=lt==null?A:ui(lt),A=new nt(k,v+"leave",E,e,R),A.target=_t,A.relatedTarget=O,k=null,fa(R)===T&&(nt=new nt(S,v+"enter",lt,e,R),nt.target=O,nt.relatedTarget=_t,k=nt),_t=k,E&&lt)n:{for(nt=E,S=lt,v=0,O=nt;O;O=Za(O))v++;for(O=0,k=S;k;k=Za(k))O++;for(;0<v-O;)nt=Za(nt),v--;for(;0<O-v;)S=Za(S),O--;for(;v--;){if(nt===S||S!==null&&nt===S.alternate)break n;nt=Za(nt),S=Za(S)}nt=null}else nt=null;E!==null&&Wh(U,A,E,nt,!1),lt!==null&&_t!==null&&Wh(U,_t,lt,nt,!0)}}t:{if(A=T?ui(T):window,E=A.nodeName&&A.nodeName.toLowerCase(),E==="select"||E==="input"&&A.type==="file")var Q=gc;else if(dc(A))if(mc)Q=Up;else{Q=Hp;var ht=kp}else E=A.nodeName,!E||E.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?T&&eo(T.elementType)&&(Q=gc):Q=Np;if(Q&&(Q=Q(t,T))){pc(U,Q,e,R);break t}ht&&ht(t,A,T),t==="focusout"&&T&&A.type==="number"&&T.memoizedProps.value!=null&&no(A,"number",A.value)}switch(ht=T?ui(T):window,t){case"focusin":(dc(ht)||ht.contentEditable==="true")&&(Sa=ht,bo=T,bi=null);break;case"focusout":bi=bo=Sa=null;break;case"mousedown":vo=!0;break;case"contextmenu":case"mouseup":case"dragend":vo=!1,Tc(U,e,R);break;case"selectionchange":if(Bp)break;case"keydown":case"keyup":Tc(U,e,R)}var K;if(ho)t:{switch(t){case"compositionstart":var at="onCompositionStart";break t;case"compositionend":at="onCompositionEnd";break t;case"compositionupdate":at="onCompositionUpdate";break t}at=void 0}else xa?fc(t,e)&&(at="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(at="onCompositionStart");at&&(uc&&e.locale!=="ko"&&(xa||at!=="onCompositionStart"?at==="onCompositionEnd"&&xa&&(K=ac()):(be=R,oo="value"in be?be.value:be.textContent,xa=!0)),ht=sr(T,at),0<ht.length&&(at=new rc(at,t,null,e,R),U.push({event:at,listeners:ht}),K?at.data=K:(K=hc(e),K!==null&&(at.data=K)))),(K=Dp?Mp(t,e):zp(t,e))&&(at=sr(T,"onBeforeInput"),0<at.length&&(ht=new rc("onBeforeInput","beforeinput",null,e,R),U.push({event:ht,listeners:at}),ht.data=K)),xg(U,t,T,e,R)}Jh(U,n)})}function Zi(t,n,e){return{instance:t,listener:n,currentTarget:e}}function sr(t,n){for(var e=n+"Capture",a=[];t!==null;){var i=t,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=si(t,e),i!=null&&a.unshift(Zi(t,i,l)),i=si(t,n),i!=null&&a.push(Zi(t,i,l))),t.tag===3)return a;t=t.return}return[]}function Za(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Wh(t,n,e,a,i){for(var l=n._reactName,c=[];e!==null&&e!==a;){var d=e,m=d.alternate,T=d.stateNode;if(d=d.tag,m!==null&&m===a)break;d!==5&&d!==26&&d!==27||T===null||(m=T,i?(T=si(e,l),T!=null&&c.unshift(Zi(e,T,m))):i||(T=si(e,l),T!=null&&c.push(Zi(e,T,m)))),e=e.return}c.length!==0&&t.push({event:n,listeners:c})}var Tg=/\r\n?/g,Ag=/\u0000|\uFFFD/g;function Fh(t){return(typeof t=="string"?t:""+t).replace(Tg,`
`).replace(Ag,"")}function Ih(t,n){return n=Fh(n),Fh(t)===n}function cr(){}function Et(t,n,e,a,i,l){switch(e){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||ba(t,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&ba(t,""+a);break;case"className":gl(t,"class",a);break;case"tabIndex":gl(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":gl(t,e,a);break;case"style":tc(t,a,l);break;case"data":if(n!=="object"){gl(t,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||e!=="href")){t.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=vl(""+a),t.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(e==="formAction"?(n!=="input"&&Et(t,n,"name",i.name,i,null),Et(t,n,"formEncType",i.formEncType,i,null),Et(t,n,"formMethod",i.formMethod,i,null),Et(t,n,"formTarget",i.formTarget,i,null)):(Et(t,n,"encType",i.encType,i,null),Et(t,n,"method",i.method,i,null),Et(t,n,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=vl(""+a),t.setAttribute(e,a);break;case"onClick":a!=null&&(t.onclick=cr);break;case"onScroll":a!=null&&mt("scroll",t);break;case"onScrollEnd":a!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(e=a.__html,e!=null){if(i.children!=null)throw Error(s(60));t.innerHTML=e}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}e=vl(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""+a):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":a===!0?t.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,a):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(e,a):t.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(e):t.setAttribute(e,a);break;case"popover":mt("beforetoggle",t),mt("toggle",t),pl(t,"popover",a);break;case"xlinkActuate":Fn(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Fn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Fn(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Fn(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Fn(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Fn(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Fn(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Fn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Fn(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":pl(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=np.get(e)||e,pl(t,e,a))}}function ju(t,n,e,a,i,l){switch(e){case"style":tc(t,a,l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(e=a.__html,e!=null){if(i.children!=null)throw Error(s(60));t.innerHTML=e}}break;case"children":typeof a=="string"?ba(t,a):(typeof a=="number"||typeof a=="bigint")&&ba(t,""+a);break;case"onScroll":a!=null&&mt("scroll",t);break;case"onScrollEnd":a!=null&&mt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=cr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ps.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(i=e.endsWith("Capture"),n=e.slice(2,i?e.length-7:void 0),l=t[sn]||null,l=l!=null?l[e]:null,typeof l=="function"&&t.removeEventListener(n,l,i),typeof a=="function")){typeof l!="function"&&l!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(n,a,i);break t}e in t?t[e]=a:a===!0?t.setAttribute(e,""):pl(t,e,a)}}}function en(t,n,e){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var a=!1,i=!1,l;for(l in e)if(e.hasOwnProperty(l)){var c=e[l];if(c!=null)switch(l){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Et(t,n,l,c,e,null)}}i&&Et(t,n,"srcSet",e.srcSet,e,null),a&&Et(t,n,"src",e.src,e,null);return;case"input":mt("invalid",t);var d=l=c=i=null,m=null,T=null;for(a in e)if(e.hasOwnProperty(a)){var R=e[a];if(R!=null)switch(a){case"name":i=R;break;case"type":c=R;break;case"checked":m=R;break;case"defaultChecked":T=R;break;case"value":l=R;break;case"defaultValue":d=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(137,n));break;default:Et(t,n,a,R,e,null)}}$s(t,l,d,m,T,c,i,!1),ml(t);return;case"select":mt("invalid",t),a=c=l=null;for(i in e)if(e.hasOwnProperty(i)&&(d=e[i],d!=null))switch(i){case"value":l=d;break;case"defaultValue":c=d;break;case"multiple":a=d;default:Et(t,n,i,d,e,null)}n=l,e=c,t.multiple=!!a,n!=null?ma(t,!!a,n,!1):e!=null&&ma(t,!!a,e,!0);return;case"textarea":mt("invalid",t),l=i=a=null;for(c in e)if(e.hasOwnProperty(c)&&(d=e[c],d!=null))switch(c){case"value":a=d;break;case"defaultValue":i=d;break;case"children":l=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(s(91));break;default:Et(t,n,c,d,e,null)}Fs(t,a,i,l),ml(t);return;case"option":for(m in e)if(e.hasOwnProperty(m)&&(a=e[m],a!=null))switch(m){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Et(t,n,m,a,e,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(a=0;a<Xi.length;a++)mt(Xi[a],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in e)if(e.hasOwnProperty(T)&&(a=e[T],a!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Et(t,n,T,a,e,null)}return;default:if(eo(n)){for(R in e)e.hasOwnProperty(R)&&(a=e[R],a!==void 0&&ju(t,n,R,a,e,void 0));return}}for(d in e)e.hasOwnProperty(d)&&(a=e[d],a!=null&&Et(t,n,d,a,e,null))}function Eg(t,n,e,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,c=null,d=null,m=null,T=null,R=null;for(E in e){var U=e[E];if(e.hasOwnProperty(E)&&U!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":m=U;default:a.hasOwnProperty(E)||Et(t,n,E,null,a,U)}}for(var A in a){var E=a[A];if(U=e[A],a.hasOwnProperty(A)&&(E!=null||U!=null))switch(A){case"type":l=E;break;case"name":i=E;break;case"checked":T=E;break;case"defaultChecked":R=E;break;case"value":c=E;break;case"defaultValue":d=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(137,n));break;default:E!==U&&Et(t,n,A,E,a,U)}}to(t,c,d,m,T,R,l,i);return;case"select":E=c=d=A=null;for(l in e)if(m=e[l],e.hasOwnProperty(l)&&m!=null)switch(l){case"value":break;case"multiple":E=m;default:a.hasOwnProperty(l)||Et(t,n,l,null,a,m)}for(i in a)if(l=a[i],m=e[i],a.hasOwnProperty(i)&&(l!=null||m!=null))switch(i){case"value":A=l;break;case"defaultValue":d=l;break;case"multiple":c=l;default:l!==m&&Et(t,n,i,l,a,m)}n=d,e=c,a=E,A!=null?ma(t,!!e,A,!1):!!a!=!!e&&(n!=null?ma(t,!!e,n,!0):ma(t,!!e,e?[]:"",!1));return;case"textarea":E=A=null;for(d in e)if(i=e[d],e.hasOwnProperty(d)&&i!=null&&!a.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Et(t,n,d,null,a,i)}for(c in a)if(i=a[c],l=e[c],a.hasOwnProperty(c)&&(i!=null||l!=null))switch(c){case"value":A=i;break;case"defaultValue":E=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==l&&Et(t,n,c,i,a,l)}Ws(t,A,E);return;case"option":for(var lt in e)if(A=e[lt],e.hasOwnProperty(lt)&&A!=null&&!a.hasOwnProperty(lt))switch(lt){case"selected":t.selected=!1;break;default:Et(t,n,lt,null,a,A)}for(m in a)if(A=a[m],E=e[m],a.hasOwnProperty(m)&&A!==E&&(A!=null||E!=null))switch(m){case"selected":t.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:Et(t,n,m,A,a,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in e)A=e[nt],e.hasOwnProperty(nt)&&A!=null&&!a.hasOwnProperty(nt)&&Et(t,n,nt,null,a,A);for(T in a)if(A=a[T],E=e[T],a.hasOwnProperty(T)&&A!==E&&(A!=null||E!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,n));break;default:Et(t,n,T,A,a,E)}return;default:if(eo(n)){for(var _t in e)A=e[_t],e.hasOwnProperty(_t)&&A!==void 0&&!a.hasOwnProperty(_t)&&ju(t,n,_t,void 0,a,A);for(R in a)A=a[R],E=e[R],!a.hasOwnProperty(R)||A===E||A===void 0&&E===void 0||ju(t,n,R,A,a,E);return}}for(var S in e)A=e[S],e.hasOwnProperty(S)&&A!=null&&!a.hasOwnProperty(S)&&Et(t,n,S,null,a,A);for(U in a)A=a[U],E=e[U],!a.hasOwnProperty(U)||A===E||A==null&&E==null||Et(t,n,U,A,a,E)}var Lu=null,Pu=null;function fr(t){return t.nodeType===9?t:t.ownerDocument}function td(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nd(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Xu(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zu=null;function _g(){var t=window.event;return t&&t.type==="popstate"?t===Zu?!1:(Zu=t,!0):(Zu=null,!1)}var ed=typeof setTimeout=="function"?setTimeout:void 0,Dg=typeof clearTimeout=="function"?clearTimeout:void 0,ad=typeof Promise=="function"?Promise:void 0,Mg=typeof queueMicrotask=="function"?queueMicrotask:typeof ad<"u"?function(t){return ad.resolve(null).then(t).catch(zg)}:ed;function zg(t){setTimeout(function(){throw t})}function ke(t){return t==="head"}function id(t,n){var e=n,a=0,i=0;do{var l=e.nextSibling;if(t.removeChild(e),l&&l.nodeType===8)if(e=l.data,e==="/$"){if(0<a&&8>a){e=a;var c=t.ownerDocument;if(e&1&&Qi(c.documentElement),e&2&&Qi(c.body),e&4)for(e=c.head,Qi(e),c=e.firstChild;c;){var d=c.nextSibling,m=c.nodeName;c[oi]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&c.rel.toLowerCase()==="stylesheet"||e.removeChild(c),c=d}}if(i===0){t.removeChild(l),tl(n);return}i--}else e==="$"||e==="$?"||e==="$!"?i++:a=e.charCodeAt(0)-48;else a=0;e=l}while(e);tl(n)}function Qu(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var e=n;switch(n=n.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Qu(e),$r(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function Rg(t,n,e,a){for(;t.nodeType===1;){var i=e;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[oi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(l=t.getAttribute("rel"),l==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(l!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(l=t.getAttribute("src"),(l!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===l)return t}else return t;if(t=Gn(t.nextSibling),t===null)break}return null}function Cg(t,n,e){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Gn(t.nextSibling),t===null))return null;return t}function Vu(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function kg(t,n){var e=t.ownerDocument;if(t.data!=="$?"||e.readyState==="complete")n();else{var a=function(){n(),e.removeEventListener("DOMContentLoaded",a)};e.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Gn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Ku=null;function ld(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"){if(n===0)return t;n--}else e==="/$"&&n++}t=t.previousSibling}return null}function rd(t,n,e){switch(n=fr(e),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Qi(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);$r(t)}var Nn=new Map,od=new Set;function hr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var he=P.d;P.d={f:Hg,r:Ng,D:Ug,C:qg,L:Bg,m:Gg,X:jg,S:Yg,M:Lg};function Hg(){var t=he.f(),n=ar();return t||n}function Ng(t){var n=ha(t);n!==null&&n.tag===5&&n.type==="form"?_f(n):he.r(t)}var Qa=typeof document>"u"?null:document;function ud(t,n,e){var a=Qa;if(a&&typeof n=="string"&&n){var i=Dn(n);i='link[rel="'+t+'"][href="'+i+'"]',typeof e=="string"&&(i+='[crossorigin="'+e+'"]'),od.has(i)||(od.add(i),t={rel:t,crossOrigin:e,href:n},a.querySelector(i)===null&&(n=a.createElement("link"),en(n,"link",t),Jt(n),a.head.appendChild(n)))}}function Ug(t){he.D(t),ud("dns-prefetch",t,null)}function qg(t,n){he.C(t,n),ud("preconnect",t,n)}function Bg(t,n,e){he.L(t,n,e);var a=Qa;if(a&&t&&n){var i='link[rel="preload"][as="'+Dn(n)+'"]';n==="image"&&e&&e.imageSrcSet?(i+='[imagesrcset="'+Dn(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(i+='[imagesizes="'+Dn(e.imageSizes)+'"]')):i+='[href="'+Dn(t)+'"]';var l=i;switch(n){case"style":l=Va(t);break;case"script":l=Ka(t)}Nn.has(l)||(t=N({rel:"preload",href:n==="image"&&e&&e.imageSrcSet?void 0:t,as:n},e),Nn.set(l,t),a.querySelector(i)!==null||n==="style"&&a.querySelector(Vi(l))||n==="script"&&a.querySelector(Ki(l))||(n=a.createElement("link"),en(n,"link",t),Jt(n),a.head.appendChild(n)))}}function Gg(t,n){he.m(t,n);var e=Qa;if(e&&t){var a=n&&typeof n.as=="string"?n.as:"script",i='link[rel="modulepreload"][as="'+Dn(a)+'"][href="'+Dn(t)+'"]',l=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Ka(t)}if(!Nn.has(l)&&(t=N({rel:"modulepreload",href:t},n),Nn.set(l,t),e.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(Ki(l)))return}a=e.createElement("link"),en(a,"link",t),Jt(a),e.head.appendChild(a)}}}function Yg(t,n,e){he.S(t,n,e);var a=Qa;if(a&&t){var i=da(a).hoistableStyles,l=Va(t);n=n||"default";var c=i.get(l);if(!c){var d={loading:0,preload:null};if(c=a.querySelector(Vi(l)))d.loading=5;else{t=N({rel:"stylesheet",href:t,"data-precedence":n},e),(e=Nn.get(l))&&Ju(t,e);var m=c=a.createElement("link");Jt(m),en(m,"link",t),m._p=new Promise(function(T,R){m.onload=T,m.onerror=R}),m.addEventListener("load",function(){d.loading|=1}),m.addEventListener("error",function(){d.loading|=2}),d.loading|=4,dr(c,n,a)}c={type:"stylesheet",instance:c,count:1,state:d},i.set(l,c)}}}function jg(t,n){he.X(t,n);var e=Qa;if(e&&t){var a=da(e).hoistableScripts,i=Ka(t),l=a.get(i);l||(l=e.querySelector(Ki(i)),l||(t=N({src:t,async:!0},n),(n=Nn.get(i))&&$u(t,n),l=e.createElement("script"),Jt(l),en(l,"link",t),e.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function Lg(t,n){he.M(t,n);var e=Qa;if(e&&t){var a=da(e).hoistableScripts,i=Ka(t),l=a.get(i);l||(l=e.querySelector(Ki(i)),l||(t=N({src:t,async:!0,type:"module"},n),(n=Nn.get(i))&&$u(t,n),l=e.createElement("script"),Jt(l),en(l,"link",t),e.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function sd(t,n,e,a){var i=(i=et.current)?hr(i):null;if(!i)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(n=Va(e.href),e=da(i).hoistableStyles,a=e.get(n),a||(a={type:"style",instance:null,count:0,state:null},e.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=Va(e.href);var l=da(i).hoistableStyles,c=l.get(t);if(c||(i=i.ownerDocument||i,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(t,c),(l=i.querySelector(Vi(t)))&&!l._p&&(c.instance=l,c.state.loading=5),Nn.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},Nn.set(t,e),l||Pg(i,t,e,c.state))),n&&a===null)throw Error(s(528,""));return c}if(n&&a!==null)throw Error(s(529,""));return null;case"script":return n=e.async,e=e.src,typeof e=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ka(e),e=da(i).hoistableScripts,a=e.get(n),a||(a={type:"script",instance:null,count:0,state:null},e.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Va(t){return'href="'+Dn(t)+'"'}function Vi(t){return'link[rel="stylesheet"]['+t+"]"}function cd(t){return N({},t,{"data-precedence":t.precedence,precedence:null})}function Pg(t,n,e,a){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=t.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),en(n,"link",e),Jt(n),t.head.appendChild(n))}function Ka(t){return'[src="'+Dn(t)+'"]'}function Ki(t){return"script[async]"+t}function fd(t,n,e){if(n.count++,n.instance===null)switch(n.type){case"style":var a=t.querySelector('style[data-href~="'+Dn(e.href)+'"]');if(a)return n.instance=a,Jt(a),a;var i=N({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Jt(a),en(a,"style",i),dr(a,e.precedence,t),n.instance=a;case"stylesheet":i=Va(e.href);var l=t.querySelector(Vi(i));if(l)return n.state.loading|=4,n.instance=l,Jt(l),l;a=cd(e),(i=Nn.get(i))&&Ju(a,i),l=(t.ownerDocument||t).createElement("link"),Jt(l);var c=l;return c._p=new Promise(function(d,m){c.onload=d,c.onerror=m}),en(l,"link",a),n.state.loading|=4,dr(l,e.precedence,t),n.instance=l;case"script":return l=Ka(e.src),(i=t.querySelector(Ki(l)))?(n.instance=i,Jt(i),i):(a=e,(i=Nn.get(l))&&(a=N({},e),$u(a,i)),t=t.ownerDocument||t,i=t.createElement("script"),Jt(i),en(i,"link",a),t.head.appendChild(i),n.instance=i);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,dr(a,e.precedence,t));return n.instance}function dr(t,n,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,l=i,c=0;c<a.length;c++){var d=a[c];if(d.dataset.precedence===n)l=d;else if(l!==i)break}l?l.parentNode.insertBefore(t,l.nextSibling):(n=e.nodeType===9?e.head:e,n.insertBefore(t,n.firstChild))}function Ju(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function $u(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var pr=null;function hd(t,n,e){if(pr===null){var a=new Map,i=pr=new Map;i.set(e,a)}else i=pr,a=i.get(e),a||(a=new Map,i.set(e,a));if(a.has(t))return a;for(a.set(t,null),e=e.getElementsByTagName(t),i=0;i<e.length;i++){var l=e[i];if(!(l[oi]||l[ln]||t==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var c=l.getAttribute(n)||"";c=t+c;var d=a.get(c);d?d.push(l):a.set(c,[l])}}return a}function dd(t,n,e){t=t.ownerDocument||t,t.head.insertBefore(e,n==="title"?t.querySelector("head > title"):null)}function Xg(t,n,e){if(e===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function pd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ji=null;function Zg(){}function Qg(t,n,e){if(Ji===null)throw Error(s(475));var a=Ji;if(n.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=Va(e.href),l=t.querySelector(Vi(i));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=gr.bind(a),t.then(a,a)),n.state.loading|=4,n.instance=l,Jt(l);return}l=t.ownerDocument||t,e=cd(e),(i=Nn.get(i))&&Ju(e,i),l=l.createElement("link"),Jt(l);var c=l;c._p=new Promise(function(d,m){c.onload=d,c.onerror=m}),en(l,"link",e),n.instance=l}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(a.count++,n=gr.bind(a),t.addEventListener("load",n),t.addEventListener("error",n))}}function Vg(){if(Ji===null)throw Error(s(475));var t=Ji;return t.stylesheets&&t.count===0&&Wu(t,t.stylesheets),0<t.count?function(n){var e=setTimeout(function(){if(t.stylesheets&&Wu(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(e)}}:null}function gr(){if(this.count--,this.count===0){if(this.stylesheets)Wu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mr=null;function Wu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mr=new Map,n.forEach(Kg,t),mr=null,gr.call(t))}function Kg(t,n){if(!(n.state.loading&4)){var e=mr.get(t);if(e)var a=e.get(null);else{e=new Map,mr.set(t,e);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var c=i[l];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(e.set(c.dataset.precedence,c),a=c)}a&&e.set(null,a)}i=n.instance,c=i.getAttribute("data-precedence"),l=e.get(c)||a,l===a&&e.set(null,i),e.set(c,i),this.count++,a=gr.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),l?l.parentNode.insertBefore(i,l.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),n.state.loading|=4}}var $i={$$typeof:C,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function Jg(t,n,e,a,i,l,c,d){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qr(0),this.hiddenUpdates=Qr(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function gd(t,n,e,a,i,l,c,d,m,T,R,U){return t=new Jg(t,n,e,c,d,m,T,U),n=1,l===!0&&(n|=24),l=vn(3,null,null,n),t.current=l,l.stateNode=t,n=Co(),n.refCount++,t.pooledCache=n,n.refCount++,l.memoizedState={element:a,isDehydrated:e,cache:n},Uo(l),t}function md(t){return t?(t=Aa,t):Aa}function bd(t,n,e,a,i,l){i=md(i),a.context===null?a.context=i:a.pendingContext=i,a=xe(n),a.payload={element:e},l=l===void 0?null:l,l!==null&&(a.callback=l),e=Se(t,a,n),e!==null&&(On(e,t,n),Ei(e,t,n))}function vd(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<n?e:n}}function Fu(t,n){vd(t,n),(t=t.alternate)&&vd(t,n)}function yd(t){if(t.tag===13){var n=Ta(t,67108864);n!==null&&On(n,t,67108864),Fu(t,67108864)}}var br=!0;function $g(t,n,e,a){var i=z.T;z.T=null;var l=P.p;try{P.p=2,Iu(t,n,e,a)}finally{P.p=l,z.T=i}}function Wg(t,n,e,a){var i=z.T;z.T=null;var l=P.p;try{P.p=8,Iu(t,n,e,a)}finally{P.p=l,z.T=i}}function Iu(t,n,e,a){if(br){var i=ts(a);if(i===null)Yu(t,n,a,vr,e),Sd(t,a);else if(Ig(i,t,n,e,a))a.stopPropagation();else if(Sd(t,a),n&4&&-1<Fg.indexOf(t)){for(;i!==null;){var l=ha(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var c=Le(l.pendingLanes);if(c!==0){var d=l;for(d.pendingLanes|=2,d.entangledLanes|=2;c;){var m=1<<31-mn(c);d.entanglements[1]|=m,c&=~m}Kn(l),(wt&6)===0&&(nr=Pn()+500,Pi(0))}}break;case 13:d=Ta(l,2),d!==null&&On(d,l,2),ar(),Fu(l,2)}if(l=ts(a),l===null&&Yu(t,n,a,vr,e),l===i)break;i=l}i!==null&&a.stopPropagation()}else Yu(t,n,a,null,e)}}function ts(t){return t=io(t),ns(t)}var vr=null;function ns(t){if(vr=null,t=fa(t),t!==null){var n=y(t);if(n===null)t=null;else{var e=n.tag;if(e===13){if(t=_(n),t!==null)return t;t=null}else if(e===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return vr=t,null}function xd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q0()){case ks:return 2;case Hs:return 8;case cl:case B0:return 32;case Ns:return 268435456;default:return 32}default:return 32}}var es=!1,He=null,Ne=null,Ue=null,Wi=new Map,Fi=new Map,qe=[],Fg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sd(t,n){switch(t){case"focusin":case"focusout":He=null;break;case"dragenter":case"dragleave":Ne=null;break;case"mouseover":case"mouseout":Ue=null;break;case"pointerover":case"pointerout":Wi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(n.pointerId)}}function Ii(t,n,e,a,i,l){return t===null||t.nativeEvent!==l?(t={blockedOn:n,domEventName:e,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},n!==null&&(n=ha(n),n!==null&&yd(n)),t):(t.eventSystemFlags|=a,n=t.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),t)}function Ig(t,n,e,a,i){switch(n){case"focusin":return He=Ii(He,t,n,e,a,i),!0;case"dragenter":return Ne=Ii(Ne,t,n,e,a,i),!0;case"mouseover":return Ue=Ii(Ue,t,n,e,a,i),!0;case"pointerover":var l=i.pointerId;return Wi.set(l,Ii(Wi.get(l)||null,t,n,e,a,i)),!0;case"gotpointercapture":return l=i.pointerId,Fi.set(l,Ii(Fi.get(l)||null,t,n,e,a,i)),!0}return!1}function wd(t){var n=fa(t.target);if(n!==null){var e=y(n);if(e!==null){if(n=e.tag,n===13){if(n=_(e),n!==null){t.blockedOn=n,Q0(t.priority,function(){if(e.tag===13){var a=wn();a=Vr(a);var i=Ta(e,a);i!==null&&On(i,e,a),Fu(e,a)}});return}}else if(n===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yr(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var e=ts(t.nativeEvent);if(e===null){e=t.nativeEvent;var a=new e.constructor(e.type,e);ao=a,e.target.dispatchEvent(a),ao=null}else return n=ha(e),n!==null&&yd(n),t.blockedOn=e,!1;n.shift()}return!0}function Od(t,n,e){yr(t)&&e.delete(n)}function tm(){es=!1,He!==null&&yr(He)&&(He=null),Ne!==null&&yr(Ne)&&(Ne=null),Ue!==null&&yr(Ue)&&(Ue=null),Wi.forEach(Od),Fi.forEach(Od)}function xr(t,n){t.blockedOn===n&&(t.blockedOn=null,es||(es=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,tm)))}var Sr=null;function Td(t){Sr!==t&&(Sr=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Sr===t&&(Sr=null);for(var n=0;n<t.length;n+=3){var e=t[n],a=t[n+1],i=t[n+2];if(typeof a!="function"){if(ns(a||e)===null)continue;break}var l=ha(e);l!==null&&(t.splice(n,3),n-=3,nu(l,{pending:!0,data:i,method:e.method,action:a},a,i))}}))}function tl(t){function n(m){return xr(m,t)}He!==null&&xr(He,t),Ne!==null&&xr(Ne,t),Ue!==null&&xr(Ue,t),Wi.forEach(n),Fi.forEach(n);for(var e=0;e<qe.length;e++){var a=qe[e];a.blockedOn===t&&(a.blockedOn=null)}for(;0<qe.length&&(e=qe[0],e.blockedOn===null);)wd(e),e.blockedOn===null&&qe.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var i=e[a],l=e[a+1],c=i[sn]||null;if(typeof l=="function")c||Td(e);else if(c){var d=null;if(l&&l.hasAttribute("formAction")){if(i=l,c=l[sn]||null)d=c.formAction;else if(ns(i)!==null)continue}else d=c.action;typeof d=="function"?e[a+1]=d:(e.splice(a,3),a-=3),Td(e)}}}function as(t){this._internalRoot=t}wr.prototype.render=as.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var e=n.current,a=wn();bd(e,a,t,n,null,null)},wr.prototype.unmount=as.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;bd(t.current,2,null,t,null,null),ar(),n[ca]=null}};function wr(t){this._internalRoot=t}wr.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ys();t={blockedOn:null,target:t,priority:n};for(var e=0;e<qe.length&&n!==0&&n<qe[e].priority;e++);qe.splice(e,0,t),e===0&&wd(t)}};var Ad=o.version;if(Ad!=="19.1.0")throw Error(s(527,Ad,"19.1.0"));P.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=D(n),t=t!==null?w(t):null,t=t===null?null:t.stateNode,t};var nm={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Or.isDisabled&&Or.supportsFiber)try{ii=Or.inject(nm),gn=Or}catch{}}return el.createRoot=function(t,n){if(!p(t))throw Error(s(299));var e=!1,a="",i=jf,l=Lf,c=Pf,d=null;return n!=null&&(n.unstable_strictMode===!0&&(e=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(l=n.onCaughtError),n.onRecoverableError!==void 0&&(c=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(d=n.unstable_transitionCallbacks)),n=gd(t,1,!1,null,null,e,a,i,l,c,d,null),t[ca]=n.current,Gu(t),new as(n)},el.hydrateRoot=function(t,n,e){if(!p(t))throw Error(s(299));var a=!1,i="",l=jf,c=Lf,d=Pf,m=null,T=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(d=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(m=e.unstable_transitionCallbacks),e.formState!==void 0&&(T=e.formState)),n=gd(t,1,!0,n,e??null,a,i,l,c,d,m,T),n.context=md(null),e=n.current,a=wn(),a=Vr(a),i=xe(a),i.callback=null,Se(e,i,a),e=a,n.current.lanes=e,ri(n,e),Kn(n),t[ca]=n.current,Gu(t),new wr(n)},el.version="19.1.0",el}var Nd;function hm(){if(Nd)return rs.exports;Nd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),rs.exports=fm(),rs.exports}var dm=hm();const pm=()=>{const[r,o]=Tt.useState({width:typeof window<"u"?window.innerWidth:0,height:typeof window<"u"?window.innerHeight:0});Tt.useEffect(()=>{function y(){o({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",y),y(),()=>window.removeEventListener("resize",y)},[]);const f=r.width<=768||r.height<=730;return{height:f?300:600,width:f?300:600,windowSize:r,isMobile:f}},gm=()=>{const[r,o]=Tt.useState(()=>typeof window>"u"?!1:window.innerWidth>window.innerHeight);return Tt.useEffect(()=>{function f(){o(window.innerWidth>window.innerHeight)}return window.addEventListener("resize",f),window.addEventListener("orientationchange",f),()=>{window.removeEventListener("resize",f),window.removeEventListener("orientationchange",f)}},[]),r};function Vt(r,o){o===void 0&&(o={});var f=o.insertAt;if(r&&typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],p=document.createElement("style");p.type="text/css",f==="top"&&s.firstChild?s.insertBefore(p,s.firstChild):s.appendChild(p),p.styleSheet?p.styleSheet.cssText=r:p.appendChild(document.createTextNode(r))}}Vt(`.react-loading-indicator-normalize,
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
}`);var $n=function(){return $n=Object.assign||function(r){for(var o,f=1,s=arguments.length;f<s;f++)for(var p in o=arguments[f])Object.prototype.hasOwnProperty.call(o,p)&&(r[p]=o[p]);return r},$n.apply(this,arguments)};function kr(r){return kr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},kr(r)}var mm=/^\s+/,bm=/\s+$/;function J(r,o){if(o=o||{},(r=r||"")instanceof J)return r;if(!(this instanceof J))return new J(r,o);var f=function(s){var p={r:0,g:0,b:0},y=1,_=null,G=null,D=null,w=!1,N=!1;typeof s=="string"&&(s=function(Y){Y=Y.replace(mm,"").replace(bm,"").toLowerCase();var q,V=!1;if(bs[Y])Y=bs[Y],V=!0;else if(Y=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(q=Yn.rgb.exec(Y))?{r:q[1],g:q[2],b:q[3]}:(q=Yn.rgba.exec(Y))?{r:q[1],g:q[2],b:q[3],a:q[4]}:(q=Yn.hsl.exec(Y))?{h:q[1],s:q[2],l:q[3]}:(q=Yn.hsla.exec(Y))?{h:q[1],s:q[2],l:q[3],a:q[4]}:(q=Yn.hsv.exec(Y))?{h:q[1],s:q[2],v:q[3]}:(q=Yn.hsva.exec(Y))?{h:q[1],s:q[2],v:q[3],a:q[4]}:(q=Yn.hex8.exec(Y))?{r:Tn(q[1]),g:Tn(q[2]),b:Tn(q[3]),a:jd(q[4]),format:V?"name":"hex8"}:(q=Yn.hex6.exec(Y))?{r:Tn(q[1]),g:Tn(q[2]),b:Tn(q[3]),format:V?"name":"hex"}:(q=Yn.hex4.exec(Y))?{r:Tn(q[1]+""+q[1]),g:Tn(q[2]+""+q[2]),b:Tn(q[3]+""+q[3]),a:jd(q[4]+""+q[4]),format:V?"name":"hex8"}:(q=Yn.hex3.exec(Y))?{r:Tn(q[1]+""+q[1]),g:Tn(q[2]+""+q[2]),b:Tn(q[3]+""+q[3]),format:V?"name":"hex"}:!1}(s)),kr(s)=="object"&&(de(s.r)&&de(s.g)&&de(s.b)?(j=s.r,Z=s.g,$=s.b,p={r:255*Ht(j,255),g:255*Ht(Z,255),b:255*Ht($,255)},w=!0,N=String(s.r).substr(-1)==="%"?"prgb":"rgb"):de(s.h)&&de(s.s)&&de(s.v)?(_=al(s.s),G=al(s.v),p=function(Y,q,V){Y=6*Ht(Y,360),q=Ht(q,100),V=Ht(V,100);var ut=Math.floor(Y),rt=Y-ut,C=V*(1-q),u=V*(1-rt*q),h=V*(1-(1-rt)*q),g=ut%6,x=[V,u,C,C,h,V][g],M=[h,V,V,u,C,C][g],H=[C,C,h,V,V,u][g];return{r:255*x,g:255*M,b:255*H}}(s.h,_,G),w=!0,N="hsv"):de(s.h)&&de(s.s)&&de(s.l)&&(_=al(s.s),D=al(s.l),p=function(Y,q,V){var ut,rt,C;function u(x,M,H){return H<0&&(H+=1),H>1&&(H-=1),H<1/6?x+6*(M-x)*H:H<.5?M:H<2/3?x+(M-x)*(2/3-H)*6:x}if(Y=Ht(Y,360),q=Ht(q,100),V=Ht(V,100),q===0)ut=rt=C=V;else{var h=V<.5?V*(1+q):V+q-V*q,g=2*V-h;ut=u(g,h,Y+1/3),rt=u(g,h,Y),C=u(g,h,Y-1/3)}return{r:255*ut,g:255*rt,b:255*C}}(s.h,_,D),w=!0,N="hsl"),s.hasOwnProperty("a")&&(y=s.a));var j,Z,$;return y=l0(y),{ok:w,format:s.format||N,r:Math.min(255,Math.max(p.r,0)),g:Math.min(255,Math.max(p.g,0)),b:Math.min(255,Math.max(p.b,0)),a:y}}(r);this._originalInput=r,this._r=f.r,this._g=f.g,this._b=f.b,this._a=f.a,this._roundA=Math.round(100*this._a)/100,this._format=o.format||f.format,this._gradientType=o.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=f.ok}function Ud(r,o,f){r=Ht(r,255),o=Ht(o,255),f=Ht(f,255);var s,p,y=Math.max(r,o,f),_=Math.min(r,o,f),G=(y+_)/2;if(y==_)s=p=0;else{var D=y-_;switch(p=G>.5?D/(2-y-_):D/(y+_),y){case r:s=(o-f)/D+(o<f?6:0);break;case o:s=(f-r)/D+2;break;case f:s=(r-o)/D+4}s/=6}return{h:s,s:p,l:G}}function qd(r,o,f){r=Ht(r,255),o=Ht(o,255),f=Ht(f,255);var s,p,y=Math.max(r,o,f),_=Math.min(r,o,f),G=y,D=y-_;if(p=y===0?0:D/y,y==_)s=0;else{switch(y){case r:s=(o-f)/D+(o<f?6:0);break;case o:s=(f-r)/D+2;break;case f:s=(r-o)/D+4}s/=6}return{h:s,s:p,v:G}}function Bd(r,o,f,s){var p=[jn(Math.round(r).toString(16)),jn(Math.round(o).toString(16)),jn(Math.round(f).toString(16))];return s&&p[0].charAt(0)==p[0].charAt(1)&&p[1].charAt(0)==p[1].charAt(1)&&p[2].charAt(0)==p[2].charAt(1)?p[0].charAt(0)+p[1].charAt(0)+p[2].charAt(0):p.join("")}function Gd(r,o,f,s){return[jn(r0(s)),jn(Math.round(r).toString(16)),jn(Math.round(o).toString(16)),jn(Math.round(f).toString(16))].join("")}function vm(r,o){o=o===0?0:o||10;var f=J(r).toHsl();return f.s-=o/100,f.s=qr(f.s),J(f)}function ym(r,o){o=o===0?0:o||10;var f=J(r).toHsl();return f.s+=o/100,f.s=qr(f.s),J(f)}function xm(r){return J(r).desaturate(100)}function Sm(r,o){o=o===0?0:o||10;var f=J(r).toHsl();return f.l+=o/100,f.l=qr(f.l),J(f)}function wm(r,o){o=o===0?0:o||10;var f=J(r).toRgb();return f.r=Math.max(0,Math.min(255,f.r-Math.round(-o/100*255))),f.g=Math.max(0,Math.min(255,f.g-Math.round(-o/100*255))),f.b=Math.max(0,Math.min(255,f.b-Math.round(-o/100*255))),J(f)}function Om(r,o){o=o===0?0:o||10;var f=J(r).toHsl();return f.l-=o/100,f.l=qr(f.l),J(f)}function Tm(r,o){var f=J(r).toHsl(),s=(f.h+o)%360;return f.h=s<0?360+s:s,J(f)}function Am(r){var o=J(r).toHsl();return o.h=(o.h+180)%360,J(o)}function Yd(r,o){if(isNaN(o)||o<=0)throw new Error("Argument to polyad must be a positive number");for(var f=J(r).toHsl(),s=[J(r)],p=360/o,y=1;y<o;y++)s.push(J({h:(f.h+y*p)%360,s:f.s,l:f.l}));return s}function Em(r){var o=J(r).toHsl(),f=o.h;return[J(r),J({h:(f+72)%360,s:o.s,l:o.l}),J({h:(f+216)%360,s:o.s,l:o.l})]}function _m(r,o,f){o=o||6,f=f||30;var s=J(r).toHsl(),p=360/f,y=[J(r)];for(s.h=(s.h-(p*o>>1)+720)%360;--o;)s.h=(s.h+p)%360,y.push(J(s));return y}function Dm(r,o){o=o||6;for(var f=J(r).toHsv(),s=f.h,p=f.s,y=f.v,_=[],G=1/o;o--;)_.push(J({h:s,s:p,v:y})),y=(y+G)%1;return _}J.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var r=this.toRgb();return(299*r.r+587*r.g+114*r.b)/1e3},getLuminance:function(){var r,o,f,s=this.toRgb();return r=s.r/255,o=s.g/255,f=s.b/255,.2126*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.7152*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))+.0722*(f<=.03928?f/12.92:Math.pow((f+.055)/1.055,2.4))},setAlpha:function(r){return this._a=l0(r),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var r=qd(this._r,this._g,this._b);return{h:360*r.h,s:r.s,v:r.v,a:this._a}},toHsvString:function(){var r=qd(this._r,this._g,this._b),o=Math.round(360*r.h),f=Math.round(100*r.s),s=Math.round(100*r.v);return this._a==1?"hsv("+o+", "+f+"%, "+s+"%)":"hsva("+o+", "+f+"%, "+s+"%, "+this._roundA+")"},toHsl:function(){var r=Ud(this._r,this._g,this._b);return{h:360*r.h,s:r.s,l:r.l,a:this._a}},toHslString:function(){var r=Ud(this._r,this._g,this._b),o=Math.round(360*r.h),f=Math.round(100*r.s),s=Math.round(100*r.l);return this._a==1?"hsl("+o+", "+f+"%, "+s+"%)":"hsla("+o+", "+f+"%, "+s+"%, "+this._roundA+")"},toHex:function(r){return Bd(this._r,this._g,this._b,r)},toHexString:function(r){return"#"+this.toHex(r)},toHex8:function(r){return function(o,f,s,p,y){var _=[jn(Math.round(o).toString(16)),jn(Math.round(f).toString(16)),jn(Math.round(s).toString(16)),jn(r0(p))];return y&&_[0].charAt(0)==_[0].charAt(1)&&_[1].charAt(0)==_[1].charAt(1)&&_[2].charAt(0)==_[2].charAt(1)&&_[3].charAt(0)==_[3].charAt(1)?_[0].charAt(0)+_[1].charAt(0)+_[2].charAt(0)+_[3].charAt(0):_.join("")}(this._r,this._g,this._b,this._a,r)},toHex8String:function(r){return"#"+this.toHex8(r)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Ht(this._r,255))+"%",g:Math.round(100*Ht(this._g,255))+"%",b:Math.round(100*Ht(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Ht(this._r,255))+"%, "+Math.round(100*Ht(this._g,255))+"%, "+Math.round(100*Ht(this._b,255))+"%)":"rgba("+Math.round(100*Ht(this._r,255))+"%, "+Math.round(100*Ht(this._g,255))+"%, "+Math.round(100*Ht(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Mm[Bd(this._r,this._g,this._b,!0)]||!1)},toFilter:function(r){var o="#"+Gd(this._r,this._g,this._b,this._a),f=o,s=this._gradientType?"GradientType = 1, ":"";if(r){var p=J(r);f="#"+Gd(p._r,p._g,p._b,p._a)}return"progid:DXImageTransform.Microsoft.gradient("+s+"startColorstr="+o+",endColorstr="+f+")"},toString:function(r){var o=!!r;r=r||this._format;var f=!1,s=this._a<1&&this._a>=0;return o||!s||r!=="hex"&&r!=="hex6"&&r!=="hex3"&&r!=="hex4"&&r!=="hex8"&&r!=="name"?(r==="rgb"&&(f=this.toRgbString()),r==="prgb"&&(f=this.toPercentageRgbString()),r!=="hex"&&r!=="hex6"||(f=this.toHexString()),r==="hex3"&&(f=this.toHexString(!0)),r==="hex4"&&(f=this.toHex8String(!0)),r==="hex8"&&(f=this.toHex8String()),r==="name"&&(f=this.toName()),r==="hsl"&&(f=this.toHslString()),r==="hsv"&&(f=this.toHsvString()),f||this.toHexString()):r==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return J(this.toString())},_applyModification:function(r,o){var f=r.apply(null,[this].concat([].slice.call(o)));return this._r=f._r,this._g=f._g,this._b=f._b,this.setAlpha(f._a),this},lighten:function(){return this._applyModification(Sm,arguments)},brighten:function(){return this._applyModification(wm,arguments)},darken:function(){return this._applyModification(Om,arguments)},desaturate:function(){return this._applyModification(vm,arguments)},saturate:function(){return this._applyModification(ym,arguments)},greyscale:function(){return this._applyModification(xm,arguments)},spin:function(){return this._applyModification(Tm,arguments)},_applyCombination:function(r,o){return r.apply(null,[this].concat([].slice.call(o)))},analogous:function(){return this._applyCombination(_m,arguments)},complement:function(){return this._applyCombination(Am,arguments)},monochromatic:function(){return this._applyCombination(Dm,arguments)},splitcomplement:function(){return this._applyCombination(Em,arguments)},triad:function(){return this._applyCombination(Yd,[3])},tetrad:function(){return this._applyCombination(Yd,[4])}},J.fromRatio=function(r,o){if(kr(r)=="object"){var f={};for(var s in r)r.hasOwnProperty(s)&&(f[s]=s==="a"?r[s]:al(r[s]));r=f}return J(r,o)},J.equals=function(r,o){return!(!r||!o)&&J(r).toRgbString()==J(o).toRgbString()},J.random=function(){return J.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},J.mix=function(r,o,f){f=f===0?0:f||50;var s=J(r).toRgb(),p=J(o).toRgb(),y=f/100;return J({r:(p.r-s.r)*y+s.r,g:(p.g-s.g)*y+s.g,b:(p.b-s.b)*y+s.b,a:(p.a-s.a)*y+s.a})},J.readability=function(r,o){var f=J(r),s=J(o);return(Math.max(f.getLuminance(),s.getLuminance())+.05)/(Math.min(f.getLuminance(),s.getLuminance())+.05)},J.isReadable=function(r,o,f){var s,p,y=J.readability(r,o);switch(p=!1,(s=function(_){var G,D;return G=((_=_||{level:"AA",size:"small"}).level||"AA").toUpperCase(),D=(_.size||"small").toLowerCase(),G!=="AA"&&G!=="AAA"&&(G="AA"),D!=="small"&&D!=="large"&&(D="small"),{level:G,size:D}}(f)).level+s.size){case"AAsmall":case"AAAlarge":p=y>=4.5;break;case"AAlarge":p=y>=3;break;case"AAAsmall":p=y>=7}return p},J.mostReadable=function(r,o,f){var s,p,y,_,G=null,D=0;p=(f=f||{}).includeFallbackColors,y=f.level,_=f.size;for(var w=0;w<o.length;w++)(s=J.readability(r,o[w]))>D&&(D=s,G=J(o[w]));return J.isReadable(r,G,{level:y,size:_})||!p?G:(f.includeFallbackColors=!1,J.mostReadable(r,["#fff","#000"],f))};var bs=J.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Mm=J.hexNames=function(r){var o={};for(var f in r)r.hasOwnProperty(f)&&(o[r[f]]=f);return o}(bs);function l0(r){return r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1),r}function Ht(r,o){(function(s){return typeof s=="string"&&s.indexOf(".")!=-1&&parseFloat(s)===1})(r)&&(r="100%");var f=function(s){return typeof s=="string"&&s.indexOf("%")!=-1}(r);return r=Math.min(o,Math.max(0,parseFloat(r))),f&&(r=parseInt(r*o,10)/100),Math.abs(r-o)<1e-6?1:r%o/parseFloat(o)}function qr(r){return Math.min(1,Math.max(0,r))}function Tn(r){return parseInt(r,16)}function jn(r){return r.length==1?"0"+r:""+r}function al(r){return r<=1&&(r=100*r+"%"),r}function r0(r){return Math.round(255*parseFloat(r)).toString(16)}function jd(r){return Tn(r)/255}var Ge,Tr,Ar,Yn=(Tr="[\\s|\\(]+("+(Ge="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Ge+")[,|\\s]+("+Ge+")\\s*\\)?",Ar="[\\s|\\(]+("+Ge+")[,|\\s]+("+Ge+")[,|\\s]+("+Ge+")[,|\\s]+("+Ge+")\\s*\\)?",{CSS_UNIT:new RegExp(Ge),rgb:new RegExp("rgb"+Tr),rgba:new RegExp("rgba"+Ar),hsl:new RegExp("hsl"+Tr),hsla:new RegExp("hsla"+Ar),hsv:new RegExp("hsv"+Tr),hsva:new RegExp("hsva"+Ar),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function de(r){return!!Yn.CSS_UNIT.exec(r)}var zm=function(r,o){var f=(typeof r=="string"?parseInt(r):r)||0;if(f>=-5&&f<=5){var s=f,p=parseFloat(o),y=p+s*(p/5)*-1;return(y==0||y<=Number.EPSILON)&&(y=.1),{animationPeriod:y+"s"}}return{animationPeriod:o}},Rm=function(r,o){var f=r||{},s="";switch(o){case"small":s="12px";break;case"medium":s="16px";break;case"large":s="20px";break;default:s=void 0}var p={};if(f.fontSize){var y=f.fontSize;p=function(_,G){var D={};for(var w in _)Object.prototype.hasOwnProperty.call(_,w)&&G.indexOf(w)<0&&(D[w]=_[w]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function"){var N=0;for(w=Object.getOwnPropertySymbols(_);N<w.length;N++)G.indexOf(w[N])<0&&Object.prototype.propertyIsEnumerable.call(_,w[N])&&(D[w[N]]=_[w[N]])}return D}(f,["fontSize"]),s=y}return{fontSize:s,styles:p}},Cm={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},km=function(r){var o=r.className,f=r.text,s=r.textColor,p=r.staticText,y=r.style;return f?Pt.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(o||"").trim(),style:$n($n($n({},p&&Cm),s&&{color:s,mixBlendMode:"unset"}),y&&y)},typeof f=="string"&&f.length?f:"loading"):null},o0="rgb(50, 205, 50)";function Hm(r,o){if(o===void 0&&(o=0),r.length===0)throw new Error("Input array cannot be empty!");var f=[];return function s(p,y){return y===void 0&&(y=0),f.push.apply(f,p),f.length<y&&s(f,y),f.slice(0,y)}(r,o)}Vt(`.atom-rli-bounding-box {
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
}`);J(o0).toRgb();Array.from({length:4},function(r,o){return"--atom-phase".concat(o+1,"-rgb")});Vt(`.commet-rli-bounding-box {
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
}`);var Ja=Array.from({length:4},function(r,o){return"--commet-phase".concat(o+1,"-color")}),Nm=function(r){var o,f=Rm(r?.style,r?.size),s=f.styles,p=f.fontSize,y=r?.easing,_=zm(r?.speedPlus,"1.2s").animationPeriod,G=function(D){var w={};if(D instanceof Array){for(var N=Hm(D,Ja.length),j=0;j<N.length&&!(j>=4);j++)w[Ja[j]]=N[j];return w}try{if(typeof D!="string")throw new Error("Color String expected");for(var Z=0;Z<Ja.length;Z++)w[Ja[Z]]=D}catch($){for($ instanceof Error?console.warn("[".concat($.message,']: Received "').concat(typeof D,'" instead with value, ').concat(JSON.stringify(D))):console.warn("".concat(JSON.stringify(D)," received in <Commet /> indicator cannot be processed. Using default instead!")),Z=0;Z<Ja.length;Z++)w[Ja[Z]]=o0}return w}((o=r?.color)!==null&&o!==void 0?o:"");return Pt.createElement("span",{className:"rli-d-i-b commet-rli-bounding-box",style:$n($n($n($n($n({},p&&{fontSize:p}),_&&{"--rli-animation-duration":_}),y&&{"--rli-animation-function":y}),G),s),role:"status","aria-live":"polite","aria-label":"Loading"},Pt.createElement("span",{className:"rli-d-i-b commet-indicator"},Pt.createElement("span",{className:"rli-d-i-b commet-box"},Pt.createElement("span",{className:"rli-d-i-b commet-trail trail1"}),Pt.createElement("span",{className:"rli-d-i-b  commetball-box"})),Pt.createElement("span",{className:"rli-d-i-b commet-box"},Pt.createElement("span",{className:"rli-d-i-b commet-trail trail2"}),Pt.createElement("span",{className:"rli-d-i-b commetball-box"})),Pt.createElement(km,{className:"commet-text",text:r?.text,textColor:r?.textColor})))};Vt(`.OP-annulus-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--life-line-phase".concat(o+1,"-color")});var il={exports:{}},Um=il.exports,Ld;function qm(){return Ld||(Ld=1,function(r,o){(function(f,s){s(o)})(Um,function(f){class s{constructor(u,h){this.state={angle:0,area:[],position:{x:0,y:0},hardAngle:0,hardDrawingAngle:0},this.createdDensity=h,this.nowDrawingDensity=this.createdDensity,this.render=u}setDensity(u){this.createdDensity=u,this.nowDrawingDensity=u}setDrawingDensity(u){this.nowDrawingDensity=u}setPosition(u){this.state.position=u}setAngle(u){this.state.angle=u}setArea(u){this.state.area=u}setHardDrawingAngle(u){this.state.hardDrawingAngle=u}setHardAngle(u){this.state.hardAngle=u,this.state.hardDrawingAngle=u}setOrientation(u){this.orientation=u}getDrawingDensity(){return this.nowDrawingDensity}getDensity(){return this.createdDensity}getHardAngle(){return this.state.hardAngle}}class p extends s{constructor(u,h,g){super(u,g),this.image=null,this.isLoad=!1,this.loadingAngle=0,this.image=new Image,this.image.src=h}draw(u){const h=this.render.getContext(),g=this.render.convertToGlobal(this.state.position),x=this.render.getRect().pageWidth,M=this.render.getRect().height;h.save(),h.translate(g.x,g.y),h.beginPath();for(let H of this.state.area)H!==null&&(H=this.render.convertToGlobal(H),h.lineTo(H.x-g.x,H.y-g.y));h.rotate(this.state.angle),h.clip(),this.isLoad?h.drawImage(this.image,0,0,x,M):this.drawLoader(h,{x:0,y:0},x,M),h.restore()}simpleDraw(u){const h=this.render.getRect(),g=this.render.getContext(),x=h.pageWidth,M=h.height,H=u===1?h.left+h.pageWidth:h.left,F=h.top;this.isLoad?g.drawImage(this.image,H,F,x,M):this.drawLoader(g,{x:H,y:F},x,M)}drawLoader(u,h,g,x){u.beginPath(),u.strokeStyle="rgb(200, 200, 200)",u.fillStyle="rgb(255, 255, 255)",u.lineWidth=1,u.rect(h.x+1,h.y+1,g-1,x-1),u.stroke(),u.fill();const M={x:h.x+g/2,y:h.y+x/2};u.beginPath(),u.lineWidth=10,u.arc(M.x,M.y,20,this.loadingAngle,3*Math.PI/2+this.loadingAngle),u.stroke(),u.closePath(),this.loadingAngle+=.07,this.loadingAngle>=2*Math.PI&&(this.loadingAngle=0)}load(){this.isLoad||(this.image.onload=()=>{this.isLoad=!0})}newTemporaryCopy(){return this}getTemporaryCopy(){return this}hideTemporaryCopy(){}}class y{constructor(u,h){this.pages=[],this.currentPageIndex=0,this.currentSpreadIndex=0,this.landscapeSpread=[],this.portraitSpread=[],this.render=h,this.app=u,this.currentPageIndex=0,this.isShowCover=this.app.getSettings().showCover}destroy(){this.pages=[]}createSpread(){this.landscapeSpread=[],this.portraitSpread=[];for(let h=0;h<this.pages.length;h++)this.portraitSpread.push([h]);let u=0;this.isShowCover&&(this.pages[0].setDensity("hard"),this.landscapeSpread.push([u]),u++);for(let h=u;h<this.pages.length;h+=2)h<this.pages.length-1?this.landscapeSpread.push([h,h+1]):(this.landscapeSpread.push([h]),this.pages[h].setDensity("hard"))}getSpread(){return this.render.getOrientation()==="landscape"?this.landscapeSpread:this.portraitSpread}getSpreadIndexByPage(u){const h=this.getSpread();for(let g=0;g<h.length;g++)if(u===h[g][0]||u===h[g][1])return g;return null}getPageCount(){return this.pages.length}getPages(){return this.pages}getPage(u){if(u>=0&&u<this.pages.length)return this.pages[u];throw new Error("Invalid page number")}nextBy(u){const h=this.pages.indexOf(u);return h<this.pages.length-1?this.pages[h+1]:null}prevBy(u){const h=this.pages.indexOf(u);return h>0?this.pages[h-1]:null}getFlippingPage(u){const h=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return u===0?this.pages[h].newTemporaryCopy():this.pages[h-1];{const g=u===0?this.getSpread()[h+1]:this.getSpread()[h-1];return g.length===1||u===0?this.pages[g[0]]:this.pages[g[1]]}}getBottomPage(u){const h=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return u===0?this.pages[h+1]:this.pages[h-1];{const g=u===0?this.getSpread()[h+1]:this.getSpread()[h-1];return g.length===1?this.pages[g[0]]:u===0?this.pages[g[1]]:this.pages[g[0]]}}showNext(){this.currentSpreadIndex<this.getSpread().length&&(this.currentSpreadIndex++,this.showSpread())}showPrev(){this.currentSpreadIndex>0&&(this.currentSpreadIndex--,this.showSpread())}getCurrentPageIndex(){return this.currentPageIndex}show(u=null){if(u===null&&(u=this.currentPageIndex),u<0||u>=this.pages.length)return;const h=this.getSpreadIndexByPage(u);h!==null&&(this.currentSpreadIndex=h,this.showSpread())}getCurrentSpreadIndex(){return this.currentSpreadIndex}setCurrentSpreadIndex(u){if(!(u>=0&&u<this.getSpread().length))throw new Error("Invalid page");this.currentSpreadIndex=u}showSpread(){const u=this.getSpread()[this.currentSpreadIndex];u.length===2?(this.render.setLeftPage(this.pages[u[0]]),this.render.setRightPage(this.pages[u[1]])):this.render.getOrientation()==="landscape"&&u[0]===this.pages.length-1?(this.render.setLeftPage(this.pages[u[0]]),this.render.setRightPage(null)):(this.render.setLeftPage(null),this.render.setRightPage(this.pages[u[0]])),this.currentPageIndex=u[0],this.app.updatePageIndex(this.currentPageIndex)}}class _ extends y{constructor(u,h,g){super(u,h),this.imagesHref=g}load(){for(const u of this.imagesHref){const h=new p(this.render,u,"soft");h.load(),this.pages.push(h)}this.createSpread()}}class G{static GetDistanceBetweenTwoPoint(u,h){return u===null||h===null?1/0:Math.sqrt(Math.pow(h.x-u.x,2)+Math.pow(h.y-u.y,2))}static GetSegmentLength(u){return G.GetDistanceBetweenTwoPoint(u[0],u[1])}static GetAngleBetweenTwoLine(u,h){const g=u[0].y-u[1].y,x=h[0].y-h[1].y,M=u[1].x-u[0].x,H=h[1].x-h[0].x;return Math.acos((g*x+M*H)/(Math.sqrt(g*g+M*M)*Math.sqrt(x*x+H*H)))}static PointInRect(u,h){return h===null?null:h.x>=u.left&&h.x<=u.width+u.left&&h.y>=u.top&&h.y<=u.top+u.height?h:null}static GetRotatedPoint(u,h,g){return{x:u.x*Math.cos(g)+u.y*Math.sin(g)+h.x,y:u.y*Math.cos(g)-u.x*Math.sin(g)+h.y}}static LimitPointToCircle(u,h,g){if(G.GetDistanceBetweenTwoPoint(u,g)<=h)return g;const x=u.x,M=u.y,H=g.x,F=g.y;let I=Math.sqrt(Math.pow(h,2)*Math.pow(x-H,2)/(Math.pow(x-H,2)+Math.pow(M-F,2)))+x;g.x<0&&(I*=-1);let st=(I-x)*(M-F)/(x-H)+M;return x-H+M===0&&(st=h),{x:I,y:st}}static GetIntersectBetweenTwoSegment(u,h,g){return G.PointInRect(u,G.GetIntersectBeetwenTwoLine(h,g))}static GetIntersectBeetwenTwoLine(u,h){const g=u[0].y-u[1].y,x=h[0].y-h[1].y,M=u[1].x-u[0].x,H=h[1].x-h[0].x,F=u[0].x*u[1].y-u[1].x*u[0].y,I=h[0].x*h[1].y-h[1].x*h[0].y,st=g*I-x*F,Mt=M*I-H*F,Yt=-(F*H-I*M)/(g*H-x*M),Ct=-(g*I-x*F)/(g*H-x*M);if(isFinite(Yt)&&isFinite(Ct))return{x:Yt,y:Ct};if(Math.abs(st-Mt)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(u,h){const g=Math.abs(u.x-h.x),x=Math.abs(u.y-h.y),M=Math.max(g,x),H=[u];function F(I,st,Mt,Yt,Ct){return st>I?I+Ct*(Mt/Yt):st<I?I-Ct*(Mt/Yt):I}for(let I=1;I<=M;I+=1)H.push({x:F(u.x,h.x,g,M,I),y:F(u.y,h.y,x,M,I)});return H}}class D extends s{constructor(u,h,g){super(u,g),this.copiedElement=null,this.temporaryCopy=null,this.isLoad=!1,this.element=h,this.element.classList.add("stf__item"),this.element.classList.add("--"+g)}newTemporaryCopy(){return this.nowDrawingDensity==="hard"?this:(this.temporaryCopy===null&&(this.copiedElement=this.element.cloneNode(!0),this.element.parentElement.appendChild(this.copiedElement),this.temporaryCopy=new D(this.render,this.copiedElement,this.nowDrawingDensity)),this.getTemporaryCopy())}getTemporaryCopy(){return this.temporaryCopy}hideTemporaryCopy(){this.temporaryCopy!==null&&(this.copiedElement.remove(),this.copiedElement=null,this.temporaryCopy=null)}draw(u){const h=u||this.nowDrawingDensity,g=this.render.convertToGlobal(this.state.position),x=this.render.getRect().pageWidth,M=this.render.getRect().height;this.element.classList.remove("--simple");const H=`
            display: block;
            z-index: ${this.element.style.zIndex};
            left: 0;
            top: 0;
            width: ${x}px;
            height: ${M}px;
        `;h==="hard"?this.drawHard(H):this.drawSoft(g,H)}drawHard(u=""){const h=this.render.getRect().left+this.render.getRect().width/2,g=this.state.hardDrawingAngle,x=u+`
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                clip-path: none;
                -webkit-clip-path: none;
            `+(this.orientation===0?`transform-origin: ${this.render.getRect().pageWidth}px 0; 
                   transform: translate3d(0, 0, 0) rotateY(${g}deg);`:`transform-origin: 0 0; 
                   transform: translate3d(${h}px, 0, 0) rotateY(${g}deg);`);this.element.style.cssText=x}drawSoft(u,h=""){let g="polygon( ";for(const M of this.state.area)if(M!==null){let H=this.render.getDirection()===1?{x:-M.x+this.state.position.x,y:M.y-this.state.position.y}:{x:M.x-this.state.position.x,y:M.y-this.state.position.y};H=G.GetRotatedPoint(H,{x:0,y:0},this.state.angle),g+=H.x+"px "+H.y+"px, "}g=g.slice(0,-2),g+=")";const x=h+`transform-origin: 0 0; clip-path: ${g}; -webkit-clip-path: ${g};`+(this.render.isSafari()&&this.state.angle===0?`transform: translate(${u.x}px, ${u.y}px);`:`transform: translate3d(${u.x}px, ${u.y}px, 0) rotate(${this.state.angle}rad);`);this.element.style.cssText=x}simpleDraw(u){const h=this.render.getRect(),g=h.pageWidth,x=h.height,M=u===1?h.left+h.pageWidth:h.left,H=h.top;this.element.classList.add("--simple"),this.element.style.cssText=`
            position: absolute; 
            display: block; 
            height: ${x}px; 
            left: ${M}px; 
            top: ${H}px; 
            width: ${g}px; 
            z-index: ${this.render.getSettings().startZIndex+1};`}getElement(){return this.element}load(){this.isLoad=!0}setOrientation(u){super.setOrientation(u),this.element.classList.remove("--left","--right"),this.element.classList.add(u===1?"--right":"--left")}setDrawingDensity(u){this.element.classList.remove("--soft","--hard"),this.element.classList.add("--"+u),super.setDrawingDensity(u)}}class w extends y{constructor(u,h,g,x){super(u,h),this.element=g,this.pagesElement=x}load(){for(const u of this.pagesElement){const h=new D(this.render,u,u.dataset.density==="hard"?"hard":"soft");h.load(),this.pages.push(h)}this.createSpread()}}class N{constructor(u,h,g,x){this.direction=u,this.corner=h,this.topIntersectPoint=null,this.sideIntersectPoint=null,this.bottomIntersectPoint=null,this.pageWidth=parseInt(g,10),this.pageHeight=parseInt(x,10)}calc(u){try{return this.position=this.calcAngleAndPosition(u),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){const u=[];let h=!1;return u.push(this.rect.topLeft),u.push(this.topIntersectPoint),this.sideIntersectPoint===null?h=!0:(u.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(h=!1)),u.push(this.bottomIntersectPoint),(h||this.corner==="bottom")&&u.push(this.rect.bottomLeft),u}getBottomClipArea(){const u=[];return u.push(this.topIntersectPoint),this.corner==="top"?u.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&u.push({x:this.pageWidth,y:0}),u.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?G.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&u.push(this.sideIntersectPoint):this.corner==="top"&&u.push({x:this.pageWidth,y:this.pageHeight}),u.push(this.bottomIntersectPoint),u.push(this.topIntersectPoint),u}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){const u=G.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?u:Math.PI-u}calcAngleAndPosition(u){let h=u;if(this.updateAngleAndGeometry(h),h=this.corner==="top"?this.checkPositionAtCenterLine(h,{x:0,y:0},{x:0,y:this.pageHeight}):this.checkPositionAtCenterLine(h,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(h.x-this.pageWidth)<1&&Math.abs(h.y)<1)throw new Error("Point is too small");return h}updateAngleAndGeometry(u){this.angle=this.calculateAngle(u),this.rect=this.getPageRect(u)}calculateAngle(u){const h=this.pageWidth-u.x+1,g=this.corner==="bottom"?this.pageHeight-u.y:u.y;let x=2*Math.acos(h/Math.sqrt(g*g+h*h));g<0&&(x=-x);const M=Math.PI-x;if(!isFinite(x)||M>=0&&M<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(x=-x),x}getPageRect(u){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],u):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],u)}getRectFromBasePoint(u,h){return{topLeft:this.getRotatedPoint(u[0],h),topRight:this.getRotatedPoint(u[1],h),bottomLeft:this.getRotatedPoint(u[2],h),bottomRight:this.getRotatedPoint(u[3],h)}}getRotatedPoint(u,h){return{x:u.x*Math.cos(this.angle)+u.y*Math.sin(this.angle)+h.x,y:u.y*Math.cos(this.angle)-u.x*Math.sin(this.angle)+h.y}}calculateIntersectPoint(u){const h={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=G.GetIntersectBetweenTwoSegment(h,[u,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=G.GetIntersectBetweenTwoSegment(h,[u,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=G.GetIntersectBetweenTwoSegment(h,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=G.GetIntersectBetweenTwoSegment(h,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=G.GetIntersectBetweenTwoSegment(h,[u,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=G.GetIntersectBetweenTwoSegment(h,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(u,h,g){let x=u;const M=G.LimitPointToCircle(h,this.pageWidth,x);x!==M&&(x=M,this.updateAngleAndGeometry(x));const H=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2));let F=this.rect.bottomRight,I=this.rect.topLeft;if(this.corner==="bottom"&&(F=this.rect.topRight,I=this.rect.bottomLeft),F.x<=0){const st=G.LimitPointToCircle(g,H,I);st!==x&&(x=st,this.updateAngleAndGeometry(x))}return x}getSegmentToShadowLine(){const u=this.getShadowStartPoint();return[u,u!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint]}}class j{constructor(u,h){this.flippingPage=null,this.bottomPage=null,this.calc=null,this.state="read",this.render=u,this.app=h}fold(u){this.setState("user_fold"),this.calc===null&&this.start(u),this.do(this.render.convertToPage(u))}flip(u){if(this.app.getSettings().disableFlipByClick&&!this.isPointOnCorners(u)||(this.calc!==null&&this.render.finishAnimation(),!this.start(u)))return;const h=this.getBoundsRect();this.setState("flipping");const g=h.height/10,x=this.calc.getCorner()==="bottom"?h.height-g:g,M=this.calc.getCorner()==="bottom"?h.height:0;this.calc.calc({x:h.pageWidth-g,y:x}),this.animateFlippingTo({x:h.pageWidth-g,y:x},{x:-h.pageWidth,y:M},!0)}start(u){this.reset();const h=this.render.convertToBook(u),g=this.getBoundsRect(),x=this.getDirectionByPoint(h),M=h.y>=g.height/2?"bottom":"top";if(!this.checkDirection(x))return!1;try{if(this.flippingPage=this.app.getPageCollection().getFlippingPage(x),this.bottomPage=this.app.getPageCollection().getBottomPage(x),this.render.getOrientation()==="landscape")if(x===1){const H=this.app.getPageCollection().nextBy(this.flippingPage);H!==null&&this.flippingPage.getDensity()!==H.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),H.setDrawingDensity("hard"))}else{const H=this.app.getPageCollection().prevBy(this.flippingPage);H!==null&&this.flippingPage.getDensity()!==H.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),H.setDrawingDensity("hard"))}return this.render.setDirection(x),this.calc=new N(x,M,g.pageWidth.toString(10),g.height.toString(10)),!0}catch{return!1}}do(u){if(this.calc!==null&&this.calc.calc(u)){const h=this.calc.getFlippingProgress();this.bottomPage.setArea(this.calc.getBottomClipArea()),this.bottomPage.setPosition(this.calc.getBottomPagePosition()),this.bottomPage.setAngle(0),this.bottomPage.setHardAngle(0),this.flippingPage.setArea(this.calc.getFlippingClipArea()),this.flippingPage.setPosition(this.calc.getActiveCorner()),this.flippingPage.setAngle(this.calc.getAngle()),this.calc.getDirection()===0?this.flippingPage.setHardAngle(90*(200-2*h)/100):this.flippingPage.setHardAngle(-90*(200-2*h)/100),this.render.setPageRect(this.calc.getRect()),this.render.setBottomPage(this.bottomPage),this.render.setFlippingPage(this.flippingPage),this.render.setShadowData(this.calc.getShadowStartPoint(),this.calc.getShadowAngle(),h,this.calc.getDirection())}}flipToPage(u,h){const g=this.app.getPageCollection().getCurrentSpreadIndex(),x=this.app.getPageCollection().getSpreadIndexByPage(u);try{x>g&&(this.app.getPageCollection().setCurrentSpreadIndex(x-1),this.flipNext(h)),x<g&&(this.app.getPageCollection().setCurrentSpreadIndex(x+1),this.flipPrev(h))}catch{}}flipNext(u){this.flip({x:this.render.getRect().left+2*this.render.getRect().pageWidth-10,y:u==="top"?1:this.render.getRect().height-2})}flipPrev(u){this.flip({x:10,y:u==="top"?1:this.render.getRect().height-2})}stopMove(){if(this.calc===null)return;const u=this.calc.getPosition(),h=this.getBoundsRect(),g=this.calc.getCorner()==="bottom"?h.height:0;u.x<=0?this.animateFlippingTo(u,{x:-h.pageWidth,y:g},!0):this.animateFlippingTo(u,{x:h.pageWidth,y:g},!1)}showCorner(u){if(!this.checkState("read","fold_corner"))return;const h=this.getBoundsRect(),g=h.pageWidth;if(this.isPointOnCorners(u))if(this.calc===null){if(!this.start(u))return;this.setState("fold_corner"),this.calc.calc({x:g-1,y:1});const x=50,M=this.calc.getCorner()==="bottom"?h.height-1:1,H=this.calc.getCorner()==="bottom"?h.height-x:x;this.animateFlippingTo({x:g-1,y:M},{x:g-x,y:H},!1,!1)}else this.do(this.render.convertToPage(u));else this.setState("read"),this.render.finishAnimation(),this.stopMove()}animateFlippingTo(u,h,g,x=!0){const M=G.GetCordsFromTwoPoint(u,h),H=[];for(const I of M)H.push(()=>this.do(I));const F=this.getAnimationDuration(M.length);this.render.startAnimation(H,F,()=>{this.calc&&(g&&(this.calc.getDirection()===1?this.app.turnToPrevPage():this.app.turnToNextPage()),x&&(this.render.setBottomPage(null),this.render.setFlippingPage(null),this.render.clearShadow(),this.setState("read"),this.reset()))})}getCalculation(){return this.calc}getState(){return this.state}setState(u){this.state!==u&&(this.app.updateState(u),this.state=u)}getDirectionByPoint(u){const h=this.getBoundsRect();if(this.render.getOrientation()==="portrait"){if(u.x-h.pageWidth<=h.width/5)return 1}else if(u.x<h.width/2)return 1;return 0}getAnimationDuration(u){const h=this.app.getSettings().flippingTime;return u>=1e3?h:u/1e3*h}checkDirection(u){return u===0?this.app.getCurrentPageIndex()<this.app.getPageCount()-1:this.app.getCurrentPageIndex()>=1}reset(){this.calc=null,this.flippingPage=null,this.bottomPage=null}getBoundsRect(){return this.render.getRect()}checkState(...u){for(const h of u)if(this.state===h)return!0;return!1}isPointOnCorners(u){const h=this.getBoundsRect(),g=h.pageWidth,x=Math.sqrt(Math.pow(g,2)+Math.pow(h.height,2))/5,M=this.render.convertToBook(u);return M.x>0&&M.y>0&&M.x<h.width&&M.y<h.height&&(M.x<x||M.x>h.width-x)&&(M.y<x||M.y>h.height-x)}}class Z{constructor(u,h){this.leftPage=null,this.rightPage=null,this.flippingPage=null,this.bottomPage=null,this.direction=null,this.orientation=null,this.shadow=null,this.animation=null,this.pageRect=null,this.boundsRect=null,this.timer=0,this.safari=!1,this.setting=h,this.app=u;const g=new RegExp("Version\\/[\\d\\.]+.*Safari/");this.safari=g.exec(window.navigator.userAgent)!==null}render(u){if(this.animation!==null){const h=Math.round((u-this.animation.startedAt)/this.animation.durationFrame);h<this.animation.frames.length?this.animation.frames[h]():(this.animation.onAnimateEnd(),this.animation=null)}this.timer=u,this.drawFrame()}start(){this.update();const u=h=>{this.render(h),requestAnimationFrame(u)};requestAnimationFrame(u)}startAnimation(u,h,g){this.finishAnimation(),this.animation={frames:u,duration:h,durationFrame:h/u.length,onAnimateEnd:g,startedAt:this.timer}}finishAnimation(){this.animation!==null&&(this.animation.frames[this.animation.frames.length-1](),this.animation.onAnimateEnd!==null&&this.animation.onAnimateEnd()),this.animation=null}update(){this.boundsRect=null;const u=this.calculateBoundsRect();this.orientation!==u&&(this.orientation=u,this.app.updateOrientation(u))}calculateBoundsRect(){let u="landscape";const h=this.getBlockWidth(),g=h/2,x=this.getBlockHeight()/2,M=this.setting.width/this.setting.height;let H=this.setting.width,F=this.setting.height,I=g-H;return this.setting.size==="stretch"?(h<2*this.setting.minWidth&&this.app.getSettings().usePortrait&&(u="portrait"),H=u==="portrait"?this.getBlockWidth():this.getBlockWidth()/2,H>this.setting.maxWidth&&(H=this.setting.maxWidth),F=H/M,F>this.getBlockHeight()&&(F=this.getBlockHeight(),H=F*M),I=u==="portrait"?g-H/2-H:g-H):h<2*H&&this.app.getSettings().usePortrait&&(u="portrait",I=g-H/2-H),this.boundsRect={left:I,top:x-F/2,width:2*H,height:F,pageWidth:H},u}setShadowData(u,h,g,x){if(!this.app.getSettings().drawShadow)return;const M=100*this.getSettings().maxShadowOpacity;this.shadow={pos:u,angle:h,width:3*this.getRect().pageWidth/4*g/100,opacity:(100-g)*M/100/100,direction:x,progress:2*g}}clearShadow(){this.shadow=null}getBlockWidth(){return this.app.getUI().getDistElement().offsetWidth}getBlockHeight(){return this.app.getUI().getDistElement().offsetHeight}getDirection(){return this.direction}getRect(){return this.boundsRect===null&&this.calculateBoundsRect(),this.boundsRect}getSettings(){return this.app.getSettings()}getOrientation(){return this.orientation}setPageRect(u){this.pageRect=u}setDirection(u){this.direction=u}setRightPage(u){u!==null&&u.setOrientation(1),this.rightPage=u}setLeftPage(u){u!==null&&u.setOrientation(0),this.leftPage=u}setBottomPage(u){u!==null&&u.setOrientation(this.direction===1?0:1),this.bottomPage=u}setFlippingPage(u){u!==null&&u.setOrientation(this.direction===0&&this.orientation!=="portrait"?0:1),this.flippingPage=u}convertToBook(u){const h=this.getRect();return{x:u.x-h.left,y:u.y-h.top}}isSafari(){return this.safari}convertToPage(u,h){h||(h=this.direction);const g=this.getRect();return{x:h===0?u.x-g.left-g.width/2:g.width/2-u.x+g.left,y:u.y-g.top}}convertToGlobal(u,h){if(h||(h=this.direction),u==null)return null;const g=this.getRect();return{x:h===0?u.x+g.left+g.width/2:g.width/2-u.x+g.left,y:u.y+g.top}}convertRectToGlobal(u,h){return h||(h=this.direction),{topLeft:this.convertToGlobal(u.topLeft,h),topRight:this.convertToGlobal(u.topRight,h),bottomLeft:this.convertToGlobal(u.bottomLeft,h),bottomRight:this.convertToGlobal(u.bottomRight,h)}}}class $ extends Z{constructor(u,h,g){super(u,h),this.canvas=g,this.ctx=g.getContext("2d")}getContext(){return this.ctx}reload(){}drawFrame(){this.clear(),this.orientation!=="portrait"&&this.leftPage!=null&&this.leftPage.simpleDraw(0),this.rightPage!=null&&this.rightPage.simpleDraw(1),this.bottomPage!=null&&this.bottomPage.draw(),this.drawBookShadow(),this.flippingPage!=null&&this.flippingPage.draw(),this.shadow!=null&&(this.drawOuterShadow(),this.drawInnerShadow());const u=this.getRect();this.orientation==="portrait"&&(this.ctx.beginPath(),this.ctx.rect(u.left+u.pageWidth,u.top,u.width,u.height),this.ctx.clip())}drawBookShadow(){const u=this.getRect();this.ctx.save(),this.ctx.beginPath();const h=u.width/20;this.ctx.rect(u.left,u.top,u.width,u.height);const g={x:u.left+u.width/2-h/2,y:0};this.ctx.translate(g.x,g.y);const x=this.ctx.createLinearGradient(0,0,h,0);x.addColorStop(0,"rgba(0, 0, 0, 0)"),x.addColorStop(.4,"rgba(0, 0, 0, 0.2)"),x.addColorStop(.49,"rgba(0, 0, 0, 0.1)"),x.addColorStop(.5,"rgba(0, 0, 0, 0.5)"),x.addColorStop(.51,"rgba(0, 0, 0, 0.4)"),x.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.clip(),this.ctx.fillStyle=x,this.ctx.fillRect(0,0,h,2*u.height),this.ctx.restore()}drawOuterShadow(){const u=this.getRect();this.ctx.save(),this.ctx.beginPath(),this.ctx.rect(u.left,u.top,u.width,u.height);const h=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y});this.ctx.translate(h.x,h.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const g=this.ctx.createLinearGradient(0,0,this.shadow.width,0);this.shadow.direction===0?(this.ctx.translate(0,-100),g.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),g.addColorStop(1,"rgba(0, 0, 0, 0)")):(this.ctx.translate(-this.shadow.width,-100),g.addColorStop(0,"rgba(0, 0, 0, 0)"),g.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")")),this.ctx.clip(),this.ctx.fillStyle=g,this.ctx.fillRect(0,0,this.shadow.width,2*u.height),this.ctx.restore()}drawInnerShadow(){const u=this.getRect();this.ctx.save(),this.ctx.beginPath();const h=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),g=this.convertRectToGlobal(this.pageRect);this.ctx.moveTo(g.topLeft.x,g.topLeft.y),this.ctx.lineTo(g.topRight.x,g.topRight.y),this.ctx.lineTo(g.bottomRight.x,g.bottomRight.y),this.ctx.lineTo(g.bottomLeft.x,g.bottomLeft.y),this.ctx.translate(h.x,h.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const x=3*this.shadow.width/4,M=this.ctx.createLinearGradient(0,0,x,0);this.shadow.direction===0?(this.ctx.translate(-x,-100),M.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")"),M.addColorStop(.9,"rgba(0, 0, 0, 0.05)"),M.addColorStop(.7,"rgba(0, 0, 0, "+this.shadow.opacity+")"),M.addColorStop(0,"rgba(0, 0, 0, 0)")):(this.ctx.translate(0,-100),M.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),M.addColorStop(.1,"rgba(0, 0, 0, 0.05)"),M.addColorStop(.3,"rgba(0, 0, 0, "+this.shadow.opacity+")"),M.addColorStop(1,"rgba(0, 0, 0, 0)")),this.ctx.clip(),this.ctx.fillStyle=M,this.ctx.fillRect(0,0,x,2*u.height),this.ctx.restore()}clear(){this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}}class Y{constructor(u,h,g){this.touchPoint=null,this.swipeTimeout=250,this.onResize=()=>{this.update()},this.onMouseDown=M=>{if(this.checkTarget(M.target)){const H=this.getMousePos(M.clientX,M.clientY);this.app.startUserTouch(H),M.preventDefault()}},this.onTouchStart=M=>{if(this.checkTarget(M.target)&&M.changedTouches.length>0){const H=M.changedTouches[0],F=this.getMousePos(H.clientX,H.clientY);this.touchPoint={point:F,time:Date.now()},setTimeout(()=>{this.touchPoint!==null&&this.app.startUserTouch(F)},this.swipeTimeout),this.app.getSettings().mobileScrollSupport||M.preventDefault()}},this.onMouseUp=M=>{const H=this.getMousePos(M.clientX,M.clientY);this.app.userStop(H)},this.onMouseMove=M=>{const H=this.getMousePos(M.clientX,M.clientY);this.app.userMove(H,!1)},this.onTouchMove=M=>{if(M.changedTouches.length>0){const H=M.changedTouches[0],F=this.getMousePos(H.clientX,H.clientY);this.app.getSettings().mobileScrollSupport?(this.touchPoint!==null&&(Math.abs(this.touchPoint.point.x-F.x)>10||this.app.getState()!=="read")&&M.cancelable&&this.app.userMove(F,!0),this.app.getState()!=="read"&&M.preventDefault()):this.app.userMove(F,!0)}},this.onTouchEnd=M=>{if(M.changedTouches.length>0){const H=M.changedTouches[0],F=this.getMousePos(H.clientX,H.clientY);let I=!1;if(this.touchPoint!==null){const st=F.x-this.touchPoint.point.x,Mt=Math.abs(F.y-this.touchPoint.point.y);Math.abs(st)>this.swipeDistance&&Mt<2*this.swipeDistance&&Date.now()-this.touchPoint.time<this.swipeTimeout&&(st>0?this.app.flipPrev(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"):this.app.flipNext(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"),I=!0),this.touchPoint=null}this.app.userStop(F,I)}},this.parentElement=u,u.classList.add("stf__parent"),u.insertAdjacentHTML("afterbegin",'<div class="stf__wrapper"></div>'),this.wrapper=u.querySelector(".stf__wrapper"),this.app=h;const x=this.app.getSettings().usePortrait?1:2;u.style.minWidth=g.minWidth*x+"px",u.style.minHeight=g.minHeight+"px",g.size==="fixed"&&(u.style.minWidth=g.width*x+"px",u.style.minHeight=g.height+"px"),g.autoSize&&(u.style.width="100%",u.style.maxWidth=2*g.maxWidth+"px"),u.style.display="block",window.addEventListener("resize",this.onResize,!1),this.swipeDistance=g.swipeDistance}destroy(){this.app.getSettings().useMouseEvents&&this.removeHandlers(),this.distElement.remove(),this.wrapper.remove()}getDistElement(){return this.distElement}getWrapper(){return this.wrapper}setOrientationStyle(u){this.wrapper.classList.remove("--portrait","--landscape"),u==="portrait"?(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/this.app.getSettings().width*100+"%"),this.wrapper.classList.add("--portrait")):(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/(2*this.app.getSettings().width)*100+"%"),this.wrapper.classList.add("--landscape")),this.update()}removeHandlers(){window.removeEventListener("resize",this.onResize),this.distElement.removeEventListener("mousedown",this.onMouseDown),this.distElement.removeEventListener("touchstart",this.onTouchStart),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("touchend",this.onTouchEnd)}setHandlers(){window.addEventListener("resize",this.onResize,!1),this.app.getSettings().useMouseEvents&&(this.distElement.addEventListener("mousedown",this.onMouseDown),this.distElement.addEventListener("touchstart",this.onTouchStart),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!this.app.getSettings().mobileScrollSupport}),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("touchend",this.onTouchEnd))}getMousePos(u,h){const g=this.distElement.getBoundingClientRect();return{x:u-g.left,y:h-g.top}}checkTarget(u){return!this.app.getSettings().clickEventForward||!["a","button"].includes(u.tagName.toLowerCase())}}class q extends Y{constructor(u,h,g,x){super(u,h,g),this.wrapper.insertAdjacentHTML("afterbegin",'<div class="stf__block"></div>'),this.distElement=u.querySelector(".stf__block"),this.items=x;for(const M of x)this.distElement.appendChild(M);this.setHandlers()}clear(){for(const u of this.items)this.parentElement.appendChild(u)}updateItems(u){this.removeHandlers(),this.distElement.innerHTML="";for(const h of u)this.distElement.appendChild(h);this.items=u,this.setHandlers()}update(){this.app.getRender().update()}}class V extends Y{constructor(u,h,g){super(u,h,g),this.wrapper.innerHTML='<canvas class="stf__canvas"></canvas>',this.canvas=u.querySelectorAll("canvas")[0],this.distElement=this.canvas,this.resizeCanvas(),this.setHandlers()}resizeCanvas(){const u=getComputedStyle(this.canvas),h=parseInt(u.getPropertyValue("width"),10),g=parseInt(u.getPropertyValue("height"),10);this.canvas.width=h,this.canvas.height=g}getCanvas(){return this.canvas}update(){this.resizeCanvas(),this.app.getRender().update()}}class ut extends Z{constructor(u,h,g){super(u,h),this.outerShadow=null,this.innerShadow=null,this.hardShadow=null,this.hardInnerShadow=null,this.element=g,this.createShadows()}createShadows(){this.element.insertAdjacentHTML("beforeend",`<div class="stf__outerShadow"></div>
             <div class="stf__innerShadow"></div>
             <div class="stf__hardShadow"></div>
             <div class="stf__hardInnerShadow"></div>`),this.outerShadow=this.element.querySelector(".stf__outerShadow"),this.innerShadow=this.element.querySelector(".stf__innerShadow"),this.hardShadow=this.element.querySelector(".stf__hardShadow"),this.hardInnerShadow=this.element.querySelector(".stf__hardInnerShadow")}clearShadow(){super.clearShadow(),this.outerShadow.style.cssText="display: none",this.innerShadow.style.cssText="display: none",this.hardShadow.style.cssText="display: none",this.hardInnerShadow.style.cssText="display: none"}reload(){this.element.querySelector(".stf__outerShadow")||this.createShadows()}drawHardInnerShadow(){const u=this.getRect(),h=this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress;let g=(100-h)*(2.5*u.pageWidth)/100+20;g>u.pageWidth&&(g=u.pageWidth);let x=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+5).toString(10)};
            width: ${g}px;
            height: ${u.height}px;
            background: linear-gradient(to right,
                rgba(0, 0, 0, ${this.shadow.opacity*h/100}) 5%,
                rgba(0, 0, 0, 0) 100%);
            left: ${u.left+u.width/2}px;
            transform-origin: 0 0;
        `;x+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0);":"transform: translate3d(0, 0, 0) rotateY(180deg);",this.hardInnerShadow.style.cssText=x}drawHardOuterShadow(){const u=this.getRect();let h=(100-(this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress))*(2.5*u.pageWidth)/100+20;h>u.pageWidth&&(h=u.pageWidth);let g=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+4).toString(10)};
            width: ${h}px;
            height: ${u.height}px;
            background: linear-gradient(to left, rgba(0, 0, 0, ${this.shadow.opacity}) 5%, rgba(0, 0, 0, 0) 100%);
            left: ${u.left+u.width/2}px;
            transform-origin: 0 0;
        `;g+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0) rotateY(180deg);":"transform: translate3d(0, 0, 0);",this.hardShadow.style.cssText=g}drawInnerShadow(){const u=this.getRect(),h=3*this.shadow.width/4,g=this.getDirection()===0?h:0,x=this.getDirection()===0?"to left":"to right",M=this.convertToGlobal(this.shadow.pos),H=this.shadow.angle+3*Math.PI/2,F=[this.pageRect.topLeft,this.pageRect.topRight,this.pageRect.bottomRight,this.pageRect.bottomLeft];let I="polygon( ";for(const Mt of F){let Yt=this.getDirection()===1?{x:-Mt.x+this.shadow.pos.x,y:Mt.y-this.shadow.pos.y}:{x:Mt.x-this.shadow.pos.x,y:Mt.y-this.shadow.pos.y};Yt=G.GetRotatedPoint(Yt,{x:g,y:100},H),I+=Yt.x+"px "+Yt.y+"px, "}I=I.slice(0,-2),I+=")";const st=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${h}px;
            height: ${2*u.height}px;
            background: linear-gradient(${x},
                rgba(0, 0, 0, ${this.shadow.opacity}) 5%,
                rgba(0, 0, 0, 0.05) 15%,
                rgba(0, 0, 0, ${this.shadow.opacity}) 35%,
                rgba(0, 0, 0, 0) 100%);
            transform-origin: ${g}px 100px;
            transform: translate3d(${M.x-g}px, ${M.y-100}px, 0) rotate(${H}rad);
            clip-path: ${I};
            -webkit-clip-path: ${I};
        `;this.innerShadow.style.cssText=st}drawOuterShadow(){const u=this.getRect(),h=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),g=this.shadow.angle+3*Math.PI/2,x=this.getDirection()===1?this.shadow.width:0,M=this.getDirection()===0?"to right":"to left",H=[{x:0,y:0},{x:u.pageWidth,y:0},{x:u.pageWidth,y:u.height},{x:0,y:u.height}];let F="polygon( ";for(const st of H)if(st!==null){let Mt=this.getDirection()===1?{x:-st.x+this.shadow.pos.x,y:st.y-this.shadow.pos.y}:{x:st.x-this.shadow.pos.x,y:st.y-this.shadow.pos.y};Mt=G.GetRotatedPoint(Mt,{x,y:100},g),F+=Mt.x+"px "+Mt.y+"px, "}F=F.slice(0,-2),F+=")";const I=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2*u.height}px;
            background: linear-gradient(${M}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));
            transform-origin: ${x}px 100px;
            transform: translate3d(${h.x-x}px, ${h.y-100}px, 0) rotate(${g}rad);
            clip-path: ${F};
            -webkit-clip-path: ${F};
        `;this.outerShadow.style.cssText=I}drawLeftPage(){this.orientation!=="portrait"&&this.leftPage!==null&&(this.direction===1&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.leftPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.leftPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.leftPage.draw(this.flippingPage.getDrawingDensity())):this.leftPage.simpleDraw(0))}drawRightPage(){this.rightPage!==null&&(this.direction===0&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.rightPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.rightPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.rightPage.draw(this.flippingPage.getDrawingDensity())):this.rightPage.simpleDraw(1))}drawBottomPage(){if(this.bottomPage===null)return;const u=this.flippingPage!=null?this.flippingPage.getDrawingDensity():null;this.orientation==="portrait"&&this.direction===1||(this.bottomPage.getElement().style.zIndex=(this.getSettings().startZIndex+3).toString(10),this.bottomPage.draw(u))}drawFrame(){this.clear(),this.drawLeftPage(),this.drawRightPage(),this.drawBottomPage(),this.flippingPage!=null&&(this.flippingPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.flippingPage.draw()),this.shadow!=null&&this.flippingPage!==null&&(this.flippingPage.getDrawingDensity()==="soft"?(this.drawOuterShadow(),this.drawInnerShadow()):(this.drawHardOuterShadow(),this.drawHardInnerShadow()))}clear(){for(const u of this.app.getPageCollection().getPages())u!==this.leftPage&&u!==this.rightPage&&u!==this.flippingPage&&u!==this.bottomPage&&(u.getElement().style.cssText="display: none"),u.getTemporaryCopy()!==this.flippingPage&&u.hideTemporaryCopy()}update(){super.update(),this.rightPage!==null&&this.rightPage.setOrientation(1),this.leftPage!==null&&this.leftPage.setOrientation(0)}}class rt{constructor(){this._default={startPage:0,size:"fixed",width:0,height:0,minWidth:0,maxWidth:0,minHeight:0,maxHeight:0,drawShadow:!0,flippingTime:1e3,usePortrait:!0,startZIndex:0,autoSize:!0,maxShadowOpacity:1,showCover:!1,mobileScrollSupport:!0,swipeDistance:30,clickEventForward:!0,useMouseEvents:!0,showPageCorners:!0,disableFlipByClick:!1}}getSettings(u){const h=this._default;if(Object.assign(h,u),h.size!=="stretch"&&h.size!=="fixed")throw new Error('Invalid size type. Available only "fixed" and "stretch" value');if(h.width<=0||h.height<=0)throw new Error("Invalid width or height");if(h.flippingTime<=0)throw new Error("Invalid flipping time");return h.size==="stretch"?(h.minWidth<=0&&(h.minWidth=100),h.maxWidth<h.minWidth&&(h.maxWidth=2e3),h.minHeight<=0&&(h.minHeight=100),h.maxHeight<h.minHeight&&(h.maxHeight=2e3)):(h.minWidth=h.width,h.maxWidth=h.width,h.minHeight=h.height,h.maxHeight=h.height),h}}(function(C,u){u===void 0&&(u={});var h=u.insertAt;if(typeof document<"u"){var g=document.head||document.getElementsByTagName("head")[0],x=document.createElement("style");x.type="text/css",h==="top"&&g.firstChild?g.insertBefore(x,g.firstChild):g.appendChild(x),x.styleSheet?x.styleSheet.cssText=C:x.appendChild(document.createTextNode(C))}})(`.stf__parent {
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
}`),f.PageFlip=class extends class{constructor(){this.events=new Map}on(C,u){return this.events.has(C)?this.events.get(C).push(u):this.events.set(C,[u]),this}off(C){this.events.delete(C)}trigger(C,u,h=null){if(this.events.has(C))for(const g of this.events.get(C))g({data:h,object:u})}}{constructor(C,u){super(),this.isUserTouch=!1,this.isUserMove=!1,this.setting=null,this.pages=null,this.setting=new rt().getSettings(u),this.block=C}destroy(){this.ui.destroy(),this.block.remove()}update(){this.render.update(),this.pages.show()}loadFromImages(C){this.ui=new V(this.block,this,this.setting);const u=this.ui.getCanvas();this.render=new $(this,this.setting,u),this.flipController=new j(this.render,this),this.pages=new _(this,this.render,C),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}loadFromHTML(C){this.ui=new q(this.block,this,this.setting,C),this.render=new ut(this,this.setting,this.ui.getDistElement()),this.flipController=new j(this.render,this),this.pages=new w(this,this.render,this.ui.getDistElement(),C),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}updateFromImages(C){const u=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new _(this,this.render,C),this.pages.load(),this.pages.show(u),this.trigger("update",this,{page:u,mode:this.render.getOrientation()})}updateFromHtml(C){const u=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new w(this,this.render,this.ui.getDistElement(),C),this.pages.load(),this.ui.updateItems(C),this.render.reload(),this.pages.show(u),this.trigger("update",this,{page:u,mode:this.render.getOrientation()})}clear(){this.pages.destroy(),this.ui.clear()}turnToPrevPage(){this.pages.showPrev()}turnToNextPage(){this.pages.showNext()}turnToPage(C){this.pages.show(C)}flipNext(C="top"){this.flipController.flipNext(C)}flipPrev(C="top"){this.flipController.flipPrev(C)}flip(C,u="top"){this.flipController.flipToPage(C,u)}updateState(C){this.trigger("changeState",this,C)}updatePageIndex(C){this.trigger("flip",this,C)}updateOrientation(C){this.ui.setOrientationStyle(C),this.update(),this.trigger("changeOrientation",this,C)}getPageCount(){return this.pages.getPageCount()}getCurrentPageIndex(){return this.pages.getCurrentPageIndex()}getPage(C){return this.pages.getPage(C)}getRender(){return this.render}getFlipController(){return this.flipController}getOrientation(){return this.render.getOrientation()}getBoundsRect(){return this.render.getRect()}getSettings(){return this.setting}getUI(){return this.ui}getState(){return this.flipController.getState()}getPageCollection(){return this.pages}startUserTouch(C){this.mousePosition=C,this.isUserTouch=!0,this.isUserMove=!1}userMove(C,u){this.isUserTouch||u||!this.setting.showPageCorners?this.isUserTouch&&G.GetDistanceBetweenTwoPoint(this.mousePosition,C)>5&&(this.isUserMove=!0,this.flipController.fold(C)):this.flipController.showCorner(C)}userStop(C,u=!1){this.isUserTouch&&(this.isUserTouch=!1,u||(this.isUserMove?this.flipController.stopMove():this.flipController.flip(C)))}},Object.defineProperty(f,"__esModule",{value:!0})})}(il,il.exports)),il.exports}var Bm=qm();const Gm=Pt.forwardRef((r,o)=>{const f=Tt.useRef(null),s=Tt.useRef([]),p=Tt.useRef(),[y,_]=Tt.useState([]);Tt.useImperativeHandle(o,()=>({pageFlip:()=>p.current}));const G=Tt.useCallback(()=>{p.current&&p.current.clear()},[]),D=Tt.useCallback(()=>{const w=p.current;w&&(w.off("flip"),w.off("changeOrientation"),w.off("changeState"),w.off("init"),w.off("update"))},[]);return Tt.useEffect(()=>{if(s.current=[],r.children){const w=Pt.Children.map(r.children,N=>Pt.cloneElement(N,{ref:j=>{j&&s.current.push(j)}}));(!r.renderOnlyPageLengthChange||y.length!==w.length)&&(w.length<y.length&&G(),_(w))}},[r.children]),Tt.useEffect(()=>{const w=()=>{const N=p.current;N&&(r.onFlip&&N.on("flip",j=>r.onFlip(j)),r.onChangeOrientation&&N.on("changeOrientation",j=>r.onChangeOrientation(j)),r.onChangeState&&N.on("changeState",j=>r.onChangeState(j)),r.onInit&&N.on("init",j=>r.onInit(j)),r.onUpdate&&N.on("update",j=>r.onUpdate(j)))};y.length>0&&s.current.length>0&&(D(),f.current&&!p.current&&(p.current=new Bm.PageFlip(f.current,r)),p.current.getFlipController()?p.current.updateFromHtml(s.current):p.current.loadFromHTML(s.current),w())},[y]),Pt.createElement("div",{ref:f,className:r.className,style:r.style},y)}),Ym=Pt.memo(Gm),jm=Tt.forwardRef((r,o)=>{const{key:f,src:s,width:p,height:y,isEven:_}=r;return it.jsxs("div",{className:"page",ref:o,children:[it.jsx("img",{src:s,style:{width:p,height:y}}),it.jsx("div",{className:`overlay ${_?"left":"right"}`})]},f)}),Pd=Tt.forwardRef((r,o)=>{const{width:f,height:s,src:p}=r;return it.jsx("div",{className:"page page-cover","data-density":"hard",ref:o,children:it.jsx("img",{src:p,style:{width:f,height:s}})})}),Xd=({ariaLabel:r,isDisabled:o,children:f,onClick:s})=>it.jsx("button",{type:"button",onClick:s,className:`button-circle ${o?"disabled":""}`,tabIndex:-1,onMouseDown:p=>p.preventDefault(),"aria-label":r,children:f}),fs=40,Lm=({width:r,height:o})=>{const f=Tt.useRef(null),s=Tt.useRef(null),[p,y]=Tt.useState(0),[_,G]=Tt.useState(!1),[D,w]=Tt.useState(!1),N=Tt.useRef(new Map);Tt.useEffect(()=>{const Y=()=>{!D&&s.current&&(w(!0),s.current.play().catch(q=>{console.error("Autoplay failed:",q)})),window.removeEventListener("click",Y),window.removeEventListener("keydown",Y)};return window.addEventListener("click",Y),window.addEventListener("keydown",Y),()=>{window.removeEventListener("click",Y),window.removeEventListener("keydown",Y)}},[D]),Tt.useEffect(()=>{(async()=>{for(let q=0;q<fs/2;q++){const V=q*2+41,rt=[V,V+1].map(h=>`/letter-to-the-cloud/assets/images/Frame ${h}.png`).map(h=>{const g=new Image;return g.src=h,new Promise(x=>{g.onload=()=>x(g),g.onerror=()=>x(g)})}),[C,u]=await Promise.all([...rt]);N.current.set(q,{images:[C,u]})}G(!0)})()},[]);const j=Y=>y(Y.data),Z=()=>f.current?.flipNext(),$=()=>f.current?.flipPrev();return _?it.jsxs(it.Fragment,{children:[it.jsxs("div",{className:"book-wrapper",children:[it.jsx("audio",{autoPlay:!0,ref:s,preload:"auto",children:it.jsx("source",{src:"/letter-to-the-cloud/assets/audio/1.mp3",type:"audio/mpeg"})}),it.jsx(Xd,{ariaLabel:"Previous page",isDisabled:!p,onClick:$,children:it.jsx("span",{children:"←"})}),it.jsxs(Ym,{width:r,height:o,maxShadowOpacity:.5,size:"fixed",drawShadow:!0,showCover:!0,mobileScrollSupport:!1,onFlip:j,ref:Y=>f.current=Y?.pageFlip(),children:[it.jsx(Pd,{width:r,height:o,src:"/letter-to-the-cloud/assets/images/Frame 40.png"}),Array.from(N.current.entries()).flatMap(([Y,{images:q}],V)=>q.map((ut,rt)=>it.jsx(jm,{src:ut.src,width:r,height:o,isEven:rt===0},`${V}-${rt}`))),it.jsx(Pd,{width:r,height:o,src:"/letter-to-the-cloud/assets/images/Frame 81.png"})]}),it.jsx(Xd,{ariaLabel:"Next page",isDisabled:p===fs,onClick:Z,children:it.jsx("span",{children:"→"})})]}),p&&it.jsxs("p",{children:[it.jsx("span",{className:"current-page-number",children:p})," /"," ",it.jsx("span",{children:fs})]})]}):it.jsx(Nm,{color:"#ffd600",size:"large"})},Pm=()=>it.jsxs(it.Fragment,{children:[it.jsx("style",{children:`
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.2; transform: scale(0.8); }
        }
      `}),it.jsx("div",{style:hs.overlay,children:it.jsx("div",{style:hs.starsContainer,children:Array.from({length:50}).map((r,o)=>it.jsx("div",{style:{...hs.star,...Xm()}},o))})})]}),hs={overlay:{position:"fixed",height:"100%",top:0,left:0,right:0,bottom:0,zIndex:1,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:"white",fontSize:24,textAlign:"center",overflow:"hidden"},starsContainer:{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none"},star:{position:"absolute",width:2,height:2,borderRadius:"50%",backgroundColor:"white",opacity:.8,animationName:"twinkle",animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",animationDirection:"alternate"}};function Xm(r){const o=Math.random()*100+"%",f=Math.random()*100+"%",s=1+Math.random()*2,p=Math.random()*5;return{top:o,left:f,animationDuration:`${s}s`,animationDelay:`${p}s`}}const Zm=()=>{const[r,o]=Tt.useState(!1),f=()=>{const s=window.matchMedia("(orientation: portrait)").matches,p=window.innerWidth<768;o(s&&p)};return Tt.useEffect(()=>(f(),window.addEventListener("orientationchange",f),window.addEventListener("resize",f),()=>{window.removeEventListener("orientationchange",f),window.removeEventListener("resize",f)}),[]),r?it.jsx("div",{className:"overlay",children:it.jsxs("div",{className:"message",children:["📱 Будь ласка поверніть телефон ",it.jsx("strong",{children:"горизонтально"}),it.jsx("br",{}),"для ліпшого відображення."]})}):null};var pn=function(){return pn=Object.assign||function(o){for(var f,s=1,p=arguments.length;s<p;s++){f=arguments[s];for(var y in f)Object.prototype.hasOwnProperty.call(f,y)&&(o[y]=f[y])}return o},pn.apply(this,arguments)};function ol(r,o,f){if(f||arguments.length===2)for(var s=0,p=o.length,y;s<p;s++)(y||!(s in o))&&(y||(y=Array.prototype.slice.call(o,0,s)),y[s]=o[s]);return r.concat(y||Array.prototype.slice.call(o))}var Rt="-ms-",rl="-moz-",St="-webkit-",u0="comm",Br="rule",_s="decl",Qm="@import",s0="@keyframes",Vm="@layer",c0=Math.abs,Ds=String.fromCharCode,vs=Object.assign;function Km(r,o){return It(r,0)^45?(((o<<2^It(r,0))<<2^It(r,1))<<2^It(r,2))<<2^It(r,3):0}function f0(r){return r.trim()}function pe(r,o){return(r=o.exec(r))?r[0]:r}function ct(r,o,f){return r.replace(o,f)}function Dr(r,o,f){return r.indexOf(o,f)}function It(r,o){return r.charCodeAt(o)|0}function Fa(r,o,f){return r.slice(o,f)}function Jn(r){return r.length}function h0(r){return r.length}function ll(r,o){return o.push(r),r}function Jm(r,o){return r.map(o).join("")}function Zd(r,o){return r.filter(function(f){return!pe(f,o)})}var Gr=1,Ia=1,d0=0,Un=0,Xt=0,ai="";function Yr(r,o,f,s,p,y,_,G){return{value:r,root:o,parent:f,type:s,props:p,children:y,line:Gr,column:Ia,length:_,return:"",siblings:G}}function Ye(r,o){return vs(Yr("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},o)}function $a(r){for(;r.root;)r=Ye(r.root,{children:[r]});ll(r,r.siblings)}function $m(){return Xt}function Wm(){return Xt=Un>0?It(ai,--Un):0,Ia--,Xt===10&&(Ia=1,Gr--),Xt}function Ln(){return Xt=Un<d0?It(ai,Un++):0,Ia++,Xt===10&&(Ia=1,Gr++),Xt}function ua(){return It(ai,Un)}function Mr(){return Un}function jr(r,o){return Fa(ai,r,o)}function ys(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Fm(r){return Gr=Ia=1,d0=Jn(ai=r),Un=0,[]}function Im(r){return ai="",r}function ds(r){return f0(jr(Un-1,xs(r===91?r+2:r===40?r+1:r)))}function tb(r){for(;(Xt=ua())&&Xt<33;)Ln();return ys(r)>2||ys(Xt)>3?"":" "}function nb(r,o){for(;--o&&Ln()&&!(Xt<48||Xt>102||Xt>57&&Xt<65||Xt>70&&Xt<97););return jr(r,Mr()+(o<6&&ua()==32&&Ln()==32))}function xs(r){for(;Ln();)switch(Xt){case r:return Un;case 34:case 39:r!==34&&r!==39&&xs(Xt);break;case 40:r===41&&xs(r);break;case 92:Ln();break}return Un}function eb(r,o){for(;Ln()&&r+Xt!==57;)if(r+Xt===84&&ua()===47)break;return"/*"+jr(o,Un-1)+"*"+Ds(r===47?r:Ln())}function ab(r){for(;!ys(ua());)Ln();return jr(r,Un)}function ib(r){return Im(zr("",null,null,null,[""],r=Fm(r),0,[0],r))}function zr(r,o,f,s,p,y,_,G,D){for(var w=0,N=0,j=_,Z=0,$=0,Y=0,q=1,V=1,ut=1,rt=0,C="",u=p,h=y,g=s,x=C;V;)switch(Y=rt,rt=Ln()){case 40:if(Y!=108&&It(x,j-1)==58){Dr(x+=ct(ds(rt),"&","&\f"),"&\f",c0(w?G[w-1]:0))!=-1&&(ut=-1);break}case 34:case 39:case 91:x+=ds(rt);break;case 9:case 10:case 13:case 32:x+=tb(Y);break;case 92:x+=nb(Mr()-1,7);continue;case 47:switch(ua()){case 42:case 47:ll(lb(eb(Ln(),Mr()),o,f,D),D);break;default:x+="/"}break;case 123*q:G[w++]=Jn(x)*ut;case 125*q:case 59:case 0:switch(rt){case 0:case 125:V=0;case 59+N:ut==-1&&(x=ct(x,/\f/g,"")),$>0&&Jn(x)-j&&ll($>32?Vd(x+";",s,f,j-1,D):Vd(ct(x," ","")+";",s,f,j-2,D),D);break;case 59:x+=";";default:if(ll(g=Qd(x,o,f,w,N,p,G,C,u=[],h=[],j,y),y),rt===123)if(N===0)zr(x,o,g,g,u,y,j,G,h);else switch(Z===99&&It(x,3)===110?100:Z){case 100:case 108:case 109:case 115:zr(r,g,g,s&&ll(Qd(r,g,g,0,0,p,G,C,p,u=[],j,h),h),p,h,j,G,s?u:h);break;default:zr(x,g,g,g,[""],h,0,G,h)}}w=N=$=0,q=ut=1,C=x="",j=_;break;case 58:j=1+Jn(x),$=Y;default:if(q<1){if(rt==123)--q;else if(rt==125&&q++==0&&Wm()==125)continue}switch(x+=Ds(rt),rt*q){case 38:ut=N>0?1:(x+="\f",-1);break;case 44:G[w++]=(Jn(x)-1)*ut,ut=1;break;case 64:ua()===45&&(x+=ds(Ln())),Z=ua(),N=j=Jn(C=x+=ab(Mr())),rt++;break;case 45:Y===45&&Jn(x)==2&&(q=0)}}return y}function Qd(r,o,f,s,p,y,_,G,D,w,N,j){for(var Z=p-1,$=p===0?y:[""],Y=h0($),q=0,V=0,ut=0;q<s;++q)for(var rt=0,C=Fa(r,Z+1,Z=c0(V=_[q])),u=r;rt<Y;++rt)(u=f0(V>0?$[rt]+" "+C:ct(C,/&\f/g,$[rt])))&&(D[ut++]=u);return Yr(r,o,f,p===0?Br:G,D,w,N,j)}function lb(r,o,f,s){return Yr(r,o,f,u0,Ds($m()),Fa(r,2,-2),0,s)}function Vd(r,o,f,s,p){return Yr(r,o,f,_s,Fa(r,0,s),Fa(r,s+1,-1),s,p)}function p0(r,o,f){switch(Km(r,o)){case 5103:return St+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return St+r+r;case 4789:return rl+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return St+r+rl+r+Rt+r+r;case 5936:switch(It(r,o+11)){case 114:return St+r+Rt+ct(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return St+r+Rt+ct(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return St+r+Rt+ct(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return St+r+Rt+r+r;case 6165:return St+r+Rt+"flex-"+r+r;case 5187:return St+r+ct(r,/(\w+).+(:[^]+)/,St+"box-$1$2"+Rt+"flex-$1$2")+r;case 5443:return St+r+Rt+"flex-item-"+ct(r,/flex-|-self/g,"")+(pe(r,/flex-|baseline/)?"":Rt+"grid-row-"+ct(r,/flex-|-self/g,""))+r;case 4675:return St+r+Rt+"flex-line-pack"+ct(r,/align-content|flex-|-self/g,"")+r;case 5548:return St+r+Rt+ct(r,"shrink","negative")+r;case 5292:return St+r+Rt+ct(r,"basis","preferred-size")+r;case 6060:return St+"box-"+ct(r,"-grow","")+St+r+Rt+ct(r,"grow","positive")+r;case 4554:return St+ct(r,/([^-])(transform)/g,"$1"+St+"$2")+r;case 6187:return ct(ct(ct(r,/(zoom-|grab)/,St+"$1"),/(image-set)/,St+"$1"),r,"")+r;case 5495:case 3959:return ct(r,/(image-set\([^]*)/,St+"$1$`$1");case 4968:return ct(ct(r,/(.+:)(flex-)?(.*)/,St+"box-pack:$3"+Rt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+St+r+r;case 4200:if(!pe(r,/flex-|baseline/))return Rt+"grid-column-align"+Fa(r,o)+r;break;case 2592:case 3360:return Rt+ct(r,"template-","")+r;case 4384:case 3616:return f&&f.some(function(s,p){return o=p,pe(s.props,/grid-\w+-end/)})?~Dr(r+(f=f[o].value),"span",0)?r:Rt+ct(r,"-start","")+r+Rt+"grid-row-span:"+(~Dr(f,"span",0)?pe(f,/\d+/):+pe(f,/\d+/)-+pe(r,/\d+/))+";":Rt+ct(r,"-start","")+r;case 4896:case 4128:return f&&f.some(function(s){return pe(s.props,/grid-\w+-start/)})?r:Rt+ct(ct(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return ct(r,/(.+)-inline(.+)/,St+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jn(r)-1-o>6)switch(It(r,o+1)){case 109:if(It(r,o+4)!==45)break;case 102:return ct(r,/(.+:)(.+)-([^]+)/,"$1"+St+"$2-$3$1"+rl+(It(r,o+3)==108?"$3":"$2-$3"))+r;case 115:return~Dr(r,"stretch",0)?p0(ct(r,"stretch","fill-available"),o,f)+r:r}break;case 5152:case 5920:return ct(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,p,y,_,G,D,w){return Rt+p+":"+y+w+(_?Rt+p+"-span:"+(G?D:+D-+y)+w:"")+r});case 4949:if(It(r,o+6)===121)return ct(r,":",":"+St)+r;break;case 6444:switch(It(r,It(r,14)===45?18:11)){case 120:return ct(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+St+(It(r,14)===45?"inline-":"")+"box$3$1"+St+"$2$3$1"+Rt+"$2box$3")+r;case 100:return ct(r,":",":"+Rt)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ct(r,"scroll-","scroll-snap-")+r}return r}function Hr(r,o){for(var f="",s=0;s<r.length;s++)f+=o(r[s],s,r,o)||"";return f}function rb(r,o,f,s){switch(r.type){case Vm:if(r.children.length)break;case Qm:case _s:return r.return=r.return||r.value;case u0:return"";case s0:return r.return=r.value+"{"+Hr(r.children,s)+"}";case Br:if(!Jn(r.value=r.props.join(",")))return""}return Jn(f=Hr(r.children,s))?r.return=r.value+"{"+f+"}":""}function ob(r){var o=h0(r);return function(f,s,p,y){for(var _="",G=0;G<o;G++)_+=r[G](f,s,p,y)||"";return _}}function ub(r){return function(o){o.root||(o=o.return)&&r(o)}}function sb(r,o,f,s){if(r.length>-1&&!r.return)switch(r.type){case _s:r.return=p0(r.value,r.length,f);return;case s0:return Hr([Ye(r,{value:ct(r.value,"@","@"+St)})],s);case Br:if(r.length)return Jm(f=r.props,function(p){switch(pe(p,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$a(Ye(r,{props:[ct(p,/:(read-\w+)/,":"+rl+"$1")]})),$a(Ye(r,{props:[p]})),vs(r,{props:Zd(f,s)});break;case"::placeholder":$a(Ye(r,{props:[ct(p,/:(plac\w+)/,":"+St+"input-$1")]})),$a(Ye(r,{props:[ct(p,/:(plac\w+)/,":"+rl+"$1")]})),$a(Ye(r,{props:[ct(p,/:(plac\w+)/,Rt+"input-$1")]})),$a(Ye(r,{props:[p]})),vs(r,{props:Zd(f,s)});break}return""})}}var cb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},An={},ti=typeof process<"u"&&An!==void 0&&(An.REACT_APP_SC_ATTR||An.SC_ATTR)||"data-styled",g0="active",m0="data-styled-version",Lr="6.1.19",Ms=`/*!sc*/
`,Nr=typeof window<"u"&&typeof document<"u",fb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&An!==void 0&&An.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&An.REACT_APP_SC_DISABLE_SPEEDY!==""?An.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&An.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&An!==void 0&&An.SC_DISABLE_SPEEDY!==void 0&&An.SC_DISABLE_SPEEDY!==""&&An.SC_DISABLE_SPEEDY!=="false"&&An.SC_DISABLE_SPEEDY),Pr=Object.freeze([]),ni=Object.freeze({});function hb(r,o,f){return f===void 0&&(f=ni),r.theme!==f.theme&&r.theme||o||f.theme}var b0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),db=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,pb=/(^-|-$)/g;function Kd(r){return r.replace(db,"-").replace(pb,"")}var gb=/(a)(d)/gi,Er=52,Jd=function(r){return String.fromCharCode(r+(r>25?39:97))};function Ss(r){var o,f="";for(o=Math.abs(r);o>Er;o=o/Er|0)f=Jd(o%Er)+f;return(Jd(o%Er)+f).replace(gb,"$1-$2")}var ps,v0=5381,Wa=function(r,o){for(var f=o.length;f;)r=33*r^o.charCodeAt(--f);return r},y0=function(r){return Wa(v0,r)};function x0(r){return Ss(y0(r)>>>0)}function mb(r){return r.displayName||r.name||"Component"}function gs(r){return typeof r=="string"&&!0}var S0=typeof Symbol=="function"&&Symbol.for,w0=S0?Symbol.for("react.memo"):60115,bb=S0?Symbol.for("react.forward_ref"):60112,vb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},yb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},O0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xb=((ps={})[bb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ps[w0]=O0,ps);function $d(r){return("type"in(o=r)&&o.type.$$typeof)===w0?O0:"$$typeof"in r?xb[r.$$typeof]:vb;var o}var Sb=Object.defineProperty,wb=Object.getOwnPropertyNames,Wd=Object.getOwnPropertySymbols,Ob=Object.getOwnPropertyDescriptor,Tb=Object.getPrototypeOf,Fd=Object.prototype;function T0(r,o,f){if(typeof o!="string"){if(Fd){var s=Tb(o);s&&s!==Fd&&T0(r,s,f)}var p=wb(o);Wd&&(p=p.concat(Wd(o)));for(var y=$d(r),_=$d(o),G=0;G<p.length;++G){var D=p[G];if(!(D in yb||f&&f[D]||_&&D in _||y&&D in y)){var w=Ob(o,D);try{Sb(r,D,w)}catch{}}}}return r}function ei(r){return typeof r=="function"}function zs(r){return typeof r=="object"&&"styledComponentId"in r}function oa(r,o){return r&&o?"".concat(r," ").concat(o):r||o||""}function ws(r,o){if(r.length===0)return"";for(var f=r[0],s=1;s<r.length;s++)f+=r[s];return f}function ul(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function Os(r,o,f){if(f===void 0&&(f=!1),!f&&!ul(r)&&!Array.isArray(r))return o;if(Array.isArray(o))for(var s=0;s<o.length;s++)r[s]=Os(r[s],o[s]);else if(ul(o))for(var s in o)r[s]=Os(r[s],o[s]);return r}function Rs(r,o){Object.defineProperty(r,"toString",{value:o})}function sl(r){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var Ab=function(){function r(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return r.prototype.indexOfGroup=function(o){for(var f=0,s=0;s<o;s++)f+=this.groupSizes[s];return f},r.prototype.insertRules=function(o,f){if(o>=this.groupSizes.length){for(var s=this.groupSizes,p=s.length,y=p;o>=y;)if((y<<=1)<0)throw sl(16,"".concat(o));this.groupSizes=new Uint32Array(y),this.groupSizes.set(s),this.length=y;for(var _=p;_<y;_++)this.groupSizes[_]=0}for(var G=this.indexOfGroup(o+1),D=(_=0,f.length);_<D;_++)this.tag.insertRule(G,f[_])&&(this.groupSizes[o]++,G++)},r.prototype.clearGroup=function(o){if(o<this.length){var f=this.groupSizes[o],s=this.indexOfGroup(o),p=s+f;this.groupSizes[o]=0;for(var y=s;y<p;y++)this.tag.deleteRule(s)}},r.prototype.getGroup=function(o){var f="";if(o>=this.length||this.groupSizes[o]===0)return f;for(var s=this.groupSizes[o],p=this.indexOfGroup(o),y=p+s,_=p;_<y;_++)f+="".concat(this.tag.getRule(_)).concat(Ms);return f},r}(),Rr=new Map,Ur=new Map,Cr=1,_r=function(r){if(Rr.has(r))return Rr.get(r);for(;Ur.has(Cr);)Cr++;var o=Cr++;return Rr.set(r,o),Ur.set(o,r),o},Eb=function(r,o){Cr=o+1,Rr.set(r,o),Ur.set(o,r)},_b="style[".concat(ti,"][").concat(m0,'="').concat(Lr,'"]'),Db=new RegExp("^".concat(ti,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Mb=function(r,o,f){for(var s,p=f.split(","),y=0,_=p.length;y<_;y++)(s=p[y])&&r.registerName(o,s)},zb=function(r,o){for(var f,s=((f=o.textContent)!==null&&f!==void 0?f:"").split(Ms),p=[],y=0,_=s.length;y<_;y++){var G=s[y].trim();if(G){var D=G.match(Db);if(D){var w=0|parseInt(D[1],10),N=D[2];w!==0&&(Eb(N,w),Mb(r,N,D[3]),r.getTag().insertRules(w,p)),p.length=0}else p.push(G)}}},Id=function(r){for(var o=document.querySelectorAll(_b),f=0,s=o.length;f<s;f++){var p=o[f];p&&p.getAttribute(ti)!==g0&&(zb(r,p),p.parentNode&&p.parentNode.removeChild(p))}};function Rb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var A0=function(r){var o=document.head,f=r||o,s=document.createElement("style"),p=function(G){var D=Array.from(G.querySelectorAll("style[".concat(ti,"]")));return D[D.length-1]}(f),y=p!==void 0?p.nextSibling:null;s.setAttribute(ti,g0),s.setAttribute(m0,Lr);var _=Rb();return _&&s.setAttribute("nonce",_),f.insertBefore(s,y),s},Cb=function(){function r(o){this.element=A0(o),this.element.appendChild(document.createTextNode("")),this.sheet=function(f){if(f.sheet)return f.sheet;for(var s=document.styleSheets,p=0,y=s.length;p<y;p++){var _=s[p];if(_.ownerNode===f)return _}throw sl(17)}(this.element),this.length=0}return r.prototype.insertRule=function(o,f){try{return this.sheet.insertRule(f,o),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},r.prototype.getRule=function(o){var f=this.sheet.cssRules[o];return f&&f.cssText?f.cssText:""},r}(),kb=function(){function r(o){this.element=A0(o),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(o,f){if(o<=this.length&&o>=0){var s=document.createTextNode(f);return this.element.insertBefore(s,this.nodes[o]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},r.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},r}(),Hb=function(){function r(o){this.rules=[],this.length=0}return r.prototype.insertRule=function(o,f){return o<=this.length&&(this.rules.splice(o,0,f),this.length++,!0)},r.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},r.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},r}(),t0=Nr,Nb={isServer:!Nr,useCSSOMInjection:!fb},E0=function(){function r(o,f,s){o===void 0&&(o=ni),f===void 0&&(f={});var p=this;this.options=pn(pn({},Nb),o),this.gs=f,this.names=new Map(s),this.server=!!o.isServer,!this.server&&Nr&&t0&&(t0=!1,Id(this)),Rs(this,function(){return function(y){for(var _=y.getTag(),G=_.length,D="",w=function(j){var Z=function(ut){return Ur.get(ut)}(j);if(Z===void 0)return"continue";var $=y.names.get(Z),Y=_.getGroup(j);if($===void 0||!$.size||Y.length===0)return"continue";var q="".concat(ti,".g").concat(j,'[id="').concat(Z,'"]'),V="";$!==void 0&&$.forEach(function(ut){ut.length>0&&(V+="".concat(ut,","))}),D+="".concat(Y).concat(q,'{content:"').concat(V,'"}').concat(Ms)},N=0;N<G;N++)w(N);return D}(p)})}return r.registerId=function(o){return _r(o)},r.prototype.rehydrate=function(){!this.server&&Nr&&Id(this)},r.prototype.reconstructWithOptions=function(o,f){return f===void 0&&(f=!0),new r(pn(pn({},this.options),o),this.gs,f&&this.names||void 0)},r.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(o=function(f){var s=f.useCSSOMInjection,p=f.target;return f.isServer?new Hb(p):s?new Cb(p):new kb(p)}(this.options),new Ab(o)));var o},r.prototype.hasNameForId=function(o,f){return this.names.has(o)&&this.names.get(o).has(f)},r.prototype.registerName=function(o,f){if(_r(o),this.names.has(o))this.names.get(o).add(f);else{var s=new Set;s.add(f),this.names.set(o,s)}},r.prototype.insertRules=function(o,f,s){this.registerName(o,f),this.getTag().insertRules(_r(o),s)},r.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},r.prototype.clearRules=function(o){this.getTag().clearGroup(_r(o)),this.clearNames(o)},r.prototype.clearTag=function(){this.tag=void 0},r}(),Ub=/&/g,qb=/^\s*\/\/.*$/gm;function _0(r,o){return r.map(function(f){return f.type==="rule"&&(f.value="".concat(o," ").concat(f.value),f.value=f.value.replaceAll(",",",".concat(o," ")),f.props=f.props.map(function(s){return"".concat(o," ").concat(s)})),Array.isArray(f.children)&&f.type!=="@keyframes"&&(f.children=_0(f.children,o)),f})}function Bb(r){var o,f,s,p=ni,y=p.options,_=y===void 0?ni:y,G=p.plugins,D=G===void 0?Pr:G,w=function(Z,$,Y){return Y.startsWith(f)&&Y.endsWith(f)&&Y.replaceAll(f,"").length>0?".".concat(o):Z},N=D.slice();N.push(function(Z){Z.type===Br&&Z.value.includes("&")&&(Z.props[0]=Z.props[0].replace(Ub,f).replace(s,w))}),_.prefix&&N.push(sb),N.push(rb);var j=function(Z,$,Y,q){$===void 0&&($=""),Y===void 0&&(Y=""),q===void 0&&(q="&"),o=q,f=$,s=new RegExp("\\".concat(f,"\\b"),"g");var V=Z.replace(qb,""),ut=ib(Y||$?"".concat(Y," ").concat($," { ").concat(V," }"):V);_.namespace&&(ut=_0(ut,_.namespace));var rt=[];return Hr(ut,ob(N.concat(ub(function(C){return rt.push(C)})))),rt};return j.hash=D.length?D.reduce(function(Z,$){return $.name||sl(15),Wa(Z,$.name)},v0).toString():"",j}var Gb=new E0,Ts=Bb(),D0=Pt.createContext({shouldForwardProp:void 0,styleSheet:Gb,stylis:Ts});D0.Consumer;Pt.createContext(void 0);function n0(){return Tt.useContext(D0)}var M0=function(){function r(o,f){var s=this;this.inject=function(p,y){y===void 0&&(y=Ts);var _=s.name+y.hash;p.hasNameForId(s.id,_)||p.insertRules(s.id,_,y(s.rules,_,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=f,Rs(this,function(){throw sl(12,String(s.name))})}return r.prototype.getName=function(o){return o===void 0&&(o=Ts),this.name+o.hash},r}(),Yb=function(r){return r>="A"&&r<="Z"};function e0(r){for(var o="",f=0;f<r.length;f++){var s=r[f];if(f===1&&s==="-"&&r[0]==="-")return r;Yb(s)?o+="-"+s.toLowerCase():o+=s}return o.startsWith("ms-")?"-"+o:o}var z0=function(r){return r==null||r===!1||r===""},R0=function(r){var o,f,s=[];for(var p in r){var y=r[p];r.hasOwnProperty(p)&&!z0(y)&&(Array.isArray(y)&&y.isCss||ei(y)?s.push("".concat(e0(p),":"),y,";"):ul(y)?s.push.apply(s,ol(ol(["".concat(p," {")],R0(y),!1),["}"],!1)):s.push("".concat(e0(p),": ").concat((o=p,(f=y)==null||typeof f=="boolean"||f===""?"":typeof f!="number"||f===0||o in cb||o.startsWith("--")?String(f).trim():"".concat(f,"px")),";")))}return s};function sa(r,o,f,s){if(z0(r))return[];if(zs(r))return[".".concat(r.styledComponentId)];if(ei(r)){if(!ei(y=r)||y.prototype&&y.prototype.isReactComponent||!o)return[r];var p=r(o);return sa(p,o,f,s)}var y;return r instanceof M0?f?(r.inject(f,s),[r.getName(s)]):[r]:ul(r)?R0(r):Array.isArray(r)?Array.prototype.concat.apply(Pr,r.map(function(_){return sa(_,o,f,s)})):[r.toString()]}function jb(r){for(var o=0;o<r.length;o+=1){var f=r[o];if(ei(f)&&!zs(f))return!1}return!0}var Lb=y0(Lr),Pb=function(){function r(o,f,s){this.rules=o,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&jb(o),this.componentId=f,this.baseHash=Wa(Lb,f),this.baseStyle=s,E0.registerId(f)}return r.prototype.generateAndInjectStyles=function(o,f,s){var p=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,f,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&f.hasNameForId(this.componentId,this.staticRulesId))p=oa(p,this.staticRulesId);else{var y=ws(sa(this.rules,o,f,s)),_=Ss(Wa(this.baseHash,y)>>>0);if(!f.hasNameForId(this.componentId,_)){var G=s(y,".".concat(_),void 0,this.componentId);f.insertRules(this.componentId,_,G)}p=oa(p,_),this.staticRulesId=_}else{for(var D=Wa(this.baseHash,s.hash),w="",N=0;N<this.rules.length;N++){var j=this.rules[N];if(typeof j=="string")w+=j;else if(j){var Z=ws(sa(j,o,f,s));D=Wa(D,Z+N),w+=Z}}if(w){var $=Ss(D>>>0);f.hasNameForId(this.componentId,$)||f.insertRules(this.componentId,$,s(w,".".concat($),void 0,this.componentId)),p=oa(p,$)}}return p},r}(),C0=Pt.createContext(void 0);C0.Consumer;var ms={};function Xb(r,o,f){var s=zs(r),p=r,y=!gs(r),_=o.attrs,G=_===void 0?Pr:_,D=o.componentId,w=D===void 0?function(u,h){var g=typeof u!="string"?"sc":Kd(u);ms[g]=(ms[g]||0)+1;var x="".concat(g,"-").concat(x0(Lr+g+ms[g]));return h?"".concat(h,"-").concat(x):x}(o.displayName,o.parentComponentId):D,N=o.displayName,j=N===void 0?function(u){return gs(u)?"styled.".concat(u):"Styled(".concat(mb(u),")")}(r):N,Z=o.displayName&&o.componentId?"".concat(Kd(o.displayName),"-").concat(o.componentId):o.componentId||w,$=s&&p.attrs?p.attrs.concat(G).filter(Boolean):G,Y=o.shouldForwardProp;if(s&&p.shouldForwardProp){var q=p.shouldForwardProp;if(o.shouldForwardProp){var V=o.shouldForwardProp;Y=function(u,h){return q(u,h)&&V(u,h)}}else Y=q}var ut=new Pb(f,Z,s?p.componentStyle:void 0);function rt(u,h){return function(g,x,M){var H=g.attrs,F=g.componentStyle,I=g.defaultProps,st=g.foldedComponentIds,Mt=g.styledComponentId,Yt=g.target,Ct=Pt.useContext(C0),z=n0(),P=g.shouldForwardProp||z.shouldForwardProp,tt=hb(x,Ct,I)||ni,dt=function(pt,et,Kt){for(var xt,an=pn(pn({},et),{className:void 0,theme:Kt}),je=0;je<pt.length;je+=1){var Wn=ei(xt=pt[je])?xt(an):xt;for(var En in Wn)an[En]=En==="className"?oa(an[En],Wn[En]):En==="style"?pn(pn({},an[En]),Wn[En]):Wn[En]}return et.className&&(an.className=oa(an.className,et.className)),an}(H,x,tt),b=dt.as||Yt,B={};for(var L in dt)dt[L]===void 0||L[0]==="$"||L==="as"||L==="theme"&&dt.theme===tt||(L==="forwardedAs"?B.as=dt.forwardedAs:P&&!P(L,b)||(B[L]=dt[L]));var X=function(pt,et){var Kt=n0(),xt=pt.generateAndInjectStyles(et,Kt.styleSheet,Kt.stylis);return xt}(F,dt),W=oa(st,Mt);return X&&(W+=" "+X),dt.className&&(W+=" "+dt.className),B[gs(b)&&!b0.has(b)?"class":"className"]=W,M&&(B.ref=M),Tt.createElement(b,B)}(C,u,h)}rt.displayName=j;var C=Pt.forwardRef(rt);return C.attrs=$,C.componentStyle=ut,C.displayName=j,C.shouldForwardProp=Y,C.foldedComponentIds=s?oa(p.foldedComponentIds,p.styledComponentId):"",C.styledComponentId=Z,C.target=s?p.target:r,Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(u){this._foldedDefaultProps=s?function(h){for(var g=[],x=1;x<arguments.length;x++)g[x-1]=arguments[x];for(var M=0,H=g;M<H.length;M++)Os(h,H[M],!0);return h}({},p.defaultProps,u):u}}),Rs(C,function(){return".".concat(C.styledComponentId)}),y&&T0(C,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),C}function a0(r,o){for(var f=[r[0]],s=0,p=o.length;s<p;s+=1)f.push(o[s],r[s+1]);return f}var i0=function(r){return Object.assign(r,{isCss:!0})};function k0(r){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];if(ei(r)||ul(r))return i0(sa(a0(Pr,ol([r],o,!0))));var s=r;return o.length===0&&s.length===1&&typeof s[0]=="string"?sa(s):i0(sa(a0(s,o)))}function As(r,o,f){if(f===void 0&&(f=ni),!o)throw sl(1,o);var s=function(p){for(var y=[],_=1;_<arguments.length;_++)y[_-1]=arguments[_];return r(o,f,k0.apply(void 0,ol([p],y,!1)))};return s.attrs=function(p){return As(r,o,pn(pn({},f),{attrs:Array.prototype.concat(f.attrs,p).filter(Boolean)}))},s.withConfig=function(p){return As(r,o,pn(pn({},f),p))},s}var H0=function(r){return As(Xb,r)},Cs=H0;b0.forEach(function(r){Cs[r]=H0(r)});function Zb(r){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];var s=ws(k0.apply(void 0,ol([r],o,!1))),p=x0(s);return new M0(p,s)}const Qb=Zb`
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
`,Vb=Cs.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  pointer-events: none;
  z-index: 2;
  overflow: hidden;
  background: transparent;
`,ra=Cs.img`
  position: absolute;
  top: ${({top:r})=>r};
  left: 0;
  width: auto;
  height: auto;
  transform: scale(${({scale:r})=>r||1});
  opacity: 0;
  animation: ${Qb} ${({duration:r})=>r}s linear infinite;
  animation-delay: ${({delay:r})=>r}s;
`,Kb=()=>it.jsxs(Vb,{children:[it.jsx(ra,{src:"/letter-to-the-cloud/assets/images/clouds/02.png",top:"20%",delay:0,duration:80,scale:6}),it.jsx(ra,{src:"/letter-to-the-cloud/assets/images/clouds/03.png",top:"30%",delay:5,duration:90,scale:5.5}),it.jsx(ra,{src:"/letter-to-the-cloud/assets/images/clouds/04.png",top:"40%",delay:10,duration:100,scale:6.2}),it.jsx(ra,{src:"/letter-to-the-cloud/assets/images/clouds/05.png",top:"0%",delay:3,duration:85,scale:5.8}),it.jsx(ra,{src:"/letter-to-the-cloud/assets/images/clouds/06.png",top:"25%",delay:8,duration:95,scale:6.5}),it.jsx(ra,{src:"/letter-to-the-cloud/assets/images/clouds/07.png",top:"35%",delay:12,duration:90,scale:6}),it.jsx(ra,{src:"/letter-to-the-cloud/assets/images/clouds/08.png",top:"45%",delay:6,duration:100,scale:6.8})]});function Jb(){const r=gm(),{width:o,height:f}=pm();return it.jsxs(it.Fragment,{children:[!r&&it.jsx(Zm,{}),it.jsx(Pm,{}),it.jsx(Kb,{}),it.jsx("div",{className:"wrapper",children:r&&it.jsx(Lm,{width:o,height:f})})]})}dm.createRoot(document.getElementById("root")).render(it.jsx(Tt.StrictMode,{children:it.jsx(Jb,{})}));
