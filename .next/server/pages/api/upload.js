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
exports.id = "pages/api/upload";
exports.ids = ["pages/api/upload"];
exports.modules = {

/***/ "@aws-sdk/client-s3":
/*!*************************************!*\
  !*** external "@aws-sdk/client-s3" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ "mime-types":
/*!*****************************!*\
  !*** external "mime-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("mime-types");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "multiparty":
/*!*****************************!*\
  !*** external "multiparty" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("multiparty");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "@auth/mongodb-adapter":
/*!****************************************!*\
  !*** external "@auth/mongodb-adapter" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@auth/mongodb-adapter");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// mongo db connection from next auth\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {\n    serverApi: {\n        version: mongodb__WEBPACK_IMPORTED_MODULE_0__.ServerApiVersion.v1,\n        strict: true,\n        deprecationErrors: true\n    }\n};\nlet client;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClient) {\n        global._mongoClient = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n    }\n    client = global._mongoClient;\n} else {}\n// Export a module-scoped MongoClient. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxxQ0FBcUM7QUFDbUI7QUFFeEQsSUFBSSxDQUFDRSxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLE1BQU0sdURBQXVEO0FBQ3pFLENBQUM7QUFFRCxNQUFNQyxNQUFNSixRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUcsVUFBVTtJQUNkQyxXQUFXO1FBQ1RDLFNBQVNSLHdEQUFtQjtRQUM1QlUsUUFBUSxJQUFJO1FBQ1pDLG1CQUFtQixJQUFJO0lBQ3pCO0FBQ0Y7QUFFQSxJQUFJQztBQUVKLElBQUlYLElBQXNDLEVBQUU7SUFDMUMsK0RBQStEO0lBQy9ELDZFQUE2RTtJQUM3RSxJQUFJLENBQUNZLE9BQU9DLFlBQVksRUFBRTtRQUN4QkQsT0FBT0MsWUFBWSxHQUFHLElBQUlmLGdEQUFXQSxDQUFDTSxLQUFLQztJQUM3QyxDQUFDO0lBQ0RNLFNBQVNDLE9BQU9DLFlBQVk7QUFDOUIsT0FBTyxFQUdOO0FBRUQseURBQXlEO0FBQ3pELDhEQUE4RDtBQUM5RCxpRUFBZUYsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9tb25nb2RiLmpzP2Q5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbW9uZ28gZGIgY29ubmVjdGlvbiBmcm9tIG5leHQgYXV0aFxyXG5pbXBvcnQgeyBNb25nb0NsaWVudCwgU2VydmVyQXBpVmVyc2lvbiB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkL01pc3NpbmcgZW52aXJvbm1lbnQgdmFyaWFibGU6IFwiTU9OR09EQl9VUklcIicpO1xyXG59XHJcblxyXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICBzZXJ2ZXJBcGk6IHtcclxuICAgIHZlcnNpb246IFNlcnZlckFwaVZlcnNpb24udjEsXHJcbiAgICBzdHJpY3Q6IHRydWUsXHJcbiAgICBkZXByZWNhdGlvbkVycm9yczogdHJ1ZSxcclxuICB9LFxyXG59O1xyXG5cclxubGV0IGNsaWVudDtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXHJcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cclxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnQpIHtcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICB9XHJcbiAgY2xpZW50ID0gZ2xvYmFsLl9tb25nb0NsaWVudDtcclxufSBlbHNlIHtcclxuICAvLyBJbiBwcm9kdWN0aW9uIG1vZGUsIGl0J3MgYmVzdCB0byBub3QgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlLlxyXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xyXG59XHJcblxyXG4vLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50LiBCeSBkb2luZyB0aGlzIGluIGFcclxuLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJTZXJ2ZXJBcGlWZXJzaW9uIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJ1cmkiLCJvcHRpb25zIiwic2VydmVyQXBpIiwidmVyc2lvbiIsInYxIiwic3RyaWN0IiwiZGVwcmVjYXRpb25FcnJvcnMiLCJjbGllbnQiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mongooseConnect\": () => (/* binding */ mongooseConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction mongooseConnect() {\n    const uri = process.env.MONGODB_URI;\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    } else {\n        const uri = process.env.MONGODB_URI;\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLFNBQVNDLGtCQUFrQjtJQUNoQyxNQUFNQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7SUFDbkMsSUFBSUwsdUVBQThCLEtBQUssR0FBRztRQUN4QyxPQUFPQSxvRUFBNkI7SUFDdEMsT0FBTztRQUNMLE1BQU1FLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztRQUNuQyxPQUFPTCx1REFBZ0IsQ0FBQ0U7SUFDMUIsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbW9uZ29vc2UuanM/MTYzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW9uZ29vc2VDb25uZWN0KCkge1xyXG4gIGNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPT09IDEpIHtcclxuICAgIHJldHVybiBtb25nb29zZS5jb25uZWN0aW9uLmFzUHJvbWlzZSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuICAgIHJldHVybiBtb25nb29zZS5jb25uZWN0KHVyaSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIm1vbmdvb3NlQ29ubmVjdCIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImNvbm5lY3Rpb24iLCJyZWFkeVN0YXRlIiwiYXNQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"isAdminRequest\": () => (/* binding */ isAdminRequest)\n/* harmony export */ });\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"@auth/mongodb-adapter\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_mongodb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/mongodb.js */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_0__]);\n_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n// const adminEmails = [];\nconst authOptions = {\n    providers: [\n        // OAuth authentication providers...\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        })\n    ],\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_0__.MongoDBAdapter)(_lib_mongodb_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n    secret: process.env.NEXTAUTH_SECRET,\n    callbacks: {\n        session: ({ session , token , user  })=>{\n            // if (adminEmails.includes(session?.user?.email)) {\n            return session;\n        // } else {\n        //   return false;\n        // }\n        },\n        debug: true\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions));\n// security measures\nasync function isAdminRequest(req, res) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(req, res, authOptions);\n// if (!adminEmails.includes(session?.user?.email)) {\n//   res.status(401).end(\"Unauthorized\");\n//   throw new Error(\"not an admin\");\n// }\n} // ----\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1RDtBQUN0QjtBQUNZO0FBQ0E7QUFFVztBQUV4RCwwQkFBMEI7QUFFbkIsTUFBTUssY0FBYztJQUN6QkMsV0FBVztRQUNULG9DQUFvQztRQUVwQ0YsaUVBQWNBLENBQUM7WUFDYkcsVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO1lBQy9CQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLGFBQWE7UUFDekM7S0FDRDtJQUNEQyxTQUFTYixxRUFBY0EsQ0FBQ0UsdURBQU1BO0lBQzlCWSxRQUFRTixRQUFRQyxHQUFHLENBQUNNLGVBQWU7SUFDbkNDLFdBQVc7UUFDVEMsU0FBUyxDQUFDLEVBQUVBLFFBQU8sRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUUsR0FBSztZQUNyQyxvREFBb0Q7WUFDcEQsT0FBT0Y7UUFDUCxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLElBQUk7UUFDTjtRQUNBRyxPQUFPLElBQUk7SUFDYjtBQUNGLEVBQUU7QUFDRixpRUFBZW5CLGdEQUFRQSxDQUFDSSxZQUFZQSxFQUFDO0FBRXJDLG9CQUFvQjtBQUNiLGVBQWVnQixlQUFlQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM3QyxNQUFNTixVQUFVLE1BQU1kLDJEQUFnQkEsQ0FBQ21CLEtBQUtDLEtBQUtsQjtBQUNqRCxxREFBcUQ7QUFDckQseUNBQXlDO0FBQ3pDLHFDQUFxQztBQUNyQyxJQUFJO0FBQ04sQ0FBQyxDQUVELE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29EQkFkYXB0ZXIgfSBmcm9tIFwiQGF1dGgvbW9uZ29kYi1hZGFwdGVyXCI7XHJcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uLy4uLy4uL2xpYi9tb25nb2RiLmpzXCI7XHJcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XHJcblxyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XHJcblxyXG4vLyBjb25zdCBhZG1pbkVtYWlscyA9IFtdO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgLy8gT0F1dGggYXV0aGVudGljYXRpb24gcHJvdmlkZXJzLi4uXHJcblxyXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lELFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9TRUNSRVQsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudCksXHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBzZXNzaW9uOiAoeyBzZXNzaW9uLCB0b2tlbiwgdXNlciB9KSA9PiB7XHJcbiAgICAgIC8vIGlmIChhZG1pbkVtYWlscy5pbmNsdWRlcyhzZXNzaW9uPy51c2VyPy5lbWFpbCkpIHtcclxuICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgIC8vICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAvLyB9XHJcbiAgICB9LFxyXG4gICAgZGVidWc6IHRydWUsIC8vIEVuYWJsZSBkZXRhaWxlZCBsb2dnaW5nXHJcbiAgfSxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xyXG5cclxuLy8gc2VjdXJpdHkgbWVhc3VyZXNcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGlzQWRtaW5SZXF1ZXN0KHJlcSwgcmVzKSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24ocmVxLCByZXMsIGF1dGhPcHRpb25zKTtcclxuICAvLyBpZiAoIWFkbWluRW1haWxzLmluY2x1ZGVzKHNlc3Npb24/LnVzZXI/LmVtYWlsKSkge1xyXG4gIC8vICAgcmVzLnN0YXR1cyg0MDEpLmVuZChcIlVuYXV0aG9yaXplZFwiKTtcclxuICAvLyAgIHRocm93IG5ldyBFcnJvcihcIm5vdCBhbiBhZG1pblwiKTtcclxuICAvLyB9XHJcbn1cclxuXHJcbi8vIC0tLS1cclxuIl0sIm5hbWVzIjpbIk1vbmdvREJBZGFwdGVyIiwiTmV4dEF1dGgiLCJjbGllbnQiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiR29vZ2xlUHJvdmlkZXIiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9TRUNSRVQiLCJhZGFwdGVyIiwic2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwidXNlciIsImRlYnVnIiwiaXNBZG1pblJlcXVlc3QiLCJyZXEiLCJyZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./pages/api/upload.js":
