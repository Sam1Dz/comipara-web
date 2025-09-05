'use client';

import { HeroUIProvider } from '@heroui/react';
import React from 'react';
import { useRouter } from 'next/navigation';

import { FooterLayout } from '~/components/layout/footer';
import { NavbarLayout } from '~/components/layout/navbar';

export function Providers({ children }: React.PropsWithChildren) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push} reducedMotion="user">
      <div
        aria-label="Comic Paradise main document"
        className="font-main min-h-screen"
        role="document"
      >
        <NavbarLayout />
        {children}
        <FooterLayout />
      </div>
    </HeroUIProvider>
  );
}
