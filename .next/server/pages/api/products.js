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

/***/ "(api)/./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Product\": () => (/* binding */ Product)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    description: String,\n    price: {\n        type: Number,\n        required: true\n    },\n    images: [\n        {\n            type: String\n        }\n    ],\n    category: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId),\n        ref: \"Category\"\n    }\n});\n// using the models.product object to avoid recompiling the model\nconst Product = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Product || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Product\", ProductSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkQ7QUFFM0QsTUFBTUksZ0JBQWdCLElBQUlGLDRDQUFNQSxDQUFDO0lBQy9CRyxPQUFPO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtJQUFDO0lBQ3RDQyxhQUFhRjtJQUNiRyxPQUFPO1FBQUVKLE1BQU1LO1FBQVFILFVBQVUsSUFBSTtJQUFDO0lBQ3RDSSxRQUFRO1FBQUM7WUFBRU4sTUFBTUM7UUFBTztLQUFFO0lBQzFCTSxVQUFVO1FBQUVQLE1BQU1OLGdFQUF1QjtRQUFFZ0IsS0FBSztJQUFXO0FBQzdEO0FBRUEsaUVBQWlFO0FBQzFELE1BQU1DLFVBQVVkLG9EQUFjLElBQUlGLCtDQUFLQSxDQUFDLFdBQVdHLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvUHJvZHVjdC5qcz8wOWM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBtb2RlbCwgU2NoZW1hLCBtb2RlbHMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IFByb2R1Y3RTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICB0aXRsZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgZGVzY3JpcHRpb246IFN0cmluZyxcclxuICBwcmljZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgaW1hZ2VzOiBbeyB0eXBlOiBTdHJpbmcgfV0sXHJcbiAgY2F0ZWdvcnk6IHsgdHlwZTogbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQsIHJlZjogXCJDYXRlZ29yeVwiIH0sXHJcbn0pO1xyXG5cclxuLy8gdXNpbmcgdGhlIG1vZGVscy5wcm9kdWN0IG9iamVjdCB0byBhdm9pZCByZWNvbXBpbGluZyB0aGUgbW9kZWxcclxuZXhwb3J0IGNvbnN0IFByb2R1Y3QgPSBtb2RlbHMuUHJvZHVjdCB8fCBtb2RlbChcIlByb2R1Y3RcIiwgUHJvZHVjdFNjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIm1vZGVsIiwiU2NoZW1hIiwibW9kZWxzIiwiUHJvZHVjdFNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsIk51bWJlciIsImltYWdlcyIsImNhdGVnb3J5IiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsIlByb2R1Y3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/Product.js\n");

/***/ }),

