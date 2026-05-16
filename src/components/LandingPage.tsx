import { motion } from "framer-motion";
import CurriculumModal from "./CurriculumModal";
import { useState } from "react";
import CoursesModal from "./CoursesModal";
import EnrollModal from "./EnrollModal";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const LandingPage = () => {
  const [open, setOpen] = useState(false);

  const [coursesOpen, setCoursesOpen] =
    useState(false);

  const [enrollOpen, setEnrollOpen] =
    useState(false);

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-24">
      {/* Glow */}
      <div className="absolute left-1/2 top-[-150px] -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-600/30 blur-[120px] md:h-[600px] md:w-[600px]" />

      {/* Modals */}
      <CurriculumModal
        open={open}
        onClose={() => setOpen(false)}
        setEnrollOpen={setEnrollOpen}
      />

      <CoursesModal
        open={coursesOpen}
        onClose={() =>
          setCoursesOpen(false)
        }
        setEnrollOpen={setEnrollOpen}
      />

      <EnrollModal
        open={enrollOpen}
        onClose={() =>
          setEnrollOpen(false)
        }
      />

      {/* Main Layout */}
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        {/* LEFT */}
        <div className="text-center md:text-left">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
          >
            Build Job-Ready <br />

            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Tech Skills Faster
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base md:mx-0"
          >
            Learn Web Development,
            Backend, SQL, MS Office &
            Tally with real-world
            projects and career-focused
            training.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start"
          >
            <button
              onClick={() =>
                setCoursesOpen(true)
              }
              className="w-full cursor-pointer rounded-xl border border-white/20 bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-3 text-sm font-medium transition-all duration-300 hover:scale-[1.02] hover:opacity-90 sm:w-auto"
            >
              View Courses
            </button>

            <button
              onClick={() =>
                setEnrollOpen(true)
              }
              className="w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 sm:w-auto"
            >
              Enroll Now
            </button>
          </motion.div>

          {/* TRUST */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500 sm:text-sm md:justify-start">
            <span>
              ✔ Real Projects
            </span>

            <span>
              ✔ Placement Support
            </span>

            <span>
              ✔ Beginner Friendly
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: 0.4 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-[380px]">
            {/* Glow */}
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-30 blur-3xl" />

            {/* Card */}
            <div className="relative rounded-3xl border border-white/10 bg-[#111827] p-5 shadow-2xl sm:p-6">
              <p className="mb-4 text-sm text-gray-400">
                Popular Course
              </p>

              <h3 className="mb-2 text-lg font-semibold sm:text-xl">
                Full Stack Development
              </h3>

              <p className="mb-5 text-sm leading-6 text-gray-400">
                Learn frontend +
                backend with real-world
                projects
              </p>

              {/* Topics */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-3">
                  <span>
                    HTML, CSS, JS
                  </span>

                  <span className="text-indigo-400">
                    Beginner
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-3">
                  <span>React</span>

                  <span className="text-indigo-400">
                    Intermediate
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-3">
                  <span>Backend</span>

                  <span className="text-indigo-400">
                    Advanced
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-3">
                  <span>SQL</span>

                  <span className="text-indigo-400">
                    Core
                  </span>
                </div>
              </div>

              {/* Button */}
              <button
                onClick={() =>
                  setOpen(true)
                }
                className="mt-6 w-full cursor-pointer rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 py-3 text-sm font-medium transition-all duration-300 hover:scale-[1.01]"
              >
                View Full Curriculum
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingPage;