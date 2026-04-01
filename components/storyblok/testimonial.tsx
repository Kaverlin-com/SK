import { Quote } from "lucide-react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function Testimonial({ blok }: { blok: any }) {
  const entries = blok.items?.length
    ? blok.items
    : [
        { quote: "My skin calmed down in a week.", name: "Mila T." },
        { quote: "Light textures, visible results, zero irritation.", name: "Aria W." },
        { quote: "Feels premium and simple at the same time.", name: "Noah R." }
      ];

  return (
    <Section>
      <Container {...storyblokEditable(blok)}>
        <h2 className="text-2xl font-semibold">Loved by sensitive skin users</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {entries.map((item: any, index: number) => (
            <Card key={item._uid ?? index}>
              <Quote className="h-5 w-5 text-charcoal/45" aria-hidden />
              <p className="mt-3 text-charcoal/85">{item.quote}</p>
              <p className="mt-4 text-sm text-charcoal/65">{item.name}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
