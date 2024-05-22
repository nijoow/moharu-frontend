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
    },
    {
      href: '/wish-list',
      Icon: HeartIcon,
      text: '좋아요',
      active: pathname.includes('/wish-list'),
    },
    {
      href: '/my-page',
      Icon: UserIcon,
      text: '프로필',
      active: pathname.includes('/my-page'),
    },
  ];

  return (
    <nav className="sticky bottom-0 left-0 grid h-16 w-full flex-none grid-cols-3">
      {mobileNavigationList.map(({ href, Icon, text, active }) => (
        <MobileNavigationLink
          key={text}
          href={href}
          Icon={Icon}
          text={text}
          active={active}
        />
      ))}
    </nav>
  );
};

export default NavigationBar;
