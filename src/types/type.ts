export interface Activity {
  id: number;
  categoryId: number;
  title: string;
  coverImage: string | null;
  type: string;
  address: string;
  status: string;
  startDate: string;
  endDate: string;
  location: string;
  businessHours: string;
  holidays: string;
  additionalInfo: AdditionalInfo[];
  link: string | null;
  wished: boolean;
}

interface AdditionalInfo {
  type: string;
  label: string;
  value: string;
}
export interface Category {
  id: number | string;
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
