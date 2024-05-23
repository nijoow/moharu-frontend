import { Activity } from '@/types/type';
import { promises as fs } from 'fs';
import WishListCard from './_component/wish-list-card';

export default async function WishListPage() {
  const file = await fs.readFile(
    process.cwd() + '/public/data/mainActivityList.json',
    'utf8',
  );
  const wishLists: Activity[] = JSON.parse(file);

  return (
    <>
      {/* TODO: 헤더 처리 (위시리스트, 프로필) */}
      <div>위시리스트</div>
      {/* TODO: 전체/전시/모임/장소 탭 구조 */}
      <div>전체/전시/모임/장소 탭 구조</div>
      <div className="grid h-full w-full grid-cols-2">
        {wishLists.map(wishList => (
          <WishListCard key={wishList.id} wishList={wishList} />
        ))}
      </div>
    </>
  );
}
