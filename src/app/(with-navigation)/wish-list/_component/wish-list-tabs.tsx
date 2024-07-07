import { serverSideFetchWithToken } from '@/lib/fetch';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface WishiListTabsProps {
  category: string;
}

const tabs = [
  {
    title: '전체',
    value: '',
  },
  {
    title: '전시',
    value: 'event',
  },
  {
    title: '모임',
    value: 'meeting',
  },
  {
    title: '장소',
    value: 'place',
  },
];

const WishListTabs: React.FC<WishiListTabsProps> = async ({ category }) => {
  const response = await serverSideFetchWithToken(`/activities/wish/list`);
  const data = await response.json();
  const totalCount = data.totalCount;

  return (
    <div className="flex justify-between">
      {tabs.map(tab => (
        <Link
          key={tab.title}
          href={`/wish-list?category=${tab.value}`}
          className={cn(
            `flex h-[40px] w-[80px] items-center  justify-center border-b-[2px] border-transparent pb-8px font-medium text-slate-500`,
            {
              'border-slate-900 text-black': tab.value === category,
            },
          )}
        >
          {tab.title} {tab.value === '' ? <span>({totalCount})</span> : null}
        </Link>
      ))}
    </div>
  );
};
export default WishListTabs;
