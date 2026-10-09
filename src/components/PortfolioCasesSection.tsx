import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, X, ChevronRight, ChevronLeft, Sparkles, CheckCircle2, Layers, Calendar, Clock, Eye } from 'lucide-react';
import constructionImg from '../assets/imgs/Construction.jpg';
import skyscraperImg from '../assets/imgs/Skyscrapers.jpg';

interface CatalogImage {
  url: string;
  caption: string;
}

interface CatalogProject {
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

interface PortfolioCard {
  id: string;
  projectId: string;
  type: 'text' | 'image';
  title?: string;
  category?: string;
  description?: string;
  metricsBadge?: string;
  bgColor?: string;
  textColor?: string;
  logo?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

interface PortfolioCasesSectionProps {
  onOpenOrder?: () => void;
}

const toPersianDigits = (num: string | number): string => {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num
    .toString()
    .replace(/[0-9]/g, (w) => farsiDigits[+w]);
};

const CATALOG_PROJECTS: Record<string, CatalogProject> = {
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
      { url: constructionImg, caption: 'نمای اصلی صفحه اول و معرفی خدمات آموزشی پلتفرم تیچرشو' },
      { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80', caption: 'رابط کاربری پنل آزمون‌ساز و گزارش‌گیری تحلیلی مدارس' },
      { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80', caption: 'نسخه موبایل بهینه‌سازی‌شده برای اولیا و معلمان' }
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
    techStack: ['WordPress', 'WooCommerce Pro', 'قالب اختصاصی پلانکس', 'سیستم کش LSCache', 'درگاه به‌پرداخت'],
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
      { url: skyscraperImg, caption: 'طراحی گرافیکی صفحه اصلی و اسلایدر محصولات پرفروش دیجی کلاه' },
      { url: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80', caption: 'صفحه محصول پیشرفته با انتخاب رنگ، سایز و راهنمای استایل' },
      { url: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80', caption: 'رابط کاربری ریسپانسیو و فرآیند تسویه حساب آسان' }
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
      { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80', caption: 'صفحه اصلی و پکیج‌های عضویت باشگاه فیت کلاب' },
      { url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80', caption: 'داشبورد کاربری پایش سلامت و برنامه تمرینی تعاملی' },
      { url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80', caption: 'نسخه موبایل اپلیکیشن‌گونه با دسترسی سریع به جلسات' }
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
      { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80', caption: 'ویترین آنلاین محصولات فاخر و گالری هنری چرمدوزک' },
      { url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80', caption: 'صفحه جزئیات کیف و اکسسوری چرم طبیعی دست‌دوز' },
      { url: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=1200&q=80', caption: 'نسخه موبایل با اسکرول نرم و سبد خرید شناور' }
    ]
  },
  wikipackage: {
    id: 'wikipackage',
    title: 'پورتال صنعتی صنایع بسته‌بندی ویکی پکیج',
    client: 'صنایع کارتن‌سازی و بسته‌بندی ویکی پکیج',
    category: 'صنعت بسته‌بندی و لجستیک',
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
      { url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80', caption: 'صفحه اصلی پورتال ویکی پکیج و معرفی خطوط تولید مدرن' },
      { url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80', caption: 'فرم هوشمند استعلام قیمت و انتخاب متریال بسته‌بندی' },
      { url: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1200&q=80', caption: 'کاتالوگ گرافیکی محصولات در نسخه تبلت و موبایل' }
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
      { url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80', caption: 'داشبورد دانشجویی و کلاس‌های فعال آکادمی روزیرو' },
      { url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80', caption: 'محیط پلیر آموزشی با درس‌نامه و یادداشت‌برداری هوشمند' },
      { url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80', caption: 'نمایش صدور گواهینامه و پروفایل کاربری در موبایل' }
    ]
  }
};

export const PortfolioCasesSection: React.FC<PortfolioCasesSectionProps> = ({ onOpenOrder }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const isProgrammaticRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Catalog Modal State
  const [selectedCatalog, setSelectedCatalog] = useState<CatalogProject | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const handleOpenCatalog = (projectId: string) => {
    const project = CATALOG_PROJECTS[projectId];
    if (project) {
      setSelectedCatalog(project);
      setActiveImageIndex(0);
    }
  };

  const totalCards = 16;
  const maxSteps = totalCards - 1;

  // Immediate smooth progress calculation (from ~6% at start to 100% at end)
  const progressPercent = Math.min(
    100,
    Math.round(6 + (currentStep / maxSteps) * 94)
  );

  const canGoPrev = currentStep > 0;
  const canGoNext = currentStep < maxSteps;

  const scrollToStep = (targetStep: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardElements = container.children;

    isProgrammaticRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticRef.current = false;
    }, 650);

    // If target is 0, always scroll smoothly back to initial origin (rightmost in RTL)
    if (targetStep === 0) {
      if (container.scrollLeft < 0) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else if (container.scrollLeft > 0) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      }
      if (cardElements && cardElements[0]) {
        (cardElements[0] as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
          block: 'nearest',
        });
      }
      return;
    }

    if (targetStep >= maxSteps) {
      if (cardElements && cardElements[maxSteps]) {
        (cardElements[maxSteps] as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          inline: 'end',
          block: 'nearest',
        });
      }
      return;
    }

    if (cardElements && cardElements[targetStep]) {
      const targetCard = cardElements[targetStep] as HTMLElement;
      targetCard.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  };

  const handleScroll = () => {
    if (isProgrammaticRef.current || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    const absScroll = Math.abs(scrollLeft);
    const approxStep = Math.min(
      maxSteps,
      Math.max(0, Math.round((absScroll / maxScroll) * maxSteps))
    );
    if (Math.abs(approxStep - currentStep) >= 1) {
      setCurrentStep(approxStep);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      if (el) el.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [currentStep, maxSteps]);

  const handleNext = () => {
    if (currentStep >= maxSteps) return;
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    scrollToStep(nextStep);
  };

  const handlePrev = () => {
    if (currentStep <= 0) return;
    const prevStep = currentStep - 1;
    setCurrentStep(prevStep);
    scrollToStep(prevStep);
  };

  const cards: PortfolioCard[] = [
    // 1. Steel River (Text Card)
    {
      id: 'steel-river-text',
      projectId: 'teachersho',
      type: 'text',
      title: 'تیچرشو',
      category: 'پلتفرم آموزشی و تحلیلی مدارس',
      metricsBadge: 'طراحی وب‌سایت سفارشی',
      description:
        'تیچرشو بستری برای ارائه محتوای هوشمند تحلیلی و آموزشی ویژه مدارس است. در طراحی چنین پلتفرمی، ساختار منظم محتوا، دسترسی آسان کاربران و تجربه کاربری روان، نقش مهمی در ارائه مؤثر خدمات آموزشی دارند',
      bgColor: 'bg-[#edf4f2]',
      textColor: 'text-[#0b333a]',
      logo: (
        <div className="flex items-center gap-2 text-[#0a3d46]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.2 2.5a2 2 0 0 1 2.6-.9l.7.4a2 2 0 0 0 2 0l.7-.4a2 2 0 0 1 2.6.9l.4.7a2 2 0 0 0 1.5 1.5l.7.4a2 2 0 0 1 .9 2.6l-.4.7a2 2 0 0 0 0 2l.4.7a2 2 0 0 1-.9 2.6l-.7.4a2 2 0 0 0-1.5 1.5l-.4.7a2 2 0 0 1-2.6.9l-.7-.4a2 2 0 0 0-2 0l-.7.4a2 2 0 0 1-2.6-.9l-.4-.7a2 2 0 0 0-1.5-1.5l-.7-.4a2 2 0 0 1-.9-2.6l.4-.7a2 2 0 0 0 0-2l-.4-.7a2 2 0 0 1 .9-2.6l.7-.4a2 2 0 0 0 1.5-1.5l.4-.7Z"
            />
          </svg>
          <div className="flex flex-col leading-[1.05] tracking-tight font-extrabold text-sm font-sans">
            <span>STEEL</span>
            <span>RIVER</span>
          </div>
        </div>
      ),
    },

    // 2. Steel River (Image Card)
    {
      id: 'steel-river-image',
      projectId: 'teachersho',
      type: 'image',
      imageSrc: constructionImg,
      imageAlt: 'پلتفرم هوشمند تیچرشو',
    },

    // 3. Union Software Group (Text Card: Vibrant Teal)
    {
      id: 'union-software-text',
      projectId: 'digikolah',
      type: 'text',
      title: 'دیجی کلاه',
      category: 'مرجع مد و اکسسوری',
      metricsBadge: 'طراحی وب‌سایت فروشگاهی',
      description:
        'طراحی وب‌سایت دیجی کلاه با تمرکز بر معرفی محصولات مد و اکسسوری، دسته‌بندی منظم کالاها و فراهم‌کردن مسیر خریدی ساده و کاربرپسند برای مشتریان',
      bgColor: 'bg-[#4096a1]',
      textColor: 'text-white',
      logo: (
        <div className="flex flex-col items-start leading-[1.05] text-white">
          <span className="font-bold text-2xl tracking-tight font-sans">Union</span>
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/85 font-semibold">
            SOFTWARE
          </span>
        </div>
      ),
    },

    // 4. Union Software Group (Image Card)
    {
      id: 'union-software-image',
      projectId: 'digikolah',
      type: 'image',
      imageSrc: skyscraperImg,
      imageAlt: 'دیجی کلاه',
    },

    // 5. Sabrepak (Text Card)
    {
      id: 'sabrepak-text',
      projectId: 'fitclub',
      type: 'text',
      title: 'فیت کلاب',
      category: 'سلامت و تناسب اندام',
      metricsBadge: 'طراحی وب‌سایت خدماتی',
      description:
        'یک وب‌سایت حرفه‌ای در حوزه تناسب اندام باید خدمات را شفاف معرفی کند و مسیر ارتباط کاربران با مجموعه را ساده سازد. ساختار محتوایی فیت کلاب با تمرکز بر معرفی خدمات سلامت و ورزش تعریف می‌شود',
      bgColor: 'bg-[#e7efec]',
      textColor: 'text-[#0a333b]',
      logo: (
        <div className="flex items-center gap-2 text-[#0a3d46]">
          <span className="font-extrabold italic tracking-wider text-xl font-sans">
            SABREPAK
          </span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path d="M4 14c2-4 6-7 12-7l2 3-4 2 4 4-5 1-2 4-7-7z" />
          </svg>
        </div>
      ),
    },

    // 6. Sabrepak (Image Card)
    {
      id: 'sabrepak-image',
      projectId: 'fitclub',
      type: 'image',
      imageSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'فیت کلاب',
    },

    // 7. NexaCloud Fintech (Text Card: Dark Slate Luxury)
    {
      id: 'nexacloud-text',
      projectId: 'charmdoozak',
      type: 'text',
      title: 'چرمدوزک',
      category: 'صنایع چرم دست‌دوز',
      metricsBadge: 'وب‌سایت فروشگاهی',
      description:
        'طراحی وب‌سایت چرمدوزک با تمرکز بر معرفی محصولات چرمی دست‌دوز، نمایش جزئیات محصولات و بازتاب هویت برند در تجربه کاربری؛ بستری برای معرفی حرفه‌ای هنر و محصولات چرمی در فضای آنلاین',
      bgColor: 'bg-[#0b2b32]',
      textColor: 'text-white',
      logo: (
        <div className="flex items-center gap-2 text-emerald-300">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center font-bold font-mono text-sm">
            N
          </div>
          <span className="font-bold tracking-tight text-lg font-sans text-white">NexaCloud</span>
        </div>
      ),
    },

    // 8. NexaCloud Fintech (Image Card)
    {
      id: 'nexacloud-image',
      projectId: 'charmdoozak',
      type: 'image',
      imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'چرمدوزک',
    },

    // 9. BioVant Health (Text Card: Fresh Mint)
    {
      id: 'biovant-text',
      projectId: 'wikipackage',
      type: 'text',
      title: 'ویکی پکیج',
      category: 'صنعت بسته‌بندی و لجستیک',
      metricsBadge: 'وب‌سایت شرکتی',
      description:
        'طراحی وب‌سایت ویکی پکیج با تمرکز بر معرفی محصولات و خدمات صنعت بسته‌بندی، سازمان‌دهی اطلاعات تخصصی و ایجاد بستری مناسب برای ارتباط مشتریان و کسب‌وکارهای فعال در حوزه بسته‌بندی و لجستیک',
      bgColor: 'bg-[#e2ede9]',
      textColor: 'text-[#0a3338]',
      logo: (
        <div className="flex items-center gap-2 text-[#0a4852]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
          <span className="font-extrabold tracking-tight text-lg font-sans">BioVant</span>
        </div>
      ),
    },

    // 10. BioVant Health (Image Card)
    {
      id: 'biovant-image',
      projectId: 'wikipackage',
      type: 'image',
      imageSrc: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'ویکی پکیج',
    },

    // 11. LogixTrade AI (Text Card: Emerald Accent)
    {
      id: 'logixtrade-text',
      projectId: 'chimodeh',
      type: 'text',
      title: 'چی مده',
      category: 'رسانه ترند و فشن',
      metricsBadge: 'وب‌سایت فروشگاهی',
      description:
        'طراحی وب‌سایت چی مده با تمرکز بر انتشار محتوای مرتبط با مد و فشن، نمایش منظم مطالب و فراهم‌کردن تجربه‌ای روان برای مخاطبانی که به دنبال جدیدترین موضوعات و ترندهای دنیای مد هستند',
      bgColor: 'bg-[#2a737d]',
      textColor: 'text-white',
      logo: (
        <div className="flex items-center gap-2 text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="font-extrabold tracking-wider text-base font-sans">LOGIXTRADE</span>
        </div>
      ),
    },

    // 12. LogixTrade AI (Image Card)
    {
      id: 'logixtrade-image',
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
      logo: (
        <div className="flex items-center gap-2 text-[#0a3d46]">
          <span className="font-extrabold italic tracking-wider text-xl font-sans">
            SABREPAK
          </span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path d="M4 14c2-4 6-7 12-7l2 3-4 2 4 4-5 1-2 4-7-7z" />
          </svg>
        </div>
      ),
    },

    // 14. Sapino Shop (Image Card)
    {
      id: 'sapinoshop-image',
      projectId: 'sapinoshop',
      type: 'image',
      imageSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'ساپینو شاپ',
    },

    // 15. Roziro Academy (Text Card)
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
      logo: (
        <div className="flex items-center gap-2 text-emerald-300">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center font-bold font-mono text-sm">
            N
          </div>
          <span className="font-bold tracking-tight text-lg font-sans text-white">NexaCloud</span>
        </div>
      ),
    },

    // 16. Roziro Academy (Image Card)
    {
      id: 'roziro-academy-image',
      projectId: 'roziroacademy',
      type: 'image',
      imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'آکادمی روزیرو',
    },
  ];

  return (
    <section
      id="portfolio-section"
      className="relative w-full bg-[#fbfdfc] text-[#0a181c] py-16 sm:py-24 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden border-t border-[#f0f3f2] select-text"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Badge (Centered) */}
        <div className="w-full flex justify-center mb-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-[#0a4852] border border-emerald-200/60 text-xs font-semibold tracking-wide shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#439683]" />
            نمونه‌کارها و پروژه‌های اجرا شده
          </span>
        </div>

        {/* ======================================================== */}
        {/* TOP ROW: HEADINGS ON RIGHT ONLY                           */}
        {/* ======================================================== */}
        <div className="w-full mb-10 sm:mb-14 text-right">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] font-bold text-[#0c2227] tracking-tight flex flex-wrap items-baseline gap-x-2.5 gap-y-1.5 leading-snug mt-2">
            <span className="text-[#0c2227]">پورتفولیو پلانکس؛ از ایده تا اجرا:</span>
            <span className="text-[#439683] font-normal">
              نگاهی به نمونه پروژه‌های طراحی و توسعه وب‌اپلیکیشن پلانکس
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed w-full max-w-none text-justify">
            در پلانکس، وب‌سایت‌هایی متناسب با نیاز کسب‌وکارها طراحی و توسعه می‌دهیم؛ از فروشگاه‌های اینترنتی و وب‌سایت‌های شرکتی تا پلتفرم‌های آموزشی و پروژه‌های اختصاصی. در این بخش، با نمونه‌کارها و حوزه‌های فعالیت برندهایی آشنا شوید که در مسیر حضور حرفه‌ای در فضای دیجیتال گام برداشته‌اند
          </p>
        </div>

        {/* ======================================================== */}
        {/* HORIZONTAL CAROUSEL (12 RICH CARDS)                      */}
        {/* ======================================================== */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto scrollbar-none pb-4 scroll-smooth"
        >
          {cards.map((card) => {
            if (card.type === 'image') {
              return (
                <div
                  key={card.id}
                  onClick={() => handleOpenCatalog(card.projectId)}
                  className="w-[280px] sm:w-[320px] md:w-[360px] h-[380px] sm:h-[420px] shrink-0 rounded-[28px] overflow-hidden relative shadow-[0_4px_24px_rgba(0,0,0,0.04)] group cursor-pointer"
                >
                  <img
                    src={card.imageSrc}
                    alt={card.imageAlt || 'پروژه'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              );
            }

            return (
              <div
                key={card.id}
                onClick={() => handleOpenCatalog(card.projectId)}
                className={`w-[300px] sm:w-[350px] md:w-[380px] h-[380px] sm:h-[420px] shrink-0 rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-black/5 text-right ${card.bgColor} ${card.textColor} transition-transform duration-300 hover:-translate-y-1 cursor-pointer`}
              >
                {/* Logo & Category Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {card.logo}
                    {card.metricsBadge && (
                      <span className="text-[10.5px] font-semibold px-2.5 py-0.5 rounded-full bg-black/10 border border-black/10">
                        {card.metricsBadge}
                      </span>
                    )}
                  </div>

                  {card.category && (
                    <span className="text-[11px] font-medium opacity-75 block mb-1">
                      {card.category}
                    </span>
                  )}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] leading-relaxed opacity-90 font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bottom link */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenCatalog(card.projectId);
                  }}
                  className="pt-4 border-t border-black/10 flex items-center justify-between text-xs font-semibold cursor-pointer group hover:opacity-85 transition-opacity"
                >
                  <span>مشاهده کاتالوگ و تصاویر</span>
                  <div className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:-translate-x-1 transition-transform">
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* BOTTOM CONTROLS: PROGRESS BAR WITH BUTTONS BESIDE IT     */}
        {/* Immediate progress update with each click, zero delay    */}
        {/* ======================================================== */}
        <div className="mt-8 flex items-center gap-4 sm:gap-6">
          {/* Scroll Progress Bar Track */}
          <div className="flex-1 h-2 bg-slate-200/90 rounded-full overflow-hidden p-0.5 shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-[#0a8268] to-[#14b8a6] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Navigation Buttons directly beside progress bar */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Previous button: goes back */}
            <button
              type="button"
              onClick={handlePrev}
              disabled={!canGoPrev}
              aria-label="کارت‌های قبلی"
              className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center transition-all ${canGoPrev
                ? 'bg-white text-slate-800 shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:scale-105 active:scale-95 cursor-pointer'
                : 'bg-slate-100/70 text-slate-300 cursor-not-allowed border-transparent'
                }`}
            >
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Next button: advances step and immediately fills progress */}
            <button
              type="button"
              onClick={handleNext}
              disabled={!canGoNext}
              aria-label="کارت‌های بعدی"
              className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center transition-all ${canGoNext
                ? 'bg-[#0a8268] text-white shadow-md hover:bg-[#086b55] hover:scale-105 active:scale-95 cursor-pointer'
                : 'bg-slate-100/70 text-slate-300 cursor-not-allowed border-transparent'
                }`}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* GRAPHIC & INTERACTIVE PROJECT CATALOG MODAL              */}
      {/* Displays rich images, lookbook pages, project specs,     */}
      {/* achievements and interactive image carousel controls     */}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedCatalog && (
          <div className="fixed inset-0 z-[1050] flex items-center justify-center p-3 sm:p-6" dir="rtl">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCatalog(null)}
              className="absolute inset-0 bg-[#040f13]/85 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-5xl bg-[#081b20] border border-white/15 text-white rounded-[28px] sm:rounded-[36px] shadow-[0_30px_90px_rgba(0,0,0,0.6)] z-10 text-right overflow-hidden max-h-[94vh] flex flex-col select-text"
            >
              {/* Top Header Bar */}
              <div className="px-6 sm:px-8 py-5 border-b border-white/10 flex items-center justify-between bg-black/30 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <div>
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-400/25 ml-2">
                      {selectedCatalog.badge}
                    </span>
                    <span className="text-xs text-slate-300 font-medium">
                      کاتالوگ تصویری پروژه • {selectedCatalog.category}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCatalog(null)}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  aria-label="بستن کاتالوگ"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Modal Body */}
              <div className="overflow-y-auto space-y-6 p-6 sm:p-8">
                {/* Project Title & Client Banner */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-white/10">
                  <div>
                    <span className="text-xs text-emerald-400 font-medium block mb-1">
                      کارفرما: {selectedCatalog.client}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                      {selectedCatalog.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-300 shrink-0">
                    <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      <span>سال اجرا: {selectedCatalog.year}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>مدت تحویل: {selectedCatalog.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Main Lookbook / Interactive Catalog Viewer */}
                <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden bg-black/60 border border-white/15 shadow-2xl">
                  {/* Current Active Image Display */}
                  <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[480px] bg-slate-950 flex items-center justify-center overflow-hidden">
                    <motion.img
                      key={activeImageIndex}
                      src={selectedCatalog.images[activeImageIndex]?.url}
                      alt={selectedCatalog.images[activeImageIndex]?.caption || selectedCatalog.title}
                      initial={{ opacity: 0.3, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="w-full h-full object-cover object-center"
                    />

                    {/* Gradient Overlay for bottom caption */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                    {/* Previous / Next Arrow Controls on Image */}
                    {selectedCatalog.images.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={() => {
                            setActiveImageIndex((prev) =>
                              prev === 0 ? selectedCatalog.images.length - 1 : prev - 1
                            );
                          }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/20 flex items-center justify-center backdrop-blur-md shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                          aria-label="تصویر بعدی"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setActiveImageIndex((prev) =>
                              prev === selectedCatalog.images.length - 1 ? 0 : prev + 1
                            );
                          }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/20 flex items-center justify-center backdrop-blur-md shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                          aria-label="تصویر قبلی"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                      </>
                    )}

                    {/* Image Caption & Index indicator at bottom */}
                    <div className="absolute bottom-4 inset-x-5 sm:inset-x-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-white">
                      <p className="font-medium drop-shadow-md text-slate-100 text-xs sm:text-sm line-clamp-1 max-w-[80%] bg-black/55 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 self-start">
                        {selectedCatalog.images[activeImageIndex]?.caption}
                      </p>

                      {/* Re-designed Image Badge with Persian Digits */}
                      <div className="self-end sm:self-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-xl border border-emerald-400/40 text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] shrink-0 select-none">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                        <span className="text-xs font-semibold text-slate-200">تصویر</span>
                        <span className="text-xs font-bold text-emerald-300">
                          {toPersianDigits(activeImageIndex + 1)}
                        </span>
                        <span className="text-[11px] text-slate-400 font-normal">از</span>
                        <span className="text-xs font-bold text-white">
                          {toPersianDigits(selectedCatalog.images.length)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Previews Bar below main picture */}
                  {selectedCatalog.images.length > 1 && (
                    <div className="p-3 bg-black/40 border-t border-white/10 flex items-center gap-3 overflow-x-auto">
                      {selectedCatalog.images.map((img, imgIdx) => (
                        <button
                          key={imgIdx}
                          type="button"
                          onClick={() => setActiveImageIndex(imgIdx)}
                          className={`relative shrink-0 w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                            activeImageIndex === imgIdx
                              ? 'border-emerald-400 ring-2 ring-emerald-400/40 scale-105'
                              : 'border-white/20 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={img.url}
                            alt={img.caption}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Overview Paragraph */}
                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-right">
                  <span className="text-xs font-bold text-emerald-400 mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>خلاصه و استراتژی اجرایی پروژه:</span>
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                    {selectedCatalog.overview}
                  </p>
                </div>

                {/* 2-Column: Key Stats and Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
                  {/* Highlights Checklist */}
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                    <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2 pb-2 border-b border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>ویژگی‌ها و قابلیت‌های اجرا شده در این پروژه:</span>
                    </div>
                    <div className="space-y-2.5">
                      {selectedCatalog.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Measurable Stats & Tech Stack */}
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2 pb-2 border-b border-white/10 mb-3">
                        <Layers className="w-4 h-4 text-emerald-400" />
                        <span>شاخص‌های عملکردی و نتایج حاصل:</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2.5">
                        {selectedCatalog.stats.map((stat, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-center"
                          >
                            <span className="text-sm sm:text-base font-bold text-emerald-300 block">
                              {stat.value}
                            </span>
                            <span className="text-[10.5px] text-slate-400 mt-0.5 block">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="pt-3 border-t border-white/10">
                      <span className="text-[11px] font-bold text-slate-300 block mb-2">
                        فناوری‌ها و ابزارهای مورد استفاده:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedCatalog.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-400/25 text-emerald-200 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Modal Actions */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedCatalog(null)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    بستن کاتالوگ
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCatalog(null);
                      if (onOpenOrder) {
                        onOpenOrder();
                      } else {
                        const el = document.getElementById('consultation-trigger') || document.getElementById('contact-trigger');
                        if (el) el.click();
                      }
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-[#14b8a6] hover:from-emerald-400 hover:to-teal-400 text-[#06181d] text-xs sm:text-sm font-bold transition-all shadow-lg hover:shadow-xl cursor-pointer"
                  >
                    <span>درخواست طراحی مشابه این پروژه</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
