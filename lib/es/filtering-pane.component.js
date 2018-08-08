var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ', ';\n  width: calc(100% - 2 * ', ');\n  margin: ', ' ', ' 0 ', ';\n  padding: ', ';\n  .responsive-navbar-container {\n    flex: 1 1 100%;    \n  }\n'], ['\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ', ';\n  width: calc(100% - 2 * ', ');\n  margin: ', ' ', ' 0 ', ';\n  padding: ', ';\n  .responsive-navbar-container {\n    flex: 1 1 100%;    \n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex: 1 1 100%;\n  &.right {\n    justify-content: flex-end;\n  }\n'], ['\n  display: flex;\n  flex: 1 1 100%;\n  &.right {\n    justify-content: flex-end;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  justify-content: flex-end;\n'], ['\n  justify-content: flex-end;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveNavbar from '@opuscapita/react-responsive-navbar';
import { DropdownMenu } from '@opuscapita/react-dropdown';

import { theme } from '@opuscapita/oc-cm-common-layouts';

var FilteringPaneSection = styled.div(_templateObject, theme.contentBackgroundColor, theme.gutterWidth, theme.gutterWidth, theme.gutterWidth, theme.gutterWidth, theme.gutterWidth);

var AlignedSection = styled.div(_templateObject2);

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


      return !!list.length && React.createElement(ResponsiveNavbar, {
        activeKey: activeKey,
        list: list,
        showNavItemBorder: showNavItemBorder,
        showNavItemTooltip: showNavItemTooltip,
        onSelect: onSelect
      });
    }, _this.renderLeftAlignedContent = function () {
      return !!_this.props.leftAlignedContent && React.createElement(
        AlignedSection,
        { className: 'left-aligned-section' },
        _this.props.leftAlignedContent
      );
    }, _this.renderRightAlignedContent = function () {
      return !!_this.props.rightAlignedContent && React.createElement(
        RightAlignedSection,
        { className: 'right-aligned-sectio' },
        _this.props.rightAlignedContent
      );
    }, _this.renderMenu = function () {
      return !!_this.props.menuItems.length && React.createElement(DropdownMenu, {
        id: _this.props.id + '_filtering-pane-dropdown-menu',
        menuItems: _this.props.menuItems
      });
    }, _this.render = function () {
      return React.createElement(
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
}(React.PureComponent);

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

export default FilteringPane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maWx0ZXJpbmctcGFuZS5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsIlJlYWN0IiwiUHJvcFR5cGVzIiwiUmVzcG9uc2l2ZU5hdmJhciIsIkRyb3Bkb3duTWVudSIsInRoZW1lIiwiRmlsdGVyaW5nUGFuZVNlY3Rpb24iLCJkaXYiLCJjb250ZW50QmFja2dyb3VuZENvbG9yIiwiZ3V0dGVyV2lkdGgiLCJBbGlnbmVkU2VjdGlvbiIsIlJpZ2h0QWxpZ25lZFNlY3Rpb24iLCJleHRlbmQiLCJGaWx0ZXJpbmdQYW5lIiwicmVuZGVyTmF2YmFyIiwicHJvcHMiLCJ0YWJzIiwiYWN0aXZlS2V5IiwibGlzdCIsIm9uU2VsZWN0Iiwic2hvd05hdkl0ZW1Cb3JkZXIiLCJzaG93TmF2SXRlbVRvb2x0aXAiLCJsZW5ndGgiLCJyZW5kZXJMZWZ0QWxpZ25lZENvbnRlbnQiLCJsZWZ0QWxpZ25lZENvbnRlbnQiLCJyZW5kZXJSaWdodEFsaWduZWRDb250ZW50IiwicmlnaHRBbGlnbmVkQ29udGVudCIsInJlbmRlck1lbnUiLCJtZW51SXRlbXMiLCJpZCIsInJlbmRlciIsImNsYXNzTmFtZSIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QixxQ0FBN0I7QUFDQSxTQUFTQyxZQUFULFFBQTZCLDRCQUE3Qjs7QUFFQSxTQUFTQyxLQUFULFFBQXNCLGtDQUF0Qjs7QUFFQSxJQUFNQyx1QkFBdUJOLE9BQU9PLEdBQTlCLGtCQUlnQkYsTUFBTUcsc0JBSnRCLEVBS3FCSCxNQUFNSSxXQUwzQixFQU1NSixNQUFNSSxXQU5aLEVBTTJCSixNQUFNSSxXQU5qQyxFQU1rREosTUFBTUksV0FOeEQsRUFPT0osTUFBTUksV0FQYixDQUFOOztBQWFBLElBQU1DLGlCQUFpQlYsT0FBT08sR0FBeEIsa0JBQU47O0FBUUEsSUFBTUksc0JBQXNCRCxlQUFlRSxNQUFyQyxrQkFBTjs7SUFJTUMsYTs7Ozs7Ozs7Ozs7O2dLQUNKQyxZLEdBQWUsWUFBTTtBQUFBLDZCQU9mLE1BQUtDLEtBQUwsQ0FBV0MsSUFQSTtBQUFBLFVBRWpCQyxTQUZpQixvQkFFakJBLFNBRmlCO0FBQUEsVUFHakJDLElBSGlCLG9CQUdqQkEsSUFIaUI7QUFBQSxVQUlqQkMsUUFKaUIsb0JBSWpCQSxRQUppQjtBQUFBLFVBS2pCQyxpQkFMaUIsb0JBS2pCQSxpQkFMaUI7QUFBQSxVQU1qQkMsa0JBTmlCLG9CQU1qQkEsa0JBTmlCOzs7QUFTbkIsYUFBUSxDQUFDLENBQUNILEtBQUtJLE1BQVAsSUFDTixvQkFBQyxnQkFBRDtBQUNFLG1CQUFXTCxTQURiO0FBRUUsY0FBTUMsSUFGUjtBQUdFLDJCQUFtQkUsaUJBSHJCO0FBSUUsNEJBQW9CQyxrQkFKdEI7QUFLRSxrQkFBVUY7QUFMWixRQURGO0FBU0QsSyxRQUVESSx3QixHQUEyQjtBQUFBLGFBQ3pCLENBQUMsQ0FBQyxNQUFLUixLQUFMLENBQVdTLGtCQUFiLElBQ0E7QUFBQyxzQkFBRDtBQUFBLFVBQWdCLFdBQVUsc0JBQTFCO0FBQ0csY0FBS1QsS0FBTCxDQUFXUztBQURkLE9BRnlCO0FBQUEsSyxRQU8zQkMseUIsR0FBNEI7QUFBQSxhQUMxQixDQUFDLENBQUMsTUFBS1YsS0FBTCxDQUFXVyxtQkFBYixJQUNBO0FBQUMsMkJBQUQ7QUFBQSxVQUFxQixXQUFVLHNCQUEvQjtBQUNHLGNBQUtYLEtBQUwsQ0FBV1c7QUFEZCxPQUYwQjtBQUFBLEssUUFPNUJDLFUsR0FBYTtBQUFBLGFBQ1gsQ0FBQyxDQUFDLE1BQUtaLEtBQUwsQ0FBV2EsU0FBWCxDQUFxQk4sTUFBdkIsSUFDQSxvQkFBQyxZQUFEO0FBQ0UsWUFBTyxNQUFLUCxLQUFMLENBQVdjLEVBQWxCLGtDQURGO0FBRUUsbUJBQVcsTUFBS2QsS0FBTCxDQUFXYTtBQUZ4QixRQUZXO0FBQUEsSyxRQVFiRSxNLEdBQVM7QUFBQSxhQUNQO0FBQUMsNEJBQUQ7QUFBQSxVQUFzQixJQUFJLE1BQUtmLEtBQUwsQ0FBV2MsRUFBckMsRUFBeUMscUNBQW1DLE1BQUtkLEtBQUwsQ0FBV2dCLFNBQXZGO0FBQ0csY0FBS2pCLFlBQUwsRUFESDtBQUVHLGNBQUtTLHdCQUFMLEVBRkg7QUFHRyxjQUFLRSx5QkFBTCxFQUhIO0FBSUcsY0FBS0UsVUFBTDtBQUpILE9BRE87QUFBQSxLOzs7O0VBM0NpQjFCLE1BQU0rQixhOztBQXdFbENuQixjQUFjb0IsWUFBZCxHQUE2QjtBQUMzQmpCLFFBQU07QUFDSkMsZUFBVyxDQURQO0FBRUpDLFVBQU0sRUFGRjtBQUdKRSx1QkFBbUIsS0FIZjtBQUlKQyx3QkFBb0IsSUFKaEI7QUFLSkYsY0FBVTtBQUxOLEdBRHFCO0FBUTNCSyxzQkFBb0IsSUFSTztBQVMzQkUsdUJBQXFCLElBVE07QUFVM0JFLGFBQVc7QUFWZ0IsQ0FBN0I7O0FBYUEsZUFBZWYsYUFBZiIsImZpbGUiOiJmaWx0ZXJpbmctcGFuZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlc3BvbnNpdmVOYXZiYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtcmVzcG9uc2l2ZS1uYXZiYXInO1xuaW1wb3J0IHsgRHJvcGRvd25NZW51IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZHJvcGRvd24nO1xuXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcblxuY29uc3QgRmlsdGVyaW5nUGFuZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29udGVudEJhY2tncm91bmRDb2xvcn07XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyICogJHt0aGVtZS5ndXR0ZXJXaWR0aH0pO1xuICBtYXJnaW46ICR7dGhlbWUuZ3V0dGVyV2lkdGh9ICR7dGhlbWUuZ3V0dGVyV2lkdGh9IDAgJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG4gIHBhZGRpbmc6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuICAucmVzcG9uc2l2ZS1uYXZiYXItY29udGFpbmVyIHtcbiAgICBmbGV4OiAxIDEgMTAwJTsgICAgXG4gIH1cbmA7XG5cbmNvbnN0IEFsaWduZWRTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAxIDEwMCU7XG4gICYucmlnaHQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbmA7XG5cbmNvbnN0IFJpZ2h0QWxpZ25lZFNlY3Rpb24gPSBBbGlnbmVkU2VjdGlvbi5leHRlbmRgXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5gO1xuXG5jbGFzcyBGaWx0ZXJpbmdQYW5lIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlck5hdmJhciA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBhY3RpdmVLZXksXG4gICAgICBsaXN0LFxuICAgICAgb25TZWxlY3QsXG4gICAgICBzaG93TmF2SXRlbUJvcmRlcixcbiAgICAgIHNob3dOYXZJdGVtVG9vbHRpcCxcbiAgICB9ID0gdGhpcy5wcm9wcy50YWJzO1xuXG4gICAgcmV0dXJuICghIWxpc3QubGVuZ3RoICYmXG4gICAgICA8UmVzcG9uc2l2ZU5hdmJhclxuICAgICAgICBhY3RpdmVLZXk9e2FjdGl2ZUtleX1cbiAgICAgICAgbGlzdD17bGlzdH1cbiAgICAgICAgc2hvd05hdkl0ZW1Cb3JkZXI9e3Nob3dOYXZJdGVtQm9yZGVyfVxuICAgICAgICBzaG93TmF2SXRlbVRvb2x0aXA9e3Nob3dOYXZJdGVtVG9vbHRpcH1cbiAgICAgICAgb25TZWxlY3Q9e29uU2VsZWN0fVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlckxlZnRBbGlnbmVkQ29udGVudCA9ICgpID0+IChcbiAgICAhIXRoaXMucHJvcHMubGVmdEFsaWduZWRDb250ZW50ICYmXG4gICAgPEFsaWduZWRTZWN0aW9uIGNsYXNzTmFtZT1cImxlZnQtYWxpZ25lZC1zZWN0aW9uXCI+XG4gICAgICB7dGhpcy5wcm9wcy5sZWZ0QWxpZ25lZENvbnRlbnR9XG4gICAgPC9BbGlnbmVkU2VjdGlvbj5cbiAgKTtcblxuICByZW5kZXJSaWdodEFsaWduZWRDb250ZW50ID0gKCkgPT4gKFxuICAgICEhdGhpcy5wcm9wcy5yaWdodEFsaWduZWRDb250ZW50ICYmXG4gICAgPFJpZ2h0QWxpZ25lZFNlY3Rpb24gY2xhc3NOYW1lPVwicmlnaHQtYWxpZ25lZC1zZWN0aW9cIj5cbiAgICAgIHt0aGlzLnByb3BzLnJpZ2h0QWxpZ25lZENvbnRlbnR9XG4gICAgPC9SaWdodEFsaWduZWRTZWN0aW9uPlxuICApO1xuXG4gIHJlbmRlck1lbnUgPSAoKSA9PiAoXG4gICAgISF0aGlzLnByb3BzLm1lbnVJdGVtcy5sZW5ndGggJiZcbiAgICA8RHJvcGRvd25NZW51XG4gICAgICBpZD17YCR7dGhpcy5wcm9wcy5pZH1fZmlsdGVyaW5nLXBhbmUtZHJvcGRvd24tbWVudWB9XG4gICAgICBtZW51SXRlbXM9e3RoaXMucHJvcHMubWVudUl0ZW1zfVxuICAgIC8+XG4gICk7XG5cbiAgcmVuZGVyID0gKCkgPT4gKFxuICAgIDxGaWx0ZXJpbmdQYW5lU2VjdGlvbiBpZD17dGhpcy5wcm9wcy5pZH0gY2xhc3NOYW1lPXtgb2MtY20tZmlsdGVyaW5nLXBhbmUgJHt0aGlzLnByb3BzLmNsYXNzTmFtZX1gfT5cbiAgICAgIHt0aGlzLnJlbmRlck5hdmJhcigpfVxuICAgICAge3RoaXMucmVuZGVyTGVmdEFsaWduZWRDb250ZW50KCl9XG4gICAgICB7dGhpcy5yZW5kZXJSaWdodEFsaWduZWRDb250ZW50KCl9XG4gICAgICB7dGhpcy5yZW5kZXJNZW51KCl9XG4gICAgPC9GaWx0ZXJpbmdQYW5lU2VjdGlvbj5cbiAgKTtcbn1cblxuRmlsdGVyaW5nUGFuZS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0YWJzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGFjdGl2ZUtleTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBsaXN0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKSxcbiAgICBzaG93TmF2SXRlbUJvcmRlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd05hdkl0ZW1Ub29sdGlwOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIH0pLFxuICBsZWZ0QWxpZ25lZENvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLFxuICByaWdodEFsaWduZWRDb250ZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgbWVudUl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgXSkpLFxufTtcblxuRmlsdGVyaW5nUGFuZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHRhYnM6IHtcbiAgICBhY3RpdmVLZXk6IDAsXG4gICAgbGlzdDogW10sXG4gICAgc2hvd05hdkl0ZW1Cb3JkZXI6IGZhbHNlLFxuICAgIHNob3dOYXZJdGVtVG9vbHRpcDogdHJ1ZSxcbiAgICBvblNlbGVjdDogbnVsbCxcbiAgfSxcbiAgbGVmdEFsaWduZWRDb250ZW50OiBudWxsLFxuICByaWdodEFsaWduZWRDb250ZW50OiBudWxsLFxuICBtZW51SXRlbXM6IFtdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyaW5nUGFuZTtcbiJdfQ==