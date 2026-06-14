"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Shield, Building2, ChevronRight } from "lucide-react";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

const plans = [
  {
    name: "Essentials",
    icon: Zap,
    color: "from-slate-500 to-slate-600",
    price: { monthly: 49, annual: 39 },
    currency: "SAR",
    period: "/month",
    description: "For families monitoring one parent with basic health conditions.",
    badge: null,
    features: [
      "1 patient profile",
      "Up to 5 family members",
      "Blood glucose & vitals tracking",
      "Medication reminders",
      "Daily health summary",
      "Emergency SOS (SMS only)",
      "7-day data history",
      "Email support",
    ],
    cta: "Start Free Trial",
    ctaVariant: "outline" as const,
  },
  {
    name: "Family Care",
    icon: Shield,
    color: "from-emerald-500 to-blue-600",
    price: { monthly: 149, annual: 119 },
    currency: "SAR",
    period: "/month",
    description: "Our most popular plan — complete care for the whole family.",
    badge: "Most Popular",
    features: [
      "Up to 3 patient profiles",
      "Unlimited family members",
      "AI predictive health insights",
      "Smart medication management",
      "Real-time emergency alerts (SMS, WhatsApp, Call)",
      "90-day trend reports",
      "Doctor-ready PDF exports",
      "Device integration (200+ devices)",
      "Arabic & English support",
      "Priority WhatsApp support",
      "Video consultation credits (2/month)",
    ],
    cta: "Start Free Trial",
    ctaVariant: "emerald" as const,
  },
  {
    name: "Enterprise",
    icon: Building2,
    color: "from-violet-500 to-purple-600",
    price: { monthly: null, annual: null },
    currency: "SAR",
    period: "",
    description: "For hospitals, clinics, and elder care facilities with custom needs.",
    badge: null,
    features: [
      "Unlimited patient profiles",
      "Multi-facility management",
      "EHR/EMR integrations (HL7, FHIR)",
      "Custom AI model training",
      "Dedicated account manager",
      "SLA uptime guarantees",
      "On-premise deployment option",
      "MOH compliance reporting",
      "Custom branding (white-label)",
      "24/7 phone & on-site support",
      "Staff training included",
    ],
    cta: "Contact Sales",
    ctaVariant: "secondary" as const,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07081f] via-[#0d0f30] to-[#07081f]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/05 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge variant="emerald" size="md" className="mb-5">
            Transparent Pricing
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5">
            Care without compromise.
            <br />
            <span className="text-gradient-light">Pricing without surprises.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8">
            Every plan includes a 30-day free trial. No credit card required. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 p-1 rounded-xl bg-white/06 border border-white/10">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                !annual ? "bg-white/12 text-white" : "text-slate-500 hover:text-slate-300"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                annual ? "bg-white/12 text-white" : "text-slate-500 hover:text-slate-300"
              }`}
            >
              Annual
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Plans grid */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const isPopular = !!plan.badge;
            const price = annual ? plan.price.annual : plan.price.monthly;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-3xl p-8 flex flex-col ${
                  isPopular
                    ? "bg-gradient-to-b from-[#0e1535] to-[#0a0c26] border-2 border-emerald-500/40 shadow-2xl shadow-emerald-500/10"
                    : "glass-dark border border-white/08"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-xs font-bold shadow-lg shadow-emerald-500/30">
                      ✦ Most Popular
                    </span>
                  </div>
                )}

                {/* Icon + name */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className="w-5.5 h-5.5 text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  {price !== null ? (
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-bold text-white">{price}</span>
                      <span className="text-lg text-slate-400 pb-0.5">{plan.currency}</span>
                      <span className="text-sm text-slate-500 pb-1">{plan.period}</span>
                    </div>
                  ) : (
                    <div className="text-3xl font-bold text-white">Custom</div>
                  )}
                  {price !== null && annual && (
                    <p className="text-xs text-slate-500 mt-1">
                      Billed annually · {Math.round((1 - plan.price.annual! / plan.price.monthly!) * 100)}% saved
                    </p>
                  )}
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">{plan.description}</p>

                <Button
                  variant={plan.ctaVariant}
                  size="md"
                  className="w-full justify-center mb-6"
                >
                  {plan.cta}
                  <ChevronRight className="w-4 h-4" />
                </Button>

                {/* Features */}
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    What&apos;s included
                  </p>
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-slate-500 mt-12"
        >
          All prices in Saudi Riyals (SAR) · VAT may apply · Prices subject to change with notice
          <br />
          Payments accepted: Mada, Visa, Mastercard, Apple Pay, STC Pay
        </motion.p>
      </div>
    </section>
  );
}
