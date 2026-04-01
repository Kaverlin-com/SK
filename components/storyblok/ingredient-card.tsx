import { storyblokEditable } from "@storyblok/react/rsc";
import { Card } from "@/components/ui/card";

export function IngredientCard({ blok }: { blok: any }) {
  return (
    <Card {...storyblokEditable(blok)}>
      <h3 className="font-medium">{blok.name}</h3>
      <p className="mt-2 text-sm text-charcoal/70">{blok.benefits}</p>
      <p className="mt-3 text-xs uppercase tracking-[0.14em] text-charcoal/55">{blok.usage}</p>
    </Card>
  );
}
