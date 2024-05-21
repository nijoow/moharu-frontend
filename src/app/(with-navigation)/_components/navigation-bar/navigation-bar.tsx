import MobileNavigationLink from './navigation-link';

const mobileNavigationList = [
  {
    href: '/',
    icon: 'home',
    text: '홈',
  },
  {
    href: '/wish-list',
    icon: 'heart',
    text: '좋아요',
  },
  {
    href: '/my-page',
    icon: 'user',
    text: '프로필',
  },
];

// TODO: selectedMenu 처리 필요 pink/600
const NavigationBar = () => (
  <nav className="sticky bottom-0 left-0 grid h-16 w-full flex-none grid-cols-3">
    {mobileNavigationList.map(({ href, icon, text }) => (
      <MobileNavigationLink key={text} href={href} icon={icon} text={text} />
    ))}
  </nav>
);

export default NavigationBar;
