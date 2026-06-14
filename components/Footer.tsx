"use client";

import { Shield, Heart, Share2, Globe, MessageCircle, Play } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Device Integrations", href: "#" },
    { label: "API Docs", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
    { label: "Partners", href: "#" },
  ],
  "Legal & Security": [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "HIPAA Compliance", href: "#" },
    { label: "Security Overview", href: "#" },
    { label: "Data Processing", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Getting Started", href: "#" },
    { label: "Device Setup", href: "#" },
    { label: "WhatsApp Support", href: "#" },
    { label: "Status Page", href: "#" },
    { label: "Community Forum", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/07 bg-[#060718]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand column */}
          <div className="col-span-2">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Care<span className="text-emerald-400">Guard</span>
              </span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              Helping Saudi families care for elderly parents with chronic conditions — with
              real-time monitoring, AI insights, and peace of mind.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                { icon: Share2, href: "#", label: "X (Twitter)" },
                { icon: Globe, href: "#", label: "LinkedIn" },
                { icon: MessageCircle, href: "#", label: "Instagram" },
                { icon: Play, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/06 hover:bg-white/12 border border-white/08 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* App store badges */}
            <div className="flex items-center gap-3 mt-5">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/06 border border-white/08 hover:bg-white/10 transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.19 1.32-2.17 3.93.03 3.12 2.69 4.16 2.71 4.17l-.09.48zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <p className="text-xs text-slate-500 leading-none">Download on the</p>
                  <p className="text-xs font-semibold text-white leading-tight">App Store</p>
                </div>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/06 border border-white/08 hover:bg-white/10 transition-colors cursor-pointer">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M3.18 23.86a2 2 0 001.1-.32l12.3-7.1-2.68-2.68-10.72 10.1z" fill="#EA4335" />
                  <path d="M20.82 9.45L17.58 7.6 14.64 10.5l3.01 3.01 3.19-1.85a1.5 1.5 0 000-2.21z" fill="#FBBC04" />
                  <path d="M3.18.14A2 2 0 001 2.02v19.96a2 2 0 002.18 1.88l11.78-11.07L3.18.14z" fill="#4285F4" />
                  <path d="M14.64 10.5L3.18.14a2 2 0 00-1.1.32L13.9 12.5l.74-.74 2.94-1.26z" fill="#34A853" />
                </svg>
                <div>
                  <p className="text-xs text-slate-500 leading-none">Get it on</p>
                  <p className="text-xs font-semibold text-white leading-tight">Google Play</p>
                </div>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="border-t border-white/07 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { label: "MOH Approved", color: "text-emerald-400", border: "border-emerald-500/25", bg: "bg-emerald-500/08" },
              { label: "SFDA Registered", color: "text-blue-400", border: "border-blue-500/25", bg: "bg-blue-500/08" },
              { label: "HIPAA Compliant", color: "text-violet-400", border: "border-violet-500/25", bg: "bg-violet-500/08" },
              { label: "ISO 27001", color: "text-amber-400", border: "border-amber-500/25", bg: "bg-amber-500/08" },
              { label: "256-bit Encrypted", color: "text-rose-400", border: "border-rose-500/25", bg: "bg-rose-500/08" },
              { label: "GDPR Ready", color: "text-cyan-400", border: "border-cyan-500/25", bg: "bg-cyan-500/08" },
            ].map(({ label, color, border, bg }) => (
              <div
                key={label}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl ${bg} border ${border} text-xs font-semibold ${color}`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${color.replace("text-", "bg-")}`} />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© 2025 CareGuard Technologies Co., Ltd. All rights reserved. Riyadh, Saudi Arabia.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for Saudi families
          </p>
        </div>
      </div>
    </footer>
  );
}
