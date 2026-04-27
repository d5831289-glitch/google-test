import { useState } from "react";
import { z } from "zod";
import { Send, CheckCircle2, Phone, User, TrendingUp, Wallet, Briefcase, Globe, Target } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "الاسم يجب أن يكون حرفين على الأقل" })
    .max(80, { message: "الاسم طويل جداً" }),
  phone: z
    .string()
    .trim()
    .min(8, { message: "رقم هاتف غير صالح" })
    .max(20, { message: "رقم هاتف غير صالح" })
    .regex(/^[+\d\s()-]+$/, { message: "رقم الهاتف يجب أن يحتوي أرقاماً فقط" }),
  monthlySales: z
    .string()
    .trim()
    .min(1, { message: "يرجى تحديد المبيعات الشهرية" })
    .max(30, { message: "القيمة طويلة جداً" }),
  marketingBudget: z
    .string()
    .trim()
    .min(1, { message: "يرجى تحديد الميزانية التسويقية" })
    .max(30, { message: "القيمة طويلة جداً" }),
  businessField: z
    .string()
    .trim()
    .min(2, { message: "يرجى ذكر مجال العمل" })
    .max(100, { message: "القيمة طويلة جداً" }),
  website: z
    .string()
    .trim()
    .max(150, { message: "الرابط طويل جداً" })
    .optional()
    .or(z.literal("")),
  mainGoal: z
    .string()
    .trim()
    .min(1, { message: "يرجى تحديد الهدف الرئيسي" }),
});

const salesOptions = [
  "أقل من 10,000 ريال",
  "10,000 - 50,000 ريال",
  "50,000 - 200,000 ريال",
  "200,000 - 500,000 ريال",
  "أكثر من 500,000 ريال",
];

const budgetOptions = [
  "أقل من 3,000 ريال",
  "3,000 - 10,000 ريال",
  "10,000 - 30,000 ريال",
  "30,000 - 100,000 ريال",
  "أكثر من 100,000 ريال",
];

