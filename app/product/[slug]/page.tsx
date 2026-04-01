export const runtime = 'edge';

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const productName = params.slug.replace(/-/g, " ");

  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="relative h-[460px] overflow-hidden rounded-soft">
              <Image src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=1000&q=80" alt="Product" fill className="object-cover transition duration-500 hover:scale-[1.04]" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((n) => (
                <div key={n} className="relative h-28 overflow-hidden rounded-xl border border-charcoal/10">
                  <Image src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=600&q=80" alt="Thumbnail" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-charcoal/60">Barrier support</p>
            <h1 className="mt-2 text-4xl font-semibold capitalize">{productName}</h1>
            <p className="mt-3 text-charcoal/70">Ceramide-rich moisturizer that locks hydration and reduces redness.</p>
            <p className="mt-5 text-2xl font-medium">$42</p>
            <div className="sticky top-24 mt-6 rounded-soft border border-charcoal/10 bg-white p-4 shadow-soft">
              <Button className="w-full">Add to cart</Button>
            </div>
            <dl className="mt-8 space-y-5 text-sm">
              <div><dt className="font-medium">Ingredients</dt><dd className="text-charcoal/70">Ceramides, Panthenol, Squalane, Green Tea.</dd></div>
              <div><dt className="font-medium">How to use</dt><dd className="text-charcoal/70">Apply after serum on damp skin, morning and evening.</dd></div>
              <div><dt className="font-medium">Benefits</dt><dd className="text-charcoal/70">Hydrates for 24h, reinforces skin barrier, softens texture.</dd></div>
              <div><dt className="font-medium">Reviews</dt><dd className="text-charcoal/70">4.8 average from 1,248 verified buyers.</dd></div>
            </dl>
          </div>
        </div>
      </Container>
    </Section>
  );
}
