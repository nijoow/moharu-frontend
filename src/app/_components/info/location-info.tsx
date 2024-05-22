import Image from 'next/image';

interface LocationInfoProps {
  location: string;
  address: string;
}

const LocationInfo: React.FC<LocationInfoProps> = ({ location, address }) => (
  <div className="flex">
    <div className="flex pr-10px">
      <Image
        src="/images/icons/map-pin.svg"
        alt="위치"
        width={16}
        height={16}
        className="mr-12px"
      />
      <p>{location}</p>
    </div>
    <div className="border-l border-l-[#CBD5E1] pl-10px">{address}</div>
  </div>
);

export default LocationInfo;
