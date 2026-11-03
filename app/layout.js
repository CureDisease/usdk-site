import './globals.css';
import { Banner, Header, Footer } from '@/components/ui';
import { SITE_URL } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'USDK: Programmable dollar payments for AI agents',
    template: '%s | USDK',
  },
  description:
    'One API to give AI agents dollar wallets, spend controls and human approvals. Built for developers, ready for enterprise.',
  openGraph: {
    siteName: 'USDK',
    type: 'website',
  },
  twitter: { card: 'summary' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Banner />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
