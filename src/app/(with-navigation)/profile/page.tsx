import BackgroundImageWithPlaceholder from '@/app/_components/common/background-image-with-placeholder';
import { DevelopmentPendingDialog } from '@/app/_components/dialog/development-pending-dialog';
import TitleHeader from '@/app/_components/header/title-header';
import { auth, signOut } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import DoughnutChart from './_component/doughnut-chart';
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
export default async function Profile() {
  const session = await auth();

  if (!session) redirect('/auth/login');

  const activityWishes = data.activityWishes;

  const wishTotalCount = data.wishTotalCount;

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
            src={session.user.image}
            className="mr-24px h-[80px] w-[80px] rounded-full"
          />

          <div>
            <DevelopmentPendingDialog name={session.user.name} />
            <div className="flex text-14px">
              <div>{session.user.mbti}</div>
              <div className="mx-2 border-l"></div>
              <div>{session.user.gender}</div>
              <div className="mx-2 border-l"></div>
              <div>{session.user.ageRange}</div>
              <div className="mx-2 border-l"></div>
              <div>{session.user.region}</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="font-medium">나의 취향 분석</span>
          <span className="text-11px text-slate-500">
            나의 취향 분석은 위시리스트를 기반으로 제공됩니다.
          </span>
          <div className="w-full">
            <DoughnutChart data={[1, 2, 3]} />
          </div>
        </div>
        {/* <SectionList title="신청/예약한 활동" list={list} totalCount={12} /> */}
        {/* <div className="h-20px"></div> */}
        <SectionList
          title="위시리스트"
          list={activityWishes}
          totalCount={wishTotalCount}
        />
        <div
          className="my-20px flex cursor-pointer justify-between rounded-[12px] border-[1px] border-[#E2E8F0] p-24px"
          onClick={() => {
            window.location.href = `mailto:moharu.site@gmail.com?subject=Activity Link&body=모하루에게 전시, 행사, 모임, 장소 등 다양한 오프라인 활동을 제보해주세요!`;
          }}
        >
          <div>
            <div className="mb-10px font-medium">
              <p>전시, 행사, 모임, 장소 등</p>
              <p>다양한 오프라인 활동을</p>
              <p>제보해주세요!</p>
            </div>

            <Link
              className="text-12px text-slate-600"
              href="mailto:moharu.site@gmail.com?subject=Activity Link&body=모하루에게 전시, 행사, 모임, 장소 등 다양한 오프라인 활동을 제보해주세요!"
            >
              moharu.site@gmail.com
            </Link>
          </div>

          <Image
            src="/images/banners/banner_gift.svg"
            alt="메일"
            width={105}
            height={110}
          />
        </div>

        <div className="text-14px">
          <p className="mb-20px">
            <a
              href="https://www.notion.so/moharu/71758576975f40afb93271dd95f93d47"
              target="_blank"
              rel="noopener noreferrer"
            >
              서비스 이용약관
            </a>
            /
            <a
              href="https://www.notion.so/moharu/9dbfac8563334017bc6950739a5d9c57"
              target="_blank"
              rel="noopener noreferrer"
            >
              개인정보처리방침
            </a>
          </p>
          <p className="mb-20px">버전 1.0.0</p>

          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <button type="submit" className="text-slate-500">
              로그아웃
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
