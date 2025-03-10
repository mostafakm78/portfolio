'use client';
import { useTranslation } from 'react-i18next';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem } from '@heroui/react';
import { useCallback, useState } from 'react';
import { FaBars, FaGithub, FaMoon, FaSun } from 'react-icons/fa';
import { GrContact } from 'react-icons/gr';
import { IoIosInformationCircleOutline, IoMdHome } from 'react-icons/io';
import { PiBookmarkSimpleFill } from 'react-icons/pi';

export default function NavbarComponent() {
  const { t, i18n } = useTranslation();
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
    <Navbar shouldHideOnScroll={true} isBordered={true} maxWidth="xl" className="bg-fore shadow-md dark:bg-back lg:p-3" dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}>
      <NavbarContent>
        <Dropdown className="bg-white/80 dark:bg-black/80 shadow-lg rounded-md" backdrop="blur">
          <DropdownTrigger>
            <Button className="mt-2 text-2xl bg-transparent lg:hidden" variant="flat">
              {' '}
              <FaBars className="text-back dark:text-fore" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu variant="light" dir={i18n.language === 'fa' ? 'rtl' : 'ltr'} className="py-4" aria-label="Static Actions">
            <DropdownItem key="home">
              <Link className="cursor-pointer text-black dark:text-white hover:opacity-60 text-xl" href="/">
                <IoMdHome className={i18n.language === 'fa' ? "ml-2 text-2xl" : 'mr-2 text-2xl'} />
                {t('Home Page')}
              </Link>
            </DropdownItem>
            <DropdownItem key="about">
              {' '}
              <Link className="cursor-pointer text-black dark:text-white hover:opacity-60 text-xl" onPress={scrollToAbout}>
                <IoIosInformationCircleOutline className={i18n.language === 'fa' ? "ml-2 text-2xl" : 'mr-2 text-2xl'} />
                {t('About Me')}
              </Link>
            </DropdownItem>
            <DropdownItem key="contact">
              <Link className="cursor-pointer text-black dark:text-white  hover:opacity-60 text-xl" onPress={scrollToContact}>
                <GrContact className={i18n.language === 'fa' ? "ml-2 text-2xl" : 'mr-2 text-2xl'} />
                {t('Contact Me')}
              </Link>
            </DropdownItem>
            <DropdownItem key="projects">
              <Link className="cursor-pointer text-black dark:text-white  hover:opacity-60 text-xl" href="/more-projects">
                <PiBookmarkSimpleFill className={i18n.language === 'fa' ? "ml-2 text-2xl" : 'mr-2 text-2xl'} />
                {t('Resume')}
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarBrand>
          <p className="text-back dark:text-fore text-2xl mt-2">{t('Mostafa Kamari')}</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden space-x-2 space-x-reverse sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link className="text-foreground-50 hidden lg:block cursor-pointer text-back dark:text-fore text-2xl mt-2" href="/">
            {t('Home Page')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-foreground-50 hidden lg:block cursor-pointer text-back dark:text-fore text-2xl mt-2" href="/more-projects">
            {t('Resume')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-foreground-50 hidden lg:block cursor-pointer text-back dark:text-fore text-2xl mt-2" onPress={scrollToAbout}>
            {t('About Me')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-foreground-50 hidden lg:block cursor-pointer text-back dark:text-fore text-2xl mt-2" onPress={scrollToContact}>
            {t('Contact Me')}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className={i18n.language === 'fa' ? 'flex space-x-4 space-x-reverse justify-center items-center' : 'flex space-x-4 justify-center items-center'}>
          <Link className="text-foreground-50 text-back dark:text-fore text-4xl mt-2" href="https://github.com/mostafakm78" target="black">
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
          <span
            onClick={() => {
              i18n.changeLanguage(i18n.language === 'en' ? 'fa' : 'en');
            }}
            className="text-back cursor-pointer hover:opacity-75 duration-200  dark:text-fore text-2xl mt-3"
          >
            {i18n.language === 'en' ? 'fa' : 'En'}
          </span>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
