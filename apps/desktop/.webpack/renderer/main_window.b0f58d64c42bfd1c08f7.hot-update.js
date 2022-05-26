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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/drei */ \"../../node_modules/.pnpm/@react-three+drei@9.0.1_tynbetzobu5535th6wxw2e6u74/node_modules/@react-three/drei/core/Text.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/fiber */ \"../../node_modules/.pnpm/@react-three+fiber@8.0.11_l5xcbjfy74ndxsg7mnqlwl5f6y/node_modules/@react-three/fiber/dist/index-3c7aae97.esm.js\");\n/* harmony import */ var three_src_loaders_TextureLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/src/loaders/TextureLoader */ \"../../node_modules/.pnpm/three@0.139.1/node_modules/three/src/loaders/TextureLoader.js\");\n/* harmony import */ var _assets_blue_container_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/blue-container.png */ \"./src/assets/blue-container.png\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ \"../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\n\n\nfunction DockerContainer(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState, 2),\n      clicked = _useState2[0],\n      click = _useState2[1];\n\n  var texture_1 = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.z)(three_src_loaders_TextureLoader__WEBPACK_IMPORTED_MODULE_6__.TextureLoader, _assets_blue_container_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(\"mesh\", _objectSpread(_objectSpread({}, props), {}, {\n      scale: clicked ? 1.5 : 1,\n      onClick: function onClick() {\n        return click(!clicked);\n      } // onPointerOver={event => hover(true)}\n      // onPointerOut={event => hover(false)}\n      ,\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"boxGeometry\", {\n        args: [2, 1, 1]\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"meshStandardMaterial\", {\n        map: texture_1,\n        attach: \"material\"\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"meshStandardMaterial\", {\n        map: texture_1,\n        attach: \"material\"\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"meshStandardMaterial\", {\n        map: texture_1,\n        attach: \"material\"\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"meshStandardMaterial\", {\n        map: texture_1,\n        attach: \"material\"\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"meshStandardMaterial\", {\n        map: texture_1,\n        attach: \"material\"\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"meshStandardMaterial\", {\n        map: texture_1,\n        attach: \"material\"\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {\n        fallback: null,\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__.Text, {\n          color: 'black',\n          fontSize: 0.1,\n          lineHeight: 1,\n          letterSpacing: 0.02,\n          textAlign: 'left',\n          font: \"https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff\",\n          anchorX: \"center\",\n          anchorY: \"middle\",\n          depthOffset: 12,\n          position: [0, 0, 0.6],\n          children: props.container.Names[0]\n        })\n      })]\n    }))\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DockerContainer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Eb2NrZXJDb250YWluZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7QUFHQSxTQUFTTSxlQUFULENBQXlCQyxLQUF6QixFQUFxQztFQUNuQyxnQkFBeUJOLCtDQUFRLENBQUMsS0FBRCxDQUFqQztFQUFBO0VBQUEsSUFBT08sT0FBUDtFQUFBLElBQWdCQyxLQUFoQjs7RUFFQSxJQUFNQyxTQUFTLEdBQUdQLHFEQUFTLENBQUNDLDBFQUFELEVBQWdCQyxrRUFBaEIsQ0FBM0I7RUFFQSxvQkFDRTtJQUFBLHVCQUNFLGdHQUNNRSxLQUROO01BRUUsS0FBSyxFQUFFQyxPQUFPLEdBQUcsR0FBSCxHQUFTLENBRnpCO01BR0UsT0FBTyxFQUFFO1FBQUEsT0FBTUMsS0FBSyxDQUFDLENBQUNELE9BQUYsQ0FBWDtNQUFBLENBSFgsQ0FJRTtNQUNBO01BTEY7TUFBQSx3QkFPRTtRQUFhLElBQUksRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtNQUFuQixFQVBGLGVBU0U7UUFBc0IsR0FBRyxFQUFFRSxTQUEzQjtRQUFzQyxNQUFNLEVBQUM7TUFBN0MsRUFURixlQVVFO1FBQXNCLEdBQUcsRUFBRUEsU0FBM0I7UUFBc0MsTUFBTSxFQUFDO01BQTdDLEVBVkYsZUFXRTtRQUFzQixHQUFHLEVBQUVBLFNBQTNCO1FBQXNDLE1BQU0sRUFBQztNQUE3QyxFQVhGLGVBWUU7UUFBc0IsR0FBRyxFQUFFQSxTQUEzQjtRQUFzQyxNQUFNLEVBQUM7TUFBN0MsRUFaRixlQWFFO1FBQXNCLEdBQUcsRUFBRUEsU0FBM0I7UUFBc0MsTUFBTSxFQUFDO01BQTdDLEVBYkYsZUFjRTtRQUFzQixHQUFHLEVBQUVBLFNBQTNCO1FBQXNDLE1BQU0sRUFBQztNQUE3QyxFQWRGLGVBZ0JFLHVEQUFDLDJDQUFEO1FBQVUsUUFBUSxFQUFFLElBQXBCO1FBQUEsdUJBRUUsdURBQUMsbURBQUQ7VUFDRSxLQUFLLEVBQUUsT0FEVDtVQUVFLFFBQVEsRUFBRSxHQUZaO1VBR0UsVUFBVSxFQUFFLENBSGQ7VUFJRSxhQUFhLEVBQUUsSUFKakI7VUFLRSxTQUFTLEVBQUUsTUFMYjtVQU1FLElBQUksRUFBQyxzRUFOUDtVQU9FLE9BQU8sRUFBQyxRQVBWO1VBUUUsT0FBTyxFQUFDLFFBUlY7VUFTRSxXQUFXLEVBQUUsRUFUZjtVQVVFLFFBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sR0FBUCxDQVZaO1VBQUEsVUFZR0gsS0FBSyxDQUFDSSxTQUFOLENBQWdCQyxLQUFoQixDQUFzQixDQUF0QjtRQVpIO01BRkYsRUFoQkY7SUFBQTtFQURGLEVBREY7QUFzQ0Q7O0FBRUQsaUVBQWVOLGVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNrdG9wLy4vc3JjL2NvbXBvbmVudHMvRG9ja2VyQ29udGFpbmVyL2luZGV4LnRzeD80M2VmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1c3BlbnNlLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJ0ByZWFjdC10aHJlZS9kcmVpJ1xuaW1wb3J0IHsgdXNlTG9hZGVyIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJ1xuaW1wb3J0IHsgVGV4dHVyZUxvYWRlciB9IGZyb20gJ3RocmVlL3NyYy9sb2FkZXJzL1RleHR1cmVMb2FkZXInXG5cbmltcG9ydCBnZXRDb250YWluZXJDb2xvciBmcm9tICcuLi8uLi91dGlscy9nZXRDb250YWluZXJDb2xvcidcbmltcG9ydCBibHVlQ29udGFpbmVySW1hZ2UgZnJvbSAnLi4vLi4vYXNzZXRzL2JsdWUtY29udGFpbmVyLnBuZydcbmltcG9ydCByZWRDb250YWluZXJJbWFnZSBmcm9tICcuLi8uLi9hc3NldHMvcmVkLWNvbnRhaW5lci5wbmcnXG5cbmZ1bmN0aW9uIERvY2tlckNvbnRhaW5lcihwcm9wczogYW55KSB7XG4gIGNvbnN0IFtjbGlja2VkLCBjbGlja10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCB0ZXh0dXJlXzEgPSB1c2VMb2FkZXIoVGV4dHVyZUxvYWRlciwgYmx1ZUNvbnRhaW5lckltYWdlKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtZXNoXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgc2NhbGU9e2NsaWNrZWQgPyAxLjUgOiAxfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBjbGljayghY2xpY2tlZCl9XG4gICAgICAgIC8vIG9uUG9pbnRlck92ZXI9e2V2ZW50ID0+IGhvdmVyKHRydWUpfVxuICAgICAgICAvLyBvblBvaW50ZXJPdXQ9e2V2ZW50ID0+IGhvdmVyKGZhbHNlKX1cbiAgICAgID5cbiAgICAgICAgPGJveEdlb21ldHJ5IGFyZ3M9e1syLCAxLCAxXX0gLz5cblxuICAgICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWwgbWFwPXt0ZXh0dXJlXzF9IGF0dGFjaD1cIm1hdGVyaWFsXCIgLz5cbiAgICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsIG1hcD17dGV4dHVyZV8xfSBhdHRhY2g9XCJtYXRlcmlhbFwiIC8+XG4gICAgICAgIDxtZXNoU3RhbmRhcmRNYXRlcmlhbCBtYXA9e3RleHR1cmVfMX0gYXR0YWNoPVwibWF0ZXJpYWxcIiAvPlxuICAgICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWwgbWFwPXt0ZXh0dXJlXzF9IGF0dGFjaD1cIm1hdGVyaWFsXCIgLz5cbiAgICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsIG1hcD17dGV4dHVyZV8xfSBhdHRhY2g9XCJtYXRlcmlhbFwiIC8+XG4gICAgICAgIDxtZXNoU3RhbmRhcmRNYXRlcmlhbCBtYXA9e3RleHR1cmVfMX0gYXR0YWNoPVwibWF0ZXJpYWxcIiAvPlxuXG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XG4gICAgICAgICAgey8qIEB0cy1pZ25vcmUgKi99XG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIGNvbG9yPXsnYmxhY2snfVxuICAgICAgICAgICAgZm9udFNpemU9ezAuMX1cbiAgICAgICAgICAgIGxpbmVIZWlnaHQ9ezF9XG4gICAgICAgICAgICBsZXR0ZXJTcGFjaW5nPXswLjAyfVxuICAgICAgICAgICAgdGV4dEFsaWduPXsnbGVmdCd9XG4gICAgICAgICAgICBmb250PVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JhbGV3YXkvdjE0LzFQdHJnOHpZU19TS2dnUE53SzR2YXFJLndvZmZcIlxuICAgICAgICAgICAgYW5jaG9yWD1cImNlbnRlclwiXG4gICAgICAgICAgICBhbmNob3JZPVwibWlkZGxlXCJcbiAgICAgICAgICAgIGRlcHRoT2Zmc2V0PXsxMn1cbiAgICAgICAgICAgIHBvc2l0aW9uPXtbMCwgMCwgMC42XX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cHJvcHMuY29udGFpbmVyLk5hbWVzWzBdfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgIDwvbWVzaD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb2NrZXJDb250YWluZXJcbiJdLCJuYW1lcyI6WyJTdXNwZW5zZSIsInVzZVN0YXRlIiwiVGV4dCIsInVzZUxvYWRlciIsIlRleHR1cmVMb2FkZXIiLCJibHVlQ29udGFpbmVySW1hZ2UiLCJEb2NrZXJDb250YWluZXIiLCJwcm9wcyIsImNsaWNrZWQiLCJjbGljayIsInRleHR1cmVfMSIsImNvbnRhaW5lciIsIk5hbWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/DockerContainer/index.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("116a4d24e3e83df102e1")
/******/ })();
/******/ 
/******/ }
);