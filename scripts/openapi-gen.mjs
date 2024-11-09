import * as OpenAPI from 'fumadocs-openapi';
import { rimrafSync } from 'rimraf';

const out = './content/docs/references';

rimrafSync(out, {
    filter(v) {
        return !v.endsWith('index.mdx')
            && !v.endsWith('meta.json')
            && !v.endsWith('400.mdx')
            && !v.endsWith('401.mdx')
            && !v.endsWith('404.mdx')
            && !v.endsWith('500.mdx')
    }
});

void OpenAPI.generateFiles({
    input: ['./openapi.yaml'],
    output: out,
    groupBy: 'tag'
});