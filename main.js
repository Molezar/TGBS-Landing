let currentScreen = 0;
const totalScreens = 3;

const texts = {
  en: {
    title: "Telegram Booking Service",
    subtitle: "A unified platform for creating and managing Telegram bots for service bookings.",
    cta: "Order free demo",

    usecasesTitle: "Who is this for?",  
    uc1: "Beauty salons, barbershops, spas and massage centers",  
    uc2: "Clinics, private doctors, medical centers and horse riding clubs",  
    uc3: "Any business offering services that can be booked",  

    featuresTitle: "What you get",  
    f1: "A Telegram bot for your business. One business = one bot.",  
    f2: "An admin panel for you and a client interface for your customers.",  
    f3: "Flexible bot configuration tailored to your business needs.",  
    f4: "Booking management with client notifications and reminders.",  

    whyTitle: "Why do I need this?",  
    why1Title: "Save your time",  
    why1Text: "The bot accepts booking requests automatically. You only confirm or decline them.",  
    why2Title: "Client reminders",  
    why2Text: "The bot reminds clients about upcoming services and bookings.",  
    why3Title: "Client broadcasts",  
    why3Text: "Notify all your clients about promotions, events, or important changes.",  

    ctaTitle: "In development",  
    ctaText: "• Google Calendar synchronization\n• Service payment system",  
    ctaBtn: "Message me on Telegram"
  },

  ru: {
    title: "Telegram Booking Service",
    subtitle: "Единая система для создания и управления Telegram-ботами бронирования услуг.",
    cta: "Заказать демо бесплатно",

    usecasesTitle: "Для кого это?",  
    uc1: "Салоны красоты, барбершопы, спа и массажные центры",  
    uc2: "Клиники, частные врачи, медицинские центры и конные клубы",  
    uc3: "Любой бизнес, где есть услуги, которые можно забронировать",  

    featuresTitle: "Что вы получаете",  
    f1: "Telegram-бот для вашего бизнеса. Один бизнес = один бот!",  
    f2: "Админ-панель для вас и клиентская панель для ваших заказчиков.",  
    f3: "Гибкая система настройки бота под нюансы вашего бизнеса.",  
    f4: "Система уведомлений, напоминаний и учёт бронирований.",  

    whyTitle: "Зачем мне это?",  
    why1Title: "Экономия вашего времени",  
    why1Text: "Бот принимает заявки автоматически, а вы только подтверждаете или отклоняете их.",  
    why2Title: "Напоминания клиентам",  
    why2Text: "Бот напоминает клиентам о предстоящей услуге или бронировании.",  
    why3Title: "Рассылка клиентам",  
    why3Text: "Уведомляйте всех своих клиентов об акциях, событиях или изменениях.",  

    ctaTitle: "В разработке",  
    ctaText: "• Синхронизация с Google Календарем\n• Система оплаты услуг",  
    ctaBtn: "Написать в Telegram"
  },

  uk: {
    title: "Telegram Booking Service",
    subtitle: "Єдина система для створення та керування Telegram-ботами бронювання послуг.",
    cta: "Замовити демо безкоштовно",

    usecasesTitle: "Для кого це?",  
    uc1: "Салони краси, барбершопи, спа та масажні центри",  
    uc2: "Клініки, приватні лікарі, медичні центри та кінні клуби",  
    uc3: "Будь-який бізнес, де є послуги, які можна забронювати",  

    featuresTitle: "Що ви отримуєте",  
    f1: "Telegram-бот для вашого бізнесу. Один бізнес = один бот!",  
    f2: "Адмін-панель для вас і клієнтська панель для ваших замовників.",  
    f3: "Гнучка система налаштування бота під особливості вашого бізнесу.",  
    f4: "Система сповіщень, нагадувань та облік бронювань.",  

    whyTitle: "Навіщо мені це?",  
    why1Title: "Економія вашого часу",  
    why1Text: "Бот автоматично приймає заявки, а ви лише підтверджуєте або відхиляєте їх.",  
    why2Title: "Нагадування клієнтам",  
    why2Text: "Бот нагадує клієнтам про майбутню послугу або бронювання.",  
    why3Title: "Розсилка клієнтам",  
    why3Text: "Повідомляйте клієнтів про акції, події або важливі зміни.",  

    ctaTitle: "У розробці",  
    ctaText: "• Синхронізація з Google Календарем\n• Система оплати послуг",  
    ctaBtn: "Написати в Telegram"
  }
};

function setLang(lang) {
  Object.keys(texts[lang]).forEach(key => {
    const el = document.getElementById(key);
    if (el) el.innerText = texts[lang][key];
  });

  setScreens(lang);
}

function setScreens(lang) {
  for (let i = 1; i <= 3; i++) {
    const mobile = document.getElementById(`screen${i}`);
    const desktop = document.getElementById(`screen${i}-desktop`);
    if (mobile) mobile.src = `screens/${lang}/${i}.PNG`;  
    if (desktop) desktop.src = `screens/${lang}/${i}.PNG`;
  }
  currentScreen = 0;
  updateCarousel();
}

function updateCarousel() {
  const track = document.getElementById("screensTrack");
  if (!track) return;
  track.style.transform = `translateX(-${currentScreen * 100}%)`;
}

function nextScreen() {
  currentScreen = (currentScreen + 1) % totalScreens;
  updateCarousel();
}

function prevScreen() {
  currentScreen = (currentScreen - 1 + totalScreens) % totalScreens;
  updateCarousel();
}

document.addEventListener("DOMContentLoaded", () => setLang("en"));