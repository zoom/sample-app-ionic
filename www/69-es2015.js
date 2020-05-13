(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-text.entry.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-text.entry.js ***!
  \*************************************************************/
/*! exports provided: ion_text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_text", function() { return Text; });
/* harmony import */ var _index_26ec602c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-26ec602c.js */ "./node_modules/@ionic/core/dist/esm/index-26ec602c.js");
/* harmony import */ var _ionic_global_1bf1fa84_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-1bf1fa84.js */ "./node_modules/@ionic/core/dist/esm/ionic-global-1bf1fa84.js");
/* harmony import */ var _theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-c2dc54d9.js */ "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js");




const textCss = ":host(.ion-color){color:var(--ion-color-base)}";

const Text = class {
    constructor(hostRef) {
        Object(_index_26ec602c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        const mode = Object(_ionic_global_1bf1fa84_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
        return (Object(_index_26ec602c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_26ec602c_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object.assign(Object.assign({}, Object(_theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color)), { [mode]: true }) }, Object(_index_26ec602c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    }
};
Text.style = textCss;




/***/ })

}]);
//# sourceMappingURL=69-es2015.js.map