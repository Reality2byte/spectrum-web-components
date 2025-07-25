/* eslint-disable @typescript-eslint/explicit-function-return-type */
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

import fs from 'fs';
import fg from 'fast-glob';
import path from 'path';
import { load } from 'cheerio';
import prettier from 'prettier';
import Case from 'case';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rootDir = path.join(__dirname, '../../../');

const disclaimer = `
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/`;

const S1IConsPackageDir = '@spectrum-css/ui-icons/dist/medium';
const S2IConsPackageDir = '@spectrum-css/ui-icons-s2/dist/medium';
const keepColors = '';

if (!fs.existsSync(`${rootDir}packages/icons-ui/src`)) {
    fs.mkdirSync(`${rootDir}packages/icons-ui/src`);
}
if (!fs.existsSync(`${rootDir}packages/icons-ui/src/icons`)) {
    fs.mkdirSync(`${rootDir}packages/icons-ui/src/icons`);
}
if (!fs.existsSync(`${rootDir}packages/icons-ui/src/icons-s2`)) {
    fs.mkdirSync(`${rootDir}packages/icons-ui/src/icons-s2`);
}
if (!fs.existsSync(`${rootDir}packages/icons-ui/src/elements`)) {
    fs.mkdirSync(`${rootDir}packages/icons-ui/src/elements`);
}
if (!fs.existsSync(`${rootDir}packages/icons-ui/icons`)) {
    fs.mkdirSync(`${rootDir}packages/icons-ui/icons`);
}
fs.writeFileSync(
    path.join(rootDir, 'packages', 'icons-ui', 'src', 'icons.ts'),
    disclaimer,
    'utf-8'
);
fs.writeFileSync(
    path.join(rootDir, 'packages', 'icons-ui', 'src', 'icons-s2.ts'),
    disclaimer,
    'utf-8'
);
const manifestPath = path.join(
    rootDir,
    'packages',
    'icons-ui',
    'stories',
    'icon-manifest.ts'
);
fs.writeFileSync(manifestPath, disclaimer, 'utf-8');
let manifestImports = `import {
    html,
    TemplateResult
} from '@spectrum-web-components/base';\r\n`;
let manifestListings = `\r\nexport const iconManifest = [\r\n`;

const defaultIconImport = `import { DefaultIcon as AlternateIcon } from '../DefaultIcon.js';\r\n`;

