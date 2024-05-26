'use client';

import ActivityLocationInfo from '@/app/_components/activity/activity-location-info';
import ActivityScheduleInfo from '@/app/_components/activity/activity-schedule-info';
import ActivityTypeBadge from '@/app/_components/activity/activity-type-badge';
import BackgroundImageWithPlaceholder from '@/app/_components/common/background-image-with-placeholder';
import Header from '@/app/_components/header/header';
import { Button } from '@/components/ui/button';
import { fetchWithToken } from '@/lib/fetch';
import { getActivityInfoByType } from '@/lib/utils';
import { Activity } from '@/types/type';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ActivityPage() {
  const params = useParams<{ activityId: string }>();
  const [activity, setActivity] = useState<Activity | null>(null);
  const onClickMoveUrl = () => {
    if (activity === null || activity.link === null) return;
    window.open(activity.link);
  };

  useEffect(() => {
    fetchWithToken(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/activities/${params.activityId}`,
    )
      .then(res => res.json())
      .then(data =>
        setActivity({
          ...data.activity,
          isWish: data.isWish,
        }),
      );
  }, []);

  if (!activity) return null;
  const activityType = getActivityInfoByType(activity.type).type;

  return (
    <>
      <Header
        backButton
        shareButton
        likeButton
        transparent={true}
        isWish={activity.isWish ?? false}
        activity={activity}
      />
      <div className="mb-[48px] h-full">
        <BackgroundImageWithPlaceholder
          src={activity.coverImage}
          className="h-[460px]"
        />
        <div className="bg-white px-24px py-20px">
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
          <div className="border-t border-[#E2E8F0] py-24px">
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
        </div>
      </div>
      {activity.link && (
        <Button
          size="big"
          onClick={onClickMoveUrl}
          className="fixed bottom-0 mx-auto max-w-md"
        >
          공식 홈페이지로 이동하기
        </Button>
      )}
    </>
  );
}
