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

import '@spectrum-web-components/icon/sp-icon.js';
import { Arrow75Icon } from '@spectrum-web-components/icons-ui/src/icons/Arrow75.js';
import { setCustomTemplateLiteralTag } from '@spectrum-web-components/icons-ui/src/custom-tag.js';
import { html } from '@spectrum-web-components/base';
import { measureFixtureCreation } from '../../../../test/benchmark/helpers.js';

setCustomTemplateLiteralTag(html);

measureFixtureCreation(html`
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
    <sp-icon>${Arrow75Icon()}</sp-icon>
`);
