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

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFwZXIxLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz83MTI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX19iQ09oWVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fX25MamlRXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfX19fVDdLXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX19UMDloRFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fNDFPd2tcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX19HeFE4NVwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfX19McEwxXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./hooks/useEns.tsx":
/*!**************************!*\
  !*** ./hooks/useEns.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst useEns = (_addr)=>{\n    const { address  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__.useAccount)();\n    const { 0: _address , 1: setFinalAddr  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const provider = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__.useProvider)();\n    const { 0: ensData , 1: setEnsData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { data , isError , isLoading  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__.useEnsName)({\n        address: _address\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setFinalAddr(_addr || address || \"\");\n    }, [\n        _addr,\n        address\n    ]);\n    async function getAndSetEnsData(_ensName) {\n        console.log(\"getAndSetEnsData\", _ensName);\n        const resolver = await provider.getResolver(_ensName);\n        if (!resolver) {\n            console.log(\"ens name not found\");\n            return;\n        }\n        const email = await resolver.getText(\"email\");\n        const twitter = await resolver.getText(\"com.twitter\");\n        const github = await resolver.getText(\"com.github\");\n        const avatarUrl = await resolver.getText(\"avatar\");\n        const websiteUrl = await resolver.getText(\"url\");\n        setEnsData({\n            ensName: _ensName,\n            email,\n            twitter,\n            github,\n            avatarUrl,\n            websiteUrl,\n            address\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data) {\n            getAndSetEnsData(data || \"\");\n        }\n    }, [\n        _address\n    ]);\n    return {\n        ensData\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEns);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VFbnMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdFO0FBQzVCO0FBVTVDLE1BQU1LLE1BQU0sR0FBRyxDQUFDQyxLQUFjLEdBQUs7SUFDakMsTUFBTSxFQUFFQyxPQUFPLEdBQUUsR0FBR0wsaURBQVUsRUFBRTtJQUNoQyxNQUFNLEtBQUNNLFFBQVEsTUFBRUMsWUFBWSxNQUFJTCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUM3QyxNQUFNTSxRQUFRLEdBQUdWLGtEQUFXLEVBQUU7SUFDOUIsTUFBTSxLQUFDVyxPQUFPLE1BQUVDLFVBQVUsTUFBSVIsK0NBQVEsQ0FBVyxFQUFFLENBQUM7SUFDcEQsTUFBTSxFQUFFUyxJQUFJLEdBQUVDLE9BQU8sR0FBRUMsU0FBUyxHQUFFLEdBQUdkLGlEQUFVLENBQUM7UUFDOUNNLE9BQU8sRUFBRUMsUUFBUTtLQUNsQixDQUFDO0lBQ0ZMLGdEQUFTLENBQUMsSUFBTTtRQUNkTSxZQUFZLENBQUNILEtBQUssSUFBSUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsRUFBRTtRQUFDRCxLQUFLO1FBQUVDLE9BQU87S0FBQyxDQUFDLENBQUM7SUFFckIsZUFBZVMsZ0JBQWdCLENBQUNDLFFBQWdCLEVBQUU7UUFDaERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixFQUFFRixRQUFRLENBQUMsQ0FBQztRQUUxQyxNQUFNRyxRQUFRLEdBQUcsTUFBTVYsUUFBUSxDQUFDVyxXQUFXLENBQUNKLFFBQVEsQ0FBQztRQUNyRCxJQUFJLENBQUNHLFFBQVEsRUFBRTtZQUNiRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2xDLE9BQU87UUFDVCxDQUFDO1FBQ0QsTUFBTUcsS0FBSyxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUM3QyxNQUFNQyxPQUFPLEdBQUcsTUFBTUosUUFBUSxDQUFDRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQ3JELE1BQU1FLE1BQU0sR0FBRyxNQUFNTCxRQUFRLENBQUNHLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDbkQsTUFBTUcsU0FBUyxHQUFHLE1BQU1OLFFBQVEsQ0FBQ0csT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNsRCxNQUFNSSxVQUFVLEdBQUcsTUFBTVAsUUFBUSxDQUFDRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBRWhEWCxVQUFVLENBQUM7WUFDVGdCLE9BQU8sRUFBRVgsUUFBUTtZQUNqQkssS0FBSztZQUNMRSxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsU0FBUztZQUNUQyxVQUFVO1lBQ1ZwQixPQUFPO1NBQ1IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVESixnREFBUyxDQUFDLElBQU07UUFDZCxJQUFJVSxJQUFJLEVBQUU7WUFDUkcsZ0JBQWdCLENBQUNILElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQyxFQUFFO1FBQUNMLFFBQVE7S0FBQyxDQUFDLENBQUM7SUFFZixPQUFPO1FBQUVHLE9BQU87S0FBRSxDQUFDO0FBQ3JCLENBQUM7QUFFRCxpRUFBZU4sTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFwZXIxLy4vaG9va3MvdXNlRW5zLnRzeD9hZGI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVByb3ZpZGVyLCB1c2VFbnNOYW1lLCB1c2VBY2NvdW50LCB1c2VCYWxhbmNlIH0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbnRlcmZhY2UgSWVuc0RhdGEge1xuICBhZGRyZXNzPzogc3RyaW5nLFxuICBlbnNOYW1lPzogc3RyaW5nLFxuICBlbWFpbD86IHN0cmluZyxcbiAgdHdpdHRlcj86IHN0cmluZyxcbiAgZ2l0aHViPzogc3RyaW5nLFxuICBhdmF0YXJVcmw/OiBzdHJpbmcsXG4gIHdlYnNpdGVVcmw/OiBzdHJpbmdcbn1cbmNvbnN0IHVzZUVucyA9IChfYWRkcj86IHN0cmluZykgPT4ge1xuICBjb25zdCB7IGFkZHJlc3MgfSA9IHVzZUFjY291bnQoKTtcbiAgY29uc3QgW19hZGRyZXNzLCBzZXRGaW5hbEFkZHJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHByb3ZpZGVyID0gdXNlUHJvdmlkZXIoKTtcbiAgY29uc3QgW2Vuc0RhdGEsIHNldEVuc0RhdGFdID0gdXNlU3RhdGU8SWVuc0RhdGE+KHt9KTtcbiAgY29uc3QgeyBkYXRhLCBpc0Vycm9yLCBpc0xvYWRpbmcgfSA9IHVzZUVuc05hbWUoe1xuICAgIGFkZHJlc3M6IF9hZGRyZXNzLFxuICB9KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRGaW5hbEFkZHIoX2FkZHIgfHwgYWRkcmVzcyB8fCBcIlwiKTtcbiAgfSwgW19hZGRyLCBhZGRyZXNzXSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0QW5kU2V0RW5zRGF0YShfZW5zTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coXCJnZXRBbmRTZXRFbnNEYXRhXCIsIF9lbnNOYW1lKTtcblxuICAgIGNvbnN0IHJlc29sdmVyID0gYXdhaXQgcHJvdmlkZXIuZ2V0UmVzb2x2ZXIoX2Vuc05hbWUpO1xuICAgIGlmICghcmVzb2x2ZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZW5zIG5hbWUgbm90IGZvdW5kXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBlbWFpbCA9IGF3YWl0IHJlc29sdmVyLmdldFRleHQoXCJlbWFpbFwiKTtcbiAgICBjb25zdCB0d2l0dGVyID0gYXdhaXQgcmVzb2x2ZXIuZ2V0VGV4dChcImNvbS50d2l0dGVyXCIpO1xuICAgIGNvbnN0IGdpdGh1YiA9IGF3YWl0IHJlc29sdmVyLmdldFRleHQoXCJjb20uZ2l0aHViXCIpO1xuICAgIGNvbnN0IGF2YXRhclVybCA9IGF3YWl0IHJlc29sdmVyLmdldFRleHQoXCJhdmF0YXJcIik7XG4gICAgY29uc3Qgd2Vic2l0ZVVybCA9IGF3YWl0IHJlc29sdmVyLmdldFRleHQoXCJ1cmxcIik7XG5cbiAgICBzZXRFbnNEYXRhKHtcbiAgICAgIGVuc05hbWU6IF9lbnNOYW1lLFxuICAgICAgZW1haWwsXG4gICAgICB0d2l0dGVyLFxuICAgICAgZ2l0aHViLFxuICAgICAgYXZhdGFyVXJsLFxuICAgICAgd2Vic2l0ZVVybCxcbiAgICAgIGFkZHJlc3MsXG4gICAgfSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBnZXRBbmRTZXRFbnNEYXRhKGRhdGEgfHwgXCJcIik7XG4gICAgfVxuICB9LCBbX2FkZHJlc3NdKTtcblxuICByZXR1cm4geyBlbnNEYXRhIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VFbnM7XG4iXSwibmFtZXMiOlsidXNlUHJvdmlkZXIiLCJ1c2VFbnNOYW1lIiwidXNlQWNjb3VudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRW5zIiwiX2FkZHIiLCJhZGRyZXNzIiwiX2FkZHJlc3MiLCJzZXRGaW5hbEFkZHIiLCJwcm92aWRlciIsImVuc0RhdGEiLCJzZXRFbnNEYXRhIiwiZGF0YSIsImlzRXJyb3IiLCJpc0xvYWRpbmciLCJnZXRBbmRTZXRFbnNEYXRhIiwiX2Vuc05hbWUiLCJjb25zb2xlIiwibG9nIiwicmVzb2x2ZXIiLCJnZXRSZXNvbHZlciIsImVtYWlsIiwiZ2V0VGV4dCIsInR3aXR0ZXIiLCJnaXRodWIiLCJhdmF0YXJVcmwiLCJ3ZWJzaXRlVXJsIiwiZW5zTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useEns.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_useEns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useEns */ \"./hooks/useEns.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst Home = ()=>{\n    const { ensData  } = (0,_hooks_useEns__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"RainbowKit App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wangyongsheng/Desktop/【The Z Institute】/Web3開發實戰/Online-Course-Web3-Development-Practice-HW/Week6-0/paper2/pages/index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by @rainbow-me/create-rainbowkit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wangyongsheng/Desktop/【The Z Institute】/Web3開發實戰/Online-Course-Web3-Development-Practice-HW/Week6-0/paper2/pages/index.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wangyongsheng/Desktop/【The Z Institute】/Web3開發實戰/Online-Course-Web3-Development-Practice-HW/Week6-0/paper2/pages/index.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wangyongsheng/Desktop/【The Z Institute】/Web3開發實戰/Online-Course-Web3-Development-Practice-HW/Week6-0/paper2/pages/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__.ConnectButton, {}, void 0, false, {\n                        fileName: \"/Users/wangyongsheng/Desktop/【The Z Institute】/Web3開發實戰/Online-Course-Web3-Development-Practice-HW/Week6-0/paper2/pages/index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                        children: [\n                            \"Address:\",\n                            ensData.address\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/wangyongsheng/Desktop/【The Z Institute】/Web3開發實戰/Online-Course-Web3-Development-Practice-HW/Week6-0/paper2/pages/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                        children: [\n                            \"ENSName:\",\n                            ensData.ensName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/wangyongsheng/Desktop/【The Z Institute】/Web3開發實戰/Online-Course-Web3-Development-Practice-HW/Week6-0/paper2/pages/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wangyongsheng/Desktop/【The Z Institute】/Web3開發實戰/Online-Course-Web3-Development-Practice-HW/Week6-0/paper2/pages/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://rainbow.me\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: \"Made with ❤️ by your frens at \\uD83C\\uDF08\"\n                }, void 0, false, {\n                    fileName: \"/Users/wangyongsheng/Desktop/【The Z Institute】/Web3開發實戰/Online-Course-Web3-Development-Practice-HW/Week6-0/paper2/pages/index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/wangyongsheng/Desktop/【The Z Institute】/Web3開發實戰/Online-Course-Web3-Development-Practice-HW/Week6-0/paper2/pages/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wangyongsheng/Desktop/【The Z Institute】/Web3開發實戰/Online-Course-Web3-Development-Practice-HW/Week6-0/paper2/pages/index.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUQ7QUFFMUI7QUFDa0I7QUFDTjtBQUd6QyxNQUFNSSxJQUFJLEdBQWEsSUFBTTtJQUMzQixNQUFNLEVBQUVDLE9BQU8sR0FBRSxHQUFHRix5REFBVSxDQUFDRyxTQUFTLENBQUM7SUFDekMscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFTiwwRUFBZ0I7OzBCQUM5Qiw4REFBQ0Qsa0RBQUk7O2tDQUNILDhEQUFDUyxPQUFLO2tDQUFDLGdCQUFjOzs7OztpQ0FBUTtrQ0FDN0IsOERBQUNDLE1BQUk7d0JBQ0hDLElBQUksRUFBQyxhQUFhO3dCQUNsQkMsT0FBTyxFQUFDLDRDQUE0Qzs7Ozs7aUNBQ3BEO2tDQUNGLDhEQUFDQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7O2lDQUFHOzs7Ozs7eUJBQ2xDOzBCQUVQLDhEQUFDQyxNQUFJO2dCQUFDVCxTQUFTLEVBQUVOLHFFQUFXOztrQ0FDMUIsOERBQUNGLGlFQUFhOzs7O2lDQUFHO2tDQUNqQiw4REFBQ2tCLElBQUU7OzRCQUFDLFVBQVE7NEJBQUNiLE9BQU8sQ0FBQ2MsT0FBTzs7Ozs7O2lDQUFNO2tDQUNsQyw4REFBQ0QsSUFBRTs7NEJBQUMsVUFBUTs0QkFBQ2IsT0FBTyxDQUFDZSxPQUFPOzs7Ozs7aUNBQU07Ozs7Ozt5QkFDN0I7MEJBRVAsOERBQUNDLFFBQU07Z0JBQUNiLFNBQVMsRUFBRU4sdUVBQWE7MEJBQzlCLDRFQUFDb0IsR0FBQztvQkFBQ04sSUFBSSxFQUFDLG9CQUFvQjtvQkFBQ08sTUFBTSxFQUFDLFFBQVE7b0JBQUNSLEdBQUcsRUFBQyxxQkFBcUI7OEJBQUMsNENBRXZFOzs7Ozs2QkFBSTs7Ozs7eUJBQ0c7Ozs7OztpQkFDTCxDQUNOO0FBQ0osQ0FBQztBQUVELGlFQUFlWCxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXBlcjEvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25uZWN0QnV0dG9uIH0gZnJvbSAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdCc7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCB1c2VFbnNEYXRhIGZyb20gXCIuLi9ob29rcy91c2VFbnNcIjtcblxuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBlbnNEYXRhIH0gPSB1c2VFbnNEYXRhKHVuZGVmaW5lZCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5SYWluYm93S2l0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IEByYWluYm93LW1lL2NyZWF0ZS1yYWluYm93a2l0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPENvbm5lY3RCdXR0b24gLz5cbiAgICAgICAgPGg2PkFkZHJlc3M6e2Vuc0RhdGEuYWRkcmVzc308L2g2PlxuICAgICAgICA8aDY+RU5TTmFtZTp7ZW5zRGF0YS5lbnNOYW1lfTwvaDY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcmFpbmJvdy5tZVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICBNYWRlIHdpdGgg4p2k77iPIGJ5IHlvdXIgZnJlbnMgYXQg8J+MiFxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiQ29ubmVjdEJ1dHRvbiIsIkhlYWQiLCJzdHlsZXMiLCJ1c2VFbnNEYXRhIiwiSG9tZSIsImVuc0RhdGEiLCJ1bmRlZmluZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImg2IiwiYWRkcmVzcyIsImVuc05hbWUiLCJmb290ZXIiLCJhIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();