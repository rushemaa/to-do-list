/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/arrow-return-left.svg */ \"./src/assets/arrow-return-left.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: #f6f6f6;\\n  text-align: center;\\n}\\n\\nul {\\n  box-sizing: border-box;\\n  border-radius: 3px;\\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\\n  margin: 0 auto;\\n  top: 0;\\n  max-width: 500px;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  padding: initial;\\n  background-color: #fff;\\n}\\n\\nli {\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\n  list-style: none;\\n  display: flex;\\n  justify-content: space-between;\\n  padding-left: 0;\\n  align-items: center;\\n}\\n\\n.li-header {\\n  text-align: left;\\n}\\n\\n.li-header h2 {\\n  color: #545862;\\n  font-size: 15px;\\n  font-weight: 400;\\n  padding: 1rem;\\n  line-height: 20px;\\n  margin: 0;\\n  width: 100%;\\n  text-overflow: ellipsis;\\n  overflow: hidden;\\n  white-space: nowrap;\\n}\\n\\n.add-input {\\n  display: flex;\\n}\\n\\n.add-input form {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n#new-item {\\n  border: none;\\n  outline: none;\\n  overflow: hidden;\\n  resize: none;\\n  padding: 0 40px 0 1rem;\\n  line-height: 50px;\\n  height: 50px;\\n  font-style: italic;\\n  width: 100%;\\n}\\n\\n#submit-new-item {\\n  appearance: none;\\n  border: none;\\n  background-color: #fff;\\n  z-index: 0;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  width: 40px;\\n  height: 50px;\\n  cursor: pointer;\\n}\\n\\n.tasks div {\\n  display: flex;\\n  align-items: center;\\n  width: 100%;\\n}\\n\\n.tasks textarea {\\n  height: 20px;\\n  border: none;\\n  box-sizing: inherit;\\n  overflow: auto;\\n  width: 100%;\\n  padding: 15px 0;\\n  line-height: 20px;\\n  word-wrap: break-word;\\n  resize: none;\\n}\\n\\n.tasks textarea:focus {\\n  outline: none;\\n}\\n\\n.checkboxs {\\n  margin: 15px;\\n}\\n\\nli input {\\n  margin: initial;\\n}\\n\\n.btn-clear {\\n  background-color: #f6f6f6;\\n}\\n\\n.btn-clear button {\\n  outline: none;\\n  border: none;\\n  background-color: transparent;\\n  margin: 1rem auto;\\n  width: 100%;\\n  cursor: pointer;\\n}\\n\\n.btn-clear button:hover {\\n  text-decoration: underline;\\n}\\n\\n.right-icons {\\n  line-height: 0;\\n  cursor: pointer;\\n  padding-right: 10px;\\n}\\n\\n.right-icons-h {\\n  line-height: 0;\\n  cursor: move;\\n  padding-right: 10px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/functions.js */ \"./src/modules/functions.js\");\n/* harmony import */ var _modules_statusUpdate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/statusUpdate.js */ \"./src/modules/statusUpdate.js\");\n\n\n\n\nconst ul = document.querySelector('.ul');\n(0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.loadTasks)(localStorage.getItem('lists'), ul);\nconst addInput = document.querySelector('.add-input form');\naddInput.addEventListener('submit', (event) => {\n  event.preventDefault();\n  (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(document.querySelector('#new-item'), ul);\n  (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.deleteTaks)(ul);\n  (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.updateTaks)();\n  (0,_modules_statusUpdate_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ul);\n});\n(0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.deleteTaks)(ul);\n(0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.updateTaks)();\n(0,_modules_statusUpdate_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nconst clearAll = document.querySelector('.btn-clear button');\nclearAll.addEventListener('click', () => {\n  (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.deleteAllTaks)(ul);\n});\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"deleteAllTaks\": () => (/* binding */ deleteAllTaks),\n/* harmony export */   \"deleteTaks\": () => (/* binding */ deleteTaks),\n/* harmony export */   \"loadTasks\": () => (/* binding */ loadTasks),\n/* harmony export */   \"updateTaks\": () => (/* binding */ updateTaks)\n/* harmony export */ });\n/* harmony import */ var _assets_arrow_repeat_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/arrow-repeat.svg */ \"./src/assets/arrow-repeat.svg\");\n/* harmony import */ var _assets_three_dots_vertical_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/three-dots-vertical.svg */ \"./src/assets/three-dots-vertical.svg\");\n/* harmony import */ var _assets_trash_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/trash.svg */ \"./src/assets/trash.svg\");\n/* harmony import */ var _statusUpdate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statusUpdate.js */ \"./src/modules/statusUpdate.js\");\n\n\n\n\n\nconst loadTasks = (localS, ul) => {\n  let lists = `<li class=\"li-header\"><h2>Today's To Do </h2><img class=\"right-icons-h\" cl src=\"${_assets_arrow_repeat_svg__WEBPACK_IMPORTED_MODULE_0__}\"></li>`;\n  lists\n    += '<li class=\"add-input\"><form> <input id=\"new-item\" class=\"new-item\" placeholder=\"Add to your list...\" type=\"text\"> <input id=\"submit-new-item\" type=\"submit\" tabindex=\"-1\" value=\"\" title=\"click this or press enter to submit\" class=\"icon-return\"> </form></li>';\n  const simpleTasks = [];\n  if (localS) {\n    simpleTasks.push(...JSON.parse(localS));\n    simpleTasks.sort((a, b) => {\n      if (a.index > b.index) return 1;\n      if (a.index < b.index) return -1;\n      return 0;\n    });\n  }\n  const toDoList = (listData) => {\n    let lists = '';\n    listData.forEach((list) => {\n      const { description, completed, index } = list;\n      lists += `<li class='tasks' ><div><input class='checkboxs' ${\n        completed ? 'checked' : ''\n      }  type='checkbox' id=\"status-${index}\" value=\"${completed}\" /><textarea id=\"edit-${index}\">${description}</textarea></div> <img class=\"right-icons\" id=\"remove-${index}\" src=\"${_assets_three_dots_vertical_svg__WEBPACK_IMPORTED_MODULE_1__}\"></li>`;\n    });\n    return lists;\n  };\n\n  ul.innerHTML = lists + toDoList(simpleTasks);\n};\n\nfunction updateTaks() {\n  const edit = [];\n  if (localStorage.getItem('lists')) {\n    edit.push(...JSON.parse(localStorage.getItem('lists')));\n  }\n  edit.forEach((task) => {\n    const editField = document.getElementById(`edit-${task.index}`);\n    editField.addEventListener('blur', () => {\n      task.description = editField.value;\n      localStorage.setItem('lists', JSON.stringify(edit));\n    });\n  });\n}\n\nfunction deleteTaks(ul) {\n  const tobeDelate = [];\n  if (localStorage.getItem('lists')) {\n    tobeDelate.push(...JSON.parse(localStorage.getItem('lists')));\n  }\n  let i = 0;\n  tobeDelate.forEach((task) => {\n    const removeBtn = document.getElementById(`remove-${task.index}`);\n    removeBtn.addEventListener('mouseover', () => {\n      removeBtn.setAttribute('src', _assets_trash_svg__WEBPACK_IMPORTED_MODULE_2__);\n    });\n    removeBtn.addEventListener('mouseout', () => {\n      removeBtn.setAttribute('src', _assets_three_dots_vertical_svg__WEBPACK_IMPORTED_MODULE_1__);\n    });\n    removeBtn.addEventListener('click', () => {\n      const NewList = tobeDelate.filter(\n        (element) => element.index !== task.index,\n      );\n      const NewListKeys = NewList.map((p) => {\n        i += 1;\n        return {\n          description: p.description,\n          completed: p.completed,\n          index: i,\n        };\n      });\n      localStorage.setItem('lists', JSON.stringify(NewListKeys));\n      loadTasks(JSON.stringify(NewListKeys), ul);\n      deleteTaks(ul);\n      updateTaks();\n      (0,_statusUpdate_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    });\n  });\n}\n\nfunction deleteAllTaks(ul) {\n  const tobeDelate = [];\n  if (localStorage.getItem('lists')) {\n    tobeDelate.push(...JSON.parse(localStorage.getItem('lists')));\n  }\n  const NewList = tobeDelate.filter((element) => element.completed !== true);\n  let i = 0;\n  const NewListKeys = NewList.map((p) => {\n    i += 1;\n    return {\n      description: p.description,\n      completed: p.completed,\n      index: i,\n    };\n  });\n  localStorage.setItem('lists', JSON.stringify(NewListKeys));\n  loadTasks(JSON.stringify(NewListKeys), ul);\n  deleteTaks(ul);\n  updateTaks();\n  (0,_statusUpdate_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\nfunction addTask(description, ul) {\n  const tasks = [];\n  const localData = localStorage.getItem('lists');\n  if (localData) {\n    tasks.push(...JSON.parse(localStorage.getItem('lists')));\n  }\n  const descriptionData = description.value;\n  const newIndex = tasks.length + 1;\n  tasks.push({\n    description: descriptionData,\n    completed: false,\n    index: newIndex,\n  });\n  description.value = '';\n  const dataTolocal = JSON.stringify(tasks);\n  localStorage.setItem('lists', dataTolocal);\n  loadTasks(dataTolocal, ul);\n  const addInput = document.querySelector('.add-input form');\n  addInput.addEventListener('submit', (event) => {\n    event.preventDefault();\n    addTask(document.querySelector('#new-item'), ul);\n    deleteTaks(ul);\n    updateTaks();\n    (0,_statusUpdate_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  });\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/functions.js?");

