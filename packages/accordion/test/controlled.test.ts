/**
 * Copyright 2025 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { elementUpdated, expect, fixture } from '@open-wc/testing';

import { Accordion, AccordionItem } from '@spectrum-web-components/accordion';

import { Default } from '../stories/accordion.stories.js';

describe('Accordion - controlled', () => {
    it('can have `toggle` events canceled', async () => {
        const el = await fixture<Accordion>(Default());
        await elementUpdated(el);
        const firstItem = el.querySelector(
            'sp-accordion-item:nth-of-type(1)'
        ) as AccordionItem;
        const secondItem = el.querySelector(
            'sp-accordion-item:nth-of-type(2)'
        ) as AccordionItem;

        const firstButton = firstItem.focusElement;
        const secondButton = secondItem.focusElement;

        firstButton.click();
        await elementUpdated(el);
        expect(firstItem.open).to.be.true;
        expect(secondItem.open).to.be.false;

        el.addEventListener('sp-accordion-item-toggle', (event: Event) =>
            event.preventDefault()
        );

        secondButton.click();
        await elementUpdated(el);
        expect(firstItem.open).to.be.true;
        expect(secondItem.open).to.be.false;
    });
});
