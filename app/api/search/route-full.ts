import { source } from '@/app/source';
import { createSearchAPI } from 'fumadocs-core/search/server';

export const { GET } = createSearchAPI('advanced', {
    indexes: source.getPages().map((page: any) => ({
        title: page.data.title ? page.data.title : 'Title go brrr',
        description: page.data.description,
        url: page.url,
        id: page.url,
        structuredData: page.data.load().then((data: any) => data.structuredData),
    })),
});