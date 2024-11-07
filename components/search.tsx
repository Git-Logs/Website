'use client';

import type { SharedProps } from 'fumadocs-ui/components/dialog/search';
import SearchDialog from 'fumadocs-ui/components/dialog/search-default';
import { useMode } from '@/app/layout.client';

export default function CustomSearchDialog(
  props: SharedProps,
): React.ReactElement {
  return (
    <SearchDialog
      {...props}
      defaultTag={useMode() ?? 'basics'}
      allowClear
      tags={[
        {
          name: 'Basics',
          value: 'basics',
        }
      ]}
    />
  );
}
