import Link from "next/link";

const lessons = [
  {
    number: 1,
    title: "Know Your Basic Rights",
    description:
      "Learn why students and workers should understand the rules and protections that apply to them.",
    status: "completed",
  },
  {
    number: 2,
    title: "Respectful Workplaces & Campuses",
    description:
      "Understand the importance of respectful behaviour, boundaries and safe environments.",
    status: "completed",
  },
  {
    number: 3,
    title: "Unfair Treatment",
    description:
      "Learn how to recognize situations that may require support, documentation or reporting.",
    status: "current",
  },
  {
    number: 4,
    title: "Complaints & Grievances",
    description:
      "Learn the basic idea behind raising a concern through an appropriate institutional process.",
    status: "locked",
  },
  {
    number: 5,
    title: "Finding Reliable Support",
    description:
      "Learn how to identify trusted people, institutional resources and appropriate official information.",
    status: "locked",
  },
];

export default function StudentWorkplacePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-slate-200 bg-white lg:block">
        <div className="border-b border-slate-200 p-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl text-white">
              ⚖️
            </div>
            <span className="text-xl font-bold text-slate-900">LawLink</span>
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
            className="flex items-center gap-3 rounded-xl bg-blue-50 px-4 py-3 font-semibold text-blue-700"
          >
            📚 Learn
          </Link>

          <Link
            href="#"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 hover:bg-slate-100"
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
        <header className="border-b border-slate-200 bg-white px-6 py-5">
          <Link
            href="/learn"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            ← Back to Learning Hub
          </Link>
        </header>

        <div className="mx-auto max-w-5xl px-6 py-10">
          {/* Hero */}
          <section className="mb-10 rounded-3xl bg-gradient-to-br from-indigo-600 to-blue-700 p-8 text-white shadow-sm">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-3xl">
              🎓
            </div>

            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-100">
              Student & Workplace Rights
            </p>

            <h1 className="text-3xl font-bold md:text-4xl">
              Know the rules. Know where to ask for help.
            </h1>

            <p className="mt-3 max-w-2xl text-indigo-50">
              Build practical awareness around respectful environments,
              unfair treatment, complaints and finding reliable support.
            </p>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm">
                <span>Learning progress</span>
                <span className="font-semibold">15%</span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full rounded-full bg-white"
                  style={{ width: "15%" }}
                />
              </div>
            </div>
          </section>

          {/* Learning path */}
          <section>
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Learning Path
              </p>

              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                Your rights journey
              </h2>

              <p className="mt-2 text-slate-500">
                Complete each lesson to build your awareness and earn XP.
              </p>
            </div>

            <div className="space-y-4">
              {lessons.map((lesson) => {
                const isCompleted = lesson.status === "completed";
                const isCurrent = lesson.status === "current";
                const isLocked = lesson.status === "locked";

                return (
                  <div
                    key={lesson.number}
                    className={`rounded-2xl border bg-white p-5 shadow-sm ${
                      isCurrent
                        ? "border-blue-300 ring-2 ring-blue-100"
                        : "border-slate-200"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold ${
                          isCompleted
                            ? "bg-emerald-100 text-emerald-700"
                            : isCurrent
                              ? "bg-blue-100 text-blue-700"
                              : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        {isCompleted ? "✓" : isLocked ? "🔒" : lesson.number}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-bold text-slate-900">
                            {lesson.title}
                          </h3>

                          {isCompleted && (
                            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                              Completed
                            </span>
                          )}

                          {isCurrent && (
                            <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700">
                              Continue
                            </span>
                          )}

                          {isLocked && (
                            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500">
                              Locked
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          {lesson.description}
                        </p>

                        {isCurrent && (
                          <Link
                            href="/scenario/unfair-treatment"
                            className="mt-4 inline-flex rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                          >
                            Start Scenario →
                          </Link>
                        )}

                        {isCompleted && (
                          <p className="mt-3 text-sm font-medium text-emerald-600">
                            ✓ Lesson completed
                          </p>
                        )}

                        {isLocked && (
                          <p className="mt-3 text-sm text-slate-400">
                            Complete the previous lessons to unlock this.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Reward */}
          <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🏆</div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Rights Ready Champion
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                  Complete the Student & Workplace Rights path to earn the
                  Rights Ready Champion badge.
                </p>

                <p className="mt-3 text-sm font-semibold text-amber-700">
                  Reward: +250 XP
                </p>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <p className="mt-8 text-center text-xs leading-5 text-slate-400">
            LawLink provides legal awareness and educational information only.
            It is not a substitute for professional legal advice. Specific
            rights and procedures can vary by jurisdiction and situation.
          </p>
        </div>
      </main>
    </div>
  );
}