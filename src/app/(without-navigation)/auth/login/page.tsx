import { signIn } from '@/auth';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-black px-16 pb-24">
      <Image
        src="/images/logo/Logo_Main_Moharu.png"
        alt="logo"
        width={216}
        height={216}
        className="mt-auto"
      />
      <span className="mb-auto mt-5 text-white">
        모두에게 선물하는 하루, <span className="text-pink-500">모하루</span>
      </span>
      <div className="mb-5 flex w-full flex-col gap-2.5">
        <Link href="/auth/login/email">
          <Button className="relative h-10 w-full rounded-full bg-white text-black hover:bg-slate-300">
            <Image
              src="/images/icons/mail.svg"
              alt="logo"
              width={20}
              height={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 transform"
            />
            이메일로 로그인
          </Button>
        </Link>
        <form
          action={async () => {
            'use server';
            await signIn('google', { redirectTo: '/?from=login' });
          }}
        >
          <Button
            type="submit"
            className="relative h-10 w-full rounded-full bg-white text-black hover:bg-slate-300"
          >
            <Image
              src="/images/icons/google.svg"
              alt="logo"
              width={20}
              height={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 transform"
            />
            구글로 로그인
          </Button>
        </form>
        <form
          action={async () => {
            'use server';
            await signIn('kakao', { redirectTo: '/?from=login' });
          }}
        >
          <Button
            type="submit"
            className="relative h-10 w-full rounded-full bg-white text-black hover:bg-slate-300"
          >
            <Image
              src="/images/icons/kakao.svg"
              alt="logo"
              width={20}
              height={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 transform"
            />
            카카오로 로그인
          </Button>
        </form>
      </div>
      <Link className="mb-5 text-14px text-white" href={'/?from=browse'}>
        로그인 없이 모하루 먼저 둘러보기
      </Link>
      <span className="text-11px text-slate-400">
        로그인함으로써 Moharu의 정책 및 약관에 동의합니다.
      </span>
      <span className="text-11px text-slate-400">
        이용약관/개인정보 처리방침
      </span>
    </div>
  );
}
