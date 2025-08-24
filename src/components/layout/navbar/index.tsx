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
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <Navbar
      isBordered
      aria-label="Main navigation"
      className="lg:h-20"
      maxWidth="xl"
      role="navigation"
      onMenuOpenChange={setIsMobileOpen}
    >
      <NavbarBrand>
        <Image
          alt="Comic Paradise Logo"
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
        <NavbarMenuToggle
          aria-label={isMobileOpen ? 'Close mobile menu' : 'Open mobile menu'}
        />
      </NavbarContent>
      <MobileMenu />
    </Navbar>
  );
}
