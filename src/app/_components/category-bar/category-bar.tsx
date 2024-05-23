import { Category } from '@/types/type';
import Image from 'next/image';

interface CategoryBarProps {
  categoryList: Category[];
}

const CategoryBar: React.FC<CategoryBarProps> = ({ categoryList }) => {
  const selectedCategoryId = 1;
  return (
    <div className="scroll-x flex justify-between py-12px">
      {categoryList.map(category => (
        <div
          key={category.id}
          className={`flex w-[70px] cursor-pointer flex-col items-center justify-center ${category.id === selectedCategoryId ? 'border-b border-black' : ''}`}
        >
          {/* TODO: 이미지처리 */}
          <Image
            src={`/images/icons/${category.icon}.svg`}
            alt={category.name}
            width={20}
            height={20}
          />
          {/* <CalendarIcon
            width={20}
            height={20}
            className="mr-12px stroke-slate-400"
          /> */}
          <p className="my-12px"> {category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryBar;
