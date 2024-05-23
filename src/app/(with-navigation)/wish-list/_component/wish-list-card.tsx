import ActivityTypeBadge from '@/app/_components/activity/activity-type-badge';
import { getActivitySchedule, getActivityType } from '@/lib/utils';
import { Activity } from '@/types/type';
import Link from 'next/link';

interface WishListCardProps {
  wishList: Activity;
}
const WishListCard: React.FC<WishListCardProps> = ({ wishList }) => {
  const activitySchedule = getActivitySchedule(wishList);
  const activityType = getActivityType(wishList.type);
  return (
    <Link
      href={`/activities/${wishList.id}`}
      className="col-span-1 flex w-full flex-col p-6"
    >
      <div className="relative">
        <div
          className="mb-8px aspect-square h-[180px] w-full rounded-[8px]"
          style={{
            backgroundImage: `url(${wishList.coverImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <ActivityTypeBadge
          type={activityType}
          className="absolute left-12px top-12px"
        />
      </div>
      <div>
        <p className="mb-4px">{wishList.title}</p>
        <div className="text-12px">
          <p>{wishList.location}</p>
          <p>{activitySchedule}</p>
        </div>
      </div>
    </Link>
  );
};
export default WishListCard;
