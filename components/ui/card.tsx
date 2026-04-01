import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <article className={cn("rounded-soft border border-charcoal/5 bg-white p-5 shadow-soft", className)}>{children}</article>;
}
