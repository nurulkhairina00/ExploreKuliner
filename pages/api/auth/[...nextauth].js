import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { compare } from "bcryptjs";

export const authOptions = {
  session: {
    jwt: true,
    maxAge: 12 * 60 * 60,
  },

  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const user_data = await axios({
          method: "POST",
          url: `${process.env.NEXT_PUBLIC_API_PATH}:${process.env.NEXT_PUBLIC_API_PORT}/api/v1/login`,
          data: {
            email: credentials.email,
            password: credentials.password,
          },
        });

        const user = user_data.data;
        if (!user) {
          throw new Error("Email tidak terdaftar");
        }

        const isValid = await compare(credentials.password, user.password);
        if (!isValid) {
          throw new Error("Password tidak sesuai");
        }

        return {
          id: user.id,
          email: user.email,
          password: user.password,
          token: user.token,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const { accessToken, ...rest } = user;
        token.accessToken = accessToken;
        token.user = rest;
      }

      return token;
    },

    async session({ session, token }) {
      session.user = {
        ...session.user,
        ...token.user,
      };
      session.accessToken = token.accessToken;

      return session;
    },
  },
};

export default NextAuth(authOptions);
