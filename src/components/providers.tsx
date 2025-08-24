'use client';

import type { PropsWithChildren } from 'react';

import { HeroUIProvider } from '@heroui/react';

import { NavbarLayout } from '~/components/layout/navbar';

export function Providers({ children }: PropsWithChildren) {
  return (
    <HeroUIProvider reducedMotion="user">
      <div
        aria-label="Comic Paradise main document"
        className="font-main min-h-screen"
        role="document"
      >
        <NavbarLayout />
        {children}
      </div>
    </HeroUIProvider>
  );
}
