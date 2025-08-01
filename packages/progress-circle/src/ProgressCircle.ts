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

import {
    CSSResultArray,
    html,
    PropertyValues,
    SizedMixin,
    SpectrumElement,
    TemplateResult,
} from '@spectrum-web-components/base';
import {
    property,
    query,
} from '@spectrum-web-components/base/src/decorators.js';
import { getLabelFromSlot } from '@spectrum-web-components/shared/src/get-label-from-slot.js';
import { ifDefined } from '@spectrum-web-components/base/src/directives.js';

import progressCircleStyles from './progress-circle.css.js';

/**
 * @element sp-progress-circle
 */
export class ProgressCircle extends SizedMixin(SpectrumElement, {
    validSizes: ['s', 'm', 'l'],
}) {
    public static override get styles(): CSSResultArray {
        return [progressCircleStyles];
    }

    @property({ type: Boolean, reflect: true })
    public indeterminate = false;

    @property({ type: String })
    public label = '';

    @property({ reflect: true, attribute: 'static-color' })
    public staticColor?: 'white';

    @property({ type: Number })
    public progress = 0;

    @query('slot')
    private slotEl!: HTMLSlotElement;

    private makeRotation(rotation: number): string | undefined {
        return this.indeterminate
            ? undefined
            : `transform: rotate(${rotation}deg);`;
    }

    protected override render(): TemplateResult {
        const styles = [
            this.makeRotation(-180 + (180 / 50) * Math.min(this.progress, 50)),
            this.makeRotation(
                -180 + (180 / 50) * Math.max(this.progress - 50, 0)
            ),
        ];
        const masks = ['Mask1', 'Mask2'];
        return html`
            <slot @slotchange=${this.handleSlotchange}></slot>
            <div class="track"></div>
            <div class="fills">
                ${masks.map(
                    (mask, index) => html`
                        <div class="fill${mask}">
                            <div
                                class="fillSub${mask}"
                                style=${ifDefined(styles[index])}
                            >
                                <div class="fill"></div>
                            </div>
                        </div>
                    `
                )}
            </div>
        `;
    }

    protected handleSlotchange(): void {
        const labelFromSlot = getLabelFromSlot(this.label, this.slotEl);
        if (labelFromSlot) {
            this.label = labelFromSlot;
        }
    }

    protected override firstUpdated(changes: PropertyValues): void {
        super.firstUpdated(changes);
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'progressbar');
        }
    }

    protected override updated(changes: PropertyValues): void {
        super.updated(changes);
        if (!this.indeterminate && changes.has('progress')) {
            this.setAttribute('aria-valuenow', '' + this.progress);
        } else if (this.hasAttribute('aria-valuenow')) {
            this.removeAttribute('aria-valuenow');
        }
        if (changes.has('label')) {
            if (this.label.length) {
                this.setAttribute('aria-label', this.label);
            } else if (
                changes.get('label') === this.getAttribute('aria-label')
            ) {
                this.removeAttribute('aria-label');
            }
        }

        if (window.__swc.DEBUG) {
            if (
                !this.label &&
                !this.getAttribute('aria-label') &&
                !this.getAttribute('aria-labelledby') &&
                !this.slotEl.assignedNodes().length
            ) {
                window.__swc.warn(
                    this,
                    '<sp-progress-circle> elements need one of the following to be accessible:',
                    'https://opensource.adobe.com/spectrum-web-components/components/progress-circle/#accessibility',
                    {
                        type: 'accessibility',
                        issues: [
                            'value supplied to the "label" attribute, which will be displayed visually as part of the element, or',
                            'text content supplied directly to the <sp-progress-circle> element, or',
                            'value supplied to the "aria-label" attribute, which will only be provided to screen readers, or',
                            'an element ID reference supplied to the "aria-labelledby" attribute, which will be provided by screen readers and will need to be managed manually by the parent application.',
                        ],
                    }
                );
            }
        }
    }
}
