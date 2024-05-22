import { MapPinIcon } from 'lucide-react';

interface ActivityLocationInfoProps {
  location: string;
  address: string;
}

const ActivityLocationInfo: React.FC<ActivityLocationInfoProps> = ({
  location,
  address,
}) => (
  <div className="flex">
    <div className="flex pr-10px">
      <MapPinIcon width={20} height={20} className="mr-12px stroke-slate-400" />
      <p>{location}</p>
    </div>
    <div className="border-l border-l-[#CBD5E1] pl-10px">{address}</div>
  </div>
);

export default ActivityLocationInfo;
