import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import ResponsiveNavbar from '@opuscapita/react-responsive-navbar';
import { DropdownMenu } from '@opuscapita/react-dropdown';
import { theme } from '@opuscapita/oc-cm-common-layouts';

const FilteringPaneSection = styled.div`
  display: flex;
  background-color: ${theme.contentBackgroundColor};
  width: calc(100% - 2 * ${theme.gutterWidth});
  margin: ${theme.gutterWidth} ${theme.gutterWidth} 0 ${theme.gutterWidth};
  padding: ${theme.gutterWidth};
`;

const AlignedSection = styled.div`
  display: flex;
`;

const LeftAlignedSection = styled(AlignedSection)`
  justify-content: flex-start;
`;

const RightAlignedSection = styled(AlignedSection)`
  justify-content: flex-end;
  align-items: flex-end;
  align-self: flex-end;
  flex: 1 1 20%;
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
        componentLeft={this.renderLeftAlignedContent()}
        componentRight={this.renderRightAlignedContent()}
      />
    );
  };


  renderLeftAlignedContent = () => {
    const { leftAlignedContent } = this.props;
    return (
      <LeftAlignedSection className="left-aligned-section">
        {!!leftAlignedContent && leftAlignedContent}
      </LeftAlignedSection>
    );
  };

  renderRightAlignedContent = () => {
    const { rightAlignedContent } = this.props;
    return (
      <RightAlignedSection className="right-aligned-section">
        {!!rightAlignedContent && rightAlignedContent}
        {this.renderMenu()}
      </RightAlignedSection>
    );
  };

  renderMenu = () => {
    const { id, menuItems } = this.props;
    return (
      !!menuItems.length &&
      <DropdownMenu
        id={`${id}_filtering-pane-dropdown-menu`}
        menuItems={menuItems}
      />
    );
  };

  renderLeftAndRight = () => (
    <React.Fragment>
      {this.renderLeftAlignedContent()}
      {this.renderRightAlignedContent()}
    </React.Fragment>
  );

  hasTabs = () => (this.props.tabs && this.props.tabs !== 'undefined' && this.props.tabs.list.length !== 0);

  render = () => {
    const content = this.hasTabs() ? this.renderNavbar() : this.renderLeftAndRight();
    return (
    <ThemeProvider theme={theme}>
      <FilteringPaneSection id={this.props.id} className={`oc-cm-filtering-pane ${this.props.className}`}>
       { content }
      </FilteringPaneSection>
    </ThemeProvider>);
  }
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
