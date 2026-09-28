import Link from "next/link";

const topics = [
  {
    id: "cyber-safety",
    icon: "🔐",
    title: "Cyber Safety",
    description:
      "Learn how to recognize online scams, protect your accounts and respond to cyber incidents.",
    lessons: 5,
    progress: 80,
    level: "Beginner",
    color: "blue",
    bg: "bg-blue-50",
    text: "text-blue-600",
    button: "bg-blue-600 hover:bg-blue-700",
  },
  {
    id: "consumer-rights",
    icon: "🛒",
    title: "Consumer Rights",
    description:
      "Understand your basic rights when buying products and services online or offline.",
    lessons: 5,
    progress: 45,
    level: "Beginner",
    color: "emerald",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    button: "bg-emerald-600 hover:bg-emerald-700",
  },
  {
    id: "road-laws",
    icon: "🚗",
    title: "Road Laws",
    description:
      "Learn essential road-safety awareness and what to do in common traffic situations.",
    lessons: 5,
    progress: 20,
    level: "Beginner",
    color: "orange",
    bg: "bg-orange-50",
    text: "text-orange-600",
    button: "bg-orange-500 hover:bg-orange-600",
  },
  {
    id: "womens-safety",
    icon: "🛡️",
    title: "Women's Safety",
    description:
      "Explore safety awareness, support resources and practical steps for difficult situations.",
    lessons: 5,
    progress: 10,
    level: "Beginner",
    color: "purple",
    bg: "bg-purple-50",
    text: "text-purple-600",
    button: "bg-purple-600 hover:bg-purple-700",
  },
  {
    id: "student-workplace",
    icon: "🎓",
    title: "Student & Workplace Rights",
    description:
      "Learn basic rights and responsibilities relevant to students, internships and workplaces.",
    lessons: 5,
    progress: 0,
    level: "Beginner",
    color: "indigo",
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    button: "bg-indigo-600 hover:bg-indigo-700",
  },
];

export default function LearnPage() {
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
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-50"
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
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-50"
          >
            🤖
            <span>AI Help</span>
          </Link>

          <Link
            href="/resources"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-50"
          >
            🔗
            <span>Resources</span>
          </Link>

          <Link
            href="/badges"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-50"
          >
            🏆
            <span>Badges</span>
          </Link>

          <Link
            href="/profile"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-50"
          >
            👤
            <span>Profile</span>
          </Link>

        </nav>

        <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-slate-50 p-4">
          <p className="text-xs leading-5 text-slate-500">
            LawLink provides legal awareness only and is not a substitute
            for professional legal advice.
          </p>
        </div>

      </aside>


      {/* Main */}
      <main className="lg:ml-64">

        {/* Header */}
        <header className="border-b border-slate-200 bg-white px-6 py-6 md:px-10">

          <div className="mx-auto max-w-7xl">

            <Link
              href="/dashboard"
              className="text-sm font-medium text-slate-500 hover:text-blue-600"
            >
              ← Back to dashboard
            </Link>

            <div className="mt-5">

              <p className="text-sm font-semibold text-blue-600">
                LEARNING HUB
              </p>

              <h1 className="mt-2 text-3xl font-bold md:text-4xl">
                What do you want to learn?
              </h1>

              <p className="mt-3 max-w-2xl text-slate-600">
                Explore everyday legal-awareness topics through simple
                explanations, real-world scenarios and interactive quizzes.
              </p>

            </div>

          </div>

        </header>


        {/* Content */}
        <div className="mx-auto max-w-7xl p-6 md:p-10">

          {/* Recommended */}
          <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-7 text-white md:p-9">

            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

              <div className="max-w-2xl">

                <div className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                  ⭐ RECOMMENDED FOR YOU
                </div>

                <h2 className="mt-4 text-2xl font-bold md:text-3xl">
                  Continue with Cyber Safety
                </h2>

                <p className="mt-3 leading-7 text-blue-100">
                  You are 80% through this topic. Complete the next
                  scenario to continue your learning streak.
                </p>

                <div className="mt-5 max-w-md">

                  <div className="flex justify-between text-xs text-blue-100">
                    <span>Progress</span>
                    <span>80%</span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/20">
                    <div className="h-full w-[80%] rounded-full bg-white" />
                  </div>

                </div>

              </div>

              <Link
                href="/learn/cyber-safety"
                className="whitespace-nowrap rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Continue learning →
              </Link>

            </div>

          </section>


          {/* Topics */}
          <section className="mt-10">

            <div className="flex items-end justify-between">

              <div>
                <p className="text-sm font-semibold text-blue-600">
                  ALL TOPICS
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Explore legal awareness
                </h2>
              </div>

              <span className="hidden text-sm text-slate-500 sm:block">
                5 topics
              </span>

            </div>


            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

              {topics.map((topic) => (
                <div
                  key={topic.id}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* Card top */}
                  <div className={`p-6 ${topic.bg}`}>

                    <div className="flex items-start justify-between">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                        {topic.icon}
                      </div>

                      <span
                        className={`rounded-full bg-white px-3 py-1 text-xs font-semibold ${topic.text}`}
                      >
                        {topic.level}
                      </span>

                    </div>

                    <h3 className="mt-5 text-xl font-bold">
                      {topic.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {topic.description}
                    </p>

                  </div>


                  {/* Card bottom */}
                  <div className="p-6">

                    <div className="flex justify-between text-sm">

                      <span className="text-slate-500">
                        {topic.lessons} lessons
                      </span>

                      <span className="font-semibold">
                        {topic.progress}%
                      </span>

                    </div>

                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">

                      <div
                        className={`h-full rounded-full ${topic.color === "blue"
                            ? "bg-blue-600"
                            : topic.color === "emerald"
                              ? "bg-emerald-600"
                              : topic.color === "orange"
                                ? "bg-orange-500"
                                : topic.color === "purple"
                                  ? "bg-purple-600"
                                  : "bg-indigo-600"
                          }`}
                        style={{ width: `${topic.progress}%` }}
                      />

                    </div>


                    <Link
                      href={`/learn/${topic.id}`}
                      className={`mt-5 block w-full rounded-xl py-3 text-center text-sm font-semibold text-white transition ${topic.button}`}
                    >
                      {topic.progress > 0
                        ? "Continue"
                        : "Start learning"}
                    </Link>

                  </div>

                </div>
              ))}

            </div>

          </section>


          {/* Bottom tip */}
          <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">

            <div className="flex gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-xl">
                💡
              </div>

              <div>

                <h3 className="font-bold">
                  Learning tip
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  You don't need to memorize legal sections. Focus on
                  understanding the situation, your possible options and
                  where to find reliable help.
                </p>

              </div>

            </div>

          </section>


          {/* Disclaimer */}
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">

            <p className="text-sm leading-6 text-amber-800">
              ⚠️ <strong>Legal awareness only:</strong> LawLink provides
              educational information and is not a substitute for
              professional legal advice.
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}