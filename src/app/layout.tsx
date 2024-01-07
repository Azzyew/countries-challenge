import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';

const nunitoSans = Nunito_Sans({ weight: ['300', '600', '800'], subsets: ['latin'] });

import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@/queries';

export const metadata: Metadata = {
  title: 'Countries Challenge',
  description: 'My take on the Frontend Mentor REST Countries API challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  )
}
