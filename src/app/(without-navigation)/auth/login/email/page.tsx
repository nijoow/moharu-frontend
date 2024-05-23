'use client';
import SubHeader from '@/app/_components/header/sub-header';
import Link from 'next/link';
import LoginForm from './_components/login-form';

export default function LoginEmailPage() {
  return (
    <>
      <SubHeader />
      <div className="mb-10 mt-5 flex w-full justify-between px-10">
        <span className="font-medium">이메일로 로그인합니다.</span>
        <Link href="/auth/signup/email" className="font-medium text-pink-500">
          회원가입
        </Link>
      </div>
      <LoginForm />
    </>
  );
}
