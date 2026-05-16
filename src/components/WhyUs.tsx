import { motion } from "framer-motion";

export const WhyUs = () => {
  return (
    <section id="why" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-12">Why Choose CodeRise?</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          {
            title: "Real-World Projects",
            desc: "Work on real applications like full-stack websites, APIs, and dashboards to gain practical experience used in companies.",
          },
          {
            title: "Placement Support",
            desc: "Get guidance on resume building, interview preparation, and real-world problem solving to confidently crack job opportunities.",
          },
          {
            title: "Beginner Friendly",
            desc: "Start from basics with step-by-step guidance, clear explanations, and structured learning designed for complete beginners.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="bg-white/5 p-6 rounded-xl border border-white/10 text-left"
          >
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

            <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
