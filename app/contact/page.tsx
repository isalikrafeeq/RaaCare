import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us — CareGuard",
  description:
    "Get in touch with the CareGuard team. Call, email, or WhatsApp us — we respond within 2 hours. Based in Riyadh, Saudi Arabia.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-24">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
