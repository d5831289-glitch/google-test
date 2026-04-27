import { Search, Settings2, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "التحليل",
    desc: "ندرس نشاطك التجاري، منافسيك، وجمهورك المستهدف بعمق لوضع استراتيجية مخصصة.",
  },
  {
    num: "02",
    icon: Settings2,
    title: "الإعداد",
    desc: "نُنشئ حملاتك بأفضل الممارسات: كلمات مفتاحية، إعلانات نصية، صفحات هبوط محسّنة.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "الإطلاق",
    desc: "نُطلق حملاتك بعد مراجعة دقيقة، ونتأكد من وصولها للجمهور الصحيح فوراً.",
  },
  {
    num: "04",
    icon: LineChart,
    title: "التحسين",
    desc: "متابعة يومية وتحسين مستمر للأداء بناءً على البيانات الفعلية لزيادة العائد.",
  },
];

export function Steps() {
  return (
    <section id="steps" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            منهجية عمل واضحة
          </div>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
            كيف نعمل معك؟
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            أربع خطوات بسيطة لتحويل ميزانيتك الإعلانية إلى نتائج حقيقية.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:shadow-elegant">
                <div className="absolute -left-2 -top-2 text-7xl font-black text-primary/5 select-none">
                  {step.num}
                </div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="mb-1 text-xs font-bold text-primary">الخطوة {step.num}</div>
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:absolute lg:top-12 lg:-left-3 lg:z-10 lg:block">
                  <div className="h-2 w-2 rounded-full bg-primary shadow-glow" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
