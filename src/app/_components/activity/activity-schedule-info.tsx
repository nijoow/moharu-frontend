import { Activity } from '@/types/type';
import { CalendarIcon } from 'lucide-react';

interface ActivityScheduleInfoProps {
  activity: Activity;
}

const ActivityScheduleInfo: React.FC<ActivityScheduleInfoProps> = ({
  activity,
}) => (
  <div className="flex">
    <CalendarIcon width={20} height={20} className="mr-12px stroke-slate-400" />
    <p>
      {activity.startDate} ~ {activity.endDate}
    </p>
  </div>
);

export default ActivityScheduleInfo;
