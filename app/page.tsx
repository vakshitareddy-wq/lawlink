export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-5 md:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl text-white">
            ⚖️
          </div>

          <span className="text-xl font-bold">
            LawLink
          </span>
        </div>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#features" className="hover:text-blue-600">
            Features
          </a>

          <a href="#how" className="hover:text-blue-600">
            How it works
          </a>

          <a href="#about" className="hover:text-blue-600">
            About
          </a>
        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
          Get Started
        </button>
      </nav>


      {/* Hero Section */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:px-12 md:pt-24">

        <div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            ✨ Legal awareness, simplified
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Know your rights.
            <span className="block text-blue-600">
              Know your next step.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            LawLink makes legal awareness simple, practical and engaging
            through real-world scenarios, quizzes, gamification and an
            AI-powered legal awareness assistant.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <button className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700">
              Start Learning →
            </button>

            <button className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-100">
              Explore Topics
            </button>

          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
            <span>✓ Scenario based</span>
            <span>✓ Gamified learning</span>
            <span>✓ Trusted resources</span>
          </div>

        </div>


        {/* Dashboard Preview */}
        <div className="relative">

          <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-blue-200 opacity-50 blur-3xl" />

          <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Your progress
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Welcome back 👋
                </h2>
              </div>

              <div className="rounded-xl bg-orange-100 px-3 py-2 text-sm font-bold text-orange-600">
                🔥 5 days
              </div>
            </div>


            {/* XP */}
            <div className="mt-6 rounded-2xl bg-slate-50 p-5">

              <div className="flex items-center justify-between">
                <span className="font-semibold">
                  Level 4
                </span>

                <span className="text-sm font-medium text-blue-600">
                  ⭐ 820 XP
                </span>
              </div>

              <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-[82%] rounded-full bg-blue-600" />
              </div>

              <p className="mt-2 text-xs text-slate-500">
                820 / 1000 XP
              </p>

            </div>


            {/* Topics */}
            <div className="mt-6">

              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-bold">
                  Continue learning
                </h3>

                <span className="text-sm text-blue-600">
                  View all
                </span>
              </div>


              <div className="space-y-3">

                <div className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl">
                    🔐
                  </div>

                  <div className="flex-1">

                    <div className="flex justify-between">
                      <span className="font-semibold">
                        Cyber Safety
                      </span>

                      <span className="text-sm text-slate-500">
                        80%
                      </span>
                    </div>

                    <div className="mt-2 h-2 rounded-full bg-slate-100">
                      <div className="h-full w-[80%] rounded-full bg-blue-500" />
                    </div>

                  </div>

                </div>


                <div className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl">
                    🛒
                  </div>

                  <div className="flex-1">

                    <div className="flex justify-between">
                      <span className="font-semibold">
                        Consumer Rights
                      </span>

                      <span className="text-sm text-slate-500">
                        45%
                      </span>
                    </div>

                    <div className="mt-2 h-2 rounded-full bg-slate-100">
                      <div className="h-full w-[45%] rounded-full bg-green-500" />
                    </div>

                  </div>

                </div>


                <div className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl">
                    🚗
                  </div>

                  <div className="flex-1">

                    <div className="flex justify-between">
                      <span className="font-semibold">
                        Road Laws
                      </span>

                      <span className="text-sm text-slate-500">
                        20%
                      </span>
                    </div>

                    <div className="mt-2 h-2 rounded-full bg-slate-100">
                      <div className="h-full w-[20%] rounded-full bg-orange-500" />
                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* Badge */}
            <div className="mt-6 flex items-center gap-4 rounded-2xl bg-blue-50 p-4">

              <div className="text-3xl">
                🛡️
              </div>

              <div>
                <p className="text-xs font-medium text-blue-600">
                  ACHIEVEMENT UNLOCKED
                </p>

                <p className="font-bold">
                  Cyber Guardian
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Features */}
      <section
        id="features"
        className="border-t border-slate-200 bg-white px-6 py-20 md:px-12"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="font-semibold text-blue-600">
              WHY LAWLINK?
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Legal awareness made engaging
            </h2>

            <p className="mt-4 text-slate-600">
              Learn what your rights are and understand practical next
              steps without getting lost in complicated legal language.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🎯
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Scenario-based learning
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Learn through realistic situations rather than
                complicated legal textbooks.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🏆
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Gamified education
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Earn XP, unlock badges, maintain streaks and track
                your learning progress.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🤖
              </div>

              <h3 className="mt-5 text-xl font-bold">
                AI legal awareness
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Ask questions in simple language and discover
                relevant trusted resources.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Disclaimer */}
      <section className="bg-slate-900 px-6 py-10 text-center text-slate-300">

        <p className="mx-auto max-w-3xl text-sm leading-6">
          ⚠️ LawLink provides legal awareness and educational
          information only. It is not a substitute for professional
          legal advice.
        </p>

      </section>


      {/* Footer */}
      <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-500">

        <p>
          © 2026 LawLink • Know your rights. Know your next step.
        </p>

      </footer>

    </main>
  );
}