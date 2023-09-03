'use client';
import { Providers } from '@/redux/provider';
import { SessionProvider } from 'next-auth/react';
import React from 'react';
type Props = {
  children: React.ReactNode;
};
const AppSessionProvider = ({ children }: Props) => {
  return (
    <Providers>
      <SessionProvider>{children}</SessionProvider>
    </Providers>
  );
};

export default AppSessionProvider;
