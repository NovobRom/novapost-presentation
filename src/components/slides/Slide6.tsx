"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { useLang } from "@/lib/lang-context";
import { slide6 } from "@/content/slides";
import { Send, Zap, ExternalLink, Bot, User } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  text: string;
  source?: "gemini" | "fallback" | "system";
};

// Pre-seeded message so the chat isn't empty on arrival
const SEED_UA: Message[] = [
  { role: "user", text: "Чи можна відправити літієву батарею в Латвію?" },
  {
    role: "assistant",
    text: "Так, можна з обмеженнями. Вбудовані в пристрій: дозволено без додаткових вимог. Окремі батареї: максимум 2 штуки, до 100 Вт⋅год кожна. Упаковка: захист від КЗ. Маркування UN 3481 обов'язкове. Декларування: CN23.",
    source: "gemini",
  },
];

const SEED_EN: Message[] = [
  { role: "user", text: "Can I ship a lithium battery to Latvia?" },
  {
    role: "assistant",
    text: "Yes, with restrictions. Built-in (device-installed): permitted without extra requirements. Standalone batteries: max 2 units, up to 100 Wh each. Packaging: short-circuit protection required. UN 3481 marking mandatory. Declaration: CN23.",
    source: "gemini",
  },
];

export function Slide6() {
  const { lang } = useLang();
  const s = slide6[lang];

  const [messages, setMessages] = useState<Message[]>(
    lang === "ua" ? SEED_UA : SEED_EN
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync seed when lang changes (only if chat is in initial state)
  useEffect(() => {
    setMessages((prev) => {
      const isInitial =
        prev.length === SEED_UA.length &&
        (prev[0]?.text === SEED_UA[0].text || prev[0]?.text === SEED_EN[0].text);
      return isInitial ? (lang === "ua" ? SEED_UA : SEED_EN) : prev;
    });
  }, [lang]);

  useEffect(() => {
    const container = messagesEndRef.current?.parentElement;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, loading]);

  async function send(query: string) {
    if (!query.trim() || loading) return;
    setLoading(true);
    const userMsg: Message = { role: "user", text: query.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const res = await fetch("/api/copilot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: query.trim() }),
      });

      const data = await res.json();

      if (res.status === 429) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", text: s.rateError, source: "system" },
        ]);
        return;
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.answer ?? "Не вдалося отримати відповідь.",
          source: data.source ?? "fallback",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Помилка підключення. Перевірте мережу.",
          source: "fallback",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    send(input);
  }

  function handleSuggestion(q: string) {
    inputRef.current?.focus();
    send(q);
  }

  return (
    <section
      id="slide-6"
      className="slide bg-ink text-paper noise-overlay relative"
    >
      {/* Decorative electric blob */}
      <div className="deco-blob absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10 blur-2xl bg-electric" />
      <div className="deco-blob absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-10 blur-2xl bg-pop" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-start">
        {/* Left: editorial description */}
        <div className="stagger-1 flex flex-col gap-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="w-12 h-px bg-electric/60" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/50">
              {s.eyebrow}
            </span>
          </div>

          {/* Title */}
          <h2 className="font-display text-display-lg leading-none">
            AI-
            <em className="serif-italic text-electric">Copilot</em>
            <br />
            {lang === "ua" ? "оператора" : "for operators"}
          </h2>

          {/* Description */}
          <p className="text-base text-paper/60 leading-relaxed font-light max-w-sm">
            {s.description}
          </p>

          {/* Badge: "Це продукт, не презентація" */}
          <div className="inline-flex flex-col gap-1 px-4 py-3 rounded-xl border border-electric/30 bg-electric/5 max-w-xs">
            <span className="font-mono text-xs text-electric font-medium">
              {s.badge}
            </span>
            <span className="font-mono text-[10px] text-paper/40 uppercase tracking-wider">
              {s.badgeSub}
            </span>
          </div>

          {/* NotebookLM link */}
          <a
            href="https://notebooklm.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] font-mono text-paper/40 hover:text-electric transition-colors uppercase tracking-widest group"
          >
            <ExternalLink size={11} />
            {s.notebookLink}
          </a>
        </div>

        {/* Right: Chat UI */}
        <div className="flex flex-col gap-3 stagger-2">
          {/* Chat window */}
          <div className="relative rounded-2xl border border-paper/10 bg-paper/5 backdrop-blur-sm overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-paper/10 bg-paper/5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-electric animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-paper/50">
                  Nova Post AI Copilot
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap size={10} className="text-electric" />
                <span className="font-mono text-[10px] text-electric/70">
                  {s.poweredBy}
                </span>
              </div>
            </div>

            {/* Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-3 no-scrollbar">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-electric/20 flex items-center justify-center mt-0.5">
                      <Bot size={12} className="text-electric" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-paper/10 text-paper rounded-tr-sm"
                        : "bg-electric/10 text-paper/90 rounded-tl-sm"
                    }`}
                  >
                    {msg.text}
                    {msg.role === "assistant" && msg.source && (
                      <div className="mt-1.5 font-mono text-[9px] text-paper/30 uppercase tracking-wider">
                        {s.sourceLabel[msg.source]}
                      </div>
                    )}
                  </div>
                  {msg.role === "user" && (
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-paper/10 flex items-center justify-center mt-0.5">
                      <User size={12} className="text-paper/60" />
                    </div>
                  )}
                </div>
              ))}

              {/* Loading indicator */}
              {loading && (
                <div className="flex gap-2.5 justify-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-electric/20 flex items-center justify-center">
                    <Bot size={12} className="text-electric" />
                  </div>
                  <div className="px-3.5 py-3 rounded-xl bg-electric/10 rounded-tl-sm">
                    <div className="flex gap-1 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric/60 animate-bounce [animation-delay:0ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-electric/60 animate-bounce [animation-delay:150ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-electric/60 animate-bounce [animation-delay:300ms]" />
                      <span className="ml-2 font-mono text-[10px] text-paper/40">
                        {s.loadingText}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex gap-2 px-4 py-3 border-t border-paper/10 bg-paper/5"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={s.inputPlaceholder}
                disabled={loading}
                maxLength={500}
                className="flex-1 bg-transparent text-paper text-sm placeholder:text-paper/25 outline-none font-sans disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex-shrink-0 w-8 h-8 rounded-lg bg-electric/80 hover:bg-electric disabled:opacity-30 flex items-center justify-center transition-all"
                aria-label={s.sendLabel}
              >
                <Send size={13} className="text-paper" />
              </button>
            </form>
          </div>

          {/* Suggested questions */}
          <div className="font-mono text-[10px] uppercase tracking-widest text-paper/40 mb-1">
            {s.suggestionsLabel}
          </div>
          <div className="flex flex-wrap gap-2">
            {s.suggestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSuggestion(q)}
                disabled={loading}
                className="px-3 py-1.5 rounded-full border border-paper/15 bg-paper/5 text-paper/60 hover:text-paper hover:border-electric/50 hover:bg-electric/10 transition-all text-[11px] font-sans disabled:opacity-40 text-left"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-paper/40 uppercase tracking-widest">
        № 06 / 12
      </div>
    </section>
  );
}
