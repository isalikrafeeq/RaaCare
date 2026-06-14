"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Heart,
  Activity,
  Pill,
  Bell,
  TrendingDown,
  TrendingUp,
  Calendar,
  Users,
  CheckCircle,
  Clock,
  Wifi,
} from "lucide-react";
import Badge from "./ui/Badge";

function WeeklyGlucoseChart() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const avgGlucose = [108, 118, 131, 122, 115, 109, 112];
  const max = 160;
  const min = 70;
  const range = max - min;

  return (
    <div className="flex items-end gap-2 h-24">
      {days.map((day, i) => {
        const heightPct = ((avgGlucose[i] - min) / range) * 100;
        const isToday = i === 6;
        return (
          <div key={day} className="flex-1 flex flex-col items-center gap-1.5">
            <div className="w-full relative rounded-lg overflow-hidden" style={{ height: 80 }}>
              <div
                className={`absolute bottom-0 w-full rounded-lg transition-all duration-500 ${
                  isToday
                    ? "bg-gradient-to-t from-emerald-500 to-emerald-400"
                    : "bg-emerald-500/25"
                }`}
                style={{ height: `${heightPct}%` }}
              />
            </div>
            <span className={`text-xs ${isToday ? "text-emerald-400 font-semibold" : "text-slate-600"}`}>
              {day}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function BloodPressureChart() {
  const systolic = [125, 130, 135, 128, 132, 127, 128];
  const diastolic = [80, 84, 88, 82, 85, 81, 82];
  const width = 260;
  const height = 60;

  const sysPoints = systolic
    .map((v, i) => `${(i / 6) * width},${height - ((v - 70) / 80) * height}`)
    .join(" ");

  const diasPoints = diastolic
    .map((v, i) => `${(i / 6) * width},${height - ((v - 70) / 80) * height}`)
    .join(" ");

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full" style={{ height: 60 }}>
      <polyline points={sysPoints} fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinejoin="round" />
      <polyline points={diasPoints} fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export default function DashboardShowcase() {
  return (
    <section id="dashboard" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07081f] via-[#0a0c2a] to-[#07081f]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/05 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Dashboard UI */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main dashboard panel */}
            <div className="glass-dark rounded-3xl border border-white/08 p-6 shadow-2xl">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                    AR
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Ahmad Al-Rashid</p>
                    <p className="text-xs text-slate-500">72 years · Diabetic (Type 2)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/12 border border-emerald-500/20">
                  <Wifi className="w-3 h-3 text-emerald-400" />
                  <span className="text-xs text-emerald-400 font-medium">All systems normal</span>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                {[
                  { icon: Droplets, val: "112", unit: "mg/dL", label: "Glucose", color: "text-emerald-400", bg: "bg-emerald-500/10", trend: TrendingDown, trendColor: "text-emerald-400" },
                  { icon: Heart, val: "74", unit: "bpm", label: "Heart rate", color: "text-rose-400", bg: "bg-rose-500/10", trend: TrendingUp, trendColor: "text-slate-500" },
                  { icon: Activity, val: "128", unit: "systolic", label: "Blood pressure", color: "text-amber-400", bg: "bg-amber-500/10", trend: TrendingDown, trendColor: "text-emerald-400" },
                  { icon: Activity, val: "98%", unit: "SpO₂", label: "Oxygen", color: "text-blue-400", bg: "bg-blue-500/10", trend: TrendingUp, trendColor: "text-slate-500" },
                ].map(({ icon: Icon, val, unit, label, color, bg, trend: T, trendColor }) => (
                  <div key={label} className={`${bg} rounded-2xl p-3`}>
                    <Icon className={`w-4 h-4 ${color} mb-2`} />
                    <p className={`text-base font-bold ${color}`}>{val}</p>
                    <p className="text-xs text-slate-500 leading-tight mt-0.5">{unit}</p>
                    <div className={`flex items-center gap-0.5 mt-1 ${trendColor}`}>
                      <T className="w-3 h-3" />
                      <span className="text-xs">{label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Weekly glucose */}
              <div className="rounded-2xl bg-white/03 border border-white/06 p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-white">Weekly Glucose Average</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">Target: 70–140</span>
                    <span className="text-xs font-medium text-emerald-400">In range: 91%</span>
                  </div>
                </div>
                <WeeklyGlucoseChart />
              </div>

              {/* BP chart */}
              <div className="rounded-2xl bg-white/03 border border-white/06 p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-white">Blood Pressure — 7 Days</p>
                  <div className="flex items-center gap-3 text-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-0.5 bg-rose-400 rounded" />
                      <span className="text-slate-400">Systolic</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-0.5 bg-blue-400 rounded" />
                      <span className="text-slate-400">Diastolic</span>
                    </div>
                  </div>
                </div>
                <BloodPressureChart />
              </div>

              {/* Bottom row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/03 border border-white/06 p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Pill className="w-4 h-4 text-blue-400" />
                    <p className="text-xs font-semibold text-white">Medications Today</p>
                  </div>
                  {[
                    { name: "Metformin", status: "Taken 8 AM", done: true },
                    { name: "Insulin", status: "Due 1 PM", done: false },
                    { name: "Lisinopril", status: "Due 8 PM", done: false },
                  ].map(({ name, status, done }) => (
                    <div key={name} className="flex items-center gap-2 mb-1.5">
                      <CheckCircle className={`w-3.5 h-3.5 flex-shrink-0 ${done ? "text-emerald-400" : "text-slate-600"}`} />
                      <div>
                        <p className="text-xs text-slate-300 leading-none">{name}</p>
                        <p className="text-xs text-slate-600">{status}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-white/03 border border-white/06 p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-violet-400" />
                    <p className="text-xs font-semibold text-white">Care Team</p>
                  </div>
                  {[
                    { name: "Fatima (Daughter)", status: "Active now", color: "bg-emerald-500" },
                    { name: "Dr. Hassan", status: "Last seen 3h", color: "bg-blue-500" },
                    { name: "Nurse Rania", status: "Last seen 1h", color: "bg-violet-500" },
                  ].map(({ name, status, color }) => (
                    <div key={name} className="flex items-center gap-2 mb-1.5">
                      <div className={`w-5 h-5 rounded-full ${color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                        {name[0]}
                      </div>
                      <div>
                        <p className="text-xs text-slate-300 leading-none">{name}</p>
                        <p className="text-xs text-slate-600">{status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Side notification */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="absolute -right-4 top-1/3 glass-dark border border-amber-500/20 rounded-2xl p-4 w-52 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-2">
                <Bell className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-semibold text-white">Smart Alert</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Glucose trending upward after lunch — suggest reducing carb intake
              </p>
              <div className="mt-2 flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-600" />
                <span className="text-xs text-slate-600">Just now</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <Badge variant="navy" size="md" className="mb-6 self-start">
              Intelligent Dashboard
            </Badge>

            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Your parent&apos;s health,
              <br />
              <span className="text-gradient-light">always in focus</span>
            </h2>

            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              One unified dashboard brings together all vital signs, medications, appointments,
              and care team activity. Designed for clarity — not complexity.
            </p>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: Droplets,
                  color: "text-emerald-400",
                  bg: "bg-emerald-500/10",
                  title: "Continuous glucose visibility",
                  desc: "See blood sugar trends over hours, days, and weeks. Understand what meals or activities trigger spikes.",
                },
                {
                  icon: Calendar,
                  color: "text-blue-400",
                  bg: "bg-blue-500/10",
                  title: "Medication & appointment timeline",
                  desc: "A single chronological view of all doses taken, missed, and upcoming — plus doctor visits and lab results.",
                },
                {
                  icon: Users,
                  color: "text-violet-400",
                  bg: "bg-violet-500/10",
                  title: "Care team coordination",
                  desc: "Every family member and clinician sees the same data, reducing miscommunication and duplicate efforts.",
                },
              ].map(({ icon: Icon, color, bg, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-2xl ${bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">{title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/08">
              {[
                { value: "2,400+", label: "Active families" },
                { value: "4.9★", label: "App store rating" },
                { value: "99.9%", label: "Uptime SLA" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-bold text-gradient-light">{value}</p>
                  <p className="text-xs text-slate-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
