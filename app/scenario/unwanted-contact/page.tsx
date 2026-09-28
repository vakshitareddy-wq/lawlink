"use client";

import { useState } from "react";
import Link from "next/link";

const options = [
  {
    id: "A",
    text: "Keep responding even after clearly asking the person to stop.",
  },
  {
    id: "B",
    text: "Preserve relevant messages or screenshots, use available safety or reporting tools, and seek support if needed.",
  },
  {
    id: "C",
    text: "Share the person's private information publicly.",
  },
  {
    id: "D",
    text: "Delete every message immediately so there is no record.",
  },
];

export default function UnwantedContactScenario() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const correctAnswer = "B";
  const isCorrect = selectedAnswer === correctAnswer;

  const handleSubmit = () => {
    if (!selectedAnswer) return;

    setSubmitted(true);

    if (selectedAnswer === correctAnswer) {
      const currentXP = Number(localStorage.getItem("lawlink-xp")) || 820;
      localStorage.setItem("lawlink-xp", String(currentXP + 50));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto max-w-3xl px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/learn/womens-safety"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            ← Back to Women&apos;s Safety
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
              🛡️
            </div>

            <div>
              <p className="text-sm font-semibold text-purple-600">
                WOMEN&apos;S SAFETY
              </p>

              <h1 className="text-2xl font-bold text-slate-900">
                Harassment & Unwanted Contact
              </h1>
            </div>
          </div>
        </div>

        {/* Scenario */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 rounded-2xl bg-purple-50 p-5">
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-purple-700">
              Real-life scenario
            </p>

            <p className="leading-7 text-slate-700">
              Someone keeps sending you unwanted messages after you have made
              it clear that you do not want further contact. You are concerned
              about the situation and want to keep a record of what happened.
            </p>

            <p className="mt-4 font-semibold text-slate-900">
              What is a sensible next step?
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {options.map((option) => {
              const isSelected = selectedAnswer === option.id;

              return (
                <button
                  key={option.id}
                  onClick={() => !submitted && setSelectedAnswer(option.id)}
                  disabled={submitted}
                  className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition ${
                    isSelected
                      ? "border-blue-500 bg-blue-50 ring-2 ring-blue-100"
                      : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
                  } ${
                    submitted ? "cursor-default" : "cursor-pointer"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-bold ${
                      isSelected
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {option.id}
                  </span>

                  <span className="pt-1 text-sm leading-6 text-slate-700">
                    {option.text}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Submit */}
          {!submitted && (
            <button
              onClick={handleSubmit}
              disabled={!selectedAnswer}
              className="mt-6 w-full rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Check Answer
            </button>
          )}

          {/* Result */}
          {submitted && (
            <div
              className={`mt-6 rounded-2xl p-5 ${
                isCorrect ? "bg-emerald-50" : "bg-rose-50"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">
                  {isCorrect ? "🎉" : "💡"}
                </div>

                <div>
                  <h2
                    className={`font-bold ${
                      isCorrect ? "text-emerald-800" : "text-rose-800"
                    }`}
                  >
                    {isCorrect ? "Correct!" : "Not quite!"}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {isCorrect
                      ? "Keeping relevant records can help preserve a clear account of what happened. Depending on the situation, available platform reporting tools, trusted support people, or appropriate authorities may also be relevant."
                      : "Consider preserving relevant records and using appropriate safety or reporting options. If the situation feels threatening or unsafe, seeking support can also be important."}
                  </p>

                  {isCorrect && (
                    <p className="mt-3 font-bold text-emerald-700">
                      +50 XP ⭐
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Continue */}
          {submitted && (
            <Link
              href="/learn/womens-safety"
              className="mt-6 block w-full rounded-2xl bg-slate-900 px-5 py-3 text-center font-semibold text-white transition hover:bg-slate-800"
            >
              Back to Women&apos;s Safety
            </Link>
          )}
        </section>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs leading-5 text-slate-400">
          LawLink provides legal awareness and educational information only.
          It is not a substitute for professional legal advice. If someone is
          in immediate danger, contact appropriate local emergency services or
          a trusted person.
        </p>
      </main>
    </div>
  );
}