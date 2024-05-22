export interface Activity {
  activityId: string;
  title: string;
  description: string;
  categoryId: string;
  imageUrl: string;
  type: string;
  address: string;
  location: string;
  tags: string[];
  activityDate: string;
  activityStartDate: string;
  activityEndDate: string;
  registerDate: string;
}

export interface Category {
  categoryId: string;
  name: string;
  description: string;
  icon: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
  profileImage: string;
  age: number;
  socialId: string;
  mbti: string;
  region: string;
}

export enum ACTIVITY_TYPE {
  EVENT = 'event',
  MEETING = 'meeting',
  PLACE = 'place',
}

export type ActivityType = ACTIVITY_TYPE;
