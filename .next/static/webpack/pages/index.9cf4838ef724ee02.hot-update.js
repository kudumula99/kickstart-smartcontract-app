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

/***/ "./src/ethereum/web3.js":
/*!******************************!*\
  !*** ./src/ethereum/web3.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/dist/web3.min.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n\n//const HDWalletProvider = require('@truffle/hdwallet-provider');\nvar web3;\nif ( true && typeof window.ethereum !== \"undefined\") {\n    //we are in the browser & user installed metamask\n    window.ethereum.request({\n        method: \"eth_requestAccounts\"\n    });\n    web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(window.ethereum); //we are taking a copy of metamask provider and creating a new instance\n} else {\n    //we are in the server OR user is not running the metamask\n    //we will access the Rinkeby n/w through infura API\n    var provider = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)(\"https://goerli.infura.io/v3/9f914c9d922646c3aee3d5c34acff7bc\");\n    web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider); //taking a copy of infura provider and creating local instance\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (web3);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZXRoZXJldW0vd2ViMy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBd0I7QUFDeEIsaUVBQWlFO0FBRWpFLElBQUlDLElBQUk7QUFFUixJQUFHLEtBQTZCLElBQUksT0FBT0MsTUFBTSxDQUFDQyxRQUFRLEtBQUssV0FBVyxFQUFDO0lBQ3ZFLGlEQUFpRDtJQUNqREQsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQztRQUFFQyxNQUFNLEVBQUUscUJBQXFCO0tBQUUsQ0FBQyxDQUFDO0lBQzNESixJQUFJLEdBQUcsSUFBSUQsNkNBQUksQ0FBQ0UsTUFBTSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHVFQUF1RTtBQUM3RyxPQUNJO0lBQ0EsMERBQTBEO0lBQzFELG1EQUFtRDtJQUNuRCxJQUFNRyxRQUFRLEdBQUcsSUFBSU4sb0VBQTJCLENBQUNTLDhEQUFrQyxDQUFDO0lBRXBGUixJQUFJLEdBQUcsSUFBSUQsNkNBQUksQ0FBQ00sUUFBUSxDQUFDLENBQUMsK0RBQThEO0FBQzVGLENBQUM7QUFFRCwrREFBZUwsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ldGhlcmV1bS93ZWIzLmpzPzFmNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcclxuLy9jb25zdCBIRFdhbGxldFByb3ZpZGVyID0gcmVxdWlyZSgnQHRydWZmbGUvaGR3YWxsZXQtcHJvdmlkZXInKTtcclxuXHJcbmxldCB3ZWIzO1xyXG5cclxuaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgLy93ZSBhcmUgaW4gdGhlIGJyb3dzZXIgJiB1c2VyIGluc3RhbGxlZCBtZXRhbWFza1xyXG4gICAgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pO1xyXG4gICAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7IC8vd2UgYXJlIHRha2luZyBhIGNvcHkgb2YgbWV0YW1hc2sgcHJvdmlkZXIgYW5kIGNyZWF0aW5nIGEgbmV3IGluc3RhbmNlXHJcbn1cclxuZWxzZXtcclxuICAgIC8vd2UgYXJlIGluIHRoZSBzZXJ2ZXIgT1IgdXNlciBpcyBub3QgcnVubmluZyB0aGUgbWV0YW1hc2tcclxuICAgIC8vd2Ugd2lsbCBhY2Nlc3MgdGhlIFJpbmtlYnkgbi93IHRocm91Z2ggaW5mdXJhIEFQSVxyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lORlVSQV9BUEkpO1xyXG5cclxuICAgIHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcik7Ly90YWtpbmcgYSBjb3B5IG9mIGluZnVyYSBwcm92aWRlciBhbmQgY3JlYXRpbmcgbG9jYWwgaW5zdGFuY2VcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2ViMztcclxuIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfSU5GVVJBX0FQSSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ethereum/web3.js\n"));

/***/ })

});