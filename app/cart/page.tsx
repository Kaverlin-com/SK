import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  return (
    <Section>
      <Container className="grid gap-8 lg:grid-cols-[1fr_340px]">
        <div className="rounded-soft bg-white p-6 shadow-soft">
          <h1 className="text-3xl font-semibold">Cart</h1>
          <div className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between"><span>Barrier Repair Cream × 1</span><span>$42</span></div>
            <div className="flex justify-between"><span>Dew Balance Serum × 1</span><span>$38</span></div>
          </div>
        </div>
        <aside className="rounded-soft bg-white p-6 shadow-soft">
          <h2 className="font-medium">Summary</h2>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>$80</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>$0</span></div>
          </div>
          <Button className="mt-5 w-full">Checkout</Button>
        </aside>
      </Container>
    </Section>
  );
}
