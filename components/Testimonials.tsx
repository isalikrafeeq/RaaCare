"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Badge from "./ui/Badge";

const testimonials = [
  {
    name: "Fatima Al-Qahtani",
    role: "Daughter, Riyadh",
    avatar: "FA",
    avatarColor: "from-emerald-500 to-teal-600",
    rating: 5,
    text: "My father has Type 2 diabetes and lives alone since my mother passed. CareGuard has given me peace of mind I haven't felt in years. I see his glucose levels every morning with my coffee. When his blood sugar spiked at 2 AM last month, I got the alert instantly and called him. The app may have saved his life.",
    highlight: "Peace of mind I haven't felt in years",
    condition: "Father, 74 · Type 2 Diabetes",
  },
  {
    name: "Mohammed Al-Harbi",
    role: "Son, Jeddah",
    avatar: "MH",
    avatarColor: "from-blue-500 to-indigo-600",
    rating: 5,
    text: "My parents are in Taif and I'm working in Riyadh. Before CareGuard, I'd call them 3-4 times a day just to check in. Now I check the dashboard once and know everything — medications, vitals, activities. Our video calls are actually enjoyable now because they're not about health anxiety.",
    highlight: "Our video calls are actually enjoyable now",
    condition: "Both parents · Hypertension & Arthritis",
  },
  {
    name: "Dr. Nora Al-Shamrani",
    role: "Geriatric Physician, King Fahad Hospital",
    avatar: "NS",
    avatarColor: "from-violet-500 to-purple-600",
    rating: 5,
    text: "I recommend CareGuard to the families of my elderly diabetic patients. The 90-day glucose trend reports they bring to appointments are more detailed and accurate than what most patients track manually. It's changed how I manage chronic care — I can intervene proactively, not reactively.",
    highlight: "Changed how I manage chronic care",
    condition: "Geriatric Physician · 12 years experience",
  },
  {
    name: "Athar Andrabi",
    role: "Son, Dammam",
    avatar: "AA",
    avatarColor: "from-amber-500 to-orange-600",
    rating: 5,
    text: "The emergency alert feature saved my mother's life. She fell at 11 PM and couldn't reach the phone. CareGuard detected the abnormal heart rate pattern, sent me an alert, and I reached her within 20 minutes. The paramedics said another hour could have been critical. Absolutely invaluable.",
    highlight: "The emergency alert saved my mother's life",
    condition: "Mother, 69 · Atrial Fibrillation",
  },
  {
    name: "Rania Al-Mutairi",
    role: "Home Nurse, Riyadh",
    avatar: "RM",
    avatarColor: "from-rose-500 to-pink-600",
    rating: 5,
    text: "I care for four elderly patients and CareGuard is now part of every shift. The medication tracking alone has cut errors by more than half. When I hand off to another nurse, all the notes, vitals, and medication logs are right there. The family members trust me more because they can see everything I do.",
    highlight: "Medication errors cut by more than half",
    condition: "Professional Caregiver · 6 patients",
  },
  {
    name: "Abdullah Al-Otaibi",
    role: "Son, Mecca",
    avatar: "AO",
    avatarColor: "from-cyan-500 to-sky-600",
    rating: 5,
    text: "Both Arabic and English interface was a dealbreaker for us. My father reads Arabic, my wife uses English, and I switch between both. CareGuard handles all of it seamlessly. The customer support team is also exceptional — they helped us set up the glucometer integration in 15 minutes.",
    highlight: "Works perfectly in both Arabic and English",
    condition: "Father, 77 · Multiple chronic conditions",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c28] via-[#07081f] to-[#07081f]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="glass" size="md" className="mb-5">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            4.9 · 800+ Reviews
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5">
            Families trust us with
            <br />
            <span className="text-gradient-light">what matters most</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Real stories from Saudi families who use CareGuard to stay connected,
            informed, and ready to act.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass-dark rounded-3xl border border-white/07 p-6 flex flex-col card-hover"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-white/08 mb-4 flex-shrink-0" />

              {/* Highlight */}
              <p className="text-sm font-semibold text-emerald-400 mb-3 leading-snug">
                &ldquo;{t.highlight}&rdquo;
              </p>

              {/* Text */}
              <p className="text-sm text-slate-400 leading-relaxed flex-1">{t.text}</p>

              {/* Divider */}
              <div className="border-t border-white/07 mt-6 pt-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                  >
                    {t.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white truncate">{t.name}</p>
                    <p className="text-xs text-slate-500 truncate">{t.condition}</p>
                  </div>
                  <div className="flex items-center gap-0.5 flex-shrink-0">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex flex-wrap justify-center gap-8 text-sm text-slate-500"
        >
          {[
            "HIPAA Compliant",
            "ISO 27001 Certified",
            "MOH Saudi Arabia Approved",
            "256-bit Encryption",
            "GDPR Ready",
            "99.9% Uptime SLA",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
