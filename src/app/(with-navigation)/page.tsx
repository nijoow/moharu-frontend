'use client';

import MainActivityCard from '@/app/_components/activity/main-activity-card';
import CategoryBar from '@/app/_components/category-bar/category-bar';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Activity, Category } from '@/types/type';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [date, setDate] = useState<Date>();

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
    <>
      {/* TODO: 날짜 포맷을 위한 moment 사용 여부 */}
      <div className="px-24px pb-12px pt-24px">
        <Popover>
          <PopoverTrigger asChild>
            <div className="flex cursor-pointer rounded-full border-[1px] border-[#E2E8F0] px-[20px] py-[18px]">
              <Image
                src="/images/icons/calendar-days.svg"
                alt="위치"
                width={24}
                height={24}
                className="mr-[14px]"
              />
              {/* <CalendarDaysIcon className="mr-[14px] h-6 w-6" /> */}

              <span>
                {date ? (
                  format(date, 'MMMM do (E)', { locale: ko })
                ) : (
                  <span>Pick a date</span>
                )}
              </span>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              locale={ko}
            />
          </PopoverContent>
        </Popover>
      </div>
      {/* TODO: 카테고리 바 sticky 처리 여부 */}
      <CategoryBar categoryList={categoryList} />
      {activities.map(activity => (
        <MainActivityCard key={activity.activityId} activity={activity} />
      ))}
    </>
  );
}
