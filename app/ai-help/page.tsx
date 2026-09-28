"use client";

import { useState } from "react";
import Link from "next/link";

const suggestedQuestions = [
  "I got scammed through UPI. What should I do?",
  "What are my basic consumer rights?",
  "Someone keeps sending me unwanted messages. What can I do?",
  "What documents should I keep for driving?",
];

export default function AIHelpPage() {
  const [message, setMessage] = useState("");

  const handleSuggestion = (question: string) => {
    setMessage(question);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-slate-200 bg-white lg:block">
        <div className="border-b border-slate-200 p-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl text-white">
              ⚖️
            </div>

            <span className="text-xl font-bold text-slate-900">
              LawLink
            </span>
          </Link>
        </div>

        <nav className="space-y-2 p-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 hover:bg-slate-100"
          >
            🏠 Home
          </Link>

          <Link
            href="/learn"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 hover:bg-slate-100"
          >
            📚 Learn
          </Link>

          <Link
            href="/ai-help"
            className="flex items-center gap-3 rounded-xl bg-blue-50 px-4 py-3 font-semibold text-blue-700"
          >
            🤖 AI Help
          </Link>

          <Link
            href="#"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 hover:bg-slate-100"
          >
            🔗 Resources
          </Link>

          <Link
            href="#"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 hover:bg-slate-100"
          >
            🏆 Badges
          </Link>

          <Link
            href="#"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 hover:bg-slate-100"
          >
            👤 Profile
          </Link>
        </nav>

        <div className="absolute bottom-6 px-6 text-xs leading-5 text-slate-500">
          LawLink provides legal awareness only and is not a substitute for
          professional legal advice.
        </div>
      </aside>

      {/* Main content */}
      <main className="lg:ml-64">
        {/* Header */}
        <header className="border-b border-slate-200 bg-white px-6 py-5">
          <p className="text-sm font-medium text-blue-600">
            LawLink Assistant
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900">
            Ask about your rights
          </h1>
        </header>

        <div className="mx-auto max-w-5xl px-6 py-10">
          {/* Intro */}
          <section className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-3xl">
                🤖
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Meet the LawLink Assistant
                </h2>

                <p className="mt-2 max-w-2xl text-blue-100">
                  Get simple legal-awareness information and practical next
                  steps in everyday situations.
                </p>
              </div>
            </div>
          </section>

          {/* Chat area */}
          <section className="mt-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
            {/* Assistant message */}
            <div className="border-b border-slate-200 p-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                  🤖
                </div>

                <div className="max-w-2xl">
                  <p className="font-semibold text-slate-900">
                    LawLink Assistant
                  </p>

                  <p className="mt-1 leading-7 text-slate-600">
                    Hi! I can help you understand everyday legal situations.
                    Tell me what happened, and I&apos;ll explain possible next
                    steps in simple language.
                  </p>
                </div>
              </div>
            </div>

            {/* Suggestions */}
            <div className="p-6">
              <p className="mb-3 text-sm font-semibold text-slate-700">
                Try asking:
              </p>

              <div className="grid gap-3 md:grid-cols-2">
                {suggestedQuestions.map((question) => (
                  <button
                    key={question}
                    onClick={() => handleSuggestion(question)}
                    className="rounded-2xl border border-slate-200 p-4 text-left text-sm leading-6 text-slate-600 transition hover:border-blue-300 hover:bg-blue-50"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="border-t border-slate-200 p-6">
              <div className="flex flex-col gap-3 md:flex-row">
                <input
                  type="text"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Describe your situation..."
                  className="flex-1 rounded-2xl border border-slate-300 px-5 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <button
                  disabled={!message.trim()}
                  className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  Ask Assistant →
                </button>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-400">
                LawLink provides legal-awareness information, not professional
                legal advice. For urgent or serious matters, consider
                contacting an appropriate qualified professional or official
                authority.
              </p>
            </div>
          </section>

          {/* How it works */}
          <section className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-2xl">💬</div>
              <h3 className="mt-3 font-bold text-slate-900">
                Ask naturally
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Describe your situation in everyday language.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-2xl">📚</div>
              <h3 className="mt-3 font-bold text-slate-900">
                Learn the basics
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Get simplified legal-awareness information.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-2xl">🧭</div>
              <h3 className="mt-3 font-bold text-slate-900">
                Find next steps
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Understand possible actions and official resources.
              </p>
            </div>
          </section>

          {/* Disclaimer */}
          <p className="mt-8 text-center text-xs leading-5 text-slate-400">
            LawLink is an educational legal-awareness platform. AI-generated
            information may be incomplete or inaccurate and should not be
            treated as professional legal advice.
          </p>
        </div>
      </main>
    </div>
  );
}