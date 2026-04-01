import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function IngredientDetailPage({ params }: { params: { slug: string } }) {
  const name = params.slug.replace(/-/g, " ");
  return (
    <Section>
      <Container className="max-w-4xl">
        <h1 className="text-4xl font-semibold capitalize">{name}</h1>
        <p className="mt-4 text-charcoal/70">This ingredient helps support barrier resilience, hydration, and visible skin clarity.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-soft bg-white p-5 shadow-soft"><h2 className="font-medium">Benefits</h2><p className="mt-2 text-sm text-charcoal/70">Calms irritation and reinforces skin barrier.</p></article>
          <article className="rounded-soft bg-white p-5 shadow-soft"><h2 className="font-medium">Usage</h2><p className="mt-2 text-sm text-charcoal/70">Use once or twice daily depending on tolerance.</p></article>
          <article className="rounded-soft bg-white p-5 shadow-soft"><h2 className="font-medium">Science</h2><p className="mt-2 text-sm text-charcoal/70">Supported by peer-reviewed dermatology studies.</p></article>
        </div>
      </Container>
    </Section>
  );
}
