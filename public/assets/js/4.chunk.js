webpackJsonp([4],{

/***/ 785:
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

	var CategoriesIndex = function (_Component) {
		_inherits(CategoriesIndex, _Component);

		function CategoriesIndex(props) {
			_classCallCheck(this, CategoriesIndex);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(CategoriesIndex).call(this, props));
		}

		_createClass(CategoriesIndex, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					_reactFlexboxGrid.Row,
					null,
					_react2.default.createElement(
						_reactFlexboxGrid.Col,
						{ xs: 12 },
						'CategoriesIndex'
					)
				);
			}
		}]);

		return CategoriesIndex;
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

	// export default connect(mapStateToProps, mapDispatchToProps)(CategoriesIndex);
	module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CategoriesIndex);

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(19); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcm91dGVzL0FkbWluL3JvdXRlcy9DYXRlZ29yaWVzL2NvbXBvbmVudHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHticm93c2VySGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5pbXBvcnQge1JvdywgQ29sfSBmcm9tICdyZWFjdC1mbGV4Ym94LWdyaWQnO1xyXG5cclxuY2xhc3MgQ2F0ZWdvcmllc0luZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlciAoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8Um93PlxyXG5cdFx0XHRcdDxDb2wgeHM9ezEyfT5cclxuXHRcdFx0XHRcdENhdGVnb3JpZXNJbmRleFxyXG5cdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHQ8L1Jvdz5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMgKHN0YXRlKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdHJldHVybiB7fVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMgKGRpc3BhdGNoKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblx0cmV0dXJuIHtcclxuXHRcdC8vIHVzZXJBY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnModXNlckFjdGlvbnMsIGRpc3BhdGNoKVxyXG5cdH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2F0ZWdvcmllc0luZGV4KTtcclxubW9kdWxlLmV4cG9ydHMgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDYXRlZ29yaWVzSW5kZXgpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Jlc291cmNlcy9hc3NldHMvanMvcm91dGVzL0FkbWluL3JvdXRlcy9DYXRlZ29yaWVzL2NvbXBvbmVudHMvaW5kZXguanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFNQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFHQTtBQUNBOztBQUVBO0FBQ0E7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=