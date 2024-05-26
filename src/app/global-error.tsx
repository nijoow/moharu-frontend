'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <html className="h-full">
      <body className="flex h-full">
        <div className="flex h-full w-full flex-col items-center bg-black px-12 pb-16 pt-20">
          <Image
            src="/images/logo/Logo_Main_Moharu.png"
            alt="logo"
            width={120}
            height={120}
          />
          <span className="mb-3 mt-auto text-32px font-extrabold text-white">
            500
          </span>
          <span className="mb-9 text-white">
            서버에서 문제가 발생하였습니다.
          </span>
          <Button
            type="button"
            variant="secondary"
            className="mb-4 w-full bg-white"
            onClick={() => reset()}
          >
            새로고침
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="mb-auto w-full bg-white"
            onClick={() => router.back()}
          >
            이전으로
          </Button>
          <span className="mt-auto text-white">
            문의 : moharu.site@gmail.com
          </span>
        </div>{' '}
      </body>
    </html>
  );
}
