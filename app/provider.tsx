'use client';

import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider';
import { TooltipProvider } from '@radix-ui/react-tooltip';

export function Provider({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <RootProvider
      search={{
        enabled: false
      }}
    >
      <TooltipProvider>
        <script
          suppressHydrationWarning
        />
        {children}
      </TooltipProvider>
    </RootProvider>
  );
}
