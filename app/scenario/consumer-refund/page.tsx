"use client";

import { useState } from "react";
import Link from "next/link";

const options = [
  {
    id: "A",
    text: "Ignore the problem and keep using the product.",
  },
  {
    id: "B",
    text: "Keep the bill and other proof, contact the seller, and ask about the appropriate remedy.",
  },
  {
    id: "C",
    text: "Delete the receipt because it is no longer useful.",
  },
  {
    id: "D",
    text: "Post the seller's private information online.",
  },
];

export default function ConsumerRefundScenario() {
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
            href="/learn/consumer-rights"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            ← Back to Consumer Rights
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
              🛒
            </div>

            <div>
              <p className="text-sm font-semibold text-emerald-600">
                CONSUMER RIGHTS
              </p>

              <h1 className="text-2xl font-bold text-slate-900">
                Refunds & Replacements
              </h1>
            </div>
          </div>
        </div>

        {/* Scenario */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 rounded-2xl bg-amber-50 p-5">
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-amber-700">
              Real-life scenario
            </p>

            <p className="leading-7 text-slate-700">
              You purchase an electronic product online. When it arrives, you
              discover that it does not work properly. You still have your
              invoice and payment details.
            </p>

            <p className="mt-4 font-semibold text-slate-900">
              What would be the most sensible first step?
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
                    submitted
                      ? "cursor-default"
                      : "cursor-pointer"
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
                isCorrect
                  ? "bg-emerald-50"
                  : "bg-rose-50"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">
                  {isCorrect ? "🎉" : "💡"}
                </div>

                <div>
                  <h2
                    className={`font-bold ${
                      isCorrect
                        ? "text-emerald-800"
                        : "text-rose-800"
                    }`}
                  >
                    {isCorrect ? "Correct!" : "Not quite!"}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {isCorrect
                      ? "Keeping your invoice and payment records gives you useful evidence when contacting the seller. The appropriate remedy can depend on the product, seller, and applicable consumer-protection rules."
                      : "A better first step is to keep your proof of purchase and contact the seller through an appropriate channel. The remedy can depend on the product, seller, and applicable consumer-protection rules."}
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
              href="/learn/consumer-rights"
              className="mt-6 block w-full rounded-2xl bg-slate-900 px-5 py-3 text-center font-semibold text-white transition hover:bg-slate-800"
            >
              Back to Consumer Rights
            </Link>
          )}
        </section>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs leading-5 text-slate-400">
          LawLink provides legal awareness and educational information only.
          It is not a substitute for professional legal advice.
        </p>
      </main>
    </div>
  );
}