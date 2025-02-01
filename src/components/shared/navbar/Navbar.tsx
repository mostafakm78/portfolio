'use client';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from '@heroui/react';
import { useCallback, useState } from 'react';
import { FaBars, FaGithub, FaMoon, FaSun } from 'react-icons/fa';
import { GrContact } from 'react-icons/gr';
import { IoIosInformationCircleOutline, IoMdHome } from 'react-icons/io';
import { PiBookmarkSimpleFill } from 'react-icons/pi';

export default function NavbarComponent() {
  const [iconTheme, setIconTheme] = useState(false);

  const scrollToAbout = useCallback(() => {
    const section = document.getElementById('about-me');
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  const scrollToContact = useCallback(() => {
    const section = document.getElementById('Contact');
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  return (
    <Navbar
      shouldHideOnScroll={true}
      isBordered={true}
      maxWidth="xl"
      className="bg-fore dark:bg-back p-3"
    >
      <NavbarContent>
        <Dropdown
          className="bg-white/80 dark:bg-black/80 shadow-lg rounded-md"
          backdrop="blur"
        >
          <DropdownTrigger>
            <Button className="mt-2 text-2xl lg:hidden" variant="bordered">
              {' '}
              <FaBars className="text-back dark:text-fore" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions" variant="faded">
            <DropdownItem key="new">
              <Link
                className="text-foreground-50 text-back dark:text-fore text-xl mt-6"
                href="/"
              >
                <IoMdHome className="ml-2 text-2xl" />
                صفحه اصلی
              </Link>
            </DropdownItem>
            <DropdownItem key="copy">
              {' '}
              <Link
                className="text-foreground-50 cursor-pointer text-back dark:text-fore text-xl mt-6"
                onPress={scrollToAbout}
              >
                <IoIosInformationCircleOutline className="ml-2 text-2xl" />
                درباره من
              </Link>
            </DropdownItem>
            <DropdownItem key="edit">
              <Link
                className="text-foreground-50 text-back dark:text-fore text-xl mt-6"
                onPress={scrollToContact}
              >
                <GrContact className="ml-2" />
                تماس با من
              </Link>
            </DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
              <Link
                className="text-foreground-50 pb-2 text-back dark:text-fore text-xl mt-6"
                href="/"
              >
                <PiBookmarkSimpleFill className="ml-2 text-2xl" />
                نمونه کارها
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
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
            className="text-foreground-50 hidden lg:block cursor-pointer text-back dark:text-fore text-2xl mt-2"
            href="/"
          >
            صفحه اصلی
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-foreground-50 hidden lg:block cursor-pointer text-back dark:text-fore text-2xl mt-2"
            href="#"
          >
            نمونه کارها
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-foreground-50 hidden lg:block cursor-pointer text-back dark:text-fore text-2xl mt-2"
            onPress={scrollToAbout}
          >
            درباره من
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-foreground-50 hidden lg:block cursor-pointer text-back dark:text-fore text-2xl mt-2"
            onPress={scrollToContact}
          >
            تماس با من
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
            className="text-foreground-50 cursor-pointer hover:opacity-75 duration-200 text-back dark:text-fore text-2xl mt-2"
          >
            {iconTheme ? <FaSun /> : <FaMoon />}
          </span>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
