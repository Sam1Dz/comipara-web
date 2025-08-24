'use client';

import { Fragment } from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/react';
import { LuChevronDown } from 'react-icons/lu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from '@heroui/shared-utils';

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
            <Dropdown key={route.key} radius="sm">
              <DropdownTrigger>
                <Button
                  className={clsx(
                    'text-medium',
                    activeChild && 'font-semibold',
                  )}
                  color={activeChild ? 'primary' : undefined}
                  endContent={<LuChevronDown />}
                  radius="sm"
                  variant="light"
                >
                  {route.label}
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                {route.children.map((child) => (
                  <DropdownItem
                    key={child.key}
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
