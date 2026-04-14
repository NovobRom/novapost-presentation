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
    title: "AI всюди. Цінність - рідко.",
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
        body: "Рутинні процеси: звіти, прогнози, комунікація - виконують AI-агенти. Менеджер фокусується на рішеннях, які вимагають людини.",
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
        body: "No-Code автоматизація: Make, n8n, Zapier. Оператори і менеджери самі автоматизують свою рутину - без черги до IT. Перший потік AI-champions.",
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
        body: "Пілотний запуск в новій країні через автономний депо-формат. Операційні правила, навчання, комплаєнс - AI налаштовує при старті. Масштабування без лінійного зростання штату.",
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
        body: "Pilot launch in a new country via autonomous depot format. Operational rules, training, compliance - AI configures at startup. Scaling without linear headcount growth.",
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
      "Скільки часу займає доставка Вільнюс - Київ?",
      "Чи можна відправити алкоголь в Естонію?",
    ],
    notebookLink: "Внутрішня база знань (NotebookLM)",
    rateError: "Забагато запитів. Зачекайте хвилину.",
    loadingText: "Copilot думає...",
    suggestionsLabel: "Або спробуйте швидкі запити:",
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
    suggestionsLabel: "Or try quick prompts:",
  },
};

// СЛАЙД 7: ЕКОНОМІКА ТРАНСФОРМАЦІЇ
export const slide7 = {
  ua: {
    eyebrow: "Економіка",
    title: "Трансформація окупається",
    stats: [
      { value: "5–20%", label: "скорочення логістичних витрат", source: "McKinsey" },
      { value: "+30%", label: "продуктивність field workers", source: "McKinsey" },
      { value: "190%", label: "ROI AI-трансформації", source: "Gartner" },
      { value: "6–18", label: "місяців до окупності", source: "Gartner" },
    ],
    gap: {
      label: "Розрив логістики",
      body: "Логістика відстає: 35% AI adoption проти 51% у рітейлі. Ранній вихід - конкурентна перевага.",
      logistics: "35%",
      retail: "51%",
      logisticsLabel: "Логістика",
      retailLabel: "Рітейл",
    },
    warning: {
      label: "Чесне застереження",
      body: "62% AI-проєктів перевищують бюджет на 45%",
      source: "Gartner, 2024",
      footnote: "Причина: технологія без редизайну процесів. Це вирішуване.",
    },
  },
  en: {
    eyebrow: "Economics",
    title: "Transformation pays off",
    stats: [
      { value: "5–20%", label: "reduction in logistics costs", source: "McKinsey" },
      { value: "+30%", label: "productivity for field workers", source: "McKinsey" },
      { value: "190%", label: "ROI from AI transformation", source: "Gartner" },
      { value: "6–18", label: "months to break even", source: "Gartner" },
    ],
    gap: {
      label: "Logistics gap",
      body: "Logistics lags behind: 35% AI adoption vs 51% in retail. Early movers gain competitive advantage.",
      logistics: "35%",
      retail: "51%",
      logisticsLabel: "Logistics",
      retailLabel: "Retail",
    },
    warning: {
      label: "Honest caveat",
      body: "62% of AI projects exceed budget by 45%",
      source: "Gartner, 2024",
      footnote: "The reason is technology without process redesign. That's solvable.",
    },
  },
};

// СЛАЙД 8: ЛЮДСЬКИЙ ФАКТОР
export const slide8 = {
  ua: {
    eyebrow: "Люди",
    title: "Технологія: 20%. Люди: 80%.",
    subtitle: "Більшість AI-трансформацій провалюється не через технологію.",
    problems: [
      { number: "01", title: "Страх заміни", body: "Працівники бачать AI як загрозу роботі, не як інструмент." },
      { number: "02", title: "Втрата контролю менеджерів", body: "Середній менеджмент опирається: AI позбавляє їх монополії на інформацію." },
      { number: "03", title: "Впровадження зверху донизу", body: "Рішення без залучення виконавців - саботаж гарантований." },
    ],
    solutions: [
      { number: "01", title: "AI звільняє час, не людей", body: "Перший меседж трансформації: автоматизується рутина, не ролі. Люди отримують час для складних завдань." },
      { number: "02", title: "Прозорість метрик", body: "Кожен бачить, що AI робить і чому. Відкриті дашборди, зрозумілі KPI. Немає чорних ящиків." },
      { number: "03", title: "Pilot champions", body: "Перші 30 людей, які освоїли AI, стають амбасадорами. Peer-to-peer навчання ефективніше тренінгів." },
    ],
    problemsLabel: "Чому опираються",
    solutionsLabel: "Як подолати",
  },
  en: {
    eyebrow: "People",
    title: "Technology is 20%. People are 80%.",
    subtitle: "Most AI transformations fail not because of technology.",
    problems: [
      { number: "01", title: "Fear of replacement", body: "Employees see AI as a threat to their jobs, not a tool." },
      { number: "02", title: "Managers losing control", body: "Middle management resists: AI takes away their information monopoly." },
      { number: "03", title: "Top-down implementation", body: "Decisions without frontline involvement guarantee sabotage." },
    ],
    solutions: [
      { number: "01", title: "AI frees time, not people", body: "The first transformation message: routine gets automated, not roles. People get time for complex work." },
      { number: "02", title: "Metrics transparency", body: "Everyone sees what AI does and why. Open dashboards, clear KPIs. No black boxes." },
      { number: "03", title: "Pilot champions", body: "The first 30 people who master AI become ambassadors. Peer-to-peer learning outperforms training sessions." },
    ],
    problemsLabel: "Why people resist",
    solutionsLabel: "How to overcome",
  },
};

