import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Phone,
  User,
  BookOpen,
} from "lucide-react";

import type { ICurriculamModal } from "./CurriculumModal";

const EnrollModal: React.FC<ICurriculamModal> = ({
  open,
  onClose,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");

  const [showDropdown, setShowDropdown] =
    useState(false);

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    course: "",
  });

  const courses = [
    "Full Stack Development",
    "Backend Development",
    "Python Programming",
    "MS Office & Tally",
    "UI / UX Design",
    "React Development",
    "Go Backend Development",
    "Java Programming",
  ];

  if (!open) return null;

  // =========================
  // Close Modal
  // =========================

  const handleOnClose = () => {
    setErrors({
      name: "",
      phone: "",
      course: "",
    });

    setName("");
    setPhone("");
    setCourse("");
    setShowDropdown(false);

    onClose();
  };

  // =========================
  // Validation
  // =========================

  const validateName = (value: string) => {
    if (!value.trim()) {
      return "Please enter your name";
    }

    if (value.trim().length < 3) {
      return "Name must be at least 3 characters";
    }

    return "";
  };

  const validatePhone = (value: string) => {
    if (!value.trim()) {
      return "Please enter your phone number";
    }

    if (!/^[6-9]\d{9}$/.test(value)) {
      return "Enter valid 10 digit number";
    }

    return "";
  };

  const validateCourse = (value: string) => {
    if (!value) {
      return "Please select a course";
    }

    return "";
  };

  const validate = () => {
    const newErrors = {
      name: validateName(name),
      phone: validatePhone(phone),
      course: validateCourse(course),
    };

    setErrors(newErrors);

    return (
      !newErrors.name &&
      !newErrors.phone &&
      !newErrors.course
    );
  };

  // =========================
  // Submit
  // =========================

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!validate()) return;

    const message = `
🚀 New Student Enquiry

👤 Name: ${name}
📞 Phone: ${phone}
📚 Course: ${course}
    `;

    const whatsappNumber = "919488754780";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    handleOnClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOnClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-md overflow-visible rounded-3xl border border-white/10 bg-[#0F172A] shadow-[0_0_80px_rgba(99,102,241,0.25)]"
          >
            {/* Glow */}
            <div className="absolute -top-24 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />

            {/* Header */}
            <div className="relative border-b border-white/10 px-6 py-5">
              <button
                onClick={handleOnClose}
                className="absolute right-5 top-5 rounded-full bg-white/5 p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>

              <h2 className="text-2xl font-bold text-white">
                Enroll Now 🚀
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Start your journey towards becoming
                a modern developer
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-6"
            >
              {/* Name */}
              <div>
                <div
                  className={`flex items-center rounded-2xl border px-4 transition-all duration-300 ${
                    errors.name
                      ? "border-red-500 bg-red-500/10"
                      : "border-white/10 bg-white/5 hover:border-white/20 focus-within:border-indigo-500"
                  }`}
                >
                  <User
                    size={18}
                    className="mr-3 text-gray-400"
                  />

                  <input
                    value={name}
                    onChange={(e) => {
                      const value = e.target.value;

                      setName(value);

                      setErrors((prev) => ({
                        ...prev,
                        name: validateName(value),
                      }));
                    }}
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-transparent py-4 text-white placeholder-gray-500 outline-none"
                  />
                </div>

                {errors.name && (
                  <p className="mt-2 ml-1 text-xs text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <div
                  className={`flex items-center rounded-2xl border px-4 transition-all duration-300 ${
                    errors.phone
                      ? "border-red-500 bg-red-500/10"
                      : "border-white/10 bg-white/5 hover:border-white/20 focus-within:border-indigo-500"
                  }`}
                >
                  <Phone
                    size={18}
                    className="mr-3 text-gray-400"
                  />

                  <input
                    value={phone}
                    onChange={(e) => {
                      const value =
                        e.target.value.replace(
                          /\D/g,
                          ""
                        );

                      setPhone(value);

                      setErrors((prev) => ({
                        ...prev,
                        phone: validatePhone(value),
                      }));
                    }}
                    type="text"
                    maxLength={10}
                    placeholder="Enter phone number"
                    className="w-full bg-transparent py-4 text-white placeholder-gray-500 outline-none"
                  />
                </div>

                {errors.phone && (
                  <p className="mt-2 ml-1 text-xs text-red-400">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Course Dropdown */}
              <div className="relative">
                <div
                  onClick={() =>
                    setShowDropdown(
                      !showDropdown
                    )
                  }
                  className={`flex cursor-pointer items-center rounded-2xl border px-4 transition-all duration-300 ${
                    errors.course
                      ? "border-red-500 bg-red-500/10"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
                >
                  <BookOpen
                    size={18}
                    className="mr-3 text-gray-400"
                  />

                  <div className="flex flex-1 items-center py-4 text-left text-white">
                    {course || (
                      <span className="text-gray-500">
                        Select Course
                      </span>
                    )}
                  </div>

                  <motion.div
                    animate={{
                      rotate: showDropdown
                        ? 180
                        : 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="text-gray-400"
                  >
                    ▼
                  </motion.div>
                </div>

                {/* Dropdown */}
                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="absolute z-50 mt-3 max-h-45 w-full overflow-y-auto overflow-x-hidden rounded-2xl border border-white/10 bg-[#111827] shadow-2xl"
                    >
                      {courses.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => {
                            setCourse(item);

                            setErrors(
                              (prev) => ({
                                ...prev,
                                course: "",
                              })
                            );

                            setShowDropdown(
                              false
                            );
                          }}
                          className={`flex w-full items-center px-5 py-4 text-left text-sm transition-all duration-200 ${
                            course === item
                              ? "bg-indigo-500/20 text-indigo-300"
                              : "text-gray-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {errors.course && (
                  <p className="mt-2 ml-1 text-xs text-red-400">
                    {errors.course}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10">
                  Submit Enquiry
                </span>

                <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919488754780"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-sm text-green-400 transition hover:text-green-300"
              >
                Or Chat Directly on WhatsApp
              </a>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnrollModal;