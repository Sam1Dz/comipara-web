'use client';

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/react';
import { clsx } from '@heroui/shared-utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import { LuChevronDown } from 'react-icons/lu';

import { routes } from '~/configs/route';

export function DesktopMenu() {
  const pathname = usePathname();

  return (
    <Fragment>
      {routes.map((route) => {
        const isActive = route.href === pathname;

        if (route.children) {
          const activeChild = route.children.find(
            (child) => child.href === pathname,
          );

          return (
            <Dropdown
              key={route.key}
              aria-label={`${route.label} menu`}
              radius="sm"
            >
              <DropdownTrigger>
                <Button
                  aria-expanded={!!activeChild}
                  aria-haspopup="menu"
                  aria-label={route.label}
                  className={clsx(
                    'text-medium',
                    activeChild && 'font-semibold',
                  )}
                  color={activeChild ? 'primary' : undefined}
                  endContent={<LuChevronDown aria-hidden="true" />}
                  radius="sm"
                  variant="light"
                >
                  {route.label}
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label={`${route.label} submenu`}>
                {route.children.map((child) => (
                  <DropdownItem
                    key={child.key}
                    aria-label={child.label}
                    as={Link}
                    className={clsx(child.href === pathname && 'font-semibold')}
                    color={child.href === pathname ? 'primary' : undefined}
                    href={child.href || '#'}
                  >
                    {child.label}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          );
        }

        return (
          <Button
            key={route.key}
            aria-current={isActive ? 'page' : undefined}
            aria-label={route.label}
            as={Link}
            className={clsx('text-medium', isActive && 'font-semibold')}
            color={isActive ? 'primary' : undefined}
            href={route.href || '#'}
            radius="sm"
            variant="light"
          >
            {route.label}
          </Button>
        );
      })}
    </Fragment>
  );
}
