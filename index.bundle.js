/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/background-list.svg */ "./src/images/background-list.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Andika+New+Basic:ital,wght@0,400;0,700;1,400;1,700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Andika New Basic\", sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.1rem;\r\n  letter-spacing: 0;\r\n  color: #272a31;\r\n  font-style: normal;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n.body__container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  width: 90%;\r\n  max-width: 37.5rem;\r\n  margin: 4rem auto;\r\n  background: white;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n  padding: 1rem !important;\r\n  font-size: 1.5rem;\r\n  line-height: 1;\r\n  text-align: left;\r\n}\r\n\r\n.task__form {\r\n  position: relative;\r\n}\r\n\r\ninput[type=text],\r\ntextarea,\r\nbutton {\r\n  width: 100%;\r\n  font-family: \"Andika New Basic\", sans-serif;\r\n  font-size: 1rem;\r\n  color: #272a31;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\ninput[type=text] {\r\n  height: 3rem;\r\n  padding: 0 2.5rem 0 1rem;\r\n  line-height: 3rem;\r\n  font-style: italic;\r\n  border: 1px solid #134da2;\r\n}\r\n\r\ntextarea {\r\n  height: 3.25rem;\r\n  padding: 1rem 0;\r\n  overflow: hidden;\r\n  resize: none;\r\n  cursor: default;\r\n}\r\n\r\ninput[type=text]:focus {\r\n  border-bottom: 1px solid #134da2;\r\n}\r\n\r\nbutton {\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn__task-checklist {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  padding: 0;\r\n  border: 1px solid rgb(161, 161, 161);\r\n}\r\n\r\n.btn__task-dragdrop,\r\n.btn__task-remove {\r\n  width: 100%;\r\n  padding: 0;\r\n  cursor: move;\r\n}\r\n\r\n.btn__task-remove {\r\n  cursor: pointer;\r\n}\r\n\r\nbutton svg {\r\n  fill: rgb(161, 161, 161);\r\n}\r\n\r\n.btn__task-checklist svg {\r\n  display: none;\r\n  height: 100%;\r\n  fill: #86c555;\r\n}\r\n\r\n.checklist-active {\r\n  border: none;\r\n}\r\n\r\n.checklist-active svg {\r\n  display: block;\r\n}\r\n\r\n.btn__task-dragdrop svg,\r\n.btn__task-remove svg {\r\n  height: 1rem;\r\n}\r\n\r\n.btn__task-remove svg {\r\n  fill: #ef3c7b;\r\n}\r\n\r\nbutton:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\nbutton:hover svg {\r\n  fill: #08b9ae;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 1rem 0;\r\n  margin: 0;\r\n}\r\n\r\n.body__container > * {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.task__list > * {\r\n  position: relative;\r\n  border-bottom: 1px solid #699dec;\r\n}\r\n\r\n.task__list > *:first-of-type {\r\n  border-top: 1px solid #699dec;\r\n}\r\n\r\n#task__submit,\r\n#btn__resync-old-tasks {\r\n  width: 2.5rem;\r\n  height: 3rem;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n#btn__resync-old-tasks {\r\n  height: auto;\r\n  bottom: 0;\r\n}\r\n\r\n.btn__resync-old-task-msg {\r\n  display: flex;\r\n  font-size: 0.5rem;\r\n  position: absolute;\r\n  top: 1.2rem;\r\n  right: 2.5rem;\r\n}\r\n\r\n.hide__element {\r\n  display: none;\r\n}\r\n\r\n#task__submit svg {\r\n  width: 50%;\r\n}\r\n\r\n#btn__resync-old-tasks svg {\r\n  width: 1rem;\r\n  fill: #fff;\r\n}\r\n\r\n#btn__resync-old-tasks:hover svg {\r\n  fill: #08b9ae;\r\n}\r\n\r\n.list-item-view {\r\n  width: 100%;\r\n  padding: 0 2.5rem;\r\n}\r\n\r\n.list-item-view:focus-within {\r\n  background-color: rgba(255, 255, 0, 0.25);\r\n}\r\n\r\n.list-item-check,\r\n.list-item-tools {\r\n  width: 2.5rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.list-item-check {\r\n  left: 0;\r\n}\r\n\r\n.list-item-tools {\r\n  right: 0;\r\n}\r\n\r\n#btn__clear-done-tasks {\r\n  height: 3rem;\r\n  padding: 0.5rem 2.5rem;\r\n  background-color: rgba(19, 77, 162, 0.25);\r\n  color: #134da2;\r\n}\r\n\r\n.task__header {\r\n  background-color: #134da2;\r\n  border: 1px solid #134da2;\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.d-none {\r\n  display: none;\r\n}\r\n\r\n.txt-active {\r\n  background-color: rgb(235, 235, 106);\r\n}\r\n\r\n.dragging {\r\n  opacity: 0.7;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAEA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,2CAA2C;EAC3C,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,yDAAsD;EACtD,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,UAAU;EACV,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,SAAS;EACT,wBAAwB;EACxB,iBAAiB;EACjB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;;EAGE,WAAW;EACX,2CAA2C;EAC3C,eAAe;EACf,cAAc;EACd,uBAAuB;EACvB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,wBAAwB;EACxB,iBAAiB;EACjB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,UAAU;EACV,oCAAoC;AACtC;;AAEA;;EAEE,WAAW;EACX,UAAU;EACV,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,gCAAgC;AAClC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;;EAEE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;;EAEE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,MAAM;EACN,SAAS;AACX;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,yCAAyC;EACzC,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,WAAW;EACX,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,YAAY;AACd","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Andika+New+Basic:ital,wght@0,400;0,700;1,400;1,700&display=swap');\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Andika New Basic\", sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.1rem;\r\n  letter-spacing: 0;\r\n  color: #272a31;\r\n  font-style: normal;\r\n  background-image: url('../images/background-list.svg');\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n.body__container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  width: 90%;\r\n  max-width: 37.5rem;\r\n  margin: 4rem auto;\r\n  background: white;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n  padding: 1rem !important;\r\n  font-size: 1.5rem;\r\n  line-height: 1;\r\n  text-align: left;\r\n}\r\n\r\n.task__form {\r\n  position: relative;\r\n}\r\n\r\ninput[type=text],\r\ntextarea,\r\nbutton {\r\n  width: 100%;\r\n  font-family: \"Andika New Basic\", sans-serif;\r\n  font-size: 1rem;\r\n  color: #272a31;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\ninput[type=text] {\r\n  height: 3rem;\r\n  padding: 0 2.5rem 0 1rem;\r\n  line-height: 3rem;\r\n  font-style: italic;\r\n  border: 1px solid #134da2;\r\n}\r\n\r\ntextarea {\r\n  height: 3.25rem;\r\n  padding: 1rem 0;\r\n  overflow: hidden;\r\n  resize: none;\r\n  cursor: default;\r\n}\r\n\r\ninput[type=text]:focus {\r\n  border-bottom: 1px solid #134da2;\r\n}\r\n\r\nbutton {\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn__task-checklist {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  padding: 0;\r\n  border: 1px solid rgb(161, 161, 161);\r\n}\r\n\r\n.btn__task-dragdrop,\r\n.btn__task-remove {\r\n  width: 100%;\r\n  padding: 0;\r\n  cursor: move;\r\n}\r\n\r\n.btn__task-remove {\r\n  cursor: pointer;\r\n}\r\n\r\nbutton svg {\r\n  fill: rgb(161, 161, 161);\r\n}\r\n\r\n.btn__task-checklist svg {\r\n  display: none;\r\n  height: 100%;\r\n  fill: #86c555;\r\n}\r\n\r\n.checklist-active {\r\n  border: none;\r\n}\r\n\r\n.checklist-active svg {\r\n  display: block;\r\n}\r\n\r\n.btn__task-dragdrop svg,\r\n.btn__task-remove svg {\r\n  height: 1rem;\r\n}\r\n\r\n.btn__task-remove svg {\r\n  fill: #ef3c7b;\r\n}\r\n\r\nbutton:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\nbutton:hover svg {\r\n  fill: #08b9ae;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 1rem 0;\r\n  margin: 0;\r\n}\r\n\r\n.body__container > * {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.task__list > * {\r\n  position: relative;\r\n  border-bottom: 1px solid #699dec;\r\n}\r\n\r\n.task__list > *:first-of-type {\r\n  border-top: 1px solid #699dec;\r\n}\r\n\r\n#task__submit,\r\n#btn__resync-old-tasks {\r\n  width: 2.5rem;\r\n  height: 3rem;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n#btn__resync-old-tasks {\r\n  height: auto;\r\n  bottom: 0;\r\n}\r\n\r\n.btn__resync-old-task-msg {\r\n  display: flex;\r\n  font-size: 0.5rem;\r\n  position: absolute;\r\n  top: 1.2rem;\r\n  right: 2.5rem;\r\n}\r\n\r\n.hide__element {\r\n  display: none;\r\n}\r\n\r\n#task__submit svg {\r\n  width: 50%;\r\n}\r\n\r\n#btn__resync-old-tasks svg {\r\n  width: 1rem;\r\n  fill: #fff;\r\n}\r\n\r\n#btn__resync-old-tasks:hover svg {\r\n  fill: #08b9ae;\r\n}\r\n\r\n.list-item-view {\r\n  width: 100%;\r\n  padding: 0 2.5rem;\r\n}\r\n\r\n.list-item-view:focus-within {\r\n  background-color: rgba(255, 255, 0, 0.25);\r\n}\r\n\r\n.list-item-check,\r\n.list-item-tools {\r\n  width: 2.5rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.list-item-check {\r\n  left: 0;\r\n}\r\n\r\n.list-item-tools {\r\n  right: 0;\r\n}\r\n\r\n#btn__clear-done-tasks {\r\n  height: 3rem;\r\n  padding: 0.5rem 2.5rem;\r\n  background-color: rgba(19, 77, 162, 0.25);\r\n  color: #134da2;\r\n}\r\n\r\n.task__header {\r\n  background-color: #134da2;\r\n  border: 1px solid #134da2;\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.d-none {\r\n  display: none;\r\n}\r\n\r\n.txt-active {\r\n  background-color: rgb(235, 235, 106);\r\n}\r\n\r\n.dragging {\r\n  opacity: 0.7;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/scripts/crud.js":
/*!*****************************!*\
  !*** ./src/scripts/crud.js ***!
  \*****************************/
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
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ "./src/scripts/localStorage.js");


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

