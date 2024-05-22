import ActiveLocationInfo from '@/app/_components/activity/activity-location-info';
import ActiveScheduleInfo from '@/app/_components/activity/activity-schedule-info';
import ActivityTypeBadge from '@/app/_components/activity/activity-type-badge';
import { getActivityType } from '@/lib/utils';
import { Activity } from '@/types/type';
import ReservationButton from './_component/reservation-button';

const activities = [
  {
    activityId: '1',
    title: 'Activity 1',
    description: 'Activity 1 Description',
    categoryId: '1',
    imageUrl: 'https://img.vogue.co.kr/vogue/2021/04/style_608bc2c4e9442.jpg',
    type: 'event',
    address: 'Addressssss',
    location: 'Location 1',
    tags: ['tag1', 'tag2'],
    activityDate: '2022-01-01',
    activityStartDate: '2022-01-01',
    activityEndDate: '2022-01-01',
    registerDate: '2021-12-01',
  },
  {
    activityId: '2',
    title: 'Activity 2',
    description: 'Activity 2 Description',
    categoryId: '2',
    imageUrl: '/images/logo/Logo_Image_Main_Moharu.png',
    type: 'event',
    address: 'Addressssss',
    location: 'Location 2',
    tags: ['tag3', 'tag4'],
    activityDate: '2022-02-01',
    activityStartDate: '2022-01-01',
    activityEndDate: '2022-01-01',
    registerDate: '2021-12-02',
  },
  {
    activityId: '3',
    title: 'Activity 3',
    description: 'Activity 3 Description',
    categoryId: '3',
    imageUrl: '/images/logo/Logo_Image_Main_Moharu.png',
    type: 'event',
    address: 'Addressssss',
    location: 'Location 3',
    tags: ['tag5', 'tag6'],
    activityDate: '2022-03-01',
    activityStartDate: '2022-01-01',
    activityEndDate: '2022-01-01',
    registerDate: '2021-12-03',
  },
  {
    activityId: '4',
    title: 'Activity 4',
    description: 'Activity 4 Description',
    categoryId: '4',
    imageUrl: '/images/logo/Logo_Image_Main_Moharu.png',
    type: 'event',
    address: 'Addressssss',
    location: 'Location 4',
    tags: ['tag7', 'tag8'],
    activityDate: '2022-04-01',
    activityStartDate: '2022-01-01',
    activityEndDate: '2022-01-01',
    registerDate: '2021-12-04',
  },
  {
    activityId: '5',
    title: 'Activity 5',
    description: 'Activity 5 Description',
    categoryId: '5',
    imageUrl: '/images/logo/Logo_Image_Main_Moharu.png',
    type: 'event',
    address: 'Addressssss',
    location: 'Location 5',
    tags: ['tag9', 'tag10'],
    activityDate: '2022-05-01',
    activityStartDate: '2022-01-01',
    activityEndDate: '2022-01-01',
    registerDate: '2021-12-05',
  },
  {
    activityId: '6',
    title: 'Activity 6',
    description: 'Activity 6 Description',
    categoryId: '6',
    imageUrl: '/images/logo/Logo_Image_Main_Moharu.png',
    type: 'event',
    address: 'Addressssss',
    location: 'Location 6',
    tags: ['tag11', 'tag12'],
    activityDate: '2022-06-01',
    activityStartDate: '2022-01-01',
    activityEndDate: '2022-01-01',
    registerDate: '2021-12-06',
  },
  {
    activityId: '7',
    title: 'Activity 7',
    description: 'Activity 7 Description',
    categoryId: '7',
    imageUrl: '/images/logo/Logo_Image_Main_Moharu.png',
    type: 'event',
    address: 'Addressssss',
    location: 'Location 7',
    tags: ['tag13', 'tag14'],
    activityDate: '2022-07-01',
    activityStartDate: '2022-01-01',
    activityEndDate: '2022-01-01',
    registerDate: '2021-12-07',
  },
  {
    activityId: '8',
    title: 'Activity 8',
    description: 'Activity 8 Description',
    categoryId: '8',
    imageUrl: '/images/logo/Logo_Image_Main_Moharu.png',
    type: 'event',
    address: 'Addressssss',
    location: 'Location 8',
    tags: ['tag15', 'tag16'],
    activityDate: '2022-08-01',
    activityStartDate: '2022-01-01',
    activityEndDate: '2022-01-01',
    registerDate: '2021-12-08',
  },
  {
    activityId: '9',
    title: 'Activity 9',
    description: 'Activity 9 Description',
    categoryId: '9',
    imageUrl: '/images/logo/Logo_Image_Main_Moharu.png',
    type: 'event',
    address: 'Addressssss',
    location: 'Location 9',
    tags: ['tag17', 'tag18'],
    activityDate: '2022-09-01',
    activityStartDate: '2022-01-01',
    activityEndDate: '2022-01-01',
    registerDate: '2021-12-09',
  },
  {
    activityId: '10',
    title: 'Activity 10',
    description: 'Activity 10 Description',
    categoryId: '10',
    imageUrl: '/images/logo/Logo_Image_Main_Moharu.png',
    type: 'event',
    address: 'Addressssss',
    location: 'Location 10',
    tags: ['tag19', 'tag20'],
    activityDate: '2022-10-01',
    activityStartDate: '2022-01-01',
    activityEndDate: '2022-01-01',
    registerDate: '2021-12-10',
  },
];

const detailInfo = [
  {
    label: '관람시간',
    content: '10:00 ~ 18:00',
  },
  {
    label: '입장료',
    content: '10,000원',
  },
  {
    label: '주차시설',
    content: '주차 가능',
  },
  {
    label: '연락처',
    content: '02-1234-5678',
  },
  {
    label: '홈페이지',
    content: 'www.naver.com',
  },
];
export default async function ActivityPage({
  params: { activityId },
}: {
  params: { activityId: string };
}) {
  // TODO: query에 있는 acitivityId로 activity 조회 fetch 후 렌더링
  const activity = activities.find(
    activity => activity.activityId === activityId,
  ) as Activity;
  console.log(activity);
  if (!activity) return null;

  const activityType = getActivityType(activity.type);

  return (
    <>
      {/* TODO:overlay header 필요 */}
      <div
        className="h-[460px]"
        style={{
          backgroundImage: `url(${activity.imageUrl})`,
          backgroundSize: 'cover',
        }}
      ></div>

      <div className="px-24px py-20px">
        <div className="flex-col border-b  pb-24px">
          <ActivityTypeBadge type={activityType} />
          <h4 className="mb-8px text-20px font-bold">{activity.title}</h4>
          <ActiveLocationInfo
            location={activity.location}
            address={activity.address}
          />
          <div className="h-8px"></div>
          <ActiveScheduleInfo activity={activity} />
        </div>
        <div className="py-24px">
          {detailInfo.map((info, index) => (
            <div key={index} className="row flex">
              <div className="label w-[100px]">{info.label}</div>
              <div className="content">{info.content}</div>
            </div>
          ))}
          <div className="row">
            <div className="label"></div>
            <div className="content"></div>
          </div>
        </div>
      </div>
      <ReservationButton activityId={activity.activityId} />
    </>
  );
}
