import { ACTIVITY_TYPE, Activity } from '@/types/type';
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
  let scheduleInfo = '';
  switch (activity.type) {
    case ACTIVITY_TYPE.EVENT:
      scheduleInfo = `${startDate} ~ ${endDate}`;
      break;
    case ACTIVITY_TYPE.MEETING:
      scheduleInfo = `${startDate} ${activity.businessHours}`;
      break;
    case ACTIVITY_TYPE.PLACE:
      scheduleInfo = `${activity.businessHours}`;
      break;
    default:
      break;
  }
  return (
    <div className="flex">
      <CalendarIcon
        width={20}
        height={20}
        className="mr-12px stroke-slate-400"
      />
      <p>{scheduleInfo}</p>
    </div>
  );
};

export default ActivityScheduleInfo;
