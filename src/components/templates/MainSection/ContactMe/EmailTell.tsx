import { ContactDataProps } from '@/types/Types';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { IoMdMail } from 'react-icons/io';
import { IoCall } from 'react-icons/io5';

const ContactData: ContactDataProps[] = [
  { name: { fa: 'شماره تماس :', en: 'Phone' }, link: 'tel:+989169799533', logo: <IoCall />, text: '+989169799533' },
  { name: { fa: 'ایمیل :', en: 'Email' }, link: 'mailto:mostafamf555@gmail.com?subject=Message&body=Hello!', logo: <IoMdMail />, text: 'Mostafamf555@gmail.com' },
];

const EmailTell = () => {
  const locale = useLocale();

  const toFaDigits = (value: string) => value.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)]);

  return (
    <>
      {ContactData.map((item: ContactDataProps, index: number) => {
        return (
          <Link key={index} href={item.link} className={`flex ${locale === 'fa' ? 'bg-linear-240' : 'flex-row-reverse bg-linear-60'} items-center justify-between w-full  p-3 from-secondary via-background to-background rounded-[15px] md:text-xl text-sm inset-shadow-sm dark:inset-shadow-foreground/15 hover:via-secondary duration-300 transition-all hover:px-12`}>
            <span className="font-bold flex items-center gap-2">
              {item.logo}
              <span>{locale === 'fa' ? item.name.fa : item.name.en}</span>
            </span>
            <span dir='ltr' className="font-normal"> {locale === 'fa' ? toFaDigits(item.text) : item.text}</span>
          </Link>
        );
      })}
    </>
  );
};

export default EmailTell;
