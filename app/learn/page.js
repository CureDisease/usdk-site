import { PageHero, Section, Cards } from '@/components/ui';

export const metadata = {
  title: 'Learn: agentic payments',
  description: 'Guides and definitions for agentic payments: how AI agents pay, how to keep them in bounds and how to build with them.',
  alternates: { canonical: '/learn' },
};

export default function Learn() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="Agentic payments, explained"
        lede="How AI agents pay for things, how to keep them within limits, and how to build agents that can handle money."
      />
      <Section alt>
        <Cards
          items={[
            { title: 'Agentic payments: the complete guide', body: 'What agentic payments are, how they work and what to get right before an agent spends real money.', href: '/learn/agentic-payments', linkLabel: 'Read the guide' },
            { title: 'Glossary', body: 'Short definitions of the terms that come up when agents start to pay.', href: '/learn/glossary', linkLabel: 'Browse the glossary' },
          ]}
        />
      </Section>
      <Section title="Coming soon">
        <p className="muted narrow">How-to guides, integration guides, use cases and comparisons of approaches to agent payments.</p>
      </Section>
    </>
  );
}
