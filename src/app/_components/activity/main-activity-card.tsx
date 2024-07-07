'use client';

import ActiveLocationInfo from '@/app/_components/activity/activity-location-info';
import ActivityScheduleInfo from '@/app/_components/activity/activity-schedule-info';
import ActivityTypeBadge from '@/app/_components/activity/activity-type-badge';
import { ShareDialog } from '@/app/_components/dialog/share-dialog';
import { getActivityInfoByType } from '@/lib/utils';
import { Activity } from '@/types/type';
import { ShareIcon } from 'lucide-react';
import Link from 'next/link';
import BackgroundImageWithPlaceholder from '../common/background-image-with-placeholder';
import { LikeToast } from './like-toast';
import WishButton from './wish-button';
interface MainActivityCardProps {
  activity: Activity;
}

const MainActivityCard: React.FC<MainActivityCardProps> = ({ activity }) => {
  const activityType = getActivityInfoByType(activity.type).type;

  const onClickLikeBtn = () => {
    LikeToast({ isWish: activity.isWish ?? false, id: activity.id });
  };

  return (
    <>
      <div className="mb-auto bg-white p-24px">
        <Link href={`/activities/${activity.id}`}>
          <div className="relative mb-20px">
            <BackgroundImageWithPlaceholder
              src={activity.coverImage}
              className="h-[340px] rounded-[12px]"
            />
            <ActivityTypeBadge
              className="absolute left-[14px] top-[14px]"
              type={activityType}
            />
          </div>
        </Link>
        <div className="mt-20px">
          <div className="mb-8px flex justify-between">
            {/* TODO: 디자인 시스템 typograph 적용  */}
            <p className="text-20px font-bold">{activity.title}</p>
            <div className="flex items-start">
              <WishButton
                className="mr-16px"
                isWish={activity.isWish ?? false}
                activityId={activity.id}
              />
              <ShareDialog
                activity={activity}
                triggerComponent={
                  <button
                    type="button"
                    className="flex items-center justify-center rounded-full bg-white/60"
                  >
                    <ShareIcon
                      width={24}
                      height={24}
                      className="stroke-slate-900"
                    />
                  </button>
                }
              />
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
