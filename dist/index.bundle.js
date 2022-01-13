/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./background-list.svg */ "./src/background-list.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Andika New Basic\", sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.1rem;\r\n  letter-spacing: 0;\r\n  color: #272a31;\r\n  font-style: normal;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n.body__container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  width: 90%;\r\n  max-width: 37.5rem;\r\n  height: 80%;\r\n  margin: auto;\r\n  background: white;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n  padding: 1rem !important;\r\n  font-size: 1.5rem;\r\n  line-height: 1;\r\n  text-align: left;\r\n}\r\n\r\ninput[type=text],\r\ntextarea,\r\nbutton {\r\n  width: 100%;\r\n  font-family: \"Andika New Basic\", sans-serif;\r\n  font-size: 1rem;\r\n  line-height: 1.1rem;\r\n  color: #272a31;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\ninput[type=text] {\r\n  height: 3rem;\r\n  padding: 0 2.5rem 0 1rem;\r\n  line-height: 3rem;\r\n  font-style: italic;\r\n}\r\n\r\ntextarea {\r\n  height: 3.25rem;\r\n  padding: 1rem 0;\r\n  overflow: hidden;\r\n  resize: none;\r\n  cursor: default;\r\n}\r\n\r\ninput[type=text]:focus,\r\ntextarea:focus {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\nbutton {\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn__task-checklist {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  padding: 0;\r\n  border: 1px solid rgb(161, 161, 161);\r\n}\r\n\r\n.btn__task-dragdrop,\r\n.btn__task-remove {\r\n  width: 100%;\r\n  padding: 0;\r\n  cursor: move;\r\n}\r\n\r\n.btn__task-remove {\r\n  cursor: pointer;\r\n}\r\n\r\nbutton svg {\r\n  fill: rgb(161, 161, 161);\r\n}\r\n\r\n.btn__task-checklist svg {\r\n  display: none;\r\n  height: 100%;\r\n  fill: #86c555;\r\n}\r\n\r\n.checklist-active {\r\n  border: none;\r\n}\r\n\r\n.checklist-active svg {\r\n  display: block;\r\n}\r\n\r\n.btn__task-dragdrop svg,\r\n.btn__task-remove svg {\r\n  height: 1rem;\r\n}\r\n\r\n.btn__task-remove svg {\r\n  fill: #ef3c7b;\r\n}\r\n\r\nbutton:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\nbutton:hover svg {\r\n  fill: #08b9ae;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.body__container > * {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.body__item,\r\n.task__list > * {\r\n  position: relative;\r\n}\r\n\r\n.body__item::after,\r\n.task__list > *::after {\r\n  display: table;\r\n  content: '';\r\n  width: 100%;\r\n  height: 0.5px;\r\n  background-color: #134da2;\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n}\r\n\r\n#task__submit,\r\n#btn__resync-old-tasks {\r\n  width: 2.5rem;\r\n  height: 3rem;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n#task__submit svg {\r\n  width: 50%;\r\n}\r\n\r\n#btn__resync-old-tasks svg {\r\n  width: 1rem;\r\n  fill: #fff;\r\n}\r\n\r\n#btn__resync-old-tasks:hover svg {\r\n  fill: #08b9ae;\r\n}\r\n\r\n.list-item-view {\r\n  width: 100%;\r\n  padding: 0 2.5rem;\r\n}\r\n\r\n.list-item-view:focus-within {\r\n  background-color: rgba(255, 255, 0, 0.25);\r\n}\r\n\r\n.list-item-check,\r\n.list-item-tools {\r\n  width: 2.5rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.list-item-check {\r\n  left: 0;\r\n}\r\n\r\n.list-item-tools {\r\n  right: 0;\r\n}\r\n\r\n#btn__clear-done-tasks {\r\n  height: 3rem;\r\n  padding: 0.5rem 2.5rem;\r\n  background-color: rgba(19, 77, 162, 0.25);\r\n  color: #134da2;\r\n}\r\n\r\n.task__header {\r\n  background-color: #134da2;\r\n  color: #fff;\r\n  position: relative;\r\n}\r\n\r\n.d-none {\r\n  display: none;\r\n}\r\n\r\n.txt-active {\r\n  background-color: rgb(235, 235, 106);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,2CAA2C;EAC3C,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,yDAA8C;EAC9C,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,UAAU;EACV,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,SAAS;EACT,wBAAwB;EACxB,iBAAiB;EACjB,cAAc;EACd,gBAAgB;AAClB;;AAEA;;;EAGE,WAAW;EACX,2CAA2C;EAC3C,eAAe;EACf,mBAAmB;EACnB,cAAc;EACd,uBAAuB;EACvB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,wBAAwB;EACxB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,UAAU;EACV,oCAAoC;AACtC;;AAEA;;EAEE,WAAW;EACX,UAAU;EACV,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;;EAEE,cAAc;EACd,WAAW;EACX,WAAW;EACX,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,SAAS;EACT,OAAO;AACT;;AAEA;;EAEE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,QAAQ;AACV;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;;EAEE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,MAAM;EACN,SAAS;AACX;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,yCAAyC;EACzC,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oCAAoC;AACtC","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Andika New Basic\", sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.1rem;\r\n  letter-spacing: 0;\r\n  color: #272a31;\r\n  font-style: normal;\r\n  background-image: url('./background-list.svg');\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n.body__container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  width: 90%;\r\n  max-width: 37.5rem;\r\n  height: 80%;\r\n  margin: auto;\r\n  background: white;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n  padding: 1rem !important;\r\n  font-size: 1.5rem;\r\n  line-height: 1;\r\n  text-align: left;\r\n}\r\n\r\ninput[type=text],\r\ntextarea,\r\nbutton {\r\n  width: 100%;\r\n  font-family: \"Andika New Basic\", sans-serif;\r\n  font-size: 1rem;\r\n  line-height: 1.1rem;\r\n  color: #272a31;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\ninput[type=text] {\r\n  height: 3rem;\r\n  padding: 0 2.5rem 0 1rem;\r\n  line-height: 3rem;\r\n  font-style: italic;\r\n}\r\n\r\ntextarea {\r\n  height: 3.25rem;\r\n  padding: 1rem 0;\r\n  overflow: hidden;\r\n  resize: none;\r\n  cursor: default;\r\n}\r\n\r\ninput[type=text]:focus,\r\ntextarea:focus {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\nbutton {\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn__task-checklist {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  padding: 0;\r\n  border: 1px solid rgb(161, 161, 161);\r\n}\r\n\r\n.btn__task-dragdrop,\r\n.btn__task-remove {\r\n  width: 100%;\r\n  padding: 0;\r\n  cursor: move;\r\n}\r\n\r\n.btn__task-remove {\r\n  cursor: pointer;\r\n}\r\n\r\nbutton svg {\r\n  fill: rgb(161, 161, 161);\r\n}\r\n\r\n.btn__task-checklist svg {\r\n  display: none;\r\n  height: 100%;\r\n  fill: #86c555;\r\n}\r\n\r\n.checklist-active {\r\n  border: none;\r\n}\r\n\r\n.checklist-active svg {\r\n  display: block;\r\n}\r\n\r\n.btn__task-dragdrop svg,\r\n.btn__task-remove svg {\r\n  height: 1rem;\r\n}\r\n\r\n.btn__task-remove svg {\r\n  fill: #ef3c7b;\r\n}\r\n\r\nbutton:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\nbutton:hover svg {\r\n  fill: #08b9ae;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.body__container > * {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.body__item,\r\n.task__list > * {\r\n  position: relative;\r\n}\r\n\r\n.body__item::after,\r\n.task__list > *::after {\r\n  display: table;\r\n  content: '';\r\n  width: 100%;\r\n  height: 0.5px;\r\n  background-color: #134da2;\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n}\r\n\r\n#task__submit,\r\n#btn__resync-old-tasks {\r\n  width: 2.5rem;\r\n  height: 3rem;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n#task__submit svg {\r\n  width: 50%;\r\n}\r\n\r\n#btn__resync-old-tasks svg {\r\n  width: 1rem;\r\n  fill: #fff;\r\n}\r\n\r\n#btn__resync-old-tasks:hover svg {\r\n  fill: #08b9ae;\r\n}\r\n\r\n.list-item-view {\r\n  width: 100%;\r\n  padding: 0 2.5rem;\r\n}\r\n\r\n.list-item-view:focus-within {\r\n  background-color: rgba(255, 255, 0, 0.25);\r\n}\r\n\r\n.list-item-check,\r\n.list-item-tools {\r\n  width: 2.5rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.list-item-check {\r\n  left: 0;\r\n}\r\n\r\n.list-item-tools {\r\n  right: 0;\r\n}\r\n\r\n#btn__clear-done-tasks {\r\n  height: 3rem;\r\n  padding: 0.5rem 2.5rem;\r\n  background-color: rgba(19, 77, 162, 0.25);\r\n  color: #134da2;\r\n}\r\n\r\n.task__header {\r\n  background-color: #134da2;\r\n  color: #fff;\r\n  position: relative;\r\n}\r\n\r\n.d-none {\r\n  display: none;\r\n}\r\n\r\n.txt-active {\r\n  background-color: rgb(235, 235, 106);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/crud.js":
/*!*********************!*\
  !*** ./src/crud.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveLocalStorage": () => (/* binding */ saveLocalStorage),
