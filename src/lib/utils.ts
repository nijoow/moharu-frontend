import { ACTIVITY_TYPE, Activity } from '@/types/type';
import { clsx, type ClassValue } from 'clsx';
import moment from 'moment';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ActivityInfo {
  type: ACTIVITY_TYPE;
  linkText: string;
}

export function getActivityInfoByType(activityType: string): ActivityInfo {
  switch (activityType) {
    case 'event':
      return {
        type: ACTIVITY_TYPE.EVENT,
        linkText: '전시 상세 내용 보러가기',
      };
    case 'meeting':
      return {
        type: ACTIVITY_TYPE.MEETING,
        linkText: '모임 상세 내용 보러가기',
      };
    case 'place':
      return {
        type: ACTIVITY_TYPE.EVENT,
        linkText: '홈페이지 보러가기',
      };
    default:
      return {
        type: ACTIVITY_TYPE.EVENT,
        linkText: '링크 없음',
      };
    // throw new Error(`Invalid activity type: ${activityType}`);
  }
}

// TODO: getActivitySchedule activity 필드 맞추기
export const getActivitySchedule = (activity: Activity) => {
  const startDate = moment(activity.startDate).format('YYYY.MM.DD');
  const endDate = moment(activity.endDate).format('YYYY.MM.DD');

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
