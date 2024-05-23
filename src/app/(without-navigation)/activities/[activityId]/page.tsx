import ActiveLocationInfo from '@/app/_components/activity/activity-location-info';
import ActivityScheduleInfo from '@/app/_components/activity/activity-schedule-info';
import ActivityTypeBadge from '@/app/_components/activity/activity-type-badge';
import { getActivityType } from '@/lib/utils';
import { Activity } from '@/types/type';
import ReservationButton from './_component/reservation-button';

const activities = [
  {
    id: 1,
    categoryId: 2,
    title: '대학로 대표 로맨스 코미디 연극 한뼘사이',
    coverImage: 'https://img.vogue.co.kr/vogue/2021/04/style_608bc2c4e9442.jpg',
    type: 'event',
    address: '서울 종로구 동숭동',
    status: 'open',
    startDate: '2022-06-15T15:00:00.000Z',
    endDate: '2024-06-30T10:30:00.000Z',
    location: '서울 종로구 동숭동',
  },
  {
    id: 2,
    categoryId: 2,
    title: '[연극] 대학로 신규 로맨스 코미디 연극 사내연애보고서',
    coverImage: 'https://img.vogue.co.kr/vogue/2021/04/style_608bc2c4e9442.jpg',
    type: 'event',
    address: '서울 종로구 동숭동',
    status: 'open',
    startDate: '2023-11-07T15:00:00.000Z',
    endDate: '2024-06-30T07:40:00.000Z',
    location: '서울 종로구 동숭동',
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
    activity => activity.id === Number(activityId),
  ) as Activity;
  if (!activity) return null;

  const activityType = getActivityType(activity.type);

  return (
    <>
      {/* TODO:overlay header 필요 */}
      <div
        className="h-[460px]"
        style={{
          backgroundImage: `url(${activity.coverImage})`,
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
          <ActivityScheduleInfo activity={activity} />
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
      <ReservationButton id={activity.id} />
    </>
  );
}
