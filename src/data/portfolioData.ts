import React from 'react';
import TeachershowBanner from '../assets/imgs/portfolio/teachershow/TeachershowBanner.png';
import TeachershowBanner1 from '../assets/imgs/portfolio/teachershow/TeachershowBanner0.png';
import digikolahBanner0 from '../assets/imgs/portfolio/digikolah/digikolahBanner0.png';
import digikolahBanner1 from '../assets/imgs/portfolio/digikolah/digikolahBanner1.png';
import fitclubBanner0 from '../assets/imgs/portfolio/fitclub/fitclubBanner0.png';
import fitclubBanner1 from '../assets/imgs/portfolio/fitclub/fitclubBanner1.png';
import charmBanner0 from '../assets/imgs/portfolio/Chardoozak/charmBanner0.png';
import charmBanner1 from '../assets/imgs/portfolio/Chardoozak/charmBanner1.png';
import wikiBanner0 from '../assets/imgs/portfolio/wikiteach/wikiBanner0.png';
import wikiBanner1 from '../assets/imgs/portfolio/wikiteach/wikiBanner1.png';
import learnoBanner0 from '../assets/imgs/portfolio/learnobit/learnoBeanner0.png';
import learnoBanner1 from '../assets/imgs/portfolio/learnobit/learnoBeanner1.png';
import pelashanBanner0 from '../assets/imgs/portfolio/pelashan/pelashanBanner0.png';
import pelashanBanner1 from '../assets/imgs/portfolio/pelashan/pelashanBanner1.png';
import seoBanner0 from '../assets/imgs/portfolio/seo/seoBanner0.png';
import seoBanner1 from '../assets/imgs/portfolio/seo/seoBanner1.png';
import giahBanner0 from '../assets/imgs/portfolio/giahgostar/giahBanner0.png';
import giahBanner1 from '../assets/imgs/portfolio/giahgostar/giahBanner1.png';

import charmLogo from '../assets/imgs/portfolio/Chardoozak/charmLogo.webp';
import digiLogo from '../assets/imgs/portfolio/digikolah/digiLogo.png';
import fitLogo from '../assets/imgs/portfolio/fitclub/fitLogo.svg';
import giahLogo from '../assets/imgs/portfolio/giahgostar/giahLogo.png';
import learnoLogo from '../assets/imgs/portfolio/learnobit/learnoLogo.png';
import pelashanLogo from '../assets/imgs/portfolio/pelashan/pelashanLogo.webp';
import teachershowLogo from '../assets/imgs/portfolio/teachershow/teachershowLogo.png';
import cheemodeLogo from '../assets/imgs/portfolio/cheemode/CheemodeLogo.png';
import roozzeroLogo from '../assets/imgs/portfolio/roozzero/RoozzeroLogo.png';
import RoozzeroBanner0 from '../assets/imgs/portfolio/roozzero/RoozzeroBanner0.png';
import RoozzeroBanner1 from '../assets/imgs/portfolio/roozzero/RoozzeroBanner1.png';
import Roozzero1 from '../assets/imgs/portfolio/roozzero/Roozzero1.png';
import Roozzero2 from '../assets/imgs/portfolio/roozzero/Roozzero2.png';
import Roozzero3 from '../assets/imgs/portfolio/roozzero/Roozzero3.png';
import Roozzero4 from '../assets/imgs/portfolio/roozzero/Roozzero4.png';
import Roozzero5 from '../assets/imgs/portfolio/roozzero/Roozzero5.png';

import Teacher001 from '../assets/imgs/portfolio/teachershow/Teacher001.png';
import Teacher002 from '../assets/imgs/portfolio/teachershow/Teacher002.png';
import Teacher003 from '../assets/imgs/portfolio/teachershow/Teacher003.png';
import Teacher004 from '../assets/imgs/portfolio/teachershow/Teacher004.jpg';
import Teacher005 from '../assets/imgs/portfolio/teachershow/Teacher005.png';
import Teacher006 from '../assets/imgs/portfolio/teachershow/Teacher006.jpg';
import Teacher007 from '../assets/imgs/portfolio/teachershow/Teacher007.png';
import Teacher008 from '../assets/imgs/portfolio/teachershow/Teacher008.png';
import Teacher009 from '../assets/imgs/portfolio/teachershow/Teacher009.png';
import Teacher010 from '../assets/imgs/portfolio/teachershow/Teacher010.png';
import Teacher011 from '../assets/imgs/portfolio/teachershow/Teacher011.png';
import Teacher012 from '../assets/imgs/portfolio/teachershow/Teacher012.png';

import digikolah1 from '../assets/imgs/portfolio/digikolah/digikolah1.png';
import digikolah2 from '../assets/imgs/portfolio/digikolah/digikolah2.png';
import digikolah3 from '../assets/imgs/portfolio/digikolah/digikolah3.png';
import digikolah4 from '../assets/imgs/portfolio/digikolah/digikolah4.png';

import fitclub1 from '../assets/imgs/portfolio/fitclub/fitclub1.png';
import fitclub2 from '../assets/imgs/portfolio/fitclub/fitclub2.png';
import fitclub3 from '../assets/imgs/portfolio/fitclub/fitclub3.png';
import fitclub4 from '../assets/imgs/portfolio/fitclub/fitclub4.png';

import charm1 from '../assets/imgs/portfolio/Chardoozak/charm1.png';
import charm2 from '../assets/imgs/portfolio/Chardoozak/charm2.png';
import charm3 from '../assets/imgs/portfolio/Chardoozak/charm3.png';
import charm4 from '../assets/imgs/portfolio/Chardoozak/charm4.png';

import wiki1 from '../assets/imgs/portfolio/wikiteach/wiki1.png';
import wiki2 from '../assets/imgs/portfolio/wikiteach/wiki2.png';
import wiki3 from '../assets/imgs/portfolio/wikiteach/wiki3.png';

