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
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Andika New Basic\", sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.1rem;\r\n  letter-spacing: 0;\r\n  color: #272a31;\r\n  font-style: normal;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n.body__container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  width: 90%;\r\n  max-width: 37.5rem;\r\n  margin: 4rem auto;\r\n  background: white;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n  padding: 1rem !important;\r\n  font-size: 1.5rem;\r\n  line-height: 1;\r\n  text-align: left;\r\n}\r\n\r\ninput[type=text],\r\ntextarea,\r\nbutton {\r\n  width: 100%;\r\n  font-family: \"Andika New Basic\", sans-serif;\r\n  font-size: 1rem;\r\n  color: #272a31;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\ninput[type=text] {\r\n  height: 3rem;\r\n  padding: 0 2.5rem 0 1rem;\r\n  line-height: 3rem;\r\n  font-style: italic;\r\n}\r\n\r\ntextarea {\r\n  height: 3.25rem;\r\n  padding: 1rem 0;\r\n  overflow: hidden;\r\n  resize: none;\r\n  cursor: default;\r\n}\r\n\r\ninput[type=text]:focus,\r\ntextarea:focus {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\nbutton {\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn__task-checklist {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  padding: 0;\r\n  border: 1px solid rgb(161, 161, 161);\r\n}\r\n\r\n.btn__task-dragdrop,\r\n.btn__task-remove {\r\n  width: 100%;\r\n  padding: 0;\r\n  cursor: move;\r\n}\r\n\r\n.btn__task-remove {\r\n  cursor: pointer;\r\n}\r\n\r\nbutton svg {\r\n  fill: rgb(161, 161, 161);\r\n}\r\n\r\n.btn__task-checklist svg {\r\n  display: none;\r\n  height: 100%;\r\n  fill: #86c555;\r\n}\r\n\r\n.checklist-active {\r\n  border: none;\r\n}\r\n\r\n.checklist-active svg {\r\n  display: block;\r\n}\r\n\r\n.btn__task-dragdrop svg,\r\n.btn__task-remove svg {\r\n  height: 1rem;\r\n}\r\n\r\n.btn__task-remove svg {\r\n  fill: #ef3c7b;\r\n}\r\n\r\nbutton:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\nbutton:hover svg {\r\n  fill: #08b9ae;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.body__container > * {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.body__item,\r\n.task__list > * {\r\n  position: relative;\r\n}\r\n\r\n.body__item::after,\r\n.task__list > *::after {\r\n  display: table;\r\n  content: '';\r\n  width: 100%;\r\n  height: 0.5px;\r\n  background-color: #134da2;\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n}\r\n\r\n#task__submit,\r\n#btn__resync-old-tasks {\r\n  width: 2.5rem;\r\n  height: 3rem;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n#btn__resync-old-tasks {\r\n  height: auto;\r\n  bottom: 0;\r\n}\r\n\r\n.btn__resync-old-task-msg {\r\n  display: flex;\r\n  font-size: 0.5rem;\r\n  position: absolute;\r\n  top: 1.2rem;\r\n  right: 2.5rem;\r\n}\r\n\r\n.hide__element {\r\n  display: none;\r\n}\r\n\r\n#task__submit svg {\r\n  width: 50%;\r\n}\r\n\r\n#btn__resync-old-tasks svg {\r\n  width: 1rem;\r\n  fill: #fff;\r\n}\r\n\r\n#btn__resync-old-tasks:hover svg {\r\n  fill: #08b9ae;\r\n}\r\n\r\n.list-item-view {\r\n  width: 100%;\r\n  padding: 0 2.5rem;\r\n}\r\n\r\n.list-item-view:focus-within {\r\n  background-color: rgba(255, 255, 0, 0.25);\r\n}\r\n\r\n.list-item-check,\r\n.list-item-tools {\r\n  width: 2.5rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.list-item-check {\r\n  left: 0;\r\n}\r\n\r\n.list-item-tools {\r\n  right: 0;\r\n}\r\n\r\n#btn__clear-done-tasks {\r\n  height: 3rem;\r\n  padding: 0.5rem 2.5rem;\r\n  background-color: rgba(19, 77, 162, 0.25);\r\n  color: #134da2;\r\n}\r\n\r\n.task__header {\r\n  background-color: #134da2;\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.d-none {\r\n  display: none;\r\n}\r\n\r\n.txt-active {\r\n  background-color: rgb(235, 235, 106);\r\n}\r\n\r\n.dragging {\r\n  opacity: 0.7;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,2CAA2C;EAC3C,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,yDAA8C;EAC9C,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,UAAU;EACV,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,SAAS;EACT,wBAAwB;EACxB,iBAAiB;EACjB,cAAc;EACd,gBAAgB;AAClB;;AAEA;;;EAGE,WAAW;EACX,2CAA2C;EAC3C,eAAe;EACf,cAAc;EACd,uBAAuB;EACvB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,wBAAwB;EACxB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,UAAU;EACV,oCAAoC;AACtC;;AAEA;;EAEE,WAAW;EACX,UAAU;EACV,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;;EAEE,cAAc;EACd,WAAW;EACX,WAAW;EACX,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,SAAS;EACT,OAAO;AACT;;AAEA;;EAEE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;;EAEE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,MAAM;EACN,SAAS;AACX;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,yCAAyC;EACzC,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,YAAY;AACd","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Andika New Basic\", sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.1rem;\r\n  letter-spacing: 0;\r\n  color: #272a31;\r\n  font-style: normal;\r\n  background-image: url('./background-list.svg');\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n.body__container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  width: 90%;\r\n  max-width: 37.5rem;\r\n  margin: 4rem auto;\r\n  background: white;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n  padding: 1rem !important;\r\n  font-size: 1.5rem;\r\n  line-height: 1;\r\n  text-align: left;\r\n}\r\n\r\ninput[type=text],\r\ntextarea,\r\nbutton {\r\n  width: 100%;\r\n  font-family: \"Andika New Basic\", sans-serif;\r\n  font-size: 1rem;\r\n  color: #272a31;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\ninput[type=text] {\r\n  height: 3rem;\r\n  padding: 0 2.5rem 0 1rem;\r\n  line-height: 3rem;\r\n  font-style: italic;\r\n}\r\n\r\ntextarea {\r\n  height: 3.25rem;\r\n  padding: 1rem 0;\r\n  overflow: hidden;\r\n  resize: none;\r\n  cursor: default;\r\n}\r\n\r\ninput[type=text]:focus,\r\ntextarea:focus {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\nbutton {\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn__task-checklist {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  padding: 0;\r\n  border: 1px solid rgb(161, 161, 161);\r\n}\r\n\r\n.btn__task-dragdrop,\r\n.btn__task-remove {\r\n  width: 100%;\r\n  padding: 0;\r\n  cursor: move;\r\n}\r\n\r\n.btn__task-remove {\r\n  cursor: pointer;\r\n}\r\n\r\nbutton svg {\r\n  fill: rgb(161, 161, 161);\r\n}\r\n\r\n.btn__task-checklist svg {\r\n  display: none;\r\n  height: 100%;\r\n  fill: #86c555;\r\n}\r\n\r\n.checklist-active {\r\n  border: none;\r\n}\r\n\r\n.checklist-active svg {\r\n  display: block;\r\n}\r\n\r\n.btn__task-dragdrop svg,\r\n.btn__task-remove svg {\r\n  height: 1rem;\r\n}\r\n\r\n.btn__task-remove svg {\r\n  fill: #ef3c7b;\r\n}\r\n\r\nbutton:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\nbutton:hover svg {\r\n  fill: #08b9ae;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.body__container > * {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.body__item,\r\n.task__list > * {\r\n  position: relative;\r\n}\r\n\r\n.body__item::after,\r\n.task__list > *::after {\r\n  display: table;\r\n  content: '';\r\n  width: 100%;\r\n  height: 0.5px;\r\n  background-color: #134da2;\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n}\r\n\r\n#task__submit,\r\n#btn__resync-old-tasks {\r\n  width: 2.5rem;\r\n  height: 3rem;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n#btn__resync-old-tasks {\r\n  height: auto;\r\n  bottom: 0;\r\n}\r\n\r\n.btn__resync-old-task-msg {\r\n  display: flex;\r\n  font-size: 0.5rem;\r\n  position: absolute;\r\n  top: 1.2rem;\r\n  right: 2.5rem;\r\n}\r\n\r\n.hide__element {\r\n  display: none;\r\n}\r\n\r\n#task__submit svg {\r\n  width: 50%;\r\n}\r\n\r\n#btn__resync-old-tasks svg {\r\n  width: 1rem;\r\n  fill: #fff;\r\n}\r\n\r\n#btn__resync-old-tasks:hover svg {\r\n  fill: #08b9ae;\r\n}\r\n\r\n.list-item-view {\r\n  width: 100%;\r\n  padding: 0 2.5rem;\r\n}\r\n\r\n.list-item-view:focus-within {\r\n  background-color: rgba(255, 255, 0, 0.25);\r\n}\r\n\r\n.list-item-check,\r\n.list-item-tools {\r\n  width: 2.5rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.list-item-check {\r\n  left: 0;\r\n}\r\n\r\n.list-item-tools {\r\n  right: 0;\r\n}\r\n\r\n#btn__clear-done-tasks {\r\n  height: 3rem;\r\n  padding: 0.5rem 2.5rem;\r\n  background-color: rgba(19, 77, 162, 0.25);\r\n  color: #134da2;\r\n}\r\n\r\n.task__header {\r\n  background-color: #134da2;\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.d-none {\r\n  display: none;\r\n}\r\n\r\n.txt-active {\r\n  background-color: rgb(235, 235, 106);\r\n}\r\n\r\n.dragging {\r\n  opacity: 0.7;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "dropTask": () => (/* binding */ dropTask),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "updateStatusTask": () => (/* binding */ updateStatusTask),
/* harmony export */   "updateOrderTask": () => (/* binding */ updateOrderTask),
/* harmony export */   "resyncTask": () => (/* binding */ resyncTask)
/* harmony export */ });
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");


