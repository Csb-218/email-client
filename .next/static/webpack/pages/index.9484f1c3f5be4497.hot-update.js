"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/EmailFilters.tsx":
/*!*****************************************!*\
  !*** ./src/components/EmailFilters.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _store_emailSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/emailSlice */ \"./src/store/emailSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst EmailFilters = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const { filter } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.email);\n    const filters = [\n        {\n            value: \"all\",\n            label: \"All\"\n        },\n        {\n            value: \"unread\",\n            label: \"Unread\"\n        },\n        {\n            value: \"read\",\n            label: \"Read\"\n        },\n        {\n            value: \"favorite\",\n            label: \"Favorites\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex space-x-4 p-4 bg-gray-100\",\n        children: filters.map((param)=>{\n            let { value, label } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>dispatch((0,_store_emailSlice__WEBPACK_IMPORTED_MODULE_2__.setFilter)(value)),\n                className: \"px-4 py-2 rounded-full \".concat(filter === value ? \"filter-button text-white\" : \"bg-white text-gray-700 hover:bg-gray-50\"),\n                children: label\n            }, value, false, {\n                fileName: \"/home/Csb-218/email-client/src/components/EmailFilters.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/home/Csb-218/email-client/src/components/EmailFilters.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EmailFilters, \"qfeOEcOdLQbPNob185gDEORkmpY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = EmailFilters;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmailFilters);\nvar _c;\n$RefreshReg$(_c, \"EmailFilters\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FbWFpbEZpbHRlcnMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUM2QjtBQUVQO0FBRWhELE1BQU1JLGVBQXlCOztJQUM3QixNQUFNQyxXQUF3Qkgsd0RBQVdBO0lBQ3pDLE1BQU0sRUFBRUksTUFBTSxFQUFFLEdBQUdMLHdEQUFXQSxDQUFDLENBQUNNLFFBQXFCQSxNQUFNQyxLQUFLO0lBRWhFLE1BQU1DLFVBQVU7UUFDZDtZQUFFQyxPQUFPO1lBQU9DLE9BQU87UUFBTTtRQUM3QjtZQUFFRCxPQUFPO1lBQVVDLE9BQU87UUFBUztRQUNuQztZQUFFRCxPQUFPO1lBQVFDLE9BQU87UUFBTztRQUMvQjtZQUFFRCxPQUFPO1lBQVlDLE9BQU87UUFBWTtLQUN6QztJQUVELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNaSixRQUFRSyxHQUFHLENBQUM7Z0JBQUMsRUFBRUosS0FBSyxFQUFFQyxLQUFLLEVBQUU7aUNBQzVCLDhEQUFDSTtnQkFFQ0MsU0FBUyxJQUFNWCxTQUFTRiw0REFBU0EsQ0FBQ087Z0JBQ2xDRyxXQUFXLDBCQUlWLE9BSENQLFdBQVdJLFFBQ1AsNkJBQ0E7MEJBR0xDO2VBUklEOzs7Ozs7Ozs7OztBQWFmO0dBNUJNTjs7UUFDMEJGLG9EQUFXQTtRQUN0QkQsb0RBQVdBOzs7S0FGMUJHO0FBOEJOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0VtYWlsRmlsdGVycy50c3g/M2MyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUm9vdFN0YXRlLCBBcHBEaXNwYXRjaCB9IGZyb20gJy4uL3N0b3JlL3N0b3JlJztcbmltcG9ydCB7IHNldEZpbHRlciB9IGZyb20gJy4uL3N0b3JlL2VtYWlsU2xpY2UnO1xuXG5jb25zdCBFbWFpbEZpbHRlcnM6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaDogQXBwRGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IGZpbHRlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmVtYWlsKTtcblxuICBjb25zdCBmaWx0ZXJzID0gW1xuICAgIHsgdmFsdWU6ICdhbGwnLCBsYWJlbDogJ0FsbCcgfSxcbiAgICB7IHZhbHVlOiAndW5yZWFkJywgbGFiZWw6ICdVbnJlYWQnIH0sXG4gICAgeyB2YWx1ZTogJ3JlYWQnLCBsYWJlbDogJ1JlYWQnIH0sXG4gICAgeyB2YWx1ZTogJ2Zhdm9yaXRlJywgbGFiZWw6ICdGYXZvcml0ZXMnIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00IHAtNCBiZy1ncmF5LTEwMFwiPlxuICAgICAge2ZpbHRlcnMubWFwKCh7IHZhbHVlLCBsYWJlbCB9KSA9PiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBrZXk9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHNldEZpbHRlcih2YWx1ZSBhcyBhbnkpKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2BweC00IHB5LTIgcm91bmRlZC1mdWxsICR7XG4gICAgICAgICAgICBmaWx0ZXIgPT09IHZhbHVlXG4gICAgICAgICAgICAgID8gJ2ZpbHRlci1idXR0b24gdGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgOiAnYmctd2hpdGUgdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTUwJ1xuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW1haWxGaWx0ZXJzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInNldEZpbHRlciIsIkVtYWlsRmlsdGVycyIsImRpc3BhdGNoIiwiZmlsdGVyIiwic3RhdGUiLCJlbWFpbCIsImZpbHRlcnMiLCJ2YWx1ZSIsImxhYmVsIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/EmailFilters.tsx\n"));

/***/ })

});