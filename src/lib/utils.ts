import { ACTIVITY_TYPE, Activity, ActivityType } from '@/types/type';
import { clsx, type ClassValue } from 'clsx';
import moment from 'moment';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getActivityType(activityType: string): ActivityType {
  switch (activityType) {
    case 'event':
      return ACTIVITY_TYPE.EVENT;
    case 'meeting':
      return ACTIVITY_TYPE.MEETING;
    case 'place':
      return ACTIVITY_TYPE.PLACE;
    default:
      throw new Error(`Invalid activity type: ${activityType}`);
  }
}

// TODO: getActivitySchedule activity 필드 맞추기
export const getActivitySchedule = (activity: Activity) => {
  const startDate = moment(activity.startDate).format('YYYY.MM.DD일');
  const endDate = moment(activity.endDate).format('YYYY.MM.DD일');

  switch (activity.type) {
    case 'event':
      return `${startDate}`;
    case 'meeting':
      return `${startDate} ~ ${endDate}`;
    case 'place':
      // TODO: place 시간 데이터 반영
      return `매일 9:00 ~ 18:00`;
    default:
      return '';
  }
};
