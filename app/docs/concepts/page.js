export const metadata = {
  title: 'Core concepts',
  description: 'How USDK models agents, wallets, policies, approvals, identity and settlement.',
  alternates: { canonical: '/docs/concepts' },
};

export default function Concepts() {
  return (
    <>
      <p className="notice">Preview. Concepts are stable in intent, but names may change before general availability.</p>
      <h1>Core concepts</h1>
      <p>Every USDK payment follows the same path: an agent asks to pay, its policy is checked, a person approves if the policy says so, and the payment settles with its full context attached.</p>

      <dl>
        <dt>Agent</dt>
        <dd>An AI agent you register with USDK. Each agent has its own wallet, policy and identity, so its spend is separate from every other agent's.</dd>
        <dt>Wallet</dt>
        <dd>The dollar balance an agent pays from and is paid into.</dd>
        <dt>Policy</dt>
        <dd>The rules an agent spends by: limits, budgets, allowed merchants or categories, per-payment caps and approval thresholds. Policies are set in code and checked before every payment.</dd>
        <dt>Approval</dt>
        <dd>A human sign-off. When a payment crosses an approval threshold, it waits for a person to approve or decline it in the USDK companion app.</dd>
        <dt>Identity</dt>
        <dd>The verified person or business an agent acts for. A verification can be reused wherever that agent pays.</dd>
        <dt>Settlement</dt>
        <dd>The point where a payment is final. Settled payments carry the agent, the policy decision, any approver and the reason, for reconciliation.</dd>
        <dt>Events</dt>
        <dd>Webhook notifications for every step, so your systems can react as a payment moves.</dd>
      </dl>

      <h2>The payment flow</h2>
      <ol>
        <li>The agent requests a payment, with an amount, a recipient and a reason.</li>
        <li>USDK checks the request against the agent's policy. Anything outside it is declined.</li>
        <li>If the payment is above the approval threshold, it waits for a person.</li>
        <li>The payment settles, and events go to your webhooks.</li>
      </ol>
    </>
  );
}
