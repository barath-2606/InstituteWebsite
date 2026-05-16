import type { ICurriculamModal } from "./CurriculumModal";

const courses = [
  {
    category: "Web Development",
    items: [
      { name: "HTML", duration: "1 Week", use: "Structure websites" },
      { name: "CSS", duration: "1 Week", use: "Design responsive layouts" },
      {
        name: "JavaScript",
        duration: "2 Weeks",
        use: "Add interactivity & API calls",
      },
      { name: "React", duration: "2 Weeks", use: "Build modern web apps" },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "C", duration: "1 Week", use: "Programming fundamentals" },
      { name: "C++", duration: "1 Week", use: "OOP & performance" },
      { name: "Python", duration: "2 Weeks", use: "Backend + automation" },
      { name: "Java", duration: "2 Weeks", use: "Enterprise backend systems" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", duration: "1 Week", use: "Advanced relational DB" },
      { name: "MySQL", duration: "1 Week", use: "Web app database" },
      { name: "MSSQL", duration: "1 Week", use: "Enterprise data systems" },
    ],
  },
  {
    category: "MS Office",
    items: [
      { name: "Excel", duration: "1 Week", use: "Data analysis & reporting" },
      {
        name: "Word",
        duration: "3 Days",
        use: "Document creation & formatting",
      },
      { name: "PowerPoint", duration: "3 Days", use: "Presentations & slides" },
    ],
  },
  {
    category: "Accounting",
    items: [
      {
        name: "Tally Prime",
        duration: "2 Weeks",
        use: "Business accounting & GST",
      },
    ],
  },
];

const CoursesModal = ({ open, onClose, setEnrollOpen }: ICurriculamModal) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#111827] text-white w-[90%] max-w-4xl h-[85vh] flex flex-col p-6 rounded-2xl"
      >
        {/* Header */}
        <div className="flex-shrink-0 flex justify-between items-center mb-6 sticky top-0 bg-[#111827] z-10">
          <h2 className="text-2xl font-bold">All Courses</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {/* Categories */}
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-8">
            {courses.map((section, i) => (
              <div key={i}>
                <h3 className="text-xl font-semibold mb-4 text-indigo-400">
                  {section.category}
                </h3>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {section.items.map((course, idx) => (
                    <div
                      key={idx}
                      className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition"
                    >
                      <h4 className="font-semibold text-lg">{course.name}</h4>

                      <p className="text-sm text-gray-400 mt-1">{course.use}</p>

                      <div className="mt-3 text-xs text-indigo-400">
                        ⏱ {course.duration}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => setEnrollOpen?.(true)}
          className="flex-shrink-0 mt-8 w-full bg-gradient-to-r from-indigo-500 to-purple-500 py-3 rounded-lg"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CoursesModal;
