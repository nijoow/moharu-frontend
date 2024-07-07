import CategoryBar from '@/app/_components/category-bar/category-bar';
import Footer from '@/app/_components/footer/footer';
import { auth } from '@/auth';
import { serverSideFetchWithToken } from '@/lib/fetch';
import { Activity } from '@/types/type';
import MainActivityCard from '../_components/activity/main-activity-card';
import DatePicker from './_components/navigation-bar/date-picker';

export type HomeSearchParams = {
  selectedDate?: string;
  categoryId?: string;
  from?: string;
};
export default async function Home({
  searchParams,
}: {
  searchParams: HomeSearchParams;
}) {
  const session = await auth();

  const categoryResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/activities-category`,
  );
  const categoryData = await categoryResponse.json();
  const categoryList = [
    session
      ? { id: '', name: '추천', description: '추천 내용', icon: 'package-3' }
      : { id: '', name: '전체', description: '전체 내용', icon: 'list' },
    ...categoryData,
  ];

  const activitiesResponse = await serverSideFetchWithToken(
    `/activities?categoryId=${searchParams.categoryId ?? ''}&selectedDate=${searchParams.selectedDate ?? ''}`,
  );
  const activitiesData = await activitiesResponse.json();
  const activities: Activity[] = activitiesData.activities?.map(
    (activity: Activity) => ({
      ...activity,
      isWish: activitiesData.wishedActivityIds.includes(activity.id),
    }),
  );
  return (
    <>
      <div className="fixed z-10 w-full max-w-md bg-white">
        <DatePicker />
        <CategoryBar categoryList={categoryList} searchParams={searchParams} />
      </div>

      <div className="mt-[180px] flex flex-auto flex-col">
        {activities?.length > 0 ? (
          activities?.map(activity => (
            <MainActivityCard key={activity.id} activity={activity} />
          ))
        ) : (
          <div className="m-auto text-slate-500">활동이 존재하지 않습니다.</div>
        )}

        <Footer />
      </div>
    </>
  );
}
