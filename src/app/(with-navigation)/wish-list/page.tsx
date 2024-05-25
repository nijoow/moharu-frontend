'use client';

import TitleHeader from '@/app/_components/header/title-header';
import { fetchWithToken } from '@/lib/fetch';
import { Activity } from '@/types/type';
import { useEffect, useState } from 'react';
import WishListCard from './_component/wish-list-card';
import WishListTabs from './_component/wish-list-tabs';

export default function WishListPage() {
  const [wishList, setWishList] = useState<Activity[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  const handleTabChange = (value: string) => {
    fetchData(value);
  };

  const fetchData = (value: string) => {
    fetchWithToken(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/activities/wish/list?type=${value}`,
    ).then(data => {
      setWishList(data.activities);

      // totalCount 를 전체 일때만 변경
      if (value === '') {
        setTotalCount(data.totalCount);
      }
    });
  };

  useEffect(() => {
    fetchData('');
  }, []);

  return (
    <>
      <TitleHeader title="위시리스트" />
      <div className="bg-white px-24px">
        <WishListTabs totalCount={totalCount} onTabChange={handleTabChange} />
        <div className="mt-12px grid h-full w-full grid-cols-2 gap-20px">
          {wishList.length > 0 ? (
            wishList.map(wishList => (
              <WishListCard key={wishList.id} wishList={wishList} />
            ))
          ) : (
            <div className="flex items-center">위시리스트가 없습니다.</div>
          )}
        </div>
      </div>
    </>
  );
}
