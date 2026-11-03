import Link from 'next/link';
import { EARLY_ACCESS, SITE_URL } from '@/lib/site';

export const metadata = {
  title: 'Agentic payments: the complete guide',
  description: 'What agentic payments are, how AI agents pay, and the controls that make it safe: budgets, allowlists, human approvals and identity.',
  alternates: { canonical: '/learn/agentic-payments' },
  openGraph: { type: 'article' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Agentic payments: the complete guide',
  url: `${SITE_URL}/learn/agentic-payments`,
  publisher: { '@type': 'Organization', name: 'USDK', url: SITE_URL },
};

export default function AgenticPayments() {
  return (
    <div className="wrap" style={{ padding: '56px 20px 80px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="prose">
        <p className="eyebrow">Guide</p>
        <h1>Agentic payments: the complete guide</h1>
        <p className="lede">
          Agentic payments are payments made by AI agents acting for a person or a business. The agent decides when to
          pay and whom, within rules its owner set. This guide covers how that works and what has to be true before an
          agent should touch real money.
        </p>

        <h2>What counts as an agentic payment</h2>
        <p>
          A payment is agentic when software, not a person, makes the final call to send it. A person might ask an
          agent to book a trip, restock supplies or buy API credits when they run low. The agent then finds the
          option, decides to buy and pays, without a person entering payment details at checkout.
        </p>
        <p>
          That is different from a scheduled payment or a subscription, where the amount and recipient are fixed in
          advance. An agent chooses the merchant and the amount as it works.
        </p>

        <h2>Why agents need their own payment layer</h2>
        <p>
          Most payment methods assume a person is present: someone types in a card, approves a prompt or signs in to a
          bank. Agents break that assumption in three ways.
        </p>
        <ul>
          <li>They act without a person watching each step, so limits have to be enforced by the system, not by attention.</li>
          <li>They can be manipulated by what they read, so instructions inside a web page or an email must never be able to raise a spending limit.</li>
          <li>Merchants need to know who an agent works for before they accept its money.</li>
        </ul>

        <h2>The building blocks</h2>
        <h3>A wallet per agent</h3>
        <p>Giving each agent its own balance keeps spend separate, so one agent's mistake can't drain another's budget and every payment is easy to trace.</p>
        <h3>Spend policies</h3>
        <p>
          A policy is the set of rules an agent spends by: daily or per-task limits, budgets, allowed merchants or
          categories, and a cap on any single payment. The important part is where the policy is checked. It should be
          checked by the payment system before money moves, not by the agent itself.
        </p>
        <h3>Human approvals</h3>
        <p>
          Some payments should wait for a person. An approval threshold sends anything above a set amount, or to a new
          merchant, to someone who can approve or decline it, usually from a phone.
        </p>
        <h3>Identity</h3>
        <p>
          Knowing the agent is not enough. A merchant wants to know the person or business behind it. Verifying that
          principal once, and carrying the check with the agent, is sometimes called know your agent.
        </p>
        <h3>Context and records</h3>
        <p>
          An agent's payment should carry the task it was for and the reason it gave. That context makes reconciliation,
          refunds and audits far simpler than working back from a bare amount.
        </p>

        <h2>Which rails agents pay on</h2>
        <p>
          Agents can pay on card networks, bank transfers or dollar stablecoins. Each has trade-offs in speed, cost,
          reach and how easily software can drive it. An issuer-neutral layer lets the rail underneath change without
          the agent's code changing.
        </p>

        <h2>Questions to answer before your agent spends real money</h2>
        <ol>
          <li>What is the most this agent should ever spend in a day, and on a single payment?</li>
          <li>Which merchants or categories should it be allowed to pay?</li>
          <li>Which payments should a person approve first, and who is that person?</li>
          <li>What happens when nobody answers an approval request?</li>
          <li>How will you trace any payment back to the task and agent that made it?</li>
        </ol>

        <h2>Building agentic payments with USDK</h2>
        <p>
          USDK is one API for all of the above: wallets per agent, policies checked before every payment, human
          approvals through a companion app, and identity for the agent's principal. Read the{' '}
          <Link href="/docs/concepts">core concepts</Link>, see the <Link href="/learn/glossary">glossary</Link>, or{' '}
          <Link href={EARLY_ACCESS}>request early access</Link>.
        </p>
      </div>
    </div>
  );
}
