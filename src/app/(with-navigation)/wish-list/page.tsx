import TitleHeader from '@/app/_components/header/title-header';
import { serverSideFetchWithToken } from '@/lib/fetch';
import { Activity } from '@/types/type';
import WishListCard from './_component/wish-list-card';
import WishListTabs from './_component/wish-list-tabs';

export default async function WishListPage({
  searchParams: { category = '' },
}: {
  searchParams: { category: string };
}) {
  const response = await serverSideFetchWithToken(
    `/activities/wish/list?type=${category}`,
  );
  const data = await response.json();

  const wishList: Activity[] = data.activities;

  return (
    <>
      <TitleHeader title="위시리스트" />
      <div className="mb-6 flex h-fit flex-auto flex-col px-24px">
        <WishListTabs category={category} />
        <div className="mt-12px grid h-auto w-full flex-auto grid-cols-2 gap-20px">
          {wishList.length > 0 ? (
            wishList.map(wishList => (
              <WishListCard key={wishList.id} wishList={wishList} />
            ))
          ) : (
            <div className="col-span-2 flex h-full w-full items-center justify-center text-slate-500">
              위시리스트가 존재하지 않습니다.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
