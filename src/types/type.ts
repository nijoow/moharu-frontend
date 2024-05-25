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
  isWish?: boolean;
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

export interface ProfilWishedActivity {
  id: number;
  activitiesId: number;
  activity: {
    id: number;
    coverImage: string | null;
    type: string;
    activityCategory: {
      name: string;
    };
  };
}
export interface UserProfile {
  id: number;
  name: string;
  profileImage: string | null;
  mbti: string;
  ageRange: string;
  gender: string;
  region: string;
}

export enum ACTIVITY_TYPE {
  EVENT = 'event',
  MEETING = 'meeting',
  PLACE = 'place',
  NONE = 'none',
}

export type ActivityType = ACTIVITY_TYPE;
