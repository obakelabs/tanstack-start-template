import { db } from "~/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { magicLink } from "better-auth/plugins";

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: "pg" }),

  plugins: [
    magicLink({
      sendMagicLink: async ({ url }) => {
        console.log(`Magic Link: ${url}`);
      },
    }),
  ],

  user: {
    deleteUser: {
      enabled: true,
      sendDeleteAccountVerification: async ({ url }) => {
        console.log(`Confirmation Link: ${url}`);
      },
    },
  },
});
