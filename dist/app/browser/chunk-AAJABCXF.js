import {
  TranslocoService
} from "./chunk-D5YQFVLR.js";
import {
  Injectable,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-MQLQGMUZ.js";

// src/services/language.service.ts
var _LanguageService = class _LanguageService {
  constructor() {
    this.translocoService = inject(TranslocoService);
    this.currentLang = signal("en", ...ngDevMode ? [{ debugName: "currentLang" }] : []);
    this.direction = computed(() => this.currentLang() === "ar" ? "rtl" : "ltr", ...ngDevMode ? [{ debugName: "direction" }] : []);
    this.translationsData = {
      en: {
        nav: {
          home: "Home",
          about: "About",
          services: "Services",
          blog: "Blog",
          contact: "Contact",
          login: "Login",
          getStarted: "Learn More",
          bookADemo: "Book a demo",
          openMenu: "Open menu",
          closeMenu: "Close menu"
        },
        hero: {
          badge: "Payroll Managment",
          title1: "Your Premier Platform",
          title2: " for Remote Work and Human Resources Management",
          subtitle: "We are trusted by 20 big companies. Find your talent and make your dream to work.",
          paragraph: "At the forefront of digital transformation, we are committed to elevating your vision of work...",
          getStarted: "Get Started",
          learnMoreAria: "Learn more about platform features"
        },
        trustedBy: "Trusted by 20 big companies",
        hrSection: {
          titlePrefix: "Trusted by",
          titleHighlight: "20 big companies",
          subtitle: "At the forefront of digital transformation, we are committed to elevating your vision of work.",
          totalEmployees: "Total Employees",
          totalRevenue: "Total Revenue",
          newCompanies: "New Companies",
          increaseWeek: "20% Increase Last 7 Days",
          thisWeek: "This Week",
          lastWeek: "Last Week",
          selectDate: "Select Date",
          platformPreview: "Platform analytics preview",
          trustedCompanies: "Trusted companies"
        },
        analysis: {
          overview: "Overview",
          totalRevenue: "Total Revenue",
          statistics: "Statistics",
          invoiceStatistics: "Invoice Statistics",
          completedInvoices: "Completed invoices",
          dashboardPreview: "Analytics dashboard preview"
        },
        steps: {
          profit: "Profit",
          payroll: "Payroll",
          lastMonth: "Last Month",
          applyFilters: "Apply filters",
          country: "Country",
          workerType: "Worker type",
          jobTitle: "Job title",
          step1Title: "Hire Globally, Compliantly",
          step1Desc: "Onboard employees and contractors in 180+ countries with built-in compliance checks.",
          step2Title: "Run Payroll in One Click",
          step2Desc: "Automate salary calculations, taxes, and payments \u2014 all from a single dashboard.",
          step3Title: "Track Everything in Real Time",
          step3Desc: "Monitor attendance, contracts, and team performance with live analytics."
        },
        blog: {
          title: "Blog",
          subtitle: "Read about Transformation success stories",
          categoryTag: "Payroll Management",
          readMore: "Read more"
        },
        choosing: {
          tag: "Payroll Management",
          title: "Choosing for creating impact",
          description: "At the forefront of digital transformation, we are committed to elevating your vision of work with innovative solutions that streamline processes and enhance productivity.",
          feature: "Real Success Growth",
          getStarted: "Get Started"
        },
        creatingImpact: {
          titlePrefix: "Choosing for",
          titleHighlight: "creating impact",
          description: "At the forefront of digital transformation, we are committed to elevating your vision of work...",
          statLabel: "of Global Success around world"
        },
        compliance: {
          titlePart1: "Unlock Continuous Compliance",
          titlePart2: "with the MTwork",
          titlePart3: "Compliance Hub",
          description: "Keep your finger on the pulse of global compliance issues like never before. Our Compliance Hub provides access to the latest regulatory updates and risk warnings, offering guidance and actionable alerts to enhance compliance \u2014 all in a single place.",
          getStarted: "Get Started",
          trustedByPrefix: "Trusted by",
          trustedBySuffix: "companies",
          cardDescription: "At the forefront of digital transformation, we are committed to elevating your vision of work...",
          portalTitle: "Client Portal",
          portalDescription: "Secure client access portal for case updates, document sharing and direct communication with the legal team."
        },
        whyChoose: {
          titleHighlight: "See Why Companies",
          titleRest: "choose our platform",
          description: "At the forefront of digital transformation, we are committed to elevating your vision of work...",
          learnMore: "Learn More"
        },
        footer: {
          description: "The biggest SaaS Platform Trusted by millions of users",
          platform: "Platform",
          howItWorks: "How it works",
          solutions: "Solutions",
          resources: "Resources",
          hireEmployee: "Hire Employee",
          hireContractor: "Hire Contractor",
          runPayroll: "Run Global Payroll",
          integrations: "Integrations",
          allRightsReserved: "All Rights Reserved by MTWork \xA9",
          privacyPolicy: "Privacy Policy",
          cookiesPolicy: "Cookies Policy",
          termsOfUse: "Terms of Use",
          social: {
            instagram: "Follow us on Instagram",
            linkedin: "Connect on LinkedIn",
            youtube: "Subscribe on YouTube",
            facebook: "Like us on Facebook",
            twitter: "Follow us on X"
          }
        },
        common: {
          toggleLanguage: "Toggle language",
          themeToggle: "Theme toggle",
          toggleTheme: "Toggle theme",
          lightMode: "Light mode",
          darkMode: "Dark mode",
          closeDialog: "Close dialog",
          teamsActions: "Teams actions",
          mainNavigation: "Main navigation",
          toggleNavMenu: "Toggle navigation menu",
          mtworkHome: "MTWork home",
          hidePassword: "Hide password",
          showPassword: "Show password"
        }
      },
      ar: {
        nav: {
          home: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629",
          about: "\u062D\u0648\u0644\u0646\u0627",
          services: "\u0627\u0644\u062E\u062F\u0645\u0627\u062A",
          blog: "\u0627\u0644\u0645\u062F\u0648\u0646\u0629",
          contact: "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627",
          login: "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
          getStarted: "\u0627\u0639\u0631\u0641 \u0627\u0644\u0645\u0632\u064A\u062F",
          bookADemo: "\u0627\u062D\u062C\u0632 \u0639\u0631\u0636\u0627\u064B",
          openMenu: "\u0627\u0641\u062A\u062D \u0627\u0644\u0642\u0627\u0626\u0645\u0629",
          closeMenu: "\u0623\u063A\u0644\u0642 \u0627\u0644\u0642\u0627\u0626\u0645\u0629"
        },
        hero: {
          title1: "\u0645\u0646\u0635\u062A\u0643 \u0627\u0644\u0623\u0648\u0644\u0649 ",
          title2: " \u0644\u0644\u0639\u0645\u0644 \u0639\u0646 \u0628\u0639\u062F \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062F \u0627\u0644\u0628\u0634\u0631\u064A\u0629",
          paragraph: "\u0641\u064A \u0637\u0644\u064A\u0639\u0629 \u0627\u0644\u062A\u062D\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u064A\u060C \u0646\u062D\u0646 \u0645\u0644\u062A\u0632\u0645\u0648\u0646 \u0628\u0631\u0641\u0639 \u0645\u0633\u062A\u0648\u0649 \u0631\u0624\u064A\u062A\u0643 \u0644\u0644\u0639\u0645\u0644 \u0648\u062A\u062D\u0642\u064A\u0642\u0647\u0627 \u0628\u0623\u062D\u062F\u062B \u0627\u0644\u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062A\u0642\u0646\u064A\u0629",
          subtitle: "\u0646\u062D\u0646 \u0645\u0648\u062B\u0648\u0642\u0648\u0646 \u0645\u0646 \u0642\u0628\u0644 20 \u0634\u0631\u0643\u0629 \u0643\u0628\u0631\u0649. \u0627\u0628\u062D\u062B \u0639\u0646 \u0645\u0648\u0647\u0628\u062A\u0643 \u0648\u062D\u0642\u0642 \u062D\u0644\u0645\u0643 \u0641\u064A \u0627\u0644\u0639\u0645\u0644.",
          getStarted: "\u0627\u0628\u062F\u0623 \u0627\u0644\u0622\u0646",
          learnMoreAria: "\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0645\u0632\u064A\u062F \u0639\u0646 \u0645\u064A\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u0635\u0629"
        },
        trustedBy: "\u0645\u0648\u062B\u0648\u0642 \u0628\u0647 \u0645\u0646 \u0642\u0628\u0644 20 \u0634\u0631\u0643\u0629 \u0643\u0628\u0631\u0649",
        hrSection: {
          titlePrefix: "\u0645\u0648\u062B\u0648\u0642 \u0628\u0647 \u0645\u0646 \u0642\u0628\u0644",
          titleHighlight: "20 \u0634\u0631\u0643\u0629 \u0643\u0628\u0631\u0649",
          subtitle: "\u0641\u064A \u0637\u0644\u064A\u0639\u0629 \u0627\u0644\u062A\u062D\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u064A\u060C \u0646\u062D\u0646 \u0645\u0644\u062A\u0632\u0645\u0648\u0646 \u0628\u0631\u0641\u0639 \u0645\u0633\u062A\u0648\u0649 \u0631\u0624\u064A\u062A\u0643 \u0644\u0644\u0639\u0645\u0644.",
          totalEmployees: "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646",
          totalRevenue: "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0625\u064A\u0631\u0627\u062F\u0627\u062A",
          newCompanies: "\u0634\u0631\u0643\u0627\u062A \u062C\u062F\u064A\u062F\u0629",
          increaseWeek: "20% \u0632\u064A\u0627\u062F\u0629 \u062E\u0644\u0627\u0644 \u0622\u062E\u0631 7 \u0623\u064A\u0627\u0645",
          thisWeek: "\u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639",
          lastWeek: "\u0627\u0644\u0623\u0633\u0628\u0648\u0639 \u0627\u0644\u0645\u0627\u0636\u064A",
          selectDate: "\u0627\u062E\u062A\u0631 \u0627\u0644\u062A\u0627\u0631\u064A\u062E",
          platformPreview: "\u0645\u0639\u0627\u064A\u0646\u0629 \u062A\u062D\u0644\u064A\u0644\u0627\u062A \u0627\u0644\u0645\u0646\u0635\u0629",
          trustedCompanies: "\u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0645\u0648\u062B\u0648\u0642\u0629"
        },
        analysis: {
          overview: "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629",
          totalRevenue: "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0625\u064A\u0631\u0627\u062F\u0627\u062A",
          statistics: "\u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A",
          invoiceStatistics: "\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631",
          completedInvoices: "\u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631 \u0627\u0644\u0645\u0643\u062A\u0645\u0644\u0629",
          dashboardPreview: "\u0645\u0639\u0627\u064A\u0646\u0629 \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0644\u064A\u0644\u0627\u062A"
        },
        steps: {
          profit: "\u0627\u0644\u0623\u0631\u0628\u0627\u062D",
          payroll: "\u0627\u0644\u0631\u0648\u0627\u062A\u0628",
          lastMonth: "\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0645\u0627\u0636\u064A",
          applyFilters: "\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0641\u0644\u0627\u062A\u0631",
          country: "\u0627\u0644\u062F\u0648\u0644\u0629",
          workerType: "\u0646\u0648\u0639 \u0627\u0644\u0639\u0645\u0644",
          jobTitle: "\u0627\u0644\u0645\u0633\u0645\u0649 \u0627\u0644\u0648\u0638\u064A\u0641\u064A",
          step1Title: "\u062A\u0648\u0638\u064A\u0641 \u0639\u0627\u0644\u0645\u064A \u0648\u0641\u0642 \u0627\u0644\u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629",
          step1Desc: "\u0627\u0633\u062A\u0642\u0637\u0628 \u0645\u0648\u0638\u0641\u064A\u0646 \u0648\u0645\u062A\u0639\u0627\u0642\u062F\u064A\u0646 \u0645\u0646 \u0623\u0643\u062B\u0631 \u0645\u0646 180 \u062F\u0648\u0644\u0629 \u0645\u0639 \u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0627\u0645\u062A\u062B\u0627\u0644 \u0627\u0644\u0645\u062F\u0645\u062C\u0629.",
          step2Title: "\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0631\u0648\u0627\u062A\u0628 \u0628\u0646\u0642\u0631\u0629 \u0648\u0627\u062D\u062F\u0629",
          step2Desc: "\u0623\u062A\u0645\u062A\u0629 \u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u0631\u0648\u0627\u062A\u0628 \u0648\u0627\u0644\u0636\u0631\u0627\u0626\u0628 \u0648\u0627\u0644\u0645\u062F\u0641\u0648\u0639\u0627\u062A \u2014 \u0643\u0644 \u0630\u0644\u0643 \u0645\u0646 \u0644\u0648\u062D\u0629 \u062A\u062D\u0643\u0645 \u0648\u0627\u062D\u062F\u0629.",
          step3Title: "\u062A\u062A\u0628\u0639 \u0643\u0644 \u0634\u064A\u0621 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0641\u0639\u0644\u064A",
          step3Desc: "\u0631\u0627\u0642\u0628 \u0627\u0644\u062D\u0636\u0648\u0631 \u0648\u0627\u0644\u0639\u0642\u0648\u062F \u0648\u0623\u062F\u0627\u0621 \u0627\u0644\u0641\u0631\u064A\u0642 \u0628\u062A\u062D\u0644\u064A\u0644\u0627\u062A \u0645\u0628\u0627\u0634\u0631\u0629."
        },
        blog: {
          title: "\u0627\u0644\u0645\u062F\u0648\u0646\u0629",
          subtitle: "\u0627\u0642\u0631\u0623 \u0642\u0635\u0635 \u0627\u0644\u0646\u062C\u0627\u062D \u0648\u0627\u0644\u062A\u062D\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u064A",
          categoryTag: "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0631\u0648\u0627\u062A\u0628",
          readMore: "\u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u0632\u064A\u062F"
        },
        choosing: {
          tag: "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0631\u0648\u0627\u062A\u0628",
          title: "\u0627\u062E\u062A\u064A\u0627\u0631 \u0644\u0635\u0646\u0639 \u0627\u0644\u0623\u062B\u0631",
          description: "\u0641\u064A \u0637\u0644\u064A\u0639\u0629 \u0627\u0644\u062A\u062D\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u064A\u060C \u0646\u062D\u0646 \u0645\u0644\u062A\u0632\u0645\u0648\u0646 \u0628\u0631\u0641\u0639 \u0645\u0633\u062A\u0648\u0649 \u0631\u0624\u064A\u062A\u0643 \u0644\u0644\u0639\u0645\u0644 \u0628\u062D\u0644\u0648\u0644 \u0645\u0628\u062A\u0643\u0631\u0629 \u062A\u0628\u0633\u0651\u0637 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0648\u062A\u0639\u0632\u0632 \u0627\u0644\u0625\u0646\u062A\u0627\u062C\u064A\u0629.",
          feature: "\u0646\u0645\u0648 \u062D\u0642\u064A\u0642\u064A \u0648\u0645\u0633\u062A\u062F\u0627\u0645",
          getStarted: "\u0627\u0628\u062F\u0623 \u0627\u0644\u0622\u0646"
        },
        creatingImpact: {
          titlePrefix: "\u0627\u062E\u062A\u064A\u0627\u0631 \u0644\u0640",
          titleHighlight: "\u0635\u0646\u0639 \u0627\u0644\u0623\u062B\u0631",
          description: "\u0641\u064A \u0637\u0644\u064A\u0639\u0629 \u0627\u0644\u062A\u062D\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u064A\u060C \u0646\u062D\u0646 \u0645\u0644\u062A\u0632\u0645\u0648\u0646 \u0628\u0631\u0641\u0639 \u0645\u0633\u062A\u0648\u0649 \u0631\u0624\u064A\u062A\u0643 \u0644\u0644\u0639\u0645\u0644...",
          statLabel: "\u0646\u062C\u0627\u062D \u0639\u0627\u0644\u0645\u064A \u062D\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645"
        },
        compliance: {
          titlePart1: "\u0623\u0637\u0644\u0642 \u0627\u0644\u0627\u0645\u062A\u062B\u0627\u0644 \u0627\u0644\u0645\u0633\u062A\u0645\u0631",
          titlePart2: "\u0645\u0639 MTwork",
          titlePart3: "\u0645\u0631\u0643\u0632 \u0627\u0644\u0627\u0645\u062A\u062B\u0627\u0644",
          description: "\u0643\u0646 \u0639\u0644\u0649 \u0627\u0637\u0644\u0627\u0639 \u062F\u0627\u0626\u0645 \u0628\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0627\u0645\u062A\u062B\u0627\u0644 \u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0629 \u0643\u0645\u0627 \u0644\u0645 \u064A\u062D\u062F\u062B \u0645\u0646 \u0642\u0628\u0644. \u064A\u062A\u064A\u062D \u0644\u0643 \u0645\u0631\u0643\u0632 \u0627\u0644\u0627\u0645\u062A\u062B\u0627\u0644 \u0644\u062F\u064A\u0646\u0627 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0623\u062D\u062F\u062B \u0627\u0644\u062A\u062D\u062F\u064A\u062B\u0627\u062A \u0627\u0644\u062A\u0646\u0638\u064A\u0645\u064A\u0629 \u0648\u062A\u062D\u0630\u064A\u0631\u0627\u062A \u0627\u0644\u0645\u062E\u0627\u0637\u0631\u060C \u0645\u0639 \u062A\u0648\u062C\u064A\u0647\u0627\u062A \u0648\u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0646\u0641\u064A\u0630 \u2014 \u0643\u0644 \u0630\u0644\u0643 \u0641\u064A \u0645\u0643\u0627\u0646 \u0648\u0627\u062D\u062F.",
          getStarted: "\u0627\u0628\u062F\u0623 \u0627\u0644\u0622\u0646",
          trustedByPrefix: "\u0645\u0648\u062B\u0648\u0642 \u0628\u0647 \u0645\u0646",
          trustedBySuffix: "\u0634\u0631\u0643\u0629",
          cardDescription: "\u0641\u064A \u0637\u0644\u064A\u0639\u0629 \u0627\u0644\u062A\u062D\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u064A\u060C \u0646\u062D\u0646 \u0645\u0644\u062A\u0632\u0645\u0648\u0646 \u0628\u0631\u0641\u0639 \u0645\u0633\u062A\u0648\u0649 \u0631\u0624\u064A\u062A\u0643 \u0644\u0644\u0639\u0645\u0644...",
          portalTitle: "\u0628\u0648\u0627\u0628\u0629 \u0627\u0644\u0639\u0645\u064A\u0644",
          portalDescription: "\u0628\u0648\u0627\u0628\u0629 \u0648\u0635\u0648\u0644 \u0622\u0645\u0646\u0629 \u0644\u0644\u0639\u0645\u064A\u0644 \u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u062D\u0627\u0644\u0627\u062A \u0648\u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0648\u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0627\u0644\u0645\u0628\u0627\u0634\u0631 \u0645\u0639 \u0627\u0644\u0641\u0631\u064A\u0642 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A."
        },
        whyChoose: {
          titleHighlight: "\u0644\u0645\u0627\u0630\u0627 \u062A\u062E\u062A\u0627\u0631 \u0627\u0644\u0634\u0631\u0643\u0627\u062A",
          titleRest: "\u0645\u0646\u0635\u062A\u0646\u0627",
          description: "\u0641\u064A \u0637\u0644\u064A\u0639\u0629 \u0627\u0644\u062A\u062D\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u064A\u060C \u0646\u062D\u0646 \u0645\u0644\u062A\u0632\u0645\u0648\u0646 \u0628\u0631\u0641\u0639 \u0645\u0633\u062A\u0648\u0649 \u0631\u0624\u064A\u062A\u0643 \u0644\u0644\u0639\u0645\u0644...",
          learnMore: "\u0627\u0639\u0631\u0641 \u0627\u0644\u0645\u0632\u064A\u062F"
        },
        footer: {
          description: "\u0623\u0643\u0628\u0631 \u0645\u0646\u0635\u0629 SaaS \u0645\u0648\u062B\u0648\u0642\u0629 \u0645\u0646 \u0645\u0644\u0627\u064A\u064A\u0646 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646",
          platform: "\u0627\u0644\u0645\u0646\u0635\u0629",
          howItWorks: "\u0643\u064A\u0641 \u064A\u0639\u0645\u0644",
          solutions: "\u0627\u0644\u062D\u0644\u0648\u0644",
          resources: "\u0627\u0644\u0645\u0635\u0627\u062F\u0631",
          hireEmployee: "\u062A\u0648\u0638\u064A\u0641 \u0645\u0648\u0638\u0641",
          hireContractor: "\u062A\u0648\u0638\u064A\u0641 \u0645\u062A\u0639\u0627\u0642\u062F",
          runPayroll: "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0631\u0648\u0627\u062A\u0628 \u0639\u0627\u0644\u0645\u064A\u0627\u064B",
          integrations: "\u0627\u0644\u062A\u0643\u0627\u0645\u0644\u0627\u062A",
          allRightsReserved: "\u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629 \u0644\u0640 MTWork \xA9",
          privacyPolicy: "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629",
          cookiesPolicy: "\u0633\u064A\u0627\u0633\u0629 \u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637",
          termsOfUse: "\u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645",
          social: {
            instagram: "\u062A\u0627\u0628\u0639\u0646\u0627 \u0639\u0644\u0649 Instagram",
            linkedin: "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0639\u0644\u0649 LinkedIn",
            youtube: "\u0627\u0634\u062A\u0631\u0643 \u0641\u064A \u0642\u0646\u0627\u062A\u0646\u0627 \u0639\u0644\u0649 YouTube",
            facebook: "\u0623\u0639\u062C\u0628\u0646\u0627 \u0639\u0644\u0649 Facebook",
            twitter: "\u062A\u0627\u0628\u0639\u0646\u0627 \u0639\u0644\u0649 X"
          }
        },
        common: {
          toggleLanguage: "\u062A\u0628\u062F\u064A\u0644 \u0627\u0644\u0644\u063A\u0629",
          themeToggle: "\u062A\u0628\u062F\u064A\u0644 \u0627\u0644\u0645\u0638\u0647\u0631",
          toggleTheme: "\u062A\u0628\u062F\u064A\u0644 \u0627\u0644\u0633\u0645\u0629",
          lightMode: "\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0641\u0627\u062A\u062D",
          darkMode: "\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u062F\u0627\u0643\u0646",
          closeDialog: "\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0646\u0627\u0641\u0630\u0629",
          teamsActions: "\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0641\u0631\u0642",
          mainNavigation: "\u0627\u0644\u062A\u0646\u0642\u0644 \u0627\u0644\u0631\u0626\u064A\u0633\u064A",
          toggleNavMenu: "\u062A\u0628\u062F\u064A\u0644 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062A\u0646\u0642\u0644",
          mtworkHome: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 - MTWork",
          hidePassword: "\u0625\u062E\u0641\u0627\u0621 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
          showPassword: "\u0625\u0638\u0647\u0627\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"
        }
      }
    };
    this.translations = computed(() => this.translationsData[this.currentLang()], ...ngDevMode ? [{ debugName: "translations" }] : []);
  }
  toggleLanguage() {
    const next = this.currentLang() === "en" ? "ar" : "en";
    this.currentLang.set(next);
    this.translocoService.setActiveLang(next);
    document.documentElement.setAttribute("dir", next === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", next);
  }
};
_LanguageService.\u0275fac = function LanguageService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LanguageService)();
};
_LanguageService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LanguageService, factory: _LanguageService.\u0275fac, providedIn: "root" });
var LanguageService = _LanguageService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  LanguageService
};
//# sourceMappingURL=chunk-AAJABCXF.js.map
