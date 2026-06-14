"use client";

import { motion } from "framer-motion";
import { Users, Activity, Shield, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "2,400+",
    label: "Families Protected",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Activity,
    value: "18M+",
    label: "Vitals Monitored",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "Platform Uptime",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: Award,
    value: "4.9★",
    label: "Average Rating",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
];

export default function StatsBar() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#07081f] via-[#0d0f30] to-[#07081f]" />
      <div className="absolute inset-0 border-y border-white/05" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center gap-3"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center`}
                >
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
