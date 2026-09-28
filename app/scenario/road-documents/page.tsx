"use client";

import { useState } from "react";
import Link from "next/link";

const options = [
  {
    id: "A",
    text: "Ignore the request and continue driving without addressing the issue.",
  },
  {
    id: "B",
    text: "Keep the legally required documents available and follow the appropriate verification process.",
  },
  {
    id: "C",
    text: "Post the officer's personal information online.",
  },
  {
    id: "D",
    text: "Give your documents to a stranger who offers to handle the matter for you.",
  },
];

export default function RoadDocumentsScenario() {
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
            href="/learn/road-laws"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            ← Back to Road Laws
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-2xl">
              🚗
            </div>

            <div>
              <p className="text-sm font-semibold text-orange-600">
                ROAD LAWS
              </p>

              <h1 className="text-2xl font-bold text-slate-900">
                Documents & Vehicle Rules
              </h1>
            </div>
          </div>
        </div>

        {/* Scenario */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 rounded-2xl bg-orange-50 p-5">
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-orange-700">
              Real-life scenario
            </p>

            <p className="leading-7 text-slate-700">
              You are stopped during a traffic check. The officer asks you to
              provide the documents required for the vehicle and driver
              verification. You have the required documents available.
            </p>

            <p className="mt-4 font-semibold text-slate-900">
              What is the most appropriate response?
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
                      ? "Keeping the documents required by the applicable rules available and following the proper verification process is the appropriate approach. The exact documents and procedures can vary by jurisdiction and situation."
                      : "The safer approach is to keep the documents required by the applicable rules available and follow the proper verification process. Requirements can vary by jurisdiction and situation."}
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
              href="/learn/road-laws"
              className="mt-6 block w-full rounded-2xl bg-slate-900 px-5 py-3 text-center font-semibold text-white transition hover:bg-slate-800"
            >
              Back to Road Laws
            </Link>
          )}
        </section>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs leading-5 text-slate-400">
          LawLink provides legal awareness and educational information only.
          It is not a substitute for professional legal advice. Rules may
          vary by jurisdiction and can change over time.
        </p>
      </main>
    </div>
  );
}