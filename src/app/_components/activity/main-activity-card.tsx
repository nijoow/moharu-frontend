'use client';

import ActiveLocationInfo from '@/app/_components/activity/activity-location-info';
import ActivityScheduleInfo from '@/app/_components/activity/activity-schedule-info';
import ActivityTypeBadge from '@/app/_components/activity/activity-type-badge';
import { ShareDialog } from '@/app/_components/dialog/share-dialog';
import { useToast } from '@/components/ui/use-toast';
import { getActivityInfoByType } from '@/lib/utils';
import { Activity } from '@/types/type';
import Link from 'next/link';
import BackgroundImageWithPlaceholder from '../common/background-image-with-placeholder';
import HearFillIcon from '/public/images/icons/heart-fill.svg';
import HeartIcon from '/public/images/icons/heart.svg';
interface MainActivityCardProps {
  activity: Activity;
}

const MainActivityCard: React.FC<MainActivityCardProps> = ({ activity }) => {
  const { toast } = useToast();
  const activityType = getActivityInfoByType(activity.type).type;

  const onClickLikeBtn = () => {
    toast({
      description: 'Like button clicked',
    });
  };

  return (
    <>
      <div className="p-24px">
        <Link href={`/activities/${activity.id}`} className="relative mb-20px">
          <BackgroundImageWithPlaceholder
            src={activity.coverImage}
            className="h-[340px] rounded-[12px]"
          />
          <ActivityTypeBadge
            className="absolute left-[14px] top-[14px]"
            type={activityType}
          />
        </Link>
        <div className="mt-20px">
          <div className="mb-8px flex justify-between">
            {/* TODO: 디자인 시스템 typograph 적용  */}
            <p className="text-20px font-bold">{activity.title}</p>
            <div className="flex">
              <button className="mr-16px" onClick={onClickLikeBtn}>
                {/* TODO: HearFillIcon fill pink */}
                {activity.wished ? (
                  <HearFillIcon
                    width={24}
                    height={24}
                    className="fill-red-500"
                  />
                ) : (
                  <HeartIcon
                    width={24}
                    height={24}
                    className="stroke-slate-900"
                  />
                )}
              </button>
              <ShareDialog activity={activity} />
            </div>
          </div>
          <ActiveLocationInfo
            type={activityType}
            location={activity.location}
            address={activity.address}
          />
          <div className="h-8px"></div>
          <ActivityScheduleInfo activity={activity} />
        </div>
      </div>
    </>
  );
};

export default MainActivityCard;
