/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/elements/intert-wine.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/elements/app-header.js":
/*!***************************************!*\
  !*** ./public/elements/app-header.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppHeader; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _app_header_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-header.tpl.js */ "./public/elements/app-header.tpl.js");




class AppHeader extends !(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) {

  static get properties() {
    return {
      
    }
  }

  constructor() {
    super();
    this.render = _app_header_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
  }

}

customElements.define('app-header', AppHeader);


/***/ }),

/***/ "./public/elements/app-header.tpl.js":
/*!*******************************************!*\
  !*** ./public/elements/app-header.tpl.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


function render() { 
return !(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())`

<style>
  :host {
    display: block;
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
    cursor: pointer;
    text-transform: capitalize;
    display: inline-block;
    margin: 0 10px;
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

<div class="layout">
  <h1><span>intertWINE</span> <span class="title-extra">//  California's Modern Wine Network<span></h1>
  <div style="padding-right: 20px"><a>About</a></div>
  <div class="image">
    <img src="/images/ucd-lib-logo-white.png" />
  </div>
</div>

`;}

/***/ }),

/***/ "./public/elements/intert-wine-icons.js":
/*!**********************************************!*\
  !*** ./public/elements/intert-wine-icons.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@polymer/iron-icon/iron-icon.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@polymer/iron-iconset-svg/iron-iconset-svg.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@polymer/polymer/lib/utils/html-tag.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





const template = !(function webpackMissingModule() { var e = new Error("Cannot find module '@polymer/polymer/lib/utils/html-tag.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())`<iron-iconset-svg name="intert-wine-icons" size="24">
<svg><defs>
 <g id="cluster">
  <title>icon-cluster</title>
  <g id="UK_Dot_Red" data-name="UK Dot Red">
    <circle cx="5.61" cy="8.31" r="2.37" />
    <circle cx="12" cy="4.62" r="2.37" />
    <circle cx="18.39" cy="8.31" r="2.37" />
    <circle cx="18.39" cy="15.69" r="2.37" />
    <circle cx="12" cy="19.38" r="2.37" />
    <circle cx="5.61" cy="15.69" r="2.37" />
    <circle cx="5.61" cy="8.31" r="2.37" />
  </g>
</g>
<g id="connection">
  <title>icon-connection</title>
  <path d="M19.33,4.74l-.07-.07a4,4,0,0,0-5.68,0L10,8.29A4,4,0,0,0,10,14L10,14a4.59,4.59,0,0,0,.41.36l1.33-1.33a2.24,2.24,0,0,1-.43-.33l-.07-.07a2.17,2.17,0,0,1,0-3.07L14.88,6A2.2,2.2,0,0,1,18,6L18,6a2.2,2.2,0,0,1,0,3.08l-1.64,1.64a5.54,5.54,0,0,1,.4,2.2l2.54-2.54A4,4,0,0,0,19.33,4.74ZM14,10a4.59,4.59,0,0,0-.41-.36l-1.33,1.33a2.24,2.24,0,0,1,.43.33l.07.07a2.17,2.17,0,0,1,0,3.07L9.12,18A2.2,2.2,0,0,1,6,18L6,18a2.2,2.2,0,0,1,0-3.08l1.64-1.64a5.54,5.54,0,0,1-.4-2.2L4.67,13.58a4,4,0,0,0,0,5.68l.07.07a4,4,0,0,0,5.68,0L14,15.71A4,4,0,0,0,14,10Z" />
</g>
<g id="event">
  <title>icon-event</title>
  <path d="M18.73,5.21h-.45V3.56a.77.77,0,1,0-1.53,0V5.21H12.6V3.56a.77.77,0,0,0-.76-.77.78.78,0,0,0-.77.77V5.21H7.25V3.56a.77.77,0,1,0-1.53,0V5.21H5.27A2.27,2.27,0,0,0,3,7.48V18.94a2.27,2.27,0,0,0,2.27,2.27H18.73A2.27,2.27,0,0,0,21,18.94V7.48A2.27,2.27,0,0,0,18.73,5.21ZM9,18.14H6.46v-2.5H9Zm0-3.68H6.46V12H9Zm0-3.68H6.46V8.28H9Zm4.29,7.36h-2.5v-2.5h2.5Zm0-3.68h-2.5V12h2.5Zm0-3.68h-2.5V8.28h2.5Zm4.29,7.36H15v-2.5h2.5Zm0-3.68H15V12h2.5Zm0-3.68H15V8.28h2.5Z" />
</g>
<g id="link">
  <title>icon-link</title>
  <polygon points="17.25 17.25 6.75 17.25 6.75 6.75 8.74 6.75 8.74 5.25 5.25 5.25 5.25 18.75 18.75 18.75 18.75 15.26 17.25 15.26 17.25 17.25" />
  <polygon points="12 5.25 12 6.75 16.19 6.75 11.47 11.47 12.53 12.53 17.25 7.81 17.25 12 18.75 12 18.75 5.25 12 5.25" />
</g>
<g id="object">
  <title>icon-object</title>
  <path d="M19.76,5.69l-6-1.49-3.53-.89L10,3.24l-.11.07-.19.12c-1,.59-2,1.28-3.13,2L4.2,6.91l1.34.33c2.79.7,7.51,1.87,8.21,2.06a.25.25,0,0,0,.22,0l1.32-.82Z" />
  <path d="M3.37,18.35h0L13,20.76V11.14L3.37,8.72v9.63Z" />
  <path d="M20.63,16.82c0-.17,0-.57,0-1.16V7.47l-5.56,3.41L15,20.26l2.55-1.56Z" />
</g>
<g id="person">
  <title>icon-person</title>
  <path d="M11.94,5.73H12a1.77,1.77,0,0,0,0-3.54h-.1a1.77,1.77,0,0,0,0,3.54Z" />
  <path d="M17.38,12.46,14.07,7.17A.8.8,0,0,0,14,7h0a.21.21,0,0,0,0-.06h0a.65.65,0,0,0-.27-.17H10.33a.65.65,0,0,0-.27.17h0A.21.21,0,0,0,10,7h0a.8.8,0,0,0-.08.16L6.62,12.46a.7.7,0,1,0,1.31.47l2.45-3.72-.27,4L7.8,20.82c-.11.47,0,.91.6,1a1.12,1.12,0,0,0,1.28-.7L12,14.52l2.32,6.59a1.12,1.12,0,0,0,1.28.7c.61-.08.71-.52.6-1l-2.31-7.59-.27-4,2.45,3.72a.7.7,0,1,0,1.31-.47Z" />
</g>
<g id="place">
  <title>icon-place</title>
  <path d="M17.66,4.69a8,8,0,0,0-11.32,0h0A8,8,0,0,0,6.34,16L12,21.66,17.66,16A8,8,0,0,0,17.66,4.69Zm-5.66,9a3.83,3.83,0,1,1,3.82-3.83A3.83,3.83,0,0,1,12,13.67Z" />
</g>
<g id="settings">
  <title>icon-settings</title>
  <g id="Layer_2" data-name="Layer 2">
    <g id="JudgementofParis">
      <g id="Interface">
        <path d="M24,13.37V10.63L20.32,10a8.59,8.59,0,0,0-1-2.4l2.14-3.08-1.94-2L16.44,4.68a8.59,8.59,0,0,0-2.4-1L13.37,0H10.63L10,3.68a8.59,8.59,0,0,0-2.4,1L4.48,2.54,2.54,4.48,4.68,7.56a8.59,8.59,0,0,0-1,2.4L0,10.63v2.74L3.68,14a8.59,8.59,0,0,0,1,2.4L2.54,19.52l1.94,1.94,3.08-2.14a8.59,8.59,0,0,0,2.4,1L10.63,24h2.74L14,20.32a8.59,8.59,0,0,0,2.4-1l3.08,2.14,1.94-1.94-2.14-3.08a8.59,8.59,0,0,0,1-2.4ZM12,17.14A5.14,5.14,0,1,1,17.14,12h0A5.14,5.14,0,0,1,12,17.14Z" />
      </g>
    </g>
  </g>
</g>
<g id="technology">
  <title>icon-technology</title>
  <path d="M16.61,10.36A4.61,4.61,0,0,0,12,6.06h0a4.61,4.61,0,0,0-4.61,4.3c0,2.17.71,2.84,1.83,4.39a7.25,7.25,0,0,1,1,3.7h3.58a7.31,7.31,0,0,1,1-3.7C15.9,13.2,16.65,12.53,16.61,10.36Z" />
  <path d="M10.21,21.23a.52.52,0,0,0,.52.53h.34v.06h0a.9.9,0,0,0,.89.9H12a.9.9,0,0,0,.89-.9h0v-.06h.34a.52.52,0,0,0,.52-.53V20.3H10.21Z" />
  <rect x="18.92" y="10.67" width="3.08" height="1.23" />
  <rect x="2" y="10.67" width="3.08" height="1.23" />
  <rect x="11.38" y="1.28" width="1.23" height="3.08" />
  <rect x="5.4" y="3.76" width="1.23" height="3.08" transform="translate(-1.99 5.81) rotate(-45)" />
  <rect x="16.44" y="4.69" width="3.08" height="1.23" transform="translate(1.52 14.27) rotate(-45)" />
</g>
</defs></svg>
</iron-iconset-svg>`;

document.head.appendChild(template.content);

/***/ }),

/***/ "./public/elements/intert-wine.js":
/*!****************************************!*\
  !*** ./public/elements/intert-wine.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IntertWine; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _intert_wine_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intert-wine.tpl.js */ "./public/elements/intert-wine.tpl.js");
/* harmony import */ var _styles_style_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style-properties */ "./public/elements/styles/style-properties.js");
/* harmony import */ var _styles_style_properties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_style_properties__WEBPACK_IMPORTED_MODULE_2__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@ucd-lib/cork-app-utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src */ "./public/src/index.js");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src__WEBPACK_IMPORTED_MODULE_3__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@polymer/iron-pages'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _intert_wine_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./intert-wine-icons */ "./public/elements/intert-wine-icons.js");
/* harmony import */ var _app_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-header */ "./public/elements/app-header.js");
/* harmony import */ var _views_map_app_view_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/map/app-view-map */ "./public/elements/views/map/app-view-map.js");



// global imports




// npm imports


// local imports




class IntertWine extends Mixin(!(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
  .with(LitCorkUtils) {

  static get properties() {
    return {
      view : {type: String},
      appRoutes : {type: Array}
    }
  }

  constructor() {
    super();

    this.view = 'map';
    this.appRoutes = APP_CONFIG.appRoutes;

    this.render = _intert_wine_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);

    this._injectModel('AppStateModel');
  }

  _onAppStateUpdate(e) {
    this.view = e.page;
  }


}

customElements.define('intert-wine', IntertWine);


/***/ }),

/***/ "./public/elements/intert-wine.tpl.js":
/*!********************************************!*\
  !*** ./public/elements/intert-wine.tpl.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _styles_shared_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/shared-styles */ "./public/elements/styles/shared-styles.js");



function render() { 
return !(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())`

${_styles_shared_styles__WEBPACK_IMPORTED_MODULE_1__["default"]}
<style>
  :host {
    display: block;
    min-height: 100vh;
  }

  /* app-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  } */

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
    <app-view-map id="map"></app-view-map>
  </iron-pages>

</div>

`;}

/***/ }),

/***/ "./public/elements/styles/shared-styles.js":
/*!*************************************************!*\
  !*** ./public/elements/styles/shared-styles.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/* harmony default export */ __webpack_exports__["default"] = (!(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())`
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
`);

/***/ }),

/***/ "./public/elements/styles/style-properties.js":
/*!****************************************************!*\
  !*** ./public/elements/styles/style-properties.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let style = document.createElement('style');
document.head.appendChild(style);
style.innerHTML = `
html {
  --app-color-scarlet : #EA534B;
  --app-color-gold : #F2AC30;
  --app-color-vine : #1EA866;
  --app-color-rose : #ED77A5;
  --app-color-grape : #BA5B93;
  --app-color-interface-blue : #18779B;
  --app-color-secondary-blue : #015E80;
  --app-color-cluster-blue : var(--app-color-secondary-blue);
  --app-color-cluster-blue-alpha : rgba(1, 94, 128, 0.5);
  --app-color-smoke : #F3F2F0;
  --app-color-pewter : #D4DADC;
  --app-color-charcoal : #333333;
  --app-color-black : #000000;
  --app-color-white : #FFFFFF;

  
  --app-primary-color   : var(--app-color-interface-blue);
  --app-background-color : var(--app-color-white);
  --app-text-color      : var(--app-color-black);
  --app-max-width               : 1200px;
  --app-max-text-width          : 650px;
  --app-font-size               : 14px;
  --app-font-size-sm            : 13px;
  --app-font-weight             : 400;
  --app-font-weight-light       : 200;
  --app-font-weight-heavy       : 700;
  --app-layout-sm               : 768px;
  --app-grid-cell-width         : 250px;
  --app-default-outline         : 2px dotted var(--default-secondary-color);
}

body, html {
  /* @apply --paper-font-common-base; */
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size        : var(--app-font-size);
  font-weight      : var(--app-font-weight);
  line-height      : calc(var(--app-font-size) * 1.625);
  margin           : 0;
  padding          : 0;
  background-color : var(--app-background-color);
  color            : var(--app-text-color);
  max-width        : 100vw;
  overflow: hidden;
}
`

/***/ }),

/***/ "./public/elements/views/map/app-leaflet-map.js":
/*!******************************************************!*\
  !*** ./public/elements/views/map/app-leaflet-map.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppLeafletMap; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _app_leaflet_map_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-leaflet-map.tpl.js */ "./public/elements/views/map/app-leaflet-map.tpl.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module 'leaflet'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'leaflet.markercluster'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());







class AppLeafletMap extends !(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) {

  static get properties() {
    return {
      active : {type: Boolean},
      infoOpen : {
        type: Boolean,
        attribute: 'info-open'
      }
    }
  }

  constructor() {
    super();
    this.render = _app_leaflet_map_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);

    this.linkLayers = {};
    this.nodeLayers = {};
    this.links = {};
    this.nodes = {};
    this.updateLinksTimer = -1;
    this.firstRender = true;

    window.addEventListener('resize', () => {
      if( !this.active ) return;
      this.redraw();
    });
    this.redrawTimer = -1;
  }

  firstUpdated() {
    this.initMap();
  }

  /**
   * @method initMap
   * @description called when the element is first rendered.  Sets up the map
   * and the clister laters.  Checks if there is a pending view state and sets the
   * map to that location, otherwise renders at 0,0
   */
  initMap() {
    // create the leaflet map object
    this.map = L.map(this.shadowRoot.querySelector('#map')).setView([0,0], 3, {animate: false});

    // pending view state? use that lat/lng instead
    if( this.pendingView ) {
      this.setView(this.pendingView.latlng, this.pendingView.zoom);
      this.pendingView = null;
    } else if( this.infoOpen ) {
      this.setView([0,0], 3);
    }

    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    
    // create the clulster layer
    this.clusters = L.markerClusterGroup({
      animate: false,
      showCoverageOnHover: false,
      zoomToBoundsOnClick: false,
      removeOutsideVisibleBounds: false,
      maxClusterRadius : 25,
      spiderfyOnMaxZoom : false
    });
    this.map.addLayer(this.clusters);
    this.map.zoomControl.setPosition('bottomright');

    // wire up layer and map events
    this.clusters.on('clusterclick', e => this.onClusterClicked(e));
    this.map.on('zoomend', () => {
      this.repositionSelectedNode();
      this.repositionSelectedLink();
      this.updateLinks()
    });

    // grab the css color defined by our custom variable
    this.lineColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--app-color-interface-blue')
      .trim();
  }

  /**
   * @method renderSelectedState
   * @description called by the parent when app state updates.  render the map
   * to the current state
   * 
   * @param {Object} e app-state-update event object
   */
  renderSelectedState(e) {
    if( !e ) {
      if( this.firstRender ) {
        if( Object.keys(this.nodes).length === 0 ) this.zoomToClusters = true;
        else this.map.fitBounds(this.clusters.getBounds());
      }
      this.firstRender = false;
      return;
    }

    // reset state, remove current markers
    if( this.selectedNodeIcon ) {
      for( let type in this.selectedNodeIcon ) {
        this.map.removeLayer(this.selectedNodeIcon[type]);
      }
      this.selectedNodeIcon = null;
      this.selectedNodeLayer = null;
    }
    if( this.selectedLineIcon ) {
      this.map.removeLayer(this.selectedLineIcon);
      this.selectedLineIcon = null;
    }

    // now render based on selected type
    if( e.selected.type === 'cluster' ) {
      this.selectCluster(e.selected.latlng, e.selected.zoom);
    } else if( e.selected.type && e.selected.type !== 'connection' ) {
      this.selectNode(e.selected.id, undefined, this.firstRender);
    } else if( e.selected.type === 'connection' ) {
      this.selectLink(e.selected.id);
    }

    // make sure our links are rendered correctly
    this.updateLinks();
  }

  /**
   * @method selectLink
   * @description render a link based on id.  This will show two labels and
   * the center connection line label
   * 
   * @param {String} id connection id
   */
  selectLink(id) {
    // get the link object
    let link = this.links[id];

    // if no link object, assume we are loading.  Set the pending attribute
    // and quit.  When a new graph is loaded, this will be check and selectLink()
    // will be called again
    if( !link ) {
      this.pendingLinkSelect = id;
      return;
    }

    // set our source and destination node labels
    this.selectNode(link.src, 'src');
    this.selectNode(link.dst, 'dst');

    // find the screen midpoint of the line
    let ll = this._getMidPoint(
      this.selectedNodeIcon.src.getLatLng(),
      this.selectedNodeIcon.dst.getLatLng()
    );

    // creat the line label
    let icon = L.divIcon({
      className: `leaflet-intertwine-connection-label`,
      iconSize: [0, 0],
      html : '<div>connection</div>'
    });
    this.selectedLineIcon = L.marker(ll, {icon});
    this.map.addLayer(this.selectedLineIcon);
    this.selectedLineIcon.setZIndexOffset(5000);
  }

  /**
   * @method selectNode
   * @description set a node label.  The type should be either src or dst.  For single
   * node selection the type will be src.  
   * 
   * @param {String} id node id
   * @param {String} type either src|dst
   */
  selectNode(id, type='src', firstRender=false) {
    // find the marker layer based on id in the cluster
    let layer = this.clusters
      .getLayers()
      .find(layer => layer.inertWineId === id);

    // if not found, assume either graph hasn't loaded or the layer hasn't rendered
    // set the pendingNodeSelect attribute which will be cheched when the graph
    // loads calling this function again
    if( !layer ) {
      if( !this.pendingNodeSelect ) {
        this.pendingNodeSelect = {};
      }
      this.pendingNodeSelect[type] = id;
      return;
    }

    // setup our look attributes for selected layer and icon
    if( !this.selectedNodeLayer ) {
      this.selectedNodeLayer = {};
    }
    if( !this.selectedNodeIcon ) {
      this.selectedNodeIcon = {};
    }
    this.selectedNodeLayer[type] = layer;
    
    // graph the visible marker, either the cluster marker or the layer itself
    layer = this.clusters.getVisibleParent(layer) || layer;

    // render the icon
    let icon = L.divIcon({
      className: `leaflet-intertwine-node-label`,
      iconSize: [0, 0],
      html : '<div>'+this.nodes[id].title+'</div><div class="intertwine-arrow"></div>'
    });
    this.selectedNodeIcon[type] = L.marker(layer.getLatLng(), {icon});
    this.map.addLayer(this.selectedNodeIcon[type]);
    this.selectedNodeIcon[type].setZIndexOffset(5000);

    // we need to let the marker render so we can adjust the left offset based 
    // on the marker width.  We will do a little bit of additional css work as well
    requestAnimationFrame(() => {
      // should the label be set to bottom of marker?
      // check the two selected nodes and see which has a higher lat
      let bottom = false; 
      for( let key in this.selectedNodeIcon ) {
        if( key === type ) continue;
        if( this.selectedNodeLayer[key].getLatLng().lat > this.selectedNodeLayer[type].getLatLng().lat ) {
          bottom = true;
        }
      }

      // grab the two div's and setup location classes
      let markerEle = this.selectedNodeIcon[type].getElement().firstChild;
      let arrow = this.selectedNodeIcon[type].getElement().children[1];
      if( bottom ) {
        markerEle.classList.add('bottom');
        arrow.classList.add('bottom');
      } else {
        markerEle.classList.add('top');
        arrow.classList.add('top');
      }

      // the point markers have inertWineIds
      // these have different label top/bottom offsets based on cluster vs point
      if( layer.inertWineId ) {
        markerEle.classList.add('point');
        arrow.classList.add('point');
      }

      // set the left to the midpoint of label width
      let w = markerEle.offsetWidth;
      if( w > 150 ) {
        markerEle.classList.add('fixed-width');
      } else {
        markerEle.style.left = (-1*(w/2))+'px';
      }

      // if there is only one selected node and it is not in view, set to center
      if( Object.keys(this.selectedNodeIcon).length === 1 ) {
        if( firstRender || !this.map.getBounds().contains(this.selectedNodeIcon.src.getLatLng()) ) {
          this.setView(this.selectedNodeIcon.src.getLatLng(), this.map.getZoom());
        }
      }
    });
  }

  /**
   * @method _getMidPoint
   * @description get the midpoint for a line by finding the screen (x, y) midpoint
   * then converting to lat/lng.  This is how lines are rendered and we need the 
   * label based on that otherwise it may look off when labels are far apart.
   * 
   * @param {*} srcll 
   * @param {*} dstll 
   */
  _getMidPoint(srcll, dstll) {
    let srcxy = this.map.latLngToContainerPoint(srcll);
    let dstxy = this.map.latLngToContainerPoint(dstll);

    let x = (dstxy.x + srcxy.x) / 2;
    let y = (dstxy.y + srcxy.y) / 2;

    return this.map.containerPointToLatLng({x,y});
  }

  repositionSelectedLink() {
    if( !this.selectedNodeLayer || !this.selectedLineIcon ) return;
    let ll = this._getMidPoint(
      this.selectedNodeIcon.src.getLatLng(),
      this.selectedNodeIcon.dst.getLatLng()
    );
    this.selectedLineIcon.setLatLng(ll);
  }

  repositionSelectedNode() {
    if( !this.selectedNodeLayer || !this.selectedNodeIcon ) return;
    for( let type in this.selectedNodeLayer ) {
      let layer = this.clusters.getVisibleParent(this.selectedNodeLayer[type]) || this.selectedNodeLayer[type];
      this.selectedNodeIcon[type].setLatLng(layer.getLatLng());

      if( layer.inertWineId ) {
        this.selectedNodeIcon[type].getElement().firstChild.classList.add('point');
        this.selectedNodeIcon[type].getElement().children[1].classList.add('point');
      } else {
        this.selectedNodeIcon[type].getElement().firstChild.classList.remove('point');
        this.selectedNodeIcon[type].getElement().children[1].classList.remove('point');
      }
    }
  }

  selectCluster(latlng, zoom) {
    if( this.firstRender ) {
      this.setView(latlng, zoom);

      if( this.map ) {
        if( this.clusters.getLayers().length === 0 ) {
          this.pendingClusterSelect = {latlng, zoom};
          return; // this will get fired on again on firstUpdate
        }
      } else {
        this.pendingClusterSelect = {latlng, zoom};
        return; // this will get fired on again on firstUpdate
      }
    }

    let clusterMarkers = this.clusters._featureGroup.getLayers();
    let closest = Number.MAX_SAFE_INTEGER;
    let selectedCluster = null;

    for( let layer of clusterMarkers ) {
      // HACK.  Is there better type checking for this?
      if( layer.inertWineId ) continue;
      if( !layer._group ) continue;

      let ll = layer.getBounds().getCenter();
      let dist = Math.abs(ll.lat - latlng[0]) + Math.abs(ll.lng - latlng[1]);
      if( closest > dist ) {
        selectedCluster = layer;
        closest = dist;
      }
    }

    if( !selectedCluster ) return console.warn('no clusters found to selected');
  
    let event = new CustomEvent('selected-cluster-ids', {
      detail: selectedCluster.getAllChildMarkers().map(l => l.inertWineId)
    })
    this.dispatchEvent(event);
  }

  /**
   * @method onClusterClicked
   * @description bound to cluster click event
   */
  onClusterClicked(e) {
    let center = e.layer.getBounds().getCenter();
    let event = new CustomEvent('cluster-click', {detail : {
      latLng : [parseFloat(center.lat.toFixed(4)), parseFloat(center.lng.toFixed(4))],
      zoom : this.map.getZoom()
    }});
    this.dispatchEvent(event);
  }

  /**
   * @method onNodeClicked
   * @description bound to map marker click events
   */
  onNodeClicked(e) {
    let event = new CustomEvent('node-click', {detail : {
      id : e.target.inertWineId
    }});
    this.dispatchEvent(event);
  }

  onLinkClicked(e) {
    let event = new CustomEvent('link-click', {detail : {
      id : e.layer.inertWineId
    }});
    this.dispatchEvent(event);
  }

  /**
   * @method setData
   * @description set node/link data, render map
   */
  setData(data) {
    this.nodes = data.nodes;
    this.nodeLayers = {};
    this.links = data.links;

    this.clusters.clearLayers();

    for( let id in data.nodes ) {
      let icon = L.divIcon({
        className: `leaflet-intertwine-icon leaflet-${data.nodes[id].type}-icon`,
        iconSize: [15, 15]
      });
      let layer = L.marker(data.nodes[id].coordinates, {icon});

      layer.on('click', e => this.onNodeClicked(e));
      layer.inertWineId = id;
      this.nodeLayers[id] = layer;
      this.clusters.addLayer(layer);
    }

    if( this.pendingClusterSelect ) {
      this.selectCluster(this.pendingClusterSelect.latlng, this.pendingClusterSelect.zoom);
      this.pendingClusterSelect = null;
    } else if( this.pendingNodeSelect ) {
      for( let type in this.pendingNodeSelect ) {
        this.selectNode(this.pendingNodeSelect[type], type, true);
      }
      this.pendingNodeSelect = null;
    } else if( this.pendingLinkSelect ) {
      this.selectLink(this.pendingLinkSelect);
      this.pendingLinkSelect = null;
    } else if( this.zoomToClusters ) {
      this.map.fitBounds(this.clusters.getBounds());
      this.zoomToClusters = false;
    }

    this.updateLinks();
  }

  /**
   * @method updateLinks
   * @description redraw links from current cluster locations.  Should be
   * called whenever data changes or map zoom level changes
   */
  updateLinks() {
    if( this.updateLinksTimer !== -1 ) clearTimeout(this.updateLinksTimer);
    this.updateLinksTimer = setTimeout(() => {
      this.updateLinksTimer = -1;
      this._updateLinks();
    }, 100);
  }

  _updateLinks() {
    for( let id in this.linkLayers ) {
      this.map.removeLayer(this.linkLayers[id]);
    }
    this.linkLayers = {};

    for( let id in this.links ) {
      let item = this.links[id];
      let src = this.getMarkerLatLng(item.src);
      let dst = this.getMarkerLatLng(item.dst);

      let selected = false;
      if( this.selectedNodeLayer && this.selectedNodeLayer.src && this.selectedNodeLayer.dst ) {
        if( item.src === this.selectedNodeLayer.src.inertWineId && item.dst === this.selectedNodeLayer.dst.inertWineId ) {
          selected = true;
        }
      }

      let lid = src.lat+'-'+src.lng+'-'+dst.lat+'-'+dst.lng;
      if( this.linkLayers[lid] ) {
        if( selected && !this.linkLayers[lid].selected ) {
          this.linkLayers[lid].selected = true;
          this.linkLayers[lid].setStyle({opacity: 1, weight: 2});
        }
        continue;
      }

      this.linkLayers[lid] = L.polyline([src, dst], {
        color: this.lineColor,
        weight: selected ? 2: 1,
        opacity : selected ? 1 : 0.3
      }).addTo(this.map);
      this.linkLayers[lid].selected = selected;
    }
  }

  setView(latlng, zoom) {
    if( this.map ) {

      // adjust center by 500 px
      // if( this.infoOpen ) {
      //   latlng = this.map.latLngToContainerPoint(latlng);
      //   latlng.x -= 400;
      //   latlng = this.map.containerPointToLatLng(latlng);
      // }

      this.map.setView(latlng, zoom, {animate: false});
    } else {
      this.pendingView = {latlng, zoom};
    }
  }

  /**
   * @method getMarkerLatLng
   * @description given a node id, find the lat/lng for the node representation.
   * This could be the node itself or it's containing cluster
   */
  getMarkerLatLng(id) {
    let clusterLayer = this.clusters.getVisibleParent(this.nodeLayers[id]);
    if( clusterLayer ) return clusterLayer.getLatLng();
    return L.latLng(this.nodes[id].coordinates);
  }


  updated(props) {
    if( props.has('active') && this.active ) {
      this.redraw();
    }
  }

  /**
   * @method redraw
   * @description buffered call to map.invalidateSize();
   */
  redraw() {
    if( this.redrawTimer ) clearTimeout(this.redrawTimer);
    this.redrawTimer = setTimeout(() => {
      this.redrawTimer = -1;
      this.redrawNow();
    });
  }

  /**
   * @method redrawNow
   * @description call to map.invalidateSize();
   */
  redrawNow(xOffset) {
    if( !this.map ) return console.warn('attempting to redraw map, but map not initialized');
    this.map.invalidateSize({pan: false});
  }

}

customElements.define('app-leaflet-map', AppLeafletMap);


/***/ }),

/***/ "./public/elements/views/map/app-leaflet-map.tpl.js":
/*!**********************************************************!*\
  !*** ./public/elements/views/map/app-leaflet-map.tpl.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'leaflet/dist/leaflet.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'leaflet.markercluster/dist/MarkerCluster.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'leaflet.markercluster/dist/MarkerCluster.Default.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





function render() { 
return !(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())`

