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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maWx0ZXJpbmctcGFuZS5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkZpbHRlcmluZ1BhbmVTZWN0aW9uIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJjb250ZW50QmFja2dyb3VuZENvbG9yIiwiZ3V0dGVyV2lkdGgiLCJBbGlnbmVkU2VjdGlvbiIsIkxlZnRBbGlnbmVkU2VjdGlvbiIsIlJpZ2h0QWxpZ25lZFNlY3Rpb24iLCJGaWx0ZXJpbmdQYW5lIiwiaGFzVGFicyIsInByb3BzIiwidGFicyIsImxpc3QiLCJsZW5ndGgiLCJyZW5kZXJOYXZiYXIiLCJhY3RpdmVLZXkiLCJvblNlbGVjdCIsInNob3dOYXZJdGVtQm9yZGVyIiwic2hvd05hdkl0ZW1Ub29sdGlwIiwicmVuZGVyTGVmdEFsaWduZWRDb250ZW50IiwicmVuZGVyUmlnaHRBbGlnbmVkQ29udGVudCIsImxlZnRBbGlnbmVkQ29udGVudCIsInJpZ2h0QWxpZ25lZENvbnRlbnQiLCJyZW5kZXJNZW51IiwiaWQiLCJtZW51SXRlbXMiLCJyZW5kZXJMZWZ0QW5kUmlnaHQiLCJyZW5kZXIiLCJjb250ZW50IiwiY2xhc3NOYW1lIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSx1QkFBdUJDLDJCQUFPQyxHQUE5QixrQkFFZ0JDLHlCQUFNQyxzQkFGdEIsRUFHcUJELHlCQUFNRSxXQUgzQixFQUlNRix5QkFBTUUsV0FKWixFQUkyQkYseUJBQU1FLFdBSmpDLEVBSWtERix5QkFBTUUsV0FKeEQsRUFLT0YseUJBQU1FLFdBTGIsQ0FBTjs7QUFRQSxJQUFNQyxpQkFBaUJMLDJCQUFPQyxHQUF4QixrQkFBTjs7QUFJQSxJQUFNSyxxQkFBcUIsZ0NBQU9ELGNBQVAsQ0FBckIsa0JBQU47O0FBSUEsSUFBTUUs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cG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBSZXNwb25zaXZlTmF2YmFyIGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LXJlc3BvbnNpdmUtbmF2YmFyJztcbmltcG9ydCB7IERyb3Bkb3duTWVudSB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWRyb3Bkb3duJztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG5jb25zdCBGaWx0ZXJpbmdQYW5lU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29udGVudEJhY2tncm91bmRDb2xvcn07XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyICogJHt0aGVtZS5ndXR0ZXJXaWR0aH0pO1xuICBtYXJnaW46ICR7dGhlbWUuZ3V0dGVyV2lkdGh9ICR7dGhlbWUuZ3V0dGVyV2lkdGh9IDAgJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG4gIHBhZGRpbmc6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuYDtcblxuY29uc3QgQWxpZ25lZFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgTGVmdEFsaWduZWRTZWN0aW9uID0gc3R5bGVkKEFsaWduZWRTZWN0aW9uKWBcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuYDtcblxuY29uc3QgUmlnaHRBbGlnbmVkU2VjdGlvbiA9IHN0eWxlZChBbGlnbmVkU2VjdGlvbilgXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIGZsZXg6IDEgMSAyMCU7XG5gO1xuXG5jbGFzcyBGaWx0ZXJpbmdQYW5lIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGhhc1RhYnMgPSAoKSA9PiAodGhpcy5wcm9wcy50YWJzICYmIHRoaXMucHJvcHMudGFicyAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5wcm9wcy50YWJzLmxpc3QubGVuZ3RoICE9PSAwKTtcblxuICByZW5kZXJOYXZiYXIgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgYWN0aXZlS2V5LFxuICAgICAgbGlzdCxcbiAgICAgIG9uU2VsZWN0LFxuICAgICAgc2hvd05hdkl0ZW1Cb3JkZXIsXG4gICAgICBzaG93TmF2SXRlbVRvb2x0aXAsXG4gICAgfSA9IHRoaXMucHJvcHMudGFicztcblxuICAgIHJldHVybiAoISFsaXN0Lmxlbmd0aCAmJlxuICAgICAgPFJlc3BvbnNpdmVOYXZiYXJcbiAgICAgICAgYWN0aXZlS2V5PXthY3RpdmVLZXl9XG4gICAgICAgIGxpc3Q9e2xpc3R9XG4gICAgICAgIHNob3dOYXZJdGVtQm9yZGVyPXtzaG93TmF2SXRlbUJvcmRlcn1cbiAgICAgICAgc2hvd05hdkl0ZW1Ub29sdGlwPXtzaG93TmF2SXRlbVRvb2x0aXB9XG4gICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdH1cbiAgICAgICAgY29tcG9uZW50TGVmdD17dGhpcy5yZW5kZXJMZWZ0QWxpZ25lZENvbnRlbnQoKX1cbiAgICAgICAgY29tcG9uZW50UmlnaHQ9e3RoaXMucmVuZGVyUmlnaHRBbGlnbmVkQ29udGVudCgpfVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG5cbiAgcmVuZGVyTGVmdEFsaWduZWRDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbGVmdEFsaWduZWRDb250ZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8TGVmdEFsaWduZWRTZWN0aW9uIGNsYXNzTmFtZT1cImxlZnQtYWxpZ25lZC1zZWN0aW9uXCI+XG4gICAgICAgIHshIWxlZnRBbGlnbmVkQ29udGVudCAmJiBsZWZ0QWxpZ25lZENvbnRlbnR9XG4gICAgICA8L0xlZnRBbGlnbmVkU2VjdGlvbj5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlclJpZ2h0QWxpZ25lZENvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByaWdodEFsaWduZWRDb250ZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmlnaHRBbGlnbmVkU2VjdGlvbiBjbGFzc05hbWU9XCJyaWdodC1hbGlnbmVkLXNlY3Rpb25cIj5cbiAgICAgICAgeyEhcmlnaHRBbGlnbmVkQ29udGVudCAmJiByaWdodEFsaWduZWRDb250ZW50fVxuICAgICAgICB7dGhpcy5yZW5kZXJNZW51KCl9XG4gICAgICA8L1JpZ2h0QWxpZ25lZFNlY3Rpb24+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXJNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaWQsIG1lbnVJdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgISFtZW51SXRlbXMubGVuZ3RoICYmXG4gICAgICA8RHJvcGRvd25NZW51XG4gICAgICAgIGlkPXtgJHtpZH1fZmlsdGVyaW5nLXBhbmUtZHJvcGRvd24tbWVudWB9XG4gICAgICAgIG1lbnVJdGVtcz17bWVudUl0ZW1zfVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlckxlZnRBbmRSaWdodCA9ICgpID0+IChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7dGhpcy5yZW5kZXJMZWZ0QWxpZ25lZENvbnRlbnQoKX1cbiAgICAgIHt0aGlzLnJlbmRlclJpZ2h0QWxpZ25lZENvbnRlbnQoKX1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xuXG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5oYXNUYWJzKCkgPyB0aGlzLnJlbmRlck5hdmJhcigpIDogdGhpcy5yZW5kZXJMZWZ0QW5kUmlnaHQoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPEZpbHRlcmluZ1BhbmVTZWN0aW9uIGlkPXt0aGlzLnByb3BzLmlkfSBjbGFzc05hbWU9e2BvYy1jbS1maWx0ZXJpbmctcGFuZSAke3RoaXMucHJvcHMuY2xhc3NOYW1lfWB9PlxuICAgICAgICAgIHsgY29udGVudCB9XG4gICAgICAgIDwvRmlsdGVyaW5nUGFuZVNlY3Rpb24+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5GaWx0ZXJpbmdQYW5lLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRhYnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYWN0aXZlS2V5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGxpc3Q6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLFxuICAgIHNob3dOYXZJdGVtQm9yZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93TmF2SXRlbVRvb2x0aXA6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgfSksXG4gIGxlZnRBbGlnbmVkQ29udGVudDogUHJvcFR5cGVzLm5vZGUsXG4gIHJpZ2h0QWxpZ25lZENvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLFxuICBtZW51SXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuc2hhcGUoe30pLFxuICBdKSksXG59O1xuXG5GaWx0ZXJpbmdQYW5lLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGFiczoge1xuICAgIGFjdGl2ZUtleTogMCxcbiAgICBsaXN0OiBbXSxcbiAgICBzaG93TmF2SXRlbUJvcmRlcjogZmFsc2UsXG4gICAgc2hvd05hdkl0ZW1Ub29sdGlwOiB0cnVlLFxuICAgIG9uU2VsZWN0OiBudWxsLFxuICB9LFxuICBsZWZ0QWxpZ25lZENvbnRlbnQ6IG51bGwsXG4gIHJpZ2h0QWxpZ25lZENvbnRlbnQ6IG51bGwsXG4gIG1lbnVJdGVtczogW10sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJpbmdQYW5lO1xuIl19