!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=78)}([function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const n=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t},function(t,e,i){"use strict";i.d(e,"d",(function(){return n})),i.d(e,"g",(function(){return o})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return s})),i.d(e,"i",(function(){return a})),i.d(e,"e",(function(){return l})),i.d(e,"f",(function(){return h})),i.d(e,"a",(function(){return d})),i.d(e,"h",(function(){return u}));i(3);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function n(t){return t.indexOf(".")>=0}function o(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function r(t,e){return 0===t.indexOf(e+".")}function s(t,e){return 0===e.indexOf(t+".")}function a(t,e,i){return e+i.slice(t.length)}function l(t,e){return t===e||r(t,e)||s(t,e)}function h(t){if(Array.isArray(t)){let e=[];for(let i=0;i<t.length;i++){let n=t[i].toString().split(".");for(let t=0;t<n.length;t++)e.push(n[t])}return e.join(".")}return t}function c(t){return Array.isArray(t)?h(t).split("."):t.toString().split(".")}function d(t,e,i){let n=t,o=c(e);for(let t=0;t<o.length;t++){if(!n)return;n=n[o[t]]}return i&&(i.path=o.join(".")),n}function u(t,e,i){let n=t,o=c(e),r=o[o.length-1];if(o.length>1){for(let t=0;t<o.length-1;t++){if(n=n[o[t]],!n)return}n[r]=i}else n[e]=i;return o.join(".")}},function(t,e,i){"use strict";i.d(e,"i",(function(){return o})),i.d(e,"e",(function(){return r})),i.d(e,"f",(function(){return s})),i.d(e,"d",(function(){return a})),i.d(e,"g",(function(){return l})),i.d(e,"a",(function(){return h})),i.d(e,"c",(function(){return c})),i.d(e,"h",(function(){return d})),i.d(e,"b",(function(){return u}));i(3);var n=i(10);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let r=Object(n.a)(document.baseURI||window.location.href);let s=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let a=!1;let l=!1;let h=!1;let c=!1;let d=!1;let u=!0},function(t,e,i){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t}},function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i(3);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n=0;function o(){}o.prototype.__mixinApplications,o.prototype.__mixinSet;const r=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let i=n++;return function(n){let o=n.__mixinSet;if(o&&o[i])return n;let r=e,s=r.get(n);s||(s=t(n),r.set(n,s));let a=Object.create(s.__mixinSet||o||null);return a[i]=!0,s.__mixinSet=a,s}}},function(t,e,i){"use strict";i(3);var n=i(0),o=(i(2),i(29)),r=i(6);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function s(t){return"slot"===t.localName}let a=class{static getFlattenedNodes(t){const e=Object(n.a)(t);return s(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(t=>s(t)?(t=t,Object(n.a)(t).assignedNodes({flatten:!0})):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){s(this._target)?this._listenSlots([this._target]):Object(n.a)(this._target).children&&(this._listenSlots(Object(n.a)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){s(this._target)?this._unlistenSlots([this._target]):Object(n.a)(this._target).children&&(this._unlistenSlots(Object(n.a)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,r.a.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let i=t[e];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),i=Object(o.a)(e,this._effectiveNodes);for(let e,n=0;n<i.length&&(e=i[n]);n++)for(let i,n=0;n<e.removed.length&&(i=e.removed[n]);n++)t.removedNodes.push(i);for(let n,o=0;o<i.length&&(n=i[o]);o++)for(let i=n.index;i<n.index+n.addedCount;i++)t.addedNodes.push(e[i]);this._effectiveNodes=e;let n=!1;return(t.addedNodes.length||t.removedNodes.length)&&(n=!0,this.callback.call(this._target,t)),n}_listenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];s(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];s(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};i(16),i(12);i.d(e,"b",(function(){return c})),i.d(e,"a",(function(){return m}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const l=Element.prototype,h=l.matches||l.matchesSelector||l.mozMatchesSelector||l.msMatchesSelector||l.oMatchesSelector||l.webkitMatchesSelector,c=function(t,e){return h.call(t,e)};class d{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new a(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(Object(n.a)(this.node).contains(t))return!0;let e=t,i=t.ownerDocument;for(;e&&e!==i&&e!==this.node;)e=Object(n.a)(e).parentNode||Object(n.a)(e).host;return e===this.node}getOwnerRoot(){return Object(n.a)(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Object(n.a)(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=Object(n.a)(this.node).assignedSlot;for(;e;)t.push(e),e=Object(n.a)(e).assignedSlot;return t}importNode(t,e){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return Object(n.a)(i).importNode(t,e)}getEffectiveChildNodes(){return a.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),i=[];for(let n,o=0,r=e.length;o<r&&(n=e[o]);o++)n.nodeType===Node.ELEMENT_NODE&&c(n,t)&&i.push(n);return i}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function u(t,e){for(let i=0;i<e.length;i++){let n=e[i];Object.defineProperty(t,n,{get:function(){return this.node[n]},configurable:!0})}}class p{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}d.prototype.cloneNode,d.prototype.appendChild,d.prototype.insertBefore,d.prototype.removeChild,d.prototype.replaceChild,d.prototype.setAttribute,d.prototype.removeAttribute,d.prototype.querySelector,d.prototype.querySelectorAll,d.prototype.parentNode,d.prototype.firstChild,d.prototype.lastChild,d.prototype.nextSibling,d.prototype.previousSibling,d.prototype.firstElementChild,d.prototype.lastElementChild,d.prototype.nextElementSibling,d.prototype.previousElementSibling,d.prototype.childNodes,d.prototype.children,d.prototype.classList,d.prototype.textContent,d.prototype.innerHTML;let f=d;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(d.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=d.prototype[e])}),u(t.prototype,["classList"]),f=t,Object.defineProperties(p.prototype,{localTarget:{get(){const t=this.event.currentTarget,e=t&&m(t).getOwnerRoot(),i=this.path;for(let t=0;t<i.length;t++){const n=i[t];if(m(n).getOwnerRoot()===e)return n}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(t,e){for(let i=0;i<e.length;i++){let n=e[i];t[n]=function(){return this.node[n].apply(this.node,arguments)}}}(d.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),u(d.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(t,e){for(let i=0;i<e.length;i++){let n=e[i];Object.defineProperty(t,n,{get:function(){return this.node[n]},set:function(t){this.node[n]=t},configurable:!0})}}(d.prototype,["textContent","innerHTML","className"]);const m=function(t){if((t=t||document)instanceof f)return t;if(t instanceof p)return t;let e=t.__domApi;return e||(e=t instanceof Event?new p(t):new f(t),t.__domApi=e),e}},function(t,e,i){"use strict";i.d(e,"b",(function(){return l})),i.d(e,"a",(function(){return h}));i(3);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n=0,o=0,r=[],s=0,a=document.createTextNode("");new window.MutationObserver((function(){const t=r.length;for(let e=0;e<t;e++){let t=r[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}r.splice(0,t),o+=t})).observe(a,{characterData:!0});const l={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},h={run:t=>(a.textContent=s++,r.push(t),n++),cancel(t){const e=t-o;if(e>=0){if(!r[e])throw new Error("invalid async handle: "+t);r[e]=null}}}},function(t,e,i){"use strict";i.d(e,"d",(function(){return n})),i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return l}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const n=!(window.ShadyDOM&&window.ShadyDOM.inUse);let o,r;function s(t){o=(!t||!t.shimcssproperties)&&(n||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(r=window.ShadyCSS.cssBuild);const a=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?o=window.ShadyCSS.nativeCss:window.ShadyCSS?(s(window.ShadyCSS),window.ShadyCSS=void 0):s(window.WebComponents&&window.WebComponents.flags);const l=o},function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i(3);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class n{constructor(t){this.value=t.toString()}toString(){return this.value}}function o(t){if(t instanceof n)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}const r=function(t,...e){const i=document.createElement("template");return i.innerHTML=e.reduce((e,i,r)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof n)return o(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}(i)+t[r+1],t[0]),i}},function(t,e,i){"use strict";var n=i(21),o=i(2);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},s={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},a=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},s);function l(t,e,i,n){!function(t,e,i){const n=t._noAccessors,o=Object.getOwnPropertyNames(t);for(let r=0;r<o.length;r++){let s=o[r];if(!(s in i))if(n)e[s]=t[s];else{let i=Object.getOwnPropertyDescriptor(t,s);i&&(i.configurable=!0,Object.defineProperty(e,s,i))}}}(e,t,n);for(let t in r)e[t]&&(i[t]=i[t]||[],i[t].push(e[t]))}function h(t,e){for(const i in e){const n=t[i],o=e[i];t[i]=!("value"in o)&&n&&"value"in n?Object.assign({value:n.value},o):o}}function c(t,e,i){let n;const r={};class c extends e{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(n)for(let t,e=0;e<n.length;e++)t=n[e],t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}else e._finalizeClass.call(this)}static get properties(){const e={};if(n)for(let t=0;t<n.length;t++)h(e,n[t].properties);return h(e,t.properties),e}static get observers(){let e=[];if(n)for(let t,i=0;i<n.length;i++)t=n[i],t.observers&&(e=e.concat(t.observers));return t.observers&&(e=e.concat(t.observers)),e}created(){super.created();const t=r.created;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}_registered(){const t=c.prototype;if(!t.hasOwnProperty("__hasRegisterFinished")){t.__hasRegisterFinished=!0,super._registered(),o.c&&d(t);const e=Object.getPrototypeOf(this);let i=r.beforeRegister;if(i)for(let t=0;t<i.length;t++)i[t].call(e);if(i=r.registered,i)for(let t=0;t<i.length;t++)i[t].call(e)}}_applyListeners(){super._applyListeners();const t=r.listeners;if(t)for(let e=0;e<t.length;e++){const i=t[e];if(i)for(let t in i)this._addMethodEventListenerToNode(this,t,i[t])}}_ensureAttributes(){const t=r.hostAttributes;if(t)for(let e=t.length-1;e>=0;e--){const i=t[e];for(let t in i)this._ensureAttribute(t,i[t])}super._ensureAttributes()}ready(){super.ready();let t=r.ready;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attached(){super.attached();let t=r.attached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}detached(){super.detached();let t=r.detached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attributeChanged(t,e,i){super.attributeChanged();let n=r.attributeChanged;if(n)for(let o=0;o<n.length;o++)n[o].call(this,t,e,i)}}if(i){Array.isArray(i)||(i=[i]);let t=e.prototype.behaviors;n=function t(e,i,n){i=i||[];for(let o=e.length-1;o>=0;o--){let r=e[o];r?Array.isArray(r)?t(r,i):i.indexOf(r)<0&&(!n||n.indexOf(r)<0)&&i.unshift(r):console.warn("behavior is null, check for missing or 404 import")}return i}(i,null,t),c.prototype.behaviors=t?t.concat(i):n}const d=e=>{n&&function(t,e,i){for(let n=0;n<e.length;n++)l(t,e[n],i,a)}(e,n,r),l(e,t,r,s)};return o.c||d(c.prototype),c.generatedFrom=t,c}i(3);i.d(e,"a",(function(){return d}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const d=function(t){let e;return e="function"==typeof t?t:d.Class(t),customElements.define(e.is,e),e};d.Class=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let i=e?e(Object(n.a)(HTMLElement)):Object(n.a)(HTMLElement);return i=c(t,i,t.behaviors),i.is=i.prototype.is=t.is,i}},function(t,e,i){"use strict";i.d(e,"c",(function(){return a})),i.d(e,"b",(function(){return l})),i.d(e,"a",(function(){return h}));i(3);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n,o,r=/(url\()([^)]*)(\))/g,s=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function a(t,e){if(t&&s.test(t))return t;if("//"===t)return t;if(void 0===n){n=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",n="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),n)try{return new URL(t,e).href}catch(e){return t}return o||(o=document.implementation.createHTMLDocument("temp"),o.base=o.createElement("base"),o.head.appendChild(o.base),o.anchor=o.createElement("a"),o.body.appendChild(o.anchor)),o.base.href=e,o.anchor.href=t,o.anchor.href||t}function l(t,e){return t.replace(r,(function(t,i,n,o){return i+"'"+a(n.replace(/["']/g,""),e)+"'"+o}))}function h(t){return t.substring(0,t.lastIndexOf("/")+1)}},function(t,e,i){"use strict";var n=i(21),o=(i(9),i(3),i(20)),r=i(4);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function s(t,e,i,n,o){let r;o&&(r="object"==typeof i&&null!==i,r&&(n=t.__dataTemp[e]));let s=n!==i&&(n==n||i==i);return r&&s&&(t.__dataTemp[e]=i),s}const a=Object(r.a)(t=>{return class extends t{_shouldPropertyChange(t,e,i){return s(this,t,e,i,!0)}}}),l=Object(r.a)(t=>{return class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,i){return s(this,t,e,i,this.mutableData)}}});a._mutablePropertyChange=s;var h=i(2),c=i(0);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let d=null;function u(){return d}u.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:u,writable:!0}});const p=Object(o.a)(u),f=a(p);const m=Object(o.a)(class{});class _ extends m{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(t&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,i(t)});else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(t,e,i)}}_showHideChildren(t){let e=this.children;for(let i=0;i<e.length;i++){let n=e[i];if(Boolean(t)!=Boolean(n.__hideTemplateChildren__))if(n.nodeType===Node.TEXT_NODE)t?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if("slot"===n.localName)if(t)n.__polymerReplaced__=document.createComment("hidden-slot"),Object(c.a)(Object(c.a)(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const t=n.__polymerReplaced__;t&&Object(c.a)(Object(c.a)(t).parentNode).replaceChild(n,t)}else n.style&&(t?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=t,n._showHideChildren&&n._showHideChildren(t)}}_setUnmanagedPropertyToNode(t,e,i){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(t,e,i)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}_.prototype.__dataHost,_.prototype.__templatizeOptions,_.prototype._methodHost,_.prototype.__templatizeOwner,_.prototype.__hostProps;const g=a(_);function v(t){let e=t.__dataHost;return e&&e._methodHost||e}function y(t,e,i){let n=i.mutableData?g:_;L.mixin&&(n=L.mixin(n));let o=class extends n{};return o.prototype.__templatizeOptions=i,o.prototype._bindTemplate(t),function(t,e,i,n){let o=i.hostProps||{};for(let e in n.instanceProps){delete o[e];let i=n.notifyInstanceProp;i&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:x(e,i)})}if(n.forwardHostProp&&e.__dataHost)for(let e in o)i.hasHostProps||(i.hasHostProps=!0),t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,i){t.__dataHost._setPendingPropertyOrPath("_host_"+e,i[e],!0,!0)}})}(o,t,e,i),o}function b(t,e,i){let n=i.forwardHostProp;if(n&&e.hasHostProps){let o=e.templatizeTemplateClass;if(!o){let t=i.mutableData?f:p;o=e.templatizeTemplateClass=class extends t{};let r=e.hostProps;for(let t in r)o.prototype._addPropertyEffect("_host_"+t,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:w(t,n)}),o.prototype._createNotifyingProperty("_host_"+t)}!function(t,e){d=t,Object.setPrototypeOf(t,e.prototype),new e,d=null}(t,o),t.__dataProto&&Object.assign(t.__data,t.__dataProto),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties()}}function w(t,e){return function(t,i,n){e.call(t.__templatizeOwner,i.substring("_host_".length),n[i])}}function x(t,e){return function(t,i,n){e.call(t.__templatizeOwner,t,i,n[i])}}function L(t,e,i){if(h.g&&!v(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let n=(e?e.constructor:_)._parseTemplate(t),o=n.templatizeInstanceClass;o||(o=y(t,n,i),n.templatizeInstanceClass=o),b(t,n,i);let r=class extends o{};return r.prototype._methodHost=v(t),r.prototype.__dataHost=t,r.prototype.__templatizeOwner=e,r.prototype.__hostProps=n.hostProps,r=r,r}function C(t,e){let i;for(;e;)if(i=e.__templatizeInstance){if(i.__dataHost==t)return i;e=i.__dataHost}else e=Object(c.a)(e).parentNode;return null}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var z=i(28);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let M=!1;function S(){if(h.c&&!h.i){if(!M){M=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const P=Object(z.a)(l(Object(o.a)(HTMLElement)));customElements.define("dom-bind",class extends P{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),h.g)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,e,i,n){this.mutableData=!0}connectedCallback(){S()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Object(c.a)(Object(c.a)(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let e=new MutationObserver(()=>{if(t=this.querySelector("template"),!t)throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});var k=i(17),T=i(12),E=i(16),O=i(1),A=i(6);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const H=l(k.a);class I extends H{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t)}connectedCallback(){if(super.connectedCallback(),S()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=Object(c.a)(Object(c.a)(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t)}}__ensureTemplatized(){if(!this.__ctor){let t=this.template=this.querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}let e={};e[this.as]=!0,e[this.indexAs]=!0,e[this.itemsIndexAs]=!0,this.__ctor=L(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:e,forwardHostProp:function(t,e){let i=this.__instances;for(let n,o=0;o<i.length&&(n=i[o]);o++)n.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,i){if(Object(O.e)(this.as,e)){let n=t[this.itemsIndexAs];e==this.as&&(this.items[n]=i);let o=Object(O.i)(this.as,`${JSCompiler_renameProperty("items",this)}.${n}`,e);this.notifyPath(o,i)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=t,i=this.__getMethodHost();return function(){return i[e].apply(i,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let t=performance.now(),e=this._targetFrameTime/(t-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*e)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=t,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let e=this.__observePaths;for(let i=0;i<e.length;i++)0===t.indexOf(e[i])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(t,e=0){this.__renderDebouncer=T.a.debounce(this.__renderDebouncer,e>0?A.b.after(e):A.a,t.bind(this)),Object(E.a)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Object(E.b)()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let t=this.items||[],e=new Array(t.length);for(let i=0;i<t.length;i++)e[i]=i;this.__filterFn&&(e=e.filter((e,i,n)=>this.__filterFn(t[e],i,n))),this.__sortFn&&e.sort((e,i)=>this.__sortFn(t[e],t[i]));const i=this.__itemsIdxToInstIdx={};let n=0;const o=Math.min(e.length,this.__limit);for(;n<o;n++){let o=this.__instances[n],r=e[n],s=t[r];i[r]=n,o?(o._setPendingProperty(this.as,s),o._setPendingProperty(this.indexAs,n),o._setPendingProperty(this.itemsIndexAs,r),o._flushProperties()):this.__insertInstance(s,n,r)}for(let t=this.__instances.length-1;t>=n;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t];const i=Object(c.a)(e.root);for(let t=0;t<e.children.length;t++){let n=e.children[t];i.appendChild(n)}return e}__attachInstance(t,e){let i=this.__instances[t];e.insertBefore(i.root,this)}__detachAndRemoveInstance(t){let e=this.__detachInstance(t);e&&this.__pool.push(e),this.__instances.splice(t,1)}__stampInstance(t,e,i){let n={};return n[this.as]=t,n[this.indexAs]=e,n[this.itemsIndexAs]=i,new this.__ctor(n)}__insertInstance(t,e,i){let n=this.__pool.pop();n?(n._setPendingProperty(this.as,t),n._setPendingProperty(this.indexAs,e),n._setPendingProperty(this.itemsIndexAs,i),n._flushProperties()):n=this.__stampInstance(t,e,i);let o=this.__instances[e+1],r=o?o.children[0]:this;return Object(c.a)(Object(c.a)(this).parentNode).insertBefore(n.root,r),this.__instances[e]=n,n}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let i=t.slice(6),n=i.indexOf("."),o=n<0?i:i.substring(0,n);if(o==parseInt(o,10)){let t=n<0?"":i.substring(n+1);this.__handleObservedPaths(t);let r=this.__itemsIdxToInstIdx[o],s=this.__instances[r];if(s){let i=this.as+(t?"."+t:"");s._setPendingPropertyOrPath(i,e,!1,!0),s._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return C(this.template,t)}}customElements.define(I.is,I);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class N extends k.a{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=T.a.debounce(this.__renderDebouncer,A.a,()=>this.__render()),Object(E.a)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=Object(c.a)(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Object(c.a)(t).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),S()||(this.style.display="none"),this.if&&this.__debounceRender()}render(){Object(E.b)()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let t=Object(c.a)(this).parentNode;if(t){if(!this.__ctor){let t=Object(c.a)(this).querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!Object(c.a)(this).querySelector("template"))throw new Error("dom-if requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}this.__ctor=L(t,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Object(O.g)(t)]=!0))}})}if(this.__instance){this.__syncHostProperties();let e=this.__instance.children;if(e&&e.length){if(Object(c.a)(this).previousSibling!==e[e.length-1])for(let i,n=0;n<e.length&&(i=e[n]);n++)Object(c.a)(t).insertBefore(i,this)}}else this.__instance=new this.__ctor,Object(c.a)(t).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let t=this.__invalidProps;if(t){for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=Object(c.a)(t[0]).parentNode;if(e){e=Object(c.a)(e);for(let i,n=0;n<t.length&&(i=t[n]);n++)e.removeChild(i)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let t=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(t)}}customElements.define(N.is,N);var j=i(29),R=i(19);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let V=Object(r.a)(t=>{let e=Object(R.a)(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let i=e.path;if(i==JSCompiler_renameProperty("items",this)){let i=e.base||[],n=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),n){let t=Object(j.a)(i,n);this.__applySplices(t)}this.__lastItems=i,this.__lastMulti=t}else if(e.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(e.value.indexSplices);else{let t=i.slice(`${JSCompiler_renameProperty("items",this)}.`.length),e=parseInt(t,10);t.indexOf(".")<0&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;for(let i=0;i<t.length;i++){let n=t[i];e.forEach((t,i)=>{t<n.index||(t>=n.index+n.removed.length?e.set(i,t+n.addedCount-n.removed.length):e.set(i,-1))});for(let t=0;t<n.addedCount;t++){let i=n.index+t;e.has(this.items[i])&&e.set(this.items[i],i)}}this.__updateLinks();let i=0;e.forEach((t,n)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null,e.delete(n)):i++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.__selectedMap.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((i,n)=>{e==t++&&this.deselect(n)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let i;this.__selectedMap.delete(t),this.multi&&(i=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null}}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}}})(k.a);class B extends V{static get is(){return"array-selector"}static get template(){return null}}customElements.define(B.is,B);var D=i(34),Z=i(18),F=i(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const U=new D.a;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,i){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,i){},styleSubtree(t,e){U.processStyles(),Object(Z.c)(t,e)},styleElement(t){U.processStyles()},styleDocument(t){U.processStyles(),Object(Z.c)(document.body,t)},getComputedStyleValue:(t,e)=>Object(Z.b)(t,e),flushCustomStyles(){},nativeCss:F.c,nativeShadow:F.d,cssBuild:F.a,disableRuntime:F.b}),window.ShadyCSS.CustomStyleInterface=U;var q=i(23);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const G="include",W=window.ShadyCSS.CustomStyleInterface;class $ extends HTMLElement{constructor(){super(),this._style=null,W.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute(G);return e&&(t.removeAttribute(G),t.textContent=Object(q.a)(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let J;window.customElements.define("custom-style",$),J=a._mutablePropertyChange;Boolean;i(8);i.d(e,"a",(function(){return Y}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Y=Object(n.a)(HTMLElement).prototype},function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return s}));i(3),i(4),i(6);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class n{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,o.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),o.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,i){return t instanceof n?t._cancelAsync():t=new n,t.setConfig(e,i),t}}let o=new Set;const r=function(t){o.add(t)},s=function(){const t=Boolean(o.size);return o.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t}},function(t,e,i){"use strict";i.d(e,"c",(function(){return n})),i.d(e,"b",(function(){return o})),i.d(e,"a",(function(){return r}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const n=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,o=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,r=/@media\s(.*)/},function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"a",(function(){return a}));i(3);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const n={},o=/-[a-z]/g,r=/([A-Z])/g;function s(t){return n[t]||(n[t]=t.indexOf("-")<0?t:t.replace(o,t=>t[1].toUpperCase()))}function a(t){return n[t]||(n[t]=t.replace(r,"-$1").toLowerCase())}},function(t,e,i){t.exports={BaseModel:i(44),BaseStore:i(46),BaseService:i(48),BaseMixin:i(50),Mixin:i(51),EventBus:i(22),EventInterface:i(52),LitCorkUtils:i(53),fetch:i(35),LightDom:i(54)}},function(t,e,i){"use strict";i.d(e,"b",(function(){return o}));i(3);var n=i(12);i.d(e,"a",(function(){return n.b}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=Object(n.c)()}while(t||e)}},function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i(19),o=i(8);i.d(e,"b",(function(){return o.a}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=Object(n.a)(HTMLElement)},function(t,e,i){"use strict";i.d(e,"c",(function(){return o})),i.d(e,"b",(function(){return r})),i.d(e,"a",(function(){return s}));var n=i(13);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function o(t,e){for(let i in e)null===i?t.style.removeProperty(i):t.style.setProperty(i,e[i])}function r(t,e){const i=window.getComputedStyle(t).getPropertyValue(e);return i?i.trim():""}function s(t){const e=n.b.test(t)||n.c.test(t);return n.b.lastIndex=0,n.c.lastIndex=0,e}},function(t,e,i){"use strict";i(3);var n=i(2),o=i(4),r=i(23),s=i(10),a=i(24),l=i(20);const h=[];var c=i(27);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const d=Object(o.a)(t=>{const e=Object(c.a)(t);function i(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof o?e:null}function n(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const i=t.properties;i&&(e=function(t){const e={};for(let i in t){const n=t[i];e[i]="function"==typeof n?{type:n}:n}return e}(i))}t.__ownProperties=e}return t.__ownProperties}class o extends e{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){t=this.prototype,h.push(t);const e=this._properties;this.__observedAttributes=e?Object.keys(e).map(t=>this.attributeNameForProperty(t)):[]}var t;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=i(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=n(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=i(this);this.__properties=Object.assign({},t&&t._properties,n(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return o});var u=i(0);i.d(e,"a",(function(){return m}));
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const p="3.3.0",f=window.ShadyCSS&&window.ShadyCSS.cssBuild,m=Object(o.a)(t=>{const e=d(Object(l.a)(t));return class extends e{static get polymerElementVersion(){return p}static _finalizeClass(){e._finalizeClass.call(this);const t=((i=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",i))||(i.__ownObservers=i.hasOwnProperty(JSCompiler_renameProperty("observers",i))?i.observers:null),i.__ownObservers);var i;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):n.c||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let r in t)e=this.prototype,i=r,n=t[r],o=t,n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(i)?console.warn(`Cannot redefine computed property '${i}'.`):e._createComputedProperty(i,n.computed,o)),n.readOnly&&!e._hasReadOnlyEffect(i)?e._createReadOnlyProperty(i,!n.computed):!1===n.readOnly&&e._hasReadOnlyEffect(i)&&console.warn(`Cannot make readOnly property '${i}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(i)?e._createReflectedProperty(i):!1===n.reflectToAttribute&&e._hasReflectEffect(i)&&console.warn(`Cannot make reflected property '${i}' non-reflected.`),n.notify&&!e._hasNotifyEffect(i)?e._createNotifyingProperty(i):!1===n.notify&&e._hasNotifyEffect(i)&&console.warn(`Cannot make notify property '${i}' non-notify.`),n.observer&&e._createPropertyObserver(i,n.observer,o[n.observer]),e._addPropertyToAttributeMap(i);var e,i,n,o}static createObservers(t,e){const i=this.prototype;for(let n=0;n<t.length;n++)i._createMethodObserver(t[n],e)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(t){let e=null;if(t&&(!n.g||n.a)&&(e=a.a.import(t,"template"),n.g&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=Object(s.a)(t.url);else{const t=a.a.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=n.e,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let i in e){let n=e[i];"value"in n&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[i]=n)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let i=t[e];if(!this.hasOwnProperty(e)){let t="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}static _processStyleText(t,e){return Object(s.b)(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const i=this.importPath;!function(t,e,i,n){if(!f){const o=e.content.querySelectorAll("style"),s=Object(r.c)(e),a=Object(r.b)(i),l=e.content.firstElementChild;for(let i=0;i<a.length;i++){let o=a[i];o.textContent=t._processStyleText(o.textContent,n),e.content.insertBefore(o,l)}let h=0;for(let e=0;e<s.length;e++){let i=s[e],r=o[h];r!==i?(i=i.cloneNode(!0),r.parentNode.insertBefore(i,r)):h++,i.textContent=t._processStyleText(i.textContent,n)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,i)}(this,e,t,i?Object(s.c)(i):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=Object(u.a)(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t)),n.h&&window.ShadyDOM&&ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=Object(s.c)(this.importPath)),Object(s.c)(t,e)}static _parseTemplateContent(t,i,n){return i.dynamicFns=i.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,i,n)}static _addTemplatePropertyEffect(t,i,o){return!n.c||i in this._properties||console.warn(`Property '${i}' used in template but not declared in 'properties'; `+"attribute will not be observed."),e._addTemplatePropertyEffect.call(this,t,i,o)}}})},function(t,e,i){"use strict";i(3);var n=i(0),o=i(4),r=i(1),s=i(14),a=i(26);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const l={"dom-if":!0,"dom-repeat":!0};function h(t){let e=t.getAttribute("is");if(e&&l[e]){let i=t;for(i.removeAttribute("is"),t=i.ownerDocument.createElement(e),i.parentNode.replaceChild(t,i),t.appendChild(i);i.attributes.length;)t.setAttribute(i.attributes[0].name,i.attributes[0].value),i.removeAttribute(i.attributes[0].name)}return t}function c(t,e){let i=e.parentInfo&&c(t,e.parentInfo);if(!i)return t;for(let t=i.firstChild,n=0;t;t=t.nextSibling)if(e.parentIndex===n++)return t}function d(t,e,i,n){n.id&&(e[n.id]=i)}function u(t,e,i){if(i.events&&i.events.length)for(let n,o=0,r=i.events;o<r.length&&(n=r[o]);o++)t._addMethodEventListenerToNode(e,n.name,n.value,t)}function p(t,e,i){i.templateInfo&&(e._templateInfo=i.templateInfo)}const f=Object(o.a)(t=>{return class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let i=t._templateInfo={};i.nodeInfoList=[],i.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,i,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,i){return this._parseTemplateNode(t.content,e,i)}static _parseTemplateNode(t,e,i){let n=!1,o=t;return"template"!=o.localName||o.hasAttribute("preserve-content")?"slot"===o.localName&&(e.hasInsertionPoint=!0):n=this._parseTemplateNestedTemplate(o,e,i)||n,o.firstChild&&this._parseTemplateChildNodes(o,e,i),o.hasAttributes&&o.hasAttributes()&&(n=this._parseTemplateNodeAttributes(o,e,i)||n),n}static _parseTemplateChildNodes(t,e,i){if("script"!==t.localName&&"style"!==t.localName)for(let n,o=t.firstChild,r=0;o;o=n){if("template"==o.localName&&(o=h(o)),n=o.nextSibling,o.nodeType===Node.TEXT_NODE){let i=n;for(;i&&i.nodeType===Node.TEXT_NODE;)o.textContent+=i.textContent,n=i.nextSibling,t.removeChild(i),i=n;if(e.stripWhiteSpace&&!o.textContent.trim()){t.removeChild(o);continue}}let s={parentIndex:r,parentInfo:i};this._parseTemplateNode(o,e,s)&&(s.infoIndex=e.nodeInfoList.push(s)-1),o.parentNode&&r++}}static _parseTemplateNestedTemplate(t,e,i){let n=t,o=this._parseTemplate(n,e);return(o.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),i.templateInfo=o,!0}static _parseTemplateNodeAttributes(t,e,i){let n=!1,o=Array.from(t.attributes);for(let r,s=o.length-1;r=o[s];s--)n=this._parseTemplateNodeAttribute(t,e,i,r.name,r.value)||n;return n}static _parseTemplateNodeAttribute(t,e,i,n,o){return"on-"===n.slice(0,3)?(t.removeAttribute(n),i.events=i.events||[],i.events.push({name:n.slice(3),value:o}),!0):"id"===n&&(i.id=o,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let e=this.constructor._parseTemplate(t),i=e.nodeInfoList,n=e.content||t.content,o=document.importNode(n,!0);o.__noInsertionPoint=!e.hasInsertionPoint;let r=o.nodeList=new Array(i.length);o.$={};for(let t,e=0,n=i.length;e<n&&(t=i[e]);e++){let i=r[e]=c(o,t);d(0,o.$,i,t),p(0,i,t),u(this,i,t)}return o=o,o}_addMethodEventListenerToNode(t,e,i,n){let o=function(t,e,i){return t=t._methodHost||t,function(e){t[i]?t[i](e,e.detail):console.warn("listener method `"+i+"` not defined")}}(n=n||t,0,i);return this._addEventListenerToNode(t,e,o),o}_addEventListenerToNode(t,e,i){t.addEventListener(e,i)}_removeEventListenerFromNode(t,e,i){t.removeEventListener(e,i)}}});var m=i(2);i.d(e,"a",(function(){return U}));
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
let _=0;const g={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},v=/[A-Z]/;function y(t,e){let i=t[e];if(i){if(!t.hasOwnProperty(e)){i=t[e]=Object.create(t[e]);for(let t in i){let e=i[t],n=i[t]=Array(e.length);for(let t=0;t<e.length;t++)n[t]=e[t]}}}else i=t[e]={};return i}function b(t,e,i,n,o,r){if(e){let s=!1,a=_++;for(let l in i)w(t,e,a,l,i,n,o,r)&&(s=!0);return s}return!1}function w(t,e,i,n,o,s,a,l){let h=!1,c=e[a?Object(r.g)(n):n];if(c)for(let e,r=0,d=c.length;r<d&&(e=c[r]);r++)e.info&&e.info.lastRun===i||a&&!x(n,e.trigger)||(e.info&&(e.info.lastRun=i),e.fn(t,n,o,s,e.info,a,l),h=!0);return h}function x(t,e){if(e){let i=e.name;return i==t||!(!e.structured||!Object(r.b)(i,t))||!(!e.wildcard||!Object(r.c)(i,t))}return!0}function L(t,e,i,n,o){let r="string"==typeof o.method?t[o.method]:o.method,s=o.property;r?r.call(t,t.__data[s],n[s]):o.dynamicFn||console.warn("observer method `"+o.method+"` not defined")}function C(t,e,i){let n=Object(r.g)(e);if(n!==e){return z(t,Object(s.a)(n)+"-changed",i[e],e),!0}return!1}function z(t,e,i,o){let r={value:i,queueProperty:!0};o&&(r.path=o),Object(n.a)(t).dispatchEvent(new CustomEvent(e,{detail:r}))}function M(t,e,i,n,o,s){let a=(s?Object(r.g)(e):e)!=e?e:null,l=a?Object(r.a)(t,a):t.__data[e];a&&void 0===l&&(l=i[e]),z(t,o.eventName,l,a)}function S(t,e,i,n,o){let r=t.__data[e];m.f&&(r=Object(m.f)(r,o.attrName,"attribute",t)),t._propertyToAttribute(e,o.attrName,r)}function P(t,e,i,n,o){let r=I(t,e,i,n,o),s=o.methodInfo;t.__dataHasAccessor&&t.__dataHasAccessor[s]?t._setPendingProperty(s,r,!0):t[s]=r}function k(t,e,i,n,o,r,a){i.bindings=i.bindings||[];let l={kind:n,target:o,parts:r,literal:a,isCompound:1!==r.length};if(i.bindings.push(l),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(l)){let{event:t,negate:e}=l.parts[0];l.listenerEvent=t||Object(s.a)(o)+"-changed",l.listenerNegate=e}let h=e.nodeInfoList.length;for(let i=0;i<l.parts.length;i++){let n=l.parts[i];n.compoundIndex=i,T(t,e,l,n,h)}}function T(t,e,i,n,o){if(!n.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let r=n.dependencies,s={index:o,binding:i,part:n,evaluator:t};for(let i=0;i<r.length;i++){let n=r[i];"string"==typeof n&&(n=B(n),n.wildcard=!0),t._addTemplatePropertyEffect(e,n.rootProperty,{fn:E,info:s,trigger:n})}}}function E(t,e,i,n,o,s,a){let l=a[o.index],h=o.binding,c=o.part;if(s&&c.source&&e.length>c.source.length&&"property"==h.kind&&!h.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[h.target]){let n=i[e];e=Object(r.i)(c.source,h.target,e),l._setPendingPropertyOrPath(e,n,!1,!0)&&t._enqueueClient(l)}else{!function(t,e,i,n,o){o=function(t,e,i,n){if(i.isCompound){let o=t.__dataCompoundStorage[i.target];o[n.compoundIndex]=e,e=o.join("")}"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,o,i,n),m.f&&(o=Object(m.f)(o,i.target,i.kind,e));if("attribute"==i.kind)t._valueToNodeAttribute(e,o,i.target);else{let n=i.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[n]?e[g.READ_ONLY]&&e[g.READ_ONLY][n]||e._setPendingProperty(n,o)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,n,o)}}(t,l,h,c,o.evaluator._evaluateBinding(t,c,e,i,n,s))}}function O(t,e){if(e.isCompound){let i=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),o=e.parts,r=new Array(o.length);for(let t=0;t<o.length;t++)r[t]=o[t].literal;let s=e.target;i[s]=r,e.literal&&"property"==e.kind&&("className"===s&&(t=Object(n.a)(t)),t[s]=e.literal)}}function A(t,e,i){if(i.listenerEvent){let n=i.parts[0];t.addEventListener(i.listenerEvent,(function(t){!function(t,e,i,n,o){let s,a=t.detail,l=a&&a.path;l?(n=Object(r.i)(i,n,l),s=a&&a.value):s=t.currentTarget[i],s=o?!s:s,e[g.READ_ONLY]&&e[g.READ_ONLY][n]||!e._setPendingPropertyOrPath(n,s,!0,Boolean(l))||a&&a.queueProperty||e._invalidateProperties()}(t,e,i.target,n.source,n.negate)}))}}function H(t,e,i,n,o,r){r=e.static||r&&("object"!=typeof r||r[e.methodName]);let s={methodName:e.methodName,args:e.args,methodInfo:o,dynamicFn:r};for(let o,r=0;r<e.args.length&&(o=e.args[r]);r++)o.literal||t._addPropertyEffect(o.rootProperty,i,{fn:n,info:s,trigger:o});r&&t._addPropertyEffect(e.methodName,i,{fn:n,info:s})}function I(t,e,i,n,o){let r=t._methodHost||t,s=r[o.methodName];if(s){let n=t._marshalArgs(o.args,e,i);return s.apply(r,n)}o.dynamicFn||console.warn("method `"+o.methodName+"` not defined")}const N=[],j=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function R(t){let e="";for(let i=0;i<t.length;i++){e+=t[i].literal||""}return e}function V(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:N};if(e[2].trim()){return function(t,e){return e.args=t.map((function(t){let i=B(t);return i.literal||(e.static=!1),i}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function B(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:e,value:"",literal:!1},n=e[0];switch("-"===n&&(n=e[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':i.value=e.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(e),i.literal=!0}return i.literal||(i.rootProperty=Object(r.g)(e),i.structured=Object(r.d)(e),i.structured&&(i.wildcard=".*"==e.slice(-2),i.wildcard&&(i.name=e.slice(0,-2)))),i}function D(t,e,i){let n=Object(r.a)(t,i);return void 0===n&&(n=e[i]),n}function Z(t,e,i,n){t.notifyPath(i+".splices",{indexSplices:n}),t.notifyPath(i+".length",e.length)}function F(t,e,i,n,o,r){Z(t,e,i,[{index:n,addedCount:o,removed:r,object:e,type:"splice"}])}const U=Object(o.a)(t=>{const e=f(Object(a.a)(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return g}_initializeProperties(){super._initializeProperties(),q.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[g.READ_ONLY];for(let i in t)e&&e[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=t[i])}_addPropertyEffect(t,e,i){this._createPropertyAccessor(t,e==g.READ_ONLY);let n=y(this,e)[t];n||(n=this[e][t]=[]),n.push(i)}_removePropertyEffect(t,e,i){let n=y(this,e)[t],o=n.indexOf(i);o>=0&&n.splice(o,1)}_hasPropertyEffect(t,e){let i=this[e];return Boolean(i&&i[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,g.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,g.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,g.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,g.COMPUTE)}_setPendingPropertyOrPath(t,e,i,n){if(n||Object(r.g)(Array.isArray(t)?t[0]:t)!==t){if(!n){let i=Object(r.a)(this,t);if(!(t=Object(r.h)(this,t,e))||!super._shouldPropertyChange(t,e,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,i))return function(t,e,i){let n=t.__dataLinkedPaths;if(n){let o;for(let s in n){let a=n[s];Object(r.c)(s,e)?(o=Object(r.i)(s,a,e),t._setPendingPropertyOrPath(o,i,!0,!0)):Object(r.c)(a,e)&&(o=Object(r.i)(a,s,e),t._setPendingPropertyOrPath(o,i,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,i);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,i){i===t[e]&&"object"!=typeof i||("className"===e&&(t=Object(n.a)(t)),t[e]=i)}_setPendingProperty(t,e,i){let n=this.__dataHasPaths&&Object(r.d)(t),o=n?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,o[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),n?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(n||this[g.NOTIFY]&&this[g.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=i),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let i=t[e];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let i in t)!e&&this[g.READ_ONLY]&&this[g.READ_ONLY][i]||this._setPendingPropertyOrPath(i,t[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,i){let n=this.__dataHasPaths;this.__dataHasPaths=!1,function(t,e,i,n){let o=t[g.COMPUTE];if(o){let r=e;for(;b(t,o,r,i,n);)Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),r=t.__dataPending,t.__dataPending=null}}(this,e,i,n);let o=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(e,i,n),this._flushClients(),b(this,this[g.REFLECT],e,i,n),b(this,this[g.OBSERVE],e,i,n),o&&function(t,e,i,n,o){let r,s,a=t[g.NOTIFY],l=_++;for(let s in e)e[s]&&(a&&w(t,a,l,s,i,n,o)?r=!0:o&&C(t,s,i)&&(r=!0));r&&(s=t.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,o,e,i,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,i){this[g.PROPAGATE]&&b(this,this[g.PROPAGATE],t,e,i);let n=this.__templateInfo;for(;n;)b(this,n.propertyEffects,t,e,i,n.nodeList),n=n.nextTemplateInfo}linkPaths(t,e){t=Object(r.f)(t),e=Object(r.f)(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=Object(r.f)(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let i={path:""};Z(this,Object(r.a)(this,t,i),i.path,e)}get(t,e){return Object(r.a)(e||this,t)}set(t,e,i){i?Object(r.h)(i,t,e):this[g.READ_ONLY]&&this[g.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let i={path:""},n=Object(r.a)(this,t,i),o=n.length,s=n.push(...e);return e.length&&F(this,n,i.path,o,e.length,[]),s}pop(t){let e={path:""},i=Object(r.a)(this,t,e),n=Boolean(i.length),o=i.pop();return n&&F(this,i,e.path,i.length,0,[o]),o}splice(t,e,i,...n){let o,s={path:""},a=Object(r.a)(this,t,s);return e<0?e=a.length-Math.floor(-e):e&&(e=Math.floor(e)),o=2===arguments.length?a.splice(e):a.splice(e,i,...n),(n.length||o.length)&&F(this,a,s.path,e,n.length,o),o}shift(t){let e={path:""},i=Object(r.a)(this,t,e),n=Boolean(i.length),o=i.shift();return n&&F(this,i,e.path,0,0,[o]),o}unshift(t,...e){let i={path:""},n=Object(r.a)(this,t,i),o=n.unshift(...e);return e.length&&F(this,n,i.path,0,e.length,[]),o}notifyPath(t,e){let i;if(1==arguments.length){let n={path:""};e=Object(r.a)(this,t,n),i=n.path}else i=Array.isArray(t)?Object(r.f)(t):t;this._setPendingPropertyOrPath(i,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var i;this._addPropertyEffect(t,g.READ_ONLY),e&&(this["_set"+(i=t,i[0].toUpperCase()+i.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,i){let n={property:t,method:e,dynamicFn:Boolean(i)};this._addPropertyEffect(t,g.OBSERVE,{fn:L,info:n,trigger:{name:t}}),i&&this._addPropertyEffect(e,g.OBSERVE,{fn:L,info:n,trigger:{name:e}})}_createMethodObserver(t,e){let i=V(t);if(!i)throw new Error("Malformed observer expression '"+t+"'");H(this,i,g.OBSERVE,I,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,g.NOTIFY,{fn:M,info:{eventName:Object(s.a)(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,g.REFLECT,{fn:S,info:{attrName:e}})}_createComputedProperty(t,e,i){let n=V(e);if(!n)throw new Error("Malformed computed expression '"+e+"'");H(this,n,g.COMPUTE,P,t,i)}_marshalArgs(t,e,i){const n=this.__data,o=[];for(let s=0,a=t.length;s<a;s++){let{name:a,structured:l,wildcard:h,value:c,literal:d}=t[s];if(!d)if(h){const t=Object(r.c)(a,e),o=D(n,i,t?e:a);c={path:t?e:a,value:o,base:t?Object(r.a)(n,a):o}}else c=l?D(n,i,a):n[a];o[s]=c}return o}static addPropertyEffect(t,e,i){this.prototype._addPropertyEffect(t,e,i)}static createPropertyObserver(t,e,i){this.prototype._createPropertyObserver(t,e,i)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,i){this.prototype._createComputedProperty(t,e,i)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let i=this.constructor._parseTemplate(t),n=this.__templateInfo==i;if(!n)for(let t in i.propertyEffects)this._createPropertyAccessor(t);if(e&&(i=Object.create(i),i.wasPreBound=n,!n&&this.__templateInfo)){let t=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=t.nextTemplateInfo=i,i.previousTemplateInfo=t,i}return this.__templateInfo=i}static _addTemplatePropertyEffect(t,e,i){(t.hostProps=t.hostProps||{})[e]=!0;let n=t.propertyEffects=t.propertyEffects||{};(n[e]=n[e]||[]).push(i)}_stampTemplate(t){q.beginHosting(this);let e=super._stampTemplate(t);q.endHosting(this);let i=this._bindTemplate(t,!0);if(i.nodeList=e.nodeList,!i.wasPreBound){let t=i.childNodes=[];for(let i=e.firstChild;i;i=i.nextSibling)t.push(i)}return e.templateInfo=i,function(t,e){let{nodeList:i,nodeInfoList:n}=e;if(n.length)for(let e=0;e<n.length;e++){let o=n[e],r=i[e],s=o.bindings;if(s)for(let e=0;e<s.length;e++){let i=s[e];O(r,i),A(r,t,i)}r.__dataHost=t}}(this,i),this.__dataReady&&b(this,i.propertyEffects,this.__data,null,!1,i.nodeList),e}_removeBoundDom(t){let e=t.templateInfo;e.previousTemplateInfo&&(e.previousTemplateInfo.nextTemplateInfo=e.nextTemplateInfo),e.nextTemplateInfo&&(e.nextTemplateInfo.previousTemplateInfo=e.previousTemplateInfo),this.__templateInfoLast==e&&(this.__templateInfoLast=e.previousTemplateInfo),e.previousTemplateInfo=e.nextTemplateInfo=null;let i=e.childNodes;for(let t=0;t<i.length;t++){let e=i[t];e.parentNode.removeChild(e)}}static _parseTemplateNode(t,i,n){let o=e._parseTemplateNode.call(this,t,i,n);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,i);e&&(t.textContent=R(e)||" ",k(this,i,n,"text","textContent",e),o=!0)}return o}static _parseTemplateNodeAttribute(t,i,n,o,r){let a=this._parseBindings(r,i);if(a){let e=o,r="property";v.test(o)?r="attribute":"$"==o[o.length-1]&&(o=o.slice(0,-1),r="attribute");let l=R(a);return l&&"attribute"==r&&("class"==o&&t.hasAttribute("class")&&(l+=" "+t.getAttribute(o)),t.setAttribute(o,l)),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===r&&(o=Object(s.b)(o)),k(this,i,n,r,o,a,l),!0}return e._parseTemplateNodeAttribute.call(this,t,i,n,o,r)}static _parseTemplateNestedTemplate(t,i,n){let o=e._parseTemplateNestedTemplate.call(this,t,i,n),r=n.templateInfo.hostProps;for(let t in r){k(this,i,n,"property","_host_"+t,[{mode:"{",source:t,dependencies:[t]}])}return o}static _parseBindings(t,e){let i,n=[],o=0;for(;null!==(i=j.exec(t));){i.index>o&&n.push({literal:t.slice(o,i.index)});let r=i[1][0],s=Boolean(i[2]),a=i[3].trim(),l=!1,h="",c=-1;"{"==r&&(c=a.indexOf("::"))>0&&(h=a.substring(c+2),a=a.substring(0,c),l=!0);let d=V(a),u=[];if(d){let{args:t,methodName:i}=d;for(let e=0;e<t.length;e++){let i=t[e];i.literal||u.push(i)}let n=e.dynamicFns;(n&&n[i]||d.static)&&(u.push(i),d.dynamicFn=!0)}else u.push(a);n.push({source:a,mode:r,negate:s,customEvent:l,signature:d,dependencies:u,event:h}),o=j.lastIndex}if(o&&o<t.length){let e=t.substring(o);e&&n.push({literal:e})}return n.length?n:null}static _evaluateBinding(t,e,i,n,o,s){let a;return a=e.signature?I(t,i,n,0,e.signature):i!=e.source?Object(r.a)(t,e.source):s&&Object(r.d)(i)?Object(r.a)(t,i):t.__data[i],e.negate&&(a=!a),a}}});const q=new class{constructor(){this.stack=[]}registerHost(t){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(t)}}beginHosting(t){this.stack.push(t)}endHosting(t){let e=this.stack.length;e&&this.stack[e-1]==t&&this.stack.pop()}}},function(t,e,i){"use strict";var n=i(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class o{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function r(t){return function t(e,i){let n=i.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=n.trim(),e.parent){let t=e.previous?e.previous.end:e.parent.start;n=i.substring(t,e.start-1),n=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t}))}(n),n=n.replace(c.multipleSpaces," "),n=n.substring(n.lastIndexOf(";")+1);let o=e.parsedSelector=e.selector=n.trim();e.atRule=0===o.indexOf(p),e.atRule?0===o.indexOf(u)?e.type=a.MEDIA_RULE:o.match(c.keyframesRule)&&(e.type=a.KEYFRAMES_RULE,e.keyframesName=e.selector.split(c.multipleSpaces).pop()):0===o.indexOf(d)?e.type=a.MIXIN_RULE:e.type=a.STYLE_RULE}let o=e.rules;if(o)for(let e,n=0,r=o.length;n<r&&(e=o[n]);n++)t(e,i);return e}(function(t){let e=new o;e.start=0,e.end=t.length;let i=e;for(let n=0,r=t.length;n<r;n++)if(t[n]===l){i.rules||(i.rules=[]);let t=i,e=t.rules[t.rules.length-1]||null;i=new o,i.start=n+1,i.parent=t,i.previous=e,t.rules.push(i)}else t[n]===h&&(i.end=n+1,i=i.parent||e);return e}(t=t.replace(c.comments,"").replace(c.port,"")),t)}function s(t,e,i=""){let n="";if(t.cssText||t.rules){let i=t.rules;if(i&&!function(t){let e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(d)}(i))for(let t,o=0,r=i.length;o<r&&(t=i[o]);o++)n=s(t,e,n);else n=e?t.cssText:function(t){return function(t){return t.replace(c.mixinApply,"").replace(c.varApply,"")}(t=function(t){return t.replace(c.customProp,"").replace(c.mixinProp,"")}(t))}(t.cssText),n=n.trim(),n&&(n="  "+n+"\n")}return n&&(t.selector&&(i+=t.selector+" "+l+"\n"),i+=n,t.selector&&(i+=h+"\n\n")),i}const a={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},l="{",h="}",c={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},d="--",u="@media",p="@";var f=i(13);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const m=new Set,_="shady-unscoped";function g(t){const e=t.textContent;if(!m.has(e)){m.add(e);const i=t.cloneNode(!0);document.head.appendChild(i)}}function v(t){return t.hasAttribute(_)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function y(t,e){return t?("string"==typeof t&&(t=r(t)),e&&w(t,e),s(t,n.c)):""}function b(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=r(t.textContent)),t.__cssRules||null}function w(t,e,i,n){if(!t)return;let o=!1,r=t.type;if(n&&r===a.MEDIA_RULE){let e=t.selector.match(f.a);e&&(window.matchMedia(e[1]).matches||(o=!0))}r===a.STYLE_RULE?e(t):i&&r===a.KEYFRAMES_RULE?i(t):r===a.MIXIN_RULE&&(o=!0);let s=t.rules;if(s&&!o)for(let t,o=0,r=s.length;o<r&&(t=s[o]);o++)w(t,e,i,n)}function x(t,e){let i=0;for(let n=e,o=t.length;n<o;n++)if("("===t[n])i++;else if(")"===t[n]&&0==--i)return n;return-1}window.ShadyDOM&&window.ShadyDOM.wrap;const L="css-build";function C(t){if(void 0!==n.a)return n.a;if(void 0===t.__cssBuild){const e=t.getAttribute(L);if(e)t.__cssBuild=e;else{const e=function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if(t[0]===L)return t[1]}return""}(t);""!==e&&function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}(t),t.__cssBuild=e}}return t.__cssBuild||""}function z(t){return""!==C(t)}var M=i(18);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const S=/;\s*/m,P=/^\s*(initial)|(inherit)\s*$/,k=/\s*!important/,T="_-_";class E{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let O=null;class A{constructor(){this._currentElement=null,this._measureElement=null,this._map=new E}detectMixin(t){return Object(M.a)(t)}gatherStyles(t){const e=function(t){const e=[],i=t.querySelectorAll("style");for(let t=0;t<i.length;t++){const o=i[t];v(o)?n.d||(g(o),o.parentNode.removeChild(o)):(e.push(o.textContent),o.parentNode.removeChild(o))}return e.join("").trim()}(t.content);if(e){const i=document.createElement("style");return i.textContent=e,t.content.insertBefore(i,t.content.firstChild),i}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const i=t._gatheredStyle;return i?this.transformStyle(i,e):null}transformStyle(t,e=""){let i=b(t);return this.transformRules(i,e),t.textContent=y(i),i}transformCustomStyle(t){let e=b(t);return w(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=y(e),e}transformRules(t,e){this._currentElement=e,w(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(f.c,(t,i,n,o)=>this._produceCssProperties(t,i,n,o,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const i={};let n=!1;return w(e,e=>{n=n||e===t,n||e.selector===t.selector&&Object.assign(i,this._cssTextToMap(e.parsedCssText))}),i}_consumeCssProperties(t,e){let i=null;for(;i=f.b.exec(t);){let n=i[0],o=i[1],r=i.index,s=r+n.indexOf("@apply"),a=r+n.length,l=t.slice(0,s),h=t.slice(a),c=e?this._fallbacksFromPreviousRules(e):{};Object.assign(c,this._cssTextToMap(l));let d=this._atApplyToCssProperties(o,c);t=`${l}${d}${h}`,f.b.lastIndex=r+d.length}return t}_atApplyToCssProperties(t,e){t=t.replace(S,"");let i=[],n=this._map.get(t);if(n||(this._map.set(t,{}),n=this._map.get(t)),n){let o,r,s;this._currentElement&&(n.dependants[this._currentElement]=!0);const a=n.properties;for(o in a)s=e&&e[o],r=[o,": var(",t,T,o],s&&r.push(",",s.replace(k,"")),r.push(")"),k.test(a[o])&&r.push(" !important"),i.push(r.join(""))}return i.join("; ")}_replaceInitialOrInherit(t,e){let i=P.exec(e);return i&&(e=i[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let i,n,o=t.split(";"),r={};for(let t,s,a=0;a<o.length;a++)t=o[a],t&&(s=t.split(":"),s.length>1&&(i=s[0].trim(),n=s.slice(1).join(":"),e&&(n=this._replaceInitialOrInherit(i,n)),r[i]=n));return r}_invalidateMixinEntry(t){if(O)for(let e in t.dependants)e!==this._currentElement&&O(e)}_produceCssProperties(t,e,i,n,o){if(i&&function t(e,i){let n=e.indexOf("var(");if(-1===n)return i(e,"","","");let o=x(e,n+3),r=e.substring(n+4,o),s=e.substring(0,n),a=t(e.substring(o+1),i),l=r.indexOf(",");return-1===l?i(s,r.trim(),"",a):i(s,r.substring(0,l).trim(),r.substring(l+1).trim(),a)}(i,(t,e)=>{e&&this._map.get(e)&&(n=`@apply ${e};`)}),!n)return t;let r=this._consumeCssProperties(""+n,o),s=t.slice(0,t.indexOf("--")),a=this._cssTextToMap(r,!0),l=a,h=this._map.get(e),c=h&&h.properties;c?l=Object.assign(Object.create(c),a):this._map.set(e,l);let d,u,p=[],f=!1;for(d in l)u=a[d],void 0===u&&(u="initial"),!c||d in c||(f=!0),p.push(`${e}${T}${d}: ${u}`);return f&&this._invalidateMixinEntry(h),h&&(h.properties=l),i&&(s=`${t};${s}`),`${s}${p.join("; ")};`}}A.prototype.detectMixin=A.prototype.detectMixin,A.prototype.transformStyle=A.prototype.transformStyle,A.prototype.transformCustomStyle=A.prototype.transformCustomStyle,A.prototype.transformRules=A.prototype.transformRules,A.prototype.transformRule=A.prototype.transformRule,A.prototype.transformTemplate=A.prototype.transformTemplate,A.prototype._separator=T,Object.defineProperty(A.prototype,"invalidCallback",{get:()=>O,set(t){O=t}});var H=A;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var I={};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const N="_applyShimCurrentVersion",j="_applyShimNextVersion",R="_applyShimValidatingVersion",V=Promise.resolve();function B(t){let e=I[t];e&&function(t){t[N]=t[N]||0,t[R]=t[R]||0,t[j]=(t[j]||0)+1}(e)}function D(t){return t[N]===t[j]}function Z(t){return!D(t)&&t[R]===t[j]}function F(t){t[R]=t[j],t._validating||(t._validating=!0,V.then((function(){t[N]=t[j],t._validating=!1})))}i(34);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const U=new H;class q{constructor(){this.customStyleInterface=null,U.invalidCallback=B}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{U.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),z(t))return;I[e]=t;let i=U.transformTemplate(t,e);t._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let i=t[e],n=this.customStyleInterface.getStyleForCustomStyle(i);n&&U.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&Object(M.c)(t,e),t.shadowRoot){this.styleElement(t);let e=t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}}styleElement(t){this.ensure();let{is:e}=function(t){let e=t.localName,i="",n="";return e?e.indexOf("-")>-1?i=e:(n=e,i=t.getAttribute&&t.getAttribute("is")||""):(i=t.is,n=t.extends),{is:i,typeExtension:n}}(t),i=I[e];if((!i||!z(i))&&i&&!D(i)){Z(i)||(this.prepareTemplate(i,e),F(i));let n=t.shadowRoot;if(n){let t=n.querySelector("style");t&&(t.__cssRules=i._styleAst,t.textContent=y(i._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new q;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,i,n){t.flushCustomStyles(),t.prepareTemplate(e,i)},prepareTemplateStyles(t,e,i){window.ShadyCSS.prepareTemplate(t,e,i)},prepareTemplateDom(t,e){},styleSubtree(e,i){t.flushCustomStyles(),t.styleSubtree(e,i)},styleElement(e){t.flushCustomStyles(),t.styleElement(e)},styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},getComputedStyleValue:(t,e)=>Object(M.b)(t,e),flushCustomStyles(){t.flushCustomStyles()},nativeCss:n.c,nativeShadow:n.d,cssBuild:n.a,disableRuntime:n.b},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=U;var G=i(19),W=i(28),$=i(26),J=i(4);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const Y=/:host\(:dir\((ltr|rtl)\)\)/g,K=':host([dir="$1"])',X=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Q=':host([dir="$2"]) $1',tt=/:dir\((?:ltr|rtl)\)/,et=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),it=[];let nt=null,ot="";function rt(){ot=document.documentElement.getAttribute("dir")}function st(t){if(!t.__autoDirOptOut){t.setAttribute("dir",ot)}}function at(){rt(),ot=document.documentElement.getAttribute("dir");for(let t=0;t<it.length;t++)st(it[t])}const lt=Object(J.a)(t=>{et||nt||(rt(),nt=new MutationObserver(at),nt.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=Object($.a)(t);class i extends e{static _processStyleText(t,i){return t=e._processStyleText.call(this,t,i),!et&&tt.test(t)&&(t=this._replaceDirInCssText(t),this.__activateDir=!0),t}static _replaceDirInCssText(t){let e=t;return e=e.replace(Y,K),e=e.replace(X,Q),e}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(nt&&nt.takeRecords().length&&at(),it.push(this),st(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const t=it.indexOf(this);t>-1&&it.splice(t,1)}}}return i.__activateDir=!1,i});i(3);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function ht(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?ht():window.addEventListener("DOMContentLoaded",ht);var ct=i(5),dt=i(25),ut=i(12),pt=i(6),ft=i(1),mt=i(0);
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const _t=window.ShadyDOM,gt=window.ShadyCSS;function vt(t,e){return Object(mt.a)(t).getRootNode()===e}i.d(e,"a",(function(){return bt}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let yt=window.ShadyCSS;const bt=Object(J.a)(t=>{const e=lt(Object(W.a)(Object(G.a)(t))),i={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class n extends e{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(t,e,i,n){e!==i&&(super.attributeChangedCallback(t,e,i,n),this.attributeChanged(t,e,i))}attributeChanged(t,e,i){}_initializeProperties(){let t=Object.getPrototypeOf(this);t.hasOwnProperty("__hasRegisterFinished")||(this._registered(),t.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,i){this._propertyToAttribute(t,e,i)}serializeValueToAttribute(t,e,i){this._valueToNodeAttribute(i||this,t,e)}extend(t,e){if(!t||!e)return t||e;let i=Object.getOwnPropertyNames(e);for(let n,o=0;o<i.length&&(n=i[o]);o++){let i=Object.getOwnPropertyDescriptor(e,n);i&&Object.defineProperty(t,n,i)}return t}mixin(t,e){for(let i in e)t[i]=e[i];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,i){i=i||{},e=null==e?{}:e;let n=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});n.detail=e;let o=i.node||this;return Object(mt.a)(o).dispatchEvent(n),n}listen(t,e,i){t=t||this;let n=this.__boundListeners||(this.__boundListeners=new WeakMap),o=n.get(t);o||(o={},n.set(t,o));let r=e+i;o[r]||(o[r]=this._addMethodEventListenerToNode(t,e,i,this))}unlisten(t,e,i){t=t||this;let n=this.__boundListeners&&this.__boundListeners.get(t),o=e+i,r=n&&n[o];r&&(this._removeEventListenerFromNode(t,e,r),n[o]=null)}setScrollDirection(t,e){Object(dt.c)(e||this,i[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){let t=Object(mt.a)(this).getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){const t=Object(ct.a)(this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Object(ct.a)(this).getEffectiveChildNodes()}queryDistributedElements(t){return Object(ct.a)(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let i,n=0;i=t[n];n++)i.nodeType!==Node.COMMENT_NODE&&e.push(i.textContent);return e.join("")}queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){let e=this.root.querySelector(t||"slot");return e?Object(ct.a)(e).getDistributedNodes():[]}getContentChildren(t){return this.getContentChildNodes(t).filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(t){return this!==t&&Object(mt.a)(this).contains(t)&&Object(mt.a)(this).getRootNode()===Object(mt.a)(t).getRootNode()}isLocalDescendant(t){return this.root===Object(mt.a)(t).getRootNode()}scopeSubtree(t,e=!1){return function(t,e=!1){if(!_t||!gt)return null;if(!_t.handlesDynamicScoping)return null;const i=gt.ScopingShim;if(!i)return null;const n=i.scopeForNode(t),o=Object(mt.a)(t).getRootNode(),r=t=>{if(!vt(t,o))return;const e=Array.from(_t.nativeMethods.querySelectorAll.call(t,"*"));e.push(t);for(let t=0;t<e.length;t++){const r=e[t];if(!vt(r,o))continue;const s=i.currentScopeForNode(r);s!==n&&(""!==s&&i.unscopeNode(r,s),i.scopeNode(r,n))}};if(r(t),e){const e=new MutationObserver(t=>{for(let e=0;e<t.length;e++){const i=t[e];for(let t=0;t<i.addedNodes.length;t++){const e=i.addedNodes[t];e.nodeType===Node.ELEMENT_NODE&&r(e)}}});return e.observe(t,{childList:!0,subtree:!0}),e}return null}(t,e)}getComputedStyleValue(t){return yt.getComputedStyleValue(this,t)}debounce(t,e,i){return this._debouncers=this._debouncers||{},this._debouncers[t]=ut.a.debounce(this._debouncers[t],i>0?pt.b.after(i):pt.a,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?pt.b.run(t.bind(this),e):~pt.a.run(t.bind(this))}cancelAsync(t){t<0?pt.a.cancel(~t):pt.b.cancel(t)}create(t,e){let i=document.createElement(t);if(e)if(i.setProperties)i.setProperties(e);else for(let t in e)i[t]=e[t];return i}elementMatches(t,e){return Object(ct.b)(e||this,t)}toggleAttribute(t,e){let i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(e=!i.hasAttribute(t)),e?(Object(mt.a)(i).setAttribute(t,""),!0):(Object(mt.a)(i).removeAttribute(t),!1)}toggleClass(t,e,i){i=i||this,1==arguments.length&&(e=!i.classList.contains(t)),e?i.classList.add(t):i.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,i,n){n=n||this,this.transform("translate3d("+t+","+e+","+i+")",n)}arrayDelete(t,e){let i;if(Array.isArray(t)){if(i=t.indexOf(e),i>=0)return t.splice(i,1)}else{if(i=Object(ft.a)(this,t).indexOf(e),i>=0)return this.splice(t,i,1)}return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return n.prototype.is="",n})},function(t,e,i){const n=i(45).EventEmitter;t.exports=new class extends n{constructor(){super(),this.setMaxListeners(1e4)}}},function(t,e,i){"use strict";i.d(e,"c",(function(){return u})),i.d(e,"b",(function(){return p})),i.d(e,"a",(function(){return m}));var n=i(24),o=i(10);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r="link[rel=import][type~=css]",s="include",a="shady-unscoped";function l(t){return n.a.import(t)}function h(t){let e=t.body?t.body:t;const i=Object(o.b)(e.textContent,t.baseURI),n=document.createElement("style");return n.textContent=i,n}function c(t){const e=t.trim().split(/\s+/),i=[];for(let t=0;t<e.length;t++)i.push(...d(e[t]));return i}function d(t){const e=l(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...f(e));const i=e.querySelector("template");i&&t.push(...u(i,e.assetpath)),e._styles=t}return e._styles}function u(t,e){if(!t._styles){const i=[],n=t.content.querySelectorAll("style");for(let t=0;t<n.length;t++){let r=n[t],a=r.getAttribute(s);a&&i.push(...c(a).filter((function(t,e,i){return i.indexOf(t)===e}))),e&&(r.textContent=Object(o.b)(r.textContent,e)),i.push(r)}t._styles=i}return t._styles}function p(t){let e=l(t);return e?f(e):[]}function f(t){const e=[],i=t.querySelectorAll(r);for(let t=0;t<i.length;t++){let n=i[t];if(n.import){const t=n.import,i=n.hasAttribute(a);if(i&&!t._unscopedStyle){const e=h(t);e.setAttribute(a,""),t._unscopedStyle=e}else t._style||(t._style=h(t));e.push(i?t._unscopedStyle:t._style)}}return e}function m(t){let e=t.trim().split(/\s+/),i="";for(let t=0;t<e.length;t++)i+=_(e[t]);return i}function _(t){let e=l(t);if(e&&void 0===e._cssText){let t=g(e),i=e.querySelector("template");i&&(t+=function(t,e){let i="";const n=u(t,e);for(let t=0;t<n.length;t++){let e=n[t];e.parentNode&&e.parentNode.removeChild(e),i+=e.textContent}return i}(i,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function g(t){let e="",i=f(t);for(let t=0;t<i.length;t++)e+=i[t].textContent;return e}},function(t,e,i){"use strict";i.d(e,"a",(function(){return h}));i(3);var n=i(10),o=i(2);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let r={},s={};function a(t,e){r[t]=s[t.toLowerCase()]=e}function l(t){return r[t]||s[t.toLowerCase()]}class h extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let i=l(t);return i&&e?i.querySelector(e):i}return null}attributeChangedCallback(t,e,i,n){e!==i&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Object(n.c)(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Object(n.a)(e)}return this.__assetpath}register(t){if(t=t||this.id){if(o.g&&void 0!==l(t))throw a(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,a(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}h.prototype.modules=r,customElements.define("dom-module",h)},function(t,e,i){"use strict";i.d(e,"a",(function(){return N})),i.d(e,"b",(function(){return j})),i.d(e,"c",(function(){return V}));i(3);var n=i(6),o=i(12),r=i(2),s=i(0);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let a="string"==typeof document.head.style.touchAction,l="__polymerGestures",h="__polymerGesturesHandled",c="__polymerGesturesTouchAction",d=25,u=5,p=2500,f=["mousedown","mousemove","mouseup","click"],m=[0,1,4,2],_=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function g(t){return f.indexOf(t)>-1}let v=!1;function y(t){if(!g(t)&&"touchend"!==t)return a&&v&&r.d?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){v=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let b=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const w=[],x={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},L={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function C(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let i=t.getRootNode();if(t.id){let n=i.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<n.length;t++)e.push(n[t])}}return e}let z=function(t){let e=t.sourceCapabilities;var i;if((!e||e.firesTouchEvents)&&(t[h]={skip:!0},"click"===t.type)){let e=!1,n=E(t);for(let t=0;t<n.length;t++){if(n[t].nodeType===Node.ELEMENT_NODE)if("label"===n[t].localName)w.push(n[t]);else if(i=n[t],x[i.localName]){let i=C(n[t]);for(let t=0;t<i.length;t++)e=e||w.indexOf(i[t])>-1}if(n[t]===P.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function M(t){let e=b?["click"]:f;for(let i,n=0;n<e.length;n++)i=e[n],t?(w.length=0,document.addEventListener(i,z,!0)):document.removeEventListener(i,z,!0)}function S(t){let e=t.type;if(!g(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!_&&(e=m[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let P={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function k(t,e,i){t.movefn=e,t.upfn=i,document.addEventListener("mousemove",e),document.addEventListener("mouseup",i)}function T(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}r.b&&document.addEventListener("touchend",(function(t){if(!r.b)return;P.mouse.mouseIgnoreJob||M(!0),P.mouse.target=E(t)[0],P.mouse.mouseIgnoreJob=o.a.debounce(P.mouse.mouseIgnoreJob,n.b.after(p),(function(){M(),P.mouse.target=null,P.mouse.mouseIgnoreJob=null}))}),!!v&&{passive:!0});const E=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],O={},A=[];function H(t){const e=E(t);return e.length>0?e[0]:t.target}function I(t){let e,i=t.type,n=t.currentTarget[l];if(!n)return;let o=n[i];if(o){if(!t[h]&&(t[h]={},"touch"===i.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===i&&1===t.touches.length&&(P.touch.id=e.identifier),P.touch.id!==e.identifier)return;a||"touchstart"!==i&&"touchmove"!==i||function(t){let e=t.changedTouches[0],i=t.type;if("touchstart"===i)P.touch.x=e.clientX,P.touch.y=e.clientY,P.touch.scrollDecided=!1;else if("touchmove"===i){if(P.touch.scrollDecided)return;P.touch.scrollDecided=!0;let i=function(t){let e="auto",i=E(t);for(let t,n=0;n<i.length;n++)if(t=i[n],t[c]){e=t[c];break}return e}(t),n=!1,o=Math.abs(P.touch.x-e.clientX),r=Math.abs(P.touch.y-e.clientY);t.cancelable&&("none"===i?n=!0:"pan-x"===i?n=r>o:"pan-y"===i&&(n=o>r)),n?t.preventDefault():D("track")}}(t)}if(e=t[h],!e.skip){for(let i,n=0;n<A.length;n++)i=A[n],o[i.name]&&!e[i.name]&&i.flow&&i.flow.start.indexOf(t.type)>-1&&i.reset&&i.reset();for(let n,r=0;r<A.length;r++)n=A[r],o[n.name]&&!e[n.name]&&(e[n.name]=!0,n[i](t))}}}function N(t,e,i){return!!O[e]&&(function(t,e,i){let n=O[e],o=n.deps,r=n.name,s=t[l];s||(t[l]=s={});for(let e,i,n=0;n<o.length;n++)e=o[n],b&&g(e)&&"click"!==e||(i=s[e],i||(s[e]=i={_count:0}),0===i._count&&t.addEventListener(e,I,y(e)),i[r]=(i[r]||0)+1,i._count=(i._count||0)+1);t.addEventListener(e,i),n.touchAction&&V(t,n.touchAction)}(t,e,i),!0)}function j(t,e,i){return!!O[e]&&(function(t,e,i){let n=O[e],o=n.deps,r=n.name,s=t[l];if(s)for(let e,i,n=0;n<o.length;n++)e=o[n],i=s[e],i&&i[r]&&(i[r]=(i[r]||1)-1,i._count=(i._count||1)-1,0===i._count&&t.removeEventListener(e,I,y(e)));t.removeEventListener(e,i)}(t,e,i),!0)}function R(t){A.push(t);for(let e=0;e<t.emits.length;e++)O[t.emits[e]]=t}function V(t,e){a&&t instanceof HTMLElement&&n.a.run(()=>{t.style.touchAction=e}),t[c]=e}function B(t,e,i){let n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=i,Object(s.a)(t).dispatchEvent(n),n.defaultPrevented){let t=i.preventer||i.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function D(t){let e=function(t){for(let e,i=0;i<A.length;i++){e=A[i];for(let i,n=0;n<e.emits.length;n++)if(i=e.emits[n],i===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function Z(t,e,i,n){e&&B(e,t,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:n,prevent:function(t){return D(t)}})}function F(t,e,i){if(t.prevent)return!1;if(t.started)return!0;let n=Math.abs(t.x-e),o=Math.abs(t.y-i);return n>=u||o>=u}function U(t,e,i){if(!e)return;let n,o=t.moves[t.moves.length-2],r=t.moves[t.moves.length-1],s=r.x-t.x,a=r.y-t.y,l=0;o&&(n=r.x-o.x,l=r.y-o.y),B(e,"track",{state:t.state,x:i.clientX,y:i.clientY,dx:s,dy:a,ddx:n,ddy:l,sourceEvent:i,hover:function(){return function(t,e){let i=document.elementFromPoint(t,e),n=i;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let o=n;if(n=n.shadowRoot.elementFromPoint(t,e),o===n)break;n&&(i=n)}return i}(i.clientX,i.clientY)}})}function q(t,e,i){let n=Math.abs(e.clientX-t.x),o=Math.abs(e.clientY-t.y),r=H(i||e);!r||L[r.localName]&&r.hasAttribute("disabled")||(isNaN(n)||isNaN(o)||n<=d&&o<=d||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=H(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let i=e.getBoundingClientRect(),n=t.pageX,o=t.pageY;return!(n>=i.left&&n<=i.right&&o>=i.top&&o<=i.bottom)}return!1}(e))&&(t.prevent||B(r,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i}))}R({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){T(this.info)},mousedown:function(t){if(!S(t))return;let e=H(t),i=this;k(this.info,(function(t){S(t)||(Z("up",e,t),T(i.info))}),(function(t){S(t)&&Z("up",e,t),T(i.info)})),Z("down",e,t)},touchstart:function(t){Z("down",H(t),t.changedTouches[0],t)},touchend:function(t){Z("up",H(t),t.changedTouches[0],t)}}),R({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,T(this.info)},mousedown:function(t){if(!S(t))return;let e=H(t),i=this,n=function(t){let n=t.clientX,o=t.clientY;F(i.info,n,o)&&(i.info.state=i.info.started?"mouseup"===t.type?"end":"track":"start","start"===i.info.state&&D("tap"),i.info.addMove({x:n,y:o}),S(t)||(i.info.state="end",T(i.info)),e&&U(i.info,e,t),i.info.started=!0)};k(this.info,n,(function(t){i.info.started&&n(t),T(i.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=H(t),i=t.changedTouches[0],n=i.clientX,o=i.clientY;F(this.info,n,o)&&("start"===this.info.state&&D("tap"),this.info.addMove({x:n,y:o}),U(this.info,e,i),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=H(t),i=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),U(this.info,e,i))}}),R({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){S(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){S(t)&&q(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){q(this.info,t.changedTouches[0],t)}})},function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));i(3);var n=i(4),o=i(14),r=i(27);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s={};let a=HTMLElement.prototype;for(;a;){let t=Object.getOwnPropertyNames(a);for(let e=0;e<t.length;e++)s[t[e]]=!0;a=Object.getPrototypeOf(a)}const l=Object(n.a)(t=>{const e=Object(r.a)(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(Object(o.b)(t[e]))}static attributeNameForProperty(t){return Object(o.a)(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const i=this;i.hasAttribute(t)||this._valueToNodeAttribute(i,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let i;switch(e){case Object:try{i=JSON.parse(t)}catch(e){i=t}break;case Array:try{i=JSON.parse(t)}catch(e){i=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:i=isNaN(t)?String(t):Number(t),i=new Date(i);break;default:i=super._deserializeValue(t,e)}return i}_definePropertyAccessor(t,e){!function(t,e){if(!s[e]){let i=t[e];void 0!==i&&(t.__data?t._setPendingProperty(e,i):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=i))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}})},function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));i(3);var n=i(4),o=i(6),r=i(0);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s=o.a,a=Object(n.a)(t=>{return class extends t{static createProperties(t){const e=this.prototype;for(let i in t)i in e||e._createPropertyAccessor(i)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[t]){const e=this.constructor.attributeNameForProperty(t);this.__dataAttributes[e]=t}}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this._getProperty(t)},set:e?function(){}:function(e){this._setProperty(t,e)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,i){let n=this.__data[t],o=this._shouldPropertyChange(t,e,n);return o&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||t in this.__dataOld||(this.__dataOld[t]=n),this.__data[t]=e,this.__dataPending[t]=e),o}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,s.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const t=this.__data,e=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(t,e,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,i))}_shouldPropertiesChange(t,e,i){return Boolean(e)}_propertiesChanged(t,e,i){}_shouldPropertyChange(t,e,i){return i!==e&&(i==i||e==e)}attributeChangedCallback(t,e,i,n){e!==i&&this._attributeToProperty(t,i),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,i,n)}_attributeToProperty(t,e,i){if(!this.__serializing){const n=this.__dataAttributes,o=n&&n[t]||t;this[o]=this._deserializeValue(e,i||this.constructor.typeForProperty(o))}}_propertyToAttribute(t,e,i){this.__serializing=!0,i=arguments.length<3?this[t]:i,this._valueToNodeAttribute(this,i,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,i){const n=this._serializeValue(e);"class"!==i&&"name"!==i&&"slot"!==i||(t=Object(r.a)(t)),void 0===n?t.removeAttribute(i):t.setAttribute(i,n)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}})},function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i(3);var n=i(4),o=i(25);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=Object(n.a)(t=>{return class extends t{_addEventListenerToNode(t,e,i){Object(o.a)(t,e,i)||super._addEventListenerToNode(t,e,i)}_removeEventListenerFromNode(t,e,i){Object(o.b)(t,e,i)||super._removeEventListenerFromNode(t,e,i)}}})},function(t,e,i){"use strict";i.d(e,"a",(function(){return h}));i(3);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function n(t,e,i){return{index:t,removed:e,addedCount:i}}const o=0,r=1,s=2,a=3;function l(t,e,i,l,h,d){let u,p=0,f=0,m=Math.min(i-e,d-h);if(0==e&&0==h&&(p=function(t,e,i){for(let n=0;n<i;n++)if(!c(t[n],e[n]))return n;return i}(t,l,m)),i==t.length&&d==l.length&&(f=function(t,e,i){let n=t.length,o=e.length,r=0;for(;r<i&&c(t[--n],e[--o]);)r++;return r}(t,l,m-p)),h+=p,d-=f,(i-=f)-(e+=p)==0&&d-h==0)return[];if(e==i){for(u=n(e,[],0);h<d;)u.removed.push(l[h++]);return[u]}if(h==d)return[n(e,[],i-e)];let _=function(t){let e=t.length-1,i=t[0].length-1,n=t[e][i],l=[];for(;e>0||i>0;){if(0==e){l.push(s),i--;continue}if(0==i){l.push(a),e--;continue}let h,c=t[e-1][i-1],d=t[e-1][i],u=t[e][i-1];h=d<u?d<c?d:c:u<c?u:c,h==c?(c==n?l.push(o):(l.push(r),n=c),e--,i--):h==d?(l.push(a),e--,n=d):(l.push(s),i--,n=u)}return l.reverse(),l}(function(t,e,i,n,o,r){let s=r-o+1,a=i-e+1,l=new Array(s);for(let t=0;t<s;t++)l[t]=new Array(a),l[t][0]=t;for(let t=0;t<a;t++)l[0][t]=t;for(let i=1;i<s;i++)for(let r=1;r<a;r++)if(c(t[e+r-1],n[o+i-1]))l[i][r]=l[i-1][r-1];else{let t=l[i-1][r]+1,e=l[i][r-1]+1;l[i][r]=t<e?t:e}return l}(t,e,i,l,h,d));u=void 0;let g=[],v=e,y=h;for(let t=0;t<_.length;t++)switch(_[t]){case o:u&&(g.push(u),u=void 0),v++,y++;break;case r:u||(u=n(v,[],0)),u.addedCount++,v++,u.removed.push(l[y]),y++;break;case s:u||(u=n(v,[],0)),u.addedCount++,v++;break;case a:u||(u=n(v,[],0)),u.removed.push(l[y]),y++}return u&&g.push(u),g}function h(t,e){return l(t,0,t.length,e,0,e.length)}function c(t,e){return t===e}},function(t,e,i){e.markdown=i(64),e.parse=e.markdown.toHTML},function(t,e){t.exports=new class{constructor(){this.models={}}registerModel(t,e){if(this.models[t])throw new Error(`A model has already been registered with name: ${t}`);this.models[t]=e}getModel(t){if(!this.models[t])throw new Error(`No model has been registered with name: ${t}`);return this.models[t]}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var o=(s=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r=n.sources.map((function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"}));return[i].concat(r).concat([o]).join("\n")}var s;return[i].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i})).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(n[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),e.push(s))}},e}},function(t,e){t.exports=t=>(class extends t{constructor(){super(),this._injectModel("AppStateModel")}ready(){super.ready(),this._onAppStateUpdate&&this._getAppState().then(t=>this._onAppStateUpdate(t))}_setAppState(t){return this.AppStateModel.set(t)}_getAppState(){return this.AppStateModel.get()}_setWindowLocation(t){this.AppStateModel.setLocation(t)}})},function(t,e,i){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n,o=null,r=window.HTMLImports&&window.HTMLImports.whenReady||null;function s(t){requestAnimationFrame((function(){r?r(t):(o||(o=new Promise(t=>{n=t}),"complete"===document.readyState?n():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&n()})),o.then((function(){t&&t()})))}))}i.d(e,"a",(function(){return d}));const a="__seenByShadyCSS",l="__shadyCSSCachedStyle";let h=null,c=null;class d{constructor(){this.customStyles=[],this.enqueued=!1,s(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&c&&(this.enqueued=!0,s(c))}addCustomStyle(t){t[a]||(t[a]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[l])return t[l];let e;return e=t.getStyle?t.getStyle():t,e}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const i=t[e];if(i[l])continue;const n=this.getStyleForCustomStyle(i);if(n){const t=n.__appliedElement||n;h&&h(t),i[l]=t}}return t}}d.prototype.addCustomStyle=d.prototype.addCustomStyle,d.prototype.getStyleForCustomStyle=d.prototype.getStyleForCustomStyle,d.prototype.processStyles=d.prototype.processStyles,Object.defineProperties(d.prototype,{transformCallback:{get:()=>h,set(t){h=t}},validateCallback:{get:()=>c,set(t){let e=!1;c||(e=!0),c=t,e&&this.enqueueDocumentValidation()}}})},function(t,e,i){i(49),t.exports=self.fetch.bind(self)},function(t,e,i){t.exports={AppStateInterface:i(33),AppStateModel:i(56),AppStateStore:i(57),"app-route":i(79)}},function(t,e,i){const{BaseStore:n}=i(15);t.exports=new class extends n{constructor(){super(),this.data={},this.events={GRAPH_UPDATE:"moment-graph-update"}}onGraphLoading(t,e){this._setGraphState({id:t,state:this.STATE.LOADING,request:e})}onGraphLoaded(t,e){this._setGraphState({id:t,state:this.STATE.LOADED,payload:e})}onGraphError(t,e){this._setGraphState({id:t,state:this.STATE.ERROR,error:e})}_setGraphState(t){this.data[t.id]=t,this.emit(this.events.GRAPH_UPDATE,t)}}},function(t,e,i){t.exports={AppStateModel:i(55),MomentModel:i(62)}},function(t,e,i){"use strict";var n=i(58),o=i(59),r=i(60);function s(t,e){return e.encode?e.strict?n(t):encodeURIComponent(t):t}function a(t){var e=t.indexOf("?");return-1===e?"":t.slice(e+1)}function l(t,e){var i=function(t){var e;switch(t.arrayFormat){case"index":return function(t,i,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=i):n[t]=i};case"bracket":return function(t,i,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],i):n[t]=[i]:n[t]=i};default:return function(t,e,i){void 0!==i[t]?i[t]=[].concat(i[t],e):i[t]=e}}}(e=o({arrayFormat:"none"},e)),n=Object.create(null);return"string"!=typeof t?n:(t=t.trim().replace(/^[?#&]/,""))?(t.split("&").forEach((function(t){var e=t.replace(/\+/g," ").split("="),o=e.shift(),s=e.length>0?e.join("="):void 0;s=void 0===s?null:r(s),i(r(o),s,n)})),Object.keys(n).sort().reduce((function(t,e){var i=n[e];return Boolean(i)&&"object"==typeof i&&!Array.isArray(i)?t[e]=function t(e){return Array.isArray(e)?e.sort():"object"==typeof e?t(Object.keys(e)).sort((function(t,e){return Number(t)-Number(e)})).map((function(t){return e[t]})):e}(i):t[e]=i,t}),Object.create(null))):n}e.extract=a,e.parse=l,e.stringify=function(t,e){!1===(e=o({encode:!0,strict:!0,arrayFormat:"none"},e)).sort&&(e.sort=function(){});var i=function(t){switch(t.arrayFormat){case"index":return function(e,i,n){return null===i?[s(e,t),"[",n,"]"].join(""):[s(e,t),"[",s(n,t),"]=",s(i,t)].join("")};case"bracket":return function(e,i){return null===i?s(e,t):[s(e,t),"[]=",s(i,t)].join("")};default:return function(e,i){return null===i?s(e,t):[s(e,t),"=",s(i,t)].join("")}}}(e);return t?Object.keys(t).sort(e.sort).map((function(n){var o=t[n];if(void 0===o)return"";if(null===o)return s(n,e);if(Array.isArray(o)){var r=[];return o.slice().forEach((function(t){void 0!==t&&r.push(i(n,t,r.length))})),r.join("&")}return s(n,e)+"="+s(o,e)})).filter((function(t){return t.length>0})).join("&"):""},e.parseUrl=function(t,e){return{url:t.split("?")[0]||"",query:l(a(t),e)}}},function(t,e,i){var n=i(69);t.exports="string"==typeof n?n:n.toString()},function(t,e,i){var n=i(74);t.exports="string"==typeof n?n:n.toString()},function(t,e,i){var n=i(75);t.exports="string"==typeof n?n:n.toString()},function(t,e){let i=document.createElement("style");document.head.appendChild(i),i.innerHTML='\nhtml {\n  --app-color-scarlet : #EA534B;\n  --app-color-gold : #F2AC30;\n  --app-color-vine : #1EA866;\n  --app-color-rose : #ED77A5;\n  --app-color-grape : #BA5B93;\n  --app-color-interface-blue : #18779B;\n  --app-color-secondary-blue : #015E80;\n  --app-color-cluster-blue : var(--app-color-secondary-blue);\n  --app-color-cluster-blue-alpha : rgba(1, 94, 128, 0.5);\n  --app-color-smoke : #F3F2F0;\n  --app-color-pewter : #D4DADC;\n  --app-color-charcoal : #333333;\n  --app-color-black : #000000;\n  --app-color-white : #FFFFFF;\n\n  \n  --app-primary-color   : var(--app-color-interface-blue);\n  --app-background-color : var(--app-color-white);\n  --app-text-color      : var(--app-color-black);\n  --app-max-width               : 1200px;\n  --app-max-text-width          : 650px;\n  --app-font-size               : 14px;\n  --app-font-size-sm            : 13px;\n  --app-font-weight             : 400;\n  --app-font-weight-light       : 200;\n  --app-font-weight-heavy       : 700;\n  --app-layout-sm               : 768px;\n  --app-grid-cell-width         : 250px;\n  --app-default-outline         : 2px dotted var(--default-secondary-color);\n}\n\nbody, html {\n  /* @apply --paper-font-common-base; */\n  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size        : var(--app-font-size);\n  font-weight      : var(--app-font-weight);\n  line-height      : calc(var(--app-font-size) * 1.625);\n  margin           : 0;\n  padding          : 0;\n  background-color : var(--app-background-color);\n  color            : var(--app-text-color);\n  max-width        : 100vw;\n  overflow: hidden;\n}\n'},function(t,e,i){const n=i(22),o=i(31);t.exports=class{get EventBus(){return n}register(t){t||console.warn("Name not passed to register().  This will fail in IE, cause, you know, IE.");var e=t||this.__proto__.constructor.name;o.registerModel(e,this)}emit(t,e){setTimeout(()=>{n.emit(t,e)},0)}}},function(t,e,i){"use strict";var n,o="object"==typeof Reflect?Reflect:null,r=o&&"function"==typeof o.apply?o.apply:function(t,e,i){return Function.prototype.apply.call(t,e,i)};n=o&&"function"==typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var s=Number.isNaN||function(t){return t!=t};function a(){a.init.call(this)}t.exports=a,a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var l=10;function h(t){return void 0===t._maxListeners?a.defaultMaxListeners:t._maxListeners}function c(t,e,i,n){var o,r,s,a;if("function"!=typeof i)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof i);if(void 0===(r=t._events)?(r=t._events=Object.create(null),t._eventsCount=0):(void 0!==r.newListener&&(t.emit("newListener",e,i.listener?i.listener:i),r=t._events),s=r[e]),void 0===s)s=r[e]=i,++t._eventsCount;else if("function"==typeof s?s=r[e]=n?[i,s]:[s,i]:n?s.unshift(i):s.push(i),(o=h(t))>0&&s.length>o&&!s.warned){s.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=t,l.type=e,l.count=s.length,a=l,console&&console.warn&&console.warn(a)}return t}function d(){for(var t=[],e=0;e<arguments.length;e++)t.push(arguments[e]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,r(this.listener,this.target,t))}function u(t,e,i){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:i},o=d.bind(n);return o.listener=i,n.wrapFn=o,o}function p(t,e,i){var n=t._events;if(void 0===n)return[];var o=n[e];return void 0===o?[]:"function"==typeof o?i?[o.listener||o]:[o]:i?function(t){for(var e=new Array(t.length),i=0;i<e.length;++i)e[i]=t[i].listener||t[i];return e}(o):m(o,o.length)}function f(t){var e=this._events;if(void 0!==e){var i=e[t];if("function"==typeof i)return 1;if(void 0!==i)return i.length}return 0}function m(t,e){for(var i=new Array(e),n=0;n<e;++n)i[n]=t[n];return i}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return l},set:function(t){if("number"!=typeof t||t<0||s(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");l=t}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||s(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},a.prototype.getMaxListeners=function(){return h(this)},a.prototype.emit=function(t){for(var e=[],i=1;i<arguments.length;i++)e.push(arguments[i]);var n="error"===t,o=this._events;if(void 0!==o)n=n&&void 0===o.error;else if(!n)return!1;if(n){var s;if(e.length>0&&(s=e[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var l=o[t];if(void 0===l)return!1;if("function"==typeof l)r(l,this,e);else{var h=l.length,c=m(l,h);for(i=0;i<h;++i)r(c[i],this,e)}return!0},a.prototype.addListener=function(t,e){return c(this,t,e,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(t,e){return c(this,t,e,!0)},a.prototype.once=function(t,e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);return this.on(t,u(this,t,e)),this},a.prototype.prependOnceListener=function(t,e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);return this.prependListener(t,u(this,t,e)),this},a.prototype.removeListener=function(t,e){var i,n,o,r,s;if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);if(void 0===(n=this._events))return this;if(void 0===(i=n[t]))return this;if(i===e||i.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete n[t],n.removeListener&&this.emit("removeListener",t,i.listener||e));else if("function"!=typeof i){for(o=-1,r=i.length-1;r>=0;r--)if(i[r]===e||i[r].listener===e){s=i[r].listener,o=r;break}if(o<0)return this;0===o?i.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(i,o),1===i.length&&(n[t]=i[0]),void 0!==n.removeListener&&this.emit("removeListener",t,s||e)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(t){var e,i,n;if(void 0===(i=this._events))return this;if(void 0===i.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==i[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete i[t]),this;if(0===arguments.length){var o,r=Object.keys(i);for(n=0;n<r.length;++n)"removeListener"!==(o=r[n])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=i[t]))this.removeListener(t,e);else if(void 0!==e)for(n=e.length-1;n>=0;n--)this.removeListener(t,e[n]);return this},a.prototype.listeners=function(t){return p(this,t,!0)},a.prototype.rawListeners=function(t){return p(this,t,!1)},a.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):f.call(t,e)},a.prototype.listenerCount=f,a.prototype.eventNames=function(){return this._eventsCount>0?n(this._events):[]}},function(t,e,i){const n=i(22),o=i(47);t.exports=class{constructor(){this.STATE={INIT:"init",LOADING:"loading",LOADED:"loaded",ERROR:"error",SAVING:"saving",SAVE_ERROR:"save-error",SAVE_SUCCESS:"save-success",DELETING:"deleting",DELETE_ERROR:"delete-error",DELETED:"deleted"}}get EventBus(){return n}emit(t,e){setTimeout(()=>{n.emit(t,e)},0)}stateChanged(t,e){return!(t||!e)||(!(!t||e)||!(!t&&!e)&&(t.state!==e.state||!o(t,e)))}}},function(t,e,i){"use strict";var n=Array.isArray,o=Object.keys,r=Object.prototype.hasOwnProperty;t.exports=function t(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){var s,a,l,h=n(e),c=n(i);if(h&&c){if((a=e.length)!=i.length)return!1;for(s=a;0!=s--;)if(!t(e[s],i[s]))return!1;return!0}if(h!=c)return!1;var d=e instanceof Date,u=i instanceof Date;if(d!=u)return!1;if(d&&u)return e.getTime()==i.getTime();var p=e instanceof RegExp,f=i instanceof RegExp;if(p!=f)return!1;if(p&&f)return e.toString()==i.toString();var m=o(e);if((a=m.length)!==o(i).length)return!1;for(s=a;0!=s--;)if(!r.call(i,m[s]))return!1;for(s=a;0!=s--;)if(!t(e[l=m[s]],i[l]))return!1;return!0}return e!=e&&i!=i}},function(t,e,i){const n=i(35);t.exports=class{constructor(){this.rootUrl="","undefined"!=typeof window&&(this.rootUrl=window.location.protocol+"//"+window.location.host),this.ERROR_MESSAGES={REQUEST:"Request Error",STATUS_CODE:"Invalid status code",JSON:"Invalid JSON response",APPLICATION_ERROR:"Application Error"}}async request(t){if(!t.store){if(!this.store)return console.error(new Error("No store provided"));t.store=this.store}if(t.fetchOptions||(t.fetchOptions={}),t.fetchOptions.credentials||(t.fetchOptions.credentials="include"),t.json&&t.fetchOptions&&t.fetchOptions.body&&"object"==typeof t.fetchOptions.body&&(t.fetchOptions.body=JSON.stringify(t.fetchOptions.body),t.fetchOptions.headers||(t.fetchOptions.headers={}),t.fetchOptions.headers["Content-Type"]="application/json"),t.qs){let i=[];for(var e in t.qs)i.push(`${e}=${t.qs[e]}`);t.url+="?"+i.join("&")}if(t.checkCached){var i=t.checkCached();if(this.isLoaded(i))return i;if(this.isLoading(i)){if(!i.request)throw new Error("checkCached set but no request object found",i);return i.request}}let n=this._request(t);return t.onLoading&&t.onLoading(n),await n}_request(t){return t.fetchOptions||(t.fetchOptions={}),new Promise(async(e,i)=>{var o=null;try{o=await n(t.url,t.fetchOptions)}catch(e){return this._handleError(t,i,{error:!0,details:e,response:o,message:this.ERROR_MESSAGES.REQUEST})}if(o.status<200||o.status>299)return this._handleError(t,i,{error:!0,response:o,message:this.ERROR_MESSAGES.STATUS_CODE});if(o.headers.has("Content-Type")&&o.headers.get("Content-Type").match(/application\/json/i)){var r=null;try{r=await o.json()}catch(e){return this._handleError(t,i,{error:!0,details:e,response:o,message:this.ERROR_MESSAGES.JSON})}if(r.error)return this._handleError(t,i,{error:!0,details:r,response:o,message:this.ERROR_MESSAGES.APPLICATION_ERROR})}else r=await o.text();t.onLoad&&t.onLoad({response:o,body:r}),e({response:o,body:r})})}async _handleError(t,e,i){if(i.response&&!i.payload)if(i.response.headers.has("Content-Type")&&i.response.headers.get("Content-Type").match(/application\/json/i))try{i.payload=await i.response.json()}catch(t){i.payload={}}else i.payload=await i.response.text();t.onError&&t.onError(i),e(i)}isLoaded(t){return this.store?!(!t||t.state!==this.store.STATE.LOADED):console.warn("Checking LOADED state but no store set for service")}isLoading(t){return this.store?!(!t||t.state!==this.store.STATE.LOADING):console.warn("Checking LOADED state but no store set for service")}}},function(t,e,i){"use strict";i.r(e),i.d(e,"Headers",(function(){return h})),i.d(e,"Request",(function(){return _})),i.d(e,"Response",(function(){return v})),i.d(e,"DOMException",(function(){return b})),i.d(e,"fetch",(function(){return w}));var n={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(n.arrayBuffer)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],r=ArrayBuffer.isView||function(t){return t&&o.indexOf(Object.prototype.toString.call(t))>-1};function s(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function a(t){return"string"!=typeof t&&(t=String(t)),t}function l(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n.iterable&&(e[Symbol.iterator]=function(){return e}),e}function h(t){this.map={},t instanceof h?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function c(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function d(t){return new Promise((function(e,i){t.onload=function(){e(t.result)},t.onerror=function(){i(t.error)}}))}function u(t){var e=new FileReader,i=d(e);return e.readAsArrayBuffer(t),i}function p(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:n.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:n.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():n.arrayBuffer&&n.blob&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=p(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||r(t))?this._bodyArrayBuffer=p(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n.blob&&(this.blob=function(){var t=c(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?c(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(u)}),this.text=function(){var t,e,i,n=c(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,i=d(e),e.readAsText(t),i;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),i=new Array(e.length),n=0;n<e.length;n++)i[n]=String.fromCharCode(e[n]);return i.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n.formData&&(this.formData=function(){return this.text().then(g)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(t,e){t=s(t),e=a(e);var i=this.map[t];this.map[t]=i?i+", "+e:e},h.prototype.delete=function(t){delete this.map[s(t)]},h.prototype.get=function(t){return t=s(t),this.has(t)?this.map[t]:null},h.prototype.has=function(t){return this.map.hasOwnProperty(s(t))},h.prototype.set=function(t,e){this.map[s(t)]=a(e)},h.prototype.forEach=function(t,e){for(var i in this.map)this.map.hasOwnProperty(i)&&t.call(e,this.map[i],i,this)},h.prototype.keys=function(){var t=[];return this.forEach((function(e,i){t.push(i)})),l(t)},h.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),l(t)},h.prototype.entries=function(){var t=[];return this.forEach((function(e,i){t.push([i,e])})),l(t)},n.iterable&&(h.prototype[Symbol.iterator]=h.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function _(t,e){var i,n,o=(e=e||{}).body;if(t instanceof _){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new h(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new h(e.headers)),this.method=(i=e.method||this.method||"GET",n=i.toUpperCase(),m.indexOf(n)>-1?n:i),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function g(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var i=t.split("="),n=i.shift().replace(/\+/g," "),o=i.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function v(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new h(e.headers),this.url=e.url||"",this._initBody(t)}_.prototype.clone=function(){return new _(this,{body:this._bodyInit})},f.call(_.prototype),f.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var y=[301,302,303,307,308];v.redirect=function(t,e){if(-1===y.indexOf(e))throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})};var b=self.DOMException;try{new b}catch(t){(b=function(t,e){this.message=t,this.name=e;var i=Error(t);this.stack=i.stack}).prototype=Object.create(Error.prototype),b.prototype.constructor=b}function w(t,e){return new Promise((function(i,o){var r=new _(t,e);if(r.signal&&r.signal.aborted)return o(new b("Aborted","AbortError"));var s=new XMLHttpRequest;function a(){s.abort()}s.onload=function(){var t,e,n={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new h,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var i=t.split(":"),n=i.shift().trim();if(n){var o=i.join(":").trim();e.append(n,o)}})),e)};n.url="responseURL"in s?s.responseURL:n.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;i(new v(o,n))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.onabort=function(){o(new b("Aborted","AbortError"))},s.open(r.method,r.url,!0),"include"===r.credentials?s.withCredentials=!0:"omit"===r.credentials&&(s.withCredentials=!1),"responseType"in s&&n.blob&&(s.responseType="blob"),r.headers.forEach((function(t,e){s.setRequestHeader(e,t)})),r.signal&&(r.signal.addEventListener("abort",a),s.onreadystatechange=function(){4===s.readyState&&r.signal.removeEventListener("abort",a)}),s.send(void 0===r._bodyInit?null:r._bodyInit)}))}w.polyfill=!0,self.fetch||(self.fetch=w,self.Headers=h,self.Request=_,self.Response=v)},function(t,e){class i{ready(){this.listening=!0}}"undefined"!=typeof window&&(window.BaseMixin=i),t.exports=i},function(t,e){class i{constructor(t){this.superclass=t}with(...t){return t.reduce((t,e)=>e(t),this.superclass)}}const n=t=>new i(t);"undefined"!=typeof window&&(window.Mixin=n),t.exports=n},function(t,e,i){const n=i(22),o=i(31),r=t=>(class extends t{static get properties(){return{listening:{type:Boolean,value:!0,observer:"_onListenUpdate"}}}set bind(t){this._bind=Object.assign(this.bind,t)}get bind(){return this._bind||(this._bind={}),this._bind}constructor(){super(),this.bind={},this._eb_handlers={},this._eb_handlersSet=!1,this._eb_unregisterOnDetach=!0,this._debounce_handlers={}}ready(){super.ready(),this._eb_init()}connectedCallback(){super.connectedCallback(),this._eb_init()}_eb_init(){if(!this._eb_handlersSet)for(var t in this._eb_handlersSet=!0,this._debugEventInterface&&console.log(this.nodeName,"ready and connected to DOM, attaching event listeners",this.bind),this.bind)this[this.bind[t]]?this._eb_init_fn(t):console.warn(`${this.nodeName} could not bind event ${t} to ${this.bind[t]}`)}_eb_init_fn(t){this[this.bind[t]]=this[this.bind[t]].bind(this),this._eb_handlers[t]=(...e)=>{this.listening?(this._debugEventInterface&&console.log(this.nodeName,"received event",t,", triggering function:",this.bind[t]),this[this.bind[t]].apply(this,e)):this._debugEventInterface&&console.warn(this.nodeName,"ignoring",t,"event, element not listening")},n.on(t,this._eb_handlers[t])}disconnectedCallback(){if(super.disconnectedCallback(),this._debugEventInterface&&console.log(this.nodeName,"disconnected from DOM, removing event listeners"),this._eb_unregisterOnDetach&&this._eb_handlersSet)for(var t in this._eb_handlersSet=!1,this.bind){if(!this[this.bind[t]])continue;let e=n.listenerCount(t);n.removeListener(t,this._eb_handlers[t]),n.listenerCount(t)!==e-1&&console.warn(this.nodeName,"On element detach, failed to remove event listener for: ",t),this._debugEventInterface&&console.log(this.nodeName,"removing event listener for:",t)}}EventBus(){return n}_injectModel(...t){t.forEach(t=>{"string"==typeof t?this._injectModelStr(t):this._bindModelObj(t)})}_injectModelStr(t){this[t]=o.getModel(t),this._bindModelObj(this[t])}_bindModelObj(t){t.events&&this._registerModelEvents(t.events),t.store&&t.store.events&&this._registerModelEvents(t.store.events)}_registerModelEvents(t){for(var e in t){var i=this._getMethodNameFromEvent(t[e]);this[i]?(this._debugEventInterface&&console.log(this.nodeName,"auto-bind:",i+" -> "+t[e],!0),this.bind[t[e]]=i):this._debugEventInterface&&console.log(this.nodeName,"auto-bind:",i+" -> "+t[e],!1)}}_getMethodNameFromEvent(t){return"_on"+t.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}emit(t,e){n.emit(t,e)}fire(t,e={}){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}debounce(t,e,i){this._debounce_handlers[t]&&clearTimeout(this._debounce_handlers[t]),this._debounce_handlers[t]=setTimeout(()=>{delete this._debounce_handlers[t],e()},i)}_onListenUpdate(){}});"undefined"!=typeof window&&(window.EventInterface=r),t.exports=r},function(t,e,i){const n=i(22),o=i(31),r=t=>(class extends t{static get properties(){return{listening:{type:Boolean}}}set bind(t){this._bind=Object.assign(this.bind,t)}get bind(){return this._bind||(this._bind={}),this._bind}constructor(){super(),this.bind={},this._eb_handlers={},this._eb_handlersSet=!1,this._eb_unregisterOnDetach=!0,this._debounce_handlers={},this.listening=!0}connectedCallback(){super.connectedCallback(),this._eb_init()}_eb_init(){if(!this._eb_handlersSet)for(var t in this._eb_handlersSet=!0,this._debugLitCorkUtils&&console.log(this.nodeName,"ready and connected to DOM, attaching event listeners",this.bind),this.bind)this[this.bind[t]]?this._eb_init_fn(t):console.warn(`${this.nodeName} could not bind event ${t} to ${this.bind[t]}`)}_eb_init_fn(t){this[this.bind[t]]=this[this.bind[t]].bind(this),this._eb_handlers[t]=(...e)=>{this.listening?(this._debugLitCorkUtils&&console.log(this.nodeName,"received event",t,", triggering function:",this.bind[t]),this[this.bind[t]].apply(this,e)):this._debugLitCorkUtils&&console.warn(this.nodeName,"ignoring",t,"event, element not listening")},n.on(t,this._eb_handlers[t])}disconnectedCallback(){if(super.disconnectedCallback(),this._debugLitCorkUtils&&console.log(this.nodeName,"disconnected from DOM, removing event listeners"),this._eb_unregisterOnDetach&&this._eb_handlersSet)for(var t in this._eb_handlersSet=!1,this.bind){if(!this[this.bind[t]])continue;let e=n.listenerCount(t);n.removeListener(t,this._eb_handlers[t]),n.listenerCount(t)!==e-1&&console.warn(this.nodeName,"On element detach, failed to remove event listener for: ",t),this._debugLitCorkUtils&&console.log(this.nodeName,"removing event listener for:",t)}}EventBus(){return n}_injectModel(...t){t.forEach(t=>{"string"==typeof t?this._injectModelStr(t):this._bindModelObj(t)})}_injectModelStr(t){this[t]=o.getModel(t),this._bindModelObj(this[t])}_bindModelObj(t){t.events&&this._registerModelEvents(t.events),t.store&&t.store.events&&this._registerModelEvents(t.store.events)}_registerModelEvents(t){for(var e in t){var i=this._getMethodNameFromEvent(t[e]);this[i]?(this._debugLitCorkUtils&&console.log(this.nodeName,"auto-bind:",i+" -> "+t[e],!0),this.bind[t[e]]=i):this._debugLitCorkUtils&&console.log(this.nodeName,"auto-bind:",i+" -> "+t[e],!1)}}_getMethodNameFromEvent(t){return"_on"+t.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}emit(t,e){n.emit(t,e)}fire(t,e={}){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}byId(t){return this.shadowRoot?this.shadowRoot.querySelector("#"+t):this.querySelector("#"+t)}$(t){return this.shadowRoot?this.shadowRoot.querySelector(t):this.querySelector(t)}$$(t){return this.shadowRoot?this.shadowRoot.querySelectorAll(t):this.querySelector(t)}updated(t){t.has("listening")&&this._onListenUpdate()}_onListenUpdate(){}});"undefined"!=typeof window&&(window.LitCorkUtils=r),t.exports=r},function(t,e){t.exports=t=>(class extends t{_attachDom(t){if(window.ShadyDOM&&window.ShadyDOM.inUse)return super._attachDom(t);let e=t.querySelectorAll("style");for(var i=0;i<e.length;i++)e[i].parentNode.removeChild(e[i]),this._stylesInserted||(e[i].setAttribute("id",this.nodeName.toLowerCase()+"-styles"),document.head.appendChild(e[i]));return this.appendChild(t),t}querySelector(t){return this.shadowRoot?this.shadowRoot.querySelector(t):super.querySelector(t)}querySelectorAll(t){return this.shadowRoot?this.shadowRoot.querySelectorAll(t):super.querySelectorAll(t)}})},function(t,e,i){const{AppStateModel:n}=i(36),o=i(61);t.exports=new class extends n{constructor(){super(),this.store=o,this.EventBus.on(this.store.events.APP_STATE_UPDATE,()=>this._sendGA()),this._sendGA()}setSelectedClusterIds(t){let e=this.store.data;return e.selected?"cluster"!==e.selected.type?console.warn("Attempting to set cluster ids, but selected object is not a cluster"):(e.selected.ids=t,super.set(e)):console.warn("Attempting to set cluster ids, but no selected object")}set(t){if(t.location){let e=t.location.path?t.location.path[0]:"map";t.page=e||"map"}return"map"===t.page&&t.location.path.length>=1&&(t.moment=t.location.path[1]),"moment"===t.page&&(t.moment=t.location.path[1]),"map"===t.page&&t.location.path.length>=3?(t.selected={type:t.location.path[2]},"cluster"===t.location.path[2]?(t.selected.latlng=t.location.path[3].split(",").map(t=>parseFloat(t)),t.selected.zoom=parseInt(t.location.path[4])):t.selected.id=t.location.path[3]):t.selected=null,t.moment||(t.moment=APP_CONFIG.moments[0]),super.set(t)}_sendGA(){if(!window.gtag)return console.warn("No global gtag variable set for analytics events");this.lastGaLocation!==window.location.pathname&&(this.lastGaLocation=window.location.pathname,gtag("config",APP_CONFIG.gaCode,{page_path:window.location.pathname}))}}},function(t,e,i){var{BaseModel:n}=i(15);t.exports=class extends n{constructor(){super(),this.register("AppStateModel")}setLocationElement(t){this.locationElement=t}setLocation(t){if(!this.locationElement)return console.warn("Call to setWindowLocation but no locationElement set");this.locationElement.setWindowLocation(t)}async get(){return this.store.data}set(t){return this.store.set(t),this.get()}}},function(t,e,i){const{BaseStore:n}=i(15);t.exports=class extends n{constructor(){super(),this.data={location:{}},this.events={APP_STATE_UPDATE:"app-state-update"}}set(t){this.stateChanged(this.data,t)&&(this.data=Object.assign({},this.data,t),this.emit(this.events.APP_STATE_UPDATE,this.data))}get(){return this.data}}},function(t,e,i){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}},function(t,e,i){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function s(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,a,l=s(t),h=1;h<arguments.length;h++){for(var c in i=Object(arguments[h]))o.call(i,c)&&(l[c]=i[c]);if(n){a=n(i);for(var d=0;d<a.length;d++)r.call(i,a[d])&&(l[a[d]]=i[a[d]])}}return l}},function(t,e,i){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function r(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var i=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],r(i),r(n))}function s(t){try{return decodeURIComponent(t)}catch(o){for(var e=t.match(n),i=1;i<e.length;i++)e=(t=r(e,i).join("")).match(n);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},i=o.exec(t);i;){try{e[i[0]]=decodeURIComponent(i[0])}catch(t){var n=s(i[0]);n!==i[0]&&(e[i[0]]=n)}i=o.exec(t)}e["%C2"]="�";for(var r=Object.keys(e),a=0;a<r.length;a++){var l=r[a];t=t.replace(new RegExp(l,"g"),e[l])}return t}(t)}}},function(t,e,i){const{AppStateStore:n}=i(36);t.exports=new class extends n{constructor(){super()}}},function(t,e,i){const{BaseModel:n}=i(15),o=i(63),r=i(37);t.exports=new class extends n{constructor(){super(),this.store=r,this.service=o,this.EventBus.on("app-state-update",t=>{"map"===t.page&&this.get(t.moment)}),this.register("MomentModel")}async get(t){let e=this.store.data[t]||{};try{e.request?await e.request:"loaded"!==e.state&&await this.service.get(t,this.transformLinks)}catch(t){console.error(t)}return this.store.data[t]}transformLinks(t){let e={},i={},n={};function o(t){let e;if(Array.isArray(t)){for(let e in t)t[e].toLowerCase().includes("thing")&&(t[e]="object");return e=t.find(t=>t.toLowerCase().includes("significantlink")),void 0===e&&(e=t.find(t=>t.includes("ucdlib:")),e=t.find(t=>"schema:WebPage"!==t)),e.replace(/^\/\/|^.*?:(\/\/)?/,"").toLowerCase()}return t.replace(/^\/\/|^.*?:(\/\/)?/,"").toLowerCase()}function r(e){return"object"==typeof e&&Array.isArray(e)&&e.forEach(t=>{"object"==typeof t&&(e=t["@id"])}),t.find(t=>t["@id"]===e)}for(let e=0;e<t.length;e++)void 0!==t[e]["@type"]&&(t[e].type=o(t[e]["@type"]),t[e]["schema:longitude"]&&(t[e].longitude=t[e]["schema:longitude"],delete t[e]["schema:longitude"]),t[e]["schema:latitude"]&&(t[e].latitude=t[e]["schema:latitude"],delete t[e]["schema:latitude"]),t[e].type.includes("significantlink")&&(t[e].type="connection"),n[t[e]["@id"].replace(/.*:b/,"b")]=t[e]);for(let t in n){let i=n[t];for(let t in i)if(n[t]){let o=n[t];o.src=i["@id"],o.dst=i[t],o.isLink=!0,e[o["@id"]]=o}}for(let t in n)if(!n[t].isLink&&"connection"!==n[t].type){let e;if(!new RegExp(/^_:b*/g).test(n[t]["@id"])){if(n[t].spatial?e=r(n[t].spatial):"place"===n[t].type&&(e=r(n[t]["@id"])),void 0===e)continue;n[t].location=e.name.replace(/\+/g," "),n[t].coordinates=[parseFloat(e.latitude),parseFloat(e.longitude)],i[n[t]["@id"]]=n[t]}}for(let t in e){let n=e[t];i[n.src]&&i[n.dst]?n.coordinates={src:i[n.src].coordinates,dst:i[n.dst].coordinates}:n.weblink=!0}return{nodes:i,links:e}}}},function(t,e,i){const{BaseService:n}=i(15),o=i(37);t.exports=new class extends n{constructor(){super(),this.store=o}get(t,e){return e||(e=t=>t),this.request({url:`/api/graph/${t}`,onLoading:e=>{this.store.onGraphLoading(t,e)},onLoad:i=>{i.body.graph=e(i.body["@graph"]),this.store.onGraphLoaded(t,i.body)},onError:e=>this.store.onGraphError(t,e)})}}},function(t,e,i){!function(t){var e=t.Markdown=function(t){switch(typeof t){case"undefined":this.dialect=e.dialects.Gruber;break;case"object":this.dialect=t;break;default:if(!(t in e.dialects))throw new Error("Unknown Markdown dialect '"+String(t)+"'");this.dialect=e.dialects[t]}this.em_state=[],this.strong_state=[],this.debug_indent=""};function n(){return"Markdown.mk_block( "+uneval(this.toString())+", "+uneval(this.trailing)+", "+uneval(this.lineNumber)+" )"}function o(){var t=i(65);return"Markdown.mk_block( "+t.inspect(this.toString())+", "+t.inspect(this.trailing)+", "+t.inspect(this.lineNumber)+" )"}t.parse=function(t,i){return new e(i).toTree(t)},t.toHTML=function(e,i,n){var o=t.toHTMLTree(e,i,n);return t.renderJsonML(o)},t.toHTMLTree=function(t,e,i){"string"==typeof t&&(t=this.parse(t,e));var n=u(t),o={};n&&n.references&&(o=n.references);var r=function t(e,i,n){var o;n=n||{};var r=e.slice(0);"function"==typeof n.preprocessTreeNode&&(r=n.preprocessTreeNode(r,i));var s=u(r);if(s){for(o in r[1]={},s)r[1][o]=s[o];s=r[1]}if("string"==typeof r)return r;switch(r[0]){case"header":r[0]="h"+r[1].level,delete r[1].level;break;case"bulletlist":r[0]="ul";break;case"numberlist":r[0]="ol";break;case"listitem":r[0]="li";break;case"para":r[0]="p";break;case"markdown":r[0]="html",s&&delete s.references;break;case"code_block":r[0]="pre",o=s?2:1;var a=["code"];a.push.apply(a,r.splice(o,r.length-o)),r[o]=a;break;case"inlinecode":r[0]="code";break;case"img":r[1].src=r[1].href,delete r[1].href;break;case"linebreak":r[0]="br";break;case"link":r[0]="a";break;case"link_ref":if(r[0]="a",!(l=i[s.ref]))return s.original;delete s.ref,s.href=l.href,l.title&&(s.title=l.title),delete s.original;break;case"img_ref":var l;if(r[0]="img",!(l=i[s.ref]))return s.original;delete s.ref,s.src=l.href,l.title&&(s.title=l.title),delete s.original}if(o=1,s){for(var h in r[1]){o=2;break}1===o&&r.splice(o,1)}for(;o<r.length;++o)r[o]=t(r[o],i,n);return r}(t,o,i);return function t(e){var i=u(e)?2:1;for(;i<e.length;)"string"==typeof e[i]?i+1<e.length&&"string"==typeof e[i+1]?e[i]+=e.splice(i+1,1)[0]:++i:(t(e[i]),++i)}(r),r};var r=e.mk_block=function(t,e,i){1==arguments.length&&(e="\n\n");var r=new String(t);return r.trailing=e,r.inspect=o,r.toSource=n,null!=i&&(r.lineNumber=i),r};function s(t){for(var e=0,i=-1;-1!==(i=t.indexOf("\n",i+1));)e++;return e}function l(t,e){var i=t+"_state",n="strong"==t?"em_state":"strong_state";function o(t){this.len_after=t,this.name="close_"+e}return function(r,s){if(this[i][0]==e)return this[i].shift(),[r.length,new o(r.length-e.length)];var a=this[n].slice(),l=this[i].slice();this[i].unshift(e);var h=this.processInline(r.substr(e.length)),c=h[h.length-1];this[i].shift();return c instanceof o?(h.pop(),[r.length-c.len_after,[t].concat(h)]):(this[n]=a,this[i]=l,[e.length,e])}}e.prototype.split_blocks=function(t,e){t=t.replace(/(\r\n|\n|\r)/g,"\n");var i,n=/([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,o=[],a=1;for(null!=(i=/^(\s*\n)/.exec(t))&&(a+=s(i[0]),n.lastIndex=i[0].length);null!==(i=n.exec(t));)"\n#"==i[2]&&(i[2]="\n",n.lastIndex--),o.push(r(i[1],i[2],a)),a+=s(i[0]);return o},e.prototype.processBlock=function(t,e){var i=this.dialect.block,n=i.__order__;if("__call__"in i)return i.__call__.call(this,t,e);for(var o=0;o<n.length;o++){var r=i[n[o]].call(this,t,e);if(r)return(!c(r)||r.length>0&&!c(r[0]))&&this.debug(n[o],"didn't return a proper array"),r}return[]},e.prototype.processInline=function(t){return this.dialect.inline.__call__.call(this,String(t))},e.prototype.toTree=function(t,e){var i=t instanceof Array?t:this.split_blocks(t),n=this.tree;try{for(this.tree=e||this.tree||["markdown"];i.length;){var o=this.processBlock(i.shift(),i);o.length&&this.tree.push.apply(this.tree,o)}return this.tree}finally{e&&(this.tree=n)}},e.prototype.debug=function(){var t=Array.prototype.slice.call(arguments);t.unshift(this.debug_indent),"undefined"!=typeof print&&print.apply(print,t),"undefined"!=typeof console&&void 0!==console.log&&console.log.apply(null,t)},e.prototype.loop_re_over_block=function(t,e,i){for(var n,o=e.valueOf();o.length&&null!=(n=t.exec(o));)o=o.substr(n[0].length),i.call(this,n);return o},e.dialects={},e.dialects.Gruber={block:{atxHeader:function(t,e){var i=t.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);if(i){var n=["header",{level:i[1].length}];return Array.prototype.push.apply(n,this.processInline(i[2])),i[0].length<t.length&&e.unshift(r(t.substr(i[0].length),t.trailing,t.lineNumber+2)),[n]}},setextHeader:function(t,e){var i=t.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);if(i){var n=["header",{level:"="===i[2]?1:2},i[1]];return i[0].length<t.length&&e.unshift(r(t.substr(i[0].length),t.trailing,t.lineNumber+2)),[n]}},code:function(t,e){var i=[],n=/^(?: {0,3}\t| {4})(.*)\n?/;if(t.match(n)){t:for(;;){var o=this.loop_re_over_block(n,t.valueOf(),(function(t){i.push(t[1])}));if(o.length){e.unshift(r(o,t.trailing));break t}if(!e.length)break t;if(!e[0].match(n))break t;i.push(t.trailing.replace(/[^\n]/g,"").substring(2)),t=e.shift()}return[["code_block",i.join("\n")]]}},horizRule:function(t,e){var i=t.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);if(i){var n=[["hr"]];return i[1]&&n.unshift.apply(n,this.processBlock(i[1],[])),i[3]&&e.unshift(r(i[3])),n}},lists:function(){var t="[*+-]|\\d+\\.",e=/[*+-]/,i=new RegExp("^( {0,3})("+t+")[ \t]+"),n="(?: {0,3}\\t| {4})";function o(t,e,i,n){if(e)t.push(["para"].concat(i));else{var o=t[t.length-1]instanceof Array&&"para"==t[t.length-1][0]?t[t.length-1]:t;n&&t.length>1&&i.unshift(n);for(var r=0;r<i.length;r++){var s=i[r];"string"==typeof s&&o.length>1&&"string"==typeof o[o.length-1]?o[o.length-1]+=s:o.push(s)}}}function s(t,e){for(var i=new RegExp("^("+n+"{"+t+"}.*?\\n?)*$"),o=new RegExp("^"+n+"{"+t+"}","gm"),s=[];e.length>0&&i.exec(e[0]);){var a=e.shift(),l=a.replace(o,"");s.push(r(l,a.trailing,a.lineNumber))}return s}function a(t,e,i){var n=t.list,o=n[n.length-1];if(!(o[1]instanceof Array&&"para"==o[1][0]))if(e+1==i.length)o.push(["para"].concat(o.splice(1,o.length-1)));else{var r=o.pop();o.push(["para"].concat(o.splice(1,o.length-1)),r)}}return function(r,l){var c=r.match(i);if(c){for(var d,u,p,f=[],m=k(c),_=!1,g=[f[0].list];;){for(var v=r.split(/(?=\n)/),y="",b=0;b<v.length;b++){var w="",x=v[b].replace(/^\n/,(function(t){return w=t,""})),L=(p=f.length,new RegExp("(?:^("+n+"{0,"+p+"} {0,3})("+t+")\\s+)|(^"+n+"{0,"+(p-1)+"}[ ]{0,4})"));if(void 0!==(c=x.match(L))[1]){y.length&&(o(d,_,this.processInline(y),w),_=!1,y=""),c[1]=c[1].replace(/ {0,3}\t/g,"    ");var C=Math.floor(c[1].length/4)+1;if(C>f.length)m=k(c),d.push(m),d=m[1]=["listitem"];else{var z=!1;for(u=0;u<f.length;u++)if(f[u].indent==c[1]){m=f[u].list,f.splice(u+1,f.length-(u+1)),z=!0;break}z||(++C<=f.length?(f.splice(C,f.length-C),m=f[C-1].list):(m=k(c),d.push(m))),d=["listitem"],m.push(d)}w=""}x.length>c[0].length&&(y+=w+x.substr(c[0].length))}y.length&&(o(d,_,this.processInline(y),w),_=!1,y="");var M=s(f.length,l);M.length>0&&(h(f,a,this),d.push.apply(d,this.toTree(M,[])));var S=l[0]&&l[0].valueOf()||"";if(!S.match(i)&&!S.match(/^ /))break;r=l.shift();var P=this.dialect.block.horizRule(r,l);if(P){g.push.apply(g,P);break}h(f,a,this),_=!0}return g}function k(t){var i=e.exec(t[2])?["bulletlist"]:["numberlist"];return f.push({list:i,indent:t[1]}),i}}}(),blockquote:function(t,e){if(t.match(/^>/m)){var i=[];if(">"!=t[0]){for(var n=t.split(/\n/),o=[],s=t.lineNumber;n.length&&">"!=n[0][0];)o.push(n.shift()),s++;var a=r(o.join("\n"),"\n",t.lineNumber);i.push.apply(i,this.processBlock(a,[])),t=r(n.join("\n"),t.trailing,s)}for(;e.length&&">"==e[0][0];){var l=e.shift();t=r(t+t.trailing+l,l.trailing,t.lineNumber)}var h=t.replace(/^> ?/gm,""),c=(this.tree,this.toTree(h,["blockquote"])),p=u(c);return p&&p.references&&(delete p.references,d(p)&&c.splice(1,1)),i.push(c),i}},referenceDefn:function(t,e){var i=/^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;if(t.match(i)){u(this.tree)||this.tree.splice(1,0,{});var n=u(this.tree);void 0===n.references&&(n.references={});var o=this.loop_re_over_block(i,t,(function(t){t[2]&&"<"==t[2][0]&&">"==t[2][t[2].length-1]&&(t[2]=t[2].substring(1,t[2].length-1));var e=n.references[t[1].toLowerCase()]={href:t[2]};void 0!==t[4]?e.title=t[4]:void 0!==t[5]&&(e.title=t[5])}));return o.length&&e.unshift(r(o,t.trailing)),[]}},para:function(t,e){return[["para"].concat(this.processInline(t))]}}},e.dialects.Gruber.inline={__oneElement__:function(t,e,i){var n,o;return e=e||this.dialect.inline.__patterns__,(n=new RegExp("([\\s\\S]*?)("+(e.source||e)+")").exec(t))?n[1]?[n[1].length,n[1]]:(n[2]in this.dialect.inline&&(o=this.dialect.inline[n[2]].call(this,t.substr(n.index),n,i||[])),o=o||[n[2].length,n[2]]):[t.length,t]},__call__:function(t,e){var i,n=[];function o(t){"string"==typeof t&&"string"==typeof n[n.length-1]?n[n.length-1]+=t:n.push(t)}for(;t.length>0;)i=this.dialect.inline.__oneElement__.call(this,t,e,n),t=t.substr(i.shift()),h(i,o);return n},"]":function(){},"}":function(){},__escape__:/^\\[\\`\*_{}\[\]()#\+.!\-]/,"\\":function(t){return this.dialect.inline.__escape__.exec(t)?[2,t.charAt(1)]:[1,"\\"]},"![":function(t){var e=t.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);if(e){e[2]&&"<"==e[2][0]&&">"==e[2][e[2].length-1]&&(e[2]=e[2].substring(1,e[2].length-1)),e[2]=this.dialect.inline.__call__.call(this,e[2],/\\/)[0];var i={alt:e[1],href:e[2]||""};return void 0!==e[4]&&(i.title=e[4]),[e[0].length,["img",i]]}return(e=t.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/))?[e[0].length,["img_ref",{alt:e[1],ref:e[2].toLowerCase(),original:e[0]}]]:[2,"!["]},"[":function(t){var i=String(t),n=e.DialectHelpers.inline_until_char.call(this,t.substr(1),"]");if(!n)return[1,"["];var o,r,s=1+n[0],a=n[1],l=(t=t.substr(s)).match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);if(l){var h=l[1];if(s+=l[0].length,h&&"<"==h[0]&&">"==h[h.length-1]&&(h=h.substring(1,h.length-1)),!l[3])for(var c=1,d=0;d<h.length;d++)switch(h[d]){case"(":c++;break;case")":0==--c&&(s-=h.length-d,h=h.substring(0,d))}return r={href:(h=this.dialect.inline.__call__.call(this,h,/\\/)[0])||""},void 0!==l[3]&&(r.title=l[3]),o=["link",r].concat(a),[s,o]}return(l=t.match(/^\s*\[(.*?)\]/))?(s+=l[0].length,o=["link_ref",r={ref:(l[1]||String(a)).toLowerCase(),original:i.substr(0,s)}].concat(a),[s,o]):1==a.length&&"string"==typeof a[0]?(o=["link_ref",r={ref:a[0].toLowerCase(),original:i.substr(0,s)},a[0]],[s,o]):[1,"["]},"<":function(t){var e;return null!=(e=t.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/))?e[3]?[e[0].length,["link",{href:"mailto:"+e[3]},e[3]]]:"mailto"==e[2]?[e[0].length,["link",{href:e[1]},e[1].substr("mailto:".length)]]:[e[0].length,["link",{href:e[1]},e[1]]]:[1,"<"]},"`":function(t){var e=t.match(/(`+)(([\s\S]*?)\1)/);return e&&e[2]?[e[1].length+e[2].length,["inlinecode",e[3]]]:[1,"`"]},"  \n":function(t){return[3,["linebreak"]]}},e.dialects.Gruber.inline["**"]=l("strong","**"),e.dialects.Gruber.inline.__=l("strong","__"),e.dialects.Gruber.inline["*"]=l("em","*"),e.dialects.Gruber.inline._=l("em","_"),e.buildBlockOrder=function(t){var e=[];for(var i in t)"__order__"!=i&&"__call__"!=i&&e.push(i);t.__order__=e},e.buildInlinePatterns=function(t){var e=[];for(var i in t)if(!i.match(/^__.*__$/)){var n=i.replace(/([\\.*+?|()\[\]{}])/g,"\\$1").replace(/\n/,"\\n");e.push(1==i.length?n:"(?:"+n+")")}e=e.join("|"),t.__patterns__=e;var o=t.__call__;t.__call__=function(t,i){return null!=i?o.call(this,t,i):o.call(this,t,e)}},e.DialectHelpers={},e.DialectHelpers.inline_until_char=function(t,e){for(var i=0,n=[];;){if(t.charAt(i)==e)return[++i,n];if(i>=t.length)return null;var o=this.dialect.inline.__oneElement__.call(this,t.substr(i));i+=o[0],n.push.apply(n,o.slice(1))}},e.subclassDialect=function(t){function e(){}function i(){}return e.prototype=t.block,i.prototype=t.inline,{block:new e,inline:new i}},e.buildBlockOrder(e.dialects.Gruber.block),e.buildInlinePatterns(e.dialects.Gruber.inline),e.dialects.Maruku=e.subclassDialect(e.dialects.Gruber),e.dialects.Maruku.processMetaHash=function(t){for(var e=function(t){var e=t.split(""),i=[""],n=!1;for(;e.length;){var o=e.shift();switch(o){case" ":n?i[i.length-1]+=o:i.push("");break;case"'":case'"':n=!n;break;case"\\":o=e.shift();default:i[i.length-1]+=o}}return i}(t),i={},n=0;n<e.length;++n)if(/^#/.test(e[n]))i.id=e[n].substring(1);else if(/^\./.test(e[n]))i.class?i.class=i.class+e[n].replace(/./," "):i.class=e[n].substring(1);else if(/\=/.test(e[n])){var o=e[n].split(/\=/);i[o[0]]=o[1]}return i},e.dialects.Maruku.block.document_meta=function(t,e){if(!(t.lineNumber>1)&&t.match(/^(?:\w+:.*\n)*\w+:.*$/)){u(this.tree)||this.tree.splice(1,0,{});var i=t.split(/\n/);for(p in i){var n=i[p].match(/(\w+):\s*(.*)$/),o=n[1].toLowerCase(),r=n[2];this.tree[1][o]=r}return[]}},e.dialects.Maruku.block.block_meta=function(t,e){var i=t.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);if(i){var n,o=this.dialect.processMetaHash(i[2]);if(""===i[1]){var r=this.tree[this.tree.length-1];if(n=u(r),"string"==typeof r)return;for(a in n||(n={},r.splice(1,0,n)),o)n[a]=o[a];return[]}var s=t.replace(/\n.*$/,""),l=this.processBlock(s,[]);for(a in(n=u(l[0]))||(n={},l[0].splice(1,0,n)),o)n[a]=o[a];return l}},e.dialects.Maruku.block.definition_list=function(t,e){var i,n=/^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,o=["dl"];if(a=t.match(n)){for(var r=[t];e.length&&n.exec(e[0]);)r.push(e.shift());for(var s=0;s<r.length;++s){var a,l=(a=r[s].match(n))[1].replace(/\n$/,"").split(/\n/),h=a[2].split(/\n:\s+/);for(i=0;i<l.length;++i)o.push(["dt",l[i]]);for(i=0;i<h.length;++i)o.push(["dd"].concat(this.processInline(h[i].replace(/(\n)\s+/,"$1"))))}return[o]}},e.dialects.Maruku.block.table=function(t,e){var i,n,o=function(t,e){(e=e||"\\s").match(/^[\\|\[\]{}?*.+^$]$/)&&(e="\\"+e);for(var i,n=[],o=new RegExp("^((?:\\\\.|[^\\\\"+e+"])*)"+e+"(.*)");i=t.match(o);)n.push(i[1]),t=i[2];return n.push(t),n};if(n=t.match(/^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/))n[3]=n[3].replace(/^\s*\|/gm,"");else if(!(n=t.match(/^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/)))return;var r=["table",["thead",["tr"]],["tbody"]];n[2]=n[2].replace(/\|\s*$/,"").split("|");var s=[];for(h(n[2],(function(t){t.match(/^\s*-+:\s*$/)?s.push({align:"right"}):t.match(/^\s*:-+\s*$/)?s.push({align:"left"}):t.match(/^\s*:-+:\s*$/)?s.push({align:"center"}):s.push({})})),n[1]=o(n[1].replace(/\|\s*$/,""),"|"),i=0;i<n[1].length;i++)r[1][1].push(["th",s[i]||{}].concat(this.processInline(n[1][i].trim())));return h(n[3].replace(/\|\s*$/gm,"").split("\n"),(function(t){var e=["tr"];for(t=o(t,"|"),i=0;i<t.length;i++)e.push(["td",s[i]||{}].concat(this.processInline(t[i].trim())));r[2].push(e)}),this),[r]},e.dialects.Maruku.inline["{:"]=function(t,e,i){if(!i.length)return[2,"{:"];var n=i[i.length-1];if("string"==typeof n)return[2,"{:"];var o=t.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);if(!o)return[2,"{:"];var r=this.dialect.processMetaHash(o[1]),s=u(n);for(var a in s||(s={},n.splice(1,0,s)),r)s[a]=r[a];return[o[0].length,""]},e.dialects.Maruku.inline.__escape__=/^\\[\\`\*_{}\[\]()#\+.!\-|:]/,e.buildBlockOrder(e.dialects.Maruku.block),e.buildInlinePatterns(e.dialects.Maruku.inline);var h,c=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)};h=Array.prototype.forEach?function(t,e,i){return t.forEach(e,i)}:function(t,e,i){for(var n=0;n<t.length;n++)e.call(i||t,t[n],n,t)};var d=function(t){for(var e in t)if(hasOwnProperty.call(t,e))return!1;return!0};function u(t){return c(t)&&t.length>1&&"object"==typeof t[1]&&!c(t[1])?t[1]:void 0}function f(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function m(t){if("string"==typeof t)return f(t);var e=t.shift(),i={},n=[];for(!t.length||"object"!=typeof t[0]||t[0]instanceof Array||(i=t.shift());t.length;)n.push(m(t.shift()));var o="";for(var r in i)o+=" "+r+'="'+f(i[r])+'"';return"img"==e||"br"==e||"hr"==e?"<"+e+o+"/>":"<"+e+o+">"+n.join("")+"</"+e+">"}t.renderJsonML=function(t,e){(e=e||{}).root=e.root||!1;var i=[];if(e.root)i.push(m(t));else for(t.shift(),!t.length||"object"!=typeof t[0]||t[0]instanceof Array||t.shift();t.length;)i.push(m(t.shift()));return i.join("\n\n")}}(e)},function(t,e,i){(function(t){var n=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),i={},n=0;n<e.length;n++)i[e[n]]=Object.getOwnPropertyDescriptor(t,e[n]);return i},o=/%[sdj%]/g;e.format=function(t){if(!g(t)){for(var e=[],i=0;i<arguments.length;i++)e.push(a(arguments[i]));return e.join(" ")}i=1;for(var n=arguments,r=n.length,s=String(t).replace(o,(function(t){if("%%"===t)return"%";if(i>=r)return t;switch(t){case"%s":return String(n[i++]);case"%d":return Number(n[i++]);case"%j":try{return JSON.stringify(n[i++])}catch(t){return"[Circular]"}default:return t}})),l=n[i];i<r;l=n[++i])m(l)||!b(l)?s+=" "+l:s+=" "+a(l);return s},e.deprecate=function(i,n){if(void 0!==t&&!0===t.noDeprecation)return i;if(void 0===t)return function(){return e.deprecate(i,n).apply(this,arguments)};var o=!1;return function(){if(!o){if(t.throwDeprecation)throw new Error(n);t.traceDeprecation?console.trace(n):console.error(n),o=!0}return i.apply(this,arguments)}};var r,s={};function a(t,i){var n={seen:[],stylize:h};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),f(i)?n.showHidden=i:i&&e._extend(n,i),v(n.showHidden)&&(n.showHidden=!1),v(n.depth)&&(n.depth=2),v(n.colors)&&(n.colors=!1),v(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=l),c(n,t,n.depth)}function l(t,e){var i=a.styles[e];return i?"["+a.colors[i][0]+"m"+t+"["+a.colors[i][1]+"m":t}function h(t,e){return t}function c(t,i,n){if(t.customInspect&&i&&L(i.inspect)&&i.inspect!==e.inspect&&(!i.constructor||i.constructor.prototype!==i)){var o=i.inspect(n,t);return g(o)||(o=c(t,o,n)),o}var r=function(t,e){if(v(e))return t.stylize("undefined","undefined");if(g(e)){var i="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(i,"string")}if(_(e))return t.stylize(""+e,"number");if(f(e))return t.stylize(""+e,"boolean");if(m(e))return t.stylize("null","null")}(t,i);if(r)return r;var s=Object.keys(i),a=function(t){var e={};return t.forEach((function(t,i){e[t]=!0})),e}(s);if(t.showHidden&&(s=Object.getOwnPropertyNames(i)),x(i)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return d(i);if(0===s.length){if(L(i)){var l=i.name?": "+i.name:"";return t.stylize("[Function"+l+"]","special")}if(y(i))return t.stylize(RegExp.prototype.toString.call(i),"regexp");if(w(i))return t.stylize(Date.prototype.toString.call(i),"date");if(x(i))return d(i)}var h,b="",C=!1,z=["{","}"];(p(i)&&(C=!0,z=["[","]"]),L(i))&&(b=" [Function"+(i.name?": "+i.name:"")+"]");return y(i)&&(b=" "+RegExp.prototype.toString.call(i)),w(i)&&(b=" "+Date.prototype.toUTCString.call(i)),x(i)&&(b=" "+d(i)),0!==s.length||C&&0!=i.length?n<0?y(i)?t.stylize(RegExp.prototype.toString.call(i),"regexp"):t.stylize("[Object]","special"):(t.seen.push(i),h=C?function(t,e,i,n,o){for(var r=[],s=0,a=e.length;s<a;++s)P(e,String(s))?r.push(u(t,e,i,n,String(s),!0)):r.push("");return o.forEach((function(o){o.match(/^\d+$/)||r.push(u(t,e,i,n,o,!0))})),r}(t,i,n,a,s):s.map((function(e){return u(t,i,n,a,e,C)})),t.seen.pop(),function(t,e,i){if(t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return i[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+i[1];return i[0]+e+" "+t.join(", ")+" "+i[1]}(h,b,z)):z[0]+b+z[1]}function d(t){return"["+Error.prototype.toString.call(t)+"]"}function u(t,e,i,n,o,r){var s,a,l;if((l=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?a=l.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):l.set&&(a=t.stylize("[Setter]","special")),P(n,o)||(s="["+o+"]"),a||(t.seen.indexOf(l.value)<0?(a=m(i)?c(t,l.value,null):c(t,l.value,i-1)).indexOf("\n")>-1&&(a=r?a.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+a.split("\n").map((function(t){return"   "+t})).join("\n")):a=t.stylize("[Circular]","special")),v(s)){if(r&&o.match(/^\d+$/))return a;(s=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"))}return s+": "+a}function p(t){return Array.isArray(t)}function f(t){return"boolean"==typeof t}function m(t){return null===t}function _(t){return"number"==typeof t}function g(t){return"string"==typeof t}function v(t){return void 0===t}function y(t){return b(t)&&"[object RegExp]"===C(t)}function b(t){return"object"==typeof t&&null!==t}function w(t){return b(t)&&"[object Date]"===C(t)}function x(t){return b(t)&&("[object Error]"===C(t)||t instanceof Error)}function L(t){return"function"==typeof t}function C(t){return Object.prototype.toString.call(t)}function z(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(i){if(v(r)&&(r=t.env.NODE_DEBUG||""),i=i.toUpperCase(),!s[i])if(new RegExp("\\b"+i+"\\b","i").test(r)){var n=t.pid;s[i]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",i,n,t)}}else s[i]=function(){};return s[i]},e.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=p,e.isBoolean=f,e.isNull=m,e.isNullOrUndefined=function(t){return null==t},e.isNumber=_,e.isString=g,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=v,e.isRegExp=y,e.isObject=b,e.isDate=w,e.isError=x,e.isFunction=L,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=i(67);var M=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function S(){var t=new Date,e=[z(t.getHours()),z(t.getMinutes()),z(t.getSeconds())].join(":");return[t.getDate(),M[t.getMonth()],e].join(" ")}function P(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",S(),e.format.apply(e,arguments))},e.inherits=i(68),e._extend=function(t,e){if(!e||!b(e))return t;for(var i=Object.keys(e),n=i.length;n--;)t[i[n]]=e[i[n]];return t};var k="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function T(t,e){if(!t){var i=new Error("Promise was rejected with a falsy value");i.reason=t,t=i}return e(t)}e.promisify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');if(k&&t[k]){var e;if("function"!=typeof(e=t[k]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,k,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,i,n=new Promise((function(t,n){e=t,i=n})),o=[],r=0;r<arguments.length;r++)o.push(arguments[r]);o.push((function(t,n){t?i(t):e(n)}));try{t.apply(this,o)}catch(t){i(t)}return n}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),k&&Object.defineProperty(e,k,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,n(t))},e.promisify.custom=k,e.callbackify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');function i(){for(var i=[],n=0;n<arguments.length;n++)i.push(arguments[n]);var o=i.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var r=this,s=function(){return o.apply(r,arguments)};e.apply(this,i).then((function(e){t.nextTick(s,null,e)}),(function(e){t.nextTick(T,e,s)}))}return Object.setPrototypeOf(i,Object.getPrototypeOf(e)),Object.defineProperties(i,n(e)),i}}).call(this,i(66))},function(t,e){var i,n,o=t.exports={};function r(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(i===setTimeout)return setTimeout(t,0);if((i===r||!i)&&setTimeout)return i=setTimeout,setTimeout(t,0);try{return i(t,0)}catch(e){try{return i.call(null,t,0)}catch(e){return i.call(this,t,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:r}catch(t){i=r}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(t){n=s}}();var l,h=[],c=!1,d=-1;function u(){c&&l&&(c=!1,l.length?h=l.concat(h):d=-1,h.length&&p())}function p(){if(!c){var t=a(u);c=!0;for(var e=h.length;e;){for(l=h,h=[];++d<e;)l&&l[d].run();d=-1,e=h.length}l=null,c=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function f(t,e){this.fun=t,this.array=e}function m(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];h.push(new f(t,e)),1!==h.length||c||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(t,e){if(e){t.super_=e;var i=function(){};i.prototype=e.prototype,t.prototype=new i,t.prototype.constructor=t}}},function(t,e,i){var n=i(70);(t.exports=i(32)(!1)).push([t.i,"/* required styles */\r\n\r\n.leaflet-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-container,\r\n.leaflet-pane > svg,\r\n.leaflet-pane > canvas,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\t}\r\n.leaflet-container {\r\n\toverflow: hidden;\r\n\t}\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        user-select: none;\r\n\t  -webkit-user-drag: none;\r\n\t}\r\n/* Prevents IE11 from highlighting tiles in blue */\r\n.leaflet-tile::selection {\r\n\tbackground: transparent;\r\n}\r\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r\n.leaflet-safari .leaflet-tile {\r\n\timage-rendering: -webkit-optimize-contrast;\r\n\t}\r\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\r\n.leaflet-safari .leaflet-tile-container {\r\n\twidth: 1600px;\r\n\theight: 1600px;\r\n\t-webkit-transform-origin: 0 0;\r\n\t}\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\r\n\t}\r\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r\n.leaflet-container .leaflet-overlay-pane svg,\r\n.leaflet-container .leaflet-marker-pane img,\r\n.leaflet-container .leaflet-shadow-pane img,\r\n.leaflet-container .leaflet-tile-pane img,\r\n.leaflet-container img.leaflet-image-layer,\r\n.leaflet-container .leaflet-tile {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-zoom {\r\n\t-ms-touch-action: pan-x pan-y;\r\n\ttouch-action: pan-x pan-y;\r\n\t}\r\n.leaflet-container.leaflet-touch-drag {\r\n\t-ms-touch-action: pinch-zoom;\r\n\t/* Fallback for FF which doesn't support pinch-zoom */\r\n\ttouch-action: none;\r\n\ttouch-action: pinch-zoom;\r\n}\r\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r\n\t-ms-touch-action: none;\r\n\ttouch-action: none;\r\n}\r\n.leaflet-container {\r\n\t-webkit-tap-highlight-color: transparent;\r\n}\r\n.leaflet-container a {\r\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r\n}\r\n.leaflet-tile {\r\n\tfilter: inherit;\r\n\tvisibility: hidden;\r\n\t}\r\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\r\n\t}\r\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\tz-index: 800;\r\n\t}\r\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\r\n\t}\r\n\r\n.leaflet-pane         { z-index: 400; }\r\n\r\n.leaflet-tile-pane    { z-index: 200; }\r\n.leaflet-overlay-pane { z-index: 400; }\r\n.leaflet-shadow-pane  { z-index: 500; }\r\n.leaflet-marker-pane  { z-index: 600; }\r\n.leaflet-tooltip-pane   { z-index: 650; }\r\n.leaflet-popup-pane   { z-index: 700; }\r\n\r\n.leaflet-map-pane canvas { z-index: 100; }\r\n.leaflet-map-pane svg    { z-index: 200; }\r\n\r\n.leaflet-vml-shape {\r\n\twidth: 1px;\r\n\theight: 1px;\r\n\t}\r\n.lvml {\r\n\tbehavior: url(#default#VML);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\t}\r\n\r\n\r\n/* control positioning */\r\n\r\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 800;\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-top {\r\n\ttop: 0;\r\n\t}\r\n.leaflet-right {\r\n\tright: 0;\r\n\t}\r\n.leaflet-bottom {\r\n\tbottom: 0;\r\n\t}\r\n.leaflet-left {\r\n\tleft: 0;\r\n\t}\r\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\r\n\t}\r\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\r\n\t}\r\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\r\n\t}\r\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\r\n\t}\r\n\r\n\r\n/* zoom and fade animations */\r\n\r\n.leaflet-fade-anim .leaflet-tile {\r\n\twill-change: opacity;\r\n\t}\r\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.2s linear;\r\n\t   -moz-transition: opacity 0.2s linear;\r\n\t        transition: opacity 0.2s linear;\r\n\t}\r\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\r\n\t}\r\n.leaflet-zoom-animated {\r\n\t-webkit-transform-origin: 0 0;\r\n\t    -ms-transform-origin: 0 0;\r\n\t        transform-origin: 0 0;\r\n\t}\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\twill-change: transform;\r\n\t}\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t}\r\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile {\r\n\t-webkit-transition: none;\r\n\t   -moz-transition: none;\r\n\t        transition: none;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n\r\n/* cursors */\r\n\r\n.leaflet-interactive {\r\n\tcursor: pointer;\r\n\t}\r\n.leaflet-grab {\r\n\tcursor: -webkit-grab;\r\n\tcursor:    -moz-grab;\r\n\tcursor:         grab;\r\n\t}\r\n.leaflet-crosshair,\r\n.leaflet-crosshair .leaflet-interactive {\r\n\tcursor: crosshair;\r\n\t}\r\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\r\n\t}\r\n.leaflet-dragging .leaflet-grab,\r\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\r\n.leaflet-dragging .leaflet-marker-draggable {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:    -moz-grabbing;\r\n\tcursor:         grabbing;\r\n\t}\r\n\r\n/* marker & overlays interactivity */\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-image-layer,\r\n.leaflet-pane > svg path,\r\n.leaflet-tile-container {\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-marker-icon.leaflet-interactive,\r\n.leaflet-image-layer.leaflet-interactive,\r\n.leaflet-pane > svg path.leaflet-interactive,\r\nsvg.leaflet-image-layer.leaflet-interactive path {\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n/* visual tweaks */\r\n\r\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline: 0;\r\n\t}\r\n.leaflet-container a {\r\n\tcolor: #0078A8;\r\n\t}\r\n.leaflet-container a.leaflet-active {\r\n\toutline: 2px solid orange;\r\n\t}\r\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #38f;\r\n\tbackground: rgba(255,255,255,0.5);\r\n\t}\r\n\r\n\r\n/* general typography */\r\n.leaflet-container {\r\n\tfont: 12px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\t}\r\n\r\n\r\n/* general toolbar styles */\r\n\r\n.leaflet-bar {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\tborder-radius: 4px;\r\n\t}\r\n.leaflet-bar a,\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\t}\r\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\r\n\t}\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #f4f4f4;\r\n\t}\r\n.leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\t}\r\n.leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\r\n\t}\r\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 2px;\r\n\tborder-top-right-radius: 2px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 2px;\r\n\tborder-bottom-right-radius: 2px;\r\n\t}\r\n\r\n/* zoom control */\r\n\r\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\r\n\ttext-indent: 1px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r\n\tfont-size: 22px;\r\n\t}\r\n\r\n\r\n/* layers control */\r\n\r\n.leaflet-control-layers {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\r\n\t}\r\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url("+n(i(71))+");\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\t}\r\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url("+n(i(72))+");\r\n\tbackground-size: 26px 26px;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\t}\r\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\r\n\t}\r\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\t}\r\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\t}\r\n.leaflet-control-layers-scrollbar {\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tpadding-right: 5px;\r\n\t}\r\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\t}\r\n.leaflet-control-layers label {\r\n\tdisplay: block;\r\n\t}\r\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\r\n\t}\r\n\r\n/* Default icon URLs */\r\n.leaflet-default-icon-path {\r\n\tbackground-image: url("+n(i(73))+');\r\n\t}\r\n\r\n\r\n/* attribution and scale controls */\r\n\r\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.7);\r\n\tmargin: 0;\r\n\t}\r\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\r\n\t}\r\n.leaflet-control-attribution a {\r\n\ttext-decoration: none;\r\n\t}\r\n.leaflet-control-attribution a:hover {\r\n\ttext-decoration: underline;\r\n\t}\r\n.leaflet-container .leaflet-control-attribution,\r\n.leaflet-container .leaflet-control-scale {\r\n\tfont-size: 11px;\r\n\t}\r\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\r\n\t}\r\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\r\n\t}\r\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\tfont-size: 11px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tbox-shadow: none;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 2px solid rgba(0,0,0,0.2);\r\n\tbackground-clip: padding-box;\r\n\t}\r\n\r\n\r\n/* popup */\r\n\r\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\r\n\t}\r\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\tborder-radius: 12px;\r\n\t}\r\n.leaflet-popup-content {\r\n\tmargin: 13px 19px;\r\n\tline-height: 1.4;\r\n\t}\r\n.leaflet-popup-content p {\r\n\tmargin: 18px 0;\r\n\t}\r\n.leaflet-popup-tip-container {\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-left: -20px;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\r\n\t-webkit-transform: rotate(45deg);\r\n\t   -moz-transform: rotate(45deg);\r\n\t    -ms-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\t}\r\n.leaflet-popup-content-wrapper,\r\n.leaflet-popup-tip {\r\n\tbackground: white;\r\n\tcolor: #333;\r\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tpadding: 4px 4px 0 0;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\twidth: 18px;\r\n\theight: 14px;\r\n\tfont: 16px/14px Tahoma, Verdana, sans-serif;\r\n\tcolor: #c3c3c3;\r\n\ttext-decoration: none;\r\n\tfont-weight: bold;\r\n\tbackground: transparent;\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button:hover {\r\n\tcolor: #999;\r\n\t}\r\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tborder-top: 1px solid #ddd;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-content-wrapper {\r\n\tzoom: 1;\r\n\t}\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\twidth: 24px;\r\n\tmargin: 0 auto;\r\n\r\n\t-ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";\r\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r\n\t}\r\n.leaflet-oldie .leaflet-popup-tip-container {\r\n\tmargin-top: -1px;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-control-zoom,\r\n.leaflet-oldie .leaflet-control-layers,\r\n.leaflet-oldie .leaflet-popup-content-wrapper,\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\tborder: 1px solid #999;\r\n\t}\r\n\r\n\r\n/* div icon */\r\n\r\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\r\n\t}\r\n\r\n\r\n/* Tooltip */\r\n/* Base styles for the element that has a tooltip */\r\n.leaflet-tooltip {\r\n\tposition: absolute;\r\n\tpadding: 6px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 3px;\r\n\tcolor: #222;\r\n\twhite-space: nowrap;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tpointer-events: none;\r\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-tooltip.leaflet-clickable {\r\n\tcursor: pointer;\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-tooltip-top:before,\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder: 6px solid transparent;\r\n\tbackground: transparent;\r\n\tcontent: "";\r\n\t}\r\n\r\n/* Directions */\r\n\r\n.leaflet-tooltip-bottom {\r\n\tmargin-top: 6px;\r\n}\r\n.leaflet-tooltip-top {\r\n\tmargin-top: -6px;\r\n}\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-top:before {\r\n\tleft: 50%;\r\n\tmargin-left: -6px;\r\n\t}\r\n.leaflet-tooltip-top:before {\r\n\tbottom: 0;\r\n\tmargin-bottom: -12px;\r\n\tborder-top-color: #fff;\r\n\t}\r\n.leaflet-tooltip-bottom:before {\r\n\ttop: 0;\r\n\tmargin-top: -12px;\r\n\tmargin-left: -6px;\r\n\tborder-bottom-color: #fff;\r\n\t}\r\n.leaflet-tooltip-left {\r\n\tmargin-left: -6px;\r\n}\r\n.leaflet-tooltip-right {\r\n\tmargin-left: 6px;\r\n}\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\t}\r\n.leaflet-tooltip-left:before {\r\n\tright: 0;\r\n\tmargin-right: -12px;\r\n\tborder-left-color: #fff;\r\n\t}\r\n.leaflet-tooltip-right:before {\r\n\tleft: 0;\r\n\tmargin-left: -12px;\r\n\tborder-right-color: #fff;\r\n\t}\r\n',""])},function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC"},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII="},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII="},function(t,e,i){(t.exports=i(32)(!1)).push([t.i,".leaflet-cluster-anim .leaflet-marker-icon, .leaflet-cluster-anim .leaflet-marker-shadow {\r\n\t-webkit-transition: -webkit-transform 0.3s ease-out, opacity 0.3s ease-in;\r\n\t-moz-transition: -moz-transform 0.3s ease-out, opacity 0.3s ease-in;\r\n\t-o-transition: -o-transform 0.3s ease-out, opacity 0.3s ease-in;\r\n\ttransition: transform 0.3s ease-out, opacity 0.3s ease-in;\r\n}\r\n\r\n.leaflet-cluster-spider-leg {\r\n\t/* stroke-dashoffset (duration and function) should match with leaflet-marker-icon transform in order to track it exactly */\r\n\t-webkit-transition: -webkit-stroke-dashoffset 0.3s ease-out, -webkit-stroke-opacity 0.3s ease-in;\r\n\t-moz-transition: -moz-stroke-dashoffset 0.3s ease-out, -moz-stroke-opacity 0.3s ease-in;\r\n\t-o-transition: -o-stroke-dashoffset 0.3s ease-out, -o-stroke-opacity 0.3s ease-in;\r\n\ttransition: stroke-dashoffset 0.3s ease-out, stroke-opacity 0.3s ease-in;\r\n}\r\n",""])},function(t,e,i){(t.exports=i(32)(!1)).push([t.i,'.marker-cluster-small {\r\n\tbackground-color: rgba(181, 226, 140, 0.6);\r\n\t}\r\n.marker-cluster-small div {\r\n\tbackground-color: rgba(110, 204, 57, 0.6);\r\n\t}\r\n\r\n.marker-cluster-medium {\r\n\tbackground-color: rgba(241, 211, 87, 0.6);\r\n\t}\r\n.marker-cluster-medium div {\r\n\tbackground-color: rgba(240, 194, 12, 0.6);\r\n\t}\r\n\r\n.marker-cluster-large {\r\n\tbackground-color: rgba(253, 156, 115, 0.6);\r\n\t}\r\n.marker-cluster-large div {\r\n\tbackground-color: rgba(241, 128, 23, 0.6);\r\n\t}\r\n\r\n\t/* IE 6-8 fallback colors */\r\n.leaflet-oldie .marker-cluster-small {\r\n\tbackground-color: rgb(181, 226, 140);\r\n\t}\r\n.leaflet-oldie .marker-cluster-small div {\r\n\tbackground-color: rgb(110, 204, 57);\r\n\t}\r\n\r\n.leaflet-oldie .marker-cluster-medium {\r\n\tbackground-color: rgb(241, 211, 87);\r\n\t}\r\n.leaflet-oldie .marker-cluster-medium div {\r\n\tbackground-color: rgb(240, 194, 12);\r\n\t}\r\n\r\n.leaflet-oldie .marker-cluster-large {\r\n\tbackground-color: rgb(253, 156, 115);\r\n\t}\r\n.leaflet-oldie .marker-cluster-large div {\r\n\tbackground-color: rgb(241, 128, 23);\r\n}\r\n\r\n.marker-cluster {\r\n\tbackground-clip: padding-box;\r\n\tborder-radius: 20px;\r\n\t}\r\n.marker-cluster div {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tmargin-left: 5px;\r\n\tmargin-top: 5px;\r\n\r\n\ttext-align: center;\r\n\tborder-radius: 15px;\r\n\tfont: 12px "Helvetica Neue", Arial, Helvetica, sans-serif;\r\n\t}\r\n.marker-cluster span {\r\n\tline-height: 30px;\r\n\t}',""])},function(t,e,i){
/* @preserve
 * Leaflet 1.5.1+build.2e3e0ff, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2018 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function(t){"use strict";var e=Object.freeze;function i(t){var e,i,n,o;for(i=1,n=arguments.length;i<n;i++)for(e in o=arguments[i])t[e]=o[e];return t}Object.freeze=function(t){return t};var n=Object.create||function(){function t(){}return function(e){return t.prototype=e,new t}}();function o(t,e){var i=Array.prototype.slice;if(t.bind)return t.bind.apply(t,i.call(arguments,1));var n=i.call(arguments,2);return function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)}}var r=0;function s(t){return t._leaflet_id=t._leaflet_id||++r,t._leaflet_id}function a(t,e,i){var n,o,r,s;return s=function(){n=!1,o&&(r.apply(i,o),o=!1)},r=function(){n?o=arguments:(t.apply(i,arguments),setTimeout(s,e),n=!0)}}function l(t,e,i){var n=e[1],o=e[0],r=n-o;return t===n&&i?t:((t-o)%r+r)%r+o}function h(){return!1}function c(t,e){return e=void 0===e?6:e,+(Math.round(t+"e+"+e)+"e-"+e)}function d(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function u(t){return d(t).split(/\s+/)}function p(t,e){for(var i in t.hasOwnProperty("options")||(t.options=t.options?n(t.options):{}),e)t.options[i]=e[i];return t.options}function f(t,e,i){var n=[];for(var o in t)n.push(encodeURIComponent(i?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(e&&-1!==e.indexOf("?")?"&":"?")+n.join("&")}var m=/\{ *([\w_-]+) *\}/g;function _(t,e){return t.replace(m,(function(t,i){var n=e[i];if(void 0===n)throw new Error("No value provided for variable "+t);return"function"==typeof n&&(n=n(e)),n}))}var g=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function v(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var y="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function b(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var w=0;function x(t){var e=+new Date,i=Math.max(0,16-(e-w));return w=e+i,window.setTimeout(t,i)}var C=window.requestAnimationFrame||b("RequestAnimationFrame")||x,z=window.cancelAnimationFrame||b("CancelAnimationFrame")||b("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function M(t,e,i){if(!i||C!==x)return C.call(window,o(t,e));t.call(e)}function S(t){t&&z.call(window,t)}var P=(Object.freeze||Object)({freeze:e,extend:i,create:n,bind:o,lastId:r,stamp:s,throttle:a,wrapNum:l,falseFn:h,formatNum:c,trim:d,splitWords:u,setOptions:p,getParamString:f,template:_,isArray:g,indexOf:v,emptyImageUrl:y,requestFn:C,cancelFn:z,requestAnimFrame:M,cancelAnimFrame:S});function k(){}k.extend=function(t){var e=function(){this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},o=e.__super__=this.prototype,r=n(o);for(var s in r.constructor=e,e.prototype=r,this)this.hasOwnProperty(s)&&"prototype"!==s&&"__super__"!==s&&(e[s]=this[s]);return t.statics&&(i(e,t.statics),delete t.statics),t.includes&&(function(t){if("undefined"!=typeof L&&L&&L.Mixin){t=g(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",(new Error).stack)}}(t.includes),i.apply(null,[r].concat(t.includes)),delete t.includes),r.options&&(t.options=i(n(r.options),t.options)),i(r,t),r._initHooks=[],r.callInitHooks=function(){if(!this._initHooksCalled){o.callInitHooks&&o.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,e=r._initHooks.length;t<e;t++)r._initHooks[t].call(this)}},e},k.include=function(t){return i(this.prototype,t),this},k.mergeOptions=function(t){return i(this.prototype.options,t),this},k.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i="function"==typeof t?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};var T={on:function(t,e,i){if("object"==typeof t)for(var n in t)this._on(n,t[n],e);else for(var o=0,r=(t=u(t)).length;o<r;o++)this._on(t[o],e,i);return this},off:function(t,e,i){if(t)if("object"==typeof t)for(var n in t)this._off(n,t[n],e);else for(var o=0,r=(t=u(t)).length;o<r;o++)this._off(t[o],e,i);else delete this._events;return this},_on:function(t,e,i){this._events=this._events||{};var n=this._events[t];n||(n=[],this._events[t]=n),i===this&&(i=void 0);for(var o={fn:e,ctx:i},r=n,s=0,a=r.length;s<a;s++)if(r[s].fn===e&&r[s].ctx===i)return;r.push(o)},_off:function(t,e,i){var n,o,r;if(this._events&&(n=this._events[t]))if(e){if(i===this&&(i=void 0),n)for(o=0,r=n.length;o<r;o++){var s=n[o];if(s.ctx===i&&s.fn===e)return s.fn=h,this._firingCount&&(this._events[t]=n=n.slice()),void n.splice(o,1)}}else{for(o=0,r=n.length;o<r;o++)n[o].fn=h;delete this._events[t]}},fire:function(t,e,n){if(!this.listens(t,n))return this;var o=i({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var r=this._events[t];if(r){this._firingCount=this._firingCount+1||1;for(var s=0,a=r.length;s<a;s++){var l=r[s];l.fn.call(l.ctx||this,o)}this._firingCount--}}return n&&this._propagateEvent(o),this},listens:function(t,e){var i=this._events&&this._events[t];if(i&&i.length)return!0;if(e)for(var n in this._eventParents)if(this._eventParents[n].listens(t,e))return!0;return!1},once:function(t,e,i){if("object"==typeof t){for(var n in t)this.once(n,t[n],e);return this}var r=o((function(){this.off(t,e,i).off(t,r,i)}),this);return this.on(t,e,i).on(t,r,i)},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[s(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[s(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,i({layer:t.target,propagatedFrom:t.target},t),!0)}};T.addEventListener=T.on,T.removeEventListener=T.clearAllEventListeners=T.off,T.addOneTimeEventListener=T.once,T.fireEvent=T.fire,T.hasEventListeners=T.listens;var E=k.extend(T);function O(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var A=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};function H(t,e,i){return t instanceof O?t:g(t)?new O(t[0],t[1]):null==t?t:"object"==typeof t&&"x"in t&&"y"in t?new O(t.x,t.y):new O(t,e,i)}function I(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}function N(t,e){return!t||t instanceof I?t:new I(t,e)}function j(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}function R(t,e){return t instanceof j?t:new j(t,e)}function V(t,e,i){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,void 0!==i&&(this.alt=+i)}function B(t,e,i){return t instanceof V?t:g(t)&&"object"!=typeof t[0]?3===t.length?new V(t[0],t[1],t[2]):2===t.length?new V(t[0],t[1]):null:null==t?t:"object"==typeof t&&"lat"in t?new V(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===e?null:new V(t,e,i)}O.prototype={clone:function(){return new O(this.x,this.y)},add:function(t){return this.clone()._add(H(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(H(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new O(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new O(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=A(this.x),this.y=A(this.y),this},distanceTo:function(t){var e=(t=H(t)).x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return(t=H(t)).x===this.x&&t.y===this.y},contains:function(t){return t=H(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+c(this.x)+", "+c(this.y)+")"}},I.prototype={extend:function(t){return t=H(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new O((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new O(this.min.x,this.max.y)},getTopRight:function(){return new O(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return(t="number"==typeof t[0]||t instanceof O?H(t):N(t))instanceof I?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=N(t);var e=this.min,i=this.max,n=t.min,o=t.max,r=o.x>=e.x&&n.x<=i.x,s=o.y>=e.y&&n.y<=i.y;return r&&s},overlaps:function(t){t=N(t);var e=this.min,i=this.max,n=t.min,o=t.max,r=o.x>e.x&&n.x<i.x,s=o.y>e.y&&n.y<i.y;return r&&s},isValid:function(){return!(!this.min||!this.max)}},j.prototype={extend:function(t){var e,i,n=this._southWest,o=this._northEast;if(t instanceof V)e=t,i=t;else{if(!(t instanceof j))return t?this.extend(B(t)||R(t)):this;if(e=t._southWest,i=t._northEast,!e||!i)return this}return n||o?(n.lat=Math.min(e.lat,n.lat),n.lng=Math.min(e.lng,n.lng),o.lat=Math.max(i.lat,o.lat),o.lng=Math.max(i.lng,o.lng)):(this._southWest=new V(e.lat,e.lng),this._northEast=new V(i.lat,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,o=Math.abs(e.lng-i.lng)*t;return new j(new V(e.lat-n,e.lng-o),new V(i.lat+n,i.lng+o))},getCenter:function(){return new V((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new V(this.getNorth(),this.getWest())},getSouthEast:function(){return new V(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof V||"lat"in t?B(t):R(t);var e,i,n=this._southWest,o=this._northEast;return t instanceof j?(e=t.getSouthWest(),i=t.getNorthEast()):e=i=t,e.lat>=n.lat&&i.lat<=o.lat&&e.lng>=n.lng&&i.lng<=o.lng},intersects:function(t){t=R(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),r=o.lat>=e.lat&&n.lat<=i.lat,s=o.lng>=e.lng&&n.lng<=i.lng;return r&&s},overlaps:function(t){t=R(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),r=o.lat>e.lat&&n.lat<i.lat,s=o.lng>e.lng&&n.lng<i.lng;return r&&s},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return!!t&&(t=R(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e))},isValid:function(){return!(!this._southWest||!this._northEast)}},V.prototype={equals:function(t,e){return!!t&&(t=B(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(void 0===e?1e-9:e))},toString:function(t){return"LatLng("+c(this.lat,t)+", "+c(this.lng,t)+")"},distanceTo:function(t){return F.distance(this,B(t))},wrap:function(){return F.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return R([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new V(this.lat,this.lng,this.alt)}};var D,Z={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,i=this.scale(t);return new I(this.transformation.transform(e.min,i),this.transformation.transform(e.max,i))},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?l(t.lng,this.wrapLng,!0):t.lng;return new V(this.wrapLat?l(t.lat,this.wrapLat,!0):t.lat,e,t.alt)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,o=e.lng-i.lng;if(0===n&&0===o)return t;var r=t.getSouthWest(),s=t.getNorthEast();return new j(new V(r.lat-n,r.lng-o),new V(s.lat-n,s.lng-o))}},F=i({},Z,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,n=t.lat*i,o=e.lat*i,r=Math.sin((e.lat-t.lat)*i/2),s=Math.sin((e.lng-t.lng)*i/2),a=r*r+Math.cos(n)*Math.cos(o)*s*s,l=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));return this.R*l}}),U={R:6378137,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),o=Math.sin(n*e);return new O(this.R*t.lng*e,this.R*Math.log((1+o)/(1-o))/2)},unproject:function(t){var e=180/Math.PI;return new V((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:(D=6378137*Math.PI,new I([-D,-D],[D,D]))};function q(t,e,i,n){if(g(t))return this._a=t[0],this._b=t[1],this._c=t[2],void(this._d=t[3]);this._a=t,this._b=e,this._c=i,this._d=n}function G(t,e,i,n){return new q(t,e,i,n)}q.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new O((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};var W=i({},F,{code:"EPSG:3857",projection:U,transformation:function(){var t=.5/(Math.PI*U.R);return G(t,.5,-t,.5)}()}),$=i({},W,{code:"EPSG:900913"});function J(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Y(t,e){var i,n,o,r,s,a,l="";for(i=0,o=t.length;i<o;i++){for(n=0,r=(s=t[i]).length;n<r;n++)l+=(n?"L":"M")+(a=s[n]).x+" "+a.y;l+=e?St?"z":"x":""}return l||"M0 0"}var K=document.documentElement.style,X="ActiveXObject"in window,Q=X&&!document.addEventListener,tt="msLaunchUri"in navigator&&!("documentMode"in document),et=kt("webkit"),it=kt("android"),nt=kt("android 2")||kt("android 3"),ot=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),rt=it&&kt("Google")&&ot<537&&!("AudioNode"in window),st=!!window.opera,at=kt("chrome"),lt=kt("gecko")&&!et&&!st&&!X,ht=!at&&kt("safari"),ct=kt("phantom"),dt="OTransition"in K,ut=0===navigator.platform.indexOf("Win"),pt=X&&"transition"in K,ft="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!nt,mt="MozPerspective"in K,_t=!window.L_DISABLE_3D&&(pt||ft||mt)&&!dt&&!ct,gt="undefined"!=typeof orientation||kt("mobile"),vt=gt&&et,yt=gt&&ft,bt=!window.PointerEvent&&window.MSPointerEvent,wt=!(!window.PointerEvent&&!bt),xt=!window.L_NO_TOUCH&&(wt||"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),Lt=gt&&st,Ct=gt&&lt,zt=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Mt=!!document.createElement("canvas").getContext,St=!(!document.createElementNS||!J("svg").createSVGRect),Pt=!St&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&"object"==typeof e.adj}catch(t){return!1}}();function kt(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var Tt=(Object.freeze||Object)({ie:X,ielt9:Q,edge:tt,webkit:et,android:it,android23:nt,androidStock:rt,opera:st,chrome:at,gecko:lt,safari:ht,phantom:ct,opera12:dt,win:ut,ie3d:pt,webkit3d:ft,gecko3d:mt,any3d:_t,mobile:gt,mobileWebkit:vt,mobileWebkit3d:yt,msPointer:bt,pointer:wt,touch:xt,mobileOpera:Lt,mobileGecko:Ct,retina:zt,canvas:Mt,svg:St,vml:Pt}),Et=bt?"MSPointerDown":"pointerdown",Ot=bt?"MSPointerMove":"pointermove",At=bt?"MSPointerUp":"pointerup",Ht=bt?"MSPointerCancel":"pointercancel",It=["INPUT","SELECT","OPTION"],Nt={},jt=!1,Rt=0;function Vt(t,e,i,n){return"touchstart"===e?function(t,e,i){var n=o((function(t){if("mouse"!==t.pointerType&&t.MSPOINTER_TYPE_MOUSE&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE){if(!(It.indexOf(t.target.tagName)<0))return;Ne(t)}Ft(t,e)}));t["_leaflet_touchstart"+i]=n,t.addEventListener(Et,n,!1),jt||(document.documentElement.addEventListener(Et,Bt,!0),document.documentElement.addEventListener(Ot,Dt,!0),document.documentElement.addEventListener(At,Zt,!0),document.documentElement.addEventListener(Ht,Zt,!0),jt=!0)}(t,i,n):"touchmove"===e?function(t,e,i){var n=function(t){(t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&"mouse"!==t.pointerType||0!==t.buttons)&&Ft(t,e)};t["_leaflet_touchmove"+i]=n,t.addEventListener(Ot,n,!1)}(t,i,n):"touchend"===e&&function(t,e,i){var n=function(t){Ft(t,e)};t["_leaflet_touchend"+i]=n,t.addEventListener(At,n,!1),t.addEventListener(Ht,n,!1)}(t,i,n),this}function Bt(t){Nt[t.pointerId]=t,Rt++}function Dt(t){Nt[t.pointerId]&&(Nt[t.pointerId]=t)}function Zt(t){delete Nt[t.pointerId],Rt--}function Ft(t,e){for(var i in t.touches=[],Nt)t.touches.push(Nt[i]);t.changedTouches=[t],e(t)}var Ut=bt?"MSPointerDown":wt?"pointerdown":"touchstart",qt=bt?"MSPointerUp":wt?"pointerup":"touchend",Gt="_leaflet_";function Wt(t,e,i){var n,o,r=!1,s=250;function a(t){var e;if(wt){if(!tt||"mouse"===t.pointerType)return;e=Rt}else e=t.touches.length;if(!(e>1)){var i=Date.now(),a=i-(n||i);o=t.touches?t.touches[0]:t,r=a>0&&a<=s,n=i}}function l(t){if(r&&!o.cancelBubble){if(wt){if(!tt||"mouse"===t.pointerType)return;var i,s,a={};for(s in o)i=o[s],a[s]=i&&i.bind?i.bind(o):i;o=a}o.type="dblclick",o.button=0,e(o),n=null}}return t[Gt+Ut+i]=a,t[Gt+qt+i]=l,t[Gt+"dblclick"+i]=e,t.addEventListener(Ut,a,!1),t.addEventListener(qt,l,!1),t.addEventListener("dblclick",e,!1),this}function $t(t,e){var i=t[Gt+Ut+e],n=t[Gt+qt+e],o=t[Gt+"dblclick"+e];return t.removeEventListener(Ut,i,!1),t.removeEventListener(qt,n,!1),tt||t.removeEventListener("dblclick",o,!1),this}var Jt,Yt,Kt,Xt,Qt,te=_e(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ee=_e(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),ie="webkitTransition"===ee||"OTransition"===ee?ee+"End":"transitionend";function ne(t){return"string"==typeof t?document.getElementById(t):t}function oe(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!i||"auto"===i)&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);i=n?n[e]:null}return"auto"===i?null:i}function re(t,e,i){var n=document.createElement(t);return n.className=e||"",i&&i.appendChild(n),n}function se(t){var e=t.parentNode;e&&e.removeChild(t)}function ae(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function le(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function he(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function ce(t,e){if(void 0!==t.classList)return t.classList.contains(e);var i=fe(t);return i.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(i)}function de(t,e){if(void 0!==t.classList)for(var i=u(e),n=0,o=i.length;n<o;n++)t.classList.add(i[n]);else if(!ce(t,e)){var r=fe(t);pe(t,(r?r+" ":"")+e)}}function ue(t,e){void 0!==t.classList?t.classList.remove(e):pe(t,d((" "+fe(t)+" ").replace(" "+e+" "," ")))}function pe(t,e){void 0===t.className.baseVal?t.className=e:t.className.baseVal=e}function fe(t){return t.correspondingElement&&(t=t.correspondingElement),void 0===t.className.baseVal?t.className:t.className.baseVal}function me(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&function(t,e){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch(t){if(1===e)return}e=Math.round(100*e),i?(i.Enabled=100!==e,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}(t,e)}function _e(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function ge(t,e,i){var n=e||new O(0,0);t.style[te]=(pt?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(i?" scale("+i+")":"")}function ve(t,e){t._leaflet_pos=e,_t?ge(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function ye(t){return t._leaflet_pos||new O(0,0)}if("onselectstart"in document)Jt=function(){Pe(window,"selectstart",Ne)},Yt=function(){Te(window,"selectstart",Ne)};else{var be=_e(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Jt=function(){if(be){var t=document.documentElement.style;Kt=t[be],t[be]="none"}},Yt=function(){be&&(document.documentElement.style[be]=Kt,Kt=void 0)}}function we(){Pe(window,"dragstart",Ne)}function xe(){Te(window,"dragstart",Ne)}function Le(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(Ce(),Xt=t,Qt=t.style.outline,t.style.outline="none",Pe(window,"keydown",Ce))}function Ce(){Xt&&(Xt.style.outline=Qt,Xt=void 0,Qt=void 0,Te(window,"keydown",Ce))}function ze(t){do{t=t.parentNode}while(!(t.offsetWidth&&t.offsetHeight||t===document.body));return t}function Me(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var Se=(Object.freeze||Object)({TRANSFORM:te,TRANSITION:ee,TRANSITION_END:ie,get:ne,getStyle:oe,create:re,remove:se,empty:ae,toFront:le,toBack:he,hasClass:ce,addClass:de,removeClass:ue,setClass:pe,getClass:fe,setOpacity:me,testProp:_e,setTransform:ge,setPosition:ve,getPosition:ye,disableTextSelection:Jt,enableTextSelection:Yt,disableImageDrag:we,enableImageDrag:xe,preventOutline:Le,restoreOutline:Ce,getSizedParentNode:ze,getScale:Me});function Pe(t,e,i,n){if("object"==typeof e)for(var o in e)Ee(t,o,e[o],i);else for(var r=0,s=(e=u(e)).length;r<s;r++)Ee(t,e[r],i,n);return this}var ke="_leaflet_events";function Te(t,e,i,n){if("object"==typeof e)for(var o in e)Oe(t,o,e[o],i);else if(e)for(var r=0,s=(e=u(e)).length;r<s;r++)Oe(t,e[r],i,n);else{for(var a in t[ke])Oe(t,a,t[ke][a]);delete t[ke]}return this}function Ee(t,e,i,n){var o=e+s(i)+(n?"_"+s(n):"");if(t[ke]&&t[ke][o])return this;var r=function(e){return i.call(n||t,e||window.event)},a=r;wt&&0===e.indexOf("touch")?Vt(t,e,r,o):!xt||"dblclick"!==e||!Wt||wt&&at?"addEventListener"in t?"mousewheel"===e?t.addEventListener("onwheel"in t?"wheel":"mousewheel",r,!1):"mouseenter"===e||"mouseleave"===e?(r=function(e){e=e||window.event,qe(t,e)&&a(e)},t.addEventListener("mouseenter"===e?"mouseover":"mouseout",r,!1)):("click"===e&&it&&(r=function(t){!function(t,e){var i=t.timeStamp||t.originalEvent&&t.originalEvent.timeStamp,n=De&&i-De;n&&n>100&&n<500||t.target._simulatedClick&&!t._simulated?je(t):(De=i,e(t))}(t,a)}),t.addEventListener(e,r,!1)):"attachEvent"in t&&t.attachEvent("on"+e,r):Wt(t,r,o),t[ke]=t[ke]||{},t[ke][o]=r}function Oe(t,e,i,n){var o=e+s(i)+(n?"_"+s(n):""),r=t[ke]&&t[ke][o];if(!r)return this;wt&&0===e.indexOf("touch")?function(t,e,i){var n=t["_leaflet_"+e+i];"touchstart"===e?t.removeEventListener(Et,n,!1):"touchmove"===e?t.removeEventListener(Ot,n,!1):"touchend"===e&&(t.removeEventListener(At,n,!1),t.removeEventListener(Ht,n,!1))}(t,e,o):!xt||"dblclick"!==e||!$t||wt&&at?"removeEventListener"in t?"mousewheel"===e?t.removeEventListener("onwheel"in t?"wheel":"mousewheel",r,!1):t.removeEventListener("mouseenter"===e?"mouseover":"mouseleave"===e?"mouseout":e,r,!1):"detachEvent"in t&&t.detachEvent("on"+e,r):$t(t,o),t[ke][o]=null}function Ae(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,Ue(t),this}function He(t){return Ee(t,"mousewheel",Ae),this}function Ie(t){return Pe(t,"mousedown touchstart dblclick",Ae),Ee(t,"click",Fe),this}function Ne(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function je(t){return Ne(t),Ae(t),this}function Re(t,e){if(!e)return new O(t.clientX,t.clientY);var i=Me(e),n=i.boundingClientRect;return new O((t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)}var Ve=ut&&at?2*window.devicePixelRatio:lt?window.devicePixelRatio:1;function Be(t){return tt?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/Ve:t.deltaY&&1===t.deltaMode?20*-t.deltaY:t.deltaY&&2===t.deltaMode?60*-t.deltaY:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?20*-t.detail:t.detail?t.detail/-32765*60:0}var De,Ze={};function Fe(t){Ze[t.type]=!0}function Ue(t){var e=Ze[t.type];return Ze[t.type]=!1,e}function qe(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch(t){return!1}return i!==t}var Ge=(Object.freeze||Object)({on:Pe,off:Te,stopPropagation:Ae,disableScrollPropagation:He,disableClickPropagation:Ie,preventDefault:Ne,stop:je,getMousePosition:Re,getWheelDelta:Be,fakeStop:Fe,skipped:Ue,isExternalTarget:qe,addListener:Pe,removeListener:Te}),We=E.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=ye(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=M(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=1e3*this._duration;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t));e&&i._round(),ve(this._el,i),this.fire("step")},_complete:function(){S(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),$e=E.extend({options:{crs:W,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=p(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=o(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),void 0!==e.zoom&&(this._zoom=this._limitZoom(e.zoom)),e.center&&void 0!==e.zoom&&this.setView(B(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ee&&_t&&!Lt&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),Pe(this._proxy,ie,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,n){return e=void 0===e?this._zoom:this._limitZoom(e),t=this._limitCenter(B(t),e,this.options.maxBounds),n=n||{},this._stop(),this._loaded&&!n.reset&&!0!==n&&(void 0!==n.animate&&(n.zoom=i({animate:n.animate},n.zoom),n.pan=i({animate:n.animate,duration:n.duration},n.pan)),this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan))?(clearTimeout(this._sizeTimer),this):(this._resetView(t,e),this)},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(_t?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(_t?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),o=this.getSize().divideBy(2),r=(t instanceof O?t:this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1-1/n),s=this.containerPointToLatLng(o.add(r));return this.setView(s,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():R(t);var i=H(e.paddingTopLeft||e.padding||[0,0]),n=H(e.paddingBottomRight||e.padding||[0,0]),o=this.getBoundsZoom(t,!1,i.add(n));if((o="number"==typeof e.maxZoom?Math.min(e.maxZoom,o):o)===1/0)return{center:t.getCenter(),zoom:o};var r=n.subtract(i).divideBy(2),s=this.project(t.getSouthWest(),o),a=this.project(t.getNorthEast(),o);return{center:this.unproject(s.add(a).divideBy(2).add(r),o),zoom:o}},fitBounds:function(t,e){if(!(t=R(t)).isValid())throw new Error("Bounds are not valid.");var i=this._getBoundsCenterZoom(t,e);return this.setView(i.center,i.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(e=e||{},!(t=H(t).round()).x&&!t.y)return this.fire("moveend");if(!0!==e.animate&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new We,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),!1!==e.animate){de(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,i){if(!1===(i=i||{}).animate||!_t)return this.setView(t,e,i);this._stop();var n=this.project(this.getCenter()),o=this.project(t),r=this.getSize(),s=this._zoom;t=B(t),e=void 0===e?s:e;var a=Math.max(r.x,r.y),l=a*this.getZoomScale(s,e),h=o.distanceTo(n)||1,c=1.42,d=c*c;function u(t){var e=(l*l-a*a+(t?-1:1)*d*d*h*h)/(2*(t?l:a)*d*h),i=Math.sqrt(e*e+1)-e;return i<1e-9?-18:Math.log(i)}function p(t){return(Math.exp(t)-Math.exp(-t))/2}function f(t){return(Math.exp(t)+Math.exp(-t))/2}var m=u(0);function _(t){return a*(f(m)*(p(e=m+c*t)/f(e))-p(m))/d;var e}var g=Date.now(),v=(u(1)-m)/c,y=i.duration?1e3*i.duration:1e3*v*.8;return this._moveStart(!0,i.noMoveStart),function i(){var r=(Date.now()-g)/y,l=function(t){return 1-Math.pow(1-t,1.5)}(r)*v;r<=1?(this._flyToFrame=M(i,this),this._move(this.unproject(n.add(o.subtract(n).multiplyBy(_(l)/h)),s),this.getScaleZoom(a/function(t){return a*(f(m)/f(m+c*t))}(l),s),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}.call(this),this},flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e);return this.flyTo(i.center,i.zoom,e)},setMaxBounds:function(t){return(t=R(t)).isValid()?(this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this.off("moveend",this._panInsideMaxBounds))},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),n=this._limitCenter(i,this._zoom,R(t));return i.equals(n)||this.panTo(n,e),this._enforcingBounds=!1,this},panInside:function(t,e){var i=H((e=e||{}).paddingTopLeft||e.padding||[0,0]),n=H(e.paddingBottomRight||e.padding||[0,0]),o=this.getCenter(),r=this.project(o),s=this.project(t),a=this.getPixelBounds(),l=a.getSize().divideBy(2),h=N([a.min.add(i),a.max.subtract(n)]);if(!h.contains(s)){this._enforcingBounds=!0;var c=r.subtract(s),d=H(s.x+c.x,s.y+c.y);(s.x<h.min.x||s.x>h.max.x)&&(d.x=r.x-c.x,c.x>0?d.x+=l.x-i.x:d.x-=l.x-n.x),(s.y<h.min.y||s.y>h.max.y)&&(d.y=r.y-c.y,c.y>0?d.y+=l.y-i.y:d.y-=l.y-n.y),this.panTo(this.unproject(d),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=i({animate:!1,pan:!0},!0===t?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var n=this.getSize(),r=e.divideBy(2).round(),s=n.divideBy(2).round(),a=r.subtract(s);return a.x||a.y?(t.animate&&t.pan?this.panBy(a):(t.pan&&this._rawPanBy(a),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(o(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:n})):this},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=i({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=o(this._handleGeolocationResponse,this),n=o(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,n,t):navigator.geolocation.getCurrentPosition(e,n,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var e=t.code,i=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})},_handleGeolocationResponse:function(t){var e=new V(t.coords.latitude,t.coords.longitude),i=e.toBounds(2*t.coords.accuracy),n=this._locateOptions;if(n.setView){var o=this.getBoundsZoom(i);this.setView(e,n.maxZoom?Math.min(o,n.maxZoom):o)}var r={latlng:e,bounds:i,timestamp:t.timestamp};for(var s in t.coords)"number"==typeof t.coords[s]&&(r[s]=t.coords[s]);this.fire("locationfound",r)},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){if(this._initEvents(!0),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch(t){this._container._leaflet_id=void 0,this._containerId=void 0}var t;for(t in void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),se(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(S(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload"),this._layers)this._layers[t].remove();for(t in this._panes)se(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var i=re("div","leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),e||this._mapPane);return t&&(this._panes[t]=i),i},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds();return new j(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))},getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=R(t),i=H(i||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),r=this.getMaxZoom(),s=t.getNorthWest(),a=t.getSouthEast(),l=this.getSize().subtract(i),h=N(this.project(a,n),this.project(s,n)).getSize(),c=_t?this.options.zoomSnap:1,d=l.x/h.x,u=l.y/h.y,p=e?Math.max(d,u):Math.min(d,u);return n=this.getScaleZoom(p,n),c&&(n=Math.round(n/(c/100))*(c/100),n=e?Math.ceil(n/c)*c:Math.floor(n/c)*c),Math.max(o,Math.min(r,n))},getSize:function(){return this._size&&!this._sizeChanged||(this._size=new O(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e);return new I(i,i.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},getPane:function(t){return"string"==typeof t?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=void 0===e?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs;e=void 0===e?this._zoom:e;var n=i.zoom(t*i.scale(e));return isNaN(n)?1/0:n},project:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.latLngToPoint(B(t),e)},unproject:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.pointToLatLng(H(t),e)},layerPointToLatLng:function(t){var e=H(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){return this.project(B(t))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(B(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(R(t))},distance:function(t,e){return this.options.crs.distance(B(t),B(e))},containerPointToLayerPoint:function(t){return H(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return H(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(H(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(B(t)))},mouseEventToContainerPoint:function(t){return Re(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=ne(t);if(!e)throw new Error("Map container not found.");if(e._leaflet_id)throw new Error("Map container is already initialized.");Pe(e,"scroll",this._onScroll,this),this._containerId=s(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&_t,de(t,"leaflet-container"+(xt?" leaflet-touch":"")+(zt?" leaflet-retina":"")+(Q?" leaflet-oldie":"")+(ht?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=oe(t,"position");"absolute"!==e&&"relative"!==e&&"fixed"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),ve(this._mapPane,new O(0,0)),this.createPane("tilePane"),this.createPane("shadowPane"),this.createPane("overlayPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(de(t.markerPane,"leaflet-zoom-hide"),de(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e){ve(this._mapPane,new O(0,0));var i=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var n=this._zoom!==e;this._moveStart(n,!1)._move(t,e)._moveEnd(n),this.fire("viewreset"),i&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i){void 0===e&&(e=this._zoom);var n=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),(n||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return S(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){ve(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[s(this._container)]=this;var e=t?Te:Pe;e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),_t&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){S(this._resizeRequest),this._resizeRequest=M((function(){this.invalidateSize({debounceMoveend:!0})}),this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i,n=[],o="mouseout"===e||"mouseover"===e,r=t.target||t.srcElement,a=!1;r;){if((i=this._targets[s(r)])&&("click"===e||"preclick"===e)&&!t._simulated&&this._draggableMoved(i)){a=!0;break}if(i&&i.listens(e,!0)){if(o&&!qe(r,t))break;if(n.push(i),o)break}if(r===this._container)break;r=r.parentNode}return n.length||a||o||!qe(r,t)||(n=[this]),n},_handleDOMEvent:function(t){if(this._loaded&&!Ue(t)){var e=t.type;"mousedown"!==e&&"keypress"!==e&&"keyup"!==e&&"keydown"!==e||Le(t.target||t.srcElement),this._fireDOMEvent(t,e)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,n){if("click"===t.type){var o=i({},t);o.type="preclick",this._fireDOMEvent(o,o.type,n)}if(!t._stopped&&(n=(n||[]).concat(this._findEventTargets(t,e))).length){var r=n[0];"contextmenu"===e&&r.listens(e,!0)&&Ne(t);var s={originalEvent:t};if("keypress"!==t.type&&"keydown"!==t.type&&"keyup"!==t.type){var a=r.getLatLng&&(!r._radius||r._radius<=10);s.containerPoint=a?this.latLngToContainerPoint(r.getLatLng()):this.mouseEventToContainerPoint(t),s.layerPoint=this.containerPointToLayerPoint(s.containerPoint),s.latlng=a?r.getLatLng():this.layerPointToLatLng(s.layerPoint)}for(var l=0;l<n.length;l++)if(n[l].fire(e,s,!0),s.originalEvent._stopped||!1===n[l].options.bubblingMouseEvents&&-1!==v(this._mouseEvents,e))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return ye(this._mapPane)||new O(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){return(t&&void 0!==e?this._getNewPixelOrigin(t,e):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return N([this.project(t.getSouthWest(),e)._subtract(n),this.project(t.getNorthWest(),e)._subtract(n),this.project(t.getSouthEast(),e)._subtract(n),this.project(t.getNorthEast(),e)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),o=this.getSize().divideBy(2),r=new I(n.subtract(o),n.add(o)),s=this._getBoundsOffset(r,i,e);return s.round().equals([0,0])?t:this.unproject(n.add(s),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new I(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=N(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),o=n.min.subtract(t.min),r=n.max.subtract(t.max);return new O(this._rebound(o.x,-r.x),this._rebound(o.y,-r.y))},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=_t?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){ue(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._trunc();return!(!0!==(e&&e.animate)&&!this.getSize().contains(i)||(this.panBy(i,e),0))},_createAnimProxy:function(){var t=this._proxy=re("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",(function(t){var e=te,i=this._proxy.style[e];ge(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),i===this._proxy.style[e]&&this._animatingZoom&&this._onZoomTransitionEnd()}),this),this.on("load moveend",(function(){var t=this.getCenter(),e=this.getZoom();ge(this._proxy,this.project(t,e),this.getZoomScale(e,1))}),this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){se(this._proxy),delete this._proxy},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||!1===i.animate||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),o=this._getCenterOffset(t)._divideBy(1-1/n);return!(!0!==i.animate&&!this.getSize().contains(o)||(M((function(){this._moveStart(!0,!1)._animateZoom(t,e,!0)}),this),0))},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,de(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),setTimeout(o(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&ue(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom),M((function(){this._moveEnd(!0)}),this))}}),Je=k.extend({options:{position:"topright"},initialize:function(t){p(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return de(e,"leaflet-control"),-1!==i.indexOf("bottom")?n.insertBefore(e,n.firstChild):n.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(se(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),Ye=function(t){return new Je(t)};$e.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",i=this._controlContainer=re("div",e+"control-container",this._container);function n(n,o){var r=e+n+" "+e+o;t[n+o]=re("div",r,i)}n("top","left"),n("top","right"),n("bottom","left"),n("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)se(this._controlCorners[t]);se(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Ke=Je.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){for(var n in p(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return Je.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(s(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){de(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(de(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):ue(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return ue(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=re("div",t),i=this.options.collapsed;e.setAttribute("aria-haspopup",!0),Ie(e),He(e);var n=this._section=re("section",t+"-list");i&&(this._map.on("click",this.collapse,this),it||Pe(e,{mouseenter:this.expand,mouseleave:this.collapse},this));var o=this._layersLink=re("a",t+"-toggle",e);o.href="#",o.title="Layers",xt?(Pe(o,"click",je),Pe(o,"click",this.expand,this)):Pe(o,"focus",this.expand,this),i||this.expand(),this._baseLayersList=re("div",t+"-base",n),this._separator=re("div",t+"-separator",n),this._overlaysList=re("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&s(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(o((function(t,e){return this.options.sortFunction(t.layer,e.layer,t.name,e.name)}),this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;ae(this._baseLayersList),ae(this._overlaysList),this._layerControlInputs=[];var t,e,i,n,o=0;for(i=0;i<this._layers.length;i++)n=this._layers[i],this._addItem(n),e=e||n.overlay,t=t||!n.overlay,o+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&o>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(s(t.target)),i=e.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;i&&this._map.fire(i,e)},_createRadioElement:function(t,e){var i='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=i,n.firstChild},_addItem:function(t){var e,i=document.createElement("label"),n=this._map.hasLayer(t.layer);t.overlay?((e=document.createElement("input")).type="checkbox",e.className="leaflet-control-layers-selector",e.defaultChecked=n):e=this._createRadioElement("leaflet-base-layers_"+s(this),n),this._layerControlInputs.push(e),e.layerId=s(t.layer),Pe(e,"click",this._onInputClick,this);var o=document.createElement("span");o.innerHTML=" "+t.name;var r=document.createElement("div");return i.appendChild(r),r.appendChild(e),r.appendChild(o),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(i),this._checkDisabledLayers(),i},_onInputClick:function(){var t,e,i=this._layerControlInputs,n=[],o=[];this._handlingClick=!0;for(var r=i.length-1;r>=0;r--)t=i[r],e=this._getLayer(t.layerId).layer,t.checked?n.push(e):t.checked||o.push(e);for(r=0;r<o.length;r++)this._map.hasLayer(o[r])&&this._map.removeLayer(o[r]);for(r=0;r<n.length;r++)this._map.hasLayer(n[r])||this._map.addLayer(n[r]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var t,e,i=this._layerControlInputs,n=this._map.getZoom(),o=i.length-1;o>=0;o--)t=i[o],e=this._getLayer(t.layerId).layer,t.disabled=void 0!==e.options.minZoom&&n<e.options.minZoom||void 0!==e.options.maxZoom&&n>e.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expand:function(){return this.expand()},_collapse:function(){return this.collapse()}}),Xe=Je.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"&#x2212;",zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=re("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,o){var r=re("a",i,n);return r.innerHTML=t,r.href="#",r.title=e,r.setAttribute("role","button"),r.setAttribute("aria-label",e),Ie(r),Pe(r,"click",je),Pe(r,"click",o,this),Pe(r,"click",this._refocusOnMap,this),r},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";ue(this._zoomInButton,e),ue(this._zoomOutButton,e),(this._disabled||t._zoom===t.getMinZoom())&&de(this._zoomOutButton,e),(this._disabled||t._zoom===t.getMaxZoom())&&de(this._zoomInButton,e)}});$e.mergeOptions({zoomControl:!0}),$e.addInitHook((function(){this.options.zoomControl&&(this.zoomControl=new Xe,this.addControl(this.zoomControl))}));var Qe=Je.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e=re("div","leaflet-control-scale"),i=this.options;return this._addScales(i,"leaflet-control-scale-line",e),t.on(i.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),e},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=re("div",e,i)),t.imperial&&(this._iScale=re("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),i=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,i,e/t)},_updateImperial:function(t){var e,i,n,o=3.2808399*t;o>5280?(e=o/5280,i=this._getRoundNum(e),this._updateScale(this._iScale,i+" mi",i/e)):(n=this._getRoundNum(o),this._updateScale(this._iScale,n+" ft",n/o))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return e*(i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1)}}),ti=Je.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){p(this,t),this._attributions={}},onAdd:function(t){for(var e in t.attributionControl=this,this._container=re("div","leaflet-control-attribution"),Ie(this._container),t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),this._container},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(" | ")}}});$e.mergeOptions({attributionControl:!0}),$e.addInitHook((function(){this.options.attributionControl&&(new ti).addTo(this)})),Je.Layers=Ke,Je.Zoom=Xe,Je.Scale=Qe,Je.Attribution=ti,Ye.layers=function(t,e,i){return new Ke(t,e,i)},Ye.zoom=function(t){return new Xe(t)},Ye.scale=function(t){return new Qe(t)},Ye.attribution=function(t){return new ti(t)};var ei=k.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});ei.addTo=function(t,e){return t.addHandler(e,this),this};var ii,ni={Events:T},oi=xt?"touchstart mousedown":"mousedown",ri={mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},si={mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"},ai=E.extend({options:{clickTolerance:3},initialize:function(t,e,i,n){p(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(Pe(this._dragStartTarget,oi,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(ai._dragging===this&&this.finishDrag(),Te(this._dragStartTarget,oi,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(!t._simulated&&this._enabled&&(this._moved=!1,!ce(this._element,"leaflet-zoom-anim")&&!(ai._dragging||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||(ai._dragging=this,this._preventOutline&&Le(this._element),we(),Jt(),this._moving)))){this.fire("down");var e=t.touches?t.touches[0]:t,i=ze(this._element);this._startPoint=new O(e.clientX,e.clientY),this._parentScale=Me(i),Pe(document,si[t.type],this._onMove,this),Pe(document,ri[t.type],this._onUp,this)}},_onMove:function(t){if(!t._simulated&&this._enabled)if(t.touches&&t.touches.length>1)this._moved=!0;else{var e=t.touches&&1===t.touches.length?t.touches[0]:t,i=new O(e.clientX,e.clientY)._subtract(this._startPoint);(i.x||i.y)&&(Math.abs(i.x)+Math.abs(i.y)<this.options.clickTolerance||(i.x/=this._parentScale.x,i.y/=this._parentScale.y,Ne(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=ye(this._element).subtract(i),de(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),de(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(i),this._moving=!0,S(this._animRequest),this._lastEvent=t,this._animRequest=M(this._updatePosition,this,!0)))}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),ve(this._element,this._newPos),this.fire("drag",t)},_onUp:function(t){!t._simulated&&this._enabled&&this.finishDrag()},finishDrag:function(){for(var t in ue(document.body,"leaflet-dragging"),this._lastTarget&&(ue(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),si)Te(document,si[t],this._onMove,this),Te(document,ri[t],this._onUp,this);xe(),Yt(),this._moved&&this._moving&&(S(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1,ai._dragging=!1}});function li(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=function(t,e){var i=t.length,n=new(typeof Uint8Array!=void 0+""?Uint8Array:Array)(i);n[0]=n[i-1]=1,function t(e,i,n,o,r){var s,a,l,h=0;for(a=o+1;a<=r-1;a++)(l=pi(e[a],e[o],e[r],!0))>h&&(s=a,h=l);h>n&&(i[s]=1,t(e,i,n,o,s),t(e,i,n,s,r))}(t,n,e,0,i-1);var o,r=[];for(o=0;o<i;o++)n[o]&&r.push(t[o]);return r}(t=function(t,e){for(var i=[t[0]],n=1,o=0,r=t.length;n<r;n++)s=t[n],a=t[o],l=void 0,h=void 0,l=a.x-s.x,h=a.y-s.y,l*l+h*h>e&&(i.push(t[n]),o=n);var s,a,l,h;return o<r-1&&i.push(t[r-1]),i}(t,i),i)}function hi(t,e,i){return Math.sqrt(pi(t,e,i,!0))}function ci(t,e,i,n,o){var r,s,a,l=n?ii:ui(t,i),h=ui(e,i);for(ii=h;;){if(!(l|h))return[t,e];if(l&h)return!1;a=ui(s=di(t,e,r=l||h,i,o),i),r===l?(t=s,l=a):(e=s,h=a)}}function di(t,e,i,n,o){var r,s,a=e.x-t.x,l=e.y-t.y,h=n.min,c=n.max;return 8&i?(r=t.x+a*(c.y-t.y)/l,s=c.y):4&i?(r=t.x+a*(h.y-t.y)/l,s=h.y):2&i?(r=c.x,s=t.y+l*(c.x-t.x)/a):1&i&&(r=h.x,s=t.y+l*(h.x-t.x)/a),new O(r,s,o)}function ui(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function pi(t,e,i,n){var o,r=e.x,s=e.y,a=i.x-r,l=i.y-s,h=a*a+l*l;return h>0&&((o=((t.x-r)*a+(t.y-s)*l)/h)>1?(r=i.x,s=i.y):o>0&&(r+=a*o,s+=l*o)),a=t.x-r,l=t.y-s,n?a*a+l*l:new O(r,s)}function fi(t){return!g(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function mi(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),fi(t)}var _i=(Object.freeze||Object)({simplify:li,pointToSegmentDistance:hi,closestPointOnSegment:function(t,e,i){return pi(t,e,i)},clipSegment:ci,_getEdgeIntersection:di,_getBitCode:ui,_sqClosestPointOnSegment:pi,isFlat:fi,_flat:mi});function gi(t,e,i){var n,o,r,s,a,l,h,c,d,u=[1,4,2,8];for(o=0,h=t.length;o<h;o++)t[o]._code=ui(t[o],e);for(s=0;s<4;s++){for(c=u[s],n=[],o=0,r=(h=t.length)-1;o<h;r=o++)a=t[o],l=t[r],a._code&c?l._code&c||((d=di(l,a,c,e,i))._code=ui(d,e),n.push(d)):(l._code&c&&((d=di(l,a,c,e,i))._code=ui(d,e),n.push(d)),n.push(a));t=n}return t}var vi=(Object.freeze||Object)({clipPolygon:gi}),yi={project:function(t){return new O(t.lng,t.lat)},unproject:function(t){return new V(t.y,t.x)},bounds:new I([-180,-90],[180,90])},bi={R:6378137,R_MINOR:6356752.314245179,bounds:new I([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,o=this.R_MINOR/i,r=Math.sqrt(1-o*o),s=r*Math.sin(n),a=Math.tan(Math.PI/4-n/2)/Math.pow((1-s)/(1+s),r/2);return n=-i*Math.log(Math.max(a,1e-10)),new O(t.lng*e*i,n)},unproject:function(t){for(var e,i=180/Math.PI,n=this.R,o=this.R_MINOR/n,r=Math.sqrt(1-o*o),s=Math.exp(-t.y/n),a=Math.PI/2-2*Math.atan(s),l=0,h=.1;l<15&&Math.abs(h)>1e-7;l++)e=r*Math.sin(a),e=Math.pow((1-e)/(1+e),r/2),a+=h=Math.PI/2-2*Math.atan(s*e)-a;return new V(a*i,t.x*i/n)}},wi=(Object.freeze||Object)({LonLat:yi,Mercator:bi,SphericalMercator:U}),xi=i({},F,{code:"EPSG:3395",projection:bi,transformation:function(){var t=.5/(Math.PI*bi.R);return G(t,.5,-t,.5)}()}),Li=i({},F,{code:"EPSG:4326",projection:yi,transformation:G(1/180,1,-1/180,.5)}),Ci=i({},Z,{projection:yi,transformation:G(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,n=e.lat-t.lat;return Math.sqrt(i*i+n*n)},infinite:!0});Z.Earth=F,Z.EPSG3395=xi,Z.EPSG3857=W,Z.EPSG900913=$,Z.EPSG4326=Li,Z.Simple=Ci;var zi=E.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[s(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[s(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents();e.on(i,this),this.once("remove",(function(){e.off(i,this)}),this)}this.onAdd(e),this.getAttribution&&e.attributionControl&&e.attributionControl.addAttribution(this.getAttribution()),this.fire("add"),e.fire("layeradd",{layer:this})}}});$e.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var e=s(t);return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=s(t);return this._layers[e]?(this._loaded&&t.onRemove(this),t.getAttribution&&this.attributionControl&&this.attributionControl.removeAttribution(t.getAttribution()),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return!!t&&s(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){for(var e=0,i=(t=t?g(t)?t:[t]:[]).length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){!isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[s(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=s(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,i=this._getZoomSpan();for(var n in this._zoomBoundLayers){var o=this._zoomBoundLayers[n].options;t=void 0===o.minZoom?t:Math.min(t,o.minZoom),e=void 0===o.maxZoom?e:Math.max(e,o.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,i!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Mi=zi.extend({initialize:function(t,e){var i,n;if(p(this,e),this._layers={},t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){return!!t&&(t in this._layers||this.getLayerId(t)in this._layers)},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e,i,n=Array.prototype.slice.call(arguments,1);for(e in this._layers)(i=this._layers[e])[t]&&i[t].apply(i,n);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return s(t)}}),Si=Mi.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Mi.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Mi.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new j;for(var e in this._layers){var i=this._layers[e];t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),Pi=k.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0]},initialize:function(t){p(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(i,e&&"IMG"===e.tagName?e:null);return this._setIconStyles(n,t),n},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"];"number"==typeof n&&(n=[n,n]);var o=H(n),r=H("shadow"===e&&i.shadowAnchor||i.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),r&&(t.style.marginLeft=-r.x+"px",t.style.marginTop=-r.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,e){return(e=e||document.createElement("img")).src=t,e},_getIconUrl:function(t){return zt&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}}),ki=Pi.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return ki.imagePath||(ki.imagePath=this._detectIconPath()),(this.options.imagePath||ki.imagePath)+Pi.prototype._getIconUrl.call(this,t)},_detectIconPath:function(){var t=re("div","leaflet-default-icon-path",document.body),e=oe(t,"background-image")||oe(t,"backgroundImage");return document.body.removeChild(t),e=null===e||0!==e.indexOf("url")?"":e.replace(/^url\(["']?/,"").replace(/marker-icon\.png["']?\)$/,"")}}),Ti=ei.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new ai(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),de(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&ue(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,r=ye(e._icon),s=i.getPixelBounds(),a=i.getPixelOrigin(),l=N(s.min._subtract(a).add(o),s.max._subtract(a).subtract(o));if(!l.contains(r)){var h=H((Math.max(l.max.x,r.x)-l.max.x)/(s.max.x-l.max.x)-(Math.min(l.min.x,r.x)-l.min.x)/(s.min.x-l.min.x),(Math.max(l.max.y,r.y)-l.max.y)/(s.max.y-l.max.y)-(Math.min(l.min.y,r.y)-l.min.y)/(s.min.y-l.min.y)).multiplyBy(n);i.panBy(h,{animate:!1}),this._draggable._newPos._add(h),this._draggable._startPos._add(h),ve(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=M(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup().fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(S(this._panRequest),this._panRequest=M(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=ye(e._icon),o=e._map.layerPointToLatLng(n);i&&ve(i,n),e._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){S(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),Ei=zi.extend({options:{icon:new ki,interactive:!0,keyboard:!0,title:"",alt:"",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){p(this,e),this._latlng=B(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=B(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1;i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),"IMG"===i.tagName&&(i.alt=t.alt||"")),de(i,e),t.keyboard&&(i.tabIndex="0"),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex});var o=t.icon.createShadow(this._shadow),r=!1;o!==this._shadow&&(this._removeShadow(),r=!0),o&&(de(o,e),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&r&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),se(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&se(this._shadow),this._shadow=null},_setPos:function(t){ve(this._icon,t),this._shadow&&ve(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(de(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Ti)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Ti(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&me(this._icon,t),this._shadow&&me(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}}),Oi=zi.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return p(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t.hasOwnProperty("weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+this._renderer.options.tolerance}}),Ai=Oi.extend({options:{fill:!0,radius:10},initialize:function(t,e){p(this,e),this._latlng=B(t),this._radius=this.options.radius},setLatLng:function(t){return this._latlng=B(t),this.redraw(),this.fire("move",{latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return Oi.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),n=[t+i,e+i];this._pxBounds=new I(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}}),Hi=Ai.extend({initialize:function(t,e,n){if("number"==typeof e&&(e=i({},n,{radius:e})),p(this,e),this._latlng=B(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new j(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Oi.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,n=i.options.crs;if(n.distance===F.distance){var o=Math.PI/180,r=this._mRadius/F.R/o,s=i.project([e+r,t]),a=i.project([e-r,t]),l=s.add(a).divideBy(2),h=i.unproject(l).lat,c=Math.acos((Math.cos(r*o)-Math.sin(e*o)*Math.sin(h*o))/(Math.cos(e*o)*Math.cos(h*o)))/o;(isNaN(c)||0===c)&&(c=r/Math.cos(Math.PI/180*e)),this._point=l.subtract(i.getPixelOrigin()),this._radius=isNaN(c)?0:l.x-i.project([h,t-c]).x,this._radiusY=l.y-s.y}else{var d=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(d).x}this._updateBounds()}}),Ii=Oi.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){p(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e,i,n=1/0,o=null,r=pi,s=0,a=this._parts.length;s<a;s++)for(var l=this._parts[s],h=1,c=l.length;h<c;h++){var d=r(t,e=l[h-1],i=l[h],!0);d<n&&(n=d,o=r(t,e,i))}return o&&(o.distance=Math.sqrt(n)),o},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,e,i,n,o,r,s,a=this._rings[0],l=a.length;if(!l)return null;for(t=0,e=0;t<l-1;t++)e+=a[t].distanceTo(a[t+1])/2;if(0===e)return this._map.layerPointToLatLng(a[0]);for(t=0,n=0;t<l-1;t++)if(o=a[t],r=a[t+1],(n+=i=o.distanceTo(r))>e)return s=(n-e)/i,this._map.layerPointToLatLng([r.x-s*(r.x-o.x),r.y-s*(r.y-o.y)])},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=B(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new j,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return fi(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=fi(t),n=0,o=t.length;n<o;n++)i?(e[n]=B(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new I;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new O(t,t);this._pxBounds=new I([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)])},_projectLatlngs:function(t,e,i){var n,o,r=t[0]instanceof V,s=t.length;if(r){for(o=[],n=0;n<s;n++)o[n]=this._map.latLngToLayerPoint(t[n]),i.extend(o[n]);e.push(o)}else for(n=0;n<s;n++)this._projectLatlngs(t[n],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else{var e,i,n,o,r,s,a,l=this._parts;for(e=0,n=0,o=this._rings.length;e<o;e++)for(i=0,r=(a=this._rings[e]).length;i<r-1;i++)(s=ci(a[i],a[i+1],t,i,!0))&&(l[n]=l[n]||[],l[n].push(s[0]),s[1]===a[i+1]&&i!==r-2||(l[n].push(s[1]),n++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=li(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,n,o,r,s,a,l=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(i=0,r=this._parts.length;i<r;i++)for(n=0,o=(s=(a=this._parts[i]).length)-1;n<s;o=n++)if((e||0!==n)&&hi(t,a[o],a[n])<=l)return!0;return!1}});Ii._flat=mi;var Ni=Ii.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,e,i,n,o,r,s,a,l,h=this._rings[0],c=h.length;if(!c)return null;for(r=s=a=0,t=0,e=c-1;t<c;e=t++)i=h[t],n=h[e],o=i.y*n.x-n.y*i.x,s+=(i.x+n.x)*o,a+=(i.y+n.y)*o,r+=3*o;return l=0===r?h[0]:[s/r,a/r],this._map.layerPointToLatLng(l)},_convertLatLngs:function(t){var e=Ii.prototype._convertLatLngs.call(this,t),i=e.length;return i>=2&&e[0]instanceof V&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){Ii.prototype._setLatLngs.call(this,t),fi(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return fi(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,i=new O(e,e);if(t=new I(t.min.subtract(i),t.max.add(i)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var n,o=0,r=this._rings.length;o<r;o++)(n=gi(this._rings[o],t,!0)).length&&this._parts.push(n)},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e,i,n,o,r,s,a,l,h=!1;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(o=0,a=this._parts.length;o<a;o++)for(r=0,s=(l=(e=this._parts[o]).length)-1;r<l;s=r++)i=e[r],n=e[s],i.y>t.y!=n.y>t.y&&t.x<(n.x-i.x)*(t.y-i.y)/(n.y-i.y)+i.x&&(h=!h);return h||Ii.prototype._containsPoint.call(this,t,!0)}}),ji=Si.extend({initialize:function(t,e){p(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e,i,n,o=g(t)?t:t.features;if(o){for(e=0,i=o.length;e<i;e++)((n=o[e]).geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var r=this.options;if(r.filter&&!r.filter(t))return this;var s=Ri(t,r);return s?(s.feature=Ui(t),s.defaultOptions=s.options,this.resetStyle(s),r.onEachFeature&&r.onEachFeature(t,s),this.addLayer(s)):this},resetStyle:function(t){return t.options=i({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this},setStyle:function(t){return this.eachLayer((function(e){this._setLayerStyle(e,t)}),this)},_setLayerStyle:function(t,e){t.setStyle&&("function"==typeof e&&(e=e(t.feature)),t.setStyle(e))}});function Ri(t,e){var i,n,o,r,s="Feature"===t.type?t.geometry:t,a=s?s.coordinates:null,l=[],h=e&&e.pointToLayer,c=e&&e.coordsToLatLng||Vi;if(!a&&!s)return null;switch(s.type){case"Point":return i=c(a),h?h(t,i):new Ei(i);case"MultiPoint":for(o=0,r=a.length;o<r;o++)i=c(a[o]),l.push(h?h(t,i):new Ei(i));return new Si(l);case"LineString":case"MultiLineString":return n=Bi(a,"LineString"===s.type?0:1,c),new Ii(n,e);case"Polygon":case"MultiPolygon":return n=Bi(a,"Polygon"===s.type?1:2,c),new Ni(n,e);case"GeometryCollection":for(o=0,r=s.geometries.length;o<r;o++){var d=Ri({geometry:s.geometries[o],type:"Feature",properties:t.properties},e);d&&l.push(d)}return new Si(l);default:throw new Error("Invalid GeoJSON object.")}}function Vi(t){return new V(t[1],t[0],t[2])}function Bi(t,e,i){for(var n,o=[],r=0,s=t.length;r<s;r++)n=e?Bi(t[r],e-1,i):(i||Vi)(t[r]),o.push(n);return o}function Di(t,e){return e="number"==typeof e?e:6,void 0!==t.alt?[c(t.lng,e),c(t.lat,e),c(t.alt,e)]:[c(t.lng,e),c(t.lat,e)]}function Zi(t,e,i,n){for(var o=[],r=0,s=t.length;r<s;r++)o.push(e?Zi(t[r],e-1,i,n):Di(t[r],n));return!e&&i&&o.push(o[0]),o}function Fi(t,e){return t.feature?i({},t.feature,{geometry:e}):Ui(e)}function Ui(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}var qi={toGeoJSON:function(t){return Fi(this,{type:"Point",coordinates:Di(this.getLatLng(),t)})}};function Gi(t,e){return new ji(t,e)}Ei.include(qi),Hi.include(qi),Ai.include(qi),Ii.include({toGeoJSON:function(t){var e=!fi(this._latlngs);return Fi(this,{type:(e?"Multi":"")+"LineString",coordinates:Zi(this._latlngs,e?1:0,!1,t)})}}),Ni.include({toGeoJSON:function(t){var e=!fi(this._latlngs),i=e&&!fi(this._latlngs[0]),n=Zi(this._latlngs,i?2:e?1:0,!0,t);return e||(n=[n]),Fi(this,{type:(i?"Multi":"")+"Polygon",coordinates:n})}}),Mi.include({toMultiPoint:function(t){var e=[];return this.eachLayer((function(i){e.push(i.toGeoJSON(t).geometry.coordinates)})),Fi(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if("MultiPoint"===e)return this.toMultiPoint(t);var i="GeometryCollection"===e,n=[];return this.eachLayer((function(e){if(e.toGeoJSON){var o=e.toGeoJSON(t);if(i)n.push(o.geometry);else{var r=Ui(o);"FeatureCollection"===r.type?n.push.apply(n,r.features):n.push(r)}}})),i?Fi(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});var Wi=Gi,$i=zi.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,i){this._url=t,this._bounds=R(e),p(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(de(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){se(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&le(this._image),this},bringToBack:function(){return this._map&&he(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=R(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,e=this._image=t?this._url:re("img");de(e,"leaflet-image-layer"),this._zoomAnimated&&de(e,"leaflet-zoom-animated"),this.options.className&&de(e,this.options.className),e.onselectstart=h,e.onmousemove=h,e.onload=o(this.fire,this,"load"),e.onerror=o(this._overlayOnError,this,"error"),(this.options.crossOrigin||""===this.options.crossOrigin)&&(e.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t?this._url=e.src:(e.src=this._url,e.alt=this.options.alt)},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;ge(this._image,i,e)},_reset:function(){var t=this._image,e=new I(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();ve(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){me(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)}}),Ji=$i.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,e=this._image=t?this._url:re("video");if(de(e,"leaflet-image-layer"),this._zoomAnimated&&de(e,"leaflet-zoom-animated"),e.onselectstart=h,e.onmousemove=h,e.onloadeddata=o(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),n=[],r=0;r<i.length;r++)n.push(i[r].src);this._url=i.length>0?n:[e.src]}else{g(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&e.style.hasOwnProperty("objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop;for(var s=0;s<this._url.length;s++){var a=re("source");a.src=this._url[s],e.appendChild(a)}}}}),Yi=$i.extend({_initImage:function(){var t=this._image=this._url;de(t,"leaflet-image-layer"),this._zoomAnimated&&de(t,"leaflet-zoom-animated"),t.onselectstart=h,t.onmousemove=h}}),Ki=zi.extend({options:{offset:[0,7],className:"",pane:"popupPane"},initialize:function(t,e){p(this,t),this._source=e},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&me(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&me(this._container,1),this.bringToFront()},onRemove:function(t){t._fadeAnimated?(me(this._container,0),this._removeTimeout=setTimeout(o(se,void 0,this._container),200)):se(this._container)},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=B(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&le(this._container),this},bringToBack:function(){return this._map&&he(this._container),this},_prepareOpen:function(t,e,i){if(e instanceof zi||(i=e,e=t),e instanceof Si)for(var n in t._layers){e=t._layers[n];break}if(!i)if(e.getCenter)i=e.getCenter();else{if(!e.getLatLng)throw new Error("Unable to get source layer LatLng.");i=e.getLatLng()}return this._source=e,this.update(),i},_updateContent:function(){if(this._content){var t=this._contentNode,e="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof e)t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=H(this.options.offset),i=this._getAnchor();this._zoomAnimated?ve(this._container,t.add(i)):e=e.add(t).add(i);var n=this._containerBottom=-e.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=n+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}}),Xi=Ki.extend({options:{maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t.openPopup(this),this},onAdd:function(t){Ki.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Oi||this._source.on("preclick",Ae))},onRemove:function(t){Ki.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Oi||this._source.off("preclick",Ae))},getEvents:function(){var t=Ki.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t="leaflet-popup",e=this._container=re("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=re("div",t+"-content-wrapper",e);if(this._contentNode=re("div",t+"-content",i),Ie(i),He(this._contentNode),Pe(i,"contextmenu",Ae),this._tipContainer=re("div",t+"-tip-container",e),this._tip=re("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=re("a",t+"-close-button",e);n.href="#close",n.innerHTML="&#215;",Pe(n,"click",this._onCloseButtonClick,this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,o=this.options.maxHeight;o&&n>o?(e.height=o+"px",de(t,"leaflet-popup-scrolled")):ue(t,"leaflet-popup-scrolled"),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor();ve(this._container,e.add(i))},_adjustPan:function(){if(this.options.autoPan){this._map._panAnim&&this._map._panAnim.stop();var t=this._map,e=parseInt(oe(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+e,n=this._containerWidth,o=new O(this._containerLeft,-i-this._containerBottom);o._add(ye(this._container));var r=t.layerPointToContainerPoint(o),s=H(this.options.autoPanPadding),a=H(this.options.autoPanPaddingTopLeft||s),l=H(this.options.autoPanPaddingBottomRight||s),h=t.getSize(),c=0,d=0;r.x+n+l.x>h.x&&(c=r.x+n-h.x+l.x),r.x-c-a.x<0&&(c=r.x-a.x),r.y+i+l.y>h.y&&(d=r.y+i-h.y+l.y),r.y-d-a.y<0&&(d=r.y-a.y),(c||d)&&t.fire("autopanstart").panBy([c,d])}},_onCloseButtonClick:function(t){this._close(),je(t)},_getAnchor:function(){return H(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}});$e.mergeOptions({closePopupOnClick:!0}),$e.include({openPopup:function(t,e,i){return t instanceof Xi||(t=new Xi(i).setContent(t)),e&&t.setLatLng(e),this.hasLayer(t)?this:(this._popup&&this._popup.options.autoClose&&this.closePopup(),this._popup=t,this.addLayer(t))},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&this.removeLayer(t),this}}),zi.include({bindPopup:function(t,e){return t instanceof Xi?(p(t,e),this._popup=t,t._source=this):(this._popup&&!e||(this._popup=new Xi(e,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t,e){return this._popup&&this._map&&(e=this._popup._prepareOpen(this,t,e),this._map.openPopup(this._popup,e)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(t){return this._popup&&(this._popup._map?this.closePopup():this.openPopup(t)),this},isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){var e=t.layer||t.target;this._popup&&this._map&&(je(t),e instanceof Oi?this.openPopup(t.layer||t.target,t.latlng):this._map.hasLayer(this._popup)&&this._popup._source===e?this.closePopup():this.openPopup(e,t.latlng))},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}});var Qi=Ki.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,interactive:!1,opacity:.9},onAdd:function(t){Ki.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&this._source.fire("tooltipopen",{tooltip:this},!0)},onRemove:function(t){Ki.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&this._source.fire("tooltipclose",{tooltip:this},!0)},getEvents:function(){var t=Ki.prototype.getEvents.call(this);return xt&&!this.options.permanent&&(t.preclick=this._close),t},_close:function(){this._map&&this._map.closeTooltip(this)},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=re("div",t)},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e=this._map,i=this._container,n=e.latLngToContainerPoint(e.getCenter()),o=e.layerPointToContainerPoint(t),r=this.options.direction,s=i.offsetWidth,a=i.offsetHeight,l=H(this.options.offset),h=this._getAnchor();"top"===r?t=t.add(H(-s/2+l.x,-a+l.y+h.y,!0)):"bottom"===r?t=t.subtract(H(s/2-l.x,-l.y,!0)):"center"===r?t=t.subtract(H(s/2+l.x,a/2-h.y+l.y,!0)):"right"===r||"auto"===r&&o.x<n.x?(r="right",t=t.add(H(l.x+h.x,h.y-a/2+l.y,!0))):(r="left",t=t.subtract(H(s+h.x-l.x,a/2-h.y-l.y,!0))),ue(i,"leaflet-tooltip-right"),ue(i,"leaflet-tooltip-left"),ue(i,"leaflet-tooltip-top"),ue(i,"leaflet-tooltip-bottom"),de(i,"leaflet-tooltip-"+r),ve(i,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&me(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return H(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}});$e.include({openTooltip:function(t,e,i){return t instanceof Qi||(t=new Qi(i).setContent(t)),e&&t.setLatLng(e),this.hasLayer(t)?this:this.addLayer(t)},closeTooltip:function(t){return t&&this.removeLayer(t),this}}),zi.include({bindTooltip:function(t,e){return t instanceof Qi?(p(t,e),this._tooltip=t,t._source=this):(this._tooltip&&!e||(this._tooltip=new Qi(e,this)),this._tooltip.setContent(t)),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(t||!this._tooltipHandlersAdded){var e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),xt&&(i.click=this._openTooltip)),this[e](i),this._tooltipHandlersAdded=!t}},openTooltip:function(t,e){return this._tooltip&&this._map&&(e=this._tooltip._prepareOpen(this,t,e),this._map.openTooltip(this._tooltip,e),this._tooltip.options.interactive&&this._tooltip._container&&(de(this._tooltip._container,"leaflet-clickable"),this.addInteractiveTarget(this._tooltip._container))),this},closeTooltip:function(){return this._tooltip&&(this._tooltip._close(),this._tooltip.options.interactive&&this._tooltip._container&&(ue(this._tooltip._container,"leaflet-clickable"),this.removeInteractiveTarget(this._tooltip._container))),this},toggleTooltip:function(t){return this._tooltip&&(this._tooltip._map?this.closeTooltip():this.openTooltip(t)),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_openTooltip:function(t){var e=t.layer||t.target;this._tooltip&&this._map&&this.openTooltip(e,this._tooltip.options.sticky?t.latlng:void 0)},_moveTooltip:function(t){var e,i,n=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(e=this._map.mouseEventToContainerPoint(t.originalEvent),i=this._map.containerPointToLayerPoint(e),n=this._map.layerPointToLatLng(i)),this._tooltip.setLatLng(n)}});var tn=Pi.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&"DIV"===t.tagName?t:document.createElement("div"),i=this.options;if(i.html instanceof Element?(ae(e),e.appendChild(i.html)):e.innerHTML=!1!==i.html?i.html:"",i.bgPos){var n=H(i.bgPos);e.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});Pi.Default=ki;var en=zi.extend({options:{tileSize:256,opacity:1,updateWhenIdle:gt,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){p(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView(),this._update()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),se(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(le(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(he(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){return this._map&&(this._removeAllTiles(),this._update()),this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=a(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof O?t:new O(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e,i=this.getPane().children,n=-t(-1/0,1/0),o=0,r=i.length;o<r;o++)e=i[o].style.zIndex,i[o]!==this._container&&e&&(n=t(n,+e));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Q){me(this._container,this.options.opacity);var t=+new Date,e=!1,i=!1;for(var n in this._tiles){var o=this._tiles[n];if(o.current&&o.loaded){var r=Math.min(1,(t-o.loaded)/200);me(o.el,r),r<1?e=!0:(o.active?i=!0:this._onOpaqueTile(o),o.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&(S(this._fadeFrame),this._fadeFrame=M(this._updateOpacity,this))}},_onOpaqueTile:h,_initContainer:function(){this._container||(this._container=re("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(void 0!==t){for(var i in this._levels)this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(se(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],o=this._map;return n||((n=this._levels[t]={}).el=re("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=e,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),n.el.offsetWidth,this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:h,_onRemoveLevel:h,_onCreateLevel:h,_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom)this._removeAllTiles();else{for(t in this._tiles)(e=this._tiles[t]).retain=e.current;for(t in this._tiles)if((e=this._tiles[t]).current&&!e.active){var n=e.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)se(this._levels[t].el),this._onRemoveLevel(t),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var o=Math.floor(t/2),r=Math.floor(e/2),s=i-1,a=new O(+o,+r);a.z=+s;var l=this._tileCoordsToKey(a),h=this._tiles[l];return h&&h.active?(h.retain=!0,!0):(h&&h.loaded&&(h.retain=!0),s>n&&this._retainParent(o,r,s,n))},_retainChildren:function(t,e,i,n){for(var o=2*t;o<2*t+2;o++)for(var r=2*e;r<2*e+2;r++){var s=new O(o,r);s.z=i+1;var a=this._tileCoordsToKey(s),l=this._tiles[a];l&&l.active?l.retain=!0:(l&&l.loaded&&(l.retain=!0),i+1<n&&this._retainChildren(o,r,i+1,n))}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return void 0!==e.minNativeZoom&&t<e.minNativeZoom?e.minNativeZoom:void 0!==e.maxNativeZoom&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var o=this._clampZoom(Math.round(e));(void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom)&&(o=void 0);var r=this.options.updateWhenZooming&&o!==this._tileZoom;n&&!r||(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),o=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();_t?ge(t.el,o,n):ve(t.el,o)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),n=e.getZoomScale(i,this._tileZoom),o=e.project(t,this._tileZoom).floor(),r=e.getSize().divideBy(2*n);return new I(o.subtract(r),o.add(r))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(void 0===t&&(t=e.getCenter()),void 0!==this._tileZoom){var n=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(n),r=o.getCenter(),s=[],a=this.options.keepBuffer,l=new I(o.getBottomLeft().subtract([a,-a]),o.getTopRight().add([a,-a]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var h in this._tiles){var c=this._tiles[h].coords;c.z===this._tileZoom&&l.contains(new O(c.x,c.y))||(this._tiles[h].current=!1)}if(Math.abs(i-this._tileZoom)>1)this._setView(t,i);else{for(var d=o.min.y;d<=o.max.y;d++)for(var u=o.min.x;u<=o.max.x;u++){var p=new O(u,d);if(p.z=this._tileZoom,this._isValidTile(p)){var f=this._tiles[this._tileCoordsToKey(p)];f?f.current=!0:s.push(p)}}if(s.sort((function(t,e){return t.distanceTo(r)-e.distanceTo(r)})),0!==s.length){this._loading||(this._loading=!0,this.fire("loading"));var m=document.createDocumentFragment();for(u=0;u<s.length;u++)this._addTile(s[u],m);this._level.el.appendChild(m)}}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return R(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),o=n.add(i);return[e.unproject(n,t.z),e.unproject(o,t.z)]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),i=new j(e[0],e[1]);return this.options.noWrap||(i=this._map.wrapLatLngBounds(i)),i},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),i=new O(+e[0],+e[1]);return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t];e&&(se(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){de(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=h,t.onmousemove=h,Q&&this.options.opacity<1&&me(t,this.options.opacity),it&&!nt&&(t.style.WebkitBackfaceVisibility="hidden")},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),r=this.createTile(this._wrapCoords(t),o(this._tileReady,this,t));this._initTile(r),this.createTile.length<2&&M(o(this._tileReady,this,t,null,r)),ve(r,i),this._tiles[n]={el:r,coords:t,current:!0},e.appendChild(r),this.fire("tileloadstart",{tile:r,coords:t})},_tileReady:function(t,e,i){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);(i=this._tiles[n])&&(i.loaded=+new Date,this._map._fadeAnimated?(me(i.el,0),S(this._fadeFrame),this._fadeFrame=M(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(de(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Q||!this._map._fadeAnimated?M(this._pruneTiles,this):setTimeout(o(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new O(this._wrapX?l(t.x,this._wrapX):t.x,this._wrapY?l(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new I(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}}),nn=en.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1},initialize:function(t,e){this._url=t,(e=p(this,e)).detectRetina&&zt&&e.maxZoom>0&&(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom++):(e.zoomOffset++,e.maxZoom--),e.minZoom=Math.max(0,e.minZoom)),"string"==typeof e.subdomains&&(e.subdomains=e.subdomains.split("")),it||this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&void 0===e&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement("img");return Pe(i,"load",o(this._tileOnLoad,this,e,i)),Pe(i,"error",o(this._tileOnError,this,e,i)),(this.options.crossOrigin||""===this.options.crossOrigin)&&(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),i.alt="",i.setAttribute("role","presentation"),i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:zt?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var n=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=n),e["-y"]=n}return _(this._url,i(e,this.options))},_tileOnLoad:function(t,e){Q?setTimeout(o(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute("src")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom;return this.options.zoomReverse&&(t=e-t),t+this.options.zoomOffset},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)this._tiles[t].coords.z!==this._tileZoom&&((e=this._tiles[t].el).onload=h,e.onerror=h,e.complete||(e.src=y,se(e),delete this._tiles[t]))},_removeTile:function(t){var e=this._tiles[t];if(e)return rt||e.el.setAttribute("src",y),en.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(this._map&&(!i||i.getAttribute("src")!==y))return en.prototype._tileReady.call(this,t,e,i)}});function on(t,e){return new nn(t,e)}var rn=nn.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var n=i({},this.defaultWmsParams);for(var o in e)o in this.options||(n[o]=e[o]);var r=(e=p(this,e)).detectRetina&&zt?2:1,s=this.getTileSize();n.width=s.x*r,n.height=s.y*r,this.wmsParams=n},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,nn.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,n=N(i.project(e[0]),i.project(e[1])),o=n.min,r=n.max,s=(this._wmsVersion>=1.3&&this._crs===Li?[o.y,o.x,r.y,r.x]:[o.x,o.y,r.x,r.y]).join(","),a=nn.prototype.getTileUrl.call(this,t);return a+f(this.wmsParams,a,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+s},setParams:function(t,e){return i(this.wmsParams,t),e||this.redraw(),this}});nn.WMS=rn,on.wms=function(t,e){return new rn(t,e)};var sn=zi.extend({options:{padding:.1,tolerance:0},initialize:function(t){p(this,t),s(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&de(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=ye(this._container),o=this._map.getSize().multiplyBy(.5+this.options.padding),r=this._map.project(this._center,e),s=this._map.project(t,e).subtract(r),a=o.multiplyBy(-i).add(n).add(o).subtract(s);_t?ge(this._container,a,i):ve(this._container,a)},_reset:function(){for(var t in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new I(i,i.add(e.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),an=sn.extend({getEvents:function(){var t=sn.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){sn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");Pe(t,"mousemove",a(this._onMouseMove,32,this),this),Pe(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),Pe(t,"mouseout",this._handleMouseOut,this),this._ctx=t.getContext("2d")},_destroyContainer:function(){S(this._redrawRequest),delete this._ctx,se(this._container),Te(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){for(var t in this._redrawBounds=null,this._layers)this._layers[t]._update();this._redraw()}},_update:function(){if(!this._map._animatingZoom||!this._bounds){sn.prototype._update.call(this);var t=this._bounds,e=this._container,i=t.getSize(),n=zt?2:1;ve(e,t.min),e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",zt&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){sn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[s(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,n=e.prev;i?i.prev=n:this._drawLast=n,n?n.next=i:this._drawFirst=i,delete t._order,delete this._layers[s(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if("string"==typeof t.options.dashArray){var e,i,n=t.options.dashArray.split(/[, ]+/),o=[];for(i=0;i<n.length;i++){if(e=Number(n[i]),isNaN(e))return;o.push(e)}t.options._dashArray=o}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||M(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new I,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.clearRect(0,0,this._container.width,this._container.height)},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var i=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,o,r,s=t._parts,a=s.length,l=this._ctx;if(a){for(l.beginPath(),i=0;i<a;i++){for(n=0,o=s[i].length;n<o;n++)r=s[i][n],l[n?"lineTo":"moveTo"](r.x,r.y);e&&l.closePath()}this._fillStroke(l,t)}}},_updateCircle:function(t){if(this._drawing&&!t._empty()){var e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||n)/n;1!==o&&(i.save(),i.scale(1,o)),i.beginPath(),i.arc(e.x,e.y/o,n,0,2*Math.PI,!1),1!==o&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&0!==i.weight&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e,i,n=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)(e=o.layer).options.interactive&&e._containsPoint(n)&&!this._map._draggableMoved(e)&&(i=e);i&&(Fe(t),this._fireEvent([i],t))},_onMouseMove:function(t){if(this._map&&!this._map.dragging.moving()&&!this._map._animatingZoom){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(ue(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null)},_handleMouseHover:function(t,e){for(var i,n,o=this._drawFirst;o;o=o.next)(i=o.layer).options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(de(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._hoveredLayer&&this._fireEvent([this._hoveredLayer],t)},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;i&&(i.prev=n,n?n.next=i:i&&(this._drawFirst=i),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t))}},_bringToBack:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;n&&(n.next=i,i?i.prev=n:n&&(this._drawLast=n),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t))}}});function ln(t){return Mt?new an(t):null}var hn=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),cn={_initContainer:function(){this._container=re("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(sn.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=hn("shape");de(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=hn("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[s(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;se(e),t.removeInteractiveTarget(e),delete this._layers[s(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(e||(e=t._stroke=hn("stroke")),o.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=g(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(o.removeChild(e),t._stroke=null),n.fill?(i||(i=t._fill=hn("fill")),o.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(o.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,23592600")},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){le(t._container)},_bringToBack:function(t){he(t._container)}},dn=Pt?hn:J,un=sn.extend({getEvents:function(){var t=sn.prototype.getEvents.call(this);return t.zoomstart=this._onZoomStart,t},_initContainer:function(){this._container=dn("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=dn("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){se(this._container),Te(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_onZoomStart:function(){this._update()},_update:function(){if(!this._map._animatingZoom||!this._bounds){sn.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;this._svgSize&&this._svgSize.equals(e)||(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),ve(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=dn("path");t.options.className&&de(e,t.options.className),t.options.interactive&&de(e,"leaflet-interactive"),this._updateStyle(t),this._layers[s(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){se(t._path),t.removeInteractiveTarget(t._path),delete this._layers[s(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,Y(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n="a"+i+","+(Math.max(Math.round(t._radiusY),1)||i)+" 0 1,0 ",o=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+n+2*i+",0 "+n+2*-i+",0 ";this._setPath(t,o)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){le(t._path)},_bringToBack:function(t){he(t._path)}});function pn(t){return St||Pt?new un(t):null}Pt&&un.include(cn),$e.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if("overlayPane"===t||void 0===t)return!1;var e=this._paneRenderers[t];return void 0===e&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&ln(t)||pn(t)}});var fn=Ni.extend({initialize:function(t,e){Ni.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return[(t=R(t)).getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});un.create=dn,un.pointsToPath=Y,ji.geometryToLayer=Ri,ji.coordsToLatLng=Vi,ji.coordsToLatLngs=Bi,ji.latLngToCoords=Di,ji.latLngsToCoords=Zi,ji.getFeature=Fi,ji.asFeature=Ui,$e.mergeOptions({boxZoom:!0});var mn=ei.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){Pe(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Te(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){se(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;this._clearDeferredResetState(),this._resetState(),Jt(),we(),this._startPoint=this._map.mouseEventToContainerPoint(t),Pe(document,{contextmenu:je,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=re("div","leaflet-zoom-box",this._container),de(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new I(this._point,this._startPoint),i=e.getSize();ve(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&(se(this._box),ue(this._container,"leaflet-crosshair")),Yt(),xe(),Te(document,{contextmenu:je,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if((1===t.which||1===t.button)&&(this._finish(),this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(o(this._resetState,this),0);var e=new j(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}});$e.addInitHook("addHandler","boxZoom",mn),$e.mergeOptions({doubleClickZoom:!0});var _n=ei.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,o=t.originalEvent.shiftKey?i-n:i+n;"center"===e.options.doubleClickZoom?e.setZoom(o):e.setZoomAround(t.containerPoint,o)}});$e.addInitHook("addHandler","doubleClickZoom",_n),$e.mergeOptions({dragging:!0,inertia:!nt,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var gn=ei.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new ai(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}de(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){ue(this._map._container,"leaflet-grab"),ue(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=R(this._map.options.maxBounds);this._offsetLimit=N(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,r=(n+e+i)%t-e-i,s=Math.abs(o+i)<Math.abs(r+i)?o:r;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=s},_onDragEnd:function(t){var e=this._map,i=e.options,n=!i.inertia||this._times.length<2;if(e.fire("dragend",t),n)e.fire("moveend");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),r=(this._lastTime-this._times[0])/1e3,s=i.easeLinearity,a=o.multiplyBy(s/r),l=a.distanceTo([0,0]),h=Math.min(i.inertiaMaxSpeed,l),c=a.multiplyBy(h/l),d=h/(i.inertiaDeceleration*s),u=c.multiplyBy(-d/2).round();u.x||u.y?(u=e._limitOffset(u,e.options.maxBounds),M((function(){e.panBy(u,{duration:d,easeLinearity:s,noMoveStart:!0,animate:!0})}))):e.fire("moveend")}}});$e.addInitHook("addHandler","dragging",gn),$e.mergeOptions({keyboard:!0,keyboardPanDelta:80});var vn=ei.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),Pe(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Te(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,i=t.scrollTop||e.scrollTop,n=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(n,i)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e,i,n=this._panKeys={},o=this.keyCodes;for(e=0,i=o.left.length;e<i;e++)n[o.left[e]]=[-1*t,0];for(e=0,i=o.right.length;e<i;e++)n[o.right[e]]=[t,0];for(e=0,i=o.down.length;e<i;e++)n[o.down[e]]=[0,t];for(e=0,i=o.up.length;e<i;e++)n[o.up[e]]=[0,-1*t]},_setZoomDelta:function(t){var e,i,n=this._zoomKeys={},o=this.keyCodes;for(e=0,i=o.zoomIn.length;e<i;e++)n[o.zoomIn[e]]=t;for(e=0,i=o.zoomOut.length;e<i;e++)n[o.zoomOut[e]]=-t},_addHooks:function(){Pe(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Te(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e,i=t.keyCode,n=this._map;if(i in this._panKeys)n._panAnim&&n._panAnim._inProgress||(e=this._panKeys[i],t.shiftKey&&(e=H(e).multiplyBy(3)),n.panBy(e),n.options.maxBounds&&n.panInsideBounds(n.options.maxBounds));else if(i in this._zoomKeys)n.setZoom(n.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[i]);else{if(27!==i||!n._popup||!n._popup.options.closeOnEscapeKey)return;n.closePopup()}je(t)}}});$e.addInitHook("addHandler","keyboard",vn),$e.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var yn=ei.extend({addHooks:function(){Pe(this._map._container,"mousewheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Te(this._map._container,"mousewheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=Be(t),i=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(o(this._performZoom,this),n),je(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(4*this._map.options.wheelPxPerZoomLevel),o=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,r=i?Math.ceil(o/i)*i:o,s=t._limitZoom(e+(this._delta>0?r:-r))-e;this._delta=0,this._startTime=null,s&&("center"===t.options.scrollWheelZoom?t.setZoom(e+s):t.setZoomAround(this._lastMousePos,e+s))}});$e.addInitHook("addHandler","scrollWheelZoom",yn),$e.mergeOptions({tap:!0,tapTolerance:15});var bn=ei.extend({addHooks:function(){Pe(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Te(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if(Ne(t),this._fireClick=!0,t.touches.length>1)return this._fireClick=!1,void clearTimeout(this._holdTimeout);var e=t.touches[0],i=e.target;this._startPos=this._newPos=new O(e.clientX,e.clientY),i.tagName&&"a"===i.tagName.toLowerCase()&&de(i,"leaflet-active"),this._holdTimeout=setTimeout(o((function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",e))}),this),1e3),this._simulateEvent("mousedown",e),Pe(document,{touchmove:this._onMove,touchend:this._onUp},this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),Te(document,{touchmove:this._onMove,touchend:this._onUp},this),this._fireClick&&t&&t.changedTouches){var e=t.changedTouches[0],i=e.target;i&&i.tagName&&"a"===i.tagName.toLowerCase()&&ue(i,"leaflet-active"),this._simulateEvent("mouseup",e),this._isTapValid()&&this._simulateEvent("click",e)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var e=t.touches[0];this._newPos=new O(e.clientX,e.clientY),this._simulateEvent("mousemove",e)},_simulateEvent:function(t,e){var i=document.createEvent("MouseEvents");i._simulated=!0,e.target._simulatedClick=!0,i.initMouseEvent(t,!0,!0,window,1,e.screenX,e.screenY,e.clientX,e.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(i)}});xt&&!wt&&$e.addInitHook("addHandler","tap",bn),$e.mergeOptions({touchZoom:xt&&!nt,bounceAtZoomLimits:!0});var wn=ei.extend({addHooks:function(){de(this._map._container,"leaflet-touch-zoom"),Pe(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){ue(this._map._container,"leaflet-touch-zoom"),Te(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(t.touches&&2===t.touches.length&&!e._animatingZoom&&!this._zooming){var i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),"center"!==e.options.touchZoom&&(this._pinchStartLatLng=e.containerPointToLatLng(i.add(n)._divideBy(2))),this._startDist=i.distanceTo(n),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),Pe(document,"touchmove",this._onTouchMove,this),Pe(document,"touchend",this._onTouchEnd,this),Ne(t)}},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),r=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(r,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&r<1||this._zoom>e.getMaxZoom()&&r>1)&&(this._zoom=e._limitZoom(this._zoom)),"center"===e.options.touchZoom){if(this._center=this._startLatLng,1===r)return}else{var s=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(1===r&&0===s.x&&0===s.y)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(s),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),S(this._animRequest);var a=o(e._move,e,this._center,this._zoom,{pinch:!0,round:!1});this._animRequest=M(a,this,!0),Ne(t)}},_onTouchEnd:function(){this._moved&&this._zooming?(this._zooming=!1,S(this._animRequest),Te(document,"touchmove",this._onTouchMove),Te(document,"touchend",this._onTouchEnd),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))):this._zooming=!1}});$e.addInitHook("addHandler","touchZoom",wn),$e.BoxZoom=mn,$e.DoubleClickZoom=_n,$e.Drag=gn,$e.Keyboard=vn,$e.ScrollWheelZoom=yn,$e.Tap=bn,$e.TouchZoom=wn,Object.freeze=e,t.version="1.5.1+build.2e3e0ffb",t.Control=Je,t.control=Ye,t.Browser=Tt,t.Evented=E,t.Mixin=ni,t.Util=P,t.Class=k,t.Handler=ei,t.extend=i,t.bind=o,t.stamp=s,t.setOptions=p,t.DomEvent=Ge,t.DomUtil=Se,t.PosAnimation=We,t.Draggable=ai,t.LineUtil=_i,t.PolyUtil=vi,t.Point=O,t.point=H,t.Bounds=I,t.bounds=N,t.Transformation=q,t.transformation=G,t.Projection=wi,t.LatLng=V,t.latLng=B,t.LatLngBounds=j,t.latLngBounds=R,t.CRS=Z,t.GeoJSON=ji,t.geoJSON=Gi,t.geoJson=Wi,t.Layer=zi,t.LayerGroup=Mi,t.layerGroup=function(t,e){return new Mi(t,e)},t.FeatureGroup=Si,t.featureGroup=function(t){return new Si(t)},t.ImageOverlay=$i,t.imageOverlay=function(t,e,i){return new $i(t,e,i)},t.VideoOverlay=Ji,t.videoOverlay=function(t,e,i){return new Ji(t,e,i)},t.SVGOverlay=Yi,t.svgOverlay=function(t,e,i){return new Yi(t,e,i)},t.DivOverlay=Ki,t.Popup=Xi,t.popup=function(t,e){return new Xi(t,e)},t.Tooltip=Qi,t.tooltip=function(t,e){return new Qi(t,e)},t.Icon=Pi,t.icon=function(t){return new Pi(t)},t.DivIcon=tn,t.divIcon=function(t){return new tn(t)},t.Marker=Ei,t.marker=function(t,e){return new Ei(t,e)},t.TileLayer=nn,t.tileLayer=on,t.GridLayer=en,t.gridLayer=function(t){return new en(t)},t.SVG=un,t.svg=pn,t.Renderer=sn,t.Canvas=an,t.canvas=ln,t.Path=Oi,t.CircleMarker=Ai,t.circleMarker=function(t,e){return new Ai(t,e)},t.Circle=Hi,t.circle=function(t,e,i){return new Hi(t,e,i)},t.Polyline=Ii,t.polyline=function(t,e){return new Ii(t,e)},t.Polygon=Ni,t.polygon=function(t,e){return new Ni(t,e)},t.Rectangle=fn,t.rectangle=function(t,e){return new fn(t,e)},t.Map=$e,t.map=function(t,e){return new $e(t,e)};var xn=window.L;t.noConflict=function(){return window.L=xn,this},window.L=t}(e)},function(t,e,i){!function(t){"use strict";var e=L.MarkerClusterGroup=L.FeatureGroup.extend({options:{maxClusterRadius:80,iconCreateFunction:null,clusterPane:L.Marker.prototype.options.pane,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,singleMarkerMode:!1,disableClusteringAtZoom:null,removeOutsideVisibleBounds:!0,animate:!0,animateAddingMarkers:!1,spiderfyDistanceMultiplier:1,spiderLegPolylineOptions:{weight:1.5,color:"#222",opacity:.5},chunkedLoading:!1,chunkInterval:200,chunkDelay:50,chunkProgress:null,polygonOptions:{}},initialize:function(t){L.Util.setOptions(this,t),this.options.iconCreateFunction||(this.options.iconCreateFunction=this._defaultIconCreateFunction),this._featureGroup=L.featureGroup(),this._featureGroup.addEventParent(this),this._nonPointGroup=L.featureGroup(),this._nonPointGroup.addEventParent(this),this._inZoomAnimation=0,this._needsClustering=[],this._needsRemoving=[],this._currentShownBounds=null,this._queue=[],this._childMarkerEventHandlers={dragstart:this._childMarkerDragStart,move:this._childMarkerMoved,dragend:this._childMarkerDragEnd};var e=L.DomUtil.TRANSITION&&this.options.animate;L.extend(this,e?this._withAnimation:this._noAnimation),this._markerCluster=e?L.MarkerCluster:L.MarkerClusterNonAnimated},addLayer:function(t){if(t instanceof L.LayerGroup)return this.addLayers([t]);if(!t.getLatLng)return this._nonPointGroup.addLayer(t),this.fire("layeradd",{layer:t}),this;if(!this._map)return this._needsClustering.push(t),this.fire("layeradd",{layer:t}),this;if(this.hasLayer(t))return this;this._unspiderfy&&this._unspiderfy(),this._addLayer(t,this._maxZoom),this.fire("layeradd",{layer:t}),this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons();var e=t,i=this._zoom;if(t.__parent)for(;e.__parent._zoom>=i;)e=e.__parent;return this._currentShownBounds.contains(e.getLatLng())&&(this.options.animateAddingMarkers?this._animationAddLayer(t,e):this._animationAddLayerNonAnimated(t,e)),this},removeLayer:function(t){return t instanceof L.LayerGroup?this.removeLayers([t]):t.getLatLng?this._map?t.__parent?(this._unspiderfy&&(this._unspiderfy(),this._unspiderfyLayer(t)),this._removeLayer(t,!0),this.fire("layerremove",{layer:t}),this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),t.off(this._childMarkerEventHandlers,this),this._featureGroup.hasLayer(t)&&(this._featureGroup.removeLayer(t),t.clusterShow&&t.clusterShow()),this):this:(!this._arraySplice(this._needsClustering,t)&&this.hasLayer(t)&&this._needsRemoving.push({layer:t,latlng:t._latlng}),this.fire("layerremove",{layer:t}),this):(this._nonPointGroup.removeLayer(t),this.fire("layerremove",{layer:t}),this)},addLayers:function(t,e){if(!L.Util.isArray(t))return this.addLayer(t);var i,n=this._featureGroup,o=this._nonPointGroup,r=this.options.chunkedLoading,s=this.options.chunkInterval,a=this.options.chunkProgress,l=t.length,h=0,c=!0;if(this._map){var d=(new Date).getTime(),u=L.bind((function(){for(var p=(new Date).getTime();h<l&&!(r&&h%200==0&&(new Date).getTime()-p>s);h++)if((i=t[h])instanceof L.LayerGroup)c&&(t=t.slice(),c=!1),this._extractNonGroupLayers(i,t),l=t.length;else if(i.getLatLng){if(!this.hasLayer(i)&&(this._addLayer(i,this._maxZoom),e||this.fire("layeradd",{layer:i}),i.__parent&&2===i.__parent.getChildCount())){var f=i.__parent.getAllChildMarkers(),m=f[0]===i?f[1]:f[0];n.removeLayer(m)}}else o.addLayer(i),e||this.fire("layeradd",{layer:i});a&&a(h,l,(new Date).getTime()-d),h===l?(this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds)):setTimeout(u,this.options.chunkDelay)}),this);u()}else for(var p=this._needsClustering;h<l;h++)(i=t[h])instanceof L.LayerGroup?(c&&(t=t.slice(),c=!1),this._extractNonGroupLayers(i,t),l=t.length):i.getLatLng?this.hasLayer(i)||p.push(i):o.addLayer(i);return this},removeLayers:function(t){var e,i,n=t.length,o=this._featureGroup,r=this._nonPointGroup,s=!0;if(!this._map){for(e=0;e<n;e++)(i=t[e])instanceof L.LayerGroup?(s&&(t=t.slice(),s=!1),this._extractNonGroupLayers(i,t),n=t.length):(this._arraySplice(this._needsClustering,i),r.removeLayer(i),this.hasLayer(i)&&this._needsRemoving.push({layer:i,latlng:i._latlng}),this.fire("layerremove",{layer:i}));return this}if(this._unspiderfy){this._unspiderfy();var a=t.slice(),l=n;for(e=0;e<l;e++)(i=a[e])instanceof L.LayerGroup?(this._extractNonGroupLayers(i,a),l=a.length):this._unspiderfyLayer(i)}for(e=0;e<n;e++)(i=t[e])instanceof L.LayerGroup?(s&&(t=t.slice(),s=!1),this._extractNonGroupLayers(i,t),n=t.length):i.__parent?(this._removeLayer(i,!0,!0),this.fire("layerremove",{layer:i}),o.hasLayer(i)&&(o.removeLayer(i),i.clusterShow&&i.clusterShow())):(r.removeLayer(i),this.fire("layerremove",{layer:i}));return this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds),this},clearLayers:function(){return this._map||(this._needsClustering=[],this._needsRemoving=[],delete this._gridClusters,delete this._gridUnclustered),this._noanimationUnspiderfy&&this._noanimationUnspiderfy(),this._featureGroup.clearLayers(),this._nonPointGroup.clearLayers(),this.eachLayer((function(t){t.off(this._childMarkerEventHandlers,this),delete t.__parent}),this),this._map&&this._generateInitialClusters(),this},getBounds:function(){var t=new L.LatLngBounds;this._topClusterLevel&&t.extend(this._topClusterLevel._bounds);for(var e=this._needsClustering.length-1;e>=0;e--)t.extend(this._needsClustering[e].getLatLng());return t.extend(this._nonPointGroup.getBounds()),t},eachLayer:function(t,e){var i,n,o,r=this._needsClustering.slice(),s=this._needsRemoving;for(this._topClusterLevel&&this._topClusterLevel.getAllChildMarkers(r),n=r.length-1;n>=0;n--){for(i=!0,o=s.length-1;o>=0;o--)if(s[o].layer===r[n]){i=!1;break}i&&t.call(e,r[n])}this._nonPointGroup.eachLayer(t,e)},getLayers:function(){var t=[];return this.eachLayer((function(e){t.push(e)})),t},getLayer:function(t){var e=null;return t=parseInt(t,10),this.eachLayer((function(i){L.stamp(i)===t&&(e=i)})),e},hasLayer:function(t){if(!t)return!1;var e,i=this._needsClustering;for(e=i.length-1;e>=0;e--)if(i[e]===t)return!0;for(e=(i=this._needsRemoving).length-1;e>=0;e--)if(i[e].layer===t)return!1;return!(!t.__parent||t.__parent._group!==this)||this._nonPointGroup.hasLayer(t)},zoomToShowLayer:function(t,e){"function"!=typeof e&&(e=function(){});var i=function(){!t._icon&&!t.__parent._icon||this._inZoomAnimation||(this._map.off("moveend",i,this),this.off("animationend",i,this),t._icon?e():t.__parent._icon&&(this.once("spiderfied",e,this),t.__parent.spiderfy()))};t._icon&&this._map.getBounds().contains(t.getLatLng())?e():t.__parent._zoom<Math.round(this._map._zoom)?(this._map.on("moveend",i,this),this._map.panTo(t.getLatLng())):(this._map.on("moveend",i,this),this.on("animationend",i,this),t.__parent.zoomToBounds())},onAdd:function(t){var e,i,n;if(this._map=t,!isFinite(this._map.getMaxZoom()))throw"Map has no maxZoom specified";for(this._featureGroup.addTo(t),this._nonPointGroup.addTo(t),this._gridClusters||this._generateInitialClusters(),this._maxLat=t.options.crs.projection.MAX_LATITUDE,e=0,i=this._needsRemoving.length;e<i;e++)(n=this._needsRemoving[e]).newlatlng=n.layer._latlng,n.layer._latlng=n.latlng;for(e=0,i=this._needsRemoving.length;e<i;e++)n=this._needsRemoving[e],this._removeLayer(n.layer,!0),n.layer._latlng=n.newlatlng;this._needsRemoving=[],this._zoom=Math.round(this._map._zoom),this._currentShownBounds=this._getExpandedVisibleBounds(),this._map.on("zoomend",this._zoomEnd,this),this._map.on("moveend",this._moveEnd,this),this._spiderfierOnAdd&&this._spiderfierOnAdd(),this._bindEvents(),i=this._needsClustering,this._needsClustering=[],this.addLayers(i,!0)},onRemove:function(t){t.off("zoomend",this._zoomEnd,this),t.off("moveend",this._moveEnd,this),this._unbindEvents(),this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim",""),this._spiderfierOnRemove&&this._spiderfierOnRemove(),delete this._maxLat,this._hideCoverage(),this._featureGroup.remove(),this._nonPointGroup.remove(),this._featureGroup.clearLayers(),this._map=null},getVisibleParent:function(t){for(var e=t;e&&!e._icon;)e=e.__parent;return e||null},_arraySplice:function(t,e){for(var i=t.length-1;i>=0;i--)if(t[i]===e)return t.splice(i,1),!0},_removeFromGridUnclustered:function(t,e){for(var i=this._map,n=this._gridUnclustered,o=Math.floor(this._map.getMinZoom());e>=o&&n[e].removeObject(t,i.project(t.getLatLng(),e));e--);},_childMarkerDragStart:function(t){t.target.__dragStart=t.target._latlng},_childMarkerMoved:function(t){if(!this._ignoreMove&&!t.target.__dragStart){var e=t.target._popup&&t.target._popup.isOpen();this._moveChild(t.target,t.oldLatLng,t.latlng),e&&t.target.openPopup()}},_moveChild:function(t,e,i){t._latlng=e,this.removeLayer(t),t._latlng=i,this.addLayer(t)},_childMarkerDragEnd:function(t){var e=t.target.__dragStart;delete t.target.__dragStart,e&&this._moveChild(t.target,e,t.target._latlng)},_removeLayer:function(t,e,i){var n=this._gridClusters,o=this._gridUnclustered,r=this._featureGroup,s=this._map,a=Math.floor(this._map.getMinZoom());e&&this._removeFromGridUnclustered(t,this._maxZoom);var l,h=t.__parent,c=h._markers;for(this._arraySplice(c,t);h&&(h._childCount--,h._boundsNeedUpdate=!0,!(h._zoom<a));)e&&h._childCount<=1?(l=h._markers[0]===t?h._markers[1]:h._markers[0],n[h._zoom].removeObject(h,s.project(h._cLatLng,h._zoom)),o[h._zoom].addObject(l,s.project(l.getLatLng(),h._zoom)),this._arraySplice(h.__parent._childClusters,h),h.__parent._markers.push(l),l.__parent=h.__parent,h._icon&&(r.removeLayer(h),i||r.addLayer(l))):h._iconNeedsUpdate=!0,h=h.__parent;delete t.__parent},_isOrIsParent:function(t,e){for(;e;){if(t===e)return!0;e=e.parentNode}return!1},fire:function(t,e,i){if(e&&e.layer instanceof L.MarkerCluster){if(e.originalEvent&&this._isOrIsParent(e.layer._icon,e.originalEvent.relatedTarget))return;t="cluster"+t}L.FeatureGroup.prototype.fire.call(this,t,e,i)},listens:function(t,e){return L.FeatureGroup.prototype.listens.call(this,t,e)||L.FeatureGroup.prototype.listens.call(this,"cluster"+t,e)},_defaultIconCreateFunction:function(t){var e=t.getChildCount(),i=" marker-cluster-";return i+=e<10?"small":e<100?"medium":"large",new L.DivIcon({html:"<div><span>"+e+"</span></div>",className:"marker-cluster"+i,iconSize:new L.Point(40,40)})},_bindEvents:function(){var t=this._map,e=this.options.spiderfyOnMaxZoom,i=this.options.showCoverageOnHover,n=this.options.zoomToBoundsOnClick;(e||n)&&this.on("clusterclick",this._zoomOrSpiderfy,this),i&&(this.on("clustermouseover",this._showCoverage,this),this.on("clustermouseout",this._hideCoverage,this),t.on("zoomend",this._hideCoverage,this))},_zoomOrSpiderfy:function(t){for(var e=t.layer,i=e;1===i._childClusters.length;)i=i._childClusters[0];i._zoom===this._maxZoom&&i._childCount===e._childCount&&this.options.spiderfyOnMaxZoom?e.spiderfy():this.options.zoomToBoundsOnClick&&e.zoomToBounds(),t.originalEvent&&13===t.originalEvent.keyCode&&this._map._container.focus()},_showCoverage:function(t){var e=this._map;this._inZoomAnimation||(this._shownPolygon&&e.removeLayer(this._shownPolygon),t.layer.getChildCount()>2&&t.layer!==this._spiderfied&&(this._shownPolygon=new L.Polygon(t.layer.getConvexHull(),this.options.polygonOptions),e.addLayer(this._shownPolygon)))},_hideCoverage:function(){this._shownPolygon&&(this._map.removeLayer(this._shownPolygon),this._shownPolygon=null)},_unbindEvents:function(){var t=this.options.spiderfyOnMaxZoom,e=this.options.showCoverageOnHover,i=this.options.zoomToBoundsOnClick,n=this._map;(t||i)&&this.off("clusterclick",this._zoomOrSpiderfy,this),e&&(this.off("clustermouseover",this._showCoverage,this),this.off("clustermouseout",this._hideCoverage,this),n.off("zoomend",this._hideCoverage,this))},_zoomEnd:function(){this._map&&(this._mergeSplitClusters(),this._zoom=Math.round(this._map._zoom),this._currentShownBounds=this._getExpandedVisibleBounds())},_moveEnd:function(){if(!this._inZoomAnimation){var t=this._getExpandedVisibleBounds();this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,t),this._topClusterLevel._recursivelyAddChildrenToMap(null,Math.round(this._map._zoom),t),this._currentShownBounds=t}},_generateInitialClusters:function(){var t=Math.ceil(this._map.getMaxZoom()),e=Math.floor(this._map.getMinZoom()),i=this.options.maxClusterRadius,n=i;"function"!=typeof i&&(n=function(){return i}),null!==this.options.disableClusteringAtZoom&&(t=this.options.disableClusteringAtZoom-1),this._maxZoom=t,this._gridClusters={},this._gridUnclustered={};for(var o=t;o>=e;o--)this._gridClusters[o]=new L.DistanceGrid(n(o)),this._gridUnclustered[o]=new L.DistanceGrid(n(o));this._topClusterLevel=new this._markerCluster(this,e-1)},_addLayer:function(t,e){var i,n,o=this._gridClusters,r=this._gridUnclustered,s=Math.floor(this._map.getMinZoom());for(this.options.singleMarkerMode&&this._overrideMarkerIcon(t),t.on(this._childMarkerEventHandlers,this);e>=s;e--){i=this._map.project(t.getLatLng(),e);var a=o[e].getNearObject(i);if(a)return a._addChild(t),void(t.__parent=a);if(a=r[e].getNearObject(i)){var l=a.__parent;l&&this._removeLayer(a,!1);var h=new this._markerCluster(this,e,a,t);o[e].addObject(h,this._map.project(h._cLatLng,e)),a.__parent=h,t.__parent=h;var c=h;for(n=e-1;n>l._zoom;n--)c=new this._markerCluster(this,n,c),o[n].addObject(c,this._map.project(a.getLatLng(),n));return l._addChild(c),void this._removeFromGridUnclustered(a,e)}r[e].addObject(t,i)}this._topClusterLevel._addChild(t),t.__parent=this._topClusterLevel},_refreshClustersIcons:function(){this._featureGroup.eachLayer((function(t){t instanceof L.MarkerCluster&&t._iconNeedsUpdate&&t._updateIcon()}))},_enqueue:function(t){this._queue.push(t),this._queueTimeout||(this._queueTimeout=setTimeout(L.bind(this._processQueue,this),300))},_processQueue:function(){for(var t=0;t<this._queue.length;t++)this._queue[t].call(this);this._queue.length=0,clearTimeout(this._queueTimeout),this._queueTimeout=null},_mergeSplitClusters:function(){var t=Math.round(this._map._zoom);this._processQueue(),this._zoom<t&&this._currentShownBounds.intersects(this._getExpandedVisibleBounds())?(this._animationStart(),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,this._getExpandedVisibleBounds()),this._animationZoomIn(this._zoom,t)):this._zoom>t?(this._animationStart(),this._animationZoomOut(this._zoom,t)):this._moveEnd()},_getExpandedVisibleBounds:function(){return this.options.removeOutsideVisibleBounds?L.Browser.mobile?this._checkBoundsMaxLat(this._map.getBounds()):this._checkBoundsMaxLat(this._map.getBounds().pad(1)):this._mapBoundsInfinite},_checkBoundsMaxLat:function(t){var e=this._maxLat;return void 0!==e&&(t.getNorth()>=e&&(t._northEast.lat=1/0),t.getSouth()<=-e&&(t._southWest.lat=-1/0)),t},_animationAddLayerNonAnimated:function(t,e){if(e===t)this._featureGroup.addLayer(t);else if(2===e._childCount){e._addToMap();var i=e.getAllChildMarkers();this._featureGroup.removeLayer(i[0]),this._featureGroup.removeLayer(i[1])}else e._updateIcon()},_extractNonGroupLayers:function(t,e){var i,n=t.getLayers(),o=0;for(e=e||[];o<n.length;o++)(i=n[o])instanceof L.LayerGroup?this._extractNonGroupLayers(i,e):e.push(i);return e},_overrideMarkerIcon:function(t){return t.options.icon=this.options.iconCreateFunction({getChildCount:function(){return 1},getAllChildMarkers:function(){return[t]}})}});L.MarkerClusterGroup.include({_mapBoundsInfinite:new L.LatLngBounds(new L.LatLng(-1/0,-1/0),new L.LatLng(1/0,1/0))}),L.MarkerClusterGroup.include({_noAnimation:{_animationStart:function(){},_animationZoomIn:function(t,e){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),t),this._topClusterLevel._recursivelyAddChildrenToMap(null,e,this._getExpandedVisibleBounds()),this.fire("animationend")},_animationZoomOut:function(t,e){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),t),this._topClusterLevel._recursivelyAddChildrenToMap(null,e,this._getExpandedVisibleBounds()),this.fire("animationend")},_animationAddLayer:function(t,e){this._animationAddLayerNonAnimated(t,e)}},_withAnimation:{_animationStart:function(){this._map._mapPane.className+=" leaflet-cluster-anim",this._inZoomAnimation++},_animationZoomIn:function(t,e){var i,n=this._getExpandedVisibleBounds(),o=this._featureGroup,r=Math.floor(this._map.getMinZoom());this._ignoreMove=!0,this._topClusterLevel._recursively(n,t,r,(function(r){var s,a=r._latlng,l=r._markers;for(n.contains(a)||(a=null),r._isSingleParent()&&t+1===e?(o.removeLayer(r),r._recursivelyAddChildrenToMap(null,e,n)):(r.clusterHide(),r._recursivelyAddChildrenToMap(a,e,n)),i=l.length-1;i>=0;i--)s=l[i],n.contains(s._latlng)||o.removeLayer(s)})),this._forceLayout(),this._topClusterLevel._recursivelyBecomeVisible(n,e),o.eachLayer((function(t){t instanceof L.MarkerCluster||!t._icon||t.clusterShow()})),this._topClusterLevel._recursively(n,t,e,(function(t){t._recursivelyRestoreChildPositions(e)})),this._ignoreMove=!1,this._enqueue((function(){this._topClusterLevel._recursively(n,t,r,(function(t){o.removeLayer(t),t.clusterShow()})),this._animationEnd()}))},_animationZoomOut:function(t,e){this._animationZoomOutSingle(this._topClusterLevel,t-1,e),this._topClusterLevel._recursivelyAddChildrenToMap(null,e,this._getExpandedVisibleBounds()),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),t,this._getExpandedVisibleBounds())},_animationAddLayer:function(t,e){var i=this,n=this._featureGroup;n.addLayer(t),e!==t&&(e._childCount>2?(e._updateIcon(),this._forceLayout(),this._animationStart(),t._setPos(this._map.latLngToLayerPoint(e.getLatLng())),t.clusterHide(),this._enqueue((function(){n.removeLayer(t),t.clusterShow(),i._animationEnd()}))):(this._forceLayout(),i._animationStart(),i._animationZoomOutSingle(e,this._map.getMaxZoom(),this._zoom)))}},_animationZoomOutSingle:function(t,e,i){var n=this._getExpandedVisibleBounds(),o=Math.floor(this._map.getMinZoom());t._recursivelyAnimateChildrenInAndAddSelfToMap(n,o,e+1,i);var r=this;this._forceLayout(),t._recursivelyBecomeVisible(n,i),this._enqueue((function(){if(1===t._childCount){var s=t._markers[0];this._ignoreMove=!0,s.setLatLng(s.getLatLng()),this._ignoreMove=!1,s.clusterShow&&s.clusterShow()}else t._recursively(n,i,o,(function(t){t._recursivelyRemoveChildrenFromMap(n,o,e+1)}));r._animationEnd()}))},_animationEnd:function(){this._map&&(this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim","")),this._inZoomAnimation--,this.fire("animationend")},_forceLayout:function(){L.Util.falseFn(document.body.offsetWidth)}}),L.markerClusterGroup=function(t){return new L.MarkerClusterGroup(t)};var i=L.MarkerCluster=L.Marker.extend({options:L.Icon.prototype.options,initialize:function(t,e,i,n){L.Marker.prototype.initialize.call(this,i?i._cLatLng||i.getLatLng():new L.LatLng(0,0),{icon:this,pane:t.options.clusterPane}),this._group=t,this._zoom=e,this._markers=[],this._childClusters=[],this._childCount=0,this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._bounds=new L.LatLngBounds,i&&this._addChild(i),n&&this._addChild(n)},getAllChildMarkers:function(t,e){t=t||[];for(var i=this._childClusters.length-1;i>=0;i--)this._childClusters[i].getAllChildMarkers(t);for(var n=this._markers.length-1;n>=0;n--)e&&this._markers[n].__dragStart||t.push(this._markers[n]);return t},getChildCount:function(){return this._childCount},zoomToBounds:function(t){for(var e,i=this._childClusters.slice(),n=this._group._map,o=n.getBoundsZoom(this._bounds),r=this._zoom+1,s=n.getZoom();i.length>0&&o>r;){r++;var a=[];for(e=0;e<i.length;e++)a=a.concat(i[e]._childClusters);i=a}o>r?this._group._map.setView(this._latlng,r):o<=s?this._group._map.setView(this._latlng,s+1):this._group._map.fitBounds(this._bounds,t)},getBounds:function(){var t=new L.LatLngBounds;return t.extend(this._bounds),t},_updateIcon:function(){this._iconNeedsUpdate=!0,this._icon&&this.setIcon(this)},createIcon:function(){return this._iconNeedsUpdate&&(this._iconObj=this._group.options.iconCreateFunction(this),this._iconNeedsUpdate=!1),this._iconObj.createIcon()},createShadow:function(){return this._iconObj.createShadow()},_addChild:function(t,e){this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._setClusterCenter(t),t instanceof L.MarkerCluster?(e||(this._childClusters.push(t),t.__parent=this),this._childCount+=t._childCount):(e||this._markers.push(t),this._childCount++),this.__parent&&this.__parent._addChild(t,!0)},_setClusterCenter:function(t){this._cLatLng||(this._cLatLng=t._cLatLng||t._latlng)},_resetBounds:function(){var t=this._bounds;t._southWest&&(t._southWest.lat=1/0,t._southWest.lng=1/0),t._northEast&&(t._northEast.lat=-1/0,t._northEast.lng=-1/0)},_recalculateBounds:function(){var t,e,i,n,o=this._markers,r=this._childClusters,s=0,a=0,l=this._childCount;if(0!==l){for(this._resetBounds(),t=0;t<o.length;t++)i=o[t]._latlng,this._bounds.extend(i),s+=i.lat,a+=i.lng;for(t=0;t<r.length;t++)(e=r[t])._boundsNeedUpdate&&e._recalculateBounds(),this._bounds.extend(e._bounds),i=e._wLatLng,n=e._childCount,s+=i.lat*n,a+=i.lng*n;this._latlng=this._wLatLng=new L.LatLng(s/l,a/l),this._boundsNeedUpdate=!1}},_addToMap:function(t){t&&(this._backupLatlng=this._latlng,this.setLatLng(t)),this._group._featureGroup.addLayer(this)},_recursivelyAnimateChildrenIn:function(t,e,i){this._recursively(t,this._group._map.getMinZoom(),i-1,(function(t){var i,n,o=t._markers;for(i=o.length-1;i>=0;i--)(n=o[i])._icon&&(n._setPos(e),n.clusterHide())}),(function(t){var i,n,o=t._childClusters;for(i=o.length-1;i>=0;i--)(n=o[i])._icon&&(n._setPos(e),n.clusterHide())}))},_recursivelyAnimateChildrenInAndAddSelfToMap:function(t,e,i,n){this._recursively(t,n,e,(function(o){o._recursivelyAnimateChildrenIn(t,o._group._map.latLngToLayerPoint(o.getLatLng()).round(),i),o._isSingleParent()&&i-1===n?(o.clusterShow(),o._recursivelyRemoveChildrenFromMap(t,e,i)):o.clusterHide(),o._addToMap()}))},_recursivelyBecomeVisible:function(t,e){this._recursively(t,this._group._map.getMinZoom(),e,null,(function(t){t.clusterShow()}))},_recursivelyAddChildrenToMap:function(t,e,i){this._recursively(i,this._group._map.getMinZoom()-1,e,(function(n){if(e!==n._zoom)for(var o=n._markers.length-1;o>=0;o--){var r=n._markers[o];i.contains(r._latlng)&&(t&&(r._backupLatlng=r.getLatLng(),r.setLatLng(t),r.clusterHide&&r.clusterHide()),n._group._featureGroup.addLayer(r))}}),(function(e){e._addToMap(t)}))},_recursivelyRestoreChildPositions:function(t){for(var e=this._markers.length-1;e>=0;e--){var i=this._markers[e];i._backupLatlng&&(i.setLatLng(i._backupLatlng),delete i._backupLatlng)}if(t-1===this._zoom)for(var n=this._childClusters.length-1;n>=0;n--)this._childClusters[n]._restorePosition();else for(var o=this._childClusters.length-1;o>=0;o--)this._childClusters[o]._recursivelyRestoreChildPositions(t)},_restorePosition:function(){this._backupLatlng&&(this.setLatLng(this._backupLatlng),delete this._backupLatlng)},_recursivelyRemoveChildrenFromMap:function(t,e,i,n){var o,r;this._recursively(t,e-1,i-1,(function(t){for(r=t._markers.length-1;r>=0;r--)o=t._markers[r],n&&n.contains(o._latlng)||(t._group._featureGroup.removeLayer(o),o.clusterShow&&o.clusterShow())}),(function(t){for(r=t._childClusters.length-1;r>=0;r--)o=t._childClusters[r],n&&n.contains(o._latlng)||(t._group._featureGroup.removeLayer(o),o.clusterShow&&o.clusterShow())}))},_recursively:function(t,e,i,n,o){var r,s,a=this._childClusters,l=this._zoom;if(e<=l&&(n&&n(this),o&&l===i&&o(this)),l<e||l<i)for(r=a.length-1;r>=0;r--)(s=a[r])._boundsNeedUpdate&&s._recalculateBounds(),t.intersects(s._bounds)&&s._recursively(t,e,i,n,o)},_isSingleParent:function(){return this._childClusters.length>0&&this._childClusters[0]._childCount===this._childCount}});L.Marker.include({clusterHide:function(){var t=this.options.opacity;return this.setOpacity(0),this.options.opacity=t,this},clusterShow:function(){return this.setOpacity(this.options.opacity)}}),L.DistanceGrid=function(t){this._cellSize=t,this._sqCellSize=t*t,this._grid={},this._objectPoint={}},L.DistanceGrid.prototype={addObject:function(t,e){var i=this._getCoord(e.x),n=this._getCoord(e.y),o=this._grid,r=o[n]=o[n]||{},s=r[i]=r[i]||[],a=L.Util.stamp(t);this._objectPoint[a]=e,s.push(t)},updateObject:function(t,e){this.removeObject(t),this.addObject(t,e)},removeObject:function(t,e){var i,n,o=this._getCoord(e.x),r=this._getCoord(e.y),s=this._grid,a=s[r]=s[r]||{},l=a[o]=a[o]||[];for(delete this._objectPoint[L.Util.stamp(t)],i=0,n=l.length;i<n;i++)if(l[i]===t)return l.splice(i,1),1===n&&delete a[o],!0},eachObject:function(t,e){var i,n,o,r,s,a,l=this._grid;for(i in l)for(n in s=l[i])for(o=0,r=(a=s[n]).length;o<r;o++)t.call(e,a[o])&&(o--,r--)},getNearObject:function(t){var e,i,n,o,r,s,a,l,h=this._getCoord(t.x),c=this._getCoord(t.y),d=this._objectPoint,u=this._sqCellSize,p=null;for(e=c-1;e<=c+1;e++)if(o=this._grid[e])for(i=h-1;i<=h+1;i++)if(r=o[i])for(n=0,s=r.length;n<s;n++)a=r[n],((l=this._sqDist(d[L.Util.stamp(a)],t))<u||l<=u&&null===p)&&(u=l,p=a);return p},_getCoord:function(t){var e=Math.floor(t/this._cellSize);return isFinite(e)?e:t},_sqDist:function(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n}},L.QuickHull={getDistant:function(t,e){var i=e[1].lat-e[0].lat;return(e[0].lng-e[1].lng)*(t.lat-e[0].lat)+i*(t.lng-e[0].lng)},findMostDistantPointFromBaseLine:function(t,e){var i,n,o,r=0,s=null,a=[];for(i=e.length-1;i>=0;i--)n=e[i],(o=this.getDistant(n,t))>0&&(a.push(n),o>r&&(r=o,s=n));return{maxPoint:s,newPoints:a}},buildConvexHull:function(t,e){var i=[],n=this.findMostDistantPointFromBaseLine(t,e);return n.maxPoint?i=(i=i.concat(this.buildConvexHull([t[0],n.maxPoint],n.newPoints))).concat(this.buildConvexHull([n.maxPoint,t[1]],n.newPoints)):[t[0]]},getConvexHull:function(t){var e,i=!1,n=!1,o=!1,r=!1,s=null,a=null,l=null,h=null,c=null,d=null;for(e=t.length-1;e>=0;e--){var u=t[e];(!1===i||u.lat>i)&&(s=u,i=u.lat),(!1===n||u.lat<n)&&(a=u,n=u.lat),(!1===o||u.lng>o)&&(l=u,o=u.lng),(!1===r||u.lng<r)&&(h=u,r=u.lng)}return n!==i?(d=a,c=s):(d=h,c=l),[].concat(this.buildConvexHull([d,c],t),this.buildConvexHull([c,d],t))}},L.MarkerCluster.include({getConvexHull:function(){var t,e,i=this.getAllChildMarkers(),n=[];for(e=i.length-1;e>=0;e--)t=i[e].getLatLng(),n.push(t);return L.QuickHull.getConvexHull(n)}}),L.MarkerCluster.include({_2PI:2*Math.PI,_circleFootSeparation:25,_circleStartAngle:0,_spiralFootSeparation:28,_spiralLengthStart:11,_spiralLengthFactor:5,_circleSpiralSwitchover:9,spiderfy:function(){if(this._group._spiderfied!==this&&!this._group._inZoomAnimation){var t,e=this.getAllChildMarkers(null,!0),i=this._group._map.latLngToLayerPoint(this._latlng);this._group._unspiderfy(),this._group._spiderfied=this,e.length>=this._circleSpiralSwitchover?t=this._generatePointsSpiral(e.length,i):(i.y+=10,t=this._generatePointsCircle(e.length,i)),this._animationSpiderfy(e,t)}},unspiderfy:function(t){this._group._inZoomAnimation||(this._animationUnspiderfy(t),this._group._spiderfied=null)},_generatePointsCircle:function(t,e){var i,n,o=this._group.options.spiderfyDistanceMultiplier*this._circleFootSeparation*(2+t)/this._2PI,r=this._2PI/t,s=[];for(o=Math.max(o,35),s.length=t,i=0;i<t;i++)n=this._circleStartAngle+i*r,s[i]=new L.Point(e.x+o*Math.cos(n),e.y+o*Math.sin(n))._round();return s},_generatePointsSpiral:function(t,e){var i,n=this._group.options.spiderfyDistanceMultiplier,o=n*this._spiralLengthStart,r=n*this._spiralFootSeparation,s=n*this._spiralLengthFactor*this._2PI,a=0,l=[];for(l.length=t,i=t;i>=0;i--)i<t&&(l[i]=new L.Point(e.x+o*Math.cos(a),e.y+o*Math.sin(a))._round()),o+=s/(a+=r/o+5e-4*i);return l},_noanimationUnspiderfy:function(){var t,e,i=this._group,n=i._map,o=i._featureGroup,r=this.getAllChildMarkers(null,!0);for(i._ignoreMove=!0,this.setOpacity(1),e=r.length-1;e>=0;e--)t=r[e],o.removeLayer(t),t._preSpiderfyLatlng&&(t.setLatLng(t._preSpiderfyLatlng),delete t._preSpiderfyLatlng),t.setZIndexOffset&&t.setZIndexOffset(0),t._spiderLeg&&(n.removeLayer(t._spiderLeg),delete t._spiderLeg);i.fire("unspiderfied",{cluster:this,markers:r}),i._ignoreMove=!1,i._spiderfied=null}}),L.MarkerClusterNonAnimated=L.MarkerCluster.extend({_animationSpiderfy:function(t,e){var i,n,o,r,s=this._group,a=s._map,l=s._featureGroup,h=this._group.options.spiderLegPolylineOptions;for(s._ignoreMove=!0,i=0;i<t.length;i++)r=a.layerPointToLatLng(e[i]),n=t[i],o=new L.Polyline([this._latlng,r],h),a.addLayer(o),n._spiderLeg=o,n._preSpiderfyLatlng=n._latlng,n.setLatLng(r),n.setZIndexOffset&&n.setZIndexOffset(1e6),l.addLayer(n);this.setOpacity(.3),s._ignoreMove=!1,s.fire("spiderfied",{cluster:this,markers:t})},_animationUnspiderfy:function(){this._noanimationUnspiderfy()}}),L.MarkerCluster.include({_animationSpiderfy:function(t,e){var i,n,o,r,s,a,l=this,h=this._group,c=h._map,d=h._featureGroup,u=this._latlng,p=c.latLngToLayerPoint(u),f=L.Path.SVG,m=L.extend({},this._group.options.spiderLegPolylineOptions),_=m.opacity;for(void 0===_&&(_=L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity),f?(m.opacity=0,m.className=(m.className||"")+" leaflet-cluster-spider-leg"):m.opacity=_,h._ignoreMove=!0,i=0;i<t.length;i++)n=t[i],a=c.layerPointToLatLng(e[i]),o=new L.Polyline([u,a],m),c.addLayer(o),n._spiderLeg=o,f&&(s=(r=o._path).getTotalLength()+.1,r.style.strokeDasharray=s,r.style.strokeDashoffset=s),n.setZIndexOffset&&n.setZIndexOffset(1e6),n.clusterHide&&n.clusterHide(),d.addLayer(n),n._setPos&&n._setPos(p);for(h._forceLayout(),h._animationStart(),i=t.length-1;i>=0;i--)a=c.layerPointToLatLng(e[i]),(n=t[i])._preSpiderfyLatlng=n._latlng,n.setLatLng(a),n.clusterShow&&n.clusterShow(),f&&((r=(o=n._spiderLeg)._path).style.strokeDashoffset=0,o.setStyle({opacity:_}));this.setOpacity(.3),h._ignoreMove=!1,setTimeout((function(){h._animationEnd(),h.fire("spiderfied",{cluster:l,markers:t})}),200)},_animationUnspiderfy:function(t){var e,i,n,o,r,s,a=this,l=this._group,h=l._map,c=l._featureGroup,d=t?h._latLngToNewLayerPoint(this._latlng,t.zoom,t.center):h.latLngToLayerPoint(this._latlng),u=this.getAllChildMarkers(null,!0),p=L.Path.SVG;for(l._ignoreMove=!0,l._animationStart(),this.setOpacity(1),i=u.length-1;i>=0;i--)(e=u[i])._preSpiderfyLatlng&&(e.closePopup(),e.setLatLng(e._preSpiderfyLatlng),delete e._preSpiderfyLatlng,s=!0,e._setPos&&(e._setPos(d),s=!1),e.clusterHide&&(e.clusterHide(),s=!1),s&&c.removeLayer(e),p&&(r=(o=(n=e._spiderLeg)._path).getTotalLength()+.1,o.style.strokeDashoffset=r,n.setStyle({opacity:0})));l._ignoreMove=!1,setTimeout((function(){var t=0;for(i=u.length-1;i>=0;i--)(e=u[i])._spiderLeg&&t++;for(i=u.length-1;i>=0;i--)(e=u[i])._spiderLeg&&(e.clusterShow&&e.clusterShow(),e.setZIndexOffset&&e.setZIndexOffset(0),t>1&&c.removeLayer(e),h.removeLayer(e._spiderLeg),delete e._spiderLeg);l._animationEnd(),l.fire("unspiderfied",{cluster:a,markers:u})}),200)}}),L.MarkerClusterGroup.include({_spiderfied:null,unspiderfy:function(){this._unspiderfy.apply(this,arguments)},_spiderfierOnAdd:function(){this._map.on("click",this._unspiderfyWrapper,this),this._map.options.zoomAnimation&&this._map.on("zoomstart",this._unspiderfyZoomStart,this),this._map.on("zoomend",this._noanimationUnspiderfy,this),L.Browser.touch||this._map.getRenderer(this)},_spiderfierOnRemove:function(){this._map.off("click",this._unspiderfyWrapper,this),this._map.off("zoomstart",this._unspiderfyZoomStart,this),this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._map.off("zoomend",this._noanimationUnspiderfy,this),this._noanimationUnspiderfy()},_unspiderfyZoomStart:function(){this._map&&this._map.on("zoomanim",this._unspiderfyZoomAnim,this)},_unspiderfyZoomAnim:function(t){L.DomUtil.hasClass(this._map._mapPane,"leaflet-touching")||(this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._unspiderfy(t))},_unspiderfyWrapper:function(){this._unspiderfy()},_unspiderfy:function(t){this._spiderfied&&this._spiderfied.unspiderfy(t)},_noanimationUnspiderfy:function(){this._spiderfied&&this._spiderfied._noanimationUnspiderfy()},_unspiderfyLayer:function(t){t._spiderLeg&&(this._featureGroup.removeLayer(t),t.clusterShow&&t.clusterShow(),t.setZIndexOffset&&t.setZIndexOffset(0),this._map.removeLayer(t._spiderLeg),delete t._spiderLeg)}}),L.MarkerClusterGroup.include({refreshClusters:function(t){return t?t instanceof L.MarkerClusterGroup?t=t._topClusterLevel.getAllChildMarkers():t instanceof L.LayerGroup?t=t._layers:t instanceof L.MarkerCluster?t=t.getAllChildMarkers():t instanceof L.Marker&&(t=[t]):t=this._topClusterLevel.getAllChildMarkers(),this._flagParentsIconsNeedUpdate(t),this._refreshClustersIcons(),this.options.singleMarkerMode&&this._refreshSingleMarkerModeMarkers(t),this},_flagParentsIconsNeedUpdate:function(t){var e,i;for(e in t)for(i=t[e].__parent;i;)i._iconNeedsUpdate=!0,i=i.__parent},_refreshSingleMarkerModeMarkers:function(t){var e,i;for(e in t)i=t[e],this.hasLayer(i)&&i.setIcon(this._overrideMarkerIcon(i))}}),L.Marker.include({refreshIconOptions:function(t,e){var i=this.options.icon;return L.setOptions(i,t),this.setIcon(i),e&&this.__parent&&this.__parent._group.refreshClusters(this),this}}),t.MarkerClusterGroup=e,t.MarkerCluster=i}(e)},function(t,e,i){"use strict";i.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=new WeakMap,o=t=>"function"==typeof t&&n.has(t),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},a={},l={},h=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${h}--\x3e`,d=new RegExp(`${h}|${c}`),u="$lit$";class p{constructor(t,e){this.parts=[],this.element=e;const i=[],n=[],o=document.createTreeWalker(e.content,133,null,!1);let r=0,s=-1,a=0;const{strings:l,values:{length:c}}=t;for(;a<c;){const t=o.nextNode();if(null!==t){if(s++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let n=0;for(let t=0;t<i;t++)f(e[t].name,u)&&n++;for(;n-- >0;){const e=l[a],i=g.exec(e)[2],n=i.toLowerCase()+u,o=t.getAttribute(n);t.removeAttribute(n);const r=o.split(d);this.parts.push({type:"attribute",index:s,name:i,strings:r}),a+=r.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(h)>=0){const n=t.parentNode,o=e.split(d),r=o.length-1;for(let e=0;e<r;e++){let i,r=o[e];if(""===r)i=_();else{const t=g.exec(r);null!==t&&f(t[2],u)&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-u.length)+t[3]),i=document.createTextNode(r)}n.insertBefore(i,t),this.parts.push({type:"node",index:++s})}""===o[r]?(n.insertBefore(_(),t),i.push(t)):t.data=o[r],a+=r}}else if(8===t.nodeType)if(t.data===h){const e=t.parentNode;null!==t.previousSibling&&s!==r||(s++,e.insertBefore(_(),t)),r=s,this.parts.push({type:"node",index:s}),null===t.nextSibling?t.data="":(i.push(t),s--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(h,e+1));)this.parts.push({type:"node",index:-1}),a++}}else o.currentNode=n.pop()}for(const t of i)t.parentNode.removeChild(t)}}const f=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},m=t=>-1!==t.index,_=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let o,s=0,a=0,l=n.nextNode();for(;s<i.length;)if(o=i[s],m(o)){for(;a<o.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=e.pop(),l=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));s++}else this.__parts.push(void 0),s++;return r&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=` ${h} `;class b{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let n=0;n<t;n++){const t=this.strings[n],o=t.lastIndexOf("\x3c!--");i=(o>-1||i)&&-1===t.indexOf("--\x3e",o+1);const r=g.exec(t);e+=null===r?t+(i?y:c):t.substr(0,r.index)+r[1]+r[2]+u+r[3]+h}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const w=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class C{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new z(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let n=0;n<e;n++){i+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(w(t)||!x(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class z{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a||w(t)&&t===this.value||(this.value=t,o(t)||(this.committer.dirty=!0))}commit(){for(;o(this.value);){const t=this.value;this.value=a,t(this)}this.value!==a&&this.committer.commit()}}class M{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(_()),this.endNode=t.appendChild(_())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=_()),t.__insert(this.endNode=_())}insertAfterPart(t){t.__insert(this.startNode=_()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;o(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}const t=this.__pendingValue;t!==a&&(w(t)?t!==this.value&&this.__commitText(t):t instanceof b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):x(t)?this.__commitIterable(t):t===l?(this.value=l,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const i=new v(e,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,n=0;for(const o of t)i=e[n],void 0===i&&(i=new M(this.options),e.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(e[n-1])),i.setValue(o),i.commit(),n++;n<e.length&&(e.length=n,this.clear(i&&i.endNode))}clear(t=this.startNode){s(this.startNode.parentNode,t.nextSibling,this.endNode)}}class S{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;o(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=a}}class P extends C{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new k(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class k extends z{}let T=!1;try{const t={get capture(){return T=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class E{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;o(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=O(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const O=t=>t&&(T?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const A=new class{handleAttributeExpressions(t,e,i,n){const o=e[0];if("."===o){return new P(t,e.slice(1),i).parts}return"@"===o?[new E(t,e.slice(1),n.eventContext)]:"?"===o?[new S(t,e.slice(1),i)]:new C(t,e,i).parts}handleTextExpression(t){return new M(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function H(t){let e=I.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},I.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(h);return i=e.keyString.get(n),void 0===i&&(i=new p(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const I=new Map,N=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const j=(t,...e)=>new b(t,e,"html",A),R=133;function V(t,e){const{element:{content:i},parts:n}=t,o=document.createTreeWalker(i,R,null,!1);let r=D(n),s=n[r],a=-1,l=0;const h=[];let c=null;for(;o.nextNode();){a++;const t=o.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(h.push(t),null===c&&(c=t)),null!==c&&l++;void 0!==s&&s.index===a;)s.index=null!==c?-1:s.index-l,r=D(n,r),s=n[r]}h.forEach(t=>t.parentNode.removeChild(t))}const B=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,R,null,!1);for(;i.nextNode();)e++;return e},D=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(m(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Z=(t,e)=>`${t}--${e}`;let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),F=!1);const U=t=>e=>{const i=Z(e.type,t);let n=I.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},I.set(i,n));let o=n.stringsArray.get(e.strings);if(void 0!==o)return o;const r=e.strings.join(h);if(o=n.keyString.get(r),void 0===o){const i=e.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(i,t),o=new p(e,i),n.keyString.set(r,o)}return n.stringsArray.set(e.strings,o),o},q=["html","svg"],G=new Set,W=(t,e,i)=>{G.add(t);const n=i?i.element:document.createElement("template"),o=e.querySelectorAll("style"),{length:r}=o;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(n,t);const s=document.createElement("style");for(let t=0;t<r;t++){const e=o[t];e.parentNode.removeChild(e),s.textContent+=e.textContent}(t=>{q.forEach(e=>{const i=I.get(Z(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),V(t,i)})})})(t);const a=n.content;i?function(t,e,i=null){const{element:{content:n},parts:o}=t;if(null==i)return void n.appendChild(e);const r=document.createTreeWalker(n,R,null,!1);let s=D(o),a=0,l=-1;for(;r.nextNode();){for(l++,r.currentNode===i&&(a=B(e),i.parentNode.insertBefore(e,i));-1!==s&&o[s].index===l;){if(a>0){for(;-1!==s;)o[s].index+=a,s=D(o,s);return}s=D(o,s)}}}(i,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(s,a.firstChild);const t=new Set;t.add(s),V(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const $={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},J=(t,e)=>e!==t&&(e==e||t==t),Y={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:J},K=Promise.resolve(!0),X=1,Q=4,tt=8,et=16,it=32,nt="finalized";class ot extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=K,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const n=this._attributeNameForProperty(i,e);void 0!==n&&(this._attributeToPropertyMap.set(n,i),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=Y){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[i]},set(e){const n=this[t];this[i]=e,this._requestUpdate(t,n)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(nt)||t.finalize(),this[nt]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=J){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,n=e.converter||$,o="function"==typeof n?n:n.fromAttribute;return o?o(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,n=e.converter;return(n&&n.toAttribute||$.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|it,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=Y){const n=this.constructor,o=n._attributeNameForProperty(t,i);if(void 0!==o){const t=n._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=this._updateState|tt,null==t?this.removeAttribute(o):this.setAttribute(o,t),this._updateState=this._updateState&~tt}}_attributeToProperty(t,e){if(this._updateState&tt)return;const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(void 0!==n){const t=i._classProperties.get(n)||Y;this._updateState=this._updateState|et,this[n]=i._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~et}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const n=this.constructor,o=n._classProperties.get(t)||Y;n._valueHasChanged(this[t],e,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==o.reflect||this._updateState&et||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):i=!1}!this._hasRequestedUpdate&&i&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|Q;const i=this._updatePromise;this._updatePromise=new Promise((i,n)=>{t=i,e=n});try{await i}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&it}get _hasRequestedUpdate(){return this._updateState&Q}get hasUpdated(){return this._updateState&X}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&X||(this._updateState=this._updateState|X,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Q}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}ot[nt]=!0;const rt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const st=t=>t.flat?t.flat(1/0):function t(e,i=[]){for(let n=0,o=e.length;n<o;n++){const o=e[n];Array.isArray(o)?t(o,i):i.push(o)}return i}(t);class at extends ot{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){st(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?rt?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof b&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}at.finalized=!0,at.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,o=N.has(e),r=F&&11===e.nodeType&&!!e.host,a=r&&!G.has(n),l=a?document.createDocumentFragment():e;if(((t,e,i)=>{let n=N.get(e);void 0===n&&(s(e,e.firstChild),N.set(e,n=new M(Object.assign({templateFactory:H},i))),n.appendInto(e)),n.setValue(t),n.commit()})(t,l,Object.assign({templateFactory:U(n)},i)),a){const t=N.get(l);N.delete(l);const i=t.value instanceof v?t.value.template:void 0;W(n,l,i),s(e,e.firstChild),e.appendChild(l),N.set(e,t)}!o&&r&&window.ShadyCSS.styleElement(e.host)};var lt=j`
<style>
  [hidden] {
    display: none !important;
  }

  h1 {
    font-size: 20px;
    font-weight: bold;
    color: var(--app-color-charcoal);
    line-height: 24px;
  }
  h1.inverse {
    color: var(--app-color-white);
  }

  h2 {
    font-size: 17px;
    font-style: italic;
    color: var(--app-color-charcoal);
    line-height: 22px;
    font-weight: normal;
  }
  h2.inverse {
    color: var(--app-color-white);
  }

  h3 {
    font-size: 17px;
    font-weight: bold;
    color: var(--app-color-charcoal);
    line-height: 22px;
  }
  h3.inverse {
    color: var(--app-color-white);
  }

  p {
    color: var(--app-color-charcoal);
    font-size: 15px;
    line-height: 22px;
    padding-bottom: 10px;
  }

  .subject-type {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: bold;
  }

  a {
    cursor: pointer;
    font-size: 15px;
    display: inline-flex;
    align-items: center;
  }

  a.internal, a.internal:visited {
    color: var(--app-color-charcoal);
  }

  a.external {
    text-decoration: none;
    font-weight: bold;
  }

  button, .btn {
    height: 44px;
    padding: 0 15px;
    color: var(--app-color-white);
    background-color: var(--app-color-interface-blue);
    cursor: pointer;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
  }

  button.inverse, .btn.inverse {
    background-color: var(--app-color-white);
    color: var(--app-color-interface-blue);
  }

  a.btn {
    text-decoration: none;
  }

  button:hover, .btn:hover {
    background-color: var(--app-color-secondary-blue);
  }
  button.inverse:hover, .btn.inverse:hover {
    background-color: var(--app-color-smoke);
  }

  button[disabled], .btn[disabled] {
    cursor: not-allowed;
    background-color: var(--app-color-pewter) !important;
  }
</style>
`;function ht(){return j`

${lt}
<style>
  :host {
    display: block;
    min-height: 100vh;
  }

  iron-pages {
    align-self: stretch;
    flex: 1;
    position: relative;
  }

  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>

<app-route .appRoutes="${this.appRoutes}"></app-route>

<div class="layout">
  <app-header></app-header>

  <iron-pages selected="${this.view}" attr-for-selected="id" selected-attribute="visible">
    <app-about id="about"></app-about>
    <app-moment id="moment"></app-moment>
    <app-view-map id="map"></app-view-map>
    <app-home id="home"></app-home>
  </iron-pages>
</div>
`}i(43),i(15);var ct=i(38),dt=i.n(ct),ut=i(11),pt=i(5),ft=i(2),mt=new Set;const _t={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(mt.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)}),this),this._fireResize())},assignParentResizable:function(t){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=t,t&&-1===t._interestedResizables.indexOf(this)&&(t._interestedResizables.push(this),t._subscribeIronResize(this))},stopResizeNotificationsFor:function(t){var e=this._interestedResizables.indexOf(t);e>-1&&(this._interestedResizables.splice(e,1),this._unsubscribeIronResize(t))},_subscribeIronResize:function(t){t.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(t){t.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(t){return!0},_onDescendantIronResize:function(t){this._notifyingDescendant?t.stopPropagation():ft.i||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(t){var e=Object(pt.a)(t).rootTarget;e!==this&&(e.assignParentResizable(this),this._notifyDescendant(e),t.stopPropagation())},_parentResizableChanged:function(t){t&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(t){this.isAttached&&(this._notifyingDescendant=!0,t.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var t=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function e(){document.removeEventListener("readystatechange",e),t()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(t){t!==this&&t._findParent()}),this):(mt.forEach((function(t){t!==this&&t._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?mt.delete(this):mt.add(this)}};var gt=i(14);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class vt{constructor(t){this.selection=[],this.selectCallback=t}get(){return this.multi?this.selection.slice():this.selection[0]}clear(t){this.selection.slice().forEach((function(e){(!t||t.indexOf(e)<0)&&this.setItemSelected(e,!1)}),this)}isSelected(t){return this.selection.indexOf(t)>=0}setItemSelected(t,e){if(null!=t&&e!==this.isSelected(t)){if(e)this.selection.push(t);else{var i=this.selection.indexOf(t);i>=0&&this.selection.splice(i,1)}this.selectCallback&&this.selectCallback(t,e)}}select(t){this.multi?this.toggle(t):this.get()!==t&&(this.setItemSelected(this.get(),!1),this.setItemSelected(t,!0))}toggle(t){this.setItemSelected(t,!this.isSelected(t))}}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const yt={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this),this._selection=new vt(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this),this._addListener(this.activateEvent)},detached:function(){this._observer&&Object(pt.a)(this).unobserveNodes(this._observer),this._removeListener(this.activateEvent)},indexOf:function(t){return this.items?this.items.indexOf(t):-1},select:function(t){this.selected=t},selectPrevious:function(){var t=this.items.length,e=t-1;void 0!==this.selected&&(e=(Number(this._valueToIndex(this.selected))-1+t)%t),this.selected=this._indexToValue(e)},selectNext:function(){var t=0;void 0!==this.selected&&(t=(Number(this._valueToIndex(this.selected))+1)%this.items.length),this.selected=this._indexToValue(t)},selectIndex:function(t){this.select(this._indexToValue(t))},forceSynchronousItemUpdate:function(){this._observer&&"function"==typeof this._observer.flush?this._observer.flush():this._updateItems()},get _shouldUpdateSelection(){return null!=this.selected},_checkFallback:function(){this._updateSelected()},_addListener:function(t){this.listen(this,t,"_activateHandler")},_removeListener:function(t){this.unlisten(this,t,"_activateHandler")},_activateEventChanged:function(t,e){this._removeListener(e),this._addListener(t)},_updateItems:function(){var t=Object(pt.a)(this).queryDistributedElements(this.selectable||"*");t=Array.prototype.filter.call(t,this._bindFilterItem),this._setItems(t)},_updateAttrForSelected:function(){this.selectedItem&&(this.selected=this._valueForItem(this.selectedItem))},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(t){if(this.items){var e=this._valueToItem(this.selected);e?this._selection.select(e):this._selection.clear(),this.fallbackSelection&&this.items.length&&void 0===this._selection.get()&&(this.selected=this.fallbackSelection)}},_filterItem:function(t){return!this._excludedLocalNames[t.localName]},_valueToItem:function(t){return null==t?null:this.items[this._valueToIndex(t)]},_valueToIndex:function(t){if(!this.attrForSelected)return Number(t);for(var e,i=0;e=this.items[i];i++)if(this._valueForItem(e)==t)return i},_indexToValue:function(t){if(!this.attrForSelected)return t;var e=this.items[t];return e?this._valueForItem(e):void 0},_valueForItem:function(t){if(!t)return null;if(!this.attrForSelected){var e=this.indexOf(t);return-1===e?null:e}var i=t[Object(gt.b)(this.attrForSelected)];return null!=i?i:t.getAttribute(this.attrForSelected)},_applySelection:function(t,e){this.selectedClass&&this.toggleClass(this.selectedClass,e,t),this.selectedAttribute&&this.toggleAttribute(this.selectedAttribute,e,t),this._selectionChange(),this.fire("iron-"+(e?"select":"deselect"),{item:t})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(t){return Object(pt.a)(t).observeNodes((function(t){this._updateItems(),this._updateSelected(),this.fire("iron-items-changed",t,{bubbles:!1,cancelable:!1})}))},_activateHandler:function(t){for(var e=t.target,i=this.items;e&&e!=this;){var n=i.indexOf(e);if(n>=0){var o=this._indexToValue(n);return void this._itemActivate(o,e)}e=e.parentNode}},_itemActivate:function(t,e){this.fire("iron-activate",{selected:t,item:e},{cancelable:!0}).defaultPrevented||this.select(t)}};var bt=i(9),wt=i(8);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(bt.a)({_template:wt.a`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(slot):not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,is:"iron-pages",behaviors:[_t,yt],properties:{activateEvent:{type:String,value:null}},observers:["_selectedPageChanged(selected)"],_selectedPageChanged:function(t,e){this.async(this.notifyResize)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const xt=wt.a`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;xt.setAttribute("style","display: none;"),document.head.appendChild(xt.content);var Lt=document.createElement("style");Lt.textContent="[hidden] { display: none !important; }",document.head.appendChild(Lt);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
class Ct{constructor(t){Ct[" "](t),this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}get value(){var t=this.type,e=this.key;if(t&&e)return Ct.types[t]&&Ct.types[t][e]}set value(t){var e=this.type,i=this.key;e&&i&&(e=Ct.types[e]=Ct.types[e]||{},null==t?delete e[i]:e[i]=t)}get list(){if(this.type){var t=Ct.types[this.type];return t?Object.keys(t).map((function(t){return zt[this.type][t]}),this):[]}}byKey(t){return this.key=t,this.value}}Ct[" "]=function(){},Ct.types={};var zt=Ct.types;Object(bt.a)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,i){var n=new Ct({type:t,key:e});return void 0!==i&&i!==n.value?n.value=i:this.value!==n.value&&(this.value=n.value),n},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new Ct({type:this.type,key:t}).value}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(bt.a)({_template:wt.a`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:ut.a.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&Object(pt.a)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,Object(pt.a)(this.root).appendChild(this._img))}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(bt.a)({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new Ct({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(t){return this.name+":"+t}),this)},applyIcon:function(t,e){this.removeIcon(t);var i=this._cloneIcon(e,this.rtlMirroring&&this._targetIsRTL(t));if(i){var n=Object(pt.a)(t.root||t);return n.insertBefore(i,n.childNodes[0]),t._svgIcon=i}return null},removeIcon:function(t){t._svgIcon&&(Object(pt.a)(t.root||t).removeChild(t._svgIcon),t._svgIcon=null)},_targetIsRTL:function(t){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var e=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===e.getAttribute("dir")}else t&&t.nodeType!==Node.ELEMENT_NODE&&(t=t.host),this.__targetIsRTL=t&&"rtl"===window.getComputedStyle(t).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var t=Object.create(null);return Object(pt.a)(this).querySelectorAll("[id]").forEach((function(e){t[e.id]=e})),t},_cloneIcon:function(t,e){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[t],this.size,e)},_prepareSvgClone:function(t,e,i){if(t){var n=t.cloneNode(!0),o=document.createElementNS("http://www.w3.org/2000/svg","svg"),r=n.getAttribute("viewBox")||"0 0 "+e+" "+e,s="pointer-events: none; display: block; width: 100%; height: 100%;";return i&&n.hasAttribute("mirror-in-rtl")&&(s+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),o.setAttribute("viewBox",r),o.setAttribute("preserveAspectRatio","xMidYMid meet"),o.setAttribute("focusable","false"),o.style.cssText=s,o.appendChild(n).removeAttribute("id"),o}return null}});const Mt=wt.a`<iron-iconset-svg name="intert-wine-icons" size="24">
<svg><defs>
 <g id="book">
  <title>icon-book</title>
  <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
 </g>
 <g id="explore">
  <title>icon-explore</title>
  <path d="M21.19,11l-3-7.4a2.27,2.27,0,1,0-4.13-1.3,2.33,2.33,0,0,0,.06.53L6.07,13.64,4.6,6.81A2.23,2.23,0,0,0,5.47,5,2.28,2.28,0,1,0,3.14,7.31L4.6,14.14a2.27,2.27,0,1,0,2.78.31l7.7-10.3.17.09L12.67,19.48a2.28,2.28,0,1,0,1.51.31L16.76,4.51l.17,0,2.72,6.8a2.24,2.24,0,0,0-1.12,2A2.28,2.28,0,1,0,21.19,11Z"/>
 </g>
 <g id="moments">
  <title>icon-moments</title>
  <path d="M18.73,5.21h-.45V3.56a.77.77,0,1,0-1.53,0V5.21H12.6V3.56a.77.77,0,0,0-.76-.77.78.78,0,0,0-.77.77V5.21H7.25V3.56a.77.77,0,1,0-1.53,0V5.21H5.27A2.27,2.27,0,0,0,3,7.48V18.94a2.27,2.27,0,0,0,2.27,2.27H18.73A2.27,2.27,0,0,0,21,18.94V7.48A2.27,2.27,0,0,0,18.73,5.21ZM9,18.14H6.46v-2.5H9Zm0-3.68H6.46V12H9Zm0-3.68H6.46V8.28H9Zm4.29,7.36h-2.5v-2.5h2.5Zm0-3.68h-2.5V12h2.5Zm0-3.68h-2.5V8.28h2.5Zm4.29,7.36H15v-2.5h2.5Zm0-3.68H15V12h2.5Zm0-3.68H15V8.28h2.5Z"/>
 </g>
 <g id="cluster">
  <title>icon-cluster</title>
  <g id="UK_Dot_Red" data-name="UK Dot Red">
    <circle cx="5.61" cy="8.31" r="2.37"/>
    <circle cx="12" cy="4.62" r="2.37"/>
    <circle cx="18.39" cy="8.31" r="2.37"/>
    <circle cx="18.39" cy="15.69" r="2.37"/>
    <circle cx="12" cy="19.38" r="2.37"/>
    <circle cx="5.61" cy="15.69" r="2.37"/>
    <circle cx="5.61" cy="8.31" r="2.37"/>
  </g>
</g>
<g id="connection">
  <title>icon-connection</title>
  <path d="M19.33,4.74l-.07-.07a4,4,0,0,0-5.68,0L10,8.29A4,4,0,0,0,10,14L10,14a4.59,4.59,0,0,0,.41.36l1.33-1.33a2.24,2.24,0,0,1-.43-.33l-.07-.07a2.17,2.17,0,0,1,0-3.07L14.88,6A2.2,2.2,0,0,1,18,6L18,6a2.2,2.2,0,0,1,0,3.08l-1.64,1.64a5.54,5.54,0,0,1,.4,2.2l2.54-2.54A4,4,0,0,0,19.33,4.74ZM14,10a4.59,4.59,0,0,0-.41-.36l-1.33,1.33a2.24,2.24,0,0,1,.43.33l.07.07a2.17,2.17,0,0,1,0,3.07L9.12,18A2.2,2.2,0,0,1,6,18L6,18a2.2,2.2,0,0,1,0-3.08l1.64-1.64a5.54,5.54,0,0,1-.4-2.2L4.67,13.58a4,4,0,0,0,0,5.68l.07.07a4,4,0,0,0,5.68,0L14,15.71A4,4,0,0,0,14,10Z"/>
</g>
<g id="event">
  <title>icon-event</title>
  <path d="M18.73,5.21h-.45V3.56a.77.77,0,1,0-1.53,0V5.21H12.6V3.56a.77.77,0,0,0-.76-.77.78.78,0,0,0-.77.77V5.21H7.25V3.56a.77.77,0,1,0-1.53,0V5.21H5.27A2.27,2.27,0,0,0,3,7.48V18.94a2.27,2.27,0,0,0,2.27,2.27H18.73A2.27,2.27,0,0,0,21,18.94V7.48A2.27,2.27,0,0,0,18.73,5.21ZM9,18.14H6.46v-2.5H9Zm0-3.68H6.46V12H9Zm0-3.68H6.46V8.28H9Zm4.29,7.36h-2.5v-2.5h2.5Zm0-3.68h-2.5V12h2.5Zm0-3.68h-2.5V8.28h2.5Zm4.29,7.36H15v-2.5h2.5Zm0-3.68H15V12h2.5Zm0-3.68H15V8.28h2.5Z"/>
</g>
<g id="link">
  <title>icon-link</title>
  <polygon points="17.25 17.25 6.75 17.25 6.75 6.75 8.74 6.75 8.74 5.25 5.25 5.25 5.25 18.75 18.75 18.75 18.75 15.26 17.25 15.26 17.25 17.25"/>
  <polygon points="12 5.25 12 6.75 16.19 6.75 11.47 11.47 12.53 12.53 17.25 7.81 17.25 12 18.75 12 18.75 5.25 12 5.25"/>
</g>
<g id="object">
  <title>icon-object</title>
  <path d="M19.76,5.69l-6-1.49-3.53-.89L10,3.24l-.11.07-.19.12c-1,.59-2,1.28-3.13,2L4.2,6.91l1.34.33c2.79.7,7.51,1.87,8.21,2.06a.25.25,0,0,0,.22,0l1.32-.82Z"/>
  <path d="M3.37,18.35h0L13,20.76V11.14L3.37,8.72v9.63Z"/>
  <path d="M20.63,16.82c0-.17,0-.57,0-1.16V7.47l-5.56,3.41L15,20.26l2.55-1.56Z"/>
</g>
<g id="person">
  <title>icon-person</title>
  <path d="M11.94,5.73H12a1.77,1.77,0,0,0,0-3.54h-.1a1.77,1.77,0,0,0,0,3.54Z"/>
  <path d="M17.38,12.46,14.07,7.17A.8.8,0,0,0,14,7h0a.21.21,0,0,0,0-.06h0a.65.65,0,0,0-.27-.17H10.33a.65.65,0,0,0-.27.17h0A.21.21,0,0,0,10,7h0a.8.8,0,0,0-.08.16L6.62,12.46a.7.7,0,1,0,1.31.47l2.45-3.72-.27,4L7.8,20.82c-.11.47,0,.91.6,1a1.12,1.12,0,0,0,1.28-.7L12,14.52l2.32,6.59a1.12,1.12,0,0,0,1.28.7c.61-.08.71-.52.6-1l-2.31-7.59-.27-4,2.45,3.72a.7.7,0,1,0,1.31-.47Z"/>
</g>
<g id="place">
  <title>icon-place</title>
  <path d="M17.66,4.69a8,8,0,0,0-11.32,0h0A8,8,0,0,0,6.34,16L12,21.66,17.66,16A8,8,0,0,0,17.66,4.69Zm-5.66,9a3.83,3.83,0,1,1,3.82-3.83A3.83,3.83,0,0,1,12,13.67Z"/>
</g>
<g id="settings">
  <title>icon-settings</title>
  <g id="Layer_2" data-name="Layer 2">
    <g id="JudgementofParis">
      <g id="Interface">
        <path d="M24,13.37V10.63L20.32,10a8.59,8.59,0,0,0-1-2.4l2.14-3.08-1.94-2L16.44,4.68a8.59,8.59,0,0,0-2.4-1L13.37,0H10.63L10,3.68a8.59,8.59,0,0,0-2.4,1L4.48,2.54,2.54,4.48,4.68,7.56a8.59,8.59,0,0,0-1,2.4L0,10.63v2.74L3.68,14a8.59,8.59,0,0,0,1,2.4L2.54,19.52l1.94,1.94,3.08-2.14a8.59,8.59,0,0,0,2.4,1L10.63,24h2.74L14,20.32a8.59,8.59,0,0,0,2.4-1l3.08,2.14,1.94-1.94-2.14-3.08a8.59,8.59,0,0,0,1-2.4ZM12,17.14A5.14,5.14,0,1,1,17.14,12h0A5.14,5.14,0,0,1,12,17.14Z"/>
      </g>
    </g>
  </g>
</g>
<g id="technology">
  <title>icon-technology</title>
  <path d="M16.61,10.36A4.61,4.61,0,0,0,12,6.06h0a4.61,4.61,0,0,0-4.61,4.3c0,2.17.71,2.84,1.83,4.39a7.25,7.25,0,0,1,1,3.7h3.58a7.31,7.31,0,0,1,1-3.7C15.9,13.2,16.65,12.53,16.61,10.36Z"/>
  <path d="M10.21,21.23a.52.52,0,0,0,.52.53h.34v.06h0a.9.9,0,0,0,.89.9H12a.9.9,0,0,0,.89-.9h0v-.06h.34a.52.52,0,0,0,.52-.53V20.3H10.21Z"/>
  <rect x="18.92" y="10.67" width="3.08" height="1.23"/>
  <rect x="2" y="10.67" width="3.08" height="1.23"/>
  <rect x="11.38" y="1.28" width="1.23" height="3.08"/>
  <rect x="5.4" y="3.76" width="1.23" height="3.08" transform="translate(-1.99 5.81) rotate(-45)"/>
  <rect x="16.44" y="4.69" width="3.08" height="1.23" transform="translate(1.52 14.27) rotate(-45)"/>
</g>
</defs></svg>
</iron-iconset-svg>`;function St(){return j`

<style>
  :host {
    display: block;
    width: 100%;
    height: 60px;
    background-color: black;
    color: white;
    z-index: 10000;
  }

  .layout {
    margin: 0 0 0 20px;
    display: flex;
    height: 100%;
    align-items: center;
    -webkit-box-shadow: -2px 0px 6px 0px rgba(50, 50, 50, 0.75);
    -moz-box-shadow:    -2px 0px 6px 0px rgba(50, 50, 50, 0.75);
    box-shadow:         -2px 0px 6px 0px rgba(50, 50, 50, 0.75);
  }

  h1 {
    font-weight: 400;
    margin: 0;
    padding: 0;
    flex: 1;
  }

  .title-extra {
    font-weight: 200;
  }

  a {
    display: inline-block;
    cursor: pointer;
    color: white;
    text-decoration: none;
  }

  .image {
    padding: 15px 20px;
    background-color: var(--app-color-interface-blue );
  }

  img {
    vertical-align: middle;
  }

  @media(max-width: 825px) {
    .title-extra {
      display: none;
    }
  }
</style>

<header class="layout">
  <h1>
    <span><a href="${this.baseUrl}/home">intertWINE</a></span>
    <span class="title-extra">// California's Modern Wine Network<span>
  </h1>
  <div style="padding-right: 20px;">
    <a @click="${this._onAboutClick}">ABOUT</a>
  </div>
  <div class="image">
    <a href="https://www.library.ucdavis.edu/" target="_blank">
      <img src="/images/ucd-lib-logo-white.png" />
    </a>
  </div>
</header>
`}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */document.head.appendChild(Mt.content);const Pt=new WeakMap,kt=(t=>(...e)=>{const i=t(...e);return n.set(i,!0),i})(t=>e=>{if(!(e instanceof M))throw new Error("unsafeHTML can only be used in text bindings");const i=Pt.get(e);if(void 0!==i&&w(t)&&t===i.value&&e.value===i.fragment)return;const n=document.createElement("template");n.innerHTML=t;const o=document.importNode(n.content,!0);e.setValue(o),Pt.set(e,{value:t,fragment:o})});function Tt(){return j`

${lt}
<style>
  :host {
    display: block;
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, .5);
  }

  a.internal {
    display: inline;
  }

  .toggle {
    background-color: var(--app-primary-color);
    color: white;
    width: 35px;
    height: 50px;
    position: absolute;
    right: -35px;
    bottom: 35px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* .toggle-sm {
    display: none;
  } */

  .content {
    overflow: auto;
    height: 100%;
    position: relative;
  }

  .content[moment-view] {
    color: var(--app-color-white);
    background-color: var(--app-color-interface-blue);
  }

  .moment-break {
    margin-top: 50px;
    border-bottom: 1px solid white;
    margin-bottom: 18px;
  }

  #momentDescription {
    padding-bottom: 18px;
  }
  #momentDescription p {
    color: var(--app-color-white);
  }

  .content-padding {
    padding: 30px 25px;
  }

  h3 {
    margin-bottom: 5px;
  }

  .image {
    background-color: var(--app-color-smoke);
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image iron-icon {
    background-color: var(--app-color-smoke) !important;
    --iron-icon-height: 150px;
    --iron-icon-width: 150px;
  }

  .subject-type {
    margin-bottom: 10px;
  }

  ul.events,
  ul.related-links {
    margin: 0;
    padding: 0;
  }

  ul.events li,
  ul.related-links li {
    list-style-type: none;
  }

  #description > p {
    padding: 14px 0 18px 9;
  }

  .thumbnail {
    width: 100%;
    overflow: hidden;
  }

  .thumbnail > img {
    width: 100%;
    border-radius: 10px;
  }

  .location, .date {
    font-style: italic;
  }

  .sub-title {
    font-weight: bold;
  }

  .color-break {
    height: 5px;
    position: relative;
  }

  iron-icon[type] {
    color: var(--app-color-white);
    border-radius: 24px;
    padding: 2px;
  }

  .color-break iron-icon {
    position: absolute;
    --iron-icon-height: 38px;
    --iron-icon-width: 38px;
    border-radius: 50px;
    padding: 6px;
    top: -21px;
    right: 32px;
    color: var(--app-color-white);
  }

  .dot {
    display: inline-block;
    height: 8px;
    width: 8px;
    margin: 8px 16px 8px 8px;
    vertical-align: middle;
    border-radius: 8px;
  }

  .subject-label {
    margin-top: 15px;
  }
  .subject-label span {
    margin-left: 3px;
    vertical-align: bottom;
  }

  .type-color[type="cluster"], .type-color[type="connection"] {
    color: var(--app-color-interface-blue);
  }
  .color-break[type="cluster"], iron-icon[type="cluster"],
  .color-break[type="connection"], iron-icon[type="connection"] {
    background-color: var(--app-color-interface-blue);
  }
  iron-icon.external-link[type="cluster"],
  iron-icon.external-link[type="connection"] {
    background-color: transparent;
    fill: var(--app-color-interface-blue);
  }
  .image[type="cluster"] {
    height: 200px;
  }

  .type-color[type="person"] {
    color: var(--app-color-scarlet);
  }
  .color-break[type="person"], iron-icon[type="person"], .dot[type="person"] {
    background-color: var(--app-color-scarlet);
  }
  iron-icon.external-link[type="person"] {
    background-color: transparent;
    fill: var(--app-color-scarlet);
  }

  .type-color[type="place"] {
    color: var(--app-color-vine);
  }
  .color-break[type="place"], iron-icon[type="place"], .dot[type="place"] {
    background-color: var(--app-color-vine);
  }
  iron-icon.external-link[type="place"] {
    background-color: transparent;
    fill: var(--app-color-vine);
  }

  .type-color[type="event"] {
    color: var(--app-color-rose);
  }
  .color-break[type="event"], iron-icon[type="event"], .dot[type="event"] {
    background-color: var(--app-color-rose);
  }
  iron-icon.external-link[type="event"] {
    background-color: transparent;
    fill: var(--app-color-rose);
  }

  .type-color[type="object"] {
    color: var(--app-color-grape);
  }
  .color-break[type="object"], iron-icon[type="object"], .dot[type="object"] {
    background-color: var(--app-color-grape);
  }
  iron-icon.external-link[type="object"] {
    background-color: transparent;
    fill: var(--app-color-interface-blue);
  }

  .connection-image-layout {
    display: flex;
  }
  .connection-image-layout > div {
    flex: 1;
  }
  .connection-image-layout > div:first-child {
    border-right: 2px solid var(--app-color-white);
  }
  .connection-image-layout > div:nth-child(2) {
    border-left: 2px solid var(--app-color-white);
  }

  @media(max-width: 600px) {
    .toggle {
      /* display: none; */
      width: 50px;
      height: 35px;
      position: absolute;
      right: initial;
      top: -35px;
      left: 35px;
    }
    .toggle iron-icon {
      transform: rotate(-90deg);
    }

    .toggle-sm {
      display: block;
    }
  }
</style>

<div class="content" ?moment-view="${this.isMoment}">
  <!--
  <div class="toggle-sm" tabindex="0" @click="${this._fireToggleEvent}" @key-up="${this._onToggleKeyUp}">
    <iron-icon icon="close"></iron-icon>
  </div>
  -->
  <div ?hidden="${this.isMoment}">
    <div ?hidden="${this.isLink}">
      <div class="image" type="${this.type}">
        <iron-icon class="type-color" type="${this.type}" icon="intert-wine-icons:${this.type}"></iron-icon>
      </div>
    </div>

    <div ?hidden="${!this.isLink}">
      <div class="connection-image-layout">
        <div class="image" type="${this.srctype}">
          <iron-icon class="type-color" type="${this.srctype}" icon="intert-wine-icons:${this.srctype}"></iron-icon>
        </div>
        <div class="image" type="${this.dsttype}">
          <iron-icon class="type-color" type="${this.dsttype}" icon="intert-wine-icons:${this.dsttype}"></iron-icon>
        </div>
      </div>
    </div>

    <div class="color-break" type="${this.type}">
      <iron-icon icon="intert-wine-icons:${this.type}" type="${this.type}"></iron-icon>
    </div>
  </div>

  <div class="content-padding">
    <iron-pages selected="${this.view}" attr-for-selected="id">
      <!-- START EMPTY -->
      <div id="moment">
        <div class="subject-type">Explore</div>

        <app-moments-dropdown></app-moments-dropdown>

        <h1 style="margin-bottom: 3px" class="inverse">${this.momentInfo.title}</h1>
        <h2 style="margin: 0 0 14px 0" class="inverse">${this.momentInfo.date}</h2>
        <div>
          Select a subject on the map to learn about their
          connections to California wine history.
        </div>

        <div class="moment-break"></div>

        <div ?hidden="${!this.momentEntryPoint}">
          <h3 class="inverse">Connections in Context</h3>
          <div id="momentDescription"></div>

          <a class="btn inverse" ?hidden="${!this.momentEntryPointUrl}" href="${this.momentEntryPointUrl}">
            Read Story
          </a>
        </div>
      </div>
      <!-- END EMPTY -->


      <!-- START CLUSTER -->
      <div id="cluster">
        <h3>Select a Subject</h3>

        ${this.clusterSubjectTypes.map(t=>j`
          <div ?hidden="${!this.clusterSubjects[t].enabled}">
            <div class="subject-label">
              <iron-icon icon="intert-wine-icons:${t}" type="${t}"></iron-icon>
              <span class="subject-type type-color" type="${t}">${this.clusterSubjects[t].label}</span>
            </div>
            ${this.clusterSubjects[t].nodes.map(e=>j`
              <div>
                <div class="dot" type="${t}"></div>
                <span>
                  <a class="internal" href="/map/${this.moment}/${t}/${e["@id"]}">${e.name}</a>
                </span>
              </div>
            `)}
          </div>
        `)}
      </div>
      <!-- END CLUSTER -->

      <!-- START ITEM -->
      <div id="item">
        <div class="subject-type type-color" type="${this.type}">${this.type}</div>

        <div ?hidden="${!this.isLink}">
          <h3>About the Connection</h3>
          <h2>${this.title}</h2>
        </div>

        <div ?hidden="${!this.isNode}">
          <h1 style="margin-bottom: 3px">${this.title}</h1>
          <h2 style="margin: 0">${this.location}</h2>
          <h2 style="margin: 0 0 14px 0">${this.date}</h2>
        </div>

        <div class="thumbnail" ?hidden="${!this.thumbnail}">
          <img src="${this.thumbnail}" title="${this.title}">
        </div>

        <!-- Filled from inside the parent js file -->
        <div id="description"></div>

        <div ?hidden="${!this.isNode}">
          ${this.hasConnections?j`<h3 style="margin: 0 0 5px 0">Explore Connections</h3>`:j``}
          <div>
            ${this.connections.map(t=>j`
              <div>
                <div class="dot" type="${t.node.type}"></div>
                <a class="internal" href="/map/${this.moment}/connection/${t.link["@id"]}">
                ${this.shortConnection?j`${kt(t.link.name)}`:j`<strong><em>${t.link.name}</em></strong>&nbsp;${t.node.name}`}
                </a>
              </div>
            `)}
          </div>
        </div>
        <div ?hidden="${!this.isLink}">
          <h3>Connections Subjects</h3>
          ${this.connectionSubjects.map(t=>j`
            <div>
              <div class="dot" type="${t.type}"></div>
              <span>
                <a class="internal" href="/map/${this.moment}/${t.type}/${t["@id"]}">
                  ${t.name}
                </a>
              </span>
            </div>
          `)}
        </div>

        <div ?hidden="${!this.relatedLinks.length}">
          <h3>Learn More</h3>
          <ul class="related-links">
          ${this.relatedLinks.map(t=>j`
            <li>
              <iron-icon class="external-link" icon="intert-wine-icons:link" type="${this.type}"></iron-icon>
              <a class="external type-color" type="${this.type}" href="${t.full}" target="_blank">${t.short}</a>
            </li>
          `)}
          </ul>
        </div>
      </div>
      <!-- END ITEM -->
    </iron-pages>
  </div>

</div>

<div class="toggle" ?open="${this.open}" tabindex="0" @click="${this._fireToggleEvent}" @key-up="${this._onToggleKeyUp}">
  <iron-icon icon="chevron-right" ?hidden="${this.open}"></iron-icon>
  <iron-icon icon="chevron-left" ?hidden="${!this.open}"></iron-icon>
</div>

`}var Et=i(30);
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Ot=wt.a`<iron-iconset-svg name="icons" size="24">
<svg><defs>
<g id="3d-rotation"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></g>
<g id="accessibility"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></g>
<g id="accessible"><circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"></path></g>
<g id="account-balance"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"></path></g>
<g id="account-balance-wallet"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="account-box"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path></g>
<g id="account-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g>
<g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
<g id="add-alert"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"></path></g>
<g id="add-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle-outline"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></g>
<g id="alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="alarm-add"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></g>
<g id="alarm-off"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"></path></g>
<g id="alarm-on"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"></path></g>
<g id="all-out"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path></g>
<g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>
<g id="announcement"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path></g>
<g id="apps"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></g>
<g id="archive"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></g>
<g id="arrow-back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
<g id="arrow-downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
<g id="arrow-drop-down-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path></g>
<g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"></path></g>
<g id="arrow-forward"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
<g id="arrow-upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>
<g id="aspect-ratio"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="assessment"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="assignment"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></g>
<g id="assignment-ind"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path></g>
<g id="assignment-late"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="assignment-return"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"></path></g>
<g id="assignment-returned"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"></path></g>
<g id="assignment-turned-in"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="attachment"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"></path></g>
<g id="autorenew"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path></g>
<g id="backspace"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"></path></g>
<g id="backup"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="block"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path></g>
<g id="book"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="bookmark"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="bookmark-border"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="bug-report"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path></g>
<g id="build"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></g>
<g id="cached"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path></g>
<g id="camera-enhance"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"></path></g>
<g id="cancel"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></g>
<g id="card-giftcard"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="card-membership"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"></path></g>
<g id="card-travel"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path></g>
<g id="change-history"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"></path></g>
<g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
<g id="check-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="check-box-outline-blank"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="check-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
<g id="chrome-reader-mode"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></g>
<g id="class"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="cloud"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></g>
<g id="cloud-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"></path></g>
<g id="cloud-done"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"></path></g>
<g id="cloud-download"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></g>
<g id="cloud-off"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"></path></g>
<g id="cloud-queue"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></g>
<g id="cloud-upload"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="code"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></g>
<g id="compare-arrows"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path></g>
<g id="content-copy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></g>
<g id="content-cut"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></path></g>
<g id="content-paste"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></g>
<g id="copyright"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="create"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="create-new-folder"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path></g>
<g id="credit-card"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="dashboard"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></g>
<g id="date-range"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></g>
<g id="delete"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-forever"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-sweep"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"></path></g>
<g id="description"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></g>
<g id="dns"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="done"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></g>
<g id="done-all"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></g>
<g id="donut-large"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"></path></g>
<g id="donut-small"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"></path></g>
<g id="drafts"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></g>
<g id="eject"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></path></g>
<g id="error"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="euro-symbol"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path></g>
<g id="event"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
<g id="event-seat"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path></g>
<g id="exit-to-app"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="expand-less"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g>
<g id="expand-more"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g>
<g id="explore"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path></g>
<g id="extension"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"></path></g>
<g id="face"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></g>
<g id="favorite"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></g>
<g id="favorite-border"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>
<g id="feedback"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g>
<g id="file-download"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="file-upload"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></g>
<g id="filter-list"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></g>
<g id="find-in-page"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></g>
<g id="find-replace"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"></path></g>
<g id="fingerprint"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path></g>
<g id="first-page"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></g>
<g id="flag"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g>
<g id="flight-land"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"></path></g>
<g id="flight-takeoff"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></g>
<g id="flip-to-back"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path></g>
<g id="flip-to-front"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"></path></g>
<g id="folder"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></g>
<g id="folder-open"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></g>
<g id="folder-shared"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"></path></g>
<g id="font-download"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"></path></g>
<g id="forward"><path d="M12 8V4l8 8-8 8v-4H4V8z"></path></g>
<g id="fullscreen"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>
<g id="fullscreen-exit"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
<g id="g-translate"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"></path></g>
<g id="gavel"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"></path></g>
<g id="gesture"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"></path></g>
<g id="get-app"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="gif"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path></g>
<g id="grade"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="group-work"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="help"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
<g id="help-outline"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></g>
<g id="highlight-off"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="history"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="home"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
<g id="hourglass-empty"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path></g>
<g id="hourglass-full"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path></g>
<g id="http"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></g>
<g id="https"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="important-devices"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"></path></g>
<g id="inbox"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></g>
<g id="indeterminate-check-box"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></g>
<g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
<g id="info-outline"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
<g id="input"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
<g id="invert-colors"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"></path></g>
<g id="label"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></g>
<g id="label-outline"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></g>
<g id="language"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></g>
<g id="last-page"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></g>
<g id="launch"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="lightbulb-outline"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></g>
<g id="line-style"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path></g>
<g id="line-weight"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"></path></g>
<g id="link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
<g id="list"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></g>
<g id="lock"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="lock-open"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path></g>
<g id="lock-outline"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path></g>
<g id="low-priority"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"></path></g>
<g id="loyalty"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"></path></g>
<g id="mail"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread-mailbox"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"></path></g>
<g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
<g id="more-horiz"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="more-vert"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="motorcycle"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></g>
<g id="move-to-inbox"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></g>
<g id="next-week"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"></path></g>
<g id="note-add"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path></g>
<g id="offline-pin"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"></path></g>
<g id="opacity"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"></path></g>
<g id="open-in-browser"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></g>
<g id="open-in-new"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="open-with"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path></g>
<g id="pageview"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path></g>
<g id="pan-tool"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></g>
<g id="payment"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="perm-camera-mic"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"></path></g>
<g id="perm-contact-calendar"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></g>
<g id="perm-data-setting"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="perm-device-information"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="perm-identity"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="perm-media"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path></g>
<g id="perm-phone-msg"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path></g>
<g id="perm-scan-wifi"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"></path></g>
<g id="pets"><circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path></g>
<g id="picture-in-picture"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path></g>
<g id="picture-in-picture-alt"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"></path></g>
<g id="play-for-work"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"></path></g>
<g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path></g>
<g id="power-settings-new"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></g>
<g id="pregnant-woman"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"></path></g>
<g id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="query-builder"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="question-answer"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g>
<g id="radio-button-checked"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="radio-button-unchecked"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="receipt"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"></path></g>
<g id="record-voice-over"><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></g>
<g id="redeem"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>
<g id="refresh"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></g>
<g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
<g id="remove-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></g>
<g id="remove-circle-outline"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="remove-shopping-cart"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path></g>
<g id="reorder"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"></path></g>
<g id="reply"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="reply-all"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="report"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></g>
<g id="report-problem"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="restore"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="restore-page"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path></g>
<g id="room"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rounded-corner"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"></path></g>
<g id="rowing"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"></path></g>
<g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>
<g id="schedule"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>
<g id="select-all"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"></path></g>
<g id="send"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></g>
<g id="settings"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
<g id="settings-applications"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"></path></g>
<g id="settings-backup-restore"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></g>
<g id="settings-bluetooth"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"></path></g>
<g id="settings-brightness"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path></g>
<g id="settings-cell"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"></path></g>
<g id="settings-ethernet"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></g>
<g id="settings-input-antenna"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"></path></g>
<g id="settings-input-component"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-composite"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-hdmi"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"></path></g>
<g id="settings-input-svideo"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></g>
<g id="settings-overscan"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="settings-phone"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"></path></g>
<g id="settings-power"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"></path></g>
<g id="settings-remote"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"></path></g>
<g id="settings-voice"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"></path></g>
<g id="shop"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"></path></g>
<g id="shop-two"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"></path></g>
<g id="shopping-basket"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="shopping-cart"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="sort"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></g>
<g id="speaker-notes"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path></g>
<g id="speaker-notes-off"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"></path></g>
<g id="spellcheck"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path></g>
<g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="star-border"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="star-half"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="stars"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path></g>
<g id="store"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="subdirectory-arrow-left"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path></g>
<g id="subdirectory-arrow-right"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></g>
<g id="subject"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></g>
<g id="supervisor-account"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"></path></g>
<g id="swap-horiz"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></g>
<g id="swap-vert"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></g>
<g id="swap-vertical-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"></path></g>
<g id="system-update-alt"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"></path></g>
<g id="tab"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"></path></g>
<g id="tab-unselected"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></g>
<g id="text-format"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path></g>
<g id="theaters"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="thumb-down"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></g>
<g id="thumb-up"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></g>
<g id="thumbs-up-down"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"></path></g>
<g id="timeline"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></g>
<g id="toc"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"></path></g>
<g id="today"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></g>
<g id="toll"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"></path></g>
<g id="touch-app"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"></path></g>
<g id="track-changes"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"></path></g>
<g id="translate"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></g>
<g id="trending-down"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></g>
<g id="trending-flat"><path d="M22 12l-4-4v3H3v2h15v3z"></path></g>
<g id="trending-up"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></g>
<g id="turned-in"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="turned-in-not"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="unarchive"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"></path></g>
<g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>
<g id="unfold-less"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"></path></g>
<g id="unfold-more"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></g>
<g id="update"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></g>
<g id="verified-user"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="view-agenda"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></g>
<g id="view-array"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"></path></g>
<g id="view-carousel"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></g>
<g id="view-column"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></g>
<g id="view-day"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></g>
<g id="view-headline"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path></g>
<g id="view-list"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></g>
<g id="view-module"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></g>
<g id="view-quilt"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"></path></g>
<g id="view-stream"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"></path></g>
<g id="view-week"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path></g>
<g id="visibility"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="visibility-off"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></g>
<g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="watch-later"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></g>
<g id="weekend"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"></path></g>
<g id="work"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></g>
<g id="youtube-searched-for"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"></path></g>
<g id="zoom-in"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></g>
<g id="zoom-out"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></g>
</defs></svg>
</iron-iconset-svg>`;function At(){return j`
  ${lt}
  <style>
    :host {
      display: block;
    }

    #moments {
      padding: 5px 30px 5px 10px;
      font-size: 1.0rem;
      border: none;
      height: 30px;
      background-color: white;
    }
  </style>

  <select
    name="moments"
    id="moments"
    .value=${this.selectedMoment}
    @change=${t=>this._onSelectMomentInputChange(t.currentTarget.value)}>
    ${this.moments.map(t=>j`
      <option value="${t}"
        ?selected=${this.selectedMoment===t}>${t}</option>
    `)}
  </select>
`}document.head.appendChild(Ot.content);class Ht extends(Mixin(at).with(LitCorkUtils)){static get properties(){return{moments:{type:Array},selectedMoment:{type:String}}}constructor(){super(),this.moments=APP_CONFIG.moments,this.render=At.bind(this),this._injectModel("AppStateModel","MomentModel")}_onAppStateUpdate(t){this.selectedMoment=t.moment}_onSelectMomentInputChange(t){this.AppStateModel.setLocation("/map/"+t)}}customElements.define("app-moments-dropdown",Ht);class It extends(Mixin(at).with(LitCorkUtils)){static get properties(){return{open:{type:Boolean,reflect:!0},moment:{type:String},momentInfo:{type:Object},momentEntryPointUrl:{type:String},endpoint:{type:String},type:{type:String},srctype:{type:String},dsttype:{type:String},view:{type:String},title:{type:String},date:{type:String},events:{type:Array},connections:{type:Array},isNode:{type:Boolean},isLink:{type:Boolean},isMoment:{type:Boolean},relatedLinks:{type:Array},selectedIndex:{type:Number},hasConnections:{type:Boolean},shortConnection:{type:Boolean},connectionSubjects:{type:Array},clusterSubjects:{type:Object},clusterSubjectTypes:{type:Array}}}constructor(){super(),this.open=!0,this.title="",this.date="",this.view="",this.type="",this.description="",this.thumbnail="",this.srctype="",this.dsttype="",this.connections=[],this.isLink=!1,this.isNode=!1,this.isMoment=!1,this.moment="",this.momentInfo={},this.momentEntryPointUrl="",this.relatedLinks=[],this.events=[],this.shortConnection=!1,this.endpoint=APP_CONFIG.endpoint,this.hasConnections=!1,this.connectionSubjects=[],this.clusterSubjectTypes=["person","place","object","event"],this.resetClusterSubjects(),this.render=Tt.bind(this),this._injectModel("AppStateModel","MomentModel")}_onMomentGraphUpdate(t){"loaded"===t.state&&this.renderState(t.payload)}_onAppStateUpdate(t){this.moment=t.moment,this.selected=t.selected,this.renderState()}firstUpdated(){this.descriptionEle=this.shadowRoot.querySelector("#description"),this.momentDescEle=this.shadowRoot.querySelector("#momentDescription")}updated(){this.isLink&&(this.title=""),this.connections.length>0?this.hasConnections=!0:this.hasConnections=!1}renderState(t){if(t){this.momentInfo=t,this.momentDescEle.innerHTML=Et.markdown.toHTML(t.description||""),this.momentEntryPointUrl="",this.events=[];for(let e in t.graph.nodes)"event"===t.graph.nodes[e].type&&this.events.push(t.graph.nodes[e]);this.events.length>0&&(this.momentInfo.title=this.events[0].name,this.events[0].temporal&&(this.momentInfo.date=this.events[0].temporal.replace("/"," - ")),this.momentEntryPoint=this.events[0].name,this.momentEntryPointUrl=`/map/${this.moment}/${this.events[0].type}/${this.events[0]["@id"]}`),this.graph=t.graph}if(this.isLink=!1,this.isNode=!1,this.isMoment=!1,this.selected){if(this.graph)if(this.type=this.selected.type,"cluster"===this.type)this.selected.ids&&this.renderCluster(this.selected.ids.map(t=>this.graph.nodes[t]));else if("connection"===this.type){this.isLink=!0;let t=this.graph.links[this.selected.id];this.renderItem(t)}else{this.isNode=!0;let t=this.graph.nodes[this.selected.id];this.renderItem(t)}}else this.renderEmpty()}renderEmpty(){if(!this.moment)return this.view="empty",void(this.type="empty");this.type="moment",this.view="moment",this.isMoment=!0}renderCluster(t){this.view="cluster",this.resetClusterSubjects(),t.forEach(t=>{this.clusterSubjects[t.type]&&(this.clusterSubjects[t.type].enabled=!0,this.clusterSubjects[t.type].nodes.push(t))});for(let t in this.clusterSubjects)this.clusterSubjects[t].nodes.sort((t,e)=>t.name>e.name?1:-1)}renderItem(t){this.view="item",this.title=t.name||"",this.location=t.location||"";let e="";if(void 0!==t.temporal&&(e=t.temporal.replace("/"," - ")),this.date=e||"",!1!==t.description&&"string"==typeof t.description&&(this.descriptionEle.innerHTML=Et.markdown.toHTML(t.description||"")),t.thumbnail&&(this.thumbnail=this.endpoint+"/"+this.moment+"/"+t.thumbnail.replace("z:","")),this.relatedLinks=[],Array.isArray(t.relatedLink)?this.relatedLinks=t.relatedLink:void 0!==t.relatedLink&&this.relatedLinks.push(t.relatedLink),this.relatedLinks=this.relatedLinks.map(t=>{return{short:t.replace(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)/,"").split("/")[0],full:t}}),"connection"===t.type)this.connectionSubjects=[this.graph.nodes[t.src],this.graph.nodes[t.dst]],this.srctype=this.connectionSubjects[0].type,this.dsttype=this.connectionSubjects[1].type;else{let e,i=[];for(let n in this.graph.links)e=this.graph.links[n],e.src===t["@id"]?i.push({link:e,node:this.graph.nodes[e.src]}):e.dst===t["@id"]&&i.push({link:e,node:this.graph.nodes[e.dst]});i.map(t=>{if(Array.isArray(t.link.name)){let e=t.link.name[1],i=t.link.name[0];t.link.name=function(t,e){let i=new RegExp(e,"g");return i.test(t)?t.replace(i,"<b>"+e+"</b>"):"<b>"+e+"</b>&nbsp;"+t}(i,e),this.shortConnection=!0}}),i.sort((t,e)=>t.node.name>e.node.name?1:-1),this.connections=i}}renderLink(t){this.type="item",this.title=t.name,this.descriptionEle.innerHTML=Et.markdown.toHTML(t.description||"")}resetClusterSubjects(){this.clusterSubjects={person:{enabled:!1,label:"People",nodes:[]},place:{enabled:!1,label:"Places",nodes:[]},object:{enabled:!1,label:"Objects",nodes:[]},event:{enabled:!1,label:"Events",nodes:[]}}}_onToggleKeyUp(t){13===t.which&&this._fireToggleEvent()}_fireToggleEvent(){this.dispatchEvent(new CustomEvent("toggle"))}}function Nt(){return j`
  ${lt}
  <style>
    :host {
      background-color: white;
      display: block;
    }

    main {
      padding: 10px;
    }
  </style>

  <main>
    <h1>About IntertWINE</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
    </p>
  </main>
`}customElements.define("app-map-info-panel",It);function jt(){return j`
    ${lt}
    <style>
      :host {
        display: block;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow-y: auto;
        background-color: var(--app-color-smoke);
        background-image: url('./../../images/background.png');
        background-repeat: no-repeat;
        background-attachment: fixed;
      }

      header {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        position: relative;
        padding: 50px 0;
        background-color: var(--app-color-interface-blue);
        background-image: url('./../../images/header-connectedicons.svg');
      }

      header > div {
        align-self: top;
        padding: 0 30px;
        width: 50%;
        max-width: 400px;
        line-height: 25px;
        color: white;
      }

      header > div:first-of-type {
        text-align: right;
      }

      header > div > h1 {
        margin: 0;
        padding: 0;
        color: white;
        font-size: 30px;
        font-weight: normal;
        line-height: 35px;
        background-color: var(--app-color-interface-blue);
      }

      header .text-block {
        padding-top: 0;
        background-color: var(--app-color-interface-blue);
      }

      .arrow-down {
        height: 32px;
        position: relative;
        text-align: center;
      }

      .arrow-down::after {
        display: inline-block;
        width: 0;
        height: 0;
        content: '';
        border-top: 20px solid var(--app-color-interface-blue);
        border-right: 20px solid transparent;
        border-left: 20px solid transparent;
      }

      main {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 30px;
      }

      main > div {
        width: 48%;
        max-width: 600px;
        margin-bottom: 30px;
      }

      main > div:first-of-type {
        margin-right: 15px;
      }

      main > div:last-of-type {
        margin-left: 15px;
      }

      .card {
        background-color: white;
      }

      .card .feature-img {
        height: 300px;
        max-width: 600px;
        max-height: 300px;
      }

      .card .chardonnay {
        background-image: url('./../../images/chardonnaygrapes.jpg');
        background-repeat: no-repeat;
        background-size: cover;
      }

      .card .jop {
        background-image: url('./../../images/jop.jpg');
        background-repeat: no-repeat;
        background-size: cover;
      }

      .card .content {
        padding: 30px;
        font-size: 15px;
      }

      .card .content h4 {
        margin: 0;
        font-size: 20px;
      }

      .card .content em {
        font-size: 17px;
      }

      .card .content > p {
        margin: 15px 0 0 0;
        padding: 0;
      }

      .card .footer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 0 30px 0;
        color: var(--app-color-interface-blue);
        font-weight: bold;
        font-size: 15px;
        text-transform: capitalize;
        text-align: center;
      }

      .card .footer > button {
        display: flex;
        flex-direction: row;
        margin: 0;
        padding: 0;
        color: var(--app-color-interface-blue);
        background-color: initial;
        border: initial;
      }

      .card .footer > button > iron-icon {
        margin: 0 8px;
      }

      .card .footer > button:first-of-type > span:first-of-type {
        order: 0;
      }

      .card .footer > button:first-of-type > iron-icon {
        top: -4px;
        order: 1;
      }

      .card .footer .separator {
        margin: 0 14px 0 10px;
        height: 30px;
        border-right: 1px solid var(--app-color-pewter);
      }

      .card .footer iron-icon {
        font-size: 30px;
      }

      @media(max-width: 860px) {
        .card .feature-img {
          height: 200px;
        }
      }

      @media(max-width: 800px) {
        main > div {
          width: 100%;
        }

        main > div:first-of-type {
          margin-right: 0px;
        }

        main > div:last-of-type {
          margin-left: 0px;
        }
      }

      @media (max-width: 590px) {
        header {
          background-image: initial;
        }

        main > div {
          width: 100%;
        }

        main > div:first-of-type {
          margin-right: 0px;
        }

        main > div:last-of-type {
          margin-left: 0px;
        }

        .card .feature-img {
          height: 300px;
        }
      }

      @media(max-width: 414px) {
        header {
          padding: 30px 0;
          flex-wrap: wrap;
        }

        header > div {
          width: 100%;
        }

        header > div:first-of-type {
          text-align: initial;
        }

        header .text-block {
          padding-top: 20px;
        }

        .arrow-down::after {
          display: none;
        }

        .card .feature-img {
          height: 200px;
        }

        .card .footer > button {
          flex-direction: column;
        }

        .card .footer > button:first-of-type > span:first-of-type {
          order: 1;
        }

        .card .footer > button:first-of-type > iron-icon {
          order: 0;
        }

        .card .footer > button > iron-icon {
          align-self: center;
          margin-bottom: 10px;
        }

        .card .footer .separator {
          height: 60px;
        }
      }
    </style>

    <header>
      <div>
        <h1>
          Enter a Moment in
          <br />
          California Wine History
        </h1>
      </div>
      <div class="text-block" style="font-size: 17px;">
        Get the story behind the people, places, and things connected to a particular time
        or event in wine history, then dive into an interactive map to explore the
        specific connections between them.
      </div>
    </header>
    <div class="arrow-down"></div>

    <main>
      <div id="chardonnay" class="chardonnay">
        <div class="card">
          <div class="feature-img chardonnay"></div>
          <div class="content">
            <h4>Growth of Chardonnay</h4>
            <em>1882 - 1960</em>
            <p>
              If Cabernet Sauvignon is the king of red grapes, Chardonnay is the queen of
              whites. Chardonnay is the most popular wine in the U.S. and has maintained its
              lead for the last decade. Historical references note California plantings of
              Chardonnay dating back to the late 1800s, but production was limited due to low
              yields. This is the story of California Chardonnay pre-1970s, when plantings of
              the grape boomed as the wine grew in popularity.
            </p>
          </div>
          <div class="footer">
            <button name="chardonnay" type="button" @click="${t=>this._onReadStoryClick(t.currentTarget.name)}">
              <span>Read Story</span>
              <iron-icon icon="intert-wine-icons:book"></iron-icon>
            </button>
            <span class="separator"></span>
            <button name="chardonnay" type="button" @click="${t=>this._onExploreMapClick(t.currentTarget.name)}">
              <iron-icon icon="intert-wine-icons:explore"></iron-icon>
              <span>Explore Map</span>
            </button>
          </div>
        </div>
      </div>

      <div id="jop" class="jop">
        <div class="card">
          <div class="feature-img jop"></div>
          <div class="content">
            <h4>Judgment of Paris</h4>
            <em>1976</em>
            <p>
              The Paris Wine Tasting of 1976 — known as the Judgment of Paris — was a wine
              competition organized in Paris on 24 May 1976 by Steven Spurrier, a British wine
              merchant, in which French judges carried out two blind tasting comparisons: one
              of top-quality Chardonnays and another of red wines.
            </p>
          </div>
          <div class="footer">
            <button name="jop" type="button" @click="${t=>this._onReadStoryClick(t.currentTarget.name)}">
              <span>Read Story</span>
              <iron-icon icon="intert-wine-icons:book"></iron-icon>
            </button>
            <span class="separator"></span>
            <button name="jop" type="button" @click="${t=>this._onExploreMapClick(t.currentTarget.name)}">
              <iron-icon icon="intert-wine-icons:explore"></iron-icon>
              <span>Explore Map</span>
            </button>
          </div>
        </div>
      </div>
    </main>
`}customElements.define("app-about",class extends at{static get properties(){return{active:{type:Boolean}}}constructor(){super(),this.render=Nt.bind(this),this.active=!0}});class Rt extends(Mixin(at).with(LitCorkUtils)){static get properties(){return{active:{type:Boolean}}}constructor(){super(),this.render=jt.bind(this),this.active=!0,this._injectModel("AppStateModel")}_onReadStoryClick(t){this.AppStateModel.setLocation("/moment/"+t)}_onExploreMapClick(t){this.AppStateModel.setLocation("/map/"+t)}}function Vt(){return j`
  ${lt}
  <style>
    .floating-btn {
      position: absolute;
      bottom: 14px;
      right: 14px;

      font-weight: normal;
      text-transform: none;

      border: 0;
      white-space: nowrap;

      -webkit-box-shadow: -2px 0px 6px 0px rgba(50, 50, 50, 0.75);
      -moz-box-shadow:    -2px 0px 6px 0px rgba(50, 50, 50, 0.75);
      box-shadow:         -2px 0px 6px 0px rgba(50, 50, 50, 0.75);

      visibility: visible;
      opacity: 1;
      transition: visibility 0s .5s, opacity .5s ease;
    }
  </style>

  <button class="floating-btn btn secondary-blue-bg">
    <iron-icon class="explore-map-icon" icon="intert-wine-icons:explore"></iron-icon>
    Explore the Map &gt;
  </button>
  `}customElements.define("app-home",Rt);function Bt(){return j`
    ${lt}
    <style>
      :host {
        display: block;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    </style>

    ${"chardonnay"===this.selectedMoment?j`<app-moment-chardonnay></app-moment-chardonnay>`:j`<app-moment-jop></app-moment-jop>`}
`}function Dt(){return j`
    ${lt}
    <link rel="stylesheet" type="text/css" href="../elements/styles/custom_styles.css">
    <style>
      :host {
        display: block;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    </style>

    <div id="container" class="container" role="main">
      <header>
        <div class="header-image chardonnay"></div>
        <div class="moment-header">
          <ul>
            <li style="text-align: right;">
              <h4>moments in wine history</h4>
              <h2 class="inverse">Growth of Chardonnay</h2>
            </li>

            <li>
              <div class="quote">
                "Since Chardonnay has been from time immemorial the
                great white grape variety of the Burgundy district of
                France, it is surprising how short its history is as
                a major factor in the California wine scene.
                <ul class="credit">
                  <li>
                    Eleanor McCrea<br />
                    of California Sotheby Book of California Wine (1984)
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </header>

      <div style="position: -webkit-sticky; position: sticky; top: 100%; z-index: 1; bottom: 0;">
        <app-moment-float-btn id="floatBtn"></app-moment-float-btn>
      </div>

      <section class="text-blocks bg-white">
        <p>
          Though some records indicate that Chardonnay was present in California during the mid–late 19th century, it had
          a very limited role. Producers like Stony Hill Vineyard and Hanzell began to work with the grape with great
          success in the 1950s, but it existed purely on the margins; in 1960 there were only around 150 documented acres
          of Chardonnay in the state. But its popularity continued to grow at a rapid pace in the 1960s, and after Chateau
          Montelena’s Chardonnay bested some of Burgundy’s most iconic wines in the 1976 Judgment of Paris,
          Chardonnay’s boom was supersonic.
        </p>
        <p>
          The value of the Chardonnay grape to wine producers lies, perhaps counter-intuitively, in its neutrality. The
          notable grape breeder Harold Olmo said of Chardonnay, “There is little in the way of distinct flavor, in either the
          grape or the new wine, until the fruit is almost overripe...However, it is exactly this delicacy and cleanness of
          taste...that make it... a delight to the consumer.”
        </p>
        <p>
          Chardonnay and its parent, Pinot noir, are the two classic varieties used in Champagne, in which Chardonnay’s
          neutral character leaves space for the expression of the mellow aromas developed in the bottle. The finesse of
          fine Chardonnay wines, opined winemaker, Eleanor Mcrea, “is as unmistakable as Beethoven, [yet] there are many
          variations on the theme.” That Chardonnay “responds gracefully to many approaches” makes it a canvas for the
          expression of vineyard and vinification. While some pioneering Chardonnay producers in California sought to
          reproduce the high acid, crisp style of Chablis, or of the richer quality of Burgundy white, still others have worked
          with riper grapes, acid-lowering malolactic fermentation and oak-barrel aging to develop the now familiar
          “California Style.”
        </p>
      </section>

      <section class="text-image-pairing bg-tan">
        <div class="wine-harvest">
          <span>Stanley Ranch Vineyards</span>
        </div>

        <div class="text-blocks">
          <h1>
            From 300 Acres to 100,000
          </h1>
          <p>
            At the start of the 1960s there were only 300 acres of Chardonnay planted in all of California.
            Today the grape is planted to more than 100,000 acres.
          </p>
          <p>
            The California Chardonnay that wine writer Hugh Johnson describes in Vintage: The Story of Wine
            as having the “buttery, half-smoked aromas and flavours that had … spelt only Meursault,
            Montrachet, and Corton-Charlemagne” didn’t have a well-defined presence in California until after
            Joseph Heitz bought, blended, and sold James D. Zellerbach’s last vintages, and showed that
            California could produce wine that would stand up to top white Burgundies.
          </p>
          <p>
            Timing, skill, doggedness, a knack for promotion, and the Judgment of Paris propelled Heitz’s
            Chardonnays into an international arena, but the stage for Chardonnay’s rise in California had
            been set decades before Prohibition, in Livermore, by a group of immigrant winemakers and a San
            Franciscan whose dry white wine won California’s first international wine award at the 1889 Paris
            Exposition.
          </p>
        </div>
      </section>

      <section class="text-blocks bg-white">
        <h1>
          Chardonnay Comes to California
        </h1>
        <p>
          Chardonnay’s presence among early California wines is hard to trace due to the absence of varietal labeling
          before the 1930s, variations on the grape’s spelling, and mistakes in identification. It wasn’t uncommon for
          Chardonnay to be mistaken for Pinot Blanc and Melon de Bourgogne.
        </p>
        <p>
          The grape’s stateside story begins to come into focus in 1882, when Charles Wetmore imported budwood from
          Meursault and established his Cresta Blanca vineyard in Livermore. Chardonnay roots developed in Livermore
          nurseries and vineyards as well as in the Santa Cruz Mountains, where Livermore winegrower Paul Masson
          planted a second vineyard to Pinot Noir and Chardonnay, using cuttings from Burgundy purportedly from the
          vineyards of winegrower Louis Latour
        </p>
      </section>

      <div class="triptych">
        <div><span>1806 Cresta Blanca Farm</span></div>
        <div><span>Prohibition</span></div>
        <div><span>The Wente Family</span></div>
      </div>

      <section class="text-blocks bg-white">
        <h1>
          Prohibition
        </h1>
        <p>
          During Prohibition, vineyards planted to white varieties were pulled up and the land was planted to durable
          cultivars that could better survive cross-continental transportation, such as Alicante Bouschet. In “The Story of
          California Chardonnay,” wine writer Elaine Chukan Brown notes that “In the grape harvest report of 1930, total
          vineyard acreage in California was around 600,000 acres, with the statewide total of white grapes planted, across
          all varieties, being just 7,000 acres, consisting primarily of Riesling and Sémillon. Plantings of Chardonnay were
          so small that the variety was not recorded specifically.”
        </p>
        <p>
          By the end of Prohibition the Wente and Masson vineyards were the only substantial sources for Chardonnay
          budwood in California.
        </p>
      </section>

      <section class="text-image-pairing bg-tan">
        <div class="text-blocks">
          <h1>
            Chardonnay's Rise
          </h1>
          <p>
            After Prohibition, an insistence on varietal labeling by men like Frank Schoonmaker, the Wentes,
            and Martin Ray led to Chardonnay’s acknowledgment nationally as a distinct wine of value.
          </p>
          <p>
            The story of a private dinner in Rome, in 1960, during which Hanzell’s 1957 Chardonnay stood up
            to a 1955 Corton Charlemagne, circulated among California vintners, and after Zellerbach died, in
            1963, winegrower Joseph Heitz purchased the last of his vintages at auction.
          </p>
          <p>
            Heitz’s acumen as a businessman and winemaker; the publication of the first volume of Julia
            Child’s book Mastering the Art of French Cooking, in 1961, with volume 2 following in 1970; and
            the Judgment of Paris were further fuel for Chardonnay’s rise. The rest, as they say, is history
          </p>
        </div>
        <div class="wentechardonnay"></div>
      </section>

      <footer>
        <div class="map-wrapper w-100 d-flex">
          <div class="map w-50"></div>
          <div class="explore-map w-50">
            <iron-icon class="explore-map-icon" icon="intert-wine-icons:explore"></iron-icon>
            <span style="display: inline-block;">
              <h6>Explore the Map</h6>
              <h2 class="inverse">Growth of Chardonnay</h2>
            </span>
            <br />
            Learn more about how the people, locations, and wines are connected to the growth of Chardonnay via the network
            map of this moment in wine history.
            <br /><br />
            <a class="btn inverse">Launch Map</a>
          </div>
        </div>

        <div class="bottom-content">
          <h6>Sources</h6>
          <ol>
            <li><em>Elaine C. Brown, "<a href="">The Story of California Wine</a>"</em></li>
            <li><em>Nancy Sweet, FPS, UC Davis, 2007, "<a href="">Chardonnay History and Selections at FPS</a>"</em></li>
            <li><em>Gerald Asher, 1990, "Chadonnay: Buds, Twigs and Clones," Gourmet</em></li>
            <li><em>Thomas Pinney, 1989, A History of Wine in America, Volumes 1 & 2</em></li>
            <li><em>George Taber, 2005, Judgment of Paris: California vs France and the historic 1976 Paris tasting that revolutionized wine</em></li>
          </ol>
      </div>
      </footer>
    </div>
`}customElements.define("app-moment-float-btn",class extends at{static get properties(){return{active:{type:Boolean}}}constructor(){super(),this.render=Vt.bind(this),this.active=!0}});const Zt="function"==typeof window.WeakMap&&"function"==typeof window.Map,Ft=function(){if(Zt)return window.WeakMap;function t(t,e){let i=-1;return t.some((t,n)=>{let o=t[0]===e;return o&&(i=n),o}),i}return class{constructor(){this.__entries__=[]}get(e){let i=t(this.__entries__,e);return this.__entries__[i][1]}set(e,i){let n=t(this.__entries__,e);~n?this.__entries__[n][1]=i:this.__entries__.push([e,i])}delete(e){let i=this.__entries__,n=t(i,e);~n&&i.splice(n,1)}has(e){return!!~t(this.__entries__,e)}}}(),Ut=Zt?window.Map:class extends Ft{get size(){return this.__entries__.length}clear(){this.__entries__.splice(0,this.__entries__.length)}entries(){return this.__entries__.slice()}keys(){return this.__entries__.map(t=>t[0])}values(){return this.__entries__.map(t=>t[1])}forEach(t,e=null){for(const i of this.__entries__)t.call(e,i[1],i[0])}};var qt=window.performance&&window.performance.now?()=>window.performance.now():()=>Date.now();const Gt="function"==typeof window.MutationObserver,Wt=window.requestAnimationFrame?window.requestAnimationFrame:t=>setTimeout(()=>t(qt()),1e3/60);function $t(t,e=0){let i=!1;return function(...n){!1!==i&&clearTimeout(i),i=setTimeout(()=>{i=!1,t.apply(this,n)},e)}}function Jt(t){const e={};for(const i of Object.keys(t))e[i]={value:t[i]};return Object.defineProperties({},e)}function Yt(t=0,e=0,i=0,n=0){return{left:t,top:e,width:i,height:n,bottom:e+n,right:t+i}}function Kt(t){return t===document.documentElement?Yt(0,0,t.clientWidth,t.clientHeight):t.getBoundingClientRect()}function Xt(t){return t.width*t.height}class Qt{constructor(t,e,i,n,o,r){Object.defineProperties(this,{boundingClientRect:{value:e},intersectionRatio:{value:n},intersectionRect:{value:Jt(i)},rootBounds:{value:Jt(o)},target:{value:t},time:{value:r}})}}const te=Yt();function ee(t,e){const i=Math.max(e.left,t.left),n=Math.min(e.right,t.right),o=Math.max(e.top,t.top);return Yt(i,o,n-i,Math.min(e.bottom,t.bottom)-o)}class ie{constructor(t,e){this.target=t,this.observer=e,this.prevTargetRect=te,this.prevThreshold=0,this.prevRatio=0}updateIntersection(t,e){let i,n=Kt(this.target),o=this.getIntersectionData(t,e,n),r=+o.exists,s=o.ratio!==this.prevRatio,a=(l=n,h=this.prevTargetRect,!(l.top===h.top&&l.left===h.left&&l.right===h.right&&l.bottom===h.bottom));var l,h,c;if(o.exists&&(0!==(c=n).height||0!==c.width)&&(r=this.observer.getThresholdGreaterThan(o.ratio)),i=r!==this.prevThreshold,this.prevTargetRect=n,this.prevThreshold=r,this.prevRatio=o.ratio,o.exists||(o.ratio=0,o.rect=te),i){const t=new Qt(this.target,n,o.rect,o.ratio,e,qt());this.observer.queueEntry(t)}return{ratioChanged:s,thresholdChanged:i,targetRectChanged:a}}getIntersectionData(t,e,i){const n=this.target;i||(i=Kt(this.target)),e||(e=Kt(t));let o=function(t,e){const i=document.documentElement;return t!==i&&!i.contains(t)||!t.contains(e)}(t,n),r=o?te:function(t,e,i,n){let o=n,r=e.parentNode,s=!1;for(;!s;){let e=null;r===t||1!==r.nodeType?(s=!0,e=i):"visible"!==window.getComputedStyle(r).overflow&&(e=Kt(r)),e&&(o=ee(o,e)),r=r.parentNode}return o}(t,n,e,i),s=!o&&r.width>=0&&r.height>=0;return{rect:r,ratio:Xt(r)/Xt(i)||0,exists:s}}}class ne{constructor(t,e={},i,n){if("function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");if("object"!=typeof e)throw new TypeError("parameter 2 is not an object.");if("root"in e&&!(e.root instanceof Element))throw new TypeError("member root is not of type Element.");const o=function(t=0){let e=t;return Array.isArray(t)?t.length||(e=[0]):e=[t],e.map(t=>{if(t=Number(t),!window.isFinite(t))throw new TypeError("The provided double value is non-finite.");if(t<0||t>1)throw new RangeError("Threshold values must be between 0 and 1.");return t}).sort()}(e.threshold),r=function(t="0px"){if((t=(t+"").split(/\s+/)).length>4)throw new Error("Extra text found at the end of rootMargin.");return t[0]=t[0]||"0px",t[1]=t[1]||t[0],t[2]=t[2]||t[0],t[3]=t[3]||t[1],{rawData:t.join(" "),parsedData:t.map(t=>{let[,e,i]=/^(-?\d*\.?\d+)(px|%)$/.exec(t)||[];const n="px"===i;if(e=parseFloat(e),!window.isFinite(e))throw new Error("rootMargin must be specified in pixels or percent.");return n||(e/=100),{value:e,pixels:n}})}}(e.rootMargin);this.root=e.root||null,this.rootMargin=r.rawData,this.thresholds=Object.freeze(o),this._root=e.root||document.documentElement,this._callback=t,this._rootMargin=r.parsedData,this._targets=new Ut,this._quedEntries=[],this._publicObserver=n||this,this.controller=i}observe(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(t instanceof Element))throw new TypeError('parameter 1 is not of type "Element".');let e=this._targets;e.has(t)||(e.set(t,new ie(t,this)),this.controller.isConnected(this)||this.controller.connect(this),this.controller.startUpdateCycle())}unobserve(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(t instanceof Element))throw new TypeError('parameter 1 is not of type "Element".');let e=this._targets;e.has(t)&&e.delete(t),e.size||this.disconnect()}disconnect(){this._targets.clear(),this.controller.disconnect(this)}takeRecords(){return this._quedEntries.splice(0)}notifySubscriber(){const t=this.takeRecords(),e=this._publicObserver;t.length&&this._callback.call(e,t,e)}queueEntry(t){this._quedEntries.push(t)}hasEntries(){return!!this._quedEntries.length}updateObservations(){let t=this._root,e=this.getRootRect(),i=!1;return this._targets.forEach(n=>{const o=n.updateIntersection(t,e);(o.ratioChanged||o.targetRectChanged)&&(i=!0)}),i}getThresholdGreaterThan(t){let e=this.thresholds,i=e.length,n=0;for(;n<i&&e[n]<=t;)++n;return n}getRootRect(){return function(t,e){e=e.map((e,i)=>{let n=e.value;return e.pixels||(n*=i%2?t.width:t.height),n});const i={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return i.width=i.right-i.left,i.height=i.bottom-i.top,i}(Kt(this._root),this._rootMargin)}}const oe=new class{constructor(t=50,e=!1){this._idleTimeout=t,this._trackHovers=e,this._cycleStartTime=-1,this._isUpdateScheduled=!1,this._repeatCycle=!1,this._hoverInitiated=!1,this._mutationsObserver=null,this._isListening=!1,this._observers=[],this.startUpdateCycle=this.startUpdateCycle.bind(this),this.scheduleUpdate=this.scheduleUpdate.bind(this),this._onMutation=this._onMutation.bind(this),this._repeatHandler=$t(this.scheduleUpdate,200),this._onMouseOver=$t(this.startUpdateCycle,200)}get idleTimeout(){return this._idleTimeout}set idleTimeout(t){this._idleTimeout=t}connect(t){this.isConnected(t)||this._observers.push(t),this._isListening||this._initListeners()}disconnect(t){let e=this._observers,i=e.indexOf(t);~i&&e.splice(i,1),!e.length&&this._isListening&&this._removeListeners()}isConnected(t){return!!~this._observers.indexOf(t)}_updateObservers(){let t=!1;for(const e of this._observers)e.updateObservations()&&(t=!0),e.hasEntries()&&e.notifySubscriber();return t}startUpdateCycle(){this._cycleStartTime=qt(),this.scheduleUpdate()}scheduleUpdate(t){if("number"==typeof t){const t=this._updateObservers();if(this._isUpdateScheduled=!1,!this._wasCycleStarted())return;t?this.startUpdateCycle():this._hasIdleTimeEnded()?this._onCycleEnded():this.scheduleUpdate()}else this._isUpdateScheduled||(Wt(this.scheduleUpdate),this._isUpdateScheduled=!0)}_hasIdleTimeEnded(){return qt()-this._cycleStartTime>this._idleTimeout}_wasCycleStarted(){return-1!==this._cycleStartTime}_onCycleEnded(){this._cycleStartTime=-1,this._repeatCycle&&(this._cycleStartTime=0,this._repeatHandler())}_initListeners(){this._isListening||(this._isListening=!0,window.addEventListener("resize",this.startUpdateCycle,!0),window.addEventListener("scroll",this.scheduleUpdate,!0),this._trackHovers&&this._addHoverListener(),Gt?(this._mutationsObserver=new MutationObserver(this._onMutation),this._mutationsObserver.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(this._repeatCycle=!0,window.addEventListener("click",this.startUpdateCycle,!0),this.startUpdateCycle()))}_removeListeners(){this._isListening&&(window.removeEventListener("resize",this.startUpdateCycle,!0),window.removeEventListener("scroll",this.scheduleUpdate,!0),this._removeHoverListener(),Gt?this._mutationsObserver&&(this._mutationsObserver.disconnect(),this._mutationsObserver=null):(this._repeatCycle=!1,window.removeEventListener("click",this.startUpdateCycle,!0)),this._isListening=!1)}enableHover(){this._trackHovers=!0,this._isListening&&this._addHoverListener()}disableHover(){this._trackHovers=!1,this._removeHoverListener()}isHoverEnabled(){return this._trackHovers}_addHoverListener(){this._hoverInitiated||(window.addEventListener("mouseover",this._onMouseOver,!0),this._hoverInitiated=!0)}_removeHoverListener(){this._hoverInitiated&&(window.removeEventListener("mouseover",this._onMouseOver,!0),this._hoverInitiated=!1)}_onMutation(t){t.every(t=>"attributes"!==t.type)?this.scheduleUpdate():this.startUpdateCycle()}},re=new Ft;class se{constructor(t,e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");const i=new ne(t,e,oe,this);Object.defineProperties(this,{root:{value:i.root},thresholds:{value:i.thresholds},rootMargin:{value:i.rootMargin}}),re.set(this,i)}static get idleTimeout(){return oe.idleTimeout}static set idleTimeout(t){if("number"!=typeof t)throw new TypeError('type of "idleTimeout" value must be a number.');if(typeof t<0)throw new TypeError('"idleTimeout" value must be greater than 0.');oe.idleTimeout=t}static get trackHovers(){return oe.isHoverEnabled()}static set trackHovers(t){if("boolean"!=typeof t)throw new TypeError('type of "trackHovers" value must be a boolean.');t?oe.enableHover():oe.disableHover()}}["observe","unobserve","disconnect","takeRecords"].forEach(t=>{se.prototype[t]=function(){return re.get(this)[t](...arguments)}});var ae=se;let le;le="function"==typeof window.IntersectionObserver?window.IntersectionObserver:ae;function he(){return j`
    ${lt}
    <link rel="stylesheet" type="text/css" href="../elements/styles/custom_styles.css">
    <style>
      :host {
        display: block;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    </style>

    <div id="container" class="container" role="main">
      <header>
        <div class="header-image jop"></div>
        <div class="moment-header">
          <ul>
            <li style="text-align: right;">
              <h4>moments in wine history</h4>
              <h2 class="inverse">JOP</h2>
            </li>

            <li>
              <div class="quote">
                "Since JOP has been from time immemorial the
                great white grape variety of the Burgundy district of
                France, it is surprising how short its history is as
                a major factor in the California wine scene.
                <ul class="credit">
                  <li>
                    Eleanor McCrea<br />
                    of California Sotheby Book of California Wine (1984)
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </header>

      <div style="position: -webkit-sticky; position: sticky; top: 100%; z-index: 1; bottom: 0;">
        <app-moment-float-btn id="floatBtn"></app-moment-float-btn>
      </div>

      <section class="text-blocks bg-white">
        <p>
          Though some records indicate that Chardonnay was present in California during the mid–late 19th century, it had
          a very limited role. Producers like Stony Hill Vineyard and Hanzell began to work with the grape with great
          success in the 1950s, but it existed purely on the margins; in 1960 there were only around 150 documented acres
          of Chardonnay in the state. But its popularity continued to grow at a rapid pace in the 1960s, and after Chateau
          Montelena’s Chardonnay bested some of Burgundy’s most iconic wines in the 1976 Judgment of Paris,
          Chardonnay’s boom was supersonic.
        </p>
        <p>
          The value of the Chardonnay grape to wine producers lies, perhaps counter-intuitively, in its neutrality. The
          notable grape breeder Harold Olmo said of Chardonnay, “There is little in the way of distinct flavor, in either the
          grape or the new wine, until the fruit is almost overripe...However, it is exactly this delicacy and cleanness of
          taste...that make it... a delight to the consumer.”
        </p>
        <p>
          Chardonnay and its parent, Pinot noir, are the two classic varieties used in Champagne, in which Chardonnay’s
          neutral character leaves space for the expression of the mellow aromas developed in the bottle. The finesse of
          fine Chardonnay wines, opined winemaker, Eleanor Mcrea, “is as unmistakable as Beethoven, [yet] there are many
          variations on the theme.” That Chardonnay “responds gracefully to many approaches” makes it a canvas for the
          expression of vineyard and vinification. While some pioneering Chardonnay producers in California sought to
          reproduce the high acid, crisp style of Chablis, or of the richer quality of Burgundy white, still others have worked
          with riper grapes, acid-lowering malolactic fermentation and oak-barrel aging to develop the now familiar
          “California Style.”
        </p>
      </section>

      <section class="text-image-pairing bg-tan">
        <div class="wine-harvest">
          <span>Stanley Ranch Vineyards</span>
        </div>

        <div class="text-blocks">
          <h1>
            From 300 Acres to 100,000
          </h1>
          <p>
            At the start of the 1960s there were only 300 acres of Chardonnay planted in all of California.
            Today the grape is planted to more than 100,000 acres.
          </p>
          <p>
            The California Chardonnay that wine writer Hugh Johnson describes in Vintage: The Story of Wine
            as having the “buttery, half-smoked aromas and flavours that had … spelt only Meursault,
            Montrachet, and Corton-Charlemagne” didn’t have a well-defined presence in California until after
            Joseph Heitz bought, blended, and sold James D. Zellerbach’s last vintages, and showed that
            California could produce wine that would stand up to top white Burgundies.
          </p>
          <p>
            Timing, skill, doggedness, a knack for promotion, and the Judgment of Paris propelled Heitz’s
            Chardonnays into an international arena, but the stage for Chardonnay’s rise in California had
            been set decades before Prohibition, in Livermore, by a group of immigrant winemakers and a San
            Franciscan whose dry white wine won California’s first international wine award at the 1889 Paris
            Exposition.
          </p>
        </div>
      </section>

      <section class="text-blocks bg-white">
        <h1>
          Chardonnay Comes to California
        </h1>
        <p>
          Chardonnay’s presence among early California wines is hard to trace due to the absence of varietal labeling
          before the 1930s, variations on the grape’s spelling, and mistakes in identification. It wasn’t uncommon for
          Chardonnay to be mistaken for Pinot Blanc and Melon de Bourgogne.
        </p>
        <p>
          The grape’s stateside story begins to come into focus in 1882, when Charles Wetmore imported budwood from
          Meursault and established his Cresta Blanca vineyard in Livermore. Chardonnay roots developed in Livermore
          nurseries and vineyards as well as in the Santa Cruz Mountains, where Livermore winegrower Paul Masson
          planted a second vineyard to Pinot Noir and Chardonnay, using cuttings from Burgundy purportedly from the
          vineyards of winegrower Louis Latour
        </p>
      </section>

      <div class="triptych">
        <div><span>1806 Cresta Blanca Farm</span></div>
        <div><span>Prohibition</span></div>
        <div><span>The Wente Family</span></div>
      </div>

      <section class="text-blocks bg-white">
        <h1>
          Prohibition
        </h1>
        <p>
          During Prohibition, vineyards planted to white varieties were pulled up and the land was planted to durable
          cultivars that could better survive cross-continental transportation, such as Alicante Bouschet. In “The Story of
          California Chardonnay,” wine writer Elaine Chukan Brown notes that “In the grape harvest report of 1930, total
          vineyard acreage in California was around 600,000 acres, with the statewide total of white grapes planted, across
          all varieties, being just 7,000 acres, consisting primarily of Riesling and Sémillon. Plantings of Chardonnay were
          so small that the variety was not recorded specifically.”
        </p>
        <p>
          By the end of Prohibition the Wente and Masson vineyards were the only substantial sources for Chardonnay
          budwood in California.
        </p>
      </section>

      <section class="text-image-pairing bg-tan">
        <div class="text-blocks">
          <h1>
            Chardonnay's Rise
          </h1>
          <p>
            After Prohibition, an insistence on varietal labeling by men like Frank Schoonmaker, the Wentes,
            and Martin Ray led to Chardonnay’s acknowledgment nationally as a distinct wine of value.
          </p>
          <p>
            The story of a private dinner in Rome, in 1960, during which Hanzell’s 1957 Chardonnay stood up
            to a 1955 Corton Charlemagne, circulated among California vintners, and after Zellerbach died, in
            1963, winegrower Joseph Heitz purchased the last of his vintages at auction.
          </p>
          <p>
            Heitz’s acumen as a businessman and winemaker; the publication of the first volume of Julia
            Child’s book Mastering the Art of French Cooking, in 1961, with volume 2 following in 1970; and
            the Judgment of Paris were further fuel for Chardonnay’s rise. The rest, as they say, is history
          </p>
        </div>
        <div class="wentechardonnay"></div>
      </section>

      <footer>
        <div class="map-wrapper w-100 d-flex">
          <div class="map w-50"></div>
          <div class="explore-map w-50">
            <iron-icon class="explore-map-icon" icon="intert-wine-icons:explore"></iron-icon>
            <span style="display: inline-block;">
              <h6>Explore the Map</h6>
              <h2 class="inverse">Growth of Chardonnay</h2>
            </span>
            <br />
            Learn more about how the people, locations, and wines are connected to the growth of Chardonnay via the network
            map of this moment in wine history.
            <br /><br />
            <a class="btn inverse">Launch Map</a>
          </div>
        </div>

        <div class="bottom-content">
          <h6>Sources</h6>
          <ol>
            <li><em>Elaine C. Brown, "<a href="">The Story of California Wine</a>"</em></li>
            <li><em>Nancy Sweet, FPS, UC Davis, 2007, "<a href="">Chardonnay History and Selections at FPS</a>"</em></li>
            <li><em>Gerald Asher, 1990, "Chadonnay: Buds, Twigs and Clones," Gourmet</em></li>
            <li><em>Thomas Pinney, 1989, A History of Wine in America, Volumes 1 & 2</em></li>
            <li><em>George Taber, 2005, Judgment of Paris: California vs France and the historic 1976 Paris tasting that revolutionized wine</em></li>
          </ol>
      </div>
      </footer>
    </div>
`}customElements.define("app-moment-chardonnay",class extends at{static get properties(){return{active:{type:Boolean}}}constructor(){super(),this.render=Dt.bind(this),this.active=!0}firstUpdated(){this.container=this.shadowRoot.getElementById("container"),this.container.addEventListener("scroll",t=>this._scrollIntoView(t))}_scrollIntoView(t){window,this.floatBtn=this.shadowRoot.getElementById("floatBtn"),this.footer=this.shadowRoot.querySelector("footer");new window.IntersectionObserver(t=>{t[0].isIntersecting?(this.floatBtn.style.visibility="hidden",this.floatBtn.style.opacity=0,this.floatBtn.style.transition="visibility 0s .5s, opacity .5s ease"):(this.floatBtn.style.visibility="visible",this.floatBtn.style.opacity=1)}).observe(this.footer)}});customElements.define("app-moment-jop",class extends at{static get properties(){return{active:{type:Boolean}}}constructor(){super(),this.render=he.bind(this),this.active=!0}firstUpdated(){this.container=this.shadowRoot.getElementById("container"),this.container.addEventListener("scroll",t=>this._scrollIntoView(t))}_scrollIntoView(t){window,this.floatBtn=this.shadowRoot.getElementById("floatBtn"),this.footer=this.shadowRoot.querySelector("footer");new window.IntersectionObserver(t=>{t[0].isIntersecting?(this.floatBtn.style.visibility="hidden",this.floatBtn.style.opacity=0,this.floatBtn.style.transition="visibility 0s .5s, opacity .5s ease"):(this.floatBtn.style.visibility="visible",this.floatBtn.style.opacity=1)}).observe(this.footer)}});class ce extends(Mixin(at).with(LitCorkUtils)){static get properties(){return{active:{type:Boolean},selectedMoment:{type:String}}}constructor(){super(),this.render=Bt.bind(this),this.active=!0,this._injectModel("AppStateModel")}_onAppStateUpdate(t){this.selectedMoment=t.moment}}customElements.define("app-moment",ce);class de extends(Mixin(at).with(LitCorkUtils)){static get properties(){return{baseUrl:{type:String},currentTopic:{type:String}}}constructor(){super(),this.render=St.bind(this),this.baseUrl=window.location.protocol+"//"+window.location.host,this._injectModel("MomentModel","AppStateModel")}async firstUpdated(){let t=await this.AppStateModel.get();this.currentTopic=t.moment}_onAboutClick(){this.AppStateModel.setLocation("/about/")}}function ue(){return j`

<style>
  :host {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  app-map-info-panel {
    position: absolute;
    z-index: 5000;
    width: 400px;
    left: 0;
    top: 0;
    bottom: 0;
    transform: translateX(-400px);
    transition: transform 200ms ease-out, top 200ms ease-out;
  }
  app-map-info-panel[open] {
    transform: translateX(0);
  }

  app-leaflet-map {
    position: absolute;
    left: 0;
    bottom : 0;
    top: 0;
    right: 0;
    transition: left 200ms ease-out, bottom 200ms ease-out;
  }
  app-leaflet-map[info-open] {
    left: 400px;
  }

  @media(max-width: 600px) {
    app-map-info-panel {
      width: 100vw;
      left: 0;
      top: 100%;
      bottom: 0;
      right: 0;
      height: 50%;
      transform: initial;
    }
    app-map-info-panel[open] {
      top: 50%;
    }

    app-leaflet-map {
      position: absolute;
      left: 0;
      bottom : 0;
      top: 0;
      right: 0;
    }
    app-leaflet-map[info-open] {
      left: 0;
      top: 0;
      bottom: 50%;
    }
  }
</style>

<app-map-info-panel ?open="${this.infoPanelOpen}" @toggle="${this.toggleInfoPanel}"></app-map-info-panel>
<app-leaflet-map
  ?info-open="${this.infoPanelOpen}"
  ?active="${this.visible}"
  id="map"
  @node-click="${this._onNodeClick}"
  @cluster-click="${this._onClusterClick}"
  @selected-cluster-ids="${this._onSelectedClusterIds}">
</app-leaflet-map>

`}customElements.define("app-header",de);var pe=i(40),fe=i.n(pe),me=i(41),_e=i.n(me),ge=i(42),ve=i.n(ge);function ye(){return j`

<style>
${fe.a}
${_e.a}
${ve.a}
</style>
<style>
  :host {
    display: block;
  }

  #map {
    height: 100%;
  }

  .border-top {
    position: absolute;
    /*box-shadow: 0 0 5px rgba(0, 0, 0, .8);*/
    top: -1px;
    right: 0;
    left: 0;
    z-index: 1000;
    height: 1px;
  }

  .marker-cluster-small, .marker-cluster-medium, .marker-cluster-large  {
    background-color: var(--app-color-cluster-blue-alpha);
  }
  .marker-cluster-small div, .marker-cluster-medium div, .marker-cluster-large div {
    background-color: var(--app-color-cluster-blue);
    color: var(--app-color-white)
  }

  .leaflet-intertwine-icon {
    border-radius: 10px;
  }

  .leaflet-person-icon {
    background-color: var(--app-color-scarlet);
  }
  .leaflet-place-icon {
    background-color: var(--app-color-vine);
  }
  .leaflet-event-icon {
    background-color: var(--app-color-rose);
  }
  .leaflet-object-icon {
    background-color: var(--app-color-grape);
  }

  .intertwine-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 5px 25px 5px;
    border-color: transparent transparent var(--app-color-charcoal) transparent;
    top: 12px;
    position: absolute;
    z-index: 10001;
    left: -5px;
  }
  .intertwine-arrow.top {
    transform: rotate(180deg);
    bottom: 12px;
    top: initial;
  }
  .intertwine-arrow.top.point {
    bottom: 6px;
  }
  .intertwine-arrow.bottom.point {
    top: 6px;
  }

  .leaflet-intertwine-node-label > div:first-child {
    color: var(--app-color-white);
    background: var(--app-color-charcoal);
    padding: 4px 8px;
    position: absolute;
    white-space: nowrap;
    font-size: 13px;
  }

  .leaflet-intertwine-node-label > div.fixed-width:first-child {
    white-space: initial;
    width: 150px;
    left: -83px;
    text-align: center;
  }

  .leaflet-intertwine-node-label > div.top:first-child {
    bottom: 34px;
  }
  .leaflet-intertwine-node-label > div.top.point:first-child {
    bottom: 28px;
  }

  .leaflet-intertwine-node-label > div.bottom:first-child {
    top : 32px;
  }
  .leaflet-intertwine-node-label > div.bottom.point:first-child {
    top : 26px;
  }

  .leaflet-intertwine-connection-label > div:first-child {
    color: var(--app-color-white);
    background: var(--app-color-interface-blue);
    padding: 4px 8px;
    position: absolute;
    white-space: nowrap;
    left: -42px;
    top: -16px;
    font-size: 13px;
    font-style: italic;
  }
</style>

<div class="border-top"></div>
<div id="map"></div>

`}i(76),i(77);customElements.define("app-leaflet-map",class extends at{static get properties(){return{active:{type:Boolean},infoOpen:{type:Boolean,attribute:"info-open"}}}constructor(){super(),this.render=ye.bind(this),this.linkLayers={},this.nodeLayers={},this.links={},this.nodes={},this.updateLinksTimer=-1,this.firstRender=!0,window.addEventListener("resize",()=>{this.active&&this.redraw()}),this.redrawTimer=-1}firstUpdated(){this.initMap()}initMap(){this.map=L.map(this.shadowRoot.querySelector("#map")).setView([0,0],3,{animate:!1}),this.pendingView?(this.setView(this.pendingView.latlng,this.pendingView.zoom),this.pendingView=null):this.infoOpen&&this.setView([0,0],3),L.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.map),this.clusters=L.markerClusterGroup({animate:!1,showCoverageOnHover:!1,zoomToBoundsOnClick:!1,removeOutsideVisibleBounds:!1,maxClusterRadius:25,spiderfyOnMaxZoom:!1}),this.map.addLayer(this.clusters),this.map.zoomControl.setPosition("bottomright"),this.clusters.on("clusterclick",t=>this.onClusterClicked(t)),this.map.on("zoomend",()=>{this.repositionSelectedNode(),this.repositionSelectedLink(),this.updateLinks()}),this.lineColor=getComputedStyle(document.documentElement).getPropertyValue("--app-color-interface-blue").trim()}renderSelectedState(t){if(!t)return this.firstRender&&(0===Object.keys(this.nodes).length?this.zoomToClusters=!0:this.map.fitBounds(this.clusters.getBounds())),void(this.firstRender=!1);if(this.selectedNodeIcon){for(let t in this.selectedNodeIcon)this.map.removeLayer(this.selectedNodeIcon[t]);this.selectedNodeIcon=null,this.selectedNodeLayer=null}this.selectedLineIcon&&(this.map.removeLayer(this.selectedLineIcon),this.selectedLineIcon=null),"cluster"===t.selected.type?this.selectCluster(t.selected.latlng,t.selected.zoom):t.selected.type&&"connection"!==t.selected.type?this.selectNode(t.selected.id,void 0,this.firstRender):"connection"===t.selected.type&&this.selectLink(t.selected.id),this.updateLinks()}selectLink(t){let e=this.links[t];if(!e)return void(this.pendingLinkSelect=t);this.selectNode(e.src,"src"),this.selectNode(e.dst,"dst");let i=this._getMidPoint(this.selectedNodeIcon.src.getLatLng(),this.selectedNodeIcon.dst.getLatLng()),n=L.divIcon({className:"leaflet-intertwine-connection-label",iconSize:[0,0],html:"<div>connection</div>"});this.selectedLineIcon=L.marker(i,{icon:n}),this.map.addLayer(this.selectedLineIcon),this.selectedLineIcon.setZIndexOffset(5e3)}selectNode(t,e="src",i=!1){let n=this.clusters.getLayers().find(e=>e.inertWineId===t);if(!n)return this.pendingNodeSelect||(this.pendingNodeSelect={}),void(this.pendingNodeSelect[e]=t);this.selectedNodeLayer||(this.selectedNodeLayer={}),this.selectedNodeIcon||(this.selectedNodeIcon={}),this.selectedNodeLayer[e]=n,n=this.clusters.getVisibleParent(n)||n;let o=L.divIcon({className:"leaflet-intertwine-node-label",iconSize:[0,0],html:"<div>"+this.nodes[t].name+'</div><div class="intertwine-arrow"></div>'});this.selectedNodeIcon[e]=L.marker(n.getLatLng(),{icon:o}),this.map.addLayer(this.selectedNodeIcon[e]),this.selectedNodeIcon[e].setZIndexOffset(5e3),requestAnimationFrame(()=>{let t=!1;for(let i in this.selectedNodeIcon)i!==e&&this.selectedNodeLayer[i].getLatLng().lat>this.selectedNodeLayer[e].getLatLng().lat&&(t=!0);let o=this.selectedNodeIcon[e].getElement().firstChild,r=this.selectedNodeIcon[e].getElement().children[1];t?(o.classList.add("bottom"),r.classList.add("bottom")):(o.classList.add("top"),r.classList.add("top")),n.inertWineId&&(o.classList.add("point"),r.classList.add("point"));let s=o.offsetWidth;s>150?o.classList.add("fixed-width"):o.style.left=s/2*-1+"px",1===Object.keys(this.selectedNodeIcon).length&&(!i&&this.map.getBounds().contains(this.selectedNodeIcon.src.getLatLng())||this.setView(this.selectedNodeIcon.src.getLatLng(),this.map.getZoom()))})}_getMidPoint(t,e){let i=this.map.latLngToContainerPoint(t),n=this.map.latLngToContainerPoint(e),o=(n.x+i.x)/2,r=(n.y+i.y)/2;return this.map.containerPointToLatLng({x:o,y:r})}repositionSelectedLink(){if(!this.selectedNodeLayer||!this.selectedLineIcon)return;let t=this._getMidPoint(this.selectedNodeIcon.src.getLatLng(),this.selectedNodeIcon.dst.getLatLng());this.selectedLineIcon.setLatLng(t)}repositionSelectedNode(){if(this.selectedNodeLayer&&this.selectedNodeIcon)for(let t in this.selectedNodeLayer){let e=this.clusters.getVisibleParent(this.selectedNodeLayer[t])||this.selectedNodeLayer[t];this.selectedNodeIcon[t].setLatLng(e.getLatLng()),e.inertWineId?(this.selectedNodeIcon[t].getElement().firstChild.classList.add("point"),this.selectedNodeIcon[t].getElement().children[1].classList.add("point")):(this.selectedNodeIcon[t].getElement().firstChild.classList.remove("point"),this.selectedNodeIcon[t].getElement().children[1].classList.remove("point"))}}selectCluster(t,e){if(this.firstRender){if(this.setView(t,e),!this.map)return void(this.pendingClusterSelect={latlng:t,zoom:e});if(0===this.clusters.getLayers().length)return void(this.pendingClusterSelect={latlng:t,zoom:e})}let i=this.clusters._featureGroup.getLayers(),n=Number.MAX_SAFE_INTEGER,o=null;for(let e of i){if(e.inertWineId)continue;if(!e._group)continue;let i=e.getBounds().getCenter(),r=Math.abs(i.lat-t[0])+Math.abs(i.lng-t[1]);n>r&&(o=e,n=r)}if(!o)return console.warn("no clusters found to selected");let r=new CustomEvent("selected-cluster-ids",{detail:o.getAllChildMarkers().map(t=>t.inertWineId)});this.dispatchEvent(r)}onClusterClicked(t){let e=t.layer.getBounds().getCenter(),i=new CustomEvent("cluster-click",{detail:{latLng:[parseFloat(e.lat.toFixed(4)),parseFloat(e.lng.toFixed(4))],zoom:this.map.getZoom()}});this.dispatchEvent(i)}onNodeClicked(t){let e=new CustomEvent("node-click",{detail:{id:t.target.inertWineId}});this.dispatchEvent(e)}onLinkClicked(t){let e=new CustomEvent("link-click",{detail:{id:t.layer.inertWineId}});this.dispatchEvent(e)}setData(t){this.nodes=t.nodes,this.nodeLayers={},this.links=t.links,this.clusters.clearLayers();for(let t in this.nodes){let e=L.divIcon({className:`leaflet-intertwine-icon leaflet-${this.nodes[t].type}-icon`,iconSize:[15,15]}),i=L.marker(this.nodes[t].coordinates,{icon:e});i.on("click",t=>this.onNodeClicked(t)),i.inertWineId=t,this.nodeLayers[t]=i,this.clusters.addLayer(i)}if(this.pendingClusterSelect)this.selectCluster(this.pendingClusterSelect.latlng,this.pendingClusterSelect.zoom),this.pendingClusterSelect=null;else if(this.pendingNodeSelect){for(let t in this.pendingNodeSelect)this.selectNode(this.pendingNodeSelect[t],t,!0);this.pendingNodeSelect=null}else this.pendingLinkSelect?(this.selectLink(this.pendingLinkSelect),this.pendingLinkSelect=null):this.zoomToClusters&&(this.map.fitBounds(this.clusters.getBounds()),this.zoomToClusters=!1);this.updateLinks()}updateLinks(){-1!==this.updateLinksTimer&&clearTimeout(this.updateLinksTimer),this.updateLinksTimer=setTimeout(()=>{this.updateLinksTimer=-1,this._updateLinks()},100)}_updateLinks(){for(let t in this.linkLayers)this.map.removeLayer(this.linkLayers[t]);this.linkLayers={};for(let t in this.links){let e=this.links[t];if(e.weblink)continue;let i=this.getMarkerLatLng(e.src),n=this.getMarkerLatLng(e.dst),o=!1;this.selectedNodeLayer&&this.selectedNodeLayer.src&&this.selectedNodeLayer.dst&&e.src===this.selectedNodeLayer.src.inertWineId&&e.dst===this.selectedNodeLayer.dst.inertWineId&&(o=!0);let r=i.lat+"-"+i.lng+"-"+n.lat+"-"+n.lng;this.linkLayers[r]?o&&!this.linkLayers[r].selected&&(this.linkLayers[r].selected=!0,this.linkLayers[r].setStyle({opacity:1,weight:2})):(this.linkLayers[r]=L.polyline([i,n],{color:this.lineColor,weight:o?2:1,opacity:o?1:.3}).addTo(this.map),this.linkLayers[r].selected=o)}}setView(t,e){this.map?this.map.setView(t,e,{animate:!1}):this.pendingView={latlng:t,zoom:e}}getMarkerLatLng(t){let e=this.clusters.getVisibleParent(this.nodeLayers[t]);return e?e.getLatLng():L.latLng(this.nodes[t].coordinates)}updated(t){t.has("active")&&this.active&&this.redraw()}redraw(){this.redrawTimer&&clearTimeout(this.redrawTimer),this.redrawTimer=setTimeout(()=>{this.redrawTimer=-1,this.redrawNow()})}redrawNow(t){if(!this.map)return console.warn("attempting to redraw map, but map not initialized");this.map.invalidateSize({pan:!1})}});class be extends(Mixin(at).with(LitCorkUtils)){static get properties(){return{visible:{type:Boolean},infoPanelOpen:{type:Boolean}}}constructor(){super(),this.render=ue.bind(this),this.infoPanelOpen=!0,this._injectModel("MomentModel","AppStateModel")}firstUpdated(){this.mapEle=this.shadowRoot.querySelector("#map")}_onAppStateUpdate(t){this.selectedMoment=t.moment,t.selected?this.mapEle.renderSelectedState(t):this.mapEle.renderSelectedState()}_onMomentGraphUpdate(t){"loaded"===t.state&&(this.data=t.payload.graph,this.mapEle.setData(t.payload.graph))}_onNodeClick(t){let e=this.data.nodes[t.detail.id];this.AppStateModel.setLocation("/map/"+this.selectedMoment+"/"+e.type+"/"+e["@id"])}_onClusterClick(t){this.AppStateModel.setLocation("/map/"+this.selectedMoment+"/cluster/"+encodeURI(t.detail.latLng.join(","))+"/"+t.detail.zoom)}_onSelectedClusterIds(t){this.AppStateModel.setSelectedClusterIds(t.detail)}toggleInfoPanel(){this.infoPanelOpen=!this.infoPanelOpen,this.redrawMapAfterAnimation()}openInfoPanel(){this.infoPanelOpen=!0,this.redrawMapAfterAnimation()}closeInfoPanel(){this.infoPanelOpen=!1,this.redrawMapAfterAnimation()}redrawMapAfterAnimation(){let t=this.infoPanelOpen?350:-350;setTimeout(()=>{this.mapEle.redrawNow(t)},200)}}customElements.define("app-view-map",be),i.d(e,"default",(function(){return we})),window.APP_MODELS=dt.a;class we extends(Mixin(at).with(LitCorkUtils)){static get properties(){return{view:{type:String},appRoutes:{type:Array}}}constructor(){super(),this.view="map",this.appRoutes=APP_CONFIG.appRoutes,this.render=ht.bind(this),this._injectModel("AppStateModel")}_onAppStateUpdate(t){this.view=t.page}}customElements.define("intert-wine",we)},function(t,e,i){"use strict";i.r(e);var n=i(17),o=(i(11),i(9)),r=i(5);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(o.a)({is:"iron-location",_template:null,properties:{path:{type:String,notify:!0,value:function(){return window.decodeURIComponent(window.location.pathname)}},query:{type:String,notify:!0,value:function(){return window.location.search.slice(1)}},hash:{type:String,notify:!0,value:function(){return window.decodeURIComponent(window.location.hash.slice(1))}},dwellTime:{type:Number,value:2e3},urlSpaceRegex:{type:String,value:""},encodeSpaceAsPlusInQuery:{type:Boolean,value:!1},_urlSpaceRegExp:{computed:"_makeRegExp(urlSpaceRegex)"},_lastChangedAt:{type:Number},_initialized:{type:Boolean,value:!1}},hostAttributes:{hidden:!0},observers:["_updateUrl(path, query, hash)"],created:function(){this.__location=window.location},attached:function(){this.listen(window,"hashchange","_hashChanged"),this.listen(window,"location-changed","_urlChanged"),this.listen(window,"popstate","_urlChanged"),this.listen(document.body,"click","_globalOnClick"),this._lastChangedAt=window.performance.now()-(this.dwellTime-200),this._initialized=!0,this._urlChanged()},detached:function(){this.unlisten(window,"hashchange","_hashChanged"),this.unlisten(window,"location-changed","_urlChanged"),this.unlisten(window,"popstate","_urlChanged"),this.unlisten(document.body,"click","_globalOnClick"),this._initialized=!1},_hashChanged:function(){this.hash=window.decodeURIComponent(this.__location.hash.substring(1))},_urlChanged:function(){this._dontUpdateUrl=!0,this._hashChanged(),this.path=window.decodeURIComponent(this.__location.pathname),this.query=this.__location.search.substring(1),this._dontUpdateUrl=!1,this._updateUrl()},_getUrl:function(){var t=window.encodeURI(this.path).replace(/\#/g,"%23").replace(/\?/g,"%3F"),e="";this.query&&(e="?"+this.query.replace(/\#/g,"%23"),e=this.encodeSpaceAsPlusInQuery?e.replace(/\+/g,"%2B").replace(/ /g,"+").replace(/%20/g,"+"):e.replace(/\+/g,"%2B").replace(/ /g,"%20"));var i="";return this.hash&&(i="#"+window.encodeURI(this.hash)),t+e+i},_updateUrl:function(){if(!this._dontUpdateUrl&&this._initialized&&(this.path!==window.decodeURIComponent(this.__location.pathname)||this.query!==this.__location.search.substring(1)||this.hash!==window.decodeURIComponent(this.__location.hash.substring(1)))){var t=this._getUrl(),e=new URL(t,this.__location.protocol+"//"+this.__location.host).href,i=window.performance.now(),n=this._lastChangedAt+this.dwellTime>i;this._lastChangedAt=i,n?window.history.replaceState({},"",e):window.history.pushState({},"",e),this.fire("location-changed",{},{node:window})}},_globalOnClick:function(t){if(!t.defaultPrevented){var e=this._getSameOriginLinkHref(t);e&&(t.preventDefault(),e!==this.__location.href&&(window.history.pushState({},"",e),this.fire("location-changed",{},{node:window})))}},_getSameOriginLinkHref:function(t){if(0!==t.button)return null;if(t.metaKey||t.ctrlKey||t.shiftKey)return null;for(var e=Object(r.a)(t).path,i=null,n=0;n<e.length;n++){var o=e[n];if("A"===o.tagName&&o.href){i=o;break}}if(!i)return null;if("_blank"===i.target)return null;if(("_top"===i.target||"_parent"===i.target)&&window.top!==window)return null;if(i.download)return null;var s,a,l,h=i.href;if(s=null!=document.baseURI?new URL(h,document.baseURI):new URL(h),a=this.__location.origin?this.__location.origin:this.__location.protocol+"//"+this.__location.host,s.origin)l=s.origin;else{var c=s.host,d=s.port,u=s.protocol;("https:"===u&&"443"===d||"http:"===u&&"80"===d)&&(c=s.hostname),l=u+"//"+c}if(l!==a)return null;var p=s.pathname+s.search+s.hash;return"/"!==p[0]&&(p="/"+p),this._urlSpaceRegExp&&!this._urlSpaceRegExp.test(p)?null:new URL(p,this.__location.href).href},_makeRegExp:function(t){return RegExp(t)}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(o.a)({is:"iron-query-params",_template:null,properties:{paramsString:{type:String,notify:!0,observer:"paramsStringChanged"},paramsObject:{type:Object,notify:!0},_dontReact:{type:Boolean,value:!1}},hostAttributes:{hidden:!0},observers:["paramsObjectChanged(paramsObject.*)"],paramsStringChanged:function(){this._dontReact=!0,this.paramsObject=this._decodeParams(this.paramsString),this._dontReact=!1},paramsObjectChanged:function(){this._dontReact||(this.paramsString=this._encodeParams(this.paramsObject).replace(/%3F/g,"?").replace(/%2F/g,"/").replace(/'/g,"%27"))},_encodeParams:function(t){var e=[];for(var i in t){var n=t[i];""===n?e.push(encodeURIComponent(i)):n&&e.push(encodeURIComponent(i)+"="+encodeURIComponent(n.toString()))}return e.join("&")},_decodeParams:function(t){for(var e={},i=(t=(t||"").replace(/\+/g,"%20")).split("&"),n=0;n<i.length;n++){var o=i[n].split("=");o[0]&&(e[decodeURIComponent(o[0])]=decodeURIComponent(o[1]||""))}return e}});var s=i(8);
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const a={properties:{route:{type:Object,notify:!0},queryParams:{type:Object,notify:!0},path:{type:String,notify:!0}},observers:["_locationChanged(path, queryParams)","_routeChanged(route.prefix, route.path)","_routeQueryParamsChanged(route.__queryParams)"],created:function(){this.linkPaths("route.__queryParams","queryParams"),this.linkPaths("queryParams","route.__queryParams")},_locationChanged:function(){this.route&&this.route.path===this.path&&this.queryParams===this.route.__queryParams||(this.route={prefix:"",path:this.path,__queryParams:this.queryParams})},_routeChanged:function(){this.route&&(this.path=this.route.prefix+this.route.path)},_routeQueryParamsChanged:function(t){this.route&&(this.queryParams=t)}};
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(o.a)({_template:s.a`
    <iron-query-params params-string="{{__query}}" params-object="{{queryParams}}">
    </iron-query-params>
    <iron-location path="{{__path}}" query="{{__query}}" hash="{{__hash}}" url-space-regex="[[urlSpaceRegex]]" dwell-time="[[dwellTime]]">
    </iron-location>
  `,is:"app-location",properties:{route:{type:Object,notify:!0},useHashAsPath:{type:Boolean,value:!1},urlSpaceRegex:{type:String,notify:!0},__queryParams:{type:Object},__path:{type:String},__query:{type:String},__hash:{type:String},path:{type:String,observer:"__onPathChanged"},_isReady:{type:Boolean},dwellTime:{type:Number}},behaviors:[a],observers:["__computeRoutePath(useHashAsPath, __hash, __path)"],ready:function(){this._isReady=!0},__computeRoutePath:function(){this.path=this.useHashAsPath?this.__hash:this.__path},__onPathChanged:function(){this._isReady&&(this.useHashAsPath?this.__hash=this.path:this.__path=this.path)}});var l=i(15),h=i(39),c=i.n(h),d=i(33),u=i.n(d);class p extends(Object(l.Mixin)(n.a).with(l.EventInterface,u.a)){static get template(){return n.b`<app-location url-space-regex="[[appRoutesRegex]]"></app-location>`}static get properties(){return{route:{type:Object},appRoutes:{type:Array,value:[]},appRoutesRegex:{type:RegExp,computed:"_makeRegex(appRoutes)"},debug:{type:Boolean,value:!1}}}constructor(){super(),this.AppStateModel.setLocationElement(this),this._setLocationObject();let t=window.location.href.replace(window.location.origin,"");window.history.replaceState({location:this.location},null,t),this._onLocationChange(),window.addEventListener("location-changed",t=>{this._replaceHistoryState(),this._onLocationChange()}),window.addEventListener("popstate",t=>{this.location=t.state.location,this._onLocationChange()})}ready(){super.ready(),this.debug&&this._initDebugging()}_replaceHistoryState(t){this._setLocationObject(t),window.history.replaceState({location:this.location},null,this.location.fullpath)}_initDebugging(){let t=history.pushState,e=history.replaceState;history.pushState=function(e){let i=new CustomEvent("history-push-state",{detail:e});return window.dispatchEvent(i),t.apply(history,arguments)},history.replaceState=function(t){let i=new CustomEvent("history-replace-state",{detail:t});return window.dispatchEvent(i),e.apply(history,arguments)},window.addEventListener("history-push-state",t=>console.log("history-push-state",t.detail)),window.addEventListener("history-replace-state",t=>console.log("history-replace-state",t.detail))}setWindowLocation(t){if("object"==typeof t){let e=t.path;if(t.qs){let i=[];for(let e in t.qs)i.push(encodeURIComponent(e)+"="+encodeURIComponent(t.qs[e]));e+="?"+i.join("&")}t.hash&&(e+="#"+t.hash),t=e}window.history.state&&window.history.state.location&&window.history.state.location.fullpath===t||(window.history.pushState({},null,t),this._replaceHistoryState(t),this._onLocationChange())}_makeRegex(){let t=this.appRoutes.map(t=>"/"+t+"(/.*)?");t.push("/");let e="^("+t.join("|")+")$";return e=new RegExp(e,"i"),e}_setLocationObject(t){return this.location={fullpath:t||window.location.href.replace(window.location.origin,""),pathname:window.location.pathname,path:window.location.pathname.replace(/(^\/|\/$)/g,"").split("/"),query:c.a.parse(window.location.search)},location}_onLocationChange(){this._setAppState({location:this.location})}}customElements.define("app-route",p)}]);