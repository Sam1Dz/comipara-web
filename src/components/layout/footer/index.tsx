'use client';

import { Divider, Link } from '@heroui/react';

import { FooterBrand } from './brand';
import { FooterNavigation } from './navigation';
import { FooterParticipate } from './participate';

export function FooterLayout() {
  return (
    <footer
      aria-label="Footer"
      className="bg-primary text-primary-foreground pt-16 pb-8"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          <FooterBrand />
          <FooterNavigation />
          <FooterParticipate />
        </div>
        <Divider className="bg-primary-foreground/20 mt-12 mb-8" />
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-primary-foreground/80 text-small">
            &copy;&nbsp;2025 Comic Paradise (COMIPARA). Organized by Comipara
            Pro.
          </p>
          <Link
            aria-label="Email comiparaid@gmail.com"
            className="text-primary-foreground/80 text-small"
            href="mailto:comiparaid@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            comiparaid@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
