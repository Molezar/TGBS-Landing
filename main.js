const texts = {
  en: {
    title: "Telegram Bot Management Platform",
    subtitle: "One platform to build, manage and scale Telegram bots for real businesses.",
    cta: "Contact",

    usecasesTitle: "Who is this for?",
    uc1: "Service providers managing multiple client bots",
    uc2: "Developers tired of copy-paste bot code",
    uc3: "Teams needing control, scaling and stability",

    featuresTitle: "What you get",
    f1: "Centralized control panel for all bots",
    f2: "Scalable architecture (aiogram-based)",
    f3: "Modular logic and service providers",
    f4: "Built for long-term growth, not hacks",

    ctaTitle: "Build bots like a product",
    ctaText: "Stop reinventing bots. Start scaling them.",
    ctaBtn: "Message me on Telegram"
  },
  ru: {
    title: "Платформа управления Telegram-ботами",
    subtitle: "Единая система для создания, управления и масштабирования ботов.",
    cta: "Связаться",

    usecasesTitle: "Для кого это?",
    uc1: "Сервис-провайдеры с несколькими ботами",
    uc2: "Разработчики, уставшие от копипасты",
    uc3: "Команды, которым важны контроль и масштаб",

    featuresTitle: "Что вы получаете",
    f1: "Единая панель управления ботами",
    f2: "Масштабируемая архитектура (aiogram)",
    f3: "Модульная логика и сервис-провайдеры",
    f4: "Платформа, а не одноразовый бот",

    ctaTitle: "Делайте ботов как продукт",
    ctaText: "Хватит костылей. Начните масштабироваться.",
    ctaBtn: "Написать в Telegram"
  },
  uk: {
    title: "Платформа керування Telegram-ботами",
    subtitle: "Єдина система для створення та масштабування ботів.",
    cta: "Звʼязатися",

    usecasesTitle: "Для кого це?",
    uc1: "Сервіс-провайдери з кількома ботами",
    uc2: "Розробники, втомлені від копіпасту",
    uc3: "Команди, яким потрібен контроль",

    featuresTitle: "Можливості платформи",
    f1: "Єдина панель керування ботами",
    f2: "Масштабована архітектура (aiogram)",
    f3: "Модульна логіка та провайдери",
    f4: "Рішення для росту, а не хаки",

    ctaTitle: "Створюйте боти правильно",
    ctaText: "Не з нуля. Не по одному.",
    ctaBtn: "Написати в Telegram"
  }
};

function setLang(lang) {
  Object.keys(texts[lang]).forEach(key => {
    const el = document.getElementById(key);
    if (el) el.innerText = texts[lang][key];
  });
}

// DOM готов
document.addEventListener("DOMContentLoaded", () => setLang("en"));