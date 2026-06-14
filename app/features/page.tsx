import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import DashboardShowcase from "@/components/DashboardShowcase";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Features — CareGuard",
  description:
    "Explore CareGuard's full feature set: diabetes tracking, medication reminders, emergency alerts, caregiver updates, AI health insights, and a unified family dashboard.",
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-24">
        <Features />
        <DashboardShowcase />
      </div>
      <Footer />
    </main>
  );
}
