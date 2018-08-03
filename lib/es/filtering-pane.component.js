var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ', ';\n  width: calc(100% - 2 * ', ');\n  margin: ', ';\n  padding: ', ';\n  .responsive-navbar-container {\n    flex: 1 1 100%;    \n  }\n'], ['\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ', ';\n  width: calc(100% - 2 * ', ');\n  margin: ', ';\n  padding: ', ';\n  .responsive-navbar-container {\n    flex: 1 1 100%;    \n  }\n']),
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

var FilteringPaneSection = styled.div(_templateObject, theme.contentBackgroundColor, theme.gutterWidth, theme.gutterWidth, theme.gutterWidth);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maWx0ZXJpbmctcGFuZS5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsIlJlYWN0IiwiUHJvcFR5cGVzIiwiUmVzcG9uc2l2ZU5hdmJhciIsIkRyb3Bkb3duTWVudSIsInRoZW1lIiwiRmlsdGVyaW5nUGFuZVNlY3Rpb24iLCJkaXYiLCJjb250ZW50QmFja2dyb3VuZENvbG9yIiwiZ3V0dGVyV2lkdGgiLCJBbGlnbmVkU2VjdGlvbiIsIlJpZ2h0QWxpZ25lZFNlY3Rpb24iLCJleHRlbmQiLCJGaWx0ZXJpbmdQYW5lIiwicmVuZGVyTmF2YmFyIiwicHJvcHMiLCJ0YWJzIiwiYWN0aXZlS2V5IiwibGlzdCIsIm9uU2VsZWN0Iiwic2hvd05hdkl0ZW1Cb3JkZXIiLCJzaG93TmF2SXRlbVRvb2x0aXAiLCJsZW5ndGgiLCJyZW5kZXJMZWZ0QWxpZ25lZENvbnRlbnQiLCJsZWZ0QWxpZ25lZENvbnRlbnQiLCJyZW5kZXJSaWdodEFsaWduZWRDb250ZW50IiwicmlnaHRBbGlnbmVkQ29udGVudCIsInJlbmRlck1lbnUiLCJtZW51SXRlbXMiLCJpZCIsInJlbmRlciIsImNsYXNzTmFtZSIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QixxQ0FBN0I7QUFDQSxTQUFTQyxZQUFULFFBQTZCLDRCQUE3Qjs7QUFFQSxTQUFTQyxLQUFULFFBQXNCLGtDQUF0Qjs7QUFFQSxJQUFNQyx1QkFBdUJOLE9BQU9PLEdBQTlCLGtCQUlnQkYsTUFBTUcsc0JBSnRCLEVBS3FCSCxNQUFNSSxXQUwzQixFQU1NSixNQUFNSSxXQU5aLEVBT09KLE1BQU1JLFdBUGIsQ0FBTjs7QUFhQSxJQUFNQyxpQkFBaUJWLE9BQU9PLEdBQXhCLGtCQUFOOztBQVFBLElBQU1JLHNCQUFzQkQsZUFBZUUsTUFBckMsa0JBQU47O0lBSU1DLGE7Ozs7Ozs7Ozs7OztnS0FDSkMsWSxHQUFlLFlBQU07QUFBQSw2QkFPZixNQUFLQyxLQUFMLENBQVdDLElBUEk7QUFBQSxVQUVqQkMsU0FGaUIsb0JBRWpCQSxTQUZpQjtBQUFBLFVBR2pCQyxJQUhpQixvQkFHakJBLElBSGlCO0FBQUEsVUFJakJDLFFBSmlCLG9CQUlqQkEsUUFKaUI7QUFBQSxVQUtqQkMsaUJBTGlCLG9CQUtqQkEsaUJBTGlCO0FBQUEsVUFNakJDLGtCQU5pQixvQkFNakJBLGtCQU5pQjs7O0FBU25CLGFBQVEsQ0FBQyxDQUFDSCxLQUFLSSxNQUFQLElBQ04sb0JBQUMsZ0JBQUQ7QUFDRSxtQkFBV0wsU0FEYjtBQUVFLGNBQU1DLElBRlI7QUFHRSwyQkFBbUJFLGlCQUhyQjtBQUlFLDRCQUFvQkMsa0JBSnRCO0FBS0Usa0JBQVVGO0FBTFosUUFERjtBQVNELEssUUFFREksd0IsR0FBMkI7QUFBQSxhQUN6QixDQUFDLENBQUMsTUFBS1IsS0FBTCxDQUFXUyxrQkFBYixJQUNBO0FBQUMsc0JBQUQ7QUFBQSxVQUFnQixXQUFVLHNCQUExQjtBQUNHLGNBQUtULEtBQUwsQ0FBV1M7QUFEZCxPQUZ5QjtBQUFBLEssUUFPM0JDLHlCLEdBQTRCO0FBQUEsYUFDMUIsQ0FBQyxDQUFDLE1BQUtWLEtBQUwsQ0FBV1csbUJBQWIsSUFDQTtBQUFDLDJCQUFEO0FBQUEsVUFBcUIsV0FBVSxzQkFBL0I7QUFDRyxjQUFLWCxLQUFMLENBQVdXO0FBRGQsT0FGMEI7QUFBQSxLLFFBTzVCQyxVLEdBQWE7QUFBQSxhQUNYLENBQUMsQ0FBQyxNQUFLWixLQUFMLENBQVdhLFNBQVgsQ0FBcUJOLE1BQXZCLElBQ0Esb0JBQUMsWUFBRDtBQUNFLFlBQU8sTUFBS1AsS0FBTCxDQUFXYyxFQUFsQixrQ0FERjtBQUVFLG1CQUFXLE1BQUtkLEtBQUwsQ0FBV2E7QUFGeEIsUUFGVztBQUFBLEssUUFRYkUsTSxHQUFTO0FBQUEsYUFDUDtBQUFDLDRCQUFEO0FBQUEsVUFBc0IsSUFBSSxNQUFLZixLQUFMLENBQVdjLEVBQXJDLEVBQXlDLHFDQUFtQyxNQUFLZCxLQUFMLENBQVdnQixTQUF2RjtBQUNHLGNBQUtqQixZQUFMLEVBREg7QUFFRyxjQUFLUyx3QkFBTCxFQUZIO0FBR0csY0FBS0UseUJBQUwsRUFISDtBQUlHLGNBQUtFLFVBQUw7QUFKSCxPQURPO0FBQUEsSzs7OztFQTNDaUIxQixNQUFNK0IsYTs7QUF3RWxDbkIsY0FBY29CLFlBQWQsR0FBNkI7QUFDM0JqQixRQUFNO0FBQ0pDLGVBQVcsQ0FEUDtBQUVKQyxVQUFNLEVBRkY7QUFHSkUsdUJBQW1CLEtBSGY7QUFJSkMsd0JBQW9CLElBSmhCO0FBS0pGLGNBQVU7QUFMTixHQURxQjtBQVEzQkssc0JBQW9CLElBUk87QUFTM0JFLHVCQUFxQixJQVRNO0FBVTNCRSxhQUFXO0FBVmdCLENBQTdCOztBQWFBLGVBQWVmLGFBQWYiLCJmaWxlIjoiZmlsdGVyaW5nLXBhbmUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZXNwb25zaXZlTmF2YmFyIGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LXJlc3BvbnNpdmUtbmF2YmFyJztcbmltcG9ydCB7IERyb3Bkb3duTWVudSB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWRyb3Bkb3duJztcblxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5cbmNvbnN0IEZpbHRlcmluZ1BhbmVTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbnRlbnRCYWNrZ3JvdW5kQ29sb3J9O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMiAqICR7dGhlbWUuZ3V0dGVyV2lkdGh9KTtcbiAgbWFyZ2luOiAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgcGFkZGluZzogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG4gIC5yZXNwb25zaXZlLW5hdmJhci1jb250YWluZXIge1xuICAgIGZsZXg6IDEgMSAxMDAlOyAgICBcbiAgfVxuYDtcblxuY29uc3QgQWxpZ25lZFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxIDEgMTAwJTtcbiAgJi5yaWdodCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuYDtcblxuY29uc3QgUmlnaHRBbGlnbmVkU2VjdGlvbiA9IEFsaWduZWRTZWN0aW9uLmV4dGVuZGBcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbmA7XG5cbmNsYXNzIEZpbHRlcmluZ1BhbmUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyTmF2YmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGFjdGl2ZUtleSxcbiAgICAgIGxpc3QsXG4gICAgICBvblNlbGVjdCxcbiAgICAgIHNob3dOYXZJdGVtQm9yZGVyLFxuICAgICAgc2hvd05hdkl0ZW1Ub29sdGlwLFxuICAgIH0gPSB0aGlzLnByb3BzLnRhYnM7XG5cbiAgICByZXR1cm4gKCEhbGlzdC5sZW5ndGggJiZcbiAgICAgIDxSZXNwb25zaXZlTmF2YmFyXG4gICAgICAgIGFjdGl2ZUtleT17YWN0aXZlS2V5fVxuICAgICAgICBsaXN0PXtsaXN0fVxuICAgICAgICBzaG93TmF2SXRlbUJvcmRlcj17c2hvd05hdkl0ZW1Cb3JkZXJ9XG4gICAgICAgIHNob3dOYXZJdGVtVG9vbHRpcD17c2hvd05hdkl0ZW1Ub29sdGlwfVxuICAgICAgICBvblNlbGVjdD17b25TZWxlY3R9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyTGVmdEFsaWduZWRDb250ZW50ID0gKCkgPT4gKFxuICAgICEhdGhpcy5wcm9wcy5sZWZ0QWxpZ25lZENvbnRlbnQgJiZcbiAgICA8QWxpZ25lZFNlY3Rpb24gY2xhc3NOYW1lPVwibGVmdC1hbGlnbmVkLXNlY3Rpb25cIj5cbiAgICAgIHt0aGlzLnByb3BzLmxlZnRBbGlnbmVkQ29udGVudH1cbiAgICA8L0FsaWduZWRTZWN0aW9uPlxuICApO1xuXG4gIHJlbmRlclJpZ2h0QWxpZ25lZENvbnRlbnQgPSAoKSA9PiAoXG4gICAgISF0aGlzLnByb3BzLnJpZ2h0QWxpZ25lZENvbnRlbnQgJiZcbiAgICA8UmlnaHRBbGlnbmVkU2VjdGlvbiBjbGFzc05hbWU9XCJyaWdodC1hbGlnbmVkLXNlY3Rpb1wiPlxuICAgICAge3RoaXMucHJvcHMucmlnaHRBbGlnbmVkQ29udGVudH1cbiAgICA8L1JpZ2h0QWxpZ25lZFNlY3Rpb24+XG4gICk7XG5cbiAgcmVuZGVyTWVudSA9ICgpID0+IChcbiAgICAhIXRoaXMucHJvcHMubWVudUl0ZW1zLmxlbmd0aCAmJlxuICAgIDxEcm9wZG93bk1lbnVcbiAgICAgIGlkPXtgJHt0aGlzLnByb3BzLmlkfV9maWx0ZXJpbmctcGFuZS1kcm9wZG93bi1tZW51YH1cbiAgICAgIG1lbnVJdGVtcz17dGhpcy5wcm9wcy5tZW51SXRlbXN9XG4gICAgLz5cbiAgKTtcblxuICByZW5kZXIgPSAoKSA9PiAoXG4gICAgPEZpbHRlcmluZ1BhbmVTZWN0aW9uIGlkPXt0aGlzLnByb3BzLmlkfSBjbGFzc05hbWU9e2BvYy1jbS1maWx0ZXJpbmctcGFuZSAke3RoaXMucHJvcHMuY2xhc3NOYW1lfWB9PlxuICAgICAge3RoaXMucmVuZGVyTmF2YmFyKCl9XG4gICAgICB7dGhpcy5yZW5kZXJMZWZ0QWxpZ25lZENvbnRlbnQoKX1cbiAgICAgIHt0aGlzLnJlbmRlclJpZ2h0QWxpZ25lZENvbnRlbnQoKX1cbiAgICAgIHt0aGlzLnJlbmRlck1lbnUoKX1cbiAgICA8L0ZpbHRlcmluZ1BhbmVTZWN0aW9uPlxuICApO1xufVxuXG5GaWx0ZXJpbmdQYW5lLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRhYnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYWN0aXZlS2V5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGxpc3Q6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLFxuICAgIHNob3dOYXZJdGVtQm9yZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93TmF2SXRlbVRvb2x0aXA6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgfSksXG4gIGxlZnRBbGlnbmVkQ29udGVudDogUHJvcFR5cGVzLm5vZGUsXG4gIHJpZ2h0QWxpZ25lZENvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLFxuICBtZW51SXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuc2hhcGUoe30pLFxuICBdKSksXG59O1xuXG5GaWx0ZXJpbmdQYW5lLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGFiczoge1xuICAgIGFjdGl2ZUtleTogMCxcbiAgICBsaXN0OiBbXSxcbiAgICBzaG93TmF2SXRlbUJvcmRlcjogZmFsc2UsXG4gICAgc2hvd05hdkl0ZW1Ub29sdGlwOiB0cnVlLFxuICAgIG9uU2VsZWN0OiBudWxsLFxuICB9LFxuICBsZWZ0QWxpZ25lZENvbnRlbnQ6IG51bGwsXG4gIHJpZ2h0QWxpZ25lZENvbnRlbnQ6IG51bGwsXG4gIG1lbnVJdGVtczogW10sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJpbmdQYW5lO1xuIl19