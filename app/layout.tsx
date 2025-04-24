import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { AuthProvider } from '@/lib/auth-context';
import { UserProvider } from '@/lib/auth';
import Nav from '@/components/nav';
import { supabase } from '@/lib/supabase';

export const metadata: Metadata = {
  title: 'Your App',
  description: 'Your app description',
};

export const viewport: Viewport = {
  maximumScale: 1,
};

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userPromise = supabase.auth.getUser().then(({ data: { user } }) => user);

  return (
    <html
      lang="en"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${manrope.className}`}
    >
      <body className="min-h-[100dvh] bg-gray-50">
        <AuthProvider>
          <UserProvider userPromise={userPromise}>
            <Nav />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
