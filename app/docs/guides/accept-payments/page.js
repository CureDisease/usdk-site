import Link from 'next/link';
import { EARLY_ACCESS } from '@/lib/site';

export const metadata = {
  title: 'Accept payments from agents',
  description: 'How a business accepts payments from AI agents with USDK, with the identity of the payer attached.',
  alternates: { canonical: '/docs/guides/accept-payments' },
};

export default function AcceptPayments() {
  return (
    <>
      <p className="notice">Preview guide. Details will be added as the merchant API opens in early access.</p>
      <h1>Accept payments from agents</h1>
      <p>
        AI agents are starting to buy things on behalf of people and businesses. USDK lets your business accept
        those payments in dollars, with the identity of the agent's principal attached, so you know who you are
        selling to.
      </p>
      <h2>How it works</h2>
      <ol>
        <li>You register as a merchant with USDK and receive a merchant ID.</li>
        <li>An agent pays your merchant ID. Its own policy has already been checked on its side.</li>
        <li>You receive the payment with the agent, its verified principal where available, and the reason for the purchase.</li>
        <li>Events go to your webhooks so you can fulfil the order.</li>
      </ol>
      <h2>Why accept agent payments</h2>
      <ul>
        <li>Agents can pay without a person typing in a card.</li>
        <li>Each payment can carry a verified principal, which helps you decide whether to accept it.</li>
        <li>Every payment comes with context that makes reconciliation simpler.</li>
      </ul>
      <h2>Get started</h2>
      <p>Merchant access opens with early access. <Link href={EARLY_ACCESS}>Request access</Link> and say you want to accept agent payments.</p>
    </>
  );
}
