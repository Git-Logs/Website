import { createMDXSource } from 'fumadocs-mdx';
import type { InferMetaType, InferPageType } from 'fumadocs-core/source';
import { loader } from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';
import { IconContainer } from '@/components/ui/icon';
import { meta, docs, blog as blogPosts } from '@/.source';
import { attachFile, createOpenAPI } from 'fumadocs-openapi/server';

export const source = loader({
  baseUrl: '/docs',
  icon(icon) {
    if (icon && icon in icons)
      return createElement(IconContainer, {
        icon: icons[icon as keyof typeof icons],
      });
  },
  source: createMDXSource(docs, meta),
  pageTree: { attachFile }
});

export const blog = loader({
  baseUrl: '/blog',
  source: createMDXSource(blogPosts, []),
});

export type Page = InferPageType<typeof source>;
export type Meta = InferMetaType<typeof source>;

export const openapi = createOpenAPI();