// СЛАЙД 9: КУЛЬТУРА ТВОРЦЯ
export const slide9 = {
  ua: {
    eyebrow: "Культура",
    title: "Культура Творця - 3 механіки",
    subtitle: "Не можна «впровадити» AI-культуру. Її можна лише виростити через системні механіки.",
    mechanisms: [
      {
        number: "01",
        title: "Фільтр найму «AI First»",
        body: "Перед відкриттям вакансії обов'язкове питання: чи може AI замінити цю функцію повністю або частково? Якщо так - переосмислюємо роль, не просто наймаємо.",
        tag: "Hiring",
        accent: "pop",
      },
      {
        number: "02",
        title: "AI-Майстерня для 100% бек-офісу",
        body: "Обов'язкова багаторівнева програма для всіх без винятку. Рівень 1: промпт-інжиніринг. Рівень 2: No-Code автоматизація. Рівень 3: агентні системи. Кожен знаходить, що автоматизувати сам.",
        tag: "Learning",
        accent: "electric",
      },
      {
        number: "03",
        title: "Менеджер як власник процесу",
        body: "Кожен менеджер щокварталу ідентифікує мінімум 3 рутини для автоматизації. Це KPI, не побажання. Результати - на борд-рев'ю.",
        tag: "Ownership",
        accent: "np-red",
      },
    ],
  },
  en: {
    eyebrow: "Culture",
    title: "Creator Culture - 3 mechanisms",
    subtitle: "You can't 'implement' AI culture. You can only grow it through systemic mechanisms.",
    mechanisms: [
      {
        number: "01",
        title: "AI First hiring filter",
        body: "Before opening any position, a mandatory question: can AI replace this function fully or partially? If yes - rethink the role, don't just hire.",
        tag: "Hiring",
        accent: "pop",
      },
      {
        number: "02",
        title: "AI Workshop for 100% of back-office",
        body: "Mandatory multi-level program for everyone without exception. Level 1: prompt engineering. Level 2: No-Code automation. Level 3: agentic systems. Everyone finds what to automate themselves.",
        tag: "Learning",
        accent: "electric",
      },
      {
        number: "03",
        title: "Manager as process owner",
        body: "Every manager identifies at least 3 routines for automation each quarter. This is a KPI, not a suggestion. Results go to the board review.",
        tag: "Ownership",
        accent: "np-red",
      },
    ],
  },
};

