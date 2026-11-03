import Link from 'next/link';
import { PageHero, Section, CtaBand } from '@/components/ui';
import { EARLY_ACCESS } from '@/lib/site';

export const metadata = {
  title: 'Pricing',
  description: 'USDK pricing: a free sandbox, usage-based live payments, subscriptions for teams and custom enterprise terms.',
  alternates: { canonical: '/pricing' },
};

const tiers = [
  {
    name: 'Sandbox',
    price: 'Free',
    who: 'Anyone building',
    items: ['Full API in test mode', 'Test dollars', 'Up to 3 agents'],
    cta: { label: 'Get early access', href: EARLY_ACCESS },
  },
  {
    name: 'Build',
    price: 'Per transaction',
    who: 'Agents going live',
    items: ['Live payments', 'Basic spend limits', 'Webhooks', 'No monthly fee'],
    cta: { label: 'Get early access', href: EARLY_ACCESS },
    featured: true,
  },
  {
    name: 'Scale',
    price: 'Subscription + usage',
    who: 'Teams with many agents',
    items: ['Advanced policies', 'Human approvals', 'Team roles', 'Priority support', 'Lower per-transaction fee'],
    cta: { label: 'Talk to sales', href: '/contact' },
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    who: 'Platforms and large companies',
    items: ['Volume pricing', 'Custom limits', 'Dedicated support', 'Help with security reviews'],
    cta: { label: 'Talk to sales', href: '/contact' },
  },
];

export default function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Start free. Pay as your agents pay."
        lede="Build in the sandbox for free. Live tiers are priced on usage, with a subscription for teams that need more control. Exact rates are published at general availability."
      />
      <Section>
        <div className="tiers">
          {tiers.map((t) => (
            <div key={t.name} className={t.featured ? 'tier tier-featured' : 'tier'}>
              <h3>{t.name}</h3>
              <p className="tier-price">{t.price}</p>
              <p className="muted small">{t.who}</p>
              <ul>
                {t.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <Link href={t.cta.href} className={t.featured ? 'btn btn-primary' : 'btn btn-ghost'}>
                {t.cta.label}
              </Link>
            </div>
          ))}
        </div>
        <p className="muted" style={{ marginTop: 24 }}>
          Add-on: agent identity verification, priced per check, on every live tier.
        </p>
      </Section>
      <Section title="Questions" alt>
        <dl className="faq narrow">
          <dt>Is there a free way to start?</dt>
          <dd>Yes. The sandbox is free and uses test dollars, so you can build and test before anything real moves.</dd>
          <dt>When will exact prices be published?</dt>
          <dd>At general availability. Early access customers hear first.</dd>
          <dt>Does USDK issue its own stablecoin?</dt>
          <dd>No. USDK is issuer-neutral payments infrastructure. It moves dollars; it doesn't mint them.</dd>
          <dt>How is identity verification charged?</dt>
          <dd>Per check, only when you run one.</dd>
        </dl>
      </Section>
      <CtaBand
        title="Not sure which tier fits?"
        primary={{ label: 'Talk to sales', href: '/contact' }}
        secondary={{ label: 'Get early access', href: EARLY_ACCESS }}
      />
    </>
  );
}
