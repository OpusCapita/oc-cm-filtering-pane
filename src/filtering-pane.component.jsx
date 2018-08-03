import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveNavbar from '@opuscapita/react-responsive-navbar';
import { DropdownMenu } from '@opuscapita/react-dropdown';

import { theme } from '@opuscapita/oc-cm-common-layouts';

const FilteringPaneSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.contentBackgroundColor};
  width: calc(100% - 2 * ${theme.gutterWidth});
  margin: ${theme.gutterWidth};
  padding: ${theme.gutterWidth};
  .responsive-navbar-container {
    flex: 1 1 100%;    
  }
`;

const AlignedSection = styled.div`
  display: flex;
  flex: 1 1 100%;
  &.right {
    justify-content: flex-end;
  }
`;

const RightAlignedSection = AlignedSection.extend`
  justify-content: flex-end;
`;

class FilteringPane extends React.PureComponent {
  renderNavbar = () => {
    const {
      activeKey,
      list,
      onSelect,
      showNavItemBorder,
      showNavItemTooltip,
    } = this.props.tabs;

    return (!!list.length &&
      <ResponsiveNavbar
        activeKey={activeKey}
        list={list}
        showNavItemBorder={showNavItemBorder}
        showNavItemTooltip={showNavItemTooltip}
        onSelect={onSelect}
      />
    );
  };

  renderLeftAlignedContent = () => (
    !!this.props.leftAlignedContent &&
    <AlignedSection className="left-aligned-section">
      {this.props.leftAlignedContent}
    </AlignedSection>
  );

  renderRightAlignedContent = () => (
    !!this.props.rightAlignedContent &&
    <RightAlignedSection className="right-aligned-sectio">
      {this.props.rightAlignedContent}
    </RightAlignedSection>
  );

  renderMenu = () => (
    !!this.props.menuItems.length &&
    <DropdownMenu
      id={`${this.props.id}_filtering-pane-dropdown-menu`}
      menuItems={this.props.menuItems}
    />
  );

  render = () => (
    <FilteringPaneSection id={this.props.id} className={`oc-cm-filtering-pane ${this.props.className}`}>
      {this.renderNavbar()}
      {this.renderLeftAlignedContent()}
      {this.renderRightAlignedContent()}
      {this.renderMenu()}
    </FilteringPaneSection>
  );
}

FilteringPane.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  tabs: PropTypes.shape({
    activeKey: PropTypes.number,
    list: PropTypes.arrayOf(PropTypes.shape({})),
    showNavItemBorder: PropTypes.bool,
    showNavItemTooltip: PropTypes.bool,
    onSelect: PropTypes.func,
  }),
  leftAlignedContent: PropTypes.node,
  rightAlignedContent: PropTypes.node,
  menuItems: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({}),
  ])),
};

FilteringPane.defaultProps = {
  tabs: {
    activeKey: 0,
    list: [],
    showNavItemBorder: false,
    showNavItemTooltip: true,
    onSelect: null,
  },
  leftAlignedContent: null,
  rightAlignedContent: null,
  menuItems: [],
};

export default FilteringPane;
