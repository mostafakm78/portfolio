'use client';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@heroui/react';
import { useState } from 'react';
import { FaGithub, FaMoon, FaSun } from 'react-icons/fa';
import { TbArrowBack } from 'react-icons/tb';

export default function NavbarComponentCompact() {
  const [iconTheme, setIconTheme] = useState(false);

  return (
    <Navbar
      shouldHideOnScroll={true}
      isBordered={true}
      maxWidth="xl"
      className="bg-fore shadow-md dark:bg-back p-3"
    >
      <NavbarContent>
        <NavbarBrand>
          <p className="text-back dark:text-fore text-2xl mt-2">مصطفی کمری</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link
            className="text-foreground-50 flex justify-center items-center cursor-pointer text-back dark:text-fore text-xl mt-2"
            href="/"
          >
            <TbArrowBack />
            صفحه اصلی
          </Link>
        </NavbarItem>
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
            className="text-back cursor-pointer hover:opacity-75 duration-200  dark:text-fore text-2xl mt-2"
          >
            {iconTheme ? <FaSun /> : <FaMoon />}
          </span>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
