import { Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary shadow-soft">
            <Sparkles className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-extrabold text-foreground">وكالة تشويش</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              Tashweesh Agency
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground">
            المميزات
          </a>
          <a href="#steps" className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground">
            خطوات العمل
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground">
            تواصل معنا
          </a>
        </nav>

        <a
          href="#contact"
          className="inline-flex h-10 items-center justify-center rounded-lg bg-gradient-primary px-5 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:shadow-elegant"
        >
          ابدأ الآن
        </a>
      </div>
    </header>
  );
}
