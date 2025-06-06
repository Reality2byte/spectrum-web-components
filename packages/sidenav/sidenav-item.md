## Description

An `<sp-sidenav-item>` stands as both a child item of an `<sp-sidenav>` element, as well as a parent for further subdivisions of that navigation. An `<sp-sidenav-item>` with further `<sp-sidenav-item>` children will count as a toggle for the visibility of this next level of navigation items, while also updating the parent `<sp-sidenav>` element to its value when selected.

### Usage

[![See it on NPM!](https://img.shields.io/npm/v/@spectrum-web-components/sidenav?style=for-the-badge)](https://www.npmjs.com/package/@spectrum-web-components/sidenav)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@spectrum-web-components/sidenav?style=for-the-badge)](https://bundlephobia.com/result?p=@spectrum-web-components/sidenav)

```
yarn add @spectrum-web-components/sidenav
```

Import the side effectful registration of `<sp-sidenav-item>` via:

```
import '@spectrum-web-components/sidenav/sp-sidenav-item.js';
```

When looking to leverage the `SidenavItem` base classes as a type and/or for extension purposes, do so via:

```
import { SidenavItem } from '@spectrum-web-components/sidenav';
```

## Example

```html
<sp-sidenav>
    <sp-sidenav-item
        value="Docs"
        label="Docs"
        href="/components/sidenav"
    ></sp-sidenav-item>
</sp-sidenav>
```

## Multi-level

```html
<sp-sidenav variant="multilevel">
    <sp-sidenav-item value="Styles" label="Styles" expanded>
        <sp-sidenav-item value="Color" label="Color">
        </sp-sidenav-item>
        <sp-sidenav-item value="Grid" label="Grid" expanded>
            <sp-sidenav-item value="Layout" label="Layout">
            </sp-sidenav-item>
            <sp-sidenav-item value="Responsive" label="Responsive">
            </sp-sidenav-item>
        </sp-sidenav-item>
        <sp-sidenav-item value="Typography" label="Typography">
        </sp-sidenav-item>
    </sp-sidenav-item>
</sp-sidenav-itm>
```

## Icon

```html
<sp-sidenav>
    <sp-sidenav-item value="Section Title 1" label="Section Title 1">
        <sp-icon-star slot="icon"></sp-icon-star>
    </sp-sidenav-item>
</sp-sidenav>
```
