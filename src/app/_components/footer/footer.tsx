import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 p-40px">
      <Image
        src="/images/logo/Logo_Main_Moharu.png"
        alt="logo"
        width={40}
        height={40}
      />
      <p className="my-10px text-14px">
        모두에게 선물같은 하루,<span className="text-pink-500">모하루</span>
      </p>
      <p className="mb-10px text-11px">
        모하루(Moharu)는 모하루기버즈팀(Team Moharu Givers)이 비사이드
        포텐데이405에 참여하여 제작하게 된 사이드프로젝트입니다.
      </p>
      <a
        href="https://moharu.notion.site/MOHARU-8c896bda759e4c7f9412d83aa10828a5"
        target="_blank"
        className="text-11px text-pink-500"
      >
        모하루(Moharu) 더 알아보기
      </a>
    </footer>
  );
};

export default Footer;
