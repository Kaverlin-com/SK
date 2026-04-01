import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
};

const baseStyle =
  "focus-ring inline-flex items-center justify-center rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-cream transition hover:scale-[1.02] hover:bg-charcoal/90";

export function Button({ href, children, className }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={cn(baseStyle, className)}>
        {children}
      </Link>
    );
  }

  return <button className={cn(baseStyle, className)}>{children}</button>;
}
