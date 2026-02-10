import { useLocale } from 'next-intl';

const Challenges = ({ challenges }: { challenges: { fa: string[]; en: string[] } }) => {
  const locale = useLocale();
  const list = locale === 'fa' ? challenges.fa : challenges.en;

  return (
    <ul dir={locale === 'fa' ? 'rtl' : 'ltr'} className="list-disc mr-3 opacity-90 text-sm 3xl:text-base">
      {list.map((chall, index: number) => {
        return <li key={index}>{chall}</li>;
      })}
    </ul>
  );
};

export default Challenges;
