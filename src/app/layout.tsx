import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MakeMistakes - Engineering Education Platform',
  description: 'Learn tech careers, secure internships, and build production projects through real-world codebase missions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-zinc-950 text-zinc-100 min-h-screen antialiased selection:bg-violet-500/30 selection:text-violet-200">
        {children}
      </body>
    </html>
  );
}
