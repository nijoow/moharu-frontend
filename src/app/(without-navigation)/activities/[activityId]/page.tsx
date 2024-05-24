'use client';

import ActiveLocationInfo from '@/app/_components/activity/activity-location-info';
import ActivityScheduleInfo from '@/app/_components/activity/activity-schedule-info';
import ActivityTypeBadge from '@/app/_components/activity/activity-type-badge';
import Header from '@/app/_components/header/header';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { getActivityInfoByType } from '@/lib/utils';
import { Activity } from '@/types/type';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const detailInfo = [
  {
    label: '관람시간',
    content: '10:00 ~ 18:00',
  },
  {
    label: '입장료',
    content: '10,000원',
  },
  {
    label: '주차시설',
    content: '주차 가능',
  },
  {
    label: '연락처',
    content: '02-1234-5678',
  },
  {
    label: '홈페이지',
    content: 'www.naver.com',
  },
];
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
      .then(data => setActivity(data));
  }, []);

  if (!activity) return null;
  const activityType = getActivityInfoByType(activity.type).type;
  const linkText = getActivityInfoByType(activity.type).linkText;

  return (
    <>
      {/* TODO:overlay header 필요 */}
      <Header backButton shareButton transparent={true} />
      <div className="h-full">
        <div
          className="h-[460px]"
          style={{
            backgroundImage: `url(${activity.coverImage})`,
            backgroundSize: 'cover',
          }}
        ></div>
        <div className="px-24px py-20px">
          <div className="flex-col  pb-24px">
            <ActivityTypeBadge type={activityType} />
            <h4 className="my-8px text-20px font-bold">{activity.title}</h4>

            <ActiveLocationInfo
              location={activity.location}
              address={activity.address}
            />
            <div className="h-8px"></div>
            <ActivityScheduleInfo activity={activity} />
          </div>
          <div className="border-b border-t border-[#E2E8F0] py-24px">
            {detailInfo.map((info, index) => (
              <div key={index} className="row flex">
                <div className="label w-[100px]">{info.label}</div>
                <div className="content">{info.content}</div>
              </div>
            ))}
            <div className="row">
              <div className="label"></div>
              <div className="content"></div>
            </div>
          </div>
          {/* TODO: href 연동 */}
          <a
            className="inline-block cursor-pointer py-24px text-pink-500"
            href="https://www.naver.com"
            target="_blank"
          >
            {linkText}
          </a>
        </div>
      </div>
      <Button size="big" onClick={onClickLikeBtn}>
        위시리스트에 저장하기
      </Button>
    </>
  );
}
