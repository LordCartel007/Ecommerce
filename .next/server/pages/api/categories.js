"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/categories";
exports.ids = ["pages/api/categories"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mongooseConnect\": () => (/* binding */ mongooseConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction mongooseConnect() {\n    const uri = process.env.MONGODB_URI;\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    } else {\n        const uri = process.env.MONGODB_URI;\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLFNBQVNDLGtCQUFrQjtJQUNoQyxNQUFNQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7SUFDbkMsSUFBSUwsdUVBQThCLEtBQUssR0FBRztRQUN4QyxPQUFPQSxvRUFBNkI7SUFDdEMsT0FBTztRQUNMLE1BQU1FLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztRQUNuQyxPQUFPTCx1REFBZ0IsQ0FBQ0U7SUFDMUIsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbW9uZ29vc2UuanM/MTYzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW9uZ29vc2VDb25uZWN0KCkge1xyXG4gIGNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPT09IDEpIHtcclxuICAgIHJldHVybiBtb25nb29zZS5jb25uZWN0aW9uLmFzUHJvbWlzZSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuICAgIHJldHVybiBtb25nb29zZS5jb25uZWN0KHVyaSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIm1vbmdvb3NlQ29ubmVjdCIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImNvbm5lY3Rpb24iLCJyZWFkeVN0YXRlIiwiYXNQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./models/Category.js":
/*!****************************!*\
  !*** ./models/Category.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Category\": () => (/* binding */ Category)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CategorySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    parent: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId),\n        ref: \"Category\"\n    }\n});\nconst Category = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.Category || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Category\", CategorySchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvQ2F0ZWdvcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJEO0FBRTNELE1BQU1JLGlCQUFpQixJQUFJSCw0Q0FBTUEsQ0FBQztJQUNoQ0ksTUFBTTtRQUFFQyxNQUFNQztRQUFRQyxVQUFVLElBQUk7SUFBQztJQUNyQ0MsUUFBUTtRQUFFSCxNQUFNTixnRUFBdUI7UUFBRVksS0FBSztJQUFXO0FBQzNEO0FBRU8sTUFBTUMsV0FBV1YsNENBQU1BLEVBQUVVLFlBQVlYLCtDQUFLQSxDQUFDLFlBQVlFLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21vZGVscy9DYXRlZ29yeS5qcz80YzgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEsIG1vZGVsLCBtb2RlbHMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IENhdGVnb3J5U2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgcGFyZW50OiB7IHR5cGU6IG1vbmdvb3NlLlR5cGVzLk9iamVjdElkLCByZWY6IFwiQ2F0ZWdvcnlcIiB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeSA9IG1vZGVscz8uQ2F0ZWdvcnkgfHwgbW9kZWwoXCJDYXRlZ29yeVwiLCBDYXRlZ29yeVNjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsIm1vZGVsIiwibW9kZWxzIiwiQ2F0ZWdvcnlTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwicGFyZW50IiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsIkNhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Category.js\n");

/***/ }),

/***/ "(api)/./pages/api/categories.js":
/*!*********************************!*\
  !*** ./pages/api/categories.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _models_Category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/Category */ \"(api)/./models/Category.js\");\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/mongoose */ \"(api)/./lib/mongoose.js\");\n\n\nasync function handle(req, res) {\n    const { method  } = req;\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_1__.mongooseConnect)();\n    if (method === \"GET\") {\n        res.json(await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.find().populate(\"parent\"));\n    }\n    if (method === \"POST\") {\n        const { name , parentCategory  } = req.body;\n        const categoryDoc = await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.create({\n            name,\n            parent: parentCategory\n        });\n        res.json(categoryDoc);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUQ7QUFDSTtBQUV0QyxlQUFlRSxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM3QyxNQUFNLEVBQUVDLE9BQU0sRUFBRSxHQUFHRjtJQUNuQixNQUFNRiw4REFBZUE7SUFFckIsSUFBSUksV0FBVyxPQUFPO1FBQ3BCRCxJQUFJRSxJQUFJLENBQUMsTUFBTU4sMkRBQWEsR0FBR1EsUUFBUSxDQUFDO0lBQzFDLENBQUM7SUFFRCxJQUFJSCxXQUFXLFFBQVE7UUFDckIsTUFBTSxFQUFFSSxLQUFJLEVBQUVDLGVBQWMsRUFBRSxHQUFHUCxJQUFJUSxJQUFJO1FBQ3pDLE1BQU1DLGNBQWMsTUFBTVosNkRBQWUsQ0FBQztZQUN4Q1M7WUFDQUssUUFBUUo7UUFDVjtRQUNBTixJQUFJRSxJQUFJLENBQUNNO0lBQ1gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy5qcz82OGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSBcIi4uLy4uL21vZGVscy9DYXRlZ29yeVwiO1xyXG5pbXBvcnQgeyBtb25nb29zZUNvbm5lY3QgfSBmcm9tIFwiLi4vLi4vbGliL21vbmdvb3NlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMpIHtcclxuICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xyXG4gIGF3YWl0IG1vbmdvb3NlQ29ubmVjdCgpO1xyXG5cclxuICBpZiAobWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICByZXMuanNvbihhd2FpdCBDYXRlZ29yeS5maW5kKCkucG9wdWxhdGUoXCJwYXJlbnRcIikpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgIGNvbnN0IHsgbmFtZSwgcGFyZW50Q2F0ZWdvcnkgfSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3QgY2F0ZWdvcnlEb2MgPSBhd2FpdCBDYXRlZ29yeS5jcmVhdGUoe1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBwYXJlbnQ6IHBhcmVudENhdGVnb3J5LFxyXG4gICAgfSk7XHJcbiAgICByZXMuanNvbihjYXRlZ29yeURvYyk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJDYXRlZ29yeSIsIm1vbmdvb3NlQ29ubmVjdCIsImhhbmRsZSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImpzb24iLCJmaW5kIiwicG9wdWxhdGUiLCJuYW1lIiwicGFyZW50Q2F0ZWdvcnkiLCJib2R5IiwiY2F0ZWdvcnlEb2MiLCJjcmVhdGUiLCJwYXJlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/categories.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/categories.js"));
module.exports = __webpack_exports__;

})();