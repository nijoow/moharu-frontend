import { toast } from '@/components/ui/use-toast';
import { fetchWithToken } from '@/lib/fetch';
import { HeartIcon } from 'lucide-react';
import { useState } from 'react';
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
      console.log(response, response.status);

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
  );
};

export default WishButton;
