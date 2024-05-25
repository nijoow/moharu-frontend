import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: number;
    email: string;
    name: string;
    profileImage: string;
    telephone: null;
    mbti: string;
    ageRange: string;
    gender: string;
    region: string;
    socialType: string;
    socialId: string;
    accessToken: string;
  }
  interface Session {
    user: DefaultSession['user'] & User;
    accessToken?: string;
  }
  interface JWT {
    id: number;
    email: string;
    name: string;
    profileImage: string;
    telephone: null;
    mbti: string;
    ageRange: string;
  }
}