// СЛАЙД 10: ЕТИКА, БЕЗПЕКА, КОНТРОЛЬ
export const slide10 = {
  ua: {
    eyebrow: "Контроль",
    title: "AI без контролю - ризик, не перевага",
    subtitle: "Довіра будується через прозорість і процеси, а не через обіцянки.",
    checks: [
      {
        id: "human-loop",
        title: "Human-in-the-loop",
        body: "Критичні рішення (маршрутизація, аномалії, комплаєнс) проходять через людину. 54% зрілих AI-компаній це вже зробили.",
        source: "McKinsey",
        status: "critical",
      },
      {
        id: "iso",
        title: "ISO 27001 як baseline",
        body: "Мінімальний стандарт інформаційної безпеки. Без нього жоден AI не виходить у продакшн.",
        source: "ISO/IEC",
        status: "required",
      },
      {
        id: "mcp",
        title: "MCP як стандарт interoperability",
        body: "Model Context Protocol - відкритий стандарт для підключення AI-агентів до систем. Уникаємо vendor lock-in, забезпечуємо аудитний слід.",
        source: "Anthropic / Open",
        status: "standard",
      },
      {
        id: "bots",
        title: "Ідентифікація external bots",
        body: "Кожен AI-агент, що взаємодіє з клієнтами, ідентифікований як AI. Регуляторна вимога EU AI Act.",
        source: "EU AI Act",
        status: "required",
      },
      {
        id: "bias",
        title: "Регулярний bias audit",
        body: "Щоквартальна перевірка моделей на упередженість. Особливо критично для рішень, що впливають на персонал.",
        source: "Best practice",
        status: "standard",
      },
      {
        id: "changelog",
        title: "AI Changelog та аудит",
        body: "Кожна зміна в AI-системах фіксується у публічному changelog. Quarterly external audit AI-моделей на упередженість.",
        source: "Best practice",
        status: "standard",
      },
    ],
    statusLabels: { critical: "Критично", required: "Обов'язково", standard: "Стандарт" },
  },
  en: {
    eyebrow: "Control",
    title: "AI without control is a risk, not an advantage",
    subtitle: "Trust is built through transparency and processes, not through promises.",
    checks: [
      {
        id: "human-loop",
        title: "Human-in-the-loop",
        body: "Critical decisions (routing, anomalies, compliance) go through a human. 54% of mature AI companies already do this.",
        source: "McKinsey",
        status: "critical",
      },
      {
        id: "iso",
        title: "ISO 27001 as baseline",
        body: "Minimum information security standard. Without it, no AI goes to production.",
        source: "ISO/IEC",
        status: "required",
      },
      {
        id: "mcp",
        title: "MCP as interoperability standard",
        body: "Model Context Protocol - open standard for connecting AI agents to systems. Avoids vendor lock-in, ensures audit trail.",
        source: "Anthropic / Open",
        status: "standard",
      },
      {
        id: "bots",
        title: "External bot identification",
        body: "Every AI agent interacting with customers is identified as AI. Regulatory requirement under EU AI Act.",
        source: "EU AI Act",
        status: "required",
      },
      {
        id: "bias",
        title: "Regular bias audit",
        body: "Quarterly review of models for bias. Especially critical for decisions affecting personnel.",
        source: "Best practice",
        status: "standard",
      },
      {
        id: "changelog",
        title: "AI Changelog & audit",
        body: "Every change in AI systems is recorded in a public changelog. Quarterly external audit of AI models for bias.",
        source: "Best practice",
        status: "standard",
      },
    ],
    statusLabels: { critical: "Critical", required: "Required", standard: "Standard" },
  },
};

// СЛАЙД 11: ПЕРШІ 90 ДНІВ
export const slide11 = {
  ua: {
    eyebrow: "90 днів",
    title: "Перші 90 днів на ролі",
    subtitle: "Конкретний план з вимірюваними результатами кожного місяця.",
    phases: [
      {
        period: "Тиждень 1-2",
        label: "Діагностика",
        items: [
          "AI-аудит поточного стану: інструменти, процеси, втрати",
          "50 інтерв'ю: оператори, менеджери, IT, керівництво",
          "Мапа AI-ініціатив: що є, що провалилось, що заморожено",
        ],
        outcome: "Повна картина «де ми зараз»",
        accent: "pop",
      },
      {
        period: "Місяць 1",
        label: "Перші результати",
        items: [
          "3 quick wins: автоматизація з видимим ефектом за 2-3 тижні",
          "Запуск пілоту AI-Copilot для операторів (10-15 осіб)",
          "Перша публічна демонстрація результатів команді",
        ],
        outcome: "Довіра через дію, не через слова",
        accent: "electric",
      },
      {
        period: "Місяць 2",
        label: "Масштабування",
        items: [
          "AI-Майстерня v1: 30 людей, рівні 1 і 2",
          "Відбір та навчання 10 pilot champions",
          "Інтеграція AI-метрик у щотижневі звіти",
        ],
        outcome: "Перша хвиля AI-амбасадорів",
        accent: "np-red",
      },
      {
        period: "Місяць 3",
        label: "Стратегія H2-H3",
        items: [
          "Дорожня карта H2-H3 з бюджетом і KPI",
          "Борд-презентація: результати + план",
          "Публічний звіт: що зроблено, що далі",
        ],
        outcome: "Затверджена стратегія + бюджет",
        accent: "ink",
      },
    ],
  },
  en: {
    eyebrow: "90 days",
    title: "First 90 days in the role",
    subtitle: "A concrete plan with measurable results each month.",
    phases: [
      {
        period: "Week 1-2",
        label: "Diagnosis",
        items: [
          "AI audit of current state: tools, processes, losses",
          "50 interviews: operators, managers, IT, leadership",
          "AI initiatives map: what exists, what failed, what is frozen",
        ],
        outcome: "Full picture of 'where we are now'",
        accent: "pop",
      },
      {
        period: "Month 1",
        label: "First results",
        items: [
          "3 quick wins: automation with visible effect in 2-3 weeks",
          "Launch AI-Copilot pilot for operators (10-15 people)",
          "First public demonstration of results to the team",
        ],
        outcome: "Trust through action, not words",
        accent: "electric",
      },
      {
        period: "Month 2",
        label: "Scaling",
        items: [
          "AI Workshop v1: 30 people, levels 1 and 2",
          "Selection and training of 10 pilot champions",
          "AI metrics integrated into weekly reports",
        ],
        outcome: "First wave of AI ambassadors",
        accent: "np-red",
      },
      {
        period: "Month 3",
        label: "H2-H3 Strategy",
        items: [
          "H2-H3 roadmap with budget and KPIs",
          "Board presentation: results + plan",
          "Public report: what was done, what comes next",
        ],
        outcome: "Approved strategy + budget",
        accent: "ink",
      },
    ],
  },
};

