import { cn } from "@/lib/utils";

export function Section({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={cn("section-spacing scroll-mt-20", className)}>
      {children}
    </section>
  );
}
