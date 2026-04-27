import { Target, BarChart3, Zap, Shield, Users, Globe } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "استهداف دقيق",
    desc: "نحدد جمهورك المثالي بناءً على الاهتمامات والسلوك والموقع الجغرافي.",
  },
  {
    icon: BarChart3,
    title: "تحليلات متقدمة",
    desc: "تقارير تفصيلية وشفافة تتيح لك متابعة أداء حملاتك في أي وقت.",
  },
  {
    icon: Zap,
    title: "نتائج سريعة",
    desc: "إطلاق الحملات خلال 48 ساعة وبدء استقبال العملاء فوراً.",
  },
  {
    icon: Shield,
    title: "حماية الميزانية",
    desc: "استراتيجيات ذكية لتقليل التكلفة لكل نقرة وزيادة العائد.",
  },
  {
    icon: Users,
    title: "خبراء معتمدون",
    desc: "فريق من المختصين الحاصلين على شهادات Google Ads الرسمية.",
  },
  {
    icon: Globe,
    title: "تغطية شاملة",
    desc: "حملات على بحث جوجل، يوتيوب، خرائط جوجل، وشبكة العرض.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-y border-border bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
            لماذا تختارنا؟
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            نقدم خدمة متكاملة لإدارة حملاتك الإعلانية باحترافية ونتائج قابلة للقياس.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft transition-smooth group-hover:shadow-glow">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
