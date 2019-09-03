# oc-cm-filtering-pane

### Description

Provides a filtering pane with optional a tab based navigation (@opuscapita/react-responsive-navbar),
left aligned content, right aligned content and dropdown menu (@opuscapita/react-dropdown).

### Installation

```
npm install @opuscapita/oc-cm-filtering-pane
```

### Demo

View the [DEMO](https://opuscapita.github.io/oc-cm-filtering-pane)

### Builds

#### UMD

The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.

#### CommonJS/ES Module

You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.

- With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
- Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### API

| Prop name           | Type     | Default  | Description                                                                                                         |
| ------------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| class               | string   | required | ID for the DOM element                                                                                              |
| id                  | string   | required | Class for the DOM element                                                                                           |
| tabs                | tabsType |          | Defines options for the responsive navigation bar (see tabsType for more information).                              |
| leftAlignedContent  | node     | null     | Left aligned content                                                                                                |
| rightAlignedContent | node     | null     | Right aligned content                                                                                               |
| menuItems           | array    | []       | @opuscapita/react-dropdown: List of the dropdown menu items (check menuItems props from @opuscapita/react-dropdown) |

###### Types

- **tabsType:**

| Prop name          | Type             | Default  | Description                                                                      |
| ------------------ | ---------------- | -------- | -------------------------------------------------------------------------------- |
| activeKey          | number or object | required | @opuscapita/react-responsive-navbar: Navbar item to be active initially          |
| list               | list             | required | @opuscapita/react-responsive-navbar: navigation items                            |
| onSelect           | function         | null     | @opuscapita/react-responsive-navbar: Callback fired when the active item changes |
| showNavItemBorder  | bool             | false    | @opuscapita/react-responsive-navbar: show bottom-border below navbar items       |
| showNavItemTooltip | bool             | true     | @opuscapita/react-responsive-navbar: enables tooltips for nav items              |

### Code example

```jsx
import React from "react";
import FilteringPane from "@opuscapita/oc-cm-filtering-pane";

export default class ReactView extends React.Component {
  render() {
    return <FilteringPane propName="propValue" />;
  }
}
```
