import BackgroundImageWithPlaceholder from '@/app/_components/common/background-image-with-placeholder';
import { DevelopmentPendingDialog } from '@/app/_components/dialog/development-pending-dialog';
import TitleHeader from '@/app/_components/header/title-header';
import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import { User } from '@/types/type';
import Image from 'next/image';
import Link from 'next/link';
import SectionList from './_component/section-list';

const list = [
  {
    id: 11,
    categoryId: 5,
    title: '철학 강의와 대화',
    coverImage: null,
    type: 'meeting',
    address: '스템커피 강남점',
    status: 'open',
    startDate: '2024-05-23T15:00:00.000Z',
    endDate: '2024-05-24T14:59:00.000Z',
    location: '',
    businessHours: '19:30 ~ 21:30',
    holidays: '',
    additionalInfo: [
      {
        type: 'TEXT',
        label: '소개',
        value:
          '매회 유명 철학책 한 권을 설명하고, 관련 내용에 대해 대화를 나눕니다.',
      },
      {
        type: 'TEXT',
        label: '요금',
        value: '1회 10,000원',
      },
      {
        type: 'TEXT',
        label: '주최',
        value: '링크',
      },
      {
        type: 'TEXT',
        label: '이메일',
        value: 'linkmoim@gmail.com',
      },
      {
        type: 'TEXT',
        label: '연락처',
        value: '010-2941-1727',
      },
    ],
    wished: true,
    link: 'https://linkmoim.co.kr/',
  },
  {
    id: 12,
    categoryId: 1,
    title: '예술 강의와 대화',
    coverImage: null,
    type: 'meeting',
    address: '스템커피 강남점',
    status: 'open',
    startDate: '2024-05-31T15:00:00.000Z',
    endDate: '2024-06-01T14:59:00.000Z',
    location: '',
    businessHours: '19:00 ~ 21:00',
    holidays: '',
    additionalInfo: [
      {
        type: 'TEXT',
        label: '소개',
        value:
          '동서양 예술에 대해 이해하기 쉽게 체계적으로 설명을 드리고 강의와 관련해 대화를 나눕니다. 예술에 대해 몰라도 부담 없이 참여할 수 있습니다.',
      },
      {
        type: 'TEXT',
        label: '요금',
        value: '1회 10,000원',
      },
      {
        type: 'TEXT',
        label: '주최',
        value: '링크',
      },
      {
        type: 'TEXT',
        label: '이메일',
        value: 'linkmoim@gmail.com',
      },
      {
        type: 'TEXT',
        label: '연락처',
        value: '010-2941-1727',
      },
    ],
    wished: true,
    link: 'https://linkmoim.co.kr/',
  },
  {
    id: 13,
    categoryId: 1,
    title: 'VVIP전문 최예림 도슨트가 들려주는 라울뒤피 이야기',
    coverImage: null,
    type: 'meeting',
    address: '하나은행 하트원',
    status: 'open',
    startDate: '2024-05-30T15:00:00.000Z',
    endDate: '2024-05-31T14:59:00.000Z',
    location: '',
    businessHours: '10:00 ~ 12:10',
    holidays: '',
    additionalInfo: [
      {
        type: 'TEXT',
        label: '소개',
        value:
          'VIP 전문 최예림 도슨트가 들려주는 행복을 그리는 프랑스 대표 화가 라울 뒤피의 행복의 멜로디 강연에 여러분을 초대합니다.',
      },
      {
        type: 'TEXT',
        label: '요금',
        value: '1회 20,000원',
      },
      {
        type: 'TEXT',
        label: '주최',
        value: '최예림/솜씨당',
      },
    ],
    wished: true,
    link: 'https://www.sssd.co.kr/m/class/detail/44409',
  },
  {
    id: 14,
    categoryId: 1,
    title: '아이패드 프로크리에이트 아날로그 느낌 디지털 드로잉',
    coverImage: null,
    type: 'meeting',
    address: '청년문화공간JU',
    status: 'open',
    startDate: '2024-05-24T15:00:00.000Z',
    endDate: '2024-05-25T14:59:00.000Z',
    location: '',
    businessHours: '15:00 ~ 17:50',
    holidays: '',
    additionalInfo: [
      {
        type: 'TEXT',
        label: '소개',
        value:
          '자연스러운 아날로그 느낌의 질감을 디지털 드로잉으로! 수채물감, 과슈, 크레용, 색연필과 같은 자연스러운 아날로그 느낌의 질감을 디지털 드로잉으로 표현할 수 없을까요? 아이패드와 프로크리에이트를 준비한 여러분! 이제 몇 가지 비밀만 알면 99% 완벽하게 표현이 가능합니다.',
      },
      {
        type: 'TEXT',
        label: '요금',
        value: '1회 44,000원',
      },
      {
        type: 'TEXT',
        label: '주최',
        value: '정진호/솜씨당',
      },
    ],
    wished: true,
    link: 'https://www.sssd.co.kr/m/class/detail/44163',
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
        <div className="mb-20px flex items-center">
          <BackgroundImageWithPlaceholder
            src={session?.user?.image ?? user.profileImage}
            className="mr-24px h-[80px] w-[80px] rounded-full"
          />

          <div>
            <DevelopmentPendingDialog name={session?.user?.name ?? user.name} />

            <div className="flex text-14px">
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

        {/* <SectionList title="신청/예약한 활동" list={list} totalCount={12} /> */}
        {/* <div className="h-20px"></div> */}
        <SectionList title="위시리스트" list={list} totalCount={23} />
        <div className="my-20px flex justify-between rounded-[12px] border-[1px] border-[#E2E8F0] p-24px">
          <div>
            <div className="mb-10px font-medium">
              <p>전시, 행사, 모임, 장소 등</p>
              <p>다양한 오프라인 활동을</p>
              <p>제보해주세요!</p>
            </div>

            <p className="text-12px text-slate-600">moharu.site@gmail.com</p>
          </div>

          <Image
            src="/images/banners/banner_gift.svg"
            alt="메일"
            width={105}
            height={110}
          />
        </div>
        <div className="text-14px">
          <p className="mb-20px">서비스 이용약관 / 개인정보처리방침</p>
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
