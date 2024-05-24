import TitleHeader from '@/app/_components/header/title-header';
import { Activity } from '@/types/type';
import { promises as fs } from 'fs';
import WishListCard from './_component/wish-list-card';
import WishListTabs from './_component/wish-list-tabs';

export default async function WishListPage() {
  const file = await fs.readFile(
    process.cwd() + '/public/data/mainActivityList.json',
    'utf8',
  );
  const wishLists: Activity[] = JSON.parse(file);

  return (
    <>
      <TitleHeader title="위시리스트" />
      {/* TODO: 전체/전시/모임/장소 탭 구조 */}
      <div className="px-24px">
        <WishListTabs totalCount={27} />
        <div className="mt-12px grid h-full w-full grid-cols-2 gap-20px">
          {wishLists.map(wishList => (
            <WishListCard key={wishList.id} wishList={wishList} />
          ))}
        </div>
      </div>
    </>
  );
}
