'use client';

import { Link } from '@heroui/react';

import { routes } from '~/configs/route';

export function FooterNavigation() {
  return (
    <div className="space-y-6">
      <h4
        className="font-heading text-large font-semibold"
        id="footer-navigation-heading"
      >
        Quick Navigation
      </h4>
      <nav aria-labelledby="footer-navigation-heading">
        <div className="flex flex-col space-y-3">
          {routes
            .filter((route) => route.key !== 'participate')
            .map((route) =>
              route.children ? (
                route.children.map((child) => (
                  <Link
                    key={child.key}
                    aria-label={child.label}
                    className="text-primary-foreground/80 w-fit"
                    href={child.href || '#'}
                  >
                    {child.label}
                  </Link>
                ))
              ) : (
                <Link
                  key={route.key}
                  aria-label={route.label}
                  className="text-primary-foreground/80 w-fit"
                  href={route.href || '#'}
                >
                  {route.label}
                </Link>
              ),
            )}
        </div>
      </nav>
    </div>
  );
}
