'use client';

import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

type SignUpStepPathname =
  | '/auth/signup/email'
  | '/auth/signup/password'
  | '/auth/signup/extra-required'
  | '/auth/signup/extra-optional';

const signUpStep: Record<SignUpStepPathname, number> = {
  '/auth/signup/email': 1,
  '/auth/signup/password': 2,
  '/auth/signup/extra-required': 3,
  '/auth/signup/extra-optional': 4,
};

const signUpStepList = [
  { step: 1, url: '/auth/signup/email', typeText: '인증' },
  { step: 2, url: '/auth/signup/password', typeText: '필수' },
  { step: 3, url: '/auth/signup/extra-required', typeText: '필수' },
  { step: 4, url: '/auth/signup/extra-optional', typeText: '선택' },
];

const SignUpProgress = () => {
  const pathname = usePathname() as SignUpStepPathname;

  return (
    <div className="relative mx-10 flex justify-between">
      {signUpStepList.map(({ step, url, typeText }) => (
        <div key={step} className="z-20 flex flex-col items-center gap-1">
          <div
            className={cn(
              ' flex h-[30px] w-[30px] items-center justify-center rounded-full bg-slate-400 text-slate-50 transition-colors',
              {
                'bg-slate-900': signUpStep[pathname] >= step,
              },
            )}
          >
            {step}
          </div>
          {signUpStep[pathname] === step && (
            <span className="text-xs text-slate-900">{typeText}</span>
          )}
        </div>
      ))}
      <div className="absolute left-0 z-0 mt-[14.5px] h-[1px] w-full bg-slate-400" />
      <div
        className={cn(
          'absolute left-0 z-10 mt-[14.5px] h-[1px] bg-slate-900 transition-all duration-300',
          {
            'w-0': signUpStep[pathname] === 1,
            'w-1/3': signUpStep[pathname] === 2,
            'w-2/3': signUpStep[pathname] === 3,
            'w-full': signUpStep[pathname] === 4,
          },
        )}
      />
    </div>
  );
};

export default SignUpProgress;
