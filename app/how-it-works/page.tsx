import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How It Works — CareGuard",
  description:
    "Get started with CareGuard in 4 simple steps. Set up a patient profile, connect health devices, receive smart alerts, and care for your parents with confidence.",
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-24">
        <HowItWorks />
      </div>
      <Footer />
    </main>
  );
}
