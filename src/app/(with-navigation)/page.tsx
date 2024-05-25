'use client';

import MainActivityCard from '@/app/_components/activity/main-activity-card';
import CategoryBar from '@/app/_components/category-bar/category-bar';
import Footer from '@/app/_components/footer/footer';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Activity, Category } from '@/types/type';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import moment from 'moment';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const { data: session } = useSession();

  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');

  const handleSelect = (date?: Date) => {
    setSelectedDate(date);
    // TODO: 달력 선택 시, 달력 닫히도록 처리
    // onClose();
  };

  const fetchCategories = () => {
    fetch(`https://api.moharu.site/activities-category`)
      .then(res => res.json())
      .then(data => {
        data.unshift({
          id: '',
          name: '전체',
          description: '전체 내용',
          icon: 'list',
        });
        setCategoryList(data);
      });
  };

  const fetchActivities = () => {
    const formattedDate = selectedDate
      ? moment(selectedDate).format('YYYY-MM-DD')
      : '';
    const url = `https://api.moharu.site/activities?categoryId=${selectedCategoryId}&selectedDate=${formattedDate}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const wishedActivityIds = [11, 12, 13, 14]; // 임시 값
        const activitiesWithWishStatus: Activity[] = data.activities.map(
          (activity: Activity) => {
            return {
              ...activity,
              wished: wishedActivityIds.includes(activity.id),
            };
          },
        );

        setActivities(activitiesWithWishStatus);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchActivities();
  }, [selectedCategoryId, selectedDate]);
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
                {selectedDate ? (
                  format(selectedDate, 'MMMM do (E)', { locale: ko })
                ) : (
                  <span>Pick a date</span>
                )}
              </span>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleSelect}
              initialFocus
              locale={ko}
            />
          </PopoverContent>
        </Popover>
      </div>
      {/* TODO: 카테고리 바 sticky 처리 여부 */}
      <CategoryBar
        categoryList={categoryList}
        selectedCategoryId={selectedCategoryId}
        onCategorySelect={setSelectedCategoryId}
      />
      {activities.length > 0
        ? activities?.map(activity => (
            <MainActivityCard key={activity.id} activity={activity} />
          ))
        : null}
      {/* TODO: footer 컴포넌트 분리 및 UI, link 작업 */}
      <Footer />
    </>
  );
}
