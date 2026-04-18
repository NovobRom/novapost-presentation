# Nova Post · AI Evangelist Presentation

Презентація для топ-менеджменту Nova Post Europe.
Тема: «Лідерство змін — перетворення Nova Post на найінноваційнішого логістичного гравця світової арени».

**Автор:** Роман Новобранець
**Дедлайн:** 20.04.2026, 12:00
**Стек:** Next.js 15 + Tailwind CSS + TypeScript
**Деплой:** Vercel

---

## Структура

```
src/
├── app/
│   ├── layout.tsx       # Root layout, провайдер мови, fixed UI
│   ├── page.tsx         # Композиція всіх слайдів
│   └── globals.css      # Tailwind + базова типографіка + snap-scroll
├── components/
│   ├── LangSwitch.tsx   # Кнопка UA/EN у правому верхньому куті
│   ├── SlideCounter.tsx # Лічильник 1/12 у правому нижньому
│   └── slides/
│       ├── Slide1.tsx   # Титул
│       ├── Slide2.tsx   # Парадокс AI-революції
│       ├── Slide3.tsx   # 3 патерни переможців
│       └── SlidePlaceholder.tsx  # Заглушка для слайдів у роботі
├── content/
│   └── slides.ts        # Усі тексти двома мовами в одному файлі
└── lib/
    └── lang-context.tsx # Контекст мови з localStorage persistence
```

---

## Локальний запуск

### 1. Встанови залежності

```bash
npm install
```

### 2. Налаштуй змінні оточення

Скопіюй шаблон і встав свій Gemini API key:

```bash
cp .env.local.example .env.local
```

Відкрий `.env.local` і встав ключ:

```
GEMINI_API_KEY=AIzaSy...твій_ключ_тут
```

**Як отримати Gemini API key:**
1. Іди на https://aistudio.google.com/apikey
2. Залогінься через Google акаунт
3. Натисни "Create API key" → "Create API key in new project"
4. Скопіюй ключ (формат `AIzaSy...`, 39 символів)

Безкоштовний тариф: 15 запитів/хв, 1500 запитів/день — достатньо.

### 3. Запусти dev-сервер

```bash
npm run dev
```

Відкрий http://localhost:3000

---

## Деплой на Vercel

### Перший раз — через CLI

```bash
npm install -g vercel
vercel login
vercel
```

Відповіді на питання:
- Set up and deploy? **Y**
- Which scope? — твій акаунт
- Link to existing project? **N**
- Project name? `novapost-presentation` (або як хочеш)
- Directory? **./** (Enter)
- Override settings? **N**

### Додай GEMINI_API_KEY як змінну оточення

```bash
vercel env add GEMINI_API_KEY
```

Встав ключ → вибери "Production, Preview, Development" → Enter.

### Production деплой

```bash
vercel --prod
```

Отримаєш URL виду `https://novapost-presentation.vercel.app`.

---

## Як редагувати контент

Всі тексти — в `src/content/slides.ts`. Структура:

```ts
export const slide1 = {
  ua: { title: "...", subtitle: "..." },
  en: { title: "...", subtitle: "..." },
};
```

Зміни текст → збережи → dev-сервер автоматично перезавантажиться.

---

## Як редагувати дизайн

- **Кольори, шрифти, breakpoints:** `tailwind.config.ts`
- **Глобальні стилі (snap-scroll, базова типографіка):** `src/app/globals.css`
- **Окремий слайд:** `src/components/slides/SlideN.tsx`

---

## Статус слайдів

| # | Слайд | Статус |
|---|-------|--------|
| 1 | Титул | ✅ Готово |
| 2 | Парадокс AI-революції | ✅ Готово |
| 3 | 3 патерни переможців | ✅ Готово |
| 4 | Бачення Nova Post 2030 | ✅ Готово |
| 5 | Три горизонти трансформації | ✅ Готово |
| 6 | AI-Copilot оператора (живий демо) | ✅ Готово |
| 7 | Економіка трансформації | ✅ Готово |
| 8 | Людський фактор | ✅ Готово |
| 9 | Культура Творця — 3 механіки | ✅ Готово |
| 10 | Етика, безпека, контроль якості | ✅ Готово |
| 11 | Перші 90 днів на ролі | ✅ Готово |
| 12 | Хто я | ✅ Готово |

---

## Дизайн-принципи

1. **Мінімалізм.** Багато повітря, мало елементів на слайді
2. **Цифри як акцент.** Великі числа працюють краще за параграфи
3. **Без em-dash** в українському і англійському тексті
4. **Палітра:** Nova Post червоний (#ED1C24) + чорний/білий + акцентний синій для AI
5. **Шрифти:** Inter (sans) + JetBrains Mono (для цифр і метаданих)
6. **Snap-scroll** між слайдами для відчуття слайд-формату
