var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  background-color: ', ';\n  width: calc(100% - 2 * ', ');\n  margin: ', ' ', ' 0 ', ';\n  padding: ', ';\n'], ['\n  display: flex;\n  background-color: ', ';\n  width: calc(100% - 2 * ', ');\n  margin: ', ' ', ' 0 ', ';\n  padding: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  display: flex;\n'], ['\n  display: flex;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  justify-content: flex-start;\n'], ['\n  justify-content: flex-start;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  justify-content: flex-end;\n  align-items: flex-end;\n  align-self: flex-end;\n  flex: 1 1 20%;\n'], ['\n  justify-content: flex-end;\n  align-items: flex-end;\n  align-self: flex-end;\n  flex: 1 1 20%;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import ResponsiveNavbar from '@opuscapita/react-responsive-navbar';
import { DropdownMenu } from '@opuscapita/react-dropdown';
import { theme } from '@opuscapita/oc-cm-common-layouts';

var FilteringPaneSection = styled.div(_templateObject, theme.contentBackgroundColor, theme.gutterWidth, theme.gutterWidth, theme.gutterWidth, theme.gutterWidth, theme.gutterWidth);

var AlignedSection = styled.div(_templateObject2);

var LeftAlignedSection = styled(AlignedSection)(_templateObject3);

