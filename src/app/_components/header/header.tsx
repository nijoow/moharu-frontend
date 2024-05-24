'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HeaderShareDialog } from './share-dialog';

interface HeaderProps {
  title?: string;
  backButton?: boolean;
  shareButton?: boolean;
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  backButton = false,
  shareButton = false,
  transparent = false,
}) => {
  const router = useRouter();
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setIsScroll(true) : setIsScroll(false);
    });
  }, []);

  return (
    <header
      className={cn(
        `fixed left-1/2 top-0 z-50 flex h-20 w-full max-w-md -translate-x-1/2 items-center bg-white p-5 transition-all duration-300`,
        {
          'bg-transparent': transparent && !isScroll,
        },
      )}
    >
      {backButton && (
        <button
          type="button"
          onClick={() => router.back()}
          className="mr-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/60"
        >
          <Image
            src="/images/icons/chevron-left.svg"
            alt="logo"
            width={32}
            height={32}
          />
        </button>
      )}
      <span className="absolute left-1/2 -translate-x-1/2">{title}</span>
      {shareButton && <HeaderShareDialog />}
    </header>
  );
};

export default Header;