/***/ }),

/***/ "./src/modules/statusUpdate.js":
/*!*************************************!*\
  !*** ./src/modules/statusUpdate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ changeStatus)\n/* harmony export */ });\nfunction changeStatus() {\n  const editt = [];\n  if (localStorage.getItem('lists')) {\n    editt.push(...JSON.parse(localStorage.getItem('lists')));\n  }\n  editt.forEach((task) => {\n    const check = document.getElementById(`status-${task.index}`);\n    check.addEventListener('change', () => {\n      const neww = editt.map((p) => {\n        if (p.index === task.index) {\n          return {\n            description: p.description,\n            completed: !p.completed,\n            index: p.index,\n          };\n        }\n        return p;\n      });\n      localStorage.setItem('lists', JSON.stringify(neww));\n      changeStatus();\n    });\n  });\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/statusUpdate.js?");

/***/ }),

/***/ "./src/assets/arrow-repeat.svg":
/*!*************************************!*\
  !*** ./src/assets/arrow-repeat.svg ***!
  \*************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktYXJyb3ctcmVwZWF0IiB2aWV3Qm94PSIwIDAgMTYgMTYiPgogIDxwYXRoIGQ9Ik0xMS41MzQgN2gzLjkzMmEuMjUuMjUgMCAwIDEgLjE5Mi40MWwtMS45NjYgMi4zNmEuMjUuMjUgMCAwIDEtLjM4NCAwbC0xLjk2Ni0yLjM2YS4yNS4yNSAwIDAgMSAuMTkyLS40MXptLTExIDJoMy45MzJhLjI1LjI1IDAgMCAwIC4xOTItLjQxTDIuNjkyIDYuMjNhLjI1LjI1IDAgMCAwLS4zODQgMEwuMzQyIDguNTlBLjI1LjI1IDAgMCAwIC41MzQgOXoiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDNjLTEuNTUyIDAtMi45NC43MDctMy44NTcgMS44MThhLjUuNSAwIDEgMS0uNzcxLS42MzZBNi4wMDIgNi4wMDIgMCAwIDEgMTMuOTE3IDdIMTIuOUE1LjAwMiA1LjAwMiAwIDAgMCA4IDN6TTMuMSA5YTUuMDAyIDUuMDAyIDAgMCAwIDguNzU3IDIuMTgyLjUuNSAwIDEgMSAuNzcxLjYzNkE2LjAwMiA2LjAwMiAwIDAgMSAyLjA4MyA5SDMuMXoiLz4KPC9zdmc+\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/arrow-repeat.svg?");

/***/ }),

