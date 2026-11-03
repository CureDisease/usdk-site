import { PageHero, Section, Cards, Code, CtaBand } from '@/components/ui';
import { EARLY_ACCESS } from '@/lib/site';

export const metadata = {
  title: 'Developers',
  description: 'Docs, quickstart and SDKs for building AI agents that can pay with USDK.',
  alternates: { canonical: '/developers' },
};

const sample = `// Give an agent a budget and a human check above $200
await usdk.policies.set(agent.id, {
  weeklyBudget: 100000,   // $1,000.00
  allow: ["merchant_123", "merchant_456"],
  approvalOver: 20000,
});`;

export default function Developers() {
  return (
    <>
      <PageHero
        eyebrow="Developers"
        title="Build agents that can pay"
        lede="USDK is developer-first: a small API, policies as code, and a sandbox with test dollars so nothing real moves until you're ready."
        primary={{ label: 'Get early access', href: EARLY_ACCESS }}
        secondary={{ label: 'Read the docs', href: '/docs' }}
      />
      <Section>
        <Code note="Illustrative example. The API is in early access and may change.">{sample}</Code>
      </Section>
      <Section title="Start here" alt>
        <Cards
          items={[
            { title: 'Quickstart', body: 'The path from sandbox key to a first test payment.', href: '/docs/quickstart', linkLabel: 'Preview the quickstart' },
            { title: 'Core concepts', body: 'Agents, wallets, policies, approvals, identity and settlement.', href: '/docs/concepts', linkLabel: 'Read the concepts' },
            { title: 'Merchant guide', body: 'How a business accepts payments from agents.', href: '/docs/guides/accept-payments', linkLabel: 'Read the guide' },
            { title: 'SDKs', body: 'TypeScript and Python first, with an MCP server planned for agent tool use. They open with early access.' },
          ]}
        />
      </Section>
      <CtaBand
        title="Get a sandbox key"
        body="Early access developers get test dollars and the SDKs as they open."
        primary={{ label: 'Get early access', href: EARLY_ACCESS }}
      />
    </>
  );
}
