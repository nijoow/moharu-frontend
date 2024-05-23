import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Kakao from 'next-auth/providers/kakao';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Kakao],
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async signIn(props) {
      console.log('signIn', props);
      return true;
    },
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = profile?.id;
      }
      return token;
    },
    async session({ session, token, user }) {
      const newSession = {
        accessToken: token.accessToken,
        id: token.sub,
        ...session,
      };

      return newSession;
    },
  },
});
