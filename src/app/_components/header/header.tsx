'use client';

import { ShareDialog } from '@/app/_components/dialog/share-dialog';
import { cn } from '@/lib/utils';
import { Activity } from '@/types/type';
import { HeartIcon, ShareIcon } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LikeToast } from '../activity/like-toast';
import HearFillIcon from '/public/images/icons/heart-fill.svg';

interface HeaderProps {
  title?: string;
  backButton?: boolean;
  shareButton?: boolean;
  likeButton?: boolean;
  transparent?: boolean;
  isWish?: boolean;
  activity?: Activity;
}

const Header: React.FC<HeaderProps> = ({
  title,
  backButton = false,
  shareButton = false,
  likeButton = false,
  transparent = false,
  isWish,
  activity,
}) => {
  const router = useRouter();
  const [isScroll, setIsScroll] = useState(false);

  const onClickLikeBtn = () => {
    LikeToast({ isWish, id: activity?.id });
  };

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
      <div className="flex">
        {likeButton && (
          <button
            type="button"
            className="ml-auto mr-8px flex h-10 w-10 items-center justify-center rounded-full bg-white/60"
            onClick={onClickLikeBtn}
          >
            {isWish ? (
              <HearFillIcon width={24} height={24} className="fill-red-500" />
            ) : (
              <HeartIcon width={24} height={24} className="stroke-slate-900" />
            )}
          </button>
        )}
        {shareButton && activity && (
          <ShareDialog
            activity={activity}
            triggerComponent={
              <button
                type="button"
                className="ml-auto flex h-40px w-40px items-center justify-center rounded-full bg-white/60"
              >
                <ShareIcon
                  width={24}
                  height={24}
                  className="stroke-slate-900"
                />
              </button>
            }
          />
        )}
      </div>
    </header>
  );
};

export default Header;
