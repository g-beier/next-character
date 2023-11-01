import NextAuth from "next-auth/next";
import DiscordProvider from "next-auth/providers/discord";

if (!process.env.DISCORD_ID || process.env.DISCORD_SECRET) {
  console.error("Missing DISCORD authentication env variables");
}

export const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_ID as string,
      clientSecret: process.env.DISCORD_SECRET as string,
    }),
  ],
};
7;

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
