"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Pill,
  Bell,
  AlertTriangle,
  Users,
  LineChart,
  ArrowRight,
} from "lucide-react";
import Badge from "./ui/Badge";

const features = [
  {
    icon: Droplets,
    color: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/20",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    accent: "text-emerald-400",
    badge: "Real-time",
    title: "Diabetes & Glucose Tracking",
    description:
      "Continuous blood glucose monitoring with trend analysis, HbA1c insights, and automatic alerts when levels go outside safe ranges. Powered by AI pattern recognition.",
    metrics: [
      { label: "Avg response", value: "< 30s" },
      { label: "Accuracy", value: "99.2%" },
    ],
    visual: (
      <div className="flex items-end gap-1 h-12 mt-3">
        {[65, 85, 72, 90, 110, 128, 118, 105, 112, 108].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-emerald-500/60 to-emerald-400/30"
            style={{ height: `${(h / 130) * 100}%` }}
          />
        ))}
      </div>
    ),
  },
  {
    icon: Pill,
    color: "from-blue-500 to-indigo-500",
    glow: "shadow-blue-500/20",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    accent: "text-blue-400",
    badge: "AI-Powered",
    title: "Smart Medication Reminders",
    description:
      "Never miss a dose. CareGuard sends intelligent reminders to both patients and caregivers, tracks adherence history, and flags dangerous interactions.",
    metrics: [
      { label: "Adherence boost", value: "+67%" },
      { label: "Missed doses", value: "-89%" },
    ],
    visual: (
      <div className="flex flex-col gap-1.5 mt-3">
        {[
          { name: "Metformin 500mg", time: "8:00 AM", done: true },
          { name: "Insulin Glargine", time: "1:00 PM", done: true },
          { name: "Lisinopril 10mg", time: "8:00 PM", done: false },
        ].map(({ name, time, done }) => (
          <div key={name} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div
                className={`w-2.5 h-2.5 rounded-full ${done ? "bg-emerald-400" : "bg-slate-600 border border-slate-500"}`}
              />
              <span className={done ? "text-slate-300" : "text-slate-500"}>{name}</span>
            </div>
            <span className={done ? "text-slate-500" : "text-blue-400 font-medium"}>{time}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Bell,
    color: "from-violet-500 to-purple-500",
    glow: "shadow-violet-500/20",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    accent: "text-violet-400",
    badge: "Multi-channel",
    title: "Caregiver Updates",
    description:
      "Keep your entire care team — nurses, doctors, and family members — synchronized with automated health reports, shift notes, and real-time condition updates.",
    metrics: [
      { label: "Care team size", value: "Up to 12" },
      { label: "Update delay", value: "< 5s" },
    ],
    visual: (
      <div className="flex gap-2 mt-3">
        {["SMS", "WhatsApp", "Email", "App"].map((ch) => (
          <span
            key={ch}
            className="text-xs px-2 py-1 rounded-lg bg-violet-500/15 text-violet-300 border border-violet-500/20 font-medium"
          >
            {ch}
          </span>
        ))}
      </div>
    ),
  },
  {
    icon: AlertTriangle,
    color: "from-red-500 to-rose-500",
    glow: "shadow-red-500/20",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    accent: "text-rose-400",
    badge: "Life-Saving",
    title: "Emergency Alert System",
    description:
      "Instant SOS alerts with GPS location sent to pre-configured emergency contacts and local emergency services when a critical health event is detected.",
    metrics: [
      { label: "Alert speed", value: "< 10s" },
      { label: "Response rate", value: "100%" },
    ],
    visual: (
      <div className="flex items-center gap-3 mt-3">
        <div className="w-8 h-8 rounded-full bg-red-500/25 border-2 border-red-500/50 flex items-center justify-center animate-pulse-glow">
          <AlertTriangle className="w-4 h-4 text-red-400" />
        </div>
        <div>
          <p className="text-xs font-semibold text-white">SOS Triggered</p>
          <p className="text-xs text-red-400">Notifying 4 contacts…</p>
        </div>
      </div>
    ),
  },
  {
    icon: Users,
    color: "from-amber-500 to-orange-500",
    glow: "shadow-amber-500/20",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    accent: "text-amber-400",
    badge: "Family Hub",
    title: "Unified Family Dashboard",
    description:
      "One shared view for your entire family. Everyone gets role-based access to stay informed — parents get summaries, siblings track meals, and doctors see clinical data.",
    metrics: [
      { label: "Members", value: "Unlimited" },
      { label: "Data sync", value: "Real-time" },
    ],
    visual: (
      <div className="flex -space-x-2 mt-3">
        {[
          { abbr: "FA", color: "bg-emerald-500", label: "Father" },
          { abbr: "MO", color: "bg-blue-500", label: "Mother" },
          { abbr: "SO", color: "bg-violet-500", label: "Son" },
          { abbr: "DA", color: "bg-amber-500", label: "Daughter" },
          { abbr: "+3", color: "bg-slate-700", label: "More" },
        ].map(({ abbr, color }) => (
          <div
            key={abbr}
            className={`w-8 h-8 rounded-full ${color} border-2 border-[#0d0e2b] flex items-center justify-center text-white text-xs font-bold`}
          >
            {abbr}
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: LineChart,
    color: "from-cyan-500 to-sky-500",
    glow: "shadow-cyan-500/20",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    accent: "text-cyan-400",
    badge: "Predictive AI",
    title: "AI Health Insights",
    description:
      "Machine learning models trained on 50M+ patient records predict health deterioration 72 hours in advance, enabling proactive care before crises occur.",
    metrics: [
      { label: "Prediction window", value: "72 hrs" },
      { label: "Precision", value: "94.7%" },
    ],
    visual: (
      <div className="flex items-center gap-2 mt-3 text-xs">
        <div className="px-2 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/20">
          ↑ Glucose rising
        </div>
        <div className="px-2 py-1 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/20">
          ⚠ Dehydration risk
        </div>
      </div>
    ),
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Features() {
  return (
    <section id="features" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07081f] via-[#080a24] to-[#07081f]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge variant="navy" size="md" className="mb-5">
            Platform Features
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5">
            Everything your family needs
            <br />
            <span className="text-gradient-light">to care confidently</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            CareGuard combines clinical-grade monitoring with consumer-grade simplicity —
            giving families the same tools top hospitals use, without the complexity.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={cardVariants}
                className={`relative glass-dark rounded-3xl p-6 border ${f.border} card-hover group cursor-pointer`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-5 shadow-lg ${f.glow}`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <Badge variant="default" size="sm" className="mb-3">
                  {f.badge}
                </Badge>

                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.description}</p>

                {/* Visual */}
                <div className={`mt-4 rounded-xl ${f.bg} border ${f.border} p-3`}>
                  {f.visual}
                </div>

                {/* Metrics */}
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/06">
                  {f.metrics.map(({ label, value }) => (
                    <div key={label}>
                      <p className={`text-lg font-bold ${f.accent}`}>{value}</p>
                      <p className="text-xs text-slate-500">{label}</p>
                    </div>
                  ))}
                  <div className="ml-auto">
                    <ArrowRight
                      className={`w-4 h-4 ${f.accent} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
