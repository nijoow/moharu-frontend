'use client';

import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { createQueryString } from '@/lib/utils';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import moment from 'moment';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const DatePicker = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedDate = searchParams.get('selectedDate');
  const [open, setOpen] = useState(false);

  const handleSelect = (date?: Date) => {
    const queryString = createQueryString({
      key: 'selectedDate',
      value: moment(date).format('YYYY-MM-DD'),
      prevSearchParams: searchParams,
    });
    router.replace(`/?${queryString}`);
    setOpen(false);
  };

  return (
    <div className="px-24px pb-12px pt-24px">
      <Popover open={open}>
        <PopoverTrigger asChild>
          <div
            className="flex w-full cursor-pointer rounded-full border-[1px] border-[#E2E8F0] px-[20px] py-[18px]"
            onClick={() => setOpen(true)}
          >
            <Image
              src="/images/icons/calendar-days.svg"
              alt="캘린더"
              width={24}
              height={24}
              className="mr-[14px]"
            />
            <span>
              {selectedDate ? (
                format(selectedDate, 'MMMM do (E)', { locale: ko })
              ) : (
                <span>날짜를 선택 해 주세요</span>
              )}
            </span>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={selectedDate ? new Date(selectedDate) : undefined}
            onSelect={handleSelect}
            initialFocus
            locale={ko}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePicker;