/* harmony export */   "loadLocalStorage": () => (/* binding */ loadLocalStorage),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "dropTask": () => (/* binding */ dropTask),
/* harmony export */   "editTask": () => (/* binding */ editTask)
/* harmony export */ });
const saveLocalStorage = (arr) => {
  localStorage.setItem('toDoList', JSON.stringify(arr));
};

const loadLocalStorage = (arr) => {
  const localToDoList = JSON.parse(localStorage.getItem('toDoList'));
  if (localToDoList) arr = localToDoList;
  return arr;
};

const addTask = (arr, task) => {
  arr.push({ id: arr.length + 1, description: task, completed: false });
  saveLocalStorage(arr);
};

const dropTask = (arr, taskIds) => {
  taskIds.forEach((idTask) => {
    arr = arr.filter((task) => task.id !== idTask);
  });

  arr = arr.map((task, ind) => {
    task.id = ind + 1;
    return task;
  });
  saveLocalStorage(arr);
};

const editTask = (arr, idTask, desc) => {
  arr[idTask - 1].description = desc;
  saveLocalStorage(arr);
};




/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud.js */ "./src/crud.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((arr, taskId, status) => {
  arr[taskId - 1].completed = status;
  _crud_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalStorage(arr);
});


/***/ }),

/***/ "./src/background-list.svg":
/*!*********************************!*\
  !*** ./src/background-list.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "986f3b295512362ec902.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud.js */ "./src/crud.js");
/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status.js */ "./src/status.js");




const taskList = document.querySelector('#task__list');
let toDoListArray = [];

const editTaskDescription = (taskElement) => {
  _crud_js__WEBPACK_IMPORTED_MODULE_1__.editTask(toDoListArray, parseInt(taskElement.parentElement.parentElement.dataset.taskid, 10),
    taskElement.value);
};

const adjustTxtHeight = () => {
  const textElements = document.querySelectorAll('.txt__task-description');
  if (textElements) {
    textElements.forEach((elem) => {
      elem.style.height = `${elem.scrollHeight}px`;
    });
  }
};

const toggleTaskTools = (taskElement) => {
  const remBtn = taskElement.parentElement.nextSibling.firstChild;
  const dragBtn = taskElement.parentElement.nextSibling.lastChild;
  remBtn.classList.toggle('d-none');
  dragBtn.classList.toggle('d-none');
};

const removeATask = (idTask) => {
  _crud_js__WEBPACK_IMPORTED_MODULE_1__.dropTask(toDoListArray, [idTask]);
};

const updateTaskStatus = (checkElement) => {
  const taskId = parseInt(checkElement.dataset.taskid, 10);
  if (checkElement.classList.contains('checklist-active')) (0,_status_js__WEBPACK_IMPORTED_MODULE_2__["default"])(toDoListArray, taskId, true);
  else (0,_status_js__WEBPACK_IMPORTED_MODULE_2__["default"])(toDoListArray, taskId, false);
};

