"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Heart,
  Droplets,
  Pill,
  Bell,
  TrendingUp,
  TrendingDown,
  ChevronRight,
  Star,
  CheckCircle2,
  Wifi,
} from "lucide-react";
import Button from "./ui/Button";
import Badge from "./ui/Badge";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

function GlucoseChart() {
  const points = [82, 95, 110, 142, 128, 115, 108, 118, 130, 121, 112, 105];
  const max = 160;
  const min = 60;
  const range = max - min;
  const width = 220;
  const height = 80;

  const svgPoints = points
    .map((val, i) => {
      const x = (i / (points.length - 1)) * width;
      const y = height - ((val - min) / range) * height;
      return `${x},${y}`;
    })
    .join(" ");

  const areaPoints = `0,${height} ${svgPoints} ${width},${height}`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill="url(#chartGrad)" />
      <polyline
        points={svgPoints}
        fill="none"
        stroke="#10b981"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {points.map((val, i) => {
        const x = (i / (points.length - 1)) * width;
        const y = height - ((val - min) / range) * height;
        return i === points.length - 1 ? (
          <circle key={i} cx={x} cy={y} r={4} fill="#10b981" />
        ) : null;
      })}
    </svg>
  );
}

function HeartRateChart() {
  const beats = [0, 0.3, 0.6, 1, 0.6, 0.2, -0.2, 0, 0, 0.3, 0.6, 1, 0.6, 0.2, -0.2, 0];
  const width = 180;
  const height = 50;

  const svgPoints = beats
    .map((val, i) => {
      const x = (i / (beats.length - 1)) * width;
      const y = height / 2 - val * (height / 2 - 6);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      <polyline
        points={svgPoints}
        fill="none"
        stroke="#f43f5e"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/08 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div className="flex flex-col items-start">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mb-6"
            >
              <Badge variant="emerald" size="md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                Trusted by 2,400+ Saudi Families
              </Badge>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-white mb-6"
            >
              Care for Your
              <br />
              <span className="relative">
                <span className="text-gradient-light">Parents</span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] w-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
              <br />
              From Anywhere
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-lg text-slate-400 leading-relaxed max-w-lg mb-8"
            >
              CareGuard gives Saudi families real-time visibility into their elderly
              parents&apos; health — blood glucose, medication adherence, vital signs,
              and emergency alerts — all on one intelligent dashboard.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button size="lg" variant="emerald">
                Start Free 30-Day Trial
                <ChevronRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="secondary">
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row gap-6"
            >
              {[
                { icon: CheckCircle2, text: "No hardware required" },
                { icon: CheckCircle2, text: "HIPAA-compliant & secure" },
                { icon: CheckCircle2, text: "Arabic & English support" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-slate-400">
                  <Icon className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  {text}
                </div>
              ))}
            </motion.div>

            {/* Social proof */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-10 flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {["bg-blue-500", "bg-emerald-500", "bg-violet-500", "bg-amber-500", "bg-rose-500"].map(
                  (color, i) => (
                    <div
                      key={i}
                      className={`w-9 h-9 rounded-full ${color} border-2 border-[#07081f] flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {["KA", "SA", "NA", "FR", "AM"][i]}
                    </div>
                  )
                )}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1 text-sm font-semibold text-white">4.9</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">From 800+ verified reviews</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative animate-float mt-8 lg:mt-0"
          >
            {/* Main dashboard card */}
            <div className="relative glass-dark rounded-3xl p-6 shadow-2xl border border-white/08">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-1">
                    Patient Overview
                  </p>
                  <h3 className="text-white font-semibold text-lg">Ahmad Al-Rashid, 72</h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/25">
                    <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-xs font-medium text-emerald-400">Live</span>
                  </div>
                </div>
              </div>

              {/* Vital cards row */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {[
                  {
                    icon: Droplets,
                    label: "Blood Glucose",
                    value: "112",
                    unit: "mg/dL",
                    status: "normal",
                    color: "text-emerald-400",
                    bg: "bg-emerald-500/10",
                    border: "border-emerald-500/20",
                    trend: TrendingDown,
                    trendColor: "text-emerald-400",
                    change: "-8",
                  },
                  {
                    icon: Heart,
                    label: "Heart Rate",
                    value: "74",
                    unit: "bpm",
                    status: "normal",
                    color: "text-rose-400",
                    bg: "bg-rose-500/10",
                    border: "border-rose-500/20",
                    trend: TrendingUp,
                    trendColor: "text-slate-400",
                    change: "+2",
                  },
                  {
                    icon: Activity,
                    label: "Blood Pressure",
                    value: "128/82",
                    unit: "mmHg",
                    status: "watch",
                    color: "text-amber-400",
                    bg: "bg-amber-500/10",
                    border: "border-amber-500/20",
                    trend: TrendingUp,
                    trendColor: "text-amber-400",
                    change: "+5",
                  },
                ].map(({ icon: Icon, label, value, unit, color, bg, border, trend: Trend, trendColor, change }) => (
                  <div
                    key={label}
                    className={`${bg} border ${border} rounded-2xl p-3 flex flex-col gap-2`}
                  >
                    <div className="flex items-center justify-between">
                      <Icon className={`w-4 h-4 ${color}`} />
                      <div className={`flex items-center gap-0.5 ${trendColor}`}>
                        <Trend className="w-3 h-3" />
                        <span className="text-xs">{change}</span>
                      </div>
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${color} leading-none`}>{value}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{unit}</p>
                    </div>
                    <p className="text-xs text-slate-400 truncate">{label}</p>
                  </div>
                ))}
              </div>

              {/* Glucose chart */}
              <div className="rounded-2xl bg-white/04 border border-white/07 p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-xs font-medium text-slate-400">Glucose — 24h Trend</p>
                    <p className="text-sm font-semibold text-white mt-0.5">Avg 118 mg/dL · In range 87%</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-lg bg-emerald-500/15 text-emerald-400 font-medium">
                    Good
                  </span>
                </div>
                <div className="h-20">
                  <GlucoseChart />
                </div>
                <div className="flex items-center justify-between mt-2 text-xs text-slate-600">
                  <span>12:00 AM</span>
                  <span>Now</span>
                </div>
              </div>

              {/* Medications row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center">
                    <Pill className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white">Metformin 500mg</p>
                    <p className="text-xs text-slate-500">Next dose: 1:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs text-emerald-400 font-medium">Taken</span>
                </div>
              </div>
            </div>

            {/* Floating alert card */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="hidden sm:block absolute -bottom-6 -left-8 glass-dark border border-white/08 rounded-2xl p-4 shadow-xl w-56"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                  <Bell className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Medication Reminder</p>
                  <p className="text-xs text-slate-400 mt-0.5">Evening insulin due in 45 min</p>
                  <p className="text-xs text-amber-400 mt-1 font-medium">Remind caregiver →</p>
                </div>
              </div>
            </motion.div>

            {/* Floating family card */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="hidden sm:block absolute -top-6 -right-6 glass-dark border border-white/08 rounded-2xl p-4 shadow-xl w-48"
            >
              <p className="text-xs font-semibold text-white mb-3">Family Connected</p>
              <div className="flex flex-col gap-2">
                {[
                  { name: "Fatima", status: "Viewing now", color: "bg-emerald-500" },
                  { name: "Mohammed", status: "Last seen 2h ago", color: "bg-blue-500" },
                ].map(({ name, status, color }) => (
                  <div key={name} className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full ${color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                      {name[0]}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white leading-none">{name}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07081f] to-transparent pointer-events-none" />
    </section>
  );
}
