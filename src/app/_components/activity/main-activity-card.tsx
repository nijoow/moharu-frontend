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
                alt="위치"
                width={16}
                height={16}
              />
            </button>
            <button>
              <Image
                src="/images/icons/share.svg"
                alt="위치"
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>
        <div className="flex">
          {/* TODO: 임시 pr-10px 제거 */}
          <div className="flex pr-10px">
            {/* TODO: color slate 400 */}
            <Image
              src="/images/icons/map-pin.svg"
              alt="위치"
              width={16}
              height={16}
              className="mr-12px"
            />
            {/* TODO: 변수 설정 */}
            {/* <p>{activity.location}</p> */}
            <p>챕터투</p>
          </div>
          {/* TODO: 임시 pl-10px 제거 */}
          <div className="border-l border-l-[#CBD5E1] pl-10px">
            {activity.location}
          </div>
        </div>
        <div className="flex">
          <Image
            className="mr-12px"
            src="/images/icons/calendar.svg"
            alt="위치"
            width={16}
            height={16}
          />
          <p>
            {activity.activityDate} ~ {activity.activityEndDate}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MainActivityCard;