const today = new Date();

const addTask = (arr, task) => {
  arr.push({
    id: arr.length + 1, description: task, completed: false, date: today.getTime(),
  });
  _localStorage_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalStorage(arr);
};

const dropTask = (arr, taskIds) => {
  taskIds.forEach((idTask) => {
    arr = arr.filter((task) => task.id !== idTask);
  });

  arr = arr.map((task, ind) => {
    task.id = ind + 1;
    return task;
  });
  _localStorage_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalStorage(arr);
};

const editTask = (arr, idTask, desc) => {
  arr[idTask - 1].description = desc;
  _localStorage_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalStorage(arr);
};

const updateStatusTask = (arr, taskId, status) => {
  arr[taskId - 1].completed = status;
  _localStorage_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalStorage(arr);
};

const updateOrderTask = (arr, newOrderIds) => {
  const newArr = [];
  newOrderIds.forEach((id, index) => {
    arr[id - 1].id = index + 1;
    newArr.push(arr[id - 1]);
  });
  _localStorage_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalStorage(newArr);
};

const resyncTask = (arr) => {
  const taskIds = [];
  arr.forEach((ele) => {
    const dateTask = new Date(ele.date).getTime();
    const dateToday = today.getTime();
    if ((dateToday - dateTask) > 3600000) taskIds.push(ele.id);
  });
  dropTask(arr, taskIds);
};




