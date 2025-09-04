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
      maxWidth="xl"
      role="navigation"
      onMenuOpenChange={setIsMobileOpen}
    >
      <NavbarBrand>
        {/* DESKTOP LOGO */}
        <Image
          alt="Comic Paradise Logo"
          className="h-6 w-[129px] lg:h-8 lg:w-[172px]"
          height={32}
          src="/logo-horizontal.png"
          width={172}
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
