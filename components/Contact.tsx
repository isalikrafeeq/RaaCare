"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07081f] to-[#060718]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="glass" size="md" className="mb-5">
            Get In Touch
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5">
            We&apos;d love to help
            <br />
            <span className="text-gradient-light">your family</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Whether you have questions, want a personalized demo, or need help getting started —
            our team responds within 2 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {[
              {
                icon: Phone,
                color: "text-emerald-400",
                bg: "bg-emerald-500/10",
                label: "Call Us",
                value: "+966 11 234 5678",
                sub: "Sat–Thu, 8 AM – 10 PM",
              },
              {
                icon: Mail,
                color: "text-blue-400",
                bg: "bg-blue-500/10",
                label: "Email",
                value: "hello@careguard.sa",
                sub: "Replies within 2 hours",
              },
              {
                icon: MapPin,
                color: "text-violet-400",
                bg: "bg-violet-500/10",
                label: "Office",
                value: "King Abdullah Financial District",
                sub: "Riyadh, Saudi Arabia",
              },
              {
                icon: Clock,
                color: "text-amber-400",
                bg: "bg-amber-500/10",
                label: "Support Hours",
                value: "24/7 Emergency Line",
                sub: "Standard: Sat–Thu 8 AM–10 PM",
              },
            ].map(({ icon: Icon, color, bg, label, value, sub }) => (
              <div key={label} className="flex items-start gap-4">
                <div className={`w-11 h-11 rounded-2xl ${bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm font-semibold text-white">{value}</p>
                  <p className="text-xs text-slate-500">{sub}</p>
                </div>
              </div>
            ))}

            {/* WhatsApp */}
            <div className="mt-2 p-5 rounded-2xl bg-emerald-500/08 border border-emerald-500/20">
              <p className="text-sm font-semibold text-emerald-400 mb-1">WhatsApp Support</p>
              <p className="text-xs text-slate-400 mb-3">
                Prefer to chat? Message us on WhatsApp and get a response in minutes from our
                Arabic-speaking team.
              </p>
              <a
                href="https://wa.me/966112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Open WhatsApp →
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-dark rounded-3xl border border-white/08 p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Received!</h3>
                  <p className="text-slate-400 max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 2 hours via
                    email or phone.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", phone: "", message: "" });
                    }}
                    className="mt-6 text-sm text-emerald-400 hover:text-emerald-300 font-medium"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Ahmad Al-Rashid"
                        className="w-full px-4 py-3 rounded-xl bg-white/05 border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-emerald-500/50 focus:bg-white/08 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="ahmad@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/05 border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-emerald-500/50 focus:bg-white/08 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Phone / WhatsApp
                    </label>
                    <div className="flex">
                      <span className="flex items-center px-4 rounded-l-xl bg-white/04 border border-r-0 border-white/10 text-slate-400 text-sm">
                        +966
                      </span>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="55 123 4567"
                        className="flex-1 px-4 py-3 rounded-r-xl bg-white/05 border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-emerald-500/50 focus:bg-white/08 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell us about your family's situation and what you're looking for..."
                      className="w-full px-4 py-3 rounded-xl bg-white/05 border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-emerald-500/50 focus:bg-white/08 transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="emerald"
                    size="lg"
                    loading={loading}
                    className="w-full justify-center"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </Button>

                  <p className="text-xs text-slate-600 text-center">
                    By submitting, you agree to our{" "}
                    <a href="#" className="text-slate-500 hover:text-slate-400 underline">
                      Privacy Policy
                    </a>
                    . We never share your data.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
