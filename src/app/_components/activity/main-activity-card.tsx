import LocationInfo from '@/app/_components/info/location-info';
import ScheduleInfo from '@/app/_components/info/schedule-info';
import { Activity } from '@/types/type';
import Image from 'next/image';
import Link from 'next/link';
interface MainActivityCardProps {
  activity: Activity;
}

const MainActivityCard: React.FC<MainActivityCardProps> = ({ activity }) => {
  return (
    <Link href={`/activities/${activity.activityId}`}>
      <div className="p-24px">
        <div className="relative mb-20px">
          <div
            className="h-[340px] rounded-[12px]"
            style={{
              backgroundImage: `url(${activity.imageUrl})`,
              backgroundSize: 'cover',
            }}
          ></div>
          {/* TODO: design system tab_button 컴포넌트로 대체 */}
          <div className="absolute left-[14px] top-[14px] bg-orange-500 text-white">
            전시
          </div>
        </div>
        <div className="flex justify-between">
          {/* TODO: 디자인 시스템 typograph 적용  */}
          <p>{activity.title}</p>
          {/* TODO: 좋아요, 공유 버튼 */}
          {/* TODO: 디자인 시스템 아이콘 버튼 타입! */}
          <div className="flex">
            <button className="mr-16px">
              <Image
                src="/images/icons/heart.svg"
                alt="like"
                width={16}
                height={16}
              />
            </button>
            <button>
              <Image
                src="/images/icons/share.svg"
                alt="share"
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>
        <LocationInfo location={activity.location} address={activity.address} />
        <div className="h-8px"></div>
        <ScheduleInfo activity={activity} />
      </div>
    </Link>
  );
};

export default MainActivityCard;
