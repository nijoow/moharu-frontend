'use client';
import RecoilProvider from '@/lib/recoil';
import React from 'react';
import AuthSessionProvider from './auth-session-provider';
import VhProvider from './vh-provider';

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