/***/ "./src/scripts/localStorage.js":
/*!*************************************!*\
  !*** ./src/scripts/localStorage.js ***!
  \*************************************/
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

/***/ "./src/images/background-list.svg":
/*!****************************************!*\
  !*** ./src/images/background-list.svg ***!
  \****************************************/
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
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage.js */ "./src/scripts/localStorage.js");
/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crud.js */ "./src/scripts/crud.js");




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

const sortTasks = () => {
  const taskIds = [];
  const elDom = taskList.querySelectorAll('.task__list-item');
  elDom.forEach((ele, index) => {
    taskIds.push(ele.getAttribute('data-taskid'));
    ele.setAttribute('data-taskid', index + 1);
  });
  _crud_js__WEBPACK_IMPORTED_MODULE_2__.updateOrderTask(manageToDoListArray(), taskIds);
};

// DRAG FUNCTIONALITY
const getCurrentAfterElement = (y) => {
  const draggableElements = [...taskList.querySelectorAll('.task__list-item:not(.dragging)')];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height;
    if (offset < 0 && offset > closest.offset) return { offset, element: child };
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
};

const dragTasks = () => {
  const draggables = document.querySelectorAll('.task__list-item');
  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
      sortTasks();
    });
  });

  taskList.addEventListener('dragover', (e) => {
    e.preventDefault();
    const draggable = document.querySelector('.dragging');
    const afterElement = getCurrentAfterElement(e.clientY);
    if (afterElement === null) taskList.appendChild(draggable);
    else taskList.insertBefore(draggable, afterElement);
  });
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
  dragTasks();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0w7QUFDQSx5QkFBeUIsbUNBQW1DO0FBQzVELEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw4Q0FBYTtBQUNuQjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSw2Q0FBWTtBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLDhDQUFhO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsRUFBRSxnREFBZTtBQUNqQjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2NydWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JhY2tncm91bmQtbGlzdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFuZGlrYStOZXcrQmFzaWM6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQW5kaWthIE5ldyBCYXNpY1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMXJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwO1xcclxcbiAgY29sb3I6ICMyNzJhMzE7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvZHlfX2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWF4LXdpZHRoOiAzNy41cmVtO1xcclxcbiAgbWFyZ2luOiA0cmVtIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrX19mb3JtIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT10ZXh0XSxcXHJcXG50ZXh0YXJlYSxcXHJcXG5idXR0b24ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkFuZGlrYSBOZXcgQmFzaWNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgY29sb3I6ICMyNzJhMzE7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgcGFkZGluZzogMCAyLjVyZW0gMCAxcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDNyZW07XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMTM0ZGEyO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBoZWlnaHQ6IDMuMjVyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTM0ZGEyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fdGFzay1jaGVja2xpc3Qge1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2MSwgMTYxLCAxNjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuX190YXNrLWRyYWdkcm9wLFxcclxcbi5idG5fX3Rhc2stcmVtb3ZlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fdGFzay1yZW1vdmUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24gc3ZnIHtcXHJcXG4gIGZpbGw6IHJnYigxNjEsIDE2MSwgMTYxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fdGFzay1jaGVja2xpc3Qgc3ZnIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmaWxsOiAjODZjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tsaXN0LWFjdGl2ZSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2xpc3QtYWN0aXZlIHN2ZyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fdGFzay1kcmFnZHJvcCBzdmcsXFxyXFxuLmJ0bl9fdGFzay1yZW1vdmUgc3ZnIHtcXHJcXG4gIGhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fdGFzay1yZW1vdmUgc3ZnIHtcXHJcXG4gIGZpbGw6ICNlZjNjN2I7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHN2ZyB7XFxyXFxuICBmaWxsOiAjMDhiOWFlO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9keV9fY29udGFpbmVyID4gKiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tfX2xpc3QgPiAqIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjk5ZGVjO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza19fbGlzdCA+ICo6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzY5OWRlYztcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tfX3N1Ym1pdCxcXHJcXG4jYnRuX19yZXN5bmMtb2xkLXRhc2tzIHtcXHJcXG4gIHdpZHRoOiAyLjVyZW07XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2J0bl9fcmVzeW5jLW9sZC10YXNrcyB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5idG5fX3Jlc3luYy1vbGQtdGFzay1tc2cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZvbnQtc2l6ZTogMC41cmVtO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxLjJyZW07XFxyXFxuICByaWdodDogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZV9fZWxlbWVudCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza19fc3VibWl0IHN2ZyB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuX19yZXN5bmMtb2xkLXRhc2tzIHN2ZyB7XFxyXFxuICB3aWR0aDogMXJlbTtcXHJcXG4gIGZpbGw6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbiNidG5fX3Jlc3luYy1vbGQtdGFza3M6aG92ZXIgc3ZnIHtcXHJcXG4gIGZpbGw6ICMwOGI5YWU7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0tdmlldyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAgMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtLXZpZXc6Zm9jdXMtd2l0aGluIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuMjUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtLWNoZWNrLFxcclxcbi5saXN0LWl0ZW0tdG9vbHMge1xcclxcbiAgd2lkdGg6IDIuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0tY2hlY2sge1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbS10b29scyB7XFxyXFxuICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2J0bl9fY2xlYXItZG9uZS10YXNrcyB7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMi41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOSwgNzcsIDE2MiwgMC4yNSk7XFxyXFxuICBjb2xvcjogIzEzNGRhMjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tfX2hlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM0ZGEyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzEzNGRhMjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5kLW5vbmUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnR4dC1hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAxMDYpO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ2dpbmcge1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHlEQUFzRDtFQUN0RCwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLFdBQVc7RUFDWCwyQ0FBMkM7RUFDM0MsZUFBZTtFQUNmLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtBQUNWOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHlDQUF5QztFQUN6QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFuZGlrYStOZXcrQmFzaWM6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJBbmRpa2EgTmV3IEJhc2ljXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMS4xcmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XFxyXFxuICBjb2xvcjogIzI3MmEzMTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2JhY2tncm91bmQtbGlzdC5zdmcnKTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib2R5X19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG1heC13aWR0aDogMzcuNXJlbTtcXHJcXG4gIG1hcmdpbjogNHJlbSBhdXRvO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4udGFza19fZm9ybSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF0sXFxyXFxudGV4dGFyZWEsXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJBbmRpa2EgTmV3IEJhc2ljXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGNvbG9yOiAjMjcyYTMxO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIHBhZGRpbmc6IDAgMi41cmVtIDAgMXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzEzNGRhMjtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgaGVpZ2h0OiAzLjI1cmVtO1xcclxcbiAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzEzNGRhMjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG5fX3Rhc2stY2hlY2tsaXN0IHtcXHJcXG4gIHdpZHRoOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjEsIDE2MSwgMTYxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fdGFzay1kcmFnZHJvcCxcXHJcXG4uYnRuX190YXNrLXJlbW92ZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi5idG5fX3Rhc2stcmVtb3ZlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHN2ZyB7XFxyXFxuICBmaWxsOiByZ2IoMTYxLCAxNjEsIDE2MSk7XFxyXFxufVxcclxcblxcclxcbi5idG5fX3Rhc2stY2hlY2tsaXN0IHN2ZyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZmlsbDogIzg2YzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrbGlzdC1hY3RpdmUge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tsaXN0LWFjdGl2ZSBzdmcge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5idG5fX3Rhc2stZHJhZ2Ryb3Agc3ZnLFxcclxcbi5idG5fX3Rhc2stcmVtb3ZlIHN2ZyB7XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5idG5fX3Rhc2stcmVtb3ZlIHN2ZyB7XFxyXFxuICBmaWxsOiAjZWYzYzdiO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciBzdmcge1xcclxcbiAgZmlsbDogIzA4YjlhZTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvZHlfX2NvbnRhaW5lciA+ICoge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrX19saXN0ID4gKiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY5OWRlYztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tfX2xpc3QgPiAqOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM2OTlkZWM7XFxyXFxufVxcclxcblxcclxcbiN0YXNrX19zdWJtaXQsXFxyXFxuI2J0bl9fcmVzeW5jLW9sZC10YXNrcyB7XFxyXFxuICB3aWR0aDogMi41cmVtO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbiNidG5fX3Jlc3luYy1vbGQtdGFza3Mge1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuX19yZXN5bmMtb2xkLXRhc2stbXNnIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmb250LXNpemU6IDAuNXJlbTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMS4ycmVtO1xcclxcbiAgcmlnaHQ6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGVfX2VsZW1lbnQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tfX3N1Ym1pdCBzdmcge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2J0bl9fcmVzeW5jLW9sZC10YXNrcyBzdmcge1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxuICBmaWxsOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuX19yZXN5bmMtb2xkLXRhc2tzOmhvdmVyIHN2ZyB7XFxyXFxuICBmaWxsOiAjMDhiOWFlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtLXZpZXcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbS12aWV3OmZvY3VzLXdpdGhpbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjI1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbS1jaGVjayxcXHJcXG4ubGlzdC1pdGVtLXRvb2xzIHtcXHJcXG4gIHdpZHRoOiAyLjVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtLWNoZWNrIHtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0tdG9vbHMge1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbiNidG5fX2NsZWFyLWRvbmUtdGFza3Mge1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDIuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTksIDc3LCAxNjIsIDAuMjUpO1xcclxcbiAgY29sb3I6ICMxMzRkYTI7XFxyXFxufVxcclxcblxcclxcbi50YXNrX19oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzNGRhMjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMzRkYTI7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1ub25lIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50eHQtYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMTA2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYWdnaW5nIHtcXHJcXG4gIG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAqIGFzIExTIGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJztcblxuY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG5jb25zdCBhZGRUYXNrID0gKGFyciwgdGFzaykgPT4ge1xuICBhcnIucHVzaCh7XG4gICAgaWQ6IGFyci5sZW5ndGggKyAxLCBkZXNjcmlwdGlvbjogdGFzaywgY29tcGxldGVkOiBmYWxzZSwgZGF0ZTogdG9kYXkuZ2V0VGltZSgpLFxuICB9KTtcbiAgTFMuc2F2ZUxvY2FsU3RvcmFnZShhcnIpO1xufTtcblxuY29uc3QgZHJvcFRhc2sgPSAoYXJyLCB0YXNrSWRzKSA9PiB7XG4gIHRhc2tJZHMuZm9yRWFjaCgoaWRUYXNrKSA9PiB7XG4gICAgYXJyID0gYXJyLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCAhPT0gaWRUYXNrKTtcbiAgfSk7XG5cbiAgYXJyID0gYXJyLm1hcCgodGFzaywgaW5kKSA9PiB7XG4gICAgdGFzay5pZCA9IGluZCArIDE7XG4gICAgcmV0dXJuIHRhc2s7XG4gIH0pO1xuICBMUy5zYXZlTG9jYWxTdG9yYWdlKGFycik7XG59O1xuXG5jb25zdCBlZGl0VGFzayA9IChhcnIsIGlkVGFzaywgZGVzYykgPT4ge1xuICBhcnJbaWRUYXNrIC0gMV0uZGVzY3JpcHRpb24gPSBkZXNjO1xuICBMUy5zYXZlTG9jYWxTdG9yYWdlKGFycik7XG59O1xuXG5jb25zdCB1cGRhdGVTdGF0dXNUYXNrID0gKGFyciwgdGFza0lkLCBzdGF0dXMpID0+IHtcbiAgYXJyW3Rhc2tJZCAtIDFdLmNvbXBsZXRlZCA9IHN0YXR1cztcbiAgTFMuc2F2ZUxvY2FsU3RvcmFnZShhcnIpO1xufTtcblxuY29uc3QgdXBkYXRlT3JkZXJUYXNrID0gKGFyciwgbmV3T3JkZXJJZHMpID0+IHtcbiAgY29uc3QgbmV3QXJyID0gW107XG4gIG5ld09yZGVySWRzLmZvckVhY2goKGlkLCBpbmRleCkgPT4ge1xuICAgIGFycltpZCAtIDFdLmlkID0gaW5kZXggKyAxO1xuICAgIG5ld0Fyci5wdXNoKGFycltpZCAtIDFdKTtcbiAgfSk7XG4gIExTLnNhdmVMb2NhbFN0b3JhZ2UobmV3QXJyKTtcbn07XG5cbmNvbnN0IHJlc3luY1Rhc2sgPSAoYXJyKSA9PiB7XG4gIGNvbnN0IHRhc2tJZHMgPSBbXTtcbiAgYXJyLmZvckVhY2goKGVsZSkgPT4ge1xuICAgIGNvbnN0IGRhdGVUYXNrID0gbmV3IERhdGUoZWxlLmRhdGUpLmdldFRpbWUoKTtcbiAgICBjb25zdCBkYXRlVG9kYXkgPSB0b2RheS5nZXRUaW1lKCk7XG4gICAgaWYgKChkYXRlVG9kYXkgLSBkYXRlVGFzaykgPiAzNjAwMDAwKSB0YXNrSWRzLnB1c2goZWxlLmlkKTtcbiAgfSk7XG4gIGRyb3BUYXNrKGFyciwgdGFza0lkcyk7XG59O1xuXG5leHBvcnQge1xuICBhZGRUYXNrLCBkcm9wVGFzaywgZWRpdFRhc2ssIHVwZGF0ZVN0YXR1c1Rhc2ssIHVwZGF0ZU9yZGVyVGFzaywgcmVzeW5jVGFzayxcbn07XG4iLCJjb25zdCBzYXZlTG9jYWxTdG9yYWdlID0gKGFycikgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLCBKU09OLnN0cmluZ2lmeShhcnIpKTtcbn07XG5cbmNvbnN0IGxvYWRMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGxvY2FsVG9Eb0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpKTtcbiAgaWYgKGxvY2FsVG9Eb0xpc3QpIHJldHVybiBsb2NhbFRvRG9MaXN0O1xuICBzYXZlTG9jYWxTdG9yYWdlKFtdKTtcbiAgcmV0dXJuIFtdO1xufTtcblxuZXhwb3J0IHsgc2F2ZUxvY2FsU3RvcmFnZSwgbG9hZExvY2FsU3RvcmFnZSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgKiBhcyBMUyBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcyc7XG5pbXBvcnQgKiBhcyBDUlVEIGZyb20gJy4vY3J1ZC5qcyc7XG5cbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfX2Zvcm0nKTtcbmNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrX19pbnB1dCcpO1xuY29uc3QgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9fY2xlYXItZG9uZS10YXNrcycpO1xuY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19fbGlzdCcpO1xuY29uc3QgcmVzeW5jQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9fcmVzeW5jLW9sZC10YXNrcycpO1xuXG5jb25zdCBtYW5hZ2VUb0RvTGlzdEFycmF5ID0gKCgpID0+IHtcbiAgbGV0IHRvRG9MaXN0QXJyYXkgPSBbXTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0b0RvTGlzdEFycmF5ID0gTFMubG9hZExvY2FsU3RvcmFnZSgpO1xuICAgIHJldHVybiB0b0RvTGlzdEFycmF5O1xuICB9O1xufSkoKTtcblxuY29uc3QgYWRqdXN0VHh0SGVpZ2h0ID0gKCkgPT4ge1xuICBjb25zdCB0ZXh0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHh0X190YXNrLWRlc2NyaXB0aW9uJyk7XG4gIGlmICh0ZXh0RWxlbWVudHMpIHtcbiAgICB0ZXh0RWxlbWVudHMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgZWxlbS5zdHlsZS5oZWlnaHQgPSBgJHtlbGVtLnNjcm9sbEhlaWdodH1weGA7XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHRvZ2dsZVRhc2tUb29scyA9ICh0YXNrRWxlbWVudCkgPT4ge1xuICBjb25zdCByZW1CdG4gPSB0YXNrRWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRTaWJsaW5nLmZpcnN0Q2hpbGQ7XG4gIGNvbnN0IGRyYWdCdG4gPSB0YXNrRWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRTaWJsaW5nLmxhc3RDaGlsZDtcbiAgcmVtQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xuICBkcmFnQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xufTtcblxuY29uc3QgdXBkYXRlVGFza1N0YXR1cyA9IChjaGVja0VsZW1lbnQpID0+IHtcbiAgY29uc3QgdGFza0lkID0gY2hlY2tFbGVtZW50LmRhdGFzZXQudGFza2lkO1xuICBpZiAoY2hlY2tFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tsaXN0LWFjdGl2ZScpKSBDUlVELnVwZGF0ZVN0YXR1c1Rhc2sobWFuYWdlVG9Eb0xpc3RBcnJheSgpLCB0YXNrSWQsIHRydWUpO1xuICBlbHNlIENSVUQudXBkYXRlU3RhdHVzVGFzayhtYW5hZ2VUb0RvTGlzdEFycmF5KCksIHRhc2tJZCwgZmFsc2UpO1xufTtcblxuY29uc3Qgc29ydFRhc2tzID0gKCkgPT4ge1xuICBjb25zdCB0YXNrSWRzID0gW107XG4gIGNvbnN0IGVsRG9tID0gdGFza0xpc3QucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tfX2xpc3QtaXRlbScpO1xuICBlbERvbS5mb3JFYWNoKChlbGUsIGluZGV4KSA9PiB7XG4gICAgdGFza0lkcy5wdXNoKGVsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza2lkJykpO1xuICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza2lkJywgaW5kZXggKyAxKTtcbiAgfSk7XG4gIENSVUQudXBkYXRlT3JkZXJUYXNrKG1hbmFnZVRvRG9MaXN0QXJyYXkoKSwgdGFza0lkcyk7XG59O1xuXG4vLyBEUkFHIEZVTkNUSU9OQUxJVFlcbmNvbnN0IGdldEN1cnJlbnRBZnRlckVsZW1lbnQgPSAoeSkgPT4ge1xuICBjb25zdCBkcmFnZ2FibGVFbGVtZW50cyA9IFsuLi50YXNrTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza19fbGlzdC1pdGVtOm5vdCguZHJhZ2dpbmcpJyldO1xuICByZXR1cm4gZHJhZ2dhYmxlRWxlbWVudHMucmVkdWNlKChjbG9zZXN0LCBjaGlsZCkgPT4ge1xuICAgIGNvbnN0IGJveCA9IGNoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IG9mZnNldCA9IHkgLSBib3gudG9wIC0gYm94LmhlaWdodDtcbiAgICBpZiAob2Zmc2V0IDwgMCAmJiBvZmZzZXQgPiBjbG9zZXN0Lm9mZnNldCkgcmV0dXJuIHsgb2Zmc2V0LCBlbGVtZW50OiBjaGlsZCB9O1xuICAgIHJldHVybiBjbG9zZXN0O1xuICB9LCB7IG9mZnNldDogTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZIH0pLmVsZW1lbnQ7XG59O1xuXG5jb25zdCBkcmFnVGFza3MgPSAoKSA9PiB7XG4gIGNvbnN0IGRyYWdnYWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza19fbGlzdC1pdGVtJyk7XG4gIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgZHJhZ2dhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsICgpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuICAgIH0pO1xuXG4gICAgZHJhZ2dhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICAgIHNvcnRUYXNrcygpO1xuICAgIH0pO1xuICB9KTtcblxuICB0YXNrTGlzdC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRyYWdnYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnZ2luZycpO1xuICAgIGNvbnN0IGFmdGVyRWxlbWVudCA9IGdldEN1cnJlbnRBZnRlckVsZW1lbnQoZS5jbGllbnRZKTtcbiAgICBpZiAoYWZ0ZXJFbGVtZW50ID09PSBudWxsKSB0YXNrTGlzdC5hcHBlbmRDaGlsZChkcmFnZ2FibGUpO1xuICAgIGVsc2UgdGFza0xpc3QuaW5zZXJ0QmVmb3JlKGRyYWdnYWJsZSwgYWZ0ZXJFbGVtZW50KTtcbiAgfSk7XG59O1xuXG5jb25zdCByZW5kZXJUYXNrTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgbG9hZGVkVG9Eb0xpc3QgPSBtYW5hZ2VUb0RvTGlzdEFycmF5KCk7XG4gIHRhc2tMaXN0LmlubmVySFRNTCA9ICcnO1xuICBsb2FkZWRUb0RvTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgdGFza0xpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICB0YXNrTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgndGFza19fbGlzdC1pdGVtJyk7XG4gICAgdGFza0xpc3RJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS10YXNraWQnLCB0YXNrLmlkKTtcbiAgICB0YXNrTGlzdEl0ZW0uZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICBjb25zdCBsaXNJdGVtQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaXNJdGVtQ2hlY2suY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtLWNoZWNrJyk7XG4gICAgY29uc3QgY2hlY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjaGVja0J0bi5jbGFzc0xpc3QuYWRkKCdidG5fX3Rhc2stY2hlY2tsaXN0Jyk7XG4gICAgaWYgKHRhc2suY29tcGxldGVkKSBjaGVja0J0bi5jbGFzc0xpc3QuYWRkKCdjaGVja2xpc3QtYWN0aXZlJyk7XG4gICAgY2hlY2tCdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRhc2tpZCcsIHRhc2suaWQpO1xuICAgIGNoZWNrQnRuLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEsNTAuMDljMi43OS0yLjQ2LDUuMjEtNS4xNCw4LjE0LTcsNC4yMS0yLjcyLDguNDYtMS43MywxMi4yNSwxLjI5QzI2LDQ4LDI4Ljg2LDUzLDMxLjM5LDU4LjI1Yy43NCwxLjUyLDEuNDIsMy4wNiwyLjA4LDQuNSw2LTguMTMsMTEuNzktMTYuMjcsMTcuOTItMjQuMTNDNTguMDksMzAsNjUuNSwyMiw3NC4yOCwxNS40NGM1LjQ0LTQuMDgsMTEuMTktNy42NCwxOC4xNi04LjMyYTM5LjU1LDM5LjU1LDAsMCwxLDYuMzMuMzdsLjIyLjc3Yy0uODUuNzEtMS42OCwxLjQzLTIuNTQsMi4xM0M4MS4xNCwyMi44Miw2Ny4xNywzNi41NCw1Ni44Niw1My41M2MtMy43Nyw2LjIxLTYuNjYsMTIuOTQtMTAuMTIsMTkuMzQtMi42LDQuODEtNS4yNiw5LjYxLTguMjksMTQuMTVhMTMuMTEsMTMuMTEsMCwwLDEtOC43NCw1Ljg4Yy0zLjM1LjU4LTUtLjQ0LTYtMy42OS0yLjgyLTkuMjItNi0xOC4zLTEwLjg4LTI2LjY3QzkuMzYsNTYuNTMsNyw1NC4wNiwxLDUwLjA5WlwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5gO1xuICAgIGNoZWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY2hlY2tCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tsaXN0LWFjdGl2ZScpO1xuICAgICAgdXBkYXRlVGFza1N0YXR1cyhjaGVja0J0bik7XG4gICAgfSk7XG4gICAgbGlzSXRlbUNoZWNrLmFwcGVuZENoaWxkKGNoZWNrQnRuKTtcbiAgICB0YXNrTGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzSXRlbUNoZWNrKTtcblxuICAgIGNvbnN0IGxpc3RJdGVtVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3RJdGVtVmlldy5jbGFzc0xpc3QuYWRkKCdsaXN0LWl0ZW0tdmlldycpO1xuICAgIGxpc3RJdGVtVmlldy5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGB0eHRfX3Rhc2stJHt0YXNrLmlkfWApO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3R4dF9fdGFzay1kZXNjcmlwdGlvbicpO1xuICAgIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza2lkJywgdGFzay5pZCk7XG4gICAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBgdHh0X190YXNrLSR7dGFzay5pZH1gKTtcbiAgICB0YXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdzcGVsbGNoZWNrJywgZmFsc2UpO1xuICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke3Rhc2suZGVzY3JpcHRpb259YDtcbiAgICB0YXNrRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICB0YXNrRGVzY3JpcHRpb24uc3R5bGUuaGVpZ2h0ID0gYCR7dGFza0Rlc2NyaXB0aW9uLnNjcm9sbEhlaWdodH1weGA7XG4gICAgICBDUlVELmVkaXRUYXNrKG1hbmFnZVRvRG9MaXN0QXJyYXkoKSwgK3Rhc2tEZXNjcmlwdGlvbi5kYXRhc2V0LnRhc2tpZCwgdGFza0Rlc2NyaXB0aW9uLnZhbHVlKTtcbiAgICB9KTtcbiAgICB0YXNrRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgICB0b2dnbGVUYXNrVG9vbHModGFza0Rlc2NyaXB0aW9uKTtcbiAgICB9KTtcbiAgICB0YXNrRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0b2dnbGVUYXNrVG9vbHModGFza0Rlc2NyaXB0aW9uKTsgfSwgMTAwKTtcbiAgICB9KTtcbiAgICBsaXN0SXRlbVZpZXcuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgICB0YXNrTGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdEl0ZW1WaWV3KTtcblxuICAgIGNvbnN0IGxpc3RJdGVtVG9vbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaXN0SXRlbVRvb2xzLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbS10b29scycpO1xuICAgIGNvbnN0IHRyYXNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdHJhc2hCdG4uY2xhc3NMaXN0LmFkZCgnYnRuX190YXNrLXJlbW92ZScsICdkLW5vbmUnKTtcbiAgICB0cmFzaEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza2lkJywgdGFzay5pZCk7XG4gICAgdHJhc2hCdG4uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNjguNzEgOThcIj5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMy4yMiwzM2MtMy4wNi0uNTEtNS4yNy0xLjg4LTQuNzgtNS4xOHMzLjE4LTMuNyw2LTMuNjlxMjcuMjIuMDYsNTQuNDQsMGMyLjY3LDAsNC45My42Myw1LjM4LDMuNTlTODMsMzIuMzgsODAsMzIuNzljLS4wOSwwLS4xNy4xMy0uNTIuNDJDNzguMzQsNDcuMzMsNzcuMTUsNjEuNjgsNzUuOTUsNzZjLS40Myw1LjE1LS43OSwxMC4zLTEuMzYsMTUuNDNDNzQsOTYuODUsNzEuNDQsOTksNjYsOTlIMzYuODFjLTUuNjEsMC04LjA5LTIuMDctOC42Ni03LjgxLTEtOS45Mi0xLjc4LTE5Ljg2LTIuNjItMjkuNzlDMjQuNzQsNTIuMDYsMjQsNDIuNzIsMjMuMjIsMzNabTM4LDUyLDIuNTcsMy4zNGMxLjEzLTEsMy4xLTEuODYsMy4yNS0zQzY5LDcwLjU1LDcwLjY4LDU1Ljc2LDcyLjQxLDQxYy4yNC0yLjA1LS40NC00LTIuNjEtMy43OS0xLjIuMTQtMywyLjA4LTMuMTQsMy4zOUM2NC43Niw1NC44Niw2My4xMyw2OS4xNyw2MS4yNiw4NC45NFptLTE5LjcxLjY1TDM5LjExLDY1Yy0xLTguMjMtMS44Ni0xNi40Ni0zLTI0LjY2LS4xNy0xLjIyLTEuNTMtMi41My0yLjY5LTMuMjEtLjQ4LS4yOC0yLjI4Ljc2LTIuNzQsMS42YTYuMzUsNi4zNSwwLDAsMC0uMTksMy41YzEuNjUsMTQuMTksMy4yNywyOC4zOCw1LjE1LDQyLjU0LjE3LDEuMjgsMi4wNiwyLjM0LDMuMTUsMy41Wm0xMi43Ni0yM2MwLTcuMiwwLTE0LjQxLDAtMjEuNjEsMC0yLjEyLS40LTQtMy00cy0yLjkxLDItMi45MSw0LjA4cTAsMjEuNjEsMCw0My4yM2MwLDIuMTMuNDEsNCwzLDRzMi45Mi0yLDIuOTEtNC4wN0M1NC4zMSw3Nyw1NC4zMiw2OS43Nyw1NC4zMSw2Mi41NlpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE1LjY1IC0xKVwiLz5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk04MC4yMSw2LjYxYy0uNzYuNjItMiwyLjQtMy40OSwyLjc2QzU4LjEzLDEzLjczLDM5LjQ5LDE3LjksMjAuODUsMjIuMDhjLTIuNy42MS00LjQ5LS41OS01LjA3LTMuMjZzLjY5LTQuMzksMy4zNC01YzIuOTItLjcsNS44NC0xLjQyLDguNzgtMiwyLjQzLS41MSw0LjktLjY3LDUuNjItMy44OC4xOC0uODIsMS43NC0xLjY1LDIuOC0xLjkxLDYuMy0xLjU1LDEyLjYtMy4xLDE5LTQuMjYsMS42LS4yOSwzLjQ1Ljg4LDUuMiwxLjI5YTkuMjYsOS4yNiwwLDAsMCwzLjU1LjUzYzMuNjYtLjY3LDcuMjUtMS43MSwxMC45LTIuNDNDNzcuOTQuNTEsODAuMzEsMi41NSw4MC4yMSw2LjYxWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTUuNjUgLTEpXCIvPlxuICAgICAgICAgICAgPC9zdmc+YDtcbiAgICB0cmFzaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIENSVUQuZHJvcFRhc2sobWFuYWdlVG9Eb0xpc3RBcnJheSgpLCBbK3RyYXNoQnRuLmRhdGFzZXQudGFza2lkXSk7XG4gICAgICByZW5kZXJUYXNrTGlzdCgpO1xuICAgIH0pO1xuICAgIGxpc3RJdGVtVG9vbHMuYXBwZW5kQ2hpbGQodHJhc2hCdG4pO1xuXG4gICAgY29uc3QgbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1vdmVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuX190YXNrLWRyYWdkcm9wJyk7XG4gICAgbW92ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza2lkJywgdGFzay5pZCk7XG4gICAgbW92ZUJ0bi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNC40MyA5OFwiPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNNDguODUsOTlsLTEuNzUtLjQxYTEyLjIzLDEyLjIzLDAsMSwxLDQuNjcuMjEsMy44MSwzLjgxLDAsMCwwLS42Mi4yWm0wLTk4YTQsNCwwLDAsMS0uNjIuMiwxMi4xOSwxMi4xOSwwLDEsMCw0LjY3LjIxTDUxLjE1LDFaTTUwLDM3Ljc5QTEyLjIxLDEyLjIxLDAsMSwwLDYyLjIxLDUwLDEyLjI2LDEyLjI2LDAsMCwwLDUwLDM3Ljc5WlwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zNy43OSAtMSlcIiAvPlxuICAgICAgICAgICAgPC9zdmc+YDtcbiAgICBsaXN0SXRlbVRvb2xzLmFwcGVuZENoaWxkKG1vdmVCdG4pO1xuICAgIHRhc2tMaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0SXRlbVRvb2xzKTtcbiAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrTGlzdEl0ZW0pO1xuICB9KTtcbiAgYWRqdXN0VHh0SGVpZ2h0KCk7XG4gIGRyYWdUYXNrcygpO1xufTtcblxuLy8gQ1JVRCBUQVNLU1xuY29uc3Qgc3VibWl0VGFzayA9ICgpID0+IHtcbiAgQ1JVRC5hZGRUYXNrKG1hbmFnZVRvRG9MaXN0QXJyYXkoKSwgdGFza0lucHV0LnZhbHVlKTtcbiAgdGFza0lucHV0LnZhbHVlID0gJyc7XG4gIHJlbmRlclRhc2tMaXN0KCk7XG59O1xuXG5jb25zdCByZW1vdmVUYXNrcyA9IChjaGVja2xpc3QpID0+IHtcbiAgY29uc3QgdGFza0lkcyA9IFtdO1xuICBjaGVja2xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2tJZHMucHVzaCgrdGFzay5kYXRhc2V0LnRhc2tpZCk7XG4gIH0pO1xuICBDUlVELmRyb3BUYXNrKG1hbmFnZVRvRG9MaXN0QXJyYXkoKSwgdGFza0lkcyk7XG4gIHJlbmRlclRhc2tMaXN0KCk7XG59O1xuXG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGlmICh0YXNrSW5wdXQudmFsdWUgIT09ICcnKSBzdWJtaXRUYXNrKCk7XG59KTtcblxucmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICByZW1vdmVUYXNrcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tsaXN0LWFjdGl2ZScpKTtcbn0pO1xuXG5yZXN5bmNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIENSVUQucmVzeW5jVGFzayhtYW5hZ2VUb0RvTGlzdEFycmF5KCkpO1xuICByZW5kZXJUYXNrTGlzdCgpO1xufSk7XG5cbnJlc3luY0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gIGNvbnN0IHJlc3luY01zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fX3Jlc3luYy1vbGQtdGFzay1tc2cnKTtcbiAgcmVzeW5jTXNnLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGVfX2VsZW1lbnQnKTtcbn0pO1xuXG5yZXN5bmNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gIGNvbnN0IHJlc3luY01zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fX3Jlc3luYy1vbGQtdGFzay1tc2cnKTtcbiAgcmVzeW5jTXNnLmNsYXNzTGlzdC5hZGQoJ2hpZGVfX2VsZW1lbnQnKTtcbn0pO1xuXG4vLyBTVEFSVCBMT0FESU5HXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgcmVuZGVyVGFza0xpc3QoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9