import BackgroundImageWithPlaceholder from '@/app/_components/common/background-image-with-placeholder';
import { Activity } from '@/types/type';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const SectionList = ({
  title,
  list,
  totalCount,
}: {
  title: string;
  list: Activity[];
  totalCount: number;
}) => (
  <div>
    <div className="mb-12px flex h-[38px] items-center justify-between">
      <div className="flex">
        <div className="mr-8px font-medium">{title}</div>
        <div className="text-pink-500">{totalCount}</div>
      </div>
      <Link href="/wish-list">
        <ChevronRight width={24} height={24} />
      </Link>
    </div>
    <div className="grid grid-cols-3 gap-x-3">
      {list.slice(0, 3).map(item => (
        <Link href={`/activities/${item.id}`} key={item.id}>
          <BackgroundImageWithPlaceholder
            src={item.coverImage}
            className="h-[140px] w-full rounded-[12px]"
          />
        </Link>
      ))}
    </div>
  </div>
);

export default SectionList;
