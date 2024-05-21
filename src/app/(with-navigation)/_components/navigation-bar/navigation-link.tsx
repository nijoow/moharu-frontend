import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

const NavigationLink = ({
  href,
  icon,
  text,
}: {
  href: string;
  icon: ReactNode;
  text: string;
}) => (
  <Link
    href={href}
    className="col-span-1 flex h-full flex-col items-center justify-center"
  >
    <div className="relative h-6 w-6">
      <Image
        src={`/images/icons/${icon}.svg`}
        alt={text}
        width={24}
        height={24}
      />
    </div>
    <span className="text-sm">{text}</span>
  </Link>
);

export default NavigationLink;