var RightAlignedSection = styled(AlignedSection)(_templateObject4);

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


      return !!list.length && React.createElement(ResponsiveNavbar, {
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

      return React.createElement(
        LeftAlignedSection,
        { className: 'left-aligned-section' },
        !!leftAlignedContent && leftAlignedContent
      );
    }, _this.renderRightAlignedContent = function () {
      var rightAlignedContent = _this.props.rightAlignedContent;

      return React.createElement(
        RightAlignedSection,
        { className: 'right-aligned-section' },
        !!rightAlignedContent && rightAlignedContent,
        _this.renderMenu()
      );
    }, _this.renderMenu = function () {
      var _this$props = _this.props,
          id = _this$props.id,
          menuItems = _this$props.menuItems;

      return !!menuItems.length && React.createElement(DropdownMenu, {
        id: id + '_filtering-pane-dropdown-menu',
        menuItems: menuItems
      });
    }, _this.renderLeftAndRight = function () {
      return React.createElement(
        React.Fragment,
        null,
        _this.renderLeftAlignedContent(),
        _this.renderRightAlignedContent()
      );
    }, _this.render = function () {
      var content = _this.hasTabs() ? _this.renderNavbar() : _this.renderLeftAndRight();
      return React.createElement(
        ThemeProvider,
        { theme: theme },
        React.createElement(
          FilteringPaneSection,
          { id: _this.props.id, className: 'oc-cm-filtering-pane ' + _this.props.className },
          content
        )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maWx0ZXJpbmctcGFuZS5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiVGhlbWVQcm92aWRlciIsIlJlc3BvbnNpdmVOYXZiYXIiLCJEcm9wZG93bk1lbnUiLCJ0aGVtZSIsIkZpbHRlcmluZ1BhbmVTZWN0aW9uIiwiZGl2IiwiY29udGVudEJhY2tncm91bmRDb2xvciIsImd1dHRlcldpZHRoIiwiQWxpZ25lZFNlY3Rpb24iLCJMZWZ0QWxpZ25lZFNlY3Rpb24iLCJSaWdodEFsaWduZWRTZWN0aW9uIiwiRmlsdGVyaW5nUGFuZSIsImhhc1RhYnMiLCJwcm9wcyIsInRhYnMiLCJsaXN0IiwibGVuZ3RoIiwicmVuZGVyTmF2YmFyIiwiYWN0aXZlS2V5Iiwib25TZWxlY3QiLCJzaG93TmF2SXRlbUJvcmRlciIsInNob3dOYXZJdGVtVG9vbHRpcCIsInJlbmRlckxlZnRBbGlnbmVkQ29udGVudCIsInJlbmRlclJpZ2h0QWxpZ25lZENvbnRlbnQiLCJsZWZ0QWxpZ25lZENvbnRlbnQiLCJyaWdodEFsaWduZWRDb250ZW50IiwicmVuZGVyTWVudSIsImlkIiwibWVudUl0ZW1zIiwicmVuZGVyTGVmdEFuZFJpZ2h0IiwicmVuZGVyIiwiY29udGVudCIsImNsYXNzTmFtZSIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsSUFBaUJDLGFBQWpCLFFBQXNDLG1CQUF0Qzs7QUFFQSxPQUFPQyxnQkFBUCxNQUE2QixxQ0FBN0I7QUFDQSxTQUFTQyxZQUFULFFBQTZCLDRCQUE3QjtBQUNBLFNBQVNDLEtBQVQsUUFBc0Isa0NBQXRCOztBQUVBLElBQU1DLHVCQUF1QkwsT0FBT00sR0FBOUIsa0JBRWdCRixNQUFNRyxzQkFG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QUNKSSxlQUFXLENBRFA7QUFFSkgsVUFBTSxFQUZGO0FBR0pLLHVCQUFtQixLQUhmO0FBSUpDLHdCQUFvQixJQUpoQjtBQUtKRixjQUFVO0FBTE4sR0FEcUI7QUFRM0JLLHNCQUFvQixJQVJPO0FBUzNCQyx1QkFBcUIsSUFUTTtBQVUzQkcsYUFBVztBQVZnQixDQUE3Qjs7QUFhQSxlQUFlakIsYUFBZiIsImZpbGUiOiJmaWx0ZXJpbmctcGFuZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IFJlc3BvbnNpdmVOYXZiYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtcmVzcG9uc2l2ZS1uYXZiYXInO1xuaW1wb3J0IHsgRHJvcGRvd25NZW51IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZHJvcGRvd24nO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5cbmNvbnN0IEZpbHRlcmluZ1BhbmVTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb250ZW50QmFja2dyb3VuZENvbG9yfTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAke3RoZW1lLmd1dHRlcldpZHRofSk7XG4gIG1hcmdpbjogJHt0aGVtZS5ndXR0ZXJXaWR0aH0gJHt0aGVtZS5ndXR0ZXJXaWR0aH0gMCAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgcGFkZGluZzogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG5gO1xuXG5jb25zdCBBbGlnbmVkU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBMZWZ0QWxpZ25lZFNlY3Rpb24gPSBzdHlsZWQoQWxpZ25lZFNlY3Rpb24pYFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5gO1xuXG5jb25zdCBSaWdodEFsaWduZWRTZWN0aW9uID0gc3R5bGVkKEFsaWduZWRTZWN0aW9uKWBcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgZmxleDogMSAxIDIwJTtcbmA7XG5cbmNsYXNzIEZpbHRlcmluZ1BhbmUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgaGFzVGFicyA9ICgpID0+ICh0aGlzLnByb3BzLnRhYnMgJiYgdGhpcy5wcm9wcy50YWJzICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnByb3BzLnRhYnMubGlzdC5sZW5ndGggIT09IDApO1xuXG4gIHJlbmRlck5hdmJhciA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBhY3RpdmVLZXksXG4gICAgICBsaXN0LFxuICAgICAgb25TZWxlY3QsXG4gICAgICBzaG93TmF2SXRlbUJvcmRlcixcbiAgICAgIHNob3dOYXZJdGVtVG9vbHRpcCxcbiAgICB9ID0gdGhpcy5wcm9wcy50YWJzO1xuXG4gICAgcmV0dXJuICghIWxpc3QubGVuZ3RoICYmXG4gICAgICA8UmVzcG9uc2l2ZU5hdmJhclxuICAgICAgICBhY3RpdmVLZXk9e2FjdGl2ZUtleX1cbiAgICAgICAgbGlzdD17bGlzdH1cbiAgICAgICAgc2hvd05hdkl0ZW1Cb3JkZXI9e3Nob3dOYXZJdGVtQm9yZGVyfVxuICAgICAgICBzaG93TmF2SXRlbVRvb2x0aXA9e3Nob3dOYXZJdGVtVG9vbHRpcH1cbiAgICAgICAgb25TZWxlY3Q9e29uU2VsZWN0fVxuICAgICAgICBjb21wb25lbnRMZWZ0PXt0aGlzLnJlbmRlckxlZnRBbGlnbmVkQ29udGVudCgpfVxuICAgICAgICBjb21wb25lbnRSaWdodD17dGhpcy5yZW5kZXJSaWdodEFsaWduZWRDb250ZW50KCl9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyTGVmdEFsaWduZWRDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbGVmdEFsaWduZWRDb250ZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8TGVmdEFsaWduZWRTZWN0aW9uIGNsYXNzTmFtZT1cImxlZnQtYWxpZ25lZC1zZWN0aW9uXCI+XG4gICAgICAgIHshIWxlZnRBbGlnbmVkQ29udGVudCAmJiBsZWZ0QWxpZ25lZENvbnRlbnR9XG4gICAgICA8L0xlZnRBbGlnbmVkU2VjdGlvbj5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlclJpZ2h0QWxpZ25lZENvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByaWdodEFsaWduZWRDb250ZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmlnaHRBbGlnbmVkU2VjdGlvbiBjbGFzc05hbWU9XCJyaWdodC1hbGlnbmVkLXNlY3Rpb25cIj5cbiAgICAgICAgeyEhcmlnaHRBbGlnbmVkQ29udGVudCAmJiByaWdodEFsaWduZWRDb250ZW50fVxuICAgICAgICB7dGhpcy5yZW5kZXJNZW51KCl9XG4gICAgICA8L1JpZ2h0QWxpZ25lZFNlY3Rpb24+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXJNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaWQsIG1lbnVJdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgISFtZW51SXRlbXMubGVuZ3RoICYmXG4gICAgICA8RHJvcGRvd25NZW51XG4gICAgICAgIGlkPXtgJHtpZH1fZmlsdGVyaW5nLXBhbmUtZHJvcGRvd24tbWVudWB9XG4gICAgICAgIG1lbnVJdGVtcz17bWVudUl0ZW1zfVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlckxlZnRBbmRSaWdodCA9ICgpID0+IChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7dGhpcy5yZW5kZXJMZWZ0QWxpZ25lZENvbnRlbnQoKX1cbiAgICAgIHt0aGlzLnJlbmRlclJpZ2h0QWxpZ25lZENvbnRlbnQoKX1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xuXG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5oYXNUYWJzKCkgPyB0aGlzLnJlbmRlck5hdmJhcigpIDogdGhpcy5yZW5kZXJMZWZ0QW5kUmlnaHQoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPEZpbHRlcmluZ1BhbmVTZWN0aW9uIGlkPXt0aGlzLnByb3BzLmlkfSBjbGFzc05hbWU9e2BvYy1jbS1maWx0ZXJpbmctcGFuZSAke3RoaXMucHJvcHMuY2xhc3NOYW1lfWB9PlxuICAgICAgICAgIHsgY29udGVudCB9XG4gICAgICAgIDwvRmlsdGVyaW5nUGFuZVNlY3Rpb24+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5GaWx0ZXJpbmdQYW5lLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRhYnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYWN0aXZlS2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe30pLFxuICAgIF0pLFxuICAgIGxpc3Q6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLFxuICAgIHNob3dOYXZJdGVtQm9yZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93TmF2SXRlbVRvb2x0aXA6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgfSksXG4gIGxlZnRBbGlnbmVkQ29udGVudDogUHJvcFR5cGVzLm5vZGUsXG4gIHJpZ2h0QWxpZ25lZENvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLFxuICBtZW51SXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuc2hhcGUoe30pLFxuICBdKSksXG59O1xuXG5GaWx0ZXJpbmdQYW5lLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGFiczoge1xuICAgIGFjdGl2ZUtleTogMCxcbiAgICBsaXN0OiBbXSxcbiAgICBzaG93TmF2SXRlbUJvcmRlcjogZmFsc2UsXG4gICAgc2hvd05hdkl0ZW1Ub29sdGlwOiB0cnVlLFxuICAgIG9uU2VsZWN0OiBudWxsLFxuICB9LFxuICBsZWZ0QWxpZ25lZENvbnRlbnQ6IG51bGwsXG4gIHJpZ2h0QWxpZ25lZENvbnRlbnQ6IG51bGwsXG4gIG1lbnVJdGVtczogW10sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJpbmdQYW5lO1xuIl19