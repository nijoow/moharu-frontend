'use client';
import { useState } from 'react';

interface WishiListTabsProps {
  totalCount: number;
  onTabChange: (value: string) => void; // 새로운 props 추가
}

const WishListTabs: React.FC<WishiListTabsProps> = ({
  totalCount,
  onTabChange,
}) => {
  const [selectedTabValue, setSelectedTabValue] = useState('');

  const handleTabChange = (value: string) => {
    setSelectedTabValue(value);
    onTabChange(value); // 탭이 변경될 때마다 콜백 호출
  };

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
            onClick={() => handleTabChange(tab.value)} // 수정된 부분
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
