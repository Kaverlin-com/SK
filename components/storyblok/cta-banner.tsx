import { storyblokEditable } from "@storyblok/react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type Blok = {
  title?: string;
  subtitle?: string;
  cta_link?: string;
  cta_label?: string;
  [key: string]: unknown;
};

export function CtaBanner({ blok }: { blok: Blok }) {
  return (
    <Section>
      <Container {...storyblokEditable(blok)}>
        <div className="rounded-[2rem] bg-blush p-8 text-center md:p-12">
          <h2 className="text-2xl font-semibold md:text-4xl">
            {blok.title ?? "Build your calm routine"}
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-charcoal/70">
            {blok.subtitle ?? "Take the 45-second skin quiz for a routine matched to your barrier needs."}
          </p>

          <Button href={blok.cta_link ?? "/shop"} className="mt-7">
            {blok.cta_label ?? "Start your routine"}
          </Button>
        </div>
      </Container>
    </Section>
  );
}