import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-500">not found</h1>
      <p className="text-lg text-gray-500 mt-2">404</p>
    </div>
  );
}
