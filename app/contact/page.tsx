import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-semibold">Contact & Support</h1>
        <p className="mt-2 text-charcoal/70">We usually respond within one business day.</p>
        <form className="mt-8 grid gap-4 rounded-soft bg-white p-6 shadow-soft">
          <label className="text-sm">Name<input className="focus-ring mt-1 w-full rounded-xl border border-charcoal/15 px-4 py-3" /></label>
          <label className="text-sm">Email<input type="email" className="focus-ring mt-1 w-full rounded-xl border border-charcoal/15 px-4 py-3" /></label>
          <label className="text-sm">Message<textarea rows={5} className="focus-ring mt-1 w-full rounded-xl border border-charcoal/15 px-4 py-3" /></label>
          <Button>Send message</Button>
        </form>
      </Container>
    </Section>
  );
}
