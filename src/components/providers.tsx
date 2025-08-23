'use client';

import type { PropsWithChildren } from 'react';

import { HeroUIProvider } from '@heroui/react';

export function Providers({ children }: PropsWithChildren) {
  return <HeroUIProvider reducedMotion="user">{children}</HeroUIProvider>;
}
