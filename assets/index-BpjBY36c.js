function Z1(a,r){for(var o=0;o<r.length;o++){const s=r[o];if(typeof s!="string"&&!Array.isArray(s)){for(const c in s)if(c!=="default"&&!(c in a)){const h=Object.getOwnPropertyDescriptor(s,c);h&&Object.defineProperty(a,c,h.get?h:{enumerable:!0,get:()=>s[c]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function o(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerPolicy&&(h.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?h.credentials="include":c.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(c){if(c.ep)return;c.ep=!0;const h=o(c);fetch(c.href,h)}})();function V1(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Oc={exports:{}},$r={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function K1(){if(gp)return $r;gp=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(s,c,h){var m=null;if(h!==void 0&&(m=""+h),c.key!==void 0&&(m=""+c.key),"key"in c){h={};for(var x in c)x!=="key"&&(h[x]=c[x])}else h=c;return c=h.ref,{$$typeof:a,type:s,key:m,ref:c!==void 0?c:null,props:h}}return $r.Fragment=r,$r.jsx=o,$r.jsxs=o,$r}var mp;function J1(){return mp||(mp=1,Oc.exports=K1()),Oc.exports}var tt=J1(),Ac={exports:{}},ht={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function W1(){if(bp)return ht;bp=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),m=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),k=Symbol.iterator;function B(A){return A===null||typeof A!="object"?null:(A=k&&A[k]||A["@@iterator"],typeof A=="function"?A:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,w={};function Y(A,Z,W){this.props=A,this.context=Z,this.refs=w,this.updater=W||G}Y.prototype.isReactComponent={},Y.prototype.setState=function(A,Z){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,Z,"setState")},Y.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function V(){}V.prototype=Y.prototype;function K(A,Z,W){this.props=A,this.context=Z,this.refs=w,this.updater=W||G}var R=K.prototype=new V;R.constructor=K,N(R,Y.prototype),R.isPureReactComponent=!0;var f=Array.isArray,p={H:null,A:null,T:null,S:null,V:null},v=Object.prototype.hasOwnProperty;function O(A,Z,W,F,it,yt){return W=yt.ref,{$$typeof:a,type:A,key:Z,ref:W!==void 0?W:null,props:yt}}function z(A,Z){return O(A.type,Z,void 0,void 0,void 0,A.props)}function U(A){return typeof A=="object"&&A!==null&&A.$$typeof===a}function b(A){var Z={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(W){return Z[W]})}var X=/\/+/g;function I(A,Z){return typeof A=="object"&&A!==null&&A.key!=null?b(""+A.key):Z.toString(36)}function rt(){}function Bt(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(rt,rt):(A.status="pending",A.then(function(Z){A.status==="pending"&&(A.status="fulfilled",A.value=Z)},function(Z){A.status==="pending"&&(A.status="rejected",A.reason=Z)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function mt(A,Z,W,F,it){var yt=typeof A;(yt==="undefined"||yt==="boolean")&&(A=null);var st=!1;if(A===null)st=!0;else switch(yt){case"bigint":case"string":case"number":st=!0;break;case"object":switch(A.$$typeof){case a:case r:st=!0;break;case E:return st=A._init,mt(st(A._payload),Z,W,F,it)}}if(st)return it=it(A),st=F===""?"."+I(A,0):F,f(it)?(W="",st!=null&&(W=st.replace(X,"$&/")+"/"),mt(it,Z,W,"",function(ge){return ge})):it!=null&&(U(it)&&(it=z(it,W+(it.key==null||A&&A.key===it.key?"":(""+it.key).replace(X,"$&/")+"/")+st)),Z.push(it)),1;st=0;var re=F===""?".":F+":";if(f(A))for(var Et=0;Et<A.length;Et++)F=A[Et],yt=re+I(F,Et),st+=mt(F,Z,W,yt,it);else if(Et=B(A),typeof Et=="function")for(A=Et.call(A),Et=0;!(F=A.next()).done;)F=F.value,yt=re+I(F,Et++),st+=mt(F,Z,W,yt,it);else if(yt==="object"){if(typeof A.then=="function")return mt(Bt(A),Z,W,F,it);throw Z=String(A),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return st}function j(A,Z,W){if(A==null)return A;var F=[],it=0;return mt(A,F,"","",function(yt){return Z.call(W,yt,it++)}),F}function J(A){if(A._status===-1){var Z=A._result;Z=Z(),Z.then(function(W){(A._status===0||A._status===-1)&&(A._status=1,A._result=W)},function(W){(A._status===0||A._status===-1)&&(A._status=2,A._result=W)}),A._status===-1&&(A._status=0,A._result=Z)}if(A._status===1)return A._result.default;throw A._result}var lt=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function bt(){}return ht.Children={map:j,forEach:function(A,Z,W){j(A,function(){Z.apply(this,arguments)},W)},count:function(A){var Z=0;return j(A,function(){Z++}),Z},toArray:function(A){return j(A,function(Z){return Z})||[]},only:function(A){if(!U(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},ht.Component=Y,ht.Fragment=o,ht.Profiler=c,ht.PureComponent=K,ht.StrictMode=s,ht.Suspense=S,ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=p,ht.__COMPILER_RUNTIME={__proto__:null,c:function(A){return p.H.useMemoCache(A)}},ht.cache=function(A){return function(){return A.apply(null,arguments)}},ht.cloneElement=function(A,Z,W){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var F=N({},A.props),it=A.key,yt=void 0;if(Z!=null)for(st in Z.ref!==void 0&&(yt=void 0),Z.key!==void 0&&(it=""+Z.key),Z)!v.call(Z,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&Z.ref===void 0||(F[st]=Z[st]);var st=arguments.length-2;if(st===1)F.children=W;else if(1<st){for(var re=Array(st),Et=0;Et<st;Et++)re[Et]=arguments[Et+2];F.children=re}return O(A.type,it,void 0,void 0,yt,F)},ht.createContext=function(A){return A={$$typeof:m,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:h,_context:A},A},ht.createElement=function(A,Z,W){var F,it={},yt=null;if(Z!=null)for(F in Z.key!==void 0&&(yt=""+Z.key),Z)v.call(Z,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(it[F]=Z[F]);var st=arguments.length-2;if(st===1)it.children=W;else if(1<st){for(var re=Array(st),Et=0;Et<st;Et++)re[Et]=arguments[Et+2];it.children=re}if(A&&A.defaultProps)for(F in st=A.defaultProps,st)it[F]===void 0&&(it[F]=st[F]);return O(A,yt,void 0,void 0,null,it)},ht.createRef=function(){return{current:null}},ht.forwardRef=function(A){return{$$typeof:x,render:A}},ht.isValidElement=U,ht.lazy=function(A){return{$$typeof:E,_payload:{_status:-1,_result:A},_init:J}},ht.memo=function(A,Z){return{$$typeof:y,type:A,compare:Z===void 0?null:Z}},ht.startTransition=function(A){var Z=p.T,W={};p.T=W;try{var F=A(),it=p.S;it!==null&&it(W,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(bt,lt)}catch(yt){lt(yt)}finally{p.T=Z}},ht.unstable_useCacheRefresh=function(){return p.H.useCacheRefresh()},ht.use=function(A){return p.H.use(A)},ht.useActionState=function(A,Z,W){return p.H.useActionState(A,Z,W)},ht.useCallback=function(A,Z){return p.H.useCallback(A,Z)},ht.useContext=function(A){return p.H.useContext(A)},ht.useDebugValue=function(){},ht.useDeferredValue=function(A,Z){return p.H.useDeferredValue(A,Z)},ht.useEffect=function(A,Z,W){var F=p.H;if(typeof W=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return F.useEffect(A,Z)},ht.useId=function(){return p.H.useId()},ht.useImperativeHandle=function(A,Z,W){return p.H.useImperativeHandle(A,Z,W)},ht.useInsertionEffect=function(A,Z){return p.H.useInsertionEffect(A,Z)},ht.useLayoutEffect=function(A,Z){return p.H.useLayoutEffect(A,Z)},ht.useMemo=function(A,Z){return p.H.useMemo(A,Z)},ht.useOptimistic=function(A,Z){return p.H.useOptimistic(A,Z)},ht.useReducer=function(A,Z,W){return p.H.useReducer(A,Z,W)},ht.useRef=function(A){return p.H.useRef(A)},ht.useState=function(A){return p.H.useState(A)},ht.useSyncExternalStore=function(A,Z,W){return p.H.useSyncExternalStore(A,Z,W)},ht.useTransition=function(){return p.H.useTransition()},ht.version="19.1.0",ht}var yp;function rf(){return yp||(yp=1,Ac.exports=W1()),Ac.exports}var ct=rf();const Jt=V1(ct),vp=Z1({__proto__:null,default:Jt},[ct]);var Ec={exports:{}},Gr={},Cc={exports:{}},_c={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function F1(){return xp||(xp=1,function(a){function r(j,J){var lt=j.length;j.push(J);t:for(;0<lt;){var bt=lt-1>>>1,A=j[bt];if(0<c(A,J))j[bt]=J,j[lt]=A,lt=bt;else break t}}function o(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var J=j[0],lt=j.pop();if(lt!==J){j[0]=lt;t:for(var bt=0,A=j.length,Z=A>>>1;bt<Z;){var W=2*(bt+1)-1,F=j[W],it=W+1,yt=j[it];if(0>c(F,lt))it<A&&0>c(yt,F)?(j[bt]=yt,j[it]=lt,bt=it):(j[bt]=F,j[W]=lt,bt=W);else if(it<A&&0>c(yt,lt))j[bt]=yt,j[it]=lt,bt=it;else break t}}return J}function c(j,J){var lt=j.sortIndex-J.sortIndex;return lt!==0?lt:j.id-J.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;a.unstable_now=function(){return h.now()}}else{var m=Date,x=m.now();a.unstable_now=function(){return m.now()-x}}var S=[],y=[],E=1,k=null,B=3,G=!1,N=!1,w=!1,Y=!1,V=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function f(j){for(var J=o(y);J!==null;){if(J.callback===null)s(y);else if(J.startTime<=j)s(y),J.sortIndex=J.expirationTime,r(S,J);else break;J=o(y)}}function p(j){if(w=!1,f(j),!N)if(o(S)!==null)N=!0,v||(v=!0,I());else{var J=o(y);J!==null&&mt(p,J.startTime-j)}}var v=!1,O=-1,z=5,U=-1;function b(){return Y?!0:!(a.unstable_now()-U<z)}function X(){if(Y=!1,v){var j=a.unstable_now();U=j;var J=!0;try{t:{N=!1,w&&(w=!1,K(O),O=-1),G=!0;var lt=B;try{e:{for(f(j),k=o(S);k!==null&&!(k.expirationTime>j&&b());){var bt=k.callback;if(typeof bt=="function"){k.callback=null,B=k.priorityLevel;var A=bt(k.expirationTime<=j);if(j=a.unstable_now(),typeof A=="function"){k.callback=A,f(j),J=!0;break e}k===o(S)&&s(S),f(j)}else s(S);k=o(S)}if(k!==null)J=!0;else{var Z=o(y);Z!==null&&mt(p,Z.startTime-j),J=!1}}break t}finally{k=null,B=lt,G=!1}J=void 0}}finally{J?I():v=!1}}}var I;if(typeof R=="function")I=function(){R(X)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,Bt=rt.port2;rt.port1.onmessage=X,I=function(){Bt.postMessage(null)}}else I=function(){V(X,0)};function mt(j,J){O=V(function(){j(a.unstable_now())},J)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(j){j.callback=null},a.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<j?Math.floor(1e3/j):5},a.unstable_getCurrentPriorityLevel=function(){return B},a.unstable_next=function(j){switch(B){case 1:case 2:case 3:var J=3;break;default:J=B}var lt=B;B=J;try{return j()}finally{B=lt}},a.unstable_requestPaint=function(){Y=!0},a.unstable_runWithPriority=function(j,J){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var lt=B;B=j;try{return J()}finally{B=lt}},a.unstable_scheduleCallback=function(j,J,lt){var bt=a.unstable_now();switch(typeof lt=="object"&&lt!==null?(lt=lt.delay,lt=typeof lt=="number"&&0<lt?bt+lt:bt):lt=bt,j){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=lt+A,j={id:E++,callback:J,priorityLevel:j,startTime:lt,expirationTime:A,sortIndex:-1},lt>bt?(j.sortIndex=lt,r(y,j),o(S)===null&&j===o(y)&&(w?(K(O),O=-1):w=!0,mt(p,lt-bt))):(j.sortIndex=A,r(S,j),N||G||(N=!0,v||(v=!0,I()))),j},a.unstable_shouldYield=b,a.unstable_wrapCallback=function(j){var J=B;return function(){var lt=B;B=J;try{return j.apply(this,arguments)}finally{B=lt}}}}(_c)),_c}var Sp;function I1(){return Sp||(Sp=1,Cc.exports=F1()),Cc.exports}var kc={exports:{}},ye={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function ty(){if(wp)return ye;wp=1;var a=rf();function r(S){var y="https://react.dev/errors/"+S;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+S+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function h(S,y,E){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:k==null?null:""+k,children:S,containerInfo:y,implementation:E}}var m=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(S,y){if(S==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return ye.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ye.createPortal=function(S,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(r(299));return h(S,y,null,E)},ye.flushSync=function(S){var y=m.T,E=s.p;try{if(m.T=null,s.p=2,S)return S()}finally{m.T=y,s.p=E,s.d.f()}},ye.preconnect=function(S,y){typeof S=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(S,y))},ye.prefetchDNS=function(S){typeof S=="string"&&s.d.D(S)},ye.preinit=function(S,y){if(typeof S=="string"&&y&&typeof y.as=="string"){var E=y.as,k=x(E,y.crossOrigin),B=typeof y.integrity=="string"?y.integrity:void 0,G=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?s.d.S(S,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:k,integrity:B,fetchPriority:G}):E==="script"&&s.d.X(S,{crossOrigin:k,integrity:B,fetchPriority:G,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},ye.preinitModule=function(S,y){if(typeof S=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=x(y.as,y.crossOrigin);s.d.M(S,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(S)},ye.preload=function(S,y){if(typeof S=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,k=x(E,y.crossOrigin);s.d.L(S,E,{crossOrigin:k,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},ye.preloadModule=function(S,y){if(typeof S=="string")if(y){var E=x(y.as,y.crossOrigin);s.d.m(S,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(S)},ye.requestFormReset=function(S){s.d.r(S)},ye.unstable_batchedUpdates=function(S,y){return S(y)},ye.useFormState=function(S,y,E){return m.H.useFormState(S,y,E)},ye.useFormStatus=function(){return m.H.useHostTransitionStatus()},ye.version="19.1.0",ye}var Tp;function ey(){if(Tp)return kc.exports;Tp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),kc.exports=ty(),kc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function ny(){if(Op)return Gr;Op=1;var a=I1(),r=rf(),o=ey();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function h(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function m(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function x(t){if(h(t)!==t)throw Error(s(188))}function S(t){var e=t.alternate;if(!e){if(e=h(t),e===null)throw Error(s(188));return e!==t?null:t}for(var n=t,i=e;;){var l=n.return;if(l===null)break;var u=l.alternate;if(u===null){if(i=l.return,i!==null){n=i;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===n)return x(l),t;if(u===i)return x(l),e;u=u.sibling}throw Error(s(188))}if(n.return!==i.return)n=l,i=u;else{for(var d=!1,g=l.child;g;){if(g===n){d=!0,n=l,i=u;break}if(g===i){d=!0,i=l,n=u;break}g=g.sibling}if(!d){for(g=u.child;g;){if(g===n){d=!0,n=u,i=l;break}if(g===i){d=!0,i=u,n=l;break}g=g.sibling}if(!d)throw Error(s(189))}}if(n.alternate!==i)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?t:e}function y(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=y(t),e!==null)return e;t=t.sibling}return null}var E=Object.assign,k=Symbol.for("react.element"),B=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),K=Symbol.for("react.consumer"),R=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),b=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function I(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var rt=Symbol.for("react.client.reference");function Bt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===rt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case Y:return"Profiler";case w:return"StrictMode";case p:return"Suspense";case v:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case G:return"Portal";case R:return(t.displayName||"Context")+".Provider";case K:return(t._context.displayName||"Context")+".Consumer";case f:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return e=t.displayName||null,e!==null?e:Bt(t.type)||"Memo";case z:e=t._payload,t=t._init;try{return Bt(t(e))}catch{}}return null}var mt=Array.isArray,j=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt={pending:!1,data:null,method:null,action:null},bt=[],A=-1;function Z(t){return{current:t}}function W(t){0>A||(t.current=bt[A],bt[A]=null,A--)}function F(t,e){A++,bt[A]=t.current,t.current=e}var it=Z(null),yt=Z(null),st=Z(null),re=Z(null);function Et(t,e){switch(F(st,e),F(yt,t),F(it,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?G0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=G0(e),t=Y0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}W(it),F(it,t)}function ge(){W(it),W(yt),W(st)}function pa(t){t.memoizedState!==null&&F(re,t);var e=it.current,n=Y0(e,t.type);e!==n&&(F(yt,t),F(it,n))}function xn(t){yt.current===t&&(W(it),W(yt)),re.current===t&&(W(re),Pr._currentValue=lt)}var $e=Object.prototype.hasOwnProperty,fs=a.unstable_scheduleCallback,hs=a.unstable_cancelCallback,Am=a.unstable_shouldYield,Em=a.unstable_requestPaint,sn=a.unstable_now,Cm=a.unstable_getCurrentPriorityLevel,Tf=a.unstable_ImmediatePriority,Of=a.unstable_UserBlockingPriority,ul=a.unstable_NormalPriority,_m=a.unstable_LowPriority,Af=a.unstable_IdlePriority,km=a.log,Rm=a.unstable_setDisableYieldValue,Xi=null,_e=null;function Ln(t){if(typeof km=="function"&&Rm(t),_e&&typeof _e.setStrictMode=="function")try{_e.setStrictMode(Xi,t)}catch{}}var ke=Math.clz32?Math.clz32:zm,Dm=Math.log,Mm=Math.LN2;function zm(t){return t>>>=0,t===0?32:31-(Dm(t)/Mm|0)|0}var cl=256,fl=4194304;function ga(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function hl(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var l=0,u=t.suspendedLanes,d=t.pingedLanes;t=t.warmLanes;var g=i&134217727;return g!==0?(i=g&~u,i!==0?l=ga(i):(d&=g,d!==0?l=ga(d):n||(n=g&~t,n!==0&&(l=ga(n))))):(g=i&~u,g!==0?l=ga(g):d!==0?l=ga(d):n||(n=i&~t,n!==0&&(l=ga(n)))),l===0?0:e!==0&&e!==l&&(e&u)===0&&(u=l&-l,n=e&-e,u>=n||u===32&&(n&4194048)!==0)?e:l}function Qi(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Bm(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ef(){var t=cl;return cl<<=1,(cl&4194048)===0&&(cl=256),t}function Cf(){var t=fl;return fl<<=1,(fl&62914560)===0&&(fl=4194304),t}function ds(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Zi(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Nm(t,e,n,i,l,u){var d=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var g=t.entanglements,T=t.expirationTimes,M=t.hiddenUpdates;for(n=d&~n;0<n;){var L=31-ke(n),Q=1<<L;g[L]=0,T[L]=-1;var H=M[L];if(H!==null)for(M[L]=null,L=0;L<H.length;L++){var P=H[L];P!==null&&(P.lane&=-536870913)}n&=~Q}i!==0&&_f(t,i,0),u!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=u&~(d&~e))}function _f(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-ke(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&4194090}function kf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ke(n),l=1<<i;l&e|t[i]&e&&(t[i]|=e),n&=~l}}function ps(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function gs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Rf(){var t=J.p;return t!==0?t:(t=window.event,t===void 0?32:up(t.type))}function Hm(t,e){var n=J.p;try{return J.p=t,e()}finally{J.p=n}}var $n=Math.random().toString(36).slice(2),me="__reactFiber$"+$n,Se="__reactProps$"+$n,ja="__reactContainer$"+$n,ms="__reactEvents$"+$n,Pm="__reactListeners$"+$n,Um="__reactHandles$"+$n,Df="__reactResources$"+$n,Vi="__reactMarker$"+$n;function bs(t){delete t[me],delete t[Se],delete t[ms],delete t[Pm],delete t[Um]}function La(t){var e=t[me];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ja]||n[me]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=V0(t);t!==null;){if(n=t[me])return n;t=V0(t)}return e}t=n,n=t.parentNode}return null}function $a(t){if(t=t[me]||t[ja]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Ki(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function Ga(t){var e=t[Df];return e||(e=t[Df]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function le(t){t[Vi]=!0}var Mf=new Set,zf={};function ma(t,e){Ya(t,e),Ya(t+"Capture",e)}function Ya(t,e){for(zf[t]=e,t=0;t<e.length;t++)Mf.add(e[t])}var qm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bf={},Nf={};function jm(t){return $e.call(Nf,t)?!0:$e.call(Bf,t)?!1:qm.test(t)?Nf[t]=!0:(Bf[t]=!0,!1)}function dl(t,e,n){if(jm(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function pl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Sn(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}var ys,Hf;function Xa(t){if(ys===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ys=e&&e[1]||"",Hf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ys+t+Hf}var vs=!1;function xs(t,e){if(!t||vs)return"";vs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(P){var H=P}Reflect.construct(t,[],Q)}else{try{Q.call()}catch(P){H=P}t.call(Q.prototype)}}else{try{throw Error()}catch(P){H=P}(Q=t())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(P){if(P&&H&&typeof P.stack=="string")return[P.stack,H.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=i.DetermineComponentFrameRoot(),d=u[0],g=u[1];if(d&&g){var T=d.split(`
`),M=g.split(`
`);for(l=i=0;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;for(;l<M.length&&!M[l].includes("DetermineComponentFrameRoot");)l++;if(i===T.length||l===M.length)for(i=T.length-1,l=M.length-1;1<=i&&0<=l&&T[i]!==M[l];)l--;for(;1<=i&&0<=l;i--,l--)if(T[i]!==M[l]){if(i!==1||l!==1)do if(i--,l--,0>l||T[i]!==M[l]){var L=`
`+T[i].replace(" at new "," at ");return t.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",t.displayName)),L}while(1<=i&&0<=l);break}}}finally{vs=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Xa(n):""}function Lm(t){switch(t.tag){case 26:case 27:case 5:return Xa(t.type);case 16:return Xa("Lazy");case 13:return Xa("Suspense");case 19:return Xa("SuspenseList");case 0:case 15:return xs(t.type,!1);case 11:return xs(t.type.render,!1);case 1:return xs(t.type,!0);case 31:return Xa("Activity");default:return""}}function Pf(t){try{var e="";do e+=Lm(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Ge(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Uf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $m(t){var e=Uf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,u=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(d){i=""+d,u.call(this,d)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(d){i=""+d},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gl(t){t._valueTracker||(t._valueTracker=$m(t))}function qf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Uf(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ml(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Gm=/[\n"\\]/g;function Ye(t){return t.replace(Gm,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Ss(t,e,n,i,l,u,d,g){t.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.type=d:t.removeAttribute("type"),e!=null?d==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ge(e)):t.value!==""+Ge(e)&&(t.value=""+Ge(e)):d!=="submit"&&d!=="reset"||t.removeAttribute("value"),e!=null?ws(t,d,Ge(e)):n!=null?ws(t,d,Ge(n)):i!=null&&t.removeAttribute("value"),l==null&&u!=null&&(t.defaultChecked=!!u),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.name=""+Ge(g):t.removeAttribute("name")}function jf(t,e,n,i,l,u,d,g){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;n=n!=null?""+Ge(n):"",e=e!=null?""+Ge(e):n,g||e===t.value||(t.value=e),t.defaultValue=e}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=g?t.checked:!!i,t.defaultChecked=!!i,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.name=d)}function ws(t,e,n){e==="number"&&ml(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Qa(t,e,n,i){if(t=t.options,e){e={};for(var l=0;l<n.length;l++)e["$"+n[l]]=!0;for(n=0;n<t.length;n++)l=e.hasOwnProperty("$"+t[n].value),t[n].selected!==l&&(t[n].selected=l),l&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ge(n),e=null,l=0;l<t.length;l++){if(t[l].value===n){t[l].selected=!0,i&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function Lf(t,e,n){if(e!=null&&(e=""+Ge(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Ge(n):""}function $f(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(s(92));if(mt(i)){if(1<i.length)throw Error(s(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=Ge(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i)}function Za(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ym=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gf(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||Ym.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Yf(t,e,n){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var l in e)i=e[l],e.hasOwnProperty(l)&&n[l]!==i&&Gf(t,l,i)}else for(var u in e)e.hasOwnProperty(u)&&Gf(t,u,e[u])}function Ts(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bl(t){return Qm.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Os=null;function As(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Va=null,Ka=null;function Xf(t){var e=$a(t);if(e&&(t=e.stateNode)){var n=t[Se]||null;t:switch(t=e.stateNode,e.type){case"input":if(Ss(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ye(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var l=i[Se]||null;if(!l)throw Error(s(90));Ss(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&qf(i)}break t;case"textarea":Lf(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&Qa(t,!!n.multiple,e,!1)}}}var Es=!1;function Qf(t,e,n){if(Es)return t(e,n);Es=!0;try{var i=t(e);return i}finally{if(Es=!1,(Va!==null||Ka!==null)&&(no(),Va&&(e=Va,t=Ka,Ka=Va=null,Xf(e),t)))for(e=0;e<t.length;e++)Xf(t[e])}}function Ji(t,e){var n=t.stateNode;if(n===null)return null;var i=n[Se]||null;if(i===null)return null;n=i[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(s(231,e,typeof n));return n}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cs=!1;if(wn)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){Cs=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{Cs=!1}var Gn=null,_s=null,yl=null;function Zf(){if(yl)return yl;var t,e=_s,n=e.length,i,l="value"in Gn?Gn.value:Gn.textContent,u=l.length;for(t=0;t<n&&e[t]===l[t];t++);var d=n-t;for(i=1;i<=d&&e[n-i]===l[u-i];i++);return yl=l.slice(t,1<i?1-i:void 0)}function vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xl(){return!0}function Vf(){return!1}function we(t){function e(n,i,l,u,d){this._reactName=n,this._targetInst=l,this.type=i,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var g in t)t.hasOwnProperty(g)&&(n=t[g],this[g]=n?n(u):u[g]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?xl:Vf,this.isPropagationStopped=Vf,this}return E(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),e}var ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=we(ba),Fi=E({},ba,{view:0,detail:0}),Zm=we(Fi),ks,Rs,Ii,wl=E({},Fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ms,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ii&&(Ii&&t.type==="mousemove"?(ks=t.screenX-Ii.screenX,Rs=t.screenY-Ii.screenY):Rs=ks=0,Ii=t),ks)},movementY:function(t){return"movementY"in t?t.movementY:Rs}}),Kf=we(wl),Vm=E({},wl,{dataTransfer:0}),Km=we(Vm),Jm=E({},Fi,{relatedTarget:0}),Ds=we(Jm),Wm=E({},ba,{animationName:0,elapsedTime:0,pseudoElement:0}),Fm=we(Wm),Im=E({},ba,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tb=we(Im),eb=E({},ba,{data:0}),Jf=we(eb),nb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ab={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ib={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ib[t])?!!e[t]:!1}function Ms(){return rb}var lb=E({},Fi,{key:function(t){if(t.key){var e=nb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ab[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ms,charCode:function(t){return t.type==="keypress"?vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ob=we(lb),sb=E({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wf=we(sb),ub=E({},Fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ms}),cb=we(ub),fb=E({},ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),hb=we(fb),db=E({},wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pb=we(db),gb=E({},ba,{newState:0,oldState:0}),mb=we(gb),bb=[9,13,27,32],zs=wn&&"CompositionEvent"in window,tr=null;wn&&"documentMode"in document&&(tr=document.documentMode);var yb=wn&&"TextEvent"in window&&!tr,Ff=wn&&(!zs||tr&&8<tr&&11>=tr),If=" ",th=!1;function eh(t,e){switch(t){case"keyup":return bb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ja=!1;function vb(t,e){switch(t){case"compositionend":return nh(e);case"keypress":return e.which!==32?null:(th=!0,If);case"textInput":return t=e.data,t===If&&th?null:t;default:return null}}function xb(t,e){if(Ja)return t==="compositionend"||!zs&&eh(t,e)?(t=Zf(),yl=_s=Gn=null,Ja=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ff&&e.locale!=="ko"?null:e.data;default:return null}}var Sb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ah(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Sb[t.type]:e==="textarea"}function ih(t,e,n,i){Va?Ka?Ka.push(i):Ka=[i]:Va=i,e=so(e,"onChange"),0<e.length&&(n=new Sl("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var er=null,nr=null;function wb(t){U0(t,0)}function Tl(t){var e=Ki(t);if(qf(e))return t}function rh(t,e){if(t==="change")return e}var lh=!1;if(wn){var Bs;if(wn){var Ns="oninput"in document;if(!Ns){var oh=document.createElement("div");oh.setAttribute("oninput","return;"),Ns=typeof oh.oninput=="function"}Bs=Ns}else Bs=!1;lh=Bs&&(!document.documentMode||9<document.documentMode)}function sh(){er&&(er.detachEvent("onpropertychange",uh),nr=er=null)}function uh(t){if(t.propertyName==="value"&&Tl(nr)){var e=[];ih(e,nr,t,As(t)),Qf(wb,e)}}function Tb(t,e,n){t==="focusin"?(sh(),er=e,nr=n,er.attachEvent("onpropertychange",uh)):t==="focusout"&&sh()}function Ob(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tl(nr)}function Ab(t,e){if(t==="click")return Tl(e)}function Eb(t,e){if(t==="input"||t==="change")return Tl(e)}function Cb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Re=typeof Object.is=="function"?Object.is:Cb;function ar(t,e){if(Re(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var l=n[i];if(!$e.call(e,l)||!Re(t[l],e[l]))return!1}return!0}function ch(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fh(t,e){var n=ch(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=ch(n)}}function hh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?hh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ml(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ml(t.document)}return e}function Hs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var _b=wn&&"documentMode"in document&&11>=document.documentMode,Wa=null,Ps=null,ir=null,Us=!1;function ph(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Us||Wa==null||Wa!==ml(i)||(i=Wa,"selectionStart"in i&&Hs(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ir&&ar(ir,i)||(ir=i,i=so(Ps,"onSelect"),0<i.length&&(e=new Sl("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Wa)))}function ya(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fa={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionrun:ya("Transition","TransitionRun"),transitionstart:ya("Transition","TransitionStart"),transitioncancel:ya("Transition","TransitionCancel"),transitionend:ya("Transition","TransitionEnd")},qs={},gh={};wn&&(gh=document.createElement("div").style,"AnimationEvent"in window||(delete Fa.animationend.animation,delete Fa.animationiteration.animation,delete Fa.animationstart.animation),"TransitionEvent"in window||delete Fa.transitionend.transition);function va(t){if(qs[t])return qs[t];if(!Fa[t])return t;var e=Fa[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in gh)return qs[t]=e[n];return t}var mh=va("animationend"),bh=va("animationiteration"),yh=va("animationstart"),kb=va("transitionrun"),Rb=va("transitionstart"),Db=va("transitioncancel"),vh=va("transitionend"),xh=new Map,js="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");js.push("scrollEnd");function en(t,e){xh.set(t,e),ma(e,[t])}var Sh=new WeakMap;function Xe(t,e){if(typeof t=="object"&&t!==null){var n=Sh.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Pf(e)},Sh.set(t,e),e)}return{value:t,source:e,stack:Pf(e)}}var Qe=[],Ia=0,Ls=0;function Ol(){for(var t=Ia,e=Ls=Ia=0;e<t;){var n=Qe[e];Qe[e++]=null;var i=Qe[e];Qe[e++]=null;var l=Qe[e];Qe[e++]=null;var u=Qe[e];if(Qe[e++]=null,i!==null&&l!==null){var d=i.pending;d===null?l.next=l:(l.next=d.next,d.next=l),i.pending=l}u!==0&&wh(n,l,u)}}function Al(t,e,n,i){Qe[Ia++]=t,Qe[Ia++]=e,Qe[Ia++]=n,Qe[Ia++]=i,Ls|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function $s(t,e,n,i){return Al(t,e,n,i),El(t)}function ti(t,e){return Al(t,null,null,e),El(t)}function wh(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var l=!1,u=t.return;u!==null;)u.childLanes|=n,i=u.alternate,i!==null&&(i.childLanes|=n),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(l=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,l&&e!==null&&(l=31-ke(n),t=u.hiddenUpdates,i=t[l],i===null?t[l]=[e]:i.push(e),e.lane=n|536870912),u):null}function El(t){if(50<kr)throw kr=0,Vu=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ei={};function Mb(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(t,e,n,i){return new Mb(t,e,n,i)}function Gs(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Tn(t,e){var n=t.alternate;return n===null?(n=De(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Th(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Cl(t,e,n,i,l,u){var d=0;if(i=t,typeof t=="function")Gs(t)&&(d=1);else if(typeof t=="string")d=B1(t,n,it.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case U:return t=De(31,n,e,l),t.elementType=U,t.lanes=u,t;case N:return xa(n.children,l,u,e);case w:d=8,l|=24;break;case Y:return t=De(12,n,e,l|2),t.elementType=Y,t.lanes=u,t;case p:return t=De(13,n,e,l),t.elementType=p,t.lanes=u,t;case v:return t=De(19,n,e,l),t.elementType=v,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case V:case R:d=10;break t;case K:d=9;break t;case f:d=11;break t;case O:d=14;break t;case z:d=16,i=null;break t}d=29,n=Error(s(130,t===null?"null":typeof t,"")),i=null}return e=De(d,n,e,l),e.elementType=t,e.type=i,e.lanes=u,e}function xa(t,e,n,i){return t=De(7,t,i,e),t.lanes=n,t}function Ys(t,e,n){return t=De(6,t,null,e),t.lanes=n,t}function Xs(t,e,n){return e=De(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var ni=[],ai=0,_l=null,kl=0,Ze=[],Ve=0,Sa=null,On=1,An="";function wa(t,e){ni[ai++]=kl,ni[ai++]=_l,_l=t,kl=e}function Oh(t,e,n){Ze[Ve++]=On,Ze[Ve++]=An,Ze[Ve++]=Sa,Sa=t;var i=On;t=An;var l=32-ke(i)-1;i&=~(1<<l),n+=1;var u=32-ke(e)+l;if(30<u){var d=l-l%5;u=(i&(1<<d)-1).toString(32),i>>=d,l-=d,On=1<<32-ke(e)+l|n<<l|i,An=u+t}else On=1<<u|n<<l|i,An=t}function Qs(t){t.return!==null&&(wa(t,1),Oh(t,1,0))}function Zs(t){for(;t===_l;)_l=ni[--ai],ni[ai]=null,kl=ni[--ai],ni[ai]=null;for(;t===Sa;)Sa=Ze[--Ve],Ze[Ve]=null,An=Ze[--Ve],Ze[Ve]=null,On=Ze[--Ve],Ze[Ve]=null}var xe=null,Yt=null,Tt=!1,Ta=null,un=!1,Vs=Error(s(519));function Oa(t){var e=Error(s(418,""));throw or(Xe(e,t)),Vs}function Ah(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[me]=t,e[Se]=i,n){case"dialog":xt("cancel",e),xt("close",e);break;case"iframe":case"object":case"embed":xt("load",e);break;case"video":case"audio":for(n=0;n<Dr.length;n++)xt(Dr[n],e);break;case"source":xt("error",e);break;case"img":case"image":case"link":xt("error",e),xt("load",e);break;case"details":xt("toggle",e);break;case"input":xt("invalid",e),jf(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),gl(e);break;case"select":xt("invalid",e);break;case"textarea":xt("invalid",e),$f(e,i.value,i.defaultValue,i.children),gl(e)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||$0(e.textContent,n)?(i.popover!=null&&(xt("beforetoggle",e),xt("toggle",e)),i.onScroll!=null&&xt("scroll",e),i.onScrollEnd!=null&&xt("scrollend",e),i.onClick!=null&&(e.onclick=uo),e=!0):e=!1,e||Oa(t)}function Eh(t){for(xe=t.return;xe;)switch(xe.tag){case 5:case 13:un=!1;return;case 27:case 3:un=!0;return;default:xe=xe.return}}function rr(t){if(t!==xe)return!1;if(!Tt)return Eh(t),Tt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||cc(t.type,t.memoizedProps)),n=!n),n&&Yt&&Oa(t),Eh(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){Yt=an(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}Yt=null}}else e===27?(e=Yt,ra(t.type)?(t=pc,pc=null,Yt=t):Yt=e):Yt=xe?an(t.stateNode.nextSibling):null;return!0}function lr(){Yt=xe=null,Tt=!1}function Ch(){var t=Ta;return t!==null&&(Ae===null?Ae=t:Ae.push.apply(Ae,t),Ta=null),t}function or(t){Ta===null?Ta=[t]:Ta.push(t)}var Ks=Z(null),Aa=null,En=null;function Yn(t,e,n){F(Ks,e._currentValue),e._currentValue=n}function Cn(t){t._currentValue=Ks.current,W(Ks)}function Js(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ws(t,e,n,i){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){var d=l.child;u=u.firstContext;t:for(;u!==null;){var g=u;u=l;for(var T=0;T<e.length;T++)if(g.context===e[T]){u.lanes|=n,g=u.alternate,g!==null&&(g.lanes|=n),Js(u.return,n,t),i||(d=null);break t}u=g.next}}else if(l.tag===18){if(d=l.return,d===null)throw Error(s(341));d.lanes|=n,u=d.alternate,u!==null&&(u.lanes|=n),Js(d,n,t),d=null}else d=l.child;if(d!==null)d.return=l;else for(d=l;d!==null;){if(d===t){d=null;break}if(l=d.sibling,l!==null){l.return=d.return,d=l;break}d=d.return}l=d}}function sr(t,e,n,i){t=null;for(var l=e,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var d=l.alternate;if(d===null)throw Error(s(387));if(d=d.memoizedProps,d!==null){var g=l.type;Re(l.pendingProps.value,d.value)||(t!==null?t.push(g):t=[g])}}else if(l===re.current){if(d=l.alternate,d===null)throw Error(s(387));d.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Pr):t=[Pr])}l=l.return}t!==null&&Ws(e,t,n,i),e.flags|=262144}function Rl(t){for(t=t.firstContext;t!==null;){if(!Re(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ea(t){Aa=t,En=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function be(t){return _h(Aa,t)}function Dl(t,e){return Aa===null&&Ea(t),_h(t,e)}function _h(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},En===null){if(t===null)throw Error(s(308));En=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else En=En.next=e;return n}var zb=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Bb=a.unstable_scheduleCallback,Nb=a.unstable_NormalPriority,ne={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fs(){return{controller:new zb,data:new Map,refCount:0}}function ur(t){t.refCount--,t.refCount===0&&Bb(Nb,function(){t.controller.abort()})}var cr=null,Is=0,ii=0,ri=null;function Hb(t,e){if(cr===null){var n=cr=[];Is=0,ii=ec(),ri={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Is++,e.then(kh,kh),e}function kh(){if(--Is===0&&cr!==null){ri!==null&&(ri.status="fulfilled");var t=cr;cr=null,ii=0,ri=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Pb(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var l=0;l<n.length;l++)(0,n[l])(e)},function(l){for(i.status="rejected",i.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),i}var Rh=j.S;j.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Hb(t,e),Rh!==null&&Rh(t,e)};var Ca=Z(null);function tu(){var t=Ca.current;return t!==null?t:Ut.pooledCache}function Ml(t,e){e===null?F(Ca,Ca.current):F(Ca,e.pool)}function Dh(){var t=tu();return t===null?null:{parent:ne._currentValue,pool:t}}var fr=Error(s(460)),Mh=Error(s(474)),zl=Error(s(542)),eu={then:function(){}};function zh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Bl(){}function Bh(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Bl,Bl),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Hh(t),t;default:if(typeof e.status=="string")e.then(Bl,Bl);else{if(t=Ut,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=i}},function(i){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Hh(t),t}throw hr=e,fr}}var hr=null;function Nh(){if(hr===null)throw Error(s(459));var t=hr;return hr=null,t}function Hh(t){if(t===fr||t===zl)throw Error(s(483))}var Xn=!1;function nu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function au(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Qn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Zn(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(_t&2)!==0){var l=i.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),i.pending=e,e=El(t),wh(t,null,n),e}return Al(t,i,e,n),El(t)}function dr(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,kf(t,n)}}function iu(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var l=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?l=u=d:u=u.next=d,n=n.next}while(n!==null);u===null?l=u=e:u=u.next=e}else l=u=e;n={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var ru=!1;function pr(){if(ru){var t=ri;if(t!==null)throw t}}function gr(t,e,n,i){ru=!1;var l=t.updateQueue;Xn=!1;var u=l.firstBaseUpdate,d=l.lastBaseUpdate,g=l.shared.pending;if(g!==null){l.shared.pending=null;var T=g,M=T.next;T.next=null,d===null?u=M:d.next=M,d=T;var L=t.alternate;L!==null&&(L=L.updateQueue,g=L.lastBaseUpdate,g!==d&&(g===null?L.firstBaseUpdate=M:g.next=M,L.lastBaseUpdate=T))}if(u!==null){var Q=l.baseState;d=0,L=M=T=null,g=u;do{var H=g.lane&-536870913,P=H!==g.lane;if(P?(St&H)===H:(i&H)===H){H!==0&&H===ii&&(ru=!0),L!==null&&(L=L.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});t:{var ft=t,ot=g;H=e;var Mt=n;switch(ot.tag){case 1:if(ft=ot.payload,typeof ft=="function"){Q=ft.call(Mt,Q,H);break t}Q=ft;break t;case 3:ft.flags=ft.flags&-65537|128;case 0:if(ft=ot.payload,H=typeof ft=="function"?ft.call(Mt,Q,H):ft,H==null)break t;Q=E({},Q,H);break t;case 2:Xn=!0}}H=g.callback,H!==null&&(t.flags|=64,P&&(t.flags|=8192),P=l.callbacks,P===null?l.callbacks=[H]:P.push(H))}else P={lane:H,tag:g.tag,payload:g.payload,callback:g.callback,next:null},L===null?(M=L=P,T=Q):L=L.next=P,d|=H;if(g=g.next,g===null){if(g=l.shared.pending,g===null)break;P=g,g=P.next,P.next=null,l.lastBaseUpdate=P,l.shared.pending=null}}while(!0);L===null&&(T=Q),l.baseState=T,l.firstBaseUpdate=M,l.lastBaseUpdate=L,u===null&&(l.shared.lanes=0),ea|=d,t.lanes=d,t.memoizedState=Q}}function Ph(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Uh(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Ph(n[t],e)}var li=Z(null),Nl=Z(0);function qh(t,e){t=Bn,F(Nl,t),F(li,e),Bn=t|e.baseLanes}function lu(){F(Nl,Bn),F(li,li.current)}function ou(){Bn=Nl.current,W(li),W(Nl)}var Vn=0,pt=null,Rt=null,Ft=null,Hl=!1,oi=!1,_a=!1,Pl=0,mr=0,si=null,Ub=0;function Vt(){throw Error(s(321))}function su(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Re(t[n],e[n]))return!1;return!0}function uu(t,e,n,i,l,u){return Vn=u,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,j.H=t===null||t.memoizedState===null?wd:Td,_a=!1,u=n(i,l),_a=!1,oi&&(u=Lh(e,n,i,l)),jh(t),u}function jh(t){j.H=Gl;var e=Rt!==null&&Rt.next!==null;if(Vn=0,Ft=Rt=pt=null,Hl=!1,mr=0,si=null,e)throw Error(s(300));t===null||oe||(t=t.dependencies,t!==null&&Rl(t)&&(oe=!0))}function Lh(t,e,n,i){pt=t;var l=0;do{if(oi&&(si=null),mr=0,oi=!1,25<=l)throw Error(s(301));if(l+=1,Ft=Rt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}j.H=Xb,u=e(n,i)}while(oi);return u}function qb(){var t=j.H,e=t.useState()[0];return e=typeof e.then=="function"?br(e):e,t=t.useState()[0],(Rt!==null?Rt.memoizedState:null)!==t&&(pt.flags|=1024),e}function cu(){var t=Pl!==0;return Pl=0,t}function fu(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function hu(t){if(Hl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Hl=!1}Vn=0,Ft=Rt=pt=null,oi=!1,mr=Pl=0,si=null}function Te(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?pt.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function It(){if(Rt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=Ft===null?pt.memoizedState:Ft.next;if(e!==null)Ft=e,Rt=t;else{if(t===null)throw pt.alternate===null?Error(s(467)):Error(s(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Ft===null?pt.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function du(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function br(t){var e=mr;return mr+=1,si===null&&(si=[]),t=Bh(si,t,e),e=pt,(Ft===null?e.memoizedState:Ft.next)===null&&(e=e.alternate,j.H=e===null||e.memoizedState===null?wd:Td),t}function Ul(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return br(t);if(t.$$typeof===R)return be(t)}throw Error(s(438,String(t)))}function pu(t){var e=null,n=pt.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=pt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=du(),pt.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=b;return e.index++,n}function _n(t,e){return typeof e=="function"?e(t):e}function ql(t){var e=It();return gu(e,Rt,t)}function gu(t,e,n){var i=t.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=n;var l=t.baseQueue,u=i.pending;if(u!==null){if(l!==null){var d=l.next;l.next=u.next,u.next=d}e.baseQueue=l=u,i.pending=null}if(u=t.baseState,l===null)t.memoizedState=u;else{e=l.next;var g=d=null,T=null,M=e,L=!1;do{var Q=M.lane&-536870913;if(Q!==M.lane?(St&Q)===Q:(Vn&Q)===Q){var H=M.revertLane;if(H===0)T!==null&&(T=T.next={lane:0,revertLane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),Q===ii&&(L=!0);else if((Vn&H)===H){M=M.next,H===ii&&(L=!0);continue}else Q={lane:0,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},T===null?(g=T=Q,d=u):T=T.next=Q,pt.lanes|=H,ea|=H;Q=M.action,_a&&n(u,Q),u=M.hasEagerState?M.eagerState:n(u,Q)}else H={lane:Q,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},T===null?(g=T=H,d=u):T=T.next=H,pt.lanes|=Q,ea|=Q;M=M.next}while(M!==null&&M!==e);if(T===null?d=u:T.next=g,!Re(u,t.memoizedState)&&(oe=!0,L&&(n=ri,n!==null)))throw n;t.memoizedState=u,t.baseState=d,t.baseQueue=T,i.lastRenderedState=u}return l===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function mu(t){var e=It(),n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=t;var i=n.dispatch,l=n.pending,u=e.memoizedState;if(l!==null){n.pending=null;var d=l=l.next;do u=t(u,d.action),d=d.next;while(d!==l);Re(u,e.memoizedState)||(oe=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,i]}function $h(t,e,n){var i=pt,l=It(),u=Tt;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=e();var d=!Re((Rt||l).memoizedState,n);d&&(l.memoizedState=n,oe=!0),l=l.queue;var g=Xh.bind(null,i,l,t);if(yr(2048,8,g,[t]),l.getSnapshot!==e||d||Ft!==null&&Ft.memoizedState.tag&1){if(i.flags|=2048,ui(9,jl(),Yh.bind(null,i,l,n,e),null),Ut===null)throw Error(s(349));u||(Vn&124)!==0||Gh(i,e,n)}return n}function Gh(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pt.updateQueue,e===null?(e=du(),pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Yh(t,e,n,i){e.value=n,e.getSnapshot=i,Qh(e)&&Zh(t)}function Xh(t,e,n){return n(function(){Qh(e)&&Zh(t)})}function Qh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Re(t,n)}catch{return!0}}function Zh(t){var e=ti(t,2);e!==null&&He(e,t,2)}function bu(t){var e=Te();if(typeof t=="function"){var n=t;if(t=n(),_a){Ln(!0);try{n()}finally{Ln(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:t},e}function Vh(t,e,n,i){return t.baseState=n,gu(t,Rt,typeof i=="function"?i:_n)}function jb(t,e,n,i,l){if($l(t))throw Error(s(485));if(t=e.action,t!==null){var u={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){u.listeners.push(d)}};j.T!==null?n(!0):u.isTransition=!1,i(u),n=e.pending,n===null?(u.next=e.pending=u,Kh(e,u)):(u.next=n.next,e.pending=n.next=u)}}function Kh(t,e){var n=e.action,i=e.payload,l=t.state;if(e.isTransition){var u=j.T,d={};j.T=d;try{var g=n(l,i),T=j.S;T!==null&&T(d,g),Jh(t,e,g)}catch(M){yu(t,e,M)}finally{j.T=u}}else try{u=n(l,i),Jh(t,e,u)}catch(M){yu(t,e,M)}}function Jh(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Wh(t,e,i)},function(i){return yu(t,e,i)}):Wh(t,e,n)}function Wh(t,e,n){e.status="fulfilled",e.value=n,Fh(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Kh(t,n)))}function yu(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,Fh(e),e=e.next;while(e!==i)}t.action=null}function Fh(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Ih(t,e){return e}function td(t,e){if(Tt){var n=Ut.formState;if(n!==null){t:{var i=pt;if(Tt){if(Yt){e:{for(var l=Yt,u=un;l.nodeType!==8;){if(!u){l=null;break e}if(l=an(l.nextSibling),l===null){l=null;break e}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){Yt=an(l.nextSibling),i=l.data==="F!";break t}}Oa(i)}i=!1}i&&(e=n[0])}}return n=Te(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ih,lastRenderedState:e},n.queue=i,n=vd.bind(null,pt,i),i.dispatch=n,i=bu(!1),u=Tu.bind(null,pt,!1,i.queue),i=Te(),l={state:e,dispatch:null,action:t,pending:null},i.queue=l,n=jb.bind(null,pt,l,u,n),l.dispatch=n,i.memoizedState=t,[e,n,!1]}function ed(t){var e=It();return nd(e,Rt,t)}function nd(t,e,n){if(e=gu(t,e,Ih)[0],t=ql(_n)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=br(e)}catch(d){throw d===fr?zl:d}else i=e;e=It();var l=e.queue,u=l.dispatch;return n!==e.memoizedState&&(pt.flags|=2048,ui(9,jl(),Lb.bind(null,l,n),null)),[i,u,t]}function Lb(t,e){t.action=e}function ad(t){var e=It(),n=Rt;if(n!==null)return nd(e,n,t);It(),e=e.memoizedState,n=It();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function ui(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=pt.updateQueue,e===null&&(e=du(),pt.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function jl(){return{destroy:void 0,resource:void 0}}function id(){return It().memoizedState}function Ll(t,e,n,i){var l=Te();i=i===void 0?null:i,pt.flags|=t,l.memoizedState=ui(1|e,jl(),n,i)}function yr(t,e,n,i){var l=It();i=i===void 0?null:i;var u=l.memoizedState.inst;Rt!==null&&i!==null&&su(i,Rt.memoizedState.deps)?l.memoizedState=ui(e,u,n,i):(pt.flags|=t,l.memoizedState=ui(1|e,u,n,i))}function rd(t,e){Ll(8390656,8,t,e)}function ld(t,e){yr(2048,8,t,e)}function od(t,e){return yr(4,2,t,e)}function sd(t,e){return yr(4,4,t,e)}function ud(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cd(t,e,n){n=n!=null?n.concat([t]):null,yr(4,4,ud.bind(null,e,t),n)}function vu(){}function fd(t,e){var n=It();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&su(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function hd(t,e){var n=It();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&su(e,i[1]))return i[0];if(i=t(),_a){Ln(!0);try{t()}finally{Ln(!1)}}return n.memoizedState=[i,e],i}function xu(t,e,n){return n===void 0||(Vn&1073741824)!==0?t.memoizedState=e:(t.memoizedState=n,t=g0(),pt.lanes|=t,ea|=t,n)}function dd(t,e,n,i){return Re(n,e)?n:li.current!==null?(t=xu(t,n,i),Re(t,e)||(oe=!0),t):(Vn&42)===0?(oe=!0,t.memoizedState=n):(t=g0(),pt.lanes|=t,ea|=t,e)}function pd(t,e,n,i,l){var u=J.p;J.p=u!==0&&8>u?u:8;var d=j.T,g={};j.T=g,Tu(t,!1,e,n);try{var T=l(),M=j.S;if(M!==null&&M(g,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var L=Pb(T,i);vr(t,e,L,Ne(t))}else vr(t,e,i,Ne(t))}catch(Q){vr(t,e,{then:function(){},status:"rejected",reason:Q},Ne())}finally{J.p=u,j.T=d}}function $b(){}function Su(t,e,n,i){if(t.tag!==5)throw Error(s(476));var l=gd(t).queue;pd(t,l,e,lt,n===null?$b:function(){return md(t),n(i)})}function gd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:lt,baseState:lt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:lt},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function md(t){var e=gd(t).next.queue;vr(t,e,{},Ne())}function wu(){return be(Pr)}function bd(){return It().memoizedState}function yd(){return It().memoizedState}function Gb(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Ne();t=Qn(n);var i=Zn(e,t,n);i!==null&&(He(i,e,n),dr(i,e,n)),e={cache:Fs()},t.payload=e;return}e=e.return}}function Yb(t,e,n){var i=Ne();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},$l(t)?xd(e,n):(n=$s(t,e,n,i),n!==null&&(He(n,t,i),Sd(n,e,i)))}function vd(t,e,n){var i=Ne();vr(t,e,n,i)}function vr(t,e,n,i){var l={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if($l(t))xd(e,l);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var d=e.lastRenderedState,g=u(d,n);if(l.hasEagerState=!0,l.eagerState=g,Re(g,d))return Al(t,e,l,0),Ut===null&&Ol(),!1}catch{}finally{}if(n=$s(t,e,l,i),n!==null)return He(n,t,i),Sd(n,e,i),!0}return!1}function Tu(t,e,n,i){if(i={lane:2,revertLane:ec(),action:i,hasEagerState:!1,eagerState:null,next:null},$l(t)){if(e)throw Error(s(479))}else e=$s(t,n,i,2),e!==null&&He(e,t,2)}function $l(t){var e=t.alternate;return t===pt||e!==null&&e===pt}function xd(t,e){oi=Hl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Sd(t,e,n){if((n&4194048)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,kf(t,n)}}var Gl={readContext:be,use:Ul,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useLayoutEffect:Vt,useInsertionEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useSyncExternalStore:Vt,useId:Vt,useHostTransitionStatus:Vt,useFormState:Vt,useActionState:Vt,useOptimistic:Vt,useMemoCache:Vt,useCacheRefresh:Vt},wd={readContext:be,use:Ul,useCallback:function(t,e){return Te().memoizedState=[t,e===void 0?null:e],t},useContext:be,useEffect:rd,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Ll(4194308,4,ud.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ll(4194308,4,t,e)},useInsertionEffect:function(t,e){Ll(4,2,t,e)},useMemo:function(t,e){var n=Te();e=e===void 0?null:e;var i=t();if(_a){Ln(!0);try{t()}finally{Ln(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=Te();if(n!==void 0){var l=n(e);if(_a){Ln(!0);try{n(e)}finally{Ln(!1)}}}else l=e;return i.memoizedState=i.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},i.queue=t,t=t.dispatch=Yb.bind(null,pt,t),[i.memoizedState,t]},useRef:function(t){var e=Te();return t={current:t},e.memoizedState=t},useState:function(t){t=bu(t);var e=t.queue,n=vd.bind(null,pt,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:vu,useDeferredValue:function(t,e){var n=Te();return xu(n,t,e)},useTransition:function(){var t=bu(!1);return t=pd.bind(null,pt,t.queue,!0,!1),Te().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=pt,l=Te();if(Tt){if(n===void 0)throw Error(s(407));n=n()}else{if(n=e(),Ut===null)throw Error(s(349));(St&124)!==0||Gh(i,e,n)}l.memoizedState=n;var u={value:n,getSnapshot:e};return l.queue=u,rd(Xh.bind(null,i,u,t),[t]),i.flags|=2048,ui(9,jl(),Yh.bind(null,i,u,n,e),null),n},useId:function(){var t=Te(),e=Ut.identifierPrefix;if(Tt){var n=An,i=On;n=(i&~(1<<32-ke(i)-1)).toString(32)+n,e="«"+e+"R"+n,n=Pl++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=Ub++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:wu,useFormState:td,useActionState:td,useOptimistic:function(t){var e=Te();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Tu.bind(null,pt,!0,n),n.dispatch=e,[t,e]},useMemoCache:pu,useCacheRefresh:function(){return Te().memoizedState=Gb.bind(null,pt)}},Td={readContext:be,use:Ul,useCallback:fd,useContext:be,useEffect:ld,useImperativeHandle:cd,useInsertionEffect:od,useLayoutEffect:sd,useMemo:hd,useReducer:ql,useRef:id,useState:function(){return ql(_n)},useDebugValue:vu,useDeferredValue:function(t,e){var n=It();return dd(n,Rt.memoizedState,t,e)},useTransition:function(){var t=ql(_n)[0],e=It().memoizedState;return[typeof t=="boolean"?t:br(t),e]},useSyncExternalStore:$h,useId:bd,useHostTransitionStatus:wu,useFormState:ed,useActionState:ed,useOptimistic:function(t,e){var n=It();return Vh(n,Rt,t,e)},useMemoCache:pu,useCacheRefresh:yd},Xb={readContext:be,use:Ul,useCallback:fd,useContext:be,useEffect:ld,useImperativeHandle:cd,useInsertionEffect:od,useLayoutEffect:sd,useMemo:hd,useReducer:mu,useRef:id,useState:function(){return mu(_n)},useDebugValue:vu,useDeferredValue:function(t,e){var n=It();return Rt===null?xu(n,t,e):dd(n,Rt.memoizedState,t,e)},useTransition:function(){var t=mu(_n)[0],e=It().memoizedState;return[typeof t=="boolean"?t:br(t),e]},useSyncExternalStore:$h,useId:bd,useHostTransitionStatus:wu,useFormState:ad,useActionState:ad,useOptimistic:function(t,e){var n=It();return Rt!==null?Vh(n,Rt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:pu,useCacheRefresh:yd},ci=null,xr=0;function Yl(t){var e=xr;return xr+=1,ci===null&&(ci=[]),Bh(ci,t,e)}function Sr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Xl(t,e){throw e.$$typeof===k?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Od(t){var e=t._init;return e(t._payload)}function Ad(t){function e(_,C){if(t){var D=_.deletions;D===null?(_.deletions=[C],_.flags|=16):D.push(C)}}function n(_,C){if(!t)return null;for(;C!==null;)e(_,C),C=C.sibling;return null}function i(_){for(var C=new Map;_!==null;)_.key!==null?C.set(_.key,_):C.set(_.index,_),_=_.sibling;return C}function l(_,C){return _=Tn(_,C),_.index=0,_.sibling=null,_}function u(_,C,D){return _.index=D,t?(D=_.alternate,D!==null?(D=D.index,D<C?(_.flags|=67108866,C):D):(_.flags|=67108866,C)):(_.flags|=1048576,C)}function d(_){return t&&_.alternate===null&&(_.flags|=67108866),_}function g(_,C,D,$){return C===null||C.tag!==6?(C=Ys(D,_.mode,$),C.return=_,C):(C=l(C,D),C.return=_,C)}function T(_,C,D,$){var et=D.type;return et===N?L(_,C,D.props.children,$,D.key):C!==null&&(C.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===z&&Od(et)===C.type)?(C=l(C,D.props),Sr(C,D),C.return=_,C):(C=Cl(D.type,D.key,D.props,null,_.mode,$),Sr(C,D),C.return=_,C)}function M(_,C,D,$){return C===null||C.tag!==4||C.stateNode.containerInfo!==D.containerInfo||C.stateNode.implementation!==D.implementation?(C=Xs(D,_.mode,$),C.return=_,C):(C=l(C,D.children||[]),C.return=_,C)}function L(_,C,D,$,et){return C===null||C.tag!==7?(C=xa(D,_.mode,$,et),C.return=_,C):(C=l(C,D),C.return=_,C)}function Q(_,C,D){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=Ys(""+C,_.mode,D),C.return=_,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case B:return D=Cl(C.type,C.key,C.props,null,_.mode,D),Sr(D,C),D.return=_,D;case G:return C=Xs(C,_.mode,D),C.return=_,C;case z:var $=C._init;return C=$(C._payload),Q(_,C,D)}if(mt(C)||I(C))return C=xa(C,_.mode,D,null),C.return=_,C;if(typeof C.then=="function")return Q(_,Yl(C),D);if(C.$$typeof===R)return Q(_,Dl(_,C),D);Xl(_,C)}return null}function H(_,C,D,$){var et=C!==null?C.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return et!==null?null:g(_,C,""+D,$);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case B:return D.key===et?T(_,C,D,$):null;case G:return D.key===et?M(_,C,D,$):null;case z:return et=D._init,D=et(D._payload),H(_,C,D,$)}if(mt(D)||I(D))return et!==null?null:L(_,C,D,$,null);if(typeof D.then=="function")return H(_,C,Yl(D),$);if(D.$$typeof===R)return H(_,C,Dl(_,D),$);Xl(_,D)}return null}function P(_,C,D,$,et){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return _=_.get(D)||null,g(C,_,""+$,et);if(typeof $=="object"&&$!==null){switch($.$$typeof){case B:return _=_.get($.key===null?D:$.key)||null,T(C,_,$,et);case G:return _=_.get($.key===null?D:$.key)||null,M(C,_,$,et);case z:var gt=$._init;return $=gt($._payload),P(_,C,D,$,et)}if(mt($)||I($))return _=_.get(D)||null,L(C,_,$,et,null);if(typeof $.then=="function")return P(_,C,D,Yl($),et);if($.$$typeof===R)return P(_,C,D,Dl(C,$),et);Xl(C,$)}return null}function ft(_,C,D,$){for(var et=null,gt=null,nt=C,ut=C=0,ue=null;nt!==null&&ut<D.length;ut++){nt.index>ut?(ue=nt,nt=null):ue=nt.sibling;var wt=H(_,nt,D[ut],$);if(wt===null){nt===null&&(nt=ue);break}t&&nt&&wt.alternate===null&&e(_,nt),C=u(wt,C,ut),gt===null?et=wt:gt.sibling=wt,gt=wt,nt=ue}if(ut===D.length)return n(_,nt),Tt&&wa(_,ut),et;if(nt===null){for(;ut<D.length;ut++)nt=Q(_,D[ut],$),nt!==null&&(C=u(nt,C,ut),gt===null?et=nt:gt.sibling=nt,gt=nt);return Tt&&wa(_,ut),et}for(nt=i(nt);ut<D.length;ut++)ue=P(nt,_,ut,D[ut],$),ue!==null&&(t&&ue.alternate!==null&&nt.delete(ue.key===null?ut:ue.key),C=u(ue,C,ut),gt===null?et=ue:gt.sibling=ue,gt=ue);return t&&nt.forEach(function(ca){return e(_,ca)}),Tt&&wa(_,ut),et}function ot(_,C,D,$){if(D==null)throw Error(s(151));for(var et=null,gt=null,nt=C,ut=C=0,ue=null,wt=D.next();nt!==null&&!wt.done;ut++,wt=D.next()){nt.index>ut?(ue=nt,nt=null):ue=nt.sibling;var ca=H(_,nt,wt.value,$);if(ca===null){nt===null&&(nt=ue);break}t&&nt&&ca.alternate===null&&e(_,nt),C=u(ca,C,ut),gt===null?et=ca:gt.sibling=ca,gt=ca,nt=ue}if(wt.done)return n(_,nt),Tt&&wa(_,ut),et;if(nt===null){for(;!wt.done;ut++,wt=D.next())wt=Q(_,wt.value,$),wt!==null&&(C=u(wt,C,ut),gt===null?et=wt:gt.sibling=wt,gt=wt);return Tt&&wa(_,ut),et}for(nt=i(nt);!wt.done;ut++,wt=D.next())wt=P(nt,_,ut,wt.value,$),wt!==null&&(t&&wt.alternate!==null&&nt.delete(wt.key===null?ut:wt.key),C=u(wt,C,ut),gt===null?et=wt:gt.sibling=wt,gt=wt);return t&&nt.forEach(function(Q1){return e(_,Q1)}),Tt&&wa(_,ut),et}function Mt(_,C,D,$){if(typeof D=="object"&&D!==null&&D.type===N&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case B:t:{for(var et=D.key;C!==null;){if(C.key===et){if(et=D.type,et===N){if(C.tag===7){n(_,C.sibling),$=l(C,D.props.children),$.return=_,_=$;break t}}else if(C.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===z&&Od(et)===C.type){n(_,C.sibling),$=l(C,D.props),Sr($,D),$.return=_,_=$;break t}n(_,C);break}else e(_,C);C=C.sibling}D.type===N?($=xa(D.props.children,_.mode,$,D.key),$.return=_,_=$):($=Cl(D.type,D.key,D.props,null,_.mode,$),Sr($,D),$.return=_,_=$)}return d(_);case G:t:{for(et=D.key;C!==null;){if(C.key===et)if(C.tag===4&&C.stateNode.containerInfo===D.containerInfo&&C.stateNode.implementation===D.implementation){n(_,C.sibling),$=l(C,D.children||[]),$.return=_,_=$;break t}else{n(_,C);break}else e(_,C);C=C.sibling}$=Xs(D,_.mode,$),$.return=_,_=$}return d(_);case z:return et=D._init,D=et(D._payload),Mt(_,C,D,$)}if(mt(D))return ft(_,C,D,$);if(I(D)){if(et=I(D),typeof et!="function")throw Error(s(150));return D=et.call(D),ot(_,C,D,$)}if(typeof D.then=="function")return Mt(_,C,Yl(D),$);if(D.$$typeof===R)return Mt(_,C,Dl(_,D),$);Xl(_,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,C!==null&&C.tag===6?(n(_,C.sibling),$=l(C,D),$.return=_,_=$):(n(_,C),$=Ys(D,_.mode,$),$.return=_,_=$),d(_)):n(_,C)}return function(_,C,D,$){try{xr=0;var et=Mt(_,C,D,$);return ci=null,et}catch(nt){if(nt===fr||nt===zl)throw nt;var gt=De(29,nt,null,_.mode);return gt.lanes=$,gt.return=_,gt}finally{}}}var fi=Ad(!0),Ed=Ad(!1),Ke=Z(null),cn=null;function Kn(t){var e=t.alternate;F(ae,ae.current&1),F(Ke,t),cn===null&&(e===null||li.current!==null||e.memoizedState!==null)&&(cn=t)}function Cd(t){if(t.tag===22){if(F(ae,ae.current),F(Ke,t),cn===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(cn=t)}}else Jn()}function Jn(){F(ae,ae.current),F(Ke,Ke.current)}function kn(t){W(Ke),cn===t&&(cn=null),W(ae)}var ae=Z(0);function Ql(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||dc(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Ou(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:E({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Au={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Ne(),l=Qn(i);l.payload=e,n!=null&&(l.callback=n),e=Zn(t,l,i),e!==null&&(He(e,t,i),dr(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Ne(),l=Qn(i);l.tag=1,l.payload=e,n!=null&&(l.callback=n),e=Zn(t,l,i),e!==null&&(He(e,t,i),dr(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ne(),i=Qn(n);i.tag=2,e!=null&&(i.callback=e),e=Zn(t,i,n),e!==null&&(He(e,t,n),dr(e,t,n))}};function _d(t,e,n,i,l,u,d){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,u,d):e.prototype&&e.prototype.isPureReactComponent?!ar(n,i)||!ar(l,u):!0}function kd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Au.enqueueReplaceState(e,e.state,null)}function ka(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=E({},n));for(var l in t)n[l]===void 0&&(n[l]=t[l])}return n}var Zl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Rd(t){Zl(t)}function Dd(t){console.error(t)}function Md(t){Zl(t)}function Vl(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function zd(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Eu(t,e,n){return n=Qn(n),n.tag=3,n.payload={element:null},n.callback=function(){Vl(t,e)},n}function Bd(t){return t=Qn(t),t.tag=3,t}function Nd(t,e,n,i){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;t.payload=function(){return l(u)},t.callback=function(){zd(e,n,i)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(t.callback=function(){zd(e,n,i),typeof l!="function"&&(na===null?na=new Set([this]):na.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})})}function Qb(t,e,n,i,l){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&sr(e,n,l,!0),n=Ke.current,n!==null){switch(n.tag){case 13:return cn===null?Ju():n.alternate===null&&Xt===0&&(Xt=3),n.flags&=-257,n.flags|=65536,n.lanes=l,i===eu?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),Fu(t,i,l)),!1;case 22:return n.flags|=65536,i===eu?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),Fu(t,i,l)),!1}throw Error(s(435,n.tag))}return Fu(t,i,l),Ju(),!1}if(Tt)return e=Ke.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,i!==Vs&&(t=Error(s(422),{cause:i}),or(Xe(t,n)))):(i!==Vs&&(e=Error(s(423),{cause:i}),or(Xe(e,n))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,i=Xe(i,n),l=Eu(t.stateNode,i,l),iu(t,l),Xt!==4&&(Xt=2)),!1;var u=Error(s(520),{cause:i});if(u=Xe(u,n),_r===null?_r=[u]:_r.push(u),Xt!==4&&(Xt=2),e===null)return!0;i=Xe(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=l&-l,n.lanes|=t,t=Eu(n.stateNode,i,t),iu(n,t),!1;case 1:if(e=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(na===null||!na.has(u))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Bd(l),Nd(l,t,n,i),iu(n,l),!1}n=n.return}while(n!==null);return!1}var Hd=Error(s(461)),oe=!1;function fe(t,e,n,i){e.child=t===null?Ed(e,null,n,i):fi(e,t.child,n,i)}function Pd(t,e,n,i,l){n=n.render;var u=e.ref;if("ref"in i){var d={};for(var g in i)g!=="ref"&&(d[g]=i[g])}else d=i;return Ea(e),i=uu(t,e,n,d,u,l),g=cu(),t!==null&&!oe?(fu(t,e,l),Rn(t,e,l)):(Tt&&g&&Qs(e),e.flags|=1,fe(t,e,i,l),e.child)}function Ud(t,e,n,i,l){if(t===null){var u=n.type;return typeof u=="function"&&!Gs(u)&&u.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=u,qd(t,e,u,i,l)):(t=Cl(n.type,null,i,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Bu(t,l)){var d=u.memoizedProps;if(n=n.compare,n=n!==null?n:ar,n(d,i)&&t.ref===e.ref)return Rn(t,e,l)}return e.flags|=1,t=Tn(u,i),t.ref=e.ref,t.return=e,e.child=t}function qd(t,e,n,i,l){if(t!==null){var u=t.memoizedProps;if(ar(u,i)&&t.ref===e.ref)if(oe=!1,e.pendingProps=i=u,Bu(t,l))(t.flags&131072)!==0&&(oe=!0);else return e.lanes=t.lanes,Rn(t,e,l)}return Cu(t,e,n,i,l)}function jd(t,e,n){var i=e.pendingProps,l=i.children,u=t!==null?t.memoizedState:null;if(i.mode==="hidden"){if((e.flags&128)!==0){if(i=u!==null?u.baseLanes|n:n,t!==null){for(l=e.child=t.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;e.childLanes=u&~i}else e.childLanes=0,e.child=null;return Ld(t,e,i,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ml(e,u!==null?u.cachePool:null),u!==null?qh(e,u):lu(),Cd(e);else return e.lanes=e.childLanes=536870912,Ld(t,e,u!==null?u.baseLanes|n:n,n)}else u!==null?(Ml(e,u.cachePool),qh(e,u),Jn(),e.memoizedState=null):(t!==null&&Ml(e,null),lu(),Jn());return fe(t,e,l,n),e.child}function Ld(t,e,n,i){var l=tu();return l=l===null?null:{parent:ne._currentValue,pool:l},e.memoizedState={baseLanes:n,cachePool:l},t!==null&&Ml(e,null),lu(),Cd(e),t!==null&&sr(t,e,i,!0),null}function Kl(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Cu(t,e,n,i,l){return Ea(e),n=uu(t,e,n,i,void 0,l),i=cu(),t!==null&&!oe?(fu(t,e,l),Rn(t,e,l)):(Tt&&i&&Qs(e),e.flags|=1,fe(t,e,n,l),e.child)}function $d(t,e,n,i,l,u){return Ea(e),e.updateQueue=null,n=Lh(e,i,n,l),jh(t),i=cu(),t!==null&&!oe?(fu(t,e,u),Rn(t,e,u)):(Tt&&i&&Qs(e),e.flags|=1,fe(t,e,n,u),e.child)}function Gd(t,e,n,i,l){if(Ea(e),e.stateNode===null){var u=ei,d=n.contextType;typeof d=="object"&&d!==null&&(u=be(d)),u=new n(i,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Au,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=i,u.state=e.memoizedState,u.refs={},nu(e),d=n.contextType,u.context=typeof d=="object"&&d!==null?be(d):ei,u.state=e.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Ou(e,n,d,i),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(d=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),d!==u.state&&Au.enqueueReplaceState(u,u.state,null),gr(e,i,u,l),pr(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){u=e.stateNode;var g=e.memoizedProps,T=ka(n,g);u.props=T;var M=u.context,L=n.contextType;d=ei,typeof L=="object"&&L!==null&&(d=be(L));var Q=n.getDerivedStateFromProps;L=typeof Q=="function"||typeof u.getSnapshotBeforeUpdate=="function",g=e.pendingProps!==g,L||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g||M!==d)&&kd(e,u,i,d),Xn=!1;var H=e.memoizedState;u.state=H,gr(e,i,u,l),pr(),M=e.memoizedState,g||H!==M||Xn?(typeof Q=="function"&&(Ou(e,n,Q,i),M=e.memoizedState),(T=Xn||_d(e,n,T,i,H,M,d))?(L||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=M),u.props=i,u.state=M,u.context=d,i=T):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{u=e.stateNode,au(t,e),d=e.memoizedProps,L=ka(n,d),u.props=L,Q=e.pendingProps,H=u.context,M=n.contextType,T=ei,typeof M=="object"&&M!==null&&(T=be(M)),g=n.getDerivedStateFromProps,(M=typeof g=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==Q||H!==T)&&kd(e,u,i,T),Xn=!1,H=e.memoizedState,u.state=H,gr(e,i,u,l),pr();var P=e.memoizedState;d!==Q||H!==P||Xn||t!==null&&t.dependencies!==null&&Rl(t.dependencies)?(typeof g=="function"&&(Ou(e,n,g,i),P=e.memoizedState),(L=Xn||_d(e,n,L,i,H,P,T)||t!==null&&t.dependencies!==null&&Rl(t.dependencies))?(M||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,P,T),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,P,T)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||d===t.memoizedProps&&H===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===t.memoizedProps&&H===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=P),u.props=i,u.state=P,u.context=T,i=L):(typeof u.componentDidUpdate!="function"||d===t.memoizedProps&&H===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===t.memoizedProps&&H===t.memoizedState||(e.flags|=1024),i=!1)}return u=i,Kl(t,e),i=(e.flags&128)!==0,u||i?(u=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&i?(e.child=fi(e,t.child,null,l),e.child=fi(e,null,n,l)):fe(t,e,n,l),e.memoizedState=u.state,t=e.child):t=Rn(t,e,l),t}function Yd(t,e,n,i){return lr(),e.flags|=256,fe(t,e,n,i),e.child}var _u={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ku(t){return{baseLanes:t,cachePool:Dh()}}function Ru(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Je),t}function Xd(t,e,n){var i=e.pendingProps,l=!1,u=(e.flags&128)!==0,d;if((d=u)||(d=t!==null&&t.memoizedState===null?!1:(ae.current&2)!==0),d&&(l=!0,e.flags&=-129),d=(e.flags&32)!==0,e.flags&=-33,t===null){if(Tt){if(l?Kn(e):Jn(),Tt){var g=Yt,T;if(T=g){t:{for(T=g,g=un;T.nodeType!==8;){if(!g){g=null;break t}if(T=an(T.nextSibling),T===null){g=null;break t}}g=T}g!==null?(e.memoizedState={dehydrated:g,treeContext:Sa!==null?{id:On,overflow:An}:null,retryLane:536870912,hydrationErrors:null},T=De(18,null,null,0),T.stateNode=g,T.return=e,e.child=T,xe=e,Yt=null,T=!0):T=!1}T||Oa(e)}if(g=e.memoizedState,g!==null&&(g=g.dehydrated,g!==null))return dc(g)?e.lanes=32:e.lanes=536870912,null;kn(e)}return g=i.children,i=i.fallback,l?(Jn(),l=e.mode,g=Jl({mode:"hidden",children:g},l),i=xa(i,l,n,null),g.return=e,i.return=e,g.sibling=i,e.child=g,l=e.child,l.memoizedState=ku(n),l.childLanes=Ru(t,d,n),e.memoizedState=_u,i):(Kn(e),Du(e,g))}if(T=t.memoizedState,T!==null&&(g=T.dehydrated,g!==null)){if(u)e.flags&256?(Kn(e),e.flags&=-257,e=Mu(t,e,n)):e.memoizedState!==null?(Jn(),e.child=t.child,e.flags|=128,e=null):(Jn(),l=i.fallback,g=e.mode,i=Jl({mode:"visible",children:i.children},g),l=xa(l,g,n,null),l.flags|=2,i.return=e,l.return=e,i.sibling=l,e.child=i,fi(e,t.child,null,n),i=e.child,i.memoizedState=ku(n),i.childLanes=Ru(t,d,n),e.memoizedState=_u,e=l);else if(Kn(e),dc(g)){if(d=g.nextSibling&&g.nextSibling.dataset,d)var M=d.dgst;d=M,i=Error(s(419)),i.stack="",i.digest=d,or({value:i,source:null,stack:null}),e=Mu(t,e,n)}else if(oe||sr(t,e,n,!1),d=(n&t.childLanes)!==0,oe||d){if(d=Ut,d!==null&&(i=n&-n,i=(i&42)!==0?1:ps(i),i=(i&(d.suspendedLanes|n))!==0?0:i,i!==0&&i!==T.retryLane))throw T.retryLane=i,ti(t,i),He(d,t,i),Hd;g.data==="$?"||Ju(),e=Mu(t,e,n)}else g.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=T.treeContext,Yt=an(g.nextSibling),xe=e,Tt=!0,Ta=null,un=!1,t!==null&&(Ze[Ve++]=On,Ze[Ve++]=An,Ze[Ve++]=Sa,On=t.id,An=t.overflow,Sa=e),e=Du(e,i.children),e.flags|=4096);return e}return l?(Jn(),l=i.fallback,g=e.mode,T=t.child,M=T.sibling,i=Tn(T,{mode:"hidden",children:i.children}),i.subtreeFlags=T.subtreeFlags&65011712,M!==null?l=Tn(M,l):(l=xa(l,g,n,null),l.flags|=2),l.return=e,i.return=e,i.sibling=l,e.child=i,i=l,l=e.child,g=t.child.memoizedState,g===null?g=ku(n):(T=g.cachePool,T!==null?(M=ne._currentValue,T=T.parent!==M?{parent:M,pool:M}:T):T=Dh(),g={baseLanes:g.baseLanes|n,cachePool:T}),l.memoizedState=g,l.childLanes=Ru(t,d,n),e.memoizedState=_u,i):(Kn(e),n=t.child,t=n.sibling,n=Tn(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(d=e.deletions,d===null?(e.deletions=[t],e.flags|=16):d.push(t)),e.child=n,e.memoizedState=null,n)}function Du(t,e){return e=Jl({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Jl(t,e){return t=De(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Mu(t,e,n){return fi(e,t.child,null,n),t=Du(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qd(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Js(t.return,e,n)}function zu(t,e,n,i,l){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:l}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=i,u.tail=n,u.tailMode=l)}function Zd(t,e,n){var i=e.pendingProps,l=i.revealOrder,u=i.tail;if(fe(t,e,i.children,n),i=ae.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qd(t,n,e);else if(t.tag===19)Qd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}switch(F(ae,i),l){case"forwards":for(n=e.child,l=null;n!==null;)t=n.alternate,t!==null&&Ql(t)===null&&(l=n),n=n.sibling;n=l,n===null?(l=e.child,e.child=null):(l=n.sibling,n.sibling=null),zu(e,!1,l,n,u);break;case"backwards":for(n=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&Ql(t)===null){e.child=l;break}t=l.sibling,l.sibling=n,n=l,l=t}zu(e,!0,n,null,u);break;case"together":zu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ea|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(sr(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,n=Tn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Bu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Rl(t)))}function Zb(t,e,n){switch(e.tag){case 3:Et(e,e.stateNode.containerInfo),Yn(e,ne,t.memoizedState.cache),lr();break;case 27:case 5:pa(e);break;case 4:Et(e,e.stateNode.containerInfo);break;case 10:Yn(e,e.type,e.memoizedProps.value);break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(Kn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?Xd(t,e,n):(Kn(e),t=Rn(t,e,n),t!==null?t.sibling:null);Kn(e);break;case 19:var l=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(sr(t,e,n,!1),i=(n&e.childLanes)!==0),l){if(i)return Zd(t,e,n);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),F(ae,ae.current),i)break;return null;case 22:case 23:return e.lanes=0,jd(t,e,n);case 24:Yn(e,ne,t.memoizedState.cache)}return Rn(t,e,n)}function Vd(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)oe=!0;else{if(!Bu(t,n)&&(e.flags&128)===0)return oe=!1,Zb(t,e,n);oe=(t.flags&131072)!==0}else oe=!1,Tt&&(e.flags&1048576)!==0&&Oh(e,kl,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var i=e.elementType,l=i._init;if(i=l(i._payload),e.type=i,typeof i=="function")Gs(i)?(t=ka(i,t),e.tag=1,e=Gd(null,e,i,t,n)):(e.tag=0,e=Cu(null,e,i,t,n));else{if(i!=null){if(l=i.$$typeof,l===f){e.tag=11,e=Pd(null,e,i,t,n);break t}else if(l===O){e.tag=14,e=Ud(null,e,i,t,n);break t}}throw e=Bt(i)||i,Error(s(306,e,""))}}return e;case 0:return Cu(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,l=ka(i,e.pendingProps),Gd(t,e,i,l,n);case 3:t:{if(Et(e,e.stateNode.containerInfo),t===null)throw Error(s(387));i=e.pendingProps;var u=e.memoizedState;l=u.element,au(t,e),gr(e,i,null,n);var d=e.memoizedState;if(i=d.cache,Yn(e,ne,i),i!==u.cache&&Ws(e,[ne],n,!0),pr(),i=d.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:d.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Yd(t,e,i,n);break t}else if(i!==l){l=Xe(Error(s(424)),e),or(l),e=Yd(t,e,i,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Yt=an(t.firstChild),xe=e,Tt=!0,Ta=null,un=!0,n=Ed(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(lr(),i===l){e=Rn(t,e,n);break t}fe(t,e,i,n)}e=e.child}return e;case 26:return Kl(t,e),t===null?(n=F0(e.type,null,e.pendingProps,null))?e.memoizedState=n:Tt||(n=e.type,t=e.pendingProps,i=co(st.current).createElement(n),i[me]=e,i[Se]=t,de(i,n,t),le(i),e.stateNode=i):e.memoizedState=F0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return pa(e),t===null&&Tt&&(i=e.stateNode=K0(e.type,e.pendingProps,st.current),xe=e,un=!0,l=Yt,ra(e.type)?(pc=l,Yt=an(i.firstChild)):Yt=l),fe(t,e,e.pendingProps.children,n),Kl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Tt&&((l=i=Yt)&&(i=S1(i,e.type,e.pendingProps,un),i!==null?(e.stateNode=i,xe=e,Yt=an(i.firstChild),un=!1,l=!0):l=!1),l||Oa(e)),pa(e),l=e.type,u=e.pendingProps,d=t!==null?t.memoizedProps:null,i=u.children,cc(l,u)?i=null:d!==null&&cc(l,d)&&(e.flags|=32),e.memoizedState!==null&&(l=uu(t,e,qb,null,null,n),Pr._currentValue=l),Kl(t,e),fe(t,e,i,n),e.child;case 6:return t===null&&Tt&&((t=n=Yt)&&(n=w1(n,e.pendingProps,un),n!==null?(e.stateNode=n,xe=e,Yt=null,t=!0):t=!1),t||Oa(e)),null;case 13:return Xd(t,e,n);case 4:return Et(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=fi(e,null,i,n):fe(t,e,i,n),e.child;case 11:return Pd(t,e,e.type,e.pendingProps,n);case 7:return fe(t,e,e.pendingProps,n),e.child;case 8:return fe(t,e,e.pendingProps.children,n),e.child;case 12:return fe(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,Yn(e,e.type,i.value),fe(t,e,i.children,n),e.child;case 9:return l=e.type._context,i=e.pendingProps.children,Ea(e),l=be(l),i=i(l),e.flags|=1,fe(t,e,i,n),e.child;case 14:return Ud(t,e,e.type,e.pendingProps,n);case 15:return qd(t,e,e.type,e.pendingProps,n);case 19:return Zd(t,e,n);case 31:return i=e.pendingProps,n=e.mode,i={mode:i.mode,children:i.children},t===null?(n=Jl(i,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=Tn(t.child,i),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return jd(t,e,n);case 24:return Ea(e),i=be(ne),t===null?(l=tu(),l===null&&(l=Ut,u=Fs(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=n),l=u),e.memoizedState={parent:i,cache:l},nu(e),Yn(e,ne,l)):((t.lanes&n)!==0&&(au(t,e),gr(e,null,null,n),pr()),l=t.memoizedState,u=e.memoizedState,l.parent!==i?(l={parent:i,cache:i},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),Yn(e,ne,i)):(i=u.cache,Yn(e,ne,i),i!==l.cache&&Ws(e,[ne],n,!0))),fe(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function Dn(t){t.flags|=4}function Kd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ap(e)){if(e=Ke.current,e!==null&&((St&4194048)===St?cn!==null:(St&62914560)!==St&&(St&536870912)===0||e!==cn))throw hr=eu,Mh;t.flags|=8192}}function Wl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Cf():536870912,t.lanes|=e,gi|=e)}function wr(t,e){if(!Tt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var l=t.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Vb(t,e,n){var i=e.pendingProps;switch(Zs(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return Gt(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Cn(ne),ge(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(rr(e)?Dn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ch())),Gt(e),null;case 26:return n=e.memoizedState,t===null?(Dn(e),n!==null?(Gt(e),Kd(e,n)):(Gt(e),e.flags&=-16777217)):n?n!==t.memoizedState?(Dn(e),Gt(e),Kd(e,n)):(Gt(e),e.flags&=-16777217):(t.memoizedProps!==i&&Dn(e),Gt(e),e.flags&=-16777217),null;case 27:xn(e),n=st.current;var l=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Dn(e);else{if(!i){if(e.stateNode===null)throw Error(s(166));return Gt(e),null}t=it.current,rr(e)?Ah(e):(t=K0(l,i,n),e.stateNode=t,Dn(e))}return Gt(e),null;case 5:if(xn(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Dn(e);else{if(!i){if(e.stateNode===null)throw Error(s(166));return Gt(e),null}if(t=it.current,rr(e))Ah(e);else{switch(l=co(st.current),t){case 1:t=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof i.is=="string"?l.createElement("select",{is:i.is}):l.createElement("select"),i.multiple?t.multiple=!0:i.size&&(t.size=i.size);break;default:t=typeof i.is=="string"?l.createElement(n,{is:i.is}):l.createElement(n)}}t[me]=e,t[Se]=i;t:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)t.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break t;for(;l.sibling===null;){if(l.return===null||l.return===e)break t;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=t;t:switch(de(t,n,i),n){case"button":case"input":case"select":case"textarea":t=!!i.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Dn(e)}}return Gt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Dn(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(s(166));if(t=st.current,rr(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,l=xe,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}t[me]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||$0(t.nodeValue,n)),t||Oa(e)}else t=co(t).createTextNode(i),t[me]=e,e.stateNode=t}return Gt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=rr(e),i!==null&&i.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[me]=e}else lr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Gt(e),l=!1}else l=Ch(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(kn(e),e):(kn(e),null)}if(kn(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=i!==null,t=t!==null&&t.memoizedState!==null,n){i=e.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool);var u=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==l&&(i.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),Wl(e,e.updateQueue),Gt(e),null;case 4:return ge(),t===null&&rc(e.stateNode.containerInfo),Gt(e),null;case 10:return Cn(e.type),Gt(e),null;case 19:if(W(ae),l=e.memoizedState,l===null)return Gt(e),null;if(i=(e.flags&128)!==0,u=l.rendering,u===null)if(i)wr(l,!1);else{if(Xt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=Ql(t),u!==null){for(e.flags|=128,wr(l,!1),t=u.updateQueue,e.updateQueue=t,Wl(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Th(n,t),n=n.sibling;return F(ae,ae.current&1|2),e.child}t=t.sibling}l.tail!==null&&sn()>to&&(e.flags|=128,i=!0,wr(l,!1),e.lanes=4194304)}else{if(!i)if(t=Ql(u),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,Wl(e,t),wr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!Tt)return Gt(e),null}else 2*sn()-l.renderingStartTime>to&&n!==536870912&&(e.flags|=128,i=!0,wr(l,!1),e.lanes=4194304);l.isBackwards?(u.sibling=e.child,e.child=u):(t=l.last,t!==null?t.sibling=u:e.child=u,l.last=u)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=sn(),e.sibling=null,t=ae.current,F(ae,i?t&1|2:t&1),e):(Gt(e),null);case 22:case 23:return kn(e),ou(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(n&536870912)!==0&&(e.flags&128)===0&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),n=e.updateQueue,n!==null&&Wl(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&W(Ca),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Cn(ne),Gt(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function Kb(t,e){switch(Zs(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Cn(ne),ge(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return xn(e),null;case 13:if(kn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));lr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return W(ae),null;case 4:return ge(),null;case 10:return Cn(e.type),null;case 22:case 23:return kn(e),ou(),t!==null&&W(Ca),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Cn(ne),null;case 25:return null;default:return null}}function Jd(t,e){switch(Zs(e),e.tag){case 3:Cn(ne),ge();break;case 26:case 27:case 5:xn(e);break;case 4:ge();break;case 13:kn(e);break;case 19:W(ae);break;case 10:Cn(e.type);break;case 22:case 23:kn(e),ou(),t!==null&&W(Ca);break;case 24:Cn(ne)}}function Tr(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&t)===t){i=void 0;var u=n.create,d=n.inst;i=u(),d.destroy=i}n=n.next}while(n!==l)}}catch(g){Nt(e,e.return,g)}}function Wn(t,e,n){try{var i=e.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var u=l.next;i=u;do{if((i.tag&t)===t){var d=i.inst,g=d.destroy;if(g!==void 0){d.destroy=void 0,l=e;var T=n,M=g;try{M()}catch(L){Nt(l,T,L)}}}i=i.next}while(i!==u)}}catch(L){Nt(e,e.return,L)}}function Wd(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Uh(e,n)}catch(i){Nt(t,t.return,i)}}}function Fd(t,e,n){n.props=ka(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){Nt(t,e,i)}}function Or(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(l){Nt(t,e,l)}}function fn(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(l){Nt(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Nt(t,e,l)}else n.current=null}function Id(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(l){Nt(t,t.return,l)}}function Nu(t,e,n){try{var i=t.stateNode;m1(i,t.type,n,e),i[Se]=e}catch(l){Nt(t,t.return,l)}}function t0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ra(t.type)||t.tag===4}function Hu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||t0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ra(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=uo));else if(i!==4&&(i===27&&ra(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Pu(t,e,n),t=t.sibling;t!==null;)Pu(t,e,n),t=t.sibling}function Fl(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&ra(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Fl(t,e,n),t=t.sibling;t!==null;)Fl(t,e,n),t=t.sibling}function e0(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);de(e,i,n),e[me]=t,e[Se]=n}catch(u){Nt(t,t.return,u)}}var Mn=!1,Kt=!1,Uu=!1,n0=typeof WeakSet=="function"?WeakSet:Set,se=null;function Jb(t,e){if(t=t.containerInfo,sc=bo,t=dh(t),Hs(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var l=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break t}var d=0,g=-1,T=-1,M=0,L=0,Q=t,H=null;e:for(;;){for(var P;Q!==n||l!==0&&Q.nodeType!==3||(g=d+l),Q!==u||i!==0&&Q.nodeType!==3||(T=d+i),Q.nodeType===3&&(d+=Q.nodeValue.length),(P=Q.firstChild)!==null;)H=Q,Q=P;for(;;){if(Q===t)break e;if(H===n&&++M===l&&(g=d),H===u&&++L===i&&(T=d),(P=Q.nextSibling)!==null)break;Q=H,H=Q.parentNode}Q=P}n=g===-1||T===-1?null:{start:g,end:T}}else n=null}n=n||{start:0,end:0}}else n=null;for(uc={focusedElem:t,selectionRange:n},bo=!1,se=e;se!==null;)if(e=se,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,se=t;else for(;se!==null;){switch(e=se,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,n=e,l=u.memoizedProps,u=u.memoizedState,i=n.stateNode;try{var ft=ka(n.type,l,n.elementType===n.type);t=i.getSnapshotBeforeUpdate(ft,u),i.__reactInternalSnapshotBeforeUpdate=t}catch(ot){Nt(n,n.return,ot)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)hc(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":hc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,se=t;break}se=e.return}}function a0(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Fn(t,n),i&4&&Tr(5,n);break;case 1:if(Fn(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(d){Nt(n,n.return,d)}else{var l=ka(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(d){Nt(n,n.return,d)}}i&64&&Wd(n),i&512&&Or(n,n.return);break;case 3:if(Fn(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Uh(t,e)}catch(d){Nt(n,n.return,d)}}break;case 27:e===null&&i&4&&e0(n);case 26:case 5:Fn(t,n),e===null&&i&4&&Id(n),i&512&&Or(n,n.return);break;case 12:Fn(t,n);break;case 13:Fn(t,n),i&4&&l0(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=r1.bind(null,n),T1(t,n))));break;case 22:if(i=n.memoizedState!==null||Mn,!i){e=e!==null&&e.memoizedState!==null||Kt,l=Mn;var u=Kt;Mn=i,(Kt=e)&&!u?In(t,n,(n.subtreeFlags&8772)!==0):Fn(t,n),Mn=l,Kt=u}break;case 30:break;default:Fn(t,n)}}function i0(t){var e=t.alternate;e!==null&&(t.alternate=null,i0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&bs(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,Oe=!1;function zn(t,e,n){for(n=n.child;n!==null;)r0(t,e,n),n=n.sibling}function r0(t,e,n){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(Xi,n)}catch{}switch(n.tag){case 26:Kt||fn(n,e),zn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Kt||fn(n,e);var i=jt,l=Oe;ra(n.type)&&(jt=n.stateNode,Oe=!1),zn(t,e,n),zr(n.stateNode),jt=i,Oe=l;break;case 5:Kt||fn(n,e);case 6:if(i=jt,l=Oe,jt=null,zn(t,e,n),jt=i,Oe=l,jt!==null)if(Oe)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(n.stateNode)}catch(u){Nt(n,e,u)}else try{jt.removeChild(n.stateNode)}catch(u){Nt(n,e,u)}break;case 18:jt!==null&&(Oe?(t=jt,Z0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Lr(t)):Z0(jt,n.stateNode));break;case 4:i=jt,l=Oe,jt=n.stateNode.containerInfo,Oe=!0,zn(t,e,n),jt=i,Oe=l;break;case 0:case 11:case 14:case 15:Kt||Wn(2,n,e),Kt||Wn(4,n,e),zn(t,e,n);break;case 1:Kt||(fn(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Fd(n,e,i)),zn(t,e,n);break;case 21:zn(t,e,n);break;case 22:Kt=(i=Kt)||n.memoizedState!==null,zn(t,e,n),Kt=i;break;default:zn(t,e,n)}}function l0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Lr(t)}catch(n){Nt(e,e.return,n)}}function Wb(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new n0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new n0),e;default:throw Error(s(435,t.tag))}}function qu(t,e){var n=Wb(t);e.forEach(function(i){var l=l1.bind(null,t,i);n.has(i)||(n.add(i),i.then(l,l))})}function Me(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i],u=t,d=e,g=d;t:for(;g!==null;){switch(g.tag){case 27:if(ra(g.type)){jt=g.stateNode,Oe=!1;break t}break;case 5:jt=g.stateNode,Oe=!1;break t;case 3:case 4:jt=g.stateNode.containerInfo,Oe=!0;break t}g=g.return}if(jt===null)throw Error(s(160));r0(u,d,l),jt=null,Oe=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)o0(e,t),e=e.sibling}var nn=null;function o0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Me(e,t),ze(t),i&4&&(Wn(3,t,t.return),Tr(3,t),Wn(5,t,t.return));break;case 1:Me(e,t),ze(t),i&512&&(Kt||n===null||fn(n,n.return)),i&64&&Mn&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var l=nn;if(Me(e,t),ze(t),i&512&&(Kt||n===null||fn(n,n.return)),i&4){var u=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){t:{i=t.type,n=t.memoizedProps,l=l.ownerDocument||l;e:switch(i){case"title":u=l.getElementsByTagName("title")[0],(!u||u[Vi]||u[me]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(i),l.head.insertBefore(u,l.querySelector("head > title"))),de(u,i,n),u[me]=t,le(u),i=u;break t;case"link":var d=ep("link","href",l).get(i+(n.href||""));if(d){for(var g=0;g<d.length;g++)if(u=d[g],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(g,1);break e}}u=l.createElement(i),de(u,i,n),l.head.appendChild(u);break;case"meta":if(d=ep("meta","content",l).get(i+(n.content||""))){for(g=0;g<d.length;g++)if(u=d[g],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(g,1);break e}}u=l.createElement(i),de(u,i,n),l.head.appendChild(u);break;default:throw Error(s(468,i))}u[me]=t,le(u),i=u}t.stateNode=i}else np(l,t.type,t.stateNode);else t.stateNode=tp(l,i,t.memoizedProps);else u!==i?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,i===null?np(l,t.type,t.stateNode):tp(l,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Nu(t,t.memoizedProps,n.memoizedProps)}break;case 27:Me(e,t),ze(t),i&512&&(Kt||n===null||fn(n,n.return)),n!==null&&i&4&&Nu(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Me(e,t),ze(t),i&512&&(Kt||n===null||fn(n,n.return)),t.flags&32){l=t.stateNode;try{Za(l,"")}catch(P){Nt(t,t.return,P)}}i&4&&t.stateNode!=null&&(l=t.memoizedProps,Nu(t,l,n!==null?n.memoizedProps:l)),i&1024&&(Uu=!0);break;case 6:if(Me(e,t),ze(t),i&4){if(t.stateNode===null)throw Error(s(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(P){Nt(t,t.return,P)}}break;case 3:if(po=null,l=nn,nn=fo(e.containerInfo),Me(e,t),nn=l,ze(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Lr(e.containerInfo)}catch(P){Nt(t,t.return,P)}Uu&&(Uu=!1,s0(t));break;case 4:i=nn,nn=fo(t.stateNode.containerInfo),Me(e,t),ze(t),nn=i;break;case 12:Me(e,t),ze(t);break;case 13:Me(e,t),ze(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Xu=sn()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,qu(t,i)));break;case 22:l=t.memoizedState!==null;var T=n!==null&&n.memoizedState!==null,M=Mn,L=Kt;if(Mn=M||l,Kt=L||T,Me(e,t),Kt=L,Mn=M,ze(t),i&8192)t:for(e=t.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(n===null||T||Mn||Kt||Ra(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){T=n=e;try{if(u=T.stateNode,l)d=u.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{g=T.stateNode;var Q=T.memoizedProps.style,H=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;g.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(P){Nt(T,T.return,P)}}}else if(e.tag===6){if(n===null){T=e;try{T.stateNode.nodeValue=l?"":T.memoizedProps}catch(P){Nt(T,T.return,P)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,qu(t,n))));break;case 19:Me(e,t),ze(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,qu(t,i)));break;case 30:break;case 21:break;default:Me(e,t),ze(t)}}function ze(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(t0(i)){n=i;break}i=i.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var l=n.stateNode,u=Hu(t);Fl(t,u,l);break;case 5:var d=n.stateNode;n.flags&32&&(Za(d,""),n.flags&=-33);var g=Hu(t);Fl(t,g,d);break;case 3:case 4:var T=n.stateNode.containerInfo,M=Hu(t);Pu(t,M,T);break;default:throw Error(s(161))}}catch(L){Nt(t,t.return,L)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function s0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;s0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Fn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)a0(t,e.alternate,e),e=e.sibling}function Ra(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Wn(4,e,e.return),Ra(e);break;case 1:fn(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Fd(e,e.return,n),Ra(e);break;case 27:zr(e.stateNode);case 26:case 5:fn(e,e.return),Ra(e);break;case 22:e.memoizedState===null&&Ra(e);break;case 30:Ra(e);break;default:Ra(e)}t=t.sibling}}function In(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,l=t,u=e,d=u.flags;switch(u.tag){case 0:case 11:case 15:In(l,u,n),Tr(4,u);break;case 1:if(In(l,u,n),i=u,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(M){Nt(i,i.return,M)}if(i=u,l=i.updateQueue,l!==null){var g=i.stateNode;try{var T=l.shared.hiddenCallbacks;if(T!==null)for(l.shared.hiddenCallbacks=null,l=0;l<T.length;l++)Ph(T[l],g)}catch(M){Nt(i,i.return,M)}}n&&d&64&&Wd(u),Or(u,u.return);break;case 27:e0(u);case 26:case 5:In(l,u,n),n&&i===null&&d&4&&Id(u),Or(u,u.return);break;case 12:In(l,u,n);break;case 13:In(l,u,n),n&&d&4&&l0(l,u);break;case 22:u.memoizedState===null&&In(l,u,n),Or(u,u.return);break;case 30:break;default:In(l,u,n)}e=e.sibling}}function ju(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&ur(n))}function Lu(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ur(t))}function hn(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)u0(t,e,n,i),e=e.sibling}function u0(t,e,n,i){var l=e.flags;switch(e.tag){case 0:case 11:case 15:hn(t,e,n,i),l&2048&&Tr(9,e);break;case 1:hn(t,e,n,i);break;case 3:hn(t,e,n,i),l&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ur(t)));break;case 12:if(l&2048){hn(t,e,n,i),t=e.stateNode;try{var u=e.memoizedProps,d=u.id,g=u.onPostCommit;typeof g=="function"&&g(d,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(T){Nt(e,e.return,T)}}else hn(t,e,n,i);break;case 13:hn(t,e,n,i);break;case 23:break;case 22:u=e.stateNode,d=e.alternate,e.memoizedState!==null?u._visibility&2?hn(t,e,n,i):Ar(t,e):u._visibility&2?hn(t,e,n,i):(u._visibility|=2,hi(t,e,n,i,(e.subtreeFlags&10256)!==0)),l&2048&&ju(d,e);break;case 24:hn(t,e,n,i),l&2048&&Lu(e.alternate,e);break;default:hn(t,e,n,i)}}function hi(t,e,n,i,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,d=e,g=n,T=i,M=d.flags;switch(d.tag){case 0:case 11:case 15:hi(u,d,g,T,l),Tr(8,d);break;case 23:break;case 22:var L=d.stateNode;d.memoizedState!==null?L._visibility&2?hi(u,d,g,T,l):Ar(u,d):(L._visibility|=2,hi(u,d,g,T,l)),l&&M&2048&&ju(d.alternate,d);break;case 24:hi(u,d,g,T,l),l&&M&2048&&Lu(d.alternate,d);break;default:hi(u,d,g,T,l)}e=e.sibling}}function Ar(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,l=i.flags;switch(i.tag){case 22:Ar(n,i),l&2048&&ju(i.alternate,i);break;case 24:Ar(n,i),l&2048&&Lu(i.alternate,i);break;default:Ar(n,i)}e=e.sibling}}var Er=8192;function di(t){if(t.subtreeFlags&Er)for(t=t.child;t!==null;)c0(t),t=t.sibling}function c0(t){switch(t.tag){case 26:di(t),t.flags&Er&&t.memoizedState!==null&&H1(nn,t.memoizedState,t.memoizedProps);break;case 5:di(t);break;case 3:case 4:var e=nn;nn=fo(t.stateNode.containerInfo),di(t),nn=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Er,Er=16777216,di(t),Er=e):di(t));break;default:di(t)}}function f0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Cr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];se=i,d0(i,t)}f0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)h0(t),t=t.sibling}function h0(t){switch(t.tag){case 0:case 11:case 15:Cr(t),t.flags&2048&&Wn(9,t,t.return);break;case 3:Cr(t);break;case 12:Cr(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Il(t)):Cr(t);break;default:Cr(t)}}function Il(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];se=i,d0(i,t)}f0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Wn(8,e,e.return),Il(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Il(e));break;default:Il(e)}t=t.sibling}}function d0(t,e){for(;se!==null;){var n=se;switch(n.tag){case 0:case 11:case 15:Wn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ur(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,se=i;else t:for(n=t;se!==null;){i=se;var l=i.sibling,u=i.return;if(i0(i),i===n){se=null;break t}if(l!==null){l.return=u,se=l;break t}se=u}}}var Fb={getCacheForType:function(t){var e=be(ne),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},Ib=typeof WeakMap=="function"?WeakMap:Map,_t=0,Ut=null,vt=null,St=0,kt=0,Be=null,ta=!1,pi=!1,$u=!1,Bn=0,Xt=0,ea=0,Da=0,Gu=0,Je=0,gi=0,_r=null,Ae=null,Yu=!1,Xu=0,to=1/0,eo=null,na=null,he=0,aa=null,mi=null,bi=0,Qu=0,Zu=null,p0=null,kr=0,Vu=null;function Ne(){if((_t&2)!==0&&St!==0)return St&-St;if(j.T!==null){var t=ii;return t!==0?t:ec()}return Rf()}function g0(){Je===0&&(Je=(St&536870912)===0||Tt?Ef():536870912);var t=Ke.current;return t!==null&&(t.flags|=32),Je}function He(t,e,n){(t===Ut&&(kt===2||kt===9)||t.cancelPendingCommit!==null)&&(yi(t,0),ia(t,St,Je,!1)),Zi(t,n),((_t&2)===0||t!==Ut)&&(t===Ut&&((_t&2)===0&&(Da|=n),Xt===4&&ia(t,St,Je,!1)),dn(t))}function m0(t,e,n){if((_t&6)!==0)throw Error(s(327));var i=!n&&(e&124)===0&&(e&t.expiredLanes)===0||Qi(t,e),l=i?n1(t,e):Wu(t,e,!0),u=i;do{if(l===0){pi&&!i&&ia(t,e,0,!1);break}else{if(n=t.current.alternate,u&&!t1(n)){l=Wu(t,e,!1),u=!1;continue}if(l===2){if(u=e,t.errorRecoveryDisabledLanes&u)var d=0;else d=t.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){e=d;t:{var g=t;l=_r;var T=g.current.memoizedState.isDehydrated;if(T&&(yi(g,d).flags|=256),d=Wu(g,d,!1),d!==2){if($u&&!T){g.errorRecoveryDisabledLanes|=u,Da|=u,l=4;break t}u=Ae,Ae=l,u!==null&&(Ae===null?Ae=u:Ae.push.apply(Ae,u))}l=d}if(u=!1,l!==2)continue}}if(l===1){yi(t,0),ia(t,e,0,!0);break}t:{switch(i=t,u=l,u){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:ia(i,e,Je,!ta);break t;case 2:Ae=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(l=Xu+300-sn(),10<l)){if(ia(i,e,Je,!ta),hl(i,0,!0)!==0)break t;i.timeoutHandle=X0(b0.bind(null,i,n,Ae,eo,Yu,e,Je,Da,gi,ta,u,2,-0,0),l);break t}b0(i,n,Ae,eo,Yu,e,Je,Da,gi,ta,u,0,-0,0)}}break}while(!0);dn(t)}function b0(t,e,n,i,l,u,d,g,T,M,L,Q,H,P){if(t.timeoutHandle=-1,Q=e.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(Hr={stylesheets:null,count:0,unsuspend:N1},c0(e),Q=P1(),Q!==null)){t.cancelPendingCommit=Q(O0.bind(null,t,e,u,n,i,l,d,g,T,L,1,H,P)),ia(t,u,d,!M);return}O0(t,e,u,n,i,l,d,g,T)}function t1(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var l=n[i],u=l.getSnapshot;l=l.value;try{if(!Re(u(),l))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ia(t,e,n,i){e&=~Gu,e&=~Da,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var l=e;0<l;){var u=31-ke(l),d=1<<u;i[u]=-1,l&=~d}n!==0&&_f(t,n,e)}function no(){return(_t&6)===0?(Rr(0),!1):!0}function Ku(){if(vt!==null){if(kt===0)var t=vt.return;else t=vt,En=Aa=null,hu(t),ci=null,xr=0,t=vt;for(;t!==null;)Jd(t.alternate,t),t=t.return;vt=null}}function yi(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,y1(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Ku(),Ut=t,vt=n=Tn(t.current,null),St=e,kt=0,Be=null,ta=!1,pi=Qi(t,e),$u=!1,gi=Je=Gu=Da=ea=Xt=0,Ae=_r=null,Yu=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var l=31-ke(i),u=1<<l;e|=t[l],i&=~u}return Bn=e,Ol(),n}function y0(t,e){pt=null,j.H=Gl,e===fr||e===zl?(e=Nh(),kt=3):e===Mh?(e=Nh(),kt=4):kt=e===Hd?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Be=e,vt===null&&(Xt=1,Vl(t,Xe(e,t.current)))}function v0(){var t=j.H;return j.H=Gl,t===null?Gl:t}function x0(){var t=j.A;return j.A=Fb,t}function Ju(){Xt=4,ta||(St&4194048)!==St&&Ke.current!==null||(pi=!0),(ea&134217727)===0&&(Da&134217727)===0||Ut===null||ia(Ut,St,Je,!1)}function Wu(t,e,n){var i=_t;_t|=2;var l=v0(),u=x0();(Ut!==t||St!==e)&&(eo=null,yi(t,e)),e=!1;var d=Xt;t:do try{if(kt!==0&&vt!==null){var g=vt,T=Be;switch(kt){case 8:Ku(),d=6;break t;case 3:case 2:case 9:case 6:Ke.current===null&&(e=!0);var M=kt;if(kt=0,Be=null,vi(t,g,T,M),n&&pi){d=0;break t}break;default:M=kt,kt=0,Be=null,vi(t,g,T,M)}}e1(),d=Xt;break}catch(L){y0(t,L)}while(!0);return e&&t.shellSuspendCounter++,En=Aa=null,_t=i,j.H=l,j.A=u,vt===null&&(Ut=null,St=0,Ol()),d}function e1(){for(;vt!==null;)S0(vt)}function n1(t,e){var n=_t;_t|=2;var i=v0(),l=x0();Ut!==t||St!==e?(eo=null,to=sn()+500,yi(t,e)):pi=Qi(t,e);t:do try{if(kt!==0&&vt!==null){e=vt;var u=Be;e:switch(kt){case 1:kt=0,Be=null,vi(t,e,u,1);break;case 2:case 9:if(zh(u)){kt=0,Be=null,w0(e);break}e=function(){kt!==2&&kt!==9||Ut!==t||(kt=7),dn(t)},u.then(e,e);break t;case 3:kt=7;break t;case 4:kt=5;break t;case 7:zh(u)?(kt=0,Be=null,w0(e)):(kt=0,Be=null,vi(t,e,u,7));break;case 5:var d=null;switch(vt.tag){case 26:d=vt.memoizedState;case 5:case 27:var g=vt;if(!d||ap(d)){kt=0,Be=null;var T=g.sibling;if(T!==null)vt=T;else{var M=g.return;M!==null?(vt=M,ao(M)):vt=null}break e}}kt=0,Be=null,vi(t,e,u,5);break;case 6:kt=0,Be=null,vi(t,e,u,6);break;case 8:Ku(),Xt=6;break t;default:throw Error(s(462))}}a1();break}catch(L){y0(t,L)}while(!0);return En=Aa=null,j.H=i,j.A=l,_t=n,vt!==null?0:(Ut=null,St=0,Ol(),Xt)}function a1(){for(;vt!==null&&!Am();)S0(vt)}function S0(t){var e=Vd(t.alternate,t,Bn);t.memoizedProps=t.pendingProps,e===null?ao(t):vt=e}function w0(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=$d(n,e,e.pendingProps,e.type,void 0,St);break;case 11:e=$d(n,e,e.pendingProps,e.type.render,e.ref,St);break;case 5:hu(e);default:Jd(n,e),e=vt=Th(e,Bn),e=Vd(n,e,Bn)}t.memoizedProps=t.pendingProps,e===null?ao(t):vt=e}function vi(t,e,n,i){En=Aa=null,hu(e),ci=null,xr=0;var l=e.return;try{if(Qb(t,l,e,n,St)){Xt=1,Vl(t,Xe(n,t.current)),vt=null;return}}catch(u){if(l!==null)throw vt=l,u;Xt=1,Vl(t,Xe(n,t.current)),vt=null;return}e.flags&32768?(Tt||i===1?t=!0:pi||(St&536870912)!==0?t=!1:(ta=t=!0,(i===2||i===9||i===3||i===6)&&(i=Ke.current,i!==null&&i.tag===13&&(i.flags|=16384))),T0(e,t)):ao(e)}function ao(t){var e=t;do{if((e.flags&32768)!==0){T0(e,ta);return}t=e.return;var n=Vb(e.alternate,e,Bn);if(n!==null){vt=n;return}if(e=e.sibling,e!==null){vt=e;return}vt=e=t}while(e!==null);Xt===0&&(Xt=5)}function T0(t,e){do{var n=Kb(t.alternate,t);if(n!==null){n.flags&=32767,vt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){vt=t;return}vt=t=n}while(t!==null);Xt=6,vt=null}function O0(t,e,n,i,l,u,d,g,T){t.cancelPendingCommit=null;do io();while(he!==0);if((_t&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(u=e.lanes|e.childLanes,u|=Ls,Nm(t,n,u,d,g,T),t===Ut&&(vt=Ut=null,St=0),mi=e,aa=t,bi=n,Qu=u,Zu=l,p0=i,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,o1(ul,function(){return k0(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=j.T,j.T=null,l=J.p,J.p=2,d=_t,_t|=4;try{Jb(t,e,n)}finally{_t=d,J.p=l,j.T=i}}he=1,A0(),E0(),C0()}}function A0(){if(he===1){he=0;var t=aa,e=mi,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=j.T,j.T=null;var i=J.p;J.p=2;var l=_t;_t|=4;try{o0(e,t);var u=uc,d=dh(t.containerInfo),g=u.focusedElem,T=u.selectionRange;if(d!==g&&g&&g.ownerDocument&&hh(g.ownerDocument.documentElement,g)){if(T!==null&&Hs(g)){var M=T.start,L=T.end;if(L===void 0&&(L=M),"selectionStart"in g)g.selectionStart=M,g.selectionEnd=Math.min(L,g.value.length);else{var Q=g.ownerDocument||document,H=Q&&Q.defaultView||window;if(H.getSelection){var P=H.getSelection(),ft=g.textContent.length,ot=Math.min(T.start,ft),Mt=T.end===void 0?ot:Math.min(T.end,ft);!P.extend&&ot>Mt&&(d=Mt,Mt=ot,ot=d);var _=fh(g,ot),C=fh(g,Mt);if(_&&C&&(P.rangeCount!==1||P.anchorNode!==_.node||P.anchorOffset!==_.offset||P.focusNode!==C.node||P.focusOffset!==C.offset)){var D=Q.createRange();D.setStart(_.node,_.offset),P.removeAllRanges(),ot>Mt?(P.addRange(D),P.extend(C.node,C.offset)):(D.setEnd(C.node,C.offset),P.addRange(D))}}}}for(Q=[],P=g;P=P.parentNode;)P.nodeType===1&&Q.push({element:P,left:P.scrollLeft,top:P.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<Q.length;g++){var $=Q[g];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}bo=!!sc,uc=sc=null}finally{_t=l,J.p=i,j.T=n}}t.current=e,he=2}}function E0(){if(he===2){he=0;var t=aa,e=mi,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=j.T,j.T=null;var i=J.p;J.p=2;var l=_t;_t|=4;try{a0(t,e.alternate,e)}finally{_t=l,J.p=i,j.T=n}}he=3}}function C0(){if(he===4||he===3){he=0,Em();var t=aa,e=mi,n=bi,i=p0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?he=5:(he=0,mi=aa=null,_0(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(na=null),gs(n),e=e.stateNode,_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(Xi,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=j.T,l=J.p,J.p=2,j.T=null;try{for(var u=t.onRecoverableError,d=0;d<i.length;d++){var g=i[d];u(g.value,{componentStack:g.stack})}}finally{j.T=e,J.p=l}}(bi&3)!==0&&io(),dn(t),l=t.pendingLanes,(n&4194090)!==0&&(l&42)!==0?t===Vu?kr++:(kr=0,Vu=t):kr=0,Rr(0)}}function _0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ur(e)))}function io(t){return A0(),E0(),C0(),k0()}function k0(){if(he!==5)return!1;var t=aa,e=Qu;Qu=0;var n=gs(bi),i=j.T,l=J.p;try{J.p=32>n?32:n,j.T=null,n=Zu,Zu=null;var u=aa,d=bi;if(he=0,mi=aa=null,bi=0,(_t&6)!==0)throw Error(s(331));var g=_t;if(_t|=4,h0(u.current),u0(u,u.current,d,n),_t=g,Rr(0,!1),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(Xi,u)}catch{}return!0}finally{J.p=l,j.T=i,_0(t,e)}}function R0(t,e,n){e=Xe(n,e),e=Eu(t.stateNode,e,2),t=Zn(t,e,2),t!==null&&(Zi(t,2),dn(t))}function Nt(t,e,n){if(t.tag===3)R0(t,t,n);else for(;e!==null;){if(e.tag===3){R0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(na===null||!na.has(i))){t=Xe(n,t),n=Bd(2),i=Zn(e,n,2),i!==null&&(Nd(n,i,e,t),Zi(i,2),dn(i));break}}e=e.return}}function Fu(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Ib;var l=new Set;i.set(e,l)}else l=i.get(e),l===void 0&&(l=new Set,i.set(e,l));l.has(n)||($u=!0,l.add(n),t=i1.bind(null,t,e,n),e.then(t,t))}function i1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Ut===t&&(St&n)===n&&(Xt===4||Xt===3&&(St&62914560)===St&&300>sn()-Xu?(_t&2)===0&&yi(t,0):Gu|=n,gi===St&&(gi=0)),dn(t)}function D0(t,e){e===0&&(e=Cf()),t=ti(t,e),t!==null&&(Zi(t,e),dn(t))}function r1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),D0(t,n)}function l1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,l=t.memoizedState;l!==null&&(n=l.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(s(314))}i!==null&&i.delete(e),D0(t,n)}function o1(t,e){return fs(t,e)}var ro=null,xi=null,Iu=!1,lo=!1,tc=!1,Ma=0;function dn(t){t!==xi&&t.next===null&&(xi===null?ro=xi=t:xi=xi.next=t),lo=!0,Iu||(Iu=!0,u1())}function Rr(t,e){if(!tc&&lo){tc=!0;do for(var n=!1,i=ro;i!==null;){if(t!==0){var l=i.pendingLanes;if(l===0)var u=0;else{var d=i.suspendedLanes,g=i.pingedLanes;u=(1<<31-ke(42|t)+1)-1,u&=l&~(d&~g),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,N0(i,u))}else u=St,u=hl(i,i===Ut?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(u&3)===0||Qi(i,u)||(n=!0,N0(i,u));i=i.next}while(n);tc=!1}}function s1(){M0()}function M0(){lo=Iu=!1;var t=0;Ma!==0&&(b1()&&(t=Ma),Ma=0);for(var e=sn(),n=null,i=ro;i!==null;){var l=i.next,u=z0(i,e);u===0?(i.next=null,n===null?ro=l:n.next=l,l===null&&(xi=n)):(n=i,(t!==0||(u&3)!==0)&&(lo=!0)),i=l}Rr(t)}function z0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,l=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var d=31-ke(u),g=1<<d,T=l[d];T===-1?((g&n)===0||(g&i)!==0)&&(l[d]=Bm(g,e)):T<=e&&(t.expiredLanes|=g),u&=~g}if(e=Ut,n=St,n=hl(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(kt===2||kt===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&hs(i),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Qi(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&hs(i),gs(n)){case 2:case 8:n=Of;break;case 32:n=ul;break;case 268435456:n=Af;break;default:n=ul}return i=B0.bind(null,t),n=fs(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&hs(i),t.callbackPriority=2,t.callbackNode=null,2}function B0(t,e){if(he!==0&&he!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(io()&&t.callbackNode!==n)return null;var i=St;return i=hl(t,t===Ut?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(m0(t,i,e),z0(t,sn()),t.callbackNode!=null&&t.callbackNode===n?B0.bind(null,t):null)}function N0(t,e){if(io())return null;m0(t,e,!0)}function u1(){v1(function(){(_t&6)!==0?fs(Tf,s1):M0()})}function ec(){return Ma===0&&(Ma=Ef()),Ma}function H0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:bl(""+t)}function P0(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function c1(t,e,n,i,l){if(e==="submit"&&n&&n.stateNode===l){var u=H0((l[Se]||null).action),d=i.submitter;d&&(e=(e=d[Se]||null)?H0(e.formAction):d.getAttribute("formAction"),e!==null&&(u=e,d=null));var g=new Sl("action","action",null,i,l);t.push({event:g,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ma!==0){var T=d?P0(l,d):new FormData(l);Su(n,{pending:!0,data:T,method:l.method,action:u},null,T)}}else typeof u=="function"&&(g.preventDefault(),T=d?P0(l,d):new FormData(l),Su(n,{pending:!0,data:T,method:l.method,action:u},u,T))},currentTarget:l}]})}}for(var nc=0;nc<js.length;nc++){var ac=js[nc],f1=ac.toLowerCase(),h1=ac[0].toUpperCase()+ac.slice(1);en(f1,"on"+h1)}en(mh,"onAnimationEnd"),en(bh,"onAnimationIteration"),en(yh,"onAnimationStart"),en("dblclick","onDoubleClick"),en("focusin","onFocus"),en("focusout","onBlur"),en(kb,"onTransitionRun"),en(Rb,"onTransitionStart"),en(Db,"onTransitionCancel"),en(vh,"onTransitionEnd"),Ya("onMouseEnter",["mouseout","mouseover"]),Ya("onMouseLeave",["mouseout","mouseover"]),Ya("onPointerEnter",["pointerout","pointerover"]),Ya("onPointerLeave",["pointerout","pointerover"]),ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ma("onBeforeInput",["compositionend","keypress","textInput","paste"]),ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dr));function U0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],l=i.event;i=i.listeners;t:{var u=void 0;if(e)for(var d=i.length-1;0<=d;d--){var g=i[d],T=g.instance,M=g.currentTarget;if(g=g.listener,T!==u&&l.isPropagationStopped())break t;u=g,l.currentTarget=M;try{u(l)}catch(L){Zl(L)}l.currentTarget=null,u=T}else for(d=0;d<i.length;d++){if(g=i[d],T=g.instance,M=g.currentTarget,g=g.listener,T!==u&&l.isPropagationStopped())break t;u=g,l.currentTarget=M;try{u(l)}catch(L){Zl(L)}l.currentTarget=null,u=T}}}}function xt(t,e){var n=e[ms];n===void 0&&(n=e[ms]=new Set);var i=t+"__bubble";n.has(i)||(q0(e,t,2,!1),n.add(i))}function ic(t,e,n){var i=0;e&&(i|=4),q0(n,t,i,e)}var oo="_reactListening"+Math.random().toString(36).slice(2);function rc(t){if(!t[oo]){t[oo]=!0,Mf.forEach(function(n){n!=="selectionchange"&&(d1.has(n)||ic(n,!1,t),ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[oo]||(e[oo]=!0,ic("selectionchange",!1,e))}}function q0(t,e,n,i){switch(up(e)){case 2:var l=j1;break;case 8:l=L1;break;default:l=vc}n=l.bind(null,e,n,t),l=void 0,!Cs||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),i?l!==void 0?t.addEventListener(e,n,{capture:!0,passive:l}):t.addEventListener(e,n,!0):l!==void 0?t.addEventListener(e,n,{passive:l}):t.addEventListener(e,n,!1)}function lc(t,e,n,i,l){var u=i;if((e&1)===0&&(e&2)===0&&i!==null)t:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var g=i.stateNode.containerInfo;if(g===l)break;if(d===4)for(d=i.return;d!==null;){var T=d.tag;if((T===3||T===4)&&d.stateNode.containerInfo===l)return;d=d.return}for(;g!==null;){if(d=La(g),d===null)return;if(T=d.tag,T===5||T===6||T===26||T===27){i=u=d;continue t}g=g.parentNode}}i=i.return}Qf(function(){var M=u,L=As(n),Q=[];t:{var H=xh.get(t);if(H!==void 0){var P=Sl,ft=t;switch(t){case"keypress":if(vl(n)===0)break t;case"keydown":case"keyup":P=ob;break;case"focusin":ft="focus",P=Ds;break;case"focusout":ft="blur",P=Ds;break;case"beforeblur":case"afterblur":P=Ds;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=Km;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=cb;break;case mh:case bh:case yh:P=Fm;break;case vh:P=hb;break;case"scroll":case"scrollend":P=Zm;break;case"wheel":P=pb;break;case"copy":case"cut":case"paste":P=tb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Wf;break;case"toggle":case"beforetoggle":P=mb}var ot=(e&4)!==0,Mt=!ot&&(t==="scroll"||t==="scrollend"),_=ot?H!==null?H+"Capture":null:H;ot=[];for(var C=M,D;C!==null;){var $=C;if(D=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||D===null||_===null||($=Ji(C,_),$!=null&&ot.push(Mr(C,$,D))),Mt)break;C=C.return}0<ot.length&&(H=new P(H,ft,null,n,L),Q.push({event:H,listeners:ot}))}}if((e&7)===0){t:{if(H=t==="mouseover"||t==="pointerover",P=t==="mouseout"||t==="pointerout",H&&n!==Os&&(ft=n.relatedTarget||n.fromElement)&&(La(ft)||ft[ja]))break t;if((P||H)&&(H=L.window===L?L:(H=L.ownerDocument)?H.defaultView||H.parentWindow:window,P?(ft=n.relatedTarget||n.toElement,P=M,ft=ft?La(ft):null,ft!==null&&(Mt=h(ft),ot=ft.tag,ft!==Mt||ot!==5&&ot!==27&&ot!==6)&&(ft=null)):(P=null,ft=M),P!==ft)){if(ot=Kf,$="onMouseLeave",_="onMouseEnter",C="mouse",(t==="pointerout"||t==="pointerover")&&(ot=Wf,$="onPointerLeave",_="onPointerEnter",C="pointer"),Mt=P==null?H:Ki(P),D=ft==null?H:Ki(ft),H=new ot($,C+"leave",P,n,L),H.target=Mt,H.relatedTarget=D,$=null,La(L)===M&&(ot=new ot(_,C+"enter",ft,n,L),ot.target=D,ot.relatedTarget=Mt,$=ot),Mt=$,P&&ft)e:{for(ot=P,_=ft,C=0,D=ot;D;D=Si(D))C++;for(D=0,$=_;$;$=Si($))D++;for(;0<C-D;)ot=Si(ot),C--;for(;0<D-C;)_=Si(_),D--;for(;C--;){if(ot===_||_!==null&&ot===_.alternate)break e;ot=Si(ot),_=Si(_)}ot=null}else ot=null;P!==null&&j0(Q,H,P,ot,!1),ft!==null&&Mt!==null&&j0(Q,Mt,ft,ot,!0)}}t:{if(H=M?Ki(M):window,P=H.nodeName&&H.nodeName.toLowerCase(),P==="select"||P==="input"&&H.type==="file")var et=rh;else if(ah(H))if(lh)et=Eb;else{et=Ob;var gt=Tb}else P=H.nodeName,!P||P.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?M&&Ts(M.elementType)&&(et=rh):et=Ab;if(et&&(et=et(t,M))){ih(Q,et,n,L);break t}gt&&gt(t,H,M),t==="focusout"&&M&&H.type==="number"&&M.memoizedProps.value!=null&&ws(H,"number",H.value)}switch(gt=M?Ki(M):window,t){case"focusin":(ah(gt)||gt.contentEditable==="true")&&(Wa=gt,Ps=M,ir=null);break;case"focusout":ir=Ps=Wa=null;break;case"mousedown":Us=!0;break;case"contextmenu":case"mouseup":case"dragend":Us=!1,ph(Q,n,L);break;case"selectionchange":if(_b)break;case"keydown":case"keyup":ph(Q,n,L)}var nt;if(zs)t:{switch(t){case"compositionstart":var ut="onCompositionStart";break t;case"compositionend":ut="onCompositionEnd";break t;case"compositionupdate":ut="onCompositionUpdate";break t}ut=void 0}else Ja?eh(t,n)&&(ut="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(ut="onCompositionStart");ut&&(Ff&&n.locale!=="ko"&&(Ja||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&Ja&&(nt=Zf()):(Gn=L,_s="value"in Gn?Gn.value:Gn.textContent,Ja=!0)),gt=so(M,ut),0<gt.length&&(ut=new Jf(ut,t,null,n,L),Q.push({event:ut,listeners:gt}),nt?ut.data=nt:(nt=nh(n),nt!==null&&(ut.data=nt)))),(nt=yb?vb(t,n):xb(t,n))&&(ut=so(M,"onBeforeInput"),0<ut.length&&(gt=new Jf("onBeforeInput","beforeinput",null,n,L),Q.push({event:gt,listeners:ut}),gt.data=nt)),c1(Q,t,M,n,L)}U0(Q,e)})}function Mr(t,e,n){return{instance:t,listener:e,currentTarget:n}}function so(t,e){for(var n=e+"Capture",i=[];t!==null;){var l=t,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=Ji(t,n),l!=null&&i.unshift(Mr(t,l,u)),l=Ji(t,e),l!=null&&i.push(Mr(t,l,u))),t.tag===3)return i;t=t.return}return[]}function Si(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function j0(t,e,n,i,l){for(var u=e._reactName,d=[];n!==null&&n!==i;){var g=n,T=g.alternate,M=g.stateNode;if(g=g.tag,T!==null&&T===i)break;g!==5&&g!==26&&g!==27||M===null||(T=M,l?(M=Ji(n,u),M!=null&&d.unshift(Mr(n,M,T))):l||(M=Ji(n,u),M!=null&&d.push(Mr(n,M,T)))),n=n.return}d.length!==0&&t.push({event:e,listeners:d})}var p1=/\r\n?/g,g1=/\u0000|\uFFFD/g;function L0(t){return(typeof t=="string"?t:""+t).replace(p1,`
`).replace(g1,"")}function $0(t,e){return e=L0(e),L0(t)===e}function uo(){}function Dt(t,e,n,i,l,u){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||Za(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&Za(t,""+i);break;case"className":pl(t,"class",i);break;case"tabIndex":pl(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":pl(t,n,i);break;case"style":Yf(t,i,u);break;case"data":if(e!=="object"){pl(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=bl(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(e!=="input"&&Dt(t,e,"name",l.name,l,null),Dt(t,e,"formEncType",l.formEncType,l,null),Dt(t,e,"formMethod",l.formMethod,l,null),Dt(t,e,"formTarget",l.formTarget,l,null)):(Dt(t,e,"encType",l.encType,l,null),Dt(t,e,"method",l.method,l,null),Dt(t,e,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=bl(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=uo);break;case"onScroll":i!=null&&xt("scroll",t);break;case"onScrollEnd":i!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=bl(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":xt("beforetoggle",t),xt("toggle",t),dl(t,"popover",i);break;case"xlinkActuate":Sn(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Sn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Sn(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Sn(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Sn(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Sn(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Sn(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Sn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Sn(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":dl(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Xm.get(n)||n,dl(t,n,i))}}function oc(t,e,n,i,l,u){switch(n){case"style":Yf(t,i,u);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"children":typeof i=="string"?Za(t,i):(typeof i=="number"||typeof i=="bigint")&&Za(t,""+i);break;case"onScroll":i!=null&&xt("scroll",t);break;case"onScrollEnd":i!=null&&xt("scrollend",t);break;case"onClick":i!=null&&(t.onclick=uo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zf.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),e=n.slice(2,l?n.length-7:void 0),u=t[Se]||null,u=u!=null?u[n]:null,typeof u=="function"&&t.removeEventListener(e,u,l),typeof i=="function")){typeof u!="function"&&u!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,l);break t}n in t?t[n]=i:i===!0?t.setAttribute(n,""):dl(t,n,i)}}}function de(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var i=!1,l=!1,u;for(u in n)if(n.hasOwnProperty(u)){var d=n[u];if(d!=null)switch(u){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Dt(t,e,u,d,n,null)}}l&&Dt(t,e,"srcSet",n.srcSet,n,null),i&&Dt(t,e,"src",n.src,n,null);return;case"input":xt("invalid",t);var g=u=d=l=null,T=null,M=null;for(i in n)if(n.hasOwnProperty(i)){var L=n[i];if(L!=null)switch(i){case"name":l=L;break;case"type":d=L;break;case"checked":T=L;break;case"defaultChecked":M=L;break;case"value":u=L;break;case"defaultValue":g=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(s(137,e));break;default:Dt(t,e,i,L,n,null)}}jf(t,u,g,T,M,d,l,!1),gl(t);return;case"select":xt("invalid",t),i=d=u=null;for(l in n)if(n.hasOwnProperty(l)&&(g=n[l],g!=null))switch(l){case"value":u=g;break;case"defaultValue":d=g;break;case"multiple":i=g;default:Dt(t,e,l,g,n,null)}e=u,n=d,t.multiple=!!i,e!=null?Qa(t,!!i,e,!1):n!=null&&Qa(t,!!i,n,!0);return;case"textarea":xt("invalid",t),u=l=i=null;for(d in n)if(n.hasOwnProperty(d)&&(g=n[d],g!=null))switch(d){case"value":i=g;break;case"defaultValue":l=g;break;case"children":u=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(s(91));break;default:Dt(t,e,d,g,n,null)}$f(t,i,l,u),gl(t);return;case"option":for(T in n)if(n.hasOwnProperty(T)&&(i=n[T],i!=null))switch(T){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Dt(t,e,T,i,n,null)}return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(i=0;i<Dr.length;i++)xt(Dr[i],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in n)if(n.hasOwnProperty(M)&&(i=n[M],i!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Dt(t,e,M,i,n,null)}return;default:if(Ts(e)){for(L in n)n.hasOwnProperty(L)&&(i=n[L],i!==void 0&&oc(t,e,L,i,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(i=n[g],i!=null&&Dt(t,e,g,i,n,null))}function m1(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,d=null,g=null,T=null,M=null,L=null;for(P in n){var Q=n[P];if(n.hasOwnProperty(P)&&Q!=null)switch(P){case"checked":break;case"value":break;case"defaultValue":T=Q;default:i.hasOwnProperty(P)||Dt(t,e,P,null,i,Q)}}for(var H in i){var P=i[H];if(Q=n[H],i.hasOwnProperty(H)&&(P!=null||Q!=null))switch(H){case"type":u=P;break;case"name":l=P;break;case"checked":M=P;break;case"defaultChecked":L=P;break;case"value":d=P;break;case"defaultValue":g=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(s(137,e));break;default:P!==Q&&Dt(t,e,H,P,i,Q)}}Ss(t,d,g,T,M,L,u,l);return;case"select":P=d=g=H=null;for(u in n)if(T=n[u],n.hasOwnProperty(u)&&T!=null)switch(u){case"value":break;case"multiple":P=T;default:i.hasOwnProperty(u)||Dt(t,e,u,null,i,T)}for(l in i)if(u=i[l],T=n[l],i.hasOwnProperty(l)&&(u!=null||T!=null))switch(l){case"value":H=u;break;case"defaultValue":g=u;break;case"multiple":d=u;default:u!==T&&Dt(t,e,l,u,i,T)}e=g,n=d,i=P,H!=null?Qa(t,!!n,H,!1):!!i!=!!n&&(e!=null?Qa(t,!!n,e,!0):Qa(t,!!n,n?[]:"",!1));return;case"textarea":P=H=null;for(g in n)if(l=n[g],n.hasOwnProperty(g)&&l!=null&&!i.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Dt(t,e,g,null,i,l)}for(d in i)if(l=i[d],u=n[d],i.hasOwnProperty(d)&&(l!=null||u!=null))switch(d){case"value":H=l;break;case"defaultValue":P=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==u&&Dt(t,e,d,l,i,u)}Lf(t,H,P);return;case"option":for(var ft in n)if(H=n[ft],n.hasOwnProperty(ft)&&H!=null&&!i.hasOwnProperty(ft))switch(ft){case"selected":t.selected=!1;break;default:Dt(t,e,ft,null,i,H)}for(T in i)if(H=i[T],P=n[T],i.hasOwnProperty(T)&&H!==P&&(H!=null||P!=null))switch(T){case"selected":t.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Dt(t,e,T,H,i,P)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in n)H=n[ot],n.hasOwnProperty(ot)&&H!=null&&!i.hasOwnProperty(ot)&&Dt(t,e,ot,null,i,H);for(M in i)if(H=i[M],P=n[M],i.hasOwnProperty(M)&&H!==P&&(H!=null||P!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,e));break;default:Dt(t,e,M,H,i,P)}return;default:if(Ts(e)){for(var Mt in n)H=n[Mt],n.hasOwnProperty(Mt)&&H!==void 0&&!i.hasOwnProperty(Mt)&&oc(t,e,Mt,void 0,i,H);for(L in i)H=i[L],P=n[L],!i.hasOwnProperty(L)||H===P||H===void 0&&P===void 0||oc(t,e,L,H,i,P);return}}for(var _ in n)H=n[_],n.hasOwnProperty(_)&&H!=null&&!i.hasOwnProperty(_)&&Dt(t,e,_,null,i,H);for(Q in i)H=i[Q],P=n[Q],!i.hasOwnProperty(Q)||H===P||H==null&&P==null||Dt(t,e,Q,H,i,P)}var sc=null,uc=null;function co(t){return t.nodeType===9?t:t.ownerDocument}function G0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Y0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function cc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fc=null;function b1(){var t=window.event;return t&&t.type==="popstate"?t===fc?!1:(fc=t,!0):(fc=null,!1)}var X0=typeof setTimeout=="function"?setTimeout:void 0,y1=typeof clearTimeout=="function"?clearTimeout:void 0,Q0=typeof Promise=="function"?Promise:void 0,v1=typeof queueMicrotask=="function"?queueMicrotask:typeof Q0<"u"?function(t){return Q0.resolve(null).then(t).catch(x1)}:X0;function x1(t){setTimeout(function(){throw t})}function ra(t){return t==="head"}function Z0(t,e){var n=e,i=0,l=0;do{var u=n.nextSibling;if(t.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(0<i&&8>i){n=i;var d=t.ownerDocument;if(n&1&&zr(d.documentElement),n&2&&zr(d.body),n&4)for(n=d.head,zr(n),d=n.firstChild;d;){var g=d.nextSibling,T=d.nodeName;d[Vi]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&d.rel.toLowerCase()==="stylesheet"||n.removeChild(d),d=g}}if(l===0){t.removeChild(u),Lr(e);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:i=n.charCodeAt(0)-48;else i=0;n=u}while(n);Lr(e)}function hc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":hc(n),bs(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function S1(t,e,n,i){for(;t.nodeType===1;){var l=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Vi])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=an(t.nextSibling),t===null)break}return null}function w1(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=an(t.nextSibling),t===null))return null;return t}function dc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function T1(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function an(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var pc=null;function V0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function K0(t,e,n){switch(e=co(n),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function zr(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);bs(t)}var We=new Map,J0=new Set;function fo(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Nn=J.d;J.d={f:O1,r:A1,D:E1,C:C1,L:_1,m:k1,X:D1,S:R1,M:M1};function O1(){var t=Nn.f(),e=no();return t||e}function A1(t){var e=$a(t);e!==null&&e.tag===5&&e.type==="form"?md(e):Nn.r(t)}var wi=typeof document>"u"?null:document;function W0(t,e,n){var i=wi;if(i&&typeof e=="string"&&e){var l=Ye(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),J0.has(l)||(J0.add(l),t={rel:t,crossOrigin:n,href:e},i.querySelector(l)===null&&(e=i.createElement("link"),de(e,"link",t),le(e),i.head.appendChild(e)))}}function E1(t){Nn.D(t),W0("dns-prefetch",t,null)}function C1(t,e){Nn.C(t,e),W0("preconnect",t,e)}function _1(t,e,n){Nn.L(t,e,n);var i=wi;if(i&&t&&e){var l='link[rel="preload"][as="'+Ye(e)+'"]';e==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Ye(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Ye(n.imageSizes)+'"]')):l+='[href="'+Ye(t)+'"]';var u=l;switch(e){case"style":u=Ti(t);break;case"script":u=Oi(t)}We.has(u)||(t=E({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),We.set(u,t),i.querySelector(l)!==null||e==="style"&&i.querySelector(Br(u))||e==="script"&&i.querySelector(Nr(u))||(e=i.createElement("link"),de(e,"link",t),le(e),i.head.appendChild(e)))}}function k1(t,e){Nn.m(t,e);var n=wi;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+Ye(i)+'"][href="'+Ye(t)+'"]',u=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Oi(t)}if(!We.has(u)&&(t=E({rel:"modulepreload",href:t},e),We.set(u,t),n.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Nr(u)))return}i=n.createElement("link"),de(i,"link",t),le(i),n.head.appendChild(i)}}}function R1(t,e,n){Nn.S(t,e,n);var i=wi;if(i&&t){var l=Ga(i).hoistableStyles,u=Ti(t);e=e||"default";var d=l.get(u);if(!d){var g={loading:0,preload:null};if(d=i.querySelector(Br(u)))g.loading=5;else{t=E({rel:"stylesheet",href:t,"data-precedence":e},n),(n=We.get(u))&&gc(t,n);var T=d=i.createElement("link");le(T),de(T,"link",t),T._p=new Promise(function(M,L){T.onload=M,T.onerror=L}),T.addEventListener("load",function(){g.loading|=1}),T.addEventListener("error",function(){g.loading|=2}),g.loading|=4,ho(d,e,i)}d={type:"stylesheet",instance:d,count:1,state:g},l.set(u,d)}}}function D1(t,e){Nn.X(t,e);var n=wi;if(n&&t){var i=Ga(n).hoistableScripts,l=Oi(t),u=i.get(l);u||(u=n.querySelector(Nr(l)),u||(t=E({src:t,async:!0},e),(e=We.get(l))&&mc(t,e),u=n.createElement("script"),le(u),de(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(l,u))}}function M1(t,e){Nn.M(t,e);var n=wi;if(n&&t){var i=Ga(n).hoistableScripts,l=Oi(t),u=i.get(l);u||(u=n.querySelector(Nr(l)),u||(t=E({src:t,async:!0,type:"module"},e),(e=We.get(l))&&mc(t,e),u=n.createElement("script"),le(u),de(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(l,u))}}function F0(t,e,n,i){var l=(l=st.current)?fo(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Ti(n.href),n=Ga(l).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Ti(n.href);var u=Ga(l).hoistableStyles,d=u.get(t);if(d||(l=l.ownerDocument||l,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,d),(u=l.querySelector(Br(t)))&&!u._p&&(d.instance=u,d.state.loading=5),We.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},We.set(t,n),u||z1(l,t,n,d.state))),e&&i===null)throw Error(s(528,""));return d}if(e&&i!==null)throw Error(s(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Oi(n),n=Ga(l).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ti(t){return'href="'+Ye(t)+'"'}function Br(t){return'link[rel="stylesheet"]['+t+"]"}function I0(t){return E({},t,{"data-precedence":t.precedence,precedence:null})}function z1(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),de(e,"link",n),le(e),t.head.appendChild(e))}function Oi(t){return'[src="'+Ye(t)+'"]'}function Nr(t){return"script[async]"+t}function tp(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Ye(n.href)+'"]');if(i)return e.instance=i,le(i),i;var l=E({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),le(i),de(i,"style",l),ho(i,n.precedence,t),e.instance=i;case"stylesheet":l=Ti(n.href);var u=t.querySelector(Br(l));if(u)return e.state.loading|=4,e.instance=u,le(u),u;i=I0(n),(l=We.get(l))&&gc(i,l),u=(t.ownerDocument||t).createElement("link"),le(u);var d=u;return d._p=new Promise(function(g,T){d.onload=g,d.onerror=T}),de(u,"link",i),e.state.loading|=4,ho(u,n.precedence,t),e.instance=u;case"script":return u=Oi(n.src),(l=t.querySelector(Nr(u)))?(e.instance=l,le(l),l):(i=n,(l=We.get(u))&&(i=E({},n),mc(i,l)),t=t.ownerDocument||t,l=t.createElement("script"),le(l),de(l,"link",i),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,ho(i,n.precedence,t));return e.instance}function ho(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,u=l,d=0;d<i.length;d++){var g=i[d];if(g.dataset.precedence===e)u=g;else if(u!==l)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function gc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function mc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var po=null;function ep(t,e,n){if(po===null){var i=new Map,l=po=new Map;l.set(n,i)}else l=po,i=l.get(n),i||(i=new Map,l.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),l=0;l<n.length;l++){var u=n[l];if(!(u[Vi]||u[me]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var d=u.getAttribute(e)||"";d=t+d;var g=i.get(d);g?g.push(u):i.set(d,[u])}}return i}function np(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function B1(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function ap(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Hr=null;function N1(){}function H1(t,e,n){if(Hr===null)throw Error(s(475));var i=Hr;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var l=Ti(n.href),u=t.querySelector(Br(l));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(i.count++,i=go.bind(i),t.then(i,i)),e.state.loading|=4,e.instance=u,le(u);return}u=t.ownerDocument||t,n=I0(n),(l=We.get(l))&&gc(n,l),u=u.createElement("link"),le(u);var d=u;d._p=new Promise(function(g,T){d.onload=g,d.onerror=T}),de(u,"link",n),e.instance=u}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(i.count++,e=go.bind(i),t.addEventListener("load",e),t.addEventListener("error",e))}}function P1(){if(Hr===null)throw Error(s(475));var t=Hr;return t.stylesheets&&t.count===0&&bc(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&bc(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function go(){if(this.count--,this.count===0){if(this.stylesheets)bc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mo=null;function bc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mo=new Map,e.forEach(U1,t),mo=null,go.call(t))}function U1(t,e){if(!(e.state.loading&4)){var n=mo.get(t);if(n)var i=n.get(null);else{n=new Map,mo.set(t,n);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var d=l[u];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),i=d)}i&&n.set(null,i)}l=e.instance,d=l.getAttribute("data-precedence"),u=n.get(d)||i,u===i&&n.set(null,l),n.set(d,l),this.count++,i=go.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),u?u.parentNode.insertBefore(l,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var Pr={$$typeof:R,Provider:null,Consumer:null,_currentValue:lt,_currentValue2:lt,_threadCount:0};function q1(t,e,n,i,l,u,d,g){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ds(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ds(0),this.hiddenUpdates=ds(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function ip(t,e,n,i,l,u,d,g,T,M,L,Q){return t=new q1(t,e,n,d,g,T,M,Q),e=1,u===!0&&(e|=24),u=De(3,null,null,e),t.current=u,u.stateNode=t,e=Fs(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:i,isDehydrated:n,cache:e},nu(u),t}function rp(t){return t?(t=ei,t):ei}function lp(t,e,n,i,l,u){l=rp(l),i.context===null?i.context=l:i.pendingContext=l,i=Qn(e),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Zn(t,i,e),n!==null&&(He(n,t,e),dr(n,t,e))}function op(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yc(t,e){op(t,e),(t=t.alternate)&&op(t,e)}function sp(t){if(t.tag===13){var e=ti(t,67108864);e!==null&&He(e,t,67108864),yc(t,67108864)}}var bo=!0;function j1(t,e,n,i){var l=j.T;j.T=null;var u=J.p;try{J.p=2,vc(t,e,n,i)}finally{J.p=u,j.T=l}}function L1(t,e,n,i){var l=j.T;j.T=null;var u=J.p;try{J.p=8,vc(t,e,n,i)}finally{J.p=u,j.T=l}}function vc(t,e,n,i){if(bo){var l=xc(i);if(l===null)lc(t,e,i,yo,n),cp(t,i);else if(G1(l,t,e,n,i))i.stopPropagation();else if(cp(t,i),e&4&&-1<$1.indexOf(t)){for(;l!==null;){var u=$a(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var d=ga(u.pendingLanes);if(d!==0){var g=u;for(g.pendingLanes|=2,g.entangledLanes|=2;d;){var T=1<<31-ke(d);g.entanglements[1]|=T,d&=~T}dn(u),(_t&6)===0&&(to=sn()+500,Rr(0))}}break;case 13:g=ti(u,2),g!==null&&He(g,u,2),no(),yc(u,2)}if(u=xc(i),u===null&&lc(t,e,i,yo,n),u===l)break;l=u}l!==null&&i.stopPropagation()}else lc(t,e,i,null,n)}}function xc(t){return t=As(t),Sc(t)}var yo=null;function Sc(t){if(yo=null,t=La(t),t!==null){var e=h(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=m(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return yo=t,null}function up(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Cm()){case Tf:return 2;case Of:return 8;case ul:case _m:return 32;case Af:return 268435456;default:return 32}default:return 32}}var wc=!1,la=null,oa=null,sa=null,Ur=new Map,qr=new Map,ua=[],$1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cp(t,e){switch(t){case"focusin":case"focusout":la=null;break;case"dragenter":case"dragleave":oa=null;break;case"mouseover":case"mouseout":sa=null;break;case"pointerover":case"pointerout":Ur.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qr.delete(e.pointerId)}}function jr(t,e,n,i,l,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:u,targetContainers:[l]},e!==null&&(e=$a(e),e!==null&&sp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function G1(t,e,n,i,l){switch(e){case"focusin":return la=jr(la,t,e,n,i,l),!0;case"dragenter":return oa=jr(oa,t,e,n,i,l),!0;case"mouseover":return sa=jr(sa,t,e,n,i,l),!0;case"pointerover":var u=l.pointerId;return Ur.set(u,jr(Ur.get(u)||null,t,e,n,i,l)),!0;case"gotpointercapture":return u=l.pointerId,qr.set(u,jr(qr.get(u)||null,t,e,n,i,l)),!0}return!1}function fp(t){var e=La(t.target);if(e!==null){var n=h(e);if(n!==null){if(e=n.tag,e===13){if(e=m(n),e!==null){t.blockedOn=e,Hm(t.priority,function(){if(n.tag===13){var i=Ne();i=ps(i);var l=ti(n,i);l!==null&&He(l,n,i),yc(n,i)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xc(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Os=i,n.target.dispatchEvent(i),Os=null}else return e=$a(n),e!==null&&sp(e),t.blockedOn=n,!1;e.shift()}return!0}function hp(t,e,n){vo(t)&&n.delete(e)}function Y1(){wc=!1,la!==null&&vo(la)&&(la=null),oa!==null&&vo(oa)&&(oa=null),sa!==null&&vo(sa)&&(sa=null),Ur.forEach(hp),qr.forEach(hp)}function xo(t,e){t.blockedOn===e&&(t.blockedOn=null,wc||(wc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Y1)))}var So=null;function dp(t){So!==t&&(So=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){So===t&&(So=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],l=t[e+2];if(typeof i!="function"){if(Sc(i||n)===null)continue;break}var u=$a(n);u!==null&&(t.splice(e,3),e-=3,Su(u,{pending:!0,data:l,method:n.method,action:i},i,l))}}))}function Lr(t){function e(T){return xo(T,t)}la!==null&&xo(la,t),oa!==null&&xo(oa,t),sa!==null&&xo(sa,t),Ur.forEach(e),qr.forEach(e);for(var n=0;n<ua.length;n++){var i=ua[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<ua.length&&(n=ua[0],n.blockedOn===null);)fp(n),n.blockedOn===null&&ua.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var l=n[i],u=n[i+1],d=l[Se]||null;if(typeof u=="function")d||dp(n);else if(d){var g=null;if(u&&u.hasAttribute("formAction")){if(l=u,d=u[Se]||null)g=d.formAction;else if(Sc(l)!==null)continue}else g=d.action;typeof g=="function"?n[i+1]=g:(n.splice(i,3),i-=3),dp(n)}}}function Tc(t){this._internalRoot=t}wo.prototype.render=Tc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var n=e.current,i=Ne();lp(n,i,t,e,null,null)},wo.prototype.unmount=Tc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;lp(t.current,2,null,t,null,null),no(),e[ja]=null}};function wo(t){this._internalRoot=t}wo.prototype.unstable_scheduleHydration=function(t){if(t){var e=Rf();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ua.length&&e!==0&&e<ua[n].priority;n++);ua.splice(n,0,t),n===0&&fp(t)}};var pp=r.version;if(pp!=="19.1.0")throw Error(s(527,pp,"19.1.0"));J.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=S(e),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var X1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var To=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!To.isDisabled&&To.supportsFiber)try{Xi=To.inject(X1),_e=To}catch{}}return Gr.createRoot=function(t,e){if(!c(t))throw Error(s(299));var n=!1,i="",l=Rd,u=Dd,d=Md,g=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(d=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(g=e.unstable_transitionCallbacks)),e=ip(t,1,!1,null,null,n,i,l,u,d,g,null),t[ja]=e.current,rc(t),new Tc(e)},Gr.hydrateRoot=function(t,e,n){if(!c(t))throw Error(s(299));var i=!1,l="",u=Rd,d=Dd,g=Md,T=null,M=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks),n.formState!==void 0&&(M=n.formState)),e=ip(t,1,!0,e,n??null,i,l,u,d,g,T,M),e.context=rp(null),n=e.current,i=Ne(),i=ps(i),l=Qn(i),l.callback=null,Zn(n,l,i),n=i,e.current.lanes=n,Zi(e,n),dn(e),t[ja]=e.current,rc(t),new wo(e)},Gr.version="19.1.0",Gr}var Ap;function ay(){if(Ap)return Ec.exports;Ap=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Ec.exports=ny(),Ec.exports}var iy=ay();const ry=()=>{const[a,r]=ct.useState({width:typeof window<"u"?window.innerWidth:0,height:typeof window<"u"?window.innerHeight:0});ct.useEffect(()=>{function h(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",h),h(),()=>window.removeEventListener("resize",h)},[]);const o=a.width<=768||a.height<=730;return{height:o?300:600,width:o?300:600,windowSize:a,isMobile:o}};function ie(a,r){r===void 0&&(r={});var o=r.insertAt;if(a&&typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",o==="top"&&s.firstChild?s.insertBefore(c,s.firstChild):s.appendChild(c),c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a))}}ie(`.react-loading-indicator-normalize,
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
}`);var yn=function(){return yn=Object.assign||function(a){for(var r,o=1,s=arguments.length;o<s;o++)for(var c in r=arguments[o])Object.prototype.hasOwnProperty.call(r,c)&&(a[c]=r[c]);return a},yn.apply(this,arguments)};function jo(a){return jo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},jo(a)}var ly=/^\s+/,oy=/\s+$/;function at(a,r){if(r=r||{},(a=a||"")instanceof at)return a;if(!(this instanceof at))return new at(a,r);var o=function(s){var c={r:0,g:0,b:0},h=1,m=null,x=null,S=null,y=!1,E=!1;typeof s=="string"&&(s=function(N){N=N.replace(ly,"").replace(oy,"").toLowerCase();var w,Y=!1;if(Lc[N])N=Lc[N],Y=!0;else if(N=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(w=rn.rgb.exec(N))?{r:w[1],g:w[2],b:w[3]}:(w=rn.rgba.exec(N))?{r:w[1],g:w[2],b:w[3],a:w[4]}:(w=rn.hsl.exec(N))?{h:w[1],s:w[2],l:w[3]}:(w=rn.hsla.exec(N))?{h:w[1],s:w[2],l:w[3],a:w[4]}:(w=rn.hsv.exec(N))?{h:w[1],s:w[2],v:w[3]}:(w=rn.hsva.exec(N))?{h:w[1],s:w[2],v:w[3],a:w[4]}:(w=rn.hex8.exec(N))?{r:Pe(w[1]),g:Pe(w[2]),b:Pe(w[3]),a:Dp(w[4]),format:Y?"name":"hex8"}:(w=rn.hex6.exec(N))?{r:Pe(w[1]),g:Pe(w[2]),b:Pe(w[3]),format:Y?"name":"hex"}:(w=rn.hex4.exec(N))?{r:Pe(w[1]+""+w[1]),g:Pe(w[2]+""+w[2]),b:Pe(w[3]+""+w[3]),a:Dp(w[4]+""+w[4]),format:Y?"name":"hex8"}:(w=rn.hex3.exec(N))?{r:Pe(w[1]+""+w[1]),g:Pe(w[2]+""+w[2]),b:Pe(w[3]+""+w[3]),format:Y?"name":"hex"}:!1}(s)),jo(s)=="object"&&(Hn(s.r)&&Hn(s.g)&&Hn(s.b)?(k=s.r,B=s.g,G=s.b,c={r:255*$t(k,255),g:255*$t(B,255),b:255*$t(G,255)},y=!0,E=String(s.r).substr(-1)==="%"?"prgb":"rgb"):Hn(s.h)&&Hn(s.s)&&Hn(s.v)?(m=Qr(s.s),x=Qr(s.v),c=function(N,w,Y){N=6*$t(N,360),w=$t(w,100),Y=$t(Y,100);var V=Math.floor(N),K=N-V,R=Y*(1-w),f=Y*(1-K*w),p=Y*(1-(1-K)*w),v=V%6,O=[Y,f,R,R,p,Y][v],z=[p,Y,Y,f,R,R][v],U=[R,R,p,Y,Y,f][v];return{r:255*O,g:255*z,b:255*U}}(s.h,m,x),y=!0,E="hsv"):Hn(s.h)&&Hn(s.s)&&Hn(s.l)&&(m=Qr(s.s),S=Qr(s.l),c=function(N,w,Y){var V,K,R;function f(O,z,U){return U<0&&(U+=1),U>1&&(U-=1),U<1/6?O+6*(z-O)*U:U<.5?z:U<2/3?O+(z-O)*(2/3-U)*6:O}if(N=$t(N,360),w=$t(w,100),Y=$t(Y,100),w===0)V=K=R=Y;else{var p=Y<.5?Y*(1+w):Y+w-Y*w,v=2*Y-p;V=f(v,p,N+1/3),K=f(v,p,N),R=f(v,p,N-1/3)}return{r:255*V,g:255*K,b:255*R}}(s.h,m,S),y=!0,E="hsl"),s.hasOwnProperty("a")&&(h=s.a));var k,B,G;return h=Sg(h),{ok:y,format:s.format||E,r:Math.min(255,Math.max(c.r,0)),g:Math.min(255,Math.max(c.g,0)),b:Math.min(255,Math.max(c.b,0)),a:h}}(a);this._originalInput=a,this._r=o.r,this._g=o.g,this._b=o.b,this._a=o.a,this._roundA=Math.round(100*this._a)/100,this._format=r.format||o.format,this._gradientType=r.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=o.ok}function Ep(a,r,o){a=$t(a,255),r=$t(r,255),o=$t(o,255);var s,c,h=Math.max(a,r,o),m=Math.min(a,r,o),x=(h+m)/2;if(h==m)s=c=0;else{var S=h-m;switch(c=x>.5?S/(2-h-m):S/(h+m),h){case a:s=(r-o)/S+(r<o?6:0);break;case r:s=(o-a)/S+2;break;case o:s=(a-r)/S+4}s/=6}return{h:s,s:c,l:x}}function Cp(a,r,o){a=$t(a,255),r=$t(r,255),o=$t(o,255);var s,c,h=Math.max(a,r,o),m=Math.min(a,r,o),x=h,S=h-m;if(c=h===0?0:S/h,h==m)s=0;else{switch(h){case a:s=(r-o)/S+(r<o?6:0);break;case r:s=(o-a)/S+2;break;case o:s=(a-r)/S+4}s/=6}return{h:s,s:c,v:x}}function _p(a,r,o,s){var c=[ln(Math.round(a).toString(16)),ln(Math.round(r).toString(16)),ln(Math.round(o).toString(16))];return s&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0):c.join("")}function kp(a,r,o,s){return[ln(wg(s)),ln(Math.round(a).toString(16)),ln(Math.round(r).toString(16)),ln(Math.round(o).toString(16))].join("")}function sy(a,r){r=r===0?0:r||10;var o=at(a).toHsl();return o.s-=r/100,o.s=Qo(o.s),at(o)}function uy(a,r){r=r===0?0:r||10;var o=at(a).toHsl();return o.s+=r/100,o.s=Qo(o.s),at(o)}function cy(a){return at(a).desaturate(100)}function fy(a,r){r=r===0?0:r||10;var o=at(a).toHsl();return o.l+=r/100,o.l=Qo(o.l),at(o)}function hy(a,r){r=r===0?0:r||10;var o=at(a).toRgb();return o.r=Math.max(0,Math.min(255,o.r-Math.round(-r/100*255))),o.g=Math.max(0,Math.min(255,o.g-Math.round(-r/100*255))),o.b=Math.max(0,Math.min(255,o.b-Math.round(-r/100*255))),at(o)}function dy(a,r){r=r===0?0:r||10;var o=at(a).toHsl();return o.l-=r/100,o.l=Qo(o.l),at(o)}function py(a,r){var o=at(a).toHsl(),s=(o.h+r)%360;return o.h=s<0?360+s:s,at(o)}function gy(a){var r=at(a).toHsl();return r.h=(r.h+180)%360,at(r)}function Rp(a,r){if(isNaN(r)||r<=0)throw new Error("Argument to polyad must be a positive number");for(var o=at(a).toHsl(),s=[at(a)],c=360/r,h=1;h<r;h++)s.push(at({h:(o.h+h*c)%360,s:o.s,l:o.l}));return s}function my(a){var r=at(a).toHsl(),o=r.h;return[at(a),at({h:(o+72)%360,s:r.s,l:r.l}),at({h:(o+216)%360,s:r.s,l:r.l})]}function by(a,r,o){r=r||6,o=o||30;var s=at(a).toHsl(),c=360/o,h=[at(a)];for(s.h=(s.h-(c*r>>1)+720)%360;--r;)s.h=(s.h+c)%360,h.push(at(s));return h}function yy(a,r){r=r||6;for(var o=at(a).toHsv(),s=o.h,c=o.s,h=o.v,m=[],x=1/r;r--;)m.push(at({h:s,s:c,v:h})),h=(h+x)%1;return m}at.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},getLuminance:function(){var a,r,o,s=this.toRgb();return a=s.r/255,r=s.g/255,o=s.b/255,.2126*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))},setAlpha:function(a){return this._a=Sg(a),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var a=Cp(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=Cp(this._r,this._g,this._b),r=Math.round(360*a.h),o=Math.round(100*a.s),s=Math.round(100*a.v);return this._a==1?"hsv("+r+", "+o+"%, "+s+"%)":"hsva("+r+", "+o+"%, "+s+"%, "+this._roundA+")"},toHsl:function(){var a=Ep(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=Ep(this._r,this._g,this._b),r=Math.round(360*a.h),o=Math.round(100*a.s),s=Math.round(100*a.l);return this._a==1?"hsl("+r+", "+o+"%, "+s+"%)":"hsla("+r+", "+o+"%, "+s+"%, "+this._roundA+")"},toHex:function(a){return _p(this._r,this._g,this._b,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(a){return function(r,o,s,c,h){var m=[ln(Math.round(r).toString(16)),ln(Math.round(o).toString(16)),ln(Math.round(s).toString(16)),ln(wg(c))];return h&&m[0].charAt(0)==m[0].charAt(1)&&m[1].charAt(0)==m[1].charAt(1)&&m[2].charAt(0)==m[2].charAt(1)&&m[3].charAt(0)==m[3].charAt(1)?m[0].charAt(0)+m[1].charAt(0)+m[2].charAt(0)+m[3].charAt(0):m.join("")}(this._r,this._g,this._b,this._a,a)},toHex8String:function(a){return"#"+this.toHex8(a)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*$t(this._r,255))+"%",g:Math.round(100*$t(this._g,255))+"%",b:Math.round(100*$t(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*$t(this._r,255))+"%, "+Math.round(100*$t(this._g,255))+"%, "+Math.round(100*$t(this._b,255))+"%)":"rgba("+Math.round(100*$t(this._r,255))+"%, "+Math.round(100*$t(this._g,255))+"%, "+Math.round(100*$t(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(vy[_p(this._r,this._g,this._b,!0)]||!1)},toFilter:function(a){var r="#"+kp(this._r,this._g,this._b,this._a),o=r,s=this._gradientType?"GradientType = 1, ":"";if(a){var c=at(a);o="#"+kp(c._r,c._g,c._b,c._a)}return"progid:DXImageTransform.Microsoft.gradient("+s+"startColorstr="+r+",endColorstr="+o+")"},toString:function(a){var r=!!a;a=a||this._format;var o=!1,s=this._a<1&&this._a>=0;return r||!s||a!=="hex"&&a!=="hex6"&&a!=="hex3"&&a!=="hex4"&&a!=="hex8"&&a!=="name"?(a==="rgb"&&(o=this.toRgbString()),a==="prgb"&&(o=this.toPercentageRgbString()),a!=="hex"&&a!=="hex6"||(o=this.toHexString()),a==="hex3"&&(o=this.toHexString(!0)),a==="hex4"&&(o=this.toHex8String(!0)),a==="hex8"&&(o=this.toHex8String()),a==="name"&&(o=this.toName()),a==="hsl"&&(o=this.toHslString()),a==="hsv"&&(o=this.toHsvString()),o||this.toHexString()):a==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return at(this.toString())},_applyModification:function(a,r){var o=a.apply(null,[this].concat([].slice.call(r)));return this._r=o._r,this._g=o._g,this._b=o._b,this.setAlpha(o._a),this},lighten:function(){return this._applyModification(fy,arguments)},brighten:function(){return this._applyModification(hy,arguments)},darken:function(){return this._applyModification(dy,arguments)},desaturate:function(){return this._applyModification(sy,arguments)},saturate:function(){return this._applyModification(uy,arguments)},greyscale:function(){return this._applyModification(cy,arguments)},spin:function(){return this._applyModification(py,arguments)},_applyCombination:function(a,r){return a.apply(null,[this].concat([].slice.call(r)))},analogous:function(){return this._applyCombination(by,arguments)},complement:function(){return this._applyCombination(gy,arguments)},monochromatic:function(){return this._applyCombination(yy,arguments)},splitcomplement:function(){return this._applyCombination(my,arguments)},triad:function(){return this._applyCombination(Rp,[3])},tetrad:function(){return this._applyCombination(Rp,[4])}},at.fromRatio=function(a,r){if(jo(a)=="object"){var o={};for(var s in a)a.hasOwnProperty(s)&&(o[s]=s==="a"?a[s]:Qr(a[s]));a=o}return at(a,r)},at.equals=function(a,r){return!(!a||!r)&&at(a).toRgbString()==at(r).toRgbString()},at.random=function(){return at.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},at.mix=function(a,r,o){o=o===0?0:o||50;var s=at(a).toRgb(),c=at(r).toRgb(),h=o/100;return at({r:(c.r-s.r)*h+s.r,g:(c.g-s.g)*h+s.g,b:(c.b-s.b)*h+s.b,a:(c.a-s.a)*h+s.a})},at.readability=function(a,r){var o=at(a),s=at(r);return(Math.max(o.getLuminance(),s.getLuminance())+.05)/(Math.min(o.getLuminance(),s.getLuminance())+.05)},at.isReadable=function(a,r,o){var s,c,h=at.readability(a,r);switch(c=!1,(s=function(m){var x,S;return x=((m=m||{level:"AA",size:"small"}).level||"AA").toUpperCase(),S=(m.size||"small").toLowerCase(),x!=="AA"&&x!=="AAA"&&(x="AA"),S!=="small"&&S!=="large"&&(S="small"),{level:x,size:S}}(o)).level+s.size){case"AAsmall":case"AAAlarge":c=h>=4.5;break;case"AAlarge":c=h>=3;break;case"AAAsmall":c=h>=7}return c},at.mostReadable=function(a,r,o){var s,c,h,m,x=null,S=0;c=(o=o||{}).includeFallbackColors,h=o.level,m=o.size;for(var y=0;y<r.length;y++)(s=at.readability(a,r[y]))>S&&(S=s,x=at(r[y]));return at.isReadable(a,x,{level:h,size:m})||!c?x:(o.includeFallbackColors=!1,at.mostReadable(a,["#fff","#000"],o))};var Lc=at.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},vy=at.hexNames=function(a){var r={};for(var o in a)a.hasOwnProperty(o)&&(r[a[o]]=o);return r}(Lc);function Sg(a){return a=parseFloat(a),(isNaN(a)||a<0||a>1)&&(a=1),a}function $t(a,r){(function(s){return typeof s=="string"&&s.indexOf(".")!=-1&&parseFloat(s)===1})(a)&&(a="100%");var o=function(s){return typeof s=="string"&&s.indexOf("%")!=-1}(a);return a=Math.min(r,Math.max(0,parseFloat(a))),o&&(a=parseInt(a*r,10)/100),Math.abs(a-r)<1e-6?1:a%r/parseFloat(r)}function Qo(a){return Math.min(1,Math.max(0,a))}function Pe(a){return parseInt(a,16)}function ln(a){return a.length==1?"0"+a:""+a}function Qr(a){return a<=1&&(a=100*a+"%"),a}function wg(a){return Math.round(255*parseFloat(a)).toString(16)}function Dp(a){return Pe(a)/255}var fa,Oo,Ao,rn=(Oo="[\\s|\\(]+("+(fa="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+fa+")[,|\\s]+("+fa+")\\s*\\)?",Ao="[\\s|\\(]+("+fa+")[,|\\s]+("+fa+")[,|\\s]+("+fa+")[,|\\s]+("+fa+")\\s*\\)?",{CSS_UNIT:new RegExp(fa),rgb:new RegExp("rgb"+Oo),rgba:new RegExp("rgba"+Ao),hsl:new RegExp("hsl"+Oo),hsla:new RegExp("hsla"+Ao),hsv:new RegExp("hsv"+Oo),hsva:new RegExp("hsva"+Ao),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Hn(a){return!!rn.CSS_UNIT.exec(a)}var xy=function(a,r){var o=(typeof a=="string"?parseInt(a):a)||0;if(o>=-5&&o<=5){var s=o,c=parseFloat(r),h=c+s*(c/5)*-1;return(h==0||h<=Number.EPSILON)&&(h=.1),{animationPeriod:h+"s"}}return{animationPeriod:r}},Sy=function(a,r){var o=a||{},s="";switch(r){case"small":s="12px";break;case"medium":s="16px";break;case"large":s="20px";break;default:s=void 0}var c={};if(o.fontSize){var h=o.fontSize;c=function(m,x){var S={};for(var y in m)Object.prototype.hasOwnProperty.call(m,y)&&x.indexOf(y)<0&&(S[y]=m[y]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function"){var E=0;for(y=Object.getOwnPropertySymbols(m);E<y.length;E++)x.indexOf(y[E])<0&&Object.prototype.propertyIsEnumerable.call(m,y[E])&&(S[y[E]]=m[y[E]])}return S}(o,["fontSize"]),s=h}return{fontSize:s,styles:c}},wy={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Ty=function(a){var r=a.className,o=a.text,s=a.textColor,c=a.staticText,h=a.style;return o?Jt.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(r||"").trim(),style:yn(yn(yn({},c&&wy),s&&{color:s,mixBlendMode:"unset"}),h&&h)},typeof o=="string"&&o.length?o:"loading"):null},Tg="rgb(50, 205, 50)";function Oy(a,r){if(r===void 0&&(r=0),a.length===0)throw new Error("Input array cannot be empty!");var o=[];return function s(c,h){return h===void 0&&(h=0),o.push.apply(o,c),o.length<h&&s(o,h),o.slice(0,h)}(a,r)}ie(`.atom-rli-bounding-box {
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
}`);at(Tg).toRgb();Array.from({length:4},function(a,r){return"--atom-phase".concat(r+1,"-rgb")});ie(`.commet-rli-bounding-box {
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
}`);var Ai=Array.from({length:4},function(a,r){return"--commet-phase".concat(r+1,"-color")}),Ay=function(a){var r,o=Sy(a?.style,a?.size),s=o.styles,c=o.fontSize,h=a?.easing,m=xy(a?.speedPlus,"1.2s").animationPeriod,x=function(S){var y={};if(S instanceof Array){for(var E=Oy(S,Ai.length),k=0;k<E.length&&!(k>=4);k++)y[Ai[k]]=E[k];return y}try{if(typeof S!="string")throw new Error("Color String expected");for(var B=0;B<Ai.length;B++)y[Ai[B]]=S}catch(G){for(G instanceof Error?console.warn("[".concat(G.message,']: Received "').concat(typeof S,'" instead with value, ').concat(JSON.stringify(S))):console.warn("".concat(JSON.stringify(S)," received in <Commet /> indicator cannot be processed. Using default instead!")),B=0;B<Ai.length;B++)y[Ai[B]]=Tg}return y}((r=a?.color)!==null&&r!==void 0?r:"");return Jt.createElement("span",{className:"rli-d-i-b commet-rli-bounding-box",style:yn(yn(yn(yn(yn({},c&&{fontSize:c}),m&&{"--rli-animation-duration":m}),h&&{"--rli-animation-function":h}),x),s),role:"status","aria-live":"polite","aria-label":"Loading"},Jt.createElement("span",{className:"rli-d-i-b commet-indicator"},Jt.createElement("span",{className:"rli-d-i-b commet-box"},Jt.createElement("span",{className:"rli-d-i-b commet-trail trail1"}),Jt.createElement("span",{className:"rli-d-i-b  commetball-box"})),Jt.createElement("span",{className:"rli-d-i-b commet-box"},Jt.createElement("span",{className:"rli-d-i-b commet-trail trail2"}),Jt.createElement("span",{className:"rli-d-i-b commetball-box"})),Jt.createElement(Ty,{className:"commet-text",text:a?.text,textColor:a?.textColor})))};ie(`.OP-annulus-rli-bounding-box {
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
}`);Array.from({length:4},function(a,r){return"--OP-annulus-phase".concat(r+1,"-color")});function Rc(a){return a&&a.Math===Math&&a}ie(`.OP-dotted-rli-bounding-box {
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
}`);Rc(typeof window=="object"&&window)||Rc(typeof self=="object"&&self)||Rc(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(a,r){return"--OP-dotted-phase".concat(r+1,"-color")});ie(`.OP-spokes-rli-bounding-box {
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
}`);Array.from({length:4},function(a,r){return"--OP-spokes-phase".concat(r+1,"-color")});ie(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);Array.from({length:4},function(a,r){return"--OP-annulus-dual-sectors-phase".concat(r+1,"-color")});ie(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);Array.from({length:4},function(a,r){return["--OP-annulus-track-phase".concat(r+1,"-color"),"--OP-annulus-sector-phase".concat(r+1,"-color")]});ie(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},function(a,r){return"--four-square-phase".concat(r+1,"-color")});ie(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},function(a,r){return"--mosaic-phase".concat(r+1,"-color")});ie(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},function(a,r){return"--riple-phase".concat(r+1,"-color")});ie(`.pulsate-rli-bounding-box {
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
}`);Array.from({length:4},function(a,r){return"--TD-pulsate-phase".concat(r+1,"-color")});ie(`.brick-stack-rli-bounding-box {
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
}`);Array.from({length:4},function(a,r){return"--TD-brick-stack-phase".concat(r+1,"-color")});ie(`.bob-rli-bounding-box {
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
}`);Array.from({length:4},function(a,r){return"--TD-bob-phase".concat(r+1,"-color")});ie(`.bounce-rli-bounding-box {
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
}`);Array.from({length:4},function(a,r){return"--TD-bounce-phase".concat(r+1,"-color")});ie(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},function(a,r){return"--shape-phase".concat(r+1,"-color")});ie(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},function(a,r){return"--trophySpin-phase".concat(r+1,"-color")});ie(`.slab-rli-bounding-box {
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
}`);Array.from({length:4},function(a,r){return"--slab-phase".concat(r+1,"-color")});ie(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},function(a,r){return"--life-line-phase".concat(r+1,"-color")});var Zr={exports:{}},Ey=Zr.exports,Mp;function Cy(){return Mp||(Mp=1,function(a,r){(function(o,s){s(r)})(Ey,function(o){class s{constructor(f,p){this.state={angle:0,area:[],position:{x:0,y:0},hardAngle:0,hardDrawingAngle:0},this.createdDensity=p,this.nowDrawingDensity=this.createdDensity,this.render=f}setDensity(f){this.createdDensity=f,this.nowDrawingDensity=f}setDrawingDensity(f){this.nowDrawingDensity=f}setPosition(f){this.state.position=f}setAngle(f){this.state.angle=f}setArea(f){this.state.area=f}setHardDrawingAngle(f){this.state.hardDrawingAngle=f}setHardAngle(f){this.state.hardAngle=f,this.state.hardDrawingAngle=f}setOrientation(f){this.orientation=f}getDrawingDensity(){return this.nowDrawingDensity}getDensity(){return this.createdDensity}getHardAngle(){return this.state.hardAngle}}class c extends s{constructor(f,p,v){super(f,v),this.image=null,this.isLoad=!1,this.loadingAngle=0,this.image=new Image,this.image.src=p}draw(f){const p=this.render.getContext(),v=this.render.convertToGlobal(this.state.position),O=this.render.getRect().pageWidth,z=this.render.getRect().height;p.save(),p.translate(v.x,v.y),p.beginPath();for(let U of this.state.area)U!==null&&(U=this.render.convertToGlobal(U),p.lineTo(U.x-v.x,U.y-v.y));p.rotate(this.state.angle),p.clip(),this.isLoad?p.drawImage(this.image,0,0,O,z):this.drawLoader(p,{x:0,y:0},O,z),p.restore()}simpleDraw(f){const p=this.render.getRect(),v=this.render.getContext(),O=p.pageWidth,z=p.height,U=f===1?p.left+p.pageWidth:p.left,b=p.top;this.isLoad?v.drawImage(this.image,U,b,O,z):this.drawLoader(v,{x:U,y:b},O,z)}drawLoader(f,p,v,O){f.beginPath(),f.strokeStyle="rgb(200, 200, 200)",f.fillStyle="rgb(255, 255, 255)",f.lineWidth=1,f.rect(p.x+1,p.y+1,v-1,O-1),f.stroke(),f.fill();const z={x:p.x+v/2,y:p.y+O/2};f.beginPath(),f.lineWidth=10,f.arc(z.x,z.y,20,this.loadingAngle,3*Math.PI/2+this.loadingAngle),f.stroke(),f.closePath(),this.loadingAngle+=.07,this.loadingAngle>=2*Math.PI&&(this.loadingAngle=0)}load(){this.isLoad||(this.image.onload=()=>{this.isLoad=!0})}newTemporaryCopy(){return this}getTemporaryCopy(){return this}hideTemporaryCopy(){}}class h{constructor(f,p){this.pages=[],this.currentPageIndex=0,this.currentSpreadIndex=0,this.landscapeSpread=[],this.portraitSpread=[],this.render=p,this.app=f,this.currentPageIndex=0,this.isShowCover=this.app.getSettings().showCover}destroy(){this.pages=[]}createSpread(){this.landscapeSpread=[],this.portraitSpread=[];for(let p=0;p<this.pages.length;p++)this.portraitSpread.push([p]);let f=0;this.isShowCover&&(this.pages[0].setDensity("hard"),this.landscapeSpread.push([f]),f++);for(let p=f;p<this.pages.length;p+=2)p<this.pages.length-1?this.landscapeSpread.push([p,p+1]):(this.landscapeSpread.push([p]),this.pages[p].setDensity("hard"))}getSpread(){return this.render.getOrientation()==="landscape"?this.landscapeSpread:this.portraitSpread}getSpreadIndexByPage(f){const p=this.getSpread();for(let v=0;v<p.length;v++)if(f===p[v][0]||f===p[v][1])return v;return null}getPageCount(){return this.pages.length}getPages(){return this.pages}getPage(f){if(f>=0&&f<this.pages.length)return this.pages[f];throw new Error("Invalid page number")}nextBy(f){const p=this.pages.indexOf(f);return p<this.pages.length-1?this.pages[p+1]:null}prevBy(f){const p=this.pages.indexOf(f);return p>0?this.pages[p-1]:null}getFlippingPage(f){const p=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return f===0?this.pages[p].newTemporaryCopy():this.pages[p-1];{const v=f===0?this.getSpread()[p+1]:this.getSpread()[p-1];return v.length===1||f===0?this.pages[v[0]]:this.pages[v[1]]}}getBottomPage(f){const p=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return f===0?this.pages[p+1]:this.pages[p-1];{const v=f===0?this.getSpread()[p+1]:this.getSpread()[p-1];return v.length===1?this.pages[v[0]]:f===0?this.pages[v[1]]:this.pages[v[0]]}}showNext(){this.currentSpreadIndex<this.getSpread().length&&(this.currentSpreadIndex++,this.showSpread())}showPrev(){this.currentSpreadIndex>0&&(this.currentSpreadIndex--,this.showSpread())}getCurrentPageIndex(){return this.currentPageIndex}show(f=null){if(f===null&&(f=this.currentPageIndex),f<0||f>=this.pages.length)return;const p=this.getSpreadIndexByPage(f);p!==null&&(this.currentSpreadIndex=p,this.showSpread())}getCurrentSpreadIndex(){return this.currentSpreadIndex}setCurrentSpreadIndex(f){if(!(f>=0&&f<this.getSpread().length))throw new Error("Invalid page");this.currentSpreadIndex=f}showSpread(){const f=this.getSpread()[this.currentSpreadIndex];f.length===2?(this.render.setLeftPage(this.pages[f[0]]),this.render.setRightPage(this.pages[f[1]])):this.render.getOrientation()==="landscape"&&f[0]===this.pages.length-1?(this.render.setLeftPage(this.pages[f[0]]),this.render.setRightPage(null)):(this.render.setLeftPage(null),this.render.setRightPage(this.pages[f[0]])),this.currentPageIndex=f[0],this.app.updatePageIndex(this.currentPageIndex)}}class m extends h{constructor(f,p,v){super(f,p),this.imagesHref=v}load(){for(const f of this.imagesHref){const p=new c(this.render,f,"soft");p.load(),this.pages.push(p)}this.createSpread()}}class x{static GetDistanceBetweenTwoPoint(f,p){return f===null||p===null?1/0:Math.sqrt(Math.pow(p.x-f.x,2)+Math.pow(p.y-f.y,2))}static GetSegmentLength(f){return x.GetDistanceBetweenTwoPoint(f[0],f[1])}static GetAngleBetweenTwoLine(f,p){const v=f[0].y-f[1].y,O=p[0].y-p[1].y,z=f[1].x-f[0].x,U=p[1].x-p[0].x;return Math.acos((v*O+z*U)/(Math.sqrt(v*v+z*z)*Math.sqrt(O*O+U*U)))}static PointInRect(f,p){return p===null?null:p.x>=f.left&&p.x<=f.width+f.left&&p.y>=f.top&&p.y<=f.top+f.height?p:null}static GetRotatedPoint(f,p,v){return{x:f.x*Math.cos(v)+f.y*Math.sin(v)+p.x,y:f.y*Math.cos(v)-f.x*Math.sin(v)+p.y}}static LimitPointToCircle(f,p,v){if(x.GetDistanceBetweenTwoPoint(f,v)<=p)return v;const O=f.x,z=f.y,U=v.x,b=v.y;let X=Math.sqrt(Math.pow(p,2)*Math.pow(O-U,2)/(Math.pow(O-U,2)+Math.pow(z-b,2)))+O;v.x<0&&(X*=-1);let I=(X-O)*(z-b)/(O-U)+z;return O-U+z===0&&(I=p),{x:X,y:I}}static GetIntersectBetweenTwoSegment(f,p,v){return x.PointInRect(f,x.GetIntersectBeetwenTwoLine(p,v))}static GetIntersectBeetwenTwoLine(f,p){const v=f[0].y-f[1].y,O=p[0].y-p[1].y,z=f[1].x-f[0].x,U=p[1].x-p[0].x,b=f[0].x*f[1].y-f[1].x*f[0].y,X=p[0].x*p[1].y-p[1].x*p[0].y,I=v*X-O*b,rt=z*X-U*b,Bt=-(b*U-X*z)/(v*U-O*z),mt=-(v*X-O*b)/(v*U-O*z);if(isFinite(Bt)&&isFinite(mt))return{x:Bt,y:mt};if(Math.abs(I-rt)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(f,p){const v=Math.abs(f.x-p.x),O=Math.abs(f.y-p.y),z=Math.max(v,O),U=[f];function b(X,I,rt,Bt,mt){return I>X?X+mt*(rt/Bt):I<X?X-mt*(rt/Bt):X}for(let X=1;X<=z;X+=1)U.push({x:b(f.x,p.x,v,z,X),y:b(f.y,p.y,O,z,X)});return U}}class S extends s{constructor(f,p,v){super(f,v),this.copiedElement=null,this.temporaryCopy=null,this.isLoad=!1,this.element=p,this.element.classList.add("stf__item"),this.element.classList.add("--"+v)}newTemporaryCopy(){return this.nowDrawingDensity==="hard"?this:(this.temporaryCopy===null&&(this.copiedElement=this.element.cloneNode(!0),this.element.parentElement.appendChild(this.copiedElement),this.temporaryCopy=new S(this.render,this.copiedElement,this.nowDrawingDensity)),this.getTemporaryCopy())}getTemporaryCopy(){return this.temporaryCopy}hideTemporaryCopy(){this.temporaryCopy!==null&&(this.copiedElement.remove(),this.copiedElement=null,this.temporaryCopy=null)}draw(f){const p=f||this.nowDrawingDensity,v=this.render.convertToGlobal(this.state.position),O=this.render.getRect().pageWidth,z=this.render.getRect().height;this.element.classList.remove("--simple");const U=`
            display: block;
            z-index: ${this.element.style.zIndex};
            left: 0;
            top: 0;
            width: ${O}px;
            height: ${z}px;
        `;p==="hard"?this.drawHard(U):this.drawSoft(v,U)}drawHard(f=""){const p=this.render.getRect().left+this.render.getRect().width/2,v=this.state.hardDrawingAngle,O=f+`
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                clip-path: none;
                -webkit-clip-path: none;
            `+(this.orientation===0?`transform-origin: ${this.render.getRect().pageWidth}px 0; 
                   transform: translate3d(0, 0, 0) rotateY(${v}deg);`:`transform-origin: 0 0; 
                   transform: translate3d(${p}px, 0, 0) rotateY(${v}deg);`);this.element.style.cssText=O}drawSoft(f,p=""){let v="polygon( ";for(const z of this.state.area)if(z!==null){let U=this.render.getDirection()===1?{x:-z.x+this.state.position.x,y:z.y-this.state.position.y}:{x:z.x-this.state.position.x,y:z.y-this.state.position.y};U=x.GetRotatedPoint(U,{x:0,y:0},this.state.angle),v+=U.x+"px "+U.y+"px, "}v=v.slice(0,-2),v+=")";const O=p+`transform-origin: 0 0; clip-path: ${v}; -webkit-clip-path: ${v};`+(this.render.isSafari()&&this.state.angle===0?`transform: translate(${f.x}px, ${f.y}px);`:`transform: translate3d(${f.x}px, ${f.y}px, 0) rotate(${this.state.angle}rad);`);this.element.style.cssText=O}simpleDraw(f){const p=this.render.getRect(),v=p.pageWidth,O=p.height,z=f===1?p.left+p.pageWidth:p.left,U=p.top;this.element.classList.add("--simple"),this.element.style.cssText=`
            position: absolute; 
            display: block; 
            height: ${O}px; 
            left: ${z}px; 
            top: ${U}px; 
            width: ${v}px; 
            z-index: ${this.render.getSettings().startZIndex+1};`}getElement(){return this.element}load(){this.isLoad=!0}setOrientation(f){super.setOrientation(f),this.element.classList.remove("--left","--right"),this.element.classList.add(f===1?"--right":"--left")}setDrawingDensity(f){this.element.classList.remove("--soft","--hard"),this.element.classList.add("--"+f),super.setDrawingDensity(f)}}class y extends h{constructor(f,p,v,O){super(f,p),this.element=v,this.pagesElement=O}load(){for(const f of this.pagesElement){const p=new S(this.render,f,f.dataset.density==="hard"?"hard":"soft");p.load(),this.pages.push(p)}this.createSpread()}}class E{constructor(f,p,v,O){this.direction=f,this.corner=p,this.topIntersectPoint=null,this.sideIntersectPoint=null,this.bottomIntersectPoint=null,this.pageWidth=parseInt(v,10),this.pageHeight=parseInt(O,10)}calc(f){try{return this.position=this.calcAngleAndPosition(f),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){const f=[];let p=!1;return f.push(this.rect.topLeft),f.push(this.topIntersectPoint),this.sideIntersectPoint===null?p=!0:(f.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(p=!1)),f.push(this.bottomIntersectPoint),(p||this.corner==="bottom")&&f.push(this.rect.bottomLeft),f}getBottomClipArea(){const f=[];return f.push(this.topIntersectPoint),this.corner==="top"?f.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&f.push({x:this.pageWidth,y:0}),f.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?x.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&f.push(this.sideIntersectPoint):this.corner==="top"&&f.push({x:this.pageWidth,y:this.pageHeight}),f.push(this.bottomIntersectPoint),f.push(this.topIntersectPoint),f}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){const f=x.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?f:Math.PI-f}calcAngleAndPosition(f){let p=f;if(this.updateAngleAndGeometry(p),p=this.corner==="top"?this.checkPositionAtCenterLine(p,{x:0,y:0},{x:0,y:this.pageHeight}):this.checkPositionAtCenterLine(p,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(p.x-this.pageWidth)<1&&Math.abs(p.y)<1)throw new Error("Point is too small");return p}updateAngleAndGeometry(f){this.angle=this.calculateAngle(f),this.rect=this.getPageRect(f)}calculateAngle(f){const p=this.pageWidth-f.x+1,v=this.corner==="bottom"?this.pageHeight-f.y:f.y;let O=2*Math.acos(p/Math.sqrt(v*v+p*p));v<0&&(O=-O);const z=Math.PI-O;if(!isFinite(O)||z>=0&&z<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(O=-O),O}getPageRect(f){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],f):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],f)}getRectFromBasePoint(f,p){return{topLeft:this.getRotatedPoint(f[0],p),topRight:this.getRotatedPoint(f[1],p),bottomLeft:this.getRotatedPoint(f[2],p),bottomRight:this.getRotatedPoint(f[3],p)}}getRotatedPoint(f,p){return{x:f.x*Math.cos(this.angle)+f.y*Math.sin(this.angle)+p.x,y:f.y*Math.cos(this.angle)-f.x*Math.sin(this.angle)+p.y}}calculateIntersectPoint(f){const p={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=x.GetIntersectBetweenTwoSegment(p,[f,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=x.GetIntersectBetweenTwoSegment(p,[f,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=x.GetIntersectBetweenTwoSegment(p,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=x.GetIntersectBetweenTwoSegment(p,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=x.GetIntersectBetweenTwoSegment(p,[f,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=x.GetIntersectBetweenTwoSegment(p,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(f,p,v){let O=f;const z=x.LimitPointToCircle(p,this.pageWidth,O);O!==z&&(O=z,this.updateAngleAndGeometry(O));const U=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2));let b=this.rect.bottomRight,X=this.rect.topLeft;if(this.corner==="bottom"&&(b=this.rect.topRight,X=this.rect.bottomLeft),b.x<=0){const I=x.LimitPointToCircle(v,U,X);I!==O&&(O=I,this.updateAngleAndGeometry(O))}return O}getSegmentToShadowLine(){const f=this.getShadowStartPoint();return[f,f!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint]}}class k{constructor(f,p){this.flippingPage=null,this.bottomPage=null,this.calc=null,this.state="read",this.render=f,this.app=p}fold(f){this.setState("user_fold"),this.calc===null&&this.start(f),this.do(this.render.convertToPage(f))}flip(f){if(this.app.getSettings().disableFlipByClick&&!this.isPointOnCorners(f)||(this.calc!==null&&this.render.finishAnimation(),!this.start(f)))return;const p=this.getBoundsRect();this.setState("flipping");const v=p.height/10,O=this.calc.getCorner()==="bottom"?p.height-v:v,z=this.calc.getCorner()==="bottom"?p.height:0;this.calc.calc({x:p.pageWidth-v,y:O}),this.animateFlippingTo({x:p.pageWidth-v,y:O},{x:-p.pageWidth,y:z},!0)}start(f){this.reset();const p=this.render.convertToBook(f),v=this.getBoundsRect(),O=this.getDirectionByPoint(p),z=p.y>=v.height/2?"bottom":"top";if(!this.checkDirection(O))return!1;try{if(this.flippingPage=this.app.getPageCollection().getFlippingPage(O),this.bottomPage=this.app.getPageCollection().getBottomPage(O),this.render.getOrientation()==="landscape")if(O===1){const U=this.app.getPageCollection().nextBy(this.flippingPage);U!==null&&this.flippingPage.getDensity()!==U.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),U.setDrawingDensity("hard"))}else{const U=this.app.getPageCollection().prevBy(this.flippingPage);U!==null&&this.flippingPage.getDensity()!==U.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),U.setDrawingDensity("hard"))}return this.render.setDirection(O),this.calc=new E(O,z,v.pageWidth.toString(10),v.height.toString(10)),!0}catch{return!1}}do(f){if(this.calc!==null&&this.calc.calc(f)){const p=this.calc.getFlippingProgress();this.bottomPage.setArea(this.calc.getBottomClipArea()),this.bottomPage.setPosition(this.calc.getBottomPagePosition()),this.bottomPage.setAngle(0),this.bottomPage.setHardAngle(0),this.flippingPage.setArea(this.calc.getFlippingClipArea()),this.flippingPage.setPosition(this.calc.getActiveCorner()),this.flippingPage.setAngle(this.calc.getAngle()),this.calc.getDirection()===0?this.flippingPage.setHardAngle(90*(200-2*p)/100):this.flippingPage.setHardAngle(-90*(200-2*p)/100),this.render.setPageRect(this.calc.getRect()),this.render.setBottomPage(this.bottomPage),this.render.setFlippingPage(this.flippingPage),this.render.setShadowData(this.calc.getShadowStartPoint(),this.calc.getShadowAngle(),p,this.calc.getDirection())}}flipToPage(f,p){const v=this.app.getPageCollection().getCurrentSpreadIndex(),O=this.app.getPageCollection().getSpreadIndexByPage(f);try{O>v&&(this.app.getPageCollection().setCurrentSpreadIndex(O-1),this.flipNext(p)),O<v&&(this.app.getPageCollection().setCurrentSpreadIndex(O+1),this.flipPrev(p))}catch{}}flipNext(f){this.flip({x:this.render.getRect().left+2*this.render.getRect().pageWidth-10,y:f==="top"?1:this.render.getRect().height-2})}flipPrev(f){this.flip({x:10,y:f==="top"?1:this.render.getRect().height-2})}stopMove(){if(this.calc===null)return;const f=this.calc.getPosition(),p=this.getBoundsRect(),v=this.calc.getCorner()==="bottom"?p.height:0;f.x<=0?this.animateFlippingTo(f,{x:-p.pageWidth,y:v},!0):this.animateFlippingTo(f,{x:p.pageWidth,y:v},!1)}showCorner(f){if(!this.checkState("read","fold_corner"))return;const p=this.getBoundsRect(),v=p.pageWidth;if(this.isPointOnCorners(f))if(this.calc===null){if(!this.start(f))return;this.setState("fold_corner"),this.calc.calc({x:v-1,y:1});const O=50,z=this.calc.getCorner()==="bottom"?p.height-1:1,U=this.calc.getCorner()==="bottom"?p.height-O:O;this.animateFlippingTo({x:v-1,y:z},{x:v-O,y:U},!1,!1)}else this.do(this.render.convertToPage(f));else this.setState("read"),this.render.finishAnimation(),this.stopMove()}animateFlippingTo(f,p,v,O=!0){const z=x.GetCordsFromTwoPoint(f,p),U=[];for(const X of z)U.push(()=>this.do(X));const b=this.getAnimationDuration(z.length);this.render.startAnimation(U,b,()=>{this.calc&&(v&&(this.calc.getDirection()===1?this.app.turnToPrevPage():this.app.turnToNextPage()),O&&(this.render.setBottomPage(null),this.render.setFlippingPage(null),this.render.clearShadow(),this.setState("read"),this.reset()))})}getCalculation(){return this.calc}getState(){return this.state}setState(f){this.state!==f&&(this.app.updateState(f),this.state=f)}getDirectionByPoint(f){const p=this.getBoundsRect();if(this.render.getOrientation()==="portrait"){if(f.x-p.pageWidth<=p.width/5)return 1}else if(f.x<p.width/2)return 1;return 0}getAnimationDuration(f){const p=this.app.getSettings().flippingTime;return f>=1e3?p:f/1e3*p}checkDirection(f){return f===0?this.app.getCurrentPageIndex()<this.app.getPageCount()-1:this.app.getCurrentPageIndex()>=1}reset(){this.calc=null,this.flippingPage=null,this.bottomPage=null}getBoundsRect(){return this.render.getRect()}checkState(...f){for(const p of f)if(this.state===p)return!0;return!1}isPointOnCorners(f){const p=this.getBoundsRect(),v=p.pageWidth,O=Math.sqrt(Math.pow(v,2)+Math.pow(p.height,2))/5,z=this.render.convertToBook(f);return z.x>0&&z.y>0&&z.x<p.width&&z.y<p.height&&(z.x<O||z.x>p.width-O)&&(z.y<O||z.y>p.height-O)}}class B{constructor(f,p){this.leftPage=null,this.rightPage=null,this.flippingPage=null,this.bottomPage=null,this.direction=null,this.orientation=null,this.shadow=null,this.animation=null,this.pageRect=null,this.boundsRect=null,this.timer=0,this.safari=!1,this.setting=p,this.app=f;const v=new RegExp("Version\\/[\\d\\.]+.*Safari/");this.safari=v.exec(window.navigator.userAgent)!==null}render(f){if(this.animation!==null){const p=Math.round((f-this.animation.startedAt)/this.animation.durationFrame);p<this.animation.frames.length?this.animation.frames[p]():(this.animation.onAnimateEnd(),this.animation=null)}this.timer=f,this.drawFrame()}start(){this.update();const f=p=>{this.render(p),requestAnimationFrame(f)};requestAnimationFrame(f)}startAnimation(f,p,v){this.finishAnimation(),this.animation={frames:f,duration:p,durationFrame:p/f.length,onAnimateEnd:v,startedAt:this.timer}}finishAnimation(){this.animation!==null&&(this.animation.frames[this.animation.frames.length-1](),this.animation.onAnimateEnd!==null&&this.animation.onAnimateEnd()),this.animation=null}update(){this.boundsRect=null;const f=this.calculateBoundsRect();this.orientation!==f&&(this.orientation=f,this.app.updateOrientation(f))}calculateBoundsRect(){let f="landscape";const p=this.getBlockWidth(),v=p/2,O=this.getBlockHeight()/2,z=this.setting.width/this.setting.height;let U=this.setting.width,b=this.setting.height,X=v-U;return this.setting.size==="stretch"?(p<2*this.setting.minWidth&&this.app.getSettings().usePortrait&&(f="portrait"),U=f==="portrait"?this.getBlockWidth():this.getBlockWidth()/2,U>this.setting.maxWidth&&(U=this.setting.maxWidth),b=U/z,b>this.getBlockHeight()&&(b=this.getBlockHeight(),U=b*z),X=f==="portrait"?v-U/2-U:v-U):p<2*U&&this.app.getSettings().usePortrait&&(f="portrait",X=v-U/2-U),this.boundsRect={left:X,top:O-b/2,width:2*U,height:b,pageWidth:U},f}setShadowData(f,p,v,O){if(!this.app.getSettings().drawShadow)return;const z=100*this.getSettings().maxShadowOpacity;this.shadow={pos:f,angle:p,width:3*this.getRect().pageWidth/4*v/100,opacity:(100-v)*z/100/100,direction:O,progress:2*v}}clearShadow(){this.shadow=null}getBlockWidth(){return this.app.getUI().getDistElement().offsetWidth}getBlockHeight(){return this.app.getUI().getDistElement().offsetHeight}getDirection(){return this.direction}getRect(){return this.boundsRect===null&&this.calculateBoundsRect(),this.boundsRect}getSettings(){return this.app.getSettings()}getOrientation(){return this.orientation}setPageRect(f){this.pageRect=f}setDirection(f){this.direction=f}setRightPage(f){f!==null&&f.setOrientation(1),this.rightPage=f}setLeftPage(f){f!==null&&f.setOrientation(0),this.leftPage=f}setBottomPage(f){f!==null&&f.setOrientation(this.direction===1?0:1),this.bottomPage=f}setFlippingPage(f){f!==null&&f.setOrientation(this.direction===0&&this.orientation!=="portrait"?0:1),this.flippingPage=f}convertToBook(f){const p=this.getRect();return{x:f.x-p.left,y:f.y-p.top}}isSafari(){return this.safari}convertToPage(f,p){p||(p=this.direction);const v=this.getRect();return{x:p===0?f.x-v.left-v.width/2:v.width/2-f.x+v.left,y:f.y-v.top}}convertToGlobal(f,p){if(p||(p=this.direction),f==null)return null;const v=this.getRect();return{x:p===0?f.x+v.left+v.width/2:v.width/2-f.x+v.left,y:f.y+v.top}}convertRectToGlobal(f,p){return p||(p=this.direction),{topLeft:this.convertToGlobal(f.topLeft,p),topRight:this.convertToGlobal(f.topRight,p),bottomLeft:this.convertToGlobal(f.bottomLeft,p),bottomRight:this.convertToGlobal(f.bottomRight,p)}}}class G extends B{constructor(f,p,v){super(f,p),this.canvas=v,this.ctx=v.getContext("2d")}getContext(){return this.ctx}reload(){}drawFrame(){this.clear(),this.orientation!=="portrait"&&this.leftPage!=null&&this.leftPage.simpleDraw(0),this.rightPage!=null&&this.rightPage.simpleDraw(1),this.bottomPage!=null&&this.bottomPage.draw(),this.drawBookShadow(),this.flippingPage!=null&&this.flippingPage.draw(),this.shadow!=null&&(this.drawOuterShadow(),this.drawInnerShadow());const f=this.getRect();this.orientation==="portrait"&&(this.ctx.beginPath(),this.ctx.rect(f.left+f.pageWidth,f.top,f.width,f.height),this.ctx.clip())}drawBookShadow(){const f=this.getRect();this.ctx.save(),this.ctx.beginPath();const p=f.width/20;this.ctx.rect(f.left,f.top,f.width,f.height);const v={x:f.left+f.width/2-p/2,y:0};this.ctx.translate(v.x,v.y);const O=this.ctx.createLinearGradient(0,0,p,0);O.addColorStop(0,"rgba(0, 0, 0, 0)"),O.addColorStop(.4,"rgba(0, 0, 0, 0.2)"),O.addColorStop(.49,"rgba(0, 0, 0, 0.1)"),O.addColorStop(.5,"rgba(0, 0, 0, 0.5)"),O.addColorStop(.51,"rgba(0, 0, 0, 0.4)"),O.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.clip(),this.ctx.fillStyle=O,this.ctx.fillRect(0,0,p,2*f.height),this.ctx.restore()}drawOuterShadow(){const f=this.getRect();this.ctx.save(),this.ctx.beginPath(),this.ctx.rect(f.left,f.top,f.width,f.height);const p=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y});this.ctx.translate(p.x,p.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const v=this.ctx.createLinearGradient(0,0,this.shadow.width,0);this.shadow.direction===0?(this.ctx.translate(0,-100),v.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),v.addColorStop(1,"rgba(0, 0, 0, 0)")):(this.ctx.translate(-this.shadow.width,-100),v.addColorStop(0,"rgba(0, 0, 0, 0)"),v.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")")),this.ctx.clip(),this.ctx.fillStyle=v,this.ctx.fillRect(0,0,this.shadow.width,2*f.height),this.ctx.restore()}drawInnerShadow(){const f=this.getRect();this.ctx.save(),this.ctx.beginPath();const p=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),v=this.convertRectToGlobal(this.pageRect);this.ctx.moveTo(v.topLeft.x,v.topLeft.y),this.ctx.lineTo(v.topRight.x,v.topRight.y),this.ctx.lineTo(v.bottomRight.x,v.bottomRight.y),this.ctx.lineTo(v.bottomLeft.x,v.bottomLeft.y),this.ctx.translate(p.x,p.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const O=3*this.shadow.width/4,z=this.ctx.createLinearGradient(0,0,O,0);this.shadow.direction===0?(this.ctx.translate(-O,-100),z.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")"),z.addColorStop(.9,"rgba(0, 0, 0, 0.05)"),z.addColorStop(.7,"rgba(0, 0, 0, "+this.shadow.opacity+")"),z.addColorStop(0,"rgba(0, 0, 0, 0)")):(this.ctx.translate(0,-100),z.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),z.addColorStop(.1,"rgba(0, 0, 0, 0.05)"),z.addColorStop(.3,"rgba(0, 0, 0, "+this.shadow.opacity+")"),z.addColorStop(1,"rgba(0, 0, 0, 0)")),this.ctx.clip(),this.ctx.fillStyle=z,this.ctx.fillRect(0,0,O,2*f.height),this.ctx.restore()}clear(){this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}}class N{constructor(f,p,v){this.touchPoint=null,this.swipeTimeout=250,this.onResize=()=>{this.update()},this.onMouseDown=z=>{if(this.checkTarget(z.target)){const U=this.getMousePos(z.clientX,z.clientY);this.app.startUserTouch(U),z.preventDefault()}},this.onTouchStart=z=>{if(this.checkTarget(z.target)&&z.changedTouches.length>0){const U=z.changedTouches[0],b=this.getMousePos(U.clientX,U.clientY);this.touchPoint={point:b,time:Date.now()},setTimeout(()=>{this.touchPoint!==null&&this.app.startUserTouch(b)},this.swipeTimeout),this.app.getSettings().mobileScrollSupport||z.preventDefault()}},this.onMouseUp=z=>{const U=this.getMousePos(z.clientX,z.clientY);this.app.userStop(U)},this.onMouseMove=z=>{const U=this.getMousePos(z.clientX,z.clientY);this.app.userMove(U,!1)},this.onTouchMove=z=>{if(z.changedTouches.length>0){const U=z.changedTouches[0],b=this.getMousePos(U.clientX,U.clientY);this.app.getSettings().mobileScrollSupport?(this.touchPoint!==null&&(Math.abs(this.touchPoint.point.x-b.x)>10||this.app.getState()!=="read")&&z.cancelable&&this.app.userMove(b,!0),this.app.getState()!=="read"&&z.preventDefault()):this.app.userMove(b,!0)}},this.onTouchEnd=z=>{if(z.changedTouches.length>0){const U=z.changedTouches[0],b=this.getMousePos(U.clientX,U.clientY);let X=!1;if(this.touchPoint!==null){const I=b.x-this.touchPoint.point.x,rt=Math.abs(b.y-this.touchPoint.point.y);Math.abs(I)>this.swipeDistance&&rt<2*this.swipeDistance&&Date.now()-this.touchPoint.time<this.swipeTimeout&&(I>0?this.app.flipPrev(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"):this.app.flipNext(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"),X=!0),this.touchPoint=null}this.app.userStop(b,X)}},this.parentElement=f,f.classList.add("stf__parent"),f.insertAdjacentHTML("afterbegin",'<div class="stf__wrapper"></div>'),this.wrapper=f.querySelector(".stf__wrapper"),this.app=p;const O=this.app.getSettings().usePortrait?1:2;f.style.minWidth=v.minWidth*O+"px",f.style.minHeight=v.minHeight+"px",v.size==="fixed"&&(f.style.minWidth=v.width*O+"px",f.style.minHeight=v.height+"px"),v.autoSize&&(f.style.width="100%",f.style.maxWidth=2*v.maxWidth+"px"),f.style.display="block",window.addEventListener("resize",this.onResize,!1),this.swipeDistance=v.swipeDistance}destroy(){this.app.getSettings().useMouseEvents&&this.removeHandlers(),this.distElement.remove(),this.wrapper.remove()}getDistElement(){return this.distElement}getWrapper(){return this.wrapper}setOrientationStyle(f){this.wrapper.classList.remove("--portrait","--landscape"),f==="portrait"?(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/this.app.getSettings().width*100+"%"),this.wrapper.classList.add("--portrait")):(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/(2*this.app.getSettings().width)*100+"%"),this.wrapper.classList.add("--landscape")),this.update()}removeHandlers(){window.removeEventListener("resize",this.onResize),this.distElement.removeEventListener("mousedown",this.onMouseDown),this.distElement.removeEventListener("touchstart",this.onTouchStart),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("touchend",this.onTouchEnd)}setHandlers(){window.addEventListener("resize",this.onResize,!1),this.app.getSettings().useMouseEvents&&(this.distElement.addEventListener("mousedown",this.onMouseDown),this.distElement.addEventListener("touchstart",this.onTouchStart),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!this.app.getSettings().mobileScrollSupport}),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("touchend",this.onTouchEnd))}getMousePos(f,p){const v=this.distElement.getBoundingClientRect();return{x:f-v.left,y:p-v.top}}checkTarget(f){return!this.app.getSettings().clickEventForward||!["a","button"].includes(f.tagName.toLowerCase())}}class w extends N{constructor(f,p,v,O){super(f,p,v),this.wrapper.insertAdjacentHTML("afterbegin",'<div class="stf__block"></div>'),this.distElement=f.querySelector(".stf__block"),this.items=O;for(const z of O)this.distElement.appendChild(z);this.setHandlers()}clear(){for(const f of this.items)this.parentElement.appendChild(f)}updateItems(f){this.removeHandlers(),this.distElement.innerHTML="";for(const p of f)this.distElement.appendChild(p);this.items=f,this.setHandlers()}update(){this.app.getRender().update()}}class Y extends N{constructor(f,p,v){super(f,p,v),this.wrapper.innerHTML='<canvas class="stf__canvas"></canvas>',this.canvas=f.querySelectorAll("canvas")[0],this.distElement=this.canvas,this.resizeCanvas(),this.setHandlers()}resizeCanvas(){const f=getComputedStyle(this.canvas),p=parseInt(f.getPropertyValue("width"),10),v=parseInt(f.getPropertyValue("height"),10);this.canvas.width=p,this.canvas.height=v}getCanvas(){return this.canvas}update(){this.resizeCanvas(),this.app.getRender().update()}}class V extends B{constructor(f,p,v){super(f,p),this.outerShadow=null,this.innerShadow=null,this.hardShadow=null,this.hardInnerShadow=null,this.element=v,this.createShadows()}createShadows(){this.element.insertAdjacentHTML("beforeend",`<div class="stf__outerShadow"></div>
             <div class="stf__innerShadow"></div>
             <div class="stf__hardShadow"></div>
             <div class="stf__hardInnerShadow"></div>`),this.outerShadow=this.element.querySelector(".stf__outerShadow"),this.innerShadow=this.element.querySelector(".stf__innerShadow"),this.hardShadow=this.element.querySelector(".stf__hardShadow"),this.hardInnerShadow=this.element.querySelector(".stf__hardInnerShadow")}clearShadow(){super.clearShadow(),this.outerShadow.style.cssText="display: none",this.innerShadow.style.cssText="display: none",this.hardShadow.style.cssText="display: none",this.hardInnerShadow.style.cssText="display: none"}reload(){this.element.querySelector(".stf__outerShadow")||this.createShadows()}drawHardInnerShadow(){const f=this.getRect(),p=this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress;let v=(100-p)*(2.5*f.pageWidth)/100+20;v>f.pageWidth&&(v=f.pageWidth);let O=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+5).toString(10)};
            width: ${v}px;
            height: ${f.height}px;
            background: linear-gradient(to right,
                rgba(0, 0, 0, ${this.shadow.opacity*p/100}) 5%,
                rgba(0, 0, 0, 0) 100%);
            left: ${f.left+f.width/2}px;
            transform-origin: 0 0;
        `;O+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0);":"transform: translate3d(0, 0, 0) rotateY(180deg);",this.hardInnerShadow.style.cssText=O}drawHardOuterShadow(){const f=this.getRect();let p=(100-(this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress))*(2.5*f.pageWidth)/100+20;p>f.pageWidth&&(p=f.pageWidth);let v=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+4).toString(10)};
            width: ${p}px;
            height: ${f.height}px;
            background: linear-gradient(to left, rgba(0, 0, 0, ${this.shadow.opacity}) 5%, rgba(0, 0, 0, 0) 100%);
            left: ${f.left+f.width/2}px;
            transform-origin: 0 0;
        `;v+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0) rotateY(180deg);":"transform: translate3d(0, 0, 0);",this.hardShadow.style.cssText=v}drawInnerShadow(){const f=this.getRect(),p=3*this.shadow.width/4,v=this.getDirection()===0?p:0,O=this.getDirection()===0?"to left":"to right",z=this.convertToGlobal(this.shadow.pos),U=this.shadow.angle+3*Math.PI/2,b=[this.pageRect.topLeft,this.pageRect.topRight,this.pageRect.bottomRight,this.pageRect.bottomLeft];let X="polygon( ";for(const rt of b){let Bt=this.getDirection()===1?{x:-rt.x+this.shadow.pos.x,y:rt.y-this.shadow.pos.y}:{x:rt.x-this.shadow.pos.x,y:rt.y-this.shadow.pos.y};Bt=x.GetRotatedPoint(Bt,{x:v,y:100},U),X+=Bt.x+"px "+Bt.y+"px, "}X=X.slice(0,-2),X+=")";const I=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${p}px;
            height: ${2*f.height}px;
            background: linear-gradient(${O},
                rgba(0, 0, 0, ${this.shadow.opacity}) 5%,
                rgba(0, 0, 0, 0.05) 15%,
                rgba(0, 0, 0, ${this.shadow.opacity}) 35%,
                rgba(0, 0, 0, 0) 100%);
            transform-origin: ${v}px 100px;
            transform: translate3d(${z.x-v}px, ${z.y-100}px, 0) rotate(${U}rad);
            clip-path: ${X};
            -webkit-clip-path: ${X};
        `;this.innerShadow.style.cssText=I}drawOuterShadow(){const f=this.getRect(),p=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),v=this.shadow.angle+3*Math.PI/2,O=this.getDirection()===1?this.shadow.width:0,z=this.getDirection()===0?"to right":"to left",U=[{x:0,y:0},{x:f.pageWidth,y:0},{x:f.pageWidth,y:f.height},{x:0,y:f.height}];let b="polygon( ";for(const I of U)if(I!==null){let rt=this.getDirection()===1?{x:-I.x+this.shadow.pos.x,y:I.y-this.shadow.pos.y}:{x:I.x-this.shadow.pos.x,y:I.y-this.shadow.pos.y};rt=x.GetRotatedPoint(rt,{x:O,y:100},v),b+=rt.x+"px "+rt.y+"px, "}b=b.slice(0,-2),b+=")";const X=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2*f.height}px;
            background: linear-gradient(${z}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));
            transform-origin: ${O}px 100px;
            transform: translate3d(${p.x-O}px, ${p.y-100}px, 0) rotate(${v}rad);
            clip-path: ${b};
            -webkit-clip-path: ${b};
        `;this.outerShadow.style.cssText=X}drawLeftPage(){this.orientation!=="portrait"&&this.leftPage!==null&&(this.direction===1&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.leftPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.leftPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.leftPage.draw(this.flippingPage.getDrawingDensity())):this.leftPage.simpleDraw(0))}drawRightPage(){this.rightPage!==null&&(this.direction===0&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.rightPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.rightPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.rightPage.draw(this.flippingPage.getDrawingDensity())):this.rightPage.simpleDraw(1))}drawBottomPage(){if(this.bottomPage===null)return;const f=this.flippingPage!=null?this.flippingPage.getDrawingDensity():null;this.orientation==="portrait"&&this.direction===1||(this.bottomPage.getElement().style.zIndex=(this.getSettings().startZIndex+3).toString(10),this.bottomPage.draw(f))}drawFrame(){this.clear(),this.drawLeftPage(),this.drawRightPage(),this.drawBottomPage(),this.flippingPage!=null&&(this.flippingPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.flippingPage.draw()),this.shadow!=null&&this.flippingPage!==null&&(this.flippingPage.getDrawingDensity()==="soft"?(this.drawOuterShadow(),this.drawInnerShadow()):(this.drawHardOuterShadow(),this.drawHardInnerShadow()))}clear(){for(const f of this.app.getPageCollection().getPages())f!==this.leftPage&&f!==this.rightPage&&f!==this.flippingPage&&f!==this.bottomPage&&(f.getElement().style.cssText="display: none"),f.getTemporaryCopy()!==this.flippingPage&&f.hideTemporaryCopy()}update(){super.update(),this.rightPage!==null&&this.rightPage.setOrientation(1),this.leftPage!==null&&this.leftPage.setOrientation(0)}}class K{constructor(){this._default={startPage:0,size:"fixed",width:0,height:0,minWidth:0,maxWidth:0,minHeight:0,maxHeight:0,drawShadow:!0,flippingTime:1e3,usePortrait:!0,startZIndex:0,autoSize:!0,maxShadowOpacity:1,showCover:!1,mobileScrollSupport:!0,swipeDistance:30,clickEventForward:!0,useMouseEvents:!0,showPageCorners:!0,disableFlipByClick:!1}}getSettings(f){const p=this._default;if(Object.assign(p,f),p.size!=="stretch"&&p.size!=="fixed")throw new Error('Invalid size type. Available only "fixed" and "stretch" value');if(p.width<=0||p.height<=0)throw new Error("Invalid width or height");if(p.flippingTime<=0)throw new Error("Invalid flipping time");return p.size==="stretch"?(p.minWidth<=0&&(p.minWidth=100),p.maxWidth<p.minWidth&&(p.maxWidth=2e3),p.minHeight<=0&&(p.minHeight=100),p.maxHeight<p.minHeight&&(p.maxHeight=2e3)):(p.minWidth=p.width,p.maxWidth=p.width,p.minHeight=p.height,p.maxHeight=p.height),p}}(function(R,f){f===void 0&&(f={});var p=f.insertAt;if(typeof document<"u"){var v=document.head||document.getElementsByTagName("head")[0],O=document.createElement("style");O.type="text/css",p==="top"&&v.firstChild?v.insertBefore(O,v.firstChild):v.appendChild(O),O.styleSheet?O.styleSheet.cssText=R:O.appendChild(document.createTextNode(R))}})(`.stf__parent {
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
}`),o.PageFlip=class extends class{constructor(){this.events=new Map}on(R,f){return this.events.has(R)?this.events.get(R).push(f):this.events.set(R,[f]),this}off(R){this.events.delete(R)}trigger(R,f,p=null){if(this.events.has(R))for(const v of this.events.get(R))v({data:p,object:f})}}{constructor(R,f){super(),this.isUserTouch=!1,this.isUserMove=!1,this.setting=null,this.pages=null,this.setting=new K().getSettings(f),this.block=R}destroy(){this.ui.destroy(),this.block.remove()}update(){this.render.update(),this.pages.show()}loadFromImages(R){this.ui=new Y(this.block,this,this.setting);const f=this.ui.getCanvas();this.render=new G(this,this.setting,f),this.flipController=new k(this.render,this),this.pages=new m(this,this.render,R),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}loadFromHTML(R){this.ui=new w(this.block,this,this.setting,R),this.render=new V(this,this.setting,this.ui.getDistElement()),this.flipController=new k(this.render,this),this.pages=new y(this,this.render,this.ui.getDistElement(),R),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}updateFromImages(R){const f=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new m(this,this.render,R),this.pages.load(),this.pages.show(f),this.trigger("update",this,{page:f,mode:this.render.getOrientation()})}updateFromHtml(R){const f=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new y(this,this.render,this.ui.getDistElement(),R),this.pages.load(),this.ui.updateItems(R),this.render.reload(),this.pages.show(f),this.trigger("update",this,{page:f,mode:this.render.getOrientation()})}clear(){this.pages.destroy(),this.ui.clear()}turnToPrevPage(){this.pages.showPrev()}turnToNextPage(){this.pages.showNext()}turnToPage(R){this.pages.show(R)}flipNext(R="top"){this.flipController.flipNext(R)}flipPrev(R="top"){this.flipController.flipPrev(R)}flip(R,f="top"){this.flipController.flipToPage(R,f)}updateState(R){this.trigger("changeState",this,R)}updatePageIndex(R){this.trigger("flip",this,R)}updateOrientation(R){this.ui.setOrientationStyle(R),this.update(),this.trigger("changeOrientation",this,R)}getPageCount(){return this.pages.getPageCount()}getCurrentPageIndex(){return this.pages.getCurrentPageIndex()}getPage(R){return this.pages.getPage(R)}getRender(){return this.render}getFlipController(){return this.flipController}getOrientation(){return this.render.getOrientation()}getBoundsRect(){return this.render.getRect()}getSettings(){return this.setting}getUI(){return this.ui}getState(){return this.flipController.getState()}getPageCollection(){return this.pages}startUserTouch(R){this.mousePosition=R,this.isUserTouch=!0,this.isUserMove=!1}userMove(R,f){this.isUserTouch||f||!this.setting.showPageCorners?this.isUserTouch&&x.GetDistanceBetweenTwoPoint(this.mousePosition,R)>5&&(this.isUserMove=!0,this.flipController.fold(R)):this.flipController.showCorner(R)}userStop(R,f=!1){this.isUserTouch&&(this.isUserTouch=!1,f||(this.isUserMove?this.flipController.stopMove():this.flipController.flip(R)))}},Object.defineProperty(o,"__esModule",{value:!0})})}(Zr,Zr.exports)),Zr.exports}var _y=Cy();const ky=Jt.forwardRef((a,r)=>{const o=ct.useRef(null),s=ct.useRef([]),c=ct.useRef(),[h,m]=ct.useState([]);ct.useImperativeHandle(r,()=>({pageFlip:()=>c.current}));const x=ct.useCallback(()=>{c.current&&c.current.clear()},[]),S=ct.useCallback(()=>{const y=c.current;y&&(y.off("flip"),y.off("changeOrientation"),y.off("changeState"),y.off("init"),y.off("update"))},[]);return ct.useEffect(()=>{if(s.current=[],a.children){const y=Jt.Children.map(a.children,E=>Jt.cloneElement(E,{ref:k=>{k&&s.current.push(k)}}));(!a.renderOnlyPageLengthChange||h.length!==y.length)&&(y.length<h.length&&x(),m(y))}},[a.children]),ct.useEffect(()=>{const y=()=>{const E=c.current;E&&(a.onFlip&&E.on("flip",k=>a.onFlip(k)),a.onChangeOrientation&&E.on("changeOrientation",k=>a.onChangeOrientation(k)),a.onChangeState&&E.on("changeState",k=>a.onChangeState(k)),a.onInit&&E.on("init",k=>a.onInit(k)),a.onUpdate&&E.on("update",k=>a.onUpdate(k)))};h.length>0&&s.current.length>0&&(S(),o.current&&!c.current&&(c.current=new _y.PageFlip(o.current,a)),c.current.getFlipController()?c.current.updateFromHtml(s.current):c.current.loadFromHTML(s.current),y())},[h]),Jt.createElement("div",{ref:o,className:a.className,style:a.style},h)}),Ry=Jt.memo(ky),Dy=ct.forwardRef((a,r)=>{const{key:o,src:s,width:c,height:h,isEven:m}=a,[x,S]=ct.useState(null);return ct.useEffect(()=>{const y=new Image;y.src=s,y.onload=()=>S(s)},[s]),tt.jsxs("div",{className:"page",ref:r,children:[x&&tt.jsx("img",{src:x,style:{width:c,height:h}}),tt.jsx("div",{className:`overlay ${m?"left":"right"}`})]},o)}),zp=ct.forwardRef((a,r)=>{const{width:o,height:s,src:c}=a;return tt.jsx("div",{className:"page page-cover","data-density":"hard",ref:r,children:tt.jsx("img",{src:c,style:{width:o,height:s}})})}),Bp=({ariaLabel:a,isDisabled:r,children:o,onClick:s})=>tt.jsx("button",{type:"button",onClick:s,className:`button-circle ${r?"disabled":""}`,tabIndex:-1,onMouseDown:c=>c.preventDefault(),"aria-label":a,children:o}),Np=a=>a,My=()=>{let a=Np;return{configure(r){a=r},generate(r){return a(r)},reset(){a=Np}}},zy=My();function qa(a,...r){const o=new URL(`https://mui.com/production-error/?code=${a}`);return r.forEach(s=>o.searchParams.append("args[]",s)),`Minified MUI error #${a}; visit ${o} for the full message.`}function Ni(a){if(typeof a!="string")throw new Error(qa(7));return a.charAt(0).toUpperCase()+a.slice(1)}function Og(a){var r,o,s="";if(typeof a=="string"||typeof a=="number")s+=a;else if(typeof a=="object")if(Array.isArray(a)){var c=a.length;for(r=0;r<c;r++)a[r]&&(o=Og(a[r]))&&(s&&(s+=" "),s+=o)}else for(o in a)a[o]&&(s&&(s+=" "),s+=o);return s}function Ag(){for(var a,r,o=0,s="",c=arguments.length;o<c;o++)(a=arguments[o])&&(r=Og(a))&&(s&&(s+=" "),s+=r);return s}function By(a,r,o=void 0){const s={};for(const c in a){const h=a[c];let m="",x=!0;for(let S=0;S<h.length;S+=1){const y=h[S];y&&(m+=(x===!0?"":" ")+r(y),x=!1,o&&o[y]&&(m+=" "+o[y]))}s[c]=m}return s}var Dc={exports:{}},zt={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function Ny(){if(Hp)return zt;Hp=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),m=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),B=Symbol.for("react.view_transition"),G=Symbol.for("react.client.reference");function N(w){if(typeof w=="object"&&w!==null){var Y=w.$$typeof;switch(Y){case a:switch(w=w.type,w){case o:case c:case s:case S:case y:case B:return w;default:switch(w=w&&w.$$typeof,w){case m:case x:case k:case E:return w;case h:return w;default:return Y}}case r:return Y}}}return zt.ContextConsumer=h,zt.ContextProvider=m,zt.Element=a,zt.ForwardRef=x,zt.Fragment=o,zt.Lazy=k,zt.Memo=E,zt.Portal=r,zt.Profiler=c,zt.StrictMode=s,zt.Suspense=S,zt.SuspenseList=y,zt.isContextConsumer=function(w){return N(w)===h},zt.isContextProvider=function(w){return N(w)===m},zt.isElement=function(w){return typeof w=="object"&&w!==null&&w.$$typeof===a},zt.isForwardRef=function(w){return N(w)===x},zt.isFragment=function(w){return N(w)===o},zt.isLazy=function(w){return N(w)===k},zt.isMemo=function(w){return N(w)===E},zt.isPortal=function(w){return N(w)===r},zt.isProfiler=function(w){return N(w)===c},zt.isStrictMode=function(w){return N(w)===s},zt.isSuspense=function(w){return N(w)===S},zt.isSuspenseList=function(w){return N(w)===y},zt.isValidElementType=function(w){return typeof w=="string"||typeof w=="function"||w===o||w===c||w===s||w===S||w===y||typeof w=="object"&&w!==null&&(w.$$typeof===k||w.$$typeof===E||w.$$typeof===m||w.$$typeof===h||w.$$typeof===x||w.$$typeof===G||w.getModuleId!==void 0)},zt.typeOf=N,zt}var Pp;function Hy(){return Pp||(Pp=1,Dc.exports=Ny()),Dc.exports}var Eg=Hy();function qn(a){if(typeof a!="object"||a===null)return!1;const r=Object.getPrototypeOf(a);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in a)&&!(Symbol.iterator in a)}function Cg(a){if(ct.isValidElement(a)||Eg.isValidElementType(a)||!qn(a))return a;const r={};return Object.keys(a).forEach(o=>{r[o]=Cg(a[o])}),r}function je(a,r,o={clone:!0}){const s=o.clone?{...a}:a;return qn(a)&&qn(r)&&Object.keys(r).forEach(c=>{ct.isValidElement(r[c])||Eg.isValidElementType(r[c])?s[c]=r[c]:qn(r[c])&&Object.prototype.hasOwnProperty.call(a,c)&&qn(a[c])?s[c]=je(a[c],r[c],o):o.clone?s[c]=qn(r[c])?Cg(r[c]):r[c]:s[c]=r[c]}),s}function Wr(a,r){return r?je(a,r,{clone:!1}):a}function Up(a,r){if(!a.containerQueries)return r;const o=Object.keys(r).filter(s=>s.startsWith("@container")).sort((s,c)=>{const h=/min-width:\s*([0-9.]+)/;return+(s.match(h)?.[1]||0)-+(c.match(h)?.[1]||0)});return o.length?o.reduce((s,c)=>{const h=r[c];return delete s[c],s[c]=h,s},{...r}):r}function Py(a,r){return r==="@"||r.startsWith("@")&&(a.some(o=>r.startsWith(`@${o}`))||!!r.match(/^@\d/))}function Uy(a,r){const o=r.match(/^@([^/]+)?\/?(.+)?$/);if(!o)return null;const[,s,c]=o,h=Number.isNaN(+s)?s||0:+s;return a.containerQueries(c).up(h)}function qy(a){const r=(h,m)=>h.replace("@media",m?`@container ${m}`:"@container");function o(h,m){h.up=(...x)=>r(a.breakpoints.up(...x),m),h.down=(...x)=>r(a.breakpoints.down(...x),m),h.between=(...x)=>r(a.breakpoints.between(...x),m),h.only=(...x)=>r(a.breakpoints.only(...x),m),h.not=(...x)=>{const S=r(a.breakpoints.not(...x),m);return S.includes("not all and")?S.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):S}}const s={},c=h=>(o(s,h),s);return o(c),{...a,containerQueries:c}}const Zo={xs:0,sm:600,md:900,lg:1200,xl:1536},qp={keys:["xs","sm","md","lg","xl"],up:a=>`@media (min-width:${Zo[a]}px)`},jy={containerQueries:a=>({up:r=>{let o=typeof r=="number"?r:Zo[r]||r;return typeof o=="number"&&(o=`${o}px`),a?`@container ${a} (min-width:${o})`:`@container (min-width:${o})`}})};function jn(a,r,o){const s=a.theme||{};if(Array.isArray(r)){const h=s.breakpoints||qp;return r.reduce((m,x,S)=>(m[h.up(h.keys[S])]=o(r[S]),m),{})}if(typeof r=="object"){const h=s.breakpoints||qp;return Object.keys(r).reduce((m,x)=>{if(Py(h.keys,x)){const S=Uy(s.containerQueries?s:jy,x);S&&(m[S]=o(r[x],x))}else if(Object.keys(h.values||Zo).includes(x)){const S=h.up(x);m[S]=o(r[x],x)}else{const S=x;m[S]=r[S]}return m},{})}return o(r)}function Ly(a={}){return a.keys?.reduce((o,s)=>{const c=a.up(s);return o[c]={},o},{})||{}}function jp(a,r){return a.reduce((o,s)=>{const c=o[s];return(!c||Object.keys(c).length===0)&&delete o[s],o},r)}function Vo(a,r,o=!0){if(!r||typeof r!="string")return null;if(a&&a.vars&&o){const s=`vars.${r}`.split(".").reduce((c,h)=>c&&c[h]?c[h]:null,a);if(s!=null)return s}return r.split(".").reduce((s,c)=>s&&s[c]!=null?s[c]:null,a)}function Lo(a,r,o,s=o){let c;return typeof a=="function"?c=a(o):Array.isArray(a)?c=a[o]||s:c=Vo(a,o)||s,r&&(c=r(c,s,a)),c}function Wt(a){const{prop:r,cssProperty:o=a.prop,themeKey:s,transform:c}=a,h=m=>{if(m[r]==null)return null;const x=m[r],S=m.theme,y=Vo(S,s)||{};return jn(m,x,k=>{let B=Lo(y,c,k);return k===B&&typeof k=="string"&&(B=Lo(y,c,`${r}${k==="default"?"":Ni(k)}`,k)),o===!1?B:{[o]:B}})};return h.propTypes={},h.filterProps=[r],h}function $y(a){const r={};return o=>(r[o]===void 0&&(r[o]=a(o)),r[o])}const Gy={m:"margin",p:"padding"},Yy={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Lp={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},Xy=$y(a=>{if(a.length>2)if(Lp[a])a=Lp[a];else return[a];const[r,o]=a.split(""),s=Gy[r],c=Yy[o]||"";return Array.isArray(c)?c.map(h=>s+h):[s+c]}),lf=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],of=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...lf,...of];function rl(a,r,o,s){const c=Vo(a,r,!0)??o;return typeof c=="number"||typeof c=="string"?h=>typeof h=="string"?h:typeof c=="string"?c.startsWith("var(")&&h===0?0:c.startsWith("var(")&&h===1?c:`calc(${h} * ${c})`:c*h:Array.isArray(c)?h=>{if(typeof h=="string")return h;const m=Math.abs(h),x=c[m];return h>=0?x:typeof x=="number"?-x:typeof x=="string"&&x.startsWith("var(")?`calc(-1 * ${x})`:`-${x}`}:typeof c=="function"?c:()=>{}}function sf(a){return rl(a,"spacing",8)}function ll(a,r){return typeof r=="string"||r==null?r:a(r)}function Qy(a,r){return o=>a.reduce((s,c)=>(s[c]=ll(r,o),s),{})}function Zy(a,r,o,s){if(!r.includes(o))return null;const c=Xy(o),h=Qy(c,s),m=a[o];return jn(a,m,h)}function _g(a,r){const o=sf(a.theme);return Object.keys(a).map(s=>Zy(a,r,s,o)).reduce(Wr,{})}function Qt(a){return _g(a,lf)}Qt.propTypes={};Qt.filterProps=lf;function Zt(a){return _g(a,of)}Zt.propTypes={};Zt.filterProps=of;function Ko(...a){const r=a.reduce((s,c)=>(c.filterProps.forEach(h=>{s[h]=c}),s),{}),o=s=>Object.keys(s).reduce((c,h)=>r[h]?Wr(c,r[h](s)):c,{});return o.propTypes={},o.filterProps=a.reduce((s,c)=>s.concat(c.filterProps),[]),o}function Fe(a){return typeof a!="number"?a:`${a}px solid`}function tn(a,r){return Wt({prop:a,themeKey:"borders",transform:r})}const Vy=tn("border",Fe),Ky=tn("borderTop",Fe),Jy=tn("borderRight",Fe),Wy=tn("borderBottom",Fe),Fy=tn("borderLeft",Fe),Iy=tn("borderColor"),tv=tn("borderTopColor"),ev=tn("borderRightColor"),nv=tn("borderBottomColor"),av=tn("borderLeftColor"),iv=tn("outline",Fe),rv=tn("outlineColor"),Jo=a=>{if(a.borderRadius!==void 0&&a.borderRadius!==null){const r=rl(a.theme,"shape.borderRadius",4),o=s=>({borderRadius:ll(r,s)});return jn(a,a.borderRadius,o)}return null};Jo.propTypes={};Jo.filterProps=["borderRadius"];Ko(Vy,Ky,Jy,Wy,Fy,Iy,tv,ev,nv,av,Jo,iv,rv);const Wo=a=>{if(a.gap!==void 0&&a.gap!==null){const r=rl(a.theme,"spacing",8),o=s=>({gap:ll(r,s)});return jn(a,a.gap,o)}return null};Wo.propTypes={};Wo.filterProps=["gap"];const Fo=a=>{if(a.columnGap!==void 0&&a.columnGap!==null){const r=rl(a.theme,"spacing",8),o=s=>({columnGap:ll(r,s)});return jn(a,a.columnGap,o)}return null};Fo.propTypes={};Fo.filterProps=["columnGap"];const Io=a=>{if(a.rowGap!==void 0&&a.rowGap!==null){const r=rl(a.theme,"spacing",8),o=s=>({rowGap:ll(r,s)});return jn(a,a.rowGap,o)}return null};Io.propTypes={};Io.filterProps=["rowGap"];const lv=Wt({prop:"gridColumn"}),ov=Wt({prop:"gridRow"}),sv=Wt({prop:"gridAutoFlow"}),uv=Wt({prop:"gridAutoColumns"}),cv=Wt({prop:"gridAutoRows"}),fv=Wt({prop:"gridTemplateColumns"}),hv=Wt({prop:"gridTemplateRows"}),dv=Wt({prop:"gridTemplateAreas"}),pv=Wt({prop:"gridArea"});Ko(Wo,Fo,Io,lv,ov,sv,uv,cv,fv,hv,dv,pv);function zi(a,r){return r==="grey"?r:a}const gv=Wt({prop:"color",themeKey:"palette",transform:zi}),mv=Wt({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:zi}),bv=Wt({prop:"backgroundColor",themeKey:"palette",transform:zi});Ko(gv,mv,bv);function qe(a){return a<=1&&a!==0?`${a*100}%`:a}const yv=Wt({prop:"width",transform:qe}),uf=a=>{if(a.maxWidth!==void 0&&a.maxWidth!==null){const r=o=>{const s=a.theme?.breakpoints?.values?.[o]||Zo[o];return s?a.theme?.breakpoints?.unit!=="px"?{maxWidth:`${s}${a.theme.breakpoints.unit}`}:{maxWidth:s}:{maxWidth:qe(o)}};return jn(a,a.maxWidth,r)}return null};uf.filterProps=["maxWidth"];const vv=Wt({prop:"minWidth",transform:qe}),xv=Wt({prop:"height",transform:qe}),Sv=Wt({prop:"maxHeight",transform:qe}),wv=Wt({prop:"minHeight",transform:qe});Wt({prop:"size",cssProperty:"width",transform:qe});Wt({prop:"size",cssProperty:"height",transform:qe});const Tv=Wt({prop:"boxSizing"});Ko(yv,uf,vv,xv,Sv,wv,Tv);const ts={border:{themeKey:"borders",transform:Fe},borderTop:{themeKey:"borders",transform:Fe},borderRight:{themeKey:"borders",transform:Fe},borderBottom:{themeKey:"borders",transform:Fe},borderLeft:{themeKey:"borders",transform:Fe},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Fe},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Jo},color:{themeKey:"palette",transform:zi},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:zi},backgroundColor:{themeKey:"palette",transform:zi},p:{style:Zt},pt:{style:Zt},pr:{style:Zt},pb:{style:Zt},pl:{style:Zt},px:{style:Zt},py:{style:Zt},padding:{style:Zt},paddingTop:{style:Zt},paddingRight:{style:Zt},paddingBottom:{style:Zt},paddingLeft:{style:Zt},paddingX:{style:Zt},paddingY:{style:Zt},paddingInline:{style:Zt},paddingInlineStart:{style:Zt},paddingInlineEnd:{style:Zt},paddingBlock:{style:Zt},paddingBlockStart:{style:Zt},paddingBlockEnd:{style:Zt},m:{style:Qt},mt:{style:Qt},mr:{style:Qt},mb:{style:Qt},ml:{style:Qt},mx:{style:Qt},my:{style:Qt},margin:{style:Qt},marginTop:{style:Qt},marginRight:{style:Qt},marginBottom:{style:Qt},marginLeft:{style:Qt},marginX:{style:Qt},marginY:{style:Qt},marginInline:{style:Qt},marginInlineStart:{style:Qt},marginInlineEnd:{style:Qt},marginBlock:{style:Qt},marginBlockStart:{style:Qt},marginBlockEnd:{style:Qt},displayPrint:{cssProperty:!1,transform:a=>({"@media print":{display:a}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Wo},rowGap:{style:Io},columnGap:{style:Fo},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:qe},maxWidth:{style:uf},minWidth:{transform:qe},height:{transform:qe},maxHeight:{transform:qe},minHeight:{transform:qe},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function Ov(...a){const r=a.reduce((s,c)=>s.concat(Object.keys(c)),[]),o=new Set(r);return a.every(s=>o.size===Object.keys(s).length)}function Av(a,r){return typeof a=="function"?a(r):a}function Ev(){function a(o,s,c,h){const m={[o]:s,theme:c},x=h[o];if(!x)return{[o]:s};const{cssProperty:S=o,themeKey:y,transform:E,style:k}=x;if(s==null)return null;if(y==="typography"&&s==="inherit")return{[o]:s};const B=Vo(c,y)||{};return k?k(m):jn(m,s,N=>{let w=Lo(B,E,N);return N===w&&typeof N=="string"&&(w=Lo(B,E,`${o}${N==="default"?"":Ni(N)}`,N)),S===!1?w:{[S]:w}})}function r(o){const{sx:s,theme:c={},nested:h}=o||{};if(!s)return null;const m=c.unstable_sxConfig??ts;function x(S){let y=S;if(typeof S=="function")y=S(c);else if(typeof S!="object")return S;if(!y)return null;const E=Ly(c.breakpoints),k=Object.keys(E);let B=E;return Object.keys(y).forEach(G=>{const N=Av(y[G],c);if(N!=null)if(typeof N=="object")if(m[G])B=Wr(B,a(G,N,c,m));else{const w=jn({theme:c},N,Y=>({[G]:Y}));Ov(w,N)?B[G]=r({sx:N,theme:c,nested:!0}):B=Wr(B,w)}else B=Wr(B,a(G,N,c,m))}),!h&&c.modularCssLayers?{"@layer sx":Up(c,jp(k,B))}:Up(c,jp(k,B))}return Array.isArray(s)?s.map(x):x(s)}return r}const Hi=Ev();Hi.filterProps=["sx"];function $c(){return $c=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var s in o)({}).hasOwnProperty.call(o,s)&&(a[s]=o[s])}return a},$c.apply(null,arguments)}function Cv(a){if(a.sheet)return a.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===a)return document.styleSheets[r]}function _v(a){var r=document.createElement("style");return r.setAttribute("data-emotion",a.key),a.nonce!==void 0&&r.setAttribute("nonce",a.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var kv=function(){function a(o){var s=this;this._insertTag=function(c){var h;s.tags.length===0?s.insertionPoint?h=s.insertionPoint.nextSibling:s.prepend?h=s.container.firstChild:h=s.before:h=s.tags[s.tags.length-1].nextSibling,s.container.insertBefore(c,h),s.tags.push(c)},this.isSpeedy=o.speedy===void 0?!0:o.speedy,this.tags=[],this.ctr=0,this.nonce=o.nonce,this.key=o.key,this.container=o.container,this.prepend=o.prepend,this.insertionPoint=o.insertionPoint,this.before=null}var r=a.prototype;return r.hydrate=function(s){s.forEach(this._insertTag)},r.insert=function(s){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(_v(this));var c=this.tags[this.tags.length-1];if(this.isSpeedy){var h=Cv(c);try{h.insertRule(s,h.cssRules.length)}catch{}}else c.appendChild(document.createTextNode(s));this.ctr++},r.flush=function(){this.tags.forEach(function(s){var c;return(c=s.parentNode)==null?void 0:c.removeChild(s)}),this.tags=[],this.ctr=0},a}(),ve="-ms-",$o="-moz-",Ot="-webkit-",kg="comm",cf="rule",ff="decl",Rv="@import",Rg="@keyframes",Dv="@layer",Mv=Math.abs,es=String.fromCharCode,zv=Object.assign;function Bv(a,r){return pe(a,0)^45?(((r<<2^pe(a,0))<<2^pe(a,1))<<2^pe(a,2))<<2^pe(a,3):0}function Dg(a){return a.trim()}function Nv(a,r){return(a=r.exec(a))?a[0]:a}function At(a,r,o){return a.replace(r,o)}function Gc(a,r){return a.indexOf(r)}function pe(a,r){return a.charCodeAt(r)|0}function Ir(a,r,o){return a.slice(r,o)}function gn(a){return a.length}function hf(a){return a.length}function Eo(a,r){return r.push(a),a}function Hv(a,r){return a.map(r).join("")}var ns=1,Pi=1,Mg=0,Ce=0,te=0,Gi="";function as(a,r,o,s,c,h,m){return{value:a,root:r,parent:o,type:s,props:c,children:h,line:ns,column:Pi,length:m,return:""}}function Yr(a,r){return zv(as("",null,null,"",null,null,0),a,{length:-a.length},r)}function Pv(){return te}function Uv(){return te=Ce>0?pe(Gi,--Ce):0,Pi--,te===10&&(Pi=1,ns--),te}function Le(){return te=Ce<Mg?pe(Gi,Ce++):0,Pi++,te===10&&(Pi=1,ns++),te}function vn(){return pe(Gi,Ce)}function Do(){return Ce}function ol(a,r){return Ir(Gi,a,r)}function tl(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function zg(a){return ns=Pi=1,Mg=gn(Gi=a),Ce=0,[]}function Bg(a){return Gi="",a}function Mo(a){return Dg(ol(Ce-1,Yc(a===91?a+2:a===40?a+1:a)))}function qv(a){for(;(te=vn())&&te<33;)Le();return tl(a)>2||tl(te)>3?"":" "}function jv(a,r){for(;--r&&Le()&&!(te<48||te>102||te>57&&te<65||te>70&&te<97););return ol(a,Do()+(r<6&&vn()==32&&Le()==32))}function Yc(a){for(;Le();)switch(te){case a:return Ce;case 34:case 39:a!==34&&a!==39&&Yc(te);break;case 40:a===41&&Yc(a);break;case 92:Le();break}return Ce}function Lv(a,r){for(;Le()&&a+te!==57;)if(a+te===84&&vn()===47)break;return"/*"+ol(r,Ce-1)+"*"+es(a===47?a:Le())}function $v(a){for(;!tl(vn());)Le();return ol(a,Ce)}function Gv(a){return Bg(zo("",null,null,null,[""],a=zg(a),0,[0],a))}function zo(a,r,o,s,c,h,m,x,S){for(var y=0,E=0,k=m,B=0,G=0,N=0,w=1,Y=1,V=1,K=0,R="",f=c,p=h,v=s,O=R;Y;)switch(N=K,K=Le()){case 40:if(N!=108&&pe(O,k-1)==58){Gc(O+=At(Mo(K),"&","&\f"),"&\f")!=-1&&(V=-1);break}case 34:case 39:case 91:O+=Mo(K);break;case 9:case 10:case 13:case 32:O+=qv(N);break;case 92:O+=jv(Do()-1,7);continue;case 47:switch(vn()){case 42:case 47:Eo(Yv(Lv(Le(),Do()),r,o),S);break;default:O+="/"}break;case 123*w:x[y++]=gn(O)*V;case 125*w:case 59:case 0:switch(K){case 0:case 125:Y=0;case 59+E:V==-1&&(O=At(O,/\f/g,"")),G>0&&gn(O)-k&&Eo(G>32?Gp(O+";",s,o,k-1):Gp(At(O," ","")+";",s,o,k-2),S);break;case 59:O+=";";default:if(Eo(v=$p(O,r,o,y,E,c,x,R,f=[],p=[],k),h),K===123)if(E===0)zo(O,r,v,v,f,h,k,x,p);else switch(B===99&&pe(O,3)===110?100:B){case 100:case 108:case 109:case 115:zo(a,v,v,s&&Eo($p(a,v,v,0,0,c,x,R,c,f=[],k),p),c,p,k,x,s?f:p);break;default:zo(O,v,v,v,[""],p,0,x,p)}}y=E=G=0,w=V=1,R=O="",k=m;break;case 58:k=1+gn(O),G=N;default:if(w<1){if(K==123)--w;else if(K==125&&w++==0&&Uv()==125)continue}switch(O+=es(K),K*w){case 38:V=E>0?1:(O+="\f",-1);break;case 44:x[y++]=(gn(O)-1)*V,V=1;break;case 64:vn()===45&&(O+=Mo(Le())),B=vn(),E=k=gn(R=O+=$v(Do())),K++;break;case 45:N===45&&gn(O)==2&&(w=0)}}return h}function $p(a,r,o,s,c,h,m,x,S,y,E){for(var k=c-1,B=c===0?h:[""],G=hf(B),N=0,w=0,Y=0;N<s;++N)for(var V=0,K=Ir(a,k+1,k=Mv(w=m[N])),R=a;V<G;++V)(R=Dg(w>0?B[V]+" "+K:At(K,/&\f/g,B[V])))&&(S[Y++]=R);return as(a,r,o,c===0?cf:x,S,y,E)}function Yv(a,r,o){return as(a,r,o,kg,es(Pv()),Ir(a,2,-2),0)}function Gp(a,r,o,s){return as(a,r,o,ff,Ir(a,0,s),Ir(a,s+1,-1),s)}function Bi(a,r){for(var o="",s=hf(a),c=0;c<s;c++)o+=r(a[c],c,a,r)||"";return o}function Xv(a,r,o,s){switch(a.type){case Dv:if(a.children.length)break;case Rv:case ff:return a.return=a.return||a.value;case kg:return"";case Rg:return a.return=a.value+"{"+Bi(a.children,s)+"}";case cf:a.value=a.props.join(",")}return gn(o=Bi(a.children,s))?a.return=a.value+"{"+o+"}":""}function Qv(a){var r=hf(a);return function(o,s,c,h){for(var m="",x=0;x<r;x++)m+=a[x](o,s,c,h)||"";return m}}function Zv(a){return function(r){r.root||(r=r.return)&&a(r)}}var Vv=function(r,o,s){for(var c=0,h=0;c=h,h=vn(),c===38&&h===12&&(o[s]=1),!tl(h);)Le();return ol(r,Ce)},Kv=function(r,o){var s=-1,c=44;do switch(tl(c)){case 0:c===38&&vn()===12&&(o[s]=1),r[s]+=Vv(Ce-1,o,s);break;case 2:r[s]+=Mo(c);break;case 4:if(c===44){r[++s]=vn()===58?"&\f":"",o[s]=r[s].length;break}default:r[s]+=es(c)}while(c=Le());return r},Jv=function(r,o){return Bg(Kv(zg(r),o))},Yp=new WeakMap,Wv=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var o=r.value,s=r.parent,c=r.column===s.column&&r.line===s.line;s.type!=="rule";)if(s=s.parent,!s)return;if(!(r.props.length===1&&o.charCodeAt(0)!==58&&!Yp.get(s))&&!c){Yp.set(r,!0);for(var h=[],m=Jv(o,h),x=s.props,S=0,y=0;S<m.length;S++)for(var E=0;E<x.length;E++,y++)r.props[y]=h[S]?m[S].replace(/&\f/g,x[E]):x[E]+" "+m[S]}}},Fv=function(r){if(r.type==="decl"){var o=r.value;o.charCodeAt(0)===108&&o.charCodeAt(2)===98&&(r.return="",r.value="")}};function Ng(a,r){switch(Bv(a,r)){case 5103:return Ot+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ot+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Ot+a+$o+a+ve+a+a;case 6828:case 4268:return Ot+a+ve+a+a;case 6165:return Ot+a+ve+"flex-"+a+a;case 5187:return Ot+a+At(a,/(\w+).+(:[^]+)/,Ot+"box-$1$2"+ve+"flex-$1$2")+a;case 5443:return Ot+a+ve+"flex-item-"+At(a,/flex-|-self/,"")+a;case 4675:return Ot+a+ve+"flex-line-pack"+At(a,/align-content|flex-|-self/,"")+a;case 5548:return Ot+a+ve+At(a,"shrink","negative")+a;case 5292:return Ot+a+ve+At(a,"basis","preferred-size")+a;case 6060:return Ot+"box-"+At(a,"-grow","")+Ot+a+ve+At(a,"grow","positive")+a;case 4554:return Ot+At(a,/([^-])(transform)/g,"$1"+Ot+"$2")+a;case 6187:return At(At(At(a,/(zoom-|grab)/,Ot+"$1"),/(image-set)/,Ot+"$1"),a,"")+a;case 5495:case 3959:return At(a,/(image-set\([^]*)/,Ot+"$1$`$1");case 4968:return At(At(a,/(.+:)(flex-)?(.*)/,Ot+"box-pack:$3"+ve+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ot+a+a;case 4095:case 3583:case 4068:case 2532:return At(a,/(.+)-inline(.+)/,Ot+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gn(a)-1-r>6)switch(pe(a,r+1)){case 109:if(pe(a,r+4)!==45)break;case 102:return At(a,/(.+:)(.+)-([^]+)/,"$1"+Ot+"$2-$3$1"+$o+(pe(a,r+3)==108?"$3":"$2-$3"))+a;case 115:return~Gc(a,"stretch")?Ng(At(a,"stretch","fill-available"),r)+a:a}break;case 4949:if(pe(a,r+1)!==115)break;case 6444:switch(pe(a,gn(a)-3-(~Gc(a,"!important")&&10))){case 107:return At(a,":",":"+Ot)+a;case 101:return At(a,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Ot+(pe(a,14)===45?"inline-":"")+"box$3$1"+Ot+"$2$3$1"+ve+"$2box$3")+a}break;case 5936:switch(pe(a,r+11)){case 114:return Ot+a+ve+At(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Ot+a+ve+At(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Ot+a+ve+At(a,/[svh]\w+-[tblr]{2}/,"lr")+a}return Ot+a+ve+a+a}return a}var Iv=function(r,o,s,c){if(r.length>-1&&!r.return)switch(r.type){case ff:r.return=Ng(r.value,r.length);break;case Rg:return Bi([Yr(r,{value:At(r.value,"@","@"+Ot)})],c);case cf:if(r.length)return Hv(r.props,function(h){switch(Nv(h,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Bi([Yr(r,{props:[At(h,/:(read-\w+)/,":"+$o+"$1")]})],c);case"::placeholder":return Bi([Yr(r,{props:[At(h,/:(plac\w+)/,":"+Ot+"input-$1")]}),Yr(r,{props:[At(h,/:(plac\w+)/,":"+$o+"$1")]}),Yr(r,{props:[At(h,/:(plac\w+)/,ve+"input-$1")]})],c)}return""})}},t5=[Iv],e5=function(r){var o=r.key;if(o==="css"){var s=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(s,function(w){var Y=w.getAttribute("data-emotion");Y.indexOf(" ")!==-1&&(document.head.appendChild(w),w.setAttribute("data-s",""))})}var c=r.stylisPlugins||t5,h={},m,x=[];m=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+o+' "]'),function(w){for(var Y=w.getAttribute("data-emotion").split(" "),V=1;V<Y.length;V++)h[Y[V]]=!0;x.push(w)});var S,y=[Wv,Fv];{var E,k=[Xv,Zv(function(w){E.insert(w)})],B=Qv(y.concat(c,k)),G=function(Y){return Bi(Gv(Y),B)};S=function(Y,V,K,R){E=K,G(Y?Y+"{"+V.styles+"}":V.styles),R&&(N.inserted[V.name]=!0)}}var N={key:o,sheet:new kv({key:o,container:m,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:h,registered:{},insert:S};return N.sheet.hydrate(x),N},n5=!0;function a5(a,r,o){var s="";return o.split(" ").forEach(function(c){a[c]!==void 0?r.push(a[c]+";"):c&&(s+=c+" ")}),s}var Hg=function(r,o,s){var c=r.key+"-"+o.name;(s===!1||n5===!1)&&r.registered[c]===void 0&&(r.registered[c]=o.styles)},i5=function(r,o,s){Hg(r,o,s);var c=r.key+"-"+o.name;if(r.inserted[o.name]===void 0){var h=o;do r.insert(o===h?"."+c:"",h,r.sheet,!0),h=h.next;while(h!==void 0)}};function r5(a){for(var r=0,o,s=0,c=a.length;c>=4;++s,c-=4)o=a.charCodeAt(s)&255|(a.charCodeAt(++s)&255)<<8|(a.charCodeAt(++s)&255)<<16|(a.charCodeAt(++s)&255)<<24,o=(o&65535)*1540483477+((o>>>16)*59797<<16),o^=o>>>24,r=(o&65535)*1540483477+((o>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(c){case 3:r^=(a.charCodeAt(s+2)&255)<<16;case 2:r^=(a.charCodeAt(s+1)&255)<<8;case 1:r^=a.charCodeAt(s)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var l5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function o5(a){var r=Object.create(null);return function(o){return r[o]===void 0&&(r[o]=a(o)),r[o]}}var s5=/[A-Z]|^ms/g,u5=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Pg=function(r){return r.charCodeAt(1)===45},Xp=function(r){return r!=null&&typeof r!="boolean"},Mc=o5(function(a){return Pg(a)?a:a.replace(s5,"-$&").toLowerCase()}),Qp=function(r,o){switch(r){case"animation":case"animationName":if(typeof o=="string")return o.replace(u5,function(s,c,h){return mn={name:c,styles:h,next:mn},c})}return l5[r]!==1&&!Pg(r)&&typeof o=="number"&&o!==0?o+"px":o};function el(a,r,o){if(o==null)return"";var s=o;if(s.__emotion_styles!==void 0)return s;switch(typeof o){case"boolean":return"";case"object":{var c=o;if(c.anim===1)return mn={name:c.name,styles:c.styles,next:mn},c.name;var h=o;if(h.styles!==void 0){var m=h.next;if(m!==void 0)for(;m!==void 0;)mn={name:m.name,styles:m.styles,next:mn},m=m.next;var x=h.styles+";";return x}return c5(a,r,o)}case"function":{if(a!==void 0){var S=mn,y=o(a);return mn=S,el(a,r,y)}break}}var E=o;if(r==null)return E;var k=r[E];return k!==void 0?k:E}function c5(a,r,o){var s="";if(Array.isArray(o))for(var c=0;c<o.length;c++)s+=el(a,r,o[c])+";";else for(var h in o){var m=o[h];if(typeof m!="object"){var x=m;r!=null&&r[x]!==void 0?s+=h+"{"+r[x]+"}":Xp(x)&&(s+=Mc(h)+":"+Qp(h,x)+";")}else if(Array.isArray(m)&&typeof m[0]=="string"&&(r==null||r[m[0]]===void 0))for(var S=0;S<m.length;S++)Xp(m[S])&&(s+=Mc(h)+":"+Qp(h,m[S])+";");else{var y=el(a,r,m);switch(h){case"animation":case"animationName":{s+=Mc(h)+":"+y+";";break}default:s+=h+"{"+y+"}"}}}return s}var Zp=/label:\s*([^\s;{]+)\s*(;|$)/g,mn;function Ug(a,r,o){if(a.length===1&&typeof a[0]=="object"&&a[0]!==null&&a[0].styles!==void 0)return a[0];var s=!0,c="";mn=void 0;var h=a[0];if(h==null||h.raw===void 0)s=!1,c+=el(o,r,h);else{var m=h;c+=m[0]}for(var x=1;x<a.length;x++)if(c+=el(o,r,a[x]),s){var S=h;c+=S[x]}Zp.lastIndex=0;for(var y="",E;(E=Zp.exec(c))!==null;)y+="-"+E[1];var k=r5(c)+y;return{name:k,styles:c,next:mn}}var f5=function(r){return r()},h5=vp.useInsertionEffect?vp.useInsertionEffect:!1,d5=h5||f5,qg=ct.createContext(typeof HTMLElement<"u"?e5({key:"css"}):null);qg.Provider;var p5=function(r){return ct.forwardRef(function(o,s){var c=ct.useContext(qg);return r(o,c,s)})},g5=ct.createContext({});function m5(a){var r=Object.create(null);return function(o){return r[o]===void 0&&(r[o]=a(o)),r[o]}}var b5=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,y5=m5(function(a){return b5.test(a)||a.charCodeAt(0)===111&&a.charCodeAt(1)===110&&a.charCodeAt(2)<91}),v5=y5,x5=function(r){return r!=="theme"},Vp=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?v5:x5},Kp=function(r,o,s){var c;if(o){var h=o.shouldForwardProp;c=r.__emotion_forwardProp&&h?function(m){return r.__emotion_forwardProp(m)&&h(m)}:h}return typeof c!="function"&&s&&(c=r.__emotion_forwardProp),c},S5=function(r){var o=r.cache,s=r.serialized,c=r.isStringTag;return Hg(o,s,c),d5(function(){return i5(o,s,c)}),null},w5=function a(r,o){var s=r.__emotion_real===r,c=s&&r.__emotion_base||r,h,m;o!==void 0&&(h=o.label,m=o.target);var x=Kp(r,o,s),S=x||Vp(c),y=!S("as");return function(){var E=arguments,k=s&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(h!==void 0&&k.push("label:"+h+";"),E[0]==null||E[0].raw===void 0)k.push.apply(k,E);else{var B=E[0];k.push(B[0]);for(var G=E.length,N=1;N<G;N++)k.push(E[N],B[N])}var w=p5(function(Y,V,K){var R=y&&Y.as||c,f="",p=[],v=Y;if(Y.theme==null){v={};for(var O in Y)v[O]=Y[O];v.theme=ct.useContext(g5)}typeof Y.className=="string"?f=a5(V.registered,p,Y.className):Y.className!=null&&(f=Y.className+" ");var z=Ug(k.concat(p),V.registered,v);f+=V.key+"-"+z.name,m!==void 0&&(f+=" "+m);var U=y&&x===void 0?Vp(R):S,b={};for(var X in Y)y&&X==="as"||U(X)&&(b[X]=Y[X]);return b.className=f,K&&(b.ref=K),ct.createElement(ct.Fragment,null,ct.createElement(S5,{cache:V,serialized:z,isStringTag:typeof R=="string"}),ct.createElement(R,b))});return w.displayName=h!==void 0?h:"Styled("+(typeof c=="string"?c:c.displayName||c.name||"Component")+")",w.defaultProps=r.defaultProps,w.__emotion_real=w,w.__emotion_base=c,w.__emotion_styles=k,w.__emotion_forwardProp=x,Object.defineProperty(w,"toString",{value:function(){return"."+m}}),w.withComponent=function(Y,V){var K=a(Y,$c({},o,V,{shouldForwardProp:Kp(w,V,!0)}));return K.apply(void 0,k)},w}},T5=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Xc=w5.bind(null);T5.forEach(function(a){Xc[a]=Xc(a)});function O5(a,r){return Xc(a,r)}function A5(a,r){Array.isArray(a.__emotion_styles)&&(a.__emotion_styles=r(a.__emotion_styles))}const Jp=[];function Ha(a){return Jp[0]=a,Ug(Jp)}const E5=a=>{const r=Object.keys(a).map(o=>({key:o,val:a[o]}))||[];return r.sort((o,s)=>o.val-s.val),r.reduce((o,s)=>({...o,[s.key]:s.val}),{})};function C5(a){const{values:r={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:o="px",step:s=5,...c}=a,h=E5(r),m=Object.keys(h);function x(B){return`@media (min-width:${typeof r[B]=="number"?r[B]:B}${o})`}function S(B){return`@media (max-width:${(typeof r[B]=="number"?r[B]:B)-s/100}${o})`}function y(B,G){const N=m.indexOf(G);return`@media (min-width:${typeof r[B]=="number"?r[B]:B}${o}) and (max-width:${(N!==-1&&typeof r[m[N]]=="number"?r[m[N]]:G)-s/100}${o})`}function E(B){return m.indexOf(B)+1<m.length?y(B,m[m.indexOf(B)+1]):x(B)}function k(B){const G=m.indexOf(B);return G===0?x(m[1]):G===m.length-1?S(m[G]):y(B,m[m.indexOf(B)+1]).replace("@media","@media not all and")}return{keys:m,values:h,up:x,down:S,between:y,only:E,not:k,unit:o,...c}}const _5={borderRadius:4};function jg(a=8,r=sf({spacing:a})){if(a.mui)return a;const o=(...s)=>(s.length===0?[1]:s).map(h=>{const m=r(h);return typeof m=="number"?`${m}px`:m}).join(" ");return o.mui=!0,o}function k5(a,r){const o=this;if(o.vars){if(!o.colorSchemes?.[a]||typeof o.getColorSchemeSelector!="function")return{};let s=o.getColorSchemeSelector(a);return s==="&"?r:((s.includes("data-")||s.includes("."))&&(s=`*:where(${s.replace(/\s*&$/,"")}) &`),{[s]:r})}return o.palette.mode===a?r:{}}function Lg(a={},...r){const{breakpoints:o={},palette:s={},spacing:c,shape:h={},...m}=a,x=C5(o),S=jg(c);let y=je({breakpoints:x,direction:"ltr",components:{},palette:{mode:"light",...s},spacing:S,shape:{..._5,...h}},m);return y=qy(y),y.applyStyles=k5,y=r.reduce((E,k)=>je(E,k),y),y.unstable_sxConfig={...ts,...m?.unstable_sxConfig},y.unstable_sx=function(k){return Hi({sx:k,theme:this})},y}const R5={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function $g(a,r,o="Mui"){const s=R5[r];return s?`${o}-${s}`:`${zy.generate(a)}-${r}`}function D5(a,r,o="Mui"){const s={};return r.forEach(c=>{s[c]=$g(a,c,o)}),s}function Gg(a){const{variants:r,...o}=a,s={variants:r,style:Ha(o),isProcessed:!0};return s.style===o||r&&r.forEach(c=>{typeof c.style!="function"&&(c.style=Ha(c.style))}),s}const M5=Lg();function zc(a){return a!=="ownerState"&&a!=="theme"&&a!=="sx"&&a!=="as"}function Ba(a,r){return r&&a&&typeof a=="object"&&a.styles&&!a.styles.startsWith("@layer")&&(a.styles=`@layer ${r}{${String(a.styles)}}`),a}function z5(a){return a?(r,o)=>o[a]:null}function B5(a,r,o){a.theme=P5(a.theme)?o:a.theme[r]||a.theme}function Bo(a,r,o){const s=typeof r=="function"?r(a):r;if(Array.isArray(s))return s.flatMap(c=>Bo(a,c,o));if(Array.isArray(s?.variants)){let c;if(s.isProcessed)c=o?Ba(s.style,o):s.style;else{const{variants:h,...m}=s;c=o?Ba(Ha(m),o):m}return Yg(a,s.variants,[c],o)}return s?.isProcessed?o?Ba(Ha(s.style),o):s.style:o?Ba(Ha(s),o):s}function Yg(a,r,o=[],s=void 0){let c;t:for(let h=0;h<r.length;h+=1){const m=r[h];if(typeof m.props=="function"){if(c??={...a,...a.ownerState,ownerState:a.ownerState},!m.props(c))continue}else for(const x in m.props)if(a[x]!==m.props[x]&&a.ownerState?.[x]!==m.props[x])continue t;typeof m.style=="function"?(c??={...a,...a.ownerState,ownerState:a.ownerState},o.push(s?Ba(Ha(m.style(c)),s):m.style(c))):o.push(s?Ba(Ha(m.style),s):m.style)}return o}function N5(a={}){const{themeId:r,defaultTheme:o=M5,rootShouldForwardProp:s=zc,slotShouldForwardProp:c=zc}=a;function h(x){B5(x,r,o)}return(x,S={})=>{A5(x,v=>v.filter(O=>O!==Hi));const{name:y,slot:E,skipVariantsResolver:k,skipSx:B,overridesResolver:G=z5(q5(E)),...N}=S,w=y&&y.startsWith("Mui")||E?"components":"custom",Y=k!==void 0?k:E&&E!=="Root"&&E!=="root"||!1,V=B||!1;let K=zc;E==="Root"||E==="root"?K=s:E?K=c:U5(x)&&(K=void 0);const R=O5(x,{shouldForwardProp:K,label:H5(),...N}),f=v=>{if(v.__emotion_real===v)return v;if(typeof v=="function")return function(z){return Bo(z,v,z.theme.modularCssLayers?w:void 0)};if(qn(v)){const O=Gg(v);return function(U){return O.variants?Bo(U,O,U.theme.modularCssLayers?w:void 0):U.theme.modularCssLayers?Ba(O.style,w):O.style}}return v},p=(...v)=>{const O=[],z=v.map(f),U=[];if(O.push(h),y&&G&&U.push(function(rt){const mt=rt.theme.components?.[y]?.styleOverrides;if(!mt)return null;const j={};for(const J in mt)j[J]=Bo(rt,mt[J],rt.theme.modularCssLayers?"theme":void 0);return G(rt,j)}),y&&!Y&&U.push(function(rt){const mt=rt.theme?.components?.[y]?.variants;return mt?Yg(rt,mt,[],rt.theme.modularCssLayers?"theme":void 0):null}),V||U.push(Hi),Array.isArray(z[0])){const I=z.shift(),rt=new Array(O.length).fill(""),Bt=new Array(U.length).fill("");let mt;mt=[...rt,...I,...Bt],mt.raw=[...rt,...I.raw,...Bt],O.unshift(mt)}const b=[...O,...z,...U],X=R(...b);return x.muiName&&(X.muiName=x.muiName),X};return R.withConfig&&(p.withConfig=R.withConfig),p}}function H5(a,r){return void 0}function P5(a){for(const r in a)return!1;return!0}function U5(a){return typeof a=="string"&&a.charCodeAt(0)>96}function q5(a){return a&&a.charAt(0).toLowerCase()+a.slice(1)}function Qc(a,r,o=!1){const s={...r};for(const c in a)if(Object.prototype.hasOwnProperty.call(a,c)){const h=c;if(h==="components"||h==="slots")s[h]={...a[h],...s[h]};else if(h==="componentsProps"||h==="slotProps"){const m=a[h],x=r[h];if(!x)s[h]=m||{};else if(!m)s[h]=x;else{s[h]={...x};for(const S in m)if(Object.prototype.hasOwnProperty.call(m,S)){const y=S;s[h][y]=Qc(m[y],x[y],o)}}}else h==="className"&&o&&r.className?s.className=Ag(a?.className,r?.className):h==="style"&&o&&r.style?s.style={...a?.style,...r?.style}:s[h]===void 0&&(s[h]=a[h])}return s}function j5(a,r=Number.MIN_SAFE_INTEGER,o=Number.MAX_SAFE_INTEGER){return Math.max(r,Math.min(a,o))}function df(a,r=0,o=1){return j5(a,r,o)}function L5(a){a=a.slice(1);const r=new RegExp(`.{1,${a.length>=6?2:1}}`,"g");let o=a.match(r);return o&&o[0].length===1&&(o=o.map(s=>s+s)),o?`rgb${o.length===4?"a":""}(${o.map((s,c)=>c<3?parseInt(s,16):Math.round(parseInt(s,16)/255*1e3)/1e3).join(", ")})`:""}function da(a){if(a.type)return a;if(a.charAt(0)==="#")return da(L5(a));const r=a.indexOf("("),o=a.substring(0,r);if(!["rgb","rgba","hsl","hsla","color"].includes(o))throw new Error(qa(9,a));let s=a.substring(r+1,a.length-1),c;if(o==="color"){if(s=s.split(" "),c=s.shift(),s.length===4&&s[3].charAt(0)==="/"&&(s[3]=s[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(c))throw new Error(qa(10,c))}else s=s.split(",");return s=s.map(h=>parseFloat(h)),{type:o,values:s,colorSpace:c}}const $5=a=>{const r=da(a);return r.values.slice(0,3).map((o,s)=>r.type.includes("hsl")&&s!==0?`${o}%`:o).join(" ")},Vr=(a,r)=>{try{return $5(a)}catch{return a}};function is(a){const{type:r,colorSpace:o}=a;let{values:s}=a;return r.includes("rgb")?s=s.map((c,h)=>h<3?parseInt(c,10):c):r.includes("hsl")&&(s[1]=`${s[1]}%`,s[2]=`${s[2]}%`),r.includes("color")?s=`${o} ${s.join(" ")}`:s=`${s.join(", ")}`,`${r}(${s})`}function Xg(a){a=da(a);const{values:r}=a,o=r[0],s=r[1]/100,c=r[2]/100,h=s*Math.min(c,1-c),m=(y,E=(y+o/30)%12)=>c-h*Math.max(Math.min(E-3,9-E,1),-1);let x="rgb";const S=[Math.round(m(0)*255),Math.round(m(8)*255),Math.round(m(4)*255)];return a.type==="hsla"&&(x+="a",S.push(r[3])),is({type:x,values:S})}function Zc(a){a=da(a);let r=a.type==="hsl"||a.type==="hsla"?da(Xg(a)).values:a.values;return r=r.map(o=>(a.type!=="color"&&(o/=255),o<=.03928?o/12.92:((o+.055)/1.055)**2.4)),Number((.2126*r[0]+.7152*r[1]+.0722*r[2]).toFixed(3))}function G5(a,r){const o=Zc(a),s=Zc(r);return(Math.max(o,s)+.05)/(Math.min(o,s)+.05)}function Y5(a,r){return a=da(a),r=df(r),(a.type==="rgb"||a.type==="hsl")&&(a.type+="a"),a.type==="color"?a.values[3]=`/${r}`:a.values[3]=r,is(a)}function Co(a,r,o){try{return Y5(a,r)}catch{return a}}function pf(a,r){if(a=da(a),r=df(r),a.type.includes("hsl"))a.values[2]*=1-r;else if(a.type.includes("rgb")||a.type.includes("color"))for(let o=0;o<3;o+=1)a.values[o]*=1-r;return is(a)}function Ht(a,r,o){try{return pf(a,r)}catch{return a}}function gf(a,r){if(a=da(a),r=df(r),a.type.includes("hsl"))a.values[2]+=(100-a.values[2])*r;else if(a.type.includes("rgb"))for(let o=0;o<3;o+=1)a.values[o]+=(255-a.values[o])*r;else if(a.type.includes("color"))for(let o=0;o<3;o+=1)a.values[o]+=(1-a.values[o])*r;return is(a)}function Pt(a,r,o){try{return gf(a,r)}catch{return a}}function X5(a,r=.15){return Zc(a)>.5?pf(a,r):gf(a,r)}function _o(a,r,o){try{return X5(a,r)}catch{return a}}const Q5=ct.createContext(void 0);function Z5(a){const{theme:r,name:o,props:s}=a;if(!r||!r.components||!r.components[o])return s;const c=r.components[o];return c.defaultProps?Qc(c.defaultProps,s,r.components.mergeClassNameAndStyle):!c.styleOverrides&&!c.variants?Qc(c,s,r.components.mergeClassNameAndStyle):s}function V5({props:a,name:r}){const o=ct.useContext(Q5);return Z5({props:a,name:r,theme:{components:o}})}const Wp={theme:void 0};function K5(a){let r,o;return function(c){let h=r;return(h===void 0||c.theme!==o)&&(Wp.theme=c.theme,h=Gg(a(Wp)),r=h,o=c.theme),h}}function J5(a=""){function r(...s){if(!s.length)return"";const c=s[0];return typeof c=="string"&&!c.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${a?`${a}-`:""}${c}${r(...s.slice(1))})`:`, ${c}`}return(s,...c)=>`var(--${a?`${a}-`:""}${s}${r(...c)})`}const Fp=(a,r,o,s=[])=>{let c=a;r.forEach((h,m)=>{m===r.length-1?Array.isArray(c)?c[Number(h)]=o:c&&typeof c=="object"&&(c[h]=o):c&&typeof c=="object"&&(c[h]||(c[h]=s.includes(h)?[]:{}),c=c[h])})},W5=(a,r,o)=>{function s(c,h=[],m=[]){Object.entries(c).forEach(([x,S])=>{(!o||o&&!o([...h,x]))&&S!=null&&(typeof S=="object"&&Object.keys(S).length>0?s(S,[...h,x],Array.isArray(S)?[...m,x]:m):r([...h,x],S,m))})}s(a)},F5=(a,r)=>typeof r=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(s=>a.includes(s))||a[a.length-1].toLowerCase().includes("opacity")?r:`${r}px`:r;function Bc(a,r){const{prefix:o,shouldSkipGeneratingVar:s}=r||{},c={},h={},m={};return W5(a,(x,S,y)=>{if((typeof S=="string"||typeof S=="number")&&(!s||!s(x,S))){const E=`--${o?`${o}-`:""}${x.join("-")}`,k=F5(x,S);Object.assign(c,{[E]:k}),Fp(h,x,`var(${E})`,y),Fp(m,x,`var(${E}, ${k})`,y)}},x=>x[0]==="vars"),{css:c,vars:h,varsWithDefaults:m}}function I5(a,r={}){const{getSelector:o=Y,disableCssColorScheme:s,colorSchemeSelector:c}=r,{colorSchemes:h={},components:m,defaultColorScheme:x="light",...S}=a,{vars:y,css:E,varsWithDefaults:k}=Bc(S,r);let B=k;const G={},{[x]:N,...w}=h;if(Object.entries(w||{}).forEach(([R,f])=>{const{vars:p,css:v,varsWithDefaults:O}=Bc(f,r);B=je(B,O),G[R]={css:v,vars:p}}),N){const{css:R,vars:f,varsWithDefaults:p}=Bc(N,r);B=je(B,p),G[x]={css:R,vars:f}}function Y(R,f){let p=c;if(c==="class"&&(p=".%s"),c==="data"&&(p="[data-%s]"),c?.startsWith("data-")&&!c.includes("%s")&&(p=`[${c}="%s"]`),R){if(p==="media")return a.defaultColorScheme===R?":root":{[`@media (prefers-color-scheme: ${h[R]?.palette?.mode||R})`]:{":root":f}};if(p)return a.defaultColorScheme===R?`:root, ${p.replace("%s",String(R))}`:p.replace("%s",String(R))}return":root"}return{vars:B,generateThemeVars:()=>{let R={...y};return Object.entries(G).forEach(([,{vars:f}])=>{R=je(R,f)}),R},generateStyleSheets:()=>{const R=[],f=a.defaultColorScheme||"light";function p(z,U){Object.keys(U).length&&R.push(typeof z=="string"?{[z]:{...U}}:z)}p(o(void 0,{...E}),E);const{[f]:v,...O}=G;if(v){const{css:z}=v,U=h[f]?.palette?.mode,b=!s&&U?{colorScheme:U,...z}:{...z};p(o(f,{...b}),b)}return Object.entries(O).forEach(([z,{css:U}])=>{const b=h[z]?.palette?.mode,X=!s&&b?{colorScheme:b,...U}:{...U};p(o(z,{...X}),X)}),R}}}function tx(a){return function(o){return a==="media"?`@media (prefers-color-scheme: ${o})`:a?a.startsWith("data-")&&!a.includes("%s")?`[${a}="${o}"] &`:a==="class"?`.${o} &`:a==="data"?`[data-${o}] &`:`${a.replace("%s",o)} &`:"&"}}const nl={black:"#000",white:"#fff"},ex={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Ei={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},Ci={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},Xr={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},_i={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},ki={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},Ri={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"};function Qg(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:nl.white,default:nl.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const nx=Qg();function Zg(){return{text:{primary:nl.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:nl.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const Ip=Zg();function tg(a,r,o,s){const c=s.light||s,h=s.dark||s*1.5;a[r]||(a.hasOwnProperty(o)?a[r]=a[o]:r==="light"?a.light=gf(a.main,c):r==="dark"&&(a.dark=pf(a.main,h)))}function ax(a="light"){return a==="dark"?{main:_i[200],light:_i[50],dark:_i[400]}:{main:_i[700],light:_i[400],dark:_i[800]}}function ix(a="light"){return a==="dark"?{main:Ei[200],light:Ei[50],dark:Ei[400]}:{main:Ei[500],light:Ei[300],dark:Ei[700]}}function rx(a="light"){return a==="dark"?{main:Ci[500],light:Ci[300],dark:Ci[700]}:{main:Ci[700],light:Ci[400],dark:Ci[800]}}function lx(a="light"){return a==="dark"?{main:ki[400],light:ki[300],dark:ki[700]}:{main:ki[700],light:ki[500],dark:ki[900]}}function ox(a="light"){return a==="dark"?{main:Ri[400],light:Ri[300],dark:Ri[700]}:{main:Ri[800],light:Ri[500],dark:Ri[900]}}function sx(a="light"){return a==="dark"?{main:Xr[400],light:Xr[300],dark:Xr[700]}:{main:"#ed6c02",light:Xr[500],dark:Xr[900]}}function mf(a){const{mode:r="light",contrastThreshold:o=3,tonalOffset:s=.2,...c}=a,h=a.primary||ax(r),m=a.secondary||ix(r),x=a.error||rx(r),S=a.info||lx(r),y=a.success||ox(r),E=a.warning||sx(r);function k(w){return G5(w,Ip.text.primary)>=o?Ip.text.primary:nx.text.primary}const B=({color:w,name:Y,mainShade:V=500,lightShade:K=300,darkShade:R=700})=>{if(w={...w},!w.main&&w[V]&&(w.main=w[V]),!w.hasOwnProperty("main"))throw new Error(qa(11,Y?` (${Y})`:"",V));if(typeof w.main!="string")throw new Error(qa(12,Y?` (${Y})`:"",JSON.stringify(w.main)));return tg(w,"light",K,s),tg(w,"dark",R,s),w.contrastText||(w.contrastText=k(w.main)),w};let G;return r==="light"?G=Qg():r==="dark"&&(G=Zg()),je({common:{...nl},mode:r,primary:B({color:h,name:"primary"}),secondary:B({color:m,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:B({color:x,name:"error"}),warning:B({color:E,name:"warning"}),info:B({color:S,name:"info"}),success:B({color:y,name:"success"}),grey:ex,contrastThreshold:o,getContrastText:k,augmentColor:B,tonalOffset:s,...G},c)}function ux(a){const r={};return Object.entries(a).forEach(s=>{const[c,h]=s;typeof h=="object"&&(r[c]=`${h.fontStyle?`${h.fontStyle} `:""}${h.fontVariant?`${h.fontVariant} `:""}${h.fontWeight?`${h.fontWeight} `:""}${h.fontStretch?`${h.fontStretch} `:""}${h.fontSize||""}${h.lineHeight?`/${h.lineHeight} `:""}${h.fontFamily||""}`)}),r}function cx(a,r){return{toolbar:{minHeight:56,[a.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[a.up("sm")]:{minHeight:64}},...r}}function fx(a){return Math.round(a*1e5)/1e5}const eg={textTransform:"uppercase"},ng='"Roboto", "Helvetica", "Arial", sans-serif';function hx(a,r){const{fontFamily:o=ng,fontSize:s=14,fontWeightLight:c=300,fontWeightRegular:h=400,fontWeightMedium:m=500,fontWeightBold:x=700,htmlFontSize:S=16,allVariants:y,pxToRem:E,...k}=typeof r=="function"?r(a):r,B=s/14,G=E||(Y=>`${Y/S*B}rem`),N=(Y,V,K,R,f)=>({fontFamily:o,fontWeight:Y,fontSize:G(V),lineHeight:K,...o===ng?{letterSpacing:`${fx(R/V)}em`}:{},...f,...y}),w={h1:N(c,96,1.167,-1.5),h2:N(c,60,1.2,-.5),h3:N(h,48,1.167,0),h4:N(h,34,1.235,.25),h5:N(h,24,1.334,0),h6:N(m,20,1.6,.15),subtitle1:N(h,16,1.75,.15),subtitle2:N(m,14,1.57,.1),body1:N(h,16,1.5,.15),body2:N(h,14,1.43,.15),button:N(m,14,1.75,.4,eg),caption:N(h,12,1.66,.4),overline:N(h,12,2.66,1,eg),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return je({htmlFontSize:S,pxToRem:G,fontFamily:o,fontSize:s,fontWeightLight:c,fontWeightRegular:h,fontWeightMedium:m,fontWeightBold:x,...w},k,{clone:!1})}const dx=.2,px=.14,gx=.12;function Lt(...a){return[`${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px rgba(0,0,0,${dx})`,`${a[4]}px ${a[5]}px ${a[6]}px ${a[7]}px rgba(0,0,0,${px})`,`${a[8]}px ${a[9]}px ${a[10]}px ${a[11]}px rgba(0,0,0,${gx})`].join(",")}const mx=["none",Lt(0,2,1,-1,0,1,1,0,0,1,3,0),Lt(0,3,1,-2,0,2,2,0,0,1,5,0),Lt(0,3,3,-2,0,3,4,0,0,1,8,0),Lt(0,2,4,-1,0,4,5,0,0,1,10,0),Lt(0,3,5,-1,0,5,8,0,0,1,14,0),Lt(0,3,5,-1,0,6,10,0,0,1,18,0),Lt(0,4,5,-2,0,7,10,1,0,2,16,1),Lt(0,5,5,-3,0,8,10,1,0,3,14,2),Lt(0,5,6,-3,0,9,12,1,0,3,16,2),Lt(0,6,6,-3,0,10,14,1,0,4,18,3),Lt(0,6,7,-4,0,11,15,1,0,4,20,3),Lt(0,7,8,-4,0,12,17,2,0,5,22,4),Lt(0,7,8,-4,0,13,19,2,0,5,24,4),Lt(0,7,9,-4,0,14,21,2,0,5,26,4),Lt(0,8,9,-5,0,15,22,2,0,6,28,5),Lt(0,8,10,-5,0,16,24,2,0,6,30,5),Lt(0,8,11,-5,0,17,26,2,0,6,32,5),Lt(0,9,11,-5,0,18,28,2,0,7,34,6),Lt(0,9,12,-6,0,19,29,2,0,7,36,6),Lt(0,10,13,-6,0,20,31,3,0,8,38,7),Lt(0,10,13,-6,0,21,33,3,0,8,40,7),Lt(0,10,14,-6,0,22,35,3,0,8,42,7),Lt(0,11,14,-7,0,23,36,3,0,9,44,8),Lt(0,11,15,-7,0,24,38,3,0,9,46,8)],bx={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},yx={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function ag(a){return`${Math.round(a)}ms`}function vx(a){if(!a)return 0;const r=a/36;return Math.min(Math.round((4+15*r**.25+r/5)*10),3e3)}function xx(a){const r={...bx,...a.easing},o={...yx,...a.duration};return{getAutoHeightDuration:vx,create:(c=["all"],h={})=>{const{duration:m=o.standard,easing:x=r.easeInOut,delay:S=0,...y}=h;return(Array.isArray(c)?c:[c]).map(E=>`${E} ${typeof m=="string"?m:ag(m)} ${x} ${typeof S=="string"?S:ag(S)}`).join(",")},...a,easing:r,duration:o}}const Sx={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function wx(a){return qn(a)||typeof a>"u"||typeof a=="string"||typeof a=="boolean"||typeof a=="number"||Array.isArray(a)}function Vg(a={}){const r={...a};function o(s){const c=Object.entries(s);for(let h=0;h<c.length;h++){const[m,x]=c[h];!wx(x)||m.startsWith("unstable_")?delete s[m]:qn(x)&&(s[m]={...x},o(s[m]))}}return o(r),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function Vc(a={},...r){const{breakpoints:o,mixins:s={},spacing:c,palette:h={},transitions:m={},typography:x={},shape:S,...y}=a;if(a.vars&&a.generateThemeVars===void 0)throw new Error(qa(20));const E=mf(h),k=Lg(a);let B=je(k,{mixins:cx(k.breakpoints,s),palette:E,shadows:mx.slice(),typography:hx(E,x),transitions:xx(m),zIndex:{...Sx}});return B=je(B,y),B=r.reduce((G,N)=>je(G,N),B),B.unstable_sxConfig={...ts,...y?.unstable_sxConfig},B.unstable_sx=function(N){return Hi({sx:N,theme:this})},B.toRuntimeSource=Vg,B}function Tx(a){let r;return a<1?r=5.11916*a**2:r=4.5*Math.log(a+1)+2,Math.round(r*10)/1e3}const Ox=[...Array(25)].map((a,r)=>{if(r===0)return"none";const o=Tx(r);return`linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`});function Kg(a){return{inputPlaceholder:a==="dark"?.5:.42,inputUnderline:a==="dark"?.7:.42,switchTrackDisabled:a==="dark"?.2:.12,switchTrack:a==="dark"?.3:.38}}function Jg(a){return a==="dark"?Ox:[]}function Ax(a){const{palette:r={mode:"light"},opacity:o,overlays:s,...c}=a,h=mf(r);return{palette:h,opacity:{...Kg(h.mode),...o},overlays:s||Jg(h.mode),...c}}function Ex(a){return!!a[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!a[0].match(/sxConfig$/)||a[0]==="palette"&&!!a[1]?.match(/(mode|contrastThreshold|tonalOffset)/)}const Cx=a=>[...[...Array(25)].map((r,o)=>`--${a?`${a}-`:""}overlays-${o}`),`--${a?`${a}-`:""}palette-AppBar-darkBg`,`--${a?`${a}-`:""}palette-AppBar-darkColor`],_x=a=>(r,o)=>{const s=a.rootSelector||":root",c=a.colorSchemeSelector;let h=c;if(c==="class"&&(h=".%s"),c==="data"&&(h="[data-%s]"),c?.startsWith("data-")&&!c.includes("%s")&&(h=`[${c}="%s"]`),a.defaultColorScheme===r){if(r==="dark"){const m={};return Cx(a.cssVarPrefix).forEach(x=>{m[x]=o[x],delete o[x]}),h==="media"?{[s]:o,"@media (prefers-color-scheme: dark)":{[s]:m}}:h?{[h.replace("%s",r)]:m,[`${s}, ${h.replace("%s",r)}`]:o}:{[s]:{...o,...m}}}if(h&&h!=="media")return`${s}, ${h.replace("%s",String(r))}`}else if(r){if(h==="media")return{[`@media (prefers-color-scheme: ${String(r)})`]:{[s]:o}};if(h)return h.replace("%s",String(r))}return s};function kx(a,r){r.forEach(o=>{a[o]||(a[o]={})})}function q(a,r,o){!a[r]&&o&&(a[r]=o)}function Kr(a){return typeof a!="string"||!a.startsWith("hsl")?a:Xg(a)}function Pn(a,r){`${r}Channel`in a||(a[`${r}Channel`]=Vr(Kr(a[r])))}function Rx(a){return typeof a=="number"?`${a}px`:typeof a=="string"||typeof a=="function"||Array.isArray(a)?a:"8px"}const pn=a=>{try{return a()}catch{}},Dx=(a="mui")=>J5(a);function Nc(a,r,o,s){if(!r)return;r=r===!0?{}:r;const c=s==="dark"?"dark":"light";if(!o){a[s]=Ax({...r,palette:{mode:c,...r?.palette}});return}const{palette:h,...m}=Vc({...o,palette:{mode:c,...r?.palette}});return a[s]={...r,palette:h,opacity:{...Kg(c),...r?.opacity},overlays:r?.overlays||Jg(c)},m}function Mx(a={},...r){const{colorSchemes:o={light:!0},defaultColorScheme:s,disableCssColorScheme:c=!1,cssVarPrefix:h="mui",shouldSkipGeneratingVar:m=Ex,colorSchemeSelector:x=o.light&&o.dark?"media":void 0,rootSelector:S=":root",...y}=a,E=Object.keys(o)[0],k=s||(o.light&&E!=="light"?"light":E),B=Dx(h),{[k]:G,light:N,dark:w,...Y}=o,V={...Y};let K=G;if((k==="dark"&&!("dark"in o)||k==="light"&&!("light"in o))&&(K=!0),!K)throw new Error(qa(21,k));const R=Nc(V,K,y,k);N&&!V.light&&Nc(V,N,void 0,"light"),w&&!V.dark&&Nc(V,w,void 0,"dark");let f={defaultColorScheme:k,...R,cssVarPrefix:h,colorSchemeSelector:x,rootSelector:S,getCssVar:B,colorSchemes:V,font:{...ux(R.typography),...R.font},spacing:Rx(y.spacing)};Object.keys(f.colorSchemes).forEach(U=>{const b=f.colorSchemes[U].palette,X=I=>{const rt=I.split("-"),Bt=rt[1],mt=rt[2];return B(I,b[Bt][mt])};if(b.mode==="light"&&(q(b.common,"background","#fff"),q(b.common,"onBackground","#000")),b.mode==="dark"&&(q(b.common,"background","#000"),q(b.common,"onBackground","#fff")),kx(b,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),b.mode==="light"){q(b.Alert,"errorColor",Ht(b.error.light,.6)),q(b.Alert,"infoColor",Ht(b.info.light,.6)),q(b.Alert,"successColor",Ht(b.success.light,.6)),q(b.Alert,"warningColor",Ht(b.warning.light,.6)),q(b.Alert,"errorFilledBg",X("palette-error-main")),q(b.Alert,"infoFilledBg",X("palette-info-main")),q(b.Alert,"successFilledBg",X("palette-success-main")),q(b.Alert,"warningFilledBg",X("palette-warning-main")),q(b.Alert,"errorFilledColor",pn(()=>b.getContrastText(b.error.main))),q(b.Alert,"infoFilledColor",pn(()=>b.getContrastText(b.info.main))),q(b.Alert,"successFilledColor",pn(()=>b.getContrastText(b.success.main))),q(b.Alert,"warningFilledColor",pn(()=>b.getContrastText(b.warning.main))),q(b.Alert,"errorStandardBg",Pt(b.error.light,.9)),q(b.Alert,"infoStandardBg",Pt(b.info.light,.9)),q(b.Alert,"successStandardBg",Pt(b.success.light,.9)),q(b.Alert,"warningStandardBg",Pt(b.warning.light,.9)),q(b.Alert,"errorIconColor",X("palette-error-main")),q(b.Alert,"infoIconColor",X("palette-info-main")),q(b.Alert,"successIconColor",X("palette-success-main")),q(b.Alert,"warningIconColor",X("palette-warning-main")),q(b.AppBar,"defaultBg",X("palette-grey-100")),q(b.Avatar,"defaultBg",X("palette-grey-400")),q(b.Button,"inheritContainedBg",X("palette-grey-300")),q(b.Button,"inheritContainedHoverBg",X("palette-grey-A100")),q(b.Chip,"defaultBorder",X("palette-grey-400")),q(b.Chip,"defaultAvatarColor",X("palette-grey-700")),q(b.Chip,"defaultIconColor",X("palette-grey-700")),q(b.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),q(b.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),q(b.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),q(b.LinearProgress,"primaryBg",Pt(b.primary.main,.62)),q(b.LinearProgress,"secondaryBg",Pt(b.secondary.main,.62)),q(b.LinearProgress,"errorBg",Pt(b.error.main,.62)),q(b.LinearProgress,"infoBg",Pt(b.info.main,.62)),q(b.LinearProgress,"successBg",Pt(b.success.main,.62)),q(b.LinearProgress,"warningBg",Pt(b.warning.main,.62)),q(b.Skeleton,"bg",`rgba(${X("palette-text-primaryChannel")} / 0.11)`),q(b.Slider,"primaryTrack",Pt(b.primary.main,.62)),q(b.Slider,"secondaryTrack",Pt(b.secondary.main,.62)),q(b.Slider,"errorTrack",Pt(b.error.main,.62)),q(b.Slider,"infoTrack",Pt(b.info.main,.62)),q(b.Slider,"successTrack",Pt(b.success.main,.62)),q(b.Slider,"warningTrack",Pt(b.warning.main,.62));const I=_o(b.background.default,.8);q(b.SnackbarContent,"bg",I),q(b.SnackbarContent,"color",pn(()=>b.getContrastText(I))),q(b.SpeedDialAction,"fabHoverBg",_o(b.background.paper,.15)),q(b.StepConnector,"border",X("palette-grey-400")),q(b.StepContent,"border",X("palette-grey-400")),q(b.Switch,"defaultColor",X("palette-common-white")),q(b.Switch,"defaultDisabledColor",X("palette-grey-100")),q(b.Switch,"primaryDisabledColor",Pt(b.primary.main,.62)),q(b.Switch,"secondaryDisabledColor",Pt(b.secondary.main,.62)),q(b.Switch,"errorDisabledColor",Pt(b.error.main,.62)),q(b.Switch,"infoDisabledColor",Pt(b.info.main,.62)),q(b.Switch,"successDisabledColor",Pt(b.success.main,.62)),q(b.Switch,"warningDisabledColor",Pt(b.warning.main,.62)),q(b.TableCell,"border",Pt(Co(b.divider,1),.88)),q(b.Tooltip,"bg",Co(b.grey[700],.92))}if(b.mode==="dark"){q(b.Alert,"errorColor",Pt(b.error.light,.6)),q(b.Alert,"infoColor",Pt(b.info.light,.6)),q(b.Alert,"successColor",Pt(b.success.light,.6)),q(b.Alert,"warningColor",Pt(b.warning.light,.6)),q(b.Alert,"errorFilledBg",X("palette-error-dark")),q(b.Alert,"infoFilledBg",X("palette-info-dark")),q(b.Alert,"successFilledBg",X("palette-success-dark")),q(b.Alert,"warningFilledBg",X("palette-warning-dark")),q(b.Alert,"errorFilledColor",pn(()=>b.getContrastText(b.error.dark))),q(b.Alert,"infoFilledColor",pn(()=>b.getContrastText(b.info.dark))),q(b.Alert,"successFilledColor",pn(()=>b.getContrastText(b.success.dark))),q(b.Alert,"warningFilledColor",pn(()=>b.getContrastText(b.warning.dark))),q(b.Alert,"errorStandardBg",Ht(b.error.light,.9)),q(b.Alert,"infoStandardBg",Ht(b.info.light,.9)),q(b.Alert,"successStandardBg",Ht(b.success.light,.9)),q(b.Alert,"warningStandardBg",Ht(b.warning.light,.9)),q(b.Alert,"errorIconColor",X("palette-error-main")),q(b.Alert,"infoIconColor",X("palette-info-main")),q(b.Alert,"successIconColor",X("palette-success-main")),q(b.Alert,"warningIconColor",X("palette-warning-main")),q(b.AppBar,"defaultBg",X("palette-grey-900")),q(b.AppBar,"darkBg",X("palette-background-paper")),q(b.AppBar,"darkColor",X("palette-text-primary")),q(b.Avatar,"defaultBg",X("palette-grey-600")),q(b.Button,"inheritContainedBg",X("palette-grey-800")),q(b.Button,"inheritContainedHoverBg",X("palette-grey-700")),q(b.Chip,"defaultBorder",X("palette-grey-700")),q(b.Chip,"defaultAvatarColor",X("palette-grey-300")),q(b.Chip,"defaultIconColor",X("palette-grey-300")),q(b.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),q(b.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),q(b.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),q(b.LinearProgress,"primaryBg",Ht(b.primary.main,.5)),q(b.LinearProgress,"secondaryBg",Ht(b.secondary.main,.5)),q(b.LinearProgress,"errorBg",Ht(b.error.main,.5)),q(b.LinearProgress,"infoBg",Ht(b.info.main,.5)),q(b.LinearProgress,"successBg",Ht(b.success.main,.5)),q(b.LinearProgress,"warningBg",Ht(b.warning.main,.5)),q(b.Skeleton,"bg",`rgba(${X("palette-text-primaryChannel")} / 0.13)`),q(b.Slider,"primaryTrack",Ht(b.primary.main,.5)),q(b.Slider,"secondaryTrack",Ht(b.secondary.main,.5)),q(b.Slider,"errorTrack",Ht(b.error.main,.5)),q(b.Slider,"infoTrack",Ht(b.info.main,.5)),q(b.Slider,"successTrack",Ht(b.success.main,.5)),q(b.Slider,"warningTrack",Ht(b.warning.main,.5));const I=_o(b.background.default,.98);q(b.SnackbarContent,"bg",I),q(b.SnackbarContent,"color",pn(()=>b.getContrastText(I))),q(b.SpeedDialAction,"fabHoverBg",_o(b.background.paper,.15)),q(b.StepConnector,"border",X("palette-grey-600")),q(b.StepContent,"border",X("palette-grey-600")),q(b.Switch,"defaultColor",X("palette-grey-300")),q(b.Switch,"defaultDisabledColor",X("palette-grey-600")),q(b.Switch,"primaryDisabledColor",Ht(b.primary.main,.55)),q(b.Switch,"secondaryDisabledColor",Ht(b.secondary.main,.55)),q(b.Switch,"errorDisabledColor",Ht(b.error.main,.55)),q(b.Switch,"infoDisabledColor",Ht(b.info.main,.55)),q(b.Switch,"successDisabledColor",Ht(b.success.main,.55)),q(b.Switch,"warningDisabledColor",Ht(b.warning.main,.55)),q(b.TableCell,"border",Ht(Co(b.divider,1),.68)),q(b.Tooltip,"bg",Co(b.grey[700],.92))}Pn(b.background,"default"),Pn(b.background,"paper"),Pn(b.common,"background"),Pn(b.common,"onBackground"),Pn(b,"divider"),Object.keys(b).forEach(I=>{const rt=b[I];I!=="tonalOffset"&&rt&&typeof rt=="object"&&(rt.main&&q(b[I],"mainChannel",Vr(Kr(rt.main))),rt.light&&q(b[I],"lightChannel",Vr(Kr(rt.light))),rt.dark&&q(b[I],"darkChannel",Vr(Kr(rt.dark))),rt.contrastText&&q(b[I],"contrastTextChannel",Vr(Kr(rt.contrastText))),I==="text"&&(Pn(b[I],"primary"),Pn(b[I],"secondary")),I==="action"&&(rt.active&&Pn(b[I],"active"),rt.selected&&Pn(b[I],"selected")))})}),f=r.reduce((U,b)=>je(U,b),f);const p={prefix:h,disableCssColorScheme:c,shouldSkipGeneratingVar:m,getSelector:_x(f)},{vars:v,generateThemeVars:O,generateStyleSheets:z}=I5(f,p);return f.vars=v,Object.entries(f.colorSchemes[f.defaultColorScheme]).forEach(([U,b])=>{f[U]=b}),f.generateThemeVars=O,f.generateStyleSheets=z,f.generateSpacing=function(){return jg(y.spacing,sf(this))},f.getColorSchemeSelector=tx(x),f.spacing=f.generateSpacing(),f.shouldSkipGeneratingVar=m,f.unstable_sxConfig={...ts,...y?.unstable_sxConfig},f.unstable_sx=function(b){return Hi({sx:b,theme:this})},f.toRuntimeSource=Vg,f}function ig(a,r,o){a.colorSchemes&&o&&(a.colorSchemes[r]={...o!==!0&&o,palette:mf({...o===!0?{}:o.palette,mode:r})})}function zx(a={},...r){const{palette:o,cssVariables:s=!1,colorSchemes:c=o?void 0:{light:!0},defaultColorScheme:h=o?.mode,...m}=a,x=h||"light",S=c?.[x],y={...c,...o?{[x]:{...typeof S!="boolean"&&S,palette:o}}:void 0};if(s===!1){if(!("colorSchemes"in a))return Vc(a,...r);let E=o;"palette"in a||y[x]&&(y[x]!==!0?E=y[x].palette:x==="dark"&&(E={mode:"dark"}));const k=Vc({...a,palette:E},...r);return k.defaultColorScheme=x,k.colorSchemes=y,k.palette.mode==="light"&&(k.colorSchemes.light={...y.light!==!0&&y.light,palette:k.palette},ig(k,"dark",y.dark)),k.palette.mode==="dark"&&(k.colorSchemes.dark={...y.dark!==!0&&y.dark,palette:k.palette},ig(k,"light",y.light)),k}return!o&&!("light"in y)&&x==="light"&&(y.light=!0),Mx({...m,colorSchemes:y,defaultColorScheme:x,...typeof s!="boolean"&&s},...r)}const Bx=zx(),Nx="$$material";function Hx(a){return a!=="ownerState"&&a!=="theme"&&a!=="sx"&&a!=="as"}const Px=a=>Hx(a)&&a!=="classes",Ux=N5({themeId:Nx,defaultTheme:Bx,rootShouldForwardProp:Px}),qx=K5;function jx(a){return V5(a)}function Lx(a){return $g("MuiSvgIcon",a)}D5("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const $x=a=>{const{color:r,fontSize:o,classes:s}=a,c={root:["root",r!=="inherit"&&`color${Ni(r)}`,`fontSize${Ni(o)}`]};return By(c,Lx,s)},Gx=Ux("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(a,r)=>{const{ownerState:o}=a;return[r.root,o.color!=="inherit"&&r[`color${Ni(o.color)}`],r[`fontSize${Ni(o.fontSize)}`]]}})(qx(({theme:a})=>({userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:a.transitions?.create?.("fill",{duration:(a.vars??a).transitions?.duration?.shorter}),variants:[{props:r=>!r.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:a.typography?.pxToRem?.(20)||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:a.typography?.pxToRem?.(24)||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:a.typography?.pxToRem?.(35)||"2.1875rem"}},...Object.entries((a.vars??a).palette).filter(([,r])=>r&&r.main).map(([r])=>({props:{color:r},style:{color:(a.vars??a).palette?.[r]?.main}})),{props:{color:"action"},style:{color:(a.vars??a).palette?.action?.active}},{props:{color:"disabled"},style:{color:(a.vars??a).palette?.action?.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}))),Kc=ct.forwardRef(function(r,o){const s=jx({props:r,name:"MuiSvgIcon"}),{children:c,className:h,color:m="inherit",component:x="svg",fontSize:S="medium",htmlColor:y,inheritViewBox:E=!1,titleAccess:k,viewBox:B="0 0 24 24",...G}=s,N=ct.isValidElement(c)&&c.type==="svg",w={...s,color:m,component:x,fontSize:S,instanceFontSize:r.fontSize,inheritViewBox:E,viewBox:B,hasSvgAsChild:N},Y={};E||(Y.viewBox=B);const V=$x(w);return tt.jsxs(Gx,{as:x,className:Ag(V.root,h),focusable:"false",color:y,"aria-hidden":k?void 0:!0,role:k?"img":void 0,ref:o,...Y,...G,...N&&c.props,ownerState:w,children:[N?c.props.children:c,k?tt.jsx("title",{children:k}):null]})});Kc.muiName="SvgIcon";function Wg(a,r){function o(s,c){return tt.jsx(Kc,{"data-testid":void 0,ref:c,...s,children:a})}return o.muiName=Kc.muiName,ct.memo(ct.forwardRef(o))}const Yx=Wg(tt.jsx("path",{d:"M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"})),rg=Wg(tt.jsx("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"})),lg=42,Xx=({width:a,height:r,isMobile:o})=>{const s=ct.useRef(null),[c,h]=ct.useState(0),[m,x]=ct.useState(!1),[S,y]=ct.useState(!1),[E,k]=ct.useState(Math.floor(c/2)+1),B=R=>`/letter-to-the-cloud/assets/images/Frame ${R+41}.png`,G=Array.from({length:lg},(R,f)=>B(f)),N=ct.useRef(new Map);ct.useEffect(()=>{(async()=>{for(let f=0;f<G.length/2;f++){const p=f*2+lg-1,O=[p,p+1].map(b=>`/letter-to-the-cloud/assets/images/Frame ${b}.png`).map(b=>{const X=new Image;return X.src=b,new Promise(I=>{X.onload=()=>I(X),X.onerror=()=>I(X)})}),[z,U]=await Promise.all([...O]);N.current.set(f,{images:[z,U]})}x(!0)})()},[]);const w=async R=>s.current?.turnToPage(R*2),Y=R=>h(R.data),V=()=>s.current.flipNext(),K=()=>s.current.flipPrev();return m?tt.jsxs(tt.Fragment,{children:[tt.jsxs("div",{className:"book-wrapper",children:[tt.jsx(Bp,{ariaLabel:"Previous page",isDisabled:!c,onClick:K,children:tt.jsx("span",{children:"←"})}),tt.jsxs(Ry,{width:a,height:r,maxShadowOpacity:.5,size:"fixed",drawShadow:!0,showCover:!0,mobileScrollSupport:!1,onFlip:Y,ref:R=>s.current=R?.pageFlip(),children:[tt.jsx(zp,{width:a,height:r,src:"/letter-to-the-cloud/assets/images/Frame 83.png"}),G.map((R,f)=>tt.jsx(Dy,{src:R,width:a,height:r,isEven:f===0},f)),tt.jsx(zp,{width:a,height:r,src:"/letter-to-the-cloud/assets/images/Frame 84.png"})]}),tt.jsx(Bp,{ariaLabel:"Next page",isDisabled:c>=G.length,onClick:V,children:tt.jsx("span",{children:"→"})})]}),!o&&tt.jsxs("div",{className:"authors-wrapper",children:[tt.jsx("img",{className:`authors ${c>=G.length?"":"disabled"}`,src:"/letter-to-the-cloud/assets/images/2025-07-07 18.27.30.jpg"}),tt.jsxs("div",{className:"social",children:[tt.jsx("p",{children:"Serge Belkin:"}),tt.jsx("a",{href:"https://t.me/sergebelkin",target:"_blank",rel:"noopener noreferrer",children:tt.jsx(Yx,{})}),tt.jsx("a",{href:"https://instagram.com/serge_belkin",target:"_blank",rel:"noopener noreferrer",children:tt.jsx(rg,{})}),tt.jsx("p",{}),tt.jsx("p",{children:"Hmarka:"}),tt.jsx("a",{href:"https://instagram.com/moonlaria",target:"_blank",rel:"noopener noreferrer",children:tt.jsx(rg,{})})]})]}),c&&c<=G.length&&tt.jsxs("p",{className:"page-number",children:[S?tt.jsx("input",{type:"number",className:"current-page-input",value:E,min:1,max:Math.floor(G.length/2),onChange:R=>k(Number(R.target.value)),onBlur:()=>{y(!1),w(E)},onKeyDown:R=>{R.key==="Enter"&&(y(!1),w(E))},autoFocus:!0}):tt.jsx("span",{className:"current-page-number",onClick:()=>{k(Math.floor(c/2)+1),y(!0)},style:{cursor:"pointer"},children:Math.floor(c/2)+1})," ","/ ",tt.jsx("span",{children:Math.floor(G.length/2)})]})]}):tt.jsx(Ay,{color:"#ffd600",size:"large"})},Qx=()=>tt.jsxs(tt.Fragment,{children:[tt.jsx("style",{children:`
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.2; transform: scale(0.8); }
        }
      `}),tt.jsx("div",{style:Hc.overlay,children:tt.jsx("div",{style:Hc.starsContainer,children:Array.from({length:50}).map((a,r)=>tt.jsx("div",{style:{...Hc.star,...Zx()}},r))})})]}),Hc={overlay:{position:"fixed",height:"100%",top:0,left:0,right:0,bottom:0,zIndex:1,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:"white",fontSize:24,textAlign:"center",overflow:"hidden"},starsContainer:{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none"},star:{position:"absolute",width:2,height:2,borderRadius:"50%",backgroundColor:"white",opacity:.8,animationName:"twinkle",animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",animationDirection:"alternate"}};function Zx(a){const r=Math.random()*100+"%",o=Math.random()*100+"%",s=1+Math.random()*2,c=Math.random()*5;return{top:r,left:o,animationDuration:`${s}s`,animationDelay:`${c}s`}}var Ee=function(){return Ee=Object.assign||function(r){for(var o,s=1,c=arguments.length;s<c;s++){o=arguments[s];for(var h in o)Object.prototype.hasOwnProperty.call(o,h)&&(r[h]=o[h])}return r},Ee.apply(this,arguments)};function al(a,r,o){if(o||arguments.length===2)for(var s=0,c=r.length,h;s<c;s++)(h||!(s in r))&&(h||(h=Array.prototype.slice.call(r,0,s)),h[s]=r[s]);return a.concat(h||Array.prototype.slice.call(r))}var qt="-ms-",Fr="-moz-",Ct="-webkit-",Fg="comm",rs="rule",bf="decl",Vx="@import",Ig="@keyframes",Kx="@layer",tm=Math.abs,yf=String.fromCharCode,Jc=Object.assign;function Jx(a,r){return ce(a,0)^45?(((r<<2^ce(a,0))<<2^ce(a,1))<<2^ce(a,2))<<2^ce(a,3):0}function em(a){return a.trim()}function Un(a,r){return(a=r.exec(a))?a[0]:a}function dt(a,r,o){return a.replace(r,o)}function No(a,r,o){return a.indexOf(r,o)}function ce(a,r){return a.charCodeAt(r)|0}function Ui(a,r,o){return a.slice(r,o)}function bn(a){return a.length}function nm(a){return a.length}function Jr(a,r){return r.push(a),a}function Wx(a,r){return a.map(r).join("")}function og(a,r){return a.filter(function(o){return!Un(o,r)})}var ls=1,qi=1,am=0,Ie=0,ee=0,Yi="";function os(a,r,o,s,c,h,m,x){return{value:a,root:r,parent:o,type:s,props:c,children:h,line:ls,column:qi,length:m,return:"",siblings:x}}function ha(a,r){return Jc(os("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},r)}function Di(a){for(;a.root;)a=ha(a.root,{children:[a]});Jr(a,a.siblings)}function Fx(){return ee}function Ix(){return ee=Ie>0?ce(Yi,--Ie):0,qi--,ee===10&&(qi=1,ls--),ee}function on(){return ee=Ie<am?ce(Yi,Ie++):0,qi++,ee===10&&(qi=1,ls++),ee}function Pa(){return ce(Yi,Ie)}function Ho(){return Ie}function ss(a,r){return Ui(Yi,a,r)}function Wc(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tS(a){return ls=qi=1,am=bn(Yi=a),Ie=0,[]}function eS(a){return Yi="",a}function Pc(a){return em(ss(Ie-1,Fc(a===91?a+2:a===40?a+1:a)))}function nS(a){for(;(ee=Pa())&&ee<33;)on();return Wc(a)>2||Wc(ee)>3?"":" "}function aS(a,r){for(;--r&&on()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return ss(a,Ho()+(r<6&&Pa()==32&&on()==32))}function Fc(a){for(;on();)switch(ee){case a:return Ie;case 34:case 39:a!==34&&a!==39&&Fc(ee);break;case 40:a===41&&Fc(a);break;case 92:on();break}return Ie}function iS(a,r){for(;on()&&a+ee!==57;)if(a+ee===84&&Pa()===47)break;return"/*"+ss(r,Ie-1)+"*"+yf(a===47?a:on())}function rS(a){for(;!Wc(Pa());)on();return ss(a,Ie)}function lS(a){return eS(Po("",null,null,null,[""],a=tS(a),0,[0],a))}function Po(a,r,o,s,c,h,m,x,S){for(var y=0,E=0,k=m,B=0,G=0,N=0,w=1,Y=1,V=1,K=0,R="",f=c,p=h,v=s,O=R;Y;)switch(N=K,K=on()){case 40:if(N!=108&&ce(O,k-1)==58){No(O+=dt(Pc(K),"&","&\f"),"&\f",tm(y?x[y-1]:0))!=-1&&(V=-1);break}case 34:case 39:case 91:O+=Pc(K);break;case 9:case 10:case 13:case 32:O+=nS(N);break;case 92:O+=aS(Ho()-1,7);continue;case 47:switch(Pa()){case 42:case 47:Jr(oS(iS(on(),Ho()),r,o,S),S);break;default:O+="/"}break;case 123*w:x[y++]=bn(O)*V;case 125*w:case 59:case 0:switch(K){case 0:case 125:Y=0;case 59+E:V==-1&&(O=dt(O,/\f/g,"")),G>0&&bn(O)-k&&Jr(G>32?ug(O+";",s,o,k-1,S):ug(dt(O," ","")+";",s,o,k-2,S),S);break;case 59:O+=";";default:if(Jr(v=sg(O,r,o,y,E,c,x,R,f=[],p=[],k,h),h),K===123)if(E===0)Po(O,r,v,v,f,h,k,x,p);else switch(B===99&&ce(O,3)===110?100:B){case 100:case 108:case 109:case 115:Po(a,v,v,s&&Jr(sg(a,v,v,0,0,c,x,R,c,f=[],k,p),p),c,p,k,x,s?f:p);break;default:Po(O,v,v,v,[""],p,0,x,p)}}y=E=G=0,w=V=1,R=O="",k=m;break;case 58:k=1+bn(O),G=N;default:if(w<1){if(K==123)--w;else if(K==125&&w++==0&&Ix()==125)continue}switch(O+=yf(K),K*w){case 38:V=E>0?1:(O+="\f",-1);break;case 44:x[y++]=(bn(O)-1)*V,V=1;break;case 64:Pa()===45&&(O+=Pc(on())),B=Pa(),E=k=bn(R=O+=rS(Ho())),K++;break;case 45:N===45&&bn(O)==2&&(w=0)}}return h}function sg(a,r,o,s,c,h,m,x,S,y,E,k){for(var B=c-1,G=c===0?h:[""],N=nm(G),w=0,Y=0,V=0;w<s;++w)for(var K=0,R=Ui(a,B+1,B=tm(Y=m[w])),f=a;K<N;++K)(f=em(Y>0?G[K]+" "+R:dt(R,/&\f/g,G[K])))&&(S[V++]=f);return os(a,r,o,c===0?rs:x,S,y,E,k)}function oS(a,r,o,s){return os(a,r,o,Fg,yf(Fx()),Ui(a,2,-2),0,s)}function ug(a,r,o,s,c){return os(a,r,o,bf,Ui(a,0,s),Ui(a,s+1,-1),s,c)}function im(a,r,o){switch(Jx(a,r)){case 5103:return Ct+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ct+a+a;case 4789:return Fr+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Ct+a+Fr+a+qt+a+a;case 5936:switch(ce(a,r+11)){case 114:return Ct+a+qt+dt(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Ct+a+qt+dt(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Ct+a+qt+dt(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Ct+a+qt+a+a;case 6165:return Ct+a+qt+"flex-"+a+a;case 5187:return Ct+a+dt(a,/(\w+).+(:[^]+)/,Ct+"box-$1$2"+qt+"flex-$1$2")+a;case 5443:return Ct+a+qt+"flex-item-"+dt(a,/flex-|-self/g,"")+(Un(a,/flex-|baseline/)?"":qt+"grid-row-"+dt(a,/flex-|-self/g,""))+a;case 4675:return Ct+a+qt+"flex-line-pack"+dt(a,/align-content|flex-|-self/g,"")+a;case 5548:return Ct+a+qt+dt(a,"shrink","negative")+a;case 5292:return Ct+a+qt+dt(a,"basis","preferred-size")+a;case 6060:return Ct+"box-"+dt(a,"-grow","")+Ct+a+qt+dt(a,"grow","positive")+a;case 4554:return Ct+dt(a,/([^-])(transform)/g,"$1"+Ct+"$2")+a;case 6187:return dt(dt(dt(a,/(zoom-|grab)/,Ct+"$1"),/(image-set)/,Ct+"$1"),a,"")+a;case 5495:case 3959:return dt(a,/(image-set\([^]*)/,Ct+"$1$`$1");case 4968:return dt(dt(a,/(.+:)(flex-)?(.*)/,Ct+"box-pack:$3"+qt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ct+a+a;case 4200:if(!Un(a,/flex-|baseline/))return qt+"grid-column-align"+Ui(a,r)+a;break;case 2592:case 3360:return qt+dt(a,"template-","")+a;case 4384:case 3616:return o&&o.some(function(s,c){return r=c,Un(s.props,/grid-\w+-end/)})?~No(a+(o=o[r].value),"span",0)?a:qt+dt(a,"-start","")+a+qt+"grid-row-span:"+(~No(o,"span",0)?Un(o,/\d+/):+Un(o,/\d+/)-+Un(a,/\d+/))+";":qt+dt(a,"-start","")+a;case 4896:case 4128:return o&&o.some(function(s){return Un(s.props,/grid-\w+-start/)})?a:qt+dt(dt(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return dt(a,/(.+)-inline(.+)/,Ct+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bn(a)-1-r>6)switch(ce(a,r+1)){case 109:if(ce(a,r+4)!==45)break;case 102:return dt(a,/(.+:)(.+)-([^]+)/,"$1"+Ct+"$2-$3$1"+Fr+(ce(a,r+3)==108?"$3":"$2-$3"))+a;case 115:return~No(a,"stretch",0)?im(dt(a,"stretch","fill-available"),r,o)+a:a}break;case 5152:case 5920:return dt(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,c,h,m,x,S,y){return qt+c+":"+h+y+(m?qt+c+"-span:"+(x?S:+S-+h)+y:"")+a});case 4949:if(ce(a,r+6)===121)return dt(a,":",":"+Ct)+a;break;case 6444:switch(ce(a,ce(a,14)===45?18:11)){case 120:return dt(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ct+(ce(a,14)===45?"inline-":"")+"box$3$1"+Ct+"$2$3$1"+qt+"$2box$3")+a;case 100:return dt(a,":",":"+qt)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return dt(a,"scroll-","scroll-snap-")+a}return a}function Go(a,r){for(var o="",s=0;s<a.length;s++)o+=r(a[s],s,a,r)||"";return o}function sS(a,r,o,s){switch(a.type){case Kx:if(a.children.length)break;case Vx:case bf:return a.return=a.return||a.value;case Fg:return"";case Ig:return a.return=a.value+"{"+Go(a.children,s)+"}";case rs:if(!bn(a.value=a.props.join(",")))return""}return bn(o=Go(a.children,s))?a.return=a.value+"{"+o+"}":""}function uS(a){var r=nm(a);return function(o,s,c,h){for(var m="",x=0;x<r;x++)m+=a[x](o,s,c,h)||"";return m}}function cS(a){return function(r){r.root||(r=r.return)&&a(r)}}function fS(a,r,o,s){if(a.length>-1&&!a.return)switch(a.type){case bf:a.return=im(a.value,a.length,o);return;case Ig:return Go([ha(a,{value:dt(a.value,"@","@"+Ct)})],s);case rs:if(a.length)return Wx(o=a.props,function(c){switch(Un(c,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Di(ha(a,{props:[dt(c,/:(read-\w+)/,":"+Fr+"$1")]})),Di(ha(a,{props:[c]})),Jc(a,{props:og(o,s)});break;case"::placeholder":Di(ha(a,{props:[dt(c,/:(plac\w+)/,":"+Ct+"input-$1")]})),Di(ha(a,{props:[dt(c,/:(plac\w+)/,":"+Fr+"$1")]})),Di(ha(a,{props:[dt(c,/:(plac\w+)/,qt+"input-$1")]})),Di(ha(a,{props:[c]})),Jc(a,{props:og(o,s)});break}return""})}}var hS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ue={},ji=typeof process<"u"&&Ue!==void 0&&(Ue.REACT_APP_SC_ATTR||Ue.SC_ATTR)||"data-styled",rm="active",lm="data-styled-version",us="6.1.19",vf=`/*!sc*/
`,Yo=typeof window<"u"&&typeof document<"u",dS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==""?Ue.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ue.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.SC_DISABLE_SPEEDY!==void 0&&Ue.SC_DISABLE_SPEEDY!==""&&Ue.SC_DISABLE_SPEEDY!=="false"&&Ue.SC_DISABLE_SPEEDY),cs=Object.freeze([]),Li=Object.freeze({});function pS(a,r,o){return o===void 0&&(o=Li),a.theme!==o.theme&&a.theme||r||o.theme}var om=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),gS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,mS=/(^-|-$)/g;function cg(a){return a.replace(gS,"-").replace(mS,"")}var bS=/(a)(d)/gi,ko=52,fg=function(a){return String.fromCharCode(a+(a>25?39:97))};function Ic(a){var r,o="";for(r=Math.abs(a);r>ko;r=r/ko|0)o=fg(r%ko)+o;return(fg(r%ko)+o).replace(bS,"$1-$2")}var Uc,sm=5381,Mi=function(a,r){for(var o=r.length;o;)a=33*a^r.charCodeAt(--o);return a},um=function(a){return Mi(sm,a)};function cm(a){return Ic(um(a)>>>0)}function yS(a){return a.displayName||a.name||"Component"}function qc(a){return typeof a=="string"&&!0}var fm=typeof Symbol=="function"&&Symbol.for,hm=fm?Symbol.for("react.memo"):60115,vS=fm?Symbol.for("react.forward_ref"):60112,xS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},SS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},dm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},wS=((Uc={})[vS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Uc[hm]=dm,Uc);function hg(a){return("type"in(r=a)&&r.type.$$typeof)===hm?dm:"$$typeof"in a?wS[a.$$typeof]:xS;var r}var TS=Object.defineProperty,OS=Object.getOwnPropertyNames,dg=Object.getOwnPropertySymbols,AS=Object.getOwnPropertyDescriptor,ES=Object.getPrototypeOf,pg=Object.prototype;function pm(a,r,o){if(typeof r!="string"){if(pg){var s=ES(r);s&&s!==pg&&pm(a,s,o)}var c=OS(r);dg&&(c=c.concat(dg(r)));for(var h=hg(a),m=hg(r),x=0;x<c.length;++x){var S=c[x];if(!(S in SS||o&&o[S]||m&&S in m||h&&S in h)){var y=AS(r,S);try{TS(a,S,y)}catch{}}}}return a}function $i(a){return typeof a=="function"}function xf(a){return typeof a=="object"&&"styledComponentId"in a}function Na(a,r){return a&&r?"".concat(a," ").concat(r):a||r||""}function tf(a,r){if(a.length===0)return"";for(var o=a[0],s=1;s<a.length;s++)o+=a[s];return o}function il(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function ef(a,r,o){if(o===void 0&&(o=!1),!o&&!il(a)&&!Array.isArray(a))return r;if(Array.isArray(r))for(var s=0;s<r.length;s++)a[s]=ef(a[s],r[s]);else if(il(r))for(var s in r)a[s]=ef(a[s],r[s]);return a}function Sf(a,r){Object.defineProperty(a,"toString",{value:r})}function sl(a){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var CS=function(){function a(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return a.prototype.indexOfGroup=function(r){for(var o=0,s=0;s<r;s++)o+=this.groupSizes[s];return o},a.prototype.insertRules=function(r,o){if(r>=this.groupSizes.length){for(var s=this.groupSizes,c=s.length,h=c;r>=h;)if((h<<=1)<0)throw sl(16,"".concat(r));this.groupSizes=new Uint32Array(h),this.groupSizes.set(s),this.length=h;for(var m=c;m<h;m++)this.groupSizes[m]=0}for(var x=this.indexOfGroup(r+1),S=(m=0,o.length);m<S;m++)this.tag.insertRule(x,o[m])&&(this.groupSizes[r]++,x++)},a.prototype.clearGroup=function(r){if(r<this.length){var o=this.groupSizes[r],s=this.indexOfGroup(r),c=s+o;this.groupSizes[r]=0;for(var h=s;h<c;h++)this.tag.deleteRule(s)}},a.prototype.getGroup=function(r){var o="";if(r>=this.length||this.groupSizes[r]===0)return o;for(var s=this.groupSizes[r],c=this.indexOfGroup(r),h=c+s,m=c;m<h;m++)o+="".concat(this.tag.getRule(m)).concat(vf);return o},a}(),Uo=new Map,Xo=new Map,qo=1,Ro=function(a){if(Uo.has(a))return Uo.get(a);for(;Xo.has(qo);)qo++;var r=qo++;return Uo.set(a,r),Xo.set(r,a),r},_S=function(a,r){qo=r+1,Uo.set(a,r),Xo.set(r,a)},kS="style[".concat(ji,"][").concat(lm,'="').concat(us,'"]'),RS=new RegExp("^".concat(ji,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),DS=function(a,r,o){for(var s,c=o.split(","),h=0,m=c.length;h<m;h++)(s=c[h])&&a.registerName(r,s)},MS=function(a,r){for(var o,s=((o=r.textContent)!==null&&o!==void 0?o:"").split(vf),c=[],h=0,m=s.length;h<m;h++){var x=s[h].trim();if(x){var S=x.match(RS);if(S){var y=0|parseInt(S[1],10),E=S[2];y!==0&&(_S(E,y),DS(a,E,S[3]),a.getTag().insertRules(y,c)),c.length=0}else c.push(x)}}},gg=function(a){for(var r=document.querySelectorAll(kS),o=0,s=r.length;o<s;o++){var c=r[o];c&&c.getAttribute(ji)!==rm&&(MS(a,c),c.parentNode&&c.parentNode.removeChild(c))}};function zS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var gm=function(a){var r=document.head,o=a||r,s=document.createElement("style"),c=function(x){var S=Array.from(x.querySelectorAll("style[".concat(ji,"]")));return S[S.length-1]}(o),h=c!==void 0?c.nextSibling:null;s.setAttribute(ji,rm),s.setAttribute(lm,us);var m=zS();return m&&s.setAttribute("nonce",m),o.insertBefore(s,h),s},BS=function(){function a(r){this.element=gm(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,c=0,h=s.length;c<h;c++){var m=s[c];if(m.ownerNode===o)return m}throw sl(17)}(this.element),this.length=0}return a.prototype.insertRule=function(r,o){try{return this.sheet.insertRule(o,r),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},a.prototype.getRule=function(r){var o=this.sheet.cssRules[r];return o&&o.cssText?o.cssText:""},a}(),NS=function(){function a(r){this.element=gm(r),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(r,o){if(r<=this.length&&r>=0){var s=document.createTextNode(o);return this.element.insertBefore(s,this.nodes[r]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},a.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},a}(),HS=function(){function a(r){this.rules=[],this.length=0}return a.prototype.insertRule=function(r,o){return r<=this.length&&(this.rules.splice(r,0,o),this.length++,!0)},a.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},a.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},a}(),mg=Yo,PS={isServer:!Yo,useCSSOMInjection:!dS},mm=function(){function a(r,o,s){r===void 0&&(r=Li),o===void 0&&(o={});var c=this;this.options=Ee(Ee({},PS),r),this.gs=o,this.names=new Map(s),this.server=!!r.isServer,!this.server&&Yo&&mg&&(mg=!1,gg(this)),Sf(this,function(){return function(h){for(var m=h.getTag(),x=m.length,S="",y=function(k){var B=function(V){return Xo.get(V)}(k);if(B===void 0)return"continue";var G=h.names.get(B),N=m.getGroup(k);if(G===void 0||!G.size||N.length===0)return"continue";var w="".concat(ji,".g").concat(k,'[id="').concat(B,'"]'),Y="";G!==void 0&&G.forEach(function(V){V.length>0&&(Y+="".concat(V,","))}),S+="".concat(N).concat(w,'{content:"').concat(Y,'"}').concat(vf)},E=0;E<x;E++)y(E);return S}(c)})}return a.registerId=function(r){return Ro(r)},a.prototype.rehydrate=function(){!this.server&&Yo&&gg(this)},a.prototype.reconstructWithOptions=function(r,o){return o===void 0&&(o=!0),new a(Ee(Ee({},this.options),r),this.gs,o&&this.names||void 0)},a.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(r=function(o){var s=o.useCSSOMInjection,c=o.target;return o.isServer?new HS(c):s?new BS(c):new NS(c)}(this.options),new CS(r)));var r},a.prototype.hasNameForId=function(r,o){return this.names.has(r)&&this.names.get(r).has(o)},a.prototype.registerName=function(r,o){if(Ro(r),this.names.has(r))this.names.get(r).add(o);else{var s=new Set;s.add(o),this.names.set(r,s)}},a.prototype.insertRules=function(r,o,s){this.registerName(r,o),this.getTag().insertRules(Ro(r),s)},a.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},a.prototype.clearRules=function(r){this.getTag().clearGroup(Ro(r)),this.clearNames(r)},a.prototype.clearTag=function(){this.tag=void 0},a}(),US=/&/g,qS=/^\s*\/\/.*$/gm;function bm(a,r){return a.map(function(o){return o.type==="rule"&&(o.value="".concat(r," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(r," ")),o.props=o.props.map(function(s){return"".concat(r," ").concat(s)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=bm(o.children,r)),o})}function jS(a){var r,o,s,c=Li,h=c.options,m=h===void 0?Li:h,x=c.plugins,S=x===void 0?cs:x,y=function(B,G,N){return N.startsWith(o)&&N.endsWith(o)&&N.replaceAll(o,"").length>0?".".concat(r):B},E=S.slice();E.push(function(B){B.type===rs&&B.value.includes("&")&&(B.props[0]=B.props[0].replace(US,o).replace(s,y))}),m.prefix&&E.push(fS),E.push(sS);var k=function(B,G,N,w){G===void 0&&(G=""),N===void 0&&(N=""),w===void 0&&(w="&"),r=w,o=G,s=new RegExp("\\".concat(o,"\\b"),"g");var Y=B.replace(qS,""),V=lS(N||G?"".concat(N," ").concat(G," { ").concat(Y," }"):Y);m.namespace&&(V=bm(V,m.namespace));var K=[];return Go(V,uS(E.concat(cS(function(R){return K.push(R)})))),K};return k.hash=S.length?S.reduce(function(B,G){return G.name||sl(15),Mi(B,G.name)},sm).toString():"",k}var LS=new mm,nf=jS(),ym=Jt.createContext({shouldForwardProp:void 0,styleSheet:LS,stylis:nf});ym.Consumer;Jt.createContext(void 0);function bg(){return ct.useContext(ym)}var vm=function(){function a(r,o){var s=this;this.inject=function(c,h){h===void 0&&(h=nf);var m=s.name+h.hash;c.hasNameForId(s.id,m)||c.insertRules(s.id,m,h(s.rules,m,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=o,Sf(this,function(){throw sl(12,String(s.name))})}return a.prototype.getName=function(r){return r===void 0&&(r=nf),this.name+r.hash},a}(),$S=function(a){return a>="A"&&a<="Z"};function yg(a){for(var r="",o=0;o<a.length;o++){var s=a[o];if(o===1&&s==="-"&&a[0]==="-")return a;$S(s)?r+="-"+s.toLowerCase():r+=s}return r.startsWith("ms-")?"-"+r:r}var xm=function(a){return a==null||a===!1||a===""},Sm=function(a){var r,o,s=[];for(var c in a){var h=a[c];a.hasOwnProperty(c)&&!xm(h)&&(Array.isArray(h)&&h.isCss||$i(h)?s.push("".concat(yg(c),":"),h,";"):il(h)?s.push.apply(s,al(al(["".concat(c," {")],Sm(h),!1),["}"],!1)):s.push("".concat(yg(c),": ").concat((r=c,(o=h)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||r in hS||r.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return s};function Ua(a,r,o,s){if(xm(a))return[];if(xf(a))return[".".concat(a.styledComponentId)];if($i(a)){if(!$i(h=a)||h.prototype&&h.prototype.isReactComponent||!r)return[a];var c=a(r);return Ua(c,r,o,s)}var h;return a instanceof vm?o?(a.inject(o,s),[a.getName(s)]):[a]:il(a)?Sm(a):Array.isArray(a)?Array.prototype.concat.apply(cs,a.map(function(m){return Ua(m,r,o,s)})):[a.toString()]}function GS(a){for(var r=0;r<a.length;r+=1){var o=a[r];if($i(o)&&!xf(o))return!1}return!0}var YS=um(us),XS=function(){function a(r,o,s){this.rules=r,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&GS(r),this.componentId=o,this.baseHash=Mi(YS,o),this.baseStyle=s,mm.registerId(o)}return a.prototype.generateAndInjectStyles=function(r,o,s){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,o,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))c=Na(c,this.staticRulesId);else{var h=tf(Ua(this.rules,r,o,s)),m=Ic(Mi(this.baseHash,h)>>>0);if(!o.hasNameForId(this.componentId,m)){var x=s(h,".".concat(m),void 0,this.componentId);o.insertRules(this.componentId,m,x)}c=Na(c,m),this.staticRulesId=m}else{for(var S=Mi(this.baseHash,s.hash),y="",E=0;E<this.rules.length;E++){var k=this.rules[E];if(typeof k=="string")y+=k;else if(k){var B=tf(Ua(k,r,o,s));S=Mi(S,B+E),y+=B}}if(y){var G=Ic(S>>>0);o.hasNameForId(this.componentId,G)||o.insertRules(this.componentId,G,s(y,".".concat(G),void 0,this.componentId)),c=Na(c,G)}}return c},a}(),wm=Jt.createContext(void 0);wm.Consumer;var jc={};function QS(a,r,o){var s=xf(a),c=a,h=!qc(a),m=r.attrs,x=m===void 0?cs:m,S=r.componentId,y=S===void 0?function(f,p){var v=typeof f!="string"?"sc":cg(f);jc[v]=(jc[v]||0)+1;var O="".concat(v,"-").concat(cm(us+v+jc[v]));return p?"".concat(p,"-").concat(O):O}(r.displayName,r.parentComponentId):S,E=r.displayName,k=E===void 0?function(f){return qc(f)?"styled.".concat(f):"Styled(".concat(yS(f),")")}(a):E,B=r.displayName&&r.componentId?"".concat(cg(r.displayName),"-").concat(r.componentId):r.componentId||y,G=s&&c.attrs?c.attrs.concat(x).filter(Boolean):x,N=r.shouldForwardProp;if(s&&c.shouldForwardProp){var w=c.shouldForwardProp;if(r.shouldForwardProp){var Y=r.shouldForwardProp;N=function(f,p){return w(f,p)&&Y(f,p)}}else N=w}var V=new XS(o,B,s?c.componentStyle:void 0);function K(f,p){return function(v,O,z){var U=v.attrs,b=v.componentStyle,X=v.defaultProps,I=v.foldedComponentIds,rt=v.styledComponentId,Bt=v.target,mt=Jt.useContext(wm),j=bg(),J=v.shouldForwardProp||j.shouldForwardProp,lt=pS(O,mt,X)||Li,bt=function(yt,st,re){for(var Et,ge=Ee(Ee({},st),{className:void 0,theme:re}),pa=0;pa<yt.length;pa+=1){var xn=$i(Et=yt[pa])?Et(ge):Et;for(var $e in xn)ge[$e]=$e==="className"?Na(ge[$e],xn[$e]):$e==="style"?Ee(Ee({},ge[$e]),xn[$e]):xn[$e]}return st.className&&(ge.className=Na(ge.className,st.className)),ge}(U,O,lt),A=bt.as||Bt,Z={};for(var W in bt)bt[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&bt.theme===lt||(W==="forwardedAs"?Z.as=bt.forwardedAs:J&&!J(W,A)||(Z[W]=bt[W]));var F=function(yt,st){var re=bg(),Et=yt.generateAndInjectStyles(st,re.styleSheet,re.stylis);return Et}(b,bt),it=Na(I,rt);return F&&(it+=" "+F),bt.className&&(it+=" "+bt.className),Z[qc(A)&&!om.has(A)?"class":"className"]=it,z&&(Z.ref=z),ct.createElement(A,Z)}(R,f,p)}K.displayName=k;var R=Jt.forwardRef(K);return R.attrs=G,R.componentStyle=V,R.displayName=k,R.shouldForwardProp=N,R.foldedComponentIds=s?Na(c.foldedComponentIds,c.styledComponentId):"",R.styledComponentId=B,R.target=s?c.target:a,Object.defineProperty(R,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=s?function(p){for(var v=[],O=1;O<arguments.length;O++)v[O-1]=arguments[O];for(var z=0,U=v;z<U.length;z++)ef(p,U[z],!0);return p}({},c.defaultProps,f):f}}),Sf(R,function(){return".".concat(R.styledComponentId)}),h&&pm(R,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),R}function vg(a,r){for(var o=[a[0]],s=0,c=r.length;s<c;s+=1)o.push(r[s],a[s+1]);return o}var xg=function(a){return Object.assign(a,{isCss:!0})};function Tm(a){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];if($i(a)||il(a))return xg(Ua(vg(cs,al([a],r,!0))));var s=a;return r.length===0&&s.length===1&&typeof s[0]=="string"?Ua(s):xg(Ua(vg(s,r)))}function af(a,r,o){if(o===void 0&&(o=Li),!r)throw sl(1,r);var s=function(c){for(var h=[],m=1;m<arguments.length;m++)h[m-1]=arguments[m];return a(r,o,Tm.apply(void 0,al([c],h,!1)))};return s.attrs=function(c){return af(a,r,Ee(Ee({},o),{attrs:Array.prototype.concat(o.attrs,c).filter(Boolean)}))},s.withConfig=function(c){return af(a,r,Ee(Ee({},o),c))},s}var Om=function(a){return af(QS,a)},wf=Om;om.forEach(function(a){wf[a]=Om(a)});function ZS(a){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];var s=tf(Tm.apply(void 0,al([a],r,!1))),c=cm(s);return new vm(c,s)}const VS=ZS`
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
`,KS=wf.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  pointer-events: none;
  z-index: 2;
  overflow: hidden;
  background: transparent;
`,za=wf.img`
  position: absolute;
  top: ${({top:a})=>a};
  left: 0;
  width: auto;
  height: auto;
  transform: scale(${({scale:a})=>a||1});
  opacity: 0;
  animation: ${VS} ${({duration:a})=>a}s linear infinite;
  animation-delay: ${({delay:a})=>a}s;
`,JS=()=>tt.jsxs(KS,{children:[tt.jsx(za,{src:"/letter-to-the-cloud/assets/images/clouds/02.png",top:"20%",delay:0,duration:80,scale:6}),tt.jsx(za,{src:"/letter-to-the-cloud/assets/images/clouds/03.png",top:"30%",delay:5,duration:90,scale:5.5}),tt.jsx(za,{src:"/letter-to-the-cloud/assets/images/clouds/04.png",top:"40%",delay:10,duration:100,scale:6.2}),tt.jsx(za,{src:"/letter-to-the-cloud/assets/images/clouds/05.png",top:"0%",delay:3,duration:85,scale:5.8}),tt.jsx(za,{src:"/letter-to-the-cloud/assets/images/clouds/06.png",top:"25%",delay:8,duration:95,scale:6.5}),tt.jsx(za,{src:"/letter-to-the-cloud/assets/images/clouds/07.png",top:"35%",delay:12,duration:90,scale:6}),tt.jsx(za,{src:"/letter-to-the-cloud/assets/images/clouds/08.png",top:"45%",delay:6,duration:100,scale:6.8})]}),WS=({src:a,alt:r="",style:o,className:s})=>{const[c,h]=ct.useState(!1),m=ct.useRef(null);return ct.useEffect(()=>{const x=new IntersectionObserver(([S])=>{S.isIntersecting&&(h(!0),x.disconnect())},{rootMargin:"150px"});return m.current&&x.observe(m.current),()=>x.disconnect()},[]),tt.jsx("div",{ref:m,style:o,className:s,children:c&&tt.jsx("img",{src:a,alt:r,style:{width:"100%",height:"auto",display:"block"},loading:"lazy"})})};function FS(){const[a,r]=ct.useState(!1),{width:o,height:s,isMobile:c}=ry(),h=ct.useRef(null),m=25,x=y=>`/letter-to-the-cloud/assets/mobile/mob${y}.webp`,S=Array.from({length:m},(y,E)=>x(E));return ct.useEffect(()=>{const y=()=>{!a&&h.current&&(r(!0),h.current.play().catch(E=>{console.error("Autoplay failed:",E)})),window.removeEventListener("click",y),window.removeEventListener("keydown",y)};return window.addEventListener("click",y),window.addEventListener("keydown",y),()=>{window.removeEventListener("click",y),window.removeEventListener("keydown",y)}},[a]),tt.jsxs(tt.Fragment,{children:[tt.jsx("audio",{autoPlay:!0,loop:!0,ref:h,preload:"auto",children:tt.jsx("source",{src:"/letter-to-the-cloud/assets/audio/1.mp3",type:"audio/mpeg"})}),c?tt.jsx("div",{className:"mobile-book",children:S.map((y,E)=>tt.jsx(WS,{src:y,alt:`mob${E}`,style:{width:"100vw",height:"max-content"}},E))}):tt.jsxs(tt.Fragment,{children:[tt.jsx(Qx,{}),tt.jsx(JS,{}),tt.jsx("div",{className:"wrapper",children:tt.jsx(Xx,{width:o,height:s,isMobile:c})})]})]})}iy.createRoot(document.getElementById("root")).render(tt.jsx(ct.StrictMode,{children:tt.jsx(FS,{})}));
