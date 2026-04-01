import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

type ProductItem = {
  _uid?: string;
  name: string;
  price: string;
  img?: string;
  image?: { filename?: string };
};

const fallback: ProductItem[] = [
  { name: "Barrier Repair Cream", price: "$42", img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=700&q=80" },
  { name: "Dew Balance Serum", price: "$38", img: "https://images.unsplash.com/photo-1600181958604-3e0c5ea2d173?auto=format&fit=crop&w=700&q=80" },
  { name: "Cloud Gel Cleanser", price: "$29", img: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=700&q=80" }
];

export function ProductGrid({ blok }: { blok: Record<string, any> }) {
  const items: ProductItem[] = blok.products?.length ? (blok.products as ProductItem[]) : fallback;
  return (
    <Section>
      <Container {...storyblokEditable(blok)}>
        <h2 className="text-2xl font-semibold">Featured essentials</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {items.map((product, i: number) => (
            <Reveal key={product._uid ?? i}>
              <Card className="group overflow-hidden p-0">
                <div className="relative h-64 overflow-hidden">
                  <Image src={product.img || product.image?.filename} alt={product.name} fill className="object-cover transition duration-500 group-hover:scale-[1.04]" />
                </div>
                <div className="p-5">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="mt-1 text-sm text-charcoal/70">{product.price}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
