'use client';

import BackgroundImageWithPlaceholder from '@/app/_components/common/background-image-with-placeholder';
import { DevelopmentPendingDialog } from '@/app/_components/dialog/development-pending-dialog';
import TitleHeader from '@/app/_components/header/title-header';
import { Button } from '@/components/ui/button';
import { ProfilWishedActivity, UserProfile } from '@/types/type';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import SectionList from './_component/section-list';

const data = {
  userProfile: {
    id: 1,
    name: '멍멍이',
    profileImage:
      'https://i.pinimg.com/736x/53/7e/f5/537ef59499259ba707068742f91a10f8.jpg',
    mbti: 'ENTJ',
    ageRange: '30대',
    gender: '여성',
    region: '강남',
  },
  activityWishes: [
    {
      id: 2,
      activitiesId: 3,
      activity: {
        id: 3,
        coverImage: null,
        type: 'event',
        activityCategory: {
          name: '운동',
        },
      },
    },
    {
      id: 3,
      activitiesId: 2,
      activity: {
        id: 2,
        coverImage: null,
        type: 'place',
        activityCategory: {
          name: '영화',
        },
      },
    },
    {
      id: 1,
      activitiesId: 1,
      activity: {
        id: 1,
        coverImage: null,
        type: 'meeting',
        activityCategory: {
          name: '책',
        },
      },
    },
  ],
  wishTotalCount: 3,
  categoryCount: {
    운동: 1,
    영화: 1,
    책: 1,
  },
};
export default function Profile() {
  const [userProfile, setUserProfile] = useState<UserProfile>(data.userProfile);
  const [activityWishes, setActivityWishes] = useState<ProfilWishedActivity[]>(
    data.activityWishes,
  );
  ``;
  const [wishTotalCount, setWishTotalCount] = useState<number>(
    data.wishTotalCount,
  );
  // const session = await auth();
  // console.log(session);

  // useEffect(() => {
  //   // TODO: API 연동

  //   setUserProfile(data.userProfile);
  //   setActivityWishes(data.activityWishes);
  //   setWishTotalCount(data.wishTotalCount);
  // }, []);

  return (
    <>
      <TitleHeader title="프로필" />
      <div className="px-24px">
        <div className="mb-20px flex items-center">
          <BackgroundImageWithPlaceholder
            // src={session?.user?.image ?? user.profileImage}
            src={userProfile.profileImage}
            className="mr-24px h-[80px] w-[80px] rounded-full"
          />

          <div>
            {/* TODO: 세션 처리 확인 */}
            {/* <DevelopmentPendingDialog name={session?.user?.name ?? user.name} /> */}
            <DevelopmentPendingDialog name={userProfile.name} />

            <div className="flex text-14px">
              <div>{userProfile.mbti}</div>
              <div className="mx-2 border-l"></div>
              <div>{userProfile.gender}</div>
              <div className="mx-2 border-l"></div>
              <div>{userProfile.ageRange}</div>
              <div className="mx-2 border-l"></div>
              <div>{userProfile.region}</div>
            </div>
          </div>
        </div>

        {/* <SectionList title="신청/예약한 활동" list={list} totalCount={12} /> */}
        {/* <div className="h-20px"></div> */}
        <SectionList
          title="위시리스트"
          list={activityWishes}
          totalCount={wishTotalCount}
        />
        <div className="my-20px flex justify-between rounded-[12px] border-[1px] border-[#E2E8F0] p-24px">
          <div>
            <div className="mb-10px font-medium">
              <p>전시, 행사, 모임, 장소 등</p>
              <p>다양한 오프라인 활동을</p>
              <p>제보해주세요!</p>
            </div>

            <button
              className="text-12px text-slate-600"
              type="button"
              onClick={() => {
                window.location.href = `mailto:moharu.site@gmail.com?subject=Activity Link&body=모하루에게 전시, 행사, 모임, 장소 등 다양한 오프라인 활동을 제보해주세요!`;
              }}
            >
              moharu.site@gmail.com
            </button>
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