/***/ "./src/assets/arrow-return-left.svg":
/*!******************************************!*\
  !*** ./src/assets/arrow-return-left.svg ***!
  \******************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktYXJyb3ctcmV0dXJuLWxlZnQiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuNSAxLjVhLjUuNSAwIDAgMSAuNS41djQuOGEyLjUgMi41IDAgMCAxLTIuNSAyLjVIMi43MDdsMy4zNDcgMy4zNDZhLjUuNSAwIDAgMS0uNzA4LjcwOGwtNC4yLTQuMmEuNS41IDAgMCAxIDAtLjcwOGw0LTRhLjUuNSAwIDEgMSAuNzA4LjcwOEwyLjcwNyA4LjNIMTIuNUExLjUgMS41IDAgMCAwIDE0IDYuOFYyYS41LjUgMCAwIDEgLjUtLjV6Ii8+Cjwvc3ZnPg==\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/arrow-return-left.svg?");

/***/ }),

/***/ "./src/assets/three-dots-vertical.svg":
/*!********************************************!*\
  !*** ./src/assets/three-dots-vertical.svg ***!
  \********************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktdGhyZWUtZG90cy12ZXJ0aWNhbCIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS41IDEzYTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwem0wLTVhMS41IDEuNSAwIDEgMS0zIDAgMS41IDEuNSAwIDAgMSAzIDB6bTAtNWExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgMHoiLz4KPC9zdmc+\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/three-dots-vertical.svg?");

/***/ }),

/***/ "./src/assets/trash.svg":
/*!******************************!*\
  !*** ./src/assets/trash.svg ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktdHJhc2giIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHBhdGggZD0iTTUuNSA1LjVBLjUuNSAwIDAgMSA2IDZ2NmEuNS41IDAgMCAxLTEgMFY2YS41LjUgMCAwIDEgLjUtLjV6bTIuNSAwYS41LjUgMCAwIDEgLjUuNXY2YS41LjUgMCAwIDEtMSAwVjZhLjUuNSAwIDAgMSAuNS0uNXptMyAuNWEuNS41IDAgMCAwLTEgMHY2YS41LjUgMCAwIDAgMSAwVjZ6Ii8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuNSAzYTEgMSAwIDAgMS0xIDFIMTN2OWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMlY0aC0uNWExIDEgMCAwIDEtMS0xVjJhMSAxIDAgMCAxIDEtMUg2YTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMSAxaDMuNWExIDEgMCAwIDEgMSAxdjF6TTQuMTE4IDQgNCA0LjA1OVYxM2ExIDEgMCAwIDAgMSAxaDZhMSAxIDAgMCAwIDEtMVY0LjA1OUwxMS44ODIgNEg0LjExOHpNMi41IDNWMmgxMXYxaC0xMXoiLz4KPC9zdmc+\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/trash.svg?");

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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;