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

export const argTypes = {
    open: {
        name: 'open',
        type: { name: 'boolean', required: false },
        description: 'Whether the Action Bar is open and visible.',
        table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: true },
        },
        control: {
            type: 'boolean',
        },
    },
    emphasized: {
        name: 'emphasized',
        type: { name: 'boolean', required: false },
        description: 'Whether the Action Bar is emphasized for the viewer.',
        table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: false },
        },
        control: {
            type: 'boolean',
        },
    },
    tools: {
        name: 'tools',
        type: { name: 'boolean', required: false },
        description: 'Whether to display tools in the action bar.',
        table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: true },
        },
        control: {
            type: 'boolean',
        },
    },
};
