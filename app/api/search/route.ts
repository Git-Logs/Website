import { NextResponse } from 'next/server';
import { source } from '@/app/source';

export const revalidate = false;

export async function GET(): Promise<Response> {
    const pages = source.getPages();
    const results = await Promise.all(
        pages.map(async (page) => {
            const structured = (await page.data.load()).structuredData;

            return {
                id: page.url,
                structured: structured,
                tag: page.slugs[0],
                url: page.url,
                title: page.data.title,
                description: page.data.description,
            }
        }),
    );

    return NextResponse.json(results);
}