import learno1 from '../assets/imgs/portfolio/learnobit/learno1.png';
import learno2 from '../assets/imgs/portfolio/learnobit/learno2.png';
import learno3 from '../assets/imgs/portfolio/learnobit/learno3.png';

import pelashan1 from '../assets/imgs/portfolio/pelashan/pelashan1.png';
import pelashan2 from '../assets/imgs/portfolio/pelashan/pelashan2.png';
import pelashan3 from '../assets/imgs/portfolio/pelashan/pelashan3.png';

import seo1 from '../assets/imgs/portfolio/seo/seo1.png';
import seo2 from '../assets/imgs/portfolio/seo/seo2.png';

import giah1 from '../assets/imgs/portfolio/giahgostar/giah1.png';
import giah2 from '../assets/imgs/portfolio/giahgostar/giah2.png';

export interface CatalogImage {
  url: string;
  caption: string;
}

export interface CatalogProject {
  id: string;
  title: string;
  client: string;
  category: string;
  badge: string;
  year: string;
  duration: string;
  overview: string;
  techStack: string[];
  highlights: string[];
  stats: { label: string; value: string }[];
  images: CatalogImage[];
}

export interface PortfolioCardItem {
  id: string;
  projectId: string;
  type: 'text' | 'image';
  title?: string;
  category?: string;
  description?: string;
  metricsBadge?: string;
  bgColor?: string;
  textColor?: string;
  logoImg?: string;
  logoSvgText?: { text: string; icon?: string };
  imageSrc?: string;
  imageAlt?: string;
}

export const toPersianDigits = (num: string | number): string => {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num
    .toString()
    .replace(/[0-9]/g, (w) => farsiDigits[+w]);
};

