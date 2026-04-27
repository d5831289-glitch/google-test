import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            <span>شريك جوجل المعتمد للنمو السريع</span>
          </div>

          <h1 className="text-balance text-4xl font-extrabold leading-tight text-foreground md:text-6xl">
            ضاعف مبيعاتك مع{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              إدارة إعلانات جوجل
            </span>{" "}
            باحترافية
          </h1>

          <p className="mt-6 text-balance text-lg text-muted-foreground md:text-xl">
            نصمم ونُدير حملاتك على Google Ads بدقة عالية لتصل إلى عملائك المحتملين في اللحظة المناسبة، ونحوّل النقرات إلى عملاء حقيقيين.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-primary px-7 text-base font-semibold text-primary-foreground shadow-elegant transition-smooth hover:shadow-glow"
            >
              احصل على استشارة مجانية
              <ArrowLeft className="h-4 w-4 transition-smooth group-hover:-translate-x-1" />
            </a>
            <a
              href="#steps"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-background px-7 text-base font-semibold text-foreground transition-smooth hover:bg-secondary"
            >
              تعرف على طريقتنا
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {["دعم فني على مدار الساعة", "شفافية كاملة في الميزانية", "ROI مضمون"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {[
            { value: "+250%", label: "متوسط نمو المبيعات" },
            { value: "+180", label: "حملة ناجحة" },
            { value: "4.9/5", label: "تقييم العملاء" },
            { value: "24/7", label: "دعم مستمر" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-5 text-center shadow-soft"
            >
              <div className="bg-gradient-primary bg-clip-text text-2xl font-extrabold text-transparent md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
