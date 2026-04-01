import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const products = [
  { name: "Dew Balance Serum", price: "$38", tag: "Hydration", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=80" },
  { name: "Barrier Repair Cream", price: "$42", tag: "Barrier", img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=700&q=80" },
  { name: "Cloud Gel Cleanser", price: "$29", tag: "Cleanse", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80" },
  { name: "Green Calm Essence", price: "$34", tag: "Sensitivity", img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=700&q=80" }
];

export default function ShopPage() {
  return (
    <Section>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold">Shop</h1>
            <p className="mt-2 text-charcoal/70">Targeted formulas for calm, balanced skin.</p>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <button className="focus-ring rounded-full border border-charcoal/15 px-4 py-2">Skin Type</button>
            <button className="focus-ring rounded-full border border-charcoal/15 px-4 py-2">Concern</button>
            <button className="focus-ring rounded-full border border-charcoal/15 px-4 py-2">Ingredient</button>
            <button className="focus-ring rounded-full border border-charcoal/15 px-4 py-2">Sort: Popular</button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <article key={item.name} className="group rounded-soft border border-charcoal/10 bg-white p-3 shadow-soft">
              <div className="relative h-56 overflow-hidden rounded-xl">
                <Image src={item.img} alt={item.name} fill className="object-cover transition duration-500 group-hover:scale-[1.05]" />
                <div className="absolute inset-x-3 bottom-3 flex gap-2 opacity-0 transition group-hover:opacity-100">
                  <Button className="w-full bg-white text-charcoal">Quick view</Button>
                  <Button className="w-full">Quick add</Button>
                </div>
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider text-charcoal/60">{item.tag}</p>
              <h2 className="mt-1 font-medium">{item.name}</h2>
              <p className="text-sm text-charcoal/70">{item.price}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
