'use client';

import ActivityLocationInfo from '@/app/_components/activity/activity-location-info';
import ActivityScheduleInfo from '@/app/_components/activity/activity-schedule-info';
import ActivityTypeBadge from '@/app/_components/activity/activity-type-badge';
import BackgroundImageWithPlaceholder from '@/app/_components/common/background-image-with-placeholder';
import Header from '@/app/_components/header/header';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { getActivityInfoByType } from '@/lib/utils';
import { Activity } from '@/types/type';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ActivityPage() {
  const params = useParams<{ activityId: string }>();
  const [activity, setActivity] = useState<Activity | null>(null);
  const onClickLikeBtn = () => {
    toast({
      description: 'Like button clicked',
    });
  };

  useEffect(() => {
    fetch(`/apis/activities/${params.activityId}`)
      .then(response => response.json())
      .then(data =>
        setActivity({
          ...data.activity,
          isWish: data.isWish,
        }),
      );
  }, []);

  if (!activity) return null;
  const activityType = getActivityInfoByType(activity.type).type;
  const linkText = getActivityInfoByType(activity.type).linkText;

  return (
    <>
      <Header backButton shareButton transparent={true} />
      <div className="h-full">
        <BackgroundImageWithPlaceholder
          src={activity.coverImage}
          className="h-[460px]"
        />
        <div className="px-24px py-20px">
          <div className="flex-col  pb-24px">
            <ActivityTypeBadge type={activityType} />
            <h4 className="my-8px text-20px font-bold">{activity.title}</h4>

            <ActivityLocationInfo
              type={activityType}
              location={activity.location}
              address={activity.address}
            />
            <div className="h-8px"></div>
            <ActivityScheduleInfo activity={activity} />
          </div>
          <div className="border-b border-t border-[#E2E8F0] py-24px">
            {activity.additionalInfo &&
              activity.additionalInfo.map((info, index) => (
                <div key={index} className="mb-12px flex">
                  <div className="label w-[70px] flex-shrink-0 font-medium">
                    {info.label}
                  </div>
                  <div>{info.value}</div>
                </div>
              ))}
          </div>
          {activity.link && (
            <a
              className="inline-block cursor-pointer py-24px text-pink-500"
              href={activity.link}
              target="_blank"
            >
              {linkText}
            </a>
          )}
        </div>
      </div>
      {/* TODO: activity.isWish 값에 따라 처리 */}
      <Button size="big" onClick={onClickLikeBtn}>
        위시리스트에 저장하기
      </Button>
    </>
  );
}
