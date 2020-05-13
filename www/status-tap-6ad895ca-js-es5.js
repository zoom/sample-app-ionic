(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-tap-6ad895ca-js"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/status-tap-6ad895ca.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/status-tap-6ad895ca.js ***!
    \******************************************************************/

  /*! exports provided: startStatusTap */

  /***/
  function node_modulesIonicCoreDistEsmStatusTap6ad895caJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "startStatusTap", function () {
      return startStatusTap;
    });
    /* harmony import */


    var _index_26ec602c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-26ec602c.js */
    "./node_modules/@ionic/core/dist/esm/index-26ec602c.js");

    var startStatusTap = function startStatusTap() {
      var win = window;
      win.addEventListener('statusTap', function () {
        Object(_index_26ec602c_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function () {
          var width = win.innerWidth;
          var height = win.innerHeight;
          var el = document.elementFromPoint(width / 2, height / 2);

          if (!el) {
            return;
          }

          var contentEl = el.closest('ion-content');

          if (contentEl) {
            contentEl.componentOnReady().then(function () {
              Object(_index_26ec602c_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
                return contentEl.scrollToTop(300);
              });
            });
          }
        });
      });
    };
    /***/

  }
}]);
//# sourceMappingURL=status-tap-6ad895ca-js-es5.js.map