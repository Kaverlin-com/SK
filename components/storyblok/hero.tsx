import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function Hero({ blok }: { blok: any }) {
  return (
    <Section className="pt-32 md:pt-40" id="home">
      <Container {...storyblokEditable(blok)}>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-charcoal/55">Clinical calm for everyday skin</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">{blok.title ?? "Hydration that feels like a deep breath."}</h1>
            <p className="mt-5 max-w-xl text-charcoal/70">{blok.subtitle ?? "Minimal formulas with clinically-proven actives and no routine overload."}</p>
            <Button className="mt-8" href={blok.cta_link ?? "/shop"}>
              {blok.cta_label ?? "Shop essentials"}
            </Button>
          </div>
          <div className="relative overflow-hidden rounded-[2rem]">
            <Image
              src={blok.media?.filename || "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1400&q=80"}
              alt={blok.media?.alt || "Skincare bottles on neutral background"}
              width={800}
              height={900}
              className="h-[480px] w-full object-cover transition duration-700 hover:scale-[1.03]"
              priority
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
