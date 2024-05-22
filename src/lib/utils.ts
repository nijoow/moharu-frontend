import { ACTIVITY_TYPE, ActivityType } from '@/types/type';
import { clsx, type ClassValue } from 'clsx';
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
