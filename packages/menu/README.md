## Overview

An `<sp-menu>` is used for creating a menu list. The various elements inside a menu are given as [`<sp-menu-group>`](../menu-group), [`<sp-menu-item>`](../menu-item), or `<sp-menu-divider>`. Often a `<sp-menu>` element will appear in a [`<sp-popover>`](../popover) element so that it displays as a toggling menu.

### Usage

[![See it on NPM!](https://img.shields.io/npm/v/@spectrum-web-components/menu?style=for-the-badge)](https://www.npmjs.com/package/@spectrum-web-components/menu)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@spectrum-web-components/menu?style=for-the-badge)](https://bundlephobia.com/result?p=@spectrum-web-components/menu)
[![Try it on Stackblitz](https://img.shields.io/badge/Try%20it%20on-Stackblitz-blue?style=for-the-badge)](https://stackblitz.com/edit/vitejs-vite-ascdqv3p)

```
yarn add @spectrum-web-components/menu
```

Import the side effectful registration of `<sp-menu>`, `<sp-menu-group>`, `<sp-menu-item>`, or `<sp-menu-divider>` individually as follows:

```
import '@spectrum-web-components/menu/sp-menu.js';
import '@spectrum-web-components/menu/sp-menu-group.js';
import '@spectrum-web-components/menu/sp-menu-item.js';
import '@spectrum-web-components/menu/sp-menu-divider.js';
```

When looking to leverage the `Menu`, `MenuGroup`, `MenuItem`, or `MenuDivider` base classes as a type and/or for extension purposes, do so via:

```
import {
    Menu,
    MenuGroup,
    MenuItem,
    MenuDivider
} from '@spectrum-web-components/menu';
```

### Anatomy

<!-- prettier-ignore -->
```html
<sp-menu label="Selection type">
    <sp-menu-item>
        Deselect
    </sp-menu-item>
    <sp-menu-item>
        Select inverse
    </sp-menu-item>
    <sp-menu-item>
        Feather...
    </sp-menu-item>
    <sp-menu-item>
        Select and mask...
    </sp-menu-item>
    <sp-menu-item>
        Save selection
    </sp-menu-item>
    <sp-menu-item disabled>
        Make work path
    </sp-menu-item>
</sp-menu>
```

#### Popover menus

Often an `<sp-menu>` element will be delivered inside of an `<sp-popover>` element when displaying it above other content.

```html
<sp-popover open style="position: relative" label="Selection type">
    <sp-menu>
        <sp-menu-item value="item-1">Deselect</sp-menu-item>
        <sp-menu-item value="item-2">Select inverse</sp-menu-item>
        <sp-menu-item value="item-3">Feather...</sp-menu-item>
        <sp-menu-item value="item-4">Select and mask...</sp-menu-item>
        <sp-menu-item value="item-5">Save selection</sp-menu-item>
        <sp-menu-item value="item-6" disabled>Make work path</sp-menu-item>
    </sp-menu>
</sp-popover>
```

#### Labels

To render accessibly, an `<sp-menu>` element or its parent `<sp-popover>` must have a label. For an accessible label that is visibly hidden, but can still be read by assistive technology, use the `label` attribute.

<sp-tabs selected="sp-field-label" auto label="Label options">
<sp-tab value="sp-field-label">Menu with label</sp-tab>
<sp-tab-panel value="sp-field-label">

```html demo
<sp-menu id="menu-label-attribute" label="Selection type">
    <sp-menu-item>Deselect</sp-menu-item>
    <sp-menu-item>Select inverse</sp-menu-item>
    <sp-menu-item>Feather...</sp-menu-item>
    <sp-menu-item>Select and mask...</sp-menu-item>
    <sp-menu-divider></sp-menu-divider>
    <sp-menu-item>Save selection</sp-menu-item>
    <sp-menu-item disabled>Make work path</sp-menu-item>
</sp-menu>
```

</sp-tab-panel>
<sp-tab value="label-attribute">Popover with label</sp-tab>
<sp-tab-panel value="label-attribute">

```html demo
<sp-popover open style="position: relative" label="Selection type:">
    <sp-menu id="popover-label-attribute">
        <sp-menu-item>Deselect</sp-menu-item>
        <sp-menu-item>Select inverse</sp-menu-item>
        <sp-menu-item>Feather...</sp-menu-item>
        <sp-menu-item>Select and mask...</sp-menu-item>
        <sp-menu-divider></sp-menu-divider>
        <sp-menu-item>Save selection</sp-menu-item>
        <sp-menu-item disabled>Make work path</sp-menu-item>
    </sp-menu>
</sp-popover>
```

</sp-tab-panel>
</sp-tabs>

### Options

#### Sizes

<sp-tabs selected="m" auto label="Size attribute options">
<sp-tab value="s">Small</sp-tab>
<sp-tab-panel value="s">

```html demo
<sp-menu id="menu-s" size="s" label="Selection type">
    <sp-menu-item>Deselect</sp-menu-item>
    <sp-menu-item>Select inverse</sp-menu-item>
    <sp-menu-item>Feather...</sp-menu-item>
    <sp-menu-item>Select and mask...</sp-menu-item>
    <sp-menu-divider></sp-menu-divider>
    <sp-menu-item>Save selection</sp-menu-item>
    <sp-menu-item disabled>Make work path</sp-menu-item>
</sp-menu>
<sp-popover open style="position: relative" label="Selection type:">
    <sp-menu id="menu-s-popover" size="s">
        <sp-menu-item>Deselect</sp-menu-item>
        <sp-menu-item>Select inverse</sp-menu-item>
        <sp-menu-item>Feather...</sp-menu-item>
        <sp-menu-item>Select and mask...</sp-menu-item>
        <sp-menu-divider></sp-menu-divider>
        <sp-menu-item>Save selection</sp-menu-item>
        <sp-menu-item disabled>Make work path</sp-menu-item>
    </sp-menu>
</sp-popover>
```

</sp-tab-panel>
<sp-tab value="m">Medium</sp-tab>
<sp-tab-panel value="m">

```html demo
<sp-menu id="menu-m" size="m" label="Selection type">
    <sp-menu-item>Deselect</sp-menu-item>
    <sp-menu-item>Select inverse</sp-menu-item>
    <sp-menu-item>Feather...</sp-menu-item>
    <sp-menu-item>Select and mask...</sp-menu-item>
    <sp-menu-divider></sp-menu-divider>
    <sp-menu-item>Save selection</sp-menu-item>
    <sp-menu-item disabled>Make work path</sp-menu-item>
</sp-menu>
<sp-popover open style="position: relative" label="Selection type:">
    <sp-menu id="menu-m-popover" size="m">
        <sp-menu-item>Deselect</sp-menu-item>
        <sp-menu-item>Select inverse</sp-menu-item>
        <sp-menu-item>Feather...</sp-menu-item>
        <sp-menu-item>Select and mask...</sp-menu-item>
        <sp-menu-divider></sp-menu-divider>
        <sp-menu-item>Save selection</sp-menu-item>
        <sp-menu-item disabled>Make work path</sp-menu-item>
    </sp-menu>
</sp-popover>
```

</sp-tab-panel>
<sp-tab value="l">Large</sp-tab>
<sp-tab-panel value="l">

```html demo
<sp-menu id="menu-l" size="l" label="Selection type">
    <sp-menu-item>Deselect</sp-menu-item>
    <sp-menu-item>Select inverse</sp-menu-item>
    <sp-menu-item>Feather...</sp-menu-item>
    <sp-menu-item>Select and mask...</sp-menu-item>
    <sp-menu-divider></sp-menu-divider>
    <sp-menu-item>Save selection</sp-menu-item>
    <sp-menu-item disabled>Make work path</sp-menu-item>
</sp-menu>
<sp-popover open style="position: relative" label="Selection type:">
    <sp-menu id="menu-l-popover" size="l">
        <sp-menu-item>Deselect</sp-menu-item>
        <sp-menu-item>Select inverse</sp-menu-item>
        <sp-menu-item>Feather...</sp-menu-item>
        <sp-menu-item>Select and mask...</sp-menu-item>
        <sp-menu-divider></sp-menu-divider>
        <sp-menu-item>Save selection</sp-menu-item>
        <sp-menu-item disabled>Make work path</sp-menu-item>
    </sp-menu>
</sp-popover>
```

</sp-tab-panel>
<sp-tab value="xl">Extra Large</sp-tab>
<sp-tab-panel value="xl">

```html demo
<sp-menu id="menu-xl" size="xl" label="Selection type">
    <sp-menu-item>Deselect</sp-menu-item>
    <sp-menu-item>Select inverse</sp-menu-item>
    <sp-menu-item>Feather...</sp-menu-item>
    <sp-menu-item>Select and mask...</sp-menu-item>
    <sp-menu-divider></sp-menu-divider>
    <sp-menu-item>Save selection</sp-menu-item>
    <sp-menu-item disabled>Make work path</sp-menu-item>
</sp-menu>
<sp-popover open style="position: relative" label="Selection type:">
    <sp-menu id="menu-xl-popover" size="xl">
        <sp-menu-item>Deselect</sp-menu-item>
        <sp-menu-item>Select inverse</sp-menu-item>
        <sp-menu-item>Feather...</sp-menu-item>
        <sp-menu-item>Select and mask...</sp-menu-item>
        <sp-menu-divider></sp-menu-divider>
        <sp-menu-item>Save selection</sp-menu-item>
        <sp-menu-item disabled>Make work path</sp-menu-item>
    </sp-menu>
</sp-popover>
```

</sp-tab-panel>
</sp-tabs>

#### Selection

The `<sp-menu>` element can be instructed to maintain a selection via the `selects` attribute. Depending on the chosen algorithm, the `<sp-menu>` element will hold a `value` property and manage the `selected` state of its `<sp-menu-item>` descendants.

- When `selects="single"`, the `<sp-menu>` element will maintain one selected item after an initial selection is made.
- When `selects` is set to `multiple`, the `<sp-menu>` element will maintain zero or more selected items.
- When `selects` is set to `inherit`, the `<sp-menu>` element will allow its `<sp-menu-item>` children to participate in the selection of its nearest `<sp-menu>` ancestor.

<sp-tabs selected="selects-single" auto label="Selects attribute">
<sp-tab value="selects-single">Single</sp-tab>
<sp-tab-panel value="selects-single">

```html demo
<p>
    The value of the `&lt;sp-menu&gt;` element is:
    <span id="single-value"></span>
</p>
<sp-menu
    label="Choose a shape"
    selects="single"
    onchange="this.previousElementSibling.querySelector('#single-value').textContent=this.value"
>
    <sp-menu-item value="item-1">Square</sp-menu-item>
    <sp-menu-item value="item-2" selected>Triangle</sp-menu-item>
    <sp-menu-item value="item-3">Parallelogram</sp-menu-item>
    <sp-menu-item value="item-4">Star</sp-menu-item>
    <sp-menu-item value="item-5">Hexagon</sp-menu-item>
    <sp-menu-item value="item-6" disabled>Circle</sp-menu-item>
</sp-menu>
```

</sp-tab-panel>
<sp-tab value="selects-multiple">Multiple</sp-tab>
<sp-tab-panel value="selects-multiple">

```html demo
<p>
    The value of the `&lt;sp-menu&gt;` element is:
    <span id="multiple-value">item-3,item-4</span>
</p>
<sp-menu
    label="Choose some fruit"
    selects="multiple"
    onchange="this.previousElementSibling.querySelector('#multiple-value').textContent=this.value"
>
    <sp-menu-item value="item-1">Apple</sp-menu-item>
    <sp-menu-item value="item-2">Banana</sp-menu-item>
    <sp-menu-item value="item-3" selected>Goji berry</sp-menu-item>
    <sp-menu-item value="item-4" selected>Grapes</sp-menu-item>
    <sp-menu-item value="item-5" disabled>Kumquat</sp-menu-item>
    <sp-menu-item value="item-6">Orange</sp-menu-item>
</sp-menu>
```

</sp-tab-panel>
<sp-tab value="selects-inherit">Inherit</sp-tab>
<sp-tab-panel value="selects-inherit">

```html demo
<p>
    The value of the `&lt;sp-menu&gt;` element is:
    <span id="inherit-value">item-3 || item-4 || item-8 || item-11</span>
</p>
<sp-menu
    label="Choose some groceries"
    selects="multiple"
    value-separator=" || "
    onchange="this.previousElementSibling.querySelector('#inherit-value').textContent=this.value"
>
    <sp-menu label="Fruit" selects="inherit">
        <sp-menu-item value="item-1">Apple</sp-menu-item>
        <sp-menu-item value="item-2">Banana</sp-menu-item>
        <sp-menu-item value="item-3" selected>Goji berry</sp-menu-item>
        <sp-menu-item value="item-4" selected>Grapes</sp-menu-item>
        <sp-menu-item value="item-5" disabled>Kumquat</sp-menu-item>
        <sp-menu-item value="item-6">Orange</sp-menu-item>
    </sp-menu>
    <sp-menu label="Vegetables" selects="inherit">
        <sp-menu-item value="item-7">Carrot</sp-menu-item>
        <sp-menu-item value="item-8" selected>Garlic</sp-menu-item>
        <sp-menu-item value="item-9" disabled>Lettuce</sp-menu-item>
        <sp-menu-item value="item-10">Onion</sp-menu-item>
        <sp-menu-item value="item-11" selected>Potato</sp-menu-item>
        <sp-menu-item value="item-12">Tomato</sp-menu-item>
    </sp-menu>
</sp-menu>
```

</sp-tab-panel>
</sp-tabs>

### Behaviors

#### "change" event

Regardless of whether or not `<sp-menu>` carries a selection, when one of the `<sp-menu-item>` children that it manages is activated, the `<sp-menu>` element will dispatch a `change` event. At dispatch time, even when a selection is not held due to the absence of the `selects` attribute, the `value` of the `<sp-menu>` will correspond to the `<sp-menu-item>` that was activated. When the `selects` attribute is present, this `value` will persist beyond the lifecycle of the `change` event. When `selects="multiple"`, the values of multiple items will be comma separated, unless otherwise set via the `value-separator` attribute.

Note: The `change` event is only dispatched on a left mouse click or Enter/Space keypress. Right/Middle mouse clicks will not dispatch the `change` event.

### Accessibility

Review the accessibility guidelines for the [menu-item](../menu-item#accessibility-guidelines) and [menu-group](../menu-group#accessibility-guidelines) descendants.

#### Include a label

A menu is required to have an accessible label.
