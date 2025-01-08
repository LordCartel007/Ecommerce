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
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
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

/***/ "(api)/./models/product.js":
/*!***************************!*\
  !*** ./models/product.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Product\": () => (/* binding */ Product)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    description: String,\n    price: {\n        type: Number,\n        required: true\n    }\n});\n// using the models.product object to avoid recompiling the model\nconst Product = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Product || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Product\", ProductSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvcHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUQ7QUFFakQsTUFBTUcsZ0JBQWdCLElBQUlGLDRDQUFNQSxDQUFDO0lBQy9CRyxPQUFPO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtJQUFDO0lBQ3RDQyxhQUFhRjtJQUNiRyxPQUFPO1FBQUVKLE1BQU1LO1FBQVFILFVBQVUsSUFBSTtJQUFDO0FBQ3hDO0FBRUEsaUVBQWlFO0FBQzFELE1BQU1JLFVBQVVULG9EQUFjLElBQUlGLCtDQUFLQSxDQUFDLFdBQVdHLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvcHJvZHVjdC5qcz8wNzNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vZGVsLCBTY2hlbWEsIG1vZGVscyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgUHJvZHVjdFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gIHRpdGxlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICBkZXNjcmlwdGlvbjogU3RyaW5nLFxyXG4gIHByaWNlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcclxufSk7XHJcblxyXG4vLyB1c2luZyB0aGUgbW9kZWxzLnByb2R1Y3Qgb2JqZWN0IHRvIGF2b2lkIHJlY29tcGlsaW5nIHRoZSBtb2RlbFxyXG5leHBvcnQgY29uc3QgUHJvZHVjdCA9IG1vZGVscy5Qcm9kdWN0IHx8IG1vZGVsKFwiUHJvZHVjdFwiLCBQcm9kdWN0U2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vZGVsIiwiU2NoZW1hIiwibW9kZWxzIiwiUHJvZHVjdFNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsIk51bWJlciIsIlByb2R1Y3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/product.js\n");

/***/ }),

