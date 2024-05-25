import React from 'react';
import '../globals.css';
import NavigationBar from './_components/navigation-bar/navigation-bar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex flex-auto flex-col">{children}</main>
      <NavigationBar />
    </>
  );
}