/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveLocalStorage": () => (/* binding */ saveLocalStorage),
/* harmony export */   "loadLocalStorage": () => (/* binding */ loadLocalStorage)
/* harmony export */ });
const saveLocalStorage = (arr) => {
  localStorage.setItem('toDoList', JSON.stringify(arr));
};

const loadLocalStorage = () => {
  const localToDoList = JSON.parse(localStorage.getItem('toDoList'));
  if (localToDoList) return localToDoList;
  saveLocalStorage([]);
  return [];
};



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
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");
/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crud.js */ "./src/crud.js");




const taskForm = document.querySelector('#task__form');
const taskInput = document.querySelector('#task__input');
const removeButton = document.querySelector('#btn__clear-done-tasks');
const taskList = document.querySelector('#task__list');
const resyncButton = document.querySelector('#btn__resync-old-tasks');

const manageToDoListArray = (() => {
  let toDoListArray = [];
  return () => {
    toDoListArray = _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.loadLocalStorage();
    return toDoListArray;
  };
})();

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

const updateTaskStatus = (checkElement) => {
  const taskId = checkElement.dataset.taskid;
  if (checkElement.classList.contains('checklist-active')) _crud_js__WEBPACK_IMPORTED_MODULE_2__.updateStatusTask(manageToDoListArray(), taskId, true);
  else _crud_js__WEBPACK_IMPORTED_MODULE_2__.updateStatusTask(manageToDoListArray(), taskId, false);
};

