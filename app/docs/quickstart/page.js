import Link from 'next/link';
import { Code } from '@/components/ui';
import { EARLY_ACCESS } from '@/lib/site';

export const metadata = {
  title: 'Quickstart',
  description: 'The steps from a USDK sandbox key to a first test payment by an AI agent.',
  alternates: { canonical: '/docs/quickstart' },
};

export default function Quickstart() {
  return (
    <>
      <p className="notice">Preview. Code on this page is illustrative and may change before the SDKs open.</p>
      <h1>Quickstart</h1>
      <p>The quickstart takes you from a sandbox key to an agent making its first test payment. Sandbox payments use test dollars, so nothing real moves.</p>

      <h2>1. Get a sandbox key</h2>
      <p>Sandbox keys are issued to early access developers. <Link href={EARLY_ACCESS}>Request access</Link>.</p>

      <h2>2. Create an agent</h2>
      <p>An agent in USDK is the thing that holds a wallet and makes payments. Creating one gives it a wallet.</p>
      <Code>{`const agent = await usdk.agents.create({ name: "travel-booker" });`}</Code>

      <h2>3. Set its policy</h2>
      <p>Policies decide what the agent may spend. USDK checks every payment against them before any money moves.</p>
      <Code>{`await usdk.policies.set(agent.id, {
  dailyLimit: 50000,      // $500.00
  approvalOver: 20000,    // ask a human above $200.00
});`}</Code>

      <h2>4. Make a test payment</h2>
      <Code>{`const payment = await usdk.payments.create({
  from: agent.id,
  to: "merchant_123",
  amount: 12900,          // $129.00
  currency: "USD",
  reason: "Hotel deposit for trip #4821",
});`}</Code>

      <h2>5. Listen for the result</h2>
      <p>Each payment produces events, such as approved by policy, sent for human approval, completed or declined, that your webhook endpoint receives.</p>

      <h2>Next</h2>
      <p>Read the <Link href="/docs/concepts">core concepts</Link> to see how agents, policies and approvals fit together.</p>
    </>
  );
}
