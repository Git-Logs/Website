import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

const { DISCORD_APP_ID, DISCORD_APP_SECRET, NEXTAUTH_SECRET } = process.env;

export default NextAuth({
   providers: [
      DiscordProvider({
         clientId: DISCORD_APP_ID ?? "913266703398473810",
         clientSecret: DISCORD_APP_SECRET ?? "GtKkqo-R3svD7mtdxBLjjQGKXZKtISjj",
      }),
   ],
   secret: NEXTAUTH_SECRET ?? "fa;kjaj;bfp97h34uon58790hfuoh93q5of0h0f3u5u797",
});
