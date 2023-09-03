import AppSessionProvider from '@/components/Provider';
import { Providers } from '@/redux/provider';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My App',
  description: 'My Application',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <AppSessionProvider>
          <body>{children}</body>
        </AppSessionProvider>
      </Providers>
    </html>
  );
}
