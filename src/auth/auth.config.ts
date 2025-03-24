import { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig: NextAuthConfig = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      async authorize(credentials: Partial<Record<string, unknown>>) {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error("Missing credentials");
        }
        const dbUser = {
          email: process.env.ADMIN_EMAIL,
          password: process.env.ADMIN_PASSWORD,
        };
        if (dbUser.email !== credentials.email) {
          throw new Error("Invalid email");
        }

        const isPasswordValid = dbUser.password === credentials.password;
        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }

        const { password, ...userWithoutPassword } = dbUser;
        return userWithoutPassword;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
        token.email = user.email as string;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        if (token.email) {
          session.user.email = token.email;
        }
      }
      return session;
    },
  },
};
