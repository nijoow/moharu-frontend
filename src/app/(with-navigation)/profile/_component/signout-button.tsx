'use client';

import { signOut } from 'next-auth/react';

const SignOutButton = () => {
  return (
    <button
      type="button"
      className="mb-24px text-slate-500"
      onClick={() => {
        signOut({ redirect: true, callbackUrl: '/auth/login' });
      }}
    >
      로그아웃
    </button>
  );
};

export default SignOutButton;
