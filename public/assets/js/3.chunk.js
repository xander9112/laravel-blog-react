webpackJsonp([3],{

/***/ 787:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(17), RootInstanceProvider = __webpack_require__(18), ReactMount = __webpack_require__(16), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(61);

	var _reactRedux = __webpack_require__(82);

	var _reactRouter = __webpack_require__(109);

	var _reactFlexboxGrid = __webpack_require__(132);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CategoryIndex = function (_Component) {
		_inherits(CategoryIndex, _Component);

		function CategoryIndex(props) {
			_classCallCheck(this, CategoryIndex);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(CategoryIndex).call(this, props));
		}

		_createClass(CategoryIndex, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					_reactFlexboxGrid.Row,
					null,
					_react2.default.createElement(
						_reactFlexboxGrid.Col,
						{ xs: 12 },
						'CategoryIndex'
					)
				);
			}
		}]);

		return CategoryIndex;
	}(_react.Component);

	function mapStateToProps(state) {
		"use strict";

		return {};
	}

	function mapDispatchToProps(dispatch) {
		"use strict";

		return {
			// userActions: bindActionCreators(userActions, dispatch)
		};
	}

	module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CategoryIndex);

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(19); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Category.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcm91dGVzL0FkbWluL3JvdXRlcy9DYXRlZ29yaWVzL3JvdXRlcy9DYXRlZ29yeS9jb21wb25lbnRzL0NhdGVnb3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7YnJvd3Nlckhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IHtSb3csIENvbH0gZnJvbSAncmVhY3QtZmxleGJveC1ncmlkJztcclxuXHJcbmNsYXNzIENhdGVnb3J5SW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyICgpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxSb3c+XHJcblx0XHRcdFx0PENvbCB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0Q2F0ZWdvcnlJbmRleFxyXG5cdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHQ8L1Jvdz5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMgKHN0YXRlKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdHJldHVybiB7fVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMgKGRpc3BhdGNoKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblx0cmV0dXJuIHtcclxuXHRcdC8vIHVzZXJBY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnModXNlckFjdGlvbnMsIGRpc3BhdGNoKVxyXG5cdH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDYXRlZ29yeUluZGV4KTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3JvdXRlcy9BZG1pbi9yb3V0ZXMvQ2F0ZWdvcmllcy9yb3V0ZXMvQ2F0ZWdvcnkvY29tcG9uZW50cy9DYXRlZ29yeS5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQU1BOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9