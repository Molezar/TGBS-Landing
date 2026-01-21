const texts = {
  ru: {
    title: "Платформа управления Telegram-ботами",
    subtitle: "Создавайте, запускайте и масштабируйте ботов без боли и хаоса.",
    cta: "Связаться"
  },
  uk: {
    title: "Платформа керування Telegram-ботами",
    subtitle: "Створюйте, запускайте та масштабуйте ботів без хаосу.",
    cta: "Звʼязатися"
  },
  en: {
    title: "Telegram Bot Management Platform",
    subtitle: "Build, launch and scale Telegram bots without pain.",
    cta: "Contact"
  }
};

function setLang(lang) {
  document.getElementById("title").innerText = texts[lang].title;
  document.getElementById("subtitle").innerText = texts[lang].subtitle;
  document.getElementById("cta").innerText = texts[lang].cta;
}

// default language
setLang("en");