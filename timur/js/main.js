const speakers = [
  ["ДС", "дамир самерханов", "управляющий партнер российского подразделения Sixième Son"],
  ["ЕП", "елена паламарчук", "CEO и co-founder Jekyll&Hyde"],
  ["АК", "антон клейменов", "директор по исследованиям и аналитике, Haleon"],
  ["МУ", "мария уколова", "соуправляющий директор, OMD OM Group"],
  ["АК", "анастасия каслина", "педагог по риторике"],
  ["АЩ", "алина щербинина", "директор по маркетингу, стратегии и трансформации"],
  ["АЧ", "аня кау-тен-чжи", "креативный директор, ПИК"],
  ["ОЛ", "оля лоренц", "партнер, практика consumer, True Search"],
  ["КГ", "катя гусакова", "paid social и programmatic"],
  ["ОК", "олег клепиков", "мультисенсорный маркетинг"]
];

const lessons = [
  ["24 ноя", "11:00", "Вебинар — знакомство", "вебинар zoom", "Алина Щербинина"],
  ["1 дек", "19:00", "Обзор маркетинга: главные составляющие, основные фреймворки", "лекция в записи", "Алина Щербинина"],
  ["5 дек", "11:00", "Созвон с кураторами", "zoom сессия", "Кураторы"],
  ["8 дек", "19:00", "Разработка маркетинговой стратегии: оценка ёмкости рынка, целевая, ROI", "вебинар zoom", "Алина Щербинина"],
  ["10 дек", "19:00", "Сторителлинг. Как готовить презентации и отвечать на вопросы", "вебинар zoom", "Анастасия Каслина"],
  ["12 дек", "11:00", "Созвон с кураторами", "zoom сессия", "Кураторы"],
  ["15 дек", "19:00", "Какие бывают исследования", "запись", "Антон Клейменов"],
  ["17 дек", "19:00", "Созвон с кураторами", "вебинар zoom", "Кураторы"],
  ["19 дек", "11:00", "Какие бывают исследования: практика", "zoom сессия", "Антон Клейменов"],
  ["22 дек", "19:00", "Покупатель. Методология поиска, сегментирования, оценки потенциала", "вебинар zoom", "Настя Нидзий"],
  ["24 дек", "19:00", "Практика: покупатель", "вебинар zoom", "Настя Нидзий"],
  ["26 дек", "11:00", "Созвон с кураторами", "вебинар zoom", "Кураторы"],
  ["12 янв", "19:00", "Продуктовый подход, запуск инноваций в продукте и коммуникации", "вебинар zoom", "Настя Нидзий"],
  ["14 янв", "19:00", "Созвон с кураторами", "zoom сессия", "Кураторы"],
  ["16 янв", "11:00", "Практика. Продуктовый подход", "вебинар zoom", "Настя Нидзий"],
  ["19 янв", "19:00", "Брендинг. Как сделать бренд и как его изменить", "запись", "Лена Паламарчук"],
  ["21 янв", "19:00", "Созвон с кураторами", "zoom сессия", "Кураторы"],
  ["23 янв", "11:00", "Практика. Брендинг", "zoom сессия", "Лена Паламарчук"],
  ["26 янв", "19:00", "Разработка медийной кампании. Каналы, инвестиции, таргетинг", "запись", "Маша Уколова"],
  ["28 янв", "19:00", "Созвон с кураторами", "zoom сессия", "Кураторы"],
  ["30 янв", "11:00", "Практика. Медийная кампания", "zoom сессия", "Маша Уколова"],
  ["2 фев", "19:00", "Paid Social. Соцсети, форматы, Telegram, креативы", "запись", "Катя Гусакова"],
  ["4 фев", "19:00", "Созвон с кураторами", "zoom сессия", "Кураторы"],
  ["6 фев", "11:00", "Programmatic. Возможности, верификация, исследования", "запись", "Катя Гусакова"],
  ["9 фев", "19:00", "Визуал. Роль визуала в рекламной коммуникации", "запись", "Аня Кау-Тен-Чжи"],
  ["11 фев", "19:00", "Звук. Роль звука в рекламной коммуникации", "запись", "Дамир Самерханов"],
  ["13 фев", "11:00", "Как оценивать креатив — фреймворк + практикум", "вебинар zoom", "Алина Щербинина"],
  ["16 фев", "19:00", "Сторителлинг: практика", "zoom сессия", "Анастасия Каслина"],
  ["18 фев", "19:00", "Мультисенсорный маркетинг", "запись", "Олег Клепиков"],
  ["20 фев", "11:00", "Созвон с кураторами", "zoom сессия", "Кураторы"],
  ["27 фев", "11:00", "Созвон с кураторами", "zoom сессия", "Кураторы"],
  ["6 мар", "11:00", "Созвон с кураторами", "zoom сессия", "Кураторы"],
  ["9 мар", "19:00", "Как продавать себя на интервью", "вебинар zoom", "Ольга Лоренц"],
  ["11 мар", "19:00", "Карьерная консультация по карте компетенций", "zoom сессия", "Автор или HR"],
  ["13 мар", "11:00", "Q&A. Как продавать себя на интервью", "zoom сессия", "Ольга Лоренц"],
  ["20 мар", "11:00", "Защита маркетинговой стратегии", "zoom сессия", "Алина Щербинина и кураторы"]
];

