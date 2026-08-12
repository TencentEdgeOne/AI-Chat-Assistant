import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Chat Assistant | EdgeOne Makers',
  description: 'AI-powered assistant — embed on any website with one line of code. · Demo only · EdgeOne Makers',
  keywords: "EdgeOne Makers, Demo only",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
