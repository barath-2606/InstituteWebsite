import { useState } from "react";
import EnrollModal from "./EnrollModal";

export const CTA = () => {
  const [enrollOpen, setEnrollOpen] = useState(false);
  return (
    <section
      id="contact"
      className="py-24 px-6 text-center relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] top-0 left-1/2 -translate-x-1/2 z-0" />

      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Start Your Journey Today 🚀
        </h2>

        <p className="text-gray-400 mb-6 leading-relaxed mt-4">
          Take the first step towards your tech career. Learn with real-world
          projects, expert guidance, and a structured path designed to make you
          job-ready.
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mb-4 mt-2">
          <span>✔ Beginner Friendly</span>
          <span>✔ Real Projects</span>
          <span>✔ Placement Support</span>
          <span>✔ Flexible Learning</span>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mt-2 mb-4">
          <button onClick={() => setEnrollOpen(true)} className="bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-3 rounded-lg font-medium hover:opacity-90 cursor-pointer">
            Register Now
          </button>
        </div>

        {/* Trust / urgency */}
        <p className="text-xs text-gray-500 mt-6">
          Limited seats available • Batch starting soon
        </p>
      </div>
      <EnrollModal open={enrollOpen} onClose={() => setEnrollOpen(false)} />
    </section>
  );
};
