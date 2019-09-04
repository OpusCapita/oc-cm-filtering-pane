import React from 'react';
import FilteringPane from '../../src/index';

export default class ComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0, // number or object
    };
  }

  onMenuItemClick = (e) => {
    alert(`Menu item #${e.target.id} clicked`); // eslint-disable-line
  };

  onTabChange = (item) => {
    // Mocking page change
    let newActiveKey;
    let selected = item;
    if (typeof item === 'object') {
      selected = item.value;
      newActiveKey = item;
    } else {
      newActiveKey = parseInt(selected.replace(/[^0-9]/g, ''), 10) - 1;
    }
    this.setState({ activeTab: newActiveKey });
  };

  getTabs = () => ({
    title: 'TabNavigation header',
    list: [
      { name: 'Item 1', href: '/item1' },
      { name: 'Item 2', href: '/item2' },
      { name: 'Item 3', href: '/item3' },
      { name: 'Item 4', href: '/item4' },
      { name: 'Item 5', href: '/item5' },
      { name: 'Item 6', href: '/item6' },
    ],
    onSelect: this.onTabChange,
    activeKey: this.state.activeTab,
  });

  getAlignedContent = content => (
    <div style={{ lineHeight: '40px' }}>
      <span style={{ verticalAlign: 'middle' }}>
        {content}
      </span>
    </div>
  );

  getMenuItems = () => [{
    id: '1',
    title: 'First item',
    onClick: this.onMenuItemClick,
  }, {
    id: '2',
    title: 'Second item',
    onClick: this.onMenuItemClick,
  }];

  renderFilteringPane = (tabs, leftAlignedContent, rightAlignedContent, menuItems) => (
    <FilteringPane
      className="class"
      id="id"
      tabs={tabs}
      leftAlignedContent={leftAlignedContent}
      rightAlignedContent={rightAlignedContent}
      menuItems={menuItems}
    />
  );

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <React.Fragment>
          {this.renderFilteringPane(
            this.getTabs(),
            this.getAlignedContent('Left aligned content'),
            this.getAlignedContent('Right aligned content'),
            this.getMenuItems(),
          )}
          {this.renderFilteringPane(
            undefined,
            this.getAlignedContent('Left aligned content'),
            this.getAlignedContent('Right aligned content'),
            this.getMenuItems(),
          )}
          {this.renderFilteringPane(
            this.getTabs(),
            undefined,
            this.getAlignedContent('Right aligned content'),
            this.getMenuItems(),
          )}
          {this.renderFilteringPane(
            this.getTabs(),
            this.getAlignedContent('Left aligned content'),
            undefined,
            this.getMenuItems(),
          )}
          {this.renderFilteringPane(
            this.getTabs(),
            this.getAlignedContent('Left aligned content'),
            this.getAlignedContent('Right aligned content'),
            undefined,
          )}
          {this.renderFilteringPane(
            undefined,
            undefined,
            this.getAlignedContent('Right aligned content'),
            this.getMenuItems(),
          )}
          {this.renderFilteringPane(
            undefined,
            this.getAlignedContent('Left aligned content'),
            undefined,
            this.getMenuItems(),
          )}
          {this.renderFilteringPane(
            undefined,
            this.getAlignedContent('Left aligned content'),
            this.getAlignedContent('Right aligned content'),
            undefined,
          )}
          {this.renderFilteringPane(
            this.getTabs(),
            undefined,
            undefined,
            this.getMenuItems(),
          )}
          {this.renderFilteringPane(
            this.getTabs(),
            undefined,
            this.getAlignedContent('Right aligned content'),
            undefined,
          )}
          {this.renderFilteringPane(
            this.getTabs(),
            this.getAlignedContent('Left aligned content'),
            undefined,
            undefined,
          )}
        </React.Fragment>
      </div>
    );
  }
}