/***/ "(api)/./pages/api/products.js":
/*!*******************************!*\
  !*** ./pages/api/products.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Product */ \"(api)/./models/Product.js\");\n\n\nasync function handle(req, res) {\n    const { method  } = req;\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__.mongooseConnect)();\n    // finding product from backend\n    if (method === \"GET\") {\n        if (req.query?.id) {\n            res.json(await _models_Product__WEBPACK_IMPORTED_MODULE_1__.Product.findOne({\n                _id: req.query.id\n            }));\n        } else {\n            res.json(await _models_Product__WEBPACK_IMPORTED_MODULE_1__.Product.find());\n        }\n    }\n    // adding product to backend\n    if (method === \"POST\") {\n        const { title , description , price , images , category  } = req.body;\n        const productDoc = await _models_Product__WEBPACK_IMPORTED_MODULE_1__.Product.create({\n            title,\n            description,\n            price,\n            images,\n            category\n        });\n        res.json(productDoc);\n    }\n    // updating product\n    if (method === \"PUT\") {\n        const { title , description , price , images , category , _id  } = req.body;\n        await _models_Product__WEBPACK_IMPORTED_MODULE_1__.Product.updateOne({\n            _id\n        }, {\n            title,\n            description,\n            price,\n            images,\n            category\n        });\n        res.json(true);\n    }\n    if (method === \"DELETE\") {\n        if (req.query?.id) {\n            await _models_Product__WEBPACK_IMPORTED_MODULE_1__.Product.deleteOne({\n                _id: req.query?.id\n            });\n            res.json(true);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFEO0FBRU47QUFFaEMsZUFBZUUsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDN0MsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0Y7SUFDbkIsTUFBTUgsOERBQWVBO0lBQ3JCLCtCQUErQjtJQUMvQixJQUFJSyxXQUFXLE9BQU87UUFDcEIsSUFBSUYsSUFBSUcsS0FBSyxFQUFFQyxJQUFJO1lBQ2pCSCxJQUFJSSxJQUFJLENBQUMsTUFBTVAsNERBQWUsQ0FBQztnQkFBRVMsS0FBS1AsSUFBSUcsS0FBSyxDQUFDQyxFQUFFO1lBQUM7UUFDckQsT0FBTztZQUNMSCxJQUFJSSxJQUFJLENBQUMsTUFBTVAseURBQVk7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFFRCw0QkFBNEI7SUFDNUIsSUFBSUksV0FBVyxRQUFRO1FBQ3JCLE1BQU0sRUFBRU8sTUFBSyxFQUFFQyxZQUFXLEVBQUVDLE1BQUssRUFBRUMsT0FBTSxFQUFFQyxTQUFRLEVBQUUsR0FBR2IsSUFBSWMsSUFBSTtRQUNoRSxNQUFNQyxhQUFhLE1BQU1qQiwyREFBYyxDQUFDO1lBQ3RDVztZQUNBQztZQUNBQztZQUNBQztZQUNBQztRQUNGO1FBQ0FaLElBQUlJLElBQUksQ0FBQ1U7SUFDWCxDQUFDO0lBRUQsbUJBQW1CO0lBQ25CLElBQUliLFdBQVcsT0FBTztRQUNwQixNQUFNLEVBQUVPLE1BQUssRUFBRUMsWUFBVyxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBRUMsU0FBUSxFQUFFTixJQUFHLEVBQUUsR0FBR1AsSUFBSWMsSUFBSTtRQUVyRSxNQUFNaEIsOERBQWlCLENBQ3JCO1lBQUVTO1FBQUksR0FDTjtZQUFFRTtZQUFPQztZQUFhQztZQUFPQztZQUFRQztRQUFTO1FBRWhEWixJQUFJSSxJQUFJLENBQUMsSUFBSTtJQUNmLENBQUM7SUFDRCxJQUFJSCxXQUFXLFVBQVU7UUFDdkIsSUFBSUYsSUFBSUcsS0FBSyxFQUFFQyxJQUFJO1lBQ2pCLE1BQU1OLDhEQUFpQixDQUFDO2dCQUFFUyxLQUFLUCxJQUFJRyxLQUFLLEVBQUVDO1lBQUc7WUFDN0NILElBQUlJLElBQUksQ0FBQyxJQUFJO1FBQ2YsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3Byb2R1Y3RzLmpzPzQ5Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9uZ29vc2VDb25uZWN0IH0gZnJvbSBcIi4uLy4uL2xpYi9tb25nb29zZVwiO1xyXG5cclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUHJvZHVjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTtcclxuICBhd2FpdCBtb25nb29zZUNvbm5lY3QoKTtcclxuICAvLyBmaW5kaW5nIHByb2R1Y3QgZnJvbSBiYWNrZW5kXHJcbiAgaWYgKG1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgaWYgKHJlcS5xdWVyeT8uaWQpIHtcclxuICAgICAgcmVzLmpzb24oYXdhaXQgUHJvZHVjdC5maW5kT25lKHsgX2lkOiByZXEucXVlcnkuaWQgfSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLmpzb24oYXdhaXQgUHJvZHVjdC5maW5kKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gYWRkaW5nIHByb2R1Y3QgdG8gYmFja2VuZFxyXG4gIGlmIChtZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGltYWdlcywgY2F0ZWdvcnkgfSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3QgcHJvZHVjdERvYyA9IGF3YWl0IFByb2R1Y3QuY3JlYXRlKHtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBwcmljZSxcclxuICAgICAgaW1hZ2VzLFxyXG4gICAgICBjYXRlZ29yeSxcclxuICAgIH0pO1xyXG4gICAgcmVzLmpzb24ocHJvZHVjdERvYyk7XHJcbiAgfVxyXG5cclxuICAvLyB1cGRhdGluZyBwcm9kdWN0XHJcbiAgaWYgKG1ldGhvZCA9PT0gXCJQVVRcIikge1xyXG4gICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIHByaWNlLCBpbWFnZXMsIGNhdGVnb3J5LCBfaWQgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIGF3YWl0IFByb2R1Y3QudXBkYXRlT25lKFxyXG4gICAgICB7IF9pZCB9LFxyXG4gICAgICB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGltYWdlcywgY2F0ZWdvcnkgfVxyXG4gICAgKTtcclxuICAgIHJlcy5qc29uKHRydWUpO1xyXG4gIH1cclxuICBpZiAobWV0aG9kID09PSBcIkRFTEVURVwiKSB7XHJcbiAgICBpZiAocmVxLnF1ZXJ5Py5pZCkge1xyXG4gICAgICBhd2FpdCBQcm9kdWN0LmRlbGV0ZU9uZSh7IF9pZDogcmVxLnF1ZXJ5Py5pZCB9KTtcclxuICAgICAgcmVzLmpzb24odHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZUNvbm5lY3QiLCJQcm9kdWN0IiwiaGFuZGxlIiwicmVxIiwicmVzIiwibWV0aG9kIiwicXVlcnkiLCJpZCIsImpzb24iLCJmaW5kT25lIiwiX2lkIiwiZmluZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImltYWdlcyIsImNhdGVnb3J5IiwiYm9keSIsInByb2R1Y3REb2MiLCJjcmVhdGUiLCJ1cGRhdGVPbmUiLCJkZWxldGVPbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/products.js\n");

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