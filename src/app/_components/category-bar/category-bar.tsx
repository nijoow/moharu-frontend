import { HomeSearchParams } from '@/app/(with-navigation)/page';
import { cn, createQueryString } from '@/lib/utils';
import { Category } from '@/types/type';
import Image from 'next/image';
import Link from 'next/link';

interface CategoryBarProps {
  categoryList: Category[];
  searchParams: HomeSearchParams;
}

const CategoryBar: React.FC<CategoryBarProps> = ({
  categoryList,
  searchParams,
}) => {
  const categoryId = searchParams?.categoryId;

  return (
    <div className="scroll-x flex justify-between border-b border-slate-200 px-24px">
      {categoryList.length > 0
        ? categoryList.map(category => (
            <Link
              href={`/?${createQueryString({
                key: 'categoryId',
                value: category.id.toString(),
                prevSearchParams: new URLSearchParams(searchParams),
              })}`}
              key={category.id}
              className={cn(
                `flex h-[76px] w-[70px] cursor-pointer flex-col items-center justify-center border-b border-white`,
                {
                  'border-slate-900': category.id.toString() === categoryId,
                },
              )}
            >
              <Image
                src={`/images/icons/${category.icon}.svg`}
                alt={category.name}
                width={20}
                height={20}
              />
              <p className="my-12px"> {category.name}</p>
            </Link>
          ))
        : null}
    </div>
  );
};

export default CategoryBar;
