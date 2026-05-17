import { motion } from "framer-motion";
import reactIcon from "../assets/react.png";
import tallyIcon from "../assets/pngwing.com.png";
import HTML from "../assets/SVGIcons/HTML.tsx";
import CSS from "../assets/SVGIcons/CSS.tsx";
import JS from "../assets/SVGIcons/JS.tsx";
// import ReactLogo from "../assets/SVGIcons/ReactLogo.tsx";
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
};

const courses: Course[] = [
  {
    name: "Web Development",
    icons: [HTML, CSS, JS, reactIcon],
    description:
      "Master modern frontend development by building responsive websites and real-world React applications using HTML, CSS, JavaScript, and React.",
  },
  {
    name: "Backend",
    icons: [C, CPP, Python, Java],
    description:
      "Learn programming fundamentals, problem-solving, APIs, and backend development concepts using industry-relevant programming languages.",
  },
  {
    name: "SQL",
    icons: [Mysql, Postgres, MSSQL],
    description:
      "Understand databases, write powerful SQL queries, manage data efficiently, and work with real-time database systems used in companies.",
  },
  {
    name: "MS Office & Tally",
    icons: [MSOffice, tallyIcon],
    description:
      "Build essential office and accounting skills with MS Office and Tally to improve productivity, reporting, and business management capabilities.",
  },
];

export const Courses = () => {
    return (
        <section id="courses" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">Courses</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-4 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-indigo-400/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition"
            >
              <div className="flex justify-center items-center gap-2 mt-2">
                {course.icons.map((icon, idx) => {
                  if (typeof icon === "string") {
                    return (
                      <img key={idx} src={icon} alt="" className="w-6 h-6" />
                    );
                  } else {
                    const IconComponent = icon;
                    return (
                      <div
                        key={idx}
                        className="w-6 h-6 flex items-center gap-2 justify-center"
                      >
                        <IconComponent />
                      </div>
                    );
                  }
                })}
              </div>

              <h3 className="font-semibold text-center my-2">{course.name}</h3>

              <p className="text-sm text-gray-400 mt-3 text-center leading-relaxed">{course.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    )
}