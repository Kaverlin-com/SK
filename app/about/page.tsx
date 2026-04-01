import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function AboutPage() {
  return (
    <Section>
      <Container className="space-y-10">
        <header className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-charcoal/55">About Luma Skin</p>
          <h1 className="mt-3 text-4xl font-semibold">Founded by a derm researcher and a product minimalist.</h1>
        </header>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Mission", "Make effective skincare calmer, simpler, and kinder to skin."],
            ["Values", "Transparency, evidence, inclusive formulation standards."],
            ["Sustainability", "Refill-ready packaging and responsibly sourced actives."]
          ].map(([title, copy]) => (
            <article key={title} className="rounded-soft border border-charcoal/10 bg-white p-6 shadow-soft">
              <h2 className="font-medium">{title}</h2>
              <p className="mt-2 text-sm text-charcoal/70">{copy}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
