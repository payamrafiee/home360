webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! https */ "./node_modules/https-browserify/index.js");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_13__);









var _jsxFileName = "/Users/payamrafiee/Desktop/Home360/web2/pages/about.js";






var About =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(About, _Component);

  function About() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, About);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(About)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      payamImg: null
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(About, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var payamImg;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("https://media.licdn.com/dms/image/C5603AQGfktbmMtp0JQ/profile-displayphoto-shrink_800_800/0?e=1556150400&v=beta&t=aD4wJgqh63y6EMlL46FX3SSChZCaCiIngy63PjGnhLk");

              case 2:
                payamImg = _context.sent;
                this.setState({
                  payamImg: payamImg
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        id: "gallery ",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1534057037" + " " + "content pt-5 bg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "container",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "row",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "card-deck bg",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "card border-info",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "https://media.licdn.com/dms/image/C5603AQGfktbmMtp0JQ/profile-displayphoto-shrink_800_800/0?e=1556150400&v=beta&t=aD4wJgqh63y6EMlL46FX3SSChZCaCiIngy63PjGnhLk",
        class: "card-img-top",
        alt: "...",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "card-body",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h5", {
        class: "card-title",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Payam Rafiee"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        class: "card-text text-secondary",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "The co-founder and CEO of Home360. BSc in Mathematics from Shiraz University. Full-Stack Developer and Data Scientist.")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "card-footer",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "https://www.linkedin.com/in/payamrafiee/",
        class: "btn btn-outline-primary btn-sm mr-3",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        class: "fab fa-linkedin-in",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "https://twitter.com/payamrafiee92",
        class: "btn btn-outline-info btn-sm",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        class: "fab fa-twitter",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "card border-info",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "https://media.licdn.com/dms/image/C5603AQGD5afI3fl4FQ/profile-displayphoto-shrink_800_800/0?e=1556150400&v=beta&t=8GFOrhW4vdqh7NkGkiKF64WAWa-mFEOxeGA53lqKlgY",
        class: "card-img-top",
        alt: "...",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "card-body",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h5", {
        class: "card-title",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Mohammad Nazari"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        class: "card-text text-secondary",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "The co-founder and CTO of Home360. BSc in petroleum engineering with hands on data science. His responsibility is to develop mobile application.")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "card-footer",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "https://www.linkedin.com/in/ryan-nazari-145529167/",
        class: "btn btn-outline-primary btn-sm mr-3",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        class: "fab fa-linkedin-in",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "https://twitter.com/ryannazari21",
        class: "btn btn-outline-info btn-sm",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        class: "fab fa-twitter",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "card border-info",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "https://media.licdn.com/dms/image/C5603AQHOnW0aWW22WA/profile-displayphoto-shrink_800_800/0?e=1556150400&v=beta&t=hfeoDTd85-RL4nDzp5blUUv6zWxanZjZ4DXlZCPmwC8",
        class: "card-img-top",
        alt: "...",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "card-body",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h5", {
        class: "card-title",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Maryam Rafiee"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        class: "card-text text-secondary",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "card-footer",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "https://www.linkedin.com/in/maryam-rafiee-024259138/",
        class: "btn btn-outline-primary btn-sm mr-3",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        class: "fab fa-linkedin-in",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "https://twitter.com/rafieemaryam",
        class: "btn btn-outline-info btn-sm",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        class: "fab fa-twitter",
        className: "jsx-1534057037",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }))))))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1534057037",
        __self: this
      }, ".content.jsx-1534057037{height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXlhbXJhZmllZS9EZXNrdG9wL0hvbWUzNjAvd2ViMi9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RW9CLEFBTzBCLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL3BheWFtcmFmaWVlL0Rlc2t0b3AvSG9tZTM2MC93ZWIyL3BhZ2VzL2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXG5pbXBvcnQgeyBnZXQgfSBmcm9tICdodHRwcyc7XG5cbmNsYXNzIEFib3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IHBheWFtSW1nOiBudWxsIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBwYXlhbUltZyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9tZWRpYS5saWNkbi5jb20vZG1zL2ltYWdlL0M1NjAzQVFHZmt0Ym1NdHAwSlEvcHJvZmlsZS1kaXNwbGF5cGhvdG8tc2hyaW5rXzgwMF84MDAvMD9lPTE1NTYxNTA0MDAmdj1iZXRhJnQ9YUQ0d0pncWg2M3k2RU1sTDQ2RlgzU1NDaFpDYUNpSW5neTYzUGpHbmhMa1wiKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBwYXlhbUltZyB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxzZWN0aW9uIGlkPVwiZ2FsbGVyeSBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgcHQtNSBiZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZGVjayBiZ1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYm9yZGVyLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL21lZGlhLmxpY2RuLmNvbS9kbXMvaW1hZ2UvQzU2MDNBUUdma3RibU10cDBKUS9wcm9maWxlLWRpc3BsYXlwaG90by1zaHJpbmtfODAwXzgwMC8wP2U9MTU1NjE1MDQwMCZ2PWJldGEmdD1hRDR3SmdxaDYzeTZFTWxMNDZGWDNTU0NoWkNhQ2lJbmd5NjNQakduaExrXCIgY2xhc3M9XCJjYXJkLWltZy10b3BcIiBhbHQ9XCIuLi5cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPlBheWFtIFJhZmllZTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgdGV4dC1zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBjby1mb3VuZGVyIGFuZCBDRU8gb2YgSG9tZTM2MC5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJTYyBpbiBNYXRoZW1hdGljcyBmcm9tIFNoaXJheiBVbml2ZXJzaXR5LlxuICAgICAgICAgICAgICAgICAgICAgICAgRnVsbC1TdGFjayBEZXZlbG9wZXIgYW5kIERhdGEgU2NpZW50aXN0LlxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcGF5YW1yYWZpZWUvXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBidG4tc20gbXItM1wiPjxpIGNsYXNzPVwiZmFiIGZhLWxpbmtlZGluLWluXCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9wYXlhbXJhZmllZTkyXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtaW5mbyBidG4tc21cIj48aSBjbGFzcz1cImZhYiBmYS10d2l0dGVyXCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGJvcmRlci1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9tZWRpYS5saWNkbi5jb20vZG1zL2ltYWdlL0M1NjAzQVFHRDVhZkkzZmw0RlEvcHJvZmlsZS1kaXNwbGF5cGhvdG8tc2hyaW5rXzgwMF84MDAvMD9lPTE1NTYxNTA0MDAmdj1iZXRhJnQ9OEdGT3JoVzR2ZHFoN05rR2tpS0Y2NFdBV2EtbUZFT3hlR0E1M2xxS2xnWVwiIGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgYWx0PVwiLi4uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj5Nb2hhbW1hZCBOYXphcmk8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IHRleHQtc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGUgY28tZm91bmRlciBhbmQgQ1RPIG9mIEhvbWUzNjAuXG4gICAgICAgICAgICAgICAgICAgICAgICBCU2MgaW4gcGV0cm9sZXVtIGVuZ2luZWVyaW5nIHdpdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRzIG9uIGRhdGEgc2NpZW5jZS4gSGlzIHJlc3BvbnNpYmlsaXR5IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICB0byBkZXZlbG9wIG1vYmlsZSBhcHBsaWNhdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3J5YW4tbmF6YXJpLTE0NTUyOTE2Ny9cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGJ0bi1zbSBtci0zXCI+PGkgY2xhc3M9XCJmYWIgZmEtbGlua2VkaW4taW5cIj48L2k+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3J5YW5uYXphcmkyMVwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWluZm8gYnRuLXNtXCI+PGkgY2xhc3M9XCJmYWIgZmEtdHdpdHRlclwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBib3JkZXItaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vbWVkaWEubGljZG4uY29tL2Rtcy9pbWFnZS9DNTYwM0FRSE9uVzBhV1cyMldBL3Byb2ZpbGUtZGlzcGxheXBob3RvLXNocmlua184MDBfODAwLzA/ZT0xNTU2MTUwNDAwJnY9YmV0YSZ0PWhmZW9EVGQ4NS1STDRuRHpwNWJsVVV2NnpXeGFuWmpaNERYbFpDUG13QzhcIiBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIGFsdD1cIi4uLlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+TWFyeWFtIFJhZmllZTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgdGV4dC1zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgYSB3aWRlciBjYXJkIHdpdGggc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGEgbmF0dXJhbCBsZWFkLWluIHRvIGFkZGl0aW9uYWwgY29udGVudC4gVGhpcyBjb250ZW50IGlzIGEgbGl0dGxlIGJpdCBsb25nZXIuXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9tYXJ5YW0tcmFmaWVlLTAyNDI1OTEzOC9cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGJ0bi1zbSBtci0zXCI+PGkgY2xhc3M9XCJmYWIgZmEtbGlua2VkaW4taW5cIj48L2k+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3JhZmllZW1hcnlhbVwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWluZm8gYnRuLXNtXCI+PGkgY2xhc3M9XCJmYWIgZmEtdHdpdHRlclwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmJnIHtcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xuIl19 */\n/*@ sourceURL=/Users/payamrafiee/Desktop/Home360/web2/pages/about.js */"));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=about.js.447ce9dd9a517c20e5c9.hot-update.js.map