'use client';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

type SignUpInfoType = {
  email: string | null;
  name?: string | null;
  profileImage: string | null;
  telephone: string | null;
  mbti: string | null;
  ageRange?: string | null;
  gender?: string | null;
  region?: string | null;
  socialType: string | null;
  socialId: string | null;
  password: string | null;
};

type SignUpContextType = {
  signUpInfo: SignUpInfoType;
  setSignUpInfo: Dispatch<SetStateAction<SignUpInfoType>>;
};

export const SignUpContext = createContext<SignUpContextType | undefined>(
  undefined,
);

export const SignUpProvider = ({ children }: { children: React.ReactNode }) => {
  const [signUpInfo, setSignUpInfo] = useState<SignUpInfoType>({
    email: null,
    name: null,
    profileImage: null,
    telephone: null,
    mbti: null,
    ageRange: null,
    gender: null,
    region: null,
    socialType: null,
    socialId: null,
    password: null,
  });

  return (
    <SignUpContext.Provider value={{ signUpInfo, setSignUpInfo }}>
      {children}
    </SignUpContext.Provider>
  );
};
