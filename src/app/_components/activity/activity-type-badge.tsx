import { ACTIVITY_TYPE, ActivityType } from '@/types/type';

interface ActivityTypeBadgeProps {
  type: ActivityType;
  className?: string;
}

const ActivityTypeBadge: React.FC<ActivityTypeBadgeProps> = ({
  type,
  className,
}) => {
  const bgColor =
    type === ACTIVITY_TYPE.EVENT
      ? 'bg-slate-900'
      : type === ACTIVITY_TYPE.PLACE
        ? 'bg-white'
        : type === ACTIVITY_TYPE.MEETING
          ? 'bg-pink-100'
          : '';

  const textColor =
    type === ACTIVITY_TYPE.EVENT
      ? 'text-white'
      : type === ACTIVITY_TYPE.PLACE
        ? 'text-black'
        : type === ACTIVITY_TYPE.MEETING
          ? 'text-pink-600'
          : '';

  const border =
    type === ACTIVITY_TYPE.PLACE ? 'border border-slate-300' : 'border-0';

  const text =
    type === ACTIVITY_TYPE.EVENT
      ? '전시'
      : type === ACTIVITY_TYPE.PLACE
        ? '장소'
        : type === ACTIVITY_TYPE.MEETING
          ? '모임'
          : '';

  return (
    <div
      className={`py-6px inline-flex h-[32px] items-center rounded-[8px] px-12px ${bgColor} ${textColor} ${border} ${className}`}
    >
      {text}
    </div>
  );
};

export default ActivityTypeBadge;
