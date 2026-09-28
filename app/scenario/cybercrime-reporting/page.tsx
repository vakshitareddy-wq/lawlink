"use client";
"use client";

import { useState } from "react";
import Link from "next/link";

const options = [
  {
    id: "a",
    text: "Ignore the transaction and wait to see what happens.",
  },
  {
    id: "b",
    text: "Contact the relevant bank/payment provider and preserve the transaction details.",
  },
  {
    id: "c",
    text: "Delete the transaction message so nobody can access it.",
  },
  {
    id: "d",
    text: "Share your account details with someone who promises to recover the money.",
  },
];

export default function CybercrimeScenario() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const correctAnswer = "b";

  const isCorrect = selectedAnswer === correctAnswer;

  function handleSubmit() {
  if (!selectedAnswer) return;

  setSubmitted(true);

  if (selectedAnswer === correctAnswer) {
    const scenarioCompleted = localStorage.getItem(
      "cybercrime-reporting-completed"
    );

    if (!scenarioCompleted) {
      const currentXP = Number(
        localStorage.getItem("lawlink-xp") || "820"
      );

      const newXP = currentXP + 50;

      localStorage.setItem("lawlink-xp", String(newXP));

      localStorage.setItem(
        "cybercrime-reporting-completed",
        "true"
      );
    }
  }
}

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* Header */}
      <header className="border-b border-slate-200 bg-white">

        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">

          <Link
            href="/learn/cyber-safety"
            className="text-sm font-medium text-slate-500 hover:text-blue-600"
          >
            ← Back to Cyber Safety
          </Link>

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
              ⚖️
            </div>

            <span className="font-bold">
              LawLink
            </span>

          </div>

        </div>

      </header>


      {/* Main */}
      <main className="mx-auto max-w-3xl px-6 py-10">

        {/* Progress */}
        <div>

          <div className="flex items-center justify-between text-sm">

            <span className="font-semibold text-blue-600">
              🔐 CYBER SAFETY
            </span>

            <span className="text-slate-500">
              Scenario 4 of 5
            </span>

          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">

            <div className="h-full w-[80%] rounded-full bg-blue-600" />

          </div>

        </div>


        {/* Scenario Card */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">

          {/* Scenario badge */}
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-3xl">
            🚨
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-red-600">
            Something happened
          </p>

          <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
            You notice an unauthorized transaction
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-600">
            You check your account and notice a transaction that you
            don't recognize. You still have access to your account,
            but you are concerned that someone may have used your
            payment information.
          </p>


          {/* Question */}
          <div className="mt-8 rounded-2xl bg-slate-50 p-6">

            <p className="font-bold">
              What would be an appropriate immediate step?
            </p>

          </div>


          {/* Options */}
          <div className="mt-6 space-y-3">

            {options.map((option) => {

              const isSelected = selectedAnswer === option.id;

              let optionStyle =
                "border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50";

              if (isSelected && !submitted) {
                optionStyle =
                  "border-blue-500 bg-blue-50 ring-2 ring-blue-100";
              }

              if (submitted && option.id === correctAnswer) {
                optionStyle =
                  "border-emerald-400 bg-emerald-50";
              }

              if (
                submitted &&
                isSelected &&
                option.id !== correctAnswer
              ) {
                optionStyle =
                  "border-red-300 bg-red-50";
              }

              return (
                <button
                  key={option.id}
                  onClick={() => {
                    if (!submitted) {
                      setSelectedAnswer(option.id);
                    }
                  }}
                  className={`flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition ${optionStyle}`}
                >

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      isSelected
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {option.id.toUpperCase()}
                  </span>

                  <span className="pt-1 text-sm leading-6">
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
              className={`mt-7 w-full rounded-xl py-3.5 font-semibold text-white transition ${
                selectedAnswer
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "cursor-not-allowed bg-slate-300"
              }`}
            >
              Submit Answer
            </button>

          )}


          {/* Result */}
          {submitted && (

            <div
              className={`mt-7 rounded-2xl border p-6 ${
                isCorrect
                  ? "border-emerald-200 bg-emerald-50"
                  : "border-amber-200 bg-amber-50"
              }`}
            >

              <div className="flex items-start gap-4">

                <div className="text-3xl">
                  {isCorrect ? "✅" : "💡"}
                </div>

                <div>

                  <h2 className="text-xl font-bold">
                    {isCorrect
                      ? "Good choice!"
                      : "Let's understand this better."}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    A useful immediate step is to contact the relevant
                    bank or payment provider, preserve transaction
                    information and use the appropriate official
                    reporting or grievance channel where applicable.
                  </p>

                </div>

              </div>


              {/* XP */}
              {isCorrect && (

                <div className="mt-5 flex items-center justify-between rounded-xl bg-white/70 p-4">

                  <span className="font-semibold">
                    Scenario completed
                  </span>

                  <span className="text-lg font-bold text-blue-600">
                    +50 XP ⭐
                  </span>

                </div>

              )}


              {/* Next */}
              <Link
                href="/learn/cyber-safety"
                className="mt-5 block w-full rounded-xl bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                Continue learning →
              </Link>

            </div>

          )}

        </section>


        {/* Disclaimer */}
        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">

          <p className="text-sm leading-6 text-amber-800">
            ⚠️ <strong>Legal awareness only:</strong> This scenario is
            educational. It does not constitute professional legal advice.
          </p>

        </div>

      </main>

    </div>
  );
}