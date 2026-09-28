import Link from "next/link";

const lessons = [
  {
    number: 1,
    icon: "🎣",
    title: "Recognizing Phishing",
    description: "Learn how to identify suspicious messages and links.",
    status: "completed",
  },
  {
    number: 2,
    icon: "💳",
    title: "Online & UPI Fraud",
    description: "Understand what to do when a digital payment goes wrong.",
    status: "completed",
  },
  {
    number: 3,
    icon: "🔐",
    title: "Protecting Your Accounts",
    description: "Learn basic steps to keep your online accounts secure.",
    status: "completed",
  },
  {
    number: 4,
    icon: "🚨",
    title: "Reporting Cybercrime",
    description: "Understand what information to preserve and where to seek help.",
    status: "current",
  },
  {
    number: 5,
    icon: "🛡️",
    title: "Online Harassment & Safety",
    description: "Learn about practical safety steps and support resources.",
    status: "locked",
  },
];

export default function CyberSafetyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* Sidebar */}
      <aside className="fixed hidden h-screen w-64 border-r border-slate-200 bg-white p-6 lg:block">

        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl text-white">
            ⚖️
          </div>

          <span className="text-xl font-bold">
            LawLink
          </span>
        </Link>

        <nav className="mt-10 space-y-2">

          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 hover:bg-slate-50"
          >
            🏠
            <span>Home</span>
          </Link>

          <Link
            href="/learn"
            className="flex items-center gap-3 rounded-xl bg-blue-50 px-4 py-3 font-semibold text-blue-600"
          >
            📚
            <span>Learn</span>
          </Link>

          <Link
            href="/assistant"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 hover:bg-slate-50"
          >
            🤖
            <span>AI Help</span>
          </Link>

          <Link
            href="/resources"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 hover:bg-slate-50"
          >
            🔗
            <span>Resources</span>
          </Link>

          <Link
            href="/badges"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 hover:bg-slate-50"
          >
            🏆
            <span>Badges</span>
          </Link>

        </nav>

      </aside>


      {/* Main */}
      <main className="lg:ml-64">

        {/* Header */}
        <header className="border-b border-slate-200 bg-white px-6 py-6 md:px-10">

          <div className="mx-auto max-w-5xl">

            <Link
              href="/learn"
              className="text-sm font-medium text-slate-500 hover:text-blue-600"
            >
              ← Back to Learning Hub
            </Link>

            <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div className="flex items-center gap-5">

                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 text-4xl">
                  🔐
                </div>

                <div>

                  <p className="text-sm font-semibold text-blue-600">
                    LEGAL AWARENESS
                  </p>

                  <h1 className="mt-1 text-3xl font-bold">
                    Cyber Safety
                  </h1>

                  <p className="mt-2 text-slate-500">
                    Learn how to stay safer in the digital world.
                  </p>

                </div>

              </div>

              <div className="rounded-2xl bg-blue-50 px-5 py-4">

                <p className="text-xs font-medium text-blue-600">
                  YOUR PROGRESS
                </p>

                <p className="mt-1 text-2xl font-bold text-blue-700">
                  80%
                </p>

              </div>

            </div>

          </div>

        </header>


        {/* Content */}
        <div className="mx-auto max-w-5xl p-6 md:p-10">

          {/* Progress */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">

            <div className="flex items-center justify-between">

              <div>
                <p className="font-bold">
                  Your learning progress
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  4 of 5 lessons completed
                </p>
              </div>

              <span className="font-bold text-blue-600">
                80%
              </span>

            </div>

            <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">

              <div className="h-full w-[80%] rounded-full bg-blue-600" />

            </div>

          </section>


          {/* Learning path */}
          <section className="mt-10">

            <p className="text-sm font-semibold text-blue-600">
              YOUR LEARNING PATH
            </p>

            <h2 className="mt-1 text-2xl font-bold">
              Become a Cyber Guardian
            </h2>

            <p className="mt-2 text-slate-500">
              Complete each lesson to build your digital-safety knowledge.
            </p>


            <div className="relative mt-8">

              {/* Vertical line */}
              <div className="absolute left-7 top-7 h-[calc(100%-60px)] w-0.5 bg-slate-200" />


              <div className="space-y-5">

                {lessons.map((lesson) => (

                  <div
                    key={lesson.number}
                    className={`relative flex gap-5 rounded-2xl border p-5 transition ${
                      lesson.status === "current"
                        ? "border-blue-200 bg-blue-50 shadow-sm"
                        : lesson.status === "completed"
                          ? "border-slate-200 bg-white"
                          : "border-slate-200 bg-slate-100 opacity-60"
                    }`}
                  >

                    {/* Number */}
                    <div
                      className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-xl ${
                        lesson.status === "completed"
                          ? "bg-emerald-500 text-white"
                          : lesson.status === "current"
                            ? "bg-blue-600 text-white"
                            : "bg-slate-300 text-slate-500"
                      }`}
                    >
                      {lesson.status === "completed"
                        ? "✓"
                        : lesson.status === "locked"
                          ? "🔒"
                          : lesson.number}
                    </div>


                    {/* Content */}
                    <div className="flex-1">

                      <div className="flex flex-col justify-between gap-3 sm:flex-row">

                        <div>

                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                            Lesson {lesson.number}
                          </p>

                          <h3 className="mt-1 text-lg font-bold">
                            {lesson.icon} {lesson.title}
                          </h3>

                          <p className="mt-1 text-sm leading-6 text-slate-500">
                            {lesson.description}
                          </p>

                        </div>


                        {lesson.status === "completed" && (
                          <span className="h-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                            Completed
                          </span>
                        )}

                        {lesson.status === "current" && (
                          <span className="h-fit rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                            Current
                          </span>
                        )}

                      </div>


                      {lesson.status === "current" && (

                        <Link
                          href="/scenario/cybercrime-reporting"
                          className="mt-4 inline-flex rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                        >
                          Start scenario →
                        </Link>

                      )}

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </section>


          {/* Reward */}
          <section className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-600 p-7 text-white">

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <p className="text-sm font-semibold text-blue-200">
                  YOUR REWARD
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  🛡️ Cyber Guardian
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-blue-100">
                  Complete all five lessons to unlock this badge and
                  earn additional XP.
                </p>

              </div>

              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white/15 text-4xl">
                🛡️
              </div>

            </div>

          </section>


          {/* Disclaimer */}
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">

            <p className="text-sm leading-6 text-amber-800">
              ⚠️ <strong>Legal awareness only:</strong> This content is
              educational and does not constitute professional legal advice.
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}