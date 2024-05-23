import { ChevronRight } from 'lucide-react';

const SectionList = ({
  title,
  list,
  totalCount,
}: {
  title: string;
  list: any[];
  totalCount: number;
}) => (
  <div>
    <div className="mb-12px flex h-[38px] items-center justify-between">
      <div className="flex">
        <div>{title}</div>
        <div className="text-pink-500">{totalCount}</div>
      </div>
      <button>
        <ChevronRight width={24} height={24} />
      </button>
    </div>
    <div className="grid grid-cols-3 gap-x-3">
      {list.slice(0, 3).map(item => (
        <div
          key={item.id}
          className="h-[140px] rounded-[12px]"
          style={{
            backgroundImage: `url(${item.coverImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      ))}
    </div>
  </div>
);

export default SectionList;
