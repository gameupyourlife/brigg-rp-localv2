"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Modal/Modal.tsx":
/*!************************************!*\
  !*** ./components/Modal/Modal.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst Modal = (param)=>{\n    let { changeState, img, title, text } = param;\n    function handleBGClick(e) {\n        if (e.target.id == \"authentication-modal\") changeState();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onClick: (e)=>handleBGClick(e),\n            id: \"authentication-modal\",\n            className: \" flex justify-center bg-black/30 overflow-x-hidden overflow-y-auto fixed  max-md:pt-20 h-full top-4 left-0 right-0 md:inset-0 z-50  items-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" relative w-full max-w-3xl px-4 h-full md:h-auto z-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"modal-main\",\n                    className: \"rounded-lg shadow relative bg-gray-800\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-wrap-reverse\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"width-[300px] h-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    id: \"modal-img\",\n                                    alt: \"flavor image\",\n                                    src: img,\n                                    fill: true,\n                                    className: \"aspect-[2/3] min-h-full max-md:hidden\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Cedric\\\\Documents\\\\Code Spielereien\\\\brigg-rp-localv2\\\\components\\\\Modal\\\\Modal.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Cedric\\\\Documents\\\\Code Spielereien\\\\brigg-rp-localv2\\\\components\\\\Modal\\\\Modal.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex  justify-end p-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: (e)=>changeState(),\n                                            type: \"button\",\n                                            className: \"text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                className: \"w-5 h-5\",\n                                                fill: \"currentColor\",\n                                                viewBox: \"0 0 20 20\",\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    fillRule: \"evenodd\",\n                                                    d: \"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\",\n                                                    clipRule: \"evenodd\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Cedric\\\\Documents\\\\Code Spielereien\\\\brigg-rp-localv2\\\\components\\\\Modal\\\\Modal.tsx\",\n                                                    lineNumber: 38,\n                                                    columnNumber: 137\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Cedric\\\\Documents\\\\Code Spielereien\\\\brigg-rp-localv2\\\\components\\\\Modal\\\\Modal.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Cedric\\\\Documents\\\\Code Spielereien\\\\brigg-rp-localv2\\\\components\\\\Modal\\\\Modal.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Cedric\\\\Documents\\\\Code Spielereien\\\\brigg-rp-localv2\\\\components\\\\Modal\\\\Modal.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8 max-w-[500px] overflow-hidden\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"text-2xl font-bold\",\n                                                children: title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Cedric\\\\Documents\\\\Code Spielereien\\\\brigg-rp-localv2\\\\components\\\\Modal\\\\Modal.tsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"max-md:pb-5\",\n                                                children: text\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Cedric\\\\Documents\\\\Code Spielereien\\\\brigg-rp-localv2\\\\components\\\\Modal\\\\Modal.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Cedric\\\\Documents\\\\Code Spielereien\\\\brigg-rp-localv2\\\\components\\\\Modal\\\\Modal.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Cedric\\\\Documents\\\\Code Spielereien\\\\brigg-rp-localv2\\\\components\\\\Modal\\\\Modal.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Cedric\\\\Documents\\\\Code Spielereien\\\\brigg-rp-localv2\\\\components\\\\Modal\\\\Modal.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Cedric\\\\Documents\\\\Code Spielereien\\\\brigg-rp-localv2\\\\components\\\\Modal\\\\Modal.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Cedric\\\\Documents\\\\Code Spielereien\\\\brigg-rp-localv2\\\\components\\\\Modal\\\\Modal.tsx\",\n                lineNumber: 26,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Cedric\\\\Documents\\\\Code Spielereien\\\\brigg-rp-localv2\\\\components\\\\Modal\\\\Modal.tsx\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Cedric\\\\Documents\\\\Code Spielereien\\\\brigg-rp-localv2\\\\components\\\\Modal\\\\Modal.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTW9kYWwvTW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFVOEI7QUFDUztBQUV2QyxNQUFNRSxRQUFRO1FBQUMsRUFBRUMsV0FBVyxFQUFFQyxHQUFHLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFVO0lBQ3BELFNBQVNDLGNBQWVDLENBQU07UUFFMUIsSUFBSUEsRUFBRUMsTUFBTSxDQUFDQyxFQUFFLElBQUksd0JBQ2ZQO0lBQ1I7SUFFQSxxQkFDSSw4REFBQ1E7a0JBR0csNEVBQUNBO1lBQUlDLFNBQVNKLENBQUFBLElBQUtELGNBQWNDO1lBQUlFLElBQUc7WUFBdUJHLFdBQVk7c0JBQ3ZFLDRFQUFDRjtnQkFBSUUsV0FBVTswQkFHWCw0RUFBQ0Y7b0JBQUlELElBQUc7b0JBQWFHLFdBQVU7OEJBQzNCLDRFQUFDRjt3QkFBSUUsV0FBVTs7MENBQ1gsOERBQUNGO2dDQUFJRSxXQUFVOzBDQUNYLDRFQUFDYixtREFBS0E7b0NBQUNVLElBQUc7b0NBQVlJLEtBQUk7b0NBQWVDLEtBQUtYO29DQUFLWSxJQUFJO29DQUFDSCxXQUFVOzs7Ozs7Ozs7OzswQ0FFdEUsOERBQUNGO2dDQUFJRSxXQUFVOztrREFFZiw4REFBQ0Y7d0NBQUlFLFdBQVU7a0RBQ1gsNEVBQUNJOzRDQUFPTCxTQUFTSixDQUFBQSxJQUFLTDs0Q0FBZWUsTUFBSzs0Q0FBU0wsV0FBVTtzREFDekQsNEVBQUNNO2dEQUFJTixXQUFVO2dEQUFVRyxNQUFLO2dEQUFlSSxTQUFRO2dEQUFZQyxPQUFNOzBEQUE2Qiw0RUFBQ0M7b0RBQUtDLFVBQVM7b0RBQVVDLEdBQUU7b0RBQXFNQyxVQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBSXJWLDhEQUFDZDt3Q0FBSUUsV0FBVTs7MERBRVgsOERBQUNhO2dEQUFHYixXQUFVOzBEQUNUUjs7Ozs7OzBEQUVMLDhEQUFDc0I7Z0RBQUVkLFdBQVU7MERBQ1JQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlyQztLQTlDTUo7QUFnRE4sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbC9Nb2RhbC50c3g/NjgyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb2RhbEkge1xyXG4gICAgY2hhbmdlU3RhdGU6IEZ1bmN0aW9uXHJcbiAgICBpbWc6IHN0cmluZ1xyXG4gICAgdGl0bGU6IHN0cmluZ1xyXG4gICAgdGV4dDogc3RyaW5nXHJcblxyXG59XHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBNb2RhbCA9ICh7IGNoYW5nZVN0YXRlLCBpbWcsIHRpdGxlLCB0ZXh0IH06IE1vZGFsSSkgPT4ge1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlQkdDbGljayAoZTogYW55KVxyXG4gICAge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSAnYXV0aGVudGljYXRpb24tbW9kYWwnKVxyXG4gICAgICAgICAgICBjaGFuZ2VTdGF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIDwhLS0gTWFpbiBtb2RhbCAtLT4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17ZSA9PiBoYW5kbGVCR0NsaWNrKGUpfSBpZD1cImF1dGhlbnRpY2F0aW9uLW1vZGFsXCIgY2xhc3NOYW1lPXtgIGZsZXgganVzdGlmeS1jZW50ZXIgYmctYmxhY2svMzAgb3ZlcmZsb3cteC1oaWRkZW4gb3ZlcmZsb3cteS1hdXRvIGZpeGVkICBtYXgtbWQ6cHQtMjAgaC1mdWxsIHRvcC00IGxlZnQtMCByaWdodC0wIG1kOmluc2V0LTAgei01MCAgaXRlbXMtY2VudGVyYH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiByZWxhdGl2ZSB3LWZ1bGwgbWF4LXctM3hsIHB4LTQgaC1mdWxsIG1kOmgtYXV0byB6LTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gTW9kYWwgY29udGVudCAtLT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J21vZGFsLW1haW4nIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgc2hhZG93IHJlbGF0aXZlIGJnLWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAtcmV2ZXJzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dpZHRoLVszMDBweF0gaC1mdWxsJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgaWQ9J21vZGFsLWltZycgYWx0PSdmbGF2b3IgaW1hZ2UnIHNyYz17aW1nfSBmaWxsIGNsYXNzTmFtZT0nYXNwZWN0LVsyLzNdIG1pbi1oLWZ1bGwgbWF4LW1kOmhpZGRlbicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wnPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAganVzdGlmeS1lbmQgcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtlID0+IGNoYW5nZVN0YXRlKCl9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtbGcgdGV4dC1zbSBwLTEuNSBtbC1hdXRvIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBob3ZlcjpiZy1ncmF5LTgwMCBob3Zlcjp0ZXh0LXdoaXRlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNSBoLTVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTQuMjkzIDQuMjkzYTEgMSAwIDAxMS40MTQgMEwxMCA4LjU4Nmw0LjI5My00LjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0TDExLjQxNCAxMGw0LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNCAxLjQxNEwxMCAxMS40MTRsLTQuMjkzIDQuMjkzYTEgMSAwIDAxLTEuNDE0LTEuNDE0TDguNTg2IDEwIDQuMjkzIDUuNzA3YTEgMSAwIDAxMC0xLjQxNHpcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIj48L3BhdGg+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BhY2UteS02IHB4LTYgbGc6cHgtOCBwYi00IHNtOnBiLTYgeGw6cGItOCBtYXgtdy1bNTAwcHhdIG92ZXJmbG93LWhpZGRlbic+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtYm9sZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWF4LW1kOnBiLTUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbCJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwiTW9kYWwiLCJjaGFuZ2VTdGF0ZSIsImltZyIsInRpdGxlIiwidGV4dCIsImhhbmRsZUJHQ2xpY2siLCJlIiwidGFyZ2V0IiwiaWQiLCJkaXYiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiYWx0Iiwic3JjIiwiZmlsbCIsImJ1dHRvbiIsInR5cGUiLCJzdmciLCJ2aWV3Qm94IiwieG1sbnMiLCJwYXRoIiwiZmlsbFJ1bGUiLCJkIiwiY2xpcFJ1bGUiLCJoMiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Modal/Modal.tsx\n"));

/***/ })

});