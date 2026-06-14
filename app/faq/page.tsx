import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ — CareGuard",
  description:
    "Answers to common questions about CareGuard — device compatibility, MOH approval, data security, Arabic support, emergency alerts, and cancellation policy.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-24">
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
