import { createMetadataImage } from 'fumadocs-core/server';
import { source } from '@/app/source';

export const metadataImage: any = createMetadataImage({
  source,
  imageRoute: 'og',
});
