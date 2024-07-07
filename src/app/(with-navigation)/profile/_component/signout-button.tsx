import { signOut } from '@/auth';

const SignOutButton = () => {
  return (
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
  );
};

export default SignOutButton;
