export const SITE_URL = 'https://usdk.com';
export const CONTACT_EMAIL = 'hello@usdk.com';
export const EARLY_ACCESS = '/contact';

export const NAV = [
  {
    label: 'Product',
    items: [
      { label: 'Overview', href: '/product' },
      { label: 'Payments API', href: '/product/payments' },
      { label: 'Spend controls', href: '/product/controls' },
      { label: 'Agent identity', href: '/product/identity' },
      { label: 'Approvals', href: '/product/approvals' },
    ],
  },
  {
    label: 'Solutions',
    items: [
      { label: 'AI platforms', href: '/solutions/ai-platforms' },
      { label: 'Agent builders', href: '/solutions/builders' },
      { label: 'Enterprises', href: '/solutions/enterprise' },
    ],
  },
  {
    label: 'Developers',
    items: [
      { label: 'Developers hub', href: '/developers' },
      { label: 'Docs', href: '/docs' },
      { label: 'Quickstart', href: '/docs/quickstart' },
      { label: 'Core concepts', href: '/docs/concepts' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Learn', href: '/learn' },
];

export const FOOTER = [
  {
    title: 'Product',
    links: [
      { label: 'Payments API', href: '/product/payments' },
      { label: 'Spend controls', href: '/product/controls' },
      { label: 'Agent identity', href: '/product/identity' },
      { label: 'Approvals', href: '/product/approvals' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'Docs', href: '/docs' },
      { label: 'Quickstart', href: '/docs/quickstart' },
      { label: 'Core concepts', href: '/docs/concepts' },
      { label: 'Merchant guide', href: '/docs/guides/accept-payments' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'Agentic payments guide', href: '/learn/agentic-payments' },
      { label: 'Glossary', href: '/learn/glossary' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Security', href: '/security' },
      { label: 'Contact', href: '/contact' },
      { label: 'Companion app', href: '/app' },
    ],
  },
];

export const PRODUCTS = {
  payments: {
    name: 'Payments API',
    title: 'Agent payments API',
    eyebrow: 'Payments API',
    lede: 'Send, receive and settle dollar payments from AI agents with one API. Every payment carries the agent that made it and the reason it was made.',
    features: [
      { title: 'Wallets per agent', body: 'Give each agent its own dollar wallet, so spend is separated and easy to trace.' },
      { title: 'Send and receive', body: 'Agents can pay merchants, other agents or people, and get paid back through the same API.' },
      { title: 'Webhooks for everything', body: 'Every payment, approval and policy decision fires an event your systems can act on.' },
      { title: 'Context on every payment', body: 'Attach the task, the request and the reason, so reconciliation never starts from a bare amount.' },
    ],
  },
  controls: {
    name: 'Spend controls',
    title: 'Spend controls for AI agents',
    eyebrow: 'Spend controls',
    lede: 'Write the rules before money moves. USDK checks every payment against the policy you set for that agent, and declines anything outside it.',
    features: [
      { title: 'Limits and budgets', body: 'Daily, weekly or per-task limits, and budgets that reset on your schedule.' },
      { title: 'Allowlists', body: 'Restrict an agent to the merchants or categories it is meant to pay.' },
      { title: 'Per-payment caps', body: 'Stop any single payment above a set amount, whatever the agent was told.' },
      { title: 'Policies as code', body: 'Policies live in your codebase and your reviews, not in a settings screen.' },
    ],
  },
  identity: {
    name: 'Agent identity',
    title: 'Agent identity verification',
    eyebrow: 'Agent identity',
    lede: 'Know who an agent works for before it can pay. Verify the person or business behind an agent once, and carry that check across every app it touches.',
    features: [
      { title: 'Verify the principal', body: 'Tie each agent to the person or business it acts for.' },
      { title: 'Reusable checks', body: 'One verification follows the agent, so users are not asked again in every app.' },
      { title: 'Signals for merchants', body: 'Merchants can see that a paying agent is tied to a verified principal before they accept.' },
      { title: 'Priced per check', body: 'Identity verification is an add-on, charged only when you run a check.' },
    ],
  },
  approvals: {
    name: 'Approvals',
    title: 'Human approvals for agent payments',
    eyebrow: 'Approvals',
    lede: 'Keep a person in the loop when it matters. Payments over your threshold go to the USDK companion app for a one-tap approve or decline.',
    features: [
      { title: 'Thresholds you set', body: 'Choose the amount, merchant or category that needs a human.' },
      { title: 'One tap on a phone', body: 'The approver sees what the agent wants to buy, from whom and why.' },
      { title: 'Timeouts and fallbacks', body: 'Decide what happens when nobody answers: decline, wait or escalate.' },
      { title: 'A full record', body: 'Every approval and decline is logged next to the payment it decided.' },
    ],
  },
};

export const SOLUTIONS = {
  'ai-platforms': {
    title: 'Payments for AI platforms',
    eyebrow: 'For AI platforms',
    lede: 'Add dollar payments to an agent framework or model platform, so the agents your users build can pay within limits they control.',
    points: [
      { title: 'One integration, every agent', body: 'Expose USDK once and every agent on your platform can hold a wallet and pay.' },
      { title: 'Controls your users trust', body: 'Limits, allowlists and approvals come built in, so you are not designing payment safety from scratch.' },
      { title: 'Built for tool use', body: 'An MCP server is planned so agents can call payments as a tool.' },
    ],
    cta: { label: 'Talk to us', href: '/contact' },
  },
  builders: {
    title: 'Payments for agent builders',
    eyebrow: 'For agent builders',
    lede: 'Ship an agent that can pay for things without wiring up payments plumbing yourself.',
    points: [
      { title: 'A few calls, not a project', body: 'Create an agent, set its policy and let it pay. The rest is handled.' },
      { title: 'Safe by default', body: 'Your agent cannot spend outside the policy you wrote, even if a prompt tells it to.' },
      { title: 'Sandbox first', body: 'Build and test with test dollars before anything real moves.' },
    ],
    cta: { label: 'Get early access', href: '/contact' },
  },
  enterprise: {
    title: 'Agent payments for enterprises',
    eyebrow: 'For enterprises',
    lede: 'Let internal agents spend within company policy, with budgets by team, approvals above set amounts and a full record of who, or what, spent each dollar.',
    points: [
      { title: 'Budgets by team', body: 'Give each team and each agent its own budget and limits.' },
      { title: 'Approvals that fit your process', body: 'Route larger payments to the right person before they go through.' },
      { title: 'Audit-ready records', body: 'Every payment carries its agent, its policy decision and its approver.' },
    ],
    cta: { label: 'Talk to sales', href: '/contact' },
  },
};
