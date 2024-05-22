import { Activity } from '@/types/type';
import Image from 'next/image';

interface ScheduleInfoProps {
  activity: Activity;
}

const ScheduleInfo: React.FC<ScheduleInfoProps> = ({ activity }) => (
  <div className="flex">
    <Image
      className="mr-12px"
      src="/images/icons/calendar.svg"
      alt="calendar"
      width={16}
      height={16}
    />
    <p>
      {activity.activityStartDate} ~ {activity.activityEndDate}
    </p>
  </div>
);

export default ScheduleInfo;
