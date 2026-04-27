import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Steps } from "@/components/landing/Steps";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "وكالة تشويش - Tashweesh Agency | إدارة إعلانات جوجل الاحترافية" },
      {
        name: "description",
        content:
          "وكالة تشويش (Tashweesh Agency): متخصصون في إدارة حملات Google Ads. تحليل، إعداد، إطلاق، وتحسين مستمر. ضاعف مبيعاتك مع خبراء معتمدين.",
      },
      { property: "og:title", content: "وكالة تشويش - إدارة إعلانات جوجل الاحترافية" },
      {
        property: "og:description",
        content: "ضاعف مبيعاتك مع وكالة تشويش، متخصصون في إدارة حملات Google Ads. استشارة مجانية.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-background">
      <div className="bg-[#f97316] text-white text-center py-2.5 text-sm font-medium">
        أهلاً بك في وكالة تشويش! شريكك الموثوق لنجاح إعلاناتك 🚀
      </div>
      <div className="bg-[#fff7ed] text-[#9a3412] text-center py-3 text-lg font-bold border-b border-[#fed7aa]">
        مرحباً بك! هذه هي الجملة الترحيبية الجديدة التي أضفناها.
      </div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Steps />
        <ContactForm />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
