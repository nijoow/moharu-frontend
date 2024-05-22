import { cn } from '@/lib/utils';
import Link from 'next/link';

const NavigationLink = ({
  href,
  Icon,
  text,
  active,
}: {
  href: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  active: boolean;
}) => (
  <Link
    href={href}
    className="col-span-1 flex h-full flex-col items-center justify-center"
  >
    <Icon
      className={cn(` h-6 w-6`, {
        'stroke-pink-500': active,
        'stroke-black': !active,
      })}
    />
    <span
      className={cn(`text-xs`, {
        'text-pink-600': active,
        'text-black': !active,
      })}
    >
      {text}
    </span>
  </Link>
);

export default NavigationLink;