/***/ "(api)/./pages/api/products.js":
/*!*******************************!*\
  !*** ./pages/api/products.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/product */ \"(api)/./models/product.js\");\n\n\nasync function handle(req, res) {\n    const { method  } = req;\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__.mongooseConnect)();\n    // finding product from backend\n    if (method === \"GET\") {\n        if (req.query?.id) {\n            res.json(await _models_product__WEBPACK_IMPORTED_MODULE_1__.Product.findOne({\n                _id: req.query.id\n            }));\n        } else {\n            res.json(await _models_product__WEBPACK_IMPORTED_MODULE_1__.Product.find());\n        }\n    }\n    // adding product to backend\n    if (method === \"POST\") {\n        const { title , description , price  } = req.body;\n        const productDoc = await _models_product__WEBPACK_IMPORTED_MODULE_1__.Product.create({\n            title,\n            description,\n            price\n        });\n        res.json(productDoc);\n    }\n    // updating product\n    if (method === \"PUT\") {\n        const { title , description , price , _id  } = req.body;\n        await _models_product__WEBPACK_IMPORTED_MODULE_1__.Product.updateOne({\n            _id\n        }, {\n            title,\n            description,\n            price\n        });\n        res.json(true);\n    }\n    if (method === \"DELETE\") {\n        if (req.query?.id) {\n            await _models_product__WEBPACK_IMPORTED_MODULE_1__.Product.deleteOne({\n                _id: req.query?.id\n            });\n            res.json(true);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFEO0FBRU47QUFFaEMsZUFBZUUsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDN0MsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0Y7SUFDbkIsTUFBTUgsOERBQWVBO0lBQ3JCLCtCQUErQjtJQUMvQixJQUFJSyxXQUFXLE9BQU87UUFDcEIsSUFBSUYsSUFBSUcsS0FBSyxFQUFFQyxJQUFJO1lBQ2pCSCxJQUFJSSxJQUFJLENBQUMsTUFBTVAsNERBQWUsQ0FBQztnQkFBRVMsS0FBS1AsSUFBSUcsS0FBSyxDQUFDQyxFQUFFO1lBQUM7UUFDckQsT0FBTztZQUNMSCxJQUFJSSxJQUFJLENBQUMsTUFBTVAseURBQVk7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFFRCw0QkFBNEI7SUFDNUIsSUFBSUksV0FBVyxRQUFRO1FBQ3JCLE1BQU0sRUFBRU8sTUFBSyxFQUFFQyxZQUFXLEVBQUVDLE1BQUssRUFBRSxHQUFHWCxJQUFJWSxJQUFJO1FBQzlDLE1BQU1DLGFBQWEsTUFBTWYsMkRBQWMsQ0FBQztZQUN0Q1c7WUFDQUM7WUFDQUM7UUFDRjtRQUNBVixJQUFJSSxJQUFJLENBQUNRO0lBQ1gsQ0FBQztJQUVELG1CQUFtQjtJQUNuQixJQUFJWCxXQUFXLE9BQU87UUFDcEIsTUFBTSxFQUFFTyxNQUFLLEVBQUVDLFlBQVcsRUFBRUMsTUFBSyxFQUFFSixJQUFHLEVBQUUsR0FBR1AsSUFBSVksSUFBSTtRQUNuRCxNQUFNZCw4REFBaUIsQ0FBQztZQUFFUztRQUFJLEdBQUc7WUFBRUU7WUFBT0M7WUFBYUM7UUFBTTtRQUM3RFYsSUFBSUksSUFBSSxDQUFDLElBQUk7SUFDZixDQUFDO0lBQ0QsSUFBSUgsV0FBVyxVQUFVO1FBQ3ZCLElBQUlGLElBQUlHLEtBQUssRUFBRUMsSUFBSTtZQUNqQixNQUFNTiw4REFBaUIsQ0FBQztnQkFBRVMsS0FBS1AsSUFBSUcsS0FBSyxFQUFFQztZQUFHO1lBQzdDSCxJQUFJSSxJQUFJLENBQUMsSUFBSTtRQUNmLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9wcm9kdWN0cy5qcz80OWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vbmdvb3NlQ29ubmVjdCB9IGZyb20gXCIuLi8uLi9saWIvbW9uZ29vc2VcIjtcclxuXHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3Byb2R1Y3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XHJcbiAgYXdhaXQgbW9uZ29vc2VDb25uZWN0KCk7XHJcbiAgLy8gZmluZGluZyBwcm9kdWN0IGZyb20gYmFja2VuZFxyXG4gIGlmIChtZXRob2QgPT09IFwiR0VUXCIpIHtcclxuICAgIGlmIChyZXEucXVlcnk/LmlkKSB7XHJcbiAgICAgIHJlcy5qc29uKGF3YWl0IFByb2R1Y3QuZmluZE9uZSh7IF9pZDogcmVxLnF1ZXJ5LmlkIH0pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcy5qc29uKGF3YWl0IFByb2R1Y3QuZmluZCgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGFkZGluZyBwcm9kdWN0IHRvIGJhY2tlbmRcclxuICBpZiAobWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIHByaWNlIH0gPSByZXEuYm9keTtcclxuICAgIGNvbnN0IHByb2R1Y3REb2MgPSBhd2FpdCBQcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgcHJpY2UsXHJcbiAgICB9KTtcclxuICAgIHJlcy5qc29uKHByb2R1Y3REb2MpO1xyXG4gIH1cclxuXHJcbiAgLy8gdXBkYXRpbmcgcHJvZHVjdFxyXG4gIGlmIChtZXRob2QgPT09IFwiUFVUXCIpIHtcclxuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZSwgX2lkIH0gPSByZXEuYm9keTtcclxuICAgIGF3YWl0IFByb2R1Y3QudXBkYXRlT25lKHsgX2lkIH0sIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZSB9KTtcclxuICAgIHJlcy5qc29uKHRydWUpO1xyXG4gIH1cclxuICBpZiAobWV0aG9kID09PSBcIkRFTEVURVwiKSB7XHJcbiAgICBpZiAocmVxLnF1ZXJ5Py5pZCkge1xyXG4gICAgICBhd2FpdCBQcm9kdWN0LmRlbGV0ZU9uZSh7IF9pZDogcmVxLnF1ZXJ5Py5pZCB9KTtcclxuICAgICAgcmVzLmpzb24odHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZUNvbm5lY3QiLCJQcm9kdWN0IiwiaGFuZGxlIiwicmVxIiwicmVzIiwibWV0aG9kIiwicXVlcnkiLCJpZCIsImpzb24iLCJmaW5kT25lIiwiX2lkIiwiZmluZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImJvZHkiLCJwcm9kdWN0RG9jIiwiY3JlYXRlIiwidXBkYXRlT25lIiwiZGVsZXRlT25lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/products.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products.js"));
module.exports = __webpack_exports__;

})();