'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ', ';\n  width: calc(100% - 2 * ', ');\n  margin: ', ';\n  padding: ', ';\n  .responsive-navbar-container {\n    flex: 1 1 100%;    \n  }\n'], ['\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ', ';\n  width: calc(100% - 2 * ', ');\n  margin: ', ';\n  padding: ', ';\n  .responsive-navbar-container {\n    flex: 1 1 100%;    \n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex: 1 1 100%;\n  &.right {\n    justify-content: flex-end;\n  }\n'], ['\n  display: flex;\n  flex: 1 1 100%;\n  &.right {\n    justify-content: flex-end;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  justify-content: flex-end;\n'], ['\n  justify-content: flex-end;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactResponsiveNavbar = require('@opuscapita/react-responsive-navbar');

var _reactResponsiveNavbar2 = _interopRequireDefault(_reactResponsiveNavbar);

var _reactDropdown = require('@opuscapita/react-dropdown');

var _ocCmCommonLayouts = require('@opuscapita/oc-cm-common-layouts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FilteringPaneSection = _styledComponents2.default.div(_templateObject, _ocCmCommonLayouts.theme.contentBackgroundColor, _ocCmCommonLayouts.theme.gutterWidth, _ocCmCommonLayouts.theme.gutterWidth, _ocCmCommonLayouts.theme.gutterWidth);

var AlignedSection = _styledComponents2.default.div(_templateObject2);

var RightAlignedSection = AlignedSection.extend(_templateObject3);

var FilteringPane = function (_React$PureComponent) {
  _inherits(FilteringPane, _React$PureComponent);

  function FilteringPane() {
    var _temp, _this, _ret;

    _classCallCheck(this, FilteringPane);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.renderNavbar = function () {
      var _this$props$tabs = _this.props.tabs,
          activeKey = _this$props$tabs.activeKey,
          list = _this$props$tabs.list,
          onSelect = _this$props$tabs.onSelect,
          showNavItemBorder = _this$props$tabs.showNavItemBorder,
          showNavItemTooltip = _this$props$tabs.showNavItemTooltip;


      return !!list.length && _react2.default.createElement(_reactResponsiveNavbar2.default, {
        activeKey: activeKey,
        list: list,
        showNavItemBorder: showNavItemBorder,
        showNavItemTooltip: showNavItemTooltip,
        onSelect: onSelect
      });
    }, _this.renderLeftAlignedContent = function () {
      return !!_this.props.leftAlignedContent && _react2.default.createElement(
        AlignedSection,
        { className: 'left-aligned-section' },
        _this.props.leftAlignedContent
      );
    }, _this.renderRightAlignedContent = function () {
      return !!_this.props.rightAlignedContent && _react2.default.createElement(
        RightAlignedSection,
        { className: 'right-aligned-sectio' },
        _this.props.rightAlignedContent
      );
    }, _this.renderMenu = function () {
      return !!_this.props.menuItems.length && _react2.default.createElement(_reactDropdown.DropdownMenu, {
        id: _this.props.id + '_filtering-pane-dropdown-menu',
        menuItems: _this.props.menuItems
      });
    }, _this.render = function () {
      return _react2.default.createElement(
        FilteringPaneSection,
        { id: _this.props.id, className: 'oc-cm-filtering-pane ' + _this.props.className },
        _this.renderNavbar(),
        _this.renderLeftAlignedContent(),
        _this.renderRightAlignedContent(),
        _this.renderMenu()
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return FilteringPane;
}(_react2.default.PureComponent);

FilteringPane.defaultProps = {
  tabs: {
    activeKey: 0,
    list: [],
    showNavItemBorder: false,
    showNavItemTooltip: true,
    onSelect: null
  },
  leftAlignedContent: null,
  rightAlignedContent: null,
  menuItems: []
};

exports.default = FilteringPane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maWx0ZXJpbmctcGFuZS5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkZpbHRlcmluZ1BhbmVTZWN0aW9uIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJjb250ZW50QmFja2dyb3VuZENvbG9yIiwiZ3V0dGVyV2lkdGgiLCJBbGlnbmVkU2VjdGlvbiIsIlJpZ2h0QWxpZ25lZFNlY3Rpb24iLCJleHRlbmQiLCJGaWx0ZXJpbmdQYW5lIiwicmVuZGVyTmF2YmFyIiwicHJvcHMiLCJ0YWJzIiwiYWN0aXZlS2V5IiwibGlzdCIsIm9uU2VsZWN0Iiwic2hvd05hdkl0ZW1Cb3JkZXIiLCJzaG93TmF2SXRlbVRvb2x0aXAiLCJsZW5ndGgiLCJyZW5kZXJMZWZ0QWxpZ25lZENvbnRlbnQiLCJsZWZ0QWxpZ25lZENvbnRlbnQiLCJyZW5kZXJSaWdodEFsaWduZWRDb250ZW50IiwicmlnaHRBbGlnbmVkQ29udGVudCIsInJlbmRlck1lbnUiLCJtZW51SXRlbXMiLCJpZCIsInJlbmRlciIsImNsYXNzTmFtZSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSx1QkFBdUJDLDJCQUFPQyxHQUE5QixrQkFJZ0JDLHlCQUFNQyxzQkFKdEIsRUFLcUJELHlCQUFNRSxXQUwzQixFQU1NRix5QkFBTUUsV0FOWixFQU9PRix5QkFBTUUsV0FQYixDQUFOOztBQWFBLElBQU1DLGlCQUFpQkwsMkJBQU9DLEdBQXhCLGtCQUFOOztBQVFBLElBQU1LLHNCQUFzQkQsZUFBZUUsTUFBckMsa0JBQU47O0lBSU1DLGE7Ozs7Ozs7Ozs7OztnS0FDSkMsWSxHQUFlLFlBQU07QUFBQSw2QkFPZixNQUFLQyxLQUFMLENBQVdDLElBUEk7QUFBQSxVQUVqQkMsU0FGaUIsb0JBRWpCQSxTQUZpQjtBQUFBLFVBR2pCQyxJQUhpQixvQkFHakJBLElBSGlCO0FBQUEsVUFJakJDLFFBSmlCLG9CQUlqQkEsUUFKaUI7QUFBQSxVQUtqQkMsaUJBTGlCLG9CQUtqQkEsaUJBTGlCO0FBQUEsVUFNakJDLGtCQU5pQixvQkFNakJBLGtCQU5pQjs7O0FBU25CLGFBQVEsQ0FBQyxDQUFDSCxLQUFLSSxNQUFQLElBQ04sOEJBQUMsK0JBQUQ7QUFDRSxtQkFBV0wsU0FEYjtBQUVFLGNBQU1DLElBRlI7QUFHRSwyQkFBbUJFLGlCQUhyQjtBQUlFLDRCQUFvQkMsa0JBSnRCO0FBS0Usa0JBQVVGO0FBTFosUUFERjtBQVNELEssUUFFREksd0IsR0FBMkI7QUFBQSxhQUN6QixDQUFDLENBQUMsTUFBS1IsS0FBTCxDQUFXUyxrQkFBYixJQUNBO0FBQUMsc0JBQUQ7QUFBQSxVQUFnQixXQUFVLHNCQUExQjtBQUNHLGNBQUtULEtBQUwsQ0FBV1M7QUFEZCxPQUZ5QjtBQUFBLEssUUFPM0JDLHlCLEdBQTRCO0FBQUEsYUFDMUIsQ0FBQyxDQUFDLE1BQUtWLEtBQUwsQ0FBV1csbUJBQWIsSUFDQTtBQUFDLDJCQUFEO0FBQUEsVUFBcUIsV0FBVSxzQkFBL0I7QUFDRyxjQUFLWCxLQUFMLENBQVdXO0FBRGQsT0FGMEI7QUFBQSxLLFFBTzVCQyxVLEdBQWE7QUFBQSxhQUNYLENBQUMsQ0FBQyxNQUFLWixLQUFMLENBQVdhLFNBQVgsQ0FBcUJOLE1BQXZCLElBQ0EsOEJBQUMsMkJBQUQ7QUFDRSxZQUFPLE1BQUtQLEtBQUwsQ0FBV2MsRUFBbEIsa0NBREY7QUFFRSxtQkFBVyxNQUFLZCxLQUFMLENBQVdhO0FBRnhCLFFBRlc7QUFBQSxLLFFBUWJFLE0sR0FBUztBQUFBLGFBQ1A7QUFBQyw0QkFBRDtBQUFBLFVBQXNCLElBQUksTUFBS2YsS0FBTCxDQUFXYyxFQUFyQyxFQUF5QyxxQ0FBbUMsTUFBS2QsS0FBTCxDQUFXZ0IsU0FBdkY7QUFDRyxjQUFLakIsWUFBTCxFQURIO0FBRUcsY0FBS1Msd0JBQUwsRUFGSDtBQUdHLGNBQUtFLHlCQUFMLEVBSEg7QUFJRyxjQUFLRSxVQUFMO0FBSkgsT0FETztBQUFBLEs7Ozs7RUEzQ2lCSyxnQkFBTUMsYTs7QUF3RWxDcEIsY0FBY3FCLFlBQWQsR0FBNkI7QUFDM0JsQixRQUFNO0FBQ0pDLGVBQVcsQ0FEUDtBQUVKQyxVQUFNLEVBRkY7QUFHSkUsdUJBQW1CLEtBSGY7QUFJSkMsd0JBQW9CLElBSmhCO0FBS0pGLGNBQVU7QUFMTixHQURxQjtBQVEzQkssc0JBQW9CLElBUk87QUFTM0JFLHVCQUFxQixJQVRNO0FBVTNCRSxhQUFXO0FBVmdCLENBQTdCOztrQkFhZWYsYSIsImZpbGUiOiJmaWx0ZXJpbmctcGFuZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlc3BvbnNpdmVOYXZiYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtcmVzcG9uc2l2ZS1uYXZiYXInO1xuaW1wb3J0IHsgRHJvcGRvd25NZW51IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZHJvcGRvd24nO1xuXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcblxuY29uc3QgRmlsdGVyaW5nUGFuZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29udGVudEJhY2tncm91bmRDb2xvcn07XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyICogJHt0aGVtZS5ndXR0ZXJXaWR0aH0pO1xuICBtYXJnaW46ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgLnJlc3BvbnNpdmUtbmF2YmFyLWNvbnRhaW5lciB7XG4gICAgZmxleDogMSAxIDEwMCU7ICAgIFxuICB9XG5gO1xuXG5jb25zdCBBbGlnbmVkU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDEgMSAxMDAlO1xuICAmLnJpZ2h0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG5gO1xuXG5jb25zdCBSaWdodEFsaWduZWRTZWN0aW9uID0gQWxpZ25lZFNlY3Rpb24uZXh0ZW5kYFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuYDtcblxuY2xhc3MgRmlsdGVyaW5nUGFuZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICByZW5kZXJOYXZiYXIgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgYWN0aXZlS2V5LFxuICAgICAgbGlzdCxcbiAgICAgIG9uU2VsZWN0LFxuICAgICAgc2hvd05hdkl0ZW1Cb3JkZXIsXG4gICAgICBzaG93TmF2SXRlbVRvb2x0aXAsXG4gICAgfSA9IHRoaXMucHJvcHMudGFicztcblxuICAgIHJldHVybiAoISFsaXN0Lmxlbmd0aCAmJlxuICAgICAgPFJlc3BvbnNpdmVOYXZiYXJcbiAgICAgICAgYWN0aXZlS2V5PXthY3RpdmVLZXl9XG4gICAgICAgIGxpc3Q9e2xpc3R9XG4gICAgICAgIHNob3dOYXZJdGVtQm9yZGVyPXtzaG93TmF2SXRlbUJvcmRlcn1cbiAgICAgICAgc2hvd05hdkl0ZW1Ub29sdGlwPXtzaG93TmF2SXRlbVRvb2x0aXB9XG4gICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXJMZWZ0QWxpZ25lZENvbnRlbnQgPSAoKSA9PiAoXG4gICAgISF0aGlzLnByb3BzLmxlZnRBbGlnbmVkQ29udGVudCAmJlxuICAgIDxBbGlnbmVkU2VjdGlvbiBjbGFzc05hbWU9XCJsZWZ0LWFsaWduZWQtc2VjdGlvblwiPlxuICAgICAge3RoaXMucHJvcHMubGVmdEFsaWduZWRDb250ZW50fVxuICAgIDwvQWxpZ25lZFNlY3Rpb24+XG4gICk7XG5cbiAgcmVuZGVyUmlnaHRBbGlnbmVkQ29udGVudCA9ICgpID0+IChcbiAgICAhIXRoaXMucHJvcHMucmlnaHRBbGlnbmVkQ29udGVudCAmJlxuICAgIDxSaWdodEFsaWduZWRTZWN0aW9uIGNsYXNzTmFtZT1cInJpZ2h0LWFsaWduZWQtc2VjdGlvXCI+XG4gICAgICB7dGhpcy5wcm9wcy5yaWdodEFsaWduZWRDb250ZW50fVxuICAgIDwvUmlnaHRBbGlnbmVkU2VjdGlvbj5cbiAgKTtcblxuICByZW5kZXJNZW51ID0gKCkgPT4gKFxuICAgICEhdGhpcy5wcm9wcy5tZW51SXRlbXMubGVuZ3RoICYmXG4gICAgPERyb3Bkb3duTWVudVxuICAgICAgaWQ9e2Ake3RoaXMucHJvcHMuaWR9X2ZpbHRlcmluZy1wYW5lLWRyb3Bkb3duLW1lbnVgfVxuICAgICAgbWVudUl0ZW1zPXt0aGlzLnByb3BzLm1lbnVJdGVtc31cbiAgICAvPlxuICApO1xuXG4gIHJlbmRlciA9ICgpID0+IChcbiAgICA8RmlsdGVyaW5nUGFuZVNlY3Rpb24gaWQ9e3RoaXMucHJvcHMuaWR9IGNsYXNzTmFtZT17YG9jLWNtLWZpbHRlcmluZy1wYW5lICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YH0+XG4gICAgICB7dGhpcy5yZW5kZXJOYXZiYXIoKX1cbiAgICAgIHt0aGlzLnJlbmRlckxlZnRBbGlnbmVkQ29udGVudCgpfVxuICAgICAge3RoaXMucmVuZGVyUmlnaHRBbGlnbmVkQ29udGVudCgpfVxuICAgICAge3RoaXMucmVuZGVyTWVudSgpfVxuICAgIDwvRmlsdGVyaW5nUGFuZVNlY3Rpb24+XG4gICk7XG59XG5cbkZpbHRlcmluZ1BhbmUucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGFiczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhY3RpdmVLZXk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbGlzdDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSksXG4gICAgc2hvd05hdkl0ZW1Cb3JkZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dOYXZJdGVtVG9vbHRpcDogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICB9KSxcbiAgbGVmdEFsaWduZWRDb250ZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgcmlnaHRBbGlnbmVkQ29udGVudDogUHJvcFR5cGVzLm5vZGUsXG4gIG1lbnVJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5zaGFwZSh7fSksXG4gIF0pKSxcbn07XG5cbkZpbHRlcmluZ1BhbmUuZGVmYXVsdFByb3BzID0ge1xuICB0YWJzOiB7XG4gICAgYWN0aXZlS2V5OiAwLFxuICAgIGxpc3Q6IFtdLFxuICAgIHNob3dOYXZJdGVtQm9yZGVyOiBmYWxzZSxcbiAgICBzaG93TmF2SXRlbVRvb2x0aXA6IHRydWUsXG4gICAgb25TZWxlY3Q6IG51bGwsXG4gIH0sXG4gIGxlZnRBbGlnbmVkQ29udGVudDogbnVsbCxcbiAgcmlnaHRBbGlnbmVkQ29udGVudDogbnVsbCxcbiAgbWVudUl0ZW1zOiBbXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcmluZ1BhbmU7XG4iXX0=