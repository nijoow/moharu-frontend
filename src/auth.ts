import NextAuth, { CredentialsSignin } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import Kakao from 'next-auth/providers/kakao';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Kakao,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async credentials => {
        const { email, password } = credentials;

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/local/login`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              password,
            }),
          },
        );
        const data = await response.json();

        if (!response.ok) {
          throw new CredentialsSignin();
        }
        const user = {
          ...data.user,
          accessToken: data.accessToken,
        };
        return user;
      },
    }),
  ],
  pages: {
    signIn: '/auth/login/email',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ account, user }) {
      if (account?.provider === 'credentials') {
        return true;
      }
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/${account?.provider}/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: user?.email,
            name: user?.name,
            profileImage: user?.image,
            socialId: account?.providerAccountId,
            socialType: account?.provider,
          }),
        },
      );

      const data = await response.json();
      user.id = data.user.id;
      user.email = data.user.email;
      user.name = data.user.name;
      user.profileImage = data.user.profileImage;
      user.telephone = data.user.telephone;
      user.mbti = data.user.mbti;
      user.ageRange = data.user.ageRange;
      user.gender = data.user.gender;
      user.region = data.user.region;
      user.socialType = data.user.socialType;
      user.socialId = data.user.socialId;
      user.accessToken = data.accessToken;
      return true;
    },
    async jwt({ token, user }) {
      if (token && user) {
        token.accessToken = user.accessToken;
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.accessToken = token.accessToken as string;
        session.user = token.user;
      }
      return session;
    },
  },
});
