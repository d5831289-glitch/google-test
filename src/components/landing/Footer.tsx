import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
            <Sparkles className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-extrabold text-foreground">وكالة تشويش</span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-primary">
              Tashweesh Agency
            </span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} وكالة تشويش - جميع الحقوق محفوظة. شريك معتمد لجوجل.
        </p>
      </div>
    </footer>
  );
}
