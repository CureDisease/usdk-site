import { PageHero, Section, Cards, CtaBand } from '@/components/ui';
import { PRODUCTS, EARLY_ACCESS } from '@/lib/site';

export const metadata = {
  title: 'Product',
  description: 'The USDK kit: an agent payments API, spend controls, agent identity and human approvals.',
  alternates: { canonical: '/product' },
};

export default function ProductPage() {
  const items = Object.entries(PRODUCTS).map(([slug, p]) => ({
    title: p.name,
    body: p.lede,
    href: `/product/${slug}`,
  }));
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="The full kit for agent payments"
        lede="Four parts that work together: move the money, set the rules, know who the agent works for, and bring in a human when it matters."
        primary={{ label: 'Get early access', href: EARLY_ACCESS }}
        secondary={{ label: 'Read the docs', href: '/docs' }}
      />
      <Section>
        <Cards items={items} />
      </Section>
      <Section title="Issuer-neutral by design" alt>
        <p className="lede narrow">
          USDK moves dollars. It does not issue its own stablecoin. The kit is built so the dollar rail underneath
          can change without the code you wrote against USDK changing.
        </p>
      </Section>
      <CtaBand
        title="Build your first agent payment"
        primary={{ label: 'Get early access', href: EARLY_ACCESS }}
        secondary={{ label: 'Preview the quickstart', href: '/docs/quickstart' }}
      />
    </>
  );
}
