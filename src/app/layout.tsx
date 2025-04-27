import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { headers } from 'next/headers';
import { UserProvider } from '@/context/userContext';

export const metadata: Metadata = {
  title: "Dorara",
  description: "Your personal task manager",
  icons: {
    icon: "/logo.png",
  },
};

async function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  const isLoginPage = pathname === '/login';

  return (
    <body
    className={`w-screen min-w-screen bg-[#212121] text-white`}
    >
      {!isLoginPage && <Sidebar />}
      <main className={!isLoginPage ? 'flex-1 ml-64' : 'flex-1'}>
        {children}
      </main>
    </body>
  );
}

function ClientLayout({ children }: { children: React.ReactNode }) {
  return <RootLayoutContent>{children}</RootLayoutContent>;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`w-screen min-w-screen bg-[#212121] text-white`}>
        <UserProvider>
          <ClientLayout>{children}</ClientLayout>
        </UserProvider>
      </body>
    </html>
  );
}
