import TitleHeader from '@/app/_components/header/title-header';
import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import { User } from '@/types/type';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import SectionList from './_component/section-list';

const list = [
  {
    id: 2,
    categoryId: 2,
    title: '[연극] 대학로 신규 로맨스 코미디 연극 사내연애보고서',
    coverImage: 'https://img.vogue.co.kr/vogue/2021/04/style_608bc2c4e9442.jpg',
    type: 'event',
    address: '서울 종로구 동숭동',
    status: 'open',
    startDate: '2023-11-07T15:00:00.000Z',
    endDate: '2024-06-30T07:40:00.000Z',
    location: '서울 종로구 동숭동',
  },
  {
    id: 3,
    categoryId: 3,
    title: '[음식] 맛있는 카페 투어',
    coverImage: 'https://img.vogue.co.kr/vogue/2021/04/style_608bc2c4e9442.jpg',
    type: 'place',
    address: '서울 종로구 동숭동',
    status: 'open',
    startDate: '2023-11-07T15:00:00.000Z',
    endDate: '2024-06-30T07:40:00.000Z',
    location: '서울 종로구 동숭동',
  },
  {
    id: 4,
    categoryId: 3,
    title: '[음식] 맛있는 카페 투어',
    coverImage: 'https://img.vogue.co.kr/vogue/2021/04/style_608bc2c4e9442.jpg',
    type: 'place',
    address: '서울 종로구 동숭동',
    status: 'open',
    startDate: '2023-11-07T15:00:00.000Z',
    endDate: '2024-06-30T07:40:00.000Z',
    location: '서울 종로구 동숭동',
  },
  {
    id: 5,
    categoryId: 3,
    title: '[음식] 맛있는 카페 투어',
    coverImage:
      'https://www.10mag.com/wp-content/uploads/2019/09/10-Magazine-Seoul-Cafes-1.jpg',
    type: 'place',
    address: '서울 종로구 동숭동',
    status: 'open',
    startDate: '2023-11-07T15:00:00.000Z',
    endDate: '2024-06-30T07:40:00.000Z',
    location: '서울 종로구 동숭동',
  },
];
const user: User = {
  id: 1,
  email: 'user@example.com',
  name: 'John',
  profileImage:
    'https://i.pinimg.com/736x/53/7e/f5/537ef59499259ba707068742f91a10f8.jpg',
  mbti: 'ISFJ',
  ageRange: '20대',
  gender: 'etc',
  region: '서울',
  socialType: 'local',
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z',
  deletedAt: '2024-01-01T00:00:00Z',
};

export default async function Profile() {
  const session = await auth();
  console.log(session);

  return (
    <>
      <TitleHeader title="프로필" />
      <div className="px-24px">
        {/* TODO: 공통 헤더 처리 */}
        <div className="flex items-center">
          <div
            className="mr-24px h-[80px] w-[80px] rounded-full"
            style={{
              backgroundImage: `url('${session?.user?.image ?? user.profileImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div>
            <div className="flex">
              <p className="mb-8px">{session?.user?.name ?? user.name}</p>
              <ChevronRight width={24} height={24} />
            </div>
            <div className="flex">
              <div>{user.mbti}</div>
              <div className="mx-2 border-l"></div>
              <div>여성</div>
              <div className="mx-2 border-l"></div>
              <div>{user.ageRange}</div>
              <div className="mx-2 border-l"></div>
              <div>{user.region}</div>
            </div>
          </div>
        </div>

        <SectionList title="신청/예약한 활동" list={list} totalCount={12} />
        <div className="h-20px"></div>
        <SectionList title="위시리스트" list={list} totalCount={23} />
        <div>
          <p>서비스 이용약관 / 개인정보처리방침</p>
          <p>버전 1.0.0</p>
          <Link href="/auth/login">
            <Button type="button">로그인 페이지</Button>
          </Link>
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <Button type="submit">로그아웃</Button>
          </form>
        </div>
      </div>
    </>
  );
}
