'use client';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from '@heroui/react';
import { useState } from 'react';
import { FaGithub, FaMoon, FaSun } from 'react-icons/fa';

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [iconTheme, setIconTheme] = useState(false);

  return (
    <Navbar
    shouldHideOnScroll={true}
    isBordered={true}
      maxWidth="xl"
      className="bg-fore dark:bg-back p-3"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden text-back dark:text-fore"
        />
        <NavbarBrand>
          <p className="text-foreground-50 text-back dark:text-fore text-2xl mt-2">
            مصطفی کمری
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden space-x-2 space-x-reverse sm:flex gap-6"
        justify="center"
      >
        <NavbarItem>
          <Link
            className="text-foreground-50 text-back dark:text-fore text-2xl mt-2"
            href="#"
          >
            نمونه کارها
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-foreground-50 text-back dark:text-fore text-2xl mt-2"
            href="#"
          >
            درباره من
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-foreground-50 text-back dark:text-fore text-2xl mt-2"
            href="#"
          >
            خانه
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex space-x-4 space-x-reverse justify-center items-center">
          <Link
            className="text-foreground-50 text-back dark:text-fore text-4xl mt-2"
            href="#"
          >
            <FaGithub />
          </Link>
          <span
            onClick={() => {
              setIconTheme(!iconTheme);
              document.documentElement.classList.toggle('dark');
            }}
            className="text-foreground-50 hover:opacity-75 duration-200 text-back dark:text-fore text-2xl mt-2"
          >
            {iconTheme ? <FaSun /> : <FaMoon />}
          </span>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-fore dark:bg-back">
        <NavbarMenuItem>
          <Link
            className="text-foreground-50 text-back dark:text-fore text-xl mt-6"
            href="/"
          >
            خانه
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="text-foreground-50 text-back dark:text-fore text-xl mt-6"
            href="/"
          >
            درباره من
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="text-foreground-50 text-back dark:text-fore text-xl mt-6"
            href="/"
          >
            نمونه کارها
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
