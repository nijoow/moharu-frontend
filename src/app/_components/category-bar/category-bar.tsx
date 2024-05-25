import { Category } from '@/types/type';
import Image from 'next/image';

interface CategoryBarProps {
  categoryList: Category[];
  selectedCategoryId: string;
  onCategorySelect: (id: string) => void;
}

const CategoryBar: React.FC<CategoryBarProps> = ({
  categoryList,
  selectedCategoryId,
  onCategorySelect,
}) => {
  const onClickCategoryBtn = (id: number | string) => () => {
    onCategorySelect(id.toString());
  };

  return (
    // TODO: 스크롤 처리
    <div className="scroll-x flex justify-between px-24px py-12px">
      {categoryList.length > 0
        ? categoryList.map(category => (
            <div
              onClick={onClickCategoryBtn(category.id)}
              key={category.id}
              className={`flex w-[70px] cursor-pointer flex-col items-center justify-center border-b ${category.id.toString() === selectedCategoryId ? ' border-slate-900' : 'border-white'}`}
            >
              {/* TODO: 이미지처리 */}
              <Image
                src={`/images/icons/${category.icon}.svg`}
                alt={category.name}
                width={20}
                height={20}
              />
              <p className="my-12px"> {category.name}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default CategoryBar;
