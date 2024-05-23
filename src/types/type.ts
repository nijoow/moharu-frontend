export interface Activity {
  id: number;
  categoryId: number;
  title: string;
  coverImage: string;
  type: string;
  address: string;
  status: string;
  startDate: string;
  endDate: string;
  location: string;
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