<style>
${!(function webpackMissingModule() { var e = new Error("Cannot find module 'leaflet/dist/leaflet.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}
${!(function webpackMissingModule() { var e = new Error("Cannot find module 'leaflet.markercluster/dist/MarkerCluster.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}
${!(function webpackMissingModule() { var e = new Error("Cannot find module 'leaflet.markercluster/dist/MarkerCluster.Default.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}
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
    box-shadow: 0 0 5px rgba(0, 0, 0, .8);
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

`;}

/***/ }),

/***/ "./public/elements/views/map/app-map-info-panel.js":
/*!*********************************************************!*\
  !*** ./public/elements/views/map/app-map-info-panel.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppMapInfoPanel; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _app_map_info_panel_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-map-info-panel.tpl.js */ "./public/elements/views/map/app-map-info-panel.tpl.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module 'markdown'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@polymer/iron-icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






class AppMapInfoPanel extends Mixin(!(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
  .with(LitCorkUtils) {

  static get properties() {
    return {
      open : {
        type: Boolean,
        reflect: true
      },
      moment : {type: String},
      momentInfo : {type: Object},
      momentEntryPointUrl : {type: String},
      type : {type : String},
      srctype : {type: String},
      dsttype : {type: String},
      view : {type : String},
      title : {type : String},
      date : {type : String},
      connections : {type: Array},
      isNode : {type: Boolean},
      isLink : {type: Boolean},
      isMoment : {type: Boolean},
      connectionSubjects : {type: Array},
      clusterSubjects : {type: Object},
      clusterSubjectTypes : {type: Array}
    }
  }

  constructor() {
    super();
    
    this.open = true;
    this.date = '';
    this.view = '';
    this.type = '';
    this.srctype = '';
    this.dsttype = '';
    this.connections = [];
    this.isLink = false;
    this.isNode = false;
    this.isMoment = false;
    this.moment = '';
    this.momentInfo = {};
    this.momentEntryPointUrl = '';

    this.connectionSubjects = [];
    this.clusterSubjectTypes = ['person', 'place', 'object', 'event'];
    this.resetClusterSubjects();
    this.render = _app_map_info_panel_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);

    this._injectModel('AppStateModel', 'MomentModel');
  }

  /**
   * @method _onMomentGraphUpdate
   * @description bound to graph-update events from the MomentModel
   * 
   * @param {*} e 
   */
  _onMomentGraphUpdate(e) {
    if( e.state !== 'loaded' ) return;
    this.renderState(e.payload);
  }

  _onAppStateUpdate(e) {
    this.moment = e.moment;
    this.selected = e.selected;
    this.renderState();
  }

  firstUpdated() {
    this.descriptionEle = this.shadowRoot.querySelector('#description');
    this.momentDescEle = this.shadowRoot.querySelector('#momentDescription');
  }

  renderState(moment) {
    if( moment ) {
      this.momentInfo = moment;
      this.momentDescEle.innerHTML = !(function webpackMissingModule() { var e = new Error("Cannot find module 'markdown'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).toHTML(moment.description || '');

      this.momentEntryPointUrl = '';
      if( moment.entryPoint ) {
        for( let id in moment.graph.nodes ) {
          let node = moment.graph.nodes[id];
          if( node.id !== moment.entryPoint ) continue;
          this.momentEntryPointUrl = `/map/${this.moment}/${node.type}/${node.id}`;
          break;
        }
      }

      this.graph = moment.graph;
    }

    this.isLink = false;
    this.isNode = false;
    this.isMoment = false;

    if( !this.selected ) {
      this.renderEmpty();
      return;
    }
    if( !this.graph ) return;
    
    this.type = this.selected.type;

    if( this.type === 'cluster' ) {
      if( this.selected.ids ) {
        this.renderCluster(this.selected.ids.map(id => this.graph.nodes[id]));
      }
    } else if( this.type === 'connection' ) {
      this.isLink = true;
      this.renderItem(this.graph.links[this.selected.id]);
    } else {
      this.isNode = true;
      this.renderItem(this.graph.nodes[this.selected.id]);
    }
  }

  renderEmpty() {
    if( !this.moment ) {
      this.view = 'empty'
      this.type = 'empty';
      return;
    }

    this.type = 'moment';
    this.view = 'moment';
    this.isMoment = true;
  }

  renderCluster(nodes) {
    this.view = 'cluster';
    this.resetClusterSubjects();
    
    nodes.forEach(node => {
      if( !this.clusterSubjects[node.type] ) return;
      this.clusterSubjects[node.type].enabled = true;
      this.clusterSubjects[node.type].nodes.push(node);
    });
  }

  renderItem(node) {
    this.view = 'item'

    this.title = node.title || '';
    this.location = node.location || '';
    this.date = node.date || '';
    this.descriptionEle.innerHTML = !(function webpackMissingModule() { var e = new Error("Cannot find module 'markdown'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).toHTML(node.description || '');

    if( node.type === 'connection' ) {
      this.connectionSubjects = [
        this.graph.nodes[node.src],
        this.graph.nodes[node.dst]
      ];
      this.srctype = this.connectionSubjects[0].type;
      this.dsttype = this.connectionSubjects[1].type;
    } else {
      // find connections
      let connections = [];
      let link;
      for( let id in this.graph.links ) {
        link = this.graph.links[id];
        if( link.src === node.id ) {
          connections.push({
            link,
            node : this.graph.nodes[link.dst]
          });
        } else if ( link.dst === node.id ) {
          connections.push({
            link,
            node : this.graph.nodes[link.src]
          });
        }
      }

      connections.sort((a, b) => {
        if( a.node.title < b.node.title ) return -1;
        if( a.node.title > b.node.title ) return 1;
        return 0;
      })

      this.connections = connections;
    }

  }

  renderLink(node) {
    this.type = 'item'
    this.title = node.title;
    this.descriptionEle.innerHTML = !(function webpackMissingModule() { var e = new Error("Cannot find module 'markdown'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).toHTML(node.description || '');
  }

  resetClusterSubjects() {
    this.clusterSubjects = {
      person : {
        enabled : false,
        label : 'People',
        nodes : []
      },
      place : {
        enabled : false,
        label : 'Places',
        nodes : []
      },
      object : {
        enabled : false,
        label : 'Objects',
        nodes : []
      },
      event : {
        enabled : false,
        label : 'Events',
        nodes : []
      }
    }
  }

  /**
   * @method _onToggleKeyUp
   * @description bound to toggle button key-up event
   */
  _onToggleKeyUp(e) {
    if( e.which !== 13 ) return;
    this._fireToggleEvent();
  }

  /**
   * @method _fireToggleEvent
   * @description fire the toggle event.  This is called from
   * _onToggleKeyUp and bound to click event on toggle button
   */
  _fireToggleEvent() {
    this.dispatchEvent(new CustomEvent('toggle'));
  }

}

customElements.define('app-map-info-panel', AppMapInfoPanel);


/***/ }),

/***/ "./public/elements/views/map/app-map-info-panel.tpl.js":
/*!*************************************************************!*\
  !*** ./public/elements/views/map/app-map-info-panel.tpl.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _styles_shared_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../styles/shared-styles */ "./public/elements/styles/shared-styles.js");



function render() { 
return !(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())`

${_styles_shared_styles__WEBPACK_IMPORTED_MODULE_1__["default"]}
<style>
  :host {
    background: white;
    display: block;
    box-shadow: 0 0 5px rgba(0, 0, 0, .5);
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

  #description > p {
    padding: 14px 0 18px 9;
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
  .image[type="cluster"] {
    height: 200px
  }

  .type-color[type="person"] {
    color: var(--app-color-scarlet); 
  }
  .color-break[type="person"], iron-icon[type="person"], .dot[type="person"] {
    background-color: var(--app-color-scarlet); 
  }

  .type-color[type="place"] {
    color: var(--app-color-vine); 
  }
  .color-break[type="place"], iron-icon[type="place"], .dot[type="place"] {
    background-color: var(--app-color-vine); 
  }

  .type-color[type="event"] {
    color: var(--app-color-rose); 
  }
  .color-break[type="event"], iron-icon[type="event"], .dot[type="event"] {
    background-color: var(--app-color-rose); 
  }

  .type-color[type="object"] {
    color: var(--app-color-grape); 
  }
  .color-break[type="object"], iron-icon[type="object"], .dot[type="object"] {
    background-color: var(--app-color-grape); 
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
    /* .toggle-sm {
      display: block;
    } */

  }
</style>  

<div class="content" ?moment-view="${this.isMoment}">
  <!-- <div class="toggle-sm" tabindex="0" @click="${this._fireToggleEvent}" @key-up="${this._onToggleKeyUp}">
    <iron-icon icon="close"></iron-icon>
  </div> -->

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
        <h1 style="margin-bottom: 3px" class="inverse">${this.momentInfo.title}</h1>
        <h2 style="margin: 0 0 14px 0" class="inverse">${this.momentInfo.date}</h2>
        <div>
          Select a subject on the map to learn about their
          connections to California wine history.
        </div>

        <div class="moment-break"></div>
        <h3 class="inverse">Connections in Context</h3>
        <div id="momentDescription"></div>

        <a class="btn inverse" ?hidden="${!this.momentEntryPointUrl}" href="${this.momentEntryPointUrl}" >Read Story</a>
      </div>
      <!-- END EMPTY -->

      <!-- START CLUSTER -->
      <div id="cluster">
        <h3>Select a Subject</h3>

        ${this.clusterSubjectTypes.map(type => !(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())`
          <div ?hidden="${!this.clusterSubjects[type].enabled}">
            <div class="subject-label">
              <iron-icon icon="intert-wine-icons:${type}" type="${type}"></iron-icon>
              <span class="subject-type type-color" type="${type}">${this.clusterSubjects[type].label}</span>
            </div>
            ${this.clusterSubjects[type].nodes.map(node => !(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())`
              <div>
                <div class="dot" type="${type}"></div>
                <span><a class="internal" href="/map/${this.moment}/${type}/${node.id}">${node.title}</a></span>
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

        <div id="description"></div>

        <div ?hidden="${!this.isNode}">
          <h3 style="margin: 0 0 5px 0">Explore Connections</h3>
          <div>
            ${this.connections.map(item => !(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())`
              <div>
                <div class="dot" type="${item.node.type}"></div>
                <span><a class="internal" href="/map/${this.moment}/connection/${item.link.id}">${item.node.title}</a></span>
              </div>
            `)}
          </div>
        </div>
        <div ?hidden="${!this.isLink}">
          <h3>Connections Subjects</h3>
          ${this.connectionSubjects.map(node => !(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())`
            <div>
              <div class="dot" type="${node.type}"></div>
              <span><a class="internal" href="/map/${this.moment}/${node.type}/${node.id}">${node.title}</a></span>
            </div>
          `)}
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

`;}

/***/ }),

/***/ "./public/elements/views/map/app-view-map.js":
/*!***************************************************!*\
  !*** ./public/elements/views/map/app-view-map.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppViewMap; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _app_view_map_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-view-map.tpl.js */ "./public/elements/views/map/app-view-map.tpl.js");
/* harmony import */ var _app_leaflet_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-leaflet-map */ "./public/elements/views/map/app-leaflet-map.js");
/* harmony import */ var _app_map_info_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-map-info-panel */ "./public/elements/views/map/app-map-info-panel.js");






class AppViewMap extends Mixin(!(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
  .with(LitCorkUtils) {

  static get properties() {
    return {
      visible : {type: Boolean},
      infoPanelOpen : {type: Boolean}
    }
  }

  constructor() {
    super();
    this.render = _app_view_map_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);

    this.infoPanelOpen = true;

    this._injectModel('MomentModel', 'AppStateModel');
  }

  firstUpdated() {
    this.mapEle = this.shadowRoot.querySelector('#map');
  }

  /**
   * @method _onAppStateUpdate
   * @description bound to AppStateModel app-state-update events
   * 
   * @param {Object} e 
   */
  _onAppStateUpdate(e) {
    this.selectedMoment = e.moment;
    if( e.selected ) this.mapEle.renderSelectedState(e);
    else this.mapEle.renderSelectedState();
  }

  /**
   * @method _onMomentGraphUpdate
   * @description bound to moment-graph-update events from the MomentModel
   * 
   * @param {*} e 
   */
  _onMomentGraphUpdate(e) {
    if( e.state !== 'loaded' ) return;
    this.data = e.payload.graph;
    this.mapEle.setData(e.payload.graph);
  }

  /**
   * @method _onNodeClick
   * @description bound to app-leaflet-map node-click events
   * 
   * @param {Object} e 
   */
  _onNodeClick(e) {
    let node = this.data.nodes[e.detail.id];
    this.AppStateModel.setLocation('/map/'+this.selectedMoment+'/'+node.type+'/'+node.id);
  }

  /**
   * @method _onClusterClick
   * @description bound to app-leaflet-map cluster-click events
   * 
   * @param {Object} e 
   */
  _onClusterClick(e) {
    this.AppStateModel.setLocation('/map/'+this.selectedMoment+'/cluster/'+
      encodeURI(e.detail.latLng.join(','))+'/'+e.detail.zoom
    );
  }

  /**
   * @method _onSelectedClusterIds
   * @description bound tp app-leaflet-map selected-cluster-ids event.  This is fired
   * when a cluster zoom/latlng is set.  After which the map makes sure it is rendered
   * then looks up the closest rendered cluster to the latlng at the zoom level.  Finally
   * the map fires the selected-cluster-ids containing the ids inside the cluster
   */
  _onSelectedClusterIds(e) {
    this.AppStateModel.setSelectedClusterIds(e.detail);
  }

  toggleInfoPanel() {
    this.infoPanelOpen = !this.infoPanelOpen;
    this.redrawMapAfterAnimation();
  }

  openInfoPanel() {
    this.infoPanelOpen = true;
    this.redrawMapAfterAnimation();
  }

  closeInfoPanel() {
    this.infoPanelOpen = false;
    this.redrawMapAfterAnimation();
  }

  redrawMapAfterAnimation() {
    let offset = this.infoPanelOpen ? 350 : -350;
    setTimeout(() => {
      this.mapEle.redrawNow(offset);
    }, 200);
  }

}

customElements.define('app-view-map', AppViewMap);


/***/ }),

/***/ "./public/elements/views/map/app-view-map.tpl.js":
/*!*******************************************************!*\
  !*** ./public/elements/views/map/app-view-map.tpl.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


function render() { 
return !(function webpackMissingModule() { var e = new Error("Cannot find module 'lit-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())`

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


`;}

/***/ }),

/***/ "./public/src/index.js":
/*!*****************************!*\
  !*** ./public/src/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  AppStateModel : __webpack_require__(/*! ./models/AppStateModel */ "./public/src/models/AppStateModel.js"),
  MomentModel : __webpack_require__(/*! ./models/MomentModel */ "./public/src/models/MomentModel.js")
}

/***/ }),

/***/ "./public/src/models/AppStateModel.js":
/*!********************************************!*\
  !*** ./public/src/models/AppStateModel.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {AppStateModel} = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '@ucd-lib/cork-app-state'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const AppStateStore = __webpack_require__(/*! ../stores/AppStateStore */ "./public/src/stores/AppStateStore.js");

class AppStateModelImpl extends AppStateModel {

  constructor() {
    super();
    this.store = AppStateStore;

    this.EventBus.on(this.store.events.APP_STATE_UPDATE, () => this._sendGA());
    this._sendGA();
  }

  /**
   * @method setSelectedClusterIds
   * @description when a cluster is selected in the UI, the center lat/lng and zoom
   * of the cluster will be set in the, this will be used by the map to figure out
   * the nodes in the cluster and set them
   */
  setSelectedClusterIds(ids) {
    let state = this.store.data;
    if( !state.selected ) {
      return console.warn('Attempting to set cluster ids, but no selected object');
    }
    if( state.selected.type !== 'cluster' ) {
      return console.warn('Attempting to set cluster ids, but selected object is not a cluster');
    }
    state.selected.ids = ids;
    return super.set(state);
  }

  set(state) {
    // parse out page
    if( state.location ) {
      let page = state.location.path ? state.location.path[0] : 'map';
      state.page = page || 'map';
    }
    state.moment = 'chardonnay';

    // parse out selected object(s)
    if( state.page === 'map' && state.location.path.length >= 3 ) {
      state.selected = {
        type : state.location.path[2]
      }

      if( state.location.path.length > 1 ) {
        state.moment = state.location.path[1];
      }

      if( state.location.path[2] === 'cluster' ) {
        state.selected.latlng = state.location.path[3].split(',').map(ll => parseFloat(ll));
        state.selected.zoom = parseInt(state.location.path[4]);
      } else {
        state.selected.id = state.location.path[3];
      }
    } else {
      state.selected = null;
    }

    return super.set(state);
  }

  /**
   * @method _sendGA
   * @description send a google analytics event if pathname has changed
   */
  _sendGA() {
    if( !window.gtag ) {
      return console.warn('No global gtag variable set for analytics events');
    }
    if( this.lastGaLocation === window.location.pathname ) return;
    this.lastGaLocation = window.location.pathname;

    gtag('config', APP_CONFIG.gaCode, {
      page_path: window.location.pathname
    });
  }


}

module.exports = new AppStateModelImpl();

/***/ }),

/***/ "./public/src/models/MomentModel.js":
/*!******************************************!*\
  !*** ./public/src/models/MomentModel.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {BaseModel} = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '@ucd-lib/cork-app-utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const MomentService = __webpack_require__(/*! ../services/MomentService */ "./public/src/services/MomentService.js");
const MomentStore = __webpack_require__(/*! ../stores/MomentStore */ "./public/src/stores/MomentStore.js");

class MomentModel extends BaseModel {

  constructor() {
    super();

    this.store = MomentStore;
    this.service = MomentService;

    this.EventBus.on('app-state-update', e => {
      if( e.page === 'map' ) this.get(e.moment);
    })
      
    this.register('MomentModel');
  }

  async get(moment) {
    let state = this.store.data[moment] || {};

    try {
      if( state.request ) {
        await state.request;
      } else if( state.state !== 'loaded' ) {
        await this.service.get(moment, this.transformMockLinks);
      }
    } catch(e) {
      console.error(e);
    }

    return this.store.data[moment];
  }

  transformMockLinks(data) {
    let nodes = {};
    let links = {};
    let item;

    for( item of data ) {
      if( item.type === 'connection' ) {
        item.id = item.src+'-'+item.dst;
        links[item.id] = item;
      } else {
        item.coordinates = item.coordinates.reverse();
        nodes[item.id] = item;
      }
    }

    for( let id in links ) {
      item = links[id];
      item.coordinates = {
        src : nodes[item.src].coordinates,
        dst : nodes[item.dst].coordinates
      }
    }

    return {nodes, links}
  }

}

module.exports = new MomentModel();

/***/ }),

/***/ "./public/src/services/MomentService.js":
/*!**********************************************!*\
  !*** ./public/src/services/MomentService.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {BaseService} = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '@ucd-lib/cork-app-utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const MomentStore = __webpack_require__(/*! ../stores/MomentStore */ "./public/src/stores/MomentStore.js");

class MomentService extends BaseService {

  constructor() {
    super();
    this.store = MomentStore;
  }

  get(moment, transform) {
    if( !transform ) transform = data => data;
    this.request({
      // url : `/api/graph/${moment}`,
      url : '/api/graph/mock',
      onLoading : request => this.store.onGraphLoading(moment, request),
      onLoad : resp => {
        resp.body.graph = transform(resp.body.graph);
        this.store.onGraphLoaded(moment, resp.body);
      },
      onError : e => this.store.onGraphError(moment, e)
    })
  }

}

module.exports = new MomentService();

/***/ }),

/***/ "./public/src/stores/AppStateStore.js":
/*!********************************************!*\
  !*** ./public/src/stores/AppStateStore.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {AppStateStore} = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '@ucd-lib/cork-app-state'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

class ImplAppStateStore extends AppStateStore {

}

module.exports = new ImplAppStateStore();

/***/ }),

/***/ "./public/src/stores/MomentStore.js":
/*!******************************************!*\
  !*** ./public/src/stores/MomentStore.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {BaseStore} = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '@ucd-lib/cork-app-utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

class MomentStore extends BaseStore {

  constructor() {
    super();

    this.data = {};
    this.events = {
      GRAPH_UPDATE : 'moment-graph-update'
    };
  }

  onGraphLoading(moment, request) {
    this._setGraphState({
      id: moment,
      state : this.STATE.LOADING,
      request
    });
  }

  onGraphLoaded(moment, payload) {
    this._setGraphState({
      id: moment,
      state : this.STATE.LOADED,
      payload
    });
  }

  onGraphError(moment, error) {
    this._setGraphState({
      id: moment,
      state : this.STATE.ERROR,
      error
    });
  }

  _setGraphState(state) {
    this.data[state.id] = state;
    this.emit(this.events.GRAPH_UPDATE, state);
  }

}

module.exports = new MomentStore();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2FwcC1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2FwcC1oZWFkZXIudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9pbnRlcnQtd2luZS1pY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvaW50ZXJ0LXdpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2ludGVydC13aW5lLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvc3R5bGVzL3NoYXJlZC1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3N0eWxlcy9zdHlsZS1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy92aWV3cy9tYXAvYXBwLWxlYWZsZXQtbWFwLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy92aWV3cy9tYXAvYXBwLWxlYWZsZXQtbWFwLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvdmlld3MvbWFwL2FwcC1tYXAtaW5mby1wYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvdmlld3MvbWFwL2FwcC1tYXAtaW5mby1wYW5lbC50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3ZpZXdzL21hcC9hcHAtdmlldy1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3ZpZXdzL21hcC9hcHAtdmlldy1tYXAudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9tb2RlbHMvQXBwU3RhdGVNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL21vZGVscy9Nb21lbnRNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL3NlcnZpY2VzL01vbWVudFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9zdG9yZXMvQXBwU3RhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL3N0b3Jlcy9Nb21lbnRTdG9yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBQ0Q7OztBQUd6Qix3QkFBd0IscUlBQVU7O0FBRWpEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDBEQUFNO0FBQ3hCOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUFtQzs7QUFFcEIsbUI7QUFDZixPQUFPLHFJQUFJOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCwwQ0FBMEMsS0FBSztBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLCtEQUErRCxLQUFLO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsRUFBRTtBQUNmLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNENBQTRDLElBQUk7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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QSx5Qzs7Ozs7Ozs7Ozs7QUNOQSxPQUFPLFVBQVUsR0FBRyxtQkFBTyxDQUFDLGlKQUF5Qjs7QUFFckQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1DIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcHVibGljL2VsZW1lbnRzL2ludGVydC13aW5lLmpzXCIpO1xuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vYXBwLWhlYWRlci50cGwuanNcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcEhlYWRlciBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtaGVhZGVyJywgQXBwSGVhZGVyKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHsgXG5yZXR1cm4gaHRtbGBcblxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB6LWluZGV4OiAxMDAwMDtcbiAgfVxuICAubGF5b3V0IHtcbiAgICBtYXJnaW46IDAgMCAwIDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZmxleDogMTtcbiAgfVxuICAudGl0bGUtZXh0cmEge1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cblxuICBhIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICB9XG5cbiAgLmltYWdlIHtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLWNvbG9yLWludGVyZmFjZS1ibHVlICk7XG4gIH1cblxuICBpbWcge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICBAbWVkaWEobWF4LXdpZHRoOiA4MjVweCkge1xuICAgIC50aXRsZS1leHRyYSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuPC9zdHlsZT4gIFxuXG48ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gIDxoMT48c3Bhbj5pbnRlcnRXSU5FPC9zcGFuPiA8c3BhbiBjbGFzcz1cInRpdGxlLWV4dHJhXCI+Ly8gIENhbGlmb3JuaWEncyBNb2Rlcm4gV2luZSBOZXR3b3JrPHNwYW4+PC9oMT5cbiAgPGRpdiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDIwcHhcIj48YT5BYm91dDwvYT48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImltYWdlXCI+XG4gICAgPGltZyBzcmM9XCIvaW1hZ2VzL3VjZC1saWItbG9nby13aGl0ZS5wbmdcIiAvPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG5gO30iLCJpbXBvcnQgJ0Bwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb24uanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWljb25zZXQtc3ZnL2lyb24taWNvbnNldC1zdmcuanMnO1xuXG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuY29uc3QgdGVtcGxhdGUgPSBodG1sYDxpcm9uLWljb25zZXQtc3ZnIG5hbWU9XCJpbnRlcnQtd2luZS1pY29uc1wiIHNpemU9XCIyNFwiPlxuPHN2Zz48ZGVmcz5cbiA8ZyBpZD1cImNsdXN0ZXJcIj5cbiAgPHRpdGxlPmljb24tY2x1c3RlcjwvdGl0bGU+XG4gIDxnIGlkPVwiVUtfRG90X1JlZFwiIGRhdGEtbmFtZT1cIlVLIERvdCBSZWRcIj5cbiAgICA8Y2lyY2xlIGN4PVwiNS42MVwiIGN5PVwiOC4zMVwiIHI9XCIyLjM3XCIgLz5cbiAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjQuNjJcIiByPVwiMi4zN1wiIC8+XG4gICAgPGNpcmNsZSBjeD1cIjE4LjM5XCIgY3k9XCI4LjMxXCIgcj1cIjIuMzdcIiAvPlxuICAgIDxjaXJjbGUgY3g9XCIxOC4zOVwiIGN5PVwiMTUuNjlcIiByPVwiMi4zN1wiIC8+XG4gICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxOS4zOFwiIHI9XCIyLjM3XCIgLz5cbiAgICA8Y2lyY2xlIGN4PVwiNS42MVwiIGN5PVwiMTUuNjlcIiByPVwiMi4zN1wiIC8+XG4gICAgPGNpcmNsZSBjeD1cIjUuNjFcIiBjeT1cIjguMzFcIiByPVwiMi4zN1wiIC8+XG4gIDwvZz5cbjwvZz5cbjxnIGlkPVwiY29ubmVjdGlvblwiPlxuICA8dGl0bGU+aWNvbi1jb25uZWN0aW9uPC90aXRsZT5cbiAgPHBhdGggZD1cIk0xOS4zMyw0Ljc0bC0uMDctLjA3YTQsNCwwLDAsMC01LjY4LDBMMTAsOC4yOUE0LDQsMCwwLDAsMTAsMTRMMTAsMTRhNC41OSw0LjU5LDAsMCwwLC40MS4zNmwxLjMzLTEuMzNhMi4yNCwyLjI0LDAsMCwxLS40My0uMzNsLS4wNy0uMDdhMi4xNywyLjE3LDAsMCwxLDAtMy4wN0wxNC44OCw2QTIuMiwyLjIsMCwwLDEsMTgsNkwxOCw2YTIuMiwyLjIsMCwwLDEsMCwzLjA4bC0xLjY0LDEuNjRhNS41NCw1LjU0LDAsMCwxLC40LDIuMmwyLjU0LTIuNTRBNCw0LDAsMCwwLDE5LjMzLDQuNzRaTTE0LDEwYTQuNTksNC41OSwwLDAsMC0uNDEtLjM2bC0xLjMzLDEuMzNhMi4yNCwyLjI0LDAsMCwxLC40My4zM2wuMDcuMDdhMi4xNywyLjE3LDAsMCwxLDAsMy4wN0w5LjEyLDE4QTIuMiwyLjIsMCwwLDEsNiwxOEw2LDE4YTIuMiwyLjIsMCwwLDEsMC0zLjA4bDEuNjQtMS42NGE1LjU0LDUuNTQsMCwwLDEtLjQtMi4yTDQuNjcsMTMuNThhNCw0LDAsMCwwLDAsNS42OGwuMDcuMDdhNCw0LDAsMCwwLDUuNjgsMEwxNCwxNS43MUE0LDQsMCwwLDAsMTQsMTBaXCIgLz5cbjwvZz5cbjxnIGlkPVwiZXZlbnRcIj5cbiAgPHRpdGxlPmljb24tZXZlbnQ8L3RpdGxlPlxuICA8cGF0aCBkPVwiTTE4LjczLDUuMjFoLS40NVYzLjU2YS43Ny43NywwLDEsMC0xLjUzLDBWNS4yMUgxMi42VjMuNTZhLjc3Ljc3LDAsMCwwLS43Ni0uNzcuNzguNzgsMCwwLDAtLjc3Ljc3VjUuMjFINy4yNVYzLjU2YS43Ny43NywwLDEsMC0xLjUzLDBWNS4yMUg1LjI3QTIuMjcsMi4yNywwLDAsMCwzLDcuNDhWMTguOTRhMi4yNywyLjI3LDAsMCwwLDIuMjcsMi4yN0gxOC43M0EyLjI3LDIuMjcsMCwwLDAsMjEsMTguOTRWNy40OEEyLjI3LDIuMjcsMCwwLDAsMTguNzMsNS4yMVpNOSwxOC4xNEg2LjQ2di0yLjVIOVptMC0zLjY4SDYuNDZWMTJIOVptMC0zLjY4SDYuNDZWOC4yOEg5Wm00LjI5LDcuMzZoLTIuNXYtMi41aDIuNVptMC0zLjY4aC0yLjVWMTJoMi41Wm0wLTMuNjhoLTIuNVY4LjI4aDIuNVptNC4yOSw3LjM2SDE1di0yLjVoMi41Wm0wLTMuNjhIMTVWMTJoMi41Wm0wLTMuNjhIMTVWOC4yOGgyLjVaXCIgLz5cbjwvZz5cbjxnIGlkPVwibGlua1wiPlxuICA8dGl0bGU+aWNvbi1saW5rPC90aXRsZT5cbiAgPHBvbHlnb24gcG9pbnRzPVwiMTcuMjUgMTcuMjUgNi43NSAxNy4yNSA2Ljc1IDYuNzUgOC43NCA2Ljc1IDguNzQgNS4yNSA1LjI1IDUuMjUgNS4yNSAxOC43NSAxOC43NSAxOC43NSAxOC43NSAxNS4yNiAxNy4yNSAxNS4yNiAxNy4yNSAxNy4yNVwiIC8+XG4gIDxwb2x5Z29uIHBvaW50cz1cIjEyIDUuMjUgMTIgNi43NSAxNi4xOSA2Ljc1IDExLjQ3IDExLjQ3IDEyLjUzIDEyLjUzIDE3LjI1IDcuODEgMTcuMjUgMTIgMTguNzUgMTIgMTguNzUgNS4yNSAxMiA1LjI1XCIgLz5cbjwvZz5cbjxnIGlkPVwib2JqZWN0XCI+XG4gIDx0aXRsZT5pY29uLW9iamVjdDwvdGl0bGU+XG4gIDxwYXRoIGQ9XCJNMTkuNzYsNS42OWwtNi0xLjQ5LTMuNTMtLjg5TDEwLDMuMjRsLS4xMS4wNy0uMTkuMTJjLTEsLjU5LTIsMS4yOC0zLjEzLDJMNC4yLDYuOTFsMS4zNC4zM2MyLjc5LjcsNy41MSwxLjg3LDguMjEsMi4wNmEuMjUuMjUsMCwwLDAsLjIyLDBsMS4zMi0uODJaXCIgLz5cbiAgPHBhdGggZD1cIk0zLjM3LDE4LjM1aDBMMTMsMjAuNzZWMTEuMTRMMy4zNyw4LjcydjkuNjNaXCIgLz5cbiAgPHBhdGggZD1cIk0yMC42MywxNi44MmMwLS4xNywwLS41NywwLTEuMTZWNy40N2wtNS41NiwzLjQxTDE1LDIwLjI2bDIuNTUtMS41NlpcIiAvPlxuPC9nPlxuPGcgaWQ9XCJwZXJzb25cIj5cbiAgPHRpdGxlPmljb24tcGVyc29uPC90aXRsZT5cbiAgPHBhdGggZD1cIk0xMS45NCw1LjczSDEyYTEuNzcsMS43NywwLDAsMCwwLTMuNTRoLS4xYTEuNzcsMS43NywwLDAsMCwwLDMuNTRaXCIgLz5cbiAgPHBhdGggZD1cIk0xNy4zOCwxMi40NiwxNC4wNyw3LjE3QS44LjgsMCwwLDAsMTQsN2gwYS4yMS4yMSwwLDAsMCwwLS4wNmgwYS42NS42NSwwLDAsMC0uMjctLjE3SDEwLjMzYS42NS42NSwwLDAsMC0uMjcuMTdoMEEuMjEuMjEsMCwwLDAsMTAsN2gwYS44LjgsMCwwLDAtLjA4LjE2TDYuNjIsMTIuNDZhLjcuNywwLDEsMCwxLjMxLjQ3bDIuNDUtMy43Mi0uMjcsNEw3LjgsMjAuODJjLS4xMS40NywwLC45MS42LDFhMS4xMiwxLjEyLDAsMCwwLDEuMjgtLjdMMTIsMTQuNTJsMi4zMiw2LjU5YTEuMTIsMS4xMiwwLDAsMCwxLjI4LjdjLjYxLS4wOC43MS0uNTIuNi0xbC0yLjMxLTcuNTktLjI3LTQsMi40NSwzLjcyYS43LjcsMCwxLDAsMS4zMS0uNDdaXCIgLz5cbjwvZz5cbjxnIGlkPVwicGxhY2VcIj5cbiAgPHRpdGxlPmljb24tcGxhY2U8L3RpdGxlPlxuICA8cGF0aCBkPVwiTTE3LjY2LDQuNjlhOCw4LDAsMCwwLTExLjMyLDBoMEE4LDgsMCwwLDAsNi4zNCwxNkwxMiwyMS42NiwxNy42NiwxNkE4LDgsMCwwLDAsMTcuNjYsNC42OVptLTUuNjYsOWEzLjgzLDMuODMsMCwxLDEsMy44Mi0zLjgzQTMuODMsMy44MywwLDAsMSwxMiwxMy42N1pcIiAvPlxuPC9nPlxuPGcgaWQ9XCJzZXR0aW5nc1wiPlxuICA8dGl0bGU+aWNvbi1zZXR0aW5nczwvdGl0bGU+XG4gIDxnIGlkPVwiTGF5ZXJfMlwiIGRhdGEtbmFtZT1cIkxheWVyIDJcIj5cbiAgICA8ZyBpZD1cIkp1ZGdlbWVudG9mUGFyaXNcIj5cbiAgICAgIDxnIGlkPVwiSW50ZXJmYWNlXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMjQsMTMuMzdWMTAuNjNMMjAuMzIsMTBhOC41OSw4LjU5LDAsMCwwLTEtMi40bDIuMTQtMy4wOC0xLjk0LTJMMTYuNDQsNC42OGE4LjU5LDguNTksMCwwLDAtMi40LTFMMTMuMzcsMEgxMC42M0wxMCwzLjY4YTguNTksOC41OSwwLDAsMC0yLjQsMUw0LjQ4LDIuNTQsMi41NCw0LjQ4LDQuNjgsNy41NmE4LjU5LDguNTksMCwwLDAtMSwyLjRMMCwxMC42M3YyLjc0TDMuNjgsMTRhOC41OSw4LjU5LDAsMCwwLDEsMi40TDIuNTQsMTkuNTJsMS45NCwxLjk0LDMuMDgtMi4xNGE4LjU5LDguNTksMCwwLDAsMi40LDFMMTAuNjMsMjRoMi43NEwxNCwyMC4zMmE4LjU5LDguNTksMCwwLDAsMi40LTFsMy4wOCwyLjE0LDEuOTQtMS45NC0yLjE0LTMuMDhhOC41OSw4LjU5LDAsMCwwLDEtMi40Wk0xMiwxNy4xNEE1LjE0LDUuMTQsMCwxLDEsMTcuMTQsMTJoMEE1LjE0LDUuMTQsMCwwLDEsMTIsMTcuMTRaXCIgLz5cbiAgICAgIDwvZz5cbiAgICA8L2c+XG4gIDwvZz5cbjwvZz5cbjxnIGlkPVwidGVjaG5vbG9neVwiPlxuICA8dGl0bGU+aWNvbi10ZWNobm9sb2d5PC90aXRsZT5cbiAgPHBhdGggZD1cIk0xNi42MSwxMC4zNkE0LjYxLDQuNjEsMCwwLDAsMTIsNi4wNmgwYTQuNjEsNC42MSwwLDAsMC00LjYxLDQuM2MwLDIuMTcuNzEsMi44NCwxLjgzLDQuMzlhNy4yNSw3LjI1LDAsMCwxLDEsMy43aDMuNThhNy4zMSw3LjMxLDAsMCwxLDEtMy43QzE1LjksMTMuMiwxNi42NSwxMi41MywxNi42MSwxMC4zNlpcIiAvPlxuICA8cGF0aCBkPVwiTTEwLjIxLDIxLjIzYS41Mi41MiwwLDAsMCwuNTIuNTNoLjM0di4wNmgwYS45LjksMCwwLDAsLjg5LjlIMTJhLjkuOSwwLDAsMCwuODktLjloMHYtLjA2aC4zNGEuNTIuNTIsMCwwLDAsLjUyLS41M1YyMC4zSDEwLjIxWlwiIC8+XG4gIDxyZWN0IHg9XCIxOC45MlwiIHk9XCIxMC42N1wiIHdpZHRoPVwiMy4wOFwiIGhlaWdodD1cIjEuMjNcIiAvPlxuICA8cmVjdCB4PVwiMlwiIHk9XCIxMC42N1wiIHdpZHRoPVwiMy4wOFwiIGhlaWdodD1cIjEuMjNcIiAvPlxuICA8cmVjdCB4PVwiMTEuMzhcIiB5PVwiMS4yOFwiIHdpZHRoPVwiMS4yM1wiIGhlaWdodD1cIjMuMDhcIiAvPlxuICA8cmVjdCB4PVwiNS40XCIgeT1cIjMuNzZcIiB3aWR0aD1cIjEuMjNcIiBoZWlnaHQ9XCIzLjA4XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xLjk5IDUuODEpIHJvdGF0ZSgtNDUpXCIgLz5cbiAgPHJlY3QgeD1cIjE2LjQ0XCIgeT1cIjQuNjlcIiB3aWR0aD1cIjMuMDhcIiBoZWlnaHQ9XCIxLjIzXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEuNTIgMTQuMjcpIHJvdGF0ZSgtNDUpXCIgLz5cbjwvZz5cbjwvZGVmcz48L3N2Zz5cbjwvaXJvbi1pY29uc2V0LXN2Zz5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQpOyIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL2ludGVydC13aW5lLnRwbC5qc1wiXG5cbi8vIGdsb2JhbCBpbXBvcnRzXG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS1wcm9wZXJ0aWVzXCJcbmltcG9ydCBcIkB1Y2QtbGliL2NvcmstYXBwLXV0aWxzXCJcbmltcG9ydCBcIi4uL3NyY1wiXG5cbi8vIG5wbSBpbXBvcnRzXG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLXBhZ2VzXCJcblxuLy8gbG9jYWwgaW1wb3J0c1xuaW1wb3J0IFwiLi9pbnRlcnQtd2luZS1pY29uc1wiXG5pbXBvcnQgXCIuL2FwcC1oZWFkZXJcIlxuaW1wb3J0IFwiLi92aWV3cy9tYXAvYXBwLXZpZXctbWFwXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJ0V2luZSBleHRlbmRzIE1peGluKExpdEVsZW1lbnQpXG4gIC53aXRoKExpdENvcmtVdGlscykge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmlldyA6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgYXBwUm91dGVzIDoge3R5cGU6IEFycmF5fVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnZpZXcgPSAnbWFwJztcbiAgICB0aGlzLmFwcFJvdXRlcyA9IEFQUF9DT05GSUcuYXBwUm91dGVzO1xuXG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuX2luamVjdE1vZGVsKCdBcHBTdGF0ZU1vZGVsJyk7XG4gIH1cblxuICBfb25BcHBTdGF0ZVVwZGF0ZShlKSB7XG4gICAgdGhpcy52aWV3ID0gZS5wYWdlO1xuICB9XG5cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2ludGVydC13aW5lJywgSW50ZXJ0V2luZSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnXG5pbXBvcnQgc2hhcmVkU3R5bGVzIGZyb20gJy4vc3R5bGVzL3NoYXJlZC1zdHlsZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHsgXG5yZXR1cm4gaHRtbGBcblxuJHtzaGFyZWRTdHlsZXN9XG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxuXG4gIC8qIGFwcC1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgfSAqL1xuXG4gIGlyb24tcGFnZXMge1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgZmxleDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAubGF5b3V0IHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbjwvc3R5bGU+XG5cbjxhcHAtcm91dGUgLmFwcFJvdXRlcz1cIiR7dGhpcy5hcHBSb3V0ZXN9XCI+PC9hcHAtcm91dGU+XG5cbjxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgPGFwcC1oZWFkZXI+PC9hcHAtaGVhZGVyPlxuXG4gIDxpcm9uLXBhZ2VzIHNlbGVjdGVkPVwiJHt0aGlzLnZpZXd9XCIgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpZFwiIHNlbGVjdGVkLWF0dHJpYnV0ZT1cInZpc2libGVcIj5cbiAgICA8YXBwLXZpZXctbWFwIGlkPVwibWFwXCI+PC9hcHAtdmlldy1tYXA+XG4gIDwvaXJvbi1wYWdlcz5cblxuPC9kaXY+XG5cbmA7fSIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGh0bWxgXG48c3R5bGU+XG4gIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB2YXIoLS1hcHAtY29sb3ItY2hhcmNvYWwpO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB9XG4gIGgxLmludmVyc2Uge1xuICAgIGNvbG9yOiB2YXIoLS1hcHAtY29sb3Itd2hpdGUpO1xuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6IHZhcigtLWFwcC1jb2xvci1jaGFyY29hbCk7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuICBoMi5pbnZlcnNlIHtcbiAgICBjb2xvcjogdmFyKC0tYXBwLWNvbG9yLXdoaXRlKTtcbiAgfVxuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHZhcigtLWFwcC1jb2xvci1jaGFyY29hbCk7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIH1cbiAgaDMuaW52ZXJzZSB7XG4gICAgY29sb3I6IHZhcigtLWFwcC1jb2xvci13aGl0ZSk7XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogdmFyKC0tYXBwLWNvbG9yLWNoYXJjb2FsKTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cblxuICAuc3ViamVjdC10eXBlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIGEuaW50ZXJuYWwsIGEuaW50ZXJuYWw6dmlzaXRlZCB7XG4gICAgY29sb3I6IHZhcigtLWFwcC1jb2xvci1jaGFyY29hbCk7XG4gIH1cblxuICBhLmV4dGVybmFsIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICBidXR0b24sIC5idG4ge1xuICAgIGhlaWdodDogNDRweDtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgY29sb3I6IHZhcigtLWFwcC1jb2xvci13aGl0ZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLWNvbG9yLWludGVyZmFjZS1ibHVlKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICBidXR0b24uaW52ZXJzZSwgLmJ0bi5pbnZlcnNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtY29sb3Itd2hpdGUpO1xuICAgIGNvbG9yOiB2YXIoLS1hcHAtY29sb3ItaW50ZXJmYWNlLWJsdWUpO1xuICB9XG5cbiAgYS5idG4ge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGJ1dHRvbjpob3ZlciwgLmJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLWNvbG9yLXNlY29uZGFyeS1ibHVlKTtcbiAgfVxuICBidXR0b24uaW52ZXJzZTpob3ZlciwgLmJ0bi5pbnZlcnNlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtY29sb3Itc21va2UpO1xuICB9XG5cblxuICBidXR0b25bZGlzYWJsZWRdLCAuYnRuW2Rpc2FibGVkXSB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtY29sb3ItcGV3dGVyKSAhaW1wb3J0YW50O1xuICB9XG5cbjwvc3R5bGU+XG5gOyIsImxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbnN0eWxlLmlubmVySFRNTCA9IGBcbmh0bWwge1xuICAtLWFwcC1jb2xvci1zY2FybGV0IDogI0VBNTM0QjtcbiAgLS1hcHAtY29sb3ItZ29sZCA6ICNGMkFDMzA7XG4gIC0tYXBwLWNvbG9yLXZpbmUgOiAjMUVBODY2O1xuICAtLWFwcC1jb2xvci1yb3NlIDogI0VENzdBNTtcbiAgLS1hcHAtY29sb3ItZ3JhcGUgOiAjQkE1QjkzO1xuICAtLWFwcC1jb2xvci1pbnRlcmZhY2UtYmx1ZSA6ICMxODc3OUI7XG4gIC0tYXBwLWNvbG9yLXNlY29uZGFyeS1ibHVlIDogIzAxNUU4MDtcbiAgLS1hcHAtY29sb3ItY2x1c3Rlci1ibHVlIDogdmFyKC0tYXBwLWNvbG9yLXNlY29uZGFyeS1ibHVlKTtcbiAgLS1hcHAtY29sb3ItY2x1c3Rlci1ibHVlLWFscGhhIDogcmdiYSgxLCA5NCwgMTI4LCAwLjUpO1xuICAtLWFwcC1jb2xvci1zbW9rZSA6ICNGM0YyRjA7XG4gIC0tYXBwLWNvbG9yLXBld3RlciA6ICNENERBREM7XG4gIC0tYXBwLWNvbG9yLWNoYXJjb2FsIDogIzMzMzMzMztcbiAgLS1hcHAtY29sb3ItYmxhY2sgOiAjMDAwMDAwO1xuICAtLWFwcC1jb2xvci13aGl0ZSA6ICNGRkZGRkY7XG5cbiAgXG4gIC0tYXBwLXByaW1hcnktY29sb3IgICA6IHZhcigtLWFwcC1jb2xvci1pbnRlcmZhY2UtYmx1ZSk7XG4gIC0tYXBwLWJhY2tncm91bmQtY29sb3IgOiB2YXIoLS1hcHAtY29sb3Itd2hpdGUpO1xuICAtLWFwcC10ZXh0LWNvbG9yICAgICAgOiB2YXIoLS1hcHAtY29sb3ItYmxhY2spO1xuICAtLWFwcC1tYXgtd2lkdGggICAgICAgICAgICAgICA6IDEyMDBweDtcbiAgLS1hcHAtbWF4LXRleHQtd2lkdGggICAgICAgICAgOiA2NTBweDtcbiAgLS1hcHAtZm9udC1zaXplICAgICAgICAgICAgICAgOiAxNHB4O1xuICAtLWFwcC1mb250LXNpemUtc20gICAgICAgICAgICA6IDEzcHg7XG4gIC0tYXBwLWZvbnQtd2VpZ2h0ICAgICAgICAgICAgIDogNDAwO1xuICAtLWFwcC1mb250LXdlaWdodC1saWdodCAgICAgICA6IDIwMDtcbiAgLS1hcHAtZm9udC13ZWlnaHQtaGVhdnkgICAgICAgOiA3MDA7XG4gIC0tYXBwLWxheW91dC1zbSAgICAgICAgICAgICAgIDogNzY4cHg7XG4gIC0tYXBwLWdyaWQtY2VsbC13aWR0aCAgICAgICAgIDogMjUwcHg7XG4gIC0tYXBwLWRlZmF1bHQtb3V0bGluZSAgICAgICAgIDogMnB4IGRvdHRlZCB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XG59XG5cbmJvZHksIGh0bWwge1xuICAvKiBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlOyAqL1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemUgICAgICAgIDogdmFyKC0tYXBwLWZvbnQtc2l6ZSk7XG4gIGZvbnQtd2VpZ2h0ICAgICAgOiB2YXIoLS1hcHAtZm9udC13ZWlnaHQpO1xuICBsaW5lLWhlaWdodCAgICAgIDogY2FsYyh2YXIoLS1hcHAtZm9udC1zaXplKSAqIDEuNjI1KTtcbiAgbWFyZ2luICAgICAgICAgICA6IDA7XG4gIHBhZGRpbmcgICAgICAgICAgOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yIDogdmFyKC0tYXBwLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvciAgICAgICAgICAgIDogdmFyKC0tYXBwLXRleHQtY29sb3IpO1xuICBtYXgtd2lkdGggICAgICAgIDogMTAwdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5gIiwiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vYXBwLWxlYWZsZXQtbWFwLnRwbC5qc1wiXG5cbmltcG9ydCBcImxlYWZsZXRcIlxuaW1wb3J0IFwibGVhZmxldC5tYXJrZXJjbHVzdGVyXCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBMZWFmbGV0TWFwIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmUgOiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICBpbmZvT3BlbiA6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgYXR0cmlidXRlOiAnaW5mby1vcGVuJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMubGlua0xheWVycyA9IHt9O1xuICAgIHRoaXMubm9kZUxheWVycyA9IHt9O1xuICAgIHRoaXMubGlua3MgPSB7fTtcbiAgICB0aGlzLm5vZGVzID0ge307XG4gICAgdGhpcy51cGRhdGVMaW5rc1RpbWVyID0gLTE7XG4gICAgdGhpcy5maXJzdFJlbmRlciA9IHRydWU7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgaWYoICF0aGlzLmFjdGl2ZSApIHJldHVybjtcbiAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfSk7XG4gICAgdGhpcy5yZWRyYXdUaW1lciA9IC0xO1xuICB9XG5cbiAgZmlyc3RVcGRhdGVkKCkge1xuICAgIHRoaXMuaW5pdE1hcCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgaW5pdE1hcFxuICAgKiBAZGVzY3JpcHRpb24gY2FsbGVkIHdoZW4gdGhlIGVsZW1lbnQgaXMgZmlyc3QgcmVuZGVyZWQuICBTZXRzIHVwIHRoZSBtYXBcbiAgICogYW5kIHRoZSBjbGlzdGVyIGxhdGVycy4gIENoZWNrcyBpZiB0aGVyZSBpcyBhIHBlbmRpbmcgdmlldyBzdGF0ZSBhbmQgc2V0cyB0aGVcbiAgICogbWFwIHRvIHRoYXQgbG9jYXRpb24sIG90aGVyd2lzZSByZW5kZXJzIGF0IDAsMFxuICAgKi9cbiAgaW5pdE1hcCgpIHtcbiAgICAvLyBjcmVhdGUgdGhlIGxlYWZsZXQgbWFwIG9iamVjdFxuICAgIHRoaXMubWFwID0gTC5tYXAodGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNtYXAnKSkuc2V0VmlldyhbMCwwXSwgMywge2FuaW1hdGU6IGZhbHNlfSk7XG5cbiAgICAvLyBwZW5kaW5nIHZpZXcgc3RhdGU/IHVzZSB0aGF0IGxhdC9sbmcgaW5zdGVhZFxuICAgIGlmKCB0aGlzLnBlbmRpbmdWaWV3ICkge1xuICAgICAgdGhpcy5zZXRWaWV3KHRoaXMucGVuZGluZ1ZpZXcubGF0bG5nLCB0aGlzLnBlbmRpbmdWaWV3Lnpvb20pO1xuICAgICAgdGhpcy5wZW5kaW5nVmlldyA9IG51bGw7XG4gICAgfSBlbHNlIGlmKCB0aGlzLmluZm9PcGVuICkge1xuICAgICAgdGhpcy5zZXRWaWV3KFswLDBdLCAzKTtcbiAgICB9XG5cbiAgICBMLnRpbGVMYXllcignaHR0cDovL3tzfS5iYXNlbWFwcy5jYXJ0b2Nkbi5jb20vbGlnaHRfYWxsL3t6fS97eH0ve3l9LnBuZycsIHtcbiAgICAgICAgYXR0cmlidXRpb246ICcmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcbiAgICB9KS5hZGRUbyh0aGlzLm1hcCk7XG4gICAgXG4gICAgLy8gY3JlYXRlIHRoZSBjbHVsc3RlciBsYXllclxuICAgIHRoaXMuY2x1c3RlcnMgPSBMLm1hcmtlckNsdXN0ZXJHcm91cCh7XG4gICAgICBhbmltYXRlOiBmYWxzZSxcbiAgICAgIHNob3dDb3ZlcmFnZU9uSG92ZXI6IGZhbHNlLFxuICAgICAgem9vbVRvQm91bmRzT25DbGljazogZmFsc2UsXG4gICAgICByZW1vdmVPdXRzaWRlVmlzaWJsZUJvdW5kczogZmFsc2UsXG4gICAgICBtYXhDbHVzdGVyUmFkaXVzIDogMjUsXG4gICAgICBzcGlkZXJmeU9uTWF4Wm9vbSA6IGZhbHNlXG4gICAgfSk7XG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5jbHVzdGVycyk7XG4gICAgdGhpcy5tYXAuem9vbUNvbnRyb2wuc2V0UG9zaXRpb24oJ2JvdHRvbXJpZ2h0Jyk7XG5cbiAgICAvLyB3aXJlIHVwIGxheWVyIGFuZCBtYXAgZXZlbnRzXG4gICAgdGhpcy5jbHVzdGVycy5vbignY2x1c3RlcmNsaWNrJywgZSA9PiB0aGlzLm9uQ2x1c3RlckNsaWNrZWQoZSkpO1xuICAgIHRoaXMubWFwLm9uKCd6b29tZW5kJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZXBvc2l0aW9uU2VsZWN0ZWROb2RlKCk7XG4gICAgICB0aGlzLnJlcG9zaXRpb25TZWxlY3RlZExpbmsoKTtcbiAgICAgIHRoaXMudXBkYXRlTGlua3MoKVxuICAgIH0pO1xuXG4gICAgLy8gZ3JhYiB0aGUgY3NzIGNvbG9yIGRlZmluZWQgYnkgb3VyIGN1c3RvbSB2YXJpYWJsZVxuICAgIHRoaXMubGluZUNvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpXG4gICAgICAuZ2V0UHJvcGVydHlWYWx1ZSgnLS1hcHAtY29sb3ItaW50ZXJmYWNlLWJsdWUnKVxuICAgICAgLnRyaW0oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHJlbmRlclNlbGVjdGVkU3RhdGVcbiAgICogQGRlc2NyaXB0aW9uIGNhbGxlZCBieSB0aGUgcGFyZW50IHdoZW4gYXBwIHN0YXRlIHVwZGF0ZXMuICByZW5kZXIgdGhlIG1hcFxuICAgKiB0byB0aGUgY3VycmVudCBzdGF0ZVxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IGUgYXBwLXN0YXRlLXVwZGF0ZSBldmVudCBvYmplY3RcbiAgICovXG4gIHJlbmRlclNlbGVjdGVkU3RhdGUoZSkge1xuICAgIGlmKCAhZSApIHtcbiAgICAgIGlmKCB0aGlzLmZpcnN0UmVuZGVyICkge1xuICAgICAgICBpZiggT2JqZWN0LmtleXModGhpcy5ub2RlcykubGVuZ3RoID09PSAwICkgdGhpcy56b29tVG9DbHVzdGVycyA9IHRydWU7XG4gICAgICAgIGVsc2UgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuY2x1c3RlcnMuZ2V0Qm91bmRzKCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5maXJzdFJlbmRlciA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHJlc2V0IHN0YXRlLCByZW1vdmUgY3VycmVudCBtYXJrZXJzXG4gICAgaWYoIHRoaXMuc2VsZWN0ZWROb2RlSWNvbiApIHtcbiAgICAgIGZvciggbGV0IHR5cGUgaW4gdGhpcy5zZWxlY3RlZE5vZGVJY29uICkge1xuICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLnNlbGVjdGVkTm9kZUljb25bdHlwZV0pO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVJY29uID0gbnVsbDtcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlTGF5ZXIgPSBudWxsO1xuICAgIH1cbiAgICBpZiggdGhpcy5zZWxlY3RlZExpbmVJY29uICkge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5zZWxlY3RlZExpbmVJY29uKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRMaW5lSWNvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gbm93IHJlbmRlciBiYXNlZCBvbiBzZWxlY3RlZCB0eXBlXG4gICAgaWYoIGUuc2VsZWN0ZWQudHlwZSA9PT0gJ2NsdXN0ZXInICkge1xuICAgICAgdGhpcy5zZWxlY3RDbHVzdGVyKGUuc2VsZWN0ZWQubGF0bG5nLCBlLnNlbGVjdGVkLnpvb20pO1xuICAgIH0gZWxzZSBpZiggZS5zZWxlY3RlZC50eXBlICYmIGUuc2VsZWN0ZWQudHlwZSAhPT0gJ2Nvbm5lY3Rpb24nICkge1xuICAgICAgdGhpcy5zZWxlY3ROb2RlKGUuc2VsZWN0ZWQuaWQsIHVuZGVmaW5lZCwgdGhpcy5maXJzdFJlbmRlcik7XG4gICAgfSBlbHNlIGlmKCBlLnNlbGVjdGVkLnR5cGUgPT09ICdjb25uZWN0aW9uJyApIHtcbiAgICAgIHRoaXMuc2VsZWN0TGluayhlLnNlbGVjdGVkLmlkKTtcbiAgICB9XG5cbiAgICAvLyBtYWtlIHN1cmUgb3VyIGxpbmtzIGFyZSByZW5kZXJlZCBjb3JyZWN0bHlcbiAgICB0aGlzLnVwZGF0ZUxpbmtzKCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBzZWxlY3RMaW5rXG4gICAqIEBkZXNjcmlwdGlvbiByZW5kZXIgYSBsaW5rIGJhc2VkIG9uIGlkLiAgVGhpcyB3aWxsIHNob3cgdHdvIGxhYmVscyBhbmRcbiAgICogdGhlIGNlbnRlciBjb25uZWN0aW9uIGxpbmUgbGFiZWxcbiAgICogXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb25uZWN0aW9uIGlkXG4gICAqL1xuICBzZWxlY3RMaW5rKGlkKSB7XG4gICAgLy8gZ2V0IHRoZSBsaW5rIG9iamVjdFxuICAgIGxldCBsaW5rID0gdGhpcy5saW5rc1tpZF07XG5cbiAgICAvLyBpZiBubyBsaW5rIG9iamVjdCwgYXNzdW1lIHdlIGFyZSBsb2FkaW5nLiAgU2V0IHRoZSBwZW5kaW5nIGF0dHJpYnV0ZVxuICAgIC8vIGFuZCBxdWl0LiAgV2hlbiBhIG5ldyBncmFwaCBpcyBsb2FkZWQsIHRoaXMgd2lsbCBiZSBjaGVjayBhbmQgc2VsZWN0TGluaygpXG4gICAgLy8gd2lsbCBiZSBjYWxsZWQgYWdhaW5cbiAgICBpZiggIWxpbmsgKSB7XG4gICAgICB0aGlzLnBlbmRpbmdMaW5rU2VsZWN0ID0gaWQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gc2V0IG91ciBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIG5vZGUgbGFiZWxzXG4gICAgdGhpcy5zZWxlY3ROb2RlKGxpbmsuc3JjLCAnc3JjJyk7XG4gICAgdGhpcy5zZWxlY3ROb2RlKGxpbmsuZHN0LCAnZHN0Jyk7XG5cbiAgICAvLyBmaW5kIHRoZSBzY3JlZW4gbWlkcG9pbnQgb2YgdGhlIGxpbmVcbiAgICBsZXQgbGwgPSB0aGlzLl9nZXRNaWRQb2ludChcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlSWNvbi5zcmMuZ2V0TGF0TG5nKCksXG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZUljb24uZHN0LmdldExhdExuZygpXG4gICAgKTtcblxuICAgIC8vIGNyZWF0IHRoZSBsaW5lIGxhYmVsXG4gICAgbGV0IGljb24gPSBMLmRpdkljb24oe1xuICAgICAgY2xhc3NOYW1lOiBgbGVhZmxldC1pbnRlcnR3aW5lLWNvbm5lY3Rpb24tbGFiZWxgLFxuICAgICAgaWNvblNpemU6IFswLCAwXSxcbiAgICAgIGh0bWwgOiAnPGRpdj5jb25uZWN0aW9uPC9kaXY+J1xuICAgIH0pO1xuICAgIHRoaXMuc2VsZWN0ZWRMaW5lSWNvbiA9IEwubWFya2VyKGxsLCB7aWNvbn0pO1xuICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMuc2VsZWN0ZWRMaW5lSWNvbik7XG4gICAgdGhpcy5zZWxlY3RlZExpbmVJY29uLnNldFpJbmRleE9mZnNldCg1MDAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHNlbGVjdE5vZGVcbiAgICogQGRlc2NyaXB0aW9uIHNldCBhIG5vZGUgbGFiZWwuICBUaGUgdHlwZSBzaG91bGQgYmUgZWl0aGVyIHNyYyBvciBkc3QuICBGb3Igc2luZ2xlXG4gICAqIG5vZGUgc2VsZWN0aW9uIHRoZSB0eXBlIHdpbGwgYmUgc3JjLiAgXG4gICAqIFxuICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgbm9kZSBpZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBlaXRoZXIgc3JjfGRzdFxuICAgKi9cbiAgc2VsZWN0Tm9kZShpZCwgdHlwZT0nc3JjJywgZmlyc3RSZW5kZXI9ZmFsc2UpIHtcbiAgICAvLyBmaW5kIHRoZSBtYXJrZXIgbGF5ZXIgYmFzZWQgb24gaWQgaW4gdGhlIGNsdXN0ZXJcbiAgICBsZXQgbGF5ZXIgPSB0aGlzLmNsdXN0ZXJzXG4gICAgICAuZ2V0TGF5ZXJzKClcbiAgICAgIC5maW5kKGxheWVyID0+IGxheWVyLmluZXJ0V2luZUlkID09PSBpZCk7XG5cbiAgICAvLyBpZiBub3QgZm91bmQsIGFzc3VtZSBlaXRoZXIgZ3JhcGggaGFzbid0IGxvYWRlZCBvciB0aGUgbGF5ZXIgaGFzbid0IHJlbmRlcmVkXG4gICAgLy8gc2V0IHRoZSBwZW5kaW5nTm9kZVNlbGVjdCBhdHRyaWJ1dGUgd2hpY2ggd2lsbCBiZSBjaGVjaGVkIHdoZW4gdGhlIGdyYXBoXG4gICAgLy8gbG9hZHMgY2FsbGluZyB0aGlzIGZ1bmN0aW9uIGFnYWluXG4gICAgaWYoICFsYXllciApIHtcbiAgICAgIGlmKCAhdGhpcy5wZW5kaW5nTm9kZVNlbGVjdCApIHtcbiAgICAgICAgdGhpcy5wZW5kaW5nTm9kZVNlbGVjdCA9IHt9O1xuICAgICAgfVxuICAgICAgdGhpcy5wZW5kaW5nTm9kZVNlbGVjdFt0eXBlXSA9IGlkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHNldHVwIG91ciBsb29rIGF0dHJpYnV0ZXMgZm9yIHNlbGVjdGVkIGxheWVyIGFuZCBpY29uXG4gICAgaWYoICF0aGlzLnNlbGVjdGVkTm9kZUxheWVyICkge1xuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVMYXllciA9IHt9O1xuICAgIH1cbiAgICBpZiggIXRoaXMuc2VsZWN0ZWROb2RlSWNvbiApIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlSWNvbiA9IHt9O1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkTm9kZUxheWVyW3R5cGVdID0gbGF5ZXI7XG4gICAgXG4gICAgLy8gZ3JhcGggdGhlIHZpc2libGUgbWFya2VyLCBlaXRoZXIgdGhlIGNsdXN0ZXIgbWFya2VyIG9yIHRoZSBsYXllciBpdHNlbGZcbiAgICBsYXllciA9IHRoaXMuY2x1c3RlcnMuZ2V0VmlzaWJsZVBhcmVudChsYXllcikgfHwgbGF5ZXI7XG5cbiAgICAvLyByZW5kZXIgdGhlIGljb25cbiAgICBsZXQgaWNvbiA9IEwuZGl2SWNvbih7XG4gICAgICBjbGFzc05hbWU6IGBsZWFmbGV0LWludGVydHdpbmUtbm9kZS1sYWJlbGAsXG4gICAgICBpY29uU2l6ZTogWzAsIDBdLFxuICAgICAgaHRtbCA6ICc8ZGl2PicrdGhpcy5ub2Rlc1tpZF0udGl0bGUrJzwvZGl2PjxkaXYgY2xhc3M9XCJpbnRlcnR3aW5lLWFycm93XCI+PC9kaXY+J1xuICAgIH0pO1xuICAgIHRoaXMuc2VsZWN0ZWROb2RlSWNvblt0eXBlXSA9IEwubWFya2VyKGxheWVyLmdldExhdExuZygpLCB7aWNvbn0pO1xuICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMuc2VsZWN0ZWROb2RlSWNvblt0eXBlXSk7XG4gICAgdGhpcy5zZWxlY3RlZE5vZGVJY29uW3R5cGVdLnNldFpJbmRleE9mZnNldCg1MDAwKTtcblxuICAgIC8vIHdlIG5lZWQgdG8gbGV0IHRoZSBtYXJrZXIgcmVuZGVyIHNvIHdlIGNhbiBhZGp1c3QgdGhlIGxlZnQgb2Zmc2V0IGJhc2VkIFxuICAgIC8vIG9uIHRoZSBtYXJrZXIgd2lkdGguICBXZSB3aWxsIGRvIGEgbGl0dGxlIGJpdCBvZiBhZGRpdGlvbmFsIGNzcyB3b3JrIGFzIHdlbGxcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgLy8gc2hvdWxkIHRoZSBsYWJlbCBiZSBzZXQgdG8gYm90dG9tIG9mIG1hcmtlcj9cbiAgICAgIC8vIGNoZWNrIHRoZSB0d28gc2VsZWN0ZWQgbm9kZXMgYW5kIHNlZSB3aGljaCBoYXMgYSBoaWdoZXIgbGF0XG4gICAgICBsZXQgYm90dG9tID0gZmFsc2U7IFxuICAgICAgZm9yKCBsZXQga2V5IGluIHRoaXMuc2VsZWN0ZWROb2RlSWNvbiApIHtcbiAgICAgICAgaWYoIGtleSA9PT0gdHlwZSApIGNvbnRpbnVlO1xuICAgICAgICBpZiggdGhpcy5zZWxlY3RlZE5vZGVMYXllcltrZXldLmdldExhdExuZygpLmxhdCA+IHRoaXMuc2VsZWN0ZWROb2RlTGF5ZXJbdHlwZV0uZ2V0TGF0TG5nKCkubGF0ICkge1xuICAgICAgICAgIGJvdHRvbSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gZ3JhYiB0aGUgdHdvIGRpdidzIGFuZCBzZXR1cCBsb2NhdGlvbiBjbGFzc2VzXG4gICAgICBsZXQgbWFya2VyRWxlID0gdGhpcy5zZWxlY3RlZE5vZGVJY29uW3R5cGVdLmdldEVsZW1lbnQoKS5maXJzdENoaWxkO1xuICAgICAgbGV0IGFycm93ID0gdGhpcy5zZWxlY3RlZE5vZGVJY29uW3R5cGVdLmdldEVsZW1lbnQoKS5jaGlsZHJlblsxXTtcbiAgICAgIGlmKCBib3R0b20gKSB7XG4gICAgICAgIG1hcmtlckVsZS5jbGFzc0xpc3QuYWRkKCdib3R0b20nKTtcbiAgICAgICAgYXJyb3cuY2xhc3NMaXN0LmFkZCgnYm90dG9tJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXJrZXJFbGUuY2xhc3NMaXN0LmFkZCgndG9wJyk7XG4gICAgICAgIGFycm93LmNsYXNzTGlzdC5hZGQoJ3RvcCcpO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGUgcG9pbnQgbWFya2VycyBoYXZlIGluZXJ0V2luZUlkc1xuICAgICAgLy8gdGhlc2UgaGF2ZSBkaWZmZXJlbnQgbGFiZWwgdG9wL2JvdHRvbSBvZmZzZXRzIGJhc2VkIG9uIGNsdXN0ZXIgdnMgcG9pbnRcbiAgICAgIGlmKCBsYXllci5pbmVydFdpbmVJZCApIHtcbiAgICAgICAgbWFya2VyRWxlLmNsYXNzTGlzdC5hZGQoJ3BvaW50Jyk7XG4gICAgICAgIGFycm93LmNsYXNzTGlzdC5hZGQoJ3BvaW50Jyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCB0aGUgbGVmdCB0byB0aGUgbWlkcG9pbnQgb2YgbGFiZWwgd2lkdGhcbiAgICAgIGxldCB3ID0gbWFya2VyRWxlLm9mZnNldFdpZHRoO1xuICAgICAgaWYoIHcgPiAxNTAgKSB7XG4gICAgICAgIG1hcmtlckVsZS5jbGFzc0xpc3QuYWRkKCdmaXhlZC13aWR0aCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWFya2VyRWxlLnN0eWxlLmxlZnQgPSAoLTEqKHcvMikpKydweCc7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lIHNlbGVjdGVkIG5vZGUgYW5kIGl0IGlzIG5vdCBpbiB2aWV3LCBzZXQgdG8gY2VudGVyXG4gICAgICBpZiggT2JqZWN0LmtleXModGhpcy5zZWxlY3RlZE5vZGVJY29uKS5sZW5ndGggPT09IDEgKSB7XG4gICAgICAgIGlmKCBmaXJzdFJlbmRlciB8fCAhdGhpcy5tYXAuZ2V0Qm91bmRzKCkuY29udGFpbnModGhpcy5zZWxlY3RlZE5vZGVJY29uLnNyYy5nZXRMYXRMbmcoKSkgKSB7XG4gICAgICAgICAgdGhpcy5zZXRWaWV3KHRoaXMuc2VsZWN0ZWROb2RlSWNvbi5zcmMuZ2V0TGF0TG5nKCksIHRoaXMubWFwLmdldFpvb20oKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9nZXRNaWRQb2ludFxuICAgKiBAZGVzY3JpcHRpb24gZ2V0IHRoZSBtaWRwb2ludCBmb3IgYSBsaW5lIGJ5IGZpbmRpbmcgdGhlIHNjcmVlbiAoeCwgeSkgbWlkcG9pbnRcbiAgICogdGhlbiBjb252ZXJ0aW5nIHRvIGxhdC9sbmcuICBUaGlzIGlzIGhvdyBsaW5lcyBhcmUgcmVuZGVyZWQgYW5kIHdlIG5lZWQgdGhlIFxuICAgKiBsYWJlbCBiYXNlZCBvbiB0aGF0IG90aGVyd2lzZSBpdCBtYXkgbG9vayBvZmYgd2hlbiBsYWJlbHMgYXJlIGZhciBhcGFydC5cbiAgICogXG4gICAqIEBwYXJhbSB7Kn0gc3JjbGwgXG4gICAqIEBwYXJhbSB7Kn0gZHN0bGwgXG4gICAqL1xuICBfZ2V0TWlkUG9pbnQoc3JjbGwsIGRzdGxsKSB7XG4gICAgbGV0IHNyY3h5ID0gdGhpcy5tYXAubGF0TG5nVG9Db250YWluZXJQb2ludChzcmNsbCk7XG4gICAgbGV0IGRzdHh5ID0gdGhpcy5tYXAubGF0TG5nVG9Db250YWluZXJQb2ludChkc3RsbCk7XG5cbiAgICBsZXQgeCA9IChkc3R4eS54ICsgc3JjeHkueCkgLyAyO1xuICAgIGxldCB5ID0gKGRzdHh5LnkgKyBzcmN4eS55KSAvIDI7XG5cbiAgICByZXR1cm4gdGhpcy5tYXAuY29udGFpbmVyUG9pbnRUb0xhdExuZyh7eCx5fSk7XG4gIH1cblxuICByZXBvc2l0aW9uU2VsZWN0ZWRMaW5rKCkge1xuICAgIGlmKCAhdGhpcy5zZWxlY3RlZE5vZGVMYXllciB8fCAhdGhpcy5zZWxlY3RlZExpbmVJY29uICkgcmV0dXJuO1xuICAgIGxldCBsbCA9IHRoaXMuX2dldE1pZFBvaW50KFxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVJY29uLnNyYy5nZXRMYXRMbmcoKSxcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlSWNvbi5kc3QuZ2V0TGF0TG5nKClcbiAgICApO1xuICAgIHRoaXMuc2VsZWN0ZWRMaW5lSWNvbi5zZXRMYXRMbmcobGwpO1xuICB9XG5cbiAgcmVwb3NpdGlvblNlbGVjdGVkTm9kZSgpIHtcbiAgICBpZiggIXRoaXMuc2VsZWN0ZWROb2RlTGF5ZXIgfHwgIXRoaXMuc2VsZWN0ZWROb2RlSWNvbiApIHJldHVybjtcbiAgICBmb3IoIGxldCB0eXBlIGluIHRoaXMuc2VsZWN0ZWROb2RlTGF5ZXIgKSB7XG4gICAgICBsZXQgbGF5ZXIgPSB0aGlzLmNsdXN0ZXJzLmdldFZpc2libGVQYXJlbnQodGhpcy5zZWxlY3RlZE5vZGVMYXllclt0eXBlXSkgfHwgdGhpcy5zZWxlY3RlZE5vZGVMYXllclt0eXBlXTtcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlSWNvblt0eXBlXS5zZXRMYXRMbmcobGF5ZXIuZ2V0TGF0TG5nKCkpO1xuXG4gICAgICBpZiggbGF5ZXIuaW5lcnRXaW5lSWQgKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWROb2RlSWNvblt0eXBlXS5nZXRFbGVtZW50KCkuZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdwb2ludCcpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkTm9kZUljb25bdHlwZV0uZ2V0RWxlbWVudCgpLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC5hZGQoJ3BvaW50Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGVkTm9kZUljb25bdHlwZV0uZ2V0RWxlbWVudCgpLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgncG9pbnQnKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE5vZGVJY29uW3R5cGVdLmdldEVsZW1lbnQoKS5jaGlsZHJlblsxXS5jbGFzc0xpc3QucmVtb3ZlKCdwb2ludCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNlbGVjdENsdXN0ZXIobGF0bG5nLCB6b29tKSB7XG4gICAgaWYoIHRoaXMuZmlyc3RSZW5kZXIgKSB7XG4gICAgICB0aGlzLnNldFZpZXcobGF0bG5nLCB6b29tKTtcblxuICAgICAgaWYoIHRoaXMubWFwICkge1xuICAgICAgICBpZiggdGhpcy5jbHVzdGVycy5nZXRMYXllcnMoKS5sZW5ndGggPT09IDAgKSB7XG4gICAgICAgICAgdGhpcy5wZW5kaW5nQ2x1c3RlclNlbGVjdCA9IHtsYXRsbmcsIHpvb219O1xuICAgICAgICAgIHJldHVybjsgLy8gdGhpcyB3aWxsIGdldCBmaXJlZCBvbiBhZ2FpbiBvbiBmaXJzdFVwZGF0ZVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBlbmRpbmdDbHVzdGVyU2VsZWN0ID0ge2xhdGxuZywgem9vbX07XG4gICAgICAgIHJldHVybjsgLy8gdGhpcyB3aWxsIGdldCBmaXJlZCBvbiBhZ2FpbiBvbiBmaXJzdFVwZGF0ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBjbHVzdGVyTWFya2VycyA9IHRoaXMuY2x1c3RlcnMuX2ZlYXR1cmVHcm91cC5nZXRMYXllcnMoKTtcbiAgICBsZXQgY2xvc2VzdCA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgIGxldCBzZWxlY3RlZENsdXN0ZXIgPSBudWxsO1xuXG4gICAgZm9yKCBsZXQgbGF5ZXIgb2YgY2x1c3Rlck1hcmtlcnMgKSB7XG4gICAgICAvLyBIQUNLLiAgSXMgdGhlcmUgYmV0dGVyIHR5cGUgY2hlY2tpbmcgZm9yIHRoaXM/XG4gICAgICBpZiggbGF5ZXIuaW5lcnRXaW5lSWQgKSBjb250aW51ZTtcbiAgICAgIGlmKCAhbGF5ZXIuX2dyb3VwICkgY29udGludWU7XG5cbiAgICAgIGxldCBsbCA9IGxheWVyLmdldEJvdW5kcygpLmdldENlbnRlcigpO1xuICAgICAgbGV0IGRpc3QgPSBNYXRoLmFicyhsbC5sYXQgLSBsYXRsbmdbMF0pICsgTWF0aC5hYnMobGwubG5nIC0gbGF0bG5nWzFdKTtcbiAgICAgIGlmKCBjbG9zZXN0ID4gZGlzdCApIHtcbiAgICAgICAgc2VsZWN0ZWRDbHVzdGVyID0gbGF5ZXI7XG4gICAgICAgIGNsb3Nlc3QgPSBkaXN0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCAhc2VsZWN0ZWRDbHVzdGVyICkgcmV0dXJuIGNvbnNvbGUud2Fybignbm8gY2x1c3RlcnMgZm91bmQgdG8gc2VsZWN0ZWQnKTtcbiAgXG4gICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3RlZC1jbHVzdGVyLWlkcycsIHtcbiAgICAgIGRldGFpbDogc2VsZWN0ZWRDbHVzdGVyLmdldEFsbENoaWxkTWFya2VycygpLm1hcChsID0+IGwuaW5lcnRXaW5lSWQpXG4gICAgfSlcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgb25DbHVzdGVyQ2xpY2tlZFxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gY2x1c3RlciBjbGljayBldmVudFxuICAgKi9cbiAgb25DbHVzdGVyQ2xpY2tlZChlKSB7XG4gICAgbGV0IGNlbnRlciA9IGUubGF5ZXIuZ2V0Qm91bmRzKCkuZ2V0Q2VudGVyKCk7XG4gICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdjbHVzdGVyLWNsaWNrJywge2RldGFpbCA6IHtcbiAgICAgIGxhdExuZyA6IFtwYXJzZUZsb2F0KGNlbnRlci5sYXQudG9GaXhlZCg0KSksIHBhcnNlRmxvYXQoY2VudGVyLmxuZy50b0ZpeGVkKDQpKV0sXG4gICAgICB6b29tIDogdGhpcy5tYXAuZ2V0Wm9vbSgpXG4gICAgfX0pO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBvbk5vZGVDbGlja2VkXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byBtYXAgbWFya2VyIGNsaWNrIGV2ZW50c1xuICAgKi9cbiAgb25Ob2RlQ2xpY2tlZChlKSB7XG4gICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdub2RlLWNsaWNrJywge2RldGFpbCA6IHtcbiAgICAgIGlkIDogZS50YXJnZXQuaW5lcnRXaW5lSWRcbiAgICB9fSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIG9uTGlua0NsaWNrZWQoZSkge1xuICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnbGluay1jbGljaycsIHtkZXRhaWwgOiB7XG4gICAgICBpZCA6IGUubGF5ZXIuaW5lcnRXaW5lSWRcbiAgICB9fSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHNldERhdGFcbiAgICogQGRlc2NyaXB0aW9uIHNldCBub2RlL2xpbmsgZGF0YSwgcmVuZGVyIG1hcFxuICAgKi9cbiAgc2V0RGF0YShkYXRhKSB7XG4gICAgdGhpcy5ub2RlcyA9IGRhdGEubm9kZXM7XG4gICAgdGhpcy5ub2RlTGF5ZXJzID0ge307XG4gICAgdGhpcy5saW5rcyA9IGRhdGEubGlua3M7XG5cbiAgICB0aGlzLmNsdXN0ZXJzLmNsZWFyTGF5ZXJzKCk7XG5cbiAgICBmb3IoIGxldCBpZCBpbiBkYXRhLm5vZGVzICkge1xuICAgICAgbGV0IGljb24gPSBMLmRpdkljb24oe1xuICAgICAgICBjbGFzc05hbWU6IGBsZWFmbGV0LWludGVydHdpbmUtaWNvbiBsZWFmbGV0LSR7ZGF0YS5ub2Rlc1tpZF0udHlwZX0taWNvbmAsXG4gICAgICAgIGljb25TaXplOiBbMTUsIDE1XVxuICAgICAgfSk7XG4gICAgICBsZXQgbGF5ZXIgPSBMLm1hcmtlcihkYXRhLm5vZGVzW2lkXS5jb29yZGluYXRlcywge2ljb259KTtcblxuICAgICAgbGF5ZXIub24oJ2NsaWNrJywgZSA9PiB0aGlzLm9uTm9kZUNsaWNrZWQoZSkpO1xuICAgICAgbGF5ZXIuaW5lcnRXaW5lSWQgPSBpZDtcbiAgICAgIHRoaXMubm9kZUxheWVyc1tpZF0gPSBsYXllcjtcbiAgICAgIHRoaXMuY2x1c3RlcnMuYWRkTGF5ZXIobGF5ZXIpO1xuICAgIH1cblxuICAgIGlmKCB0aGlzLnBlbmRpbmdDbHVzdGVyU2VsZWN0ICkge1xuICAgICAgdGhpcy5zZWxlY3RDbHVzdGVyKHRoaXMucGVuZGluZ0NsdXN0ZXJTZWxlY3QubGF0bG5nLCB0aGlzLnBlbmRpbmdDbHVzdGVyU2VsZWN0Lnpvb20pO1xuICAgICAgdGhpcy5wZW5kaW5nQ2x1c3RlclNlbGVjdCA9IG51bGw7XG4gICAgfSBlbHNlIGlmKCB0aGlzLnBlbmRpbmdOb2RlU2VsZWN0ICkge1xuICAgICAgZm9yKCBsZXQgdHlwZSBpbiB0aGlzLnBlbmRpbmdOb2RlU2VsZWN0ICkge1xuICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5wZW5kaW5nTm9kZVNlbGVjdFt0eXBlXSwgdHlwZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnBlbmRpbmdOb2RlU2VsZWN0ID0gbnVsbDtcbiAgICB9IGVsc2UgaWYoIHRoaXMucGVuZGluZ0xpbmtTZWxlY3QgKSB7XG4gICAgICB0aGlzLnNlbGVjdExpbmsodGhpcy5wZW5kaW5nTGlua1NlbGVjdCk7XG4gICAgICB0aGlzLnBlbmRpbmdMaW5rU2VsZWN0ID0gbnVsbDtcbiAgICB9IGVsc2UgaWYoIHRoaXMuem9vbVRvQ2x1c3RlcnMgKSB7XG4gICAgICB0aGlzLm1hcC5maXRCb3VuZHModGhpcy5jbHVzdGVycy5nZXRCb3VuZHMoKSk7XG4gICAgICB0aGlzLnpvb21Ub0NsdXN0ZXJzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVMaW5rcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgdXBkYXRlTGlua3NcbiAgICogQGRlc2NyaXB0aW9uIHJlZHJhdyBsaW5rcyBmcm9tIGN1cnJlbnQgY2x1c3RlciBsb2NhdGlvbnMuICBTaG91bGQgYmVcbiAgICogY2FsbGVkIHdoZW5ldmVyIGRhdGEgY2hhbmdlcyBvciBtYXAgem9vbSBsZXZlbCBjaGFuZ2VzXG4gICAqL1xuICB1cGRhdGVMaW5rcygpIHtcbiAgICBpZiggdGhpcy51cGRhdGVMaW5rc1RpbWVyICE9PSAtMSApIGNsZWFyVGltZW91dCh0aGlzLnVwZGF0ZUxpbmtzVGltZXIpO1xuICAgIHRoaXMudXBkYXRlTGlua3NUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVMaW5rc1RpbWVyID0gLTE7XG4gICAgICB0aGlzLl91cGRhdGVMaW5rcygpO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBfdXBkYXRlTGlua3MoKSB7XG4gICAgZm9yKCBsZXQgaWQgaW4gdGhpcy5saW5rTGF5ZXJzICkge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5saW5rTGF5ZXJzW2lkXSk7XG4gICAgfVxuICAgIHRoaXMubGlua0xheWVycyA9IHt9O1xuXG4gICAgZm9yKCBsZXQgaWQgaW4gdGhpcy5saW5rcyApIHtcbiAgICAgIGxldCBpdGVtID0gdGhpcy5saW5rc1tpZF07XG4gICAgICBsZXQgc3JjID0gdGhpcy5nZXRNYXJrZXJMYXRMbmcoaXRlbS5zcmMpO1xuICAgICAgbGV0IGRzdCA9IHRoaXMuZ2V0TWFya2VyTGF0TG5nKGl0ZW0uZHN0KTtcblxuICAgICAgbGV0IHNlbGVjdGVkID0gZmFsc2U7XG4gICAgICBpZiggdGhpcy5zZWxlY3RlZE5vZGVMYXllciAmJiB0aGlzLnNlbGVjdGVkTm9kZUxheWVyLnNyYyAmJiB0aGlzLnNlbGVjdGVkTm9kZUxheWVyLmRzdCApIHtcbiAgICAgICAgaWYoIGl0ZW0uc3JjID09PSB0aGlzLnNlbGVjdGVkTm9kZUxheWVyLnNyYy5pbmVydFdpbmVJZCAmJiBpdGVtLmRzdCA9PT0gdGhpcy5zZWxlY3RlZE5vZGVMYXllci5kc3QuaW5lcnRXaW5lSWQgKSB7XG4gICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBsaWQgPSBzcmMubGF0KyctJytzcmMubG5nKyctJytkc3QubGF0KyctJytkc3QubG5nO1xuICAgICAgaWYoIHRoaXMubGlua0xheWVyc1tsaWRdICkge1xuICAgICAgICBpZiggc2VsZWN0ZWQgJiYgIXRoaXMubGlua0xheWVyc1tsaWRdLnNlbGVjdGVkICkge1xuICAgICAgICAgIHRoaXMubGlua0xheWVyc1tsaWRdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmxpbmtMYXllcnNbbGlkXS5zZXRTdHlsZSh7b3BhY2l0eTogMSwgd2VpZ2h0OiAyfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGlua0xheWVyc1tsaWRdID0gTC5wb2x5bGluZShbc3JjLCBkc3RdLCB7XG4gICAgICAgIGNvbG9yOiB0aGlzLmxpbmVDb2xvcixcbiAgICAgICAgd2VpZ2h0OiBzZWxlY3RlZCA/IDI6IDEsXG4gICAgICAgIG9wYWNpdHkgOiBzZWxlY3RlZCA/IDEgOiAwLjNcbiAgICAgIH0pLmFkZFRvKHRoaXMubWFwKTtcbiAgICAgIHRoaXMubGlua0xheWVyc1tsaWRdLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgfVxuICB9XG5cbiAgc2V0VmlldyhsYXRsbmcsIHpvb20pIHtcbiAgICBpZiggdGhpcy5tYXAgKSB7XG5cbiAgICAgIC8vIGFkanVzdCBjZW50ZXIgYnkgNTAwIHB4XG4gICAgICAvLyBpZiggdGhpcy5pbmZvT3BlbiApIHtcbiAgICAgIC8vICAgbGF0bG5nID0gdGhpcy5tYXAubGF0TG5nVG9Db250YWluZXJQb2ludChsYXRsbmcpO1xuICAgICAgLy8gICBsYXRsbmcueCAtPSA0MDA7XG4gICAgICAvLyAgIGxhdGxuZyA9IHRoaXMubWFwLmNvbnRhaW5lclBvaW50VG9MYXRMbmcobGF0bG5nKTtcbiAgICAgIC8vIH1cblxuICAgICAgdGhpcy5tYXAuc2V0VmlldyhsYXRsbmcsIHpvb20sIHthbmltYXRlOiBmYWxzZX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBlbmRpbmdWaWV3ID0ge2xhdGxuZywgem9vbX07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZ2V0TWFya2VyTGF0TG5nXG4gICAqIEBkZXNjcmlwdGlvbiBnaXZlbiBhIG5vZGUgaWQsIGZpbmQgdGhlIGxhdC9sbmcgZm9yIHRoZSBub2RlIHJlcHJlc2VudGF0aW9uLlxuICAgKiBUaGlzIGNvdWxkIGJlIHRoZSBub2RlIGl0c2VsZiBvciBpdCdzIGNvbnRhaW5pbmcgY2x1c3RlclxuICAgKi9cbiAgZ2V0TWFya2VyTGF0TG5nKGlkKSB7XG4gICAgbGV0IGNsdXN0ZXJMYXllciA9IHRoaXMuY2x1c3RlcnMuZ2V0VmlzaWJsZVBhcmVudCh0aGlzLm5vZGVMYXllcnNbaWRdKTtcbiAgICBpZiggY2x1c3RlckxheWVyICkgcmV0dXJuIGNsdXN0ZXJMYXllci5nZXRMYXRMbmcoKTtcbiAgICByZXR1cm4gTC5sYXRMbmcodGhpcy5ub2Rlc1tpZF0uY29vcmRpbmF0ZXMpO1xuICB9XG5cblxuICB1cGRhdGVkKHByb3BzKSB7XG4gICAgaWYoIHByb3BzLmhhcygnYWN0aXZlJykgJiYgdGhpcy5hY3RpdmUgKSB7XG4gICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHJlZHJhd1xuICAgKiBAZGVzY3JpcHRpb24gYnVmZmVyZWQgY2FsbCB0byBtYXAuaW52YWxpZGF0ZVNpemUoKTtcbiAgICovXG4gIHJlZHJhdygpIHtcbiAgICBpZiggdGhpcy5yZWRyYXdUaW1lciApIGNsZWFyVGltZW91dCh0aGlzLnJlZHJhd1RpbWVyKTtcbiAgICB0aGlzLnJlZHJhd1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJlZHJhd1RpbWVyID0gLTE7XG4gICAgICB0aGlzLnJlZHJhd05vdygpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcmVkcmF3Tm93XG4gICAqIEBkZXNjcmlwdGlvbiBjYWxsIHRvIG1hcC5pbnZhbGlkYXRlU2l6ZSgpO1xuICAgKi9cbiAgcmVkcmF3Tm93KHhPZmZzZXQpIHtcbiAgICBpZiggIXRoaXMubWFwICkgcmV0dXJuIGNvbnNvbGUud2FybignYXR0ZW1wdGluZyB0byByZWRyYXcgbWFwLCBidXQgbWFwIG5vdCBpbml0aWFsaXplZCcpO1xuICAgIHRoaXMubWFwLmludmFsaWRhdGVTaXplKHtwYW46IGZhbHNlfSk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1sZWFmbGV0LW1hcCcsIEFwcExlYWZsZXRNYXApO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCBsZWFmbGV0Q3NzIGZyb20gXCJsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3NcIlxuaW1wb3J0IG1hcmtlckNsdXN0ZXJDc3MgZnJvbSBcImxlYWZsZXQubWFya2VyY2x1c3Rlci9kaXN0L01hcmtlckNsdXN0ZXIuY3NzXCJcbmltcG9ydCBtYXJrZXJDbHVzdGVyRGVmYXVsdENzcyBmcm9tIFwibGVhZmxldC5tYXJrZXJjbHVzdGVyL2Rpc3QvTWFya2VyQ2x1c3Rlci5EZWZhdWx0LmNzc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHsgXG5yZXR1cm4gaHRtbGBcblxuPHN0eWxlPlxuJHtsZWFmbGV0Q3NzfVxuJHttYXJrZXJDbHVzdGVyQ3NzfVxuJHttYXJrZXJDbHVzdGVyRGVmYXVsdENzc31cbjwvc3R5bGU+XG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gICNtYXAge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5ib3JkZXItdG9wIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIC44KTtcbiAgICB0b3A6IC0xcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGhlaWdodDogMXB4O1xuICB9XG5cbiAgLm1hcmtlci1jbHVzdGVyLXNtYWxsLCAubWFya2VyLWNsdXN0ZXItbWVkaXVtLCAubWFya2VyLWNsdXN0ZXItbGFyZ2UgIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtY29sb3ItY2x1c3Rlci1ibHVlLWFscGhhKTtcbiAgfVxuICAubWFya2VyLWNsdXN0ZXItc21hbGwgZGl2LCAubWFya2VyLWNsdXN0ZXItbWVkaXVtIGRpdiwgLm1hcmtlci1jbHVzdGVyLWxhcmdlIGRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLWNvbG9yLWNsdXN0ZXItYmx1ZSk7XG4gICAgY29sb3I6IHZhcigtLWFwcC1jb2xvci13aGl0ZSlcbiAgfVxuXG4gIC5sZWFmbGV0LWludGVydHdpbmUtaWNvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuXG4gIC5sZWFmbGV0LXBlcnNvbi1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtY29sb3Itc2NhcmxldCk7IFxuICB9XG4gIC5sZWFmbGV0LXBsYWNlLWljb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1jb2xvci12aW5lKTsgXG4gIH1cbiAgLmxlYWZsZXQtZXZlbnQtaWNvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLWNvbG9yLXJvc2UpOyBcbiAgfVxuICAubGVhZmxldC1vYmplY3QtaWNvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLWNvbG9yLWdyYXBlKTsgXG4gIH1cblxuICAuaW50ZXJ0d2luZS1hcnJvdyB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDVweCAyNXB4IDVweDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHZhcigtLWFwcC1jb2xvci1jaGFyY29hbCkgdHJhbnNwYXJlbnQ7XG4gICAgdG9wOiAxMnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDAwMTtcbiAgICBsZWZ0OiAtNXB4O1xuICB9XG4gIC5pbnRlcnR3aW5lLWFycm93LnRvcCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICBib3R0b206IDEycHg7XG4gICAgdG9wOiBpbml0aWFsO1xuICB9XG4gIC5pbnRlcnR3aW5lLWFycm93LnRvcC5wb2ludCB7XG4gICAgYm90dG9tOiA2cHg7XG4gIH1cbiAgLmludGVydHdpbmUtYXJyb3cuYm90dG9tLnBvaW50IHtcbiAgICB0b3A6IDZweDtcbiAgfVxuXG4gIC5sZWFmbGV0LWludGVydHdpbmUtbm9kZS1sYWJlbCA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgY29sb3I6IHZhcigtLWFwcC1jb2xvci13aGl0ZSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLWNvbG9yLWNoYXJjb2FsKTtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIC5sZWFmbGV0LWludGVydHdpbmUtbm9kZS1sYWJlbCA+IGRpdi5maXhlZC13aWR0aDpmaXJzdC1jaGlsZCB7XG4gICAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGxlZnQ6IC04M3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5sZWFmbGV0LWludGVydHdpbmUtbm9kZS1sYWJlbCA+IGRpdi50b3A6Zmlyc3QtY2hpbGQge1xuICAgIGJvdHRvbTogMzRweDtcbiAgfVxuICAubGVhZmxldC1pbnRlcnR3aW5lLW5vZGUtbGFiZWwgPiBkaXYudG9wLnBvaW50OmZpcnN0LWNoaWxkIHtcbiAgICBib3R0b206IDI4cHg7XG4gIH1cblxuICAubGVhZmxldC1pbnRlcnR3aW5lLW5vZGUtbGFiZWwgPiBkaXYuYm90dG9tOmZpcnN0LWNoaWxkIHtcbiAgICB0b3AgOiAzMnB4O1xuICB9XG4gIC5sZWFmbGV0LWludGVydHdpbmUtbm9kZS1sYWJlbCA+IGRpdi5ib3R0b20ucG9pbnQ6Zmlyc3QtY2hpbGQge1xuICAgIHRvcCA6IDI2cHg7XG4gIH1cblxuICAubGVhZmxldC1pbnRlcnR3aW5lLWNvbm5lY3Rpb24tbGFiZWwgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgIGNvbG9yOiB2YXIoLS1hcHAtY29sb3Itd2hpdGUpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1jb2xvci1pbnRlcmZhY2UtYmx1ZSk7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBsZWZ0OiAtNDJweDtcbiAgICB0b3A6IC0xNnB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIH1cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJib3JkZXItdG9wXCI+PC9kaXY+XG48ZGl2IGlkPVwibWFwXCI+PC9kaXY+XG5cbmA7fSIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL2FwcC1tYXAtaW5mby1wYW5lbC50cGwuanNcIlxuaW1wb3J0IHttYXJrZG93bn0gZnJvbSBcIm1hcmtkb3duXCJcblxuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcE1hcEluZm9QYW5lbCBleHRlbmRzIE1peGluKExpdEVsZW1lbnQpXG4gIC53aXRoKExpdENvcmtVdGlscykge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BlbiA6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG1vbWVudCA6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgbW9tZW50SW5mbyA6IHt0eXBlOiBPYmplY3R9LFxuICAgICAgbW9tZW50RW50cnlQb2ludFVybCA6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgdHlwZSA6IHt0eXBlIDogU3RyaW5nfSxcbiAgICAgIHNyY3R5cGUgOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIGRzdHR5cGUgOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIHZpZXcgOiB7dHlwZSA6IFN0cmluZ30sXG4gICAgICB0aXRsZSA6IHt0eXBlIDogU3RyaW5nfSxcbiAgICAgIGRhdGUgOiB7dHlwZSA6IFN0cmluZ30sXG4gICAgICBjb25uZWN0aW9ucyA6IHt0eXBlOiBBcnJheX0sXG4gICAgICBpc05vZGUgOiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICBpc0xpbmsgOiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICBpc01vbWVudCA6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGNvbm5lY3Rpb25TdWJqZWN0cyA6IHt0eXBlOiBBcnJheX0sXG4gICAgICBjbHVzdGVyU3ViamVjdHMgOiB7dHlwZTogT2JqZWN0fSxcbiAgICAgIGNsdXN0ZXJTdWJqZWN0VHlwZXMgOiB7dHlwZTogQXJyYXl9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBcbiAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgIHRoaXMuZGF0ZSA9ICcnO1xuICAgIHRoaXMudmlldyA9ICcnO1xuICAgIHRoaXMudHlwZSA9ICcnO1xuICAgIHRoaXMuc3JjdHlwZSA9ICcnO1xuICAgIHRoaXMuZHN0dHlwZSA9ICcnO1xuICAgIHRoaXMuY29ubmVjdGlvbnMgPSBbXTtcbiAgICB0aGlzLmlzTGluayA9IGZhbHNlO1xuICAgIHRoaXMuaXNOb2RlID0gZmFsc2U7XG4gICAgdGhpcy5pc01vbWVudCA9IGZhbHNlO1xuICAgIHRoaXMubW9tZW50ID0gJyc7XG4gICAgdGhpcy5tb21lbnRJbmZvID0ge307XG4gICAgdGhpcy5tb21lbnRFbnRyeVBvaW50VXJsID0gJyc7XG5cbiAgICB0aGlzLmNvbm5lY3Rpb25TdWJqZWN0cyA9IFtdO1xuICAgIHRoaXMuY2x1c3RlclN1YmplY3RUeXBlcyA9IFsncGVyc29uJywgJ3BsYWNlJywgJ29iamVjdCcsICdldmVudCddO1xuICAgIHRoaXMucmVzZXRDbHVzdGVyU3ViamVjdHMoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ0FwcFN0YXRlTW9kZWwnLCAnTW9tZW50TW9kZWwnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbk1vbWVudEdyYXBoVXBkYXRlXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byBncmFwaC11cGRhdGUgZXZlbnRzIGZyb20gdGhlIE1vbWVudE1vZGVsXG4gICAqIFxuICAgKiBAcGFyYW0geyp9IGUgXG4gICAqL1xuICBfb25Nb21lbnRHcmFwaFVwZGF0ZShlKSB7XG4gICAgaWYoIGUuc3RhdGUgIT09ICdsb2FkZWQnICkgcmV0dXJuO1xuICAgIHRoaXMucmVuZGVyU3RhdGUoZS5wYXlsb2FkKTtcbiAgfVxuXG4gIF9vbkFwcFN0YXRlVXBkYXRlKGUpIHtcbiAgICB0aGlzLm1vbWVudCA9IGUubW9tZW50O1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBlLnNlbGVjdGVkO1xuICAgIHRoaXMucmVuZGVyU3RhdGUoKTtcbiAgfVxuXG4gIGZpcnN0VXBkYXRlZCgpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uRWxlID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuICAgIHRoaXMubW9tZW50RGVzY0VsZSA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjbW9tZW50RGVzY3JpcHRpb24nKTtcbiAgfVxuXG4gIHJlbmRlclN0YXRlKG1vbWVudCkge1xuICAgIGlmKCBtb21lbnQgKSB7XG4gICAgICB0aGlzLm1vbWVudEluZm8gPSBtb21lbnQ7XG4gICAgICB0aGlzLm1vbWVudERlc2NFbGUuaW5uZXJIVE1MID0gbWFya2Rvd24udG9IVE1MKG1vbWVudC5kZXNjcmlwdGlvbiB8fCAnJyk7XG5cbiAgICAgIHRoaXMubW9tZW50RW50cnlQb2ludFVybCA9ICcnO1xuICAgICAgaWYoIG1vbWVudC5lbnRyeVBvaW50ICkge1xuICAgICAgICBmb3IoIGxldCBpZCBpbiBtb21lbnQuZ3JhcGgubm9kZXMgKSB7XG4gICAgICAgICAgbGV0IG5vZGUgPSBtb21lbnQuZ3JhcGgubm9kZXNbaWRdO1xuICAgICAgICAgIGlmKCBub2RlLmlkICE9PSBtb21lbnQuZW50cnlQb2ludCApIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMubW9tZW50RW50cnlQb2ludFVybCA9IGAvbWFwLyR7dGhpcy5tb21lbnR9LyR7bm9kZS50eXBlfS8ke25vZGUuaWR9YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmdyYXBoID0gbW9tZW50LmdyYXBoO1xuICAgIH1cblxuICAgIHRoaXMuaXNMaW5rID0gZmFsc2U7XG4gICAgdGhpcy5pc05vZGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzTW9tZW50ID0gZmFsc2U7XG5cbiAgICBpZiggIXRoaXMuc2VsZWN0ZWQgKSB7XG4gICAgICB0aGlzLnJlbmRlckVtcHR5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKCAhdGhpcy5ncmFwaCApIHJldHVybjtcbiAgICBcbiAgICB0aGlzLnR5cGUgPSB0aGlzLnNlbGVjdGVkLnR5cGU7XG5cbiAgICBpZiggdGhpcy50eXBlID09PSAnY2x1c3RlcicgKSB7XG4gICAgICBpZiggdGhpcy5zZWxlY3RlZC5pZHMgKSB7XG4gICAgICAgIHRoaXMucmVuZGVyQ2x1c3Rlcih0aGlzLnNlbGVjdGVkLmlkcy5tYXAoaWQgPT4gdGhpcy5ncmFwaC5ub2Rlc1tpZF0pKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYoIHRoaXMudHlwZSA9PT0gJ2Nvbm5lY3Rpb24nICkge1xuICAgICAgdGhpcy5pc0xpbmsgPSB0cnVlO1xuICAgICAgdGhpcy5yZW5kZXJJdGVtKHRoaXMuZ3JhcGgubGlua3NbdGhpcy5zZWxlY3RlZC5pZF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzTm9kZSA9IHRydWU7XG4gICAgICB0aGlzLnJlbmRlckl0ZW0odGhpcy5ncmFwaC5ub2Rlc1t0aGlzLnNlbGVjdGVkLmlkXSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyRW1wdHkoKSB7XG4gICAgaWYoICF0aGlzLm1vbWVudCApIHtcbiAgICAgIHRoaXMudmlldyA9ICdlbXB0eSdcbiAgICAgIHRoaXMudHlwZSA9ICdlbXB0eSc7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gJ21vbWVudCc7XG4gICAgdGhpcy52aWV3ID0gJ21vbWVudCc7XG4gICAgdGhpcy5pc01vbWVudCA9IHRydWU7XG4gIH1cblxuICByZW5kZXJDbHVzdGVyKG5vZGVzKSB7XG4gICAgdGhpcy52aWV3ID0gJ2NsdXN0ZXInO1xuICAgIHRoaXMucmVzZXRDbHVzdGVyU3ViamVjdHMoKTtcbiAgICBcbiAgICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgaWYoICF0aGlzLmNsdXN0ZXJTdWJqZWN0c1tub2RlLnR5cGVdICkgcmV0dXJuO1xuICAgICAgdGhpcy5jbHVzdGVyU3ViamVjdHNbbm9kZS50eXBlXS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2x1c3RlclN1YmplY3RzW25vZGUudHlwZV0ubm9kZXMucHVzaChub2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckl0ZW0obm9kZSkge1xuICAgIHRoaXMudmlldyA9ICdpdGVtJ1xuXG4gICAgdGhpcy50aXRsZSA9IG5vZGUudGl0bGUgfHwgJyc7XG4gICAgdGhpcy5sb2NhdGlvbiA9IG5vZGUubG9jYXRpb24gfHwgJyc7XG4gICAgdGhpcy5kYXRlID0gbm9kZS5kYXRlIHx8ICcnO1xuICAgIHRoaXMuZGVzY3JpcHRpb25FbGUuaW5uZXJIVE1MID0gbWFya2Rvd24udG9IVE1MKG5vZGUuZGVzY3JpcHRpb24gfHwgJycpO1xuXG4gICAgaWYoIG5vZGUudHlwZSA9PT0gJ2Nvbm5lY3Rpb24nICkge1xuICAgICAgdGhpcy5jb25uZWN0aW9uU3ViamVjdHMgPSBbXG4gICAgICAgIHRoaXMuZ3JhcGgubm9kZXNbbm9kZS5zcmNdLFxuICAgICAgICB0aGlzLmdyYXBoLm5vZGVzW25vZGUuZHN0XVxuICAgICAgXTtcbiAgICAgIHRoaXMuc3JjdHlwZSA9IHRoaXMuY29ubmVjdGlvblN1YmplY3RzWzBdLnR5cGU7XG4gICAgICB0aGlzLmRzdHR5cGUgPSB0aGlzLmNvbm5lY3Rpb25TdWJqZWN0c1sxXS50eXBlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmaW5kIGNvbm5lY3Rpb25zXG4gICAgICBsZXQgY29ubmVjdGlvbnMgPSBbXTtcbiAgICAgIGxldCBsaW5rO1xuICAgICAgZm9yKCBsZXQgaWQgaW4gdGhpcy5ncmFwaC5saW5rcyApIHtcbiAgICAgICAgbGluayA9IHRoaXMuZ3JhcGgubGlua3NbaWRdO1xuICAgICAgICBpZiggbGluay5zcmMgPT09IG5vZGUuaWQgKSB7XG4gICAgICAgICAgY29ubmVjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICBsaW5rLFxuICAgICAgICAgICAgbm9kZSA6IHRoaXMuZ3JhcGgubm9kZXNbbGluay5kc3RdXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIGxpbmsuZHN0ID09PSBub2RlLmlkICkge1xuICAgICAgICAgIGNvbm5lY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgbGluayxcbiAgICAgICAgICAgIG5vZGUgOiB0aGlzLmdyYXBoLm5vZGVzW2xpbmsuc3JjXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbm5lY3Rpb25zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgaWYoIGEubm9kZS50aXRsZSA8IGIubm9kZS50aXRsZSApIHJldHVybiAtMTtcbiAgICAgICAgaWYoIGEubm9kZS50aXRsZSA+IGIubm9kZS50aXRsZSApIHJldHVybiAxO1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuY29ubmVjdGlvbnMgPSBjb25uZWN0aW9ucztcbiAgICB9XG5cbiAgfVxuXG4gIHJlbmRlckxpbmsobm9kZSkge1xuICAgIHRoaXMudHlwZSA9ICdpdGVtJ1xuICAgIHRoaXMudGl0bGUgPSBub2RlLnRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb25FbGUuaW5uZXJIVE1MID0gbWFya2Rvd24udG9IVE1MKG5vZGUuZGVzY3JpcHRpb24gfHwgJycpO1xuICB9XG5cbiAgcmVzZXRDbHVzdGVyU3ViamVjdHMoKSB7XG4gICAgdGhpcy5jbHVzdGVyU3ViamVjdHMgPSB7XG4gICAgICBwZXJzb24gOiB7XG4gICAgICAgIGVuYWJsZWQgOiBmYWxzZSxcbiAgICAgICAgbGFiZWwgOiAnUGVvcGxlJyxcbiAgICAgICAgbm9kZXMgOiBbXVxuICAgICAgfSxcbiAgICAgIHBsYWNlIDoge1xuICAgICAgICBlbmFibGVkIDogZmFsc2UsXG4gICAgICAgIGxhYmVsIDogJ1BsYWNlcycsXG4gICAgICAgIG5vZGVzIDogW11cbiAgICAgIH0sXG4gICAgICBvYmplY3QgOiB7XG4gICAgICAgIGVuYWJsZWQgOiBmYWxzZSxcbiAgICAgICAgbGFiZWwgOiAnT2JqZWN0cycsXG4gICAgICAgIG5vZGVzIDogW11cbiAgICAgIH0sXG4gICAgICBldmVudCA6IHtcbiAgICAgICAgZW5hYmxlZCA6IGZhbHNlLFxuICAgICAgICBsYWJlbCA6ICdFdmVudHMnLFxuICAgICAgICBub2RlcyA6IFtdXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uVG9nZ2xlS2V5VXBcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIHRvZ2dsZSBidXR0b24ga2V5LXVwIGV2ZW50XG4gICAqL1xuICBfb25Ub2dnbGVLZXlVcChlKSB7XG4gICAgaWYoIGUud2hpY2ggIT09IDEzICkgcmV0dXJuO1xuICAgIHRoaXMuX2ZpcmVUb2dnbGVFdmVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2ZpcmVUb2dnbGVFdmVudFxuICAgKiBAZGVzY3JpcHRpb24gZmlyZSB0aGUgdG9nZ2xlIGV2ZW50LiAgVGhpcyBpcyBjYWxsZWQgZnJvbVxuICAgKiBfb25Ub2dnbGVLZXlVcCBhbmQgYm91bmQgdG8gY2xpY2sgZXZlbnQgb24gdG9nZ2xlIGJ1dHRvblxuICAgKi9cbiAgX2ZpcmVUb2dnbGVFdmVudCgpIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd0b2dnbGUnKSk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1tYXAtaW5mby1wYW5lbCcsIEFwcE1hcEluZm9QYW5lbCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHNoYXJlZFN0eWxlcyBmcm9tICcuLy4uLy4uL3N0eWxlcy9zaGFyZWQtc3R5bGVzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7IFxucmV0dXJuIGh0bWxgXG5cbiR7c2hhcmVkU3R5bGVzfVxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIC41KTtcbiAgfVxuXG4gIC50b2dnbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1wcmltYXJ5LWNvbG9yKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTM1cHg7XG4gICAgYm90dG9tOiAzNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAvKiAudG9nZ2xlLXNtIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9ICovXG5cbiAgLmNvbnRlbnQge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuY29udGVudFttb21lbnQtdmlld10ge1xuICAgIGNvbG9yOiB2YXIoLS1hcHAtY29sb3Itd2hpdGUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1jb2xvci1pbnRlcmZhY2UtYmx1ZSk7XG4gIH1cblxuICAubW9tZW50LWJyZWFrIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICB9XG5cbiAgI21vbWVudERlc2NyaXB0aW9uIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcbiAgfVxuICAjbW9tZW50RGVzY3JpcHRpb24gcCB7XG4gICAgY29sb3I6IHZhcigtLWFwcC1jb2xvci13aGl0ZSk7XG4gIH1cblxuICAuY29udGVudC1wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAzMHB4IDI1cHg7XG4gIH1cblxuICBoMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG5cbiAgLmltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtY29sb3Itc21va2UpO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5pbWFnZSBpcm9uLWljb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1jb2xvci1zbW9rZSkgIWltcG9ydGFudDtcbiAgICAtLWlyb24taWNvbi1oZWlnaHQ6IDE1MHB4O1xuICAgIC0taXJvbi1pY29uLXdpZHRoOiAxNTBweDtcbiAgfVxuXG4gIC5zdWJqZWN0LXR5cGUge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAjZGVzY3JpcHRpb24gPiBwIHtcbiAgICBwYWRkaW5nOiAxNHB4IDAgMThweCA5O1xuICB9XG5cbiAgLmxvY2F0aW9uLCAuZGF0ZSB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG5cbiAgLnN1Yi10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuY29sb3ItYnJlYWsge1xuICAgIGhlaWdodDogNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIGlyb24taWNvblt0eXBlXSB7XG4gICAgY29sb3I6IHZhcigtLWFwcC1jb2xvci13aGl0ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gIH1cblxuICAuY29sb3ItYnJlYWsgaXJvbi1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1pcm9uLWljb24taGVpZ2h0OiAzOHB4O1xuICAgIC0taXJvbi1pY29uLXdpZHRoOiAzOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIHRvcDogLTIxcHg7XG4gICAgcmlnaHQ6IDMycHg7XG4gICAgY29sb3I6IHZhcigtLWFwcC1jb2xvci13aGl0ZSk7XG4gIH1cblxuICAuZG90IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgd2lkdGg6IDhweDtcbiAgICBtYXJnaW46IDhweCAxNnB4IDhweCA4cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cblxuICAuc3ViamVjdC1sYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuICAuc3ViamVjdC1sYWJlbCBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIH1cblxuICAudHlwZS1jb2xvclt0eXBlPVwiY2x1c3RlclwiXSwgLnR5cGUtY29sb3JbdHlwZT1cImNvbm5lY3Rpb25cIl0ge1xuICAgIGNvbG9yOiB2YXIoLS1hcHAtY29sb3ItaW50ZXJmYWNlLWJsdWUpOyBcbiAgfVxuICAuY29sb3ItYnJlYWtbdHlwZT1cImNsdXN0ZXJcIl0sIGlyb24taWNvblt0eXBlPVwiY2x1c3RlclwiXSxcbiAgLmNvbG9yLWJyZWFrW3R5cGU9XCJjb25uZWN0aW9uXCJdLCBpcm9uLWljb25bdHlwZT1cImNvbm5lY3Rpb25cIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1jb2xvci1pbnRlcmZhY2UtYmx1ZSk7IFxuICB9XG4gIC5pbWFnZVt0eXBlPVwiY2x1c3RlclwiXSB7XG4gICAgaGVpZ2h0OiAyMDBweFxuICB9XG5cbiAgLnR5cGUtY29sb3JbdHlwZT1cInBlcnNvblwiXSB7XG4gICAgY29sb3I6IHZhcigtLWFwcC1jb2xvci1zY2FybGV0KTsgXG4gIH1cbiAgLmNvbG9yLWJyZWFrW3R5cGU9XCJwZXJzb25cIl0sIGlyb24taWNvblt0eXBlPVwicGVyc29uXCJdLCAuZG90W3R5cGU9XCJwZXJzb25cIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1jb2xvci1zY2FybGV0KTsgXG4gIH1cblxuICAudHlwZS1jb2xvclt0eXBlPVwicGxhY2VcIl0ge1xuICAgIGNvbG9yOiB2YXIoLS1hcHAtY29sb3ItdmluZSk7IFxuICB9XG4gIC5jb2xvci1icmVha1t0eXBlPVwicGxhY2VcIl0sIGlyb24taWNvblt0eXBlPVwicGxhY2VcIl0sIC5kb3RbdHlwZT1cInBsYWNlXCJdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtY29sb3ItdmluZSk7IFxuICB9XG5cbiAgLnR5cGUtY29sb3JbdHlwZT1cImV2ZW50XCJdIHtcbiAgICBjb2xvcjogdmFyKC0tYXBwLWNvbG9yLXJvc2UpOyBcbiAgfVxuICAuY29sb3ItYnJlYWtbdHlwZT1cImV2ZW50XCJdLCBpcm9uLWljb25bdHlwZT1cImV2ZW50XCJdLCAuZG90W3R5cGU9XCJldmVudFwiXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLWNvbG9yLXJvc2UpOyBcbiAgfVxuXG4gIC50eXBlLWNvbG9yW3R5cGU9XCJvYmplY3RcIl0ge1xuICAgIGNvbG9yOiB2YXIoLS1hcHAtY29sb3ItZ3JhcGUpOyBcbiAgfVxuICAuY29sb3ItYnJlYWtbdHlwZT1cIm9iamVjdFwiXSwgaXJvbi1pY29uW3R5cGU9XCJvYmplY3RcIl0sIC5kb3RbdHlwZT1cIm9iamVjdFwiXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLWNvbG9yLWdyYXBlKTsgXG4gIH1cblxuICAuY29ubmVjdGlvbi1pbWFnZS1sYXlvdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmNvbm5lY3Rpb24taW1hZ2UtbGF5b3V0ID4gZGl2IHtcbiAgICBmbGV4OiAxO1xuICB9XG4gIC5jb25uZWN0aW9uLWltYWdlLWxheW91dCA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tYXBwLWNvbG9yLXdoaXRlKTtcbiAgfVxuICAuY29ubmVjdGlvbi1pbWFnZS1sYXlvdXQgPiBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWFwcC1jb2xvci13aGl0ZSk7XG4gIH1cblxuICBAbWVkaWEobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC50b2dnbGUge1xuICAgICAgLyogZGlzcGxheTogbm9uZTsgKi9cbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IGluaXRpYWw7XG4gICAgICB0b3A6IC0zNXB4O1xuICAgICAgbGVmdDogMzVweDtcbiAgICB9XG4gICAgLnRvZ2dsZSBpcm9uLWljb24ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICB9XG4gICAgLyogLnRvZ2dsZS1zbSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9ICovXG5cbiAgfVxuPC9zdHlsZT4gIFxuXG48ZGl2IGNsYXNzPVwiY29udGVudFwiID9tb21lbnQtdmlldz1cIiR7dGhpcy5pc01vbWVudH1cIj5cbiAgPCEtLSA8ZGl2IGNsYXNzPVwidG9nZ2xlLXNtXCIgdGFiaW5kZXg9XCIwXCIgQGNsaWNrPVwiJHt0aGlzLl9maXJlVG9nZ2xlRXZlbnR9XCIgQGtleS11cD1cIiR7dGhpcy5fb25Ub2dnbGVLZXlVcH1cIj5cbiAgICA8aXJvbi1pY29uIGljb249XCJjbG9zZVwiPjwvaXJvbi1pY29uPlxuICA8L2Rpdj4gLS0+XG5cbiAgPGRpdiA/aGlkZGVuPVwiJHt0aGlzLmlzTW9tZW50fVwiPlxuXG4gICAgPGRpdiA/aGlkZGVuPVwiJHt0aGlzLmlzTGlua31cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZVwiIHR5cGU9XCIke3RoaXMudHlwZX1cIj5cbiAgICAgICAgPGlyb24taWNvbiBjbGFzcz1cInR5cGUtY29sb3JcIiB0eXBlPVwiJHt0aGlzLnR5cGV9XCIgaWNvbj1cImludGVydC13aW5lLWljb25zOiR7dGhpcy50eXBlfVwiPjwvaXJvbi1pY29uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2ID9oaWRkZW49XCIkeyF0aGlzLmlzTGlua31cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb25uZWN0aW9uLWltYWdlLWxheW91dFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VcIiB0eXBlPVwiJHt0aGlzLnNyY3R5cGV9XCI+XG4gICAgICAgICAgPGlyb24taWNvbiBjbGFzcz1cInR5cGUtY29sb3JcIiB0eXBlPVwiJHt0aGlzLnNyY3R5cGV9XCIgaWNvbj1cImludGVydC13aW5lLWljb25zOiR7dGhpcy5zcmN0eXBlfVwiPjwvaXJvbi1pY29uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlXCIgdHlwZT1cIiR7dGhpcy5kc3R0eXBlfVwiPlxuICAgICAgICAgIDxpcm9uLWljb24gY2xhc3M9XCJ0eXBlLWNvbG9yXCIgdHlwZT1cIiR7dGhpcy5kc3R0eXBlfVwiIGljb249XCJpbnRlcnQtd2luZS1pY29uczoke3RoaXMuZHN0dHlwZX1cIj48L2lyb24taWNvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2xvci1icmVha1wiIHR5cGU9XCIke3RoaXMudHlwZX1cIj5cbiAgICAgIDxpcm9uLWljb24gaWNvbj1cImludGVydC13aW5lLWljb25zOiR7dGhpcy50eXBlfVwiIHR5cGU9XCIke3RoaXMudHlwZX1cIj48L2lyb24taWNvbj5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29udGVudC1wYWRkaW5nXCI+XG4gICAgPGlyb24tcGFnZXMgc2VsZWN0ZWQ9XCIke3RoaXMudmlld31cIiBhdHRyLWZvci1zZWxlY3RlZD1cImlkXCI+XG4gICAgICA8IS0tIFNUQVJUIEVNUFRZIC0tPlxuICAgICAgPGRpdiBpZD1cIm1vbWVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3ViamVjdC10eXBlXCI+RXhwbG9yZTwvZGl2PlxuICAgICAgICA8aDEgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAzcHhcIiBjbGFzcz1cImludmVyc2VcIj4ke3RoaXMubW9tZW50SW5mby50aXRsZX08L2gxPlxuICAgICAgICA8aDIgc3R5bGU9XCJtYXJnaW46IDAgMCAxNHB4IDBcIiBjbGFzcz1cImludmVyc2VcIj4ke3RoaXMubW9tZW50SW5mby5kYXRlfTwvaDI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgU2VsZWN0IGEgc3ViamVjdCBvbiB0aGUgbWFwIHRvIGxlYXJuIGFib3V0IHRoZWlyXG4gICAgICAgICAgY29ubmVjdGlvbnMgdG8gQ2FsaWZvcm5pYSB3aW5lIGhpc3RvcnkuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb21lbnQtYnJlYWtcIj48L2Rpdj5cbiAgICAgICAgPGgzIGNsYXNzPVwiaW52ZXJzZVwiPkNvbm5lY3Rpb25zIGluIENvbnRleHQ8L2gzPlxuICAgICAgICA8ZGl2IGlkPVwibW9tZW50RGVzY3JpcHRpb25cIj48L2Rpdj5cblxuICAgICAgICA8YSBjbGFzcz1cImJ0biBpbnZlcnNlXCIgP2hpZGRlbj1cIiR7IXRoaXMubW9tZW50RW50cnlQb2ludFVybH1cIiBocmVmPVwiJHt0aGlzLm1vbWVudEVudHJ5UG9pbnRVcmx9XCIgPlJlYWQgU3Rvcnk8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwhLS0gRU5EIEVNUFRZIC0tPlxuXG4gICAgICA8IS0tIFNUQVJUIENMVVNURVIgLS0+XG4gICAgICA8ZGl2IGlkPVwiY2x1c3RlclwiPlxuICAgICAgICA8aDM+U2VsZWN0IGEgU3ViamVjdDwvaDM+XG5cbiAgICAgICAgJHt0aGlzLmNsdXN0ZXJTdWJqZWN0VHlwZXMubWFwKHR5cGUgPT4gaHRtbGBcbiAgICAgICAgICA8ZGl2ID9oaWRkZW49XCIkeyF0aGlzLmNsdXN0ZXJTdWJqZWN0c1t0eXBlXS5lbmFibGVkfVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1YmplY3QtbGFiZWxcIj5cbiAgICAgICAgICAgICAgPGlyb24taWNvbiBpY29uPVwiaW50ZXJ0LXdpbmUtaWNvbnM6JHt0eXBlfVwiIHR5cGU9XCIke3R5cGV9XCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3ViamVjdC10eXBlIHR5cGUtY29sb3JcIiB0eXBlPVwiJHt0eXBlfVwiPiR7dGhpcy5jbHVzdGVyU3ViamVjdHNbdHlwZV0ubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAke3RoaXMuY2x1c3RlclN1YmplY3RzW3R5cGVdLm5vZGVzLm1hcChub2RlID0+IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRvdFwiIHR5cGU9XCIke3R5cGV9XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4+PGEgY2xhc3M9XCJpbnRlcm5hbFwiIGhyZWY9XCIvbWFwLyR7dGhpcy5tb21lbnR9LyR7dHlwZX0vJHtub2RlLmlkfVwiPiR7bm9kZS50aXRsZX08L2E+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPCEtLSBFTkQgQ0xVU1RFUiAtLT5cblxuICAgICAgPCEtLSBTVEFSVCBJVEVNIC0tPlxuICAgICAgPGRpdiBpZD1cIml0ZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN1YmplY3QtdHlwZSB0eXBlLWNvbG9yXCIgdHlwZT1cIiR7dGhpcy50eXBlfVwiPiR7dGhpcy50eXBlfTwvZGl2PlxuXG4gICAgICAgIDxkaXYgP2hpZGRlbj1cIiR7IXRoaXMuaXNMaW5rfVwiPlxuICAgICAgICAgIDxoMz5BYm91dCB0aGUgQ29ubmVjdGlvbjwvaDM+XG4gICAgICAgICAgPGgyPiR7dGhpcy50aXRsZX08L2gyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2ID9oaWRkZW49XCIkeyF0aGlzLmlzTm9kZX1cIj5cbiAgICAgICAgICA8aDEgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAzcHhcIj4ke3RoaXMudGl0bGV9PC9oMT5cbiAgICAgICAgICA8aDIgc3R5bGU9XCJtYXJnaW46IDBcIj4ke3RoaXMubG9jYXRpb259PC9oMj5cbiAgICAgICAgICA8aDIgc3R5bGU9XCJtYXJnaW46IDAgMCAxNHB4IDBcIj4ke3RoaXMuZGF0ZX08L2gyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGlkPVwiZGVzY3JpcHRpb25cIj48L2Rpdj5cblxuICAgICAgICA8ZGl2ID9oaWRkZW49XCIkeyF0aGlzLmlzTm9kZX1cIj5cbiAgICAgICAgICA8aDMgc3R5bGU9XCJtYXJnaW46IDAgMCA1cHggMFwiPkV4cGxvcmUgQ29ubmVjdGlvbnM8L2gzPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAke3RoaXMuY29ubmVjdGlvbnMubWFwKGl0ZW0gPT4gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG90XCIgdHlwZT1cIiR7aXRlbS5ub2RlLnR5cGV9XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4+PGEgY2xhc3M9XCJpbnRlcm5hbFwiIGhyZWY9XCIvbWFwLyR7dGhpcy5tb21lbnR9L2Nvbm5lY3Rpb24vJHtpdGVtLmxpbmsuaWR9XCI+JHtpdGVtLm5vZGUudGl0bGV9PC9hPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgP2hpZGRlbj1cIiR7IXRoaXMuaXNMaW5rfVwiPlxuICAgICAgICAgIDxoMz5Db25uZWN0aW9ucyBTdWJqZWN0czwvaDM+XG4gICAgICAgICAgJHt0aGlzLmNvbm5lY3Rpb25TdWJqZWN0cy5tYXAobm9kZSA9PiBodG1sYFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRvdFwiIHR5cGU9XCIke25vZGUudHlwZX1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4+PGEgY2xhc3M9XCJpbnRlcm5hbFwiIGhyZWY9XCIvbWFwLyR7dGhpcy5tb21lbnR9LyR7bm9kZS50eXBlfS8ke25vZGUuaWR9XCI+JHtub2RlLnRpdGxlfTwvYT48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwhLS0gRU5EIElURU0gLS0+XG4gICAgPC9pcm9uLXBhZ2VzPlxuICA8L2Rpdj5cblxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ0b2dnbGVcIiA/b3Blbj1cIiR7dGhpcy5vcGVufVwiIHRhYmluZGV4PVwiMFwiIEBjbGljaz1cIiR7dGhpcy5fZmlyZVRvZ2dsZUV2ZW50fVwiIEBrZXktdXA9XCIke3RoaXMuX29uVG9nZ2xlS2V5VXB9XCI+XG4gIDxpcm9uLWljb24gaWNvbj1cImNoZXZyb24tcmlnaHRcIiA/aGlkZGVuPVwiJHt0aGlzLm9wZW59XCI+PC9pcm9uLWljb24+XG4gIDxpcm9uLWljb24gaWNvbj1cImNoZXZyb24tbGVmdFwiID9oaWRkZW49XCIkeyF0aGlzLm9wZW59XCI+PC9pcm9uLWljb24+XG48L2Rpdj5cblxuYDt9IiwiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vYXBwLXZpZXctbWFwLnRwbC5qc1wiXG5cbmltcG9ydCBcIi4vYXBwLWxlYWZsZXQtbWFwXCJcbmltcG9ydCBcIi4vYXBwLW1hcC1pbmZvLXBhbmVsXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwVmlld01hcCBleHRlbmRzIE1peGluKExpdEVsZW1lbnQpXG4gIC53aXRoKExpdENvcmtVdGlscykge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmlzaWJsZSA6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGluZm9QYW5lbE9wZW4gOiB7dHlwZTogQm9vbGVhbn1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmluZm9QYW5lbE9wZW4gPSB0cnVlO1xuXG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ01vbWVudE1vZGVsJywgJ0FwcFN0YXRlTW9kZWwnKTtcbiAgfVxuXG4gIGZpcnN0VXBkYXRlZCgpIHtcbiAgICB0aGlzLm1hcEVsZSA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjbWFwJyk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25BcHBTdGF0ZVVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gQXBwU3RhdGVNb2RlbCBhcHAtc3RhdGUtdXBkYXRlIGV2ZW50c1xuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IGUgXG4gICAqL1xuICBfb25BcHBTdGF0ZVVwZGF0ZShlKSB7XG4gICAgdGhpcy5zZWxlY3RlZE1vbWVudCA9IGUubW9tZW50O1xuICAgIGlmKCBlLnNlbGVjdGVkICkgdGhpcy5tYXBFbGUucmVuZGVyU2VsZWN0ZWRTdGF0ZShlKTtcbiAgICBlbHNlIHRoaXMubWFwRWxlLnJlbmRlclNlbGVjdGVkU3RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbk1vbWVudEdyYXBoVXBkYXRlXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byBtb21lbnQtZ3JhcGgtdXBkYXRlIGV2ZW50cyBmcm9tIHRoZSBNb21lbnRNb2RlbFxuICAgKiBcbiAgICogQHBhcmFtIHsqfSBlIFxuICAgKi9cbiAgX29uTW9tZW50R3JhcGhVcGRhdGUoZSkge1xuICAgIGlmKCBlLnN0YXRlICE9PSAnbG9hZGVkJyApIHJldHVybjtcbiAgICB0aGlzLmRhdGEgPSBlLnBheWxvYWQuZ3JhcGg7XG4gICAgdGhpcy5tYXBFbGUuc2V0RGF0YShlLnBheWxvYWQuZ3JhcGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uTm9kZUNsaWNrXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byBhcHAtbGVhZmxldC1tYXAgbm9kZS1jbGljayBldmVudHNcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlIFxuICAgKi9cbiAgX29uTm9kZUNsaWNrKGUpIHtcbiAgICBsZXQgbm9kZSA9IHRoaXMuZGF0YS5ub2Rlc1tlLmRldGFpbC5pZF07XG4gICAgdGhpcy5BcHBTdGF0ZU1vZGVsLnNldExvY2F0aW9uKCcvbWFwLycrdGhpcy5zZWxlY3RlZE1vbWVudCsnLycrbm9kZS50eXBlKycvJytub2RlLmlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkNsdXN0ZXJDbGlja1xuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gYXBwLWxlYWZsZXQtbWFwIGNsdXN0ZXItY2xpY2sgZXZlbnRzXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBcbiAgICovXG4gIF9vbkNsdXN0ZXJDbGljayhlKSB7XG4gICAgdGhpcy5BcHBTdGF0ZU1vZGVsLnNldExvY2F0aW9uKCcvbWFwLycrdGhpcy5zZWxlY3RlZE1vbWVudCsnL2NsdXN0ZXIvJytcbiAgICAgIGVuY29kZVVSSShlLmRldGFpbC5sYXRMbmcuam9pbignLCcpKSsnLycrZS5kZXRhaWwuem9vbVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25TZWxlY3RlZENsdXN0ZXJJZHNcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRwIGFwcC1sZWFmbGV0LW1hcCBzZWxlY3RlZC1jbHVzdGVyLWlkcyBldmVudC4gIFRoaXMgaXMgZmlyZWRcbiAgICogd2hlbiBhIGNsdXN0ZXIgem9vbS9sYXRsbmcgaXMgc2V0LiAgQWZ0ZXIgd2hpY2ggdGhlIG1hcCBtYWtlcyBzdXJlIGl0IGlzIHJlbmRlcmVkXG4gICAqIHRoZW4gbG9va3MgdXAgdGhlIGNsb3Nlc3QgcmVuZGVyZWQgY2x1c3RlciB0byB0aGUgbGF0bG5nIGF0IHRoZSB6b29tIGxldmVsLiAgRmluYWxseVxuICAgKiB0aGUgbWFwIGZpcmVzIHRoZSBzZWxlY3RlZC1jbHVzdGVyLWlkcyBjb250YWluaW5nIHRoZSBpZHMgaW5zaWRlIHRoZSBjbHVzdGVyXG4gICAqL1xuICBfb25TZWxlY3RlZENsdXN0ZXJJZHMoZSkge1xuICAgIHRoaXMuQXBwU3RhdGVNb2RlbC5zZXRTZWxlY3RlZENsdXN0ZXJJZHMoZS5kZXRhaWwpO1xuICB9XG5cbiAgdG9nZ2xlSW5mb1BhbmVsKCkge1xuICAgIHRoaXMuaW5mb1BhbmVsT3BlbiA9ICF0aGlzLmluZm9QYW5lbE9wZW47XG4gICAgdGhpcy5yZWRyYXdNYXBBZnRlckFuaW1hdGlvbigpO1xuICB9XG5cbiAgb3BlbkluZm9QYW5lbCgpIHtcbiAgICB0aGlzLmluZm9QYW5lbE9wZW4gPSB0cnVlO1xuICAgIHRoaXMucmVkcmF3TWFwQWZ0ZXJBbmltYXRpb24oKTtcbiAgfVxuXG4gIGNsb3NlSW5mb1BhbmVsKCkge1xuICAgIHRoaXMuaW5mb1BhbmVsT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMucmVkcmF3TWFwQWZ0ZXJBbmltYXRpb24oKTtcbiAgfVxuXG4gIHJlZHJhd01hcEFmdGVyQW5pbWF0aW9uKCkge1xuICAgIGxldCBvZmZzZXQgPSB0aGlzLmluZm9QYW5lbE9wZW4gPyAzNTAgOiAtMzUwO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5tYXBFbGUucmVkcmF3Tm93KG9mZnNldCk7XG4gICAgfSwgMjAwKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLXZpZXctbWFwJywgQXBwVmlld01hcCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7IFxucmV0dXJuIGh0bWxgXG5cbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gIH1cblxuICBhcHAtbWFwLWluZm8tcGFuZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA1MDAwO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MDBweCk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2Utb3V0LCB0b3AgMjAwbXMgZWFzZS1vdXQ7XG4gIH1cbiAgYXBwLW1hcC1pbmZvLXBhbmVsW29wZW5dIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cblxuICBhcHAtbGVhZmxldC1tYXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbSA6IDA7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRyYW5zaXRpb246IGxlZnQgMjAwbXMgZWFzZS1vdXQsIGJvdHRvbSAyMDBtcyBlYXNlLW91dDtcbiAgfVxuICBhcHAtbGVhZmxldC1tYXBbaW5mby1vcGVuXSB7XG4gICAgbGVmdDogNDAwcHg7XG4gIH1cblxuICBAbWVkaWEobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGFwcC1tYXAtaW5mby1wYW5lbCB7XG4gICAgICB3aWR0aDogMTAwdnc7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICB9XG4gICAgYXBwLW1hcC1pbmZvLXBhbmVsW29wZW5dIHtcbiAgICAgIHRvcDogNTAlO1xuICAgIH1cblxuICAgIGFwcC1sZWFmbGV0LW1hcCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYm90dG9tIDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgICBhcHAtbGVhZmxldC1tYXBbaW5mby1vcGVuXSB7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiA1MCU7XG4gICAgfVxuICB9XG48L3N0eWxlPiAgXG5cbjxhcHAtbWFwLWluZm8tcGFuZWwgP29wZW49XCIke3RoaXMuaW5mb1BhbmVsT3Blbn1cIiBAdG9nZ2xlPVwiJHt0aGlzLnRvZ2dsZUluZm9QYW5lbH1cIj48L2FwcC1tYXAtaW5mby1wYW5lbD5cbjxhcHAtbGVhZmxldC1tYXAgXG4gID9pbmZvLW9wZW49XCIke3RoaXMuaW5mb1BhbmVsT3Blbn1cIlxuICA/YWN0aXZlPVwiJHt0aGlzLnZpc2libGV9XCIgXG4gIGlkPVwibWFwXCJcbiAgQG5vZGUtY2xpY2s9XCIke3RoaXMuX29uTm9kZUNsaWNrfVwiXG4gIEBjbHVzdGVyLWNsaWNrPVwiJHt0aGlzLl9vbkNsdXN0ZXJDbGlja31cIlxuICBAc2VsZWN0ZWQtY2x1c3Rlci1pZHM9XCIke3RoaXMuX29uU2VsZWN0ZWRDbHVzdGVySWRzfVwiPlxuPC9hcHAtbGVhZmxldC1tYXA+XG5cblxuYDt9IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIEFwcFN0YXRlTW9kZWwgOiByZXF1aXJlKCcuL21vZGVscy9BcHBTdGF0ZU1vZGVsJyksXG4gIE1vbWVudE1vZGVsIDogcmVxdWlyZSgnLi9tb2RlbHMvTW9tZW50TW9kZWwnKVxufSIsImNvbnN0IHtBcHBTdGF0ZU1vZGVsfSA9IHJlcXVpcmUoJ0B1Y2QtbGliL2NvcmstYXBwLXN0YXRlJyk7XG5jb25zdCBBcHBTdGF0ZVN0b3JlID0gcmVxdWlyZSgnLi4vc3RvcmVzL0FwcFN0YXRlU3RvcmUnKTtcblxuY2xhc3MgQXBwU3RhdGVNb2RlbEltcGwgZXh0ZW5kcyBBcHBTdGF0ZU1vZGVsIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RvcmUgPSBBcHBTdGF0ZVN0b3JlO1xuXG4gICAgdGhpcy5FdmVudEJ1cy5vbih0aGlzLnN0b3JlLmV2ZW50cy5BUFBfU1RBVEVfVVBEQVRFLCAoKSA9PiB0aGlzLl9zZW5kR0EoKSk7XG4gICAgdGhpcy5fc2VuZEdBKCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBzZXRTZWxlY3RlZENsdXN0ZXJJZHNcbiAgICogQGRlc2NyaXB0aW9uIHdoZW4gYSBjbHVzdGVyIGlzIHNlbGVjdGVkIGluIHRoZSBVSSwgdGhlIGNlbnRlciBsYXQvbG5nIGFuZCB6b29tXG4gICAqIG9mIHRoZSBjbHVzdGVyIHdpbGwgYmUgc2V0IGluIHRoZSwgdGhpcyB3aWxsIGJlIHVzZWQgYnkgdGhlIG1hcCB0byBmaWd1cmUgb3V0XG4gICAqIHRoZSBub2RlcyBpbiB0aGUgY2x1c3RlciBhbmQgc2V0IHRoZW1cbiAgICovXG4gIHNldFNlbGVjdGVkQ2x1c3RlcklkcyhpZHMpIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0b3JlLmRhdGE7XG4gICAgaWYoICFzdGF0ZS5zZWxlY3RlZCApIHtcbiAgICAgIHJldHVybiBjb25zb2xlLndhcm4oJ0F0dGVtcHRpbmcgdG8gc2V0IGNsdXN0ZXIgaWRzLCBidXQgbm8gc2VsZWN0ZWQgb2JqZWN0Jyk7XG4gICAgfVxuICAgIGlmKCBzdGF0ZS5zZWxlY3RlZC50eXBlICE9PSAnY2x1c3RlcicgKSB7XG4gICAgICByZXR1cm4gY29uc29sZS53YXJuKCdBdHRlbXB0aW5nIHRvIHNldCBjbHVzdGVyIGlkcywgYnV0IHNlbGVjdGVkIG9iamVjdCBpcyBub3QgYSBjbHVzdGVyJyk7XG4gICAgfVxuICAgIHN0YXRlLnNlbGVjdGVkLmlkcyA9IGlkcztcbiAgICByZXR1cm4gc3VwZXIuc2V0KHN0YXRlKTtcbiAgfVxuXG4gIHNldChzdGF0ZSkge1xuICAgIC8vIHBhcnNlIG91dCBwYWdlXG4gICAgaWYoIHN0YXRlLmxvY2F0aW9uICkge1xuICAgICAgbGV0IHBhZ2UgPSBzdGF0ZS5sb2NhdGlvbi5wYXRoID8gc3RhdGUubG9jYXRpb24ucGF0aFswXSA6ICdtYXAnO1xuICAgICAgc3RhdGUucGFnZSA9IHBhZ2UgfHwgJ21hcCc7XG4gICAgfVxuICAgIHN0YXRlLm1vbWVudCA9ICdjaGFyZG9ubmF5JztcblxuICAgIC8vIHBhcnNlIG91dCBzZWxlY3RlZCBvYmplY3QocylcbiAgICBpZiggc3RhdGUucGFnZSA9PT0gJ21hcCcgJiYgc3RhdGUubG9jYXRpb24ucGF0aC5sZW5ndGggPj0gMyApIHtcbiAgICAgIHN0YXRlLnNlbGVjdGVkID0ge1xuICAgICAgICB0eXBlIDogc3RhdGUubG9jYXRpb24ucGF0aFsyXVxuICAgICAgfVxuXG4gICAgICBpZiggc3RhdGUubG9jYXRpb24ucGF0aC5sZW5ndGggPiAxICkge1xuICAgICAgICBzdGF0ZS5tb21lbnQgPSBzdGF0ZS5sb2NhdGlvbi5wYXRoWzFdO1xuICAgICAgfVxuXG4gICAgICBpZiggc3RhdGUubG9jYXRpb24ucGF0aFsyXSA9PT0gJ2NsdXN0ZXInICkge1xuICAgICAgICBzdGF0ZS5zZWxlY3RlZC5sYXRsbmcgPSBzdGF0ZS5sb2NhdGlvbi5wYXRoWzNdLnNwbGl0KCcsJykubWFwKGxsID0+IHBhcnNlRmxvYXQobGwpKTtcbiAgICAgICAgc3RhdGUuc2VsZWN0ZWQuem9vbSA9IHBhcnNlSW50KHN0YXRlLmxvY2F0aW9uLnBhdGhbNF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUuc2VsZWN0ZWQuaWQgPSBzdGF0ZS5sb2NhdGlvbi5wYXRoWzNdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5zZWxlY3RlZCA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnNldChzdGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfc2VuZEdBXG4gICAqIEBkZXNjcmlwdGlvbiBzZW5kIGEgZ29vZ2xlIGFuYWx5dGljcyBldmVudCBpZiBwYXRobmFtZSBoYXMgY2hhbmdlZFxuICAgKi9cbiAgX3NlbmRHQSgpIHtcbiAgICBpZiggIXdpbmRvdy5ndGFnICkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUud2FybignTm8gZ2xvYmFsIGd0YWcgdmFyaWFibGUgc2V0IGZvciBhbmFseXRpY3MgZXZlbnRzJyk7XG4gICAgfVxuICAgIGlmKCB0aGlzLmxhc3RHYUxvY2F0aW9uID09PSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKSByZXR1cm47XG4gICAgdGhpcy5sYXN0R2FMb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcblxuICAgIGd0YWcoJ2NvbmZpZycsIEFQUF9DT05GSUcuZ2FDb2RlLCB7XG4gICAgICBwYWdlX3BhdGg6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgIH0pO1xuICB9XG5cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBBcHBTdGF0ZU1vZGVsSW1wbCgpOyIsImNvbnN0IHtCYXNlTW9kZWx9ID0gcmVxdWlyZSgnQHVjZC1saWIvY29yay1hcHAtdXRpbHMnKTtcbmNvbnN0IE1vbWVudFNlcnZpY2UgPSByZXF1aXJlKCcuLi9zZXJ2aWNlcy9Nb21lbnRTZXJ2aWNlJyk7XG5jb25zdCBNb21lbnRTdG9yZSA9IHJlcXVpcmUoJy4uL3N0b3Jlcy9Nb21lbnRTdG9yZScpO1xuXG5jbGFzcyBNb21lbnRNb2RlbCBleHRlbmRzIEJhc2VNb2RlbCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc3RvcmUgPSBNb21lbnRTdG9yZTtcbiAgICB0aGlzLnNlcnZpY2UgPSBNb21lbnRTZXJ2aWNlO1xuXG4gICAgdGhpcy5FdmVudEJ1cy5vbignYXBwLXN0YXRlLXVwZGF0ZScsIGUgPT4ge1xuICAgICAgaWYoIGUucGFnZSA9PT0gJ21hcCcgKSB0aGlzLmdldChlLm1vbWVudCk7XG4gICAgfSlcbiAgICAgIFxuICAgIHRoaXMucmVnaXN0ZXIoJ01vbWVudE1vZGVsJyk7XG4gIH1cblxuICBhc3luYyBnZXQobW9tZW50KSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yZS5kYXRhW21vbWVudF0gfHwge307XG5cbiAgICB0cnkge1xuICAgICAgaWYoIHN0YXRlLnJlcXVlc3QgKSB7XG4gICAgICAgIGF3YWl0IHN0YXRlLnJlcXVlc3Q7XG4gICAgICB9IGVsc2UgaWYoIHN0YXRlLnN0YXRlICE9PSAnbG9hZGVkJyApIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldChtb21lbnQsIHRoaXMudHJhbnNmb3JtTW9ja0xpbmtzKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGF0YVttb21lbnRdO1xuICB9XG5cbiAgdHJhbnNmb3JtTW9ja0xpbmtzKGRhdGEpIHtcbiAgICBsZXQgbm9kZXMgPSB7fTtcbiAgICBsZXQgbGlua3MgPSB7fTtcbiAgICBsZXQgaXRlbTtcblxuICAgIGZvciggaXRlbSBvZiBkYXRhICkge1xuICAgICAgaWYoIGl0ZW0udHlwZSA9PT0gJ2Nvbm5lY3Rpb24nICkge1xuICAgICAgICBpdGVtLmlkID0gaXRlbS5zcmMrJy0nK2l0ZW0uZHN0O1xuICAgICAgICBsaW5rc1tpdGVtLmlkXSA9IGl0ZW07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLmNvb3JkaW5hdGVzID0gaXRlbS5jb29yZGluYXRlcy5yZXZlcnNlKCk7XG4gICAgICAgIG5vZGVzW2l0ZW0uaWRdID0gaXRlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IoIGxldCBpZCBpbiBsaW5rcyApIHtcbiAgICAgIGl0ZW0gPSBsaW5rc1tpZF07XG4gICAgICBpdGVtLmNvb3JkaW5hdGVzID0ge1xuICAgICAgICBzcmMgOiBub2Rlc1tpdGVtLnNyY10uY29vcmRpbmF0ZXMsXG4gICAgICAgIGRzdCA6IG5vZGVzW2l0ZW0uZHN0XS5jb29yZGluYXRlc1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7bm9kZXMsIGxpbmtzfVxuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgTW9tZW50TW9kZWwoKTsiLCJjb25zdCB7QmFzZVNlcnZpY2V9ID0gcmVxdWlyZSgnQHVjZC1saWIvY29yay1hcHAtdXRpbHMnKTtcbmNvbnN0IE1vbWVudFN0b3JlID0gcmVxdWlyZSgnLi4vc3RvcmVzL01vbWVudFN0b3JlJyk7XG5cbmNsYXNzIE1vbWVudFNlcnZpY2UgZXh0ZW5kcyBCYXNlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0b3JlID0gTW9tZW50U3RvcmU7XG4gIH1cblxuICBnZXQobW9tZW50LCB0cmFuc2Zvcm0pIHtcbiAgICBpZiggIXRyYW5zZm9ybSApIHRyYW5zZm9ybSA9IGRhdGEgPT4gZGF0YTtcbiAgICB0aGlzLnJlcXVlc3Qoe1xuICAgICAgLy8gdXJsIDogYC9hcGkvZ3JhcGgvJHttb21lbnR9YCxcbiAgICAgIHVybCA6ICcvYXBpL2dyYXBoL21vY2snLFxuICAgICAgb25Mb2FkaW5nIDogcmVxdWVzdCA9PiB0aGlzLnN0b3JlLm9uR3JhcGhMb2FkaW5nKG1vbWVudCwgcmVxdWVzdCksXG4gICAgICBvbkxvYWQgOiByZXNwID0+IHtcbiAgICAgICAgcmVzcC5ib2R5LmdyYXBoID0gdHJhbnNmb3JtKHJlc3AuYm9keS5ncmFwaCk7XG4gICAgICAgIHRoaXMuc3RvcmUub25HcmFwaExvYWRlZChtb21lbnQsIHJlc3AuYm9keSk7XG4gICAgICB9LFxuICAgICAgb25FcnJvciA6IGUgPT4gdGhpcy5zdG9yZS5vbkdyYXBoRXJyb3IobW9tZW50LCBlKVxuICAgIH0pXG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBNb21lbnRTZXJ2aWNlKCk7IiwiY29uc3Qge0FwcFN0YXRlU3RvcmV9ID0gcmVxdWlyZSgnQHVjZC1saWIvY29yay1hcHAtc3RhdGUnKTtcblxuY2xhc3MgSW1wbEFwcFN0YXRlU3RvcmUgZXh0ZW5kcyBBcHBTdGF0ZVN0b3JlIHtcblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBJbXBsQXBwU3RhdGVTdG9yZSgpOyIsImNvbnN0IHtCYXNlU3RvcmV9ID0gcmVxdWlyZSgnQHVjZC1saWIvY29yay1hcHAtdXRpbHMnKTtcblxuY2xhc3MgTW9tZW50U3RvcmUgZXh0ZW5kcyBCYXNlU3RvcmUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICB0aGlzLmV2ZW50cyA9IHtcbiAgICAgIEdSQVBIX1VQREFURSA6ICdtb21lbnQtZ3JhcGgtdXBkYXRlJ1xuICAgIH07XG4gIH1cblxuICBvbkdyYXBoTG9hZGluZyhtb21lbnQsIHJlcXVlc3QpIHtcbiAgICB0aGlzLl9zZXRHcmFwaFN0YXRlKHtcbiAgICAgIGlkOiBtb21lbnQsXG4gICAgICBzdGF0ZSA6IHRoaXMuU1RBVEUuTE9BRElORyxcbiAgICAgIHJlcXVlc3RcbiAgICB9KTtcbiAgfVxuXG4gIG9uR3JhcGhMb2FkZWQobW9tZW50LCBwYXlsb2FkKSB7XG4gICAgdGhpcy5fc2V0R3JhcGhTdGF0ZSh7XG4gICAgICBpZDogbW9tZW50LFxuICAgICAgc3RhdGUgOiB0aGlzLlNUQVRFLkxPQURFRCxcbiAgICAgIHBheWxvYWRcbiAgICB9KTtcbiAgfVxuXG4gIG9uR3JhcGhFcnJvcihtb21lbnQsIGVycm9yKSB7XG4gICAgdGhpcy5fc2V0R3JhcGhTdGF0ZSh7XG4gICAgICBpZDogbW9tZW50LFxuICAgICAgc3RhdGUgOiB0aGlzLlNUQVRFLkVSUk9SLFxuICAgICAgZXJyb3JcbiAgICB9KTtcbiAgfVxuXG4gIF9zZXRHcmFwaFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5kYXRhW3N0YXRlLmlkXSA9IHN0YXRlO1xuICAgIHRoaXMuZW1pdCh0aGlzLmV2ZW50cy5HUkFQSF9VUERBVEUsIHN0YXRlKTtcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IE1vbWVudFN0b3JlKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==