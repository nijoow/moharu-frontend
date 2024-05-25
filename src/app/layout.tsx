import { Toaster } from '@/components/ui/toaster';
import { pretendard } from '@/font/font';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import AuthSessionProvider from './_context/AuthSessionProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
    <AuthSessionProvider>
      <html lang="en" className="h-full">
        <body className={`${pretendard.variable} h-full font-pretendard`}>
          <div className="mx-auto h-full max-w-md shadow-md">
            <div className="relative mx-auto flex h-full  flex-col">
              {children}
            </div>
            <Toaster />
          </div>
        </body>
      </html>
    </AuthSessionProvider>
  );
}
