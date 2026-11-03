import { Buttons, Section, Cards, Steps, CtaBand, Code } from '@/components/ui';
import { EARLY_ACCESS } from '@/lib/site';

export const metadata = {
  title: { absolute: 'USDK: Programmable dollar payments for AI agents' },
  description:
    'One API to give AI agents dollar wallets, spend controls and human approvals. Built for developers, ready for enterprise.',
  alternates: { canonical: '/' },
};

const sample = `const agent = await usdk.agents.create({ name: "travel-booker" });

await usdk.policies.set(agent.id, {
  dailyLimit: 50000,      // $500.00
  approvalOver: 20000,    // ask a human above $200.00
});

await usdk.payments.create({
  from: agent.id,
  to: "merchant_123",
  amount: 12900,
  currency: "USD",
});`;

const props = [
  {
    title: 'One API for agent money',
    body: 'Create wallets, send and receive dollars, and get webhooks for every event. No payments plumbing to build.',
    href: '/product/payments',
  },
  {
    title: 'Rules before money moves',
    body: "Set daily limits, budgets, merchant allowlists and per-payment caps. An agent can't spend outside the policy you wrote.",
    href: '/product/controls',
  },
  {
    title: 'A human when it matters',
    body: 'Payments over your threshold go to the USDK companion app for a one-tap approve or decline.',
    href: '/product/approvals',
  },
  {
    title: 'Know who the agent works for',
    body: 'Verify the person or business behind an agent before it can pay, and reuse that check across every app it touches.',
    href: '/product/identity',
  },
  {
    title: 'Not locked to one issuer',
    body: 'USDK is built to be issuer-neutral, so the dollar rail underneath can change without your code changing.',
    href: '/product',
  },
];

const steps = [
  { title: 'Create an agent', body: 'Give it a wallet and an identity in one call.' },
  { title: 'Write its policy', body: 'Limits, allowlists and approval thresholds, in code.' },
  { title: 'Let it pay', body: 'Your agent calls the API, and USDK checks the policy first.' },
  {
    title: 'Settle and reconcile',
    body: 'Every payment lands in your dashboard and your webhooks, with the agent and the reason attached.',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Programmable dollars for AI agents</p>
            <h1>Let your agents pay. On your terms.</h1>
            <p className="lede">
              USDK is one API that gives AI agents dollar wallets, the rules they spend by, and a human
              sign-off when it matters. Built for developers, ready for enterprise.
            </p>
            <Buttons
              primary={{ label: 'Get early access', href: EARLY_ACCESS }}
              secondary={{ label: 'Read the docs', href: '/docs' }}
            />
            <p className="hero-note">Free sandbox for early access developers.</p>
          </div>
          <Code note="Illustrative example. The API is in early access and may change.">{sample}</Code>
        </div>
      </section>

      <Section title="Everything an agent needs to handle money" alt>
        <Cards items={props} />
      </Section>

      <Section title="From sandbox to live in four steps">
        <Steps items={steps} />
        <p style={{ marginTop: 24 }}>
          <a href="/docs/concepts">See the full flow in the docs →</a>
        </p>
      </Section>

      <Section alt>
        <div className="split">
          <div>
            <h2>Agents pay. Merchants get paid.</h2>
            <p className="lede">
              The same kit that lets an agent spend lets your business accept agent payments, with the identity
              of the payer attached. Every new agent and every new merchant makes the network more useful to the
              rest.
            </p>
            <Buttons
              primary={{ label: 'Build an agent', href: '/solutions/builders' }}
              secondary={{ label: 'Read the merchant guide', href: '/docs/guides/accept-payments' }}
            />
          </div>
          <div>
            <h2>Agents that follow company policy</h2>
            <p className="lede">
              Give internal agents budgets by team, require approval above set amounts, and keep a full record of
              who, or what, spent each dollar.
            </p>
            <Buttons primary={{ label: 'Talk to sales', href: '/contact' }} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="narrow">
          <h2>Start building in the sandbox</h2>
          <p className="lede">
            Early access developers get a sandbox key and test dollars to build against. TypeScript and Python
            SDKs come first, with an MCP server planned for agent tool use.
          </p>
          <Buttons
            primary={{ label: 'Get early access', href: EARLY_ACCESS }}
            secondary={{ label: 'Preview the quickstart', href: '/docs/quickstart' }}
          />
        </div>
      </Section>

      <CtaBand
        title="The dollar kit for the agent economy"
        primary={{ label: 'Get early access', href: EARLY_ACCESS }}
        secondary={{ label: 'Talk to sales', href: '/contact' }}
      />
    </>
  );
}
