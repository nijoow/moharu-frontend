import { toast } from '@/components/ui/use-toast';
import { fetchWithToken } from '@/lib/fetch';
import { HeartIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { NeedLoginDialog } from '../dialog/need-login-dialog';
import { LikeToast } from './like-toast';
import HeartFillIcon from '/public/images/icons/heart-fill.svg';

interface WishButtonProps {
  isWish: boolean;
  activityId: number;
  className?: string;
}

const WishButton: React.FC<WishButtonProps> = ({
  isWish: initialIsWish,
  activityId,
  className,
}) => {
  const [isWish, setIsWish] = useState(initialIsWish);
  const { data: session } = useSession();

  const handleClick = async () => {
    if (isWish) {
      const response = await fetchWithToken(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/activity-wishes/${activityId}`,
        {
          method: 'DELETE',
        },
      );

      if (response.ok) {
        setIsWish(!isWish);
        LikeToast({ isWish: isWish ?? false, id: activityId });
      } else {
        toast({
          description: '위시리스트 삭제에 실패했습니다.',
        });
      }
    } else {
      const response = await fetchWithToken(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/activity-wishes`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            activitiesId: activityId,
          }),
        },
      );

      if (response.ok) {
        setIsWish(!isWish);
        LikeToast({ isWish: isWish ?? false, id: activityId });
      } else {
        toast({
          description: '위시리스트 추가에 실패했습니다.',
        });
      }
    }
  };

  return (
    <>
      {session ? (
        <button className={className} onClick={handleClick}>
          {isWish ? (
            <HeartFillIcon
              width={24}
              height={24}
              className="fill-pink-500 stroke-pink-500"
            />
          ) : (
            <HeartIcon width={24} height={24} className="stroke-slate-900" />
          )}
        </button>
      ) : (
        <NeedLoginDialog>
          <button className={className}>
            <HeartIcon width={24} height={24} className="stroke-slate-900" />
          </button>
        </NeedLoginDialog>
      )}
    </>
  );
};

export default WishButton;
