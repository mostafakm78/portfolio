'use client';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Accordion, AccordionItem, Link } from '@heroui/react';
import { FaInstagram, FaLinkedin, FaPhone, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function App() {
  const { t, i18n } = useTranslation();
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['1']));

  const handleSelectionChange = (keys: unknown) => {
    if (keys instanceof Set) {
      setSelectedKeys(keys as Set<string>);
    }
  };

  return (
    <Accordion selectedKeys={selectedKeys} onSelectionChange={handleSelectionChange} selectionMode="single" className="rounded-md">
      <AccordionItem
        key="1"
        classNames={{
          title: i18n.language === 'fa' ? 'text-lg text-green-700 mr-4' : 'text-lg text-green-700 ml-4',
          heading: 'bg-back dark:bg-fore rounded-md shadow-md',
          trigger: i18n.language === 'fa' ? 'pl-4' : 'pr-4',
          indicator: 'text-green-600 text-2xl',
          content: 'bg-black/20 dark:bg-sky-300/50 rounded-md w-10/12 mb-4 px-6 pt-4 mx-auto',
        }}
        aria-label="Accordion 1"
        title={t('Phone and Email')}
        dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
      >
        <Link href="tel:+989169799533" className="flex items-center mb-2 lg:text-lg text-sm dark:text-fore text-back">
          <FaPhone className={i18n.language === 'fa' ? "ml-3" : "mr-3"} />
          {t('Phone')}
        </Link>
        <Link href="mailto:mostafamf555@gmail.com?subject=موضوع شما :&body=سلام !" className="flex items-center mb-2 lg:text-lg text-back text-sm dark:text-fore">
          <MdEmail className={i18n.language === 'fa' ? "ml-3" : "mr-3"} /> {t('EmailMe')}
        </Link>
      </AccordionItem>
      <AccordionItem
        classNames={{
          title: i18n.language === 'fa' ? 'text-lg text-green-700 mr-4' : 'text-lg text-green-700 ml-4',
          heading: 'bg-back dark:bg-fore rounded-md shadow-md',
          trigger: i18n.language === 'fa' ? 'pl-4' : 'pr-4',
          indicator: 'text-green-600 text-2xl',
          content: 'bg-black/20 dark:bg-sky-300/50 rounded-md w-10/12 mb-4 px-6 pt-4 mx-auto',
        }}
        key="2"
        aria-label="Accordion 2"
        title={t('Follow')}
        dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
      >
        <div className="flex flex-col flex-wrap justify-center items-start  space-x-reverse">
          <Link href="http://www.instagram.com/imyour_mosi" target="_blank" className="flex items-center lg:text-lg text-sm text-back dark:text-fore">
            {' '}
            <FaInstagram className={i18n.language === 'fa' ? "ml-2" : "mr-2"} /> {t('Insta')}
          </Link>
          <Link href="https://t.me/Mostafakamari78" target="_blank" className="flex items-center lg:text-lg text-sm text-back dark:text-fore">
            {' '}
            <FaTelegram className={i18n.language === 'fa' ? "ml-2" : "mr-2"} /> {t('Tel')}
          </Link>
          <Link href="http://linkedin.com/in/mostafa-kamari-b82450351" target="_blank" className="flex items-center lg:text-lg text-sm text-back dark:text-fore">
            {' '}
            <FaLinkedin className={i18n.language === 'fa' ? "ml-2" : "mr-2"} /> {t('Linkedin')}
          </Link>
          <Link href="https://wa.me/989169799533" target="_blank" className="flex items-center lg:text-lg text-sm text-back dark:text-fore">
            {' '}
            <FaWhatsapp className={i18n.language === 'fa' ? "ml-2" : "mr-2"} /> {t('Whats')}
          </Link>
        </div>
      </AccordionItem>
    </Accordion>
  );
}
