'use client';

import Link from 'next/link';
import { Button, NavbarMenu, NavbarMenuItem } from '@heroui/react';
import { clsx } from '@heroui/shared-utils';
import { usePathname } from 'next/navigation';

import { routes } from '~/configs/route';

export function MobileMenu() {
  const pathname = usePathname();

  return (
    <NavbarMenu className="gap-0 px-3">
      {routes.map((route) => {
        const isActive = route.href === pathname;

        if (route.children) {
          const activeChild = route.children.find(
            (child) => child.href === pathname,
          );

          return (
            <NavbarMenuItem key={route.key}>
              <div
                className={clsx(
                  'text-medium flex h-8 items-center px-3 font-semibold',
                  activeChild && 'text-primary',
                )}
              >
                {route.label}
              </div>
              <div className="flex flex-col">
                {route.children.map((child) => (
                  <Button
                    key={child.key}
                    fullWidth
                    as={Link}
                    className={clsx(
                      'text-small justify-start pl-6',
                      child.href !== pathname && 'text-foreground/80',
                    )}
                    color={child.href === pathname ? 'primary' : undefined}
                    href={child.href || '#'}
                    radius="sm"
                    size="sm"
                    variant={child.href === pathname ? 'flat' : 'light'}
                  >
                    {child.label}
                  </Button>
                ))}
              </div>
            </NavbarMenuItem>
          );
        }

        return (
          <NavbarMenuItem key={route.key}>
            <Button
              fullWidth
              as={Link}
              className="text-medium justify-start font-semibold"
              color={isActive ? 'primary' : undefined}
              href={route.href || '#'}
              radius="sm"
              size="sm"
              variant={isActive ? 'flat' : 'light'}
            >
              {route.label}
            </Button>
          </NavbarMenuItem>
        );
      })}
    </NavbarMenu>
  );
}