const renderTaskList = () => {
  toDoListArray = _crud_js__WEBPACK_IMPORTED_MODULE_1__.loadLocalStorage(toDoListArray);
  taskList.innerHTML = '';
  toDoListArray.forEach((task) => {
    const taskListItem = document.createElement('li');
    taskListItem.classList.add('task__list-item');
    taskListItem.setAttribute('data-taskid', task.id);
    const lisItemCheck = document.createElement('div');
    lisItemCheck.classList.add('list-item-check');
    const checkBtn = document.createElement('button');
    checkBtn.classList.add('btn__task-checklist');
    if (task.completed) checkBtn.classList.add('checklist-active');
    checkBtn.setAttribute('data-taskid', task.id);
    checkBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <path
                d="M1,50.09c2.79-2.46,5.21-5.14,8.14-7,4.21-2.72,8.46-1.73,12.25,1.29C26,48,28.86,53,31.39,58.25c.74,1.52,1.42,3.06,2.08,4.5,6-8.13,11.79-16.27,17.92-24.13C58.09,30,65.5,22,74.28,15.44c5.44-4.08,11.19-7.64,18.16-8.32a39.55,39.55,0,0,1,6.33.37l.22.77c-.85.71-1.68,1.43-2.54,2.13C81.14,22.82,67.17,36.54,56.86,53.53c-3.77,6.21-6.66,12.94-10.12,19.34-2.6,4.81-5.26,9.61-8.29,14.15a13.11,13.11,0,0,1-8.74,5.88c-3.35.58-5-.44-6-3.69-2.82-9.22-6-18.3-10.88-26.67C9.36,56.53,7,54.06,1,50.09Z" />
            </svg>`;
    checkBtn.addEventListener('click', () => {
      checkBtn.classList.toggle('checklist-active');
      updateTaskStatus(checkBtn);
    });
    lisItemCheck.appendChild(checkBtn);
    taskListItem.appendChild(lisItemCheck);

    const listItemView = document.createElement('div');
    listItemView.classList.add('list-item-view');
    listItemView.setAttribute('for', `txt__task-${task.id}`);
    const taskDescription = document.createElement('textarea');
    taskDescription.classList.add('txt__task-description');
    taskDescription.setAttribute('data-taskid', task.id);
    taskDescription.setAttribute('id', `txt__task-${task.id}`);
    taskDescription.setAttribute('spellcheck', false);
    taskDescription.textContent = `${task.description}`;
    taskDescription.addEventListener('input', () => {
      taskDescription.style.height = `${taskDescription.scrollHeight}px`;
      editTaskDescription(taskDescription);
    });
    taskDescription.addEventListener('focus', () => {
      toggleTaskTools(taskDescription);
    });
    taskDescription.addEventListener('blur', () => {
      setTimeout(() => { toggleTaskTools(taskDescription); }, 100);
    });
    listItemView.appendChild(taskDescription);
    taskListItem.appendChild(listItemView);

    const listItemTools = document.createElement('div');
    listItemTools.classList.add('list-item-tools');
    const trashBtn = document.createElement('button');
    trashBtn.classList.add('btn__task-remove', 'd-none');
    trashBtn.setAttribute('data-taskid', task.id);
    trashBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.71 98">
              <path d="M23.22,33c-3.06-.51-5.27-1.88-4.78-5.18s3.18-3.7,6-3.69q27.22.06,54.44,0c2.67,0,4.93.63,5.38,3.59S83,32.38,80,32.79c-.09,0-.17.13-.52.42C78.34,47.33,77.15,61.68,75.95,76c-.43,5.15-.79,10.3-1.36,15.43C74,96.85,71.44,99,66,99H36.81c-5.61,0-8.09-2.07-8.66-7.81-1-9.92-1.78-19.86-2.62-29.79C24.74,52.06,24,42.72,23.22,33Zm38,52,2.57,3.34c1.13-1,3.1-1.86,3.25-3C69,70.55,70.68,55.76,72.41,41c.24-2.05-.44-4-2.61-3.79-1.2.14-3,2.08-3.14,3.39C64.76,54.86,63.13,69.17,61.26,84.94Zm-19.71.65L39.11,65c-1-8.23-1.86-16.46-3-24.66-.17-1.22-1.53-2.53-2.69-3.21-.48-.28-2.28.76-2.74,1.6a6.35,6.35,0,0,0-.19,3.5c1.65,14.19,3.27,28.38,5.15,42.54.17,1.28,2.06,2.34,3.15,3.5Zm12.76-23c0-7.2,0-14.41,0-21.61,0-2.12-.4-4-3-4s-2.91,2-2.91,4.08q0,21.61,0,43.23c0,2.13.41,4,3,4s2.92-2,2.91-4.07C54.31,77,54.32,69.77,54.31,62.56Z" transform="translate(-15.65 -1)"/>
              <path d="M80.21,6.61c-.76.62-2,2.4-3.49,2.76C58.13,13.73,39.49,17.9,20.85,22.08c-2.7.61-4.49-.59-5.07-3.26s.69-4.39,3.34-5c2.92-.7,5.84-1.42,8.78-2,2.43-.51,4.9-.67,5.62-3.88.18-.82,1.74-1.65,2.8-1.91,6.3-1.55,12.6-3.1,19-4.26,1.6-.29,3.45.88,5.2,1.29a9.26,9.26,0,0,0,3.55.53c3.66-.67,7.25-1.71,10.9-2.43C77.94.51,80.31,2.55,80.21,6.61Z" transform="translate(-15.65 -1)"/>
            </svg>`;
    trashBtn.addEventListener('click', () => {
      removeATask(parseInt(trashBtn.dataset.taskid, 10));
      renderTaskList();
    });
    listItemTools.appendChild(trashBtn);

    const moveBtn = document.createElement('button');
    moveBtn.classList.add('btn__task-dragdrop');
    moveBtn.setAttribute('data-taskid', task.id);
    moveBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.43 98">
              <path
                d="M48.85,99l-1.75-.41a12.23,12.23,0,1,1,4.67.21,3.81,3.81,0,0,0-.62.2Zm0-98a4,4,0,0,1-.62.2,12.19,12.19,0,1,0,4.67.21L51.15,1ZM50,37.79A12.21,12.21,0,1,0,62.21,50,12.26,12.26,0,0,0,50,37.79Z"
                transform="translate(-37.79 -1)" />
            </svg>`;
    listItemTools.appendChild(moveBtn);
    taskListItem.appendChild(listItemTools);
    taskList.appendChild(taskListItem);
  });
  adjustTxtHeight();
};

// CRUD TASKS
const taskForm = document.querySelector('#task__form');
const taskInput = document.querySelector('#task__input');
const removeButton = document.querySelector('#btn__clear-done-tasks');

const submitTask = () => {
  _crud_js__WEBPACK_IMPORTED_MODULE_1__.addTask(toDoListArray, taskInput.value);
  taskInput.value = '';
  renderTaskList();
};

const removeTasks = (checklist) => {
  const taskIds = [];
  checklist.forEach((task) => {
    taskIds.push(parseInt(task.parentElement.parentElement.dataset.taskid, 10));
  });
  _crud_js__WEBPACK_IMPORTED_MODULE_1__.dropTask(toDoListArray, taskIds);
  renderTaskList();
};

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  submitTask();
});

removeButton.addEventListener('click', () => {
  removeTasks(document.querySelectorAll('.checklist-active'));
});

// START LOADING
window.addEventListener('load', () => {
  renderTaskList();
});

window.addEventListener('resize', () => {
  renderTaskList();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsdUhBQXdDO0FBQ3BGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHdFQUF3RSw2QkFBNkIsS0FBSyxjQUFjLG9EQUFvRCxzQkFBc0IsdUJBQXVCLDBCQUEwQix3QkFBd0IscUJBQXFCLHlCQUF5Qix3RUFBd0Usa0NBQWtDLDZCQUE2QixLQUFLLDBCQUEwQixvQkFBb0IsNkJBQTZCLGtDQUFrQywwQkFBMEIsaUJBQWlCLHlCQUF5QixrQkFBa0IsbUJBQW1CLHdCQUF3QixLQUFLLFlBQVksZ0JBQWdCLCtCQUErQix3QkFBd0IscUJBQXFCLHVCQUF1QixLQUFLLGtEQUFrRCxrQkFBa0Isb0RBQW9ELHNCQUFzQiwwQkFBMEIscUJBQXFCLDhCQUE4QixtQkFBbUIsb0JBQW9CLEtBQUssMEJBQTBCLG1CQUFtQiwrQkFBK0Isd0JBQXdCLHlCQUF5QixLQUFLLGtCQUFrQixzQkFBc0Isc0JBQXNCLHVCQUF1QixtQkFBbUIsc0JBQXNCLEtBQUssbURBQW1ELG9CQUFvQixtQkFBbUIsS0FBSyxnQkFBZ0IsbUJBQW1CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLG1CQUFtQixzQkFBc0IsS0FBSyw4QkFBOEIsa0JBQWtCLG1CQUFtQixpQkFBaUIsMkNBQTJDLEtBQUssbURBQW1ELGtCQUFrQixpQkFBaUIsbUJBQW1CLEtBQUssMkJBQTJCLHNCQUFzQixLQUFLLG9CQUFvQiwrQkFBK0IsS0FBSyxrQ0FBa0Msb0JBQW9CLG1CQUFtQixvQkFBb0IsS0FBSywyQkFBMkIsbUJBQW1CLEtBQUssK0JBQStCLHFCQUFxQixLQUFLLDJEQUEyRCxtQkFBbUIsS0FBSywrQkFBK0Isb0JBQW9CLEtBQUssc0JBQXNCLGlDQUFpQyxLQUFLLDBCQUEwQixvQkFBb0IsS0FBSyxZQUFZLHVCQUF1QixpQkFBaUIsZ0JBQWdCLEtBQUssOEJBQThCLGtCQUFrQix5QkFBeUIsS0FBSyx5Q0FBeUMseUJBQXlCLEtBQUssdURBQXVELHFCQUFxQixrQkFBa0Isa0JBQWtCLG9CQUFvQixnQ0FBZ0MseUJBQXlCLGdCQUFnQixjQUFjLEtBQUssa0RBQWtELG9CQUFvQixtQkFBbUIseUJBQXlCLGFBQWEsZUFBZSxLQUFLLDJCQUEyQixpQkFBaUIsS0FBSyxvQ0FBb0Msa0JBQWtCLGlCQUFpQixLQUFLLDBDQUEwQyxvQkFBb0IsS0FBSyx5QkFBeUIsa0JBQWtCLHdCQUF3QixLQUFLLHNDQUFzQyxnREFBZ0QsS0FBSywrQ0FBK0Msb0JBQW9CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHlCQUF5QixhQUFhLGdCQUFnQixLQUFLLDBCQUEwQixjQUFjLEtBQUssMEJBQTBCLGVBQWUsS0FBSyxnQ0FBZ0MsbUJBQW1CLDZCQUE2QixnREFBZ0QscUJBQXFCLEtBQUssdUJBQXVCLGdDQUFnQyxrQkFBa0IseUJBQXlCLEtBQUssaUJBQWlCLG9CQUFvQixLQUFLLHFCQUFxQiwyQ0FBMkMsS0FBSyxXQUFXLGtGQUFrRixZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sT0FBTyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLHdEQUF3RCw2QkFBNkIsS0FBSyxjQUFjLG9EQUFvRCxzQkFBc0IsdUJBQXVCLDBCQUEwQix3QkFBd0IscUJBQXFCLHlCQUF5QixxREFBcUQsa0NBQWtDLDZCQUE2QixLQUFLLDBCQUEwQixvQkFBb0IsNkJBQTZCLGtDQUFrQywwQkFBMEIsaUJBQWlCLHlCQUF5QixrQkFBa0IsbUJBQW1CLHdCQUF3QixLQUFLLFlBQVksZ0JBQWdCLCtCQUErQix3QkFBd0IscUJBQXFCLHVCQUF1QixLQUFLLGtEQUFrRCxrQkFBa0Isb0RBQW9ELHNCQUFzQiwwQkFBMEIscUJBQXFCLDhCQUE4QixtQkFBbUIsb0JBQW9CLEtBQUssMEJBQTBCLG1CQUFtQiwrQkFBK0Isd0JBQXdCLHlCQUF5QixLQUFLLGtCQUFrQixzQkFBc0Isc0JBQXNCLHVCQUF1QixtQkFBbUIsc0JBQXNCLEtBQUssbURBQW1ELG9CQUFvQixtQkFBbUIsS0FBSyxnQkFBZ0IsbUJBQW1CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLG1CQUFtQixzQkFBc0IsS0FBSyw4QkFBOEIsa0JBQWtCLG1CQUFtQixpQkFBaUIsMkNBQTJDLEtBQUssbURBQW1ELGtCQUFrQixpQkFBaUIsbUJBQW1CLEtBQUssMkJBQTJCLHNCQUFzQixLQUFLLG9CQUFvQiwrQkFBK0IsS0FBSyxrQ0FBa0Msb0JBQW9CLG1CQUFtQixvQkFBb0IsS0FBSywyQkFBMkIsbUJBQW1CLEtBQUssK0JBQStCLHFCQUFxQixLQUFLLDJEQUEyRCxtQkFBbUIsS0FBSywrQkFBK0Isb0JBQW9CLEtBQUssc0JBQXNCLGlDQUFpQyxLQUFLLDBCQUEwQixvQkFBb0IsS0FBSyxZQUFZLHVCQUF1QixpQkFBaUIsZ0JBQWdCLEtBQUssOEJBQThCLGtCQUFrQix5QkFBeUIsS0FBSyx5Q0FBeUMseUJBQXlCLEtBQUssdURBQXVELHFCQUFxQixrQkFBa0Isa0JBQWtCLG9CQUFvQixnQ0FBZ0MseUJBQXlCLGdCQUFnQixjQUFjLEtBQUssa0RBQWtELG9CQUFvQixtQkFBbUIseUJBQXlCLGFBQWEsZUFBZSxLQUFLLDJCQUEyQixpQkFBaUIsS0FBSyxvQ0FBb0Msa0JBQWtCLGlCQUFpQixLQUFLLDBDQUEwQyxvQkFBb0IsS0FBSyx5QkFBeUIsa0JBQWtCLHdCQUF3QixLQUFLLHNDQUFzQyxnREFBZ0QsS0FBSywrQ0FBK0Msb0JBQW9CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHlCQUF5QixhQUFhLGdCQUFnQixLQUFLLDBCQUEwQixjQUFjLEtBQUssMEJBQTBCLGVBQWUsS0FBSyxnQ0FBZ0MsbUJBQW1CLDZCQUE2QixnREFBZ0QscUJBQXFCLEtBQUssdUJBQXVCLGdDQUFnQyxrQkFBa0IseUJBQXlCLEtBQUssaUJBQWlCLG9CQUFvQixLQUFLLHFCQUFxQiwyQ0FBMkMsS0FBSyx1QkFBdUI7QUFDM2pUO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEseURBQXlEO0FBQ3RFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFJRTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDZ0M7O0FBRWxDLGlFQUFlO0FBQ2Y7QUFDQSxFQUFFLHNEQUFxQjtBQUN2QixDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDTEY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckJxQjtBQUNhO0FBQ0U7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDhDQUFhO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixrQkFBa0I7QUFDL0MsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSw4Q0FBYTtBQUNmOztBQUVBO0FBQ0E7QUFDQSwyREFBMkQsc0RBQVM7QUFDcEUsT0FBTyxzREFBUztBQUNoQjs7QUFFQTtBQUNBLGtCQUFrQixzREFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtEQUFrRCxRQUFRO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxRQUFRO0FBQzVEO0FBQ0EscUNBQXFDLGlCQUFpQjtBQUN0RDtBQUNBLHdDQUF3Qyw2QkFBNkI7QUFDckU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHlCQUF5QixtQ0FBbUM7QUFDNUQsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsNkNBQVk7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSw4Q0FBYTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NydWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2JhY2tncm91bmQtbGlzdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQW5kaWthIE5ldyBCYXNpY1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMXJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwO1xcclxcbiAgY29sb3I6ICMyNzJhMzE7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvZHlfX2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWF4LXdpZHRoOiAzNy41cmVtO1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF0sXFxyXFxudGV4dGFyZWEsXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJBbmRpa2EgTmV3IEJhc2ljXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjFyZW07XFxyXFxuICBjb2xvcjogIzI3MmEzMTtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBwYWRkaW5nOiAwIDIuNXJlbSAwIDFyZW07XFxyXFxuICBsaW5lLWhlaWdodDogM3JlbTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgaGVpZ2h0OiAzLjI1cmVtO1xcclxcbiAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyxcXHJcXG50ZXh0YXJlYTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fdGFzay1jaGVja2xpc3Qge1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2MSwgMTYxLCAxNjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuX190YXNrLWRyYWdkcm9wLFxcclxcbi5idG5fX3Rhc2stcmVtb3ZlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fdGFzay1yZW1vdmUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24gc3ZnIHtcXHJcXG4gIGZpbGw6IHJnYigxNjEsIDE2MSwgMTYxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fdGFzay1jaGVja2xpc3Qgc3ZnIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmaWxsOiAjODZjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tsaXN0LWFjdGl2ZSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2xpc3QtYWN0aXZlIHN2ZyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fdGFzay1kcmFnZHJvcCBzdmcsXFxyXFxuLmJ0bl9fdGFzay1yZW1vdmUgc3ZnIHtcXHJcXG4gIGhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fdGFzay1yZW1vdmUgc3ZnIHtcXHJcXG4gIGZpbGw6ICNlZjNjN2I7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHN2ZyB7XFxyXFxuICBmaWxsOiAjMDhiOWFlO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvZHlfX2NvbnRhaW5lciA+ICoge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib2R5X19pdGVtLFxcclxcbi50YXNrX19saXN0ID4gKiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5ib2R5X19pdGVtOjphZnRlcixcXHJcXG4udGFza19fbGlzdCA+ICo6OmFmdGVyIHtcXHJcXG4gIGRpc3BsYXk6IHRhYmxlO1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMC41cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM0ZGEyO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxMDAlO1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tfX3N1Ym1pdCxcXHJcXG4jYnRuX19yZXN5bmMtb2xkLXRhc2tzIHtcXHJcXG4gIHdpZHRoOiAyLjVyZW07XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tfX3N1Ym1pdCBzdmcge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2J0bl9fcmVzeW5jLW9sZC10YXNrcyBzdmcge1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxuICBmaWxsOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuX19yZXN5bmMtb2xkLXRhc2tzOmhvdmVyIHN2ZyB7XFxyXFxuICBmaWxsOiAjMDhiOWFlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtLXZpZXcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbS12aWV3OmZvY3VzLXdpdGhpbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjI1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbS1jaGVjayxcXHJcXG4ubGlzdC1pdGVtLXRvb2xzIHtcXHJcXG4gIHdpZHRoOiAyLjVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtLWNoZWNrIHtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0tdG9vbHMge1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbiNidG5fX2NsZWFyLWRvbmUtdGFza3Mge1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDIuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTksIDc3LCAxNjIsIDAuMjUpO1xcclxcbiAgY29sb3I6ICMxMzRkYTI7XFxyXFxufVxcclxcblxcclxcbi50YXNrX19oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzNGRhMjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1ub25lIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50eHQtYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMTA2KTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHlEQUE4QztFQUM5QywyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7RUFHRSxXQUFXO0VBQ1gsMkNBQTJDO0VBQzNDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztBQUNUOztBQUVBOztFQUVFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHlDQUF5QztFQUN6QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkFuZGlrYSBOZXcgQmFzaWNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjFyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMDtcXHJcXG4gIGNvbG9yOiAjMjcyYTMxO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2JhY2tncm91bmQtbGlzdC5zdmcnKTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib2R5X19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG1heC13aWR0aDogMzcuNXJlbTtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdLFxcclxcbnRleHRhcmVhLFxcclxcbmJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQW5kaWthIE5ldyBCYXNpY1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS4xcmVtO1xcclxcbiAgY29sb3I6ICMyNzJhMzE7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgcGFkZGluZzogMCAyLjVyZW0gMCAxcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDNyZW07XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGhlaWdodDogMy4yNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsXFxyXFxudGV4dGFyZWE6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG5fX3Rhc2stY2hlY2tsaXN0IHtcXHJcXG4gIHdpZHRoOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjEsIDE2MSwgMTYxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fdGFzay1kcmFnZHJvcCxcXHJcXG4uYnRuX190YXNrLXJlbW92ZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi5idG5fX3Rhc2stcmVtb3ZlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHN2ZyB7XFxyXFxuICBmaWxsOiByZ2IoMTYxLCAxNjEsIDE2MSk7XFxyXFxufVxcclxcblxcclxcbi5idG5fX3Rhc2stY2hlY2tsaXN0IHN2ZyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZmlsbDogIzg2YzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrbGlzdC1hY3RpdmUge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tsaXN0LWFjdGl2ZSBzdmcge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5idG5fX3Rhc2stZHJhZ2Ryb3Agc3ZnLFxcclxcbi5idG5fX3Rhc2stcmVtb3ZlIHN2ZyB7XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5idG5fX3Rhc2stcmVtb3ZlIHN2ZyB7XFxyXFxuICBmaWxsOiAjZWYzYzdiO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciBzdmcge1xcclxcbiAgZmlsbDogIzA4YjlhZTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5ib2R5X19jb250YWluZXIgPiAqIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9keV9faXRlbSxcXHJcXG4udGFza19fbGlzdCA+ICoge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9keV9faXRlbTo6YWZ0ZXIsXFxyXFxuLnRhc2tfX2xpc3QgPiAqOjphZnRlciB7XFxyXFxuICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDAuNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzNGRhMjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTAwJTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbiN0YXNrX19zdWJtaXQsXFxyXFxuI2J0bl9fcmVzeW5jLW9sZC10YXNrcyB7XFxyXFxuICB3aWR0aDogMi41cmVtO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbiN0YXNrX19zdWJtaXQgc3ZnIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbiNidG5fX3Jlc3luYy1vbGQtdGFza3Mgc3ZnIHtcXHJcXG4gIHdpZHRoOiAxcmVtO1xcclxcbiAgZmlsbDogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuI2J0bl9fcmVzeW5jLW9sZC10YXNrczpob3ZlciBzdmcge1xcclxcbiAgZmlsbDogIzA4YjlhZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbS12aWV3IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMCAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0tdmlldzpmb2N1cy13aXRoaW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgMC4yNSk7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0tY2hlY2ssXFxyXFxuLmxpc3QtaXRlbS10b29scyB7XFxyXFxuICB3aWR0aDogMi41cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbS1jaGVjayB7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtLXRvb2xzIHtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuX19jbGVhci1kb25lLXRhc2tzIHtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAyLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5LCA3NywgMTYyLCAwLjI1KTtcXHJcXG4gIGNvbG9yOiAjMTM0ZGEyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza19faGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzRkYTI7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmQtbm9uZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udHh0LWFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDEwNik7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBzYXZlTG9jYWxTdG9yYWdlID0gKGFycikgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLCBKU09OLnN0cmluZ2lmeShhcnIpKTtcbn07XG5cbmNvbnN0IGxvYWRMb2NhbFN0b3JhZ2UgPSAoYXJyKSA9PiB7XG4gIGNvbnN0IGxvY2FsVG9Eb0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpKTtcbiAgaWYgKGxvY2FsVG9Eb0xpc3QpIGFyciA9IGxvY2FsVG9Eb0xpc3Q7XG4gIHJldHVybiBhcnI7XG59O1xuXG5jb25zdCBhZGRUYXNrID0gKGFyciwgdGFzaykgPT4ge1xuICBhcnIucHVzaCh7IGlkOiBhcnIubGVuZ3RoICsgMSwgZGVzY3JpcHRpb246IHRhc2ssIGNvbXBsZXRlZDogZmFsc2UgfSk7XG4gIHNhdmVMb2NhbFN0b3JhZ2UoYXJyKTtcbn07XG5cbmNvbnN0IGRyb3BUYXNrID0gKGFyciwgdGFza0lkcykgPT4ge1xuICB0YXNrSWRzLmZvckVhY2goKGlkVGFzaykgPT4ge1xuICAgIGFyciA9IGFyci5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IGlkVGFzayk7XG4gIH0pO1xuXG4gIGFyciA9IGFyci5tYXAoKHRhc2ssIGluZCkgPT4ge1xuICAgIHRhc2suaWQgPSBpbmQgKyAxO1xuICAgIHJldHVybiB0YXNrO1xuICB9KTtcbiAgc2F2ZUxvY2FsU3RvcmFnZShhcnIpO1xufTtcblxuY29uc3QgZWRpdFRhc2sgPSAoYXJyLCBpZFRhc2ssIGRlc2MpID0+IHtcbiAgYXJyW2lkVGFzayAtIDFdLmRlc2NyaXB0aW9uID0gZGVzYztcbiAgc2F2ZUxvY2FsU3RvcmFnZShhcnIpO1xufTtcblxuZXhwb3J0IHtcbiAgc2F2ZUxvY2FsU3RvcmFnZSwgbG9hZExvY2FsU3RvcmFnZSwgYWRkVGFzaywgZHJvcFRhc2ssIGVkaXRUYXNrLFxufTtcbiIsImltcG9ydCAqIGFzIENSVUQgZnJvbSAnLi9jcnVkLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgKGFyciwgdGFza0lkLCBzdGF0dXMpID0+IHtcbiAgYXJyW3Rhc2tJZCAtIDFdLmNvbXBsZXRlZCA9IHN0YXR1cztcbiAgQ1JVRC5zYXZlTG9jYWxTdG9yYWdlKGFycik7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgKiBhcyBDUlVEIGZyb20gJy4vY3J1ZC5qcyc7XG5pbXBvcnQgc2V0U3RhdHVzIGZyb20gJy4vc3RhdHVzLmpzJztcblxuY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19fbGlzdCcpO1xubGV0IHRvRG9MaXN0QXJyYXkgPSBbXTtcblxuY29uc3QgZWRpdFRhc2tEZXNjcmlwdGlvbiA9ICh0YXNrRWxlbWVudCkgPT4ge1xuICBDUlVELmVkaXRUYXNrKHRvRG9MaXN0QXJyYXksIHBhcnNlSW50KHRhc2tFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LnRhc2tpZCwgMTApLFxuICAgIHRhc2tFbGVtZW50LnZhbHVlKTtcbn07XG5cbmNvbnN0IGFkanVzdFR4dEhlaWdodCA9ICgpID0+IHtcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnR4dF9fdGFzay1kZXNjcmlwdGlvbicpO1xuICBpZiAodGV4dEVsZW1lbnRzKSB7XG4gICAgdGV4dEVsZW1lbnRzLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgIGVsZW0uc3R5bGUuaGVpZ2h0ID0gYCR7ZWxlbS5zY3JvbGxIZWlnaHR9cHhgO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCB0b2dnbGVUYXNrVG9vbHMgPSAodGFza0VsZW1lbnQpID0+IHtcbiAgY29uc3QgcmVtQnRuID0gdGFza0VsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0U2libGluZy5maXJzdENoaWxkO1xuICBjb25zdCBkcmFnQnRuID0gdGFza0VsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0U2libGluZy5sYXN0Q2hpbGQ7XG4gIHJlbUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcbiAgZHJhZ0J0bi5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcbn07XG5cbmNvbnN0IHJlbW92ZUFUYXNrID0gKGlkVGFzaykgPT4ge1xuICBDUlVELmRyb3BUYXNrKHRvRG9MaXN0QXJyYXksIFtpZFRhc2tdKTtcbn07XG5cbmNvbnN0IHVwZGF0ZVRhc2tTdGF0dXMgPSAoY2hlY2tFbGVtZW50KSA9PiB7XG4gIGNvbnN0IHRhc2tJZCA9IHBhcnNlSW50KGNoZWNrRWxlbWVudC5kYXRhc2V0LnRhc2tpZCwgMTApO1xuICBpZiAoY2hlY2tFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tsaXN0LWFjdGl2ZScpKSBzZXRTdGF0dXModG9Eb0xpc3RBcnJheSwgdGFza0lkLCB0cnVlKTtcbiAgZWxzZSBzZXRTdGF0dXModG9Eb0xpc3RBcnJheSwgdGFza0lkLCBmYWxzZSk7XG59O1xuXG5jb25zdCByZW5kZXJUYXNrTGlzdCA9ICgpID0+IHtcbiAgdG9Eb0xpc3RBcnJheSA9IENSVUQubG9hZExvY2FsU3RvcmFnZSh0b0RvTGlzdEFycmF5KTtcbiAgdGFza0xpc3QuaW5uZXJIVE1MID0gJyc7XG4gIHRvRG9MaXN0QXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IHRhc2tMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgdGFza0xpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2tfX2xpc3QtaXRlbScpO1xuICAgIHRhc2tMaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza2lkJywgdGFzay5pZCk7XG4gICAgY29uc3QgbGlzSXRlbUNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGlzSXRlbUNoZWNrLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbS1jaGVjaycpO1xuICAgIGNvbnN0IGNoZWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2hlY2tCdG4uY2xhc3NMaXN0LmFkZCgnYnRuX190YXNrLWNoZWNrbGlzdCcpO1xuICAgIGlmICh0YXNrLmNvbXBsZXRlZCkgY2hlY2tCdG4uY2xhc3NMaXN0LmFkZCgnY2hlY2tsaXN0LWFjdGl2ZScpO1xuICAgIGNoZWNrQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10YXNraWQnLCB0YXNrLmlkKTtcbiAgICBjaGVja0J0bi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xLDUwLjA5YzIuNzktMi40Niw1LjIxLTUuMTQsOC4xNC03LDQuMjEtMi43Miw4LjQ2LTEuNzMsMTIuMjUsMS4yOUMyNiw0OCwyOC44Niw1MywzMS4zOSw1OC4yNWMuNzQsMS41MiwxLjQyLDMuMDYsMi4wOCw0LjUsNi04LjEzLDExLjc5LTE2LjI3LDE3LjkyLTI0LjEzQzU4LjA5LDMwLDY1LjUsMjIsNzQuMjgsMTUuNDRjNS40NC00LjA4LDExLjE5LTcuNjQsMTguMTYtOC4zMmEzOS41NSwzOS41NSwwLDAsMSw2LjMzLjM3bC4yMi43N2MtLjg1LjcxLTEuNjgsMS40My0yLjU0LDIuMTNDODEuMTQsMjIuODIsNjcuMTcsMzYuNTQsNTYuODYsNTMuNTNjLTMuNzcsNi4yMS02LjY2LDEyLjk0LTEwLjEyLDE5LjM0LTIuNiw0LjgxLTUuMjYsOS42MS04LjI5LDE0LjE1YTEzLjExLDEzLjExLDAsMCwxLTguNzQsNS44OGMtMy4zNS41OC01LS40NC02LTMuNjktMi44Mi05LjIyLTYtMTguMy0xMC44OC0yNi42N0M5LjM2LDU2LjUzLDcsNTQuMDYsMSw1MC4wOVpcIiAvPlxuICAgICAgICAgICAgPC9zdmc+YDtcbiAgICBjaGVja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNoZWNrQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrbGlzdC1hY3RpdmUnKTtcbiAgICAgIHVwZGF0ZVRhc2tTdGF0dXMoY2hlY2tCdG4pO1xuICAgIH0pO1xuICAgIGxpc0l0ZW1DaGVjay5hcHBlbmRDaGlsZChjaGVja0J0bik7XG4gICAgdGFza0xpc3RJdGVtLmFwcGVuZENoaWxkKGxpc0l0ZW1DaGVjayk7XG5cbiAgICBjb25zdCBsaXN0SXRlbVZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaXN0SXRlbVZpZXcuY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtLXZpZXcnKTtcbiAgICBsaXN0SXRlbVZpZXcuc2V0QXR0cmlidXRlKCdmb3InLCBgdHh0X190YXNrLSR7dGFzay5pZH1gKTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0eHRfX3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgICB0YXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLXRhc2tpZCcsIHRhc2suaWQpO1xuICAgIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgYHR4dF9fdGFzay0ke3Rhc2suaWR9YCk7XG4gICAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnc3BlbGxjaGVjaycsIGZhbHNlKTtcbiAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHt0YXNrLmRlc2NyaXB0aW9ufWA7XG4gICAgdGFza0Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgdGFza0Rlc2NyaXB0aW9uLnN0eWxlLmhlaWdodCA9IGAke3Rhc2tEZXNjcmlwdGlvbi5zY3JvbGxIZWlnaHR9cHhgO1xuICAgICAgZWRpdFRhc2tEZXNjcmlwdGlvbih0YXNrRGVzY3JpcHRpb24pO1xuICAgIH0pO1xuICAgIHRhc2tEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICAgIHRvZ2dsZVRhc2tUb29scyh0YXNrRGVzY3JpcHRpb24pO1xuICAgIH0pO1xuICAgIHRhc2tEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRvZ2dsZVRhc2tUb29scyh0YXNrRGVzY3JpcHRpb24pOyB9LCAxMDApO1xuICAgIH0pO1xuICAgIGxpc3RJdGVtVmlldy5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICAgIHRhc2tMaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0SXRlbVZpZXcpO1xuXG4gICAgY29uc3QgbGlzdEl0ZW1Ub29scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3RJdGVtVG9vbHMuY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtLXRvb2xzJyk7XG4gICAgY29uc3QgdHJhc2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0cmFzaEJ0bi5jbGFzc0xpc3QuYWRkKCdidG5fX3Rhc2stcmVtb3ZlJywgJ2Qtbm9uZScpO1xuICAgIHRyYXNoQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10YXNraWQnLCB0YXNrLmlkKTtcbiAgICB0cmFzaEJ0bi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2OC43MSA5OFwiPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIzLjIyLDMzYy0zLjA2LS41MS01LjI3LTEuODgtNC43OC01LjE4czMuMTgtMy43LDYtMy42OXEyNy4yMi4wNiw1NC40NCwwYzIuNjcsMCw0LjkzLjYzLDUuMzgsMy41OVM4MywzMi4zOCw4MCwzMi43OWMtLjA5LDAtLjE3LjEzLS41Mi40MkM3OC4zNCw0Ny4zMyw3Ny4xNSw2MS42OCw3NS45NSw3NmMtLjQzLDUuMTUtLjc5LDEwLjMtMS4zNiwxNS40M0M3NCw5Ni44NSw3MS40NCw5OSw2Niw5OUgzNi44MWMtNS42MSwwLTguMDktMi4wNy04LjY2LTcuODEtMS05LjkyLTEuNzgtMTkuODYtMi42Mi0yOS43OUMyNC43NCw1Mi4wNiwyNCw0Mi43MiwyMy4yMiwzM1ptMzgsNTIsMi41NywzLjM0YzEuMTMtMSwzLjEtMS44NiwzLjI1LTNDNjksNzAuNTUsNzAuNjgsNTUuNzYsNzIuNDEsNDFjLjI0LTIuMDUtLjQ0LTQtMi42MS0zLjc5LTEuMi4xNC0zLDIuMDgtMy4xNCwzLjM5QzY0Ljc2LDU0Ljg2LDYzLjEzLDY5LjE3LDYxLjI2LDg0Ljk0Wm0tMTkuNzEuNjVMMzkuMTEsNjVjLTEtOC4yMy0xLjg2LTE2LjQ2LTMtMjQuNjYtLjE3LTEuMjItMS41My0yLjUzLTIuNjktMy4yMS0uNDgtLjI4LTIuMjguNzYtMi43NCwxLjZhNi4zNSw2LjM1LDAsMCwwLS4xOSwzLjVjMS42NSwxNC4xOSwzLjI3LDI4LjM4LDUuMTUsNDIuNTQuMTcsMS4yOCwyLjA2LDIuMzQsMy4xNSwzLjVabTEyLjc2LTIzYzAtNy4yLDAtMTQuNDEsMC0yMS42MSwwLTIuMTItLjQtNC0zLTRzLTIuOTEsMi0yLjkxLDQuMDhxMCwyMS42MSwwLDQzLjIzYzAsMi4xMy40MSw0LDMsNHMyLjkyLTIsMi45MS00LjA3QzU0LjMxLDc3LDU0LjMyLDY5Ljc3LDU0LjMxLDYyLjU2WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTUuNjUgLTEpXCIvPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTgwLjIxLDYuNjFjLS43Ni42Mi0yLDIuNC0zLjQ5LDIuNzZDNTguMTMsMTMuNzMsMzkuNDksMTcuOSwyMC44NSwyMi4wOGMtMi43LjYxLTQuNDktLjU5LTUuMDctMy4yNnMuNjktNC4zOSwzLjM0LTVjMi45Mi0uNyw1Ljg0LTEuNDIsOC43OC0yLDIuNDMtLjUxLDQuOS0uNjcsNS42Mi0zLjg4LjE4LS44MiwxLjc0LTEuNjUsMi44LTEuOTEsNi4zLTEuNTUsMTIuNi0zLjEsMTktNC4yNiwxLjYtLjI5LDMuNDUuODgsNS4yLDEuMjlhOS4yNiw5LjI2LDAsMCwwLDMuNTUuNTNjMy42Ni0uNjcsNy4yNS0xLjcxLDEwLjktMi40M0M3Ny45NC41MSw4MC4zMSwyLjU1LDgwLjIxLDYuNjFaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNS42NSAtMSlcIi8+XG4gICAgICAgICAgICA8L3N2Zz5gO1xuICAgIHRyYXNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVtb3ZlQVRhc2socGFyc2VJbnQodHJhc2hCdG4uZGF0YXNldC50YXNraWQsIDEwKSk7XG4gICAgICByZW5kZXJUYXNrTGlzdCgpO1xuICAgIH0pO1xuICAgIGxpc3RJdGVtVG9vbHMuYXBwZW5kQ2hpbGQodHJhc2hCdG4pO1xuXG4gICAgY29uc3QgbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1vdmVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuX190YXNrLWRyYWdkcm9wJyk7XG4gICAgbW92ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza2lkJywgdGFzay5pZCk7XG4gICAgbW92ZUJ0bi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNC40MyA5OFwiPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNNDguODUsOTlsLTEuNzUtLjQxYTEyLjIzLDEyLjIzLDAsMSwxLDQuNjcuMjEsMy44MSwzLjgxLDAsMCwwLS42Mi4yWm0wLTk4YTQsNCwwLDAsMS0uNjIuMiwxMi4xOSwxMi4xOSwwLDEsMCw0LjY3LjIxTDUxLjE1LDFaTTUwLDM3Ljc5QTEyLjIxLDEyLjIxLDAsMSwwLDYyLjIxLDUwLDEyLjI2LDEyLjI2LDAsMCwwLDUwLDM3Ljc5WlwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zNy43OSAtMSlcIiAvPlxuICAgICAgICAgICAgPC9zdmc+YDtcbiAgICBsaXN0SXRlbVRvb2xzLmFwcGVuZENoaWxkKG1vdmVCdG4pO1xuICAgIHRhc2tMaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0SXRlbVRvb2xzKTtcbiAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrTGlzdEl0ZW0pO1xuICB9KTtcbiAgYWRqdXN0VHh0SGVpZ2h0KCk7XG59O1xuXG4vLyBDUlVEIFRBU0tTXG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrX19mb3JtJyk7XG5jb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19faW5wdXQnKTtcbmNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fX2NsZWFyLWRvbmUtdGFza3MnKTtcblxuY29uc3Qgc3VibWl0VGFzayA9ICgpID0+IHtcbiAgQ1JVRC5hZGRUYXNrKHRvRG9MaXN0QXJyYXksIHRhc2tJbnB1dC52YWx1ZSk7XG4gIHRhc2tJbnB1dC52YWx1ZSA9ICcnO1xuICByZW5kZXJUYXNrTGlzdCgpO1xufTtcblxuY29uc3QgcmVtb3ZlVGFza3MgPSAoY2hlY2tsaXN0KSA9PiB7XG4gIGNvbnN0IHRhc2tJZHMgPSBbXTtcbiAgY2hlY2tsaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICB0YXNrSWRzLnB1c2gocGFyc2VJbnQodGFzay5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC50YXNraWQsIDEwKSk7XG4gIH0pO1xuICBDUlVELmRyb3BUYXNrKHRvRG9MaXN0QXJyYXksIHRhc2tJZHMpO1xuICByZW5kZXJUYXNrTGlzdCgpO1xufTtcblxudGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBzdWJtaXRUYXNrKCk7XG59KTtcblxucmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICByZW1vdmVUYXNrcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tsaXN0LWFjdGl2ZScpKTtcbn0pO1xuXG4vLyBTVEFSVCBMT0FESU5HXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgcmVuZGVyVGFza0xpc3QoKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICByZW5kZXJUYXNrTGlzdCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=