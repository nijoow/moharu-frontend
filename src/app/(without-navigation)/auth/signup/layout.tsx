import Header from '@/app/_components/header/header';
import SignUpProgress from './_components/signup-progress';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header backButton />
      <div className="mb-10 mt-[100px] flex w-full justify-between px-10">
        <span className="font-medium">회원가입을 진행합니다.</span>
      </div>
      <SignUpProgress />
      {children}
    </>
  );
}
