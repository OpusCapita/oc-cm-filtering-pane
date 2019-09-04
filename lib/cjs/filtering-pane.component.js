'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  background-color: ', ';\n  width: calc(100% - 2 * ', ');\n  margin: ', ' ', ' 0 ', ';\n  padding: ', ';\n'], ['\n  display: flex;\n  background-color: ', ';\n  width: calc(100% - 2 * ', ');\n  margin: ', ' ', ' 0 ', ';\n  padding: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  display: flex;\n'], ['\n  display: flex;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  justify-content: flex-start;\n'], ['\n  justify-content: flex-start;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  justify-content: flex-end;\n  align-items: flex-end;\n  align-self: flex-end;\n  flex: 1 1 20%;\n'], ['\n  justify-content: flex-end;\n  align-items: flex-end;\n  align-self: flex-end;\n  flex: 1 1 20%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactResponsiveNavbar = require('@opuscapita/react-responsive-navbar');

var _reactResponsiveNavbar2 = _interopRequireDefault(_reactResponsiveNavbar);

var _reactDropdown = require('@opuscapita/react-dropdown');

var _ocCmCommonLayouts = require('@opuscapita/oc-cm-common-layouts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FilteringPaneSection = _styledComponents2.default.div(_templateObject, _ocCmCommonLayouts.theme.contentBackgroundColor, _ocCmCommonLayouts.theme.gutterWidth, _ocCmCommonLayouts.theme.gutterWidth, _ocCmCommonLayouts.theme.gutterWidth, _ocCmCommonLayouts.theme.gutterWidth, _ocCmCommonLayouts.theme.gutterWidth);

var AlignedSection = _styledComponents2.default.div(_templateObject2);

var LeftAlignedSection = (0, _styledComponents2.default)(AlignedSection)(_templateObject3);

var RightAlignedSection = (0, _styledComponents2.default)(AlignedSection)(_templateObject4);

var FilteringPane = function (_React$PureComponent) {
  _inherits(FilteringPane, _React$PureComponent);

  function FilteringPane() {
    var _temp, _this, _ret;

    _classCallCheck(this, FilteringPane);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.hasTabs = function () {
      return _this.props.tabs && _this.props.tabs !== 'undefined' && _this.props.tabs.list.length !== 0;
    }, _this.renderNavbar = function () {
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
        onSelect: onSelect,
        componentLeft: _this.renderLeftAlignedContent(),
        componentRight: _this.renderRightAlignedContent()
      });
    }, _this.renderLeftAlignedContent = function () {
      var leftAlignedContent = _this.props.leftAlignedContent;

      return _react2.default.createElement(
        LeftAlignedSection,
        { className: 'left-aligned-section' },
        !!leftAlignedContent && leftAlignedContent
      );
    }, _this.renderRightAlignedContent = function () {
      var rightAlignedContent = _this.props.rightAlignedContent;

      return _react2.default.createElement(
        RightAlignedSection,
        { className: 'right-aligned-section' },
        !!rightAlignedContent && rightAlignedContent,
        _this.renderMenu()
      );
    }, _this.renderMenu = function () {
      var _this$props = _this.props,
          id = _this$props.id,
          menuItems = _this$props.menuItems;

      return !!menuItems.length && _react2.default.createElement(_reactDropdown.DropdownMenu, {
        id: id + '_filtering-pane-dropdown-menu',
        menuItems: menuItems
      });
    }, _this.renderLeftAndRight = function () {
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _this.renderLeftAlignedContent(),
        _this.renderRightAlignedContent()
      );
    }, _this.render = function () {
      var content = _this.hasTabs() ? _this.renderNavbar() : _this.renderLeftAndRight();
      return _react2.default.createElement(
        _styledComponents.ThemeProvider,
        { theme: _ocCmCommonLayouts.theme },
        _react2.default.createElement(
          FilteringPaneSection,
          { id: _this.props.id, className: 'oc-cm-filtering-pane ' + _this.props.className },
          content
        )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maWx0ZXJpbmctcGFuZS5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkZpbHRlcmluZ1BhbmVTZWN0aW9uIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJjb250ZW50QmFja2dyb3VuZENvbG9yIiwiZ3V0dGVyV2lkdGgiLCJBbGlnbmVkU2VjdGlvbiIsIkxlZnRBbGlnbmVkU2VjdGlvbiIsIlJpZ2h0QWxpZ25lZFNlY3Rpb24iLCJGaWx0ZXJpbmdQYW5lIiwiaGFzVGFicyIsInByb3BzIiwidGFicyIsImxpc3QiLCJsZW5ndGgiLCJyZW5kZXJOYXZiYXIiLCJhY3RpdmVLZXkiLCJvblNlbGVjdCIsInNob3dOYXZJdGVtQm9yZGVyIiwic2hvd05hdkl0ZW1Ub29sdGlwIiwicmVuZGVyTGVmdEFsaWduZWRDb250ZW50IiwicmVuZGVyUmlnaHRBbGlnbmVkQ29udGVudCIsImxlZnRBbGlnbmVkQ29udGVudCIsInJpZ2h0QWxpZ25lZENvbnRlbnQiLCJyZW5kZXJNZW51IiwiaWQiLCJtZW51SXRlbXMiLCJyZW5kZXJMZWZ0QW5kUmlnaHQiLCJyZW5kZXIiLCJjb250ZW50IiwiY2xhc3NOYW1lIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSx1QkFBdUJDLDJCQUFPQyxHQUE5QixrQkFFZ0JDLHlCQUFNQyxzQkFGdEIsRUFHcUJELHlCQUFNRSxXQUgzQixFQUlNRix5QkFBTUUsV0FKWixFQUkyQkYseUJBQU1FLFdBSmpDLEVBSWtERix5QkFBTUUsV0FKeEQsRUFLT0YseUJBQU1FLFdBTGIsQ0FBTjs7QUFRQSxJQUFNQyxpQkFBaUJMLDJCQUFPQyxHQUF4QixrQkFBTjs7QUFJQSxJQUFNSyxxQkFBcUIsZ0NBQU9ELGNBQVAsQ0FBckIsa0JBQU47O0FBSUEsSUFBTUUs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cG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBSZXNwb25zaXZlTmF2YmFyIGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LXJlc3BvbnNpdmUtbmF2YmFyJztcbmltcG9ydCB7IERyb3Bkb3duTWVudSB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWRyb3Bkb3duJztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG5jb25zdCBGaWx0ZXJpbmdQYW5lU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29udGVudEJhY2tncm91bmRDb2xvcn07XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyICogJHt0aGVtZS5ndXR0ZXJXaWR0aH0pO1xuICBtYXJnaW46ICR7dGhlbWUuZ3V0dGVyV2lkdGh9ICR7dGhlbWUuZ3V0dGVyV2lkdGh9IDAgJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG4gIHBhZGRpbmc6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuYDtcblxuY29uc3QgQWxpZ25lZFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgTGVmdEFsaWduZWRTZWN0aW9uID0gc3R5bGVkKEFsaWduZWRTZWN0aW9uKWBcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuYDtcblxuY29uc3QgUmlnaHRBbGlnbmVkU2VjdGlvbiA9IHN0eWxlZChBbGlnbmVkU2VjdGlvbilgXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIGZsZXg6IDEgMSAyMCU7XG5gO1xuXG5jbGFzcyBGaWx0ZXJpbmdQYW5lIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGhhc1RhYnMgPSAoKSA9PiAodGhpcy5wcm9wcy50YWJzICYmIHRoaXMucHJvcHMudGFicyAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5wcm9wcy50YWJzLmxpc3QubGVuZ3RoICE9PSAwKTtcblxuICByZW5kZXJOYXZiYXIgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgYWN0aXZlS2V5LFxuICAgICAgbGlzdCxcbiAgICAgIG9uU2VsZWN0LFxuICAgICAgc2hvd05hdkl0ZW1Cb3JkZXIsXG4gICAgICBzaG93TmF2SXRlbVRvb2x0aXAsXG4gICAgfSA9IHRoaXMucHJvcHMudGFicztcblxuICAgIHJldHVybiAoISFsaXN0Lmxlbmd0aCAmJlxuICAgICAgPFJlc3BvbnNpdmVOYXZiYXJcbiAgICAgICAgYWN0aXZlS2V5PXthY3RpdmVLZXl9XG4gICAgICAgIGxpc3Q9e2xpc3R9XG4gICAgICAgIHNob3dOYXZJdGVtQm9yZGVyPXtzaG93TmF2SXRlbUJvcmRlcn1cbiAgICAgICAgc2hvd05hdkl0ZW1Ub29sdGlwPXtzaG93TmF2SXRlbVRvb2x0aXB9XG4gICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdH1cbiAgICAgICAgY29tcG9uZW50TGVmdD17dGhpcy5yZW5kZXJMZWZ0QWxpZ25lZENvbnRlbnQoKX1cbiAgICAgICAgY29tcG9uZW50UmlnaHQ9e3RoaXMucmVuZGVyUmlnaHRBbGlnbmVkQ29udGVudCgpfVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlckxlZnRBbGlnbmVkQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGxlZnRBbGlnbmVkQ29udGVudCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPExlZnRBbGlnbmVkU2VjdGlvbiBjbGFzc05hbWU9XCJsZWZ0LWFsaWduZWQtc2VjdGlvblwiPlxuICAgICAgICB7ISFsZWZ0QWxpZ25lZENvbnRlbnQgJiYgbGVmdEFsaWduZWRDb250ZW50fVxuICAgICAgPC9MZWZ0QWxpZ25lZFNlY3Rpb24+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXJSaWdodEFsaWduZWRDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmlnaHRBbGlnbmVkQ29udGVudCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJpZ2h0QWxpZ25lZFNlY3Rpb24gY2xhc3NOYW1lPVwicmlnaHQtYWxpZ25lZC1zZWN0aW9uXCI+XG4gICAgICAgIHshIXJpZ2h0QWxpZ25lZENvbnRlbnQgJiYgcmlnaHRBbGlnbmVkQ29udGVudH1cbiAgICAgICAge3RoaXMucmVuZGVyTWVudSgpfVxuICAgICAgPC9SaWdodEFsaWduZWRTZWN0aW9uPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGlkLCBtZW51SXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICEhbWVudUl0ZW1zLmxlbmd0aCAmJlxuICAgICAgPERyb3Bkb3duTWVudVxuICAgICAgICBpZD17YCR7aWR9X2ZpbHRlcmluZy1wYW5lLWRyb3Bkb3duLW1lbnVgfVxuICAgICAgICBtZW51SXRlbXM9e21lbnVJdGVtc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXJMZWZ0QW5kUmlnaHQgPSAoKSA9PiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge3RoaXMucmVuZGVyTGVmdEFsaWduZWRDb250ZW50KCl9XG4gICAgICB7dGhpcy5yZW5kZXJSaWdodEFsaWduZWRDb250ZW50KCl9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcblxuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuaGFzVGFicygpID8gdGhpcy5yZW5kZXJOYXZiYXIoKSA6IHRoaXMucmVuZGVyTGVmdEFuZFJpZ2h0KCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxGaWx0ZXJpbmdQYW5lU2VjdGlvbiBpZD17dGhpcy5wcm9wcy5pZH0gY2xhc3NOYW1lPXtgb2MtY20tZmlsdGVyaW5nLXBhbmUgJHt0aGlzLnByb3BzLmNsYXNzTmFtZX1gfT5cbiAgICAgICAgICB7IGNvbnRlbnQgfVxuICAgICAgICA8L0ZpbHRlcmluZ1BhbmVTZWN0aW9uPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuRmlsdGVyaW5nUGFuZS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0YWJzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGFjdGl2ZUtleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgICBdKSxcbiAgICBsaXN0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKSxcbiAgICBzaG93TmF2SXRlbUJvcmRlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd05hdkl0ZW1Ub29sdGlwOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIH0pLFxuICBsZWZ0QWxpZ25lZENvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLFxuICByaWdodEFsaWduZWRDb250ZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgbWVudUl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgXSkpLFxufTtcblxuRmlsdGVyaW5nUGFuZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHRhYnM6IHtcbiAgICBhY3RpdmVLZXk6IDAsXG4gICAgbGlzdDogW10sXG4gICAgc2hvd05hdkl0ZW1Cb3JkZXI6IGZhbHNlLFxuICAgIHNob3dOYXZJdGVtVG9vbHRpcDogdHJ1ZSxcbiAgICBvblNlbGVjdDogbnVsbCxcbiAgfSxcbiAgbGVmdEFsaWduZWRDb250ZW50OiBudWxsLFxuICByaWdodEFsaWduZWRDb250ZW50OiBudWxsLFxuICBtZW51SXRlbXM6IFtdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyaW5nUGFuZTtcbiJdfQ==