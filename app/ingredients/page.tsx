import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const ingredients = ["Niacinamide", "Ceramides", "Panthenol", "Centella", "Squalane", "Peptides"];

export default function IngredientsPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-4xl font-semibold">Ingredients Library</h1>
        <p className="mt-2 text-charcoal/70">Browse our actives by benefit, usage, and research profile.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {ingredients.map((name) => (
            <Link key={name} href={`/ingredients/${name.toLowerCase()}`} className="focus-ring rounded-soft border border-charcoal/10 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md">
              <h2 className="font-medium">{name}</h2>
              <p className="mt-1 text-sm text-charcoal/70">Benefits, usage, and science summary.</p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