const renderTaskList = () => {
  const loadedToDoList = manageToDoListArray();
  taskList.innerHTML = '';
  loadedToDoList.forEach((task) => {
    const taskListItem = document.createElement('li');
    taskListItem.classList.add('task__list-item');
    taskListItem.setAttribute('data-taskid', task.id);
    taskListItem.draggable = true;
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
      _crud_js__WEBPACK_IMPORTED_MODULE_2__.editTask(manageToDoListArray(), +taskDescription.dataset.taskid, taskDescription.value);
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
      _crud_js__WEBPACK_IMPORTED_MODULE_2__.dropTask(manageToDoListArray(), [+trashBtn.dataset.taskid]);
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
const submitTask = () => {
  _crud_js__WEBPACK_IMPORTED_MODULE_2__.addTask(manageToDoListArray(), taskInput.value);
  taskInput.value = '';
  renderTaskList();
};

const removeTasks = (checklist) => {
  const taskIds = [];
  checklist.forEach((task) => {
    taskIds.push(+task.dataset.taskid);
  });
  _crud_js__WEBPACK_IMPORTED_MODULE_2__.dropTask(manageToDoListArray(), taskIds);
  renderTaskList();
};

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (taskInput.value !== '') submitTask();
});

removeButton.addEventListener('click', () => {
  removeTasks(document.querySelectorAll('.checklist-active'));
});

resyncButton.addEventListener('click', () => {
  _crud_js__WEBPACK_IMPORTED_MODULE_2__.resyncTask(manageToDoListArray());
  renderTaskList();
});

resyncButton.addEventListener('mouseover', () => {
  const resyncMsg = document.querySelector('.btn__resync-old-task-msg');
  resyncMsg.classList.remove('hide__element');
});

resyncButton.addEventListener('mouseout', () => {
  const resyncMsg = document.querySelector('.btn__resync-old-task-msg');
  resyncMsg.classList.add('hide__element');
});

// START LOADING
window.addEventListener('load', () => {
  renderTaskList();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUc7QUFDSCxFQUFFLDhDQUFhO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsRUFBRSxnREFBZTtBQUNqQjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3J1ZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYmFja2dyb3VuZC1saXN0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJBbmRpa2EgTmV3IEJhc2ljXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMS4xcmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XFxyXFxuICBjb2xvcjogIzI3MmEzMTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9keV9fY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXgtd2lkdGg6IDM3LjVyZW07XFxyXFxuICBtYXJnaW46IDRyZW0gYXV0bztcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT10ZXh0XSxcXHJcXG50ZXh0YXJlYSxcXHJcXG5idXR0b24ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkFuZGlrYSBOZXcgQmFzaWNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgY29sb3I6ICMyNzJhMzE7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgcGFkZGluZzogMCAyLjVyZW0gMCAxcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDNyZW07XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGhlaWdodDogMy4yNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsXFxyXFxudGV4dGFyZWE6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG5fX3Rhc2stY2hlY2tsaXN0IHtcXHJcXG4gIHdpZHRoOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjEsIDE2MSwgMTYxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fdGFzay1kcmFnZHJvcCxcXHJcXG4uYnRuX190YXNrLXJlbW92ZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi5idG5fX3Rhc2stcmVtb3ZlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHN2ZyB7XFxyXFxuICBmaWxsOiByZ2IoMTYxLCAxNjEsIDE2MSk7XFxyXFxufVxcclxcblxcclxcbi5idG5fX3Rhc2stY2hlY2tsaXN0IHN2ZyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZmlsbDogIzg2YzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrbGlzdC1hY3RpdmUge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tsaXN0LWFjdGl2ZSBzdmcge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5idG5fX3Rhc2stZHJhZ2Ryb3Agc3ZnLFxcclxcbi5idG5fX3Rhc2stcmVtb3ZlIHN2ZyB7XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5idG5fX3Rhc2stcmVtb3ZlIHN2ZyB7XFxyXFxuICBmaWxsOiAjZWYzYzdiO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciBzdmcge1xcclxcbiAgZmlsbDogIzA4YjlhZTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5ib2R5X19jb250YWluZXIgPiAqIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9keV9faXRlbSxcXHJcXG4udGFza19fbGlzdCA+ICoge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9keV9faXRlbTo6YWZ0ZXIsXFxyXFxuLnRhc2tfX2xpc3QgPiAqOjphZnRlciB7XFxyXFxuICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDAuNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzNGRhMjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTAwJTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbiN0YXNrX19zdWJtaXQsXFxyXFxuI2J0bl9fcmVzeW5jLW9sZC10YXNrcyB7XFxyXFxuICB3aWR0aDogMi41cmVtO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbiNidG5fX3Jlc3luYy1vbGQtdGFza3Mge1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuX19yZXN5bmMtb2xkLXRhc2stbXNnIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmb250LXNpemU6IDAuNXJlbTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMS4ycmVtO1xcclxcbiAgcmlnaHQ6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGVfX2VsZW1lbnQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tfX3N1Ym1pdCBzdmcge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2J0bl9fcmVzeW5jLW9sZC10YXNrcyBzdmcge1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxuICBmaWxsOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuX19yZXN5bmMtb2xkLXRhc2tzOmhvdmVyIHN2ZyB7XFxyXFxuICBmaWxsOiAjMDhiOWFlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtLXZpZXcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbS12aWV3OmZvY3VzLXdpdGhpbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjI1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbS1jaGVjayxcXHJcXG4ubGlzdC1pdGVtLXRvb2xzIHtcXHJcXG4gIHdpZHRoOiAyLjVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtLWNoZWNrIHtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0tdG9vbHMge1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbiNidG5fX2NsZWFyLWRvbmUtdGFza3Mge1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDIuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTksIDc3LCAxNjIsIDAuMjUpO1xcclxcbiAgY29sb3I6ICMxMzRkYTI7XFxyXFxufVxcclxcblxcclxcbi50YXNrX19oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzNGRhMjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5kLW5vbmUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnR4dC1hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAxMDYpO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ2dpbmcge1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUu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Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQW5kaWthIE5ldyBCYXNpY1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMXJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwO1xcclxcbiAgY29sb3I6ICMyNzJhMzE7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYmFja2dyb3VuZC1saXN0LnN2ZycpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvZHlfX2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWF4LXdpZHRoOiAzNy41cmVtO1xcclxcbiAgbWFyZ2luOiA0cmVtIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF0sXFxyXFxudGV4dGFyZWEsXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJBbmRpa2EgTmV3IEJhc2ljXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGNvbG9yOiAjMjcyYTMxO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIHBhZGRpbmc6IDAgMi41cmVtIDAgMXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBoZWlnaHQ6IDMuMjVyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLFxcclxcbnRleHRhcmVhOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuX190YXNrLWNoZWNrbGlzdCB7XFxyXFxuICB3aWR0aDogMXJlbTtcXHJcXG4gIGhlaWdodDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTYxLCAxNjEsIDE2MSk7XFxyXFxufVxcclxcblxcclxcbi5idG5fX3Rhc2stZHJhZ2Ryb3AsXFxyXFxuLmJ0bl9fdGFzay1yZW1vdmUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuX190YXNrLXJlbW92ZSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiBzdmcge1xcclxcbiAgZmlsbDogcmdiKDE2MSwgMTYxLCAxNjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuX190YXNrLWNoZWNrbGlzdCBzdmcge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZpbGw6ICM4NmM1NTU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2xpc3QtYWN0aXZlIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrbGlzdC1hY3RpdmUgc3ZnIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuX190YXNrLWRyYWdkcm9wIHN2ZyxcXHJcXG4uYnRuX190YXNrLXJlbW92ZSBzdmcge1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuX190YXNrLXJlbW92ZSBzdmcge1xcclxcbiAgZmlsbDogI2VmM2M3YjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIgc3ZnIHtcXHJcXG4gIGZpbGw6ICMwOGI5YWU7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9keV9fY29udGFpbmVyID4gKiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvZHlfX2l0ZW0sXFxyXFxuLnRhc2tfX2xpc3QgPiAqIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvZHlfX2l0ZW06OmFmdGVyLFxcclxcbi50YXNrX19saXN0ID4gKjo6YWZ0ZXIge1xcclxcbiAgZGlzcGxheTogdGFibGU7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAwLjVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzRkYTI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDEwMCU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza19fc3VibWl0LFxcclxcbiNidG5fX3Jlc3luYy1vbGQtdGFza3Mge1xcclxcbiAgd2lkdGg6IDIuNXJlbTtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuX19yZXN5bmMtb2xkLXRhc2tzIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fcmVzeW5jLW9sZC10YXNrLW1zZyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZm9udC1zaXplOiAwLjVyZW07XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDEuMnJlbTtcXHJcXG4gIHJpZ2h0OiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5oaWRlX19lbGVtZW50IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN0YXNrX19zdWJtaXQgc3ZnIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbiNidG5fX3Jlc3luYy1vbGQtdGFza3Mgc3ZnIHtcXHJcXG4gIHdpZHRoOiAxcmVtO1xcclxcbiAgZmlsbDogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuI2J0bl9fcmVzeW5jLW9sZC10YXNrczpob3ZlciBzdmcge1xcclxcbiAgZmlsbDogIzA4YjlhZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbS12aWV3IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMCAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0tdmlldzpmb2N1cy13aXRoaW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgMC4yNSk7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0tY2hlY2ssXFxyXFxuLmxpc3QtaXRlbS10b29scyB7XFxyXFxuICB3aWR0aDogMi41cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbS1jaGVjayB7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtLXRvb2xzIHtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuX19jbGVhci1kb25lLXRhc2tzIHtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAyLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5LCA3NywgMTYyLCAwLjI1KTtcXHJcXG4gIGNvbG9yOiAjMTM0ZGEyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza19faGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzRkYTI7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1ub25lIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50eHQtYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMTA2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYWdnaW5nIHtcXHJcXG4gIG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAqIGFzIExTIGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJztcblxuY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG5jb25zdCBhZGRUYXNrID0gKGFyciwgdGFzaykgPT4ge1xuICBhcnIucHVzaCh7XG4gICAgaWQ6IGFyci5sZW5ndGggKyAxLCBkZXNjcmlwdGlvbjogdGFzaywgY29tcGxldGVkOiBmYWxzZSwgZGF0ZTogdG9kYXkuZ2V0VGltZSgpLFxuICB9KTtcbiAgTFMuc2F2ZUxvY2FsU3RvcmFnZShhcnIpO1xufTtcblxuY29uc3QgZHJvcFRhc2sgPSAoYXJyLCB0YXNrSWRzKSA9PiB7XG4gIHRhc2tJZHMuZm9yRWFjaCgoaWRUYXNrKSA9PiB7XG4gICAgYXJyID0gYXJyLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCAhPT0gaWRUYXNrKTtcbiAgfSk7XG5cbiAgYXJyID0gYXJyLm1hcCgodGFzaywgaW5kKSA9PiB7XG4gICAgdGFzay5pZCA9IGluZCArIDE7XG4gICAgcmV0dXJuIHRhc2s7XG4gIH0pO1xuICBMUy5zYXZlTG9jYWxTdG9yYWdlKGFycik7XG59O1xuXG5jb25zdCBlZGl0VGFzayA9IChhcnIsIGlkVGFzaywgZGVzYykgPT4ge1xuICBhcnJbaWRUYXNrIC0gMV0uZGVzY3JpcHRpb24gPSBkZXNjO1xuICBMUy5zYXZlTG9jYWxTdG9yYWdlKGFycik7XG59O1xuXG5jb25zdCB1cGRhdGVTdGF0dXNUYXNrID0gKGFyciwgdGFza0lkLCBzdGF0dXMpID0+IHtcbiAgYXJyW3Rhc2tJZCAtIDFdLmNvbXBsZXRlZCA9IHN0YXR1cztcbiAgTFMuc2F2ZUxvY2FsU3RvcmFnZShhcnIpO1xufTtcblxuY29uc3QgdXBkYXRlT3JkZXJUYXNrID0gKGFyciwgbmV3T3JkZXJJZHMpID0+IHtcbiAgY29uc3QgbmV3QXJyID0gW107XG4gIG5ld09yZGVySWRzLmZvckVhY2goKGlkLCBpbmRleCkgPT4ge1xuICAgIGFycltpZCAtIDFdLmlkID0gaW5kZXggKyAxO1xuICAgIG5ld0Fyci5wdXNoKGFycltpZCAtIDFdKTtcbiAgfSk7XG4gIExTLnNhdmVMb2NhbFN0b3JhZ2UobmV3QXJyKTtcbn07XG5cbmNvbnN0IHJlc3luY1Rhc2sgPSAoYXJyKSA9PiB7XG4gIGNvbnN0IHRhc2tJZHMgPSBbXTtcbiAgYXJyLmZvckVhY2goKGVsZSkgPT4ge1xuICAgIGNvbnN0IGRhdGVUYXNrID0gbmV3IERhdGUoZWxlLmRhdGUpLmdldFRpbWUoKTtcbiAgICBjb25zdCBkYXRlVG9kYXkgPSB0b2RheS5nZXRUaW1lKCk7XG4gICAgaWYgKChkYXRlVG9kYXkgLSBkYXRlVGFzaykgPiAzNjAwMDAwKSB0YXNrSWRzLnB1c2goZWxlLmlkKTtcbiAgfSk7XG4gIGRyb3BUYXNrKGFyciwgdGFza0lkcyk7XG59O1xuXG5leHBvcnQge1xuICBhZGRUYXNrLCBkcm9wVGFzaywgZWRpdFRhc2ssIHVwZGF0ZVN0YXR1c1Rhc2ssIHVwZGF0ZU9yZGVyVGFzaywgcmVzeW5jVGFzayxcbn07XG4iLCJjb25zdCBzYXZlTG9jYWxTdG9yYWdlID0gKGFycikgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLCBKU09OLnN0cmluZ2lmeShhcnIpKTtcbn07XG5cbmNvbnN0IGxvYWRMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGxvY2FsVG9Eb0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpKTtcbiAgaWYgKGxvY2FsVG9Eb0xpc3QpIHJldHVybiBsb2NhbFRvRG9MaXN0O1xuICBzYXZlTG9jYWxTdG9yYWdlKFtdKTtcbiAgcmV0dXJuIFtdO1xufTtcblxuZXhwb3J0IHsgc2F2ZUxvY2FsU3RvcmFnZSwgbG9hZExvY2FsU3RvcmFnZSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICogYXMgTFMgZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnO1xuaW1wb3J0ICogYXMgQ1JVRCBmcm9tICcuL2NydWQuanMnO1xuXG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrX19mb3JtJyk7XG5jb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19faW5wdXQnKTtcbmNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fX2NsZWFyLWRvbmUtdGFza3MnKTtcbmNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfX2xpc3QnKTtcbmNvbnN0IHJlc3luY0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fX3Jlc3luYy1vbGQtdGFza3MnKTtcblxuY29uc3QgbWFuYWdlVG9Eb0xpc3RBcnJheSA9ICgoKSA9PiB7XG4gIGxldCB0b0RvTGlzdEFycmF5ID0gW107XG4gIHJldHVybiAoKSA9PiB7XG4gICAgdG9Eb0xpc3RBcnJheSA9IExTLmxvYWRMb2NhbFN0b3JhZ2UoKTtcbiAgICByZXR1cm4gdG9Eb0xpc3RBcnJheTtcbiAgfTtcbn0pKCk7XG5cbmNvbnN0IGFkanVzdFR4dEhlaWdodCA9ICgpID0+IHtcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnR4dF9fdGFzay1kZXNjcmlwdGlvbicpO1xuICBpZiAodGV4dEVsZW1lbnRzKSB7XG4gICAgdGV4dEVsZW1lbnRzLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgIGVsZW0uc3R5bGUuaGVpZ2h0ID0gYCR7ZWxlbS5zY3JvbGxIZWlnaHR9cHhgO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCB0b2dnbGVUYXNrVG9vbHMgPSAodGFza0VsZW1lbnQpID0+IHtcbiAgY29uc3QgcmVtQnRuID0gdGFza0VsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0U2libGluZy5maXJzdENoaWxkO1xuICBjb25zdCBkcmFnQnRuID0gdGFza0VsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0U2libGluZy5sYXN0Q2hpbGQ7XG4gIHJlbUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcbiAgZHJhZ0J0bi5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcbn07XG5cbmNvbnN0IHVwZGF0ZVRhc2tTdGF0dXMgPSAoY2hlY2tFbGVtZW50KSA9PiB7XG4gIGNvbnN0IHRhc2tJZCA9IGNoZWNrRWxlbWVudC5kYXRhc2V0LnRhc2tpZDtcbiAgaWYgKGNoZWNrRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrbGlzdC1hY3RpdmUnKSkgQ1JVRC51cGRhdGVTdGF0dXNUYXNrKG1hbmFnZVRvRG9MaXN0QXJyYXkoKSwgdGFza0lkLCB0cnVlKTtcbiAgZWxzZSBDUlVELnVwZGF0ZVN0YXR1c1Rhc2sobWFuYWdlVG9Eb0xpc3RBcnJheSgpLCB0YXNrSWQsIGZhbHNlKTtcbn07XG5cbmNvbnN0IHJlbmRlclRhc2tMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBsb2FkZWRUb0RvTGlzdCA9IG1hbmFnZVRvRG9MaXN0QXJyYXkoKTtcbiAgdGFza0xpc3QuaW5uZXJIVE1MID0gJyc7XG4gIGxvYWRlZFRvRG9MaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCB0YXNrTGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHRhc2tMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrX19saXN0LWl0ZW0nKTtcbiAgICB0YXNrTGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLXRhc2tpZCcsIHRhc2suaWQpO1xuICAgIHRhc2tMaXN0SXRlbS5kcmFnZ2FibGUgPSB0cnVlO1xuICAgIGNvbnN0IGxpc0l0ZW1DaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc0l0ZW1DaGVjay5jbGFzc0xpc3QuYWRkKCdsaXN0LWl0ZW0tY2hlY2snKTtcbiAgICBjb25zdCBjaGVja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNoZWNrQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bl9fdGFzay1jaGVja2xpc3QnKTtcbiAgICBpZiAodGFzay5jb21wbGV0ZWQpIGNoZWNrQnRuLmNsYXNzTGlzdC5hZGQoJ2NoZWNrbGlzdC1hY3RpdmUnKTtcbiAgICBjaGVja0J0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza2lkJywgdGFzay5pZCk7XG4gICAgY2hlY2tCdG4uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMSw1MC4wOWMyLjc5LTIuNDYsNS4yMS01LjE0LDguMTQtNyw0LjIxLTIuNzIsOC40Ni0xLjczLDEyLjI1LDEuMjlDMjYsNDgsMjguODYsNTMsMzEuMzksNTguMjVjLjc0LDEuNTIsMS40MiwzLjA2LDIuMDgsNC41LDYtOC4xMywxMS43OS0xNi4yNywxNy45Mi0yNC4xM0M1OC4wOSwzMCw2NS41LDIyLDc0LjI4LDE1LjQ0YzUuNDQtNC4wOCwxMS4xOS03LjY0LDE4LjE2LTguMzJhMzkuNTUsMzkuNTUsMCwwLDEsNi4zMy4zN2wuMjIuNzdjLS44NS43MS0xLjY4LDEuNDMtMi41NCwyLjEzQzgxLjE0LDIyLjgyLDY3LjE3LDM2LjU0LDU2Ljg2LDUzLjUzYy0zLjc3LDYuMjEtNi42NiwxMi45NC0xMC4xMiwxOS4zNC0yLjYsNC44MS01LjI2LDkuNjEtOC4yOSwxNC4xNWExMy4xMSwxMy4xMSwwLDAsMS04Ljc0LDUuODhjLTMuMzUuNTgtNS0uNDQtNi0zLjY5LTIuODItOS4yMi02LTE4LjMtMTAuODgtMjYuNjdDOS4zNiw1Ni41Myw3LDU0LjA2LDEsNTAuMDlaXCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPmA7XG4gICAgY2hlY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjaGVja0J0bi5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2xpc3QtYWN0aXZlJyk7XG4gICAgICB1cGRhdGVUYXNrU3RhdHVzKGNoZWNrQnRuKTtcbiAgICB9KTtcbiAgICBsaXNJdGVtQ2hlY2suYXBwZW5kQ2hpbGQoY2hlY2tCdG4pO1xuICAgIHRhc2tMaXN0SXRlbS5hcHBlbmRDaGlsZChsaXNJdGVtQ2hlY2spO1xuXG4gICAgY29uc3QgbGlzdEl0ZW1WaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGlzdEl0ZW1WaWV3LmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbS12aWV3Jyk7XG4gICAgbGlzdEl0ZW1WaWV3LnNldEF0dHJpYnV0ZSgnZm9yJywgYHR4dF9fdGFzay0ke3Rhc2suaWR9YCk7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndHh0X190YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS10YXNraWQnLCB0YXNrLmlkKTtcbiAgICB0YXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGB0eHRfX3Rhc2stJHt0YXNrLmlkfWApO1xuICAgIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3NwZWxsY2hlY2snLCBmYWxzZSk7XG4gICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7dGFzay5kZXNjcmlwdGlvbn1gO1xuICAgIHRhc2tEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgIHRhc2tEZXNjcmlwdGlvbi5zdHlsZS5oZWlnaHQgPSBgJHt0YXNrRGVzY3JpcHRpb24uc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgICAgIENSVUQuZWRpdFRhc2sobWFuYWdlVG9Eb0xpc3RBcnJheSgpLCArdGFza0Rlc2NyaXB0aW9uLmRhdGFzZXQudGFza2lkLCB0YXNrRGVzY3JpcHRpb24udmFsdWUpO1xuICAgIH0pO1xuICAgIHRhc2tEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICAgIHRvZ2dsZVRhc2tUb29scyh0YXNrRGVzY3JpcHRpb24pO1xuICAgIH0pO1xuICAgIHRhc2tEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRvZ2dsZVRhc2tUb29scyh0YXNrRGVzY3JpcHRpb24pOyB9LCAxMDApO1xuICAgIH0pO1xuICAgIGxpc3RJdGVtVmlldy5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICAgIHRhc2tMaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0SXRlbVZpZXcpO1xuXG4gICAgY29uc3QgbGlzdEl0ZW1Ub29scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3RJdGVtVG9vbHMuY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtLXRvb2xzJyk7XG4gICAgY29uc3QgdHJhc2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0cmFzaEJ0bi5jbGFzc0xpc3QuYWRkKCdidG5fX3Rhc2stcmVtb3ZlJywgJ2Qtbm9uZScpO1xuICAgIHRyYXNoQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10YXNraWQnLCB0YXNrLmlkKTtcbiAgICB0cmFzaEJ0bi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2OC43MSA5OFwiPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIzLjIyLDMzYy0zLjA2LS41MS01LjI3LTEuODgtNC43OC01LjE4czMuMTgtMy43LDYtMy42OXEyNy4yMi4wNiw1NC40NCwwYzIuNjcsMCw0LjkzLjYzLDUuMzgsMy41OVM4MywzMi4zOCw4MCwzMi43OWMtLjA5LDAtLjE3LjEzLS41Mi40MkM3OC4zNCw0Ny4zMyw3Ny4xNSw2MS42OCw3NS45NSw3NmMtLjQzLDUuMTUtLjc5LDEwLjMtMS4zNiwxNS40M0M3NCw5Ni44NSw3MS40NCw5OSw2Niw5OUgzNi44MWMtNS42MSwwLTguMDktMi4wNy04LjY2LTcuODEtMS05LjkyLTEuNzgtMTkuODYtMi42Mi0yOS43OUMyNC43NCw1Mi4wNiwyNCw0Mi43MiwyMy4yMiwzM1ptMzgsNTIsMi41NywzLjM0YzEuMTMtMSwzLjEtMS44NiwzLjI1LTNDNjksNzAuNTUsNzAuNjgsNTUuNzYsNzIuNDEsNDFjLjI0LTIuMDUtLjQ0LTQtMi42MS0zLjc5LTEuMi4xNC0zLDIuMDgtMy4xNCwzLjM5QzY0Ljc2LDU0Ljg2LDYzLjEzLDY5LjE3LDYxLjI2LDg0Ljk0Wm0tMTkuNzEuNjVMMzkuMTEsNjVjLTEtOC4yMy0xLjg2LTE2LjQ2LTMtMjQuNjYtLjE3LTEuMjItMS41My0yLjUzLTIuNjktMy4yMS0uNDgtLjI4LTIuMjguNzYtMi43NCwxLjZhNi4zNSw2LjM1LDAsMCwwLS4xOSwzLjVjMS42NSwxNC4xOSwzLjI3LDI4LjM4LDUuMTUsNDIuNTQuMTcsMS4yOCwyLjA2LDIuMzQsMy4xNSwzLjVabTEyLjc2LTIzYzAtNy4yLDAtMTQuNDEsMC0yMS42MSwwLTIuMTItLjQtNC0zLTRzLTIuOTEsMi0yLjkxLDQuMDhxMCwyMS42MSwwLDQzLjIzYzAsMi4xMy40MSw0LDMsNHMyLjkyLTIsMi45MS00LjA3QzU0LjMxLDc3LDU0LjMyLDY5Ljc3LDU0LjMxLDYyLjU2WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTUuNjUgLTEpXCIvPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTgwLjIxLDYuNjFjLS43Ni42Mi0yLDIuNC0zLjQ5LDIuNzZDNTguMTMsMTMuNzMsMzkuNDksMTcuOSwyMC44NSwyMi4wOGMtMi43LjYxLTQuNDktLjU5LTUuMDctMy4yNnMuNjktNC4zOSwzLjM0LTVjMi45Mi0uNyw1Ljg0LTEuNDIsOC43OC0yLDIuNDMtLjUxLDQuOS0uNjcsNS42Mi0zLjg4LjE4LS44MiwxLjc0LTEuNjUsMi44LTEuOTEsNi4zLTEuNTUsMTIuNi0zLjEsMTktNC4yNiwxLjYtLjI5LDMuNDUuODgsNS4yLDEuMjlhOS4yNiw5LjI2LDAsMCwwLDMuNTUuNTNjMy42Ni0uNjcsNy4yNS0xLjcxLDEwLjktMi40M0M3Ny45NC41MSw4MC4zMSwyLjU1LDgwLjIxLDYuNjFaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNS42NSAtMSlcIi8+XG4gICAgICAgICAgICA8L3N2Zz5gO1xuICAgIHRyYXNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgQ1JVRC5kcm9wVGFzayhtYW5hZ2VUb0RvTGlzdEFycmF5KCksIFsrdHJhc2hCdG4uZGF0YXNldC50YXNraWRdKTtcbiAgICAgIHJlbmRlclRhc2tMaXN0KCk7XG4gICAgfSk7XG4gICAgbGlzdEl0ZW1Ub29scy5hcHBlbmRDaGlsZCh0cmFzaEJ0bik7XG5cbiAgICBjb25zdCBtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdidG5fX3Rhc2stZHJhZ2Ryb3AnKTtcbiAgICBtb3ZlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10YXNraWQnLCB0YXNrLmlkKTtcbiAgICBtb3ZlQnRuLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0LjQzIDk4XCI+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk00OC44NSw5OWwtMS43NS0uNDFhMTIuMjMsMTIuMjMsMCwxLDEsNC42Ny4yMSwzLjgxLDMuODEsMCwwLDAtLjYyLjJabTAtOThhNCw0LDAsMCwxLS42Mi4yLDEyLjE5LDEyLjE5LDAsMSwwLDQuNjcuMjFMNTEuMTUsMVpNNTAsMzcuNzlBMTIuMjEsMTIuMjEsMCwxLDAsNjIuMjEsNTAsMTIuMjYsMTIuMjYsMCwwLDAsNTAsMzcuNzlaXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM3Ljc5IC0xKVwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5gO1xuICAgIGxpc3RJdGVtVG9vbHMuYXBwZW5kQ2hpbGQobW92ZUJ0bik7XG4gICAgdGFza0xpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RJdGVtVG9vbHMpO1xuICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tMaXN0SXRlbSk7XG4gIH0pO1xuICBhZGp1c3RUeHRIZWlnaHQoKTtcbn07XG5cbi8vIENSVUQgVEFTS1NcbmNvbnN0IHN1Ym1pdFRhc2sgPSAoKSA9PiB7XG4gIENSVUQuYWRkVGFzayhtYW5hZ2VUb0RvTGlzdEFycmF5KCksIHRhc2tJbnB1dC52YWx1ZSk7XG4gIHRhc2tJbnB1dC52YWx1ZSA9ICcnO1xuICByZW5kZXJUYXNrTGlzdCgpO1xufTtcblxuY29uc3QgcmVtb3ZlVGFza3MgPSAoY2hlY2tsaXN0KSA9PiB7XG4gIGNvbnN0IHRhc2tJZHMgPSBbXTtcbiAgY2hlY2tsaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICB0YXNrSWRzLnB1c2goK3Rhc2suZGF0YXNldC50YXNraWQpO1xuICB9KTtcbiAgQ1JVRC5kcm9wVGFzayhtYW5hZ2VUb0RvTGlzdEFycmF5KCksIHRhc2tJZHMpO1xuICByZW5kZXJUYXNrTGlzdCgpO1xufTtcblxudGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAodGFza0lucHV0LnZhbHVlICE9PSAnJykgc3VibWl0VGFzaygpO1xufSk7XG5cbnJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcmVtb3ZlVGFza3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrbGlzdC1hY3RpdmUnKSk7XG59KTtcblxucmVzeW5jQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBDUlVELnJlc3luY1Rhc2sobWFuYWdlVG9Eb0xpc3RBcnJheSgpKTtcbiAgcmVuZGVyVGFza0xpc3QoKTtcbn0pO1xuXG5yZXN5bmNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICBjb25zdCByZXN5bmNNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuX19yZXN5bmMtb2xkLXRhc2stbXNnJyk7XG4gIHJlc3luY01zZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlX19lbGVtZW50Jyk7XG59KTtcblxucmVzeW5jQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICBjb25zdCByZXN5bmNNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuX19yZXN5bmMtb2xkLXRhc2stbXNnJyk7XG4gIHJlc3luY01zZy5jbGFzc0xpc3QuYWRkKCdoaWRlX19lbGVtZW50Jyk7XG59KTtcblxuLy8gU1RBUlQgTE9BRElOR1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIHJlbmRlclRhc2tMaXN0KCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==