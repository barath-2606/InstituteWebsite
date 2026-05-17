import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    title: "Real-World Projects",
    desc: "Build real applications like full-stack websites, REST APIs, dashboards, and production-style projects used in modern companies.",
    icon: Code2,
    glow: "from-indigo-500/20 to-cyan-500/10",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
  },
  {
    title: "Placement Support",
    desc: "Get complete guidance for resume building, mock interviews, aptitude preparation, and solving real interview questions confidently.",
    icon: BriefcaseBusiness,
    glow: "from-purple-500/20 to-pink-500/10",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
  },
  {
    title: "Beginner Friendly",
    desc: "Learn from scratch with structured roadmaps, clear explanations, live sessions, and mentor support designed for beginners.",
    icon: GraduationCap,
    glow: "from-emerald-500/20 to-teal-500/10",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
];

export const WhyUs = () => {
  return (
    <section
      id="why"
      className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-2 inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-indigo-300">
            WHY CODERISE
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why Students Choose
            <span className="ml-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              CodeRise
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            Learn modern technologies with practical training,
            real-world projects, and career-focused mentorship.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{
                  duration: 0.35,
                  delay: i * 0.1,
                }}
                viewport={{ once: true }}
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
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.glow} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg}`}
                  >
                    <Icon
                      size={26}
                      className={item.iconColor}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.desc}
                  </p>

                  {/* Bottom line */}
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};