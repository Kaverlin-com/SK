"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const nav = [
  ["Shop", "/shop"],
  ["About", "/about"],
  ["Ingredients", "/ingredients"],
  ["Journal", "/journal"],
  ["Contact", "/contact"]
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const listener = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition",
        scrolled ? "border-b border-charcoal/10 bg-cream/95 backdrop-blur" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link className="focus-ring rounded-md text-lg font-semibold tracking-wide" href="/">
          LUMA SKIN
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="focus-ring rounded-md text-sm text-charcoal/80 transition hover:text-charcoal">
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/cart" className="focus-ring rounded-full border border-charcoal/20 px-4 py-2 text-xs font-medium hover:bg-white">
          Cart
        </Link>
      </div>
    </header>
  );
}
