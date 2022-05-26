"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatedesktop"]("main_window",{

/***/ "./src/components/DockerContainer/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/DockerContainer/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/drei */ \"../../node_modules/.pnpm/@react-three+drei@9.0.1_tynbetzobu5535th6wxw2e6u74/node_modules/@react-three/drei/core/Text.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/fiber */ \"../../node_modules/.pnpm/@react-three+fiber@8.0.11_l5xcbjfy74ndxsg7mnqlwl5f6y/node_modules/@react-three/fiber/dist/index-3c7aae97.esm.js\");\n/* harmony import */ var three_src_loaders_TextureLoader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/src/loaders/TextureLoader.js */ \"../../node_modules/.pnpm/three@0.139.1/node_modules/three/src/loaders/TextureLoader.js\");\n/* harmony import */ var _utils_getContainerColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/getContainerColor */ \"./src/utils/getContainerColor.ts\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ \"../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\n\n\nfunction DockerContainer(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState, 2),\n      clicked = _useState2[0],\n      click = _useState2[1];\n\n  var texture_1 = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.z)(three_src_loaders_TextureLoader_js__WEBPACK_IMPORTED_MODULE_6__.TextureLoader, '/assets/blue-container.jpg');\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(\"mesh\", _objectSpread(_objectSpread({}, props), {}, {\n      scale: clicked ? 1.5 : 1,\n      onClick: function onClick() {\n        return click(!clicked);\n      } // onPointerOver={event => hover(true)}\n      // onPointerOut={event => hover(false)}\n      ,\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"boxGeometry\", {\n        args: [2, 1, 1]\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"meshStandardMaterial\", {\n        color: (0,_utils_getContainerColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(props.container.State)\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {\n        fallback: null,\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__.Text, {\n          color: '#EC2D2D',\n          fontSize: 0.1,\n          lineHeight: 1,\n          letterSpacing: 0.02,\n          textAlign: 'left',\n          font: \"https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff\",\n          anchorX: \"center\",\n          anchorY: \"middle\",\n          depthOffset: 12,\n          position: [0, 0, 0.7],\n          children: props.container.Names[0]\n        })\n      })]\n    }))\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DockerContainer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Eb2NrZXJDb250YWluZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFFQSxTQUFTTSxlQUFULENBQXlCQyxLQUF6QixFQUFxQztFQUNuQyxnQkFBeUJOLCtDQUFRLENBQUMsS0FBRCxDQUFqQztFQUFBO0VBQUEsSUFBT08sT0FBUDtFQUFBLElBQWdCQyxLQUFoQjs7RUFFQSxJQUFNQyxTQUFTLEdBQUdQLHFEQUFTLENBQUNDLDZFQUFELEVBQWdCLDRCQUFoQixDQUEzQjtFQUVBLG9CQUNFO0lBQUEsdUJBQ0UsZ0dBQ01HLEtBRE47TUFFRSxLQUFLLEVBQUVDLE9BQU8sR0FBRyxHQUFILEdBQVMsQ0FGekI7TUFHRSxPQUFPLEVBQUU7UUFBQSxPQUFNQyxLQUFLLENBQUMsQ0FBQ0QsT0FBRixDQUFYO01BQUEsQ0FIWCxDQUlFO01BQ0E7TUFMRjtNQUFBLHdCQU9FO1FBQWEsSUFBSSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQO01BQW5CLEVBUEYsZUFTRTtRQUNFLEtBQUssRUFBRUgsb0VBQWlCLENBQUNFLEtBQUssQ0FBQ0ksU0FBTixDQUFnQkMsS0FBakI7TUFEMUIsRUFURixlQW9CRSx1REFBQywyQ0FBRDtRQUFVLFFBQVEsRUFBRSxJQUFwQjtRQUFBLHVCQUVFLHVEQUFDLG1EQUFEO1VBQ0UsS0FBSyxFQUFFLFNBRFQ7VUFFRSxRQUFRLEVBQUUsR0FGWjtVQUdFLFVBQVUsRUFBRSxDQUhkO1VBSUUsYUFBYSxFQUFFLElBSmpCO1VBS0UsU0FBUyxFQUFFLE1BTGI7VUFNRSxJQUFJLEVBQUMsc0VBTlA7VUFPRSxPQUFPLEVBQUMsUUFQVjtVQVFFLE9BQU8sRUFBQyxRQVJWO1VBU0UsV0FBVyxFQUFFLEVBVGY7VUFVRSxRQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLEdBQVAsQ0FWWjtVQUFBLFVBWUdMLEtBQUssQ0FBQ0ksU0FBTixDQUFnQkUsS0FBaEIsQ0FBc0IsQ0FBdEI7UUFaSDtNQUZGLEVBcEJGO0lBQUE7RUFERixFQURGO0FBMENEOztBQUVELGlFQUFlUCxlQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9jb21wb25lbnRzL0RvY2tlckNvbnRhaW5lci9pbmRleC50c3g/NDNlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdXNwZW5zZSwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICdAcmVhY3QtdGhyZWUvZHJlaSdcbmltcG9ydCB7IHVzZUxvYWRlciB9IGZyb20gJ0ByZWFjdC10aHJlZS9maWJlcidcbmltcG9ydCB7IFRleHR1cmVMb2FkZXIgfSBmcm9tICd0aHJlZS9zcmMvbG9hZGVycy9UZXh0dXJlTG9hZGVyLmpzJ1xuXG5pbXBvcnQgZ2V0Q29udGFpbmVyQ29sb3IgZnJvbSAnLi4vLi4vdXRpbHMvZ2V0Q29udGFpbmVyQ29sb3InXG5cbmZ1bmN0aW9uIERvY2tlckNvbnRhaW5lcihwcm9wczogYW55KSB7XG4gIGNvbnN0IFtjbGlja2VkLCBjbGlja10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCB0ZXh0dXJlXzEgPSB1c2VMb2FkZXIoVGV4dHVyZUxvYWRlciwgJy9hc3NldHMvYmx1ZS1jb250YWluZXIuanBnJylcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bWVzaFxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIHNjYWxlPXtjbGlja2VkID8gMS41IDogMX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gY2xpY2soIWNsaWNrZWQpfVxuICAgICAgICAvLyBvblBvaW50ZXJPdmVyPXtldmVudCA9PiBob3Zlcih0cnVlKX1cbiAgICAgICAgLy8gb25Qb2ludGVyT3V0PXtldmVudCA9PiBob3ZlcihmYWxzZSl9XG4gICAgICA+XG4gICAgICAgIDxib3hHZW9tZXRyeSBhcmdzPXtbMiwgMSwgMV19IC8+XG5cbiAgICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsXG4gICAgICAgICAgY29sb3I9e2dldENvbnRhaW5lckNvbG9yKHByb3BzLmNvbnRhaW5lci5TdGF0ZSl9XG4gICAgICAgIC8+XG5cbiAgICAgICAgey8qIDxtZXNoU3RhbmRhcmRNYXRlcmlhbCBtYXA9e3RleHR1cmVfMX0gYXR0YWNoPVwibWF0ZXJpYWxcIiAvPlxuICAgICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWwgbWFwPXt0ZXh0dXJlXzF9IGF0dGFjaD1cIm1hdGVyaWFsXCIgLz5cbiAgICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsIG1hcD17dGV4dHVyZV8xfSBhdHRhY2g9XCJtYXRlcmlhbFwiIC8+XG4gICAgICAgIDxtZXNoU3RhbmRhcmRNYXRlcmlhbCBtYXA9e3RleHR1cmVfMX0gYXR0YWNoPVwibWF0ZXJpYWxcIiAvPlxuICAgICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWwgbWFwPXt0ZXh0dXJlXzF9IGF0dGFjaD1cIm1hdGVyaWFsXCIgLz5cbiAgICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsIG1hcD17dGV4dHVyZV8xfSBhdHRhY2g9XCJtYXRlcmlhbFwiIC8+ICovfVxuXG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XG4gICAgICAgICAgey8qIEB0cy1pZ25vcmUgKi99XG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIGNvbG9yPXsnI0VDMkQyRCd9XG4gICAgICAgICAgICBmb250U2l6ZT17MC4xfVxuICAgICAgICAgICAgbGluZUhlaWdodD17MX1cbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc9ezAuMDJ9XG4gICAgICAgICAgICB0ZXh0QWxpZ249eydsZWZ0J31cbiAgICAgICAgICAgIGZvbnQ9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcmFsZXdheS92MTQvMVB0cmc4ellTX1NLZ2dQTndLNHZhcUkud29mZlwiXG4gICAgICAgICAgICBhbmNob3JYPVwiY2VudGVyXCJcbiAgICAgICAgICAgIGFuY2hvclk9XCJtaWRkbGVcIlxuICAgICAgICAgICAgZGVwdGhPZmZzZXQ9ezEyfVxuICAgICAgICAgICAgcG9zaXRpb249e1swLCAwLCAwLjddfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwcm9wcy5jb250YWluZXIuTmFtZXNbMF19XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgPC9tZXNoPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERvY2tlckNvbnRhaW5lclxuIl0sIm5hbWVzIjpbIlN1c3BlbnNlIiwidXNlU3RhdGUiLCJUZXh0IiwidXNlTG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsImdldENvbnRhaW5lckNvbG9yIiwiRG9ja2VyQ29udGFpbmVyIiwicHJvcHMiLCJjbGlja2VkIiwiY2xpY2siLCJ0ZXh0dXJlXzEiLCJjb250YWluZXIiLCJTdGF0ZSIsIk5hbWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/DockerContainer/index.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d8e2f6dc36e46c59b5ee")
/******/ })();
/******/ 
/******/ }
);