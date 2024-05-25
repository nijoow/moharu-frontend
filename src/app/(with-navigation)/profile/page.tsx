import BackgroundImageWithPlaceholder from '@/app/_components/common/background-image-with-placeholder';
import { DevelopmentPendingDialog } from '@/app/_components/dialog/development-pending-dialog';
import TitleHeader from '@/app/_components/header/title-header';
import { signOut } from '@/auth';
import { fetchWithToken } from '@/lib/fetch';
import Image from 'next/image';
import Link from 'next/link';
import DoughnutChart from './_component/doughnut-chart';
import SectionList from './_component/section-list';

export default async function Profile() {
  // const session = await auth();

  // if (!session) redirect('/auth/login');

  const data = await fetchWithToken('https://api.moharu.site/user');

  const userProfile = data.userProfile;
  const activityWishes = data.activityWishes;
  const wishTotalCount = data.wishTotalCount;

  const categoryCount = data.categoryCount;
  // TODO: 값 확인
  const graphData = Object.values(categoryCount);

  return (
    <>
      <TitleHeader title="프로필" />
      <div className="bg-white px-24px">
        <div className="mb-20px flex items-center">
          <BackgroundImageWithPlaceholder
            src={userProfile.image}
            className="mr-24px h-[80px] w-[80px] rounded-full"
          />
          <div>
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

        <div className="flex flex-col">
          <span className="font-medium">나의 취향 분석</span>
          <span className="text-11px text-slate-500">
            나의 취향 분석은 위시리스트를 기반으로 제공됩니다.
          </span>
          <div className="w-full">
            <DoughnutChart data={graphData as [number, number, number]} />
          </div>
        </div>
        {/* <SectionList title="신청/예약한 활동" list={list} totalCount={12} /> */}
        {/* <div className="h-20px"></div> */}
        <SectionList
          title="위시리스트"
          list={activityWishes}
          totalCount={wishTotalCount}
        />
        <Link
          href={
            'window.location.href = `mailto:moharu.site@gmail.com?subject=Activity Link&body=모하루에게 전시, 행사, 모임, 장소 등 다양한 오프라인 활동을 제보해주세요!`'
          }
          className="my-20px flex cursor-pointer justify-between rounded-[12px] border-[1px] border-[#E2E8F0] p-24px"
        >
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
        </Link>

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
            <button type="submit" className="mb-24px text-slate-500">
              로그아웃
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
