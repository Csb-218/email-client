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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/store */ \"./src/store/store.ts\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_redux__WEBPACK_IMPORTED_MODULE_1__, _store_store__WEBPACK_IMPORTED_MODULE_2__]);\n([react_redux__WEBPACK_IMPORTED_MODULE_1__, _store_store__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n        store: _store_store__WEBPACK_IMPORTED_MODULE_2__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/Csb-218/email-client/src/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/Csb-218/email-client/src/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDQTtBQUNSO0FBR2hCLFNBQVNFLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDOUQscUJBQ0UsOERBQUNKLGlEQUFRQTtRQUFDQyxPQUFPQSwrQ0FBS0E7a0JBQ3BCLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW1haWwtY2xpZW50Ly4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL3N0b3JlL3N0b3JlJztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlByb3ZpZGVyIiwic3RvcmUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/store/emailSlice.ts":
/*!*********************************!*\
  !*** ./src/store/emailSlice.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   selectEmail: () => (/* binding */ selectEmail),\n/* harmony export */   setEmails: () => (/* binding */ setEmails),\n/* harmony export */   setFilter: () => (/* binding */ setFilter),\n/* harmony export */   setPage: () => (/* binding */ setPage),\n/* harmony export */   toggleFavorite: () => (/* binding */ toggleFavorite)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst initialState = {\n    emails: [],\n    selectedEmail: null,\n    filter: \"all\",\n    currentPage: 1\n};\nconst emailSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"email\",\n    initialState,\n    reducers: {\n        setEmails: (state, action)=>{\n            state.emails = action.payload;\n        },\n        selectEmail: (state, action)=>{\n            state.selectedEmail = action.payload;\n            const email = state.emails.find((e)=>e.id === action.payload);\n            if (email) {\n                email.read = true;\n            }\n        },\n        toggleFavorite: (state, action)=>{\n            const email = state.emails.find((e)=>e.id === action.payload);\n            if (email) {\n                email.favorite = !email.favorite;\n            }\n        },\n        setFilter: (state, action)=>{\n            state.filter = action.payload;\n            state.selectedEmail = null;\n        },\n        setPage: (state, action)=>{\n            state.currentPage = action.payload;\n        }\n    }\n});\nconst { setEmails, selectEmail, toggleFavorite, setFilter, setPage } = emailSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emailSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvZW1haWxTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThEO0FBVTlELE1BQU1DLGVBQTJCO0lBQy9CQyxRQUFRLEVBQUU7SUFDVkMsZUFBZTtJQUNmQyxRQUFRO0lBQ1JDLGFBQWE7QUFDZjtBQUVBLE1BQU1DLGFBQWFOLDZEQUFXQSxDQUFDO0lBQzdCTyxNQUFNO0lBQ05OO0lBQ0FPLFVBQVU7UUFDUkMsV0FBVyxDQUFDQyxPQUFPQztZQUNqQkQsTUFBTVIsTUFBTSxHQUFHUyxPQUFPQyxPQUFPO1FBQy9CO1FBQ0FDLGFBQWEsQ0FBQ0gsT0FBT0M7WUFDbkJELE1BQU1QLGFBQWEsR0FBR1EsT0FBT0MsT0FBTztZQUNwQyxNQUFNRSxRQUFRSixNQUFNUixNQUFNLENBQUNhLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxFQUFFLEtBQUtOLE9BQU9DLE9BQU87WUFDOUQsSUFBSUUsT0FBTztnQkFDVEEsTUFBTUksSUFBSSxHQUFHO1lBQ2Y7UUFDRjtRQUNBQyxnQkFBZ0IsQ0FBQ1QsT0FBT0M7WUFDdEIsTUFBTUcsUUFBUUosTUFBTVIsTUFBTSxDQUFDYSxJQUFJLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsRUFBRSxLQUFLTixPQUFPQyxPQUFPO1lBQzlELElBQUlFLE9BQU87Z0JBQ1RBLE1BQU1NLFFBQVEsR0FBRyxDQUFDTixNQUFNTSxRQUFRO1lBQ2xDO1FBQ0Y7UUFDQUMsV0FBVyxDQUNUWCxPQUNBQztZQUVBRCxNQUFNTixNQUFNLEdBQUdPLE9BQU9DLE9BQU87WUFDN0JGLE1BQU1QLGFBQWEsR0FBRztRQUN4QjtRQUNBbUIsU0FBUyxDQUFDWixPQUFPQztZQUNmRCxNQUFNTCxXQUFXLEdBQUdNLE9BQU9DLE9BQU87UUFDcEM7SUFDRjtBQUNGO0FBRU8sTUFBTSxFQUFFSCxTQUFTLEVBQUVJLFdBQVcsRUFBRU0sY0FBYyxFQUFFRSxTQUFTLEVBQUVDLE9BQU8sRUFBRSxHQUN6RWhCLFdBQVdpQixPQUFPLENBQUM7QUFDckIsaUVBQWVqQixXQUFXa0IsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW1haWwtY2xpZW50Ly4vc3JjL3N0b3JlL2VtYWlsU2xpY2UudHM/Y2Y0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgRW1haWwgfSBmcm9tICcuLi90eXBlcy9lbWFpbCc7XG5cbmludGVyZmFjZSBFbWFpbFN0YXRlIHtcbiAgZW1haWxzOiBFbWFpbFtdO1xuICBzZWxlY3RlZEVtYWlsOiBzdHJpbmcgfCBudWxsO1xuICBmaWx0ZXI6ICdhbGwnIHwgJ3JlYWQnIHwgJ3VucmVhZCcgfCAnZmF2b3JpdGUnO1xuICBjdXJyZW50UGFnZTogbnVtYmVyO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IEVtYWlsU3RhdGUgPSB7XG4gIGVtYWlsczogW10sXG4gIHNlbGVjdGVkRW1haWw6IG51bGwsXG4gIGZpbHRlcjogJ2FsbCcsXG4gIGN1cnJlbnRQYWdlOiAxLFxufTtcblxuY29uc3QgZW1haWxTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ2VtYWlsJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldEVtYWlsczogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248RW1haWxbXT4pID0+IHtcbiAgICAgIHN0YXRlLmVtYWlscyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0sXG4gICAgc2VsZWN0RW1haWw6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pID0+IHtcbiAgICAgIHN0YXRlLnNlbGVjdGVkRW1haWwgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGNvbnN0IGVtYWlsID0gc3RhdGUuZW1haWxzLmZpbmQoKGUpID0+IGUuaWQgPT09IGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIGlmIChlbWFpbCkge1xuICAgICAgICBlbWFpbC5yZWFkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRvZ2dsZUZhdm9yaXRlOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSA9PiB7XG4gICAgICBjb25zdCBlbWFpbCA9IHN0YXRlLmVtYWlscy5maW5kKChlKSA9PiBlLmlkID09PSBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICBpZiAoZW1haWwpIHtcbiAgICAgICAgZW1haWwuZmF2b3JpdGUgPSAhZW1haWwuZmF2b3JpdGU7XG4gICAgICB9XG4gICAgfSxcbiAgICBzZXRGaWx0ZXI6IChcbiAgICAgIHN0YXRlLFxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPCdhbGwnIHwgJ3JlYWQnIHwgJ3VucmVhZCcgfCAnZmF2b3JpdGUnPlxuICAgICkgPT4ge1xuICAgICAgc3RhdGUuZmlsdGVyID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBzdGF0ZS5zZWxlY3RlZEVtYWlsID0gbnVsbDtcbiAgICB9LFxuICAgIHNldFBhZ2U6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pID0+IHtcbiAgICAgIHN0YXRlLmN1cnJlbnRQYWdlID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBzZXRFbWFpbHMsIHNlbGVjdEVtYWlsLCB0b2dnbGVGYXZvcml0ZSwgc2V0RmlsdGVyLCBzZXRQYWdlIH0gPVxuICBlbWFpbFNsaWNlLmFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCBlbWFpbFNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJlbWFpbHMiLCJzZWxlY3RlZEVtYWlsIiwiZmlsdGVyIiwiY3VycmVudFBhZ2UiLCJlbWFpbFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0RW1haWxzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2VsZWN0RW1haWwiLCJlbWFpbCIsImZpbmQiLCJlIiwiaWQiLCJyZWFkIiwidG9nZ2xlRmF2b3JpdGUiLCJmYXZvcml0ZSIsInNldEZpbHRlciIsInNldFBhZ2UiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/emailSlice.ts\n");

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _emailSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emailSlice */ \"./src/store/emailSlice.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _emailSlice__WEBPACK_IMPORTED_MODULE_1__]);\n([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _emailSlice__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        email: _emailSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtEO0FBQ1Y7QUFFakMsTUFBTUUsUUFBUUYsZ0VBQWNBLENBQUM7SUFDbENHLFNBQVM7UUFDUEMsT0FBT0gsbURBQVlBO0lBQ3JCO0FBQ0YsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2VtYWlsLWNsaWVudC8uL3NyYy9zdG9yZS9zdG9yZS50cz81MDJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgZW1haWxSZWR1Y2VyIGZyb20gJy4vZW1haWxTbGljZSc7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIGVtYWlsOiBlbWFpbFJlZHVjZXIsXG4gIH0sXG59KTtcblxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+O1xuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSB0eXBlb2Ygc3RvcmUuZGlzcGF0Y2g7Il0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiZW1haWxSZWR1Y2VyIiwic3RvcmUiLCJyZWR1Y2VyIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/store.ts\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-redux");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();