export const CATALOG_PROJECTS: Record<string, CatalogProject> = {
  teachersho: {
    id: 'teachersho',
    title: 'پلتفرم آموزشی و تحلیلی تیچرشو',
    client: 'سامانه هوشمند مدارس تیچرشو',
    category: 'پلتفرم آموزشی و تحلیلی مدارس',
    badge: 'طراحی وب‌سایت سفارشی',
    year: '۱۴۰۴',
    duration: '۵ هفته کاری',
    overview: 'پلتفرم تیچرشو با هدف ارائه خدمات نوین آموزشی، آزمون‌ساز آنلاین، تحلیل عملکرد تحصیلی دانش‌آموزان و ارتباط مستمر اولیا و مربیان طراحی شده است. ساختار سبک، امنیت داده‌ها و رابط کاربری اختصاصی فارسی از ویژگی‌های برجسته این پروژه به شمار می‌رود.',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'WordPress REST API', 'پایگاه داده MariaDB'],
    highlights: [
      'داشبورد اختصاصی دبیران و مدیریت جامع نمرات و آزمون‌ها',
      'سیستم آزمون آنلاین تستی و تشریحی با تصحیح هوشمند',
      'طراحی کاملاً واکنش‌گرا برای دسترسی آسان با گوشی و تبلت',
      'درگاه پرداخت شتابی و صدور کارنامه دیجیتال تحلیلی'
    ],
    stats: [
      { label: 'مدارس فعال', value: '+۴۵ مرکز' },
      { label: 'دانش‌آموزان', value: '+۱۸,۰۰۰' },
      { label: 'سرعت بارگذاری', value: '۱.۶ ثانیه' }
    ],
    images: [
      { url: TeachershowBanner1, caption: 'نمای اصلی صفحه اول و معرفی خدمات آموزشی پلتفرم تیچرشو' },
      { url: Teacher001, caption: 'رابط کاربری پنل آزمون‌ساز و گزارش‌گیری تحلیلی مدارس' },
      { url: Teacher002, caption: 'نسخه موبایل بهینه‌سازی‌شده برای اولیا و معلمان' },
      { url: Teacher003, caption: 'نسخه موبایل بهینه‌سازی‌شده برای اولیا و معلمان' },
      { url: Teacher004, caption: 'نسخه موبایل بهینه‌سازی‌شده برای اولیا و معلمان' },
      { url: Teacher005, caption: 'نسخه موبایل بهینه‌سازی‌شده برای اولیا و معلمان' },
      { url: Teacher006, caption: 'نسخه موبایل بهینه‌سازی‌شده برای اولیا و معلمان' },
      { url: Teacher007, caption: 'نسخه موبایل بهینه‌سازی‌شده برای اولیا و معلمان' },
      { url: Teacher008, caption: 'نسخه موبایل بهینه‌سازی‌شده برای اولیا و معلمان' },
      { url: Teacher009, caption: 'نسخه موبایل بهینه‌سازی‌شده برای اولیا و معلمان' },
      { url: Teacher010, caption: 'نسخه موبایل بهینه‌سازی‌شده برای اولیا و معلمان' },
      { url: Teacher011, caption: 'نسخه موبایل بهینه‌سازی‌شده برای اولیا و معلمان' },
      { url: Teacher012, caption: 'نسخه موبایل بهینه‌سازی‌شده برای اولیا و معلمان' },
    ]
  },
  digikolah: {
    id: 'digikolah',
    title: 'فروشگاه اینترنتی مد و اکسسوری دیجی کلاه',
    client: 'برند فروشگاهی دیجی کلاه',
    category: 'مرجع مد و اکسسوری',
    badge: 'طراحی وب‌سایت فروشگاهی',
    year: '۱۴۰۳',
    duration: '۳ هفته کاری',
    overview: 'طراحی فروشگاه اینترنتی دیجی کلاه با تمرکز بر تجربه خرید سریع و لذت‌بخش، فیلترهای پیشرفته سایز و رنگ، سبد خرید تک‌مرحله‌ای و اتصال هوشمند به انبارداری و درگاه‌های پرداخت شتاب.',
    techStack: ['WordPress', 'WooCommerce Pro', 'قالب اختصاصی پلانکست', 'سیستم کش LSCache', 'درگاه به‌پرداخت'],
    highlights: [
      'سبد خرید سریع و فرآیند ثبت سفارش زیر ۱ دقیقه',
      'گالری باکیفیت و بزرگ‌نمایی جزئیات کالاها و تنوع رنگی',
      'اتصال مستقیم به پنل ارسال پیامک پیگیری آنی سفارشات',
      'سیستم پیشنهاد هوشمند اکسسوری‌های مکمل به مشتری'
    ],
    stats: [
      { label: 'رشد فروش آنلاین', value: '+۳۱۰٪' },
      { label: 'کاهش نرخ پرش', value: 'به ۲۸٪' },
      { label: 'نمره PageSpeed', value: '۹۶/۱۰۰' }
    ],
    images: [
      { url: digikolahBanner1, caption: 'طراحی گرافیکی صفحه اصلی و اسلایدر محصولات پرفروش دیجی کلاه' },
      { url: digikolah1, caption: 'صفحه محصول پیشرفته با انتخاب رنگ، سایز و راهنمای استایل' },
      { url: digikolah2, caption: 'رابط کاربری ریسپانسیو و فرآیند تسویه حساب آسان' },
      { url: digikolah3, caption: 'رابط کاربری ریسپانسیو و فرآیند تسویه حساب آسان' },
      { url: digikolah4, caption: 'رابط کاربری ریسپانسیو و فرآیند تسویه حساب آسان' },
    ]
  },
  fitclub: {
    id: 'fitclub',
    title: 'پلتفرم تخصصی تندرستی و ورزش فیت کلاب',
    client: 'باشگاه و پلتفرم ورزشی فیت کلاب',
    category: 'سلامت و تناسب اندام',
    badge: 'طراحی وب‌سایت خدماتی',
    year: '۱۴۰۳',
    duration: '۴ هفته کاری',
    overview: 'وب‌سایت فیت کلاب برای ارائه برنامه‌های تمرینی آنلاین، رژیم‌های غذایی شخصی‌سازی‌شده و ثبت‌نام کلاس‌های حضوری و مجازی با عملکرد فوق‌العاده طراحی شده است.',
    techStack: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'وب‌سوکت رزرو بلادرنگ'],
    highlights: [
      'محاسبه‌گر آنلاین BMI و کالری مصرفی روزانه بر پایه فیزیک بدنی',
      'سیستم رزرواسیون مربی خصوصی و کلاس‌های گروهی باشگاه',
      'مشاهده ویدیوهای آموزشی تمرینات با کیفیت تطبیقی',
      'پنل اختصاصی پایش تغییرات وزن و پیشرفت هفتگی ورزشکار'
    ],
    stats: [
      { label: 'ورزشکاران فعال', value: '+۱۲K' },
      { label: 'برنامه‌های صادرشده', value: '+۴۵K' },
      { label: 'رضایت کاربران', value: '۴.۹ از ۵' }
    ],
    images: [
      { url: fitclubBanner0, caption: 'صفحه اصلی و پکیج‌های عضویت باشگاه فیت کلاب' },
      { url: fitclub1, caption: 'داشبورد کاربری پایش سلامت و برنامه تمرینی تعاملی' },
      { url: fitclub2, caption: 'نسخه موبایل اپلیکیشن‌گونه با دسترسی سریع به جلسات' },
      { url: fitclub3, caption: 'نسخه موبایل اپلیکیشن‌گونه با دسترسی سریع به جلسات' },
      { url: fitclub4, caption: 'نسخه موبایل اپلیکیشن‌گونه با دسترسی سریع به جلسات' },
    ]
  },
  charmdoozak: {
    id: 'charmdoozak',
    title: 'فروشگاه آنلاین صنایع چرم فاخر چرمدوزک',
    client: 'استودیو چرم دست‌دوز چرمدوزک',
    category: 'صنایع چرم دست‌دوز',
    badge: 'وب‌سایت فروشگاهی',
    year: '۱۴۰۴',
    duration: '۳ هفته کاری',
    overview: 'طراحی مینیمال و لوکس فروشگاه چرمدوزک با تاکید بر بافت چرم طبیعی، اصالت دست‌ساز بودن کالاها و عکاسی صنعتی چشم‌نواز برای مشتریان خاص‌پسند.',
    techStack: ['WordPress', 'WooCommerce اختصاصی', 'طراحی مینیمال تاریک و روشن', 'ACF Pro', 'CDN ابری'],
    highlights: [
      'نمایش بافت چرم با بزرگ‌نمایی ماکرو اولترا اچ‌دی',
      'امکان سفارش حکاکی نام و تاریخ شخصی‌سازی‌شده روی محصولات',
      'انتخاب بسته‌بندی کادویی اختصاصی در صفحه پرداخت',
      'مشاوره آنلاین انتخاب نوع چرم و رنگ‌بندی طبیعی'
    ],
    stats: [
      { label: 'رشد سبد خرید', value: '+۸۵٪' },
      { label: 'مشتریان وفادار', value: '+۳,۵۰۰' },
      { label: 'زمان بارگذاری', value: '۱.۳ ثانیه' }
    ],
    images: [
      { url: charmBanner0, caption: 'ویترین آنلاین محصولات فاخر و گالری هنری چرمدوزک' },
      { url: charm1, caption: 'صفحه جزئیات کیف و اکسسوری چرم طبیعی دست‌دوز' },
      { url: charm2, caption: 'صفحه جزئیات کیف و اکسسوری چرم طبیعی دست‌دوز' },
      { url: charm3, caption: 'صفحه جزئیات کیف و اکسسوری چرم طبیعی دست‌دوز' },
      { url: charm4, caption: 'نسخه موبایل با اسکرول نرم و سبد خرید شناور' }
    ]
  },
  wikipackage: {
    id: 'wikipackage',
    title: 'پورتال صنعتی صنایع بسته‌بندی ویکی تیچ',
    client: 'صنایع کارتن‌سازی و بسته‌بندی ویکی تیچ',
    category: 'آموزشی و دوره آنلاین',
    badge: 'وب‌سایت شرکتی B2B',
    year: '۱۴۰۳',
    duration: '۴ هفته کاری',
    overview: 'پورتال شرکتی B2B ویکی پکیج به منظور معرفی خطوط تولید، استعلام آنلاین قیمت تیراژ جعبه‌ها و بسته‌بندی‌های صادراتی و ثبت سفارش عمده کارخانجات پیاده‌سازی شده است.',
    techStack: ['React', 'TypeScript', 'Node.js', 'سیستم فرم‌های استعلام چندمرحله‌ای', 'سئو صنعتی'],
    highlights: [
      'محاسبه‌گر آنلاین گرماژ و ابعاد کارتن با برآورد قیمت تقریبی',
      'کاتالوگ دیجیتال PDF دانلودی برای همکاران صنعتی و تجار',
      'بخش نمونه‌کارهای صادراتی با تفکیک صنایع دارویی، غذایی و صنعتی',
      'ناحیه ویژه کارفرمایان جهت پیگیری مرحله تولید سفارشات عمده'
    ],
    stats: [
      { label: 'استعلام‌های ماهانه', value: '+۵۲۰ عدد' },
      { label: 'سئو صنعتی', value: 'رتبه ۱ گوگل' },
      { label: 'برندهای همکار', value: '+۱۸۰ برند' }
    ],
    images: [
      { url: wikiBanner1, caption: 'صفحه اصلی پورتال ویکی پکیج و معرفی خطوط تولید مدرن' },
      { url: wiki1, caption: 'فرم هوشمند استعلام قیمت و انتخاب متریال بسته‌بندی' },
      { url: wiki2, caption: 'کاتالوگ گرافیکی محصولات در نسخه تبلت و موبایل' },
      { url: wiki3, caption: 'فرم هوشمند استعلام قیمت و انتخاب متریال بسته‌بندی' },
    ]
  },
  chimodeh: {
    id: 'chimodeh',
    title: 'رسانه تخصصی ترندها و استایل چی مده',
    client: 'مجله دیجیتال و پلتفرم مد چی مده',
    category: 'رسانه ترند و فشن',
    badge: 'وب‌سایت رسانه‌ای و مد',
    year: '۱۴۰۴',
    duration: '۳ هفته کاری',
    overview: 'طراحی مجله آنلاین چی مده با تمرکز بر سرعت فوق‌العاده در انتشار اخبار فشن، گالری‌های تصویری ست‌های لباس و ارتباط ارگانیک مقالات با محصولات فروشگاهی.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'سئو محتوایی پیشرفته', 'AMP سازگار'],
    highlights: [
      'طراحی مجله‌ای مدرن با تایپوگرافی خوانا و چشم‌نواز',
      'برچسب‌گذاری هوشمند پوشاک در تصاویر مقالات (Shop the Look)',
      'پوشش زنده اخبار رویدادهای فشن و هفتگی با به‌روزرسانی آنی',
      'سیستم نشان‌کردن و ذخیره استایل‌های محبوب کاربران'
    ],
    stats: [
      { label: 'بازدید ماهانه', value: '+۴۵۰K' },
      { label: 'میانگین مطالعه', value: '۴.۵ دقیقه' },
      { label: 'سرعت لود ایندکس', value: '۰.۹ ثانیه' }
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80', caption: 'صفحه اصلی رسانه چی مده با چیدمان مجله‌ای مدرن' },
      { url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80', caption: 'صفحه نمایش استایل با قابلیت لینک مستقیم به خرید' },
      { url: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80', caption: 'نسخه موبایل سریع با تجربه مطالعه بدون حواس‌پرتی' }
    ]
  },
  sapinoshop: {
    id: 'sapinoshop',
    title: 'فروشگاه آنلاین سبک زندگی ساپینو شاپ',
    client: 'مجموعه فروشگاه‌های ساپینو شاپ',
    category: 'فروشگاه سبک زندگی مدرن',
    badge: 'وب‌سایت فروشگاهی',
    year: '۱۴۰۳',
    duration: '۴ هفته کاری',
    overview: 'طراحی فروشگاه اکسسوری دکوراسیون و سبک زندگی ساپینو شاپ با پالت رنگی گرم، ناوبری روان میان صدها محصول و پیاده‌سازی زیرساخت باشگاه مشتریان وفادار.',
    techStack: ['WordPress', 'WooCommerce', 'قالب سفارشی واکنش‌گرا', 'درگاه چندبانکی', 'Redis Cache'],
    highlights: [
      'فیلترهای ترکیبی رنگ، قیمت و موجودی لحظه‌ای انبار',
      'سیستم پیامک اطلاع‌رسانی شارژ مجدد کالاهای ناموجود',
      'امکان ایجاد لیست علاقه‌مندی‌ها و اشتراک با دوستان',
      'تسویه حساب تک‌مرحله‌ای با ثبت سریع آدرس و لوکیشن'
    ],
    stats: [
      { label: 'تعداد محصولات', value: '+۱,۲۰۰' },
      { label: 'سفارشات موفق', value: '+۲۵,۰۰۰' },
      { label: 'رشد خرید مجدد', value: '+۴۰٪' }
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80', caption: 'ویترین رنگارنگ محصولات دکوراسیون ساپینو شاپ' },
      { url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80', caption: 'صفحه محصول با نظرات تاییدشده خریداران و عکس‌های واقعی' },
      { url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80', caption: 'سبد خرید و تسویه حساب سریع در نسخه موبایل' }
    ]
  },
  roziroacademy: {
    id: 'roziroacademy',
    title: 'آکادمی آموزش آنلاین و مهارت‌های فردی روزیرو',
    client: 'آکادمی رشد و سرمایه‌گذاری روزیرو',
    category: 'آکادمی آموزش انلاین',
    badge: 'وب‌سایت سفارشی LMS',
    year: '۱۴۰۴',
    duration: '۵ هفته کاری',
    overview: 'طراحی سامانه آموزش الکترونیکی (LMS) روزیرو با قابلیت بارگذاری ویدیوهای محافظت‌شده با واترمارک اختصاصی، آزمون‌های گام‌به‌گام و صدور خودکار گواهینامه‌های الکترونیک.',
    techStack: ['React', 'Next.js', 'پلیر ویدیوی امن با واترمارک کاربر', 'پایگاه داده PostgreSQL', 'سامانه صدور گواهینامه'],
    highlights: [
      'سیستم ضد سرقت ویدیو با درج خودکار شماره تماس کاربر روی فیلم',
      'تالار گفتگوی دانش‌پذیران با اساتید زیر هر درس',
      'پیشرفت‌سنج دوره‌ها با آزمون‌های بین‌فصلی',
      'صدور خودکار سرتیفیکیت دوزبانه دیجیتال با کیوآرکد استعلام'
    ],
    stats: [
      { label: 'دانش‌پذیران فعال', value: '+۲۸K' },
      { label: 'دوره‌های تخصصی', value: '+۳۵ دوره' },
      { label: 'نرخ تکمیل دوره', value: '۸۲٪' }
    ],
    images: [
      { url: RoozzeroBanner0, caption: 'بنر اصلی پلتفرم آموزشی و سرمایه‌گذاری روزیرو' },
      { url: RoozzeroBanner1, caption: 'دوره‌های پیشرفته رشد فردی و تحلیل بازار' },
      { url: Roozzero1, caption: 'داشبورد دانشجویی و پنل کلاس‌های فعال آکادمی' },
      { url: Roozzero2, caption: 'محیط پلیر آموزشی با درس‌نامه و آزمون آنلاین' },
      { url: Roozzero3, caption: 'سامانه پیگیری و تمرین‌های تعاملی دانش‌پذیران' },
      { url: Roozzero4, caption: 'نمایش صدور گواهینامه معتبر دیجیتال' },
      { url: Roozzero5, caption: 'رابط کاربری بهینه‌شده برای موبایل و تبلت' },
    ]
  },
  learnobit: {
    id: 'learnobit',
    title: 'پلتفرم آکادمی برنامه‌نویسی لرنوبیت',
    client: 'گروه آموزشی لرنوبیت',
    category: 'آموزش برنامه‌نویسی و مهارت‌های دیجیتال',
    badge: 'پلتفرم آموزشی و جزوات تخصصی',
    year: '۱۴۰۴',
    duration: '۴ هفته کاری',
    overview: 'طراحی وب‌سایت و پلتفرم آموزشی لرنوبیت با محوریت دوره‌های عملی برنامه‌نویسی، طراحی وب، بوت‌کمپ‌های تخصصی و سیستم منتورشیپ آنلاین.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'محیط اجرای کد در مرورگر', 'سامانه منتورینگ'],
    highlights: [
      'محیط تمرین و ادیتور کد درون مرورگر برای یادگیری تجربی',
      'سیستم ثبت‌نام بوت‌کمپ‌ها با مصاحبه و تعیین سطح آنلاین',
      'تالار گفتمان حل مسئله و کد ریویو (Code Review) توسط منتورها',
      'معرفی فارغ‌التحصیلان برتر به شرکت‌های فناور همکار'
    ],
    stats: [
      { label: 'دانشجویان فارغ‌التحصیل', value: '+۸,۵۰۰' },
      { label: 'دوره‌های تخصصی', value: '+۴۵ دوره' },
      { label: 'ورود به بازار کار', value: '۷۸٪' }
    ],
    images: [
      { url: learnoBanner0, caption: 'صفحه اصلی و بنر معرفی گروه آموزشی لرنوبیت' },
      { url: learnoBanner1, caption: 'بنر دوره‌ها و سرفصل‌های آموزشی لرنوبیت' },
      { url: learno1, caption: 'محیط پلتفرم و دوره‌های تخصصی برنامه‌نویسی' },
      { url: learno2, caption: 'داشبورد کاربری دانشجویان لرنوبیت' },
      { url: learno3, caption: 'نسخه واکنش‌گرا و تجربه کاربری موبایل' },
    ]
  },
  pelashan: {
    id: 'pelashan',
    title: 'پورتال تخصصی تولید و بسته‌بندی پسته پلاشان',
    client: 'مجموعه بازرگانی و کشاورزی پلاشان',
    category: 'فروش و بسته‌بندی پسته',
    badge: 'وب‌سایت شرکتی و فروشگاهی',
    year: '۱۴۰۳',
    duration: '۳ هفته کاری',
    overview: 'طراحی وب‌سایت برند پلاشان با هویت بصری مدرن جهت معرفی ارقام پسته صادراتی، خطوط فرآوری و بسته‌بندی مکانیزه و تسهیل استعلام آنلاین مشتریان تجاری.',
    techStack: ['WordPress', 'قالب سفارشی واکنش‌گرا', 'کاتالوگ آنلاین محصولات', 'فرم استعلام خرید عمده'],
    highlights: [
      'کاتالوگ تخصصی ارقام پسته (اکبری، کله‌قوچی، احمدآقایی و فندقی)',
      'سیستم استعلام قیمت لحظه‌ای تناژ برای تجار و خریداران عمده',
      'معرفی استانداردهای بهداشتی و آزمایشگاهی صادرات خشکبار',
      'نسخه چندزبانه برای مشتریان بازار خلیج فارس و اروپا'
    ],
    stats: [
      { label: 'صادرات سالانه', value: '+۱,۲۰۰ تن' },
      { label: 'مشتریان تجاری B2B', value: '+۱۴۰ برند' },
      { label: 'استاندارد کیفی', value: 'گواهی ISO 22000' }
    ],
    images: [
      { url: pelashanBanner0, caption: 'صفحه اصلی و هویت بصری پورتال پلاشان' },
      { url: pelashanBanner1, caption: 'بنر خطوط تولید و بسته‌بندی مکانیزه پسته' },
      { url: pelashan1, caption: 'کاتالوگ ارقام پسته و مشخصات بسته‌بندی صادراتی' },
      { url: pelashan2, caption: 'فرم هوشمند استعلام سفارشات عمده' },
      { url: pelashan3, caption: 'نسخه موبایل با دسترسی آسان به جدول مشخصات' },
    ]
  },
  seosoleimani: {
    id: 'seosoleimani',
    title: 'پورتال آژانس رشد ارگانیک و سئو سلیمانی',
    client: 'آژانس تخصصی سئو سلیمانی',
    category: 'خدمات تخصصی سئو و رشد دیجیتال',
    badge: 'وب‌سایت آژانس سئو و مارکتینگ',
    year: '۱۴۰۴',
    duration: '۳ هفته کاری',
    overview: 'طراحی وب‌سایت آژانس سئو سلیمانی با ساختار تکنیکال فوق‌العاده استاندارد، نمایش مستندات نتایج سئو (Case Studies) و ابزارهای ممیزی آنلاین سایت.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Schema Markup پیشرفته', 'سرعت لود ۱۰۰ در PageSpeed'],
    highlights: [
      'بخش کیس‌استادی‌های واقعی با نمودارهای رشد ایمپرشن و ورودی گوگل',
      'فرم هوشمند ممیزی اولیه وضعیت سئو سایت کارفرما',
      'طراحی صفحات فرود خدمات با نرخ تبدیل بالا برای جذب سرنخ',
      'ساختار بهینه‌سازی‌شده برای صدرنشینی در جستجوهای سئو'
    ],
    stats: [
      { label: 'کلمات کلیدی در صفحه اول', value: '+۱,۴۰۰' },
      { label: 'میانگین رشد ترافیک رقبا', value: '+۳۲۰٪' },
      { label: 'نمره فنی گوگل', value: '۹۹/۱۰۰' }
    ],
    images: [
      { url: seoBanner0, caption: 'صفحه اصلی آژانس سئو سلیمانی با شاخص‌های رشد دیجیتال' },
      { url: seoBanner1, caption: 'بنر معرفی راهکارهای سئو تکنیکال و ممیزی وب‌سایت' },
      { url: seo1, caption: 'کیس‌استادی‌های تحلیلی و نمودارهای رشد ارگانیک' },
      { url: seo2, caption: 'فرم آنلاین تحلیل سلامت سئو در دستگاه‌های مختلف' },
    ]
  },
  giahgostar: {
    id: 'giahgostar',
    title: 'فروشگاه تخصصی و پورتال گلخانه‌ای گیاه گستر',
    client: 'مجموعه کشت و عرضه گیاهان گیاه گستر',
    category: 'محصولات کشاورزی و گلخانه‌ای',
    badge: 'وب‌سایت شرکتی و فروشگاهی',
    year: '۱۴۰۳',
    duration: '۴ هفته کاری',
    overview: 'طراحی پلتفرم آنلاین گیاه گستر شامل فروشگاه خرید انواع گیاهان، نهال‌ها و بذور همراه با دانشنامه جامع راهنمای نگهداری و مشاوره آنلاین سلامت گیاهان.',
    techStack: ['WordPress', 'WooCommerce Pro', 'سیستم رزرو آنلاین مشاوره', 'فیلتر تخصصی اقلیم و نور'],
    highlights: [
      'فیلترهای کاربردی بر اساس نور محیط، میزان آبیاری و شرایط آب‌وهوایی',
      'دانشنامه جامع با راهنمای تصویری نگهداری و تکثیر انواع گیاه',
      'بسته‌بندی ایمن و سیستم پیگیری ارسال بار زنده و گیاهان حساس',
      'امکان ارسال تصویر گیاه آسیب‌دیده و دریافت دستور درمانی گیاه‌پزشک'
    ],
    stats: [
      { label: 'تنوع گونه‌های گیاهی', value: '+۶۰۰ گونه' },
      { label: 'سفارشات موفق ماهانه', value: '+۴,۲۰۰' },
      { label: 'مشاوره‌های گیاه‌پزشکی', value: '+۱,۸۰۰' }
    ],
    images: [
      { url: giahBanner0, caption: 'ویترین باطراوت محصولات و گونه‌های گیاهی گیاه گستر' },
      { url: giahBanner1, caption: 'بنر گلخانه‌های پیشرفته و عرضه محصولات ارگانیک' },
      { url: giah1, caption: 'صفحه مشخصات گونه‌ها با نمودار نیاز نوری و آبیاری' },
      { url: giah2, caption: 'خرید آسان و رابط کاربری چشم‌نواز در گوشی تلفن همراه' },
    ]
  }
};

export const PORTFOLIO_CARDS: PortfolioCardItem[] = [
  // 1. Teachersho (Text Card)
  {
    id: 'teachersho-text',
    projectId: 'teachersho',
    type: 'text',
    title: 'تیچرشو',
    category: 'پلتفرم آموزشی و تحلیلی مدارس',
    metricsBadge: 'طراحی وب‌سایت سفارشی',
    description:
      'تیچرشو بستری برای ارائه محتوای هوشمند تحلیلی و آموزشی ویژه مدارس است. در طراحی چنین پلتفرمی، ساختار منظم محتوا، دسترسی آسان کاربران و تجربه کاربری روان، نقش مهمی در ارائه مؤثر خدمات آموزشی دارند',
    bgColor: 'bg-[#edf4f2]',
    textColor: 'text-[#0b333a]',
    logoImg: teachershowLogo,
  },
  // 2. Teachersho (Image Card)
  {
    id: 'teachersho-image',
    projectId: 'teachersho',
    type: 'image',
    imageSrc: TeachershowBanner,
    imageAlt: 'پلتفرم هوشمند تیچرشو',
  },
  // 3. Digikolah (Text Card)
  {
    id: 'digikolah-text',
    projectId: 'digikolah',
    type: 'text',
    title: 'دیجی کلاه',
    category: 'مرجع مد و اکسسوری',
    metricsBadge: 'طراحی وب‌سایت فروشگاهی',
    description:
      'طراحی وب‌سایت دیجی کلاه با تمرکز بر معرفی محصولات مد و اکسسوری، دسته‌بندی منظم کالاها و فراهم‌کردن مسیر خریدی ساده و کاربرپسند برای مشتریان',
    bgColor: 'bg-[#4096a1]',
    textColor: 'text-white',
    logoImg: digiLogo,
  },
  // 4. Digikolah (Image Card)
  {
    id: 'digikolah-image',
    projectId: 'digikolah',
    type: 'image',
    imageSrc: digikolahBanner0,
    imageAlt: 'دیجی کلاه',
  },
  // 5. Fitclub (Text Card)
  {
    id: 'fitclub-text',
    projectId: 'fitclub',
    type: 'text',
    title: 'فیت کلاب',
    category: 'سلامت و تناسب اندام',
    metricsBadge: 'طراحی وب‌سایت خدماتی',
    description:
      'یک وب‌سایت حرفه‌ای در حوزه تناسب اندام باید خدمات را شفاف معرفی کند و مسیر ارتباط کاربران با مجموعه را ساده سازد. ساختار محتوایی فیت کلاب با تمرکز بر معرفی خدمات سلامت و ورزش تعریف می‌شود',
    bgColor: 'bg-[#e7efec]',
    textColor: 'text-[#0a333b]',
    logoImg: fitLogo,
  },
  // 6. Fitclub (Image Card)
  {
    id: 'fitclub-image',
    projectId: 'fitclub',
    type: 'image',
    imageSrc: fitclubBanner1,
    imageAlt: 'فیت کلاب',
  },
  // 7. Charmdoozak (Text Card)
  {
    id: 'charmdoozak-text',
    projectId: 'charmdoozak',
    type: 'text',
    title: 'چرمدوزک',
    category: 'صنایع چرم دست‌دوز',
    metricsBadge: 'وب‌سایت فروشگاهی',
    description:
      'طراحی وب‌سایت چرمدوزک با تمرکز بر معرفی محصولات چرمی دست‌دوز، نمایش جزئیات محصولات و بازتاب هویت برند در تجربه کاربری؛ بستری برای معرفی حرفه‌ای هنر و محصولات چرمی در فضای آنلاین',
    bgColor: 'bg-[#0b2b32]',
    textColor: 'text-white',
    logoImg: charmLogo,
  },
  // 8. Charmdoozak (Image Card)
  {
    id: 'charmdoozak-image',
    projectId: 'charmdoozak',
    type: 'image',
    imageSrc: charmBanner1,
    imageAlt: 'چرمدوزک',
  },
  // 9. Wikiteach (Text Card)
  {
    id: 'wikiteach-text',
    projectId: 'wikipackage',
    type: 'text',
    title: 'ویکی تیچ',
    category: 'آموزشی و دوره آنلاین',
    metricsBadge: 'وب‌سایت آموزشی',
    description:
      'طراحی وب‌سایت ویکی پکیج با تمرکز بر معرفی محصولات و خدمات صنعت بسته‌بندی، سازمان‌دهی اطلاعات تخصصی و ایجاد بستری مناسب برای ارتباط مشتریان و کسب‌وکارهای فعال در حوزه بسته‌بندی و لجستیک',
    bgColor: 'bg-[#e2ede9]',
    textColor: 'text-[#0a3338]',
    logoSvgText: { text: 'WIKITEACH' },
  },
  // 10. Wikiteach (Image Card)
  {
    id: 'wikiteach-image',
    projectId: 'wikipackage',
    type: 'image',
    imageSrc: wikiBanner0,
    imageAlt: 'ویکی پکیج',
  },
  // 11. Cheemode (Text Card)
  {
    id: 'cheemode-text',
    projectId: 'chimodeh',
    type: 'text',
    title: 'چی مده',
    category: 'رسانه ترند و فشن',
    metricsBadge: 'وب‌سایت فروشگاهی',
    description:
      'طراحی وب‌سایت چی مده با تمرکز بر انتشار محتوای مرتبط با مد و فشن، نمایش منظم مطالب و فراهم‌کردن تجربه‌ای روان برای مخاطبانی که به دنبال جدیدترین موضوعات و ترندهای دنیای مد هستند',
    bgColor: 'bg-[#2a737d]',
    textColor: 'text-white',
    logoImg: cheemodeLogo,
  },
  // 12. Cheemode (Image Card)
  {
    id: 'cheemode-image',
    projectId: 'chimodeh',
    type: 'image',
    imageSrc: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'چی مده',
  },
  // 13. Sapino Shop (Text Card)
  {
    id: 'sapinoshop-text',
    projectId: 'sapinoshop',
    type: 'text',
    title: 'ساپینو شاپ',
    category: 'فروشگاه سبک زندگی مدرن',
    metricsBadge: 'وب‌سایت فروشگاهی',
    description:
      'طراحی فروشگاه اینترنتی ساپینو شاپ با تمرکز بر معرفی محصولات سبک زندگی، دسته‌بندی کاربردی کالاها و ایجاد تجربه خرید آنلاین ساده و منظم برای مشتریان',
    bgColor: 'bg-[#e7efec]',
    textColor: 'text-[#0a333b]',
    logoSvgText: { text: 'SAPINO SHOP' },
  },
  // 14. Sapino Shop (Image Card)
  {
    id: 'sapinoshop-image',
    projectId: 'sapinoshop',
    type: 'image',
    imageSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'ساپینو شاپ',
  },
  // 15. Roozzero Academy (Text Card)
  {
    id: 'roziro-academy-text',
    projectId: 'roziroacademy',
    type: 'text',
    title: 'آکادمی روزیرو',
    category: 'آکادمی آموزش انلاین',
    metricsBadge: 'وب‌سایت سفارشی',
    description:
      'طراحی وب‌سایت آکادمی روزیرو با تمرکز بر معرفی دوره‌ها و محتوای آموزشی در حوزه توسعه مهارت و سرمایه‌گذاری، سازمان‌دهی مطالب و فراهم‌کردن دسترسی آسان کاربران به اطلاعات آموزشی',
    bgColor: 'bg-[#0b2b32]',
    textColor: 'text-white',
    logoImg: roozzeroLogo,
  },
  // 16. Roziro Academy (Image Card)
  {
    id: 'roziro-academy-image',
    projectId: 'roziroacademy',
    type: 'image',
    imageSrc: RoozzeroBanner0,
    imageAlt: 'آکادمی روزیرو',
  },
  // 17. Learnobit (Text Card)
  {
    id: 'learnobit-text',
    projectId: 'learnobit',
    type: 'text',
    title: 'گروه آموزشی لرنوبیت',
    category: 'جزوات آموزشی',
    metricsBadge: 'وب‌سایت آموزشی',
    description:
      'طراحی پلتفرم آموزشی لرنوبیت با محوریت دوره‌های کدنویسی، تمرین‌های تعاملی، سیستم برگزاری بوت‌کمپ و منتورینگ آنلاین دانشجویان فناوری اطلاعات',
    bgColor: 'bg-[#0e2a30]',
    textColor: 'text-white',
    logoImg: learnoLogo,
  },
  // 18. Learnobit (Image Card)
  {
    id: 'learnobit-image',
    projectId: 'learnobit',
    type: 'image',
    imageSrc: learnoBanner0,
    imageAlt: 'گروه آموزشی لرنوبیت',
  },
  // 19. Pelashan (Text Card)
  {
    id: 'pelashan-text',
    projectId: 'pelashan',
    type: 'text',
    title: 'پلاشان',
    category: 'تولید و بسته‌بندی پسته',
    metricsBadge: 'وب‌سایت شرکتی',
    description:
      'طراحی وب‌سایت برند پلاشان با تمرکز بر معرفی خطوط بسته‌بندی مکانیزه، ارقام پسته صادراتی و ایجاد بستر استعلام آسان سفارشات عمده تجاری',
    bgColor: 'bg-[#2a737d]',
    textColor: 'text-white',
    logoImg: pelashanLogo,
  },
  // 20. Pelashan (Image Card)
  {
    id: 'pelashan-image',
    projectId: 'pelashan',
    type: 'image',
    imageSrc: pelashanBanner0,
    imageAlt: 'پلاشان',
  },
  // 21. SEO Soleimani (Text Card)
  {
    id: 'seo-soleimani-text',
    projectId: 'seosoleimani',
    type: 'text',
    title: 'سئو سلیمانی',
    category: 'خدمات تخصصی سئو',
    metricsBadge: 'وب‌سایت خدماتی',
    description:
      'طراحی پورتال تکنیکال آژانس سئو سلیمانی با نمایش کیس‌استادی‌های واقعی صعود به صفحه اول گوگل، ممیزی هوشمند سایت و نرخ تبدیل بسیار بالا',
    bgColor: 'bg-[#e7efec]',
    textColor: 'text-[#0a333b]',
    logoSvgText: { text: 'SEO-SOLEIMANI' },
  },
  // 22. SEO Soleimani (Image Card)
  {
    id: 'seo-soleimani-image',
    projectId: 'seosoleimani',
    type: 'image',
    imageSrc: seoBanner0,
    imageAlt: 'سئو سلیمانی',
  },
  // 23. Giah Gostar (Text Card)
  {
    id: 'giahgostar-text',
    projectId: 'giahgostar',
    type: 'text',
    title: 'گیاه گستر',
    category: 'محصولات کشاورزی و گلخانه‌ای',
    metricsBadge: 'وب‌سایت شرکتی',
    description:
      'طراحی فروشگاه تخصصی و سامانه دانشنامه کشاورزی گیاه گستر با امکان انتخاب بر اساس نیاز نوری گیاه، سفارش امن گیاهان حساس و مشاوره آنلاین',
    bgColor: 'bg-[#0b2b32]',
    textColor: 'text-white',
    logoImg: giahLogo,
  },
  // 24. Giah Gostar (Image Card)
  {
    id: 'giahgostar-image',
    projectId: 'giahgostar',
    type: 'image',
    imageSrc: giahBanner0,
    imageAlt: 'گیاه گستر',
  },
];
