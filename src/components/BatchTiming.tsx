import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  X,
  Clock3,
  Coffee,
  CheckCircle2,
  XCircle,
} from "lucide-react";

interface IBatchTimingModal {
  open: boolean;
  onClose: () => void;
}

const weekdays = [
  {
    time: "7:00 AM - 9:00 AM",
    available: true,
  },
  {
    time: "9:00 AM - 11:00 AM",
    available: true,
  },
  {
    time: "11:00 AM - 1:00 PM",
    available: false,
  },
  {
    time: "3:00 PM - 5:00 PM",
    available: false,
  },
  {
    time: "5:00 PM - 7:00 PM",
    available: false,
  },
  {
    time: "7:00 PM - 9:00 PM",
    available: false,
  },
];

const weekends = [
  {
    time: "10:00 AM - 1:00 PM",
    available: true,
  },
  {
    time: "3:00 PM - 6:00 PM",
    available: true,
  },
  {
    time: "6:00 PM - 9:00 PM",
    available: true,
  },
];

const BatchTiming: React.FC<IBatchTimingModal> = ({
  open,
  onClose,
}) => {
  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0"
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.98,
            }}
            transition={{ duration: 0.2 }}
            className="
              relative
              flex
              max-h-[92vh]
              w-full
              max-w-4xl
              flex-col
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-[#0F172A]
              shadow-2xl
            "
          >
            {/* Glow */}
            <div className="absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

            {/* Header */}
            <div className="relative border-b border-white/10 px-5 py-5 sm:px-6 md:px-7">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-transparent" />

              <div className="relative flex items-start justify-between gap-4">
                {/* Left */}
                <div className="max-w-2xl">
                  <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl text-left">
                    Flexible
                    <span className="ml-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent text-left">
                      Batch Timings
                    </span>
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Choose a suitable batch timing for your daily
                    schedule. Designed for students and working
                    professionals.
                  </p>
                </div>

                {/* Close */}
                <button
                  onClick={onClose}
                  className="
                    mt-1
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    text-slate-400
                    transition-all
                    duration-200
                    hover:bg-white/[0.08]
                    hover:text-white
                  "
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6 md:px-7">
              {/* Cards */}
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <ScheduleCard
                  title="Monday - Friday"
                  subtitle="2 Hours per batch"
                  data={weekdays}
                  status="Available"
                />

                <ScheduleCard
                  title="Saturday & Sunday"
                  subtitle="3 Hours per batch"
                  data={weekends}
                  status="Available"
                />
              </div>

              {/* Bottom Info */}
              <div className="mt-6 rounded-3xl border border-orange-500/10 bg-orange-500/5 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10">
                    <Coffee
                      size={18}
                      className="text-orange-400"
                    />
                  </div>

                  <div>
                    <p className="font-medium text-orange-300">
                      Break Time
                    </p>

                    <p className="mt-1.5 text-sm text-slate-400">
                      1:00 PM - 3:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 text-center">
                <p className="text-xs text-slate-500 sm:text-sm">
                  New batches open every month • Limited seats
                  available
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

interface IScheduleCard {
  title: string;
  subtitle: string;
  status: string;
  data: {
    time: string;
    available: boolean;
  }[];
}

const ScheduleCard: React.FC<IScheduleCard> = ({
  title,
  subtitle,
  status,
  data,
}) => {

  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-5
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>

          <h3 className="text-left text-xl font-semibold text-white">
            {title}
          </h3>

          <p className="mt-1.5 text-left text-sm text-slate-400">
            {subtitle}
          </p>
        </div>

        <div
          className={`
            mt-0.5
            rounded-full
            px-3
            py-1
            text-xs
            font-medium
            ${
              status === "Available"
                ? "bg-green-500/10 text-green-400"
                : "bg-red-500/10 text-red-400"
            }
          `}
        >
          {status}
        </div>
      </div>

      {/* Slots */}
      <div className="mt-5 space-y-3">
        {data.map((item) => (
          <div
            key={item.time}
            className="
              flex
              items-center
              justify-between
              gap-4
              rounded-2xl
              border
              border-white/5
              bg-[#111827]
              px-4
              py-3.5
            "
          >
            {/* Left */}
            <div className="flex min-w-0 items-center gap-4">
              <div
                className={`
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  ${
                    item.available
                      ? "bg-green-500/10"
                      : "bg-red-500/10"
                  }
                `}
              >
                <Clock3
                  size={16}
                  className={
                    item.available
                      ? "text-green-400"
                      : "text-red-400"
                  }
                />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white">
                  {item.time}
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  Live session
                </p>
              </div>
            </div>

            {/* Status */}
            {item.available ? (
              <div className="flex shrink-0 items-center gap-1 rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-400">
                <CheckCircle2 size={12} />
                Available
              </div>
            ) : (
              <div className="flex shrink-0 items-center gap-1 rounded-full bg-red-500/10 px-2.5 py-1 text-xs font-medium text-red-400">
                <XCircle size={12} />
                Full
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BatchTiming;