(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const langBtn = document.getElementById("langBtn");
  const prefersZh = () => {
    const lang = (navigator.language || "").toLowerCase();
    return lang.includes("zh");
  };

  const getLang = () => {
    const stored = localStorage.getItem("gxq_lang");
    if (stored === "en" || stored === "zh") return stored;
    return prefersZh() ? "zh" : "en";
  };

  const setLang = (lang) => {
    localStorage.setItem("gxq_lang", lang);
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";

    const dict = window.I18N && window.I18N[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const text = dict[key];
      if (typeof text === "string") el.textContent = text;
    });

    // Ensure CN font is used when in Chinese for paragraph-heavy areas.
    document.body.classList.toggle("is-zh", lang === "zh");
  };

  const initLang = () => setLang(getLang());

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const next = getLang() === "zh" ? "en" : "zh";
      setLang(next);
    });
  }

  initLang();
})();