// СЛАЙД 12: ХТО Я
export const slide12 = {
  ua: {
    eyebrow: "Про мене",
    title: "Роман Новобранець",
    role: "Head of Delivery · AI Євангеліст",
    company: "Nova Post Europe",
    bio: "10 років Nova Post: від оператора відділення до Head of Delivery. Запустив Baltic регіон з нуля - Литва, Латвія, Естонія. Будую AI-продукти, що вирішують реальні операційні проблеми.",
    journey: [
      { year: "2018", event: "Head of Post Office, Рубіжне - перша управлінська роль" },
      { year: "2021", event: "Territorial Manager, Луганський регіон - 23 відділення" },
      { year: "2023", event: "Operations Manager, Baltic Region (LT, LV, EE)" },
      { year: "2025", event: "Head of Delivery, Nova Post Lithuania" },
    ],
    projects: {
      label: "Реалізовані AI-проєкти",
      items: [
        { title: "Client Analytics", url: "client-analytics-new.vercel.app" },
        { title: "Logistics Benchmark", url: "logistics-benchmark.vercel.app" },
        { title: "Delivery Dashboard", url: "new-delivery-dashboard.vercel.app" },
        { title: "uBudget", url: "ubudget.app" },
        { title: "AI Knowledge Base", url: null, note: "NotebookLM · internal" },
      ],
    },
    linkedin: "linkedin.com/in/romannovobranets",
    linkedinLabel: "LinkedIn",
    quote: "Логістика невидима, коли вона ідеальна. Мета - зробити її такою.",
  },
  en: {
    eyebrow: "About me",
    title: "Roman Novobranets",
    role: "Head of Delivery · AI Evangelist",
    company: "Nova Post Europe",
    bio: "10 years at Nova Post: from branch operator to Head of Delivery. Launched the Baltic region from scratch - Lithuania, Latvia, Estonia. Building AI products that solve real operational problems.",
    journey: [
      { year: "2018", event: "Head of Post Office, Rubezhnoye - first management role" },
      { year: "2021", event: "Territorial Manager, Luhansk Region - 23 branches" },
      { year: "2023", event: "Operations Manager, Baltic Region (LT, LV, EE)" },
      { year: "2025", event: "Head of Delivery, Nova Post Lithuania" },
    ],
    projects: {
      label: "Delivered AI projects",
      items: [
        { title: "Client Analytics", url: "client-analytics-new.vercel.app" },
        { title: "Logistics Benchmark", url: "logistics-benchmark.vercel.app" },
        { title: "Delivery Dashboard", url: "new-delivery-dashboard.vercel.app" },
        { title: "uBudget", url: "ubudget.app" },
        { title: "AI Knowledge Base", url: null, note: "NotebookLM · internal" },
      ],
    },
    linkedin: "linkedin.com/in/romannovobranets",
    linkedinLabel: "LinkedIn",
    quote: "Logistics is invisible when it's perfect. The goal is to make it so.",
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
        body: "55% переможців vs 21% решти. AI без редизайну workflows - це косметика.",
      },
      {
        number: "03",
        title: "Лідерство залучене активно",
        body: "AI не делегується IT-департаменту. Власник трансформації - топ-менеджмент.",
      },
    ],
    proof: {
      title: "Доказ з логістики: InPost",
      body: "Алгоритм маршрутизації без редизайну процесів дав +12% ефективності. Той самий алгоритм після редизайну операційних процесів - +34%.",
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
      body: "Routing algorithm without process redesign delivered +12% efficiency. The same algorithm after operational process redesign - +34%.",
      source: "InPost Annual Report 2025",
    },
  },
};
