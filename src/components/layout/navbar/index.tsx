'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
} from '@heroui/react';
import Image from 'next/image';
import { useState } from 'react';

import { DesktopMenu } from '~/components/layout/navbar/menu/desktop';
import { MobileMenu } from '~/components/layout/navbar/menu/mobile';

export function NavbarLayout() {
  const [_, setIsMobileOpen] = useState(false);

  return (
    <Navbar
      isBordered
      className="lg:h-20"
      maxWidth="xl"
      onMenuOpenChange={setIsMobileOpen}
    >
      <NavbarBrand>
        <Image
          alt="Logo"
          className="h-12 w-[42px] lg:h-16 lg:w-[56px]"
          height={64}
          src="/logo.png"
          width={56}
        />
      </NavbarBrand>

      {/* DESKTOP MENU */}
      <NavbarContent className="hidden lg:flex" justify="end">
        <DesktopMenu />
      </NavbarContent>

      {/* MOBILE MENU */}
      <NavbarContent className="lg:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>
      <MobileMenu />
    </Navbar>
  );
}
