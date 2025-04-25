import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { AuthProvider } from '@/lib/auth-context';
import { UserProvider } from '@/lib/auth';
import Nav from '@/components/nav';
import Sidebar from '@/components/Sidebar';
import { supabase } from '@/lib/supabase';

export const metadata: Metadata = {
  title: 'Unprofitable',
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
            <div className="flex flex-col min-h-[100dvh] bg-gray-50">
              <Nav />
              <div className="flex flex-1 h-[calc(100dvh-4rem)]">
                <main className="flex-1 min-w-0 bg-gray-50">
                  {children}
                </main>
              </div>
            </div>
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
