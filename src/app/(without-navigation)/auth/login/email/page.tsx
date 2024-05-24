'use client';
import Header from '@/app/_components/header/header';
import Link from 'next/link';
import LoginForm from './_components/login-form';

export default function LoginEmailPage() {
  return (
    <>
      <Header backButton />
      <div className="mb-10 mt-[100px] flex w-full justify-between px-10">
        <span className="font-medium">이메일로 로그인합니다.</span>
        <Link href="/auth/signup/email" className="font-medium text-pink-500">
          회원가입
        </Link>
      </div>
      <LoginForm />
    </>
  );
}
