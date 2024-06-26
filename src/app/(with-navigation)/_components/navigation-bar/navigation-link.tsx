import { NeedLoginDialog } from '@/app/_components/dialog/need-login-dialog';
import { cn } from '@/lib/utils';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export const NavigationLinkItem = ({
  Icon,
  text,
  active,
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  active: boolean;
}) => {
  return (
    <>
      <Icon
        className={cn(`mb-4px h-6 w-6`, {
          'stroke-pink-500': active,
          'stroke-slate-500': !active,
        })}
      />
      <span
        className={cn(`text-xs`, {
          'text-pink-600': active,
          'text-slate-500': !active,
        })}
      >
        {text}
      </span>
    </>
  );
};

const NavigationLink = ({
  href,
  Icon,
  text,
  active,
  isLoginNeeded,
}: {
  href: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  active: boolean;
  isLoginNeeded: boolean;
}) => {
  const { data: session } = useSession();

  return (
    <>
      {isLoginNeeded && !session ? (
        <NeedLoginDialog>
          <button className="col-span-1 flex h-full flex-col items-center justify-center">
            <NavigationLinkItem Icon={Icon} text={text} active={active} />
          </button>
        </NeedLoginDialog>
      ) : (
        <Link
          href={href}
          className="col-span-1 flex h-full flex-col items-center justify-center"
        >
          <NavigationLinkItem Icon={Icon} text={text} active={active} />
        </Link>
      )}
    </>
  );
};

export default NavigationLink;
