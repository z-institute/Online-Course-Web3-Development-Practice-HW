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

/***/ "./hooks/useEns.tsx":
/*!**************************!*\
  !*** ./hooks/useEns.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar _s = $RefreshSig$();\n\n\nvar useEns = function(_addr) {\n    _s();\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useAccount)().address;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"), _address = ref[0], setFinalAddr = ref[1];\n    var provider = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useProvider)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}), ensData = ref1[0], setEnsData = ref1[1];\n    var ref2 = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useEnsName)({\n        address: _address\n    }), data = ref2.data, isError = ref2.isError, isLoading = ref2.isLoading;\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        setFinalAddr(_addr || address || \"\");\n    }, [\n        _addr,\n        address\n    ]);\n    function getAndSetEnsData(_ensName) {\n        return _getAndSetEnsData.apply(this, arguments);\n    }\n    function _getAndSetEnsData() {\n        _getAndSetEnsData = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function(_ensName) {\n            var resolver, email, twitter, github, avatarUrl, websiteUrl;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        console.log(\"getAndSetEnsData\", _ensName);\n                        return [\n                            4,\n                            provider.getResolver(_ensName)\n                        ];\n                    case 1:\n                        resolver = _state.sent();\n                        if (!resolver) {\n                            console.log(\"ens name not found\");\n                            return [\n                                2\n                            ];\n                        }\n                        return [\n                            4,\n                            resolver.getText(\"email\")\n                        ];\n                    case 2:\n                        email = _state.sent();\n                        return [\n                            4,\n                            resolver.getText(\"com.twitter\")\n                        ];\n                    case 3:\n                        twitter = _state.sent();\n                        return [\n                            4,\n                            resolver.getText(\"com.github\")\n                        ];\n                    case 4:\n                        github = _state.sent();\n                        return [\n                            4,\n                            resolver.getText(\"avatar\")\n                        ];\n                    case 5:\n                        avatarUrl = _state.sent();\n                        return [\n                            4,\n                            resolver.getText(\"url\")\n                        ];\n                    case 6:\n                        websiteUrl = _state.sent();\n                        setEnsData({\n                            ensName: _ensName,\n                            email: email,\n                            twitter: twitter,\n                            github: github,\n                            avatarUrl: avatarUrl,\n                            websiteUrl: websiteUrl,\n                            address: address\n                        });\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _getAndSetEnsData.apply(this, arguments);\n    }\n    // console.log(_address);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        if (data) {\n            getAndSetEnsData(data || \"\");\n        //console.log(ensData);\n        }\n    }, [\n        _address\n    ]);\n    return {\n        ensData: ensData\n    };\n};\n_s(useEns, \"8U7GOARm6HVQPqSMyME/GJn8OZI=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_1__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_1__.useProvider,\n        wagmi__WEBPACK_IMPORTED_MODULE_1__.useEnsName\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useEns);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLHVCQUF1QjtRQUN6QixDQUFDO0lBQ0gsQ0FBQyxFQUFFO1FBQUNMLFFBQVE7S0FBQyxDQUFDLENBQUM7SUFFZixPQUFPO1FBQUVHLE9BQU8sRUFBUEEsT0FBTztLQUFFLENBQUM7QUFDckIsQ0FBQztHQTlDS04sTUFBTTs7UUFDVUgsNkNBQVU7UUFFYkYsOENBQVc7UUFFU0MsNkNBQVU7OztBQTJDakQsK0RBQWVJLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy91c2VFbnMudHN4P2FkYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUHJvdmlkZXIsIHVzZUVuc05hbWUsIHVzZUFjY291bnQsIHVzZUJhbGFuY2UgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmludGVyZmFjZSBJZW5zRGF0YSB7XG4gIGFkZHJlc3M/OiBzdHJpbmcsXG4gIGVuc05hbWU/OiBzdHJpbmcsXG4gIGVtYWlsPzogc3RyaW5nLFxuICB0d2l0dGVyPzogc3RyaW5nLFxuICBnaXRodWI/OiBzdHJpbmcsXG4gIGF2YXRhclVybD86IHN0cmluZyxcbiAgd2Vic2l0ZVVybD86IHN0cmluZ1xufVxuY29uc3QgdXNlRW5zID0gKF9hZGRyPzogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHsgYWRkcmVzcyB9ID0gdXNlQWNjb3VudCgpO1xuICBjb25zdCBbX2FkZHJlc3MsIHNldEZpbmFsQWRkcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgcHJvdmlkZXIgPSB1c2VQcm92aWRlcigpO1xuICBjb25zdCBbZW5zRGF0YSwgc2V0RW5zRGF0YV0gPSB1c2VTdGF0ZTxJZW5zRGF0YT4oe30pO1xuICBjb25zdCB7IGRhdGEsIGlzRXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlRW5zTmFtZSh7XG4gICAgYWRkcmVzczogX2FkZHJlc3MsXG4gIH0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZpbmFsQWRkcihfYWRkciB8fCBhZGRyZXNzIHx8IFwiXCIpO1xuICB9LCBbX2FkZHIsIGFkZHJlc3NdKTtcblxuICBhc3luYyBmdW5jdGlvbiBnZXRBbmRTZXRFbnNEYXRhKF9lbnNOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyhcImdldEFuZFNldEVuc0RhdGFcIiwgX2Vuc05hbWUpO1xuXG4gICAgY29uc3QgcmVzb2x2ZXIgPSBhd2FpdCBwcm92aWRlci5nZXRSZXNvbHZlcihfZW5zTmFtZSk7XG4gICAgaWYgKCFyZXNvbHZlcikge1xuICAgICAgY29uc29sZS5sb2coXCJlbnMgbmFtZSBub3QgZm91bmRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGVtYWlsID0gYXdhaXQgcmVzb2x2ZXIuZ2V0VGV4dChcImVtYWlsXCIpO1xuICAgIGNvbnN0IHR3aXR0ZXIgPSBhd2FpdCByZXNvbHZlci5nZXRUZXh0KFwiY29tLnR3aXR0ZXJcIik7XG4gICAgY29uc3QgZ2l0aHViID0gYXdhaXQgcmVzb2x2ZXIuZ2V0VGV4dChcImNvbS5naXRodWJcIik7XG4gICAgY29uc3QgYXZhdGFyVXJsID0gYXdhaXQgcmVzb2x2ZXIuZ2V0VGV4dChcImF2YXRhclwiKTtcbiAgICBjb25zdCB3ZWJzaXRlVXJsID0gYXdhaXQgcmVzb2x2ZXIuZ2V0VGV4dChcInVybFwiKTtcblxuICAgIHNldEVuc0RhdGEoe1xuICAgICAgZW5zTmFtZTogX2Vuc05hbWUsXG4gICAgICBlbWFpbCxcbiAgICAgIHR3aXR0ZXIsXG4gICAgICBnaXRodWIsXG4gICAgICBhdmF0YXJVcmwsXG4gICAgICB3ZWJzaXRlVXJsLFxuICAgICAgYWRkcmVzcyxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGNvbnNvbGUubG9nKF9hZGRyZXNzKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgZ2V0QW5kU2V0RW5zRGF0YShkYXRhIHx8IFwiXCIpO1xuICAgICAgLy9jb25zb2xlLmxvZyhlbnNEYXRhKTtcbiAgICB9XG4gIH0sIFtfYWRkcmVzc10pO1xuXG4gIHJldHVybiB7IGVuc0RhdGEgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUVucztcbiJdLCJuYW1lcyI6WyJ1c2VQcm92aWRlciIsInVzZUVuc05hbWUiLCJ1c2VBY2NvdW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VFbnMiLCJfYWRkciIsImFkZHJlc3MiLCJfYWRkcmVzcyIsInNldEZpbmFsQWRkciIsInByb3ZpZGVyIiwiZW5zRGF0YSIsInNldEVuc0RhdGEiLCJkYXRhIiwiaXNFcnJvciIsImlzTG9hZGluZyIsImdldEFuZFNldEVuc0RhdGEiLCJfZW5zTmFtZSIsInJlc29sdmVyIiwiZW1haWwiLCJ0d2l0dGVyIiwiZ2l0aHViIiwiYXZhdGFyVXJsIiwid2Vic2l0ZVVybCIsImNvbnNvbGUiLCJsb2ciLCJnZXRSZXNvbHZlciIsImdldFRleHQiLCJlbnNOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useEns.tsx\n"));

/***/ })

});