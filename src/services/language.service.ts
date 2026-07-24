
import { Injectable, signal, computed, inject } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private translocoService = inject(TranslocoService);
  currentLang = signal<'en' | 'ar'>('en');
  direction = computed(() => this.currentLang() === 'ar' ? 'rtl' : 'ltr');

  private translationsData: any = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        blog: 'Blog',
        contact: 'Contact',
        login: 'Login',
        getStarted: 'Learn More',
        bookADemo: 'Book a demo',
        openMenu: 'Open menu',
        closeMenu: 'Close menu'
      },
      hero: {
        badge: 'Payroll Managment',
        title1:'Your Premier Platform',
        title2: ' for Remote Work and Human Resources Management',
        subtitle: 'We are trusted by 20 big companies. Find your talent and make your dream to work.',
         paragraph:'At the forefront of digital transformation, we are committed to elevating your vision of work...',
        getStarted: 'Get Started',
        learnMoreAria: 'Learn more about platform features'
      },
      trustedBy: 'Trusted by 20 big companies',
      hrSection: {
        titlePrefix: 'Trusted by',
        titleHighlight: '20 big companies',
        subtitle: 'At the forefront of digital transformation, we are committed to elevating your vision of work.',
        totalEmployees: 'Total Employees',
        totalRevenue: 'Total Revenue',
        newCompanies: 'New Companies',
        increaseWeek: '20% Increase Last 7 Days',
        thisWeek: 'This Week',
        lastWeek: 'Last Week',
        selectDate: 'Select Date',
        platformPreview: 'Platform analytics preview',
        trustedCompanies: 'Trusted companies'
      },
      analysis: {
        overview: 'Overview',
        totalRevenue: 'Total Revenue',
        statistics: 'Statistics',
        invoiceStatistics: 'Invoice Statistics',
        completedInvoices: 'Completed invoices',
        dashboardPreview: 'Analytics dashboard preview'
      },
      steps: {
        profit: 'Profit',
        payroll: 'Payroll',
        lastMonth: 'Last Month',
        applyFilters: 'Apply filters',
        country: 'Country',
        workerType: 'Worker type',
        jobTitle: 'Job title',
        step1Title: 'Hire Globally, Compliantly',
        step1Desc: 'Onboard employees and contractors in 180+ countries with built-in compliance checks.',
        step2Title: 'Run Payroll in One Click',
        step2Desc: 'Automate salary calculations, taxes, and payments — all from a single dashboard.',
        step3Title: 'Track Everything in Real Time',
        step3Desc: 'Monitor attendance, contracts, and team performance with live analytics.'
      },
      blog: {
        title: 'Blog',
        subtitle: 'Read about Transformation success stories',
        categoryTag: 'Payroll Management',
        readMore: 'Read more'
      },
      choosing: {
        tag: 'Payroll Management',
        title: 'Choosing for creating impact',
        description: 'At the forefront of digital transformation, we are committed to elevating your vision of work with innovative solutions that streamline processes and enhance productivity.',
        feature: 'Real Success Growth',
        getStarted: 'Get Started'
      },
      creatingImpact: {
        titlePrefix: 'Choosing for',
        titleHighlight: 'creating impact',
        description: 'At the forefront of digital transformation, we are committed to elevating your vision of work...',
        statLabel: 'of Global Success around world'
      },
      compliance: {
        titlePart1: 'Unlock Continuous Compliance',
        titlePart2: 'with the MTwork',
        titlePart3: 'Compliance Hub',
        description: 'Keep your finger on the pulse of global compliance issues like never before. Our Compliance Hub provides access to the latest regulatory updates and risk warnings, offering guidance and actionable alerts to enhance compliance — all in a single place.',
        getStarted: 'Get Started',
        trustedByPrefix: 'Trusted by',
        trustedBySuffix: 'companies',
        cardDescription: 'At the forefront of digital transformation, we are committed to elevating your vision of work...',
        portalTitle: 'Client Portal',
        portalDescription: 'Secure client access portal for case updates, document sharing and direct communication with the legal team.'
      },
      whyChoose: {
        titleHighlight: 'See Why Companies',
        titleRest: 'choose our platform',
        description: 'At the forefront of digital transformation, we are committed to elevating your vision of work...',
        learnMore: 'Learn More'
      },
      footer: {
        description: 'The biggest SaaS Platform Trusted by millions of users',
        platform: 'Platform',
        howItWorks: 'How it works',
        solutions: 'Solutions',
        resources: 'Resources',
        hireEmployee: 'Hire Employee',
        hireContractor: 'Hire Contractor',
        runPayroll: 'Run Global Payroll',
        integrations: 'Integrations',
        allRightsReserved: 'All Rights Reserved by MTWork ©',
        privacyPolicy: 'Privacy Policy',
        cookiesPolicy: 'Cookies Policy',
        termsOfUse: 'Terms of Use',
        social: {
          instagram: 'Follow us on Instagram',
          linkedin: 'Connect on LinkedIn',
          youtube: 'Subscribe on YouTube',
          facebook: 'Like us on Facebook',
          twitter: 'Follow us on X'
        }
      },
      common: {
        toggleLanguage: 'Toggle language',
        themeToggle: 'Theme toggle',
        toggleTheme: 'Toggle theme',
        lightMode: 'Light mode',
        darkMode: 'Dark mode',
        closeDialog: 'Close dialog',
        teamsActions: 'Teams actions',
        mainNavigation: 'Main navigation',
        toggleNavMenu: 'Toggle navigation menu',
        mtworkHome: 'MTWork home',
        hidePassword: 'Hide password',
        showPassword: 'Show password'
      }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        about: 'حولنا',
        services: 'الخدمات',
        blog: 'المدونة',
        contact: 'اتصل بنا',
        login: 'تسجيل الدخول',
        getStarted: 'اعرف المزيد',
        bookADemo: 'احجز عرضاً',
        openMenu: 'افتح القائمة',
        closeMenu: 'أغلق القائمة'
      },
      hero: {
        title1:"منصتك الأولى ",
        title2: ' للعمل عن بعد وإدارة الموارد البشرية',
        paragraph:'في طليعة التحول الرقمي، نحن ملتزمون برفع مستوى رؤيتك للعمل وتحقيقها بأحدث الوسائل التقنية',
        subtitle: 'نحن موثوقون من قبل 20 شركة كبرى. ابحث عن موهبتك وحقق حلمك في العمل.',
        getStarted: 'ابدأ الآن',
        learnMoreAria: 'معرفة المزيد عن ميزات المنصة'
      },
      trustedBy: 'موثوق به من قبل 20 شركة كبرى',
      hrSection: {
        titlePrefix: 'موثوق به من قبل',
        titleHighlight: '20 شركة كبرى',
        subtitle: 'في طليعة التحول الرقمي، نحن ملتزمون برفع مستوى رؤيتك للعمل.',
        totalEmployees: 'إجمالي الموظفين',
        totalRevenue: 'إجمالي الإيرادات',
        newCompanies: 'شركات جديدة',
        increaseWeek: '20% زيادة خلال آخر 7 أيام',
        thisWeek: 'هذا الأسبوع',
        lastWeek: 'الأسبوع الماضي',
        selectDate: 'اختر التاريخ',
        platformPreview: 'معاينة تحليلات المنصة',
        trustedCompanies: 'الشركات الموثوقة'
      },
      analysis: {
        overview: 'نظرة عامة',
        totalRevenue: 'إجمالي الإيرادات',
        statistics: 'الإحصائيات',
        invoiceStatistics: 'إحصائيات الفواتير',
        completedInvoices: 'الفواتير المكتملة',
        dashboardPreview: 'معاينة لوحة التحليلات'
      },
      steps: {
        profit: 'الأرباح',
        payroll: 'الرواتب',
        lastMonth: 'الشهر الماضي',
        applyFilters: 'تطبيق الفلاتر',
        country: 'الدولة',
        workerType: 'نوع العمل',
        jobTitle: 'المسمى الوظيفي',
        step1Title: 'توظيف عالمي وفق المعايير القانونية',
        step1Desc: 'استقطب موظفين ومتعاقدين من أكثر من 180 دولة مع فحوصات الامتثال المدمجة.',
        step2Title: 'تشغيل الرواتب بنقرة واحدة',
        step2Desc: 'أتمتة حسابات الرواتب والضرائب والمدفوعات — كل ذلك من لوحة تحكم واحدة.',
        step3Title: 'تتبع كل شيء في الوقت الفعلي',
        step3Desc: 'راقب الحضور والعقود وأداء الفريق بتحليلات مباشرة.'
      },
      blog: {
        title: 'المدونة',
        subtitle: 'اقرأ قصص النجاح والتحول الرقمي',
        categoryTag: 'إدارة الرواتب',
        readMore: 'اقرأ المزيد'
      },
      choosing: {
        tag: 'إدارة الرواتب',
        title: 'اختيار لصنع الأثر',
        description: 'في طليعة التحول الرقمي، نحن ملتزمون برفع مستوى رؤيتك للعمل بحلول مبتكرة تبسّط العمليات وتعزز الإنتاجية.',
        feature: 'نمو حقيقي ومستدام',
        getStarted: 'ابدأ الآن'
      },
      creatingImpact: {
        titlePrefix: 'اختيار لـ',
        titleHighlight: 'صنع الأثر',
        description: 'في طليعة التحول الرقمي، نحن ملتزمون برفع مستوى رؤيتك للعمل...',
        statLabel: 'نجاح عالمي حول العالم'
      },
      compliance: {
        titlePart1: 'أطلق الامتثال المستمر',
        titlePart2: 'مع MTwork',
        titlePart3: 'مركز الامتثال',
        description: 'كن على اطلاع دائم بقضايا الامتثال العالمية كما لم يحدث من قبل. يتيح لك مركز الامتثال لدينا الوصول إلى أحدث التحديثات التنظيمية وتحذيرات المخاطر، مع توجيهات وتنبيهات قابلة للتنفيذ — كل ذلك في مكان واحد.',
        getStarted: 'ابدأ الآن',
        trustedByPrefix: 'موثوق به من',
        trustedBySuffix: 'شركة',
        cardDescription: 'في طليعة التحول الرقمي، نحن ملتزمون برفع مستوى رؤيتك للعمل...',
        portalTitle: 'بوابة العميل',
        portalDescription: 'بوابة وصول آمنة للعميل لمتابعة الحالات ومشاركة المستندات والتواصل المباشر مع الفريق القانوني.'
      },
      whyChoose: {
        titleHighlight: 'لماذا تختار الشركات',
        titleRest: 'منصتنا',
        description: 'في طليعة التحول الرقمي، نحن ملتزمون برفع مستوى رؤيتك للعمل...',
        learnMore: 'اعرف المزيد'
      },
      footer: {
        description: 'أكبر منصة SaaS موثوقة من ملايين المستخدمين',
        platform: 'المنصة',
        howItWorks: 'كيف يعمل',
        solutions: 'الحلول',
        resources: 'المصادر',
        hireEmployee: 'توظيف موظف',
        hireContractor: 'توظيف متعاقد',
        runPayroll: 'إدارة الرواتب عالمياً',
        integrations: 'التكاملات',
        allRightsReserved: 'جميع الحقوق محفوظة لـ MTWork ©',
        privacyPolicy: 'سياسة الخصوصية',
        cookiesPolicy: 'سياسة ملفات تعريف الارتباط',
        termsOfUse: 'شروط الاستخدام',
        social: {
          instagram: 'تابعنا على Instagram',
          linkedin: 'تواصل معنا على LinkedIn',
          youtube: 'اشترك في قناتنا على YouTube',
          facebook: 'أعجبنا على Facebook',
          twitter: 'تابعنا على X'
        }
      },
      common: {
        toggleLanguage: 'تبديل اللغة',
        themeToggle: 'تبديل المظهر',
        toggleTheme: 'تبديل السمة',
        lightMode: 'الوضع الفاتح',
        darkMode: 'الوضع الداكن',
        closeDialog: 'إغلاق النافذة',
        teamsActions: 'إجراءات الفرق',
        mainNavigation: 'التنقل الرئيسي',
        toggleNavMenu: 'تبديل قائمة التنقل',
        mtworkHome: 'الرئيسية - MTWork',
        hidePassword: 'إخفاء كلمة المرور',
        showPassword: 'إظهار كلمة المرور'
      }
    }
  };

  translations = computed(() => this.translationsData[this.currentLang()]);

  toggleLanguage(): void {
    const next = this.currentLang() === 'en' ? 'ar' : 'en';
    this.currentLang.set(next);
    this.translocoService.setActiveLang(next);
    document.documentElement.setAttribute('dir', next === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', next);
  }
}
