'use client';

import type { PropsWithChildren } from 'react';

import { HeroUIProvider } from '@heroui/react';

import { NavbarLayout } from '~/components/layout/navbar';

export function Providers({ children }: PropsWithChildren) {
  return (
    <HeroUIProvider reducedMotion="user">
      <div className="font-main min-h-screen">
        <NavbarLayout />
        {children}
      </div>
    </HeroUIProvider>
  );
}
