webpackJsonp([2],{

/***/ "0lQk":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "FGxo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__normallize_css__ = __webpack_require__("KKkp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__normallize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__normallize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_css__ = __webpack_require__("gB0Q");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_static_bootstrap_css_bootstrap_grid_css__ = __webpack_require__("z0rh");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_static_bootstrap_css_bootstrap_grid_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_src_static_bootstrap_css_bootstrap_grid_css__);




/***/ }),

/***/ "KKkp":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "VLVZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__("BO1k");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_css_app__ = __webpack_require__("FGxo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viphire_css__ = __webpack_require__("0lQk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viphire_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__viphire_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue__ = __webpack_require__("7+uW");

//css





var vm = new __WEBPACK_IMPORTED_MODULE_3_vue__["a" /* default */]({
  el: '#viphire',
  data: {
    list: []
  },
  mounted: function mounted() {
    var urls = ['./static/json/level1/level1_0.json', './static/json/level1/level1_1.json', './static/json/level1/level1_2.json', './static/json/level1/level1_3.json'];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(urls), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var url = _step.value;

        $.ajax({
          url: url,
          dataType: 'json',
          type: 'get',
          success: function success(data) {
            vm.list.push(data);
          }
        });
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  },
  methods: {
    showDetails: function showDetails(id) {
      window.location.href = 'details.html?id=' + id;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N")))

/***/ }),

/***/ "gB0Q":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "z0rh":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["VLVZ"]);