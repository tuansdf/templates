import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getServerSession } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { prisma } from "~/lib/prisma";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};

export const getServerAuthSession = () => {
  return getServerSession(authOptions);
};
