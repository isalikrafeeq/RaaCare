import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing — CareGuard",
  description:
    "Simple, transparent pricing for every family. Start free for 30 days. Plans from 49 SAR/month. No contracts, no surprises.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-24">
        <Pricing />
      </div>
      <Footer />
    </main>
  );
}
