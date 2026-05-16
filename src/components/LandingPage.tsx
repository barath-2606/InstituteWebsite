import { motion } from "framer-motion";
import CurriculumModal from "./CurriculumModal";
import { useState } from "react";
import CoursesModal from "./CoursesModal";
import EnrollModal from "./EnrollModal";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const LandingPage = () => {
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [enrollOpen, setEnrollOpen] = useState(false);
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Glow */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600/30 blur-[140px] top-[-150px] left-1/2 -translate-x-1/2 -z-10" />
      <CurriculumModal open={open} onClose={() => setOpen(false)} setEnrollOpen={setEnrollOpen} />
      <CoursesModal open={coursesOpen} onClose={() => setCoursesOpen(false)} setEnrollOpen={setEnrollOpen} />
      <EnrollModal open={enrollOpen} onClose={() => setEnrollOpen(false)} />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-6xl font-bold leading-tight"
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
            className="mt-6 text-gray-400"
          >
            Learn Web Development, Backend, SQL, MS Office & Tally with
            real-world projects and career-focused training.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="mt-8 flex gap-4 justify-center items-center"
          >
            <button
              onClick={() => setCoursesOpen(true)}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 cursor-pointer border border-white/20 px-8 py-3 rounded-lg hover:opacity-90"
            >
              View Courses
            </button>
          </motion.div>

          {/* TRUST */}
          <div className="mt-6 flex justify-center items-center gap-6 text-sm text-gray-500">
            <span>✔ Real Projects</span>
            <span>✔ Placement Support</span>
            <span>✔ Beginner Friendly</span>
          </div>
        </div>

        {/* RIGHT - COURSE PREVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative flex justify-center"
        >
          <div className="relative w-[380px]">
            {/* Glow */}
            <div className="absolute -inset-10 bg-gradient-to-r from-indigo-500 to-purple-500 blur-3xl opacity-30 rounded-full"></div>

            {/* CARD */}
            <div className="relative bg-[#111827] border border-white/10 rounded-2xl p-6 shadow-2xl">
              <p className="text-sm text-gray-400 mb-4">Popular Course</p>

              <h3 className="text-lg font-semibold mb-2">
                Full Stack Development
              </h3>

              <p className="text-sm text-gray-400 mb-4">
                Learn frontend + backend with real-world projects
              </p>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between bg-white/5 px-3 py-2 rounded-lg">
                  <span>HTML, CSS, JS</span>
                  <span className="text-indigo-400">Beginner</span>
                </div>
                <div className="flex justify-between bg-white/5 px-3 py-2 rounded-lg">
                  <span>React</span>
                  <span className="text-indigo-400">Intermediate</span>
                </div>
                <div className="flex justify-between bg-white/5 px-3 py-2 rounded-lg">
                  <span>Backend</span>
                  <span className="text-indigo-400">Advanced</span>
                </div>
                <div className="flex justify-between bg-white/5 px-3 py-2 rounded-lg">
                  <span>SQL</span>
                  <span className="text-indigo-400">Core</span>
                </div>
              </div>

              <button
                onClick={() => setOpen(true)}
                className="mt-5 cursor-pointer w-full bg-gradient-to-r from-indigo-500 to-purple-500 py-2 rounded-lg text-sm"
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