async function buildIcons(icons, tag, iconsNameList) {
    icons.forEach((i) => {
        const svg = fs.readFileSync(i, 'utf-8');
        let id = path
            .basename(i, '.svg')
            .replace('S2_Icon_', '')
            .replace('_20_N', '')
            .replace('_22x20_N', '');
        if (id.search(/^Ad[A-Z]/) !== -1) {
            id = id.replace(/^Ad/, '');
            id += 'Advert';
        }

        if (id === 'UnLink') {
            id = 'Unlink';
        }
        if (id === 'TextStrikeThrough') {
            id = 'TextStrikethrough';
        }

        let ComponentName = id === 'github' ? 'GitHub' : Case.pascal(id);

        if (ComponentName === 'TextStrikeThrough') {
            ComponentName = 'TextStrikethrough';
        }
        if (ComponentName === 'UnLink') {
            ComponentName = 'Unlink';
        }

        const $ = load(svg, {
            xmlMode: true,
        });
        const title = Case.capital(id);
        const fileName = `${id}.ts`;
        const location = path.join(
            rootDir,
            'packages/icons-ui/src',
            tag,
            fileName
        );

        if (!Number.isNaN(Number(ComponentName[0]))) {
            return;
        }

        $('*').each((index, el) => {
            if (el.name === 'svg') {
                $(el).attr('aria-hidden', '...');
                $(el).attr('role', 'img');
                if (keepColors !== 'keep') {
                    $(el).attr('fill', 'currentColor');
                }
                $(el).attr('aria-label', '...');
                $(el).removeAttr('id');
                $(el).attr('width', '...');
                $(el).attr('height', '...');
            }
            if (el.name === 'defs') {
                $(el).remove();
            }
            Object.keys(el.attribs).forEach((x) => {
                if (x === 'class') {
                    $(el).removeAttr(x);
                }
                if (keepColors !== 'keep' && x === 'stroke') {
                    $(el).attr(x, 'currentColor');
                }
                if (keepColors !== 'keep' && x === 'fill') {
                    $(el).attr(x, 'currentColor');
                }
            });
        });

        const iconLiteral = `
        ${disclaimer}

        import {tag as html, TemplateResult} from '../custom-tag.js';

        export {setCustomTemplateLiteralTag} from '../custom-tag.js';
        export const ${ComponentName}Icon = ({
        width = 24,
        height = 24,
        hidden = false,
        title = '${title}',
        } = {},): string | TemplateResult => {
        return html\`${$('svg')
            .toString()
            .replace(
                'aria-hidden="..."',
                "aria-hidden=${hidden ? 'true' : 'false'}"
            )
            .replace('width="..."', 'width="${width}"')
            .replace('height="..."', 'height="${height}"')
            .replace('aria-label="..."', 'aria-label="${title}"')}\`;
        }
    `;

        prettier
            .format(iconLiteral, {
                printWidth: 100,
                tabWidth: 2,
                useTabs: false,
                semi: true,
                singleQuote: true,
                trailingComma: 'all',
                bracketSpacing: true,
                jsxBracketSameLine: false,
                arrowParens: 'avoid',
                parser: 'typescript',
            })
            .then((icon) => {
                fs.writeFileSync(location, icon, 'utf-8');
            });

        const exportString = `export {${ComponentName}Icon} from './${tag}/${id}.js';\r\n`;
        fs.appendFileSync(
            path.join(rootDir, 'packages', 'icons-ui', 'src', tag + '.ts'),
            exportString,
            'utf-8'
        );

        const iconElementName = `sp-icon-${Case.kebab(ComponentName)}`;

        const currenVersionIconImport = `import { ${ComponentName}Icon as CurrentIcon } from '../${tag}/${id}.js';\r\n`;

        // check if the icon is present in the other version
        let otherVersionIconImport = defaultIconImport;

        if (iconsNameList.includes(ComponentName)) {
            const alternateTag = tag === 'icons' ? 'icons-s2' : 'icons';
            otherVersionIconImport = `import { ${ComponentName}Icon as AlternateIcon } from '../${alternateTag}/${id}.js';\r\n`;
        }

        const spectrumVersion = tag === 'icons' ? 1 : 2;

        const iconElement = `
        ${disclaimer}

        import {
            html,
            TemplateResult
        } from '@spectrum-web-components/base';
        import {
            IconBase
        } from '@spectrum-web-components/icon';
        import {
            setCustomTemplateLiteralTag
        } from '../custom-tag.js';

        ${currenVersionIconImport}
        ${otherVersionIconImport}

        /**
         * @element ${iconElementName}
         */
        export class Icon${ComponentName} extends IconBase {
            protected override render(): TemplateResult {
                setCustomTemplateLiteralTag(html);

                if(this.spectrumVersion === ${spectrumVersion}){
                    return CurrentIcon({ hidden: !this.label, title: this.label }) as TemplateResult;
                }
                return AlternateIcon({ hidden: !this.label, title: this.label }) as TemplateResult;

            }
        }
        `;

        prettier
            .format(iconElement, {
                printWidth: 100,
                tabWidth: 2,
                useTabs: false,
                semi: true,
                singleQuote: true,
                trailingComma: 'all',
                bracketSpacing: true,
                jsxBracketSameLine: false,
                arrowParens: 'avoid',
                parser: 'typescript',
            })
            .then((iconElementFile) => {
                fs.writeFileSync(
                    path.join(
                        rootDir,
                        'packages',
                        'icons-ui',
                        'src',
                        'elements',
                        `Icon${id}.ts`
                    ),
                    iconElementFile,
                    'utf-8'
                );
            });

        const iconRegistration = `
        ${disclaimer}

        import { Icon${ComponentName} } from '../src/elements/Icon${id}.js';
        import { defineElement } from '@spectrum-web-components/base/src/define-element.js';

        defineElement('${iconElementName}', Icon${ComponentName});

        declare global {
            interface HTMLElementTagNameMap {
                '${iconElementName}': Icon${ComponentName};
            }
        }
        `;

        prettier
            .format(iconRegistration, {
                printWidth: 100,
                tabWidth: 2,
                useTabs: false,
                semi: true,
                singleQuote: true,
                trailingComma: 'all',
                bracketSpacing: true,
                jsxBracketSameLine: false,
                arrowParens: 'avoid',
                parser: 'typescript',
            })
            .then((iconRegistrationFile) => {
                fs.writeFileSync(
                    path.join(
                        rootDir,
                        'packages',
                        'icons-ui',
                        'icons',
                        `${iconElementName}.ts`
                    ),
                    iconRegistrationFile,
                    'utf-8'
                );
            });

        const importStatement = `\r\nimport '@spectrum-web-components/icons-ui/icons/${iconElementName}.js';`;
        const metadata = `{name: '${Case.sentence(
            ComponentName
        )}', tag: '<${iconElementName}>', story: (size: string): TemplateResult => html\`<${iconElementName} size=\$\{size\}></${iconElementName}>\`},\r\n`;
        manifestImports += importStatement;
        manifestListings += metadata;
    });
}

const iconsV1 = (
    await fg(`${rootDir}/node_modules/${S1IConsPackageDir}/**.svg`)
).sort();

const iconsV2 = (
    await fg(`${rootDir}/node_modules/${S2IConsPackageDir}/**.svg`)
).sort();

const iconsV1NameList = iconsV1.map((i) => {
    let id = path
        .basename(i, '.svg')
        .replace('S2_Icon_', '')
        .replace('_20_N', '')
        .replace('_22x20_N', '');

    if (id.search(/^Ad[A-Z]/) !== -1) {
        id = id.replace(/^Ad/, '');
        id += 'Advert';
    }

    if (id === 'UnLink') {
        id = 'Unlink';
    }
    if (id === 'TextStrikeThrough') {
        id = 'TextStrikethrough';
    }

    let ComponentName = id === 'github' ? 'GitHub' : Case.pascal(id);

    if (ComponentName === 'TextStrikeThrough') {
        ComponentName = 'TextStrikethrough';
    }
    if (ComponentName === 'UnLink') {
        ComponentName = 'Unlink';
    }

    return ComponentName;
});
const iconsV2NameList = iconsV2.map((i) => {
    let id = path
        .basename(i, '.svg')
        .replace('S2_Icon_', '')
        .replace('_20_N', '')
        .replace('_22x20_N', '');

    if (id.search(/^Ad[A-Z]/) !== -1) {
        id = id.replace(/^Ad/, '');
        id += 'Advert';
    }

    if (id === 'UnLink') {
        id = 'Unlink';
    }
    if (id === 'TextStrikeThrough') {
        id = 'TextStrikethrough';
    }

    let ComponentName = id === 'github' ? 'GitHub' : Case.pascal(id);

    if (ComponentName === 'TextStrikeThrough') {
        ComponentName = 'TextStrikethrough';
    }
    if (ComponentName === 'UnLink') {
        ComponentName = 'Unlink';
    }

    return ComponentName;
});

await buildIcons(iconsV1, 'icons', iconsV2NameList);
await buildIcons(iconsV2, 'icons-s2', iconsV1NameList);

const exportString = `\r\nexport { setCustomTemplateLiteralTag } from './custom-tag.js';\r\n`;
fs.appendFileSync(
    path.join(rootDir, 'packages', 'icons-ui', 'src', 'icons.ts'),
    exportString,
    'utf-8'
);

fs.appendFileSync(
    manifestPath,
    `${manifestImports}${manifestListings}];\r\n`,
    'utf-8'
);