const goalOptions = [
  "زيادة المبيعات والطلبات",
  "زيادة عدد العملاء المحتملين (Leads)",
  "الوعي بالعلامة التجارية",
  "زيادة زوار الموقع",
  "تحسين العائد على الإعلان (ROAS)",
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [monthlySales, setMonthlySales] = useState("");
  const [marketingBudget, setMarketingBudget] = useState("");
  const [businessField, setBusinessField] = useState("");
  const [website, setWebsite] = useState("");
  const [mainGoal, setMainGoal] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    monthlySales?: string;
    marketingBudget?: string;
    businessField?: string;
    website?: string;
    mainGoal?: string;
  }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse({ name, phone, monthlySales, marketingBudget, businessField, website, mainGoal });
    if (!result.success) {
      const fieldErrors: {
        name?: string;
        phone?: string;
        monthlySales?: string;
        marketingBudget?: string;
        businessField?: string;
        website?: string;
        mainGoal?: string;
      } = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof typeof fieldErrors;
        fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("تم استلام طلبك بنجاح! سنتواصل معك خلال 24 ساعة.");
    }, 800);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-hero py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Info side */}
            <div className="relative bg-gradient-primary p-8 text-primary-foreground md:col-span-2 md:p-10">
              <h2 className="text-2xl font-extrabold md:text-3xl">جاهز للبدء؟</h2>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85 md:text-base">
                اترك بياناتك وسيتواصل معك أحد خبرائنا لتقديم استشارة مجانية وخطة عمل مخصصة لنشاطك.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "استشارة مجانية بدون التزام",
                  "تحليل مبدئي لحملاتك الحالية",
                  "خطة مخصصة لميزانيتك",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form side */}
            <div className="p-8 md:col-span-3 md:p-10">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-foreground">شكراً لك!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    تم استلام طلبك بنجاح. سنتواصل معك قريباً.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-foreground">
                      الاسم الكامل
                    </label>
                    <div className="relative">
                      <User className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="أدخل اسمك الكامل"
                        maxLength={80}
                        className="h-12 w-full rounded-lg border border-border bg-background px-10 text-sm text-foreground transition-smooth placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-foreground">
                      رقم الهاتف
                    </label>
                    <div className="relative">
                      <Phone className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <input
                        id="phone"
                        type="tel"
                        dir="ltr"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+966 5X XXX XXXX"
                        maxLength={20}
                        className="h-12 w-full rounded-lg border border-border bg-background px-10 text-sm text-foreground transition-smooth placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="businessField" className="mb-2 block text-sm font-semibold text-foreground">
                      مجال العمل / النشاط التجاري
                    </label>
                    <div className="relative">
                      <Briefcase className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <input
                        id="businessField"
                        type="text"
                        value={businessField}
                        onChange={(e) => setBusinessField(e.target.value)}
                        placeholder="مثال: عقارات، متجر عطور، خدمات تنظيف"
                        className="h-12 w-full rounded-lg border border-border bg-background px-10 text-sm text-foreground transition-smooth placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
                      />
                    </div>
                    {errors.businessField && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.businessField}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="website" className="mb-2 block text-sm font-semibold text-foreground">
                      رابط الموقع أو المتجر (إن وجد)
                    </label>
                    <div className="relative">
                      <Globe className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <input
                        id="website"
                        type="text"
                        dir="ltr"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="www.yourwebsite.com"
                        className="h-12 w-full rounded-lg border border-border bg-background px-10 text-sm text-foreground transition-smooth placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
                      />
                    </div>
                    {errors.website && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.website}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="monthlySales" className="mb-2 block text-sm font-semibold text-foreground">
                      المبيعات الشهرية (بالريال)
                    </label>
                    <div className="relative">
                      <TrendingUp className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <select
                        id="monthlySales"
                        value={monthlySales}
                        onChange={(e) => setMonthlySales(e.target.value)}
                        className="h-12 w-full appearance-none rounded-lg border border-border bg-background px-10 text-sm text-foreground transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
                      >
                        <option value="">اختر متوسط مبيعاتك الشهرية</option>
                        {salesOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.monthlySales && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.monthlySales}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="marketingBudget" className="mb-2 block text-sm font-semibold text-foreground">
                      الميزانية التسويقية الشهرية (بالريال)
                    </label>
                    <div className="relative">
                      <Wallet className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <select
                        id="marketingBudget"
                        value={marketingBudget}
                        onChange={(e) => setMarketingBudget(e.target.value)}
                        className="h-12 w-full appearance-none rounded-lg border border-border bg-background px-10 text-sm text-foreground transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
                      >
                        <option value="">اختر ميزانيتك التسويقية</option>
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.marketingBudget && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.marketingBudget}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="mainGoal" className="mb-2 block text-sm font-semibold text-foreground">
                      الهدف الرئيسي من الإعلانات
                    </label>
                    <div className="relative">
                      <Target className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <select
                        id="mainGoal"
                        value={mainGoal}
                        onChange={(e) => setMainGoal(e.target.value)}
                        className="h-12 w-full appearance-none rounded-lg border border-border bg-background px-10 text-sm text-foreground transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
                      >
                        <option value="">اختر هدفك الأساسي</option>
                        {goalOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.mainGoal && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.mainGoal}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-primary text-base font-semibold text-primary-foreground shadow-soft transition-smooth hover:shadow-elegant disabled:opacity-70"
                  >
                    {loading ? "جارٍ الإرسال..." : "اطلب استشارة مجانية"}
                    {!loading && <Send className="h-4 w-4 transition-smooth group-hover:-translate-x-1" />}
                  </button>

                  <p className="text-center text-xs text-muted-foreground">
                    بياناتك آمنة معنا ولن يتم مشاركتها مع أي طرف ثالث.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
