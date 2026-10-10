import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowLeft, CheckCircle2, Sparkles, TrendingUp, ShieldCheck, Award, Users2, Layers, Eye } from 'lucide-react';
import cartWeb from '../assets/imgs/Web Design Workspace.png';
import cartWordpress from '../assets/imgs/Wordpress Design Workspace.png';
import cartSeo from '../assets/imgs/SEO Analytics Workspace.png';
import cartCybersecurity from '../assets/imgs/Cybersecurity Operations.png';

interface ExpertiseRole {
  role: string;
  name: string;
  experience: string;
  skills: string[];
}

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

interface ValueCardItem {
  id: string;
  title: string;
  shortDesc: string;
  tag: string;
  image: string;
  specialtyTitle: string;
  specialtyDescription: string;
  processSteps: ProcessStep[];
  technologies: string[];
  teamExpertise: ExpertiseRole[];
  coreServices: string[];
  details: {
    overview: string;
    keyPoints: string[];
    metrics: string;
    impact: string;
  };
}

interface ApproachSectionProps {
  onOpenOrder?: () => void;
}

export const ApproachSection: React.FC<ApproachSectionProps> = ({ onOpenOrder }) => {
  const [selectedCard, setSelectedCard] = useState<ValueCardItem | null>(null);

  const items: ValueCardItem[] = [
    {
      id: 'website-design',
      title: 'طراحی سایت حرفه‌ای متناسب با نیاز کسب‌وکار',
      shortDesc: 'طراحی و توسعه وب‌سایت‌های فروشگاهی و شرکتی با وردپرس، React و برنامه‌نویسی اختصاصی، متناسب با اهداف و نیازهای کسب‌وکار شما',
      tag: 'طراحی سایت',
      image: cartWeb,
      specialtyTitle: 'تیم معماری فرانت‌اند، مهندسان فول‌استک و طراحان تجربه کاربری (UI/UX)',
      specialtyDescription:
        'طراحی و پیاده‌سازی انواع وب‌سایت‌های شرکتی، پورتال‌های سازمانی و فروشگاه‌های اینترنتی بر پایه متدهای مدرن وب، طراحی واکنش‌گرا و عملکرد فوق‌سریع برای تبدیل حداکثری بازدیدکنندگان به مشتریان وفادار.',
      technologies: ['Figma', 'React', 'Next.js', 'Tailwind CSS', 'WordPress', 'TypeScript', 'سیستم‌های طراحی سازمانی'],
      processSteps: [
        {
          step: '۰۱',
          title: 'نیازسنجی و تحلیل مدل کسب‌وکار',
          desc: 'بررسی پرسونای مخاطبان، تحلیل نقاط قوت رقبا و تدوین سند ساختار و نقشه راه اختصاصی وب‌سایت.',
        },
        {
          step: '۰۲',
          title: 'طراحی اختصاصی UI/UX در فیگما',
          desc: 'خلق وایرفریم‌ها و صفحات گرافیکی هماهنگ با هویت بصری برند، تایپوگرافی اصیل و مسیر تبدیل مشتری.',
        },
        {
          step: '۰۳',
          title: 'توسعه استاندارد و کدنویسی فرانت‌اند',
          desc: 'پیاده‌سازی تمیز، سریع و بدون باگ با رعایت کامل استانداردهای دسترسی‌پذیری و واکنش‌گرایی در تمامی نمایشگرها.',
        },
        {
          step: '۰۴',
          title: 'تست کنترل کیفیت و تحویل با آموزش',
          desc: 'ارزیابی سرعت، امنیت و تجربه کاربری در شرایط واقعی، اتصال دامنه و ارائه ویدیوی آموزشی کار با پنل.',
        },
      ],
      teamExpertise: [
        {
          role: 'معمار ارشد فرانت‌اند و رابط کاربری (UI/UX)',
          name: 'تیم طراحی و توسعه فرانت‌اند پلانکست',
          experience: '+۸ سال تجربه',
          skills: ['طراحی اختصاصی در Figma', 'React & Next.js', 'سیستم‌های طراحی یکپارچه (Design System)'],
        },
        {
          role: 'توسعه‌دهنده ارشد سیستم‌های مدیریت محتوا و وب',
          name: 'واحد مهندسی نرم‌افزار پلانکست',
          experience: '+۱۰ سال تجربه',
          skills: ['توسعه پورتال‌های سازمانی', 'اتصال درگاه‌های بانکی و وب‌سرویس‌ها', 'بهینه‌سازی کارایی و امنیت'],
        },
      ],
      coreServices: [
        'طراحی سفارشی UI/UX بر پایه هویت بصری، رنگ سازمانی و پرسونای مشتریان',
        'پیاده‌سازی فروشگاه‌های اینترنتی پیشرفته با مدیریت انبار، فاکتور و درگاه پرداخت',
        'طراحی وب‌سایت‌های شرکتی چندزبانه، پورتال‌های خبری و کاتالوگ‌های معرفی خدمات',
        'سازگاری ۱۰۰٪ با تمامی دستگاه‌ها (موبایل، تبلت و دسکتاپ) و استانداردهای Core Web Vitals',
      ],
      details: {
        overview:
          'وب‌سایت شما پایگاه دائمی برند شما در جهان اینترنت است. ما فرآیند طراحی وب را از تحلیل مدل کسب‌وکار شما آغاز می‌کنیم تا سایتی خلق شود که علاوه بر جذابیت بصری، ساختاری مهندسی‌شده برای فروش و اعتمادسازی داشته باشد.',
        keyPoints: [
          'کدنویسی استاندارد و پرهیز از قالب‌های آماده کند و سنگین',
          'سرعت بارگذاری زیر ۲ ثانیه و انطباق با الگوریتم‌های مدرن رتبه‌بندی',
          'پنل مدیریت فارسی، روان و کاربرپسند بدون نیاز به دانش برنامه‌نویسی',
        ],
        metrics: '+۶۵٪ افزایش در نرخ ماندگاری کاربر و تبدیل سرنخ‌های آنلاین',
        impact: 'حضور معتبر و متمایز برند در بازار و تثبیت جایگاه رقابتی پایدار.',
      },
    },
    {
      id: 'wordpress-theme',
      title: 'قالب وردپرس؛ متناسب با برند و اهداف شما',
      shortDesc: 'طراحی و توسعه قالب‌های وردپرس متناسب با هویت برند و نیازهای کسب‌وکار، با تمرکز بر سرعت، تجربه کاربری و ساختار بهینه برای سئو',
      tag: 'طراحی قالب وردپرس',
      image: cartWordpress,
      specialtyTitle: 'متخصصان توسعه قالب اختصاصی و مهندسان هسته وردپرس',
      specialtyDescription:
        'توسعه قالب‌های سبک، ایمن و کدنویسی‌شده از صفر بر پایه اصول رسمی وردپرس، با هماهنگی کامل با ووکامرس، فرم‌سازها و کنترل پنل سفارشی بدون افت سرعت.',
      technologies: ['PHP 8.2', 'WordPress Core APIs', 'WooCommerce Pro', 'ACF Pro', 'Gutenberg Blocks', 'Redis Cache', 'Vite & Tailwind'],
      processSteps: [
        {
          step: '۰۱',
          title: 'تحلیل نیازمندی‌های بصری و امکانات اختصاصی',
          desc: 'بررسی بخش‌های مورد نیاز سایت، پالت رنگ، تایپوگرافی و رفتار المان‌های پویا برای کدنویسی اختصاصی قالب.',
        },
        {
          step: '۰۲',
          title: 'طراحی ساختار Child-Theme و تم‌پلیت‌ها',
          desc: 'پیاده‌سازی فایل‌های تمپلیت بر اساس سلسله‌مراتب استاندارد وردپرس (Template Hierarchy) بدون افزونه‌های سنگین.',
        },
        {
          step: '۰۳',
          title: 'برنامه‌نویسی پنل تنظیمات و فیلدهای هوشمند',
          desc: 'طراحی متاباکس‌ها و کنترل‌پنل فارسی فوق‌العاده ساده تا مدیر سایت بتواند هر متنی یا المانی را بدون دردسر ویرایش کند.',
        },
        {
          step: '۰۴',
          title: 'بهینه‌سازی لود و کسب بالاترین نمرات سئو',
          desc: 'حذف اسکریپت‌های زائد، بهینه‌سازی کوئری‌های دیتابیس و کسب رتبه ۹۵+ در آزمون‌های بین‌المللی GTmetrix.',
        },
      ],
      teamExpertise: [
        {
          role: 'برنامه‌نویس ارشد قالب و هسته وردپرس',
          name: 'تیم توسعه هسته وردپرس پلانکست',
          experience: '+۹ سال تجربه',
          skills: ['کدنویسی PHP 8 و هوک‌های وردپرس', 'توسعه فیلدهای سفارشی ACF Pro', 'بهینه‌سازی دیتابیس وردپرس'],
        },
        {
          role: 'طراح المان‌ها و انیمیشن‌های تعاملی وردپرس',
          name: 'واحد طراحی بصری پلانکست',
          experience: '+۷ سال تجربه',
          skills: ['انیمیشن‌های مدرن و سبک CSS/JS', 'چیدمان گوتنبرگ سفارشی', 'سازگاری با افزونه‌های چندزبانه'],
        },
      ],
      coreServices: [
        'تبدیل طرح‌های اختصاصی Figma به قالب فوق‌سریع و استاندارد وردپرس',
        'ساخت صفحات محصول و سبد خرید سفارشی هماهنگ با ووکامرس',
        'حذف افزونه‌های سنگین غیرضروری و سبک‌سازی ساختار لود صفحات',
        'طراحی ساختار Child-Theme جهت به‌روزرسانی آسان و پایدار بدون از دست رفتن تغییرات',
      ],
      details: {
        overview:
          'یک قالب حرفه‌ای باید تعادلی دقیق میان سادگی در مدیریت محتوا و حداکثر سرعت بارگذاری برقرار کند. قالب‌های اختصاصی پلانکست بدون اتکا به صفحه‌سازهای کند، دسترسی آسان به ویرایش تمام بخش‌ها را فراهم می‌سازند.',
        keyPoints: [
          'کدنویسی استاندارد مطابق دستورالعمل‌های رسمی WordPress Coding Standards',
          'پرهیز کامل از کدهای آلوده و قالب‌های نال‌شده و آماده خارجی',
          'انطباق ساختار کدهای HTML5 با نشانه‌گذاری‌های معنایی سئو',
        ],
        metrics: 'کسب رتبه A در آزمون‌های بین‌المللی GTmetrix و گوگل PageSpeed',
        impact: 'وب‌سایتی پایدار، امن و بسیار چابک با امکان شخصی‌سازی بی‌نهایت.',
      },
    },
    {
      id: 'seo-optimization',
      title: 'سئو و بهینه‌سازی سایت برای جذب مشتری',
      shortDesc: 'با بهینه‌سازی فنی سایت، بهبود ساختار محتوا و هدف‌گیری کلمات کلیدی مرتبط، به افزایش شانس دیده‌شدن وب‌سایت شما در نتایج گوگل کمک می‌کنیم',
      tag: 'سئو و بهینه‌سازی وب‌سایت',
      image: cartSeo,
      specialtyTitle: 'استراتژیست‌های رشد ارگانیک، کارشناسان سئو تکنیکال و تحلیلگران سرچ کنسول',
      specialtyDescription:
        'ارتقای پایدار رتبه کلمات کلیدی کلیدی پول‌ساز، ممیزی فنی ساختار سایت، استراتژی محتوای اصولی و سئو داخلی و خارجی برای جذب ترافیک پیوسته و هدفمند از موتورهای جستجو.',
      technologies: ['Google Search Console', 'Ahrefs', 'Screaming Frog', 'Schema.org JSON-LD', 'PageSpeed Insights', 'Google Analytics 4', 'Surfer SEO'],
      processSteps: [
        {
          step: '۰۱',
          title: 'ممیزی جامع تکنیکال (Technical SEO Audit)',
          desc: 'بررسی خزش ربات‌ها، رفع خطاهای ۴۰۴ و ریدایرکت‌ها، تنظیم فایل robots.txt و نقشه‌های سایت XML.',
        },
        {
          step: '۰۲',
          title: 'تحقیق عمیق کلمات کلیدی با قصد خرید',
          desc: 'شناسایی عبارات کلیدی درآمدزا، تحلیل خلاهای محتوایی رقبا (Content Gap) و خوشه‌بندی موضوعی کلمات.',
        },
        {
          step: '۰۳',
          title: 'بهینه‌سازی On-Page و معماری نشانه‌گذاری معنایی',
          desc: 'پیاده‌سازی کدهای اسکیما (Organization, Product, FAQ, Article) و بهینه‌سازی متاتگ‌ها و لینک‌سازی داخلی.',
        },
        {
          step: '۰۴',
          title: 'استراتژی لینک‌سازی طبیعی و مانیتورینگ رتبه‌ها',
          desc: 'ایجاد پیوندهای معتبر، پایش هفتگی ایمپرشن و کلیک‌ها در گوگل و ارائه گزارش‌های تحلیلی شفاف ماهانه.',
        },
      ],
      teamExpertise: [
        {
          role: 'استراتژیست ارشد سئو و تحقیق کلمات کلیدی',
          name: 'تیم کیورد ریسرچ و محتوای پلانکست',
          experience: '+۸ سال تجربه',
          skills: ['استخراج کلمات با قصد خرید مخاطب', 'خوشه‌بندی موضوعی (Topic Clusters)', 'تحلیل رقبا و گپ‌های محتوایی'],
        },
        {
          role: 'متخصص سئو تکنیکال و Core Web Vitals',
          name: 'واحد سئو فنی پلانکست',
          experience: '+۱۰ سال تجربه',
          skills: ['بهینه‌سازی بودجه خزش (Crawl Budget)', 'اسکیماهای پیشرفته JSON-LD', 'رفع خطاهای ایندکس و سرچ کنسول'],
        },
      ],
      coreServices: [
        'ممیزی جامع فنی سئو (Technical SEO Audit) و رفع خطاهای حیاتی ساختاری',
        'تدوین تقویم محتوایی اختصاصی بر مبنای کلمات پرجستجوی مشتریان هدف',
        'بهینه‌سازی متاتگ‌ها، عناوین، تصاویر و ساختار لینک‌سازی داخلی',
        'استراتژی لینک‌سازی طبیعی و معتبر جهت افزایش دامین آتوریتی',
      ],
      details: {
        overview:
          'رسیدن به صفحه اول گوگل تصادفی نیست؛ نتیجه مهندسی اصولی ساختار سایت، ارائه بهترین پاسخ به نیاز جستجوی کاربران و همگامی با آخرین الگوریتم‌های گوگل است. ما مسیر دستیابی به جایگاه‌های برتر را مهندسی می‌کنیم.',
        keyPoints: [
          'تمرکز بر کلمات کلیدی با نرخ تبدیل بالا به جای جذب ورودی‌های غیرمرتبط',
          'گزارش‌دهی ماهانه منظم از روند رشد رتبه‌ها، کلیک‌ها و ایمپرشن‌ها',
          'به‌کارگیری ۱۰۰٪ روش‌های سئو کلاه‌سفید و ایمن در برابر آپدیت‌های گوگل',
        ],
        metrics: '+۲۸۰٪ میانگین رشد ورودی ارگانیک از گوگل طی ۶ ماه نخست همکاری',
        impact: 'کاهش وابستگی به تبلیغات پرهزینه و جذب دائمی مشتریان بالقوه.',
      },
    },
    {
      id: 'plugin-development',
      title: 'امنیت سایت؛ شناسایی آسیب‌پذیری پیش از حمله',
      shortDesc: 'شناسایی آسیب‌پذیری‌ها، ارزیابی امنیت وردپرس و برنامه‌های تحت وب و ارائه راهکارهای کاهش ریسک برای حفاظت بهتر از وب‌سایت و اطلاعات کاربران',
      tag: 'امنیت وب‌سایت',
      image: cartCybersecurity,
      specialtyTitle: 'مهندسان افزونه‌نویسی وردپرس، معماران API و امنیت پایگاه داده',
      specialtyDescription:
        'طراحی و برنامه‌نویسی افزونه‌های سفارشی وردپرس برای اتصال به وب‌سرویس‌های سازمانی، سیستم‌های احراز هویت پیامکی، اتوماسیون فرآیندها، محاسبات مالی و قابلیت‌های فراتر از قالب.',
      technologies: ['WordPress Plugin API', 'REST API & Webhooks', 'PHP PDO & MySQL', 'درگاه‌های پرداخت شتاب', 'سامانه‌های پیامکی OTP', 'PHPUnit Test', 'داشبورد کاربری React'],
      processSteps: [
        {
          step: '۰۱',
          title: 'نیازسنجی و معماری منطق سیستم (Business Logic)',
          desc: 'مشخص‌کردن دقیق ورودی‌ها، خروجی‌ها، جدول‌های دیتابیس و سناریوهای اتصال به وب‌سرویس‌های ثالث.',
        },
        {
          step: '۰۲',
          title: 'برنامه‌نویسی ماژولار و تفکیک لایه‌های کد',
          desc: 'کدنویسی شیءگرا بر اساس هوک‌ها و فیلترهای وردپرس، بدون هیچ تداخل با سایر پلاگین‌ها یا هسته وردپرس.',
        },
        {
          step: '۰۳',
          title: 'توسعه پنل مدیریت کاربرپسند و امن',
          desc: 'طراحی داشبورد تنظیمات روان در پنل وردپرس همراه با احراز هویت دوعاملی و محافظت کامل در برابر حملات تزریق کد.',
        },
        {
          step: '۰۴',
          title: 'تست بار، مستندسازی فنی و گارانتی کارکرد',
          desc: 'آزمایش پایداری تحت ترافیک بالا، نگارش مستندات جامع توسعه و پشتیبانی کامل از آپدیت‌های آینده.',
        },
      ],
      teamExpertise: [
        {
          role: 'معمار ارشد پلاگین‌نویسی وردپرس',
          name: 'واحد توسعه افزونه‌های اختصاصی پلانکست',
          experience: '+۹ سال تجربه',
          skills: ['معماری ماژولار شیءگرا در PHP', 'امنیت داده و جلوگیری از تزریق SQL / XSS', 'هوک‌ها و فیلترهای استاندارد وردپرس'],
        },
        {
          role: 'متخصص اتصال سامانه‌های جانبی و وب‌سرویس‌ها',
          name: 'تیم یکپارچه‌سازی و اتوماسیون پلانکست',
          experience: '+۸ سال تجربه',
          skills: ['اتصال به سیستم‌های حسابداری و CRM', 'پیاده‌سازی ورود پیامکی OTP', 'سیستم‌های نوبت‌دهی و محاسباتی'],
        },
      ],
      coreServices: [
        'توسعه سیستم‌های اختصاصی ثبت‌نام و ورود کاربران با رمز یکبارمصرف پیامکی',
        'اتصال وب‌سایت به نرم‌افزارهای انبارداری، حسابداری (سپیدار، هلو و...) و CRM',
        'پیاده‌سازی پنل‌های کاربری پیشرفته با کیف پول، تیکت پشتیبانی و داشبورد سفارش‌ها',
        'طراحی افزونه‌های محاسبه قیمت آنلاین، فرم‌های چندمرحله‌ای و قراردادهای دیجیتال',
      ],
      details: {
        overview:
          'هنگامی که نیازهای فرآیندی کسب‌وکار شما با افزونه‌های عمومی و سنگین بازار همخوانی ندارد، برنامه‌نویسی افزونه اختصاصی راه‌حل استاندارد و ایمن خواهد بود. پلاگین‌های ما سبک، کاملاً سازگار و بهینه‌سازی‌شده هستند.',
        keyPoints: [
          'کدنویسی ایزوله بدون هیچ‌گونه تداخل با سایر افزونه‌ها یا هسته وردپرس',
          'پنل تنظیمات اختصاصی کاملاً فارسی در بخش مدیریت وردپرس',
          'امنیت سورس‌کد و مصرف حداقل منابع پردازنده و رم سرور',
        ],
        metrics: '۱۰۰٪ پوشش نیازهای فرآیندی اختصاصی کسب‌وکار بدون افت سرعت',
        impact: 'خودکارسازی کارهای تکراری و خلق تجربه‌ای مدرن و متمایز برای کاربران.',
      },
    },
  ];

  return (
    <section id="approach-section" className="relative w-full bg-white text-[#0a181c] py-16 sm:py-24 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden border-t border-[#f0f3f2] select-text" dir="rtl">
      {/* Subtle background ambient geometric shards */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Badge (Centered) */}
        <div className="w-full flex justify-center mb-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-[#0a4852] border border-emerald-200/60 text-xs font-semibold tracking-wide shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#439683]" />
            تخصص‌ها و راهکارهای طراحی سایت
          </span>
        </div>

        {/* Section Header */}
        <div className="w-full mb-10 sm:mb-14 text-right">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] font-bold text-[#0c2227] tracking-tight flex flex-wrap items-baseline gap-x-2.5 gap-y-1.5 leading-snug"
          >
            <span className="text-[#0c2227]">تخصص‌های پلانکست در طراحی و توسعه:</span>
            <span className="text-[#439683] font-normal">
              راهکارهای تخصصی طراحی سایت برای رشد کسب‌وکار شما
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed w-full max-w-none text-justify"
          >
            از طراحی سایت فروشگاهی و شرکتی تا توسعه قالب و افزونه‌های اختصاصی؛ پلانکست راهکارهای دیجیتال متناسب با نیاز کسب‌وکار شما را ارائه می‌دهد
          </motion.p>
        </div>

        {/* ======================================================== */}
        {/* 2 CARDS PER ROW, 2-LINE CLAMPED & JUSTIFIED TEXTS       */}
        {/* Requirement: 2 cards per row, title justified max 2     */}
        {/* lines, description justified max 2 lines with '...',    */}
        {/* 'مشاهده' button completely removed.                      */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-7">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedCard(item)}
              className="group relative h-[320px] sm:h-[350px] rounded-[30px] overflow-hidden cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(10,130,104,0.22)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-end p-6 sm:p-7 text-right select-text border border-black/5"
            >
              {/* Card Photo Background */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-[0.88] group-hover:brightness-[0.75]"
                />
                {/* Multi-stage dark gradient overlay to ensure high readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06181d] via-[#06181d]/80 via-50% to-black/20" />
                <div className="absolute inset-0 bg-[#0a4852]/20 group-hover:bg-[#0a4852]/40 transition-colors duration-500" />
              </div>

              {/* Top Tag */}
              <div className="absolute top-5 right-5 z-10">
                <span className="text-[11px] font-bold text-emerald-200 bg-black/45 backdrop-blur-md px-3.5 py-1 rounded-full border border-emerald-400/30 shadow-sm">
                  {item.tag}
                </span>
              </div>

              {/* Bottom Content Area: Title & Description & View More Action */}
              <div className="relative z-10 text-white flex flex-col justify-end">
                {/* Title: Justified and strictly clamped to max 2 lines */}
                <h3 className="text-lg sm:text-xl font-bold leading-snug tracking-tight text-white group-hover:text-emerald-300 transition-colors duration-300 text-justify line-clamp-2">
                  {item.title}
                </h3>

                {/* Short Description: Justified and strictly clamped to max 2 lines ending with '...' */}
                <p className="mt-2 text-xs sm:text-[13.5px] text-slate-200/90 leading-relaxed font-normal text-justify line-clamp-2">
                  {item.shortDesc}
                </p>

                {/* Thin divider line and View More Specialties & Skills (like Leadership cards) */}
                <div className="mt-3.5 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-semibold text-emerald-300 group-hover:text-white transition-colors">
                  <span>مشاهده بیشتر تخصص‌ها و مهارت‌ها</span>
                  <span className="group-hover:-translate-x-1.5 transition-transform text-sm">←</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* WIDE MODAL FOR INTRODUCING TEAM EXPERTISE & SERVICES     */}
      {/* max-w-5xl, Light Theme, Rich Imagery & Beautiful Grid     */}
      {/* z-[1050] to always sit on top of floating navbar (z-[999])*/}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-[1050] flex items-center justify-center p-3 sm:p-6" dir="rtl">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className="absolute inset-0 bg-slate-950/75 backdrop-blur-md"
            />

            {/* Modal Dialog: Ultra Wide (max-w-5xl) with Clean Light Styling */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="relative w-full max-w-5xl bg-white border border-slate-200/90 rounded-[28px] sm:rounded-[36px] shadow-[0_25px_70px_rgba(0,0,0,0.25)] z-10 text-right overflow-hidden max-h-[92vh] flex flex-col select-text"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedCard(null)}
                className="absolute top-5 left-5 z-20 p-2.5 rounded-full bg-white/90 hover:bg-slate-100 text-slate-700 hover:text-slate-950 shadow-md border border-slate-200 transition-colors cursor-pointer"
                aria-label="بستن پنجره"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content Scroll Area */}
              <div className="overflow-y-auto space-y-6">
                {/* Hero Banner with Team Picture & Title */}
                <div className="relative w-full h-48 sm:h-64 overflow-hidden rounded-t-[28px] sm:rounded-t-[36px]">
                  <img
                    src={selectedCard.image}
                    alt={selectedCard.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2328] via-[#0a2328]/60 to-transparent" />
                  
                  {/* Overlay Titles */}
                  <div className="absolute bottom-5 right-6 sm:right-8 left-6 text-white text-right">
                    <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/30 border border-emerald-400/40 text-emerald-200 backdrop-blur-md mb-2">
                      {selectedCard.tag}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                      {selectedCard.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-7 pt-1">
                  {/* Overview Paragraph */}
                  <div className="p-5 rounded-2xl bg-[#f5faf8] border border-emerald-100/80 text-sm sm:text-base text-slate-700 leading-relaxed text-right">
                    <p className="font-bold text-[#0a4852] mb-1.5 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <span>{selectedCard.specialtyTitle}</span>
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed text-justify">
                      {selectedCard.specialtyDescription}
                    </p>
                  </div>

                  {/* Tailored 4-Step Process Section */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-900 pb-1">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                      <span>فرآیند اجرایی ۴ مرحله‌ای اختصاصی «{selectedCard.title}»:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                      {selectedCard.processSteps.map((pStep, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-4 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/80 shadow-2xs text-right relative overflow-hidden group hover:border-emerald-300 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                              مرحله {pStep.step}
                            </span>
                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                          </div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1 leading-snug">
                            {pStep.title}
                          </h4>
                          <p className="text-[11.5px] text-slate-500 leading-relaxed text-justify">
                            {pStep.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies & Stacks Bar */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-wrap items-center gap-2 text-right">
                    <span className="text-xs font-bold text-slate-800 shrink-0 ml-2 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>فناوری‌ها و استانداردهای این حوزه:</span>
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCard.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 2-Column Grid: Team Expertise Roles & Core Services */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                    {/* Left in RTL: Team Expertise Members */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                          <Users2 className="w-5 h-5 text-emerald-600" />
                          <span>ترکیب و شایستگی‌های تیم تخصصی:</span>
                        </div>
                        <div className="space-y-4">
                          {selectedCard.teamExpertise.map((exp, idx) => (
                            <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                              <div className="flex items-center justify-between mb-1.5">
                                <span className="text-sm font-bold text-[#0c2e36]">{exp.role}</span>
                                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                                  {exp.experience}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 mb-2">{exp.name}</p>
                              <div className="flex flex-wrap gap-1.5">
                                {exp.skills.map((skill, sIdx) => (
                                  <span key={sIdx} className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Performance Metric Box */}
                      <div className="mt-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center gap-3">
                        <Award className="w-5 h-5 text-emerald-700 shrink-0" />
                        <div>
                          <span className="text-[11px] font-semibold text-emerald-800 block">سنجه کلیدی بازدهی:</span>
                          <span className="text-xs sm:text-sm font-bold text-emerald-950">{selectedCard.details.metrics}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right in RTL: Core Services & Implementation */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-[#f9fbfa] border border-[#dce8e3] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                          <Layers className="w-5 h-5 text-emerald-600" />
                          <span>خدمات و راهکارهای قابل ارائه به پروژه‌ها:</span>
                        </div>
                        <div className="space-y-3">
                          {selectedCard.coreServices.map((service, sIndex) => (
                            <div key={sIndex} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700">
                        <span className="font-bold text-slate-900 block mb-0.5">اثر راهبردی بر پروژه:</span>
                        {selectedCard.details.impact}
                      </div>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedCard(null)}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      بستن پنجره
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCard(null);
                        if (onOpenOrder) {
                          onOpenOrder();
                        } else {
                          const el = document.getElementById('consultation-trigger') || document.getElementById('contact-trigger');
                          if (el) el.click();
                        }
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#0a4852] hover:bg-[#07363e] text-white text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg cursor-pointer"
                    >
                      <span>ثبت سفارش و مذاکره با این تیم</span>
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
