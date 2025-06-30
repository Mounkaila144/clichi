import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kilichi SHOP Niamey - Viande Grillée Premium',
  description: 'Découvrez nos viandes grillées d\'exception à Niamey, Niger. Qualité premium, saveurs authentiques, cuisson parfaite. Commandez sur WhatsApp.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}