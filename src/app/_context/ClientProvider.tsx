'use client';
import RecoilProvider from '@/lib/recoil';
import React from 'react';
import AuthSessionProvider from './AuthSessionProvider';
import VhProvider from './VhProvider';

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthSessionProvider>
      <RecoilProvider>
        <VhProvider>{children}</VhProvider>
      </RecoilProvider>
    </AuthSessionProvider>
  );
};

export default ClientProvider;
