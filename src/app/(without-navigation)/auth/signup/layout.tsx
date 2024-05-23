import SubHeader from '@/app/_components/header/sub-header';
import SignUpProgress from './_components/signup-progress';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SubHeader />
      <div className="mb-10 mt-5 flex w-full justify-between px-10">
        <span className="font-medium">회원가입을 진행합니다.</span>
      </div>
      <SignUpProgress />
      {children}
    </>
  );
}
