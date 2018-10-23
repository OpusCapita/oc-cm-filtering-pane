var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  background-color: ', ';\n  width: calc(100% - 2 * ', ');\n  margin: ', ' ', ' 0 ', ';\n  padding: ', ';\n'], ['\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  background-color: ', ';\n  width: calc(100% - 2 * ', ');\n  margin: ', ' ', ' 0 ', ';\n  padding: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  display: flex;\n'], ['\n  display: flex;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  justify-content: flex-start;\n  flex-wrap: wrap;\n'], ['\n  justify-content: flex-start;\n  flex-wrap: wrap;\n']),
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
      var leftAlignedContent = _this.props.leftAlignedContent;

      return React.createElement(
        LeftAlignedSection,
        { className: 'left-aligned-section' },
        _this.renderNavbar(),
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
    }, _this.render = function () {
      return React.createElement(
        ThemeProvider,
        { theme: theme },
        React.createElement(
          FilteringPaneSection,
          { id: _this.props.id, className: 'oc-cm-filtering-pane ' + _this.props.className },
          _this.renderLeftAlignedContent(),
          _this.renderRightAlignedContent()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maWx0ZXJpbmctcGFuZS5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiVGhlbWVQcm92aWRlciIsIlJlc3BvbnNpdmVOYXZiYXIiLCJEcm9wZG93bk1lbnUiLCJ0aGVtZSIsIkZpbHRlcmluZ1BhbmVTZWN0aW9uIiwiZGl2IiwiY29udGVudEJhY2tncm91bmRDb2xvciIsImd1dHRlcldpZHRoIiwiQWxpZ25lZFNlY3Rpb24iLCJMZWZ0QWxpZ25lZFNlY3Rpb24iLCJSaWdodEFsaWduZWRTZWN0aW9uIiwiRmlsdGVyaW5nUGFuZSIsInJlbmRlck5hdmJhciIsInByb3BzIiwidGFicyIsImFjdGl2ZUtleSIsImxpc3QiLCJvblNlbGVjdCIsInNob3dOYXZJdGVtQm9yZGVyIiwic2hvd05hdkl0ZW1Ub29sdGlwIiwibGVuZ3RoIiwicmVuZGVyTGVmdEFsaWduZWRDb250ZW50IiwibGVmdEFsaWduZWRDb250ZW50IiwicmVuZGVyUmlnaHRBbGlnbmVkQ29udGVudCIsInJpZ2h0QWxpZ25lZENvbnRlbnQiLCJyZW5kZXJNZW51IiwiaWQiLCJtZW51SXRlbXMiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLElBQWlCQyxhQUFqQixRQUFzQyxtQkFBdEM7O0FBRUEsT0FBT0MsZ0JBQVAsTUFBNkIscUNBQTdCO0FBQ0EsU0FBU0MsWUFBVCxRQUE2Qiw0QkFBN0I7QUFDQSxTQUFTQyxLQUFULFFBQXNCLGtDQUF0Qjs7QUFFQSxJQUFNQyx1QkFBdUJMLE9BQU9NLEdBQTlCLGtCQUtnQkYsTUFBTUcsc0JBTHRCLEVBTXFCSCxNQUFNSSxXQU4zQixFQU9NSixNQUFNSSxXQVBaLEVBTzJCSixNQUFNSSxXQVBqQyxFQU9rREosTUFBTUksV0FQeEQsRUFRT0osTUFBTUksV0FSYixDQUFOOztBQVdBLElBQU1DLGlCQUFpQlQsT0FBT00sR0FBeEIsa0JBQU47O0FBSUEsSUFBTUkscUJBQXFCVixPQUFPUyxjQUFQLENBQXJCLGtCQUFOOztBQUtBLElBQU1FLHNCQUFzQlgsT0FBT1MsY0FBUCxDQUF0QixrQkFBTjs7SUFPTUcsYTs7Ozs7Ozs7Ozs7O2dLQUNKQyxZLEdBQWUsWUFBTTtBQUFBLDZCQU9mLE1BQUtDLEtBQUwsQ0FBV0MsSUFQSTtBQUFBLFVBRWpCQyxTQUZpQixvQkFFakJBLFNBRmlCO0FBQUEsVUFHakJDLElBSGlCLG9CQUdqQkEsSUFIaUI7QUFBQSxVQUlqQkMsUUFKaUIsb0JBSWpCQSxRQUppQjtBQUFBLFVBS2pCQyxpQkFMaUIsb0JBS2pCQSxpQkFMaUI7QUFBQSxVQU1qQkMsa0JBTmlCLG9CQU1qQkEsa0JBTmlCOzs7QUFTbkIsYUFBUSxDQUFDLENBQUNILEtBQUtJLE1BQVAsSUFDTixvQkFBQyxnQkFBRDtBQUNFLG1CQUFXTCxTQURiO0FBRUUsY0FBTUMsSUFGUjtBQUdFLDJCQUFtQkUsaUJBSHJCO0FBSUUsNEJBQW9CQyxrQkFKdEI7QUFLRSxrQkFBVUY7QUFMWixRQURGO0FBU0QsSyxRQUVESSx3QixHQUEyQixZQUFNO0FBQUEsVUFDdkJDLGtCQUR1QixHQUNBLE1BQUtULEtBREwsQ0FDdkJTLGtCQUR1Qjs7QUFFL0IsYUFDRTtBQUFDLDBCQUFEO0FBQUEsVUFBb0IsV0FBVSxzQkFBOUI7QUFDRyxjQUFLVixZQUFMLEVBREg7QUFFRyxTQUFDLENBQUNVLGtCQUFGLElBQXdCQTtBQUYzQixPQURGO0FBTUQsSyxRQUVEQyx5QixHQUE0QixZQUFNO0FBQUEsVUFDeEJDLG1CQUR3QixHQUNBLE1BQUtYLEtBREwsQ0FDeEJXLG1CQUR3Qjs7QUFFaEMsYUFDRTtBQUFDLDJCQUFEO0FBQUEsVUFBcUIsV0FBVSx1QkFBL0I7QUFDRyxTQUFDLENBQUNBLG1CQUFGLElBQXlCQSxtQkFENUI7QUFFRyxjQUFLQyxVQUFMO0FBRkgsT0FERjtBQU1ELEssUUFFREEsVSxHQUFhLFlBQU07QUFBQSx3QkFDUyxNQUFLWixLQURkO0FBQUEsVUFDVGEsRUFEUyxlQUNUQSxFQURTO0FBQUEsVUFDTEMsU0FESyxlQUNMQSxTQURLOztBQUVqQixhQUNFLENBQUMsQ0FBQ0EsVUFBVVAsTUFBWixJQUNBLG9CQUFDLFlBQUQ7QUFDRSxZQUFPTSxFQUFQLGtDQURGO0FBRUUsbUJBQVdDO0FBRmIsUUFGRjtBQU9ELEssUUFFREMsTSxHQUFTO0FBQUEsYUFDUDtBQUFDLHFCQUFEO0FBQUEsVUFBZSxPQUFPekIsS0FBdEI7QUFDRTtBQUFDLDhCQUFEO0FBQUEsWUFBc0IsSUFBSSxNQUFLVSxLQUFMLENBQVdhLEVBQXJDLEVBQXlDLHFDQUFtQyxNQUFLYixLQUFMLENBQVdnQixTQUF2RjtBQUNHLGdCQUFLUix3QkFBTCxFQURIO0FBRUcsZ0JBQUtFLHlCQUFMO0FBRkg7QUFERixPQURPO0FBQUEsSzs7OztFQXBEaUIxQixNQUFNaUMsYTs7QUFpRmxDbkIsY0FBY29CLFlBQWQsR0FBNkI7QUFDM0JqQixRQUFNO0FBQ0pDLGVBQVcsQ0FEUDtBQUVKQyxVQUFNLEVBRkY7QUFHSkUsdUJBQW1CLEtBSGY7QUFJSkMsd0JBQW9CLElBSmhCO0FBS0pGLGNBQVU7QUFMTixHQURxQjtBQVEzQkssc0JBQW9CLElBUk87QUFTM0JFLHVCQUFxQixJQVRNO0FBVTNCRyxhQUFXO0FBVmdCLENBQTdCOztBQWFBLGVBQWVoQixhQUFmIiwiZmlsZSI6ImZpbHRlcmluZy1wYW5lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgUmVzcG9uc2l2ZU5hdmJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1yZXNwb25zaXZlLW5hdmJhcic7XG5pbXBvcnQgeyBEcm9wZG93bk1lbnUgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1kcm9wZG93bic7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcblxuY29uc3QgRmlsdGVyaW5nUGFuZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb250ZW50QmFja2dyb3VuZENvbG9yfTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAke3RoZW1lLmd1dHRlcldpZHRofSk7XG4gIG1hcmdpbjogJHt0aGVtZS5ndXR0ZXJXaWR0aH0gJHt0aGVtZS5ndXR0ZXJXaWR0aH0gMCAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgcGFkZGluZzogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG5gO1xuXG5jb25zdCBBbGlnbmVkU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBMZWZ0QWxpZ25lZFNlY3Rpb24gPSBzdHlsZWQoQWxpZ25lZFNlY3Rpb24pYFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbmA7XG5cbmNvbnN0IFJpZ2h0QWxpZ25lZFNlY3Rpb24gPSBzdHlsZWQoQWxpZ25lZFNlY3Rpb24pYFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBmbGV4OiAxIDEgMjAlO1xuYDtcblxuY2xhc3MgRmlsdGVyaW5nUGFuZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICByZW5kZXJOYXZiYXIgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgYWN0aXZlS2V5LFxuICAgICAgbGlzdCxcbiAgICAgIG9uU2VsZWN0LFxuICAgICAgc2hvd05hdkl0ZW1Cb3JkZXIsXG4gICAgICBzaG93TmF2SXRlbVRvb2x0aXAsXG4gICAgfSA9IHRoaXMucHJvcHMudGFicztcblxuICAgIHJldHVybiAoISFsaXN0Lmxlbmd0aCAmJlxuICAgICAgPFJlc3BvbnNpdmVOYXZiYXJcbiAgICAgICAgYWN0aXZlS2V5PXthY3RpdmVLZXl9XG4gICAgICAgIGxpc3Q9e2xpc3R9XG4gICAgICAgIHNob3dOYXZJdGVtQm9yZGVyPXtzaG93TmF2SXRlbUJvcmRlcn1cbiAgICAgICAgc2hvd05hdkl0ZW1Ub29sdGlwPXtzaG93TmF2SXRlbVRvb2x0aXB9XG4gICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXJMZWZ0QWxpZ25lZENvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBsZWZ0QWxpZ25lZENvbnRlbnQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMZWZ0QWxpZ25lZFNlY3Rpb24gY2xhc3NOYW1lPVwibGVmdC1hbGlnbmVkLXNlY3Rpb25cIj5cbiAgICAgICAge3RoaXMucmVuZGVyTmF2YmFyKCl9XG4gICAgICAgIHshIWxlZnRBbGlnbmVkQ29udGVudCAmJiBsZWZ0QWxpZ25lZENvbnRlbnR9XG4gICAgICA8L0xlZnRBbGlnbmVkU2VjdGlvbj5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlclJpZ2h0QWxpZ25lZENvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByaWdodEFsaWduZWRDb250ZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmlnaHRBbGlnbmVkU2VjdGlvbiBjbGFzc05hbWU9XCJyaWdodC1hbGlnbmVkLXNlY3Rpb25cIj5cbiAgICAgICAgeyEhcmlnaHRBbGlnbmVkQ29udGVudCAmJiByaWdodEFsaWduZWRDb250ZW50fVxuICAgICAgICB7dGhpcy5yZW5kZXJNZW51KCl9XG4gICAgICA8L1JpZ2h0QWxpZ25lZFNlY3Rpb24+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXJNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaWQsIG1lbnVJdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgISFtZW51SXRlbXMubGVuZ3RoICYmXG4gICAgICA8RHJvcGRvd25NZW51XG4gICAgICAgIGlkPXtgJHtpZH1fZmlsdGVyaW5nLXBhbmUtZHJvcGRvd24tbWVudWB9XG4gICAgICAgIG1lbnVJdGVtcz17bWVudUl0ZW1zfVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlciA9ICgpID0+IChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPEZpbHRlcmluZ1BhbmVTZWN0aW9uIGlkPXt0aGlzLnByb3BzLmlkfSBjbGFzc05hbWU9e2BvYy1jbS1maWx0ZXJpbmctcGFuZSAke3RoaXMucHJvcHMuY2xhc3NOYW1lfWB9PlxuICAgICAgICB7dGhpcy5yZW5kZXJMZWZ0QWxpZ25lZENvbnRlbnQoKX1cbiAgICAgICAge3RoaXMucmVuZGVyUmlnaHRBbGlnbmVkQ29udGVudCgpfVxuICAgICAgPC9GaWx0ZXJpbmdQYW5lU2VjdGlvbj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG5cbkZpbHRlcmluZ1BhbmUucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGFiczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhY3RpdmVLZXk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbGlzdDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSksXG4gICAgc2hvd05hdkl0ZW1Cb3JkZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dOYXZJdGVtVG9vbHRpcDogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICB9KSxcbiAgbGVmdEFsaWduZWRDb250ZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgcmlnaHRBbGlnbmVkQ29udGVudDogUHJvcFR5cGVzLm5vZGUsXG4gIG1lbnVJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5zaGFwZSh7fSksXG4gIF0pKSxcbn07XG5cbkZpbHRlcmluZ1BhbmUuZGVmYXVsdFByb3BzID0ge1xuICB0YWJzOiB7XG4gICAgYWN0aXZlS2V5OiAwLFxuICAgIGxpc3Q6IFtdLFxuICAgIHNob3dOYXZJdGVtQm9yZGVyOiBmYWxzZSxcbiAgICBzaG93TmF2SXRlbVRvb2x0aXA6IHRydWUsXG4gICAgb25TZWxlY3Q6IG51bGwsXG4gIH0sXG4gIGxlZnRBbGlnbmVkQ29udGVudDogbnVsbCxcbiAgcmlnaHRBbGlnbmVkQ29udGVudDogbnVsbCxcbiAgbWVudUl0ZW1zOiBbXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcmluZ1BhbmU7XG4iXX0=