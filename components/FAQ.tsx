"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Badge from "./ui/Badge";

const faqs = [
  {
    question: "Is CareGuard approved by the Saudi Ministry of Health (MOH)?",
    answer:
      "Yes. CareGuard is registered with the Saudi Food and Drug Authority (SFDA) as a Class II medical device software. We comply with all MOH digital health regulations and participate in the Vision 2030 digital health initiative. Our data centers are located in Saudi Arabia to ensure health data sovereignty.",
  },
  {
    question: "What devices does CareGuard integrate with?",
    answer:
      "CareGuard integrates with 200+ health monitoring devices including glucometers (Accu-Chek, OneTouch, Freestyle), blood pressure monitors, pulse oximeters, smartwatches (Apple Watch, Samsung Galaxy Watch, Fitbit), and CGM devices (Dexcom, Libre). Devices connect via Bluetooth, Wi-Fi, or our mobile app. We add new device support monthly.",
  },
  {
    question: "How secure is my family's health data?",
    answer:
      "Security is our highest priority. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We are HIPAA compliant, ISO 27001 certified, and undergo quarterly penetration testing. Health data is stored exclusively in Saudi Arabia on AWS Riyadh servers. We never sell or share your data with third parties — not insurance companies, not pharmaceutical firms.",
  },
  {
    question: "Can multiple family members use the same account?",
    answer:
      "Yes. The Family Care plan supports unlimited family members. Each person gets a personalized role — administrator (full access), family viewer (health summaries), caregiver (clinical data access), and doctor (medical integration). Each person downloads the app, creates a profile, and is added by the administrator. There's no limit on family size.",
  },
  {
    question: "What happens during an emergency? How quickly are alerts sent?",
    answer:
      "When a critical event is detected — severe glucose levels (below 54 or above 350 mg/dL), irregular heart rate, a fall, or manual SOS press — CareGuard simultaneously sends push notifications, SMS messages, WhatsApp messages, and phone calls to all designated emergency contacts within 10 seconds. If the patient has pre-authorized it, we can also contact local emergency services (911) automatically.",
  },
  {
    question: "Does CareGuard work with Arabic language?",
    answer:
      "CareGuard is fully bilingual — Arabic and English — across all surfaces: the mobile app, web dashboard, email notifications, SMS alerts, and customer support. Elderly parents who prefer Arabic get an Arabic interface; family members or clinicians who prefer English can use it in English. Both languages can coexist on the same account.",
  },
  {
    question: "Do I need any medical or technical knowledge to use CareGuard?",
    answer:
      "None whatsoever. CareGuard is designed for families, not doctors. Our onboarding wizard guides you through every step in plain language. AI-generated insights are translated from clinical data into simple, actionable advice: 'Ahmad's glucose was higher than usual after dinner. Consider reducing rice portions or adding a short walk.' No medical training required.",
  },
  {
    question: "Can the elderly patient use CareGuard independently?",
    answer:
      "Absolutely. We offer a simplified 'Patient Mode' designed for elderly users — large fonts, simple navigation, voice commands in Arabic, and a prominent SOS button. The patient can log meals, check their own readings, set reminders, and communicate with family — all from a large-button interface designed with accessibility at its core.",
  },
  {
    question: "Is there a long-term contract? Can I cancel anytime?",
    answer:
      "No long-term contracts — ever. Monthly plans can be cancelled before the next billing date with no fees. Annual plans are billed upfront but we offer a pro-rated refund for unused months after the first 30 days. The 30-day free trial has absolutely no strings attached and requires no credit card.",
  },
  {
    question: "Does CareGuard replace my parent's doctor?",
    answer:
      "No, and it's important to understand this. CareGuard is a monitoring and coordination tool, not a medical provider. We help families stay informed and connected, but all medical decisions should be made by qualified healthcare professionals. We actually help you get more value from doctor appointments by providing data-driven reports that let doctors see 90 days of trend data in seconds.",
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className={`border border-white/07 rounded-2xl overflow-hidden transition-colors duration-200 ${
        open ? "bg-white/04" : "bg-white/02 hover:bg-white/03"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-white text-sm leading-snug pr-4">{question}</span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
            open ? "bg-emerald-500/20 text-emerald-400" : "bg-white/06 text-slate-400"
          }`}
        >
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 pb-5">
              <p className="text-sm text-slate-400 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07081f] via-[#090b22] to-[#07081f]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="navy" size="md" className="mb-5">
            FAQ
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5">
            Questions families ask
            <br />
            <span className="text-gradient-light">before they start</span>
          </h2>
          <p className="text-lg text-slate-400">
            Can&apos;t find your answer?{" "}
            <a href="#contact" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">
              Talk to our team
            </a>
            .
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} {...faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
