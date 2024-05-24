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
  id: number;
  name: string;
  description: string;
  icon: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
  profileImage: string;
  mbti: string;
  ageRange: string;
  gender: string;
  region: string;
  socialType: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export enum ACTIVITY_TYPE {
  EVENT = 'event',
  MEETING = 'meeting',
  PLACE = 'place',
  NONE = 'none',
}

export type ActivityType = ACTIVITY_TYPE;
