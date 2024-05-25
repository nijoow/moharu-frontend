import { ACTIVITY_TYPE, ActivityType } from '@/types/type';
import { MapPinIcon } from 'lucide-react';

interface ActivityLocationInfoProps {
  location: string;
  address: string;
  type: ActivityType;
}

const ActivityLocationInfo: React.FC<ActivityLocationInfoProps> = ({
  location,
  address,
  type,
}) => {
  return (
    <div className="flex">
      <div>
        <MapPinIcon
          width={20}
          height={20}
          className="mr-12px stroke-slate-400"
        />
      </div>
      {/* TODO: location db값 확인, 현재 address 페레스프로젝트 서울, 서울 종로구 */}
      {type === ACTIVITY_TYPE.EVENT && (
        <p className="border-r border-l-[#CBD5E1] px-10px">{location}</p>
      )}
      <div>{address}</div>
    </div>
  );
};

export default ActivityLocationInfo;
