import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, object } from '@storybook/addon-knobs';
import { Store, StateDecorator } from '@sambego/storybook-state';

// Application
import './scss/app.component.scss';
import FilteringPane from '../src/filtering-pane.component';
/* eslint-disable no-alert */
/* eslint-disable no-console */
const store = new Store({ activeKey: 0 });
const initialTabs = [{ name: 'Item #1', href: '#1' }, { name: 'Item #2', href: '#2' }, { name: 'Item #3', href: '#3' }];

storiesOf('@opuscapita/oc-cm-filtering-pane', module)
  .addDecorator(StateDecorator(store))
  .add('Filtering pane', () => (state) => {
    const tabList = object('Tabs', initialTabs);

    const showLeftAlignedContent = boolean('Show left aligned content', false);
    const showRightAlignedContent = boolean('Show right aligned content', false);
    const leftAlignedContent = showLeftAlignedContent ?
      <div className="custom-content">Some custom content aligned to the left</div> : undefined;
    const rightAlignedContent = showRightAlignedContent ?
      <div className="custom-content">Some custom content aligned to the right</div> : undefined;

    const tabs = {
      activeKey: state.activeKey,
      onSelect: (href) => {
        const index = tabList.findIndex(item => item.href === href);
        store.set({ activeKey: index });
      },
      list: tabList,
      showNavItemTooltip: boolean('Show item tooltip', true),
      showNavItemBorder: boolean('Show item border', false),
    };

    const knobs = {
      tabs,
      id: 'demo',
      className: 'demo',
      leftAlignedContent,
      rightAlignedContent,
    };
    return (
      <FilteringPane {...knobs} />
    );
  });
