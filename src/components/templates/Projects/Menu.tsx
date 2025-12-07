import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { RiMenuSearchLine } from 'react-icons/ri';
import { App, apps } from '../HomePage/Aboutme';

export function Menu() {
  const t = useTranslations('AllProjects');
  const [selectedItem, setSelectedItem] = useState<string[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const query = useSearchParams();
  const router = useRouter();

  const sortFromQuery = (query.get('sort') as 'oldest' | 'newest') || 'newest';

  const [selectedSort, setSelectedSort] = useState<'oldest' | 'newest'>(sortFromQuery);

  useEffect(() => {
    setOpen(false);
  }, [query]);

  useEffect(() => {
    setSelectedSort(sortFromQuery);
  }, [sortFromQuery]);

  useEffect(() => {
    const currentParams = new URLSearchParams(query.toString());
    const currentSort = currentParams.get('sort');

    if (currentSort === selectedSort) return;

    currentParams.set('sort', selectedSort);

    router.push(`?${currentParams.toString()}`);
  }, [selectedSort, router]);

  const toggleSelected = (name: string, checked: boolean) => {
    setSelectedItem((prev) => {
      if (checked) {
        return [...prev, name];
      } else {
        return prev.filter((item) => item !== name);
      }
    });
  };

  const handleSearchKeyWord = () => {
    if (searchKeyword.trim() !== '') {
      const searchKeyWordLower = searchKeyword.toLowerCase();
      const currentParams = new URLSearchParams(query.toString());
      currentParams.set('keyword', searchKeyWordLower);
      router.push(`?${currentParams.toString()}`);
    }
  };

  const handleClearKeyWord = () => {
    const params = new URLSearchParams(query.toString());
    params.delete('keyword');

    router.replace(`?${params.toString()}`);
    setSearchKeyword('');
    return;
  };

  const handleItem = () => {
    const params = new URLSearchParams(query.toString());
    if (selectedItem.length > 0) {
      params.set('tech', selectedItem.join('-').toLowerCase());
      router.push(`?${params.toString()}`);
    }
  };

  const handleClearKeyItem = () => {
    const params = new URLSearchParams(query.toString());
    params.delete('tech');

    router.replace(`?${params.toString()}`);
    setSelectedItem([]);
    return;
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative rounded-full border-none md:h-9 md:w-9 h-5 w-5 p-3.5 shadow-none bg-background cursor-pointer hover:bg-background/50 text-secondary">
          <RiMenuSearchLine />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-6">
        <SheetHeader>
          <SheetTitle className="text-secondary">{t('findproject')}</SheetTitle>
          <SheetDescription className="text-secondary/80">{t('findpr')}</SheetDescription>
        </SheetHeader>
        <section className="h-full lg:flex flex-col space-y-6">
          <div className="flex flex-col gap-3">
            <span className="relative pr-6 before:content-[''] before:h-0.5 before:w-4 before:absolute before:bg-secondary before:right-0 before:top-1/2 before:-translate-y-1/2 text-secondary">{t('sortby')}</span>
            <RadioGroup value={selectedSort} onValueChange={(val) => setSelectedSort(val as 'oldest' | 'newest')} className="flex items-center gap-4 justify-center">
              <div className={`p-2 bg-foreground rounded-2xl text-sm text-secondary cursor-pointer transition-all hover:scale-105 duration-300 ${selectedSort === 'oldest' ? 'border bg-primary/50 border-primary' : 'border border-transparent'}`}>
                <RadioGroupItem value="oldest" id="oldest" className="sr-only" />
                <Label htmlFor="oldest" className="cursor-pointer text-xs">
                  {t('oldest')}
                </Label>
              </div>
              <div className={`p-2 bg-foreground rounded-2xl text-sm text-secondary cursor-pointer transition-all hover:scale-105 duration-300 ${selectedSort === 'newest' ? 'border bg-primary/50 border-primary' : 'border border-transparent'}`}>
                <RadioGroupItem value="newest" id="newest" className="sr-only" />
                <Label htmlFor="newest" className="cursor-pointer text-xs">
                  {t('newest')}
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex flex-col gap-3">
            <span className="relative pr-6 before:content-[''] before:h-0.5 before:w-4 before:absolute before:bg-secondary before:right-0 before:top-1/2 before:-translate-y-1/2 text-secondary">{t('findproject')}</span>
            <Input value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} placeholder={t('keyword')} />
            <Button onClick={handleSearchKeyWord} className="bg-primary hover:bg-primary/80 cursor-pointer">
              {t('search')}
            </Button>
            <Button onClick={handleClearKeyWord} disabled={!query.get('keyword')} className="bg-secondary hover:bg-secondary/80 cursor-pointer">
              {t('all')}
            </Button>
          </div>
          <div className="flex flex-col gap-3">
            <span className="relative pr-6 before:content-[''] before:h-0.5 before:w-4 before:absolute before:bg-secondary before:right-0 before:top-1/2 before:-translate-y-1/2 text-secondary">{t('searchbytech')}</span>
            <div className="flex flex-wrap gap-x-1 gap-y-2 justify-center items-center">
              {apps.map((app: App) => {
                return (
                  <Label key={app.key} htmlFor={app.name} className={`flex justify-center items-center p-2 rounded-2xl border border-secondary/50 gap-3 cursor-pointer hover:scale-105 duration-300 transition-transform`}>
                    <Checkbox id={app.name} checked={selectedItem.includes(app.name)} onCheckedChange={(checked) => toggleSelected(app.name, checked === true)} />
                    <Image className="w-4 h-5" width={800} height={800} alt={app.name} src={app.src} />
                  </Label>
                );
              })}
            </div>
            <Button onClick={handleItem} className="bg-primary hover:bg-primary/80 cursor-pointer">
              {t('search')}
            </Button>
            <Button onClick={handleClearKeyItem} disabled={!query.get('tech')} className="bg-secondary hover:bg-secondary/80 cursor-pointer">
              {t('all')}
            </Button>
          </div>
        </section>
      </SheetContent>
    </Sheet>
  );
}
