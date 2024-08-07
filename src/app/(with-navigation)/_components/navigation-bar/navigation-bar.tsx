'use client';

import { usePathname } from 'next/navigation';
import MobileNavigationLink from './navigation-link';
import HeartIcon from '/public/images/icons/heart.svg';
import HomeIcon from '/public/images/icons/home.svg';
import UserIcon from '/public/images/icons/user.svg';

const NavigationBar = () => {
  const pathname = usePathname();

  const mobileNavigationList = [
    {
      href: '/',
      Icon: HomeIcon,
      text: '홈',
      active: pathname === '/',
      isLoginNeeded: false,
    },
    {
      href: '/wish-list',
      Icon: HeartIcon,
      text: '위시리스트',
      active: pathname.includes('/wish-list'),
      isLoginNeeded: true,
    },
    {
      href: '/profile',
      Icon: UserIcon,
      text: '프로필',
      active: pathname.includes('/profile'),
      isLoginNeeded: true,
    },
  ];

  return (
    <nav className="sticky bottom-0 left-0 grid h-16 w-full flex-none grid-cols-3 border-t-[1px] border-slate-200 bg-white">
      {mobileNavigationList.map(
        ({ href, Icon, text, active, isLoginNeeded }) => (
          <MobileNavigationLink
            key={text}
            href={href}
            Icon={Icon}
            text={text}
            active={active}
            isLoginNeeded={isLoginNeeded}
          />
        ),
      )}
    </nav>
  );
};

export default NavigationBar;
