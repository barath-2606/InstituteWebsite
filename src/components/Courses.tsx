import { motion } from "framer-motion";

import reactIcon from "../assets/react.png";
import tallyIcon from "../assets/pngwing.com.png";

import HTML from "../assets/SVGIcons/HTML.tsx";
import CSS from "../assets/SVGIcons/CSS.tsx";
import JS from "../assets/SVGIcons/JS.tsx";
import C from "../assets/SVGIcons/C.tsx";
import CPP from "../assets/SVGIcons/CPP.tsx";
import Python from "../assets/SVGIcons/Python.tsx";
import Java from "../assets/SVGIcons/Java.tsx";
import Mysql from "../assets/SVGIcons/Mysql.tsx";
import Postgres from "../assets/SVGIcons/Postgres.tsx";
import MSSQL from "../assets/SVGIcons/MSSQL.tsx";
import MSOffice from "../assets/SVGIcons/MSOffice.tsx";

type Course = {
  name: string;
  icons: (React.FC | string)[];
  description: string;
  badge: string;
  glow: string;
};

const courses: Course[] = [
  {
    name: "Web Development",
    icons: [HTML, CSS, JS, reactIcon],
    badge: "Frontend",
    glow: "from-indigo-500/20 to-cyan-500/10",
    description:
      "Build modern responsive websites and real-world React applications using HTML, CSS, JavaScript, and React.",
  },
  {
    name: "Backend Development",
    icons: [C, CPP, Python, Java],
    badge: "Programming",
    glow: "from-purple-500/20 to-pink-500/10",
    description:
      "Learn programming fundamentals, APIs, backend logic, and problem-solving using industry-relevant languages.",
  },
  {
    name: "SQL & Databases",
    icons: [Mysql, Postgres, MSSQL],
    badge: "Database",
    glow: "from-emerald-500/20 to-teal-500/10",
    description:
      "Master SQL queries, database management, normalization, and real-time data handling used in companies.",
  },
  {
    name: "MS Office & Tally",
    icons: [MSOffice, tallyIcon],
    badge: "Productivity",
    glow: "from-orange-500/20 to-yellow-500/10",
    description:
      "Improve office productivity and accounting skills using MS Office and Tally for professional workflows.",
  },
];

export const Courses = () => {
  return (
    <section
      id="courses"
      className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-2 inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-indigo-300">
            OUR COURSES
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Learn Skills That Build
            <span className="ml-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Your Career
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            Industry-focused courses designed for beginners, students, and
            aspiring developers.
          </p>
        </div>

        {/* Course Cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{
                duration: 0.35,
                delay: i * 0.08,
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
                className={`absolute inset-0 bg-gradient-to-br ${course.glow} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              {/* Content */}
              <div className="relative flex h-full flex-col">
                {/* Badge */}
                <div className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium tracking-wide text-slate-300">
                  {course.badge}
                </div>

                {/* Icons */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                  {course.icons.map((icon, idx) => {
                    if (typeof icon === "string") {
                      return (
                        <div
                          key={idx}
                          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-[#0f172a]
            p-2
            shadow-inner
          "
                        >
                          <img
                            src={icon}
                            alt=""
                            className="h-full w-full object-contain"
                          />
                        </div>
                      );
                    }

                    const IconComponent = icon;

                    return (
                      <div
                        key={idx}
                        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          border
          border-white/10
          bg-[#0f172a]
          p-2
          shadow-inner
        "
                      >
                        <div className="flex h-full w-full items-center justify-center overflow-hidden">
                          <IconComponent />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {course.name}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {course.description}
                </p>

                {/* Bottom Line */}
                <div className="mt-6 h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
