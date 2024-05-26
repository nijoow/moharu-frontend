import { Toaster } from '@/components/ui/toaster';
import { pretendard } from '@/font/font';
import type { Metadata } from 'next';
import React from 'react';
import ClientProvider from './_context/ClientProvider';
import './globals.css';

export const metadata: Metadata = {
  title: '모하루',
  description:
    '휴일이나 여가시간에 즐길 수 있는 오프라인 취미 활동 추천 서비스',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} font-pretendard`}>
        <ClientProvider>
          <div
            className="h-100vh w-screen bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/background/background.png')",
            }}
          >
            <div className="h-100vh mx-auto max-w-md overflow-y-scroll bg-white">
              <div className="h-100vh relative mx-auto flex flex-col">
                {children}
              </div>
              <Toaster />
            </div>
          </div>{' '}
        </ClientProvider>
      </body>
    </html>
  );
}