/*!*****************************!*\
  !*** ./pages/api/upload.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiparty */ \"multiparty\");\n/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multiparty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/client-s3 */ \"@aws-sdk/client-s3\");\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mime-types */ \"mime-types\");\n/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mime_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _auth_nextauth___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_nextauth___WEBPACK_IMPORTED_MODULE_5__]);\n_auth_nextauth___WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// to read file\n\n\n\nconst bucketName = \"cartel-next-ecommerce\";\nasync function handler(req, res) {\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_4__.mongooseConnect)();\n    await (0,_auth_nextauth___WEBPACK_IMPORTED_MODULE_5__.isAdminRequest)(req, res);\n    const form = new (multiparty__WEBPACK_IMPORTED_MODULE_0___default().Form)();\n    const { fields , files  } = await new Promise((resolve, reject)=>{\n        form.parse(req, (err, fields, files)=>{\n            if (err) reject(err);\n            resolve({\n                fields,\n                files\n            });\n        });\n    });\n    const client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.S3Client({\n        region: \"eu-north-1\",\n        credentials: {\n            accessKeyId: process.env.S3_ACCESS_KEY,\n            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY\n        }\n    });\n    const links = [];\n    // creating random name for files\n    for (const file of files.file){\n        const ext = file.originalFilename.split(\".\").pop();\n        const newFilename = Date.now() + \".\" + ext;\n        await client.send(new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.PutObjectCommand({\n            Bucket: bucketName,\n            Key: newFilename,\n            Body: fs__WEBPACK_IMPORTED_MODULE_3___default().readFileSync(file.path),\n            ACL: \"public-read\",\n            ContentType: mime_types__WEBPACK_IMPORTED_MODULE_2___default().lookup(file.path)\n        }));\n        const link = `https://${bucketName}.s3.amazonaws.com/${newFilename}`;\n        links.push(link);\n    }\n    return res.json({\n        links\n    });\n}\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvQztBQUM0QjtBQUNsQztBQUM5QixlQUFlO0FBQ0s7QUFDaUM7QUFDQztBQUV0RCxNQUFNTyxhQUFhO0FBRUosZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUwsOERBQWVBO0lBQ3JCLE1BQU1DLCtEQUFjQSxDQUFDRyxLQUFLQztJQUMxQixNQUFNQyxPQUFPLElBQUlYLHdEQUFlO0lBRWhDLE1BQU0sRUFBRWEsT0FBTSxFQUFFQyxNQUFLLEVBQUUsR0FBRyxNQUFNLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0MsU0FBVztRQUMvRE4sS0FBS08sS0FBSyxDQUFDVCxLQUFLLENBQUNVLEtBQUtOLFFBQVFDLFFBQVU7WUFDdEMsSUFBSUssS0FBS0YsT0FBT0U7WUFDaEJILFFBQVE7Z0JBQUVIO2dCQUFRQztZQUFNO1FBQzFCO0lBQ0Y7SUFFQSxNQUFNTSxTQUFTLElBQUlsQix3REFBUUEsQ0FBQztRQUMxQm1CLFFBQVE7UUFDUkMsYUFBYTtZQUNYQyxhQUFhQyxRQUFRQyxHQUFHLENBQUNDLGFBQWE7WUFDdENDLGlCQUFpQkgsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7UUFDbkQ7SUFDRjtJQUVBLE1BQU1DLFFBQVEsRUFBRTtJQUVoQixpQ0FBaUM7SUFDakMsS0FBSyxNQUFNQyxRQUFRaEIsTUFBTWdCLElBQUksQ0FBRTtRQUM3QixNQUFNQyxNQUFNRCxLQUFLRSxnQkFBZ0IsQ0FBQ0MsS0FBSyxDQUFDLEtBQUtDLEdBQUc7UUFDaEQsTUFBTUMsY0FBY0MsS0FBS0MsR0FBRyxLQUFLLE1BQU1OO1FBRXZDLE1BQU1YLE9BQU9rQixJQUFJLENBQ2YsSUFBSXJDLGdFQUFnQkEsQ0FBQztZQUNuQnNDLFFBQVFoQztZQUNSaUMsS0FBS0w7WUFDTE0sTUFBTXJDLHNEQUFlLENBQUMwQixLQUFLYSxJQUFJO1lBQy9CQyxLQUFLO1lBQ0xDLGFBQWExQyx3REFBVyxDQUFDMkIsS0FBS2EsSUFBSTtRQUNwQztRQUVGLE1BQU1JLE9BQU8sQ0FBQyxRQUFRLEVBQUV4QyxXQUFXLGtCQUFrQixFQUFFNEIsWUFBWSxDQUFDO1FBQ3BFTixNQUFNbUIsSUFBSSxDQUFDRDtJQUNiO0lBRUEsT0FBT3JDLElBQUl1QyxJQUFJLENBQUM7UUFBRXBCO0lBQU07QUFDMUIsQ0FBQztBQUVNLE1BQU1xQixTQUFTO0lBQ3BCQyxLQUFLO1FBQUVDLFlBQVksS0FBSztJQUFDO0FBQzNCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXBsb2FkLmpzPzU1NzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG11bHRpcGFydHkgZnJvbSBcIm11bHRpcGFydHlcIjtcclxuaW1wb3J0IHsgUHV0T2JqZWN0Q29tbWFuZCwgUzNDbGllbnQgfSBmcm9tIFwiQGF3cy1zZGsvY2xpZW50LXMzXCI7XHJcbmltcG9ydCBtaW1lIGZyb20gXCJtaW1lLXR5cGVzXCI7XHJcbi8vIHRvIHJlYWQgZmlsZVxyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcbmltcG9ydCB7IG1vbmdvb3NlQ29ubmVjdCB9IGZyb20gXCIuLi8uLi9saWIvbW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgaXNBZG1pblJlcXVlc3QgfSBmcm9tIFwiLi9hdXRoL1suLi5uZXh0YXV0aF1cIjtcclxuXHJcbmNvbnN0IGJ1Y2tldE5hbWUgPSBcImNhcnRlbC1uZXh0LWVjb21tZXJjZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGF3YWl0IG1vbmdvb3NlQ29ubmVjdCgpO1xyXG4gIGF3YWl0IGlzQWRtaW5SZXF1ZXN0KHJlcSwgcmVzKTtcclxuICBjb25zdCBmb3JtID0gbmV3IG11bHRpcGFydHkuRm9ybSgpO1xyXG5cclxuICBjb25zdCB7IGZpZWxkcywgZmlsZXMgfSA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGZvcm0ucGFyc2UocmVxLCAoZXJyLCBmaWVsZHMsIGZpbGVzKSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHJlamVjdChlcnIpO1xyXG4gICAgICByZXNvbHZlKHsgZmllbGRzLCBmaWxlcyB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjbGllbnQgPSBuZXcgUzNDbGllbnQoe1xyXG4gICAgcmVnaW9uOiBcImV1LW5vcnRoLTFcIixcclxuICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgIGFjY2Vzc0tleUlkOiBwcm9jZXNzLmVudi5TM19BQ0NFU1NfS0VZLFxyXG4gICAgICBzZWNyZXRBY2Nlc3NLZXk6IHByb2Nlc3MuZW52LlMzX1NFQ1JFVF9BQ0NFU1NfS0VZLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbGlua3MgPSBbXTtcclxuXHJcbiAgLy8gY3JlYXRpbmcgcmFuZG9tIG5hbWUgZm9yIGZpbGVzXHJcbiAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzLmZpbGUpIHtcclxuICAgIGNvbnN0IGV4dCA9IGZpbGUub3JpZ2luYWxGaWxlbmFtZS5zcGxpdChcIi5cIikucG9wKCk7XHJcbiAgICBjb25zdCBuZXdGaWxlbmFtZSA9IERhdGUubm93KCkgKyBcIi5cIiArIGV4dDtcclxuXHJcbiAgICBhd2FpdCBjbGllbnQuc2VuZChcclxuICAgICAgbmV3IFB1dE9iamVjdENvbW1hbmQoe1xyXG4gICAgICAgIEJ1Y2tldDogYnVja2V0TmFtZSxcclxuICAgICAgICBLZXk6IG5ld0ZpbGVuYW1lLFxyXG4gICAgICAgIEJvZHk6IGZzLnJlYWRGaWxlU3luYyhmaWxlLnBhdGgpLFxyXG4gICAgICAgIEFDTDogXCJwdWJsaWMtcmVhZFwiLFxyXG4gICAgICAgIENvbnRlbnRUeXBlOiBtaW1lLmxvb2t1cChmaWxlLnBhdGgpLFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGxpbmsgPSBgaHR0cHM6Ly8ke2J1Y2tldE5hbWV9LnMzLmFtYXpvbmF3cy5jb20vJHtuZXdGaWxlbmFtZX1gO1xyXG4gICAgbGlua3MucHVzaChsaW5rKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXMuanNvbih7IGxpbmtzIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIGFwaTogeyBib2R5UGFyc2VyOiBmYWxzZSB9LFxyXG59O1xyXG4iXSwibmFtZXMiOlsibXVsdGlwYXJ0eSIsIlB1dE9iamVjdENvbW1hbmQiLCJTM0NsaWVudCIsIm1pbWUiLCJmcyIsIm1vbmdvb3NlQ29ubmVjdCIsImlzQWRtaW5SZXF1ZXN0IiwiYnVja2V0TmFtZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJmb3JtIiwiRm9ybSIsImZpZWxkcyIsImZpbGVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJzZSIsImVyciIsImNsaWVudCIsInJlZ2lvbiIsImNyZWRlbnRpYWxzIiwiYWNjZXNzS2V5SWQiLCJwcm9jZXNzIiwiZW52IiwiUzNfQUNDRVNTX0tFWSIsInNlY3JldEFjY2Vzc0tleSIsIlMzX1NFQ1JFVF9BQ0NFU1NfS0VZIiwibGlua3MiLCJmaWxlIiwiZXh0Iiwib3JpZ2luYWxGaWxlbmFtZSIsInNwbGl0IiwicG9wIiwibmV3RmlsZW5hbWUiLCJEYXRlIiwibm93Iiwic2VuZCIsIkJ1Y2tldCIsIktleSIsIkJvZHkiLCJyZWFkRmlsZVN5bmMiLCJwYXRoIiwiQUNMIiwiQ29udGVudFR5cGUiLCJsb29rdXAiLCJsaW5rIiwicHVzaCIsImpzb24iLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/upload.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/upload.js"));
module.exports = __webpack_exports__;

})();