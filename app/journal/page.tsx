import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const posts = [
  { slug: "barrier-basics", title: "Barrier Basics: why your skin feels reactive" },
  { slug: "morning-routine", title: "A 3-step morning routine for hydration" },
  { slug: "ingredient-layering", title: "How to layer active ingredients safely" }
];

export default function JournalPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-4xl font-semibold">Journal</h1>
        <div className="mt-8 space-y-4">
          {posts.map((post) => (
            <Link key={post.slug} href={`/journal/${post.slug}`} className="block rounded-soft border border-charcoal/10 bg-white p-6 shadow-soft transition hover:shadow-md">
              <h2 className="font-medium">{post.title}</h2>
              <p className="mt-1 text-sm text-charcoal/70">Read article</p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
