"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  Cpu,
  Bell,
  HeartPulse,
} from "lucide-react";
import Badge from "./ui/Badge";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    color: "from-blue-500 to-indigo-600",
    glow: "shadow-blue-500/25",
    title: "Set Up in Minutes",
    description:
      "Create a patient profile for your parent in under 5 minutes. Add their conditions, medications, emergency contacts, and care team members. No technical expertise required.",
    highlights: ["5-minute setup", "Import from hospital records", "Works in Arabic & English"],
  },
  {
    number: "02",
    icon: Cpu,
    color: "from-emerald-500 to-teal-600",
    glow: "shadow-emerald-500/25",
    title: "Connect Health Devices",
    description:
      "CareGuard integrates with 200+ FDA-cleared devices — glucometers, blood pressure monitors, smartwatches, and pulse oximeters. Data syncs automatically via Bluetooth or Wi-Fi.",
    highlights: ["200+ compatible devices", "Auto-sync via Bluetooth", "FDA-cleared integrations"],
  },
  {
    number: "03",
    icon: Bell,
    color: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/25",
    title: "Stay Informed — Effortlessly",
    description:
      "Your family receives personalized summaries each morning, instant alerts when values cross thresholds, and weekly AI-generated health reports — all translated into plain language.",
    highlights: ["Daily health summaries", "Threshold-based alerts", "Plain-language AI reports"],
  },
  {
    number: "04",
    icon: HeartPulse,
    color: "from-rose-500 to-red-600",
    glow: "shadow-rose-500/25",
    title: "Act with Confidence",
    description:
      "When something changes, CareGuard guides the right action — whether that's adjusting a meal plan, contacting the doctor, or dispatching emergency services. Care made simple.",
    highlights: ["Guided action protocols", "Doctor coordination", "SOS emergency dispatch"],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07081f] to-[#0a0c28]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge variant="emerald" size="md" className="mb-5">
            How It Works
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5">
            From sign-up to
            <br />
            <span className="text-gradient-light">peace of mind in 4 steps</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            CareGuard is built for families, not IT departments. Get started today —
            no training needed.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+1px)] right-[calc(12.5%+1px)] h-px">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-emerald-500/30 to-violet-500/0" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div className="relative mb-8">
                    <div
                      className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl ${step.glow} mb-0`}
                    >
                      <Icon className="w-9 h-9 text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-7 h-7 rounded-xl bg-[#0d0e2b] border border-white/15 flex items-center justify-center">
                      <span className="text-xs font-bold text-slate-400">{step.number}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">{step.description}</p>

                  <div className="flex flex-col gap-2 w-full">
                    {step.highlights.map((h) => (
                      <div
                        key={h}
                        className="flex items-center gap-2 justify-center text-xs text-slate-400"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 glass-dark rounded-3xl border border-white/08 p-10 text-center"
        >
          <p className="text-xl font-semibold text-white mb-2">
            Set up takes less time than a cup of coffee ☕
          </p>
          <p className="text-slate-400 mb-6">
            Join 2,400+ Saudi families who started with a free trial and never looked back.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all"
            >
              Start Free Trial — No Card Required
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/15 text-slate-300 font-semibold text-sm hover:bg-white/05 hover:text-white transition-all"
            >
              Talk to our team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
