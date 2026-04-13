// Контент презентації. Усі тексти в одному файлі для зручного редагування.
// Структура: slides[номер_слайду][мова]

export type Lang = "ua" | "en";

export const ui = {
  ua: {
    langSwitch: "EN",
    slideCounter: (cur: number, total: number) => `${cur} / ${total}`,
    scrollHint: "Прокрутіть вниз",
    role: "AI Євангеліст",
    company: "Nova Post Europe",
    author: "Роман Новобранець",
    date: "Квітень 2026",
  },
  en: {
    langSwitch: "UA",
    slideCounter: (cur: number, total: number) => `${cur} / ${total}`,
    scrollHint: "Scroll down",
    role: "AI Evangelist",
    company: "Nova Post Europe",
    author: "Roman Novobranets",
    date: "April 2026",
  },
};

// СЛАЙД 1: ТИТУЛ
export const slide1 = {
  ua: {
    eyebrow: "Тестове завдання · AI Євангеліст",
    title: "Лідерство змін",
    subtitle: "Перетворення Nova Post на найінноваційнішого логістичного гравця світової арени",
    bigStat: "5%",
    bigStatLabel: "компаній отримують реальний P&L ефект від AI",
    bigStatSource: "McKinsey, State of AI 2025",
  },
  en: {
    eyebrow: "Assignment · AI Evangelist",
    title: "Change Leadership",
    subtitle: "Transforming Nova Post into the world's most innovative logistics player",
    bigStat: "5%",
    bigStatLabel: "of companies achieve real P&L impact from AI",
    bigStatSource: "McKinsey, State of AI 2025",
  },
};

// СЛАЙД 2: ПАРАДОКС AI-РЕВОЛЮЦІЇ
export const slide2 = {
  ua: {
    eyebrow: "Парадокс",
    title: "AI всюди. Цінність — рідко.",
    leadStat: { value: "88%", label: "компаній використовують AI хоча б в одній функції" },
    contrastStat: { value: "5%", label: "отримують реальний P&L ефект (>5% EBIT)" },
    failureStat: { value: "88%", label: "бізнес-трансформацій не досягають початкових цілей (Bain, 2024)" },
    redesignStat: { value: "21%", label: "організацій реально перепроєктували процеси під AI" },
    conclusion: "Проблема не в технологіях. Проблема в підході.",
  },
  en: {
    eyebrow: "The paradox",
    title: "AI is everywhere. Value is rare.",
    leadStat: { value: "88%", label: "of companies use AI in at least one function" },
    contrastStat: { value: "5%", label: "achieve real P&L impact (>5% EBIT)" },
    failureStat: { value: "88%", label: "of business transformations miss their original goals (Bain, 2024)" },
    redesignStat: { value: "21%", label: "of organizations actually redesigned workflows for AI" },
    conclusion: "The problem isn't technology. The problem is approach.",
  },
};

// СЛАЙД 3: ЩО ВІДРІЗНЯЄ ПЕРЕМОЖЦІВ
export const slide3 = {
  ua: {
    eyebrow: "Що працює",
    title: "Три патерни AI-лідерів",
    subtitle: "McKinsey проаналізував 200+ AI-трансформацій. Переможці роблять це інакше:",
    patterns: [
      {
        number: "01",
        title: "Цілять у трансформацію, не в efficiency",
        body: "В 3.6 разів частіше за інших ставлять за мету фундаментальну зміну, а не просто скорочення витрат.",
      },
      {
        number: "02",
        title: "Перепроєктовують процеси",
        body: "55% переможців vs 21% решти. AI без редизайну workflows — це косметика.",
      },
      {
        number: "03",
        title: "Лідерство залучене активно",
        body: "AI не делегується IT-департаменту. Власник трансформації — топ-менеджмент.",
      },
    ],
    proof: {
      title: "Доказ з логістики: InPost",
      body: "Алгоритм маршрутизації без редизайну процесів дав +12% ефективності. Той самий алгоритм після редизайну операційних процесів — +34%.",
      source: "InPost Annual Report 2025",
    },
  },
  en: {
    eyebrow: "What works",
    title: "Three patterns of AI leaders",
    subtitle: "McKinsey analyzed 200+ AI transformations. Winners do it differently:",
    patterns: [
      {
        number: "01",
        title: "Target transformation, not efficiency",
        body: "3.6× more likely than others to aim for fundamental change rather than just cost reduction.",
      },
      {
        number: "02",
        title: "Redesign workflows",
        body: "55% of winners vs 21% of the rest. AI without workflow redesign is cosmetic.",
      },
      {
        number: "03",
        title: "Leadership actively engaged",
        body: "AI isn't delegated to IT. Transformation owner is top management.",
      },
    ],
    proof: {
      title: "Proof from logistics: InPost",
      body: "Routing algorithm without process redesign delivered +12% efficiency. The same algorithm after operational process redesign — +34%.",
      source: "InPost Annual Report 2025",
    },
  },
};
