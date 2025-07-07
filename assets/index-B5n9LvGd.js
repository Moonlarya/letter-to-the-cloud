(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))s(p);new MutationObserver(p=>{for(const v of p)if(v.type==="childList")for(const _ of v.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&s(_)}).observe(document,{childList:!0,subtree:!0});function f(p){const v={};return p.integrity&&(v.integrity=p.integrity),p.referrerPolicy&&(v.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?v.credentials="include":p.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function s(p){if(p.ep)return;p.ep=!0;const v=f(p);fetch(p.href,v)}})();function am(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ls={exports:{}},nl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function im(){if(Ed)return nl;Ed=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function f(s,p,v){var _=null;if(v!==void 0&&(_=""+v),p.key!==void 0&&(_=""+p.key),"key"in p){v={};for(var B in p)B!=="key"&&(v[B]=p[B])}else v=p;return p=v.ref,{$$typeof:r,type:s,key:_,ref:p!==void 0?p:null,props:v}}return nl.Fragment=o,nl.jsx=f,nl.jsxs=f,nl}var _d;function lm(){return _d||(_d=1,ls.exports=im()),ls.exports}var tt=lm(),rs={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd;function rm(){if(Dd)return ut;Dd=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),v=Symbol.for("react.consumer"),_=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),j=Symbol.iterator;function Z(b){return b===null||typeof b!="object"?null:(b=j&&b[j]||b["@@iterator"],typeof b=="function"?b:null)}var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,Y={};function V(b,q,G){this.props=b,this.context=q,this.refs=Y,this.updater=G||J}V.prototype.isReactComponent={},V.prototype.setState=function(b,q){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,q,"setState")},V.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function ct(){}ct.prototype=V.prototype;function ot(b,q,G){this.props=b,this.context=q,this.refs=Y,this.updater=G||J}var k=ot.prototype=new ct;k.constructor=ot,X(k,V.prototype),k.isPureReactComponent=!0;var u=Array.isArray,h={H:null,A:null,T:null,S:null,V:null},g=Object.prototype.hasOwnProperty;function x(b,q,G,P,I,pt){return G=pt.ref,{$$typeof:r,type:b,key:q,ref:G!==void 0?G:null,props:pt}}function M(b,q){return x(b.type,q,void 0,void 0,void 0,b.props)}function C(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function K(b){var q={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(G){return q[G]})}var F=/\/+/g;function rt(b,q){return typeof b=="object"&&b!==null&&b.key!=null?K(""+b.key):q.toString(36)}function Ot(){}function jt(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(Ot,Ot):(b.status="pending",b.then(function(q){b.status==="pending"&&(b.status="fulfilled",b.value=q)},function(q){b.status==="pending"&&(b.status="rejected",b.reason=q)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function Ct(b,q,G,P,I){var pt=typeof b;(pt==="undefined"||pt==="boolean")&&(b=null);var at=!1;if(b===null)at=!0;else switch(pt){case"bigint":case"string":case"number":at=!0;break;case"object":switch(b.$$typeof){case r:case o:at=!0;break;case U:return at=b._init,Ct(at(b._payload),q,G,P,I)}}if(at)return I=I(b),at=P===""?"."+rt(b,0):P,u(I)?(G="",at!=null&&(G=at.replace(F,"$&/")+"/"),Ct(I,q,G,"",function(ae){return ae})):I!=null&&(C(I)&&(I=M(I,G+(I.key==null||b&&b.key===I.key?"":(""+I.key).replace(F,"$&/")+"/")+at)),q.push(I)),1;at=0;var Kt=P===""?".":P+":";if(u(b))for(var St=0;St<b.length;St++)P=b[St],pt=Kt+rt(P,St),at+=Ct(P,q,G,pt,I);else if(St=Z(b),typeof St=="function")for(b=St.call(b),St=0;!(P=b.next()).done;)P=P.value,pt=Kt+rt(P,St++),at+=Ct(P,q,G,pt,I);else if(pt==="object"){if(typeof b.then=="function")return Ct(jt(b),q,G,P,I);throw q=String(b),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return at}function z(b,q,G){if(b==null)return b;var P=[],I=0;return Ct(b,P,"","",function(pt){return q.call(G,pt,I++)}),P}function L(b){if(b._status===-1){var q=b._result;q=q(),q.then(function(G){(b._status===0||b._status===-1)&&(b._status=1,b._result=G)},function(G){(b._status===0||b._status===-1)&&(b._status=2,b._result=G)}),b._status===-1&&(b._status=0,b._result=q)}if(b._status===1)return b._result.default;throw b._result}var et=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function dt(){}return ut.Children={map:z,forEach:function(b,q,G){z(b,function(){q.apply(this,arguments)},G)},count:function(b){var q=0;return z(b,function(){q++}),q},toArray:function(b){return z(b,function(q){return q})||[]},only:function(b){if(!C(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},ut.Component=V,ut.Fragment=f,ut.Profiler=p,ut.PureComponent=ot,ut.StrictMode=s,ut.Suspense=D,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,ut.__COMPILER_RUNTIME={__proto__:null,c:function(b){return h.H.useMemoCache(b)}},ut.cache=function(b){return function(){return b.apply(null,arguments)}},ut.cloneElement=function(b,q,G){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var P=X({},b.props),I=b.key,pt=void 0;if(q!=null)for(at in q.ref!==void 0&&(pt=void 0),q.key!==void 0&&(I=""+q.key),q)!g.call(q,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&q.ref===void 0||(P[at]=q[at]);var at=arguments.length-2;if(at===1)P.children=G;else if(1<at){for(var Kt=Array(at),St=0;St<at;St++)Kt[St]=arguments[St+2];P.children=Kt}return x(b.type,I,void 0,void 0,pt,P)},ut.createContext=function(b){return b={$$typeof:_,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:v,_context:b},b},ut.createElement=function(b,q,G){var P,I={},pt=null;if(q!=null)for(P in q.key!==void 0&&(pt=""+q.key),q)g.call(q,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(I[P]=q[P]);var at=arguments.length-2;if(at===1)I.children=G;else if(1<at){for(var Kt=Array(at),St=0;St<at;St++)Kt[St]=arguments[St+2];I.children=Kt}if(b&&b.defaultProps)for(P in at=b.defaultProps,at)I[P]===void 0&&(I[P]=at[P]);return x(b,pt,void 0,void 0,null,I)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(b){return{$$typeof:B,render:b}},ut.isValidElement=C,ut.lazy=function(b){return{$$typeof:U,_payload:{_status:-1,_result:b},_init:L}},ut.memo=function(b,q){return{$$typeof:w,type:b,compare:q===void 0?null:q}},ut.startTransition=function(b){var q=h.T,G={};h.T=G;try{var P=b(),I=h.S;I!==null&&I(G,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(dt,et)}catch(pt){et(pt)}finally{h.T=q}},ut.unstable_useCacheRefresh=function(){return h.H.useCacheRefresh()},ut.use=function(b){return h.H.use(b)},ut.useActionState=function(b,q,G){return h.H.useActionState(b,q,G)},ut.useCallback=function(b,q){return h.H.useCallback(b,q)},ut.useContext=function(b){return h.H.useContext(b)},ut.useDebugValue=function(){},ut.useDeferredValue=function(b,q){return h.H.useDeferredValue(b,q)},ut.useEffect=function(b,q,G){var P=h.H;if(typeof G=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return P.useEffect(b,q)},ut.useId=function(){return h.H.useId()},ut.useImperativeHandle=function(b,q,G){return h.H.useImperativeHandle(b,q,G)},ut.useInsertionEffect=function(b,q){return h.H.useInsertionEffect(b,q)},ut.useLayoutEffect=function(b,q){return h.H.useLayoutEffect(b,q)},ut.useMemo=function(b,q){return h.H.useMemo(b,q)},ut.useOptimistic=function(b,q){return h.H.useOptimistic(b,q)},ut.useReducer=function(b,q,G){return h.H.useReducer(b,q,G)},ut.useRef=function(b){return h.H.useRef(b)},ut.useState=function(b){return h.H.useState(b)},ut.useSyncExternalStore=function(b,q,G){return h.H.useSyncExternalStore(b,q,G)},ut.useTransition=function(){return h.H.useTransition()},ut.version="19.1.0",ut}var Md;function Es(){return Md||(Md=1,rs.exports=rm()),rs.exports}var xt=Es();const Pt=am(xt);var os={exports:{}},al={},us={exports:{}},ss={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function om(){return zd||(zd=1,function(r){function o(z,L){var et=z.length;z.push(L);t:for(;0<et;){var dt=et-1>>>1,b=z[dt];if(0<p(b,L))z[dt]=L,z[et]=b,et=dt;else break t}}function f(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var L=z[0],et=z.pop();if(et!==L){z[0]=et;t:for(var dt=0,b=z.length,q=b>>>1;dt<q;){var G=2*(dt+1)-1,P=z[G],I=G+1,pt=z[I];if(0>p(P,et))I<b&&0>p(pt,P)?(z[dt]=pt,z[I]=et,dt=I):(z[dt]=P,z[G]=et,dt=G);else if(I<b&&0>p(pt,et))z[dt]=pt,z[I]=et,dt=I;else break t}}return L}function p(z,L){var et=z.sortIndex-L.sortIndex;return et!==0?et:z.id-L.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var v=performance;r.unstable_now=function(){return v.now()}}else{var _=Date,B=_.now();r.unstable_now=function(){return _.now()-B}}var D=[],w=[],U=1,j=null,Z=3,J=!1,X=!1,Y=!1,V=!1,ct=typeof setTimeout=="function"?setTimeout:null,ot=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function u(z){for(var L=f(w);L!==null;){if(L.callback===null)s(w);else if(L.startTime<=z)s(w),L.sortIndex=L.expirationTime,o(D,L);else break;L=f(w)}}function h(z){if(Y=!1,u(z),!X)if(f(D)!==null)X=!0,g||(g=!0,rt());else{var L=f(w);L!==null&&Ct(h,L.startTime-z)}}var g=!1,x=-1,M=5,C=-1;function K(){return V?!0:!(r.unstable_now()-C<M)}function F(){if(V=!1,g){var z=r.unstable_now();C=z;var L=!0;try{t:{X=!1,Y&&(Y=!1,ot(x),x=-1),J=!0;var et=Z;try{e:{for(u(z),j=f(D);j!==null&&!(j.expirationTime>z&&K());){var dt=j.callback;if(typeof dt=="function"){j.callback=null,Z=j.priorityLevel;var b=dt(j.expirationTime<=z);if(z=r.unstable_now(),typeof b=="function"){j.callback=b,u(z),L=!0;break e}j===f(D)&&s(D),u(z)}else s(D);j=f(D)}if(j!==null)L=!0;else{var q=f(w);q!==null&&Ct(h,q.startTime-z),L=!1}}break t}finally{j=null,Z=et,J=!1}L=void 0}}finally{L?rt():g=!1}}}var rt;if(typeof k=="function")rt=function(){k(F)};else if(typeof MessageChannel<"u"){var Ot=new MessageChannel,jt=Ot.port2;Ot.port1.onmessage=F,rt=function(){jt.postMessage(null)}}else rt=function(){ct(F,0)};function Ct(z,L){x=ct(function(){z(r.unstable_now())},L)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return Z},r.unstable_next=function(z){switch(Z){case 1:case 2:case 3:var L=3;break;default:L=Z}var et=Z;Z=L;try{return z()}finally{Z=et}},r.unstable_requestPaint=function(){V=!0},r.unstable_runWithPriority=function(z,L){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var et=Z;Z=z;try{return L()}finally{Z=et}},r.unstable_scheduleCallback=function(z,L,et){var dt=r.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?dt+et:dt):et=dt,z){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=et+b,z={id:U++,callback:L,priorityLevel:z,startTime:et,expirationTime:b,sortIndex:-1},et>dt?(z.sortIndex=et,o(w,z),f(D)===null&&z===f(w)&&(Y?(ot(x),x=-1):Y=!0,Ct(h,et-dt))):(z.sortIndex=b,o(D,z),X||J||(X=!0,g||(g=!0,rt()))),z},r.unstable_shouldYield=K,r.unstable_wrapCallback=function(z){var L=Z;return function(){var et=Z;Z=L;try{return z.apply(this,arguments)}finally{Z=et}}}}(ss)),ss}var Rd;function um(){return Rd||(Rd=1,us.exports=om()),us.exports}var cs={exports:{}},re={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd;function sm(){if(Cd)return re;Cd=1;var r=Es();function o(D){var w="https://react.dev/errors/"+D;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var U=2;U<arguments.length;U++)w+="&args[]="+encodeURIComponent(arguments[U])}return"Minified React error #"+D+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var s={d:{f,r:function(){throw Error(o(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},p=Symbol.for("react.portal");function v(D,w,U){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:j==null?null:""+j,children:D,containerInfo:w,implementation:U}}var _=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function B(D,w){if(D==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return re.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,re.createPortal=function(D,w){var U=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(o(299));return v(D,w,null,U)},re.flushSync=function(D){var w=_.T,U=s.p;try{if(_.T=null,s.p=2,D)return D()}finally{_.T=w,s.p=U,s.d.f()}},re.preconnect=function(D,w){typeof D=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,s.d.C(D,w))},re.prefetchDNS=function(D){typeof D=="string"&&s.d.D(D)},re.preinit=function(D,w){if(typeof D=="string"&&w&&typeof w.as=="string"){var U=w.as,j=B(U,w.crossOrigin),Z=typeof w.integrity=="string"?w.integrity:void 0,J=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;U==="style"?s.d.S(D,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:j,integrity:Z,fetchPriority:J}):U==="script"&&s.d.X(D,{crossOrigin:j,integrity:Z,fetchPriority:J,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},re.preinitModule=function(D,w){if(typeof D=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var U=B(w.as,w.crossOrigin);s.d.M(D,{crossOrigin:U,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0})}}else w==null&&s.d.M(D)},re.preload=function(D,w){if(typeof D=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var U=w.as,j=B(U,w.crossOrigin);s.d.L(D,U,{crossOrigin:j,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},re.preloadModule=function(D,w){if(typeof D=="string")if(w){var U=B(w.as,w.crossOrigin);s.d.m(D,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:U,integrity:typeof w.integrity=="string"?w.integrity:void 0})}else s.d.m(D)},re.requestFormReset=function(D){s.d.r(D)},re.unstable_batchedUpdates=function(D,w){return D(w)},re.useFormState=function(D,w,U){return _.H.useFormState(D,w,U)},re.useFormStatus=function(){return _.H.useHostTransitionStatus()},re.version="19.1.0",re}var kd;function cm(){if(kd)return cs.exports;kd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),cs.exports=sm(),cs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd;function fm(){if(Hd)return al;Hd=1;var r=um(),o=Es(),f=cm();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function v(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function B(t){if(v(t)!==t)throw Error(s(188))}function D(t){var e=t.alternate;if(!e){if(e=v(t),e===null)throw Error(s(188));return e!==t?null:t}for(var n=t,a=e;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return B(i),t;if(l===a)return B(i),e;l=l.sibling}throw Error(s(188))}if(n.return!==a.return)n=i,a=l;else{for(var c=!1,d=i.child;d;){if(d===n){c=!0,n=i,a=l;break}if(d===a){c=!0,a=i,n=l;break}d=d.sibling}if(!c){for(d=l.child;d;){if(d===n){c=!0,n=l,a=i;break}if(d===a){c=!0,a=l,n=i;break}d=d.sibling}if(!c)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?t:e}function w(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=w(t),e!==null)return e;t=t.sibling}return null}var U=Object.assign,j=Symbol.for("react.element"),Z=Symbol.for("react.transitional.element"),J=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),ct=Symbol.for("react.provider"),ot=Symbol.for("react.consumer"),k=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),K=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function rt(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var Ot=Symbol.for("react.client.reference");function jt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ot?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case X:return"Fragment";case V:return"Profiler";case Y:return"StrictMode";case h:return"Suspense";case g:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case J:return"Portal";case k:return(t.displayName||"Context")+".Provider";case ot:return(t._context.displayName||"Context")+".Consumer";case u:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case x:return e=t.displayName||null,e!==null?e:jt(t.type)||"Memo";case M:e=t._payload,t=t._init;try{return jt(t(e))}catch{}}return null}var Ct=Array.isArray,z=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},dt=[],b=-1;function q(t){return{current:t}}function G(t){0>b||(t.current=dt[b],dt[b]=null,b--)}function P(t,e){b++,dt[b]=t.current,t.current=e}var I=q(null),pt=q(null),at=q(null),Kt=q(null);function St(t,e){switch(P(at,e),P(pt,t),P(I,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?td(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=td(e),t=ed(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}G(I),P(I,t)}function ae(){G(I),G(pt),G(at)}function Ln(t){t.memoizedState!==null&&P(Kt,t);var e=I.current,n=ed(e,t.type);e!==n&&(P(pt,t),P(I,n))}function $e(t){pt.current===t&&(G(I),G(pt)),Kt.current===t&&(G(Kt),Wi._currentValue=et)}var Ae=Object.prototype.hasOwnProperty,Zr=r.unstable_scheduleCallback,Qr=r.unstable_cancelCallback,N0=r.unstable_shouldYield,U0=r.unstable_requestPaint,Le=r.unstable_now,q0=r.unstable_getCurrentPriorityLevel,ks=r.unstable_ImmediatePriority,Hs=r.unstable_UserBlockingPriority,fl=r.unstable_NormalPriority,B0=r.unstable_LowPriority,Ns=r.unstable_IdlePriority,Y0=r.log,j0=r.unstable_setDisableYieldValue,li=null,pe=null;function gn(t){if(typeof Y0=="function"&&j0(t),pe&&typeof pe.setStrictMode=="function")try{pe.setStrictMode(li,t)}catch{}}var ge=Math.clz32?Math.clz32:P0,G0=Math.log,L0=Math.LN2;function P0(t){return t>>>=0,t===0?32:31-(G0(t)/L0|0)|0}var hl=256,dl=4194304;function Pn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function pl(t,e,n){var a=t.pendingLanes;if(a===0)return 0;var i=0,l=t.suspendedLanes,c=t.pingedLanes;t=t.warmLanes;var d=a&134217727;return d!==0?(a=d&~l,a!==0?i=Pn(a):(c&=d,c!==0?i=Pn(c):n||(n=d&~t,n!==0&&(i=Pn(n))))):(d=a&~l,d!==0?i=Pn(d):c!==0?i=Pn(c):n||(n=a&~t,n!==0&&(i=Pn(n)))),i===0?0:e!==0&&e!==i&&(e&l)===0&&(l=i&-i,n=e&-e,l>=n||l===32&&(n&4194048)!==0)?e:i}function ri(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function X0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Us(){var t=hl;return hl<<=1,(hl&4194048)===0&&(hl=256),t}function qs(){var t=dl;return dl<<=1,(dl&62914560)===0&&(dl=4194304),t}function Vr(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function oi(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Z0(t,e,n,a,i,l){var c=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var d=t.entanglements,m=t.expirationTimes,T=t.hiddenUpdates;for(n=c&~n;0<n;){var R=31-ge(n),N=1<<R;d[R]=0,m[R]=-1;var A=T[R];if(A!==null)for(T[R]=null,R=0;R<A.length;R++){var E=A[R];E!==null&&(E.lane&=-536870913)}n&=~N}a!==0&&Bs(t,a,0),l!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=l&~(c&~e))}function Bs(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-ge(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|n&4194090}function Ys(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var a=31-ge(n),i=1<<a;i&e|t[a]&e&&(t[a]|=e),n&=~i}}function Kr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Jr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function js(){var t=L.p;return t!==0?t:(t=window.event,t===void 0?32:xd(t.type))}function Q0(t,e){var n=L.p;try{return L.p=t,e()}finally{L.p=n}}var mn=Math.random().toString(36).slice(2),ie="__reactFiber$"+mn,ue="__reactProps$"+mn,fa="__reactContainer$"+mn,$r="__reactEvents$"+mn,V0="__reactListeners$"+mn,K0="__reactHandles$"+mn,Gs="__reactResources$"+mn,ui="__reactMarker$"+mn;function Wr(t){delete t[ie],delete t[ue],delete t[$r],delete t[V0],delete t[K0]}function ha(t){var e=t[ie];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fa]||n[ie]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ld(t);t!==null;){if(n=t[ie])return n;t=ld(t)}return e}t=n,n=t.parentNode}return null}function da(t){if(t=t[ie]||t[fa]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function si(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function pa(t){var e=t[Gs];return e||(e=t[Gs]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Jt(t){t[ui]=!0}var Ls=new Set,Ps={};function Xn(t,e){ga(t,e),ga(t+"Capture",e)}function ga(t,e){for(Ps[t]=e,t=0;t<e.length;t++)Ls.add(e[t])}var J0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xs={},Zs={};function $0(t){return Ae.call(Zs,t)?!0:Ae.call(Xs,t)?!1:J0.test(t)?Zs[t]=!0:(Xs[t]=!0,!1)}function gl(t,e,n){if($0(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function ml(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function We(t,e,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+a)}}var Fr,Qs;function ma(t){if(Fr===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fr=e&&e[1]||"",Qs=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fr+t+Qs}var Ir=!1;function to(t,e){if(!t||Ir)return"";Ir=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(E){var A=E}Reflect.construct(t,[],N)}else{try{N.call()}catch(E){A=E}t.call(N.prototype)}}else{try{throw Error()}catch(E){A=E}(N=t())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(E){if(E&&A&&typeof E.stack=="string")return[E.stack,A.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),c=l[0],d=l[1];if(c&&d){var m=c.split(`
`),T=d.split(`
`);for(i=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;if(a===m.length||i===T.length)for(a=m.length-1,i=T.length-1;1<=a&&0<=i&&m[a]!==T[i];)i--;for(;1<=a&&0<=i;a--,i--)if(m[a]!==T[i]){if(a!==1||i!==1)do if(a--,i--,0>i||m[a]!==T[i]){var R=`
`+m[a].replace(" at new "," at ");return t.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",t.displayName)),R}while(1<=a&&0<=i);break}}}finally{Ir=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?ma(n):""}function W0(t){switch(t.tag){case 26:case 27:case 5:return ma(t.type);case 16:return ma("Lazy");case 13:return ma("Suspense");case 19:return ma("SuspenseList");case 0:case 15:return to(t.type,!1);case 11:return to(t.type.render,!1);case 1:return to(t.type,!0);case 31:return ma("Activity");default:return""}}function Vs(t){try{var e="";do e+=W0(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Ee(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ks(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function F0(t){var e=Ks(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(c){a=""+c,l.call(this,c)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bl(t){t._valueTracker||(t._valueTracker=F0(t))}function Js(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),a="";return t&&(a=Ks(t)?t.checked?"true":"false":t.value),t=a,t!==n?(e.setValue(t),!0):!1}function vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var I0=/[\n"\\]/g;function _e(t){return t.replace(I0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function eo(t,e,n,a,i,l,c,d){t.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.type=c:t.removeAttribute("type"),e!=null?c==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ee(e)):t.value!==""+Ee(e)&&(t.value=""+Ee(e)):c!=="submit"&&c!=="reset"||t.removeAttribute("value"),e!=null?no(t,c,Ee(e)):n!=null?no(t,c,Ee(n)):a!=null&&t.removeAttribute("value"),i==null&&l!=null&&(t.defaultChecked=!!l),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.name=""+Ee(d):t.removeAttribute("name")}function $s(t,e,n,a,i,l,c,d){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(t.type=l),e!=null||n!=null){if(!(l!=="submit"&&l!=="reset"||e!=null))return;n=n!=null?""+Ee(n):"",e=e!=null?""+Ee(e):n,d||e===t.value||(t.value=e),t.defaultValue=e}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=d?t.checked:!!a,t.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.name=c)}function no(t,e,n){e==="number"&&vl(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function ba(t,e,n,a){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&a&&(t[n].defaultSelected=!0)}else{for(n=""+Ee(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,a&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ws(t,e,n){if(e!=null&&(e=""+Ee(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Ee(n):""}function Fs(t,e,n,a){if(e==null){if(a!=null){if(n!=null)throw Error(s(92));if(Ct(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),e=n}n=Ee(e),t.defaultValue=n,a=t.textContent,a===n&&a!==""&&a!==null&&(t.value=a)}function va(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var tp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Is(t,e,n){var a=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,n):typeof n!="number"||n===0||tp.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function tc(t,e,n){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var i in e)a=e[i],e.hasOwnProperty(i)&&n[i]!==a&&Is(t,i,a)}else for(var l in e)e.hasOwnProperty(l)&&Is(t,l,e[l])}function ao(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ep=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),np=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yl(t){return np.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var io=null;function lo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ya=null,xa=null;function ec(t){var e=da(t);if(e&&(t=e.stateNode)){var n=t[ue]||null;t:switch(t=e.stateNode,e.type){case"input":if(eo(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+_e(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var a=n[e];if(a!==t&&a.form===t.form){var i=a[ue]||null;if(!i)throw Error(s(90));eo(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<n.length;e++)a=n[e],a.form===t.form&&Js(a)}break t;case"textarea":Ws(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&ba(t,!!n.multiple,e,!1)}}}var ro=!1;function nc(t,e,n){if(ro)return t(e,n);ro=!0;try{var a=t(e);return a}finally{if(ro=!1,(ya!==null||xa!==null)&&(ir(),ya&&(e=ya,t=xa,xa=ya=null,ec(e),t)))for(e=0;e<t.length;e++)ec(t[e])}}function ci(t,e){var n=t.stateNode;if(n===null)return null;var a=n[ue]||null;if(a===null)return null;n=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(s(231,e,typeof n));return n}var Fe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oo=!1;if(Fe)try{var fi={};Object.defineProperty(fi,"passive",{get:function(){oo=!0}}),window.addEventListener("test",fi,fi),window.removeEventListener("test",fi,fi)}catch{oo=!1}var bn=null,uo=null,xl=null;function ac(){if(xl)return xl;var t,e=uo,n=e.length,a,i="value"in bn?bn.value:bn.textContent,l=i.length;for(t=0;t<n&&e[t]===i[t];t++);var c=n-t;for(a=1;a<=c&&e[n-a]===i[l-a];a++);return xl=i.slice(t,1<a?1-a:void 0)}function Sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wl(){return!0}function ic(){return!1}function se(t){function e(n,a,i,l,c){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=c,this.currentTarget=null;for(var d in t)t.hasOwnProperty(d)&&(n=t[d],this[d]=n?n(l):l[d]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?wl:ic,this.isPropagationStopped=ic,this}return U(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),e}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=se(Zn),hi=U({},Zn,{view:0,detail:0}),ap=se(hi),so,co,di,Tl=U({},hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ho,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==di&&(di&&t.type==="mousemove"?(so=t.screenX-di.screenX,co=t.screenY-di.screenY):co=so=0,di=t),so)},movementY:function(t){return"movementY"in t?t.movementY:co}}),lc=se(Tl),ip=U({},Tl,{dataTransfer:0}),lp=se(ip),rp=U({},hi,{relatedTarget:0}),fo=se(rp),op=U({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),up=se(op),sp=U({},Zn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cp=se(sp),fp=U({},Zn,{data:0}),rc=se(fp),hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gp(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pp[t])?!!e[t]:!1}function ho(){return gp}var mp=U({},hi,{key:function(t){if(t.key){var e=hp[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ho,charCode:function(t){return t.type==="keypress"?Sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bp=se(mp),vp=U({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oc=se(vp),yp=U({},hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ho}),xp=se(yp),Sp=U({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),wp=se(Sp),Op=U({},Tl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Tp=se(Op),Ap=U({},Zn,{newState:0,oldState:0}),Ep=se(Ap),_p=[9,13,27,32],po=Fe&&"CompositionEvent"in window,pi=null;Fe&&"documentMode"in document&&(pi=document.documentMode);var Dp=Fe&&"TextEvent"in window&&!pi,uc=Fe&&(!po||pi&&8<pi&&11>=pi),sc=" ",cc=!1;function fc(t,e){switch(t){case"keyup":return _p.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Sa=!1;function Mp(t,e){switch(t){case"compositionend":return hc(e);case"keypress":return e.which!==32?null:(cc=!0,sc);case"textInput":return t=e.data,t===sc&&cc?null:t;default:return null}}function zp(t,e){if(Sa)return t==="compositionend"||!po&&fc(t,e)?(t=ac(),xl=uo=bn=null,Sa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return uc&&e.locale!=="ko"?null:e.data;default:return null}}var Rp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Rp[t.type]:e==="textarea"}function pc(t,e,n,a){ya?xa?xa.push(a):xa=[a]:ya=a,e=cr(e,"onChange"),0<e.length&&(n=new Ol("onChange","change",null,n,a),t.push({event:n,listeners:e}))}var gi=null,mi=null;function Cp(t){Jh(t,0)}function Al(t){var e=si(t);if(Js(e))return t}function gc(t,e){if(t==="change")return e}var mc=!1;if(Fe){var go;if(Fe){var mo="oninput"in document;if(!mo){var bc=document.createElement("div");bc.setAttribute("oninput","return;"),mo=typeof bc.oninput=="function"}go=mo}else go=!1;mc=go&&(!document.documentMode||9<document.documentMode)}function vc(){gi&&(gi.detachEvent("onpropertychange",yc),mi=gi=null)}function yc(t){if(t.propertyName==="value"&&Al(mi)){var e=[];pc(e,mi,t,lo(t)),nc(Cp,e)}}function kp(t,e,n){t==="focusin"?(vc(),gi=e,mi=n,gi.attachEvent("onpropertychange",yc)):t==="focusout"&&vc()}function Hp(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Al(mi)}function Np(t,e){if(t==="click")return Al(e)}function Up(t,e){if(t==="input"||t==="change")return Al(e)}function qp(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var me=typeof Object.is=="function"?Object.is:qp;function bi(t,e){if(me(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!Ae.call(e,i)||!me(t[i],e[i]))return!1}return!0}function xc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sc(t,e){var n=xc(t);t=0;for(var a;n;){if(n.nodeType===3){if(a=t+n.textContent.length,t<=e&&a>=e)return{node:n,offset:e-t};t=a}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=xc(n)}}function wc(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?wc(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Oc(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=vl(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vl(t.document)}return e}function bo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Bp=Fe&&"documentMode"in document&&11>=document.documentMode,wa=null,vo=null,vi=null,yo=!1;function Tc(t,e,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yo||wa==null||wa!==vl(a)||(a=wa,"selectionStart"in a&&bo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),vi&&bi(vi,a)||(vi=a,a=cr(vo,"onSelect"),0<a.length&&(e=new Ol("onSelect","select",null,e,n),t.push({event:e,listeners:a}),e.target=wa)))}function Qn(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Oa={animationend:Qn("Animation","AnimationEnd"),animationiteration:Qn("Animation","AnimationIteration"),animationstart:Qn("Animation","AnimationStart"),transitionrun:Qn("Transition","TransitionRun"),transitionstart:Qn("Transition","TransitionStart"),transitioncancel:Qn("Transition","TransitionCancel"),transitionend:Qn("Transition","TransitionEnd")},xo={},Ac={};Fe&&(Ac=document.createElement("div").style,"AnimationEvent"in window||(delete Oa.animationend.animation,delete Oa.animationiteration.animation,delete Oa.animationstart.animation),"TransitionEvent"in window||delete Oa.transitionend.transition);function Vn(t){if(xo[t])return xo[t];if(!Oa[t])return t;var e=Oa[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ac)return xo[t]=e[n];return t}var Ec=Vn("animationend"),_c=Vn("animationiteration"),Dc=Vn("animationstart"),Yp=Vn("transitionrun"),jp=Vn("transitionstart"),Gp=Vn("transitioncancel"),Mc=Vn("transitionend"),zc=new Map,So="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");So.push("scrollEnd");function Ue(t,e){zc.set(t,e),Xn(e,[t])}var Rc=new WeakMap;function De(t,e){if(typeof t=="object"&&t!==null){var n=Rc.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Vs(e)},Rc.set(t,e),e)}return{value:t,source:e,stack:Vs(e)}}var Me=[],Ta=0,wo=0;function El(){for(var t=Ta,e=wo=Ta=0;e<t;){var n=Me[e];Me[e++]=null;var a=Me[e];Me[e++]=null;var i=Me[e];Me[e++]=null;var l=Me[e];if(Me[e++]=null,a!==null&&i!==null){var c=a.pending;c===null?i.next=i:(i.next=c.next,c.next=i),a.pending=i}l!==0&&Cc(n,i,l)}}function _l(t,e,n,a){Me[Ta++]=t,Me[Ta++]=e,Me[Ta++]=n,Me[Ta++]=a,wo|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Oo(t,e,n,a){return _l(t,e,n,a),Dl(t)}function Aa(t,e){return _l(t,null,null,e),Dl(t)}function Cc(t,e,n){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n);for(var i=!1,l=t.return;l!==null;)l.childLanes|=n,a=l.alternate,a!==null&&(a.childLanes|=n),l.tag===22&&(t=l.stateNode,t===null||t._visibility&1||(i=!0)),t=l,l=l.return;return t.tag===3?(l=t.stateNode,i&&e!==null&&(i=31-ge(n),t=l.hiddenUpdates,a=t[i],a===null?t[i]=[e]:a.push(e),e.lane=n|536870912),l):null}function Dl(t){if(50<Pi)throw Pi=0,Mu=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ea={};function Lp(t,e,n,a){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(t,e,n,a){return new Lp(t,e,n,a)}function To(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ie(t,e){var n=t.alternate;return n===null?(n=be(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function kc(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ml(t,e,n,a,i,l){var c=0;if(a=t,typeof t=="function")To(t)&&(c=1);else if(typeof t=="string")c=Xg(t,n,I.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case C:return t=be(31,n,e,i),t.elementType=C,t.lanes=l,t;case X:return Kn(n.children,i,l,e);case Y:c=8,i|=24;break;case V:return t=be(12,n,e,i|2),t.elementType=V,t.lanes=l,t;case h:return t=be(13,n,e,i),t.elementType=h,t.lanes=l,t;case g:return t=be(19,n,e,i),t.elementType=g,t.lanes=l,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ct:case k:c=10;break t;case ot:c=9;break t;case u:c=11;break t;case x:c=14;break t;case M:c=16,a=null;break t}c=29,n=Error(s(130,t===null?"null":typeof t,"")),a=null}return e=be(c,n,e,i),e.elementType=t,e.type=a,e.lanes=l,e}function Kn(t,e,n,a){return t=be(7,t,a,e),t.lanes=n,t}function Ao(t,e,n){return t=be(6,t,null,e),t.lanes=n,t}function Eo(t,e,n){return e=be(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var _a=[],Da=0,zl=null,Rl=0,ze=[],Re=0,Jn=null,tn=1,en="";function $n(t,e){_a[Da++]=Rl,_a[Da++]=zl,zl=t,Rl=e}function Hc(t,e,n){ze[Re++]=tn,ze[Re++]=en,ze[Re++]=Jn,Jn=t;var a=tn;t=en;var i=32-ge(a)-1;a&=~(1<<i),n+=1;var l=32-ge(e)+i;if(30<l){var c=i-i%5;l=(a&(1<<c)-1).toString(32),a>>=c,i-=c,tn=1<<32-ge(e)+i|n<<i|a,en=l+t}else tn=1<<l|n<<i|a,en=t}function _o(t){t.return!==null&&($n(t,1),Hc(t,1,0))}function Do(t){for(;t===zl;)zl=_a[--Da],_a[Da]=null,Rl=_a[--Da],_a[Da]=null;for(;t===Jn;)Jn=ze[--Re],ze[Re]=null,en=ze[--Re],ze[Re]=null,tn=ze[--Re],ze[Re]=null}var oe=null,Ut=null,yt=!1,Wn=null,Pe=!1,Mo=Error(s(519));function Fn(t){var e=Error(s(418,""));throw Si(De(e,t)),Mo}function Nc(t){var e=t.stateNode,n=t.type,a=t.memoizedProps;switch(e[ie]=t,e[ue]=a,n){case"dialog":mt("cancel",e),mt("close",e);break;case"iframe":case"object":case"embed":mt("load",e);break;case"video":case"audio":for(n=0;n<Zi.length;n++)mt(Zi[n],e);break;case"source":mt("error",e);break;case"img":case"image":case"link":mt("error",e),mt("load",e);break;case"details":mt("toggle",e);break;case"input":mt("invalid",e),$s(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),bl(e);break;case"select":mt("invalid",e);break;case"textarea":mt("invalid",e),Fs(e,a.value,a.defaultValue,a.children),bl(e)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||a.suppressHydrationWarning===!0||Ih(e.textContent,n)?(a.popover!=null&&(mt("beforetoggle",e),mt("toggle",e)),a.onScroll!=null&&mt("scroll",e),a.onScrollEnd!=null&&mt("scrollend",e),a.onClick!=null&&(e.onclick=fr),e=!0):e=!1,e||Fn(t)}function Uc(t){for(oe=t.return;oe;)switch(oe.tag){case 5:case 13:Pe=!1;return;case 27:case 3:Pe=!0;return;default:oe=oe.return}}function yi(t){if(t!==oe)return!1;if(!yt)return Uc(t),yt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Zu(t.type,t.memoizedProps)),n=!n),n&&Ut&&Fn(t),Uc(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){Ut=Be(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}Ut=null}}else e===27?(e=Ut,kn(t.type)?(t=Ju,Ju=null,Ut=t):Ut=e):Ut=oe?Be(t.stateNode.nextSibling):null;return!0}function xi(){Ut=oe=null,yt=!1}function qc(){var t=Wn;return t!==null&&(he===null?he=t:he.push.apply(he,t),Wn=null),t}function Si(t){Wn===null?Wn=[t]:Wn.push(t)}var zo=q(null),In=null,nn=null;function vn(t,e,n){P(zo,e._currentValue),e._currentValue=n}function an(t){t._currentValue=zo.current,G(zo)}function Ro(t,e,n){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===n)break;t=t.return}}function Co(t,e,n,a){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){var c=i.child;l=l.firstContext;t:for(;l!==null;){var d=l;l=i;for(var m=0;m<e.length;m++)if(d.context===e[m]){l.lanes|=n,d=l.alternate,d!==null&&(d.lanes|=n),Ro(l.return,n,t),a||(c=null);break t}l=d.next}}else if(i.tag===18){if(c=i.return,c===null)throw Error(s(341));c.lanes|=n,l=c.alternate,l!==null&&(l.lanes|=n),Ro(c,n,t),c=null}else c=i.child;if(c!==null)c.return=i;else for(c=i;c!==null;){if(c===t){c=null;break}if(i=c.sibling,i!==null){i.return=c.return,c=i;break}c=c.return}i=c}}function wi(t,e,n,a){t=null;for(var i=e,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var c=i.alternate;if(c===null)throw Error(s(387));if(c=c.memoizedProps,c!==null){var d=i.type;me(i.pendingProps.value,c.value)||(t!==null?t.push(d):t=[d])}}else if(i===Kt.current){if(c=i.alternate,c===null)throw Error(s(387));c.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Wi):t=[Wi])}i=i.return}t!==null&&Co(e,t,n,a),e.flags|=262144}function Cl(t){for(t=t.firstContext;t!==null;){if(!me(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ta(t){In=t,nn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function le(t){return Bc(In,t)}function kl(t,e){return In===null&&ta(t),Bc(t,e)}function Bc(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},nn===null){if(t===null)throw Error(s(308));nn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else nn=nn.next=e;return n}var Pp=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Xp=r.unstable_scheduleCallback,Zp=r.unstable_NormalPriority,Zt={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ko(){return{controller:new Pp,data:new Map,refCount:0}}function Oi(t){t.refCount--,t.refCount===0&&Xp(Zp,function(){t.controller.abort()})}var Ti=null,Ho=0,Ma=0,za=null;function Qp(t,e){if(Ti===null){var n=Ti=[];Ho=0,Ma=Uu(),za={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Ho++,e.then(Yc,Yc),e}function Yc(){if(--Ho===0&&Ti!==null){za!==null&&(za.status="fulfilled");var t=Ti;Ti=null,Ma=0,za=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Vp(t,e){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var i=0;i<n.length;i++)(0,n[i])(e)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var jc=z.S;z.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Qp(t,e),jc!==null&&jc(t,e)};var ea=q(null);function No(){var t=ea.current;return t!==null?t:zt.pooledCache}function Hl(t,e){e===null?P(ea,ea.current):P(ea,e.pool)}function Gc(){var t=No();return t===null?null:{parent:Zt._currentValue,pool:t}}var Ai=Error(s(460)),Lc=Error(s(474)),Nl=Error(s(542)),Uo={then:function(){}};function Pc(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ul(){}function Xc(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Ul,Ul),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Qc(t),t;default:if(typeof e.status=="string")e.then(Ul,Ul);else{if(t=zt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=a}},function(a){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Qc(t),t}throw Ei=e,Ai}}var Ei=null;function Zc(){if(Ei===null)throw Error(s(459));var t=Ei;return Ei=null,t}function Qc(t){if(t===Ai||t===Nl)throw Error(s(483))}var yn=!1;function qo(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bo(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function xn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Sn(t,e,n){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(Tt&2)!==0){var i=a.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),a.pending=e,e=Dl(t),Cc(t,null,n),e}return _l(t,a,e,n),Dl(t)}function _i(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,Ys(t,n)}}function Yo(t,e){var n=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var c={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};l===null?i=l=c:l=l.next=c,n=n.next}while(n!==null);l===null?i=l=e:l=l.next=e}else i=l=e;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var jo=!1;function Di(){if(jo){var t=za;if(t!==null)throw t}}function Mi(t,e,n,a){jo=!1;var i=t.updateQueue;yn=!1;var l=i.firstBaseUpdate,c=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var m=d,T=m.next;m.next=null,c===null?l=T:c.next=T,c=m;var R=t.alternate;R!==null&&(R=R.updateQueue,d=R.lastBaseUpdate,d!==c&&(d===null?R.firstBaseUpdate=T:d.next=T,R.lastBaseUpdate=m))}if(l!==null){var N=i.baseState;c=0,R=T=m=null,d=l;do{var A=d.lane&-536870913,E=A!==d.lane;if(E?(bt&A)===A:(a&A)===A){A!==0&&A===Ma&&(jo=!0),R!==null&&(R=R.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});t:{var lt=t,nt=d;A=e;var Dt=n;switch(nt.tag){case 1:if(lt=nt.payload,typeof lt=="function"){N=lt.call(Dt,N,A);break t}N=lt;break t;case 3:lt.flags=lt.flags&-65537|128;case 0:if(lt=nt.payload,A=typeof lt=="function"?lt.call(Dt,N,A):lt,A==null)break t;N=U({},N,A);break t;case 2:yn=!0}}A=d.callback,A!==null&&(t.flags|=64,E&&(t.flags|=8192),E=i.callbacks,E===null?i.callbacks=[A]:E.push(A))}else E={lane:A,tag:d.tag,payload:d.payload,callback:d.callback,next:null},R===null?(T=R=E,m=N):R=R.next=E,c|=A;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;E=d,d=E.next,E.next=null,i.lastBaseUpdate=E,i.shared.pending=null}}while(!0);R===null&&(m=N),i.baseState=m,i.firstBaseUpdate=T,i.lastBaseUpdate=R,l===null&&(i.shared.lanes=0),Mn|=c,t.lanes=c,t.memoizedState=N}}function Vc(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Kc(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Vc(n[t],e)}var Ra=q(null),ql=q(0);function Jc(t,e){t=fn,P(ql,t),P(Ra,e),fn=t|e.baseLanes}function Go(){P(ql,fn),P(Ra,Ra.current)}function Lo(){fn=ql.current,G(Ra),G(ql)}var wn=0,ft=null,Et=null,Gt=null,Bl=!1,Ca=!1,na=!1,Yl=0,zi=0,ka=null,Kp=0;function Bt(){throw Error(s(321))}function Po(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!me(t[n],e[n]))return!1;return!0}function Xo(t,e,n,a,i,l){return wn=l,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,z.H=t===null||t.memoizedState===null?kf:Hf,na=!1,l=n(a,i),na=!1,Ca&&(l=Wc(e,n,a,i)),$c(t),l}function $c(t){z.H=Zl;var e=Et!==null&&Et.next!==null;if(wn=0,Gt=Et=ft=null,Bl=!1,zi=0,ka=null,e)throw Error(s(300));t===null||$t||(t=t.dependencies,t!==null&&Cl(t)&&($t=!0))}function Wc(t,e,n,a){ft=t;var i=0;do{if(Ca&&(ka=null),zi=0,Ca=!1,25<=i)throw Error(s(301));if(i+=1,Gt=Et=null,t.updateQueue!=null){var l=t.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}z.H=eg,l=e(n,a)}while(Ca);return l}function Jp(){var t=z.H,e=t.useState()[0];return e=typeof e.then=="function"?Ri(e):e,t=t.useState()[0],(Et!==null?Et.memoizedState:null)!==t&&(ft.flags|=1024),e}function Zo(){var t=Yl!==0;return Yl=0,t}function Qo(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Vo(t){if(Bl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Bl=!1}wn=0,Gt=Et=ft=null,Ca=!1,zi=Yl=0,ka=null}function ce(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?ft.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function Lt(){if(Et===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Gt===null?ft.memoizedState:Gt.next;if(e!==null)Gt=e,Et=t;else{if(t===null)throw ft.alternate===null?Error(s(467)):Error(s(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Gt===null?ft.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function Ko(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ri(t){var e=zi;return zi+=1,ka===null&&(ka=[]),t=Xc(ka,t,e),e=ft,(Gt===null?e.memoizedState:Gt.next)===null&&(e=e.alternate,z.H=e===null||e.memoizedState===null?kf:Hf),t}function jl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ri(t);if(t.$$typeof===k)return le(t)}throw Error(s(438,String(t)))}function Jo(t){var e=null,n=ft.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var a=ft.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Ko(),ft.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),a=0;a<t;a++)n[a]=K;return e.index++,n}function ln(t,e){return typeof e=="function"?e(t):e}function Gl(t){var e=Lt();return $o(e,Et,t)}function $o(t,e,n){var a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var i=t.baseQueue,l=a.pending;if(l!==null){if(i!==null){var c=i.next;i.next=l.next,l.next=c}e.baseQueue=i=l,a.pending=null}if(l=t.baseState,i===null)t.memoizedState=l;else{e=i.next;var d=c=null,m=null,T=e,R=!1;do{var N=T.lane&-536870913;if(N!==T.lane?(bt&N)===N:(wn&N)===N){var A=T.revertLane;if(A===0)m!==null&&(m=m.next={lane:0,revertLane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),N===Ma&&(R=!0);else if((wn&A)===A){T=T.next,A===Ma&&(R=!0);continue}else N={lane:0,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},m===null?(d=m=N,c=l):m=m.next=N,ft.lanes|=A,Mn|=A;N=T.action,na&&n(l,N),l=T.hasEagerState?T.eagerState:n(l,N)}else A={lane:N,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},m===null?(d=m=A,c=l):m=m.next=A,ft.lanes|=N,Mn|=N;T=T.next}while(T!==null&&T!==e);if(m===null?c=l:m.next=d,!me(l,t.memoizedState)&&($t=!0,R&&(n=za,n!==null)))throw n;t.memoizedState=l,t.baseState=c,t.baseQueue=m,a.lastRenderedState=l}return i===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Wo(t){var e=Lt(),n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=t;var a=n.dispatch,i=n.pending,l=e.memoizedState;if(i!==null){n.pending=null;var c=i=i.next;do l=t(l,c.action),c=c.next;while(c!==i);me(l,e.memoizedState)||($t=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),n.lastRenderedState=l}return[l,a]}function Fc(t,e,n){var a=ft,i=Lt(),l=yt;if(l){if(n===void 0)throw Error(s(407));n=n()}else n=e();var c=!me((Et||i).memoizedState,n);c&&(i.memoizedState=n,$t=!0),i=i.queue;var d=ef.bind(null,a,i,t);if(Ci(2048,8,d,[t]),i.getSnapshot!==e||c||Gt!==null&&Gt.memoizedState.tag&1){if(a.flags|=2048,Ha(9,Ll(),tf.bind(null,a,i,n,e),null),zt===null)throw Error(s(349));l||(wn&124)!==0||Ic(a,e,n)}return n}function Ic(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e=Ko(),ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function tf(t,e,n,a){e.value=n,e.getSnapshot=a,nf(e)&&af(t)}function ef(t,e,n){return n(function(){nf(e)&&af(t)})}function nf(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!me(t,n)}catch{return!0}}function af(t){var e=Aa(t,2);e!==null&&we(e,t,2)}function Fo(t){var e=ce();if(typeof t=="function"){var n=t;if(t=n(),na){gn(!0);try{n()}finally{gn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ln,lastRenderedState:t},e}function lf(t,e,n,a){return t.baseState=n,$o(t,Et,typeof a=="function"?a:ln)}function $p(t,e,n,a,i){if(Xl(t))throw Error(s(485));if(t=e.action,t!==null){var l={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){l.listeners.push(c)}};z.T!==null?n(!0):l.isTransition=!1,a(l),n=e.pending,n===null?(l.next=e.pending=l,rf(e,l)):(l.next=n.next,e.pending=n.next=l)}}function rf(t,e){var n=e.action,a=e.payload,i=t.state;if(e.isTransition){var l=z.T,c={};z.T=c;try{var d=n(i,a),m=z.S;m!==null&&m(c,d),of(t,e,d)}catch(T){Io(t,e,T)}finally{z.T=l}}else try{l=n(i,a),of(t,e,l)}catch(T){Io(t,e,T)}}function of(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){uf(t,e,a)},function(a){return Io(t,e,a)}):uf(t,e,n)}function uf(t,e,n){e.status="fulfilled",e.value=n,sf(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,rf(t,n)))}function Io(t,e,n){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=n,sf(e),e=e.next;while(e!==a)}t.action=null}function sf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function cf(t,e){return e}function ff(t,e){if(yt){var n=zt.formState;if(n!==null){t:{var a=ft;if(yt){if(Ut){e:{for(var i=Ut,l=Pe;i.nodeType!==8;){if(!l){i=null;break e}if(i=Be(i.nextSibling),i===null){i=null;break e}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){Ut=Be(i.nextSibling),a=i.data==="F!";break t}}Fn(a)}a=!1}a&&(e=n[0])}}return n=ce(),n.memoizedState=n.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cf,lastRenderedState:e},n.queue=a,n=zf.bind(null,ft,a),a.dispatch=n,a=Fo(!1),l=iu.bind(null,ft,!1,a.queue),a=ce(),i={state:e,dispatch:null,action:t,pending:null},a.queue=i,n=$p.bind(null,ft,i,l,n),i.dispatch=n,a.memoizedState=t,[e,n,!1]}function hf(t){var e=Lt();return df(e,Et,t)}function df(t,e,n){if(e=$o(t,e,cf)[0],t=Gl(ln)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Ri(e)}catch(c){throw c===Ai?Nl:c}else a=e;e=Lt();var i=e.queue,l=i.dispatch;return n!==e.memoizedState&&(ft.flags|=2048,Ha(9,Ll(),Wp.bind(null,i,n),null)),[a,l,t]}function Wp(t,e){t.action=e}function pf(t){var e=Lt(),n=Et;if(n!==null)return df(e,n,t);Lt(),e=e.memoizedState,n=Lt();var a=n.queue.dispatch;return n.memoizedState=t,[e,a,!1]}function Ha(t,e,n,a){return t={tag:t,create:n,deps:a,inst:e,next:null},e=ft.updateQueue,e===null&&(e=Ko(),ft.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(a=n.next,n.next=t,t.next=a,e.lastEffect=t),t}function Ll(){return{destroy:void 0,resource:void 0}}function gf(){return Lt().memoizedState}function Pl(t,e,n,a){var i=ce();a=a===void 0?null:a,ft.flags|=t,i.memoizedState=Ha(1|e,Ll(),n,a)}function Ci(t,e,n,a){var i=Lt();a=a===void 0?null:a;var l=i.memoizedState.inst;Et!==null&&a!==null&&Po(a,Et.memoizedState.deps)?i.memoizedState=Ha(e,l,n,a):(ft.flags|=t,i.memoizedState=Ha(1|e,l,n,a))}function mf(t,e){Pl(8390656,8,t,e)}function bf(t,e){Ci(2048,8,t,e)}function vf(t,e){return Ci(4,2,t,e)}function yf(t,e){return Ci(4,4,t,e)}function xf(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Sf(t,e,n){n=n!=null?n.concat([t]):null,Ci(4,4,xf.bind(null,e,t),n)}function tu(){}function wf(t,e){var n=Lt();e=e===void 0?null:e;var a=n.memoizedState;return e!==null&&Po(e,a[1])?a[0]:(n.memoizedState=[t,e],t)}function Of(t,e){var n=Lt();e=e===void 0?null:e;var a=n.memoizedState;if(e!==null&&Po(e,a[1]))return a[0];if(a=t(),na){gn(!0);try{t()}finally{gn(!1)}}return n.memoizedState=[a,e],a}function eu(t,e,n){return n===void 0||(wn&1073741824)!==0?t.memoizedState=e:(t.memoizedState=n,t=Eh(),ft.lanes|=t,Mn|=t,n)}function Tf(t,e,n,a){return me(n,e)?n:Ra.current!==null?(t=eu(t,n,a),me(t,e)||($t=!0),t):(wn&42)===0?($t=!0,t.memoizedState=n):(t=Eh(),ft.lanes|=t,Mn|=t,e)}function Af(t,e,n,a,i){var l=L.p;L.p=l!==0&&8>l?l:8;var c=z.T,d={};z.T=d,iu(t,!1,e,n);try{var m=i(),T=z.S;if(T!==null&&T(d,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var R=Vp(m,a);ki(t,e,R,Se(t))}else ki(t,e,a,Se(t))}catch(N){ki(t,e,{then:function(){},status:"rejected",reason:N},Se())}finally{L.p=l,z.T=c}}function Fp(){}function nu(t,e,n,a){if(t.tag!==5)throw Error(s(476));var i=Ef(t).queue;Af(t,i,e,et,n===null?Fp:function(){return _f(t),n(a)})}function Ef(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ln,lastRenderedState:et},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ln,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function _f(t){var e=Ef(t).next.queue;ki(t,e,{},Se())}function au(){return le(Wi)}function Df(){return Lt().memoizedState}function Mf(){return Lt().memoizedState}function Ip(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Se();t=xn(n);var a=Sn(e,t,n);a!==null&&(we(a,e,n),_i(a,e,n)),e={cache:ko()},t.payload=e;return}e=e.return}}function tg(t,e,n){var a=Se();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Xl(t)?Rf(e,n):(n=Oo(t,e,n,a),n!==null&&(we(n,t,a),Cf(n,e,a)))}function zf(t,e,n){var a=Se();ki(t,e,n,a)}function ki(t,e,n,a){var i={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xl(t))Rf(e,i);else{var l=t.alternate;if(t.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var c=e.lastRenderedState,d=l(c,n);if(i.hasEagerState=!0,i.eagerState=d,me(d,c))return _l(t,e,i,0),zt===null&&El(),!1}catch{}finally{}if(n=Oo(t,e,i,a),n!==null)return we(n,t,a),Cf(n,e,a),!0}return!1}function iu(t,e,n,a){if(a={lane:2,revertLane:Uu(),action:a,hasEagerState:!1,eagerState:null,next:null},Xl(t)){if(e)throw Error(s(479))}else e=Oo(t,n,a,2),e!==null&&we(e,t,2)}function Xl(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function Rf(t,e){Ca=Bl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Cf(t,e,n){if((n&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,Ys(t,n)}}var Zl={readContext:le,use:jl,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useLayoutEffect:Bt,useInsertionEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useSyncExternalStore:Bt,useId:Bt,useHostTransitionStatus:Bt,useFormState:Bt,useActionState:Bt,useOptimistic:Bt,useMemoCache:Bt,useCacheRefresh:Bt},kf={readContext:le,use:jl,useCallback:function(t,e){return ce().memoizedState=[t,e===void 0?null:e],t},useContext:le,useEffect:mf,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Pl(4194308,4,xf.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pl(4194308,4,t,e)},useInsertionEffect:function(t,e){Pl(4,2,t,e)},useMemo:function(t,e){var n=ce();e=e===void 0?null:e;var a=t();if(na){gn(!0);try{t()}finally{gn(!1)}}return n.memoizedState=[a,e],a},useReducer:function(t,e,n){var a=ce();if(n!==void 0){var i=n(e);if(na){gn(!0);try{n(e)}finally{gn(!1)}}}else i=e;return a.memoizedState=a.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=tg.bind(null,ft,t),[a.memoizedState,t]},useRef:function(t){var e=ce();return t={current:t},e.memoizedState=t},useState:function(t){t=Fo(t);var e=t.queue,n=zf.bind(null,ft,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:tu,useDeferredValue:function(t,e){var n=ce();return eu(n,t,e)},useTransition:function(){var t=Fo(!1);return t=Af.bind(null,ft,t.queue,!0,!1),ce().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var a=ft,i=ce();if(yt){if(n===void 0)throw Error(s(407));n=n()}else{if(n=e(),zt===null)throw Error(s(349));(bt&124)!==0||Ic(a,e,n)}i.memoizedState=n;var l={value:n,getSnapshot:e};return i.queue=l,mf(ef.bind(null,a,l,t),[t]),a.flags|=2048,Ha(9,Ll(),tf.bind(null,a,l,n,e),null),n},useId:function(){var t=ce(),e=zt.identifierPrefix;if(yt){var n=en,a=tn;n=(a&~(1<<32-ge(a)-1)).toString(32)+n,e="«"+e+"R"+n,n=Yl++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=Kp++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:au,useFormState:ff,useActionState:ff,useOptimistic:function(t){var e=ce();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=iu.bind(null,ft,!0,n),n.dispatch=e,[t,e]},useMemoCache:Jo,useCacheRefresh:function(){return ce().memoizedState=Ip.bind(null,ft)}},Hf={readContext:le,use:jl,useCallback:wf,useContext:le,useEffect:bf,useImperativeHandle:Sf,useInsertionEffect:vf,useLayoutEffect:yf,useMemo:Of,useReducer:Gl,useRef:gf,useState:function(){return Gl(ln)},useDebugValue:tu,useDeferredValue:function(t,e){var n=Lt();return Tf(n,Et.memoizedState,t,e)},useTransition:function(){var t=Gl(ln)[0],e=Lt().memoizedState;return[typeof t=="boolean"?t:Ri(t),e]},useSyncExternalStore:Fc,useId:Df,useHostTransitionStatus:au,useFormState:hf,useActionState:hf,useOptimistic:function(t,e){var n=Lt();return lf(n,Et,t,e)},useMemoCache:Jo,useCacheRefresh:Mf},eg={readContext:le,use:jl,useCallback:wf,useContext:le,useEffect:bf,useImperativeHandle:Sf,useInsertionEffect:vf,useLayoutEffect:yf,useMemo:Of,useReducer:Wo,useRef:gf,useState:function(){return Wo(ln)},useDebugValue:tu,useDeferredValue:function(t,e){var n=Lt();return Et===null?eu(n,t,e):Tf(n,Et.memoizedState,t,e)},useTransition:function(){var t=Wo(ln)[0],e=Lt().memoizedState;return[typeof t=="boolean"?t:Ri(t),e]},useSyncExternalStore:Fc,useId:Df,useHostTransitionStatus:au,useFormState:pf,useActionState:pf,useOptimistic:function(t,e){var n=Lt();return Et!==null?lf(n,Et,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Jo,useCacheRefresh:Mf},Na=null,Hi=0;function Ql(t){var e=Hi;return Hi+=1,Na===null&&(Na=[]),Xc(Na,t,e)}function Ni(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Vl(t,e){throw e.$$typeof===j?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Nf(t){var e=t._init;return e(t._payload)}function Uf(t){function e(S,y){if(t){var O=S.deletions;O===null?(S.deletions=[y],S.flags|=16):O.push(y)}}function n(S,y){if(!t)return null;for(;y!==null;)e(S,y),y=y.sibling;return null}function a(S){for(var y=new Map;S!==null;)S.key!==null?y.set(S.key,S):y.set(S.index,S),S=S.sibling;return y}function i(S,y){return S=Ie(S,y),S.index=0,S.sibling=null,S}function l(S,y,O){return S.index=O,t?(O=S.alternate,O!==null?(O=O.index,O<y?(S.flags|=67108866,y):O):(S.flags|=67108866,y)):(S.flags|=1048576,y)}function c(S){return t&&S.alternate===null&&(S.flags|=67108866),S}function d(S,y,O,H){return y===null||y.tag!==6?(y=Ao(O,S.mode,H),y.return=S,y):(y=i(y,O),y.return=S,y)}function m(S,y,O,H){var Q=O.type;return Q===X?R(S,y,O.props.children,H,O.key):y!==null&&(y.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===M&&Nf(Q)===y.type)?(y=i(y,O.props),Ni(y,O),y.return=S,y):(y=Ml(O.type,O.key,O.props,null,S.mode,H),Ni(y,O),y.return=S,y)}function T(S,y,O,H){return y===null||y.tag!==4||y.stateNode.containerInfo!==O.containerInfo||y.stateNode.implementation!==O.implementation?(y=Eo(O,S.mode,H),y.return=S,y):(y=i(y,O.children||[]),y.return=S,y)}function R(S,y,O,H,Q){return y===null||y.tag!==7?(y=Kn(O,S.mode,H,Q),y.return=S,y):(y=i(y,O),y.return=S,y)}function N(S,y,O){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=Ao(""+y,S.mode,O),y.return=S,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Z:return O=Ml(y.type,y.key,y.props,null,S.mode,O),Ni(O,y),O.return=S,O;case J:return y=Eo(y,S.mode,O),y.return=S,y;case M:var H=y._init;return y=H(y._payload),N(S,y,O)}if(Ct(y)||rt(y))return y=Kn(y,S.mode,O,null),y.return=S,y;if(typeof y.then=="function")return N(S,Ql(y),O);if(y.$$typeof===k)return N(S,kl(S,y),O);Vl(S,y)}return null}function A(S,y,O,H){var Q=y!==null?y.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return Q!==null?null:d(S,y,""+O,H);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Z:return O.key===Q?m(S,y,O,H):null;case J:return O.key===Q?T(S,y,O,H):null;case M:return Q=O._init,O=Q(O._payload),A(S,y,O,H)}if(Ct(O)||rt(O))return Q!==null?null:R(S,y,O,H,null);if(typeof O.then=="function")return A(S,y,Ql(O),H);if(O.$$typeof===k)return A(S,y,kl(S,O),H);Vl(S,O)}return null}function E(S,y,O,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return S=S.get(O)||null,d(y,S,""+H,Q);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case Z:return S=S.get(H.key===null?O:H.key)||null,m(y,S,H,Q);case J:return S=S.get(H.key===null?O:H.key)||null,T(y,S,H,Q);case M:var ht=H._init;return H=ht(H._payload),E(S,y,O,H,Q)}if(Ct(H)||rt(H))return S=S.get(O)||null,R(y,S,H,Q,null);if(typeof H.then=="function")return E(S,y,O,Ql(H),Q);if(H.$$typeof===k)return E(S,y,O,kl(y,H),Q);Vl(y,H)}return null}function lt(S,y,O,H){for(var Q=null,ht=null,$=y,it=y=0,Ft=null;$!==null&&it<O.length;it++){$.index>it?(Ft=$,$=null):Ft=$.sibling;var vt=A(S,$,O[it],H);if(vt===null){$===null&&($=Ft);break}t&&$&&vt.alternate===null&&e(S,$),y=l(vt,y,it),ht===null?Q=vt:ht.sibling=vt,ht=vt,$=Ft}if(it===O.length)return n(S,$),yt&&$n(S,it),Q;if($===null){for(;it<O.length;it++)$=N(S,O[it],H),$!==null&&(y=l($,y,it),ht===null?Q=$:ht.sibling=$,ht=$);return yt&&$n(S,it),Q}for($=a($);it<O.length;it++)Ft=E($,S,it,O[it],H),Ft!==null&&(t&&Ft.alternate!==null&&$.delete(Ft.key===null?it:Ft.key),y=l(Ft,y,it),ht===null?Q=Ft:ht.sibling=Ft,ht=Ft);return t&&$.forEach(function(Bn){return e(S,Bn)}),yt&&$n(S,it),Q}function nt(S,y,O,H){if(O==null)throw Error(s(151));for(var Q=null,ht=null,$=y,it=y=0,Ft=null,vt=O.next();$!==null&&!vt.done;it++,vt=O.next()){$.index>it?(Ft=$,$=null):Ft=$.sibling;var Bn=A(S,$,vt.value,H);if(Bn===null){$===null&&($=Ft);break}t&&$&&Bn.alternate===null&&e(S,$),y=l(Bn,y,it),ht===null?Q=Bn:ht.sibling=Bn,ht=Bn,$=Ft}if(vt.done)return n(S,$),yt&&$n(S,it),Q;if($===null){for(;!vt.done;it++,vt=O.next())vt=N(S,vt.value,H),vt!==null&&(y=l(vt,y,it),ht===null?Q=vt:ht.sibling=vt,ht=vt);return yt&&$n(S,it),Q}for($=a($);!vt.done;it++,vt=O.next())vt=E($,S,it,vt.value,H),vt!==null&&(t&&vt.alternate!==null&&$.delete(vt.key===null?it:vt.key),y=l(vt,y,it),ht===null?Q=vt:ht.sibling=vt,ht=vt);return t&&$.forEach(function(nm){return e(S,nm)}),yt&&$n(S,it),Q}function Dt(S,y,O,H){if(typeof O=="object"&&O!==null&&O.type===X&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case Z:t:{for(var Q=O.key;y!==null;){if(y.key===Q){if(Q=O.type,Q===X){if(y.tag===7){n(S,y.sibling),H=i(y,O.props.children),H.return=S,S=H;break t}}else if(y.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===M&&Nf(Q)===y.type){n(S,y.sibling),H=i(y,O.props),Ni(H,O),H.return=S,S=H;break t}n(S,y);break}else e(S,y);y=y.sibling}O.type===X?(H=Kn(O.props.children,S.mode,H,O.key),H.return=S,S=H):(H=Ml(O.type,O.key,O.props,null,S.mode,H),Ni(H,O),H.return=S,S=H)}return c(S);case J:t:{for(Q=O.key;y!==null;){if(y.key===Q)if(y.tag===4&&y.stateNode.containerInfo===O.containerInfo&&y.stateNode.implementation===O.implementation){n(S,y.sibling),H=i(y,O.children||[]),H.return=S,S=H;break t}else{n(S,y);break}else e(S,y);y=y.sibling}H=Eo(O,S.mode,H),H.return=S,S=H}return c(S);case M:return Q=O._init,O=Q(O._payload),Dt(S,y,O,H)}if(Ct(O))return lt(S,y,O,H);if(rt(O)){if(Q=rt(O),typeof Q!="function")throw Error(s(150));return O=Q.call(O),nt(S,y,O,H)}if(typeof O.then=="function")return Dt(S,y,Ql(O),H);if(O.$$typeof===k)return Dt(S,y,kl(S,O),H);Vl(S,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,y!==null&&y.tag===6?(n(S,y.sibling),H=i(y,O),H.return=S,S=H):(n(S,y),H=Ao(O,S.mode,H),H.return=S,S=H),c(S)):n(S,y)}return function(S,y,O,H){try{Hi=0;var Q=Dt(S,y,O,H);return Na=null,Q}catch($){if($===Ai||$===Nl)throw $;var ht=be(29,$,null,S.mode);return ht.lanes=H,ht.return=S,ht}finally{}}}var Ua=Uf(!0),qf=Uf(!1),Ce=q(null),Xe=null;function On(t){var e=t.alternate;P(Qt,Qt.current&1),P(Ce,t),Xe===null&&(e===null||Ra.current!==null||e.memoizedState!==null)&&(Xe=t)}function Bf(t){if(t.tag===22){if(P(Qt,Qt.current),P(Ce,t),Xe===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Xe=t)}}else Tn()}function Tn(){P(Qt,Qt.current),P(Ce,Ce.current)}function rn(t){G(Ce),Xe===t&&(Xe=null),G(Qt)}var Qt=q(0);function Kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Ku(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function lu(t,e,n,a){e=t.memoizedState,n=n(a,e),n=n==null?e:U({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ru={enqueueSetState:function(t,e,n){t=t._reactInternals;var a=Se(),i=xn(a);i.payload=e,n!=null&&(i.callback=n),e=Sn(t,i,a),e!==null&&(we(e,t,a),_i(e,t,a))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var a=Se(),i=xn(a);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Sn(t,i,a),e!==null&&(we(e,t,a),_i(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Se(),a=xn(n);a.tag=2,e!=null&&(a.callback=e),e=Sn(t,a,n),e!==null&&(we(e,t,n),_i(e,t,n))}};function Yf(t,e,n,a,i,l,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,l,c):e.prototype&&e.prototype.isPureReactComponent?!bi(n,a)||!bi(i,l):!0}function jf(t,e,n,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,a),e.state!==t&&ru.enqueueReplaceState(e,e.state,null)}function aa(t,e){var n=e;if("ref"in e){n={};for(var a in e)a!=="ref"&&(n[a]=e[a])}if(t=t.defaultProps){n===e&&(n=U({},n));for(var i in t)n[i]===void 0&&(n[i]=t[i])}return n}var Jl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Gf(t){Jl(t)}function Lf(t){console.error(t)}function Pf(t){Jl(t)}function $l(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Xf(t,e,n){try{var a=t.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ou(t,e,n){return n=xn(n),n.tag=3,n.payload={element:null},n.callback=function(){$l(t,e)},n}function Zf(t){return t=xn(t),t.tag=3,t}function Qf(t,e,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var l=a.value;t.payload=function(){return i(l)},t.callback=function(){Xf(e,n,a)}}var c=n.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(t.callback=function(){Xf(e,n,a),typeof i!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var d=a.stack;this.componentDidCatch(a.value,{componentStack:d!==null?d:""})})}function ng(t,e,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=n.alternate,e!==null&&wi(e,n,i,!0),n=Ce.current,n!==null){switch(n.tag){case 13:return Xe===null?Ru():n.alternate===null&&qt===0&&(qt=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===Uo?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([a]):e.add(a),ku(t,a,i)),!1;case 22:return n.flags|=65536,a===Uo?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([a]):n.add(a)),ku(t,a,i)),!1}throw Error(s(435,n.tag))}return ku(t,a,i),Ru(),!1}if(yt)return e=Ce.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,a!==Mo&&(t=Error(s(422),{cause:a}),Si(De(t,n)))):(a!==Mo&&(e=Error(s(423),{cause:a}),Si(De(e,n))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,a=De(a,n),i=ou(t.stateNode,a,i),Yo(t,i),qt!==4&&(qt=2)),!1;var l=Error(s(520),{cause:a});if(l=De(l,n),Li===null?Li=[l]:Li.push(l),qt!==4&&(qt=2),e===null)return!0;a=De(a,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=i&-i,n.lanes|=t,t=ou(n.stateNode,a,t),Yo(n,t),!1;case 1:if(e=n.type,l=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(zn===null||!zn.has(l))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Zf(i),Qf(i,t,n,a),Yo(n,i),!1}n=n.return}while(n!==null);return!1}var Vf=Error(s(461)),$t=!1;function te(t,e,n,a){e.child=t===null?qf(e,null,n,a):Ua(e,t.child,n,a)}function Kf(t,e,n,a,i){n=n.render;var l=e.ref;if("ref"in a){var c={};for(var d in a)d!=="ref"&&(c[d]=a[d])}else c=a;return ta(e),a=Xo(t,e,n,c,l,i),d=Zo(),t!==null&&!$t?(Qo(t,e,i),on(t,e,i)):(yt&&d&&_o(e),e.flags|=1,te(t,e,a,i),e.child)}function Jf(t,e,n,a,i){if(t===null){var l=n.type;return typeof l=="function"&&!To(l)&&l.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=l,$f(t,e,l,a,i)):(t=Ml(n.type,null,a,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(l=t.child,!gu(t,i)){var c=l.memoizedProps;if(n=n.compare,n=n!==null?n:bi,n(c,a)&&t.ref===e.ref)return on(t,e,i)}return e.flags|=1,t=Ie(l,a),t.ref=e.ref,t.return=e,e.child=t}function $f(t,e,n,a,i){if(t!==null){var l=t.memoizedProps;if(bi(l,a)&&t.ref===e.ref)if($t=!1,e.pendingProps=a=l,gu(t,i))(t.flags&131072)!==0&&($t=!0);else return e.lanes=t.lanes,on(t,e,i)}return uu(t,e,n,a,i)}function Wf(t,e,n){var a=e.pendingProps,i=a.children,l=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=l!==null?l.baseLanes|n:n,t!==null){for(i=e.child=t.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;e.childLanes=l&~a}else e.childLanes=0,e.child=null;return Ff(t,e,a,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Hl(e,l!==null?l.cachePool:null),l!==null?Jc(e,l):Go(),Bf(e);else return e.lanes=e.childLanes=536870912,Ff(t,e,l!==null?l.baseLanes|n:n,n)}else l!==null?(Hl(e,l.cachePool),Jc(e,l),Tn(),e.memoizedState=null):(t!==null&&Hl(e,null),Go(),Tn());return te(t,e,i,n),e.child}function Ff(t,e,n,a){var i=No();return i=i===null?null:{parent:Zt._currentValue,pool:i},e.memoizedState={baseLanes:n,cachePool:i},t!==null&&Hl(e,null),Go(),Bf(e),t!==null&&wi(t,e,a,!0),null}function Wl(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function uu(t,e,n,a,i){return ta(e),n=Xo(t,e,n,a,void 0,i),a=Zo(),t!==null&&!$t?(Qo(t,e,i),on(t,e,i)):(yt&&a&&_o(e),e.flags|=1,te(t,e,n,i),e.child)}function If(t,e,n,a,i,l){return ta(e),e.updateQueue=null,n=Wc(e,a,n,i),$c(t),a=Zo(),t!==null&&!$t?(Qo(t,e,l),on(t,e,l)):(yt&&a&&_o(e),e.flags|=1,te(t,e,n,l),e.child)}function th(t,e,n,a,i){if(ta(e),e.stateNode===null){var l=Ea,c=n.contextType;typeof c=="object"&&c!==null&&(l=le(c)),l=new n(a,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=ru,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=a,l.state=e.memoizedState,l.refs={},qo(e),c=n.contextType,l.context=typeof c=="object"&&c!==null?le(c):Ea,l.state=e.memoizedState,c=n.getDerivedStateFromProps,typeof c=="function"&&(lu(e,n,c,a),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(c=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),c!==l.state&&ru.enqueueReplaceState(l,l.state,null),Mi(e,a,l,i),Di(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){l=e.stateNode;var d=e.memoizedProps,m=aa(n,d);l.props=m;var T=l.context,R=n.contextType;c=Ea,typeof R=="object"&&R!==null&&(c=le(R));var N=n.getDerivedStateFromProps;R=typeof N=="function"||typeof l.getSnapshotBeforeUpdate=="function",d=e.pendingProps!==d,R||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(d||T!==c)&&jf(e,l,a,c),yn=!1;var A=e.memoizedState;l.state=A,Mi(e,a,l,i),Di(),T=e.memoizedState,d||A!==T||yn?(typeof N=="function"&&(lu(e,n,N,a),T=e.memoizedState),(m=yn||Yf(e,n,m,a,A,T,c))?(R||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=T),l.props=a,l.state=T,l.context=c,a=m):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{l=e.stateNode,Bo(t,e),c=e.memoizedProps,R=aa(n,c),l.props=R,N=e.pendingProps,A=l.context,T=n.contextType,m=Ea,typeof T=="object"&&T!==null&&(m=le(T)),d=n.getDerivedStateFromProps,(T=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==N||A!==m)&&jf(e,l,a,m),yn=!1,A=e.memoizedState,l.state=A,Mi(e,a,l,i),Di();var E=e.memoizedState;c!==N||A!==E||yn||t!==null&&t.dependencies!==null&&Cl(t.dependencies)?(typeof d=="function"&&(lu(e,n,d,a),E=e.memoizedState),(R=yn||Yf(e,n,R,a,A,E,m)||t!==null&&t.dependencies!==null&&Cl(t.dependencies))?(T||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,E,m),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,E,m)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===t.memoizedProps&&A===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&A===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=E),l.props=a,l.state=E,l.context=m,a=R):(typeof l.componentDidUpdate!="function"||c===t.memoizedProps&&A===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&A===t.memoizedState||(e.flags|=1024),a=!1)}return l=a,Wl(t,e),a=(e.flags&128)!==0,l||a?(l=e.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,t!==null&&a?(e.child=Ua(e,t.child,null,i),e.child=Ua(e,null,n,i)):te(t,e,n,i),e.memoizedState=l.state,t=e.child):t=on(t,e,i),t}function eh(t,e,n,a){return xi(),e.flags|=256,te(t,e,n,a),e.child}var su={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cu(t){return{baseLanes:t,cachePool:Gc()}}function fu(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=ke),t}function nh(t,e,n){var a=e.pendingProps,i=!1,l=(e.flags&128)!==0,c;if((c=l)||(c=t!==null&&t.memoizedState===null?!1:(Qt.current&2)!==0),c&&(i=!0,e.flags&=-129),c=(e.flags&32)!==0,e.flags&=-33,t===null){if(yt){if(i?On(e):Tn(),yt){var d=Ut,m;if(m=d){t:{for(m=d,d=Pe;m.nodeType!==8;){if(!d){d=null;break t}if(m=Be(m.nextSibling),m===null){d=null;break t}}d=m}d!==null?(e.memoizedState={dehydrated:d,treeContext:Jn!==null?{id:tn,overflow:en}:null,retryLane:536870912,hydrationErrors:null},m=be(18,null,null,0),m.stateNode=d,m.return=e,e.child=m,oe=e,Ut=null,m=!0):m=!1}m||Fn(e)}if(d=e.memoizedState,d!==null&&(d=d.dehydrated,d!==null))return Ku(d)?e.lanes=32:e.lanes=536870912,null;rn(e)}return d=a.children,a=a.fallback,i?(Tn(),i=e.mode,d=Fl({mode:"hidden",children:d},i),a=Kn(a,i,n,null),d.return=e,a.return=e,d.sibling=a,e.child=d,i=e.child,i.memoizedState=cu(n),i.childLanes=fu(t,c,n),e.memoizedState=su,a):(On(e),hu(e,d))}if(m=t.memoizedState,m!==null&&(d=m.dehydrated,d!==null)){if(l)e.flags&256?(On(e),e.flags&=-257,e=du(t,e,n)):e.memoizedState!==null?(Tn(),e.child=t.child,e.flags|=128,e=null):(Tn(),i=a.fallback,d=e.mode,a=Fl({mode:"visible",children:a.children},d),i=Kn(i,d,n,null),i.flags|=2,a.return=e,i.return=e,a.sibling=i,e.child=a,Ua(e,t.child,null,n),a=e.child,a.memoizedState=cu(n),a.childLanes=fu(t,c,n),e.memoizedState=su,e=i);else if(On(e),Ku(d)){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;c=T,a=Error(s(419)),a.stack="",a.digest=c,Si({value:a,source:null,stack:null}),e=du(t,e,n)}else if($t||wi(t,e,n,!1),c=(n&t.childLanes)!==0,$t||c){if(c=zt,c!==null&&(a=n&-n,a=(a&42)!==0?1:Kr(a),a=(a&(c.suspendedLanes|n))!==0?0:a,a!==0&&a!==m.retryLane))throw m.retryLane=a,Aa(t,a),we(c,t,a),Vf;d.data==="$?"||Ru(),e=du(t,e,n)}else d.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=m.treeContext,Ut=Be(d.nextSibling),oe=e,yt=!0,Wn=null,Pe=!1,t!==null&&(ze[Re++]=tn,ze[Re++]=en,ze[Re++]=Jn,tn=t.id,en=t.overflow,Jn=e),e=hu(e,a.children),e.flags|=4096);return e}return i?(Tn(),i=a.fallback,d=e.mode,m=t.child,T=m.sibling,a=Ie(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&65011712,T!==null?i=Ie(T,i):(i=Kn(i,d,n,null),i.flags|=2),i.return=e,a.return=e,a.sibling=i,e.child=a,a=i,i=e.child,d=t.child.memoizedState,d===null?d=cu(n):(m=d.cachePool,m!==null?(T=Zt._currentValue,m=m.parent!==T?{parent:T,pool:T}:m):m=Gc(),d={baseLanes:d.baseLanes|n,cachePool:m}),i.memoizedState=d,i.childLanes=fu(t,c,n),e.memoizedState=su,a):(On(e),n=t.child,t=n.sibling,n=Ie(n,{mode:"visible",children:a.children}),n.return=e,n.sibling=null,t!==null&&(c=e.deletions,c===null?(e.deletions=[t],e.flags|=16):c.push(t)),e.child=n,e.memoizedState=null,n)}function hu(t,e){return e=Fl({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Fl(t,e){return t=be(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function du(t,e,n){return Ua(e,t.child,null,n),t=hu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ah(t,e,n){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Ro(t.return,e,n)}function pu(t,e,n,a,i){var l=t.memoizedState;l===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(l.isBackwards=e,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=n,l.tailMode=i)}function ih(t,e,n){var a=e.pendingProps,i=a.revealOrder,l=a.tail;if(te(t,e,a.children,n),a=Qt.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ah(t,n,e);else if(t.tag===19)ah(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(P(Qt,a),i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Kl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),pu(e,!1,i,n,l);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Kl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}pu(e,!0,n,null,l);break;case"together":pu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function on(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Mn|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(wi(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,n=Ie(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ie(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Cl(t)))}function ag(t,e,n){switch(e.tag){case 3:St(e,e.stateNode.containerInfo),vn(e,Zt,t.memoizedState.cache),xi();break;case 27:case 5:Ln(e);break;case 4:St(e,e.stateNode.containerInfo);break;case 10:vn(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(On(e),e.flags|=128,null):(n&e.child.childLanes)!==0?nh(t,e,n):(On(e),t=on(t,e,n),t!==null?t.sibling:null);On(e);break;case 19:var i=(t.flags&128)!==0;if(a=(n&e.childLanes)!==0,a||(wi(t,e,n,!1),a=(n&e.childLanes)!==0),i){if(a)return ih(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),P(Qt,Qt.current),a)break;return null;case 22:case 23:return e.lanes=0,Wf(t,e,n);case 24:vn(e,Zt,t.memoizedState.cache)}return on(t,e,n)}function lh(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)$t=!0;else{if(!gu(t,n)&&(e.flags&128)===0)return $t=!1,ag(t,e,n);$t=(t.flags&131072)!==0}else $t=!1,yt&&(e.flags&1048576)!==0&&Hc(e,Rl,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,i=a._init;if(a=i(a._payload),e.type=a,typeof a=="function")To(a)?(t=aa(a,t),e.tag=1,e=th(null,e,a,t,n)):(e.tag=0,e=uu(null,e,a,t,n));else{if(a!=null){if(i=a.$$typeof,i===u){e.tag=11,e=Kf(null,e,a,t,n);break t}else if(i===x){e.tag=14,e=Jf(null,e,a,t,n);break t}}throw e=jt(a)||a,Error(s(306,e,""))}}return e;case 0:return uu(t,e,e.type,e.pendingProps,n);case 1:return a=e.type,i=aa(a,e.pendingProps),th(t,e,a,i,n);case 3:t:{if(St(e,e.stateNode.containerInfo),t===null)throw Error(s(387));a=e.pendingProps;var l=e.memoizedState;i=l.element,Bo(t,e),Mi(e,a,null,n);var c=e.memoizedState;if(a=c.cache,vn(e,Zt,a),a!==l.cache&&Co(e,[Zt],n,!0),Di(),a=c.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:c.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=eh(t,e,a,n);break t}else if(a!==i){i=De(Error(s(424)),e),Si(i),e=eh(t,e,a,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ut=Be(t.firstChild),oe=e,yt=!0,Wn=null,Pe=!0,n=qf(e,null,a,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(xi(),a===i){e=on(t,e,n);break t}te(t,e,a,n)}e=e.child}return e;case 26:return Wl(t,e),t===null?(n=sd(e.type,null,e.pendingProps,null))?e.memoizedState=n:yt||(n=e.type,t=e.pendingProps,a=hr(at.current).createElement(n),a[ie]=e,a[ue]=t,ne(a,n,t),Jt(a),e.stateNode=a):e.memoizedState=sd(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ln(e),t===null&&yt&&(a=e.stateNode=rd(e.type,e.pendingProps,at.current),oe=e,Pe=!0,i=Ut,kn(e.type)?(Ju=i,Ut=Be(a.firstChild)):Ut=i),te(t,e,e.pendingProps.children,n),Wl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&yt&&((i=a=Ut)&&(a=Rg(a,e.type,e.pendingProps,Pe),a!==null?(e.stateNode=a,oe=e,Ut=Be(a.firstChild),Pe=!1,i=!0):i=!1),i||Fn(e)),Ln(e),i=e.type,l=e.pendingProps,c=t!==null?t.memoizedProps:null,a=l.children,Zu(i,l)?a=null:c!==null&&Zu(i,c)&&(e.flags|=32),e.memoizedState!==null&&(i=Xo(t,e,Jp,null,null,n),Wi._currentValue=i),Wl(t,e),te(t,e,a,n),e.child;case 6:return t===null&&yt&&((t=n=Ut)&&(n=Cg(n,e.pendingProps,Pe),n!==null?(e.stateNode=n,oe=e,Ut=null,t=!0):t=!1),t||Fn(e)),null;case 13:return nh(t,e,n);case 4:return St(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Ua(e,null,a,n):te(t,e,a,n),e.child;case 11:return Kf(t,e,e.type,e.pendingProps,n);case 7:return te(t,e,e.pendingProps,n),e.child;case 8:return te(t,e,e.pendingProps.children,n),e.child;case 12:return te(t,e,e.pendingProps.children,n),e.child;case 10:return a=e.pendingProps,vn(e,e.type,a.value),te(t,e,a.children,n),e.child;case 9:return i=e.type._context,a=e.pendingProps.children,ta(e),i=le(i),a=a(i),e.flags|=1,te(t,e,a,n),e.child;case 14:return Jf(t,e,e.type,e.pendingProps,n);case 15:return $f(t,e,e.type,e.pendingProps,n);case 19:return ih(t,e,n);case 31:return a=e.pendingProps,n=e.mode,a={mode:a.mode,children:a.children},t===null?(n=Fl(a,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=Ie(t.child,a),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return Wf(t,e,n);case 24:return ta(e),a=le(Zt),t===null?(i=No(),i===null&&(i=zt,l=ko(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=n),i=l),e.memoizedState={parent:a,cache:i},qo(e),vn(e,Zt,i)):((t.lanes&n)!==0&&(Bo(t,e),Mi(e,null,null,n),Di()),i=t.memoizedState,l=e.memoizedState,i.parent!==a?(i={parent:a,cache:a},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),vn(e,Zt,a)):(a=l.cache,vn(e,Zt,a),a!==i.cache&&Co(e,[Zt],n,!0))),te(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function un(t){t.flags|=4}function rh(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!pd(e)){if(e=Ce.current,e!==null&&((bt&4194048)===bt?Xe!==null:(bt&62914560)!==bt&&(bt&536870912)===0||e!==Xe))throw Ei=Uo,Lc;t.flags|=8192}}function Il(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?qs():536870912,t.lanes|=e,ja|=e)}function Ui(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,a=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=a,t.childLanes=n,e}function ig(t,e,n){var a=e.pendingProps;switch(Do(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return Nt(e),null;case 3:return n=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),an(Zt),ae(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(yi(e)?un(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,qc())),Nt(e),null;case 26:return n=e.memoizedState,t===null?(un(e),n!==null?(Nt(e),rh(e,n)):(Nt(e),e.flags&=-16777217)):n?n!==t.memoizedState?(un(e),Nt(e),rh(e,n)):(Nt(e),e.flags&=-16777217):(t.memoizedProps!==a&&un(e),Nt(e),e.flags&=-16777217),null;case 27:$e(e),n=at.current;var i=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&un(e);else{if(!a){if(e.stateNode===null)throw Error(s(166));return Nt(e),null}t=I.current,yi(e)?Nc(e):(t=rd(i,a,n),e.stateNode=t,un(e))}return Nt(e),null;case 5:if($e(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&un(e);else{if(!a){if(e.stateNode===null)throw Error(s(166));return Nt(e),null}if(t=I.current,yi(e))Nc(e);else{switch(i=hr(at.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}t[ie]=e,t[ue]=a;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=t;t:switch(ne(t,n,a),n){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&un(e)}}return Nt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&un(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(s(166));if(t=at.current,yi(e)){if(t=e.stateNode,n=e.memoizedProps,a=null,i=oe,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}t[ie]=e,t=!!(t.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Ih(t.nodeValue,n)),t||Fn(e)}else t=hr(t).createTextNode(a),t[ie]=e,e.stateNode=t}return Nt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=yi(e),a!==null&&a.dehydrated!==null){if(t===null){if(!i)throw Error(s(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[ie]=e}else xi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Nt(e),i=!1}else i=qc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(rn(e),e):(rn(e),null)}if(rn(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=a!==null,t=t!==null&&t.memoizedState!==null,n){a=e.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var l=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==i&&(a.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),Il(e,e.updateQueue),Nt(e),null;case 4:return ae(),t===null&&ju(e.stateNode.containerInfo),Nt(e),null;case 10:return an(e.type),Nt(e),null;case 19:if(G(Qt),i=e.memoizedState,i===null)return Nt(e),null;if(a=(e.flags&128)!==0,l=i.rendering,l===null)if(a)Ui(i,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(l=Kl(t),l!==null){for(e.flags|=128,Ui(i,!1),t=l.updateQueue,e.updateQueue=t,Il(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)kc(n,t),n=n.sibling;return P(Qt,Qt.current&1|2),e.child}t=t.sibling}i.tail!==null&&Le()>nr&&(e.flags|=128,a=!0,Ui(i,!1),e.lanes=4194304)}else{if(!a)if(t=Kl(l),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Il(e,t),Ui(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!yt)return Nt(e),null}else 2*Le()-i.renderingStartTime>nr&&n!==536870912&&(e.flags|=128,a=!0,Ui(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(t=i.last,t!==null?t.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Le(),e.sibling=null,t=Qt.current,P(Qt,a?t&1|2:t&1),e):(Nt(e),null);case 22:case 23:return rn(e),Lo(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(n&536870912)!==0&&(e.flags&128)===0&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),n=e.updateQueue,n!==null&&Il(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==n&&(e.flags|=2048),t!==null&&G(ea),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),an(Zt),Nt(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function lg(t,e){switch(Do(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return an(Zt),ae(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return $e(e),null;case 13:if(rn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return G(Qt),null;case 4:return ae(),null;case 10:return an(e.type),null;case 22:case 23:return rn(e),Lo(),t!==null&&G(ea),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return an(Zt),null;case 25:return null;default:return null}}function oh(t,e){switch(Do(e),e.tag){case 3:an(Zt),ae();break;case 26:case 27:case 5:$e(e);break;case 4:ae();break;case 13:rn(e);break;case 19:G(Qt);break;case 10:an(e.type);break;case 22:case 23:rn(e),Lo(),t!==null&&G(ea);break;case 24:an(Zt)}}function qi(t,e){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&t)===t){a=void 0;var l=n.create,c=n.inst;a=l(),c.destroy=a}n=n.next}while(n!==i)}}catch(d){Mt(e,e.return,d)}}function An(t,e,n){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&t)===t){var c=a.inst,d=c.destroy;if(d!==void 0){c.destroy=void 0,i=e;var m=n,T=d;try{T()}catch(R){Mt(i,m,R)}}}a=a.next}while(a!==l)}}catch(R){Mt(e,e.return,R)}}function uh(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Kc(e,n)}catch(a){Mt(t,t.return,a)}}}function sh(t,e,n){n.props=aa(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(a){Mt(t,e,a)}}function Bi(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof n=="function"?t.refCleanup=n(a):n.current=a}}catch(i){Mt(t,e,i)}}function Ze(t,e){var n=t.ref,a=t.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){Mt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function ch(t){var e=t.type,n=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break t;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){Mt(t,t.return,i)}}function mu(t,e,n){try{var a=t.stateNode;Eg(a,t.type,n,e),a[ue]=e}catch(i){Mt(t,t.return,i)}}function fh(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&kn(t.type)||t.tag===4}function bu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||fh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&kn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vu(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fr));else if(a!==4&&(a===27&&kn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(vu(t,e,n),t=t.sibling;t!==null;)vu(t,e,n),t=t.sibling}function tr(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(a!==4&&(a===27&&kn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(tr(t,e,n),t=t.sibling;t!==null;)tr(t,e,n),t=t.sibling}function hh(t){var e=t.stateNode,n=t.memoizedProps;try{for(var a=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ne(e,a,n),e[ie]=t,e[ue]=n}catch(l){Mt(t,t.return,l)}}var sn=!1,Yt=!1,yu=!1,dh=typeof WeakSet=="function"?WeakSet:Set,Wt=null;function rg(t,e){if(t=t.containerInfo,Pu=vr,t=Oc(t),bo(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break t}var c=0,d=-1,m=-1,T=0,R=0,N=t,A=null;e:for(;;){for(var E;N!==n||i!==0&&N.nodeType!==3||(d=c+i),N!==l||a!==0&&N.nodeType!==3||(m=c+a),N.nodeType===3&&(c+=N.nodeValue.length),(E=N.firstChild)!==null;)A=N,N=E;for(;;){if(N===t)break e;if(A===n&&++T===i&&(d=c),A===l&&++R===a&&(m=c),(E=N.nextSibling)!==null)break;N=A,A=N.parentNode}N=E}n=d===-1||m===-1?null:{start:d,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xu={focusedElem:t,selectionRange:n},vr=!1,Wt=e;Wt!==null;)if(e=Wt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Wt=t;else for(;Wt!==null;){switch(e=Wt,l=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&l!==null){t=void 0,n=e,i=l.memoizedProps,l=l.memoizedState,a=n.stateNode;try{var lt=aa(n.type,i,n.elementType===n.type);t=a.getSnapshotBeforeUpdate(lt,l),a.__reactInternalSnapshotBeforeUpdate=t}catch(nt){Mt(n,n.return,nt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Vu(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Vu(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,Wt=t;break}Wt=e.return}}function ph(t,e,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:En(t,n),a&4&&qi(5,n);break;case 1:if(En(t,n),a&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(c){Mt(n,n.return,c)}else{var i=aa(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(c){Mt(n,n.return,c)}}a&64&&uh(n),a&512&&Bi(n,n.return);break;case 3:if(En(t,n),a&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Kc(t,e)}catch(c){Mt(n,n.return,c)}}break;case 27:e===null&&a&4&&hh(n);case 26:case 5:En(t,n),e===null&&a&4&&ch(n),a&512&&Bi(n,n.return);break;case 12:En(t,n);break;case 13:En(t,n),a&4&&bh(t,n),a&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=gg.bind(null,n),kg(t,n))));break;case 22:if(a=n.memoizedState!==null||sn,!a){e=e!==null&&e.memoizedState!==null||Yt,i=sn;var l=Yt;sn=a,(Yt=e)&&!l?_n(t,n,(n.subtreeFlags&8772)!==0):En(t,n),sn=i,Yt=l}break;case 30:break;default:En(t,n)}}function gh(t){var e=t.alternate;e!==null&&(t.alternate=null,gh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Wr(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var kt=null,fe=!1;function cn(t,e,n){for(n=n.child;n!==null;)mh(t,e,n),n=n.sibling}function mh(t,e,n){if(pe&&typeof pe.onCommitFiberUnmount=="function")try{pe.onCommitFiberUnmount(li,n)}catch{}switch(n.tag){case 26:Yt||Ze(n,e),cn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Yt||Ze(n,e);var a=kt,i=fe;kn(n.type)&&(kt=n.stateNode,fe=!1),cn(t,e,n),Vi(n.stateNode),kt=a,fe=i;break;case 5:Yt||Ze(n,e);case 6:if(a=kt,i=fe,kt=null,cn(t,e,n),kt=a,fe=i,kt!==null)if(fe)try{(kt.nodeType===9?kt.body:kt.nodeName==="HTML"?kt.ownerDocument.body:kt).removeChild(n.stateNode)}catch(l){Mt(n,e,l)}else try{kt.removeChild(n.stateNode)}catch(l){Mt(n,e,l)}break;case 18:kt!==null&&(fe?(t=kt,id(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),el(t)):id(kt,n.stateNode));break;case 4:a=kt,i=fe,kt=n.stateNode.containerInfo,fe=!0,cn(t,e,n),kt=a,fe=i;break;case 0:case 11:case 14:case 15:Yt||An(2,n,e),Yt||An(4,n,e),cn(t,e,n);break;case 1:Yt||(Ze(n,e),a=n.stateNode,typeof a.componentWillUnmount=="function"&&sh(n,e,a)),cn(t,e,n);break;case 21:cn(t,e,n);break;case 22:Yt=(a=Yt)||n.memoizedState!==null,cn(t,e,n),Yt=a;break;default:cn(t,e,n)}}function bh(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{el(t)}catch(n){Mt(e,e.return,n)}}function og(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new dh),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new dh),e;default:throw Error(s(435,t.tag))}}function xu(t,e){var n=og(t);e.forEach(function(a){var i=mg.bind(null,t,a);n.has(a)||(n.add(a),a.then(i,i))})}function ve(t,e){var n=e.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],l=t,c=e,d=c;t:for(;d!==null;){switch(d.tag){case 27:if(kn(d.type)){kt=d.stateNode,fe=!1;break t}break;case 5:kt=d.stateNode,fe=!1;break t;case 3:case 4:kt=d.stateNode.containerInfo,fe=!0;break t}d=d.return}if(kt===null)throw Error(s(160));mh(l,c,i),kt=null,fe=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)vh(e,t),e=e.sibling}var qe=null;function vh(t,e){var n=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ve(e,t),ye(t),a&4&&(An(3,t,t.return),qi(3,t),An(5,t,t.return));break;case 1:ve(e,t),ye(t),a&512&&(Yt||n===null||Ze(n,n.return)),a&64&&sn&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=qe;if(ve(e,t),ye(t),a&512&&(Yt||n===null||Ze(n,n.return)),a&4){var l=n!==null?n.memoizedState:null;if(a=t.memoizedState,n===null)if(a===null)if(t.stateNode===null){t:{a=t.type,n=t.memoizedProps,i=i.ownerDocument||i;e:switch(a){case"title":l=i.getElementsByTagName("title")[0],(!l||l[ui]||l[ie]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(a),i.head.insertBefore(l,i.querySelector("head > title"))),ne(l,a,n),l[ie]=t,Jt(l),a=l;break t;case"link":var c=hd("link","href",i).get(a+(n.href||""));if(c){for(var d=0;d<c.length;d++)if(l=c[d],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){c.splice(d,1);break e}}l=i.createElement(a),ne(l,a,n),i.head.appendChild(l);break;case"meta":if(c=hd("meta","content",i).get(a+(n.content||""))){for(d=0;d<c.length;d++)if(l=c[d],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){c.splice(d,1);break e}}l=i.createElement(a),ne(l,a,n),i.head.appendChild(l);break;default:throw Error(s(468,a))}l[ie]=t,Jt(l),a=l}t.stateNode=a}else dd(i,t.type,t.stateNode);else t.stateNode=fd(i,a,t.memoizedProps);else l!==a?(l===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):l.count--,a===null?dd(i,t.type,t.stateNode):fd(i,a,t.memoizedProps)):a===null&&t.stateNode!==null&&mu(t,t.memoizedProps,n.memoizedProps)}break;case 27:ve(e,t),ye(t),a&512&&(Yt||n===null||Ze(n,n.return)),n!==null&&a&4&&mu(t,t.memoizedProps,n.memoizedProps);break;case 5:if(ve(e,t),ye(t),a&512&&(Yt||n===null||Ze(n,n.return)),t.flags&32){i=t.stateNode;try{va(i,"")}catch(E){Mt(t,t.return,E)}}a&4&&t.stateNode!=null&&(i=t.memoizedProps,mu(t,i,n!==null?n.memoizedProps:i)),a&1024&&(yu=!0);break;case 6:if(ve(e,t),ye(t),a&4){if(t.stateNode===null)throw Error(s(162));a=t.memoizedProps,n=t.stateNode;try{n.nodeValue=a}catch(E){Mt(t,t.return,E)}}break;case 3:if(gr=null,i=qe,qe=dr(e.containerInfo),ve(e,t),qe=i,ye(t),a&4&&n!==null&&n.memoizedState.isDehydrated)try{el(e.containerInfo)}catch(E){Mt(t,t.return,E)}yu&&(yu=!1,yh(t));break;case 4:a=qe,qe=dr(t.stateNode.containerInfo),ve(e,t),ye(t),qe=a;break;case 12:ve(e,t),ye(t);break;case 13:ve(e,t),ye(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Eu=Le()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,xu(t,a)));break;case 22:i=t.memoizedState!==null;var m=n!==null&&n.memoizedState!==null,T=sn,R=Yt;if(sn=T||i,Yt=R||m,ve(e,t),Yt=R,sn=T,ye(t),a&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(n===null||m||sn||Yt||ia(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){m=n=e;try{if(l=m.stateNode,i)c=l.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{d=m.stateNode;var N=m.memoizedProps.style,A=N!=null&&N.hasOwnProperty("display")?N.display:null;d.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(E){Mt(m,m.return,E)}}}else if(e.tag===6){if(n===null){m=e;try{m.stateNode.nodeValue=i?"":m.memoizedProps}catch(E){Mt(m,m.return,E)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,xu(t,n))));break;case 19:ve(e,t),ye(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,xu(t,a)));break;case 30:break;case 21:break;default:ve(e,t),ye(t)}}function ye(t){var e=t.flags;if(e&2){try{for(var n,a=t.return;a!==null;){if(fh(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode,l=bu(t);tr(t,l,i);break;case 5:var c=n.stateNode;n.flags&32&&(va(c,""),n.flags&=-33);var d=bu(t);tr(t,d,c);break;case 3:case 4:var m=n.stateNode.containerInfo,T=bu(t);vu(t,T,m);break;default:throw Error(s(161))}}catch(R){Mt(t,t.return,R)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yh(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;yh(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function En(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)ph(t,e.alternate,e),e=e.sibling}function ia(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:An(4,e,e.return),ia(e);break;case 1:Ze(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&sh(e,e.return,n),ia(e);break;case 27:Vi(e.stateNode);case 26:case 5:Ze(e,e.return),ia(e);break;case 22:e.memoizedState===null&&ia(e);break;case 30:ia(e);break;default:ia(e)}t=t.sibling}}function _n(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,i=t,l=e,c=l.flags;switch(l.tag){case 0:case 11:case 15:_n(i,l,n),qi(4,l);break;case 1:if(_n(i,l,n),a=l,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(T){Mt(a,a.return,T)}if(a=l,i=a.updateQueue,i!==null){var d=a.stateNode;try{var m=i.shared.hiddenCallbacks;if(m!==null)for(i.shared.hiddenCallbacks=null,i=0;i<m.length;i++)Vc(m[i],d)}catch(T){Mt(a,a.return,T)}}n&&c&64&&uh(l),Bi(l,l.return);break;case 27:hh(l);case 26:case 5:_n(i,l,n),n&&a===null&&c&4&&ch(l),Bi(l,l.return);break;case 12:_n(i,l,n);break;case 13:_n(i,l,n),n&&c&4&&bh(i,l);break;case 22:l.memoizedState===null&&_n(i,l,n),Bi(l,l.return);break;case 30:break;default:_n(i,l,n)}e=e.sibling}}function Su(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Oi(n))}function wu(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Oi(t))}function Qe(t,e,n,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xh(t,e,n,a),e=e.sibling}function xh(t,e,n,a){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Qe(t,e,n,a),i&2048&&qi(9,e);break;case 1:Qe(t,e,n,a);break;case 3:Qe(t,e,n,a),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Oi(t)));break;case 12:if(i&2048){Qe(t,e,n,a),t=e.stateNode;try{var l=e.memoizedProps,c=l.id,d=l.onPostCommit;typeof d=="function"&&d(c,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(m){Mt(e,e.return,m)}}else Qe(t,e,n,a);break;case 13:Qe(t,e,n,a);break;case 23:break;case 22:l=e.stateNode,c=e.alternate,e.memoizedState!==null?l._visibility&2?Qe(t,e,n,a):Yi(t,e):l._visibility&2?Qe(t,e,n,a):(l._visibility|=2,qa(t,e,n,a,(e.subtreeFlags&10256)!==0)),i&2048&&Su(c,e);break;case 24:Qe(t,e,n,a),i&2048&&wu(e.alternate,e);break;default:Qe(t,e,n,a)}}function qa(t,e,n,a,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var l=t,c=e,d=n,m=a,T=c.flags;switch(c.tag){case 0:case 11:case 15:qa(l,c,d,m,i),qi(8,c);break;case 23:break;case 22:var R=c.stateNode;c.memoizedState!==null?R._visibility&2?qa(l,c,d,m,i):Yi(l,c):(R._visibility|=2,qa(l,c,d,m,i)),i&&T&2048&&Su(c.alternate,c);break;case 24:qa(l,c,d,m,i),i&&T&2048&&wu(c.alternate,c);break;default:qa(l,c,d,m,i)}e=e.sibling}}function Yi(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,a=e,i=a.flags;switch(a.tag){case 22:Yi(n,a),i&2048&&Su(a.alternate,a);break;case 24:Yi(n,a),i&2048&&wu(a.alternate,a);break;default:Yi(n,a)}e=e.sibling}}var ji=8192;function Ba(t){if(t.subtreeFlags&ji)for(t=t.child;t!==null;)Sh(t),t=t.sibling}function Sh(t){switch(t.tag){case 26:Ba(t),t.flags&ji&&t.memoizedState!==null&&Qg(qe,t.memoizedState,t.memoizedProps);break;case 5:Ba(t);break;case 3:case 4:var e=qe;qe=dr(t.stateNode.containerInfo),Ba(t),qe=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=ji,ji=16777216,Ba(t),ji=e):Ba(t));break;default:Ba(t)}}function wh(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Gi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];Wt=a,Th(a,t)}wh(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Oh(t),t=t.sibling}function Oh(t){switch(t.tag){case 0:case 11:case 15:Gi(t),t.flags&2048&&An(9,t,t.return);break;case 3:Gi(t);break;case 12:Gi(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,er(t)):Gi(t);break;default:Gi(t)}}function er(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];Wt=a,Th(a,t)}wh(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:An(8,e,e.return),er(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,er(e));break;default:er(e)}t=t.sibling}}function Th(t,e){for(;Wt!==null;){var n=Wt;switch(n.tag){case 0:case 11:case 15:An(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Oi(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Wt=a;else t:for(n=t;Wt!==null;){a=Wt;var i=a.sibling,l=a.return;if(gh(a),a===n){Wt=null;break t}if(i!==null){i.return=l,Wt=i;break t}Wt=l}}}var ug={getCacheForType:function(t){var e=le(Zt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},sg=typeof WeakMap=="function"?WeakMap:Map,Tt=0,zt=null,gt=null,bt=0,At=0,xe=null,Dn=!1,Ya=!1,Ou=!1,fn=0,qt=0,Mn=0,la=0,Tu=0,ke=0,ja=0,Li=null,he=null,Au=!1,Eu=0,nr=1/0,ar=null,zn=null,ee=0,Rn=null,Ga=null,La=0,_u=0,Du=null,Ah=null,Pi=0,Mu=null;function Se(){if((Tt&2)!==0&&bt!==0)return bt&-bt;if(z.T!==null){var t=Ma;return t!==0?t:Uu()}return js()}function Eh(){ke===0&&(ke=(bt&536870912)===0||yt?Us():536870912);var t=Ce.current;return t!==null&&(t.flags|=32),ke}function we(t,e,n){(t===zt&&(At===2||At===9)||t.cancelPendingCommit!==null)&&(Pa(t,0),Cn(t,bt,ke,!1)),oi(t,n),((Tt&2)===0||t!==zt)&&(t===zt&&((Tt&2)===0&&(la|=n),qt===4&&Cn(t,bt,ke,!1)),Ve(t))}function _h(t,e,n){if((Tt&6)!==0)throw Error(s(327));var a=!n&&(e&124)===0&&(e&t.expiredLanes)===0||ri(t,e),i=a?hg(t,e):Cu(t,e,!0),l=a;do{if(i===0){Ya&&!a&&Cn(t,e,0,!1);break}else{if(n=t.current.alternate,l&&!cg(n)){i=Cu(t,e,!1),l=!1;continue}if(i===2){if(l=e,t.errorRecoveryDisabledLanes&l)var c=0;else c=t.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){e=c;t:{var d=t;i=Li;var m=d.current.memoizedState.isDehydrated;if(m&&(Pa(d,c).flags|=256),c=Cu(d,c,!1),c!==2){if(Ou&&!m){d.errorRecoveryDisabledLanes|=l,la|=l,i=4;break t}l=he,he=i,l!==null&&(he===null?he=l:he.push.apply(he,l))}i=c}if(l=!1,i!==2)continue}}if(i===1){Pa(t,0),Cn(t,e,0,!0);break}t:{switch(a=t,l=i,l){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:Cn(a,e,ke,!Dn);break t;case 2:he=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(i=Eu+300-Le(),10<i)){if(Cn(a,e,ke,!Dn),pl(a,0,!0)!==0)break t;a.timeoutHandle=nd(Dh.bind(null,a,n,he,ar,Au,e,ke,la,ja,Dn,l,2,-0,0),i);break t}Dh(a,n,he,ar,Au,e,ke,la,ja,Dn,l,0,-0,0)}}break}while(!0);Ve(t)}function Dh(t,e,n,a,i,l,c,d,m,T,R,N,A,E){if(t.timeoutHandle=-1,N=e.subtreeFlags,(N&8192||(N&16785408)===16785408)&&($i={stylesheets:null,count:0,unsuspend:Zg},Sh(e),N=Vg(),N!==null)){t.cancelPendingCommit=N(Nh.bind(null,t,e,l,n,a,i,c,d,m,R,1,A,E)),Cn(t,l,c,!T);return}Nh(t,e,l,n,a,i,c,d,m)}function cg(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],l=i.getSnapshot;i=i.value;try{if(!me(l(),i))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Cn(t,e,n,a){e&=~Tu,e&=~la,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var i=e;0<i;){var l=31-ge(i),c=1<<l;a[l]=-1,i&=~c}n!==0&&Bs(t,n,e)}function ir(){return(Tt&6)===0?(Xi(0),!1):!0}function zu(){if(gt!==null){if(At===0)var t=gt.return;else t=gt,nn=In=null,Vo(t),Na=null,Hi=0,t=gt;for(;t!==null;)oh(t.alternate,t),t=t.return;gt=null}}function Pa(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,Dg(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),zu(),zt=t,gt=n=Ie(t.current,null),bt=e,At=0,xe=null,Dn=!1,Ya=ri(t,e),Ou=!1,ja=ke=Tu=la=Mn=qt=0,he=Li=null,Au=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var i=31-ge(a),l=1<<i;e|=t[i],a&=~l}return fn=e,El(),n}function Mh(t,e){ft=null,z.H=Zl,e===Ai||e===Nl?(e=Zc(),At=3):e===Lc?(e=Zc(),At=4):At=e===Vf?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,xe=e,gt===null&&(qt=1,$l(t,De(e,t.current)))}function zh(){var t=z.H;return z.H=Zl,t===null?Zl:t}function Rh(){var t=z.A;return z.A=ug,t}function Ru(){qt=4,Dn||(bt&4194048)!==bt&&Ce.current!==null||(Ya=!0),(Mn&134217727)===0&&(la&134217727)===0||zt===null||Cn(zt,bt,ke,!1)}function Cu(t,e,n){var a=Tt;Tt|=2;var i=zh(),l=Rh();(zt!==t||bt!==e)&&(ar=null,Pa(t,e)),e=!1;var c=qt;t:do try{if(At!==0&&gt!==null){var d=gt,m=xe;switch(At){case 8:zu(),c=6;break t;case 3:case 2:case 9:case 6:Ce.current===null&&(e=!0);var T=At;if(At=0,xe=null,Xa(t,d,m,T),n&&Ya){c=0;break t}break;default:T=At,At=0,xe=null,Xa(t,d,m,T)}}fg(),c=qt;break}catch(R){Mh(t,R)}while(!0);return e&&t.shellSuspendCounter++,nn=In=null,Tt=a,z.H=i,z.A=l,gt===null&&(zt=null,bt=0,El()),c}function fg(){for(;gt!==null;)Ch(gt)}function hg(t,e){var n=Tt;Tt|=2;var a=zh(),i=Rh();zt!==t||bt!==e?(ar=null,nr=Le()+500,Pa(t,e)):Ya=ri(t,e);t:do try{if(At!==0&&gt!==null){e=gt;var l=xe;e:switch(At){case 1:At=0,xe=null,Xa(t,e,l,1);break;case 2:case 9:if(Pc(l)){At=0,xe=null,kh(e);break}e=function(){At!==2&&At!==9||zt!==t||(At=7),Ve(t)},l.then(e,e);break t;case 3:At=7;break t;case 4:At=5;break t;case 7:Pc(l)?(At=0,xe=null,kh(e)):(At=0,xe=null,Xa(t,e,l,7));break;case 5:var c=null;switch(gt.tag){case 26:c=gt.memoizedState;case 5:case 27:var d=gt;if(!c||pd(c)){At=0,xe=null;var m=d.sibling;if(m!==null)gt=m;else{var T=d.return;T!==null?(gt=T,lr(T)):gt=null}break e}}At=0,xe=null,Xa(t,e,l,5);break;case 6:At=0,xe=null,Xa(t,e,l,6);break;case 8:zu(),qt=6;break t;default:throw Error(s(462))}}dg();break}catch(R){Mh(t,R)}while(!0);return nn=In=null,z.H=a,z.A=i,Tt=n,gt!==null?0:(zt=null,bt=0,El(),qt)}function dg(){for(;gt!==null&&!N0();)Ch(gt)}function Ch(t){var e=lh(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?lr(t):gt=e}function kh(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=If(n,e,e.pendingProps,e.type,void 0,bt);break;case 11:e=If(n,e,e.pendingProps,e.type.render,e.ref,bt);break;case 5:Vo(e);default:oh(n,e),e=gt=kc(e,fn),e=lh(n,e,fn)}t.memoizedProps=t.pendingProps,e===null?lr(t):gt=e}function Xa(t,e,n,a){nn=In=null,Vo(e),Na=null,Hi=0;var i=e.return;try{if(ng(t,i,e,n,bt)){qt=1,$l(t,De(n,t.current)),gt=null;return}}catch(l){if(i!==null)throw gt=i,l;qt=1,$l(t,De(n,t.current)),gt=null;return}e.flags&32768?(yt||a===1?t=!0:Ya||(bt&536870912)!==0?t=!1:(Dn=t=!0,(a===2||a===9||a===3||a===6)&&(a=Ce.current,a!==null&&a.tag===13&&(a.flags|=16384))),Hh(e,t)):lr(e)}function lr(t){var e=t;do{if((e.flags&32768)!==0){Hh(e,Dn);return}t=e.return;var n=ig(e.alternate,e,fn);if(n!==null){gt=n;return}if(e=e.sibling,e!==null){gt=e;return}gt=e=t}while(e!==null);qt===0&&(qt=5)}function Hh(t,e){do{var n=lg(t.alternate,t);if(n!==null){n.flags&=32767,gt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){gt=t;return}gt=t=n}while(t!==null);qt=6,gt=null}function Nh(t,e,n,a,i,l,c,d,m){t.cancelPendingCommit=null;do rr();while(ee!==0);if((Tt&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(l=e.lanes|e.childLanes,l|=wo,Z0(t,n,l,c,d,m),t===zt&&(gt=zt=null,bt=0),Ga=e,Rn=t,La=n,_u=l,Du=i,Ah=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,bg(fl,function(){return jh(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=z.T,z.T=null,i=L.p,L.p=2,c=Tt,Tt|=4;try{rg(t,e,n)}finally{Tt=c,L.p=i,z.T=a}}ee=1,Uh(),qh(),Bh()}}function Uh(){if(ee===1){ee=0;var t=Rn,e=Ga,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=z.T,z.T=null;var a=L.p;L.p=2;var i=Tt;Tt|=4;try{vh(e,t);var l=Xu,c=Oc(t.containerInfo),d=l.focusedElem,m=l.selectionRange;if(c!==d&&d&&d.ownerDocument&&wc(d.ownerDocument.documentElement,d)){if(m!==null&&bo(d)){var T=m.start,R=m.end;if(R===void 0&&(R=T),"selectionStart"in d)d.selectionStart=T,d.selectionEnd=Math.min(R,d.value.length);else{var N=d.ownerDocument||document,A=N&&N.defaultView||window;if(A.getSelection){var E=A.getSelection(),lt=d.textContent.length,nt=Math.min(m.start,lt),Dt=m.end===void 0?nt:Math.min(m.end,lt);!E.extend&&nt>Dt&&(c=Dt,Dt=nt,nt=c);var S=Sc(d,nt),y=Sc(d,Dt);if(S&&y&&(E.rangeCount!==1||E.anchorNode!==S.node||E.anchorOffset!==S.offset||E.focusNode!==y.node||E.focusOffset!==y.offset)){var O=N.createRange();O.setStart(S.node,S.offset),E.removeAllRanges(),nt>Dt?(E.addRange(O),E.extend(y.node,y.offset)):(O.setEnd(y.node,y.offset),E.addRange(O))}}}}for(N=[],E=d;E=E.parentNode;)E.nodeType===1&&N.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<N.length;d++){var H=N[d];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}vr=!!Pu,Xu=Pu=null}finally{Tt=i,L.p=a,z.T=n}}t.current=e,ee=2}}function qh(){if(ee===2){ee=0;var t=Rn,e=Ga,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=z.T,z.T=null;var a=L.p;L.p=2;var i=Tt;Tt|=4;try{ph(t,e.alternate,e)}finally{Tt=i,L.p=a,z.T=n}}ee=3}}function Bh(){if(ee===4||ee===3){ee=0,U0();var t=Rn,e=Ga,n=La,a=Ah;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ee=5:(ee=0,Ga=Rn=null,Yh(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(zn=null),Jr(n),e=e.stateNode,pe&&typeof pe.onCommitFiberRoot=="function")try{pe.onCommitFiberRoot(li,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=z.T,i=L.p,L.p=2,z.T=null;try{for(var l=t.onRecoverableError,c=0;c<a.length;c++){var d=a[c];l(d.value,{componentStack:d.stack})}}finally{z.T=e,L.p=i}}(La&3)!==0&&rr(),Ve(t),i=t.pendingLanes,(n&4194090)!==0&&(i&42)!==0?t===Mu?Pi++:(Pi=0,Mu=t):Pi=0,Xi(0)}}function Yh(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Oi(e)))}function rr(t){return Uh(),qh(),Bh(),jh()}function jh(){if(ee!==5)return!1;var t=Rn,e=_u;_u=0;var n=Jr(La),a=z.T,i=L.p;try{L.p=32>n?32:n,z.T=null,n=Du,Du=null;var l=Rn,c=La;if(ee=0,Ga=Rn=null,La=0,(Tt&6)!==0)throw Error(s(331));var d=Tt;if(Tt|=4,Oh(l.current),xh(l,l.current,c,n),Tt=d,Xi(0,!1),pe&&typeof pe.onPostCommitFiberRoot=="function")try{pe.onPostCommitFiberRoot(li,l)}catch{}return!0}finally{L.p=i,z.T=a,Yh(t,e)}}function Gh(t,e,n){e=De(n,e),e=ou(t.stateNode,e,2),t=Sn(t,e,2),t!==null&&(oi(t,2),Ve(t))}function Mt(t,e,n){if(t.tag===3)Gh(t,t,n);else for(;e!==null;){if(e.tag===3){Gh(e,t,n);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(zn===null||!zn.has(a))){t=De(n,t),n=Zf(2),a=Sn(e,n,2),a!==null&&(Qf(n,a,e,t),oi(a,2),Ve(a));break}}e=e.return}}function ku(t,e,n){var a=t.pingCache;if(a===null){a=t.pingCache=new sg;var i=new Set;a.set(e,i)}else i=a.get(e),i===void 0&&(i=new Set,a.set(e,i));i.has(n)||(Ou=!0,i.add(n),t=pg.bind(null,t,e,n),e.then(t,t))}function pg(t,e,n){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,zt===t&&(bt&n)===n&&(qt===4||qt===3&&(bt&62914560)===bt&&300>Le()-Eu?(Tt&2)===0&&Pa(t,0):Tu|=n,ja===bt&&(ja=0)),Ve(t)}function Lh(t,e){e===0&&(e=qs()),t=Aa(t,e),t!==null&&(oi(t,e),Ve(t))}function gg(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Lh(t,n)}function mg(t,e){var n=0;switch(t.tag){case 13:var a=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(e),Lh(t,n)}function bg(t,e){return Zr(t,e)}var or=null,Za=null,Hu=!1,ur=!1,Nu=!1,ra=0;function Ve(t){t!==Za&&t.next===null&&(Za===null?or=Za=t:Za=Za.next=t),ur=!0,Hu||(Hu=!0,yg())}function Xi(t,e){if(!Nu&&ur){Nu=!0;do for(var n=!1,a=or;a!==null;){if(t!==0){var i=a.pendingLanes;if(i===0)var l=0;else{var c=a.suspendedLanes,d=a.pingedLanes;l=(1<<31-ge(42|t)+1)-1,l&=i&~(c&~d),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(n=!0,Qh(a,l))}else l=bt,l=pl(a,a===zt?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||ri(a,l)||(n=!0,Qh(a,l));a=a.next}while(n);Nu=!1}}function vg(){Ph()}function Ph(){ur=Hu=!1;var t=0;ra!==0&&(_g()&&(t=ra),ra=0);for(var e=Le(),n=null,a=or;a!==null;){var i=a.next,l=Xh(a,e);l===0?(a.next=null,n===null?or=i:n.next=i,i===null&&(Za=n)):(n=a,(t!==0||(l&3)!==0)&&(ur=!0)),a=i}Xi(t)}function Xh(t,e){for(var n=t.suspendedLanes,a=t.pingedLanes,i=t.expirationTimes,l=t.pendingLanes&-62914561;0<l;){var c=31-ge(l),d=1<<c,m=i[c];m===-1?((d&n)===0||(d&a)!==0)&&(i[c]=X0(d,e)):m<=e&&(t.expiredLanes|=d),l&=~d}if(e=zt,n=bt,n=pl(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,n===0||t===e&&(At===2||At===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Qr(a),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||ri(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(a!==null&&Qr(a),Jr(n)){case 2:case 8:n=Hs;break;case 32:n=fl;break;case 268435456:n=Ns;break;default:n=fl}return a=Zh.bind(null,t),n=Zr(n,a),t.callbackPriority=e,t.callbackNode=n,e}return a!==null&&a!==null&&Qr(a),t.callbackPriority=2,t.callbackNode=null,2}function Zh(t,e){if(ee!==0&&ee!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(rr()&&t.callbackNode!==n)return null;var a=bt;return a=pl(t,t===zt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(_h(t,a,e),Xh(t,Le()),t.callbackNode!=null&&t.callbackNode===n?Zh.bind(null,t):null)}function Qh(t,e){if(rr())return null;_h(t,e,!0)}function yg(){Mg(function(){(Tt&6)!==0?Zr(ks,vg):Ph()})}function Uu(){return ra===0&&(ra=Us()),ra}function Vh(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:yl(""+t)}function Kh(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function xg(t,e,n,a,i){if(e==="submit"&&n&&n.stateNode===i){var l=Vh((i[ue]||null).action),c=a.submitter;c&&(e=(e=c[ue]||null)?Vh(e.formAction):c.getAttribute("formAction"),e!==null&&(l=e,c=null));var d=new Ol("action","action",null,a,i);t.push({event:d,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ra!==0){var m=c?Kh(i,c):new FormData(i);nu(n,{pending:!0,data:m,method:i.method,action:l},null,m)}}else typeof l=="function"&&(d.preventDefault(),m=c?Kh(i,c):new FormData(i),nu(n,{pending:!0,data:m,method:i.method,action:l},l,m))},currentTarget:i}]})}}for(var qu=0;qu<So.length;qu++){var Bu=So[qu],Sg=Bu.toLowerCase(),wg=Bu[0].toUpperCase()+Bu.slice(1);Ue(Sg,"on"+wg)}Ue(Ec,"onAnimationEnd"),Ue(_c,"onAnimationIteration"),Ue(Dc,"onAnimationStart"),Ue("dblclick","onDoubleClick"),Ue("focusin","onFocus"),Ue("focusout","onBlur"),Ue(Yp,"onTransitionRun"),Ue(jp,"onTransitionStart"),Ue(Gp,"onTransitionCancel"),Ue(Mc,"onTransitionEnd"),ga("onMouseEnter",["mouseout","mouseover"]),ga("onMouseLeave",["mouseout","mouseover"]),ga("onPointerEnter",["pointerout","pointerover"]),ga("onPointerLeave",["pointerout","pointerover"]),Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Og=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zi));function Jh(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var a=t[n],i=a.event;a=a.listeners;t:{var l=void 0;if(e)for(var c=a.length-1;0<=c;c--){var d=a[c],m=d.instance,T=d.currentTarget;if(d=d.listener,m!==l&&i.isPropagationStopped())break t;l=d,i.currentTarget=T;try{l(i)}catch(R){Jl(R)}i.currentTarget=null,l=m}else for(c=0;c<a.length;c++){if(d=a[c],m=d.instance,T=d.currentTarget,d=d.listener,m!==l&&i.isPropagationStopped())break t;l=d,i.currentTarget=T;try{l(i)}catch(R){Jl(R)}i.currentTarget=null,l=m}}}}function mt(t,e){var n=e[$r];n===void 0&&(n=e[$r]=new Set);var a=t+"__bubble";n.has(a)||($h(e,t,2,!1),n.add(a))}function Yu(t,e,n){var a=0;e&&(a|=4),$h(n,t,a,e)}var sr="_reactListening"+Math.random().toString(36).slice(2);function ju(t){if(!t[sr]){t[sr]=!0,Ls.forEach(function(n){n!=="selectionchange"&&(Og.has(n)||Yu(n,!1,t),Yu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sr]||(e[sr]=!0,Yu("selectionchange",!1,e))}}function $h(t,e,n,a){switch(xd(e)){case 2:var i=$g;break;case 8:i=Wg;break;default:i=ts}n=i.bind(null,e,n,t),i=void 0,!oo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),a?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Gu(t,e,n,a,i){var l=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var d=a.stateNode.containerInfo;if(d===i)break;if(c===4)for(c=a.return;c!==null;){var m=c.tag;if((m===3||m===4)&&c.stateNode.containerInfo===i)return;c=c.return}for(;d!==null;){if(c=ha(d),c===null)return;if(m=c.tag,m===5||m===6||m===26||m===27){a=l=c;continue t}d=d.parentNode}}a=a.return}nc(function(){var T=l,R=lo(n),N=[];t:{var A=zc.get(t);if(A!==void 0){var E=Ol,lt=t;switch(t){case"keypress":if(Sl(n)===0)break t;case"keydown":case"keyup":E=bp;break;case"focusin":lt="focus",E=fo;break;case"focusout":lt="blur",E=fo;break;case"beforeblur":case"afterblur":E=fo;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=lc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=lp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=xp;break;case Ec:case _c:case Dc:E=up;break;case Mc:E=wp;break;case"scroll":case"scrollend":E=ap;break;case"wheel":E=Tp;break;case"copy":case"cut":case"paste":E=cp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=oc;break;case"toggle":case"beforetoggle":E=Ep}var nt=(e&4)!==0,Dt=!nt&&(t==="scroll"||t==="scrollend"),S=nt?A!==null?A+"Capture":null:A;nt=[];for(var y=T,O;y!==null;){var H=y;if(O=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||O===null||S===null||(H=ci(y,S),H!=null&&nt.push(Qi(y,H,O))),Dt)break;y=y.return}0<nt.length&&(A=new E(A,lt,null,n,R),N.push({event:A,listeners:nt}))}}if((e&7)===0){t:{if(A=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",A&&n!==io&&(lt=n.relatedTarget||n.fromElement)&&(ha(lt)||lt[fa]))break t;if((E||A)&&(A=R.window===R?R:(A=R.ownerDocument)?A.defaultView||A.parentWindow:window,E?(lt=n.relatedTarget||n.toElement,E=T,lt=lt?ha(lt):null,lt!==null&&(Dt=v(lt),nt=lt.tag,lt!==Dt||nt!==5&&nt!==27&&nt!==6)&&(lt=null)):(E=null,lt=T),E!==lt)){if(nt=lc,H="onMouseLeave",S="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(nt=oc,H="onPointerLeave",S="onPointerEnter",y="pointer"),Dt=E==null?A:si(E),O=lt==null?A:si(lt),A=new nt(H,y+"leave",E,n,R),A.target=Dt,A.relatedTarget=O,H=null,ha(R)===T&&(nt=new nt(S,y+"enter",lt,n,R),nt.target=O,nt.relatedTarget=Dt,H=nt),Dt=H,E&&lt)e:{for(nt=E,S=lt,y=0,O=nt;O;O=Qa(O))y++;for(O=0,H=S;H;H=Qa(H))O++;for(;0<y-O;)nt=Qa(nt),y--;for(;0<O-y;)S=Qa(S),O--;for(;y--;){if(nt===S||S!==null&&nt===S.alternate)break e;nt=Qa(nt),S=Qa(S)}nt=null}else nt=null;E!==null&&Wh(N,A,E,nt,!1),lt!==null&&Dt!==null&&Wh(N,Dt,lt,nt,!0)}}t:{if(A=T?si(T):window,E=A.nodeName&&A.nodeName.toLowerCase(),E==="select"||E==="input"&&A.type==="file")var Q=gc;else if(dc(A))if(mc)Q=Up;else{Q=Hp;var ht=kp}else E=A.nodeName,!E||E.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?T&&ao(T.elementType)&&(Q=gc):Q=Np;if(Q&&(Q=Q(t,T))){pc(N,Q,n,R);break t}ht&&ht(t,A,T),t==="focusout"&&T&&A.type==="number"&&T.memoizedProps.value!=null&&no(A,"number",A.value)}switch(ht=T?si(T):window,t){case"focusin":(dc(ht)||ht.contentEditable==="true")&&(wa=ht,vo=T,vi=null);break;case"focusout":vi=vo=wa=null;break;case"mousedown":yo=!0;break;case"contextmenu":case"mouseup":case"dragend":yo=!1,Tc(N,n,R);break;case"selectionchange":if(Bp)break;case"keydown":case"keyup":Tc(N,n,R)}var $;if(po)t:{switch(t){case"compositionstart":var it="onCompositionStart";break t;case"compositionend":it="onCompositionEnd";break t;case"compositionupdate":it="onCompositionUpdate";break t}it=void 0}else Sa?fc(t,n)&&(it="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(it="onCompositionStart");it&&(uc&&n.locale!=="ko"&&(Sa||it!=="onCompositionStart"?it==="onCompositionEnd"&&Sa&&($=ac()):(bn=R,uo="value"in bn?bn.value:bn.textContent,Sa=!0)),ht=cr(T,it),0<ht.length&&(it=new rc(it,t,null,n,R),N.push({event:it,listeners:ht}),$?it.data=$:($=hc(n),$!==null&&(it.data=$)))),($=Dp?Mp(t,n):zp(t,n))&&(it=cr(T,"onBeforeInput"),0<it.length&&(ht=new rc("onBeforeInput","beforeinput",null,n,R),N.push({event:ht,listeners:it}),ht.data=$)),xg(N,t,T,n,R)}Jh(N,e)})}function Qi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cr(t,e){for(var n=e+"Capture",a=[];t!==null;){var i=t,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=ci(t,n),i!=null&&a.unshift(Qi(t,i,l)),i=ci(t,e),i!=null&&a.push(Qi(t,i,l))),t.tag===3)return a;t=t.return}return[]}function Qa(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Wh(t,e,n,a,i){for(var l=e._reactName,c=[];n!==null&&n!==a;){var d=n,m=d.alternate,T=d.stateNode;if(d=d.tag,m!==null&&m===a)break;d!==5&&d!==26&&d!==27||T===null||(m=T,i?(T=ci(n,l),T!=null&&c.unshift(Qi(n,T,m))):i||(T=ci(n,l),T!=null&&c.push(Qi(n,T,m)))),n=n.return}c.length!==0&&t.push({event:e,listeners:c})}var Tg=/\r\n?/g,Ag=/\u0000|\uFFFD/g;function Fh(t){return(typeof t=="string"?t:""+t).replace(Tg,`
`).replace(Ag,"")}function Ih(t,e){return e=Fh(e),Fh(t)===e}function fr(){}function _t(t,e,n,a,i,l){switch(n){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||va(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&va(t,""+a);break;case"className":ml(t,"class",a);break;case"tabIndex":ml(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ml(t,n,a);break;case"style":tc(t,a,l);break;case"data":if(e!=="object"){ml(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=yl(""+a),t.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(n==="formAction"?(e!=="input"&&_t(t,e,"name",i.name,i,null),_t(t,e,"formEncType",i.formEncType,i,null),_t(t,e,"formMethod",i.formMethod,i,null),_t(t,e,"formTarget",i.formTarget,i,null)):(_t(t,e,"encType",i.encType,i,null),_t(t,e,"method",i.method,i,null),_t(t,e,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=yl(""+a),t.setAttribute(n,a);break;case"onClick":a!=null&&(t.onclick=fr);break;case"onScroll":a!=null&&mt("scroll",t);break;case"onScrollEnd":a!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}n=yl(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""+a):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":a===!0?t.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,a):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(n,a):t.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(n):t.setAttribute(n,a);break;case"popover":mt("beforetoggle",t),mt("toggle",t),gl(t,"popover",a);break;case"xlinkActuate":We(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":We(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":We(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":We(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":We(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":We(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":We(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":We(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":We(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":gl(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ep.get(n)||n,gl(t,n,a))}}function Lu(t,e,n,a,i,l){switch(n){case"style":tc(t,a,l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"children":typeof a=="string"?va(t,a):(typeof a=="number"||typeof a=="bigint")&&va(t,""+a);break;case"onScroll":a!=null&&mt("scroll",t);break;case"onScrollEnd":a!=null&&mt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=fr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ps.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),e=n.slice(2,i?n.length-7:void 0),l=t[ue]||null,l=l!=null?l[n]:null,typeof l=="function"&&t.removeEventListener(e,l,i),typeof a=="function")){typeof l!="function"&&l!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,a,i);break t}n in t?t[n]=a:a===!0?t.setAttribute(n,""):gl(t,n,a)}}}function ne(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var a=!1,i=!1,l;for(l in n)if(n.hasOwnProperty(l)){var c=n[l];if(c!=null)switch(l){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:_t(t,e,l,c,n,null)}}i&&_t(t,e,"srcSet",n.srcSet,n,null),a&&_t(t,e,"src",n.src,n,null);return;case"input":mt("invalid",t);var d=l=c=i=null,m=null,T=null;for(a in n)if(n.hasOwnProperty(a)){var R=n[a];if(R!=null)switch(a){case"name":i=R;break;case"type":c=R;break;case"checked":m=R;break;case"defaultChecked":T=R;break;case"value":l=R;break;case"defaultValue":d=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(137,e));break;default:_t(t,e,a,R,n,null)}}$s(t,l,d,m,T,c,i,!1),bl(t);return;case"select":mt("invalid",t),a=c=l=null;for(i in n)if(n.hasOwnProperty(i)&&(d=n[i],d!=null))switch(i){case"value":l=d;break;case"defaultValue":c=d;break;case"multiple":a=d;default:_t(t,e,i,d,n,null)}e=l,n=c,t.multiple=!!a,e!=null?ba(t,!!a,e,!1):n!=null&&ba(t,!!a,n,!0);return;case"textarea":mt("invalid",t),l=i=a=null;for(c in n)if(n.hasOwnProperty(c)&&(d=n[c],d!=null))switch(c){case"value":a=d;break;case"defaultValue":i=d;break;case"children":l=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(s(91));break;default:_t(t,e,c,d,n,null)}Fs(t,a,i,l),bl(t);return;case"option":for(m in n)if(n.hasOwnProperty(m)&&(a=n[m],a!=null))switch(m){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:_t(t,e,m,a,n,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(a=0;a<Zi.length;a++)mt(Zi[a],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in n)if(n.hasOwnProperty(T)&&(a=n[T],a!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:_t(t,e,T,a,n,null)}return;default:if(ao(e)){for(R in n)n.hasOwnProperty(R)&&(a=n[R],a!==void 0&&Lu(t,e,R,a,n,void 0));return}}for(d in n)n.hasOwnProperty(d)&&(a=n[d],a!=null&&_t(t,e,d,a,n,null))}function Eg(t,e,n,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,c=null,d=null,m=null,T=null,R=null;for(E in n){var N=n[E];if(n.hasOwnProperty(E)&&N!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":m=N;default:a.hasOwnProperty(E)||_t(t,e,E,null,a,N)}}for(var A in a){var E=a[A];if(N=n[A],a.hasOwnProperty(A)&&(E!=null||N!=null))switch(A){case"type":l=E;break;case"name":i=E;break;case"checked":T=E;break;case"defaultChecked":R=E;break;case"value":c=E;break;case"defaultValue":d=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(137,e));break;default:E!==N&&_t(t,e,A,E,a,N)}}eo(t,c,d,m,T,R,l,i);return;case"select":E=c=d=A=null;for(l in n)if(m=n[l],n.hasOwnProperty(l)&&m!=null)switch(l){case"value":break;case"multiple":E=m;default:a.hasOwnProperty(l)||_t(t,e,l,null,a,m)}for(i in a)if(l=a[i],m=n[i],a.hasOwnProperty(i)&&(l!=null||m!=null))switch(i){case"value":A=l;break;case"defaultValue":d=l;break;case"multiple":c=l;default:l!==m&&_t(t,e,i,l,a,m)}e=d,n=c,a=E,A!=null?ba(t,!!n,A,!1):!!a!=!!n&&(e!=null?ba(t,!!n,e,!0):ba(t,!!n,n?[]:"",!1));return;case"textarea":E=A=null;for(d in n)if(i=n[d],n.hasOwnProperty(d)&&i!=null&&!a.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:_t(t,e,d,null,a,i)}for(c in a)if(i=a[c],l=n[c],a.hasOwnProperty(c)&&(i!=null||l!=null))switch(c){case"value":A=i;break;case"defaultValue":E=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==l&&_t(t,e,c,i,a,l)}Ws(t,A,E);return;case"option":for(var lt in n)if(A=n[lt],n.hasOwnProperty(lt)&&A!=null&&!a.hasOwnProperty(lt))switch(lt){case"selected":t.selected=!1;break;default:_t(t,e,lt,null,a,A)}for(m in a)if(A=a[m],E=n[m],a.hasOwnProperty(m)&&A!==E&&(A!=null||E!=null))switch(m){case"selected":t.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:_t(t,e,m,A,a,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in n)A=n[nt],n.hasOwnProperty(nt)&&A!=null&&!a.hasOwnProperty(nt)&&_t(t,e,nt,null,a,A);for(T in a)if(A=a[T],E=n[T],a.hasOwnProperty(T)&&A!==E&&(A!=null||E!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,e));break;default:_t(t,e,T,A,a,E)}return;default:if(ao(e)){for(var Dt in n)A=n[Dt],n.hasOwnProperty(Dt)&&A!==void 0&&!a.hasOwnProperty(Dt)&&Lu(t,e,Dt,void 0,a,A);for(R in a)A=a[R],E=n[R],!a.hasOwnProperty(R)||A===E||A===void 0&&E===void 0||Lu(t,e,R,A,a,E);return}}for(var S in n)A=n[S],n.hasOwnProperty(S)&&A!=null&&!a.hasOwnProperty(S)&&_t(t,e,S,null,a,A);for(N in a)A=a[N],E=n[N],!a.hasOwnProperty(N)||A===E||A==null&&E==null||_t(t,e,N,A,a,E)}var Pu=null,Xu=null;function hr(t){return t.nodeType===9?t:t.ownerDocument}function td(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ed(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Zu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qu=null;function _g(){var t=window.event;return t&&t.type==="popstate"?t===Qu?!1:(Qu=t,!0):(Qu=null,!1)}var nd=typeof setTimeout=="function"?setTimeout:void 0,Dg=typeof clearTimeout=="function"?clearTimeout:void 0,ad=typeof Promise=="function"?Promise:void 0,Mg=typeof queueMicrotask=="function"?queueMicrotask:typeof ad<"u"?function(t){return ad.resolve(null).then(t).catch(zg)}:nd;function zg(t){setTimeout(function(){throw t})}function kn(t){return t==="head"}function id(t,e){var n=e,a=0,i=0;do{var l=n.nextSibling;if(t.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(0<a&&8>a){n=a;var c=t.ownerDocument;if(n&1&&Vi(c.documentElement),n&2&&Vi(c.body),n&4)for(n=c.head,Vi(n),c=n.firstChild;c;){var d=c.nextSibling,m=c.nodeName;c[ui]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=d}}if(i===0){t.removeChild(l),el(e);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:a=n.charCodeAt(0)-48;else a=0;n=l}while(n);el(e)}function Vu(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Vu(n),Wr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function Rg(t,e,n,a){for(;t.nodeType===1;){var i=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[ui])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(l=t.getAttribute("rel"),l==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(l!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(l=t.getAttribute("src"),(l!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===l)return t}else return t;if(t=Be(t.nextSibling),t===null)break}return null}function Cg(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Be(t.nextSibling),t===null))return null;return t}function Ku(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function kg(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var a=function(){e(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Be(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Ju=null;function ld(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function rd(t,e,n){switch(e=hr(n),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Vi(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Wr(t)}var He=new Map,od=new Set;function dr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var hn=L.d;L.d={f:Hg,r:Ng,D:Ug,C:qg,L:Bg,m:Yg,X:Gg,S:jg,M:Lg};function Hg(){var t=hn.f(),e=ir();return t||e}function Ng(t){var e=da(t);e!==null&&e.tag===5&&e.type==="form"?_f(e):hn.r(t)}var Va=typeof document>"u"?null:document;function ud(t,e,n){var a=Va;if(a&&typeof e=="string"&&e){var i=_e(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),od.has(i)||(od.add(i),t={rel:t,crossOrigin:n,href:e},a.querySelector(i)===null&&(e=a.createElement("link"),ne(e,"link",t),Jt(e),a.head.appendChild(e)))}}function Ug(t){hn.D(t),ud("dns-prefetch",t,null)}function qg(t,e){hn.C(t,e),ud("preconnect",t,e)}function Bg(t,e,n){hn.L(t,e,n);var a=Va;if(a&&t&&e){var i='link[rel="preload"][as="'+_e(e)+'"]';e==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+_e(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+_e(n.imageSizes)+'"]')):i+='[href="'+_e(t)+'"]';var l=i;switch(e){case"style":l=Ka(t);break;case"script":l=Ja(t)}He.has(l)||(t=U({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),He.set(l,t),a.querySelector(i)!==null||e==="style"&&a.querySelector(Ki(l))||e==="script"&&a.querySelector(Ji(l))||(e=a.createElement("link"),ne(e,"link",t),Jt(e),a.head.appendChild(e)))}}function Yg(t,e){hn.m(t,e);var n=Va;if(n&&t){var a=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+_e(a)+'"][href="'+_e(t)+'"]',l=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Ja(t)}if(!He.has(l)&&(t=U({rel:"modulepreload",href:t},e),He.set(l,t),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ji(l)))return}a=n.createElement("link"),ne(a,"link",t),Jt(a),n.head.appendChild(a)}}}function jg(t,e,n){hn.S(t,e,n);var a=Va;if(a&&t){var i=pa(a).hoistableStyles,l=Ka(t);e=e||"default";var c=i.get(l);if(!c){var d={loading:0,preload:null};if(c=a.querySelector(Ki(l)))d.loading=5;else{t=U({rel:"stylesheet",href:t,"data-precedence":e},n),(n=He.get(l))&&$u(t,n);var m=c=a.createElement("link");Jt(m),ne(m,"link",t),m._p=new Promise(function(T,R){m.onload=T,m.onerror=R}),m.addEventListener("load",function(){d.loading|=1}),m.addEventListener("error",function(){d.loading|=2}),d.loading|=4,pr(c,e,a)}c={type:"stylesheet",instance:c,count:1,state:d},i.set(l,c)}}}function Gg(t,e){hn.X(t,e);var n=Va;if(n&&t){var a=pa(n).hoistableScripts,i=Ja(t),l=a.get(i);l||(l=n.querySelector(Ji(i)),l||(t=U({src:t,async:!0},e),(e=He.get(i))&&Wu(t,e),l=n.createElement("script"),Jt(l),ne(l,"link",t),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function Lg(t,e){hn.M(t,e);var n=Va;if(n&&t){var a=pa(n).hoistableScripts,i=Ja(t),l=a.get(i);l||(l=n.querySelector(Ji(i)),l||(t=U({src:t,async:!0,type:"module"},e),(e=He.get(i))&&Wu(t,e),l=n.createElement("script"),Jt(l),ne(l,"link",t),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function sd(t,e,n,a){var i=(i=at.current)?dr(i):null;if(!i)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Ka(n.href),n=pa(i).hoistableStyles,a=n.get(e),a||(a={type:"style",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Ka(n.href);var l=pa(i).hoistableStyles,c=l.get(t);if(c||(i=i.ownerDocument||i,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(t,c),(l=i.querySelector(Ki(t)))&&!l._p&&(c.instance=l,c.state.loading=5),He.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},He.set(t,n),l||Pg(i,t,n,c.state))),e&&a===null)throw Error(s(528,""));return c}if(e&&a!==null)throw Error(s(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ja(n),n=pa(i).hoistableScripts,a=n.get(e),a||(a={type:"script",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ka(t){return'href="'+_e(t)+'"'}function Ki(t){return'link[rel="stylesheet"]['+t+"]"}function cd(t){return U({},t,{"data-precedence":t.precedence,precedence:null})}function Pg(t,e,n,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),ne(e,"link",n),Jt(e),t.head.appendChild(e))}function Ja(t){return'[src="'+_e(t)+'"]'}function Ji(t){return"script[async]"+t}function fd(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+_e(n.href)+'"]');if(a)return e.instance=a,Jt(a),a;var i=U({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Jt(a),ne(a,"style",i),pr(a,n.precedence,t),e.instance=a;case"stylesheet":i=Ka(n.href);var l=t.querySelector(Ki(i));if(l)return e.state.loading|=4,e.instance=l,Jt(l),l;a=cd(n),(i=He.get(i))&&$u(a,i),l=(t.ownerDocument||t).createElement("link"),Jt(l);var c=l;return c._p=new Promise(function(d,m){c.onload=d,c.onerror=m}),ne(l,"link",a),e.state.loading|=4,pr(l,n.precedence,t),e.instance=l;case"script":return l=Ja(n.src),(i=t.querySelector(Ji(l)))?(e.instance=i,Jt(i),i):(a=n,(i=He.get(l))&&(a=U({},n),Wu(a,i)),t=t.ownerDocument||t,i=t.createElement("script"),Jt(i),ne(i,"link",a),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,pr(a,n.precedence,t));return e.instance}function pr(t,e,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,l=i,c=0;c<a.length;c++){var d=a[c];if(d.dataset.precedence===e)l=d;else if(l!==i)break}l?l.parentNode.insertBefore(t,l.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function $u(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Wu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var gr=null;function hd(t,e,n){if(gr===null){var a=new Map,i=gr=new Map;i.set(n,a)}else i=gr,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(t))return a;for(a.set(t,null),n=n.getElementsByTagName(t),i=0;i<n.length;i++){var l=n[i];if(!(l[ui]||l[ie]||t==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var c=l.getAttribute(e)||"";c=t+c;var d=a.get(c);d?d.push(l):a.set(c,[l])}}return a}function dd(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function Xg(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function pd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var $i=null;function Zg(){}function Qg(t,e,n){if($i===null)throw Error(s(475));var a=$i;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=Ka(n.href),l=t.querySelector(Ki(i));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=mr.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=l,Jt(l);return}l=t.ownerDocument||t,n=cd(n),(i=He.get(i))&&$u(n,i),l=l.createElement("link"),Jt(l);var c=l;c._p=new Promise(function(d,m){c.onload=d,c.onerror=m}),ne(l,"link",n),e.instance=l}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=mr.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function Vg(){if($i===null)throw Error(s(475));var t=$i;return t.stylesheets&&t.count===0&&Fu(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&Fu(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function mr(){if(this.count--,this.count===0){if(this.stylesheets)Fu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var br=null;function Fu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,br=new Map,e.forEach(Kg,t),br=null,mr.call(t))}function Kg(t,e){if(!(e.state.loading&4)){var n=br.get(t);if(n)var a=n.get(null);else{n=new Map,br.set(t,n);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var c=i[l];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(n.set(c.dataset.precedence,c),a=c)}a&&n.set(null,a)}i=e.instance,c=i.getAttribute("data-precedence"),l=n.get(c)||a,l===a&&n.set(null,i),n.set(c,i),this.count++,a=mr.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),l?l.parentNode.insertBefore(i,l.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Wi={$$typeof:k,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function Jg(t,e,n,a,i,l,c,d){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vr(0),this.hiddenUpdates=Vr(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function gd(t,e,n,a,i,l,c,d,m,T,R,N){return t=new Jg(t,e,n,c,d,m,T,N),e=1,l===!0&&(e|=24),l=be(3,null,null,e),t.current=l,l.stateNode=t,e=ko(),e.refCount++,t.pooledCache=e,e.refCount++,l.memoizedState={element:a,isDehydrated:n,cache:e},qo(l),t}function md(t){return t?(t=Ea,t):Ea}function bd(t,e,n,a,i,l){i=md(i),a.context===null?a.context=i:a.pendingContext=i,a=xn(e),a.payload={element:n},l=l===void 0?null:l,l!==null&&(a.callback=l),n=Sn(t,a,e),n!==null&&(we(n,t,e),_i(n,t,e))}function vd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Iu(t,e){vd(t,e),(t=t.alternate)&&vd(t,e)}function yd(t){if(t.tag===13){var e=Aa(t,67108864);e!==null&&we(e,t,67108864),Iu(t,67108864)}}var vr=!0;function $g(t,e,n,a){var i=z.T;z.T=null;var l=L.p;try{L.p=2,ts(t,e,n,a)}finally{L.p=l,z.T=i}}function Wg(t,e,n,a){var i=z.T;z.T=null;var l=L.p;try{L.p=8,ts(t,e,n,a)}finally{L.p=l,z.T=i}}function ts(t,e,n,a){if(vr){var i=es(a);if(i===null)Gu(t,e,a,yr,n),Sd(t,a);else if(Ig(i,t,e,n,a))a.stopPropagation();else if(Sd(t,a),e&4&&-1<Fg.indexOf(t)){for(;i!==null;){var l=da(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var c=Pn(l.pendingLanes);if(c!==0){var d=l;for(d.pendingLanes|=2,d.entangledLanes|=2;c;){var m=1<<31-ge(c);d.entanglements[1]|=m,c&=~m}Ve(l),(Tt&6)===0&&(nr=Le()+500,Xi(0))}}break;case 13:d=Aa(l,2),d!==null&&we(d,l,2),ir(),Iu(l,2)}if(l=es(a),l===null&&Gu(t,e,a,yr,n),l===i)break;i=l}i!==null&&a.stopPropagation()}else Gu(t,e,a,null,n)}}function es(t){return t=lo(t),ns(t)}var yr=null;function ns(t){if(yr=null,t=ha(t),t!==null){var e=v(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return yr=t,null}function xd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q0()){case ks:return 2;case Hs:return 8;case fl:case B0:return 32;case Ns:return 268435456;default:return 32}default:return 32}}var as=!1,Hn=null,Nn=null,Un=null,Fi=new Map,Ii=new Map,qn=[],Fg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sd(t,e){switch(t){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":Fi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ii.delete(e.pointerId)}}function tl(t,e,n,a,i,l){return t===null||t.nativeEvent!==l?(t={blockedOn:e,domEventName:n,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},e!==null&&(e=da(e),e!==null&&yd(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Ig(t,e,n,a,i){switch(e){case"focusin":return Hn=tl(Hn,t,e,n,a,i),!0;case"dragenter":return Nn=tl(Nn,t,e,n,a,i),!0;case"mouseover":return Un=tl(Un,t,e,n,a,i),!0;case"pointerover":var l=i.pointerId;return Fi.set(l,tl(Fi.get(l)||null,t,e,n,a,i)),!0;case"gotpointercapture":return l=i.pointerId,Ii.set(l,tl(Ii.get(l)||null,t,e,n,a,i)),!0}return!1}function wd(t){var e=ha(t.target);if(e!==null){var n=v(e);if(n!==null){if(e=n.tag,e===13){if(e=_(n),e!==null){t.blockedOn=e,Q0(t.priority,function(){if(n.tag===13){var a=Se();a=Kr(a);var i=Aa(n,a);i!==null&&we(i,n,a),Iu(n,a)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xr(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=es(t.nativeEvent);if(n===null){n=t.nativeEvent;var a=new n.constructor(n.type,n);io=a,n.target.dispatchEvent(a),io=null}else return e=da(n),e!==null&&yd(e),t.blockedOn=n,!1;e.shift()}return!0}function Od(t,e,n){xr(t)&&n.delete(e)}function tm(){as=!1,Hn!==null&&xr(Hn)&&(Hn=null),Nn!==null&&xr(Nn)&&(Nn=null),Un!==null&&xr(Un)&&(Un=null),Fi.forEach(Od),Ii.forEach(Od)}function Sr(t,e){t.blockedOn===e&&(t.blockedOn=null,as||(as=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,tm)))}var wr=null;function Td(t){wr!==t&&(wr=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){wr===t&&(wr=null);for(var e=0;e<t.length;e+=3){var n=t[e],a=t[e+1],i=t[e+2];if(typeof a!="function"){if(ns(a||n)===null)continue;break}var l=da(n);l!==null&&(t.splice(e,3),e-=3,nu(l,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function el(t){function e(m){return Sr(m,t)}Hn!==null&&Sr(Hn,t),Nn!==null&&Sr(Nn,t),Un!==null&&Sr(Un,t),Fi.forEach(e),Ii.forEach(e);for(var n=0;n<qn.length;n++){var a=qn[n];a.blockedOn===t&&(a.blockedOn=null)}for(;0<qn.length&&(n=qn[0],n.blockedOn===null);)wd(n),n.blockedOn===null&&qn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],l=n[a+1],c=i[ue]||null;if(typeof l=="function")c||Td(n);else if(c){var d=null;if(l&&l.hasAttribute("formAction")){if(i=l,c=l[ue]||null)d=c.formAction;else if(ns(i)!==null)continue}else d=c.action;typeof d=="function"?n[a+1]=d:(n.splice(a,3),a-=3),Td(n)}}}function is(t){this._internalRoot=t}Or.prototype.render=is.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var n=e.current,a=Se();bd(n,a,t,e,null,null)},Or.prototype.unmount=is.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;bd(t.current,2,null,t,null,null),ir(),e[fa]=null}};function Or(t){this._internalRoot=t}Or.prototype.unstable_scheduleHydration=function(t){if(t){var e=js();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qn.length&&e!==0&&e<qn[n].priority;n++);qn.splice(n,0,t),n===0&&wd(t)}};var Ad=o.version;if(Ad!=="19.1.0")throw Error(s(527,Ad,"19.1.0"));L.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=D(e),t=t!==null?w(t):null,t=t===null?null:t.stateNode,t};var em={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tr.isDisabled&&Tr.supportsFiber)try{li=Tr.inject(em),pe=Tr}catch{}}return al.createRoot=function(t,e){if(!p(t))throw Error(s(299));var n=!1,a="",i=Gf,l=Lf,c=Pf,d=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(d=e.unstable_transitionCallbacks)),e=gd(t,1,!1,null,null,n,a,i,l,c,d,null),t[fa]=e.current,ju(t),new is(e)},al.hydrateRoot=function(t,e,n){if(!p(t))throw Error(s(299));var a=!1,i="",l=Gf,c=Lf,d=Pf,m=null,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(m=n.unstable_transitionCallbacks),n.formState!==void 0&&(T=n.formState)),e=gd(t,1,!0,e,n??null,a,i,l,c,d,m,T),e.context=md(null),n=e.current,a=Se(),a=Kr(a),i=xn(a),i.callback=null,Sn(n,i,a),n=a,e.current.lanes=n,oi(e,n),Ve(e),t[fa]=e.current,ju(t),new Or(e)},al.version="19.1.0",al}var Nd;function hm(){if(Nd)return os.exports;Nd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),os.exports=fm(),os.exports}var dm=hm();const pm=()=>{const[r,o]=xt.useState({width:typeof window<"u"?window.innerWidth:0,height:typeof window<"u"?window.innerHeight:0});xt.useEffect(()=>{function v(){o({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",v),v(),()=>window.removeEventListener("resize",v)},[]);const f=r.width<=768||r.height<=730;return{height:f?300:600,width:f?300:600,windowSize:r,isMobile:f}},gm=()=>{const[r,o]=xt.useState(()=>typeof window>"u"?!1:window.innerWidth>window.innerHeight);return xt.useEffect(()=>{function f(){o(window.innerWidth>window.innerHeight)}return window.addEventListener("resize",f),window.addEventListener("orientationchange",f),()=>{window.removeEventListener("resize",f),window.removeEventListener("orientationchange",f)}},[]),r};function Vt(r,o){o===void 0&&(o={});var f=o.insertAt;if(r&&typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],p=document.createElement("style");p.type="text/css",f==="top"&&s.firstChild?s.insertBefore(p,s.firstChild):s.appendChild(p),p.styleSheet?p.styleSheet.cssText=r:p.appendChild(document.createTextNode(r))}}Vt(`.react-loading-indicator-normalize,
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
}`);var Je=function(){return Je=Object.assign||function(r){for(var o,f=1,s=arguments.length;f<s;f++)for(var p in o=arguments[f])Object.prototype.hasOwnProperty.call(o,p)&&(r[p]=o[p]);return r},Je.apply(this,arguments)};function Hr(r){return Hr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Hr(r)}var mm=/^\s+/,bm=/\s+$/;function W(r,o){if(o=o||{},(r=r||"")instanceof W)return r;if(!(this instanceof W))return new W(r,o);var f=function(s){var p={r:0,g:0,b:0},v=1,_=null,B=null,D=null,w=!1,U=!1;typeof s=="string"&&(s=function(X){X=X.replace(mm,"").replace(bm,"").toLowerCase();var Y,V=!1;if(bs[X])X=bs[X],V=!0;else if(X=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(Y=Ye.rgb.exec(X))?{r:Y[1],g:Y[2],b:Y[3]}:(Y=Ye.rgba.exec(X))?{r:Y[1],g:Y[2],b:Y[3],a:Y[4]}:(Y=Ye.hsl.exec(X))?{h:Y[1],s:Y[2],l:Y[3]}:(Y=Ye.hsla.exec(X))?{h:Y[1],s:Y[2],l:Y[3],a:Y[4]}:(Y=Ye.hsv.exec(X))?{h:Y[1],s:Y[2],v:Y[3]}:(Y=Ye.hsva.exec(X))?{h:Y[1],s:Y[2],v:Y[3],a:Y[4]}:(Y=Ye.hex8.exec(X))?{r:Oe(Y[1]),g:Oe(Y[2]),b:Oe(Y[3]),a:Gd(Y[4]),format:V?"name":"hex8"}:(Y=Ye.hex6.exec(X))?{r:Oe(Y[1]),g:Oe(Y[2]),b:Oe(Y[3]),format:V?"name":"hex"}:(Y=Ye.hex4.exec(X))?{r:Oe(Y[1]+""+Y[1]),g:Oe(Y[2]+""+Y[2]),b:Oe(Y[3]+""+Y[3]),a:Gd(Y[4]+""+Y[4]),format:V?"name":"hex8"}:(Y=Ye.hex3.exec(X))?{r:Oe(Y[1]+""+Y[1]),g:Oe(Y[2]+""+Y[2]),b:Oe(Y[3]+""+Y[3]),format:V?"name":"hex"}:!1}(s)),Hr(s)=="object"&&(dn(s.r)&&dn(s.g)&&dn(s.b)?(j=s.r,Z=s.g,J=s.b,p={r:255*Ht(j,255),g:255*Ht(Z,255),b:255*Ht(J,255)},w=!0,U=String(s.r).substr(-1)==="%"?"prgb":"rgb"):dn(s.h)&&dn(s.s)&&dn(s.v)?(_=il(s.s),B=il(s.v),p=function(X,Y,V){X=6*Ht(X,360),Y=Ht(Y,100),V=Ht(V,100);var ct=Math.floor(X),ot=X-ct,k=V*(1-Y),u=V*(1-ot*Y),h=V*(1-(1-ot)*Y),g=ct%6,x=[V,u,k,k,h,V][g],M=[h,V,V,u,k,k][g],C=[k,k,h,V,V,u][g];return{r:255*x,g:255*M,b:255*C}}(s.h,_,B),w=!0,U="hsv"):dn(s.h)&&dn(s.s)&&dn(s.l)&&(_=il(s.s),D=il(s.l),p=function(X,Y,V){var ct,ot,k;function u(x,M,C){return C<0&&(C+=1),C>1&&(C-=1),C<1/6?x+6*(M-x)*C:C<.5?M:C<2/3?x+(M-x)*(2/3-C)*6:x}if(X=Ht(X,360),Y=Ht(Y,100),V=Ht(V,100),Y===0)ct=ot=k=V;else{var h=V<.5?V*(1+Y):V+Y-V*Y,g=2*V-h;ct=u(g,h,X+1/3),ot=u(g,h,X),k=u(g,h,X-1/3)}return{r:255*ct,g:255*ot,b:255*k}}(s.h,_,D),w=!0,U="hsl"),s.hasOwnProperty("a")&&(v=s.a));var j,Z,J;return v=l0(v),{ok:w,format:s.format||U,r:Math.min(255,Math.max(p.r,0)),g:Math.min(255,Math.max(p.g,0)),b:Math.min(255,Math.max(p.b,0)),a:v}}(r);this._originalInput=r,this._r=f.r,this._g=f.g,this._b=f.b,this._a=f.a,this._roundA=Math.round(100*this._a)/100,this._format=o.format||f.format,this._gradientType=o.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=f.ok}function Ud(r,o,f){r=Ht(r,255),o=Ht(o,255),f=Ht(f,255);var s,p,v=Math.max(r,o,f),_=Math.min(r,o,f),B=(v+_)/2;if(v==_)s=p=0;else{var D=v-_;switch(p=B>.5?D/(2-v-_):D/(v+_),v){case r:s=(o-f)/D+(o<f?6:0);break;case o:s=(f-r)/D+2;break;case f:s=(r-o)/D+4}s/=6}return{h:s,s:p,l:B}}function qd(r,o,f){r=Ht(r,255),o=Ht(o,255),f=Ht(f,255);var s,p,v=Math.max(r,o,f),_=Math.min(r,o,f),B=v,D=v-_;if(p=v===0?0:D/v,v==_)s=0;else{switch(v){case r:s=(o-f)/D+(o<f?6:0);break;case o:s=(f-r)/D+2;break;case f:s=(r-o)/D+4}s/=6}return{h:s,s:p,v:B}}function Bd(r,o,f,s){var p=[je(Math.round(r).toString(16)),je(Math.round(o).toString(16)),je(Math.round(f).toString(16))];return s&&p[0].charAt(0)==p[0].charAt(1)&&p[1].charAt(0)==p[1].charAt(1)&&p[2].charAt(0)==p[2].charAt(1)?p[0].charAt(0)+p[1].charAt(0)+p[2].charAt(0):p.join("")}function Yd(r,o,f,s){return[je(r0(s)),je(Math.round(r).toString(16)),je(Math.round(o).toString(16)),je(Math.round(f).toString(16))].join("")}function vm(r,o){o=o===0?0:o||10;var f=W(r).toHsl();return f.s-=o/100,f.s=Br(f.s),W(f)}function ym(r,o){o=o===0?0:o||10;var f=W(r).toHsl();return f.s+=o/100,f.s=Br(f.s),W(f)}function xm(r){return W(r).desaturate(100)}function Sm(r,o){o=o===0?0:o||10;var f=W(r).toHsl();return f.l+=o/100,f.l=Br(f.l),W(f)}function wm(r,o){o=o===0?0:o||10;var f=W(r).toRgb();return f.r=Math.max(0,Math.min(255,f.r-Math.round(-o/100*255))),f.g=Math.max(0,Math.min(255,f.g-Math.round(-o/100*255))),f.b=Math.max(0,Math.min(255,f.b-Math.round(-o/100*255))),W(f)}function Om(r,o){o=o===0?0:o||10;var f=W(r).toHsl();return f.l-=o/100,f.l=Br(f.l),W(f)}function Tm(r,o){var f=W(r).toHsl(),s=(f.h+o)%360;return f.h=s<0?360+s:s,W(f)}function Am(r){var o=W(r).toHsl();return o.h=(o.h+180)%360,W(o)}function jd(r,o){if(isNaN(o)||o<=0)throw new Error("Argument to polyad must be a positive number");for(var f=W(r).toHsl(),s=[W(r)],p=360/o,v=1;v<o;v++)s.push(W({h:(f.h+v*p)%360,s:f.s,l:f.l}));return s}function Em(r){var o=W(r).toHsl(),f=o.h;return[W(r),W({h:(f+72)%360,s:o.s,l:o.l}),W({h:(f+216)%360,s:o.s,l:o.l})]}function _m(r,o,f){o=o||6,f=f||30;var s=W(r).toHsl(),p=360/f,v=[W(r)];for(s.h=(s.h-(p*o>>1)+720)%360;--o;)s.h=(s.h+p)%360,v.push(W(s));return v}function Dm(r,o){o=o||6;for(var f=W(r).toHsv(),s=f.h,p=f.s,v=f.v,_=[],B=1/o;o--;)_.push(W({h:s,s:p,v})),v=(v+B)%1;return _}W.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var r=this.toRgb();return(299*r.r+587*r.g+114*r.b)/1e3},getLuminance:function(){var r,o,f,s=this.toRgb();return r=s.r/255,o=s.g/255,f=s.b/255,.2126*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.7152*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))+.0722*(f<=.03928?f/12.92:Math.pow((f+.055)/1.055,2.4))},setAlpha:function(r){return this._a=l0(r),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var r=qd(this._r,this._g,this._b);return{h:360*r.h,s:r.s,v:r.v,a:this._a}},toHsvString:function(){var r=qd(this._r,this._g,this._b),o=Math.round(360*r.h),f=Math.round(100*r.s),s=Math.round(100*r.v);return this._a==1?"hsv("+o+", "+f+"%, "+s+"%)":"hsva("+o+", "+f+"%, "+s+"%, "+this._roundA+")"},toHsl:function(){var r=Ud(this._r,this._g,this._b);return{h:360*r.h,s:r.s,l:r.l,a:this._a}},toHslString:function(){var r=Ud(this._r,this._g,this._b),o=Math.round(360*r.h),f=Math.round(100*r.s),s=Math.round(100*r.l);return this._a==1?"hsl("+o+", "+f+"%, "+s+"%)":"hsla("+o+", "+f+"%, "+s+"%, "+this._roundA+")"},toHex:function(r){return Bd(this._r,this._g,this._b,r)},toHexString:function(r){return"#"+this.toHex(r)},toHex8:function(r){return function(o,f,s,p,v){var _=[je(Math.round(o).toString(16)),je(Math.round(f).toString(16)),je(Math.round(s).toString(16)),je(r0(p))];return v&&_[0].charAt(0)==_[0].charAt(1)&&_[1].charAt(0)==_[1].charAt(1)&&_[2].charAt(0)==_[2].charAt(1)&&_[3].charAt(0)==_[3].charAt(1)?_[0].charAt(0)+_[1].charAt(0)+_[2].charAt(0)+_[3].charAt(0):_.join("")}(this._r,this._g,this._b,this._a,r)},toHex8String:function(r){return"#"+this.toHex8(r)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Ht(this._r,255))+"%",g:Math.round(100*Ht(this._g,255))+"%",b:Math.round(100*Ht(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Ht(this._r,255))+"%, "+Math.round(100*Ht(this._g,255))+"%, "+Math.round(100*Ht(this._b,255))+"%)":"rgba("+Math.round(100*Ht(this._r,255))+"%, "+Math.round(100*Ht(this._g,255))+"%, "+Math.round(100*Ht(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Mm[Bd(this._r,this._g,this._b,!0)]||!1)},toFilter:function(r){var o="#"+Yd(this._r,this._g,this._b,this._a),f=o,s=this._gradientType?"GradientType = 1, ":"";if(r){var p=W(r);f="#"+Yd(p._r,p._g,p._b,p._a)}return"progid:DXImageTransform.Microsoft.gradient("+s+"startColorstr="+o+",endColorstr="+f+")"},toString:function(r){var o=!!r;r=r||this._format;var f=!1,s=this._a<1&&this._a>=0;return o||!s||r!=="hex"&&r!=="hex6"&&r!=="hex3"&&r!=="hex4"&&r!=="hex8"&&r!=="name"?(r==="rgb"&&(f=this.toRgbString()),r==="prgb"&&(f=this.toPercentageRgbString()),r!=="hex"&&r!=="hex6"||(f=this.toHexString()),r==="hex3"&&(f=this.toHexString(!0)),r==="hex4"&&(f=this.toHex8String(!0)),r==="hex8"&&(f=this.toHex8String()),r==="name"&&(f=this.toName()),r==="hsl"&&(f=this.toHslString()),r==="hsv"&&(f=this.toHsvString()),f||this.toHexString()):r==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return W(this.toString())},_applyModification:function(r,o){var f=r.apply(null,[this].concat([].slice.call(o)));return this._r=f._r,this._g=f._g,this._b=f._b,this.setAlpha(f._a),this},lighten:function(){return this._applyModification(Sm,arguments)},brighten:function(){return this._applyModification(wm,arguments)},darken:function(){return this._applyModification(Om,arguments)},desaturate:function(){return this._applyModification(vm,arguments)},saturate:function(){return this._applyModification(ym,arguments)},greyscale:function(){return this._applyModification(xm,arguments)},spin:function(){return this._applyModification(Tm,arguments)},_applyCombination:function(r,o){return r.apply(null,[this].concat([].slice.call(o)))},analogous:function(){return this._applyCombination(_m,arguments)},complement:function(){return this._applyCombination(Am,arguments)},monochromatic:function(){return this._applyCombination(Dm,arguments)},splitcomplement:function(){return this._applyCombination(Em,arguments)},triad:function(){return this._applyCombination(jd,[3])},tetrad:function(){return this._applyCombination(jd,[4])}},W.fromRatio=function(r,o){if(Hr(r)=="object"){var f={};for(var s in r)r.hasOwnProperty(s)&&(f[s]=s==="a"?r[s]:il(r[s]));r=f}return W(r,o)},W.equals=function(r,o){return!(!r||!o)&&W(r).toRgbString()==W(o).toRgbString()},W.random=function(){return W.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},W.mix=function(r,o,f){f=f===0?0:f||50;var s=W(r).toRgb(),p=W(o).toRgb(),v=f/100;return W({r:(p.r-s.r)*v+s.r,g:(p.g-s.g)*v+s.g,b:(p.b-s.b)*v+s.b,a:(p.a-s.a)*v+s.a})},W.readability=function(r,o){var f=W(r),s=W(o);return(Math.max(f.getLuminance(),s.getLuminance())+.05)/(Math.min(f.getLuminance(),s.getLuminance())+.05)},W.isReadable=function(r,o,f){var s,p,v=W.readability(r,o);switch(p=!1,(s=function(_){var B,D;return B=((_=_||{level:"AA",size:"small"}).level||"AA").toUpperCase(),D=(_.size||"small").toLowerCase(),B!=="AA"&&B!=="AAA"&&(B="AA"),D!=="small"&&D!=="large"&&(D="small"),{level:B,size:D}}(f)).level+s.size){case"AAsmall":case"AAAlarge":p=v>=4.5;break;case"AAlarge":p=v>=3;break;case"AAAsmall":p=v>=7}return p},W.mostReadable=function(r,o,f){var s,p,v,_,B=null,D=0;p=(f=f||{}).includeFallbackColors,v=f.level,_=f.size;for(var w=0;w<o.length;w++)(s=W.readability(r,o[w]))>D&&(D=s,B=W(o[w]));return W.isReadable(r,B,{level:v,size:_})||!p?B:(f.includeFallbackColors=!1,W.mostReadable(r,["#fff","#000"],f))};var bs=W.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Mm=W.hexNames=function(r){var o={};for(var f in r)r.hasOwnProperty(f)&&(o[r[f]]=f);return o}(bs);function l0(r){return r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1),r}function Ht(r,o){(function(s){return typeof s=="string"&&s.indexOf(".")!=-1&&parseFloat(s)===1})(r)&&(r="100%");var f=function(s){return typeof s=="string"&&s.indexOf("%")!=-1}(r);return r=Math.min(o,Math.max(0,parseFloat(r))),f&&(r=parseInt(r*o,10)/100),Math.abs(r-o)<1e-6?1:r%o/parseFloat(o)}function Br(r){return Math.min(1,Math.max(0,r))}function Oe(r){return parseInt(r,16)}function je(r){return r.length==1?"0"+r:""+r}function il(r){return r<=1&&(r=100*r+"%"),r}function r0(r){return Math.round(255*parseFloat(r)).toString(16)}function Gd(r){return Oe(r)/255}var Yn,Ar,Er,Ye=(Ar="[\\s|\\(]+("+(Yn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Yn+")[,|\\s]+("+Yn+")\\s*\\)?",Er="[\\s|\\(]+("+Yn+")[,|\\s]+("+Yn+")[,|\\s]+("+Yn+")[,|\\s]+("+Yn+")\\s*\\)?",{CSS_UNIT:new RegExp(Yn),rgb:new RegExp("rgb"+Ar),rgba:new RegExp("rgba"+Er),hsl:new RegExp("hsl"+Ar),hsla:new RegExp("hsla"+Er),hsv:new RegExp("hsv"+Ar),hsva:new RegExp("hsva"+Er),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function dn(r){return!!Ye.CSS_UNIT.exec(r)}var zm=function(r,o){var f=(typeof r=="string"?parseInt(r):r)||0;if(f>=-5&&f<=5){var s=f,p=parseFloat(o),v=p+s*(p/5)*-1;return(v==0||v<=Number.EPSILON)&&(v=.1),{animationPeriod:v+"s"}}return{animationPeriod:o}},Rm=function(r,o){var f=r||{},s="";switch(o){case"small":s="12px";break;case"medium":s="16px";break;case"large":s="20px";break;default:s=void 0}var p={};if(f.fontSize){var v=f.fontSize;p=function(_,B){var D={};for(var w in _)Object.prototype.hasOwnProperty.call(_,w)&&B.indexOf(w)<0&&(D[w]=_[w]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function"){var U=0;for(w=Object.getOwnPropertySymbols(_);U<w.length;U++)B.indexOf(w[U])<0&&Object.prototype.propertyIsEnumerable.call(_,w[U])&&(D[w[U]]=_[w[U]])}return D}(f,["fontSize"]),s=v}return{fontSize:s,styles:p}},Cm={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},km=function(r){var o=r.className,f=r.text,s=r.textColor,p=r.staticText,v=r.style;return f?Pt.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(o||"").trim(),style:Je(Je(Je({},p&&Cm),s&&{color:s,mixBlendMode:"unset"}),v&&v)},typeof f=="string"&&f.length?f:"loading"):null},o0="rgb(50, 205, 50)";function Hm(r,o){if(o===void 0&&(o=0),r.length===0)throw new Error("Input array cannot be empty!");var f=[];return function s(p,v){return v===void 0&&(v=0),f.push.apply(f,p),f.length<v&&s(f,v),f.slice(0,v)}(r,o)}Vt(`.atom-rli-bounding-box {
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
}`);W(o0).toRgb();Array.from({length:4},function(r,o){return"--atom-phase".concat(o+1,"-rgb")});Vt(`.commet-rli-bounding-box {
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
}`);var $a=Array.from({length:4},function(r,o){return"--commet-phase".concat(o+1,"-color")}),Nm=function(r){var o,f=Rm(r?.style,r?.size),s=f.styles,p=f.fontSize,v=r?.easing,_=zm(r?.speedPlus,"1.2s").animationPeriod,B=function(D){var w={};if(D instanceof Array){for(var U=Hm(D,$a.length),j=0;j<U.length&&!(j>=4);j++)w[$a[j]]=U[j];return w}try{if(typeof D!="string")throw new Error("Color String expected");for(var Z=0;Z<$a.length;Z++)w[$a[Z]]=D}catch(J){for(J instanceof Error?console.warn("[".concat(J.message,']: Received "').concat(typeof D,'" instead with value, ').concat(JSON.stringify(D))):console.warn("".concat(JSON.stringify(D)," received in <Commet /> indicator cannot be processed. Using default instead!")),Z=0;Z<$a.length;Z++)w[$a[Z]]=o0}return w}((o=r?.color)!==null&&o!==void 0?o:"");return Pt.createElement("span",{className:"rli-d-i-b commet-rli-bounding-box",style:Je(Je(Je(Je(Je({},p&&{fontSize:p}),_&&{"--rli-animation-duration":_}),v&&{"--rli-animation-function":v}),B),s),role:"status","aria-live":"polite","aria-label":"Loading"},Pt.createElement("span",{className:"rli-d-i-b commet-indicator"},Pt.createElement("span",{className:"rli-d-i-b commet-box"},Pt.createElement("span",{className:"rli-d-i-b commet-trail trail1"}),Pt.createElement("span",{className:"rli-d-i-b  commetball-box"})),Pt.createElement("span",{className:"rli-d-i-b commet-box"},Pt.createElement("span",{className:"rli-d-i-b commet-trail trail2"}),Pt.createElement("span",{className:"rli-d-i-b commetball-box"})),Pt.createElement(km,{className:"commet-text",text:r?.text,textColor:r?.textColor})))};Vt(`.OP-annulus-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--OP-annulus-phase".concat(o+1,"-color")});function fs(r){return r&&r.Math===Math&&r}Vt(`.OP-dotted-rli-bounding-box {
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
}`);fs(typeof window=="object"&&window)||fs(typeof self=="object"&&self)||fs(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(r,o){return"--OP-dotted-phase".concat(o+1,"-color")});Vt(`.OP-spokes-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--life-line-phase".concat(o+1,"-color")});var ll={exports:{}},Um=ll.exports,Ld;function qm(){return Ld||(Ld=1,function(r,o){(function(f,s){s(o)})(Um,function(f){class s{constructor(u,h){this.state={angle:0,area:[],position:{x:0,y:0},hardAngle:0,hardDrawingAngle:0},this.createdDensity=h,this.nowDrawingDensity=this.createdDensity,this.render=u}setDensity(u){this.createdDensity=u,this.nowDrawingDensity=u}setDrawingDensity(u){this.nowDrawingDensity=u}setPosition(u){this.state.position=u}setAngle(u){this.state.angle=u}setArea(u){this.state.area=u}setHardDrawingAngle(u){this.state.hardDrawingAngle=u}setHardAngle(u){this.state.hardAngle=u,this.state.hardDrawingAngle=u}setOrientation(u){this.orientation=u}getDrawingDensity(){return this.nowDrawingDensity}getDensity(){return this.createdDensity}getHardAngle(){return this.state.hardAngle}}class p extends s{constructor(u,h,g){super(u,g),this.image=null,this.isLoad=!1,this.loadingAngle=0,this.image=new Image,this.image.src=h}draw(u){const h=this.render.getContext(),g=this.render.convertToGlobal(this.state.position),x=this.render.getRect().pageWidth,M=this.render.getRect().height;h.save(),h.translate(g.x,g.y),h.beginPath();for(let C of this.state.area)C!==null&&(C=this.render.convertToGlobal(C),h.lineTo(C.x-g.x,C.y-g.y));h.rotate(this.state.angle),h.clip(),this.isLoad?h.drawImage(this.image,0,0,x,M):this.drawLoader(h,{x:0,y:0},x,M),h.restore()}simpleDraw(u){const h=this.render.getRect(),g=this.render.getContext(),x=h.pageWidth,M=h.height,C=u===1?h.left+h.pageWidth:h.left,K=h.top;this.isLoad?g.drawImage(this.image,C,K,x,M):this.drawLoader(g,{x:C,y:K},x,M)}drawLoader(u,h,g,x){u.beginPath(),u.strokeStyle="rgb(200, 200, 200)",u.fillStyle="rgb(255, 255, 255)",u.lineWidth=1,u.rect(h.x+1,h.y+1,g-1,x-1),u.stroke(),u.fill();const M={x:h.x+g/2,y:h.y+x/2};u.beginPath(),u.lineWidth=10,u.arc(M.x,M.y,20,this.loadingAngle,3*Math.PI/2+this.loadingAngle),u.stroke(),u.closePath(),this.loadingAngle+=.07,this.loadingAngle>=2*Math.PI&&(this.loadingAngle=0)}load(){this.isLoad||(this.image.onload=()=>{this.isLoad=!0})}newTemporaryCopy(){return this}getTemporaryCopy(){return this}hideTemporaryCopy(){}}class v{constructor(u,h){this.pages=[],this.currentPageIndex=0,this.currentSpreadIndex=0,this.landscapeSpread=[],this.portraitSpread=[],this.render=h,this.app=u,this.currentPageIndex=0,this.isShowCover=this.app.getSettings().showCover}destroy(){this.pages=[]}createSpread(){this.landscapeSpread=[],this.portraitSpread=[];for(let h=0;h<this.pages.length;h++)this.portraitSpread.push([h]);let u=0;this.isShowCover&&(this.pages[0].setDensity("hard"),this.landscapeSpread.push([u]),u++);for(let h=u;h<this.pages.length;h+=2)h<this.pages.length-1?this.landscapeSpread.push([h,h+1]):(this.landscapeSpread.push([h]),this.pages[h].setDensity("hard"))}getSpread(){return this.render.getOrientation()==="landscape"?this.landscapeSpread:this.portraitSpread}getSpreadIndexByPage(u){const h=this.getSpread();for(let g=0;g<h.length;g++)if(u===h[g][0]||u===h[g][1])return g;return null}getPageCount(){return this.pages.length}getPages(){return this.pages}getPage(u){if(u>=0&&u<this.pages.length)return this.pages[u];throw new Error("Invalid page number")}nextBy(u){const h=this.pages.indexOf(u);return h<this.pages.length-1?this.pages[h+1]:null}prevBy(u){const h=this.pages.indexOf(u);return h>0?this.pages[h-1]:null}getFlippingPage(u){const h=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return u===0?this.pages[h].newTemporaryCopy():this.pages[h-1];{const g=u===0?this.getSpread()[h+1]:this.getSpread()[h-1];return g.length===1||u===0?this.pages[g[0]]:this.pages[g[1]]}}getBottomPage(u){const h=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return u===0?this.pages[h+1]:this.pages[h-1];{const g=u===0?this.getSpread()[h+1]:this.getSpread()[h-1];return g.length===1?this.pages[g[0]]:u===0?this.pages[g[1]]:this.pages[g[0]]}}showNext(){this.currentSpreadIndex<this.getSpread().length&&(this.currentSpreadIndex++,this.showSpread())}showPrev(){this.currentSpreadIndex>0&&(this.currentSpreadIndex--,this.showSpread())}getCurrentPageIndex(){return this.currentPageIndex}show(u=null){if(u===null&&(u=this.currentPageIndex),u<0||u>=this.pages.length)return;const h=this.getSpreadIndexByPage(u);h!==null&&(this.currentSpreadIndex=h,this.showSpread())}getCurrentSpreadIndex(){return this.currentSpreadIndex}setCurrentSpreadIndex(u){if(!(u>=0&&u<this.getSpread().length))throw new Error("Invalid page");this.currentSpreadIndex=u}showSpread(){const u=this.getSpread()[this.currentSpreadIndex];u.length===2?(this.render.setLeftPage(this.pages[u[0]]),this.render.setRightPage(this.pages[u[1]])):this.render.getOrientation()==="landscape"&&u[0]===this.pages.length-1?(this.render.setLeftPage(this.pages[u[0]]),this.render.setRightPage(null)):(this.render.setLeftPage(null),this.render.setRightPage(this.pages[u[0]])),this.currentPageIndex=u[0],this.app.updatePageIndex(this.currentPageIndex)}}class _ extends v{constructor(u,h,g){super(u,h),this.imagesHref=g}load(){for(const u of this.imagesHref){const h=new p(this.render,u,"soft");h.load(),this.pages.push(h)}this.createSpread()}}class B{static GetDistanceBetweenTwoPoint(u,h){return u===null||h===null?1/0:Math.sqrt(Math.pow(h.x-u.x,2)+Math.pow(h.y-u.y,2))}static GetSegmentLength(u){return B.GetDistanceBetweenTwoPoint(u[0],u[1])}static GetAngleBetweenTwoLine(u,h){const g=u[0].y-u[1].y,x=h[0].y-h[1].y,M=u[1].x-u[0].x,C=h[1].x-h[0].x;return Math.acos((g*x+M*C)/(Math.sqrt(g*g+M*M)*Math.sqrt(x*x+C*C)))}static PointInRect(u,h){return h===null?null:h.x>=u.left&&h.x<=u.width+u.left&&h.y>=u.top&&h.y<=u.top+u.height?h:null}static GetRotatedPoint(u,h,g){return{x:u.x*Math.cos(g)+u.y*Math.sin(g)+h.x,y:u.y*Math.cos(g)-u.x*Math.sin(g)+h.y}}static LimitPointToCircle(u,h,g){if(B.GetDistanceBetweenTwoPoint(u,g)<=h)return g;const x=u.x,M=u.y,C=g.x,K=g.y;let F=Math.sqrt(Math.pow(h,2)*Math.pow(x-C,2)/(Math.pow(x-C,2)+Math.pow(M-K,2)))+x;g.x<0&&(F*=-1);let rt=(F-x)*(M-K)/(x-C)+M;return x-C+M===0&&(rt=h),{x:F,y:rt}}static GetIntersectBetweenTwoSegment(u,h,g){return B.PointInRect(u,B.GetIntersectBeetwenTwoLine(h,g))}static GetIntersectBeetwenTwoLine(u,h){const g=u[0].y-u[1].y,x=h[0].y-h[1].y,M=u[1].x-u[0].x,C=h[1].x-h[0].x,K=u[0].x*u[1].y-u[1].x*u[0].y,F=h[0].x*h[1].y-h[1].x*h[0].y,rt=g*F-x*K,Ot=M*F-C*K,jt=-(K*C-F*M)/(g*C-x*M),Ct=-(g*F-x*K)/(g*C-x*M);if(isFinite(jt)&&isFinite(Ct))return{x:jt,y:Ct};if(Math.abs(rt-Ot)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(u,h){const g=Math.abs(u.x-h.x),x=Math.abs(u.y-h.y),M=Math.max(g,x),C=[u];function K(F,rt,Ot,jt,Ct){return rt>F?F+Ct*(Ot/jt):rt<F?F-Ct*(Ot/jt):F}for(let F=1;F<=M;F+=1)C.push({x:K(u.x,h.x,g,M,F),y:K(u.y,h.y,x,M,F)});return C}}class D extends s{constructor(u,h,g){super(u,g),this.copiedElement=null,this.temporaryCopy=null,this.isLoad=!1,this.element=h,this.element.classList.add("stf__item"),this.element.classList.add("--"+g)}newTemporaryCopy(){return this.nowDrawingDensity==="hard"?this:(this.temporaryCopy===null&&(this.copiedElement=this.element.cloneNode(!0),this.element.parentElement.appendChild(this.copiedElement),this.temporaryCopy=new D(this.render,this.copiedElement,this.nowDrawingDensity)),this.getTemporaryCopy())}getTemporaryCopy(){return this.temporaryCopy}hideTemporaryCopy(){this.temporaryCopy!==null&&(this.copiedElement.remove(),this.copiedElement=null,this.temporaryCopy=null)}draw(u){const h=u||this.nowDrawingDensity,g=this.render.convertToGlobal(this.state.position),x=this.render.getRect().pageWidth,M=this.render.getRect().height;this.element.classList.remove("--simple");const C=`
            display: block;
            z-index: ${this.element.style.zIndex};
            left: 0;
            top: 0;
            width: ${x}px;
            height: ${M}px;
        `;h==="hard"?this.drawHard(C):this.drawSoft(g,C)}drawHard(u=""){const h=this.render.getRect().left+this.render.getRect().width/2,g=this.state.hardDrawingAngle,x=u+`
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                clip-path: none;
                -webkit-clip-path: none;
            `+(this.orientation===0?`transform-origin: ${this.render.getRect().pageWidth}px 0; 
                   transform: translate3d(0, 0, 0) rotateY(${g}deg);`:`transform-origin: 0 0; 
                   transform: translate3d(${h}px, 0, 0) rotateY(${g}deg);`);this.element.style.cssText=x}drawSoft(u,h=""){let g="polygon( ";for(const M of this.state.area)if(M!==null){let C=this.render.getDirection()===1?{x:-M.x+this.state.position.x,y:M.y-this.state.position.y}:{x:M.x-this.state.position.x,y:M.y-this.state.position.y};C=B.GetRotatedPoint(C,{x:0,y:0},this.state.angle),g+=C.x+"px "+C.y+"px, "}g=g.slice(0,-2),g+=")";const x=h+`transform-origin: 0 0; clip-path: ${g}; -webkit-clip-path: ${g};`+(this.render.isSafari()&&this.state.angle===0?`transform: translate(${u.x}px, ${u.y}px);`:`transform: translate3d(${u.x}px, ${u.y}px, 0) rotate(${this.state.angle}rad);`);this.element.style.cssText=x}simpleDraw(u){const h=this.render.getRect(),g=h.pageWidth,x=h.height,M=u===1?h.left+h.pageWidth:h.left,C=h.top;this.element.classList.add("--simple"),this.element.style.cssText=`
            position: absolute; 
            display: block; 
            height: ${x}px; 
            left: ${M}px; 
            top: ${C}px; 
            width: ${g}px; 
            z-index: ${this.render.getSettings().startZIndex+1};`}getElement(){return this.element}load(){this.isLoad=!0}setOrientation(u){super.setOrientation(u),this.element.classList.remove("--left","--right"),this.element.classList.add(u===1?"--right":"--left")}setDrawingDensity(u){this.element.classList.remove("--soft","--hard"),this.element.classList.add("--"+u),super.setDrawingDensity(u)}}class w extends v{constructor(u,h,g,x){super(u,h),this.element=g,this.pagesElement=x}load(){for(const u of this.pagesElement){const h=new D(this.render,u,u.dataset.density==="hard"?"hard":"soft");h.load(),this.pages.push(h)}this.createSpread()}}class U{constructor(u,h,g,x){this.direction=u,this.corner=h,this.topIntersectPoint=null,this.sideIntersectPoint=null,this.bottomIntersectPoint=null,this.pageWidth=parseInt(g,10),this.pageHeight=parseInt(x,10)}calc(u){try{return this.position=this.calcAngleAndPosition(u),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){const u=[];let h=!1;return u.push(this.rect.topLeft),u.push(this.topIntersectPoint),this.sideIntersectPoint===null?h=!0:(u.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(h=!1)),u.push(this.bottomIntersectPoint),(h||this.corner==="bottom")&&u.push(this.rect.bottomLeft),u}getBottomClipArea(){const u=[];return u.push(this.topIntersectPoint),this.corner==="top"?u.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&u.push({x:this.pageWidth,y:0}),u.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?B.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&u.push(this.sideIntersectPoint):this.corner==="top"&&u.push({x:this.pageWidth,y:this.pageHeight}),u.push(this.bottomIntersectPoint),u.push(this.topIntersectPoint),u}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){const u=B.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?u:Math.PI-u}calcAngleAndPosition(u){let h=u;if(this.updateAngleAndGeometry(h),h=this.corner==="top"?this.checkPositionAtCenterLine(h,{x:0,y:0},{x:0,y:this.pageHeight}):this.checkPositionAtCenterLine(h,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(h.x-this.pageWidth)<1&&Math.abs(h.y)<1)throw new Error("Point is too small");return h}updateAngleAndGeometry(u){this.angle=this.calculateAngle(u),this.rect=this.getPageRect(u)}calculateAngle(u){const h=this.pageWidth-u.x+1,g=this.corner==="bottom"?this.pageHeight-u.y:u.y;let x=2*Math.acos(h/Math.sqrt(g*g+h*h));g<0&&(x=-x);const M=Math.PI-x;if(!isFinite(x)||M>=0&&M<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(x=-x),x}getPageRect(u){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],u):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],u)}getRectFromBasePoint(u,h){return{topLeft:this.getRotatedPoint(u[0],h),topRight:this.getRotatedPoint(u[1],h),bottomLeft:this.getRotatedPoint(u[2],h),bottomRight:this.getRotatedPoint(u[3],h)}}getRotatedPoint(u,h){return{x:u.x*Math.cos(this.angle)+u.y*Math.sin(this.angle)+h.x,y:u.y*Math.cos(this.angle)-u.x*Math.sin(this.angle)+h.y}}calculateIntersectPoint(u){const h={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=B.GetIntersectBetweenTwoSegment(h,[u,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=B.GetIntersectBetweenTwoSegment(h,[u,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=B.GetIntersectBetweenTwoSegment(h,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=B.GetIntersectBetweenTwoSegment(h,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=B.GetIntersectBetweenTwoSegment(h,[u,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=B.GetIntersectBetweenTwoSegment(h,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(u,h,g){let x=u;const M=B.LimitPointToCircle(h,this.pageWidth,x);x!==M&&(x=M,this.updateAngleAndGeometry(x));const C=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2));let K=this.rect.bottomRight,F=this.rect.topLeft;if(this.corner==="bottom"&&(K=this.rect.topRight,F=this.rect.bottomLeft),K.x<=0){const rt=B.LimitPointToCircle(g,C,F);rt!==x&&(x=rt,this.updateAngleAndGeometry(x))}return x}getSegmentToShadowLine(){const u=this.getShadowStartPoint();return[u,u!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint]}}class j{constructor(u,h){this.flippingPage=null,this.bottomPage=null,this.calc=null,this.state="read",this.render=u,this.app=h}fold(u){this.setState("user_fold"),this.calc===null&&this.start(u),this.do(this.render.convertToPage(u))}flip(u){if(this.app.getSettings().disableFlipByClick&&!this.isPointOnCorners(u)||(this.calc!==null&&this.render.finishAnimation(),!this.start(u)))return;const h=this.getBoundsRect();this.setState("flipping");const g=h.height/10,x=this.calc.getCorner()==="bottom"?h.height-g:g,M=this.calc.getCorner()==="bottom"?h.height:0;this.calc.calc({x:h.pageWidth-g,y:x}),this.animateFlippingTo({x:h.pageWidth-g,y:x},{x:-h.pageWidth,y:M},!0)}start(u){this.reset();const h=this.render.convertToBook(u),g=this.getBoundsRect(),x=this.getDirectionByPoint(h),M=h.y>=g.height/2?"bottom":"top";if(!this.checkDirection(x))return!1;try{if(this.flippingPage=this.app.getPageCollection().getFlippingPage(x),this.bottomPage=this.app.getPageCollection().getBottomPage(x),this.render.getOrientation()==="landscape")if(x===1){const C=this.app.getPageCollection().nextBy(this.flippingPage);C!==null&&this.flippingPage.getDensity()!==C.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),C.setDrawingDensity("hard"))}else{const C=this.app.getPageCollection().prevBy(this.flippingPage);C!==null&&this.flippingPage.getDensity()!==C.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),C.setDrawingDensity("hard"))}return this.render.setDirection(x),this.calc=new U(x,M,g.pageWidth.toString(10),g.height.toString(10)),!0}catch{return!1}}do(u){if(this.calc!==null&&this.calc.calc(u)){const h=this.calc.getFlippingProgress();this.bottomPage.setArea(this.calc.getBottomClipArea()),this.bottomPage.setPosition(this.calc.getBottomPagePosition()),this.bottomPage.setAngle(0),this.bottomPage.setHardAngle(0),this.flippingPage.setArea(this.calc.getFlippingClipArea()),this.flippingPage.setPosition(this.calc.getActiveCorner()),this.flippingPage.setAngle(this.calc.getAngle()),this.calc.getDirection()===0?this.flippingPage.setHardAngle(90*(200-2*h)/100):this.flippingPage.setHardAngle(-90*(200-2*h)/100),this.render.setPageRect(this.calc.getRect()),this.render.setBottomPage(this.bottomPage),this.render.setFlippingPage(this.flippingPage),this.render.setShadowData(this.calc.getShadowStartPoint(),this.calc.getShadowAngle(),h,this.calc.getDirection())}}flipToPage(u,h){const g=this.app.getPageCollection().getCurrentSpreadIndex(),x=this.app.getPageCollection().getSpreadIndexByPage(u);try{x>g&&(this.app.getPageCollection().setCurrentSpreadIndex(x-1),this.flipNext(h)),x<g&&(this.app.getPageCollection().setCurrentSpreadIndex(x+1),this.flipPrev(h))}catch{}}flipNext(u){this.flip({x:this.render.getRect().left+2*this.render.getRect().pageWidth-10,y:u==="top"?1:this.render.getRect().height-2})}flipPrev(u){this.flip({x:10,y:u==="top"?1:this.render.getRect().height-2})}stopMove(){if(this.calc===null)return;const u=this.calc.getPosition(),h=this.getBoundsRect(),g=this.calc.getCorner()==="bottom"?h.height:0;u.x<=0?this.animateFlippingTo(u,{x:-h.pageWidth,y:g},!0):this.animateFlippingTo(u,{x:h.pageWidth,y:g},!1)}showCorner(u){if(!this.checkState("read","fold_corner"))return;const h=this.getBoundsRect(),g=h.pageWidth;if(this.isPointOnCorners(u))if(this.calc===null){if(!this.start(u))return;this.setState("fold_corner"),this.calc.calc({x:g-1,y:1});const x=50,M=this.calc.getCorner()==="bottom"?h.height-1:1,C=this.calc.getCorner()==="bottom"?h.height-x:x;this.animateFlippingTo({x:g-1,y:M},{x:g-x,y:C},!1,!1)}else this.do(this.render.convertToPage(u));else this.setState("read"),this.render.finishAnimation(),this.stopMove()}animateFlippingTo(u,h,g,x=!0){const M=B.GetCordsFromTwoPoint(u,h),C=[];for(const F of M)C.push(()=>this.do(F));const K=this.getAnimationDuration(M.length);this.render.startAnimation(C,K,()=>{this.calc&&(g&&(this.calc.getDirection()===1?this.app.turnToPrevPage():this.app.turnToNextPage()),x&&(this.render.setBottomPage(null),this.render.setFlippingPage(null),this.render.clearShadow(),this.setState("read"),this.reset()))})}getCalculation(){return this.calc}getState(){return this.state}setState(u){this.state!==u&&(this.app.updateState(u),this.state=u)}getDirectionByPoint(u){const h=this.getBoundsRect();if(this.render.getOrientation()==="portrait"){if(u.x-h.pageWidth<=h.width/5)return 1}else if(u.x<h.width/2)return 1;return 0}getAnimationDuration(u){const h=this.app.getSettings().flippingTime;return u>=1e3?h:u/1e3*h}checkDirection(u){return u===0?this.app.getCurrentPageIndex()<this.app.getPageCount()-1:this.app.getCurrentPageIndex()>=1}reset(){this.calc=null,this.flippingPage=null,this.bottomPage=null}getBoundsRect(){return this.render.getRect()}checkState(...u){for(const h of u)if(this.state===h)return!0;return!1}isPointOnCorners(u){const h=this.getBoundsRect(),g=h.pageWidth,x=Math.sqrt(Math.pow(g,2)+Math.pow(h.height,2))/5,M=this.render.convertToBook(u);return M.x>0&&M.y>0&&M.x<h.width&&M.y<h.height&&(M.x<x||M.x>h.width-x)&&(M.y<x||M.y>h.height-x)}}class Z{constructor(u,h){this.leftPage=null,this.rightPage=null,this.flippingPage=null,this.bottomPage=null,this.direction=null,this.orientation=null,this.shadow=null,this.animation=null,this.pageRect=null,this.boundsRect=null,this.timer=0,this.safari=!1,this.setting=h,this.app=u;const g=new RegExp("Version\\/[\\d\\.]+.*Safari/");this.safari=g.exec(window.navigator.userAgent)!==null}render(u){if(this.animation!==null){const h=Math.round((u-this.animation.startedAt)/this.animation.durationFrame);h<this.animation.frames.length?this.animation.frames[h]():(this.animation.onAnimateEnd(),this.animation=null)}this.timer=u,this.drawFrame()}start(){this.update();const u=h=>{this.render(h),requestAnimationFrame(u)};requestAnimationFrame(u)}startAnimation(u,h,g){this.finishAnimation(),this.animation={frames:u,duration:h,durationFrame:h/u.length,onAnimateEnd:g,startedAt:this.timer}}finishAnimation(){this.animation!==null&&(this.animation.frames[this.animation.frames.length-1](),this.animation.onAnimateEnd!==null&&this.animation.onAnimateEnd()),this.animation=null}update(){this.boundsRect=null;const u=this.calculateBoundsRect();this.orientation!==u&&(this.orientation=u,this.app.updateOrientation(u))}calculateBoundsRect(){let u="landscape";const h=this.getBlockWidth(),g=h/2,x=this.getBlockHeight()/2,M=this.setting.width/this.setting.height;let C=this.setting.width,K=this.setting.height,F=g-C;return this.setting.size==="stretch"?(h<2*this.setting.minWidth&&this.app.getSettings().usePortrait&&(u="portrait"),C=u==="portrait"?this.getBlockWidth():this.getBlockWidth()/2,C>this.setting.maxWidth&&(C=this.setting.maxWidth),K=C/M,K>this.getBlockHeight()&&(K=this.getBlockHeight(),C=K*M),F=u==="portrait"?g-C/2-C:g-C):h<2*C&&this.app.getSettings().usePortrait&&(u="portrait",F=g-C/2-C),this.boundsRect={left:F,top:x-K/2,width:2*C,height:K,pageWidth:C},u}setShadowData(u,h,g,x){if(!this.app.getSettings().drawShadow)return;const M=100*this.getSettings().maxShadowOpacity;this.shadow={pos:u,angle:h,width:3*this.getRect().pageWidth/4*g/100,opacity:(100-g)*M/100/100,direction:x,progress:2*g}}clearShadow(){this.shadow=null}getBlockWidth(){return this.app.getUI().getDistElement().offsetWidth}getBlockHeight(){return this.app.getUI().getDistElement().offsetHeight}getDirection(){return this.direction}getRect(){return this.boundsRect===null&&this.calculateBoundsRect(),this.boundsRect}getSettings(){return this.app.getSettings()}getOrientation(){return this.orientation}setPageRect(u){this.pageRect=u}setDirection(u){this.direction=u}setRightPage(u){u!==null&&u.setOrientation(1),this.rightPage=u}setLeftPage(u){u!==null&&u.setOrientation(0),this.leftPage=u}setBottomPage(u){u!==null&&u.setOrientation(this.direction===1?0:1),this.bottomPage=u}setFlippingPage(u){u!==null&&u.setOrientation(this.direction===0&&this.orientation!=="portrait"?0:1),this.flippingPage=u}convertToBook(u){const h=this.getRect();return{x:u.x-h.left,y:u.y-h.top}}isSafari(){return this.safari}convertToPage(u,h){h||(h=this.direction);const g=this.getRect();return{x:h===0?u.x-g.left-g.width/2:g.width/2-u.x+g.left,y:u.y-g.top}}convertToGlobal(u,h){if(h||(h=this.direction),u==null)return null;const g=this.getRect();return{x:h===0?u.x+g.left+g.width/2:g.width/2-u.x+g.left,y:u.y+g.top}}convertRectToGlobal(u,h){return h||(h=this.direction),{topLeft:this.convertToGlobal(u.topLeft,h),topRight:this.convertToGlobal(u.topRight,h),bottomLeft:this.convertToGlobal(u.bottomLeft,h),bottomRight:this.convertToGlobal(u.bottomRight,h)}}}class J extends Z{constructor(u,h,g){super(u,h),this.canvas=g,this.ctx=g.getContext("2d")}getContext(){return this.ctx}reload(){}drawFrame(){this.clear(),this.orientation!=="portrait"&&this.leftPage!=null&&this.leftPage.simpleDraw(0),this.rightPage!=null&&this.rightPage.simpleDraw(1),this.bottomPage!=null&&this.bottomPage.draw(),this.drawBookShadow(),this.flippingPage!=null&&this.flippingPage.draw(),this.shadow!=null&&(this.drawOuterShadow(),this.drawInnerShadow());const u=this.getRect();this.orientation==="portrait"&&(this.ctx.beginPath(),this.ctx.rect(u.left+u.pageWidth,u.top,u.width,u.height),this.ctx.clip())}drawBookShadow(){const u=this.getRect();this.ctx.save(),this.ctx.beginPath();const h=u.width/20;this.ctx.rect(u.left,u.top,u.width,u.height);const g={x:u.left+u.width/2-h/2,y:0};this.ctx.translate(g.x,g.y);const x=this.ctx.createLinearGradient(0,0,h,0);x.addColorStop(0,"rgba(0, 0, 0, 0)"),x.addColorStop(.4,"rgba(0, 0, 0, 0.2)"),x.addColorStop(.49,"rgba(0, 0, 0, 0.1)"),x.addColorStop(.5,"rgba(0, 0, 0, 0.5)"),x.addColorStop(.51,"rgba(0, 0, 0, 0.4)"),x.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.clip(),this.ctx.fillStyle=x,this.ctx.fillRect(0,0,h,2*u.height),this.ctx.restore()}drawOuterShadow(){const u=this.getRect();this.ctx.save(),this.ctx.beginPath(),this.ctx.rect(u.left,u.top,u.width,u.height);const h=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y});this.ctx.translate(h.x,h.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const g=this.ctx.createLinearGradient(0,0,this.shadow.width,0);this.shadow.direction===0?(this.ctx.translate(0,-100),g.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),g.addColorStop(1,"rgba(0, 0, 0, 0)")):(this.ctx.translate(-this.shadow.width,-100),g.addColorStop(0,"rgba(0, 0, 0, 0)"),g.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")")),this.ctx.clip(),this.ctx.fillStyle=g,this.ctx.fillRect(0,0,this.shadow.width,2*u.height),this.ctx.restore()}drawInnerShadow(){const u=this.getRect();this.ctx.save(),this.ctx.beginPath();const h=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),g=this.convertRectToGlobal(this.pageRect);this.ctx.moveTo(g.topLeft.x,g.topLeft.y),this.ctx.lineTo(g.topRight.x,g.topRight.y),this.ctx.lineTo(g.bottomRight.x,g.bottomRight.y),this.ctx.lineTo(g.bottomLeft.x,g.bottomLeft.y),this.ctx.translate(h.x,h.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const x=3*this.shadow.width/4,M=this.ctx.createLinearGradient(0,0,x,0);this.shadow.direction===0?(this.ctx.translate(-x,-100),M.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")"),M.addColorStop(.9,"rgba(0, 0, 0, 0.05)"),M.addColorStop(.7,"rgba(0, 0, 0, "+this.shadow.opacity+")"),M.addColorStop(0,"rgba(0, 0, 0, 0)")):(this.ctx.translate(0,-100),M.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),M.addColorStop(.1,"rgba(0, 0, 0, 0.05)"),M.addColorStop(.3,"rgba(0, 0, 0, "+this.shadow.opacity+")"),M.addColorStop(1,"rgba(0, 0, 0, 0)")),this.ctx.clip(),this.ctx.fillStyle=M,this.ctx.fillRect(0,0,x,2*u.height),this.ctx.restore()}clear(){this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}}class X{constructor(u,h,g){this.touchPoint=null,this.swipeTimeout=250,this.onResize=()=>{this.update()},this.onMouseDown=M=>{if(this.checkTarget(M.target)){const C=this.getMousePos(M.clientX,M.clientY);this.app.startUserTouch(C),M.preventDefault()}},this.onTouchStart=M=>{if(this.checkTarget(M.target)&&M.changedTouches.length>0){const C=M.changedTouches[0],K=this.getMousePos(C.clientX,C.clientY);this.touchPoint={point:K,time:Date.now()},setTimeout(()=>{this.touchPoint!==null&&this.app.startUserTouch(K)},this.swipeTimeout),this.app.getSettings().mobileScrollSupport||M.preventDefault()}},this.onMouseUp=M=>{const C=this.getMousePos(M.clientX,M.clientY);this.app.userStop(C)},this.onMouseMove=M=>{const C=this.getMousePos(M.clientX,M.clientY);this.app.userMove(C,!1)},this.onTouchMove=M=>{if(M.changedTouches.length>0){const C=M.changedTouches[0],K=this.getMousePos(C.clientX,C.clientY);this.app.getSettings().mobileScrollSupport?(this.touchPoint!==null&&(Math.abs(this.touchPoint.point.x-K.x)>10||this.app.getState()!=="read")&&M.cancelable&&this.app.userMove(K,!0),this.app.getState()!=="read"&&M.preventDefault()):this.app.userMove(K,!0)}},this.onTouchEnd=M=>{if(M.changedTouches.length>0){const C=M.changedTouches[0],K=this.getMousePos(C.clientX,C.clientY);let F=!1;if(this.touchPoint!==null){const rt=K.x-this.touchPoint.point.x,Ot=Math.abs(K.y-this.touchPoint.point.y);Math.abs(rt)>this.swipeDistance&&Ot<2*this.swipeDistance&&Date.now()-this.touchPoint.time<this.swipeTimeout&&(rt>0?this.app.flipPrev(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"):this.app.flipNext(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"),F=!0),this.touchPoint=null}this.app.userStop(K,F)}},this.parentElement=u,u.classList.add("stf__parent"),u.insertAdjacentHTML("afterbegin",'<div class="stf__wrapper"></div>'),this.wrapper=u.querySelector(".stf__wrapper"),this.app=h;const x=this.app.getSettings().usePortrait?1:2;u.style.minWidth=g.minWidth*x+"px",u.style.minHeight=g.minHeight+"px",g.size==="fixed"&&(u.style.minWidth=g.width*x+"px",u.style.minHeight=g.height+"px"),g.autoSize&&(u.style.width="100%",u.style.maxWidth=2*g.maxWidth+"px"),u.style.display="block",window.addEventListener("resize",this.onResize,!1),this.swipeDistance=g.swipeDistance}destroy(){this.app.getSettings().useMouseEvents&&this.removeHandlers(),this.distElement.remove(),this.wrapper.remove()}getDistElement(){return this.distElement}getWrapper(){return this.wrapper}setOrientationStyle(u){this.wrapper.classList.remove("--portrait","--landscape"),u==="portrait"?(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/this.app.getSettings().width*100+"%"),this.wrapper.classList.add("--portrait")):(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/(2*this.app.getSettings().width)*100+"%"),this.wrapper.classList.add("--landscape")),this.update()}removeHandlers(){window.removeEventListener("resize",this.onResize),this.distElement.removeEventListener("mousedown",this.onMouseDown),this.distElement.removeEventListener("touchstart",this.onTouchStart),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("touchend",this.onTouchEnd)}setHandlers(){window.addEventListener("resize",this.onResize,!1),this.app.getSettings().useMouseEvents&&(this.distElement.addEventListener("mousedown",this.onMouseDown),this.distElement.addEventListener("touchstart",this.onTouchStart),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!this.app.getSettings().mobileScrollSupport}),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("touchend",this.onTouchEnd))}getMousePos(u,h){const g=this.distElement.getBoundingClientRect();return{x:u-g.left,y:h-g.top}}checkTarget(u){return!this.app.getSettings().clickEventForward||!["a","button"].includes(u.tagName.toLowerCase())}}class Y extends X{constructor(u,h,g,x){super(u,h,g),this.wrapper.insertAdjacentHTML("afterbegin",'<div class="stf__block"></div>'),this.distElement=u.querySelector(".stf__block"),this.items=x;for(const M of x)this.distElement.appendChild(M);this.setHandlers()}clear(){for(const u of this.items)this.parentElement.appendChild(u)}updateItems(u){this.removeHandlers(),this.distElement.innerHTML="";for(const h of u)this.distElement.appendChild(h);this.items=u,this.setHandlers()}update(){this.app.getRender().update()}}class V extends X{constructor(u,h,g){super(u,h,g),this.wrapper.innerHTML='<canvas class="stf__canvas"></canvas>',this.canvas=u.querySelectorAll("canvas")[0],this.distElement=this.canvas,this.resizeCanvas(),this.setHandlers()}resizeCanvas(){const u=getComputedStyle(this.canvas),h=parseInt(u.getPropertyValue("width"),10),g=parseInt(u.getPropertyValue("height"),10);this.canvas.width=h,this.canvas.height=g}getCanvas(){return this.canvas}update(){this.resizeCanvas(),this.app.getRender().update()}}class ct extends Z{constructor(u,h,g){super(u,h),this.outerShadow=null,this.innerShadow=null,this.hardShadow=null,this.hardInnerShadow=null,this.element=g,this.createShadows()}createShadows(){this.element.insertAdjacentHTML("beforeend",`<div class="stf__outerShadow"></div>
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
        `;g+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0) rotateY(180deg);":"transform: translate3d(0, 0, 0);",this.hardShadow.style.cssText=g}drawInnerShadow(){const u=this.getRect(),h=3*this.shadow.width/4,g=this.getDirection()===0?h:0,x=this.getDirection()===0?"to left":"to right",M=this.convertToGlobal(this.shadow.pos),C=this.shadow.angle+3*Math.PI/2,K=[this.pageRect.topLeft,this.pageRect.topRight,this.pageRect.bottomRight,this.pageRect.bottomLeft];let F="polygon( ";for(const Ot of K){let jt=this.getDirection()===1?{x:-Ot.x+this.shadow.pos.x,y:Ot.y-this.shadow.pos.y}:{x:Ot.x-this.shadow.pos.x,y:Ot.y-this.shadow.pos.y};jt=B.GetRotatedPoint(jt,{x:g,y:100},C),F+=jt.x+"px "+jt.y+"px, "}F=F.slice(0,-2),F+=")";const rt=`
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
            transform: translate3d(${M.x-g}px, ${M.y-100}px, 0) rotate(${C}rad);
            clip-path: ${F};
            -webkit-clip-path: ${F};
        `;this.innerShadow.style.cssText=rt}drawOuterShadow(){const u=this.getRect(),h=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),g=this.shadow.angle+3*Math.PI/2,x=this.getDirection()===1?this.shadow.width:0,M=this.getDirection()===0?"to right":"to left",C=[{x:0,y:0},{x:u.pageWidth,y:0},{x:u.pageWidth,y:u.height},{x:0,y:u.height}];let K="polygon( ";for(const rt of C)if(rt!==null){let Ot=this.getDirection()===1?{x:-rt.x+this.shadow.pos.x,y:rt.y-this.shadow.pos.y}:{x:rt.x-this.shadow.pos.x,y:rt.y-this.shadow.pos.y};Ot=B.GetRotatedPoint(Ot,{x,y:100},g),K+=Ot.x+"px "+Ot.y+"px, "}K=K.slice(0,-2),K+=")";const F=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2*u.height}px;
            background: linear-gradient(${M}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));
            transform-origin: ${x}px 100px;
            transform: translate3d(${h.x-x}px, ${h.y-100}px, 0) rotate(${g}rad);
            clip-path: ${K};
            -webkit-clip-path: ${K};
        `;this.outerShadow.style.cssText=F}drawLeftPage(){this.orientation!=="portrait"&&this.leftPage!==null&&(this.direction===1&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.leftPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.leftPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.leftPage.draw(this.flippingPage.getDrawingDensity())):this.leftPage.simpleDraw(0))}drawRightPage(){this.rightPage!==null&&(this.direction===0&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.rightPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.rightPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.rightPage.draw(this.flippingPage.getDrawingDensity())):this.rightPage.simpleDraw(1))}drawBottomPage(){if(this.bottomPage===null)return;const u=this.flippingPage!=null?this.flippingPage.getDrawingDensity():null;this.orientation==="portrait"&&this.direction===1||(this.bottomPage.getElement().style.zIndex=(this.getSettings().startZIndex+3).toString(10),this.bottomPage.draw(u))}drawFrame(){this.clear(),this.drawLeftPage(),this.drawRightPage(),this.drawBottomPage(),this.flippingPage!=null&&(this.flippingPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.flippingPage.draw()),this.shadow!=null&&this.flippingPage!==null&&(this.flippingPage.getDrawingDensity()==="soft"?(this.drawOuterShadow(),this.drawInnerShadow()):(this.drawHardOuterShadow(),this.drawHardInnerShadow()))}clear(){for(const u of this.app.getPageCollection().getPages())u!==this.leftPage&&u!==this.rightPage&&u!==this.flippingPage&&u!==this.bottomPage&&(u.getElement().style.cssText="display: none"),u.getTemporaryCopy()!==this.flippingPage&&u.hideTemporaryCopy()}update(){super.update(),this.rightPage!==null&&this.rightPage.setOrientation(1),this.leftPage!==null&&this.leftPage.setOrientation(0)}}class ot{constructor(){this._default={startPage:0,size:"fixed",width:0,height:0,minWidth:0,maxWidth:0,minHeight:0,maxHeight:0,drawShadow:!0,flippingTime:1e3,usePortrait:!0,startZIndex:0,autoSize:!0,maxShadowOpacity:1,showCover:!1,mobileScrollSupport:!0,swipeDistance:30,clickEventForward:!0,useMouseEvents:!0,showPageCorners:!0,disableFlipByClick:!1}}getSettings(u){const h=this._default;if(Object.assign(h,u),h.size!=="stretch"&&h.size!=="fixed")throw new Error('Invalid size type. Available only "fixed" and "stretch" value');if(h.width<=0||h.height<=0)throw new Error("Invalid width or height");if(h.flippingTime<=0)throw new Error("Invalid flipping time");return h.size==="stretch"?(h.minWidth<=0&&(h.minWidth=100),h.maxWidth<h.minWidth&&(h.maxWidth=2e3),h.minHeight<=0&&(h.minHeight=100),h.maxHeight<h.minHeight&&(h.maxHeight=2e3)):(h.minWidth=h.width,h.maxWidth=h.width,h.minHeight=h.height,h.maxHeight=h.height),h}}(function(k,u){u===void 0&&(u={});var h=u.insertAt;if(typeof document<"u"){var g=document.head||document.getElementsByTagName("head")[0],x=document.createElement("style");x.type="text/css",h==="top"&&g.firstChild?g.insertBefore(x,g.firstChild):g.appendChild(x),x.styleSheet?x.styleSheet.cssText=k:x.appendChild(document.createTextNode(k))}})(`.stf__parent {
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
}`),f.PageFlip=class extends class{constructor(){this.events=new Map}on(k,u){return this.events.has(k)?this.events.get(k).push(u):this.events.set(k,[u]),this}off(k){this.events.delete(k)}trigger(k,u,h=null){if(this.events.has(k))for(const g of this.events.get(k))g({data:h,object:u})}}{constructor(k,u){super(),this.isUserTouch=!1,this.isUserMove=!1,this.setting=null,this.pages=null,this.setting=new ot().getSettings(u),this.block=k}destroy(){this.ui.destroy(),this.block.remove()}update(){this.render.update(),this.pages.show()}loadFromImages(k){this.ui=new V(this.block,this,this.setting);const u=this.ui.getCanvas();this.render=new J(this,this.setting,u),this.flipController=new j(this.render,this),this.pages=new _(this,this.render,k),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}loadFromHTML(k){this.ui=new Y(this.block,this,this.setting,k),this.render=new ct(this,this.setting,this.ui.getDistElement()),this.flipController=new j(this.render,this),this.pages=new w(this,this.render,this.ui.getDistElement(),k),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}updateFromImages(k){const u=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new _(this,this.render,k),this.pages.load(),this.pages.show(u),this.trigger("update",this,{page:u,mode:this.render.getOrientation()})}updateFromHtml(k){const u=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new w(this,this.render,this.ui.getDistElement(),k),this.pages.load(),this.ui.updateItems(k),this.render.reload(),this.pages.show(u),this.trigger("update",this,{page:u,mode:this.render.getOrientation()})}clear(){this.pages.destroy(),this.ui.clear()}turnToPrevPage(){this.pages.showPrev()}turnToNextPage(){this.pages.showNext()}turnToPage(k){this.pages.show(k)}flipNext(k="top"){this.flipController.flipNext(k)}flipPrev(k="top"){this.flipController.flipPrev(k)}flip(k,u="top"){this.flipController.flipToPage(k,u)}updateState(k){this.trigger("changeState",this,k)}updatePageIndex(k){this.trigger("flip",this,k)}updateOrientation(k){this.ui.setOrientationStyle(k),this.update(),this.trigger("changeOrientation",this,k)}getPageCount(){return this.pages.getPageCount()}getCurrentPageIndex(){return this.pages.getCurrentPageIndex()}getPage(k){return this.pages.getPage(k)}getRender(){return this.render}getFlipController(){return this.flipController}getOrientation(){return this.render.getOrientation()}getBoundsRect(){return this.render.getRect()}getSettings(){return this.setting}getUI(){return this.ui}getState(){return this.flipController.getState()}getPageCollection(){return this.pages}startUserTouch(k){this.mousePosition=k,this.isUserTouch=!0,this.isUserMove=!1}userMove(k,u){this.isUserTouch||u||!this.setting.showPageCorners?this.isUserTouch&&B.GetDistanceBetweenTwoPoint(this.mousePosition,k)>5&&(this.isUserMove=!0,this.flipController.fold(k)):this.flipController.showCorner(k)}userStop(k,u=!1){this.isUserTouch&&(this.isUserTouch=!1,u||(this.isUserMove?this.flipController.stopMove():this.flipController.flip(k)))}},Object.defineProperty(f,"__esModule",{value:!0})})}(ll,ll.exports)),ll.exports}var Bm=qm();const Ym=Pt.forwardRef((r,o)=>{const f=xt.useRef(null),s=xt.useRef([]),p=xt.useRef(),[v,_]=xt.useState([]);xt.useImperativeHandle(o,()=>({pageFlip:()=>p.current}));const B=xt.useCallback(()=>{p.current&&p.current.clear()},[]),D=xt.useCallback(()=>{const w=p.current;w&&(w.off("flip"),w.off("changeOrientation"),w.off("changeState"),w.off("init"),w.off("update"))},[]);return xt.useEffect(()=>{if(s.current=[],r.children){const w=Pt.Children.map(r.children,U=>Pt.cloneElement(U,{ref:j=>{j&&s.current.push(j)}}));(!r.renderOnlyPageLengthChange||v.length!==w.length)&&(w.length<v.length&&B(),_(w))}},[r.children]),xt.useEffect(()=>{const w=()=>{const U=p.current;U&&(r.onFlip&&U.on("flip",j=>r.onFlip(j)),r.onChangeOrientation&&U.on("changeOrientation",j=>r.onChangeOrientation(j)),r.onChangeState&&U.on("changeState",j=>r.onChangeState(j)),r.onInit&&U.on("init",j=>r.onInit(j)),r.onUpdate&&U.on("update",j=>r.onUpdate(j)))};v.length>0&&s.current.length>0&&(D(),f.current&&!p.current&&(p.current=new Bm.PageFlip(f.current,r)),p.current.getFlipController()?p.current.updateFromHtml(s.current):p.current.loadFromHTML(s.current),w())},[v]),Pt.createElement("div",{ref:f,className:r.className,style:r.style},v)}),jm=Pt.memo(Ym),Gm=xt.forwardRef((r,o)=>{const{key:f,src:s,width:p,height:v,isEven:_}=r;return tt.jsxs("div",{className:"page",ref:o,children:[tt.jsx("img",{src:s,style:{width:p,height:v}}),tt.jsx("div",{className:`overlay ${_?"left":"right"}`})]},f)}),Pd=xt.forwardRef((r,o)=>{const{width:f,height:s,src:p}=r;return tt.jsx("div",{className:"page page-cover","data-density":"hard",ref:o,children:tt.jsx("img",{src:p,style:{width:f,height:s}})})}),Xd=({ariaLabel:r,isDisabled:o,children:f,onClick:s})=>tt.jsx("button",{type:"button",onClick:s,className:`button-circle ${o?"disabled":""}`,tabIndex:-1,onMouseDown:p=>p.preventDefault(),"aria-label":r,children:f}),Lm="/letter-to-the-cloud/assets/Frame%2041-DYSSxZsi.png",Pm="/letter-to-the-cloud/assets/Frame%2042-a63I_HX7.png",Xm="/letter-to-the-cloud/assets/Frame%2043-CM1jN27b.png",Zm="/letter-to-the-cloud/assets/Frame%2044-CZewaNA3.png",Qm="/letter-to-the-cloud/assets/Frame%2045-CLwyijkR.png",Vm="/letter-to-the-cloud/assets/Frame%2046-D1SptEDz.png",Km="/letter-to-the-cloud/assets/Frame%2047-BKUYN3EQ.png",Jm="/letter-to-the-cloud/assets/Frame%2048-B5UfLL2Y.png",$m="/letter-to-the-cloud/assets/Frame%2049-CHTCmGuB.png",Wm="/letter-to-the-cloud/assets/Frame%2050-Cry2rlJJ.png",Fm="/letter-to-the-cloud/assets/Frame%2051-iENOi_si.png",Im="/letter-to-the-cloud/assets/Frame%2052-D3gTiOyf.png",tb="/letter-to-the-cloud/assets/Frame%2053-9EqcY-9L.png",eb="/letter-to-the-cloud/assets/Frame%2054-CX4cDaLQ.png",nb="/letter-to-the-cloud/assets/Frame%2055-DhsSvCEG.png",ab="/letter-to-the-cloud/assets/Frame%2056-yCcPvHVJ.png",ib="/letter-to-the-cloud/assets/Frame%2057-D69-1HrX.png",lb="/letter-to-the-cloud/assets/Frame%2058-BHSP_tke.png",rb="/letter-to-the-cloud/assets/Frame%2059-BVLniTxo.png",ob="/letter-to-the-cloud/assets/Frame%2060-B3MRr-_D.png",ub="/letter-to-the-cloud/assets/Frame%2061-CkehkORG.png",sb="/letter-to-the-cloud/assets/Frame%2062-BdAJrT7t.png",cb="/letter-to-the-cloud/assets/Frame%2063-BTJOqVaF.png",fb="/letter-to-the-cloud/assets/Frame%2064-CNDWi_m6.png",hb="/letter-to-the-cloud/assets/Frame%2065-Cy4CsARu.png",db="/letter-to-the-cloud/assets/Frame%2066-hnUguMvV.png",pb="/letter-to-the-cloud/assets/Frame%2067-Cs4qZ9QS.png",gb="/letter-to-the-cloud/assets/Frame%2068-CuMq4mpL.png",mb="/letter-to-the-cloud/assets/Frame%2069-C-b1UFrs.png",bb="/letter-to-the-cloud/assets/Frame%2070-MqiYumJw.png",vb="/letter-to-the-cloud/assets/Frame%2071-tDaqmct_.png",yb="/letter-to-the-cloud/assets/Frame%2072-BQFtVsDa.png",xb="/letter-to-the-cloud/assets/Frame%2073-C1-kzMAQ.png",Sb="/letter-to-the-cloud/assets/Frame%2074-BL-6ULuz.png",wb="/letter-to-the-cloud/assets/Frame%2075-O5pUMuFq.png",Ob="/letter-to-the-cloud/assets/Frame%2076-Cicc4qnJ.png",Tb="/letter-to-the-cloud/assets/Frame%2077-B_4Fzyas.png",Ab="/letter-to-the-cloud/assets/Frame%2078-DYA66IY_.png",Eb="/letter-to-the-cloud/assets/Frame%2079-CC_4KJm_.png",_b="/letter-to-the-cloud/assets/Frame%2080-BiNXOi2d.png",Db="/letter-to-the-cloud/assets/Frame%2081-C6nhafBI.png",Mb="/letter-to-the-cloud/assets/Frame%2082-jQUp9Pl2.png",jn=[Lm,Pm,Xm,Zm,Qm,Vm,Km,Jm,$m,Wm,Fm,Im,tb,eb,nb,ab,ib,lb,rb,ob,ub,sb,cb,fb,hb,db,pb,gb,mb,bb,xb,Sb,wb,Ob,Tb,Ab,Eb,_b,Db,Mb,vb,yb],zb=({width:r,height:o,isMobile:f})=>{const s=xt.useRef(null),p=xt.useRef(null),[v,_]=xt.useState(0),[B,D]=xt.useState(!1),[w,U]=xt.useState(!1),[j,Z]=xt.useState(!1),[J,X]=xt.useState(Math.floor(v/2)+1),Y=xt.useRef(new Map);xt.useEffect(()=>{const u=()=>{!w&&p.current&&(U(!0),p.current.play().catch(h=>{console.error("Autoplay failed:",h)})),window.removeEventListener("click",u),window.removeEventListener("keydown",u)};return window.addEventListener("click",u),window.addEventListener("keydown",u),()=>{window.removeEventListener("click",u),window.removeEventListener("keydown",u)}},[w]),xt.useEffect(()=>{(async()=>{for(let h=0;h<jn.length/2;h++){const g=h*2+41,M=[g,g+1].map(F=>`/letter-to-the-cloud/assets/images/Frame ${F}.png`).map(F=>{const rt=new Image;return rt.src=F,new Promise(Ot=>{rt.onload=()=>Ot(rt),rt.onerror=()=>Ot(rt)})}),[C,K]=await Promise.all([...M]);Y.current.set(h,{images:[C,K]})}D(!0)})()},[]);const V=async u=>{const x=(Math.max(1,Math.min(u,Math.floor(jn.length/2)))-1)*2-v,M=x>0?1:-1,C=Math.abs(x);for(let K=0;K<=C;K++)s.current?.flip(v+K*M)},ct=u=>_(u.data),ot=()=>s.current?.flipNext(),k=()=>s.current?.flipPrev();return B?tt.jsxs(tt.Fragment,{children:[tt.jsxs("div",{className:"book-wrapper",children:[tt.jsx("audio",{autoPlay:!0,loop:!0,ref:p,preload:"auto",children:tt.jsx("source",{src:"/letter-to-the-cloud/assets/audio/1.mp3",type:"audio/mpeg"})}),tt.jsx(Xd,{ariaLabel:"Previous page",isDisabled:!v,onClick:k,children:tt.jsx("span",{children:"←"})}),tt.jsxs(jm,{width:r,height:o,maxShadowOpacity:.5,size:"fixed",drawShadow:!0,showCover:!0,mobileScrollSupport:!1,onFlip:ct,ref:u=>s.current=u?.pageFlip(),children:[tt.jsx(Pd,{width:r,height:o,src:"/letter-to-the-cloud/assets/images/Frame 83.png"}),jn.map((u,h)=>tt.jsx(Gm,{src:u,width:r,height:o,isEven:h===0},h)),tt.jsx(Pd,{width:r,height:o,src:"/letter-to-the-cloud/assets/images/Frame 84.png"})]}),tt.jsx(Xd,{ariaLabel:"Next page",isDisabled:v>=jn.length,onClick:ot,children:tt.jsx("span",{children:"→"})})]}),!f&&tt.jsxs(tt.Fragment,{children:[tt.jsx("img",{className:`authors ${v>=jn.length?"":"disabled"}`,src:"/letter-to-the-cloud/assets/images/2025-07-07 18.27.30.jpg"}),Array.from({length:5}).map(u=>tt.jsx("div",{className:"star"}))]}),v&&v<=jn.length&&tt.jsxs("p",{children:[j?tt.jsx("input",{type:"number",className:"current-page-input",value:J,min:1,max:Math.floor(jn.length/2),onChange:u=>X(Number(u.target.value)),onBlur:()=>{Z(!1),V(J)},onKeyDown:u=>{u.key==="Enter"&&(Z(!1),V(J))},autoFocus:!0}):tt.jsx("span",{className:"current-page-number",onClick:()=>{X(Math.floor(v/2)+1),Z(!0)},style:{cursor:"pointer"},children:Math.floor(v/2)+1})," ","/ ",tt.jsx("span",{children:Math.floor(jn.length/2)})]})]}):tt.jsx(Nm,{color:"#ffd600",size:"large"})},Rb=()=>tt.jsxs(tt.Fragment,{children:[tt.jsx("style",{children:`
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.2; transform: scale(0.8); }
        }
      `}),tt.jsx("div",{style:hs.overlay,children:tt.jsx("div",{style:hs.starsContainer,children:Array.from({length:50}).map((r,o)=>tt.jsx("div",{style:{...hs.star,...Cb()}},o))})})]}),hs={overlay:{position:"fixed",height:"100%",top:0,left:0,right:0,bottom:0,zIndex:1,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:"white",fontSize:24,textAlign:"center",overflow:"hidden"},starsContainer:{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none"},star:{position:"absolute",width:2,height:2,borderRadius:"50%",backgroundColor:"white",opacity:.8,animationName:"twinkle",animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",animationDirection:"alternate"}};function Cb(r){const o=Math.random()*100+"%",f=Math.random()*100+"%",s=1+Math.random()*2,p=Math.random()*5;return{top:o,left:f,animationDuration:`${s}s`,animationDelay:`${p}s`}}const kb=()=>{const[r,o]=xt.useState(!1),f=()=>{const s=window.matchMedia("(orientation: portrait)").matches,p=window.innerWidth<768;o(s&&p)};return xt.useEffect(()=>(f(),window.addEventListener("orientationchange",f),window.addEventListener("resize",f),()=>{window.removeEventListener("orientationchange",f),window.removeEventListener("resize",f)}),[]),r?tt.jsx("div",{className:"overlay",children:tt.jsxs("div",{className:"message",children:["📱 Будь ласка поверніть телефон ",tt.jsx("strong",{children:"горизонтально"}),tt.jsx("br",{}),"для ліпшого відображення."]})}):null};var de=function(){return de=Object.assign||function(o){for(var f,s=1,p=arguments.length;s<p;s++){f=arguments[s];for(var v in f)Object.prototype.hasOwnProperty.call(f,v)&&(o[v]=f[v])}return o},de.apply(this,arguments)};function ul(r,o,f){if(f||arguments.length===2)for(var s=0,p=o.length,v;s<p;s++)(v||!(s in o))&&(v||(v=Array.prototype.slice.call(o,0,s)),v[s]=o[s]);return r.concat(v||Array.prototype.slice.call(o))}var Rt="-ms-",ol="-moz-",wt="-webkit-",u0="comm",Yr="rule",_s="decl",Hb="@import",s0="@keyframes",Nb="@layer",c0=Math.abs,Ds=String.fromCharCode,vs=Object.assign;function Ub(r,o){return It(r,0)^45?(((o<<2^It(r,0))<<2^It(r,1))<<2^It(r,2))<<2^It(r,3):0}function f0(r){return r.trim()}function pn(r,o){return(r=o.exec(r))?r[0]:r}function st(r,o,f){return r.replace(o,f)}function Mr(r,o,f){return r.indexOf(o,f)}function It(r,o){return r.charCodeAt(o)|0}function Ia(r,o,f){return r.slice(o,f)}function Ke(r){return r.length}function h0(r){return r.length}function rl(r,o){return o.push(r),r}function qb(r,o){return r.map(o).join("")}function Zd(r,o){return r.filter(function(f){return!pn(f,o)})}var jr=1,ti=1,d0=0,Ne=0,Xt=0,ii="";function Gr(r,o,f,s,p,v,_,B){return{value:r,root:o,parent:f,type:s,props:p,children:v,line:jr,column:ti,length:_,return:"",siblings:B}}function Gn(r,o){return vs(Gr("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},o)}function Wa(r){for(;r.root;)r=Gn(r.root,{children:[r]});rl(r,r.siblings)}function Bb(){return Xt}function Yb(){return Xt=Ne>0?It(ii,--Ne):0,ti--,Xt===10&&(ti=1,jr--),Xt}function Ge(){return Xt=Ne<d0?It(ii,Ne++):0,ti++,Xt===10&&(ti=1,jr++),Xt}function sa(){return It(ii,Ne)}function zr(){return Ne}function Lr(r,o){return Ia(ii,r,o)}function ys(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function jb(r){return jr=ti=1,d0=Ke(ii=r),Ne=0,[]}function Gb(r){return ii="",r}function ds(r){return f0(Lr(Ne-1,xs(r===91?r+2:r===40?r+1:r)))}function Lb(r){for(;(Xt=sa())&&Xt<33;)Ge();return ys(r)>2||ys(Xt)>3?"":" "}function Pb(r,o){for(;--o&&Ge()&&!(Xt<48||Xt>102||Xt>57&&Xt<65||Xt>70&&Xt<97););return Lr(r,zr()+(o<6&&sa()==32&&Ge()==32))}function xs(r){for(;Ge();)switch(Xt){case r:return Ne;case 34:case 39:r!==34&&r!==39&&xs(Xt);break;case 40:r===41&&xs(r);break;case 92:Ge();break}return Ne}function Xb(r,o){for(;Ge()&&r+Xt!==57;)if(r+Xt===84&&sa()===47)break;return"/*"+Lr(o,Ne-1)+"*"+Ds(r===47?r:Ge())}function Zb(r){for(;!ys(sa());)Ge();return Lr(r,Ne)}function Qb(r){return Gb(Rr("",null,null,null,[""],r=jb(r),0,[0],r))}function Rr(r,o,f,s,p,v,_,B,D){for(var w=0,U=0,j=_,Z=0,J=0,X=0,Y=1,V=1,ct=1,ot=0,k="",u=p,h=v,g=s,x=k;V;)switch(X=ot,ot=Ge()){case 40:if(X!=108&&It(x,j-1)==58){Mr(x+=st(ds(ot),"&","&\f"),"&\f",c0(w?B[w-1]:0))!=-1&&(ct=-1);break}case 34:case 39:case 91:x+=ds(ot);break;case 9:case 10:case 13:case 32:x+=Lb(X);break;case 92:x+=Pb(zr()-1,7);continue;case 47:switch(sa()){case 42:case 47:rl(Vb(Xb(Ge(),zr()),o,f,D),D);break;default:x+="/"}break;case 123*Y:B[w++]=Ke(x)*ct;case 125*Y:case 59:case 0:switch(ot){case 0:case 125:V=0;case 59+U:ct==-1&&(x=st(x,/\f/g,"")),J>0&&Ke(x)-j&&rl(J>32?Vd(x+";",s,f,j-1,D):Vd(st(x," ","")+";",s,f,j-2,D),D);break;case 59:x+=";";default:if(rl(g=Qd(x,o,f,w,U,p,B,k,u=[],h=[],j,v),v),ot===123)if(U===0)Rr(x,o,g,g,u,v,j,B,h);else switch(Z===99&&It(x,3)===110?100:Z){case 100:case 108:case 109:case 115:Rr(r,g,g,s&&rl(Qd(r,g,g,0,0,p,B,k,p,u=[],j,h),h),p,h,j,B,s?u:h);break;default:Rr(x,g,g,g,[""],h,0,B,h)}}w=U=J=0,Y=ct=1,k=x="",j=_;break;case 58:j=1+Ke(x),J=X;default:if(Y<1){if(ot==123)--Y;else if(ot==125&&Y++==0&&Yb()==125)continue}switch(x+=Ds(ot),ot*Y){case 38:ct=U>0?1:(x+="\f",-1);break;case 44:B[w++]=(Ke(x)-1)*ct,ct=1;break;case 64:sa()===45&&(x+=ds(Ge())),Z=sa(),U=j=Ke(k=x+=Zb(zr())),ot++;break;case 45:X===45&&Ke(x)==2&&(Y=0)}}return v}function Qd(r,o,f,s,p,v,_,B,D,w,U,j){for(var Z=p-1,J=p===0?v:[""],X=h0(J),Y=0,V=0,ct=0;Y<s;++Y)for(var ot=0,k=Ia(r,Z+1,Z=c0(V=_[Y])),u=r;ot<X;++ot)(u=f0(V>0?J[ot]+" "+k:st(k,/&\f/g,J[ot])))&&(D[ct++]=u);return Gr(r,o,f,p===0?Yr:B,D,w,U,j)}function Vb(r,o,f,s){return Gr(r,o,f,u0,Ds(Bb()),Ia(r,2,-2),0,s)}function Vd(r,o,f,s,p){return Gr(r,o,f,_s,Ia(r,0,s),Ia(r,s+1,-1),s,p)}function p0(r,o,f){switch(Ub(r,o)){case 5103:return wt+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return wt+r+r;case 4789:return ol+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return wt+r+ol+r+Rt+r+r;case 5936:switch(It(r,o+11)){case 114:return wt+r+Rt+st(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return wt+r+Rt+st(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return wt+r+Rt+st(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return wt+r+Rt+r+r;case 6165:return wt+r+Rt+"flex-"+r+r;case 5187:return wt+r+st(r,/(\w+).+(:[^]+)/,wt+"box-$1$2"+Rt+"flex-$1$2")+r;case 5443:return wt+r+Rt+"flex-item-"+st(r,/flex-|-self/g,"")+(pn(r,/flex-|baseline/)?"":Rt+"grid-row-"+st(r,/flex-|-self/g,""))+r;case 4675:return wt+r+Rt+"flex-line-pack"+st(r,/align-content|flex-|-self/g,"")+r;case 5548:return wt+r+Rt+st(r,"shrink","negative")+r;case 5292:return wt+r+Rt+st(r,"basis","preferred-size")+r;case 6060:return wt+"box-"+st(r,"-grow","")+wt+r+Rt+st(r,"grow","positive")+r;case 4554:return wt+st(r,/([^-])(transform)/g,"$1"+wt+"$2")+r;case 6187:return st(st(st(r,/(zoom-|grab)/,wt+"$1"),/(image-set)/,wt+"$1"),r,"")+r;case 5495:case 3959:return st(r,/(image-set\([^]*)/,wt+"$1$`$1");case 4968:return st(st(r,/(.+:)(flex-)?(.*)/,wt+"box-pack:$3"+Rt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+wt+r+r;case 4200:if(!pn(r,/flex-|baseline/))return Rt+"grid-column-align"+Ia(r,o)+r;break;case 2592:case 3360:return Rt+st(r,"template-","")+r;case 4384:case 3616:return f&&f.some(function(s,p){return o=p,pn(s.props,/grid-\w+-end/)})?~Mr(r+(f=f[o].value),"span",0)?r:Rt+st(r,"-start","")+r+Rt+"grid-row-span:"+(~Mr(f,"span",0)?pn(f,/\d+/):+pn(f,/\d+/)-+pn(r,/\d+/))+";":Rt+st(r,"-start","")+r;case 4896:case 4128:return f&&f.some(function(s){return pn(s.props,/grid-\w+-start/)})?r:Rt+st(st(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return st(r,/(.+)-inline(.+)/,wt+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ke(r)-1-o>6)switch(It(r,o+1)){case 109:if(It(r,o+4)!==45)break;case 102:return st(r,/(.+:)(.+)-([^]+)/,"$1"+wt+"$2-$3$1"+ol+(It(r,o+3)==108?"$3":"$2-$3"))+r;case 115:return~Mr(r,"stretch",0)?p0(st(r,"stretch","fill-available"),o,f)+r:r}break;case 5152:case 5920:return st(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,p,v,_,B,D,w){return Rt+p+":"+v+w+(_?Rt+p+"-span:"+(B?D:+D-+v)+w:"")+r});case 4949:if(It(r,o+6)===121)return st(r,":",":"+wt)+r;break;case 6444:switch(It(r,It(r,14)===45?18:11)){case 120:return st(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+wt+(It(r,14)===45?"inline-":"")+"box$3$1"+wt+"$2$3$1"+Rt+"$2box$3")+r;case 100:return st(r,":",":"+Rt)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return st(r,"scroll-","scroll-snap-")+r}return r}function Nr(r,o){for(var f="",s=0;s<r.length;s++)f+=o(r[s],s,r,o)||"";return f}function Kb(r,o,f,s){switch(r.type){case Nb:if(r.children.length)break;case Hb:case _s:return r.return=r.return||r.value;case u0:return"";case s0:return r.return=r.value+"{"+Nr(r.children,s)+"}";case Yr:if(!Ke(r.value=r.props.join(",")))return""}return Ke(f=Nr(r.children,s))?r.return=r.value+"{"+f+"}":""}function Jb(r){var o=h0(r);return function(f,s,p,v){for(var _="",B=0;B<o;B++)_+=r[B](f,s,p,v)||"";return _}}function $b(r){return function(o){o.root||(o=o.return)&&r(o)}}function Wb(r,o,f,s){if(r.length>-1&&!r.return)switch(r.type){case _s:r.return=p0(r.value,r.length,f);return;case s0:return Nr([Gn(r,{value:st(r.value,"@","@"+wt)})],s);case Yr:if(r.length)return qb(f=r.props,function(p){switch(pn(p,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Wa(Gn(r,{props:[st(p,/:(read-\w+)/,":"+ol+"$1")]})),Wa(Gn(r,{props:[p]})),vs(r,{props:Zd(f,s)});break;case"::placeholder":Wa(Gn(r,{props:[st(p,/:(plac\w+)/,":"+wt+"input-$1")]})),Wa(Gn(r,{props:[st(p,/:(plac\w+)/,":"+ol+"$1")]})),Wa(Gn(r,{props:[st(p,/:(plac\w+)/,Rt+"input-$1")]})),Wa(Gn(r,{props:[p]})),vs(r,{props:Zd(f,s)});break}return""})}}var Fb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Te={},ei=typeof process<"u"&&Te!==void 0&&(Te.REACT_APP_SC_ATTR||Te.SC_ATTR)||"data-styled",g0="active",m0="data-styled-version",Pr="6.1.19",Ms=`/*!sc*/
`,Ur=typeof window<"u"&&typeof document<"u",Ib=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Te!==void 0&&Te.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Te.REACT_APP_SC_DISABLE_SPEEDY!==""?Te.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Te.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Te!==void 0&&Te.SC_DISABLE_SPEEDY!==void 0&&Te.SC_DISABLE_SPEEDY!==""&&Te.SC_DISABLE_SPEEDY!=="false"&&Te.SC_DISABLE_SPEEDY),Xr=Object.freeze([]),ni=Object.freeze({});function t1(r,o,f){return f===void 0&&(f=ni),r.theme!==f.theme&&r.theme||o||f.theme}var b0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),e1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,n1=/(^-|-$)/g;function Kd(r){return r.replace(e1,"-").replace(n1,"")}var a1=/(a)(d)/gi,_r=52,Jd=function(r){return String.fromCharCode(r+(r>25?39:97))};function Ss(r){var o,f="";for(o=Math.abs(r);o>_r;o=o/_r|0)f=Jd(o%_r)+f;return(Jd(o%_r)+f).replace(a1,"$1-$2")}var ps,v0=5381,Fa=function(r,o){for(var f=o.length;f;)r=33*r^o.charCodeAt(--f);return r},y0=function(r){return Fa(v0,r)};function x0(r){return Ss(y0(r)>>>0)}function i1(r){return r.displayName||r.name||"Component"}function gs(r){return typeof r=="string"&&!0}var S0=typeof Symbol=="function"&&Symbol.for,w0=S0?Symbol.for("react.memo"):60115,l1=S0?Symbol.for("react.forward_ref"):60112,r1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},O0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u1=((ps={})[l1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ps[w0]=O0,ps);function $d(r){return("type"in(o=r)&&o.type.$$typeof)===w0?O0:"$$typeof"in r?u1[r.$$typeof]:r1;var o}var s1=Object.defineProperty,c1=Object.getOwnPropertyNames,Wd=Object.getOwnPropertySymbols,f1=Object.getOwnPropertyDescriptor,h1=Object.getPrototypeOf,Fd=Object.prototype;function T0(r,o,f){if(typeof o!="string"){if(Fd){var s=h1(o);s&&s!==Fd&&T0(r,s,f)}var p=c1(o);Wd&&(p=p.concat(Wd(o)));for(var v=$d(r),_=$d(o),B=0;B<p.length;++B){var D=p[B];if(!(D in o1||f&&f[D]||_&&D in _||v&&D in v)){var w=f1(o,D);try{s1(r,D,w)}catch{}}}}return r}function ai(r){return typeof r=="function"}function zs(r){return typeof r=="object"&&"styledComponentId"in r}function ua(r,o){return r&&o?"".concat(r," ").concat(o):r||o||""}function ws(r,o){if(r.length===0)return"";for(var f=r[0],s=1;s<r.length;s++)f+=r[s];return f}function sl(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function Os(r,o,f){if(f===void 0&&(f=!1),!f&&!sl(r)&&!Array.isArray(r))return o;if(Array.isArray(o))for(var s=0;s<o.length;s++)r[s]=Os(r[s],o[s]);else if(sl(o))for(var s in o)r[s]=Os(r[s],o[s]);return r}function Rs(r,o){Object.defineProperty(r,"toString",{value:o})}function cl(r){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var d1=function(){function r(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return r.prototype.indexOfGroup=function(o){for(var f=0,s=0;s<o;s++)f+=this.groupSizes[s];return f},r.prototype.insertRules=function(o,f){if(o>=this.groupSizes.length){for(var s=this.groupSizes,p=s.length,v=p;o>=v;)if((v<<=1)<0)throw cl(16,"".concat(o));this.groupSizes=new Uint32Array(v),this.groupSizes.set(s),this.length=v;for(var _=p;_<v;_++)this.groupSizes[_]=0}for(var B=this.indexOfGroup(o+1),D=(_=0,f.length);_<D;_++)this.tag.insertRule(B,f[_])&&(this.groupSizes[o]++,B++)},r.prototype.clearGroup=function(o){if(o<this.length){var f=this.groupSizes[o],s=this.indexOfGroup(o),p=s+f;this.groupSizes[o]=0;for(var v=s;v<p;v++)this.tag.deleteRule(s)}},r.prototype.getGroup=function(o){var f="";if(o>=this.length||this.groupSizes[o]===0)return f;for(var s=this.groupSizes[o],p=this.indexOfGroup(o),v=p+s,_=p;_<v;_++)f+="".concat(this.tag.getRule(_)).concat(Ms);return f},r}(),Cr=new Map,qr=new Map,kr=1,Dr=function(r){if(Cr.has(r))return Cr.get(r);for(;qr.has(kr);)kr++;var o=kr++;return Cr.set(r,o),qr.set(o,r),o},p1=function(r,o){kr=o+1,Cr.set(r,o),qr.set(o,r)},g1="style[".concat(ei,"][").concat(m0,'="').concat(Pr,'"]'),m1=new RegExp("^".concat(ei,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),b1=function(r,o,f){for(var s,p=f.split(","),v=0,_=p.length;v<_;v++)(s=p[v])&&r.registerName(o,s)},v1=function(r,o){for(var f,s=((f=o.textContent)!==null&&f!==void 0?f:"").split(Ms),p=[],v=0,_=s.length;v<_;v++){var B=s[v].trim();if(B){var D=B.match(m1);if(D){var w=0|parseInt(D[1],10),U=D[2];w!==0&&(p1(U,w),b1(r,U,D[3]),r.getTag().insertRules(w,p)),p.length=0}else p.push(B)}}},Id=function(r){for(var o=document.querySelectorAll(g1),f=0,s=o.length;f<s;f++){var p=o[f];p&&p.getAttribute(ei)!==g0&&(v1(r,p),p.parentNode&&p.parentNode.removeChild(p))}};function y1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var A0=function(r){var o=document.head,f=r||o,s=document.createElement("style"),p=function(B){var D=Array.from(B.querySelectorAll("style[".concat(ei,"]")));return D[D.length-1]}(f),v=p!==void 0?p.nextSibling:null;s.setAttribute(ei,g0),s.setAttribute(m0,Pr);var _=y1();return _&&s.setAttribute("nonce",_),f.insertBefore(s,v),s},x1=function(){function r(o){this.element=A0(o),this.element.appendChild(document.createTextNode("")),this.sheet=function(f){if(f.sheet)return f.sheet;for(var s=document.styleSheets,p=0,v=s.length;p<v;p++){var _=s[p];if(_.ownerNode===f)return _}throw cl(17)}(this.element),this.length=0}return r.prototype.insertRule=function(o,f){try{return this.sheet.insertRule(f,o),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},r.prototype.getRule=function(o){var f=this.sheet.cssRules[o];return f&&f.cssText?f.cssText:""},r}(),S1=function(){function r(o){this.element=A0(o),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(o,f){if(o<=this.length&&o>=0){var s=document.createTextNode(f);return this.element.insertBefore(s,this.nodes[o]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},r.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},r}(),w1=function(){function r(o){this.rules=[],this.length=0}return r.prototype.insertRule=function(o,f){return o<=this.length&&(this.rules.splice(o,0,f),this.length++,!0)},r.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},r.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},r}(),t0=Ur,O1={isServer:!Ur,useCSSOMInjection:!Ib},E0=function(){function r(o,f,s){o===void 0&&(o=ni),f===void 0&&(f={});var p=this;this.options=de(de({},O1),o),this.gs=f,this.names=new Map(s),this.server=!!o.isServer,!this.server&&Ur&&t0&&(t0=!1,Id(this)),Rs(this,function(){return function(v){for(var _=v.getTag(),B=_.length,D="",w=function(j){var Z=function(ct){return qr.get(ct)}(j);if(Z===void 0)return"continue";var J=v.names.get(Z),X=_.getGroup(j);if(J===void 0||!J.size||X.length===0)return"continue";var Y="".concat(ei,".g").concat(j,'[id="').concat(Z,'"]'),V="";J!==void 0&&J.forEach(function(ct){ct.length>0&&(V+="".concat(ct,","))}),D+="".concat(X).concat(Y,'{content:"').concat(V,'"}').concat(Ms)},U=0;U<B;U++)w(U);return D}(p)})}return r.registerId=function(o){return Dr(o)},r.prototype.rehydrate=function(){!this.server&&Ur&&Id(this)},r.prototype.reconstructWithOptions=function(o,f){return f===void 0&&(f=!0),new r(de(de({},this.options),o),this.gs,f&&this.names||void 0)},r.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(o=function(f){var s=f.useCSSOMInjection,p=f.target;return f.isServer?new w1(p):s?new x1(p):new S1(p)}(this.options),new d1(o)));var o},r.prototype.hasNameForId=function(o,f){return this.names.has(o)&&this.names.get(o).has(f)},r.prototype.registerName=function(o,f){if(Dr(o),this.names.has(o))this.names.get(o).add(f);else{var s=new Set;s.add(f),this.names.set(o,s)}},r.prototype.insertRules=function(o,f,s){this.registerName(o,f),this.getTag().insertRules(Dr(o),s)},r.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},r.prototype.clearRules=function(o){this.getTag().clearGroup(Dr(o)),this.clearNames(o)},r.prototype.clearTag=function(){this.tag=void 0},r}(),T1=/&/g,A1=/^\s*\/\/.*$/gm;function _0(r,o){return r.map(function(f){return f.type==="rule"&&(f.value="".concat(o," ").concat(f.value),f.value=f.value.replaceAll(",",",".concat(o," ")),f.props=f.props.map(function(s){return"".concat(o," ").concat(s)})),Array.isArray(f.children)&&f.type!=="@keyframes"&&(f.children=_0(f.children,o)),f})}function E1(r){var o,f,s,p=ni,v=p.options,_=v===void 0?ni:v,B=p.plugins,D=B===void 0?Xr:B,w=function(Z,J,X){return X.startsWith(f)&&X.endsWith(f)&&X.replaceAll(f,"").length>0?".".concat(o):Z},U=D.slice();U.push(function(Z){Z.type===Yr&&Z.value.includes("&")&&(Z.props[0]=Z.props[0].replace(T1,f).replace(s,w))}),_.prefix&&U.push(Wb),U.push(Kb);var j=function(Z,J,X,Y){J===void 0&&(J=""),X===void 0&&(X=""),Y===void 0&&(Y="&"),o=Y,f=J,s=new RegExp("\\".concat(f,"\\b"),"g");var V=Z.replace(A1,""),ct=Qb(X||J?"".concat(X," ").concat(J," { ").concat(V," }"):V);_.namespace&&(ct=_0(ct,_.namespace));var ot=[];return Nr(ct,Jb(U.concat($b(function(k){return ot.push(k)})))),ot};return j.hash=D.length?D.reduce(function(Z,J){return J.name||cl(15),Fa(Z,J.name)},v0).toString():"",j}var _1=new E0,Ts=E1(),D0=Pt.createContext({shouldForwardProp:void 0,styleSheet:_1,stylis:Ts});D0.Consumer;Pt.createContext(void 0);function e0(){return xt.useContext(D0)}var M0=function(){function r(o,f){var s=this;this.inject=function(p,v){v===void 0&&(v=Ts);var _=s.name+v.hash;p.hasNameForId(s.id,_)||p.insertRules(s.id,_,v(s.rules,_,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=f,Rs(this,function(){throw cl(12,String(s.name))})}return r.prototype.getName=function(o){return o===void 0&&(o=Ts),this.name+o.hash},r}(),D1=function(r){return r>="A"&&r<="Z"};function n0(r){for(var o="",f=0;f<r.length;f++){var s=r[f];if(f===1&&s==="-"&&r[0]==="-")return r;D1(s)?o+="-"+s.toLowerCase():o+=s}return o.startsWith("ms-")?"-"+o:o}var z0=function(r){return r==null||r===!1||r===""},R0=function(r){var o,f,s=[];for(var p in r){var v=r[p];r.hasOwnProperty(p)&&!z0(v)&&(Array.isArray(v)&&v.isCss||ai(v)?s.push("".concat(n0(p),":"),v,";"):sl(v)?s.push.apply(s,ul(ul(["".concat(p," {")],R0(v),!1),["}"],!1)):s.push("".concat(n0(p),": ").concat((o=p,(f=v)==null||typeof f=="boolean"||f===""?"":typeof f!="number"||f===0||o in Fb||o.startsWith("--")?String(f).trim():"".concat(f,"px")),";")))}return s};function ca(r,o,f,s){if(z0(r))return[];if(zs(r))return[".".concat(r.styledComponentId)];if(ai(r)){if(!ai(v=r)||v.prototype&&v.prototype.isReactComponent||!o)return[r];var p=r(o);return ca(p,o,f,s)}var v;return r instanceof M0?f?(r.inject(f,s),[r.getName(s)]):[r]:sl(r)?R0(r):Array.isArray(r)?Array.prototype.concat.apply(Xr,r.map(function(_){return ca(_,o,f,s)})):[r.toString()]}function M1(r){for(var o=0;o<r.length;o+=1){var f=r[o];if(ai(f)&&!zs(f))return!1}return!0}var z1=y0(Pr),R1=function(){function r(o,f,s){this.rules=o,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&M1(o),this.componentId=f,this.baseHash=Fa(z1,f),this.baseStyle=s,E0.registerId(f)}return r.prototype.generateAndInjectStyles=function(o,f,s){var p=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,f,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&f.hasNameForId(this.componentId,this.staticRulesId))p=ua(p,this.staticRulesId);else{var v=ws(ca(this.rules,o,f,s)),_=Ss(Fa(this.baseHash,v)>>>0);if(!f.hasNameForId(this.componentId,_)){var B=s(v,".".concat(_),void 0,this.componentId);f.insertRules(this.componentId,_,B)}p=ua(p,_),this.staticRulesId=_}else{for(var D=Fa(this.baseHash,s.hash),w="",U=0;U<this.rules.length;U++){var j=this.rules[U];if(typeof j=="string")w+=j;else if(j){var Z=ws(ca(j,o,f,s));D=Fa(D,Z+U),w+=Z}}if(w){var J=Ss(D>>>0);f.hasNameForId(this.componentId,J)||f.insertRules(this.componentId,J,s(w,".".concat(J),void 0,this.componentId)),p=ua(p,J)}}return p},r}(),C0=Pt.createContext(void 0);C0.Consumer;var ms={};function C1(r,o,f){var s=zs(r),p=r,v=!gs(r),_=o.attrs,B=_===void 0?Xr:_,D=o.componentId,w=D===void 0?function(u,h){var g=typeof u!="string"?"sc":Kd(u);ms[g]=(ms[g]||0)+1;var x="".concat(g,"-").concat(x0(Pr+g+ms[g]));return h?"".concat(h,"-").concat(x):x}(o.displayName,o.parentComponentId):D,U=o.displayName,j=U===void 0?function(u){return gs(u)?"styled.".concat(u):"Styled(".concat(i1(u),")")}(r):U,Z=o.displayName&&o.componentId?"".concat(Kd(o.displayName),"-").concat(o.componentId):o.componentId||w,J=s&&p.attrs?p.attrs.concat(B).filter(Boolean):B,X=o.shouldForwardProp;if(s&&p.shouldForwardProp){var Y=p.shouldForwardProp;if(o.shouldForwardProp){var V=o.shouldForwardProp;X=function(u,h){return Y(u,h)&&V(u,h)}}else X=Y}var ct=new R1(f,Z,s?p.componentStyle:void 0);function ot(u,h){return function(g,x,M){var C=g.attrs,K=g.componentStyle,F=g.defaultProps,rt=g.foldedComponentIds,Ot=g.styledComponentId,jt=g.target,Ct=Pt.useContext(C0),z=e0(),L=g.shouldForwardProp||z.shouldForwardProp,et=t1(x,Ct,F)||ni,dt=function(pt,at,Kt){for(var St,ae=de(de({},at),{className:void 0,theme:Kt}),Ln=0;Ln<pt.length;Ln+=1){var $e=ai(St=pt[Ln])?St(ae):St;for(var Ae in $e)ae[Ae]=Ae==="className"?ua(ae[Ae],$e[Ae]):Ae==="style"?de(de({},ae[Ae]),$e[Ae]):$e[Ae]}return at.className&&(ae.className=ua(ae.className,at.className)),ae}(C,x,et),b=dt.as||jt,q={};for(var G in dt)dt[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&dt.theme===et||(G==="forwardedAs"?q.as=dt.forwardedAs:L&&!L(G,b)||(q[G]=dt[G]));var P=function(pt,at){var Kt=e0(),St=pt.generateAndInjectStyles(at,Kt.styleSheet,Kt.stylis);return St}(K,dt),I=ua(rt,Ot);return P&&(I+=" "+P),dt.className&&(I+=" "+dt.className),q[gs(b)&&!b0.has(b)?"class":"className"]=I,M&&(q.ref=M),xt.createElement(b,q)}(k,u,h)}ot.displayName=j;var k=Pt.forwardRef(ot);return k.attrs=J,k.componentStyle=ct,k.displayName=j,k.shouldForwardProp=X,k.foldedComponentIds=s?ua(p.foldedComponentIds,p.styledComponentId):"",k.styledComponentId=Z,k.target=s?p.target:r,Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(u){this._foldedDefaultProps=s?function(h){for(var g=[],x=1;x<arguments.length;x++)g[x-1]=arguments[x];for(var M=0,C=g;M<C.length;M++)Os(h,C[M],!0);return h}({},p.defaultProps,u):u}}),Rs(k,function(){return".".concat(k.styledComponentId)}),v&&T0(k,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),k}function a0(r,o){for(var f=[r[0]],s=0,p=o.length;s<p;s+=1)f.push(o[s],r[s+1]);return f}var i0=function(r){return Object.assign(r,{isCss:!0})};function k0(r){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];if(ai(r)||sl(r))return i0(ca(a0(Xr,ul([r],o,!0))));var s=r;return o.length===0&&s.length===1&&typeof s[0]=="string"?ca(s):i0(ca(a0(s,o)))}function As(r,o,f){if(f===void 0&&(f=ni),!o)throw cl(1,o);var s=function(p){for(var v=[],_=1;_<arguments.length;_++)v[_-1]=arguments[_];return r(o,f,k0.apply(void 0,ul([p],v,!1)))};return s.attrs=function(p){return As(r,o,de(de({},f),{attrs:Array.prototype.concat(f.attrs,p).filter(Boolean)}))},s.withConfig=function(p){return As(r,o,de(de({},f),p))},s}var H0=function(r){return As(C1,r)},Cs=H0;b0.forEach(function(r){Cs[r]=H0(r)});function k1(r){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];var s=ws(k0.apply(void 0,ul([r],o,!1))),p=x0(s);return new M0(p,s)}const H1=k1`
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
`,N1=Cs.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  pointer-events: none;
  z-index: 2;
  overflow: hidden;
  background: transparent;
`,oa=Cs.img`
  position: absolute;
  top: ${({top:r})=>r};
  left: 0;
  width: auto;
  height: auto;
  transform: scale(${({scale:r})=>r||1});
  opacity: 0;
  animation: ${H1} ${({duration:r})=>r}s linear infinite;
  animation-delay: ${({delay:r})=>r}s;
`,U1=()=>tt.jsxs(N1,{children:[tt.jsx(oa,{src:"/letter-to-the-cloud/assets/images/clouds/02.png",top:"20%",delay:0,duration:80,scale:6}),tt.jsx(oa,{src:"/letter-to-the-cloud/assets/images/clouds/03.png",top:"30%",delay:5,duration:90,scale:5.5}),tt.jsx(oa,{src:"/letter-to-the-cloud/assets/images/clouds/04.png",top:"40%",delay:10,duration:100,scale:6.2}),tt.jsx(oa,{src:"/letter-to-the-cloud/assets/images/clouds/05.png",top:"0%",delay:3,duration:85,scale:5.8}),tt.jsx(oa,{src:"/letter-to-the-cloud/assets/images/clouds/06.png",top:"25%",delay:8,duration:95,scale:6.5}),tt.jsx(oa,{src:"/letter-to-the-cloud/assets/images/clouds/07.png",top:"35%",delay:12,duration:90,scale:6}),tt.jsx(oa,{src:"/letter-to-the-cloud/assets/images/clouds/08.png",top:"45%",delay:6,duration:100,scale:6.8})]});function q1(){const r=gm(),{width:o,height:f,isMobile:s}=pm();return tt.jsxs(tt.Fragment,{children:[!r&&tt.jsx(kb,{}),tt.jsx(Rb,{}),tt.jsx(U1,{}),tt.jsx("div",{className:"wrapper",children:r&&tt.jsx(zb,{width:o,height:f,isMobile:s})})]})}dm.createRoot(document.getElementById("root")).render(tt.jsx(xt.StrictMode,{children:tt.jsx(q1,{})}));
