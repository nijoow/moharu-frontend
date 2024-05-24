import { Category } from '@/types/type';
import Image from 'next/image';
import { useState } from 'react';

interface CategoryBarProps {
  categoryList: Category[];
}

const CategoryBar: React.FC<CategoryBarProps> = ({ categoryList }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(1);

  const onClickCategoryBtn = (id: number) => () => {
    setSelectedCategoryId(id);
  };

  return (
    // TODO: 스크롤 처리
    <div className="scroll-x flex justify-between py-12px">
      {categoryList.length > 0
        ? categoryList.map(category => (
            <div
              onClick={onClickCategoryBtn(category.id)}
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
          ))
        : null}
    </div>
  );
};

export default CategoryBar;
