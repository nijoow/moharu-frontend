'use client';

import ActiveLocationInfo from '@/app/_components/activity/activity-location-info';
import ActiveScheduleInfo from '@/app/_components/activity/activity-schedule-info';
import ActivityTypeBadge from '@/app/_components/activity/activity-type-badge';
import { ShareDialog } from '@/app/_components/dialog/share-dialog';
import { useToast } from '@/components/ui/use-toast';
import { getActivityType } from '@/lib/utils';
import { Activity } from '@/types/type';
import Link from 'next/link';
import HeartIcon from '/public/images/icons/heart.svg';

interface MainActivityCardProps {
  activity: Activity;
}

const MainActivityCard: React.FC<MainActivityCardProps> = ({ activity }) => {
  const { toast } = useToast();
  const moharuHomepageUrl = 'https://www.moharu.site';

  const activityUrl = `${moharuHomepageUrl}/activities/${activity.activityId}`;

  const activityType = getActivityType(activity.type);

  const onClickLikeBtn = () => {
    toast({
      description: 'Like button clicked',
    });
  };

  return (
    <>
      <div className="p-24px">
        <Link
          href={`/activities/${activity.activityId}`}
          className="relative mb-20px"
        >
          <div
            className="h-[340px] rounded-[12px]"
            style={{
              backgroundImage: `url(${activity.imageUrl})`,
              backgroundSize: 'cover',
            }}
          ></div>
          <ActivityTypeBadge
            className="absolute left-[14px] top-[14px]"
            type={activityType}
          />
        </Link>
        <div className="mt-20px">
          <div className="flex justify-between">
            {/* TODO: 디자인 시스템 typograph 적용  */}
            <p>{activity.title}</p>
            <div className="flex">
              <button className="mr-16px" onClick={onClickLikeBtn}>
                <HeartIcon
                  width={24}
                  height={24}
                  className="stroke-slate-900"
                />
              </button>
              <ShareDialog url={activityUrl} />
            </div>
          </div>
          <ActiveLocationInfo
            location={activity.location}
            address={activity.address}
          />
          <div className="h-8px"></div>
          <ActiveScheduleInfo activity={activity} />
        </div>
      </div>
    </>
  );
};

export default MainActivityCard;
