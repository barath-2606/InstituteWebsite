import { useState } from "react";
import BatchTiming from "./BatchTiming";

export const CTA = () => {
  const [enrollOpen, setEnrollOpen] = useState(false);
  return (
    <section
      id="batch"
      className="relative overflow-hidden px-4 py-24 sm:px-6"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        {/* Main Card */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#111827]/80 p-8 shadow-[0_0_80px_rgba(99,102,241,0.15)] backdrop-blur-xl sm:p-10 md:p-14">
          {/* Gradient Border Glow */}
          <div className="absolute inset-0 rounded-[32px] border border-white/5" />

          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* LEFT CONTENT */}
            <div className="text-center md:text-left">
              <div className="mb-5 inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-medium text-indigo-300">
                🚀 Admissions Open Now
              </div>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Learn Modern
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Tech Skills with AI
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                Master Web Development, Backend Development, Full Stack
                Development, Databases, MS Office & Tally through practical
                training, real projects, and AI-powered learning designed for
                beginners and future professionals.
              </p>

              {/* FEATURES */}
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl border border-white/5 bg-white/5 px-4 py-4">
                  <p className="font-semibold text-white">Real Projects</p>

                  <p className="mt-1 text-xs text-gray-400">
                    Practical learning experience
                  </p>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/5 px-4 py-4">
                  <p className="font-semibold text-white">AI Assisted</p>

                  <p className="mt-1 text-xs text-gray-400">
                    Modern AI-powered learning
                  </p>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/5 px-4 py-4">
                  <p className="font-semibold text-white">Placement Support</p>

                  <p className="mt-1 text-xs text-gray-400">
                    Career-focused guidance
                  </p>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/5 px-4 py-4">
                  <p className="font-semibold text-white">Beginner Friendly</p>

                  <p className="mt-1 text-xs text-gray-400">
                    Easy step-by-step learning
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT CTA */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl" />

              {/* CTA CARD */}
              <div className="relative rounded-3xl border border-white/10 bg-[#0F172A] p-8 text-center">
                <h3 className="text-2xl font-bold">Ready to Start?</h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  Join our upcoming batch and build job-ready skills with expert
                  mentorship and real project experience.
                </p>

                {/* STATS */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 px-5 py-4">
                    <span className="text-sm text-gray-300">
                      Course Duration
                    </span>

                    <span className="font-semibold text-indigo-400">
                      2 - 6 Months
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-white/5 px-5 py-4">
                    <span className="text-sm text-gray-300">Learning Mode</span>

                    <span className="font-semibold text-indigo-400">
                      Online / Offline
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-white/5 px-5 py-4">
                    <span className="text-sm text-gray-300">Batch Status</span>

                    <span className="font-semibold text-green-400">Open</span>
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  onClick={() => setEnrollOpen(true)}
                  className="mt-8 w-full cursor-pointer rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
                >
                  Batch Timing
                </button>

                <p className="mt-5 text-xs text-gray-500">
                  Limited seats available • New batch starts soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BatchTiming open={enrollOpen} onClose={() => setEnrollOpen(false)} />
    </section>
  );
};
