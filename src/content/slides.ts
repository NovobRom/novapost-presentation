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

// СЛАЙД 4: БАЧЕННЯ NOVA POST 2030
export const slide4 = {
  ua: {
    eyebrow: "Бачення 2030",
    title: "Nova Post Europe: логістика як невидимий сервіс",
    subtitle: "Компанія, де AI прибирає тертя між відправником і отримувачем.",
    blocks: [
      {
        id: "client",
        label: "Клієнт",
        title: "Проактивний сервіс",
        body: "AI передбачає проблему до того, як клієнт її відчуває. Персоналізована швидкість, ціна, спосіб доставки. Логістика стає невидимою.",
      },
      {
        id: "operator",
        label: "Оператор",
        title: "AI-Copilot на кожному робочому місці",
        body: "Правила всіх країн, тарифи, мови. Copilot знає все. Оператор займається клієнтом, не пошуком інформації.",
      },
      {
        id: "manager",
        label: "Менеджер",
        title: "AI-агенти як команда",
        body: "Рутинні процеси: звіти, прогнози, комунікація — виконують AI-агенти. Менеджер фокусується на рішеннях, які вимагають людини.",
      },
      {
        id: "expansion",
        label: "Експансія",
        title: "Нова країна за тижні",
        body: "Автономний депо-формат з вбудованим AI: операційні правила, навчання, комплаєнс налаштовуються автоматично при запуску.",
      },
    ],
  },
  en: {
    eyebrow: "Vision 2030",
    title: "Nova Post Europe: logistics as invisible service",
    subtitle: "A company where AI removes friction between sender and recipient.",
    blocks: [
      {
        id: "client",
        label: "Customer",
        title: "Proactive service",
        body: "AI anticipates the problem before the customer feels it. Personalized speed, price, and delivery method. Logistics becomes invisible.",
      },
      {
        id: "operator",
        label: "Operator",
        title: "AI-Copilot at every workstation",
        body: "Rules for all countries, tariffs, languages. Copilot knows everything. The operator focuses on the customer, not searching for information.",
      },
      {
        id: "manager",
        label: "Manager",
        title: "AI agents as a team",
        body: "Routine processes: reports, forecasts, communications are handled by AI agents. The manager focuses on decisions that require a human.",
      },
      {
        id: "expansion",
        label: "Expansion",
        title: "New country in weeks",
        body: "Autonomous depot format with built-in AI: operational rules, training, and compliance are configured automatically at launch.",
      },
    ],
  },
};

// СЛАЙД 5: ТРИ ГОРИЗОНТИ ТРАНСФОРМАЦІЇ
export const slide5 = {
  ua: {
    eyebrow: "Стратегія",
    title: "Три горизонти трансформації",
    subtitle: "Кожен горизонт має вимірюваний результат. Немає абстрактних цілей.",
    horizons: [
      {
        label: "H1",
        period: "0-12 місяців",
        title: "AI-Copilot на кожному робочому місці",
        body: "No-Code автоматизація: Make, n8n, Zapier. Оператори і менеджери самі автоматизують свою рутину — без черги до IT. Перший потік AI-champions.",
        metric: "100% бек-офісу охоплено AI-Copilot",
        highlight: "Make, n8n, Zapier",
      },
      {
        label: "H2",
        period: "12-24 місяці",
        title: "AI-агенти як співробітники",
        body: "Plug-and-Play через MCP (Model Context Protocol). AI-агенти підключаються до систем Nova Post, виконують завдання автономно. Human-in-the-loop для критичних рішень.",
        metric: "5+ автономних AI-агентів в операційному контурі",
        highlight: "MCP",
      },
      {
        label: "H3",
        period: "24-36 місяців",
        title: "Автономні відділення нових форматів",
        body: "Пілотний запуск в новій країні через автономний депо-формат. Операційні правила, навчання, комплаєнс — AI налаштовує при старті. Масштабування без лінійного зростання штату.",
        metric: "Нова країна за 4 тижні замість 6 місяців",
        highlight: null,
      },
    ],
  },
  en: {
    eyebrow: "Strategy",
    title: "Three Horizons of Transformation",
    subtitle: "Each horizon has a measurable outcome. No abstract goals.",
    horizons: [
      {
        label: "H1",
        period: "0-12 months",
        title: "AI-Copilot at every workstation",
        body: "No-Code automation: Make, n8n, Zapier. Operators and managers automate their own routine without waiting for IT. First wave of AI champions.",
        metric: "100% of back-office covered by AI-Copilot",
        highlight: "Make, n8n, Zapier",
      },
      {
        label: "H2",
        period: "12-24 months",
        title: "AI agents as employees",
        body: "Plug-and-Play via MCP (Model Context Protocol). AI agents connect to Nova Post systems and execute tasks autonomously. Human-in-the-loop for critical decisions.",
        metric: "5+ autonomous AI agents in the operational loop",
        highlight: "MCP",
      },
      {
        label: "H3",
        period: "24-36 months",
        title: "Autonomous branches of new formats",
        body: "Pilot launch in a new country via autonomous depot format. Operational rules, training, compliance — AI configures at startup. Scaling without linear headcount growth.",
        metric: "New country in 4 weeks instead of 6 months",
        highlight: null,
      },
    ],
  },
};

// СЛАЙД 6: ЖИВИЙ DEMO AI-COPILOT
export const slide6 = {
  ua: {
    eyebrow: "Живий демо",
    title: "AI-Copilot оператора",
    description:
      "Оператор запитав. AI відповів. Жодного пошуку по папках, жодного дзвінка супервайзору. Правила 47 країн у відповіді за секунди.",
    badge: "Це не презентація. Це продукт.",
    badgeSub: "Працює прямо зараз через Gemini 2.0 Flash API",
    inputPlaceholder: "Запитайте про правила відправлення...",
    sendLabel: "Відправити",
    poweredBy: "Gemini 2.0 Flash",
    sourceLabel: {
      gemini: "Відповідь від Gemini API",
      fallback: "Приклад відповіді (offline-режим)",
      system: "Системний захист",
    },
    suggestions: [
      "Чи можна відправити літієву батарею в Латвію?",
      "Які документи потрібні для посилки з України до Литви?",
      "Скільки часу займає доставка Вільнюс — Київ?",
      "Чи можна відправити алкоголь в Естонію?",
    ],
    notebookLink: "Внутрішня база знань (NotebookLM)",
    rateError: "Забагато запитів. Зачекайте хвилину.",
    loadingText: "Copilot думає...",
  },
  en: {
    eyebrow: "Live demo",
    title: "Operator AI-Copilot",
    description:
      "The operator asked. The AI answered. No folder search, no call to a supervisor. Rules for 47 countries delivered in seconds.",
    badge: "This is not a presentation. This is a product.",
    badgeSub: "Running right now via Gemini 2.0 Flash API",
    inputPlaceholder: "Ask about shipping rules...",
    sendLabel: "Send",
    poweredBy: "Gemini 2.0 Flash",
    sourceLabel: {
      gemini: "Answer from Gemini API",
      fallback: "Example response (offline mode)",
      system: "System protection",
    },
    suggestions: [
      "Can I ship a lithium battery to Latvia?",
      "What documents are required for a parcel from Ukraine to Lithuania?",
      "How long does delivery take from Vilnius to Kyiv?",
      "Can I send alcohol to Estonia?",
    ],
    notebookLink: "Internal Knowledge Base (NotebookLM)",
    rateError: "Too many requests. Wait a minute.",
    loadingText: "Copilot is thinking...",
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
