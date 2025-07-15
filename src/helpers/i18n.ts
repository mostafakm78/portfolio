
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      'Mostafa Kamari': 'Mostafa Kamari',
      'Home Page': 'Home Page',
      'About Me': 'About Me',
      'Resume': 'Resume',
      'Contact Me': 'Contact Me',
      'Hello , Im Mostafa': 'Hello , Im Mostafa',
      'About Me short':
        'I was born on March 29, 1999 and studied computer science. I love graphic work like UI and website design and I would like to be able to create anything that comes to my mind with code. I am looking to learn more and I would like to gain more experience and solve different challenges so that I can add to my skills and improve my knowledge.',
      'Skills': 'Skills',
      'More Info': 'More Info',
      'About Me Full': `Hello! I'm Mostafa Kamari, born on February 24, 2000.

From the very beginning, I had a deep passion for the world of technology and computers, which led me to pursue my academic and professional path in this field. I love designing and creating new things, especially in graphic-related areas like UI design and crafting engaging user experiences.

Building a website from scratch and seeing the final result match my exact vision always gives me an incredible feeling. One of my key personality traits is that I never get tired of learning. I'm constantly seeking new challenges and strive to enhance my skills by solving complex problems and continuously growing.

I have a strong passion for bringing my ideas to life through coding. This enthusiasm has driven me to persistently learn various tools and technologies in web design and software development. My diverse work experiences have taught me that creativity, combined with discipline and planning, can lead to extraordinary results.

That's why I always strive to approach my projects with precision, high quality, and full focus. I'm also passionate about teamwork because I believe that combining ideas and efforts leads to the best outcomes.

I hope to continue this journey with more learning and experiences and create amazing things along the way. If you'd like to connect with me or discuss collaborations and new projects, I'd be happy to hear from you! 🚀`,
'Close' : 'Close',
'Works' : 'Works',
'Works Dec' : 'You can see a preview of all my work here, and for the source code of each project, you can refer to the GitHub link.',
'Photos' : 'Photos',
'Dec' : 'Descriptions and technologies',
'View' : 'View',
'See in Github' : 'See in Github',
'Contact Me Dec' : `I would like to know more about you and your projects and collaborate! You can contact me for collaboration or any questions. I will respond to you as soon as possible.`,
'Copy' : 'All rights reserved. Use without permission prohibited.',
'Name' : 'Name',
'Email' : 'Email',
'Msg' : 'Your Message',
'Send' : 'Send',
'Sending' : 'Sending',
'Phone and Email' : 'Phone and Email',
'Phone' : 'Phone : +989169799533',
'EmailMe' : 'Email : mostafamf555@gmail.com',
'Follow' : 'Follow Me in SocialMedia',
'Tel' : 'Telegram',
          'Insta' : 'Instagram' ,
          'Link' : 'Linkedin' ,
          'Whats' : 'Whatsapp',
          'Search' : "To search, type the name of the framework or technology and press the search or enter button...",
          'Try' : 'Do you want to search again?',
          'Sorry' : 'Unfortunately, no results were found :(',
          'Searching' : 'Searching ...',
          'ErrorMsg' : 'Error in Send Message',
          'SendMsg' : 'Message Send',
          'Error' : 'Unknown error',
          'Fields' : 'All fields are required.',
          'NameChar' : 'The number of characters in the name must be greater than 3.',
          'EmailFormat' : 'The email format is incorrect.',
          'MsgChar' : 'Your message must be longer than 30 characters.',
            'Load More' : 'Load More',
            'Download Resume' : 'Download Resume'
    },
  },
  fa: {
    translation: {
      'Mostafa Kamari': 'مصطفی کمری',
      'Home Page': 'صفحه اصلی',
      'About Me': 'درباره من',
      'Resume': 'رزومه',
      'Contact Me': 'تماس با من',
      'Hello , Im Mostafa': 'سلام من مصطفی هستم',
      'About Me short':
        'من متولد پنج اسفند ١٣٧٨ هستم و در رشته کامپیوتر تحصیل کردم. عاشق کار های گرافیکی مثل UI و طراحی سایت هستم و دوست دارم هرچیزی به ذهنم میاد رو خودم بتونم با کد بوجود بیارم. دنبال یاد گرفتن بیشتر هستم و دوست دارم تجربه های بیشتر کسب کنم و چالش های مختلفی رو حل کنم تا بتونم به مهارت خودم اضافه کنم و دانش خودم رو ارتقا بدم.',
      'Skills': 'مهارت ها',
      'More Info': 'اطلاعات بیشتر',
      'About Me Full': `سلام! من مصطفی کمری هستم، متولد پنج اسفند ١٣٧٨. از همون ابتدا
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
                  خوشحال می‌شم صدای شما رو بشنوم! 🚀`,
                  'Close' : 'بستن',
                  'Works' : 'پروژه ها',
                  'Works Dec' : 'تمام نمونه کارهای من به صورت پیش نمایش میتونین از اینجا ببینین و برای سورس کد پروژه ها میتونین به لینک گیتهاب هر کدوم مراجعه کنین.',
                  'Photos' : 'عکس ها',
                  'Dec' : 'توضیحات و تکنولوژی ها',
                  'View' : 'مشاهده',
                  'See in Github' : 'مشاهده در گیتهاب',
                  'Contact Me Dec' : `من دوست دارم از شما و پروژه هاتون بیشتر بدونم و باهم همکاری کنیم! شما
          میتونین برای همکاری یا هرگونه سوالی با من در ارتباط باشین. در سریع
          ترین حالت ممکن به شما پاسخ میدم.`,
          'Copy' : 'تمامی حقوق محفوظ است. استفاده بدون اجازه ممنوع',
          'Name' : 'نام',
          'Email' : 'ایمیل',
          'Msg' : 'پیام شما',
          'Send' : 'ارسال',
          'Sending' : 'درحال ارسال ...',
          'Phone and Email' : 'تلفن و ایمیل',
          'Phone' : 'تلفن: 09169799533',
          'EmailMe' : 'ایمیل : mostafamf555@gmail.com',
          'Follow' : "منو در فضای مجازی دنبال کنین",
          'Tel' : 'تلگرام',
          'Insta' : 'اینستاگرام' ,
          'Linkedin' : 'لینکدین' ,
          'Whats' : 'واتس اپ',
          'Search' : "برای جستجو اسم فریمورک یا تکنولوژی و روی دکمه سرچ یا اینتر بزنین ...",
          'Try' : 'میخوای یبار دیگه سرچ کنی؟',
          'Sorry' : 'متاسفانه هیچ نتیجه‌ای پیدا نشد :(',
          'Searching' : 'در حال جستجو...',
          'ErrorMsg' : 'خطا در ارسال پیام.',
          'SendMsg' : 'پیام ارسال شد!',
          'Error' : 'خطای ناشناخته',
          'Fields' : 'وارد کردن همه فیلدها اجباری می‌باشد.',
          'NameChar' : 'تعداد کاراکترهای نام باید بیشتر از 3 باشد.',
          'EmailFormat' : 'فرمت ایمیل اشتباه است.',
          'MsgChar' : 'تعداد کاراکترهای پیام شما باید بیشتر از 30 باشد.',
          'Load More' : 'بارگذاری بیشتر',
          'Download Resume' : 'دانلود رزومه'


    },
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: 'fa',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
