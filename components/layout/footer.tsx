import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 py-10">
      <Container className="grid gap-6 md:grid-cols-3">
        <div>
          <h2 className="text-sm font-semibold">LUMA SKIN</h2>
          <p className="mt-2 text-sm text-charcoal/70">Calm, science-backed skincare for daily rituals.</p>
        </div>
        <div className="text-sm text-charcoal/70">
          <p>Email: support@lumaskin.com</p>
          <p>Mon - Fri, 9am - 5pm</p>
        </div>
        <div className="flex gap-4 text-sm">
          <Link href="/journal">Journal</Link>
          <Link href="/ingredients">Ingredients</Link>
          <Link href="/contact">Support</Link>
        </div>
      </Container>
    </footer>
  );
}
