import { Activity } from '@/types/type';
import { CalendarIcon } from 'lucide-react';
import moment from 'moment';

interface ActivityScheduleInfoProps {
  activity: Activity;
}

const ActivityScheduleInfo: React.FC<ActivityScheduleInfoProps> = ({
  activity,
}) => {
  // TODO: activity.type에 따라 다른 형태로 표시
  const startDate = moment(activity.startDate).format('YYYY.MM.DD');
  const endDate = moment(activity.endDate).format('YYYY.MM.DD');
  return (
    <div className="flex">
      <CalendarIcon
        width={20}
        height={20}
        className="mr-12px stroke-slate-400"
      />
      <p>
        {startDate} ~ {endDate}
      </p>
    </div>
  );
};

export default ActivityScheduleInfo;
