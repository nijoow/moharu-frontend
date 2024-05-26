'use client';

import { useEffect } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function VhProvider({ children }: Props) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);
  return <>{children}</>;
}
