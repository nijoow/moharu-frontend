import { Category } from '@/types/type';
import Image from 'next/image';

interface CategoryBarProps {
  categoryList: Category[];
}

const CategoryBar: React.FC<CategoryBarProps> = ({ categoryList }) => {
  return (
    <div className="scroll-x flex justify-between p-5">
      {categoryList.map(category => (
        <div key={category.categoryId} className="cursor-pointer">
          <Image
            src={`/images/icons/${category.icon}.svg`}
            alt={category.name}
            width={20}
            height={20}
          />
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryBar;
