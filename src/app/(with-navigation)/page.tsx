'use client';

import MainActivityCard from '@/app/_components/activity/main-activity-card';
import CategoryBar from '@/app/_components/category-bar/category-bar';
import { Activity, Category } from '@/types/type';
import { useEffect, useState } from 'react';
import CalendarDaysIcon from '/public/images/icons/calendar-days.svg';

export default function Home() {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    fetch(`data/categoryList.json`)
      .then(res => res.json())
      .then(data => {
        setCategoryList(data);
        console.log('data', data);
      });
  }, []);

  useEffect(() => {
    fetch('data/mainActivityList.json')
      .then(response => response.json())
      .then(data => setActivities(data));
  }, []);

  return (
    <main>
      {/* TODO: 날짜 선택 컴포넌트 */}
      {/* TODO: 날짜 포맷을 위한 moment 사용 여부 */}
      <div className="px-24px pb-12px pt-24px">
        <div className="flex cursor-pointer rounded-full border-[1px] border-[#E2E8F0] px-[20px] py-[18px]">
          <CalendarDaysIcon className="mr-[14px] h-6 w-6" />
          <span>5월 20일 (월)</span>
        </div>
      </div>
      {/* TODO: 카테고리 바 sticky 처리 여부 */}
      <CategoryBar categoryList={categoryList} />
      {activities.map(activity => (
        <MainActivityCard key={activity.activityId} activity={activity} />
      ))}
    </main>
  );
}
