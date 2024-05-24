'use client';
import { useState } from 'react';

interface WishiListTabsProps {
  totalCount: number;
}

const WishListTabs: React.FC<WishiListTabsProps> = ({ totalCount }) => {
  const [selectedTabValue, setSelectedTabValue] = useState('');
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
  return (
    <div className="flex justify-between">
      {tabs.map(tab => (
        <div key={tab.title} className="flex  items-center justify-center">
          <button
            onClick={() => setSelectedTabValue(tab.value)} // 수정된 부분
            className={`h-[40px] w-[80px] border-b-[2px] pb-8px font-medium ${tab.value === selectedTabValue ? 'border-slate-900 text-black' : 'border-transparent text-slate-500'}`}
          >
            {tab.title} {tab.value === '' ? <span>({totalCount})</span> : null}
          </button>
        </div>
      ))}
    </div>
  );
};
export default WishListTabs;
