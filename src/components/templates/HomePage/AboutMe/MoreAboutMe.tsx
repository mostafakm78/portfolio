'use client';

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from '@heroui/react';

export default function MoreAboutMe() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className="rounded-md hover:opacity-85 mt-6 duration-300 bg-back text-fore dark:bg-fore dark:text-back"
        onPress={onOpen}
      >
        اطلاعات بیشتر
      </Button>
      <Drawer
        size="sm"
        className="bg-fore dark:bg-back text-back dark:text-fore shadow-md"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex  flex-col gap-1 text-xl">
                درباره من
              </DrawerHeader>
              <DrawerBody>
                <p>
                  سلام! من مصطفی کمری هستم، متولد پنج اسفند ١٣٧٨. از همون ابتدا
                  علاقه زیادی به دنیای تکنولوژی و کامپیوتر داشتم و این علاقه
                  باعث شد که مسیر تحصیلی و حرفه‌ای خودم رو در این زمینه دنبال
                  کنم. عاشق طراحی و ساخت چیزهای جدید هستم، مخصوصاً تو حوزه‌های
                  گرافیکی مثل طراحی UI و خلق تجربه‌های کاربری جذاب. طراحی یک
                  وب‌سایت از صفر و دیدن نتیجه‌ای که دقیقاً مطابق تصورم هست،
                  همیشه برام حس فوق‌العاده‌ای ایجاد می‌کنه. یکی از ویژگی‌های
                  شخصیتم اینه که هیچ وقت از یادگیری خسته نمی‌شم. به دنبال
                  چالش‌های جدیدم و تلاش می‌کنم تا با حل مشکلات پیچیده، مهارتم رو
                  ارتقا بدم و به رشد مداوم ادامه بدم. علاقه زیادی دارم به این که
                  هر چیزی که تو ذهنم شکل می‌گیره رو بتونم با کدنویسی به واقعیت
                  تبدیل کنم. همین علاقه باعث شده که با پشتکار، به یادگیری
                  ابزارها و تکنولوژی‌های مختلف تو زمینه طراحی وب و توسعه
                  نرم‌افزار ادامه بدم. تجربه‌های مختلف کاری بهم یاد داده که
                  خلاقیت همراه با نظم و برنامه‌ریزی می‌تونه نتایج شگفت‌انگیزی
                  رقم بزنه. به همین خاطر همیشه تلاش می‌کنم پروژه‌هام رو با دقت،
                  کیفیت بالا و تمرکز کامل انجام بدم. علاقه‌مند به کار تیمی هم
                  هستم، چون باور دارم ترکیب ایده‌ها و تلاش‌ها می‌تونه به بهترین
                  نتایج منجر بشه. امیدوارم این مسیر رو با یادگیری و تجربیات
                  بیشتر ادامه بدم و چیزهای بزرگی خلق کنم. اگر دوست دارید با من
                  در ارتباط باشید یا درباره همکاری و پروژه‌های جدید صحبت کنیم،
                  خوشحال می‌شم صدای شما رو بشنوم!
                </p>
              </DrawerBody>
              <DrawerFooter>
                <Button
                  className="text-red-700"
                  variant="light"
                  onPress={onClose}
                >
                  بستن
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
