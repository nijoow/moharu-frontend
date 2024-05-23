import SubHeader from '@/app/_components/header/sub-header';
import { Activity } from '@/types/type';
import { promises as fs } from 'fs';
import PaymentButton from './_components/payment-button';

export default async function ReservationPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const file = await fs.readFile(
    process.cwd() + '/public/data/mainActivityList.json',
    'utf8',
  );
  const activitys: Activity[] = JSON.parse(file);
  const activity = activitys.find(activity => String(activity.id) === id);
  if (!activity) return null;

  return (
    <>
      <SubHeader title="예약하기" />
      {activity.title} 예약페이지
      <PaymentButton id={String(activity.id)}></PaymentButton>
    </>
  );
}