const speakersRoot = document.getElementById("speakers");
speakers.forEach(([initials, name, role]) => {
  const el = document.createElement("article");
  el.className = "person";
  el.innerHTML = `<div class="avatar">${initials}</div><div><h3>${name}</h3><p class="role">${role}</p></div>`;
  speakersRoot.appendChild(el);
});

const lessonsRoot = document.getElementById("lessons");
lessons.forEach(([day, time, title, kind, who]) => {
  const el = document.createElement("div");
  el.className = "lesson";
  el.innerHTML = `<time>${day}<br>${time}</time><div><strong>${title}</strong><div class="kind">${kind} · ${who}</div></div><span class="kind">${kind}</span>`;
  lessonsRoot.appendChild(el);
});

document.getElementById("toggle-program").addEventListener("click", (e) => {
  const hidden = lessonsRoot.style.display === "none";
  lessonsRoot.style.display = hidden ? "" : "none";
  e.currentTarget.textContent = hidden ? "свернуть все" : "показать все";
});

document.querySelectorAll(".review .more").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".review");
    card.classList.toggle("is-collapsed");
    btn.textContent = card.classList.contains("is-collapsed") ? "читать далее" : "свернуть";
  });
});

const bindForm = (id) => {
  const form = document.getElementById(id);
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.classList.add("is-done");
  });
};

bindForm("lead-form");
bindForm("ref-form");

const cursor = document.getElementById("cursor");
window.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});
document.querySelectorAll("a, button, input, summary, label").forEach((el) => {
  el.addEventListener("mouseenter", () => cursor.classList.add("is-hover"));
  el.addEventListener("mouseleave", () => cursor.classList.remove("is-hover"));
});

const menu = document.getElementById("menu");
const burger = document.getElementById("knopka-menu");
const closeMenu = () => {
  menu.classList.remove("is-open");
  menu.hidden = true;
  burger.setAttribute("aria-expanded", "false");
};
burger.addEventListener("click", () => {
  const open = !menu.classList.contains("is-open");
  menu.classList.toggle("is-open", open);
  menu.hidden = !open;
  burger.setAttribute("aria-expanded", String(open));
});
menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

const goUp = document.getElementById("go-up");
const progress = document.getElementById("progress");
window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  goUp.classList.toggle("is-on", window.scrollY > 600);
}, { passive: true });
goUp.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const hero = document.getElementById("hero");
const topbar = document.getElementById("topbar");
if (hero && topbar) {
  const heroWatch = new IntersectionObserver(([entry]) => {
    topbar.classList.toggle("is-dark", !entry.isIntersecting);
    progress.style.background = entry.isIntersecting ? "#111" : "#f4f5f3";
  }, { threshold: 0.35 });
  heroWatch.observe(hero);
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href");
    const target = id && document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduced) {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      entry.target.style.animationDelay = `${Math.min(i * 0.05, 0.24)}s`;
      entry.target.classList.add("is-in");
      io.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}
