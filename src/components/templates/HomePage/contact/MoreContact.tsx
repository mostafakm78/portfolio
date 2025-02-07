'use client';

import React from 'react';
import { Accordion, AccordionItem, Link } from '@heroui/react';
import {
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTelegram,
  FaWhatsapp,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function App() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['1']));

  const handleSelectionChange = (keys: unknown) => {
    if (keys instanceof Set) {
      setSelectedKeys(keys as Set<string>);
    }
  };

  return (
    <Accordion
      selectedKeys={selectedKeys}
      onSelectionChange={handleSelectionChange}
      selectionMode="single"
      className="rounded-md"
    >
      <AccordionItem
        key="1"
        classNames={{
          title: 'text-lg text-white/80 mr-4',
          heading: 'bg-back dark:bg-fore rounded-md shadow-md',
          trigger: 'pl-4',
          indicator: 'text-green-600 text-2xl',
          content:
            'bg-black/20 dark:bg-sky-300/50 rounded-md w-10/12 mb-4 px-6 pt-4 mx-auto',
        }}
        aria-label="Accordion 1"
        title="تلفن و ایمیل من"
      >
        <Link
          href="tel:+989169799533"
          className="flex items-center mb-2 lg:text-lg text-sm dark:text-fore text-back"
        >
          <FaPhone className="ml-3" />
          تلفن: 09169799533
        </Link>
        <Link
          href="mailto:mostafamf555@gmail.com?subject=موضوع شما :&body=سلام !"
          className="flex items-center mb-2 lg:text-lg text-back text-sm dark:text-fore"
        >
          <MdEmail className="ml-3" /> ایمیل : mostafamf555@gmail.com
        </Link>
      </AccordionItem>
      <AccordionItem
        classNames={{
          title: 'text-lg text-white/80 mr-4',
          heading: 'bg-back dark:bg-fore rounded-md shadow-md',
          trigger: 'pl-4',
          indicator: 'text-green-600 text-2xl',
          content:
            'bg-black/20 dark:bg-sky-300/50 rounded-md w-10/12 mb-4 px-6 pt-4 mx-auto',
        }}
        key="2"
        aria-label="Accordion 2"
        title="منو در فضای مجازی دنبال کنین"
      >
        <div className="flex flex-col flex-wrap justify-center items-start  space-x-reverse">
          <Link
            isDisabled
            href="/"
            className="flex items-center lg:text-lg text-sm text-back dark:text-fore"
          >
            {' '}
            <FaInstagram className="ml-2" /> اینستاگرام
          </Link>
          <Link
            href="https://t.me/Mostafakamari78"
            target="_blank"
            className="flex items-center lg:text-lg text-sm text-back dark:text-fore"
          >
            {' '}
            <FaTelegram className="ml-2" /> تلگرام
          </Link>
          <Link
            href="/"
            isDisabled
            className="flex items-center lg:text-lg text-sm text-back dark:text-fore"
          >
            {' '}
            <FaLinkedin className="ml-2" /> لینکدین
          </Link>
          <Link
            href="https://wa.me/989169799533"
            target="_blank"
            className="flex items-center lg:text-lg text-sm text-back dark:text-fore"
          >
            {' '}
            <FaWhatsapp className="ml-2" /> واتس اپ
          </Link>
        </div>
      </AccordionItem>
    </Accordion>
  );
}
