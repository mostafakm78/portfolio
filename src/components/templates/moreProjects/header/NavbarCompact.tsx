'use client';
import { useTranslation } from 'react-i18next';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from '@heroui/react';
import { useState } from 'react';
import { FaGithub, FaMoon, FaSun } from 'react-icons/fa';


export default function NavbarComponentCompact() {
  const { t, i18n } = useTranslation();
  const [iconTheme, setIconTheme] = useState(false);

  return (
    <Navbar shouldHideOnScroll={true} isBordered={true} maxWidth="xl" className="bg-fore shadow-md dark:bg-back lg:p-3" dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}>
      <NavbarContent>
        <NavbarBrand className="hidden lg:block">
          <p className="text-back dark:text-fore text-2xl mt-2">{t('Mostafa Kamari')}</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link className="text-foreground-50 flex justify-center items-center cursor-pointer text-back dark:text-fore text-base mt-2" href="/">
            {t('Home Page')}
          </Link>
        </NavbarItem>
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
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
