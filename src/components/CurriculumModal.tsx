// CurriculumModal.tsx
import { useState } from "react";

const curriculumData = [
  {
    week: "Week 1-2",
    title: "HTML & CSS",
    topics: [
      "HTML Basics & Semantic Tags",
      "CSS Flexbox & Grid",
      "Responsive Design",
    ],
  },
  {
    week: "Week 3-4",
    title: "JavaScript",
    topics: [
      "Variables, Functions",
      "DOM Manipulation",
      "API Calls (fetch/axios)",
    ],
  },
  {
    week: "Week 5-6",
    title: "React",
    topics: ["Components & Props", "Hooks (useState, useEffect)", "Routing"],
  },
  {
    week: "Week 7",
    title: "Backend (Go)",
    topics: ["REST APIs", "Database Connection", "Authentication Basics"],
  },
  {
    week: "Week 8",
    title: "Projects & Deployment",
    topics: ["Full Stack Project", "Deploy to Server", "Interview Preparation"],
  },
];

export interface ICurriculamModal {
  open: boolean;
  onClose: () => void;
  setEnrollOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const CurriculumModal = ({
  open,
  onClose,
  setEnrollOpen,
}: ICurriculamModal) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#111827] text-white p-6 rounded-2xl w-[90%] max-w-2xl h-[80vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex-shrink-0 flex justify-between items-center mb-4 sticky top-0 bg-[#111827] z-10">
          <h2 className="text-2xl font-bold">Course Curriculum</h2>
          <button onClick={onClose} className="cursor-pointer">✕</button>
        </div>

        {/* Accordion */}
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-3">
            {curriculumData.map((item, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-lg overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full text-left p-4 bg-white/5 hover:bg-white/10 flex justify-between items-center"
                >
                  <div>
                    <p className="text-sm text-indigo-400">{item.week}</p>
                    <p className="font-semibold">{item.title}</p>
                  </div>

                  <span>{activeIndex === index ? "-" : "+"}</span>
                </button>

                {/* Content */}
                {activeIndex === index && (
                  <div className="p-4 space-y-2 text-gray-300">
                    {item.topics.map((topic, i) => (
                      <p key={i} className="text-left">
                        ✔ {topic}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => setEnrollOpen?.(true)}
          className="flex-shrink-0 mt-6 w-full bg-gradient-to-r from-indigo-500 to-purple-500 py-2 rounded-lg cursor-pointer"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CurriculumModal;
