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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Nav)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Nav() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {}, void 0, false, {\n            fileName: \"C:\\\\Code Warrior\\\\Projects\\\\ecommerce-admin-3\\\\components\\\\Nav.js\",\n            lineNumber: 4,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Code Warrior\\\\Projects\\\\ecommerce-admin-3\\\\components\\\\Nav.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0EsTUFBTTtJQUM1QixxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNDOzs7Ozs7Ozs7O0FBR1AsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2LmpzPzg2NGEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXNpZGU+XHJcbiAgICAgIDxhPjwvYT5cclxuICAgIDwvYXNpZGU+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTmF2IiwiYXNpZGUiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ }),

/***/ "./pages/Home.js":
/*!***********************!*\
  !*** ./pages/Home.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n\n\n\nfunction Home() {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    if (!session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-blue-900 w-screen h-screen flex items-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center w-full\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"google\"),\n                        className: \"bg-white p-2 px-4 rounded-lg\",\n                        children: \"Login With Google\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Code Warrior\\\\Projects\\\\ecommerce-admin-3\\\\pages\\\\Home.js\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Code Warrior\\\\Projects\\\\ecommerce-admin-3\\\\pages\\\\Home.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Code Warrior\\\\Projects\\\\ecommerce-admin-3\\\\pages\\\\Home.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-blue-900 min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Code Warrior\\\\Projects\\\\ecommerce-admin-3\\\\pages\\\\Home.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \" Logged in\",\n                    session.user.email,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Code Warrior\\\\Projects\\\\ecommerce-admin-3\\\\pages\\\\Home.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Code Warrior\\\\Projects\\\\ecommerce-admin-3\\\\pages\\\\Home.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Ib21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEQ7QUFDMUI7QUFFckIsU0FBU0ksT0FBTztJQUM3QixNQUFNLEVBQUVDLE1BQU1DLFFBQU8sRUFBRSxHQUFHTiwyREFBVUE7SUFDcEMsSUFBSSxDQUFDTSxTQUFTO1FBQ1oscUJBQ0UsOERBQUNDO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOztvQkFDWjtrQ0FDRCw4REFBQ0M7d0JBQ0NDLFNBQVMsSUFBTVQsdURBQU1BLENBQUM7d0JBQ3RCTyxXQUFVO2tDQUNYOzs7Ozs7Ozs7Ozs7Ozs7OztJQU1ULENBQUM7SUFDRCxxQkFDRSw4REFBQ0Q7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNMLHVEQUFHQTs7Ozs7MEJBQ0osOERBQUNJOztvQkFBSTtvQkFBV0QsUUFBUUssSUFBSSxDQUFDQyxLQUFLO29CQUFDOzs7Ozs7Ozs7Ozs7O0FBR3pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Ib21lLmpzPzA0ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL05hdlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcclxuICBpZiAoIXNlc3Npb24pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS05MDAgdy1zY3JlZW4gaC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHctZnVsbFwiPlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduSW4oXCJnb29nbGVcIil9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtMiBweC00IHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMb2dpbiBXaXRoIEdvb2dsZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS05MDAgbWluLWgtc2NyZWVuXCI+XHJcbiAgICAgIDxOYXYgLz5cclxuICAgICAgPGRpdj4gTG9nZ2VkIGlue3Nlc3Npb24udXNlci5lbWFpbH0gPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTZXNzaW9uIiwic2lnbkluIiwic2lnbk91dCIsIk5hdiIsIkhvbWUiLCJkYXRhIiwic2Vzc2lvbiIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1c2VyIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Home.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ index)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ \"./pages/Home.js\");\n\n\nfunction index() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Code Warrior\\\\Projects\\\\ecommerce-admin-3\\\\pages\\\\index.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Code Warrior\\\\Projects\\\\ecommerce-admin-3\\\\pages\\\\index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUVYLFNBQVNDLFFBQVE7SUFDOUIscUJBQ0UsOERBQUNDOztZQUNFOzBCQUNELDhEQUFDRiw2Q0FBSUE7Ozs7O1lBQUk7Ozs7Ozs7QUFHZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge1wiIFwifVxyXG4gICAgICA8SG9tZSAvPntcIiBcIn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkhvbWUiLCJpbmRleCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();