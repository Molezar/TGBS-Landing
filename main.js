let currentScreen = 0;
const totalScreens = 3;

const texts = {
  en: {
    title: "Telegram Booking Service",
    subtitle: "A unified platform for creating and managing Telegram bots for service bookings.",
    cta: "Contact",

    usecasesTitle: "Who is this for?",
    uc1: "Beauty salons, barbershops, spas and massage centers",
    uc2: "Clinics, private doctors, medical centers and horse riding clubs",
    uc3: "Any business offering services that can be booked",

    ctaTitle: "In development",
    ctaText: "• Google Calendar synchronization\n• Service payment system",
    ctaBtn: "Message me on Telegram"
  },

  ru: {
    title: "Telegram Booking Service",
    subtitle: "Единая система для создания и управления Telegram-ботами бронирования услуг.",
    cta: "Связаться",

    usecasesTitle: "Для кого это?",
    uc1: "Салоны красоты, барбершопы, спа и массажные центры",
    uc2: "Клиники, частные врачи, медицинские центры и конные клубы",
    uc3: "Любой бизнес, где есть услуги, которые можно забронировать",

    ctaTitle: "В разработке",
    ctaText: "• Синхронизация с Google Календарем\n• Система оплаты услуг",
    ctaBtn: "Написать в Telegram"
  },

  uk: {
    title: "Telegram Booking Service",
    subtitle: "Єдина система для створення та керування Telegram-ботами бронювання послуг.",
    cta: "Звʼязатися",

    usecasesTitle: "Для кого це?",
    uc1: "Салони краси, барбершопи, спа та масажні центри",
    uc2: "Клініки, приватні лікарі, медичні центри та кінні клуби",
    uc3: "Будь-який бізнес, де є послуги, які можна забронювати",

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