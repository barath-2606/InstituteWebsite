import { motion } from "framer-motion";
import {
  Award,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Developer",
    desc: "Experienced in building scalable frontend and backend applications using modern technologies.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    icon: BriefcaseBusiness,
    title: "Real Industry Experience",
    desc: "Worked on real-time automation systems, dashboards, APIs, and business-critical enterprise applications.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: GraduationCap,
    title: "Practical Mentor",
    desc: "Focused on teaching concepts clearly with real-world examples, projects, and career-oriented guidance.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Award,
    title: "Career Focused",
    desc: "Helping students become industry-ready with strong fundamentals, problem-solving, and interview preparation.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
];

export const About = () => {
    const careerStart = import.meta.env.VITE_CAREER_START
    const currentYear = new Date().getFullYear()
    const experience = currentYear - careerStart
  return (
    <section
      id="about"
      className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-indigo-300">
              <Sparkles size={14} />
              ABOUT MENTOR
            </div>

            {/* Heading */}
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Learn From Someone
              <span className="mt-2 block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Who Builds Real Systems
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-sm leading-8 text-slate-400 sm:text-base">
              I’m a Full Stack Developer with real industry experience
              in building scalable applications, backend systems,
              dashboards, automation tools, and modern web
              applications.
            </p>

            <p className="mt-4 text-sm leading-8 text-slate-400 sm:text-base">
              My goal is not just to teach syntax — but to help
              students understand how real software is built in
              companies, how to think like a developer, and how to
              confidently crack opportunities in the tech industry.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-3xl font-bold text-white">{experience}+</h3>

                <p className="mt-2 text-sm text-slate-400">
                  Years Experience
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-3xl font-bold text-white">10+</h3>

                <p className="mt-2 text-sm text-slate-400">
                  Technologies
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 col-span-2 sm:col-span-1">
                <h3 className="text-3xl font-bold text-white">
                  Real
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Project Training
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid gap-5"
          >
            {highlights.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-6
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-white/20
                    hover:bg-white/[0.05]
                  "
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex items-center gap-5">
                    {/* Icon */}
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${item.bg}`}
                    >
                      <Icon
                        size={26}
                        className={item.color}
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};