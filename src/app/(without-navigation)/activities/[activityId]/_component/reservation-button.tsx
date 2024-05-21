'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

interface ReservationButtonProps {
  activityId: string;
}
const ReservationButton: React.FC<ReservationButtonProps> = ({
  activityId,
}) => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push(`/activities/${activityId}/reservation`)}
      className="sticky bottom-0 left-0 mt-auto w-full"
    >
      예약하기
    </Button>
  );
};

export default ReservationButton;
