(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{hasBrowserEnv:()=>ye,hasStandardBrowserEnv:()=>ge,hasStandardBrowserWebWorkerEnv:()=>we,navigator:()=>be,origin:()=>Ee});const n=window.wp.blocks,r=window.wp.blockEditor,o=window.wp.i18n,s=window.wp.element,i=window.wp.data;function a(e,t){return function(){return e.apply(t,arguments)}}const{toString:c}=Object.prototype,{getPrototypeOf:u}=Object,l=(f=Object.create(null),e=>{const t=c.call(e);return f[t]||(f[t]=t.slice(8,-1).toLowerCase())});var f;const d=e=>(e=e.toLowerCase(),t=>l(t)===e),p=e=>t=>typeof t===e,{isArray:h}=Array,m=p("undefined"),y=d("ArrayBuffer"),b=p("string"),g=p("function"),w=p("number"),E=e=>null!==e&&"object"==typeof e,R=e=>{if("object"!==l(e))return!1;const t=u(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},O=d("Date"),S=d("File"),T=d("Blob"),A=d("FileList"),v=d("URLSearchParams"),[x,j,C,N]=["ReadableStream","Request","Response","Headers"].map(d);function P(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),h(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function _(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const L="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,U=e=>!m(e)&&e!==L,B=(F="undefined"!=typeof Uint8Array&&u(Uint8Array),e=>F&&e instanceof F);var F;const k=d("HTMLFormElement"),D=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),q=d("RegExp"),I=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};P(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},M="abcdefghijklmnopqrstuvwxyz",z="0123456789",H={DIGIT:z,ALPHA:M,ALPHA_DIGIT:M+M.toUpperCase()+z},J=d("AsyncFunction"),W=(K="function"==typeof setImmediate,V=g(L.postMessage),K?setImmediate:V?($=`axios@${Math.random()}`,X=[],L.addEventListener("message",(({source:e,data:t})=>{e===L&&t===$&&X.length&&X.shift()()}),!1),e=>{X.push(e),L.postMessage($,"*")}):e=>setTimeout(e));var K,V,$,X;const G="undefined"!=typeof queueMicrotask?queueMicrotask.bind(L):"undefined"!=typeof process&&process.nextTick||W,Q={isArray:h,isArrayBuffer:y,isBuffer:function(e){return null!==e&&!m(e)&&null!==e.constructor&&!m(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||g(e.append)&&("formdata"===(t=l(e))||"object"===t&&g(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&y(e.buffer),t},isString:b,isNumber:w,isBoolean:e=>!0===e||!1===e,isObject:E,isPlainObject:R,isReadableStream:x,isRequest:j,isResponse:C,isHeaders:N,isUndefined:m,isDate:O,isFile:S,isBlob:T,isRegExp:q,isFunction:g,isStream:e=>E(e)&&g(e.pipe),isURLSearchParams:v,isTypedArray:B,isFileList:A,forEach:P,merge:function e(){const{caseless:t}=U(this)&&this||{},n={},r=(r,o)=>{const s=t&&_(n,o)||o;R(n[s])&&R(r)?n[s]=e(n[s],r):R(r)?n[s]=e({},r):h(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&P(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(P(t,((t,r)=>{n&&g(t)?e[r]=a(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,s,i;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],r&&!r(i,e,t)||a[i]||(t[i]=e[i],a[i]=!0);e=!1!==n&&u(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:l,kindOfTest:d,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(h(e))return e;let t=e.length;if(!w(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:k,hasOwnProperty:D,hasOwnProp:D,reduceDescriptors:I,freezeMethods:e=>{I(e,((t,n)=>{if(g(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];g(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return h(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:_,global:L,isContextDefined:U,ALPHABET:H,generateString:(e=16,t=H.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&g(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(E(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=h(e)?[]:{};return P(e,((e,t)=>{const s=n(e,r+1);!m(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:J,isThenable:e=>e&&(E(e)||g(e))&&g(e.then)&&g(e.catch),setImmediate:W,asap:G};function Z(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}Q.inherits(Z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Q.toJSONObject(this.config),code:this.code,status:this.status}}});const Y=Z.prototype,ee={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{ee[e]={value:e}})),Object.defineProperties(Z,ee),Object.defineProperty(Y,"isAxiosError",{value:!0}),Z.from=(e,t,n,r,o,s)=>{const i=Object.create(Y);return Q.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),Z.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const te=Z;function ne(e){return Q.isPlainObject(e)||Q.isArray(e)}function re(e){return Q.endsWith(e,"[]")?e.slice(0,-2):e}function oe(e,t,n){return e?e.concat(t).map((function(e,t){return e=re(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const se=Q.toFlatObject(Q,{},null,(function(e){return/^is[A-Z]/.test(e)})),ie=function(e,t,n){if(!Q.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=Q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!Q.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&Q.isSpecCompliantForm(t);if(!Q.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(Q.isDate(e))return e.toISOString();if(!a&&Q.isBlob(e))throw new te("Blob is not supported. Use a Buffer instead.");return Q.isArrayBuffer(e)||Q.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(Q.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(Q.isArray(e)&&function(e){return Q.isArray(e)&&!e.some(ne)}(e)||(Q.isFileList(e)||Q.endsWith(n,"[]"))&&(a=Q.toArray(e)))return n=re(n),a.forEach((function(e,r){!Q.isUndefined(e)&&null!==e&&t.append(!0===i?oe([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!ne(e)||(t.append(oe(o,n,s),c(e)),!1)}const l=[],f=Object.assign(se,{defaultVisitor:u,convertValue:c,isVisitable:ne});if(!Q.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!Q.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),Q.forEach(n,(function(n,s){!0===(!(Q.isUndefined(n)||null===n)&&o.call(t,n,Q.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),l.pop()}}(e),t};function ae(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function ce(e,t){this._pairs=[],e&&ie(e,this,t)}const ue=ce.prototype;ue.append=function(e,t){this._pairs.push([e,t])},ue.toString=function(e){const t=e?function(t){return e.call(this,t,ae)}:ae;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const le=ce;function fe(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function de(e,t,n){if(!t)return e;const r=n&&n.encode||fe;Q.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let s;if(s=o?o(t,n):Q.isURLSearchParams(t)?t.toString():new le(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}const pe=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Q.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},he={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},me={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:le,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},ye="undefined"!=typeof window&&"undefined"!=typeof document,be="object"==typeof navigator&&navigator||void 0,ge=ye&&(!be||["ReactNative","NativeScript","NS"].indexOf(be.product)<0),we="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,Ee=ye&&window.location.href||"http://localhost",Re={...t,...me},Oe=function(e){function t(e,n,r,o){let s=e[o++];if("__proto__"===s)return!0;const i=Number.isFinite(+s),a=o>=e.length;return s=!s&&Q.isArray(r)?r.length:s,a?(Q.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i):(r[s]&&Q.isObject(r[s])||(r[s]=[]),t(e,n,r[s],o)&&Q.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i)}if(Q.isFormData(e)&&Q.isFunction(e.entries)){const n={};return Q.forEachEntry(e,((e,r)=>{t(function(e){return Q.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null},Se={transitional:he,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=Q.isObject(e);if(o&&Q.isHTMLForm(e)&&(e=new FormData(e)),Q.isFormData(e))return r?JSON.stringify(Oe(e)):e;if(Q.isArrayBuffer(e)||Q.isBuffer(e)||Q.isStream(e)||Q.isFile(e)||Q.isBlob(e)||Q.isReadableStream(e))return e;if(Q.isArrayBufferView(e))return e.buffer;if(Q.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return ie(e,new Re.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Re.isNode&&Q.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=Q.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return ie(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e){if(Q.isString(e))try{return(0,JSON.parse)(e),Q.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Se.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(Q.isResponse(e)||Q.isReadableStream(e))return e;if(e&&Q.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw te.from(e,te.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Re.classes.FormData,Blob:Re.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Q.forEach(["delete","get","head","post","put","patch"],(e=>{Se.headers[e]={}}));const Te=Se,Ae=Q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ve=Symbol("internals");function xe(e){return e&&String(e).trim().toLowerCase()}function je(e){return!1===e||null==e?e:Q.isArray(e)?e.map(je):String(e)}function Ce(e,t,n,r,o){return Q.isFunction(r)?r.call(this,t,n):(o&&(t=n),Q.isString(t)?Q.isString(r)?-1!==t.indexOf(r):Q.isRegExp(r)?r.test(t):void 0:void 0)}class Ne{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=xe(t);if(!o)throw new Error("header name must be a non-empty string");const s=Q.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=je(e))}const s=(e,t)=>Q.forEach(e,((e,n)=>o(e,n,t)));if(Q.isPlainObject(e)||e instanceof this.constructor)s(e,t);else if(Q.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&Ae[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(Q.isHeaders(e))for(const[t,r]of e.entries())o(r,t,n);else null!=e&&o(t,e,n);return this}get(e,t){if(e=xe(e)){const n=Q.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(Q.isFunction(t))return t.call(this,e,n);if(Q.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=xe(e)){const n=Q.findKey(this,e);return!(!n||void 0===this[n]||t&&!Ce(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=xe(e)){const o=Q.findKey(n,e);!o||t&&!Ce(0,n[o],o,t)||(delete n[o],r=!0)}}return Q.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!Ce(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return Q.forEach(this,((r,o)=>{const s=Q.findKey(n,o);if(s)return t[s]=je(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=je(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return Q.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&Q.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[ve]=this[ve]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=xe(e);t[r]||(function(e,t){const n=Q.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return Q.isArray(e)?e.forEach(r):r(e),this}}Ne.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Q.reduceDescriptors(Ne.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),Q.freezeMethods(Ne);const Pe=Ne;function _e(e,t){const n=this||Te,r=t||n,o=Pe.from(r.headers);let s=r.data;return Q.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function Le(e){return!(!e||!e.__CANCEL__)}function Ue(e,t,n){te.call(this,null==e?"canceled":e,te.ERR_CANCELED,t,n),this.name="CanceledError"}Q.inherits(Ue,te,{__CANCEL__:!0});const Be=Ue;function Fe(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new te("Request failed with status code "+n.status,[te.ERR_BAD_REQUEST,te.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}const ke=(e,t,n=3)=>{let r=0;const o=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[i];o||(o=c),n[s]=a,r[s]=c;let l=i,f=0;for(;l!==s;)f+=n[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return function(e,t){let n,r,o=0,s=1e3/t;const i=(t,s=Date.now())=>{o=s,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)};return[(...e)=>{const t=Date.now(),a=t-o;a>=s?i(e,t):(n=e,r||(r=setTimeout((()=>{r=null,i(n)}),s-a)))},()=>n&&i(n)]}((n=>{const s=n.loaded,i=n.lengthComputable?n.total:void 0,a=s-r,c=o(a);r=s,e({loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:n,lengthComputable:null!=i,[t?"download":"upload"]:!0})}),n)},De=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},qe=e=>(...t)=>Q.asap((()=>e(...t))),Ie=Re.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Re.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Re.origin),Re.navigator&&/(msie|trident)/i.test(Re.navigator.userAgent)):()=>!0,Me=Re.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];Q.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),Q.isString(r)&&i.push("path="+r),Q.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function ze(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const He=e=>e instanceof Pe?{...e}:e;function Je(e,t){t=t||{};const n={};function r(e,t,n,r){return Q.isPlainObject(e)&&Q.isPlainObject(t)?Q.merge.call({caseless:r},e,t):Q.isPlainObject(t)?Q.merge({},t):Q.isArray(t)?t.slice():t}function o(e,t,n,o){return Q.isUndefined(t)?Q.isUndefined(e)?void 0:r(void 0,e,0,o):r(e,t,0,o)}function s(e,t){if(!Q.isUndefined(t))return r(void 0,t)}function i(e,t){return Q.isUndefined(t)?Q.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t,n)=>o(He(e),He(t),0,!0)};return Q.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);Q.isUndefined(i)&&s!==a||(n[r]=i)})),n}const We=e=>{const t=Je({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:s,xsrfCookieName:i,headers:a,auth:c}=t;if(t.headers=a=Pe.from(a),t.url=de(ze(t.baseURL,t.url),e.params,e.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),Q.isFormData(r))if(Re.hasStandardBrowserEnv||Re.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(!1!==(n=a.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}if(Re.hasStandardBrowserEnv&&(o&&Q.isFunction(o)&&(o=o(t)),o||!1!==o&&Ie(t.url))){const e=s&&i&&Me.read(i);e&&a.set(s,e)}return t},Ke="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=We(e);let o=r.data;const s=Pe.from(r.headers).normalize();let i,a,c,u,l,{responseType:f,onUploadProgress:d,onDownloadProgress:p}=r;function h(){u&&u(),l&&l(),r.cancelToken&&r.cancelToken.unsubscribe(i),r.signal&&r.signal.removeEventListener("abort",i)}let m=new XMLHttpRequest;function y(){if(!m)return;const r=Pe.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());Fe((function(e){t(e),h()}),(function(e){n(e),h()}),{data:f&&"text"!==f&&"json"!==f?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:r,config:e,request:m}),m=null}m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout,"onloadend"in m?m.onloadend=y:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(y)},m.onabort=function(){m&&(n(new te("Request aborted",te.ECONNABORTED,e,m)),m=null)},m.onerror=function(){n(new te("Network Error",te.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const o=r.transitional||he;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new te(t,o.clarifyTimeoutError?te.ETIMEDOUT:te.ECONNABORTED,e,m)),m=null},void 0===o&&s.setContentType(null),"setRequestHeader"in m&&Q.forEach(s.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),Q.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),f&&"json"!==f&&(m.responseType=r.responseType),p&&([c,l]=ke(p,!0),m.addEventListener("progress",c)),d&&m.upload&&([a,u]=ke(d),m.upload.addEventListener("progress",a),m.upload.addEventListener("loadend",u)),(r.cancelToken||r.signal)&&(i=t=>{m&&(n(!t||t.type?new Be(null,e,m):t),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(i),r.signal&&(r.signal.aborted?i():r.signal.addEventListener("abort",i)));const b=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);b&&-1===Re.protocols.indexOf(b)?n(new te("Unsupported protocol "+b+":",te.ERR_BAD_REQUEST,e)):m.send(o||null)}))},Ve=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const o=function(e){if(!n){n=!0,i();const t=e instanceof Error?e:this.reason;r.abort(t instanceof te?t:new Be(t instanceof Error?t.message:t))}};let s=t&&setTimeout((()=>{s=null,o(new te(`timeout ${t} of ms exceeded`,te.ETIMEDOUT))}),t);const i=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:a}=r;return a.unsubscribe=()=>Q.asap(i),a}},$e=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,o=0;for(;o<n;)r=o+t,yield e.slice(o,r),o=r},Xe=(e,t,n,r)=>{const o=async function*(e,t){for await(const n of async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}}(e))yield*$e(n,t)}(e,t);let s,i=0,a=e=>{s||(s=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await o.next();if(t)return a(),void e.close();let s=r.byteLength;if(n){let e=i+=s;n(e)}e.enqueue(new Uint8Array(r))}catch(e){throw a(e),e}},cancel:e=>(a(e),o.return())},{highWaterMark:2})},Ge="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,Qe=Ge&&"function"==typeof ReadableStream,Ze=Ge&&("function"==typeof TextEncoder?(Ye=new TextEncoder,e=>Ye.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var Ye;const et=(e,...t)=>{try{return!!e(...t)}catch(e){return!1}},tt=Qe&&et((()=>{let e=!1;const t=new Request(Re.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),nt=Qe&&et((()=>Q.isReadableStream(new Response("").body))),rt={stream:nt&&(e=>e.body)};var ot;Ge&&(ot=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!rt[e]&&(rt[e]=Q.isFunction(ot[e])?t=>t[e]():(t,n)=>{throw new te(`Response type '${e}' is not supported`,te.ERR_NOT_SUPPORT,n)})})));const st={http:null,xhr:Ke,fetch:Ge&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:s,timeout:i,onDownloadProgress:a,onUploadProgress:c,responseType:u,headers:l,withCredentials:f="same-origin",fetchOptions:d}=We(e);u=u?(u+"").toLowerCase():"text";let p,h=Ve([o,s&&s.toAbortSignal()],i);const m=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let y;try{if(c&&tt&&"get"!==n&&"head"!==n&&0!==(y=await(async(e,t)=>{const n=Q.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(Q.isBlob(e))return e.size;if(Q.isSpecCompliantForm(e)){const t=new Request(Re.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return Q.isArrayBufferView(e)||Q.isArrayBuffer(e)?e.byteLength:(Q.isURLSearchParams(e)&&(e+=""),Q.isString(e)?(await Ze(e)).byteLength:void 0)})(t):n})(l,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(Q.isFormData(r)&&(e=n.headers.get("content-type"))&&l.setContentType(e),n.body){const[e,t]=De(y,ke(qe(c)));r=Xe(n.body,65536,e,t)}}Q.isString(f)||(f=f?"include":"omit");const o="credentials"in Request.prototype;p=new Request(t,{...d,signal:h,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",credentials:o?f:void 0});let s=await fetch(p);const i=nt&&("stream"===u||"response"===u);if(nt&&(a||i&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=s[t]}));const t=Q.toFiniteNumber(s.headers.get("content-length")),[n,r]=a&&De(t,ke(qe(a),!0))||[];s=new Response(Xe(s.body,65536,n,(()=>{r&&r(),m&&m()})),e)}u=u||"text";let b=await rt[Q.findKey(rt,u)||"text"](s,e);return!i&&m&&m(),await new Promise(((t,n)=>{Fe(t,n,{data:b,headers:Pe.from(s.headers),status:s.status,statusText:s.statusText,config:e,request:p})}))}catch(t){if(m&&m(),t&&"TypeError"===t.name&&/fetch/i.test(t.message))throw Object.assign(new te("Network Error",te.ERR_NETWORK,e,p),{cause:t.cause||t});throw te.from(t,t&&t.code,e,p)}})};Q.forEach(st,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const it=e=>`- ${e}`,at=e=>Q.isFunction(e)||null===e||!1===e,ct=e=>{e=Q.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!at(n)&&(r=st[(t=String(n)).toLowerCase()],void 0===r))throw new te(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(it).join("\n"):" "+it(e[0]):"as no adapter specified";throw new te("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function ut(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Be(null,e)}function lt(e){return ut(e),e.headers=Pe.from(e.headers),e.data=_e.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ct(e.adapter||Te.adapter)(e).then((function(t){return ut(e),t.data=_e.call(e,e.transformResponse,t),t.headers=Pe.from(t.headers),t}),(function(t){return Le(t)||(ut(e),t&&t.response&&(t.response.data=_e.call(e,e.transformResponse,t.response),t.response.headers=Pe.from(t.response.headers))),Promise.reject(t)}))}const ft={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{ft[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const dt={};ft.transitional=function(e,t,n){function r(e,t){return"[Axios v1.7.9] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new te(r(o," has been removed"+(t?" in "+t:"")),te.ERR_DEPRECATED);return t&&!dt[o]&&(dt[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}},ft.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};const pt={assertOptions:function(e,t,n){if("object"!=typeof e)throw new te("options must be an object",te.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new te("option "+s+" must be "+n,te.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new te("Unknown option "+s,te.ERR_BAD_OPTION)}},validators:ft},ht=pt.validators;class mt{constructor(e){this.defaults=e,this.interceptors={request:new pe,response:new pe}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=new Error;const n=t.stack?t.stack.replace(/^.+\n/,""):"";try{e.stack?n&&!String(e.stack).endsWith(n.replace(/^.+\n.+\n/,""))&&(e.stack+="\n"+n):e.stack=n}catch(e){}}throw e}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Je(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&pt.assertOptions(n,{silentJSONParsing:ht.transitional(ht.boolean),forcedJSONParsing:ht.transitional(ht.boolean),clarifyTimeoutError:ht.transitional(ht.boolean)},!1),null!=r&&(Q.isFunction(r)?t.paramsSerializer={serialize:r}:pt.assertOptions(r,{encode:ht.function,serialize:ht.function},!0)),pt.assertOptions(t,{baseUrl:ht.spelling("baseURL"),withXsrfToken:ht.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&Q.merge(o.common,o[t.method]);o&&Q.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Pe.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[lt.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=i.length;let d=t;for(f=0;f<l;){const e=i[f++],t=i[f++];try{d=e(d)}catch(e){t.call(this,e);break}}try{u=lt.call(this,d)}catch(e){return Promise.reject(e)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return de(ze((e=Je(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}Q.forEach(["delete","get","head","options"],(function(e){mt.prototype[e]=function(t,n){return this.request(Je(n||{},{method:e,url:t,data:(n||{}).data}))}})),Q.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Je(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}mt.prototype[e]=t(),mt.prototype[e+"Form"]=t(!0)}));const yt=mt;class bt{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new Be(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new bt((function(t){e=t})),cancel:e}}}const gt=bt,wt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(wt).forEach((([e,t])=>{wt[t]=e}));const Et=wt,Rt=function e(t){const n=new yt(t),r=a(yt.prototype.request,n);return Q.extend(r,yt.prototype,n,{allOwnKeys:!0}),Q.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Je(t,n))},r}(Te);Rt.Axios=yt,Rt.CanceledError=Be,Rt.CancelToken=gt,Rt.isCancel=Le,Rt.VERSION="1.7.9",Rt.toFormData=ie,Rt.AxiosError=te,Rt.Cancel=Rt.CanceledError,Rt.all=function(e){return Promise.all(e)},Rt.spread=function(e){return function(t){return e.apply(null,t)}},Rt.isAxiosError=function(e){return Q.isObject(e)&&!0===e.isAxiosError},Rt.mergeConfig=Je,Rt.AxiosHeaders=Pe,Rt.formToJSON=e=>Oe(Q.isHTMLForm(e)?new FormData(e):e),Rt.getAdapter=ct,Rt.HttpStatusCode=Et,Rt.default=Rt;const Ot=Rt,St=window.ReactJSXRuntime;(0,n.registerBlockType)("catalogx/enquiry-button",{title:"Enquiry Button",icon:"button",category:"catalogx",supports:{html:!0},attributes:{productId:{type:"number",default:null}},edit:({attributes:e,setAttributes:t})=>{const n=(0,r.useBlockProps)(),[a,c]=(0,s.useState)((0,o.__)("Loading ...","catalogx")),u=(0,i.useSelect)((e=>{const t=e("core/block-editor").getBlocks().find((e=>"woocommerce/single-product"===e.name));return t?.attributes?.productId||null}),[]);return(0,s.useEffect)((()=>{u&&u!==e.productId&&t({productId:u})}),[u]),(0,s.useEffect)((()=>{u?Ot.get(`${enquiryButton.apiUrl}/${enquiryButton.restUrl}/buttons?product_id=${u}`).then((e=>{c(e.data.html||(0,o.__)("Failed to load.","catalogx"))})):c((0,o.__)("No product selected.","catalogx"))}),[u]),(0,St.jsx)("div",{...n,children:(0,St.jsx)("div",{dangerouslySetInnerHTML:{__html:a}})})},save:()=>null})})();